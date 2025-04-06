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
    "5qQNXs7YQzpbz48RWxAduY5nu64p2FwChtVt2H5HJUBrzqVZbSiMoh3gP1p386v2zqEsupo3LNUNMXsrRjupK95G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sa5LKXyfCCqKidCyoYyQKYcKPGt13a4xWrma1z43h7Fyx9eH6K6YuvADvrFxHec7p7UZZx7TY2fq4wMSEkYSdh",
  "key1": "g7QCe5dzmQdKmNy4XhsdrXrN65jvSnmxXBJX7fXokp7JGSWGq85n6g5hMpKGfn3ag2TKfhFQgMouTyKahhbfypt",
  "key2": "2rYd2xHCVZUzAkNaUr2ezmAsfBu1NzZ64tQMtaw5iVghCkc7bD1WRTjJbS5kFQmp6pvXr2VbXYxto6UH7hAbEZEh",
  "key3": "ccBJEM14q1tdR8Vsm91zDF1TiyYsQp78BjVUHLvax9FrN3AdGiDNpedvSUBHCLMpiJfMDYaouy924Jp2vHiSN3L",
  "key4": "2hXUSxtVP7yhySkB2naU89uadM7WgGMBz7FxzRBFrVTc3xiRdbcfdQZEySnJ2NMK7aYWYgQjJY8pPtNsLjyqR18o",
  "key5": "5rCiNcKonvWRCySGpLbQ4auAHfp3jj7tjdqJJ4DwFjBVj2Ma68UxiXqCRxLSMUZhJbuPdTrwrub2jj77mog717ja",
  "key6": "4iGaK1xd42YRgErKf2j1XDj61cH6nk1Pi21CRvTPS5j45CvNHfFEAEhUZFwP4bRxFbhDWVUYpxT7EFffiNc2rmF5",
  "key7": "4gQdA8bFMKQi3WgaYqaSoAeUizaXfXQCZLQgu8PkNTtE5b6VTaQSz24wEJAru5FhQsH5vumSTKbqvvBBRNjthT38",
  "key8": "Z7zsfxroVLnGt5ch9HoMcwEQPFZ5QPE5tqb8NcaJvui2zefCqRUZDj5QoFe4KmYtPFydFAg6M5aTf3A9PNyaZLP",
  "key9": "4LqyorJ8oraNxhgj8TmWB7aEL9KFJRP8pQnUtPza1wuAoZ4zZcJHV1YPQPUG7GrDYz3KqAnP4iWULoTxCP3SZtbM",
  "key10": "aeRhYHu4Seznx5zm17fdpjSjQZAdGKWAQbRfZwBF4AzJsEHX5u15Y38VsBPUWdadjDLwCJXpy3nvwNqcehf7h8W",
  "key11": "4cuc4va31mvCxkMXApNA1DKUx7rxzLYZjzLgk3fcNZ1qiUcHgvxqEyhNzsLtA27E6mvBFkXXXRbX5Trz3kJ4cQJG",
  "key12": "44FRiTqksnpCrmcRdG5nR7LVU4TSnX4BURzy11exogMmUQ78KRz5YFvbcZL1SfDP9pq3VSAEWBGeGNwm8rZzCuts",
  "key13": "3Q4C1UmPt4UfCivxa7bLyQSLqCFeRmQyovgBtSGADPkJW2Pm63mjyahXxSFc1fxRy2cSiDA9xyvRVux1Ehk9ZFLo",
  "key14": "vcG3a5gMm6w4eQ4KfcY3CQMv6T2Q34ZgPU3J5dZBefwyCoaLrkvv4SDnTyiafcPXTL2qSbUv87H6FYdBQjvh7or",
  "key15": "9tbxeuLxo5vN9EDjLVmmnS4zr5BrhxXChKEh5AxVBmYagZ42iYctMSB8evfBKng1naCb3653EaACzS2g9gQ5JRm",
  "key16": "4g2AkSiY3izRTTfaxggmbpdTjX81M2rUvtekbEM3j6q8YGQ7wqRjdbMofqRCBFx3SH6Y1nXqYJRnj9f4DHCgyCC4",
  "key17": "2px29WpNGMMrGF8cRZfjTS65HXJnktAFb27NM897tp4vSSVCc4WRo9NiH2GRsEkgZHWUCSacGXMgoWC1WmxAAbjF",
  "key18": "3sUsggArahpQ4npLPc2eJrMNUcTGdCMf8T9hCRxdwhp4LncY48dQCeoBbNZmqqLsBs6yw62EevMezBVy6kj5ogPg",
  "key19": "2vCWbZGwNXjuvE8m9fjfdRcqDCVJ6gKcmVf5pa5i2EVkW6rTNxsWK3dQZeAvQ5McA7RmUFntuiRXdc6MXgSbvU7i",
  "key20": "3oMkXkPCdWdiBiqjQS72MW8enwax9JxxDvdEPWYT1WpSuL3YDtS6h1hHF4Dq3XxmzCBZwUkirFkX99YoQyum7bik",
  "key21": "5tSTUZb73SP7PummbkeVPjUfN58zzNmAHS5ZKvpPNkruEVcFvxGZ9HDDvnE1jwrp58Eb1mGGUwU6g5PRa6SBhrSP",
  "key22": "3B6siSZiATqGjKwwcnmPm6r81ifjYXMdGFxK2ZqpLN99Qcw6xSxZiHLhS6TALnG6cTfbmzHnGgX8acx4h1L9zjrU",
  "key23": "5r7Dij3vwmT93ySjs8ckLqS1pmtueh4cLDdbCe2UPpGsHAxn2zWDbHzN8LQcEbUNh5iiaL6y34B6N78qk3UXMc5C",
  "key24": "4dZ3tkaLJCVdpwGU3prbKw79ETvGqCbfs8o74KRy6VUnNEcez5C9sy4DHHyEdhuAAPxhyBfz2rHQo8oLs3hKtSfa",
  "key25": "2bZe1uWgaUENVYRdoZa127YhaKpU7C69Pa44bAJjPobGA9WXXhAqZYiX691eCKVG2Mg7oU7ekW2WL4rzngzpnmEH",
  "key26": "4xR6CXEzijvGvgFARfAar17AukgwxE4h9HeCimsK8eq8KwwweCWXQ8JUnc6J7FdRNpRhkb1HXmUWx5NuNUun33HX",
  "key27": "JdMJBukdvhtwynx4fPkxrBoxLQJdgP8KKASZtVpxfdhiuvvEkTcP4rbG2idGcRxgqk7Z4zcFt6Cx6LTUiya9hA3",
  "key28": "5BXYcGgnnmsofWAdvdV7Pfu2nTWuUAig3ru6fKamHiZAPtNxQtptYEtoqnM2b4mPFmFCWkkLSMhozfDaP9LR8hCo",
  "key29": "2CnwSAb9dhNJUDWzd4P5t2giHBgoCccnuS88y1x5mvrnGwUWi1U6XxPCmav3VsavMRcwQSnqdn8cdhvkn1Wq2Qk2",
  "key30": "43dJEKFPXgQE6sSHXfeLhsr8A71Nx3RTG68sfKHR4xjJFMSKakrh7UJjUhaii8TMYdFqr8eBgeraZhkecvCdoC6s",
  "key31": "33QqcoLpdBzvbStrpoRLWrzFC7AfaAPG4Kxiei5DYvwAAkywM8qqLVYbMHtaqAmx5ruBJ9ZKfjojoF7MSuPBm9nd",
  "key32": "64vF97fgqbvCzX82rhVV9ZNjwS4roaMbMP7WeRPMTnw2QtuSfWQNnnveXJQYnuVZjfU4pvUed87dT56omLPS7VxW",
  "key33": "4yvGdw5CGkCByxL5RooYPw79ygRkM3aL4p95at1SYa1CiKwUonRPqsZB1ZuYpRXUKDRaHiQGnu1WL6kD58bAn2zU",
  "key34": "33oqnMATPK8vyUPqjMBBxnYRmc85wacCmCwgGgDsadkRiqNFjtwEpb1VeaMzmP8hYHRriePZULT5bgwq6HeE2NZb",
  "key35": "QNGH5d6tM2oWeYJr9SgEGphbzkY7UR9XVuzX2So7AGX57iVZzb7jBDhchx3T9uBLQjnGKV4zefMUH5wUXs9DVLj",
  "key36": "YaUTBTYRDNgBsK7B2giUgY8y2dkkAKbmwLJv2FsQe1ojSXY5cMFrytV9R2X6YZpmuuBxAyQSA1G6F1Xv1oDPoKA",
  "key37": "jZ38o4NbEfWrQGNJakso2iYMrfTuh7tWGqiJ8feXBRJXptFBijvNRH5dodGTi3XhhauJk2sAFm5DLeytFNM9ake",
  "key38": "2GzgSxBK7VRNAk8fHhRWGy9vXYgwJkTHRvodEat1HJMjGtxo3srvPdBXiWr3H441zUTYdAAkmFwfqNXsw3rtnGJo",
  "key39": "3xhbpqEydXbR6xghLt84aqUcBr4N8JM5acF9xFK6jPFRSniR9mXQYNL6iWo9n9YfjRi1D4oHLd5AVke2vuSsAduJ"
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
