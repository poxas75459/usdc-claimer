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
    "X9q4rtR59UxjmdQDSbpV9kUbDkxoWLQ6FhKKXgWtsiUhP2wb599BdVrRj9EVCwGvXRCEvYTSmaYBPCCX3Jw4qEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ccpqS9hxVtK4KeyY4qWFBpcrj3jMnZk1n57EA5qavWYPVyNekDuApbUs2oAeeaSCHZyNH8SgxqF7m4xRQWhdne",
  "key1": "46pstLNDe4e3rCiyUfr5omQ6ZHzUoNE4ta63PUPrQH4tGCLbcvQ9LVL5zKTqRTd9dHtTerpfMGdNcQQp3TG8HtwA",
  "key2": "4mHzK4dG9pE7s2Jd2qVVaEh9xBbUkEXdnUXao9VkLgfoK8knVK3czRJijCdPZs5Mm8PAcMBiFdzSx4VpMeRWmK1z",
  "key3": "pJp6sWABrCVtvKZRQYqA2gsnKQDKTwA5fPzgmib7Dv4uhWKG2stytrs7FEiTXBaex7ENKknwu6tWMBBJk4jQdpz",
  "key4": "4BzXzVCZ1rA74e3uWa8gwLzPLCSGk5pvNyJ8HymdFRbg2QgnFWcZWnEeFfaq5L3WYRCrYDexXEQ7SvP3YJhoXPee",
  "key5": "2ppwvCDYu5TvwDwjsHYPpCURjht11r7zHHm5echifZa5b9hs4798wmp63LuE3k5PzTfswUXa4ZMSaUKNYGyZgTqA",
  "key6": "5Za1o1StKPfZdUsdmNE8kZZo8nygdA8PXdnfJTjpMLQFR9b2BU2F3uE7zYg12mNSHmZkChHYWkDqu7cqLVDeP372",
  "key7": "7pxLXPYfHupPmKHxpTVfe2K5oS74LknsmuJ63MAwKvnv4BukaYc8RWHakHPGJLbjZXTD8e5qRePhQcZDnWW4k73",
  "key8": "376rWqdbZbuxhQf8TtkJPSz8v4sMjckgyKJjNPvSWYVALX9N9Uz9zkVCPdfS9cfsdQbbCZvf1CpojZ7PWxkk99eR",
  "key9": "4Ji5fch5n5pUH6B9FZgE9YxbzRJqKk4oGqzDdhGLgrvQYuvPyRXjq5yRQ2yE7FQBZj5Ax7fzZ49b6U9M9Vt7bSyV",
  "key10": "4qcWvG5awttniZExbmXR2RuLuE1eQbCT2ZSWBiUyxKxAuniVYXyuxQoYchSuWBq2WX4hdAMrqyVX6CJ8bLtAqdV1",
  "key11": "2KbmTVCGkJridcoEHntwYni8VS64LUZcTYBWvXe55Tto2qxmhDhPZ3ZZBiBwLajAEDCGdncqe4yaqPbR3GWL7Uw9",
  "key12": "32ASzbXA8GGwJ4TM26fCHCfQ1xVrKqxiqAjC5eLQJ8iZ2QVyMhF9TimnS4MSjpMhpd9Sofg9wTQuoY2RwrgT2LGJ",
  "key13": "4eh35uSgyYjvz6fPFRtExnW8UctVGypLYHSngg8n1Mv2gfv86ucxXhyVX652KadpXcyETaYe8Afx1v2a4nYKZ1r7",
  "key14": "2SoiUJ3qwuqR16YYNW1weVypWNWnsiCKeAtMfxcTvnfTcvW7Rv25fe3eLkr3gQPw2QjCruAar7uJA37xDQxGkm7Y",
  "key15": "3SB2DhaLfUVKBnYFkyXEyoFXYK42WDmcsjhapCp9RQqrKJU7ERJ4WC2n5EtP3Wnb2QThy5QBTeTAWV43n3sy1bwh",
  "key16": "4DBC6thGqPbqoPpuL7GKFiRiC4xovojqD76Rt9FpRTY3N3giVaHJmZrcHs6nUo3LkQGWFYFxiXB25yAsLhCaj3Tt",
  "key17": "vnPLhZuAEGF2SDwDAjKvfL2FEKWUrbunrRG4ypet4U6kG8QQ11DYzhTXS1crpUoGtujzfbYjRSrWDikgXeqgtpU",
  "key18": "hWSNhLK4E8wA9NLFACJqiJ7wsifkF9fVwpdeJPJhbik9ygSf6zFBCz4wqMqRmSPyigpsjZP13Z5xkkSqjtdQh9Y",
  "key19": "2iD86zbAggeCosPunnDj2RDiT1FAhqDH3bkqCrr1jDYNiYS1BcgFNj88sgnQ3ebncp4iXhAT8dY48murm8Gtu9U",
  "key20": "2WHHZSfTFHy22qruevaYZUJZtoBVyDwCSuBScubFwhkJ2R3SoPUEpMzibnKHHxT1rG8X5S787nqMENa8j3meur8h",
  "key21": "2VqJYpHs72AZUki19Y7B5dbCS3CiXcGdL2jBTyBmQ8yRaHMurv5ieNFpYrmfAdCpxY3fiDU82W2hVsT2uQeRwNAh",
  "key22": "2YHvosBaieBbUrPfG5mzS8eR6rurp5aS1cweqbxWqiY3GE8GErCaqidMPpTZW8dhk8mDXxKRKct61TN4XVSBh13Z",
  "key23": "3p1W4k9As6iJNs13QQKjwmnQsH3YpJXdPL2v7tPrXv5dLnPwQ9f9GzcieJdwK9MywX2zMoQbvbe8SBs5vLLJaZbF",
  "key24": "3zdsgt7V9kL6kJbufT9TKN4hitAymGZYhS1j3rT7eBFbw8cQSA4GWxA8X8v131gbEQCMCn78DSCn1apJouHeBmmH",
  "key25": "471ZAq4yqsCf7AFFTxmzrP9zuTewWm63zuPM6FnxBEK3ninfm5NP49kP8XE8M7keP38vj54gWcWGsq7sXE8NJeXD",
  "key26": "3WDMjXXqUhFh7jdqi4kAUpzDcSU8hMD6YBEwPEEMyq69mVUHFr4qrRnywXaPyY6AtUykP8Fsr9TdrLgSZmGrJvs8",
  "key27": "5P5YdStm54BKksVW4NWYjuPDAYB85nNPWDXo2dTXpcy979gGKXrk1ktNEPvT3Vrtn6KXjUcDrAsXWv2hfi6pzQ6F",
  "key28": "4tVLWjyaiWGv4tmpcdzjNgr6f9GEt6VhYcZA9TuWxBMCXoZLHZr66aK5caUTp1KdsmkoeCLFUE9G7bFyyoVAJwQT",
  "key29": "4Kt4Gcm8UUiGDnBi41uQsSX1FJDjALhpZrmFDhkszwu2s1BY1rwU3oejCGPwmzEngy86d16wSMiHaEYK6kDrQKZN",
  "key30": "5yC3DnucqJkQ3Up2wMDpoWLGQc2FVL66Xe8sxyGbKenqtUQDeJf7U5hQFYfvnmecpvWxPZwqRoA5kgW3wtqtsini",
  "key31": "eZQDiGMUxT3TxGQZTF7mVCMF93RvvMM2VFSxvmaYJciA1pwGTK251eo2EzsLzwLaKaFF3hJDnSuPzTNeBczKYUV",
  "key32": "4zLpJz1VCwFwPJHt3V5p3h8uktxyws4oeiHChcwLM22Fcbht9qM4pL89bbFxLqDu8hE1MoQ4vrAVgfhQeg2BNoPr"
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
