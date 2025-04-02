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
    "2asYcz5PdmBLf5NS2QuY6So1AZdDQUazPCWtMtrNeq8U7N4L3gXbHZ7PkgXzF7q4ZP7E3J421dwbv5D9CgD1bahA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQ1D9iE8w45YphLe8fr9RRRmQRHF57LdVTpt1vB4eGq5JY3NRPdVxuiD87PfL7hgRproY3Jwca1iNzQfGfvVWuF",
  "key1": "3FyKocTiZHSngb8wBoBqEQHCBkzXTLSsyL4R7WAyHvFZHWhQXaD2a52k2XVEWz6L7MQg6xf3TAR2QBA57zyQDZRd",
  "key2": "8CzmkD8oAHNfLwnkA6senx6u2jHgud6DiSyDMinVALJWTPttduWGojnhV8zVckHfwBMLTwrSQXaxj4ogsx9ixRA",
  "key3": "3Bwj84HNbVWsqRDtS3NGCidMb3NCGSAY95gS7MJiHn9aeDPAtnTffT62GfCBTNix6NDw8YtGgXS5s6zKdtfnTNh8",
  "key4": "2a22iQoQHMxYCc67orjURfcR4TSSQw5RgQZkrm9GLbnvmnkWwyrbF9riMVzKgMhNWsgKVQAeUgQXbWkv3DZfuUTN",
  "key5": "46NgqyDKJFmmeXyiQiUeVbGafYt8TJ6CZQhE3PTiuk8d9THPRRRtWB9dmBwxaWZcenkS2q5gHGwxpEDvsdUrQE6a",
  "key6": "4L7BYJbuW5vfk2ZPxrwEdvDR5uNmRhMynMWXCsZ8CmrnWyjqrMbjZNHLUzDrfC2XTEaCokKrBH3vhckDmxEGvGgp",
  "key7": "2wW3THs3BixhsYgVMWqQRxizysZBDvQcB8xatLR1nJiqbHanfL2Rcv6BsBnN5yQXqfJ3GZS49wDAVvhwZCVrgCjF",
  "key8": "3iFDX5EU8rtzHR8biS9J6vDHYY2bo6aMtL9LWmXJzNhScQWvFtvQ9tvAKwgj6RuDANCG2ehYY953X7UkWfpMTeY5",
  "key9": "4v6pGf7Snk4EASUY3dyR3dAXZLSkQrMk8JZVfxb8H96WWd6caoLT5TwKTNyB5MnKmjFR7SdopSjtrGiSgZeHWih",
  "key10": "2DzyA34H2yXePP67oeEBfWjj3GUf9YqptgfyC5jKhHQKbYfWfjEA2KsjPUmndL9xWYKuy6GQgYL3bb5V2NJwZ2wT",
  "key11": "tDQyDkqwaDbKNV7gansi1SM6UafSKKbqUoRzyAHdfo5c4Wmd914JmGRzoUSX6D9TogkQ4N8ggV4Xzqk7q1YNY5s",
  "key12": "217Dkqb8WUZeX1GXNzj2YQ17KRp5wty1Xa5kA5xw3qnHAFQbj9PmYDiW1z3iNFoWe8uUuua9u8cVfWoVY2CchjEw",
  "key13": "3gvhhaVBxb24yYVe5FUrDaCigRxioGu9C9DENG1RGdTBvJ4hQfPHLvtR9jZ132RvY265f97WjVxt1crM6GmrwsGK",
  "key14": "W1RxRBhmL5bztmxYkKMq6GiVNsiNrzFAkXXqogtVcDsT4W3qNJcgJ1CagtDRh42fyiqv4Ch9KsteH6SBH2N88Yn",
  "key15": "3TQNKsak96mPR252x73cbE5Nu6qUaRHxWdFLCWffXQXkjTcqbF7X1CsfGaek7qsKMpmocb3voDy8an2swoPBybq3",
  "key16": "2tqG5VfQAdHjJZju1xDK4nnE4JNHZNJR48dsFhW3rjbKhR6kATXyQfW8gQGZdkBLgHD6EficqDZjZttd6SqqiHPB",
  "key17": "ewop4EdWFB3pVzcx63Rzjk3SCkGUtRJUR1LmvRxrEFXmEXMJfmLaNKuDR7E3EB1RuczeGD5xXsoSUiyCAwFrxai",
  "key18": "27i4u4xj8YGdbHF9XY6FKrHj7ATcBDyBhTCaTdPBQs3kLBobJP3BWHbCvvHCeb58MXTTnQoSkQdNkgJRzh7BJHRG",
  "key19": "4Rze6CPVRoR6SgEJ2kebUVD6MH7cd31xY6hRdTF7qos59aLGSX48zQkRudCnrbpPDsd6yqkZqpWpMhBqt5V45Jfj",
  "key20": "47xbhq33tR4nSCpeSqxmb1YBCHEVsSjVbg8jtq1gCyKKdjwbpZZEFgXAeWesxGT4GcdPkaufUmzBanXV2k7VwFBb",
  "key21": "YXbdv6aNVCzzK49cRWgHxJhRzmFgMDDW57gQBePxU7BYxZ13fKW2Eew1XwJsWey6DfBCmTTJ6KCm5BquXs19Nkn",
  "key22": "2E7zaacAuWURwedArPy2s8kZt6nU6zahPhTCfxwbrfS5dd8JkHc9PpZqqMyM67iSH3x8aaccypzeqHrEejrjHYEE",
  "key23": "4oUGH4jWSRYcw8VZ1QgFqVK7Rq9Q8Esa3qd28L5E7wryDvXQtkBrsLFvSuWQaT4iBc33bppAUidBRE5XH94HSSoe",
  "key24": "4M9Be8LtVDccPsgEvM73Xe8ohRojg76mLsYPCQW4jH2ejsuC2JsH3GiEkWTLvTE9Frewb64L53ziks22bj46aKGY",
  "key25": "2i3Yzzw4mAfeifjMtX3X36jsTxxpG6GCa8AMqsNe7Vc4aP6aXWMRxMHu3qf56E5rZz9u7aprXyuzo81yaBSQn543",
  "key26": "fe8fbgDRpqjFNpUc9KmRs4v5V5XYNATBp9cY9nDKUXynoAAgMb5WsvH7VBoJ4zM4hsNcUh7PKtbJ1urvHRrGUrJ",
  "key27": "2wbS97xDQxgYmiv9gNPEo5iwUey5etbMpV5swNixpuuqxuq91qGAXTyjVTWiSCCPefcM1gNHNXNosVaPhMn81shC",
  "key28": "2n4YN4ZkUWaMDJfHufX8dwhgkvcikoGJL2ePBWHcSAua8idACBEvY7bPDLDox2QHNRuciXFQsx21bgRxj3MJL4rJ",
  "key29": "5kN2zHAfxHTN3i2xBygnsURAAqo5LJHBvbPh9gXZ9FfTAZvjPXEPqj97HtAWwfnPhT6Hpbv3KN39mWHwa56wmBRY",
  "key30": "4X7HWbCyjRN1dqi6HNqyx9wEjfStbPthW2eUkQFWTvbHhM1WzyPmq4aMEEeRSUTbe7eDygYNitbnvLwS34aF771i",
  "key31": "4taA44kzXUkia95s3xZtNQjeV2P2qSobrUFhiGJ37rcJEFv3DsFxyL55z3taeEHj1yVJ3WpMZpTzHm8uhvPdoVQZ",
  "key32": "2bMu26Pum3vmVc2SFs8XG7NoYWpmhLhWybvzw4px9YZRZqmJarJncygeuzKWNUwTG1KrfWVn76AnaHmKa25n83u5",
  "key33": "588mjeSSRNo8z6ZawZTfaU1HUvdbRaw5oS9bhGR3aXuzwBxrJWPh8Pp3FeSweVFhKbXidiwA95KUS1BkE4w5FgmL"
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
