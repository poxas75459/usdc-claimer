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
    "52pX9PxF9x2CjMCTn6wXr7iX7EDp1d84sywvyh6x3XdWS8sk59V2gi6RAPDXykAGBb5vtbhaGBxL2XrcF7DnixwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epnL4frCXYKJdzknLuWZ8CQfjVGYwHuL47zMmc7EmseqsnoCGNMDDpZ6rhqf6nmtjrhbhwa2nVtyqVgTqkUW2eS",
  "key1": "5R1mcvRhcG3HfPdoB8gDhcdwi2FRaxEEBUeUzEGUuq1q6mtMSatXCxjBDC6jr3L9F7iF68E8g8xVWoU3UXUmMt37",
  "key2": "QH1DEoFxGoGTqZxtTizZ5oNzyC8gDkDdKW1u25TnoAHBfeKoemUXkfUGBzYYg4RoTM1JvJ3DowKmLoPieqLvCPT",
  "key3": "4UchG48CZsEZhh9gnkdJfjcULG5pJEuAjjMMCWn4hLVArEQ1NX5EsraKg6uDhgyaembgKNyUqU7AqSkEEhJp3QxY",
  "key4": "3PgpFXNLrsar1Mh2JXg2HYheGvDn7kvjqPyGeBZfvLeoQjUptMgwtK1PuVngZBeg5t4LnF3SfTrTCmkhLPvUbn3C",
  "key5": "EE62sQWMEBgHgutmqK37vQj5HrGYf2yHqRdurKwPYcg6Q4p5osrzTRP4S2xCLpnivgj5AMNv9swj4tJPxPP9RyK",
  "key6": "5Zj9aUKi2DqELB7zYN8vYS7Ua5qyK9AYZ6UMm7sP5Vdh5MBzW8727yyZKfLXce7SvqUbGkyg5BPxqV4Amd2cHuui",
  "key7": "PjZWhtpn7fk4yiSTYNN3ZPLRbYCyzhVjaiVMPAiPYE29y4jEgv1WUrZxcDsTtdLu4kTFnwM47hRwRmHRJjTz9Wa",
  "key8": "4VdquKzcMskiZEizJBgsV2oAcHDfhnAj6qVjTzXCX7LMpvDL21gVvXeo8sShdeni4y6GqxTyzS22pmpPvKiyjEK",
  "key9": "DjbyoBkfKP6LU95BiRQcFaF7aNNfi2WrET8q9gFr1fFXLndmiKwoeEUbcLJtK4eZaADrDu5GLwhn4Cs9teVnsjm",
  "key10": "1CvY4vswf6pSWoVmpwnb4Xx599xfC6hnVKGcRmynZKUL4x5L63YuenTUaviHnJ6V5EeQbBqdGgyaEEf8HRoZ98a",
  "key11": "2M5ZSENrNURdhmGMyBMiax3jGpZFb2Eeb3Kt4Auo32dRPDRy7gLmpwuhkXEVaS7sdZPsaxLmNdt3KHzWUbWc5T6Q",
  "key12": "56rvhpyUaHGWD3fuPSLCxuEWytPMA788qsAeUYZCnDk91E5mrwnCNEPx5Du9ng34Ep5AeQEKopVm91JXuxDJwnNU",
  "key13": "5AtHBAmJq2XMxuHQzKWoLGbfKkHnz5BuRVC36NPobwNKo1psomGdiV88CKeS1gqvUW75Je2fR94JFRe8wjpZGXXJ",
  "key14": "5jyFaGuXZnrATsZPaY8WzyitMgGjtzK5Lpox4KTmjxXdYMphsMa42RVGajhPhiy1DNi5BTmB9SYH8AWFV2wA6XUJ",
  "key15": "5cmYvJW4vx54pTBQouQN3zuX7TCdesaaenGA4wkDjFm9MBTLTbgetrFz4j9Y3aJFhvZYZhe7CZigcSnDQncyRDcr",
  "key16": "5PKTt3KSfNdBxVTdvt9CqDWWPwrFvpL1tJojhzKyzEcpVHSdyVMbNn2DMpatRxDTSSXMkzEjbvzF8gjN9H5JQLPU",
  "key17": "4ZRtPYuEcnykyaU6jRoeWjuSuEP9M3SMX4Xvu5PpqwZ144trZvhFizBPfXLwdHdVHVR3DTaHxgAQBcbD6dJLZtcP",
  "key18": "uNxkjN4L3xCgu2R4B1qMFATvgCqEHqnrhnBttnXU3cy2fTf5JmR1rp5BvJ3yrKVoKMe77uL2xpHYiRYqUzETKrK",
  "key19": "s4KQcbWtgcaen4L6uCbQ99p2yNsKYQih7PoZZzZkwsi3KYsRcJZp8uaKa2VTzeLU1edW4KzenbLUwSv3z91mnei",
  "key20": "3g43yrWtQGPKV7hXLiLPuFAi3EPynEAondKX5CryiE4qfwpsjS7PEW6qwWjTXD1TZWYifx3VvQTBLKHZNHgA5cvL",
  "key21": "54bFez4e9fhRkPkP1qWdK5aT526asJngBPVwwewM9SvrRpU4WLsV2u4Sg5b6Gx3YCuZzLEJSg3FtS4thBYrFXAhZ",
  "key22": "4QC7tGwMkipsJA5m6f5dQ9nA3ku261rM1yHH8en53FTeLHg3kssXUbneTqnY6FdTzwj6aGrbt5zNcaM6wnVGZC8u",
  "key23": "5hknppVVS7nf5XaHmN3hgoibGv4MQEzjETUfiMMD4HJE3tqAdfZX3yBS6fxmZZZp395t5UHt4jXa6MPaZ2HCzuPL",
  "key24": "2vi1YzRChVdMyYmUWJn3DiSYRSEtbmdFmvJFhmk4xrZDQu5PwQxf1hue5M3EC7xignkWvBE1wrSDBMPmvgtnL8Tt",
  "key25": "3B5j2osC3CTNwHEK6zwVK8eDHiDoMjDMKe1VYY9FUC3PR4ncXbHMziWk3m7rWvhtXq8cm47AGbCiCb9Tvqf7Mth3",
  "key26": "1MvThyUtnJDCNq1gfeovm8T4Srj2d1MgstCMTDLaG5Twu5M91C5V231s3Wevo5u9CabSfnSGTvHpbtCRxdaP7qa"
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
