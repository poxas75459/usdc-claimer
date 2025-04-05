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
    "3rGNCC76qY4EQVcx4HEiDtrHC9PGbZiys9S17c98Uofc7R72xzsHBTzqRmht7M3f5kMYd5HHmbPVnxqoxd1SpQNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZqZGKApBHtLTG9F4jy5Jecr3V2NPdFvTnFYKUx66qwkPDTxy8NDMwsrrGji9B5LAiaLJz3sSAy5giarC2HALbv",
  "key1": "5pqPBRbHFMP9PBsDk9rs77BDvTSgRPSJA7RPg36HsCNFP528zvzKxTZ4xsCcqrCG9aru7GcjBYxt4ymAQp11qGYn",
  "key2": "5o8A2mgU2pRsugVrqCxxYGVH6WyhddNcHZyzKui1S4GBisqccXXfP3ZvjRWhc4bqvrLjvrTE5Vg37ZYrDDBJW4id",
  "key3": "xdrqK99f2sRggd7BhRJAPREj3AMTU3rrW8LWNMKoi9yCh5wZRW9BBFdtMc3g5PbofnvakHDMjgFyANBbZKTCupr",
  "key4": "62mwrbmh59eJomtGMM8zXLLRBu3jPrDJrRuLxP7jgs4VgvK4y4p3hsLHEhUM17EgkJSeXeeovYQkDqHwpdvx3ey4",
  "key5": "22RbgzKGk2KrxW5h1FzvG197ro2iUvVtmG3rDJPEQnVwxiHi1RQfSHCtjJpMppQ3AKqeeGBysFPDDo8HwFqGkjen",
  "key6": "4Cn8o4f1J3yTP8LFaH69q9KcpNA9ywnZcia15W7L3hQHhzVBR6KLARzpL9EpRo5dshHAcDV9C2dYmo5r5tc7sQbT",
  "key7": "55vC8NSY7G2dddaHrADwn7kZ8ryP1BVbiDYWLJvU1Du6atUZsoPz3X1ruGkywKMJW1qCN66XfsZQEHqhJDc4dQbd",
  "key8": "3a8QJSTZJecLXjwLJnvYQDniJENGDqkoE8Xdo7EuWwgUGsxKdwVo8cziVUvJJw1iDZmXKyn4mVtzNZYD1EUz1q4q",
  "key9": "42eRHHZpqngSPYhf1vJLCtYPoSEBqXobHXv1pPbCPLF6k8xa2MhPWbgcs48gpi1aXBkp4cpiV3NGiQDW18xFAGgK",
  "key10": "sSGPeVq7VGN8CfoqSwNeScJricDH9goS8jNDRvyCi2osGbmk9i2remaekcf8Jr7sUTqAxA9kVmS6Y9zkm6oAiej",
  "key11": "2XZ2CxuFU62ZkFHnYpm2prmZTP3WfnFLugwZvDD7QxKghxE8AzTDsb1yxXGg32E6BGzms86CyhHLfomTS8kpy64D",
  "key12": "5opt44x6vpoRd8krFr4Q4uwxkRqKfJkdR6EWjaVBkzvLmfK9AQenyYbJQKPDGvx39H5QiMyGGccjinyu1LMreaK6",
  "key13": "4u2uqMXLdk9R1vb4GNyY6pSgwAgstFjbE4MpGKMKB6ge6fkqEa7catXvv7SYRjqWb7YvcFZHBYtjz1ejezCkF2Sk",
  "key14": "47Jmwzp9Xvem2jQJt3aqe1ybnbanDBYA2YdhSP7tteMWehpnY2AEr21ocRarRqRTqoTKmeB9mrXKZUMGztt35mTg",
  "key15": "2VwUxJ1qFFYZkVThhpXgdVM6MFe4vDnfAZUokMsx1cb2JAvSS9fTXUizUiZnJNK3qR7bWXutT6hcyqVthiSYiWAd",
  "key16": "4Xpsu9UiWtUpnd2xRZKMssczEVszjizzCgBL7yisj2njD9ELpBUZFCHUTxcqcJJnHz1VujwnmG7kjTwiB8YXdMDx",
  "key17": "5tKitPfWh67QkN6bHiNiFvK9J5kxcgsURijnQnU3ToaLGjnyRxNFAEMFZQ3P7zTReNztke7MZGkSNCZmtNuxKaJr",
  "key18": "3b8mPbHtHF2yyGABtkJU8wzc9rb912yfA2CohoWtvKSVir2n8DSPAShHVkbDMGbV7ajuPdEEuGAH37AJ7fUixjxN",
  "key19": "2HbKeamix3wVhTZL4UmRffK5DFyDEuNwt5XryB5eZgVn4GdsdMoe8zxP4emR8QWLjgKVpQR6GMDEc3CnWiExfqwa",
  "key20": "378xjHCeqhAhw7gBgJa2Hks54DPTxHc3ZUt2FMbk7ZnzKj3VnsmqMuA3qiA9QWqFYF2WDcDZUGAP8dGSjrBph41i",
  "key21": "pohgMdrjCGvZuSgetKxEUpmMoccWGjjd2Fq8ef5EZeFqp97qWLiXNvnEKLx9qnpgyUXfBEpctgkak8GknaRquGP",
  "key22": "hg2Ch6kCo7canGVeYYh52Y17P2ReD3fn3TKoc4njzoiHh5HD9WaX1KDkEQGfJUai1Tw5qRBRNsF5WYzcTgfGySm",
  "key23": "4d8rRrgxCfzLiUHxbUeVSh18bf4jbX4vVwwvk7xeBu786Y2NpJBeG4WbhKh8L8i1mzwe4ymVVwCBtDAEG5WJF513",
  "key24": "3iLXpdVAFaDwoiyEefkiYCq4uPFA33sVG9YYz9p4QeARMudUFBMbQKotKXpCp6VJaTFZwvDZ3UoMo67a871rdZ9C",
  "key25": "4Syp1SDncfViCB1Pq9YfZPmnHaDkmviiaq2QHkswhtsC5qnFKVZhaqvsv1W71rnAi85QDoD9Z3EUEk38wj7k7zR3",
  "key26": "3jtZAL45vAEYf6HuxqxCa6tdZVtLcueEqwHtz64Guxzn8XxFkXe2CKgsPgDsQVDcEmqsSo4R442hnivKctryAU8S",
  "key27": "23x8oWCZFS6JdEtA7ZZXLLdGtzHe5fEuzXD8pd4ZNPKG7w71PqGzj4LFEacdV1Aq4fQ9VphL6vfHoXkkkXKPfnmh",
  "key28": "Nr1va7bnPJBRAViZcSZwr7dJ19ns6duLNXQoxyKbLhGwvmDaodNAJCZYhNUXjcanbaMCUoaFhkmz4AL5yteobV7",
  "key29": "2XN8w8pJwYqBfJaSsHvWcWe7Gm7iMrtWi8Bik8n2xmfnse7Y6o8UFDcHnjfyGhN1LPLR5BzgdbefUhuNTDqyaFtF",
  "key30": "2VgoYtbZbFMQizqTkmhw8mZUn1vucMjNhdzwAS3JijudooZP1t1QHbdSdz8wGBNkq6KHMBkXJQZRafryEuYieMH"
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
