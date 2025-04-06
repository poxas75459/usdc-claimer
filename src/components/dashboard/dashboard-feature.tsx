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
    "2X7qEuSKzE6EDJgnnERfaiekri1wgrSGQVK44p8KorfrWr4YEk1ugQHG3aPeeW6LfqJUWdpaQpZZJaLjsJmzSYTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjXvMSZu9zT2CMfrLTU4JasQwg886q7ghej3HiVaWo6j7jsQnvu54bSdUrS9eun9cVQJFVtjLqi6VtaQL5WFe99",
  "key1": "53bp7swsiNRchoneHD5CPpGDLvjYz3oszNiM1wovGM71WEEPsA74cCZVKVNuMu4AmyCzHc4oH4pfbaobMHGYLLmz",
  "key2": "gmUJzVhE6n1sz5aSQSCzFv3iYPpvvkMPB6jizojCNHVS5hdKPxMqmZAFYuQGtYvqKkNV3fDoTW75MbjJq6XuQJd",
  "key3": "44V6RMGWxTbWtzyfNwkz8yoSFZg4jcW6iy6dniPHBvby4eiMnH38BSf47pKb3aJyYhmGVPihF7TQzzpwAKbheGxf",
  "key4": "4sDLuKmerNmqAWdLVxbc8sbqqeEuMaTSxwG77cq5Jb4CF75mjok8aRjDeivaZemtrmc3qA6pbWJT7rhTMhKqEbQZ",
  "key5": "4jqxwhfLrbkcQir8t4mFbQMUUAeaA1zssWSdZH2VdYZcJ2Yvxao3yf9NBQPgWdZ2NRcfbS1GY6X9bvZmyyHpw5sU",
  "key6": "2fKNUqYctnVU8Hv6foi9rTanwdDcrZuY8nQeMvtX5jEnpDKg45hxjJ4YiXNHZJaQWjH6t2T45ESPHKdnjrVPSHuW",
  "key7": "58zMxCSQ2WNYvh66nqKntU4qRcxpt7tNofDLYR4a7jzBJtP1mueRgtzd2p4nsJJN4QvT26MLJsouGM4j34TGBxTd",
  "key8": "4WVzBpS34jjXByxC1vC2V6ZdATRcQMhkBfS6ZoSBLaxZn2mLC2Daqz72FB2MWn1KP2HL6p9884wAnuRPAVqbM8aR",
  "key9": "2EtFEpPBTfXKLi4CLSZVSrkX1MUEUpbeXgLh8PKP8B3F11wCyCwp5aaQQttBTp7jimAek9CB22L1gtxtdPvjHr2K",
  "key10": "4LsCpkuGqYkzDHXgh7PMFAjQoqyw4zVBhyTRr8KaDWCoSFzWsxVhpR8fhTBjN6SmYuy19bPT9MASzwXm6e41UKLD",
  "key11": "AWiN2451m1y7suQZLbmETAxJRKUhmJcomzT5rgFN6bcP2ikFh1pSnJNqjaWvAUHbp3s6gS1WvRmEN4tphaVBpWK",
  "key12": "22g8pAvtEx3peVrAbe8DZ5vCDUo4wU1XANTdGr6vBt4LAZWLcYup1hChJV5fXwV9eov22qtQiCGJmuc1X5Guwtxa",
  "key13": "3duevYLTLxjGtWWFXb9QGG3yjenGTSVbN1nkau9nZgsyoTeHaFvsNUi2JoJjdU7ikc41D82zkLqoEMnydem7A7XV",
  "key14": "dFjKEnHgubGLpAH7JHVTaj7Ghjk1Ms96icqamVFKwuTbH8hwJC8P2im5Y4tiqbaQExY7YA4PeRJY3uT5G9NLyg5",
  "key15": "DUtymyFUrrFiBNsjJAFXGodF4CdzRRAVw3auYiudYBoX6e8yGMxsBFxx7fjDZWvmZG7ECbhgAQ6QpT5ERThaM83",
  "key16": "2MhLeQ9GUKNeuzRQFvXu3BJoiA6ML2DyTgSgkgnAMpnAH4LnspghGzbuwwsAQenFUSn27iFuU5TKJpmo2c1bpjar",
  "key17": "Vhj9yFSLMD8D7JV5hVXmrh6buQH3PacdiHAQBSdZdXT3ZY9fJt3XY4EqjSwBetoEYvxAi88zBWPmc1btneoocEv",
  "key18": "2BeDvgMX1fayeUF7Zig1ERPncR64siAfUyRb5UXJFZkmdT7FNi3Ue6dJYSa8ShMAGQj3Sg8sSeuHca3NNPau5Ukp",
  "key19": "25zsGqt2ed36zaimWwvfzK6QyWVNUdHAr2mfsPQ1Z4hM2JqjLMkEVeCynGJTsffZJaAKqH7o14KdzkiRoh6Am78g",
  "key20": "2JB3j5cye6Hfk5kCP4izPtA8Qid35AXp92ThrQ95ej3V7GwWi81gT8vtCYzxcgby1LECTdvPGbBzwfj4GssmRUTi",
  "key21": "32H9K2G32V12SCuRBQTo2LrZjBu5PCpx7KL9UfoFhfRhb1T8Q6gZFsULugcAN4XGPjD1yHAtfzEuc6RSbKjUhYiK",
  "key22": "5yFFhZtHCoaRL8rV1H8By3tDUUD4NHKcNHLjCZZ9iVfQkE6uybRuCQ3HMr1tu5cEjj82TTL1oRXppncdqMr6J1FB",
  "key23": "rXbnCxGES4mjKgEnKGQKt6E87zqTkcoBth1WrtusgNmB48hKyZBQMgsJM2BdW3MdG3DY9xamRUdzFK2KRkk4UPt",
  "key24": "5GcfiAkwa2px2qt49dVHdPfkndEapyGDcZNze3wSjz633AQcG5pUJLUXVWASYSdx9EVxG14KbEYKqVjrgDXewVKg",
  "key25": "2SxrvEnxVEoLJfyfJ2ou9tKHexax34pQvqDVChXouCBTr4Vf7VYTWPztcHkpQNLFWQERYVT9NgNZvjmw9JDNqoMR",
  "key26": "MCoNHEoAsrHqKzQF6WfnCrqRHEeh9BFmPeW9ubaKxMhJNVAkNULGokdQJncGymCWa1WZaKP9HGiApaUZPsQXxLM",
  "key27": "2wvFuvQ5wH1wZbhgH3g6rdVZnXQhW32M5KVJmwJeAf8wwyz9enxXmEqM4gBY3Bdh9YJwXwwG9DkdgQgJQ5FCzwTZ",
  "key28": "29RfMDzSMEQkD7pNjXKjQDdZX2xCZ8XNenNW9HQwztedbGxPQC57PUCcVSKnAwXREgMKohNdfpokh3jB42Dkkg5Y",
  "key29": "Qv2DUtSELe2gZuF1p99dGsu4SpYKThRX6hMQD9eTytaM87yd2n4paChgfAVQwcp8uheVnDgdUTKVtzPZS6HX8YU",
  "key30": "PhxGHpk39qjzx1TQGiHpYGa2ZK2wrgtmBd7mN3vZkLmK5nk9gqmEzjT7gSgaCvNzPrBcB9syYBJH8KPWuCygGtL",
  "key31": "3MUGHN7vcYNK5R1wgQM9y495uwWSxnfsPQknqzg6vU8Uou2XSyNR5eqWBV2Y6nrPmEnZiS2Y8RkmAeLb1MR54jnP",
  "key32": "64Z6DfZVuTMVcWEsXQCGKxMKoABn2Too1TMrE49e7DLzqTvymd6aZLrGWgcyapFDVyPLa61Zrtjp2sYrMm36pnqK",
  "key33": "6rEt2nZbD8BjRvCDRqHzWATNhiTJ9iuHPePiS43Mxi9umJ8vHNoiVtiV7wNSJp1opnU9MqdyRxuo8KTTByMD2oU",
  "key34": "615XGDVndeMRpRjb2pr34ZRd14Gn6UqwBNtsKBAuMWRjTS8SaFpMcxvnUHnrSd25KJs9vLx9hQeFbduiSog7XQc",
  "key35": "24EsgeLNVQBzi59AzCaW9Vrd9JrbrPv3Bi9SsZHD5TonpAnRKF6pE3XjGCNnXVXLwcqFKs8W5WD9HWdkDSHtEjom",
  "key36": "4qpegD13AEzhpSZDDjU72Y5Qv7Vjgb5svFHBEQZ5RHMdzCAL6CgJGBUvrkyZW7Fu6vFFJYKASSAWW2Jbn1hJxJjn",
  "key37": "hnpDfiMxqQLmfJgnD4bWq9hCvnJLLnXAZYcbb98HMUddJcnyx2C5SXCTzAdYbXH38ZiMChUiucs2n44ArJZisYB",
  "key38": "53UMg3jH8oYwpPV6M9sjHFBnWaezdpgd1LvcaHU4edzu8HK3w5FkMSGw7TDK91FfeLNkPw3pmJ5Hz5KNXYQcwLFg",
  "key39": "V5reh66KxLAdQe5GgjxVdnqBPpAvFjK5zLmRHBDF47CBTLdXvWMdQwUJeKRMcB4epjBp4DGYTyia6n5Cxwryog9",
  "key40": "2hvMotDMTcakDtK4g2bwe9H4BNdTqmir3B9K4dq44o2vXVGRrUSWjkchVBVuDBfZHMicxyDfjohH9ZVB5ixXZwDE",
  "key41": "42hsqybjK2urZftQmn5efZ2sUJY8m3ouwtsDUfbfmkDUpsJogqLeBPKsCXoNDPu2TFdRk43WbwbfTBWsEbTjo2St"
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
