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
    "2JZMXHircrxM5N1yU12rr3Wttpc4VU52gudZaFJE9uff63smNqmFmDVdtffWV3CQw2Pp8La3uHUjTUpN7SZHyLx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oftd8U9omzNBbSC3eYscGsSsEfcBZzdu99dvUtKy31fCjqbUa4w8JqXd7tumR3JSnxeXmb4Cn8u6nD4B9bsvsBG",
  "key1": "YuhVdXqfdhnPom4zYPa1rDKvgXUwV8EHvsmi7WMJ16rM17GW1728a9W965m9BTFqfCAEw8jJC1PTXGiFACoRNXJ",
  "key2": "2CBhbkQotq7cKKATwLXSXPJiVa5KADfq9hcB4YKqePQKtagUMxBeqEFgykZzuubAzagUxSfX14GMABKePVck24QL",
  "key3": "3CKXNPtyn8862QdEUqGpSu621PTVTc6beq7nSPuJsi5WcapPRhAfynDoU4tCKgNqrRbL1NJWVu1qcXjVB4rJw45Z",
  "key4": "4U3JFED5rrrSGGTTnneqCAEkypATKYbrzFudcSnL91E45SCBavf6vRGrPSpke6dHPdiAeNxN6hTHsgCCcXpC6eg6",
  "key5": "5CUe4ywoh1niPNk5soYqcCUtaXthD9YsjAVmCzbnjG4P8R5hXVfxZpYvyi1JYbe3BSYmubc3P2vMeUcDU28nUvsg",
  "key6": "2uwgK9aLcQSiFbQexPNiw1udNLBrwkK2LkJqbd4pdxQzwhNtqwfHoLez45RrEcbNiBAZV7nZR4Z8gJMyysS4zRwf",
  "key7": "2Y2Ng4Wq99fS3yYvZ6rpuegVvp2E9JY2KFF8Mvi92ujaQ1Hk9WoeD1i9PQKQQ5A6mspUp91Cs3Nq265QieyKtH3f",
  "key8": "DeqiXGu5voUEYsFEZLNd21D4Zom4bPiGqyx62RpTfegg237facnhXAha5xhxvKg5UKJuuQ9Da9sPdsCthsdArgb",
  "key9": "5KKd93uB3mrYtPVbb2rcGwD2uMwQR4RbWExs8jfLCvK5J65n821ZRVVXZfD6PB19ctJJ1pjHghjBgqjVPrZzHsgs",
  "key10": "42RX3sEaZmRJgEeDVhEEYGqHUUgAcjenehswEWiBSngLpu8UqcysdjXpor7AajAMSXtzgscU7RBnAKLjucAhHJVr",
  "key11": "4QrF7AH65jhSa6aduBzVgevmEtAqJeNcDrVZXdUVmCjS2UwrdKxCd3TWEzKbTXyoWjzARbLVhe3QkjY7SBBneyQC",
  "key12": "26TnCegosWgFPCBu53wHNjgZ5qnpdk9Bjjk42fQj6bGEMjjH2RtwNPo96gFmfPGMpebFD9zvJYLsDR8Yf4AuVWKP",
  "key13": "3JM8dHV3YdciAaUgs1Nm7qTMdwQ7Hu7C9Bwxrk9mTRSbYcMjEVey8uyAyziJoZ6qGuTiJizzveBHkdq4qi7DTzdj",
  "key14": "2sfoZ5VzMqg33h9CUaDSFY4KskPykbEEKQ78gvHbnrPueNkPoM2B9QAiUP8pTNRgVVN412krdrybf96dTSSqgmDN",
  "key15": "4rmvSqo2vozsH28noYTYWamRFVYJN2MZ7TkVfdY2ckNgbztSDjmEs8Lw65KxN1fFmocqDqtQkKUcvcvytkgT9MqF",
  "key16": "AK3VbXf8EAov9CpUd7XU9v3jJ6w5iN9BRLS26Lt73hjSFaEAuVGmiQBjT7NRE3jW6cXBPWLNS9FV3kZrA75Vjen",
  "key17": "pW64UKiSXuzosZuqhJdkNq9Np6oAsRqj9Ha7YaRoBv8QjBWoK96k2huyF9zEyjzEVVXDbWrWHdMfiQH6dGv3cNo",
  "key18": "4facCmZusftv214cnePgGuxrgkZuXfhpuyVuD88BSHDGx5MU53vE8FsMkvP3hKQeuGijkpg8ynfzoqBLafjs62yX",
  "key19": "5SEP8557cR6ZPrjjnM4JBdwM3YkSx8GCeUCQijHo7yJSdf5HnY6AfKYU2keAHkcAMddugShTD5UEXUJfHA9Z3xZp",
  "key20": "4Jv6pFhJAA5chDdeVVrQF7DimBXiguxqPhGFGww5zWWJtMLeBVuytTkLFGgkm1ZqwT3PkHVSxfkwU61WJM7bebLs",
  "key21": "66qjKe199fbjc7zk1V8a7ytBhxrWaos9JLRamZQDasC8JwRUiDsu1DPKTFHDpr8VRH8UtsnGanWuN6TVsKMU6GaS",
  "key22": "kiGRPbm7H3Rfjvvjb5VcoBqHaLn3VdBSpkYjGNtY7CRLriWbNjcLkciXRUNAYE8xEETdngpgvtM8La25tAe6mXu",
  "key23": "FyWxbj4uPW2AKBsY5rUkagLpkaDSCDHmzRjGNEnqroWdUN8metpnpqf92vQiwD2iqx3uoEei19Xy4PzNmsHqh7E",
  "key24": "2Gax2K8GKVhFffAjpmrQPB8EfXEHmh8ugPmxcZC91kHANttogxVngQEKRunrJsvFfW1VsLHRrLSXnYbauDvWkWN1",
  "key25": "5SJtKBrHc4xH4fDF9bnit3u8B8zz84G2ENyfE6p16deiB2px24RbXjcUsHP83pq8MUx3wiGiYtBYMXvqT2VvYS1g",
  "key26": "5pJU9dd9mcseD8w56CpsCmYUNkVvH9KwVTvypmviCtQhcb3AcVukqfhS3uUsohmLsd5DEqNYibzhNkthwNusVysT",
  "key27": "2owDsAR18XQzRSHJNt6yzomgnpW8ESScvpWo63GbxpFqs6GnqoXCtZFa12Cqr4UQ8FThCJmRbmV2d4DasoAxxQX4",
  "key28": "4rJhS4by72GRtvCMeT3pt2ymnRSThdBuUD2bdn3yswoH9Y1wqaoP2VXHVpzZgHJZLDGwJuDGGvpcga6iCfxmgovS",
  "key29": "47T4NS9zLTfFKym4sSGK5RofLKCa9QjEXBLMhN7rbYaQ2Ju96wPSgU55TQXfiVPhRtuPQMeqb6btHZh7EAnKK5vV",
  "key30": "2CYc7du94Kz97tXhhNoh4k5cLT9FNYSA3Jax2X2dosbqehsqCUJWffNiAT7PatLcWemtgx36X4NYDsgVsU7AxsXG",
  "key31": "3H6TMaviFEUMeWP8v4m7qgZ2qiVqDcPEY6MioE2Wxc7oc6eCYWUDtG1xJuiLzfY8rBbvtFKRhDY44R7pdKkWAfc4",
  "key32": "3nxN732TcPmgj7BA5n1maHMoz7CP4orMRdui6hUdSVftodaUNUVhBNsx3nBsqLGcQdUddB1b8WjeBsubEbKjV9QT",
  "key33": "2GVu4axJLypie44bY4uj8c4HgaqVyrcdxtAW5MNkhfaKLnAxs3ExAYAX7fnxj48zXCtJ7h5gVNSNVEMWGoELaZHG",
  "key34": "65Xu1Pbueh9L5hCzWeYVCVPvQ3snEYeKWdY9qULTidR3HRMPv9gcFWwDATvLUmmigYhKzQMmWHjtTdX8gkpczr3",
  "key35": "24mcjQL5tqn1mntASomRPBSCu4UwAVSBsP6Scu5KtvugxyTGmNpnaGpVmV4U7LfeeXi6Rd2e7Suc6W4uRxKmZwB4",
  "key36": "y5AHTEvqorh89vX6RSXB38H9QcT8pZfy5YJ8cFjajkHafL68sgQvMQ4Ja7uWPA6h9wqT5KPFWouEgjg7tGBNdv8",
  "key37": "2Va8L2wAnQYdhHi3zGAdwbPJkkSmPhwrjdMh7JFTU9Pxd5fJo4AgYWHn9jy69rZzqbmSYh5TMLBhNFmmu9VJwWSB",
  "key38": "4gHATSaXicszBQFbBKpYAfY6sf1ZNixtbJQh9iZKJDVKfZ3gyNauHub1AqUUFkvxLNuhScTN4PpXYn43JiWszsc2",
  "key39": "2TRgFgCCfB2YgghkU2YVf3QUqEWZ8iUdktaUarczxQAiojs8dPhe3aJtwMYjQ9h45pXw8zyTXqesMBakma2GHDhL",
  "key40": "33keqHqvmpQtHu6yt1CwhbVZJh9fNxH9Tk5TCdjYSyV9Nagb2efemLTeY5hsweEkiLQ7s4e2q995mtn6ZCdag7fc"
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
