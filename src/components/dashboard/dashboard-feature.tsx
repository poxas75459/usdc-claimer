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
    "3Bit7nspW9reiXSdS4Xfr5WEo5NoWDGg3qtTUvApXi5iujR7f9fpFLxrkptSGmsmq7Ub7XCQuy6oXPuZt5hXcBfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hU8YGxiByXfxto5eu8AtwKS4gkBF9TS8hp814w6BYvMKifFmqRTaR2DvG1WpwepJv1gzqrz38dNQBQccHTWEkYZ",
  "key1": "5U2qrgGmo2DzHUZAdae5xKrJ1v7Uvy2SQmduou3dSdJfhXavtNNyuDXfbbgm5kAMeJ4PUrMm6SSwBveNanTpgZUp",
  "key2": "37vP1sa3MMvmpPaaSh6bV8tphEZbhbQPo5SrGWqZddgZLEFRFuDDq6EsMXkqtG97dJaijzrgHJrcf8xActSUMCat",
  "key3": "A8iNaqAwvwryZesn1wR623yhvBv66AX6L3TriADK2GzHAghHov6nk88qFyZFCwSgw5aUbUjAwJHaWQBUd8r3RCh",
  "key4": "DvUFnN5NjzV83mWEVRJr26rs384WQftgoxS114Bahk5Xy76K8ZjLSD4Zwm8o7eCqcqMU2cVWRSZtmcPC4ApJ5io",
  "key5": "2oZzT6Fq5KL15UUAHpcF92aV3ysay6AWiXBzsozQr6dAeBCeFBwTCrFdhJFQZBGv3m56Py3fY5dzJ1FZbeeRYucF",
  "key6": "3K1Bnfa9KwJrS9BiKKj7qmZR9f2UZcSeB3pygR8nAhgq4c916hcsrXDCXA77zj4Q7mYANAy5MH8LxqZhtHBRQvRo",
  "key7": "5R9p5P2g7WPwWBnaaqiqW2ttxBSdmcP8idUwjuodJsUss5cx3GffkRDdn6UpQ4jmbx5V5QKtc6Dn8Mdbxro5mh2w",
  "key8": "CHSeLs6DwinLdNqS9SHxqRZQcUTYHBopuo9gWmDsZBe2ZVCoXBCRewnMZ9LT54u4pqEcfkvK1tt4G5GC622Rn6D",
  "key9": "o3A3nXJgMX1K2cMNdbnoSQzkUe5MnUGRjuh86W9YHFQCpGAz2RS5WeSmxALrZSA82h9U7y9cBHrHJRayAuB7uzf",
  "key10": "265pX2s44zAXRAQpyo8CRDzTJYuvczWd6EifUaMuXw6d2rf81MbY1z6MeXAXs5QR1PG4NbchZHTMvmgpv93CuxFv",
  "key11": "353xNYkoU8wK5VAn4WDYbZibYHsZ4avU6AfdGjM7GRCKufeYMegR9AAg5ZREeMZkqdxBEcqf9u2wKPVh4PDppjxS",
  "key12": "NMi3Heh6dPsZsw2GrkCvkRwbDyWNQZVZTVWiG5MB2AzDCWv155eHJMK3M9owhfU5PWE21LH5XfdLFBPi4fmc5A6",
  "key13": "5kgDEnF4TQEDB68D9jg4Fa8U3hKQSWo5NapmNy8GxWBZSFD4mZyUozH6Wg8CtQayX6XKHJbVaBPQS7oTz2Q6drc6",
  "key14": "44YNm5kefTJaz34nQypVhzvMG58sRZVGKnTxLcvYBUcT4dpXt9ezFdxu3fUWKyD7jeoUXNH74wSg5F4a2W9FL1hm",
  "key15": "vyRnog6ZjT4YLyvh8jqxto2p49TYWVrooAkbqHfihn5wtNNpYWcW5zfUyyZ9DhLUqmXcCPUPQiuDehkMRJzZyy3",
  "key16": "ZDvdhvuajzaeqHaXNZ42japwkAsA1vYGAPF7t5zqLrQoq4skaESnqxCr2GApfFHPPVjwkCheRXLjXCv5QxRxc28",
  "key17": "2Xm6xkZ5DrFBsFuY5NjxgD2MtFDyeXeb5B7SmBEWDzohruUa3rfZUA9Dsh61Phu1UvtHSoxFtkrtJqDycWx3Pyih",
  "key18": "FqkodyUUMRuS7nQd2ASG6zR25q1J9rHWonvgRqjWu3EAgrvWpYNHURkH8bzCmrJEn7wg5CPQ5SSbKV69GAqVX7R",
  "key19": "2h32aHJcCL8PCqS8KPvtPj3VuA1q4V1h78SQt8JQQ9YoJEAqjnfVirptdJ9N9YMqXjmcKQUch4mTZ3XK6nfvN5ao",
  "key20": "3yatsd6bpQLai9nuoCkVBQtagoRB5Y3hAvsG4A9ew9Z9whUZsf4aR1cdJqVRrd2piyuxH1qTcPALUa8XoVBBHmMs",
  "key21": "2XxV3XxT31RFMUxdM1qSUaNgGakFReir8nzSZ4CPBUFX3MF2q1eeULNNBZ4NBy82quvFTBtUkt1bdGNgkXh18fRd",
  "key22": "3yBSNKEv2QeokS3eN3HBdBB1nP72Xz6N8GDJAUaNDJwDCWdNkpGcqDEHZRDrWskoMhKSPsQr234uP7vMXJkqyFYh",
  "key23": "65kYQg3NS4tW44ZdHA7yXfHFaG7sPhvNHmoNJPu9BanxVmhnhXCRnrc2PagbH4eX1PoR1VsefQMrPGoP8WEfUnTY",
  "key24": "5U7ovtXYdnhG3oQYZncWWxU3PBJSfB4yvuWB7Up5pU12i997ParBMZPsQ17CuP4AmFY4ThXwfrYnPAM8z25aQM7k",
  "key25": "5FbJrP9FNGZ6V2zshYSXgSUso8Em3dVBMnFam7KEfkgBYWqdQwjGwhCU9w4q12nYzV6nanMGrvbsnrRaHcuUsYtn",
  "key26": "PYN3devTGGHpioou3TkJfi3ZgKUWDfoCS7fD4PKUbqc7tzu7KwGMXMoeijGc3gnQBDGqA9ET5oeTNr622DAzfAm",
  "key27": "4hnPncWYr3m4zqLvDdTqcreYYbERbrmTSSTAwQVWjbAq3Uc8XxhmLvXpqEvExL1GS5aJp7sdQSLoZfJ2Nj6VTDG6",
  "key28": "VPRkBq4guWVCVgL5p2YgfD7im83nQiyEY3hqicaDLdpzjVhjYX865QL9TdGYw3EZUj4tqSpLBwhmULfxHgwj8fL",
  "key29": "4MEbzMpXzJyE8NeS6FRT1EvBFyoPJmuph3dE58frHksaaiq33HZdRhmo8g8xheVb7nuB8uio9xTVSZvpnpgFG7vU",
  "key30": "59sqwRKPrYLrddRxQzarmmVArPqYnxaoDyK5iWaJZk8TJq2JjRWguvpSBVARjwMAHk1e55KhH7a3oYj2sjPfez6K",
  "key31": "P9V6dt549DracezFc7BSQu8AGArQKpQbyMC64BVFUaCfgif8bmhokBz9Gcgn1fNWWe3rY9gLyChcVQZxsmt6t47"
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
