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
    "2ooATkkK2qyYpYFSAy49ixojcDDCzQWWiT6u2D8RF2aKSDZgVhmmmWS4o4eRnzhwqL9c9UzRKdUzBP4FmZjupfCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvDGbh5w6oc8551YS6ZgGfXtK7kkqzJ6C8XLYnS8RWSY3S7PWBnrvYeAbxDUUQTwq5umUpPkHviGLi3r4unH1Pq",
  "key1": "37QeZgYx39RRTiBtLtZEbZxF3T8sCBdgobGz6pfEnoxufWWCpRidp3m6feHU7zc6wHz62N9yoLwZNxo8dXTtRYaV",
  "key2": "4XVmFgMooXJmNVQGjdYG2esMCtQfHGRdT82zNs3HMFexQ8ZeE1GzHF3us4QVHkxxTc4p4yCHiTVAcELRQH8aN3DF",
  "key3": "3f7LU33myvVZiwMidz8FkRBcnf5rjqGqYpATYbSXtww7dFBgLgqqEWeiwZ6YKwoWHTEfTETyF8RSPtD1uDmj6WFj",
  "key4": "3Et5aLWh8pkRSMgtXp8mtKF6SwqCD9r4JE9aCXbh4z7MxuFMhfrpt3KrE814oE3deGzBdjQCGzjUMeEAXuxkMETd",
  "key5": "H8NURYXM7qLm39QWH9QLmf6mjT3vFU8httrrxv66eULg9ef43b4bbUvCcsWhxTmeFSVcJy41gU93Cp83jGVARqA",
  "key6": "3FfiMVuWKWfBy1MrXf4jnff4Ebu61Vrxo9KazCGYV6GGAY4cwHFz2qLy2G6XvHsoUXgAQLVL6pum6t2Xf3YQXQ7K",
  "key7": "3Knv47DMFweVF5gU2v3EbV9K1C823WFrDykttdfxXmSWaE8VMphdMCjcrj1X3S17GpPtAw1XmTFXhVUtWexSHad5",
  "key8": "3CYsvDPmm4iH2xWYpBzm1QTBaCeW2EWC21tqTURAyy7oTQtPCEcHo4wiEt9UdEU3NysbiMoUa27Wzqiu7QkX1YqZ",
  "key9": "7YciY3La9VRUubn1kCLbJg9zJGGfEcGSGY9j5G73XpT2gu1hRT36CqQ1suYXRdAooYXpuW3Cj15q7zgLtT4t6RN",
  "key10": "rJUefUy7Pb98YvN3pUt3ZXMEFugkSEXWSxaRcXfBYHxPJTvNuyuqSUxz4Gka8T4zaYSs53WUqernbkCghe8zz5e",
  "key11": "3Jz9JX9fhRWxm1NPxFVskvFvywsCiz3UDmD5W7ZvjakuqXeownKBLqD1roaoy7gQHGTNb6Z7bqXd6o7nY2YRBshM",
  "key12": "3ngbe7CRbxJPyoiPhQrLMhbhwEYgF9n5BUT3CmdjJmcZr8h3zLKAh1G6gMhwBEwQ57nEBhSc5fh8bXmuk4vwJquD",
  "key13": "3c4rUD7NEmjJpsByRgPULgZKgs3N1hCN9bGNcpGzKHtzuuYWJzzsEZoaX2C2CFt8VtungstjXVVfguyDP7mZsBND",
  "key14": "59rzULa3ikDwL4cqzCyacKnQqE3JAXENjo6mjamS9ys2kDbwjaEG2AMEyfiF21kDUEMLAtDtoSwnnZ1wuBMPirnF",
  "key15": "4SY2gnbFdjn1UXVxf2roTSujiZUvf7itizWgGkG9RXBSX3XhaV6VbSo2kPZT8yPRR7C9fmXdTJ5wFzbRSXvX3Hnk",
  "key16": "4sB5j54WKyc2jaY5ThYGaSyaUPGnfyCCn447YxFewaVLsQ7L3uwHeADsKZXUAYJvTXny7FKQrRrsiKVENCD6MWZ",
  "key17": "2qvki2bzQ9jbPgQ6gZuJWLfu5t97sNeFUJVho93ag1axz6z1tVXyYn1zXYUKAML57zWmTMgUSF4iv7TJVWJpBUaV",
  "key18": "LcK1WzUgPDH6DhVeBXz8m9cC132Rf3WZ1g5ccttfHEm1wgNADTHHrTpGzWnPfJFdhCN1Nhr6kmYh1d53zrAPr9Z",
  "key19": "7SU8WqSzbY8EW7UHYdCPkJL3oQSCC8Xa5pPeRMiVWmcJFBFS4gWEuLNLsLiDknSetkUVp6FfvwypTSBrBMw19gm",
  "key20": "4KjeJ8XmTuaQCqwozz8gjXNJJ3eDxGewigCrkwvm2GpP64GLbgHgxdcocPQPCMkzt3D49ttsm3VWbPNdkiJGsRcd",
  "key21": "4kyVM3yMUbpa9dSjNvvhuKwZD6RfUVqzNAdwckv6jFtj2m9JMGMFro2s9kdDwje255pMjqt7JRN11WajPcWK3YbP",
  "key22": "3CNzM27bBYiUt792NwjoRDRDRgBs9tZHyNJPCDTL1U2Z3v45BAeXuSLJznYfohYaDrQqXVkT78U7WPyziC2LxJJi",
  "key23": "4h5jUFAmZgDicfBQxsBTUgLR1qTM2hQeu1tS7PkttbBnBAg4R9NaDw5Mw2zZGDmn9soyj9AGe7kv9KQRfugvHon4",
  "key24": "zTGWKFdgiPQFuLayfV3x3PW7WJqcJHoiEqQH2K5rGXBmqYjf35GiTYLhtz9ymWvMTVVdiU1jVhNzVxo3eBCnEbo",
  "key25": "44zAoUzBJT6dVKaVxi3pYrPW3c1usAApYcpwyvNbsX8HkfHwJgPhL38B2ARV6bzhK7U5m6Yibtux8rTP6R3Rh3zs",
  "key26": "cQD51Weni4vnVA7MAxX22ZqcJx8eChjTfRuYyiH348v3p4sdrrY7tWqeWb7EahbnBkEtTQWn551EXysmvRWipJW",
  "key27": "5WWHkiBrBrQ2BJEkvoqTq1MgNeMNHZkfejn9UPXxYdBxA35jDB3BgqSyL6arws2156dWcGvzZF1eDsPbcHsvuxtQ",
  "key28": "fX3SvoCzLvLvPxy3oS2QXU9P3gu2xcRwEB3zNGnz8YxKmfEqiSGhpJBcUBw3rbbGBsreQuny5yrWGqK1wP6Wkys",
  "key29": "2SAT8mwuwttLoGC1E5rrythDWZHwuFnqxWWdDEWtEHYrFVDMLFJRcnQdjmDaDp37yBZMtwLBLAng2tTJn2yBCBKU",
  "key30": "2EjPWqdgRFLc5yq74BU8FuYdhWBVdW7QTm6CbYqDShLBxGcszs9JJmCN1Mte3fxrBr3qE7FxXEFaGu2scine4f6o",
  "key31": "4z4hHQgYFpWUpQEnzDvyAM29WgMApdpNhnXzE76KhFkeG75N3aTPj1BLn4tvJqu6L1z7hnNW1cL5cXPfXevcfmbq"
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
