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
    "5qmj54ccihZHDR9unHegj6NnxXdNRWNA5KDcYi8XmW1HFteAX3yn8zK1boFfzDP7x5Rp6oU1orazhBk8aDSmpnfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPQAinj2Hvw12p9m2LJQ7JoaCyezYs7EuNQ4GNJtJgjR69brLYBNeVTNZQAiUigUWXxyg3cvWyMq4HMVhkatYFo",
  "key1": "3ZoLfv2LKt4JeNhAuovrpKJnjQje21aRFdqd4ux4ReupMeXsJQUUKEsHeLTZnySG3qA3dkpnfXLY4UNWR2ULxbpG",
  "key2": "29VSmBUWR5xMb7gEu6nXfYyRnoZp6xDE2qEeBjaw1JjiUWrBx9ZZi5jv9XmmgSSF7ukJMEaKiyTgtPhNBc3rsiJM",
  "key3": "3uG566sghY2oM9Wh15gxnAxVtjvoTWHHKYRWuksKkqV2h22Mw4zgJSQys2egjQnZ99jW1apuT9RNJ8ZBkVxMvt8k",
  "key4": "249cW9owqysWgJLJzzCZYbXb2H42UY7iZ7CiXmi8xKJkUEnXKdUYE1L5p6NxexD24eiNm4csPdtWsvRfunTsSp6n",
  "key5": "2uKWZ3LqQjGbj2tRHCXn9V6imtYkXgpm2dSdiaBg9U9Ywqwm36ABx1LhGrWTnH7ECWCZsFQX93YLCWMrX6c9vgFP",
  "key6": "2vk1c9wciuzHBN84eZq74eSSvdV9DQtZdfwahwMHSWaMoCQ4WMS6SzoWtrt4VHisGz8gUKqMB9uSRzCWbKV7as9v",
  "key7": "3CQ31yEpjZx7Gho77yYLehjBhaBfN9wpQoU9mGFVZWPnULWZxZMt2qP488JSWiUZi1fLZ11SHpv3dfamTMbBB38X",
  "key8": "3h6BtL93Hv7kexSWJ8XabLRxnRzdauKLQ6dYtXUWup3t383AevwPjLq4wkZfBC8bRn6qbWTwSSgJgBsHhHMnRWwb",
  "key9": "4t1owrSB5HkmqsE7v8BzDimNsFJVGkzCzwM8KKW3qqCEn4xKsbHSSLnpvkxghEYmWbUt1pGuADmWnV2GhA65Hujk",
  "key10": "5ySh65vLjFqPGnNsSLBRtBv3V3Tx98T8ruGZDATEFGHQonNBGGAb96GGyw352eifbmAgyAf2cvTYjZp9N9pNsQux",
  "key11": "5vpnCHkoneGX2kvxuBXbSuBT6zhQEH98fPhpEX579phq6VCwMcioNwu5EBAoBeyr67VJCXsscLxPWjenXpAU2m8P",
  "key12": "GzRZxAayAjiopEDnN3vKqP2EjsUW84BtFeatT2FsCmPhXzVLhNKuJK6bqsNemnRyua4VnVJRqk8pxuHQjt8ws4o",
  "key13": "28SaMnJhg2VkmnotGBzwgvg8KmW3mP4hPUVn3tg1sjLqSRxkJM5Yp69EHy7dw1zWLMrK5WJVLszg52h4bPQhfHdJ",
  "key14": "3NFum5g4D7dhQURgYUP95ZiNBaxpo7yyDg7iSZ7PvHve7DwQjZgGzAbwEqL216VBywmKLah1EfWC2mpCAWzgCFCW",
  "key15": "5nE5NqMAayGn4fTjo5r8cY42paefs9iHA8UJmXy7DroeKsjDUEQATuqwGRUhqiEe9kACNLt3XTBcr7Q91mcwAhzF",
  "key16": "43ciu5qw2qoe1R5TC9EwGDR39Dau4VfCnLim4H4q8SRsL2VSKabmENvPKehLX9RGPCMRReCy1vwNZi9EzSv7bez4",
  "key17": "58hygub3KTS3GBy2ksz2emmTSeEj6crykfTFzCXLL513vv4rprphb7qevswvjrejz17Psijg9a9h3MMLbYx1or1P",
  "key18": "4pvUb45egxcuNVXbNqvWeEUqfBb59jUoX65CHFWtg3dWeoq33jEcqYVgxUS3aNbqoVDxwvp9wTD5qBGaUtN55yFb",
  "key19": "3xTSrN3Fn3GpbKC6W7qzoUQyxq7Z8BoJykycs3AKv3sngFkLqjqje3SU1kP5v9eME5uoP1xeQjePjaBt43pAc2sG",
  "key20": "4uZU8xpFaZjXzEYNY7viZXyrVsjeR4YDGDaKQDxSDwcb9rzi7aRDt54LpPDSnKkTQt2mjh7zRnsoKRCt3JHLUVBm",
  "key21": "66hdwBCdzJmzzevvJoJv8kL78pRKzdeSibpcYg3pDUR6bY3sTLzRrWGkZhneXakZ7ZpBQspCUbcUbBtJUEjKMFLr",
  "key22": "3cKrPKDzc3khDdvJyupmz4VbqJP5nZXBCWN3r7epDsXav39p5f29V2D6zZDSYmUzQUDHUdxQ7tY1YMKxnTJLbcVK",
  "key23": "2uJK6LbCE3qigNCDigzjj1NKNK28NNhF5vq6MJi7D3CpLGY4vEQxVYTwbm6Fg9YqhjepxWDgWkAnttupSuXUXMpF",
  "key24": "uyUEtLV1PwJVWt8b1qGg2hZyNqN18EJaj5fTyX5w7PBkq9KX3UUijNM59JS1Zd7CFwXtrMvmb4gdV4ohj2JL1b3",
  "key25": "2myLN4q9mGgeQwXThB8ZSxaEXX6takktEHTswjtuMqACmDhKR9FFLbQKtRQj8r7MXPL6syaDVCmvbj2qvUkR6p3g",
  "key26": "2GwYHGsiD1LZBBHUxdWaCe1Vp3zyEyXn6aq6HCaJwC9ceeP6styqKUuMejhR3JSxWE2995JQwCx2S5zwRuztDsU9"
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
