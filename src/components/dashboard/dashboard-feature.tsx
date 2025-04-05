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
    "4BrZ5GPgkQzRaTTFFaEcBS1BHT47YSd98JRDVj3ZY39spioXENmasDq6fqP1VTRfGtucR6pJhBVRFxNj5mMUZ9H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cS7jmbAFvxBP2ACQs55Xjvtd1VaiFfyX2c4dxPxMsxbtRixSuPPGWWuKY6j6Z3gQLRFpVHDc5AXWWYHHdn7a96j",
  "key1": "f4N3J4xCxipRyyLL5QGdbAzCp1hL22dToABX171RptJk9hnsNLPJHehekeAz3aZizR5zJMpYPzBz6taUhZzEvx9",
  "key2": "4JxJTGWQzcLXR7W7LxHtJSgAMmtuXCsmQXi16LBPedQdSZVwpHregTD3aqm3e4qFwsreLMNVWesuLw77YwQfkzvn",
  "key3": "Lvw4mbB5kc3XWRhKDbJpMng6znweQcRNotrpgSuKxurwxGBJ21Ax7B8ezAugJMkViQ46LMwALLKcxJrvnZBtpym",
  "key4": "4uUHFEVrudGztKfnKMkGKSEFxayr9rZwygFZhzGTasZaYh4bJgZh65TCwwY7BvXeVyZ1ZpGiL1azAcM65y2ykBYH",
  "key5": "vgFzfU7nrTB8oAdhbtqAc1EJU84K4QKSQRUrPGnzDi6HAusbZ4TRXe6Z5WMfoPAHb21NhZRiwDXdg7ZQfbr6yX9",
  "key6": "xnaVn6MYmWmNEedX5vXZZPFsbyofGq5xyPnyzCCzpfeJQM58yJNknMrtySUGABJgrpSQdJXSjxA7JGETV6oe5r6",
  "key7": "2T3BecJLvMHeqrigrK6orWT3HfDPm9newb6FPghqkfYfGL7BUcMeKoKE2XH9zJBwNg51Ke2wQh61WfzLWWx4mygK",
  "key8": "26bHnrxQu5F4ZRZytwLF2toAj3Se1wjLu8XF6vUCFiu82cm1uf1GtmxjXk696JY4sZbnMYYNtM7QMDkZDuAVdK3b",
  "key9": "2eJrJcG841bigenANnKud4TB2LNpNYZc7QpKvTPJ64kmNeRyZQF3fNmDtNFB9NpqFxakKH38hbP6iXXdau2a9Nmd",
  "key10": "5E3kWonEd94FuoZFgdBfqmPcXXJLUHkh17VwueUrquscjKiXFDEonSQ87Qx8q4NY6nKwoNmSDLfvJaZBhMbhzLvY",
  "key11": "3KphuqpEabqdqisgbrDiqGihEJ6TYgkRauSgatpjXTy83NrEkyqarBqgAFc5cofzo78GV8Tqzgn64SLgc7nMBqSJ",
  "key12": "2SKKnUH5M6TgpCvpC1QxC5Q2Dj3GEaW9oPx44Chp9GFfDzuNw5PawgVi8DEWCH2paXwi2qAEkP4VgAeTJefpQGKS",
  "key13": "4YTZfSu7TD1Y1jcMTQd5hkZVb6fCzUGnGwbyW5A2kNrcVJ16r4PVZUcZ1WZtYLhpTHZRqSxEa48e8P5jiSqmM8mn",
  "key14": "n2Jegki9Wm8XLELY3CJX1uJGcyPBMsB2X4uyeCxW5exbYL4xyJZTzNWoeoVYhFRH6cQEUq6JzKy1mhoAQqjKhE8",
  "key15": "34dEquqqNXKVzw6VDamdx8mMkqDroHAG1Jw2UUqtFZEhsynHgYHaE1jL6ukuojJFhU8KdZAKtvD4TFLQEH18KoWz",
  "key16": "e2oxv6bPRjBkoq5iTBJw7UHMphSH8WCAzqCxPEEBaBGWqoGmeY6yVDyYyXDQhafonHQfn5mt5KdtY5B6K5G1zyy",
  "key17": "5PS2c7he8cdzQjdvCQd9uEUFTZdD5iSPSsabhpx59ZX7qL4WaVL8x48obF4teDzD9JimwoU2hidvk7rb9fSKVo19",
  "key18": "Bd7f6jtwnbb8BPUfYRhfeobSmKGAvxsEjqJPHR7MBrLj3dEbbZia2QAgUb8YyZbw1DdqYji3t2gGD9owHbdvLzo",
  "key19": "qQJL2yErbfzd6Xo44vqDNc489PuMmPpZQw69Sja1ix8twqMBGcrDPgxEdacAGxmzJVmv5AxeYBFGF2YT7FkwyM5",
  "key20": "VFmiZ3rRFQYivn6Nw8FUJUnrdezrGZdF4aDscTc7xNXLAyrqBqaEpSHE9wgVxW3QmdV3Wn6D2k9j9nzw2to8dgw",
  "key21": "5wRWm2vLYwCxAeEn4o5q6Y2qdPMPAao5Sgy5RDedAwnBZ8HnrPrG85NuYkAdWxJNaZTxhWH5yQq1hYsakBvJrY42",
  "key22": "4S2SV1gY8Wv58hRXsHnhFF34mnDBEcjGpY3bWxfu9goFfFLgWQNLj5r7NwxfrHC5y2qxoqxrYfp761TGc2XbpBkr",
  "key23": "cxPTYthgC9u8qkWZs9bryoKbAYu9tiVgepKjmkGa7bYdutEYuLVVJawBQoFQ5tLe9BuHK1MWpsvJm52bSBc48dY",
  "key24": "3v17DmAySuGGCae1XKLDLyThRmXqnABA7tgoq1JvUtu6NCJt1Cujc897PyPtvjEkvz5w4CUWUHyVXAgwsNGwzE2N",
  "key25": "5zg52j73nM8gdv3toyA2ehLieKSYLdW3v3g1feis3GEXK8D84ggKy8QuAju8Ke4jXvU39mLYM2geaXz151THgQJN",
  "key26": "3B2UBS3G8Sq8b4uXm2ycGVYmoLgyvB5GGDqpLnYXEKZMTjDMb9SkwuJ7ovsYbRttLSmVxYLhLV8fnjbGnYFpapEt",
  "key27": "3KEg8c7fegxNEE8YgcV9AMnd6z9AUdc6sY9xnzeKtQSmMjHMuBaLQzafpYNvejR4Fz4uXPDCysjyGuvqqy7RZ16o",
  "key28": "2SbRDXS84qDBu9dEEVdvwoto9SRddB3ST9SyC2RhoHhuaXEkEw3mgVQQ7yFkgfaSd7vg3h8WsUbHXpyMZHwSRYpm",
  "key29": "g64SAPVRNUvdjGknCjKMDLN1B4mpaSNyS2J2hEu4jSRmPcNzHRXnDYPVbomhVK4VRHNE4mfw7rBvvrKmtsxySXx",
  "key30": "5UqAKLo79GJGqRsUFBH9XA5mGAbhSRShYKTVdgFZhX2fnxNjK3rAs4sfWHaAskmiTT9581dSbjxdVd8LhztGGTCf",
  "key31": "5wdTTLMu4UC3gVGCxmT2u9XA7AD29V1wReK9Ght3f1qQdih1uqWL4NmKmMDrWeYRi6xyfg97GSbCf1naGvHmjquo",
  "key32": "5Z754QY4ASfx8LfeDVESF6kLPuHL3ggmAqxKzkeU629VVZsbE8HXMUYbxNZLYhHc8VQwLKuxNBokTaCB4ijjToWV"
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
