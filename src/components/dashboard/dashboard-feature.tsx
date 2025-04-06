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
    "63hh9yfq1wHGpb5CEitvVnqgxHAsLqQGvkVk38J2GXZbo3G1CTRnLZoFp4mE7Mcu9f2dfFCdwtvG73iJh6zbcCTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jp6mBmmGeC3Kqxw6mN1rfGZAnCH3APWkbJHR4ZfSENYECq5Hyerjj1BwtVcASG4aJQDpBshMX3qyJNFXW96ZWHv",
  "key1": "54R7odjVYqb2EsAfDsf4byaQbYQZyMtVTGPFrCs7L4EbQcYVyWN9ekoGXHoLHPJh2s4bzYSB6xhDuiQsg7hsLdXw",
  "key2": "5FFXP2KFGvYPkRHmuWF1pEzd5h6wyQsn23AHBcoo52zeq7DfUho2n3bn2CQrqgzV1szMyAGsFogicb2SahPJkMn2",
  "key3": "4RiHMH7uqoAtMHBJZxQkzWQHBkykcD4cP26eGdksdBEHmDYcp6V1WtKWxe9i2to9wHq9ftdXk22tbjtqn5mxZAnT",
  "key4": "2zQGzzfCmeSo8S3eh8PrRQVMiG9BA4dH6b3a79iM5QVa5djaVDHYfXWxP74h5UsbM7zXgWZmJh5UHVkC2CYGUQse",
  "key5": "3WZ3eTmRHGR7uuQb7s2Kkc2nojcEC33aF3d8SwVHRzDkEL3S9yHU69QEEXJfPzxkuPQ5hoYKMmzwnQtBVckVBapZ",
  "key6": "2LSnSdPiGjVS3FY3o3FonEx7XbhmyYYX194w5an3Cp39BZrUZhSbyAgGWdjay4Q6Eymk6Z1oKTn4VG4VnEJ6hXQQ",
  "key7": "4Zvbc5mR1SgnEuqjNuoPAPdoFaKHPTLASvvMfJdmBiAdc8365gJqR4D9HQYG9nn2XTuGTDgdjhXXY6Qi9r5s5wW4",
  "key8": "2DCM44YuLTKT6wWRz5hkazyckP3xxE8hoG7CbUg11j6YgroZSm2pFofQFXzwsSUYAALK4wpknof2esiuauf39sKU",
  "key9": "65eYYJFfqRf1dectxe4vqHAHiWdSpQaqJhV6UxgbGnDtgbXFmh1rCVJwX9pqCKb9zvdCJeArhocEpUDc4XtgNd6C",
  "key10": "4Q5wdaGJS6saQWwZu2dvUC93LXiNfmgaR6eBLhnzhNwQw23sBNhDXSyDiAQTHXTqquRDjSyfa4NEkcv3MRHB8TAs",
  "key11": "24PU5J48Wy4QsRaFpQftiaajZNAcsBeN9BPcdyHMpJU33m3upeY5ShzcrZiwaivdExWfvMrzx7Wh9RVPTSybx9Jn",
  "key12": "2PQJYoumU2QEvCneiXv4dSEPtksbF6Fk1YN8wNB6kStgNMaD2FmcU3ZnC2Ht5zmYR6Cwr2v359kqLJDxQf3S3TwM",
  "key13": "44CTn7xVqrmDoQLWKRh8b9PNT87Yd89yrcVaa5oBf5mqPWZGWKt1m53UZdyvv2HiCdWUy39ndi2ydeyHZ5PkHxaw",
  "key14": "tS2sr7hFyuiwKhk9PT3saAnXAsrPYJYHBgx6XsdA97fnZzcQQj9ctJVLUFqEkdPBgrypzsy4zq9VEDdhcbRnfuN",
  "key15": "nRFX38dW7wFrUZ4peRCt5DngXedZ9XXQ3g58GN9gyYa42z4n7fyVinEw5z3fERs8cRWKPLth6NoTwgHby583LeN",
  "key16": "4uKyX7kaGeXFLfRPtB4EumKK2KAo7sn43CDhX2MxRzgo6kxCJdtsRRS2AcNbR4nSFbS1WpwcyA8ptyjTBQkZRpYv",
  "key17": "2gWCYEJnEqJMZCdQ9bqwDBnN6BvkcvuBRbhsus5mLJpVs4xmUh6E7uqZWyJAN4F91CPRCWARLgVDEQK5S2gDmKyt",
  "key18": "doGKEE9B9QnzJzDXcjSUTRn7SzVuD3BDjLBJqjeSLeBJJHUNFKc5EGeVqDPFLK5YiCJLrY4xctKjdzhP5DkpA8f",
  "key19": "SLRx9WcmV4xWX47o38WtvgReTSsRTiZXNwo3hfT1SJmqGcMXUYBCTCQjWUZR1a7Khvm73GSr9tn3hwsVH7njcgH",
  "key20": "2f7QVLCqxf1jjumCc2N62wzFoHdfJkZtoUwvqDiNujv8R7H6Y1pngkAKLz8XUQ6NWQBsm2jQGxCWG96NK8jTMVyL",
  "key21": "29jM6rLrQY7YoWr8DzEMCjwoosNgqqfGiPbqfTYQecjaGjcktRuPUZhNEYosBf7RWtfrajS2nycPCFGj4YsJMqGD",
  "key22": "3f9GXFCroMoqGRMHPYyRW86ZB9C6zfJYnsab3aLQAxEATuB1nJm6tgNazzgeLs5mShLsSr2tx9uc5vFnenwdP7cV",
  "key23": "2DtcCgwkaGsGNX1bf8scZPaerfsDh4uzkL5RFjKFczMQpgfzxCuEZ3JUjbwRicZ96jcZ7WCV1G2ebtacSwSike6V",
  "key24": "4wn32uocy8PV33KYJuBUG1bkQ9fs8YsKpJjp3H7xmRs6mwB5KejCnpASLrNNxWCjWPkbL1KJXG1thbNgeFpJghK8",
  "key25": "2w89gNAdkE7vMo3yuAMK68DfQdHVYXc6CXfp772jYbqCQUWkmwo9Zg5vkLsf6Nt2femfJuDXvDN8iP7tURrQKt79",
  "key26": "3hC1Dh2YT5BNe4kPpzUo884n4Fd4wWtkcSs3B4nb1JYC55DjBx4E23Ajh9LHDMMpHZXwA1uftWoNfxrYXbqTgu8i",
  "key27": "4D9yaLuR4TRcLJQmo4aqkqr3KZTfJ2Eg5Zhcjv2sbdPKBrq8aZn5zWUKw998qYRV7iFt1X2e5bfEL68cHAtw5HuU",
  "key28": "qPH7pzCYYDHyPnbWdSztFa1g6BUhRyLDXggGsVY8wDDFaVt1iFGBKZGtiqxeF4P67gfh4BRzUCdhQcYH4yEtHk4",
  "key29": "5M5VdZnjG8Z2ZzCt9X33hHdq4Sbzp5Hc4j9KZGsA8UhWdJdt2xjPRGQ5qiPTy8RsHfPGwaDDV45c2RCj5KAnzkuh",
  "key30": "3EFgejdHaSr65ijQgD5Ke1AkGM1RHLVrSic1wc6N86AEVKBcsn3JwX43hjvFEz2NDet5BmthQnE7Lr1KPa6CnZmm"
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
