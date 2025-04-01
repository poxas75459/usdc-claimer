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
    "3WeTvi54EoF2z2u1qCSGK1fkEUbu3GJLSwqShHNZxA3hAhzahE6FUQFNh8bzHZwKiNqoJ2Hk5wcbv3DD3isBjWpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAyYFcPmRJtWLynGKq8WvUNDyc97FWkreoDvgEARPmyEmQfkXnsQTMQcvdskDM1thnQCf96e1LugWijfbnse4B5",
  "key1": "3uDv5e9BBgTPzxJb58NEQNCH5Pmpbi47m6NXr3uxgmyxVDYgWmy7TMf2cuAAqzhULTTzr4H44GRPQgDnFDB6fqtR",
  "key2": "3Y6Heb7pJBkAdGw3Hbr4EisHuXnm5kWDJGF4tXPqrHT7AMZYS1hF19Lf4SjiaD9pUEq24JG7UkRLiekZwymKA3wA",
  "key3": "66su7nzJ1mJesyFK8us6ojiQtLfRVXKrvbRAgeKnfwoJfDHgQ3nHP3D1UYh24f9XV5Are9RJdBwdrsrGH6CtPgs7",
  "key4": "3Kk72Y5t8dSBCmr9UhvyKpgXiZb9VXUGbg5ZPx3SFVyivyHimsViXRwcqu64Yp1rMNTwswgNBm8p32LU3d8F1vKb",
  "key5": "22JJVTFK8HYhQzL2pQUBj6Afp3ZVV564daAJn5KFpzAiAoPMupnmwzLNdnbQbDDDGw72sk4tt3yNqjUHx4ZSWnGi",
  "key6": "4ckTTDVEAgktasUtESLsgEm1V2oe3dVoMoxGAk2iQVP4DWCVTEGcJ9WgATzE1iuuB3MhU69BkcdPt3d4qXp513fX",
  "key7": "3VDhE6xGp4TpCu2rrTW6aKhLgRbLB84gEuZjHcKuHuJsn8i3TjKsad8JiyKRcg7j6raARsciRm2hSsCZT3EqYiY1",
  "key8": "27vNHkRxenmzC9uwNZhVKmBd4zA4VoAuL61PxAkHMpRbpJwVBXgArygUJAE9mkuG3eEcaqohDHjs6UijrDZUpSN9",
  "key9": "4VCq6r5BBzgXd7fE1BSu9ZxnuexkWSBuZP3DccPKZCP9ZfNrUAzvC796KpEhQeeN3kXfBfxdKzdhK4aspVyzkCka",
  "key10": "55yNgNQJS8TaaAJch9pXHHiHkBTFAmbr6qKa35EQz69Fhm1hPCkkNUKNiabSQoa2X72ARJCs4SADdS8RPeUJzroJ",
  "key11": "5sXU9sBBShgRim1KjvWWsc23mzpMHNpeMUD1f6WL9dxYLGkozk7ayJ1v44Sjnx5Bs7ouCyjgjCZ8A11P8Rch6faW",
  "key12": "GEUqAj6WcSX4HnSnJ1TNYCMgptPte6PiYHqMfjFjWXPwA5TaUeFtok1hc8DZL2e1dPXzQBn1TnAu4cUhVmssQ58",
  "key13": "5AqELXQjAcKQb78EZbVAedVHXk51bAjkBypPbt2WrNUniEsQq6C5PnxT8JqtqjAwh1FK5dGPErcnshpwFTuhf5S3",
  "key14": "DSW7LbJtcg41F6V3h7pwdkq2nz5NawGa75ivT7GdEw65DERmimmwF4d6ynPsJ5kFhwXV4gL3NeQD3925R6q29Uz",
  "key15": "42UFXUb8JrrR1RoDZ58Wttp46gAMqiahkjMqkh4WwEGwwTe9mdPXxBEs7TfeWMUFprBwidcpFA9Z3GF4X7Si7FbS",
  "key16": "61FHa4zrr1zqiXuicBkYafSMu5dtrtGS5VBdnHBSmrYMyTkDRwBMQm87Y8VQjL7SRatnU7XYd2iSpkMSxWypSMqL",
  "key17": "3f5dbf4A4h2DzKtwbzvLMN3fwKGCG3ivfr7iE8bQtNP2PwL7HVhr8JcTec2jP3yNBf7Nw2cBtJknfcZnTj9Yo6f6",
  "key18": "xP97HX8DeXZG45eYNkACcZTVHRK3kWjk9BC6aT3EtJjSQiLHveov6E3Dssk1CgWpdtES3vbbDX2cNQEYPXkYV5g",
  "key19": "2E5eH73fPSibTC3FbcQhHZoo5ZpFmrbCYGxLT7RfBtwVDPrfkTSgknPhBdCbXSCEyhpXAVtVYj1bcexdpofAQLAu",
  "key20": "zT7uNjmBGiP9m6HecGSSK5tzXNZe5Ko1civ5X88P5GBiSuhDjWpUHM6cnbA7VF9XQTyXyAq16Le1hboDaaThTKH",
  "key21": "3LCrrRMy82DaPmitLAk6B6BLDEyEiJfe8vkfT7FrN1GuWM2XQo8TDT966CCWFkNHxkrC6Jaye7UoaGyCyNuufoRM",
  "key22": "4E3ugjubSNJWR3426P3N2Aaj6zciwTkYFHTyDWMv3wLyQ4PiUWsi5ch2DX3R5XJy3qq6NEerkNfZMUgewZtg7B91",
  "key23": "5LYd4xJq5nuu5E3av8AsTFfW8EGgkmtuZUzNd2qMdLdQJ3pWGH5u9VggJhj9gpj68KnRKWQouDqZyjnJ679v1uWW",
  "key24": "3i3P8avkBFwfnEYPRDHgVukxzebUTYa6T5TeX9cxrMJMwnDtmEYhpNR5Hv2EUYevJxPA23Kxu7yGSpHFQy8KgA22",
  "key25": "Fpb4pd3bcJ3tqkCq6AuyVfGhMNJhvEvzHFivNEpyMDXYZLw42CjqesA15NTVL2D6VkXVRDQBhKa2pwJg68kuKNv",
  "key26": "g5sH2hZubgn5aMmSSnKD3vM8wjDTWm5Q7ndDTdCyZf4gtkUGAodZc9FYgUJ2TJw4pphd2gV9aLBXNPEPNTb7wRJ",
  "key27": "615UZyYQHR9n4DRW9Fk73ZVMt5YMY2qJFa1Fmhhg8ZD3qNfDoG8ECcokek1KzaekuZGBR4bKpzSp6ApfgsmP7jU1",
  "key28": "22aes1U7M8ApMfNR3wAfHtnqzNFSoDQ6qPuLcgojyb2fxc46sSsxoqqc5W5WAPhUmsU6xPZy6ixrbX1bwn5NmXCK",
  "key29": "2KKbBPGPHym9XqzYgLeW5PX2cgZAqGz57yiDcv7cwqphZeApBg1Z7KtHzhsnZrcapymg1WDKopaKAXTnto7NKNvE",
  "key30": "XCHqi6eCaUtmRiYu26U5TwsVj9uic777kTrfs4HxWcSXpDaKGtkXy6SPE5MPacUEFqkDENVNAW5arpqvnGRMuWe",
  "key31": "3f72dneABrpPaCGFazwFr5HQEHWic5BYGfpMrcq3EK1Hm32yykQuR1SvFD9XfnvoeBjzEiesxpra6hFqhEcfSEnB",
  "key32": "2wBaTkY5Hqy3S1rNjibYT3eokA4Lj8Q9h2JeKmwH93hSQ358TkD2ieHBKNsA9c45aJmhaPMtLFa113Lh19sPqmrx",
  "key33": "3uHDCGnFvM2oAeiVcLwhRif5UoHgxTfQFSCZZcKsi8xk4x7EVtUQN8ueuX2uQ7HighkbYpuSygCmWWTPrCSMgLDb",
  "key34": "5evu3QdYqsYYfALhmYetW5P51n65DuD9dvNLJ9fmNHny8dUjmJ5h6F6Rqu41KuBkq8J2NUDJWK9FBsJjBqzFajDK",
  "key35": "26h4ApTcAiQc4fJzsGuuWMUkm2cDxG1VJLEvwGmA4hvGUCy1gRor3SMmc7Sq8pgDojXfjfSWjqdYZw34wPcAvzWC",
  "key36": "5XYV28Zj55imJLtVKDP5zU3CFxGuT7YofpM9fwvNwJNrnT39kwu8rLtTerowVSzRAc3kvbtY1dMwR52NEQ2q9rMz",
  "key37": "4Gk4zoFt9SFC4hkV5t7rcjPUbhm3xEdQwkw3MLjdfdtc3j51XcfBzoEGM9nQ1HiUurtrBaPhYc2jRyeAWjvBL9kc",
  "key38": "zGLFEMdx9PHLqKxeCPaWY7qzMS27Ft2K3wJVN9Tc12SmN4UbRevbSY5RqfNLstVBHT4Du6SjThbsW8rWgsjvrhH",
  "key39": "5eLpK1TvxGQ6sJy6vz5yLoiaEW6hCGzbZP1YSSUuaYSoeju5ztNXWXwVAJmgFJfko13cJj7Pq17bT1VZATuNmGE7",
  "key40": "4oXhrBGjRXHN2d5dHUAXDQ7zCVThZLxqHdcK6pKkdLr8EcdHAYKzY46XnbMvziuvj4FWosk4TNJRzTTdrkThnN79",
  "key41": "5dXZDm9E9TSVjHVdEGABa1tipEnwqGC3LnFPaMY5WjRByUz53M8KbCp1jwkCu1aaY6Xq5MKsRVjuEsdHjTLD4CyW",
  "key42": "3f97cff4J1Sa5ZUoiAA6q8dvR4aC5jvk9mLNjpJXustPmNxxXjkBuf232mDAwzfxUqwCPaXPdwpATxYhCEibqkwE",
  "key43": "4oTHYe8zGUNw4CcoPWWcp622C5KsvNNKHPzrGfLi1Zv7dBQ9h1TFb5kKvMfcoRarMmqmzeRmioenJw8J8TZJ4wze",
  "key44": "5ndgFwC4k6k4AYxPBjNvnbsiWD2p2CiLpNUfW9sMsEgyzbUYYZ8jqWXbbkbKYjfB8CstkC4BiJkNJ99Nw71vwCAt",
  "key45": "5hs413k7Kw3PGb11UpM3A59PmaS1Lff88vRfo9e84eHKoruakoKsueyFHU1u8kCK68vYAnr7DvjLwycio6sYo6yW",
  "key46": "56zwMfkLM6k7d1Js2htEx8FfURHjAaE7hbFTSP3SMoHg4HvUZVyFCx4Q1Ankr6EMgRgWY4ohi6zvxBCVov7rsJpV",
  "key47": "4aomwFtESvnbDEZY6aowruodih1Zdy6oGXPGKMQsJoVPrvdvnjqvKzirBa2jDjC9gEmvF8Wv9uKWvM9qPe3PMFzz"
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
