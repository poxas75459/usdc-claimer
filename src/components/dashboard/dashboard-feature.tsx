/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "52MFTUvKuEaVd11VaHT2B8HvUNsEz3ZKywKw7Ep4hngmdNNJkTbbYAWscEaZgyHmJ4Th7r63jatwH6pEHi4QBMnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54etPZUFXbtEXhjpUXaDoncB5cSbVcAvwkQALpPgmCfC8dAgQaTTXcvFKf5Xs8E6DbPmPvQTEVfuLtgot2LrjeyC",
  "key1": "Mw1UTVHmEc2osoFRLsDsnncAuPJd71KtHen5GLMAsu3tMMfFydfazWSQrMoxv2t8CWKTYoQ861ku52Dm66TLMUB",
  "key2": "3evo6BHc5E8Hh7Zhr6ZaSHcWupMKovQXL7r2NTnrcgSE1wLPWvG9j4oHE17dJhdwZEGE6TnLCFT5DGiPTuPDJd3C",
  "key3": "42LDNieZTxpeqKJKXhP9U62u1nKEqVPM1uB6fyCWCCLcQA3Vn6X7NwKFEtDeaCNmQCfGup4Rwd1aup8newhmoR4n",
  "key4": "71WrHDhEL8bPdAHUirrxGrxhPE7kP42oD6YUhHJ3uq1bXf5KSsMdCTakxfu2MNHyoQiLcrm8f6oRyNfar4UqgHJ",
  "key5": "2J1m6afhYk6rx8uosxgR4kuQRk9JvtJCciMLAti96YifhuT9JUirTWLAvgc4fkPgGZq9u2CjJ2iJGTtKH2rY7cDT",
  "key6": "2dw9A7HsikqfzyB4huKWmtHtVQ1KsPHGB9MWggQ4gRjh4vXBJRm5UMWzFeGUix5cQsia17DaugZrPYyCQfDQVbUe",
  "key7": "3ijJoKba149rQZTsmADHNAWbtW96zn3KeyFCXQTFuqPQtVvcSTBNmpv4Pyg9df4CSdXJRS8P78hR7i5QPXC92Zz7",
  "key8": "nRe6Pik3RL9kiGwCye1DUPTD2rdZRRGemp5fYjf64JLCfHmaVgRaqYBvYfsDXfDMVVChUa6qWN3bLtzWpgKG8BC",
  "key9": "4MMhYyzi93bdCKMceUV4PvvMt8rDK8FivtPWZ1K14W5ocmqFHvZ2ohQp58gGmenGAmireXQgpyxB34PyJxMzmduS",
  "key10": "3s67qKfe6r9KoLmgociHJx4taMLgeca5Aon36rZArCRSm2x4uHKXFC17NKQqgcugUujWsoRG5BByPw1mq9n5gVW3",
  "key11": "e3eaXQKwHUaw5f6YfJG4tkNmZ8Pbx7vQv6tEZVCPErNuwVDJ6hWX7Qws3YNnowFiKexLMXJGkggGfCEvkzYExnE",
  "key12": "2S3UBrAp5SMJH61KeTpRwAnVT3DoNp1W5kK3FnyiPt614ueVX19HZFT9FEenuVqz5o67oo5MdBqkVeyfbpKWHRyo",
  "key13": "4nvjZZZEB6TKo48VqgkhGiNZobw8EApf6HA8bvnWuMKqVYHqd452xtdrzcxvxk55JF5HFaH68zQEuzvPhmnaQj8C",
  "key14": "32nxYHG9MqtFZbtGDPmjje8yruchU1vH7bfZU4Wd5C8re9cHaoMKSSRZiTEJ4GJgeCvBjKhmS7ekLSFpPX79wcHi",
  "key15": "5rbhFWHupVAYtoBK7gcTyJfTwbRidVuBjfTuXEguUBR9HBRvr9yR9gVaYND4UvpZ4HKtuisdTCyunVz2uEWGLZ5L",
  "key16": "HCG1xwmbzPvXirJNy41AJX3FSiu9QBZvYcShc4GBhZpBG53cPc7au5zujVPi52MRvLxQFycfGTL4N2n1h9niw1z",
  "key17": "2fkLA4ZdFV7WcHETypjT8R9jiVxw4sCe2MTExtnStMVVRk1UP2T8JAcANgXdqTZ3HhkrHGyRoVdbYQDDCaBVztUg",
  "key18": "265UZtbNbz155MmV5M5uKpQAmmf7dcqhaNDYevPUs7Mgw5zHofp4ecSs8NE7p51FGG9V5FPfyZz5gGkdVzi4bq19",
  "key19": "4HsgrT1gqFaGUQir7kVm3wzd7r7SqYCPp9Bf5rHY2CLAKbdDh5iri22PiW6RhRDrFQN3SE8XrCAqicpAVJB6k8LK",
  "key20": "BAGVJH6mmm65YKZDDKXnSvwmahdkYpf3QatsPWP7yStmUZUQ851k8jMBXZXYQKyaABjYGtSjrjAWTeiX8xdPyUL",
  "key21": "2s1nCPucnGD35wCttkeBSccRYAJANdHTo9UihqEtLwSsdNbbuQ1u9XhAF2fvnDrNKDbgPwgAXD3XFGEgwX6sjbwv",
  "key22": "2M9BBDDNSSjVpppY4qNeUfCY8V9xq7tZ3PJYMwNnZYVEnfozb77LiQAq4xC3BbkMPXthfdkHrpBMJDiyDSNC1fV7",
  "key23": "2xjhHszvERWDWFb7CThe4mjHKjJRPa7yAYLn76XmxkBWydP3A249bQgwXi2dV9vZ6UToaa3QNW1fRTeKmnShS1Qj",
  "key24": "4agSaoQN1QHHyF1wkk1gwy83u1X61HJnZ2Bp1nvAxjhbnewb29rFnyffBnkTDdktvpMyK4wMAe4MPWBpzRUr91o9",
  "key25": "3WV19zhDqL8E9f9D9ZXTdyTAY47UPha8PoXR2KMSF8VXPMS3gttZ6YEJ837soPozq89X6ui4EHxYjyNTnxvLCjTo",
  "key26": "4K2YbJAXofNPLg7iFKSynFPKa4HjjKDorenxcth9Lop9bUQrQ2FTMXR594Ku4JaGFc9cnSEZahB2ki1hQjyJXSes",
  "key27": "4W87jPAYiC9cJfKWtXKWTdibZNY7B3U9ydC8SvpGerd1HdvSecXiqgRuMFwaaRYfFj5WFm4w2ENCRGvkFeEjXUej",
  "key28": "5xYm5t69HNXnd8AEQUKDiwdqVJcSQ8MgY5r9YHpWkcxRuMfem81dyEwDVVjJ6xbp893cci5uUn129sUYQ88Y7gxB",
  "key29": "4TgBFTHDfeHZnR7bgeM2StPGsmwMFSJ8AhyzRxnMAuv9fb41srXEFQkGYMtsrh9UcUMNzitJJd19zXBtWoQQiDhT",
  "key30": "5wsbbu8ver6ChmFL8DKMdG6BNgVa7AWdZyKpcXgf1YPvniJMTtRjfdQ7JBC5rzxeJwRnoTdgL32nBNM5XUqvvG4q",
  "key31": "SNWMaxKJH5TXVyDYyVQoo7nVwoRNjN2ujk9GyJcZQPvqmtxxzxTQazHxaD8DzTjhc4ffCdoSFBdvM17STuEqPH7",
  "key32": "47KtcREoAzEDSZPaKmRAd96M8ehYAKmn374cB8JnL9K7RA2JVdWicQJs4GY92SKCE6wE5dtn3vyMiAevmc3FpKb3",
  "key33": "5JhJGNwrvtrMZH5sD4AeTgRMfwYXZUfW3u7q3L1bYgZE3zxTs9mwamAX5LjYA7GuCAJXc374Nug1ARWFqR44miej"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
