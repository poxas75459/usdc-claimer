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
    "2sfVfgxyVEptkHCCb7r4mHYVaR3GopPn4gSj3Gr5qwJQN44AY46BNLqvFMAKDgYRsrwnQtwypJ65bLDXq7RxH4JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TdPwRQrGF4vCiudjav94WWMw7Vrqr2W8VpiqdvXEJ76kthm1hg7Q1LFqYGAbF673wW5QefbbcMx84riTRsmB4p3",
  "key1": "2b4fuTkRLBhqYjUNQN2RrACbvC9s6ESnXbM1rELCKVfUhqMhPGbfgJcUMiAQ4qpbGxhnj4vA8X9FqMFGmUwH7XbE",
  "key2": "2W9c7npwLiiX1q2N44EJVfGE9AzFTmPoRttVtk3RSzx5bDhLRPvu4ZQs8EAmPrgCwh2Pmfbr2f65jbLWQ8xNNFT2",
  "key3": "3oWBPHoisPzWQX4LZ9TnMH8MFRFeQN8f1Hy2Hjein39deqqcrvRP3kWHfF5bnwRsDvZfg4ixKyrKbkwMZn8SEYRm",
  "key4": "2kFS3TipMY7hYVVcPLMUxs5mCRzuKUPy22pBbdauYboN8f8K5TntvPYtBVk4XW7E5qR9gvJ5XLU4gMwRWAUk4GYu",
  "key5": "sHiNnMvpcShxDg4AA5VW5vXF8Jp2denFTGbAoPnXZypkZKfPHX6WSMhLfscmvb9ErMpngkCqBpPfg5cFLR5V9Zt",
  "key6": "NcyiXvviKy2nWmRzPFQBGLf2XbHMfoGfrQW89vu9wTgeUjTC9Gq47rg7qCnTR8HruGfS83NLt6jhSbapuXDNznc",
  "key7": "47usrpgPwvKVtvQV1BwDAziUQg6yyP47q1qdKhUMhyNqHBfD4QSWeoAUBZrLbZhw768H578Vn8NDqh94xc4oYxdm",
  "key8": "22Jkn5BkQ5Nb1htqky5NMzgdiBH6YmRVCbEL5tJFpfecKubjWkjeUXivT39qHxBsuvydkvFxNYqp8rjHvZwSsJsZ",
  "key9": "4B2q6pUcFXyfVpJrCCpc1WkdPVWV9GNA1pGRaJAjUczbvpfTjzWTf35gEVZiW7PQYiYAWvn59NNqr2fpe1rH7pCv",
  "key10": "4uwHSZKeW8oJUN1sWCTb86hakxQm1B4uLKPBgZ1xAV8nDKTo9DyG5tnzsk1ys41BurEc777AY5Jcf6PBA9Kr7G52",
  "key11": "37PzPBBbVEvAtErU5gsVcjBvSWz7nZv5Cizn8Asr8Y1MY8o88xHr1KbAxi3ihvHhmeAXWphZd65xBdJjBM8GmPXE",
  "key12": "2wcRr5Jf3k3AQhR4TvqHwJ5TzZ2apv774PH5hp9hTGAq3kWoMGZw9c4Rfc2oJm4HWpstkJzu75X3D8gUVyriKyS3",
  "key13": "2iWLd2UorRaBCvt8JLriNNuBbyDonNBrDukQFAoHmSNiGZj1EXSc3zMebSjMr37VrcCC8i8FTDtRe544gCPPMPut",
  "key14": "y1VCH1kZDhSwrV79bkvtJ2gJLvqpBEUFvXnbr3v6t96SogjXE3QekPqW5b8Jy1h8twKbWbVgPPLsh1fBMAS7wDg",
  "key15": "hJCV23fScgDDz955u9A1tEZ5hADE3mw4A9JQQuUBK7NsjFtj5vbETFq5fcdcGh3ANEPDKxPRCk1EF4xSGNVhDD8",
  "key16": "58XYeQG9fGhEhEmniPkswsk2ohLHEqxcRLvGkkXQhDcYd3tYErxBgLZvZg5KTEC7otf44owzfUscGU5yUVTAf1Yf",
  "key17": "q7yT6czv1pMzfC19RZ1q1AEJFMgiVMpRSouAfo5UF5FM72NQaMxaaRKae6SsQz1FeLRkw1Q4kQfqoAizAoFthGv",
  "key18": "3ywEaFLemHQgvPaXYS7X9ww8cnRifYdWpCi5eduBUm3WHuKo7r9esniHRMVAE66n7ehHh4PMur4HbfsBkPa6qmMJ",
  "key19": "QzGJ4C9XykNWe552ERc6HLheDtHEnptCvQkw4pkeHmVBBbrXix3axmtwH3mFEBWbzsWMJUCwQcDGhNiF1oPvikB",
  "key20": "4pwzx1YGrkyVFFErHFbWXEr7GBHccxNQo1C51JhFtQ4GTAQRXTBsQoiP7AZcZZp6kTstxPUrcnEizncGjPtCvw54",
  "key21": "4cqq6ZUgQKCiGd6k8AC9bvSAbvAR8dJ4ggqwKb6kSx3WnyXnQrdpJJX6DkYGJSD4Fyry6TqmCtaG4thjyoix9J2Z",
  "key22": "4Z8a99GF7D37z4kyjdvSuDg4vorvTQsWzk9YTt6rnhTG3JvkAGr28GqoFa7z5KQQP4DdX89dALnTXp26c9N8Wnh6",
  "key23": "3BBBTsbeWsSCoBWU3beE34BSWJ1j6chqijgdFz1KDEXpvGPdafJ7VZ6VSSmVEguceqnRoHpyzzjR2GSwhiyJTjKq",
  "key24": "2ge3gPdvvZ8ZLxrawbeu8DuM85x9aagT7PdXmwFPTaXDsDdDuzS1WGVHsYnKAH1ZDcezzh3nTaHTspVo88xG7GEs",
  "key25": "2pPsHbf96DByXp85HLhwhC4zCn8xhcUbm4nNrniueA5EJXPtzsdfFr8nLsBK9HdZjV1hFV5oc5vuGJ6X6bPtwrjF",
  "key26": "2C21aK3mYtEysBiR9z49N5dXQ3fMqEcwosWwG6VTRsu2wyvePsSc53784ovQU5xHkvgjcKeShVMP4aEJaiguYLNh",
  "key27": "5rBAhV6X1g9M4FYRA2hUnos9e4XgRiBqnmzb2PtHmiXyZ9UMq2k54FgdbvP9FGhugW7EH4H2b4dbBZ3VcXJonqT1",
  "key28": "2QstMGUQFeaNszRYe8gePXE3XwDgWHdWgkJwSNDQLWWy3MNPtEedv3Q8dzcT3Z4o3cSCwoRsWVqRUdCiNfpKEpZA",
  "key29": "2YbfxZLEsNa21UzrhujCzMnupiMGsRWDMBVCm4U85y3tNRUESbnZCp6ZMFdhV64de49xckfb3ochH68HFkWuhura"
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
