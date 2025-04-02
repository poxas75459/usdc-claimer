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
    "5APyB4GxMykBG9XmX7bwQxBHGYhtyaUD7Ajp91FTZmpwN9Sx3VSZxEFUbpXfNmozKQzAgY1rKtiGUgJ3EbLyP9DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fppBazJ3214MfuY3UytuRCikbZTk7ZKQ6WJ7dPoxc2pwdYukwSaV5QWYxAwf51M2KmoJsMzr8i3WMdv32tdczcJ",
  "key1": "3qCetK8PQHKT4niQM9YsUFM4JDqJq1eNdsMN8yhK7jybHHVJJDFUQKe1rK4Gc8aoxk9nftMNAqa3i6qzoULH2Ksi",
  "key2": "4WFeK5d9J5oLMCGBcyXCanR6RckinrC63pY5uSEjB3fm2Xdu2iGasWRwxmATGna9dnuaaJCCTMZJZLgQVvYxjf5B",
  "key3": "eiJNrQEwmnnAqDVbSokXSoCeR4yY6NTYD7SmzpKP2EATHT9Fami84n2MbcebMhBX82fGJxtKCeeyJi3PBgkXpja",
  "key4": "5Hnm3DWFbnoPvssSfnXjAHzgVhzoNVw7BfcSEqAoq5WD2epFS8W8G53WUBRmEiDkhMBFBDmhRtYMjPaPhHr49fgo",
  "key5": "4SiLjw3TtMn8YTiEb1fBpZcDeY8nFq6CpxkjfYMJ9z1GRDmWEjJcUCeimZfy7DJrt9E5zzeRhe3LfeFwgrdRc7hw",
  "key6": "3XcbgQcpE5HoNZuNyPQKkEeozK3uBNDrDtvecB12cRZUNeKjGVd3qYpwi7RJLrEe4xqu1Qq4NLHxDbuDoWU2PbqX",
  "key7": "5mxMnHhkofDJvcHawtbA9grP6tztoog3WFWNq76PynJiaLd2y5mHnRhTMGhCWcwD5ZRwUG9poZyT6oZiS6rBMQBC",
  "key8": "2jcrV2LAPr8WkwfYMWqv2P81SPSRMyr5UyFDVp5aSCNxSFLy5NduExGNu4XZkXQcqeghBaY9FCg2fhaZzV7nmLV",
  "key9": "45HrRoQ66o9huTS84Kesz8Jg8QtDu2H9aA2qhW6i6f111ss6yWmjHVo5G2AkCttSAk2DzZHZZoC7XMrHWwjvwVoh",
  "key10": "6FUXC6De7uTQCGqab6Nm2rRbhvbADvjPevjsAMcnVTkSJib412gSSKZAzbg6w1ZFgZdeAGJwVa1BmV18SxxoZkJ",
  "key11": "36fT5W3AB9mJGoKqkSNvAknXKyQEX74SWC9fHSQhSXNx9t2xWYDivwua3QQRoBR4pUZckYb16Kpv2h3S4GUQbR1E",
  "key12": "bQ8F8MgEiv3w5Au82WGYmacjNuxVNzMFBebxBXhGTP7HMibQvbeP4GZWXACMGFaT8P7TpiFz8Sh6fgzfPFV4GaL",
  "key13": "2QWgsRLRqKMAEriVYpEpygVGa26ESoYReanNCRmsjTZDht8g585wFzsppCNicbw8rBFqevacq8TRNgHxCAStDZen",
  "key14": "55uSgDqJfkzyqi45PjoUXgEuhWA3sBitg6styy532KZB9rYcq4a9GE3zSF5UqTAqMXSbFyt93wEVgjPPtCWWikMD",
  "key15": "3NUrv276ufBi2D3VKdCHVgnK3ogwg5qHM4D92zwv8dxqNwyDwGjy4hBRwcKnPRzhqhLr85JHJY1AtP9j1yB7gqWK",
  "key16": "BFNhWP9wWu7KLAEe91zHSdmCPkSTzMTmT6f7qExi168p6SHyC5afBaeAuTQcekbRqViP5Q5BEoPii35aJUCeUky",
  "key17": "5havtDXUmS2PW1YrAxbzaLgB3e55ZR3qfi7VhgjjUm7N1syFudUpMWr7KRSAm2TUdaZZEKzcjT4h57J3FjEThv3X",
  "key18": "5PKAqSrrFcLsgsMcMnfimCyXyCZgV7Wuf35nriJW7Z2dk6vVH29n6m9KFZsCVvPFWNNXrDVSnJshbgksCiDqfoiG",
  "key19": "2KCRj4iKwKGSvc6mF6PrxS5ugw2rnfbbbXUuwfiMyoL22KbG4QSVL1iCMeApJjtgtkrhaFeQpJFeLBuhGXRr9zgL",
  "key20": "4aUeLYfyC3xXDfU6g6f5KyWgDaxgGcbFvhDnjqV9KXs2Mg6A6tcm9GVVSMHvEQnXZZvdYwbzsnFZmdja8bFL4ffb",
  "key21": "4TXmQGAKukAZkYZVCYegKsnuqhZriRfe7kZGsxZvZDekJRbNQkcEz9DH6WJqfQQfdHU8ft4YxEUPPckcBeu9zEGr",
  "key22": "4xD1cgM9aMfDyqMPHRxQpHxyvxYHbd2D4krkRV2TQyumu1yub7zkTxd7xSZhNFvRKDarmJ3hWdqpgUyJqUB3Xo6E",
  "key23": "2op3u4knJZUoHjPNXsLXJNKfehz8QnpxDDb5FVVJKQSL5GAj9PogvzJatXZ6CkgR7F27doxk8kxmHzLVahGuHadK",
  "key24": "3HhPyquirEfmmT47yXyWHp49dYovSCRoGUTu2873FMPfSTwKpUxsVK99FA1YRxDeBhWCQMNxJ8v5XWG9jvZTmznC",
  "key25": "3yfAqdoCs4Exmz7ivW7pgDePhEgVSKKkdj753o8wHUfoFiAyAQGKvVsgVpk8jVroA3kFtVyxSFD639why7zdQqY1",
  "key26": "3GsAW4p6BKvUdZFwo9B5pF3MkVyUq2HCyKNbVt8pcyv3dsH39mEMdAsZnR86iEkjuyFGkaRBe5g4vaMXpRQKRCkT",
  "key27": "5NCYHGYWyg1at5HuMSBMuew426CRoSAgtbLjqaNQ5rJgEptNZ6yvT7rVoCuyjdQcuvGoycJ52zYwpnZQVwrH2af9",
  "key28": "4hLkBqgLoD76sQyHWY8ayNpGywJ5E9zR77eCrBGYD1GC8y5y9ifCG1wPE9yvo7TxWzH78mVikdBP7CUaW74S3iVa",
  "key29": "33HSqQ8mMaifEye15kxdh5Sf9sApzeP1iL2SzS7fPJLbbHxQaVrJ8ZYV54JrHmXiZ3fse33wtqr4YQHVLXrHNfqm",
  "key30": "2uZ3wFgkLZiYUU1cnpWx5rt3sVYReCvaEDfLgcFjqUcxGHQcGkwEWzwRfqcR6EGRv9efGZHMEYfnrJhV4cZy8ZgJ",
  "key31": "8SF5yViKTdoangawiRfteXS39EzPQft37jVYDrzF9ygqhY63ULvv4r9EE1jqNiDrgPB7asSERYWG1K78EtNgXcx",
  "key32": "vKJCAFwSBuNgEpqeQqhWpbN1K44qk9zCABML2hPnXJf2QLhTZkiQnwRQwgTp7w9Bmo4Zs4gBJa1X7se9Q9Ad2E5",
  "key33": "9kuyqoitYRKnWdTvPRiFTocusHcSCa2dGz5xrGS96Gax6k7MZK1Dtnhx6HiLbqz39rJwLFbcktTEPttVg8r23iq",
  "key34": "4wW7QivpSuvMoKRtu5ZGxsaFs4PYHXTKQPWG7SusavfWaYAJw3UAD8UsM5HgD3pnozxWfotfZGHctpjdWGvckHDY",
  "key35": "31R2GTDsXCDK1qYjQVhKtiAJFhtgJq6eBKRoAruoNvCHWUYJeDYZ7GEVEMjk3jY3vDSBQK3wKW87XATeKa7wRy2T",
  "key36": "3usqRgWCbXLKoGh68K3JkNATyF6seXQizX6ynKjHgyS4hPU8ddYJoVhKo8BnnKh3vREtpRhH2gB5cg8gcBmAPAj2",
  "key37": "4F8cr7fY25QqJodcSXCAp2B4s7uc3EBozsxEYQN6fr1q5dDeaZUPsZQrtZb4i6iGESpaJrRjyTDWWGepUTKUo2Q7",
  "key38": "A2HK2Bc7P7mcZMCbDK5e6QynuiBYCLRmeVg13eAbUaowTPrUVuV2dDieF32daiBxrkcNzcoMhJoZkwrLZ9Nn82k"
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
