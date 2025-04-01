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
    "w6qwDCN8DTRCZ2tDttjQAMCGr8hdRMQeFkKry74SLEnU1pjJjtF4qrvyctJGDrNNr22wdcqzkq3G2UWJwc8ixSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ccm7sMLLzfVu9dy3JmGcA8UFHMJdvpHxZmDej2tX9txNSwnrHWQPh7THpYL88jVaexhkxgFwCEpNMzENu6Ta4CV",
  "key1": "4PQrBs72JFZ1E3Jjte1T59FbieugQSH5nFc9kVkiYhkGGNABjFEW6yYj9ALnYBbiN9DZXTG6gTBXU2QaWH6CPA1G",
  "key2": "4yiVvSsDPzR6XFCwshoyiEnTbPWnv5FDtWxRQegsgcCXVtvtQWS7Sx8rhzHmemYVr2V1jFYJMYmFRNeVLwGanvhi",
  "key3": "4r2mX7KNo77UQhPfHuiM2wHF585c94GkCGu1AxMvjFMhaFDHpLrhrUPh9iCMbUxS9ftGuYAiWRTzk9de3MCrNVtQ",
  "key4": "34x7qgNvbqMDSt9qtbxaAMSrkv5unSt6YDGdMGcBjPy5dKgVRNnbeYPXHcZn8n5aMnwXHMF75Vg9Q4YC8T6GgVpK",
  "key5": "3DqdbxhxU19mk5wVamqiK43dDYJBdgLEuYjEL8JmNdbVmnTKNJX3L6Ys1rYLYF86ubMeUjgY6etVfTfPd1TftkqR",
  "key6": "UcshAnoRfwxvYEGeciZGs9jwqsTTj1KBXzPL3BKFJMsrmQ8KLHeUUkXVpnbYEdM8bvYfRGuaFaQarKaQGb91cMt",
  "key7": "5h5zE7Jp8Pu1CU1iKbdzwh3mZkzcBBDTUHF2iNhz6QCtP8KmoUCKQ7Ys9X7pGWLfSMq9o6A2i4T2WXbupoUt1uyf",
  "key8": "4Sxj4mS8jZqU5vqfk2FoTk9mWMcddddhZbnDidvtbdPgQmTxj5RfyEN2v7UsvWXxgfw9D5VRu1MUAgaZR6zCaVNn",
  "key9": "5ygiSh6QqKdJ8Q7P2BX4kPjs1K99snhgAPkQjQhEGp5dwebAMwCtZVKHmuy4hwKHuRYqzyVYuZCNQwdLXThAJ4cy",
  "key10": "4kGDfGaGuUVHLdpDrMkE7rEKspr9n1CfZh3ZnAjR5PheeGgmrSreRJDnquDw49HjPaVCzArtuL7ZCeoGqWvR2HsH",
  "key11": "3FyFsoTQnd2dFQjZkjwTEAKQtjxA7ckp1xc62hDEMUM57fs8yDrvRBuc7pTUAaHHw1Atf58qvgJLKnH1FLNab5fD",
  "key12": "4KttazY1tndSbM9TyKxtWexCWyAkyor1njRw2mHZKY4vA1nP3b8Xq7jveFnYNqqwduACqW2mntnGkxatFq75YRAi",
  "key13": "3P6f21xfBt8kUi7EFhGnujJWhjY7pT9PzjCPczAzFtN8A67xuJ7MMq66uWk6ekYzzzJUfSWjGmRitiF5w5zoPReX",
  "key14": "2Wb41wTLnCBG4rPGMfTuLpiNhLYMZgajcK5AuBmS7DFUMUmtmjmRbCRLCPjNM1FNNDDnQ4VQb9VoDEBgtut4zCYA",
  "key15": "V52zzZPGC7a1wsqPQeVPTRnGjU4RMrJ2JtXAK1c36gUZtyHmb8VFrPjYb9VHT8QWJzJWiSmi1hXDrxDLmrnyLcV",
  "key16": "5jFC4fvXV6XnKP1o34r71ukQMeeWTDxghenwYgC5dsjy1fexJN6WsHNCGbUjDZ9rQSDnibRq7zexGokpT23g2t4P",
  "key17": "2VCzShTiDapjRSGYAdP92suEP1vbxE2e9TBw9RPcVHNkwGuVLYHqtbgnjjxogJZmmd7xWdnxxMfNbNJ1JNX9NRTo",
  "key18": "4JmV6SNkqNQGCSkKtCsQVoCMjfKtDNkuQ4TMcU6vhPM1MtbeWre1NCetScbDZF2EGAJTxkP4Xg1sC191C3xYcBFA",
  "key19": "49CZJH8vYj7owfgk7tmujSpCQJppy2LiiXeVRAYLojgXvinHvobEy2BXLeJSDMtRfsDQTSEPPEKC6vbnd3UiWpyH",
  "key20": "5MJpbidbyUbdETDrfbJhhYdATVzSy8rrc2zjsWdFRCgTw1vk87V3mEfEBcnAFJ68NFQ1TPda5ykycovmS5ejFRnw",
  "key21": "45L272LQPnzSBVJfXAubj2vK5EMNH7vJomm9CKWaTBcwAxKxMK5kUXAXz4HEx9J7CXfHEMRgNLr2kyGDvArij9Mx",
  "key22": "4gg3gK38UXsH5G6XQ4f4WXhMKEa2rmYk4qVxj4nubfUBpRxfi4jNU1gXZncB6XWBRSHC5dQKVkcd1kUnk1KtMJAf",
  "key23": "2CcZTzQrWRET3JpyvyjjugyrvBooq4TzGkFhYCtcGuPeeHaXjyozjeyBALv1WGK7vJtM2vEmhF85wAm285Ro427X",
  "key24": "4zQRyJXDxnYNquF8qMq9tNHQXsTqmwYAoYRTNox3wicmeMPYFhWNws1nCHSi3kdYre3WZxYx8EytmPVhxEJMezZx",
  "key25": "2oepCXEKw2SLJzRQHVVhLDJF8MxqFSmWtNiJK2gkVoc1GFKpxqXUgxv27R5echX9UZkacnPQySoTCNApEP2FHMeq",
  "key26": "3SN7QkoGR3vs4MWEwRi561fTovfmnFKsXzCy3jAasvnaQJtTeVrTp98rFsdL1iXCtk5VY1UfyjDHPE1K4mGJfeKA",
  "key27": "P5GN9imaQF4ZJTuBPBjXPt9WbaR84k6g3EySTndftZqNj3tvTjxikVxqtec5zrGkyKnRHbc84DavgDPj2hNd59y",
  "key28": "2ryYGHekBTtUFp7MBtRPtvvcw11M1Ji2KypN98pkwqv2xLS2rEdqSV3WVfrz4mQVyHBgZpQgSYfE13FyeQWJ3QAw",
  "key29": "3LC8XErRdPr5upVJMx5ssq39c7B75o5SywSmW6n9NvUmwh77k5BVrVsNMimfmewEyNEkeCyXresJeFQ4QfyfU2n2",
  "key30": "5PSpZQU1dySaT3msGgjQufjonnSUt9TMkJoPCtSZwyepVqJV96XUTB18jsJ4qCNq78Htv4pyzpKUQ2dJCQqUZzTM",
  "key31": "2xc1KWPXFhwjDgNGtntXCjar78W6vYDrcdQNeoSskp5v2EXzmXHA1WiE6A6iaSLjLSPX6axCQAAb8u2MhR7ktpfC",
  "key32": "5PbmPKw31hVw78uhtqYgv7ehJNeksM9ju3nr3e4Qbt867oLrjp6MnGSYpvZ4Wncb8D345vHG3LhjLinbgXr5hLbP",
  "key33": "66iaVPs6LhK73myZXetuGLjRw9BHeH16g81Zmyjd7RXMfm4ktB4uV5Djqq1HYWxqemGKcNTVpQh4qSkqZ6VTh71T",
  "key34": "5J38G1rihw3bNMP4WzrQeRSP8pRC2uWe2Xp6hEAP2ityHrePtvhRkboS13d2khPjdineHQ5rAdLZsodMMpTXWVM9",
  "key35": "65EdRo72zSwykotR2Y6YrRb8YAUk1CAj2BKCS4RRQCzAWgXS4RXNmney6e5T7ry5BXZofmBT4wTScC7V1QcEdxRe",
  "key36": "4gtkWiEnYdL6LmqyCUcCXDhbjbU2seEebrmG7BzTygkQsysuEtc9NMn69xoCcc1b2cQh3bpYRzGRgPnMQCNGUzZ3",
  "key37": "124uWbTa3sXcwMPbpsz4hnPJgYPVef73GtMWsztsTRnDuVHxvAHai5koYp7HKAerd4s3msNWR1Yc2pYh2nUKd9RD",
  "key38": "aeLPxyEH4SnRqAHwkkLa1nLA5gD8CqPoppJA1o1S8y5od1CkMUxFufLJW7gqkQmxFzi7xFyj3dhFJjDRC2wM3Dx",
  "key39": "2AXQLRGyZWktZDL6SArJxkW5JemdMu6QCv8NHCsU7cBcUXYYqeQFV6JKJnLs2ZSYU6FK8HLi1c26xjfXewT3tQ7E",
  "key40": "4aV2aXPLocUAChBYvvVHfQ74Esimg7tZgWWxutNy4kEC7cW5Rr65VMLMDDT5uD9nTKs3rxWw4Dib1g4dz3zS7KeU",
  "key41": "8Xm7CjYyFP3x59tXZe3LXCKSEwiYaLNJhgaaWuFwDKp8Cw17rbnZDpbCh27j6qVFybwbCnTDKNerND9sUB6XChM",
  "key42": "5ZUuLxbToebZHDKRh7DSVcvLzcjmKNk3zjEgbfKYq8XUgN7PA7azaXwb9vG8h8TEK98QReiPYCgRWidepdxujFxs"
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
