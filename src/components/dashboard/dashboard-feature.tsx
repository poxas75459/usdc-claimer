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
    "2x1nH53cG7TohVNfonskS2xHmg1NRTwGXTwLcdTkGKfCmCrZt5DwfTkyZpKJdhpw5yB6YawDVcfdUP4D1yWSjVQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMTigYM6jXPrfKyUcZzqpY7WTHTbr958jccChrK7g5NEGEnPvyvoHUgFnMi2UaFxjb12pNytkm5bP6yhYwLaqZg",
  "key1": "2mjnnuHbvWiyJ53DA5GtiyZhEWKeVzAg74XFUK5BDzgb6TgSvpQDUYX7phtjuXvV2fLJhk2ntq2h8Uuop83GQuFP",
  "key2": "55C8rGzmBLmFN5oSHAs3EsjpgVsNtfiKQnABAVsFVNPsMg1RjFFabr99cTzu4uRS3rBpDfJuvNQFhDxB1qowLJd1",
  "key3": "4yk7Vt6Mios4z2BqRAyTGCbxj5dv1NwwCpbJYiDMHdCpTMgosP1mVBmH6Pgdgo23cdFGmxsSTzVnDpihw5Wy63S6",
  "key4": "239ZQ4G6ACk9y8AaQPHqj6GrU15UdCBnjEdxhp8t7VpLizgSKDPeQ8Z5AvJn7Ackg6BSoiUPWJ2HF9ywYCHggiL5",
  "key5": "362H8WTFTgaNg8asSvyTWy8AcY9u2BW6NHMsPHAy1PnRZBk93E6DGRbcDxNsK36knLi5HZcj347iSXGBhA7RaZJA",
  "key6": "2miRCgCs26ysfWuKuH1sL9TQoYRpN2g83J8BbEMHJor3qjRUXgqAjUVcNHrg7KpCCUGT5CBVe4goKNx6zEahU3EX",
  "key7": "4ifVeTKz597DTEPYiPqBiAYcJqpD6mjPPR4UtLNcXEeW5a9T16arqYKp9cxhhHpY9xgEMocRxqn3DBRiEbxWXYu5",
  "key8": "2JMjdRogeQN8brFkf2aba8ybgypeTQWvVGASxPVk1jGCzmnQfo6nvsSv9KUyJzzNtPDXY7jNBGEDNjgTT69RPb4x",
  "key9": "38L4AZe4ygx23hZhz5789jHasoP5ZC8SxQw7CaHTDctspD7obfU3nD717Yv3kA4Ke7iWnfwk4DhMnVp2Qyaoukzm",
  "key10": "2ssUw4RDAJuUT52ki3AGEKtZYD1FWLHkgjfZcSQa4GWn53TS726X5LTBHnzobbJvhAmcyYyXJfZKSixVeMUuxMJL",
  "key11": "5gsH8jW9jgY1fuU2dEMHH5Fq3JkHZxvCsCTMUeq5xV25SGvCmVyWwh4PjARXTUjtQamaHLxddLCJG4DzLbzM5HsM",
  "key12": "5iKhVNUotH1g2u56vbSS82po1a2nebBJ1i9Rmf1BfsEBu9NhpWQz7jaKaeA36tP6nx6c6WePB7w3QEkjpNUik2x9",
  "key13": "5uCQifLrryj9cSHhhHn4kKLjFwkycZxLtFpGbmXvWZjxycG5TfgTWr3CLwS5eS7WGn9dBBifq7E2rUQfqGtkuvYV",
  "key14": "672rgJJxSXU4iygXgZ6fJdLsTwDbY5rfyww32wBK8mFyxQ8ZHT6TAvV2aLqs3RjF1cgoCdYCG8cdmBbymPt7Uhf3",
  "key15": "2gesiiKG676EMC4omouEFwWaZXRG6TctHPErjoYmcTiGBdyeJc9Qqm1bn9TduALh9ziFNWSoZQFYNBamEngCDJhA",
  "key16": "4W7a1D6gibTvsbqM2wb9cvj6niy5Ke1JvsfF4hX1FQ1EpWuZuVgN6V96SXNioFjQ43kvPef3Xbf6jyiD4n4xc3Zy",
  "key17": "27fzzoFHWRzHzfBeApRLRErw6SfLz25u9fdCFuLSa5HEmUjf3FBBXv2T5Cakdghu1ikEDrowYmvQstNgNQcrvxkh",
  "key18": "tznmJq7JhigSviXtDjweuVMW1M7vUXy46d6MWkaV98CV8h8pW5mVfrA2fA2xJfphYnLBRWn2GufvB9Y712ub8MV",
  "key19": "F6cXHEEb4NsZyJkWcDoiEV3m9zut94MhqZr7yn8PFEsQ9VauZXbkyBm6cUYK5g75cuTamELw7voKSQdY3v29wBp",
  "key20": "54rRAxwCnf8rCAPfsdbzUczW2jmjMG6MQfCSuN6v6LCZiNfNWvqKEAmuiy9UNV44qu3xGp31DGYapZERKgMLXgzt",
  "key21": "3JKgC8RqNB7D4vdvxabA2JWmSkjM8BVhk1CtPpgs5qs9PGzxjKanoAmdfMQ25yysKE8oaX7DBVqd3NuwRwrPVsEo",
  "key22": "5925BxWV43zUVh6RfWyfpAovMtVUPfVAXDCpbCXvybhsL3T1pP1QQEPmNgux8koVU6ehcNSWTbBUYbm5SoNXy5fb",
  "key23": "389F26KASb8pu9TcSQt2hTygiciE28oteAsHWgeYDWooqj2KHk33oRcc1ReWNb9fPs4uaFmAYrxi3jrmiGoQGTso",
  "key24": "2fFuyvyMRdQqrvFuwzF4N6TeZ8frGUfELjoBQLifrk1BoPAEZU8Ws3amu4qCK7vtPgLoq9qQAzKUp64TCLPaXsxD",
  "key25": "32Eh2JQXMDwLoXbnMzHCzt54kdce4FzGp1uRUBcdtTj5gmNK1eVT8HJDfBULyN23bYXpipV8WXTdvHWWpmHpx8UF",
  "key26": "2433JjuqpFnyBz4XuVdoNRg2GYHC57xgPwwZgSsEx6RFEnGq6e4H4g3eCDLZmN6FhguYVzunLNAsBocqT1BHtTxV",
  "key27": "oE6kfG64EGhPkh9DkFZYd7QXNtPkpou2jC9qUwKQPmVGjiGMTNsMdeME5n2LqW7VN99rLDZJufJGB8PhY2Kc5JE"
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
