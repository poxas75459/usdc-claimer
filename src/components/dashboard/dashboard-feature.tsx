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
    "54eRxe15HrR1CtFbWU7QY5XxHmLwJWJNxohqrR1GFTUVzCeemoBpQVsrkFi1d8SN2anrqD57yA9hhZ86YGJ1XYVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRxWgaJCUrWWZCkzXhkUEkpZoB5dKcFGUcUswfjvCginhMZm2dsrYy6JZ6QQ6wspV5eF2A5FnWKidLPMGGb6YfY",
  "key1": "5KwZ4SDyJDTPp1Dj7434uT5TNHZq9ahGP6XFJa9R6RsvqZAzRpQW5MhmXCDPiQ9aXk4BgrXhwmdiXusWq18gsqEL",
  "key2": "2q5iD3wARCM7qh1rJ1ZxLz2c9LeyRRNjmhBgJ3p9MSReCtZPWKeNEdSQPANQwVpiypbbEDdbhiXQso9JW7wXwX62",
  "key3": "64B273pSmwoH5CmQP9LNK1NaD7voF512LwrLNZ3Zd1DgT27tamnCqQchXG2nxiQgQda8dZPmXk5qN6X5u85CdYwD",
  "key4": "4WRzxADk6ftLU2S186fuBHT6dw3AQTVpH3g42MjCTpT7ckTeUd9cM7tyTW6UAU82D4h6bkjKxAshjJ77dhJW4X8",
  "key5": "5puKG7p4fzBaGRfuC3Z7YSXZmTXzDpVKKxtZn38ET8VnaDsW5HFL5YYVrgYa3GWALeQtj2J7z8e6Vx6bKabShK6o",
  "key6": "5StuAnrhHjxjSLrbX4kTdirkTbWm29LQbdHwhN3pU3dvKQDtGoib5vgXfa3j6LwG5owXikUNpbJvVdPrSKrqJvKo",
  "key7": "bYEzg9nuFEJ8ddPxJ8ytbV23KhTDjyMEUUiVb8fyJfsbrAdPvAWU5DrVjygtZYfw4eRNEufFszRts1X31QMMY98",
  "key8": "3qJfKj7Qamr4fMJ9qsmxYnjecAsRDxHZBnEWzeBXQKAY3KmuaYqz4Z7uPCmmJ7NkCVyQjGFKoJee5NYQUqfJpbBV",
  "key9": "3uczCdqTkbhs6bwVbkMHpkvFstuShiSBtuusN28gUjoMGj84YdrQDcTp5NUcx1tvGTqvNSwm756dqp3JZVu7DYsJ",
  "key10": "63G5vWKXxaMPj5EJ3FzGdq4C5gQoVA82agCiHRs7kHNkXpVMKHGKYKafGH27THwfodFPFm9RR7eqaPXs9mDJR37p",
  "key11": "5ST2D31jZ86464QCMTgxvHcuxu76xDC1nLk1ugZExR1dzsrpYPLtJKbjr8MrbX4TDQJNmsi4m6Vvrb6t3DMPRbEg",
  "key12": "2ZTd5LRufuehNnX1n2pk9o5Ec8h6qdJs9ijCQrDLCdm8b77wikMZK7tuYGQ6wLRYXgri9rY7Yq6gyZkn215WCG3s",
  "key13": "YUnHT5SnNwxXmnEh9FLMdSrWfwf3mG1UtLShduXNZsiXhvitJcpuAgS8zSukxKhniHsi2uBq3a9GfoHDZ9ng9Vn",
  "key14": "52Af34u95QYX8dgmadEA3yfoKD3LAfumk9HCQ3Jw2TmGueADyH55mfVo1iXN715dcBgbHTkrcbrUPB7bMLdJXYJ1",
  "key15": "5JorB6EccsAzE7otoxtSNGNs2rPDADqcTdkcSYaSLvWnaGMDVgVNrs7ZfXPoj6yoGtBR1Mi7f2BzUB9R8J5rUC1L",
  "key16": "idrsBrq1dAsNKnvnRCqLMVEWYbBJTRp2KDEknENjyzPLDqw4UtE9jxqq3yyrtCNWuVUJ4RygFWcHfCHC6nprmsB",
  "key17": "2PZLKmZYBHTNrmAG1awPvjFNF2bHUdLos6KySmDnmfNFMf1ayR9XFQCDTAvDvAfKFhyPU4WAWNiwdM1wdgoqgqeL",
  "key18": "75EaSrtAL6c9CcPf5HiZhmFt1trWf1Y8ksefiLHDY9SKt14Pr99PnzRZQueCJ8vHbk1VqKaSUu9XnqhJ2ZFCHkj",
  "key19": "4kece5b2Q3NoNHjWFyW64tLTuyLjYRPwbeZfZ6prrvJqXe2jFiUozwjP62PmvUF481Ay55AGKG4mFD6D2D3waJFv",
  "key20": "4XnBJD7SBUD3QS4CciHL3P8FLkfBMsmQNhNDgrrYtsDw17bXdyF3hiqwntRFvzd9qTKtLU7Krjt7W6AXnQaCitqp",
  "key21": "3UiAk9xrRq4Km42A2HyiAJdJsYmnthneMRuMydVVYz4UPBMm6qqsx1nqTjW6wcbJFvTM5zBqxBassUzyjvWaEFkq",
  "key22": "Q4Db8mZsMxiFmTRy86ostRAFwYFkXbHhbZEbE6Xu5t1oueV5kf24DzF6KFZFQEDVmqaoDvusE62amD3JUcZYnCT",
  "key23": "3ApfS1bYrQCZd152ufnfqHFdX62ucjdUNKDcwVk4Qk92ok5vz6S32eMJS4tV4oxT88pSCkk89agt5zw9BwGUMd1r",
  "key24": "5CuQ6LMotNCMw628AkxwyXVabNco37Wwv94r2YeVaWSNhsNProkmFjMgyC1p2CpBADBeCg1hhP9gcdBm6bpNVr8i"
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
