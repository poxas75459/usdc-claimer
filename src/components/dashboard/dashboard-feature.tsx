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
    "2s8D2zASrefc8qBT9QBEsTkD3wXVZx5xmZjXvGLTB3mDVLFgHfVGN7BRuw83qatFPzNKSwgK7fyKtTYD9ZgNgVa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGnTq6wYrMgmre3WPHiGT5aY8oaoQdGF1boSZoFWwjnwJxajUyScu3YjRwVdtYSdWdBxV5aKz14UdpkmQcmidRh",
  "key1": "4H8i8SyvfDN2H17odMwAUtJhHEV2rCVSz8vMDXzbpJcfRD3efvsHbFe4S7Fb8R4yMhHuXtadsvqFXJL17neo2vfx",
  "key2": "54vuRCG666gkaqpuPsewnE2usZtN84R6ynBLX9oA7p9HhwVC2KAKWKSWqasN17PmHXWBcAJxzDFaeX3bjSm55Ckx",
  "key3": "jptMEbxZqj8HjtypU8zLDhmtuxfMESVitPcbghxjd3Vu8bGLRhvYH7ob7DRGBE5a3FLtYUAuBa4P3TJz9ijuFQi",
  "key4": "p2xqY9re1afnhstVPfZgaWU4ChdQXFtvMykqxLSJYX3LjPoxA4Pj4xtwjwtLzDcbsajLhWi85GuTuLoynpQqvws",
  "key5": "5sSjhMS9ynCd6KBnhx8nj4LXVJGgFCAJubD1uXy2hKkjbM2h6y9BCzsxjaWeXPY6kmsSQgRvGpDkpYypoN6ooHLa",
  "key6": "5LSBeerVdvRtKVcGBxdf9S5R1GLbZWfy2MSSe2sExnoWsFXat344MF1uedebLK3wf6wznsoSzA7s7CKo2YNLmA1j",
  "key7": "3cVXr7Nf6ZGy2syZLkPc6AzJJB6czKd7TTu5CCfJs2suo4LgKaphewYre5Lmky8WcqfojZ6oSuELD7jQBkKMrnk9",
  "key8": "5DY25jzLw7NHrqs1v4SzCEFrteTorpfftMpzPBVvzFHNbppBgQ47cRXxj6sWU3oH4Yn6LkxXKJbh4X2Bm8tKrggn",
  "key9": "2mPoUCyGPDMS1F4w1rxXPH4cJNnfRTZ8A7mAAEiryL1Awh8JYcBoBdT1UAcSN8A3dDSJEMoRhBvoE2Xg1VX2aMdC",
  "key10": "4hLcKcxM5zwyR6MD2uRBHF5oXSotwrLgqKHRH5SWA5T2PXszeW2zsEUyQHLmC11b7neD75Dob6KW1A83KTABVmnM",
  "key11": "2i1Ha4n8S6jsV8w6VzJYED3WjB16v6hVgmGqoGxzEhQzM4dqpVy4vpN59ntowZXUD7eD9pSYMtNe8Eo4qRj6XEzD",
  "key12": "6DPN3GLAGuic8koryc9Zjs3PmeE5CDWKSpcbNFnezskDHWQD1xh33vHJfih5fCrGi4LYrkSdzYEy7n21hEQeJNK",
  "key13": "W5s3GayRPyYVsJy39obYdvYMaQfWMRKmcz4An1LgD7cgvmX1WC9BM1h3HgA23pcFg9VNmLznC6SJhQ8yEHZTqLK",
  "key14": "3Ljo4JVgN56t36GxTCc5f7dVkySSs14o7wHuZHYnhPTr2Yja1xYLe1QkQ9j33tx6ptyAULh2VJZzEbQd9Kp5fTDL",
  "key15": "4g5Kqqqq3sLYPGWwQrNyrZtEfVbzVsSQ8tiSuwwj7Z3BTTPym2RNKnf8bnev44Vd2sWeXSkVGC8vMVqqJQ2yQTt8",
  "key16": "2XVwE65EFtfk2CAZEkpLADQdQXUjKYS147TjGmQR9XyrA7iw8UbxakTRCBuwUkyhJPKdwEwapmzaBzug2btWRahu",
  "key17": "2LacBN8TWEucU3KpJAJrXJ7TfkfaNsY4RVaaS7g3bpBi5MxXgjuWB3pvEA9tei5fQ9AZrNoiFvmbQCJK9ct7UkJK",
  "key18": "mQqGpPjDjZzW52pDtqPcR2KrgkYTADFA9icGRF72CueKM9hUQ5hF3aPoXdq2LzRBVyKgnr8zfJD2oVM73kYWDCa",
  "key19": "2Y4NiiVndDLHRWanxHQzPHKmtmsTJbjKtauAVwaE6CAcFrxXm5JHJ1LEUdr26Q8HCRfUZvXNPJEWjJ4W8CGpioj7",
  "key20": "5shFR1NLm4L7rnyvZfekv6fNGiyvpLk45zPJu5gofNJm4r4L16pZXF1j7E2JtZL2EXQazj8PHx9WzjsAXK4Ncgs5",
  "key21": "3p5xTDZzS6gRGrfN2Fr22fyEjYCJV6Ljg5oTwYSaursLsoEbACJ2hCcAnVQyJ5SqgoCfFbCApyvdmoFtV7ckjQmE",
  "key22": "u1zFxtsPVmF3wq87DxGmez62kbZmDroFa5BEmRE6SQoLbsjjC3xeytDfCFvDd7MNjXfB4D6J5T7x3DTuxNS6Uh1",
  "key23": "5EhnhBf9nkTDAXQNiSfHjgmHaftUKUxsbayT8LdQbLTBPXC6GXmR6FaDwSuiGFsEyGqbuejJP51AmTeV55U24mdM",
  "key24": "2kPpxE9AyNsGFFwapizC49JREbsfciyAbT3t62HgEQsxW8eTCntsQm5LaTFJSVNRH1XKvz4Hah13b1fosU8TdEeN",
  "key25": "2msc6LqhGR3qSpyH4AUZxvjydK2Kb3Giktf3ckzHu5gTrtpkEkyWCfcszb4qbG4L7rPnnb1hS414CvmT6nbygJsU",
  "key26": "2GdybFU3JE1b2ytMwctocWYWaYa5sfv4htmsUh5dsHo296yXC4UifXGLA7iriU2HxjtEctmVjiU1dHvYY6Le63RC",
  "key27": "48Nu5Q2UVM91SrsZY5h8ppkP5DWHKMykZQUQPR9SfX26PmSZ3FfT6FVxSqwMgaNJ7BpyxVjr8XSezWyiEvicZbcJ",
  "key28": "9dWJ6vBNrEFU6SeamxkXSyVnY2UBqzukg4U8g59EVxrM9eYGQUVqXDFoy234GAURuUoR1p773K9zrEsZrdj6BC4",
  "key29": "4MQp3kHdhwSdEw7K1rs8My7kuyZ6F6vLgLcaqnVF7srz8ED3a5Az8sMJJf5U7EuYJURXdqSXq4HFn69XdPXXCN98",
  "key30": "FJ9YR7ZDzDe5ktmL2rCZFDh4C92kpeY7gPs6UsudQe27rKTbaJpCGq9XqcUTLPDjchpoTdWDdiNxQCTMPxhndYg",
  "key31": "5e1MTEwzTnv3LYLiiXdWgqKZJ2jP3pwrdtDVaXBA3wdpDT4QKUQr44mVTYj2H3t5GUNQMmNMcKaMdSTzU9iV4bhy",
  "key32": "XX64qcVym9EzyjxXYVEn5K6yBSLZZBeKuqokWgpLnLkdKEJ5D1QZLbGC5f7vntswpH7tE6GDeMxGNPBCZvwQJ7U",
  "key33": "LSFe6eCPTourXEyWw9bxaLKEwv4wjwKDVXPsywUTx7o25usvtBos79qdRKS8LEZzMppiQHeTLdf3EfXF1CPRfsL",
  "key34": "4cYkmgXRHjGSKWcrcSCq3HVByz9d1NK9eNwcjmGjB7ZH3xTFn6jD5XnGJn9K4kYqTg7A4wVkATi3qBjRFPJ3SWnK",
  "key35": "2PnS3pix3RgVD1tA5tzk7CWETikEBQ8JcKgfaFVkDkEKRLeMBY1UMRm7mTddsr9Z5rBY2qTHmndSWHNPB3h7KcVE",
  "key36": "3PV1mGDu95aZae5dRE4qKBmVzDXZRvt2y9MF3Kq5F8V75iFCkCN7kULK2Nb6ca4R4dMBN8vTRuuzZbLXptu6v2EH",
  "key37": "44Vw3okTdd2iho6ZQUimfmtFAKvwa5Fy9WEwB9MvHZTDA6bSj36thcwZoM78yqdXHpAAGD1t2T1qQTiFecDxcR5v"
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
