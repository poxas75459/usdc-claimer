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
    "5UftxxAghqQ5mTz5WtPYZxaXPj7ZyEQyvCV9yu1y15kBhpprsjF4M2ZgSfa2C3YzhoTyJff3bLLfFcn9rnBqEqHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJhPJjBTEij7GBK94HRj9AukaAE8PABxgbqyVDdqraZ5KoSaLsPmX95rdVn8PHZ55nBxH9JVZfFM6o2gMReeLQ4",
  "key1": "5iDhyWvSuLN2HU1WraAtQtWDi6A5iqp1TYWDMz6DnSnpGkj7xVgeFkBKdW3V3ercWb31PoExyS6fTDecxTXuGSvT",
  "key2": "5BvYyFKtpfNFZmMFFuyL8Mh1veRACpyZtbFARF3HrtiD97VdHNeewXFLKvPPBEx7iPPAzLsPWZJuF8BFcPubbkrL",
  "key3": "4dj5XxpCb7bbmipX64zhPGYVr7G6xZgtTTpK1QRarHK7UsW7NP6Urj8wPJQbEdBcsyuMp5bnKBBtCjdzZdPEg3Dv",
  "key4": "osUJc8pFTxTJB1oVjh6JwCCaLbhyDybV4CkkMf6B4EiVcPyvXgpTLUSaqH7BtxwzMtfBrd4eQQg1nv3E17SKeM3",
  "key5": "2wooQP7g14XuX46nxsZcrgKoRX4Cp1B1BRELSvSabBYq3QZ8zefaxRkvtrDPxfRCvf3iA9XDfDcCDHwo7vCzKiNG",
  "key6": "2NYM2Zgb3WKzFeyeNQhD2wAy36T8oYCySZ2jgsbmsoXgWsfEyJGVwxdzo4UE6h2XMXE78ZaBRmtD3uyQQEaSCowN",
  "key7": "3X3oZBkxa9Ud6qJfZFKY7RerTtVpmN8JkhTVtwWfWdfCMLkxSkU9Z9Dyuzz47dJBs5HxE8t623hXLC9wZ2n3geuu",
  "key8": "DLvPZWAe6pMQrnMdPG6GEXUzzFuswHps7ZjYPhGgsdwBU7m5tgq2XWNJ8uSUfDqdSFv1j3yvYTnyy2GLDvLe3qL",
  "key9": "2pAqJRXNkaRwsfdXoWgUMFCpzRUVUPsF99uMeTZd1wWLrHPWp5Bz68ei7gqGfuRGozqbrLAFUw8xZffcADsUNAaW",
  "key10": "5iJv6w8zRA51YMmS4Zqr2Ev4HJup8awSMfVyfWi4WDZXgkuPe1MZJGxQztxorBNLJG9XzJgNAdGFVj2LbiHcFMUj",
  "key11": "5Paa1fLDtBfhfxo3jLitGNtLoS3bkaLfL56erjPQjEkDFKEBvRNppZnNzqZCSmeUhzxFRziw9s3577BqQKSzTuGH",
  "key12": "4WYaN8myJpxSHZsXuNW2P5PwafiUtF1GznVcS84XiyanWmxjjwigJzgRhMmsH7okZD1unKZ4bKhthEu1aTWdHvfT",
  "key13": "D47fx1bC4Fw3X3tEWBXCbax7wTAJSo4MweiXyakXTrQx5zy9XD5wWLyqNYsBWQgQn5JeAHjVFKDpZFZAFFgUHaf",
  "key14": "124ribym1hcvBidMrpgVCrms9WvMbs7ZQBuyaXoxbLpTdKCwgu8qVqqeUEoZjgTtEqoEwxeH1Ag5BWYTN11KfhpY",
  "key15": "5miiCPiJjjGYuZfZzspp1yGK576y3ZtM1uMmrGQ4H925n6tTGFDpoxwxV6VwKx5Kh55n7jJKSKPsV1ugRYJwJFzs",
  "key16": "39h5qvbFBTs2coXEHwnwLgBEQgDMMbDUCsdBny8MErMQJsDxHY8XZaYH9DCbcRuBVz8y9ngN5D3zhRmUX4isE8Xm",
  "key17": "2vJxHNhNN88UGJQhs6uXXoAFmMkoBQneRwyTxqhvU2cqf2EaNpKP8n1TXPTcK8ncfAPmrpYDkyki5vHGS7zbityL",
  "key18": "2hdEp9NHtTJRoq6LoZJqkyXzUTUVQAZVpp6TvvMrmyu6rDHhtv93QzaPbVoGRKqihTrW5x3CP2FFZ7YrTQLGCM6u",
  "key19": "56hcQBpq4hzpaKfKM3dRpQUv2uibn5cZbrH1PAnWjH9Qc8DXaonhqEfJBJCFciCcobfiQffvmdS5rpYDFeGq7oXR",
  "key20": "4etF246Yfyzd2eQsp5yHM8P3UvjMuGh736MBY4SXBPMGg9o1stywaBNtqTFchxiqJvUwtHucGyr2GwC5J8WagJEK",
  "key21": "33sHdFe5D3Gcw3FZcqsQPKNFcAVJqvjgXxfKRk47uaN7LjJ5Qm9MdVf2yNgHYoBXzGLAh2B6x2WraAzy1ZTV9EXM",
  "key22": "G6ReSpwiSjf9SbptuUwyQyAXH4UnH5gS3EoQQZhdzXCrDWTg82zwS5MqGay7ofFCKV66m9w125WKaRPj95gASkL",
  "key23": "bjK8AsNy3VJ4kUUEMywL7rNFkJMi3am7J5JkYSLNW8TsBvqfJGRvRyyDfBNHmfmm3ZZTmUkvP9UmtWpKYre2EV1",
  "key24": "5XBSVf4ZHXgEAEgY4ACRLKwHkFGj8cbFfQPDrhYguxWqf7C5Sr6nE5bAKqjk2wietLwbLA1CD5Rur155EF37RiGJ",
  "key25": "2QBeDPWjpr2TwhNBzF4sRrcQvNGhDvL75QZPot5R9SfFtwD9j3grEwTQRBANj5x5j5h2de5RiEpKbrwuCXbhya4d",
  "key26": "1H9Xu51iNFmMZaFFGV2RmDnr7MAgBVLXt1cwFnc73mybuStnEGbyWCcvxnwXFV9w3GkUtiQp3raQGeQ4P6bZGeM",
  "key27": "56PzTu4WnZ53ofb2ksqzS9AcPnY4WYSYr1Y8VDkHxBAu3KXZuGcAxiPtgrrRUx1mtnQVxoczip7wvivzQcUqPUHL"
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
