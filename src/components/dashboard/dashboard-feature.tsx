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
    "5xrZrzp3PnMfbrhZ2LJDwujgqAhGeXrDGk9CgppLh1Ey7yb71X51x8vAtLUiVU4bpwCjvgDmEXkZ5bmfyspmbAKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECe5TRzKV9tEgWr9XfSkHgwBQuuF52zMTztCQidXUBt7pvnEcqpq5bBfpkHAzQk9pUyc58bx3YY59juFp3AdKVt",
  "key1": "DQUQPgCUHKtuNmCe4B24bTHpZVNT7ut6GRE5NhsvnPbwz5TvY265TdSdFfMdbGgR6wvsTNZSdbwNsSpb96Y1PGU",
  "key2": "2Lm5JXBKJjdudtQqB8Ghd7VGMV1gRE14qE2P5Ui6JHgxj2RQDMPJokbSzaC4rb43Ps47ak1FetoBJYUnjYgngb3c",
  "key3": "2uy8M6yLzJDyW2DQcxCbDDfKdJxCrGnfPJTQiZy428GmhA9xJRQHHVB8N3bdwsJMz8AHUuVmoqTwTyaBunWeRr4C",
  "key4": "4u5kcmLsbXJAL3kBYzX5LKbnJgpDy78ozDGwLem6aK8KGmCyCE5cxKyizQMG6ZAShfYAu5npPYDmCJmpLoQQwQrr",
  "key5": "4Wwiz281hvGAS6NRVXTZXq146ps7CDYgwSbp9RsWAhgnnJXtrz5HNdJimSsGtobDPocG5ySi2aytS7vrE4Mj6ddU",
  "key6": "4VjxpTtwPtPz9qxBfQRq9f8hKLTTkXaRp7E195fvK7DrK6ows4KVWvLzxzWVyPGN75BK9Bx43xAH3ts57znpbVrj",
  "key7": "3hRK62iLTxg3EoxvdTdemyNRZotboQLUpBGYtgZWttXpBHDTCHtmpvYo11X5JqhVH1xPRvTX5TA4jDX2wG96VpZu",
  "key8": "39q9SRQEjpa8wCSt6is1VfUryD52MRXkqH2HoMm6PeKEm3tSkC1FjsrhvzTaBHUF221PEnjNUhcQMQBVF9XFG54s",
  "key9": "5bUydtrpAGGXWjm81McgjhmyuDJhZ862w3udae5UT7azipmrcbRXWXjX1wW6suTmjG1TwRUVJNyW4NdQV9h8LA6p",
  "key10": "4uR1UBnYyRQy6uLiY4WgwZ5fqjjUgXffx754EQmTG8uGa1fUvYtqct8AG14MckY1KzFvXyvd3qJbMyXoSfpJotg7",
  "key11": "4fzRPoeCC7xZg53QggfaKuBcVCkrENNdhCPErRMCpwtCi6B4MvVVg9Eot72GofRpC1ph9qtg8BV52ksS535qXYgf",
  "key12": "5SN8f61VZnkAMasVP2WBp6Wh5CqDNXPGAkekMNKcucF7NkXxc4ex9vQcgeWv83GKwKC3hYhk4uguBP3kXcJv4EjT",
  "key13": "3D1QkEpFw9frn8gxS7joH3GXGjcTeHrvPLLpczmDc8hdsqNte5XdNiDTPe2Zhr4bedBehk4uhjcg1uUsdVMYq44n",
  "key14": "MSJM5op5pwFHnWkMGNr7ce2PVzKdssTDL3fEsD2ZvV1ath1Tm1iubmGQ7An9a9iZH4XYME5hjzD3RdQq1A7fWgQ",
  "key15": "4HqkZBKDb9QW4fxo1UaiZZT47ipJ5cNpnNkhw79foL8uF6HzXBYRC82U6uc22i1wMe292qd7FBVyux3efNmJUrat",
  "key16": "2CeovQzPwdc5P95ozoJ5Tb4v79skH2g12bY1Ctb1u3W4trWZbEMPk7RQMAowAgz2ctnsp5gr2mFMXS2myt4gwsiF",
  "key17": "3ReVm15nGNAwS8tqEn6VPF6Rps7rAqT4Rm5QzBSEPAgfb6Tpxb6pnYueFnSHB5hVg7bqf1XfQLsGpftSLNvfiXDp",
  "key18": "3io8GfuGtjMAHSHb5c3wou7CPzqec98QShCaiVhezhfeKjqYt1cNCE36PijaduNWJMxBCvnENAEnAxsJRGjrawr9",
  "key19": "2N2k9b1VtJ9z8BWjny2rMY9z4fjCkaq6Cdsw8MYi64T72PrFtfD1WrgS8WeRtazeoXPwQCfELHs9kmPgCpXpGsvH",
  "key20": "5AYggwDx5znkE3py79wFvbHp9uXYXTKqB7SVrtQvrmCBcrcQoRGWLEwKyndGjH9D4SygcrLJoTZoLoCX4AtnXbWh",
  "key21": "3MszkNrsoNEr1Z8hQDFCB6B4UCE1ChBfKZcYmPTphnTsE8TgTBR9QFwhTvCMHBLWPV6Pq95M7FohvBd5Mibca1sZ",
  "key22": "3iFDZ1TtU7PdX9ixkVJTwsWskw8Ck85gGkxZXgcH7WEQMeKTzxw6nRKB2RVv6oBKU7PV8aufDE2Syu9e1rMQ7Qqn",
  "key23": "4bfRhESf6p5Rz3fjax3qk5qEe4aHcNnEJTW9CpPS18BtELaY8Ctgt3UuM7foRLyrL6M6ueW5LxLSanDvanSiVs3P",
  "key24": "4MhC8o8SfoRUJeQbhz1y2jmSk9Jc4tSuGKjE3rDRFN7Y5DwrNYe1La7dvQyv6KN4DY9XSeYDPuSom7gm3vFwfHCC",
  "key25": "5ZFUSEoswRgvoBAPmU9wvqDNAr1ph57GwwDNqTGr3gfrkTjd5XBn1Hvbd2fBwCv8pgg4QnUFas8KyRRRixF5o9JA",
  "key26": "5ByCFxgJstjv4bT1tB4XmjoQ9AggP5H8UYToFjuNWax9cTm1im5BEgE1Byz389E4bEsQ3DpXCa6d2qg3iXv4FEjn",
  "key27": "T73JXkpaMYHcA3eayTXjCyx1pkW9XgeGyX22xP3aGW1SbXfFdpwFZbWwu5BfgRSLPayweAQwgyekN2kCPjZrg6D",
  "key28": "W2wX5tDctDf6ELVVYeP4HZuetvxS8VAnEv8Hq2uRJR1RF42ASQdyAiqfrNLY6UEt5PtoqT1CsmxS4d9FBF5CGjV",
  "key29": "2zmdyK2NUv9RrbZESaGsJ2ybm4pFKQNxDxUEkJgJgVYDqTq8Zb5eW4GcEUSBZBE2GHfWgrC6n3SU4StMsp2TdhCd",
  "key30": "2TpwSJw3xBTB8QVpnEJiXd3Lf32npjSQ955HXVTivSPyTetAdnsiL3Kx97ca68MGXeiDcq5XfrUGuiCVpz6bKdos",
  "key31": "3snAHrEYA6okALKo62WEEEUqZGgBMqxuxeEahd3HZGHLeuKCvuCJ23eBcWd1jCCCVUWJRWKBYX6HPQzBwYkYqfbv",
  "key32": "23EpE61ZdYrbKUikgbcoebT6pwGJXbkv5BeqdttbRndpUeUbzRHxqqpEUNDKkkhSVrSEPEsQFsKBzkjTzeH6SMRQ",
  "key33": "2vaXzZhs2jw2eeovzNp8sZJtMvV9seGj6JHhHGP9TqHKRtn5SHNg5iWfiowYHp19adxX8cQzpjjCt8YKJhq3SiMQ",
  "key34": "sHWGogMu3jJyduwMjteeSGvKmfoicRcdYmRQrPAgvXvNxuxzRA1gQCWkaLn8djron58DaT1JeyygjmPPgF8VmTC",
  "key35": "3aTxVUnxvFED55UbPEkCwzMWXZ31eetZbR5pU7gt3A6kre6eqMr61FPHL3pgXVwSckRwVhdAMK5entawxRzXjYQi",
  "key36": "3Agq2auRpNc21wi1b95UtTB5GkAK3PygG218HVwfzwFAAP9HjXBVNkvByhQHqm1uohY1iyJguaXmouWTpWbDsfQe",
  "key37": "5xKXTsrbx3mCGnvy8VH22RxhRAho934wc6m1ah6uRuzh1PqkeetDJA9PM3tGSrizB2YbZ9fhMSV7KNtF1UDH5nWH",
  "key38": "5ZnYfmV7DU2hzUbXCcKqgYRB8ZLjt5AQVX2aW2A5qsSwxjjfdXyFjoSLSXmrCgfR6eWMHLFU7egtF7aSuMf1H19z",
  "key39": "3jnB3SJDFh9HGDYvbg7mr5FrfM2UTi6eYL568fXM56YNqBdAEYufYnbbeAKdEuwuYfuLpXyxyP8CiCk6NG7YYitb",
  "key40": "j6H9aoeEKapgW1LCkXj8VvEqNAD82rHMJgfatsHiPJ8XKG1VeLeFQX6pPjVti8zD7iUfwRReupVw7ChRmc622UL",
  "key41": "4m2x3eZtjafZVXPemb6BWDMKr33FJNU3w5P383gAW396BDgpVx87P8tBdzsiGhHAGgsPvkbKKk3FUiuzfY8Afs2V",
  "key42": "5KkvFW5eHezkjXEetpm92EqTVggQm7hx7JaP9mU7d1SAqUMonjuBqmf5GxUazS4guPhVjAB1Emu5UcJKYkNdPg2q",
  "key43": "2abGx8Q6v6Gkjkf1JpxoS1ZAGZkJjHmzTxDErV69zgsTUeuQQiCExgTw5MXMW22cMrAoZwRHQ48WfM7C4PTj3Uth",
  "key44": "5nr99DaZxrYKVNsWbEDSF7YaM5RsaCiD1SfhbkoSAyushUZSX5pUiqoStLYxY8Hv4CMb9gg5etAUPwavvm7jskyf"
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
