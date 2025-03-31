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
    "2ZaUbjGQZwDzEZ3FNnfHrjo8tukSSgYjTpvrQha57GxdxrurRhhYJP1AJaeieZZXPbgk32Dw1u6nksEUdyMEqWyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54bjKJ9Rqw1cyPCGUAZncpEZocFJuLAQyjfTQtfh6evhdhRaEM4c6jvoCocbQYc5xVTc5F5QCJJkKp422gJb7NFV",
  "key1": "2ti685wXHEFaWggjhm2hwrdJ3adEwJyV9bsFiyH3fM3BF8uxVBxvr1hjjmDXBfnMTe4mxxjwgTkH6XY3D6jy46cs",
  "key2": "2vEie4gb4W4jasxzjSxUUVQCHmE6c6UgymQinGYgWALSjgLRATkvv3x3X2mWQ6Y5jK3B1zDkUXs35WGd5mPHRP1e",
  "key3": "5Sjd62aQwjLpAnX1dEXSfrjPrVtxYT8VatoCWLV378L83GCJLm5QMFJVuyb76fmBTjeSVvGyyQanQRhVzuujHFw",
  "key4": "2SN5SiayYfuS39hzeEy88fQWaUS48ooBMBCoEeCCKSDb3Yn8BNdUiApom9CP3TcheYbtDesJeD4Mhr35Aq3Fg7jD",
  "key5": "4zZXVptysoZWzLkVyC2yBtDu8xaPGaY4triCuk4Giysnk7FRZRKuioh8Je9cneajx1LJKpRXMquQn9VnZqWmPPRh",
  "key6": "2Z8YUWaRiY719XoMmE49gdNLAnLuCAUnAVZvBZbDuwueMhwa66R1Nc4Qyp6kziR3ABhtL61XW86Q1uG5sLcGBrr5",
  "key7": "3LU7XosMqRtcbCx4ZdQSc14NEKZRUtNuosUA4hKjx6bdZbNQw4xaFPJt7WBmCHnNhZSfPe8o2GfTh8RuM77pKhEu",
  "key8": "3gdw84trsfLbraF35T2QgFb4Y1MqDXgeKYWkXsSLhXkdP91PcrEQX5ib8w8SBffzMem9x3D6XJGPPxtAMYpd4dfr",
  "key9": "3PKjWebbg9gvM45CZ7RM2omnmeyHxB5moBpQFewdGq72SFjX737vkhqPvvhTcB6i5kSbEwp94NwUai4ikYKNArrU",
  "key10": "orLg7ktzc68AjmTRR5rxzZ4eAfUoZkvvkN81idigtvKMAWgF5iruCs3fer6SyBjHobfpcAuwccLowwBKoZR1a75",
  "key11": "2dqK9Af5HAvguvtvzZohjY1oW22wFHR4gW6TzpeL5P36NUTv5q4CeshCH5uie4q59bduLrqyGd38bBfdHfnipJGA",
  "key12": "5QTdkud6Ts8aXwqxCRusEFzdfQNUrMuxS1x6T7GWrgqtZ5WiT7xMdXHkWo9RBkdqCQmmUdaGfUqSPPvKHku3TBba",
  "key13": "456hELjofhs9LnBJ6XgxLpo4K13RHkQvsL2m6Lb6BZqjCwsyh2mZBHVKCUCSMWEKTHB41a69HhsC4ATTsRfzzGGK",
  "key14": "4UbQWn81s3o24vNSUQy48unu65wixNTqARCgpbRWpfJD9vcFKmEsiXjG9H8CcpSpDam9UUWDBxfyLMZnVaNUzYPA",
  "key15": "4wNj6oi7F38H2RawSHEVXggnTVBaKyX9NUY38HQPHKxg3j1kgqPFykphEM4ZMCNjvrUGayR9gCPPzKm2fUL563DF",
  "key16": "59taHTKVYZb4JjzoEjLqwCoDpV1uweJiGzTdjC77ZXurKrPqEYHsdB6APvMiVPk2hzaeb1tXkFvJtvEAJqY5ZcP3",
  "key17": "4PEBUCMHVxcjHbevYHi8uff7j552sL4UdwC9zLb4eDEhBuiVJqBNsiNt6Cbi33BMg27DcHi3CLSFzzjmhifA1z4V",
  "key18": "4gKVDjfEEo8yJh75YYr6JRawehJmRwbHCn97zRwULHRDnECEge5BLETZwkDm7Nb25tD71AhUYNDyrBTL2yNPGy5J",
  "key19": "jjCsEsWBjVzm6B1DMqkGKz8UXuq2uBro51AvJPs3VxWZLiaRCChsGM3YmjmypMmjPhGrwoJxygCanQnZEku3cRq",
  "key20": "2zza3fQzV1A7N8ZRrBsUdWzh2cexh18GuSEojfL8oHTWGefjjPuBvt8tLhpp2hkS4NBZ1mGRUXXFcZWg9M9GKBbA",
  "key21": "5YzzpAmHWaeHddZSrNY4ku5BTvM9EvsiSA8dkxA6oe9SVJs7iXXS12dSMA7qtLmJ41aXaf6Jqb48yf9vKPAp8MGg",
  "key22": "5MEX5DQUm3RKtqFuWCYHz8ZF7WsnmsCfPDhxNLRh2siG1gQ6Vk1jYdDN65aEZySgVEWEvWUfjnPtSPfuYgxLWcVK",
  "key23": "2bne3e3h2jD32CQehYjXrN1T1r5bGpYqNwHDjqf1V5mrSWdSLjLZqs5GBoTRXrj9QiP3FCYpNToAbtho6yYFyrkA",
  "key24": "2UFw6rbPtciYhng2CrUdH4xkeHzkuxtQEDnbiMBAWuoREqBm5Xaoz26kkwzuv2E5QxSxPxfkd3Lqi3zDA9VaZCr3",
  "key25": "DvUSCX1DfvLK8Nt3WdSAiQ1oXpgVJmN9zr9kvNKfmTC6GEAhs4VQRtpb5rw3tjrAU7jBvp63xDcub9pYhXQkK57"
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
