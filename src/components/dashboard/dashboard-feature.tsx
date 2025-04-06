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
    "2Teg2Grmpoo8JLjZchG9arQ5eheLhxA9aRNnAx2bo7YYDNMmZt8UEcMFftpKDTcCEuR3svrZmUBQt9Lt7fPpXaUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HctaEhqFEj5S8nM1J5JXyw2DK4YNrbhmNCz4FBYMRaK777M3dUpDZwKaXwG6ktPvBeBqqa6zR66VqY6xrA2zhp8",
  "key1": "4eoK6tfncrfy3nN3mCk1RuXK5T7DrHTaUCpsUZtcrK4rZh1DNXzcCam1YZoacjBKNeLf24VRqUHhuadmYCejEjKN",
  "key2": "3TdK8JGAPjghLff1hgj2qFCBXC8Kd6pbCvsm8o7nzK6BGoDBZXUc6nwc1oFudFaVaeGfpjxLuRePxPsuX2wB31Ze",
  "key3": "23RuE2c4TP8wUpFqbycAJY4ajJoFhME99xdtqrxRJDcQRJ1kXBpebm2QbcX89WfBmihVQ1bnzTqBxShKUZVFAeFP",
  "key4": "3w4Z1ahVA8X9MUnbRe4rBbTdLhUu3QHE9Ayz1dLYp3dpbNJgYPacjcsArUNg8XUZW88HJcP4sDu9s7SdqCBcpMav",
  "key5": "3JJHxpb2Pntp8a3EziUrsknw3WB6SYSfSWvgWDez8ddDKNzxZhqVMZ4cGr97ez9FTpnRi7ehF4Gk1g72tgpvdziz",
  "key6": "4FipH4iSrRXciGrNKnQxNbXytVQ3wHtUUGNn3KHHV9uYb5BNAnHaMK2cQGpdFQq7RAbZ1neZcyRs7dytChH2eKe",
  "key7": "5diCaQdaEt8mh5VwUSvBAcKm5sJYJA5NodHR6FcpUddRNbUsk185DnNwqbGmoGqhwxpEwN8PHoyNkhqe6454Jvkd",
  "key8": "4CGYBSe8U3Z7t9MUffTdtqoBN3WVtJrxeropTx6ApNBsDVysrvWXEcjV1ocLM61i2emHYfHQDKhUzpReU2VTGNad",
  "key9": "2oRy9QkKZQ4vFTMdN2Qj88eioMCXioVFjBMXRgUEBUpLfwTbrmZfc1RYUsznKZCZNGSZq8EvEgXtiYRFUBFt2jk2",
  "key10": "3ujC1mmJNasjKe7CRDxHKDMo3Gyzu6jTX4sCcaJSSTvFNwxBWGdfAhJmqxZvjYQMJDrsnSNSaCttnRzhzoq6V5dm",
  "key11": "4wjRxwojoDp1YquT9px4MMmKvVBDrGVbujT4wWSCb5zYopZrYQPiEDQjj6PuBakRvjjcg9ZNBDZeW8U2S5zQiPxT",
  "key12": "5cf3VvWqZE6x4KoD9gzmWntJ4fHZ28QT6NJcDPwmQiBR4Q9Q8tqzvr7hdniFXWK8DgpAoYbsZuX3oF7PbLrwxy9H",
  "key13": "4oYiY2xyRRriopz6PBGDx7ukesZzAgk657TYSdfwvjZ7F1VqMCLDPQ49568pgsmu2GqNnzj1uV8rwNqKX2FTDtmu",
  "key14": "BxmQkQSMrkM1vKuqDnbNEu5bafL1jgmp2AREXkexsw6Tq7A41WVsaUwnREVE9DCH7t5Q2E9btLuo1JpVhy84ybn",
  "key15": "3UXJ4Qug4iAAvTgwgMrEXCWpuZMcuHJ7cjc9rbSEXfXqRJDxtW8ipcWpAqRsrZvmzyr14w7oJFbfoEv6LMsoYV9q",
  "key16": "3kbEqPtt9nReXe71GhKGaXeaEEJStoJP9njHk25GsYnJ8sh71UJnLMP9xEv4o1RAZUDFM6jTCBjgpdRRiEGsiwS6",
  "key17": "KpHAQKtgSkFCbbT58FQevWajDJTJtcrzPPSoDatykoU1ujsi1dC4ipw88iiZvNUEkSPANC2F311NisrDZYcXNgb",
  "key18": "3U2GwkAk49hobSihQedd7pMuAifZ2hsE1kxMHRQ1cHMa1zjL2PciM52L5UhPPA9TEEUBqMUKTLTHB7YQAD8i6ZEb",
  "key19": "2wYL2vTMJ8hpMMVMBgUta6PNNjo8YNF2UxU6djECsLxFqGimZA6cqCqqSt3oYSM9YYQpT6XscQneKLSTCBEhoF1h",
  "key20": "4i65DMMYkFxGsxG4H8wa9TmVH3wgXq9337J3Ye6bi8DpDJqYvCAsTnjbkCWC3JiKjDmVXEh3tBfdDLpXHZCeJCgA",
  "key21": "5QXBsHBSnhefgShHjCEQhQFt1YMR3tS3kwD47JNYaFbBVMjcPKcv1pMXqkhqpuBJyN6KEkrTPF6nJ3XHXAtoTkJJ",
  "key22": "AkLdwXMB7TZwk6WZCbgzP9YCyLHNj6wetFgEcD3iYUd3WCdMH4fZhHagevAtvWeCB9zGrppMCxjpX3w7SQHZZqv",
  "key23": "5q57SjEPosUee4BCLyhQD7DAa1q4JQpj3CvRRsorZcnnnBNNVKytpHs4hTJNtAKK4yQv26HEbwWQnAbMfN6a23fE",
  "key24": "5CLqraTypRFCSrY6fdiMbLdmpckkMisr57QHce4jcWJr2NE1HcbHztk5kB8XhmHsLvyPC4bn79mHHaAUbACSVw2M",
  "key25": "3XTYYy4g1pfBpCE1qYbefG41ajzS8KnVd5tqAnsuWHb5WR2zc9tCfmrSh74QK7PCbxxyt2yNP4rtzu9vEPU4CYYU"
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
