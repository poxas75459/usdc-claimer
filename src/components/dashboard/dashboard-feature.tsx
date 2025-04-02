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
    "CARLyziV2nmRwjvuCHZD37WT7cxKCo4nQngWpuXQgrHPjmK9QM8T1ErF4WqsY3hSJM7roupyZo7pdB9K23edvzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AUgtmUqZgw4xTDa6YjKVRTwfQHAFjStS3WDziWDYwiE6hPZScNTbtb36VYGhtBE4WgzSj5G4iZkiUNdVD2i8QEs",
  "key1": "DRfdAwweSas2pVjzBnPh7cHvxXDrh5dT7v1yQ77kuJb2FdP7okLmz13oMBfoNQefRqcCzbYPMAk63w4G8smvveZ",
  "key2": "4hRrGSs5NKCu4FLAiKtU7VQR5fuCnaWortDAhkycu8E3fNj5g1dpLZJkLUbUT3JVru6o4jfwbmm3DNRC9c1SRPKc",
  "key3": "27vbv1GAzgumrp3dyBTkoJ8tgXNATqE6SbWtuuLc7qsokbh2ZrFsixCEgj5DXZhhR1N5LkqzB5itHgdA3D2dMZ2p",
  "key4": "5Ya5AbpeZ5iEPY5MXvsHbSPVaNW4bdTMWckzb1xwL741sEsiD6DHzXUfi2otDx9tcaQMrC3onG7531pYxxU5eRk6",
  "key5": "2sniLWZWec4CvXstyouGqivJ7NuPos8WvqD5MW7i9uFHLmMLtF5bXCtrZ9owYLER5Gnk3MbP24iEHFCaoSHpgwt6",
  "key6": "57nQmaPbtFJSN9JoxfxUoJiynwJPRmg9UB5J27PpGqkPgYAbUp4aygq8EPkKD84qdKPJYgtsVBHqgvE8vn5DXVQ1",
  "key7": "5KZP5Pq2ySen1FzTViFiuzrqtSEupfrmgENPfVzKtFH4GfZp89tSExQEzVLzitUuS3k6qLfZf8gEwuDKRWwJD5yt",
  "key8": "TmawMM23sjR4foMNumwZDJ5EArDHwko4xZUW6LzMk7Tsgo6drQ9AndDYhi9exopPqr2JjXw5Nosv5z7jgTWLKHB",
  "key9": "3obmcAYTKLjCEnkJgb5gJE4EwuYQFM9tHSDrk5kqszfu9Hf1Tp7dgSHpQN1cneV313LeBs3fcZSM4eTSyZHxrTWE",
  "key10": "4r5U23jkyihkMzvnQLiMNYyGfPBaWX93xUVLUafJBVcYf3HKTbXVArfqxsSCF3LTUxP73NyZiej8YN2SnGRLtGQi",
  "key11": "2abCpqNnWyCCZabXNqtsyhwWoTeMoi5NAEpYb6TmQfXE4DK4pMuedAbz4JWC9CJDNEfzRaFp6euoRhr4ujEZxEr6",
  "key12": "2esj5eBNBfNqtGNZq8ge5qJKhSz3oRcLdZaNqCcU2WbBXP5kVdXeuVWaghX6uh2eMhCx1eANW4FmkzYZpWGyrwhC",
  "key13": "64igxXX5kmzTXDuxL5XyPV8aWJ8RrZQNLEnG6gNTvYLMpwzfBG3JKFH2zbj5FTrwNKQMwzVYacwjb7EU1h6gBz2p",
  "key14": "4biPWJJaPcHqqgk5W5EwzZVdgbL9xoDL5EvMGcGKr1BrpjNXNH1hy811hu7rNwEGNmVBsJJ1ZUXGPZbJyKKWFCrt",
  "key15": "5AfgZCBo5f4kYA4E9m2abJsZ5CvzrXt4K1u5YbASifw235b5jwe2CsoPZh5oxuzMz7czTH7FMXmGSskNfMnkFzD4",
  "key16": "311SaNv1P5jnWMCRe52bb4moyenifEWZj1fuLyFQPC12FYAG2s3y9ComSDDToHrJeXGgBb4GmGtqpCo5WQJTvEGg",
  "key17": "493keU5MY8REELBWsYKWC95aHXJXLqjxQDsezE37hUt74xhVpbe4wj7B8GiZ9zArPngS7buFMzYRaD8LKkvvZgGX",
  "key18": "3n64R8RKmvmY4fPSijFv2Wt4ydmcYdSGA15dijX7War3bpSzDMmBX3tZLJzwYffuZSgwFp8PUN6i6MpKTHwLGJAq",
  "key19": "4NLo14ChSK58YfH8DApyzC8zxrrEEzsP9kfkwWwVZmtRotzovhpo4DEtTkzVSFzt8frGf5DFgbhZ5dXcAjKuBQmX",
  "key20": "uEGYP15KeoiuDRGySkaXcGHajKR1QJNNmGCZaer1aUPWtpUd2SiX8Uvi1f662jx5rTpLjJ3atfMWP4doqzMvxZk",
  "key21": "4beaY6pxAfy83pvbtT8ZJQbhpEGfMw7nUAh1pzrSg1WtGHVaeCXJpnsM6bNssvxYrDCqtn4otYhq1kooJAWytTqv",
  "key22": "4wGFdTRXd7miYJdRbDioCg6u3hy4avFmGEudnTj3uCdw2nAm5iZoXjNn7Yjo5v5wjVR65PzocfsWfaJXAcvPNsBh",
  "key23": "PNRvPvYoNbQiMa8HWaeSNpU42mxFVigrW1y3NtU1C1nEBPhmiqwNGTuQynpDc6VUXJSgU8jcRT95Ztjbu565Q3y",
  "key24": "KrPhpigqq3mBHvLnyUPBQRd7Cuj7aPZtr7uWrG9UNtdn1HcV5xHGiSoeHrxQVCTeYgpiQbLh6cPpCtoPwb16ovC",
  "key25": "3QxbfSFCiudz8RRvg6S8cecYsE7pgA6x1moivKhbRP3npaBQde7HkYjEUEt2hKadns2Mp8Zn9oUbxvPxEvqA4zxT",
  "key26": "36Tccmz7pk5CE9GnoSs7mZKBiCaW89svC6JtUAe4QcAcCxHyUht8f3hviNdwwTnW9ZhVgJUyvf7LjfC75E7JcobH",
  "key27": "ReJrqpgRiB44rLg1M6LNc1CyAkSqZPpcgSZdWd5swLom1dPf4mMjjmDkBDLSJowYjJRSzRmxxD3vEk5ut8TwPQY",
  "key28": "2vzeVPBNujgSuDvo1tfjdYyqR8XsCo8rPQoAiR7xxpFs3PHL7o6Ep4MXDAenW8kbGC3nUeNWFvad18mkkpsFebKX",
  "key29": "5s2cYyeGwcQywDJYbYvn8RWhDkCsS8TRnZhfEeNkjZkMNRJx6j3dLGTjGgDgU49MZJ5k3BgfEKWg9nmN33SYjFNy",
  "key30": "3zfbrerDQuv59v8qRVMPctSFN7pgRaFSALPq3JgqgVtyuXgsuLxD7ZiU5MV31vRTtK559cTz5DkHfjd4kVxSFydv",
  "key31": "3WNoTKSARSqYCURQ94XsBdE1YDkp5mS9XcNcyPNDy9MaGqwXrneYVJZFJRmLqrVNzg8LJnV8QkGY5X3n8mwvEwUM",
  "key32": "4NkCTYL163NaTo7wJqrnVpYikKGVxKrNWhFpcg6xwdLwNcfapGJTCE76MgQT8zAwkBkDEqWz2VDe6cJXVqSMrUir",
  "key33": "4ZTbC2PbfzLEDcSwXpmA9LpgVoghzBNAJxSyjjV4DQFLeadti5CymC7MYczVz1Nm3pdPNULPWPzMPUNEUr4zBVGG",
  "key34": "3LJKWXkUQbZzmxt6w3kjc39AfJynvHBuaC5pzKtwbTSSVWro6YZtwC8bdiqKiKaLLCpySNdkxvyP8kN3HzRM5mkG",
  "key35": "rV7DJU1Bwu5FuXrPFxXy1Cw3BFp7UD2cridbm8wYPrpuCCUT5gZy5yixw8NJL5qsYvKVKAN1RgoYEgwzi95UuVK",
  "key36": "2eNZJSxPVn9QCwG6gan8KfyroNgmiD4YfCYkJYSPnQrsDs2cQ8wZ8uC3TUBpuomp67FJhqTGCveAQaV9UBCeDAWJ",
  "key37": "3fhPC3oXKM8qycpesAscCAQPZ2H7q3sP72gHZe3tjYfta5qwBTvjr2p8AHAvVZNb9sayirNB6QjzAYA4a8siLbzw",
  "key38": "FdPK9M4nRbcrkiFK8hKbnZWUWrxxKhqgex6HyrpkD7MKh1ZPaPDNPWFBpsJq3xQC91dCAhUoSHJeRjXkJXS5fiV",
  "key39": "3GmWtFmDLLWGm9HyftMn99gUj58WmTRxdSFdnzvR8htFQ9MSLe9AiZ1JpAQb4bAcuwGa7CUt6fi9CWDTpBVUXkkG",
  "key40": "2x6FLtnA3ZXkpaVDbUtRQBbziZSsgcN6rQxbQhJ6H39KxuwqpHszNMdAJC4NxUETfGjW1NNWTT5yXYwpYvcX98Td",
  "key41": "5kptgJa55KavPsgcG2F8Bwo2o1aP2bwP48Krcm2tLds6P1UGPVmfwBqsTVB8pj4MUMRA8AqcmH2gdVoPxfJs7sU3",
  "key42": "hwdQkpVa6VvcWvnFMpp22YoN7Grj1CB9CYgo6fBid74vNGHBBdCEuX4bTNXQXVJL7Y2R2Xh9Adons4TwYhRAVpU",
  "key43": "64MM8Ew9bmKMnz2SeZtMyacyZwjH7scBm76xSB2GQpGLxzKrnwJVyVuanRn6UWGwZjZbFUxuyE8nKb1MK93TRbb2",
  "key44": "2Hbs3zzojhguQpHzDDKP5cFZ9aYZRFCwtJ52SizxMbEfRvzLfYznF2eFWqq2Ws3Se8GSn6naQXSCZ4VgjhE8wYow",
  "key45": "3YBYakimF4gM9WQK1rw2YNnw4AEJrXkgq89WvdXvFXxbx8b41ZmU2qb5KFjpNua4PtQTZsfnhkTf1cAN3vaYvr3L"
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
