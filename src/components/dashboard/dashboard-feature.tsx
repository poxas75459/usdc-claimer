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
    "2mRBgaJwjWzoPjg45aFPmjuSvs9FpuLtGLvaXGNZyxcHGA1FPp8gjs4ScX85eeKA2reoXgEo8vsm6VG5WNamkG1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnTech73kofpnBxNAoH5xursb7h7U9348MUmhUrpLobqJkur3k4HSCr8YdQrGrx3NYs7SUm2HjzS7J2G4eBZ8Yt",
  "key1": "4arDsEQ6WvacoBDyXxe3Vgv92qjY1oyYfDxRqBC1FgmXE4U8SpiX6PEVnkhhPhpb4EYhNs7rknvCUJXpwuAPdGvQ",
  "key2": "478DpiLsP63cJPtVi8z5WzfEf8omiSApnDfPMEukjXypAw46WiZqppRZmUxFtaCCVHTpicE31ypzEwgL8wQVjjA2",
  "key3": "4RyeD53kgVS23UZW65E4SJGwHRWm5WnQptbuYzAZuh4K9ScLrRPjiraYc3skTawGGLHGBJowRaWYrzmkSDz5dsQo",
  "key4": "S7Y2PdFuFivetYuPH28aXrYTsb65L2QnRymWVWNPw8zehf1qyJgPgF1bf67DnddTzW6aUqVJF7vqkbtMCQRs935",
  "key5": "3CiYqcpXLNh9EeEcNNZSsYX62SBCpYC5BmKaRvTVNPxxmVh8oLu8SorD8kUu6jHagSecgAEPBFituZyWYaXw4ec7",
  "key6": "37SjWMnW3jqCk3tXUKteVm1Whpo56Adt23yUgjrEec1m1gPiserYfDD6w5rj8XDFRFYu4c4bYj5PggBzcw6ZZj7y",
  "key7": "4x1CWb4AHxie1Ysz5TmMtFvJsSsAqwgYYyGrvbWrpooK7cYj7dDdhAJd4t7P2eACX3Kn84jb4X8TJkMHQBzKvcHX",
  "key8": "2F4pBGknrk7h7gE8hAkWmGSm7hBASUtTQRvKfYoiGQg6qEsfzbrg47s27LHqrLEDgH7KLmNfJ66CMyFsvfJbNWLc",
  "key9": "3KXzuj4GRvgeEzsAzkML5TpBjJgqFMuHoZ35nm8Xy7paM5oaVwuPgrYWurAtaAjWQPdhJS46RxVGDpso94VwMWuq",
  "key10": "55SqXmw6qzBFAJ21xU79UjzUvRzewDrBNazEHrkKyyoSTZFv5dFCsV6b8KJbuvdEjmeHAxPc9h7EHxU6kWP3y81P",
  "key11": "4kZRmX5wyRd2JCiX9tEvSss1JkE7xYmjiZkaKfBm7xCpjK8mMGtMDJGssn78gQKnUQYJjSoNHW7nm2wzvNwNTeEG",
  "key12": "uV68bbxHoLJWuGaABi5zbg6PWatMPfhnRhAz2MDUzFvbS5yPybkRscy5ENkRhuAScfwnx1gEF3SEewBSSHKTp34",
  "key13": "354UUEh11RDTP4PqPcNMFVqVAHMrnrDXggSPMF5icosjF9RZ9QTupZitcYNxxA3iWG6CY1tMWaovSMknoiZZTehN",
  "key14": "UMSEAmyqP8i3j8gtkHaZjnNUxpDf4X8wa1iBwxNg8yBcd28YFHPKb7iHbA7aSiBfrwC28bFv1mFNkrSD8FU2GNQ",
  "key15": "45rM2PbumbL6X7TH3aFbiGQJDErveLFbc6u6sonCwYMJTtAzzQezzA9ZBaNf6ujZpgyxUxiCvBBu8Keu2awYt5oc",
  "key16": "3owz41bqbegZeZaWmYWYZJfz1bfRszVV8BpFTaXQ3ryw4QsiTj8Et4wxG1S655DdLWaSYk2XVACLomxnDAtK4up3",
  "key17": "4HdmVbvDoyBE9vWqH6fmy12QWPZSWEro58oAWUo9d8oa9W59sbQftiJi6Vo3LUHUGS5zr7sBWRn83DprykmUaggJ",
  "key18": "4HfQRaCp57PCZpXxkCofZYDGZno9Q7hTVgJ6TTSUWq4J9qqfNXFT3Zw9De26zZ9pwUQDm6YncFYJh4e6Q4Npf1YR",
  "key19": "2kciK1Tbiwu88Tcyt2y2bc59Lbw6rgn7J989CYaHTXCcsaXndxbi9PWxscwEF5QUQmxtZPf5Nd2K7TffLNL6w9Xi",
  "key20": "3v9N2E8sGKxVTomNVG2oFq5HSCYP4uF4PuUToDpMVNz5o5MwsaVRLZCuTmoWzETDNqWXZzTFzaFgHoehVxLWGEEW",
  "key21": "5KvjJayKk4MwRXK1yQ6mSbdXAyUEAWy2pHL1irMv1sHPu6wxNPDHQKcqRoyT25jxptpZ7qRuBsZx1XZ8FPUwPm3b",
  "key22": "3Cqbegf1zihN5reMqLBwzQUAUEFt9R2g5F2nvuPa5YsEs56uDQX3PmoU2wVPr9qnCfFR1GwiigxaY4PqUUWFWZQV",
  "key23": "27iXnHhvfAodSaCkqn3YBZ95pdegdwEzNqKonaDaTM8hXThmn4GxiZNi9MMPVnKETQSQF88Y6vyS8N2XNjqju7cW",
  "key24": "3T4Bvv19Xp6YDnsaRWLE5PwwzVvKAX272adueqN7nBS6jLEFRLJ9yd4j1eGupGpRruxWRKPqLnhZTovo6UHuq7SU",
  "key25": "32yWekBT3AW9EeSMBekN95excvH6cxX1bp5oEqNVvMEAc7vwrorZYWf1Jxs11mX95RgVbeZtbRmQsJHutLCfBD6E",
  "key26": "oQfvm9iC14HrQrxX7pggdf4xgtzjucTDauiU2JQ7ZBoLtQkEeoPGeyL9NrX5vkXkmNRCqnZ7MwqUMNxPK83wYC3",
  "key27": "23gPm2UzNTwrMkTxEFFFn3UeCY1m6P7QnXvq8JGZaCiWuwtUHKbiUJcsfF4NsU7erz7jhFfVPnJMHHYg178eGKL7",
  "key28": "5qKirrXfNL7ZKyYeahTBKcx1Kk8geuMHRksdeVANkEsULXVd6Wq2J9pxWmovaZMFCMmVPf9emyAS4ACgJNXxojsg",
  "key29": "25e5qvNRtwhw3WgQZsLrpUZ2xNYxwM5ctB5oRgpAYKYGvCoeXH94oyiNZpNTxjpo3hcgnYynuQmwAzsH7SfqcXFx"
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
