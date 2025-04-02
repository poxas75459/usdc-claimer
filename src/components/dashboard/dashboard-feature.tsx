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
    "39RGkEGnna5Aq31MSLunHYbDdPsyJz6bo2ccmPBR2sJgL4C4QTNEzpZFKjpDQCuh4fVoq6GqsGydiCcwgxbosK3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZaMdFHBkZQLASSJjGvv1bEdx6yKKtDXiiLtjykCaGdFVDUTDh8CPCiXSJw45Ug3uMpxrbFpJ2yaRn2CQCqMsSm",
  "key1": "3Do8DThPAvzA7WS2AuzmHUBShhxgTMV34VYxwgkmZ2JsZ8tS9HVs5fxgVWi5JuxhTBdiKY4ETxF619vbt4A7ZNpo",
  "key2": "mKz6cpKfKRRD5rXwgBB8pZHMsPjCLDE5BtFe8w2s3eCeucXKaXmVTKTkYjYPeFxQp3nJJAigdqTC2Awn27qohAx",
  "key3": "3P26GEZVwYb29SuPNzWiNEv71znx9gAcnzDyY1tb6v3g2CaRCGp1dJv4QZ7KfAPUGNFyjpF3NBrc6EHAJyXJD1uM",
  "key4": "Di23mZML89yEz1KCFiLodbMiKEpFNXZFvqTWSH9JTgWYuURg3RzBajDktjwi9RpHytgCgeZNSbc1tTUozhdcQNn",
  "key5": "fonD4fwJoeaT6TDhCvsMXFifzKiJ6pZJeneuBcdr5ecrkHfbsjHWzJYBmjTrXPiucRvdTrHWAeqBaxWPqYqXReF",
  "key6": "2Gf4T3nAxx56GBQgea1QSDx8hdp8Yk9w4KyfK6wiajYy8eFfGoE36itbv6QzsTu7L4mwjcoxxgipPxrmJziVixzA",
  "key7": "2b7JsyEq6f3ubotb6QePdBQfoC8T4qL4z8ati4DokK56GZu5stWrFcjPfdVQkQ5JZLbsrU3i4ozSdfdfDU8YyAob",
  "key8": "5KV6fSMHKtZJtScKuCNGrQGPMAvt6nVZ56vX9BBdMsZ7evZUTeGXsdhxJknNKUdjsCK5woLqQfmLSDgnMzoroP2o",
  "key9": "3EJjMUKze6y7cucQxEjjgtreTr74pJ1JV47eyFHpqESxD3yDjFFSctf1jhF3NyXSEScU7Uim5XYJyezKm8f8w8Hd",
  "key10": "4Rz4csmyX1Zq6mbQtxfKUMjfBA8KpYRAt24euEyDyojFRtmMwv8BLpJpusUUvBJeAr7NMkEpdnEXNUQHo7UFuQVP",
  "key11": "NU5ecf6b1crGz97W2FgKmGhXn9h8txC5ergCYGWeVkjTsyRwVKYU5zho7vy5iQGSRVqcUbn6fLziXjgS2Xb3nSW",
  "key12": "5NCFEbNPBTE5Dd7nmKCu7ZAaMZTbMYLtSDpbHJsQB8vaCbfYCCSRph2fUEbzT2MHzW6AykNm7mdeMLjnamVHFYny",
  "key13": "2gBMLMLnKWQoYyVQGcf2Xqb3skgSpsY2kBpsWCCByR72j8ipByz4tEvHBYhNR3Y48Nfox5Z11iwkz4uyshWQCwGT",
  "key14": "5HTx8yvUKepw8JK4xsaww6p9Ep99xkEcqmZET99hYnPzRY29ciEDeBL7epLrgGy2RMXDLG8ge56cmeqRtL3hF9Fn",
  "key15": "3qXJYnWr6tfDwQb3rg37HhJE5ySMCyYx86UKpfwcmMsCm5TcBKq2aH8HmptfH3pykyysUKZPbYAaAV6zRNSG9S8o",
  "key16": "CvUojt7xnnGT3dcEJUhcsvAXPSY8wXkXe9XteS7adb5fhp1XrHn9TS2sccjuazYdmxp7ZPkrhfZkjQgobuvvrDG",
  "key17": "4Kwi812etGGbkwhTvEnkN3CFm8t2jFSPCnEAXJSS267v8M5ZrTvU35My7SDDQQRirhaP8TumjxuSw26Z1UTfiyFV",
  "key18": "2fLkPfmBz6oo4qa3kgJUtoFk9J6ksP5qxEWz3XcD9qBbtqBLZh3Qo2a6512z1NFS8JuVucRxVemRkTyP2nhpcAQ1",
  "key19": "2iXw4QrUbyFRRV6fxCvgdM7KHzqj7sNwQHaCmz9pZCRbxUKDrgmjygrv7Ezp7KrtMF7LFmor9QsLvzi59X7JHjcC",
  "key20": "2VMqxEqJph19i97mv6cvGVB2ku5eWPdFZ11QKaKwKDt8atvQoFhFBTt2yjpxnrFPvTXQJgThjc6A18Rx65ajCTkJ",
  "key21": "3VVyvi986LaRQHHx7uUMQrur3dau38M7MocYD9ZMCY3uqd7VsEcX9MBzvELx7Y6z5Kk3eV4SyqRRQz5hi9EcHgFH",
  "key22": "3GDc2Y78shc2zqM4AszU4Hyzn9MK1pVb6LjvoBv3NBLtSLHvoDg2qWNwMmoXxZQjHon8sNvkCa5MsC1m2QYanszD",
  "key23": "5x7mr9bnhfk1DtkGfQeUhLibR3UyRmwSkNkT6vEvQCjgE5NrqRZdkJ9PL5NvYzRbGZ6JB4GeQZ9SrvUN7FpfyqUG",
  "key24": "3wqaWy9oneF2Ka2rpizEckrMP6AXyAFUBzc6ABZREPMrNUdf73AGy8SH4LhsQ4e4WsEMLvpXnWBJ2tquaYRSnN2k",
  "key25": "cVh4k6Ygu2tS23Xo8YTSpa6zPRCuPyrPeVmDyg8jTb6BTpf8PWHYPwNpKks915bWY6pNBoDJ23Cx8EytjRZD17Q",
  "key26": "34gpqMSsZ84rqdksRkJGoYWBHpUDB3JQgaqkTy1Wrt2H3B6qMLfHDDXABZRXTrxyrRMmVFxT3XvMUHKmb1FPKoAr",
  "key27": "3MFHDNkDMoH1PU3oh8G8afatb4bSpja4j9npioJ8tXPXuvUpR9gncPuS3QqURqkoKCHqgPeRAuQ7a8CiP7n6jSt4",
  "key28": "5qDA1caAbEPUAYvZ6kw2iRgECKZ9L58nBqKpF86yiyASuuWSWkBgztnMzGVuQve2SKp9yaPtGsavstQWXuK4fwcv",
  "key29": "kDyEAFDLGeeyHzrQSfUhphaRhSe84KQUDR4RHwckSqWRYKUXMQkE6vcGPFrzaD3znirLvmDVdVCeJoS9NpJFc1Q"
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
