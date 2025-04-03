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
    "5tiPzaJp8v2snyBQ47xWoAiqKUx8BDot4HCK64ZhenRAGTy9UANUcXNga8267hxaoxBhGe4ijcshbkhBAwh3RHcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWaXTsojRgfWDp9WiuPqye58fwz4QrtqD77KZkqwYUg4339MeEJvxu9yv2RGPqWnJU1bAzTxayHSc4UcgJmiuty",
  "key1": "4sYQDUyoqYMSnHPUoqvfpyvR5dFkdE34eyAVPLLLuTpFbXH3c6FoJau8Ckv9FFttBHRNNokasQDgZajM8XTtgTGu",
  "key2": "4bgv1QjgNMJoi3moPVuAP44H9yJxsHkNndLGsGCPMSAKj79m86aiuVq5146BNt5wze28pQ72o9xNEZkrPWVJWdUv",
  "key3": "2ZiCNCEVTpTS9Nq3SRhMJZT4iBQdmgLUCn8yY58k6PyEunhtajVxG8mty7ZDnKDiz29eGExvGq4wBje9tJuB2FNE",
  "key4": "4uHyYAceX4kyMc26okbdSb9s5Y7gMSLXFY3DLDQ4YRPpFtpSntNpb1YRyvXaCSoFHSGmRvwxMSoD2kWBLegw18nr",
  "key5": "3nHrNVLLcrtFReJzBZLytCPZGQDekxRAEHS1Ys1AHBudtj3VBPHz93LwzNb1JEVpty3svGLSGxKZefzAjNXcupxh",
  "key6": "3ESz3miKpkqy3KeWjALPD1R4VKpNNu5RyLKu7GUcbL3yLcidGUCtg6gFzYgQbiawKhoGJ6rFeAsDP8818hbeEdSE",
  "key7": "5nVqod2T6Q2tdTR8x7b8hxgybfWY4Bov9L3Xx2QKCR5Ke7ex4QmB2RgjpeHbTWzpBjWbUC7FDDRCcDi3VK7KEELf",
  "key8": "2hEs3brNh8aqF4a6kom2LUJcSXHC5AnRy7Y2CvAy4WXWmwCW6CBDguaRk6HmKWwYx86Lfmcr4dUuRzaYWj82dny5",
  "key9": "575vkkHq6yrs1wtKnQugAmaStsUbq8GfZtPRqcutwdFhZNCDLuYBEKaw9gtbeeXLSyNtwDMQPNZivur8mNGAR8br",
  "key10": "39hg5TSyAP3yLgzaTiL1uGrpV7zXCkEfbYQXexH59aYTkQEdALjjPLFm1tyJLWVc7trgTxWq3SjcUom5tXDJmWcZ",
  "key11": "NUaPzto6KNiTDQauj9AA5x3TgV92q2fmdLsiqxv6D2eZna5T4bB21wuVKxTezu2tceZivZdfFwWDkWFBWy8ZECY",
  "key12": "Mc6ZthfjHmzkGUG3FQe1acTfwAtrNop8udt8yt8uZbB6y3wf3fbSytjj4Z7kESnUj2bG7GMna9j1x25fHNAvtDo",
  "key13": "5v46HRpxQRhfY8YqtzUhPAXej6JVLuQnFaFswf1hX418q4Gh662PhVV86wvvEeoHnWqY7K4wvL5vhPqReDhsV4VT",
  "key14": "2uaYZPr3W5VL3cmHo3MevQSh6aQPnnFfmPJ9E4GM1FPj6N8rxVUd4DG54DgZRTh2zAYnEqTJRLvJH4VT6AmBMUfS",
  "key15": "6yB9iced3JyUtdpW9KYpGDahqxx19YNQLy2mv7PiPDGXvn7DrHeGbu82ciBJX2ZbqU1Fe5rSK4GfqdXNSM9pkxp",
  "key16": "3C46MeAgmwXFQvz6d6JndHgryCRcGKrtwSVMGdDf6o3HCxBXVQEoQyX56HyAMwwuDrqxPRZpU6j4xNhxT8mSnd2R",
  "key17": "3APqhVUxTuDKnMXxAZQzr4mTY3qnYffp11iz64Cr1QHxvX3mKTMfA8T77psdUvRQkrjvhopnzNAHbS6jWCgkoEpS",
  "key18": "2psekbVzFJv4gy7WgfenvfH3r2jRg189eMuUDGrWW1uhJkumRRRJWu94hcdXcRyMY3Pt5n912ZTqYf6rJtVeHLTM",
  "key19": "6427AKikH7LoKDfrXTcYjTd44dEM2SbaYyU8s4f3GXCsveX3T1mZhKgRd8HVyFsF6ctUUF6JoLpwH1eoWU2TANBk",
  "key20": "2jVw1UegtLu8EisjfrF7JGuY2PUiAKFPzDg438f5XGyPdpCFykgoqFj7Bivh8P95BuTE83bQCMFixWQ3zWEBnpVU",
  "key21": "qKLbbVDpYb2qvg1A4RRqpR1oeRf36i1YpKTLVFmN3u4RkjyLE5XMBX5f2QU8WNUpcxbTSNCHMTqiuQMY6PNKSfi",
  "key22": "4eQdsPTDTUjUU4tdcW1dMs23Tmy8Pi9zcPwNwgcCVRdonUvyY5EjsZP6pqvreioBtxQ3igqhhhC3buHmTwN4F6kB",
  "key23": "5yTaRJjTJM7yd4VfzsxXrY2SY1wu9rNjb1CS1hmuofFTDZ9TWqT9rM28Xf2MaUXqATboisYUaXCFPVi2W2zQAkQu",
  "key24": "3dFYKsJQifxAKTkpm2kFRemdLzQ9TsD9fjbjyXrMcmgb9121894RcZp8yfS8RVtFjcYKGm4EoyBufo6GEmBG197n",
  "key25": "2ftgcoFTwJS8dXJW6cGToBkX61bVPDiBAEqCgmmCUSiou1y6YQFaBtARhzRtsgSfs5Whx1fh5k2JUMAWnCjyt4sn",
  "key26": "3wiaYh4sXmLdLsej9P8rSd4Yn2tvhykYZMp5nSycb48KTtx8WuvSMd17kw7tScquCZHJVRX6ypB37h5rNevxeNpJ",
  "key27": "26gcCKvTS3QffTpgazqB8Z8qxvsUn31sCfLPbrLREnkFEf4hfP8Rtd6TYathuRsqGEGPD89kjuUafTyctp5dy9Pd",
  "key28": "4ZTdKHSjZnuKGoVfMCBFcH7s4AZrPH6ge9wE7P2ea1qD6mqVGfYvqdBYXgqk8z14xYzYcNjF9iK2hVpoD3mZH4Vz",
  "key29": "4Siw4izfq2u4FBGD6UrtqW681gqci6gpoQ8EdH4vzmNTKPGPkp466r4BjqH5uCx2tsUzr8DfYFZRVVpnDAtTGJjK",
  "key30": "4XYB1ke9QGvQZWVtEAsLCqPLg8rcPzviYg3m5nYM5ap4LJnggANbH4FGyCYjwnbD2QME7gGntrcUqsnNCZpib9V3",
  "key31": "n1bTRzF3JKS3MZ5VeqXD6yWkDsryidQ9HM33waZszoN59N9KXYXcYCUU4dLudF77tMCz6puHBw9sMuEbQUpQ3Qf",
  "key32": "ViTDWFYdCVkdU8S14SvdtHc2go5oeU9khLVDj2KJCiMgwxim16BCfPX4Y51cUJBE74LfNLinuhnQa1PztAegZbv",
  "key33": "4BJZWkEhjJG7v4xhMF7oV9hYDjoGmoB2Q8uMYzgyxak16mMjz6V44VTF18puvA8HXhpEYLVQNdQqUZdWz7BF2NKU",
  "key34": "63JgnVTzTnTFjXQssLFAqBJkCqUXVBPfsuvcpzNH4jdYSEtvpQjH5dH7vmbjpfBZSajRSLx1Fza6stdSL6VwoUFF",
  "key35": "51jdTNvMVXmje4nZq3vbSwvZBhe7LQFWBHtaEZn7ugAp15VXHrWnm1nxUTh3ACYMkJ1M13S8mmLmsrLYtHfSzijF",
  "key36": "2MgtyandJqkR9M3iQsfKqx4PkvFCRuR9o6BHuDakSfnnqoBZtJ3LVsof9HNpFRjTbJQNsnWoNcvUQWse6mJSEhef",
  "key37": "5eEQ2xYvjz4Z38ErHQN9R1gb4i4qXbExqmFZxg1Qi71zDXmjk1gvU9mdyaEbASZKGiPDkGYffSopRyeTBnGqQehX",
  "key38": "4fGnXv6boR4jLeyEQmjsH551kJqbWTWrEaCJPPME4J6g7oHJq84L7YMNGaL4TuP3Z6r1wM64Gc6e7wusxqCCggMH",
  "key39": "5MycnrPfbMmQahQ44L6Nwg6NEpbCxELZerhGUWprXXTdKtpWfP1JPGy2pfGg7oHAsfK7EiW3DkMX4nSersM2XuxP",
  "key40": "2NRp7FftbHwLp2dKP86rJdpsxhGCZhifBhhXyrWB1Amim9EyeLgd1sM9e81AfWdvHNWVrnZ8GjgtdunGoz9rq9E1",
  "key41": "4qnQAnxJruBm1TCZUnxewhUWVsyGiCpVW8oyP8rZ3JXWrudSN8EoBrRdzyvWvEtAePBqDwBJFaBKz7ddaJXChhXd",
  "key42": "5Snrxn3pESqSVuwfLEwbkJ7k6AsPzcAhMJEE2yt9TgRx6TRqW5b7ckeTRDNBX9tjxW8F1FxFTVy7QkRWhu5j4Rcj",
  "key43": "D25F4HVXw3AFM8rEsCXRyFXodwkayFYyxkKBpq8Ns5tonsz8nZeUBd4X8FSzyaz6F1Ma9p5tamSbVGmM1Hmcag8",
  "key44": "5x27PVipuEoPXSxbqfaXrvLTooGXxT53VhxVCdCAYa1DGGG3on7h2xR2sjGJ6Tc28r8cZVvFU9jT5eC7bCC2Pz7G",
  "key45": "2TbZjRpA58uAG9dDT9hhLxsZxyqrMaUC5bxBwXxhcRPruDVhXPK7hSNUYLpidKVudvXWehBhcRXpLjJmXtffL2z",
  "key46": "531WkZ3bNFJou3im5NFKebkcZsivBgbW1FRbQf6TUqhpsUzEM1RpgThNe8Pz9no7kPM2K1vG96Hq2eKts4pZErwZ",
  "key47": "5Ucyq2T31aaYRbLy7hVAbKaSU7eAk6GdAmBz2zZyxwAeqHu2B9hzhrbrBfutsHWfqceeivgQmuTyNGeEGPRpz4K8",
  "key48": "24G9cwhCk7W9GGkpmEmQCZZWtZybMP2XeHUEL5Zv3EQRd2YZcWcaxKbcAuHRMP4LkcjHiriBxXLqUeyUXv175Gyz",
  "key49": "35vH4xh3jTbamakbUSZXeThXfXYEtEdnzAWfWceG1awDWwpX9huvs1ebzchHGKZAx6mCR85KZejKk4AyUrgvzB5q"
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
