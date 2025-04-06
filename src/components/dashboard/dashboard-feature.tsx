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
    "2h7F4bGYr3Wkr2d9oUbcYZdmbn3b4Rsf3nD9F3gXhRD74Q1sAJ1w4TKjxwakovqPk1m1UPgQYA4pVmT8UYLqig2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Bi2bZoL2Bn3aqYERrG6r5pTGXddg5VtBmabvKmoD6tmz631BjVx6b8usP8PFKvZyRFaymmB1XKUSub6HqV2fMq",
  "key1": "3vAJTLGwhEgBXqKN4aF5etJvCokWXUg44z9ddXCKfN7kytqogKfPB33SLGcZTFzWWRHbJGUcnroJJJyKwuuhfpBP",
  "key2": "5RoRBbGmMKKGK7X3pWGYowq6JB3jKmxa6T2EqXwTHZmo565FuAPct9AcHz9bCpXyGdyQWLHF4QRgAUjzjRKWzNZD",
  "key3": "pFxSpienPxuzfDfG1ktHUQ33WzVF4754v4YsUgnj7qkJWPb2tn8J6P4uysxDtLJ9wAiPQd1kUEVpr5RY238fnxJ",
  "key4": "SwKyUpqxL1KixW3XoLENkPAPAiAGvx4qdNriBy9N2jwpKBvSTxqzMPBt4yGGWV4U3oTSYHHV3aiNrK9hLNsjikF",
  "key5": "65dNMGWAnCy68Sq98hVbL3NmgipZ6B6VwUbAuLLNdxkcwWHzaymVb1Ry48tfKBTEV3MaBykKEu4Bjf9VRyLmHD58",
  "key6": "5itdWsA3JaSuzHf7p8xpAKQQwJrDW2JVQRPaFRnpexbQpq1fYN1Vo8reEVAA8iaJwxSgYYBLbEwSBQdUwmGkipjy",
  "key7": "4RmoAydyHp41SttBz9jusGDjdssw8HpkhaYnLviu9zS1ojS2qgaJCKu5bkWZmeVQMDRRg8XXHG8refJ6xfp37qqK",
  "key8": "2Ur6z6Q8yGbAxABC7V6uHyXtwa3yPC3piao2oM67ybTaisXBdTmnVxzWkJMh7GjyazRg1rRKkxxNLn236k8CJ6xd",
  "key9": "2njXMD11wdo8jH86QrtTUKf9Xw3nfLFDheYdLneXSd2unBFdfMzn4LE3FjVvXgEoJPc9Dnjch3DMw4TfHrSUH4C3",
  "key10": "yyjdoW4EbzJKJoAUFsJmcTrMbNR2DCd4c6ooxXyb8tSkqpF8pkT2RtMQT6EoVYHCnCrmp6KBqtQsx1WmKZwDkvP",
  "key11": "215NcnCV651cBGY3txwjYVY58iYshJUuyFG61LqKvgEPPj6q9My7XDmyFjd6aKZLDfwcNZAwNp5buBbGKFMptybJ",
  "key12": "4BToUSnHA2K1HKKSjDvWtZ1RgueHAHnfESmze5R1tqAYyzx8iwi2t3F6p9ARDBZVaTdNnMZrMwsTjhCNCeudAD9T",
  "key13": "wA1vdEmuzSwRvUErxEoFRSazUcvoGmTKGshDziEcGfN8CMERBs5QSkwG4kYohuKrh29iAhDY1GYA3PCzeCVFs6K",
  "key14": "jWKZcXSbbQK7b4Ztq2rJzbd3gbfp8kRSQnH9okDDvoFBYCMhkhRvQNejJZ5kE7QGRbrn6rgZ3ZRJXJKxfGSKTZE",
  "key15": "B6PG7cw6SMNqwWG1ZYgq9tbERaVuo8WnKozqT9TbPF8a5wvZo3hyPwYLy4RirftsKx4n9jXyddEoqVySXasLYni",
  "key16": "6HKWnBokbYFZbwHWUYhVNc6WWHsS3E9ngSUU1nratfJRycULtYEKdoaf3KCJDHuNcRdMdXFacVNYqxPQ4f32F5R",
  "key17": "2Bf6PPBLMYjJ2oNF4if3Tdt6FAsCiVkkDNei6gfKxhjLNm9vWwioFmYaGHQTL6EC5B37k2SwpUgZBYyUex1dvSMe",
  "key18": "rr6DKcacdBtkvrHbAXCc8dbLZyZuTfDGu3FRYQHogoowWeNDHCmRWvBz91zTr6fBVYCMCj4mqGdwiiiesNKmFGW",
  "key19": "pbzFC8rCGa26CQPXbKqUGrCDtoaKAfMtd7Jh8No5GofsFVHxB3BJdocnuj4bvmvPQaj5WRyX6zRYoVqtWRsYcuu",
  "key20": "2Amt47ZjZu2wVk93kryBKJR3GL5zstCXynw3AAPtud6N8KKPeWmK5iiBj3hfheqqQ5JDGRWFPpzCC8xvWzmoqjQF",
  "key21": "3uwakek36asBgdpM17QpDy8BW2kYkNwpeYnZ87ykrBVsyhVFsVYUBHSZ5men22t2eabTDr3YLkinA2ecN5AjbuKy",
  "key22": "PhF7pjSdvCCm54ZmkfSeBrbVnKDUzc4xGXHVGFNi4Hzuvvkp3LKzRAAoXhby15QoytDrNsz83CokUu4scR4ra86",
  "key23": "2jcFCtunBBWnhHeMzQdTf3XQB5gcBtHFFAntPGBP7wYTkDEMrpDdj2bgUEbMEXcHPscApCUP5ABp999ARfUrwuXs",
  "key24": "3BViSvyW19uEqDLaFEPhrLTUXatAFCwedmNZomxaKYisZizAJDcrhCv55JoHEcD2jj37qDeZwpm6MxQ2UcJQugZL",
  "key25": "38Y2UnhMZ5C4L2fogM3Sr4o8NiR3rxQbm4rkpsWvD7gnHz91nDTC22ABi9h1TCPHVW5t4J8SpEBsiLTwtHYWyuP3",
  "key26": "szexoLDLux6mdpGWFGHDeGx2BQ9Vig44FBsFB5FGMkxMYbPWMwYyzLgCK5BJnjgX7GZLUYyp271cZY4jzHPadZT"
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
