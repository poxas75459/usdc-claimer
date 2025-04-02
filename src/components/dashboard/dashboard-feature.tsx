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
    "34P43RBbox7t5tVQZZjAwfR2bMnyaBrogeDZ9G3xxQMpTYqdw2AFSTk24Jo21hrEcoirP3Vjjr25EVktTKqFUuhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roPBVqoEKwVJwiNkVtJZq23gSTtLX2J5pLGqktQggNvvHikQXyarXYCmxxKnDFwy1wgoamJejWHdJpsWAG3ZkzJ",
  "key1": "2MG6YkRgUAGZFkQqTH3FgCggWoh62HsP8GHgCgffitCL4jdR2ZjZJexC9mUNDR8hNQmAk7oH8ffqED9xsEBUctgH",
  "key2": "3gnJaMAt2KtjjCWVZkKZ3ootxZCeosuBWwBduMupLYgjmJyyCVoKP4zpHbkhbF73hmHotWrAPndRha4FjkZduSQV",
  "key3": "abQjy2tcyM7dBWRNK4MJroYF3BUyS5U8kjDPt6cZAbrD4dpuhfDP7jo1RHFG4irLPVVgghJNWB8Yt8HfTLxn7fD",
  "key4": "2ojV5tWMF2xrZ5MNtVdMwaQ5ubvnEKMbMHEeUBSsHveXdh5nVakM5vWdhYPvXAZFXmobTJtC5U9xyekMo9L6ZM9D",
  "key5": "2ov4465ZDjZ7gHZLdNtaG3BZjqprXrghnAmLBEVDMHNDhvaUB8536xnSbafFiYrQdd6RWRJtLkFEsX1X6KxDwamC",
  "key6": "24r6bPdoegRf7ZJA6TXbVrodiQ74pbmoXAPfDA69KfWhtn11XjQHAqxy4nc9353BZ2fqR1y5shdyJPWiWScP9hWe",
  "key7": "fzvpqzzJSVeTEeucwnk9nhGueon1ifHajAjvVKqFw241Tzq9iZqeyLUW1YGv67m3Nvv5Ghpw3UnijZL19XSqW3U",
  "key8": "5JrAJo6dHNe4PohhbbhoJkgj6yMCpEkVCwsMiV4MMVqm3bPX59dc9ygx6ieR917uLSD8VDsAL37dZEhx5LWGDeyg",
  "key9": "3SZKMeFB1ZkvgGR7npQo41prv5sDhADV8LMgVFjPpA7E3m9shgbinuBAdJJKe1WA6JbVx7NjWbbBTMijrEnRHYRy",
  "key10": "a6M96DAP4P41pPxZdDFtqWaRg53FghGjVojwTs14ZrE44eir1vkZJCg3PzY8v9DpGPysePBY63Df3hhGr6qHcE2",
  "key11": "2fDB8aXxggabPpNCkDRnUVop1J2rnZdHCjzbkSv9kofHB64bDLPjcAS8ktfMpYcYypdF74Er6r5ryC2iQYrsgUKT",
  "key12": "UUd4JAb6kE8y6Vv96Rhq7yr7k7n2UE8CtLrD5zEeWz4ijAcivn1J6j3YQSvdJ4AubWQ7mredoTQjQoMKR1aextH",
  "key13": "Dq87JXFEahBM35nTwa3erwJqCbxNLu2Tr26SbCFZJMenm6BsxwQW9DA9DC12aQCzMRuT2BjFBkoyBcn34yy67mJ",
  "key14": "27qfZCYFwVd9AEcmcQgw9QSCThFYHwxahozP92NpZAgoRft583vhtMqzH1nF75h56pZgeaP9KJkq8918CHNMtqch",
  "key15": "4e4Mq8KJowZU13U9QTmqFSRV8Rwx9zd3G3SJWaddDVhovu6zdveFmkrVBEf1CMbMnw2ShLbmDxAB6APa9DN9QSov",
  "key16": "2FNqK7U6mtcuY7Rk9TFR45FkD4AWDbcBjScuPJnGDKvJCqzzhWNr5h4cwVPdxyRWwXpXJgaYAaAW4P5q2yKcvUHx",
  "key17": "5bE41XdpKtN8gJZuNtVRnwakmSr6KYBhBzkF6anakynCLCpKstjR6Q8wbrLrARCi6FyJTYFA8qskNT42LBWvWCVc",
  "key18": "3ry5x8T5ubDbePqUZU9jef96bCgC7JuUtvHqehy9kzJUPfGKV5q6mPxDzJ2JeNZMFshkCP9tWRjfKRuiR1nbdZn7",
  "key19": "2L2UJXqUABnDd6gqvEyPpA5FhtqiYtBgGF2uSjJDieLuaBjzDh1XSSb64Nk1X8BmbLG3ordfJdF1EBayZXs1Er3z",
  "key20": "5iwtaV35jxQc2rRx5yPfkhqs7q51srxMJ3RFnFjKTncsF6Jo6sBK5BQsq573EPtEWQDE6o6YK163s8Vvf3e9rj4R",
  "key21": "4uyE16wyXLS1DQm16NtRRhNYjPD9j8PjLiRcTtB9K4SfuVx5tXsWaqTTU6krUoc7WoqY7Rh3MPcwpdpU7awhFFdr",
  "key22": "3R1VTAtwYuNGScqxuZEkYkp26J448JrTtizaeCdYtMt5M1qQR3JV2CVGzzAEtB8sXmAZmDezwvgd5FVoMCTYLUMc",
  "key23": "2GcqpdufZR8KU6aKms4SyiX873VWWNanLBqz1n6La9jcsrCiSv7Za5c28RjKMsm2vPwhxwsHzg9btdvk172TJDSL",
  "key24": "8xKUUBY4imGmD1vEG7zCgL4AAC1he9PDbLMxAWaixhq76ak3Q6Zq7vbfbituJLyw7DjoKNYYG72BFAYXC1byrg2",
  "key25": "5Em4RcwbuCfcnNUjoY6ZvdrxiiQnNukeWuznis2ao5khHpTgBoNEkqeQMSQi9NK3JLjyyf6aSWnwZ7fNj2u8yjU",
  "key26": "1bLuG7sqmHJkYyLjf1AjQ5EYMfqQFrTBk5QJqWAMAMquGbidPoR4ZN5ETrPU8Fa3nAuuhmg6jKq2VMCGsDMhbXX",
  "key27": "L2ojBX6k6sP4SwZERHnmDAR4G3yA3DNBfuWgqatf19o2W6r1n46YfyCz1mAeNivUotHSNhVi1bpNXgQRHaGzwaK"
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
