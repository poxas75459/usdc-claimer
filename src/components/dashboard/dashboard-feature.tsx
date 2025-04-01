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
    "5UN52bPxD479gecM2v2kVtDURCcP4tq8xHCiW5XP8BtkxFJZ5YD1vFixGjZhC8bKhDrHpBw6Fey9MpGaDiy9rjtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573bf8eubLV5fxQAcAnciGDuiGDy57ZfVZQZLEXuj32Dc6XJH8RScihcMagG9AbmAm7HtSCkPKmYQdc6MS4QGAfg",
  "key1": "566c64K7uzgRgZE8ygRR3RWTuaPoQHDbSVVNY9G63foQrAbUk1ySH1r6q9ZuqcRwGyDqCASu5a9emGbttMyiuUcu",
  "key2": "274LQ3EfBjokpSpiXvnnrvMs6qbakhFnBDWKAqkBkzkFFhh59LRaGXGKqpvC6UiDuFeTsXy1nk1dHfzwBgxx79A7",
  "key3": "2mvMZ235ACqPUtZeBW8AH9aGbHoDydXeqkp2qHGZirnJucGspAwHwnrPWrbUftNgaVvtQmEepNeRLm7zh4Vae42r",
  "key4": "24fXJfYTULMWEXbsnFQuHSaKaaxvd7XeUpwav8akRM6yHiToKBSkq9F68wCa8ktUjNRcUS6sx3sndbzX8RqLrYeZ",
  "key5": "2qK2tbrhDsjYnxrUarx9AfyYRZByu89zTjt2enozhAXKdqddobrawcENARt5VCNFEUHSXnnhpFr5p66nrnRQv59a",
  "key6": "W2y2LKrygsZmvSTsFBXuJQsD4kkWf7Muowm2uFb5HP6JtQQPG8oNBEHWSqQ91G5i7axK86B5Z8aVYMixj66cZXk",
  "key7": "5Nwb5yo2WufRw4LP9t3VngQhTtnaG1S3ZNEPgb6wxWZxAGK6C4v3kw8qiXPP6QXoCBQwgjJMLeqbJL7T5r9Y1TrB",
  "key8": "5BjuMV1Q18Tm37taoDP9mGCNqfc9NvQ1yh2s5XYLGVBxnpH28gkgcDhfiVqhdA6KUKLUiWK4wQt6hf1guDP5hitU",
  "key9": "44DJH7sNmRxXUQGpTPYfau57MYG3sq66aadY9ecGDsWpCphaZxgEciJEuiJF2gDcoXDm9codRsDZ7MCpAL6WkDWD",
  "key10": "DxPrM8iiqBH2aMu7g4nVMhxxkx3jfzAC5FKKXwpUjmYtSgK5XBCdPh9huY3ByKFEPKPdqPHZwLFsYtQe1M4gNoz",
  "key11": "33dPDUyivV7hwVpAmU3GKriy9F6shivYdc93Z5LeSWacNvzAWPVsgMthzme6Xg1X998coJ8iH2S2UjkbtfeSuEqZ",
  "key12": "4LC3QjEeqex1HjkV92esbUwYw7BkNP2Ygy2c9trBK8ndtmN4Xp4szTsHzASi3VZDHW5afGqswS7tGEkYS42s5JfQ",
  "key13": "65nVzqksgf4w4GoMV8jPV88WRDAHZ1ghypsJFz1KyNPyVB81kgrFtBKRnL7EPR3GhAvXjJEEjsEddVdAEDF41Dwr",
  "key14": "2caRYTcaNL3n4ApsNFoggEY9L6foFANgmYYhrjzGy5PGPs5Gqx4rxtrnZn5g1QjAaNtN24bZGxTbT8vTDKvWoBZ4",
  "key15": "G9B6zjqq4idDvoEhZfFbaZiKtgf62TbZHKtYcxWjBSDc5m7eRB6egwP1HwV7XckjwR3MqqjikxnER8zEt7MSeAZ",
  "key16": "5ewDdvPAyb729HPBWt925rHAnjVPGoKYLynjfsdB63ji79Ui3FHcPpKH79csqAnmiMjmFCz3D1LqzqqaDBi8N5wJ",
  "key17": "5M6H5LKthF8nmsEAQ5g7F6sX3Ta1rosQFMupmbn5pg5W5KPBqfBftDkJ27VB8TX9mY1jBa4uSA9u7moKwyCWdv6M",
  "key18": "2iKP9xxaW6mZd1Rx2k1ay2gfgwUueHqbdfmvaiiFhB5W9iuDrPnB4o35uUyUyCA4eUEHaU3vKWTNvxzxE5TwuLSe",
  "key19": "4J5HdUkHcjxa5frGCmzZraTHVACS17PuQwFfBEEviZtey9zNXh8me9TEKASuLo5a3mNx16kqSsuYyyeCA1wzx68t",
  "key20": "57fZDFivVBQds7jvxmXA3UL4QWXA7K9X64gTHsk4EgvePVLDzm2m7RyTByPD7MjLC8mWW8YhYnzASrf6Ken7kH1F",
  "key21": "2uaPHTzZP7aPHhubmCobEskbeAKUfwFh8pepqBEkcj7D79JLBNXjeAtwKf1rAPm5Tn8coa5VaDjXaDndo9oonkZ1",
  "key22": "5XrFdrBgSU4UjCuqsxrBJfoETD7XTNnzjbXVWQFVJAr8J8Q8sJkg15wonoDiVGGL6eZPpxLAteTUi8fQfwmoSELz",
  "key23": "4rLFEGkDmxT7WybZohbzSDM2DGG551NSmdXrZmC1sqMLkRqYsJArbRDvVXvSu6bUxKb85gBxrtRZHNcPQJvzgccH",
  "key24": "4J8qgh4VZEQTaNLZTkLx7QaTrvPVTarPjb6jKtA3w4MQDhxN1Z2dC52CvcxUNyeF6Tt7MztsLTiYYbxUCBv84yp4",
  "key25": "27JWSwefHeKXwYPSYxpnccder3ozhf7sb3VigqnNBGG85fDMbTg9e8B6MfjXnbbVQ3CgaBuHcSoHzPUPB4jRVsWh",
  "key26": "4uajroQc4MnRHSHqcJG9Qh9NixDiG8my4f6w6ZSQQHFiJVsXSKGh6eygZKBo5ArQSc8DSh59LBoC4RdKwY3HBoS7",
  "key27": "565eaJQcpdSCt3U4VuRuzUcu6jUcXnyoQCrFx7U6gjRi2D5QBhhmt6eXumLTzeordneogbkina76Pq8CmFg5sAZZ",
  "key28": "2g8oKvWhQ99apUGbGQ7uBMg9DWci6L9jVUevvj9zbGKDppt9ojHZNEusuzvGYWAdzyrZ24BfxXUJLutUMr3nBJi",
  "key29": "2tEvoHmpuZTEobjEk2Nc2EUe3YDghb73Jpg7qZVKe1E73FzJ6gRwXEhsCi9fQfpRdA6WQji62fsBo83MngMcFwrb",
  "key30": "3tipK91ZqqMSK6SnoiFkU2Sgoqbh8hdDCu72GwYpxWHx5orEZbTVfta52QndnpXvLf1wn3rFnVkKf4U31ZD6XkdL",
  "key31": "5Gp33mh2CqrgmhSSXdGLrq4nNUSEBJxvL85XZDpP2i2npeNGEAUMp6dB4ZqWntFhv55gAHqgxrNjfsgi1zjeMi7G",
  "key32": "J8tU1u7tYWADFiYN3YfsLrYYuKxJWisJnw42fKAVWApaucorL4QmPnBLNeWKmHS2b9nmcRJJu1GkoL1wCtieZTW",
  "key33": "4LMbLGL9xKqCZd9Y7dTSoiEW3Nax2g3Nap6xBi1eFYvQWCpyxGNhQmNUF99HpWxSkbRf9v7u138HZeSWeEF1UyBY",
  "key34": "2Uz5syLBK7yzVcX7F2uNq5cjWjUg6udCeECSXZ5jFuwuuWeihv1vdNQfsqZDHF4CZyCWTKKWoEPSm86wDnZMyd1S",
  "key35": "4NFSnrWjerHKBuUrvMAy8y5ArT8PkyVvoetDYPiNEVf3VscyvkZw825P7jN6aBh7AWhLgaDyQSrM6yLNRthbvY67",
  "key36": "4vZ3LXxGActmc1S6ZmX8U3Cjh7ZmshNRiNURSmPdwmJurCRWXuo5H32wCLe8vTWCZkGJGD1k1Wt6W4W7KK9Wubcp",
  "key37": "4Y1tengsyMX9EHUuWueBnoQc2D4GK73iTegpuo72GNNadWTbGqeU5jPqvePUFRf85HcLcUBULPaHahkAuGHiV8dR",
  "key38": "tpvKYtE7cXM7E1k2wUMjc1nXH7iaZYCL6fxYLY3dNU9FXQQ5zZZMWq3RPseqXUmGQnN75jNXJ5obEFrn77XDiz5"
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
