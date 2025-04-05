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
    "25rMGhKFx26BpN1aPtXHhe1RTn8LZ2jxt78SishpmQbXwJPSpGorVkQcCpFPHUVBC2wKDaDB64Hm6v1ezgzrevPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbzJ6Ra867huHC1cXeRQCREusFSqk41qjcgktnpeTP2xjz8MZyAB1ecxWxTxgyYSezv2uUeoBXubQhYpAa8aWpY",
  "key1": "3mtCVFn4pJDa2grrMyQRvXd4nkbWNKGPWw7HgfQXiEFajiqSoXxkXBbPGkvGNppw59d6g7CRMGsjcnteXjT6UZFp",
  "key2": "59UFonDR7ux4FqjJ3oUahDVAtonYEZ1tR6bm1Ytg9DBpDpMhXTpcXwRd9tJfwujkWoQyENvgZd1qHH9b7TYLXL8d",
  "key3": "5cwLpXQaGtkZnyy8SitBF7sVHi7nqqQtmeP6bHy6sC8uTm4ZF3MU1vLggtLzobXWQdwDRrepVqqanSjvR966ydu9",
  "key4": "3Ldc7CyPkDfoWiFnnrNQa6MUkWzREcj3mTLdXe7R2FebzwHNdNrkdewZgBzQjZo6nPi2y9LE1Yvnq4jD4sMfLQWN",
  "key5": "2NoucHcVjSz4h6DRMAtTxPZdAxJjSLz6VXYxU2viT8SpBsN5igcYbJFzdKD7k7TAckDWamxBxLKDKA9QmhhMotQU",
  "key6": "cW2nUTfnNKFm18z9tn2SBr7S9uYcd5izcobUUsfASLXTuENE1fM3p8LWS82ZCEBoARFQ7mVsXWqahaSucqkGCBb",
  "key7": "47bsuEa6pDtxSAeXBmbSJcwTZNNYHGcYxb1iVQwYj9jwvnFmo1aUhpowrmDTVoPHfeTw1zQyGjQZeznAFJCtRUof",
  "key8": "61Yb16rrx6ehxhSa9Jk7JLW6nAUZroEYwqzTB2MqANhZiA6HYmL8vgPtC37qMKzfdjTmvwvg2iVt66KuVpPhxX1b",
  "key9": "4oSnJQzFVP2BF3aZnYp87MFQXegCgWN3zytQ5SS54vuwSeiV2dQMudU6MnmPCwQfKfbfdXxLiiqbuVoaGNNmUsdQ",
  "key10": "5WphqckveUF3sYnrv3z1PdijUtt2iEtMZ1toon22x7jmCzHSBTwdwFL7A5ibhnftQhUtAKFaxom5ebV53veN5yf9",
  "key11": "21z7tfYnisXvKTLyAjHNNiUgHqCmTTZCRn8zvge4fvnuWCzEsUMW8xXMMcEeTMs4RAmAx9sgu54evPMdm1MNqPh6",
  "key12": "QMdPcGFm3KYgP27q8X2iwtUWtSTurH2meze63GhroCadx4e7J3MVLzzFWG7Pf3UovUgF8L2MJgnA4b7WmNgBbN4",
  "key13": "2DGXjQVoxQfxUgeNEhQajvN1uhjUfGNYESiTT37S5YMuvBG3jBhv9buUxLR7Z6UZnC7ea7CRsmbzQPm2dnUB3bGq",
  "key14": "Q3SpBEb9GCwwhLmCF62ksfsCuE2C2zkH81bhUifxXSbNfTWjGaWQVPiGbCHEWy3pLjdBeHy3VevAb5xaaHNsgV8",
  "key15": "zQtZ6x59Vr62e4QrfAgL2fNGNbX7sQ9mpWrDxKEGSYDA77Kys3FFnExF51j7xneQCkndeGKA1sG76WwQtd9JpTa",
  "key16": "56quT78E3RTavqiRjwuYNw24EfoPMm5G5us5cLJCjwx9ntfpMBU23CHUczsbDMnVshRkmCYCVXeC2x5McanUCkyi",
  "key17": "3iEgkM7VSxGDeqQgjpiQYgsNcyKXfrosDsBSjRf326prGA75A29kHKBnMfqCmJ6YKi7zd1gM73DZXEkCTvj8K1px",
  "key18": "2uptou6EmafKqa2VCYxnoSD2sYdeH5Vy4UgUBbcCDZM58g2PvocUXmkAJE3qXZQG1Bzm9aKYZnbDvLTSpUqBWWZN",
  "key19": "2Y7XiJ2fmcBjmtw7j3EdhCkQS9uuTagVjkjay38W1jXjkvcLJpeAX5zugzi2wagwDMFoo23DA8Q8CFJvfuPAEEuX",
  "key20": "2trzESmyinNCcqcn3nTMTcDHsV5SL55GbCfrQf2JoB6ohDbFUtUEQxmwp7C2te4mtUV8ekVC5hLWKReCEx2YN2CG",
  "key21": "3Wnu3DJRHNLH1kr2MFZKc9EnvGqVMhthpVhWL6BTacsLbkb6sTXbZoXdvyYbRfHBZaDweo3PPk7eLGsiXb7ji8tb",
  "key22": "2UsGHsXaKSUPeB7UavzJYVzcbWHny2B8UDApMM9pDMR5v5nNvnLYBeCHP5VSymnTAf9MkZ6ok1LgNYMaCVSwgafu",
  "key23": "4pjt9sLbyZsqCpaxpr1WsBp3k8TPe31RZ6sn3fyosjY4Nw8JaiDwmJvCm8jL69WafFUeXioeXrqcZaUg6AXicmML",
  "key24": "ja8p5d5SP3VLy2W718CefwB2Kx6weEvVtRAHqyaP8oVt44hGo3D8wAqP6xtuhmXNkXdRQb1mQ8wyK9fy6RS4VpN",
  "key25": "5RPYdgtCA5b1FW7GFXcpNyS48K4sCdi9dnzn34QfHe86sMv2cGw6zERJUhvodRJz1eZ2JheaykfaudyhEWppM61C",
  "key26": "2ZN7fdw1jeQ9Ef4grAVKmYNpQjJ9BxKuh3b9ALrE539GFTVD6dAgveYVTmJk797xTkzbCGWSJP5XwuS6UraM9ef8",
  "key27": "SZZhVcCtbtBfgv79nrimbi4xJBQnCTbGzCpTmU4PfrrtXy54LiXvgwzfzexBonUJQMaeKX9zZBMZ9mbemsQdRRr",
  "key28": "2VNp9Grfr6tvhzNEwbesMdxZe1p6rFkfSw3dsRPGoKaGjHvoQTKFkdSmA8eJt9yoDoncaV1DySjQUy45AUdyZbWM",
  "key29": "WGg7f8cnTfdBDNqHHTqf3XEJEwZ72SGChrMBhRXAfUTaMb4k7Wt9Rg7ZwpNNeG22RqoE2xwwcwqrBf5FHb7WcUv",
  "key30": "33v2HnRBgkZ2eDuLiHNKcM3tnDRVMMgw6V7PzLQ22fVDs9q6ou7Q5munxPyhRRk4WcMSow8TP5sDaD1TqNYrdJ3Z",
  "key31": "34LvdXChLJQQNpqaVbGYRnpXxdu4ybHacvejgqkuRntqX7RFm5YHK9So53Ehts4UDHWs9y7kXzjeso1uC8HY6yPK",
  "key32": "4XHY6zquRPXcTiBXmf22KRw6mqHT9HbhWPc74Kkhhoh3mSPNYzKi1c9yZiCT5uR8uDUeveCiRBVHoCLrMZJc1r38",
  "key33": "3f66iEdd1HRyPMrpAsjGNjPghqhEV7mh1V2MfEczdDkaDPkGnKVJPZysc9uuvV4kBPCrzbs54mAFy2gyc2CEUox6",
  "key34": "3xB8FSsZsX2uXmSeWuBPra8cc7oPPKxc5XHpvBer97m3fTW79dFX8wLaxuQHs4KS46Y5XhVJuRR2BFxMvkRYu5uT"
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
