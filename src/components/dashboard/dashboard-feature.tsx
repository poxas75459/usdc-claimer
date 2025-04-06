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
    "amRBhsGS7jtQPH1zLN5uV5YZ2k4XeeazbpcCy9245vXihcxfhvRSYx6ydZpAUQP5aks9CgRfzEzZQeVpvEnYNgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGXxC39RDhkvhn2z8BjYAbBEhiyYSrnnEe21gZdPEaVrWprHW7TrGnyHBgbin6KVaByoELyiQs2vaCAzKKTjWnf",
  "key1": "5JPYDWhspvCZAqw7cw5i2iy9czRKuKpp4eiNq3rR1k8BAkufGaPbwDPM3u6TvpsrEdChbfx9LhPk8PQBPFVrPzY2",
  "key2": "3WyrJTJSv95cETginvEnQ6hAaxSVX1xhPuQppVNd95QGFfKJZZwxZ9qsWUkFU5WRctYEfhhYJSoyufsFhnM679NH",
  "key3": "3vw29KawQBS7s57nr5opb2i45gPHxrX2uKahjY3Hgo2A3GM49zDzP53LECTZVuVGAgCQ1SpFbSoBZn4yphiB3zty",
  "key4": "5UNsos2SeNKpjGVKNCWewhWdJEgvrkK1whmBwPDzY6gQdMDpioW6FP1HXYPfSVgs9ucyAS5gWjLe14ZqEVX2LcBu",
  "key5": "4bBw3y5kJxEoyTcYXS7VETYzCfb7jxnKJCJRP6qcnEhFJ4eDKj3kFaJZ6rLUzyQKpQHJQhiVc2k2wCGojDHLJjG9",
  "key6": "4PXuoC2tF2aJ1AV8zbdv43UCdDtDZEhA2JFotMYHFfLAaPVDk4TNnLzFaF211Qeon1CbUeykJbvrPxsADukNdtfA",
  "key7": "3mUoKdQjmPpHAPpx5PwmpreM86ZAQT3FvYHq4oBUV9Gb9Xv2ZZw98fTKiNfShtTjLyEfVtu4PcW6pxAsRidQSNgo",
  "key8": "34GVKqjKUfSeQnhfXCt462SrWGGoixtHCnASdh31X87em4Yb9YpVCBvuWqnTY5h1DjLDvmisXroCb5pN2PQnxLmV",
  "key9": "597p5FZcG2EnEsQgfkFWW86AYscb5nzcJMWVzfhNZ2aGX21L2NfeuADpQ8M33q9j333VqFuku44mR6x9TechiCAH",
  "key10": "4T1LoZSdxWocZfLH1SJ1qskXXw4JXQZ4rJ69Q2Gfyy5pLRFdr1PPfQTHiPJLNXycxyANUB3DybWV2aq79ngQrLde",
  "key11": "21PCALJsy4snGERAbHRm7YVbo7rXKxH5WFajQyXDxNW5A2a26oCrH1Uv1k5TsnJgkDbTPnA8H4H9ghdpUoZ3CiBb",
  "key12": "3eShRPFx1C9qm4HeEKvKHNDWMbPhSLym6mpWgsuRJqSeASBfLh2igPHiLodkqoJ4qC8JntE9En6MkeDaFQYTYMZ7",
  "key13": "2YWLtdQWzkAUDiuR6fxe6PWXVNU37YYiCXEqQ1Qah3H3P5Rz1UXVys962wohwkoCQ8wXZr5nVgWt3PxyyJ67ckgP",
  "key14": "4LBuY1VraRjkykPPfy6jtM7ugyBSmsiwTGx2bRKug3VgSK2QizQyXp27x7gYkWJjcJW8pco3jSwMf8CAtukx5aWa",
  "key15": "3qbnv6UXhLHD7UaQKrZkmr9N1C71cuda365C5LSUMXQkByUEqF5n2HQ8ou3cbsSj1wSdtoh2w5Mja1qzZfwp5zYg",
  "key16": "zPc5GUruCLtD6eNjNEu468cqGCePuGzh1jqRXR9djSrz9nTBqb7uKc5L3hiLMp7AV6oFmDzCTns36WcbVF8NTdh",
  "key17": "3LqpmnFhk1Uf3ujZhETF2NvMAMkc1ZPpz9aSahcJpV7aYj2JBRdZDV5rsDm6b2RCPmkb4CUYm6Rz9FW5n6AHFuGm",
  "key18": "PG6px81fQxS2CUGNXEMeGqmfEq3UeRKL8Y1w6jwhk2ouFeAKzwmhcogjwMwZPdtn8FWhDsek7A266rFnG3NseHx",
  "key19": "3M7FNNfvnnrbmuZEQFth82LNpQnPKbHEnnYeNR2czsD48Bch6zt5NAWHo5hqf36dnLpztvsK2YwpairnNE6xWSGe",
  "key20": "QFHVTKJGyrPx7WWkfBcPqyog3wToLBnjwYkHTEbYyiDADcnXkVg1M1XoapGeoHaReHfocVHiMJs8D1TnasFFxJa",
  "key21": "3mtedBdQsqfBhy57N55QL7gkAhoxkeKpYGMdLAvhhsXvGNjJxBx5ZSUFgfeV8osirSiETjkWRq1qppcYwhZ6fh8a",
  "key22": "5Bchet52UbjCWunetBjwoHr8ttwe7Ths7gibQw3R6U71sZXS3zUqQrmEGs766mmuAGEgsgMr3L5RAEXdUnstmQ8f",
  "key23": "2jaEfMQV87mQedDKiYgjiDcU6fQ7mGjk9aMyNxmKYhyewGv1prKt7Q2FqwHCfn3RU3zzKcbKUN9KefC4NFVo6KN9",
  "key24": "5ReGCt5B9LVsT9vvshzLH5HcqTkH2QHJMs48qDSu7XfPohbPNAfNt6ggG3YYtF4B3gvGAcWQEDTfdP2sHSfsGtZ7",
  "key25": "4TE7ZX2QswvjHSKaGUwQ17Luueg3MvTg4MrrkVtovkEc4KyvJS8xqAcHHVWEs2reF6og1N1P6Yoex9Wbnnwwe19N",
  "key26": "abM7PAPvQuY23evqqFhyxLJXSUFihuSUFvdeZaWoq3m3TLvRJ8dhbn2R2HzMY8rWZsoktMjfNsyYnbJKQNQCWKk"
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
