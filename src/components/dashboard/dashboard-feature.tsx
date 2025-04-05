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
    "24jcd4PpzRdkVkfS81kML36KBjzgkLYdKNw6dSCv2Y2GiFtTrKxW1Trgdy61Ve5jKWL2zfuCPnf2icg1FQGhA4DB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akBc434PqNxMLQ95THFyUF8w6HqzT6u6AzZu6m4goZnqnXC8DpApQaNxscrcNoFVatq1bLd6VHh64RQ2Et4UdP2",
  "key1": "ZwT4ndLkHE224v2yvAUAXqnnEae5Gh4Ss4BK8GKzXzfCbfRdJUd927CRgqETCFM7pDZZ6rdFpoDxszxwsmVtb3x",
  "key2": "3kNp9Dx91JGT54nVPSBpWXK8FzjuTGbvSqxRce6oQY33oyUZs61RKxQ6E3toooQwszWG9DhCouJH6UQ2yVEFUavS",
  "key3": "zux2Vh35qHvTGa5C4hfZNZN92Y2JTeaQhTmLL1ahgoD7XdJZeT2C2WN4d7GwGTkHR1V9WK77myV7RF6pCsjgNFb",
  "key4": "Qpzzqfzd11KE1yHG2BbCrPe5q7RwVSfBmbJeMAhatDekYPceYru61L6E3Y21oWLgypkQTqBCPAcDm5Lku4eQv4n",
  "key5": "57e9teYgbiJRmj27mgsJ59KAkaJaQTGmydNUp931LwaaFdvFWbCrUjkmYddzYTm8cpTSb26ZjhaFD86HWq7LhnTQ",
  "key6": "5FGZJEHzR1gv11MzXAxRCwe2dF87SCezbCMror5bMXLpRPoX4AdLskT3bFFPekYgHJS4yrmyfwZhCywz5DEZGgkP",
  "key7": "5PNtoKXbUwzBJfw5LKGXu2bHSUWPui97gnKgk8PKE4P9mtUwwhfpjxKKwfVBbFz4kwCayPimVrzbtKz42MmBjPzX",
  "key8": "5GYuFe4JKjxj2RpHor3WQcRRXiHisN8KFwJPyeJ2WNimWJ7WG1QbbyeWvqDBe316X8TR1RPe9Kf2MArGQ8Y3Rurd",
  "key9": "3YMpqHWMDYeNsRqB6PLszoeMFgPYFdcqoyfEcGwaMyCfRupEKusMLNL4wsdy5Z2YkwNoc11DAQxZtwbHc8LjFeAV",
  "key10": "26PhMMnhkxBuJy9bfvWpD9cgr32yUgE2iSx5Y7rpQK6TWSSyx92VY4t4GvG4trfZyCEwhueiYwJohb6t7Hewre6g",
  "key11": "23Z872sYDL2s83AhbhYuEf3bjHqZeNnm5m7Pv9iZA8mYrPAN8YHRgy332GNeThcHbAuvGBpqKD7DmDkLh7UGkaQj",
  "key12": "2ygT5V3RFq8fR9fhh9RMrxjc6ysKuH8dJmWWQPfKCL3DedxSkJpbHrZ93S1wJcJji57DsuRG2Tz8q3t1VaDAtzXJ",
  "key13": "4XWC395zffcPZxQCWbJU6fFyDdG9VQdLb3oNkLvLFDSEsN6HRJsHegomcTiMctuVbtxZYt3hcVHyz8PVrnknfn5X",
  "key14": "3LbDr8SMs6zPRcRu2XWC2G6tUytgSW8L636tGBQeSYLSjB7sLaLGcrmnBMVgwRoVGazHDUxVQbtbEnvoZUU7AEC6",
  "key15": "4kn994QPUxytYVW1znCZpYC4uCmwbe8WtWfm6xUQG5meyYgqReje71TDNk7f7D9zJsNwf8Zb7VXK8oh2sZR5PAHh",
  "key16": "2VMSGLfsWa3K7muy3vjjurhaHcAkRZt1zbLjfNjw9W7VyyVvKV8KUQ9rB4QwjqPzQMZ2UnVqndN9Fdb5S6Ce5dmy",
  "key17": "2E85dAGKtwMN4CLw6n814aM7dEifzdYmSBUMDWjamqLdpZMYpjWjcKUfzvMkT62EN14gyFwdhytrx3XJ6Ruj7gnP",
  "key18": "5G6HenLcmcsp1gJvKHEaHtoJnzTvNnBcNU2y7ZAKbjpRoAXbHMJPRndU9bfMnpiP4ZQ6CAkPwLNitxVMQ2GWAkJh",
  "key19": "KhsGwuDDvr2wmEtv31h8vzwi1Vri8sadiwzV3HQbcc4Lzmd4RXYF6aJEo6p8jqZK4mnuJBMw2PQsNaPrPehEkcq",
  "key20": "4LRz4WVcvF2g5du3KsgqKn3MzGjJqpLLEBupPaQ55e2RnVQtLzSqUDd8NqvwCEk7K1jdxmdrPJDEodE9CjEDsuCc",
  "key21": "5mBYbiDJdkzKbAPU6HTne23oMxMiYw8Zt6wwUhXF1JKWu6kANhyppzJLaBYuwedUCVW9bYAfbQcv2GsgYrAu8JYC",
  "key22": "5ot9BmGhT44Fr25ZRLiQu4y4tdAnwjZS4L6v3DMCVwUJAs9ybjbpV2zLXgKDxKK1uwoWNYhMonphpJDDQAjZWbPf",
  "key23": "oc3mjTSPt97e7WvjkCq4BjpyDHQd95oZirFuh6EbNRxpdkDgkMD8wyMGp5TSqyKmX4MYevWDLf7izqYVfzJA5UC",
  "key24": "3tuUc1Y8VHnsvqCDq5a9cKao8dNkfTU6wB2foKLVjE8nH1ZnxToyV7zUcAM8qtzbTRoddDd2F9U5tFUpEEWrqLsf",
  "key25": "4eFVd4BhK83cxxgMv6NX9Rj9cKR89mgUXZhR1c5b3xcxJcpk6DZhPKznxcuqWFwefBbWBELpWMY2h7o2Nj2yHLWk",
  "key26": "2CnMsSDhKfk6EPzYiDqc8Jzy4433bVoDp11aAfMWhHz1jeBVFKSX4ZW6dvu16xG2kCrjZHuhqH5rAsGHyHqxj7ji",
  "key27": "2c8cqjgtH1Dv7xxpV88wVXh2ekTvhEc89BgozXGjJbKSeziTSr22PNNwEWHnqtBQ7PLxPrGaXkoa66M2wCikUwkF",
  "key28": "QdZouMiyLbSydSKgdCLRDYDYuKGZkvK79X6UNiHYGRdRFfvpcFhsXzXfX4E5ogqjgPUQkqKFrscimLAymmwnhs7"
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
