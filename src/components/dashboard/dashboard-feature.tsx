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
    "473m6RoRtunq23GD3G4EjwBwJKE71umF3uExNAbkgZhen5App3My8f65S7iNhpDick3he6g8sUdyFUsRJSxyqgTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D6P3PDHyHA1EqaDjFqQ9nxAZ9Mvj8QYoMDmcfy4g6V4Vk78vg9f5p1Qsei2ErrsqqjBttgoa2grE7gY1iYD3jEP",
  "key1": "jFzXEradDFYiAJ9R6XX7KNsYVMiyEuHXRkw1znRPL1e8VuiHbsUkRo4CBLKm65EN8qiiBBxcEb37KCt3soiqEwy",
  "key2": "GLW91xshm3Nj39dzKGxKh6Rwk48n7BeocNow6kLt7HojbkgoHDpWH4VBu4mM3HusZgbR2JbXrP6CmTCBDCWqLoF",
  "key3": "2uYLDbpNYHzNeNq7QHp5YorjuqQezbFpWHwwuh1NJz8FbhSWAph5GuGVZ8RTKn5EgD2sM1mze5mKMF46xSSeZk5x",
  "key4": "LPxTLyfELvSWyoXSAbNJpjktgBVgrkuHCGKJsatZ3mxMS8JZo5Q6uaLkFQY8hq8P1czA3nvPmFQtMhEq7boXohS",
  "key5": "5ngBgUxBchtwjqiKnNuZhB1jXZ9j2XU9quxw46PYDEZ7QCQL5fL9a4LssDSRoF5LmKf3dWGuDXxZ9atGtmW2CYEe",
  "key6": "2dyJuyNLZEsd3fLa61AknLfLrD7MbvmZKusS1wrpEaCfTg8mzFV37up9EyxZHvbQBXQ16eSskPhziLBDWn9VYVtj",
  "key7": "sGTZRoXwgePyUzRFYJS71cDRr8BAgVpsAd8q6S98MAe9se9u6TVYaDfV54LPEJPVvEXob2R3XTEuvA7t8E81k9J",
  "key8": "4h21SKhyjcV9sJpsnphx5MBcn7USVECUPbzd2pTtTGqmEgGgJWGMK3miUpR9ntviWuMYN4UxAF8HA7Fz11uUMCLo",
  "key9": "4YUdZE5Vn6CSDm63XHqehGiy9brWhGf465KQ6S6B1wf43UeNnzY9gHDAC7ZmwZxDxF8Qxk5PiJRSuFZR9ygZSSZB",
  "key10": "4bUU2pmrkFTbzJnh9X8tvmAeWzRaskBGwWWFibik5Hff444sNEWAzT5KbqJ2h9pofVdjoXfRd9AgKviH4xR9EBPF",
  "key11": "45rCMYNJhsU2wAo8vXuZVLqwdUPWW6aTS47fbEKEmfvEvcT9R4sF6ap4nKMQ9or9AqMHtzmJj2W5wFUAKaFtckhE",
  "key12": "4mFgv7UtQbdSJ5RqjrAdWyNX12fW6naHaUj72z28C3SFjhRe8kDAh4z9oMCrRtNf9FxVyrEkxmjy83TVKtGkT4JQ",
  "key13": "4dSRQ3M8h5FdX75ecjkKSmSqZBgkEVgrtCjnk8ovZEBJgngTQ2LgeMnDKiHDucNUfksET2ukzhnpF4bZtRwNpZCt",
  "key14": "3XYitYJV3b6vzuYxMVJEdJnqPQosGoCZ8bLCfRxj3H51gEsZJ44NNnNJKk5Fs3FNNoPyByZkcSPzriiJZnekumDY",
  "key15": "4fXDjtb1yp2vHGwkphnUWHNABjr7JSHzwHLLX9AnrUM5DAfUuJXgyb6FbagdabRgHkkDKajWap9yJzdaxnHDeteb",
  "key16": "2FZ7tycaBD16Atumn5dpL3JZPdgPgkfftXaVMuhtr9jomi86mMkHE2rJQ4scS36nJ9YkNM7omWV7ABE8o3LZqSmd",
  "key17": "n3uEQXAWFc7Cmibc8gLaP7n5bebJyoh7gMH1oxcmfHZw96rpNv5UrtCQA8TgcrPfbVL7Uq3bg6wznzeUxTzsTwe",
  "key18": "2cCbPp1ryXjXspu5Cy8hRVQjqtu4Ci5ArsGdFU6UKoRS3WHX3NySYfrviYJefTPi3pH4fY5gUSi2RvNGWoQPiuFm",
  "key19": "64CJBMBqzZDHCy32SNMWpX8RiiiidKavphFXfPPYWQ8YYfEKniCjLX8VmAd6Xgqn4yiuV6etaGoLqGAF5spj2Tb2",
  "key20": "2euTeXQ57QEniU9QKRo7ZQQYqJqiaZziz95cXS4Lu226fVNLQjivHFscuMKDNf5qPWP41RN2Rn5EUSgGFaZ9F6Qo",
  "key21": "31dgVX4peQDLKNMHq3n8KrGzNFmQrUBTNEEip9sX4PMydn8Sv6JZTz2MYw1Ri5daqmoURCPQvegXkT21Geg2AXBj",
  "key22": "NXmnng6kbTpCxJxPiGCEWsPfkTTef24byKzDyfg3MYsGDSNCN3bnvLYeajcDhWgHUM2Yvtv7JyZTPoc7S2VXZqr",
  "key23": "5qzZGEFYi2hBBuYueyzRPGuT4JkTYdtA3mxLUwnbbpXqeURAyVwRNcXVAiodHHtrq6QU7uj2FP3Fc7AjDZbQRL6n",
  "key24": "3Jid6J9jLxNfvtGPMnttaHWnocjReeEFSokKMGu9yzuQdmGXHosFnHKJPiBhefqnVv1eusPUe3RyKWQzYGPTMeQ7",
  "key25": "4yo6dhafNnZe7sqTrMmCdxhoTKn2tHgcm1haRcRczjYG7FtugX6EPRu2zTQZLAhTZXFno8zwJKPyKNXSDXHjGLYC",
  "key26": "3ZdXRPq5cZC23UN9etC1wPd2mbyzNdVpXF7QvZ9wm3sUViy2chkfphS8s35Zx14Sg6mAJCRnqGEK7Tgn3MFVUM5H",
  "key27": "315Jydvnjo2npqiDwEdZc1wN72hBtf2t2ssuQCAqHzUqDkSrGgubktnhu6GHit29eWRh8Mu9B3dTkoj63nCiXktK",
  "key28": "2UgMYBD8UZyQVfRxMSY8nfNejFwzUEHA8DcGxGfoG2o8QGutKQ9XiJuZ2HCkXRgLgVtLpBNs1vqg7Fwn3NNDrrE5",
  "key29": "pr6XazqrQwQW3QhvBGZJQBTXHwiRHVDAMw6LybUzr9usUk2YxKQmmfn7BH7Gnk3XibWMSoiDpwHw4yKPmYzEyWB",
  "key30": "3hxvmzHPCguNbyyMoBjh9r6c3Rrxd6SiuW62P2g6Ji5ZgbpQFt4mgzeGRibQHydPoEtyKeR7TDmE1akHpxoXDb4F",
  "key31": "3ZZu3feWtJRjUdpxCZTvSJes8vXXsVYsMQtgZScGCw5nyFHtWd2SLJbCg9Poa32cxzR9XQ711mxwABgx13xuvyjP",
  "key32": "4452vf2cgNd4gvQvj8ZYh6btbuJDPnN4iQjNThagFK2crETo28DnrR1RGrRs5M2R1y6E3r8dtcu4M28YTaqYQyYj",
  "key33": "2BrNLKWVUgfXQFXAqZKL2L3qJs9awqfXd8SjdsHjNkjqQWxvJJgRRW5JRa6wDV6E5VH16xtFnW4zbUKACCv6NTqW",
  "key34": "cQX7MaRkJRt4UnoGxqvBNTLZG5vGwEHNR4VTvnm7GN6FXVgLVLEAgCC7WYLoNY78G91spUA8nHzRCygnzyPHGiL",
  "key35": "5bCUK2pABYvRLB5NTHwu5HjoeyNHqcsMe2z9gcVTYCWpHH3Pb8onT53VfNnSPrFXtQ6Eyrw2Zjfutd8WtFTXx3BN",
  "key36": "5wqkVicTvHeyr9sptqtZegp8McxyMKn1Ep27gVSTCB1RgQzM3wcZ1Bm8uVNnbR3KN5vSwCA89YvLR6sQcPaoEhRP",
  "key37": "2cMbicCZThm9t81Szwszrwng3w76LJswjhsMM3UgpEEVrPKNrKC3TWWTyXJQXdTMsp9vE69oQ4WCDkdJ7QtJEx5w",
  "key38": "5jsKcWYo7NfuoMpHzkDg3oQEgNo1Jk6PAQkXVW8rwfVC262tobtGRHkhJCxjyFeir3DDovie3y5T3aJasafDT438",
  "key39": "Ep8crkQYHaP4WWzVSA6zK37npQhevB7csPman7SV8YKskQjoKitA8E7mQRmHSgTyNgJMgigudn3tZCgkQV3iWnw",
  "key40": "5iLVsye8tE8C4hMdzQfpt3hrvAGe1SyD7M4TQthmJfEpPuw9GwdBCTRMiAFx7og6YesChHS6vKHaNxQZNk3TtjYG",
  "key41": "RmrdLUiaQ3kWAukoaxhxkxVVasTs25bkC9LHjnQmsa52yrjgRQBzx4YgfjbpdJCv4W2EeYH31URwdA4ytBSydwX",
  "key42": "QymQ24aTJ4o2a9mG6N5P5BUkXyCbBijhYDDaFSiTrbADP7iWXTeVfkd6a9f76V3CAAhQTAjNTxrKnEQgaoS5geh",
  "key43": "3RjWqWEWF65jA9wMZuUL9C6z1BTta4baGM7P6NDXhxyHtYgTtpq6pk3apibu24qjdg2oeJKuXTvCvkGPvHBNpbLQ",
  "key44": "4GkVn8BD3QCskQhZfkdBfFz6SfM6RmZP5Gune2QvmTyHrj3TRB6N14QyrNR9CH3FsPH8gW8Wt8V9fpti91UesCTz"
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
