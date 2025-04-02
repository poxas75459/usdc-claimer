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
    "2CtBqYmCisyHBSEQFVvx2BxYsasfzNVMvDrfWvEmS6WvrJhQBUJZwA2VgpuR5mQqCUwEgFY1QyKvYXSHstsSaPyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311eUtKXeeCeMzTmrVVyBm5ozhjvdVYjGMH7DShwunpAcHDenKE9QEXzcygHkSP3i6tawmaCGyoZDpiUqQezJnSe",
  "key1": "2PzB7DdQcL12XHp6vEcYXFaSbfw2vCtZQGavg6niBfQm8B4Uysn4hCTBkKucHHsrKTF4C5dWtn8aewn2oeQjAbB6",
  "key2": "3k9PDNxRb8rgM9RDRet2nTAodaW3g5329y72B25GbdLoSwR7hKNtvcURGMbwvbvFr9x4mCuZyg4NSTbHxjp3xWmH",
  "key3": "e4bU4N42UP1WZ28vNKEZx3n2UKzUUJDBxoMNqS6spb1vX2nXqw52BE5WHRqyvExvaxx6cAra6aoVGCPzVjbzbfa",
  "key4": "41Qs2fpZXpCb7PQfTCay2LeYVWWvEKxGVjWWGJdnEn6krook7jHVyaAUKQzGFsuW2UdFrJQooNPZyWKrZUTDGft5",
  "key5": "5MVvtNXpfyxiFyuKYc6Gt7MrWkBdcJqgbQqZaWhZSpaaoZKQNa73oFKaygqVzxgRknZ2nP9Zr4Gr87wX15mQKHBh",
  "key6": "2JrBC66hTpaqfbLngmKCGU2WL8XXnC2gMpNThUk6UFsBDEfG4CoQ5GzBoNs7NMYLDqL3q9P1DvqZJqKf4zRCJ2Ps",
  "key7": "2G73gxunXJ7NbxC1rzvA4LzxpppfaxBWnA6oeN5gRpr2gvxZJmpY6ND8D2WeBVoKPebdLzYrwusWrJxqDn7Y1jRY",
  "key8": "3FMj3aNM3spPtg3RYAa9DuCnHrCHNk2eeUvx5DZtX9PiwksgCW2SYBQJJJqyR2TcEXNLQB9RwSWP2MaMp64EWn7j",
  "key9": "475YYDcUvgvoanEwzWjCHad5UHzyp4V3Cho734ZfhZRff41NSnuXRfDZT3gAVesvVRrTTJaqA5AZbU4WgjFJ6yG2",
  "key10": "4yXVZYkaA8SLLZchmU9QuyeqSyiuedBppi3h2M64jgdd6WuBPDPmibaKjeCY4XUvnBQtRHVcHFggdSErkRvckiQH",
  "key11": "39HBu4VShHSyojx9bWcKxJnUMNdVFkbn5M9KrDC78vTrZFyMhLBDFSCzbV2ecZyQVjmRF2NHKUqfqixyWgBRNmTt",
  "key12": "4jaf9xbVakohu5CjbxW4BGC1jf7kTuw3CdpwpvjspR6fff7PughHLhuUacN19ZctsWzeg6ZnqUQWKV74NQurgyeq",
  "key13": "rWqVn66wBogDyZPWJJmcGJvS6FQi95pi2LHtiksKK9yfaz2wkPtZWmAD7m5BZ4YGZ2mvVtwzjQ7oNJqzz5erNd8",
  "key14": "5BMeDbwzNx5fnb1zc7LvmDaJgJQLnh2ocn3U6iGU9GbUjKeCBYD1eHhh9Vv2AZ7TQoEwHQvdbFPRYwv4iAj8uqPW",
  "key15": "2QLxKgRgPusHQgCjdfPCH8hjtGCLfm9nwVZ3QCPLg6ELQM3smBALjDgao9NaUCPQWUhb6J4M5vDwHnFEbEhATfaQ",
  "key16": "2TU2wkzsWE1mSxHEQ1k8oNvXrKhwGSoMpT6J4Sk2b7shao5r8xFGXZUDGJfJ4oLPaZoLPGKdA4UHc2akZkRRXSbu",
  "key17": "3jLrcdSGvx8EvqQ2kQrT32GfCnSK4PcfKXWM2FXGKdCCQGCcRHaHMCDNs3SArwhKZnwaAMV9st4FemUPEr6iwxt2",
  "key18": "3RD2JjQYJqKogzkeBA9bSjpQ2E4V1ZKvDPTanVtu8Pftt9wpzhg8LwjwqgWztD6iqGALJtjqQYxqcbVq6uxA3aBr",
  "key19": "35V5TtEUauaosaToJBJucUF8ebP7KoAY3KngdXekxnqtg1WHkNaYX2GnZajK9BRjnh2PC4N7AEuunbj3wwZ4UWeN",
  "key20": "E8VKujJQQ3u47TWKXPFPUzCEoUHzhSUB2nj1Cfxc1Db6xCKS9ZZHQDvcvikaiYuN2L4ZJtSxgAo9gaewXJzYyoF",
  "key21": "57TLD4coKSewK5r99DwJRADfxsRmdZv39vJ7WMpGXMgz4viUyQFS5PxPSafmS3jvhLUrT7THcC51GS4pZuswfg9p",
  "key22": "28KKC4jKvdrGaERz326Xckb63m1pjj7HHRFYpanV3sxoyXbpETpnTuM2Trr9sx7Yp41ESBT5f7wWqrt41uTS73CQ",
  "key23": "5DCRmamcvHxGQDEGB51NJVSf8zEt1wk2CvmXqMPC6txgoYwkGcr4FHvZtJ1wZ4rscxHgcAmHQb2Exip8g5cQTnMj",
  "key24": "5tPyux4E7mocEa72hSXgdmmnbJ43xk7rTaJzpwKg3FgXvnyuCDJvcji3akWcowVXv1gviGEFZXo2TiWsEvAUZ3HR",
  "key25": "4mZepV2hJpRChQCenMt6uqQRS6uiRyhCgWeUry2EJZ5qAepZxVBy7eHhHmzrd2MpwFH8b28Fv4syL4qqAUmEge41",
  "key26": "1a3rJfA2LzzBjsv8dnvHQ8rF9ea2AWa8zAJfzBk8nzkKjnWpbQxbSscpJ2T2kKszfL3Rp3C6Urx57Bifsyj3o4x",
  "key27": "4S3eNSXHAE2QCYaft9QLugNxu1FgMFjw7e8EGm34AA5MLbBwZMhh73P3XZYvir1qmMyGMpVCBK9YXgj4nz72egyj",
  "key28": "64PHgdUERVhy8CE99fmhsnzvJj8vyzhaHquPZULdef1qPsHdpE5tx8QvFSTkSa3fuEaFx3NjMsWtAZ6aLh6Z6wfj",
  "key29": "YhPH5E8ZyNMFEcvJBhdMHXDwQKpFd86Fke53dhuNo4MufMGibS2znudT7bvcGcqTrwKEQg31YzpXUSDdnDJhNJF",
  "key30": "5MWxZntsBDyoZ57JzgVSxy6LWv12xyPpCZo3fFNTZJFEGKgs6b7AvK2QPThdWLbcH8CqYv7pwYSNHefdvRMzN9Qz",
  "key31": "46sCCB5SPx6Gxc59dYSVAP4eX2x6b5xeQ9nN9d3kk6vDPPB6QHiD6A9PyBFYbNLUe9Rtjv11zxpf4qUJD2z3GWQP",
  "key32": "34Da5pWqM87YW6D62Gm3SSNwSqN3Mh8eNVov4VagAVk1EEhJAMF3fCgmj7wsQds3xNnH35FCwpNCYgbyrvP1vvHa",
  "key33": "5Kh7wxB8n1uDT1MexYtgEDudYJnTNkL6MUSZon9R9ADkhq1xasoCLMSf6vcXU6XbVKeJWtA3eKKRrKgFnTv3hrXf",
  "key34": "2DkUGxCJ4gjrMtVHPp8A9KpecbBjkeyMePSYHrRJPTCor3917vFtmLsXfUKaMHiFAQQe8ejMyxd6StT6G7BeF2UL",
  "key35": "4GMKmnLKDAvg1FtoHXX5dHMrsSERwDRK3Tap7cqtS1RNc7SBkuwGRDEMsbhguypX7DyGQb71BLen8nPuC66roRgf",
  "key36": "5iA4R3HeLQCcX8FGRgPvWcg87h5dCuc79dHbyAYgHQu6799cF3FosuCpAUec8Ed5QwfsGk9v1QPXZtAShqHUzNGC",
  "key37": "k6AqzqQbsugbTqrQGBWfpNLb2u1iK9svejrBT3cD91N9XVMQB24VP4i729bTCz8an1UVcppJRgfiQME5SwEz3Yv",
  "key38": "5Ni3F2pkwHokYZu68LerMEu3kHtNj6d9LheYjT9wnbqeyP9QhQjYLsVp53kxAUgWFicuvsCa2TfKZ54ptiJV7CNG",
  "key39": "3jNMXzgaG5gxZZLSziV6NAhHaTdJ9ZgFPEX4boQ3A9UqrtyNspQg8KfKCjn3rvS5cu9waTHJqM2MWSBSNDK44D6v",
  "key40": "5p3YLPyz1DceA63C6sF6pggkTbr9Qq2fF1RnXvoyxK9DuiVkFPmiEmFqhwJVoKUVRNs8HMSoEg6ieWyi3fJe1NC2",
  "key41": "5PRoAjMMnvuGEz2DLBsTgUic668R599iQUwmNjUCNg7NGfouhT7hnVyDVdzo92WKrRNq13PEJYXGjaBSVhvGKQNt",
  "key42": "4GgmitdX5AenaFgsyBvM8PxXCq17B1Jfjs84av4QfYnk9gXDqBBauxt1EFnxfKhbvLyu7G4avy6AmbBsJxNY4qR5",
  "key43": "KfufSd6WcpkkSDPssbjMvN8vSp237DnLQz8gB1geJmers1q1BaYo6tPQBYJenYixsexZSUuWhd7RfwJvug5L7EB",
  "key44": "HM72QP5JDAr5Sw4gXELXmDhLzT9FevhFC8kjfJ3McETXuJ7ryjT13RiGzZtuotwHqTmp77xtBEi6DTQ4PUQNESx",
  "key45": "2FV3g2BXwFwFKV5vgbWbdjGwmxfrAAUAuzoR3VdTzYzVY74Xkf7v987yHsfskxfpSbcqWbyhiRk8X3xzdR5zF5kp",
  "key46": "41YmaHyxJDv1dmvdNMuNocQfiDfRazHqaG7dXa3JcM17MoKqbZj84LhEEkGFTAcbGUcumYbbvMxsHLEgXtM5bP51",
  "key47": "2REz2YNChSsJw5grAFX9D8PuZVyfYF7uBTxH25JN3pYq4EgeMUemjFNZdQWT3H5BcWECxBxHSif4FVvLiUZopEEU",
  "key48": "nen3bmUEJ1cibWCzsPxJKgt8KhgdNEMrcFCMFaMZM1sTAUTGJbEeBd7eb8VC9M5Tufwqx46NoDegyhxLGPHoJ6e"
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
