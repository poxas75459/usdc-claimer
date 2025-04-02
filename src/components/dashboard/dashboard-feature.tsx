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
    "5McSqHc6wTMNUAkhTe1CcPjrXg7tueuFF4Hf5rHMKxUNksYYbYkfmmoCKhwVEnpQRFsPTLhuzxQ5jGcd2CjS2LnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPZuMWZHSvveikBRMkFKv3Zw5iSD5nJdVKvZzmScyiwwFEhaCvSJ9Jsbsyv6ZjUKZFVE5FY39Vn51s4oKJz9Jbk",
  "key1": "64A4vvGNCEJnKU5ogReLUYspF6VTjv2rFGkPCE9MckzLKZneeDLFBPJZZbBoE8Sz6wG5mty2p9twmK1wSxVdjnwz",
  "key2": "4Snv2asR8LsHraB5CUQ1LfLmYbvwWP428iR59L3HxUKQn4xJw3Q2xPJXnbuTPssMjRGDRfsc3VX4iUBaTxsE2myK",
  "key3": "4kF5wK2wh1vCqaB1rpPKjn5guEDiN5RCKXxcp4BXRMeSg8uXgr22TdnZQ2RRHL8unPQPVJAFV7PgcqZ3keyHMMXJ",
  "key4": "4Leq6VrLKkin7CVG3LfGGdvDtHvZAxU3QA54gjeorwCWi57cz3DRr8wmGe3uCgeRrGog54juWpmykMkbywhqtWda",
  "key5": "4DmvSHM8eKvxDtNSG9M4DCNxpRR1RQXMkRmxUnJj9dBeHvGZxTkyZWVCP9b9Z5dr556jCXdjCWk39mmoibXzjP9w",
  "key6": "36YW1c9FP7ykWXMQFnsoLuMXQnHE5X11oXMucjUUrDW94egVoqEvS1LayiDKkxPKsT2JHHUhsKSJpF1XwxoDX6o5",
  "key7": "3ExvkbMwM6MytKgKRzdkhEbBCZhdNyVSfqJheTuEtc6WTbGUK8pc4RScA88qwgzo63AeTu9qxQH9fDGBdwcywseu",
  "key8": "5AhVfMu6h6BtZJ7ZsFSWRgfoJG5fozuybmGj9Y8pPJN8KZLb9zyeb1Ayo985DnPi9fk8MviSHEmBYvNRzhKvLndo",
  "key9": "2gUm45b15vRtP8NMG5oAY5pVfTmcp9ozBajRa1du3gAq8SdaUcSpEWfRAnSMxF7ywc4HLkMmxyL7wrvzbhbUKoUV",
  "key10": "45meKQL2FexPmYkGPDQMcRSokzLvJkkasoFyMxVadrVaYMwSPJw44Noc4EJWw36ZCjC9hamHB5CJWwMZDXdRFwab",
  "key11": "23tpBbxYDY3qVq9Z2vmZojugpB3FMCrV4YmKQWsxfdiRz4sUnrcLHFHuiLw1PqSjDT3nX7FnZ4bHANRpoybkZnpT",
  "key12": "5LLLbXqwQikLiEcJYzpd7XptABbWLBLNETQF6ZUDma9JeUGZLWFo5JEdW2AeSV344yA6QLjfQcr1XEmveWZPyP6u",
  "key13": "4wRbzedPsqp9fHhXfQoKF739pTL7zTRC8Lz8ovSCVCoMJfZ3bPmk5X7gbBXwKU9zbu845ti7iMTBK4dMgJeUFy4s",
  "key14": "4WTWFZBiBTzJ8sSnB78hJAJxvh312k48gWiUmWWTGM55yHYV2ADRW6sG18h3CCkFPQGj2P4PVmVNuXzjghetjCaC",
  "key15": "2SACeUnmJfrSFJTaWJb6arDuY2EyKF8JTAErw8x9bQzFic9BC84UMLftE5TdPqak2hFmqGAW5pY6reCTWV3UxPaJ",
  "key16": "djYyTiwcAhNtHL2CyJ8BazxwcBtbTvsab6n4AqUkGo5Q9vnszuSTQaAZCQjPWcmHi4z811FrWWe5QvQmL3JPD8U",
  "key17": "23eVLeZuMJevMUR1bd2Hr2ySGJdy3NUmMzhRrtgs6XFHbWK8CcKag7U3Z18FpTm7SPmjiEaTRUd8ApvwzkHqmqKC",
  "key18": "3k3re1AxSec5T9x6TbjWyqafpatiKN3nxga5hs52tivfEugYdLb5X43rebYqNwK82dUhvKejPB9j3kP7eJKVoj7B",
  "key19": "64cLBGnNKuVKfzq6vYyavracqNGSuav5AkiZ7haKtGT5gTpVzLH7BCWT1m7GjhEziR3Xd3QboMj99Xu55fhSxnfr",
  "key20": "JRUmC9YzbBVvcHF3ijXqwvAbomMddrdAHqaV974GYpvRMXKaVt578cMzAo3Mo3BeLd9XaA5gktjSr5P3PXYtvhm",
  "key21": "Hy4N9KvV5DrE2wTH3hhypiCDezMvYiS4MjPq8gPM948Pam4vVaaeVskMtMmxtcjFJ5zxb49iWspMbHLDgTtGFRb",
  "key22": "4EBY2vVPXFnMUR11d1gzF5VVarDogvBKvD21JvgkFU92nq6aRoZETZEM4GShwLvDzKrwhSaKFy4B9K8B8XZ2Qeic",
  "key23": "oM4oASkyBwf9eRt38EmDUbZGiqXCQfghYzPhSAtCRhvhBCdJGvG8y7t2ejaSx25SVRHGjUa6tuwvev2jJuqAqmu",
  "key24": "2Z3HQ11zKWDCkMDBTQnxzaizZ12C7VzwKQkFwk4isWxvsNmQeK7ZUAVQStWtfZ672kvxXAiKxSsX7eFKmoVhUkur",
  "key25": "5kbCJ9tV93LMppDrhMhG81XozfMKFjvR1HcAmjWc2NhfUZ4KW1iuAsAQ138ohh7XFuLkzdhivSbzGzZotgaJ84dU",
  "key26": "2deWc4xWRYTZv3xnLs5KKAQTWBvASxAVXQALLQgNVgUxN742yFUzx8niUjdzEzcPKtxDkALPbHX8Cd78urvejbwJ",
  "key27": "4UMqHuKFTGQvLHftL1FsSnUZV1ZkU7aXoFz7QVBybCz2awChZ17TzegNBA9noDkNkZ3rSfnh92ayk7Ubr87fhsZA",
  "key28": "44goqriyBhxcKM8KRQV7oXnpQKjwZbLEGC8nQyGNss5wV8dkPmdXZkxpfPVTnYxZnm9TMtTzAa85EtQ4PJM9ScMt",
  "key29": "2X47pSVKWT7MxZ4Zqxwye91Hs4fXuv4N4rygmV9cmBg5qDuPfizhF39QuNUiinfgZirGVtSRX4Kp3VqntRhRZZC6",
  "key30": "3MncYHSiWwMy1urwpZtV93kyT6ZW6DXQtb4urxDRBjw5pZpDA3y3dSHFGZRscbZKaL7HRwMwEdruMPmojjLrs5Bg",
  "key31": "2vYsrKz3sMHn24ypcB1oEBCWjof9qusZvufsN7L9TGmkwoDqT8SEEQJF7chvSHnttJn6U1KHqnb3Mr2A17uXbsZa",
  "key32": "2wEUdvrZGjer4UDxirWffCcKs4szqARPTCAgMchikFCMet3X1ST9fHYjzwD6oyc1XMWDVzTJcjWGu8VVxXAi1atN",
  "key33": "3sL5MVHTWzqszxY2XnVKsTgu6HH3cFw5k9DuD5yUzu9vd8MVx7ZGhk5PzdC46cZ1qpAh4PETfC2b5NMrdZV1DZcc",
  "key34": "3dDVUDtDFWoemPjupCDQB4smxo1jvCvPuZMuwhHu4WhE8feKqR6YDvDysLqf3SDmiGxspCsTZzQBQyvSahHiot2Z",
  "key35": "422pG51YvE9xBACHyqvNpCs9BELnW4UGkFu9DeVehAM4gtYk8bDsG7LjcZr5J9ryLFV2LbmiCArXuRqGGpgqnhpn",
  "key36": "xMsUrkRPd51h1XTq7Ybb4tUd5Sfn9yQvv6JEhMDLS7Tnk3QE5FPfWngN781XSBHdv7RrvzER68R8h2MnNjJMMrV",
  "key37": "4JhifqsSZpz1HbevL9bhkjLSP99ZN81GJV2ezHGnUukk34gCQBqyoMu85Ybk5A11A1LPHfZpCmZiULYfTkiDEkfa",
  "key38": "5S2umE9eKiBkExyWpgXSmoaPHfqizVwnLaJwyhHhCsU4U7KnzhcciH1nayhvjoQPde8o81EVzPciLzgv8LqoTRaU",
  "key39": "4EowHLDuCyffDuUCvnKnir1dKo2Mw6K1cgf6n2H4BtVGYiqMp3UqvSL6GLEk3CJ63oVYkYwcC2K7qsFf9puiZZdi",
  "key40": "5Wt6fGu9kQ3ujwhNEmGkBGbZkDkhVcJ4BsABcvvR6mXramNpzPXbVHoChq9413ge7BeyoEvffb78A5MMdUH5RmWC",
  "key41": "35zWg27mUdJYnuMcpqyXcao5wQyybC9HBLNQdUa54k5MJ5Ve5ueA9AgeDrpUu6ePgzY2agnTWdcizHkcEZYep11Q",
  "key42": "3X4cV4KXndLShZCbUWMHaxJWgi6ZDJaH1wcVh1i14CdcvgMRbLwc6SNCN4NLTZczFMKPTfLh1PkauMZv41Xwm2KP",
  "key43": "4bW97kRmp4zo8heYyFKxcMAsKYt38QUzf4HJUaKVEHkg7RpNZMSmLuPaeebcStsSuQMcYm6FYcbpCQaxgHFSuADJ",
  "key44": "2sk8YRnZwzF6yB2onqQaaXuzERRxCrCVTiMcrtrRYPHnwm1Q7427fzdxNj2ecBqTj51WLQPgSb9ke19Z66HnFQjo",
  "key45": "Mzh242615HqmiihNvd5QuVTdN3JteRKCbHVEmSuUn4E7E6XGKvsEM7VBz4xPYeGbU5mHh6kLBYrsKxSVpwtNv55",
  "key46": "2dB6agt8YvXBo97EspArgCSfjrxdNYpX9XL8hYDH3LwWXdu4xyd7jErGQ8KQqcUpHJuKCMYy2rnjvPxgHofnmiMf",
  "key47": "w6ZswTC49rgDCLGAS8tXUvkv25xzu37yaFHwp2VnjQEwunKYffbCAxJKHqAkNkoiMcKTM8tCo7rSvUfChyJXxYm",
  "key48": "58BJec4LMYUTghdJ8CACRXnic27GGv8TRbuwTCRgEfEUhPcQK6S2BFAM6U2YbXqa2yc3HwuAD8uA164VGohdsQJg",
  "key49": "4KyZpViWMb4crn54gChXKbbp9kzaSfGY4RqfhWGAtVyxVgzDmmBJcKVrn42sRg3n553UzVApdKvqNfj6YgsoAx7w"
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
