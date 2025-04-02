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
    "24Hfa15CeMw8Mm53XoJBmD4fcBNcgkYdhcwSap9ooxhFGzHmTMjHupBWF9XVRRMrsZbcRejGc6PF3dR3a96nDgUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41B488Sng3ZNdvQs7uYcFWJsxL8oKCUqEV2LS2U2z54S8LKJJP6onEsC8MUe2Fr3nYdvmciBFjuzYTKLJjvfb94C",
  "key1": "3hsfDonhAbArpwU1qCSx4EpcQ8wXJBLpa72rEoZbC3n6QAyazL2Jo2ckw6whTgaGGeiyELhkxYyuZwjgHC1rtFiB",
  "key2": "3veS45FVfBE62qeuRxmQKYg2i2TWsd72XSQh3WQ5bJG6XighhydkLdbYkhToSvnoeTasDJAesf5vVJDxPL5MuSxn",
  "key3": "w1W99dStJLSPX3USxGW5S5nWJPkq3VvFuBxoLypiMKsm6XhpfJUZaacCqafkj75KZmbbUNcjzeWYuP6M6SFZyti",
  "key4": "3uAYWmvwnDT51mDX5K6UKZCSejjpcSouD7NzectaV8mbyNwDfgaLcAn5tx4WvDWXP7cgQCPHRwhmA1n4Jh5WxvWh",
  "key5": "4xVSSwG2oJXcw4mUfPDAeomUMFuQaLvRZZZNs1bnyiGwHB2tLKKUW9MRXE2ZjkkiMUM5XBRfGLqLX4Raa7AvSvcx",
  "key6": "3aQswDsbjvGG1cMis28ZjhdkUAp9Hcu4uhuCMPF1NxNs2LquEQ6bPkgPy1DkAXqtZX8BCkkddTHo6257iRon7Xr9",
  "key7": "5Q2kFAk4ZsJjkGFMEpWKBfUEm2x9u8Et1oy85ct2uCnE4UNBoJjxXme34Pf1q9Y2i48tgZNjbnZGAqa4rT3sznSR",
  "key8": "ao33uXYGWjkmfPhtAThV5vxUCFu1DS7bGh5VbRtAzz4aK52Zx3NQnR85RN44qs49KaJKPqQDLPqjdcZvUC43apH",
  "key9": "HMksK1zA6CgvaybtC5DbnKFYVzzAHaeEYTBMd7S8Jrnq9tMAm5X6yVkoyX4BhAG3oJqmSQ5b9eJFc5wKt6jA1dA",
  "key10": "2h91iZeR754KbE8tJZ1oqBR2CkUTStndbSmQtKdFimPVyDWLAuPiBfbSPrHuFA5LNaLc5hxoH9m4kDwAZYEoSSbn",
  "key11": "3szyf31An9k27BzFxUfxKYFJJZtLNrpcqAxxw1UsmSZJaJn3YdjKiDHnLEbYtbq3aUtKcRJH7u5zUw9kXMK8eGa7",
  "key12": "5LPLcLjHpvLuybbBuUoCrVvQwmbQDk2hfVoN9pcoRrcDQZ3EyeXJjM2Y4az16zFfM6hq8zktMz6ez8WctuxnhBkQ",
  "key13": "2FiM2jzLoWY7sKhcQzdh3K2rMfjhLMsATrFBXsKy2mjtQ67fFVWYV1aQa2QtBiseS3XHzAigtmXWCBTWNSdMpz4M",
  "key14": "4fWebt1eRmq5PtraHJavLpP3gXLLU5K9ck9GxaEpUQr5aTRbCjDgQnwqzmBhzz7DqmcmUJrrEqaYUSZKAJhgx9TN",
  "key15": "42HRjCE6LPY4sweUkkXsYCCk5Xs16fzdrbdYigthErBXxn5Sbe5t335fW71Wrt9JaG9W5XuENYiBZuhNrv2xo3gR",
  "key16": "yYLwNRYA9jCj7QSJDMJtkNis8dQTuCcBrVQALfvNd2sd1JbcBGXm8pzQH2svc5qh6pyZ1xDUXMnsyf5HYHuHWD9",
  "key17": "65DrJ1z2phsdZaSUDj9sDSre5Qvd1QJRcTs32tpwZeE417U1M1uC1obXhpVDneq7grg3GV5J5MpK4JHANt3qMMEk",
  "key18": "aBxgM2z7TowaNci6mb1fjAqFkaJCXW3Mn5xgLqEYKV6Mh4N2JsgjLMwUPqzP7aad6zCzr6cYjcXwkpQLgzrVNPh",
  "key19": "54ymP4ef9R5QuaPKGUemGFdjwnh8CWiJZJggDTNqSZ9w1GoeiQRfVdZ3P4AP7mEjaSkGVkpWuz6mmMmVR3yoVZEm",
  "key20": "3Q8gow7hDhDutq5H6DQ4DgDEoZQUzoqdsHRUn2k5mZVtuiue6v11ibYawFWGfr5RAafc7CN1C6g5PLsL7P3gbbyP",
  "key21": "468TuDL958roFKmkz12RHp95BeALFJHBCiQLUimbekgQcgEj8XeM2mVYCEzQzoR3d1gHjjBDX74piWbLe1AYXbvq",
  "key22": "3GfosokvKoMedyeuSvvP96c615aGFRdt6xwc7J3tXwgWPNZQYtY3VyKp2xE8ZcCRyyVC1xusARmcwaGQMtKF381R",
  "key23": "5hfSdA5LP4ZurPKNbTrAudVdDVMdxmKaVdFBuDDE714ZWTxB6cAcCWzYv7yiRaanQpXt3FmiZ6PLCuvsvCFSKLha",
  "key24": "4adwzrK2HcWY9MuYFhDkY51Cp9KXd1zw1G5oTNijxNaNrZQy9Qtsvk53Wfak6PBNR87qW4o7hdXNyWApEnpHMfmQ",
  "key25": "62KquXS4h3ZN973rJugraWYpvincNoToUPGyoEtjvJH62hW9FUXnbpG93oYzFGYqxoTLVhfRA4m9iBqg2UBxnYa3",
  "key26": "54m1u7enCdgwUw5MxhEL7FwU4nyKig2eRWAUA9QDCKoWHzS3ZeD6BfCjtfZASPH2hwYMzfULKmzZjn7vLKadMU8k",
  "key27": "3MyxkV9wdDcqGmHNNkVbnTpWXzMButuLfs5KA2bcawf8UM8BZnSL4JbcMNGnNajKV3TLy7EEooyww5wbwgQkEDmB",
  "key28": "5krcsLQatwHCzGA88HGumfzJ9HqvxnbbAtTfZ2v9SG7mvpdVrsVkpqemfAzrpDKTffbacKumrvPKRQBqe2BsuEcu",
  "key29": "GvdCPZKkXsk2Vh2J2NvVKnEaS7JPRZ9EP1rhDv8CtQzoWyk6AzYofSsdDmFt3bjG5prwG7WLL5qghqUQczjN6pf",
  "key30": "4TcH1qzWejh2L5VEke9N7w5jauRFLEdgfPShXVayaT6nSPbRKJpBDE9hHaJeRPTjEJC41K48z9GuiN7MpiqrShts"
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
