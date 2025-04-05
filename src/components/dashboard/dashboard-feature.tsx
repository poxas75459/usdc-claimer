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
    "3Abx2mGkLdZnHgFcwWka1Nq6v4QP9t8pNqQYkxLB2g1MwimkVLbLkgRS1tj1PkqLbgdw2oY65uRMGDzqb4Ed2NJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291dBinajdFy8MFtg6YfNo3sNcagkVv54LBaC8ypvmZd2w2zB7hxUDkb5xardDJBZYg2iYfEX2FryU8T6YSuEBQw",
  "key1": "epER2tXR5VhLNHg7CZYW3znAr2PcGVz8yDTUFz93J2wWrJEyb7SJFU1Abdu8PLo8iLs7G2GcNx3ab5tRHp633sB",
  "key2": "5DBGN8N7bXGaxbJNomRCKSoTH6evxs9sjfcJDSQMgfDP5iNNCHywRhMxArHGzZDGbvD7NoKt5Nd4joWD61XSoXck",
  "key3": "2v2baBJujU2TFpuUUD4hoFoarJVqadHqKyK7JbPMWhaJCpjv9YEQhGjbsn2oqH6x5XMHudVwiSTFoSncyec8DdXV",
  "key4": "5XCBmjoEh2yMYdvhRV2P74wrqmHHwafbEzdJ9CmajbuMVytACrR86fj2axzPxPsmTx9eaUFkTLqVrzGeJusSjyHw",
  "key5": "4G3rRcSQyMsq1UxVogMkU5CeZwMJBegd71PcYXHAgoAyGa4Zv7mkvM5FrBjtjG9rnVWztf1Qi5qmTYKfqyYq5v7g",
  "key6": "49f2RMUzYWEo5R5UtXRYq6frC4Gbq2mS9N8uxLxug4bp8pvA6EDWzdDdxEPKWdad8bmrUFeEjtxF4UnL4gLXqeM2",
  "key7": "2hU28Q36sq37vUN6ZxQkdyXVHrYV7V5fFrmjVwCwjaGSizqeoGNTqwTWHcWHVxem257JpZVgwfjzSBbQCzRWNUBD",
  "key8": "2hyuvSwDmY7Bfvj5rwVvRTFKgTNPrAsBvz9AiTAgupkwiCRPBPyqBESndxHvQWhUtefQiEBwrkroW87socUgpupy",
  "key9": "5HnEAFWPfWxJbWQc8zz1VYSrkQb21QmeJp5MpdKCb5LdaMUwC1dHfTzPPULW2hkBrgiF8dkN9dbr4nTexbunKbi3",
  "key10": "5bQaC5BJreNqAGrc2M4o6Ch3ivmJYnQzwhR3EGbezqUHnC1E6cYhjuptycuTewnRogqjdDVM7aBGLnhA37LxsJyE",
  "key11": "5y9gSG5itf43368Xfd7eGSF81kq4RXWaeQXrJZYmPwyo3sevVTBwyNsCT677XLo92ve74sWVEjjkjwrtbyCHpDtr",
  "key12": "4CE11UWFUKLL7QkU8hWdSJjSborPKDiAUvhUU1w9pvjyFcNdH6Ex3QAopgCMqX44uaMCyu38vhSpmU9YiTUWTtwp",
  "key13": "3cZG2o37r4BJaW2W2WAoPRaptzQV6zn43kbQyAR1tSXGHqoGyBMUypR9cpKeb3DzkpMumRD71NTkd1JLKHBFMrUX",
  "key14": "3m5vLrpM9ENWt5dHtnXmZu4dinn6WdF9RjqR5x7w7WG4knuKpQGvn3FxFQ3WFLH65pgdWN2X65xZZMse3G4ewURe",
  "key15": "3CS7fdwcJUosGLBrayXb72PYGsb2oDS3Chx7Eqd8fQuuWGYkcHsSu6LbcDG5y2kECC5WAAtFDqeGky6Le18RYFsZ",
  "key16": "nCAjs5EAUsaqZ25iboSMfopBNi9fJBH4sbQje8jtDtEjjGj3RzJc9L6FYFVW4VTzxwbVcN7yT5cKsxC13T46irT",
  "key17": "5hQL6FdDTLwDskeq98wRr6CUT4V9ZZXaZMtJ9DiUjvy5vsLBYTZA9iRnZEeBgm4aFsHsBAhTMBgioBFwZEnnVoau",
  "key18": "5eeowPN1Ru6gikjNdh8fFnJyowi3nhX86mnpfkbuAYUgfwf8KTxRigjWXjo3W5vRYBLE9FDc3YSLeGcP6bcpxvsw",
  "key19": "E4cuUw21eRgHJ7NtKhYHVanR6nUzih14BCxWKxuGirf3q58AY3GuwXcxviPceSHfHx81bbaA3QSZBaCVAiCqARa",
  "key20": "4MVty4DJcrP8MXoxSUmU1agCaCSmniPucdonDPb8q1mjdjDugYCQ62XZkFCXDPpQar2wYEFjjdwRB5UfeYibdYnh",
  "key21": "3gej9RmPqB1Eis6cMDj1vsMdCsxiqB3ZqnEAX2Q85oXtJfBZXj3s1UB6mpMg85eoqHwdxfjFJWqg9ATgPd1Bp55J",
  "key22": "3p9SB1YM1qekxTApexc5fMXrTpd5hG18SeHFADSB192nwH5GM8CsyUL7wW47uzF9CEMqbJKJhpzFD9f9zwAKkRho",
  "key23": "5yTehRczq6rsfvKfmuJ1VDzvZFMKRHKkW7fb9e6E8QgMrA2EV2dFFzqWWZnwDiQonebwxf5LStZdkoX2QJ3kahu3",
  "key24": "4F514uNsnq1dhBHWgDDCSjfkksMKL5Azcuzd928JJJMnsoPEywzFKFnQsu66QhwCNag8wmavG6ZWmgaDxbv4JzK6",
  "key25": "4GyStpdkBp27jkexKqSPhE7kNFbN3wgKPgABSBpN27mMaSP8qHz8ApfKSUA5Nbdh4Y63FxNYtzpNaVxDwZbefup6",
  "key26": "5fXmWwLG8aeG2k53K7XehuwuWTuQpMVdb4jzRRPpDB2iZtmmSJChvGGk4YJ56sfiaNsTvziGJsxJP1PqLpDF2m1X",
  "key27": "3By4QG8Bfd1QbenZfxPyLbkVVC7xT1LqG5do4F9DyqDDmnv1PtEsrppsW2MQd8Jc7C8qjmPQdf2Ri7ihCVZecGXU",
  "key28": "33TAVC3TTnJFX8y54hS6Z5SSHrUpVYhgFwjKupN2UW7xtCKo7BouW3TjbhehmoacjZX3zuHuiJLGZ8WH2Vxz353P",
  "key29": "3HseY5kbcjvrzt5tLGLxoe28LQc6e6xLjzS3WtB7uGrQgUPYXzvvoHSFxoLu78NYryeTj5d1XSkn2oo4wVZT5T5C",
  "key30": "3CR8U9Hn5vb8xHShekqXPiGq1m93vA5BJfCbx3d4g1gT4pTBbeSkDvT9ZQhjni51uGNGvZa2cBKsz66yvPJ3jQ8C",
  "key31": "5MSppKX1RKryCEbx3J1jBpAzGH7RdERDkXWiJL3K95EJydV3vb58w1CpDosoc8xt1kUmXPiQqCtmkDr7uQ1fVPWC",
  "key32": "62J2h691oZnqZvAQxYo38Agx1L53JVsAK89kE48hiZsQSoJWKmbhbs2HakSDbWbUJ1BsjfL4QvBfwFGcEFPf5z6M",
  "key33": "bCTFYqk97x7954QUMNUsZ4fQ8ugKmidTPMQTTopk3izVzXJ4UKnMcRFTAyExKnLnDJ38Q7RQGzrFcQYLRSfEL3C",
  "key34": "MjRCUztbnPndmZjLtTge4FkrReUriYcASzeyPFDznn4XYCdj7zdaNRk8HScCDenqBQjhGr8WCTGfMMfoFDFRSyZ",
  "key35": "4vjaN38pohs3sdWzMTgkYBxcoDMQ2qBDQ5QoZXXwxzDcFgYdFf3n3a9MdG7LgL2PEHhXuFPV8NTmKNsn3YKx3HG9",
  "key36": "4tUAEW9iqnpH8Z5dvpnEQU6BkPfTB85ixGhCRGrm8AzAKpX4Z9JpZExWi5iSVAAk54fX581VnhUvp5KRFgoE1ipo",
  "key37": "43m2Bpwvio2bRmMfv97h2MDPd4GsnoxXbn9YSM8sVDNacReo7crZA42i3CqzGLZJrhiqtYnBvVLD8i2zTpxpD4s8",
  "key38": "55e2sGR54YPnFzxnkAmRjYE2XaWTKq7NMJhh4z56gMexA84ABrqHfWnPDfAZrv9wfT9d8E36WPcrcDGDkdV5kxus",
  "key39": "4n6xeTpdK4TfSowAbgCcVnjyq1eKeyBur9RWPoWLBtNDzih4Y32opQviTcotC1n5ArymzDcdrPXq6PjuPnXfGnFC",
  "key40": "hQwhrubMqLg6d7gXKbfpBPBeh3ExEZ78v57STwGNwXw6SJptG6toVb7FAAYgyLDwabtKZrNf2b6aML1XDXcAk5g",
  "key41": "2xeFmohjDiuzThzQuRpFJy6zw9zxyUZrLwyKpk9EGH5MPJVL4xKB6aXQDBDfmue553sREs5VtJ5qVhP4RAS8DMmN",
  "key42": "3LknJKEbqSJz9apeDNF6uEgArVCa5PpU9NkttcUEf2NBuz772sEGjBuf2CPdKKL9dFu9D4mRQA4GWimd5p7qmDhy",
  "key43": "5KvAHbJhhZqN3hT2KtD4fJcXPNe14u5KSaRivT2P8WuZG2uxEoy6AC3Tx2kbxzfiJR5ocD7ZFjc7oiQrZySjg1Vt",
  "key44": "qNrMex1mm44icwSYWnq5PwGP328hiQwZKgykQnxBf4r6oE7Ux5DBxXrTQPKbTf3WUBC9YHyJpbYampZS4EpVnKv",
  "key45": "6QGaHfj15C3Hc4D5qta1csxgJkfUauKTHRcTN9q1azW8498BmSzEcEKn8xhz3XUNgpKCBHebBeaJNVQCNmkvUWT",
  "key46": "4qxnox4tjSEfP6f4Tumden9LxfTLu8kGhtWV1Nyb54C2gJBhnzsRuXLQfsdmXspBCnQasLyA6iwRs2b9vekx9CbE",
  "key47": "4oZbL96UmW8UUgKop1fq9gz2YQoJbnz9e21gGVeAavaBfW2bonxykq8YGf7FyHmiZuuUX96q4PpVwfyNYDp5Kvqn"
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
