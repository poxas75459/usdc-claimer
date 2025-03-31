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
    "3WsSt5gDwHGtsh2pnJtWieDyLiL3r5dN2yHyovAFyu1RQa77kuGMt3QHyWGYgF1Ann7N75JLjaDCRDJWKf3g9y1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RASyzJMqQYkYExduZtqpdMR8TJWC5HVHpRWNGMnaccVWXPMPQA4jfP3k8ttPpS5tMoHmsmne51TaZ9pctFoqrA4",
  "key1": "5V7UrZ4VsYh525BRJwYQxBMFUfhWtwtDeLqdaQxbNwZjyaApcVP8Bx2wJrBL5Hhs32E4EXLtoQkoi4fL7Wgs16PY",
  "key2": "4B8TfhuQvUU5C4sTspdKYgakRV3mhcKKPEt6XwvqPoq8hWBzJs3RdV3ajodoRPLG6uaQuv1sxNh3cib6icEPRuhV",
  "key3": "A7M8rMmsapUNdpzC4ty1LMcDuwFJ3Be5zyrMLTCkXPuCGZTZPF1WQQe6mqW7m164W6G5zm97CmRNGcf14AUhrKw",
  "key4": "34KLo1wAX3QJQnu71vvex8Vdon27ryuNTi84YGcaJ9En6XS2AGzUyJUxKDiJDDYL4Si2dAQF9FidtdN9t32u1Swi",
  "key5": "66siiGaMQLbATCLAQJoP3CnV3EdgJ4pcr4Bm99dtsQNrtKPpgu9cqx3QvWwFaSZjpkZHqf4GeqanWCTRxvtQpGPR",
  "key6": "2SZpMhn2PRHnpoe2zKnSUomyuegMPtgfr1gCsyqTQNfKMDRA9kmCnziaC1Dxw8pLZLT5h2bUwKTiSNAGCRExQPKq",
  "key7": "4WP1wQCueDeK2oQLwCG7ARfrvJGUvbmCvs2f9V3oTJfZdg2eWaAU6vfjXZDELsZur5xtgNYZc29gxtBDgTT2SQkJ",
  "key8": "9DaZCohNBEfEtWoMQ2xUR8CVzsGswvsPCL3BHbT55aTDvcR39X9TsQH8YHgVW7ewXaxpYWTzZhCpcqhKCcE4CYv",
  "key9": "5N4QzqfwzmhFczS9dNAw81C4dfWSkF5HDTcVJspduVGB5YQPqbv95SQuJg9VF8W7uAPRqqLo92CjrZxhaUJPwuqa",
  "key10": "CqwDkBfvqVeyNBbwYHtNsrs25xZtPbz9b2p1m31UVn9Vc6BfnQwKvzxSP4hZT5DMhsihvKB2HARZRi8ypMSfrDH",
  "key11": "imbfHmKNkWVdcFRaSqXiqcboEahhBwarGpEPF5oyXMS9bbUUgBxW7mthJYNiBnU5jSQVoSSgkFzHMmMxtiSNAxF",
  "key12": "5iBeo8cfDo8oUDwJxzdhoK3DGBEoj7j2Xo4MfduySZUPSbqjpA3XwYcoR7wVrybnJAn32SnjcX7BrtVTGV9A1gqu",
  "key13": "3pwsuRzVuCLtubnCK4smMbaADLCfxoLZukXveQV2sLkSFvQZxbeTSAxFPs82GHWBHgXFdPH5Q2T4dXQ1dUNfE26u",
  "key14": "4WED8kescM4eVmCUyKkGtJXsRbyQMecqnjKZCZABdRZvF3rE4iFW6uoMZNLoG4oeViBhoUAEUc8GPm1TmZSga91N",
  "key15": "42DKtbM2DxFMbj1vqTVBEkFduRgHESfT41ofvRWzg2GXibyxAGgxngHqNevNrT2EreFY1vYXJEr6mupDkfbJTrnz",
  "key16": "5pTWmqbBRoJJ471Kut6BSYMa5hrcQw5WWHao3HSVN6Z7vfyNa2VvgDe6KJ9NrsQYSmJRf75KVrY1RjxQuT3kn5bp",
  "key17": "6U6ZsWsxjMe2YC7PbMvDhZ7CVyyMHskvqR8SwraH3YyQXaDnKwbzA52Q1yMCbTz3utBQVwjj9MXPjHBYkEDuuBi",
  "key18": "K4uMXjPyoZqJdwhG5HxFCffBRYKgJMGAQ8XK8VhXD4zJfBCvqJCbAYzK4DYx4cJSnknWsPedtB52KSHh6Pigx4V",
  "key19": "3J82zWRJZmBSVdZx1MoLpa2vh2tWdnpwZo1ZTKGCRCUchccAosLdqz3xebGJRStShHw6j9zQVif9YkjgDVjj3cJF",
  "key20": "6dqay9Gw8Gi1MXdXnrh1BqkM7JPnGS9UfmHGrkRHDAvsamJ3bS92x56S8fKYju9yZJctRbDd6tzudTA9Krvheh9",
  "key21": "3F9qvANrEYSRq6h7VoweSYViSmVyxsBi2zJZucBo9sHeWAkJhLsMUA7xCS653DKidTZXtHK14NhcP9MKkuFE8zrx",
  "key22": "4FtLFVNdVFewz1PjfQnQroWRcvaoDA7eYEHErszkdRsQhb7qWn82h5yc8VCruSfRPmKrd6dtYLf8EkWmFZinCufb",
  "key23": "6t6XSVWJHXyaZJ2RpAwP3kBuhpgjfhiSkWJBveseXNdEB2qMQXkzAvfGMKEgSRnFyHHQ2Geera98v8odxevQEzW",
  "key24": "4B1ALPWYjbtZr96aAMqmecfJYnBBeH9AsMzHBasVa76uWUttd2tpwwHYi22FrA14FrWiCppjmyK7VzzmdJF5S2Mh",
  "key25": "3k8RVnwVQZJzfAS6z1H6aJ1jPYE2T6bNS8awiSK2PiBdZcpx1ppyKjW5MAFShnJtXArLHKmRrxoaz1PjRZmy89tP",
  "key26": "5cBkzmSfdC7jBtpXv6aeuYkPfcunkZu4yQv8hnsuHWDbZVnvJ1D7tzbExooM8PTLDGUyGD9iHKA5MCke5ukXUeh7",
  "key27": "2WpV6rEUQiqbCkYBQvZ9fbpYX52g1Abj2SDwRrjpr3YEibM3BDH5VGMnhu2thfEQX4wDd6kYyuMZMwcV84i6WNyA",
  "key28": "695KLFyivPfCLsXoTYxwKFibtreoNi5dPEYpD6NxBeYs6RWPcjv1ZHPpof34Jc9aF7BMT9YugnCGiuH4zdQGQah",
  "key29": "43848FcKFqxYhMesMFjKSGfCpZxbGUFFiB6mFkBVy4Zeq2KQouWHZsYWhYeMPKDhxAw3aC4D7C9EzdGfKn2xUA1G",
  "key30": "3VkwE1e3zQ7woZT9jUoVrdnnp35dsxTTRBPr51Akhtj6YRfcfPjK1KwiRFd6rj7fP27Vg3aXPo673gHzVjdE3AjV",
  "key31": "3ug2unznpKL48JMD5F4KcLNbLuuKjqsqLsXnHgdPfLp9xVKbqeg9r5Wokr77Tgz53piKi5cGsQ3CSvRABtgfS25v",
  "key32": "5WC5YqePH3Z1Yj1Uuu1ndtecta7dpr83v4nkCEpFiouGqJvYp6sZQvHQBdbNKzceRQqMu7bAMQjBGThrGrRVcUYq",
  "key33": "3bJ6UuwiTnE7cj1cYCx9LxaxoHwta9sX6fjuFbyTNfczuPHn476iegVqJBuEWjZbF9oyXMTVbxmmVUSFbdGtitCM",
  "key34": "61HkiZAG5ypqyE8pH9a9s5rFdrFvRcDrAW1i6qJgEKNxsrXf6qczQV9now8zGaGiRN8udWqPvkna2ZM7A2booAMs",
  "key35": "5FNLXx5f2ykRUEnpx9GkHvx3zzLE5As49DBqhvfABrPZsSTqNWJ159DjwUFbJJr7CvWdoti2t8XmR51M5d4hvasn",
  "key36": "326KVXhc7CwiDu96yzCZy3jsrftfeUYf5Q7tPmfMXuMF3hDj25ZD3YKjgXgKgUuhmpFBbuSZSKigqPYowSyg1voN",
  "key37": "35bdrpBG8ZpmGeY3nk1RqM1z4MaGBgTStKqp64LAAoaFqERCQcKUud2ofJim9h9Gg8i1r7Jv2GRRcDnPqJAzxLyr",
  "key38": "5xoxZbiYSV8PrZh1omAYL6kWUdv9hRm6yvNJNZ5wDe17L1JYRQtZKhKD7b9JNtYhRHepL4VrShvknNS6PtihfpiB",
  "key39": "3Znwcv4aStRN1gnQqYaK4ZKaLWrCCLjQfSibAKEkvExpdwxuK8GdrjJRk9vkETV1k9DpvMz1mQ4LSPfAYkEKb212",
  "key40": "3HfdSKsrG1e3fnYEoGt8CLPU9UEE8NfALksajfiH6chLAAe6o48H5oLfLfWWkWsyhr3WEVdmdDCz21413TvdmJoo",
  "key41": "4m1NUwp9CWVL38Lfc9H3XY7g72FVunxw6Ex3gQWtLwULY5k5zrso7z5axwm2DBTJ8naQ1aKw8PRoBMCyo5gHP29t",
  "key42": "3ynVqSv7BY4pWb3YzhM17CGDWr4weVzSCXGUy87TbPwuPftdfdjXZDqiWhUQ3pp3pLiohCPrFyeRnRCa7F6J78vr",
  "key43": "3Pix8UTWtbLibCrtu9TyPnTgzkgLjwk1GiJVZ6GeatcVJb4iDZ7sUiA6C6qy8EZk5xg9bL5nW27TQTb9aPyLEc1y",
  "key44": "4RoLMhTDbQ3oacj2mAgkiHh5X4YgA9z57VhGPtgkgsSsBfcfcPo5bHcbdxMYLpXH1zwUtGaKkJQws8dR5Pd2Yh6i",
  "key45": "5tmSotJyF7PbmudX2kaLADTEoBEgqHAD2H4zFbezk5Xc6xkEAnWsb4eB7H4ehunKcQYgdTVXYh81ppWR1CMNuFJi"
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
