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
    "iCX279mZb3HNrTtDUuq1eWvXngT4yb3tyyziFLYHNAVpZRa6j7QkisTedmqwPr1HB85t2ipAVV2HQpDDqk91Hdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xdn6FKf7kHdCaUtpb8Uy2gu5n6Tw7QKyNu2f8YfqDujmfuPb7npHRYZVxfG7tLknG4PoTS3Rqgz74rxzYq3gCR8",
  "key1": "2fTQMz2Ey3Sg1jmiECUYQRgJZomEhJMAstRuKfgM4Ao8WNPaXuhhch5KVAjvSYzHKVE9Rr2DjFb2p7jVoi84cqF",
  "key2": "3hk7f6NXYdmjTBiAsfsoePRn8gAjU47yzJEs1SCUVCjwpJwMYGhinCUn1XoBdgMLukdx7QVHq4WtDMY6nJCsKpea",
  "key3": "sGMf7QdqEZMahVbWiyrmdoyHxkJBvgYbSZKiuY4A7Swzci3Nv7UPFtn7eqXhFzM6aRdQfYeH5s5xJNZyjgDCRP3",
  "key4": "48Gqz6FPuR9SPU3meKgnDwK7RdSm68H2yANSAbPJVNLDCHScpkjFgu65etLJEAs4fn4Rtm6EqUkEZ9CQ5PRRywir",
  "key5": "3HCsCFJ3HkLDL5J6ve47qPujp3AA1x9JwpHMbrLhZBMMqNLhkGESRYVztQyfrWBDoPFVnQ3UZebihknSs7xcXNeU",
  "key6": "uSkcBgaro67pE3SvFVJCYTSMVxoNpPxdExHuZTdZrRSvXYcCMN5SQWb3uCQPiJ3THoWK3Pe7LjhkJ61DeomXctj",
  "key7": "W9wux64pRpwJDBTkMScbZHdsreRsntZvFSbyHgUqy2NYH1mzreGfAHdBdh1npPAhCzDfLt9wxCT29KAgVbvYizd",
  "key8": "2DcJ8bV6DjiHkag2iNpAU9nMjkgaivcS45W152i8Q5f2AhShmYXJ8TTMQcxxAy18LUJ5np2UiSQ8BYCGrthSjZW4",
  "key9": "22HTJcYmCASJWuYCveCzGPPWPBqBhBrdq3nEqMx8ttZhaSiSVMVAxq8MppDEEDRY8uVQjTub4WsxJDwDVryV1GTB",
  "key10": "2e7maaTSc1zGW7orXQkNFiSbX2RKLdkYr2cbUNnKRnLFTwT6yGoet9kurDQx8eXXYU7SVMC3pS8mrEsggq5MJoVE",
  "key11": "c4QVG5DawDp4zkduRPTv7CDAUHeaNKJF5XiqXHHwqph5bM2LE5vzSajnwS9vtchiCksAdT4Mimqip48jaDTzT4s",
  "key12": "dnWTU8jZnYJhexohHvvmAmtut4otWDgVXChFEAfmRfxczv7w6J1fBNhq4aiDrLCnHYhMotUBMf3h7wLKPTd5grH",
  "key13": "2X4z9As8M4NxUB6fFNfBPqzjj79W2HtWi5op1MrRS5J52mQBWCtu3fmFoCP4Lwbg5WQeJ4SNiwELnhS8QqeETZXS",
  "key14": "4WkkfRxpcq7N5z5N6nuw7W8gRzCTQM9CNF4pLa7tycvMcmjWLBR4qGQJ8VigeVRao4GpZ25AAo91SVeUAs2EZrBb",
  "key15": "FP4od6uXypaDzZH6bt9n7GVw1sQULBubXxtKzfdzAwoqhDowds4PSB1fEeSwHYLgFij6LwVcoF8rksx19DmjCQA",
  "key16": "pBUDDAMWqGTaaNrZ3SPNoznoo1y7eDaS9qD833f3wnsoW6kJRk4wmUXEbnbeDf84j5yvNfH8GRtqdfToBaQ85SD",
  "key17": "5vbUkQBHP5AEfNDGnscTZRZiyU54F775WA8dS11zMe4rk92R3xB7JT1S3m4rGa36hsiCuzFitQgPHvBLskWkq4Nf",
  "key18": "5MuGqnigV2vzuyoMc3HrjQb18qEQNsR8WJjGJnEqNWSP38zpMUeDdr9tm9UwbU7Zk3prw6WvjCdDJttVsvCy6MxJ",
  "key19": "515C3rBDdkwp3TnSxDhZyJuV5poMsnEcNAWJgMm9ZFUCHLYcbhDVUaqzryZq1Qzyt1xQk7YKstVG7M6YJ6dTv2US",
  "key20": "3mb9EzhQrh4k3KXssVbcLrRC7tWXRfsSyreTHZJSM65ZtCK8yTamsTXPbxd6gbNvKTmNNKibaEjLjj9e6KQG3VEd",
  "key21": "yvMspPCyw4VpJaPxZXzzuBsTGXS3vTeJh1hoj6AWZiDjZ83uW5ip4XAdHP7QNRdB8uLmNfRUDSS7CgSgrYigg7P",
  "key22": "kazpLRiL4hunhCaWstiqtQJJXC2JcJ8SAb3nevJ4sLuGZCALjMtjtmQPqTJSfPMr8azK8nnzSnCjLqv5LXnkxde",
  "key23": "3iNFhixhCTEkcNzaZH3YzJVVwaDSfj39KJkFuGNwxXjGFbRYmcuqF8aBFZgKNLjfPNyZ9KBLdXp3dytt7XHue1NK",
  "key24": "5uHmfHtDJm2WPntEiAMCnaakQXkKzME3QRAk9dj2WJ17tnuoq2RQeHZEZWZSCAKcNjci8vqdsiHiikfM4fugfkc1",
  "key25": "3iko13QBmeMBNZzKuDHkmCbjUggF1XsucoRBbFhdDLHqRj9zXQ5qAYPFHPA1Qc5f6dkngJsatWBtFr6fZ8g2SM8r",
  "key26": "2dpep6WMskJqQA6vWKVQFTMbGVrR1aPbqnAkSB6f87RvuixT8UUnPzAcnHfFKH7nSUkgmmSYxxbtTiX5NPMJqMpD",
  "key27": "2PQf9wq5PQ4GY6jFamZMQjudhRRtkjadQai4pLXLDd9Jue4cfEEeECdyLLbQvNBWFw1zQkRBvyxkjreMrT3ipFZv",
  "key28": "4PoJiomjPQmjLZQopH733BBuWbjhMzSnzj4UfQenpZ7xBCKEqYGG8Tc2RD6tmugShp8tP7Z1vvzNrJeZ6PxQ9HAd"
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
