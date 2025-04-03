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
    "645JA6WfXMKQLcU1caXkkDk93u8KmQ7zLbSRmq1GdzxRCnYpUYhWSa1QzmYRDgMUGa5kt9GiDsTW5nQbmAwBGBsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBYbVXgk4AKDXmhhcgWd1oebhWcL4h1UwqTKjebMQMwEvoGN55cdQGPQ54EUSVC3ud4Yf2d1ug5S3vYgE3RKubp",
  "key1": "vrHyppoBaxC1jMpSpHchfgZUnktFSqbhPpA7sjA7oWfD4NdyLvxcw8iUGnex1A8G4RqfvKrW1QTWEK7MKK8JVXh",
  "key2": "vK8eARokSS3j6AsJXjwzDZVPufQFjciAtyPdAtKUbygVNFgH449xCiz1Ub6M2iyUceMB97PtMPtiz8UsBGR1RbE",
  "key3": "WgigcGjDhGSypvkDCdL1AiWPX7noVnn4xnGtC4A4BhaxH6shNEDiHXCAFLnrvoADY9sg5czEsufgF7R2Y6GkYzN",
  "key4": "37Esx4qsWBgwtqwwgkX9eLqMF8oJDGKBSrtGqcpUxYWRVeGLDRNguHDyiqWnGEdqECS15a7Ht9AfcSjxyBv2Gpw7",
  "key5": "1Q9QMHTy2wNBa5J88sy7Agtrr2A8LXBYQUx1ns5uscgrfVc71b4d5rfazdbXdxu7EQBM7vjFZwkNEBhcnoWmS8u",
  "key6": "3415iRHHLzY7jiCLJgb7DPwzhabc9izZ3u7atxPgP45xa9heoyAs4dk31tChhbJFTFr3DoiNZ4m2t5BFj4oKWYmQ",
  "key7": "2ybEasML8Gdqw1FQhtX2giWXEuo63hsLKX3VwQYB6xpsHgtCT4oK8ZTkzpiLWJRghkczjxTmBQyegQCUfTX2FQYC",
  "key8": "4qveTnUBLHunVghQoGUWRnAUN3imXvSQeoSnUKvbTWEjtWbY5ePX1y7gysTWGo2E51ij5JTskha2LvPVdybHEsdX",
  "key9": "e9GLYyqTE1YGQiPr52z21eomuWjfhDVYpUpE3VRm3meSPSyHaNhTQtZhtep8D2JDnJEBhzVWrv7KkeLPvPiydxm",
  "key10": "2sCioZD8Sa9opYTYJM37EGx38SYYcrfM7S9JJxjiPBEcQhnyVE9Vnp6maRdS4yrZd3xYRKeFLAaXuQfkLXDgsKgc",
  "key11": "2Wn4TNGV66kGV9amYdS37JRpiuizkJtLSv34oPxdVWkHpWoyc4yab69tpEpSVV4Nms7eHjovKJnnAKRtSuPxaYED",
  "key12": "CtXQwzPsjq5RcjNA5Cufyd2bQe7AxoQm9toczTT8fiTK7pHCbk3XBMYLf97YcKUFt9gNP6bTS7PH87vKTVsRLHh",
  "key13": "4Sjt67Gay5ySRrSqyE1WA9UTsEYeTm8V8AGpGpfUGtB61tNJNcsd4rAHzjQkWv7UHWJMVbPDsgvxaF1YKeTBs9PD",
  "key14": "4SHWYZxkXkkDhJgtdsFLpapG7JvyUW1jFhA8ZQKs44yhtABPCAqQgm5BFrvFEgDgbhWsuxjXjuKHPPUjoCtskX1X",
  "key15": "GeQdkTnXwMEKwx4rqhnhgVHRLdpVt8FP38qjta5HcSWz4DpP5aMygHSPTZ4eyQCqpzGJ3MsWPksMkz1hpzjiBDm",
  "key16": "4N6tCYjccP5RZaTGcentn4TxogseNuJYYkiXPEMjVSUDVcphZERSPadYNbx9QK2kWVW6Fv7xdBtj91d3r8UbdQzv",
  "key17": "37q7Ybh3oR9hqKbQVDutrnthidieZvwi4mBmZVT5dfHsMB73hTg1sYbazCcyQLKn591CNWyo4gFvYAXxS44WGrze",
  "key18": "4XefGwdzYkzMveCquSeHX5eeMtB51MfN9j6y678nr2LTAvi9vCfwndBuhRQwxpQRtT85HNy2enQEZs14TiUhETTR",
  "key19": "2MxAY2yqMZZm6bmbTPDiNjsiop65rf4BgAqMSAnBhPLWouqHjCr64apdediM8nUdsgPFCx5vCmv83zkBQHkF7NLp",
  "key20": "frxUFqDMdqAVozpXBHJsfbiYtdCvtGdSQvy4ecLNLWsfk5qJJ798aRkvbj62svbDffdLD2mSg236cfbb8djkEfY",
  "key21": "5Tp41xY7Agphz7XVx2oyUCrXqEK6aTSMw4rohKBJwehAwbuZ6SonMqkp5WDEVMHKHZanfmuAWp4f75QB8P9Fctmr",
  "key22": "2nrWx2HqF4CxKnQwY1w7Mjdfa6cCxxDFHeYqEhd7jeue41izeyefnCinq2ekmRQLKVX2sijuRHBDBsAduZL1g8LC",
  "key23": "3trSoknoNdKR3jeRBh36z1Dz8ktLMBRNqKD99QC4ii4EdGFNmGaehtkgXdjzNbWDkmXLDxEzE7yVCV6D33hnEdBs",
  "key24": "5kEoC9DBamjmEW7nr3RbbFeMrxmofUt6RGB48QPuUG7rv11ULm2tXnXe8kaE3E9mW2JpmrBSWA4ACWhREVvXrLHd",
  "key25": "3k9TGW5ZtEVSK8GjvhYaHjc2kfzPsmnXsUnT2BSkg9xbcZEUhdryUJBbMWMY9LXCYZcaja6EEwtLCifHA7H9jAoG",
  "key26": "2sin46g1qoHcjBFoMt13uac1kmBRGx676LUtQibQbQrYqnJwYs8jXo1GwEU4n3bRpcjomzLVVKNgipvWbs8f296x",
  "key27": "j2yy37L5XEkwmJ8V4bMFFQ1X2F6BbmrQKdz1kDfPFkQbm8iwGuh877L65D4HbAQL1GwaxwEZcntNEHd4MErSxPY",
  "key28": "5ZphuRSVVbCMBkyBrLZydueVvyN7tAKS7q4W6C7dJWDnXh1vVgDQjuSsPfS4dmzn4oZm9Qr2AUNaDaLpeeC58Km2",
  "key29": "2TZ8dicDZQe2QfuWh24ZdweEQ4cxXGXEtKUmcbRrKPMqsrsKDUd5NMcFaASEvKL7kUVUB5pNcNUtMqsYqeqEQs5Y",
  "key30": "4cj7ybzYAk73htkDZ2ejuNqZKNAP6mUdZfM7skFKQvWWsiKMRzgeCrZys9sfUP51CyJ8mcgoZBQSZX2j6hNQvTLU",
  "key31": "2tLroscrX86kDgyKxZHp6iSDi7VXSxzArKSswPfrVUMwjGfKaFScuGg93Yz8UXXEPD7b7S61bHX5Dx89kqxDk1dw",
  "key32": "2SMrFZYXjqyJbBvncbgdB5PrfUPYvtLz4EW2dEq7ezrczhXT77x1CtLBgmyVtSxHC48Vdf162wbfBEK3Q4Twnv8u",
  "key33": "Yxb2KKWJBvsFmM1Vy5i4gxic3iNfVRb8PyPWgmrBSg3AhBhDbxqfJSUw9Kcg7C3abkuukuBycXkcz4rKJAk1RB7",
  "key34": "4LYzBVozTBR8tvsiYpmJUReSS9QLpFTLuYmu2UopJscibkimWL7RFUTRJxYG7jipXEp1vdJu3MfZ1AtnpVMcVbEe"
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
