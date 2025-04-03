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
    "4w4pnztMkyFwc3fhwB17BKiafoNbrUw6wzs8cjiwE2DwBtyxZfQ7QHLNESh2uabggTuHzHFsYF2uqmcsVMDEeGUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6gzNdL1o8yvsZJwaqwVsYjL1JwqmGJCKCLSqTdBmtqo8K9Ez5wWpD5vDgek7AyutpKdd183ZNPUkgCwFHNQJYu",
  "key1": "3MVMC54F3K619yFBr4Kj1keUVE5N1C7YijaovmcjfLXMQE4kUP5megFqCe3T2dr5MyiyxKYpnh3EEBgx1PEZtNSe",
  "key2": "3E7GyTaa6mCCXKhnrweQdd7UzFZzRSgFiAP5iUTNNG3m5wf5ATWfZ9V8wJgGPJfkwepXDkTwiSg8g1YZsVT2s7sk",
  "key3": "5KBpgmRG4pbdzYMoyH8VwfPoph7CTbDa55UqDdZeZk3b4SEGqK94CEKbExKMNtkvnLDJxaLxdyaJ3oKPZ3uEt5oe",
  "key4": "5NopkqZfrb2DLk8vBJmfx4kk7ha9JM1SryogYmFuroZvdZFrw8gUdwTMr2GnLgqQFs4LVtmiHB4c6GVC1LFH55F2",
  "key5": "7BTBPEF2Vo314YnX87tMNakSLE8TQGNkrf78cs74ZbubyKc6fEjd7WJVMScamE9zyQz9rNNUCV1RdRE7QTaL9iW",
  "key6": "2SJFACGNpodHJNpoY5cB6mDAHii5MWN3RDJDJmm5yxq1u73evCeQ2PFREBgoZpvYt3kGaKao6Xq4Ej7ZAbJrTnbT",
  "key7": "48Z2PcecZph8ZyFD8C9sGm2kTib5EMQw7REufkMbJbuLKFwYL1G1JYiAvemmB8b4XMdA3sLQQVTVNdbS76NVfJyh",
  "key8": "EpJfeyJGfiDiPc3V8eJ8vtGqQBBEGg1CUtBQkHZ4Suhxwaeb3pDKLXzsVm99De95Xxw81TwzjBU1BUXoVS57c9T",
  "key9": "gpGa2M5pR8ccxDNdxZ3gcREnGfc3uXwXuLJoJHrQnLGfcxCPnmtReWCZRKAizD8KazRD1Y6w3wop45pQk81EGRh",
  "key10": "6vbgAN7ChVf7dY1K1YsM7UigefY9p4ERqs7hXzx57YYUiHYdU7vQGReyveP7TPP5jLcGb2qhrzeiSWt9WdPZiv6",
  "key11": "3C4KGAB8RozgxAdERS33msA1yuYomchE6dy2mNaUmMQryAFTEbevPxCMKFkWvxETXgeBiqBmHTJKhVvreyVj1QEs",
  "key12": "fWtE82xtoffuJxEi8QavyRMrxsajrA9YoQr7MSxTAZ67NroDWJ39qwviwfPWSdZBMhGWbPQFiwkX4ws41nqusmz",
  "key13": "4TERbArg8XYuC2wF7mQVeNsKcvD2WGBQZUtrqjjctNwcCBVpmkqGorL2qyvjipavjk5xd1cD9xdmVN7uapW7xhue",
  "key14": "4XZUS9JzCdMBfwwKQgqosqJv5kJPSkraQqTvnPx7Q35xYTFCkGzG2p7Xvc67dbTZG4BGfh8mdg1Ny9PYNir5KUo5",
  "key15": "2ouGi56UTyE5hyiYMGSz3iSLhrMzdmdtfZebxYLEVvceQwH5goBQ8kQGWqB18y5XYwnQa4dCQMwWfEwxRP38v58M",
  "key16": "37E7t1LVeey8zRx2hrHAT4BUDD7LGGQvuBEnCKKmir27eMd6XCvCddyueNJw7QndZsjcnuucz9sskfJ746iBkxyZ",
  "key17": "PKwQDHmu2RLz2niZPfg1CTf12Genvyj5CsJofMkLx6XEXVGnNP4qhHzwez9aUrkD42DCE3tmKQyioerT8k4twZ7",
  "key18": "4AB56HuVXGUPkgyzaSWN9TgQ7CGXtXdJBytL1dKgi7epW4swhG9ZL3CQZ6P2RPwA6R8miQVvaBVKexFVLtHfEZU4",
  "key19": "4Thdo5Lyg29s69JiRtErqnweoK4fphsTxYb9ZQ4Ztkc3yKASahmA9hC2VRbgfRshaK7VkPzr9MLxHQBaZpjTK71E",
  "key20": "2hwe8sdnQpJo8yPC8Las1SM4H53ipL8f4PH1ToyYzpYRUeA3JY4nNLK2UdK2nAE348N815YN4UrygQ2KMmbU7CuD",
  "key21": "5G9gvnkFudMbTqCrU9BDE1NrEtoS5t73EeSJJtk1iCMLd3UccYcow9NUZ6qesg4zhr98av4Tfy89MHTh1GfSPXzE",
  "key22": "5YnXM5mrgVgLuYK9cA3Gdf7tQphffD1pHjjPgcqJMoRBERbx7DmbubWbpvdwBk6bxNoF3E7Yu9XryumUt8J8UtTw",
  "key23": "4pa1QtwboEWVVuJ8bJZyup5UESKSb2YVRDtFeLvpD2YPMuvtbWhmjtjVqA7e3piDfvDWBeusqL1WPsK82AF2Rewg",
  "key24": "61HZ9iC1wQruRHuZoqvTM7YMYnqC2sjyc1HTKzUR8Z1jLkPcgPds4Br3wXoJA9KgdyaZuK5Fa8QHxRnmZkL2e6jz",
  "key25": "2eceRGWYZbeghnh1W39EZqHsGB7q6vxzYo9Tne8iCzr2ZaDMua5HD3DE3yvJCzU1tkjC9PVmKByyb4V9uTHvuNjd",
  "key26": "cr7ZHoUy6Sd9Af2SV6zBtTPVz9Cva56VrRnSfJ65xyNwqmmCqr3G8cdNnAvRGKPQiGrNzAAkCvJm2Hh2Z2CLVz9",
  "key27": "7HESDsDFN8oHTxkZpbAiCSuH8WKrHLbFi14KiR4Zxad9EuE6TZTe8XMHhZ94Ka8RcBjiMpeZ2k9FPH4ZcjDvKFR",
  "key28": "4U1bffwzXiNyd2bQij7J1wTupmxuDiMxdnydovZKozSA2hKbUHnMLEqtn86frpifNNFJpvn2Z7tGVeFVLzfYCsE",
  "key29": "4aD4cBpyaGuPniAuZEXNZCZW6RkFmgVaMcBthPW1jiBtRwdrZchG7taa6LyGUfnaD9VeGRKjGetjjf4krVgx3tNw",
  "key30": "4NamoppspuhjLf79smvye4XsaseBoSezLwwi2Jttu6M22PfWkXaMnGsTQ5umHPssi9rpGm8CsYc6siwFQDRWHbF1"
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
