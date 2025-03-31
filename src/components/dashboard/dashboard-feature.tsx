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
    "5BVH6rdK3GbCPTiQnQDGQjk4aXAnceAMb3GRgGohasAXocnoGKo4EWCPmbTfNzGmd7mzqU9V7hkB95d9nKah5Cfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikjCYL4RSc91tbAsEfRxS1o44uXBwt6kA1ib1JpCvry3VkZDksbPnyJJTCNfZrQeNzhxFqt8QuZALQFKxnooc1L",
  "key1": "527ipatLbVDiuQ2C8xym5o3k1s26VNDpFEHrZPcNMFYYmbqp64Z3Wk8dTWBdyePKSVTwr7Cm3pKcFnDK2YTh2PQV",
  "key2": "ocWUToep4wQwjQavKLQrgRLX3Y1f5e5EH6EfJj1hCNjidYuGNJxJZJenkdioCxiRPCd7DMSdSb78ytLyg9jfyyG",
  "key3": "5n7yJVs34xCXDL6P83r1j937humLY7PEjQKPWtz3BaeTk55DQUe7zwLWEYnrnkaTaXB5VUsaDCgcAMTxMfbL7W73",
  "key4": "ktETf3Yw68dxUg2Grs2S8KEwNAN7ZTnskXgo7yDX8oZxKZsuxh2k81QsHZR65U6C9GN23vZ72v7hnRBn4HuGNEy",
  "key5": "37TWcGidv4RXzLeSeiZWdjNEr9WED5PWB2jxt1dukZwfdP1eHdUk1ucTcjXUdg5RGiYS8b7thAeFcWpJ4bWxuyqj",
  "key6": "cTrskFXG15fKJLRpCuFNF5Kro1cVKkYJ5zmmBUuRKPsFQdrPx52DVcNLbyjc8qZLvxJV3goNfvoE9y9koMabzTu",
  "key7": "4gp5nVFu7hT8NzvCSQtD1UL9qbbo46CerVW9ux4Jbnq4MK24h43Npwfi8dNsY3ox3aa7MeXRi4EKwxT2NR1MsmzX",
  "key8": "2uvbJomnWgWSJZx6TFpvbPjpHGbEZDvGxAaiUKVqoqKCsRTp4Vdf5VfJyAZ9MXioeHhKnCtBbYzu5yR2Axy2yFpA",
  "key9": "65KL4MTzmjSnx4f5HCDfG4fQNE5k9SoVTFQ1M8LaHzxSUATRS2ZbyhCtFsEtpmk5Jz3aXUfiWfVzNEduw6A4QQPZ",
  "key10": "4ehKJ79DzNN4766YnXxDx6WoBUPhx6pqfycWHyzQhymcuNiyhXXtdCrzHPvGskZhP7b3nLjkpgiecXK4tZjsjBBx",
  "key11": "5HKg7pUkmkC2euUFiQTo7MUS5um2qUeJ9DbXYVgd5txvfmMrk4kxWVwC2ZbKcfJ82GMAPrDMX3zb6n3MmT4dKKdu",
  "key12": "2M7CRvc3qVfoz3dCN52dM4vPvMUYDfiUGvx6VYTpArvz3oc53We6qaBNe1WY9nvHuBr9apQ5GBrLyiv8xNQN7oTT",
  "key13": "3MFMuo56Kserp7gydTt89aW1e3jJqVqjpCToRfFv8CeLhXV58JcsygxvSRRzrQfg9J8awQ6ZZKR37MD7tXKgfrp1",
  "key14": "TujpUkuw8dzVzqPBpib1B3Z7Tm49rxapWtJESrugquT95VB9J53y8yTcoFAdgtsyCYuM9sHuBhWspvzxBzw8ypF",
  "key15": "3yaejD4T3fJY2BM9YR3Z2HNbjHgz9GxdFthm2Uj3aPn3s1t9LpvfhxiD3dfZA4j2icGZK2YQWM2qzUaE254Vqzey",
  "key16": "RcDPEG5nLXaRjNd3aEBzS2fRxmhvoMELVaV7oysMhWUsTTPjSM3vJ2H1w6jd2JbEewBG64U3j5K3gi75co9BGQq",
  "key17": "5cgSoZ9TenE9xGcgMMq47gDTTD3Ji27cgoAdxvyPkTt6UDV3FRz47YQb8iMnx6fuAjNFSFjWRyefWvm3Bz26sc8a",
  "key18": "Y6ASiP33XuSUS3h1iKSWBTTpyNRRvqH96XYwtZhw32pMy7FwzgZGcarwCfRhjwbgDMufNYB2uC7PjQURGFQQMtn",
  "key19": "4fL4bjpV44kPSTW5DoR963x2UbDfnymDdEvBy8QSooSZhsKM866PBP18jWv4B9qw6AmYQaMNX1njMeV41k5Y1Xvx",
  "key20": "529TqjeVgQac7Bcq44ZyTBGXiuvMj33wEoPL3AEiCUjJQwGrFKvxgVAah1UoZW5SZVTxTmqpUiLZvsEna92Wsxfx",
  "key21": "42gJDP27gd67cD9QpLwsvPguNXJbQELffsJX5yBEpChMvQmwvhSowKRodLiy3zYGp2uLc33snCCFL5YtkL43ELfu",
  "key22": "3gmwatH6D5UvXZfAxD9miw9Dm3KwtLHVKJGksY2zqZKSbnEj4DYTKjjYMZBHGFM6Kbr2D86PHiSGbnDx6eLBSsij",
  "key23": "5zNYTymusHEiFaqjCjtB555gQdvpSvCC8nQvsb9H26gUYuCb64EcZtfrDzSieJQ4hiBztw1WTr7geohwtLDFYXRS",
  "key24": "2Y7ztgrzFjoXu1fwDTFZGamtxqdvtW6QhS7Boo135ZMTy9PgV9nrNVSRRXamMT5BV2C4dWoK9cjxeE5eNujDKvJY",
  "key25": "53jViLDQ9U4meyKajBW8St4Kdtw97MX64atNWD3jNqTUWb1zADGuzJQEC8715F6Z1HEzrhMUbadAv5GmCV57wNYc",
  "key26": "52w3vkF3aJYbHWFPZsDBEfmhNhNjxSyZJBBVUZHyLinrUjofjJBUU4iBjqktRGf162iqY9iuvF9CVV3XDpSZqeej",
  "key27": "dXjj6uU3PVgHYkkmPopGCz3J7rUevS5iakn4pmK67Qt4LWTRJzXvi9Hn7coFgegL7sdyhLymavqib4cxYCFPKNs",
  "key28": "am9BBCED9xs3DDsn9nU3LFVfoXuYYtj9amawUsZw4KR15kEpZ61c8opEH2QJdQ5gvqFjXdtpxLXPavMKWBSCrcr",
  "key29": "3CVNpvo9m1dJ4hmykhBZsYkEJi1xWjPjWRSCpduf2LBVVnnk9J7MwEBc8FegnHutfq9JxJFJNby6mdEw32Uhm97s",
  "key30": "5t3eFYJaJ9fQhMhPrWwFqePdSEqMVoQuA4founNTVdApHZkSK4mANWtp7N88MTTpLEcFU96JC5bu7NgfZAJeBF9S"
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
