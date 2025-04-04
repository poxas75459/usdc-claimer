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
    "36RKuxPCdaEjJq1xFb6ULBdZftJbkhVmf551CT2RMVEwqNsdEpuo4LYp7iKeKDBQ3aRy1iBSXJadibwE1Lbun1Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8xdR2pwQnCcW9KubeMUFkjP6LeNfHK7B81MRpDUvg6dZcSNDhdHu49V9esfGcqLs2f97F2uTtUxkv931nw4CyT",
  "key1": "yHknWfSfTbbHopj7KjvbDCXqmJ46X4dJRJi47tksQqfGMzgsGsvAqzCgiUW83NAnQatr4GXmc6mz63hYwEdpMg5",
  "key2": "5PhfiYn1CLDQj3iBYkLfkAFsGkg2uMGUMh6hvy8VgVLHoPp4q9hQHzycHEkQR7dwmZxoHM4DXq2BSe6B2pfQx8w3",
  "key3": "PJGb1v1VBnGj1sscivyfXv6hhNqCDEHd1oG9uhq385bTh5oCjbQZheVRMQm1FFCiheYMCBszRcVWxy5hmiuLWKP",
  "key4": "3i7igr9n6yiQ1MZwgwXt6DosoxSVP72Z2f2JmdqfuaKpAJu9t4wot5BGuWFBdRozutUJzGBavNbhVe6MaZUEB36h",
  "key5": "kdqaR4dsjmgvMhtmnWZjMNAWrgY3qupFrtQprekBfsGrvW6yb6oFRmo5JR6BtfJaUwCSTbLmdWWFKnD68QvEyHh",
  "key6": "37v5Xq2hmUAr679o4MJkii1ohRUJN9BEnjmttJJDBxvJGTm4nNLKvBTjijWiqvAhNnjiuLPHWetUgw4DSoHRKJSB",
  "key7": "59yREh88BdDXGtLm7WdiCCCiCgA7h6H4BYJ12AjjmiULdP5mhPNHicXKku2tEjhvmeQQ5oV4Bn51JWoDB7xNMp39",
  "key8": "2NFoso8KHUeHmcZnv2e6eWF5jdUuTnqxTD9sL4D7JBzcdWsXehW8A2mnLTh9Zd9jkeFwAAsyfjHBVQyyCLpCJsUz",
  "key9": "39dFz25qYzRbAxVeCpbqDijoAPsziLnGrbSXVrKJiz2BvEgiaG22gqmKjE6jZPpgt1L87mCQY79ohyoT3KWzHpmW",
  "key10": "3Dep5pBPZerG8knZh6NLciLNvd26Wx7RMYhrHbTYcUbqoXAXPYXgqYPSWyB3oSsXQ4FKszckB43ZYkMdEq2rgdea",
  "key11": "r48zd4HqUzn4XVyFY5PewWUTrGPwLhRAaEpgCiGRmR6SKWY7VkDrchrFNBjMc48DVdLB5BWnNHViVn4X7hiU4RC",
  "key12": "tpuuZfA2jemcWuJPLgYntJzaDv8RYWF6qymabb4VtjeLapBoLtQGv7dN2WM8s6KtxDQJjrY1PRuHmEyaDrhTyUj",
  "key13": "41DHkbtULiXNTPSiCweYGjHJ8aeNZtZbbBwuTVA9exdZJJjYDz2r14vWG4nRmw9nTvPYuH1pPFMvXonPNDQgKKEB",
  "key14": "2xfFJ46HMcSvTzxZrCDPN5bVcdvZWV8huJ9rcPHnqed34p2nb4YFCEdPopY4HpYwo4ZYMJyo3pKt5dn5XFr4MFpQ",
  "key15": "5YQveP9Gx3Wz5wHw5C2FNzzRndSDjmFo2WsW1LyWBwPNnjeVv89TL71ncYN4URufdcA5QjiWKCgWrKYHnUmux4bm",
  "key16": "5zgJPE6by61XJY7cW1Ha1yDc18SRAF1wPE8yupibroFF9pnvt6yNbJRgebqbbnqc1GLeBMjuTXHFmdYipsoTLWgn",
  "key17": "driWFvkTS9wJJgTv8G8Prcy74Qy6ZoV1vXck4bDxbkNBMcqtifaqnxLwAw8RQycLu2JZu2SAGRkj9z7AKKRtEDA",
  "key18": "K4fCC89YYtNJTmwHD3NTrD9cnY8LW8bP27zXhAbr5n4qRJwMNG9ttoZSY5a91B4sf1TU35vFhBwZVqfVmFACjbi",
  "key19": "5T1TsgcU31rjnqHhcDNGdy8HN47vBv4B2JLs9Kb5HFUi5UqhVWajcRUZTrE2KwnHCyEPQa2hCXDVUWgHDsQM1JSS",
  "key20": "3NrMwF7GgbB9758FHpB8NKqZ4wAj6o2wodJDZBK4HKPQfvDssAXo57CyEoSqiAbUqfwbFNFzwMenY2kPRWgexx69",
  "key21": "4AtSHgv3XX8NqJM4NbopBA5mbjuewA2GYjsbBmpyYVtswomZ9J4Xm8Lazj4V9T1oxmsQMLbzagMDhe6ZqwgRfDuW",
  "key22": "ooTVP8uYixGp6cdogEYLwByeFtyTqYxNZ8uvKhhXBJ6QwjvuafkjVY3JX7XLH1htMfGtdTgrwsgZELewfRibXwd",
  "key23": "2ECmwJVVQNZaniTzMk129bCu1veEdEJCec7muMgVTrRTnVMkB4rg2jbTNqFQfCP7KdATv5dGAD6uBE2y2qKzQMfF",
  "key24": "25UP3xLPRZwqGonSAMJADNdHUg7K4Y5UuG7G5uivbkqFbHXByDoTf9A5CF1CZYaPctiuGCQyf8nRFSJLTvBWtDgG",
  "key25": "4LZfpLxdJCzsn3JDam2X29HG6nAmw9Rb2xbA9zwSFoADSkCgsWqpUbJZubn4Rcyv95vzjXkL5pyPZkjbe38f8gC7",
  "key26": "2exTBZiqbsqUTgwh1TEMzXrhA4rv4ZGHvZi2V1u6CBHNRmRQ6yert7VtH9fHr2ZBLLVx39oevGs7gUoYu2LAxhPu",
  "key27": "2uupHvRHfNxMahtZwfYFDK97QuBNCF8dt4RkPMPvNcZCEAaYVgAPp68LuXVceXDSxYQ5st9t6pRE3QFwhsyYioKd",
  "key28": "qYiipbDhxYTuJDW8RKCrRiMMTjfX5sPXg9QoQpogVoxL8YPt8NN2Dqvqrt5L6dEyreaBA6j6EHDRFznt3CJE2mJ",
  "key29": "2DkQyMn6a7gdTf6azxeziQijsndBVfc325zzBB3ZPd3QPEgkFCiQJ2RFtc2X1zS4DChNiUzNFQeaRpJsgDLguErT",
  "key30": "3FWDdpkjyXZRx42TmJcbx9J1zkUBgZ2UYZj4TzvB1nrL4ZXAc5ExgGoQfoBEERWojJF83PLnhUNVLCPGRxMT5D4n"
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
