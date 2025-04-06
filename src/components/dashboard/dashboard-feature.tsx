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
    "3XdTSvRkLCa9PirNMcdksFQnS2QKXnbSShMMBhtRx7YZm9bXAhK3AZDAyHfUZq6EzCyU6zENN4Dc43yqpXXCso83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqY7ikowKKhZkpEvFYLTKKS4zCbyUkSaBoQYSaESUgBykyDoaAGX2orLdtb9R4KKE1AJKrodKzKELx85WZRbpGE",
  "key1": "3kXtLXCAEH8n6FXYdsv2csfEvoq7VghdHpu3mNHYTk9sPGqCSjjHyDRxSaD2AaDTDLqmJJ2nMTiNCEdNj9Djs98m",
  "key2": "2j9BS7H8AZBXrj5bvQo1q3jsFmTEAoCKEdJMfQFuHSE2xBTR6HufLCYDHwGVE9LGzixdGcnusX1bHKL188mW4DAS",
  "key3": "2wnYM3Gnmt9PDvWVjtp84erFvbEWVGvpVvFgdQtFetfTWpRfw9qK9Hm6TwjnU4RTm7q3KsuanmpSZeLaujR1wPCH",
  "key4": "2MMJbKyorBQDbLZze9HpR4wkaPGKmPyHf17QL69k4FMNCqthKkUQXJxwyfG3hw3XL5wAEfTJotKtmXTL5YLjMJdL",
  "key5": "2Cy4G6ZQwuj99MGdm9PZDv1ZphAktfS8AJMRUk87QrFjngFvuAU7CAwujxUwa6kCKNw6XH4psfMA2JaUYfpyzaVd",
  "key6": "CFvWqZn4PR9yTPhiSQrsyFwMWWVuAsaD9xJPWPywCVGyzJGucDysSYzYBWH3uvAJTyGPK5bEcMPnv1aozRfQUXU",
  "key7": "y2pcxKsdb74Sk43dgTJ1oL1CXo1LiwvFqSgphuag94qMEAPbXHHDNoudzoj2e8j41YxF7kURZaHSeC3gVDfiPrL",
  "key8": "3jwtX4u3oFnpk5gUMsoGAgyJnj8JaV9sS9UonhqJt3FNBpsJQXhzUxkfBdRu8ndinzrmPwFqbJ3c2VfkNnZg4kEC",
  "key9": "4KrxLjCKqEcjYnnKQDnFmvrWFzxf8b4KXXAacjpTV3YAYU8fV23NcpLUmy6aiEUo3MxnGUau5tcEjdPNbXu88pWz",
  "key10": "2VrCLmfdgcoofSP3LVF2PMW44jLLcY7iv9s4FpZzwUVVtSWnMfWdjG1C8q9wH9VQnyV882FqRYX6t4PF9P5twQjj",
  "key11": "5ZLqa4aSrTZzCgXZjwKuvz3v1HAFQaFr1P8thxc1THuNSLFY7CmAS9SEX8NasFnzSmmn8V3HWpiRCqxcmLusfTMw",
  "key12": "3N2KQHs3QJgjFfYdjvor7GqgUK2wnwGNnTPsLfJSkNPRmHD7ihUnoVQV8iMR6TzN7v2K3v9NiCcaeJgKKTqRLvc8",
  "key13": "4sFSK2A4fRaGjucsimeYzRVbyXkmFq2Kiap46VYMvBWchqf6JSHiPeHfS6FHNtZMvNH8AZ2aL5LGRFxqSUCx2cSc",
  "key14": "43CBiVnMuMSEucchcXEk49YT6WNkjUhB52wnQAvW9HoDTu8GvtLg8A5EqvKfnpxD3dRnEMqHcp9sR6VTTECK2nt2",
  "key15": "2saGv2fcpfD9Kv3vzGUjHgAxdpsqc1bT6WR4GGLYb3H6mEPG7ThhHUzbwyzU5ntAjxmAz87uCDmj3g7uDJ6ZrhdV",
  "key16": "mJiDXR14vLqY6pTvX45Ft7xxr4Vmi9hYrNWW2Tmbqnu62PeEn4TQyoR6Y9APwNbP187PYyba2XaTBHBvHhvcPjA",
  "key17": "aERG6QZJbW3wZdop1x5Tx9gTXbo2CizxKnorpy7eS1VpfCCTHyprRwrqsLyTcemPpBjo5zzfFadh9K9RJNKEKhG",
  "key18": "2xBXcEMSzL7QvGkAj91PMgFa1cJ6StADN7iaYFVmsbPQYPvau5cCFhuwGRdoSJB5SeHdsskkcVvSdYZ5ks9yjFPY",
  "key19": "m2q66hC7N8UxV24r7SF9UmKwf9CfT3NkRTngaAuvQXgZqJ6Y9fJuvdrxV6unEiXQQCR3vTYJAmMXiX5xRGYrsuV",
  "key20": "3rJco1QH1SvVSCRFTSw5BcqorQwwejY8wGWHJThicEs62Z9EVgQXfazKF9CJPDrDkCofmSq41LW9VWP7eKeHir4F",
  "key21": "Y8QmjEUWmsgZoQ6sTvSh2T8ALp5Qxo74rkG18BK8Cjc8zQWXGWYfrAhkTG4MYCbJNFK8L7hpvivEjCQBJBLzEib",
  "key22": "5XHHFWRMR91DrtRCY57VBLGS6KqWfJTwND9oA6ojDgW6tCrCCXUVv4mQpg2x4332U9q8sEHrdy1znAEnPTM1ZqBx",
  "key23": "4QDhahidcUbCqrF1CVQDqX58KovyDBEfFHZktiqRRqEC9EP2weNbuPrnQmijzihzbmBjA7aSZnk8nWbwDxyYJmra",
  "key24": "38PRQYjL8TYksmemcfMuPzH7g3872YscVFNq7tTwNQ1QP4swpDx6H2yfkfpHdKVcZJj8MEFPRGwowwYZvuWuuHsd",
  "key25": "2jtQsvXKUif1QgimhwVwnTuhKKGGYjcyr1Q35EsECct8Di9DeaeAAQgEBuGPnZWo4CPuYKoVUdCWUhqiGz2u2AaP",
  "key26": "3JmTVsywWhijdc1a1AQAtss21VEMcQm1i3SwGmGi3DLE96Wz22wGWP31H7PWzvi2amFi1NATPt2Ev6ntigtxigKb",
  "key27": "4qLGE3Ha7XxMCsdWTCFjYUgvcYAhxWifma4CDQF9ZrRgc5eEfHZTdXYcsmJQdvRxztjF9DvJy2twELHB9FBEGz8P",
  "key28": "2rPF1CiQxEVxbGB5BAiHZnbrGpdGYuX9YEbnZwKmhEq7Kx2SJGhoc4FofD7vSvRPFBSZrH7upw8wg8Az3QXSm8Qh",
  "key29": "48kcd33N2QuMnyd3eJCd3eLEuw3VeQCzy7TEoBZcYsdxkch9J94HsF9GegfGHtuQwQFH5Z8PP4WPEpqvVWp8nukh",
  "key30": "3KPydWGd8TxtpgZoxUqvhxL3u7pFMBqj8mK1pEcXcNfSGBshtq14te7cANs38RzpMppVmniiAUbg2sb56YXX5STs",
  "key31": "Sw3NmeYrCfcFUkct3FzcTKnqojg4WJzfq9bCBdkMQBWAVm9WuBwYtVPneYpT9hMpYiHWgzRDcuYKF4WpXvb2bMu",
  "key32": "5HMqWsFmGfmg2RzYZrFhcfMRQMEmHpGNdYEqDprT9m7xvD75irMmPRfY2hxDfBU18hu4ptEB7R3coxHg1jmWcmFM",
  "key33": "3tMePv228RZ8S8L3CVuBxiYagUa8BZ2crpjuyWw78JnhmfkYRpZdMuvP3REFtLsiToe6p2bhXLgcUzqa37TF9YGs",
  "key34": "2Y9L1bj7DC2SSqqyoMqUKbkBUXZVGenuiX5KfGYGoNWVvbt59vsrCVdDgzRn954qHZAUH2caqeaF61awEEDV5nuk"
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
