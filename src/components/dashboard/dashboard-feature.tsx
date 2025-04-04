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
    "vCyb7zq4xCCmcD43kFagUqhK8hKPcAet4cVf6ga73P6eWh5dngVX2g5ZdqZq8QUhxymf2MNb2uwJv8NKDhrJARu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GcpapMiBrKX1cQ3X5RVdLTDUGbKTMbLEkqwiKZQEwGWXoDcDHHRYXUsz6u1ZnsznnabxZovbh48ZsJhuVH2PFPb",
  "key1": "4HVQydUw22SSxvANithx3VVt2ga1JyNndshAWJ9kCmDohyCP1WaBSm3XZufgrKif7vZnP4rUHKHBjU1pmaHiZVZZ",
  "key2": "22TwZiz7AE9ZHzu8bJKLQmLJ2YXxbuj977Ks9Kez7aYro66CbehjVdw5ZbNURATyaTYJ718JksjFf5wEh2ZyJzGi",
  "key3": "4MxP5tLm9MHWkJiuQFUEbzRYpoWHi1CGCzmfKNv4Qq3npGSYiXT63MF8tgY6B9Uf8EYJaytwZDm4zTeYWiAMZu4Y",
  "key4": "3XYJUBC3BZzuNtZ8XezAuBwh5R2S1Hjssgnw48TqGDpy8hcghodGzPWEgB7hRQ8DsbH5dHuG6oqLy3D1ZgW4Jkbp",
  "key5": "2MEYyidjRXckPxD8t83FBVXq5Ddufb7fo71fPwrE1uwWgyEQJEVpSdHFQynoZkgadBmMNFkmarYXE7mWrGSBjtSK",
  "key6": "4ncxCHu1tbaFs4Ljc6Ww8Zx8Wfy84QysajkHsnU7SSaLmujkFfmAc2LSAqyzj8TCufVWoMVodkMdxAW86up5ddC",
  "key7": "3kVJY5iPX2aqJ2sfUm7j5ieudukGdVkJedhxH7wRccGM3KoBTEN4xPmFeDCKuLfD3XEzXcRVkPFcyhbu5T1p3Ltn",
  "key8": "5dJ8euB1aHDtZi5qRikrb1kfFSJ9vgmwCe4WkXiTSzwvLvE4k1VJ8FbZe2qhTufuR7zCZpHwMMnSmRRDbxRP5zP4",
  "key9": "2MWb3s6RJXQUSGJfveqsg1yCCWdpTtk7F5MDQEq6ViSrAacSdWzJjW72K9z5dbuMxbUWKTQc1BgaKBmgBHqmPNX8",
  "key10": "4W2K71yT4gsXRVxfbWzT7U3P7F2542pt736dR1DMnqYCcoCCgMDYBrZ4J1L8hVHemCfdB4Bn79WcfmqwMcs4UeKx",
  "key11": "3bvBPP2DYy4Jf8jYTSomnsZurmu6mFFh6G1APG3gwn9sEjHKJb9E78w4FpKbx2QNNWs8pTpoNjxWXJ8HWQjnhKus",
  "key12": "tfeKVZD2E31aRDvAjDE4f3vXRFwsubcmtobpAqM8ov82XYHxdWGnbKViErktw5DyLvErUYQn4TBkid3j4eg66XS",
  "key13": "3DxVemQQQ3iiFwjYJW8m7x2y8dh9oiHNa3s62PEihmxsqQkxdxZhzmbWCzUvYDhbT29rjA7TSXrJ7whBTeiyr2PQ",
  "key14": "4HNXL6TfUBJoDdmqLeEEJaWGd2f3AjYRceQnzN5XpjnDJWDcPMsNWpoDbWqAwM4xCEdvfpSgTP2aXdckHxL1Ey9b",
  "key15": "4wam3EKJk7ZbFG5fwJCMaskR5s29LsJcGS65kYEXAMDFhkpsg6MoHRbRr3kNuTB9T4RxTkRKs3jKF3t85DRTU24W",
  "key16": "4KA9Zpf8FpNYMnTqU6QMF3mQbBzj4Bd4N8hqcanbqPGHTci9wH77njeVj1n3dPwY22WKPiPbdGNGfBah4CMu8c5V",
  "key17": "tGTutVntWKNbgNLJn3GhWuokJaSxjJHYyyFWv7ap7qkR9QTdnm4w6oDPoTivQYbF6mypSpeEqEK1AKFAjVr9y39",
  "key18": "59eV4TopExmb6A7r7LsJtdc1GJ92BtHkhWYzLgtvjr1TfgqAw7w5KzqcJGYv7w7s8eHWoEKhgeCRsd8v91MZhTCD",
  "key19": "5XAf5UJHby3w8omtKuteRtTcJd2j6Cd2hV4a52GqHRaKYSihNwc49N4YdmBtwLXxmSeXbpjVvUUvoG27BDv733EW",
  "key20": "N8M4hJMDpX5uZvge4nqTxEM1j3G3gfE74mXsc2TqvNDF67FxEPoNJDcvBCRzx8veBuBby3kd6eH2uN38yALDmBN",
  "key21": "5nLuV1Acjio6wGKJkaJb8AixsC1kEC6YwTmV8VoNmGxEJ4Dj7cyq9PTnXbDhxcGqF5DApb89qSYz6PQHMJTsY7Ag",
  "key22": "XUg8EzU9p4kJTTr1X1BHvcfziX1e3vxWpwenhtL4841AaDG48FJJSiRqMqabBHs47rAaKbmUHQgBzr5TD98GZJs",
  "key23": "5NaPZDaXfsPSNFoCtsuremPxsQpgRXLYT7EQx1tmKskmEMVgpyJfMmodv63PdQcyoKRdqCSXZS8qHGEMkW2JuSGL",
  "key24": "8G56YbqkEj16Fz3uyA2NmBPXWR1Gw8EmLrK5Z5oV1ho7gA9kt78zvAsZFivkhpGfCjq9srJv6zHuysbqUPBjajD",
  "key25": "3fAfdtxRtKevV25mdrqW3QGUg1q3APVDUoLuNenNrJCY8dWLDJm26cWd4H9Czkdu7G7XXPYxkTuhbG2t6C7yKjti",
  "key26": "eXcajBt3npo2p2s4UHTFUpAKJ9y4i67oMPurnicMHa68KCVLispTwL5dZCLUThtyceDxgQUEmSfszyn7qDEsqjR",
  "key27": "vK7jNPcMweep8j7rc7z6QpCCE6Cx6uaaDe8dsmkHhj6yT5wrptdXaejMN1MFrhZpxSoLA7UWpp6m2hvNj4KoTg5",
  "key28": "4TuZT5Ze6pEfW4dn9B3rJZKinb4eVimQddZZtN7JHV83tKgNTS5YHKezPJF3qaj9scZ7sGEhX4nbiwAk8gYnUSb4",
  "key29": "393BhqPmxTZxnqWVGJn7a7w16KxAzHkzHRW7UbdLVhSRS5QotvRdap2rR7VwPeMJg9kVPsh6QyjUcLvbsvXKjSSj"
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
