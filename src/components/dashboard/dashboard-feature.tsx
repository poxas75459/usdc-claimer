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
    "2BmFGHLGTUtijsJbnKWF5duzEwKdRkJaSvZz9qKRGdjrtK9ZcTjmzti7321VXFz6Bra9uLXUSi1C1x6XzmL5cydW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpMwMzvAzrEcYtgF3Zrg4wndGhKnsM6t98sHX37ZpUc5mohUn1wjES7ksACafCfHXq1QuiKBitbzJgcoG7n5iv2",
  "key1": "2UYTJULFGJaH7nerzY9cWEGc2vvQssCTA5wU8KFHWPffJnctfBkd2BJHUYzrc8KeC8DWWfcdQWGx1nUWE8Sr48NX",
  "key2": "3M2G6MxRqbhUd7Q3nxGCGVSe4wrRsj1KyUJr6y429MwRTAtjpDji2FHQzbCoB32eXZTYYtMWCqW5HM2XFbG12ozo",
  "key3": "5itYRHeydCqpCWLiKC7iidWTBfdNjNpqitn6rtLVknGpnR63AG9M6wD3hD9zhNXdHam1DfRLvG3CLbhkXN4UpDUo",
  "key4": "571TjrMPhN4tMv6bCNFbfBoCgQ5FpQKX3oBUfBUnphqUW1TcH2rkXYLhyrauvQNcX7CTXB4hc1aSeqb52VNUesbC",
  "key5": "5azKzUwXV2e96JciFnLS6K7sPzXTXHaBdGFAvx3QLH5beUnVEaSvBhwRTy6U4iWMpvfLXTa1HgB79sdaFdw9FHcB",
  "key6": "4Vcf9TyNz8gpaHNCcD3fTy49pt8A5Nfuu8oajWsgVa6mU3Rr2vRg4zyexyzCBDbWR6UXkVcySg2L283ATePte7a",
  "key7": "67VKf7ggDq5fNRMS2SurrpHY6t3gXjDbPw1U8c64YKu6wrtT6bAcEiTTzptmuQbrF3agqMU6RvayWAPA9jGkLq86",
  "key8": "fAFhoCazVEyoGHnc9iEqjKVVhg9eHuZu25MZnZxERifioz4Bs1VBWFBBfd9fG92JJtZpcoutnmnQuaRPEKhCYBk",
  "key9": "4krMBufKX3J73s9yQ9Zk9JZJat8SX1RMPCymZuC4TPv69vh26U8SXvDc69o2bCuzV3HFC3pQ5nSL5n9tujwUenjq",
  "key10": "5Zyfhkhqa5Er4ekDCWSHKa1p17PNkR5mxgr5KtaKbfQGxydCkUcdar219uiJhRkEyAQHSzQ2aFgfzpUhNTuxDjwU",
  "key11": "5FWpKsB6dsjzpMUuHj6vU7yypdJbWLPHWTHZWXygwm1b1okJjfoCT73H8tjB3ra3nkmJyfkKorxUE4wRkNqozEP4",
  "key12": "3MGUyieXoQZzLCP9rw8jCJDLxv7v12uJb9bKQLDUrK9zLNteGVDPe3i4mENksjTdBYRU42sGLvYQmmimrKw2BktX",
  "key13": "4S8gQX5yR8xd5FaLV3ChPEPHQYE9ipBiKgUQVSgw3gnZW7guoDVvzUnEf7RcfNTbPB23g17us4C6GoWqqbBFCZ7T",
  "key14": "2iixDkQJ2FZpnsRNbYnLCWiVY3hdx7hP7P6hQQyxKr7kJGSTUHgcqbXtjEPTRoD1e2AHDQrsR3YKFnVn5JrCA6FL",
  "key15": "524xZTikDS3ECAsQ8yVnYjZucqq7SV1iAWA4uGif9V8xZkc93mVsgcWC68qSzT4KJocTL5SM6n7vJXKREJMzg15K",
  "key16": "4gV3iEdwsBTUUKwLyiSDuomWDJrHVhnZdHLSTkmikPXvnVvjvvbiGo7CoZBkBxnSpBkE8Y5wJbVS5qV7fXo85RqL",
  "key17": "tDNa3Znh8wrEFi8FQ815sBy44hnBxMneSbe52tWUJVhrW9aa9tTK81X2wP9KgxJevmxHqraJZbwjPftba1gQMdY",
  "key18": "2L1jdDreMhoHyYHueWx7nxy5NRdmcxPaqhtrSKooezki6DHH1koAsRZYds9N2utXufKhx5mctJ8qKzwk6iiypDio",
  "key19": "LVK2oEjhkFtFajP3UwAsgRnt7ThL6U52Tj8iVGz2JNVYxyDEcLU4qQ3RNzhPURK4WB2R8RkJyoazTtLw5eLZYfm",
  "key20": "a3b2f6pLokL3DbwT3BnT3rc6pysL41Z8DnQdvZLcberLYeBMVu9cHMdje4bZacBiQVV9kcB98zjS5mPr8sTxxia",
  "key21": "2zPp9hRYamcphjXHGP15o7rr5Zy3a9WrmR8Yr9x37jsbiXqkadFY6gNewAKC8XxxcAGudCPeV6zSFbNVozDQfpo3",
  "key22": "3Vzk5wLGd3Q3FVmaxnQnDzA3CdUqvJ9ShWdoZ1PaJkZJUVdAdoH1ShAnouWFTx6746CmBqACenjSq5hqn57zqhYB",
  "key23": "2Xa8SyVpZvxJkqLLfuVX4fq9Nmf8tPPbJikiAJDaFWBkGd1cpKTZ4H7e7ZNNFHyHGb3rqeUHLzyzH7kDVVDkxNuC",
  "key24": "3W5bDAitmnD2kZsRswohNzhnuF3Cix83yE6tvCPefmm3kLeQyVre8LfnYVk5RD61zZaDdTi3gBJLTggihCjkdXTB",
  "key25": "5QKdkc62rFB11GSSjAiQ3ufHLrae5ACrBSmK5nAoMrtTVghdANdk8QZM2xaaAEzXU5oNkzUDocW4FfopthSQjwBs",
  "key26": "4ca5ipVuR9NrvYeSbzUv7Bk1Skji9rHPLzyJCmjLGhsoDuCmBnCXDH1LFeJaGMm1Ky5kjtab2281w1dcH4s1UJ1G",
  "key27": "3YEy9eYgWf9Jg5KTqZe5MYiKPS2EFtNJo4cEW1o5cvgi8Pa45MKSBgH3fAs7KSyreZ8MZZU5SXz71CL9ND1k1z78",
  "key28": "3gnj98Qt4vcEdWcNsi2qEiKzx4cxZ2YAW6oEKQ4kCi56mxeJxNC57HWiX9RBDNTciZWg647xD7MmpR5c2rJXS57G",
  "key29": "5rdQKfQch1v5hLNHJjzdyEjba5qZgehuKaWWxupQyddb14XoqPyXp8MMvhSPG2yyZEFfEx5YHb1gG83zEbzZveHL",
  "key30": "3tNztWaCJgf5xsbUwFnHn5bdTTaNUXprhFDZd7zpHPEStrF65XbMpafa6SodAjfSZrXDkZoVHUewd8BPDY3EKVFN",
  "key31": "3bCjru61TKZ2MUtWiRh8wC9AgUMhvN2Zg7SCV3DBQepiDrYbdEUDfoCQnq6kgmYa6n2xUEdkXB8Y4C6kNEURgeLA",
  "key32": "a519FrrGRUWHTNut3iPVJJGFQpSfk42GVccWb7Q6ySsreACSG6sDmCoVWrEFYJai9g4gU93751jryNzkv7vTHGG",
  "key33": "2L1vhAp5fevwt5cvy2p15wk7XuqQqRQV5MA4MybasmX5dfj2vsfsQDWd76H1wFcWa2r8oGNdfdQ8mHNihSznuKi6",
  "key34": "2nfhVgjSc7AjfwTSsJUSXUY1N1zZNSqRXapWBJXaTuycGQQRhSMfChiEtrixKwtiwpiN71h4FCsbuqhkniYy3q8C",
  "key35": "2Jn2jdhwv5jSDmzCLYJKpX2UL5StUx8yrsC6qwKTgcaERjcUNPBLbBaRSVL21GGyuAKwnePe6ggjfXFmhd8fvb8e",
  "key36": "4Eu4aZ2vwN4KKvjwDKH4reNFLRrcbMVZ3iWAo114FNXbrpY43ZP1EmbXZrGXtRAkPSL3jiDeBSCxwLMhfyfNMSgs",
  "key37": "4N1kXmfyGj9WD8XdJJKtAqakF56fYisfwENCEsY2ueD3bjs4zkUpfPtnKJZQJkkbABQYaB9xjuJXSqFwnqbx4exb",
  "key38": "4yHcWhpFBgiwq6sWCPFha49hchQ8G4QLcXZ2tFQKU5KCgqe1dmjcicKU99q6shSJVUCRcwN961abN5PifV14VA42",
  "key39": "b3G3mw2k2ythQv2nwxxusbXLv9z37TFSp4pDLEdemTcfiJZFe2hWnxixywcU3JR7CwkG6g3Fb7mwmZyFSVJAj12",
  "key40": "5Hqvmh2BAyKuPfdgxyWgQeG69ty2gRYeQR6Vt9Ut2mfguQeQiTQoFb3a5hZHgm4vSd2Puw274mse1Lw5tp6a4YpD",
  "key41": "27XZK2jPkaEgM8qKgEQH4om3ZDeL5HVHtMY2MphrKvvPCaQZzK8qhpcLr47TPBpg8medKdyBPNYT8hxEqkXJ9PCU",
  "key42": "vnGcJdQwnXUJ2WfA1YCJ8TuX1w4YUHS8P8hKwSQ3PDRBEPba2S2VKpe2dB4U1jJmM139X594Jng43BdtiUs3DVE",
  "key43": "3sGaLbYZkZZ1c1RAUHsWKW8pEJudgrr61ULLG6GAYZpD5DDPQeqsUHTRvhiQWVdkf6QJEoqZW9MKpoLqLcRudYCQ"
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
