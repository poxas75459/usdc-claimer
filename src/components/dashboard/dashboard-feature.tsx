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
    "4B8KcopVim9Tw7d4YSTy8WyF53pq33UqHs1iLq9jv3BfWv9tKYkCmS8yzYwTRVQ5kR8JjckoY84pKUGSNH28Z4EX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzCETVS71wtXmMc9ximLCwHybRPVDFtTZtfKmQ3CnfLMXkGd2pW61j8Vrqfj4TujNJQHqbeYkUot6oB1C1zCxHB",
  "key1": "4hemrYtBBm55QboNztyGdUZuYgu4EvvBV4Vust333Uipj3kANivayLHukfa3TBNxq1ecJbF2c4FwMi7sdVmoKjLg",
  "key2": "56xb2xSDX7tP1mEsMJgjtdXRXshucRBa8pjYxokZNoTXW4iy7AspNZ9w2xu9zqRNoo9LrtGmQmQ8m8Fv4c8DZ4ZA",
  "key3": "Npe4D2uFZ6yS9gb4D2m4NhzGq9RDGVind11pFx3gwtP5TQZchNiJnjuUz5Uz8nzFsiuRNdwRwkkixxEfp6MwpJM",
  "key4": "34KaJL8e3LfXe4tiWV6nj6R2K8zJ2RmKGRc81Lo9Rk5gWPCrU6XiHsa7PDYbkKtkBgqfkY7AB9fBdEg4eUk2YeYy",
  "key5": "5b26y6uZmcNts1BSAy3VAd8ruG4ckCNBEHhYDGrDUuxYMdoPkgpa8udvW8Fr11Dcp1mavNZzEdn1tzhHtHkKXPrK",
  "key6": "4tve348es8cDS6wCQ17mWaAFxzgzRRY96ghY9HJPZJVYAEeBdB6yDHJXKTR2gfJsw4JoAG87Sgf1RecWBuoaUvdg",
  "key7": "5ouRf1bMLDX6wAYVQ5scAVrFqHEeoj4aSk4DqAV5NK3BDzcfiwfm1d3joY5yV1RijxpZgTreuwcKU9HJLXgC4JUE",
  "key8": "2hUHaSGV2Xd24uaoDSwrJ5eXdq4LWqJQCQWc6wCWThhvxzpWcuNvX5W3TrTyMZcSeRvFJfaPYDj5JuHZWRLWVFM",
  "key9": "qJbWW8F5FeanhW1iTZhVzXCZiMwQDs1cFjv3AzFtFkkG717eBbHRXHZAseusk5TiuGAJmB5e8eH4BUZ697hRqMy",
  "key10": "sUcZhL6XSB5aF3HLhf9eMNnJsSVUZwyf7n6emLwfkEAAenaXq5hjWapaURWsqt6QFBZMDLEbo8nWNtEywGG9ibc",
  "key11": "3evbTtu5jvQxr3M1ek8EYAwCCWBkDgJjn2wuUKy9nVrjHNZqUACPbzGsPqXcw9xhjDBcNxP2jJatCZBMPP9pzF6e",
  "key12": "4LYfwpHP1zJ4nUfXtfsFMvKbddc4hBGjbYg45kEJo2weukDwppMnpw2MxAhHoAJPc3iJ4Sf2SJ5uFbYjUejKM5yi",
  "key13": "5LGAMPCqjBc3xuvCfyRRnfuVETn4EFHz8AdfFhxjN1NDsjC7XfQ5cUuytkDvpdJiiWbS83QoWXVrH9RJFXTmZT74",
  "key14": "2MGww3vuz1FNTtFUJVEguqVLKBHFv9VAKqYokBxT3rZfEjiVQYyGmaXHw3LbRteAEg9DVCTFQECsYDUqaE8czBHf",
  "key15": "4CGneohQSUM25gEPGe8FHLaXLgVGkTVP8ap5vtv8GH1R6wqGAQUcQsph3pX6k4ZHFQB3qdaE1h6jW3qwo6z9HUn8",
  "key16": "46gBni2Mt5H6k4itsh3t1CpnbD5rPg3YFWYAjA1VZfQpPGrrLBvwAg62Sn2Nv482PeNtnUFMPcVAdwKHyxoVdase",
  "key17": "4Jkt5Ay8jJ9oR7REddDzakWH66ceSzjYM5bxAj9ZUiMV7SVVPSUe8zjim8RV4NZoMKdxWA2HotQfSjd7SCZaDAoW",
  "key18": "5qiSXXM1CH4w4EuRZ52iaRVcyTrdR9RQTAB561SRLABQq6WEkyzE39L8iapuJQRpseTjRw95U6njHPi9kGYhLYJV",
  "key19": "4SGgoHtVmxsgamnqDykM7P6MVS4D1T4z5EUdLurUFqjUPLWbzTbGdGCPA2NJAvGvz8rxN2Uic4tuAz2FVcTFGBMG",
  "key20": "Ymvcc3kPHwjHuVSPBkqEYQTBH6VxvNajU8UEZn2zebbCXwtvEAi8udpcL6ghb4RLKowhduDrf5amq4xVL8x9NKm",
  "key21": "62D4jJ17EjtL63u3dpB2tDBUnNveFh18K1f115jh5Gk4YA1vzEiUBGhPxGoGAHVmrFVawMovgCqwRfmfzkoS49BM",
  "key22": "56sXWBakLuobk4GVYu2sxyp1C27R9c5DrvQPVdmmHz5tgqfKEF6fddwqkFKdmfgrqtLxh8x62oySH9wJfdjhzasD",
  "key23": "2StNeyMFbf8rgPZ3dARhVht57HDK1Kye5JwrvdXMvpFbe7fk5QrBtyWicEfpU9SEQt8LJjrmAcgfjDeH3JD7gELb",
  "key24": "61XuqKryMKtqv3BfkxMu91AkqX9xurr2UvuHiQLmxoTuD8AShyEmPkVkqgKsMp7X9h5fuHjufg5RW2fsH1h8VVWt",
  "key25": "4geZhV48z4FpVaKLpn4WgpH9BpwMoqPancfDSYKmVXjxnbFFwU6jtiwQAacgxRBdES7fbN77BMvGYqNifTzYAw35",
  "key26": "4amsUumz3ZMzaev3t3SB2k59jRTG3ahirE1uKdNgvFdqBjqBEGMMTnJMq9KKHgG1FrHn4HoGYAW96byTwZdFWkne",
  "key27": "4a6fbPW4BZvht3FbdDuATJWL2W5jPXUhkqDeyHRkbzQ57kG2vCTxz3bK9mEv49SfRqHBwTKajdFN9h5ccApDFEf9",
  "key28": "2prJZC1nWN9M9mRyx2g5LS82EL59G6Mmq5JhYE4VYfhPDjSwbBk5B3WQ9dtBzdeWBoGAewFzESPsZYH893CYxwAi",
  "key29": "4xRrX8H9oKTmVSkrRFF2gnD52CFCLjiJVavAjEgeXtzy8pT6mjX4L9ygDDn95UF5gDpo8i2ypHi94EbTEnr1WLbH",
  "key30": "YKSJTVX93BxUknr8oQH7tr5MrpJYLDfoZ7xUMBh5iFaEntkd78VJSc8q3GwCV6GVvT5NGmgeBhwpPMrXqxs1n8s",
  "key31": "2xPxCi82y5jP2yLKZJr7DZZB4v15YAJeQ7ngxL55WdapaGxfr1ykJ8iz6NaYKdqTZafFQJxbRB23J2ph4KehdKuR",
  "key32": "ztASUQyCy4exWAkuMLtxjxpxmm8BNcvmmFXtBQr28noqqkrVg3q4YVLawNbPZfPkPrzbdvLksYja95RbYVxwFoR",
  "key33": "3rLSq2uGeDc3PJw38KiSuSpNQLUd7XhjaJA6LNNA3n8TkyWHQWkrpcN1FWKwUh2h8aZA3BsanKqAUEWQNhW1wsHi",
  "key34": "4ntKXBhK3qWjhCMj1Cjr8V1VJJdsituonoHWPtC2W7FMBnWDAEF9yWJXRjBWcaUhJS7hGfvk9sUaFiDaHJWd8zaB",
  "key35": "298XM7JTijmusrfnfsm1tt5Ud2gqZwpSn2J4rThdZoWp3aB7AEzYUSK1YfxcHT5bkQVAuaZf42aok2uubLCoefBh",
  "key36": "wKWnVMDDLQGNN8umdm6Rpbb85Wdb1ajg6i8ZzyYogD4m7W2CQ1j5WwQvpxPrzAhViPytjFQs7f9kjdzi24v73Tm",
  "key37": "5MqJqsY2ga7a4itu1otRwzzvwbRHY3gMD1hRBUFxB6MGnAqSgriz172ZToEmJYLugMy4FzkkLz9w2p1Z5qVbCxwJ",
  "key38": "3vjcuohtUwzMH9CuAuvQ8V7Fj5WBWPBQvHtU2MEmeorNkpj27wQMWEssAEbf3wi9kT1CKS3bo6gH6woDr7n1Wd2h",
  "key39": "4vB9x3ZKoKYQmnBQiHZDyjfjezfAf3s2et7NQt9x3rzZjek2G4EdqKJf6o39SFxxr9rpdMjgipFNjppNuCrQhuyT",
  "key40": "31UcEYjxBATS5RovZQLo4jnszwdaTAnf9z6wsGHn3CXvtxoTKmwBWMAAC9XdY38GgcLAL3DFsjCy7S34mMpuUhLH",
  "key41": "4MkNM9zyb7CCK4qApnZQ8LZ8cyA4DfYpYUGmNYuZ4XzQQk7rB8wr8X3mB96xLDg51dygHZkfMhSzRAXCcL9Dakst",
  "key42": "idYC5j15H76ZBXjz3WHyGmHYYQtYgPZ54qwD7KsEonbHgqmKDNBbpxR2hwyVXddXHQPZVgh6XTHfZyhdQAqGEQr",
  "key43": "2yv52v787GA592yX1Gk8QE1dJAtwGZpJsJfd2S5XuWFu8UwgoqJiLwUMKSqvNTdNAtiGFmNxMXi21Ks5SrZJoeCP",
  "key44": "238mbEaQzBAa4tXb9nnYmowXLd6a7Jo9VuZdHy2oQWWHHHA34tk4Djo2ohfgqxuY3TvRoWhH5S8qDjrGDxjUv5pt",
  "key45": "ah2iLNFggSnPJNLisd2nx63QqSS5kDausM5v1vbvFv1qRVZ4cgo4iuKVpps6mFcnF55bzDTo1PYhCn6NAkRZdKn",
  "key46": "4imTHYTjbCaLGN577q9sepQNK23TtyckHsZjSRMNXPxbYkyo6NoVqgXhN7f9Wyy7AUpKEPAxdpSeFs1VzUyNRVy4",
  "key47": "Gb7xpRSV9dDCJjM1uHe6at4iGeq6kx55Ndyc8vNwMJD5aDQadJmmV7HwWHRsiqnxG9TAw6xi5bGqWUxq1Ew61T7",
  "key48": "2AGwfKbRE9XaNKo46Yv4rViiFGzzXwUyBJz2aRSQKP2qCWv97ghnTmLtMfwXD6ZTBZ4YSgtJd3qiz6tQQEvrqggx"
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
