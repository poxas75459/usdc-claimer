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
    "5jtNT592q5ewAFetXrBQUjnSu8zjyd4MQEE9R1K9629oGRLzUoeedJ8LKwkPpif8Ffn1qHYbkit2oLV5sjn5MvuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdzxGhTdZjFRz6oS1CPSB4WuCSDmwtpCB9z85JRcWH6gdeqKL4bcDCbe7tKGzUFfAVyBxZoYHFpnn9X17Ju2ddv",
  "key1": "4nYQS3o3y2c9jvZeVamhWtq7N5Ut9k6Yh97sf6JHLWFKxzLDKjrxnBgTH1uKvWstkYTx6ZtYrbBL2jhYVPMDfZWP",
  "key2": "2hjeC4nFwYPv8oL4e1uzdAgri4ELLYe5dULrdAhdMp9rfGUCX8VoWn4ucp2eipA7rfPMoKef8TfDxEGGBi53sz2T",
  "key3": "2rt12xTAKiYH6TWmcq5Hi81JxiXnGAoaseyyBxGwhb89PnBWbAcvBtJPEaYXYXtKZbn2Kp4XSjmqZgoCLcvS3g4q",
  "key4": "4DEZgK9NMnBuizqbaL1EpwSBpwtc2pmmdPpDYYYx3CrdZ4sPSyxTp5BSFQEz5XBohaQihgoeZ6kk29JVBLHdpBpo",
  "key5": "HCVBQkBW5ghY5uaAcz8xNYJ65nsiXuHmfF7CeEaSxnyFvxYVxY87gmAL7hWPZYCg1tWCvRsnNMXwZFTgobHsFRZ",
  "key6": "48Uknt4HyyYZYm8QWMqSwHncwwa4EDyDzsq6njo4fxr7SbEBu8HXHUT7GRboqRFfnuv9tK1fqyJqeNLcmn2cjVwU",
  "key7": "2GzPv43eXiWAnbczYLY2DgshRXAaDtf7XMh5ALUTLZjJEvkqquTFQXFGscsCThr7zqpyfAMryoUV22p4q5uBhXS2",
  "key8": "3trUfZEN2mvwP6D7VzeYrqMdwG62VBHUF7hsdcZC4fmYMUiav8oqRhWDafnkwfXfD8Qjiq58RF9XHV7vJeayrK9U",
  "key9": "2P8tWJz35L9a9wFHPPjBNvQoRULv8ostzgETbATimmvFaTdkhgWy7CzkbHGcsprGmrvuLbforsgMeYe23NKbW5Gy",
  "key10": "yvy3JfHTWv6vmwZBHdtvPhnhU6Q88qxhF7srauVDKpvcwUF94VJHk6bfyN29feWMNnjPiFvCiGkxk7qrVrwkWX3",
  "key11": "Sf4wnhEiifvNbXnhFhqWegaM7yAjHQwmsX8pFBDakBM24qxUyY7hniRAhoo2RuXeixxDvjZEsdmyv9vMRJVd5Z1",
  "key12": "Lrixv1LXx97em74zmBHkxPqCq9RwVrbvHZPQ3bwAPTfGiptyB5Km7FF9XbvMSN4Rqt5rnFgkNwhTzM4pFvx99JX",
  "key13": "4M6X7TPfDPky7QsSNtUKDpKwivYpv3p8sQonSiLdBrrtA9RvKKDqpnWXExajD5xXi4xRZ5cLVUFQjQ47YHixJZct",
  "key14": "2Bb5zaq9mzBSewAFkix88DMzXZJBM5bRVLPt7C6Re3vvdN9oYXDc9FFBwqxu8fcSTXL9NyD4hAjamgPzFFNfnXp4",
  "key15": "kekqUeHpRZSENhuRbLXKvz6h6EgKriHP33N5oLkrVmXMELACBEvdGpVioe5DghoXJu1WAmhk3P7pD9RNrWN2MP6",
  "key16": "5d7Z7cPdx2AjB4fejXkMTygXJaep2AgTYhpt6HhPYd6894zeFs7CAg73JRu2fChLtmuZa59X88QWrTALpRRFs9zN",
  "key17": "4A3mM7FvDpVyXZpcLBd2Xxd2s5bacoY9jBS2YM5NKwVqjD5jbSkQQbLLRVcmqfXE4mesEWJ9CPtCGCHC38LLtjeD",
  "key18": "gLZxwY3w1u6K42i3mNuhJtpjRfgBqnufvtcRb1ibwrZf1PXmtcwJoFAxYB8r3g37Jq68Xu73gapQ3VPLrU7FTkS",
  "key19": "125MMMKnh8KUZ85Cpto4QwDyyrSxvoMFsVvfFMS12KwySpQ1ZZzKAcorDhh22xxzNTXhVCgTrgfuj2wBzfZMScJZ",
  "key20": "4Dw2cNNfpKBmD9jnh4RTbtVmjwUxp3XWTKvhDKtvDqckbvYrEhTi944bkJAcziPz6iYzxsyMFE7QwvcudFDr89HD",
  "key21": "2iCov2iKbMbU7YvU3UCEx7BvttgNY88zJ2TzGDFaa358RUyBxutGQPjdypr6khhUauUhrSLVmZ3FwjkPUgGmt14c",
  "key22": "4aT3oJF26dmS3egz1Lzx2i29SVZPKRWxg3LebXEB63k5AjYWHdW4Es6gosfgbReDiqmxoC4TAPiY3Bsz7tCiRBTN",
  "key23": "2m5gv7BzFBp6CRpaTbovkRsUWCGZDhuETcZasjBkjcVakES6ZRJcgn8RLmdFTPrHSCQsBUDFz9r3NEyKbdBSYyrH",
  "key24": "F2wYqyrKtrtsco5t95fpm1tdpVZCADNUpPb9Y6S73k3J9GZMjB4oPqQmCTUvrXCe3Cy22fkFebQEQ9GDFsWKiGC",
  "key25": "39REiQgrzK5S8VKeggeRQ4z2tknLfpToDBUe7e88W2KzDH1PjTkkuroLFQhsKhhooYFRWL2s7iENNijxnNeB4CyS",
  "key26": "4Pcbou31F4HWEUcuU3xJ2nVe4wzjh5njc7dAtA9BqKDp4sPSVb2r41dMm4idfZmuBgEX4tdjUwtGxkYEFgdvr5Gy",
  "key27": "2X562tLoCiwHjxMAQYbWNV5JqQgLQkKjke2sUXibM2qBAnqSsCrLnYFjsKgRFYcgvihrak1NpyR38qWyuouUn5JF",
  "key28": "235X1mvo1EnojQ7XoHVDb8uzoQ3cawBob9F8AkyTrBGJQQtxs8tiE4wSJHbUyxLPy5jA5yBP8CP4snP4MXXgLirb"
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
