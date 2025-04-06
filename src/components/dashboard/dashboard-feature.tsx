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
    "2hNJuaC9M8YBfVw1QRE5xSxJZjaRwrqLofEc4FxTruWxtExLQkb9HFUD5Z82y4o1ypZJXDQADgmB72AcyJ6pY6HR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnFS2jsBWHBmrFBbQFJEhvfSgf1D5yGFEAFf9zJnEeGAcpuMcKPzHWo6w4T72eoCL1GBe5FADoGtfaJ9TZkE68Q",
  "key1": "3naRAjYz8Wgi1eaC84YiHJrAm1SEdna9oFhVvA47GNkXt6Lv2sSLYaRSSrSTk1NykZyJh1Um15zioFzd8RyzAkVR",
  "key2": "4cxFE9p1mXZ3JgxdVy9F7zeVaiHXq6eEgMug8voXA4NXcjZ7DZoW16UEwiVQcsHxWfMzdN3Qd5bZ25p8ZZjyH9J2",
  "key3": "2842apuexc6W1M9rjbPMMXd39hFfWehYgkQjCQTsJGzVR9hcgPtLBieNbcKbbhdBFNNn1QoeGcW4AiSBSMiZ5jk7",
  "key4": "YZfXNok8X82CosRjsmZDFtNihGJGRdQo8j3bgzotia5gmFtrMMCcb4DxbPd4QBzJiUSWSaYN2TLvK4g8p5d7D8x",
  "key5": "25p53tNKHnoxEaFrYH9zCFBRDJara3f1MmDPn8KUC5hT2rMCq8J9mQSQMM2wZkBw3PEPDT14sbhrnLtKpXeuTdYM",
  "key6": "5Sr1tivDYX7L6cHhugPVch7rMEUahwzHTzsUHfGzUeqpWwqzHCJZEKten9AbTekzg8FAt6nhJA4SNbzey1h225ZQ",
  "key7": "43FgyMFYzb3QGxjyZ81419Hbc5dJBzzobUoyoeVaPn1zCG4uhtdtnjkrpVmzxEGwKBT1LhQT3b3HxbTJME71xrEB",
  "key8": "2XhVDS7w4nsKdpi1s1sBBxc1GyrSFDBdS9KKMw4Y73zRxYcaDEsyNVRj8XPYT9AJWa76nnAUET6MYc5wFvq9Q2uy",
  "key9": "3GzRh1i9hnqMDa51EEXTKrVZBzzgXMtYYysGHERfPCJJxpvNsrFZ8FSkXrVjvYAEyYRrAqiBLVFVkDt5QCCaRZvf",
  "key10": "4EhRgUB6bZguSm32qUrhJQr7Xs3TADPeGMVbt8mEXAAruBEJGYXdMpZwmN6WKaHkjZtm7kpCH6xd3mJSjxZTpuJV",
  "key11": "5yD5tyQvusyoR81pbHJayqCUMLxcmZ9mUiTuGJHiD8UcbTjqb41msk98Pfj9Pj42wny9A3k3FQhVnrG4H7w1x5eA",
  "key12": "5nbvbZttdtSdD93pqELXbktuMxKvfYGEJDLLWSwyfqLJv9Rio885rMKDNHMknRyMQ57djHHoearowSYNcFz2QZQc",
  "key13": "2xHUjukecHVQ5bmMKyvKbYd3BepnajMoms3mtuWsrCFAUozFZ9NkL3FKvakzrj3DYgkL1PwrdEL5dG28HSVKRkkU",
  "key14": "5UqrB1YgihHdCaPT36FtVsS3ym7Nhqu8qPVVHn7G5dnLa7QhoC7aaSyCmEApKR4zZVqMXheAdStWCaPPa7bgLpcs",
  "key15": "338FABuZdanBkjmG5uQJbL8AkomwAcN5DSu94ikGxDHohxd6PfiGu37rAMQBLk73qfHS9nFVYK66T7wwDWMU2Kuc",
  "key16": "4YreFsSUeHATZxVFyUsqCsn5uriRz4s6MJtD4CYw746s4DYtEuNVjL6Jt9ncUSCCZwL9E2XnVycWdSR3cZQyqo9Q",
  "key17": "2mjeL7xpbNW3Y8iRBBBAS4iP7oU5ryAAeqytviAp3jQhWG9WmmF7oTTe3YoSPtngsxkFGUMY2zmY7hDkqWo7c16j",
  "key18": "ZHyKG7HTt8oDEZycqkRd5ucNdXyh38LiNJcFUyt3wYPMY3ectBbFD3wpKDb2tqEGNdKrWxMryoHMoS2ajanLm9r",
  "key19": "9PNqDKCKhZVwCMHnjJ3XnVns1R3UXPnVmQgrAMmiVZPS5osHRUoJh2GkJxMD3S4iqcvtuNcyWUVQF9TCzMuswCY",
  "key20": "cTfdC3bsG6Cr47MvptD3x1tqZWQbiun5Qxkh9h27WdnxrDS12VYNsPSr7DBUThW9Sf1m8N7p3B4VyocvaaaTXpe",
  "key21": "443JvKKn2RDU7FGxLNT7WfQnLEkZwYQ8kwo3JwAqn1MN7R9HJojBuukwr8WAM6hoXr13gZvhMckuzSCnTuic5A8z",
  "key22": "2jTFnUkeqtkAznUyDQYKLytqmA73834mAJx4Uabdg2Cywqm74q3tpLyJpihYXUqRp67NzU7jALTdVCnWJxbVsYCB",
  "key23": "oKmL93Z9TPVBvdr8aeg81LH9GRCKcb9s9eUviKHLxe5WmqptyDi2iHKZpU1Xtx2atDXL76RYmVjuRQQqMGXARwj",
  "key24": "4MEphCAXFZuBzthUrDSxp8Tn8FcM3SnphFJ2inbZnf1UiFa8eTg74NsjydDjUqQzi5iipVg72pbZ2UR8FfzkSJ4B",
  "key25": "sqJNrjd6iFtZiFVYC194JTBd6DCLseG3TxxLMSqx8z8mymg6gBBVmvu1yHBHrjdBhM68mCbpupY4KBHGA81ir7J",
  "key26": "5uWAHYvEcFrozh3LUXeQTRC7CJeY7L16jkMxn9JEXLrLaeJpgF3b1ZfJCEN9UUDXw2dsGSRHLxzECk6xPUjD8xBG",
  "key27": "4pRayoRcioxQ2RiTEiEf9QeVyQhvNo4r9tgf9xfxoaCHKDMTi85UTaMRKubfdqUBoQJk6BMjCzi3ipKVtZMH9cQy",
  "key28": "4jRqcxsF5jGrFkcTFq1sZpAhLEPHnBFNEzxia7uazGeSpnpZd51J2r9UQdsTmsf6WzwNyRPxYjwBWSu3rz1WNKEo",
  "key29": "3MDY5jZvKQHT8bSReBZ2E2f7HjCAU1GCttgo1LxEiKptzQJRPbwnCW8acNzKYLcy26SUuEtkuLiXCu3NgToysnVu",
  "key30": "nxxYGJ3htDFZfxWxATSbDepjzc5wxuqRkCzxq5cE3QjC1s85K7YpaHitxTNRFoTh9uUe6QRyBTmEhb6MGxHMyUz",
  "key31": "5fsRYfqRsznm1i3yJ27X17RR7v5vz3gbXuMSrqmYqsQzGjTCtnBnTQQ72eVo6qKVqdxKsc9eUzAUzrUjzBJT5KaL"
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
