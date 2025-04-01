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
    "71yB4G6JRGRipHtDspSyf6Yhuhdojpk1Tw1eRyzZaanLoKNSbhiLjpHLdQaxzLnPdA2JL2bAVAVctZgusoGANRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aysc8Ck9cYF5BVeyoanJ8XMFXGCTcv7P37M3AkkSKHpGnqNDGUPEi5C6WaUixJMMkLiesJvUgDfT95bSTkSCuWj",
  "key1": "5P92PF74Lg2LF5vSUduhD9Tzhpwg8r7KGnR8kFvT9KF7oHoj38vr6U85qABVXHnQu1gpFKVGfkWUuNqgL85JApAc",
  "key2": "4DQUYp1SWFvdPe1heq9jefYdFUAszXhVYUq7ZMv4fN7e7YeM1mz5Kx9DQBDTDjg2mn4RXGkUf8CxP3EMmFSsQLRw",
  "key3": "5xxA1a21ZK5JYAH4BqYtwz4RJe563dk2gEeGj5xzT9ZJmo69yVZrzqm6mFg3kQjEidhY2qE53sKxr1vDKqpNMYCh",
  "key4": "5jMz6W1LCiBNRLTLLty32Um9e7kWD93PiikH5qHALa9JMzC9AKqpa7A1Ax1Fb7DQ3jqWubi9PbqqWCug9CMX6Dbk",
  "key5": "5dydwoGRVR3ssS1RwAyhjEkS8y5fGA3t3SymWKUUawX5JJZmH6Thybc8AWKbHWEiRPToVLHpSwim6py5n1PGJPUs",
  "key6": "bdJsMyioAGR55BgQ8bd9KQVoWmCt1iVp29uXcqPnfFw7fZjTuF5xtocazuv5sy9ErVpU7rNdAECgUn2mSqdKk45",
  "key7": "4c52DVTcgbDGGS3Pj5nXgRgi8D3ANCwk3BLkF4QYExWWeAKTgtGDRYZH5PrkuuwKumGex2rFzqWeBfeosc7seZCb",
  "key8": "2rxK9N4psQ2TmXYuUVrVf2h6pkP3Vybo574twAWmJNXADYWANSWh8w6WCa5UhkyNLyLEbKZ83qxpu519Pyj3QP8x",
  "key9": "4Ap2qr8yysGGcTbYrBuho1PVBS7Nib3aNvoRkLZr6qWarMcWQ2m91y1wMZCuPcKFx6Km6Q96LNoB1vQZQN1jpr8D",
  "key10": "35LmzU7ewzuNbBHvubh51QkLFxh3Y2JBAQLhDc9gt1Y73P3W4q5EJG7oTqzdzYaG4zzSRXR5KtnfcnHSQfEw7Ubq",
  "key11": "65DQXstoT2sbJNFZ8ouwbtgMDJs7j4pByHTwY9XbksJM4iLRpyqJj5XDoqM27a57SdE6U2EZwE7hFjfRtyRGH4KA",
  "key12": "3dZX1w4NJgRX3j1o5RzZqnyo3e6F8yxyUd2DBJqJTmGXfMDAPFK5YwtdQiUfiGb1ao8YmKhcRcZgCV5e5Q1iQsBc",
  "key13": "A1H5FGDpGJxCYcKg7chqubbmeKJYCsm2bjnSu4Ggr8YDY1zYQ9TMzJNLyCL4PXvBoTBZAkPD1UWB1fb9h2DzY2q",
  "key14": "3FaFABZW9HF1Pk5b9bTn2qV7evR1wyck5t31PvYggvoxTpZwkVdrSot2wDZBZjCtsxz8VZAF9uHN8bxjsueRy5to",
  "key15": "ZXcJtZxNskB3v1jzLmws9n3gvJL2r4nEofV64SNxxCreVPyrWJeh8wUZnrhLoY7CYcPdsdJWvinspLdKMF37pfJ",
  "key16": "2z2zefibLUTyMV5ZYmXKwAQuqzVKKFETSaFbFi7nLzA78FCe522teKSSiWgN4mLFRz4cud75YYHQ53S4Maxe3VyM",
  "key17": "4sfmpbvAE1KUYyqVe5WCZqomGBkJY4CrUSw2jMmwPjd2WtK5JRrsXcSLgSAyqK8pqdT4zaDekyB4UXn7mcs7xrY",
  "key18": "66zJEE3SuHe6zzz8ZPPATn5tCNJHdZuHX935558NAHPKvDKZYrC9nP2mr2wCFWFncSGFHp8KwhAck3dJxwtuVKfm",
  "key19": "3HXNs2cip5dbP6KR2gVPpGYEzNfuBcAZ72Z58mbRqSHpJzg1J4PzmmDAuWwKuCKbxXXgRnNbAH53EWoWHY3No7mT",
  "key20": "4VzHMYhZfNsG5UdeuopEm8CLfarHtWMP7GQdEuxEwgyair9avrRCcZmeyFWRyKJg1JeSJPK117ekVNmJKxfdPjoT",
  "key21": "3EKR9rj3z9dbbVxy6yd4uJeKXHRm4HFxEXsnRq89zwbJ7YMvm7gfPW4KZTq6cgLRkYFaEH487Ro4DS4RUg8PwDDZ",
  "key22": "51F9aRzvJodnfwsCoMPXSxZ7jZPbMNoZmWMRi4EXNHQ4E67WkBMKgcFqtVEUiUzAkNfCEN4FdbfENLqa4emRWC89",
  "key23": "4nE9ErjgxaJNehPPXQ8tvo4G5GmyM9pEfo3jMmVJfrVhwAifBSYHynUeUG88h8oJQBstbXyZdrdm8RqS267kv8qC",
  "key24": "2mvQTbuJhsB7esy8ehnnEhb4EaEcUR5AnEppYA18wC6vuCt4Ymyv9Ao14dM81TyiUtjrDjBDtCZQHVfR92YqVR6N",
  "key25": "eBUKXnZBxhXrErMT4Ec4R36PZksWiDu8khqBnUcDKdtPp5RrTFyLHutcYsNZYv22uGf5Ljnxzo7VMqa7BTnfRgU",
  "key26": "NuwN4zxFHNKyMRiQArR6ok4Leu3xdnFqSdzPLLoGikpfSyh5bvb4rz77he6PEK6EMzYdedHGCqfBBUbHWniTW83",
  "key27": "4GUDkmqzXVLiKhBDEzkEWg9UUqv5VmTErjAWVzwFsKBqmwgeCY5tfy7L5h4N4vDgVdy6rM42WwH7kVWnLSm9FB44",
  "key28": "3ZB7JCJrRKWcaQRntyuPs5kaB7mUBoqyGbdeqTvjXDKNh2HJ88j5UMaFedtKNT1RfovQAY7CJ6UhfBk7FFU9PMkk",
  "key29": "2mrPsdwP1gBnPb5hTL92HqQ5xymj7gyxHUcekViWAXnrh2RsihMeCKhACJucJbycM55HJYyku7Lr2Gr9YdUxbBHB",
  "key30": "5Q4uC8gJGGYkj6yWXhQbemjcapXrbAHkrrtM1SD99CrroFqbfEiSSzkBGA2vcLaaL2EHnTxBAQttZzZpHhvpg2F5",
  "key31": "2k5LaQx4kt5fXsrX9PNfDPHj7TGkUj8PcSjEA9TKhdNv4P7c2qcsVpSQUtMS2iYbDymjKX3Mx1sbLXmrL9ceJYfM",
  "key32": "2cokaUR83Xc93dA3U8eqgVmUjd8oLJe9VuGcfEMFEY3KUYAWUa19WoVQVocFkkRS6ULQn1XQT5aNZxhdSwmHVnDw",
  "key33": "MhoQi2SdyoPAwqSmcA7E3T7q6vZBXRCntx9hb73mW7398vm1wKhabsxsGWGbAximq4sakJgGHiLsWjbMdCP7x8s",
  "key34": "3tP5Fqs7fS3wSYRaKuKLNUtswCXs4YatsdJqkWrQZjZLcDUfp3w8Eepg5pZQYkHL2qKVt5qZNLGdcV37fjUTzC5V"
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
