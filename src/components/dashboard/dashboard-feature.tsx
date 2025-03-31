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
    "3PnfXRV1Ed6m5qSNm6hovPgWX4tQHyW74fRAEGNgsrwK8XY3L9c4VPU6ZP51uVuyz79fUEjnSH9DHuVRfgwRkL3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Z8HSkwvoC4rTDyLDFV3Ypc4e2DAMFkyHk9myHYnPvGzVaKa37Taxj3CSnbmx9QLmuMCw2kFLn7FMMokZSV5JDJ",
  "key1": "4PJMrzAkHkq9DQnk7uSrL1RPg45Xf97KCxkyWBZQNWcjWBC5j2CA9cXBm776aB1wQk6YokDVwmuw8rNp8544Lp7Z",
  "key2": "5c4Ma2BHrEyS4s1CbZmRDnDyuQ7PxbEw7JBeKRMsdZdfofELP1pW3Q6G6ZPY6fhwxPTWKySk4GFBGe2EAxZFhb5J",
  "key3": "AQjp13AyyayT44WfWMmaYRa23QARdHnufDFBw2SW6WZ9hbi8MdYn8rszG4ThPbT2fTq5Tx8dKxraLAWzjSiw1zK",
  "key4": "ZWTWMdhK7CZEjTCe4YKP5Ujth8PYe8h8XoPo7jRKofd1UZFS5eG5sPHcgnP9fzSSMEFnrNiSPAJpkWccG5S2BnG",
  "key5": "2B4CyisSf7W7jarK8kbvPQdpp2Zr6pgjCLruW632nUx37zn33zGgWxZtqjGdTwvG9ZpKmgKY2VPSaqsmoKcABwqt",
  "key6": "3hc4k5y5dp1iohVJ1Lpbu1kpC4uaayQkL19soMKHRP5iFsLFPRutu5neGbRwgA1zPhYc2oUstjH53CM631nfVKoU",
  "key7": "5ujJHkJiwNrm3aidKc38K2GWXz3DWJCGLY7Kq7UuMx3PEDF2dg7aHh3HR1E3e7JZPmXG4qwuDgZMZZAmYMFfPEix",
  "key8": "5LH5KczozTE3trp7XgaiJf5uCsnjGDbPciNfDbwoQqZip1itBPcym3eckArkUbbFEH2yTP8eTsYqFuf7Ktr2JT7a",
  "key9": "cefyPmvzP4oeZtioxqZN1Gbo8DDf8cYxoUGaJ6NJX95xwJxnFqvJK1q6NXYKAQeLAoByFiAoPTVbqSvc2wutns2",
  "key10": "577airzCVyFQNxC2jjWa81619WsFdwjjN7mLthBHikg54pcadNeMqkXcm95ma2nSFiKd8Y8n6Zuyyng2o6okRwMk",
  "key11": "3ikvxpkvPM8UvLviRSWn9zEW4ahRiUbUWJcMAWUr467HKKZ6kVLoZGyDvocET6wS88zqzWiAShNAakxmQyYzUskt",
  "key12": "3BknUP4UmEYbZ1TikCQWfFD31ivWkqzibkDs6nBD6xTvr1qNm5B1tpmym9uigGecJsFx65efXwnuttLocefz7cJm",
  "key13": "5gQC4xAw2DxpX9daLAJp7CThoCw7C9oZGBH2JcaL27PbPQfFc8qZKJWYbGHcRqZWhiTgwN3jcRAWRWbYVGmXRKPR",
  "key14": "C4hMWNtEJmDo5PRdvkJQMfKtQxfTT8ZFMG4etW96eZgaKxj9rT1w95ob97yMjuGrDGeJNt7c4ion76tNnbhhK54",
  "key15": "4LLU1bFEAv1HwpwLHrmPV9xMj1A75wZaqQZ4Ri3tgdfBqM1NsHZciEMuf7x32qmnTboL183s3NzSdQMYe3JftDyi",
  "key16": "pPexoXMi6CccP14quTgpf9yuSKrgu3Y96Ku1Ha153Z1bgDDftdQ6x8W8opfti1hmm1ySDqSq8Wz3thAM35UhwrH",
  "key17": "2qdKR2qrRTQY1kzsTzZ9Y1pLd9QQJtaBWqSQTkTqTV127dVhdzV3PEKHAM6CvAapXzqUa37yYwvB7MsD7fCS26CF",
  "key18": "3Trw2Ee5ZjBu53rfTGA77pyJA6SVKocPFjryUiBozBSHerGJDaEJDiEsrBWJrScczacLZY4UrS21kfvF1ViYUnqq",
  "key19": "5KAoWa6mEZUJDPZ5JvADSMfeyrjdowV3Qkt9Mp8rBenrDnQCgPWRaKtMb7g5uG9Qt3Q7UAciwGEVV57HNikatbWP",
  "key20": "ssxRvFYNWAC7ccKq2TAPFViRM4sKkp6yt2tENrkB3LsJc52KZPi4jgk9sYF6z4qqQpSmaHXwfoeJ4RLueLkz5Bv",
  "key21": "5fYAT9SPwmANcXiTZWzHZh4ZgANjDTeSZuJD3zkd5kMn6KXdyJmXKr3JpqPcucAerRKvUmV4UE4VjJrV3gXPtUzN",
  "key22": "2b3bGnNTnBbhGdQYi4roCg6AbmP2yGxMpvMJbFskapgR22KyViTsWXnqUScBon9Zwjud7pYyrE5DF2EVUA7a2UV4",
  "key23": "uAVE5M2QTYZ4WKmRRaMe9KaBCmZ1QBZRgnPfAj47BprJaqEy2utbFNmNebT21QNxvcXgBcr898kudyS5vKDsDsy",
  "key24": "4yj3xacxrA8Nx2bUhVEAwdg7q5xoqk2mdnhfD43H5VsRdJ3gYcDSX9TSGhyCEQikG8pMxsFJmq2TZtjgFgFzmeTY",
  "key25": "4cAHVwRoospPFKBcpTiDxxhC4utuYhkFnuGx6NJ8iHmzjYLLzqVjsLHeJQPiPpS4SSFBQuGAduGQRib3HqWtJ2Hg",
  "key26": "5PUHmFowG2VNfrvXNKBJgPvcqnNksfDp2YAv69U2JNEgLaQ7zGx8KFHShfUuvjsvdoagXozx659PGENTwSc3a2vN",
  "key27": "61b1ybM1tumQSPygzE7Vf2H7gYGZYt6Ko5fUViQqVF3yz1ZEKmeiwhXiN7Rph6txJ2jAnKpFDZbiuQdgiXVc1WwZ",
  "key28": "5k6x6qAT3MAfKrRFaRBVYGtdxFgHG8f5RZGJBqakKeK53odjvFuUzPYiaRmUYQPWBhr1HtadUUtuzZHy3yDZ4LEE",
  "key29": "5sXE3CGDezriEEWNaTTUVFQKX9yuEzRWp4GqNdWtiC9ppN9tVXkcXycsBZ5VBMDCfdgmoxk4m3F2cWqomZ6WQrm8",
  "key30": "2GiPD6DFVMa6FN5uCb47CyRxjozhnTQyrrrPhbBqDAKBkN3ZaBhjsCGBeiDakb91gADup8xY4WLYtaqwpAemPpDc",
  "key31": "24t1HdwxYHhasMSbU1mSEZs3CfHuHN68yhxYrbkdsp6AYw4e1BpMXcy9GC6GXrXtMcPyXDgkHX752PvdVpP8zBgi",
  "key32": "2dziLdBTrVvp6pCPW2B36n9WH952PCeNAn4xkCasVbVadRmJ7XmVJN9MQiVGZK1TSFwVm9h4wtaqpspynGVD3kPa",
  "key33": "3ugMb35TtTUiC1TCLYR3fTErb16UdmecZ5eVDP72MLAgKDxRguSY7yNwFBM4wweKXcDG3KXYpDtkhAi14FXGZsLx",
  "key34": "5ckq4uysszFZQeC3jjpJ5Nd5gSuiXtDkrSCamNiTp7WRkZ77xAjMwpLMCRWq86qFM2MxsNSWF3wDURjisf9rbQCR",
  "key35": "5YcwSHamWeVw9V9VJAfopb3xAutwperBV77QFZEPP2gvxgx2gBFbkLcwvwHfVvr7MBYanMKxrUq6vndmpooNNdYb",
  "key36": "3ARgcNrFv39v1ybAEMCxEzbCTmZSRDfQNHWRVrFoEwfb4UxLryRetiCkokLKPQpq6BrSAVyETk24x2AHyN4dwNa9",
  "key37": "386BvMNHJ4494CG3xiL5K4kJdMtVvr3Y6DppAvCwyTMWC3dmrMrGh1zhCw6s6t71CPZeMJRWoiqUfRFrde5uffaH",
  "key38": "2EsLnb3hGhjAuUK3uv61zDALmTrhLk37F3TZtxdub4inQFMMhzPyrEtwe3pgwyRaxbB6pTh4ZxY63Dy9UBGpLjRM",
  "key39": "RhD5mYdPosT3XnwThphxJaom5xT8wzkgqB3ME9tC98rxvUSWr2c3PggruutVqpi9zdKR2gahH41c8MUYLTTz7jb",
  "key40": "3HPjCB21yVtKo2W8EyPjXRb7mGYY6kYf1VLb54EXNnfrLktHrqbdnx4PXkUjJ65i8armCfLAKHgqWqStyLSA6ZAS",
  "key41": "2LkTnp5psVyPhYCSKrvUyFQJaHzKDHP5gH2PCcS8UzhSUfVhCZPjAHxzj7bQqMpn5NsFTMHvFnf9wHVi72Mt8rUG",
  "key42": "5cmMbkgwBWfPpYCbW3BxuzdaRAKVRfTGJmtH7gdt78mepo9CB5svgC6hKPQZPUM3Z5QauV2tqUcFG3JhYk6Nre5a",
  "key43": "2gGyqnUroLLgTs2tGiHNcEZmhxYoBsXXBMtnFNuTrYvUbz8ijwjNNEtn5L5MPdQqTS9w82UzMnXwH4CzVwGBuvfW",
  "key44": "5cvR6MR5Uv4dyPVLkgvHLuP3cLjeAqCsrK2RREGyVPfGjLmvuY4BmddGZBznjnww7m5UnotYddZyFyt2eVcCG2p3"
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
