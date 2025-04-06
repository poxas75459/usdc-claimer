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
    "vsYcFZcbKk1D3tdKB398uV7GBkvRhsExKMHH4sj7kw5t146FFef9GegMYM9f6szKXwNciGiatry5qUbH4F3Rp26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bbgm5Lof6ejYJczLXD3a4qjD9L3VawBXrqxmxcR7EgVcZqDk6k7DUZ5voeXsSTBxgr5zZXTz4PEAGe4ZDYX9dhZ",
  "key1": "4Bcv1fit1MkwTkU2XS9yZAQzq1ZRNnDi4ib27D1T9a4AuqNEZze25fkXVRBiHRg3L46qLssNF6mPUGR1DiE1oZuS",
  "key2": "2UfUitvYKy9Lz8vu9o8fB71vNF9ue5atUZ24LyS58Zw8UMJhj34i5h7TSQS5STLc2N6r8GkhvebYLYAPEht8Gyk6",
  "key3": "4g9QB3J4pFjnSuvbC2KoJHAhFhAVrTqpmCkFdyZvruyF9mkfM2fQ5ewKXBtBKsk1THoYEoCwrVpFntiFsnq6tHDW",
  "key4": "2r8u8GPXUiC35FjmBPEQiEoQTbJ8fswxn1apv3brCWHSUX6wLWyzQQBRm5wR6Kastdvfh8cnm93aMsnDBB5doGQm",
  "key5": "5HdXCJWKZTpiBKetQDZ4c85ufqCkpJXuy8ayBPyJ2qf6XU5EyWDnMz18d8TJpf9EF2vK9dwovsRniQ3vDvHYGeqD",
  "key6": "32HwAzagVptcwmsVVBPyQZ4iotFD1bF1vKDDqwYUxoEDNQGnBv35FXFYt3tjP3EjaU6b2MxrLuyTFXwrUkZwAJMp",
  "key7": "52shJ4W3accVXstKspK53uSxSr1mGud2A9zhwN6U5kXQtxzuZj6LMqTxeBqHTPKQfRe6JQs8ksnoKRNrDYpqHT8R",
  "key8": "4mvug4KbJGRiSCfv25PsxqpzXQiDV6XZekgKvZ8skyx55Dz8aSmGqNccAUeJdyEnBNgUQGMPu5ZJjAsiUsrFMeyx",
  "key9": "4dMnaaXRx1wLqa1FbAN6Gnj7zg9PC9z8E6DoQdg2SCJPFGVRB9dYoLD7jGUbcidjZXDkEG2UCmw2migRpnKHTU4B",
  "key10": "5fFJmTatw4V2gbo8vM9pdcer2vyAZAL3sXe5PQysESRTP8hsb1rSyu3gZ8qJQLiCtoqjJFRno7o9y8yiVeYT3nnr",
  "key11": "66ZRU9K7vuXChrTbcFoVXedwF5HfMrh1RymEDmmQ215wPh3cC4MwdDbVk4jUZkbJemwcTXwTZ27zKEECyxWXdBi7",
  "key12": "63XyiSGkvxLg6A42eStdeBnZy2EtDz8R2rUMYz4k7XUzcJzapNKusF7e32Xrjpk1zHZmgrNTAyY2zAYB8smsDc76",
  "key13": "2ToU1x3MfJKSMnzReSf7YFKbd4SX2VeVJA4i7aFAFtfkLBfapF2hVcqBWthmsHxeNSkCmVMGjbgwSvBgbPR4JcJP",
  "key14": "2h3nqHBFDbqwUSyj4xiqkxxEkzkzZoY8BnnLGMPLr31sLpuKBdfsRXshjm5WvK9HELZsN8iw4fb92DuF8aC69drn",
  "key15": "5NXBsuyAfoAQAQvumLQvxAay39vb1k7C2E1jmaa93Dzn9JRkbVbz6CB33wKXaLyksyWgVZD14BwYHCx3kLp8peXs",
  "key16": "5rZz5RCFanGAUHQKj18vEqZFEjg8P332n83XKQvSjLrB9vPvUqAshRyBV1HfTAApRGAXBnJqFLi7xfBcjtppUP52",
  "key17": "5sMNEetNBCPLG1u7H7RAozBqYH1iVN139gGR7MMQWLxPfc9GKHStsWN6uBYsVEJvUMRRjkhTjjUkNJ3rBdxEnL2K",
  "key18": "4b7bfff9FyfUEvkgAcfp7F63erRmSftoHZYyUF21qZKpnkQCp9vrn1YrBkYnTiWbJtdFgdnST2is4ZmFPKgN7DW6",
  "key19": "4rrw5e3tZfWXVP3YXn9exqtbLfPVo9jtVF1UxXWmL6iw85rPfzknDtU8rN5Lcxtdd5PrGrb5K5y9poYZL62kZWev",
  "key20": "4UNVrFhporAmmBdJ27SB7ZU8agHbibj2zRgBJvk97bbRsFNTSqu3R3xL3ixyW1HWmjJNz9rh4jPMFqjkDryg8utj",
  "key21": "vaeXst9wYAwwWENeG36WLUPfs3N8whMMUWCJqsQoqsgTFVYKJ9efQGjYZYUXvpUVV4JaBM3aghQUVrHFWMvNBYe",
  "key22": "G4dfTskFuzBZuwTuMdN4b62YSk2aqiK6F2PZvnDBR4M3pkihk5Mb1MHzvXF1c5QJTJsqQs3xcJiE7AMJui95qzi",
  "key23": "3jaLKm8CbehHPEzLhQvudnWiyjFmHhe9VREE4LGx3CnzrGZ6E8HbFJYQ1mptPYUJjKsEq2XQ8RfRDdoqCjtdqis3",
  "key24": "5vYgFoBggDe3qBrhTYvV3FTWoimAVeEWntBZ2GzYTjkCP7Th9y4cra8SwPy5LPxBiauhgX9tWFf69KHup8g8xPti",
  "key25": "5xo3TSjNeHYqXxW7oRpuMPKxN8e8hMhC5Vytu48z6rFw9hhX9yKrvJk3fvA1BHrAbqf96PLMdd1b7PkBi2daEPjM",
  "key26": "vPmzU823LZNJP93o2AyNq1atdcP3hhnqiMfB1u4bVhLuygfjtPkY7iS6QSpcD7LShth4UkZ7gNbsMBXYKGC9Xz7",
  "key27": "2Bc2vmWbzrHf2UfdrMZUrNAWaNPDuWzggvZeRD7is3dML6cJ5yAmLY52Z8PTZUgMAWJRZuQZXQUX8Td5yodpbyxh",
  "key28": "5V2rgToEADiSNJ154JyomrECzjmhEjywuWkThYZuSLVZ9urhjBtPLaj2bY3TnQNLJcd22QJ6RwNdqJQgazYYuaM3",
  "key29": "2Y4qRdQCxGQ45z8hzjjMxgDVnCyef2AWwdRX2jHWaXSWaCwhfrapymr9wxBgFVZQ9x9Pb9okkuahSiopyq3ettZc",
  "key30": "3JeZo4jpmGutyMXTinhQSDQRBQncD88Ut6uHuc52MoRY3XxVNncJ2wZJqEwp53rBti48YXu4CU982BVWWev4LuD5",
  "key31": "3hEs8GCS6XdJVCSfc2fs2vDyxtCi9dEsomrYFoJHfm8CpP5JUZ4CV4RsQARJuXCGaY33wT7cwyg9kq3C7eeWd1Hy",
  "key32": "2AfbJdRzHBhxHyb4iXT5YoqfQkhQTxUQ4pGAuGmrUSpamf9hziwtZvYrjgLq5fD4mVRAnfPDMrjYTD9qufPBBn1Q",
  "key33": "4g4pVSGPMP4zLNcHZoF6iqKSfCw21wbRAc72bXwtpoLY6zf3Z7tXWkhmQM6L62mu3WaDr2hXJkThvMRPq6YtyuNB",
  "key34": "w7J2du7S39UH3Py4RRxmakNdfJCUuN1Siz2XKvdY1Vs3iFn2KUZrWmNiX391DFP2gft8ouUTG1uvTSdMqQ1pGUb",
  "key35": "3GxuNHH5EZm2pnKnZhWxgFWtXeS3bPHoRuT1RHnqLHy5PAJGR4Lbq1VRUSRBZQWwWgrmyZYYX96imkgGdfmJA99K",
  "key36": "4stDbCedytruHFCyRbmMAgGqm5dZSjq1JJ9b2pRR1TZtycM3EYMW9PDRnEqDiMhqgz2izhxSRJ7iP21jrtXjoQZU",
  "key37": "4PcxhL7riBCftppdCLNWtWokaKPgfcKZNGQASXnZQN5R77cLzX7aqSR4q8kGBrM8hAWHGg9E9jBjYuLJMcVq2qEL",
  "key38": "XWVJvnudDzydqdgqBHaF5NJvgsBryJsV9rTj8N96vWNZBpvrWTMMngukwKDBB5UAyWsw2puh7jgbBpLMoGiFdKu",
  "key39": "5Fq9oXDwQTrF3iUKzHLaJLa7fp7eUaoNDfbDjJKUgNH9kk5BZM1R8nKkxGQhGdb29zu2AaxZYRov9j48HLvb8Z6k",
  "key40": "3zTRoEA3DSS9s5Vw9C5PUnRQuB4WK8mXSso9nRVtGS4gCJbyxFXYtSQHABdQNYGRPGLSzxJXPPCwrd2i1476GuLA",
  "key41": "3mmyWug3SkpmWyFZ19n6gc9TcB1W8kAtGGSToodPbvd7Vh9GNV27K1fqeW6aoPWdGWoGY8yAcPYinFtU4j7aXGNS",
  "key42": "3nPL7yW12rW5hTzhhjJiYpas2dtDQYAQLMYQ1cWTMhWAixcmzPh9nJGch1froUQ59jFcZfordPqh4aQV5gUHXnoA",
  "key43": "3h3cgsqx9cQJ5735QaNw7QbCPxNc4KaWnixK4NA8wYxK2vhaM2JqqD34WVAeG7gQYaMz8Y3EMkZeMsemDiVRG1SY",
  "key44": "4W9yYvLUJgCX4gqquvktrge1Av5yTAvgQ9rbKzeFgzWXJfW53iYJNv5XRzNbQ9ijXGMsAuEhF2x69BUrbQWHEDnS",
  "key45": "3Y1TQXHKd248wQZJAjGyCGEbTDegxEFLAt8hvBD9tyC5s4R7F2y82fwikWuknD1EFuwD6nfdLu2PpdGn7qUeba7G",
  "key46": "2tUdGC9S5GyMZTPyVWCMjCHL4zow5WZaUdXFzeZm6HXCr9TeRcZuVAjNhM7yfCtwF4ffwKqiHc8E4THL1rrgMtLt",
  "key47": "3NdamuCQkh3NumEvyH2KEuoM7WgK9uprPCNFRvJGbvEDZcT2k62RShb4uDPtYVzv2T3YWFFrHVQ3puuPJwCNMEf7"
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
