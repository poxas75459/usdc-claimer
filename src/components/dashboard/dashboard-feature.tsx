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
    "55SauF6FAcJvFyQCkGvGjqbvshwYb4C6KFnFcphynsLLzoFYLhTiWmfTFswmoQmyEKPEzRgMqnAjQUV2QEVLfKNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMebom9HLdcoNFkm7gQDgwVLMLThc1cHFnYM3n6eaVU3wmExr3SssS5RFWLCfLBpZhuMEkSBvDGqukBpjQ7ntPP",
  "key1": "24XirsC9wi9oJR6uZwUq6YY6Qkmoykmqc2ButMNdUfAkUvdFP18mXpfMQnzxw3BxZBiPKmQAF38zWXebh4Jr7cTv",
  "key2": "hKpEW9FNEGCQwuhJuTcxs4hnf7TcV2qcmDMjxjMCTjhUQAGLBwb1SRKozNzckTFbgoyZQHvVUs4RCog7d3Zersp",
  "key3": "3ufohQuPfmkM7BfmzwXgAgZUtdVwejhCuyMdThCvsQ89DGtWWzbE4xfXz569kszrKN5pYs61Ji4W7C9PH2kXU7rC",
  "key4": "3tZjgveGoT6Cb99xwVfVS9E3WfoQA3GQnSQNz3EA4RegQsrx4FKg3AZoVSYqaGfVK1iDz1ZJ116XsqG6LDXVJaWM",
  "key5": "4xJR7EDc8VsUZHBgzDeYKiYu5fACrB2JvjBt7EgRPY7UfaWvc2NKs96DYFP2YcW9KHNjXXdd5v1PMgFHv3wqBMSv",
  "key6": "5KD768FmDPyG38rnYMvqFnfvqgX2QGTtYWqGEeU4nMnbDx88fZNfwXQG8PtUE1q9ZHtsnoaWhYt7F1SAJbDA3xhG",
  "key7": "4fURZWT87V2pihJkxB4dPFwuWBHkNYHRrNKH9kmAfzi3rNSzeFwpprGPZp2ciivFfbKJt9nXxWZVzZH6UsgcBcuJ",
  "key8": "21hUSAmiLCj3UroibnVQ5U5HtYtF4nf6MfVpL58XeRU63G3VDnCHKf78XpmzJ4oVKGTsDVv7W49wFcbKCawTEEKQ",
  "key9": "4kVGenmmXcJh2VvoxTDP9knGPfZRj3TyWF1Ga6yhWdcHNjZLNjSVsoYmxh5qcEAU4MqQva9TP9QP9EyVniSf3hWr",
  "key10": "24X25er22Z86jbNH833mB7NuNqaoqU16KL5phyJCkrtQa2ahcCJc9r9B1a2xUCahhro15P3qaFvEFm1e9ptdoybv",
  "key11": "4ozWQW8hFiMfzYj7GXLMi9d5eKWCFTFPjSG8RX7jPcjP9fSMntoP7va1oFSu9giUnSAwnQfvitDYS6Yn2XLBZ23o",
  "key12": "3rbNeTptUnHwJTQpRR8kCuYpJtSmio9kwpMDQXABGFsXiVzQTGKCpz7LjdpBXmbK27yQYPoYFZ8gjHoPuHqbnZrN",
  "key13": "4bwt5U55U2tNTUcHMCybx7W7nAPCb2oJwWYZ5J5WG3tGLnePPpLxinb39br265WHH5gPwBGsE2KDbonribsZc9FX",
  "key14": "4sW4cQgsGWDpCK4R9RQanAsa5Rp6Qq4P4ZaNZVMGQAt6yHFY9pMJEXrsaYLqjEKbjvVx76RJFQqWimN24N2eoi34",
  "key15": "5BhUzMsRSKHiwtStAryGe8xgTbhQbwBz9RW5rb3TWhLpX6tKNGeyF7MxVUULbTf3eqh2CHazpxjfk6iVMfWGLZfE",
  "key16": "5iPbPd6PoPnTy3T9uAqgez5Cxq87GqhzmSRtoSWASMCnXUKuF22UHthskSai7GcMVh7S9wUosJs9R1GHmH3u2fWz",
  "key17": "5MaNSAzRNTJFbBjXyEv6we4bQs2jH8vDBHpVG39VpYJ8wnxWCU8fqbckrPfs5UjaGTodqXi61XipdQWRZi7L5EMo",
  "key18": "539oKtkcgE7W8LQubawQXQHsioeL6DkY27e4CqWuZUQSGw1grbfwD2Kd7E5oPBQ1ZXXt2nLBbtwW7yaFvyAvDhkm",
  "key19": "3btS6sqyi1oB9qHXVtp8y13YmmAC6Yam4UngPPPWCNrSppmLq1Eb8mxbQo2vkRkBhU7FVWga46iKNpB8jk5GPkbo",
  "key20": "jgZ3n2jFAYbgwhKPVHsQfpmCkav7GYjQKyq3EN6byabnAnu3PUYk1ab17jmFrZBoxGGRW8PD7siRCUtcALEdtAA",
  "key21": "33YCqiBSFi1uuijXwr1Aw4kQhzUjpqAGXbTXXfaJvSegmkLFRYwcthG6zWRhkRtazGRgX2LbrmFd5ADXzNSMqqA1",
  "key22": "4TSkQobhYPg4pb3pJUA1rBMAqxaMww5FMcj2d2aC6SabMfCYUfrQwSwgiwyzjPE1zGcvgebdc2rJvm5yFT92NTdB",
  "key23": "3rSrW7Rw4w5iqC1TRJaRdj5tjWEJyNptM2q2yfA7PiiXQTzcqKAXSZnHD2pZ9hWcipPBer7jru6fBjr2zu6a4wFd",
  "key24": "2URUAjtqKRzEuxMNKwj4dEJNdJq9NTVKNwigdvSpRExcYHKHcUBKbNi8BJDEEbKgN8Z2TghEVqjgUa2MzvNzPaiR",
  "key25": "TaBHJUYBzB24VmNki966crhPbPeUNmtJHMZiryeQ8JLd3iRBxNJh8GcfcxWAoMVFkBN9eNw4SjEZozjiJcbxbsN",
  "key26": "4YY5vwxjYUFvKtMh1nSrav3PnoHNoWGgbTdZb6YAQTxuCCpsrPuMa2MTpQuHf8Ma8kAJzcn9LnEsE1wKxzZ6BVvn",
  "key27": "2Cf9Ntsv2UqkgJsefUWhekKGUyFUmtDffuiRvQz94sYxebrZsx6z7kpBYTVRaf89bNCSdkuPbojQ8uH514kL59Qv",
  "key28": "3TrQATXqswsSm9UwkgW6FnFVkeEMMZTUSz9KBCHPGSTeR6XnLoKHYNtzKzdMjvisKgyuYKuDr4YQvSq63DNax8TD",
  "key29": "2UmPXELNLbo7BwDVxyKGQfzBS158HymNyB4xUAE8yR2FjGquPkkDeZWUDMfDTtMx6tX2Wwe8VeGnuUxmv3ijC48U",
  "key30": "2FNcTQ9BxPxquEZtcLHu8RgxvSGDf1Sm16C8iGv8urTVjPrK1TJGCiaYsMQ6UfSaWLuJQi53x16TALepJSdx767z",
  "key31": "3erL8LzmcGjohiT25n1eXrh4qijC3rbtK3e7G1ufZjDBykPMPPwMqoAKSPC5adViJ3xm5wVjxav1JLGnDKEqY9fF",
  "key32": "43sYNHw7x62rXaH7g52Y28XEtRmsUXHxDWCzUzaqXQ1eJGeuTvqgwHtPdiCcAAWFUmvYNFrWhhqhoXwcTs9WeGy6",
  "key33": "2A5VoKRn3wNkXik9VNkYoKcXMDrhxeM4bw9p4L1pTNXVi98rMgcynGZYswWMmfj4AFTycSz53BZFVB6Tbd98XZfD",
  "key34": "2pm8f9XZUkEHBGqZeWShLX7ZRxeRMEcvNLK9A8eWbhGYJdB1GWgz7iNg19NoR5HMJSCU5PogPGNgAp3YFfoZ8qPN",
  "key35": "4wrbDX5ozy23Ra5xFjxdrQxCn9eEjU62WgK9qedG8SbcNddmBCg5rsJKGESW6AAckFPMwgxhKThsc4Pq5ZVsr5A4",
  "key36": "5DLYV7trK6R48SdAQGaf3YotpsQxU2HNETgwcDuwmtJVv2EYDiArrZ6zenx6Npt9yzvrqGHnP2xWfdo4t4DBLCWE",
  "key37": "4SRUeeDX7cduf9WNwgS2ahp9ZvRYg7z9akzYCHLYhY4cqxrpJJycaoron5NAxQsEUvEBXfAxctiohE5cW7aMzfv9",
  "key38": "3LCt7ZzAnhtVzUpbToN2e5zjmZVuq7GUzC5eHeji3uWCv9cGqpo8VrKiUdZPrXoJsHBFNYqeCtiwBbXw2ANSjv88",
  "key39": "2jAo8Knn7SPfK39HQyirEMXAq5XWehp7aP6wudUDkw8tk3q8eH1ctB66yMujsfFAW5W5N58a9Dxcq9hKok1Xu4Zz",
  "key40": "4z1UASHPe6tt3RJR3V4Vuw8VzXntvAisue2dYmQHJLXddSwfR57Xr1zjyccn8Ad68ctutniSfkfBpyD5ETsJnssv",
  "key41": "4Ve4Kheud6ZGLBFQxcTuQ4ZQb4PwTFJjV3kaqbPo12MHZnzy8GQYu6TgTHfSqqRg9gERrBRZiMUxsscFJ16tnrVL",
  "key42": "3BBJJyDsBWNWRDmVGgQa2SEKRBcZDcVTM1V3G7wFBjpH1uPFQj3DHcV3qfzwepBomyRtJxsePPVVLLHcbmTgzrw"
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
