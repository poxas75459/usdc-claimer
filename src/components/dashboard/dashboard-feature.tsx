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
    "LuXD5Q3NTtXbVuSE69rDutnRRPvQSXPnZ7Dk2uxKTWLDPjyHyx5euhR5HP6df7RmU3drLMThTrirxpwuij1qjWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHWbYHp5Y5RDYi7LU7WN4kDy74GUyBYqQv8UnT6B7TQi7EEH7dat55bPAYUpCrttWcGqCDCfXJ72PEzVRhgYdWJ",
  "key1": "3MhHJK68mGnG4ZUdHEuWhJWGBjrHNnXAfcxFfrBYnzUA1odT95DcAS8FzoBj42NkUdP6nwuyaTJxGohjmgJiumt5",
  "key2": "2iQnFxps8P7qySwbepfBpMrZgkBriSpaLMLUWW67Y3iH1Ynp4iXBLpJXbQUqphk7eENgZ5L3MTg6dM5vgVP4WLEr",
  "key3": "3ueUTeoVb3CuhUrZtuMEY2ka4h63LQgyG5JZnZDuwHFtqQEuFEvzcwLfAvdiuoYApwUS7WvPFpsgc96RZE9c6rwL",
  "key4": "rvi3ZUvkAMdbwxtYRSSCkiuKCZjpV1EpykBShTU8qHZ9xYxTXxi63PWaPfAoVZqssS894v6eujDyAou89T1yRNT",
  "key5": "2PpJfqag82gNK1ruyAuWwS45SQGESQGbEq2wTFfUtmWwXhCPWa97yNxEychSF3mxaCxa7XhLXTfFgEWWTnGrU2yv",
  "key6": "62Eu8VX2JCSy8S3t65aaWqC9BdfYQnTUY1PutuE9o3pefxGy1Uj3myouq7QGvJppNjmYznSe4M2Sah7psp4a3PRP",
  "key7": "3XSECqGTshVDVaPZtrsEYSPWiqB1Eoq65xo4xZs5oK9PoFca5mFTJRRMvprinpYYzp3BstaF1yqAM3Kq7Nq6Umnh",
  "key8": "R5bZrDKmR6thweZuz3NNFQhfrsURQVGW3Pz67Ep4tkvfG5vcDXHEMK9ZRdJidPRUbpbX7HVeV2nbzVE44SmTapR",
  "key9": "UGGyoMrhQTdQwcdSnnbhEEc6rN5mhbrbtsYqJshKH2VvWtUgJwddi4VBbLQq68s2SJvuTri4XjoeHQT6iQ1hyaW",
  "key10": "3pGmLWV4vjzWcuQG81HsK4ZAwQ7VGSqoMfjqLuQixg2kkRp4ZmYkU9eX9seFou7L4W6agowzJfYXoADiYwjEQkPn",
  "key11": "57phYKi68bUAhWPpoQ3Gx9EDssfsqfugMrjdC9T2EAZAT5CKGVaANzgFrnxRJ2KAQeFEPtJSsawTK2wca5BpzS4a",
  "key12": "5CMz2efb1aiWzhhoUne3LEYfkhuBL12fnYKCjj4B6idb2UEfuF3rSw6xwvVSEGbpegsw9dGxW6d1maVdh4KrGC3j",
  "key13": "xKtEcwZkbbdP9VAS94QhScWo7H2Yssrfzj9iUQLKBPmqkEgX5FtSXYC746buTPxiPkCKvLS3KaoaY6Taij8nb8z",
  "key14": "5haiN33fpyEmjmXZ4R6d8V26gwVoAKFEn33jqjdQLBANb969NNd4NYNMf14pV1ALbSgFCTw5ifYFyv2an1R2cun3",
  "key15": "2JPku3D67JTVB4NcyJDyVmtkZgEFY9UiLxdqWL23guvRn7USiWjHLKQNfMx8tuzcfMbhtnvEE5VReeAQGmAdxM7m",
  "key16": "GQCVGPF6HXAbUM1v5CoRf6xv9CiUA3fCdqUnyzxPmenQo3hvo39sZMSno4zzRt3Nzjc7HmQY9EpxS5h32G3mvwz",
  "key17": "yxrEZ62weLG8bk6mio7KjTKcdcWHh32dfw3M4ksmsEQeMJCAzhBx26quj5ASFtJgEvc69c4sPHaybPuqGkc4tUg",
  "key18": "4DspbcwJRtLYJ6pgPkWHoTwPYXCWEfPEuMo5KUNnW2oFkn112DShHbTMBNdvfXSBrRtjq1YYTy7USQZKnZekzB1S",
  "key19": "2nMoQPEox8wwNJ7LaU1q9qyzeV3DY5E8an6BCez5noMmttuK7PX2w9jTDjx2XdtfGXN8527WRwcuY9PEHMuiRMUJ",
  "key20": "5BdJRLzE1joXi3KCxfBaRZ5XJwpciomkmDEMpyqEaKAZyxaepFsyqtGdtT9xTGbWxAL5MwszCgkUKud7zmabpBW6",
  "key21": "58Z6WxSnhvj4aXf153hsAyRF1h95iXnkU6d65QAgthqwjC61we3p6oFG7FaBzWm3Br9vUocU7uJviNxwdz8tuoN9",
  "key22": "fVebhsEDFRqVXZcrLnpbfEhfReyjiFDcWxG6g5JPtgobf7FKutDvCzg5bDS8usYfio3E1nPBDCjaZprHm8L1jeX",
  "key23": "4Kq9TNffgaPXiKHV6eqaUMKfZoYYMymnhbiYXHrKR6DHsGdMBaC6QvzWfKiF6TvJfwUCRZXf2fCq9JB52tGNBkbj",
  "key24": "23Y8SVsU3CB5mx98CD9R3o6zzwjPw5MsBEJdtJGTvkuDgrWMrjRxQBuwUizoFcfdVR5CM6gq7cAphM8qjPJNFyuc",
  "key25": "2PbFFowb8trJNw3t856A65urfGbcYgwPLJNmRcaHihFBbxmcPwsnkRfAAUcYCtDpGikwcSwY8DGCHyvWCthe4DDC",
  "key26": "31SpoCsyfUN2hLTgyDXHjE9sgGwRj3CQGc2Ea5zqfPitakuakqwR1da9UT6MP6U4zQUm6dwTd5yGozKugRFV39Rz",
  "key27": "3KFgKz77pZE1Fe6eusrnbGDUGbTSYe6bg1SQHkHR9M34hF1Ump5fbdgUk42xRTH1ximwkBtJxp2XtBfj3QUR8XXZ",
  "key28": "2dGcHxx2wTRTbcq8Y99XBmijv5HJ8nZv1pvutZKorjaahBgL6hdY7rEhCG7GnGEmkyU1m12YpfnV9uR3VDs9wYNd",
  "key29": "4u1o4VdmCw8gBPd8gCRsxvfa2XdvA2pcoPvXCQKYyLAuSBg7gGEXNicHtebcmkn9TNmR79tjRfDY4xdDg7eS46eg"
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
