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
    "259nsnazSJe277PrT3vqEoGia39NBb2DbbreXHMSPFCKFrV3aqiCfYjGNGAfHM7ipZ54Nd9Qx4T16XSydHZCK7ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GKv3pKj3ujnJNbkUWJ8c4oSnox3C1hFmW1Qwputk9Hag8qYht1LkEFpzhCXZRK1nexGDFcM5qHK4fFTQG4bs4in",
  "key1": "5H1t73KecmNDbqWqHA1bhJPqW6nhF34CFfvuUASH5pW6QC86Uyi9adQkNnNLiT4EekZFSHbAhun15TbiP3886Vyu",
  "key2": "4ufP8E4DMHgdKwMEiBauCdNC5cEygncxsCFzJnAWrRaCpsW8usQDyz39t1QfJCZM1ht1s9g32S1CzW6VMjU33DyX",
  "key3": "2TonQmtxZxu3n6prEa3ESnPcFVZFzUikQAHVzcrf3qTZeqC6a3HJzgLfEpW5nZNS3VArNnbWWGWL25wDWBPasqzd",
  "key4": "5A2cPi3VbXTRAr75w3G8ZNKHZFHx7gzHdKzDb5KFsNqcCrYUg2YnszGPr1b5BFaVJunXBTQDqkakxu8KJ5S4vk2C",
  "key5": "34tTofGkrf2qeXCAfoZfTxefKSyGMyMJgndxe2VvkZT9dzrj9eDTYpZ8ACxU1rrsdx5bWgyDFEMpFtLEtbroN2V6",
  "key6": "5yDmh1YtpAnFGX6wyyGdteybDigk8uCpEtWQAHFf2UkyvNw2ktrBCa8BELjd5WLfJbYDSWnT3wHnqsF73WjV7Pxd",
  "key7": "d8RwSJorHhefgQuZJGQ9rgRmC6dRfoxiggAJ4XKmzBMLkkSZAfZPUTckw6HkQcLRY4nAmRq8woLhhFAnMYevF2b",
  "key8": "5qCkbhVfUKkvRPV9hLdPHpqbus3KTu5JdoyCCMFgaJTdykQZpVZW4qLvFS3vnoB8M6ZeetCe9fKdjx5euz1hxvJd",
  "key9": "2RVV446T4guRP5YkERJxE3eRPQXSWZN6AuPMqrVr5GMTVkJFzM5TXjRiWZXNzq88wMZXzamybDEuMJxvSmVaWG5r",
  "key10": "4w48ANHcWXmj8KoEhq3jaFbTMTeiassnREoyemHFzWmFWYaYv6qKgSFgV5uCMUuvPygm5Dv3bjNTXaPPyvMGz9hN",
  "key11": "3zxNAzv9mxojcAj95GEWTfNUSq44gfsHstJ8FwpzSFsX4rki1Qce5SjwCFYnPesCV3Fuu7HLHNPobrYGfAUkWxoS",
  "key12": "dsKYKRzaGsHvZSMzwV4o4nqGgaKNhfsZRNCpMVeNQKTK3fk4mewEpWp8QhfpfdqfUNuTGEwsuhQiuRiTGdeWf5z",
  "key13": "4toBDdizgjvuN6WXTuSRifoX3ic2kM9XANP778GUusvRwvqxur8vJgCrkJcRUL9M5VvAvVspjauJysGBSDWGrv4L",
  "key14": "265PuQvpm99v7Ph2ap3YG289bbTHq5rt3gidnWY9A6zghWdpBvSM2jgjTccBfctqACCavoAQVWMWKwghnHaX3K4C",
  "key15": "FVpomRXX5tgP9gHjHiQtUmrNi3B38SCh5FwpZMG1WWZA1uVHgX5iKSaJRjpX13ETudsim6QjCKLWmEQK7ACbHk8",
  "key16": "4afkf9o3K7AJSJVrawrAZLBfDrhLuTtsW1NCf21LVxe5N1rV9KA6RJp1sDVMB5DiccPzKRkVRkjSmvvLR8kq3cx8",
  "key17": "rbGLdGswgeQjsjySxFvtHYHaNnrhhncdp3CTLc4KYJgnAjBQ13NbQ9VWCbZbLorMVP3k6NMrfD1V439q7Dw88vb",
  "key18": "51XJUj8BRxjBrm2dDLuZVqZKTjV51xuRor87FtmiTnudCY8WuqspmPjxkV3CUV1cZGrFDHfmdR7tfia3cj3NrwGN",
  "key19": "qr74ZogqKftYghyiekaCHEsoEUu5A7M4f8pfM86EthMnpmEbc2kVtwkvy7JZUeyVN9GtXd8gK285ydhEmQRT4L8",
  "key20": "3PUREsQpayufRqhQhgUbya6RJTYKJ7RXfhcxMyy1b4SMqQEquobcaJeBMdtQb9bXzVKy9Psq31MJGmsDEG3jbzZS",
  "key21": "2FTuyWMP58Sbveh5TAUznaMHtwyiqRCXEy9T3yPRGgosxzXfc451AuiXyCygB7ZKH8uPoUgP4q8NMqiKX9n9AN4Y",
  "key22": "2WLJFQJguXuv2ByVpEEt2UsY2xHv2bM9jsaN6GKwTRuYHwzC86wBiPFCQx7tBjznhv9YhRz7ZJEXPQNvuBhF2zzm",
  "key23": "2hYxnsngFCjtEadY95AvJuXV8pwQYpXtmasoQhmXi4EeQ59C8p2Nff3cQvXoZtfuUXrL9RMuLe4zMNDiX4RNfwqY",
  "key24": "5NYbHFkwK7weWpmp1BAGpPWLAMtrfzXGGiHdd8GGadYNb7gY3vLXMBG3MNv4uvrrp8xGFG9uvMESdnt9KWQqUawt",
  "key25": "RB7uJMiqDNCaC4sq1wSwjG67q5mr75iZdWt1AuZFm2K6TNcaBhnvB9LVfQdi1h7FGU7MqR81KKd3FG7fgCsavvT",
  "key26": "4FnuUCeeMyRyN7g5MZpD7oGUXZk9F2WY3dkCqPD2B71owgYTk6qirh4SbHUYvnzi3BaiHS9CkTajW9Fmx9ckdJPs",
  "key27": "34zHDCosUxJpvvCEjwYTxGdngwjYh39SU48kQ4J3Y56u6ByCqgcpCBSuKxnxjtRyUutnoPzzcDecaZmcfQBvgKHX",
  "key28": "4x3j8jXuS8WixSXaBatoLBXdyLQcA6cR3s2CyBMdCgaTF73aa9XCjKwwMsWMXVdirXYgE5Qrxt3ZESmnQRr7TTKW",
  "key29": "45dv4yowva7f4bn9hBFe1bLibTdyBaiNMkaDNB3aZ4KHcF3n7HW5qLgo8nYcZJLAV3sxW6o2EqXDWf2y9UmtnuGe",
  "key30": "2HJVJoKGKfXNNrBjoPy1azfZhWAxj6TqPzF1g6UDU8o6ymXV3xWoVrfMwoQjS5rQ7SN5gsA5F64A6DP2Lys6vAna",
  "key31": "Fo8A8ZbgGHmvw78keiDtTpfWvKt8wk8y4PPjajVVM5s7ZVrrbmCHPuBoqPQXZfc33DfUwTs2AKUnoqFxBiQHMpD"
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
