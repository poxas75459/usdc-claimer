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
    "3grL8ckgN5sk7jzq5qm8ZZkp1xFaxaWCLutHcx2hRLDecuU9daHa6rZ4jF8A6pmAD4TjeHnxtfcPCQc8rNgnrrgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbwdnYR5PZZryWWrV6YYgzax123iT1nmSjMtipGkjKrNQDXX2TK6Fc5xDYpMZXyoZAqd3dm5xVTdxKW3kZijkua",
  "key1": "3hvBHpZtWDAQXZZdNkD443ottKj8Gbwb5pr4PuazWe9EeXmYSczuNNQMB7ALqDpSgBRprjXgzQ1Ty2LfnM9LXaLs",
  "key2": "5cwULrYFqLqTwhnaEWkDvbDMVSGT5n7c9DU9wCTMeUWP8mFYKKkbrQRsiviBTPqwhvX7L7uc5n1EHurxquiZgozD",
  "key3": "4S3nSVz2qvEVV2HeUtveJYq4KFMp7axmq6AbvdNQKHD7NEhUAvPgE8bHCkJa1zTFuyoN2RQoinesGihweYwmx95S",
  "key4": "azC7tLQ9p3rfg6KHJUGXLwBgVyqXyVDuQ987ofwj5FS6XgVpEBfsTNUszKPKAxWoGaZBiPzPEYCEnjkF9ARwDjZ",
  "key5": "48JV4L7RfsjXtxmQ4Z9u3RLo3PiCyYQTkRJbqv118kCusdsSYpjaxUgRHnCoEApH6RYo7cUqk5Wag9UQXeJ1fKEy",
  "key6": "4vFUa8CanVLQMauxWjXGXnedkChrKwJaAEBp3ntuk4xcSLq7ycRa2t7E41iMAsHhyoguPZrXxha4tHCCxe2aQzK1",
  "key7": "b12LdWh61qiNbXwgBMKezNKCyDVQNJTnj882Haj85XzTpUWHnR93mPkSfwSNgVZBnGDXjkKwzXQqucZX4Q8NGzT",
  "key8": "5PRmcpM6WUnZMnkdHwm4SML3PmvWxnTXkFaHwXSSydfUG5UwZZnCmYZwsdxoJwAhioWyHsHtQKPEq7S8GRp5nbUh",
  "key9": "oDtmWSY4GeNnS4TFNbpAqbVu76eHSmtUdsy4Pcap92smXsdNUtA4UCC769J96ubipoGBXBxhL8DwCpwf32wLoom",
  "key10": "xJ6j1Xg6ZoaT1qnhdHK7WsJzamTYMiRq4sdkyDjTPr2n9Xsoi7YnWgHpWZ5uVeyxsm9xazAQKUYRfp1JSphBMvK",
  "key11": "yKmrESnN8tTBajtNnC7h7Jy5N8X1gvcvqmgKHTwszt9TDumbushZQRuSdxxjtvWTMzkkfHgh9ptfJUHLtYcQACg",
  "key12": "3W8jE7mqe3KnNqdiMs4kj7gWxFj4t6ovsaT47AbGpH4XEBLiTcZjuLmd7MjneDU7ACGcXHh8J8Bpf6w8j49w74i2",
  "key13": "2KQSesZQb6ypNmHHKEPhah5D14PMRHgFyngRE27fwMX6A6SK8rXKcW2GYyBbPJ3sNFgA6kMFtgVRfECDXnaikbU9",
  "key14": "42yPjmxSMr6CaNVCfiuFppPEdZwTGki5wvG8hP8J7t3YwXBXY9TRdcaVZCGwQLpwKoTPRkdpBB5SayFH6x3WYEsz",
  "key15": "2tzhGaDgbE8XkoG7RjmRTMCKcu1WcwfKtxyj5xTVYpZRuGGD4swoKJrZM5uNMv4EkNPnmn4DxXMinf4ro7od2GnA",
  "key16": "51FHAkezo24R5UVXmPF87Chgk2XKZZXaYSvxepqVWihinuLJRzjdE24qAHmkhpR28cz4k2z62LBNa7iTDusc6gx7",
  "key17": "4HUK7tM16uuJhYYt2A36iw8A1txvXKD3pgAJdvMvLQ2KZKJEEvfDcXpTwKKgm7PW9BW5bnw5rhUHmUFqwcLFyrhc",
  "key18": "we7189cgCrkHp4ngb6s5zUyM68x3LyQDVg2oZ4qinm9bGsNzDMM6XCazjAwptofbMm37ci5hFxjMB27wx5AduET",
  "key19": "55Vvh7zN36G1Pcq1jKxuGRPTdaGGkUhmjz7bQXsUt1Thv8ttgTZfCeaLU5xGHBCp6jArxiH4yjMXTi6rWCYzezLT",
  "key20": "2BwGx9yYTC68XZoB1MUpgeEcX332fpKt8koz64vLhxa1y6PZ2R1HQd3VncZKHMQkcfNagrgMXKA5ionQ86o4Egg",
  "key21": "2xzYMmaewn72urCT8R7YXVBsYJc4RQT4VQ4FFvbb8Tnjp8hWwZAHu5TyymGYz9qQkgycZ5HLFpVxFAPGdzKtrDDu",
  "key22": "2odL2W8MnQdpngsMHCAo9NKvSpiAXFZcEfDYDZM1GWTzFLFc9bsZmm9xssmAUrXFAu1c1MWgJ8EgxUFrzfT8SWMi",
  "key23": "1fGkZPpyGAJ1TTN9fvK8wB22kuP5ucTzVRtiJPZJ4VGtv3WTpFnCvnLSvzyfc4PxmHzfi8qEC59wriYcJUhNT8o",
  "key24": "3hnkXGoDvemHtxZWm7hj3M9Zhr5LraT5YBJL2miQ5NAvvs1qRUWtSv5fW6ggcjy4YeZtYKMm449MAbova7FkPLWk",
  "key25": "ihtobsFYs7e5LFtSTKzGYaAj214a4wQyrDwGa4pkh3iP2FqyNpXc9KMA2yHNezcjZwhKNEGpCM8z5SVEfRBvx6v",
  "key26": "2PsCwB6L3oLziL7r67PZ7yT3x7Xpd8RCEXz3rkWUZEPYJtcWj72fjU3CCY7VaFbEaSLzVDJb5XDKuuEKmnM5WZ25",
  "key27": "5Br1ZM9gy2GtmG2P58AysnvW2TJAzVJKcFTS3TfZMMwxSw2ovhs2Jad38wzxSegYpCUZi87XGt87M1bwZmydJwi6",
  "key28": "5rxGQk95Tqmj922KkzskPJBbE9C9vMjBt4RvX6uKEDk6CKxQ8xGuTJDtUWfd5sen393BaoMAaQY9YbaNqDpnaVNW",
  "key29": "3XJs7Q5FBvpmq7xw4ib3jj4H5Pj5pp9tPyZZqJspLkBE2resr8bXDwKz65ckEJPT3UtbRjKPJBd5whsZDq5J35dt",
  "key30": "3QkZcdJCkfu47h9VGdfxoV1GJxB6DhapVoyDCtgWvvLMpSZkc6AttDwRgYTZw6bJmVJnjricy4bKnhNNeqPTJmjt",
  "key31": "31muu3TCwXry5traqFxFS9ZQM2bWrbLVV7i1FHeAjg8dC6GVEX5BWfbaQJdGg97TmPP7DmNZ3WFUg3oEVJnRyu4F",
  "key32": "2pEsuiistQYHZ9tcGfnZiJibr6QjWkQRnjPvscZ7keC4VtBVf9CBRoywytQRsJTZdxm1k5pfxWwUXRFfxHBcCUoq",
  "key33": "2fj2d5o7KdrKFQzE5ze76yypMEpCuvPF4cPEh8etzprRMmLCdcYa4QyXCmz3cmRJfaGAK7nrCanFpiqB8KzEEpFU",
  "key34": "5jsyKobLuhgRdr9ESAHGc4cstX4E4y4WYWtbjeMd9jsFx9JWtL91WsyfzjDd7CKYT2dUDEBqVbhCg3e1kp91xGn5",
  "key35": "2P2AaMnYLJjx9YyzSaxWGTFsyQcYhWH8nxnq3FfexNmKBPhGGyBYpW427a3D9VnUUzevtZAFjBQovgBBcBwS3LZG",
  "key36": "4Lean8YfcPnZEGhpYe5wSadQBtLuJUUfLVjUdEUFCqEFr1ufvHU41YC31foiEDwJtmu49ZeTWvjKf7uwzF1qpgUe",
  "key37": "3YFGuQ8SnkV5cWXsKBrL4AnRJC1GSVH2T8tBoEjNDTWdmjH1AqJmXFHfmf5bdjLPfqQZtau2vfsjResYNATAsAXv"
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
