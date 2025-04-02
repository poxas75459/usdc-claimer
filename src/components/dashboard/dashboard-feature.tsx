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
    "2U5L9wRiY4r5CjjB71pXGtRUdqc3135YSHs5Rpfx6vs8FuYPbo2F8mvSPXb6axqCnD9CSobpkUnjW79piRfVJg7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FF55Y8vvmMtpgxXUVPZQHaemnLQGXYHhMDgXm3TNPnbq5aFQRwfDwHMHgjsfEekTdgYW34uNKYEvCZmimS2B9sA",
  "key1": "3kqRcsH1gkzdPqYpqcND1TbXRUjE35ptEG5qADrDHZ6RSDYaCN1SYcG9ULcHcRqfpt5hYdBixbFg6vs5tTFZSdyY",
  "key2": "hFUKE3v3Q1RgJiwZdo8hXfSRTek3DU7zSd8vfWwebwuo9jkJJwKtihKDCzw39wCokYy5jy9fMTqTecyWTnB1pCa",
  "key3": "2CqrKSRiukKfrhqH4Fx4DrX5tXWQDtGYtNHzs4kMw1CWVeeUpfZocHnnmoxYNeAKMzGrUzKUkGhBeahC2HEv26nf",
  "key4": "ioGdw8d86nJMMYjwnvEHqHsjjrsooUhrCa5hgwyTogJpAfQKdEzbPZ7FL5DXjrGoKXQ3k5jeVPtM1XY7bNBxzxA",
  "key5": "3dM6uVWUnmEYEhmjvzLSs4QQAdY8YPZbCaWEUDUJPHoNXiHhVxgFYGeMSYUBcUYd13uqX4dXNY6PKh4pd95goh9S",
  "key6": "2yUPf48uM6pg6CQS8YNgkmE4yTW4WKwp91z2PLuqJXfzZQvSCn3mcqLPrPJ8u1PYihptZ7oVmckWSYwsvqStYjdx",
  "key7": "392xztxrAE6PgmqhiznA3j4qvasm95jLGKMoFTdgLZwNoqiQEPEUJeou3kfXrb4udxcaKeJYXiqfAyCGGwKEWaWA",
  "key8": "ejRVLkek24kb8qkjw9ZdMcwBov2BwAAk76kQSQnB8nk31DVeMdMK8uztaZBkiqD6YgHd8fAuwLdGt8MeKvzQdbF",
  "key9": "5LU4Lzv3AW6Gmu5oSZvLQyMcuns97enSPr2eYnxurAfBnUPVPGQpVmx8BhojtE1hp8P3MKgdieegDZkKXQhJs3sX",
  "key10": "hupnQSTsvHYzaSywHgHSKB82v5Sg3F2Nfz6RvXcR5dmiBdXguvtiZBy3U6H99xBhd529PHh9TrTcoA4JDiJzkmG",
  "key11": "3x4cFYGREt7WHQ7ytspLG37RjvNRFKsUopCpf6ZN7sQ7M81T5M1mNhDvCZgQHs3raEjpnzoojZQpkiawAFjKPV5i",
  "key12": "5VwAWK86iozcqddWxCPbc67198ZHHy55oo7pdpoQMKpbaJBusyKq9cymCj8p68CHo8T6nT5R1AgrDjAVXDaaM2HH",
  "key13": "GRnKkE7CeLc8Frh7pL1gUz7ekZiMpMsyjCjn2aYrff2vyhmBAh66HTRo7vGU4kSXHrJtvz1feYVRWpUWjPv6LR4",
  "key14": "2zbfo2eW45Lymum9Y6si8Zs2gXFNhZAPiV6aYMpu2AtxenTse5Hzfiad9LTSY15hUxqN2zhv4Lu3i3LQSMNpR5os",
  "key15": "2iWHxsyHDPx4xFR6aG7dirdvXGneatxM7K7A8V11RiXezLRfqX57BGo5Gx4vc6n5VqiAvU3WKVQ9yVJrgGBhAyuk",
  "key16": "3emfBYUi9QAkYyucx1nyEymNJZ95neZSWvMmvFsegPssfbxvRn9qvyvxRv6WJaNxCzrUzUjWQWGUGB1RaJasjMpD",
  "key17": "2vJadzDaR9dY3diPXNS6Wk8fMiP8hBG7ajwajZkgUrURJCvKidtkMm252yDEUkSy5xZM1TP96FrfFikJ2KUWLyge",
  "key18": "MFT97vRMWHcGfGs2BikrCBLRQafNJA9mc6UMqpZErw6925tQN59nT2KwFLu8fLMEFaw2uuRojh3FY2GD8hTJaxp",
  "key19": "41rKKD6Cny6MjoMFb1nyZXyPE1ckxzL2dSv2fXsXFdEj51hveZwyMvRWZK8SX3VkrPEoHv4VegPYCCYvWUYjkLAs",
  "key20": "4BTSQa1MBhw2e3juohc8V4uZM4vtZDEThKEZM6qVwDrzFR8bTtB2Z8zW55vBtiQEv5do3FbS4WB5CFtRJmbVkwPa",
  "key21": "5VCMEYAzd1RRbxotnukVES9cDcPWVyCgaQcuRkjPFsmuKh6J9bZaXSDFsFNBzUHPKjTa6ZVkEKxjsMmATdUVCX8x",
  "key22": "2CrRLCQ9yuV3kpozGhqznB3kkjrmf5k29y5tqWMFt7qfZcp2YFQYyGywGcRMQz8cZ7Ncqtiu6cEdncwUxXcGjwAj",
  "key23": "nhnXaAVwgWudkFmvQ2XhrBhtqp8GG3MQSnDArCc4kuFNKHpEJjPoYGs7tD6yWtpSrfyqPJL2c7n3sAozL1hS7FT",
  "key24": "48gUeV4J6okQGiSFNqe8VkcY7UjLQrVm4ckMuaoyKw732UCCRJUcorin5GRHJhopmvfgJJz2BzrtDLB2zvMwDa87",
  "key25": "aMbrkF898T9dKaEk5Mtayy3npBAqLdzBGknx4V6AiSiUaPAPTsht2u7RFWGG4DJJKt7W75WmFGLejVomqfdihbw",
  "key26": "4jmaDaWDFpSYR4r8yRk5oFNMTdTwazQz2E9U5xzJxRwNxbsx184XN6n8GhejXoo7fEkfdMaNKECyKCWu15brTM8c",
  "key27": "U8mvxEnjKC5RtvM6sZC5NWwnU6C4qarwCmbTXphFygzPtUUF7MdTC7m2y5f74Ja9Wzd1J1oZoujHx4eDUNxjx22",
  "key28": "3dKWT3E4eYQVZFXdHMMFfDa7yHs8womjDN3D4xwXkPRTM9UYEWB6i4fD2ZZ8kywudi9qphfRCprShetKzG14fxez",
  "key29": "emJjP1Ctp7iPbodszhjz61FGp5HZUZhsegUqsiSMB9C4PeVQekALNHeKAN1vBKwRcshmf57Adr2eTqL1ENp8Pgq",
  "key30": "4eJWLMrWM6Yo2H7ySXvHYNdzb3tjEwR3khsQGbGGxp5gHo6YPDj7h9aCxFR1DH26KRdJYLYiowwkZYPJvFChwHfm",
  "key31": "53AtrcML4wTQFEzpxwkXzKQ16zAR7tUBxcNf7sLeJFCB3fJUZiYib47LGPD4dFCVsmpkWii9uqJED1qoqvf8T8wc",
  "key32": "3TuufMiDxK3gqbQ82yd4FemhUYGLnAMmSvv6RbjoTXTg3nJURPwLFuHdZpjMEwR4Pe3in5wqczXyD6TBzCaMi1Km",
  "key33": "5zGJiBZdjbqXhDspQ1taS9R5tfnT9q7QiUC4NCGyBCBuDqAxc6aHAgY4oSG7AT9N69sqM776uKdHLTyfwzPreUw",
  "key34": "3K1MN1PmCCsy96WPTwXUQgFSStAEBk98kDUcGckdzqscsoevcVV7T7W1wcBrEFe4cziP54rGYo7qTR4oSJ8xw6Vr",
  "key35": "QbSGgqKRfE4txxjNMWP6uitZyaRob5kjzxY9aQoy5mijZikdPbEQ7Bzcc6HuUmuEMQkh68GQJToLVpq14QGnErw",
  "key36": "4Fh3FNK6LE53wkaSZAgEwhfpqeAH449MhL3rFRpAVyr2ZmPwcJ8xhszp8mPUzws69H9tMUwhgnU73UgAcRfyUf44",
  "key37": "5GHHnb3E2DgwJSbcApEQXmk7CWQ82Ynhu4YFY5giPdq1m4MUMVLrunqsJwpPH2nNdK3Cee7sHWW2GCEKwqB6pzX5",
  "key38": "2jNHiu247tSw1RWog3ncGh4QmsLXpufyco5DofNvy1zh3qKFUavKZzUPtXrAN3V2Bf3QXxMPUZgYh3fQqaL1cbG1"
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
