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
    "4eKAa9Tn3fCaUAM86Hwz4akCdG1Tm3aayYeB9RuSDkPL4mb9Hv4e4PJx5e9xBQo6PjXAY1CDTDz852b14dH1XDzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpBPedPxLUSsYrdWLbUymZDcf6fnoEkpvZeK3n5DuFx58EEhVePCEUbGpAHTfoaJnJ7h7XMz3mJcEWfbX6SPVdc",
  "key1": "34mtr948Ch38HHrYA6Ek6votDMaDQpADcRWyfyRc2SfDM8Lhjh3EDDg8oZQBcZmtyDPmAy6BpYf5sKm6q4pKsBMh",
  "key2": "3BzRpgh1vMxBp92i3LwSV4av1j6KXhjCDHpHuZbpnLjWZkAyftApq4gG9hyTqG9UTuBYDgas7c8EXHiGyHHF1EnV",
  "key3": "4Q8tSFDyj47irYe3bdgo29ConkH2Sv76Ce6g5Svtdsz4xkYjDEY6vqG9HdvAkg1qc7gtsZUWoYs9y33EckAJ1tYg",
  "key4": "5euh7jfbd7iff9saU7ZA93scGqSWfQTBGhNrjyEEqm1p8C43GbEbhfXaDk4rR43TqrSksHvLZ5XNkMx2PAXy6fuL",
  "key5": "FGxQGmJbm9MnWWNW96gtvxs1j2QpDp7SpRwCibuN17B95d8NQQ8ywcY4gQLW6wRhcN4u5CXmCBMytjcahXuVBKj",
  "key6": "3QAZJKfybEfBx2PSHoUQgJyGuj3FvzmjbyfMsAUWU2h79Bw4dXNPx8KJ6WGPx5cbySx2xQjjFtsQy3MrBkx9XxM6",
  "key7": "3PmmgvhSTZEvhr1zcQXtL3QRXCqyFvXuGLGwxcMhVYtBZtFGTdGh5ZLaWSmnZfZtvqDhaujK7DhN6cdh9hnw98Q5",
  "key8": "5gCECLo4VXce22qT3qsokrqPAtbQeYz2uDJAoWPWeBFKDxmJVGG3e6Wv1iAU636BmgyDdBvj64dxSSzYzsA4NohJ",
  "key9": "3D3FL9dgynZJyPDpALoFzn7HMHqpzAacgcEYDAiwV4DLwLH4ZXT6HYkgoXE5AdwripTauwZ1jBkyLytMU7suarBh",
  "key10": "5nQ7qmgsADMUFe17pRDGN5x79hJJqcq1joPgaXipYzJX1VkfVGTuS3tXo3Qj11JoFocUub1H6pncqEbPL5hPRaVw",
  "key11": "4RTfjs9rtH2JjHYv5cc4JPEV9HraSZ26SBNryUpCovMfi2eNgocfiARfk6D8xu8D1dMRCaYcGimqQTTSguwfHAbs",
  "key12": "hK8A8vuVgBr75RgfY4nYxnVfyTXgcw1pRS8WeLeP2eXLJG2ygTnfNq5Yg8UdDv3PFD68rpg3eniwjT5xt2gDzHR",
  "key13": "QvVX7XNVyoj6ThSdiv5Bti5EjgZQcheugbcsBjqQ2qNgpEkv2rkh9PySSsTW68sYyDowXPBpAsnzWqPq99SRzxF",
  "key14": "5ZabFbqfV63BrvPw1xPxuUkFZqagxiTXid9UPpFaUw1F5V9TZbFU6K5CqFR3avkBXTRgTyj4C3W7Ym43oKYSRL6Z",
  "key15": "26BmaYCz2MzBot7dLzN6DpughTXxchwFotm3VMq6AtpdJrDkhcmXVNXoaXuusn3TaaUwd4JL2cEg6XC178wUG5uh",
  "key16": "VkpGQ5Uq1yCtQ9DVyUqniYHjiFrX4rQYuwNQMz1GY4TD3TNwMKCCYxiSuHqFvvZbQTRoqoampcYCP8r7tS8EgHp",
  "key17": "3aZ4hmo93dn8b9928KgEuRn39DxxkgEkP4GDt6ifukcxZMZs3nvHqKtD2xUFgZGo5YE79Yz4nyHaWpm1MrrjHWqv",
  "key18": "2eSV73feVj7LWSf3KqeffSxuufAWUjYDBn1fCGAvBfACqrZfF3DZLwNXtikH8a6B7RHruTqp5iMzvkMZxLagp5SE",
  "key19": "3gtfVqnyUkwjxmw3B5JhRjfeBiDh4ZeN5pLAxjEc8ZacxM5GKaYGsDq7RAC6WkFDa8Yh53XvXxuwFDk7U2We5zwy",
  "key20": "5Y7QxC8rzhi8NbpoEmMGZDiNVJrSjpp2AtNYK133wUym6chu35M31AQxpKeduAVuvgLcMGnRRgSDTyUp2LZrk1Cj",
  "key21": "3zNQENpGekiZSvm99s9GoaamM2jfwcRuUimPsfiasMUxJeGs7xugXshAdy6BQ4mfX3W6ZbfcDbznvSGRj19TX1hA",
  "key22": "5NMUxMFWUVurw7mMGYZuckSJp9UweEYQAF3j3mQ4Wi7YCzDJFUQLdEn4EKCV7DFMTiCZfbhsnPRkVkgf2vq4bnyW",
  "key23": "4YcFi6oQdw2pKW5mnNzWBjHL4UVGQYg1yt2wLDJFWU7Mg4t4FuSgEVbb2vsUdF4avEJG1ubgrdSz4FZDo38emfY4",
  "key24": "3Cm6oKL89R8myEpQYwHx2YUTzZLFgKe4hQBS6zu7HXQoHGkVqYQerHWunFU8cxE7TsphjZdiAUJwNXwGScfZGb6X",
  "key25": "2149DB5EJ9iWhMcmw4y9o167R3oyy3BoRfPqPtyCLeKAQMr6JqUnWtXAXgRXTYG9jW1VqT329pDFAmoRUnBZUxha",
  "key26": "45r4RRBNoL7Vs1HVWFBF1GneUwxLq8KMTdgshsRPnwQX2ZC5RSDYbJdxJnbCFCGTuwyvBrjA863UP1kzmxiK9DNm"
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
