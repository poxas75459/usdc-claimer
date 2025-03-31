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
    "4DbL25jYWHRD5Hhr15KCDV3T9K3jzSJCBb7QgLur8L1qunbrFJ98kjKuvtU7ZpnhWGbGfA2rmYc9xDH3YeX3YRn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rH7dAprKLT1SQUQ1S6Q6U4LwpLYNAAvsxM4wnUyfuTbjp926TYVgHLszbzbTxiCrag8gmjHi5y3a4z64tSa8NS8",
  "key1": "4WW8UPRj7xcy9KGvNKsTD4poVMZ9FnsHj2cdi8DMt4sya2UJjTrMVpLhp9EkjyFQadmNJeFdc7aZxPgEyLaComDy",
  "key2": "4w42kmyxnFnVgVYzVgWJmbm8FkgpC7QStXV4CBvJMpnfanRuLUZyZ96UfDw5ARRSiVkm7hjx7Hydm7Rmjt6yyNXJ",
  "key3": "3cUb3Bd5GLTmMRTLTqrsWw7tzji9uksiLfftPGVUoLjisqzGEJaQtM1xoAiuVbRhuTPbENTEVgHPjPEgt7AK8NYJ",
  "key4": "5EKEdeY4BABnbEYByuZ2aJfSC1Sh2Y8dsbU9EWq7f5biq6Pc8BKN4sg4c8KytpzsfWozXSRJ8iGvhPnL8RD3xs5k",
  "key5": "36zJqqxZjxnHbw8SdJPSYoh4LcFn6exsawdQrbmVntLKPauZH9mf3DKaCf5t57QiN9cVaLxiYWQsJvh3Ye6eNuhF",
  "key6": "2zQGZMqYcefn8r4XPcDRuKti54imtaLVTJf1fdnQNxUE5R3bwmDNHkKDjGZMdf8D4KrrYEFvw3BnMJzS5YVeboWi",
  "key7": "5wMNbv9BDKuoGGQ9Y4qXmdHeHqkaKBCkQ7xN2RxCeL4fTKqwGstYtoGrnC37gBBATR2EdZaWZYo7VdDWb1WbvNEh",
  "key8": "2w5vgYNRyYdKSr9467LtoCn2T93y4W6yiLwzF6iM5b7E3F6JDmKnV11kTfppUqZVUoFvs6ggMjus4V8hTTwa1Aq",
  "key9": "2WPpFj4aGAMwxBQRj2BGnuV9TRho7bJdTMtwDXBMZjJkyEMme1b8L2egJUuCVgfa5epFvAFs7BWb7zt9NoFHPqwc",
  "key10": "3vfEkvADkMWsPy38FB3WARfmogVFAea9R9aKdnKp81hsXQbhMqUFg5du1EwVDaVRXVfZ9qNhighWFUHz3fqwPyU1",
  "key11": "2SkVzcFegAqjmVfocbB5t5iL5g1vjEkaNdH2LgwmiUZM7fUpbZLkxJq9NoowNZhoLgDQrPx9QUNsiDvY2UDhu9cY",
  "key12": "2UKCdkLEBzDoJwVpNt5yYQKYQeDi88Nz1quo8KrYSBLG8nCwX9butykPYUtzLZqgwNqznBcuM5vRkHkt7CSaCpCC",
  "key13": "c8GpT2HJNc56kJpw1AfTP5SLVyLMb8jrkXZTj1SEeXpYxJBsrJj2KNcLoGNu86VNPCDBnmD1ABRHJtqZZ1RGVnW",
  "key14": "5L5u3ppzwyK1req4Lz1wCkbWUUcGDmQVDuLtMxEg7hGmZHQchkENsCT3xESgK2bigHqWECDP8avSvF7EDAiR55PN",
  "key15": "4coexpngPZE6JxSP8ySyosxBrBisxepmPj23y1pi71LLJXqbQLEjaUAkC6qapfq9QzrgnXSJUHwv4qfkiztBaREj",
  "key16": "3QDRDuBPynCZuaGcpBdaWqdkAM1dE5uiumTBHsPJm35MYYx6GDjvpC3nDHtf75njyTCKbGDozPZ3k6rVn5ttNkrZ",
  "key17": "5YG8iaRdjQNmjuKAgvfFXTgk7edL92fwqS5m85RRUfwkMCoqRM8QpcsdrFiAahe6vGCA26YCUBke8nxpjtuaRTLU",
  "key18": "4qpfStaHV8LMiUKjPvjF8wNoyruyGNmNxRZ1DuuLm7DCLuJESijCaZ47LYPzYTUVtiNhnpgFer5KXF44orHbdPNq",
  "key19": "2EHazkvqGybadT942aNARkg54K75ZiD7Ce5JnNwMvkY51a1NVuRAPUmeyHGyhULFtkDojKaYNwUYd5wHfURyVAvX",
  "key20": "2VMziMvTtinV7EVkHJYKyQRsaQTpX1Q4SjW9K32sgNjJoZ7mMPMzzfXTtcj8ctyCb2fmKVVmqTcz87N5odrBpd1b",
  "key21": "3pW4MexMjffFJr945NF1ufgx62U3xpsXaFS2GEpUotyTSABayjGhkJY1k5Uo7eNEQXWd2L4HUxJ2bPx6ittnTU4n",
  "key22": "2TxAZ6yDn39JUHcq5zki9MCmEUeDnQFHh8xAHZHgY8XJr2Z4ASp2ozFPumeL8xCZjeddbod9EGVBCr6HBbUR5yYg",
  "key23": "3RTU7jvumJZqWGF4z8W6bfUZGu3EfcaXh7p7axxXjKFtz9YQ9iUK5Z8gmT45yynFczFs531iE4xJ87wdAD6HDQjS",
  "key24": "3rv8zkZVaC9o33ggYJL3ny71WbTxeFFD22ifYX6PBZGPMRS8hdTwmw1Pvm1SYECjop8eorJthxCGyqBb3YNS2qBk",
  "key25": "qfBGrpkS7KETNkCkgMQRj5qWkGqbPzgpW2xYTaAaH9jNYSHcUuMkNW4pyDyEfZ5M4oxYZyD9Laqcwgq36gUyGp7",
  "key26": "5kfE5hhDTVcppTXiqu9MhkwrSAbb5ACRr9P6Xx6osLk2T39CS6yhhaihUk66Ac3rrs97xchvEXMU3xn97zSyGTSw",
  "key27": "438NxyUh12ebrPL3Yk1taZjd5gPs4hqxx7qfNbXdCren6Af6DsE5hDExB8g8kHxbEkAXbg7YDKMa1vdBcpT47pgK",
  "key28": "3kR8Gvcsj6C3g9cNy3Q7ioywf5gJLNm8Yg5S3gEWo3ykwsCy8vc9nRjDgTA89yNNZjFbbssRadcBke3y7B2K6DfD",
  "key29": "5vnxevf7gCZ9G5M7V9UGzZ7K4p1baNKs7fXoDawnKM5hN6CBPdtKgo3SeSRKBQTPwutZ5ybTCy3tmxeN88knS1zp",
  "key30": "8tiHFuw9CzLfwzqxGUNASnuwQ4tjXHCHwwacWXVzWCA5F7TJaiirUY9TMtG1XtLDtfGqoXuKzBT9GXxtUoN5UvF",
  "key31": "5RUpgDiWPVcaVGztCMkFFsLnnDZf3XbhyWkWCJNwu85wwe9hPdyYmfTwTUhGDxvMYvzJuTQfmd7EiUGCx1uPtTeZ",
  "key32": "tgsqP5jDiqumjSVKjXqaWDod9PKpk8JbcK698icZLhGiGY6h6WvfdornndMpxecJ7pe6ph8fLZVDMLMs3ZMS7bq",
  "key33": "3YXBjdPVRZyZGD9TCNAnwd3e512awh5cXYdZqHoKZBSbEECXcDSwBHG4w77pNUG77piQpJUqJPcUi2ftXQcYN5oP",
  "key34": "61pDoLxk6sjvofzruhXp11ho4ftGNbB7cBvvKFN75JtpchvyfcdsUMFLsGtyyih8p4mFdt8bq9t3Y4gj5K9Czrwm",
  "key35": "qBpHvG1jH8zEDeW1oXXgWHh9A8B9ULNfpzoCAVkcydxNnE3kNgqUdRbAfJNqiTMaNDjWwYWdaDLLSybMmp41ziR"
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
