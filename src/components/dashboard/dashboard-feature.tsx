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
    "48mhJaUg35YtpuKxw1JGJd2DSwHSQe12erVtNwo6ziNHoNHHMMHRUVMvpe7944Xd2G3upgqRuMsCJ1zjhbsZb7zM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZqPjirtfiA97KuZ27Av4CLLSd2aDv2SQLMGZ6yToVL1szTtj7n4eNgv25sEFcMQnSgtEsTTGtLMESU8TPLrWqc5",
  "key1": "9bTgouqLjFLuwuuxzXFVTKj6tiJj6t9sVdXphNvWhTGEqNe9USWD6aaWWRgAxTy6wWtEeG8Dp1osoQBUjDwXCvP",
  "key2": "3YSjK2CP5WGKK6P8Ky1v7nb1dbP64S23Ldwm1aLFCondJSwaLAtCGVUHe3uou944WS67XteGSETRVbehi7shjxpw",
  "key3": "Uibg5R5shhvmSSyk9T8EwngBmfvrpxAGNQy5KYbJ72QzouyTLUA4fWdUszLyK5kcUogwb8UyJCvWFLSNHaRRv7M",
  "key4": "33Au9WvjxLHTjoa7Kv47FJGP3XsALv2Ro4kY4rNFGWupNuYiKfeJ8eyUm2PTThdb8EkVYtYTPhP8D5gFbxAhxt8F",
  "key5": "4RfM2QWh9HwD6VwYcZG2W4dfMDNGs6gm56mk34qMLWJRJY7qMFWEuk6ry4KNgJGYAXZ1dkQpv7PDefog5xUiuJUq",
  "key6": "5D8m4gcYKbvjQxQt8p3uXhr2M6pUBiTFBwvqtvqwKKTYDWGmpKgV6SzQYXQMuTe29GUn7z4tQ96MKBgb9atfQKid",
  "key7": "5XYoYPpZEkhbxF2GQrSCQNa9Pexy15pym7G9tHtm2N6FVk9CeDdXMEu3z4riRqnAtKBvKqPUWC7UyyAefGh4fi3V",
  "key8": "ZPqN7mF6QEUWk3aSZVenqXgQZEY5QgGNQzLTHkAkjHE8SrBKjWUV1wFrtkHvEry1bdiJ8HQuAnWyyg89a6CUyVH",
  "key9": "4UPMonDndF1Cp1LDw4AgVNpquqQc3TkPUR6gtPGS2SHWFYkif5dNPnvZyJSJfr1kKrMbtSV5THa1erBbmSp858rm",
  "key10": "5eJGd45SzejuMxPXssDA2p7mmv3EX8iUrysmJtqFrhxP41LU3XHgxhHZipr3yWPBSmrKcMsneaetGDzdzcKHDwFN",
  "key11": "5M9Xwy4uPQmahv2L1VRAuBpVfxmdHjxU9WesFhfsQ7Yqpms9fFTR9jKtGJDJihUjArMf7UJRkhQwN68tBr3bsEFi",
  "key12": "47HmFCMmEqgsD6Rt9bDUL8UXurcgJ7fgPQtYbaPNWY4uag2eUdUUDofuQZeCxtVoVs3Dpdnp429tfcgqJ2xoNkS2",
  "key13": "3H4jApSHvoTa88as3puHNZj7QLSGAsA1jVixc41ZkddRseMFgUCsi27vwcmcfysGMhTjQ9tEdtpPAFQVW583FLpU",
  "key14": "4BhzuVTdmWjwdUMDh9kaYXwMzUfh7s4CmnYfvU82E81TYPq51wFGRiy5r3QQPRpokyLFGBc6bPyXyZC5z7bYeLNh",
  "key15": "4SLD2HJVcRH3M39jeYijMwu2w47bt6XB89GFEjdu1ee8zmc4nrH3wFe29SasgNEwizquEJsB3HpUKcauwZURcUgj",
  "key16": "5psnAgvXDupfKyrrhLbXa54bR3dzVMVUotNY3u3B8ZNCmNsMwmLv3Djr4J5N29jbWZUL3vnBz4yxjkQt6d3dR19E",
  "key17": "29D29MgXxN5Hais7CxDLywwEKqdvBNd1omCGBqZWoa69JfTpAHKHTUPsXN9vCnuvEZ9mmEzNTfRdRaBwY5X7Squq",
  "key18": "5QUSjxMXwSbmDagHSZ7ogqRwWQYheosaL1dpbFbjMdRfjs3ZNSYdP1rgoQ7DKFJXrdY8gKANFe8mERiUHsJvLgo2",
  "key19": "63dArtXZPbnp1diReD8VTZAeX4BnLvAkmxVkd97VwuWAuwPox2vcaetsu11Dgigvz5QuBDjpFzwMaDX9tkHKLGSC",
  "key20": "3vnkSqRWk3A1Yb5MVMg8LfhpbVq2WUiuimeHb1zK43o6Lsu7d4ri3T61ioHz7Tmq512nxM4WN3uzkcFxgVd8ERHs",
  "key21": "4D6zomD9QCgnVAd8x3NEhwv1NpZmn53LiWKjADhZwozkoLjhhjmvudEhT9jwenZM5gHinxeV1XmSALNrnD3P8L36",
  "key22": "22quV2sBHwvPYE1HSSFPGDSSd5Awtp59Am7m5RgC7XACZw9noRuNk3cuwtJboRGVhz5CNknfoJm8iEVZaqaEToPW",
  "key23": "9LcUb9JphZTUwgJ2Nq6F4ZgVxCfaHKcQEGL9geRnzFoHybpLa4zSEVHE6nt5BfU8D6Dh6MhyNLaRkHZ5F1oVHQo",
  "key24": "5nJqP1MPNnzjXdybQaHeVK63RjoLLCv2jC9j98USYJDUn2bUCkbTaDDHv2x3koX124csnQgLH2FBBM52cjWQL9SE",
  "key25": "9y8GNpZkzhZyS3V3rrk11my2jvXySfgjqYaMpde3qEKCEXNxknYKfb8i3GRXdrkSDcQUfwKvfh3ZsejuakjhBiT",
  "key26": "2vLpeGQF575ZspFXLj6vdRaPnUUHATPWyg6QSrDeVQAoz4SDwLkDrQEJKdouFMiKKu2MSt4i8rrSq3c2N6TAsXdk",
  "key27": "539ap1Eidzcter5g8CyJZNnbHvyjZpmEfzL7ymf8jUqt1ak8tN2uUpStCYBG97BH1km5KzFNZ8hWStmHWNkWd1yD",
  "key28": "RaSKZBF2qzKF5sNtfBZuVjWEfcAe9EQnAvUSF6t7J4cfqqQ384ELgrzARrEahinNL3RtqUd5xVVv2ryW533LwWL",
  "key29": "2L1zM8gcy5Y5Yo6zjdCLrptBiYCRDfPzEDDpa1Ug8Mzog151UQvvG2HgwT4G2zwKxwriJ2VQEqwUadKriTba2uvC",
  "key30": "2JPAB4K72EKBqucAd4miypuTs8HJTVBKKcfn9KK13dUoB86tpgt1uwrht11T7FGK8X6AvxxEG6NTm8vKKXi5vtQ5",
  "key31": "3rZty1LtZTJUeSyRKAceXnZQkCifFBG85kev1nMtYNnBPrKXEwyDRp4FstBXHtXnnmnTbSgYXwUcSH9DizHtetw1",
  "key32": "wsj83V1BcbY94nFxd7hTraRdVkdhMUo7ETuJPYB1qiiz6vLPCfJJ8Xb51PyUmuqR9tbvBUcV5YHHcvyC3Z5Tbng",
  "key33": "nC49yE1BQoJSzAFnSueQaPqnYGST3MDCXVYChQewRn77X1PxtrrSnGpztt8nX9pemzux3w6GmG5ncKnnj9rzMuS",
  "key34": "3jkYMTbYGTConmfhnxGcJQgVgVZnuvAwtkbKQaQD5jiK97PQJjwHrSVFavBfoAzoKYGGrrgBuYZiMutocnGcBKoM",
  "key35": "5PkxC2FegnGaN1xdhhk6dHDUnVnT6UuVc9zoADy7qtLR5dta9K9XyZseX2p8ji9WHbYuSbo3sSraJbtWQAvLBSMq",
  "key36": "4XDi72VUMnxCJK3TySnEbsUVuQjDQvkVY83Thh7kg7ETTdFRteHzLF8xiSSRsKvEkdQcBxafHnHhXskS9Ezz2ypP",
  "key37": "2Ze4ptmEy81xoktz5sAVvTFRpCRQcAHeur3WLdCxJVMXRd3zbXTHtCaEGZnLjDD98xgNMPf7fvkJ2X7sySVaJs9z",
  "key38": "4ffPwnpzBaRLSEG1zAgQPxfdttxGzCagm3qyKhLavbSDTH9paUfxcy2pu2SSKvf3Q6LgkBiURsxptpYa6A56ppat",
  "key39": "KCyymw54ZoSgRssAFvCcxs6vQWWo1Vz3eFQVSwQ1sEo6DCEG4KFZtWM7iWnWmWkxkzm2i7s1u66n3haWT5woN4t",
  "key40": "2V43MLAJmRFu8Xw7EeK9oFY9Pfv8RjdmfuriLttUcLL9ueEiVaqbHkx22cfJkgshWaCauuK8sLGV87yZe2ezxgYN",
  "key41": "3ZEQawZocXLqiiiMu4bScV8pUvfk9Lgy3s5277BhbWFuyYHWPVDhsZYQVzJD8D5HLRG3crsneuhBpbeAhZRy4HQF",
  "key42": "3qsa3qB3EtcXSEMzaw7BrJ6T6yNBcDnsvkcoSGfvQwdrJH3ivqcNytmUBZe1ohKm1EuBjCs2e5z9ejpzoBchqKXz",
  "key43": "2xsEwKKunjpL4PdAH4bSs19VQx3bzXWjjRsectznsFVNeewbF2Y7givqey2pCo3ApyWa5cfeBcAoMKhfZBx9uH13",
  "key44": "nUbsFvXr329zddJ4VhFJRae6kAv4tCdanz11Sqzq5FV9Hdb4VgfjyGF97e3NYcDQqxAL2SZcMEGbmePUsnBFuBG",
  "key45": "aQ5bhb5ypoEQ1acjZMgxvWpSVTBwStRj4PU1ULJNyHYYViyAscPxP1b3pTR31YrbKUNbNwSx6EaDAQZmiCeF9RT",
  "key46": "5KLb8XfCV8N78HJZYPm7UVkHvweZkrZ9QxC1NVxDAK92b3yyuvCkAkeVaTFR4dMqM33AHWnvA7Zs7Eq5xAkGSY3x",
  "key47": "2MVp3nMqrFDf9mz1TrCTtSF2csKT6FNRBAvq5s23xcmqioYaU41YH19his2mwG6Pw78uuqJXMFKdsqmRmmcjFtr5"
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
