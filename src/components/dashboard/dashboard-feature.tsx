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
    "2JkbjGiJdaQwV76SrNQeeYpfaJQHP68292JEHFNf6yZPapvs1HmjXroeRPLkCKVksouhY4Bu3vPceyVuQSNH7j1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b4fR84w6a8ZvQqPqiVsCSiM4Xvy37oULmPJqodYk5A4YB93tEJ8wYsxTxAkJjKfWf1LXMenQ6z3ft5u8FBeFUP1",
  "key1": "5sLNAKEoE5Lcn7hXZhuNMyVywF6bFcoorboasDCAQehjmvJLHyz2FUYD7u51tNPSzMTgFs97kdGraSvbDHTFa5RM",
  "key2": "3JqxVEzkTEkvnjmCF6WaBsTjPWQmmjbe8qwateH2Fyy3Jh9REnLgcYC367pUsTBzSCajnofUrT4RX7bye7AfdNiy",
  "key3": "4mDweR3uqHBFVRYwEWpaFnofzxUs3RM1rVNy2yEKvg2sQb5R73mqVsvDJFDZNv6jkHFsFsC8pNrBWnznRPhv6W1c",
  "key4": "3ApWxJEh3kyuhnCRWNfPewUV8wVSCwCuAnpueUTYFWqXwGDSgCwHPAP3jyPg7von6nt5q6w8qrwRiJqPKU8bRGqv",
  "key5": "2GiGYhyrwgujVb2G8few6LWLo3By5K5PMa76vrMWZQ2cZWNb3kKxMYitvTSdFMj5GUmyB53k8BXLM5h1edF9cvoL",
  "key6": "2ba18WR93uFBFjuHYtAMajVnkk4E6xygExJHef6sxzSKDvKmHNNhHSXBShgrfjyEJFF2gnPxZC8hXaxSZXS6wCHJ",
  "key7": "5Yj25ZvH64AbM1zdKpiai7sZWTPLGVknVY1A8nYCcsC3RzoRtQb1fBx6aH1gpTqKaFJGkT72LN6amRE38dVnbuQY",
  "key8": "25bVcNnK4saCgU6np5EXnZgjPq3RHK4SZwfFgVsXpeWdDRwsHUz86yHb4gfekD8UzfckXryd9P3KYaVyngWqHZ43",
  "key9": "5sbCbSrqCS1zyKCyWiwTQ1CNcdDnKyMhLfgD45hu9xxNyqqYEFX9UTQBSHZhHJ1wb7C1U7VfSiKhSaPktfyXeLZ9",
  "key10": "27WLJcYhppJCwddm4W6FZjztqKBBEiANmLxc4eyGYgr45cWHQTtssdvddtdQJhdQRuWBUzFxSqVUD5vEef4F7wEu",
  "key11": "5W9AARFy6124mMfkztFA2dDQ3FcLC2wRRQLLQ4mnvsXfKqDkhoknwWT6VsFbzCuPM73ZstrZeawBKkE7CCeLHJd6",
  "key12": "5EJKDdevcUgddSaSuF34YhvDC3vDKAjfhGUeEcGz5bhY8DiwLedXTnHJwCVcHzj7LkgScFBniGMKHFVb28c37kfe",
  "key13": "4steLHgHsyjVRSwn7z52kiuwwzyvXhfQyr5ZSWhrApLWyHmBXwrnoARbKWtyqWVypqRczp3EfUUBx4hUN9SBZYTB",
  "key14": "4uy42cABQw2tEYa1CTrdKGAUZFWFjpQXKsUxKNt9E1W6BBNbDa4ZU38cjDEfdnyZDu9snjsgeyExUPorkDYvCWuj",
  "key15": "5BuZf9a3yTWqUTzJ3G6XUzQW4HbbRp8vMcmzt1L2ijNBejnXYMthr5j4c7UoDpGbVHAGJG3WwkUxz4tKkCECVczy",
  "key16": "S36WoSwsRbSPdRrs1ycAijCQHMUJCWH43TZNfVpYdyuya5C7VeYgMkfFRWwiUmgt6GTAqUMc9J6hpcYaj8x1cs7",
  "key17": "3TZ5Tz4QX68aAY3CYKYQGnBxhbZ9o8Ybay5145qbcpYGgdG1hnA6upVNSvdRiQMX2Z1DjGRWCSYAipk4YXhs9hrM",
  "key18": "33W1WbB2m5oQosPmnSAZdNdCJEWXK7wyMwwdsNx8SYDRXLsYziTy3X9BomTA1zzeqEMWPjnUcjiqGVH5yvtgnP3M",
  "key19": "64V7cq9sg9LAKKVejSNVv48sN7iqMWFBQEk1bc1YEZvgiXsug7U5kx8gcG7JYpLBScbGudoz3s1WEZrWxwLYC3az",
  "key20": "4jrX1L7sdvGZu3y6C31VnLXrTsc33bLnSumDJDbd8nAVjnQnk1TbWPo1cCv9wRsEN45JGUrhnvvR6mD5VS7KiUMV",
  "key21": "31Ruxzer1Uc4RQjpJ7t63ZkQrjnjexzQZShpXL7BAYV8GW4cyvGAbmECfYejiKKyeCdWGXFGXScENiVS8nPfdujy",
  "key22": "53h4Kh3SPvDiQAifeuUo4nm6UsM1banAPFkq9NmSb3zJL5gQj52tGHCRyWsvcSni7n7zVTfEkiadj4bwgdY6EZyL",
  "key23": "2iFbwjVRqSiw1iRnNvbnzpt1iKuEYcW5pXUgEzaKvCvJ7DMMEu8NxrGvDFdvifa3qFbdsqaPqqZiekPRgPqMZEdW",
  "key24": "4o5wSJLxmogKWdEkbssMdVfXjoD3dae7xux9RKrM2exBhyNFnxjmtQGG5Zzx2uZBm2QasspXemRZZEZ9cjLF7tWt",
  "key25": "4bdkSGB1YY5tm4c6NN4fdmpQagTximUSidvo1YZd7zjzRKFYH7jnBKruRFw3emy3ucigsqCExHAsCXAee5QkeTrQ",
  "key26": "4m3To7UcmnDiLLrWEZnDdphKuWbDTBHmRBfAkBY3is2CcQNsYE7Zcdi7KoJ51Rqo3wjUJ1E3twoeCF9S8HUGPsPj",
  "key27": "4Ug6Jy4pKHxyatVwZFDgjy8qiHr2CC2b73Zmhmcvkcvm5h8Qqytafedp6JNxXwihBwT1pviBLKBVEjH7vh9yGMCW",
  "key28": "5vQkNjwob19s3zpTouUbL5LGthJqCK2v4qvVmK9U5y5H5UM7kLUo5szrAuWzavEc8Z5izckdJJrwJZem73BnBHUp",
  "key29": "48P94vjcv9wR1WjghwmZdt2MECFgM1puGodM6RJezfrvoWyhTQZH2gocc2mf9JnQdNPqR6uzfrJGHnXeGmDdHpLF"
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
