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
    "55x9CuG5hrnwBXqsX7KNJgxhA5H3piUXRo2Fsviay3TCY9QnWnxoYG37jtDkLsjyamxZaG2agtzM2nKaAc1e7LHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbY51mxgkUzQbQoLyp3VNcH224vcZSkALZa2vhwYp3LyRM7wc2FZu1HCJB877Ns6DH64LAqobSt6paBkrzHhKum",
  "key1": "pF7XXuUhttR43BFXkvfhQwSZmQ78acUb4oKmvaFPmFTbfdWtEGoLSbhDSL38LRkxDQupNo2NWzjbLF3kpfCKkV1",
  "key2": "3kwC4jw3aj4vVkmumVfrqQ9Mj4JnjKasvYZMAJW4eCPZXCL9TjqzGAdngGBrMGHY2NSsyoJvK2hxoq2caWsG1F16",
  "key3": "2A3g9T2D47x7NAsMrd91S1PMKRE7HVTs41Ebqttx5VGh6cPTs5Jfkz8CBf5CE8e9ghG8b1MAmYFei7AgVdGRM6yS",
  "key4": "41vsEGazrYS1YvrEMdAXKG7mfXTJ6FC8NZfvC5Aa49AYQiMkahyB2HfH2huSfP6VBwV7gJEVKqqrQ9h3vWPq9e9B",
  "key5": "329XuyuFvzWCRPK4sLwYgG5ZT7ica1webVd76UToHZ2QZmSzLWJPkMMnQ2TFLvL1SSppbS9RoRrsHx8eqEv7yYfn",
  "key6": "5hSouLWjLyasEd4p18nBtbSh2tLsfVKUGegzEMQwtqJjy3C9AaxDwJGgozCNa29XsXNpRTC2CvjszZteaUcsF2H8",
  "key7": "53hJ2hYrXfLa6g3W4JgFkRdXXptgKv4NGX9cA6LUQHLBeyVpQBzwxZTaJ3nHZbtvvFPRxio9bgJCAktbQ5X5T3cC",
  "key8": "3K96nEgHUFi1g4KvjoKWVajFScZw1gi4FgqrF6HjKVWqiVocwRXN7JiGZHqjaU1PN4kPU5hEMeC8uiWuHxYVBVyc",
  "key9": "3yH49kv3X17b6X3FzLWL13UcdU9E3KZAMBn7De6iN5gJNHN57ChWZEBEevkYMoqcbJmNGdC9PdyqYZbfoigqLwJ7",
  "key10": "LDz5xCz98K2X18oNytiiaiiATcDMDVHvCV9foGG5UB5eYPPKaHQ71CdNWcfyw77FS7h8FiUb1YpV3z8H4fM8zL7",
  "key11": "fM6nqJDSppbXxUUDDhU7opYh61p5qVCzgTZBAqt1yMqSRTNtubQQaHUiE7BNJqpT4EZ54umyB7BZqbWxZfh1ESn",
  "key12": "5JZsQxspvMGK2kpL8NHqvyLaNKCVThJ4GBDGH8QK372DGDerwQYBSZ3PiFF4nYBFPh8AhtzkNzQBHsbttqVzqwxn",
  "key13": "3SgMqUQ8dvHdmX6NJfKH1cgMJGwb62xr7qvN9os3e1hpYUa8JZADGsrArHNqTQANxgyGZmR7PnpavESd1s8zWBm1",
  "key14": "4wpPE9SBE7v4VneyyhgBLUrwF3Qd1NsZXEvAqc2P1gYZZrbaVGcm3TNurhUiR9Q75ct2zcpvo3pqYceD9uf7NmJA",
  "key15": "63xcB29iEX9eo9u8ezYV83T7jtKWhBY6hygsXQYLy5WySDntDrgLwf3KLwrGdmXdL9ds7nLm8DeDxpMYP9Tayox1",
  "key16": "QLHX4RBoY57VX1VrXJWqV5VBSvrFAfkHdJqGavTGZ48fjNBfJTsJij49JPhKkfxTLJodW7cQirXrZUJUXepsiZN",
  "key17": "65r27jPv9dRY1Dsv13Hgu66op9vYbzVTx6nUXuYTegbyRMcT9MyiPCheD2TcALyc68oix4dohhAkeCpyaaN7xXnk",
  "key18": "5okMVGLP4JVhAf28k3nda7h8ruT5R2wN4YNY2vbk8hQymVkv3xvkMkLPvVbTintLWbBg4TzbTCBrg1hgUZVytFqC",
  "key19": "52DWCxZkKHN5tatgjTJpZyg8niWAowTpFNR4wweBp9of6dikscmxdsLuUgVjaZd7sE4KEgZsPyoMPhNjiNz45Srd",
  "key20": "5cU88BpGHoTmhkD2SRfYSw5JDLQzqxwHMCirpKZDdh188M7fkS293UE3PgXzgXshJP6585TM6E7h9WaUdJ8j3LYW",
  "key21": "43RoiAyRwgVsvbhKRuzaDaxcMp9e9Mn5cLNzxusBS75ReryE6rNm6bWkE8eJxTMFi55G8EEGQXYvwsv4aZMRAYgb",
  "key22": "kNRD6LxSFesC9xf8R9dvGHXqsqNGAnJXGn8PxjkPgk7Ru3aPLLNgqf5jt2Ed14JGofVw8hxEmvQHoT1JKy8M8Pj",
  "key23": "3gw81QJMAo6dom1eTsyvwZBXsbpyGLQK6iLvKLwd6rQ8nkVUb12XygnvJPHPy2MFogN7LEXM62dnMM3bJLVw6y8w",
  "key24": "3NTS2zx54KJnfosgXP3T5vWbkTN9UfVf1Atgebi4P7kgzSi9Jj4HUdAZTQSBqyTgv6Xt4t1Xz5kWevfLEY4F1r3o",
  "key25": "2WPvdjXbCoYWoeDdv9QgLoN1NofDtsMqa5Rrz1RvfYKqiQ8tRf8bFUP65dLGUMkkQ3RHRkBsjgjkLefyUSDEyj7M",
  "key26": "58iyfApZgdfRAiHzza9RFkMPwFfXQgicrJFt5c2JYcAYPC15Az5RTE3j3KdcrPrfJXjgdPFwRd5aHBs9rXQGMv7G",
  "key27": "WhvJ95jygZAyuEZvi1UkEcdgEK2WBSdcK4ZpvoLofbdqJ4Mga5KN8m7QqRF7ydPmfaAm4b5T3hXF82KtV2eFbjv",
  "key28": "3qC9Xemn4vzNBogjEMgRiPSRGVbSpgNG4GhwAu2TzjksYFHGo4NXchj3Det6UwD6BWBRD7fYiHYVfZmYh4qw6iAf",
  "key29": "5SvpoGH8DiWps9dqdD8coYAYtTdr9HtPXahE4TcfrZKVRWPVqBGxixGE2LdeXn14F9N2bGmZ72AkEDMkn9v9X9Zi",
  "key30": "63Kz74vNtU3ac8GCUWSyaUS98pDXba8QV6anGxAGzNpEnLPAgpmWRwFW5XJ68Uy6YKMJAbNVtmJrEidmguDzroKE",
  "key31": "47vcW5vZQ4vodmghhzjU1e4oVNEHRQPMXffUspiwSQahsb8trgs31YF2RicxcA8NTmh8PGnemDmzAsyP2oJmwGrn",
  "key32": "5vWxUXk4wAzbPHo3UYaruuLWB4xLkWLsyCeome7TrtycdvE7bWAN52C9b5zKXq9jXTqC34aJ3eg5iUe47gh5UkQd",
  "key33": "DX8PhRB1ZWzpxRYbwku8PnERZ6okGQqrADamcmrr7sw3j2ajayEAfbTAnmrRA1SEDMWqNavEBSyvYTyGPtCRBo7",
  "key34": "3juYYaj6GuiMeSE8aQm1v9KtHokow3zsoq3v3JiBjsi6qHPizw3KEXxEBrjUubfMJ15q2h5idGWhyh434ZWNBW7z",
  "key35": "4M5hRVmLsDRymJL2RpLyJWUvoGa3UPVTETk7qEDFVxFsJDTbXpPRHLeRV8a895PRC22KFX16nG1XVpivso6HjVVD",
  "key36": "wN1mo11ZjjxRbvrabJyvrQXx8EitmTszuMJHw1HWGTo9vXKzk2M4Ya1gHBKPbnsEBoBSaASmgAdH1ZyZqLzyFjT",
  "key37": "3GsnPH2SYwqRDdLSqVZ3qfkoRuEyqMJkSPw48peQyqmGkFQTiKpVXYMwekeevoRNvkn4R4aWXboej5ASN9DfC15C",
  "key38": "2t1fHMTNUH8fr5PUoB3FgWb3HaLpHYzVnvb8zKcz9TG3nMHz4kotZQadey6Eaq6ozdEbqLyxHyRnHWrsvaW3o452",
  "key39": "2F6yNrrSFHrvgViQkPKfCUkJioDszbEyFQKfy7Dpx6oRFDVSzFdymgVQKzK6z1nrxy5SP8heFFwJqw8BC21DLE3Q",
  "key40": "4UTerhTdneA6WaKg8HK4wA9VX472Hd8fDNjnKdhQovWRgo342hSFWTH2gLdmTDThR5HPqfNxFyRjmPj3Uc1Z7ZoP",
  "key41": "54gZmAdRN9d7VFJuUPYVY6WHp1Zr8ciVN4oXibRagrvhTP1X1cdtH5UhGQvFXaQMx6trUa2P5YdmSU7rrgC37aaf",
  "key42": "23t9Kms3n2A39cpL4bBB8A9Hqj7X8kqUwJgEUXRD6W6wb7yt4bMLSjN692Kk6Xv3anXqmzS2j3LfFR2sDmSoRwFt",
  "key43": "onHstUV8e9mVbMLMbWqRvpV5cuWQoD1zk3hyC22rZGsqQ49jjz4QR8CdqBWFnuqpk13iaumWFwHGF1BcqzG63dw",
  "key44": "2BisMpcLqsPRPPh6C6y1wvZEtx5GqViYAV7K1NCrarV8o1qiyAcuB1h5wjubzZVhZSoH3eCUbhrRTw9B2u7N2Mr1",
  "key45": "54qFLucFbH8C4erjxvir2yYiBDYpRU9mfKtLG9RbLQYaxmN9B1Ub9yUyaJKeVBTHVJEjaFAaTj3x52X9hQMHsukb",
  "key46": "4FYUmWQBTrbTo47yhCW4oZWFP9gHT6CTMzZ8VwpUDfPFsAfBQb3yFHuzNDTFzLzfDwpkefzzajPQ5J9WHXQfk8UE"
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
