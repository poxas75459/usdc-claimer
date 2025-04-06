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
    "2tUrJJeVR3VKGdsGggtyojpedcb2AnTQ3gTCGSSiKzDrysdvDaED6oZfjkk6CDyJffZwAAXJZzKQcVSKAcKW7onj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pS3DvCiMHL3iGUrJcjSbsVJmVw4g7Ndzy3e93NLLLh8Qmcuqj6a8Yc5Shn72Rsx1bfXJbBC7KR2KcPwnfNScChL",
  "key1": "3p4pSAkr6xYvWEbQrq2pyRMU5aj5eM3FpWdTuxVSHUaMutuMfNF6M8rAzjoHxnY8WHdtJ3FsPNzKEshhWGC7kWaK",
  "key2": "3EDdRCAu1UmMfcDp6aBJwnE5JC1c28LiTtzUqLV4dzFPoSaGoBVtRcsRpU7xtKQjAQDAtE8B28NERKQosd52Env8",
  "key3": "5V4DSnKLn7hCF6CCRdgZAXyLjTtZXGt7NnJJQyk4wNaMHJZedEZwE7EmUfHkwrGPKTsdnnxbFfoKCTRCHnnFUQce",
  "key4": "2UEo3rPDaFEhsjQqhWdv8vHBvt4X4VyQy4sJKs64puQEKS8GMoCNiJrK5cg33n2ici8BHTPinxy2nNJHoHDCTXvd",
  "key5": "3Q7LuLZPDdFZxbupDeQnWhbNCHms76r4YePGFMz7Xx9vmRpp773oY7EyV1nNirECW8uBbpicS84RxWW2bdUppSuE",
  "key6": "A1jiwL3Ns8SbqHxVATdyh5FVqyRARGEDkTANHp216Dfn6GBgfNfmJkbPFPhhyKkk2yjMjtSMdYQFruvGSBk4eXw",
  "key7": "2uXEh72J98Snuh9jCXkQqfhkP9NLQYyafHc7MsF9PkV7cWM82jTFv2thpp6QxD4kxoyJoqteko9hCXXURwJ6zYnW",
  "key8": "4zUgWBa8krZCc3GyiQZHXQkp87hu98pdpqy5jXHzrwA3QkNt1CgnfRpwrdFBgFPEzwBacy57NtTk6Riaj2ivJDmA",
  "key9": "5LJmPeBMLpujSXbEaSnkGFVjq473583niATXrx12B4XuF5jXN5k1jv529YCKd7NavEvMBhYtx2FkXHWj1BnXXwcu",
  "key10": "2RMFMMKUvmbULKoJUiXSzaYZCbGqTsdP8rrMn7w6G2YhZU7wvjvcPGscGMMCvNFiQvbVyPRht1AX48Z66U7g3jXd",
  "key11": "2xVuoUaA4KUPUCTZh1gPksAQtiWfBiKVDHyRhspJkoribLab6Ki5AzoZgehU1pf2rPUrAsN2awwhQt6vWsaqRGJH",
  "key12": "2RZPyt3pZnKos3A2wC3v9GEwxZ2MBHp6PEKBdLZ54t6AkhxYJA7XSLPwhoyYPCa784uQeVCzuKsYBpcvRHkzHM7N",
  "key13": "2XTYgxBrsDorLr36hYUZuHfSmKZuHPE5idcHgkh4PT9yaDVzhGxgRHcEHDQGw1mW3W4RGvpxyavj8vJVZhEGoivT",
  "key14": "MnaDTtZKLeCXN5hpedtSL5Xbifqqu9tDy2JzJozBHD15ZGjU4hrNFAaNgRMkzhFojbU3B7spHVUf36wDF6MM5Ej",
  "key15": "61GczTdxpYAGjtzWfnqAtEEYNhSQBFAt8CHrnHP8ZAJ94LdyFxP9xFagKw7CB7AxvsHx2g2DCVNW1jUBJ35ikurk",
  "key16": "5L1xYLGDMDWVZghpK5WNAjf6RsjcJd7h8MzhfnJg2FRGtXrH3zdg94L3Mic9L7bmJa7a2ofsKVxd1XTfpN5jbyib",
  "key17": "5fCwCoE1Rw1YduuHGvc9rgfWofrMWcQbfDxtC4dZ7Fzuqv5s5ZPuLGLM9CuNawR2JQtSwHwt23M6VRi7DXnwAaSm",
  "key18": "qTX9bfVeGuxfF3qr1Rrj8ijZfBAbzYMmiEQcPz6AQdJEJuSC9n317wMKDMKyyysZKMt6h53FNovU7NkREur33h7",
  "key19": "4dVYALdkMjkj9tYJuEexENYtYe3PYZybEg1eSXfCUXfFUAFajAdQ4QqADxihaAc7c3yRbhytwYrnHvtaaCAdnMiG",
  "key20": "5iQm6tGZVqtTjt8PW8ETh2knMtcRgzcxuDDBBze14oUoF6ijA8rPkxFy6PvQMF2uBYwM4ySU9UaYQUi4DdrjwVpc",
  "key21": "5dw8SpwNL6BJJPHwXLLsMXVES6dUCeGZfGgmhw6PTEJAg8MUJGHqrjs8Q8Xq3e56xMCkWZBXWCdoKFhU6VNDLRDX",
  "key22": "4pCR8Marfi4FbS81AdP54rmeNyUpaPGr2jqTaJW7CvhPxfmabpnzse7XthjEkGyrkNN1s3DDg6dsv6ZTzKnLCjD2",
  "key23": "2Z1dzrZJMabvoLFD7AK8M49aEDF5Zb2XJVDy3Rni9vkUjvS686LwUBNCXxug9Mk9xujdDKdXLyUQVELJioEEEyWS",
  "key24": "5gxyJANHjFLUTXECx7Z7unGJdkV5DDaJp64FMWrjajH1tnX4Cf27YC8niHKmoGyyvqixPhurZ1CNhHQtxLJ28z7t",
  "key25": "2B4C5sc33DGmMG5mJzHCQGDHgKMLVdqjKHNByYjeZ4qK7ekBLHM4z417YvseRKfNEkMHAcC7R3mXv6aAbXuGKHJL",
  "key26": "2PMf1dsWCpayk2DLcXbniQZkJctFtMHn4J5KZm2MEgFPvie19ig7ahVsNdBFRKczoYMLNE5qf9L5DZhdmpcri323",
  "key27": "5ykSf5NjSmSrsCXtfmer7F2VAhZnowUkUPfjKCsZBeqdnvhHagJCpGMT3VejqAA2gPYXXz1VCumMAW9Lyaan2fKD",
  "key28": "yhQ3csuymvSHVKYB6SJ3fe2Bor7PfH7haKTNqsjVq8qVBaLLawQGBmCRcjhkodSBYwqvgCeYeVbpMq46ymibQKp",
  "key29": "3SFzPsuHF6d5wUZj9pWJ35WFxkKu6V5kvdq9CpejLm27XQG55SVCt1oE4V7Hsb6K8seYVwJcrTacBXLDEiVtadp2",
  "key30": "3XeDqKpar4c3BxtYSke15oSEm8evLayJAWmD3kSKHHKwDXExR83yBTtdwV4x27VDmcqmkrvHNLws47z2ffFLvnyH",
  "key31": "3H6zVLEZ9LcGXYd5WrLTuqZEZGRWC2mCnxknFfEPhWfkpCdMRPzR9C9uovrk18nQpxeBCkrip5PwuJQ7ZACq4d4W",
  "key32": "4xx6N6UaVPHSySonDMAfcT7oQrD9hDTghqwJ5fgGofkn8LdJi3F4K72wyGLjheCy6sKdfXrtNRiM9HdUfZ7G8CCH",
  "key33": "4kygkqHmmw5yZnXWjdrSkuh2MfPxgBxzMZ5yYv7k7Yttn1Px1rRm4P7HLihngYZ5qyun82jxqCExdo32NQJVCvDH",
  "key34": "4kUZHKnPGzJDN6PdJjaPynitBSNMHPT8fNLRFvbmc7Gt5QXCK7G2LZfbd4qfrz8Zhdvn3h5ifE9dxaQhaFdPkbqh",
  "key35": "5ymtsgptKZXyCF4yL16FdFxFzxMjkJrXi8z91jAdg7B4ar8sPucsC2Tu4CPfUEQ3w1FR5hZa8ZxW7FfwetsCnr1z",
  "key36": "2i9vA8aEM5Kwd7SpQEjiUqrFRjn57WphdrqHbBo1aBaCrgYMdj2yeThJVPxmKRVc3CDRbpm6HWPFn1i3mVAtwQF6",
  "key37": "4cvLkGWxBeXCFKQeixz4qs6fYdJUdqDUtM9fDLBNA6C8MYTNyoenWSbFckbiVVGYrv1t2Jri7Fo7yMoPkDcDPSzF",
  "key38": "3Ni2u36wET6gum5sV7vH4aG7pcgvAd8dakfuAjWhPqbgBbRQXn2VyA4khS9xUx6WptxcsGnHxNZNKRo7p9jfPENZ",
  "key39": "4adhW9PaC9a3R1pvN4sqweaDaUeJt4o9PfgZcTYKP4os5Bve9UBNGHGnqw7DciPwFZHPwS19WHm84af513JTcKsV",
  "key40": "gm1wztRrc8QeKNry4R1hvUTLYhfUpqEMf7cyKmS2KTrvu29jxQnkjdqa9AFttQPrBQSTpkLuDLiYANEZbXiFWyH",
  "key41": "2wY8LjeTS27VZYypVFcapyw9KNXj3Hqpwcx6YVEwrRd4Vg1a9pTrgJVH48sy7VUA7kCf9aM2uG6SdQNM52EPcnSD",
  "key42": "5Hf9wej1Mc8FpMPxgXeHCTUBbCgykN6FrMnQ4xNVUKrhjXxe6gn7Hu28DH3w7R8TKc8KVdmMFthiSEg8B3b41Lyk",
  "key43": "4JLstsTaUC7kzsLeoCCgiNoqw3UXyTofkmM2WxXAyNDs9L4TG4pqXK2so5mTNnSi8BnsaNzrcwJ4aeDznkFJBQ5j",
  "key44": "4oeojaDQPHSjGCbmbAF8qVZ7j1L7eRJuQhxCtvtW1qkhnk4kFjjPWFDHXyzH1TMN12TinUCg1URMaZBBHRi4CvGa",
  "key45": "4x5sWeXFPfyuf2q9eKvLDPzb8bheQkJrz7x9XuGu6wEp8hzwrUGtY43nGiTsRgoRgVom7DHEWo7tTG355L4uRzjz",
  "key46": "4Naz4y3J39RRX29imcjkLRdeBbkaxtBbdwgzH9Vmu56t5L6tvq7shTmRgRgBWwfeSzrrAWd2RwV7Y5ubz15hMKJz",
  "key47": "2Fsjb2TN4JGHjfHpSoGBsihncfQTBog9Sq55uYBKGy9NLPMGpxKnvQCBriYhBEVY3SYpygFFBbrFQBCYuJzSVnBB"
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
