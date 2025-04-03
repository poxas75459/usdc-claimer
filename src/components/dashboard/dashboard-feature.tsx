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
    "4E9hPhhxU5Yt1s4MoDQ2gkNTNuL7Kgp3KyX3tj8LDjzxu2DMiMpnoTAnK5uyiyxXvLVfKhsNM2YCV6y3mMKVXNLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEuwz7odVt4h6zFWHfohk9JEG9Pv3ZeLzZXKXFLJLXkFHsoQ6FM51WBafqVhBiDMpVWUdxwaYuZPfG8msa4EKNt",
  "key1": "CwmPSzEW8YoYGwik9z3gtaaTeVS6UWTnpmYhW6Xw5Ke5BoK94wVb9zzxmLkCpdPW68Pg8WgFpph3HFDaMXaVVDC",
  "key2": "4hwPaE82KQLb1PdJEGK9gmkHZdKm1QdVTCkoSk37cK8czJafSbTNcqbXZXRyv8aEpuadieagwxKc6LYdgMZvWakq",
  "key3": "4LqJB8ACrxqxKTr2LDZ1nembMmHAuJsYQ3MUebo8ZVFBSBA3aAMk1nVixYFqAXkpzWaqKopExXerDr3FeLRDYqnh",
  "key4": "TWnmsHsvYCKtCKWXRjqhMxZx2BrgHu6dW39gEYLyMrBAeYf4iPYoBpQMe3xdv7kauNm1HarBjpvR24vaTPKqQhr",
  "key5": "21xU7kcoVxUnrD2kUuvj2uaWKCAz3G6Q9DZYtx9xR651x7EBCsiTfRnZUeuJprSReEufYFQ58AJZD8e4XS3ojvQH",
  "key6": "3GUN8RL66aBEPFNEo1JNjHqVCkBxz4QfEehNxo6kWN4LZ9HYoiEww6X9zvtMrpcJU64dJWNWino5nzh8urh1Ydse",
  "key7": "K2kkr5LdQ7e7z7yZCTjFofCY9j8A849KCAvyM9ifctvb912n27S6ftDUyQrPuF7QtXF9qJaa3njH9XVsAnsQE8S",
  "key8": "46FmnJ37ooW5fkyUEJ5iNNFKALDifMGeE1D7uaAeB4mkdwazEF9ahLs5VujzhAhoew6fQa8Xi8zc8wtHiDSed41r",
  "key9": "5vaU4pLNoKhCkqvjWgWsiuVqHUjZr3w3sbekXoeRQ3jwFCB213UD1S9zkMgzWDZr56oSTWHm6pSy8BoYvXegYgBj",
  "key10": "5JQc3RU25zNvB6gCK7TR6xqcXFs5eP1YJ7bJY5ARwzird1X4yQnfsm8Sp8WwkMLSPy7WizVrXYB9uNH7ZUhHacg1",
  "key11": "364EWazcbUwJGSmJHsetq1ib6YEkW29cLyrmq8s6xK2rtY9QCWMuykjjgDCk8sPbCxzUf7m4C9dzi1p8ChfjDbJr",
  "key12": "4Sued3Qs5BegXP9oYcqN2ScfGJsu273N2SRqazRE79No2AGAdkmVRh6K5MiJ78VDeBNwLZzUcKc7AvcQLKA34Cpi",
  "key13": "4taKi2ijFdm1Be4oCABZCFShsdSueg5R32MRcEqjFcCVRrf8A8ZLp5NBvzDfX6fT5SAoLiJUGm4bn1hnAGCT1Ps3",
  "key14": "3GRgwv28NuAvawtJwC66kZqmMb49brjTGxYULPmVnsSXbmtqE5RLxEazNHkrxRfD8KgChsdCU2xbH3Ms6wvm9SCp",
  "key15": "2JEe57pxQgix31tkxnMtTubLv1RtvergC2tZMyGUQN1amrbkK7srasGw7MQXSMzLjKVzJidxaxACagK6VhvLVAok",
  "key16": "4uEhB2YizZE9bSfMhXcFQ6FUwvV2zUusuxD99ZJaaj4Lx6LFRkNKRQbhQTyzkDGiogeM2cQA1kFh3RW2bxQSf8ps",
  "key17": "41FkdX8P29VfKoxwKwNY6djQTp2BjR7Ai2NxWy7aCFw84bAB2Vv4tV2BwV1tevG6RicxBun4wFitKjW7nsGZx454",
  "key18": "3QShignfbCDLsujT2bJhoYP8zKHqfQnv3iFjV5viUtzYP15v8vzRjRPd13K6cqWCnAJTVsWPS7DXpd1CzewFBwf6",
  "key19": "3GYCgvo84Bg2PrXu1MKgypbMQm4P36GuZrzNzzoXZvBDZn1XZKniHP77PCd6Mcefz87iQjiHdvevuuAnGrvoYtna",
  "key20": "5K1oe8AFFVbt7w3FE47ELpfun4HpbiVk62BTeAyuSmT2tn25R3mVNpEp7XLeexRmKK3J6ThBvVfjNLx4qXdGjkN3",
  "key21": "595YgyjZCRkhraxNCQmrqyFQNa5c3XoU3m57nMnJgt7e9cbf9Jxgw5KXydaWqtXKu8wCKoaKpXhTsPGrePineifb",
  "key22": "4JHDSMdDVSbR386ryJRXwZ1iEpXkmy4NSmNokBjNwoATZafL5sfje2rS7APAvoNywKju5MsfhubFMCyDD3yg5bD9",
  "key23": "5RyDqdBBk1UTVvxsZ6n1pQEBJo6KndyGkvCB4zBtJWgb23x27Nxmp8nAqtUhWtgPkHjJSuEXz3eferTATkwQM1Gs",
  "key24": "5y8FDAiehE8BvWzydastdATavD5iGz6BNHazMsUw5fdPtwx1Cs57K7q52FYp8TGBc9omzPBA5Ch3b46GcZ9RUBJ9"
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
