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
    "3WrxFgy7k5wzjA6bPoTcZKrACGG8ZmCL9x9pdPHbNGoSDbCaxhjcEuzVEaVmWfKjbxyDGUgRBG7emHR9VdR5Apyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S5nzegfVBC987LPfLYdBeRZ6ymyvQWoGqbLnr14qfZQGv2S3Eh7f2qUaQbNGeFwnFFWeTu7PQjvkmVtFhdgSgKf",
  "key1": "54cYApvQPZY13NQzLpVAbTB2CXt3AGVo9S1j5RiezBiJTmRy6q8yyrxVkAeYEwCkgEeG7w6YC6mrfmXib9d3ijhx",
  "key2": "2dU7UmaTk6Y842SoaV6k3YBfemLRuciQVivaMGHgBLXChqmm8KMNpiERNSogFsgYHah3xfQ9gHDzZyYsjjL3AGMW",
  "key3": "BUvzW6tyd49hKxBkgKEAPQuY28FC4mzrsuP4nyksZxrFDtV3iUCVxv1XkC82qKM7hZR7Z9Vwb4mBYc5QiTn4Eec",
  "key4": "39Fzwu1NU4t5m1V9t9Q564AV1329AoQ9ZLxWthybAWNLavDLXaH92gAF2K9hR5eYWjEzYtBfi6HLkHwTLwaNSfpE",
  "key5": "4jKgUYoN1nfneryyHH9FQkGaU58T7YSC7ZnwM7ZFcQah7CQQs2gKHZiJ3mvxp3zikFyzXBCuXzRmvnsagccAbUT",
  "key6": "4LtDTnbvn9TZVSDD2GXEa2An2fgpqAuoFJV2FPfM9QNAFGDzDFs5EaWFnt76Lg3e6juK43pSMSbBnCyu9ohdhMZa",
  "key7": "47fknqkzF1CXFisM7nukD9V4XaisVouvtSZQKwUbzMq6kjzqnKWaWUctebzQuWUxS4N2Cd3FDADmq7Sbi8VedNuc",
  "key8": "UH1EMTfiXMVagbuMxyotUL2AJh6pxAoWdp3tjtrRW7vF3qj674V1A1Mk2EX54RijaC3Vu5CZwZnYggFntzN7Q7W",
  "key9": "JmeSWPFf9KUhXoGXUmADp4XoM26qbc1ZT7QnHzvUn1QKoMyi3yz6x1jB9xco9FPsxLXE97AhitvWibZnTZYw8aJ",
  "key10": "49azDZf8jgafepXTHCbeSKmABCCK1J6adgvFdx6uxs3tzcMypenbJpgjVcAdqgG3DQ1cAnoigDEV2kt9h33G9sKx",
  "key11": "4XX3ETbNnaVjJ6KEjfZ51DKPP1mh5S2DxMbqqRuc72iz8UykNGMzwnZSQB2wznWmKhrJ1BhbmVjXyRE8endM1MRs",
  "key12": "62rk61a1CYpG8Lo1Xa9fnjKT6YdS4zQC986EYVmoET6VE6stXkWUuh1RQqTRgMTUvAH25vLYKF5BNQAxke9izY1e",
  "key13": "Dmog1r5NmqKnGZZ5dorcmAifzjpoinVZuqqaf99ZugQmLKwemTdm79taMbJ8n4HcbH3PxE1LRcWqXwi8yiojQTU",
  "key14": "3PmLM72aK9LZjgK5ET3MyNUDxNcthG12UjSNuMFfJPaydoZED2Afwb5tRpQF1q3dysHosS15hEHzrFChx3yAexL3",
  "key15": "2D2jLvjK7j5KErEpvGLvhw71dgW4gWDHL2Mapk9EWqv6xteuJs3paD8g5wjnvWmNY8CuzNb9qTrzWaK9H5jYKCH6",
  "key16": "3Loj1P2bCr5ehPqRP1BuvpcAwhjCHuBM9232A1eTD29Lv5j6XC7rpKzjFPaXJsjczdcwgZ1HBKhGpqwhCfWuECeS",
  "key17": "brtDMbEZybu3tMZq6WMxuMmonYSuL5N83ZN7tS1R7CSnY2qP4LUKzLwya43Ke83zHshHpw1FRPWb4SrSSWC8ZZB",
  "key18": "3nYn3LsMPbpf3wm3Mczz7J8xVHFP4D857EXzEdTiNBCyNZH4z16MCTJbggMy6UKMxqUUQbBWMiYT5qnzPFKiU4bQ",
  "key19": "5ZqGqAg4iHe4UXZrHJ32wXNYuzGxoyQJtPg5FGqUEUbEK67sDxf9NJ7GVFMx7bWdgBDzHvMRjwy12kZCb9594tBG",
  "key20": "2AhZvaXreaMJYQ8ihkvK2keeDK1Cbq1m6JpnsJDu5m7a3Sjqn2iv9u5RK2dWaQQm8yrWgUCzfankfBq5vtNegTbU",
  "key21": "5Wm17tbf1k96umW894GYnkkFtkDzoS2Y2h5hG9pLQhiFyh2H9ZWCDnjG5DiQyDtffmuKS55PDxF5kHy46ZiqH7iK",
  "key22": "3hGwSobFP4iahr392EsH8NqnXVLDBzXegGMyRMirH6P3x7p2NEPnm9VPVGqQcbowzZJMzbzgnN6f4uBFqzizsGEA",
  "key23": "ikAiytX6kFjPg5BVsWDjbSDLnNt8WXHmmpeHDip7a6XzPYFuu9rZLRfGvwV319TSkp9fD4BTZNqa4q2oGV93zi1",
  "key24": "4J9m9beM4Xb51N8P8MzAQZtgjjJ1TMaB1dQxtAcP7LbDiB81gz6H4y3rLqKgMV1QmEDRuvgknWscJK1TKEvfYwuD",
  "key25": "DriUGLjLoomDYzyqyYEyNCKMfRoCV759YCGctV5Zc1NAmDKm5b6woiSYhMkGY4WpJ4NkFTixaW4jPh9VBisgL93",
  "key26": "2DJhqrXYaz4ivEFF6yLYsmBWVS4SYF1piw6b6HaamcwHSGZvJD6mtnwUMuXHKVZDPWHwA3ELFdEapgJgoQn8zSAK",
  "key27": "5ms57Zz83uBnEWPRSzits9vgZZdtpSrDGFbFCePmfHUBhm2EcKyGdu3zSQVAnBPgeeCGWwomt7QwAfAUctqF7tQ2",
  "key28": "2nkPCdHTDq15TdbfvArnn1znQL8Kr5iwZzFudYiAoqNpD6v1L2Be1cZTQYb2WVLv1nQj3aHiMT2BAg1KV2qoBJr5",
  "key29": "4LkM6ygoPVrka1gfTSqx8civTTEHDjFhbuQuqzuohp1nAiVdVTtfJn66pSSrbVYvNxM23rUNkVj7feNCcQyApoAo",
  "key30": "5CRcLGpBkgGKviQxh4ELVKrUKPF2AhAXmw5xPAUPbXXFp6yLAbdgY9z8otZt5BpNCoVMVVfKk7Cfcp4qkvW9sBRa",
  "key31": "3kGDaWRBhxfqvf4S9RZQJ7ttJ6FbdApoEEjTRA3UWqo2nunFpBSCw2yGwjDcX7noQgRChdgnwmTgvEZ4trbv91S8",
  "key32": "5dqy4urxHTw5NhN4UmWUk67oFhqf74puPUHzjPfkNmrKoY6MCz7j7God53JEXwHCWrf9hFztoR7DpCmE4CKsovY"
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
