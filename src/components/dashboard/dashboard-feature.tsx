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
    "4FefJAJJMdq9tmYWnTUbqrwepAxPX9ZhSi2ajhZzZ7bZrr682fNSDoneSJMe9qu9gXirdK542CSdUgJaBb4nNnjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4xQEHT23MApsBhu4A3MwgyJU986Zn84ZX6vgPdEF95RjRkTQsY7iL5n2FbAgEfUpxW3yyFTUNbhgCqY1C3osR8",
  "key1": "2HQSFFLPL3QEFGJXGhcazkLPPa4gSrYNxFa6oqQR7VHyTtHjEhG24H14bnaFeMY1ot6UK79kt65i7t3UEedUTTvF",
  "key2": "aWmvNzSareVhFsTCkDTizg78FLftPqjZbmpu9z8NdU8yn9bk1dhvYZHMYgAJvkBQCdoCP6Lf1a4raeTq8EbdqRB",
  "key3": "4QDm9vzGjo3EzJd8XxfVF5jXKNCV4eVh6wuZ2mUG8SQJLjcZGfyZ6GwMUnBH6fBmhQqguSR6d6LjSoZFLJUK2mxA",
  "key4": "3MVJrfsYoP7kw1R6v9xMFFJt79cHogS9DuZw9NKJv4a1sStrY5DyfJsCeowDVtGZXGKqeHwDgkYur5QvKyy9MbG5",
  "key5": "5re365Aij1yycQiTiLRXU5RSgcmUUfEo64PghZoXhzGfu2fVx6LWXCEuNTUatSpdn7GwsGwx86bufMYUzJsPpErD",
  "key6": "4J8bwNxf5cYUiiRCRFLbYYoXwajaj5BTyxE7nriaFjCGfSD9mm8qY8R3URn2eknXo17JK4Pcq5mJjMzt12k9BX7s",
  "key7": "BsKWSd4u6RRgvNWR8ZNRrkPGjxcGMedW5x5yArZYe7Eztvk7htHXVa7AAH1j3czNJGoR1HpZGwJcdqaA2gMAdmF",
  "key8": "5coAnJrRNT7d22u5aKDnLpq7wXk19bUPZKRGKpx6rKi71ETrvPX1TGj1DzLKY7J5WGbjSFYYvs9wTdDydbBzB7t7",
  "key9": "4oVGsmNVf3NB76wV2bi2FgnYAYNubGJUbtKqKDHDhHEBxQvL1ZL48RxE7QBMM68Ab3uJ7AQHhi1E2wfEQfkjUmx",
  "key10": "5sJTr4eM7cK5B4YL2EqjHEHc5LApxMew74a33fj9L4zuxPP92wjVPddoTyXKfvjruwyoefEHBvuvMFBKtWgC2hEN",
  "key11": "HYw6SM68AnqvUrLQNTdk5Fc9WWrpCEi4NUt2weMGTtD5rCZc7zGSagjDWfiw6mEkznrhBFM86ugifsvmA75hx8b",
  "key12": "ey5uiyjWgPq4oZg2GweJ4MTEss4c2uHJo3eqS1fknwu3u6CK1yr1exgh2wVtCxoJJoCkjAfc5sciLrcyympZ674",
  "key13": "4DMeY1fJRkEeDLvFHWXc2MPZHvRBAYaSncTjL3QDFUocCbYTLQHp6Hq7LBcs6jePWkRZWT4PRhwCSg6T4LHgrofo",
  "key14": "4KVwbjoeQGGT1hU9nocmxNUhWe28dpask3c2uJBGLE3VuFDmWPMjP1fguXFzmVZkeeKbNJ2AKexkB1ibkP7bXP3F",
  "key15": "UYS94WwSsz4dkn7BuQbz9Nrv3bByGrJS87x9Lq8Hh2H41NpRtwtxdLa7n2Roex15ctTJ3Li9SYKERK2VZ8EsZvA",
  "key16": "2q6bc88rbmirUvGyzqy6Zcqi8kd1MdruunrTXwPP4duaAopU552Hs2kktZDrqe2rY1k8ugv1r1EwcD8MSgPhv7aF",
  "key17": "5o9Cpb3BNCWUMP3xoXsrBsC2hjJMszUX5rY8DhQvVBrG5YtLSEtXeCaQdAJ4Qz91vPZPzpjctkSgBhzmK9sQzByJ",
  "key18": "3uAhKyKxWZXV7RDG6qoNbtwqi6ca34qBDLxVS5d9JFJDssrWzThXvS96Sq4LnULztf2Jgrc7H71ADtvsHfNJLK6r",
  "key19": "2FouywYY2w41pCn896THhrWgPj7fMAZUX7pEMTjZFmhC2YLBGmhcaebCqKAdq4SPdKRaZ77sBzrUJDgicmziVhgu",
  "key20": "2stqfJFZZFAHpDVpqrNJzUCnC7eC4pM7bKdSNHWNeAmhufRDJ6va9jqaRSmmArkpXeoUuh83hMN2Ry1RD8VYWZuR",
  "key21": "3b7yctNxp57V9YU9PzYLpRBDHZjK7SHxJzEF1gEHVZXg4dq7Vppi67U4HcJofS5H555MHn27h7aNSs5qHNPy8r8r",
  "key22": "m5eF8CcbvpJ4SGcPSQhz9PthMBhqX3MtPTzbqSDB4LVw4DnCznEf8JKRHiKaw2CoBxXCpzYTjrQxBS1ixEiJFC6",
  "key23": "3WAshvcPgiCfXTQnZ6TT2PZrQd1RwmpGHZYngktWbP9d6iQF2uQJhsVTrtDziQyZkCf8LxNzxb1MJSSniNYPsfWA",
  "key24": "42Ueryfvt665Hs63VS4pxZzdjcWU3RQGjZSDx8fbRdeLhg3oUesCH9qZ8qk4nb7cNCtwPd7Ws4VXXGgvBcpKHwsU",
  "key25": "2xMqTPDY1njiMo2dTvQYzimKurXxHXwQpunucHLUoQwANfPoYFnynXnfTJQMsFTDkAtcmQPfGu8AiZWdYkk4UKqp",
  "key26": "2ddjLXNVys9v5ZW4X3ZapzfLqrC3nLFce2X8ksnJADyWLMAzVVowW1DjgnCTCPh35moavuotsAF2H1FqEEEZFmxn",
  "key27": "4dtDFbXPzNKJa2VRJjiDD2iZav9CDweifbmGFJ2G2maX4rqp5dufWJN81pUQpAXmbVtTfVapztgh8JY3HemvwXdG",
  "key28": "3FTDedscUPSFbq5Km7s9CM21brT26DXshXk7LBeT56824wxGEXVJW8CZF8365evmutgwXDiRNZaGAi7Z4H2xZuqQ",
  "key29": "Xf3tJC7jnNKeRgNArMZarjwmmfZBjz9aUVCK9jpfMnotX9mbzXZchF4HZRrwsz5Xm4mi3KGiTnxSrDuz4hmMHDf",
  "key30": "pQswadajDjpJq9Wadfi8phZoVevPDuokudUHjJudPfA56oFxeDhtf6bDANg7YRSbqYDzQ5Apok2AMHtJZXBn3pr",
  "key31": "pNiLH9Egcxmf8A2h2mVLci5NxkU7GVcrqyeiJY2L7Gr4FejPmNmyWofceF8oSgKsweaidrzHBCneQyBk3uK2KKE",
  "key32": "2k2psnrDAT3xaRgBs1tJ5kYYGKuaAgwG8gsmNqCQ2Kzvtz8yNZVN2g76oA1omybfY5Wg4VkENS2chPRDXA1CUbiB",
  "key33": "3npRa7aeuZVLSHHGGPtJLUSZnatwCRkx8r69TUq7LPPCG4utfPrWfPmt2BuAWXY5c5kgiNPr6MchF2Fivu3yZfox",
  "key34": "4oP4kmWfVzvqXdZA6o9h6iJ171t8hFs549gEyVnW4GBLyNcTeGy2QSKiYb7R92sy4QzPF1Rj3xFGLMJzTvsGrEZv",
  "key35": "23scxV2Ej96RrqAVWudo6dE4DmQc3UPrdgUcTVuy5bUJmrf4wN8YpxAZP99jthRgVGvoHZ4yVTj8WYpHQSAh2che",
  "key36": "44tKnResqFBnuKz3GRrwthg1RucjPqxHiA1tVLK7e8FqKm3kPVTPpJRUeA7BKHkpFfgmWBNRmih8TRm9JuW6Zngp",
  "key37": "4yNB6jfn8vjmapW6FZL38TAjX8Yt8x7yC1Nu9qQXjK6nEQm7iugDLVY8Tpe8Y5RS3BMkBneAWXUwaxoWfcnA7FzE",
  "key38": "3A1AuqKrSvYZzR45vAd4iKbKVPqtSnt8L8vERqiYKDrYqpzWYhZBzKMu67t8uUtenprMG3nM84G4YashyXWnpf9C",
  "key39": "2QC2DPBq8X734ZpgSgmGfsez9cAqtqRPjQFdDNiKyq9m1GiweAXhsgVt7gGjg7gwyedwnCh2oHe3NDYTfjwq1LjT",
  "key40": "4wtnHpRysoVzXYSp5RB1GRc9ysqrzJbpyYGRsMqwRr3GJtwHvNVG6RWny7SwcLYMRe8HqMmcCM5Rrzi7PCb9qVwA",
  "key41": "aswnwuPAorWxosZZBnky5V985k7dQHDVXofrThgtFTejm4S4ed6xD2EDtxHLdyh8aRkgrKnw5LrsVgbAZJimRfe"
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
