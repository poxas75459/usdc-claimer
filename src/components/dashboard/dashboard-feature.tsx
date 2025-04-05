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
    "4xFxuoZty1PS3Ts9g72gyHtrsfx8pqDA3mh5qWAvHK25uwrEbgfbKWvFNawprCu1YLwgA6toC2tRgaWZ6FTrpnFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6pEHRiFyEmsV3MndNYgxERQyxZ7M1UjXru34sTK4gTigpi4DWUfHScF3hmK6mABeruiVru8CLuwMrxpp34gqFH4",
  "key1": "TBsT7yAxLZheR8G839Rnu9iyijVvcQPerXRsAHG6tigPAvNpZYfxHE9egaN5myKcSXCo8SHDd4ejJUV78YViYWt",
  "key2": "23nUeSnnoj6Guw4EiwnQzF1HhbNGJqPYHnvBdKKYMFbdZyz4Qkf7iWPxUaH5Lza29JVMKpYeJxeTiLcEedTKVGpH",
  "key3": "dtkzzreoZw2bnUSZ4R9DhMRLJK5ioe38RGJWfZ1TtLDHQgPfm3xnn4Fc4JWekjMSgc8BXWgitQL9TiPxeSggby4",
  "key4": "2K5A1SZ38qFDaro2UQ34gn8ZRAaG8SoqnXLcSJdWSw9g3F7u7HTyWXJuPuST9HWca2aWUsYH8wGc9XCKDPHbpjSh",
  "key5": "2Y9QaFTSE9ANHGfnkrNpZ5ehKXNBokNzt3hWrCeX3pwf49iwgMd3N8675m88EDvy5UT23Dd5nsA9FX2JHA3E89zX",
  "key6": "bL29p48efDs1rt5Vniu6CQ4f3zwNKiJPmrLQbN44pQ97sCy3fZB4SnmDMJSYWD2pjcJu3jqp13h4QxY4ponEdNe",
  "key7": "2BMEUqn6qbXUdbzS7sB41dvhz5ghx2f8joGzXvUbQ6DUjc7SDjekr1DEF9URMKBRhiFmgLS8BvEwvN7bNuWmRkwT",
  "key8": "4HhazFdFgoNJVakoqMM4rA3HxznbFnMdYHfWYZgQzmMK8sJTaGMuF3AQB1wGc7TRi8E3zSJVHCMaF2P4LKBTwRqQ",
  "key9": "FPJVf5ryzhzx5tYQfMq7KgxfLmdaZnwx339rxSKComXJKRgW1ZB95i8APStSqNzQ2hJxv9dVXRfjQrAXEbHajtG",
  "key10": "2v1sNBRnT5CYi5G35qMF4zVra9DeVdXeAFKYVSk5kVicBHuHQLArDiVSvkgHsAk5sm3d86bTJkribKns7SvvptZb",
  "key11": "4bGarja87aYGa66XgF4wxE1mKMzGFnFR1H7RmjJowwWVPF4gtqPRfsWrgYuPMpTRDyxZKKLKGV7G43NVTmQj9fHa",
  "key12": "612wFdnrnnf4hNRK7sFx7C85oNYj5R2hi6jKR8jMHh7yPYEbfWdVumjYJLstcpgE4azCgmiqiXy5ZaBHzCi3B6nL",
  "key13": "ZW2kHSBJETD8ph5D8dCTUg5CnmG9eWTnkEiVoNWa2cf1xw24CRBva1fXeRyeZJBgUyKw5bw96tgq2KbWWqV8FLi",
  "key14": "3vKNPLuc5eWV8LD9nbVbP6NeeMaFakVnsw3UgXzTjoxzCn2K4RqKg93NdDCMYkqUrVUj6L3XJfCWdKQ3o4xLyqkK",
  "key15": "5CaW5cfngQy3dv1Kb1KJBHMLvTs7zVqryXmZH1HSfHLEgzQu5SrRiMBf5DNixTBX48PrsUDRXFG4tyq2knGF62uy",
  "key16": "5QKHegZTYFAUJSvgsqLncfiXstAcjfYhAvcbe77pgerBAQC8meu2w1o2x4JoAAvMQDZtvGPa92DUP2Bripavy5SD",
  "key17": "J91GmmoCHUe54ZTHbAJfGid13XXabhBZCbFvAz2pNsQgd6qu6npSYUoDwhYjrzdVbsEy2kWUznWgdQxMYo4JNzx",
  "key18": "22dYEm5eproNAKJZEyFQXrWK4iqcj942gEDkmwQ8oZXiMPudTHz9V4M72VcDj2uxL8tC8C6CSe2z1MoDvwZ1Ciwx",
  "key19": "3L57MhHjC6taJhEjbPKc8mUqYyTa9Xpj5X96iZiRhS87zZ9DRo67gZrSJAyhKcTgiEqjaScv53ndV2foQAbNzLAz",
  "key20": "5jNEiT8Amp95FQ7xt6VkyA7crGv6xQbtqLkNsSkZVEJPSEj3gjg6kLBHVKMsri8Cp983rCoYmacreF8BpbPBgUL6",
  "key21": "AVLZH1jwqb3d8sX3meHTeZbaEhNVsSjkNTQNCeph3fcbZdRK7By1Mq4yXNwBABaiJw4o9Ri6sLJgvj82c2a5S7G",
  "key22": "3HGsQk7eckA8YVPtKakW19RZPb4aKs4Tqq9qa6nxzSXtmxF2baQpYRD58uPcyuDtYXU6E1LGXXEEPrVHRA1tt9Mf",
  "key23": "3uxYn36jH8HgR4U2tYNieyKddhVu1Mnfp6WLwffAFbqGJCiWQ3Am7uS1ENDuQmDjQ3bKpE8EYWfEtymMS7MrLn6B",
  "key24": "2YvYQaEzfG236DMDJSxKgpbfTnGcXLekRUeFPR74TYQaBAXSKz96EnPr22jhJztRrRjUM2pEF3xkxWGredqUdqGf",
  "key25": "3qivugR6S18PzERGzVYJ732r6Ns4q2tZC8w1AchJPaqXNqtgcKBeZ2fr3zfb4oFpsFd9x21hfupTSRGpMBTN2rNq",
  "key26": "2hbwHiK9rrzL9YaYDRxVGCPYk3CLwVoVECimaBnvNryYXonNtyhtQVnuHuSHPXfR2H8BVuxHsEZQ9y2rWU1RTQt4"
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
