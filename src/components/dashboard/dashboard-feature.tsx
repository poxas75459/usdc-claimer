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
    "3Pc4VTFZiDPVjWBcKNiQVoyL9uBmFo2YdTGkUBqxrAJtQSy6bYmRhL4sr81gWLihUDELHnj1pm2rLNrP7DL9RPoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oD2gmALNNZio4rzZu6wPdUxRj1j58Jf3GxUZAo9h2VgG7E7ZLeQG6oVaYQ6c7BsNfsEH3M6y1CLLBXU3qe1vKq6",
  "key1": "2Nr5peXzfJf5mSeyK4AEB6bCZbxz9xian3NopaFvhJ8HT2GkJTMdxwsEGJD713CFdo8BobdgzGAYrFmWDSGDWGi3",
  "key2": "2jkzVrAqdwP2jfGGKVS2ra1VpuzVrjq98rUCRxXsTECjgAjL6NBxhSKBoW1g5KFdDDbHYsVH1aRBsQcYc79UzoDK",
  "key3": "47zEpUrU1EKNwD1ff9ztDG3Ywp42yGyDtUhZ4KgpceEdq4bR89HW4C6f71VhHyiYeJUJyZvC59TPsCcwyD9AdZ83",
  "key4": "2PZUiweMEqJCDDVz5A5t6BMSw5cDsTDZZHgrjvpuLEfXsphVXUvWyWwqEq2gif1n4JTisJdY2wKiAo9hrs4JcwPE",
  "key5": "4oiC59JZh2SqKWowACsdp2fWfwygCXfo5Kb2ySUDac5DjZJPbqn337b2D8n9nNystAwkTR9LQVCnjNAV1HyUsHBJ",
  "key6": "2HzbCyrzbFzpQECUCL2oHA3j59ABEVJXvTkk1FS8LiHawRD2oX3E6TTqzV3e8MwtkMsMeJhAXqE3k7XEixXAiMAY",
  "key7": "354hVZqRA8Gnux5YdvRd3JDALiynMzaLxJ8NwN8EgmjRHahYDGR9GEEgJC8hvezmTaeMPbYyscEpjnJ38qpYrtYa",
  "key8": "4aBPWnZxpo339T2Tfd4HChSiTKgdUKGyRzA4zKfgkPYGkEQDcunN3Ef7NqXtF7Z8uS825cW6qJyWe1YSCcDnBYzb",
  "key9": "byDap1nukykcyy3sGGydmnM9cqzCbXhhLydEYP6ZtGYpeYqSziuxGwQnrKha2co59D9a3r9La41qq9sLaFmQMVs",
  "key10": "2bg5pMddkYfX5PRvGbQzM9ADwE3vFP7Ko9zPRmSXW2kvhn4FuWNo5mGadjraP5QwqpwULM8Mg8HHrLde53an3ii5",
  "key11": "3Lf7R7EXwYWyUwDd5UUaCqtijihZ3zQ8qcXm84CEkRotYaXpTS6KYnzWk8PDgf3rm9hpCcpLSajXkB6hWRZLATEV",
  "key12": "3LWEuAQtrjB2FpGq5wrUcAT9irn4KyhKm2MNGkBYQK49DmicoyNVyMR8emcC1vj85Wfaga5TQFq2Q6p8vQMaGqdH",
  "key13": "4SCNVWn9S17DUdqKh7RvVhoR6Vv72AeCeTEMv6orf6qcLr56kyqLh8tYxMFJ9v58eeZWGtt3xCZDLgRqkb3kC9XU",
  "key14": "2do8YFrMXZTNFsqe4e4qN665bn2fjaCNvWvmZqQFw4UHGCc6n6XknWXbfZ3EVtnTMGXXNdnJHrWH4an8JGYbcXDK",
  "key15": "674JwFrVLSAYqyQ1FHwtYAXPzMg4FuAcYgfHxjTwdrNhBhSmgYP95Z4RhWW5YEpmKawUwdTQAmuXkGZkbFyJTm2H",
  "key16": "kKrFfzFgq1YPmtBM2R9B9GaUtdrm2Z23NDqFAD8VQ51W3cyjMW88RavbJcoxCnZJh1nSaxRovtS9WKXP1ryNrCN",
  "key17": "39wF2jhwGAcsf34PumUqaouZw92rtPAfP8dXAdE9FKYcbF1TuCTCnLgxfgcWgM63c4N1kU7DgEQ4ZGEFsc9dXcfu",
  "key18": "YQp4PKJoJPstgT1eKEUvSED4roHbvJvYk38E4rW5exunRtff1ZNBsgb1hn1btrAxRxCT2S53X98qpfyk6kWJK4y",
  "key19": "31sAP2AQSuKGsjXwVAwsDRadrbmzDUds3Um3V4MGidrnPAeeLJaQEbaz1qEdS7FxdMpQ6ruD4PwDEDi8odrryQ6a",
  "key20": "4oyRHCftj3NLZasxGDxGgw1T7QNgubzYiSaNsrFQRvrAw1BNSwUPVLexZBszKmDWdZjeAbRabKKSDKPFpE3TVVtD",
  "key21": "3HvWeFHuiSchmNhwdhuUF9zsJm6bXFU2bocsnrMj7WPkRtt2AT5svUv5DG6N2cjpaxV2FNKoEq36qow6DtnEn3hP",
  "key22": "55fELSuaHJ4PsvgpfUspieDqqtMB7TmKV5xLuDnjaetdEh1GurziixKRr1eYoMCNswJzjeJ3EY8aobG2YuLj3aaF",
  "key23": "4xPCGS6bkjUFL69mgdaphA5yne91tB4a4T4p3vz3WtzgR6pNxwrehdv19QAP1CT4qn3xGVqMrUjCYEFBRZmitTxv",
  "key24": "5FmpPP6WJaTQ5awNms2C229CXKqgXmtjsstBqf8ZMJchrrdzh5NY6pZg2mY2cjmnrHqhyYJr7C9sY96Y1orecvNY",
  "key25": "4wJYC95Xb2ZT6iRxWiQ1jU76szMmnybnziaDsa6DFZa8RbivtzZ8pt2WpUykc18CwC36QgJZh8PnQJ5dgLK2Wvrf",
  "key26": "2UNdD5fsAqTBk3dCEPdZKTMESTzE4nDS7bxqDtrHrN5ajYoY3adBoSqWC5d3fyofQ2rji2ostJEUwAwdhkG1vUzV",
  "key27": "29URya5jAiEFZcrpQZAm65caGp1A5fkEk1ESwhH9ihyhyefNtdwhpT2LiqGSNKicpZVKH1zXuVWSGH851k1GBRKo",
  "key28": "3TgupMkzRE4KddkdUNCzLK94B2GxQaNn9q39Cjs6noTunP7YM9cExo83Xg8XNuVPeFSV6sKQUW9rnwg4dKu9DGWQ",
  "key29": "5rTj3ApHi2wfsvGVFMzxsfp9gUQYB8LfBZXiWFopyER9NE4ZTAAZgAzWTEewQNGkgriQM84SCrymxadRVrT3Pi2x",
  "key30": "5HEXPdsyf1QqvcMSLsJoCU7KAzkkmJP6TsckByv4SoBfv2sqpegmz6H5v2MMgnxfMej15k2RPoJhBnjSBqxCUDxD",
  "key31": "5X7bFFXXkb7tTG5epGqEoUj7uAWYWni8TEH6Az1Kp7rGz5PhMfvQ5QmugfJuCGZZSo3vcvTLBWZa4M7mELXeq7Qu",
  "key32": "2svFLqfibafZ3GPWDLngzqs5PQZQapZguZBHZG7K3bHWrrMAMBHH1jBFngGV11nucxwHxCVVrwn53TWVMBZEUQMD",
  "key33": "4pGxjSbMCKTCTih9RbVbWxadD7PQdbaZ64uAKQcHcbxAunWVjSWp6PR82LbJPnWJ9AHoGA2uX1mskZKBUSd7z1VZ",
  "key34": "Xn8TFGTGSo9KrP6Vwsy5f2sTkMjGW2aHneUQU2Yt2yoEdRjGJSkaF5to4Xa7uDPtUFqcaiAJBJd4ruWsvKpavgF"
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
