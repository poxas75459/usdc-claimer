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
    "28PLBetG7xsYgp7cdAEnDyxdfxwxdye65AMud3gdFWGp31TaQgBc3HmX6w5LMKWqHUR9d2zTRoUGwDepCh9Lf4zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8Y5Syf84dovnDakmEN53Dg95S2YwLPUkMAPtU9mCEK9MrEHodcM2iHgVmrEk28h28ftanDecQ8gGKbPZtsRRwE",
  "key1": "4Mp6m4Edevb13aR8YwpTf95B9t65DdvJLyPvrLceKKgba9ZXq3U88LULGKiqmvNzi56c5XYfqv9vh17RAgvAPN4S",
  "key2": "3aGcxSUpFgXN3Gpts5BuUqrdXZ2nLmiLcT32nJTp5gxj8ZeG9MJgAVUKXes7bdLCr3Zi9XxUmcn8S7s9uJv61avK",
  "key3": "49gsbB6KTTdtT1Ztbd2p88anhFf7kPTgAT8s3JtxHEwGirRCZGNAHmPnCsu7K69hEV7bLR1iFfcGSk6qVZRor5Rt",
  "key4": "41SGwjwu6wBejQGtxCzbCMUKJgP9xQKGExz4kGbo21EzABJsXjojPPQYVb8NVhaZ9EAvxLqkkwRmrmHivepufCJP",
  "key5": "4kqLaUe8nNGrtMmqXXY88TB1vbnCFrZ6AjwViErj87AqMomZg36eVBAyiSEqBG1ho5HcMoW3CzPLRZkrFzsCfiwF",
  "key6": "5WbTz5dsbTx1MGFU3UXLL4hxP6bKqHTRYha7NGMT3Je1iCb2NNGRjUxpwXLDJDbA1RRDHCsUqq7i7ZMbfDfXh3Pb",
  "key7": "AiEWfJ99cZe7pXvA19XfASmZkmgdtWSSVNWpovnuge9S217r3K5xHd4GQvjaHMxZtRoajzcAeoUAFouQRMv14z9",
  "key8": "4i3hc5PvR9M1F43jxoANyiihzptQbv8kaE1Y9Q2wYEEC8iDiE8yXqaKLoqwdCXaUVyoMqQjCDbTqsywRfdcfE9L6",
  "key9": "4TJLDMX97opX8LE4FuTCV3c9zveBuz9kwdsHUHuiHAdXeGx5vyNtRAgtq9qUC4aqV2Ua4n7QmvEHo7um2zsoaygU",
  "key10": "2yzcdgCdA2kTzdjtYieHhMUEHPL7jmgbNvsmj8kzXKK4aZbvedYud9Q2Vt3hHf9VMZGQsKbvnJuskykAtVDjUeP3",
  "key11": "4R6D4AcH68wG5vNixGxH9q3ZMuhQmQeAfzWHYbaW7HQAQp41uLW7YLGTs8YDNU4L5bLaAfm2SqsRzHWkN4ywpHA8",
  "key12": "3Ei7khU8sgj4enC7T3AbDsDgSEZrRpjKybBdRLVF9kJqvtCsYpsxcgATbNZT89uapWfq6GRQfoPoobpYGCNmoCc5",
  "key13": "2ng8aDvtBpsfto6L5Y6XXtmS5fcqyApTvtfH9zsz5CrbHirhHc2YgW27QpxjmWHzMjg87DGU3zbywR4s4TK7Hwds",
  "key14": "HPywJhvjJZXJS9HTDnUFmoqEPuB6jSXHUMz7oCUooA2crm7yvGtSsiasnMxU37agrYuuSnzPV4azouyXaGqJZdF",
  "key15": "5e5RCXos2CVZcGDfR6tdWHGDqrUdbDBV2niznPYNtdYUy8T33wDispGrcZdgZepnWrAzz5t8G34orb41B9ufnKhf",
  "key16": "5oQfQkZVJJriFV5u2BPfmGA5tkNC7BVhF3BUNkBa1gtofbAt3ujzCdCHPgVSTqWDMDn1wZrvNuQrh4vJF9nDmDhJ",
  "key17": "2oSfXUKW5kw4JCBoGFs7GSkUa2zvbNNyV6bNe8U3bcEBqy6RroKXySKEMV9eJcgSGtZbgRdEDSKZfvieAMo9vsAH",
  "key18": "4iQQxqRU6sYFecGmm34E2CVyCw8sZU1v8puZ2N1LLBSkarRDtLN1feuzxG1P8qJfE8536xg9DTDcs4mNk5x4yzp3",
  "key19": "2az2ocwEGHoSrazniJsgqvFvvLWzqaQVFxcmMXqtBizwzgySLQxJZiJcxiyP2hCC8wvoBVVXihi3hokopeCxNPj9",
  "key20": "57o6awFF8Em1QPoeub2PQ97BJCWZxwirNmgUtndoA8iaDJoe6c2eZTb86Y4nfnXbFsoXR5NRuaNcxcqeSHKDVpV5",
  "key21": "4TnLqC24rYbycjXXoxRiLSoXj5cnuSZBdKLjF2PBckYsevuPaqzraPZ2e77PahrneGQ3hvesZdtXCP9UVwZwGBT8",
  "key22": "3nuQUJHdz2EuFpmN4yvsvVBLmEpAu7MsDou8SSjtHAZbRRe4zSLkGes66vbzBUQHEw8tTTXhhb3kHb4UJUvq32fk",
  "key23": "2uJEM12eJNzDQkigUNENf6wXqnUFv7P6yaxoTaw4LHq3NoHfTWw2Q8CpUL4YSnfxhJMKBeWsVBNJXGy12oNGCxfn",
  "key24": "4bjDLd3SZUN26hnKBdgejTpUKK23QhbFn1m6zgrXyQK7xN1JKD4kBv7FB1n3c3HjvJdNvqpVgZh6Ui9iChysBqGQ",
  "key25": "3RCv5DoMj9C74C8fobbdesuVtVgvE2mqD2ghFeRKvVKnYDKeGQptG7FiTkRKfdkXrFy5u4tcKpHD1qWfuNgvNKse",
  "key26": "3tFn6ntRoKbXF2qDFXgHoSFMyUDmMCmpJR3EPmxmY31qsGzXVBTBScFCLPcCfK1BoMRpMEjBBwHnNyXwk8WbN1ri",
  "key27": "2tRdNQSzAWrcRvNGPbM3kP8YSi1FmShJxF7aTGoTqW9ZWaqoMYsCScynWX85iJV2nrBRuCPbK3zfuX7NLJrPzaPL",
  "key28": "2bvDxjm2SqAEhXWJxyiV9JYVNbzaqTPARUt8N3LzLaudr7K9fHZqb21p6rDa5BNAidQx2eUuYRe8hxbyUX9ku8oe",
  "key29": "4DVbKLUsrb2p4NB4iecdq12qiZ3cq79eSRVb91bzwA1WnnoX1EoDhr3Hg5bhPqmysJnaBoVD8vuPfR3iEtS2xFav",
  "key30": "4cHVA5QXLiLeogHK7X8qu2dMgoHHeZPtDhRFqwf5UxiCTf8mgPuYvU3Vx67QdBQrTmjYBVTAiGS638mDzoUwaQdU",
  "key31": "4tiTUzhaH4JFNjiRAJwBCVW5LfAta6LHt2dA9Ye9QqSfXGKYcoAS7iMQJDtTu11GUeStYgi8XFnmbxemvTkXexXw",
  "key32": "3qUuddVqjvnDeU4xqMSXN2VAYKfkz3a1xTgeC39tn2SwG1KQDQsi6Ayyh7NcpxAUc8Vtnbzq94vByRrVKahojYi9",
  "key33": "4ECbGS2EPkpppiELBaaMuP9Rd4TitzP2Seb6jid9kGm8AaYxro9UC6cNf7rCFNKiqTKNJAERAX7GePoDefqCXuWA",
  "key34": "4PxFZFgcwwA9LfyZGMW5pzFCDutE6yHasJNDv5uMaF23XC2bNTiQzqgyBomemHQ6zMRSktmjfdit2LHcPECHMh7U",
  "key35": "aMov8k2JHP4vh7G34NMjpKQ8j5apLNjJ5dFkxhG1j3Ho39EzU8rq1mrBV1SSBP5zqSmgVB6L4WAcXCCJfJ9yEzH",
  "key36": "2Sx6A8UhsCcwEYfsWHUzoAdXofjA2ip6gJk37iLcp6X2J7qRvKePcVTXYy9heGJs8m3wzcv3YSnez5gsDqReTWT8",
  "key37": "55fW1yPspHJ8BVg9hBtFXD9kJGcijK2nkeWCH8AvTStHRUo3kvpsugCUQjs9JL3MRe36Jm7xLzb6Zpvmjo2oMNSR",
  "key38": "KfW1PC7WuMfXWn5V5jq1FeLCTsVfD2FAaF1P9sG8WV9ZqezaDwgWxCf73xGufpWsUCmqNC5qBcnqWGrW5HnKg2J",
  "key39": "37Vw8AbrDdVQst5ap14KYXtBsTE9fhrizyZ8ngaGV3GbynapMofagNjoGxinXBxiqYThEoGJyU1mQqpaxeygBQMz",
  "key40": "3aD4ZRWXf7MhmPUTTF8QAQK2SKfG4KNavZSJFxXdbFHBo8pHMoP2qgtbFxNv1SvxjQyJuQxrbSnBYf1dFDAErSeF",
  "key41": "3KpeiuNP8pUZei98eAJoQb3Wun1Rcr9Dn9odkNSyyFP8L58KsiFDXQWa5H3gDUPJVkyqmVKv87wdvkkYmCJYm8pD",
  "key42": "4sSj69u3PJ4J83o3aX7A4TxzEHPGbWqkoG6ZGH87j6wiETrttv4Qrh4SdnymSyYng7RdFtHhMffVGFtWeRqeDh2w",
  "key43": "3drRDvr7ZHFUAPeuPGzwzEhvkXhz4EGJb6eE2Z9MBGDrtmQcR2szDjBhCk7tLPBrgYg3MNUoZXzmjx7eznYnVvyY",
  "key44": "3UnGJVR1KXLfnZGYCMp8jbv355uUY9DQ7bLVxpVaadZYRMy9b6BHbgzYsNrK9xmQxh1WpTMiY3nmi1xxNNmYtK3A"
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
