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
    "5ynEu12gCcuCNqjbvVrLAmrEhTEhErhAqWkWHoCaCBiZtU1xwopz2UK19nZAQPSrGiafXkSxhtfGwMVrW5kPi1F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNTBUD8NhDCM3zBneysTM8CqJuJaLwvXVWnpgnXEkdEd9ho1rNBQ8ZMCScvC4hSdAKdNCtmfzkaHbULd58ccWeH",
  "key1": "4Nbe34RNpzS7JJyzUtmnWXnRmhjVVMR7T6uDVWhktBLvsGKD3E56BYVvqzk5DcTxKR2suMbz8ETKMFFbX6DjXePh",
  "key2": "5f9eBtFbCWQ51fDAabZSzhjFQEdboUQUSAfR4Pi6EQ7CxZi5UPRcBCwiKas3cwTD4DQVKHhZTrWbymSQrpW1G1gj",
  "key3": "4qdpUWnkoAUpZUXcfJBnZvMSK9ot46fVkGL3UvCo6a825EWUHcuzxojFGGXUFabdeoRw3sNAoCecXYSEjAKoXySk",
  "key4": "2SdJJk3zDV7SY1pSSkQRfV4fS4V3Asazuz4RbhyLXPXB5wjd6YmyJtYMvTWFJynWYvGBYyfHFeF9s25Yk62SAgHz",
  "key5": "5jTxpxvnNV6JbohqVPo5c8gTBQw864wdVf8k5MeGe4BdjFNTtuw3h7ooh54MiigBufWHdJpd99yvwi12tVCK421V",
  "key6": "3szHFyZ1RwV9ygDSF3JMTrxnjHz9rYnzjF6r1msdjymku25w4rkfA6miDgL6ckSdSNZ9ZejBekCZkBawG1azpHjB",
  "key7": "5kG1xnpfUNiZrH5CR5g3wMPZVhMwuh7v6t2jGTbTqus4MTDeh6w52XRax4fuRW3oMtqXsLaxL2q9HVa2FuXmoVMk",
  "key8": "4zQyyayX8iSYtp1QQMbmLUDtmMgX479EC9fyXDYcFUMe8UpnJPv2pSXTG2LYr9MSGRJWvYVZB24UY3wjYuqrCNuT",
  "key9": "5vMCCKEk9QFKMn95yeTDhTngMwgDxhRTXawU7VVtUsmYp3FAQZxe5NX35cJsn8C8hpn5pxWLwj27WjHVLgdSwDe1",
  "key10": "27JNyJBTX3MJwEw2XMJzJsekKAScgkgDGVguRaLJE4avJyqRuA26777FmC2mrAchgKHAjEL7NJHVJiGLvRibidq9",
  "key11": "5ark9XorYgqaSWJ3ze4sHUjGQqjJP3DdQYFSrKAaR4X3vayQvwZJ5GtRXrDWWD7Jk3GPWEMmqhWqeW4FaTjooXM1",
  "key12": "3W4mtMnWqkqMEywKf3Vrben5Gs4Cc3dnozQd6GCXBj99y9iWS92BJbPA15UHWH3NDC448gVbz4GkQcr9JWV74Xp6",
  "key13": "ACKtTCB8qnWQTN2G4vykJEFvM8Gp1euNYwtnrN8UbtUEEPVjRtEN6TgHhtEasF6Pw6zayb1mVuxUZzAVJiVVa4w",
  "key14": "51rA2rAmrPaUJH4mN66agQT3oqRyDRsCxVzaqsDkzUH1qSAzPQJeKFHd6t8NtoM7D5Cpws99DwrimErMyniuE6Yk",
  "key15": "2RPWrEcxuiHwrnZqVbZa2M8XdZXCxvNR7tW4fetfHRG7SHNDJZSBgrpC2T8B89v7MNCnPb8RQkMBM6th8koYmSAN",
  "key16": "4qg5cfTq9hLRzRYwf9P8Ju4cspvcASkjTcAEFBicD1AR7QNJKT6safNqqmGiHkh5EhWJLotsdaUWaDVFCft61t9K",
  "key17": "2hJdoqqPbBDfZ99jv5x1RMzJmXbAv99vGg4AT3CSVDcdWrnW4jqZZV63NGVBqWiNRA2JuvMoXMvhy5Tyr4oLo1wu",
  "key18": "3PhWxxv6kh1WaFbLwpUUpsEBMbxQb7ebk6w8rSivn5qAW6nReKZTThfSn4yVCzoeapG1DycoKiJM7KKHCjB1RDtS",
  "key19": "62TvBj8Kz8mtLweFjXnomADzKTgg4pDA5nmvdeZEvRuDV8r2h3nH9qaok4DeWY8xSBvbiEDrAtamgrePWuDUGpyU",
  "key20": "2MM7M8KA9rDvHFJ2GvA6XwEciKivTddRVNyUNrAUW8QNKuD4QNMQF9C7L5DVS4YPUPm34HMZvuQyPvWVVHAhUD2D",
  "key21": "2EVcshMQhG7L6ULFRdF255ecXzcyjZUzgx6q29ps1ekLEe94HkCAdZqo8PWC66k7pMuxH19xsVxpPiP3MGK2icez",
  "key22": "3b5LQmz81kWVNov8DHDJ4Puu7uX4s7RzzgYarRh3Gu96QC3Zoq7v8aPgaXDRVnJgCynwBjxazpPTKZYQqronRdcm",
  "key23": "mwQAcNAc3Gt4zVVnP2KB53LswSpXWQUC3TF9ibZrwvt2Lgg5AGDVKt1KBUaEsj8hg963R52usuEDVzBrsSj8yHi",
  "key24": "4DvyXmHE29qkvJG2bsWwzvHvPJXNi14fMiccZV8UMPpVedXmmR62wz6CW2smCcJaggVVBazZoDjW1HvdYMF3UeQL",
  "key25": "2hWUdNZoKbv2wvDvMmrcR82gfqd2bjsGg6C8CFkZ2Q3JBquvKPVYGUNXas8FkCmsVSg7HzjxLuUvd93XRLTp3oLY",
  "key26": "4dhekBQodswwtKq5Z8uAQUUeCoeKBoJar1HjicgUm96wuAyigqHeJvFtaZtYmUhZyj7aLHaJwH8YF9wGZchKzqpi",
  "key27": "4LzCY3u6S7Umv5Kv7hi2854kpDfD8DtpTfTFJhcdkNwaaDa2ewBRmejZ4dhTvCZQSXmKDVYjYB9AXNtbWeghXNu9",
  "key28": "66xR1VK8xHG5t94rTTEa6zGJsTSoMTdSvRmQizoUtA3whbndBdynGqQapkCXu2WFPHHMzDMhQvHNYXyUE4i5wC9E",
  "key29": "G3i322zvhmbAXMJkwnLRvkLWsjVw5jVa69EyN9FhkM5dpP5phAT26UdKQaH8bzzDxx5EfSVRa5C8Aui1PkkSqPn",
  "key30": "2cLyiZwGT2Hy9peB8dF2d3PWdSxVWiEvgJvWM1UsDfhgA2ZJSwG76MMyXJu9xWcRkZzS1PTUr19zGPCZHEqpAfkp",
  "key31": "5kaaV6q1PP3rX8advmHDfN7fvzg73WQZiJnGwchNaxsVhbXcTrmNjj9fufCncfumkm6reHpKUZKJK1WkExcHCg4P"
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
