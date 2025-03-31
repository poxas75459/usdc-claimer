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
    "RuooS5s9qYiJdv5G6Cntjb5pcbyU6xAMWps9NwbspGni58Gvde9AzqXdqe7gwaRVTopqAXT4jR8w6B6BW2gfDsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uq2FiwWX3zfdsWWn29Q6KX1wyq2Cmz9KGWjEGEHAFTW4mFMzQK8eRTA5JaUssiaMMnM8eguoTzcYuPBqG2VZ3AT",
  "key1": "wCKy3xQA6GkCRxJaSUPR4R89gvVyZz2odeeKZ93AV1BpSS8GkrrdPkhkWr4VueCaJU1gmTgD2KuHGgBn8bEaTVa",
  "key2": "4ZhWYZKjijcpo15QUsTGsAWrLbPNkbdR4reWHuRyZZbgTaCF6QCdXHc5y8TRZzEVnw2F8SstnriDxMQuXat7SqsW",
  "key3": "4xxgPBTystoZiAyvn7yXpvaEJdUV7PAuyaG8Z2fqZRxTMZ81xRsYaPZJJ4kLQ4AdizpkakfgyGhnx3PF9EGD1u3D",
  "key4": "4zyhB6B6CDHNg1ouDy22RNkZWFg91uvZTG2GGg32Y5djG4Kfx6qmkTbE5C5UrQDeBiaMM5wiZ9Lez7qBsXyrVW56",
  "key5": "sKHrEnbGY2EKt3DCZxLFLUVNWcRx8mtyEM3sbDpoHhAfzQmSsYLm6uszQ1ERBTif19obJPmpTvSzMXroBUKHKmJ",
  "key6": "2Hpp5w8A25XWrRtV79DGqx9nFCEA1gR38i7Mqm9is4DoghnUHK86h1fwF6THaLRByPGDaNgcRfD9EXriPM2iXUvA",
  "key7": "3zpDiua7JASwHfoVGYgoCtAEEGBmAXz9T8NnJUmwaDefbWatNyeZZ9K69YqA36rE9eSprhWsU9bRHoHBkxFWddEp",
  "key8": "nTcSFgaun3aEP96eD146gxqL3H5FK5kh8K2AuQyDMHGX5GGZcZeZUpL4d8GdqKYUDLj3H8bYJ8pGt6HE8kkFZD5",
  "key9": "2En8aih8mNy4C3V8VushMUb5nazxreW7kifuC4rNupHGCQFdmL9rzAP91mYznKsPr7dPjhCT5bQujaJUAABczB92",
  "key10": "3XNW3gvvQUA1Z82t171BvvTG7w49m5dmgCEVvVm45KjVhqQbeoiBvXS8XGGzZ2xisxENY5r9ZGAmMcHx6ATPR9Ro",
  "key11": "66itBUoorMz6V3QHNqpqzf77AU264GtK8QA5W4namwZ4YFyJQ9wC8g8fztZKVrMCpGHUiN4T1BYgQpez8PRiD1LA",
  "key12": "4sFhyjxXTEzn4QEa61gRbqtWUBg27vQ9PSjBYYRob3E9osNYgDxxnr3gcDvwRQxcAZEdMSrakKVLXi5uovvgVRaZ",
  "key13": "5ofA7KB7wmYirV37y8pjXUiCt7PQc9vAqaVs6y67XVrf6yxjTb56zmmDsWjrmoeRcdd9T16h4Q2Mto59AVfHuU55",
  "key14": "5RayFCGx1tqbrXXFxxxeVTtHutZGpqtwFr7akTfzeQ3vK4QgbrvFLQsXNAJGDGpnLTPV9XgXFtWQGDThJax6ByLU",
  "key15": "4DaPrrHHqWmtRvX8NV3acz4eXezuDceSsJi98TL4gHL1CHBcZeLa9ogP7Jz6qz4FmLtfyLVeoYjCm6iwEzR7Fci",
  "key16": "3Ht1v7wvadYdxPG9fsVHSJ9ywicf1dfJjV5kWjAfZpA9L4uVDxeLn1EY747JCd1sE35iMR8Qp1wNYjqsoezPBnRG",
  "key17": "4KaHcqrFEczL5BuZpy3WeSvsEX8SjWnP6EhYUokZPUJzsH3BvYHSgLKMhokVCe6Z7jvZSWAshdWNymZB8HSfVkMw",
  "key18": "47R9GyFmCAUS66GQY9pUanLZ439zhPztpa8doxYd7KWt44RvosB4uTwq7gRdeCHVnq9hmzrLYBWkYC3nZyNjzVkh",
  "key19": "2oDHCdSEUazRbUWKAo5cgZuYMr8gjeTKWFX3xSZCFakhVyWdpgd2dBLskoCQ2cdzd2gp1GNCD2gB1am7LcD3oJsP",
  "key20": "3cXQGGfJaNdP1hre9tc3eYcKLmr1Zf2XfhSs1WW77mLViRVX1EXeBpSGS229rFnDB4pDRkhuxJVeJb6qGdD49xyn",
  "key21": "3cLVG8R5GdPrGP9hF7mcXHB53TuuPdbvxgXnWSgoYzQ2RhiqM1GHumTzDo4EyRUvgv6Dcz4S8kbnavEwoNTVh3MV",
  "key22": "4TDCNoWPSrugFyjZpkCCYMwhQXnJeKsQwTpN4h6G2QdE9EkyJ7tKCU7gmGvayf6tLncZ8yyYzc9ctas29F7gzpY6",
  "key23": "61c3A4JgLpZTqgkGn6d6FnxcpfTZxLadEAnUuZPZR9id6THYYF6nWf29Pu7TRjY7Xsp5XdCjbgy998Lu6y2GYZyf",
  "key24": "25AsZez8jpiGDvZaBqsfjtBXz6nFsC7DwZNi8w3hK3dKWv5bs244b1PgXvEH7SyQCo1nCqd73ApxASTHDq4wUGxw",
  "key25": "3ctgFUvQE3AKKMtAh7Ab1TzFzvc3wUFrzZLcKmZtwYPuqkhCApd3agHoeosTq2a7UWHBkUdgc7MVuKjUtHU8HYdu",
  "key26": "2jJ4K25ioBiz1Dp9MXn2mfWp3WYcYPGYFsKYpXTN3vsLorEkw3QTk4hU9NDCEHRASoxp76pniiXzgqNC5Yc5N8Pd",
  "key27": "3jSkJkHpPUsTgU2ah4MNHfvw1TKaJAvw56Jt4EcHRjYjMB6kRn92HBNKBJrPMGf1Cp6ESJmMH8zdZfdEtDQBS3DY",
  "key28": "5hXRUntiS6eLS5WVjyCXm7KmLAstezwrnsfTjDg9DBS6QPNakpgfAwUBzGShKxUPGsxXVqgU9k5uPbaGDRJzdvo8",
  "key29": "5c5ahPWfJWFmBeBRmL85UPtkHLUs1HgVG91x8CGtN8VHDdrumNF8MenykWeLVqUPqPrbjwSwRyVEqpTTZNvd6qTQ",
  "key30": "eipiriPaYNvgFJnjMvRhnW7AQjiEwuLPzAFWnWYJfiEVu6GSWCPQpVgXdzZAEAfBm3SD1GvNQcnME1sEEEsGpCS",
  "key31": "e54V4YYLYLPa9P8NzmE9FvW8uJh92U7yxnY5dcVyafeVrXw7R8VfVgAeMJxvoDYP4oWPUEFtPf6tY3ocxcjcVXm",
  "key32": "56Aj8mL1Rj4eGvaV3ygBeMLkhjBn8HXGjxZUnkfQxwiDpMG5w2xBniY6P4jdL1wmiY9aHdpzbwJPHrvpsNCHbCwx",
  "key33": "2Pe4MFqXdqJWZiREqtqEwGk7h4AQD7XNzqb2B4HX6vCrNoPS5pGZEwr1tmko7JvPXquF5jnHaCdKTYknQfsPY1vy",
  "key34": "3iQWvWCDXUkCfTbVZ5eYTwpGAxVmx3yvUjDs9nhvzLaePS356UxxFwvxZHe4TbWJFTb8SSDW1DRxNtkckKdNnPNr",
  "key35": "24S5xVT4mvc5tcYVP629fafYpL9vbWSXPnHiY13S7CcDhA5fWsADeANNRQKWqaQFmLKbmaYKK7ztxBYDZdZV3KFj",
  "key36": "5Wc8FHq3cvfEV2NvwioMw2cfMoLc74opwH6E9ioxWZATUG4EoaAJxVn1Tm4P14BtENV8tShNeU6hLo34G9kYWJUa",
  "key37": "4mo6ExvsxU7X4NoELCkv8GY4bcCXbHa8iWb9bxoZx4pRaXRtULBWRJgMx2MngcsZKUEQ9mfdsZpXPBmm2LvFQ6en",
  "key38": "b4ksnRJo22JH635LXdH8DxJyLAaPzVWLTUZ9ZiJQCSvZCJ4jmMQtgeY8FAnAr6cMfFNVUriE5WAVkuoTgFWPDLH"
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
