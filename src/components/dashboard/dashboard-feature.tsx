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
    "2xvaF2WkaiXeeGuhZkq7NYawvjfJk983iRCiDL23HdLoUjFSmSUWNuYVhtkzwmXz9RaMVQ2isVWU8vBHriwfpFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kEppbZLepAhBGKY6uLXjFeGhRXkgucMdwBvfGHszHEydwmgwSaKuDyyMx5S4J8nRiJt7jgv1U4LzxB1dvGrVoA",
  "key1": "2AL2RXsMQeKvQUKE6CGubQEXHXi2rKUbkhx5FgZ8cncJFyhwXEahYGokXKLd22eJN6WMfDrywDKrRfrivKj1Hjno",
  "key2": "24KydhdWbhRTECh2mDBWADx8Zz4APajHRw29CYw2T2vZnjd6Cim7tdPZbhXa3KQCZ2zfWcgd8zg9c34GA39gY8fp",
  "key3": "5b4vNz69rnoVBfMfYhXan2A6z5FhRBLa93cUqtU2pF25Mtnjuh4e7CQE1oPDPjrJbpNmor1MUbpBe8NeRxMWeW8L",
  "key4": "U1ozdGcLS2xH8sywH8yBGPE9P5xML7Tv4xXbCGuZfPgbGy2SsRxwc7wYoDJp69AKi1K95yeR9CiCPr4B59sKfXV",
  "key5": "67iY6QVSi9RVUnGPV38QrYSHW6Dpcuvr7zHhJ2dJYUA1AadXUUHGCRCnzvnTFQobfi6V4fPCojTjR8vsT5uF4vCm",
  "key6": "5c3vLNAPxTWnv8nZQBFEQe8pnDHC1wrpsPYTVdUE3dSHUBAqQPtxGHj1Qaiur3YmxtiyWEuT27PF6LQwfbRi9jT6",
  "key7": "45grD5WYD2sW7cct68XxAdNMMeDcQGrPsBJDmQGqsS1iEQjooXRcYNSJh4HFpfTkLXHdVAYVD71Q1jCz7Rdji6Kd",
  "key8": "5BxXZEzJPCcPL1udhYtxmtfeXFgwUDpkyCxiSWCNXfGpzATRVLbJHBTnd3YsYyDEALVBrHo7JAMdT5Z1C6Xih1hT",
  "key9": "3FGcEDPSs8jbY6tNw4ypwbrY7oiicVgXZMcV5xEjXn3VMLEJaGwRRZrhJ7FaznBGuJLcPtH9kT5nmfB4GAwXX57B",
  "key10": "5xLNfo31dq33M97Dq85CnEWuGZzuauEzBazL3iGy5b5h5GYznPkBWWUt9aU4YKwkc4DxLing13o4EE29dzZDJAru",
  "key11": "z4YYmQ6LMisfat9e7RWSvU6QoVSzDB18MCjbSoYcUirPpwVNpQpNJU9VmHtoKSVYGze5T2Sx1RsexXk66ErwwSD",
  "key12": "5hN5VAQyYQKjmaqeqfSJyBc9tRtjS3E6GSw2nMv8jLfTPL29LVnEoJVG3gwRhtr1jPnFPoPYoR3tnc4kwMT2JLjc",
  "key13": "3hFPiL566bC3oKskVgXgoJjWbnVMKJtzW62djc9GAGtYE1B8pwbguA1jstrsKhQL1wSqu7N7fWiv29hyMxQonrUC",
  "key14": "iwDAN95ucnn6XCNT9AzoNWWyZoPoMvYd76NjtDcnMczgZas4E75yNdV3w7SaBGhV8X18FFfQZLvh9pxs7uEUxJS",
  "key15": "4DtWFWLMcqs4GmyMcjeCNr2y9S2j9dbFeqazo9LatM1rKcD5mQZRxCKo3j7KyAceYxcotq8jRn1VcCDJpmPMAvDP",
  "key16": "5c1uEzbAFYG1orsEa4PEkVDnpT4YK87AEABXE9PA7WtBvVm9CmyctoZ3njk14LJegta8CGFuqLcVTUKPi8KkfGzG",
  "key17": "2n6vReAqkv4CGJxkGMxxu99brpQLeg2QCtX8p725wTz94gwogLAUayJj9dkFWU8ohnmiVgB6zsns34GEgTrDi5Ys",
  "key18": "4sX1dC7qtvz9Xvdv6TQWZYQRGoFMuvXt8156b4PLdnE3aoSe4jz4mAxZAqbqt7Qv8VZTRv8SfToniY2AzmfHGNUr",
  "key19": "5w3YtDgQhjy6JBjp9ZDCr5DfFGuoBDwL4Js4HZWWdZHvepfqVWDRn6WCED9yAWXDspibwPmqLrY7wGKWkkqYgoeN",
  "key20": "SwSzgM4XjkviD7uSjKLcdhzS5jtugmitxY1Rk1nsgrn1WkAJ7PQSi5meM3JaumG91BLi8fRzPSTK729uFn31w5E",
  "key21": "5GAfzvjNBmXkp6jktb187bXBa6L7gVZ8UYvrLtiJk2dU2tqB9qEfUHkBPALQD5WjPebZKHUbdu2GKdy4abpsCY4t",
  "key22": "4WHn1FPaP5Uhe3ivWfmD5dqQypqg7cuxcKxsCsUkQy1DSKr2Kxjpx9YuhNMW8YZfA59yQ2ULzHyWWiY1mx69H7C4",
  "key23": "5HNLS8WkbEYad9jFh3NkMnhyyqetK1mymHcxP67sE6D6iu6pFJMM7wKv22KqLK1LJx1axKxxTmTT9xgySKyqq4r",
  "key24": "3BF7JygVkQwVaAf9Y9rWgo5VmWA1KTNsQfWP7dbjJxdM8DB5ebz1Vs1wcfxGKsQF9PCfCeDffRHohKMYiaS2BgFP",
  "key25": "4d7Juq1nrmme1x3fZiSZ15NAD9DsciPiYJbSLvhRbPYXHAWP3LU7qUbtLJrt2GvmSmtwM7BPqb49GUYk7S3vnbwK"
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
