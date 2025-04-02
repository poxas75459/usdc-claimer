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
    "AM6BBiLynbNnerQLER2X8FpFvY4m1MzippuLAw5QWJKXNaT991L47dKT7Wjcc8jr33xPQx5VPQA4VwkV9Ssy8nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pTs53nxsYyps5VYuGBPUQyH9xyjk4nEki2L4ehghxqR6DF9XEjUQLZCqVAptxFHC2HmqXdzoUKG88WPGQNUY66",
  "key1": "5zyKM7H7YqVm1CWkZe1mty1ZfJ4ToF9kwSTRprjpHGyFdaEsu7jNQQW1L9aDKcU6mn35wanN6wgJijJuNvakQctM",
  "key2": "tvL7MHQqmPKM2rQGmkFGKpYY85PRKjuh7kdvkdD97S5U9ErYHZX3jDqyZ5Psob5fkBj8MzXcNP7jfqraWk6XpGH",
  "key3": "wFxtCDfV3NUoQRUePPuBymqENZgt6suyWis5JFV2Lq5NpoNfR1L9mCwfezG2oGJqggv4Zy6t5RT6U3bFV1Fbzxf",
  "key4": "53SyKT2andFnZeEbvXStH4s4sNy8JFZCrpq8MDJ7nSBx5C19zxMoXQebvrSQNVXU9UQx6RQJogPF8MH1UJShSXYX",
  "key5": "2xbrDLCZ2pxQdnNqWR4SPt84JUEnZAZRa89Gj8B9k6QXLfB6X1DvhGQ1U6oRChJ5AXU8Z3GrCbja7EoNzPBLCtEE",
  "key6": "2qbwwgamLeVkUYmdA9tttf3GaNyn6LTH7BZj2MJZ2nZ1Ba86kbXMWXQMwkF4PCzmv7CM1gCuMhk1B2WDzM65RN1o",
  "key7": "34b5XatpmFjK5yNxX5q5EiYQtD4P3pZEAoJVEEyEfPKcvxW6AUoHtraBSYDtMnEoFaLhYHmSDJc2qhkQAWfjMds3",
  "key8": "sLUqtngxMavMTBrepFmfaoJvwtGHbZfTgCodAbpevdCtzRjRf3vYiretVUim6ZoXZZCusephBu4E2qKD3bUErze",
  "key9": "35nRj3u4kPJy5Ase26AAFTuvG3qjg7T63LBfmDeo8pyg65FNZrEaSr8vWtsXsCDeRtfv5hQ6WbW2EfwGAxCRYq7A",
  "key10": "2gyPbAyP2hhoQf3gSskV1AWi7ZDn9WQC3T9cBFemyxeGrmC7QMwEVd23ufbn3AgJZDe2pTDU7ByApGSeeEHVY5sW",
  "key11": "4spfqdZ2zP5BBwz86jzmyNnAKMYwinGcbUsHXPmAQkvPCDi74H7jCVmzxir8hP6PLvKknPwdNqVucwCcwzdktAnq",
  "key12": "5WygrgS7Em2XVqCaNJ82fj83jJoR7HZ9GtB7EW1E18YwJuycxHjBb84NcmZWhysgiRPGz9xktb2mafkSwbyCpcav",
  "key13": "5SKfsrocD8mRaahDc7HwLtALFX3JNWoVaCUYCNQx3WJXzRNf6W3i7oP13AWG4qK6bJSTMfwrCv4jbNY45Fgpna5Q",
  "key14": "4isWGjHbdLkfVdDeqaP7gWfrrMDZzp9cGxaJt5sWRpY81kYMvKKiphFZvZfTAfwkTj66aH59Re1n595u9SMjR4pR",
  "key15": "22gxT1ENJxwZEsjZRa3tZKjAnrVaXbwH8qyBAhHTiGH1xSpjCiTo7g7VAJkZSjkTCFEDxWtJa8ZtbcSeCXvBw4xC",
  "key16": "aYxpQxQx9WCrc2XeC6eZzpBPuyGGEvTLAMKQoWTf2khoBPEWcSzyHaftVRcXmzMcPaxptRfARAAyqq8EnqP2Fqe",
  "key17": "5H9yhNX9rQYfimYZEK8M8CJYGYts1JLmBLcfKkmjanLPLEwVYF25r2vcCACQJ6pXkj9XhcpNa62DoMbZE9dZhJ63",
  "key18": "59vys65hr3Q5zrdWwz8hXnb4YRTNFekhb3HN8qxKjdvFBYBu6j23xa3BUAgSdaPwiyYKvoXykmiCd5pdAkfpLAFN",
  "key19": "3A16L3YqmTh8tVPJ2AGqrgUTfgNcLDsUBbw2GLeoFWjHsED5iTvYXTdpAdxJ2h2ZguxxgCos27kwJc9z7UYA6vY2",
  "key20": "4G3w6W8aTXTdmr1hFgiBiCrYoes2wgYDqcYRr2PAJaARF16xMax2h7Sct8mnqNNfMGnRoQYVtT416GgNZpUQM52Y",
  "key21": "5vtoc2GFzfLBnSn58eFXhJpVkJ7LKuNuRrcCmDo5U9Kb1BRpYWD3k41DWzDAADafE34ySm8xDCCvTuiGVHLQtCZD",
  "key22": "5DJMdkRg2hPBT92mm53Dk1PF2cJnbRFdKU7yXhG7nQ9QzXT5PJDqCfuue67MykNjPFZBsagAKsvWxUD6W7iSyeGy",
  "key23": "3nPnpfQFc2iwD7dp4fRqN3Zzz2Z9CLp4Zhpe2hh5ckyNpNawt5JsnYKJU6uWPhx1bFBaSRgcUPbHyyZWfWQRiYSd",
  "key24": "WNkATYQM6U2LhkDyecZwk4JjLZGcuQWQNPzHAapK32oCHq2Ba9Pxfqwf55ktojAEPB6te7BAJuc2xXdLAFiq8q9",
  "key25": "YHVFqgYb7ZZiZs9f5PG8n7acEukSuectczjdjmXPvVoTsmKcBemr3yYp6gNpMGEJm121mAD2obF6cW48ztCgV1W",
  "key26": "2NBafwRDaZZSytS9LvYcuZnkbmsqd4mFxTDWAqdW6NuTx8qjCUayB3zW3zPUGixYfp9qNMQbPnz1vdv7gTufgMYF",
  "key27": "5XavTR2Bc7e5fpH3VrghTDkRkNqS8aZuP8EvdrJ6QSXJ2kXS6gcXU1eT56DMqeMahZbwgeJdFL14zFVGYy6A6cKw",
  "key28": "5KiPfsMaMa6ikkoW7i4p45sosRWLSzYX5ikN2F837kpk7hGasRhiAURAyYCAtDRr7wCk4asATjTNJrjchZP2Grcm",
  "key29": "23Kzxa2zF8m2PnJ7rSRDJb51nRuMtWUqLYz52qeZE6ENNDMihdiDJL16Wt9m2EvMtk6PMBSXJhmaWL16NQJ9kQTy",
  "key30": "4A7trey6NskmgkuXs1NnxAtGxUHPPN6XqiaauhNjqNg1N9dwpVgqHt7tqQJS5v8drpvAH4guTsW3qi5YwbcNrK3t",
  "key31": "3wgdBVAz8vuKSNR32MVuPakgSGgYf3AwzwU5HeTw7Uq41zuvXNoFXZSbrdoVkZTxesGX5HpwYG34HiwbjbRLk4sX",
  "key32": "2WwMK7RfFw3rHSfxeoPWZwEVhv9QLHViYngRKwDQQMD3n4YiaCWEFV8s3kz2WjaYN33HRSxgzuzS67DUHC822dQN",
  "key33": "5nS57n3MgSQAHkBQNiBBqNoEcsxPsoprmrhiGsCURRBZNDNkJdykoodaBH8TAX4rxQUBTwhEwHEWLhRRZassohne",
  "key34": "2xD6hrLf9MzFLyoq2UuShxtNhbf75rucQ2q2PZcfRsnMmNznTugfcgSB9KntNU57HeMyKk2AemKe53MaktX62amQ",
  "key35": "wKgVFUZDrc2286xKVrm7wzRDBJTzJ14P1CwZXPKeyF9weCU6owprWwVcx5ss4F3Wi3AEp3AqonHrQoS4J8eo878",
  "key36": "2Pg2dswE5FCWmdQrF8mWQVjihy1xgQrWxFpMtqyNYW9Qw2qewcQrhB6QuMHJ7dL4Tv4ERqwHpb7h77kP1jAxFiot",
  "key37": "41LLM2CBdwSW4wWKZExJKrfiDLMad382qubaLRmYJSUG3HzAjeP2cb1AVA5LfdByBYj2AMKjsVvvBDn7LZnxE69E",
  "key38": "4oTzjnfYbFcV6newFmPK8QqcbLnNsd4nEUYdMJt7Yq3UY7nDivMqSZV89H3vmpLiqVjM3hG1Deh6TjPJ94TEn1nf",
  "key39": "5CP62M26jctqQGSKkUMwZ22WvwGz6JnTaRTskTRkYkRFQniL4cXtruuhhafGrFiJTzFUMfLfGtbui2qz6Hei1kDZ"
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
