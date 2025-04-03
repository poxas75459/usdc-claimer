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
    "5XuoH6FA3YSFmbcEVNnUgJRUwsWorWPXupTYbkQu3PMGmArebG4WuH8NtMqLSjCG2hcHuwGpq3DRWzzL68HMtZiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goKXLuVDmCC7j1DBwGiJTzMmrNfsgy9YwviYiNAzDRbRjFtsEMw2hSQK3ua5T2E4JF5TE23sef31KRqzBkf1coB",
  "key1": "3kMbAXGeYRqSZNiob6ih9YAAiKEfzQhhuLGViCXGpmuRyyz63XyshCC83Gnzf9x1gukdMyRsagextDrXF9RHAk9L",
  "key2": "5iokxvMuVfDyQz2nEnXskAx1P1K9TuS5QcmpnzQhDi8RiD88L27RYdL96yQWAMxw5uL6D8SLr9PaCHYAXtgKjwkg",
  "key3": "Y1DmAgf46kVZrWRbT6ib8ZBLe3XA8b1k569778BhUJxQiQvkKXbU4ksq6QL933Fr7ZWQQXvsUqLS4C77GPGgaVy",
  "key4": "44uP7NsufttxfFQTBctuVFWtpWx5ugvwiWUYvpGouPJqJpmLRkf5kH8DHDRnJd9NQUCJr9bod3qv7BbCV53HGrv3",
  "key5": "5QZZcCS8d6BpPRt9G9wjcFK7EiS8gbR2TZUuqvXM3TktBs8ydCjTW3S3wTX35fbd5htf37jutgWhHW4GoEbpYUZT",
  "key6": "Gn3vdjxrJ1bKHB1B92SptXnoM4r5y5qbNXzZWdbPzHzR7uWpTKmrWG84LKjkyU3oW1X7ATRoB8xC8HKP7gwnoEk",
  "key7": "3VmuQtZnY4mNNpEup7GCEwjFiynCktKHpP2QDeJSCJgViRepDpLohbrhBX1vXAJPmhc4j1wby7H4gjhF13tXiHis",
  "key8": "2VvNNQZWL39S5LeaDW7kvfs7zosDxD1qr6kRdewD7P54FDUmRDxZETrx3t5DuJsMicD4tLmrz6krqgTgW3sX3ZvP",
  "key9": "35mznRUMBWRDHGjaVYyJcr6Ra3XATGaBwJkdRnXFh9Wv63KMAQtPC1AkJbZskyQfwUbrHhz9C7ZVGkaWBmi7r565",
  "key10": "dnCUuSoqoxSyX5rNn8ZC3N7xpoE6TgeSFeAg6QF8KE2K8WnJyNgvQ4JnbPVu34VDMFZ2YFHJxyfPHPFaviJjtsw",
  "key11": "62VhFXqyHoGNnSsQDJqsfrYusM7sLQQnB9QH9r15m5XmLcXqm1GFC6nqUY3Bb3Lh6fdNj34BkQJ987M9kziALrXA",
  "key12": "4kcdi9FpYWmSM9674TwVDXsB4pnTQg9NgGYkxE62pmcKmy8mou1eonfotA2mFFETKYuKave3W588MzqK8EnkLpbV",
  "key13": "2LmaMSWUT9kxLTZvPtiibj5zkHJPsTte6A1wU7jY5SgTZ3REfUKM83SWDwEwRzMP8X8xVeZnKBvuG5K1skfzviqG",
  "key14": "3ekz9vi97MucQsHsA7ppj6YR5DpNvAxbs8VttyNkcraLPJ5h6DduVHYDhDLJH13xmZsSV2sHMmZVRtms67asHJ2M",
  "key15": "CrqwPzWmQyHwUnrcJ5mst12X13vrdvLKaZwgDgUqNtXFoZWG5dYRzhMaycPy5GfP7bS4MmFWsQWpDrN35cFaBnJ",
  "key16": "5VsfFwJL3EMxu16yWRe4jrAuqmoggejw7qeuK935xoKzGnJqcyNn4ZujDoaeHt9KDC2ELGnWYhG2LC1D2fbtNcPd",
  "key17": "22H5crwx1qjJiN4UBHnEpY2LzzUAXgDmMYfFdxv8KED5vLHJJRADTgYrRFgoE6FyD13wydccgEMbVP8AL17cxNco",
  "key18": "2rFtz6UZVjbTALW4g4ZD5YVdjMNRd7PDSLJx7iPY4H6HmV6XkFg4tUW3QQoXEcWEdrqbR9Yqw1LnfpZZd5WCd59A",
  "key19": "5HmD35P4ueT7LchXi4o4uML9XyqNVGQdDbuAgdnCNmeMpcZPNko1miL9K6hadfF22d7jbi6xaN1RQwRWa6Lqhhn4",
  "key20": "5nqiChxDiXAV13jEHhgEbBEw2GLScppLu1QjLSPFziHz2YZgEHrbF5Ynmg5gPzkuBC2V8gf3bedrdF6U28zMQfwG",
  "key21": "3mHfYdkrPYp344MeTdhSYxx5ixJCfRCRwQy7mhMnEe945od31WYBwWib36Feie3MGArh3d9niYkCBhrDM6N3HkNU",
  "key22": "3ns821zUH2CdznRqKGnwmTdbWwyeNmXWaDR3sbmXacBucuuczvmkw11xEWTtnC47vMxvNLkFKt7KcMAswUssFtvi",
  "key23": "2pHj743HSPPU4PedHhhJhJBbvXhNr2TSDEMshgoY133YS7jaitUPk2bLwjuWQMc1RnF5J1fgQZ4hVXrQua5ykKsD",
  "key24": "3MeoDxJmKDdz1JwuwfU5uN22MJRSk8pjWtvyjgDdEXCCugEneGMRTnrYfSgSY3f9QNgvHZmdhk9F8ZcitnBzRiDd",
  "key25": "3NwfEFzn3scTya4EzD9xnjKQdHdN6dajfZpjGc2fG3v5nmAa9EFPTtViYvb8Cj7hx5h7nmYPxmZscNqvtP1iisai"
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
