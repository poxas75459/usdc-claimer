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
    "5oygJZPJuqzajiBPSQuazUeaw9dDuATP6rtfSFAS3JjgbAtqEGUmYGFuouLZ5b6gJhi2pUXLa1XfFgDt2EdMDPYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eiT6c8cPBSDzSQjxcdXTLCxvHnj7yH3wSLGennM2UAFwf3vYvz9c9oEJL5Vj1FHC4AXDAMpFRPkzrjnTUoezaes",
  "key1": "VNgtLP8H4EdNXUTYM6YmRvxxf4BKqLwUGoYeL7Ny1GxTcJuPTy9HSnHjbKYyE1r53B2vgn7iKdWHdP1aYbyFgFb",
  "key2": "25pHLEzUzi1aC77oayz8M9VtqtAHcH5sT6ELqyg832Am41ASSf3NH7MJ4u5oNVgzyQfnYx1ckM9mnUxR6AU881rF",
  "key3": "5zuA9BkFc8p4CpgqBhGyHdgabYWotTp3HwD5SYLg248ikXptChu8yW8cYXzJCLcqoPkGsyyML3dW3etDbitgzJhZ",
  "key4": "z9yk5EaW4NpZ7T7zmdHnrY1F8mBYQLvHPwN2Hbg16Jo5a7yq7rLpCPM3gTPETvRNH7rEiTNnWizwFLF91nnd1MF",
  "key5": "Ef3a6A6xLYFLmschdqukAUf1xW8TEuVLqGnW7RBUsh9V64kEZ9SF6d5NAUKjGpHbRG8GEyB5FiXW78gEwxWEjVK",
  "key6": "4evHEGxJgE95SzudKUnVejn35wjcUMCXRUxMRFBJt4Fk792nKLToSMkMGKhQU83mFAeYiTUCxhq49xevaokdMgxZ",
  "key7": "f1j3XNPZkDViJ8BRiPgr46LC9GdoQjAoZj6d2EfEqy4iVs9YWU931fdurHoyen1VSK7oCvbGELjTXMK754XQsbD",
  "key8": "4xvjDoghy6xgCYG64ocs53m1vCkQTQxUgsGB1W6Lb9ps9amp21xLe9angLuKfwdFpL2AwAw8puyNeWjbhW8krmgt",
  "key9": "5twmnjV43BsHRQY93e6caVhtMFVYPTh1zRFm6JyHtekSUy9mi14WYprn59YCQDSGxCfTxJ3z3F3BU14kaUeUAbE3",
  "key10": "4X4vDdVuZoTcZ6sSQLMRhMPjJtsBJ5zy3u6Gm9bBJbVEf6gFF2SzkXqr42Dr4nfLX2HAv295LFXoeTGopko7AyU9",
  "key11": "2pjQzRexVvnyk94J7wKxuWpgHXw43Y38u1Er2jQVybFucyVpRUh3KMdwaS1MeQzMZTiQxjGdbkzYvCe3mvo556cf",
  "key12": "2UxkvbkE6mJkuEuzeM9P1HUdYFUEeGvGHr3ogDcRh85HnXoHiRJdv1Mggp4tY2Gm44ZtTgXWmszJ2JeWjczCHSxj",
  "key13": "668j9F4xdJcQxoYifTwiSfRwFZeU3KdiBt5BLDfCTfCYUyuAKZ6x5QyPhReim6DybAojWttrSPx23HVojC3hr9Xf",
  "key14": "5TVwSpLqLSrZoH4irknDaD7mpY7y9eFbLWgC2xQgsnZSGEbbahmnAsnXyVBogyrJ198HmH1CiwH8oX8VmByqT8oa",
  "key15": "32eH35XNLjpEG4DHFHH6D5EQgPpf32PJxUdGdGoCnQfh39aaZ6AsG8xAyNBXYKyZo6KEeT9NbcM8xLvDKFbbsxy7",
  "key16": "3H6vpRRYtGMtRMBsSvERzxcvg8fLA3BULtfb14rNKrEPS1qzL5rmihPR5HHf9P9KagUuygLRppVu6a63vYKaUNZ7",
  "key17": "2UtQzU62FPpPjBynYBtMg8MKDyGGXcN946QFjc5dGvxE1oL5e8n8reuBzokTuJcKw7GC3uTYtBN7vyVbesinrh9T",
  "key18": "5mjmAV4VZ9razNpFE4cb12pAm4PxVfRqbKkvx3HEMsNQi5hHe2iGenHQJ9nutGoDF8LwpoVwJvdCE2MkxBTqG8mJ",
  "key19": "4GZL7jFb4PeVsBRxycjpvoPT9q6syZHFs8HUk2pjgsPhNB7QPU4gwKvgnNbs22m7dKG3r815NMLxcRM2dWJZaRn8",
  "key20": "PuvTaAS4xLzBFeUt2aaYse2DLkB6wbJ9BmBpxQhmSwWRe9DyuY5u4D3SHchCAkR314sjVbU4EdPAFq9ZaqdJFfB",
  "key21": "2sGWyf3mve6uyZCCgFXR3vSCQA2dKtm4iiTgtHK3LodWJZExd7xt1XqvwVXhs4aKoML6Up5SBDwS4NuXQo2ZEiwo",
  "key22": "3PTsgzHki6NKidm7zDcR4WsgfUX9DTQrjphnrKQV5VRg7yygt7PD9VtzKLC3WyzzAC8A9TwHQiiWMWT8fuJ1e24e",
  "key23": "37duWDBEAHV54V1RLu7sE9BxNMTcVP7MJ8ky4SxD1d1qkgsfi4G4kY36uUbS3nBBHYwq54en52t1FpPHdQE1RsoN",
  "key24": "uZFB6vY48VrEf5yu5XrAs47xcFioZoCBrLEzQTZfEen4HXciz6APD19qVPDcKMqtAsMhwb31s29mbFoLiobxLAo",
  "key25": "vPn3oiBa4F8tQmzqu5Xqa4LFzivwVoKqR4CBVo4hT1mZPrvZx9FUzsc2yJytMxWMCA6xSQzBvKzEWK9kC1JuWRp",
  "key26": "4wK97aq2sP6rLpbvGLY14xGThCBja4jW5XEMm9stMZkHbMTni9BUTykRVSGGeRTFxgrKcp3QMHZLpafHRjjbsPWM",
  "key27": "5vZjFDXrg2MHGgbFdX6YAuBNZVMiHk87j59bf9Chaif4iAa2pv4zEgfFiDLqQdfkjSeFMq2mmNPgSp2Dgn3Zgq4",
  "key28": "5t2xcPuEqGCGVFLXt7WMFr22RW234zPDrxLXdg6rhnsrY1zarohGgSVfFXR8TgFm8AR7zmX1zGw65iWxMLwphNEv",
  "key29": "4tMFoK5BQpiAHyGSXBNrHMukhmbdjWyBBQf6QJcPWrFGCUDP1HpiHvR3eVhLAgM9ABX2wJZsA2fHrnMXKYreUJEB",
  "key30": "2SWFR8fVPYTPGMh9S3j7NByfpqS2L1kA8RX3zhHqLJcaFKSXkhHSejfDuafnEXSJPDSwRzHcDhP9zz5cr4WKWMDY",
  "key31": "qU7TorPW54Zj5E9h3ovPTHL2v6QgymNRwQRs8ajPXBkg4xet8ftxo8pp6XZEx7NADG9nMnoEDJkdxLMmzLzC3NF",
  "key32": "3FnetfPTj8zvcxftBoEyXsWYKLZDHELc2T3z5NtxFH5werxyWR5C7UrL92LrP7gt6WcbDUadMiQfmcG8ySfMNHdf",
  "key33": "8LLZhqDQuS52aKiyYRiG5KimxekePzAF1PaMMDp9M3YpzGk2dMr6rhFFFa8KSuQ8sVRR8iCWtkga1v573SuEDPn",
  "key34": "3YsC5bMU1WywXSWKBq8HaNk1MZvMyoCfjmUsWaoqcq1kdg1phNkLe3T2DV3bQoX5tM7UuzSmrSNooL21TBxW3gFs",
  "key35": "mD7yFejoB2ooZtFrhaHwBWmueC45XrbDnaPKLaeoirPdGnXQkZNzEHBUnUAEwsLCUWkC28ZM71bxnDH5F6wDotd",
  "key36": "4taZDZ1XJRUjcKfNtRvyuuu3wJfVeKzPEB7vMeDhX8qwbFCq5QXGHVJN5xGhUuihsxvDDVTsGiqoWpRCQs1tu4f4",
  "key37": "bWKdsEVKaZbsEL2pWKGTQZ5moTjw9DPKpjBkxwLfavH6Lvg8zfbi5YdBZzbyQQ92Vqe6555mXX5vSWDBvvbM3cV"
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
