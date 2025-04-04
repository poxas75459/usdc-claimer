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
    "QK5e8oPRY2sBxXsdwRELgou6zsXuKUnfe8dPQfk6qQTktHcbVXWXX5mBycgXqbzwkevEwB1owxnmuC6jiPNobEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55e6VB8GcqmjqSauh85syQTzsHheLM1rTVhDD9c7jaurVQFMMVbMiqJjQPBGKc47DZmYJbAeAcXGtYMCSE369ys3",
  "key1": "62yzuAgBcJsaGUjmh6L6ufMASMd64owGkhNHmkgLLPZs6CBNvyrtgHg32681puA89p24HqcneokCbo3cgjYsJDEk",
  "key2": "2iwpcDcy2gdQjLQo8Hs15gY8th84TeR12fi6Mu55CyraYRZ4pgHh7FRT5XPALsy5RgR2QL6n4zqntJDdGundCHL2",
  "key3": "5jYFL8PXKAg6dr6PLR3gdM1TGmBXGH871goPX32dn1zJqysfcZgCs4oSCSYwASVGGY3e6irdrMXyq9FbWLQZAGW8",
  "key4": "3FoZ2gq8FGwx2BsmGXnNGdo2Cun2389X8NXp5ywkWrAycqUVtuYyFBpwY9HLJaMELHquXXFKkbtyCg5EKuSX1QzL",
  "key5": "5R4NmMWgKjzXvARtirYHByexPcpAV7PZMbJSjL5ELL6vi2YmcWTVHrLPrBZBsEyGT3r93sBNGe3VAjD3vgrDq77k",
  "key6": "5sj1Hy1GUEB6MTPTbpAtejGsSJqFsyWzSemEPnTcunZe5dcAWBUYAMSNWPvSSY4E5mwYwy6ohrEePeXCRNog2uEG",
  "key7": "2HRH3GQUCyr3tZF72kaxRqxBGb4dWAxpB4gxh13wzUWkdNso3wfLnQsaBr6gB2MYUQ73ty86Lz7jMzmPoxdN3oUj",
  "key8": "3inTPffYRpGVmM7hLPsrB6NF7wnoEy7Kjc4gxmB9ut7xiUkkrdr1ApvhnK8cUC9zawE9dHrpRmUxRas6kwohSmV9",
  "key9": "3Rirnu8Gc6vbnmQgWnLeiLYV2zByHfQFmWnEJjeitseJS43R7ZGXxACAZuW7Z8FN1kEcQyEdv7szzR5rjjtnT1J3",
  "key10": "39aCn36hLGamnVek7pYFsgJSrzaSnuvnUCQt4eoNXwSj7VtDMKMP96GgGXAhRmK3eYnidytYZznAUbQ8nBzSrdD",
  "key11": "4r4jtprd6LPeqHGmA4Hj5R14Qm4pqst6EFvvcccVHhNjxV5ETCWiEyfamitthksFXd7fYsccgsmcGYNJnCj1j2y2",
  "key12": "2LemydmZbRt9iLFbxvJgTfkSaKzyEJoEDjVTGea1RJVeHZ2zEXD3t4sqHTwu3TpPPmCga8bJ4r4UMV6rswXv5VHk",
  "key13": "eQgynj4TaVvSnX1ewkZjznH4M17njLPLvvyJiB24J4EBmHBbNMdGfdswCi7MDrTVD16VAqV98zqg7iH3V81ZUMm",
  "key14": "3NBe7pyVQsq3UUGr4dAu5XnnRw7gAtTaWJRSoPPJg6vf7Nqoy8ayTd8T9wEu9TK4gvGxJKAZGEoo4ny1R4iNcw4Y",
  "key15": "2Q46GkM9bfZRpioA2fKxCSebAurj7KCwRUWaMVkK3XA678VRDxqTtTCQDA5wYZTPWUQHWBeGHYyRqiwaxNHM4nQd",
  "key16": "4D7d9QbwCstmUr2wuxpjtZtyBwgAw5R6JQoUrCuPACSLWzFtQdwYn4EHrTB3cWHhck8Tyqh5uhAQzuTv65MuqKQN",
  "key17": "5dNYr83P4iBgt88DCTvDYjjmZFpYAfhKD3LBZZTEdWYFfD5SvUUxuqHsrknyG9kJCk2E1AydTVdrJJGiq831iwjg",
  "key18": "2jR2KuD9p6C3eHXg5mP7pHFP4EqSywLH47WthzfFKb2XwbmbxuxajeRRCUi2CFRrsNXkgfKt8x6b7hZbR2txu57A",
  "key19": "5AwW4NVSZajcVWhRvk1gqmffk9KMFGoCDqWk1JrHsRe3hirUYuBihWUNDdqczDagTeG4Mp2XNwYA7AiCUQG2k9Y",
  "key20": "5sHkhDwLAcSFb3k1EXnf9KdBeP3jYdXFtEi6fE1S9zB5gLUD2bJu2TdnoV4uEDAj75vKJJh55ucC7VBjCdWnpbA3",
  "key21": "RSDFKb8vzivudtApFEEPMSvUyn5bVoice9SgobqvZY6fakCyojM5kDRmXFhfnEUD4XpqQfRBJo8Tck2xutzfyQe",
  "key22": "4AVMnzYpAtXq4oXFfhvWG5zio7zPu9ZjoCjdqFhR8aawjEQFKL8G5duBsSxph77jexPBf1yAf8AteT6bgpo1sBS1",
  "key23": "5wmMvNVMfcSuYkre3dXW5h514GZN1nfaku7FcLRWScs1ckkrj7nNPBP966WoogdGfZLLWLuKfZmgeQ5EiYmFzsgz",
  "key24": "PNQjkXqn4zEtn3XMFX6MJFa8XC7rFwKKvVyH3A1gBjtMcRLHt3zGzK2RwWPW5KqwWaFQfZBokPQoWdTGsfyMdgV",
  "key25": "2iVkTw3JKozM2WQkW3ssLxkLCvoryN4hoXuCkMQM1MmaRd1mwqFCB89SoZ5Ybx5LRpSdkTEL53osBDzKGNi7gAV",
  "key26": "2escWewZK8bUAchrdWHCeCioBJnnPua2AqeGUN8Jfep5pLSwd3imXbcDCpPvvAh8ceNTzBnqK58o2Bnc5xJ7teQD",
  "key27": "47R9TTExvFuW2SjJThoPpfZCiTezyYKRSGGrqvh2YKU8McxebPZm8eqjs7LCHQhdahMG7uvzc1QCcK4wkrSEAD4s",
  "key28": "4kR7her3ej9KPXBDhdvekDu3oT2LqudaDuLR667XKUrSBYbnqJ7YHCyAD7GdTXGsXutQmq9AVeiUPrC5tV1fgH48",
  "key29": "5spKye2sWBvR7co8QRU3nzqQEfQE15YscSfXef63R7koQJgZqVsnqGBAv71FsbbgKeNEXGg5ngibnna5wwNhLEHt",
  "key30": "dcxiZ5SmwVmVBdt3TKFdXaqY1fShokkEWieLGaNXhYg68tSjqLKTGFuFuysLThAvCLFAM9R9gKNPbm8FVVsRa4W",
  "key31": "bAhWicSGMoHcgqpMWXxWMxNvg8EqHZgsHDWtUFTqwwh6AEDNfpjojWNKieRJdVB2nvjWvTCbNW3EkpYKgzkc3FQ",
  "key32": "4DAVj3mQquiZhL2gRq7pYDsiautEXjBGr3FiWPmAFuUxH4gvqjMk4VDBDANhDzyNb6HDj1jqmLVR7FaMNAxrMpBQ",
  "key33": "5per56QnBPNtDgGNJhCdEYpw25ebMLdPbNMoMw6jMfeQ9dWMxAuRhSxw4p3ZuhNjiyQ2dJVMgSfCsLfUrZARqo8Q",
  "key34": "2L27ZTkfGxNsTYJ53S4XSEZ8ab6gMHNYeen9fGfABJ7z6miH5dTKewrTAkyYj64M8gjgJzZdMhFbgqmaReCeGRJC",
  "key35": "2nCc1q2MzzpP78PSiSBDZZT6xagtx7tvFfNwTqKBhY21HjAhi4zS9vwUuCPDjv7APk2DFxsjK3uc1RurbcF3Sn1h"
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
