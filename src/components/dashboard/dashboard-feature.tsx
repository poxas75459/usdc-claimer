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
    "4Gb8UYCS3PAMP27WdthnKVAip7WS6mMKzrYfSqDhRHy6VcTYyDozVvoiNqopirFTiW7Evs5Cjw1vyqYeNhW8kddB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JonxiVHdDoEEogXHEdCQNQn42jrZzst5Xy6EVB9mFg18DhzDJgRJ3SfvjQHo2aTdP57FreaX7JkMG77Qm3FgZWD",
  "key1": "53zJiFV5KEiDgWEFoxwhsYYsboAm386zZm3Yk9CnjbGMPkmXPJnz7a3Pw63Zc3RUB6iwvR2jZyfBs7vdV5RxBfTi",
  "key2": "2rhTCtz1AHXtnEapsVb2h9zHYZq1PQ6mETgaorYaTdx6ozQLsSamVDVmXgrKub66GboWyxXGdrgSJKuqYMmwaLFp",
  "key3": "2WR4oQ79Em1XCM676cDEkHCL74tEcGHFAUd99SsF6m8CtQGcgU6iaCXSU7cWmRLSPRvtgCYU5A5vtCv1kqH75cZb",
  "key4": "regHGc4mPeunJpFXzrhQhZFtk2y5nmwFZ1Fk259amUkimREq3Ywd9MpdgrAz3rey93bXZJzBRs9nujCWnfxsPXs",
  "key5": "2omFZaigFHESEBQnCPuwKX7W89a5Dd18nSDQ8CJ5U7JNm9iNfy9KY19fsCaEW3xviJVRtwPWctoLNVzefQJbixpw",
  "key6": "38fYoiJJkAsz1d9bGTbR2fNzgZkjbwpu7GwQXVWGuzzXrmUrb9mmesGHZyrxbvpThj31CdmNCLtHJMhLtmUi9SxQ",
  "key7": "3ZbtvsspaLGRZAzwc2qhTrPL88K41BkVtELEEbJyu5hHv5bcLJGHtJ6JqQ33cBK8Us8RTonuG9XmfhTaSU2DWUCb",
  "key8": "3adggafmAb8DGb1BwBovYTkmQNs4viSfsgfkzm54WtY1nAA6EzfsPPiCVPw1GXPURN43vrAEro1RsrBKrw9WuCTw",
  "key9": "2V73wBQQdXs2vyT24wKRgfjBjiXtYoV37kDWvhEB5ABB6Ta8VVnk9fD3FH6AnBdwbfHFHQhTPk2QyedEXGRguyhe",
  "key10": "3XYCusgLfjc9yaRFA7fS63Fyt5rKCN33zucJdFsMnhpkHufFXQwhDcG7ZzP1dDVz9xr4AaFhrX4hznUiLmerCAz2",
  "key11": "471rV5KzuvyGU5PGBw8VGAHBtZWQbmymzdiu4QnVrVx8NP511Va7ocEfgUssHYw586btE3j8HEd87wsCcbf3Usxi",
  "key12": "RtoYT2hvspvXKMppYpbDPTqnKnhMBeGbR4eNtuENVwJJm4vJvu6i5d1dp2AkLCt1JmuziXYpusFQKbqJs8HZELx",
  "key13": "3k4sUzkuHiS3xWpEAwovRTpKiAyGxMVLRMUBRZuHcYBPcXbrePDKn4qPz4UTeKF65gJAc48ybTaqmyFTQgDJRiXa",
  "key14": "2ihjz8KPeE7Su1xPmTcjv5PY1o7AsRbd98CD14NPxmAJxCXLgDHBSL7EdDZtuqR6byV9xoinJXXLFgNUohNhtuuo",
  "key15": "22F4FEMSkPrCG8zznQGiyJek7rawsQYfLhJ2SfVZ4QDG4GVtWSQY2cucrkhFh5a8SJG9bnBcS1zd8eXdtnXXSQhv",
  "key16": "9h53T3MqoL6HK4Hr6auAy6uv71WrVvvs6WcHyhguDEZbVi3ru2MWZSeccRyU2zYzWapiXppzh1SnCyVJx2JRyso",
  "key17": "2nBd6UuDM2yXrzVDUFujjpN6DQ9zwTB77DuVdRY3bWCtTgncK766FjkMwpsEM3nK3oKFpr9fGQ5MdufxscWNq2gi",
  "key18": "694XNuce71Y47TckL3XBNyraC9WmjyDhRqs9b7GJbHpdzJVRcwkC4YUq1USPSQcRuyqBZCMb1DenaSSwP6bpa1P",
  "key19": "HCtjhhsCbq8NfFcr816P1GzcZtwB5TVmi9XLw5sxrF4yCLAafowtGkWDfAYfDbvSHqgBcohkirAxQkykrEHeWcH",
  "key20": "3nkufdadH5gijeXXtChJSKRzka31cvGE1UjPf6Zqm9FCJfUK7rEjTar9WKDmKdN7nwJfwnzUaWpUzS59grgkhtr5",
  "key21": "2F2G4XK8qc9HxwjFE1eu2fmhUBwZbsUk43WKFU6ppsBaTRXvvTLb4aAQwoxac4oqFwBvas9Ycep3c4dyb63oU4vn",
  "key22": "YKEnrVAd1y71XDDNDzzhJnek1LZ4iMxYY2EyV6zKjsjbEM4dAdPEX2zDAzL2R3iqu8yFHV937xeE7dQD548nXgj",
  "key23": "5WbyN2bJu6EPL3vMxUavE1vLz485YLneFZPqvLxpksC9gJuCpCTz2hokXvVuigbpTZmMt2NDKLDQjtrmnqB7ZxsS",
  "key24": "awBGvZPgbZq4KAigNNcPfVDR5fXy84KkQbENE2qWJ6JSYSSv1ngM3acDorGei17CRShfN4AGonXQ4MPRR6pu3vz",
  "key25": "5hVT8wdh8cBLEww14apgcR3VCsnyNVN6BzB36QHnacrft5Ugu6RiVTNcBjutY1uXXVujeEd7wXE51apaGybaYozB",
  "key26": "473X8ucQaoCqgYPhHWgHS7swLVQVoUQVsXwHtwQ63cAPHwV1fWLJahTngBjjCjGECoP6c8Htm5wZTdQvmGm1Knzp",
  "key27": "2GLdaXBFX7HMA5kZSfCnWDkUMRVKfdND8mjCHVT2H6VCryhRZKMMkCuvuEnQHkwLydGk2FDjMKNkhy3Ntk8jvCzg"
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
