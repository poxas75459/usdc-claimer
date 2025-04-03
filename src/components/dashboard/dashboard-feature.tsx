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
    "UztVPvByCR3PmEF4Xtkv51Z7wJAhuZK2sremVNBmLhPCAoAGSRHZiEGoY8wg1aVDhDGmqmwi6diuZkzbTh9Qzok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4iEQbWco7kbxpNU2C611rDn89Ta9BiQScKr3xJCXqd5RYNKxvnsKfCb632cNwpynRcGU9yTQyu9dZtekEPBzTp",
  "key1": "jds4xgz5TS1T4qHfUFzWWEbCeKCcAEKZ4cQ6HvnWx9aNgu8oM7m7DXyqA2cJy2eBq5hHn4DsvjLrY8ecJ3jAPB7",
  "key2": "4WhELFhi5XBdGdSmHfB6C63Cozo3jAJjG7c86MpfKwJSf7unRcuYhKPdGrcSUjmCraX9VGQq6xQMnmY8JxmpcfXh",
  "key3": "4wLcHevZrZtGiqfGAqEa46Bgrkk2xQFvFjUFJHgWfuw1LjXhw1cMeGR9gAQnQBTdX1vHe66a7fcUhrdKYNLVpKpX",
  "key4": "DscBwFZcm4zKEnHVoSj7Lx89iLKcGPxeDBERYQ7tgjJqZ6PctwGVgq6MSQ7HR9Tahpg4Xz2vhhxnaRt1oRqNuw9",
  "key5": "3PkAGPH16yHTFQ1ovRhhWe5Te1WTizyBtLDSASQZvbtbF8erQVaRcMbTDudPMu8f2M2nFCzApVWZaJReRnwERzDZ",
  "key6": "ciBbi74eXsBqhGAJFmUqYrK5EHQbfPbzf4nC4PhB33mdY9mgMZGQLGkPAefhFaad328G2Nw9kCVnyH6RjbNz2f3",
  "key7": "4FobuvYBjU5PtmoX2AFwiE8rsJCFAnEcLZ8MeZ3AxFhLdJBbGjwsD175qeUD4DgzMb6m4eB1RuZTgQUAnFGw6mje",
  "key8": "3uFj826BJTdr2dUkwAaQ3RPqFPucjzEq5V8WXBgLRfGoSzCgRx9EFfm7u5URq2p9z4Jc8XyR18g2Y74Mfsrmh9Fx",
  "key9": "4d9eaZv9Mbo5mx4hp7oZhU1FD5MayVit5N17wfepjoXnaNWA5QXyVNvwe4H9L985cZkNYBbDr3BNhybdRyyibsNz",
  "key10": "HVSo2i7MWEhXAkZiR1USGVuAAQpkBzujoyMQWHz3YUtmnZ2wLSaPJ2An4nUUxQhP6qGTcHMikdmUv2VTbTLNfWc",
  "key11": "2K8qUBuXq45j7fT6JBima36RsmJe9i1WhEQB6BGKunJvwo1VvFCHfb1JqAyWYkGqrvRyuxqMeKUQWh84LeqE6gbs",
  "key12": "EQie7J9BRAAxT1SHgcHge5kbYnEXRmHjCeWX68FpxEETbta9yka2V3auEzkQu9aBXcNjP6A5dFQax83peSmNnGT",
  "key13": "5PYFVzcJdoRrbYT4Q4fwNQuHsEbktPMJ14ftgP9BuGK1QBW5S8SKwdbBbGo2PcqvFGurHqETohkyaR3ZKnPuqjDK",
  "key14": "65k3w4sfpTCJHrjRR8dExFrRLR9LbVr9nN41QzTMMEXzzm4SZJqkDztQXUU4HQXCbvMMAWqYXiSDVNguk4rBepgP",
  "key15": "27Je9miz1UDrzbVoyNS9fmr3GVsUm3acXvrRELbAUBpSX1McwJR1cXzWyLsgNm8v8etW7GZRdihsFrnnhj63fwtK",
  "key16": "5v1mHM2ZgAKnvgegzYKsguTYf6763FpJzdL89pekpDxH7pELLQ6Q5qFqGkVCBh7swqTFyBwBpB4Uc3v7WXTtAhej",
  "key17": "iHQFsH3BcabvXgW2qmHnPDTjYEP4FsmEdAXz4n7Jii7YxcXT18Gv41a5vBAJS7fQ4QDh71vM4zJpcSjVoA26sS9",
  "key18": "3Kp4Np3ErnkJErMP7ib4CSoWyq5RgYc5AzzCyRxkyLNGiuqiNShUSdDjSbxzNvNaE4pP9v3LbD8tzqJcq3XorJQ2",
  "key19": "3Di7sDeqjZrAxiNyqKTp9EfDsSSNbMqZLeTwBst63dvcRYVq8QijAHBLmy4x5v1pDqYKH4N8wrRLtutmp5G5jdrr",
  "key20": "5fv2Kbo59ss3n25RqSUhoX7NzMAGphfqNFRbJBNu3Mv9wmjc5W7xyRA9UiXEojmBMGKqoebW8Xf81GtjnLgzZyQr",
  "key21": "4abwhQaFY4WXMrQkEU9giYcJ82dayDs6c33faJnVdqxiUoGSE3WQtDP7pVoNRfvK8DZQgg8vp3hPpk4HzYcngFZC",
  "key22": "37hkKZShoMf8aSkixncsqcwqweguSZgH5NSmqXXJsDtW5uBc8veuJh1H9s8JWGcY9BuA3aJwPWTyvJGvhDNLvsnk",
  "key23": "CETo4acANazCFWk3bgEXuGJxS4dChbqPBQsw7HgCyvySLocg6VVkZiq3eY68Pc2d4o4jjCkPgS2Kj2UjWesR1Yj",
  "key24": "4fYK7VYWVohVJytRUMWLoaf5wYQvF7vbropeyo23656tawqsV7JJSoNG16BLKPThwyL2NM59WAZD9rqwSw6ozSSz",
  "key25": "58HeKcAUEnYZrWTcESmxf3y1hn1EjDzwG4aHGZ1TQE4xVhFizUyc6E12d11F11BPVkW9r83gRHZgG1XN2oiaEkJ1",
  "key26": "5Neaejy1twTLDhmnsjXdZ9JrwDL1JgRHTrrhYsG7g4xCwMmZordudHHbF4udpnKJF54h7heLbGJrgu89aN45DpxW"
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
