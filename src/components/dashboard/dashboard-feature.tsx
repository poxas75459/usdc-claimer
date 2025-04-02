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
    "vYvgxuc8vtaomDhDSkhmHA35swsJKMxyhHLoeaFntGVxxA5L5R5rjboRZTFhT68aczyqqQxqNEq4BECoNaMVmZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdfNqqGXJT3DtrnTsDUgUEQ8TARHtrvEkQCxoJwqwU99uf8v3LtruYvsEjBTNdqbeXY5QiAvndUM3Jndr7xuBGm",
  "key1": "5QQNsMxfJvW7P5ifm6dkB8ZS8KLJCfUhGyKqMWD3ZZeUFZLg4YHFmf6ivvRZBHmeWWt3hvVvwqcTDXaHe8tem8mi",
  "key2": "4WceAUEXvWM82oJgoU2gzNAzThxwLRpgws8obVYeUxQ68TYMm1khcKUj9FepN6TDZxLXpyWk2FH6cKZpMqvketQu",
  "key3": "2cNW6HsZjHURrQGa8Vy5NgbUbepjdXkuBEdQiKLmWSGQymPt3aBN4TvDyHanoSBhLjQFH2XorhQ9wktgSuQaahKV",
  "key4": "22MKAeoGQnUwciDZG3i9PpfMTS7DV3p8aoF9qjhmjB16QvNgGJ2hhaoriHkK24X7AxbAPF2hhTQPbkK2hPHDRSdV",
  "key5": "3vnECsQnH5ehaeM4xuFZse6mVydo44Nnp7R6Zp51Di3DfLVhmiiByvn25BjDZzvB1P3GEcmRbgFX5eASD2Lno5Em",
  "key6": "suhCVfBQwGBcjN3mUFqffJfePzNa1g7zsqETqQ7Vo3ZSbBvG9fKjF3KNyXAZKga2BTSqhtP1Vi4vbXLa8MuG9UQ",
  "key7": "5tkNkeNApWGFxbQWeCRjzeLggkpzf49WhnxYCKbjAnkZV3Hjb7B5oNCCYG9yhrwfh9egyZfs5GsUc5KeZU9GSyZ6",
  "key8": "25MhvAPNgCzZtd6Nzv6B12n4sYPLnzbPTGnNsqbqfNjbiYNn7So2uTRY6vzFDHgVnw5scZgEaAWPJpWTDJQ9s4GA",
  "key9": "3hNbdhiviocMXkSSyGnuSG7TLMXrHYcHFxPUEbKnRrse7TqkzGcGFQuMWeRAXsqkfCQ76VB2NUrkGPHrGbKE4FkP",
  "key10": "5ZeLU7NxM6Re7Nd4uuY9HCGPpnSioohCTcaV25mwUeAAfHFVbk2xLjcF1FLUS6F3Us5cc4P4tMNm5x6euYyF728h",
  "key11": "4pHJLBhKkvNcJ9qNXM1HBrMBZ1AoyPFrZjxpzMoS9RavGfgMzrfN5bPMSWZR3Zpw1cmH6SQHvKpMX7NXpCvLMpmH",
  "key12": "5V4wKkTsjQEhw1QPVwq8Mq4pZSZHonBs4SxpPnrg271N4gPdt9MYm1fRCq2Zjkp2rtm792bBKNraPwLMfs4Y3nEo",
  "key13": "ebuKZyZ37W5MTeTJW9eHtGtLDegN5TaPTVDbb3fsaKUpmBju6vhLEa8gCCD8Y3oZ7FsMY22GpSb9NbXijek6eeZ",
  "key14": "4SmDJYS9Jx4vFrRw9ee1Ea7WSXdSvv8LxmHuvGKAf1stJQ4zpFPn8rPxxAWw28NbALZAjh8PtgwsFDinHBEB43kJ",
  "key15": "4RmvpT3nS3u5VvAYHXqTF63ZUgzsnjr2HDmmUh4pAj5WmzuZGGkfPG2bPna8pTb2Dkq6Bm35ZmPFEuRXRYN3hubb",
  "key16": "5pzz9AcDHXY8BcXUhdiW28rpmiZ8crcPQYRuQhnB2mVFeC7y9Rp1obpDwZ8sUxU9rCvubrN8Sw5ZMjYM9W7B7LBK",
  "key17": "5YQAegaKnLM9MwWdCast2yoMAWzcWKQHkkzCNmmVVyPnBEGy29vsoyC2sVbVex5K3ng3NXbR1ZRGqLNAS51GvTwR",
  "key18": "2nkzF8Fv8RTHkBc2zJg76pzpYs643YRQfB2M5xQ22dHMmAQn3XP4de92HpLKHHNWws7jCvvg18HEJzxr4vtsSiFU",
  "key19": "5qBFWuSLWquPrzYk5L4idZgZwPdxUQsVgRQs7g9dBe2d32fC7R1C6arDLTHLMk2cmMHuidkqqS8NKkKh2vUaKgYy",
  "key20": "2YEfLoUXGpNZ2WofwK7RjkzF9aUM42B9grBoiVKTBEFtyCqDwomYGsZRy7gyVuLzc6XeHMToCUbGt9Az3968ZxeZ",
  "key21": "48FyJWACs4ZgdGN7Uie5S5KE1qWY8gpitxoURiXEi5hFPjqM1wZJDn8GeMWHuDzc373qmLWsYy4TEQfrLQpaU5So",
  "key22": "GXBdJZyz7rixkAYmjCKjPvebZuy2RdtiVwSkWyC7nj53fhQhwmAh85AhNgQhu4mY2uV2mUwtwuQMv5Ty5MUnaVk",
  "key23": "34PouX7pNddqQ63LLtg3tpP5RrxePVmMTKWvrV2nyyeFWrYqYtF2pWuddxipJWiQSpyfujZsPSPvPgcpTSDydZvv",
  "key24": "4NKyEJgxywQUsVBWmSncaHsm7FNc1naRNvbK2nzcxXHP1HGd7Q1w1tBX6CdAVrGGtTe4bGMBeGrQjQTSrKakb5Pr",
  "key25": "V4o13rnMBt8vswswSMbRCV3kRo4VyVrkhkriQJFuR3hP2VhgfyESyDRFeuXSfRQyFdKGqRTcZBEPYoKi2NEXxQn"
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
