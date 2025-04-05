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
    "5L7Q4guZyP6DVWS5Qza6L2jqyTEbWT4jGa8UXUCAbzE85f8Pjp28XV78TsiiYDHtWbna7LaKR9CMmycZKkfZFSUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Jt5NYwkfnoWJDx5SdUQuQv9gnsn4CqSxZi136fAG5c2j28E9kbUtCceX5D8TPK4KGtoVPe4SeXRARKRVD73teM",
  "key1": "41DnvjdxSP1kn5PhG9LcqTUVoob71QpKwHBnyJkzi1fuop4bWQU6Fim9dLtV8B4Kf7yD5Y28B1s3somhRmq98EN4",
  "key2": "4rzh988u9CHBLpG8xzhrYaso6ERrZi7pKQC5QwSdPvoodE92uKT3Mu6HTcDxqeu2bRge8mgUv7vtYydUsx2gUiBd",
  "key3": "2hAJJGUbvFCRqKVPxcSTdGe82FQZxSocNLc4HM2ccdN6WyzYNgUkm7j7MDDAz5rfy9kj7DS9XGrnZJD1u9sgAuDJ",
  "key4": "2HNor4FruhxnWxBgtSqfAEVNGrXZkhthtD3RDwNEaGH425ptnpkPQxCPhPbKD49JRNMqnt35WjLXM2xe9yqWCREq",
  "key5": "46xH1gENf5RunpXbfT6WmVXPqQp1BFauf3U5NKVbYmqEt8CVzeZ4QuckDqoqw8iC4ocZhCCvJdm7AxXQeXB5tZ1F",
  "key6": "5Wdc2gt4Jywgp7yzbaV5qMBoTUqCuaRGAm8SWwWegkRh4FSHLWgA6XdMr6sd9FzAs9KQBWcSDepRc3EZ65Em5xfi",
  "key7": "2Vg6Jxs6zuGDqH75WnYEGmFpqAvu5UjRQhzVVedMu55pu4u3JUBh5DW2ymWRUronLGkp1NqYtcwuD3qaYSHTfdf5",
  "key8": "5pH1Nif7RPwYMTVzJihBoK6yJVDPgN5m1Wx7Qt26GMZdnQiuFiidx2yRjjCmBiH5MdH63tqsfjcPjTTe9iLn66ty",
  "key9": "63GvzhQQPQ2GggfJYwWeDwUpJ2WZHUEkwnFmXZYo4vQgSZvwTX3ackobvJ4CPFFWrM5Q7xvgGTPYEEzrZJrVeSJ4",
  "key10": "52ZgrYCwFtgD6z32j9UPjxBELHjFg8wddnWiwcPiMzD6PsrxWtbiznriMzMVk7eSEU2iRCxeLFZz1YiUXr75Sncr",
  "key11": "584zVLrnW9VYGHWPCg5aid5jJWsp1kboiVmm3BKFMPk9XQ7aLGemyQxq8oWXD1hAnQ8NXCxAEaaAW5thHMFHVGFu",
  "key12": "4Gm4os4PUXwhPQB7q9TJtnszQzdC8xMSoZYD7yKnpqJbrkaevQPh6YWzZ1S98rFjVGHrqwKpmwEsoD8KR2cG3wPz",
  "key13": "Lapet7a7W426bAu4LENcjmU8XBRiriuPabrfAdAnjH9yngMy948nLNEgQdu6jYszpnYrc958ELRaVcstU7cWv68",
  "key14": "3BTQMFGQs6BWxyu8iDRukjJuvArqvihbVBsY3TSnpZhCNTzCMzZZVwAVZJTEg1uA5ewtFPamsBeichH8Exu4VG4q",
  "key15": "3EWqQZe56Cj4JRuzr94wWDcQY8hZ7jXxCowf9B24HhJ5zdb9Gymnb3vwq1saBsKbbgfZMSy6Lqj9ezKJFA77kkPe",
  "key16": "4qie48fJU536W2ym12bnKpDM4ksxa5zJomtqKDwi91d8YNXEq5rNYs4EKW7y7DX2FsPWpPqxH4GXXyn724zS7Wt4",
  "key17": "dPorgGqZsGjeVixSBJS7xW3fBt8154qtDoFYfxFXLU8FNoaapfgLVLa1wcPQiALKcc4xPVwcfnSMaHNKcucFcrU",
  "key18": "46mHotaEN1LqhQE2weveeAwHQAdZoydh5pog45hfRZzkYGCPYgHuTq8nxfGe6kcmi4X9Zfoz4sDBhTsN4o8cFAtu",
  "key19": "2CatG7Gz81W1KwExisww4rxX8fpCwwzwJnBBr8ByYACpw3ZyMK5fCo2XnQirck4XY2yVre459kRrDo8egLeeotqf",
  "key20": "3yE1WPD2ctuS7kCYN9gU34czj9byY8wk7CtX8VH2fFknLEp5eSKG2DeGwdPgMj8pBuGWWiYTj6X52UNPRrtskYDA",
  "key21": "4gVWxNMZyCmZ8FsGrLJDGf3cGVuJUovASb9fC32Zmg3X4px7Ck6oL1rfNYtxCrJApCMcKAZfTNuQtPNeo86Zyncs",
  "key22": "2dKJTmuXqaG7nWkNb5Usb8KCkhouYRaCMeH2HUTyehyx7rRQgtjJGj72SUah2mnWn1yVBJ1BnfQrBHHWLsRyX52i",
  "key23": "5r49ufDAAKLTzV8WZNovZVwCwa5boM3iCHq6P2xGfiKSciZgahqMTHmFQVTP3H9ZEZWJPTys4TWcZYsh7W8GbCYw",
  "key24": "487adU23ZVeBfMfu9tWufwMbWS6WF1HAaL5xX2ddNzymgYWZNiVkBiNiLBna6ARvyQ16vuGCnZDNsN9VwpVhQfCR",
  "key25": "6381Udmvd8ST5ZQxJnMk9Xz68fbR3ZVVwgLV5sKynQeVD5mgEENDfFxJUFhWma6qDx63ubResJPe6qcLJvxW7vfp",
  "key26": "4FXVDF6RsTDvu9oGiSqysXzYV1Vnh3iPaeDQuaHvFEXhcK7toDhkYGkWeqo2XLEqDxWhncpKAeyxFEPwBH7bJiez",
  "key27": "5qRVHwXrWBPc8H6BakA2qWhrn7nVQkuR18oTB3NbgQgVXE92y2rptYcQtqF4NeiyCm6Z5EGqgD9LMsDV6vySk6wV"
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
