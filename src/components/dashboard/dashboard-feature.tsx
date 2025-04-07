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
    "4izJh1mWH62e8s1wxSEiV2Jgs38Ut6vdyFwbW1sTt5sQPBz7Yb1Rd1q8utRXLRFTF3dB7D5N9p67vWtAYJMHtPm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brFWBmaUk6XCuB8HZzgiDY2p4mTVoHaTwRXV2hgEcAaqYe4JZ7uBeCduRecoLAxUZnoViieST4J9Vnt83ZTr3mc",
  "key1": "3eF5Zo2o6Mviari19Gu44Hj9KAw8mr8f3bFDuo1tzDXk7YXgrWozFQ9Kf3mo27xeYpcVTW4wv18eMmyehvNzMkBa",
  "key2": "41tRUchnuknc2upJ7kx9LmzmCntEumr34mcxhSkZBkrZ1Tw3YXRjKNeS5fD1rX5W1JKqwbUQ1wFc8PJU7ZqrFAaL",
  "key3": "5fvAbKAr6r4Y2vzPGd4zXQHJepKPuVuo8QwD75JMpvcjS9AdEqCECCSVPYGjwiq7PPqRABy9CX29nmGan1VNnF3E",
  "key4": "65aomQ29JGZDeZt2UehBLvi5kH3SVaKEL8Fk5sj8gozGqh5rS1jg5rSmR4XvrbDuatLPUHZLRLgUFBwe2hq7xzdm",
  "key5": "38tzpzx5Kg6otdjUnPE5SQx4bjMsj6g7awcuFr8oqXtW6jRtrTrVGYCPmxPnKwerr8vr3BePoNfmkUnKsAEskpzB",
  "key6": "55Gi4t2awyU5Z6mh9gYcqXEXHsp1gLFBynPAA4dzFJoeSb7AGGSnTuXboaVgRCzgqiWLZ9cB7akVavB5eourEdpu",
  "key7": "397ssbpYy3CbFwLaKbQPU2M9hQAUwDcodCeMDUQjWCxcsTABw1sskY5rcz3HH1Sq1DdxFUdZUFHRFJPZjWaaWKaE",
  "key8": "3SJxjgNGQQpUVCUrb9gWLy4WWuS89EiA7TqG9BDtVS1PLtyRdekvhyf9A68p81qgS8FSxAMWmjYg92gY5Hc1y1qA",
  "key9": "VJgaRxo4RK6qNK5sih89Hspb4CjqTSZfp4Ur8mt4PiWzPXwEW5aBqt8i423FqRueYyT3pMibFwqMZEh7NVmkjKB",
  "key10": "54zweVVQ71ApoLxSwPHvSgABH6FVnj8hB2XMWKUAR4Hh1RwuK9hQRsgk6uLvuy5uYnVVwueCD6MWW9XvZFRL2hLW",
  "key11": "KjGGu1DcmpYR3tjibBPYXG3TWbTd5gJ2RgSmXHzaUsdmZKb9GxEdX5rewxzaYdxzLVgbGJbrjYr8rCUhFipYbCp",
  "key12": "V6CwjcWfAvZqJhVUhaa4dwUZC2bPu7cFP5bYmUiEsLJQuWQqiJC6N3a2ZZzrLRAwDkXnXHExDNfrjBSsLYdBpdT",
  "key13": "51T6EvpRtVsrUj1MpYbDmcu6JJnzdRE7UN4VixVkpfMLoCg2xPxZj68A7iwbQ7mt9cb2L7WdGnSfqciWCAvQLeQR",
  "key14": "3N8Y5PTkCfYYdRh4w3jN6tgQe3VnSjtjdDpCnoeTBcPwGbTC7KzkR9Z9mPuVXQw6Xg2NtTLqR5RGgXznVJq1macS",
  "key15": "3VoP9TZKrqLb2Eh3HpscQWrYHDsDzJQ9GKx7Eg7tE23zQvB5E4KdbWUzzhav4fAEoJRYDdoQ1Ayhfwh2Tu21EKXv",
  "key16": "9VgVRN1kzrnHtXRSzUZWCGfM3CRstVNgb7eicpWUD5hDaVafS9kr9Q6XKrGJuez8cZvjDZnAbwmsG8XjzfXEYhn",
  "key17": "2JwtHwz9uEHuC1LEWy4rQpdXN6TY5PWjKKqwEtpo43GPCXiv3iJXPc1FmYoDmy8Y2Br72dGCZ31aoma4h8oBzNx8",
  "key18": "3AQHMipKwC8fuaS7wiXHDQQHvzkPyGeTpLfowVScXCu35FvH6j2k66Gyuy5SPQNUmQsV2bXyc5ymCBS5oYuk8sRx",
  "key19": "36x5aLwoufHP9oPEPp16A5m3rkKzJpvzcaadMG8rm4QXBXcErGnN5YbemoN1U82r6PYry8bydDH99jNmtQKN576Y",
  "key20": "3uUMTseRuUqUU5vJ1NGUeTH21tgypoJpfFh56x6DFm55ApESAFLbfq7SfSgexrefXQShT3aKxxm9QUVd2SjXJrx2",
  "key21": "2C49dEgtYemh6q8v7Av8PEpphtpoYYhtR2LH9tAwjHCNfA25so2eVwEBkf31ks8rUmVghJZ9k6ydyp8CMjqqjmbv",
  "key22": "4Udm7x8ZuW3C97P8QUuKvBYgfHJq1Tg1h4pCfv9YzCcYEGzadm3rpvGKgFDWUimFGjq2yNjH13e95HZynMP5BfB4",
  "key23": "4qr3LrKj1xQf9pAASRNpJ7p2ULH8TRWybPnUxCbQw1Et3phMLcKj8txP4GQjp6oJvP1ifc867ykZitbz5y3nywWn",
  "key24": "5FSWieW2mxX4JcyVe9Py9aGsnUrcBjo69JwbTDNe7834oHozSZrLGFdVL1LJ3wKYc5FqP5DPkCC8PacFUKqPr8BB",
  "key25": "5XrAujX52z4RTzCwKXMGDYFc57UEqs4dhr5PftB1pYcPk9Dx3BJwCRAixU6auq5VbkepLmUcNBdGsQHsyJPA1oLT",
  "key26": "64mUvSaWH4X455Ck8URmVEurCCPHsciLzJxCjE4Z2dd3XyA5wuQiZrUUruUjgv9DB5aJdHzzpYbvUNeGx4zXXYAP"
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
