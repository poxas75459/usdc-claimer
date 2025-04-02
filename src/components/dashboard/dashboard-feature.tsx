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
    "2vMKY6XXJnfUGDkVRvLJCBu27rrK6d1pgQADP5woewpHtBc2A7YX5XBG3oDEB2vT46rfN9bLYrGoDrYHqUgrxZKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PeFiXkZiiaXzhQhE9Yni9fCp334pCN3539t7BmPaoMEHYHteGhDDai4m3Yhbzmr4wo6voZsk9oszvPcqciF7Ugh",
  "key1": "2qfcH8brFgcxt3DeuHeJtLfbbv5Byy5cNgwFmHuZZbWgJwDHEU7WxUsBCRfh4Kduh5eaPuAQf8dLju2egfG6To7Q",
  "key2": "22xSs83XdH2Zd87ADgFsRY1Xm33EWLCrco366BEyb3VDNcyLAZ3Epi6RyXy9ADj58rynTBfgD1tJ7juHd44yxtqJ",
  "key3": "3rdNKxCtRtqvLtQsMrRZkiNbpPPckMc1piQrvMcyEEK2GxGFVPcbttg5fQupDH5NZS5sqSZkijLJ8Bb1swem2bxD",
  "key4": "3UjoxaFmCCxKxkTwro3U6ofKbVZeHvFKD1LrrF4EUxj8EmhfBYabMiN9Mz8SDjnaoXkNLzBLPRugAjYvkTSyfT7F",
  "key5": "4ngaM4H6UGVkG9FS39D6TcMpZpobkqke211xejenfXBCSsn2W5cAuqaUtZmCrnKgMcxFXz5CMWnAfxMf95ob5dE1",
  "key6": "Km6gAoG4Tth6JUkfUV3dZzpbvEHkDUHfxm1Ejrs2Zp16MazoDJJw3cQWGQovtCM5Nvv5amdibi3SgGN9ZxDHj9r",
  "key7": "2wzbYsUxDUEx6V6qjWQCfdC8EBKTLDHq8H8xoGhZVHtUhG6URht3rqBUCc999L4VxfaqjSLLWQrPZx6K9Uhh6SuN",
  "key8": "5WZkbb4z23nUCsKCAMLUaBm8572s6ZwFEdRdRpuZsTiBkbjPdyEM8wX6Ugcay7gfcJipZV75TQYRrxi9diDHyh9M",
  "key9": "3su8PCo9283UoGDmh55gyBAaGry8VGjJbHLSqfhZ2qrwLXgvTvjrJSMgVR8QJ5PH1ximbkRNPNbEfvhHdAZtjcBV",
  "key10": "2VWfVYmCv6smWFcRf2u3natDMTmFifF41qMwviNwbndEc8aUWXSwFJb7nZD432MY6u5ybAZz76opgs7kSJmhM5XE",
  "key11": "5sPMR9Pb7CsG9dZmBfVnaido8JqbMSeJXRwe63VJdWdmAYqEwuuMu7t4gAVg22eQU9XbzsX7SYs4JfjvsDNng4aB",
  "key12": "3JaWcWbaQP6WWbgEiJM6mUnKSnNah6F44AKKs7yEZtSscrUE4wHwZRUCQ1MYpPhDkBUrUmDg6ZyHfqt3WgYEVRa5",
  "key13": "38ATQcBDyBtanxbE3DnA7ruAZDvVHHk9tDCX573n2FHhjpEiNLDaybsgQLx1j5YcGS8kHpg3h1FcRHxsruTnqGNK",
  "key14": "5bYYHFubo2vDDXHmt4LghMmhV9AeoCXP1nxCQEVxomXPR2sSBATbEVH1AAVzLSX8gvBNpubtP3vVBJhb5pvgEQfM",
  "key15": "28hDXBafMF4mPf351jPi8NKZ5VaKkCyVryKTEBvvTT1qCcueDWEmEMxzUByQrpzbsrbJSVMQUDtAfcLwUA2mxJZc",
  "key16": "58hG4uCcrKJKpkmvjwndWTsCXwZyGrmUJiVJ6j6q8pAnZPHvMC6ASFz1nGdhAQ7eqBf2yvRSg5HHHm59bMQzggTB",
  "key17": "5DPAm4S6roUFDS7L8RAf3Dohben2MFCnKsg5X4hA297EJ5bCZcw7imdTo14wGy8ejxoaKLb5X2gH5Vy4VDtEYuwd",
  "key18": "5SQZ2uZGZefhSKLZzUXT9iW2Zji8U4GVMnCTbEd4rogwVviyZtuegDfZd6UUtYbc1h8gsLqKs8NMztj2xDdjti1i",
  "key19": "2SFanUfs55GJDNhkQZBMk4mPqCSK53ijztw5ASRUpiM8EaE8XEx2RevEFhr4PPUfvepANouCbcj92ufH95Bes2Mc",
  "key20": "4nE8Ky1UQaE38M5LLnXJVyzuLofAKuTRjdGZck5amLdHbL7fNFRFbYR6C5VNqTGt5ytsXtAcBLhm5xb1TeEipzRm",
  "key21": "5pXEfkx8BvahRxSPHmuLSV9qMjm5A3dMvLWAEv3s7fSeLQ8dHYVCGEBcphkWTjeAjMEDkcwDkKYGxaK8WB4iTj4z",
  "key22": "5ZZRmMoLPj3WGFnRwcVsAiPgo8tHSc43Mp38soGcyPDCYCm9JDkSuqM7NvDds95aqmvMzKd8mp1TpRHExVAj35uV",
  "key23": "2vkMdL5WC29Jei4bK5JS8hjt7zHmkZDhU2a8ZLUNgx4QLcSzHdDTVZ8kv5Crnoe1pZkaBpe5a5cWYzz4kK37UTjQ",
  "key24": "4wJtnZXZRDvPR5VVrGqEDrc8tRLvT5iZmptUaRVqEU2GX4icGgJHi2SQwL8njXk3hxg5Qq5CWA5QyAEjFhDqYj5b",
  "key25": "tM3K4VyiwYvnqAjLGxQFJs5ekTsHgd62B6zgQ1YB3YApH9QvY9jWQzaBP584ynCfdyhHfwsoaNoK1cDwp4Vvgvw",
  "key26": "498q4kETqE3dBz6zjvCuA3cah4DzD9sjj3NGr29ifCpkqKynvkJCpSa3z3HHT6bhGFMCAsUsToMzUjtG35favvU4",
  "key27": "2pcbwqwh55MrbpEZPd4nFcQYVmss7xpp1tkdt1WqnYfmcoqw7vsHsCAay6yGEQ66hPa3gDtxmLQghc1r5aYGJ5yK",
  "key28": "2rNqDmfXMsDnhL5LCLGPW4MNbPxhxQrC3xBju57TYvYdGrhQGwxtjakRLhYGnBxmQyubktaZXTq9Fw3Es3sv3a3A",
  "key29": "3c7gd8GfkpXpLC5TF2Cv67UHiPhdEiDGxpKCc4BrNzK4tKta2apngTWXH7Mhss5y1uJHr1FRX87jbQLgUNRaadBx",
  "key30": "2TFrjBwzJGJYGbZVBRNM65NUTqLsKwBy65jm8U5aC8JWusHFBshaDFcchveGbuhc68paqkzThMy6GnCoPUAoXXjU",
  "key31": "5BKg555woivNgNZuE7vYfnDWDujgvCeXvdLwKnGM1GMNMDFMuvaUZFTtPNa8c65Gr5Hm4yJ96WUbJw1DP56K6bZ",
  "key32": "MTMQ8YEgLkXMxeBbcGXFUaj6j5WFDXbe1BDDsXuQntVeK4711LZvzTpq6gszxN2o23uD8xCPX4QExPaPjmYoYhG",
  "key33": "3GbMRdaPB6pQAbKNgtQHYxUWuKCnkeRYeg8JN5LsK3HDjvdbyARg7quKVqu28LAREfZa1T1SE2UhRZXoH5o7SM4y",
  "key34": "33PXtMsjEoJQUZKFMXtP1oPzDYETcofJG4LFUEuFjL5MDd51hY1xXRDR8LvkriNsCaeHtsDvRAQRz2hEXAySWgDk",
  "key35": "4BCWPyfpzARvoagRwHd4asPXgWhQn8ztZtVvk58xqC6tRJMeLhu92eNBMxQqaNvF5ZNf9o5Dq1eU9GHCheEh7ZHn"
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
