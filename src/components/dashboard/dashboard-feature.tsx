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
    "4xCCvcuyu8Etv9c3iQp54tvgopMLiyKqtyY28DicXqJbNZaFs6WsG4hH1uTEWJLuew9YojAd1ocGakNebp5324gL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mL2oodowDh27RMYZwCgYdpWpr8MqGhRaDRjQLvqhrANE6JDp7u1qe3h9B8R9ud2YBcTTZvDNnUJ9k9wHFEcKwBK",
  "key1": "4thXoeSwWAqQ8CvWFmvbndc9hqZR8Vf4RBUbDiioaxxY8E3EfAdVJQR59Pzdjg5mJsiimcnA5oVEWbm9uy1daWFM",
  "key2": "3yJbGcuwjWjTS6MZ4xzJBdDBus8LW7c2jKbkTB5yECaWTPpwAYqqv9TKjNr5qKvfcnNHcBSiUFgi1rqJLhYtsGQY",
  "key3": "4dcDCA9eFVE8Ze5zMA7SJfVDZ4K1zCTFnM7fCPk9YTBLcVoTWTTtUXQCa7TS2TUo175PsaVb1akrSSvYw8fZ2AoW",
  "key4": "5m5J3t5GFuoYQHtYKxPAyb9SQBdviX2VMUZiYpMa8Fdb3LbDpuyAvTBEM3Y7vSGmhqG676eKpMG67hhtRx2Pv9BH",
  "key5": "38g4fAbG7KTzky9n2yC54iqV8m5qgPCARzEvmhYewK94e42YhjE87jrPvgPicLoSwFeyvyD3Y5KDk7dXroguns6G",
  "key6": "Ykt1HyrqYmjDpxXCiahDCyH7w4DVNKTyDVZJcnr6n9EMxUTUXJzfkNWz2a1UpYi2tPz51hwRnx3JFBzfCH86nfq",
  "key7": "KVZNLEb1K2XhCwv6UTTL1hATs2uPb3jC49DWnjqKkJUssRWB1TN29HT9zfYdtZE2J5fapGrW6dy8eUTZLGMwm9P",
  "key8": "qaRe2YVDx1pXmo3UyVp1rTBRxVYUC6Hgs2KqVooFZhqsqpRQXbRXSp1PReVeVa85jAhTzbVfnr29p7q62ig9Tkx",
  "key9": "4QqD2yWGz8hiz1McRMxSh2xJcoRzpJ2aRfj9NSqQZXnQaGiJ6JaS8mCgMVdhZMn6mf2KqEDQvRg9rqEdppYsoSTC",
  "key10": "2TcSBXZhJDWjFtq3uFi2DrUJUj4Eam3Z6rz6MiuEJwLzvVBvX26sYW8YTwuB5otQ44eY31SeUAqghhEGwobXjnq7",
  "key11": "5Lvo3dtYa9mJr4obCaaDP35dVSHGheSf7EWqob8DXY9G8tWxTR6KpCEeH6VFwgczivHh3Z4t7qQPfGAm2DujvAFR",
  "key12": "2TDwCqFRxuFEQ99CFxYV3RMhitnLjnYbkyL5tuR8iLwKCD99nufJDyy2GGuYNv1ugRRLFkEhQuEkXbLC7KXbLVuT",
  "key13": "29qXBzD4Gg3p5V9t9AUfo2nF9Qj3gpih7x4WuYE6cVMpVRpeVjZ4eVihy6Wny8kaj4x9thLRD4d8q7gnQszgViFu",
  "key14": "4PikeVZqxjJWexCidyUYT6V3mFYsCsYRANNNPQVacQVdCuUvr4F2vGj6oBN6et8bsMmzduc7gxNSjATQ9aXr46Zp",
  "key15": "3UzK1GKQFrwY6Eqq3EoMHkCFnmcLEj2vE4KLN6uws2Lc6fBpaaDivApAaijjrS5ArxF6qKGkHAF8i9EP1Cm4mEHc",
  "key16": "4QqWserexfcrX9S1g9b8oMfaxfjXEL6nXti2X1eUQyKFRZeWfCNMySXm7e55PSEPrUswS83y3oWUrGDzfkWRhxK5",
  "key17": "5gbQkkpqQ2YJgRvXHbX82VePeai9HRWQT9ccj3hSjKy3EwjaPLeAyW8h9s7ruLoJoGTghCpSQDQTpST7HJFei7Cp",
  "key18": "SkDZYAZJuivxR1pjHbRAZ8kgAejnpnjss7oDnCKCAeaKaA3pHTMHdMV7ddqGJvrYWdF9BasgioyCNhqsNtzrpih",
  "key19": "fa7RX7FVWJ7zky477B8FmgQ5yTShz8AAAJd83Xu3NTUxf4wsip5BJUcfunc6QPJ1Dj3DKv35ytFUPk3zVirvj6J",
  "key20": "3LFEy94rXQMpgWCFBuZSzGkAk7pPG5WdtV2SVQ7xdtJ6tvrucVSbxxfHMmpZWXNj2KjP4sTEC1GUa25RhAdvgD8r",
  "key21": "o3s5XTWYsh6PQkKJJhHnEdD8GAnQU2xhmTRwDvaKvTFdYdSdcW6UzpvKqf8TvNdyPvCViuYQdpVC6p8Xn5kqB3m",
  "key22": "5N1ht7Tu5zyf1t6ZP4oiyZTkVUqfxfRiN4g5aeTaPU6JZGfhemdUeE197KVuk79Sqg6yV5VxvyHF7LmtQTVFfiRj",
  "key23": "4GzH7LuV3FYoj4f9zDpoN9ZkBzYnTTkrHtUYdFgXDmxXDWZ4pgtxVtfSbK7RfdDgoMCkFQcAEwXPhuc7RKjYN2WK",
  "key24": "3joGmL1qb8LsPGFMLyGVLEY1dWvdAo9PTk1vrsmRoUaAwSSGmpJATEKMPL9etJ1KS4SLeAU2hbihpHMBArGJKCXA",
  "key25": "4VrVkgsAZwAbUQoGuPHRoQmbi1d3nqfn9TVynoLYX4NvRqW4BHcMbcfd4oxpsYn4NZFXJBAFbVG7FcWaGqLZkFdf",
  "key26": "53rn7RZ1JvamvyzYjZjSjtCAwY1fZbyhJzZD24fXZkKA17azrAntxZnisXRzns1pt19EH36tfhpAFQhzvgkjCSZq",
  "key27": "5j2vR3UhYB5KendmaYfJ99qJA6hW5k1M23oukkNK5yap4a6s5MaznKceVrLdF6mJUBsUsjq1kDPjsXKSwjkuCtx9"
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
