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
    "NGkxRp8qUjh9QESvx1Q5zA636uQMzw15vbfAfeZUP4Ctb55a1BVaZHuhYbksFCD1bkVhnq46MNCnJmkX7VErm5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngpdGd2NMkTVug1dZLJDR2Qjt7mNXDdrbq3WEwXRdxoRuUaET8KhxySE94pnVsQBj9XyurXhDM8w2LGwdvVp4kA",
  "key1": "xQTyStNsn56nacxhWWW7C72ZpWvTy5MiFLkQqz22DFDAPsNFCDbQqhLLgzFzRz199ivcjT6RDpME1kiGQBbebSe",
  "key2": "4n2sFqZPXdQeUceFiUocsd2uHECCwCQQdAbzE9KyqUwUEgfEJ37ZfGUqntRzarBx6euKg2Qp4QTL4Gb9WBAq5Mm3",
  "key3": "4dUJug6Pvwt1BymsZqPViuNqP2iT9Vbg1m5ySQcS6aVD8CagRomta5XSzYtVywaPmdruP54GxKrR6YaiPDDvzaGB",
  "key4": "vdGfHCrZYWB6f91r17M4DzBCJFRM1MdQt8xr5tJLQuqAf5wARokV4HUzeY7XX7XnnpbxyAGCYKNopGsrq6GjqzS",
  "key5": "3GNHHf5bT3DryPYRKkRMqkqePu46cNrBnQJmfKAGbvb3jegtS9oCeSC4Kp6XXCTzNorQAvAKSrBXjEU4y7SJfycF",
  "key6": "5J18wSovqTqeNYwcyBvhit3uSxipv1n7kYhwEeBTozDAs9rt6vMDPP6kiLrFQSLibXbaqudKskKaAJqiiSgovWYz",
  "key7": "5P7LCsU2MPGkVGA81Y2GaZbocZpHUyyiqgwcTadRASbugyVVKobBADJkdUQ6nSKgiGybyV8js48FYf43yQDyzdGh",
  "key8": "58UqQ79ygDogs3A2Zo1YLy25r9AzUpWeKg4wuTbS6UZmXt4EN1pmhZgwNqjqxJPaSCy2eg44HQ1Sm2a2xHfUYNtm",
  "key9": "2iSDrWowArWEz2tXdLrNTbExdnQZmNs1QfKxxWAomV5yEaBioqYz8e4jjW7jCqZq7XQX1bnkmjadcNv3BusPzTeV",
  "key10": "3Ni1eensmWUACpAgyAWqwrNyf3TxVH2RnSnb3FgEkzwtJq3kMtbXfagHsxGPnznECryeBsAjwCSEwJitaqdp6Wut",
  "key11": "egi46ZHgE7Pi2J62qi8P4bHic9BvfWMBuEPgSsKfMqtyJowEZY94CoUV3vatmG1nZBjFcc4gNnA5UMzvKwJVzKY",
  "key12": "9Gi2Z6znj7VqkMYTTBSsTGFC4EnWnM1RTz87qPyCQDtWiRo3si6rh8rN6SXVcPf34GGqj1xWT8DMChPfat3Bgrd",
  "key13": "554Te2Mgt91VCdiW4NBUB9rCX8AVk2g1nwwBhFrcmTVCH7iy4xALjshJjoK7RK9p6o6BmkcE3e6nBFGbRp8DVXQb",
  "key14": "5xCZZXFYoqa3c5JGt7mkAegq2Zw9zCkMCprU3XB33DwfCZ8SsqNghByzNYPJwucc5c8LKxZwMZWhZhh9sHfndxyu",
  "key15": "4fgYX8y8ETyG3ZLGrqKb1cfvX3d9SEw4JRwSvos7qa7XCNUMuGahHJfoXpUZF6ANBbRHzDGcN1njrKijQ5GunoAU",
  "key16": "2p9kDSt7FvzkocJcAN9rwXdLpUV1RGGJBPupiMAy68Evf9VhUTureJJifLvWJJ15trAGfDyGySoVTy3fdhRcKDLb",
  "key17": "5nyLUwnoe4kKpPWsjpv2bRNdvpwYnWm8M5rxWY25aHF4KMiYJp5o8nByJivGPbW5TDioAEFXKND9uin836WLLBTW",
  "key18": "1pCw1po7V1g87y2TUqbi1BvvZoy24xho2c6SLeTz9EnVhba3vSsu4BK4RegvzTLzXr5Xr1Mj8yufRt1V3tLMYKM",
  "key19": "389cN9dhvZKUC2RLqLchf9ti3TUV2UyLJzL9MTXTyEtU4R58wNegwLxibXoxw5VYmLD51D1yg8VTHomjoYc6uhba",
  "key20": "4A8ms949vVkRT3tMKRev2rdXaQSt8YAVQB69rRE1t3t2RKwN7JBaPkkRUEkF5mQFUsEDnZG9L7Emp4RmTpSC5Zo5",
  "key21": "5rJyy5Xb5ni81ErUAK6Lvb8AfDSgkurs9P4Qa52yZqYymPVtgrLkMe5nvo7nXAezmFqwfmcapm44gpJPhqErq6p2",
  "key22": "mSzbeCKW1XjsTMg4LNrpguh3ms3FBbRHMQuV9o281jKxBLK8GogarR3cXkL7q6afvbyyrXGAgLpVbeHSvWbRsdW",
  "key23": "2VisQ4GMC27G4scMRTS5FHwb3C8jHqkRUkSnpk3g4f5FEaBc8Ygrba1bYXUNmwWDAwUW7uegWwLzM8c8FY5333t5",
  "key24": "2qosktKSNiRz8VmXh9bZyHau6cgK9C6XswhkfsK7PtLg6AYADwDoNmPt3Eu6BCTtA455wK8nXVj4CjQNoVwbNe8J",
  "key25": "47SSdLqhJhYrA1TU82U6sKwwnr5k8LLFwWc5WeoAzHogAo2z736pRT4v3KAwvAVQushPyp9gd4tbnC4zQZrZeeyo",
  "key26": "31pagCyMMzKjrRJeuubpKxYWLN3Mpzh6K8XTRyp4ZE6jPETWQng94sgyTm7jG3JRXzakSRxBf2Q6GpcjZcxvKAKN"
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
