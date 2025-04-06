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
    "3Xe6SerrGK9L14Ytc1xPbEp4Q7DhZSnNKdhGbcd3VuVJnTMLLCG1cdEwbohrS3u5zBt85hbj2a1xN512ZDKqnDmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zei7kxR8N86SyV6zBwN4pKDxC5CsM6TsPow1fYd4p8Vez9Q8ygu7Nxo1qXQ8J8ggmup6ZNFHv7MJGueZquGXyU",
  "key1": "4fiBwozm8DV67Z6xYuBuz8dpgYRnY5D3TM8Pf3je25ZGukBVsTgXcLiR66iJvEgbmvV2pyDVBnTh4y7A9xFeNkXv",
  "key2": "5B2p4SxRaicu3R9gDEGbgoTwgsnx9y28X94iLxh6jdjFv8nPoT5GgRvP9bGYqTYQKDBotGMmN1QBQ8SupPhAowan",
  "key3": "3AWvNLFgQUFrfBgx14y8bsG22bCggpVmWquXVeQEXwF2eJTZr9eWdW8T8Y3z5C2n1GeocmgTy54XAbPwmTVQDg96",
  "key4": "35NKrFwLQefoJDfVdwWTuFryrTo1xiAsnYRz26qNL5RJDPWGzwj64a28mLmuBq4wRGmsuw9LmhJAu6jC4RebKLeD",
  "key5": "5hhYxnX4Cy4cnX2dMYjdhnJMJCSeB2WSKz3CX91xMpB61T6fKYZpipPiwFWDZLRUJFxXsk6htpjFdYensmuSDGfJ",
  "key6": "4HSZxzbndTMdFMduguUcVxWx7NyVirqxsmwxKwctacRHPdUH5QD1BQ2TprsBmevyvsC21Xmk3P3uok92poNd1mwz",
  "key7": "3ENt8ZjPZcepSxq8U6d3A18brpvfNCRodjsmSD9uw6WK3Toh1VsjuVD7gAfpWhtZGPm4g7yqi85PAG2eQHnzMuCX",
  "key8": "3ZcPffLbT7E86a9LTsupxcHCFz2Y6bTh68716p3kvTMBDXgdn7LQPAHzq5zhoKL45vAbBXMbnA2rCuxiHGkCv82v",
  "key9": "2AJxPsquxnGaocmS6X69gfqWPWEfib7nhe7YXSZgbwXJy4KTvpjLZNSJkuLuetwHfc7DveYHZgxfNscgejG7VKzP",
  "key10": "64bL313YcgktAmQa351rPrdV5ffiXDYKG2yfeKCQUxccACCtMVYHM8ocMNf7VcdsX3FTDaKbQbBHvi9t564fnETL",
  "key11": "5j7Tnv1Ri6W82ZdtKxP3CeR6W5rivoj7pHZyFNy46LJvrmCDhVAn31CcwLpFFNYFrJKRq6VyjsnZSbkGs2zGV5d2",
  "key12": "59eXb3DTi44Zud2W3rdP9BQVTNLfDWkgp7PWrF8Uq6MVufsrdNEQNrntkcJBPfT4owC8TFjiCj1kqZMH26bKCAWt",
  "key13": "EeMJ7Kw5CNrrGqwCWgGAVkeUARVkUNqrwj3AzRLu2ABmHyEQLtuHEqPexkUK8PzgVa51NUECuRnpmH9pxJUP5NA",
  "key14": "5WX4PiqnTZ1z6RBcMNxUXa12SM6hvpqBoVfHj5NziZTTtkeUjNwz54WPgV9ThaPq7mJvfBd8x9thm2uosmFT3Dhg",
  "key15": "34JxkhQ6YBz34CX79keasYLwy9Jxjz1zMh12s7eAYp9icYEwpvoSq8evMx1AjTAp3v5fYxK4myKXXBALPwUFLMq2",
  "key16": "Q56TbKLodk4bR9RGuMm6Drpc9ZDfwCQrx5hJJukJYsDVZcUFc6Ym9ecP5zmuaEG6S2uTUE9cvHp5M2PfD91ygjA",
  "key17": "BZYD3BxZJxitVLHfV8deiaPsee3iY4ZqKY1UBYeL6u7PgVWBSrSSWN4oVnaGDYngdymdwqcoLQ6NrE7aR4cT3UD",
  "key18": "2PFrum1eNVfYShssL6W4smAjhpXUK9C8jrrLJnkRsKnWASu7p9btnrKyvQyLPwerXRJtc4uA1MXKjbrXw5Z9kALn",
  "key19": "5mvK3YTWYAgXT1CRY3q6pp1wQ4y7zD6bTAynWDsDi4QeEijRbzJeRDc8mWb1FqbkTp9UXGcE5qE5MsvaoFKBPKh5",
  "key20": "4rD6VrgnTBAEoeM7YsyPsAqCuWahByvZ1ATPKSvxtKxPVhhs8BEr35uq5HyzAFP7KHcALjyB5gknY9HWAaAcEJ73",
  "key21": "4jpWEfAwcN2Cw8mkGRr7pNQrJHb4E1t5YU4BFp4cJMS1Eu39nxv2D2CrHRbt2odE79RudcshzphQCc6ZdSSNDZbi",
  "key22": "RiGgX5QoTuqwbNkPhJQm7vdyQWhLCfSqBzXHJBwrtgARA96DwGzxmuR6qLQPbafoRChEokhrGqNVaM6Ze6SNaCG",
  "key23": "4WCEeEXHR47t3eW7vcm1ZftbjR5djRr6JtQJZ1wd7Ti6xS2K57ZM1Bev3AkoKxKowxKHz7WhgLiF3wfVu96t99pw",
  "key24": "2cDAZFdWKPTYSC6fxoymHHNTPZcrgvk6PtHhm9iYw5Kxxgzn2zskSHGfFnjXGGZp841joqY8oVVG7tgohz8b5BiE",
  "key25": "KwyaWtHh5wfpL3jCT6SWRoD5tjbuE8tnb7GAes16KNQn6p6bQf3MudeP5miJw78ynoMyUt9EmbfukJ4oqSqkGKS",
  "key26": "4Bf8isYwN5VhNetLGXyx2faaT2BHzraWQvomqh2t7f84xXkKubaTaPLy9CMP8aJXeBHTB7iDtXqRGP5MnoCD93ck",
  "key27": "22bmm8ZmpaeB3zqjhBz31BiXseMsqXpYNEHQecC2J1XPLyK9jUfxeckUFRmgGXLB2HQ57MjbNUNgYcjr9cxNXdji"
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
