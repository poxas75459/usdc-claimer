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
    "4QUCsDvfXbJh8cYo25icJDkwtN8s8tLK3AzYvqSGxELs4JMaPnCSiFnERYFaTV7c1Rno9YKMVip12RjtjsKYKPpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYmhHK94eyf8FGUUww6tpdX8DhZ7tCnmPgP9Tcea3Df8kwvcowjy1ZUVRR2TZCySCtYcZ6iiuvedrtR1Ms75ujD",
  "key1": "2oZBCv3zxQHKBp3a8GppZxjdyAv9T21kSV7ZUeJkFLpS4TS3JyDCRSUPzKooCcY4CGf4ptDDoNKYaHaASpdnePRb",
  "key2": "4qQaXoS9Q8Z4MHzEeQfeZR18RAo3cn7MgmLceAucjjfB9o4YcpPFGSRnMMBthdPZVYLv73XivHKpAJ8PsXNh5a4t",
  "key3": "Gu2Jhu7ip9GyNTTqNvTcwgj6rTEbGL6dZbdJjTZqikxkDPR4FRWYyoPAD14xJCizx7qbKWh38u9evqW63AyZUE3",
  "key4": "5TYUdN7xzmYfNuQU1o4pMyfFCpFDFa7sf3TYKWc7CZH3pAb5uvq48vRa8zoRXQxiCFUo3ngvPHyVbbd4N8GbtxfK",
  "key5": "4nsWAZ4gcVdyZctHi2TXE4U9JAXv9LWiBf4zeY3gbuVMntsLiNeCod1Gkh9pZimqcyEBcC8fM76BkeThfxJUj3dD",
  "key6": "3po2x71rMgnU8QeYyPVTHez9mJgQxwSog9zNgJzVMxBts9UWwiKcxfrpQSk9fyvJFY2YarshmQNMJ9RSrhndeA9T",
  "key7": "59gnfEg9YL47CwPHRSfX69oMigzXrPSGNNm2YJVQsCUj9YEvNdkmpUvwVgEPSnMK3nFgWhjFJ61h67pNYttNQH2q",
  "key8": "LvHUG1zxVL2NsTpTtw91WwhCpFTkBh9jwqGShNy64xDwE2exjkRKt2aLK2JoVR5Sw5Wj8KbXWhwoteRQrhdD3Je",
  "key9": "4byLKYGhXd9LskPmUrHVHFVBJA6B7sL6xRVbWUx5ev6e3kHgUa3a8VkCiw9EL8tqXsGLkgPVHRj6JSge6MZCKGhc",
  "key10": "44h5gELwvwGJhLdhb4i74GK23Vo9oWpHCeSouiyFug9aTQnm7kFL5nHeDUkHr9uHYdCQRodD9HxVztT1FrQ6ohvu",
  "key11": "4QAo8F7HyHxW5ebKKFVbG7SBxuct2TR3Uq9LfkNQNyXLRLFHB8MooZTDnVHHzZdJa34beWtgw7Bh7zoHTcH1BzJn",
  "key12": "5fbf5t97N7eY7X4ehLPTqd7TdaU3PFwRqsqLscSzNMa5zBTvFeSbLqi9rGgRox1PSS5oVY633oZvEbSCmVHLgwN8",
  "key13": "3wkdRo1AsyhG8oqqiZ7jXSC7PBD2FPWbbAh6m6f5jVZBw4cmewJoKgNXotK1VxoyxXGi6iu1FrvaFRiHb76YpXRY",
  "key14": "2CzaEiM57bEVFi66nQkoVkkdYhgXwodgbdovoFhcvPyKrsnh4zCG7tNyAVGEunhJBG8UijWXjo23hycarU3Yg3Mp",
  "key15": "5RaQyEwNhUw9utMw56fqA76xGw7G5nguMNuFCw2uNNdhSHpBtcthjg6oGGkiyw6bnkxdTTufMHCeSzbfr6GxUHdU",
  "key16": "5B5RrFbM9cm1D2wF3QGXzAg6Uxd8S9btSHjTWoPkqsftoA9hGmDAqdTeRmrvSn5ypVDSmmirdyDh4Q2dcrQw4y3i",
  "key17": "3HHUpjCXHwF9bzFDww8jcP8WiGZCMELsX7cVgM4k2h8wMGtqurMHSn73zXBWLk7SqeifWuMdjaV2iPLaoD6ctBYY",
  "key18": "2GAGC6y4mf6VqsKSSxAKjcfT2xtLDbhP8Uvcd2VMNcgyK9VVXbDQRsKKJx9S7Lpxi66mMw7xsnnAGTu1jqQrLnvZ",
  "key19": "5GyeQB74bcMdR3L4RSoPpN8TtKfpzxXY9mB6nb6KTQJQyHNDBL9pR2ya6HfTVmcywyg9dkHnRi1ci8fw83gfURai",
  "key20": "26D6ubewLfbfMr7e861hjG2qoMXy1wqxkGqN51X6ZsiMowuUmLsQ9y1furycmV6dLwk6ZYkKso4oejeEJ8sjNEHz",
  "key21": "tuZoNUUwwRm42BPT6NL3kPvAKjxkn3nyUk4AX7jsHFV67CAw7Kgb1WjWDJzEB3yGeninco8o2BYwSA5JEnZUbfD",
  "key22": "3Q7rz6Gv9PmukksLSfbRK18Ft6AUTMsV9XBvNKZcUKqMCCgbHTN83qajDmLTC13HZfj2Kx3d2jZ9iy1nDn3yMsyF",
  "key23": "yaecTwB4fp9dsWKn118qBdBw8nxs6QjrxH5z3UyGcPse7on7G4PrMFMmaaXmeKNm3rxueCy1VXouCadWvR4aGJ1",
  "key24": "225vpS9at4oU6GioBNwwDCq1DEV9DZ3p2SBvwsTRuk4i7fqB1RhdpRvsXqzpNiTVzE2jKZR3uDyWXwnKyGZwNg5L"
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
