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
    "KAAstv4eTUzM5XNZ9PQeSAWr7wErpeNTcUbG4T9wEvN6vaBpbEHjEzPtZ2W6x2jmSQKG12LUaqoeVxhSwFr3WNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RGg9nptUtUaJXjKDKZkNHa1Ux6bT7UXdxQEB3T3jFUczqHBjgiSyFC5H4ZQGwDTevMAb2WDHPcAHXnqwZZkYyce",
  "key1": "WoFoDsS93cyM5oe1KgEc2pt9Rfu5gxXJjHGpGpH89KYHZufPGP12JqCj44pQragt4pjWHG6HgNbC7UYeJTbYRwa",
  "key2": "2jV6LeHu6PEvF5vqZaJJym67JX3AVHf3iLpYAbhoHN72debuDiL6fCdaPpp7GGTvXDppgPfbcdXKvc9U3d9aYTzx",
  "key3": "4BJsxazSC6GJNvYF8pWxNezbF5swwcUGh9aWDnVGrNJKUvSeCUhihHKa41i4fshcaE3gxVYT1r8hWyTSxzuQhsv4",
  "key4": "3fXB2G1ddDuDf1ewsiec17DqiSqHTbWio2Beuo2kN8knkYKF9TkF1Zj6prh7VzXyATiLXqfnsouj5SvRDtPmXuZB",
  "key5": "3YtCVrmvqmS6x2v6s46xvhNpP9rXXXFNwsL7G6pyJkpP6wZpfAD7WuDE3omDFzToWT1CRHt5NegSYC749dwpVMnv",
  "key6": "5bjv6C9cifSttiZ5gyQdW7JsDU1p6bGX7vF5iHyws5ccVpCYD1C5z8fVSRuMHhwqxDEzbqiYdDi7SULaYbx6tMFs",
  "key7": "595SPFMypZughQL8HrvMXe3vCfYey6KVrVBP2KMDGYCwC2Q9FzoswcvqFYLwS3iYt1CnqFfMeginNCyzicb5sibR",
  "key8": "3FKmvY9eAiUVn5EdZKMGRQEZbjJSQ8hzqp71CDFKoVN7RvwkkHzMvbSuHjejE8texYmHiWuZhmT4sDsVg1ou8ixd",
  "key9": "5SmBAfH91HQPBxAAZXWsksBfpr8rJ2fsRFKFnMyfe5BBnxxAzmoAePFELYqqmu4qyin1YXQ87AQXTEkzeViv1dpx",
  "key10": "2YKXGfxsAUauae4PDAv3QpPu7jY84bnVEB58Sh9VQDu8Vp7jAJ6ST8hoCJkxeemFFwoRqsidKKVCSxEDFJfthXLy",
  "key11": "4ZZE1ELVybniy9hvGY1ajvYZtoZ9MjNJm5PwRfj49yGLykvPThA4KrER9MCVuqc775tBdTDbexXStM1GFJe6eNZA",
  "key12": "3YZvoFtvq3PjKJsA1s5KbozF87fBSjymrBUzQsyUJc5qNFEvWTgcM4Up4dbftmNb1v2C8USKuKhKWt3BzQJsmkPC",
  "key13": "43ni5YrweZAkPRHL14naX1Xdy6zCsT8UYMRHZoh25rr6taEvrDAPtkvrHZCiQcZKYbd4TjZHBMNkrA6sbThX4bG5",
  "key14": "514mYEPLTMLsULxwPCHpmgtXanquSdE9SzVz9hEHzQ6vuXm6typ56jsaeppXuD9nTxDfS7huEAoa4WRPHH8BfM57",
  "key15": "63r4Nm1MhdzZfyLsLyFt3KnMMPwMJ87anZTf9regF8kuWfmGc9U2mv4Gm9RTUbrtUYbosGg6wUnzR8L2wX5Wju2f",
  "key16": "qJSx33hyfipKUyGNNqUXsyB7NPpCiMisuqPuSfiARg9FGv1tu82xzJzHQzga72LiPHjNHv739GbsEXFNr8vmwp8",
  "key17": "4FpdEAY2v7pTFR9kzmFyYgn2GveMzyfgwBytUH91gCgKawFWk8pcm36NF66Dofcwpme2NuH4WwUCyRaKkkQpU4e2",
  "key18": "2p3Da1AjfCYnYEqfCrdLRRoZbzQDk5DBVK2pSGqQJzK98VVPH17mgpsg1oALSSGgRoVnaye3XzRDoWKAfzUyLHUe",
  "key19": "39YcsB5M1Jaaiqx5zxXG5g6if5jnTMn3Fb9wYeQcwySwCD4xVWyGCPfffD8ScFzSZzTMAR1u7jtfrv8MTp2hHist",
  "key20": "4GRmeRLHdDT3SPbduKmsvKFdqReynsK2rLTdVLk5PsphX7Ktim17LJXMmmjToZLd1EL1rHWcdcVmyQcbQMGKn2wJ",
  "key21": "61aXwnb6fTqrd8SWwjnRbcHLkt5wQk5Ft7EoYwQeRY61iq9mKBifEMWQV8SjzhQ86T1iNLJTVGdcoSzwggtSCGWd",
  "key22": "3HgR8EDiu5AVhaNbtYzGLQqSzJwXwAW2ALYBWhw3vx7ip3DU48fv8gJQ1ddAR9621Cm329iwBur7fvxisbpZ9rXj",
  "key23": "4H5RDcmb756BRyBdFE5e5YfSzP83BYxkctwjsZEjpgiiRHfshwKwCBRRseQ3Ex1piXot19PmcaHHbxVAgNvy1uQ5",
  "key24": "5JT8Zh5HFXsMhJ7Msho6f81N5sHswHbFAVzpDhw5FBtzDLam1Rhuckh5y2stx3Dr3wVvXNuYVDmi6KkYivvqFLQ4",
  "key25": "3P65ukyfd13mRau9GUkkTm49vV8VVssZkGPFKGbir3jbAPLwUewJfZesbQingtMfptWUnxMTLnfSGpcp6qNrYibo",
  "key26": "2nNu6LEVnwvVmp4ZU1qQvGSB9BwNiMPZaxjmwwGxcfUwhU5nqjzUbsgC8TCV39VYw6osjZiMWd46uRuxFbfFVKUS",
  "key27": "2ekXL4r73PidCpWpVEQqU6SbfeHgg7ZfkB8SrQYfHxzJrPRCt85EaM2TyfwSu8moR4pKey9mP7KrKf5XgcEJbDMY",
  "key28": "4spCr4nvrGcHBm5a3V4xac5V86MZFito8Zx2ZppPHjPsHDkHADkCcopdEmLceoMNMBCLhowr2KMRUBcaHyQifUbD",
  "key29": "5qnPuihqH27fr9tpbaDc9fXmb7JeoWtZHqFTteVhrL3rMxVB2GvU9CxGFmsdgWpwWJMPszyLfttQtbiwUqoZe6bY",
  "key30": "UHC4n8UoRtSJWB7nX5agG75yipMdtRZpLN32s1Q6V3ULhGVxzh7panaDWdCnBf9y1cLugTEugzjnwBsYp2SFSQY",
  "key31": "5jEk9Pt2a7YULPBnkFzDNchSBPWih7QpZkhDx96WYrQngWQUMWZ35Toh3LFwTXwFL8yoKz3xK1T6wf5RHPCpKdHH",
  "key32": "482s1w31ZqBVQoJHrqPMWityCUBwRENE3ifreTJyWLtE71XKo3ZZgJG2rsJWowZKJV7p9H77RQ19hvfwo3GcPBfZ",
  "key33": "5KDYtZw18iNqU17wWUVscMiCjvD8PNnAxXt6qiodtwzhH6XLRbBvbsSPVPcPgGFN1xagXqEz85uRYbJcJ8eoutVe",
  "key34": "5GxTXmN6YUMFH5knrRT26joHJ8q1VwimNbEpm1vz3k8VK6YnofwGyaN6kDJguBF1hvMjXUSMcooJuY1PJqQXvRjK",
  "key35": "uPm9hdSHoArBcpD5qQRK8Y4NexnrukWeZmj3wnGCVcQ2Xxu6Q19QmpnPL9Bk1YKnTLRi2pEnRZ3jVvEDT68XgxN",
  "key36": "56Z4qA634vCghMwFGr9v8YXQSe8KFRJBm5Mm7QKvT12pE2jWsxrmTDuGShyfFHt2DrnXanQVCAfRSWB1EbRxbXS8",
  "key37": "3dBSXzvUnYMZ6a6oX73VCgMLZFQ9d1euUmcAGJCvXwwpBSRe6g62Y5AaNWSpCwYEvaDGxiB9F1h2Rk7DMv6UR6ed",
  "key38": "2jm9ZnRHpvFG7oet7UARbETPmwSSHakqPVcwF2kd4QvB8EcNFE9omYZeYbFVzpDLovLiCkWxirj6wVPar6qJgQ6o",
  "key39": "3nHKBijXGZpom4eKW1SADszNyRCK4mMme2sw7mEzAF7ztAzdXDF3pKwXVJynw5GugmhGKv1nTAJPfMZKFtriQ9pL",
  "key40": "2UX9kR1otrfLYKJJDyntcWPV67PMQaxUSXkmQniNcNkmvUZC3iV7G361pMa6bpjxJNV4dKTM7oGSVsRw8k9ekARD",
  "key41": "4wvdnundgx5Z3Qx4bGwLczzBDXguSgJbTdzHQH5dC2UHkB8ebDE7cwnkDoogQ97mFgtaMGCPdrpTqAQkdrps3jo4",
  "key42": "5RueZs1h6r7Pwd9QFXkfxjJDVxp3Xj8RremxswmALaHuLdASjVFzzKx5VAh3pyd1bwSbH759QbUumQQg9UUPYMWv",
  "key43": "2F4gg8KtGRqsijfUGeHgwPA1kMKwFqe8LTAJZD7xQoQ9zZP5tKo8MbntdWzXP2o4419fJcZ9Kyp1u5woeCNjsJ4p"
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
