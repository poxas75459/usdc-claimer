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
    "53eZL8HqfvEYLQNYg9Uty3SBGVkHXMohJYaSnfk4H9uiVuoeoC1QUvNUypuWqAkVCXMTjQrtpiMbnw6swpL5dpoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTXVR8DNWuZ4o2bVgh6ANioWtysKMnBPVMRE2eSp3S9sGGKyUM317AJ574YFpzQpp1GSKnwsaGUbFu2JvxDjnDZ",
  "key1": "n5GKuGdxrZLkpHSf2CMhnDUtKF74ReGo81MW7q3TgptHsM8hMiQtE27FULbWXeeuKHgRM7esDWUb3ikXYGdYqNQ",
  "key2": "2mecbpRF7GzLfa7wXqWFC41ep2ZeoAbRK1TVZxcyXVP8Use1nDrP3wvMwRVM1A6Zpn3bsm81Sq6dTotY8jdDcoCe",
  "key3": "3WyVBeg5NJ6Ncw68NLobjSNS6DBEoJq91bk9V4sfgVWWyhXK22UFefbH874ddS59ovdeGTxEcZJZu8QULgTviDJ7",
  "key4": "3P4Z5MF3YLTSKFgYDGQu7qgAnaAxbt8WqJmC8sgrkJuyBidBh7kFdtuBgwKVK6Z8KQU6T4bPCG4RaobzaLgCyRt6",
  "key5": "3DqutCZmTEuqsGFLHC3yXk1JLmiAMqnrUy8bmhxmmLpVdvSUoftefWrVbviQiS8TPmxwDDbQctLyFUQv6V1TdPbQ",
  "key6": "5msJWFCMbqzQJJW6ri9coFuUnAy9qcLyuwwQa249LdqGHF6ZtSyzya3sNdR9vWnXyuVQ43WSYpJggr7e32ZQtWoE",
  "key7": "3QhMqwoy4kHPZos7w6Ev7m92ZMQSxCfrWt1B7Zd8gM39Zmar7aTvFgDjpD93PeK8WHWwAWaSkzVJKiovGUi8WxJU",
  "key8": "4jkTkRAKBByUxojqUyTXCULAekpi3npofjC5xWnBmvmo6HEGiYJrFKrhFu8KugYN14qHeYy4aatHXAaHHBiZvKYJ",
  "key9": "5dm8z5HtP4SYqsM3S3gM1vgQ6ftshTRosZPopYUiZn4GbQt6bhZr13KGFdR9WM9q9eGoWaqVubaZiT46qQqFERYz",
  "key10": "5wwKh7MmtZmnv7E8oHekHmcShxNNfKKuYk7i1nqbEh1mHkhXBGQE4b81vFdtWbTFXcSgbZ3TbpLp4LYvoPHQG2vu",
  "key11": "Hw9MC8svWS1C4sqG9o4SVGSX5XhyXVV9DCR39ySh5juvL8WURXwQDzMctqmgELytt114xWbjrTfqxAma1JXVHX3",
  "key12": "mX7i5hCCqLHx8m2r2JSoiqeHUbJfkgNfjMmsnmfNu2WxXHikSvfN4bwjAdioZzTPEMLVszqsNRsNw8FL377ENLB",
  "key13": "4DhWt14djLqvLiWXWpEmsXQHJ9cpL6wWUdBHzq8oyShFsd9pbdDb5MGj5kYe2FU4WRm5GWyGaEpxs4cuDZYxKtwt",
  "key14": "5FWS3HoBHi8w1mXWBLSmyuLQKxuGKHsrMeu1w8YGZvxWxLVrU6ivkcefXfF2iUgxyn3EEXre492a9WQtcieETjyo",
  "key15": "29mWZYhiJEsVKzmNGkvXZRYSzHoxy4qaBJsrkL2qpM2CCyFQbrghSZvZKEQ36yu4cSUaC11CbtmkoBBrpYrMkncG",
  "key16": "3UoFY24pGo1eSN7paZK77LzJ4UWvTRXi2gQHkhkep1yaY4kMpBcoKLkqPuTCLvNF7gH3B9LM7R3yAkZQfXwZ6CTL",
  "key17": "nE8tVq8vE6o5agZ7PxcX26qMofbVWuGg9sP3CRMydK4izkHF73Qsm7f6tX8jzfE7CRxfSAuJZGk1xci2pkEGgSB",
  "key18": "ARQFtoo3FeTqptrZntRWrHPaKkk15o2PJ5PLSCfCrvkLU48MRHw5N7nedvuaoQp4mY6DpqazrychFE4pNxQp8TN",
  "key19": "r2WUDxxYMxYKqbjzLfvt5JtrXtmN9CoFV5jsTcn6gjoiyCtGidWKdUQTFYLezd58iewQSpC8MK3k5n6uCWGpioD",
  "key20": "2BHw8irgWh7bihREbWtveZVfF9YqqNiYKxvRqmhwq53Hjahnckn5QavALksng4dduvJLbvcsdQKSxES3UXTAgYtV",
  "key21": "5e7x6NcYPYc7eC5XyKBkB29ar9fZ5SBUzTAqCFDKkFHB8wCRfhT3U1bmhu8WKdDqD2FyKhTb4xJpLBf2snxxmZF4",
  "key22": "2eMfcNDvcSTqwjAus9F5wEJfpf5N2F4DpXGZaC9FDVZHj5B7E3fbvfwQYbkjyobuX8sd9Hcr9zkz31ZvmnyD3zed",
  "key23": "3gTxrMwuRjtSvcdQbdC5L9z4sPTpcBJeVJofPVEMjPFUN3kxyfRnWNNtS4kXkhxPnTGMiB8fjjo7yVTLFTUR7eRg",
  "key24": "2srug7zQDJH5NGNNcrJqkiMeA5MTzRqc9LvxiNgr3vfNedFiYhxWDiWD8WKkZR6HrMe75iaWtGAxGDQhYkWWpjaS",
  "key25": "jB7xLwpGKwQ42DdYkNMnAJ7txzH5xmfCZwM9ThcaYLV5Evj8Rb1hi9FJJqzq6TcGN6tnCwt2acjbfZCHy9dAiyy",
  "key26": "m7ihtpDh2JAqBnH6kN3CrjGy2xjTqM8hA4nNFw3xvm32BJQvXJc1sy9Xa6sKH93dqdHFo1h34a5uXdvxwuLc6u7",
  "key27": "2RLhYzMPjfPia4NbgLQqFAcZfkb9XgGJtTLmYKNHqgaAbqBgLRNSc4P4tMLNFHyrgYfahG1km5GfKtZwjxWk6bcP"
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
