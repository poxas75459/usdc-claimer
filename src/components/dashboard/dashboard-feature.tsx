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
    "3eAoVAn3gVx7BomRik4hWSGV9r8vXY7Cqs47AUsMBCoqtj6KW25hgW2bg1o2TFiZ23W3pzjM1wof7XiQiTdCc2wR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4wKwLcHLKpnELrv1QjiLnTUDAEQG1xrpJMvLQw2wh4E7ybD8r1qpWLhgTL22rmc4HTkaVLw5uHebtRXCY1wic7",
  "key1": "3rETRhsWjSxX5NTKV5VYAavHkHHz7MHp3Hht518skffnfkeho87qpmQTQYsE62cQAZS7rv4vi7GCj4XwseTPBVHX",
  "key2": "M16SL6bVgPWXt4RBF26LU4vjrQrMFm6tZe1KidEB4d65vf2K77q52UvbaEBvzpZrKovKGarkaNihGM9E4MqjwpD",
  "key3": "5FMTjAFzExRNYv6whf5mGFJt7rX6sS3KEy3JSVj6KtSptqeZdq5HjCz15Bk3PMtrxjj3NwrDwZiJyEfhSmj11eTd",
  "key4": "2gynQTmvX9pfQUnm9FNuLJgZqyAr7CQ1csES3FenZzHdmv7y3Xi1HQDCSM4b7PFo5MmUpiE3xtaZGCXgBxRymYBH",
  "key5": "LtBL5Fx3VcaG4aQsxPtkRYGPXnHMZtv2hKdXt8BktCnu6rfjBCsuSUbeaJxXVw8aZyyvk6vzvv4URXsCRPgic21",
  "key6": "3c5j8TmmW9VTot8hD6EgGrqjYgtDzdzUrWWCVtgC5Hgcs9xNR8jNm5ye2DhfBTWZMpDjEiwFWoB1shGxRdk8sEwz",
  "key7": "4ef18pbvfnsQJtyVJP2VFAn1PkQ7c8MHLBFFM98h4NwegK3bw6KoEcR6n7UXdAtGviaaJmBasdbBJ4AuC8wnwUjV",
  "key8": "hhExWSzcP68Xwut7Nxoi5wRLd3Au9NiDBQRJfSo7nrhfFJqnW1BGrgXHCZaGNzKrVx4fq7m2tctnEKC6GeQkJUF",
  "key9": "XY2BcvBZRJPFe3U9GnBipgGAGbA3Dih1rbjdwcp1dDPBrzEFxPiDXKHad7upKgTGkWR9WCgACLUmfRWonsGpG8Z",
  "key10": "3EBaxf8JGMqtuj4y3YTCpsShstQnw78LSHvgnBxnJQhQaWzVxaHdGRjCitMAnDvSCdmmSKsdhZshQPPpPiD2kEPZ",
  "key11": "nBbiit58Tb4t1Rmf9JGujLEXcsi4izYebAqsizPmDfQ2QKV49MRNf7SDwbdnyN6R11898rz51b9e8kwd2Jendsn",
  "key12": "4F6moJkkHmwJWpBdnvdd3ZKTeC23TZnFgAwAfoqeaDGrLoC5hNh4rpypqtpmB76XMMdBi5V8byMJ7KkSKaiQpzQ5",
  "key13": "3J2UP7GN1r9YT1mBGhPFTTD1qrwZezmpmjyvHbsgjiz1VtMfDmeNERZUdTy5szwRwaE73okW3RX7pEvUVhK9LEMi",
  "key14": "46JTDtA68eiEEuQKvbJ4drbSyawCMs28CBmPHZBZaNhEiVCR2BU3Uz5ykvrxjaQ2n7md5Mc2L74CqwmqPVenfHXm",
  "key15": "rFpddoayU4c317hqoGE2hLJ4NLb78aCHvJgEL3v6FragE9T1WEVaJxHKyu2ySzEmsXzDdbZaiccSNi1QnCgTouH",
  "key16": "3BGDj97sN7375LeqjK6AWSNvPmQGQ4BwqamfsfWD8EbvP1oUAEACM9j2jxf5ppHjDFC7YWiRQ6Jdx5uJkrW53vzw",
  "key17": "63KnhbZHyXjVpw7PxhfMfxpAwGaYiqNAQioavcswM9f3KhocjQis1X46aYxqMcGxfyeRBogBT1ax6CDnH6EZ5B75",
  "key18": "RwjgUKmjus7mgTYDSmw3RjRsCg3JJLGUneq5kT9sc635GaEAtQRE7F2nBeBtSv2cAZuBheTqXbf3zok28t2CU3D",
  "key19": "tvSNKWRZMYFoF77xEv6wwy21Mo3bFkz7C2wFrczSxZBRaUk49tZ2TXyKXjrueqv4Zq7UqEjYHwrFvqW7ZKhN7xa",
  "key20": "VXh3EcsKXfXvKKx7V93pvR8AyP9tPCsyRoMBc2DUEZsToTvJdKYLtkpub8qkmifxpFagrX3ssACdmKWpzXxCwcu",
  "key21": "2VSVFiVyvY2xJzA9ZS27inbL9721rEzX7vJsV3qPFzWbBQbUxN6HBtXy77wQPra4qjJmvFRqMbCMnMenyErzeh8",
  "key22": "noJ7xJowshnXFTAUYtDba8gVW7S58o5vioWhSWC3ucMHFHTr2B1A4Y6Uuc9hnAn5KQJPqvig94G1MvFPEo4gxxa",
  "key23": "62fpazB2rD6wdm1TVRWb1acDueT7Y8tA1N54kEwQxPTM2mAi8ZHsXBvxKhRK6YM2CAXZgqVX3B1MCC9nH9bKMm1D",
  "key24": "2x9AdAXx855bXsBunL2WFowhtktMjRmkCFCP1hV5rkme2KKjCwQLqJ2bQUSwkjJizEvLxrpVfis8RJB85ueezj95",
  "key25": "4RSGSbxAZcYcbd2JKfzRqfVM8egF39utBivj49YVzNM3cKd6siSn2cTcKbFpLPiwjiqZzbW82VgJ7N6DBSbQB8zv",
  "key26": "5MVTEjT4BqHgdUQd7K3b1ft234hpwzh6UYabUWZhNX3NV3ey4cEsPvc8ApbiNCqRf8bD7jPCvRDNkQxt9Z5yRm2G"
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
