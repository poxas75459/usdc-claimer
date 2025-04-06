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
    "5pPPiD6mYhjuDogFWbAvsNh9QLWBZX4Gt6EpyFDDe7vCJUreZQzhtv4SXNae5BjG2ua1ULoSdv6P3ZMkA9872ogq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NzFMTVtziA3jgA3PcLnCTiXr8bZJ4J4XGXK2XphuGDfvBKdeQ4dEv32ANFhQL2iYgSHtWRpU9BiRSLhSMi7xLUg",
  "key1": "5hyqvdsEuha51Y8J4ipNU2njKqTzJ98ZQDgAdXyTvX46ZiVrHvrGdPWPrDfRwHiqdMvmCXrYJSjXcBxuYfyeR6fQ",
  "key2": "F1McEkxjuskqZn2W2mB6P8w3k4hcR99v3oiirMP6Hc45GRLePYRkwXZULEohW6xD1Dv5QJwVc5Lnn6kvvJWTuQ2",
  "key3": "2evVrtDN5JbcViANWG1TURvZ1KvvQPU6Szrew7zL8ds4TeRYHhAPaCv8zwMpKdi8CRZH8CwB7jRA2Vs7Cb9XqtKt",
  "key4": "2Ldnu9nTg7uihpqSq3J9irs6nrJxz1NVRBDyPZWjbYaUnCDmkREdtqBHwHQecpQ6tL4mLvoVgKBMMC2W4Eztiis6",
  "key5": "5yLhNDwiw1Pv2DUaS9EkYTVjK45XceVFvyEsMBVuf5MqJzUk3kct9HAdPFpZ8ZWAyQkWWuw5Zz2Zn2yyc94oiv2X",
  "key6": "2NzzmLMwFhohCwmF9XVLctciZjxgWtpcV8rGoTtQH9R43tV6PCDaF4PgngZideJnnwh7ATVsrkgYqadf3jgfAP9P",
  "key7": "2rAzeXsPMnSLe8HRX1Twax8k5Ak9vNmmKEhtGKMUEyFhaGzHsEJ26qXWeS2SwpRKfgsuwwNYpAoA14VyPGKQC2wj",
  "key8": "JkhzzPA7JMN6eTP1PEYeDWsgKK9xPUqJLoyuNrxLMtC7sDHoGwPdauL77hVUZqD2Vd7HFSNxzSEb9wdg1aYdnRx",
  "key9": "3GUHsfeL4Am7tBMacvYWPffU5FkfPW9q8eNoif7ra6MdzAA15dAu1toQhvyQr497zJi5pZPk5nhLjGJGWfUYSJoA",
  "key10": "4o5rma9Cvz828fcQNtNR1zAtykX95qVcPqmsWgutsgun8yZX6SGGBqp2XtHcUnmLtCHa4e9jUfy6A6Q2ekfx4ZG1",
  "key11": "4UZFSALkr4CqytXThE2MLnvGZ3UHbahCmLh4ZtRG184Jb89bJAK6DadeuKS7r4y64ffbqUGqEU7kLYXBMdWrqNJb",
  "key12": "3Gj7cXoT1dR6E254twPCcRj8wXnzcQnpforyVR2koe72XQEKuuJfeuJag6V82LXxFeKaN8TNYnz3bHgSa3LkCtny",
  "key13": "3fAMMDNUbs9RvDiPorDutGL4uX5aFyARqBQgT8B8MdfWzjiKKbMUUNJFkJMNxZS5B8qqhqnPGf2XU2AZYU5yk7Fr",
  "key14": "fCGQSf8knYbnGSSsk7DoK8h9ZGR6z1bqPZ2TUfZGiPRttdcapteheFMzyy9XCvqEw3zRoBBCBVsToQAQ6CWjCn3",
  "key15": "5zGWn4WAGuKbobQoxTRkA5kcRRvEAhVj3tVhKVMmquibgTUW1Gd6bEtn34k6jfuU19b84E9MddB5tMQLPFuu1d5Y",
  "key16": "2GZKWPF8SngbyFtqeFZvdCnEd8shQSLsd449dgUUgCGX5qSeasiwMW2QhcNihLJkgPVhEhV7WgnKYig6fCnvZevg",
  "key17": "3p9op3dpXiWLAAKDp6uAPkrsgKHD3Pmd1pusaFP2PAqGBaHRM9dLtzZ1gDDNub6kRpCLbZaWK55RCnhdfTSNFHn7",
  "key18": "3ARZ8ncKNof3pmtk6QUUxtkhDBiRj14CysayvXCsYApAWUJVaZwFkTYRC585371ZXPtHCpCkD4Km9jmDNeHH8hbg",
  "key19": "2rH4iwfSkgwkt2kthMpPUXjeii2DAEAvA1pUxbxfLXPkCNC7KqFLSLLvmotpY8R3oYsxJx88PGJmfL3TZWWLKNeo",
  "key20": "5F4YyHXdY3MsiXRkWkyhNpuYRzQHtz53rMToUaaLCe2znvvkju5TxtPRbu4ZoFVM1vNUQqRw2mj7LRHLrJksJUDg",
  "key21": "3ggXqeXt2sL6yk735RjKqvikBP5nSYaTcEEWGyFYisEeTuaQ4piQJGYH3LAxqv38eeRN2TMoZ8q5fRnkLhvvUTTq",
  "key22": "93WdCi6NQPHLSawzhNVkHCZfFxS78JHrrpfnWb9VKRCh5QMEQMZtfMbJTG1JzexAnoU2QwMeq5x5H77Ysj1ygRM",
  "key23": "5v3ZpBdqn4qP5pPADCPiKxcGu9kDMhvKknKB1KxvUFPyizLZsxmjVQPxcQrnYaaZrsw35bit9fWLxqTJz4MqYqUy",
  "key24": "498uydspWxRZkeMRrzkR1GsUjrpGKQnPHmgcLRPy9paPcri2uBH46C69TMoAgJg8LzTTzAgoZB9ybEdd7eDztygk"
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
