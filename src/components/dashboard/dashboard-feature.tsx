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
    "4dLQnNqKYcdQ3LrDQKji2GcUH4AUUpueqjWWC2kxQ3ggfjwu4By8o3XRXe4nMFxFeM5iaSDxuCkGvYF7EohvhUjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8d8KbYZx4hEpjjXM7iPsiNHUNP6DPAji4a9Mx7iBFXeLagxQeQ9oR8gwRwbiQDne6XqCB7UzXdAGQt35xkCZxz",
  "key1": "41apRTt5Gm29haa4c5rWQqVLKBM3Kvaetms14s2ESVXmUbnjV4aRKE9VdTjuGmfK5SpNX3VMsuEJEzQWMmQcJ3ph",
  "key2": "nJKn8v6Lpba5pbG8cSgB89zn9pyqoSuZYkmXWh3vdS5eTNgVQmGhQYKTPBec6zrnmu4bkMnscQHPE5fhyj4i3UX",
  "key3": "YQADwRk9XPjj99y7hnotyo2e5a4i76wEDoV3LsR3SMdLzSm7mNQsYiwhW3GWhW1akKieLof6b72ahQy9c7jJKmZ",
  "key4": "cwbft7AZkSvdLFZatQcXX9wyKWvRLBVB8jqtiiDSSw2rmYtAjPypRyuzHyeoNDqUPQ67eVK15wsyEHx9RUaTmjQ",
  "key5": "2tjj1oDVchkvukupxjmxRGfun5EHigC1b6Fz5MhgeaGpUKHerv9k7VjVtTTgbVHtti2ccWbwfuoPCpmvQmWJJfAb",
  "key6": "TWzfbQr5sU7RwWJ33jeFo8SRCeg7yp2WXZrXpLLwtzvBFhnjNdzbBoqd4TgEtK8jXH3N9d8CVWR6TMzby8kBjH8",
  "key7": "5VPouFDKCDakDpm51KNdjbctprUz3E8JrZEGbv3TXTFoteACCF51LnH6Za5qP8ki6uoKCv6QqgnNaDERppnQA2zH",
  "key8": "2AXJyti1CZKEPAEBSch2PAAPku37WTFZtyJh4B8AXgJ3c6iYnWw9YxCepLMYDm8wcahJrXtcGjwR9mCtHt1iLMEA",
  "key9": "2R1aZr1hVHK34n42DZvoac8ifseywNzs3Xi6w4pasU8qQdoMoHZ6izce7pLGQpWcNrHzogMYGC7S9AcWnSj9nRb8",
  "key10": "3A6KcdvvTDK5ti3SaEi57r47JdYPa2uascr9CwgxU6WHoNzcum7bi7t4WKmTg27qVED6SSryQS5TVoWTjUyHgfUh",
  "key11": "3HVziezAEYGs5dSR6EHJxHK25rzXixHF3vXGZhJwUSvHYQU6w1kgiqeTRs7yqMmAx3tbveuU5V1FLDhRDMV7Ysxm",
  "key12": "2AooKjytfnmGMsFD9TBbWhYdhZ81YBt3tCdTWZetpnPtHj4xaYGvvmdjXnv8QonheRxaNrYpTq3c52fYewhdrQCW",
  "key13": "NmG9VqVKVJVHByV9nMUFZQGqrXFeqM9j8HPY9Fprp6uFJocoCgQUzKYHsvMWZWVo7T79of6wxJpvG7vdsEV17U6",
  "key14": "5SCz5vb8b3JcVxFn77EyWsJ2tPMZ112P4cWphMYMMoBunFtqRmJSUgjSUurCgzqvkN9gMUzvrDKHCUoFP4VdLX8y",
  "key15": "44uQPRWFQ4kBRK4731uhH9xgCX4eUNnLphnmYJXP43DH4mCQqvCxhWNta9sVy3HFDBUhjyawXxANe2eoQKu7vvs1",
  "key16": "2apLPHLvKMRd3a5b7W96FJ6pzu36RUQwuJivodWrk8yFQKJLNghk4AdJZ4TqdBeZ5kECWVEZKzp9f65We26kYXS8",
  "key17": "5CPYNpBseZXzTYay4j1JdtAiunMM5nyYBnxnj1X8Nf8fKj8dHeuFcTUYY2DgFPntnAWqY2fZL2zifU2G4u31G6B9",
  "key18": "4mW9huZ6dLESGG1DALtvmdnMPL8Zkpdk9RNWvMKUCegfx48px414T19VGvuNriRcrbn9dL7ite5yPTEZL49QCeEr",
  "key19": "CKC6nxemYHbpbHFBfHiPVFuAD9kBDaBBr3wA9fsSbdKLsciriS11xvhEXmBw4ZoUHLXwmY62Dgn6mFYX3huNNRt",
  "key20": "4HSPCnSbGDdtYuyjVF7c3tdTkAptSV5CRZQgtXWVN6PwE8D3t5nbt4xwdwLeSRHfKzRN6gnWQGe7FJS1fLKmRLMf",
  "key21": "b4v4eqeiSn3qYYBA3iTWi392kbfoTyiV6TKN5wznk5RjNYTUmp494erY5GmsE59SSYTSmaUjBGdFpd6BsHpsH77",
  "key22": "3QfrN73vvFc8q3iMnVUtZE9Loq6T6RWVdwSnEstw3vLS8Fn7NZfKTxSdXdTtCavQ8qLR7wzdmHoZxRoEbbJuT5jR",
  "key23": "1LCTHNrXe6tAf8aFBYsaZ2etT3TfTG1e9fMDJZeHrMbJJtEdfecAQHs2A2HrQ8CL1md5s4xKiNtgUQQ2H42Y5Ur",
  "key24": "4J7DNbm8HKrDRGh853zn1ZqfwykLyh5ra6gMKNpA62463qcgCvPMZ2BQ8s4ejmspoip88LbDAKJNxnBjywuwjQkC",
  "key25": "46GpXsZ85UC77mDE12xmYachJFTTySqyVvUbAJPgdA2Q5j2t9AP5J9VP5sAAGdNHiKtky345kRee1ug7yBsDveYi",
  "key26": "4PSmPFep5gFKb7gPjq14wqMKZZVGc5szSr1KFRD6ffwKVUSc7TRQRVpkFzQYZA9rrmN55Jo7JooEiSdBQ81jg2MV",
  "key27": "54endA5CBJC4BHuU2h7tZUxA6E6MwiYaMpFdzfvL5wmHTmtynqU55P6eNAfcerK2NGeGvuwjk3gsbcSCs4B5wu8N",
  "key28": "3KksXjYpm9GnHKQ9pz2cpBAEVJRhA81WKxPgnonpuqtsBUqFTVKBdrrvoc9ReD1saniGfHoGUDVcGPVHT99zHNXw",
  "key29": "3ad5aEHS4rFNP2446XRpbdshzLsr9RQBrfXb3rGwpxbs6iJxj4Wiigb4eSZdf41dHPPEFUaC45Twfk7PVZdw8UWA",
  "key30": "2UBebZ8p8isqFSXjrCuGSbG9YFDCa57sW5sXTmTPXaCVGQ6g3oouXnC7uCXxtjWKKjU34CGmFjf1NBmP45kvg5Ak",
  "key31": "41NaCFK8H3DbD284dbacEAZ9E2uQLioQzv2oJ5fdC8ZcWRfv3AaR5huE9RN7swZmYiew3TFqfVSMEn6pLKcQFUCX",
  "key32": "43vpEwtmcUxjQLdDcGsYK4Q3q1SVentgxbvgg31PA63WceQNHtGqVfSVrg4uVRpob6M6RFJmowfsKycNR1AH1anV",
  "key33": "2qjs8wbXj6edUPvwFg5eNevCVTUrdQvqj6Xeen4f5LepTYD4jPEVVMSYYzwpmccZ93nmebRdMD4R789dQEK3Mdof",
  "key34": "5bESMHkUWu5sEYzF2dHcv2MJz5FzBrTbLRmgpVKw1cLMH5uAwLAv1WdyY6Fg54KtjsV6daGeLnCC1mAFJiovVJnw",
  "key35": "3FiH5Qx2h3E33ibB2dQhhqsUyiLeDDdn2wNMpEPpsdxHADrJpFupr9qBwM3RokQLZbrw9oTtcWFZzWC7SoLZqgtW",
  "key36": "5F3ftgHpsBs76L5C5JuBz2HJKfpAVJ1J9iYfuBDqvoSCwHe18KZgfTTaNkW9PqPh8pZTPCcFes9bcRCJPmp8XbGg",
  "key37": "gW9JBqbvw4nFjVLfDRkLMPsdxQ8UbkbH7aqVbHmLDVeMMsVrTip33pY69AzQ6dKmNxQ7141E4TNovUAnAx96psE",
  "key38": "3YDgyghATejFV1cXKMTPaDW5JAHc8BwcAbJTZ8eJQqsAeQbthCueYxFhLNZXC5k2wrELAWNkZizLb9c8tBiKUn6T",
  "key39": "JSVjMCJqZD3chaTVxPN19KDN2ifPoe7ZKfXxYjxfGSQWT5pYUJKWJiTwraZWgTS3DL85Y8vFw87zvxDFADD1Zwu",
  "key40": "Th1PQFxPX2fdicDGRcZDCZ1pwqTMfQCpYTUYjacCJA3WH3CKX3v3ctzhWYe4oT6ZkuXUJpa8dnEKGh7cYwWEVef",
  "key41": "cd3chcarDz9NofzVCLoyyKgEpo9oDGfMVQoGNyTxZriWqPjkgUfokF3SDRwWGv2Ka1troCTE19AyMUgdsN794Ae",
  "key42": "2QooirXwgSNostRWANLffpQQchhWyVWsGT9Eewkpf3i1GnvMXuXDK1eyCLL3oAH5euWHKS1yFj8UyHCYCM8et6xE",
  "key43": "3YPCfrq5tWoRuga8devyGrMVHWM4b63FJKVMyMaaecm5eKnAkHtaBpSAZ46Ct4bkhFcHwY4BhMHZxAPShgseWMc",
  "key44": "2xmfMPqouTyrVSpruQS374iV6qWNngNFPjFXkNwF7ehWpFuu6QMeTKEZjK6FbSFujkhhdVo66QPBNZ5D5Yeh8wx3",
  "key45": "677s74bsY34gmGJDmXat2pqAKrYvKPmmB4DRSxx7Tmqhk852VPXqxXafeS6N2aNYzUe4B5DTKKyVqJoMtAnkV4Qw",
  "key46": "WncLiVycmqF9KswHPAuwEUDCmDx7bMnJmQjqTAtkuXVBFje7feMQoXe1qtmNSnKQTga6h7SHurxCmjrooASWtUi"
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
