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
    "64eiARnnjpT2rVhGWy1VudMRFZ9gMN3nvTgjWo8jNaT3j6NJ6xybTTPZDRT2GjT7FTLHFNJKR14Du8DsruDEJsdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evgXZ2X7govJwTmYxEA5A4iNCCHsXCfU4kJERJpxTHGCk6hsMJiUBGM9WnWGib6Lz9x4GWz94V5wCovaifKWN71",
  "key1": "7VSnntbzutyaAEDpeQAkUE2DN2YVUX3JXBWGPTHCW6P2RsC7KtWXuK6Y2JVugiNmzEooJW98wf7w4j3KrsnRwYG",
  "key2": "5MN1vxgFsWVqcMoGLKXgk4fTRCxt74n7KAMuM51vr74jCQ9kro7b6vjnYhEWXZB4jmw1Ph3tn2Mb7cpLLMzrMPkr",
  "key3": "s7csdEeFCm6aerKdFZoJRxwALWeVPM7rLvTVZZe7XDJKPUM9XPTiAnV4fYJm473a3JVTxnyFEYSJGRPtyUy3vWC",
  "key4": "2VoUY6gCCWj2yzPm22DLREery5Kk2kkwv2wPs25cuzd8srffiTw22CvjZ4oztTgBTPfxpmm2jyMWQXQufKdXvtit",
  "key5": "3NvSkyMpch9PE1xBcF7JoasbKEgwbitQZecpfiFJuws7KFeDNtUiE7eMbg6nh56QDZXJbzWrwDwo6evZeHzMy6Hv",
  "key6": "3cniakLGrqzd1kAdQHCsRpQfKsuwPnCPZBEEuGKLDTK5ZcPJ7BedgDsgWboYGa7hbjWVSvnqUSg5GUvdiuRXE9uX",
  "key7": "4kKTAZszQXdQjUBzGFGocL9GdUSFD6ES4GLpsg6LP1P1AsmuY482m98pPwuWEumJo4bPrxKvgQcQwApXFTX5idMw",
  "key8": "58i4aVAAzW62FhB9jD5gebQ1zVZzRDwvX4uFBpf9C5yLsx9gr8Jb4MqkdTzpJwEoNK9vuKhTtN49vvvATznE7sYC",
  "key9": "5R64CoqpFVjaAQf5u7fM1CnsNrHWX8DJYvn9cJrp66Y8RBaXv4PKGHP68GuGo9mTk8Hib5gbuznwT1wZRfQT1N2f",
  "key10": "3Ucp9D8qDeUhBRyGCKcyNr3r7evcNNByL1qgh26qLyMdmK4X2uNjnZmrVdSV7MJLoijsjxjRgmrqxs99tD5EGFLo",
  "key11": "2YvHx8E9s1uFuxNk18hCJSerDnX87RJckxnq1t58wVCLApBQorVwAYcoGVHUJmNS3UPMrVAX3rb6Puka1kgG2v76",
  "key12": "nL2AfRihCAayo2fnuExUyGzizPcxyMyJfyBqfX9iFVBCGcoNsudoPDRn7FfEZpTGGoUUw7xzToUwn1t2TS6jmXW",
  "key13": "66x3XFFqMpPCA9kAM5NGpnRgoyvt1fDWjLiFEgDu33C8x77NyXgFx8eWrx9kcnAAsAiLeC7jX98jbX4ovZ4eak3K",
  "key14": "SCP7z9RCGrYaWRyAJ3S4UCUsrfQcgkWxe8uUsNxuAs3rfJ3umYbDBEmeqkX6CEm84EbnCKLQamUqR7nDqTt6tF8",
  "key15": "3WtqgyvL7S8CymB2RJ9hyLnKVG18Xk97rzP6m15EigiAQkk7mzR52adrpb6yqJ11CPqb5TyK5LY4QQerzenLNku8",
  "key16": "3axEThLJ1bQKFERf7yHm6GCq5xnRNkzMhmQxh85CnFMRTiN3RzP3r6UMr5xpN3ZzXtH5J3JpyDarLBfQWUhuZydg",
  "key17": "3NbXjWvdoPwnPKxsXMV56wdQPH46iWS59N22idQvJvHQVowc8j6A5pdSk5jWjdXjyJqtQEvqNifr2Wwt3v44nhrh",
  "key18": "d3j3zKwhLN2YwYh98gznVCJ8cd4VeKVsGnwf3gEN9YjVR6HuQytgRv8RbNMCSTEHQZh8Qv2ZdzDMQSzZEEn22bt",
  "key19": "3Eda564oG5hszPSB2sAxX6fnybgcJuas4jfzXida4WgB6QBkjnKqNW18ATnSfpvZp4R9tusCHkcmFe2tkejsP2Bq",
  "key20": "2L6haPF9JzHfiM1U3sh9PcbkHTYeLPxYdK5S77VNiQsEVGTtkzfEpq2LBnviZdEFVe6rrvaiPpuJN4cr8RPxawQz",
  "key21": "5mw6KiuDunDHEHougzD6dhh3bQircWAoHuEvWyWcvXuzUDGDn5Bv2CwgPKRaFdgMtDeUVC5gJff9Z4KtiHDpcxn3",
  "key22": "5Uc3UkBsof82E9NMnUehYhjv7b5VEA61HbcraW2uFdyKN71ErDgwKfe1kGCjPjWtRydfF3zevZmM7Bx9voqNVw6w",
  "key23": "5QPRPUng8Y6LyFVfFnCAyNkFd7Kv26sqDirYk9Dp23pqLVpFnyipQXkK6mzLq6vxWXPd2L4EXbyQPSX832eTTat5",
  "key24": "3aXTHMn8f6nZ7FMNkieaCbDbFwR2FL56M98HvRSCpxTKndUZHhddciPNJ7MrVLXHEK7JKFYhwUmXBZNsu2huUFhT",
  "key25": "2R7M9RmToZQagYYUhTXvofb7Sd8zEZaDRhaYJu55PHYnDxYeMrN2nJxZpYKgHrWv6vUH4mGDPu8iFGSy9buKSE6Y",
  "key26": "2EWEWCouRzjY1x54qpYwEHKsbFefhweYv2gwf6GNgn8Ghw2643RKkP8ypZQHsuccHkEB7xBJCkudiEA5GRMGyNn1",
  "key27": "5FL2xXzVdmmXup1VYJ21387qR1uxWvYjbNiyivb27974YJp4RbshgYTkciTYt9R2VjHWvDPG3TVEHRZfaT87S41F"
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
