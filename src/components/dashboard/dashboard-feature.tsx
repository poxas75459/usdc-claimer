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
    "4KqDnox6pNHN2dNP3TxaKtQinSzbnZwhQqQePFXWuZSy9FkEr5iA7gdy88gDqHLFhvoTwRXruQ7Jw1mDB1opg6Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36c4Z9EzNpoKp3auyedfkHvU8MG4PSK5nCMTdZRzF5yb5rTfaNY2D7ixrWGrSvXPnWWhMnDzAKydo8pKZMvpDtBe",
  "key1": "mUWUZ4o8vhmMcLcMeRPTZoLAqVvx8epYL62TLDGWyxUKCDFQWE22jZp6f6SvwySGbbmcjVDaYQnfURVs9ExywCa",
  "key2": "5k1n7g2x3EyA8R5PMyauAipW4K3sY8f2JoeUpSH9YX36XMWB4uFozL1esxcprWjDJi6STnimQhy9iApaV3YVivvQ",
  "key3": "4ZEwpxdbovwBe4GLLDrM9kBBKzApyD9CrKxdJeScykBcfcgVXH2r9XcXHqbdvP3Whtx1GstQyEyWK8NXxBhntypN",
  "key4": "3eS2oPAkuYeydCunfWeiaPASPJ3Uy5NqfGgEsr7RA2FCh46ckYamFCXqhB9QY7w5RR3dBT8kKga9H9vyZtACZkYj",
  "key5": "5K9E7eamReu7EYVmUi5V5oyMKbc3wAg3DXwtte8zam9YgfiE23h4BV4ta7Er1XkhYnFzRr8M9rSKro8f3xKx9GJ1",
  "key6": "4cG4uQY4q8MGQbop82USSfmdMVQVqNoHmqeWCEVij4DMqMwArgRHdbvMcHWYetrAdnC8h7fLPsRjY97EWfrvZoLc",
  "key7": "BJdKA3cKtdqGgdhxpqh7ccWY8wRVmD35Rk2iNFKGJaUVsP7f2WSwfCugYRn3ckL9E1PWXXyhQp1J44dDA9ZQ5KQ",
  "key8": "43ynppdQrPASbLbyyWJffV14ZZD4ARhW2wHua79V1dE387w3w58cxxXtBahkR99K4pNnS66kPxbjKnu8jo7yFgjf",
  "key9": "5qH6TY2RV5cxq1gqnfXeyQscyJcbPYTMwgrTu2GDjz7a2dxKheKZF1M5oejxsEPSLjupiM1NNTZPhZ8H31mhTi3q",
  "key10": "4Wi2zBBqpRNGLUkkoefUr7kwTGRhSUVd5L8WzkQSR1FqKbfQc4F6L89xCExunArDzrCUoEqqCQY3VXddA9TDYAep",
  "key11": "2zK6jA2esTr6yetua8vV4P5q2fncvmc1sS1uS74xx8Yrgk5y8wAsRekb31WDQPg8x7weZVDyRz5pz3BBjD6aB5qm",
  "key12": "5cENcnSQgeRjDXhVHCLHCdiJ1u8WFcakgd2xNDm3biEds5YJGewnARmJC7G4Si452zR6BJSyajhAFAibxB7W5bFS",
  "key13": "wqpGNtSp2ReghNevuiqsr3iAfgcnV1Ds9TitEHaZJoMN1zaujHnjp5xZuvu84J7uZ6VVbUx8B83CEb4vUtV42EN",
  "key14": "5923Ms1QAJDTbDr268eQThkBEEg1sTieqwGzheqZgvN3k9toPukQELhnQP24qCD7S7KWRRFhVEX2jrUMCPjvMxH3",
  "key15": "3t8Up4PkZyUbo7sERpaz7dCkoKUUZwgBu9rxUiYoSLN1cyijLX7KjXU7rmzRkEpSAwngQBZcponoaasySeffyxBy",
  "key16": "9u5y4Bj5CtBFibtznsj8AUk74vHhz7ggKZVVsujPgp9SsuNxrG6UgqEYibrtUy9etWzNzRjyRsu2m9aBuQjKiRZ",
  "key17": "UngQmrRkgtufpmRVEZjwyA2q6YkahNhys3obqLNpjU43PnoyyDSD1mA69GxRC8yZ9SJuzzx1iMvC49ebW5KT1mA",
  "key18": "4bjrKgbzbnGEwiSa2rMkKr6rY7nVhkTfFLstx1jTtxvkyMRbwgNsmDT5e6dcJbdNR8Rfp9uXMvi5mhhXDGpHXKuC",
  "key19": "5AiedZGCYo8bFvZadUM6HDuwCWs1PCjZaubNZKgxkuJfDzxKU2CEx2NPCYpN6a6vMwpGJMMihduPahM77Yrs6v5M",
  "key20": "3682tpcvfbBjzDAKZvQwVkUKLTmd1Zp5SQoWkzqsAYeLHqFRrge7s6Daq7FBPrFcb7gw515PgWLF9gvGbvNPmC2i",
  "key21": "3Da3Lkpyq3WHpyTRYZNmXvwkAA1GvR8E21aBzvh9mCM9CLB5mrAf8H1CSoA4oKvmmeVzTZhwYN1cSGs37Ng8ykH2",
  "key22": "4As9CmRwqjXBETgMarv5XwVr51pr3rieymJRtpVKVdgmfCCDr5qCdSWShLGxGZoForgkJ1G623dX7u9jVkEAzy6Q",
  "key23": "2EXA1F69BocVDdxRHJXcLJTtxCpAhns7uU3pvErCNZKfWqa1p2DjQdKJf3txNQd75QU84rxrmkyUPhruBdLz7yhQ",
  "key24": "2Laq1xgjVgC51DQAbpTNVYGhds33kq5ABjhNcRF2ygCYziPL8Hao96TX7Yp6T4gjVXDyze7DV7NCnXRvf6dhtmyf",
  "key25": "47qaSDV8YddURDSqnTLAGf68nW8SbjMEb9mH1ipCkzAdyh6W4UAiLs96v6re9uhhCy1scvzmDs7amiLVxh2DyLJK"
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
