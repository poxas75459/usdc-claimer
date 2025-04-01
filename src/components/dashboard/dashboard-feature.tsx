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
    "3oS9v57KmRk7uWiSMPrQSEt1XDEQ38pBU9gW1hauBxY9BkZU1CYmWZoirmqxHuUn3xXWhno4VSDMX5nkYdfFDrvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TD7NE6N2b3B1iWzxZxXft68dtSSSwY4HZfccaKDUST9QGB8UxV7Ms2j3mA9CsBYQVAUkpMMBDKmjkbuxk4zgEff",
  "key1": "5Kzsj8th27wEH4Fw9W8Y2X4oysEnaMsxnVZpYmzUTYYbF2gGfYovWqjh2SpibuvUDeMSU2BngnyrpgfU7g1cASyY",
  "key2": "5EYYsSZzos4274AyxVX1UMH6Q85hrAGkMxF25w1Nj3WJdr6A3SirkGVCewgTttbG954FGZf8kWy1ehLp9SaeoRJi",
  "key3": "3twACJVf98W7aeZoXSVSiSvoo5NwVNNuqGnRn1TcBk1KSozDunvkcETQqDQbuznLBzEhCq5JmzhuRJVZ4yttCiWw",
  "key4": "2X3yQK3FMuw5bu3h5FzFNHvB3sU1Fgz8JTGDMjQx9Tvh3juRot3KF5V4jumn29VwoxE5NbtkFdqLtarNFv5LJnEJ",
  "key5": "5dztuy1zKcns5t6JB83mTW8EReK697BVSAHJEadkAxeYsbEny7etn3Q4kSVbzNJr2sapsSYiXtzYUtLwRSmr57bA",
  "key6": "22gp6ueUce9Si6kFiocPKjFTKLHhqWMuUnJXNEAeDFia3Eg1CRPoCEnor2wnJHUiC2cMatN3hrVj9TuRTYbUYFJp",
  "key7": "36RbyoKvKohm92jEQFJf3h1DTRAzKS2xUn9qBM1wF4vykDkn4H8y5E8tNpk1MijwQa2Gn6AQEkXK8dhCBrpGEnC4",
  "key8": "5iuPiMcbcGyWZgHENEVZMV86gRwJ8zeNyAJqC8P7m5quo4ZmavNgiLrNKNxU1n9qufKoBwUrooKgTqXEzXcBPPmC",
  "key9": "5us2mEufT5NbDMcsUCqSAdc1wXLGEtiWApkQpPgbeBCR3ivD9Dr3DaZwHXLCmyWi1aqbcA7LkqQbwjYLzNX9RvFv",
  "key10": "oYr3MHuCqwfwvgVjxnN7QbtXGqrcwDmEN9HoUFcefShFqpryCVEQd4YzReR8cwF3nJTsrfhPyBeWrngdrYy5xjZ",
  "key11": "Jjwjfgap4Cq1mZR9KViSWneHz4yHnxhP3FQZ49gCwVM2AVHSoXSQE2fT1fLqoYag3ShVUjejVYZfqZ1oQDU3xci",
  "key12": "vb1XBMyvLGZnN8QjTZgTrbtRh4n5VdiKr6iMnngcFTMLGZzrSmKyGRe3fHRbHheRhAaHtVYuUMERiDmfCcvhBfk",
  "key13": "5PN6rsynb2hFVBXfjJtpEAv4Q34kSjrXMNqa1kiumJw4vwzVRzjkLDqYscfSBABZvgL16iGX6qDopjVHezxyQDJ8",
  "key14": "5Tfa8msiCDswhtngDD4a2kWENeV1oMPdcKa6GL2r6AaxtvGtWzaxYRyXP24FGov5zQ5TRcwXxBsK1ACUz7KLEfWL",
  "key15": "5MEyfxeBgHZqtQm8sJ9wsqUoqn3EXJRXiabAw3dNQ6FiK9a4arLPzDPTXeG9iu1eKXJtiMfzZLzJ6932frLWFJ1T",
  "key16": "4KiwHWWcigjj88uZBHwTqMnXcUgRDZut4pQwqS5Trri6hymurmToDSoyn7PF7LnS7V78ab4nmWaMd9kmARen2WdY",
  "key17": "3HiDk7jDVuuqLUZ3VNxEubEUvfgJnwf5YnA1LnNkR6Lbp5kNt1vXYo7Tie1NkYapPSWor1AzYm32vMsgbLUmrx9e",
  "key18": "6745m1ctqsr6AE9uxUXBHGS5gPLyPCTvoVcwoUxQLXTHZdP4pkPGcpMnrzM64kSRxtHCD7ZXp3JG8nqAh3oHCnWp",
  "key19": "2c3BMh98F4gkb44pqBsiwAapP3ckQD8SDiVsQK2hVswmmwe81R2hdSe5LDdhvnuCCDTNxXTXEza6Q2Li68pfxuvC",
  "key20": "TVjzYQzGUrc5kfuFMvWKf9KSfD6bEzn8fRndQGuw4bLHipXAGPAfBzp17nRMTJJWK9S8JpKutmwQhxmVT7FFZzs",
  "key21": "4f3YWrw2yj4FYL497feCnVCEyffwce4WobZmeRMja55v9bCFpvRVLemrzEy8fRHnXzoPb6MZoCgnzVirLZvfNgqT",
  "key22": "52Z8rvEwq2NDwRznSLHKa4XunCEcw97Enyy2GTYo5uZLc9t4R95mqWMiq9c3HE57DKN6QhAW2zobzEzAVTaNdBFU",
  "key23": "214QpmftKQSfwEiP1JNkp2f4aw3TEYCANrEJpRQtBwxAVo1cuTckaZSYWxC4tF7xJvoR83XYXGZWsTFUoQBMkKYh",
  "key24": "5t2G1hhaubQ62zbp9ovstoZBi8VpmUQAL41aNGEcrauC3L83BetQvWUiheSmzqwZZkJvFmoSgsMg1nieEnrLbYF9",
  "key25": "3VokhvKUz65HRSc8B2gtDQ5bQKoVdA9LErkUizrabGwUQ8DMiBeqJMaUagnEPQwmbm4np3NFpzn16YvkQjAv1KRY",
  "key26": "5eHfSe2mBJUvzofzj294Rpna498JVdk2aMz7gzGm9Z7iZen7Jh81BEukjN1iqPfhzpf6NMgBF4vaAWKWvkKMEMQH",
  "key27": "2K7VRf7s9PAqaG7tUoAC3kbtZqvE6H9461QZKMkDomgWTwZKt6MEG17TaLgat3tFuQMwWv3Lbxx4erdoeA3dBred",
  "key28": "49DgMbnZ27dvYbG4Y3MyHo5Tykpkio9wdYxL85HvYNEUTYuk9JGNEYJaphuhE3MPa21tLW7ragtn9a9cjeZJmYTn",
  "key29": "2cQx7QtCDpn2ThyWHdpgENzrAjqLeEs3QUenbNTfDMBaebXVmSbYq9bpyKj3rKhRpQUM5vzNy1v5SHghQPGmyEBr"
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
