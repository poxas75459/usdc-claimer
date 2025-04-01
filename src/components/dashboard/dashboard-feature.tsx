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
    "2jN7gxm2i9HDV1hMbkhUjNCotsKYZFjhCXq5XKMbHigTcHwb5uApBEsrHXLbaPLMohiKf1Ct6Rn6JqegLTjq8Tjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pWudbCpJYAbziVpZhUbmDec2UAhxeG7F2wpFavsdcq3NffY5mBKdDN7XP9J13wjR3LfRjZw87J3AiZr7QpVtkf",
  "key1": "5vqLWDFqEXC9rRcPKL5FsaydvkUWXwy1Av6dpkKW9TQJTjHivqnyS5LD363Q5bA4jnew21PMGcGFJwBze7JQ9qAK",
  "key2": "cUzGsWnsqYau7CQEeaAjt5gy2swMUqykUsLtekbu6XKVXMxipgZ3qZiF59DDjFPhuNGZ9QgQVR3VnoEotxQ1LRC",
  "key3": "2P5Q9RMD1SMSmyws1xN9KfpiDM1adQsjyp5RxT5EhY6VFRzTi5fWpfNbM2m3H3dezQoSCtuayTCvaQTaFRcL22md",
  "key4": "127TL7QVqVneUTFhANwhJ8cnoDv7wmV4EUiWDtxMkfjnV2f3pBqLL6cAG4TFL69qeaFY2EbwYerbL28UowM6q3fG",
  "key5": "3wjWpDiMnR2CrduymjR4gaHE8JYoGrJpV12mtLwdmMcRhVpyTkHfqhbYpfW6Ukd1xNWV9r3HuSNFu4Ks52nXwS7v",
  "key6": "4gR1J8rvDa7DWvFnYoLEsuroPtjx3mLU5sKBSaQEoLuWXXv9H8bi9nF3aQE9CNrAM87gSagqXR35WBv4e8erEnV9",
  "key7": "3W453WbBWS266uiLUtYyJZWuFUBPTsK1gXJJ7zgguusQRixKgbJJyfGqpzH2js121zD2EYMun962m18tSKAb4Jtj",
  "key8": "41CcaXCStSPR4o5zz2ykDWwwiLTtqg4hJQ9dtm6JYeTzvqmtWrXb3dvxgnDYUmDMb8enskUQ4aGngW5y35qnZBQn",
  "key9": "4E2jdPHUMEw8471RfMgvR8NWZWRsBMNxauKEaMSpyVS7m3cQUZCJdxd3UL5zWLdvzax7WK9vowB78N3UB4vbCKQ8",
  "key10": "5zKpEanEGsGiGyxFpwkknqydmTbD9Bv6ocLhAVbESeCWxoyz76AsPSpGE9x87ZekCZTi5WsuXiU7bkTKNm4FnKN4",
  "key11": "5v5zk8xTAQcz18vvQYbhCM6HzdYopTwSkddSaUpEpgLGuBmdJfG8mAbRQaDegB8jLhQsGnAHCt7ZJWfHgoQDmHu8",
  "key12": "23D3SYfVL3fnwC1Fk2n26ZX91fx8Y2gKCmGekppQ55kLBEnUmELt3PccgojoVwcqu81H9pYHSkMnPWKHYPcDrtNg",
  "key13": "51K9LNW9zLKsziRX1rpV8qELckWb6DwLHwEDTz4erfUd5iDXTfeg2yWaxdKdvoCouL6hZJySfBCWcdfy5Xuhuxx2",
  "key14": "DVRD8d5y4dheTZqtS8ncjuq2AvsBwBHiJwUYDXCNFdKVpXsEk4bvKGMJgDLnudwwvfmjRvpNKnBDW5SeF9F1o6a",
  "key15": "3jPWMtj39grG4xk9L9VDVzZrB9NC7UFqGXi5voJisdMeUhuaTWjmQgFZYYcAKnCe1vqsUtYZ2VF9WS5SJzuiVqxJ",
  "key16": "3ZuEhgxuBgJHoABwVT2ARxRJ3TrCKuog64yfomDuCfGXvYVWVRkNg79k5hU9ws7fwysPqkbiwFgxvT5kPy9E2N7n",
  "key17": "5yT2c7CaMoGBSqxawvhCyQ23K5o7wBaNcWHjCXrQbUM1iK1qQJvzjV1nkrHMgYuoP6Ew9yQT9uGNXtQdHyTUz7eD",
  "key18": "pTUsWUzTNbGgUfVAJ7dzxPHNsUKYw88ePVt3LsCnQ8C3BYJszHsJZZKS23t9EYSsKhe8v3UHaisLg2jfPP3pt4d",
  "key19": "22uD6g4daRU94ZRHQRFbeLvVWcEEiQj7Qh1MhcSEksqcMcswSCkg1sWmTpqGP4Bncn3Fc6jVBD6rFnGmB2UzLX5m",
  "key20": "GY2m4PpqtoRQnMvp9Ua1iPv9ag5WdemHjFNUXictypmchpwGGWS85cVRX7cK2E48BSXNweJB5VwPJrBK7qery7g",
  "key21": "3sU1kMXxKDf3MKxW21gmsY26EYN7NKC29wazrBC18nbjP74c4VY5V1x8FtLEaEyAb2d9pfouMLJYpGRfbaMp59Kk",
  "key22": "2kWPrbPykynwNsFmDkeLCbBo7CkykMnaWAxLyDCfUBoAuXUNCGxuAjEaMjSBondw58kC4fnyZxtchb9p68AeSQPB",
  "key23": "4n5LiMjBYNZtjWBAKzxGRJgQ8me5jEEtkGUogbkD9cH5qjRRoRHWsMvnrTnv6Rsi1SVyyF5yDwvw2mLwpJBPFBGP",
  "key24": "4t7g5po7QMiUNKHx5PcNXPSr8cDVEJpgpHNeUAgejicaPdq378YxXaDovZnP91R7A5EVQRnyRJDXXVRL7f42ZRbc",
  "key25": "p8nZWQgwL3hAmy1v977JVELoB9HxEw8RHWZzsDb7Lkq5iKu8Jn4PwiVD77GSw4RDe5mSxsBsSgra2LVQxb4uepH",
  "key26": "zXJMDTVSppc5AinbA58xEKa7akc2qGyLFY9UqeYneeJAK1XPXcNq3wPhEMG1DPKvn52prpUz8whC4qQaQAnyYqS",
  "key27": "2PWtqV6F8TM7SNECMWPsotNHQTm4VyGTF1gn2JdRyPWX4d5vaPktDAJSZVZdwxbizyrUsqAuGnsbiUNhPyg8vtmM",
  "key28": "4Bw9SyKourvxhLpRnPacx4ksHZtQfqPtt6wqUF2pBBypdvWEYNUdpkNN3YGNMKa8Vt8NGQenmpFwaSPSzkzTgM6H",
  "key29": "638sW4Ju9AM3HG4ysbi2H1bQUEsYS2a7ie4JtfGXUYUxu2FRFeDMcSUBA4HdeHHHa9Dprf5mBX1sjjfXxxxnCxhH",
  "key30": "5axaZHhpRMY8tdNad5azzTfLtkuEmnfe2d2DUbnaGrPysoA2CPboovoNZiuFYwF1FY7b8ayXjRYNnSQDB1a6mCAr",
  "key31": "5ohCdMdYKPYjYbTfGMPWQik5N15pfHkCpe1rKLa6f8DNLVfwFPx7PPRgLoQ79YwUxrRgGPD1XnvNFCmThRKa94Qx",
  "key32": "45me8f8D6BgUt2B3axYzsvgw9hCiDaXxt53E6QGhjbcd1fCCuFB4GtNMWqE1rq4HVnQyRBt43tpLDrNvNstVAFiZ",
  "key33": "3DgZi3Bp6Hs9Qhw3whPy6kq4RTffhmCXTeKAGu9si5A9LsKXy6LoECzgJUszhGApAzgLPKgPZJmzZBqhiFxNsFNQ",
  "key34": "3z2krJKTYNa2k3v8dX7AHfDsGW8k4kJPa1NWb74ogQtYMKdtk1vucogVgbgD426CxPwvaybjaAirsykciNCZXDTh",
  "key35": "3yhLkTQcy8UCmJpC5EJdorSAPA5uxbo2rYaHnDcqwbYT9oaxJUEM4GkWgWegNYQDfb5onCoUVNCZd5uV6rKPEfFq",
  "key36": "RjsWEqP8xCeVV9t2GmWoDno1Le4sf1599Hn5aZ1ww45vRTWeqUpWKYMChAoQtpyMJhqZJe3wmVwJsUYxbD3bGru",
  "key37": "5C6BZEtimJka4jGHGcq21hz1ttUu13UqREjFJuFxMntsZygN6UEAFfRiJaguUUyUcd7iK23CdcvBmxYHUCbtuCgC",
  "key38": "3UHaMynrYeBwKwnEGoR7v1k2ova5KZZuTP7BshhJVBTyXuLMewSLNRDNCWBuxn5ZBJD3tQQSntxHsLmiEqb9cWFd",
  "key39": "3QhV43XDhstzWzxRg1wGpZrpEmWywRjPUHN9wWsAVJ2igoUfxNWDeD6wWh4o9Lg2rm35RFYEd73vBbthttoWmmYx",
  "key40": "3SDPpEQDHnRJzLS1V4dGGkP4qxMbsM9RaiejLbUihCYohgvKJQNTfC6czFTtpoEAFXt3VjrVELj5dJnKAKKPdZn6",
  "key41": "4tR1ksqXiyaRfLdk9LSqTrwVnmJSaZKHW9dMmGPMf7th1kaNRP58a5estZ14FR86dDQntbEXZ2yNFJQz3WPJxJg2",
  "key42": "2n8xsXPWQ8ybpjWmCTJSKq8QVoVkqMSKCaqUXfVyXfmbDfx1bs7DWVJzJyXkJWNwqCdAkA7GqixEQp9WTtpEhvRw",
  "key43": "2riKHFxWiEqiSpV9HrpZ3AJis6LBp1nZLZ6n1ZVCvC6J9yQ32vry8rnqk8WaHRdLbGG9tGQuVKS2yCVC3BtV1MBo",
  "key44": "3ffczMUwJNpRcSXZ4Ryme2gFjg9o214ijUr7ixihynEFzHHrjeK9xq9oKEa4D35VR2nK85TnTSUaQgQ9GWK2vg2J",
  "key45": "4kzZoZeF46cdXsnXEzytP1Cv9RJed9kZt9KM6TjDCGT53DUsriKQeAUMqVNoRfB87zzBw7Q3nCfjQikGPVBxpkW6",
  "key46": "3VUogXdLiKKCLf2XLtFDBMAPx61nGQSY7bpKbLFT6qEZybArpKqJAbsGV5v1FrNcaEWz9mTPAnYAp8hRQMXoiTZz",
  "key47": "4gw3qbZFVHP7CyXTJeLzy2b1gYeQDcRJoTtKJmDs66o2NJYS8grR9oNwPPU9U9EeJ6fUqGNTkvK3zC95UQGnd7uy",
  "key48": "hWDeJWHpaoUyHGihKTxYtuneQsF3aCQGXstdz6wZ6H5uQLXdZvWVWsgHc1Rh2YPvisGipQqEBJRfbZmQgNUdqmW"
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
