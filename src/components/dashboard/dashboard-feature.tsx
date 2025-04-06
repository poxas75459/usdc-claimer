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
    "4MtskbPg7fL7hzbetkup717yB28ZGWNrYsZ8EgFZrYoSfn7fy9uj91guBispbQ4CvzbdpCu9vc6Qod2us5CvsNBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRc1gSQtPUuXcq91VjZMePrsHm4cy52C6owQ2AbiE2aFRFNXts3kbcY232vDxJgBBdnPcRkL65C5VmFbJSRJ74L",
  "key1": "3mtqZHBiq1Q2uW445Ry48R4brwCqaEA7es212KHaUGPb1jzCLx8pKPck7PqYpg7Gi2fRCwAHiLVMCHAZ6iaSSYbH",
  "key2": "3t4jJNCrsVnxpR1sTmvGqdH4tR66RM8qUeb9dFKEbLzeTVQwnmcMrAP8XwuKZDQETkzux92arANCQRy9AHagvr6z",
  "key3": "3Y3Aeya9dHj9ztFSi6UoMypurXMEtjKcNCkX1P4KT416HtuTDzSama5DKiktfxYbYCDd1bPqHRwiAgQHqh4NUxY5",
  "key4": "4nPWCCzjHUiZ3wgm1wTduWQGS68DVdte6gae3mkTTqRehHW8SwZokqSbJigUhGcd6SutuqDc8YC5XZ8Jsb8239UW",
  "key5": "3P3wVnQD2obAwNA4Mv1QZhVwmpYr23HgH4ecJE8QpFt9ymtgoFXSzxtLGJWZWV1XXcjZPHjE7RfH1VAMftPQmioP",
  "key6": "5cDWq2iTJtXSBt1TPAHDgFaPqCJgac92iCBLaxqabQmxv9J6un6fqKczRGuY3TAMBAhYarkxaTfzp6Rjd2mujJ8a",
  "key7": "29hDsAviMW6cXVuLLmJoRnZi8YyC6H8a1oWoVuzBNiaAQZh8YnukqAQgrfgQJP4rC2B5EanMCBqRv4KSLtKN7MM1",
  "key8": "49bP13qupvYGajeZG1WmKu87wWzbkdq6ZDvDKCNgLqfxbSPKD94iMRFsVER947wHqVzLFUEkRnALMWLo9JkxTz7E",
  "key9": "5ZjTTCEnoUHVKaSRaV3Aid7xQpGk9Qi9SZwyMGGKxaEJsqyBPCGBxgUystPiybDehXqMAfAzHJXNfEspCK1ia3jh",
  "key10": "2RKKzxcCLzdNuGR8bY8JETspkv8PS2FPyusuZV9PE8ZtTPzKdG8oF2VGwZP5GbN1e6YZ9wm6YEWyYoTk6SwrRLa5",
  "key11": "3LBqdkAGBdiExfhJXRxnYqK3UCHCvZKH3tLJ4oEo5juC2i6tHQWaoa5mxaYxfQKwdSPpqziJzSTxKD1UuMnZ2eWv",
  "key12": "5JszYet47QTSCQbwAfeyU4ZvpFi4sg1D15e7DRhMYfZ3kAqkXMGfNkNdjkZLHrmzU6yrdYBHNpgBzk8hRb1gySNt",
  "key13": "3dPGLcAA1sTUQgRL2mrgi4pG3g6D6BytZk8HET4f7LtCvFGj91eywBWXpDLKAGa8984V8Mgxmu8LYpwEq98eWAVU",
  "key14": "2keQTrpSB9NWNLrstez2SYS6fDb9eKC9T9jXfKekj3ridubSmJErAzVdBV6c7eNJVveVF5B6sLqSDmaQd77bBefC",
  "key15": "3qHmR7crA5gkCCWX4aY1MNVZZV9h4LKBZFVLjN6CDctQE6BWvPMnpCnsoJ2g1SoYBdTfnR5Wa7SL3SC2aryxMJiW",
  "key16": "3QcLexq1BY6xsaECMBEsnhymPq85NsUB6FUN2htPzE4tKiCNCyi2Y8wdwu74AGV3breu4e8BUC8nURgTcTKMvKJ3",
  "key17": "1EDH6YpJZCKuSmdTrXUpX4sWsmYfJcVtpfq4GAYghXj4aE7MF3CPYM3fzpP4CEWGAGJVs72BZw44zaAnKspu5si",
  "key18": "2Q3ctRntNiqTK1eP5cknyRvtFbz9zpkUf9F4JMJ6V64uqYdDLSUH867xXn9e92n4KQgPxRxk6LdB7k3cjmL6MZA5",
  "key19": "2gszTa652knUr2VmM9SiHZaKCkeFtQfvj15zDTC5L8FHWkhkXU3ibiMnyda531RtSM1d4QxGB2expA44bzNrmRYN",
  "key20": "61w6JbHp8e41XLbX4vVRu8drg5msmi7SBoaCXvsDKhYUA5sGpsm1TeXZciTZVfvDYbPuTDVxQKihfb7qCGYUSJ8n",
  "key21": "4cmQHcFf9PsXeJSmANkSZonbRkzjuJDntE6ZuoRG83JqRmW6wU9MnANm8uL7LyzzcHwfpQiQ4FZmRk4jpgdstSdp",
  "key22": "4amqzSpq9qt3FSi4H96LwCChBsenMQWYoBBXmXX1Bxh8J96YZMn964cXX2qcMU51x3DFg1ssJmjTbCkg18kyu8kG",
  "key23": "5TC37zsZ1Aa2H3vpfc3ji9sBQCWSkYe52VgM3SQbQSEHKyWvYUQCEsbpHU1J7F32ZLqEeafaehqxBE9avhgMJg1B",
  "key24": "dWomXQKtUdDvALvfD81LW9qwyetcbgeUcdHGZo9CPwAyerQKfBzKdsvWZpKMKUdNB2Viw1r2cWQbFjqQwK5VXht",
  "key25": "3e7bB6b4XmCo1kfshB1u5ewAomCmXMSNwY6EPdp4k4P7znDgfsR5a49N8ZKP77u1Cu9LURN2vhL5AZsJGMK8vtKG",
  "key26": "3wHtcVrqwXWH43C2YtS4ab7MHsU616g4twF3hfkYSHizQ6CKPjfyXa2cDBo53HrP81TbQarDA3v7ad7mFzjSuPh5",
  "key27": "cjMRs7AH2mjTe3KjELHyZXDz4CgLCiZXpLmCECBJzUL7MoktygyJ1kM6CAkn2c4o8634ikvRFx6amitPLN46qSg",
  "key28": "4LwWarqgkjjfwLRV9fW9ddPN5QRP6K48eJBpCp3eQ6os87EX2AXwPuuGh2RFeK58Gwd4YXKtmvPdRRpumAHFMdRz",
  "key29": "66yobu6cy4YedZpD3yu95nD9BkJU4CQiZPaBCUquEmFGwdWjwc36pSAwvLTBbBmgQTvdPMbb8aQKLvyTZHX3G3xo"
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
