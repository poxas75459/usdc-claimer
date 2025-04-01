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
    "4deaLS2o5AdABGX4T8bQYyunSM2dF3nrcZvzY8zWxkeWw1cccoWmFVrchQj5yJvzRdoN81EXDRjUa2wJbHFL1mra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rV6hJwVJRCRJrvpNWyKcRsrj6R8MELrqNgPJxkiuc1hMwMYpvwNoGpHe1wxLkm2Q7j3icSBoVVbnuyG2h1zLY34",
  "key1": "3ykeTVks5N5332wN4HcACRC8ikCPkwoaDtL2QieqpzFuVQzCa8vJXd71u82rwvkuqQxvUH5D9fUCoevCbKdcg8pX",
  "key2": "2DdPxw1kktZdma2DbHm5r5JNGYgzt9trwY878BUfAByRuVb8CzS8ze7D81AEXRaLhS74nRRwrAh7obE6GMdRZpwk",
  "key3": "UH1dSGm5KPxpaXqq4p4Hz2N9TxPjtpSZsP8oki5jQ8CHCaKD3fz15RKSzvGEkGKK6DeeLaqvcaJ6ZTkKFeR2vhq",
  "key4": "4c5q1BnU4oGnpCvztEZPx5gLLyVgkoRXoUxTiyy4Bub4T15dpPN6groVRPeiinuDW5cRV1HFeGr8ioHnGSfqEKGf",
  "key5": "2y2TSk3obNUzWZfKFf3XfP7CNKB8kVe9teux6w2S4HcKXM3bzMkGSm566o7M48DNz22TYxk5wcdN6bEvMqjVkXjv",
  "key6": "45q3ti1pbRkiLSU2c2U3knaWMsvkb5X7SuMEVBt2EyaNf6HQKryf4udM6Bdf5PuH3yZb3NGhhVm8UZyDDXHMgJ6R",
  "key7": "36Pq3UqNNCddUoxSpP7o6twBcoPFGq3pGvb8aMcy1Mao9wzkCyXTzsMX5HBSk49WQBCaAUb9EiR9PBboKuzitUu6",
  "key8": "5CDKyj9kLAQmNC4ueUxzTKvBdNYamcmNX8a92ixpQtXUjQRD7QX1xz2eSeLSWXpGBig4Hq16ESYW4nGXFUBdFuFa",
  "key9": "41w72MtsP6Xq4XmxuvsRypqCnfw3YYqKLfCdoz3RvqaptmgHYcEdpgXsbCrArruq1phCHNNYvmwk98cAWTYSk4sc",
  "key10": "Vw3mfMBEJ4Szq2mnA9VpjrUMy12449EWfpnYiJCN8B7ozJNZTuXAv5ZwGJvdvFsiiMkFPN8f7ubKcEFJWfGPUpS",
  "key11": "39rqKsVvKZPp9VxS6DSP4H88hnpcbREd62JLhpoXZf7TmgCW8GJubPj2zHGdQKGby6ZBxShM9GbJuoCbE8MDhpxJ",
  "key12": "4LtgKx5Jx1pcJ2AmWfMZG9yyMVPMgV3N2ZkvWEFP6fpEqpgXXgid2ScfCEf2tBUWzefGbfDX6ntdwk5rZVudp5Nh",
  "key13": "34XxHcNWgMYirY1aQB8Z1tBx1szTLandj45peb7nNf53fHPunhrTK1SyksJdAqVcwyvauxaYwADQu5NBfnk1QBqK",
  "key14": "3z7ajaswTFiahavSh55Jnk8ooeNHtkUBGL4hMzNhJJoxnQ1JkGdyN6tcGZBMnJydKEWa5Y7M7F8QKem9SyPfMKxz",
  "key15": "4UZNt621QdjT76gtD7M8D1tTe1qBkWK9k2HBfbSHfhWsxmgjipCuq6HGJShWedqGtEq2kfzqRjzawkLTWACL62Ru",
  "key16": "31sZ7iWrkVP25d2otJJ1f6zp4CJe9dwscn1VjTJovh9pe5Vej5Se1KMvaZ1tpNRcr31tLGQDFQwD3gniLqw1gPN1",
  "key17": "29fGaFf3JMkzkTmVCeiv1FVUsjivCUSyZ6jDVpkoyPLb6SQvPQqZA1Sk3gB4n37P6tiZo7kGwoFGnTp6YBwi8geP",
  "key18": "AHSCXVRa5aokUr66H44iL29nVQiQjk2ZG8ipo2J9nSR9viLTuEwcGKGz9Wt4zZPH7ZasouQ8UDurfHkBnsYr2Gm",
  "key19": "2QsgXyTfbYAxkH9VNz6p9UWWC8e9NJa9JyJqyjfCvJ1ijwyYhFjq1fYnxamCKb6ipgg1UHLhc4rndQwCydzTKiWZ",
  "key20": "4yqebdW3JjAULoPm8DZRekaj3E4RNckpvxVw4ph2WmSbPY1gyaEu8i7FXD4bzEYZedpP37R8mbEHyZ2Qbre2yfA5",
  "key21": "5PWs7eWDJVb6r5dteC1x5GVLbfiMopnXrfJW8kpTN7MJHymhSchBbpMbb9q2SvxEyZ9bppRq1GcSV2zmdYwfQTPr",
  "key22": "4XK9jJ9Wg7g46drS9agDq8LSrswmUMGvDG1Aow91WCgSi1NMyzxieemZgqrf7MNAatLNkLB6pWgTRHjV91jt8Zae",
  "key23": "2KYXeKFEgik7UBiE1cuykXN7hViuAvq7C8xdnUXpkiyhkimczG2nMXu3V7amoD2KoVjfmEbMTNCMkk3uyjMbCNmr",
  "key24": "3qkGtsusUojMZKMJCMEKXZXEbTZ3Sxj5Ya3tAj89fWmNmwVHvQqajHf1m11fzpWTxatZM95pHbb2NxMtTPV1SDV9",
  "key25": "3yyuzMQZmc4fJFR36EkqgGLV8MGUaSRGNdufS7xc2UMN6DaEobf5x1wgCMANwrKa5uXmZTQ4NwQaSrAyQJf6Bgmx",
  "key26": "3QXZquQDHrJ2yyBdG46cF7GMYoFfqJxSZtFQ2pK365sFE47GrpcPrfMKtH3cCJcsoJMdX6zmyREDzbCkSAT5JmU7",
  "key27": "3sjcUsryPUPRLtJafuhmfKi4RHokpopbj92ZZsmfbCMGuQ6uQbApsZqPUXCZRa9WgK7AxFZbity7oT4PLdhMy2p3",
  "key28": "2XLFcJ8SeC5dqGsB6iYhhW6swh8FEJmKepSqr3pioTa7sRB2mnbQnwVfcALtQfHYVNm5QZLPEUWZC1g899A47x8v"
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
