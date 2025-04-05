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
    "5DdvcRkVR6CxcZkZ6mb8SJ3ycjzJxDzQ43Q1DXWF8m1XVW3YNFBiK6NxQYfe8LEAVuWUQSQCjaWwR2Lz1ceXDZGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBbKyjHvCKFDNbJP5kwT6vr2RDGmEMJgAzgM9HtPPLyXE8DF64cp2oQuvVoQHaNESiu4rYC9jBPkjPX5cSKMhkq",
  "key1": "5Mdae7ieManQpD4VQGamrDanT2S7sv4LvWuhLFo8UNGuRdyoRGse1toi5sf8f5e55zcQXZhibYbVFk6mBAo2L5Pk",
  "key2": "RBs7YHiwxw66P1XZwFVJ6pW6BeH99mZsRSnp8YaHJoCN2YkojJMd1dARq7CFWtX4QtdqErfrB2hgNQ2eJBZ9fQr",
  "key3": "3g9VTaBpeXbLwndmHyzJrMHAVKt4a5R5mB3CHxmj17pbG4tD78RTVhscCUq1ptwHZjF4sb3z23dESTZT6F2oRNTP",
  "key4": "UMiYT6mqgwtv1XJe8QLRVf2ZTotfPUnkcnSkUHNrPh9wk4KgPy6TEDFtnGppaFcuULt9TnHyRD9ZidWscdqZ57D",
  "key5": "3JjPSNwW3kB6G6AEJVNpwWVsbeJuByifwJCm4bZX9d3RyjtJmz11nPE5GoGxMt5wG9Re482CmSdZWDsdkgKUvXg8",
  "key6": "dqsj5mtGhf8dvaL1Kw6nneFWBYyVQBiyEYRp8Gv7UTPTtCp16eCYjw5znL4v38MPuhan8jPXFMwb4vtKgXVSVeG",
  "key7": "3csMe5Cc4vgHf98kKoYySrkFRa37xgCS7kASPLKsWHct5TwMV54DKYJkkMsykGvCyYCej44xXozfk3Ldf8LoBC39",
  "key8": "DA8ANHiAa5wJpcqzBzun1BQtybQGUy1ky1b6oEQjx1VSP2THUJhV38fRpLpQqmk1Lg9cdqhCmmFBnDUa4TxXzxY",
  "key9": "2JqLrNB2BAaxsSJKhAJtc2cczzDYLZKjM9uaLNX2sZZzj7DHVZUVC2gDzs7xEfh9RoAgYdi75MNWUS1JPgVtKecq",
  "key10": "2sAyNxeSGQbM4rZB1zqYDvrt1uy3fQ2eAPjq47Upz4FzXG63AEFooBhitbRTF3ZzADNe6oJtuLxZq5as8Tj2jod5",
  "key11": "3aASidxMGvQJKt7M5qdgxJ65n9zdu1XVvVSR3XVMY3eQy8dCRQqD3eiuCuvkdJmc96pvhgdxkjJjxRjR5VS7eqcs",
  "key12": "AMCQ5Ss7LfAMtrh32YDv9pRzNV9LUfbycPjK4u8fdMLvADf5QZVZw3v1YnckXBrB5rgk2kLCokQhyCfi3vEr9kP",
  "key13": "2UqcF77yvDr8huZpLFkFZTwkAnq78AE6Y8ZP6Q5Vio44sZiJwCE2kxySb2WmA1ETkz1FGBisNJ66f9YMcXP53JZB",
  "key14": "61dzXh9ZZDt5TogRPfj3vQV9d7cArGGFnWNqB4kzkKcpampWQJ6XH4giP4YyqV16r27UDsiX4TnKcoZVdVv4T2ez",
  "key15": "2jL8sibhj9Na5CL8Ga8hRWxdFyQYhk9qJTxkWTvci496QNwY1qRrvS4rzefs4eHRin1beLiaLCLrapcmPUFX1sAR",
  "key16": "36uaoR5DfSuxKUQ27cjGAogA6oYJ57n67HAHZtV63UW7PFHyRNuP2QpJHZWyvWm8KHrdF7DgoKakdV4PcC6TGgSp",
  "key17": "2EhaLD95HXcmTx5Cgg8N8n9oiQC6bVaB9YfUyMcoXUFPSEM77Hu34T2spceErSAy8kQg7hSAWJZeSzpSnJLb9i95",
  "key18": "2isF3yC1HDsNTpk6s7ipjqHqXSQseEhtrXWJf72eusE7ZkQjLLxN2s6633rFyoEAzWCbm52TzyFkLPmo1XTBWCZK",
  "key19": "5NFNXyhkAwyMxScwNCwGS6ySubnQHDre1BBEL1gJTjhQz6Sjd5S92Pxov1YNUg7V66uaDoxKGMUinzH349Pr6PmP",
  "key20": "5AvRwK4HQc3zdtrenmB4zoFPa2VVGehmViyrLgcFcmvL9cxEi8khkC8CDc4kp6N45ZRzmej8cJLLzspXj2LqP7Hf",
  "key21": "2tHRQWmXScBoPvnAqWjnhJoREuBXQxMf8aJkyEmSnMpuEthD64cgPBaPB4ddupgDhFBotWbqNAwUbXwNicfzescd",
  "key22": "4RsBwekzTtadjAJZ1q5wkjABsHuNJYhfHcBsH1ifP2WB7Cs9WsBQbBhJrtf7XAikoUmbZX9rUNN9NDCveqbQjDD9",
  "key23": "uk594owgMN9vjqSWsjDF7xQNPjChmHhPPbSgU2qwjzsdomKUqP9Lkd88dyTbBGv6jCY2k3FPigiVszEhaCDzB5S",
  "key24": "3UBVLgw5TSuHrBoKUJXd9RmtD4zEdhakxzQJKhS5ZFNdmpWwaXeHth6qZcnf92dwYmgZrAow1p8fsGSjRTt8Vvvm",
  "key25": "3aoTpVDqVqvt6w4NGDbwBxrGyQhuWehKbTKbkiykofbwTGc3SUov6TkuNAX5qYPptiNP7s6atAXzmxs6hQ8V1Z7y",
  "key26": "5kX2BVn9kcNgTXWfvgf3mLj66XNnJmrpJPGkDssAoNQj8RrqXW5m9pT2m22eZ8scGencjPTvVrpAUiju7ZFS37Fx",
  "key27": "3MzRpvhMn5n3xp6h9J9QXVwJBbR4YAtEHXbqvVTKFiTJX3QjUmvgQdpz1cduHatcFDV4Pf3taLZN3m5syCnCsUnR",
  "key28": "3T4YBe9CpWzN6bpcVeZFFhatea5kHnoPY4G856hmP4eqBVJsoJwvfwvegsPynpGLeaWUaAXrEhPp7hsPEMHtKKp1",
  "key29": "38XYT8w2xLFgXj2KQXC1tsJwTYCNXD9At7Sr4XMWAuNiZUDChiQXLSa9XWfYFSJBbf3fUoSAVcJTtFAwdwdzgCqJ",
  "key30": "eCpCjSMzUVE4rPKZ6V1xaAqqGok798LkcnukCZ8sLm6mixViYaQoUU3GXjoAz4iF8r1AZRg1Xav31YHJQ3vnaq5",
  "key31": "3RBJ6qPit8YBKbgTLMutEM6RCoMSgrXAn4U1RUytf2uM7rV3SggnFo9gpC7n82dbJqvtXvHMmqjTjcocr8cNWEsv",
  "key32": "5YayWw5S13TXfBnwFq5EhomBwFNBe8LNW2UJ43p2Et1zfUJtLPVctfX3hnfuR6eBawArCWi7KA5B38yY4QQP7MX3",
  "key33": "2JPWPTVaoCT8N7PQdZDYtJkW3y5Fps7FhgexWCCUvCCUuNmyLF3ZDvgnaWuQCzM5mh6FFU8pJTTzb8Nqs6DGmMC5",
  "key34": "44GbGDzaVAbYUYq9QU436G3miqzagoSJNx31A3DDbzEpTc2jdw9uR6DiDwYReQUsV2d71azXqyASRJwmWRFjfvhF",
  "key35": "xaY1azYeMaYkM6w11wY1CmAHVkbEtJ5kDBWkFnBX8ETpbW7FxXnsN4eWt6c8Bo4AvkffAkm747K19LWTtTq4Mvu",
  "key36": "2fXQ1EuFLtk8Zat7iWev82wgifYrGvuSdpSz6KiYE4eTCM2XkxF9DFEFoD38sd3gbHk1vHP3cdRDiq9AinnbgRcq",
  "key37": "2rhkJK7xsKQXvLZ3a83ycYhLfpToJWJoxzbzJHp5nbYXgQKo14DJXDj5NogsNKUtjRD4dWnBAu7oyeY5bsGxY6jm",
  "key38": "4uLLd1y5XKnEhUi29nTtvqoNPu4nHgDRrABcbBSUZZueNudedZg5pBnLNqe2sqgfCbeZj7PJWbToYBwdxsuM5d3X",
  "key39": "54oh7i1tFk7Ci5Tr8g3DERF9U97o64RuTGkWS9s6UNHhsCfweY5ci8hZqba1fFxeXebzQi7bthrUGCGNmymx6Pv5",
  "key40": "2ysEiEwFzDXJdVmejdZnwMyxBHd1ZTanszVkC2eV9RUYRA2snV6vvkkk5PQTsmpzf813a9NKmuHA4bdWLs5ZCXs5",
  "key41": "3ac7sYpgJqh4KrXfyzHbkAe4d1HmoAGrGFFbYS33SCEmqGXPQsFKPkVtPKwy3Gkxet1Ki8aYRqoS9v7Lo2VQdjZD",
  "key42": "2LkRoRr5SML8jwvNt891YHQcTrvWKdeL3HBv3okDRYupZ3u3CYLZkp12pEsSwdifADapCkFziDiq9tooMW8dg4pL",
  "key43": "3C6bMEyS78u8daFLkyF8rd84FMDSukfCr8xwwJpYdp5Q7HKX6pXUDhmgcksC9UwH64mNWxQrs5NQtAnHTW4iJnsr",
  "key44": "4aHapdYxksVQ1XdL67mGUbgQS1zjxYwJNeuxXfEXLdqwEmmzBLAAz6Rm5aY7weuQHemWD7g8n7ifpQAFJWRG2sEV",
  "key45": "28MeTjUr27mYUmM9HdgERPGuozxrGY7Nwj1B61AHixTxmg6vvpZJxshbVwWuthFagKto64UoHJ7H5rqC4dspc8nr",
  "key46": "4NXmQfNqa16s2tbxiqLG8ULzHDP4tvHz4RY5A2yUfUbQrg9DSuDoGpRZaYq4rCtjqB9QMtWhPN4DCdjCJfp9nWEc"
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
