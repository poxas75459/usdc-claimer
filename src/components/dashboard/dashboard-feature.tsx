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
    "4P94ECVE19eDenVCJqz7NZU8N3KxXJsX297QJa5xuuVp9BJx7VcCYnn8aP1DLsBBr2V8Xt1ANu3bCtykPbfckP5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58i7Kjp8SbMXQbtvmW6Ez7TGBWpYPNy35nAmtAtQW6UFb66kYBmKsoyvjg3PsJ3Wyz2k7NUajGKzvghFkUBsxkNd",
  "key1": "66UoWLjeGoB8WbtEUysU2WpKRUf5duFDK7yeJyKitvN6jFCnzF9FVku1Y4vtHAM7JkXywqibHw9Rzq31W7TYpjEW",
  "key2": "2RPnwNcBg59zDXvX44bVRx1DF3SaLXrgDUe9K7iMBoHPhetKumzfXCKcpYARSPuPjc3Fhht1r4ySxDv1y5TMZBqM",
  "key3": "3Jmju5hQ86gBMjWqXMG6Ro8VffP1dCyCCLKoHnNXq9KZnpysVda8RLuDDSVwJRojzDVjT2oKr9Qe9SJp6fvhk21t",
  "key4": "3UFsZh6ZQHhFJWsj1e5SFXdzdB5pXGgCWHPJUzFQB2EiTsLL4Dhvk5ibRji6GwDqfYtJ63h7ULsTfJe6MfaxhTyq",
  "key5": "2DQoaDhev2ePLoWVEEo7NDbcbFqAme7y2TDVsp4kPCZUbyQzoa5kGSfsHwqMyndaWuWcwQYMQQUuDu6zvL3QD6LU",
  "key6": "DQPD9JhPa4LNqwsTx4AW1PDGL1Ymz1dMEpWYHa2rbo6B2sBDMiqRt1wnCmdneV6L3WUGur1f7dUYudYrDDp6cbY",
  "key7": "gyZcJteKMzmeEi2BBhaNgSZ8Ms2SxkqUWBkbHqidqJ4sMm7bgKoHq9AVtSsKkCgy9yymWJXpf1MEdbsKK5GGSRu",
  "key8": "uSNthhtpTNpwutr5pQckRoMtUEacX7ZLFfpvL5DjHyVwZBZ5i24xZeejTYYfQFCEPuvhCELdA2zxJUX1ggchmpg",
  "key9": "2otBdC9vnBGtRvYgDyLBZuu8e6AF9bAZt8YPm16gWTsZUNVbva3bFp6Rro2dTRnyPY2fbiqxUSmZpC7JTWBQVhCk",
  "key10": "2wFuSSMK2KLMiFc6abFx77FJigbNZh73ezxEpA5mRhrEE2AxSChc7KgVPueCMsYEYXXan29VjL6WvUqG6vk9CYEQ",
  "key11": "5z73Z5PbUXuujLU97btgN4S4tyB4suVJ7QyHUL11wA5vUUYVJsfQm7LfrzRKTqcu6Tv8T2tLQWRVHoQNpQRfhn55",
  "key12": "4guYf94uZEMPmDsqtN5Fq8MZBFfpWE414PjPcRcBvBDRcJfJm8bvkjvmLJgHbvzN28bLXb7jijrNrhSfmGLb2uUq",
  "key13": "3Dj8PtsLhEp49NRxrgE4b4K4nbfVktfusaa4LiGML7cv6o7CgVoEQox57LS2sFh5atCN2DLNAY6QZkSwccLxMDWf",
  "key14": "3TW2xwpgDi4p66deJDEmiAS9MXktjWPu1ZH4GFXPEukVRfpaJqZXLVTz6jpYdhzoURYvwgvCkCePi3WRGdfLBqMF",
  "key15": "bKt7SLvRQdMjGTqdMBWvugoPtHBHkJowe9xpPE3vtAYqz4RhJfYfwbrHVgTP9zBLEFcPxvYt4ZpRFA6M9R8MWiP",
  "key16": "5S6wcp5TqQqjCkJhGNwtMBaufnTomb6rXztVsMjohP69EqxVMHvKn1vhM1qX9qq5oh1WRrDnbKHD2SxZnGpcNhX6",
  "key17": "S5jC9ghfBeh3ZmcUbZ9Qd1c2YdtFemeL2CAWQtHtDiiKSMjCuyYAMazsK1hB1wwPEVZXR9BZEaenFs7bctXB7FR",
  "key18": "4WTxV6KbnJCeRbcLGTiU33eCKZ8J9qorN7dcSRwhcyBLjMP2FggxdEkTUeXDZoDB3R3tuteYdZrhFju47nu8qA7b",
  "key19": "4MhphRB7Jaj8P4JSJueERk73JrNyC6d9m9SbXXTWYkfM5miFn4wGouzRP4K5ktL89g5gM5YgyUjAVZFGBu2PcefG",
  "key20": "2uiDqjYefwb3rf5datttmABw8Y4Uj2fyvc7VUd7455LEaEP5iGtsaY1j2xa77EuhMcoi5SL2g46DLBx7vXE1ZXqd",
  "key21": "3GTTGwkP76FKhoqFsVAyfwtNvXs9m55Tb174jywZ8EHWpkjmPMu4ekSoe1T8P7fBqB6FLPfViEHdvkaaosJRsv52",
  "key22": "31dvsoMRocK1jBV52MpJ5dUKMFofftSm7iHZ62qTzvmdb6A78Hg1KYyjHsnqHKAJxRtPTcZ5ePv1cmUtvW6dZrP6",
  "key23": "5HbxaneUhspVkbzoQbMd4qtH5aRnhuuDxC7Y6HjS5QRFmWVFrh1fJUnYwKbixe4ZfWy9E7dxMJswdv4USDuVWrxz",
  "key24": "4Rf9sdb8gdDzy38Em5XevN9TSNtaETxoKcMLMkYhcfYPnXMRPfFjDWJBFmgUCY6uCUedZrmnQJsq15QxaE8QxwL8",
  "key25": "4sii26oWWpLC5xjNdNnpkTerpa9i1Nr2hXZHpWuhwVYfhWTzSa4Dzd9YBuPVvPj9bH1GMgq6QYMU3Jy6f7KmwNqQ",
  "key26": "45RQJuvojcskjENWi8VpjLopv3W4ybWtg9fmnuaWAyiwSd8SXDVpD2A9sfAcFmtA6YnwiiF8FrssFC1aMyPXBRxg",
  "key27": "5782rUW5GizyqjeTbAS8zXf5y4EneBaSajcAbEgLJKyseDDW4WTY2j2fnaUnuocX6DAxqyQWZWhW6ud64L3bUbL5",
  "key28": "5gjShubQC3uHhXEjxHqvc3HT2xp2Nm7hHqSYiKFYnibpHUZ4fRMtdUbhXAEiPnqYRbb9AS41KEgRhoLep5Nj7uP6",
  "key29": "4RZmUgqhZsfXvrHMqn1BGtdhhoTeEEV7qWBb7KnXfcafKNJ8bZztTcEtCFAkDEsmMPcyg9RudyxgezuiQvqPG8QG",
  "key30": "36pvp6ENJBizeMuTkkRT8EJM2x9FGxB2S6VjZbFm2ouVYqQYYbuojUXGTGGBD8g8k5guLTjGZReogrw7TNEyeFwA",
  "key31": "29w36QprBT6RA1T3x4pYZ1PcCtUtf6CcKr2ETWaz6B8FmR77ibNakUmfXhzBnB4XbCfGX8XeszZ1Dn814bztVHS8",
  "key32": "5JGvqLQ8Zq54ddSqiVLwSB1RPBAP5TgKEBPFrojBYCAUNALSHaVwQGykzMGPTxWbE2sARaE9ZExKeaJsi5NbBbFH",
  "key33": "5dYJTZdhsrhfeMRw2uZbBCktvcVBw5Htbi93ezn5BJVmy5vNYdKDtnpVSeehQUhoYSyc4aWYjRwfaU2VuQ9dy2Tt",
  "key34": "2ceZrjfAbs3qQofWtN2j8QgVJtD5PRJzgLeoowkQHnWdw25AwoDoYo5XXjEtD335uosRgDJHqMttJt6Eft688VWH",
  "key35": "4ajwW3XEXJb2hEKDCvcRSkh6dLm9R1ZDiZXA8hGik8cMKPEUmviXPXRFcasCPr82S7LRrRbSC2ycK5PjuP9RchiE",
  "key36": "4mc4XkPrn8wtYYzBe5fBkchSjB5Ctty1ikhtFJuiayfKUjAs759Jz9fyHNJBKh8WF1f775CPJRu2z7jUuPrJbnTT",
  "key37": "5hurYTFZSYeiYW8Be8y8cYeckNZoo77tJAFMsEWUueLE6Wsnk7MrzwvCShEtwcMQWmMqh9HXZU5Ti3nURnhf3uS7",
  "key38": "2NRWA6oGT1FUrggidhNpudTqBMfdSZ2rfNiXV42ucrjwhFEsSaRpDf4CE7qVJGBJ7m4vBtZTRgC8zS5H5TFUcyPJ",
  "key39": "2xyi4E6oMgkgsm8tJtUmp1ZYVsoyjscg3WaTv1DscmUeXCiXhviJZxgpsCf9aknqHJAK1rwbZjjCk6eAm7YgGKrw",
  "key40": "4Y9eqgs5ArnytkKC6EML3hY8exSdBRND7Df7N9R1qct1iZVcd6j4dj1ScxHnfcsqyi5xd3J1Xya5TkEhdcmrqRQe",
  "key41": "7AJxNizxDsGP3n66eM2NWfDj27jPS1bGhJeXLr79Uaxn1NtwV5pc3AWna1jw6HJHrvsA9zXmQPu1VkSmS7LxhDy",
  "key42": "5Y3s1cBSMXabc2itb5qQgb8TQEkgkZm11tuvJXP33iwUbrSWFfwyZD8sZYi9K3JqMi41eDLVFXTeuyJM7W9ZB22M"
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
