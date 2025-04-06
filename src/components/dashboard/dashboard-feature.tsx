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
    "3w2HWUcqJhkL4Pc7h33oFAGzbr3ckPgnHDnj8KVTH4FNDtLbbZL7yA7id5PBvjWaKn2R3QAbxGDJYK1HhBU3UtdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFy7irW37hbQgSu8xpCdmZL46ZG2Zk6S6Vzfj9tmhYgSG8MSLUj1sNKcBP9ULGC1k9eqyv12tp3hK7P2c5w9Y66",
  "key1": "5MYd5yBAuQSXBZU6Z4JPQE3FPT7dcbFj7PNjtC7EcagQopDkh1ZbyntQgDC7rESUg1X2NBRpTBWEY3RXEiNbAgn",
  "key2": "b6YcXntwYqFwj3Gp8Xet9S6YjqfQukDkRwZjoggcx8yhEJ8GwmSCUCQPCXed79ss7cjS9h43Y9JoWNdh2espe6D",
  "key3": "4S9m8r1Hbprc3CfKNoFa5pTzmv1q3Fzas6Hpkwyqw5pZGZ5igjuVTtWa8g9QjRx8fbz4zSvupH7Gos7SwKKEyCne",
  "key4": "RujvZR2ttVxmSkXVMqyvTBJdD1VsMX6esDPWNcc7491eGhyqQddwwgYuuPu9ZDULUNuARRsmRzWN6HxsxHyZbCk",
  "key5": "4vPsKozL5DTMqXRjniFtVAb8syKjFzg13goQsrAnpivp8UWy1NHNDizKEAB8iAz35WBdfaTv7LLNtj7Bi9KrR1cZ",
  "key6": "28aEHVDWDPVMimo55PpMHS7iSWb5zKUdf9bWMo4hXACiXVKSffRdXGGVccDEudNq2LFemSjFuYfbXHUVsmwL3AkF",
  "key7": "USi8NMb5J3wwhQYXTVcejkGCSnHTMPXyyQkbxWjDFU88VCyZwEBEM3M7KddVhLaDUggxZEc6pURMYzgTNqm2yGa",
  "key8": "2AAygb3SeMfamifFfLPMfo2kbhbPvMqGMdEwMKhPGesxJkzaQJFzQ1vYAD4aoN5q1vqhJrCZPLC4FcMxTxVEXwzD",
  "key9": "2g2b3FJeBWdUFb4AESMXRsiCN4ihks8UY8Qd1LuCLA5z5jB2Nb7TV8VZae461HuH6LQHjNmdiTBC7fNvWspoZvN9",
  "key10": "2i8MRWtfKWnj7bo16iNRfGfiCyUir2WqAyfMKAygiBu4PHq9xtbbxUckZriaYRGiEbHR8s61RuxxrH6tXq6BLAxL",
  "key11": "2mj5eB5ujciAaPZaxzPaN5jdsxaFhgbejNDEQ6P9g5o6ikb2bGp3BRVipoiTbqf4pM2UvyjT5aKbMMi7YPu434uo",
  "key12": "475159JCCyYavUjzcnz2JLfCetPCNfXsR9q4jdqbiZQ3udS5UijSHBzNdxG6d7fQFS3dk757kC3oXbCXVg7coEH1",
  "key13": "3XYfJpSH8G8VPEgHUYswrvfEm8CQSiVopS79AUtC6crWUkLSfhPgbXHMBgBRkdvTjGCoeVrfafcFeLVpABmxyJRc",
  "key14": "XJv41ekascUm1p3LLrQ1Fh9XLXF8t5GeRwizoshxb3EL6AeszHEfRi26HEnMVtCuaqRDPgJSrEEYzxGPFpQcBCm",
  "key15": "2WVLDDkHsGBv75RDBW641KPZCgrJiYtzRivhtbCu3qMqioCvmrXaTjtwmwqRLQHAfNSR9Y6hVXw7EYVGSmf4BByg",
  "key16": "2ALnmTtF8SpFdfv3iDHEoFmPXDoKgZfV1c1khvnjbZAUx4WwnNM3pTNZHbgfJ2yYyuRB8EH56kThV7rZQu5x1cFZ",
  "key17": "7uxbX2zA3ELS3twWdDcrmC6GDx7SaFvQuDH35xX3xQhHS74FpPX2R1L9qtUM5HXDpsxNoAaahmUuZCjLkDdfmxz",
  "key18": "4w3qHmf9eSmhw46kyStZfYCmfNr2YHVCSkgW6FWv3vdvsb133P2XCLk25kjFg1ySjFGPZzNjGWB6qv7GMcKBpYDc",
  "key19": "3MB5J7JEudbHmz8xwtaSJddSmvjfsu9rG3Rkc2X939SKAqxBC3JN7166eai4jk7PDTJuZRFkEzHkLTn2e7yyNxt1",
  "key20": "2ufPxbF9Q6HftvwaVESPH29Ea3CkMwRofee26s24Ji555eD5HjxMrRX8QoQoUvWQkiQpPK1LiycE6jb6KwyAuRwY",
  "key21": "3L4HJ27wzqeLUToJz5VCAfQg4KMdoomf4U3efXGF4foGaUfoBpZ7cdYXPNMo1aM2XY3fDj3HMwNnBx113eSbb6vE",
  "key22": "4LhpHKs8BHfKQKS8L4DxYvQLmsaRjmdAZfLys1iMrhmAbp5ETjSXPRgcai9XE1eymd4QAgDmvY7ZRsaCPjDnM7vk",
  "key23": "2a7twBxSigc9FZ5bW5QJdJXSTmvpouqkV9oGcwfSSUpxtUecaMe1sL8cd6B96GhrZhQzYUXfyBctnMa16rvwL92K",
  "key24": "5xFHrYqimf9D5NCbJHWYfqnQkJ3dNWgS1222ej2YXpsPH9GYF1neKCgeh6PXHnQWFM5dCZMsyv8yipAW7VWfLQwi",
  "key25": "3wWJjEE5NmPS1c2n9Ebu3BP2rufExtQBhSjuSdge6Dxar875XGVVPeG79mh3YrBMxcucuA4uD7dL9ZfJzgSyM33j",
  "key26": "2Xje5spw2RB1auC3yVia1xGAttpXcM4TdEWTRiZPsFmzh15UzAxxxqtkDW4efid2aQZLSRof4FVrSthNafiequZf",
  "key27": "5iHcNZGHjJyUvvdowACru8pjpYLuX141afSxzFqHk8DJyvH8SHqgvJMJLiEXSHXzYYQ7nEDBxD4PLPrxoBnroqAG",
  "key28": "4tT6eJLd6sKCzrbpyezEZ5ZhGBnwNUM8utG4YGZur839WqiWLCodvkNkZFQqeqsYG4Vt5hTERtw4Jrxj8sRzs2Pi",
  "key29": "pThsTezUXsfeqad8Jmk14zQEgT8eoEYCy4k8L9YhxChGcfFsUuYofbkEMgZXmKHHpmbrkRfo8XFheTEYdz9D9YD",
  "key30": "uHUmjXDfEdBm1DDvPSfHJuGtk5HpUg6tUezhompUdjZjsHZxTvMxrohXTtN65br6MurmjnvVShitYTKsJkxbfWh",
  "key31": "3Pyj2oE4rpcvzTx2Y92zXUKRubyrw8MiQFZUboDhkaFaoG9cDVxDFmvhZFLbPpKmbf7hP7CL4FK4skfeJYH1u9C",
  "key32": "3HZbxBo9PSHyGxJYVky9boWjnXVcnM1pmtMiPSHRKLhZLzJ3CAB92gkK48avtqd1NXPWDVoFz1Vr3kUfAx5hSjzc",
  "key33": "5FAzqgUuTAsrSRVr3VaDvXuT2h4wbBZJ2eW6z4Ps9a5UxsifdH9KyifLKbx8AhB9qNqpKrekL6icYAhHVCjMX4T",
  "key34": "5QAV8W1YyJbFrmELXhuoWkQfd8ukibdojrsRjfrf52JBu3ZvkQcgYrzTGMdfgEkyM6XLViWDexennRqs2maRJoyc",
  "key35": "52DorqTRnjZZ1iVKgcYwZNHn5PJLaTH1q4YAWD5GVsgZm4J82VyfAKwy5GGo3ixVhnTkk4RPfxum1MzZkgCTYNt7",
  "key36": "5xebksuW9yxJBhNjALdoWEw6KQahAifMzMwTk7aZUrS3z51dkgJCfRoAzZTFmppYshWK9XKHHKPe2rNEEeFb3BEM",
  "key37": "2qxfGVCxnGy64kV3ucqZqJBdQsncSuUPbYYJPQEd4skhSbwguv6UDuoYZvjmkTz39oowdDdCZ3PkTaz1xwRYLC1d",
  "key38": "65ZTwdas9WKFRfTmsDwgDZtvqeTENnoLkDzx6WwwXoA489KdyHTtyWY2VwffzvPZAqjBVGZr6jbWFtWZR8iMmygb",
  "key39": "SosSmGhh2JwKPuJgbS9cPJFWjwWXgCGPLTCcRLbgf7q94rLxa3LDLyfiJf4M3mKeLxmQfHkfjMtTpmXNXJGsCrZ",
  "key40": "3Fba64MxJgHtYqrht4gojWVpvd4vErBSjxF3gVF61dwsqb9cm6WVdS2qeDGRpkBDQjLBswVnKwr8tTdkaf4MDeyL",
  "key41": "2gk66tqYuEsWiaRgUZQg8cWtAZeSqBP9L6k9VMGJFyWqnUPie8VxDSTaLMuh6GBoMBYk61EgZFkgayusEiwmySH",
  "key42": "2HZan9K6AYR2UA5ugxYqWDJNEPh5Jhc26dc99dgW16WZcWar8xr8LyUQNBHBgPmXccVSnnx2MKhsDGSn2GYd1YX6",
  "key43": "3Q3p6rvstGXaQi5SzyFXN1uLjP1VbpE8xmvqDoYBHpUnXXGdEi98BGLxtuEUGakq71V3eAmeC4aLZXTaS7DTmfVC",
  "key44": "4FGnygBkZmj1SudFzK9ZoXjZjwb3MCYYch7Xjtg7GrDfuhiYsqtth4Dd4wybNdUhHJ5U5acDRnqNGvYxNibAnutT",
  "key45": "6QekEpxYBujWyrpVb6xSTBJ5XmPqUtoWGVXopRJ8RB3HSVQPFaRx6XNe6HdrKqhYWH1NMQQFCNRVG5bJTMQ1QaT",
  "key46": "2gM3ThwUTqMDnSA33rSGj7xcfbTjUKt1crVjNK1FMDkfKLofh6W6V1dFb2CLoi8YAgWXNHqdRvkVEBBgkV2JtAbJ",
  "key47": "2VibTMUdEg4tf2HRYeVCDZ3VNygudCG4P4Fm7huwMRjRRMK7P9HXdW7AXZ4SPBjKEQnhS4QYifqk3t255ZAD3HJL",
  "key48": "47FWUFGh4Z4bD32J7mf9kGzt3UcWgZ7nwg9DZ1UmEjzkXcecxBErwDQDBFZdX4Jw5jUayZyvhv2RHZdpLpvxKDUr"
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
