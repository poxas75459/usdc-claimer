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
    "2VahWeC2oJKGBE8Ccj1qavqKdAscwiZ6pMSENqghENtssdgLApbxq6cfLDwoHEEQRmgfaG7vziw2GL7GeAd6sXus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EpUjpwzWYaWCCSvweKJB4z1Ky2d9c4uZqQJCcF1AoS3sZx7iW11dpCNZRKPrR2CbTm2NrQ6kYMHtuLM32mr8Gsg",
  "key1": "3R8n8fB6pLfnxuUm8AsTbJkwiiY7RpftpCu2TXqVxo4McvF5yZETP2BEH8hrxSQjZWW4jktAtPPSXX84mxMTwge1",
  "key2": "2akZafByPG8AR245Pyvs6PR2Dqmh897ycpq18sxqJ1Tiqj3LKGphn5rm4JtPceJ2HPHudpJ7HMzhHxrzZkEBGhjw",
  "key3": "2bkhs8oysFiurNL8PgPaSjgALzHiSmcFVokw4sVD2Rcg3AE66PEs1tTRnJeV3kLUQ2ERwZ8H8ETYyqStjMiZSyyk",
  "key4": "v4bjD6UBwaeU24AhU1zY2k6QC5HtTuo7rfUgnMACXv8MuvPY14BVWGmgeox99CvFBvLH7tUn5PP8vQrFKtiaQNV",
  "key5": "4mFG3oacYtkCjq7RyPPVHFmWWgpMEsTA1t21RBLQWawdZE4wgozQEd8cre9m9XtUpSLwa8CHbgiVBZ6doWergKWh",
  "key6": "gihfU8Z3v7Nd9pCtyATBhGLAGqGQx5uJZet8EKvKRnine45YXp2iJbdCMb3Df8JL59WUYfe6QfrdureB57bNKpb",
  "key7": "2r7jjtD9fUi74o8VafWaZUNESuNKZVcNdnDa1XA8CoTLVrwZyjzJzamxBRwKpdUpytejLXiarTjy1xhHRJXb95M8",
  "key8": "3aGfAxzTU3jsBiV9x6rbidoWiwMaHN3UVjLqqXmURcYW3U4pmr9RNqqZTrpVCxPvCZJGGp7XHtS1Kko3ySv2vvPT",
  "key9": "KTCyuk7K7XhE9PEHsLZWLHbiXfJY6SMtqJaCDmNWxNZ2C35Bfaj6kSFaCSFsV1Dz6tyYReNVT1EBGDcezRgCo5n",
  "key10": "5HsELLvS5YSf9CeiJNryUg3DAyu9FhxEbqdAdjKkyJ9qeatKaj2xqrtHzDuQsbZTda231q6X5Xsq91FJL3u6SoSV",
  "key11": "k3JXTV7BjbtnuqTXg5XKL7N4sBjYTdkLAS1QzxMRSbwNUYe9cwLtYwpVpnub8LgKKiphWmi8rGbt9MchVx6Fhnj",
  "key12": "WeYngY3WSvLoiam1vFujwbF9Bv9cgQ9bvm4hKHnaoCHiFre44FPdsZ9QjHjgFAFp4TTxP7XCBqG2NKcwaqG2ans",
  "key13": "21P26mAZ3xdqS9wnbNjFBhhLGzQtXN9mGKqVNWaRNAHkdUSp1qxCRGBGDe1gn1MVPE84iPLZwVEoQudni5Xvs3by",
  "key14": "46U2N4axR88j2GsDgtD95E6nqo6DTHXo17wRj2YpkkMpSTg1jMAGvvAh7RpcejmiVHP1pnisaEkc7wQrUfLiJLJB",
  "key15": "2vhHa4vnJEChHx9yQQdFqTpUpA8xYtf8nAYkDoMYF25Zc2QJcHPQBeBi5bpCdrwKzPBzapwrnP5qrbvZpHLhRhn1",
  "key16": "z4543d8zrBSPNykrjnkx8iFZe8PWmrHMVyusGixMzfexrkyffXNbTUd4EmevYKnRXP4aaW3MPfQyQ8tmCJ5mNxt",
  "key17": "5ugymJFmnkzbKKE6Hcyh7VcYvFL8UjuGiiCoZ88hGGfM2pcBjGS92cq3hwiKs8Aeukkdrvox9f9C8gVfC2rtdjW2",
  "key18": "57fQQfxbXaHi4h2rpN2ioGiuWucPPnCzimndvD2ekSWVNRAau17KoGHHuZX2chV8kG8v5jjwoVtE6HhYQVak6gJj",
  "key19": "49ffxeQQMVtd9uRFesonEdQENMgZXLb8TJVqvuobx9eysKsgPe2yRsHuKezVULtcvK6CEKcQhwUgGavvrxXKcoRA",
  "key20": "3s288q7Fgjf3BgbGAM9BpSwj9778tnU3jRTd8NUriyQEt5KrV6QfCfyLZuyroVoiz91Z63mYT5HM3xQk5h6DNkQm",
  "key21": "4WwuTWSvQd97z1R14PTM7NRfhiqUF5UorZq5UdoyPbc9ECrBinXR8aCWJRYwAGvcmRujUkCKjXdgs3vuAxFEHJsx",
  "key22": "4BnHCkeurTuNTfcXCK9kSAQ4N2Xi9S3AKKgPEcyQsMxDaooF3wSWCTfsFjNbmgqqw8nfVzod5aD5y7EwMEvdkatM",
  "key23": "VvJKieiSbEAA2Fy2PoqxpBDcimTTRyuaBWeTvw7qZsab1Yx4unRZnAcBWM1RZD3w1W2RYpQSzyFvNSALATkRips",
  "key24": "SKGQAnjsRSHVPrDht3kV4ncceGJBQxEsM5SD6trMBWBToxBdnatvT6VsYzCnxKMFKfeDGQz1XyVbpjJ77zSCjy3",
  "key25": "36Bnn7RoT8KG3KFpYpJ91ar8F7JFJhJFehXW7ojipjNe8CeVWQ781m9LMYR97KpVKSUDwA2AYZag3WkjbY4ecZR7",
  "key26": "4G9utCyjiXm9mbLBk8Pgx3ioHiepp6m86DTJPqq2m5LMNHbp27hAJY99rVuTDLxZkhXgmFWiCy5gxd2jDDkUxpXr",
  "key27": "3SExTo6NZjGWgyiN85mbCW39m2DsshFGJt4Cj3gsbhCYcYo5ehoSaiLSX1nuXcoEznkQnMCM35ex5Fu2SSLpAUNe",
  "key28": "5YDSmtfhEqwHCmT9RXzmw9n425p1VD3z1cUp6CCT8UZwYb68N9s92PYKmdJdjKiXWvqX7yT2iSuVmf1ktc2t1FAy",
  "key29": "51FAhMm5GPnbL4kbVKkSQonhShzxMBubPP2xhXUPyQAv1WFSWXHwoqx7ofUC1NWW2LksMzxMWLmugLv5sg7gXGYJ",
  "key30": "KoppMs8n3U32uFSg43bMWZDPVJ52fr5EXAKFsdk1KJ3pbiJsYZYMJxWQxunRdiQZCKWwipPsd2xv4vuaMKwDGJt",
  "key31": "64F9SP4UecK6E5KhYQ7gbZCuWMX8GNA41ksFxpsjFw86nfgzeB3EHxshVfHN2g8hbpgRpDDEA6HYHpL5kUtkTMAS",
  "key32": "4pvP452QzxAECjiQcSfp94EiYPx3V6KihS8oMQVMJ2TX4ZoZr23931qyc51Rm7CFqvPAYLBJJaqsQ9wdKXiGt7xZ",
  "key33": "4huKNFVd5p25Y9cF4Fpt7whRDBL5EJr9gsK4EVrNMrtL7eJ3i6epEHsEGBMFUWR9gHV1y4njMNQyBgQx8D6D2Mb",
  "key34": "27GYc5RmrR1WamXvNbU8Y3Cp7KhoCS1CKqaTtCa5y53REtSWv5YP57GRSgP4cVJJDSfGDaUuTGnkhUsFfRcb2gec",
  "key35": "TmZM9zJCqWniRjUmQBfg7pAVHprt4VpN5CrLiLCWFtUsyXmoKkHH4BHHJa4YkkJy4L4wEt8ys4CxxLuPd7TN7xn",
  "key36": "x6SutDaM1E9Zhr2eBbSKCZRoCf3Gau2XLARRXZYTvZWuhzq8iETj5ue5PKzePAgnLPSa8MM4aJ3R5FvhgYVMXYj"
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
