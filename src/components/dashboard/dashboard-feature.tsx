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
    "5V7WKY5FHz6ntjNsxQXGcpBFsx3k6HPmzCbd9NrPruAz1QYC6FBb52R9g4uhoBg7rqsfYxo2v6u8o2JCYBX1PGMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QbwS5DZxVLnzkWHfNiejQKgYCK75auumjVzA2PxhyAnzd1DGuwAaXjbsrZ6LjVtiTeeswiXpkQBar8K2HdeF2fr",
  "key1": "3jte7jCUkfVeerh3fUgUaayZjnUc95Gt1r4jvpTuUmDTLymsXEXY77e2u81HzFWSNDoBbQhXfSiGqTcmSP5or24A",
  "key2": "4BA4r9zqHQFLh5tcFN3WFBTLvhGJVfnYXTw8zNuLkBYadc6umyqs3nduojpyhppxG9jXnQEw6v9VGdywcXPaPb9T",
  "key3": "2bSpPJB3FfKYFPhft68tqZHSH6vgaAKYhsn1Ez55kHW7gz3SJJWX6gW6htEgb7432HRjjGWdsUyC7MmLTaucfph3",
  "key4": "4Y1fzJscq5genDBANmA7d5npSQqsmWMxH9q64PyoqAnCrDxD422Z5DCpy2vDsXM665xnHzgwSquvJKetMwqu1n5J",
  "key5": "xyYFjBxvfUhMKLA1PFxcbMvWBKr53dzSVH5Vdozn4MFcEWUZbo5bCGgpJANz9ZwP8UwHCDpZZ8Qc9k6UknnAzyh",
  "key6": "4niWXANAgp9n8W8yxgcHQrH3ZmxFDHB667QYwar6XcQAunSprdyeQxz5XFZS3xqTKGuZPCaLcMRCJFArBh1Bjx24",
  "key7": "2jvWhkhASyvsBiGYAV2k9jHpr4q1uRcJS2YXXxBoLFFWnptpftXq6Pw2VxLYM13Gs6Zuqx1jDnTq6UxQ3JS6qvLK",
  "key8": "4Savs5oL4s2o9hV5BtxwfVcCqkTHWioUgS1ys1Z28rtk59hwihDdAxJ3pB5DFeifjDtkyHqPpmCQ5SkhWPXaq4F6",
  "key9": "5j4yqHTkqTWNetQXQsjzcpzrtcLLAF626tNZdjRJeM7ownRFkun1jqLorAYMUu4cyGmRxLNh1baNnHv4tG7SevUN",
  "key10": "2NJWJGXYZRNzLLpP9yqrBnP2u1WJbKmWVdDGZrMeJjYWn8kvYTUwPdBFwvcQ8Jd1CTzgPasvV8x84XvnJjhjge3r",
  "key11": "5Drdo1vwKbYT9wJUDj8Pv5Jcz7uwVfAmhp49GUyTRY3CGJ125AQtsyje8MoTxLrFQ24SwxVtRbVTcyAsKTznk6WV",
  "key12": "44RHQTxCxbpFyR3pEe64AF5rc9xtqJ91uVBvnWDERRoJyVgA6ABzoF7gWYP2DDx4mgCrNZgUk8BPrNX5QcY21wNj",
  "key13": "591mepgqpbYt4ZmEk3tcJgCFvPvdCHpoCYvgG3jsJfuLEPy4g3Bib1KRvPuwEkDQebFAnuY4mAQgb7Pir7RVtkoi",
  "key14": "4ygj4oWt1fzkMknBW674bw64vSSxqkHAcpDvfujqg6pypf7Qfds8k8xYqwh7qqGaFbyh1GVa8Vxqq3CSSFbi3FXm",
  "key15": "5FbCRQhtVpZfzVqZDiCJZ4Dhc2BfqrAu4M7DtZAjhJvwsUoqPhVnbFBuWqntBNnvMYnkxsN2e7xFYgT5ehA3aj96",
  "key16": "o3FajDN2En1CmC2ino77MtVtmXPbRWaRVGLkpdKrfnf2kB2Tg4o7fLqswnq7nSXW1AvBWWSJUTLL5dQ66BFjm39",
  "key17": "3TRzFh628FtgxR3TP4sEqcYcaM9YSv7xZWGP7eR3XYSRFDFs5MvAJ1tYg1E1nZ4AfdULbjnFNG9sAeJ9Mawp85WT",
  "key18": "3wSgvRsrA8gtzkoUQTdK2jnLeJ2AoCG5AdpFrPVGzbBUiSn1oZXedaME2EU4NXHrzXRtZ3NGRzWTyzaMRsoSyxvJ",
  "key19": "2r9Ri6jLPgoijjMRWFSf5V7vo6XuC3iVLc6bMuYaLY9ohRvEDa1zgR2wsJuaXMF8zUZ4jaF8EjHp8yaBj3ZMc6bX",
  "key20": "2twjUNrUXXzTai4FvjvS1FS3xxn8RTf4ENh8DbcpKdYaN1C6hzz1FfCpHKw4JDREDRAF7V1FykCjetGSc8gdxRYT",
  "key21": "3NJRe6vA223unCGe8Yj4SVDNEMqtJKZbVVZ4io57bah189CtLDXsKoTbN34Hazn447YL7wob1BhFqZLVRgEtWrGH",
  "key22": "667k794Mz8CYbr4eZzJfT1YodrbGDTXZTz9zvpBsW2PQ5Lm6CAkoS3Bw9PEc1Ppifi7DuyKCUHZ8KiffvNTXyCn3",
  "key23": "4YwY9Su7XaEH131ZuV34Q8oNBX4U3MefoWWwhggGvCxECB1PtvUTnS5CdsZ9adjcu4SkFpFNmwURmuJCkmN8oNLL",
  "key24": "2Hz1GKt7cYGXq5xgdLmvfR51TCNZioyVXfMKXE26dRswfiDuhL2CKp8UyzfoPzC3CAEfsTPvkNSUDbLkRQkjCiPh",
  "key25": "4CoNY3Gy4tLPSvpk1ezTtXec5VZBvZ4A4ZmGgAhQNUuqN83zxXBErETBbudibJkFZt8dY425ekBN1vZeh3v8ot9Z",
  "key26": "vGaFpMZjPBV2H26JFUtyaWJRXhmV5AfhLPXYM7aEZG1svyc7vsRRCSxbCH2Y3Vvh84DADpbaXAmsjxkwU11NV4p",
  "key27": "UHNG78iuLsekQNymamn8VUWDeS8SMdzWBD154ZVMH4W7wTsyHC8A6JhAvVoZg32k741u6v2KYhKqdtQanw4qx9j",
  "key28": "4QnHAsekAEwTnhJn2QxNeSqQRnfASMRd1cyrSchgh4Pzp5MjTwBqKFVfD3bRmbyDXhSGpesUU3cBuXGB2oCXMFZT",
  "key29": "5gZJefRWZYqDLGucsjzGbPF9wpp7zNARuW2G4vbQUwRaYfhc6KJRCEUrWkP8FUnW2fKthmiSi5Rd9Dmnq2JGQ1rL",
  "key30": "L4Dd1BdxTp6Pb1puSriSwR8Xb4y3vYGhkST96vrMLeGTK5wMCBVvCqKR7Ffej9cSWBnfUj9WuSHc7NpKdxnDLVz",
  "key31": "489hS5q7vhmCEDwy6dZPuAPDFpsfYPo2y3JgPNYtokv6meG2rQGia4sWRTsAvqx9SfNB5v4JLhFBtTdo99yWcDut",
  "key32": "4EPCcnqo1rbAD67F8ZLABxSpa4Yu4VHXoqXE86AQABJPPKAyF6tsoCDnmXthUY261czq6DvA4bWMmbgkkSaF1XJN",
  "key33": "4Yi8asvnk9Sn6g6hFnfJqx2fdkM5gcVx8Nq6qS2d7s67AZo5JTj2ysTGWbVdfEv5mGGXxYnrWQLFcuDcoBzuJih2",
  "key34": "3VnyBHHLh8js2fHWZuitwyFiFDTCmYTBag3nsU12a6Zs9uQfTPaYdF5Ac43wjgrGPvQHsdzaUj5cJpp8XoGyxJTA",
  "key35": "4gezoZs3gwQ5rXnje1PbuCQLfgbS9otTTQVFZkDfMC5fMmraEy6V5BiWB6CbqsKuyWXHKFmtKf45TEt94B25Hex",
  "key36": "5ohp7xTnr4TKbKUWYfbo7mHcfLWPrgdNQPqBxuFpcZgEfsuC6WyAjtY3pevnYcFbxrJFRadHpTzJN7P1h77rScf9",
  "key37": "sP8BdVfpTJTxnEippP25jAyarm7CrsFnpGQiDevJiJdyTs1Ht7grWcVxpGSCuz63F9o1qfqYdmw2XkmsejeeQTy",
  "key38": "4ARMtUGvUGHsCvu5WLKg4oUZ56KgNHrDRLSCJSuhyLP2Qi7U8LxBChAEARCbvUm3QQq8KsuaPSnAMSS5mkT3GCJ5",
  "key39": "3CH4pAt26EfFwSYsbEEnBZigKT8nsxPXf4HEVZ7JRrWZSxmPr5FqCs6c3KuyPXGiDWNraUzYbqmduuR3R6VpLotF",
  "key40": "RBdRdLUBTNWu4FixguhF9xzdy7xk938MFxwmUURVvnhwEGF8Pubo67ZuWDxfB9x3oCRLr8YqHsiX3ZFkmq5vTXB",
  "key41": "3etCfrkwq9DppWFYc6VJaQjArZY6JwHaicSvcBuWrWjfoedebzGRaT2om9w7szcTaj3oA1ReLhwEmpVYtzDhfttr",
  "key42": "64thcyxVLy4uoq3JYLUFNpsCzmexc5SVyWJq4RWzZEsmNbVgKobGAiv6398Bz5HWADYUujFmMYDX8YfNaiz24PRS",
  "key43": "1QSnTj3tmQS61npicQ7TjcwY2QPgrvagWRoAnnW4b41d7qGFH3uA8bpdNGoTMDJXJVKq5XNgGpWKbxLjysv7w3E",
  "key44": "2VVngfAEVpYEgffeqjJY4qTMRwxybB6jB3HyPz5WFfeKYwQsog8ysWR37LJwAomXwVUsUJ47hnVyxxntjAKHqBDC",
  "key45": "4Z68qvADpf1WYRXqFNsayFxvkk5BtQwZaG8DyZffWKHjZKff7qgWUbtvpRqstA4a1KH8qFhkWQMr9sDnwPVYL1QQ",
  "key46": "3zQqHG4Tymd3tyvzc3vCdYociHtS3Azzkn3iGdweTLfziGeEFWcBFywu7rFVLqvsYfzxkH75ZSvoQ2ZahdJYWbiB",
  "key47": "2io61HB5c7W6QtopDid1vkgeZCuRNRbmiKYXzu1mhHqhNDgn7tyxRqErjKZ3YnE3426paKjVeLcmZHrQq7ZPT7BH",
  "key48": "f7pV5KgD8inWLGDwMkdZzFXYKQx9PRrbuyQrVVaK4Eip9c3kjnyLJQGA6eXZean18pjWabSt9e6i6D46v58ENE9",
  "key49": "vxK4UDu6XiTUt9oD99ifgy7hHCPVYRYKsgB6WeyEtN5oTRxCYCn1LdQ6WChGQr2EU7RWEAoie7AW46TWv8pFVAe"
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
