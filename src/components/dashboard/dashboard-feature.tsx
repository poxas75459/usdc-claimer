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
    "21ytKUhTes9osqKCJ5XrnqjpresL9ajYuLWKKXbm7rcjXkuk4PJhMFEfbLtAcuf9bZDo9xxHZRTNPfibqdHMbgZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qZFtahLgUk5CZisHpMSDdVw7GyijZ7aNQCUeV3jupqDMy9R2wYLHz1FFp1F7T5e1a6f4xCzNGEqfaJwt3EAVFU",
  "key1": "ZsmZiQD3NYmzoCxnzuzTEttivnAdE8SHqqTtqULMehrv2VFmVFrP9ujPYJfpXM3kPvV6xNtmQGpnrqauDxp4je8",
  "key2": "2tsNys7FfoVFnq48JtDht1SnM8mBti2b3nysszg5wyjNEBA8LEmTxFXDnTDUQQJ5KyyzuUV2ympUM93pBLWRkwrE",
  "key3": "37LEnzt5TE5BQQUV8AHLcPHnagwMrBCmR9LCdkWUYVvKAFRSDRfTDscZpwAqoMLAL3VXpfXWYCS1oyvbZjQuvbpz",
  "key4": "2xbJrCn6oWNFLa4FDF1oSnW4Dzu1dn9M8tG8FuaBMaKZQgoYima3PBHd166ac5XY5W2t8eTW4Tknpka2cfs8gHFd",
  "key5": "4KLHtsGcQFTT67oPB7vpXbViJPp7rJCTWxp8qE7nvW9BQ7LTSRowDJf2zYt72K6pCy9WtFcwUQXhfsDUdD84aDBw",
  "key6": "4BJVDXvTqyDov9F93N9MUeywEPjG8SmPe9VF96cnmeEFm4k5UxW4WgiHBaV3oHJfBp5mcYnAYRqnYiqPi6gxjgv6",
  "key7": "57rCvgkevYK32rGzF7LAFzjebFG5c8qkkAxZCURHRtUkGz5PZqDFEhYjZQweagxPHwsZTGJZAhB7SrPygd9NF8Lu",
  "key8": "5xFvi5RS14eE86Ef9qqE2jXBQYDyTKJwspjrNGYMA61gaAtb2HmPxXo1iRKGKQLqzXVEp1iHMYoZmP88FZtdTt8F",
  "key9": "R7qJ5BbErDgJoqYRJmGyrU2W5X1aujMZVEDRjC5t3KiSBZeJMaxNjRq9c8DwqvMc5jqTWuBzuE1DXs4HzQs33Jj",
  "key10": "5okEMR7cUmHo6coohEPwiDD7PWzWj12P7qsShL3rneNypTTYdAgkQRTeeodJ85iw6LEMxozFPxiV2ZEwTmUJaiCv",
  "key11": "21djvWzVsefpJNTj2JSNMiijStCwMz6ik9YQ7Yh4GwJuS2sBqXXWYN77m1oUWwthRct9kK7bNq4qFzrvzKfS5QEz",
  "key12": "3Y5EuCPnpSJPRVsqTZiSBHMbQu4x7t3BrqHPQB5HuLJgKgfNaGMkwdnmtE4M6SifgRvysnJbFySAVWfboBs7uftH",
  "key13": "3Db9fZcywUA5Hyqx7G4M9mnnSDac6svXuVNMUR2AvcznbcLNxDXv1MR6rFV7zbFSZDgSc6wRoQoV5XxnjTsmvgB4",
  "key14": "24efxuegDTWgEkr5qWivAKUQaeUSKeDJtbQLYEVUf6de53EBp6HdLK1B3HB21PxxRwW2YQYZaS6DRnEBMx6yZJV8",
  "key15": "218SenGRnF19Hyan4iY72iNZbZqQSHiHKpzZZqBMeZV7XLT6qCUULRHSCD7tv7dA551AimHgdJ2vvWhM7Pj2WdQa",
  "key16": "ZE9zr473UAHrXEyC4A5145TWevXvFmW4xze89sAYdESQhC7UunYHNsFPKZExoiffSmnhc5vqT9XugYTDTLUPhco",
  "key17": "4T9Dmy28Geb6rCu2LqMfsB6SAoaxbuukHRnJin2qirm3ZwFeveUbe3UConq34g2vTxJ7EubKKN6Huu6fc9RESCzV",
  "key18": "5EUiqzrDzQKnU8bTCUAsdSf3J7fDSwH2cAtEd2ApBxtw12XQeLjKD2MWqx8XwGKXYZWhSXp91sM6VqZPCmeCJAi7",
  "key19": "5bmwkpvPfSfwsJKdf6wZwmxJotgJbZYTga5af2mbYjmy8b9WtojchuNA7bsTQ4YF4kQFReULnimPy6AnPXnKnPmA",
  "key20": "3AoQ7AraM5DVCwBMxM69JiKizXHidYfFuch6FhAvC1TTBDMBaXiaApvHbfw5rdjj2U4Fsf33Z8jJ3pzCHCw4Se5b",
  "key21": "MGEu5H44kwizhPhsYB4JmKZi2M7TAWVEtTcHWmpgjEcEmLE3v5Fi7UZaihsTNx4jaMpWjL9CTniziJx2mTdZ6qo",
  "key22": "VbTGdHT7gL1hkHa3ipwmrJV2FktjyyTQUvrjuzi9kxCLuXSnKd9yEheoHCKUX1u6yce1jsRU96QMtopmfSTSiyE",
  "key23": "4NCbq4o3jgsm8qJSsr6nvAxbCxa4JSFfcXMjTvQLrBEYEYuy9wASKCFZcYxxghniqKjpRQxZUibUGLnb7wRaYKHB",
  "key24": "2rahHk34yzYy5CKKCAFoMP44qnBraEFJkgkBdZh9de6ArxGweUX6UmSdLH9HjvKBBVaxWKr9A9X5ZzhP5pHQmhS",
  "key25": "3MGxGcw9YXV464FzyuzSuNC2TLz7ABFscdxwP4yyaja5Cb1sy5i58kvRbaBgeLg8mkiAVViKpJoJLsTM8zrgCCPV",
  "key26": "2YSU6p486p68DPwm5enGmGSDYQcGDkcWqvJSS5Q4VJsfU6daT6zdEX34JkbAiPWui4zK8ntdXRiPiDrKujpp9uPk",
  "key27": "48GB7Y21o1eHF5tipWTz67E6aHE88T6EzTkxkYTT8TvvtcZCYCuzTDyUjDzJ79M3qd7TTXVmgKKRhvYhQ4hpeLur",
  "key28": "2kZ7btimNt8MRy8WDeCrUVc1g1a7P86Se18ykVmvzxm3rzmYUEXBGVpcNiP8rf4H6sTvvTZULNYe8Mff3S2AAKgE",
  "key29": "42k1MyaNSwZWr9PPBNpfj2kRrs85LPAuStYofL5uYkaae14oFNma2UWoc1Dpun7N5xv3AtTPXWjwuPjKvam4xcUh",
  "key30": "gHF2AdzCVoUTWmdxYoJbzVNyGLLqMX9KgCWUxgMbBj97QfwMKDBRZSCAnCDEB93QRVE8AuYj5PcjHDmCfj6M5ms",
  "key31": "FEDNCP834vrzPDk4MdjAHaSnVubLem6pKjC1dkXjrkmmr2PzwLu2q6Qpzj6Pc79YnVa5oDRJVDbYWZHRA15q3gd",
  "key32": "3WffKoQHj2qC6v35CCp2Ra3NBCRhLgWU5hf5Db2SEioc8Gmxnki4ecA8j5VwCK5JUJodvXKAbmRJcU22QJsF2SdD",
  "key33": "4P4LZ4KcMtwQSaofZXmnrKNHWvvU6JE2UPDrPpCZyfAofTXHscbtFBrDUc5ZQwf2zUzcEfcvsu9g7MaTQtth6E3V",
  "key34": "sUbgRvwq9znga7sn8UKdLH5gtapMaJTBktpez8D7PXCV1fJ6C1X8Lt7Er26jgX4amNTGU2JZ5qhcPvZi1dE1M5f",
  "key35": "4Rrmv9BJKzQFUE54HnhP94pHt2yKXCVfS9kj27DisVPFDTPFcZmbTMNJ8LoGvT592uNLthymJ8bnRppmgYrTXD38",
  "key36": "ho16BNcBqEGZSUKP9vFwpJXUZTQPDTzUeUB6PZNABKwu73Y2YtFKWQn3JH8JNMAMK9jzr1rLArkegfuzwFuA9Zk"
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
