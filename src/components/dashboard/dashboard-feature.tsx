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
    "28ZE7Qxxq4kXDNiBMU7eD1vqPvbkd2HBdEfkY7mKxUbieAaZ5NUABS4HEUBfSND7nxUvMoTebqBhmSeLZLx8JvnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxGHxSLWkddC8SXdB8HMTFpRsW8efFTQJUFcDC4n8uBHcpwn6XJJXzJhkJxJecfqvqiYgCxMTwyswsPu7m1cjaD",
  "key1": "3U1LFocYX7cbxcuAPKTYEdNwLGWYxAXNps1qs2DTVYHYondZJu624iTvVFXtZPAPqk7PJnNrPGnb6ojF28oBbGVP",
  "key2": "3fDwEbXQMFZBg9wBTw2h4C1ieVP66wp99yBpESfkTs7x8grdkBU92dLpmtvdhWVUQK5cFeskWQxyDdksQREgQPdU",
  "key3": "42gHyUrgqc4jZyGJ8Wqkh42fCsApG7cDJuL6wCkdqTBdA6dN9Td1Esw8Ep7UhrZAc6XaZxpYztVfiVgmdzPJHmpD",
  "key4": "ztWzaqfpaLjTmVLJ78eqXBJcH18F9xCAYpiim18bNJGVm1WF82FTpBUMdi3xpsTFH1EBYmuQyB9qkHuP5fK5hRF",
  "key5": "2Ua4bHHkhgKHywkiZneq3tkedjRV1aN8sMphGMBijrfvrYzFtv1F8TYzcfoox6KCRdRFcxpydSFYB8iWvEtvNyGN",
  "key6": "4FL3Dh4QLDy4y2U8ygwgRZgFQv5GtmjWVNtow71rpARvAo6wFRQvsEwae5vdAsLedkcWPuhuqMMaLywjBQa6yZaU",
  "key7": "49Aikr3zdR23Skyx8Gk6y8FX9FysFUdBJ2ete4BNB275MoxUyNuupNcopWWxJ7K1zZEpWP8rgwWKgNb3hLmecesP",
  "key8": "4izMLiWr4k7uvX72M6wQyHwXN5ZdPqSCCPe9BzkfxJHRGi9uiGSPXyvSLVfLfeFiXBFVdDZDwm8QZbxo8tWVCi6m",
  "key9": "3h1AsUkkipLsme5Ud4bccj3LRSdwCQtJawCwoV86kt2wSKAyJzKBxj857n3L83bb7hiLz3hqNDsww9gE2PFJrA5E",
  "key10": "2B4KD9DfPsFFDnPc62E77h7nSUXKG55BVDr8avuN7djBHDbXVPE2m9o9MZrMEbgVTCk9RePADWc8rseBC1Nevz4B",
  "key11": "2pvPCiRyDkLwxT4Aa5oF9zYfQD1yxgz585ZdajMNGZa8Cr8Yg6URG9dZ2UqKiL9akNdyqEpnUY9iLZXqSHVZFiBh",
  "key12": "cD5EHy3yCH9qRezYZwsXips4z2joiycZs52Qvj1YcXYfDhUGyc2wByAJisMMZukfZwXuBuudABY48HHTG5D5vD6",
  "key13": "5AubBhFGptLpxgrAsfLfBdXo5dAgbfUyEa8TAfAhdWYFDbiwus2tcYoLfbxHUZhPNQMA1dHQsQuvyNWPLBTPoxiG",
  "key14": "2zHgVieaCvTJM5ECBbdzYxor86o6NYmdEjaDeDYj1pnQ2mi9NNqN2A5VsJt3GuLVZECtVTS7gdZ9nSFVuXk2Snv3",
  "key15": "3yfzHwVDn4LrTMAYjnXgsZCQGUgbSHWyCa7k5vtyEt91L71cGC13CmtMbiKevF1Pfezr9eCBoyzJN8vAE3sxeYqS",
  "key16": "TkB6JU4ReDdPyTpvXa4G8fzpCwu4km12FQV4rRHg13BLf2tVb3F643MPN8hJBrYaSXLsaLEyg95Tuqh4gpfNcqu",
  "key17": "4pKbAhQshrkD8q1jyPvwuyskcVsBCRbXbMu9yFFso1LYeBGAoGZpDyCu8Bu5RwbdLdDPWbGQyVjRBYiUENYEr3bR",
  "key18": "4XT4S8noYXeb5Y5TnG9fqyh1uL3wWR88cSCVdbpFpTSMepAKXJkGmTbQ8CT7KcSXxcYfK6AprAGJ4uHraVpKXoGr",
  "key19": "48ckjLyJx4CSthCPaLSMczBZCibVe8cR4jASr2uhE2VQqPs2KotGGU4t7wKCRjuqQhVMdJSQgL4BrYJtKGVYH4Ux",
  "key20": "UKHYCkz9PnWdBBZot6ics1UFJ2caQq8zRpMFZ1ndnWCrgx7QbDYMYRDnwKoSdKD55K2PU2cuSLgYSGGStange9E",
  "key21": "EmVimB4p16mizDWoYgCHmJvMuKUmcVBPLSjf7LCCCa9HqBUKx739kTnfNQfsaZXH5jYGmW3o7nAtfssSHmkMY4f",
  "key22": "5ue1o2rqs32Trvhfz4t3kZyGyQgW4JLwU2JUWKXjTB18P57wQRNUf71Znp2eDVAg2eMa1GTZMp2jLDsci12Q2WYi",
  "key23": "4dviotT6tn4KFg21XiAx2HmgmFryhdP2qzRQYeH4XMsZm3WQ7vZdtWczvnmwsfUjez5XCZK5VEZFdiWHzUrkUnjf",
  "key24": "2jwNbDxA3hb78U9bxy2biTFZG6pLQV36zKveaS1aGR3YzfaxygmWMvsSaCTftqvc38m2Er1XVmLbBhUvgRzoBKDe",
  "key25": "5yBiYHiMUKZRvDTTnhZoAGrnqJxBaGKXMysHyY4pw9tSNdA7s3EDe4oUmpfVAWAfa6zsf7CXJS4LKjXCU387CurJ",
  "key26": "2hBkYV2TJ9bfXfuZxjA3veSwBVZz8N4VX3fSoCM14iV2hkpYrLMcXd2rcSJwojzeYptB3QUZUsAnKLBZTtvSaEF8",
  "key27": "3ZFoXXeGBpC9J7enr6bz1kHNGXN4ooZYjr9NWirnHmdywBwAzHc24UMZV3ngdL6aq4irm5dWysoBJk33Tca7ahni",
  "key28": "45HWmaF2mUcY38r6rJSkdHGcsMfdyMjAjgSac3x8ira7HWBBG9AiZFDPFx9b1pHH5aU483RmYjM3iQ8vzZQ5d3NF",
  "key29": "5Hx6CEg2EJETPb78Eeea9fxs9mhXh2N8GLpp2swcXkGU5vLx5Fhk6iYp1nEgQ937nxfiJ6WAysQ6VV6reRAxZAqA",
  "key30": "243mXeS87wVxUyQmYPFDwaVqvvdbn4BPiTvWmcZzP1sRe7AE1eZp6jiJf2xH9DDz83v7R4Kn3DhK9JLvPCs3WBvm",
  "key31": "5FgHMX9Tcx2foKSsMqpFKNMXhKxZaAMypaacgj6r3FDuasPT3sQw8oF28kpDDyPsQMzGmBPwiZtK1t4rABnxLUWt",
  "key32": "2jaEPMNLWjGHdRcyRYYPFxHCKrisdZA7VkZAi667VFe7pxFxiRRVFueuY1iyYABRoREGsryDBiVvVck6Tr4e4mQk",
  "key33": "4NS9EDoLpvS3LcrKMR7VkBomfBuftMtJZcuyycvM4AhoPTYYDuee4i2zBKRsPJ7Vwnww6KYs6ztrcXmCdwmMD2y",
  "key34": "3r8wZ4QWZncekX3Pkmugydm9Z1ySAMV5m5g4bbe5SKXCHzewRyntbKjHCNv4H3QgeGABnQ9gVEHcTWdc7RagMjiT",
  "key35": "66SPqhW45ypHZmRK4HZEuyqSYy2SDkibvthMLp8ewTA9uRnqpVr9avYo2qk8MatEJNakQ366sgN2zXQysmUeGko2",
  "key36": "81HNSapPknWkoGhXHnxfJewqKD4SzCXkrqqMzZS9GWmZXFLQ3u4gacFkPkFb5DyZkRmx9iu8XMskvxh8chcqAb1",
  "key37": "4Vu7boQcFVLcBfGE2Q6fPeMm8EVGkfoRdLrmVhVnrSxSQ4UPLgqBdscw7kysswxPdjEqj3SraNg3sH4CNY4JU5VQ",
  "key38": "2YsgedADoo9KcrKsDdA4Q95urKXhz2pQwokX9ZfRf7xBLKs9oR81pJXFpQTAAeCcsJrtYQC9z55C6PttKUrqFurA",
  "key39": "4iUduQK5LhDyBSNR1zSZLE41bNUw9ok484AHBkAmXWgmaAer3cYSquGVbCBwLgiMbtzXbf12PsipcGTrqe6TueSH",
  "key40": "3G46BHfQBLQcjKDFyvm9mnk9LK1V8Heb6RsRRFKztAbyiABnqaVeTba4ebwcevAnxGwCqp62tsyKw6WNb2riU119",
  "key41": "2Gju2kR9T9oNzgz917MKNWTxckiMfnzbBFCEV5zRFeevih3g8f9KEbkjtC1uWTkaUfADCtbSuyQvFWMNAATEz1tt",
  "key42": "3QoygvLRXVa2EXJzrTws3KkBY1JuiZDa6b87cqAVra3NKxdnnoquU5uHgY71GDA7yin9PNdEy73iEqUL3vhVPfBP",
  "key43": "4oJomJPwm8Lb7Rn4ovCRZ4H3YzcbeA7Bb7URmCbUzPVwt5patzYkWdo2gcFH8AHYatvMFzRFe87u4cfgYgZiLLPt",
  "key44": "5c1MfNKo2nQ7UcExBitCYg9Xec7uD1n5PtEh33ZzuM541Tqveor2JcLqMECgpNEFwHLQFpX9MEBri1yYhQ4GnS9p",
  "key45": "4gfawsiy2ki2ku2qJPQGiX5PgTtPn9FniUvvoyMNvmMpGeRVuhK8HypCXJzS1XY8k7bzv6yftr2hY1Qi5xEQ4RXR",
  "key46": "5KpqC79G8gz1wQFWb7VYoZpxDCrdFdWAMXw9ZXjhM4rSrXtYTsEJSbZf3Sir2KqbK1957KEWMsk65jtdGaRv6toJ",
  "key47": "keet8F1p1w8UQaZMuxiWYSx9Ynx68c2GRkZrTmkPKtRC7VqQAwqwn5PP5i1CDvByERmXvTQ1sZbhPamyruxuhkR"
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
