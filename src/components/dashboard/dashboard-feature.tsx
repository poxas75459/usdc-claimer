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
    "2Dc8sRJb1QdMUWtj2eSzPm4EaaEWPNpv2wrcyP9pgUMUQQrrjYGbhH2UTtQ4dEkyqKkMuniH3smcfJV21vbPfoPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRCBbzSpQCb5Csxqdb8C59WH7AA3bvyurw5yQyZSzjgBLCtcXxHD6tgu5hAkfECD6LYt7AQsDAL4R1WxPVs8HyK",
  "key1": "4TxKnVnvqBUvsxvGhsKsoWT5FxvfV5krNbYXJqxKrK5w6WPDWgAdtwWAqGYQMN6nd2dUtHct6D4DMstuBdwREp42",
  "key2": "5wCq7NJ6HFRVYSDCYimXoP33ycBn4bZiXVxVThJtyjzeFikuLSnUUHov3RmVBRK4X3SYKAf1fiU3R1o3j92iT9Gg",
  "key3": "5HpVneDjqir9z5yuVAHuNuU5YYUsPzkGdRpuauBV9bNosxi8QbQ35ospdGyBu7w9tmLQpuYhqfkc7kNfjLry8dbm",
  "key4": "49SmgmrsFRjbe4BWMkp2CLPDi7NUnPNqboyCkugsLAdshZaFbv75QWK2vjT4dwpV8qcMAMs4DdoCvVLQduU4wf4w",
  "key5": "2S9oZWKvvJN195iNZs4pifu3eJkoPbfeBGukqxbKZoQmtgcCQ4dS4dyS3y4dV21wZDAxQvam2CvzxUdJ5wrbEL22",
  "key6": "9QgiFiaiBCCZXzuphrR8zWnjZCJVZCyYa8BQ4Wjdoq6SwkKuSpDCW8FGVxJikwikgwoR9sKRxuKM6Q2TyLtzsdT",
  "key7": "3vtaZUumMefjwr6J92tshM3Ew4fTGRhe8ArsriQLwNCNuW44YXNUxBEXnn75TTBLutAjxUN4NiC5ux4rFn3Ath1x",
  "key8": "5APQmC3DrhjfPQai49DczSrsa8wubtWVxqYmFDVfzdSG4oJdFvuynunz12huy8rGSc6icMETt3rZv2pztm3mEVS4",
  "key9": "5uXNLyAngMJP8jA1firSXEaWScBQ9vAS4NnhTXVW3xZjLkwqBm7H67n3kfWxvWG5AMnL7Xot1YQ5kACmbPnhCfXj",
  "key10": "24Hn32TSt5BnNWp2DTTwFfo73prvhG8RQu9yGaP9q9jZeBKQGPkoiHCtAwqmZvx8GZqUXdNgadkwxAkh4engX3rF",
  "key11": "2f5AjrBjNa6vrWt2vTE3RwWn7KyXrfje8nrGicCFxhQopstwZFwjPBaaJ7DYTneVg8LLPTHEGF5iVJg7mqJY6tDs",
  "key12": "5AfYhE7D4sMXHR94pRWsKEXnCr1MFNGedkuTUuetK86dut9Bp7BpQnb19GZ3pcD8Cuiu6o3CjE5gf1ESmzasgA34",
  "key13": "2ZVLX6tWYcque7bGKfNFdKUCn2SUap9ECr6bRyfw18arrLCVmzppsSvaUK7Z63UEXXQiUd6juJDZuLvtNeaRPmh8",
  "key14": "3bkrw4apVGVH69DToW1fLWH3mNSmqLES8enHs5Dr6SpQCCa6yxPgtFML6fGfrnomazn2972tSUMakVMou8R33VdN",
  "key15": "2TmsV73LsLoWPnXbAY2sA6er5hAt8czAFnvKQ5rXtLRumXNizxVzM7skKRHoL9RcDFUx4xoHg3eWRBNEp4bTArWU",
  "key16": "5yumhYUWBLfCFmUWjTcqHNRm15hDgaFtvi7QEsjwomk9MWVzDZNQ5ouj92uv6ShKSpSmnQSU85RKHz44NcJLRg8L",
  "key17": "36r1zV2Jqo7mFGQTe4JVBWf2Sc2Tn22QqBdQ1coLy2cAcGLiTgZMFRt4m8WbcrzYH5j72dibfrbkDJzJ5QoJBLFB",
  "key18": "3JhHNprizLCQpE9RUeo3XqmKUbm7qYUiCHerbc1cECKZWZfcW2YwwLiYXkPMcuw6u75RTYB3sMvEAroYHcnCvchD",
  "key19": "5z9NzSEEQNRjfnAhuPVWD3enoohGSCGT3xBeyFb2PyHh12yvGNxxUfm46kcAerckdNttb6YDgpL1Ap9WYmmFqJFc",
  "key20": "QQ1W8n6TE8kG3RkefNigtfbEXjP4KARZxNTQ2sRS5n4CQWrKU79SU5sCHZaq6U9BBHBSQXBTTS8hKtKdbbeXHx6",
  "key21": "5eaFFyfNwoRKXF2Hiyrtkzm9QqWBwZeHo3vJqdXrswXtBqGoYEudeh7gjY6crXaXynpe4K7hHK1G9DSYBQZiphf5",
  "key22": "2HbAnoyk4jtMHjGKW8ePaxkdsYBFDMrQmkamZzV9FZvpbnEptzYMDDfB6xvrQDxBURC5VUNggXoaSkEdh8dUot1i",
  "key23": "23xYxbvhLKFArVedWASVwZjB8RTupftXhSfPrEvGeg3jWpeQzqT5HfTtL1kRyBHZf3GQS6DKhuVSzahx3BwS9p5Y",
  "key24": "5HGLXVuuSrZDpdmNh9kPQRicNWB7csxrCD3Zt73ovnMTQg8U3PAsGGdYNCySD97vLLSAvbVKMQ9aHYJ8GL1MM6Tq",
  "key25": "mce1HSa8RSwUnxP5hRRCiftT3jFkQGENppEjVNyWRZCUM3Zqidbg1no2nGThHQEJQjgAyAYQbm7QNfjxKX1H1wK",
  "key26": "3r5KbMh1FkwzYgZcxk9K4UnkFCoToWsmo5cHUzveoJjEGC2W1HmLtStj3BZ49zWT1o4KwndnHvD96NfX9AKK8Jir",
  "key27": "4uFMfoDG4A381qUfVWvmu6MbwBMMMJXTMxZm9txZu2e1pFvAdYWuEwV9C4kJCyRVquS2717onFMFTGd2e7Xhb2bA",
  "key28": "25bKzRAYSB55VX3xNbRBmYfHownU4bw6i3YecyT7BgXBnDpKxxVLWSqsgtTejBajZbRaMGMjALwLkf1wG9EtFeQW",
  "key29": "2Zzv6ewXjEeSU4qJACU6VqzfsMdPQcNs9nEMrgMMBzUD1vmCdnVPw7vvtxaRY2Qk1myRHYuJmkYsr4TzoybLa72j",
  "key30": "2FDKmktyxAHR71JmWkmhQQ9zNkdjJ5stxNTyjDS92D2iZ9vDkN8kry1my2ZSJQuWNVs2bLJqBb7H9q8BwJ5SewQw",
  "key31": "3XwiLZAPDCm8inPPtKvnV9EDpVRSyc4GLRNesdzJxJgMSHCpJ2UXDk8ky3nQoYJJhjMZELdy52upWp8oy6x9YXNi",
  "key32": "oagRHcPpKg3z3PgaMBFj8t26SgyVMQKzvnmm5LG5skZrSE28F3Vd3NAie2TeFghYcsLFYawfx24MpYUZskWei18",
  "key33": "5W6Ai4r1Gbr5kPQMLoJEiGbRSfdaE7q4HNYvjn9EoQUpcS9jVQqh4BFfhmT7xe22MGKnKdpUNhv6HRupqPMQDjwX",
  "key34": "4EwuAyUDeZXBxPB1EUgoQJ7SsR9z54wDMcB9kkY3k345J21tcvv86Zpt2ReYqrLoKuagXH9jGXM7gQsFxkGV554u",
  "key35": "5GNaaDk8hYBiFGRKSy6T6tNtqSsRMtEr9uFJWVY7z1PAfA6HxivjWSgwsVJrvtggJHPoFhrWGjvKysyddgqsAt7z",
  "key36": "3a31aQSUTrs8Bta7CDD62Aym3PJM4XgVtFD3KGo2obr9Cjraq2ryFFiQDsKZbWWB5AiJb6T5Z3BtyyY6z3J9N1sA",
  "key37": "2ZgCogNPvz3T7pBrgvFGNQvpCqWNHfQNQdG4dB4dAcHfDm7Z8JYL7JeSP442x2U1GBV7ix6AxNA1TU9wfwx2qZFJ",
  "key38": "3PcHYjzFWzzELHgbhZ712GkRUUKRc9GMa2DPRYZtmoYJSKJ6J3kvn4oECF2VW9Nk7Psh9MJxc7A2VjGXSPAPQ9He",
  "key39": "2wx3PaKDZq3Ntqvzjr1gLz1XEU6d3ofnPp5J7ucaoe1fDDg591NzWYq7sWfLhpiz3zcbB6FhGPyQ2yvDJnKexfjc",
  "key40": "5Lw5E5qskCpRntwANNYc4mwJxDEmkQvKP9Be8yo2xUdSrMA4mCAoPX4cqiTGnaz1JS79BFBPiDNGtb6XubKDpPFg",
  "key41": "3MUEZR4HRXwkVFTvURHoNhCKMaRemJjKjnGSPFUVfouj5Pfeb9C5Fgd9pt97mMZWvTcdBtWDkqofyBZ2vDamN9gS",
  "key42": "5vmfXKQP9nrWiuQbjAGeSiuTTekucMPoCrbvPnyPNDywan9A3Jt8phkKJpyMxvnuUEeYgiStAjHYfY5GugTCsWZD",
  "key43": "5TZzTGkNo9mmVKvfvRWG2criLuPy7zYRMyRYYKdZJaVjVVCnQXXopYkg5bCkeEV6dotnWncSuFWp8fC5DmheAB2m",
  "key44": "2asPCyksGVEPddvF8Mfm96XK1R97hZbKFCTVVb5pcEhn6jumVUJ2krrmCXu5KzpMiBB8AgR61G3R6cPsw3bzeiPM"
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
