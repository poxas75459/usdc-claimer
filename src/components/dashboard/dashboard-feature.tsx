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
    "cL5eyHNeBnHj5L436iyam8b1rzNVR1McpSpCHNEtmkDmnC7Enmy6HSwwXzj6TkZwbTqTQTSSbx2ZmKkruxXL5Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxjZ19QXt1Q96QdEWTkhQdHZXQ2MjiVgwRRoVd1hQ3jYFahjUjSmDHJ3t9yuoUUVxvY8jbH4FZLRXitffMB7uLK",
  "key1": "3gDVE8fPumDs12H7qKAyY2Trp7539NedSgQFwrN2iNtbAP8pLFqMCmoWTSVYEWxwaWyWqMmbAEMBKysSQZVbCzwT",
  "key2": "367yM8jjqZvH4knmK886ZeAXWoPhNDcfbnvWArNnBo8mQGDWXbi8mx7xEYB8JxBoWAvN2c6n5RrDq2BpUNN6RTRS",
  "key3": "rTtCDqtSRg8Xe3UtdFtp8J26SHbaixLY5xYVbtw55BhuekMX2rfxJ6YET9Q2ck5YQXCMEpPZWfstKxwbJkYCTi4",
  "key4": "4obajvmykHJxQC4bK2ivZHiZ6uzsWiDf1rnyew5M7iEtXUzLboLEs9VyQ7ZW1PBFvoU7znECY9YU7SLXgQPBZje2",
  "key5": "5LWKb4jUg7TCiXU59wK9aYw5EQk8PhqqRMNqpbtMFrj8mBE5v3FDcPb3LBo4aYCKhiFAb8LCPb5z4R3LVptAbn3o",
  "key6": "5VM8AD2Nx63E1yeDWdWYrt6GrGSR5Q1Q211DMqHfiVYRvi7dnkgYCkrGkzJrd783JTL1fBPuWXsSw67qpSKJnKLy",
  "key7": "2X6i5Fa1po786HJFxXj11mcF3eLJA1oDcmb2onv5uq5oDv2etJwTmAZvs52Zf7TqAkx5JhWxo3fKWfJizNrwn7Pn",
  "key8": "tZqpPnAEZnZPZ8ynG5ZAQgm9D1nwvMNN9LriSwqA1UsZpfsyyvFXHuXMtXaRg6cPoH5wjLHUAjW7NEgYxnKGQDm",
  "key9": "Ar9HSAJajeo5GJdhvUqxXw8tZpd5AdC7bgD5oBFyTyVPsEARAiBF9h3u8Ce99TrTSWt6gn9X1XiZFUfMkn2bpKK",
  "key10": "oM3iwi9n3FTpSWD1AaWyM7xcrexRVvgMuoHToeBiSf6yf8qfQa2p56tEuUYR9GqZ3kyTmUAvnm91PiMsHK7SBEy",
  "key11": "5BtmkLZ4s1iHTgajxiirvksh45MrJkUKqMqmMoAePQ3MZevs6PWK238PBzU36PEiaQ7jWzzB3QHkd8UyDzwbQBFc",
  "key12": "4iJ9aPTnNqs5hroaQGSTCmaaWXKuG35QwppgQLoHW7ZmdjnWDFuaQzRSZtNFAfxaYq4NBcBfi9Tv9tnEvQ4bVrKd",
  "key13": "3J8rpDqYWEJrQZyMLbgoHfBi14S9DPpRUSYZiNTxeMEwX6nZXPWNWsqKTCe6thXaQYmovkQAbV4woJQUWTFYDqoL",
  "key14": "4PrNr8bF7yZXF17K6Mbt1xZNxGjz4jaoaiKjrkdLAFZNybANPv814bGTFXRbEnpZE4GCwzaSSMA3DAtQuzMJn11b",
  "key15": "RWTFNtQhCRcT8AibheeJs2VnD7e49qnYGdxvLh9n76sFXG1xLSNP9EZN4Sh9oUGZ5GQUGHn6gjUK7W9CLEbqHod",
  "key16": "2RJtNfTqLM9gLgNnXj5XUnJgLquarghyv2sqTpJaAc9ESxAXHMaZq8reMbRVQ1Ac3EPi9UUtDjdxniCxHmGhig2m",
  "key17": "439tD9gWpR6Boh1X6oNMh8o2hPSsSYUUcowFidrvTuHuToX77pWuXiMeJAw7nHsTP2oJeNYQV1bruhSNmuJ9ZX3R",
  "key18": "9KK5brGuk5NHAzCfAHD8YzESc4jesFV7XNvTgTxVZaTKopA3iUZrJbUbxnxWFVVViDmCGspmKXHEQfA82wzhaYQ",
  "key19": "WJbxkDJRY5ccVL3hecYaToRdBu5ivC3JRYCVfWNTFdvM8AgCfN5XykoBxgTZyN3FQwxVSVC8qFgnfsyQ9E7YinL",
  "key20": "3LrDoVUq9ENQwvdEP6MchyqW7fd2XZB3Sa7AgHUJ3sRmRQTgteCfFyipSP5gaCAtXcvTymtVweRPFmgoxuTAEguZ",
  "key21": "dNhapsvnXJ5JeivSzqtkXGCt63pr4r3U6JzQjrmas8vyU9JMbUWecXt6frnikXiaKK5BckLrPvRshiQvf9NnJs9",
  "key22": "431SD9QjbhNPWThkuXcHusi4Z3csMxTmqxcG1KhJcRpPwjkufcpG8Uiwf5dWAspbEiY4ZuvPxvvJXreQbbhA9APf",
  "key23": "33iSP8dFpgVwvzXQMM4RanjS6oQGPbiWYCiQtPKtK3Tih7Qz8Z4596oX4PMWmPwnr5y4sXthZBymU6fH75eA5z9S",
  "key24": "3EZNYPKGnUTytPuoMhesqrcgsd47sbatTnBySxk3bZQQfodH17aeS7feqECFEiGKBCrnpj8QnRz8Dvieq8oSXNdD",
  "key25": "3Qq1PgR64zgRMbGaKeNwu3BoEAm8KXAyDrXPYdFQnii25x1u7221FSAQLPiZ94HagGd9K8QxtvRbggrbJBhGBLZj",
  "key26": "5FQgKbDbriBuEVAe7t2YYDmUSun47WQ7xe9mKHmvXsvGHn9HXMYB9DfFSpaU4pkm8icdcvmLT9KYdaSZd8jg8mMW",
  "key27": "56XkJ3uc6UFZbc2ppeXEkhkxTDraX9hbWzXHjjy7ScaDBTGKMqnNG6rR1Nti9HkGcFHmaVY2ptWxJt4bQpDUiz2a",
  "key28": "4s4NxjhdURQf7ECtt6PBEywtDCng2eJRDseSU3m4npi6pZey6T9itohfXMfKrssQ5p6RCTA8rgr9YuW9RVnWCJou"
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
