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
    "5gvXyMCbWUBGLqUu8SxP3VHLy2SdWpUH2AwbPGoetWpMedaevTCrXWAa69RUgbBCMpbAXrGzEgMTuUZ53w1wLQpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WEimxJrMjbgRh86q8ZgNmAyGrBq93awXxcd3XiCSfm93Wu7PfKKaTytopEsG9ESGbTA9hHzn9RzTAzPxWAHmvrF",
  "key1": "4VZTTygrzvXCZnHXgpfgjwC1AncBS9bFWc5wR22r67iDjhqee6JonGcvm8v5Pj3Fj4ERBguhpxENd2B3ZgW95VMi",
  "key2": "2H3698iGQJSExmmeHWg7ZNDfcNo6wkVHPfbkpGwbmfToMxdgeUQbibKDAk8gB3XqCXBmrrZicW98msDRJxUa8doR",
  "key3": "59iuJDcpTTB5z78rsQhoKyE4YjbDLtGrv2z86hsi85SQAhJookcNEnnPoeWBxyTDV3KtYSDGuoL5PGvvvHQ6bJKd",
  "key4": "QQjzyAP9fbcSHo4hMH7v1H4zAEZVHpkDch8ZFT7zZG1feA65PJzupD1XKeKMaCAUdwmr28YYTVjgjFYqdXkk7WQ",
  "key5": "2vFxYzYPumHfrwPM7egmu732TEt36Cct2yPi44vJnqj5XpsMJ1tgsTvUExQPCeHKqndXT1p9RPDtZtuDvhaHF2XR",
  "key6": "42Me9qFrKsEDmWTaGXvFyxk9wLEVHdz59EsCmApubf2XQqNMxm7aBuxRjkqzLsqXmZ3JePzrbZfiK35faM3mo7Fn",
  "key7": "3gMSKMMy4V9oocK7KfbTDmPs8QinfSu6x856YFcjoL9pgrUguSgRBf8EyZRJGYqWyPkMfLFcswSHxMzJgBPqW8DG",
  "key8": "yiQmjcpCjQ4PNobFhK9xsRYyjWxPptAGgs8msexTXSACjj1awphR5qXN6fvUGnekRtgtrqC9EoEqszVDxfkXuQ3",
  "key9": "21SaeMKp9xTGLw1pQPojsQXBbvdHbQ4PqkKEzq7ZuAkRu7sk51QtiFjLwYaGMR39Xvpf4cGToTLP1FQsrFG71kTC",
  "key10": "2c5zZuJv6o9fBnzwHDjrvBwsC1v5o3WgczR5rbQaNYoYCZABFX7dvXjBYhhBq4cbs7tdihWStj6CDrzZ22SR4GjS",
  "key11": "3dhyP2N2AhUj8fL5fCSBoznWr28ujKvZP5Yjh36Z6X1nqg6Q5NrhSYTBznbfr5FrUeNni7stTzXhSTXzgHzor8i1",
  "key12": "fdTeKqJiPiHE6iCUT6UvNcR32Sswz1sT6MLq25eLRyrRHs5ChV8HUw46sKCB7XAszfJC4wj7XJEXjraGJGHWr1Y",
  "key13": "C1itrpW6o73ueqDVgn6kRnjv1SMwAnuKJcW1FvLvJiU9nRwvkR6cX8mziuKFM9PnDhRcyomD4tUYUcaUym3jnyr",
  "key14": "fwa2M3xB9mu99rLPz5RW3GvoZHQgcQLN67zyXVzP4jHgynLzJPqa39ftGk1TpZQD5bZpGxvG4HHCdr23FJVLrWR",
  "key15": "51T9LRcuZgK1heF9BPpn3LV2QHtvsQ7n5TfW7ebq7okHqR7MYHXmcnt4VFNb1B95VKMh5ybqLs6iTRWUAH2A3Jt4",
  "key16": "619prQ3FNUZ7peRynA4U2ToBcmWjeJgemxCKJSy57N11i1Csmvynu126HDd4KXaCbroH9dkkabK5rHn21fJK4sRC",
  "key17": "4vVzfvZ6d8EH2XRM4TJFFiNXkp4eQ9A17fHKm9H5zHmrxWwhRdue1ShvvnRhHkeJMp2vdXjUDf33Qh6iNV6qwEpe",
  "key18": "3XXs7f93BmS3ti6zDqYUVJRmDsV5CUyQrRnFiZuH9yhHGnxDDPAJEzLfSK2Pfmy9GDRgJynDPyySmGAAhGfzGsdM",
  "key19": "5Zstc4eCGoPJzBveMvTmnfo8MKCgjPuUJQ8RTaYetD1jBDFzYYnWZrAhDjpFjhfFQHxHGbnkWyG5f4T3voeNfprh",
  "key20": "4uimHF95idNRefrMEfJD2sXNQrMSBRw2jfkZ9jejFd81K7zPBma2bZ8Usyzx4o69cFiGW9yR6sTkMK9xNWB7NeF6",
  "key21": "5GttW8U54TkFxFiWELSgUDGLwWJXoNft75AN3oLUSfAugv95uqwewFwDDwoccZz5kG1Mm5f82UgQcTQCEWKwkn44",
  "key22": "DJEdCKYmBVCcMLs4TGBjwqYRbs4A6XGRF1VKwwEp8V2TLubg2cG5hiuhCAG4zPFiGdzuud7vFjCGkMKM2RcHQp3",
  "key23": "Uvt9sxA4nbTXT6MKusxaPKES4MqFbNDgPeekzz79PDEuAcTkWkNey8ET7HA4D2jTmnSyVQEVeTQEh45yj4KUbm8",
  "key24": "3tYEegKp9VBZdRSXc4DyPf7ssaGhn2GzjCkNDF9U1T4U1bb9kmJEemiWhWRP4dnKGk1aEB6KpY6iamijhYprehgT",
  "key25": "66U8Fzhmdv3YZeLJ9knWbMWj1ZvMPYFV7hNK6pSSLDxbeHqxqXPQ7Wq4eZXE8GovWsPukyeWqDtgGtvZgs7zc6hY",
  "key26": "L6tCQWMYA3M2wk6m4N1adFFgWzLqZGbF6MW2VM21uanQNN1Cht1f7xQj2XJESQXaHFVqbSWy2zGJ52TuYtESEFk",
  "key27": "2KubuEMmZ6WUKDXXkWVnGiazw2Pdp7PNA9A3PGa71PyxLwGK78XdHR56JtSNc5fMvxkUpFs3nBoUPnm7epWZ9N2K",
  "key28": "24UT5wJtDG1Kur7bbkJdASr13nUvhXMeTdZWPJnD57BrpBPUhdZdeJnQU25XLqaHQHUJrCDSEoGaoofHkUAEW8jf",
  "key29": "Ls9NR7cTxaVZP3vbmGTxjApkZcrUYm7bREFJ6rPFMZaL8RJ69eCQ4wLz6B6URy3uxLB3yBCb1ZL1Sjqms3NQAzP",
  "key30": "3CGiq1iY4QajeoD47WiArMyvcjDByF366RopC48GBiHKmXidXdRT6HJpmWRv8zT9TiC2DBs17EBTvUF1qgSb1tyK",
  "key31": "7fhSVGN6yJKFpD5KREXutxvXVqtQf3AoE7sEG5Cr7XYFyT6RNnaRYc2iyFvz2Ndw14HN1C8bdoMAEr4qhb23aD6",
  "key32": "2DKP8KyxkqALG7nEahma4EPNgMsRSJfq7pb38k4ivxsx2J3WiQcfhyVpQTnTQKAJG8zt2TjLkf5nUYbnaHxR2QFp",
  "key33": "53t19syL7akdQycKoh9hWwatE6nYvpNisTM1sEeZYQWnBTeGXPAEYgPAygSz3NETNfXeosxjGgwHYv3acZ3JKkmY",
  "key34": "3N8uh8y1hWJ52TTSvXg4yEaTjKxixtqZcCwpwSCHs3vuiP2QxNeagmLogKwNwNCxCLpk4qq1LP1t4P8JjUaQaxGU",
  "key35": "5EzoP9R351V4kGUybqTq1ar692smYc6ciYZyS9XYUsF9MQsivMzRmsn2W4bZapzgC1J9vcRjk2dwSAHFNF8vhj6T",
  "key36": "3b1PW5JTPgFmSrDgZSzXXDFiDQp2u3umkbdH9CZ8y9MbeEQYPaNAjihsPG5XjsX9BNbTwgzjvTDU473ovoPJVufw",
  "key37": "2X97933K7BQ4awcxSasmKSGaUhCWskFgzqenq63vR7toNW8bgUY44H5DyzEX13UQN6CpQacdkQpsneehFhojbwoV",
  "key38": "2ExaXfFMZbTBV5CZ9AmYArdnEPQ738VPia3UShVqFARhznn9Q8jmPxKq7wbBnevLTYLzgcAiMHhPgkzpQWqCFLuo",
  "key39": "Hf2rp8h7h6MAoA8QVhiCDLLr3M72MkE93oFKPdQVyS1JNd3LPsbo1SbgtxBaMhgcwthaTgaMfJsa35ngM7Y1jC2",
  "key40": "41eGwwHbMPwTWbw91fT8cwSC1LQ9rj7zHjAs2bVuWFYS7st3thReJaB6pud86SfXC7C2Nc2NYgowLCHHD7eG5Fz7",
  "key41": "3qqeAinfNGiZNWLcZSY7KJ2sjF4MrFm2vyxpqf2BesTkg5mHTfcr2cjFxmro4VqnBwFjYBxmUWbBdRNKrHa4ZwSD",
  "key42": "5UkkZsC3gcqPKzE65nbJRuWUdUSyDevEjk6CpGkEj7BaP6w8LjKThSwTtNLJC4CBdPVV2XkDdXF8KCzm7fR7ZSER",
  "key43": "k5RLgmsApSu3JVQxpatiLEQPBLMedW78izxHRXwbspVk3mUwcHPcZU95jSqyQqoENR74cM3g3whE3BDaP3jouFY",
  "key44": "5ng8RKCN5B6b3B3pPzhcRC1rYg3AMRByjUpa5BjuYNASEYxHwZoCxcNXCb1wTt2KoFqawuVSf24WFkBYpYKU1Coz",
  "key45": "5gNJZAMYvbLBnTFTFXBgXgKTo2iMJCqaqYhyyEqSo6pv8E1QUZDRJ9QxC22MCNVFC2PfzjjxMU5G8U6mMwc8yatQ",
  "key46": "CLwAL56NtAQD4n8U6M9L2AdankFdX2pxwaDFkjJHdgK1NXMEFtCj96WuG2SYCcXqCDsMyoLmLfbB4gnFaZ2t74X",
  "key47": "2XxUccm7PCvA9Gfowo2gVrySfCCpwsxh1dx1V92KdQrnJ56DTP3uTnWAPEvMwFVK5JxR3PvzDJZTGkETq8B5hkd3",
  "key48": "3UYWfpMHqM7qZ3z9CAa9brraJVpetuntED2HWpqa6Nvj7WxjLodybaV5fRKnRnd8gDYjGp5uHQKPyrrHtRaKZrM"
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
