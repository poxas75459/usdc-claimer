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
    "ETrgEqwm1DP7awRjzoNu8g27m5QYo1xBFZPCY6YvAiUqPN1NnWXjEQEdoZiwBLbJJpKDdtnKm2vEJqoE5htMjbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8zuYDenpf63YAXMUf9wkkyoTsr3znajT8VdTwpaHy1fw2qYYdyexkw3rqbiKN4reT3Qayb9PPF9xAjx5q95AfW",
  "key1": "4CYLR1V1t87yrrwnge6fwCsQzi7phxZoHcqaZo4HZWMwY6mBbcuKrmiygvzCqrVUaaB8wicdzVxSz2xAcggWiz85",
  "key2": "5Z553HjeazTnWYBuNr4L872qdcs9U2pWKDUdNJiw2xtiZ1v3vhebefYjnMZ5a3k2hSdtbFZoDWuCQBifRaByErgC",
  "key3": "4s5kuezrn5cT9QpdPUuDjZowZQQP7tHTLtaCgBzXjZyuY8dpP1kE9nEc2ZWG435SrABThwMAkmiSpK2oDa9D37zK",
  "key4": "Pn9RrGa614csNWuCM3JT5cyX6eaN3i5FhXx4uSSDu6eQCDzZMWvnkpFvmTGovqJ9eRuLaTGxbfHLkCYdrt32fnn",
  "key5": "3AH7ewBbKFZjU9uUi32ZP2ByQGT1QpH4XeaN3vx9NCGXLMfiNAUneLMfpqKjmCmUoP7ACuA4DDJV4Nh6ztvKPYqc",
  "key6": "FiSNUhBDRUwP5j3yW4WmJgH8Zbrr72PZUY9Q7ySfack9xyfCHjiQYEDCTni3U7Y7wpoNNNfXYyzVRpJqNZ6Wt9M",
  "key7": "4KDxj4oo2MnByvoScz5UL92CAVB4WPiuFhuS5d633uGR4ogLusoSjF8iV6vgbzTTPCESezyi864NiVDjQ6g6akUy",
  "key8": "3WBYg9LZnA9oVFLcxN8MEACm8RjyGLpGoyZipbyXxTRxRfbjwKc7iBVnEhHP2xHNi9DxAwowuP5PWfLsYy437fVR",
  "key9": "5hQEQABVN3ZEWsiG6HGEyhMur8os4qpaput8mkrUDNPoGc3NvWwf63kjsn3B79QZYQfsr4kEPCtV1HDGpdA3GSDp",
  "key10": "65sWS89Bsz9cVBYHabmWET1HehDD5tbWdQbdY4vQiWS6c26ZAivCcgj4tMxS3Ecd5PNQJMPN6agUij1WyENHoJyz",
  "key11": "634ayK7vkJJX3Vw6mbLamUin3Afvfiti7p2A1kogmDsjp2c7iURXBLQiZ69xQt2DEgxTnMiFBPLRYg7VVdWJZjZu",
  "key12": "5d1RDLcV8kZ35QDWcdY4A6xyXZLf7jmBhcnBGSz1pVe4ACpFoBVkyQsJe3dig9eJKTijqZFkEyKDTsPPE2PZA2Tc",
  "key13": "2QUmqgTLVLcAfSDzpfVj4eCoCwNtZAxaFPcwGnWrREbz4xia9CBYjTnbaUsTjKY8GpYn5DhseKeV1LFMv2Xm3iPg",
  "key14": "2f51mQJjyWhVbrRDNHR315zWMomA6drJVd9HKvFAJRQX9iJZUKrKVpegSgy1tDGpE8zNVNnibuyWKAM6VQvwRQF7",
  "key15": "3ptZhKLMAEP9DTae9Ayg5JRaKZPnjW1Cj97jR7YebbboDYMVK43q52fptBJNJ5dPEj6ZHpLUjo4Lf1bGio51zxbT",
  "key16": "5Kd7qV7xKWLgMtSPQF71Ps2GWQhVkN73JhhbVwbhaszvzQeaGgLoeSaSBw1g3VSUSb4sGPngfEJ3nJTHWWJWvASN",
  "key17": "5dGBXFLri4iGbdeSfWwUs2N8CDHBHp3WzvDHo5eUpG79GywsD3cyghS1ifvAPD2kYQhTaAhNs2MPoLgbftcF8FYn",
  "key18": "5dumGdwgUQRFZDTyjALrYMhF6PZ2nzRWz8c7pM73p6GUhNCc8rtxQNzsE8qXwcupdzx81jJFZFkDvcJUoZrYZx5w",
  "key19": "3sLcBdcHBxFzcdatam5e32fdwAm8NjMwSbwhEJgfLWaD5P1Lia2MhNxnMBK96zXDY5fc5r5EKLNAqrNVcEhq3NJc",
  "key20": "3TtC9dGPdi77Mb4fnT71W4G5rCnTYFpxNCipsmL3KzW2UJnkDxJLjnHC1sRem22fQzExTjVLV2jNayB5Q9mfKxy6",
  "key21": "32kqZ3Db3abiLcbbvVTTkqFLBC8RB25oAVpp8d9Ddkc5hjXMqmW7E4fgoA2KKkMgZJxnLa7GmSyMdKLqoShJs8yQ",
  "key22": "24EVmkNTmLL1atwj2rR7x8kDtcNotMaMQgrL7sAashJzkyWwd5NctyRsam3aKd2P1KTiSV8Zf2Dp5DANPo1TWzG8",
  "key23": "5utp8kjiM5pYPwDQ4EXya5bJdw76JJzNNaok8CedZWPxc65e4ndHpAoedZcbB4nyPAMLDUrGGLczjUGdVufZudth",
  "key24": "65QYT6PLf2nkdRJuxryyyu7CXG8fT2NCUnRDATP74NDfqLNdikug6Fd75oqcRs9JzaYc2u9WrA5G8eJzuHtccSMK",
  "key25": "2T81MsfzTVD2hCkZ8CGRsM9KAxuvwPfAEh9xXxkbc3UTFrwdyPiywxy93AxNmrjDnJbfcwaykDUXEBcG1ZfoHS8t",
  "key26": "2ad5VEsTeKhGPJgtG4SMtaPFZU2eDXDdofB7JSDXwdbc8hzZHXmPBiNzty5nWDKuY3ZCcwrUtCkGHEpDGevTjzjk",
  "key27": "3NXZfuwtz8JUAZ72jJNHjmZ4dQYJHtjRaGLLHMhDK67RmrDuP2k3Nr8EFhABWN9nWJKzYyajuj5utHc7c11pDTYh",
  "key28": "45fNT5TsWcQqzTTBgkztozRCBdPMjmhi2CpX2ZzFwbB65pf94JAXfLr3m9aXb89FNLQTS3omNs8WLZQVzeQAXHmC",
  "key29": "2hdtjDUv1nhtRazEykv5ouBMjeBafzCKRYKV1fZGJjgE2w44dA8LBonffcmZ6zSwvnPhPnhHZBLBxaugwZ7JAKZw",
  "key30": "4uejPZVgTaDEkwzUhY3iuKq9Yu87Y1V4LK3qpZ6A2cuExLnMntJaUqvJa2tpoyHVQzHRCPN9zkwcK1DJ2ZdBpcgY",
  "key31": "2xBjCphaG69wddCzRESJCiTuQUDvp9SX69x73ptUwiuCr8AePDTWsYiFVQNsjhKpNWnENmSRBa5x4zBGFtb41w3A",
  "key32": "5ZtfuZb62roRsyJekXHkbNj7CSMgJaedEyt8itLwHuEcH86x1q9PY5FdYDotv3WeJNEfuGTXdD4aE573UfUuMC6b",
  "key33": "518zVJf16F2mSGXknURKSjCEb9qGYbomCXwE6GjGhdvy5vcWijBAT9vu264zVFmcfQgjKxsEpgnYAK7FQVSPXufq",
  "key34": "29ao8MmZXx3igCD42jewApqt17ppYsvLPkcdiDZFH7T9UiPJ6VHA1En36HSNZNDKsbnysNmJJVyhZJ1GBHgBYEt6",
  "key35": "4XZPdpjF8zSKUvZdyaeyDcxb9U5LMCNtLgwJuvgdangML6kymEVqn2PpdV985Kh3Dm5csAB8DXTxu7ttA8Rmq3xK",
  "key36": "463Ejhba5cCmwQ82DbAfFpkTpx93iBTVpYnqxDWEpauHfz2vQhXz47VjPeQjFReiNpiTR4oPaZcNp3ZcDkYDDfbV",
  "key37": "psRrkwgedbm2rifh9MBexzv42U58usfTm3ijZhzER94rT9SeBYZEN46Y5uBX3AJRry9Gy8R2Mh83d3tgWJfXAyM",
  "key38": "5TanDxmwAXdUTaZhzRKsQZE9KVPESFHZSquy6ytWZasyuK7cFEp9z7UHyJJULFTKZSAH6M8CREx4iW3zMH7stkd9",
  "key39": "RiHAUpqYoH2gsmWvFsC6NabhHJGX3EHAsmNpWcP5zMs5iHdB4foCBMkXkra7po2HrYoxHx8RLuAzfyXdcRUmjfo",
  "key40": "3SZpzcag6z9MEQ4ECm1qxPwJ9an65o36eyEoXezEf1yHuskV1KxNhCh9tqUqHmf3Uwm8xB9Zd64NnLPaQQWPBPMi",
  "key41": "4JFbgZuQQ7RZ5UsB3EboTF2t9gMtH2SHKQFPMU1ykzNW4g6nAKZdQdT51iEbbD2gjnFCsiHxGAGRCNhEyVurx53o",
  "key42": "nhxa3LUm2euzRjXK2yaw3yn6oRS7RsTFci1g1HrH5vtznSS7Api2y9zmGZeGTC4vUZdSsvsXbVSeJ9v4napteTc",
  "key43": "4A5MZahKwfrfXb9qXaBBGzeursisJ3wDb7rMhdnsz3y8in3GeYWMq6qCwrd6FG712DY1tgSthK2zyhZd2Nj2Q2SL",
  "key44": "2Co8qCU42gHtiUMQUDYkwYK2twEdzAwJEBQ6QGNL5hqRUhfoAgopwGp4ap8wa6cWsAKLbwsjR6339UWJJ2F5SnAN",
  "key45": "3zwMfMdcangt4sZBWMaGDRFLLAemFMbkLGuuXSUFcD88BounxfAhFRDuH8XakooWgpyGFo5dQNfKHr4ckgkDyh25",
  "key46": "4Eu34KvPXvb3t63aexuo4yn8YMnPK9fF2HpATfRcVmdMmH3WqyU87thXZxgiyacoftgSSbwsn7VZSZ4cuwQUrVpe",
  "key47": "2srbHG3EEiUqcNovXiwt8ppTPEcupMwwFfMxfXb88tyjnq9wiRn3vQ7s9z5HXsEhvaS4yXzXL9WKQf6SBM7YSB1L",
  "key48": "3JTxCpNSzc9urM43yt5dMm14UeBkYZ5QYKAwNpawVPXjQHEk8uT7m8at5qG5H6uyaAaNBXPKdigGsiCj2BfQt6XN",
  "key49": "57eTQkzrcV1DVwTy9Hhk1ig3M8YX78S7cvxTyH64obfcD72u4mzUk6m6njcPRNNhaFZ5ukJrVkZv5KiRAowfJmPE"
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
