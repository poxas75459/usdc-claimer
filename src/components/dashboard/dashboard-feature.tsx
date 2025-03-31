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
    "3PnPmE1yigTetecduA8Pk4mnRcXd8g465b1XzrVDFb8Xom1ciHK4BYYcaJ2Yq1Kk7mk3zHF9qWZyuojKW9NwuiJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FWLs7MrwDotLWvciWvK3C2qe2wxN99LLaaQ4zDVZKr1sPnWgAcCeu4Ldrv1GJwfzKM53dQW89FqYh5AFWmEK8G",
  "key1": "4efw1QX8Go2t5zowjuKfgj8o7FLB54eaV4nKX8LiALXmPo5btdEDC7zkvfVraBBDbvaW1CdTVoHpKKtDVtuuHbJ7",
  "key2": "5w6H6RFVBo5dJdUdVnEivCFBTEHMGupmHWnsCMtUuuypon2TsBDBwA94b5KEGxEHkFEUe1f9KQV9qiTkYUfFKV8H",
  "key3": "48koFz281UFtokbjVwXihNVtUuXQ5hxZwhbuPvorhnYvk5MhDMqeytBZSjFShtxyYbxA34KD3Bnw9eeLp3VwYvdP",
  "key4": "4EP8gZJJMTwUVe2YYvLyYBaEHjxcbgbv2Nf15bMj2rLJhmPnD7pBFG4W5RZfVxzdEDYFTEJLXqfyuU1Tji54tjh5",
  "key5": "284ZxKSdV6RXLKGbBJ3aNbAMSMTz9ytYYTaHLGRaztReDSY855u2kWpR7MmyFH1SmG4XNJ2ki1zepftSo9RbhNnh",
  "key6": "32VZMdnTY2Zqgj3E3DGVDKRV1hHsEa1jg9SNxdrbJgyn8QKSxzYz3GoU8nhsNJLLFcqn9vzEDTAiuUB7Vg6142pN",
  "key7": "65B8ubskCvZKF1quFpBPbUEkQHg3cb78FGimXBjKJu8cTQy2VWxD9Tur6Wn3rXyDgWhexEnipN7fmAbch824HX3q",
  "key8": "41V754ASSRbGM8Y2sFUEm4t25E6V2WeHQ7aABcyHq2PjGzBT8PryKNkvayMLzCfz3FoTxK151V62ReC21ez7TpQP",
  "key9": "25V9bxgQQ6XNUp7hoZQYPtHCRhWXPsqTPi4nFzYcDG2QL1bbkEJUiyr35gNxkUFphZgUzNP5zGgdJFb3wYfWvX5D",
  "key10": "3j38eh53iLdiouRJzoA9qCpq318Kps83ijpEzN9fNjHkDqrCVbiweKKZA4nbQfHTC9v5VhmkRNBS1YX1UnT48uuH",
  "key11": "5s2uB3QsPFgBPBVTN282KRaAFwrqvVYx3SVGTeCQBpLnWU3znsfir5AeZRLuxPmC9XLopKrErKNjuNZtntPsMWH1",
  "key12": "34naAPAMge3QDspCSJpN3SA2S7sX4b9CUWefkPAjXuBdKoC2R5GqMSf5hFE4uaUDhi4sbxWC1WFeqKKC3mgVxy2T",
  "key13": "2ZVW6nKXPQojVUkG866MYgUZoDWwKEZochXarnue4RRvyUMTBRwJirMFwzvcYebS2zPuZNYk3yuCfvzbrRtyCxTM",
  "key14": "3sHUFmd69ThESc56piv2g9bpVwZeBpQWKo77WV6rtsRazdAZABCgVT6U6xem5QsTscm99B4GnQYoQog4zDZAHA8z",
  "key15": "m5gnT5Bny7ZAYx7gGDon5sJu5KUzXN9v7ttMDZsajA3nfZbB4v972QwGL2E7gHpmptPL1nR64QtEpFNU3WvprKJ",
  "key16": "4H1XHQWT5vtBFNrBAKwjNEuHpbLFK9Kujh1madFTFtBNtUwBG9nJcwmzciFtAH34LQcpXgybM3gGFhQWhoiqJg86",
  "key17": "3rxF8BZPAdn9v1VmMDYdDSwxTwp5goFccS9MGuMoww8pqjja17HonFs6Pttc2BrG9JE48pSMa5t4KPPBnhqebUpj",
  "key18": "3rqdNpm6m9W5yecXvt7dNTKFUeuhWfSXCdv297U3uSeSmPZDzFzwqGrekb22SbBQmmYXnkev5fUjv6wdSg3Y1PHn",
  "key19": "2wV7t3t6ad9PcBjKNmEktnUBMHJEgUmtjVAju1eCEvKCc1bN1QpyTsjxCdYgjUPW6Za3b5jesH2NBGeGkGis5LAP",
  "key20": "579Qj5oHZuai1fXJQH8J86wUDUCQvmu9Rw4uEygPqjxEW2GdEv2M3DDvv2imjoYhPTUfwM4H38cCvXm9B7EUMk1v",
  "key21": "4k71vd9xpufmkCFzerrZ3z4PTs3QL8WboG9A824PSRAgmqbLNjWoEcVSPTpDa6Fz3d5bQmbvfY4Lp1fNqeZ4nA7j",
  "key22": "3JLHwS3eb7jkczMNxWwkeENYPWZcRAi9uuj5hQ5doagTBd3rVcBxNordxf9Ck9Tj8z1aWxDq94HBefWqchX2WjCp",
  "key23": "3CrWeH8qQ4iQy1PNH87aTtpwbzC4MMbqAsZtW8HxrTZS6ZQZxyQ7AXBrXZUHtf3BsTU21JshnG8o4kP2fYKf7v86",
  "key24": "rYwPRcuMMMJmGGYp6sjUEyp6TkzmqjC9GsJ3PPk3fnnGd1Xyq3Y3yKopaZYzRWapf26dRnnmv9Z35BVntfFEu26",
  "key25": "UFKS6eMHmsZs1AMvJ1JL3wzoHL2yc7wntGQpgraA5c95Ggp9FMLQABoJBcY5jZSWsGA2aVSMusTcHYmEAot8ejy",
  "key26": "32WJUPbdYjYvDwAJBYfGFQVdXVML5TSsrvPqUv9tT5Q9C9bUzsirSzNfihCL77gBt3UzDgLcyPBMZGRr3ByxjkVu",
  "key27": "RydEQdWrchRC615nDgMGT221BsXh6YWicBDTfSemiH8U5dpyXUnBdNtfRZgzjgHz1R5fJUta6ceKuBAJeSDAHVJ",
  "key28": "2MMLamUWf47omh4my7giRRrhTXzPN4xCkmkXUL19DiuKyxLy4BMCqWpsFcJhyUSu26fQQphvaQn9G6FCmTHQmoF7",
  "key29": "3NiV5dwZ3xuNcA4GZN9eXdM4MtXWZHHtTDWpSwveVVFs4RpHw4x44Wstvy1jgj22SsmXZ4v5avAnQXnTcVp45jez",
  "key30": "2CVJ3kFURQbmjSZFGHrAp5iDNzGDzLs1TjPgBaLMKESv4ZysETnA9VHqERZWMhUHwNEyaxEwPYz4yT61e4JMbFCQ",
  "key31": "56CGousF4TVHYXw9jFtaRu9hRCk7ZKE6b9oJPwHjda44phyCN76zxxM92X25q6KzQPAEzkv3ZDFNsMGth2jYaAu9",
  "key32": "5THKUdoem1Adup3Hm417SPJCgufYiR8TDsK1GQg7mbVkXXHXNvrLYnHAPpsvbtB9tztCWBAqv65vJX1ZMWjQWEi4",
  "key33": "2d1WHVXhjGpUgk3ZbhSfuqwb6VVVrvHXkYJzM9GEXkrncydFcJ1MXiomyufvhmm8wVbvmemSenwBjmMxf7sXMBhW",
  "key34": "5qQwpqmqQGfVNBKycmsSjoRe9NQPSan8HVbmfGQjZGKUQyfK5penuurXJ1pJfQb65qW2uZHE1VysvZwmfwJu8T14"
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
