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
    "4VCDiBr475JjbBQfQFRhD8gLFCd7MQyKWryKKsD9e25ziGrCi43LCZdMrWE54nkteuSyYFAgobJRiRaZa1m6Lq1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zv8gzG6DJJkkedxwGqkU19qtJ59Wy97wp9wHcpEsjn7vBXJmq1K2gAi2wkW2LcvDdZ5zrHSM5gcqgj1Nx97eyM2",
  "key1": "588v7hNmtcd4vTrrVaC7CYt2t1sqXgjoYPb1yUU3rmohR1a8R6wDzzkZSUDo3Ld4GshVmWAaorMgCTdXLTG2V4iv",
  "key2": "2Qj5BgNy8iUssVzQuau3SF2rHXKS5KiSAdxbSULxFbxtvmri16Cq1KRnrYxaGhtnLzgc2iJ13u8ovxW1Wf1936WG",
  "key3": "5jDAwVd8fQnnnYQbWj4HJjgzfZJSVnXojgd7Uxpvgv6GvFRBFPEUBThVjkKBnDUnqpfxmRiLDzhiwuTB2hRNQkgy",
  "key4": "4syoNBLABLtZVZbMHAqXgpCzDVBJPzkwwZEgdmTvm5MCK7MLKL516GBgkSoowndxnbNd86z5H7uMdiHj1ipvuuer",
  "key5": "4CH2z9pia9Dy4p2hZ8SQ7YisDrEiQB3i8oGRc7WEBGQW1kSCjiZBnWu2t8JTH5MxyGTNpiwkgqrpzBAFhXSompCS",
  "key6": "3XKLAodSvPE4N5U6BYuZwrr6gzGZyaRLi8D6biUZWZYsyRYUuXAUts48oP48HxzYuzp8oiaQc1LLuLX4tDgfq8FQ",
  "key7": "5Yiw6wT4xwdZ6FPXE2qGDfG4eV4w4k1GjVLrUq6aYYKktv1M6p2SjAoRaz6eq7o3e4QL7FGGKBmCmGJ4NK3xbQds",
  "key8": "4Y6JXydXh2zUmwpmB664DkjDyVigxVFAdb1uHXAYwBCKkewkxdsnS4udWECYf4yWVprAn5kWrJABQKJKekgBq9NJ",
  "key9": "4FogEPVHXtNhJCrm3KyAv8haAKo2HfU42FEYQ4nqCCfYkEcP8BURpxUSDiU45nwPXRwRvgxyu8B6M9zkXsKhbaU5",
  "key10": "586w6x5cS8Sqa1ywzmH5eGcvn73TL8YPwNPHAYPgGUnPgFrc4aPX9VpzYsDqn4B1SJFFZTqpUeu3HE48Tk4rDPGu",
  "key11": "5wVwG8wUbHRSXDYUYpPffZWLGtZuiFJbegA389wK8FKDontQ2CM4dCayk5PHGN2pDg4r8s7kxkssi7vQeR23DEfV",
  "key12": "5cJAmi6FAZz9NKEvgS6pPtrmYUBbGiy4N6BvWqfMUw18TMUNYXZ5M9c4yQgezkhqJbVwd3BGv7orvvcEgBbbtrbG",
  "key13": "4YwqHvCY8ns262hxvWK1agxunm27UPsJhfMhPUpUqeRmVLeEMTocPnZv6MDEGLp8KwDmG8w9hhLiopeuHpC3bVXv",
  "key14": "5aMcWEAi8s7Q9UxW34vtkXj6WqgAosmvMcGEgpF48ebbdmNDHxS5xGs1YGpPv4EpKdwNonwwa8jkuvrvWzZN5n7f",
  "key15": "rUiag2iatxvKGbWJXFm7CvkepqNJQ1u6eux1uMRn8twCJp8Ezvf9k2DQjbMaskizysDSwXR5dYGrAkydd98AegR",
  "key16": "Ny8eSTBsnPUciNNhwrJTvgrk2mMWkqJir11TWKwMbAw3xVt8Ec16K5F5vTv96R3GTwceokUcYcpkCWbthqyxXGk",
  "key17": "4b76wqKMP2AsCWXB3su9S8Kp8FvS2wPU42trw4u73FWLBQzFyuSMRhbFJs21J3PJdkNZ6GnP31P8WUkk3DYMH1Vr",
  "key18": "46GHXst9V5wBphoZtbZxpZrWW12BzmsGZ6GDmNEd6SoL9YoNGfXT35ZrpVax4EvS2cf4vnegnpnkZKUzEu5pBHkM",
  "key19": "5jB1ExM6PZgbUT2CVnFjz2u9oQxPAeU2QdJbn9GN4u4xmQbKhssn2BfoyC2gFeraJovMNDSzzSTxYCEpppzxAtMH",
  "key20": "3uX29ow5hAnHae3VxHCFcEfEnt8ha7nLYtSnnazuDYRcHN5n2Pd4RcH9WXrn9P1QYFH6s5zfxpviSeDufGtM7QRX",
  "key21": "2JPqoiim5wH8Ar44sZ1P1QFvmSGbr1Rz1cUtiugfHwevP1Hj4gs88kGAgsZtMzp7JDoZtJXfVBtdMdJZrYaXn9te",
  "key22": "2rn2prCM7rWTYSX6yMLfsUsEQt6312DmMpi4AW8eDW6BYXa2JPzB2DjJ2xJkZcKDs6BjwgFB4SGAhkkynABDQfJe",
  "key23": "2zgMDUdFmUekqbwAwcfuFMfuJJjqHjGv3FVmevw4ATt7cQh5WKwW9cbwGVYQqHAvvBM6SVAfSebiBJn56e4NZGir",
  "key24": "SesbUdtMAaSKq4AJYbbfvGLtz3fyg5QsepSZMifNm6FLH1KeGLntLko14QAbXa1Be5cW1DPdqxrxSWc3j4m6BgD",
  "key25": "3miAiQVz7iE53GiGLordhptx7BieW3rUv4oucXoyRhUTaDjD7Kdd7EnsrwgxSJuYT4BqyRDH7y1d3XxQ2CmS9aT3",
  "key26": "5qPNDNcbDzXzqtB1umMzuaVT2G6eE6BPNWJt7nkPuwq641K6TCi4wq7NMk1f7SJMRz7Jn63fCWMKigwhMUZxWGLz",
  "key27": "4yX69g7WSdbp8mteVQGx5RPA2rz5hnWfeq12ez9gjyB8cbH6AdZppTF7komSbGTUinZepN6Z7BJiBtzQ7rwssq1c",
  "key28": "2mjSVFgTrUar6QbknV12iUER6UnkzzhHf9KNxZEGiUJTYjpnXRnAXEhTcK273V8keMoPcBEcPRqoNFSkwDi7RJ8z",
  "key29": "3SUDNbkjAmQ1JdPBBHLup8gLeyQBAepSTCjGfEFssjLfqKEkt4hmKyiYQEpAYmWQkWFsVxs5EVjf9GYSYWdmv3sr",
  "key30": "67kU3a8xoRBMTpj8xyPnSArM3JJNcV4HegLQfoEnVAjcZ3CQdwVexYu9LCZQX2ZonhkgyM5p1uRjudjpgwpFVYoo",
  "key31": "2XTtobP5aopTmAjqYKLuKS475ephG5snF9dykUgzVXpJ5ZjAtC6bop5JgaPiwUgJ4S3XsRHKSUB5R2xkdgPBYtT7",
  "key32": "5qFHTgxNYgKk4ebUSdLyaDJaRTKdfWYMMVCQpyBJWNosv2rhguPNCkSB4m1dxbtwiUNhHrwkV1B7yBKEdoAySHyS",
  "key33": "3YLB7epWiXE6mamvqDhc3MwJ5LoZEBoxVPz1akQHbxaqnQx5tVgdrKnceJDYoNavxqDzo1PwoXHXm1EFQthjiNvP",
  "key34": "G8yRmzeVNbd5KL8X5bymnswvd7rxxttA5LtBzasH44mMH48dG4ZXs1j978SAm4ynKh6w3T9mGpnKS59ZR9jbgV6",
  "key35": "2uSCvSc5cD1TM5z4zxZXe9gmYnjwXnnhG3JDQVr87swuSM3qJhBhECcdaDTGkS3XYGVmXBurUAqopuBbBWwtCYJA",
  "key36": "2X7jgTivTP7uJ5xRvmknAZwB1TFUT72jpQcn7aHLq6FFsDNgPQgnDdBizXtWK89qCmHEoXmf8Mgy4kpFkqvLx9ar",
  "key37": "2meXoubQ6Fg5c3FbaJZhUFF6myTun3g7vMEzWHtJZ75XRU9n2mtUyNfxAa878enzTBqpnnHheH2QfcT18GN3nzbj",
  "key38": "23rbwcqLPFeMhuHactrqRv7PSiR5H8yoPwsBPWTZjvp7ireB8YnfHxMs2511ymSM6SCSTZVzjtbvEnyPiTXvN899",
  "key39": "32QDZEmzbdqzpwWtSSgFTB8BWoTjMEuD49fU6s55mKcpzZWm18zAhhwMMUGzqZxQwdGBJzwSz1oW2cGRGrsxDmaG",
  "key40": "3Gd813kePNFyVsgVMU7nsUcQixZc3iTe4ud9MTefykbjM9HkfifZsfmCwbxtRxkm7rTnf38H4YiDk6nRR81hcneJ",
  "key41": "57uWkMF4q9SAviqQHQJnsBdrpfqRucH2rJTXMVrre3j7cF1tQa1Ppj5UTie5R7sRREuRanbvFwQG31BEtZ6L8vpu",
  "key42": "5kEReoo11Fuh1EENJ8fNDyYpz8CYK5zwRYrY35s39qZ6unjYdFtUmWTywKry2XpTYyShFjkQtZRwXNwBFrYMe35A"
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
