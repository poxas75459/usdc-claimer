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
    "3MFBc9tMH8kGf98kKBF3mAb5h4G8Yd2tcZPDmdNLhzvm7v7UavjwVmFp9F4DhzrWhLq5jMeFDEdnYUsrddmuYss8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dkpvgF88xWqexVZ8PkjyDpXWAV6efHeZKypa8HvMUtJbrAA7FZnP8dW5JFLVWMeUX9aJMNqsT88WGDZbgAjpjr7",
  "key1": "3U5Gj76JBXBdLqLArhRTMFuTM6VKeC5SbFjytTMKzVDfvKVFFoiVauABq6YkrAhcrz25eReqDtdPs8vTvq3mhQxe",
  "key2": "2zSrmwtnnYNgRRZh8PgVztiYFWU8zEJUhaHAx1XqdEEoqyTukWqxftZSFvzXqRXTmggeBPtenB7Jv7UdePS2puKn",
  "key3": "4epy7S5htaB4Te4HzbEUqiPM1xGPo9NVmg1P8rYxyEgMp48aMLnJBPkHs86x3Xgh5jW8NRmKoyG16v1TMYdL9Dc1",
  "key4": "2WN7XWXd7bvoMsZnAsEBz6SRFCy3u8nezLQWU9bSbbK81D9WRzaG66hmV1mgXHjFLCXJ3L7vdmYGD2gH53hwz5c3",
  "key5": "4T7uUNxGo95S1DocB5Eh1eQY3gfDYX4E39f5M4t1n8BsWjGmzYkm1M2a2nYkyCUW6AQeyjTEuRcNbMPqfCcMTgU",
  "key6": "5G16nVYfYvPpo1SXeg5YYLRpa71pKE6M2Z1Yo9edeBQvcyWasftA73a1HrjuYXk7LiAFeEVxRiafnDTevM3F2M1h",
  "key7": "3HbREZZAcXa6oJ4GYXkvbE4t2AGW7LiY2QyrLvxgwzbEzqT7g3J5e35sqavvxMmhf2MGe9j6vBfKPJu5iqgfG8Er",
  "key8": "3z1Jb6U9U98NtYrC2XXvCkZzqzCu47u9Bj7t574wGRwb6SymgWXqfGYt3b1vddobnJqzSxoyJW8jAWwEC1WbyvXA",
  "key9": "35qia8h4UvAoZqbDWbdqH1Y7QwXU1LQZKR33WAo2jFTxaV87zzTRqjbRAt8aDr2AJGWKEo3UjeHwK447m8A4k3wE",
  "key10": "3tpLxRW5PG7x1iirCCLPwD49h2dvW8ChnPEVnPYigHbx9C9F62DpY78Dn275mr4PQNopZjvoKvtJGQzdQkr3R6xX",
  "key11": "39RAhr1QMSWrymL7jurHM6TD3KWa6dqmVq9QyfavifNW4R79ZDv5T8721wzNU1waBEY873DwuqK6ZigdRazXXY5g",
  "key12": "5eHPNRrLEXuHDXpYTGUnd8d2SADMBXSeuuP8rZHffYqupzsV78bZVQi5icigkdzppZLZyMEbpQWVvLJNRfwZnVJN",
  "key13": "235TyiofeHRNSdA3DnRX2qJaVpgidM7PHbdMYYVPKdwWzKnrR2yJKwJTBAEDFWxFDtPpAvUBV3PfL25MsgRkh1ut",
  "key14": "5eopbjLnnoSQMWJ6S8eLmjikJztLwz2Fve9Ziipskh1ADDsVxadzV14bh9RJFHLFsfHrushvFDrFWHkR3bEgPwKm",
  "key15": "8zwooZhoqmPYTvuj173MNn8XEznuCHgx5wWWzChvqrihHnMRzdvLQkUjnu6PjjcAHhMtMUtkqw7YYS9NMxpB1JR",
  "key16": "3FWyA1kRmmd6mNuSvbUSX1GYJpz4DPnEYbTTsVht79Fe9fV4uT25uBsx3ni8xMb1H4EimHrscByG7N7srDt5AMBc",
  "key17": "4RR5GPARZjGcLGhizPZN5Jism5pd25ZwZPi5swpJPHKFtYc3aK5h2RsgeMmV393C3f2eD713rG4SMtnSvQw32Jti",
  "key18": "4cSX1chrsip3u78x8eHYQzjApp64yYM8Q3yyN3ucNQ4w1scv7E8ehbHda88k1skz7VinBv8czqCHEeVnKb61Coom",
  "key19": "RVD3Yv8mCZxwLc7cFuRjDF7MyEttQBk1K2QRrCqVueAtU628jxDZHP56wAxhE3UJTKdXYGwyhWrQENupbhk4e2S",
  "key20": "2QBmZEwRUHCjBXLvXDajMLeX6daankL7a7w79SMQRyvLTPRTmCTwqyBNEio6uBk3raPbPEhfStEpHcaSn4QmLfUg",
  "key21": "3yajsbcoYYU2bbW7Uiue2K7U5Y4LnixMFMhbM9niBnsDcMZ4gqVyy5xSzYjprNzMB4bJdd68QstWsuC4nGT5bMee",
  "key22": "2fRkavTLgyo2XwMziRVY1HQXConCb2cKZS9oC2ekEfN7cu5zqKZWbDJ8GBdPxcFrKAdQHAKm2DmUVRptWgBTML9b",
  "key23": "4cvrZVPyri6ANYsWiQmJvkb5BS7GtaeGfGG7nJNfjKRKZdAyTDLYitzxa3XxeCtMcHeUshXzvf45tngA3PuRFVFG",
  "key24": "43cCqNmQkwhrLHffFrQe87TsdsQzcXNqDsTFTanPntPKzmnrBnCCFa5vxyN7cCRwfwhbQiwwSpbBxnSKeqRM8L1V",
  "key25": "5D8TiyynRfWQeMLU8w1auqGPm3rEaT3DSTzWCXjs5Tq1fzDpCstxd2jZEzCTMyo9CK6PAVmJyEfxkZcmbTqMRT7V",
  "key26": "2KT625P2HrGR6KfcS6ei8Gia6fe6i2CWBc54quBXBLEMJX8i9R5smLjCsQx8pudpGrWXHQDKj2ZTBjSKcsCXhcWg",
  "key27": "pXPJcbL6MRhkxgPYDRHThTJaxDG7UqwF5Cyo9LaU9dUmwrSvG6JpovwamPuJGxXccwVgYqWWeAqWghS6X6hgHYb",
  "key28": "5DKXjpD1c7cEVFonhVUZ81RDCG6gD8kpmtqHKExUoUcJmjMB1jEz46mvYP53p3R43g89fwbEGMYF7i6G5jdAufGP",
  "key29": "Sj6iyF47jzQzPNbdt5HS3VNxUiCa2KdB7pJBb4DzSyHTDczhscpZL8RNZEk7HZ9B4fuqW3hFNt3GuJZRCt3bPtZ"
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
