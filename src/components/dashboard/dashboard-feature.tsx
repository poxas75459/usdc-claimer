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
    "5cbKM8ZNrrBZmzvf2QT6x2kEoLP7Zu7hBdNzDtg6geG3DXk6E9Zzz59vvpWQPVsRDoufiXcHxd5m1x217tCc4CVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8H3J7XUw2jfn4JKoiDiaRr5ayrYoffURfUEDE3XGYxPWtxSgihDKhqCUDfzxrWF2gad127PBhVLvLYJZ1ydPxH",
  "key1": "31kgRBB2HozvzUPfemwyCMfTvhtY5yECJrmbBNL9kZbJ7kcq7vLSTVoaEAfvi6AMjtjkBBSSG7U9Y2mEDYfUJugY",
  "key2": "4YGDCf1wJnhYHw8AC2GiCgydmf1TDSf4WiVVCi4G92NhJtd8HMvboABC4aP3HDhzPZny4feE85TDDqUwGCYivRZM",
  "key3": "4fMersEJcBNLdwiLZVdFUJcj2d6cWuNXDh1zRrQBTSXmnEcuFvJYvXTzCFPBy6EEcsG75qDsDEE6JuAANnq7H8Vq",
  "key4": "3C9vPFzKiZiJi16A7RqSSKAZ98PK6v8qZ9R54JaMt1yeigkuZGmWwEfg1zD1RFV1My2MDM4L5V9b31Ru1LW6qGP4",
  "key5": "5a97pKvPa8hjcLrRiTwXes8Pfh15qNj4JoR73m7JVYxcRp1jVBEL5ntzCAes4NNQnj6pwMfPTW9q45vm8Nwj78gD",
  "key6": "4E2JDcZqp1KnbzCQkqkFtMkzNhJ8z4HY76vwdUNoZKQnzr1bZV4FyDXAppWGmgiLptecv5icwhjnkXYVKLC7BX5m",
  "key7": "5PqtUENtu7GyXhEckqpVjRbZpnA4W1sbUCcomT67DwTqdb1iwybW3bsMFmUo56cSqsKKjQDRDwtuEQkahzPqRQ3b",
  "key8": "5W7z1rVzn7PVtDbu6Fp5AobonpyUN8bA4GZC7bZ3n8Dn86iytA9tPVhebXatuuqbXK2U4vRuqMiNoqE9Df8r9ZT5",
  "key9": "2zGZJhMUb2rsXqgQytCczHSq9wYtdneTSTcu5XKPVXkFzHz9YwUzhq3MDrWcdUiPVUqH4c2rDnfyBj6ZQhkpK8ae",
  "key10": "4DTJjF2cTeaWxAUuWKxGPL2LvLuij4ckocmn7hoe8YgM6VMnn9AiVqYfM54oUqTFuM9d2NyA8DGhfpd3jqwM64hH",
  "key11": "5BUCXTmuFiR4MwbWHj6Rr7foWP9qVQGboCudJVHnG64xvsWtRWkpo56cgC7ApaJP4kMymAw8PqzZpWgcFp6nF6HM",
  "key12": "2qGFreeAM9gu477xMBnvgqzwLeBcuB8H6W5q82m6egNjNnSCGspen3DgjUFgmyXTt6wYqZANygyJQqG5j9WmXVgq",
  "key13": "48AKgspJJCJHjtqBqVg2wPqXLqNYTNzFxN8odca8CFHhtAr2ZNhDNBQwFMooTV1oJrs2KgWtpHkhfiR11fYi528G",
  "key14": "3wZNHXMpxgwB4HXF9qY4RBt1E7g7UFVMenjXczpxvmj5u67kyeDsKpLBuKKLgC1W5fhqf7v5pGfA33Emqu2tuYCE",
  "key15": "5xajJ9taZnCbJwCU3FV8GmzgbhAdPjAhepC6Zsa7oGWptk6YHNGXisPqVyTYdVG2ddZHdY91ZTJxvv2A9GPqJcsv",
  "key16": "5iTC1q6qudVJj4FJr4rs8bPRrnyxxZ8TjnrKkb9k6Ug2DcZkhboU9dsFNkUoNaGHATpXc5AspJ82EMU6L8GaNPeU",
  "key17": "3W6bVz7d1UfhvcaWqhogfR9YEVhFUUqg5zb9CoanbrVbFMBEgVKFEbLCf66jw2zUiUFKNbVBkR8gsaCmGanYZxNC",
  "key18": "GUatxMqBn8UdYUhLxbCcYg7NwxJd5MnnkjwLQVADGT3NK7fAtrPxug29oE2ormXpRaBxv3D1uqavHXUExSgSuRJ",
  "key19": "47QNHp9fd79SmXMUCijkNoEb9uT3gyeVu67kQT9XHKgPonpWJodWQmAid5PycjMdCr3CrLpBh7jfobFU29Rx74MM",
  "key20": "2oGEuQ1PeyNNNNjJjAd97KcQotDUS2WxKT5mL22MhnZfaU5MWXDa9QMDvviUJnW1DELMK2LbqpLUpNE77aVFv5kS",
  "key21": "2jPeyC9ZaLbAgug784gYWr4TnxXuxLGmGtLTUo4TX6QdJQoW8vuXvx4tuK3sjXp6xpHeGGnVBcNoZPLa2smEcUDi",
  "key22": "5tvoFQGBkRf4sFyjYTXZw29MxQvq5WrbuLHruW1U8smkgCgGyi7Hn8ZwmVxyA6pPw97Kxhdh5hK9b2JR67EHXKMm",
  "key23": "od1XZcVuH7SktrRxtiSUM8bmqtCMNmiyiKgYSWYuVtkZhFZ5GuU3pasLKAcFSYtcNZ9hb4mrmZfixt4xsqyxhVE",
  "key24": "4nDiVRKbD3Zite8VugbFLC8gXMX5t2qkLYPMZV6kVMh12MLQ5hZK2BG4423P7yDVVbnUkgCTBRH4g4YENi7sU2W4",
  "key25": "4M6TJ3dPDnhe47bnmLRHcyPgjS7gLHBkyJzaws1MtfUC7tZoEjoJs7YSfKuJwSjdQ2W7QMA1iiM73ax7NK7KfAik",
  "key26": "59xMouitxnsqr2DpJmRbbdn78By5aA7bWgNRnuKn12iLeBomBZ9RdyUSgqSuDc5tcyZ2fPR57tKJbWChGx9rv1V4"
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
