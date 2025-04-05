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
    "3r2pEgbG7UCn8Ba7sbeQ8mkqNMAYhFFCSLidbP3FXQgQo996SuHZrUoNsR6Tz29LRm87W6MhW1gM2wukzseehhLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24nvaqiX8YMF9LZWFbYM5SGjokyhoBNASGmJQ4TrsnBEbJUbDRmVm2Ezx9eJ5CXxC1FCqA8XeNvTJNnfQ36H7xqL",
  "key1": "57WafjYBAKHqnWbXXkXL5LjFESLw8LKJoP9Laz7SEpYeKQ8d3WtXyZUCCVxJU6dQhCsgvoc4faYBrekUWTf466jX",
  "key2": "4o9rTcJpeNVuBEW13jdMsdZ96eh5bmo4ZwM7TPJwT4ooMzEC31SYKneCbuAxiVFMAMKJyGPxTdyvmCjZ4Y9fhU4b",
  "key3": "X7eqLYFX9hbhtfpf2bd5E5nwwpeu6BHRTJpGpppCdHxxS8x1Em67Qu8NSLgMmSiHdd1cREqcMefqHwRZFC8x9np",
  "key4": "3oCcgYruXbkaeovfsLdZytx98oT7FDPJeBLdZJnRzdZmMGymoAMsMT2zXKeybMDH9qWU6z2zZ4iLkVHQtAc25nLn",
  "key5": "4xnJADiVpmZah3da6SbUvAeG4XUtMuK2dFEW7Ns4TjZkEjWxfh4T9EeapnG7fzjTmzFuErHhawXsv3Qh2mDtS8ir",
  "key6": "5WLBVXhinbNBfucVveX8P5BuDpqrbBCtEbwqiSfNsRm516iQDcwffWS2YxcbphbBEQ6TwFNpD7ob3mBvWvofTumg",
  "key7": "2jAksNhTAxbvUdb2C9zxoghFFRBtyaB1f2CKtWoSxV7R5XJNQRmGq9KfsNnAZaZjuAjy9QLGD73o3Ai1ERTrZGry",
  "key8": "2sJbUc6SyLcaF2mrJxLxiwz9Q3hGd1VwF6hn3TUf4Lb1TeTiN8YpjmWvAE4SjNwxJT6Uwe2NeFtRYSFHJksiHEtm",
  "key9": "3fb9KbE28UwYZWq1ASHbb7jovReE6xCQz8KUB5DsgHYUT8u5YrjBDHC5dqaSzMdGzcVhjwz4RvU8CJRsoqXPgFD6",
  "key10": "29NK5ksFfZDZj172wghWvZMgYDdCQpU5ncoTC81kAckP1iVsZg5zYH18Pv4Pn6oSWRYJC7voup1N1NTpiP2anpum",
  "key11": "5SaESaqKGqynYueJDo5dzC5vsJU3VhYW8LjWZUp211v6yrcNgMRhZk72Rgme8QUomQGpeztDbX7nEMbSENFN83AU",
  "key12": "33sCAdW7ZrTRsP9oppE6d8HPhXkbFr1RjrKxy6RHk1WSQQKE3F8nBSJXqU6RcnLTrqGco6j7JPxPifUdMPCgWsZE",
  "key13": "Yhganw1qWpUMcGM3f8zx7Tjn3NGUmfpg8wnKGfaibuX9neLC66cFMktA2yKTcE8Ec1gS9PamnCqJqSuNcvdSQoC",
  "key14": "MjAcZRzPwz77nJXtYJvcSG2dxRCrMPFoCjbpL7rFRWf8zUNNHHJo2jxagxNmKjyUkp64heazHT2syniTuNWMHuE",
  "key15": "2ZWK82zR539hYC2o6b4Hx3UeKZzMe5XGS9tAmmSSoUWUYXexieiHpggsJmF1C9dNT6nLuYN5ktUtJck2LmLnXyq9",
  "key16": "2mDU5xv6esrKmiGQD2ruSLvdb1YN7DiUkb1ux9vytqg36cuRuVKYNdj5LULcxuQd6Km79ngrbvJcKPobv3BtJPaK",
  "key17": "2SbCEcU6xeHJG2fj3tqFueZwqm79Zt2jET4U23XZhMBj4DmSPykhP4Ny6HKgWSAChzXu6t4Fhq7tXSDJv8ZCSgJF",
  "key18": "4u8VfpqSbzPePaV8JLoRTPFHMtY92jqwzBMaPPwpshGnq36erPW4D5JRSahz3Gd4zQ4nBScFi5h3CCF9A4EL2suY",
  "key19": "5Fyz9XRWN5hYVU1GEiSaq1Gbv9KKatAqFdSfELKjHB3wojV7n4XLLVWmWLPFZqGNPzSm11Ms3DZ99X1HKhHC4XzD",
  "key20": "5HNVbsYdBVojAxRn95xUBgE3yPfWrzEcjJdjPWDLMD6QQY9Jwiwz4mbZGPmPjFZLevhYvxgodLrkJjwW6QB123VQ",
  "key21": "5rnNjQfc94AcY9oyptxLJwhJAyychA9SWcdqdfDvVv4jMX8pfTm5ixJeDn39YsuEGegqcjrrJz8QDdPLbNTT2fPa",
  "key22": "4y2pMigrcnUjprHw6RR7TD311wHFcYTUqyapRHuhAn4duaNasg4xqbnGJMNJaWCqZuB2XYUED7ahGAkrQVXz8RhG",
  "key23": "36WfQGPEDd2Dg7wLH6HsZMTC3RvAVNXo87NNNJHnuFoTJKRJBE4jiEYjLRdtqC7iJVJLwxTUv5mXZKWLUHzpB4uQ",
  "key24": "65i9SQGSHapvpW3AbfujuAGNpBdETqXgzATKw98B7gKrwAxFvL9steZhuaHaw3hye1GFFjUsjLXtrbFgEjduWvSH",
  "key25": "5Ge4Xq1rqXCC2pf8BUny8SN6yXmTFGTXQDXULtVGZGb1hULTCJb8ZUgNnV6p4TTy9ETHPzZ9NcTThobubFjpMaSv",
  "key26": "52rKq2Bj14hGs392ckhvgzqxTmABmJKiNKxQ25E5rPMKKgVQmcoSaHrcXtxcGJLZzRTGt1dDCGM33xDnQw15nSnA",
  "key27": "2XT9udVQaa5qXkZZDuG7QZaREBuya2nGLmdFi2FH7SyGe7PokNidGzwmgF2T3x5TxETQwV3Q2jqPNA1V5FSesvSX",
  "key28": "43eWZZfoDmQReXapZ36QDNa8VsiZdMYKDXsGnvyEgSLevbnfRFes23ZEVspj2oJ8rit5SDBQ3BGBxKnJh8kf6yYB",
  "key29": "5TbNT5NYvZ5BF88HJCCtEfiUg5g4wmuq1QG9epTBBnM9o6DouXSK3qTs6QWbGQWuQ2rMftxbBQJX1HMn5zH5hunX",
  "key30": "haZ279PYTUZauDRoy6fJFXBvkQ8THo6ZtxrDRaKtHshxy16gi1aFwQ3LnYi82vHaL8tAAAGZTHf3AMa8HNKyAH2",
  "key31": "5ZUr5u17SvybG8LeVu2TjR6eW1X9ArwNyiEswHpRKrK1Dst7MPNJJ3JY7qYftGwvtJYpRXbFmJwegEmyovUFcp46",
  "key32": "3YM8SmKpQaoaRjBUgy8eLiR1LqSm9yeY7NBiJzesSxpw1uEr2Rke4mBjVo3Q4HNHLmoEc66jfo5PnsRbFeRUjeG9",
  "key33": "5GhzZJjK9E7yhK4NHK3xeUfKWGVfVh6Urc4gA2dWqyVYnKSaGBnAfBNYhwW5vjeJB8rnxgQ8kkDTqNciCZWgkfEM"
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
