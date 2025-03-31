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
    "533wLVk7NbgmEbxrRc4dnP2Y1RsAP5h8a6unpzMr7T7d5GyVtgDMuz5bb17ATHqx7KLRV6qE6K8pvsodwCTJwrRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrdVWD3ibMFR2g42szg4aSY9YkNXWtudvu5awJYpiRsJNJm6pDM7LYDLbUTMTZw4VBqr19NNwYtYnmyRADWGjnf",
  "key1": "EByp6qZhD3C2M7sbVxCFZNRgrsYNENSNCJmCuyKALbSN4PpiAyzAb9MtgYVQ84jAGBr7aRqfUeuFWdtNx5ikXuT",
  "key2": "5jhDNZ2Tj4TwEFkhYH9Kgtz1xRgbVWRpDUBaB8GLs9xqRL9wLvSkT718TfQu2aS6jr3PV3qfJmTUFLevf1Yb5TAa",
  "key3": "66V4iwQvujT8LFJAnUz8w8TiU4ntcSyCkpYmecmZv6MA12rmrFtCqLt22MJJN2RZT1cUGxHZ1yxXsP3K9FxWCqXK",
  "key4": "42YWDcnmnHTmr88LgJRV9ReXjoCJvUS15iTjP2TvteGFVzpsAXWiZMeDGeyKzcENBT3g9SLk1MBfm3cZZpUX5trf",
  "key5": "5Fv8rvm3DqXMQ4UgFx2CYvAyhNqVtAe7YBLWVT96TzNcdFt1QZEFJDPP1rozdEoH3mXcxP1eBMgKLYMbRVLWhw2g",
  "key6": "3UZF8ehnk4ffqXRY6YFrFME8XWTQSoPf5YWduHJ7yjm2qXr2PHwyr1suqgEqgb78ZsXCyeU8rJmeWaJiz2CwataY",
  "key7": "5f4yAbAFNMJm7U1qx89gRQtusLV3NcRXuFhFR1o321B3igmiYBmkYUoxGQTqjRiFcujrz1RWAVpMa2Hd9JPtS9Nx",
  "key8": "2RCL27Ev6BN9cJ4HMEZ5A8w9tii4YbwwqjwK4cJP5ZZzLU26H9zPPAZHxwL6fNST1sAh5XYWKycWeh9a7WkbPm2d",
  "key9": "3f9hMQ3xC7jxCi7dYLXeUg43kwSKEtvvKd5mGdWeusYC2NuhPhx84AFprfPytsWBPhQVUfpwqKS5fo5DdLEti1dQ",
  "key10": "3KGWoPXmsKDZUzeKMHHU8NZstLgPWpp91dJPKoLT7YFXSnXUVGvNWeNLTur4o6vxrLuUMs9bTMzLs4mAdF3jqi9K",
  "key11": "mt3LfJJXTpBumaEV6ba5htgHDmJXmu6yGFsrsUK3i5Z4YyqvuePcVxwrBpS522SWoqdzdz8h9A3NEkHNh5KGUb2",
  "key12": "2M4JAPSGah9auYWSDKfN44ebaEtnWWaKXztqBdjsDWMYbcrJC9495Nb64ZZj6C2wJ2WvXDB95GAV9t59ebds4H5i",
  "key13": "5JS4BTvVeq8gwzoaUYGF6Zd1Dbom1rPttuxvvFCmV1s4abxrwnbGR17jqfopyNm7pCwK4VMAgrsWwZiMDin1fxht",
  "key14": "5No9UarBPHvWTaPjGAf48G6VAm8496V5FqedxofiDbyiksgF5Q52TJvQzQku8mm5Yu5HE8zPvh4fRJu5ZdEDBsiG",
  "key15": "wwMPB7cpSQnVQGfd89PbhdCf4UdJwduag9iGQjLVt5dVhtxTrgswG8vyFG67cezSszL13xySpBXBmRYRNohUqHj",
  "key16": "4RHTYyMXdppkDsa4eXTqBJtziXgXEFKJfAVwZcxr4TaTNh5T9JFvSP1KkxvuYw6wJbchrhRzMmKD1ZtNYFYF6YUF",
  "key17": "2zTgFgC8gikSSA72Jxd6QsmBJXGMhy69TUDSPtjjmJ3Aetwr55z4c96yCzGtG5dRj5Q3pgp9gN7cVv3o7JxvqQJe",
  "key18": "KsGDEwLkket5C6RCN2L8jYR5kZsrNSTmGPrWbL7qdd1gsayqQfa4HEPNkcfxerfjendkQ1G887JUrJVwDh9EAjk",
  "key19": "2gVKqHbjWzafp8JDuzdWktMvUobDTAdVZ2Kn2KWRjQ8SyXPppRxjP42Y9SwehR4F1rhaDei4i5ymYdm3yhWP1rx1",
  "key20": "2EsLaAuENadvFKg1X6mTwezwpHJnmSaCHEvdxH7E4Gmx68wLVDbRvaWU1u17VwUVoF21x1KrEj15i8WmyTN6qNpx",
  "key21": "YqQ2abUcAH7s45xrQSTBxjbFW4T9HW5gnMdg9viM8X8Pd95jruHJe4ijQcCTQu59j9JgGkLJUoN6zm97q98h4RU",
  "key22": "55jAMDfRSNru7oiTc4cw3HEFgdQnw3ddvftTjWJzmiTivExSxPFAjFBHVuo6sgfpdruKex1qQh8RpUDKWAYdr267",
  "key23": "63XmveAvCSNGE9oBanVHFAYYLhjDmNsCHj3mFy8axTyNsiL2LrK7dJkajRtEac8vgr3eJbssHt8g5RPvTLWBMdZz",
  "key24": "23idNuRybnntAkQ1R6v4xhZyimbDAyQZ5Y3pMicM869NhjKvA4DSnpcPM4jkMcK9prM7c7sN7CMwrhGwTM7evSFf",
  "key25": "3efzoeTbnMSEWrHnhY5TcP8S7AjVeAoM96Xudf2t6SSvJTXrZyYHGoUfwsvDiP6xjd8Ecgxk5Zmu3k9717WHds5J",
  "key26": "5W6ijTCD8CjdjfJX3MU158G8akqLhgmyT5iPSyxwX6cuG3AH7kq7QagWx25tNXn2GsrqZBbrhRMDuJEij7ecwPxc"
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
