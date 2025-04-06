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
    "3W3Wz2zCfeyu45UkF8cRd4TnrBFkTKHqZMxUuyTGubZbRi7HzNDCWGiUoVNdDLoPr1s7BwTbF33mRPZgPxFhnPxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aETtCwSZuuHJEXsja7tecDc63mWChFC4jwSMPe3DYzVwm4fABAYMbqeHf2pfKK5oov1dNpuGg8wKruMvmtBzvqC",
  "key1": "3nWhb5e9VcfEYW9PbqTcrcUh5TUNDpXCxgyU4LYW4qEdmLRPWQSxnVodFGXWN9LH3oHCcVEYsy76XMZzrJasDx4X",
  "key2": "33AZ7e8TMXLMcePiygrwrf32ZYc8SfjN55LeEoL5iCqczZusVLiHmc9gpryXKL7PKbyxqoQNgigDxktVT7jbSxPn",
  "key3": "4NqtYECFAXJ855vV2AkP4T4jCr386M5c1Ni9wHxeeRrVRM6zcK1AY61gBXwcu8kKw311dirU8RmJWUWJtPXUw7Kr",
  "key4": "5KkgH77PMcWqDhEox2yZxtydkh7yMk9McDkCgMnok2vt1DPhD9FeykEttct36JrZKpFJBiyuWawmzxHYRVpUjwCV",
  "key5": "3Br19rqsZJwEVEGi5GHhahKB1bwLF3gm6JnDfcaBzMrsxpmXPe1iGeebhwcBUfUTHApWQujesncJ8CYy1vkQtoS5",
  "key6": "73qGkxP6rYwS6LEJCdXtVF6vmiUaM9AxyruiWM8z2wHX4b4dzgfcSWbD2dmHZvGCVCdh6AsRVX51Zp1Fm4xkXm3",
  "key7": "R8u61ZbMPdknJuy2B2FXDJQN5JK7Z8hYMteZBwmrzuPepTKzp7RgEEv6EYQmzSxmWvJkrsDXo1r7Hmo22TFSUrd",
  "key8": "AVWLe9xAdpFa3vwy6y7pywPTZU6vW7sPWspXC1j8JKh89wWHK3eLgT7VFV99XswLPG69fFbEFJS2usBxBYcD4G1",
  "key9": "45mevGkx9j6neX21dY4zWiBTevnufnCZQzraf6LR9uWKuJGfLsQjbnijZtmpEno6ew3xNKPFXngUgsyhnGoPD2R2",
  "key10": "5HmiSksk7Bp9ReomyqJLGQ88jQEFU5dUNqu9tNp1qLPYZovmFqCfCdVncuEcqRXxAQoD7DkaE2WRbRCLXfZJAfiz",
  "key11": "2eXvvCV1z6mi94AAgHfDDQWrjp3TLNFDQP8Hmfo4HQAaXN4kMuAV2ibPofLsTFaGN1gbeQCcoavbMtq4eT2uyoWZ",
  "key12": "2X4s8ubuAPCeRBMmsCxM23M2jSDzudCyBdATumamgokJYTLQy5jTU1PfnCBna3hHDwJzp3aSS6NGZRW27Mj7gHRq",
  "key13": "65BxWsSaLRWc6RMPxDeZHjdVokWx9FoEPNUep7osfXVMXHR39TR7xAZRcXfTz2puhLkBRxX6DLPmRd3ZhTZH7nwZ",
  "key14": "2MBcQRVU2zTeysEcYMdDLQzoeoFgFWgDLS4Sjvok8nXebCpKbDFpF129XDEATFNwjwEZhE5YaJsh2LXLyDCyBqRf",
  "key15": "2Dp4C2DFTjXHXAVC15wvtKakNWngQAeSU22uDJyonEAPKwPNimzQJvdMfsTqT6zj1eYTuLFXefhGLwmEUgTAUazq",
  "key16": "2h7enzychAD9oqi1HVB64axe4aS8Meouksn8d5g6DycShhHqhG2rS9wyyLbM7GRciu7V9xviQdVMepmqqJEvXNba",
  "key17": "3QhLGxw4Ph6EgDqcqt5f7AaL6mJwCZeWXf8f1MXdBP5SekLACRdogjXv6d5YsEj3BuYst5vxfie9b2Y72SUt1H4V",
  "key18": "3U1Nc4gcSnaxc4qRd6U2bVxD68MdgzEnC1moVvGUxDQ4e3xAvU3krxryihW2wDWHZRVSUzqVGYWoFAa7k9MbB9mK",
  "key19": "3X7ymZHFQqkXCNnzHEC2Bw43zfsfYhGyPoEWnW1PsJBePwXkrsbZUruhVRZPE5u5Lxux6nZERsXWJcuwXtrFhLTs",
  "key20": "5iq99U1J8SWQoRdgnao4dtUvFcF5oKnY914snr4Ni7WSx48QEm9AaSAfmgSrrFsjmhSgkx24BXFMv9r8R9L5KodG",
  "key21": "5nhhnRw5q6PTtwERYGHWpPVXuDw2pyN8Zgtjvf1x2UEnRDGAX6poDNQ1ZyRz5eYNDN1Lex4XkunPFrwFqP7gjets",
  "key22": "2sw8w6S8sjAPkEUZPGPKTLaLiFA1ZUZBT4PXg9jyeqfLFgkeYu4Y4V21PzTVPLmgqFz77Q2kJLGG1vE6srxxjPCk",
  "key23": "4J9HjbtpsRKjgrhfisqEuepPwd6pSD8aBvDrbyETh8qZJr4wuq4bf6AAzkLWrJR1aYpPBgCJRt3qoJG8ntNPzttd",
  "key24": "5V5RMopSM5kVF65TSGwQfADyFUQd8Vf5iK8mtUoxCD78wqfzNGqPQkXbPNdFM1bbCiiGifP4NkuZDL8td4ztfVuU",
  "key25": "46LxR7BKNkRRHuesVDCoEybQ9sU49kZ4aS39Mph6tuGCY7qtTmEUVZdT1qRGJJ7UQNCWjDH5wRuBNuAd6MeoFCjC",
  "key26": "2tP3peYw7UaHW6eo4Wh6hvTP7G4P21VuKccfxi1ASzGQRWAAxcvA3PQrCcC7vyfbPQvuWTRwsodXSqmodXpnTRVE",
  "key27": "5gPoRakyJymvGRVUDNAQuQEkBUwi5P6FfLv5xWbGsYej5vWBN8vaEYAbz8z19MMY7QEJREQi3UVQzQtNd8v2dkcx",
  "key28": "5pCHUWF8PEuBinZmjphWpjxwHLUzWvDrLvvwF2wVuA3jPXQP93FCJmeiwnyfLSQbGC6uY6nD2vfaAg5gyaDFoew2",
  "key29": "4fZm7xfgBNrJxvs5J9LCpvVHoAkz8f2su5wqKi9EjrUvFia2MD1BhkmQ7tD8Lq5SwwkBwq1SwDMykFsKXtts1oJ9",
  "key30": "S4yDLpWTmvBmiqSnVcLdrjwnHvzcxLM7NaF4Xfaxuv5D6CFs7AfGAzummwgiCq9fW8CSroGMoPLsYmCK8WSdeWF",
  "key31": "5SH27UggHamFdb2JymnwYRG9REER4wwf69qBFf7Zmt4JFFFSiiVjNsxF2LbhKX8ayorhPjJu5HTJJ9RX1pLiweCQ",
  "key32": "26esn3sRg4X1zBp1pDWJ3b7BBZMhvN13svoyKiWC93JG4D2bhnH6RE45YuMhqsgruRHswSyFuKx4HAkVskJooo5f",
  "key33": "3xCB3MF96ZBw6kMMH36QqaUi6zHrVg6vzBp3JnNBZ2p43xxJ5rGpDTemPLe91mW855mGpjyYjQ1VrdgRZZEhq64r",
  "key34": "ifzuhLmuL8d94JrwcjpWL5HA4HGiaX3Ct98f4UWTyMZbHRKdixtj32No97SNJfXaXQn9ceL4MqQyCLwNUcpGF43",
  "key35": "ebKsngeXnkrGxNQwoytGDYELz1itFKWxScYb8A9kwHufvB7Gn7MM4CRP4HBGFpNbLqRvMADoFfcVN1wdVnbXWdi",
  "key36": "2WYP3CZ4h2FHWBNZBdAyv3spstxkDeHztuvTg4R5qUeCdAv2gFKEW5fvaJdHYBpfTFHF8s8URsXav3thNhfcSh5n",
  "key37": "45RC51f6JAzoXJ2Snbs4CF8ShhGY5tcT47NTsFDjqGxjdCenrkustFUSMNjeK2cnS1W5MeMQe5cmmnHSZBkeQA6j",
  "key38": "2DHxzvgyWm5iJiozziiM9ZmEueFmNikk4yWLSdyjtNywGPqvZzrCUWBZ6egnZey8E8LtjR3joqyXWdDXy78CrS17",
  "key39": "4xMZXBktvK7iZXwWhgGEFuKjxAfU5gTSd9iXfQNBTLKPZWPr3nK9cH6u7rkxhN6Ec1X7X7LkA4WxQ4RDxiJGTCL2",
  "key40": "5XLy5pNZyoL5AxqxNtBQ3FMFdDDoLzPtCU6xRB4SRwvts1cEP66MaGoUZSpMrvMTD3Boiq6nkjQQMKR3rGWCN2zm"
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
