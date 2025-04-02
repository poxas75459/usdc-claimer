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
    "2mi37EKHgyWCRM2RrGCWFBuuenUE5Ko1o1QrmkMqug7LdihtwqYpVC4krJG8rXNDmq8uRdtFukZY7QfXUJqfyeGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZfaiWL4GPTFit3uV2RpfDpyZEtw6s6JEgLi7WWUw9Jkg5SXZdixHRcTUiw9c8LMWEVrEfJBgTh2qwtyx2FLUj3k",
  "key1": "3ytXjoevE4bAivgz7zLEcQLTAXnfmfw8zWz8Z9hBPNRzmMSroMXdeynX9yfnrkRk2NuBgJM9PsGuTsyE549Srcp6",
  "key2": "2q1h9YiZzMgfuMe3c9hpigS47ve8GMMte3Y3n5Yx9tkFHDyj6MvNtK5LGMVhgvKNbXRYQBLsmTnQtRAxMoS75RZT",
  "key3": "2JWaxB3fC4s9cWZegmD6DuRsU8tYyZdFdZhtkPeLPQsyV3mr4G1z2grsd5eatMnbwFz8gjwwKLY2RoAowsHizoMU",
  "key4": "4yHnKdRaS1c9Sg9Ud4BVKXyUm9sczJZokK6frembGcqxTfzxK26oVkAxjsnWe4m87vLC1WnN6Fj1rhvwo3cFCj7h",
  "key5": "3xaecvHtxupPH77xfuiyQxR4sbvHCcHj1PfQK4wgUnNMzpwpcLeCKtCR4TNy7wupMR4cnpS9dWqBTE9HBSGMfR9h",
  "key6": "3a7E2RQZShAftCU3wfR6Wr7aegcRo8Gt2AJ2D5TGmMUbM5UAnFTXicJ7EAoNEqVKVktdUWzViS1GKBFJfjfzzgh2",
  "key7": "3wi3qxrMjniXuwh4z7rUxGKgSZHTTLBBXZdsMVRoUDFDKgDRsW72aJDfLxBPbEiMRxv1GMswn7pMrzicYDyxWEM1",
  "key8": "XFgxqAS3atdjyyPsA3XwMBZcAoZumhJSpMZkRpmkTj5bntw6wSb8x6bzRcca3DAhEpKUcr33yx4JqtC8HDnFhNg",
  "key9": "4iiSHwVv4EkbrqVtj13eh2xjs1TqkckZjYjpZ4aBbPPD6UiHZqupve9XJPNjYZqNcYB4Xz9msxCb8388juGM2ZFd",
  "key10": "pRhtV8WTjUXGkDrMjZLhWmQ5uYA4jEJqcQk2gPhizckS81CR7xbMXM1hxapggRwxAkDaGwn7AGKe1rapNJGX3pC",
  "key11": "4187uPtwB4TBEfSn5L6MjGwB3VXWrQkBUxyJnEdbzZRrFXHYJLqdYxLQK9PajtY46CRPJGmwdVb3wrk8LhAbR41G",
  "key12": "5mRrpkHpu4XjHocz3J8wr8tAwDauRrHUvqrVTFJEVJDSAXuh1FuguacZ9vY3xEK3xTKtHRpbCh2RZTArzkf3weuj",
  "key13": "5jeZUrUsKbUH81VZSGmurs7akhwXjREpuC9TFGFzR5fVRAgA35bzMEiLQw9GrJLzz9kQfwpWWpCGorYL2mnsfxca",
  "key14": "5UEBhZjcExCyfQYNwtQs5xHmejtLtQewarWNywLKVBTZraFa9Ln9zd345jBznNsT2j6VUMgFENNioCK973rxTUoA",
  "key15": "4BUAvUNVMYGQ5CpCShLejBfJdqKjEFGXRLb3PwGtHd1q12peqA5Kbvx7buHmZUTHRHYckrdrA9CjUMSdYrHXQLPi",
  "key16": "419uWxTaBvmh9oEyXYxyJPLbHNsAbJFSXvxPbBu3N9TiakV7CTD78j5sijghBEXcEoMXo14endQy7CLsNWDxpya4",
  "key17": "3oUskTwzrsmMb3HZEeoVZPxoStnf2bakDcbLQxvFTRX4xJxh8vdtMkNmqn3cNwxebNiAMfHJDFmNeu4HJmuRibxp",
  "key18": "qUY2vRqPX94a1yB6oRoBn9N4trYwbbx1Hfv6Q83Nt3PQQauK1xDHGegNck8vjUbpHNUYod288PRucsfxZFmYQFm",
  "key19": "3AdMoA2Hg8hPwakvBvW3AENeUXVwkRPpGJsFCSbC3dXRJuVbEzeRE6EmQc2hSQzzbo68xgFUZgkd6jv2VMCV7gph",
  "key20": "4VZFKJ1aH4MmdCq2x6j84tgCUQghypcmzw3esTakdQyBgWnnYg1ZwBbnFf1VBrPNBe1AfP8CHFmgFwQrKZNQNBze",
  "key21": "54iFBvs5oEbkctHzG3WwYPfViyzM4FrqJq5JHp2vpGoLj1RDEiMrcALJAVFCucvjo5o5CPDLZWK6zemb7ju7yJcS",
  "key22": "9miPepTPBoX9KKtcQm8RVd54LApgspkb2d41KtbuKkBWVVgfUtQhtTkDpcn78ZuHJQQskvUnAYbATEd1fCjL8vJ",
  "key23": "5vUScUPbM3dRLQLsHLbKPb4SohALMi2SqEXJqSQ4RQkCufDcPegGTefAynMP3oqgyLRRvhjyWEhRMLxbG6GsdHNZ",
  "key24": "4tihcvWXbwp2Ch7u72xxSYTMHXKi12VGBMozwUQru2TCd84UBU1y74AUSFUXZjf1wuJVdessyPZaGRrpg3UxAnCN",
  "key25": "kx36YuqyCtM1eaAbHx7BbREonorcwk4bG6Wk7WC9drw8MWFhMyJduDnBeTZj1aLwywp5M3jTNmvgYeqCBzmPGxy",
  "key26": "5y1XiYTTem6WdJWK9ojyPzCrpwQCq4mfLdTbGFyEyoSFiaoWcfEHhWTrsqww34cnCKpJ1uTZYfgPm8kEtvpFEsbR",
  "key27": "27BmCNz79xrWpcKzfqqonYtvXecRC4H4JjkQzEJ4gdLzTLAJMawhoCkbhvN7Dz1JdoZsyCyMLc1VbKRuTuwmjxzr",
  "key28": "5sx7cpMMiKZYvAsQ6kc4BwHJfnrT1KGzqzT92WzquhjeaBgU27Rb4kLDM1XarMg7Js9z4GT9NB8Nmdo9QVB4NnCU",
  "key29": "4DTfrw7JgMoFWYLsFA9XT7QjeeyFy481EJhUq9rsRuYQjJo6wT2ZCsMZRWth2gcN8t2226kyyX8tJDya5Fehrwu8",
  "key30": "5RTcZDoCSSeQXKGYnMuRnweVEeMJNpdTyvQv2TNWQ5xPmfgvCeH2fsv8XDXextr8wKStHGsdimkHy8Q941rxhCby",
  "key31": "245iyors8oHvREV7NHUXU5cxbAnRuRsQYqvHeQ3Pbx5s8Z4F7dZHnQZdGqQbqMmRSshRT82oU837ASetVAvGGMtP",
  "key32": "5R2S83kHRTuvKv7RkNHWh5wzRrT6WoEFzehmiBVcibuqPdnq5swPHFApSW1iJ6GxiaNzpnzvGFVi6svbGN6q99Li",
  "key33": "2wGBw3quKZb39UMDiUaaYgPMyuxXi49iveYzdAvHtDKeUcRjnJpn2ypMkZ6WYKvVxmKXZDWh8cHirs57oyND78UP",
  "key34": "2gAipqeWecbGqP1X8UbcKE41u5PTygrubi2pN2VgpQKutjE3YmtrtGd6booZ3dZKVEPtqbeEZRq7TEdBVjXwuBhU",
  "key35": "469ApmLWp161UfGNGMvck4E69c9LjJLRvbaJQGpE1HqrQLYAD2NahWXea5o6Qa4VNV4nah5grFbJecjQa2BD81sW",
  "key36": "4oo7EpzkPBtmRr71sq3U8G2QAdhJ2L6sxcZrwcxUq1xouUMWjpQVemEMnvuWyRHUHEVFHkYChmecLqs2NdSATerD",
  "key37": "2uKRhhz4iWYDwibcqE8AqneRXrgqPYJU4xpA3hxSEsqBqiUfKC6EiAUf73tkGL5UTctAwumYgEZcqL6ra4tjBgN5",
  "key38": "3Q4FtHycCupTtJTrbdV96K7R2L3hwMGaztRedmnyuVA7UwzfJJKdD3CPCur1ZYBPvSTTZieiySDamubrUUv8pN6u",
  "key39": "49cfFKX75mvTizKoorq6NxbhNTfKCyBvKWdVfDhZXRaJuCq2YuNp6DmqDBJ45yx4PnsG9o4fNfWs572bSeC3dddq",
  "key40": "4LWXs5DMzvUonGP78dGeEobT3u3NT2Ym6ZCp4GDUTkqDu4XLchEuEqEKur65JzTyWa5C4mv9qMopWFYW8UXfJSx5"
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
