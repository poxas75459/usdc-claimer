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
    "5mQmBQ5YjxsRNEpyUwigdFjTr7dNMwx5PTC71ThxN7As5bVWvhfUr7cLE35gz66vc8f46scjgH7d2GJL2UUGEYFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgixzMzq5cDYFggAUuHTCWVFVFiD16SvFPS69Ajz4WibnMPGwmwRZwsrj3UwX2z363n2LfUTP9NpDHvLTDFLWY7",
  "key1": "4MCvy4KTVfoqDLnUmQEqeMe2omLfXWFreNMuYBYMMDS4TpeeBNtdDaZZtiiQbJwKK3MHXdRnZBRPBqo7acRGenuw",
  "key2": "5LzHQwC1c1V8iM7mKUMBSmk6Tz5N6RLh3JP89toE6aUvbNsCczHa48bqToBVqGuZGtTq6cEuJHsXaAxyaQzKF38q",
  "key3": "5dGAJzQdArU4sLRqWEjA23Zp8MWpzdHcGauo2Pd56B7Lt3KHtetHjchnS4zuPkjenLvZWM3XDPzdg5Hko5fV3Jg9",
  "key4": "2Sb44BnqZiyT1jwrzjzTpUpL1f9tH37YkP8Rn1M7f2CuSF7NiuDuxRdRq5vHsLBNW49DkjAiz6x8GiAN6BRGipMS",
  "key5": "3g1CsCx5KSoWG2Hsqp2kJ6Z67TbF4zjLPQ6jnbEHHYuS1DGUvTWZnjSWLmYhH8qLCdN4fdrBdNtb5smn6KW6ZrRp",
  "key6": "g1SL3gZmegXc96XANwVC3H4x4tcKWz6WMCLfXbjxa3gfJyE7VByRT19VftAop1djAvWLFMm3tkUtDbUqG4SNKBK",
  "key7": "5dG29d4UiWeUCrQiSxPw9p4kRoE3iVPJV1HD9NUEXsiRdEGVo1ZpM1W7vw93sQeSfx3b7YXr3XoZCEVaBqFgcdLp",
  "key8": "5nhJomrZrdDpHeUbsiKQL9tq1NpN1Z9epPg8Gja5V6MVfh7KLu5Yog3W8PUGkLz8hyQCn1FPfzzuEVo5sgrTkCX9",
  "key9": "2hpeeAcMQnfcpRSKcUzN1yB9HL6W7Aeh9VRD3BBmqpph1ukrDMu4cyYjaqaQ7YcDvh3KjshEGgn7btfRNeBmZpAA",
  "key10": "4YVKZHNQMMmzFdZmaWLvep7mZgRWh8Kn7s1q4Rkhw2vPvg7J8PQPA8ygXTmMDjByp3NG566W6iGx65TU7HcRhvmq",
  "key11": "2dsdbapg5BnUKKar4kj7Fn6Xt6RhUkzcPd2FCShqQz46sDnrQK1LCHSY3nCVCNSVLkH7sxhVBFe5zB5JNYNcKp2d",
  "key12": "5sbm6B1xdbxc6A6zucYVnY8gR3XrGWpJdvapo4TmeovGKTQxgrofd2ktPciKwzYsGr4FQwAsvntvbukpDTu4wsb3",
  "key13": "5S95XJfuJ3F4sByziCjNGjQoFSD7cdmGA2apb3g5LWuxQND3kuB5m9u4gozNnsxim6cs73GEPkQ5P41AnPRejEnY",
  "key14": "4qBJqJ7bHpYwYW1Mx7ezqC61MRF1hQS4mDuM1pnj23BhZu2hBHbEJsWpb1hHjv8kvGaf1SCEidE1MU2Bx2m2hjEL",
  "key15": "oSjG4ApH4m3XrnnYDSnoWPw5BrwyyPEHbaL7pbRKeVhuphPVrsmfqzCdZdzC8hnMQm94BcxJ1d7vNz7z8RLDm2s",
  "key16": "2TGdfD5buALqPZsaeUf3BkxA6q3HvL6m1LcWWYqnm8ASn7tmrBxazHY18MaEVhtiiWqpECBx9X2x3zD7oTzCUfUu",
  "key17": "3cBJdTQb22rZD3xqADiaJszcfgghEypED5YHLvqXtoHw68iSEZmdaaCXhHfQr8rqvQF6jf7vLogwfkgNTTZETNfP",
  "key18": "3M3Ruf11xhBjbi7efdH3dv4KhVfRmNQz7vaYZx7474s5YjpTqDRJzDMbofugg62ecMWnY7jwGvVdfL2Do98kiAtR",
  "key19": "2UAR6QVv4z5gw9s1HrryQDhzpNbcax1UrvH1GDv1xD8U5K7tARQc9t8xhVE3PBJJtxHpDtM25wgeRCXPM6NbVj2D",
  "key20": "5RhedCovfytHVX1ALkcuzZs7oise7Z2mdGtyRAdWHcHoTCPJFVBUugojVcCSfPexxGACGEC7PhC8fFrJZppKTscC",
  "key21": "241dn5Kw7p522cM9UCUWZKADxkzAsWNbWxxfSK4SGr4qsS6EQahiitofyuQjH2cCaTjSma5W5DwDqAENMyqWu7HB",
  "key22": "2FyGikwGnh1jRU1gJyywcUEVt4CBsUn86aonPumzgATjpS2chSE2omSDfuXYDq3VEFgLb9sR8gXkwibNJtaaTmVn",
  "key23": "2AgvNyVzHiTZZYUU2rpnf24cNZGtGYYjjzHPEtrVst38oKPhH7XrHWbjJTak2aQgWRhLvtkNwLtpi8Yk9f8YwTJk",
  "key24": "5jM8bLW2qHsTNm1xMi2SSD8Pxzv7ZzfDaeUeAnkXBDJCTHjkjMrfwdviSoLFnpLoPDwa2286uktoEeqAtkJYoGrD",
  "key25": "5ptmVySWY4f1L92qCgdZi5n2bZA4wB34kzfdRoQ1RtFmHM6J2Aq1zweDwqfCKagxwHeYXKDWQqtn32jgWaLZRXVo",
  "key26": "4TBcacW8tEFNqmkeWbFdkSVbYbEr5xruwYj9jKs5p8gNukehdUwkK2zVajjbPKyMmQXxCng5iShPDePz9z8zvqZg",
  "key27": "3zVdB3GyvnsyvTX8FmRq9vmzp7GBEQStbgRBYKH3MbPK1ESFgwU8FhLrYeXbbG5Zz2FxreUQia7XAB5SGcBRedRu",
  "key28": "PeKcj4ZV4kG2Py6zxhhvj4cM2kvRMBjHu4DkZwZVJrM8HfpkAvCbE1yfTffHd9SqXVVbr6XbWamXwM5AScV4yTd",
  "key29": "54g4G9xL2Jrccy53DtNLbqHuwWHLQx4kqbTXNYcW5FeMTS2SjBeC3FzC81fqBKu1a5NB24szwKDwUckXC246CAbQ",
  "key30": "54A9PvWqNp6w4wxECcTdtaNX3n9dEeeL2XsaSosabds9DvXciMrX65QujsAsa4jQf5oJ16HYKnTDppFPb7E37aUn",
  "key31": "tzThVTswMSkxFnc3wzgJbjMbxhbaURESmKqjR8JCn91zqunU3qdRfQNqYXg8VGcZ7HQdRBQ5zqrDzqUEQp8T5ic",
  "key32": "3HdposeibBB8JSwDzWjZCDcmfvRAsEmBCPrZgvvYBWqgUWAz5uACFbkUvYxzW5emw4hfP1NSVjLZNq9zia6dpdvS"
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
