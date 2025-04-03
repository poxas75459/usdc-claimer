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
    "2t1Vjk82GH83jkCXB5Dc2JxkhfZ4ENJPKXd52EPaEQRJYkiR9gwYruyQCVnQR7npKjgdj6kFQENAS1X1RPJnf9Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rtKJxtFAV58yLtRz7HB2FNtakjyohFNQyK3qumN6WhAp3WSNJfvYCmf3R68PwHYTsfPdsAQB2nkb2dDHkg3CpFA",
  "key1": "3ShJYRbUjUozr1vmxNsyKYJSQu1usmKcJvsTa5A1JqkUKBCeEXKFvQL4MKurfNbfgF2bKfAuaZttazunjgHMsG1n",
  "key2": "67Xn4kMKbWXLHKrQebeUvxRXCo4kjJ8fkt1mungRDwcwCvaTdtaDZ3T9GajUY4D32d9pSApEiD78sbfc5WZqxRXt",
  "key3": "4vdZLZY7Z5HFXqECjnsgyVJqYzdviccy1Sn4KzJUkDiYDfonzSKYYe1mgVtF4G4hjx4bEENFCf51fd7Fmh5JQYWg",
  "key4": "5wUoajSafQaBB7ec8DoMVox5fY9ibMYtKZjfYD3aipfH2gkYo6gdaAfc3TtMcuQcdwwFRsKaWo2Y8F2mUWNduDNr",
  "key5": "5A4FzfBQGfNjM68KWWA4nqpTgtPxgMWYbsvGN4eLwuQXj8ttZfFFweFJpw4eEgR9iQtnnbraPqCiKT2FaWsN9LTv",
  "key6": "SSaijX5xiiXCat2Et139TsPnLJdgGExsmVXfPdmt374bNsdrwwW5bu3d4maV5emF7x6M51sJfsQ9xUQWdbPYfdJ",
  "key7": "5UbeW4xnnW5HLfVY8eCLJD8AwNpJeCfuqTSLSENZf4fcj1LHgcD2VxHhRCKTzxvdDP9ALkg12NpnBwwBVngDv8e",
  "key8": "2r2q5e1grEkC9Da82Jz6T7wBaQurUiADDVZGgngJGD2Cfod9LqcFNrHLcbKmV1tDJj6ruCcrSkFwGVCQ8L7gSTBU",
  "key9": "dBhq8NGcpT6aopURXoK4oyPu6sMXYTbXyoQmepfD9hJNXerBtCXFKqYWJGiqXicQx8QiroWfKKNDpLCHhZmepKV",
  "key10": "2J4qNk2PGachzwmWtU218qPJACehx6NtGV7hERoPnJ1B5RZhY8ZgWE33jGgPVVEXmnxKdysnTtkByxN2eeXmqowV",
  "key11": "4CyvDvhEJcAyrpAYzk4M1vTrnVYS1m55BuiJjC49dU7YR3mZoucZBCnwSLzApHGpEF8Gzk2MMAfPTEYjW1Rk3m7g",
  "key12": "3NZFCLfmU1gvQvne6RR1vk7EdSm6MLCuhbhEAXvbG3RGPQVerzoRMubxYFNJ8BJbrPYcdxbQWhL5ATBiQELA51QE",
  "key13": "5DyZqAVcykv4tQNeVJzcYvPoJkF29Hnn1iAMdrZF1XT49DdwzknYAEekW9ezos1dGZb9yZfB4kbLYwUoduttLBhA",
  "key14": "5knMFFjjxfTHRREMmZMauuzLgNYsJs3CdcYEsa8y2WFZp9U4cetEkcL99jJzTGeh8Nvhk6PzSq5LHw2barR1VKrK",
  "key15": "4PVeWJqyP8fzXkRMRdHAz2xQGBv2YsUt3ox4GT3CpxvT8JpU2aynD82RMJCLLCSm8M2W3MRtr1DNHp4tHbXm1gp8",
  "key16": "5fQNWPHDQRxb8tFVjxb5yRc2zzAueSpSqmqjXbr9iAneKEageqv5kSQQ9skZ2YqZvpodxTQBCDTcxLzNzWf1s6sU",
  "key17": "21womWRVkKL8cd3ZhgX1f1oWMfgoZeq2puWpo7BbVva6ZCvZxLQ712rqMje5n5QEvaXnVxa7AZe4PsCpcF8bBoKA",
  "key18": "4d4Rpm75yXG8728j18D9NnZ85scn7fSic38a4vGD6vdajeqTATjubxHhSE2ck56pQuPXykLGtQm962yndnc9cEvj",
  "key19": "2TmT8u5CboToUzmcmgWt2n1FzkZL6SpAyb3Lepr7GpEQJU5AaYWgkokbWNXQSVLq3VYXayLQbZdgxfjvcv1cbhwT",
  "key20": "4EnJNyqngYk8aZ672wtavVWyS245nnENXHMT9bN9y138jgXDuckkjZAMFYM4ooxGbCXrihj6ZdRMuWymv4uj2SSk",
  "key21": "5siysHYUL1BGCycALJWRCcngpSaa3bZ51BexJVhGcFG3eTH1JA1V8zCRCUBjf2ShT5XLZg63Aivfz1G8sg8a9Vsa",
  "key22": "1S6bN1eXv3Mmrbj3DW8zmyonqGUW7hTfeqjrg56yWvnNqFxve7WjzvTdiTzCfXSVk7a1HtWTo2aiT3CCStED52Q",
  "key23": "bg84BeR8YZ3hECdwY7oz5LhJM9F1aTY5nHdgJKwLRVaUS8Dvg1cqLJUvPF8su9W4ds1LejEBm72pt8L5yQ5xJwY",
  "key24": "dfpEnedtvZtSLyFRpXxHKbvDQW2rXvtvA8okvbdLR22qkiAqiJLwkGLtVPmWmd6ZCk1RkpKkeZFDSnt8kg3W8tr",
  "key25": "4vR4cXUMuffAPGqMsDCKhXGYgSR9GFYivVfjnCwkbVSnUicVFtwCYiuqFzSLyUuCtyda4nfSfco8P4WTTuHezbBA",
  "key26": "57adzr52tABhSaHH1BUPzkQ3v9r1VjhcU7sfZKEnk3fFfiys1LPHvEu6ftFvbh4Pbw3GQ2FuAi5HVKX5dhYWGzMi",
  "key27": "5qTNBW2Wc2gvR4ZEF6LDMLjarKUPitf2Eg81MxjAcR8ZbLSKuESdmtmN1mUe69wvC5HPxjyr38KkuS775FP4YhUo",
  "key28": "2tkvBgqU6LRpVdhUmuDiv8MejbZNngaJbb7uxLsbKD3xhu9fy3cJJfPS9NbLhuA1DD8sR3P1bPA5sV6wsFcqQFQH",
  "key29": "3GbeMSAKScRCHqTqgm38u1vURka9aNiUz1vFdDyih7xuck2kCd1d8MEM8g5LXxQbf8L4p9zX1Py5twhKNVRWZKDB",
  "key30": "5eKZsJKmzt1gdd357jPuMuApodaF46WRvvpRzjbUs4kN49FqMSJWUYzE4MFqtRFs98DH8DANxBLro3T4tivs1vNe",
  "key31": "3QjWHzW2S38xWQCha6fm4wptQ4AC7w5Ejc7KZwfDVAWgAaV98wnFoaqGW6CUjZh3rakQDv9psuqDpsK4XhvUfsEy",
  "key32": "5UZ6sEfDybx1p18vpscffn9fXxKnXzhySjacGfo82ToBhsXRvx8LxZpGNwXcj8gDREu47c5sPv1afNPS7Cb7uv5W"
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
