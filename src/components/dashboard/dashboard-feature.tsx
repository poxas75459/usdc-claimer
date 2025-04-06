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
    "3HKt8b98mjg9EbcehkZZwdL2r8o8oZaT777ZLz7vSgiNFTxuz23FYGyiEfHWVxJJvtzJSHqaCuFCCb4w8HKQdRAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5BUqY7cDQxPyDxm8bqd3X18n6ejW918TrYp4WRtbPBdwHSFuYzRXmgPuuND98BMoqLVv3yXFuLpPcdMoA3UA2z",
  "key1": "3PufHJGscJLb28NsRwgJFQXAMZL2voN3CEd84teGCobWEe3ns92asFJgdEZGtwGRtzcUcshDp1NDG1T2TdYwhHut",
  "key2": "5gPTdoGNLrqUktoNXPsEzTUtiDEBxRs4XXJgtMD4qTeRRSQ65bEDGkwoF8Jv1rJAMwnCU9wQQ7LAzm5oY5rbdAj5",
  "key3": "2J9XqLwJCtJm29LzdJCfoSvaPA3kbrhYCm6N3mUfeUrBnhdUbb48UQ4Dv3JABgoEk56ioGpcvWkXURNBii2PPJNE",
  "key4": "gXTBZE3GN7Rj2FdWgc8H71d9ycz9uXRRqg7UYhDgJAjWaeAotW5H9EUJgqmannPPn46L7hwN18QNAfQuS2QJNCM",
  "key5": "5H5udutH2YJXyfKPUasAnH8WmMCCk1aZwNUJN7T7F6tQ94hzGvFRs3EVqKRaGCPaBCCPvExPcyFGWeiaz4RoNfrt",
  "key6": "447ZnVsmtm1MvTDvMccNkmSxwtk54ES1g16uBP7nbhtX54EfXkEZ1yNse6PfBJbZasVFWcDcBBPR3maNSNuvL44Y",
  "key7": "5ZHAS8SALAYdn9seuja3faFz99NeDi96NpLWsYaVrr45jfAyYZe9HgsvA3N7BrS1mCDuK9R2AM33tswAsnPdeCL8",
  "key8": "5WW7TU9zZio8jboty8Yz2E5Hb6oYZ7j5dnkto5w5tEk7j9TsnbhrQGSgsFNqm1dVXYQRLTh9FjCetdemQn5e1GrS",
  "key9": "5kUbhrk3rtqZpxBnNyr8gEEp65SvTEtoxXRF23cMX21HeAZvATbNFvhbjzVJfDoTaqNUMXRstn6676HEfyGewNbR",
  "key10": "SAX8Ks7pTaJCzoygYn4xpmiBiseRtxm6iQKbEwDTGYW9uFkLJxWV4NXY995um2LRwioZy8mBpDTeZqHBjjFDA26",
  "key11": "36UWTtzBCuK1fDG2YPn8yGTCFcddHL2P4jbsU6Ki6uCtqbBCMVZGruG28QqGonDJ4joa5iYPrtZB3asunRYwep8Y",
  "key12": "GMbGjQrogCQx5imLfTmaiBW1GfhBRd6JvNyk32Wh1Zxu7EF4N5JXsiK33dTFhgn1RhWgn5nBVZ58iUXFwSMFwHv",
  "key13": "63rEJWoEHAiqLK7QwZdxoVv6M3JmnfMLe49eAt22zzN8oPThyJtMRvUHUVvSoWZ9hNyWeE8ApGRvBc1a1gnHnJsA",
  "key14": "2X2aV1Yvm5yHCvEtJx75Hxyb6v62LC66HtchmYovwfLSN5n8QKGonEi4mrjuZkFRadu9y8APinWSh2J8ZQfAqPWW",
  "key15": "4WmzW1zUvqN9RB6CCkcTHnM6BLAPYM9tp3bH6vVfXXoHmXe6RHhTFfJDSh9meU62CUaBpgyFFMh7wPbjKEBgCKWP",
  "key16": "BB7zPDc3esBY8pnuPg85VFYW27kVaVda2f4UKbnA3yUxnYChUuopPT5WHoErdpJd8BGqiErhLeSNqqj1CaimLPT",
  "key17": "2Ep7SEUNd5tPSWVSQPT6Q31osF5njH4mcRSaWZd5oEFzLRxkUfZfU6wNFTrctW9sQwmWGcwEbZGGE7AbX9sYyqHo",
  "key18": "66Vj2BLqFdCuE3KnRQPwTFPpMwoxtaU1vcu39ogsD3eHNpTgnomXdPZZJ3YvG3vu8yCZdos43ownX1uf1S1Axth9",
  "key19": "5xix5p6PgKNHm4hdvYDziFpKUQhHdhDqxnNFahszRYcfPuybF1gRbxXybTxTNZZDXdqNHQqYdAcj19YcPdFJGFa6",
  "key20": "63HHPT6ZGbS76fnVV1Wj9PXcD94S9zDeAZd1K37erW75xvm4dBGPnQkGBUp27rsARWwnFj6jnpFNK3ayDZcrrULv",
  "key21": "2urpZhTHLVaPEHPiusEV9fQPArbJzXgrLJXnUFwCtTC64DGn88eNpwBnaXEwXSXQsvRpVJqhNTZMcD1BG6mF7HDQ",
  "key22": "2SgSxcstrFaqLvDwcxr6Atn8Z1FoF8RxiTmABEXCcaYXWX7TNRVSWQuYtKbt14N6gLPTbmjQYDWhbT91hNB3xuq9",
  "key23": "bsNh2po4NkrZjPpzTLkkeWNvRddCi5rjaMmXuW86KbArk2K7ywJA8CdjavhpAFrJjxjfktCfnNm3qLYt32qhZZH",
  "key24": "4rcY1JMNXZL1UpcX8nNL2RGbEpmcEoLFkZirdQmnU3Sd9VuHyY4YYYBhdTqZ6TL46peZNKGcXWw8obiTYENaEaRs",
  "key25": "3Q1wSNf8CEKgJ1bsSCGFZywvtw1g3jXCP5FehZ7k8Hmoxn8j5E4q5bxPtDqMvMksMrKbXaPhqHSf4JxQPHxXm8R1",
  "key26": "2tbTv8QHSE2QwqERoZfWD3nZHi7H36cgtxxCGN1oxzUMWXDz8FBK8UfFb6kQkzS9ZYdKyZF4LPWfd9PaM16nPWXk",
  "key27": "2XdUK14HmQ66toPbFee6SHzqurdEgc1diUAKNnkP2aBua2AuRksernkG9PMqHr3bdFRVCQiWGJ2GrVMnwibLYa6f",
  "key28": "27B6RyP6N1upoC8sWSWuJBh2UwcAi8dbMz1bThoGTP8ueZSxKQWJUxC8SaHugsFVXCQDKgAbNCJq9yB4Na9Fx19J",
  "key29": "4p5bJCVdXBcQV86MvEaNM3pdCvdZc7qoDMjxJt8LoEvb9B8HfwQqcbQ9sAHBX3vFHSzGsaKsRzP3AcG8xDjFRvb7",
  "key30": "2MLZo4hx8B9MopeterQqXTFUiUiTnJkCHwCmJ15tZhaBdoYkybxHA7RV5tu8Jx2ffHM26RWkF1UgDbFDGaMrWbxZ",
  "key31": "2MFgrEHXorshrQQocdwSXWiFR646A3Qg1dhgGFZMvHpNN1xGdCewb1MWkavDz2gY2b6mYkkwK5SMuvh5WWSDpHKT",
  "key32": "3YXnX6DboZD3HJSwjAgxXr6i8mehEXn9Hu3SGfp5Qqd9ujaKZ5xxx4XhyPiz8LHRGyf6Vr1kyV1c1gBrMfp76HgN",
  "key33": "2KJLGvoKUkgHvki5t4UFf1aNSk9XR7HUBsgE7mXpmfs66HszX1QzrW1iV5756WPPn4NmnEPh1H3mVHnfrW5kyrEm",
  "key34": "3RdviFvQeLttR5omG67pdWfNpemyq7h4Kf3255psNmZ3Yc3nJXJHwvQg1666LqRNMDjjjnQWS2CRAVyiQeX7SnaF",
  "key35": "skDX2UaKkX8WZaaAdYFkYnbYdReaeShHUiEpU4hXi8GkX9tVqRRejhfSUZrscbEWbJbHMKxDqjGS1kmaLBSZoci",
  "key36": "3ZMtF19kNjTTbK1MfA6vjM99wbja7SZsiKYrek5gAzgPy2cavvsW7DcbxHjcW5pZ72At5tZFDty9HQhvuSQUyeNf"
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
