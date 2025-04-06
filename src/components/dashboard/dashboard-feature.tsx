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
    "5fXcxdwkbX65vnm5SmqMawFRMpEF61iB3L9ootpHpTLYotRsiuNqv6Gvbm4P5wBmh2X5e3mystgm6KHZuV4mNiVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEkkD8WZmYbqxWoAyAVGWaTWx2rZhs2dU4rDv2aSJPoeEMxxdZcs6aKpmPyNBGnTfBxtwdduvGity8Pa1A8SDhA",
  "key1": "5BFEAy2yEQ3DULH9UW3MWcmCy491aDAfWAT59zuchiH8dyY2aBTtben9SJ9AnthDbhuJoM1DiBJjx5qwtv8HdzMq",
  "key2": "5yJn17hkzz2ZMTRVT7742VmVxfmvhpUQw3gYYu4NDqLWsrAW6N9GWWmTwjz9aYyqhZUWEeix1sGQVFjEJVWcQRVP",
  "key3": "37oWeiqFMTr1CpfXyf1u3BYX51B94R4tvKkCs7hAP5PQJR28qjditHb62NHazouZgcLJLjmcvxJabyMTHTZtfjfr",
  "key4": "2jhrrwFoeaHVmJNxfMcPQ3RzCCGBhH71bFban2NuUosFt2UQaKhpXRXa7ME1iYvx4T3oaeBQPQJGnQqHKw1ywh6J",
  "key5": "1HjU5XGEgUXdUoxN6czXEBALLxzoxiH5PSbU8C6hBBHjktq4UoGUxi4sHsKByMAWz5Cx7u1UyjzriNBBCvqmQ48",
  "key6": "3RJmPoimVz5LKWupqypMU5LbFNrrbn62NkHdAjdqGPaEdCYFJifNvxLghR8xwPgYj5RB6NBXqxpBPQwSiqZsauxb",
  "key7": "4CGd3W95JstsYgAvyvMmtrZLxMXt3EH31GE1SX8tjEjLN16Nx3ChRaux1UwDn21YySuk99NM9W8kokAS7xUaA9dJ",
  "key8": "43NoMzFFFFqL2JNQ8pjYGMUXWTSeCLxQ8CU8gXZo3Mwfa5Scq56vquQraZeoCvEmeWGk6ZXBkZv16jiCBDoyNTYn",
  "key9": "5hzWnyUiP5WQWgW9SWKiozEt6AnJpFgqemtTjxAZAFsH7SEccNfExG92o5UhceiEbjs8chRQaPSAbutuWdrLJhRd",
  "key10": "4XFmQHKVMgwiRdVRURXLXPFdibFUBArZTuj6EFeEUkfnEZR9EY29ir2hX4t8RTo2yd5stUitDXcLVvVZCnw4hwVK",
  "key11": "4YSJ7uPjFqFuwgoCeSjQsmcZ6KPNwtoE9WnFJwuPhkzcCSNvWGRHQpTK5cJDgN3KngaWFq9Ymz2fp3qyifZRoVBo",
  "key12": "2GdrzCpUAQN3mjNixtVuwxg9oB2YySVjJ4dtDxwzZvSsxQpqWAtsrJyqjqvoejhruYTUWNJAPq1HFyTf7mNmwjSu",
  "key13": "PfAZAy4wuDfvF7hk8dUE2o56DtrxSZFEE6d1zoTc2mnX4creypLy8Tg7e5oCLPiBkr83ngk4pSuTkXyA3KVDLrV",
  "key14": "3YPBZYX1E8JokGXySKPvEGeuUzoN5ff2JAdX5Ai9dR6ETGJQx5Yqf7Sm38Sy1AzJYPSrm7nWm7DnxMBWCZrLuHm3",
  "key15": "5YtZabPaBCCKL4xuacrY6shWZLnbnsNJZriT6J9MXfUa7fTa2zqEDrsG8nQreX42h1jnnjYhQ9s6DuoCbQCNVL2T",
  "key16": "2b8DUUeC5DRTLx1VetKq19VKzD3hfeFYm9eyXYskRuoNXGes2GEcH6Np2JrejLjjaz86rXnkcscn1BkJ7DwwzrCk",
  "key17": "2e8BouJosKZRC3GTTTnLgEnzUUQVDguSjuZk9wXHYC442vsQRQb6Bj6UgojpVWfzZWf61QU3CKUjX192qvazuQQC",
  "key18": "3wVa3CyC5Lj1yzL4Scu1k1gLRsrdqhAYRXDFi7RccfsRafCnwYKLFfSkfJ1gwWp66smRhyE9BneushH6dkBku3Gz",
  "key19": "oBpXvA9iSdDAYzd1a1gx7XaYzCYa3o7p4BoPRmwE1t5E4GH7z5b9MFwdv6aned5oC4uScmAYJL8TfTV5zQzv46X",
  "key20": "3rJR4KHE1XAfKUfusDzg3yRUcrnDC6E28opbXKxDYFTRRMabkb3hUaY8jd6jsNbKmr2XTcsZwJdQwkdUUxxsQ5hT",
  "key21": "9R51ossVguGEzFjMn8q3Lc8rWGtZctoTYvsoX28vcmbzZDSGgDt7FHdH1MZRVf95Vdt4Dj69G4Gtqyxw2wfrRiQ",
  "key22": "5biQMQkYC7EHLNmzNaUr7dzJPveMS1RJL3pVsQCHVHSZ3oTh2u9pEdnxP8gzxCLYCcgd1vvv2sNGuenw1N8rvgcv",
  "key23": "4BEZeatoHEU5B4X8c5jktzXVyAuvWUY6QRUF4zPKF845vrXYqaNCXmzjn6dDXXfFpCeaYhE1eFvXm7NsMdySUCJC",
  "key24": "VM9ZPPKdC4ibwPg8LTdfGfDV3itGacmUoytkcn5vvSfg4ebgKmn2YxivzdzzyypaEAfmQg8q8oZx2UDdKVnb5SH",
  "key25": "5W5aETDpRgkLZMXZm5z4Ty5LikBvYAYNhpT9rxcugwd1ofYM32K9XsJbWaT6iDJcnbTAbkb47VY2RnMRe1ZrfuU5",
  "key26": "4uVaZ6npfPUBAbwTnx2UgkNJ2rRfKPN3hoRPsv1PHzRaV1cPhhhkvH128K1DhRZGQjhEpQStwBncBrnnCXLMV1S2",
  "key27": "52V9bEr2YTd8e2NGpBhahQ4z2KNzaBkkdBnwMioWFjb4Svfx6Vt4R4VDu4un8KhpZp5at1s3XoANRWiFHeYBGEJ3",
  "key28": "3DSBWwEoTy4mqvqaTPQwaDmmFhySETaQRQDbuj59FXR8toKGZBXHEv13AbTazJRw1KN7vNxvfE1mMxHY41Xb4mAe",
  "key29": "2SheD6wtXRh3A46sbw3KhihttG21yEyFgZXwCDpGjo7C84bTkBB1z3Apa9b8UoDS2E15vKxQ8CLXvVC6YBzb7Ymk",
  "key30": "2SNBgVx2rpFWboAo3FU5B2V6snNKq8Aa51wQ1pJp6HX9PiyAZMSXhhWPVWX3nafHg3V4ePXho6ArXqJKWfTqM5jq",
  "key31": "4iW2W3GnPMrjSGurc9t7vpQR88UQ3quUvJ8WYDRaPj1RC244xLUbRgPBz34dQArttBoSgM3N5rDQgtcgKGWG6DGq"
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
