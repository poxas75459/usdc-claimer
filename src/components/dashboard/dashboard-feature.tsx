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
    "2TQGbAxF3Ak3oc4X36yGRrVFGqDHj4YhxgwwrbDU7r9jKJnXcqXD1Vbrdu7wYpWXGPfJbYWq41tFrqM5mnwLRbsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jm4umoVh1bz1CBZVduad6iU43mPQEbm7j24HzZ6Nw99aJ9zmxb3qMX6YMUkjgViGov3oJiKYTeZbjR2mfauEw5y",
  "key1": "5fJnn7abFPgqAMqeeZQqu2jgKHLjHbMEJ227SLtEfft6Awbro3e6wz1FTvvNDdzpCnPxJRrVhCNYdgC8TGQKUYqv",
  "key2": "2G5p9Gc8D4CQKfT7jaTkeWtgq3364LZJ9Wc1DYFGNcK5kpHj1HJEMnG4HMUNMjPm1TANGiWJh8eJUocD5YtQPuyE",
  "key3": "2cbZFzFRL5wo6ifygb6yrjsaCjo6svHEjTSfP2PLGrS2KztJxudsSf43wJP9dtr23KMH1n6XNBFNux62Uy4DRNa9",
  "key4": "zLmNRUfU13SAZ7QLqxtr5rfFVMksZUaMcwHxaSCDrMYaAWMza1VR4JLPJDafUV4Qtp6tEhWLJijiMi2FVKgDTBU",
  "key5": "2J3tcPZJ8uRgfLVyh7tfWL7ghnurLcf1RPa7AirHRXtzc5Wc6zByQ68dxqKUcc7psjqxPUFQ81cJcR3V7uuHgnAK",
  "key6": "5fdqcKHM3zfwCzuhSw3Yb325hL3MitozwhxtyR5Yzk8pnF7eaXT7pApmDAdq1MYN8wxt88FmtVqmewKqgef9QYy7",
  "key7": "2gjynFjX9cdn1pXzEGaqZ5xGVDnK58LeVFgnWL8aQ1yx35MuN6b4ZdLMNLHo5u7ZPAj143t6hBMRhsvnsJ8PkXmg",
  "key8": "2121bpCweCoe1u5VtwDQKPehRRmoApHLPtTDpxeYPTsxuMKhgk1sVESorYb48ykf9U3wZrGQ9t8mwd4rDnzYKTY5",
  "key9": "u6Si7CBKZj6rsNhqavaV8PdKkfGWLpPqxfTKMwjGyHEgCZJWQsCjdrzQPyqEMb64FPsGYRoZJQEGkJqnLeAx4DE",
  "key10": "4T7BmoiVHTcZAWgZco5E3kiM4D3BDSH7J7NtfqmNaduLajZ2Xu1k1FFqVGns7mdJ1wGLTsJ2yr67PJGMg6rtJ2F3",
  "key11": "5T4tLZm98K5aoRPv1Hw36QVPM3WdDhjqRkYfUHpQUY6ECMe4MCQsnrzZwKqK5Up2T3hPPKKAqQUTqSNGL9q8DAvZ",
  "key12": "NAqxbBgzJj6MS3kd6g46QgZCSMNXbqbcmEVswCkK2WDMHG8DtptzE3w4WvCSbrnwtt9MgmDjpw7eSB86usXYBoT",
  "key13": "63H14HXRG6x1CfmmAnYoPpuHTPXRTvxWMGCxzY4hQmRC4PN8xAeq5RurCVGUjtqXyHiHkJuBcQdMw4agYEtEvdD4",
  "key14": "3rpf4cdBjCc8S7xyzJ9zPZVBbArKTiogy2YAeSGjfbFy5HpyLgB4MW1Cf2vnSNbkgsMwjykAc3M9wNYwkn62Tg5X",
  "key15": "4TYNBEhjWGiu136XfDmMtyBNGB5iusHoVDdbNTmU8RvAuMpW9niKN8G3j6W6o42C4rCzVYFZHsvnKpauTNv1ELht",
  "key16": "48xK6RtSumyTq5bUhFRSFiTggKXLbDdHbMRTDFaDdenHbjJoT4FE8PZZCeN8VGx9gBr88yrj1AsKQp4zH3HmNMac",
  "key17": "26acYP6WfGW8M6qY9DhdSQv2VAEyAUvZR2Hf7Y2A8o9bs8b3ih8R2uBzsfZKXR8JpzatXCjwM5dCwQPy3CC8q8fN",
  "key18": "3n95U5FYKxa3wbraWFFTdYxDSbefDATQTdQarzqKhtdtmAVR1DRAYDaBCkVFN759ErJdaW8t1VpFa5AQKx8ifKEY",
  "key19": "4A3R3K86T2benvDfL2RLcUyY1sq7vEBEoCbtc9XmdeJUavnjpq9B6kspS8bsEjpK6UV2mYmfMyx9cDZiByXX8Zop",
  "key20": "53QbnqCxVv6yBwzkeBYw77aXVnip8xFyhEgorJB8mYBomZ12ZH7kvuohkQ5ne2di4Em1dEDU46pTLVuixS4FLTqW",
  "key21": "4jv5sN3WfsikS9MdG6dNMgE6piLpjEgaTGS2wg6R8w3SHZTsio88ZJqj5JdjMt37j8MaVePSmZGWesDtXUKuxz77",
  "key22": "3pcnujdcNrAfuyBjoUZUGVCxuSmPzwzLjoDFCva2taekbg3z7UQbqkJiYpnygaxDkJsZNzNSYN95M8QTwvMHcnAL",
  "key23": "4JHbXgATZFCuxDFbfYdTs1CpYCtXEUmj7P48K51LFgUpWibj2shJRM8DmkgPJUTBbfoKXnsRnt3rJgWSG2f1m49p",
  "key24": "62UVAEf8co3u7q4CwNCzJ2BVK2NpjYRp1GUGJBVbYns16w6eZJ9jEkNvMxijcFMA5Kxh4jHThVtLe3FnSqHA3LE7",
  "key25": "3znXa3jfRSmLDnUEEWGBxg8faovr3un9YmpZS6qFuMEWET9bxzrRBWQj7VbcQ24avyuq2r7bfGUrSEi9Z9dwAhdN",
  "key26": "36wcG6hz4yRQZKZRfyNhAqQt3Z3UeXXtY3oWE28NzjFHD1egjktpQ9Yno4VxsrWae247njMz8s3noDeBR9mBziHf",
  "key27": "376uQ6nEJ1DLsYXcV6T1aTXkyFvHmNuyAsM8WMazHF2sBDS6zxvEGcA445RmZZnHKS3A6XfcfzL9z7zEq1yro7e7",
  "key28": "4fwnLRsDhCVXv1XjhNjrdBsaKMbGM3HymG6b86e8fWf6fyKEFo846zQE8yoxC3kcEeLGGST2FFuovcWwQ3SL2SiS",
  "key29": "64zYEr7Qs2ssUXwdfyAZQVvu8Ly1HKsqL3Cv9F3kaBCzHQHzaqosY89TkQx5VaX7Ucqizue9zcUKGFN1yqaXv9D5",
  "key30": "soJLoJg9BADb52wPRVCsHxAgQomhAFRE5nBX1Zj8sXvRCcLx1uawrBeSmRhnVnnAnfUDXSyLvS61pQtFNdnABWD",
  "key31": "4JrVgW2ZmKWiBS8V1fWpoeYYeSwxUK2Zk2vnxsrFjiwoSVgGWKiPQSRiagYXnhM8Q2MMMGHhFzsvuk6HWBMw5EQM",
  "key32": "22UC6b1Ebgz2Pndx2sSAxxdQ3xKTMKoAFE2ikFqYHKZz59yzZVFRSjXn3Cr8ksxaMLzVcqEkAm3NuS3NTVjNNJWz",
  "key33": "3v3DcsRGwM4SpxxMXexQ5Y9tLtVv4PEHapjqUs3MvQPkpYenZ7rFWzAURKKBKMfFX5zm3HDcPqgtNg46KKeqViMo",
  "key34": "62pzMjDcsYnNxAmf71C1tzZ5wiFeTAb8VZsLMZ4keNP3XPiq9sCfkTXnBn1EVKUFpTgfDCoYu9fXco9chpUHLVgf",
  "key35": "ujqVcjJJR9Ua6Z9RZGPPbx7sz1YDmeXtNcrixNS1DywFDavExeJ4gj8Ht65R8dptDQmzYKkyYGeYdmShkgwuCd2",
  "key36": "yX9kJ7uXD34phbMnyKfJst88AhyaLHUqaY8D1gRxc54iJQH61aeCV8LunCg3yBv4htxiJ5YPes8FqVJvLubDPCr",
  "key37": "225AaFzEaZhC77g3NxKzswRw1vkaub9o9WAv7inmuePycnu8fHARBnTjW3uh4JzDF871uKpVtbBfhee69ifQ2LFZ",
  "key38": "31qHGhJ3gVmRMZ9WfZ6FiHP36KfDhMBDjBZKJxBdZYo8bDbCPKAFk3EUNfM5dw63MkcQhW7ag5T4BUYsAqKdoM9W",
  "key39": "4yrBiBoonHv8YnqM7tLVt7d79Y1hgivic9GfqGoLibK8wpBsJuCVS6UwzNrfjfbPHPjfbkJiGuG1PcB176mCsBMZ",
  "key40": "3RqHxEoMmQhJXu78b2bvzdDenfu4bRXCRcsRMdCQDwWXDbGBZUM9wYprGNxpyv56iiFawuaq9GZPGuQU8kTqbKVe",
  "key41": "4bUVVspRE91SorhS6W63EtKdzbc3waSoZBCodLefeRS9AtNUsJM1Srh67n3gpqgdq2mhPKTE2pbWMWgXGZTE7Eue",
  "key42": "446y1mWQR9Ydx9y9pgcGjr7Et3sax6qVdDfguuGtJp4msyGMy9k2g5ZMui6PAJLNbAiFGzieJ2qMLCpGWX5Qk8Zc",
  "key43": "4Xr9mJbqiTxPZsdurQqNHd36Gcsr1vBLRu8ce2KN8UTEvWcuqiWxzy7CafwHB5kNrqPMXTeLV7douvSMuteC7eXC",
  "key44": "28U3nhWGzsHRQbXTfcsr6Q1bNvd1w38Va6QyRDGNkSk6vE4B3UDgaZoZT5GW7JNwHVFvVtvraxYY59TYeoLyNiit"
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
