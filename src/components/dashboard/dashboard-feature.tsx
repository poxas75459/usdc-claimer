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
    "4bs9GVA6dh7jE1nv9JNhb8RGC7s1ZG8TK7onnoNox5rkhG4pwfKw6K9BUEXdXXqijWgzdjqFmjd4XHr2a8izj4ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UDThcZKHHkcNGaSBJCMtcafMvBV8wwinm8WreTrUEkmBp1p24KYDW9Mj1Mc83qhtYB8e4yk7wqvK2hq14QFZza",
  "key1": "PvpYCQ3P7zb3Hz78YTJ2iqZJHKbeguSrjpeG8ChFCchrwVSZf4hNRVrsuMAJhZsdyMjgxkzFkGem33j6jZCJN5b",
  "key2": "4n2ScqJ1NLQvPwoVeh7rb6D9E4Mw7FxeKC5yf4LCNcokXV66T9W8CKY55PZj8fTN1FrUatn2FgcA7MuxF4c3ELEx",
  "key3": "2F9J384PwuetW8mEPAqKT3XJMtJaHf7UhiAT8ep95ASvwPkUGsxzfspSupkD76Bc87zzFRbyP4pjD1Wgct2RJkYo",
  "key4": "4mtyhVegJxNDQyxd7brsfdiFr3JjCCmYk2o2k7AaZQ7BaXSqHz1hCyEtk51TF7bgdbQqcU4UZKybTSymrnJni5hK",
  "key5": "g4cbCjm5E3HDqX7XucDZrn7yMKUQS3KKz1tpe6HLDoaFLkwfxEq5BidPBxL2MnZviJRgL5odKGgaxVNmooMZTHm",
  "key6": "5XvWTLwXUxgFyvoym85qS5JrwzDVrFuX79LiBQrJKU6AtWGd6D7FvHToW1XVAyNXuXsZFkLzn3hQ9ZNBEf39cfaJ",
  "key7": "5WEDWDt14gqHuBnHCsvbQ2jcQDfxhkBW5iX6tyNuobzKh8UCe86t58C9yjp5ssn9crvdUHsR8Ky1e6Eovc53XeLK",
  "key8": "3hbPLAxYwpdYTTSoPL5y33LEue3wYwb7LJDrA7kyEEHsV5b7vc2fokbr7C2q9rTo4e5R8GN3fEWnXrmG5z6Vuuiq",
  "key9": "2HBybWV1ZuSbKJdpWNNT9gRiZawm3AyN72KnsJtBahi9CK5gAernQmKevHN49Sawv9iN1nGhzZ7Mo6uXBoPCjAzX",
  "key10": "59g2CBEyuqrm3CURX1aiVQg4MhLSF1hSbeJHCBTxCkYQ7ujWYvfBbA7vNmUN7huba2JwMzQFwNWVd34NqTrtdbQq",
  "key11": "G7Vhz2oTmJ2oMCu5PnMBuqGDpSGq4hQN2zt8UwYwihQHW3vy2i7uRr7yE2U5CXxKRSeBB8ANHX7KqSfcqqeptTo",
  "key12": "3sE4BgYSvT1Y8P79ztqt4Tm9uPmLXysaeuhtziXyVS9erB31masgtkgYcqMqTgUxTJnwnMHV1M5U7CUDznXMqqsQ",
  "key13": "666bXLkekPsH1bbDZjXFUdzjSsjweJUeg56b3NY7pFEpNcE68H3LBafDw3g77r9AXHfTMxdsHRcf9QD9Z5d6czR6",
  "key14": "4XYs6BrqPJ1Rw2VMMgcck8Gr7ewh6r7kCePnBiCZvHUEq4JXHEi4xFwDCTihJYooo1fatTEiUkYiFY39QxtbrXyV",
  "key15": "44TMhMx2eWKB4TAhPu46cp3aYu2cPGRJBUrRm3CdoL5fL6QAsNGS8Qc6c4y8SmxhSAo9gyQtP4xhue4Bg1E1JXtu",
  "key16": "67j7PcNqeuXpZ4L3XCeP7cod8kyPN2mB7cjwb9HspNDt8HN15XYEoJpfgwmSFza7JSJChuSfiFQbYtqKuLZmVuA7",
  "key17": "5DbxMMs5vE6Xva23GQU1kWLydJXvZgNobZwDezVwqnBqfdBVxAeb48F9HySYTKJ4tE7h4YSVGLHgurzeXew5rTgN",
  "key18": "5NxV9Y3ePeGLaBFQK7uTHnNB618p3KV8CQYyXZcs5zY83q42iXeCuywQLsu5BwBqxZp8ygkhpLoxvZc4ZMiD9o1w",
  "key19": "wspKiD7KQpm5NUnyH3KGpQe188ABEvZvTkENYtCgqxcK74E4gvRHfUQpiFwDfKZeLSHYWCVDYbGR7fZTotKJNUv",
  "key20": "Y233eT9U6FEE7eRFwuKxsTATV55oyYnU1MPPKmYcpxeNunpodygAn3dwZd9iU1VMvLJbws4ws6AomfaEHhjkfoE",
  "key21": "5i6ojvAvkZm32XBrguQGqk2pUvkDiai28STHGfaBkAqE99tzWvWPqGvKNz4ND7xrCE4Y7fRuZAKAZgRhyJkC5n6U",
  "key22": "TfD5wJf17PKvz2vCuy3B77BrEVEUinaYp66yZVHLHTyLvmr4ToZPENzvE8rmJuFe4hUapM9nXEJAGPEJj9ScbK3",
  "key23": "4E3J2dkczLC26tmb6BroJYFLHV1mzujXsQsKG2FveVcV1HE31LVTiPq2hQ684f77cWnCgWddL2qTw52Gtpvb1FcA",
  "key24": "5uku75VZqcMbjWDAxbxmGAiN1TGDs7sq6ENzigKFNnhuDMWJNgUNDiy2jA7Zt8jNjQKsCWXQFjwVct8v3HcJiQir",
  "key25": "3MJrEiGDJWMiatWGGhF4GSmMU4s867CCFf3A6Dig32kku4jjh9WK9G7Ge3s5FXdP2vSNZspa5PXk3gG3nEqZJnW",
  "key26": "5yktdx5WGNq8E5DAe1iTKc5Jx4wNsoFi1nDNypNuFwkBpC1YWLpe3yoMzdqxsncJMYieZaMGHFDJMZes8eWmeJbX",
  "key27": "5hrSeVyC6WChcGX39N9izErhztqtewgVzvNJzBXDNP8rf1yqYHAaLPj11PunbYDiPAaA4GZpE3CcaZUzcdksLjGM",
  "key28": "4EXeeD1rXRu4v8JgVMqt9VCUK2rnDQfvbC5XLRJXatbTqfpenaR7STqs3kGTeTawL1ctEEWBFC2dGHBoNvPJxYv7",
  "key29": "5Q8vVBURqDzQwdzAgXT67EKMBJxvJjruyhPqAhsDDWBFDHZJKroG7nutmNfpUtjYJpubARbcdYcdstewFnyh7bMn",
  "key30": "5WcFts5ad6ofSpRycxLnWxQa24CbxT57H9kKtuXRf3nDQF2BZGy6VxYgs7LyMYoby9q74aj3TsS5VrGr1u2e8d2x",
  "key31": "4eEB8dvZhPCdFEczKcnXPV1yRxWdJXUikFB7BymN3NkxuvMGjdKuo6jaKzKBNReDgUBBSvcs2iG8H84gdz7DBpFF",
  "key32": "5y9iR43gCBi45H6X31MPCZ89K2WN2YekzhtA6EnRGHFQiipWiXoztQTAw3NDheiDrYARrX64cewpnM74kVn8VQ4H",
  "key33": "4c4YGsNFCKrktoWetbfKCxRfnkpNxyssUqb8iAkDpi2vnwVT7bQoaHsY9ePZefGV6hd2ur4g9w1gvaykPKFVwWZa",
  "key34": "54W4LzxmYnVUHzm8yuhQJRDzUUuo8L7qXgN1UHSJdmAFVdWASiSWHWvmAtewHx45ibankQnjYMVhQN9nmBJt21Ln",
  "key35": "582ihuU6edD9ZJE7h5Gcm2LhTtVtiTuHU2YxRCzVLK77h1nj2UELNPDgSLiwrkTHJL981FCqbKszojKDcKsNJ1GT",
  "key36": "5eyU2cCXB75ARizHRzV9JJbNexRjQCi1yTJBheSWRMBWYtnDJUU36adW8LKuFXAPfkHuBQuogEU5QPhAzCiqAUNj",
  "key37": "48RhyZps8PTgyzsHivBbRdR3RQ7fnC9JkU3gpykS6G2vX4qYCyHysNexryxg1SxRuaRLrWJoGaGLyjB7z1MvacV6",
  "key38": "5V5gKEfxwgdCzzMUH7Dzo6cuhEcQ1U9S3SViZ8gAi5WR5ZDXiMvN4yW3rLqg81XrrW2ETK4WME35vMKbrqkeG2C7",
  "key39": "5Piy4q9kxeVc6cTuzGWZTqWRVB3tSxeefAXHZKQYFWhVp5H3Eh43pc2CMZK3J7zK1PLQAn51TYYQbXkKQHzzk4iK",
  "key40": "3NWeNxixMEDZG5zEkHxxdUK1by39nQncpRm73BgWcEq6ySA5tBPis36jYQgXeaEw9N7mvoYZ4UVKQKZx8Bo1Fqi5",
  "key41": "63zckwLLiCS9u1LirqKtrsQUtogrShzhiNJXjJgYun7LbcDSqecR4PZCQYAJsUpXokaK61krrYYo4DDjAZkaWVHf",
  "key42": "2dmRncMQLGrtenmBQnUDW2nU7UQYuA2jEQFj9MG9SGFZco4HY1VT6Qw1JYD4UdSggbDnC8q7eaSTf7Vb2mni9NaF",
  "key43": "3oVCGhjdvwDCP33bLvexXMLsf1yNw5HZidBnHsKTbTEMEt2rWNV9ke96GjZQuwRGLcK6LtBpb27M2qEyX7ngkfjk"
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
