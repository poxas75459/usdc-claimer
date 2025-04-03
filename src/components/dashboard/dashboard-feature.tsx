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
    "5aNQVRxBKbbZPxgKgFiFaFW6nhHZRwxEjMwkNn5uMiNbQYw72EQNXAMBAp6D6JJyPTyRXXF7BHHT5uLcrQY4dxqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rg8UryyjmXPRGPvwFWsCe83NVTnh5KyBo2KoaH9YFdCNcNj4gKGTqhDjKZd29F3uvtH7Lsjop4G2KSruUU3YYER",
  "key1": "3oAuacecosYh2ezz9Xrww4rr3CRwYyDFUcxF32CUezFay9uj2XttKNSAb6HX2pRa5ooZ3yMJjwHukjk2hZEo6qzv",
  "key2": "3XkR2z5RcbYHmSb1MBpP9juWdtGkXy9tgBpB48bTRE9vbeLxjYk7MTfu8C4rnbQkH8HBzpnVJLJzXQDqcLCe7YgY",
  "key3": "62Qiqt5stXmVAxjvM8DyPa5EtCZZChXR6xnNucDbZMEASxT2NUmZu59yBGWjQ8s1aaKchPwVzXbrSA7hkAz3so1C",
  "key4": "4CBob6as1rXsfredrocjUnXZt1TtDNx3kNTa5n8Es3KAeLBbtnZM3jgjELs5r9QmVxBkG3rqE8Ks6DQpoCvirT4g",
  "key5": "cLsBqQDaoYecWKW8sNLuKrnTAKZMUG9kZv9zJRj1RT6HUHPBduYow9k1kmU6K47wqH6kZbkzcAtQys7CZBFq8KF",
  "key6": "2yPhc2WFY5PkxdifgUnZg2k5ELWSnxp1Jrcgg7bSpqn2MptP9mqrr5VcM4sddWNZUF1A6peVFk4caZqZUMs1hbgi",
  "key7": "rBc3pbJ5kx5Gco7BUCwr6DQLkgCr9M552GvVNL3eVEG4Q3uiHvyMqVgRkXxq6GFVszGw2YhS7ikVp27RHCjo6Dk",
  "key8": "45w5EN54WzoRdzGavEp3fBYWpzjZD8Yb84jYJrRaYaSN9aqZjYeahCh6Gp6s3WhUxmdVrFtnJBLK91vnv72NmFY1",
  "key9": "8BTdZTQmT1LRqrGKm4iqTyZ8BQ3x1ANSAJoCjgmFUP6bfR64S3LGZywwZUGfdRn9VCXB6Tiiar38xkqRyLxoNJC",
  "key10": "5cZ9znAJHy98nJBPpytZuDdi9KLU36ZrMiayDKpUvzXfBYavkaRwTmZqfTth9jPRJAydfdCZi1k2KxUQVkcPZkwR",
  "key11": "2a92dJfKEn3KrSUzaaM2yNqCRctpvpPzxywMKzKP7x32z9bnJ8d6tpLnMfvA5ndcdV6hC9Dy8rx7rNCrnVBr2zEt",
  "key12": "4SkjYsny3yFHzTk3Bkn32SLKmdUq63SbGMfz48zxBDKfjNJhzJk48zejNpYE4Jx138NZVEmCERFyFy4oPMTPUZts",
  "key13": "GubXRqdSYn6oXoxqmVTtwriLYtJsYNsFCrrGQLQHxHLZcurpLcsj2MDRC6HuePyJuiAFZUhBfLFcQhi8Wj7Vxcu",
  "key14": "3pMqiPeigfJiUBPjWX9oa3bTgBDRDJcYMeUf42k414BMXqhC5aevtfAmyTDiRLgeg95EiWumtQbikYTHAom4FvYM",
  "key15": "QSPmf61PCgUGJ6uEFeLpLzedCHwRqW3hZorycrusUHRdzX4XL5Gc6vP1N28gSxWrwDGowGP4us53RSXSQfuLKbA",
  "key16": "q451jWiADxbaPD39wZPkM4fLzi3FsXGGpCTZAJ1ZWzFJ7CNEyD6Ron6kbXkFwQorjX2gXj8AoLbGXsN6CSWNYxF",
  "key17": "4uHxdepgjoea8AGAnA7xSJUpPF4y25nPBon7zPsSEF6txyrpiGvtYTnXKkvDeApeFq8e5tvR4hQJgPdVdME2vF7g",
  "key18": "2wxUSJxZJAKvRAX4AZgiWZ8Bv3zmL6JeF7GztjHiMmTrWg2jx6C1KVS8nRJpHQV3yLLHS5tVdTpP12xyRguo2wcU",
  "key19": "D3a9h8r3Y4Y3TDatnPzKFQroydeFrnRorRq9TVPsR9gP5BJi6PMNBZ2BxFGKzBbtkVdqrnic4SqZYuAjXcoqaFc",
  "key20": "zmyLVQHThnRaZoySTdDePhadXM1ufUUWoMZn8zVr8cUtE2ijcEzQwDsBuWg2ZctymXjWJPVYukqtXHn1iLsNWk2",
  "key21": "5Vt9FSWJPHkN88in7z6s4myQGXDEDKvVHh1bWRGZSZ72UXB1oZbx6eCS7iExYCmTLvZPncc3sLryAr9t1ZAJHZ37",
  "key22": "YN16K2yYrzKqbBraeNvSjvu4aFP2REcqpYXArYuXXUbEvzLkvK6X5zRKiRwhHvG1xAWEqYAaQHKmtaT2ewvwnjN",
  "key23": "2uqWjVEuxnbGVSgy1CKXAe358eBmCYLdMBKKsBX2g53hH2HPv38WSRGeH7w5kcj2dSkSZaQXn2NskrxQCW6Pjkxp",
  "key24": "QSWs1BRmmRvpe1DAUFsXpNUghK9dVN45b9FZ4vkaiwvdD4Drp9gQP1842jkFReiWAQo4xzibapU3WRbFUqxWyih",
  "key25": "2yq5NyAhRHmkkhnzFhGAtPzoX5Wm7LAAq67yJdBAZVHpXxVCWjXHL7exLQuR7bSepLWV6PYjNvD5c8fymMCfU9YZ",
  "key26": "3X4AiJFWLKVudq8sZPeiCrZHtpbh3pVLGgj8GEEsz2zTfSFuaSgfpRiiVYxgzHJULAQ7MgaeGkDfaQDoHsCbT16A",
  "key27": "PkjgC2r6TRo1Yex9oaBJ8GFfnvEjbDmfYWhmhnTtuu9rC8BZmTT18TpMU13XtPHaHf3FxVpoifBqoP8B9aQC28P",
  "key28": "y3dvnpvt37XqeeUXEYbrkEoCULSYG2XUoM8yUNNXEN5QkUx1ygs11fidHiVXmfvuXojq6WxQZXYum4UjSG4hPLH",
  "key29": "5KqEGbJBw4Z9itpX6CAigvT6kn4ecu63UuHywBmVoEw4TWSRLq1KLnCBPj41YkYYR41wTC27tuNKkETvggN5u1Ya",
  "key30": "4btnPZ38KX4pMPamPEPxuF3VotMC6WfJo6AfD2YDcHXBxadRLfo3FdMPPqUQvofdYLGbU2Fs4S2CnoLbMYDZEUao",
  "key31": "2WRVcDUQkseMThRXhck14CutuDnF899dPjrCB5ADsY3Aupyc79C27v8Te8xhD9byYW7vKgJReWobL9pjRa9xBfdc",
  "key32": "2MW5X9azyGpwHGqf3sRjzLxuqWDzTmB1GizWqbtYwx3MBw73AuSx7as9ECJerwird1NDsaLU7qTmu8bGZMUqCoBx",
  "key33": "3AUBsq1WXoZHo77rv5ccyouUjC6FR6jkfspaN1X44jcCRb8dZnk8xnEvSVGeCCsruf2oQtTVNAcbA4Xeo67Ler2K",
  "key34": "4zi5sGEiG7Egjmv2iiDsHauXDWqeiPze7vdA7rj7L3ArfVS3BUj3ejiTw5tJY9rVoSq8sbKgNXiu7sBsMysefskQ"
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
