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
    "1xYwpr638ofb6E57Awpqx5ec8JfKXFkhdovKrJCotRA7RMfJX9Bv4xQwCnv35JdE3ZV398NVXaiUhG892BsdGWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbobYsRRfM1mTbmAqJCWBxEKPrN9rFFdEy9G4fHz5twoRt2PN5Q9UyWckY9uaAwZcZbpnFhfpvEjycvSZTY58mV",
  "key1": "5fRpXRrasiF2Cx3zaUsM4jvzQDcQrf6xHxyouBDHBYrwEjoaicchQufY7tQCPsnQfnPzpB4Ymcr8sU2SJnV9m2es",
  "key2": "2gcYVtKqpdPLofYohCKCqwGokG8tEyxKFtL6H1f8szwRNnskTz2vUJ3pqjKTPz9hUMJ7hZE95PYW67G1K46rACo5",
  "key3": "4d9tqwfw5cGr8Lk2MG7yDSTewEPrSpzA2dMm8NAnVRENodtAU9nA7SvnV16Y481p2VZWxYbowCkjC3GpLqtQLXWZ",
  "key4": "jaC4FQsvVk6KTQ9ntbcqzEyuz2EXhpfKRFhdvMaYR3v22YpHM925ZbMLSwyiZ3aS5H7WbP4CGrP3rb3RS1stcFD",
  "key5": "3x2zMKxfQvL4MMdvcRSoJFWDFZrVFRAYsaUCrFXa2hP47Kh9P2NZTNVEpZmzaQnt1FZFxJrzwmqapPqmgzH62Yqr",
  "key6": "tNJUTnpRXTPmrkhapgtYQZf3p9UjnHniTsPC3nzLqKPfX1qv4XtB4TrEp6gTPtWxM6fpeCU1wjukegJtaHMeYdw",
  "key7": "64XE5JqZG7JkZL954wtuzY4YteH4arJzZxThkUqS2AjD4W4xtDm3D28dErsR77crujt9wr7YqS6fg6thVVkJ1Yaj",
  "key8": "fELBiJgQ54H8DsKVtUbX3P7PvkLZrtaLZBF4TyJY6nWpWbE6rv3kE8gpyFUm8YSCtKVspR3vd5gVtdvYcnN5A5p",
  "key9": "2eHpGsZhNwMS3fxKLFGAH4G6WUUWg8qnqoBs8Y8wSubD9dWzpGQ2jWYsaabhfba3H7ti8U8n29MvVVFHF57mXkzz",
  "key10": "44JniUe7v5MEGHdoWn2UKP3RsrgaHbVgdTnQVP3Dw7bmT4tWF2ezGTwCrzF4gMYCrUSz5jrTWdWNBGyVfAEg7qRV",
  "key11": "5ixNyR2CDJR3BuTb9NT4NNg9oheXGrfEP5yufuvtQMdG5xLLHgpD4oKnvNNZKcxSTMPDkeaymXv77LXeAC398AxH",
  "key12": "SVUJmbUPcTWXDPTacN1eJbzttXk6XwFj6oGqWC5YgTLu1XMG6qqCpdi2DFKf1GNkKQBVNXfXFwHNAftbwiKcBBe",
  "key13": "4yz8N4GKrsTprvZnk7d3PhM6ktJgQJJswLKzXeZ7E6fEtn9m5SdgPVQDWY81QHv6sznFendU7DRP41YVSjcGKtJh",
  "key14": "2ieRfNwLcdLihCm8wKzWfiAxEwttuT3FHuCLqj3d9ZJVRKPQC8DvsS4MmMjzvxPG5CcdcW336DFnqR3QWgYj2y3q",
  "key15": "5rkPshUwh2x92d6kd6FSMzmSWZmwVVtQXqyCvpMDmApphx2FPW3qmXSmf8YALQUZWsn1DJr25DxGZMWzC8TFUkjV",
  "key16": "2MzMzB2zaCaEu5ezqYFUgVJDMYmP6gJ9vfpVHCi6sLUnvY7eP3euYuo3HD7e9JJuVJPEuVoppjGf9oabnTZDwwUx",
  "key17": "3SaNZifnpspuPkzjMsjuMpsPzh5HSeH3MCUpZCTd5btSQd2zvfbWpcevaHs2BNH5xEJML38d3New2B5LmDSebLqj",
  "key18": "4mqm9ncGVZSj16H5LmfkXyapTA9cNwCXj3DbHwZNFqnF2mXq3EFUpwaXJMB9QBodFeKdcQCbH4vnp6C8EWJiibZT",
  "key19": "2smPe4XBFS6Bjoi8PQpSCNPKQdKSfzNeVd4qULrjxgCLT3n4guw6yZYVpYvWQoTAeExdMcJEnMNEALQtw2wa7Jot",
  "key20": "666Bd6MucwpQV8yYD92myCRuvmDUbyTyhBP9eUGZZ4hQmYUaGZDcTayA786W8jngPcFKgBoesRzvTuya8Sjy6X8F",
  "key21": "5HUv5aNrhTQfre6rv3j6qj7jFkJkpsSDRUVS8v82QxUJW4UpgNbjhibkyGETsq6kymJE3sUkx7u6BV1znjLSbpBG",
  "key22": "2PcUxJpAHEKiNS9pBRqh3Eo6kcCY2MqEC19C1AzL6j1VHn1rwqYP8oBtSs6K7YU4brEQWYAEB1LGYByvGyTJ5MQS",
  "key23": "63wfni9gsbJpu3tKB1RRKQbyfT3zWEGNaZUom1z7DakWr53GLzg1vm8hupnyhRtx8QpCPBGVpjGtLEGPEJnX9p5K",
  "key24": "37jqU45fYXv5jWTmcBqHwcURxQBzaVYNnJJnYhbYiFYoAmaYrxa68spcBPVJhD8iKaUmp7rFn9WD5Mwz47sXLnmw",
  "key25": "5w3ytMv2a2QHrnxxBZvFusPzT3JoBUgqVked3wgT1p5NneD4RnhjmHek4rUJM2KmwFizxKfpJy52EsweDJ7SYLKJ",
  "key26": "3gFbHmSCm6Qdvv1Pe85o6JhxZn6YVR4kyJHjECwKqdG1uBH4w2fvWjbK7x8fn8d5FWNe35tT5nwpASc3wJxLr3M8",
  "key27": "ywv9dFfKnv41c4jTQYY7pqpnknjp1EV3L8DRn6tisUUesGLKkbG9udGdgeSdQikhz6JH2Yc93ck1sQjnF1sA7EG",
  "key28": "geh71taW6ZXkZnP2Yr1AF7YQ9sKszHEz3eVt2sctNQdzz76TWNgQU2s6fYKeWXH17QweM6CLCx5nfa6nLc2p5zk",
  "key29": "3PHxYukAYacmGrBB6gCZZ4w2dq7h2Bj6rVkFqxAMFUd7xKwiJBp5AG35RuZ3X7QxvuKKr5g4N4deKKEM7GbExyBt",
  "key30": "Zo97rMhQquoSUVJZCHBT1aUVPDKh4tYixA6fJQyewmMXGe24s6cHWi7883kNQ2Qq8puWdR1gHWMm1RbEy4wWzUK",
  "key31": "4K6krm9SB94Rgw2eDmUeXkhQzNnZhTPt3NZHqRfEHEMGGQBzpfNi3a2ffV2WW1yn1ZsSVFAW4pKC9cwoDW2Vr5wD",
  "key32": "4TLAAPA2c1wvT5YFujMTiq7QzZyhPamszZtGuGpq7wSB7reyoM8PpcteqQnXqfsFxeQhwViMgL3UvgRH47NfUXPg",
  "key33": "3ehU2uDMWL1rFy3Jh1F4yL7UqEraq9t1D7CbYSffLows1KaekSDb4AGAW3aEQdXrPmET5BYtwJiaBpkeofYn9xuv",
  "key34": "4ri1ZRb2K5SHq3W6qRUzwtTwUuLnAhNovFbJYDXfYtAtivU7erL6unFC6ASLbncmwwqFnPEJeU2gCfhxVun9q5jN",
  "key35": "hR88GKkV4b6wAPyyPaVUBB5RPVRd93HcyToEoaTpPrX2wrArNRKM775na3KXwfJELvfwKS4viGACGfy6U7DoQFy",
  "key36": "3uya3i3UvyaEWKZiD867k3UsVQzd42Qr2X9zP4ezwpMjxemL9BMFVnQxRst5u5FmnoaVmhEeyYjq7U5W2ecjj8EH",
  "key37": "5rrGFXM3bCMYyMkEk3NTEihGdzMpFUVTeXaYd5hCNxqwXXCipBuhrQv5WEL4hb5QXJTU9AZiV7AQPU8QeDCGxVJT",
  "key38": "3GEouNB3MNZ7J1o6vAoe1bqkyYjMoNxhzTXzdvpLMn6BEayg6rqFkmeQhL32zviTNd3h9k9dQfS8RcTGgJWx1DsU",
  "key39": "3eXenAbXMFp3USkmTKCV7uT291K33yxbE1BiPzLnNyxSEMvSYM7QCLgzvhAHb8LeTcdnhPfUyLwWntYUuCN6dzwN",
  "key40": "3ZZ6gP8XtBDpDLKVJGWEPSCFjTmNhpsfPjub4onEJkihxonEQ8SmC3FxprwfA5bmvUxnusHGAojfY8CUc9BseeBy",
  "key41": "4363XBJksHwNmRRZ9bRbiLoDnE34fwBko7bkRXJvksymfyAX9XaAzB2Ls59mLS5gEKEmP5AuKqPMWSuW5eV6fSdf",
  "key42": "2ht8VyeHAAsWbQdzF3DvxZna4UtiWx2QjhR2mNtw8yb8z4Ro1QSnwVnAsmauodUMggiizadRvv1rVhsPSvvq3Pjz",
  "key43": "5yzJXiDKnk5xLzyVn2BrXnB3F3hx28b2Gr3TjN1PajLXARC1ja8so9trZb2R4Q7yESXTtnTXM3jVPKG759NicAeE",
  "key44": "KJgnviUVkFJ5mFwoDd2A5WbFSzYLTF3JeNdH4veaikdS6dRyJPABcjZaBBxLEPNWSFLDzAHZbxuyBwAV4U8vWQS",
  "key45": "3Cp2DRCrbKRNqwMsPGry2GZCC4LmA8cnSvqa7VhtYJKmexout6ebC9u6XVcbb1zn7moKdSD8dKLjwdQAwHd2DfDY",
  "key46": "MfAoN5N7VQm4nzVCRwsTiSBQuSXaEx9NuFptsumk5piUWoWpGMwxKS4HHiVCZUXDpjxRnLyTEW5ds8vavnA5NzB",
  "key47": "4g6LQ7A4UMYmxRHHLt2LwWzfRMS5sk31mN9ajnT7TJ8y8y2WSd5TjtKbQKnPHUFq8oEUB3MneNEfU7QtZb4GGrCH",
  "key48": "5Fk6yz9iF7nfs6zYKfSRBRZ9RfE8irD59tqwZEUa8JnHeMFUwh3Wqebz15wvyx4Rsz2hd1TeeFCMMZ5fKJipBFDV"
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
