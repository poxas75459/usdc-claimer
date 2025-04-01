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
    "3jFBui4F2Nbfs6uMgH5C1GqCv7fTNekFWac5vk6cZ1FSgCaZciyxuCyS7xNC7NvTpVjqtDJPo61mhN8X42JQHYbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ae1Vo5yYuyQV1NQ4Hc4J2H9XwuyEMHC41rYfFVKWvDmY9crMScs1VrbF6P9jpkXekuzGwsLYYNXNn1ngt8yMtfk",
  "key1": "ekxdi8jvrJR6ZZHCGBSc93jFcGhBMHHBaEk9R1toBcakNBWw9pWyCz2UKPkhHTRoUk23cNMdwT1rfHLaomxzzV7",
  "key2": "49u2TfEaZcxmNiB137nskpybkJq3iM3fy1oMUihyJMkEPjWdWUJQxEgTXM9QEuDHsJtfvEC9q8bmPkFBojz1d3ux",
  "key3": "2KMdS381njhREaUa64HscUKvLYgTAKKvFHi9ky1i449hLoCPKMQAFNq7xmoeDQX42qJTU4tFAB1zhU85L4SwBqHF",
  "key4": "cjftf6F8796VRHGSsU8VnqCrQ94Qdfxu3yXPPfcwuLTVRoL9giD2nWm2tQ8TiF2haczSh87FZJfPh23BHufmuCQ",
  "key5": "2oqM8H8xaucqHN1371Vz313SUL1hAJxDaSiHA8jTi9rmSDAjZu6Ztpm5SWzLobX9rHvh2cDbYhEbLjzm1p89rTSJ",
  "key6": "3Km3FdAPhcG9adpE1jiCKfkWaGKtvbss96QefLfes8LVoty4pfvQEKmMSgtXCsT4pg87LYEAMud7go4GgAABxEQQ",
  "key7": "5VWwPw7Aujz1459gYyCXcpiAmG5Zgoe2LTHm4AcWRFDVyQ2y5te7SFTwHERnGxMqbqBpsBEFStubYnepwgnWth1D",
  "key8": "4vYZdPhPY2exkYNbE1uycJimcJubcsiQzGbaKvoq9hY9CQB3AMY5wGh9KRQweQbXuFdZquYEA71uo2dV68mWQX7H",
  "key9": "48Lo6oTUf2W635W3JNnDiUh3SR6UJDHMEyZ3u252UXXcgyBV5gv79cKWiMUvSSrpjmcGNWk6Jteqqgtqefrj2orw",
  "key10": "2ZKKqmk2BxUabMbauxLjTeKaWqPHCB7c3YgUQPRnRguu1TnFQqNF9aHMhpvQ4XFyp8UMGxgKScFxHv3KzYu9NdKs",
  "key11": "5pkDmjxWXZky71mUqExcsY42rmcyfKtg8bsbkGxgav1YDNWvMrTHARukBTswPb8yoCJy1abBXGrACYrcacnFty1M",
  "key12": "hRjiq6SP2BaFcZchUNC4qjwsTS2f5z55p8Sr7XCKDjedMDNPN27PmVeRXKMd1S1vefFJdb7yahDPdLg5K4cUvXs",
  "key13": "28nUpo39e7cykzXVveQECyR54hFwQPf1GsJ2e6C4FokGzp45VXYdcshTjSvA8gwLLWUoL2Xozi5Fqn7HMRELh1t2",
  "key14": "2cvhMAduUg8zPssiEnFmiJU4RLSH7b2ij6KhNGg4RGJZ27Gev7SyqQRvYuTLCDbfZQkYvfT7ZZheLDfomnB437bi",
  "key15": "2tLJj8ojPXJ2JnhWNjKQyazogKbGHepoekwpbBpn3gxbA4YyFaBixyDZdqWW8873GG1Qbs5cYMv6c4ZiuAg7ShmG",
  "key16": "2nYHtDHcsTd7DJtoRpV72ycvpyBUWxcZou5kJBTg7JGwquMzc7GxECJ26aTmmEmyx6dryrZRVzruHXjYmVrLp4Ga",
  "key17": "2nB2rNXHojgCawfJ9tWE3xj1pHwLPDggokqv2zRL1PtgtLGSp7TKLM5cxUwmsEAqrFyCp3451ZA4udRkLGUKDCzJ",
  "key18": "3GtThEhE119urdrGEUQmFnzUBu6Z1xy48Eh388RgLGGPhqQeyP6i7fKCqA5LXoMkfFH6aUdvCTCeB3VXYdXnzdcu",
  "key19": "4Exq5FJ6JeVxPxN22ZpBbyUP4prGCYh7KNZuQqAE8qdeXDpdMSUmSvw12nMxiwVdaa659iXuviepQNuMJ9pstBTV",
  "key20": "5pi1nx4zzM2aGtvHpx4SsSe4CS1GCNC3yJkKsagW6k2gKVowqJRCZWtbf78ydNNbCpz9TUdKKaoc98mKknL2AjkW",
  "key21": "2Ah2YmG3XtZwvH8Hx5xdBLFFiaYot87dS35gugMNscXAFGTDSFEkquvXZ3uMgdTtUfVwkKPCLDpFgjXWFW9oVRHU",
  "key22": "pRFzQ1AGJsR2YpTMb4Wj1n5EXQ9UEkYu9rft4tw6QwWmZinuxWC447DUqy26vXA9uYBQwBYkoixr4oZe8r7AwtQ",
  "key23": "T6KM9xx93LhwXjALYF31GZJ1EeGr4BGf4LnzxkdWFqgXSGmULPJ8syXSGZSseVdoGKC3LBuNv9nag69SXxNGzgh",
  "key24": "632EvCph2J3gHk9UU7A1hZ6y7J9k7F6KDfNgGdmanQDogGw5bo2vEYTZc7u3popnnuKPgtbRDvuWrpzau9g7BcPo",
  "key25": "4DwReAJGmyJQRMQJXCtoFC6M2gcDk5AuV6VNM6LbYXFN9ea4Mqwc4LuVLJYuT9UPLdzu9Yv7ReqzMWewZiz72js7",
  "key26": "5airZYF6pK1A3j537CW1fi3vKXGPWVwSD3gEdcAX262dCf7zYF9WDkNArBporwXt1W4xytVwcBrgiGquPM9LtPCZ",
  "key27": "4gPF1eEG6Egrc8FfyYwDCRLYJf3Ng982ckouN8884QfaPxafgsjVGivC5Wwak4mR2a9xmRWoZw8AWo9BPp1ejRLP",
  "key28": "3XqDy1JLKeGdVTHR3n8gricdN3cqkspjykJbR8oL3TVKkFuFL7XPuXCVide7q6tnzA38g2Y6g2wvwyhL2P4K3wuG",
  "key29": "4RYedKDwNnPiEjmBQTCefkem4GUiKNu2gDXos6BKhAVmB4C4pvfuas3qfQdEgiW9ptu5QSyGJXCbPXUyeg6ZS9HR",
  "key30": "5AdNsncq9TVndEXfvJzrCsBxFxX4w4Wyy4AzjEGuCGiVT7cZM1w55aBvvU8vSHrnwEqH5MjtUY5kEk8dnntoJ3VB",
  "key31": "5SbiVfGMpija4VYmCHQggAo8phPTnZk3NHVu6oJs6eBPKEutjtrfgpXFGBHcRZNe9MWF428K1Q1xoznrexucYVv6",
  "key32": "4M5wCjSTWGCJZxGmfDBNYvTUrS3vHnmqZLjnPs9zpX2KJjsBXN7adMjfcE2RqZyMMSt3CdEWP1H9fcjAp3SC4Mva",
  "key33": "58zjM1QvRpGkdaMb3EfYqkAUv4kgZNq1oFhnY11uDwAZutt6fkkJ5dqG1Erfi1B8SFqJ86ZbNuzkNHBFGpRADD63",
  "key34": "3vKwdLFhJgkwhviPofBswKpepF18NkYk55cnAMzJR6qowm2AfaShqit6wvD26TKvD223vVRCadxxrNGyE4zvSdH6",
  "key35": "3uHF4rwki5FfejtrpQZwC7dcNkRBmqpxEDESnos6MMJE9jkB2SYGZMXQ3nAAx8G4eTaPLN4XKHNCV91Xv2qMxJ9E",
  "key36": "3JhWYV3GRQXVTmb5ZD6T7yLv146ggfw9qxgKXJL3EsfqRnGUtP9oGdGxB6n3JnNi9aUZwi2cdikoPxCMKHc3xUTm",
  "key37": "5MrX3TQirQR8khRDFcoPv2npC1zcRdbSwfjrhiwEvx1t4hukJ2Pwqq2org7GoX9khnbvLy1XKxUpEr5ZSpkjib3H",
  "key38": "HZgvFAvKm6vVCiRSMqt71etrFGh2PcFuZG6SSuCQWCrrvLvmbGh5wKbnc6DFjSzSptcVXiDXz3H9NAdwr7wLGtQ",
  "key39": "3cnDPa38AJYKkjpxCA4FvA4uHBU4N17EtXqqrxi8sqXKjz7T3oyABvD43CQJ1xnEY8c9btBdyuqhNjfkLHaqeTHC",
  "key40": "yhNK3oCowxAUpvALXyyo65HDxzP4NSYC4WvqpcLTkpToYYRrVpL9wVcnN3QvZ8kBy6KcgDRBho9ir5fCWGHR1zt",
  "key41": "2S2D8XLEkE2evwrjqtyCTk6V1EREK6drunggK5P7ht1QGBM15HE1CyLzKY8KgwDjWdWh9Lg4Mn28GK2Zs1yLy57B",
  "key42": "34GWqyWCNj4xUeEeoQ3kZXwsAo8oceyYtk53YjrAA7igwDiYVxHRfZiWpbewrQPWNdTcBhWL2cdMWEjd2y4TF2PL",
  "key43": "2vvYouFgcJY3UuoJaCqcSmxLDCrwJfaGt1EoLZMD9RTLrByHp3MGoYZspTeeQex4RKf33oSe9odfUkHPaawx1qgk",
  "key44": "vwjF5aP4P8yNzarGTHbv3adQ1ja7rhYoKPnpXNzxTZPpjp6F8iQLPWxeFDgJ33E2fJLyX6RL4FEwqRuZrfjGywJ",
  "key45": "5UeF9jPBwsdi8noi3Xp19KHgVXB2DJpGZqLgpyGvgAURBg3bcM8HoUzwvBqWZ1VEfERidfq1KZsocV4vzhHMgLGj",
  "key46": "2K6yATpHtvdwaa3WvvxqyAic3ncrHZFiTc5DZrreTNc2Cf2G4Szem6VdS6vPcQGTwNkGam49vjSiky5WxRF5Ltjm"
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
