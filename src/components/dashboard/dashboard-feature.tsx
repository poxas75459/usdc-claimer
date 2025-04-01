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
    "4MhVHo6dxi7sQs9mpqcj9A4QZY8uph3qE6TYUcJzNVerc7Ug2A6ra1Miua85LZgwwqk1qsEqRfioqTHjpDub3iPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nj5QHJSersbthELnkJQWifF5rSTFpCavT4X28XpYFKpXb3Xk3EuwYVQJagyvdtDKMm2GFUNPg3jtKM6UE2JvfyK",
  "key1": "oyf6WmsgzCuEJ8SxG3K3GrYyPQSVyQa1HbChdhLdRE85VjF7rRGchMJkNjViGyyRE2z8mqRsZtFiHMUnoGpEp7g",
  "key2": "tkaXq95sQZbcxLtEUSZ8Xf5BxQBTiRAVzkW3sa97P3J68u9cszMmnZ2j7rk3RPwzR1AsGevEc2gZe6n86tEmdKw",
  "key3": "4pbTtwbiesj91URJkkMEnDAZmjm3ZXevfRFmKkoEoJBooDqfGdVZJUPEEwCEf31FSq2ZvopxtZasw2qV9N5Jkv2G",
  "key4": "5g9P5iCCgpmoefnVoEtFqtu4xksatTiVq8Ar2tXgE5iHzL32neCjJ48JCyrDG4R7g5v5vRVx4hTbXmz41DjZHQYK",
  "key5": "2PzRgRdB8NuYCbK3MUtZAad4CU98BgAuDBcoCzc7r3JUygxoJVQTQ5pVtTqYnFboKgYFnuNTTbY9NRgybX38o344",
  "key6": "3tNvynnnhQtRHbV6U1PuZTyYkymyU68pma47LxhmK9C8WQFvpghwkrdxTS4g2CkecK2Wp7VRUhz6xUW6VQbU7bvh",
  "key7": "3jRBzcY8fDenHPjf2wTzFj1mauNDHmZXfh9EYbQq8MdTChVyMvSQp86bgK8aAT3pvVfzCXyW75fCzyCSnsvA4qwc",
  "key8": "2gftvn2BbSVUfpdpFDm1nJZJcB2fJRo51brPmHHYXF7q4g7ThMsM3PV87FBFU59Wjz8Q6bWhPsp933SyzVtY8Ge2",
  "key9": "5e6iJbbBGXk42A36Po6PFcqcYF6tBUMAh43bND3vmbtyWGGevAv27qfJViWaSBn3uzjhYZfa6oxmuLswG3YqwuNC",
  "key10": "32QvTQ1TQDep54ACx82sfFQuUYQqat25oSAeeiq6Wb9uJQKvM3ivigdepfbtg7jstf3DHfhtbfR3xDkDJ1zsDApw",
  "key11": "3dzRcLwew9RcFEwbTbeL66z133J6HyZyW8HxMLxduFAVR9fgayM9boLvtPT4nXPGgWz4umR3FzCJ4iKRAvku89gW",
  "key12": "4zAQxi148gABd17JYhsXytEgJQqADcaKzhpGC4E24v9YEjz3hffFizCDES9Bf5EqrsSbuUALtgkQyLU469zgocmc",
  "key13": "q2cXtzJNMxpPgz3HSZJciS7Wyzus8QtQcWpraoVtPybtv1QCdpP9tYQ7kAYsbq2RZn8CrogtSgkwocjgPWkdKuC",
  "key14": "2JLAxuz5KbgEs4hTxEqmSMT3rkTHSKgpEJH7ZERoVzd2CAL3Js8ubaP3JfH2WAJNPUPPHhSMuqzXNMCKEET38mCh",
  "key15": "4wXHUb5YHRFUyfDaU8AqowhBMxBQVyzHKg9UNy4gbm7RcA2H9AaduPdjcd63kUgNM1yugpvCp6zQs4UhXGJCCb8u",
  "key16": "43joXw6MkbkxH6FDNr2u25WF2RF51bCTsa8dA44ebsb8vDZaMZCE3P1nWX3BYW8hRrdDvrubQ88vraA938MCMoF5",
  "key17": "gA9fhkNuLA7Vq4uSBxjfK6mJmvbgkrTgFbbK755wgudXpHkgW1Tq9VsqwCCQYneWdrJ65DPQSHpDX6L9w5kTfWp",
  "key18": "5SH2Uew8BB65nsGFxwYCuDKCXTzKpQAhdDa2LT4PT2QPBA8xwJpbcgAWNpgeZoBz2UTj38hxxApXKmtF46WVxjSh",
  "key19": "5Rz6SNiCnmptRbhFfBU972KvTz3Z2ty6uVckbBQx2mDDXg7wtQdQhZDVtzkNdcxj9SFvXsrAP2jQWervW8c8GWTi",
  "key20": "tsUjSfMyRhsPQ8bJpzQWAc3yZURozinfMQ8X751XVqFHyBYTXtmV8kxYUiWnYDXAWg12FG5EuxwbsTzWhPr5WQ2",
  "key21": "wQf8eouf3SSXFD1Z15oVLczGFXf7Kxge3hwzbUhcv1ToWc9UGxpYoiHNr4Bm4VABpiEUeMRCCaa2C2j2ESPo5Z6",
  "key22": "4axb58k8t38JDPKKAebXSNmHEtjnC92RcidJRT8bRsQnJ4UPxwz5qkYUTBRFW65X4Ly96Z9BJxrtKnBLA5Kg9ok8",
  "key23": "3u7twniDRVGctFCCUV3gZyh2drejeEB5dzXk1YmJx3fj74oWtNxecWzcoGBmwybTcs8PYtEjcwuZR7KDAiDr49Kw",
  "key24": "5k1CkudZMpXqkG3igVD2CmFbjghPXwQHVbBsmDFFzQvwuup8pEeuRGuvb92yAypSkyDiTU6jQ5an2zzvKQVwpK9V",
  "key25": "4XMELKgxv4vbiWveXvU4SE84qSZTDXuBKnXcSwAEZkJrF569RsX9oeAnjoVRYqXxL9CpX7ZBaGo9ZVgp16JvPF2Z",
  "key26": "4sfvzWVXCfKQuXXDcXhD1MAyFfACWZMWq5P6PGorDAJJSYWrxNJcTxZAaN5TWsocCeWkuGQS2cqUX3m8DhriX4PE",
  "key27": "5FAyBVtUFqp67nuQwtUufJrN5hKnsizGr9CxdVhMEiEEbXMb7CABZZXa83fwvVsV64WPrXVBKnGYYephLrAysrgp",
  "key28": "ejGJhBpKRWcHAmKmrtspPyBSQRrajjePHMB2Fz35S4oU8DuzpnhBTEDgvmnNkh3QfnquqZFTGAGe9fGiSrbW7TV",
  "key29": "5JNBMYrrSepHb2smvWLe57DpigVTYiNfzA9TE5pc4ffKYr9cvCniKNYPJN32BjjZqrHjU9ivnBoW5M3xrYHTEqkk"
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
