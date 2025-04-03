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
    "3NfPc82hww3RgsqLiiDg1Hhwf1NZLukEw131carP97LUBgWJQE8DAWo5Fb1KBDYWHRR5T8k6uYoMHLyMJ1Jm35yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JwaP1qMJf5n6Ddi86YPHAd91AvcpxT5WMt1vEMRA1fTbHKikRqHvHfyZ8sLiyBXS7mV1cFwKLHq6tGiHYsZJjDE",
  "key1": "4iQsm4FFN3gvPxcktFbWv4AcpTh5ixPknmho6FWUPM1V3xqfvATEsToNzfVVr6huLpon42rn6Pn9vBzN2BN4apsb",
  "key2": "4NutU79j6BtYgJxML2UwiNUgQK6UuZHdnfe8eX9X469F1yw4SqPpbB3aWpHFz3YuZBqBtYCnVkCZFU4h614SCGRR",
  "key3": "5pjb9Kbryc671MtExbVFJctQdHQ1CVW1P1Wrhxkwa96zcdhAh4GXYH9G72Utrx9Niyfo3RaGxoSm7KqJz9RGwRAD",
  "key4": "3WgnX1JtKLkCKYdGWqbqQT9h8JdgZ1wTd27QN4yxLsVUfRXvr8ctCcv3R7LRp2nUMryvL62CWr1PP6z6GBNY6s1K",
  "key5": "4H9acgeui9L9zrhMii83VnMciNzzvJLCwGCojgdqWDbf3dZX2NPvsMtGzgW5HpUMMWmikECgVUmz7Lpx7ybesani",
  "key6": "2u3AE3LtFbnywja2RBZ2gD7r41PSZMJWT8nMVYo4V6jLBNyyzTSDygu4UZp6VYsdqZMyPVTjxieky2Gg3hTeY3ia",
  "key7": "583YHzrcB2FoNRtmFZGTjmJMCEjkf8YtxTqZFxVYZSTykhe6DGoo74iogLpnmVGscwfRo6DCru9VNisMpR7wkCku",
  "key8": "3fJUj1fvPi8aVoG7dRKs25o9jRYcMAg25kA9KHwfRVxcdH6dtSnpnZEFQH5Ki4aLtEbPkfXDoBqhZjcyYGtAKTTQ",
  "key9": "2ZNMdCsPdoRsBy9ViX78vvmNqNH7BHgjv4RkUW753Rhi9vgWikJ28hxkax4csVvrb9zsMFtfhrtCoHdnY8tovAC2",
  "key10": "4uHd1h8ApjbUfXMCQQhWiCsok6VQYVe4EkhpDeRMDf56RTYh97CGwTvJGagCzDELetboRcKDrx3sd9Yh5DJaLmog",
  "key11": "66E85bCJEKVubj3afsBf9zePW2dQBqZ2yd5ujwXi9qvjMpJ3bZpZzB6rscrfcJY4WWjpxPiRAoB1cZzLa7QhYWqq",
  "key12": "5385PKWKjH6Yp1ftZZJYa4CY5Lh8RFtUKqNbACVzTJg2YXssdMhjjLN2CKfALnsArJNsFX1rapG6masGwWiCMVYy",
  "key13": "3NRLWj4djCvmpsxECJ7FpmC7Dy8fv5QYLmGaFGR5hyRmAzmf7STtGq62k6LevfnkECjZ8Cnn5GtHBAmWEf2pMqTa",
  "key14": "2qLV6oMjDKxN676UtNQ3uo4eSFi6tQyxVPE9Bf7jhqvVgtWzYfm6h2JD4srJeBqCcRZyn4gbRk6jbSBQh3wuQrai",
  "key15": "4anfrj2rREDvoobAryh6zVvvMixZ548ZmrviQNdJYamj8QtCFbdQ7tPCDHqpvZJRa8qBd32C4KyPRcYn3CcXCehD",
  "key16": "2Pr3MJRiNsP45TVyJMxf2Xz2gTyTLbvV1qNNpXof8nxbGu3GMogDAjKBoLxoyoeemh2FeSErzTxHfzwds6stNaJ5",
  "key17": "28nHVHMfi2E8aa2BPx3U4MupMAyiathdUBbdB1cZbx4XQyZsHiTSn7UMDWRyLVWDAjT36jqSBhPgoxhC52vsQnzd",
  "key18": "ywsjzUR6Mi43KBZHLFeGDFfsTYGyNXZfivyD8TZbLGhUeWDiF1pVAhmgH6Kqodw8mX8RhPgSbpiHCtpu2CumcNE",
  "key19": "2GCRtmVt1zfS7kkKgev4HVAgLcwYPAqMbCsYyyzDjakBXXVeiYsbTT7YgF8XrRfwVSAJYPMMohFmETtm3meZRGtx",
  "key20": "EMwAcGCx4EZLU4BuU7UhW1g6xya6Jk95NDQBL8JhH6JEtUhPVMwNSzxpbyJUpcGeFPVd6o16ZoUzY9Q92j5DMMb",
  "key21": "5y1YS5X2biJvbAceyj85ChtvyMjVA7cKFiC8gZ5UGFfNBnN9Cqf6HJGAuZy2A4BoNibwGMc51vmYEe8Edj7VaEyH",
  "key22": "2hBeQvQtsDiJW23U6kkdtHP7SUogPJUsj4vf469h8nPdD3699E2XhZjBgNFzkFELhm4xMTnAx1uDG9VyEHXMQ9wn",
  "key23": "3qTXTV9xAsK2svoESfGJtfsBEVGtZFkCSSb5whyzppXSDpcyrarJAMynVkuGVQdm9Ntgx8GwPuvohygmy7q3VVs7",
  "key24": "3qZ4dQfHumUfKjxghAn2vs8BnP7bdhwfGtaAT6MyF3qxEeUvGuMmpYwoHregJWjDx3ZH9XsLi1UbEvNLL2jiooff",
  "key25": "58TqTr2mnX82oP9C8JG1Scy9XXffTZ2GPzsNig862zAWTmSsYNdcEJnx75sdTxL3TK7XH2rQ5f6o6MY4ftGD8njZ",
  "key26": "4uCogbaeUrDH4NvqYWGq2dsyUmgyKtfiTeboYygBGJd3fnGAYhQ3aw35Fjic5AarGxKifgJXNh5sE4BfGwpcRhqw",
  "key27": "4oRntMEQSFDCCVax8K7KYnxaajq2E4iYUVoLWPKjZnfLgxJmFShz9svjYEW7RfJfEUDNf3cTrJvM2t3m6FNsxRSJ",
  "key28": "8j6Xf2uT4bshmj28Kg6ZCyUxEHr9W5CwwqGGMmUsXesfX1zWXuzTHis93xG4UaVsJEfKrio5UncumPfhg8BF87J",
  "key29": "3k5ZZCv5YWDv4oBHrGrtmA4ccEyZWT9PoyuPbeGH125kSBCeRSnNv5yf2U6QaXfyfnXnNEoVJEDMx3oLpvS9iT4w",
  "key30": "3tpi6PwZvFrLNLdoT9zqiS9QhwGGZ11exfqZfhvptFh5iyVngtd9ZLKpsCptEvsS7jfUe5cdKCpHdVFLYgU1s9jt"
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
