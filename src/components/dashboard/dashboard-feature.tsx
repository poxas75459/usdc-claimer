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
    "4T6Asx9nxa1dAEEZJ2vGnQdEdMVFmgzExpfge1cJ98E5zgpBGujcc2gU4duH81vtXpZDJyR7Lzw3qNF5ra1VgmQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQCUg1boLh5ieG3NgpRwfQYdWd4uuzvK9WPfmm3dQTnczHu3SmzEc5fbXZTZSjT8ozdxu5eHk4wm8b1sBWpciJ2",
  "key1": "9WjqWKDkfvvian7HKfnWwZsnPKBLeabLch1DfWerktiKrzwYtRn8u3Qy4ns3T4tqfzzyLZ8vTePEVo4gFT4CbZp",
  "key2": "4FpnjSGpCNMMSN7H5TB4cEvVbE8WVyz5rkUQfvfJ3Y78n7z9XD3qNF2pWVouQkxdW3HhkKBFGM9vUxPXkGDRon5B",
  "key3": "2tAHrGSTJDBfybGTMHHUTH7KSvMG9Q2obmMrxLJbg6DDm9nrUZX2q5UVe4otLxQd8ArBmqFh3m11FT7q7i8DAqQj",
  "key4": "4nKNy3DwPFGZWNShXnNg3uRcG7okrxehjvTqCv38WsKsyoCRmhxDKmxNj2Qg5Y1kbLHDXNhAPeE9HbHaCBRPhvgi",
  "key5": "55FY1SYSpqscy1n5fhiHU7vPK9gswGJAz284nxJcRk4qdPjtnktSAXUgqBikENvshr9KsC61PzX2WzJSm7ZqFFXU",
  "key6": "bG11PeWHAsgdfL9APKmbEag9gG7JD9k8g5brrGs1jrayTQppRWdKLyZnydFRigJoiDfp3E5CtCRzsu66bF3J3fL",
  "key7": "4fZN6WMkCWEjy6yZBcvf9mUUYB4JqzicEHFNwc3SnBGr4fq4zACvgD76YQ3KXkTLMVzoN5ozkbA79sM3HJ5KoUiX",
  "key8": "4QmGXJ3LE3nmVDCJrYBx8h7gLPpN5RnF3yQfgPDcC6hNNZhJPXMur4g5PnN1SETwa58ijjaEf8Rz2Rjaeuoz6wcP",
  "key9": "3ex2xi7ybEpNWobctMen8NC2QPkAamenbWm69A7Z3N42woasyodKc8BpkM7uZ7uG5vaoj3LHUU1Lmg28TvH3SXfp",
  "key10": "5SyygU4epncRnEgLD1LEG64BTb8H2j68QW4NpHK3D48s27PFA7k9QU6ERW31uHEcmMB2v4wRXcwg9Lixud5VDiqj",
  "key11": "3J6UdJ6rrfpb5hYc2uT6kzsPmY37eaoVorW92LFriPxkk98NQsNQafFSnM7mVQZiyedxBE2SU5HkPyuF6RKLPEtc",
  "key12": "2wUWiH25SRsXKipWEi7pyjk25t3Pgs222rR3RUq8HA5ydRh84SNv24z3R4ENfRzWV7ua9r6rBRcFSthNfBfyDznd",
  "key13": "2RBffhV42vYeQNAc9PkoakpjyJdgA18B3URcWREuQWEfYN2VfMSfHpWqAgkbZsngnE5nKJy47nQCoF8X8iJkSb4k",
  "key14": "3rjtSMPMMkXNyfrA8u6k7dDzE282R3mskTUp6yucy4PjQpXawX72dPB8GJSbNyyV9HczRuKqY6VRYVac4Q5impU5",
  "key15": "3not54reGWdBuiqYdTK179RjKziinXDVwGQgEhXYndjawxCEn7cesXnciKWEw8R77QKT43PARv7o3j7e1wkb92Ht",
  "key16": "aBmWfYakZEAEcQTCoD3jXp7qxZ2y9RuCdc7x8U37KKavuHkV5VmoEW4KDuqgnshwNebkqxo67AMcVcDXLgkoAdw",
  "key17": "4C2F7aUdrnnU9YXDjb2F8HjNH6HMDffV88cxg3dXFqWJMxr7QksAiGf9zBQDHec6ewgCaG87tMTFLRC3Pub5e6tY",
  "key18": "2gsmXMjW9gXEa7wvYEpSnoYaJ5ZjcVG6E9f7uhfcP3eLtSFJLGFLNqZo4J16DAaWVZTFL2uGkNFzhmLwx3PxmTvE",
  "key19": "3Jv8DwNhuU67HNvfjLWdkmMGid7QkKZB3cbT2yeipTUkAVYWUSvtCpdJSdp5mrkAK3KKL4w5HY6MUWJ9zQKtA5Ad",
  "key20": "49kcFEVf8mtbU7nqyd6nTfZmoT8uqYY1EUtmoAiPacfLEcXgihkcFvpXqsD9pedj3Rk4zmBWbgVAAYVqY3EhReJC",
  "key21": "5ZoASDtTXM9UUBFuwN8KWfArYz3s9SDA11axTqyMFXtxHXFtkxSd7cUaUiWkyrm1mxeHveEFfChNKcnAijx6hqGn",
  "key22": "57BPZSrEREvhCoQqFRuRqpfHeUxKktqSqikgPvNbSW5rXZPF8Jnb3io6Qdng2E66c19tvwQ7xh65RsKYihBZGrsv",
  "key23": "465nAd2GCdqbQFW5PvYeJjM6ECG6da1yp1gFQdrXpq4DLDiU8QsG7zuLhMCA3Dky3LzRsLhNpaVK1f4Wa7Vm3m4N",
  "key24": "37oovEsgdAvpPbv7BMxttXzyPpcEvChEcDVb4uk8evs3P9CtihGRVyvMJoVyjvgqvWPqCTqvg7TRcwaADpjp5cwp",
  "key25": "39p5bsbhW8yHYhaRVqE44zPSUNn6RMHGwrKY9vA7JyYJjfhYByLqiTVBToJb33DE5ChYFFCUh55bpWuCtUQNMVuN",
  "key26": "4ru5adESDJ8HeBqJPwUCrSHfQ2AfpQ5pQcWYaV581sCZJ54RDjK47XqixF5sKwKt65SUav6L9iWFo5VdEXSkxyQT",
  "key27": "3HLP7iFmx9MYaDhFTha1q6vU54rUpZ4SywDB4CwLy59FqpAZmckb9stH8cYsAzMHJHvcRPYBM3aT3yQFvbPgsXbD",
  "key28": "3MtKKWdZTDeLCCkJqzPnd6MX3pLyWhct1Hkw1tTHFmj8bCogH6y5H5i1kKyyfircBQucyu94CEDcvByzRsMVLErj",
  "key29": "5JfcNthockMknGWk6GvJFppFQSvNxKFEwLGF7nufJfBdVKseEDNVYYCDag5dAktdNf56DLMph3L5R2q97SgV8WGK",
  "key30": "4hHVyshYNBKd2vxA8CeKWUt36FkjNxWPMpsJu98ERimXNEYwAikgf2jv7fwHSPgXA4kZQNCcMq62d4QJEmNS4mdw",
  "key31": "2QmFjbXcysvbQCnLmArRJCAJT3o6uUpwubNCQ4eALT362APmbF224cyBshkPXci2EYVs5CjkcDCZmucfh23sviVX",
  "key32": "4A5na55E3C4hGGU5ZNn16Meo8YCRGfiHGu5QKSx9LXiaVitoTdpggU8sdEcckBQBiiKoRZBRGDGzReMdCcFpDDAz"
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
