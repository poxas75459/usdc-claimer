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
    "4f4wYema68bf36KQKRsCNQff65eiGDhiaw474KXXS4myGyjTUSDZoz7M4RYTnbQ4zAnsG3DFdGuciiuukiHwLmAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569pTfmkzCMU3Vb9Fh6ZW7aaqbvDdwsNc4cZBEp8yzYa2F2tVA6KPoset2UpPHQmvDxefkp7615eWVFHHsEbiPss",
  "key1": "RoroNZzNYNwvzq6sJwVaky5VFGFzHnEZjMw7Dc9H7TfB4q37t4kKFQcKMPN83qfJ3LH73VVorEp7GeaZ5a3LwC5",
  "key2": "3SYjiKdEznzWgJRUyqQ3ssS2nQ19Htd2aCHVnZuamDPmARbZBoHoyVnX5B42mXqGZy4G6fgbX9viS5AGkig7fMwH",
  "key3": "2JmwSR11foCT9RWPeyUd7At7c1nPDniQXjvhpYSRotK9Va7xK2aGQbNHwpHxKKH5NiALzToAWgSw9Szxbf3cQq4U",
  "key4": "GHp3FdZAXjjmnmkXGYivADafRyWhsFTVyFWr9o28sgLupW63omhdRh4uex7v5nWRkz96vxy7KUGN1AFKH2CZ46A",
  "key5": "4CUbsnTp2gsXTzbSrEoTrMM1JwkFTGGwu7yvr1t3V3hAt1YqHhJ3scZKgXrsxUe53bQixu1hL91Bv9xrQD95Mhkv",
  "key6": "5VJLwTJN1i2aeo9vCguBdEwBJrejW6Nn3T57jvabvG3bFexwVwp88bvgmkJYHu6YQzTfNFuibVhWr6uEbtpJkFYD",
  "key7": "2Bu3VbDPrLxG1ibJ3gAzNLm5EhDTov9rT16c8Ui8rej8SHS5ZVvw6mNAhgFR4mJ9xmB5QGVuASVnxRm1H9ixdtSb",
  "key8": "2b5DUQhj3XgrwSHnRAcGyoPeHmJEG4EiNyDCdvJ5mhob9ayiiomjNfzjkTiLKDfUZgtBWWpSzm86YbEDp9jVntMb",
  "key9": "48VAXuTq8sAEbAeq2Aj1vKPAiJpYCM1g4b2rbTtyv45KrU71drMgip3wDNjNmjNZ4eNhYu9CrRYuky9iYKmKVAFv",
  "key10": "5k5FEg1j4EHqJ1QZ4u6A3W8UiPkjtptTafoEuKgaXnk2StPVeyaqug3KEEuUVuNJy8YJB5Yyzdb6PhJHoeV2okX6",
  "key11": "eB2kZCJGTNvCV9ZWvXq5QW8o14k4pHaNSFtZJLbBDYUjQRDKpWkjVRyzDDwwMJ6LhjnVpviTCWHFRSXmERujuLK",
  "key12": "4FiL8XZRVEvgdVYbRyQmXw2hem3MLzocKHoGxt1MZ6F2AaGUJrAkfzo8GVFM4VBt4oMuthwDN9v5b947QSQYBCC9",
  "key13": "4oGCSH4vYoZCaC5qn9XTCe7r9ZFB6iWHeFcswCAUzMtKu7fQDktkndCmdbiko8bHt3bFDV39NecfgMBzYdWsgwJ",
  "key14": "5LVrTCpLiTp37kTbCQWeuChMKLXUE3Fx46bWtE4EvtAV9ZhrZrzJMxL2bcPRM3ose8mdw4VAPB8mbpCtvzbLEXQi",
  "key15": "3Q8gciqZhS5Tvk8de6BVcCX58AfMagZpXh6myYp9FogKWxQxaYiLPJc2w5utRyYpAbx4G4cxszTEWTcVfoWdfEBQ",
  "key16": "4y97XujKMW4723VwcXXBQTwG9XuAJG9jZAV35LuKdPWmWpVsbRNw2Q2yCta7VCrNfh6UVeYJhqdCmPja1SFUExFA",
  "key17": "4TZdBi9E2bSePcfPwArf6rZqLcXLpeHkJQmjhpSq6GcQiF5tTQUB79LHPhzR65MK4x35gvj1cMgtDvzKuDPDSXmj",
  "key18": "3Gz61h54vQ7j8HVWCtM3jrgBDuWwPXLCv7rQue5vUHy2zAbM1F15hHrrx4mGhnUah78FiEPk7T9T96icHRm43EF1",
  "key19": "2po6MhUCNcoYk2bctgHW7zq5QzDGkmAcr23AXXYLD3tVwKpBnXz4kKS2oup75UMTHH7PJ8g5NS6UCNrK1ReMLXCH",
  "key20": "36QHj5Luen25xycocYkTamJTURwKj7ppdw2hroUvGX6Myf8mmq4jebJaWL74BcUkJghZXnGnnhgsNkmfTyy4chA9",
  "key21": "fSTAsH7bvisoDwXX29XunhTRsTRuXxa1gmEHWFDSBqHTXZ9K1Ybmd9WAj8sNtmxEpe7g1UCHNDPL6RBhY3CUE7Z",
  "key22": "5cLhPmh2tpzpY76xebDSrFuyvWoUyTdWgoxApYFuMxyuinYbWcxbaXmrSDLBWDSX8HJhHUCe38E3wEzM2BpriBJQ",
  "key23": "2wW71RevEYwzRgRizT4xJxZb54HxPmatrNSW97uk3AYG2WX6TjbQH1yvYDT4aSmGK3UEauDevJ4M1Amac5iSDPnT",
  "key24": "3n7hAMdzu3o9VrKxm9Yj6DBvyNCRLfEwzbD22bJtGASQxp91SzXAHJZsCTJWCfvJ7bpCSGLp9UwpocLJoKRLTfNR",
  "key25": "5g8HX8kLACmBp1PHGE1DSRrdynnCejnHSs4bCdMyFAFKt2dAN7Qcoo1WThPozpfb3zmUfjUXQ55oQTT17AXbGgf1",
  "key26": "4K4H5hgvgXsFPyRYEY4wPuFEqQo9KxCn72JzEKDbKDm55uTsaMWG6z4B6xiiX88FQN3GDE5DanQVcAZpqdVspaTP",
  "key27": "zEqzWmsvJgeecbKXDt967ExhGqp8EK7kpJR6pjxconmCbenAmfxksuddHQfnXkibrmC8ki1r2F7v1vLd7EMKoFP",
  "key28": "33bhqVXZqpFrbuv5erwEQjLSyo8MDT2ECNxaYwZSg2Qi7Jn88ruhu1f9bGGaFmK9PDXBoRuzm2sUE4KZhay371rL",
  "key29": "4fHok6rR6QTqW8iUATfLnj4SvGXW2amDrbthcx9ekcipKSfcwUFKMFzjSLvSuRAuTtY2ZiT9iEHfR3oFPPxYPvED",
  "key30": "kC5ZvshxyyN3F4C9iGm3abUdUuS8MWLD5m5uyJh6UGThG9pFKxeEjAt9bPhVZoiyvrcxo5RfLKKQbnqUogoYBYv",
  "key31": "3K2RfjQ9YLkUfHnDNhGJwY4y6CB2uDXvYKQ9VNjX6DFNCV5igpJfxULt4mE4YMn81pzs2LE1gf7Qf7oqfizfakEd",
  "key32": "3R7Vfs9v4idXfRYSkrAMKYVGfkPpESpVn7Ke3b1Rjt2Zbj8a6Fym4JR4MyUAdHNqVm4Lik92KEeBpcX5d4eejKZE",
  "key33": "2MZViQEsv5sLrh5XXrodjYUXsqy2oZ51mCzhMQqZJcTFK2Z4fFeFCL8DrynsAXAyyub79YHqwwSMrANcE5bZrhcd",
  "key34": "UnyzoD4269QhoNxx8kmsh63iMK7BpRhLKZTX2QJEsCzZTEV6y3HzUgGR1X1H6vaBk955s3omZXMH1w1ytWfGTmt"
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
