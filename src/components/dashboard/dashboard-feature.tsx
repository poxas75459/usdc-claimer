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
    "5Lpzz1pzyLszuYeFgDHY6ZQRZXeUGYj3vMYqYs6xJ4gBhNE6aJydqMAUUn81o9FDJmJKsTVuhtQoNfrjFwo5dnxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUpUaGRkqbYTNGys6WACodHgvunCYe1N5H5cC5RdJdoxQhaNcRw2xLGZLk92VETDyriAGVKGTvU8Q6VKC9CTVkK",
  "key1": "2BajSfwLbpCdo9k27QcrR1T7oqfmDCuYp5zQj6SHMwfK5E1GY6Eop43edRUJ7hLaJcVoUrDhGu7wycPNbvjp8nLC",
  "key2": "3TbhmMzYU9aCzcK5AFXkYg3pXENKE1G6kv25U9dTEewR3Wyv2jQDg4RVniSKW4AfZKeaCGtbMpGaeyoVqwHFJoED",
  "key3": "BHFRqfP5Ggi5PrcftUEorRadhUPkcjWd6EwdcgoTry3rQJVsg7SQEMKKHe1mWHYVsAAzMBKiDYFRiwYYLZhro1T",
  "key4": "39NZFM2B4nE1k88FhbhvvSNWpkKhXhs44DHdN5tBgyUHDgMyioZGQhSLNffzxFCMFjVt7qMpeULmc9ksDCFDAQ6h",
  "key5": "2KDi9GZonDVPY2ALrkY8JNc7xUc6igfKvqnuGWoMC5r8E1vJu8yuZXQbJ9wun86qhbphpJDBcySajLXwUGdoNXtC",
  "key6": "62wQVdHK5AZSvmpxyRBATEM1K9xgnUemPiodVkykxpRRy45WWrRuXKJzEvvqj4Pxw49YMeepwdwEKppapRv4JgRj",
  "key7": "5wTKQ6uikieeZtuD5e36oj3jwLvPvXrYqLVKrtjAMwqWz6S28335JRTq9rXyUHXE2SbwQ74qRrVhtVDCfYjMWSsL",
  "key8": "5zg7upiDgdsV47uTtbE1svNcYVNztYfEKBE62kJ6dYdRCk2DdNyGCqzJyBZkErV43S6k4cEK59os4UvDg9dLbetR",
  "key9": "41kRhBZgH87vpt8ikRNskXxFxSAcsu8xxDetiiLtMHBQ8EoA8k5Wd1tL882RTyzLxzn6gc79mqQYSymVFBB3nBTv",
  "key10": "5RxSKNrnYpDNzhPEQ4h6GPKzZzbfjsbvuDhwBEsRwYGuEQt2qXgXECh2eY6wr8DkK8ZSx7cF1eyxeYjaC6DBgyZS",
  "key11": "27eFyHLGr5Et5ejqm8VPRuR5Cvz5fhcLP1T6PNJR96LX7dR39aNuUUyETgHUbupFmuqHMf4zx6rL2DgbYTeKXkxc",
  "key12": "29MfFJpeKXYeo4xjXAnAZaHxToWNoFqrdHXzWJWwRVbGsLBNrhApMV1ZTeLoaCamGFha2S7ftyDfHbjMWsfPUBFY",
  "key13": "3gg8w8baZdKrHPELRX1bwdGyry86vRr4pJZzjk4uDYpMcMPKeLLseJfhL2ApjYRhsfALmPnhm4pJ3Hsu8FjLGy31",
  "key14": "GfPCBQshNEhsb5swWCmLp1w82Qj4Qp7wgGGMpGDz64yXdBGjhoMURkoDV7d4GL8Hvm8garm7odEi9FEmD3aLS9T",
  "key15": "4E3464cGfwJ8K3yDU7SFmxfbN6T3DGW1gMB48YHfB7mGTh5KLssDWrZtgbfGNDyb5FMHS9576usJDG5985Jue6AX",
  "key16": "3JQzvjJBPdgJodQgHP9j6uv8RRTifwtNoDXkgYT6jYUknVcQyT2xXwpfkXy3zEkArQrQVeN3cqaUUFZ56SW2KhTE",
  "key17": "5raRzPs1Muqc3nCiBCgEC8c4TAxBM5V57LtDZ6idnX48f11gCR5L5oqyKWYAUBRBtKJVvCgz6WNJDgLsNRFB65nV",
  "key18": "4jS1zQ3THuM5bN6D7ianHoo7CHbQSpHUumGJxiQKbgY5x4f4Mz2rHdVGVQEXNP67ZgeeLTNVTw7FisQpdxXgbw31",
  "key19": "7amFDUVQA6h7CstR1pkgAvEqFfS8QPv4wHt76ghdrdYYS4giRwUrB1brxNiDRgqs8M5i7oth2KxfycJ736461qc",
  "key20": "2RzK8dX3inpVP6L8u53pAoJgaR7KtE267TTki5TwZbo9tCr5fvFQnMMJ8S6GWM8zSgAW8HTEfhtXrgzgYwfegKo4",
  "key21": "4fEh9mAR7oxxEcSPyH3ew6CUmNBTypPQoEbM92gGcvZpvGMKAbvVSb6KzX2AEmEyjqW2ovtWfoNPwmg32cTYYsMn",
  "key22": "5caRUU5rrj7CpwrthQnKoRTeYRgjDqfNrBwHrUwFtRtnB1xUzs8pVYELqrUwoaPG38AW9G9qYcPqir8oTNPtxDKD",
  "key23": "huCxTbxcEDKa5Z6ZqvyceNjtMGiMna9ZY56f5CT1x5pamemiBmQ6eebwuW5Wr5LKYfMZymyDFv81PYr8QN7ebxQ",
  "key24": "458niZCDFU256VAtf1KN8DWhduMy2TnDAVvS5Me4LFKYn5bXDhmiwe1ii9CqrNuFKTVq56Jmtia1m23esJSccdC3",
  "key25": "4WxNVRSzuDRKb57ctyG241yihChfgeueDH5u9VgUaSsHAFY7nvadKXWNhhQiPGKXnb4H16Jparzhx5RtBBffbjxQ",
  "key26": "38mQW2W8GQc8HAb8t5STzMZQkcHyfnm5Fxu7dTCtdpNGopkPtJpkn3Gq1AujYbejvCbMxaxvo2jNfNAzREaSQ82h",
  "key27": "5wc7Eu7yutbXC7EgmfnJb3kvoCfJ4G5Tuja9LtxLXAtGG8Yev28f1QizpsLGrqZuMUEKpN5eFrgVm1DC84sFZZxP",
  "key28": "5HbHzjnxsdvvQsamBMdLeZRCxgfhpQCVmJSHTgo3Z2Yi6GyeWiGrWPpuqT8TVN5yMHF5Af9BWEdSF14WmUk9cNPW"
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
