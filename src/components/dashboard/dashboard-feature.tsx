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
    "325KbZkuRGUPt7L9pLBGt97fxHFXbWJrcLbVrPXE3aD42pkAYgHmgxRa5LrB5QFZqh6hdmS7tXAg1YtiXjnkBX7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDxZrJiRodVqZqvW55ndkn1DqFfXVPNEw7x8Jy8a3WMLKecqLSnnF53C4RaE6Y8soeNbrxXBPoDoQ1EUCKV2ubK",
  "key1": "3hEqPCKDmuTo2UyWqD8DZ2y6Q6Dfqji2V8SqaPh7kvigLr71jujs7wPLcEngCspfgidceiRovFozxEMHtR8UbWay",
  "key2": "434XnLMsA8ykwNyFgYi1A5RBdekM5eQhAmKqPmzkQ32ixtccdzq1FuL77gzyQrGTdNk1hkHgLKfkoW7RvKVVkV3z",
  "key3": "3MpdFY4VwpfSacdsWjG9aChaYjhgPaNRBvnYRpriVhWKtG47rNmPrcSayr5d4aHU2PVnxS8bHfpigj45HQnS1ave",
  "key4": "4Z5iXBXzQdnm6eupPp2FNHcf5UeeHW9jiys4mFM9RTdpRqEn5YH5LSruQoM5DQftMScJDsspHEnyujEShUgeq4iT",
  "key5": "44vYv5X5w8WDwhpcGdZcFDd8VvJuvpWjjTX1QrHudW278MASMLVCeVT7G2XXBi4ok7pL286V8iRvhCj1HfV3Cizq",
  "key6": "45VrxQzw415qR6vKVdGnPDXiM3dGd81vvg9REE7zrppxGUtHvVZwHFjjS2gxokWmVUAYxLh2SqXYM5gmV9ER2RWg",
  "key7": "3rVkz2M6Evq4seFGVycaWjYX3yYrjXGcZBTs27CoQem2qmep9ACfENrgrD1M2wTscVQBqpxPkckarq7brxLfB2cq",
  "key8": "5fEcP68E7AWXJc9RSsiRSATyGKDZEBEfGV1e8AJzB9HyQRuZhBKTtq6J1RZLByB4tgy7znfbBvdf5T8poC9YDKSo",
  "key9": "37Xy4PPuBTNxaMwehqxpcEikob7qfz5SXTEWNZ3Jrsb6wMcDg32uDrCz5wxfGZdgJXNePvua3rgnV98pq7fmXD1",
  "key10": "41w6Kb1inaBmq38dF1nPezF4VAD7EcCBvL6MEcRGU6t1kNmhMiJaHsLSNjy74RHLYYTnvjC23hagsWVeTnCQCYwH",
  "key11": "4Zrn4waKtfNqiQBsfQ3SZQW353agg79r39FkcYPLiUgHjBa9iE59CKD2mrSHKFkSroffDUffM2qxZaGZLoZ37n2i",
  "key12": "5v5QZim5V9fuQv4GRVeFGQ2DVyhuuThc8gzwhH8AgVXqLBAGxcYjTJnnzhk9b1TA57FkVuxQi4CJ18mtLJWnGiFv",
  "key13": "5NE7SaxMi4ToQkRMxiwpVyvmVKvfgn2z8ZLrHvAZNuAvM3fbbD7PPUuyEb3mfWvT6tNWxDFQ7riQTksuautptUJp",
  "key14": "r4nG8tmF7sg9mzwCipHHLNa6jZZnhRkEdd8ScuLLHQiZzJKtxJT544q9whfYRCNb3RbXRak5H9VtArBVA7jhQDC",
  "key15": "ycd1ApfN6KwGktUGosHj98CRf8zntU4nFnKR3tBuxmu2HHqBotXZcuUR2eLZ9cvdKj2ZLH5TEF17q9mYXGEme2J",
  "key16": "3ndCVmppsmDKeQ9DZiJzjxJWkC8tvZpQKmS67ox5MzQVdSoRoCtsd5Ed7WWPJ122gFjKGWGphrbH1T26rRWmv1ow",
  "key17": "5jiU43EUAkyUJq4QDSxXuV8v3mgVSHkdjc8Dzpcq3F1UN989bBhMn3byfht3vcH6JtzgjpRLMTgpKpkLt3GwWZWk",
  "key18": "39F1gJAS2w2rFCCUqn89L79WGC4txHyg4VRfkZrdVPEf7ziqt1s4WNMoh3Nr1Kg2KJdCvVdYUj1qzLDrGEGjrCTD",
  "key19": "4jEdSNQXh976zG3NwmPBoyD6jaHSM3EAgqT8GMWyz6hptFfgyQB2EKZi5yRx4uuXBLxywRExeFXQxMGtMQneZo1f",
  "key20": "JePsCwaqsMUWCTGMMRqWXa1r1c15sbUiNCCAGXVPpSdqp7eV9jQxqgE9KNzrxc2X5C7fcgTA8QU43hZZFXFryTS",
  "key21": "4hwa3gyNuV7msGorVsPMxG9WpjCMfSzhZ45czjjS4xS7ghr7xwV2oo8nnkrWFEv53XDmnUxFhg1HrfaGaD3bHgnR",
  "key22": "4oAtjssSSHtXpiSvYz4KTv1kLTgUDfNvceTfU7Tpj1QTzUD374oGTptptdMvdyEMJxWQvfhVhsTztc24JoDs43gA",
  "key23": "o5CfMpxwkBpn9SZo6JZMhvWhcTippiqWSWrJ7LFNAzYhoDCF8Sd91adLVpgRvSsHyPsDpJyaLHJtGgRoQDYemmm",
  "key24": "5BrpE3dYwtRXotprPFEmf1QBcv8zNJj8kh77uTZijNctu1LqnHBP5BvBooXqn31YkbUgTQHo4hL119Jx8APcfSd2",
  "key25": "2NGTBAWz6iMACwkDKUXa4EcqtSi9NsJWLY6Wc9RhWpBV2idpMTgFnqnxVbUujW9LFMWsfLTMLqntNnZAa8X14oT5",
  "key26": "2Ysn88RpyT8XTpC3ovdEdRMupn4uPQAoHG6T4GujjrCJ95XXXg4RUnvU6L1Dvd6Pyx3CeTpseDjusEXSD4s56ujg",
  "key27": "2SPNDyRrbqSZ99eeYWMpHoUXbovDAG2Zo9gi2iqshVLcaEQUK9FNVqz9wrwvUGa8Ege7mJ8bn1MqcHqSKPYiqt4d",
  "key28": "c8Z4mi5DRHinagPyqWvETUEwE5tcFu5DyjS2kgyKY3nAGiQjBaJZiJRnrMKj6WpQ77NbH6zhx6zgrUqBzvmKrmg",
  "key29": "2L8B4Y8vXJcTa2gZXESKNuTRSMtU25RpHoJuL6M58cP89zBor1kswDVnYtHDkpXm9CV4ocQ6uf6Cs4pupFi6ywxo",
  "key30": "44MuH7VisDFn3VXVs4LY1hBUwSbX19uPP7jUBPx4jDiJZRx4aBiqHh5nTcaYhW4Csm8JGXyDmukfUiMCeWmQCJeQ",
  "key31": "2vhG63GwYmRbhCtrsxPaTmRSob2jt73FaKC77JyH3R1jic38tRcTQW5Y9d5ZmaMRYzo2GHYXsQpF6JMJ6J2JxLBa",
  "key32": "5t8B7G3hcTkXV5iu9LNX7Xdm4hxyNQCybYEKbgnNscuYh8EMQnp81rPauUufchVRNaL8V1rTKs87gZk3ni6KDXEU",
  "key33": "5jLbNrXA2uN7tdan71Hi6fW4HG79DsohKnBd6VsV89ry56eXqTprXdA4pW57MR7WE6b4QKZjAQebbLtsa3ncvY5Z",
  "key34": "3MvJ8emdQazJnvhRUUP5YHzEGyPmh7aHvHwE65bxmci5K5mNnYghgfPhdrCthtjFAeMqkQJQYhYz4Vi4RCxqQEh2",
  "key35": "25WQrYYAANju9LBuzPb32WnF8hmuvK8XaTN8R5Stu6L2o2o5Xq58KDmEYqu3WqgGqVFqd4UGm1FqTjYteMFVGAAf",
  "key36": "5CTYfgnm6gGsgyo5qeoWhEj3GVkmTxRRB3ZtZFJFxQXmxn9xbhuzr2qw6haeXE1MARXueY75FVgX5tm6dFDvwd9e",
  "key37": "5ZDVyowp3sZtCPrBELCL8rFY4tX9EkNhKZyMKNF6cPo45MUuujBzz3Gk1CfsECUWn9XWoDjkaMz6U7vPvtDgeoiQ",
  "key38": "54WkwXt9s1c3AYwJ8ufrwvdh66KGxjj96MYADGw4zoN7JSkut2fpoo86GUh46bxa4RCdp1oaNNJHHLh1K5AyKtiA",
  "key39": "3gusb1M29CfX7bw5Yg4LDeVKJK5qZgqfvFSUL95abPauhYq8mzorbY9Cgb7qGwYpHa3XZdNFndWwWz19SvFjf5g7"
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
