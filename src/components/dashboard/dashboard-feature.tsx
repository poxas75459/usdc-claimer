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
    "2fipqw1uB3fBugsNTSWGNRRLAnn8ufd6C7SnJCmuNwFiwLZAztDACQCiJHRGk2YVXwmNervfKKciGxmPFTp8jr4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZ7iGrFEBGUBGRjGxVR5dp3t4zFxZ8KgoVLRfgXuJ8NFq31tuaBF4EcvmaRNP9LRnVxsXcWvk2S5CSQn9QYa7jy",
  "key1": "5eJHwRErdLCbJoi1ZCxVeY2vsGK8Yvv7jex4eKE59YiWhxh8m85KPbigBija2FoCyy7xwwBTx3m1cedPeHErx7y6",
  "key2": "4YXA5XXPMw8sxNLmvDovzpQfno6adQNgmxgh1yY7s2MPYwmrV784sjrJpUNWwPQcmQjnmXky1LVi7b8WF6aXmLdu",
  "key3": "3gizTifVGHrF5hvhehwtYXyrYgupspXfTUJNqJeL1bYg31ViAAggTLSjc7EaU8g2FQyBEE4wTxyDzNUfUpDB182v",
  "key4": "57YbPhyqwRrYe1xACqDrpQaNwmN1Coks9J3vrdosFZgxboJtofYuW2rCMeoLeBKCqxecyMdx1HThS8bxKvPT6qVg",
  "key5": "61BFTBPVp1Ei351yGQan6zqVWwtumNiDKssKFH87hUk1fYnvBUX6CGnLiH7hcepiVgKVaxV1n1GQuBeCPX4EmRBU",
  "key6": "2zo6TwgjHQ2wt6a6W87FHntBVu5Us6yBkUmDVGi5ffohpoTzBfR3di43oBcuMBhY3hijYVWBysUoC1vDWCn8hAYn",
  "key7": "DWPdA4AZ6kyYbZ1mZiYihks5yJ6Lp2YeFgYSqoQbiYYuKFNCophh6Mh1GTGDX7Gb9H1t6BS6J4Ricgh4DQ14iwA",
  "key8": "4youjdQ8uD4GMxwsitWtsadhQKHK1ZHxgSUKJ5suK5KFC8p6oaFusTabRGkFcU33LCh3UWsQx2Ro38zADDhGzHsa",
  "key9": "4aMNtWEMSnX23ENrTWFUr7JzWheeAayxKotyDsYWXrXK7BEPJ62k77zbQ4s2tzLEp24pNSPtcLhzYbQKET4sRL64",
  "key10": "3UPY2brevyXATp67KGiJRZ3giMX4WKNQyr63pQsMiRmQsUb6D1Gy7FxDYkovyvs11VLgHf3xzWNdvcV59Z3dg3BM",
  "key11": "5o9UZqcQBRq5JVeg3MfQHqi2efwKxQRRePvkxNniuCqexq11cgw57r679v5zVqmtC8TDsRsEjLtkh2U1bmX42ZLS",
  "key12": "5pSbTNaGkHjZ5pwUAaMtYRgXRNbukSMz6k2dyfajE8KLF2YAhZwtYGerTuhUtMUBM9Q5vWTmkJC83xkb4RfLfB25",
  "key13": "5YXqoqkfaxNcNp1n8AWp4SvwV7Nz1NYZhLn2jBXzC4zb2XNewMH4Z7QPFh8uRThSEoNyDhiqDbGNXogXHe1rfpA2",
  "key14": "Ry7eF7YgVhkzreez1eEnLmyLCE98AL8jR1gNdzo1cKe6c3bjWoaRc3Eb5rPTS92Au7ZR59b5VzC6mS4G8fn6KxU",
  "key15": "4gMUJRZ1dczjzX2QNsVmefuPi1Yor9NaXgraQdngwJJveaduWQ8HdJdzwY5P4jJbhE79c7xECNET5Z6kd1DoY1hy",
  "key16": "5JTvS6Fdiq15syzWvn4TW2GG1cee9VAJxyzc43vpz3ZJYVa3niYH2XGvK62L4fsp3RLNAuibTUcMzCZ8J3ogibEq",
  "key17": "4ZvyE9S8JkraQi4jvueMY7msbP2BxWVnjBV6YvV7KxPVcKBbd2dHF3VRhb7PigXLHFKeNYwQuU6KmSKkXvZpqAH",
  "key18": "2ZZWWqm7vQ4qCjYUJY8nM78nyQjBeN1kQGyDFrg7uixAccudX3wHatN3Nbq1fNdWGAST5rwyRi2dDmffTqvcJxa3",
  "key19": "5RNRtRDbn8UuYkVU3xEi6ccuxeFMwXWenM4VB33A7eByJnf3R9TV6WuBAH1wM5SiyBjSMisKmMDoc8PWbkmVy4hC",
  "key20": "Hfv5JUCtNRF9WJbkMbJRnGkhLXpZk3g1ikzNRfQzssTeqYzc6pooqgwExyfBM8TKEhVZbKrkWMbit8keGFm88F7",
  "key21": "5KbKw9GiL24G9kfM7WzGWXk94GpG3XTP4n24XprgCqLEAu8rWTjhzf68qza5Bb6fh6KhAFxJRtM1kfnE2JHebmd3",
  "key22": "vM6iJd6nH5ZnYBFVbkT1E7ghHuJuvuvD53JLBXXbqY9tEB8hKoqcbvBbzZR8HrPzhyDhbTiYf1sGB7TYeeMN7Ro",
  "key23": "34FAfngtdeCnDcHTWibzBk1jGMCVHECMpzni55wuMBR22Q2wrvVo36gs2RQQarWMwFx5fgC65tPBFRAycVH8HQMH",
  "key24": "56vAhQH1q2ZAoNpvRqyCW8ZwkPcBUerszXELFebDHdKW5zmSQhbt3U1w75qJ33kWQvPV5b5mfFFPnaa5vShbqdYx",
  "key25": "C6AEtJZsxXuZEUCAanzBduVqTvQCSx1tw6p1tgzn6zi9AAjdp2eFpY1wcWd8NFChtgzaG3HL6gaeU3pM88bQKtX",
  "key26": "Loh56oRhwQB5U98rSg2wqX41hbHoo452NYq8jJvuyeebfqTNZZ3ugT7BhhKmhvyVSan8hPfefKgeyPE1cRi2zLG",
  "key27": "j3XgXcFJqrgsLxsiVFS2zxqj5SYcJmgeHu2UbHbwiPDMvyg816DD7eWdZ1AHQpSRcy1Bxi75UuvkdNHCZonMSPr",
  "key28": "3kW5viD7dKAWdCizEzPcW4gSWVCWpWUGmdAWot2YGb27E3EFjwafh8VAhFwNfy6LuWRAx2z1kyRmvRpWuGMULee4",
  "key29": "33h6S5Z8jnSzJdZpTVKpU3NCkkTuCNAQANtfaMMfJkPjP8GNvPUY5Dt5aus8fi3fY942DnCfdZmwqT3cgBN7SQhv",
  "key30": "2jCgrTFkDjLpPAWSt1gBEWzVb9qaSFFHi9GKpsALLF3PPWzoChczuqSJXDQyToRQFCwWJtGJfBJmFhmMsYKuCLEn",
  "key31": "2o5QZEedLU8soPgAemew4USzTb5MEFewAwpfUktshpmHjsxaEuEuzLgS4i5wJ87c9imon5Kh1SSLsU5npVme87tQ",
  "key32": "JjCBbJfnM9hU82ZsG5DTvQbBUhGWHKz42Vz9KBJQqvhMmDBWjpVkKqKbCcdMGNgzzXLzvTVj4WBwiEXT2MbULXb",
  "key33": "2fbNGMZC3epEYkVgXJGqApyAZAkGZqDS6Q4MTJUkUmxT8mmMsxKyNuNdF8KGcvKDbRpskiM1WkLp89Vg2dT2ToxM",
  "key34": "3oZgs8kVBQ3NmcQihRtUFgVNRrVNTW3WBKsQFPxW5P3nCMFBoTKnHLYNW7xMYiuv9Mwr7J4NVbdwAQhpUuUXwWTq",
  "key35": "4PWyWD49C8Zo9Hiz8AkGGN8am6t2cvDeksGXQ6B2nipbGMoarhcYAt7otmj3E16GiMQt46qaiC6Co7xCPdRQTLdE",
  "key36": "tKVdPN9GX2Ehae9CYCTd8r3v5nwJvmV2e62oTfKx9Th6pzjSAHe2EqquydP9UrpGqA3wnECs68zjLmwDco4GAdX",
  "key37": "5B3zpxeZgShj9Dr9En2QvdughJGM1kpB4yRom9S5xr3PZsBZgNEzEbW996ZweprteJkVfFYjWa6WwcQDYPQ2Aqj",
  "key38": "2Z3uZLsh66eqFZaoDHKCBuw419dT74bMDe2ohiSZRRdbtpASDGRawfvVYPDxQCJZgdWDLsCFRi6nprRru5aRZrTQ",
  "key39": "3mUuTovdTMn78DegtoHPFyoZdJ9gkLV9CPowg3Yp2oaHNF5M2a3xVwdjawt3HyfiacLV4EjctmRprqR9iEBh4fN2",
  "key40": "21ziaS5t7hgty5bNF6GX5Nupn471nPGSnyYYcBCP6n75cX6VsxCNsNc4NuRrF4vWdLBAHCxfkL8VJVK1nyaE4tam"
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
