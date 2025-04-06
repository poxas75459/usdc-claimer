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
    "2NfUKjWcm7AK3E6VhgzWmBfrrmEVP9fZf4w94LUQqjifk3szVs7GSWiNKfYtwQLW1bSWtvSEqcsSZQ3pb3fj8Xeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5um5XQwQc8pjvNUA5cDCQQ7suwDC5fNtoanVA1uSYBgYDVugeAg2YDaSf2Uu2knjAJeLSFYxE6ZZFggynC4WLnQ",
  "key1": "jChgbSK6AcdrUxSHc1qpj2SX7Ksquop5E9e6RusMR5N3Wwfr8UfX73piBJKu6arTjYVoC5XNJL9xDLwMhANen4v",
  "key2": "21Hn93JqnSPkpme6A8YpUuRFpafCj41Uzuio9Z8gN96hTWE1dCtAevbdqZyW9VQtonHxoAVxvnFUAb791bzuekvM",
  "key3": "qES9P4DqTj574X6AHoYrjxCdmfa7VmhfYSikFbbJGr4ovGKsPFFAbi73f4qiLwaGW84w6KNvUb6517WGYjob7Mo",
  "key4": "3hyG9U7gn4ofLHHs8hBUhWvjLExkkdxv9bYEcSPCTfh8ncsXbMnVvPaNMhvgf5CeFpDDCtfWGuTYqFiyDrBfGNUZ",
  "key5": "71mwk4XKMkfp4QihajVCS1n4WNxboPDdXr3Zg54GzkewfHWhs1LF3oRf974Ufzte56PF5apN6EggAfZCxFEKBUw",
  "key6": "49aNSXBHidH82v9gRjDaTrG3PC3aQfUPJMEYBmUArRYntQvmYsscUL167FCNGzFBKrkYWvSch1vw4sba7aukQ8Xp",
  "key7": "3T7azH3xCb456cv3kNFWuTZw71e7vMoJixhfZQRY8KLHtsb9Ug1s3RfewHcBmYo6C8C4zMbqNgaeAaNahAz3yddm",
  "key8": "5xV4CX2y7BHJ1KknDjuKJzjnVE44tLGkcaTvoavZZ5Ed7jWjwJA1Ap7X8NBpD2VGYgYJrdcJwAErnT2LpG5XHRTv",
  "key9": "2ZsKrDNHmqxRRW3bKsWVrtXaD264bsUAjEc3GVRPNM9NWeqCkPgeBis4QTP1z2DaqwTh5YsJxkDwFX1CYrQZKyK2",
  "key10": "5EoCu3jcgafE6KvQwujCTEDiKbQwTQk5JupWKdNguxZgdERewuVGPBhagTSQnwxryFCrwVeJYgPe6WABiMVWJkUs",
  "key11": "4CohCtNEtXwnandGmTfDWL5VW8tU9X3KkPLfcvtFwvVeJEaddYMfwMr1LvFzAdjSN11qMXTrT2xuMasuEiK8bdxu",
  "key12": "3PHQj798aXux2wJcGrpxEt5kKkQfZiqZaAeit861NmdMrR7DSFmAqraMRgbg6FbTLNybVEsti5uZSYs2iVSNrVVg",
  "key13": "67gop4zAApwwToXmYr5sKui2v4pV6BPuu6euRidSKGYf2Up66be48mj8tcTUz3DHYLqWSHbXkQwqYWFL79A5hRYT",
  "key14": "5Uz2yKD7CuY1dbgVyVh3uLr5jabnhQMVj4znWMfhWsHK8SsT1rhxdKhYa4skvWnv4zCKpzcU7NtNbp4sf6rBBGDw",
  "key15": "5EFsXufXDdAYdpwWQJb71jxgR3r6z9LVEywoWe93Aaaxren5wDzaAkWW8TccfuUE8HoYnf9QqE2VR1EAukEwckdy",
  "key16": "5oPqhsGYCmjesf3kkfXKoATK9nUGv97na8FbvZtAjd9KL8cjuUPgygXAQjo8G3kGB7r9GykBBSfeDk15xUxrFZbS",
  "key17": "2VQsGyCLitBWnP5R7e1b2FzLcBV3PEUbmm2GjUDW3oU6pWMx7X3ZCkoPNgP1Fm2uHBULfdXYmRx6TmoiQ7QdYPGH",
  "key18": "26R6zYtX6pePcqCEkA7XmGueqqU1kTiowDymo9EMvgwzh2c8KZPM99uDKXpwYWpbVPc1xXnYMcV81qTv54qjzHbB",
  "key19": "5ZyQ8vHZc5hUkTiqWbyyiVxiXPdkAQamJr67Vcq6sSfscoesgWt3ZpUybvFmxkjBg9BSAheYAYPKsxVDj1wNYbpe",
  "key20": "5XXUHkxtAt2eTdUiyRYjtPtQ2HZpxQ4HHBzEn74vLnmdasEZaJ9bfWkfybjC2ZUL2Bk4Tt3ZYx6s2ct1gqjAeXVS",
  "key21": "1CkXNMe1y8YLeqtt3DcuiGtt1sZ9gfE1SukcW1ELxz4GKDTao9Y9d1aJ5YfXRSdZ5x6yq4aadPHfduVCTcMnDfR",
  "key22": "27e7CfkeP2BUMV8aA4SkSaKiTSA3gi73Ch4wg1yEWkBb42UEbFcdxzfSLDdmwkVTZ2iw9rPD7weGJfdCsBhigvwd",
  "key23": "237cFCtsA7adccauCssMufRTuz6WD6KurgkmL8pFgwD7ZNb9tU5XzA9vf7MsM4J1nWfYauwdypVFb5D1yiR6WhMo",
  "key24": "RGfkTo2P8HgxmcWjXwzbmeYhcbo1VT2sAyzRdG1YtWrVSanWbYo4nmKzWBRxR1tiKZqpCC5Rv1f8UxU8YwQa6pP",
  "key25": "46QyKqeC988veovvy2oos4ZeTvrWzD9FSemqDNLhwBC1CW7AgphvmTV3kt89CpcrkQpTB1w8rAjvfAMf7qBNpAT1",
  "key26": "5Hb2xX6Pg2Aaqcs41gYCoNQ8bkRrMYovqcBDobUFuz4mvJnUJ2JgkFuqQz8qqKQFe1MFa9YM9Qm63xy8k8TxK2cg",
  "key27": "5Gxd61JhZtxLJykKmJHxagwqse6nwLhNh4grcYWgunn188dDaRZaKGrwSDfjVEPM17c9amseLgMGVNGRb95UKerj",
  "key28": "278zRBNbHMFNWkok8A1bNjyLAmV2NpLunC7nQpEGpDBQJxYommAPWj1ehzn28J5CgNWFLWD3Y5UPWASAcKgT65HX",
  "key29": "3BRsjvJonSM88xfdcUG5kw2oZux5EF9AoeezAJ2pkK3Xzu4X4mBo1QGrtCK6L9Pve3qnJ61aEYd1vhcuqZ7sFkKk",
  "key30": "4GvzbDkqKYp2Mcf59k1gpTSAiYqeCPk1sTXFBZFQgeQXb7ntdP83XrQZa5hTNoAmAvekMwX1SbnqMbtkCPVQmifU",
  "key31": "3ZVk8kqYSFxJUWoyHV7AswLcBqCs3kFBmp71au8B6XZtWvHBvhLiojLD3H7QNqCQj7ph8pAHRp4mPpKgusUczpV7",
  "key32": "5mWxr938NzSGN959HZtrUTBxczqQ9J5UDCzzFNE1xVeBdu1MQpJ1vHVuKprW9Rxam2SEXb3BCncQcruhQyemWxiU",
  "key33": "eYbhjLWzQ1s8EMaH1gysRUzwQJ7qoG1BDoybEguVHmkNGUMED9DHAtvnSsatWXtEjfJ17e5tA2TSq97QjxQSg8k",
  "key34": "65StjRKP76njhmZPAFk2S5MdGihyUkjWzCWm92Mz58Lg6qD6keZDRKQnkdapdcVqdq4KYCfwKF5N8sQavy2gv5Ww",
  "key35": "BbKwZUzV2VX7ondFcnDnStVymRFK3tvxKjvxZNa8vzf3DDtxLwP1YKyNFoLXEySvG8GJW2gLKiXaQLZymGFV6Yv",
  "key36": "5HSAdLUum5hXM27gYo8KDNvpHjZNRVMbG2vHjAdDFs5AzUz7HgusGGHK65Gwyb5iGACm6B7RjXdF6AkrjqKa27XR",
  "key37": "2pkjDZgZ3Nua7iLAD8BJsxUJRopbyBvsJkTS74uYPqN2GBEAX7ZnmVCLBjtXx2nzk6dLopCE6Tcz54fiDsoF5oGP",
  "key38": "v1TeN64hn16HovziVmdMe5YU8cftAp8spiVibpmB7rWfKGY7r3o1YGKm6YbLt8ZXdWFz9w3iY456HxMW7zs5tYH",
  "key39": "3kStxFJe2YW6ipsH6r6fY6XNzm3GPxvfiNDjtYKYTa3NKX6HtVL5TWiayWF5jVsLeajVc8mnuPNmZX7F9eGsZJ2i",
  "key40": "5n8Cn2g6GGDVRwksi6Y9K8oZcgjSf8PoN8GB81WfMEHtJTNJCrRmzgRk4edoEZVUDBHpprguByyLSYW1q8QnMrQ2",
  "key41": "4oCLZxqv9Mue4E5XsNCHxt8u42CaKmsU3YYjhTm9hfFf4SuGcPAooDhoEXTB2SZvrGWP1anSNtm7Z6y4wE8koH9x",
  "key42": "cLH1BndnLxp9HKoGUHhpLhApSjhxEpNBKZXN3Rm3huZmzsrZGkd7VRg1ixkZzDJJLfu6LgQLGWqFgQyjbXDJ571",
  "key43": "3a2JoYWaHpxWwa1C1D92PoiN8PVu3ojMrptoVn4UPM2a7Etgz1FyeeMXbUXswEnNMTUyT5LzstwG5zKNLmCovwRA"
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
