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
    "2EK3dGRfSMHN85uXqRt2Q38SjyP1wRJG5TZk3CsMhpzbXyZWmxXY8a7QTEf9wjawRN1Q2H3uRAVTKGr8xEq3nYMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiaoh4WhJSHeHMudgQEiAy1kHPKaW9RyYByeNRTs9zd8H4JtSB1Dfv6uaSpmCFisZgYLvPZh5ctCmqsyKZGAiMd",
  "key1": "5UN64kRjBzKURqFPDP3zEML4SkzXebmKfXRYNXv8CWcA9JuMMFXy2ykBCHLLaq8Byth8U8TJ4j8JvdpKLjLCHfkr",
  "key2": "5VKEHWiRU8iUi1G1dtYWGg9wKZ5bJUatnSMgL5BPmq7FyMiSxsBR8xJRy6wQyMGASbxAhzBgBavwD8BtTm2KYw87",
  "key3": "3ccyLCpVWMG32eSNxKgUJmLnAFkGvgyqwYARyb7Zd6ydhmGGm1bRxUqMLidpPRnFEvx2DrgLxZ5gqAnHLjC5tWGN",
  "key4": "2KRkNhpGeF2oSz5mXjrJjA1FYgH4A1b3UzuKKdnAZRoDNYJWdovFCHDdDTZdvQmCAj9n64VXDS7FB7Bk7XKgacuU",
  "key5": "5g4wpg3w1TzXN4raAUZ7trr3sqH8tUarBLJVZV2MVn6YZuVMLsgEYWmjqeBcC5So3gZPkVMnDXALHMMYHoSQcRaF",
  "key6": "XczuACs2j2wLWzVcqjNVxQqfFFJttV1nbmXLgxXpzrHjzCNViGzjRXhiD9RAN4nntdC9U61HM6ta4URUQU4Ts42",
  "key7": "45x1zo49zaCrGWyH558auUbMbY8sd9YHYrkDgD93Ni237pWVWZUdtCcuaQysoQhdXxqLMcnDKc8DcJpASLxM48qH",
  "key8": "3BH7zoNcHFzUnHyGsNznHYt3Srrc6NiMo6k8oiqVcB5s171yA6tUNyD8sdgtnZviC64EUAnSdbH69riTqh6PgoVS",
  "key9": "4FJTs7faNhf4qiNJ4gAv9McjaGDtyGTFTYxdsHbaXbWmLRprqwpWnh5YT8MZdMSgq4wyTzF8f6yxLyR4hEZoMFk9",
  "key10": "54LDa4gMyj7mbTYgM6TMJEA18NycFL9rXHTAb5KrQXyFgRqkKjy5gvnR8TQcgSem9qjTHS3SxPbekuq2pXWEfsBB",
  "key11": "37VjukRGnsNKdVEeaekve1r96QmpbEMmGfymCLNhJsGtzBZcBDoTNG1pFYVWMQ915ojxtvA25h3ScTRHm41WmsyM",
  "key12": "4yTzRJyAVKye1WoeCxyP9MVzzqGfwoAFSz6SnudZCXpTdNFUC9D4xc5aKnBz8mMZghteSX2i7vKj546hqgrrkv6E",
  "key13": "3HZKVGiiPkSTTz3yz5BYRdg6QJUdTYBzJYCiw2mJwm2Tb71rQaXuNtHVBR7FRegEBacUZ8afAH6zDMj4gfC19hhb",
  "key14": "3FwEYvTxtcwmkLWxN2FevTpkL3UpPYjB3CG5wMdDSFhpDAXnnYyknFN5SGmNVSbGm7Xqx3tCojdUVokctZQ4ZvWL",
  "key15": "J7dEsbAcnuf5MZHk1th6X9mLXrh7wuw8B7LT5dsC8rnc2AD9k7sCBVqMY3bKwk4UZySoEE1asNFjekbztWG65L1",
  "key16": "5X7UGCAvews1MwK4aqZcWQ19mYBnA5nb96Jga6cffmJcJrtigvEUhfsqXJwM839LhSjTP8RgZEoYQea6uFusyGL2",
  "key17": "52FpT4nZwmHmbkCqWpxVxhvUSbEcRFF8oEL7gzMccFNdZwX3sTAmmwgWgezQU1G25M6EXvWxANW9Xir4AAmknhyE",
  "key18": "3cKKFz8H2MnFPzPk4TJ23CpDh4eMYgRVKk3bA7P2DHFufXAQTPYUD32vL9JLbC68JGPXwNMcTwmi9wRx5JrS5nJ7",
  "key19": "4AkeDjy6FuFVvGAhCpohcLDTGsN1CoV8kLxGUiK5nFSZASTSRAVmF9mjcWQXR3qvNRcFooPvpZG7UZcnmgd7hnq6",
  "key20": "q2oBRuKraUc3PzU9CiCN43bTVBzV2sT3PHY4hLsj6Qr2R5f92erP5U1ZjxBqYbMtfmqeUQoFwwcrusiJ2Wzep59",
  "key21": "4wtAncsF7XwAzNDpX1nwc9ysagMGLMtZyzPwe9aZKZpyhJKamDSMXnQBCvrreTTZQhhRJK3s5K63kDHCgxzRSw67",
  "key22": "3nwYGC93R4XUs45cHb1cYMf4rTWCoTexnJoaaycEotPdgQszYwWFaMBZyBmoasy9UKeHy6kaE51Ld3YLXo33KPB5",
  "key23": "3rpGDUDPfd1sbL8ScTbnCgdsMTMWgkb9vZpciRr46FxvQXswEgKcg9Dih3rVQGospUUPLA9u1NivdJpJqQMKKXT3",
  "key24": "5KFfhMY3ZcSmZu9ZiU2BGgHAJ1qTGxWbk6yWaztgYhx4tsVtQdQmWm7RFuJKt1ji3pvtxAgDABzKLr85fM3ChN3k",
  "key25": "3N7wYybXx83pn4WfWg87bWae7945PfyGDGnnkeRFtFfpejhfZTK4RHZdMJDeD4bNhRVopuJ1iGaoyW5zncytX1aV",
  "key26": "5g86JGhHd5wLUdUy1R978QJG9Ym7iPycRCFDDfP5G3Cft9pDdT8n7ioaBPbByjAxjna7psoEqz53sNJMTfNDGXXY",
  "key27": "3z78FbjuZhS4ayk39UJR4o1ipKi28xgkFYSZSvvEvCGMvjfy9xZvzYt7c78BcBaAj2hCUbq2TnWJwMSF4yt4WSFk",
  "key28": "5MhXz6GUXTYgey1dFqp9FGkTJSbyop7nzDUNnLcR7oogU1sXrkQFiYrm3pDYZSoEJqpYUhu3BMSuB8PbWVwbpU88",
  "key29": "5VCMY1quNMEeFkqgCRJmPiDnWgpWTPUUmoj31L4g99BjP2EKNHBSG18heHSfVYQiGctHwJzXcic2eFa9hwXWv9ZU",
  "key30": "ksjSgASVph38pv99miysznJZco4TZ9BCb65oqnfo8R1CTwwombsmX48dug1Fjsw5dsmoRPmiQmz7CbHmNSXTc2S",
  "key31": "4YuSAhGquAUUdygye8Ymk4argXwNJAb8NokSvWPT8kM2BF3AoEnMvxVWc4vfBTqrpAzgnBgSw1wyCtPtRhzHpQ1u"
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
