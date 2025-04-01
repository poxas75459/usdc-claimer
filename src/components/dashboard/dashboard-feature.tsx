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
    "2JYhzgKDkbNipb5hrALrn9K5rnFmsgt4yW8vmL8i9NvyCNrjz59wKtQwognm5vLwPMWBXwqfWedWPv6U1YZpk9ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6qFnWo1Dsd6jrT2hjK5VV3AznEGJj7uZgoagxZzqUPFSF9NganesiN8Xcyi3f1YrzskFVRk8W4zcCGWhmrcHLk",
  "key1": "4kVFr9Sm6c91aDHW7pvFBUeemWJjqLNCg9QzRA9Eg9A8abN2PnbogMTGG9rUvKoQkbPEioiJHRAYo6vRKPxefekg",
  "key2": "2TTpXoneZmVQXzqV5e46kctCCUANXwhYm5akhkwHDrFahMCX9h1JKy7Z1JzJZjN3tSedn8BNpk81MiYvqZDPH8Mb",
  "key3": "3AX8hkDApkuJzrD9r8oADt9vpEq9N6cZGaE2op6vvoo12XbGB6twmKhWUMwFxtcxdqLHVWiomk1hfif5kQzdxWfw",
  "key4": "3ek3J3cScDRUph4VwAyvD5QHevkHeWUMu8MXDZvdhmCRiRJGunwUxmU3P6P5o3R6A6dBkH7K2k4Wkysto2DngHWB",
  "key5": "3LX2hX1L1RpVM7Uk8saQmZEsh18pdfDFqPnCAghxCFG9fsatqFC17Byn2uravQ8KLFAJ3dAqFRThNe3FngLXDasQ",
  "key6": "oxTQd38AcCLyzzC4ynY7sBVPzDMkn4SRsru8hNNeFQBUUSQUhUNjUWcLsksJgvKfsu7TQp5b5M5JiesT7GHjoch",
  "key7": "4SmyaRh11UT7PCBgHYog4iui3uJeWjo6TX7qo9aC4gZn8JUjwkWTSxQj7zFCxHbZr5cokRzxrRiVkBvCQYMVVEkG",
  "key8": "3H5WGWooibBuztsWkuWcARz1XVMt7Yrsvzk3LPsZe3csqpzRsk69vZUCVWdXYkVbYU3WpqGhV4ebwRWsjGmXsfL9",
  "key9": "2SgsUo7faWzmVsDpmRb5QJvWh3tsUaN6Racn2f12noCqS4CSLVv8nQ1mmHKYwnm76DjBnbSckFJQ8DAfE4aAmPFh",
  "key10": "2WA2hFq61UXHtdjTgGNNBSM7JeqYehNghhrfGq7nHCaTpLcZoqnF5VkycZb73ue8wxttKPm7PPHTNz6wk9h5adoy",
  "key11": "4RHSnf61jw893FVG2YEArKnKDBwpHxvMQZbHw7A8aDJqv9gBdzHr5t9KmynF51mPHy272muRZBeDgTxkmvzYvY12",
  "key12": "66hUB6cqBjhEoG326kh9wdVvRd3fj9B2qpbkB1L87oY5u5U51Wumb3M1SbdCxmNHfqeNknmmFVAAAEu1Hvg1Lg7c",
  "key13": "5kQQBky9XvJ2KgYqbDyD8hNYLdJwecPrL9mERadRfR3nSXbJUvQTfHK2BvdsKmvWSkQC7BZCJPZ8rBKaPciNG8ct",
  "key14": "3zhtodcMNjMUwNB4mTbutuFMFB8gDEfDU7eUQSx1VTUtEdhcAsmWrB7PyZx7sUSpZnichYnUbjLvb2LdJTbyzsfW",
  "key15": "2vv5PkC8WbXbeA93p7zMCPC2HDgUuLnVBtGPEFmtTpNehFtSYqGWnDFXvbSJiMn7TUytitinCXBJZtDi1wxJgcf",
  "key16": "5PJ5mK3VVyQtkbhQB64Nmwye38wz9AZTwxVaJWEeKshyHNkaMZfPujkYahKJ6Nv6wuwn6yjjzh2ugRdnnfZjn8uk",
  "key17": "2R44oBMAQzcoGteeRwKT8fUfqJmXa2eTEKWkpCundMrxGDHgQb2HggNtgccp9j9VzH2Zb94ResAA5usVc1MFEMbd",
  "key18": "4uv1h9gSLXAFAKZvkqkCMprP2Ey6d9zzNnCTVToFYUDiUY3LTUFyU1icYkd86T15LTjmAGfw3sXxDu692kxk2L6v",
  "key19": "3Cqc3onc4bxqJWDFpyw6Wnck6xenWNrf3cQUN6Gq45GHqUNz3YcPSerSYzsegDDb872GyKURWoZJ9cT314Yeecdu",
  "key20": "2zJJwrsyYiLuCSFY1kmudALNmk52XPJRBgWhNmLxKRm6HsYb1nV5paq6wyV8VTi4KByjJP9SAjcVdwoJmhgywp3g",
  "key21": "etqK26ccC72yaFhLA3d3tpqmbmr3Mcaks2Ba2QoEYWaZsAYJgqhCvjpUnh2dGGJSY65LYV98DACAKZ9UYtb4cNQ",
  "key22": "27EUCQE2s5WSCciANmduk9EhT6rZzZYYimzu5CkdXgr1N14q2iUvRRqtf4WJmn7UULZF5VibzW4iD86ecuaQJCxa",
  "key23": "24JVFfynxL9oktkGrmxH7X8eN8jLQxGwweE1m38NGgrNqRHEEW1AJCMc9Z5BR61r5MnudG2cPfg9raZ93pm1LRCL",
  "key24": "3RS3msKSu1FdWXJjFydDxM1WLvez7Bs99fec8JXuVKBkgokzd1guiBrMRenCaoNggMisbhvAaYN2y6QzjhTHsGH6",
  "key25": "r9uSKaUHa9o5FsrjWYkF9narU3BJgionwBNsCXFC5pM6WEWCt8RTp9LqDthd64JinTnKFVfpXSMfpAXSMBzGzqt",
  "key26": "2BurETTUb4bh5jLg2nDGojGmniTHbdm1ibcTuNENCNF4BZG4fJoitDUUcQNWdFyD1UPZRCMh9wCXYD4q7bg3n4rF",
  "key27": "DZgUohc7i4gaRvEdFiY5zAgMteNCPArS9xv7gfoNgGZHSvo9SE252Pm6EXbxke3cRhWBV15XEayzLbX6vgUotBT",
  "key28": "2f2AdQqbFg53B7Rxcu12dXMnSygZ44YuUGZByHjruMgqFtczX9NEs8zonu9M1GRcYPqR25afRmfRrR9581t53Egm",
  "key29": "3kpVh95ZMXgUEaSJ5Y8RY1WZkP9tYseCmBrNTHnLnhcXTFuNifcMosqQBVv7HzKebqxpG4ye6e3gyYT6tG6SG3La",
  "key30": "4P75M6JMirbX1E8eFAxZj3RbMMGQGgdnvbEVf7iXH2pG9WKgX2u3fe5VxRXJ3wU12WW3yqAwXPXqgGUKDaZD6ocq",
  "key31": "qY4QhcNp1NQn6gGpH7i9qNJfMJLPMA3zbbn9NKrxgxLciU3DajbnGJX37VwMjVW7rpZBP9KVNg2RnaTuaaDag4T",
  "key32": "5fT8FvRMd2RSCjRQPHh9rXR3XcySMKWY8v5Tb6ctTUcRe7c6MS7Ym8xG4CK2gVHWirdmP8ibPCMfEAAYDz6JbrXS",
  "key33": "5SRDyjTFJmzNX5qXZGX8Db5HFJL5HKyABwHdohDHpTcxJYTcwkdLzpSeWrSb3xtwjr1Jqi8UL9bNAXRVsCLQwH7x",
  "key34": "56WuJfgGdg3qx8fo5RxQiNegKRoB1GSAkR8BBncdoYD9RyoiwDqMCVaYo8ZnPmsyQrLBS8Ng1xw18n4ksjbsDzMx",
  "key35": "348EQK1RBEsphRetQku75XXwoYQxL6zRMFdZvzxZsSdgmivNso3hqN3PwjTQ3WFCJ3P15rzoq7L8S2CKTqs1JVEM",
  "key36": "39PNxAkqDBkH1HfpSp65LMuSY59JpznvgxTYci2ePcEVLx6bcDhhKHWZbU1rum8bqaReQwbCCG5FXnv3CcpeXENG",
  "key37": "2RLmpsr7eq8eCN15Ko77jrs9VEP2bmMmRPc9jn7MoEGrX2BUQPi667eiQNFFHLci5iw8FLJk7yFV2YAywtQu4TTZ",
  "key38": "2YPXtvMSSNx9u5JquRD7oHFv9xu5YSeqrGyjof7C9eW1DwZihwxuM9eNYTZacPqbCoMatahu6uruajBYNavWzDbA",
  "key39": "61oVvXkdsiDMFjqtaTMYxYyywoUn2H3LMvfz9UTZvxX5S5Kpr5hsUZ3Rfs59Cvk6TGhCeKuDiXK1KK7aanD2EpPM",
  "key40": "5H1ZtHWPCUsg35sz5R6fi5d73cvSKtXtHNm28Rn3HThvf7Hm1rvFJpsXKdE8B5B8TTLzfbxbWjQyNjYncEFtF6FC",
  "key41": "5RiXqPUL4tgAJGS6HSY9sXfmW2iUKxrwS2wNMWhtWQ6WGAF3SArrb6p4kuipLFBzhQkvFcEzkrjDUjLaKF9dAGCs",
  "key42": "4GuM6uJTbp6t3edka8ASFHXmD2cMncvQx5GygnoTnTmG8MSfKUWxXzoKb2pfR6oTpzm33sTJmYci59hkggSy5zYq",
  "key43": "36YgG3iiHvg2yHqgFFn26Qjvt5CXchmEwVRUEuSv8QTyD9rq7J1FqodxfXS3PxounpSWm9nyLATVTVAU4VMipmcy",
  "key44": "QvDzwkhVS8EngLiPRytZghp9WJuJf2vjyWs9neY6uhii3pmscEXb8cBpJbsr4REEEdhpauRJavFozxnvinv45gV",
  "key45": "2WehbZS1s7uRF6fmtrvr4GH8R1DQouinxZyroKLFkckGTPY7hz9atnmkJJx46yiDqwY82qqYbYh8tuBXGiSFpDP",
  "key46": "5XKdAR1ewoHdCic5i3eDAVqtvEVvwyo6aFiANPfbqWcdmKnQvFUMmk33on4LFsjKBVmF8QrSJpMxNDpuwe9Ndx52",
  "key47": "3wwx8eBJU9QCZn8KzErWnF9o7AntH28DSBE9ugfpbncRHpGvPPBTM6LKact6cgfvzJXiU2zscKXDU71cuzP5ts22"
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
