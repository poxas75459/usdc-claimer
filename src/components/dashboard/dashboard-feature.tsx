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
    "2uE38oShwozhuquziw4sGqamBjefrYAn5WUDF3EAhYfWVAQYA1tbS1vSBsfjjxzkBupkKjP2nAfEXKo965NUmDJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3Y6o8jNwxrrsos6dfNBX9t5eS3LrGXxyahGnTJpGYBmECUtfvRZBBRwsedFQ97wmjqe6WTTooaVCjQjMeZcYqH",
  "key1": "R1E8F7L1tPbRB8QY6kDHfovsNKiZbCj5wvse5QXaE2YoHUJ7b2DXM7PcZXKuc2QJsHfHj9U3iSvn6XSdKz26ZaE",
  "key2": "5eL3ETGU3i12JFcQBMx3cyKJtGENupnpVyJGTrqqRhJDsFjy2dduWMpnjFxSavHeMUYrhtzSyhTWbaqMbtxVUPWG",
  "key3": "51qV5Zb17Ncqky9Vo3GMzxgfeCNvo1JnUJKUUccgFZz9JNgRq7KHtMmcK2U4dVGZQ4Kkwaakufn8vP6npgquXa3E",
  "key4": "siA5UGJpmngPGzjPBn5f18DTFr3xQXvugPLEUXrGnWeLyfyKC8CAhnqLsLxsQy72wXZY7Hd7LGY5KehSo2oPkez",
  "key5": "F5ZpnAT9rYAWuLKdbnXHN8XmVmWZqcJ1goqujk4LwuZyAByTvks4FrKci4aPybnp334JsRCViHLRYFMyZSNfKn4",
  "key6": "m5e62tcDMGrmJxo1ynHGRZgEccJid4V9AsH7bUNQ61cxEqPcKWkyJnjZhqDuLggx1fHtHYCoPFgrH3X68QfDKLJ",
  "key7": "416NcNM8x8mMSCxPCzCM5L1ufZo5rvzQiQVKBRdFRu6XYa3CTsRxKXuin3VkVxBnSJMecKeU6Utm8WpYwMiV4c6w",
  "key8": "45m3rfm5Rj8scryi8iH3nvLe3faUsaWYxuJvBYdnJZ8f37r3fgzw3vz6ER7h7VK4kUmYKWTLHJGHfkP8bfTNdHbA",
  "key9": "3nWb4BZV7bm1shi8ftQC8sUPTiso4Fckx2C4ChZ5Rk5LVwJ7bxfhCyBmsGNrorNN6zryJ6uF2qZ97Nt1Vwg1i9ka",
  "key10": "43SihsBYSsxGbBZyvqmrvxdcS9fpfdxZCdhP51Ff1ANK5hK5TVWCbiUuLsViN17LrnwzC7kvJx7dS5NyZZc8wwhd",
  "key11": "4gTNjG5EWtFXVPZ81RYpEZNkVZ6uNVFg2jUHMwd5YWVxeSEuyM3jj6kMSXWNJBdktKrSSHeStkDBDsE6s2e1k3KW",
  "key12": "2hqXLiiJY54osGVPrxHZT2kmNC9GNnmcofPtU6QJArkV9pRFT5VtnwdBpwhafd42GVThh4CvtVLEUK63amJFrydv",
  "key13": "3WRqRpjMFDyUwRmkKQx5gWZLVaw5KyUjjcg3UvkvD7d7QmpPd1NBY2pCrAQTy3z7VCKSbfVZ7CPJAVQmydgKUHgX",
  "key14": "2aUhMFuDbWSCZUP4HRbKEDXiaUnGbnThLZXSfGUcg9c3aAXR9xFzDJYeTmXa5cf4vKenxK4Xywg7rzNDvys5Nqqw",
  "key15": "2WGLpB3H9f8Ey3SgBPUEbqt7W7L4gYV7HLHFH9fBo7Jtvd2a7WM9s1ovTtBPMQWTJV25MW8roKF3ogv16veaC9w4",
  "key16": "3h5pyn9YhkZrpgyDtrXcddUTuved3kfGmbHiZEx38p3Ukk3jMrJ1Srm5qzQxrpvKRG3g8eBjpo1j6TxgyD5BRY9w",
  "key17": "51KvZAGaaM9ceCBon8YLW4zyWsXSi3r7pRHBz8jzMb1AbYJsta1Wuk5mhuvtkxz9FsAk8SpQMnSwz1T4uRth4BhH",
  "key18": "LQdERWPoR7o1jdB6o3V7r5DYzkQPYc5X95WbE9TvQ2MsMrnTuZNpeabnDrRoqw415EELBKbuuLZnZTKAQdtfSSK",
  "key19": "q3SuAUppxMoPrvuMgBHj7A845s1NPBnp3yWv64KGvFDVDLtQVJ4LWqPZCikoLEksjBA16QvSSWkx6bjF2uUXwqZ",
  "key20": "4vVy7t1zXEu8ZP9EAdgCpAwjjUamGkVQTuLMNQD7Wu4zXvJfWTwiN1LsWyLT9Qh7AMTbf4Mpn65hbFGj2ERir9y4",
  "key21": "4HN4Q77xQ9mYXUqkdvpo73ydpbouBjMo5QxSN7qyd8kuFgxsw3kXTxyf7yGB4ppkeuxdPruXzURXM8BsCqrMUPVU",
  "key22": "29HdCjRXz6brdQobi3BWg95p5Y1tGkPQbfu74L4wVxMgrYMzW6XZmf3xJvgPEneSqPR2FzCvrLUs1mSUMsLrEBvv",
  "key23": "FUubQtxrPaXxEYrsdA9r5cDmQHLUW5N5mzktegz5gdbxd6EzFMer86NXdTAX7YSEUnW4QAXZ3efC9ZL7vYQvjU8",
  "key24": "4qBSrRi4ykTsx6zEBGoFFhT92SzyLxgtsMXUjD9BA3XYtyiVAREfTNH7Ps63RGt7iqtos26VjTxVxY8SW1qiEYkM",
  "key25": "fb1mMJP8iiaVy2kUs8tdH1ZyzeyRS8uAWUwaB88sM16YmSX1yuPDWta9SnyY4CwBJhY52uFu1xLCtBvD9jFuGGJ",
  "key26": "2Evpyz3FSL2u6eZSNLmfJ6QK74jwLcYsPk1SgtcgVpDhY3pntqDiwqTaFj4vn4ZYuhnp1hUVaxQa9mwfbGfrztFu",
  "key27": "5SvSKrVG7q5FYJ7Nb2najnheq9BBA112DCUH1qr1Cyn2v6JvZyj8VvxSe4FLHrNtBeQH8tBm2ZFEZxQSNA4M7WdP",
  "key28": "4K55KSiaTueBnfRd2N2tkr66eDk4ZGfHUzoU1uSJu9nPrCRDvTtXcYFDDqaZmi9g9aaQ16Hom72nPrQRsZQ5bekT",
  "key29": "4FE5Vx9VvmfFB6xZjXxzeU8fQR9J1Ntc88JCyUohEysziRd5iyijwGrWG5bC12Uw54wFonTaZCda2sDcWz79g5M3",
  "key30": "5zAA2FHW2MKJerZoPJyDhXAfMuPAtKx8dusY9Y4RZtj9ZcuUNWeKwMAzEmvy6XSxecWUCbQyRss13JdEs63Ky2E7",
  "key31": "5CtRJTPziqVG4V3MYQeFideMuSfTYToF6pWL7vNzBBwwj5dW6QQxfhVvkv1h12n1oERp7MBLF8ZQ82AoHa47dxXz",
  "key32": "4GCfnyNKUfRkv7yvqFeAYnoTsrUEFdCLLey2DqZQzuRDkjsEPb6usFcUJ4inJdLnKmt7NQ1S3FnfZvSn614G681f",
  "key33": "27X4MpuUncGWkVeC4KmF4o9mXvDJKp73Txz1K6pmUQxNNCmy4sndKitz1MyWAjSXT3uitutFKu33MJc6QXJqzM8g",
  "key34": "BmmEomAdcNA2c6twdDX9tXcmUPMUXvxFRqP2144JnHoDpW7mwtTHZtFMX34JFy7ofwgKKhy1TvEFKxCfFQUyxyg",
  "key35": "3WUfaAmvHFrM2dREDXD88v3phbzLnKjEG9FWv7GduEQPoSmq9NVSLpsNgacd16JtpDdUiHydkE7QX8CmMuc62z8m",
  "key36": "567357pdCv2c82bQ8xBwjh7P6mBUkziqx5jAchvq2jLCJTh7TW2udEayziZfGSgJRoYE9XMsBBFYgQc8R6oGNACR",
  "key37": "5DW56nUzWjqZNs2GRcQPCRAG92VJsVLUauzmUiQAMNeKikkd7XB6RprqnQpRoac8G3VXLHkChLzq4fNjMYA8ZhW6",
  "key38": "2jGv1zeQGvQ7L5zPVR8cwaaVs3uyEX4UjDcTrc2gtDh1faJpX1o6p299fajv64n3Hrh5sLPt3id4CpbksaQr5Ej4",
  "key39": "4LcfEWRpnuRvrD6tq4cjpDz7R1xspVtYDd7jCaYZJMukdrVBzeF5p5nJcwbQWsrozSMp7CM37W4Dc1P3Spr5ow59",
  "key40": "3srh6JdaEn52jqxxm1EPmdoZoW1JwFzEbDATmgLZwuSfcoAEhmJHavhWYmLQ2gyByntzZxRReWpUS8WLBJhd5HLh",
  "key41": "4p6qC3xZzBvExc9jyx4eAoDwfC7QEQXefmdVc9kTygSZ6Ri6ZrJ81aZGiKTL9X6d7GTU4vyKJ9tneDEJByTcGDUi",
  "key42": "ZnJB1CvKCKiJUJzZuWE3MfmxdQ7iB1mvKA2yRVVhLQ71ArdHNSeLwJascMeCjqJDYsGW888WNgyMaAk2M9f8Gqu"
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
