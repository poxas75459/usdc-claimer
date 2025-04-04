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
    "5jYvCKRafKpKh9cnDR7182iLejZt7MHpD3YqkYULXwFzEHuUM9U2BGAt1ofY8wQ91PX1NYyf4iYLJMNLfDzBieyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLF4fGPqX4Ckcj64bccxDRjJmbtWA7cvtMH1ML3hNAucpoLEJyV15Fjfg6TpdLbqig35JBxernBCjUbhqXFXsFv",
  "key1": "4XEyjohF8UKhEi2cLT9yfPfrW1Ea4vpJjSZDDQn5VgQLoxPSt8XecaY8x4pKCd1vq8Ebf2A55giFzNWTKwp6Sg7Q",
  "key2": "3utkBRwzPMo2kqBT9HAcoKdRmURYvRWGy9mW9CMjzRhQJwgZCTKwMsQKnrZ7nRfozC52pt6hh1piHXnhiXUrm25w",
  "key3": "4G8giGJdv2xmBWP4qWcNGB1LTbB4WuGdyqFVFUteaAjMHSGBt2Vvw8VzBSqkfPEwXx1WTb2HcpwGNRZxnbUzsSW4",
  "key4": "497ZJKue3JJvDPfBvbqfrmV7Lmjn2MgkFLsAiVxUDh6SGFXivLyWdjaXFM6SXGHt6UKg5RPBoo6X3TgkFozFrka6",
  "key5": "4QYFrUv183sBH1msCd4YrPPfRpTcmSuqXPva4FFzjUQRbCsCtjC4Caq54q9W4zVmxPZGsHLxHpsCRhuyqa1pTjwo",
  "key6": "4swTD6xxdvKrWNhS4NYUAcBogBoozu8TQf9vMn7jAPbkLEhsNnXBRbijseJK6QrqdQzUaoUwen75GiwU8jcWgjvB",
  "key7": "2k6jT9rn1mVvJX6kHgPxWBwMiUdY5d8bnSCaZeEStrq65PtXkGC2mBmX2FGLtTE39ZwaALvBAQXEqB8ux8HHoorv",
  "key8": "qAEkqE7NugxHnV14CtuPY9MJvhJVneWmrPuypMeKjt36imReJrsVrUBBuTChomJsKABNnmVMkHuGpQi5kqaXiZu",
  "key9": "4tgdkPXjTD4aLuXpsbCQx3mSuvUD9u5SdWWQbFRTYioR4qhwAkJjk5z955hDt86S9EhTnrtGxeZaoEASumxpGs8V",
  "key10": "4Utax1NXk9AH3kusNJKQy6nWk5fQ716rnSSCvL7dZUoEZgp15NgXcudA6FRsaHZ3A2A2H5AVy1yJqEV39ewpy5ze",
  "key11": "zyNNrjd3nfa3gU91pfe8zUtmfz6nGHhoLXu698mTD5xJiuJdFb7Y1ztb9665HtPqmS7unDDzdC8a8xTnzXKMXs4",
  "key12": "356SSBQM4W7qyEuHxVG9ARTzwNnvUzgXBpRaRULyNrm8KPiAHsZrP66BdszYn4XTdfdpbSpN2wFnWfaRDWVitsEH",
  "key13": "3L2xKiR13C6FBmq7ApRYKxwZv9vXAftDPa88o3y6FBp9rtYTAPf1fJdC5hdjk5smGSu4eCdozJBn2nCyxaV2CkAC",
  "key14": "3BCMvmTEqhcTcwuKBdjcp6AEgr6re2GXPNqabTKStzCkCFfV4oP4kD5Asyzjo5GpaiyUEQckQLHvRMWN3onzt7bV",
  "key15": "43PiC4pyx6pAQ2pUXRW2uD24fbDGksAcn4FoSFDvv8Ya7TC1CungHRTivrt7iUENQnAYWJJGZMWZjbDpbVjvJhnC",
  "key16": "5EsEBG5txUozAfP3aUgT3LcLXaVueupNxH4rmz4gszTQEjwx268BvnH47Wb6hARyoC8TSJL4UBL8mANpyuVWGi2w",
  "key17": "3xZP9ehnCNSGuyTVumXL9aJW3o3Paao2cMmuxNmcS8MKbizNMMCzKVLPkyuTR8ZUN7n8Xfve5gh882cHd3R1fsKa",
  "key18": "4hDJ8nCJ3THHNjtCqvn9C7faLyS3LJMu1M9SbvfcpBkDBm3KSXGQoS47s6FsK1aM2pRF62Gcx7MxWPm2vukAbB6g",
  "key19": "4Lbt2mp7bYm7S2i44XFzdmCL3wtuQXiKo9kQkdnjJDUCVESbTTetUKxBrdeQgcSW4BYw1AJZx97Hkr18tQGoTQNH",
  "key20": "3KHvoPFLQFAYTU3QHcuJbNtoSBjbokH19j4E3nPL2bmjnruDsuH4fWRquz24f5CydTGVdy754WUVszEuo5FLTW76",
  "key21": "GFH1q11UcWo7QorBxSNZtys5rt2urS5Lw3AkSpybvWt8YrDDjRgxLUZ73KuzS9FUCnmrZDXt1ysVWWUWH3wxCCq",
  "key22": "phq4yrTQG44HoXv9GnbiBzZ6BFor9q4DAJs6BRV8dQv44j87eYGV7G9cZx7GpfT6mXFQV7dZmdS4JMvvkPZtVN7",
  "key23": "2MtDYESJQx7TqhokNCQotN8htL2xfGgvYzoGHPVa7wp6iChJqGfWd2bDmMX3MkKEmee9BDtWdBAfrqufsvHjEopZ",
  "key24": "c724PhX5TmoF6impZZGkDtAh4v8Nw578KN1xbc4sywjRo7Lpbs7xJy7Tw3SkoWTvDyFwGw1uqSJ1Zf8b5e4QqWe",
  "key25": "po3ydQvgpaDhgKGgVX2iLrbVY7A3GcCBTpfmBgZbkpUMbMxCufjxf1ewR11Lybh6D4gcSGTDhcNagZ6PjSJNwU8",
  "key26": "5HPViddLcpdk2aqiRC4QTCRzn3ff1GwHUPd34QFfCiZrQS2XGmWNqvjmyeWQ1FUQ9mmfSunog3VdDgYWCjqsGoUV",
  "key27": "58mcqHuX6EHASFg4osEKbMAx4DfzVP3u1fXbEZ1UremMDrdwmzyHAfWbbJMwF2GwQFKjCZor8qjtKKNB5KM1zxrU",
  "key28": "66noVkZ3tiBhwsEGvv6qXDckTNimNVmPBdPkWn3zDPg23fTjMeDuHXbJaDmHKqNyg9bYCmjKyDRZiqQUsHv7BQRN",
  "key29": "2LsbH3vZyuiJWkhX2pgDTy1cjsme6UvpEABPXLwyeDP7MMjwombkRG7PzuL5mp7XnPFERimAsCk2pZyYbZFdvUyJ",
  "key30": "3nDLSNeYUxmti57ywqctVDgT6phGk4zvE4exouFXhVMj6bre4npX2n3joJbLDv3wDDrUWWQvQf74dtiougyrxdip",
  "key31": "2Dunk62D7e2HTeVwTBNyF931YRUhRui5xnGyj3sVkLvVEsdYfzftzjZYpJgiRzhMcUwgBbNWCNs2BDHLNTJvU6CQ",
  "key32": "3XUBuMp7YtF76KssePXNLMFZ3hZ4f8X2SP2cuSpbBa2xBJnPqALihnkkCfcyJbtsspKeZPM8gCYXa8hqnFfFKt3B",
  "key33": "5mcA6orr6zwi6vfS5K3MoM47cbSiJ3D2PGUnrsx2A8YHPxEUm65wnWsSuimXdsHcZZNK6rTBcxrTCebbCGH435zj",
  "key34": "32SJsAtGCGLnjRcyZE2dzWqxvmnjRuB41hLaE9B5dTVe8M1BbqRZToEvCgugEDLgvs2B4DXqqYcgckRRahXpoYnp",
  "key35": "3R5JhEPmKCmnydoj94A4NCk2xTmvut5UnTsFscc9Czx8dwPyMDEH6BZyXhbbF3vH2Q5Djj2jen44odtHTLSLV2rN",
  "key36": "FWF9EyzeKKU34xXgPzSyQmFp1NNJHJHM9TNgqVtbYa9dUYDy3eAxs5mq7kuQp8Wu1jeikAsLyEdWj7qMuQy5EXs",
  "key37": "3DonprkGyrSnHi7cczu2XBUpkJoPnAWXre5uJ1j7i6LnPURezV7pVrw8o6DkjmoG21x7wpvpC1iZPMTzbu8kvroC",
  "key38": "45ExnhvHDjtPyDrhgohQmJhWrU6uwDmBTd54nNiSGPnxTMVUMosBzuLLePeW5pvDqrULmMSonhWyNcbsJmdECYZv",
  "key39": "34nyMBwvU2RKG9LGprmnGe1MbvbA6EjBmStwGmHi9J7ektXXVPa57FiLDip95n6zHpP1wLz5jLs2GuRnNW8WMQwu",
  "key40": "3yqeTVBB77dXMfCmmKTDfXzeaiuS2PXbX9gbQgSgSyWjGQJ28hJmxXY8ZBXdK4SN1fyeSyZKsctDHFo3vqXiHU4d",
  "key41": "214Ax6TXtueEMfq4XXWxbrKA2KwgpphZE5oHK8BeD4EVCVqe6xh2ARQj1U2t2RnPN9odZKUkkwNk6f2CRhBMe8k3",
  "key42": "428AS7jfMWmLNbC5mMQ5Gt8aGHWoY1iNt8HMrCouTkC4SLH3EpAmEFvGwQ34zfunUfPRfkEutSWnqzfqWkGiomWY"
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
