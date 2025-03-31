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
    "23AzrWKn8eReovkDSKriZ5k7Y4vqrSdv1UnVdq9m3C3irArv9EZd8eGLwDCRKtDJxWJ61BDr95CCCkookPY3eFRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfsPgskA1UGrHPYFZLwe49zXVo33jY9oCb6KMV3LBp1xcykCxvLvTqi9Yp9BZgdeNvqmv3w9uZyhNAQ16dFpCbV",
  "key1": "2PDrdrUfMwAddDzFq72gEYwNRR2KNEx9SzXJoaPX4DKp8gVhVa9fZfFEt1JkDdCsuMo6S6pa5meW2KneG87uzcs7",
  "key2": "WSUgqvxMgZNHgej7Fq1jhk662zAkCn9PYBhcjUF6QFNQtfA372rXqBAtkVYFxK9u6BEAoCWnobjWAcFUJrNQ6ZJ",
  "key3": "5aHnBwwixuFKjva48oSwEDJf7EQuseXVWSj4ev4BeRuHViMrTN8bHTFWCbVCHV7W39aB9QMNzCmHVrfrqHXr7bar",
  "key4": "5YQDXDijF5ARzGmctNP55kXynmeHgKyLayDJXDk7bbbMgbVcCjM8jJUb8NQQkF7XJoawyFd4QYiE68SDrpRy9D2R",
  "key5": "3CoMLEQ8WegCg217n5khANWVSg6thpSKTS5cx8ok5kHwzuLbT798sVwNFkBmAJCtGVDLz7hsEW1nJeHj6wZNfAde",
  "key6": "53AN9Bz5NLWs6i6CbFhuFAsKYYftjpSrpxz2cCEDz3HzEmxWM8sUxx6VrFBfnGw4yHCNi2cdWtbBa5TS5HgTA2ft",
  "key7": "2Qn3W2NLXyu8d5wbYQBFQECPy5jW2U81KgTk3iUGfQsWaFWRtGMDZpPqgpZ3RZSkqMS3JF8frWbXAw95f6uFfZ31",
  "key8": "59xZJLcnfrVXmquVTwK3eb1GQFPCEkFDvp3FxfTntxBQz7r4BSCkVRSSGgJ7Vdi14v2EV33KsFY282R5TeFPpHEW",
  "key9": "3Fue4aUwfmJpY6PwpsnPpMgVnJ741WkGqN1DwSYF8cxHF8izZzYL6gUU16NUxte7B59s9ankzfF7GznpEe12Y9jt",
  "key10": "2Sc7tHdPbpwER6cCsi7pwqaf6mY8zctSZNLMeB1jmPpN8AvJ2tqezCkNSWxu8ZQ273PaHEdvEZ2AmBkVj7XACsVW",
  "key11": "5DemH16GKk7Vt7CTwU7stHeU2n6nq3mt561QAAZcNN761E2kUpQXEDqUGYHSjWvGWGTdRQ9UxySYg15bqfXz8TMD",
  "key12": "4rDUYcdxkVGuNLXuRCVYKwZzhAGbkWBLHfj5vGiP7wuJhET5kbV9bizi8tVY1wsij65qkQBdz3wwDpH14giAkaPb",
  "key13": "5uU7dvP6jW2ZASmBHChTTVc74EgDZ9W5YHsGbybumodeZhBaoWQUjPHbWib5GKffD797fd1LMA6MJcbZGJ7cMDpn",
  "key14": "Hx7r3bxbYZjZ3FoJ2yhe9RoedfHRqb6jmoc55mEFsp8GNv6zzpAuJwg1iPazVPoPnYG4DFfQuaEfAFv2SKG6Rsg",
  "key15": "dLw5Lzrf7hHW7xShjZNxAcFUPxYg7MYtNpgXShMmrvuuSodk1yJ6pqt2iEFynnUD5omv1pqQ1KhHN3xPL9pcLfB",
  "key16": "5ZVDEDpuyt9qiGuzD9B3gLyA68AuhdUcxm67bR1shuAEbManWFtfTRAuX1nvtpo3q4ySAyM8zuXTEHk3PodyXpBE",
  "key17": "4EoWYiZizyech5frqv9ue1pAHQF4sUQGjdCEHiWv3okk8zX7r4M9DxA8uVpPk6PJdt78D5qrby1LWV9kXXkhRrTg",
  "key18": "4oWfZ8GEF1EfZtfnQDCFbXZadHmAaDrzko1aEJPPRvjgopGpZfrYwQjSJysGjs9kFppYapu5gt1BCks4FMh581JF",
  "key19": "2XM7v3aVPh7Vgj343bxu2L35fG55pMQ4ynBEo1QCunkSVwJmK7qRzN58FQHZzFnRGjHEMh1RtiFn29snhty4W8mh",
  "key20": "2amGhjv4xBa2wqeDKVF74W2J4UoxHB8GEp15DG3Jj7fn8PzhJLjW1oC76pETrthC9Yhrz4hhqPZ6Cy4Zyg9MSrpe",
  "key21": "4VArnujzrj8wJdTL1s52BgBiuWkE2f7s1cYao3dyrDUWjJVbe2jjieDN7jyJccju6E2zqH68B7ge6ZSkCHF6HHPv",
  "key22": "mFdeNgrtzTN8e1tBE62PeL4s62uu543hcDnNck9xdBn97JA9nN83JYjnFUg57pufKXoj4cicj7Qi7oVCfijENRk",
  "key23": "2o3GX16ZTkMC3MT3CeaJQW1dA24EQQrZeV6deFeouR5zk97XKQhCqehRVt4B7X1MrBXpC9h1XwV3eZsv8X9eFHn2",
  "key24": "5DW9P5mAdbp8ytsYN6SnBZ7THihsk4NaFb6Z8BBgXAkQmGKokuAyZMt5zSTBxFZPyuDvQbssYB4JGqK2YcGxb6b9",
  "key25": "4dZt8xQaghuBwSCVgiptpQZ4ebQgdyAMXNcEM64EaeMaXQEJkKiLfBKF9bekjrDYSoaqjUsd9zSvc5aDLdGjH3Qn",
  "key26": "2EdpX9WuHrYUFPbX1yqANheBaC3cKfKieQXko7gQxWgcUPPRezkMWmmt1P1yewNbLDhzv2qVuZRXeSjjhW3qcE1h",
  "key27": "2iP8QyFNWabGNrs9gg4HzEm9khkoDpTGTEKzKjnU6FvrnfKKvGc6CpaPk8HxriyNqaFd4HJwRAan2RUcy6w7jeSq",
  "key28": "ZEcCcxQo4wdxdepNsHyPB7qtLxn6D5bv76nRpWd2r4UPLZ17U6SqSV4BtrusCrSj2JG3EzFJ1r4nczh5DBJpvNj",
  "key29": "3YESUHvTFSpxZWqDRtzGm9CvnY4Zr2YYAqvFmojs73SbfNhg8Xhm4Lxaw8bWGXZqAdnUAKmKJwH5g6y2oui5dLqg",
  "key30": "3jazQ5f4HLXUVNMXNASStW29WsewWTQMemQicsF4QDkUrQTgF4PimWXV4EcQ9UXjUZE7bHvEaCUXZo3rH2pHSjPD",
  "key31": "5EmzK4UKa7DVM9QtgXaoYhQ4qTpJZoX3DNxsy7ttPk9v3qEz6YU7NyD3MRjCzuMgvh7pHn21PUyMrPwGmNDF5oPy",
  "key32": "3JjCn9mC6se8muNHY1sjfbaRoTJFCExkfvu9CdQFUKKPRr6bPWBM2TftEUHpjxGyWxoU92JX9MP6D1wJfSygYzhx",
  "key33": "4VHEAJp5ezoLe8Fy1otgj6tBNf9QeTPJ5rYtdf1JzRaTAbdLjQaVhk5Nm23yqr2cGc58QhSi86ToSQrkK8gR81Ht",
  "key34": "4FofdMS2eCpmQr3EJCWyXRPnFWJsDqMBTdy2n7U14wgfCcCyXB7aoHqw5WhtEShWcL1uJjihBBX9C5nC3a95x7Bq",
  "key35": "5C2ZaPi6GBX4N49xytvsfa1kef5wTKJwfQYXCB2ztv1S3QcT88y8E97YMvSTDqepUjQqW9J6bWRMBh25ggLZJsK",
  "key36": "3FrPDMJW1TVxvBZMDCxZSJL45RLZNsJ2RwyhA6sosNAgq7wwefpkz7wFsZvBWhkvgbsG4EAvQBVKGaNEKG6cYc1y",
  "key37": "4Y3CAGEfmovUiZQ1V1KtW6pYW3xkFypU1xNNSRbXzGa4rMn61wKSUgcgS57fFke1RPoMwHSK2G76QcPpsqtjK7fM",
  "key38": "3NH54dKw53PEBeh4pHaLSjET4EuNAyoFweuuQoSHPL5Ez3dP9Ewu9QHh6EZLzJJJRPaJe6hzTa1ovRB7Nwpj7q6g",
  "key39": "4qxbSWwp3bdtmSoSy2UVvg2H7uqwGM6j2BkkwnmsamhmiPVeDtcqEi4aGtRf4tbsv7L4Qw8Lxi2aKadRCRvq2SdZ"
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
