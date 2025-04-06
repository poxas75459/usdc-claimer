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
    "67pZU8GSTU84ADCZnYbDPYo2yVCyHHUxdcL4yESNBEoLKL29F2WFQuh69R2d9jg16x1QqY5mEj5HQsvEfCQYnAC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppNovC32WyQsRcDT7XT4VWbXCPZoMkym9svWqUe72iQ1SYjjtzTKaKjjeK8Fytu8pY4i2waWFBraPwHqKU6g1gY",
  "key1": "2pEwmyhC6mZXQ8bRA9UNWj2kmZV1nKCBf91qybwPg5vupnBtLLA9Nn27YztAdokaoCQupsARK6Tw1wXWydhGKxfj",
  "key2": "2HrTScHToXpSGq8hkr6uEF7cWBJy3MTL8FpQNoh19yPgG3mZSpGr2n1Z4B4s6eRzNBEMGqaE1PEUsvFpHBpgrasc",
  "key3": "42kPZBAhUUyAs63y9E7VCxvKm54tP5ZqmBn1uEF4NVYZCS9BzzCjvUMLvYhGWmjAx9us7n3JvmbseDPGiMbP2JZk",
  "key4": "579mT1shX4zohjT1QzPAhbD7Sj7CrstAAAr6yDhpi93GbdudTLQXnf8tHtfmggseWMqC5xahAgk6RXqq44UANrFZ",
  "key5": "3dTXC51KxZsa3e1oPy6tZXVfghHwAPaaQK8yRo1fS1UmbKRYapr4oktp4ZcCxjCtFs1WMhXts3BpQA7iLSGHvfnw",
  "key6": "tTg3oT1Je8HZWv48TWAGdvkGNvDm276z4gVmbhKLTaWq7Lzbvk2VFn3ZoL7j6VQQoBqJAGHJm95meiCWDhzNf71",
  "key7": "228Nv4sPcNcxosQNJtNs7nkCdPuFnbMY8V4orYMSjVBd4vHkGVHJt3e834xGCqnHPCG2V4ecaf48TJD21fJ3RZgk",
  "key8": "3uKnqYThLbVHKUBUh3p76Fj7vW6urR6rXFrpYDg8TePUDJnJAEQkRLD55fuRLvAremHRpwnT617qJYmjhY2uJmAd",
  "key9": "2djz9c5QeXc82j8oDTpb2Dkw1QhFqXJEHmYaUrPGmSw12wg1SZvCySKPEHKNy1CNm6JhMCwQw7MfdgDCEJEEnY8q",
  "key10": "4p92i319SAWFa7Z3yjFejPS4H1NCmpJF3G2dnA25RvLSnqmuWFP6wwWzjAfrnAoW98UwJGmnThpaknX115sc92uw",
  "key11": "46vWj3YFeYt5sypC6f1RetjG34FyeUT7HemHxyKNYsmSdFaDBUeuA2DhCHgXXLURJme1FHMBNMHzH1PdCLKeTHMB",
  "key12": "5vm1tKt9S7c2qy88Bdyh86TR7WydJKKEa6z4M8Pvv5FsFNBYeXhrkJBj3uPJFUfRxkbXRLQ9gP3iVUJELvwRykxu",
  "key13": "df1qzqQKmcBySQiytGSVejcEpTkyFU7uPDCEV3wuzc3mvgUcmrmbZJDhV54LbPYNmRVjtktkgcWX6bRECe3SD8o",
  "key14": "3iqozB65ULD5uvyHZcT3ERcp2kii87KddAmPbyoqRZ1JVb9ZsBoXH5RWAogmyaLQZ8kxM78RzEvatzEpH4r6Xxuo",
  "key15": "44PhLMh4Lan1daV5wkCvKwtV7Me5Cd2e2cTAv9hwSoxihNC4gVh4b5KwDu4DjaajLuDuGjePKm36WbUNvmaYvGLt",
  "key16": "14TAnWFVsboXhaC624ysfeH8fHE9QzqtmowTyPwDKzibZAyg3j5V6Zwa3F5VhqxQ7oJSwQ5srtwGLiBrWn75dTx",
  "key17": "4wJtkDKoy7mhsoH1MxojE6QtnSPczdty6HeFSHcE156nuA3jXZvKuFYQwRzoEQ87FujLXJqm8JiNVRphxZnb9tGh",
  "key18": "62yquy3refZJmx4ut5rGXdSM9oFgFt9ebNKk1EBKdJEZwvHSYgeedCv5J6GJ1s3WgQqUzKcj5UsWPkWoZS5RjHY5",
  "key19": "bgo1Jff7c34S35quiQEpAvQAcTnQTFcFJVic3kWwcat8yPMmwdoro8W7esEaK6u3q4NoUDvUZu2jU8TgCq6Hgiu",
  "key20": "5ECsN9vfEdQAKeMQJ8ATkDfH6cTd42Sy95wfvM8qPGXruq9KbdRLGQ5NaLFs5jvdyb59y32QyjkzcsytdbMTCmS8",
  "key21": "2RJfrgJbpM3KmPtd9jYYUT8K5egXjKUYiYHAFLNYJLbSgoBdWHG2JJUiDZLbPHzimijWzAeEj8NUHtEHLLunk39k",
  "key22": "2hKuX86mRn6pEG53HyTLYzmq5BKQoNkbmVwBZr8dwWanZha9rT5rkex2W9aFGMAnWooujp6xQ4PPJLS8zJaXo3Us",
  "key23": "Hrb6aEaq4ERVdr4Ze4X6Rf1CHRe45arzZvwCvcBsiwUKfvRQXHF6iBKdTMBKdpeRaVdqKtLCW5jT7kvihbQ2Xsd",
  "key24": "2JcaeK3bGSGtjzgowZVHzHCPSzDvK8YuFTF8djJ52xPLkME4B2bAD9be49xkG7ajQP2GNLYbfBiejiXKtPoqVFKi",
  "key25": "4ntyZetpMCZACQ599LtXcTbYCJgGZq7Tz5kMXq7JKoNkdW572oedxb5zHoduwrzyARrA39FUPAXrNkGjjC6X3DbV",
  "key26": "3jFAQUxLiG1itLsbQZTT6KfpYjEBqm3mc8rj4rq4CbqAay4LCuFXfe7CM4N3J5MUMLpzf3ZJLvWyg3pURb3D7np8"
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
