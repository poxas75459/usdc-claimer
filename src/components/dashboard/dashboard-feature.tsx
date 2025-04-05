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
    "49Bbta9ku781QMPGqDSkQY5xg2ZjD2yDfzuCKP5c8xRA2o473eVAqkTVZJqKudoB4Zpg4WoSGwaLhNzimavhexjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gz95sz8YUcx4j8bQ1sbvdn7ynczRBWJcSJMWJGeg9nTQ2ES8nv6ggmppp2KeRu8HFurrZ8naHboMjaf2aBWJYKp",
  "key1": "4hpKBqUhW2fVn4fUdJLCzVNxacSM3CYLtKFyaRymufttJXHHEAgdhdUfDtaxnWkBDUCkwNzwCXZx2smtVsWKW7T1",
  "key2": "3NrQ4eM7Y8GBu3MovrpdHhSSoJbkit5uxVnRcekM4nE2scYgcwD1Ea31QA2f7KYUgLULboxz2S5iRnHUS5kLfUMx",
  "key3": "4yunZG6VEr4NiVnRrhbnEhmAN7MwfE21x6qLT6Wezsm9qrnP2dEQbqPkGTNNRGimevg23dEA1c3E5xXQton4jvjT",
  "key4": "2um5UtA6rtnSAAbdGBjhEqRNvSW117zaZugDxfqmMw5U2bBP1a6dq6J8F2w4XemybpGTnEH5ojw5CaKQc5EnCNvG",
  "key5": "4SvLpQuBYah1gopQ7twVwnUgxnWCdwKuefkYxEkdhJ5F8uUGJoCwVMx6tQvUjirEXAE8M14mgtVppW6p3BYNedvD",
  "key6": "2kTFGs5bqvTdD9sTqDHLHJ6vFror4qU17e1upkag4JKmUBPp2YEzo8teUUvs1yoWcF8ioyPF4WJp1qRMaksJeKXS",
  "key7": "ggE7NGosDPBpUSLpe9cMQiATH1vifnYqGNXmL9ZyjiUbCV7FWgvMFhBcJaPaA2fajTjEXy2j2dccwBRhmTUzugd",
  "key8": "5NjQN3ZQgbCa3pYtaAVsz5sS2rTd2XEnzqrvbmfkRQjBrfWAKC2V8eFc1jT1zf7oShMNBbaqY6ZDbn1yv4WL2ZMb",
  "key9": "8QYaQ9MN1fimCVvS31pHyroTWtksoHBdXbPLqsT19vu9n71vpC4u8Yfid4dZoFS3Am3XWn7bNdXmU7548mSoSLa",
  "key10": "3njz7GmZr2TjAPC9cBtJ9VppxMmNxEs4JYQbCu8acufJJCCksf7BaQCqh6VtH6rv6XBxajphYdN8tGCBuGu3EQ5a",
  "key11": "Cvb9jttDDe52TtbF6NKz3g62NaYgMTAa9wzkJLWazfZDCNJQeZSruUrdcrazAXkhaGaqGuMCGwYFFmEpjEkpwgp",
  "key12": "5V9Mn9Gz4PzWCpxrw79FEmoojUxS4LAg1Hgi9rgtf8K8chud4MWGrQmsB269xgGE47pdtPKreps2s6EVNXERVLZc",
  "key13": "2Gns73THCiZNFpkQvrWDZakkSTpJZh8Yw386SbKCHSfyZdZYaK1immpQNMXcu4tHUhGrRZzzEYFsxnfZDghP2BEE",
  "key14": "9zEksfRBo7Q3AY3S4YNJU4Pewop6Nn5fqsUVTsuP6wDmE7rnFcDa5qEuQezPEMmzctFkKpnJnDUshz67jx7gN5k",
  "key15": "2Kyd5pQGBMQibJHH5HGYsvJHWVj3tYfS2xVsxbMewSh7rqJXFXERUFdbCjZ5RUZrAeQypD6eWQBDZCemwFJ7R355",
  "key16": "3uqpnB1TZSBJQuzFajSHUGdFp6Ddnsnzat4Gakpc7Wig8k1DCZqPpaQZmRote1vRnegBfzVWQUdQPnUJjZ17BmSo",
  "key17": "2FPHD8h4i9cyv4jaBmZf8tygKP4cJYDDykt7hmxcX8r4AmVth94MfSax3Ns7TxQbyxh5u54hv4n3zWKmbfdmob9V",
  "key18": "4QuifSm6pWyuFSV4CNiDnBbshyPD4aQopme5zk993ktVxbXHBbd8ck7QWnMiyRCoKNiJddfCcPFfFQbUXzHEp6PS",
  "key19": "LYijZSFSxw9rYs2VdgLqzB1L9x7NuPmJVzMf2DtjR9y2RX2ao33WU5CcLRNaCb7xb15j1cLfS5c3xaWbtBq4mWd",
  "key20": "58yNYDoDBiznyXXNBrANkkmfzDefK98ntzLnF9sNkzDepygtEVra3dWhADSdcrRWsoyzTD7MpN2gRhLFiBAyC5ed",
  "key21": "3h47UngkQdFvzV2V6ckBCYuec2ptqamWPM7mmr7hKLbpqFVJj3XT9CGT5wsiJoedmbVWXKohCcHuMVsNZYWXZ5Fu",
  "key22": "2rWUfrfoExShxPuoczzLwSAwS1TuEJncsLG8i6eDcRtewUu68UxFWDGsaFpMGJP7MuWfADzvyFDoPpM4Ur5zXtnx",
  "key23": "4AJ46XrA7ZrLFfo46h9fAoLtGMp8rRRk1a9hNVk8BXn2rkn9AsPGMfTueyjMF5qP4TebTkrVuGN9bPZ8BGrjomcm",
  "key24": "2GBQmQ51RPo4GCY1rii2aB4N4Q1cg8M45YnbnK5CbJkmjqr28JecJJj9SH6pQs98mTJV3qKhy8En4Pwa9aH565jq",
  "key25": "3yH5K9ZPiZfXpR2tAZygTKZaFojWXgGsU5hoeshCEGgFzaauXbEN7DQHF3JqmGbqfQWKqwG9UoDGsGAnGLuMYwQs"
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
