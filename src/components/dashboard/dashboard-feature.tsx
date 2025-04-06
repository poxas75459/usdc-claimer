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
    "2srgrqyxcSQq75jVdJEjbjmAaSE21DstrtSkcyTMLGRoXSoRTGeerT7gJ79gWEMhs2eze7uwXBXzZcChegpa6Wo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtkjJWdNBU6XbuMMw71dhG3Qs5wgz5a5nBfCSX7GhV8XyAXomrZfWWo8kt91Z3U8LS8FdgiqBVjNLfh8jF8Qhqv",
  "key1": "4xSZz9avMwbvMCN5yGvpi3KSDGAxS3pqtGUwayPMVWmh1qvvzrvgyPBk6MfBnScFqyZLB6jP5zggjPD3GngC5xwC",
  "key2": "2wqWL75mLqRfnGkDynHacAUR9Kbs21b9XoMwtRzcXaUAz8wDBinJuxddq6MbcY5sUky79ZJ6nA8kEWiofwzXumBx",
  "key3": "3Ky9nNDvBHpogGjzHQwKXRUyorBmvKFRhJRUiVD7UpRZYuwZFv2eZBnt1UAsSHP7gWZX1QMcDWPpUa8LsxXfg6BD",
  "key4": "21rYVGkcLCaVnKupjFMyAz2urzS2R5TKP66d1vr87Z7LefHzFRKeQUV1BaNy5wDt86V4idBfexUB3aC2AjRHepGS",
  "key5": "41xT4tavwBtMedp5LxLuAMs3nE7DhD7DUMYAVRhnzQtLZXjytSCQCqdux8J18Rbf22QpkQ6HsZYwHfyL4MieWn1x",
  "key6": "4K9WwKKND9EpF8y7RX7TddCodjRDPg92hckYT5gBNUzhAbJGzjUP5qiKaahSErY2zaekqstM3WqgyLTrVm1YdF7o",
  "key7": "6igpZMyDPjbNPnpQJRQDwtWZMortv1JVnvse7YhFvP3DHk6FjHPBEjcUjYpW14mKvs4VtLa6JkTdBk7mzQiJzMJ",
  "key8": "3PkXDVcYbPvUeiXcYJekHuhSPzck5HFy2YEFDpNorPYjJ3TG5UbUsNS5x4652KBuyndYRUVBV9FGP4ecPP7QCkXj",
  "key9": "n2oR6rZZjVgG142WToe4jySizc3DwqPP8WNezadvSwc9QKLAWFHwzJ9oK3j8DUyvKAjjEgiiHDZvntHHkgPgwzm",
  "key10": "g2mhEFRgS9SfecxPeqFqaUdCWYn3k9WgKjtaMLtoZbp9PrQJRJegu3dyHSJioRWfdnJsYYQVgTHNZ2DV8WvqDH1",
  "key11": "3hMYpTmQRUK4AfnBDiP92KSUao7MJ8f7fPXvyCK8FmgNbM1TLgu2T6ZGhhoJL28Hq24jihSeWQ3ErDKs8Zf7AWfw",
  "key12": "cbUPwzzD5ejMvJeF2qdcTdR31r7NixMtUWrBqHXRYcBahNd6Eyh25GqYt8CiL3Prxov8FdeMi6thnpbcoV4LX6C",
  "key13": "3Lbr62AqXFQgwDrtf75zn8AD7yRAAC7nDTvgbYs1gGkhFL1aukByd9G43p4f5eQdPAbBvgMrzCmwn7vg52ZfY6ka",
  "key14": "61FG2V4kYSoiZ4WNtqLytneXcgFzi3qDtbV5tjAxKiDDtyEk3GBFAoxEik1FLBc3MfkXYeB4o1od8tvCnr33jA5p",
  "key15": "3FdX2ne2ecB3CsT6znjDbEKBX9cgbFeYy3ujdqooQ27sBjzKYiY3YRMPKa9tVt3QWrrQRihNkyXCUdJfdSWtEsCP",
  "key16": "YKHnAYd4fmGucADjQZKbckMgTVzYH81zdSu55ze2kWkxdCfXKPjHTGx76Leb3RkntCXVWrhrz94hfn4Xf34vFGj",
  "key17": "2bRw99gRnkqcEenpZmkdHPrG5DVVpNSjJTcysb5qzBAFaetLSv4fNyPzprrV6AaQDP4FD5jkkAfbuL4WHkztUeD5",
  "key18": "4KmTevEhadjryM83LiGPpFTGFeAEqRQS4QNx3tvoeL31EY7BNCUf2svVJnLxR5KSy9ubJSxoLnjMKVhMNQLWQt3n",
  "key19": "3ppint3VVACS8gMcHJ1teiDpKc5nd7vTn6pAAC18B87V1yDhXsGDU65MWKZMLyStQYHddJSvpFrWEpkkhUVHtPLT",
  "key20": "J4WZ1e4N4gbdG2BJoC6AiJj2Sm4o2ohBuAZS9bJwapErpaxc1nPXo6cGLy9rqonKTjGqz6ENcN3xjd11z6QnKWS",
  "key21": "3fLdfE3bjavEKrwVT6B9roaEKAUaJw5y1z6dppKfhs9kCAUBcGbiY2YqbR7oqe1qmjm7AZn6PdowyQtB2kXTMVUc",
  "key22": "2whqNYbaKydUugrs7aHSTM4cRED15MPVksEgD5P1EqDN2Ycec5sKSBUtQDXhXoFU89vcgjqRWX3pTzB1i1yr9EDx",
  "key23": "2y8iHsePs7itE1sECP47zGg2Hg17GG7DEawY9hN9d8wsytT4j1euAFFusxHcnCTJp73c9XqZGR6pEcT2KGsEzHFn",
  "key24": "2b89pZGjycTtnLekTNgY286HFa1hWSvKr8xUUq4f5dKnmjrCYDZT7mbdY5iUoMZvgbE7LmZpJt1TEMU2GzXbXoaS",
  "key25": "46wXH3kufa87KxNWVPUn9CgDMDJij8yw9SPoeFN69ToyCoeRWdmcmc7MiDmUBoV5hbTMQcNuFRCUKgGcJUwRu3Fr",
  "key26": "5o2hP2sLAHKAFRjAzqWZgwrcnTn2gpWmFy83iXWdts18qTMvs5i5g74WuPv5e3wEaFREpwbUGugsAoiTV8QJeNsn"
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
