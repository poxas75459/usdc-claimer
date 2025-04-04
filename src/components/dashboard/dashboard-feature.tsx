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
    "4M4g9GDs2CKUcysQ8w8CVetc26FMx3VyHSF8M6KX2DVdhG3RpwkjhJKNj79RHQpX8a519jdHJrJyJELpGMgZvLrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qvBGsV8Zfarb5UndHD1QiWKhZjgRCxGRFzwTxDKAF1wuk1JQMziRsDrEqm7RxWRLuwVjtatoA623zkp1XAuoQ2",
  "key1": "LPYfNhmDbKZWGHoTw6nJh8RcJrZyb5ThAmFgj9gHH6WeJskifXf6WXH2zbNstKmncpMsCerQMseT6MU15J5cJkS",
  "key2": "2qXHwuUH4DHJR99is8bCdCibEgfdCVdvGLuW5BXZpSnEdjNd6EGN7hHjMUFcEqgEE9AJtrzStgc8xP9Js7MeNPZi",
  "key3": "oje1FnkrGeUSHauPB8y8pD2DR4bLqXRV2J5o5jfpEX9vM1ADsEVNTLQ9wrSNyHH4uZ8YzveB5VE7V5YwXvyBECs",
  "key4": "2sVDYV5eg9E1fcDTurMXAs3bGMoCvNZNnsiwfJGeLJjAEQFS1cfJvbYjd3DPb6Z6uMRjuFjRjxipaTALprYajn6M",
  "key5": "32v2vqgxjgP2NavH8Up6xogRNWMJnWae9MMPRV1UeSdYBni49bJDEehtGEksf4xqVgsSVzxwswpjVgtaFJ3JeYDW",
  "key6": "5PbXH4xg1UWv1nYC4M6PVrKU2t3tHz9PwS2ijWLsT97xJF3EKaDxTBuRrPG2maLqveV3E48zfFXZdpcTwapMv5Yc",
  "key7": "5Vyoumi1qV6BoqSmrcQXTq9ynHozYSeAmKrGjJSNngxpUYRZCdKpczrQULgGsTVSrw8moDbADQoK1KjctNGYwwSv",
  "key8": "5RFqKtMx67tyhjFUKtdZpJ1HW8ScwL3HxHUn2LSvwcfZc2aQqXsJDiZ5BGtVPph6jarxoMcviePYz281SS5CvH83",
  "key9": "5zNNZvTy7JnM2py45pqU6zLMCSsDbJi41AAQDuEu5gYn5rWT5FUyEVhWQ7P8AvNJJqajYeEy3FXr8gbxabqMy85e",
  "key10": "4ErYFbJGHSzQNq4Br9XxQcgkKWLhAggp9cCWf9R75TxZyREeQ6zXV4s1SPd1ye3kteXca4LfoaA9rdSrhvJbwPKE",
  "key11": "5UWdvWsxDBFP87qLCYSeZy3e9jidbuVQeqmBFv1Y3R6ApwWTwzUvfiJ6zkPHZRucRxJfR2u9zm3ktNRs4v5FrM3V",
  "key12": "25Zo76C9nEMDqNWbmN3PPnXLm6kqVXjXTYENACcaa1MGx6ktgLvNPypBgEW2nrDYFp1YB14maCqtShvGYYjuycay",
  "key13": "4M83ts8RdTPbgTniDogN1rtFwoRoR9wRdQfAruvTboZsmsuz2XEHDSg2fKsLPxqefTFr3id9snHCVw3V4YcWFVTV",
  "key14": "2zMBCNV9Ljqekfu1n2NttGSE6v1815Z6Ugumkpeib3hcbbRVTEsZwd3hmd4wU5wv6WUTUJHp9sPHaTewjmDEaeHV",
  "key15": "4Mvo6NTiPHTg8CyjMzuKx8xAqBpzqFrD8acviU1QqEt4j9GSBMq3RNCu2ovmc6yVnzECUETv5x8h4GmWghmPsxJv",
  "key16": "de63zDzmdQ6RRTiCszW5H5FpnQXtyY1ny2nMqVK7u6JPCQssnsxyTeU7q6hXuuwrpqnmyD4juwHXfwAxGXxjKs7",
  "key17": "3qUdoZQHxyQ5xthE5Wi3SZnTu9YQLYhopqU7sfGKpJmRJSqryWvvfspftuut11nuc5HmACTXLZvA94uwxPsKRkUt",
  "key18": "5b9vpCNA7anw9rF5wTG8Z7ZxPYYV6uCiYU1jsxf1wPbNYW5vAxJJjP1oxtYd4Sg6eSPmHw9J9BwjuVAJjdAL3C5n",
  "key19": "5WfMwWRTfKrBAhYr97arKHzMWQUwVFbHFjHS19YGmqGh7LnKVSKouGf4EBtewPxBNkPqtN9fVWXxVQx9NVV7qamb",
  "key20": "4wpQ89HoALXTy992htEhqsgjjpmCzHpgnBHE83x2KaqNZYbeBBWgCKSfmTkYHyVjheRmuWkKcSSdaGSbrBXiegf4",
  "key21": "4iKbTLD7WwYACQTbjP4895sUKh2c7ve2a6rCg9UBVqtc4kh6eG55zZjXbPVcKGKqdLzsy65rvqy3ipKhikHghgwV",
  "key22": "xU78oUpur2PCqo5XFyHDqUGXrbRuBEqPi1LoTB43E4TDpo4YTUzsndY6cV6o737M4eE17TWo5SPqtLF2wTLSYm9",
  "key23": "34ZUVXh3BHasYUUpc2AWVbEtEbmvGw4GAk6Wqck8urfh4ojCLe8a2KGcfsL8GMPAUeJbP2ksiHjXE574zZFzHMef",
  "key24": "3NNFUAJoZhB16G31hhbbwRt8v5C2JQUmsEzSce43shiSKsJTypmsYr8gPiTz5oguZgATS2xH46fcKfN2SNGUFhRS",
  "key25": "61FEcCdjWkAvN94HLr4TCqDhBsotEubeDJcCqUWzA1R99j8vXaPSeqy2R6Lj2tLvL7Ra11F538EcBrV3VTExoDVP",
  "key26": "4c4V7fNKnfqtqoCMV1jhtZHW4zqMNfmLUia7LzWLu9FCiHVm6uJprdQW3uU7seX7m1uPzdwX6RXKaefp5xDrBmYZ",
  "key27": "3Htmvt7D3zz7fxPYnEiDzPNGPH8eq4cZ6uvfdbJoTbq8wxs4iryNCFifi148jc3GZ2sBGHKQKFbg5CLWk3v7DzXU",
  "key28": "sw5ctirTi8h6XxnU7jSvusMyMiERcyrxLdmEfXCurjcEi3YMyyjzr65knNYXhPpDwmtTwxMfyVdbuPtrchqMx5r",
  "key29": "uRvTMHUc8DNbhzqLNczUBvoAngVu74MmsS24DBLF4Uox7pej72xYbiS8PyDzLbJJWSZva8eu3aekCme2u4pChRQ"
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
