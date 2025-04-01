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
    "2SWJoKFco2chZjNHmQUB91hF3JyfRbqo4gpi5t91DAJHZsyHdCwWZPCQUbVZ9VxdUXcd29yPdw9oSP8DANJ2rFbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lkn9aZZ3PKzgGdvozddKA9indJwj8oXopgRfmMj51BJpRBtdfmYsWMSoPvKo1tFLuGuYhC3oEoM7WpuRA5kmtJD",
  "key1": "5gw6sFTNtNuLtxWp3iiWyzHDoXYUXkRsx2ivTKBKRbG6ssRXD1XBUn5vFZpqpnGWEEqadJ9dqFe9YNmKgMRyuAie",
  "key2": "kZo2f5RBuz8TLNh9qvQTPRmg1TY81iHaeziFDgPHYHRnDs25h7rhjdHT949U48Sb6mWSZ5rfMAzyV7NpCcfHZ76",
  "key3": "5zBGu1SbvKvmsi5Fc3PqPEQCRYgbHADikkF9XZw1EG5BbYeRdMdDxNMVSGiEKvumo5oV52VKutaGUTLgQMKJwJT7",
  "key4": "3BSpNiY2hWntG9YeX9hDTissT5rQNbzQv6XFyuidHSK8Nn13Br4NHGUQokD9FrC68s65X6DwTggYZPDDLfJzB3xm",
  "key5": "31b3d2KZShtpWkAFaoMUmbyaT8xchpvyRTm6KL6KVg4Lhyr2P1h7sc1eTnex6kbP8RdTkegbMxQP8pVENG2anNH7",
  "key6": "56rS7hKjUxGH1ySxMJMDX8CCuLYFHUdfmw3fLLXjuMPoxQv4Mjr7Atk7865UZjVZuwL11axkaVgRzap6mLSAtCGy",
  "key7": "2vetpXu1F6tWLFmHze6hY12oNh4FwfmaW5VVFPk9ih358TGnxh4af4XbM6jrsKCebDzUyQoUW1xgPz5HqrFeRNwS",
  "key8": "54nB9FsjJFHeBoFQ5faYV2RAXJG4Sza4ATgDa3ZaWiEpRXWKMb3vGQDCL4DvRR5CMyFrkCsW2X6QKNBnJaJKx4Ez",
  "key9": "4DZzemLNmeGbiBGSu6xaJyzLokbNDVuWtb5jsUKmz2ber6d4kGaCafUGjxW2XTLDKyhiHmagQt98swkrEuBYJRmY",
  "key10": "2kWSsjaRKMZK1GuNdqGLcg9kPpbeB2BdFxLjdmbwjnfdfAQgLahtwYcozKyByXfXeipsU7tsPrqcXXUEJW5anXU7",
  "key11": "5xZeqpgwMqVU97EapQvNxxchAcDqAjANPppbhba9HGbD1c8VQ6Vgn4EsjYQ9uRuLJ1FBT3YvoTbu5YBfvid1cJdD",
  "key12": "4FPmdcRnsH9a6UqBLdunjLchtACLpMLu98Lf9TkG3yDJimcNhxC7gRkmHXaUPSKiz4Xoyaz2hQ3oMGoQQ1yVw36x",
  "key13": "4RrVeHDJ1oyfwXz9dS5mnmsqTomtP5tw1GZ6vHjcAuDfrpiiSmX9HoSjpUiJfju3XzHD6VwewFzacp5YhPdLDYH9",
  "key14": "5QQuRGk6UuFRDpxadJT7drMAVKdySdMC33iZ47xBKEg8qQoCv8PTjijkFGbHx9JZxgRDsG2RdMCJUwLMyy2mujVR",
  "key15": "64HLpXTMocMcGHefEuKhW67HwGPUpwetfMQVNrW6CjS5MT25Xv6THzNEfNdKcvTATox5EW1VdDZRUZQbBAe5THgK",
  "key16": "4s5XUGaL8mkBPNChP57vzNBs58wwZw3CE33esbZTspFCbGPYzPdetbjwwjsCoeQiBSwuuRYkRQhhveU2cpsgcNx8",
  "key17": "3ZFavFPrqh68KDy1xcraZm7N1B8r1iUt7LB9hDBUADuxgwJiKrc5PzbjtLS9SJNiG5cJDM7wrDxCk8nLVoi8yqiR",
  "key18": "25uPjCbEY1YkArVVdx6g3pinmfr2ZQYmYJBq1JGiPcCebMC7QfX8io5jVePnQ58oGYcox33DqkuWJNoMid4EeRPT",
  "key19": "JmSCAvDJGgWNsEXFYCGuovTec3UzXsAr2Te1p7jpnxrd6HaaEycELqBn2aALkBTZbC7aecqGqH37uHTe4YKPmLR",
  "key20": "2wReLGDFCvJ9a7Uz3MUKxvDmCXh6BCc3giHA7XVs2zFkSYZpaF1KMhKFRrKgiEzLBBYmgXa4WYsptAkFoTD9gpQF",
  "key21": "a4Uu7VhgBtE5T9HxhLN1DhareJLQkPybmutpDSaUYC1YjquJ4yFAbmmp8vLRsdejzbEYjykASym3jGybbuJtTDz",
  "key22": "2beUg25ci1e8iKcYtkrH4Zed4EhTPUZ8e9UBSkaCWTC8QBaBAHVk5LHZ7dEXJjiAeVYJZ1KdF1mmWmVWT5vvirGp",
  "key23": "2nHt5y7J4mP3PMA4BN9QNRBTomSij5MLGzWMCuuMT9LnKcnr9PCEHEx1VDPeMGfXhV27aoyokV67wLmSxHFLpa9L",
  "key24": "4xeeeDmhxr9aytmqNGWWS39p6JtRqaRLf1rnBnPbsiCJbb5LdRoPWL8h8tKjRgeT4iMbou2Jua1VnDQSGwbbcZgf",
  "key25": "5dY1rkk2JgA3XewbZnvoMdDqRXn6hoY8AQitPeSxuzzNCr9JLVUVd9GBe1Ww8Ya5wZ8MLuZDk738XDmjVbHBht5M",
  "key26": "3UMo4cgKwgrENubn67654hUiBo4q4cwNxSABmYbWG5vdKRuZ6mitXcHSBbiRgnbCynFRHJXPD215Bk6VgqmSoRV5",
  "key27": "5X4rNAX3sMAYB8FZYBNvNRzyqVTJj3e1CvwLEasahhJz2eW1QVDAc7hVLqAZXHbkiXM8p7AdvAD54vnAsceUcY4R",
  "key28": "62xqvscZ3xrN3SUqQwJjkPWa8R9BU7Cdn2kpeX1VkNhgMJ9dZ2CBRGTYTttinTKmtC28dutGyvwAfHiPhGtRrYro",
  "key29": "43tCRmDauFaLqbrn389EJhfoShVibzwKiL6EAuBdLM5aZ5JJ5Bgf3efpnfSje4iLUiAijZcj5L7usgebcYHcQJ8f",
  "key30": "q8WfkU5BSuAKSUEBUmHKJnUCxmEXSH48hu6wpQaQT7F8vhEtoMA42JVSndbnHhb7jZRYp88DCcQ1nUxzhHQDsnw",
  "key31": "2ZrtXrFVgh6esj2fxkMqjh8U8MrftVd9c4UmZNjyg7NLg6bkTmygjnfMYUcgqAW81xfzisQuYA5jtn2Yo29uxWXr",
  "key32": "2FJFKTS6FPCJaYnvoHyXJrTNFQ7SiSRSLCyzBs9WK7iesCxQAsybJ6hsjCH3d6QAHWpWQvhWUBXy57jFDk4QW8GA",
  "key33": "5WPN17Ydpnua8iQyPkNruSHVcL9pmn1pZKfPEdtMUduMgkAjjeog5H2pdR3T8PYegZ84dqvMEprfeQhGz8jbhc4h",
  "key34": "2Z3ExQzS9DuRbreRK7VdLjaJbo6HVQtYPbTujvC9Zwv3vDk95xRMV1ac9nhT7tgV9DKQ7jwvP8341qbo5t8gmxiR",
  "key35": "4ft2tKBSZBYWXi85LrCHhZ4DtrLWRBipxYM4PqWL5UugxriydDAdMjgSdAYJP9SSn51GsHousemNNMe4EAGgwbjm",
  "key36": "yggZxJH5PsL1EHFt4EgqxzTUfJy3T5KFKN29RWfrXrrdW3LCukXQAmJC3BPb9F47q7bgqMH1M92TgjNugkEVYhW",
  "key37": "ZfCu5GrYbDTvK577nPbJgwByhyfDCrQ9QDEkFrSKKGYAT2yuW4QzzfsLDgBieY1Cp6ymDZkyD3iCRDazJtiKrrB",
  "key38": "3gK9eULmBoyCtgLMUTwhzTxRJwHXbnCuBBgHYVtgqbWxg7NeYccKVfy8JNZjWPCadG1oPpZP7XFV2NhMPBkydesE",
  "key39": "3gUWyaeoKvYWvq5UVEgxxqH9DcFv3eXJ3zJNPpxx6NDJ85B41EweuFtnn1U9M2y4nZeLCiqXvTMxCHUP9By5KVQg"
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
