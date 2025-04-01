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
    "66E8xHFXx4WrY5oSk7251wqurGidnfkr4PfEfpLRDCebtUvBW7fq6i9oVNCffE6F1DRot8gPaLLZwSkQs6geijdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Boj6nxQDGTB8bFZybeEVX1uxWkrBZMksrxNrGCPBAJicJ1z9SZR5G3NrnS84E5NkEbCyhGseHXZg61fcQUmtogG",
  "key1": "2S1sWk7BFYHJvwVwGfQu8iGbBvg54zSW1AhygMgwEBy6hLmG51hr45RDpYeGiDhDwcMTpZd4ceJ68g7A9G2ALCfv",
  "key2": "22dWmVhTGHRARBwBc5ZPsfSXPj1x2TYjRtedUBFqFkLES9x5Eu3ybpspyK4hSKCzMsfKCDYC1WvPXSQgPQar5nJe",
  "key3": "32BT6cGGxayD35aD2BaULJacDydxuTKfPoRP5rnF8sECJtQHQzdiDSDPEzQWQDiGNocCPZvMx7PnZ7TnpADw2zvX",
  "key4": "3gfq2xGmKkqyo67zSkjQSg5uL6us9wmsBoxgqS1etPsMA11ytECsUmNR6Nbmzkcc4QeaC8nLtFcstKutzdigEX6e",
  "key5": "4XcWeTM91z5s5sx9LRFpqwUyAJByZNhJVewj2BdNrQLUg2Uay3HmFJE7jv3wEkfWohCbeDBizmba5oUEhU6RpTm8",
  "key6": "sdhBzg6fRXuGvUqECvuSU9hLM8h66paHsCU4eKuyTxrKkefg3dzmVHmcLMawqZ6zhLSKRh8eRQncgvt6gpHWxFF",
  "key7": "5pZJEALtkFbLYoUA9Ts5SczhWT69rVrw3TNRUjhnupNfmH8DE5f9cSzaCy5Q6FD8HesyUfYxMtYSZXFakuGYMf1G",
  "key8": "5tPSzamhwnQYWa1NDsdCzGr7wmpRWyVD6cCcNG3cWro6uZQKBEp9RRFi8yDUMo7kKdtBK284uEFsYJQe1AzEBKK2",
  "key9": "2e6Yh7694aLuKxhK9p8XeZR34aYen3TkfoYMSukaYmFuB9txzthMfmJYMn327siiHzAtkdfHQ4b2c3hTQNPfSuMk",
  "key10": "4qXTUzLp5EnZZmp3N1U9aj9w6gvfj3WvF6byW7ct5bCXYowTguUYS59QRAuBy46MSw8WwLFCuzmNJihPEF6BfJoT",
  "key11": "Y32hqe9Z5FFEgRg9Rr9fj3eCv72kC6T8ouAuU8ruwE1uXjgdJfhfm5mT8CqTw2GYgfR8PBhwWeJvituBqS5mJvf",
  "key12": "51rwj6zAzhdinL3jFvDSENT95jRVSwcH2HFoPWmCpAzJDL838Wotairk9hXftERfrJ2UCt9rP8akX1g7HBuMrfvR",
  "key13": "35an8m6YhfFjSR54yo3noDqRGWRBXHk3ipFtSSWBids7vhHWjQVjsDubwpqr1qAXZMoDn7BsDJN9NXNjCBtVhUmC",
  "key14": "24zSSNBhotfzsGYaGQAr71dt9cR5vSMKaZmmDxV8yrQ7BT5zUQyCw1m38sFP7nX28sjGBQJACvJ6xSLQVaUYmqKR",
  "key15": "2JP5dpUtcsKvAosjGY3RcghhTBZhNh8adcJvFj6giz5H6gJeyQ4pcK5HiCs6Lj88C9bKFdM3YFi5VWKXeVau5wJF",
  "key16": "4y5Du4PdQy6ZqvpvRkDjRCCP6nkyx7GqbacMBpCfSdRV6F4gvyWggMmK2mNQsMHAE8Wdah3ggeaBntdrLcTDRsLa",
  "key17": "DQND8XZxhMejcszYHF4sdVRPegymLttJfckXBvDgGkyMUyYaoJDjfvP68bNjtNRN8XzKJS3HfyhQLQfWEaCVSBK",
  "key18": "51LLkCs6cwv1BYxK7MtP1rqxJ2pqwzXJVfdD7osiZxFuddTrTQKyrcLPN32pLKT4hLA7qTFpjQ9cNZE4pQv8MwM",
  "key19": "3LVx6irHVDo7bjcTZoUUdmEKo6ryujsB5VrB4mcpfxWNWGaj6BV9jUXtcTcuQsyxn8D6koiDn39AWyV4xH5YiKQn",
  "key20": "5oTxWhig6EcHb5k3xguFWnkYpCB374jM65Gg2FFBffEyVSFdNCGbDoASwuaDcjw8bV8asRqGZt1Qq17xBbdY86hM",
  "key21": "2b9DScXHSpVWAFYVVqeJmRUGdNtnQTUMWSCi1WBc7f1R2nideY21TpwvJaRs2q9iNv3GLUv4NwW1zy2EYGwbzVxe",
  "key22": "4sZoXBzThFcDHvqywunvnQakQE2Yf7LzYRoVahZTcPFRPdF6f9EeH5KTP8SbHstw6SyfkhejyyixSpyM4izjNeyX",
  "key23": "28nqDGpGJKi8oFTzWZ6REH6CgH1tYswFcgEQf9MYn5LU1BAurDu5Ehkc58wki5mMDSkUUsz4iVHH92BPVTUMtXAY",
  "key24": "3JXS79TEKwEoct8RUAurDYmUKoeMCKTJL3DunAaqFs3oSjkKDeuwgZMSUSMAU5tvdrmbYWXMC8Dg59mH1BzHqiV3",
  "key25": "qLm7ixko4EuNJ2JtMQ5Z6QG89y6of48mUqBVVMuKwM1KJhYeScq1vvioaSHuGwuecT579UzQGrq5kovb7yBZUcb",
  "key26": "5yVAKkEeYnJaXFdSmxQF3581RKxvzEKbmxT494X8htYRg3uZMad8dHTvnoiPVQ7GdRBFhgrGmQmZGwd6jMfFoie6",
  "key27": "4rTXwgNetpGYjbL7r5rJTym34YGRCKagb77tZVTKYjviw6gJdd8zcoH6hMpUvm4dcpLwS2p5pXc6Q4Vpk36Ftw1X",
  "key28": "2Jk6kB7SrG4B8EbgtjdKLh6k2NpNtqNaN2jGtzA5yejZmnBAnzSAtiKdpc2wDqRWJByQic9GtfTATQw64SJeY1s8",
  "key29": "3smyysYPvb9D1mRSqjc8xVDSp3pPoEZr5pXtm3Kcn9de4QN9oR19sVFJCB9TCbMfcZAPgiY5atE9Kb8k5cFMPVMm",
  "key30": "3Uyn8sE7ZVPyqiSqVFFzZZTyWbAxZ962aRJq8FxubCJvevQ8wq6r537U3M1Hm6EwtxugiewM4ZHGuvSvwvzxnQpM",
  "key31": "NiADdawdhjprTskqh4HJsfjbt3oJ6EofxrysHQJyueoFc6GN5aGsmiNJKxjEuC86s1AvwTydiDdsbvpRjSy8rK3",
  "key32": "5Q6NqRrCJKNYUiKFJfCoQjmb8Epd6vk7HudYpjBeGMERS7SHJNvEdLQrKDHJcJPFTLHL3Mbv86QtDk3ygReF4AUw",
  "key33": "2w6jXtsr8naU7Hy3JqWkr18eQDw2Bw8YdJ5ikY496SsdsJBnR6nLaDK8wCNypGhhHKAX9oqGzmKQi18mqDspEAjm",
  "key34": "4bnG1pu3UL2kbggNY3nWkN3aFUmSaguG7D4oBurJmAJ8cdSe4rf1bkiGyrpmpQ4mA8B5xX7PBWtrTgCdjA229hKe",
  "key35": "4KBJqVu7uj9vSohkj68oguhGhzy71cDMQ6fFPwcfPpvGvvDDnwdLHZP9Ri2A46rGQoKGNBZY4DBAZFsFMFFNn4Pv",
  "key36": "51bzApGZWtzFxYVG5qcJR4fTeXorW4dxECHAtVdMr1BPQBPFjPyC8KzVifACqhBq3aBSAmateNbYP2pS3YpNM8w",
  "key37": "Bm8npyKVmQzKt8Fxj4Cxq8krhtN6K7mTtxg1SLiC9ex7YmmksgN9zgqg4mUsR88AnP7XQmHpb87EYCYT2RwpYbF",
  "key38": "3fFLCHwxXM2vMqdUMKq1F7bbnSUNc2aLKXpzhqZA4kw5PpGEK4BobKu2YNxHA3o71srp6bJeYtAuP6s7d7TbBMAv",
  "key39": "5rBJWnTs3iiEdBQCV14vuuu1gBCv7FjtqTaJGafniKntHbFvMdDBtUp2ix85q9RZV9NoVLA3xVxpdyi4DzbbZbvj",
  "key40": "4UEcjdEK2fWwGh7rZXBvwxhP2aweeP4G43NDo61qWSCDRvbLJAcLKE2EAHhxZakMaPmWyd4DdNnG3a3brLbNRoFm"
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
