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
    "3xUjiBLusR3HVoBYqJhVP6XrT5bcJ9kHz2MMkuXdZvpuPwcSVyFNERWNAL9SxQD9UTHYHR6FE3tiQwRgGScfKNAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9gyNtyf3aS4GD4FhY468hn6SMZVgZkngHXtgqJGCymRdUicu9WrPCSn23nMZcMkRnUW4VXiS57N5P7aqttZz1c",
  "key1": "2FdCr5ZdwbTPNgq1owBpLErt9yp4pyqFxAoMcuV6oHPqiComqNDcwQ4aKrgUpgngQfzDaTjDFchVh5GKn9tYVVnF",
  "key2": "5Fio66mXe69T3bHBx9cqhPY7DSMexCnqCBrfrqzkme1vto9JvUwCgCKbovVB8raWjLdqY99AnoyuVyymY2CYZ2Cv",
  "key3": "2Yvn7fAJc4sqk4JKSJTu4EeRRGuMv6GXLRVW5jWncjL9iK4JT4ZRm6Mh5rmu6ws94ibMuPDKMvCCzB1nsQg75F55",
  "key4": "2uvssSd7SK3qu3cFD183wwrKx5ZNY5kqEe7aMXPbACpamjpqrG34p7sBfGJkptHQ1zGrTCFQj2zLoxpoQGSawd44",
  "key5": "3aKhqqxc8iaFFGebw56ReWf8CFL8iBjETPAHucGei6tmHMqDa66Kg9CxzChzpevC625jgjFe2r88kqEHL6rAWhY",
  "key6": "2iEdVkoEVHMrhicnsVPXXKrXovFAvwBmQPURFx3ZvEoe5smGZTr8geJYn4j9PjrxZnW6wBwWi2qFGR4GVw9YJLo4",
  "key7": "23MJB1NdoU4y3XNZWCJYpgaT7R48gBzptKFAU4YWdLBAZXZRMVp63mb9gitg59P9mY8SphrRUpLBiG61VVXNtvdS",
  "key8": "26frjML4tPeXBgfVMjmc63eyxohVPWEPgDWYYW8h21dhRUCf5qftC7MxyrVfceWDv6AD7XXKRXLFaEkhJtcRm9Me",
  "key9": "2W2YpnVTU4epoMKTjDjwUozKQegzH5a8xA1o5BrsuizDx7xosp2PXCQ99izy7KSvK3wQ27Ko2iBsQ65RXoK759oN",
  "key10": "5QTiLdrWFLraqftteFBRAr7P1z26JQGD4Tjx6xCtyjDanMvS8RAtvugM3yLFKB75ZgLgs9KQi4kejA1PnkC86Etp",
  "key11": "5HTF4BF82wiDEKZ3g72ZsVSzjrktp5zp6CCxptGn5rWGRErXtwC6kpNoro5PWuXFXGmhKyaReP5xhHZwpwf9CLaZ",
  "key12": "3g9r3XTuiH36ry2ujeoRPDMj7ASyRDKGUsKwueCWN64DJ3XC5spFgBVfioEzgqBsXHLn9K8zSnU1UtEcpgH7Ddn8",
  "key13": "2XSv2qnGBKtJ6aCzY1SiUGZqJxwes2bSfu1zZbZmEg8TzCxo4WUSzJzUeLVfZW4kUNhNfqNxU1XYfwCTPK2JVZ43",
  "key14": "5aT6JY6Vo5FiyVNiBaNr2TMBAotwgtTHZWwtoMNNQQ6MQEzimpRXyFe51gvpxcePDEG2WphxAoTDSBpvXemYxPSM",
  "key15": "hFFjjESEGs5DwQx2U7buQfnpFLSeZNw2JfUy2x7a2GWzTgMCzW7iQCXbNWfJo2B1eud8XmgSHQE3ynCztnfMzwJ",
  "key16": "48GzjwUgmoihaF3Sn4rZ7RD2RwkUYKWP58WT8jsP8X5Jgnj3huMxAziMfDCzDGZR3SbzZQTFJpXmAUGVnKAPiQzF",
  "key17": "5sd33jyDb2T6BB7pujLYHhMbqLkNrebuawGWE9fXjJHPpWgzmc2jvtH8iGGe3JeAHuEeMsnukEQ48ibnMuXhRnAY",
  "key18": "5C7ZZM5qTdhhL1Mab4sJ47boo9XjqMFqGEmun2eYg9tsKu8j9WZUeUCio8RkZjkkN4j9LXUUbPrcBpqRazqtfJCj",
  "key19": "2Mh4dYsCU2jFv5ke4o2Pa1EjgrUwE7iTssrG5Q1F3xcyr3kG8rWkJqc8dV6Ldk696K6pfNQt3sxYKvzz4es3qEiS",
  "key20": "3eJ7SwVNnkNRbY2gTnfBEM4Lr8M4LPQ6ScwAAxkpEJaudkb9b6kAzGVfCRGu4KdYqC2C1k2bYA7zpNJDcSyH69AM",
  "key21": "4ysChKafBcoGiMErYH5ZM4JY5xYSyRseAEwnzTnkqdrBpAkVrrUwaVC9QjtxYAd1VS6gXz7WBXyghFKaB8DSeLKx",
  "key22": "5yZuKCwMKi62xZ8J8oB8RwASo1JzWvQUqEWWcyYGgfBPjKsJcEeqgdhrxvpsJs5k7TGWKHq2NuVYCBpSNocovB13",
  "key23": "3Z7cDEa6yJB2A2nxZqkgGE1wBGEvvEoTvA6jDoa9kpLF83Ru7JZT8JnDbkuse6X6asadhZ3XpstGghygK2T9pdpS",
  "key24": "5Xzbgz8vaDeDjJN47fpDQXcFYj7Y1kGAE19kP3vXCpyvVfygPF7QwY64Pwue7V3TnPYZX19Y341buJ7bhaiSiELp",
  "key25": "4iKu1GmX4AJopQ7zy9zCNUVGPg8iowgwR4KTcqUu8eNmLtxmtMqG2C8273k4b5SVZa8ujvHB21gbaFTYb6yfPd8Z"
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
