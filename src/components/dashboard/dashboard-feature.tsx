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
    "59ueEaqYpaRQn8yZ8553KaChZBfmbQHcsadckmdnJu1VUdUZ3JCgA3GBjQqU7Nfh7vtTYdHJfYFWbyWDWdkwWgCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284LfpkKaQDM6qwcwGXBXXZoTwbgqeZSSYmnvx4x4GfJi4bKcQEvSDwUi7TAfw6kZySvgtZxLiPtFLGXEhy9Hmtw",
  "key1": "U7ExfoTMR4HPEteFqSCyRcoJNmMvTmLNR1Z23iYKx5u1fHXoG3jzKUYAygH9KJ3fPXegAyUu4CMVdbgdaCxSWWh",
  "key2": "4SA3TZmK2jWyqCZJ9hR8yCPBbYaqY1946D4KsDVWibRoAHofDRtxUKpLxcfEptGAd1arNYgys8SQFk34u2cB61hK",
  "key3": "47zAj2r2DQ3Ut2VLS6wCdyLZZVNeHCp65NaTmAT6UdmqzziiVw4mzw1BhUxGcBV1FaKjNf5FmPx8D389vheHJVPS",
  "key4": "67ciPDmHnqebFZFc4VRhyp5hqTAhMY9TDQvHFcAhH9kN66GMo3KRaE2encNp7SMAahiuD4CR4ST2AmJjGEHUduif",
  "key5": "G4mbzMWSRxZMDnZpdZNe55Zovg6qZjMb7NDb2KEXEQXt5r2WHGeMSL8ygCfyNMRutXXaCFWQuiR2inLng9P3efC",
  "key6": "VptqsyN4QzZD9qHeQsGD8Wt3nGsRgJ2TDGrZNYerRLxgR55SniBfEcA4Vg6DeujbVad5Cwugz7qCZPnTth9cR34",
  "key7": "4wTinpkSYf5ZpPofnoBvFntDf8y5kUAQETA5ePUJPNFLwRPJizPECCaWKoWcNrtXrjzBa3J9wRoM3DCFvTeEDFpU",
  "key8": "3patRJ8DPsZqeASSZUs4Jza2MHFUUCh8A94YhWNVSFGv7kRTzAqHgkTEQKXj2KCqjRf5abaW8HJZ2Ua4yQYc3c3N",
  "key9": "5n2hN3XKHFdFPyfSDUDrwy7jpb2mvCgem23v8BBs9QEzfq1Dxx6TTiAsTpTgLF9mz1j7PPDFnwCgPVE3x4g13ZtW",
  "key10": "4tEG6rEn2ugGGHrYqf3E8kWBupKZAdDxsmpYH79c9NUMkocjBDAxFXVgXdYDKo9vbfBQFLDaVwzveMkRHes6tZam",
  "key11": "3ru1qJEaRLNqqrY3kHsHY1y7BCk7ze62gZXyiVBxncUDsuCrFhJTnnQ3n4Cq7uKMue1MmEtobSdJSoxPn5Y9jLGg",
  "key12": "2XQHtrnADwCyapBkBHchBc9jzPCK8rQYviorm1MXsMmoSo7ad3vFRd9jDkQngo9rjAdMobkxpVP5WArfw83HrQdb",
  "key13": "5wJyLw8hT768wNBYZkXfg7DAcRU2xW3jBRzXdiXQaD7eXF4PNEJ8RwxSLZD7ZiJtdCkxCcsDHrYavkeKCtAZPqBg",
  "key14": "3YrB523oBGooNKrWxhqvYgNMK7CXb4uUa9efd5y8PDZ16j2FmfrPtEWGHkm7bSooyp5dgrdtGRWVyg5JbavFmCzr",
  "key15": "4gn37btJmkbGtz542mU1x8iYHQuzujEk2XGbini1hUXkUS8Z1zGYkUvURmTDM2vT26ki5LS1MgJbvXERpd2ivPLN",
  "key16": "yw2URj9cpjknDrGVP5AnLakUKsqbu7rchGZmEx6TytVRkbi7XDzU5fR4GDkJANkcTi3QCyGGgiCJZH5MvtwisXw",
  "key17": "f2JMwYSKq9peTwVVyiqVkJvUMGfHXm6D8jUmpuDBow3QfHQhGiHvS6pTcxif4L3hsTU5kxUipiPFW25e8xXVrb1",
  "key18": "5vfewwpJvQKuwhXdBgq8T6phQN4pNXRfKWZhnhKdymivxvxQk6EHUUJq2tNxwqBNa6ZTmv9WJjKrc1djk8JBWH9F",
  "key19": "4R3TrV147f3oL3odFMb73k2HKwH696Q923T6yfmoBVzsxFexGSjUFoCmedP3V1rVkePijLndwE2DwkdRg3U6VmaD",
  "key20": "5CXuxEQxg2vYKmfQZ12mTeZxoYEggvzFko4ryUc1pqruLKR1QTuUmMZknZPnrKiqfwoTUad5Ts8j7p88RKTndybr",
  "key21": "5Mni6GmiyKTC1bCUdztNDrsBRswcBdBK6VkdA4PsvddeZ22iYBp83cqysbnN9opDkq8ayyPSLatjrWAnck1Yz4r8",
  "key22": "2a78FFDdwMb7wS4n6zTje1mkPRQBhbGrw4HyoYYsGR8Fbx4thAPV9Z2XouAk6kQmqXNozcyeXypby784bZukpFqJ",
  "key23": "3oFvrCSHGYSDhhrA64EMWYS66RQFcABY61YcnHmVCtdeE7y1MdfAmCH55yhtfMawJ4MYApqjpxt5ehfZhbosWmLX",
  "key24": "fquA4EfJ1MEfydCFHH5Ga6SUVBoDmdgE4vYbFRFYxAmf48HeWZz1HSkaGSgCki6DXizQd4SrNoHaqGb2YoRH9is",
  "key25": "2S1mrVsLbmCqQ5xmwGa4yVQg1a8PKUPgXzzozbmd89aeVDDNW1aLHpL5qQVAnJzmFfMWaXjc8m3bvHbVqbcUwmub",
  "key26": "58Yq8ar9Em1kraM5m49NGB6FWxWsJQo4Dbiq8U2PfnkzK1PgZxg29ffExzDjb4sfrZu3gFZ4BwstdgRGHN9hQdgP",
  "key27": "37gNb4SG5ecUdCgqqtphVQDAQHLmmmwBHyHPySC1S3CbeuZgBQQQXRTpwDskeaD8U6dHjHuWD4bGnJSbTefoUfEy",
  "key28": "2QzfKGnFwjxn7Pzff72M9JMm9a6UZ1jFMFHovCeVD5VbxLYjqsZDiPax4Lckxy4xKBFPa2bN3hSmjPTQiMNuAHQz",
  "key29": "4cC3B6APFXQSpu1ar9KmUY3jL1Undua5EfX1rgQAW1n2WX42S7V6TrJZpkP3o3et5mkPJfzTXBosTQ1nHRMyVbma",
  "key30": "3t3XRxCMjSazzaXfd18E2NLvTQvTAyK6NgdPY7KsWvsAvy8R4z8e8KeAPfwtwVfEpRboMWVwp8FUxyhpyvbypFFP",
  "key31": "1em1Jq549efsBi8qZxiXYcX1MweNEbVkouiZxFU8Wkyd2xRWeRDPE3vxyewZon1vUUnwawY5Fr3aQztbq7UQAyY",
  "key32": "3FpteN9KZTD33D8MspeJrb2QzvhyhCcWHEHwwjPTwPk5AeCcqzvGuBM9T8DsoJ9d6u5gu17J4k6JCMwsgfwpjxSo",
  "key33": "2eBpgHoFovyWTLoipVfxuaP9vHysSZTDVgjKc4cbH8zSebxvwYRabw4qVQDMJ8UkchCibeiJUoDbXjC6sYGBfDbD"
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
