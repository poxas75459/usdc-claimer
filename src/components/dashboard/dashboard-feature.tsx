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
    "5TQixq15wnRmnfM1qi48uuQ1zsRU1x4dawiXzjiC1VfZPvr5v2JXHjmFNPEvRwN3jnVB91DNJDcZcZ2wXaYUbJqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61GnwSfMxyRXHWvbXNFJ1Z1UtqrQD3W1psEbn15G7XGC2SitMRRhmhiLXf4NtFpTFYx2SWcqQWfbmzfNWv4DgxTK",
  "key1": "5r1gpZxqXbHd6RUvLGbV8kREuf5jTrL9gDNe2RWwxGjoTZeS7h1FLUzjLpVYe9PmnHvcCp3gNLmPmcPZiVtud6vi",
  "key2": "M3mkX6gfW1j5cPTZWsPQGgDhsrBQWukmQxtYYTK5Gc7WCUYa16GjNs8284haTMUrmaT7BMxuLMW9maxFckgHhgX",
  "key3": "5JQoShBFfcuRRf3iq1CvpMeUSDGeuBbr4GmSUSGaWdniXfcnyRVsLp46hBxTXVPnXVSHdt6KmpttqS3NRfVHPYVC",
  "key4": "vcANfp1gLqThT3UsqXDDqUKUiECrWTw2Je236YVRJ53LpU5jW5DyYBKpQm8ZRpT4NaHkKnNQb6Y7ZESuzdUEdJ6",
  "key5": "5tdSk33oh8UM7d83ZjQAWUbzsUeY3h1EkPL2RoxJBuRiHbTnAbRdViHhMbX4in5kmcEwg5vt1ueRvvJE5WQ4cqo",
  "key6": "3T9udJ5YSRGTGg4sjLsHP6fU9jb4JWBGRNwiFaxpZa6qBVHPeH87ygSM1uFK1Rnbv2bu7v7EjBPuxXkLAnKmiqxP",
  "key7": "3aLk9J7W8LztdRyiuDuQC97r2ZWPU4nbW5i13xK4D1826coSSCMDjVenqKVWQzJ9gAmNYnzmxtYkuMaF9JgV7oFF",
  "key8": "6rnTNkbesGDkFFFLM27eXWKnVnr3GTRPBf6HfZR4hmhYyspYSxUw9bMTPfMWZK4rKQZ7wrZPz45gYNcWcFgSmYJ",
  "key9": "4YAJMPFhmjGpWcw9fTSvxKfcaEQUBB1N9HGx7FwsT2XbrVHHwG3EGQNaDyYGnm6RLJG1S2fCyj97xWSuhTB8FaaF",
  "key10": "44BeiTbwj8NjLf9uSGsQ93P328dzxC3ZMkrV7rLCAe5mkHL5YhqSqaGzrHYm5e7R7qmEeLkRW9JekgGFPLiRHNjG",
  "key11": "2uRc8NbqYKhWjmRk9AoLLmBFXuebMdsgK4UJ9n6P3ihRGYYCj7WnaLwBVJyJmeRJQymVhUyX5sTScBJ7B8131bRK",
  "key12": "22wsYMBGF29QcnW6u2VeiTQ9SsPvWM1AP7TsaCSR3WiknnoKjFGq1N5HSpaZjo5rGiYnEr2ZtQTU9AqkxmgWFEuq",
  "key13": "5gNmEfUwfu7s5ftt8m9RwRWiejKSj39TrkbhYL1SXbYmts7Ht1mv7NjJnSZHvktXETBbEZxRgEYhoh7DVFg8CJ9z",
  "key14": "5o1AVA1b3ZKNUBEAY1XYG5PzRmJXn3VmTYYCZqxVJx8vqXjAdtVnY5wjN3QUWBRwdgAsjyTFXeQTwwAoqwq4p4ps",
  "key15": "2RPz7MFFPWiVReg3PzzttGAuY4t64XZs1NctCmq6Nfqww8CuQuxbr9fgK3UMg8gAEK1uAK9gJEWMQ9M6ZpHuzb22",
  "key16": "5mFkJY4EkHr8HNKdZq7scawmoQCJsmFMreD5nAsfKf2YDzCNxCLvv4zB9eA47LbGdsXLzCGCUFzy7HRnFvPasas5",
  "key17": "4VzghUXT6WtNDM7Ff1h8iPxHe2HqReE1nkxuJTNgy9BoMmdfQEz24QFBfWQ9hgjrp2DQuAnBqXMgk7zKqyaW5MjK",
  "key18": "4ExuRhebuCWjPVLTDZRG2ZjKSahCzg7qUt7taNdFnTbKXocdEwRwKWEdHy5VVS1fZYgYCZx7QsCm89pPYbVAF6ut",
  "key19": "2Aber8yVq3AtmKNFt4Mb9Y1oeshjn1iR339MhM8giSUeKf8CEvkxHUZCWZsW8LrwF3xv5ZnCK9yKzjZg87hfbogP",
  "key20": "QNqw4d1t3uR7ym6vp4sb8KDNJkZWnZVmJqC1pKSixW97N8mGSRodp7zjrWhR5zPdAjq4hfLoam3VNLv4G6uinX9",
  "key21": "vt9vBYMcn9tVmHZxVv8ZWuJfFWLxHLEcgb2sH6BbxMzSpwj12JWwuBeLfHRW9t6yj1fgAkq6vvThwDhvNxvjh35",
  "key22": "5EtC4G5Q4AnggabE8ME2CWfm6QKb1uMDGBawd2Y164vShaii1qEniFBG43wYgrZwce7Y6Eq696E7p3WECgzruTxg",
  "key23": "4fWCodA9p4YxApB4im5pjq6ACo26uuM1quwiabZVq19eojLQ7wwEd2GxhyW474JBem5jsosY6qmsPoEsUoyzMfri",
  "key24": "2ocCSAeqv1tmv11k4TvicSY6G27AQ6mRz8NrPfsNgzVWnCyzthXQws3pz9FLyTz7hz9fg58xCbFVmW6fAvxxQkiU"
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
