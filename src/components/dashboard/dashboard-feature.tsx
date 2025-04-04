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
    "CbzVTFtxdB3dowRx2zBeEj9EGDEFsZQWxmbbUdEYiQUMvhkmhsgAzaA8HPbQXbrys5YVC3TYkJkdFzbVpnGdx3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWJDDZCoAjEyjzcskjHaAi7XJaKcisi7PDRqfcL8ZD4aoWD3B7pMmiPnUZyp4cZe7nZRynXhHLSP4PEAN1D7Yw1",
  "key1": "2RJMG9VkDBHVgcTsHKpKwJJ2nPCyKymfmb2oKP3F2FmNfDu4eKLyAVGTWnsnnMTWDdzEsYr5qEbCq21F1zjTSzmk",
  "key2": "5FxZjXQT1BKYwAUhLVmbfphvqTXdspoSDMfPw65k3uGv5sn7wwtQgarjmyF57Nyq17Xk22U15F3srPwM19ZzFqyN",
  "key3": "2SAtLqRKF1s2bFGtdFS2duifxbfRXU6x5BzDLZ9UA4cYCUWPaX6RmYL9UUmDwKekSw5xM6QdLCN5E3AKWSDDRQeW",
  "key4": "3uCi7ZYWKpKRH7h9ewZ3RjKnWAjkpfb1TqBkUAGiW1xVST3yPbMBz7G8C4EbzR1p4anovEGQ8TfZ9CjR1rJ4F4hP",
  "key5": "5bgaCTkzG9iqe2fhkZyBrX8TwSQ2Y81PdBRvShipXacijJFgnRWp1iMZ7aMkH1uUFWGm28n7tfnra87tf1MoEbnV",
  "key6": "2VQCkhwHxYhLLFgfvCeRue5VfYjYo51hXUj34kKxwK4oPnL5rqHq1RHoHYcr6XbN5596mppjioQHsiKfZrCts1bE",
  "key7": "3QuV5nieXpNuZW95qLS7oVXZnzgmbuSNjtpy76mW1iB3XoFcKZ36snPVZ7J87D3sjMwWwMrtCRC9A1tt4b2ToGFF",
  "key8": "2pat7hw3As5PQt2HLotudrpDBqKxMLAk5CfXMKFwcnDcKgz3UhmhVfQqZHx9esqboVHPNxrPTP4r1YjEgRqHPZ4D",
  "key9": "25hBQkCi2Bwn86w7BHqduApubo1BCpLn1WuTCbRTdLfkjFv6Wy9MCVU6KtrzFR1u31Fy6m8n6Zi9xYXmsxJSfdf1",
  "key10": "5LxunixzNRdciRv41XqBWj3mHkd2RRaJN8aBqgtjYv6o546VoDRZx4yyGDUsAqM1gnsWThfK5qHVc5vHTQQCUa1Z",
  "key11": "2Jt32Nm7CFnk8yUSV2mU25jRPtdAZUK41vKreBSFNztxFH77wCvQDMeWKxbbrupKdoxgVRwTGH6vvsgWtjFWr64h",
  "key12": "2ZmWyDpGnvBtdTwKiJ2eAXrJyguL2jigaSHfFK32yMZYYmQeE6RdjDfDmJ5haXykdHjtwzPPbGsdqf1LaZgUbyVe",
  "key13": "m2hTK7n95N5W2KEr17xmoy5rtgw5jXqGgNXkeLYRPZvLwocMUE6pgpWsmqA79iyGVDMYaebKWzT8NLxQric4dYi",
  "key14": "62qjz7TywdTHZYb4P3GyM1ev1on9oqeHGvfFKNfPKQeSfKo99M2hHzrz499fJirDbK47o2ax8r8J4mL39JDDmAfD",
  "key15": "2DZn6aFNhYtZHdL2zdseVM9Y6Urtxr4kxGBHcxDJMHutPmFHUaTtXmo2f4V2CdaJkpFuK3D7i45SbTasw49ZnahP",
  "key16": "4aCT1xShVPjEVhGGrsZxDAdzs5crbd76XGCEen4pfmR5jeLD4RGbu9BTQ3A2MsocAg1uScnURaLUa3Wxbzpf9i5v",
  "key17": "2pCPLkDwwKC8axmqKojYMzaWbfo4wGbfuZLB7DRFL55yfzDk1L5B5YaUHHe1SNvUeunSR63X4znXUmj95pUAjVhc",
  "key18": "q3qh3KWiU5XnC4kkFStSiZwBu961cGFdqVbZj4iLndPwYg5Rr9u7oJg8rF1W3uC5EsnAVtZUQ4bYmRvhouxGvSq",
  "key19": "3451hwPNKeSzGwKxNusQxC3ZpTRKkpV375U6K6KL1TH5HPx2Mgg94x8hvmT4khV6erajSugQwbw41GzxPk4oJCy8",
  "key20": "2xzPGgsm7YhLRN7t8zvdQe2cV4qi68jM9sp4T4HvQx8vf7Km8BaArSL4Ypxr9Y7KhJRguUBUCHknVRB4CjwJBtV",
  "key21": "53qmQkdWdFXTHykFzXZvnnecEQqJ8XUPAaFfdWCFRxi5kfcCWTA1m7cWuSqAiKd8HvjLeF6XNT2N9uHqG8wQ6Pfz",
  "key22": "7LwqdX6HGQ4SYPbuxZJARHDBb1epUmadTJasuwwZfEsUrW4yRRoAquLzpxydt81htxGnHrK39f4b5wPj92sSZVh",
  "key23": "uEUsMTZj4d7PwFQm3PpuBp6tEgcK8r7toFgGpqEapmd2WmkaPQ9p7Dxsig1xL6WESAMTTQRokkq426ZQNpMKrLJ",
  "key24": "59QRtcwJBZrFodFgeYdLEZxsX32Y46eNL49rnnJc33FGqLJknz5DYhhHCuuFxE69K1pjm1WLYH5s6DAAQkpKTyL",
  "key25": "2zM4FPEA38ygP9fzW8SKnjuCgMhkGHwvCBJ2RARFwXbCpbJnzoZhrjT64W4NnB6nXAvZtg2Ud7gCXSu9LTbavpY8",
  "key26": "67LvhYHdPrTG2967hESV8c29nTJQHGRiXjoQ4RGZLnxgDSPRQj34cPzPkHdtnwyJiiQNqqm8Datz6JhStPtgaeXk",
  "key27": "4P7YGaKMr6rgVdMEJsyHNfEgQCMA3WCgoGB6HiyoyniLBBLBi2bEFchfQok4yhnaMJdEk7HF61x1YkR4fp4L5Jmt",
  "key28": "4xRg8H6a1FxB9boAD3Ne2V86jfBH6P2v9NrEpoLhBvgoMcUuWXkmAJs8rfgcYJ56XFgqSUGH5pgwskcn3THkYCkm",
  "key29": "3jeXYmSQopvmDdunWadqrBzXm8nNhddhBr2Z6YnuTfvXf371xDyunPMGaW8YfTGxkznRQptwQASBvWeqgpco7ii7",
  "key30": "DWVkbwJoSPmZ9mWm2WxZ1p32CMAwz7PQz2bX61aVAKq713nNkYjFrhrynsVtWvKLL1kKXB1F7PhC9Day8WNAFNe",
  "key31": "4KrGWd924ADRhonKJ9MdGg7eZ7KHc2anuBuoitLXpRmaVpkeU8aEZEXtQWHbLeZ5HJWzWjqSc8G1Vs2hnYttqRhx",
  "key32": "2qB4QJ3s5cJFAMSpHMUuT8FHehSoDKjNwbUqk1tn4gAuEQoCB4eXdb7yUwRzHPE1hx9cEP1mki1Fx9Np5styB1We",
  "key33": "4UpHMx5C8ZsF8UAMDc2Xmxc1XFa6nkiaJGSGC2wjPiN2z17YR15ZtJPhYVDaWxvVcFeg5SCvXy6C4CKPdBdsDGMQ",
  "key34": "4RQ1ccvFKKQM26sG7prcoycGo9yMBPMKQTkMMphVLrh8izFWP5Mykaa5i7DTb6cs8zXqNDVCcs36yJGottuqNReg"
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
