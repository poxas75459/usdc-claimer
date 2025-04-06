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
    "2iG2xLqiL38Tnkvr3U15yx7bUiHXcP7cEHsfgGim8vyWYs2FbJ2pscLXT4LEYQdf5k9NRBkC3r6tDKQMyogEo8tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MCqtd3gZsXMuuufXq644ki4JZvuV8zvNRmzhSaYYUucm14u72f5LQHuxRafkedkBnQPF8Rb46SqnW6tt3D35Kja",
  "key1": "rpmMLLfFFnU8u71aZVEzk4CD9Z93Cq4aqzLi9gh8XfS6fZr5g22t67djXLrZgo7qUoohYQ3JbSQXzzN5oZ9ASFV",
  "key2": "5Lya9GWTfsxEgHePd3tmiXgGXSxQzoCEHDegS1rtY1vgtWyo1AoeNNLY8LgxWZ5sMHhwMDt3An9SKQv1EWJVbECC",
  "key3": "2TQxvjxAiw2WFALoVvB36wjUiPo6RqU1zGB3Jscw81Lx7kNgDiZEJ6Ko2Duigt842PCG3HPjufnJS5SmG5pBckBe",
  "key4": "3RAfo86UqiD3NaACJTP54KF69fXSYUYFafympFhxEFpCWnbEY8jzTXc8uQ6RCLD1XELS6ZY3UQwgF2HzEL2Djvqu",
  "key5": "2DiRS8XLkuqRC6ZH3pwYJqwMQrFjgddzikmJPNzQYv8kwaAacUr8PJ3fCwCkMtSFxNDqaY1Na3nNZDAqjaS1CYVs",
  "key6": "5qqpFGEJA9Vwhi6VxAKGKQmHuVBaSQKFQWtGLr8uzQSLunL4c58YY7tpMYwqoAAMyhUQcACZGgQDpE8rdW4EZW1d",
  "key7": "2DvHCGoueXTn8zdYu8RnJspNC4qVdCsyUK7LNARHuhVhhXbuHUKfyAuQ8wPygXrbkKdDCHjnJkSZcdwgGMK5Aie1",
  "key8": "5WtdPc2xv7HHhFc2FwrMDPQkF7FSJtneoDLew516KnwYmtS7xrLBXiYbPTC3mqaRmqeNcx6XmEdHiNjPjsejFJWw",
  "key9": "5eCG8wXnhtLBgEBBRPpoYSxwKtUpxuqiHpNUrb1qjJwkG2LPzcAHCNYqGQFVAqw9FqctDtvWeRKe38voDiTZxGR3",
  "key10": "23VAqMSp6b1jn2XdsFQDJ4VtApa4nA9qr7QE4wZGkW56u69gecPEVejSjMq2hVLLTjBW1pFboch1VfyDha3DK7sB",
  "key11": "3EjCNB52giW2tuKQ3d9qVr3mYu8yxkokbxGRdURp9AafwU3soL76gb7a33MDKf4M76occ4wzgbXojqNyJZuQfaED",
  "key12": "24N8U83dnS6SBDuZUk2mPdFCmXnvpDxHff3qYAfeCWiX5WVtVTGL9utETxus7wE6w8KnaPmHEeCMni8eKbzqcfDd",
  "key13": "2xKbN8kSeHrMGBRypAW9L4tbwhAW9NAigfwSsnVbVGs9rkpJqsoSHhqAJutL6bs3GB9hnYnoGfFnQUeVVeEjU9G4",
  "key14": "4CFcgVtGy4fSHQmebkqy82LRva91FrfDDwPgVJ7yrD3Grpaj1F9E3gGiJpb19emYRiEgjvEKLw2HX9xkU91CFTBd",
  "key15": "32s7oxjmGsJf2bxPXXWQRbbjeLAvc7b7WQgsVBTFjnozPmXwUR5e3xezzch5wJjdfgQTmvFniE3oCwHqz6mqmTPT",
  "key16": "5YZwxiocj5QmhFqRcUMZ88c46fn8ZS2UD2q4dStF5MhLYt1yKtZuVmFKT4XULzEDbjjhHKp5ADn8jMWYDdm8YfxF",
  "key17": "2cB1hWkGyXd4VFdnAAAp89f3XqUJ2ucCaiq4jBXsU8wYGiKcGMdBh8TLHzGugc7wN7v1QoEGE1hdTXLw3TWmisYp",
  "key18": "2gJHueEpNeeEJZ1AosnG8mNoBGW8uT8XHaZTMjogLph6RJncuu61V8Fn26fkEZAkzce2HmjrNpZxqDNgZaMzBr7c",
  "key19": "p6UioX5bnFomVVXUPar3vxWB47omcmRUGqS3reeqLe9iSvjeU8SGFRFeGWgEkEhfUoafKtx45pLT9K1LZdoHkQP",
  "key20": "7rcb1RcSKSQc9kv1xTnTcVL1XC1pLGwZh94V7F3pEKYmcodNwNHrZWQQRhWEDaQqjuy5nRqyF5pF3J3g3gbi57o",
  "key21": "3DmqGzc4JQdLHUexayksKLg9Q5h2RfXVbS5LpSBTDTNN9byShPP8KPvBNEGLSm3P5khxzLnVB9aqPMjZzTRuUnRM",
  "key22": "49qcwoypViPmueQVwkRz4RgEgfd6FZVeHBYTN8xfFEvbtoBn9h4q9YNCWh7tAuRrpxUJvNPdB2tyCN9fx6zf3x6u",
  "key23": "2MChYL6TocdrtwbsM6soV4hJiRCqFEhLbNZ3voxhrXQWKMMUoBdJpdm3BxeffTrAZ2Mf3EB6qbe7qHhm9UkNne24",
  "key24": "5fZzoBxjAgBdr9nGsAgRTDxMhgX38gGn2n5PPZjWW4RJBGGNGd6Hh4SkwvBqQTB9Waw4ZBBaxAz9jAmVZ8zMCXUx",
  "key25": "5ijaJDp9xeiMNCmCXbYpgDeeBAMDVUJThfLw6bax1fkhZmaLwxfTnASmtuze7oasyZNHSsZe979mqCT1CZiJvavt",
  "key26": "3sBCKxTryeWKcSQgQRWuc24r7ErxUsQHeTcHszuvPKQshrEa1U78TAANEZdBdTvCSbeshxMGvFBwuUGyj7aPJzoY",
  "key27": "UDHsK4UNppG2K22AA6AgFULKsvZ5puQbeQgraC9J57sDbF8MbpjPMZBtTWTH2CuAY4YHknhL3wkRghWa1JPcJJx",
  "key28": "4LtQSrecy59M2ZuiRdQxcCrHESWkaDkrFGEo1RiU8LAjjG8PFvUmKiDQKFEtY5mST548Hjf56rjAUV1owcEG4jLn",
  "key29": "4VMjqdzZiNw8QkbJcjMknhWDPsxQfPKaJbbEVdJK2ygFw4NvkX18RwQXCaYTyHJvTC9Y4Maat7sJxu2AuCPCmUXg",
  "key30": "5sQSdU23N7PjYUsjfLSit5LAZGSRBXBRfEQa6joVHedHmZMKN4TfBd35uMiRBb1ZX6AXiaEtAQW1q5YJjvXnH1aH",
  "key31": "ufsWovpvbVVKuQ3stTCg23EAeuJXrM3WF8VvFtVuePfJp891WHGMXFi1SLRDCpc5yEhkgGYUPotEnd9ABzSHu24",
  "key32": "4SykuqKUCs4ZFBgUBLysoZnEGBjFE9QfF58oZhaFh8bLCqJQWUFz265XT8K5SzSg6UwF2jaVgU3KyagxAXERNK8E",
  "key33": "4pjJxywLV37nneUkS6ihjKnxz7VvyoZrip8LTraC1QnzSBzKwubUgQkNMwN8BcJ5U3XQvm6TFUyGVYG5HQMokLUy",
  "key34": "HGRMkZyzWv1gNyPPRqgGq37ZDR9XDqFyrRNZXFrd4F4yxeDzMUgJnsWWLMHwsD6sT9BKQWQhtPFi1Ccm27VPqpe",
  "key35": "58H2QKKMwNAHjWFCgzYRcmCYJgVRkzr4MJGWgDyqYfPABKxCtmDbmoKzjPkGCbaRECZ9ZuszpGmXRR3iTMdBgRAW",
  "key36": "4sGHcqndkFdgRtrdaVC59awFH4jQ4jrJicQ88BoySWnLfYig734NbACro6qbjhqRQuViZfZ4evAXWDpnJUJa71tJ",
  "key37": "5s3CEx5CQbzthzK82MQTksV9yDJCj3uY4vTkKAq6FcyMN7vSVZ2NJuURYrP7c35UDteMzXV6Hdk1XtLMWPSUcJaB",
  "key38": "2Zfovvg7nGv1SD37WZv12mhVHC1TGDMEHegFhCyhkKhT5ACMSbBZDCXNwYVrsm1Gf2uBPLBdr7evS6PCexY6ucYu",
  "key39": "2AgCreRigCie7qoRqWMPr7xNkULLwarS2reSGbxzPktdPas4wtJ9tnW4tNRpFmMu9sAzrE7NjXM5PC59YqxWrGbM",
  "key40": "2W8yovEAWRbKYcWbUXhzo9Z2fGVhwhDJWVBiJ7hWKZHC2YmTYkx5XfhcxeXNasLvpfNbMa1QJYCeXQSfBFzuXyga",
  "key41": "3EQJAJ1wUhashLms7CV84EoQCaRDGzd15Q8e2GBrwE84RVN82J3qqvj1x3kUw8yU1XmWGCLKPxKx9yq5VtKNRCSC",
  "key42": "122dTueutBUVyBMkjssfXnqaCFQZWLck7KNMnmfXCRK68f9jMjN5XzPCveXonQosUDDveUuvimpJ69eNjMQixh5N",
  "key43": "64P8e4UHNMuqgpqgA5Gst7PeFm2TuUhpeqJaKK5JUDXKEpLjF9S2RfXgtXKxqSmhKPfd4vsrhM2ZsFxkCZoLRoex",
  "key44": "4aEJhhULuKjGXWZGSxK5b6yCjjebbsWtwptL2sKUJcWP4CXW1RwohM5AdKDHqMzmh9ioQNv8QarMtiLvTvqiijRW",
  "key45": "9F7BQnuvwdRu5HuGyHm8qprtiGTo9ucBjzb9CiUrkmi1fBTULWTqHJWcHCTAP562SSubmqyct4a725sgChRRfFQ",
  "key46": "38CpKfwoKdFC3MuAMtnRkRWuZm9R1kd3wXPPhtmxkWzRKFaCq3BKrhxt3NnVNYMkiHja9smda2fWX5wFTBTMZ7Mm",
  "key47": "4nBwyje8MvU1ZSSsGEDVmfC7dhJWTeETt66DVAvxz41gjiDSWJPZkyeMhzhosC6hVuZEHe2Z7nLCMwmBJwbGQnC3",
  "key48": "5WNTf2GZkbCTvhpK68pneWhLZEG98q98v5uwfJ2TH2MxFz8PJE3aokKnFc3draRfHzK8D6GCE45h7aCr6KJTzhTj",
  "key49": "5fsu8PjzuTNNeyPRrVH6kbP4VDyNjADfJmQLMonHbykxvQiUwEQA2x3ZpYGa3kKNvUpu5Uh3uT5bkmbNTDSsq4kD"
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
