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
    "fKUiNdZVJBPppZHshPwutLqHs45CK3K2DWSmb9MnwJJvN85QwSWyWRV2x1fr9UaU1ZZGuJFXf38D6dggntZoPZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hj1NU9hcV12myucR4EjVdBsNMYTPEvZqEUBwj1F2AHn1yHwXVVr7mZWgbHoHnue6NfcGwcWvF6KdiBxwb1Rp7Le",
  "key1": "2vtnfgvTEE3dEqoDiau4W8EgZyG2wJjmbS5iN4QKZ7xsFWAVVYu1rXrsNrHTE4hXYxVF8BBF3unfeTKwSCeiUdHw",
  "key2": "5bGNzRCuAzGGGmqwHTyTq5VFcEQWmi2YsdxZXhH6jg9anrgYK39Zirs4uzFr2yd4pyDUZL9KS8dVyJNMc9t2dz71",
  "key3": "2gW3E4pKjABfpVAW2x1X4PJAJmYCWdKqMgtRCJST4vsDqWqnRpzEtd8VpvHgp1MXdLPoRwGsjzLWqfHStcR8swJw",
  "key4": "4PijEL8vQC8XwycDCfF1wiv6eJ635YZRYPqaZ1GkTC1ArW2NuTYkUUBEJDAuZfDN6gq1GTFea1caEKVWqL6K3koM",
  "key5": "23xQPakZp1LnBf6VPonM9BrELL1c93WfNPCUt8sT4BF3zvJwkzNhvhFhMH7dtZwjCPuFfK92th3Tf74ULZv9zqbT",
  "key6": "4tGmHm6fHZkfpC7VVxwDMzMMs7MGQXJQ6oooPjJyoDNGNANfqFuH3Rf2cwGr8MzBb2yFojgWqkkX2nbhLs1smvuw",
  "key7": "4qiUj9CUHGvYVgVQ7CXiMDZsYZmBZACFHdCB1GmXEP9qDsCHBBuZMmCuaoMQ2bUmMYMdWDwfosf1mPbGD6iZ2uv1",
  "key8": "56dGk3kLBDpDPoaAvtsBGZKyUD3AVjS9BikUr9gPXipv4JyoLJKbiiRpfFGKwiSHLK3TSUb74uJM2e3aTLPnCfRU",
  "key9": "MNuRxseHgUQ7xM2LCnD6k7xWRvjwPpNDrAvtPjzwjSqR2ru7Ggc2JqDSQa4qjo5VyyHhjAozfouWuQTHx3hsaUp",
  "key10": "3A1jMsX5rnhztyvyoWzskLBdUgkkqTQvkg2sKA1iKMxJx86P5GY7UPe9LwmNNvbYMxHdMfRGVoQqgppVb48Wnmrf",
  "key11": "7FvmiZ5F9QhckD7dsJeJhpbQNjH5gHyFX3kJW66Vsg5S57fH8WDyUFdvKcxei7E5N3Lg1JfsPJRgGzGEtT6maYB",
  "key12": "2SsCAxF5492xABtwMNCiyQfyXdFjL9nj42mqfy9Eb2uby29yAGTtYQAMSMrZwaqY27gmZZdhyYMLmw83SEFQJ5PQ",
  "key13": "3bGxGrkjR8PCet8yFjvPSbVeYGb5qmqaW3YEgAXXmupkgMx7e9AaEtdAn5LXkgPGAT6FE5ebqoy8EmDaTtePxYS9",
  "key14": "4WgZkYnfVXCzCVCvM7btwcDzsNte7pFBDxMossSeEnofFzHBFKwqWfwNtQyVSSw2YauAVSsVywE4VFpQjvLAYTGB",
  "key15": "XdKytMt1XN6nvZj5cyDx6uMJqpeVTFKcYFuWMxCsfmdwvUUdmNJ3AkSHBca7rP6H9uaMrn8jPUrzsQNQhXL1yUw",
  "key16": "4MNpSK182622rrYLfKXGvqoaPn1iXHceFWrS3xQuafGuNEb1mFqkf5G4wM5BTHgVJKbokjes9Bb5ZNCj5yyNpN9D",
  "key17": "5hKayZU4uhrV9fcS8vqFtuR1MNYZNbUyYTJYfsZ11zwwewum5oapRyTGNb6wRLGVH31XCHosbscFQ1DaXR67CFQo",
  "key18": "2FCukigp4XQPjngLPSnHof4jQQw6SNVCjGzyScBpMuaj4nwymkg6KKqvmvBxcHvhfM9EhpbuiHHvii7HWJZNfeAc",
  "key19": "3L62pL1zFBfHgkKycbMMM5pnYhxWg8F5FAqY3qyviTBp9JtfLkk9Zaf6X14L32PjqvYHLqNjFFQkZBo7FfAD4ozx",
  "key20": "4Rd87A6JyrnM119wRSTLhs4LpWrVpAxC4dm52o1S97Az9mQyEimHNfaq5q1jJzJeK4q5Bq57WDejJcUTmToidRxQ",
  "key21": "5JrPeMjS81STVDreE6P6WN8SkTssPpjYZePbLNv5Xsq959cUz1Qh8B9UELjWerH8wB9988ocSmfPjCxM3toG8yc4",
  "key22": "PSLjNR3gWkemtzzRW9VNvsX4536Rj4nhXAWhQ7GFwmkHXo77ysoAaaFx1oFTbJXfu1jnk69PLGVm6FJnSQLN6FC",
  "key23": "36TGAQywMyZAZNGNQhfssDSM3UDdA1hzJaszGQNVKyp3u66QDhBq2X8hLC9xbJVNjyMzuUtZrBPyxqv6bhmANQYu",
  "key24": "21arKHpQZfDqg2q97YtVPGqDwQN4UapmCF91dvt5NTSNJf7TAMC5sDrz6s9iqD6MJZtoaNM9pTd5qH16puMQ414q",
  "key25": "hgDMmkQkRf1Tw8eSBW9SFc6GNqnZsZdq6W73EcNxAzkSyAZ1EuaaZoNse6o8ZWfYcbEyVTWkUCFN4xmQxvjvDvJ",
  "key26": "4d1dr5fvJNmE7fexxYNtyp8D22SwSRrV7eFPJnYapZyoci25D3c5skGNT4XaoLw1FCMcgpEwZ55dQHx1mLXviaTd",
  "key27": "zHy1DfNs844Umvhft12SzkkqMWuXDjuLBoGQbZzcLeKjz7fgMHp9Mntby6Eq94NbY443suTB2VwTphTtaT59T8F",
  "key28": "4PZoA4kCSWjdqjn6re5sBkxV9Gh2CxEvV8dfb8hfvM8DS8vkPJh2UXtStg5YfCwcMMAnB2NNEDTLLUaf9yZ1XCw8",
  "key29": "2qxX8L6vj68FWrfFoV6sHe1Mjw6LhyL9dgbF1irCeBukxUWK4Ui7ZMa1zBWFo3b7SL674C2BbLrBBsmUVnZHmiCb",
  "key30": "39M46nET3N11odD1L5bwGo1qMUKg156ae72boFDux3XdtUrC8aAGZvCXKF42YLGVDBqgmhTrLfHgBwovFpue1mee",
  "key31": "4dbna3eEEPDB8bJ8tZm6Yh87Sz2KW67J8Ss5nxAGQoWjFKz4xiwkp6QjPAKQJSiCZDhuw9wVaYYjdd6TDxR1RKFp",
  "key32": "2H3KRRZ7ivv6xCUgDL1oP44Kb59LNds5SgZhm5T7UV6fVWg7UYc4sRXTBAHqVevo831ufimvT8aG2NvzsCxcaAvZ",
  "key33": "2ueoPVUZ1j4LN4d4i4CVUKVLRGWaaNoi1uSiFksAU1cGwyuUgKg7PcswN2A4zRC9HdmJy2XZ5thBtrWua8Ks8qVN",
  "key34": "2KNf12A72eZBWWNcFdgUXSeTPbFtX6MizvpzMuANPieXCwSmwhkoMdww8GHuZTkycveA6cuZHXK1wi6wv2Mi6mSv",
  "key35": "siPpTB8RRqTFSE7UfvsAT1GhfdtxxLU5hjQwbULbS4QuXwTt9CkZvHNom3FBCf4MeUahsFsa7fZ4SGzrRmvYHzB",
  "key36": "4KrFFejoSe13FSUWvVwXT9gzgdxn8oKisZGYLuK2Vpv1SSj7cTF2mcNxYiTng8QsqVHDReefshX7vbkPjmom1QFp",
  "key37": "4Cw5LXu7V9XPreoGJ89xKsSp899vbxAkZ8VN3nKKBS2SCLJGPkv7Yh12qLgQhq1GeU7AtdiY2c3dGAsMU6fNJx4c",
  "key38": "2bjYiVmzpEAFPCG8jXz5TuJSEwjhLVg8UoPPk7wFDtZCrh46rY9xpuivSUC9z9MRXc4xjV3TsXXuAjJFH1M7orzF",
  "key39": "4T3AzWcMPTb4F16veof1iNKsNoEXC2V7qoBE8UKYMWemUYGur1xWUdjGAFVA7ukQ9DUzq3zSqN3mqXqtaTUWCkru",
  "key40": "5gm5cwEdkNoQ4MVRNcfmCWmaFwuevbfM6uEXFj81DT1uRkUpftVbLzPgAKUPmPZnVHaEk1WiaGMG57D1HwZXEAF2",
  "key41": "4pP7mLkeWKCdHf8QnPAg2LMHGDKYj4Y83iEJCsqNZkYjx9pG94TD6e7PJKNwnfJ6AZyzkBffsUoGpL7GhAw4eDnt",
  "key42": "3yVAf188dLdv529M4XXmPaR5QyY3TKAiXQZtUDqtV5gdxKCLXo3e4uYo4rZMSKEEs5pw2bsA83ikc2WXjaXL6GBz",
  "key43": "5B6hNNJVo66F2f8kvkhPh95x4RdRthvr1FzpxKwFX13ZGPaX4x3BzAAmcHAhYEM2KXKRBDT3aZ14VH5F5pW1K9gK",
  "key44": "2pZAXUpoLU3nvs6HELL7RrWvb746ziN2YoEYa28jdJ8Xt7qxn9tqHguMvYoDRPFDhptofZfYZNhwA2bzEHDHNxHa",
  "key45": "4GJzq6oQMVDE9bPw5abr4fif1nmTzgwAYMcg1GeJ2LiXYEvjDSV41W9epbDwtwypN8tDmH3ypbe8NoVEFFPXKiN9",
  "key46": "5HRyQKzFee9o7MERJnAAX3Z5FsjJQtkwa4EzyvpaANtjfgk92ZZhprh7wucPYYFBj9xCE9bRm21TFTabMf3CYAan"
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
