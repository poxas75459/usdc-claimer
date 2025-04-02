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
    "e2JskgHjGjGR7DhxBH1fxPf1k56hBrjAp18o5UE2ofHnWmmXT7CBoPYBFJazYnz1RAYDxruLpKnsn5vLfZt1hRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UrDXJDbhLMXjsDJ9EEV9ZR7zY8c89Dp78ekZtZYSGyoBc9TVxXGBmQfvP7Wwj6p8UuhXprpZQFyqa9aEm6CAMj",
  "key1": "RqKN3us3RXAm6Ayt8kHrXqFcgp5A7DQgGP48Fbx5xBxhJkazn8FWQCE8tjjXUVkUEqZb5ekmTYW6qk97QKoQ82x",
  "key2": "4wKna2KzEtGyBjVJjJNFF3J1yfsPuudwFgy5tANPvFXEp1Yxs7jzW8ssnVk4stTc2D2Q5X8xShUrWodnAJ74adKM",
  "key3": "3hUSAJBeTsKrm1DqzXTRrkrpiwqYgaHxg6wtbHbzWtt8boU1JrKpaWjfBWXYK3GL5ZytJrqQRhE2vU7AEjejTHGY",
  "key4": "2dpjiXQmkCBSNVdepQZeBtaUVne5DdMVYpsJ4igWPXqLhmnfvM5jxqKH5SXPB5nzQEFRqA1uWHTy9WRM7RuXpAK",
  "key5": "3DaYZcipbxwTJoMBez9vY17P8jsSok8QfMW3yAnaM5bia5ccpFp5oMRM4eX7PBFwzQaDjGsidRsh6fXUqJySyCF6",
  "key6": "59jdLSwiVDBbpMQFyaFRTdALhQaSjqytK4XxcisNJ6XPgymmS4ABjif7ZYX2CHZwY5KCXVU2vVxBMBdFWDcQxPRj",
  "key7": "62NMKtSVTTEyNw54RpJAmhnrvWrGk7fKzCrt8rBPRVwUx3LMsbYqxpYdyUHpDj8QD9CgoLWKCF7UsHKVTaTvSKBc",
  "key8": "2RLS7jzbxbM224D8qbF3GHdfsfR4PedbdHZEhYsaHoJZYw5U4SYUYCe8xUxYhLuZwjZAQZDYCkxhFw6aG9hfPmnr",
  "key9": "4JjvTM1VN6EhV9uP5KP251wbDEN6pxUyEN7uEfH3EZ9KpSJWgxr8X1aUBN3bdsRjzs5f3PR8GXqQMUp4m1oG9dRr",
  "key10": "5nNUAkjF9RRakFLFN2R7oYEd7qDwDEqkFacwdWaPz7gLgs5WXt7Xp9m9zJowJSNRBcRoGmzfSAmfZamrK6o65N3y",
  "key11": "5JxfRWpwTR7m859qipKmTKKccJs6bpZLw4JJTWckurXWED1oeMg7UxDi3wfM57fwQE7P16zi5dZT3VunKzS4aTax",
  "key12": "2vL8AH7gCN7S55UHNXSmEvA43ZXna3qzagccdjjgNrMjzLh4vGhLkfpV2XH9vcNQv8oV6NAaXZK8vhVFYgtRcZZF",
  "key13": "63iGDe3uvkBrynbv9oW2e9gNHFkrNDekvyhwi7j99E1u18YS96zcHjYoJBNz4KyyQSdp5Ey9D5MmQiJDYNQjkw3D",
  "key14": "5QhLWWBXxfp5aKVwjDEAxGfeomNJ7sALgp4wXCm8NtXvj9fPwF53w1uhYXZCdfUZ6Sg7PpQQXSVPeVQBFCPgA9AQ",
  "key15": "5S4WGi8DyUfSHs1RkRB89UKXCC7WTSH5642vYwUxQZkmDUrFsz4hrhCyZ4bRpztDSfmyAQnUunejRbVhibWBsH3X",
  "key16": "5bk6nhMpDDuPSifp8LrzHFpAyvWVeBufR32VF8LV25GFP3fVYk4CckeWdjh18d6MhPX1o8GxUPRxC5QiVez2Q1QD",
  "key17": "67nPtCCCi2b3TaHqRny5cGofHLtkfNn4DPjpNbvPARSfNbP9ED7zZeGREdkV5X7MwwCEBb9by3UCvYorzg9vkYtR",
  "key18": "2ZGG4Q6vnCzrJ51JFnNYHKgF7iMLmtXdGXmyUhaVxUc21ykHTbrXALhQAS5JuXsCjnoic4i7cxd7UH1uqWLKd4vk",
  "key19": "5kLXe4Aw5ie9ue1YKUM9vbgrquNA4GgdM6udVh9xMSgyECHFBv15q3KjKfGzxnarZvhskE9RuWubB4nvuER3Ywd1",
  "key20": "3eu7fKRtMiZxVTZLiS2eDHGRaVxxRH4qyUBQt2KRvneC42LWE8NXaWBscgixX1tYXMxbH68t3DLpAPC51ihAbPMK",
  "key21": "HnfWxLtaGwuvNRBR7a1CRDsjadX9o6ir6sFtfPpq55wbcYW5TJjfauFEWEbjY2mBc4v6A5bdNRcDriJhJir8cDm",
  "key22": "3SANVBseXUQW7aDwDD3AD7pJWWJWTA1mwDgqaiZvs3UkzEmSnffYMGJbgBLUaXn8by6aB2G8WkLhQtwwUXxP8Aoc",
  "key23": "3ATVWWr3nnQ1n2gWviwckxNJPt7ifG7kBDrfW1gUsrhbzFzb8MuG5mPaw9H5f5FDZ5nxoPMSnamyMxRSrekNiGse",
  "key24": "3nYU3mrSJ3qrqyVf6zSmp8UjdWpNS6F4i1MuYtrWidCiJe6DXTnZGVLwPns3ysSQuha31qdD76juDpQQRSFAG7nq"
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
