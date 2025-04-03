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
    "2mCwZq1SLgWj4DxPRtr3gmc5pciQAVWNkQrPpRawXrrpNW9RxxWqXo1tgbuKGkGrCtDDaeDkB2bEBPW5XQEpYihe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqMoeHM95Et7WGidCKduqaVLLbQ5zAHHbgg25VjKxwutimR5ysweUgkV2B31qQsydyDursQw5Bmr4hNjqhUhfvE",
  "key1": "3NM8xWoQmQsmuhxjdFai1eKui183uNuYuZjcfZnZEVkfhJ7Xf5RBZKGzYbGrxEgrxLbJvFXq9HpMQNLAvU5rdh33",
  "key2": "5vRjXiDPm137kHVSEN6QXcfnv9dgfaVivQkAaBQgYQTEfqszAxrAf16hrYe2CnVDK1TYeVUF1W9QSxbLwhcj21aF",
  "key3": "2jrPe8zeoJpGTbMT3CmQ3hCNmojZMpMfqzgUu3TTtWT31wgp9cjQKvZ1oFoxh5UDbRhFjM3eLxQyRf4X6tozddqJ",
  "key4": "qLMZo6nAtsNGUYe6soN1Lcui7iDWhgd5D7Pk9pagZVc2hhW8iKe4kyYvenY234jakuPbnNFr8HZ2B3NTVMGKV4R",
  "key5": "37vNAs5qU89skriXuyf6gHsu1VHwXxkWjRJ9TpxUszioWLKsLpgYwFuM7FTY3y9VE2seRc5BJrpkzLxrxxQ27CaL",
  "key6": "5X5bejVrzFmf2QxrLv8MMc8TCXWKAnjn1FS4wRwK6ap77gooZ4HQCcgkHCFG5zf5d81AWne2XBSQ1i6GJHzRDvDq",
  "key7": "g8rYsdvJMw1RpeGqyWKtioFgRe4cG876SpTJSNdhtRNBkgmDzWc1FUwnsuXCUALHF2EBEs218FpkKJCgKMiRREY",
  "key8": "3jqBaSvS2ZeKuYKw1gigm3DUEFsqGN2YQq1gEeRoioX1JoaGi4kiLYZY96nQ8vHvH9toWL3cMoqcSCvjC8euWRuF",
  "key9": "28mH366iTPJNQtPcTF63Ae3511Df6e8FiQ18DTPnyQoeqmt3dZoGJXFwRFAztx8aHhbLbZAAdxu42HZ5iZDrAYF3",
  "key10": "2BUtJLVxuTmpjwvmBP52JMgyoQ7uSYoTTPvYy6hhu5nnTcq3SF3A8UcBBK9Vby9VPwKQ9FKYBApNkhz52oZ5rEKQ",
  "key11": "39YSn91BLFYob2cDy7HqrDa7mBSu1gEQy8CEKt8R5kj1JLiaZHZQGa6oPaSN62ksfjdJN8aWpyxHRRu8xkojcD6r",
  "key12": "35D3ynwT74TnXpgET5aRdjJey2R7wDATQRJU9gXuvEaUncy9qsbZ9JMjK8ZRtCXDVyJWDLX49DKHBWd4hrcWMuca",
  "key13": "3tMWE9cfxQQyUyqFYzzLyhUY9cg71hwz7aWmEV7K1XBtHaM7aEgY3yvjuXqwj1JEba4vYbLz7cfX6QGg76smJquC",
  "key14": "2Aa1QmQjXJTP3HTojqYF7ZeYfYxoLRvFPi9jnF4DiAAwZNeG1USomhomyCB7xtPLpnBWhhiAzdA8dWmir46VWXBW",
  "key15": "4XsqmQUmRvnVMWpKPPafrJqtZCmYu3nBSMVpRahWfcGpGbYXij88ead2x56DDbAJnpPx89F1HMmY1589niMgvdiv",
  "key16": "5JBwrj42R3zUC1f8wxkNtuib2T5YvEwhKb1CuJ86ABU2vDq9z6YMNgVcXU7G7GTCxoXG3t8he3aoVCJmq6aqXwk7",
  "key17": "3LxBHX6ov1fXzfYoQWW7rXUvMMPTphTxRmyFUkHCSnZMUZNPwk2QiBxUEQLRZo4uhdLAY1PogMdKEfbVrRvi21Ma",
  "key18": "2E5CRYdQcLNbNxehWTJKLctqo8ZBPSsaaQEne6k1KruBjiaB7eSQHoBfywhunQydTD25wvMuwN1qtMrnyq81Bgra",
  "key19": "Qa7cnD34c5XSEpNUbyeNmQYZDc3mQdeSEAswZJt39gGHUR9VCnPy36dKMbgBtzb2ajXYEdoNsJeV6A3vbJSjzeQ",
  "key20": "3rpbXEwUqhMYgZSfLGD1iFGeujvbzyHxGYYrhtoSNPTgTqn6cvEZAedwUex8UJjerHTgoQuS5TNrW8x5XxFNZNY1",
  "key21": "2tLTFypSyyCVJM7SiU5GKkoh2JaXGKf8VGv2GwBhWoiNUToTnbmgWeEpttLCqCcjJiVesewEp23gbdYaPGAMJhQZ",
  "key22": "4aTxGh76w2qwzuVUi7FnevsVfGFoZARrg76aYDnccckbvyXxskmWJjp3tvjcjCEhZfnhX6RXcd3MGYk3rwYMHEgn",
  "key23": "PeumjG4e39Nq462WysUuUxWJA7ktyd9cEsV5zGHkYHeVyBFLoSG73XKHTzinErsTDYRrQ6ryJTedsx7M5QjeDwR",
  "key24": "65TUq9srCSQ95tirosMbZxRGyAA1inVd1df8zs7Dcftqz1ZKSv2XCc4JDNrVHa4TNaFe2daY84Jupsm3QEZdki1X",
  "key25": "yqgaNWTeTD3SxsKFKfPzoeJ7JU8uhC95nb18WyAEEQr2fp4hbEPnmxn9umLLYAMXvTEnUYwXHwh28e1WKhdWX9U",
  "key26": "4XcK4xyT3a5EuBCyUh3oD5EMTZnfkSVRVmXiiJ9rH17cR6H3PZCE7qBs6cituRB1xAureDJDHrqy6zNyt4L6C5kB",
  "key27": "3tbQ2TTQGL7vHMcYzWS6U7Zwx2n2eDbZ5SrHpBGVcTBzfSypmHj6K8A4HbAv8HBDv2H5834gTBguqLpMDo9LvmvX",
  "key28": "5YxicLjtjY9AZ32xPeU99WW8VuTuDpFc4kSoUhV4ARjxfwPeuM9rKvKPZdBvLdF9G7oEiErgf4uRst9mqb465TbL"
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
