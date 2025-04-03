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
    "FKyeSBMZ2NSd8Cf9qMoUbUkgJD8PDX22XWc3kQqbPPgTyPFREqLjXsyHDLBGCSRsQPXPYSG93Bt2HmKK2V6G5nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vrrF6FZR6gVo1bxyGcfgVSYmE5gHpXr8ckyk3b4d7FXeSiGWrtnGF4jjiRo83rGfxRWL7ZAKkdXCAG9wSpnVGm",
  "key1": "47HAnT7MMxE9qUs52F1minxnxWvZAACnZZLfaaQE5VwsMtsjGEBVFoJa1V4DS5HXzjh6BW6CJXapVGbQjtkeSY6g",
  "key2": "5qBgMbxxpweD9uCXSqsvNqsRg5n1SmbaJqNDKhyQnCcb2Ej19Dz2VMgAsnGTYQgkfGCCh4xVjokZMj58BEbeS6Ld",
  "key3": "jQ59mGg1ZCaczbeq7KbMn93jNYRDraxzLwNwrrgLLcMDnKFNTtt155CFBT598ddFzVxsLVqJuSK9bZXc7DcGde6",
  "key4": "s58Y1rkQtLvmxz1s9mVbZZgw7RDCXmCHgHLHmQYoT2DMw9s3G4TQFU3iBMJrQdESLM5137GDBVVzFfTZousZiBZ",
  "key5": "qx5ygiTvYRUvjFPNHctD79DMAzerWXzoZpuduuMx66KyHzBLRVyb1i5yYiN95svHTRY7MWHLQ7be8rQmWnSZ8nm",
  "key6": "3WbpnZRmZRAHHi22CwpHA7q1Z1CVht2NmXUnbTe4CX1TMihyLQEouYmeo5cifnE1FBH8vzYH24y6WbMnK4UJGcVX",
  "key7": "4fVo7ArEH91wzzn1X988WctmoB4k1bHTCuuyDrBUDo72n9PPH6Q4cte6Ww4vwzTYiunk8kcvhHgvRd59iPH1Ukw8",
  "key8": "FGk6odjKLGoiEWUCc8qP5bxRgGpbQQpqGK3kaizfKeoT9Xax12iAubNZTcCH94j1E2hhjDRq3kFij6n8uwBRMsv",
  "key9": "t7EpUu8RB8HRNw1gJe54jh3hruUfaAYjgyY3oFgfHmczrSKwTgFRv9gTBM7zKTuxs9Pc37ATZxCUGvw2YELZDSv",
  "key10": "62qiHKXz4tJDpV84biNedZPCp6o6kM26DoLi8P9gawiB4kGUogWNFe339Lb42hy7XESTkLHgkFT6j38CYcZireCD",
  "key11": "5xsau5Go7wVCLfcSBFsFLu7cEYHZZ1DyBaYam3nwhHQkA8pQCw9AuLMDnAQguUQkcysSYvrrm1mVDPZgaavhXz3W",
  "key12": "5piuJyjQSba2QwjDuQCyKf1r159CfeuhLtx2rLFMKzxP9JGJuQsm8p86H7QGVU61NqvZEH6qAXiiNnvBtqEcQtww",
  "key13": "213RjvjELML6oDxNMFTBLpCVVYg4emzScFZ74kVqGZQrYfZgGzpZPzdDwnn1MAjUTwKfEMKs1A8E6DGsjyWbowX9",
  "key14": "7JmJn4mVWCfY6eAuEBuVadi5TneSAQvKFz4iKPSdjZFRtsBUwDxUidneLSj1nq2ZeuxvV1Lh2H6i4C3nmGLhptt",
  "key15": "2NkrwFN47BUtPhbvGcjzy57w35seFpMZekXC7PcbC8LzKXUTpYWEpbXmFJb3G6WUPrRNnwDKnkf9YToWBu8eDCFj",
  "key16": "FEr5SR5UUj9K5gr7j2eYcQ9LAcJ7WWc7j5oVgVh5LfDRaqRB9JFaS8CfmeyegPRwJf2ax7aN1sHG4y85RE8jSc8",
  "key17": "27Qj4fiSBDy4m4GCyV9c3RtfgFGc9YznHG77qMsarytdcDeV5KtzzBcv6wkPh3jzQxMhrViX8dup7UhPj4pP5Qus",
  "key18": "3TCyYzqUiKNxVu8gfcxXzvBCrUHPpMSSz72QQ9jJwfQb2rrCBAFGaHiDpuPonpMSS2cTC5eLXfiFtrg5qEAxaDZ2",
  "key19": "2nAHP5jhmd5FBJEbpzuauVrpDHHrTzGb3Ax21wyJTMZz9mQ1Lq2owgHRRsu65ow5oAhneaHCsy1BtjS5Fq5Upsf",
  "key20": "2S1iUHVZj99iV1Lr1D1RxYiMMEsngN7z5uwyazEyJrBaZddqVCH91cXYeXFYpB7mxzj7cg7hUmWP5ZVdcnE4Ku1G",
  "key21": "cTCgP98oNeR3knvB9dkxZfpXBpurYNwYyWY7gefm9JM3kV1EoWGGWPwoU1sRL6cXgrhG8H3cDXe1LBYKcn12G1X",
  "key22": "4p3NfCiRMHN7rjtf9HiGcqLUhbTK3n2hmtFSaJGtUwoohq6ArJdpWZEcDn1dtQtYyt8uEWTrMQWWCkdjjZgAb6so",
  "key23": "hEdmnnVMtUhRQsKQq9jhXUvspocsievjShrKSv12up1LQ3aaNL9WezEdqaALaNwtF2eCPuGUS3u2LyZPmVoxroq",
  "key24": "yoqL5ZvuC2KWHrahvRxKxMwSuy3nLFxk7jt3XHrBMjC4kNiNpELSa6SqENRsSKFVBv3EPE2KmgwXyVozqF6NYGS",
  "key25": "38hv1B8pRnjt4KvHeT9fZVmoPAtkx6dG7n4qzHfAwchcG2NvUy8VzZBQrgDDmVU3LYzPQTW6Vuyj37eq8FdPbrTb",
  "key26": "2CbonftucLTnXZF4a9JpZ9w4ZMXjA1Hgr4koNoXQcLyQb6opKBtfwpc3PLaEBs9PH8nP2qUHzdibTDurjo34e9ou",
  "key27": "3P9LKJdMegdPoKmS5kDGCZJ4ExHXbPKJcMqTAMoEB1BNT1gs2QSwkH5wDShKKH3jKwy8dzTADqiyYbYErtaGPYnE",
  "key28": "MYKFPpCdVuodEFvRdmkh7U8TLtvYoq2b1taXLqUkxkkGC7gKMG2f3TBRbMiiLKLSo8FAkgMg7QMXpgTwyAvAUZM",
  "key29": "3ysoPNcrRXspN9DcEYDWwortBZki7rwuEsXzbNiY5dNdnHptSx2v56KDzbZcxoRJow6XPtUTyr1AnLWxEtpwinjT",
  "key30": "4JhAfz5gE3wMNpwvJCuChU5tmGdWzzPaNsbuvaTtXDzLTXBJ8T6jgDi5zjL71Gpv6QWyPTcR4cnyQDBx96dxxWmE",
  "key31": "3jQqs6sUgyeEBvn2j1HY28mnoXHTWyQdcEuPnBUJhdTPcPRYZSX8FrwX4zGmpmfkkqQFfoPBJKmj2hMVojsJLWLT",
  "key32": "5gvuZWRhLXwLhBoteDXYYbTfN31Y199ZfcMycAzhqHxsvh2wvREo4NeXwgD7Rf73VN5FsssxgGYrtP3GvLyVMRXF",
  "key33": "3kSmabT8wEuUrbZZKuzLD8o8jKkLZwce7cvJFzBjufH1PMQeRPFi9QGvZJZv72kswf2kKoDinKMVD3g1wPXU1WSo",
  "key34": "4fS4H13cnrTa1EnbtWs5kzmMobuB8Zq2XbneAph4K6yS5FJZZExNEa8aps4mfTRrkuYFkAJMWgvH8U1vHBvZCKsH",
  "key35": "5Q2YvuWuqmPj5FvPs7428Ef7pxZMVtGBA13BmpSMm56R6A3HgrZpNejk9k18wCfHnWb9HdRn1ESX6cNng4t3AWax",
  "key36": "5AL6CwjoerNSCvjC3pckK64kUWscDKezhRsQ2aD8MWPxAZzwencUHow43TbhSkUffQNKk4JBntCAhV23gZTWN3fg",
  "key37": "42EYSDCC8ocKUYJTikpoPYvTMrU4PAiZZfQdzjN4cZNdY24AjGqqW1Aake9eSLk3VZSAmCCMPre1mAUiUGfGgQPx",
  "key38": "567wpfSBt3ttE3FnQTrZUKgWQ7uTSihVkvxLSVZ2aybdDwLhib9Zie9KCHzxBLuFPPAKXRBD1FX4q1rrtY9g4SEv",
  "key39": "64hgLKa6nSTVvcw7PnmieM15JpX8MLDuUodCpyYWgPnytDy2VuJD2FUaGn3DWaoEjmrQN7xnCi4s4j3969uA2XTq",
  "key40": "pb4qfckD4DiRg1qe4mwQcXE2RRUWXgcSQD1dRRzuWEpNx4vfyNVcwTPr2kTbc8sfbiCWb3vVJsQS6D8bdECFHBC"
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
