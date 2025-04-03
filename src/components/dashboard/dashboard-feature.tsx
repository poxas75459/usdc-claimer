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
    "4RUvvXjWYnMociYQzxUUx3yCx6jweuXGgcdcrbSttgsgfU48n2dQ7ouamPoPnhjxZ7oY5vZCdQZLA1k4925FxyPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bbVAcWPg46B3YtMBZMeouMxRY8LQrhiy3LntY4dnj4dp5XR7WmxZCwTaa2dyCwK5j9ff6zEDSDVBpcSK1Ei63F4",
  "key1": "ZYjdFMvfHceJn4hFsdUxnHn6wGPuM9pNnRT3VYvUkxPwNMJEoMM7HY4itdDhQbhWGcFw6sSgVom4NkMQxNwddy9",
  "key2": "28EzNvqejqVtiEVAyp9EuLFQR3DEQ2BqcrwUzxyWYS7xRyEbAHcGezjfGZCDWoiDumNL8j5AT1thjX6ALFhS4WfK",
  "key3": "2wp4K8J5Wq1mVwKLr6hY3SkLMA8j6Ny6ok32qKaeCTKkP5rYF8SxZLjFLue83LRvsmVne9xFcpro2the8KxwmjLs",
  "key4": "2gQdkL6L2Ca7QUVjTSJM9ERSgBq7UzU3RnRttY1Qdg6aJRQDC1pE8L9p6VAhMe8A15Equ1ysuCxs3SQ9Hym2GesV",
  "key5": "5mUVKc4XoowoZU74aoRoYGdEqKPp2sy66S4fFN8M5Aj9wT38kfvnC64aDvAD5Go74tRsQDnsYBAnUQKKGGdL4peg",
  "key6": "3otH6KwZvM2oamGPRvPMvJH4aLciJ1n5gE8Quj3HvDDhXfeCMarVuRa74XuCwQtLPzvjyBK28ARi7e1UbHeYbKxb",
  "key7": "3dwooZcaMDAcs8SdUwdjwmns5u1sanvicBUashhvHybNWLp8q8DYfHoxPUi79bfzaronhqEKmBS3Esxj8KXfwnPn",
  "key8": "2ktRnRpGMgHgybMWr7ZoTCvycUHv1ZB1As1XVQvCK6aAJZQF72Ky6W4Sn3rgBEjtR37vVmYGfytMDw7WQWkSExg3",
  "key9": "2Jxyubt2HpkteB8W8MWyjNM4ewpfvG1coJYxy3PtuZ8oM4STyefZTrD2ZShhHNNubSjvQBVgwCZohyV5yCgjSHgi",
  "key10": "5nYbWmwrLenSRCKKB95E94GaGShoZUPasq9M2c3syvkHXPo9ueQhSUeq38SRwhC2FUHCquxkpLSPEUm93gUNzCBi",
  "key11": "435MvEYgHsW1JQZeJx8P33CrzeNPxYFGKMFpkbbZPwngicuG8RCayVbzvQX2sFRXzS5VdFuuSevejdKgP9BkgtJn",
  "key12": "2yTcXo38o5SNtFiSpcxkbWW5tiMM3vLfSatZYg9y8mZEyRJiXM9ibMcth3FfpBFsQdBqUN9jaGs5bEfkbAsSqLMJ",
  "key13": "52aDnsLaAVKgA4MQaN6zFYpyQpjbPE7yfrwx8gxijMsAEPp8Dw1GFRsehxh1C3Bsp97ajTYuq9bLFrUGMq2zy9tW",
  "key14": "4XkY9euwwM6sZdzteKiToMG2YMtVgiLoFFRVAnmvJbSwVyTapLi9yW5VSn9CZtzx9uFqW46rSJsfKaAyLTz2F5YZ",
  "key15": "4zVZGuhrn1F9aC7n8aPmf7vgStcXWBMw69sUYEyeDPJjvQUz3arVsJWUnHRPRA392QAgHBmS8LDqHPyGV7weVMWM",
  "key16": "5N8fQjuRpCZ8zeVf28dJ2dmnJhaMc7HsML8mMzdjLBCs14cW1tXCN2hBEpbeu2ZDotKHVXFooaERpkGx8fSGEbcZ",
  "key17": "DSLPmq9sLH816pTYEYUHtPMj2wc8dvAi9QEFLwB3gqDT6fS7K2nXpmZgA7mqsQo2JdCt54VoMQyFgTjSoTRAWRE",
  "key18": "5ZiefRGgEmDHHyftqRSM5iELvDtn718fzEXooaWgdxNKbYENsVhk1714FW65x2c9Zzwg3RE8ZpQL7VL2zyQxbRCj",
  "key19": "2C2vZWnfFJ6CXtzYyKHgNPj8yLUCxWFyPj2JpGnVDENwTsuYwi9Cf3LTdXGge88pPdNfXVWeWoWZrE78jTAj5mLM",
  "key20": "2eTC4JFe3G29DTi2Bcpcj1QAyUUK161uwu1LWVjxe2jBJu6Lrew2WWiviaSj5xidZGGHR14UVLFUZgVQG6YvofSU",
  "key21": "2oAuHfVGX8tLcr6LVbcUD1At6AMDGWAKFvcetw2XMvzFoiyEjrnBeG4UAV9CYCL6hWmCXF5cxu7rJXeCrqxP3qZp",
  "key22": "4tBxVFYAETQMLZK5R2N2sXZAeojb2Rb2ZnHit8DD8nmEGQcpjjmwgQAWMCeu64uJ193mWz3K5izedNLkjbfvp5ez",
  "key23": "nppj9wojHJMcCHVoTBeC1AkQKN4wxGkdnmZvJyj6Fpt9FbwvLPTzrAxdDJyaLEduVED2G8bMmzDYnEiDMteKvRa",
  "key24": "oVLawC9jN1X7HGmCJN3Q1yrAaCM3MxiARR7zaJCQRXRJX4QZjTXNYEFk7n3RgbmnUNnAy8gACMA7JALEFre62mG",
  "key25": "s41ZGHHUQxxRHeBwiT2MrT3HY8mHxZ7tbtpxAGiPS5Z6Gtwxz3MEP5dGqjXx6MgKffkKfbR5QnL7kwecFFprQQP",
  "key26": "2VPxcrKQ6RdjwjidMYoL5sw12ZQiHKkgGpH4oHssMmkBS6RmV8KnHFXJhXKa92CBpfUQz8hA7NPBuwGVpvx41gK6",
  "key27": "3Hafpc9LwUT2RhmxC1H42aVMA5PLWFD93V2pvBFyD3Pk38vtv55YVHCArLLxFAFwxXxEPw3eBxMRvgXxYuQTDrZK",
  "key28": "5Gv64duWMZvtJqV3RobDaub9PwWT4o3BgaxuZW4bepbacYhxTny979J2tozDEfe6HzGj7NnRVKvhiQHKgisWohmj",
  "key29": "4y1zezANZbwzecdxshmprf6zrJHoj2PTLsa5pkWE8hCTub8Pz6hw4uhHhGaUTVx3xuMWJYgi89zU4WGu6TtfYEGw"
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
