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
    "4GLoeyptMAzfhdnziBsaWbgpTDcBmT5HYYgKmbsVuNmUo1wWhYEVm8J2Fdm66q1W2e5h6X8k1bsDNSfekwg2pPA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i2YtFjKriSQ7xry579dqBKkyN7isrwH9ykCNZnwPyzSWqnpqALyBkdwL5W9X6MT3b5LiiPKjqFrP9gSXdrE7fAS",
  "key1": "5Wjh8FoSxucSskeTc3WiYb8iX6uVHcrAJ974gWjpfFgKBevUVXDSWLw5V2zYKG2KfhMrgosZiCxo7MsMbQ3RAAG",
  "key2": "3Mwp7R9NZj3ueCrB3qDSj22ox4NbrWs2idpSXK7KzBLSr47Lp2a48Khfmt459fJP6j2fFKyQfrF8M2Vxkq332qDB",
  "key3": "21CcMkTioc32DzY3R9dnZozRNpa232KXkWSbvr3R1PPeEundQVMDm7FA62aSiW6arP8RX9Er8iHUGGKRLWxvh5kN",
  "key4": "21XbcMLGP7kzvosxcd9UAFnoHSa22iLwykuL38gkVqcB26FnFWTE2YTe6Uwwnz6ypyHBeFTuzd3FWpH8jkgtSKgN",
  "key5": "3qdaJhk25rG9WFbtx192UT4wHsPWGsvrjweTS5SA3BYDgUB2VNsK4XoKTM2LNkNmwwD9HePHYo6Ft3YPDVybovWx",
  "key6": "wwq71sYTAXRwfJeibhN8hpkk98ZboxdjhGekVdrgpZGapMzEAVPhpa2w5omkKaQQW5L9LY4y3vgd3QeiB4XwpFf",
  "key7": "sFkN5MjqzjUPjSvCUXt5Ff1LmXrhdvWUNwPyR5U1cuVdDWabWVXbG82AryxXNwnq8LAg6NAPfv7QxE98HxuVU3q",
  "key8": "4BEoVMHgK8swv27fmHC4XJ1WmgVp7zGUDTeVSY7q2psemjr217mndUsjcq1CBwYfw7Tnxsa58riMUyKyjXz839JW",
  "key9": "2uzvYPrh2NsRjDM6aeMTa5tAKURWK9uoEhyR3ks5QA8yz4MADcbf9u81FJGxrwgSVisjkPt7npSXTzkxDnAJu775",
  "key10": "3XPMGGzWy2Dqr3tUx4Rr6JcEqXCXxFEv5xWaqTE4Qdo4nYYPXeo76bBzDLFWeDP5BE9rP28Qc255kj9P3HNpRRBo",
  "key11": "4Ki7UJPomWXcRMKLmcdhvoTCroXDm5cbAmjmTAa8ppReYdyodyxzXvUXAY2kJgWrJs8kQ64QrUwm52cojKNPx4sG",
  "key12": "4cEQujfyCfrFYU7oqcJ5ubzQTr4paoJMxSXM94nH6Rq1fgJ7WeZdudW3e43PUGVBnJp7xPjcbkEGSPsXCFVh7xgB",
  "key13": "4u9oWEvc1CKASWCGCuwfzdaHb2U756NuqnNLDK8Hr5NcaotFPeKBksBe8Z1NhKPAHUTWnwaxK1vPZSLb7RQjAzeL",
  "key14": "B4pf1L433C6sNKLV6Y2x9dEviB8cWB4qjPRTnYxZn3r5bFux6PjGMVhKFoCeaoTYCCozY1kD8Gb3QpSTbNMqJUS",
  "key15": "2tpwG64GMuz5YRDQkLLGvYv3bQmUvEe2TMQvLF21mFtAKW9mcuY77Dj8b1KxMMh7XQoCgjQ2DhQ53hDBD8dQ7RL3",
  "key16": "4cP2E3gaf3cCpeUCm59jBPu6mJDANGCRntKnZiyNQkfWifthnKTw2T7vL3kgKAFbPeEtXYJZA4BVQtZn3a9n3TPt",
  "key17": "39dd16wTtiyVE2yEo8Rfd9t3FtQFeJCKK2zdrA2JCaNTEeJNMkVWi93qjTRviNJbCfSrq1asGiHtoVM73FevL7xL",
  "key18": "4315hu34gCShfcyc3SNFYXBWqc9Fo9PBtCsUaANNGxdT6SE6XcKHADuHgbhNuAfoFtyFGCNPU8SeBpiEdGASPoDb",
  "key19": "4tpf95AwguhNpxLY7fjLBCBF8eNnmspSMvPoqqq5AgFWSxHU8B2NevpiuYGhyJkVb6iY1cDC7bhg2jjNcfqkfRGr",
  "key20": "ZgtLKhCYAKcCZqmdnrHPpcHdLfVBHyV3rWemsswtdkeZ7VScu9kVAh1Df6hLQv6hM4McGn5tdcrwqiAVJ3dX4E9",
  "key21": "2YRUtzirmS7HEaM1sBAibjzndRhJRkS84qDc73aEywfwPJVwpGc3NWpgHcr6ZkqNPiB6Et8fYzCcZT1zxC3zeip9",
  "key22": "5or2Wvi3DnkcXA46o1No2WYnwxnx4thqNgmkdFToiAidAG9eTVvSJXNjceQvZCihW5vG4cU6nUUW5cLfncRpe7H4",
  "key23": "2L6ZK39CSPEQuiJQruy2bNKt4UiTMDRnVWU3afAZLvH2kt84hXaU9XgWjcDfVQfTdKx3E8NLiGsvXkesj3CSxXt7",
  "key24": "5C82R4Vs69jCt3AeuL7GfxN9Z6vTYej5YuxHzP5aH3Yvbtaog288qbPVhy66mF4oyJtWMQoBjhHjFzEWLF3W2Am5",
  "key25": "3GasqNfMYyikVnYa3mE6xXGWtfBVf1TnGxv7mC5E57VoKFmzYWrvsKdDgti6Yz7kWZyGLHJXwieW8PeVC2J8HVng",
  "key26": "3EkqSZjc9vrSP8rGbCeDVvfYoTxL4iadwyTw6gXuX4LkGV36CBBnTU5ph9AR5d2mJXGt3aRtZbPV4y3XfRho6i5S",
  "key27": "3yLPSMkuXftZ6draTkwyB2kyTq6rkkPAxw36izmhX4xR6kH53kneCvDBvgR5C7oybQhVxBmm6HC1p8f7xKjyrTec",
  "key28": "43VThUQi4g9bEAnDKHA4FkgNayxdavgwE5grouv9JQoYQoM9M89J8wAK7ouBdyvTyAudKgaoa4eoqR19Bkp33VLR",
  "key29": "2J7gsWUBNicUtVknc9EHiTuWgLYP6aTGGRb2qwW4VK93y9UjB7yMWk2o61UZ8QuosFGdRamkbBoxVNqy2K8a7tEo",
  "key30": "4UoiByfryWz5Cq9ETZdGM5N7pMaQoQJzrzd67K2MB1xwngrPi6YHyZLWkmhNb856od1UB8RgNSJVPH33iohRsrNq",
  "key31": "42dm4zSHYFdam3dnySRELSqFV1XeAcYijEJg7CnpS4KeaQMKUxMoUwygw3LfmG1vf9daPnA3iMGunWE3oKjyXTCM",
  "key32": "3uTHk5gCsxbLDsUVNuCUJ1dSLmGKaXUs57UKeduCYnipXshU6Zhs6xLFU7QXFVBHGr8kjbrxeKPZ9wHoTGofr85V",
  "key33": "3RmW7sxcNnP1rtab4q6MjRGjBSAtcPY17PdDPfZCacWqAEGdgWHJRczNr5fgeiL12Tdad2pdTYizAjFvaGQWQFVb",
  "key34": "H7tRxu7yFTkdK1zDhisXMi9fEXufasQSod2opBMEDx9q1JYQFpzrsTU5rFzChJbMPkPZxmPFXJqxHgwNWk9254T",
  "key35": "5TLaGCrEQudmtGHYfTuXaAkGxYwejyowrqrkfTVu3UtdLwF5YMtKVNA5jAVUWqaXtmWF1HGLZa7mKrVBM7SJRv2D",
  "key36": "2FGnCoZ7AVvsthLsnQMufUpCbgrzjQAVDNwm1bVSuuPh4ibrg3pb6mJUV4UcVBtF3hKPSXw51GxCaLuoMYmSfzSf",
  "key37": "5Vor3i5g4RAsZqd1HH4uivBksmEBwEU69ovbPkeAgkGHziR4edS1AxBvSCqkSXKaEzJGWJUnBfwkmLGiT2cdqLWA",
  "key38": "5GRdBHMtad7nZ2DCMxBb7TjESmsiD13bkj8rpiJWdUPqBBsw3qvQR7Pq3mAx9PUKBT4CdnFdbpbuEHPbRDLaewYo",
  "key39": "d1b4h6BTVqxbLQMnuWJom3h88wAzz2MuPYuMGMwyS1RSdMncbgFnofVj3TJWJFtwu8yGUzWVAqkr8vTD7cuwgnS",
  "key40": "5GLqf8VQUiCZ7mVAsN2z54oVdhmxibRHudQmFfPxNe6jnKsSuWXSSyyypADZtdsZWuQWBCsjmw6Gyr9SsKAVbHty",
  "key41": "4kNjvHLwQ3o6psjhzdPC4RTvYQRXYXBGCuX81jFv5aG7HgB3wcyBMXKvDJubrRSaXyy3arJHHpN8Bks4wuTpE7gR",
  "key42": "5iQtzXx2uPoGecuvQxTwLRt7g2nuRbXGK2xXbkKgrvXsb7Sg4pcV18MGQoDo2VBmcxfpo8bDGbGWaUjFvbdrgtSt",
  "key43": "2cVwH26WP5JAjRzhkdNhC17oyR88fLSfvjQWkxtiKpx1DRxi3uCG1EaQK4ujy7KwdcscbWKHFFB97ZqZz7k1ichb",
  "key44": "2YKTNb5UGyDWWgqwjjzMBvRo9V11iYMYHQZejHJUfj5uzUoZoY4VxYs7CnP7E3V7R9DzLtgTarE3bTYznJYnhcLb",
  "key45": "4pJpMiRTpLfo7nRwSiach7gAbxHMTfhb2PWG3b6QfHcvhW4FGNg2WgXCvm1uvbjwj2hFWQFUzrQoRkCfGEGMgpcd",
  "key46": "3bmQRVPV9V4965DRUsxVrwGqE2VU2ViRYQMyv5pYLsnk5siRihna7r7fvBzHWJaQ32towZz3BfRwsGjFK77N3YRS",
  "key47": "NiaobeUTedTj9LNLNDM83axPMwfzKHhMkVsviLLGVnYygDJ3mQ6XoXVFFty3dKYgUqMoz9g9QWEqNJLMLh6yQux",
  "key48": "528NyHgv2o1aabUjzFyq142YFHE2XmcYWRV6uG9Jcub6owzWiurx5j6AEtRFapwLvGTPbGBH1Ao6THoooU8by3dM"
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
