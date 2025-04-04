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
    "3SZ4S2Acse2jr8bdzLXUW6C4D1TMhDYFJRX6nKButkKQy3bdXrVNKzR9px5CuSUg1a9kFs1KaJf3p6p9khhK2tme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGKuuBGkRYJ4qkAdERSaYzTABCMiNejPGK5PfASntFgq189nLbuuqEf5YF564Rypf5VV91MoSf2BhPnVpHaYr54",
  "key1": "5ZuEjBoke3MZyMJ9xDgm8pNiHUE6MvsJo7ViUAmemUhYEQJqkqDz2dKEFyyoBBky7uQgizYDQE6Bch4yXiPnvrdd",
  "key2": "2VG1tgKLy3zoQPZ7Nt4iPzDqEJGWT6KJLbjgPF5ChYWaYKjG1p6KS9MPwUi4BcQN6MfXUuDNmTsGc7tcFFP7VVoj",
  "key3": "1qGamvHiSyqpcz28TxRRfaB32DxVuYWBHuHU1g9PPy3DjeK8rdWkxKvejoJykVdWPBTzrjwAsw68VhHoAVesX9q",
  "key4": "2D8pfq5FeJWLrmT3Vbt8dMetNLa3zXXfU9F6oZkAJzgipdjwJG1P8Sx4HzyNrcSCQWxHuvv3NNYBFYmeTYukGiis",
  "key5": "5KA66VQMQTYjQKT4xmhS1XHdXPKwnDmyhLe5gTtLX67N3eoL6qR7rWkNmAqBdhwPBkJgu8FcRoDpD5gVvgChDAUf",
  "key6": "3SHHvVSTK3Gqj5kEHWHnFLZsLR41yogsVFuFmQJb5Hq3ndJiMDp4T1KT6J6JjRMJqgbYNEkAnaK6Tb1DgLPpHzBN",
  "key7": "3faRRYJiJeA8nYdjXqbAsuE1Ck9N5VCH4MA6ympWPgNEYSaaA8BPeckVgxScX6HwDj9N1WMUMFfLV7PkBkZwxEDE",
  "key8": "4D9kDJ6h24RDRZtj8kvDWsTeNdgpr8Q4q8S61piomWbg4L5rmzvgiiXmJcBTbqsoBXT4ZPbaAM2ysGwKTbDCupA",
  "key9": "262MfVzFR1WehexUsWNkLdXDZa2KvDYEc6x2EzHEyhxwzantE56WdEp9JmhVmZ8xTnogLv2voLqAzwrcRCw38RSa",
  "key10": "4LJKeWJGn5vzwBRQZLfqBTL5HBhKgPGaqEdLsQxJ5b3pdP89gG5uW3r9kUbcYLknQpiqSeLrJYaZ1CHwmV7d4Tan",
  "key11": "361tniTFssZu3Tjqo8hCDiJDbHTLhyoR1jRGXqk25C1RuAdmuWCRacpRdaVN7tDwG8stoPZxrQMyR3cHso7QyWVB",
  "key12": "5NFiRZP7dhJyYoKnzdUAJtj4zfDrU2bpG9gtAHzzsX6HFw8DVLJXoGCXW8ARFazrBCAjRkMgQyYFgeWQD4zmFXHJ",
  "key13": "4jLSjmdBE7xfZG19d4mJRKwRBMXbu2bLU5CBmtF252CHNjD51CYRkLU4LQYfWzB1bQGXVM9pGMF6KDo5u9SP9Wbd",
  "key14": "5NRXfrzqbSwW4SMKvbVaEqkRN6zus873FCS2Ey9YFijHtA1rJAJkoTEJjAfgZ5E5bYb3z2wj9KLCZeSJVeYRoBjz",
  "key15": "3CVu3BKK9mkzDyQc5izKofrv76oqgoyu8kL583Jgn6MVL8FNnyMwKtwUKiKHrWNpmwUvVU88ER3UhaCNWCv1vUED",
  "key16": "3V62ZUMZd5A4cEbLUKwAz15ZoX1eP8DAaTfARuB8WFcWKcyVSLZLBREeeMj1uXLtK2Cheen8FfZaQKKEjXjvyNfx",
  "key17": "3TD5kkrYzj9Strp5rUd14WVagLj1enWp1GFTgiHgWA6MFDAph9rvRNMQygf1E1e52EiT9ZBpBuxUXgTTHN8bZm46",
  "key18": "2WzjTnoWJhw5EcE1qXTTLv694B6pyr2t5uzxGUSUhxYxu43p1tirQuYLnpL8QUPMhEAKhxKgGD9xoWAwnE5GeuMW",
  "key19": "5QLnBYHjDGb2XzSw4e7GrsGmKCsFJnKcj1tBuTfQ27KVCjFQogi49MNeNCybUt4JDHgVfSJcumB49XXvqkQtbg1r",
  "key20": "4B7uh5te4B3fsbppaPWd9pZ1JbS6g9AouUn5EHovLYkep23c6WhVCo3ffYwZkQSSJBjn1y1oA6WkE6R3qB8wiQV8",
  "key21": "bzLw4sXyD1QJGQiDahhaNQp7K81aoQNCDcSUsReS5vwViBLjUAnJK6yDt16otapRo35ShFGfrCTueJ5qgApiQ11",
  "key22": "3Vo6TcehjMndu1gQYHwJriUPUDQmMXb2FaNi5d6jLA2c5grj52iA2tKgyXEpKrAosrTjhpESeWM7EYFjx4RzRDe4",
  "key23": "49ov347HABvnWk91nLhMsUzPQiMJCQ4mCUvpx45yEHpNS1dRJeKgRcuyLDrinNfy2UAZLGSJgQutv2mv6sLVSPRj",
  "key24": "4fKjMX27jdKPbC1TyHaPcBbJJpep5RMAiELvbx5Pg5X8UF9kxa4b56itUY6NR5zD3jM6sfGSMgGf8FxgrrXwoSDG",
  "key25": "4zybLzm8fownxepDy8E4hTBtkdmgTVLovEa44a1VJYpUoGmDJznmJaQYeth4vYmndde8UUd4eRJmnf5QPQA8sQyB",
  "key26": "47QuzG5UfeNuQZhcpay88nnM7MrCHfvVZscFzUisqVSkbhKW48U3cxL2GqiupqcNfgG9778zwYEVj9FTCxuppW3U",
  "key27": "25MT6LQ1vASKLUydQJpGRt8VJb5xAw284v2srYkeNxAuxDXhnd4tJ47RGZR2p7G9QWFP1FUGxUaPiHg1HLhxDmDh",
  "key28": "2tYqyp9W9qCULf8n8pDHvqJnyZaPh2L3WTuuMDTVsp4cFA4w1hW5SPEJiFrQbhexVAMhC3FjSvwigdUZ6Hg1dSHY",
  "key29": "2f4DwLjFNBDXqZbUirLnPYi6aguoRZyrnmBaRJdeEN65ZAQgSb4XqaUxRTvDBJ3UQtEp4NKyZbKHNp7yuH9PncfY",
  "key30": "5kxtQojZ4gaWafZCQkHsTL7xGFFmqdSVGFRcM1zSAWh1iYFadbbp8Fw2U1dqNQMpmJyrEPYt5YJcqVyKrL4JJV8",
  "key31": "2KJD5eZ7U7DWLwLRaxLizN9XNpJUswCf3SxWWsq8Kgm2CBpmeHYkPPT5FmQFvZL1oqibFmW3AfcgzrhAEWLKphEF",
  "key32": "47JE2EDKTHnXhbvFW4xuaYacHVEW8zjK4jvsoKcchCAvwxioem2JfrBwDG3AGmkhJeNhdQvKvXhzm6GmhmGCgtkD",
  "key33": "46yMmxrHYDV4CbDqqgF1Pb94hb2CkArXGX8r56sD9JNDU51SBmxW5aPFX1sZqQJ7nZrHKZE1NKLDv5KVygQdche4",
  "key34": "498dTyvd4CgDzF2hEgqJfx5wubqqnXa4ZqX12mixauLP4R6yizo8b8TX99fRSkgJRivTbzkbQeCXXvcLSkJFcUfo",
  "key35": "3xjrdMWgggx14ongzAoSN4XD5K3cGbzc3DKYrBpvZ31hdERWntnmkQSU9jmYNXKXBGQzixtqij3A4hT3w4tJSm6d"
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
