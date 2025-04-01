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
    "3pjkmW82t8eR77AsurJ6j2bMhC6JJ7KUrqmi2f92dj8ZRQ2KXKeB6QpPySaRQPEBzS6Fihho3XJe9PwLuTeJGAsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yQv6SpDQnDj4Qd6BqYig5J9iq1wiAbvjw7BDDtu8rKD2mEZ2idoTnocxG5eq8vmUPFCVDAHzbGMzmBCohCtxgY",
  "key1": "4bVkDisjTQyb6pJz2NCEjn23qRmwRQK8whjAMeDZPg697WYFW4gydjxztvzzH6jzagHHmBoQKve7QLLzSwmSqpik",
  "key2": "e6WduhWmDkpwtc7MjdpsHycA9wwGu1DLGgyame61hHwqibew2pwvfMGc7uSBG6xAijUcqFFJWW1DHGZgYdfZosJ",
  "key3": "KoXu1TTGB6usjhXiCDPJYDdSKRLBnkFNk4d5xrG9dvNUVduKzNGfnvqXQ6uzjUVyAfTBtrZJUaqUEnzGBUmBTUR",
  "key4": "28gqaabbfP7XCKFpKDEGT64DKWcBDeMkjKPeSCeDZAq8emzSJzX3wtNBxDtV7c9CGAecAcGkJ2Dzy46MiXERed5R",
  "key5": "2beru7mUtACNaqRTbpTVkdY9kDsZZex1gBByf4EykDnFmMqFS7bQjAQPzvw27CnbXKjqprqaioK1vnUzHUex4WcG",
  "key6": "BRGXwXLcucbVBHgfv3i356YJQVobm98fCJFg7iT1Uj1aWp51ubrV1jnRhho91MvnQCWaSp8iAoW1V4o38xXzGNs",
  "key7": "2rrT76ZdLoHefK1feHTUm2b3c1JPt44wiS1cgvn4YyWwmheYhAbrZWWkiBP5rQYuZVytmtWWAbHBCWNtwTYnczsh",
  "key8": "5h1jiweYZLriaT4s73zKbv6geMsKwaU1q5g1PXEq9cmzji7UrrQkrWevuzATmeq7NgUdAyySzPWnJ1mNDkTMUzbH",
  "key9": "S9TVeFLiqeNsgdzkE2RESmyfG6Xq5ftfuZbU9oUopmRfjevSQieK7SA52qUZggWbEutyGDttudMDCakkuogVyKL",
  "key10": "2iiaPvjmX92iEEi78RM2whrbbzznWmsgpvWzhqJRfkKwNPDq2DivcUELkjAb4oYFWChwHW8K9fwCdNCrMHduHyDT",
  "key11": "29rFSSYbxTPuA2sxHghhBAoHjVgynXk7HZFVZ3KZXuc7iNq6S82En7i5NFu1uzd5yf4NMdAoqzyr2yoHNGXNYqha",
  "key12": "3rmMQwFdeAnFJAu7pvBjoR7o4qqVputM8wdfw5CziP2BpULco3bEMB6TWXovebSxbCe2DMBoZEL7QPNYPaGtLaiY",
  "key13": "3kvCgCBc5DRB5tVS5MKCTpDu3jt4qbyN1kVhsWBY16giTnCv4cicoH6GYnx2iFGDqNbcW4MKTQHn2feHAJAy53xb",
  "key14": "6ZgRy3hJEmUaY4QWcDQBBesb3nCyZ6fTx7Z6GxeSSkRRDrPS2gCitgaX9WiuomwK6Sopw52K1XevCCadZ8usCEG",
  "key15": "2RGxhZpdyQMzB5GFLwmh298RPsiwQXDihWkFPcAY8ApfDKWitupA1BsEC8jK8jA7pNoWYbDoFqKX7466rMHFCvxL",
  "key16": "45ZzKZxENhA1mbmYAxc2sX9tCLmPcaK7LdH2vhEbkmnHzPQN9nVX1okuZKnNSFy6bm6a4uXXarmzJnjKf9KsbqV3",
  "key17": "5R54RyJ5SFJhrPQomxPqrmSDdZ3fHTuz48LSjVi2ezq2rHzoC6brnBbtt8KfNym23A9VEbQEunFRX6PUA1VcnRJF",
  "key18": "3bHWQqP64Wp7eBUKPhsYc3J5uCQ44eLmRfAV7B2rCPpn8rUxxiu1X6KioCFqAUMqiCt97XocEgNWcmhn8edMsN6F",
  "key19": "UrXABErCyK2jg1YhNvuaP4DwAa9eonZurt1YMpDq3pnfSTQ5bhDCY1ZNbSv8W8bzQzZ1sjHN3EqGFgEJ1pNx119",
  "key20": "5hx4uh2DWfw4gZ3qqMe689Ce38oMB9Woa9SF8yN8r8VVXBfBRwEGD9p8bjifGBXDHCMusfLgWqyT3Mg2QR9zaXRA",
  "key21": "2aSc7RzrFPEFG7wSwkXTxPeeAp1awzrJGDgzjGiCCiF92qGFAzCxKbnrBGLvywRNgpaP3Ggv2coXLaw8PV3iNk6r",
  "key22": "RLEPHZZbNj7W6ej68TiJ2abw4TqYazBvNhcZTYyorxUceQVr7PQrY7mTnD3U25HskRUVScGojuor5yUsZHZp2uj",
  "key23": "2ZVNv1ohB2JLCBXCNZ8qhvT74zUTuACajw4BKoWsjkdGhteCmSkBXTbCn7n1tYLtR97Ewg1JLVUczXskWQKs53cB",
  "key24": "5tRhDgwDDn7r4E9pqZorsCUZXypLfAHDz4KB69JSYHxcPY1ytj8ekRCQxjWLhXTnJqWZKtoaZo6dvfio4r9pkMLF",
  "key25": "2f2V3WqQbjGi7sNH4ZoygNiGQSgaGhdZ3ZFSnM79nkcUnLyJB1VutBzqzKfEf62GRwjTJypQYMWhcUV1RkSQrQE1",
  "key26": "45kc8Sp39jkXG4biftssQZdHNjVSVyt1qT7qnPziXLghoDAqRux1hMW58G3k84GsLRruffyrnCBps9NdHUxiWdQH",
  "key27": "5vswFg9N85kX1w8bdRg5t3hJwWdkUSQvoNF4gsTk67CbrojKDbLspNnVghnqb7xVZ7L2Q8emVWHppBWRWDHXEhrm",
  "key28": "5kMzwmMG9g9x81kdY4RoGnGw5TdBCGPMe5g4SDu5buCqCwz6AipBRfs9j4VbEsfT83Va9TuUypaLpaWC1HcooNLd",
  "key29": "3CU7dAj1mtvZnNvouaK6VZVQdzZuA2R2rpH8ooGPdpc59iE3kRj7KeWFh3Vv7db88xLmWrQTxik8TDKsGakBgm2L",
  "key30": "ZratLj8XpjbXnMkMUXX7rZWevgd6cnHjQfzsUPAqDsNeFFgTAPjBu3r4SAsgVuWh7thusoRsEkruqK7so4g35FT",
  "key31": "4Eb1zPXDwVM52spHXCovd3whw4Rg2CAmFK1eRXCqeaUfwnRkPWXjWgJJRN8yLgHYrG4yXwZ5aGxus5czySP4fgMi",
  "key32": "61z8VfZzxnBPBEUf77DnccWKHDVp9ABFSisb91twsAY2FnsSnCsVxyVbqmkMS3nsuFEe4GxEi7BuQwvCs5jBcKQm",
  "key33": "4CZrF7biATWg1cjqXp8nG9JPKm6vSv7Xj5P5vAQRceeZQAUJff7bBFHERNt1g6qhjYb9BzFKUNkHLnPAaGfnYcvy",
  "key34": "5AHNoiCU6HAvi41N7WUw27AQ27fPCL41J8SurUKNWQb4TMkYuEmELmVKLRnrFqpbABqoymF3vBFiNqu6HDeKET9H",
  "key35": "UyMJ214RHBKvjducPMJFVDtzoc2B78YWaP44wh1H7ASsan8HhkioMUxJEHkQU3gyu4fDP65y12sCZLh4BvG5Fbn",
  "key36": "33P8fJQQgdWpFUfb9kqfrmCZv3F15FB69bCrGhX1y67QccPWjScH5x2Nd1fJNenF7osc3c8m5hgL6kdvq2JsJv4t",
  "key37": "2MWgmy5RMyd5B5gMvicbMcVeL5ntygdJeUXcJEHmfdRDz4bS49hD3pQ5iadAYcMpcB7UqPerrmuQet7kE4UGoAGq",
  "key38": "GDTFk8BgC1mrcbJvx5LXa577KP7fsT5KE8mkQ2BXrTsjhiYoN4XumZKhrQC7iCSFSPotEQFpGEC3AUs5mzfS5kf"
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
