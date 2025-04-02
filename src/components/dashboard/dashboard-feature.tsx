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
    "8r65jwEmNJ8L3cb15fLWH6AtpDZjy6CZd7AeUkkre82MuMaBzyNDiDrXSHSqJ6EfoVWVv3NrEN1koy8Tc5epndX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDF6vt2nViRo3g3Ysevb29hRqbdHHpkD3PuZkkgThy9GwTcNfJDd6eocD3dboHcKkNDSqefcBGWDok7C6gvC1RB",
  "key1": "2gH74miVifTZTc2egpmGfk6zkNHBuV45wu5c6prDX3m4NM9bWbjqr93YEGDuSfTZHU8yGZFK9FoYMZXqFrt2ssVT",
  "key2": "2SSUj7SGyTaJqx1YMNZ38oTQsdJf9dvVqUVPpVMppWPXfktvYFLUoLJY6zFxwzKpeHtDT8HXtm1BfzsTrKGASQaW",
  "key3": "5JQJ59sHLhAPHxKdXAfspngjzpcRpWKj4Smc79jxL6dL1EMRtT9iVnW6XWdPbhzzNJKP4rn2vWJFa12xQVToLyb8",
  "key4": "3UwpSTX4xTu2DLDe5rV14AdUct4sJm4qTqNmkxJM3yi4VMe81GTZLwtMNNUvDdJmjwGY7aaFom5EHXwM4u43qav5",
  "key5": "4UXxHZCBmCbVBWo9aeTDaomxazFcjr2kaqsYUrN1jSyKuHLd3K9Yb22rq4uubRCTqxADjCtnpWXGZBZAe2yntAty",
  "key6": "5Um5eUHzNBgtvNNfppaftxCUcDBC1xDUSJiLT5t4w1TKgXu3DQorpGTLPeZXm6t4U9i97SNoVHpVSuKeJAnRby2P",
  "key7": "2wSEeh6wa26vHMPxJ7s7GEGmUMkzqE9iwcEuDqhnweSfTPLh3hUSAeRXoxDJPaUnRP3wdaHQysyoTzSN5yA4kHVU",
  "key8": "5Fh3Jc6RVcWDvfw66A53pwADvw9xSXaZTFnarW5wm8zGKU6NLykmSTgY1r2Kw1PL2N4z38fCrMt6KifvTSuVYKzT",
  "key9": "5yBBRWYq4aXRDDHAdtExjaNUJPfK6HRetr5yFHRAGWLHLvoMwh9wwG7Zv7cmVonM8wFYXmfzH9LgbxthYB1Lb9EA",
  "key10": "2iSMh5VLt1m7hw5c1QqdG4M3X3XXSBKAT9XSUsKanBCYALKoKebQjgkYQ7P9oS81BUW2YaRSjqSjzFUrTg95CpBw",
  "key11": "48zLfxi9Nud7z8aQhv5vtLatiFctTLgq9dv2jphJ5YjoJYt5GRiXGqybaLvBtMksCLFcKAcTkr1y1xio9QQqDk71",
  "key12": "3XSgUZ8916wX3ugSfgzwyGrrWrxYxQZS1Dky1WxSDTwWBbbhYwYJcuegqLpnDfxSrqYcHSsM6cRSRc7rgHYxVL9c",
  "key13": "5AskYD3W1sjZfEGHs8wMQASVY94XgzRRkF2BoTh9uQNipSuDFHhktMpQvJTW9muYbkjRbby6SfyCKxBU5ghr2Urn",
  "key14": "32G63b4eV2X5ghcQKFT6TpJE4PWCM9Z65Kj6FwygGE5ntkXvktU1bihou197fbjDdUPqrLoBsVFLbeEkk37QqR7b",
  "key15": "45MAGxuNYz7q8jMVWZBNTCTJYpYxXzSetiJPiJ1b47qGmxuC9qFV7WDktJgHNNrxjy58FSjDoDCRAcgrYiyjMQu6",
  "key16": "2umJpoz9B1eKWFmn5PFrM7AtLPHybfRRPV2SVBmxMNZLFPgKugQ5PvPn1k8wKqwWwEedH6VPoxjj3xbf3X244LPn",
  "key17": "4KPVyaYzrmiVQHpbw2j9gH6neTCz25mT4B6ucTToGGy5pF3cbdPa8g266jM4XHTNqn9yMdc6yEiHsWbumsxuf4gA",
  "key18": "43S7qgWRSeH9yN43nvFedgn3pJUdTu9puahoa1RYrfuocgpjPrkQqnXFjcPaqCEvJfHoptBjBjAEfoXCKcDMdsdM",
  "key19": "3RxauKHFkthBBgFjTJoaa8qDYTBjEmdE5qQae657xaeEis9R2cSZaxwf1Et16dGzeSNxv5fRRxFnHrjiUqydF12P",
  "key20": "5Y96LpxJrFBjikPdmtLSELWXCZCRXAHk85zCbgmgGYjdv9MYn4HtTK3MHsFb1ZCrW4CHGAQhJmNQNajK7uNu1fg4",
  "key21": "5uDWMsDGnvyyktzAaNoucguyDALu6wBY8eARrgU7ds9cLjjj9dv3udX7jyEABDNe8HJQGYQS18qydH9k7mxuF71V",
  "key22": "2BwVRnUvmaUxRvADnm87ZYTpjxYmqewhR7zScEZNy4CpK6D51ZmGSQNNkS3y7hMqGavDDdjXSv69ocSvAMsUW24w",
  "key23": "4wLpbq28NuVQawpKai3aFPYViES74fZ6Js2RmhMSeYWRaAuM4rN4iS3884zU7TR9KYwjfzSDktZpPT6KKCg4yf4N",
  "key24": "PUBGGPV2GKoK4othtRKNZ8dy6y3vYEnEW1Ku4kLVykAnRT4UseJbuPRb7RyBJzoxXDsQEuMmaiaM7hdauWq7H5e",
  "key25": "5We3cscq533kowPmAQmmVVizfUnTE4Rmuraooz2ywRahZXsauXVg635dWXwyFdQdTv9uNp1ti4QsafWiKrQmGH1m"
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
