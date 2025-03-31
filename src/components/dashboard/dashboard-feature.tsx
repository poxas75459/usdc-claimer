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
    "hQ1UfXium4eLG65khvEEMDStcbixfQ4wz71HiYZjYr4grCRtKEhuKwkuKoZpx4TkN6FNEHSnj2Qxq7AujyiXcuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yUbbQy3niD3p91zyZVWKB6etQX6sq9167RNETJDjqeNjLpYgbckhX6FSkPaGykcZur8UTXyQgM5cbuMGuwH2R98",
  "key1": "5PUgnvzQSbF4TGRcxpLNzSgAchGz7FvVfPheo5zwi1FzLa2wgmnPR2c5NYNXYmA3daY9D8GESWpsFouxqUHHntng",
  "key2": "5CST8h682EbZtb7TFkcjuuqhLkypqk1Qs3zxhLUXNE4Biq7TeQ1EBYG45FsrQQ6fJPvCUmmjT8A7sugokeVR2Ynm",
  "key3": "5WbZRi5WwtDyU9UY54GvHp5H7UsjnEqD9LSf6Bp8fAJZLn9nPj2Au8ycjDxdi7RU4m9AgUGcwBkucQ3BA6NMKFeE",
  "key4": "Xxp2HangwScxJuT7JVQuxZJFntfxfhS5iiNFJneMZ4Lvbx3GxpG4sgPsjWjVQ1JACiBQqjbVKhQTJFdsH3zEaeW",
  "key5": "38gossVp67JnXEi35ewERjW8cVcAapAYfeiR2Hb9YLsdQvjkLDwA15FLSSJaoJmkzcpwueNim3Mk1cjXLETEp7gz",
  "key6": "63R363T7e4pTvdYGutTiGVRhKYNP8xDpsj1gFioSe5oq6htMxP8g7DaZUQMmdwoNo5piUq1GzbWQBhWDJZvKjKi8",
  "key7": "VtMjWqj31SxREdMNHKAiJqGRY6HmHqAb1Hr3mpsySo7r6GpaFKuidCWbCfBWaaWQXsiFfXExSbCyGpAbfexBFnN",
  "key8": "5ejs5jkCfem5TAmMAhFhXuHUh5JmouFwpKA2aCN2SJfKFvrpNNUj6s2RT2XAdndwpWp9d4cHTZcjU2nxE9m1hh11",
  "key9": "bKXhknzMa4GeXptzu3Y4efRkVGLq1YwDdwWRHQx8yK7uQsf5BPmUjuV6bXEcVHy4ujstTGhDHZhCCnaC72Yfivr",
  "key10": "4NkHmGkRc2k7PnpHnFNxNbm3HejvoEjgFwViCHXdPJs3n4jJZjzW7tu5kM5cjEFtSd1nusq77zumHuXVDkGKdErp",
  "key11": "4xCcXtz7ZUqiJhYRxBMg1rkVsQmz2pY8DXX8RRWYAbB76NeatKMyBPUMe1bH1eofb4qqTUZdKcF54u6ezi85SDig",
  "key12": "eJCd1TfzxhRvnAkVsne2bLPQDMQVjPT4hbKfTeK7fdawJTjDjoXLpMTRTuMbYdEAKJocQf9mXvmQjcypHS5x76N",
  "key13": "3gbDEqetAF9YbSQ6UoAyWE73whFUpkoejzfQfB9qb8mWyWPAAEsPKy3zim85ZkCop4Hkga53JPikg2sU2cdLfzhY",
  "key14": "2jefTy4w7PbuJeibRTPY4RLT4uJ3zYa3WEpwgTsmJSu7nGiz52Dst2aRj4MDsnTmSu3bnq34fwjnLQB1DbSaAvA",
  "key15": "3Ca7Z9SQhJ9tW6BYLYYPWPKjGyBXm8xqJzxWdaAte6sjip1j2DxQu95fWfuGHHiYREkM6UQFi6Ke38Q1kz86j7Dw",
  "key16": "4kK64TKxVZCMvFcXsNhrjkUAw9PGKss3YJrxeWAXYopM55Lu1tVjmsEShSPADMSZzAtbc2wQFusWejhMd3AdVsh6",
  "key17": "5bhQaGew7t28VFQxx496XBvRNDFUdFTx9C9AVAuoNUUwHbfE6rNoi8rB3QH99Muc1Hd1PzpBZqbVyF9htQLLsQmA",
  "key18": "2phs1eKWsZGNgA8MhCwLNKGdhBaBgksW7QJF3YYF7R5WtX7WuAahCd3LiororSU3s8pEfnUtWb1E3i4izF7pQm5U",
  "key19": "3UFALXPDLdy3kkEYM2axaQ83no94JQdwS2WCq46WYiozX7rrmRcgzH94tsRgwvZrHiT13BrjeKhLCXyEU86v9uH6",
  "key20": "5ofVktRucftYbUMSyVSmGTR6WbxwPATPde7kF3W1ogDpXyMn39pYmPfkVCsfVsd66r7omBY8GFJyHCsRV1uwtWZP",
  "key21": "4MqEonwDX5FnSvosWJKi74AeGChDJFqTpKX6zDVow174o47s5xLhuz3kriziUhCVFDcT5d1FQvAntHKzKyspHEiP",
  "key22": "5RtvkUBbg5NFt6DB8Lt3TJ9Jumcb9XchaPmjLszMhihqTuBGvQoghcf8xj4LsgBPzbyThWJuotd1aYQGUTRKhqAJ",
  "key23": "2KcsWNLiMsVfnZffrwPuAUXWHVZak9CyBHrrJavcDYA8zsbTqxdrEvboKLdnrCLMkbqV8GuxKHJkFx66BfhGF8VT",
  "key24": "4jV52NKxijKkaZB42g484dRAJe1pGajBFc9vm2Jh53NnxCj8pdd2SMXCiPdmkAsC4xxmd3iaXhGnMA8c9JWtQ1Dy",
  "key25": "iZAJ52FiSwfvVe3X8sgsFMoEvGmZVE5qwSsSa6rTZ2fTW1uEB3csRkSure3FtbNqNMDYZBHvXu28r1Ku1foLGZk",
  "key26": "3KYvXL6kYm9Z4YgLQPv7KtPgoHh5huw5KhUajQYAnLujh3X3VJEiz1soP5V17q4EDGJq7HSi4Urq3szSeymrTVmH",
  "key27": "4dSsx82fT4K9vdXgJK3xpqNgxa5xAggL8HH5xPfAhgH2nsYfBzusTA629j8XtJQcBgYbknDRGVZn5nvf17eLKvJx",
  "key28": "2USkgeedCKG36jKABbDuA6BHpuuW17BzADEUu532NyZKWANMyMZQKwkorS766waRw2K6egz5P1aBLdtioHvnkPzL",
  "key29": "3ktGACmUdpuux2agm8rwpgDfJpBf7BEk9Pab48oo3oS1onjzLKy6qWRR2kMoTzSBaSVWocT7pcK4VnyB1zyfuxPd",
  "key30": "67XcALWjC4ac3zoRrhkdDzet2g468nXPLnKKgrRtdXVEwqEsb4WTbiUgBzJZ8huueGdqXW5WTmoLR1q5oWfXkaD2",
  "key31": "CZnySxrzFVpMrqbQgqQZNVPpvbAkWhfLtbumZoK2YLb29bF7tJGCGoe61MwJwe7HEhEgR7mQPACBobifXCbjuex",
  "key32": "5MCCW4Udat36ZjcDX1ZRPs3Ky1xbrpPtrLz9YmTP64YZbCexdBpwEC1rz3HwkPamG6ddEcfzChaAE9it4ExYnXoi",
  "key33": "4tU6QGsxQi5fe1tKb9UnQpT5apczz4TWVVMUHsJiVXAK5RxhqPmDxf227zLn4BsDyCuq2QySktw1xkdi8D7TZ7BU",
  "key34": "3TnTP9RDY37nRxbuEV7Kig6FiyUeYXgrN9pjuHcghfTz56ZNoXHQKKYaVVS5HSLSsXqnNykPswPucgyo8oaYQhVd",
  "key35": "3mGAjEV2wpjQ3R32UXhYs1fSZRgoXYQLMftttbGByvDSYGtn4thr9VN7cjt7uCbu2VyLCcEqSEvw6gSLAqpeyEHn",
  "key36": "2myidnruaK1QGwuzziVAGsaQKFHkE3aAUKENgLs53n5nVC9oRYSRiNNZknScDzwejBYXCJrkQq1snnybiDuvMUHE",
  "key37": "2ZeWDyzfWGr1ALenocnbU82iJA5nAqY2gLZcbU78k4L5pKuJhj1esKKEAAVuVCFx7xEkVke8kfdrGf8F8x8ngNmH",
  "key38": "4GnH7iRo31x5pbXFMGYHJcAJFefvVqFrWrYciifk7Gnsax5pVDCpB9zynv2EBguGDfFvMwBHaYBn5KG4dwF2Do5A"
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
