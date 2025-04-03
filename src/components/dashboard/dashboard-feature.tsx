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
    "3Fzx3ZdwiEwBpikZwv3M4vRuGLWgyfYTAsx1w4GvvJCx8c2zXhfb3nkLX86bj5pPqmBwiSnfrMnzSHgJKBbyUUTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjDpSSzGtyQi3s6vecFKbe6r1mRGGjCfoNxQKSHBzv55qCiEgNAj8vZUXtjE9Pk5cdZAzrch9nyNGG9pr2JiQ5C",
  "key1": "2jXbq91VA4jdMbnyK69HfktdSMzGAggrBHcYYpZ1V3oResiP2SUhyTtj22HoXGxF2FbvSvLF4uL5b4qFuf6pHER8",
  "key2": "5hnViqKz2qMf5VAxuNjSdBZrasCfjGah9JHx9MvyG7Af6nXFxbLQ2BNomc8Wa4i6WbibXxmqGHeHem6ML87V5tF",
  "key3": "c1ihgXFzFe7vnY2qUE1xQZEGqWrjM8PwCy1UG7HNzHkGDcAWXKTJNc6AY27CuHJXXMgqyMDGscDhvHwGLaH3Jt2",
  "key4": "5b7MRHyGkoPAtEL1Dqmmv444KCrc94xy3TC6o5gJohk155DXxkS5KwNameX8HHN6cYHZiEKj9UCC9k9mfZ7pAeZj",
  "key5": "2xfGxDk363dJriLeYn8yTHYzhJkUWtvjMUp4fR4V6qmRqrNLttTV15LYZTfdridhgLz7dNpjGD2RJsznc5vsh7UJ",
  "key6": "41CteBsspqgCj3w33zgX8PSThbq2UMiszjbQr2hHJLpFJyuqRegX7xtQ1fTUP3vAYC8kweE2XaoMaYJr1tDBW9AL",
  "key7": "5GwF4YTpLRTNNKTwWSikUm9BARHcSXnq23HgurTmE6EKUab1YXYrAQi1DKmzti7Me7MnUCpYRtfM6tVHJjKjhkEv",
  "key8": "5fkVXdqnno4JEW1wADSB6KQapvvmKbKKR6vYsYfjWhfRohwxhbcd3kHqutDezkK9gxHnAAUqFuYCiPHw4Ta7prtY",
  "key9": "x2z182S93ALFDWjzzdaXEwhiqZVBdnkT3A3TGDAn9F4jWva8Eqxajz6xf5bXmn6fvjzHEqYMXyJF1MKhdENMfGY",
  "key10": "2NGewwTtkryj8xVCEeik4a9vtn1fErzcEbZpxFMDV8SuisWJSUXxvqXM95Q6gNkfN1hJsARoSDDQ5fntqnGvVHRm",
  "key11": "293usJ4Q8xqdha3MwyC62VjPvmXEsBtRmwrJ5LNNvwLVuxePZikzebwYW4yHszidqnLrFqzuEd5hwDsQaz3t9xMC",
  "key12": "N4NZPTcNgMzrzEVdzob6b1uTQcrFyGFY1w7CcwDseCsjxSkK9WPnXuYbjoMv2g518yiohruWeSibTdxN7vNLcog",
  "key13": "vxSztJVyk6rrxaQdP9UM7hZJGgMWwGKhtSChYBtTh43yxQUPU9ML71rq1vL94qCpTtR3iEsQww2EYcErgZCrTZb",
  "key14": "5K1LwSfDy8ffrHCgXvfLmkuTDSSoGiuazait1irEHmhJpTML4yQvuvQFvEXQ8ZbBedu32jtZkytrNMmcdprEVJ7v",
  "key15": "3iseJouZEtDDRNbZ5TtNPS8oiVW7LPkYJR2VSt1tXM9M8Zjbz9veYh9PB9c66PsVduVMj5ACSQ7W1twYNr4jZrgj",
  "key16": "4hoJQZfsjdCRD31hrpVie7ZYUNM6AzviTTvA4Q9EmSprdWdxkCksqP94pJaWcurqXRzCASReRJgnh3itg7m3o1ix",
  "key17": "2Py39cKzMygRAbsdxP2pq3Lv9ywy3XrHACu75M73XwtZ3SKHJbV8s89eejcMyYNXD2jw4TnVZCHtUDy9uqk2qbW7",
  "key18": "3KeQvkDQ5ZkJwYi58f8WmeW8rC53JvPC6XCGBpmj238XU1n4muZj2mL2iDYnUJK8K3G9X71GYZRt4dKFiVkqMYKV",
  "key19": "2tAS3yrRBpPEgQD7GPG51rmkaXvdjL91XPCpfcs15RtA2GdtPft2hG5sUsUkk112xnFFKZg638YZqUqCc4pwNp3K",
  "key20": "5nUCsNDFBC2fMTUNBBFHHTyZ9z9pCSk4N1ayP7zyaa4ZkBSE3hgX2iWdYhkrotw2vpFyzTZAPpbPiGyJMrg368CZ",
  "key21": "4KJg3ono8fFb1BMZ37a4uS6UGNAskJjiuDrosb2VZrVxbzATFZLThKMWVk9dgJgpEiaUC4YJ5gQbwCVadUmfh2ei",
  "key22": "4TQWJKNRdHxJm2T7NbmJdg1kr9spMUKvhQqn4sHRc3gnXWuoK1uKSNsbn5qZwRfcnZQu3DfcfZ3iNqNck9R3gyiQ",
  "key23": "3k782sgVoTSTarxYzReCdukniSXs3AEjeqBHp5HVoLHYZEkZgrbZzFDGZTi4XhuMQQkUv57moiTQGQVQ68DDwaDb",
  "key24": "5MxoEcYK7wiiDxLDUD9ZPw3xCE4cwuiMt2CwaLafJyUeygsTd5muUQBstSacc3s3oRz5hHLi8NPpFHEdigJsQPud",
  "key25": "4zmTY23bpCu8PDLDabPsqB1TXgQ6jvQuqtHSCE8zPNa9nNQrqLuawmMEZeHf3Cvz27eBn5Mpswb6TZgdRtdarVmy",
  "key26": "5ubPWtPUR4CV4iqEtFoJxdCe4dqp8Y5R3Bxx7gH3XUFQjgtj7NwzYsugmFsJeP2yAy2GdEMtMuCdSBusabue35YK"
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
