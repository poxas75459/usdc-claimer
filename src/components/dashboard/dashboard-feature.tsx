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
    "4trxmASFwQdF7w5cdtNkLT1uNPaopZtUmnby9AK7tMozfuMTvEqvqhggqTHMw9zSexN9Gptp1ZteFW4qGtJBAeM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWUEwGBMoyTgEMRwBf7PLmBdvPvsGKKZKtw6B77aZXTB17f4Wqc9jsSMBMpHGz666DYQumsHH55JjGeHmRVy87T",
  "key1": "5zX5YUFodZdx2oVwLvGFpMsXwodnyWe23tDuV7fhbTH2hSERSusTYW2gPD6GnQKki8F6FrkWe2UhJYMPefFcaejX",
  "key2": "5RNZvFEPXXUxbANmRGS1awWp4DTXgB2X6W1PVNEVxX4jnKEruHiyqjQVsbDpmHgRuk7JpqtSvetrbR3nQQNaRCgJ",
  "key3": "61pFa8heaKVCHN8rwJYWTR5A9gw53bQmGEHqoPxP82xdrCV6nHbBmRjvNQFvjrwwEknFrfJV3bJidLaPu35nCki",
  "key4": "48UjKoH9K117vErZFX9oGsdRDpPDdDzumLqREf1hdWh9GgXEN1g2F2XtvhxU4gcwY7zwS9MSsQaRKHFNzp9Mawj7",
  "key5": "3BrZbJfhigfcMnuQnem199XeCnmNXZ1DQgFjvX41iWaAnafXJMj5hYVbK9fzmtRLp4Xuev2UMKiqHC2w6LiHWnQa",
  "key6": "4P2S8P3jXgcVs9EfPAy1WAr28RActscaBxdt1TswXt6UVzY5nRArGKy1TofW3tUg25CQiqyVsb657QLtKR5GW85Y",
  "key7": "35XqCB1nuxFe8sSXgccHLYC9Jw9HUBC2BHcGJJguuWTn3YJpxrJ9txYLfWryQQZSS1zB2pPw5K4pQhcUp5RT4dtn",
  "key8": "3aH8NcVJDJ2tL8VvCNHm265A2T1LTd8CUKfZQ3rBLborNQU4gXgnU7TVutFbFo82v1mVjbBm2eyeXqSt24yJL2Fy",
  "key9": "36MhACHsGHAnztdAp1NePbrrRa9RkZUkas9iq4pdr5Hig4Gnn2aJ5XQHLvnh4WEd61VQvGZZ7BXGYF1aW9BevAAp",
  "key10": "5B8fXzGE5HYgYZC5SLAzCrFHPFR48WmpK6NMY6ic8AmfeXVbyzscUR8zM1a8kToc8hbZcoBYx8FtpVEf5p67fXhh",
  "key11": "2hq2qRqfSzLuHgwTVsTcLJGvfZMJJyaTsSQRUAzDcjJkUFVbd96rKwFKghuYs2Zv6EkfEDEJn5q45J6f8n6FZc31",
  "key12": "3hUS4grgnxeuthpd1JN7K9Gb1KEg7Lm95cPA9nH8Hcirsy8KwCQrDaCkQ27V2KjNguki6HeqTdtxgF9nL5hAoZ7h",
  "key13": "57PGcUY4xmjxZhXZ6qfyUA2FVyj78cGbFaV8EsMHrRS6Ug22L9BJmQQmN9os4CYkv5zfppL1XTuApz1zgxWBVkA3",
  "key14": "2RAxEXYaVxZjsBV484ggY43PvGG65bHG4wiSUFsc9VKPaSeDRyWYxLqMXktDJHqLmEu6AMKu7L3dqEJ97PeAPwKz",
  "key15": "2JHL8Ub5Hu8ioYqpDRSTwP9aiHPiUdBqstDDvGsPvsGuG7BQ9YGG1bfyPDXuMsx86vbGyGwBvZUnJR2E87GnREAk",
  "key16": "4fP1xd3z6GMXjf4wKA5hogQ5jsbvVrAkkgT2wAMNBseUQBr6MC5fg1RCnHDeWjMxvC5XhCKbKrVzDwUPW4FAEgcj",
  "key17": "3mYVYecSGDpPaYdFHSxS8nih7RuWithVrPAU4qaaSKuk6zcamdAaiAcWMDQq29F7u2PGPbTaXY5psoYMzVRPdKm6",
  "key18": "67G7A569GeBGAXnfdu5g4DhUZS2pe5h2KcGYJ81yM9YjYPKsSfnPudUfgBzGzn2QtJxrbCzHotnrqRaEwUFsKgvV",
  "key19": "2QxZUFiE58x9ehi4wntMc7RhQcqC1S6Bvo95TCv8tmQU1K3rTkBG1AcY61B1tiPDGVKKVSKp3w6AWMUffSG5eU7n",
  "key20": "V1uVLHaiqNBvqLX43xvQAoo9e6Z4CuzzpptjrqZE3RsEAobZ3vhMJGQ6h4fvLsdVENhmKx5CaWJNaaJpQsf7riV",
  "key21": "25g19xMrv2NohMSzuMCAHkP1EZ2TGJteYFxLt3RvCqr55khFs3qsQpDSZzoQ8i5re2eq8YgBSLzyRHndZbUHbV2E",
  "key22": "2BdkcR7YGNHukRt9BWh98VQJt6Ath8JgyXWBAXsMnYRc6o2RspVu4T4M9Gat9wedJhMj1tfA6SvsLRjAVjgEhzXa",
  "key23": "2T424kXoyYk7hBdNGbKUrmzPatqnFTXPfMZHcPF8YCirZhVRdZfLPHMzPDCAphv7sHRMAzrFiSvKjYMGkPwm5SHv",
  "key24": "2bZthhsB6ZQvpDtLttyN3kwyqebkPt1P3YrZ6hPHPSCzgwzBZqybpdGh8JobaFPQ8QqEU9K9ggi74yvYe5M6LQdN",
  "key25": "5Qv3onRdHskjKCUMY3nGphCgPFnyre2h5VTEU73pw4r1U1vZL7eFYVs5EHcLUkyqEduFhGLaiiVUExidDBm42Ek6",
  "key26": "9vv3ydDay3R9WzCgwadMC2hkk9rdosHbdxp6ZLaC4jGUhQ8x587ghtA1dMQPDWmoF5CPwoHMVDJKF1huhkYjzQ1",
  "key27": "6ZhaRryHFgit92WqLmwa7m197BvuiPHZBS6FPJ8UHY2toCmRjkmhcazcsgKc3E9wgxTqGGqfnR16Ytdm8kvF9n7",
  "key28": "5dvgAHPVfrccvJBkb8Z2NHnwKgS52yWicg1PbYAt5gyudq8eoFifEXbHuZfRDVttevXhXmafgthGzuWHA5XbBTPz",
  "key29": "3gnRrG26Co9xZmgpKx1XsLYAPmLikyEGQ7UwMYoLSZrJ6bcabX6bq88o3FViobgHS9j75bnrjL2TUnpeCNSUKSFx",
  "key30": "2EwzfonuWFWmkmfoHNJKcy3wAVdwXe1uhABJwhCqgjps9MRFS4eDrCq6uiSTEmXaimzrKSxvhbpcANXSvT566V4j",
  "key31": "kdJtzauzZB5ZHQPHCMvEWyjV7mE6pdzvGQoJSS8SMnBtRUxzNwWCeoCRbtg4FgaXpogJMHhv9kKMtDZ82TbLqsY",
  "key32": "58EnfhVQqbrDWMpTyaMPRDjwa2mW7V8MWFPhnbTGtLTDW8sxRAeXqXpueqDVc1maQLscvfoXDLpoHe5pe8UG9yK",
  "key33": "3wPgZLUSFPx2eARqkemj262uwq2EKSsAAar37rdyRKbxWzQYSFT2cDf58TKyNL1LwXyJoCMDSqHYx1WYp77pLbm4",
  "key34": "2dx25RLwf8oKjQpT2Pxpk8fMUUzxkwa7p5oERmNdQBzBEX5nTumVSWL1XZ748vR5FGUyqrgnHav1CormW413kkuQ",
  "key35": "522WAu5dkV9Vnd867faYc9J2NyPXKRfGhXLbYJbbaNqKPj1gKe5odvMGJY2bcBCos7Mxo8H9YzN1C9eDGSxXxxY4",
  "key36": "2ii8wmPLmHdMkWSEhdXKGM2oW9VGzVhWnbezAnehVc1iqc96BPijxHKH2zmz39F55xGsVGaRHKwb6YEHjoTMq572",
  "key37": "5BtX1YwYAcCbXt11yTHk42KXFefXhz3R6GEfZ8i6ZmsKB5U1vFvpXUB73oncJBLi72X5QJ56kfBp76iZnsgmHHp4",
  "key38": "3WZiYR84xLQPfXhz8Q5dnrgfQ3NTo8xL9NJ8M9xbkjzGnK4TPU5j9QwBEwE9zszs4fmesJhTGYfU1Jms7LbQNxXE",
  "key39": "PURedfHLAZ7PMjdw7TMspaVF4irkR8y5z24aiVQew2nokJhHFu5JRLRKBj21kzkAmQeh3G2zrk2wNqt9XegsZaV"
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
