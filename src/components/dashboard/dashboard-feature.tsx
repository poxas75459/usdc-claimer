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
    "B2iKkxAAihBf7B5nPYzB2XfJBmScBooQM88MQuLDu7uUmVMMirSkqCU3rA84LJZVCxmvA3bempwqgiwbsY2Tumz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tF3BonPbWAbCMeChPwHok4DmCuGwqkquJstJY2RUDnixMhEpicZ98DGGT35vgjyf1BDhvZRjPz8UQWpvXJKmccs",
  "key1": "VWG8BXQJuEYT4mcSbTj8AKNyypFTdGaJoTtBAbj45Qv162QPSfEUuvU1YY9uoksv4jd69ejyFLiH4t9J2h6HDdF",
  "key2": "4AU3HCWeZRtwVwA3mHiMLN7LWYgN6YBXJMz3j2BxMqYBQ9sshKCxA4gsnrs5rUatAvLWNq67F1wFyg2mT7n1YjqE",
  "key3": "4a9cxc48jBUzbBzGbWWRpmSyMWaPxhxQoD5UuJpgrYavFftMntLQUA1XddzHDeJT1eZ9AvfcWQZvqJYQsfTp3ND4",
  "key4": "4xpY2djE8mpGBWfTCSHkcHL1TcTnLkdsWKsvE9xHxqyviZa82m9MjwgAJhNjHYXjVGSgQsYFE37MJRuwHsvrWhfj",
  "key5": "4gG4UvQXrA3WwFXzDpDgigr8aWYxqszhhSkZFzx3ekoPmNB3w7SEYVR14RREqo7928kzzsPCLsukbC7WnHZ1b9EE",
  "key6": "Ya1WAcsW8eWhBYE546hRxT5BEQwFNwwzpMe3N6x79mR1r7uwmM3U6hhBHQkyVcqDxZgEQkRGf973uYNze6QNNMg",
  "key7": "43rNtjTK9of6DE5JMkz7fGH5gwgtieew2qT5Qpas5ZERLLDxd6sFvLyb5DoCygYEm7u4TGPBj2vrNNEFBv5fDqzf",
  "key8": "4VmBbQbQggWcuP79CMu6XYmaMHZt4Xf9umGjArZ3kZB372GB5xZUxDnxieWpvAf1Lbj4cosPwiG3MqDt1JZ8mbAn",
  "key9": "5TPFFJt66gZLPA7RJefB3WBy1oHjYVy2pHAqmpSA9S4azw5bCK8fZSynP8qZTjmBrsh2oDZ5KN1vYZoHgoh4r27C",
  "key10": "5AmrBMC4WvMBCJHqoLph4HLMvXocxekCzrDjWSfDgRdtF4aDTQzEH5LAzfiwUreLpfd4Bet5CxQjGumuhRQDNq1W",
  "key11": "5GfjS1rtXU9eY6jVydt5pQY6PkNqC1GZWr6agAypUY6wzzRKkobnpV81QjD5cam1SxQvZQczRmZB86k4ZZ1TmPLk",
  "key12": "4FBDngPawDoZvZ1J3zCt7Tni38tGuKHcGH6EtGf7jTb5XeQye8RWHnbURECnJphnyGc63bt4XUTeBXEH51b4WiZv",
  "key13": "MrgTuDTJvXPRTBQtQoJWnmUZf167Xtstw6DvHWCNSXLow68KaUa9DZKoiv6oQc418axrYiKLmtfXdpsqGwi9RtB",
  "key14": "3Zzr94ctoLcTs5vho6c24FW9HgBTGP9CXGP8Wy585BKyeEvEJUtcTgQWwwVsw7mEUX2aCMwzbNVqYpJgXE76Ny6U",
  "key15": "3cEkCK9S8fcjyoeD6VzYCTAqw2gB5ifhgVpVNbkWJSLDsR7gm4KxTwUgDpKFwtu2WoWiHrHBvUqa7V7hXrm1Q6n3",
  "key16": "4oj1LsXZzhQt2rmQsiezsmnufatAz125i3etxZFvNJCJP24o1ZCvLpn8jj93w1hn9mjwkDdoMq4PTuCjuTDvbpmL",
  "key17": "2pav1R9JbWrk1HACRj5JK4ui3mhf9A8gzsmQbFtLeGoFAGmTeBMwXGTpi6fSwKr1vCJDZtzexPrRVDCrYRXTDe3N",
  "key18": "5s5LaVxQzJrjDkPJbQE2RkWBFRQNQGz45gLVBgzLEozLwe1o7rDgtZPb1jetKjKABJPwagErZpRxaJ9fxXm1sUTS",
  "key19": "3TQbVLiuo1TtGxnESuWL2j9Hr9CZyuYMtYir6wC85pkHTGSEERBmCs4RwjThRXT5X8kNSpmemGTgYUo4n6HosfJK",
  "key20": "3XLhkFq6hkZe9HNu39hiTaNL7edb6t4gGGbBBZyT1vXU56KndrLtVh9y4xTajXXeySgTrEJzDhmJfHqMK5rKukgG",
  "key21": "FGampsyVMQq7rYxCNnLMhwRbMdhRXcesTqoJb6RCy6BaQRtX8o68B8z4k1V95WzVs137nDzUpAMbjJcE42KjwLS",
  "key22": "3zC5jL5aZqyF63k9zSVgXRNcuyEpWujMKfCbLRutVRH25rk7em1LRC8seLtzaAE793wQJkBa2X4BiyJGhZZpeV33",
  "key23": "2YKt8G1VG88cpxbYnHEjhjv2BEH85QibA1iyQcfP9MoaEgmAyZjYUK19gdMYoSELTP2tcZgcdB5XDJ6xELnwfujM",
  "key24": "2j8XkUVC8CCkfiwDZgVjhUog2MCVdCuf53L8vTD5gjYpJ1dvQ511EcipfjhcNjxWo5Jk8ruSnTBD5keW4dqptC1D",
  "key25": "ZvV57ngNRtUf8FnRrCrb3pM6DLQxss9u17dFUDGBL7ewrLaVkWhL7sZeL66USdmBbXiBEEgLmpqUfkWoetNpC9T",
  "key26": "2g7GPSiCvFooUWG1TnVMAfevESzB7zZLtPtFfJXqzeHP6NecKzg2aL3vhemsGNai1nQGsqCyusLxqYuR53hrGBKe",
  "key27": "3zQa4yo2rtetBGD9CPLtAHR3922VXbxq3Ca52rDvm71cxgjnTtsZgqRPRoVE96rC17PeqYipcRvmTsQMots92VRP",
  "key28": "43Lo1pJ8GUWFTra7erQ7faZVFxgqv8Af21Afck5YrWVxFEdRsjQh6TMk8XYEBnZ1y9oAUQrapqJwMxB5PpNGa1Sj",
  "key29": "4zmoLuGWUaFaHx1LQ31TrHDLXdxHZcKwEWzjgCta3jSLCks8PNGFo1ENH8yDmsDUToKZq6frC1R3cwhZotEt3ZJg",
  "key30": "yNG9WHcLrQVX2GK8pRYvudwTZQ5m2D6wcozzNSEMthLfhKMFGvjyzmiZnVo23aLf9tv74kb8uu1NMoY833tXz7A",
  "key31": "4efUJox54iz8wnv1Zki4fBtyRJbYnggqe1CBF7KYhLzZwKRJVDdBKGut2uTdtmv3YLVMzfrg7Q47qHac6u1zJjvW",
  "key32": "2DzJfyP7tMpyqDvto7LVNWnD9irddYpnX4Qv5kbn7j76jz9wroALcruReitwo3ivJnfEMR5daRq6p6VpRy55b8H6"
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
