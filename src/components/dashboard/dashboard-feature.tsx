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
    "Lumi8BmnyKofgjgpQoBXkTq58iHmszvpbrsdNvDZibrQMKRadz9SjqJmecCytbc3UrmNszUhdrnFyWSrmevLJxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGo6zqAWiZbMKdLh1DStVqCeHYmU5e9w236afUyq3aiUYgb5K4nRVvsfq4v6hTrX6GuRhtEiPQE5ZZPo9abYufd",
  "key1": "5vnYtg6tw7wmHy74BXpWmNkXLC7gs77SEqGZsNRZdAKk5dJyhJEBZqYR4SWcsZ5jbWw5WeJCxYKXw46rheUGNUJp",
  "key2": "5iSZSVi3mbVfkNiC6LN5HmP7HgHT5SR9EkxrBzWt1ZNqjQKtN4FaFoFCAZfM1mwM8ZDoBjATkDmLjZrBZzWJTdM9",
  "key3": "2kQtUHkCZ9fY64rLEbXkoGDKR2K4bzcb4GWNf4epmWRoXuJJdqpfKdgDHk6K55vDdqFjebihWJDTjqJyL7LFU3Kh",
  "key4": "5MG92zfsDdP1aBKvZ343FrAytVynaackqh1dj1yWkD4c2aMFdkBjAksXHH4WTGD94p3xCHHRie3kJ2CeVcCHYgcR",
  "key5": "2PyQMwdLSGnvBHJ1bH8RjYJb9a81nSMYsNZZ9QFU4o1cDCxFGgiKzz4adRFJStJCt6FkqxXrjPEMx6dqiEHji5NN",
  "key6": "5c1yTTPLx1wMPYwSF14yHzBee1sKbsMrRqwDoa1Vbd6NEtjQ5dxmaCzYcw9EqDFaMsZgraXC5RurF3ddgfsq3ZLg",
  "key7": "mLL57bu4muqYECAnWskXHC93SmGbayYvF2euJ5x7TonMmF8oKfNXAYaWaA5dV4sQaMTX46xyEKw7VitiZg2fXWs",
  "key8": "3VbN4CVooLyHzhmXT9Un6HDRPvkhzUynmfcZJyzTtGgvapxV3PVZU1jBYij11opiAzV1fanFThG4FD8pkY4Tr32F",
  "key9": "4JBUA7tmVjniZyELU3T9G8sPTVBaV63jtk1VEFqjw9c2ESugdpgvrVXcgGa3LX2L44B2JjrgCB5127PCBNhiX5r8",
  "key10": "4LC12VGEjupqMSKaBp5TcsyUoAAVMf4XVNCiZcw4mkBUD7ar8FF7yFurdXQZ3vXWvFq4Eeije7yQYPkwUUBHPzkE",
  "key11": "5MMiUM1g8wzyUyVnmrhPXC3yZWu4YSn9xFg1kyRiLu45d6W2NmC7DoskSAjbdW5dqdLAFp9sh6qYiyVNk1dCdbvG",
  "key12": "66LWjKEt8Ktg91TkXRuxMTA76KDW92zCb5yftvC4VVWJJWSqfTb5N99Kv3aPJKtpvjD8DdYvd7KGfnVmWr6g6xZV",
  "key13": "2NZCrewBJjDW59jCqGT7xLTznQqV6En8A88TnKN8Xde3snAWe9yNGRRPggKcyyoW1chkkaKioJLHabzFrpAFLsam",
  "key14": "HUjYgrjCcNiq6huMGi2Di9n8tL96xXc2Pjdi1Gj7KcqvFnVehwtX5ETwFffnY3tcZbR7nniPcZtZrooU1nZ8YZq",
  "key15": "4UbgHc13vRjKoeK3a57Um1CMvjSrWTkyD2ABGVwA3gFmKrnmngmMqyPrfSeFTfJW2zYFyaBCxx2UtmbK8fN1kvsY",
  "key16": "EemrhJ6PjAtdhL6ncPKxm21sT4VLim1hYCQB6o51r9LAZ7DMueXMj9F9Y5WyXPqU2b91L33h7SgEzGqyToLc6t8",
  "key17": "iR3s86XiGXHfLVs79QxTa6b6Tzyn3cR3vEAna9oCuTYeASJAfZzNeqGQPAWnkU6e6M7BCnfcnZTSmfuxPYqH8CS",
  "key18": "4MKgfmUXU85mmfX6eg2Y1FeoTbW8yi5agU7RdYHjvDXahQALSLXvppRZRXYQCnKzEwV6DPKczh68SsudgEZpQJpd",
  "key19": "3xoqLCpcMyZTQePqozijvHwShxoumb3xCjBbFr4t6cVQKuHnMvw4P8DsVFBBKCYeZ9HLQbBqJeS9vGqVPj4QkyMc",
  "key20": "39yMVf4T9FjM8vsXwAgJBSnMidHSsy1KQe2xnQvHpZoS42MRtom4W8ocxQd77fhuU1mtQM8RVt8Wm2vYpEAUwigD",
  "key21": "5AosvunEgjAVAQMm4s4hZbcXLpEMnU1EZU5UTtJYdG6BwSPc1C2RNQ28MKT7XsJ3VFLH1gcRvyA1i33YyvXQdH7N",
  "key22": "3xWCfFJD372vKAzKmR5sXPUjSwU8jua7C6c7fZxt8ufSc8r4SzM97QhNfk46Mc1pGwg3n5KqJ2aNRrAydjWRfX1F",
  "key23": "4c1krPz4cW1WzF16ZgDtWUstFFZj6egrfNbxPudNo3LoWALFsiqbS9NPowjrRRR1QjrECTzHxyxyNpGj1n2VG6fj",
  "key24": "2SFnPvrG57VQeLrcDYip1FgLc7wdYQoWjcNhPvAzz816CyCxNXpc7tBLnKxhk5w9SGoTY9DL58tmDPBxMrxYDTye",
  "key25": "21QjiBGP7QYGZbxXYR3yhGRRQ7XCayB2forJuPBtoie8we999oKVtS8JaNmdhLLr6gSkmycQHYPTjA1CpqgRcJfP"
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
