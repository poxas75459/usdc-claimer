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
    "6vrFidJDXZzAoy7LmtLWH2GMQD2JucVzUCz9H2nvxNZNHhqXubVqt9jfx1UqSFySrpEiJNVL5E1t5EnK9RAdpFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvdzZV5qoFxdBChpwEUkjEhRsKCWeYBc8vu4nSePUKNphX3QgTywVu9ctdj36hgqukcmN1W9wTZRmSsQGCXyu5w",
  "key1": "5AZZ6QZcUqTtrH7uxxwsRGGRPHpHP9KPM2xvDffaYdEvZCif54rkEdJEFLJsB9SSq3ugknnvriomfZCzBdgBfmgN",
  "key2": "LcL11tsL85zxGez5XHzC8e96VrgDAKHdw51rTNfwPSqyAKiFU7x65dhTB7ugUJR6aZhAXcgVMHawyAZAfggyRBk",
  "key3": "4C5RuPnZ2YkSVYBBmb8y67XQA7H9vzzLThBpjawqaDbN1PygJ5nD1GsPHRsNK12q2X7bBrSD1Q4PmLVZ8MihmXr1",
  "key4": "225v6JhjiPRbtR9F9AKRqvuxFfuzyUd3roF6GW5bfAyL3NVytEDcgA2DNuTLkthmdmKjTchDMu3nDgx6Yx9hVESE",
  "key5": "5YerqvdPdzcJe2JoJcRaA6hGogVzSfjCvVSNw6pqJwS8BBWhzt6NoNUVXacb7mN2uqGN2gY1VwyZm4Urhruzq5Ht",
  "key6": "wgUvAVSWebT7y2A34PmPayAoeHmvU6EqcoxMDC9RxWg25DcWKThHXvqfTZzeNjpyxs6nkVmDXuZshHQ8HGhayaF",
  "key7": "5C4FZABPYVcLLBF3SJy3YM4Lu77zz5TdZ6CoRMLfSMuo7WVfYYaSRF9ADQTVYq4SvFfXM3aQfmCcn2FfHJCRVvWF",
  "key8": "4bYF7whCzERKTyG37EUFJdNo9hPPYzca5ZEYJbBEJAnzU9L1b1JD1gsH8qBrGqnGA5RwZ3b7NTkkadauGp4vh8EK",
  "key9": "5rJhfXSHY3rTJ4BUHmGzNjkHzoiZnjW8rK59tk8jTXRLxEvKVhQ3Vv1mQfNTaAWYpDZkC1ZjdpHWpMtCYjPncR4H",
  "key10": "4ecyYqa5VZMz3zBZjy5ddHViyiiQBRGxvpEh8sCvGw2swUEY1QWzjLJxeQ79wkVQHyieWZcauP8g6u9NgfKzwWJb",
  "key11": "33YWnpy72eibkb6Fvw4HCcRhLFQcsXYYmu5LGJUZCjVUiphm1c34h5z4PnpM4MNFTT4BHmggfLCMrEnNPeeYuGse",
  "key12": "39aHeZv8h4PZZWv3Va1HZ4hgFTAfa5sCtz9RoFD2Tq4buNfkmekyU71NVUafBn1Q1XqtTTdqN1fJF1tWAZdV3qTY",
  "key13": "notgjJPQ3yYxVJtQ2tneyonrsM2dGkJr94FrVTDWdkyAiCw1zt5PVFeBPhud9gLd6SbpqGqmpqhM7AMmK2vSCjW",
  "key14": "4LdnEUx7kfp6p9rPMX93WRFoRbXtb9PtPt4SWQwcgYgaJG3enK58yXdaHu7GVvLUWpu6cqkQMr8yQD2hHBj4xbNU",
  "key15": "6YmWCtbEfufD1drX6Lva6EYYic8RuQZZe1AU5AcQGDWhzCpPtSzcJqqL8FHkx7w9hF7ePwx5BPccZNnsrpAyHbJ",
  "key16": "5QaruPpzUBme82mMqekCxAUxSQm9Ssc1ksZkrZqP98fcwqP8NFUKubbu9pJj6PR6HMJ7Ss8wvM75AaEAR9NqmP2S",
  "key17": "nStuGkq9GCNmY8WkSN9jvPsuxofGbGXyFSTA8CmFSTY3zYJjjzuJDxiKjMJ9fBWh1M8pAyUmGEQr2YiUB6ZTRT6",
  "key18": "2guaH8rehWBSVs1Wx1PLjSrPSigiv3Tmqi57fqyUEvyV1a6JWuez6F7ELaNbXyff9NrUWbm4BVoUNfJF9eMacwC2",
  "key19": "4Eru3fgCVM8hF4xcsuixrQxWsschpRGw5TxKYyCPZVGCeDUabZN3XEqHLKH3gTsijyUZWfuJSt8C7XnfqJwaLKBQ",
  "key20": "2iyGEFZ2BnPqPMTjfAMN6LzdQoC84oFY95W1cwTJpoWHnd6KwiBbaj8rebWSgqgBxi24Bvp8Zk9iw8AKtJx2kSW5",
  "key21": "kqSnazbqKmUU49i1BwNnCd3QBzD5hdT57SLhTyM5C1x3MYWZe8GUybd3Rz3SufxWsFEWy6BSPiQjAfvTHcrQerD",
  "key22": "5BCcgjVtjYHeJS2RLZZ3HUBhv1gK2rUQa3LK7KRpfNStWtCFVpawMcrSny3zkXf6jAKCobP2w9A9jLL9KMoffkFg",
  "key23": "CzPQRhnSwjzcUuz9FvDKqdNokKZPyFwhphUvP6jvehdbASpucup6UTtquzNXZKqjrMsthTbfS8P3pen3FGSZBJZ",
  "key24": "4Lgk2CFhew33H8cp44Tux6QKEwnTVUGhH6FoHHfTQ5gJzVhg533a2FqzZ8ktg7LPLbWSxxH3fcaEf6TUk14uQG24",
  "key25": "4Y8jPDaYe5UMhbTncpnc93wrapc9jgpCNegYtsQQ1FxSshxhPkiEgpj9ozU6PhDvCR78nRkFBjwvPz2qfexaSPan",
  "key26": "653DjgJo31JCSFcaf4Z6DW3KL61KuPPT6VNkvuJGAgiHYZStnihWY4WNgM7rputchoh9gYzRtWLYi6hKzjgLxCry",
  "key27": "5RW9yGUq2hCYzAWHSEEkw7dsvyTgHRWyAVAmvPcHckfUnAuX47qzUcq52JRt8pej9ZEeUpznhwRzM8L2NjTSVCEK",
  "key28": "3ba48skUQfjjiHMP7oYGwXRFoidTxaeJj2cFu6sRfrkdsdanpVDwGsZriVv7cEkDupjzEVzX6ZYPJHXMXNofLYDP",
  "key29": "3akjD6XPH5T7wizGmn5wbWEoMrcDCjdHK3DqxtNfh5cEwFFHUs1wCTLVpf62mR6eYh6GJtw1oSX5fLx7mhsLNtpX",
  "key30": "3pnzyzBFqQQXSVB35FTQEXryCm6VS1VEKNxVJKgdXUjSk6wHsC1i93rwtGiKoowQUcVSzp4zucVVUGuskaZevwjq",
  "key31": "3sqjfGsdND2Zn2nNeESunNdSAWmSnDyUNNd3tx8escrEUSrPU9tzcdY3NK4X6sghbjzLT5yLbeMasqkSCLwMtM3q",
  "key32": "4eyqCwZGQ9GEfGQriTMpnomBojUdSaqZ4gEUMB4DE6UZrYeBJfWAvGKmVjtfVgtGrVmiGk4PAjwPNNpVGz6kSccg",
  "key33": "5E1bGJ86VMQwvJuVSrqcuhXbKvpHPJXcph825exGqydbUfrkapdkNnRoLrD7DnXMJLjK5RxQc4EnnwNYpnGkdi25",
  "key34": "63ccyMFYANDDTA72ySQnXduX65n8tLiKwPHLGrVvTFh9UxcpU9aJx3UgSPpWV1x8ZsjDiy2hiiHfbLB3HfnWF7g2",
  "key35": "3cjn5Bo6KWdqrgKSQ93dMtiUpHoJA3ak2um35cwBcBf6QK3FzZ8i1PxqgvMDEvn2KtGhay9Y7TCdYu9LkseEMYSk",
  "key36": "4xDKKobrmh5ZasWApuS9XAGW6qyyd4CBhvomEhtZgJZ3KmqUg1PpvFYY3we4ZUoKnK5cL72yBJQKbDFd9WrcSQfo",
  "key37": "3CK5nn8Sb8FwAhEFNjQyrZxnT7qJEQw6q6YDCjNHoxfTDeaVGX7D92DghUQk6XC3HfP1fyJkV1dpSaiZVUSN5ufg",
  "key38": "bfVZCUNxZz2W4K7nMW81ZYYyUQ3WZHT8xj9VxC8c2NbtupCAKWPL7U318xKEbFUNpsT1Q6ZSrdFzmyvLMhSBe46",
  "key39": "2KAogfzjDg5Rhp7ZeUNSjQkgKApsQTkvRgiHtjFnTjM6rN8gEiaQQ7deJ46h9xp4tfRMh2grEpgHrzoS1sKphUyx",
  "key40": "32HGdX4t1LzWnRzApFM4sonNEcBRydoZ8LP2Smc8PxFRCUEF4pg45P7fzCYzcYCKbasLBghB35bsyd9kpYa3h2wK",
  "key41": "j7wFX3hBfJUMCGubtLzf94kGekxoeME8QKsmi5twTrYLoRkueuEG7uj5DiP3TQkdNxojjoLuqMVpXcK6EBC4tHN",
  "key42": "5JtHSjes81BSRMseHi3fQ63ETripBY6UA8MmzdYKyKY2BW67XkV6imsTvyKPTzmzWa7HPoNXecubSRdz1UJkesTU",
  "key43": "2JChKnTiRd1s1uxT2bVKmaZ2fG9fn8wXfEHCrhbudP9a6yUdHWnorSTpembYBVkbMymBD7nwaaQqn3ttMVFqiVid",
  "key44": "2TCXDDwjuE57wdozotiyBdX59zHLh5UT8hfG8T9V3DKeciXe8vBYYv4MRGzpYvvaapKL6RiJ9hdLuEHfeTuohBco",
  "key45": "253YwrmqMeDyfijfjCHqBMnB4fErYzppRthGjsKXYTrN7LB6pk3qDaTevNhbHCgdEM7enHV2g7Ata4JiUa7p9H8B",
  "key46": "55tg9RHYNzZUZ1nEVUsGkDwbXZisSpxUvoxMFuJ1qHEVVQBidjoa7n93ZJUw4gFe8gzFDRrgCM8qyhXJwbyrYLNZ",
  "key47": "3PsBCc8gwhAD8zqZZRj6taeksSajaM3YsV39pvagoAjm7NmgzQ8t8TsE4ENxToppwYVJ6Xi3cxMsLSHLCoUFdGSz"
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
