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
    "3A2Y8W4dFXkajjySefGko7aLeQ2bk3eGgUgMEmFp9GNYu7BEVfBKnyXV9LLW98WLkE5j1akuimi1gqLLu324Ypnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGwGnNF6CSqQWTyaKM4kV3kuWNJEN8DhuxyKo1B65ugDfQeU3EXwUQVpLuqpBXMR4xPD9ghL7uTvBead8kPwcNL",
  "key1": "46YG6favdFsSE76pXy9H498vpY3txmTkE29dsNN4zjva7fixRtk4Sy44nL6TjjLthqhraPVF2VxFT8GAHSAHF3pd",
  "key2": "dMZ9CxRSgEoF5JD4VDrg6qNBZieoSrT3wb1zGp8QDJqSntxynvH8mRvJUsZ7sX46jQDKrk6NmdUtYggvEoCXeh7",
  "key3": "4uE1yw1Ui75BcBuTf7ceM2NeokftVpoYJfDJad5RwQuUC5k5wFvncFPHWry91ipg9uNxU2EXZqUMrV4iRuDjdeg7",
  "key4": "29i7cg3tHoK11XiC7QRMHNKCkLpeheavSjqdkJzHBxRk93mTbATPSoHbEgB4f89zw5gEQ1AqSSLE6ZJ6vyESDeHY",
  "key5": "2KdenjkJTEHX1ntfkWsfcpjoWmDJqwr5Pr2SPPj4pFW8AMekFWFDzHkczpMnUaBgtUiCm8R8a3bGigEXZUL49hBE",
  "key6": "4xhXSxwzTKZLdErSZ89QZ1c3cQq6DaREXXrRgMsjxRbKdRNmEWnHviQZrKWH3hr5W3DJyxRxv8iXKcZ8AGhPTSAy",
  "key7": "4CLJyNTnsfYSB4ng2Da7FnYjoR5ygCHDVjLanejfPmSq5RxkGD8hYscj7mwFvLuHY3BDw6Y7oUMvk2wwDRgzuYXU",
  "key8": "X3nrG8ZmBSocyWBT4gQuTSiHJuXCWc8XWWMwjGMkeMv1PMWGUM4sWiy7LyJK3qFWFdpwFpePpUcrqZMoPciPL1k",
  "key9": "2R3Ewi8m67taoidCk4YBNAdVr8n5tomPu5WZ4aVGGa7QaHMwKHLyN8BQi5UUuTd5zCQTj4N6CTXYEHwKhGoVGC9Q",
  "key10": "4PtMPNNeeZUpuiFCuru9oBQXouYayZjsEeW9jY3yT68TwiyAhXsEjh1vLQbiKMVVeSLttnnuCXU9VYoDwmoYQc91",
  "key11": "3MirXqzMKxdk8PnWuyPfE31zoQYn4CRQvTEB9oP7ovTbM7vxA4LJ9w55YXuTTA2SX32Qgc9PER5HbENP8fuiY9rt",
  "key12": "5PciFRmpAtpg7AX3d5QWMq4PBRxG9bNn9Sp7ZSf5Zn7ZL8sXgwXXaN4kxvy5uJ6XpSkRZSfv5b2ebRDdDiV5cvN5",
  "key13": "4sqcMChP94y2KAwqrbmKBWpn8QYqRYUfeY5AEq1Rqhg9rUnbobp3Scfn4YB31CwAJbjmY3Vq47sThRvvcj4nNyyU",
  "key14": "556AAcabmFEbW1134v6f8Kf3aTgRwNBrY29bmLvLCpULvn873ohhR1Ath2jWEc7bR7Eiv51jXcTJPc9Q5aJReTKM",
  "key15": "4qnAhogQDTSQNvvZ7pD1RckKpeWGfeR4FFSEZu1J1oPcSCLbWfik7okE26FJUhRQwzVoQMDyYyMuPwM1SBVKJm1A",
  "key16": "5sVpCUqkWHBDtbbkmuHwrWkeNmTUs4BLxzy4KqFsYat4G4zNJ6PtwAhnAoiDZGGcr7peeoVVaZkq11ano5j36oX8",
  "key17": "2qPJbpdp8f3kj5AHd9WoZYvjidEgFD7uZKTFgLJj4QJZ9t3vbuyjn1emDS9sHcHGpgAh4HRcCLhj5SmY8NSiSoyN",
  "key18": "3F6uc4qKJFopWgdAZ94BYP4z6fVbQA9fUygD9ZfmvybTQeunnkBsw2ppha6vHosrFrquTeSujxrqSUyXuc3BtW2F",
  "key19": "5uR8nbfb3PGWpiXGy9gRWeRsK71H581MaxfYAftuAfKNnAXPdnsHhdTLFmmaMDbE9Xvqj4rtZQNwckjxkVZBJida",
  "key20": "3kRhohmvx7rwrmvN5gA6geMrt7aEj6JCLhxk4xgPe2d634NGKe6UJe19fECwTbNAEDCoQJKvuHuiBLBbhHGkxAAs",
  "key21": "49ScUqwQpmLFEKwgqpSPEtzvaBUHMQcRSBkzd9gF3SW3xnvXq5DQXscLeWSStwSX3eowgFhz6YCd93io6tWLMKmi",
  "key22": "5X98ZYbDNPGDARAUXtQQy4FDgJGGT4pUrHFkpKr9vhi7NK8P5orDQYWeXuwxdQb9K6Wy4RttmjnsuekpwJtuTmn9",
  "key23": "5mGUcVb6PU9UJDgCumoPJam1PNMwfvtvqFTMtMLYDhvRSj5vBxLnFmEyVTC6UTnE5B1NpeBqxjbMG1bCupLpEpAP",
  "key24": "67GLpVYg6x9YNj4D2TCgvSmbhDMCHudCGvWoBP8W6VdR6tsNcM9KH7urwjxrYy2TY1Ch2oqhayhQhDYEmsZa7vhG",
  "key25": "5ZAvHHYFCH74sB2shhzEmiQVnctQNi3v8HaScxEjtphKXfeke2o8UE7vMrmGzVACCUwTGFwY7eb9AJou4oxfvXjY"
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
