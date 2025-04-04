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
    "4kgLT9uJswHm8CM1v7e2z6kG6LoUWYSFArKPHFxUftyR1tVFbvweY6neK7Fa2EjniZRo6NT7Xn1A3DAnd3tJ4vns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAA3U4A8fCLKD48zeba1QRqjzuLVKvsmhLHyUqN6Kyui7K8UCUVykK8UteWRogt4BkTb43pQg3xCscmjFXKyb15",
  "key1": "2c8e1mpt1LGyGnKggHKzrCpwbVkHuDD6WcfDi8GhnWBerWhLL9pVmryXy8AsjpXHZAY4aNR6zXnJRUNhcfR6kNxN",
  "key2": "3kn1Ak1iwdYst3nTTnShfT6RoC39UjTMaooX6N7qGNDf3JPbpgiqscddzK1YXCNLz2TESxrLtK2FeUwpAoQmNLx3",
  "key3": "3jKiJgZ1rnyp4mPosHUaht53LNjTE8fGpkiAkuGAoxdFMnKFQzRRcYoHPttkN2pV3Gk23uKtzcHYmD4W3hxGMzqT",
  "key4": "2VefY6juzLZu4shYR4RsFB2FqdXTAAoy6ZUVGxFBXKjQjVC5GdqMy7VfqoZhJDzbWFmfzm8EjGBQuX74ooHVB4pD",
  "key5": "4RfnL3Fhbs8THBGLD8yaEWMAdMyZ2dzaAyaYzLPJutQByhc4HxbVPi13ndhYQsryLsbgtjCdsrjjtBJgbLqdvNv2",
  "key6": "8B2eGBgwuEZc2eCCMFzWabZepHx3Rfzsxx9uftY89CxEmv83N3N7j5LGW2ReUunkmQACuiMTD8r7veYfrqxaAa1",
  "key7": "519NE1rwb4fiEm36oA7weWMfToPUSZDS4ttwqxd2fQpTEvqRAWwuxAEbKacXpYEFf7GDL6sxoGpFPztXB57R5K8s",
  "key8": "3vCkVFwsGUec5jFG2j8b524apU9MMC7D58YtiahEKsFSzS2JSJrmtNixdYdEPMa3hLqCe8B2AfBf8aLSF9ZXTiJx",
  "key9": "iR8FhFaMumv6DZYmimesRkyof5LoeVU9kfjxmHycLgcenxEaF4fttHuKR6gAVstEAiP5AS1UDPLcPNDNpssePuj",
  "key10": "y5CcUY1ky6BoZUJXctzKHgig7DcBCo8xsCxHky5GrQjrvcmwo9bm2Jo4QxCsnjjBUvUsjaoqBy4UB3u5K12KWNz",
  "key11": "2JHDLnXgrJsMBsgYkEmkGyGhRszKMAJHJ53ZaEuweSFUmG2fH8Hq9xQjvgNEv4rCxkgKDX8abgXWpEZk3xfcniRK",
  "key12": "233VyQVj9EQcNtP6WCEfuoGdtmMmVsVRmdgTa3AiPvVmpmchd48qV1BzWFkJrsQRYrDVtdMTREViqmvE54HDJ1v5",
  "key13": "5XwfTDEwYu2dKiWhXECVx1Y69Ug6JaRDwV3Nqy9vxMqgTYW6NS31mV4rNDDfJdrbwNXQo24PJEJDNDNu7Kj6vSwx",
  "key14": "Fx9YRN3xQ28Cnm1K9TSVkweDBVbASWdKgCEsb3aG7pd8EV88PYXA7p1ZDK3N34seUBLrRrRc1eq167r7CGwoHfi",
  "key15": "39XeLHBwDWuB3LwVpYSQDVXaVnkqRB8f3LGHuU7BxQZn6BUYBQRr2zjetTJ3GBhF6s6RZZuHvHFJ3kRZoWcUrN67",
  "key16": "3JNLTyWC9sHk7X6VkEKJKCPe7H5GKuJ6Qv8kRrsxkPNZCv3Q7URD23pqozNj3fZxT4gv7uMaqBgTn9xkzt3a6rJQ",
  "key17": "PWRJ7qh8tr7MfeeAX79HaAiJjUyDboyLREiTLeMb9XoNtQqXR6w6tdF8wLecqLJHAcbauT9DHqbBA2Su9S2Ltsw",
  "key18": "5quZXe1fNxaJwj1y1q3mRuPhXGURSQvSwR3VG4c3CJoZVSnsZK3kZe8PTsYjeu2vS98J6uSJyurwFKu5KyJvTST3",
  "key19": "3ZcJx2qH2muAy7FYyBHwF3q522RHBjaYcxwFFbnoD2Lf3oCZphtyVVLyERe5LBLkMqBP4rZyfCUHy6JGZKzcHpoz",
  "key20": "4EpgtKTHdJXTaBBNvbr3dw4ei7nBka1iWDFdmK7pyhm4bcUModUdkyc41Nge49FxpR5HpLMAyPUdGpHGP89hWmS3",
  "key21": "5u6sCY616YV5xHNuUptWvm9xju3YBxKEugGJRoPRoRN386F5bzNjfBTBbDxjzh6cxyeB9dGmRKDQvcuskJ2TdbSt",
  "key22": "2Gna7Kwfwz5SkLJsF6GVgzzhBtRMhVVpNXNWHzGVDtwPDrZBqtxCYDEuiVkTaREweJhqSY6YWK3jizC47HiDDYco",
  "key23": "EQfRUaNeoyANWQoCwRz1nZ6VDYpEtEmbRig1XoMmMyBTLpgkWdG23Kf5xDVG9bt9T5BUQgP4cQX5CCzazc8aQdk",
  "key24": "63geeAU1Tg5UhhSzxmp7omcHcYvTSJTKsKyFsAdubxCTBdbBs7xDAN8FL9qLhFdL6uJfjKtDGMEnfsPxVfBfw9NK",
  "key25": "4tYDLdWbXQ7uaHDVEfBvQQVLDRhaUoJM644T4KEJherh5it82WVbcMnfGck4CH32RbavdMzR3CZyHUkohyGXvdBr",
  "key26": "2JSpszvsmzw8oRqaFGTcLreomidP3cqcfB9RrsQeNdpM9wPmaPagpoxVyLtBy5rceeD2ND4EZmnkRsEsp9KDsPnT",
  "key27": "35ZzCsuugqkGDLYdYVtHkvWnRJocgHNujZ47mqfi2PQNB7PfoduiGqM9D1e9dHuXMBF21jtZPVJT6R35s9U3woGH",
  "key28": "2h32gpPDFZh4VX8GUVdinwJLoKuwRiT9iWqdKEbgXBmNmEWdXaXvX7R5EZCtYA6kCbBKT7fuwmHuS4SRHNei4s6H",
  "key29": "32KxpSedCxQMyUfAnVYp1J81Xp5cTCrqn6mFN5jMUMvZMGzCGDfoB5mzdA8c3qtQk7CqpvHZuHJ5RNyWc4EL9dHy",
  "key30": "46sYtX9PiEDtL3vs41aobjhCswwS6k3tUUNb8hkDWCXTVXVAj26Xt28tENUxwPaZ3CpdCZENfsH3xYHkBXdMRXhZ",
  "key31": "4KoFY29F72AxCpbaJQ3mRDLRFccP4BopQeT3hihrXZkuR3PQxZChnLUZ5kf4XDacoRU6kJCNwWdZbE6Fn6eMcceu",
  "key32": "3bvrKjgfLZxryPM69kd5NxTPkLnhHapmCfvoy7ssM9pds6rhkbBnP8Vrr1th8uVJfVzChGDBeFpTpEPehnG843tE",
  "key33": "4jhz67ffsLFcqnDQW2i7f5kYmUXY67qoth5Mm3jWcKkPJqdaYmnVr811CuaCuqokGjZomNLHv43xiTMHC7RAdF4v",
  "key34": "44rgWNo27EBJwzFhKs8rSqHnqsrRfXXvLCTW7x6SrYs23HBoDcoFwz3UewRUYX8hZR5HmGQ1qf5dcDdh76sZMEQj",
  "key35": "2NcBqL7qgxK8FmuxT3HVFMytXvR3Z7xq7FJ99Vn26qfHNe2zJJg6ENH49r5Js8jrML2tQCLvn1jbJP9CodsdH8LN",
  "key36": "2ALEuTN7Ec4Km8bgPMH8YhbMD5uViHvA66CwafuugLUbXX2U41X9NPeQAdEov6A5UgKxyU1D1oCfGbrf48FrW3a9",
  "key37": "m1zgW3X21GNkubWKHya4CJFcco6beuhBWvPuhi2Cn51MCxr7G4Gu2MLXkG59m6fNK4yxhB7dfGLSJEtH2bAcfX7",
  "key38": "2SNAE3pesm4MaTyoGoW8ojjvY8FLoPacFZjqV23EEGBwRr2tGWGHwX7EWuy3TuLJ3dPxoHnKndfgS7uMFRUGsU48",
  "key39": "BXYpVxQ2oag3dr3MbuZpuEnkoNyfSHzfh51mcTPoVYWSBfmowQZRxLJzFGQFamCN2nV7GGp2eX19A6SWjd22VRr",
  "key40": "3gRW3hibd78Gu9NqJyxu275KxfZ9vQJpR9YpnjVvejmz1Xha5GKhGDeFN2R2FiR86rNvS4TERcjZyKZdEowpm1Ui",
  "key41": "28hr2jqn5VGKUvGh9Aq9kGAwB4yfPLEJWfkwnUH4hCaQHA4yFKrADBDrh6jWi8Vde7LrmhhNru9JJv6zAcenE3zE",
  "key42": "2i7isTnwNeWPBA9sNrq6sXt5kaJNdy2Nba8W6EnkaQq6aVXjFFQDr2jWzJeSXijnz3ZuKSv9MFCcnEtaHAXPHXZM",
  "key43": "5G9HT54SbdqVYw6NuqeGWgVKHsS452xCZVGTvbByujfJoBwd4rwzKkaQTrEUPhVx1MAqiMn6WLtn6LyzU6nbU45s",
  "key44": "5q4vMEScMDRsuosciz4197YV61ctk2HC3MeaKvnnuQWrFv3S7biVBHGhz1aoaqmjd3ngBiEqXZ3qEzHoZNRoBZZH",
  "key45": "4PhnKJxjPeNdFeudqY9HussMsL7PEGtD7AxAFBBkD91rnCee51NrAFq6XDM41ToeEcz3TattjUUXgeUPByifAkPN",
  "key46": "4goNUpJEcD5LhB1pecmby9jmUD8UjinndbgChFTzSoNn1dYqxAMtjmsLDFRCVDoy6K4msfepEbnUfSbfA7rHVkRr",
  "key47": "5g5usdjvvbXRFduJ1Ar2b9fUE4gp8xgc3fyCpXTtySW9CJCsRJA9uUUcvtWah4qJjm4kU9AmoDDmsnLf9rmGvytb",
  "key48": "bgpk4H9ikUfwNgaR5ktJS2kiUCedjcLxsrKw61gVdKtjxFaYfM7mg9dgPXMXnoWs5X1ebhpronsm4rDr6Dfz1Pm"
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
