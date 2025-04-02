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
    "41B4tufgHFsBgTJQrG5c4v1fbGoKiNb3KAuxQuPBqr9RyVJsQejagUcdW5FQ2qwGJndcKRL8bDJE8p1kHDkUjXb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZQZeLWgXm3RT6ycru5sKPK9hSWz5bFa4Vr7NxSZhqGDDn3HtLd2mU3X2TD2ELhNGGczT9mTyeNrq5aeC2HBfvY",
  "key1": "3k2EJ4vprPSa2NhGkfGnvLrcjz2s1yuyKH2obGfB72PqwHR4E9eVBSiCkbsF3y2gMM5pR3hAQeyzEBcx1yNomAdw",
  "key2": "4fo2hp8e2StrwNpyfuU4x4iad2KRqxqpaQDBbR4LJY6LQrDxbW6164yQVHyXrLQhBAzTL6zVQ9v1XCECCZVwZS44",
  "key3": "46EFvXDJdBHpizjk9YDZjffw4y1FQVZoXoi3NzpzJQZeytvPUseVPuRV8nu9MT4csXYWHFY8ccESR47zsPWB8RQU",
  "key4": "qeK2SyDeyFLz1wdtgdj82XxAvtZkPeSMu3k4Fc71nkQwRYbXmLf2RvjRrgKFRxQYdkHGVw3okapcCZX8vGMAi25",
  "key5": "3j8vawvsEccVvdySYjcmQkyPUpxfi1gUWeniJ22Z91mC9pjQunaQ4JeVrRvPmmq2NnsRfkuAo8wiVJrBN5RB5K8Q",
  "key6": "52kL1TpxGi4kgo8CXf8wwGqYUhmA7yrfsapbD6F9WMbUf8LoaoMg8v1HSa9TB7wWYN1CGgg9qL7qhq4AaU8rafYy",
  "key7": "42zQvSMx3kQP6cbkQ2aMZE9wKbE2n5gPZsmpGrqG5JbVG8diyGPESpmtorYX3RmRYmWFhsfjwWcVjem1PBb1gzji",
  "key8": "53h48upB7MLJZDfV2BaTEo2tZdjR4Ds3PMQj5fSxJjpVmuWUvZVf7BZfPNZAYp2dgarJVm4X1YmdkTAcYCQsnFCY",
  "key9": "4ehbLrYSDuSLd9J5feNJ3UhdxLAPdymQrv3ef6nfXi9Zve92ARK7wj4ExfBaYdwFzDfe6xXhcRS6oshJb7QM7J5T",
  "key10": "3s27dQghPDwmPaCQGRr5grLBNVn1ymfWSfmpNq8hDtJVsSntidR21xM1wFMa77N5M677QL4G6xP92943KT215T3t",
  "key11": "21S8AwYwDBHGyN6HoAM3hcEDFH1Q4oDkDzvbg51YV6Yah57i3JWe5Rpz7ffyyzwpGwSdVw7onYT96MrdcWy8ApnQ",
  "key12": "3DssZGDFh6w1hyjahvGe2f9DVPBvQZktJ9rQPnQN5T36adREvPXyLytjp6ssbrj3YvgEp9d2MLegSLEQNRMPDEEL",
  "key13": "34Kz7eU43auj62S8taHasT5QL6c787QSNHCyWiV2masmA72oqypgeAjqMNDYYGyGayaM1Ts8fyxYDJ5SR73phiLs",
  "key14": "2ufrLhwpy6Dyow7U8x2uJc564ny2AFW1KNaoZazVFSgx1MFAX5Y7VPaWj6BixzwQkvBMjUqRKUwuxeURWaR3zPhn",
  "key15": "5bj6QbYwbXcJ5GPmkyt8t6XziEyBb2MNz7Ho4r2yn54WNHVv8HQti1Qq5DUAu37SkTvMwrKVYzJrHZdoFFP2iuJe",
  "key16": "L4b9c52D2qo6F9neu7KYPGWgJnXhwG5PzpfqaWMQAYN924r3BDesnDJSsYbByr8wvWcKWRxEzKjy48mDAjTYw89",
  "key17": "39jXzhd9yi6u7PpMYXhqh9FhSBjqru5xcvo6yePEnzEKZ7HPCpNDeUKpEFtZJHd61qSxJ82wLamDyBDZKbzvAfgg",
  "key18": "5nDb2gCMZ2GhRuJWseCmtAjYcyCe65zbyT22xdZvnVSTFEDyJ4LDuydkCTfPPjqBvnCq1Vkot12hUpqCuUfJkDhk",
  "key19": "5dfTbR5rmUeFdQorP9U4XYr9ejfHrHJyYeSvM9gpwpmddF48qoszNgDTpdR9R2vv2fjD7dH5UQJzWxZ9tNdgSNzK",
  "key20": "5FLJCzMT5Nwu3b1KKoa5V9FfanzFGnRZZuKpXw5tt7KnC212NScTVuJgoZ8Q543q4WkUL39Kd1rhzYcDAunvyx9c",
  "key21": "5jJDyibopXWWfir96RJc6vmDH8uKEHNYGRtXK5dTfgbcQkf4zkGLiDmV5Yz8pSDSNjjDP3THZmTpHYhkoDVocXio",
  "key22": "5sC5HpL28MEY93smAs7LPe6BeCEiBo6BMnQ4NeDar4osqF5ZRNdRtu5EZMpBoNzy4dwTxW6vKjKT1zG3DECpV4CY",
  "key23": "2zxY6pd2sAhrhe52BGP3QVWLpxTMS9ANYyaE5Q1ycKn9P4i2MZnARsFW7T6bH3H13kCra5DyGBKKE8E9U8THfeob",
  "key24": "2T71Viypm3M8uAxxL48FA8gkxyTDc37hvKLPW3xtsMZWrn7tvtZqh7dwsMXGahpH64Qk1quEKaFxVfsFiGRnNech",
  "key25": "4qMeNQqpNyecgE87v63fF5cct5ewEzKF7Ere8gkZwZq5ot9iHNHQjk7eG4yjUHy8mnJ1H6s2do1yD3ai1Y8nx1bz"
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
