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
    "2VvQWbFEowjdFmFJzjffr1LNZkXYpJrqkycV8Yc5jQP1SHVfoxgnPjZnty2k2hSj9qDSpG19SNWH2VBFZWY5iqpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n7Lo2AodpjKWwU9rJLuvZf3o9jDt5yvVSQd68SWese61otAQXqD9nd5NpwwiGipuhr1x2fcaqvZHPtXUyE8rAr3",
  "key1": "2GwNYdNWtPxYVesrnF5RU3MczvPeRGhu8D5xyFEsPVYF6ijpbLpqRUeZR4XaAZXBqKJmqe2nHDbG9wMfZA1exbyE",
  "key2": "2a5sy7BFPqBcLG2EnWbUyeM5oGiaSVtjqRm13MBJrTs5wgCFy6DBmD6VYLFhkLNhNMqCDTGtarxmfNjWWtTA281s",
  "key3": "5DRSMwxrj7sjwQnNJjAVN9snUYAsCq7TAE5mVVyzf7c8wbL6o2pF4DMJWPXLuuqQPLzhKqqcpxKrMoyTeocQAjbd",
  "key4": "2hNv5JYZTbS8JHXVausEm5hzZy2uf125sn6wuXznHmCk9YYgckx7M7fvjUei7feGhqsBVob88Lyaqxb4KSJtk8Gt",
  "key5": "4Fjks8xkBAkJ68HALTDaknbjYSsFLPRQ13rH5ZQzbURSKqVpwwYR3hMstPEpqKbaP8q9g9GcpSsKKr3JrHrQ5v5P",
  "key6": "4nW84kbXVbS68xuM5wqWo5tNbXJQ1K6uRFwANMwrpsBgTmxDTwocAt2bn2PgScCXEvTXjcwy5AcEUUCYbcnPu7HY",
  "key7": "5raePAn7iwihBkFwck7aKnNhgFLUiEwSujc996sDAJyK9feV1NsiqHf9XRBcDbhz2NbEHxem334UqK1PT82DJogt",
  "key8": "2XrwbhVEZbWTfte8iHn2iy9EngAoDSWDm9dBs8yqS7Vd7Pf2JaFrnBJB2eBim94dchWizpFC2VBuwHhRU8smfjaJ",
  "key9": "4UkUKMvCHhnu5wEmHSxg4rWE8PH5KDSsjEzg4NVWxgJHEed3ANzZyRFQg8y9fLY9crNzLqcbdRKuzbt9n9mwGC83",
  "key10": "5smQ6wAxmQqZgCrM8gZN42VUK6nzjn8NgVRaLovBaG3RCNVBhU9HKpUMpdkGqjMRfBMw6Scx6BMcsyQwGqFhGwC4",
  "key11": "3s6hoVLEuBxkYNy2Ch424GJGmwSbY43qApuw6PYcnvRDuNsgFBjoYm317spQHyzKtasKAFRcfv7fyGR3f1YmsMtB",
  "key12": "3vocjnKZyMUQuHMprXB3AMN61CRY5W9DhjPdYtJP7tiucLRkVK7LV1w6KexSeykx5uHmczs1hawbHorBWHxXygQ1",
  "key13": "34oqi2sTYPUFSzivVgGuUmW7sB2i2z79ptrezLmFNgRLdwzNBfWDWbouxRm1kzkJeo5Y3B1mU5QB4Zvgh4bhQBxr",
  "key14": "2pw7iK61qCfuXSQduxPTT7eUwMGUqy3VbaPGjXfYUHSbhkSo3mUK4boXW11VJr1xFVxyjUuHGWzfxpsKKeCdEKQ4",
  "key15": "436c5snHucrCgU8BY8JKQemcKvevWeqrRZTTsxHWoQDTx9d9oGByAyZLnUPwonbejqVuxTkUFrNntLqL6htyj3z2",
  "key16": "4XrbfwC17aRr6NxrRcJrQnkcWh8uWNVhDJG31ntoQLWLdbHaqgwViY1eDjXQqWN5DQMnCwJHP7ZukceqxXo6LmEf",
  "key17": "3ZycEC1vhEjGoYH5KimL8jBTwAJAZncHL9BxioGCnZp8wDhVGzFBmgLfbnUQssCsFV4LYCDEqfyBXTAqB1CF12Xv",
  "key18": "2nidQpRDY4rmjX7XFfWNhRxLDk2Q6fgUh1FMyt8ccwQHqdasn6wHQMq37mota6yLJ9VSD9ydZ4zT5nAi8repgLps",
  "key19": "4zKHEBND76tCaMfnn3U186rsmEFJX2CqEYLrEfx7twmp82Uztrn9gcfuDGpxymHXZ8hvzsek95aUNjh2wRj91NMv",
  "key20": "4rZE1Vk4PNKc6BEVRqovSVrZEvxTRwvP6ZrjzuVs4LWJgGnXqfkYVAe79UMbQfUP6h2CJfBFnnWYGFUPAsXSk1RN",
  "key21": "22PUBDvZ96tUZXMfg95928SgMKuSvFNqV1w35nttiMVWj7bmkcGT3gjCsew76DpA45wfFnMefMZjAaTD9NcfwQ6W",
  "key22": "FxtRU6w9PphutDVfx8GhpyU83dwEYnNHqRQfH5KNHAbAnDnADGy4yA6Tvuyr4VGdAzeUteGhuM8QEbYBE8Mbuh2",
  "key23": "5gN7QkrwrDA7H5BxgSWNCNgv6sAPrvyijUjJbt2eVoxVt5vyuLB4FtGxvV5ZKEVAPGKkc5sxbpGUjaT5Rrn6isdU",
  "key24": "3fg9Mnr9UtRypHKphwA994aba7v218MUa18BZYb9Sn3k2ioTZJ9WMD1i4ZifheNbwF6XoMnQTtT6YHsZ35zoe7GS",
  "key25": "2K8jZ6mGxiiNx1HZ8M5D8ike4APAPdc3MyvRMmttfdVM7r8AxYpq5GuxHfmJaxcAyVcf5so8KnxMoTtJ8QLUv7j1",
  "key26": "4oi67Bhdq67RAB2Qmip8jk1qR8CCLYmPQFBfS2G9oDmKDood2AnahNp9JnHsyZmne6Ft71fk4mZsBbnRmkBVAekz",
  "key27": "48SdC5ZuaV3DRmn1ioUW3T7t4PQbS59ijmYnJhGPji4Z4YDRWMGaniV9cbiFi44NwyywY12G2Ruugob6kAvFPoxP",
  "key28": "3djfq5T2gZWQeySHHGJf8CKBMmSR9Cy3GCAkQD9hzdzgZ6QeAfWtw4Eu8vhyhtHQFT2KaKkSwk6VbJ2rC52aYahp",
  "key29": "3bW4x2jSVcvNqiimFXxX4xa41pcQC8vnGEGSpYRmJWBbCvQJVbaaDRhLefg3XMWcvcrskhnWQL8abWRLh7jTjHcJ",
  "key30": "fvXoYSPMyBedybHFeNF1JdVErB4WQkbiJCmoNtH8gGTwfczTJ6atSYsueBTetznccrv6CmfPWy4YciuNrcS6zau",
  "key31": "2TC436gDT88gqMjF8gpSeMSb2HoTeUt4wFNFso5PtQL6ru6TBscuvGDw8Cobnxt3Ww4gRJZKGvunzqRcTFUsYwo9"
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
