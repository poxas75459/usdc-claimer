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
    "hMYxomKNLU84wrzXVvwaJwv9DwWnzjaewva2nrdd1S3iYYAGmrkgaJT5ee62gY8acN4ozn5LPtQQzzH3v6mqYeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7BFMAVdnHTR8FRN1b5yuLCRZmEVfY3SrLp2Cf8awjS1KrJgKhRayLAxABqLwDv9JiDXh33NCEZBPTCHtmkbQqbM",
  "key1": "2YQkhq8sXwXrNtKpRZdBqY81hf6pGYdNmFjrNn9fmNFm1w5Sg8wZnz8k7i7zAteh1PvAxZhAKFn1LnjQdbMgjWjw",
  "key2": "2ordPLCWfSpMok2jZATmosWVR1T5BfFdDDMFNtKrXkDtE7CbbEcYBrifyV9ucy2c2po44XdGcvJKGmE4b4Kuprb6",
  "key3": "4worjSTHSptxGPGPq4UXWDRa9psFwCEx1Prc8G8KE6BDM1caE5usmxfEG3xmTmpNt5W8wFzaYsXQaUB5WacrTgL5",
  "key4": "5oAooq878B2SF495ur9xTef5T6AQpqYJVHwgQ5VhrkgipYtGTQzDSDWaQZE7f3WUaoxzRLCpZvKTb9PwPX666M6i",
  "key5": "4FdpsgfXneEHaHoEybKe6ckz3yiCChJDZeMPaDnWByPzffCxjE3z9Sgz7onewevbKvw4KwfNBg5y8iTk67vanUYz",
  "key6": "584FsBa1ur2qJZNFKMmDvEygDZFunanf4c5VkkBLBwKNQtsLKn8heWTpGh8rdVxQptjB3DspKXfStARzxcJaALSd",
  "key7": "3e4DUAE9DtNswriwsAjPW5fDVGg1DVwLVvqzWnGTkFa3j6SM8WUFj2LhF252wGeFdUofqAUeBmVTbAP4WJ1HZsYv",
  "key8": "qMrLH3F85LyDXcy1FDBQxUo8pa8KGhTT6BBoeRTp9kvFmW6PYjMHJX41srKujiLYNium2Nm1BLrRMmcSLoYq5wp",
  "key9": "5UP4L9VMddXGi85KbDHauqM68ujdSuTAYy1FiHj4ZoaZRY8XJFyYGgAkpAXSFXscTP9JpFvGDyHuN7mUt1KHt2yt",
  "key10": "2hawEJTWerVseosyFBkuHtPcWozughUSx5dEKamtrb9ScM3KpUYNk3MgGFoCGp5oXbQZwbeonMgTuffaHNmvPMJJ",
  "key11": "4GGQimH5LFnihh8LJDWfpawU5d5EmyDgB842qBRLiHjdPSm7XywQ5qXMtXuBm62iN6hssitvGgQkUwns48w2dGYw",
  "key12": "2cNf4SiAgtunYTuuHAXiA4mDCv3NTnkV5kKN2h5qpfhUS8GNrVSNAtnnMcySmGXu8mRoQD4ivNRyHF3gWWHnRyvd",
  "key13": "4nknFu4ZHDncyBGDrZS8rBbPtc9Y4BtwZNYhdKhXrfGF52FnU8Xz7sKieqyKvpDhB1iC2rNCoNVRJ56Lkz7nLn2C",
  "key14": "37zwoJCvNERFktpXC5aNemYUUT6v2i7yWeYh6MyMoHHhiuUCSuFLH8D7htYQccDQWHkNmBcSx9rN9EAJ4gstPKGa",
  "key15": "9GnFMy2zmE3PaFNTTY9BUEfzBuLRkmbvbSoUUkg3jMTcG7KrUVkzUwhLZABRJ9u9yb22mbTBwRor8HfgevYWYix",
  "key16": "yFT2c12qAeh33YMzfrZPLdZZSSQFg6SN16qP1LjJ1FauatfmF1eHPoMopSMRG5SyQKccuj26eXanFfRMsw54mAX",
  "key17": "3qxFeNJnqQFaHF8rp4QwgMuM1qPTAJuRDEgqnffriJhCigeJVvUt5p93jficLQDKjpnMX6EuPx5QUFFyaDJqWpSk",
  "key18": "3mAty2CDEvdBgG8GJEJKNtXnadB6phWCFDjprCctrHkpp6SdAmLSUeeGovJ2aLrzPRUKcdnHny8zKJp1hXbKbyEK",
  "key19": "VdjBM1kzpPpoen9WJVWMrz8vVBqYYgSCp97tT7iwvxU3PdpBtxxXUG1jtvmk4X4eon6cQw6vN8HWGy4xvRVQusj",
  "key20": "jTHvExDSAn8bRPQsWzAiJFspXnxLeDgMP4Wqs36ZWh2ohAEjgY3RQ1yTo243Fh8uzpuNeMScqUEjBDSoUo3sJdM",
  "key21": "44eDMatqymuPiyvo3va7Pn7Evpb4PNxZRVpjtGndtXS76vpNoamxZhtLgsvhBd4dSKBGeJiLquR56BXwVZA1PGF6",
  "key22": "2txF6veUEGXjyMWerNYkax7Aw8VbdpCcSukePPF5rzxY5ayYY1QZkvyk4HRfcSkeBzxP5tvSgT1Hw5J2Qxih4jdN",
  "key23": "a4F8NbjsDRHGWk2tSENt3xeSQ14gC1HE79oyQCN1zub3eehP8RJBej7skc2HjSZXtYxZqwU2TyEp1ZrQmearN9H",
  "key24": "5UmkrFD1zeyEDzYpNax1LKEcoDVr4G2JERr8wwZhqfRsaQ1wvSQRfKfQzZDfScw7PZfkjwB5MsWfRtNdiocMCmJJ",
  "key25": "kBRQTKSwE8BPNCww8YVxRyfhPKZrh1c3dLCXiFM9Hj4JBxPWRwkvNuDvhNM8xqSSw1ntF8nmgbLUMn37ChMxVPw",
  "key26": "5rmC1jUj3sN6z6SdDEcS63XCddMjVT5NembVjj9CLVi6JP5Bt25ZKCxC6LauscDWpk3sobZR8csCWZkCCYBUKh3g",
  "key27": "4jqFNQFwKvTuC793e6z7JevZrUd6wTtj2wUudUBopjY51GAwHsFT9qqqj6zrQ21uywF8W1afjSg4qf3ibA3s8SsB",
  "key28": "29FydS2yfD2jH2RAo9LrRKEqHfEZubJxBNt5Lm1rLyxbwCk2uamYw3mDYxURsztx446NjfZCNe6qvcvi4yCS5jXm",
  "key29": "2h8NNZCBvuRmSMZoi8vmXCnoH2kxUqEbEaUkSc6y4YhiAYH2KSfwhHbzTgiBy94LcNaVKcBxfrNEq669gE6EhtLP",
  "key30": "aCDqdFqY1iCXXAVSCqWNofMsEHuwSCvCS1d8eecsPsaybwnWuu1yjqRG1UdawDTZAJ2A4a8HKJsQfz6ERmNkexK"
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
