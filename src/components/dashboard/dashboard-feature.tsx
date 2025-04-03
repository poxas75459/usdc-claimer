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
    "5Ee4yR7m3da9D1UWwPj3JWtTNyJ3ERnAgCCM5duzykioNUvB6cmtbxghb4kXRX9AmcPK8Fca6cYW8NT3XaRy14FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1kY9ELYjNKmCe3gY1Yn2URPGy2zaBG1bA5NGWFGL2oL1zU2csihXQELDtro9Nqae6kTEDNJ85kdNzVgtEPXqsU",
  "key1": "5LmgMCa183KbudJKw4yoETcPLNoVNshzNA3A7ZqjnArjGsnWM2V6mPeMonjNjhUzzKoRqiVzhjvoxW2oqDMbzSHu",
  "key2": "4WFbxgxdeSNLcUQYyfBEKuiWaz8njartYn39ZucPuWMKKdALbvRST8nU3s4B44KyrP1xRG3wcn5vZEWzMViSypWo",
  "key3": "nLQgiKfDDLVS2oowNceMSTguEr5HFQ5bk9UYpRZm56C7wB1oairNnJXj4EjEWUcxoE9EtvqCdCzCFUunMefiV8z",
  "key4": "5aZYyzVvGVt1kvjPxeoxRS4WCLZLdnyuZv21twf9ce1sk4k6ZaZttnLvwgc3sLeByuagkav2RFXcdw2XhxBabhqR",
  "key5": "4NQtwpV8XdrzwenUzar4zvBycTEHu9vEAm7VbvHRPiaVwVR9MCjhJGmy6MovMLwn2yK2xjPuUZa1SLQUJ6meBa55",
  "key6": "qt28wmQnucWHm1ycD1YbxwjmU9Hps51DJz2V1f3ogQYYJNGqbqFBQRPFwXDn7fsz4YNsbzu1Dvrymjr9m2Ytw6m",
  "key7": "2AHyfQmXJVHhgrqT7NGo7vUmV17Hh699FVqKV1fuGGx5LM4aXmoba8iRzYz3KLNqopNNdVQ4y2QcLLRDwEeuQRwS",
  "key8": "33UPHikSddXeQb9Q1ezbFeCMNgaRihNe5yUYA6sscocej1Sy1VD6GDDMamy1VopqRz6Bvkm8obR5MCFr3BhaQMy1",
  "key9": "3eGPxw7PV45FXTM388aSikJrb6B4tzNJ3pouQpyUrFmUEUpTV2mn4jLwKe8HJx1eiCBHaKaiy1DRofEUZiXWizNk",
  "key10": "2gLwwrVG8crRPhHjByDLGrPDLLXbgCWBSqTphfTnKm5RXyurVsTYHt342vWBKmjj3sxZuKQp9EFnmw8msKBjUpTs",
  "key11": "5pjKaZF7xTkmMhfu64wZ7jgZJqDG6uN2CFybbEEaLk7eVub2pPLkNcsaNFNfJQTNXfXwYCxUdqmL1vAxSByrZrbg",
  "key12": "3eEqgrmFmvA3Pz7Ai47rAi8jsWksoCb9KpDZ3rvy33ZXWW5opexDbQ3G4KGiFNPWNqRQfdMm7FSgru9BsJSeu2Hv",
  "key13": "47U7ygYELUBcqQTHk8RRNvFmzBMZuiPxEPRTB9a94d4t2an4HtsvtNs1w8gYEQwmhzCJhZqsbdCaDAnjYfGfQxn8",
  "key14": "3VzTwSnQUGTtVJtv9aKEEKaabLsmMiNA5vNct2ZJgcMqewbgtFfXGZCEb8QT515z5oQ7Hw6poHmd2PWAGKDrAw6q",
  "key15": "uz498t5KNfWxTMNXKzSxWYkedBeB9rzWe4WuNauESAC68efxeiMNEicm2AfnKSM3QfZQMbmhSaUAejb619ffhv9",
  "key16": "5BM3vT4LywkkYezeJE3LzzPdfaDgCSUjAyTxKxmj7kcjEon8ss4SWEMMuAKd6o5nMq33TpGtpQJmT7W3AzF1uYCq",
  "key17": "3uUtdtCjd9Ujbrpktt6djEbNCPDtqv4ym6g4YCgFWmvD1a8ZMGiAFT8RCqZMSxVPkeP2VnmGyc763WYvUB5YL9q4",
  "key18": "2rMLUrtH1bZNKxbuD9bMx7o9pW3KgtTU2zoZYAf1BWgFhAoip1XQT7uj4Di8uACoHATs579Q1HepMoDsoRxrjwDt",
  "key19": "5gpzPsBLPHGiUzHjbgQKwBbrpYkTD7b6HJJ997MdFAcCbf4oKFE16jtYsoFp4v8dzpJ2z9QcVZtyT42vx74TZMp4",
  "key20": "2yCTH7ZbMX1zMxgzVB5RtfZKgHTnCRqSTi3pp2DXRNiAATonq9WaoSV1vNjYogsewacdeziK9qEFsNAy3H2HoWsY",
  "key21": "4KNutCFuwwNZ3D83cjFtojeH2wBz3yEvA3YCFXpkRjj2oXL9x7AxEEhUDRvC5oEmpSvb9hZUVx4YeRNkwu32jnmA",
  "key22": "5idSTu4evqHuvN3vNtLTMUKix4ovyp3LoYjchDyZNj2M7XLeR1p6GpmmHVvpgBHnmMy8VE4eqV5r2A8diXPp3Aba",
  "key23": "V8aaj1YYzgPMYeYcXp5gZBtK1uof4LwXgQTfkyA1hNV8YbEBcabhK5tTF7hv8BebXgYpvsU8M9zCCayprzKJAc4",
  "key24": "3kvUMAzWiiAXkscPphKvKzy4yWGREdssLWGUABY3B4qy4BWLco8L574Vw8cEeuSWNRcyNi9yqQbereJs9Vch4MPU",
  "key25": "3nUCgyFcc2q27s8tggxbxWkufUFPcebHcyeZRuCKPnNYktTC9rGcntTj2fTunrQzsbnrpWkwaZQsSaPjtQRcdM5N",
  "key26": "2ePRd6g2sX2TwaMbiVWHW1VU3n7k2QsCcBcJkV8Nsc5muesgTCQJpDoE4b27nYsYna889PXDFi7qcBzF2zR4KAbU",
  "key27": "4vqFtrNsRbVL2VJpUDBCA2FaFCxnwAguVwTtgbsFyTZtL1EzYYxezeGpr7DTMYmUd1cqJV3JAQwBoZEntErt9v9b",
  "key28": "5AcFV1wegoAoJcWEq9oow8L5pqzkx2wXDVvTHt8dY6LeFKr8jPQELBkU3NxAv7KSLqViG7GobSuTdLXpXKHbkZVN",
  "key29": "3acrVcRzTi98kT5PKV1xXPJ1B1MAwpVkWYAw193p5NMk2ZbGvtASZ57JXBkJeL5Hy4L5gAjGuMfvbirQFv5QYv22",
  "key30": "2ESSqbCcPj9UTQYjfvow8SqbCGVycV7qQuczHmJN2zfrcGtBRZvYGSKxgon4jSgXX2ERYJN9oEy9ftT67b9KD7Df",
  "key31": "3i2xx1rXYF24DReXwWLnBp5RYUDfhkfmSCb4nhb1y7rMmjvCvGP2djn1UkmLVbLwMEv5bYYMMpJyCvY26nXx1eav",
  "key32": "51caihPcswN6hutjSzsNkMGmLhzqkdcSt5iMtKmhHmMQTrS5fyk2wyBVPhPiNdSCJe8FaVrxNEntB6BMwoCx5Ln6"
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
