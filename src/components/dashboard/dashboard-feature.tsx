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
    "31TsqNmxVoRigNev2tTNxwUCG3QUjSP7qayhntTwmcCH2jyhHbE9XdEM8NyhgDJ1zdxtVskMDkjS2XBhwfBgGbsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5bvPXyMPoPFCRdPzaYvAnFMTxbQWcU2HdkE1NvKSHqnLxbHNYNe2oQ9CGepPviR1z95EXbFXbjYqMVSwx9xRH9",
  "key1": "28iJm6bKeKJMxv2ejzHUpEr81uxpsknXDUA6g9rZaEg5A6GZLhj42fsdnFBSufFskBywUQNTWzn7hHJGizNajuV6",
  "key2": "ibHgUUdAPUJCQPJrc56dgThsLLtvM16By5aUmCrSqdWfWoFXwGtPhc2JK6H5ESNMe9ky9Rbw5hp9JCvxt6Trt1J",
  "key3": "37Adb6Tk6QWtVMDKkKxrFzZpYjHj12ufZgk7JPB2bpreBvyERnL5ukBkpRNMB7UZid37P7sW6bEirc1mVogp3AsG",
  "key4": "3z89WWcvw8EyifoLtTmwC2cpmzg7cgemM7AX8Tg8cVxVfyPRHjd6UDbfh9TJyExwFVKyqfUxDQZX4KUQqf1QhEAr",
  "key5": "3GTJRU8kPef9rqahUqcRbV15xeBWxZFw9RVmTxUopTpb4e5QskqdG3tCEPhN4q9Mdr5DLr1vFbDU5ZpHgeuMBEpd",
  "key6": "3EXDMRzduZgvDAPVezyiCSKUttRu3PtBAe8izEKb3Zi7LZMkCb2KcbJPmc7Y2rKaqEAdKPpHbiapwe3zFnyh8bct",
  "key7": "55VAfQvxoHStFWuo2rJTSvjXMkhyY8ogbH3pZzG35TueiaBwMyXXzeNJ287ex4ERkm8YZmCJkS73oKKC6LGKcztQ",
  "key8": "5mTjXzvdvwcdpWVZRCJzw9dMC42igigQU9wPtV5ffyk6knZDdH8muCcTZzYnDnYwvB5r8HjpHHSG1YG9B9TidsBk",
  "key9": "4Cv9Zpvf8qeEoUpm6mvvf3d9qqFAdbwP7seYiHzU3CPC3K81kiYMdqibfqcHxYKNLoWdA9bf2bHwV36Wv6SHpupK",
  "key10": "5pEsB6RC2LVHhoUKkjkcjobEF8Y7QmTirstosB2x2km7xmS1ZYy7Fd9B5e1U5Cyhn8LmYWaT686ynhZXFvWijfuT",
  "key11": "KJ8W8d94sFP3D9TczBg2tEL7z8gs2uHadpPrbwPw7rciWKWPGtWXWHX5acTQo7RhiYb22bEXEUpihHWTrDDeMuw",
  "key12": "F1oMn7Z4kU2RiBY3WqR4ceazSVTQyTH4wG2tf6f7QpsQgkn9rYjbaXQfPteKswhd7i8NbmZNpGJ22UpEk5cTS2s",
  "key13": "4XgydEtDyzC59Yd9Wvf33jh6xiJPLosTajAbJS8iDQMkwsYy22fnD3Zige8BWEAWmPyRPCh7NByBToaXdSph3Kdz",
  "key14": "2kbDqTYj1tG6PHppEGXv2CzFbo1EgjmSF67rh3oX1VwEFtN22sprYb8fv6tsPYncoyVCcKLVXrvn4tgEof2jyeq",
  "key15": "5XSVtYeRDZLKLjcF2opgV1p7ztHg6hSX3yFSDK3i2RX7zx4x4XRv4SV6gTBCpbdcBgt5EvkLVNCGK5fWWrSSaKcf",
  "key16": "e6SH9BKrA4TBz8dhJsVqZ9PNKH63gXMzidgF8eBG8JJZnMThd24YP8hLw9J4PnJ7iQR7M5QdJowyDvsAmBbUySd",
  "key17": "59FV82LVW4HQqw4VswJWAbGJdX7iUKqSqPgZruuhFhb5wEUsBFhG3EEVz4PV2UnPztAYU5QaSXxmAQqQqcAS9C7M",
  "key18": "5ux6epaUH8qUN5gaYX8FiTzoZ1SVqioUn5UripQqyyxrxrAziES4XiGYMpUqQrecjuKDh2KkJA7oLxpn8KASUnFA",
  "key19": "2tTX9AMhbjTU4z6ABo8nvFXjRyeK98qtER6Fkt8AwE2roN2gjLfXPP9Q7S6RwLxC9ypmzLhTYV6vAUfGiim2V3Jh",
  "key20": "4tRQhnp1FUq2pP8NKp19FQh9SZdZYw2Nf2H3baf1wghgu1PV9WteJPcGFcQNUCXFMYZ5pjRRhpgfZsZAsQwFkX1R",
  "key21": "5TzQ3EmrCmiPqVTVHjtv8SZWmsj94zHCYgxUfMAyjsBEiQptguTJNUpYiiaNNbXxFjRRVyUV4dzWhygFTfPsju25",
  "key22": "3Kcfwwc7wp9Ajg3eXPumyCQJuFzBVdgoCm2rWndPz2farhAtuotEyhDKQrnozgDvxB3umiBQtEp4j6wQq6WbJkZF",
  "key23": "4gd9weYv2fjMdRAm11353SdTyNHFfCWTkZbDry6ya8hB1u7PbPWvt3wcsPkExHFS5Uj3kcQhMLtRW5nU7fecqyCj",
  "key24": "T1ZPz28L1qEKtyaByRrBce9SKADo7Xyshv58csfRb6rsZb9KzZYVhohQSZJyk5x75z9VRARqg8QuGERiCD5GeZS",
  "key25": "FzBqp3GgVHXKGVvNzjucQJK8FD1FYqerWNFiADjAy84aXn3gBwbqh484RqtFmJgET9tqNRxwVbsRc3ypm29atvE",
  "key26": "iiGSw9pY4rK4o1C23hJzVS2KUXEDRVodquD8MhskeV5MaKGvWaMFC6QqEk54YwDiXAvfARLgFUsZnymMcaGZQaG"
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
