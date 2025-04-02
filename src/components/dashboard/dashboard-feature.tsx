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
    "5FYxWiCr3Fd6zAYiQHpL1xLqnT2k3Gyiihyv91p8JCznKijQWHwZLa8YDRmhWBLGGDGLugjaTb5sgvrEsYUnxmqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJWBDBaGjdYpdEm1Z9g7mKSd9dx5YNutiqiEPpStmeBm5u8TQEeUpDaGhB9K8Nzj6iqAc6A1Ts8ZUU3nPzPzTcc",
  "key1": "275uFzYq7RKkVRmTEQAH8kgjdUPRVS8MbVDKbULykqAtDPNR2v16obGxhwX3CmGGFW6t24T6MZeEx7UzAM9aEhoQ",
  "key2": "5CjtGLYnjagMQyC9hz9av1SwsPrdvELK8vgtn7BpQwkpEREdQQ9PyMxQVhkJ6jfoqMxcGFG21h8d9DiBwmfrvCha",
  "key3": "5TWnYA1eu9AzfZUj5hzwb2si5KcPiZEoM5r1qcvRyd2PjMnFVUvBJyu89ZZQTiBqHsjYwSrKW6ajyBJp5ZmZJNQk",
  "key4": "3KKtKntGsqujjvRAkLToRmtAeRxCPQSmE6RKV3QYvLMYMt78hdC5devdAkMXSjo1sFfJk58Dd579qxcKXX5ddwSc",
  "key5": "T1a6NxzAYX4FuGnqmoYF3hQkCUwCX13zxNQsv1fieNH99A4sctxHMZ2Jtm5i3XViiYGvn3HiQoLfGUUJNcRAwkh",
  "key6": "2Kgm84TXHeos1qfkMdTfzB8pmN5zt7nCwgeN334QkPehNWAdr7uP9jinkcm8U1npywsakXsD8u1hnEBWnoVZBdht",
  "key7": "3zV1QhX275EDdAQhgprVGt5aut6vwDUCdGEhjNQ2AzfRPjdsFxAZKLWaNPqH7Gigf4AgrYgMn9cKymNrmjYVeoFF",
  "key8": "5go4m7cUsEnatDLcE6qdw5eX38mQt9xd5Nz59ZZWbPshwgKn4x4YRaZHFqBmKWThVnye1nauZdER71zDfHL5vdtw",
  "key9": "2f53JtzTHzzun1jjDU972USDKjiRK3NcpZNa1wLL6HTmCdVeWZs7Rd3GsjAzuNBfU2YEjd95fbm38VPVWkX2JE2Y",
  "key10": "3933agiCcsxfkTaA1fcQ3LAvhnsYBFUxVuURZyNAaZ5MtSRAHzSayhpBrFuWpv6x82jtup74o2Ff4ygbG244grNu",
  "key11": "2C6A8RaLMCozHYoE7seoVeCg17b4MQ2fmto7SesrgrA7aDJN3jmZ9VJwA8oJeQMFSdNzFVc5b3QiZbf7Eu7dWK5U",
  "key12": "52SKUuo7eyvzjP2rk6dn5YvZPm61fvUrGZzoYANzDSWmdgXZyjDP82AdBB1cv1vNbKZQxrQjPoTNCfLnbWuNyiM",
  "key13": "4KuChPej49F2BSrKE6aDvHxoCbnM4VwWw7xXdU3BCVuJRuFPnxryz853ivC38bKcSZtVrtM9RYywQ6VbqUTWr4XF",
  "key14": "2tp4bbg6XwyeZXSg7tcpBASDNkspET6QXcfg3ebQGud8YnicvMAf3VYofBfztPG6rEHse3cp3UAaoo82pQPjKkcW",
  "key15": "5NvSCZcVLkCaYV99yybWmGsriiVeQ4oFEpt71kjpbKA4tvmZdJhDke39PZVP2LffqdCYZ2CyavpbdY9dabptChPS",
  "key16": "21nY8dNYKDXTChHsLP1uTCkZkuWnz21ZhZi8vyYfBab7VBVjQ3WGCrKb5EELjr9tv2y1EC4iAmhydg5muaJyeL5i",
  "key17": "4324ebrxUMYptxoN5Sk26TqPDBMEErU5xpj3ggnWS7UyEfJGUcZSCu4pNCu3BWa3qcRy64tbpoH2Q74LoFZkqa2T",
  "key18": "3q6sLVrEx9z8d1mpdyZhd3RoZYZ8sK9odXrWyf8EdxcaV8w1Nm1DEA9AGdiZmB8oJekCfd9ADSBpX6Eo7EyQbo7E",
  "key19": "21g7Y3A5kSg1ajCz5BTgFwoMwoTHSQxYAJT4UZgSgSruW8KHZr2YMSYT4BmGC5UF8d6PNymZYLhxmdpa8PMFknVw",
  "key20": "3kDKXRSQUCEUgFkcyZ1dPDFTEchjUPjxshiFTfN6pJ4XCAGYXrC3GcDzqYAgb3jC6Ce5nGeeifm7ZuWCvq2TxrQq",
  "key21": "2hjk66uuGwapKdLYc3mzPNTrbDF8eVZNWeFv47Y6HHUEXUXMEBodG1Xgmg4SwDLA84Um21pgYVAJCwJi6kQXp94z",
  "key22": "2DRxYJmqoyJ6hdN4LPoPteBEzdxwNMwBpemFXgVAfhVc1LTgjPnh1mbV4MeJhMCosiJA3H5CZzE5s3HghzbYxzqY",
  "key23": "4vsHKvupVDWvb77MLTRLs1D7VAJpLCE7NmF3gtphDQEqsusNTxMSPuiCMLeD9yEZfMe29uc61kwPovG35sHMP8Nv",
  "key24": "5cmviHH9r5sY7xFoVVWSuXy3aLU3VCH83RqUgyDxCq5ZvjgUQPzQK5MaTe1dPrUifvtGDuBAmJ9vXiD9BKtb7wgv",
  "key25": "2ta1mpPhEMd33wHCuGnixvE2BnuM3wj8hwgYLBVv33CkiGU8BNegZgaWU93gPQzECwPvUrwq6F8cFsAEtUbLFFqr",
  "key26": "5q7EaKEMJymTaBWPvK8trWWbVG1jLvjT55V32ZTPWwUdU4Vx3SiNXxx2T6BMCc42AurMKGsqGpJg9jdmSCZnStKQ",
  "key27": "3TDFurRnHvDLhPBVd4qKpMASdFc346ukgWzQv2y3qmKv2dX3viDsmf9b2wwFcKxGgjBsn3Mx8tBprqpePkh6Trir",
  "key28": "57YLZtuzFZuR2ZqCjXYCxneD7bi6pDKjAfHUKKaYTVubQSJhJpVyzDut2BzuWEuJVmZfjraKyoEFr7Ym2Sh77jq3",
  "key29": "4jWwcXxS45g37LM4JvdzJVN5nDe4x6tgejHm6J4foE6G34jgToq3299ympspV2HWCJ5RqggUNVc9yaWCw2HMb7nY",
  "key30": "486pbFQZxxdEzrVqhWQJn6Dow66kyDop4HQycwpeR3EmiwDG11jLp1NLHGYnP1GFyP8YY5fhMyoo961GfxEE4Ss8",
  "key31": "35MGMnkhvv1w3cswA3U4oRXQyL8pK69bHRNBvmvbS61TqvAWRYtQH7mkxtQ82UpBjERTto71gCoWcJunAVnZnxUx",
  "key32": "54Ch1V7X2Z5Q18HFJcjh2UTrTf763o2HFndofhJNf3XRJrcQ3SNPMQmWMRduTw7X4d9RREi8ueE24ZCC4U9TYN34",
  "key33": "3Ueji4pzdirdw7qv5KeCUHaBAYLMGjgz2f8WHLADE9fVd8J1BKUDbxrDPodnSbG9ifT1EaJbgEjHshXNEQjx1bZP",
  "key34": "4msJY3eUXXHZEkQXXEsuChbuWUspC7fFmrnT9ycitZCJDtLXBwkfL6bwLTwnaVUHr4XRAnALmgsRMcd8un9ZMSXf",
  "key35": "K9exLDVQ9sf2LWtQqM5tkgpFEL6qpBLFaSJ9SP39cFPjt9DsZ9RvSVt1krqxHTd2SYYtxsN5LDCpMMXieMAiLhU",
  "key36": "2PdveGpibtHCoQokYitJDopVQ9Vc3JgiMELEazWe48LK1rpbyEfjtsKGqdenVvA1gpdjatPT7D59kKErTHDAdBNY",
  "key37": "3CqDcBhtpCEtqUtGXocie2a2ZSLvCwmfnv8MEKi5TaKzN9G8hL7JiwD2R8xjyxxWJKFV6gCE8PzKKR3T6wsNX7xq",
  "key38": "5xFJuJRYz1RVgvbRA28QwMay9ZJcQpfP8ACCu59TGzzSYNJ8NZnnuZtCufyHJZHV7MP3ne1Nvc8iocsFy1oGtvcN",
  "key39": "5HsTchYcJx3XJn1K8KhiqJiwaSJCbygUN6qcXm1njQ3dWvUh7FdDxCMxWCsyQBTTMrtHyfrt95gscNS4JhqtDGJt",
  "key40": "4ujnjt2UgUGLHbydUXp3uyG8L5iYA6VAZnszBvp7JykvcxkUGbe1gD4EGXB4sLsy3u6Z2Pa88KWZmxRmbeo55bSH",
  "key41": "5E5LtgrgwcQykgpy3ZV9mw6sdXjRamQDwXikbdqz5Yczqc33hVADhujnLbFRDT9dnWeJi7m8FCMW4pWXqdfTyFzA",
  "key42": "5W1pDCfA5bQrrHVjLjfFCLjn5ccNingtprqFn38HCgjzbAj6fWQLmProErvP6Bqzk2RNhne5TSJ6oCYgN6612dPM",
  "key43": "2HVtyGwxRDLvoSPrHG7tG4ynucFUa216eUg3m5EejgPdFT5M8tczYqu11vPUJQWrFQjQLB5FfBiFFxYN9XuxccNv",
  "key44": "2m9oxrEwKq9SiEkV1qrtN2YBhVYkCXaVKMHabadbQiS3nqoSfGacWUYmVxpsXvC4CUQC5RoBvPheEhX2vqqfWTu5",
  "key45": "kByA1yCE4Q6v4qCeeA7yMoMsK85tmkWzN7kimkarUrT4LMyuP8pBiysXFhg4rCRCZLC9jZjFTM8MwtoJFYaVh7Q",
  "key46": "24pRYjqdLazhKnNr2B7nauy8vMyrkH1iRc2Vgx4FkQPh6ZudiFZhXcMMLVRDqFyDRgd7BmQe3kGkXS4uXMDNwDYq"
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
