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
    "QE5G4DcuG1hGqHBYEeNGNykvXdqsR78o3VNjdpr1BEdhLoJesQQa2pKh4Q6faz2j2BWM4uuwDR14R2c9TF7ZKKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnQuNTWaDHjksVXnbB9QALm3mDwphunstLbHyvFBmJLGtSWPKcvBE66CT3ig6ecbF2cF1AorYNEe1Tsi9pZBLQ2",
  "key1": "27PRhoJEiYvHTSss9m9pX57P5dg6Pbhp4AyFkSRYk1ZXYUEWXQMhnV1EHQNk5XXSPgSMiREEXr3zT3o2Xp8wQGoR",
  "key2": "5KNhj5oCR3Vwc2gPgL6TkRMuQQNjAwmWmfqXXuuVGoZKXxSf5znCJyA9m48Y4LoBVQeKU5ig3B45MrRtLPVDug6i",
  "key3": "2S51UHkcvdspRHoyfTSGySreCnRVQcFWXfdkzuvQXsy95B3gptQZxX9LiCyUNdfpHtoyxbHxpKgSba5pP7Bzi4jv",
  "key4": "3dmpTpiKqz6LP1VZb7jMD17bcDobP7bvdQCxYH2Ahw237qb2F59UQkYSxMPJL4CcksjoNTsjUx8w2G9X4tDZTHm",
  "key5": "2tX2jwaK2FhndsLXBU9pfoDarAuXdKs9BHvXXyBK3k2mX4uVGb2tbCooeiJReuoEeJ3tJkAXRVVYnQuAJTDAvqK9",
  "key6": "5sbgX7BwJrYiWpkHVGNabqmWzFAYq9f3YFMzHJMnMjiSFwxCrMgiCvoDtuLpZtKhHTCNXQDJVuPEMN4po9dLQXhN",
  "key7": "3VtfCvMo2Axky7yobpAWTHDEKZo6xNaHGmEizX9gobKBB5L8dqRVaGBhQS49iQioKCvHKvEnsM5MYku5XT56iSJ8",
  "key8": "2M1rfYqMz7HAmWGqypGPxQHbayQhbVUBJWKxRCF6YrqyfhdZ5YzV3H6X7EyXaZFpdY1Gb58mYuf2qhphFAvT3jj1",
  "key9": "3pwBMEEFmCFih1zsWG5mBCMcgBowcQWtF5BkduvQi2XdT9NM3wLpkfGXT1ZUrHxNBE3a9HGn5QjLoDNUtgp98VSq",
  "key10": "2P8inTzbQ7b6gPSUzSPyyBm12u3Jau9wFANZhnfZd7M9uSeJMAgoJK5YHHK8mJPJKcLPPMkvD9rEz4DxU9FUPjPu",
  "key11": "4BMaCoXjyipsecWS94SkTmCwfJbXNjUJwUkGfabbw94V3Vqo37VUYg1BKrM8MCku3bgjMP9GmrMf11VzkftAvhyS",
  "key12": "2dbogz6Fg2ZyvXXcR6Bv7mdXekBTxu7HyYDYQzFkoDaFJ5VAFCKfYqHdFNnJh68AoxHqcYch9hvPV6GS7K6S6Wgx",
  "key13": "5YaZcz1XjEHAqFhD5wZSsQfGEqu4iEUqqzNay4u8MJrDFctnV9LXTdp3cDV7tnzFunKhQPbh7JM5mPbbo6GUWJhE",
  "key14": "vzFU9o5ZJfXSbK7MAH9Jgdmpi65hbZ4T2oun8dVicQmiWn4naPbXeeT44V7xv6rS479tTdfhfPaTFEj1NpBab1f",
  "key15": "4qvfuhbhq1UVhWw43JFisyrbJaS647BpLJVPFRdBiHGh8G4uwxCiyYX6jTi1gWyt9K1a3joqVQHkbWUtwfT8tA6p",
  "key16": "4xWPUsCNWQCBaMeg3YHTfZLJGAqZ8Sz3bi8DrS6TAq6JrMDov2anwLffKR56AfntT6fX1MQBZ1uUxo7ponUVAqoU",
  "key17": "5wjSVrdjM6CrTwjm9ctwNx4FAHqnfwkCFzNz4U4VQdA4A5jth9mpdzqnzxMcTYZGTYdnHFgC4RdcyJiUDnfu9JDD",
  "key18": "3AAYUxNHF4vhFhQevsqaKwNXZK2MB7WRn63rZW5bE14eNZEQeUPGjQGpBdqM3tRw94PXDdQw3TW4LxjDNV44WJE",
  "key19": "3aHqZ6GS1CxgdTikR362e2S2Kg9i7bbgzU4NRjDF37yqmCQUuefm38pEHTaYEiXzQVN6DFzxBZR1ybxYCDCNSEoc",
  "key20": "25QATGKHCPEtGaCw9yKG9DRbFZjNYGsNXDiWQT7zWY6J42Zm4eydUxMuhSx9nPFpfAv1vGaiv4a8DhR3SVK8g8QT",
  "key21": "3XMjSQ8vFMcnMoTNxoJp31oJ5oLTG1ENA3cdazkBkAKXeMErp1dML5xMhCR2UVLACH32gWyUA8wnR5SAhfhXjC4m",
  "key22": "4y3zXFEpjyUZxD3M5oPd8TgeTUZ2JHJDgRzfnhPTPriSpJmdF5hjNR6k5jBJAkxLXL19zxNAhr6BRKzWaTUT7Ufp",
  "key23": "3dBvEgfSQohzJ9KB41g3ZK5rxh3JJrA225YrAK8Z2YwjyP3EqVgreXeM9LaRVBfHp7CoPgQHB8GdTsp4n7xeYLha",
  "key24": "43vTzzF75QrwqAUXTunyMBXmaQ29bLh9M61zoQGHTfipfTJvduBynRB9JmBbBCMsayvVx6G6gneGeczFGubr9dno",
  "key25": "2z1dbbZd7or42EgqvcA886AV7KYwBCLjkQNFjyLtmuxYwFRLWZTjfMfjNRGspBS5gmFtRsUpfmzEzPM4Q7tnk3dV",
  "key26": "4YCMM4uFKfUkeajqKtMUkRKWMB1826XdS73BoXuc2AQG7WLVNJT28o4XsXt12UzzVCKNb1wexrWFCeE8WTcFYRBW",
  "key27": "cJCeSXbDnznftmj3bWvXUUdLTF5J9urEcG314WP4ebb7prgkJUUoUgH8yWkTFR1LoPyCx4Z4tYqjMCEnoT1FsRP",
  "key28": "3JnGU8kc515XHYBDVVkyGrYtq5KnmJRjRA9G7q9RPn7xQ5gDbeF2q1Fbofdv9cFaKFoTNmT5Yzv8ajkENmVfzeRm",
  "key29": "4D61cNKnUKYXiBQ9gWAJguHmeSviqmgwHrrx3kKnQtgY2bK13X1XHMy9BCQNPZGK2NNFjgYuA9tw9hLc3C9hMjuS",
  "key30": "5eHyHwypTRxC6wEWUkPp9ZBbAevaNDwHy3hroYkRCeSo8ySjK1mrfXaEj8G5DM1ViaEyAHnK9aAzeDmcx3vfUie7",
  "key31": "4yYLLFBy4Emt5gHtYRCucL4RqY9c84zRGhCKVPdYFBs7zcSDS5nnhcUcwnW2QnJFgik8gM6gBduVr3XRmjde2ndv",
  "key32": "3jixYKs9pMRpA3ydasPHdyEruJ81xo4rQatkkRN4PuFj1vRTTrtSYMnPj9eQEuHKW1nGJpy31TgbWVB4GPQeFWgo",
  "key33": "3SPQw3QEHMtvL8RTVQ5PSfcN3CrDhJj2Pum29xfnpuw3aZgs4DgkMvJydE4XvbJWr2PVxeT7Zk1bW43U2baKJPaM",
  "key34": "3iSVPjn2vGUdeq1mpmdmSt8Q68JynZQ9ZG3eGJ2Xd13oBnsVVK5cE5qaxeHmJQgtrtjEfPEdEijDydsCGgX2SFqh",
  "key35": "3WgJov1hUx49GWLPZ4YTJwyvcyLyXSFfDfMk6dFbkkwCDT1nyQe35pQvdQEW6Ua5GfisHx4h1KaUSWQewSjajyRS",
  "key36": "4g6Tc6TgTqZkQmZSyddB9NtMg7yVmX13neKFht34NUZaKkXPgHB8etonKbHkekRMgmcCWVXwNcJcYyqDe5EkcBe3",
  "key37": "2ijkPCzBodN3733UovR6SfMk25hp8E3dJj6eRxK5zD9HbYX69brRVv8YyYGmX1svFDcxuE77iCNcGk7trLnZBRzf"
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
