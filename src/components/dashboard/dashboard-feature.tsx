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
    "Mo3iw1XPC9VAEFjyBXSHth2PpWwd87rtnDbKWYurvEXzSfxe8124D4bekDgJ6Ku7pGsUp4K8bqGqjzPrbCJGeJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v55XmETKgkurKYFcx48XFQyjDRCZHcQbhPXTAFJeg6jnAu7rjMSDMF1VvgQswpZAJ3Em5KS41uCExL4dU5NKyPf",
  "key1": "2JaZB5dPqjMusXPF4gcjJCKP38DKxKfNSEfV66kQ8sDCD5qQhzEWELFrnxBX8XaeMstuCJCnMZErqYDL6cL39EuZ",
  "key2": "4qWqmLDTMnrzuRsdaHQfuS1QsiQWev6kKrJYLtWEw2MkGQopH7LN2PCsUG6sRSosQ6C7MEotr9fevkwTNydwy4aP",
  "key3": "4EkgjuDSk7EWrWSWmjL4GqDszSqamuqGTXK5NkYtrkRNhUhwqz1nXSB6m5eeBfmmRGxJ3EwM1LFqdNBMNxwyZYeW",
  "key4": "3RRgDgWF9pgTuND4AZGocoePCBJwWn8mPWaKJm8pKx7bAuyGSoXsKMJGb4r1ZJ1K9TrK6cuzm552Q2KaCg3tTEWY",
  "key5": "4WbemhZTB2Swt8Ni3jEbtoxkGjCvJrEsmCuHbgFhsvssVJXm2kYD8RxLHVVmsjXyB1LnWBKD9Cc9jQXDg8tSpxaK",
  "key6": "5ZjCy7hkr2UuabMg7Gd9cRqaM4rfPghbo28FbvxiKVSP2WqbPtH5w7yiNpjNMtN6VMEt9j59b2subwePLA5Fjxdn",
  "key7": "1sLQjV7n56a4V8rAnACGm3ZRZvPfcqjWnMpx7rK997aqccopYt8kiXTYF2xtAkwoZpPHi1xyqqKFGxi5YtpBNdS",
  "key8": "4uD3j94j9Ew6drXiAgmV2cwEYRF3C6EJmbWoT8LmGqrEnrjQzQSE1hm34drsTi7z3cfZmacSpqNvXzBKcK4ufmHh",
  "key9": "4S7DQ8nV2x9i8GLRnCFi79dghqGqAkqt8rdQfNpfwrLrQPZgRJhCaZqEqg9QNFpD5WkkFJaXoPjGo8YxbVkQZ3Wm",
  "key10": "2djBKhNjUziyLuP3gL1tgALZSkZS7TW6LvS21bGoY2PwyTQTSUthLsPbasgA2cTrqGHpgZRNZ2oqkwkBxqGP9jmt",
  "key11": "2FWZNTtLiek7vMqLcPiZfWok9LrqQeFoTBNPsYdZZhvQZ7MDgrhBdCNu8LUng9Y6MPgmrrMB3iiQxH9CrnLs7Y35",
  "key12": "25C15MkUcwNs7Rbbi1R8ZnU1hzgYquQSFJSTPG78fa3DUeij6rauHFuptM3sLqdrRcJHnjr4BGquZWiHGVfmUS5H",
  "key13": "5DumigmfJqKAdjx7xUee6SJ1Pu4jX3uqeuXtcVfsueNDqkzwxw4Fg6ZcNwjnCSwiMiYoq7J9dKC6eMEfCiXGgGz7",
  "key14": "4dRzxTT3F9wKtm56gzBBknT8DbVbedw6St8N83t4MwJiRifkBixnk4hdJ9e6povfAHofSSyEDHNow5mzhiyYocxf",
  "key15": "bjxouRABbfzoqj6z7RfsTLkCtsCYV3xwxp5Ejnk2DjASLrWHQxvvNusyTxa2eaooK6p78JfRFARbifSz1mg4dNz",
  "key16": "3mGfWQZBat1652MDeLaJRLb19aHf5VVoUEQKs6FZJPddtZjL3tmHUq6tEdhoHSncZvz2ZQTPd47WAQcQyPMXexm6",
  "key17": "KVfLrhTc5gcHf9Npz39CwUz7a5mECss765bPtGCzV4yxmRREfVWXAFQXDZfcYDu6BehszDLH55iwg1hziHd8LVu",
  "key18": "KVERQ4YRgkCTD6A3n5FfDvXcoYVFbLRPsG94AM2vEr5tRKov2JwvTXqiRCwbM7sKvb35ExEWwfLHoTNL573Aki8",
  "key19": "2DLFWyDCNR2zEumCJXxZrMqBRuGva95JYyNhAVZ3CPrmXLZY7fLaqf7uSqkJBwnJWnTmP1qmhSqVug2xvozLwCg4",
  "key20": "5jnLeD5r2KTR2gPi4PvnSfnk5VZc6SsuyXiyrjn6Q1bNHU7nLfe7vsCoszgguezL199WAYLbT2pPorydey4XS1Aj",
  "key21": "56sHLDqdwan2zHxdW2JfhAyfwkoeFWpCQxdJ7PoYFC9wM9Z9M6RhA8DEG9A23yZVZbzoG6rcr6mwExdeyxbN4DMS",
  "key22": "4NgkAyDqA27B4FyuttvAgbtmxwQxsNEka3xUKQSYWZ2rJHa3pnfUPvWnEBiNfk9RMABjPwwVZXNoyxHXEoyBAQer",
  "key23": "5Wa6m3aEx87VCKYvVsQMPbFbevjHPPr7rCfF9RCp23L8fykRfmmggdzdWtQFHybR6ag323yyNjTVfk2GBgQ6dDuh",
  "key24": "1aoSS6i3H5dz488eiLjt3Xj23ENfrCauQCeJpq6EinUQb2GoMPPiRS2vpx4xcoNyYvwFEifS2EABBLemVft1rfZ",
  "key25": "3ik3U19b7v2wbG2SngeAuzdr5XkBrkRM2kQ6ZwZrQ693AoShvxM2UUTJqsVw5eE6NWuptpRMpB8ww9hvMDHLYe8N",
  "key26": "3vozVDmShmG1mYz8xRptSaLrXQADoLG8ZAKJTwydoEqb378fZTZWspwq6euzkaRoyk1MPS1VZzG3vYVLQeptguEV",
  "key27": "3SxvFrSAgGUQUcB2bF5HUhidkLusEapHTaGLRezwWkPB4mV6DRCK6KwLqxV5vbCYvRRLim1eucWqK5j8VabXtNeC",
  "key28": "2gx2F9ZbiXnXoiRsfT3jw4FUvPveM3NHHLufEN2Xskn6JZPeXZyS9rwqWbwH2jHd8dU4v9tyMrCSA56QpB84E1wr",
  "key29": "2wz97PUyAeBd3AW2maNfDY3oSCdv9nvBMSKuHkivRqi4PjgD97wztwi59712k3199yJZFUh39aRnWbJqjtpUerx1",
  "key30": "3tAJSuWKXT4pVw7GvGVvN7XtKJ1ckk7N3U64BSv2XQ7PQvKWmFdP9T7fL7hej4qMKWCqPpRhzxb1zzo93eE3H5EQ",
  "key31": "3SQFwy32JnATdxKbZEozBtVwCDhmyVUcSBUoRc1AuSD8R3WDebK9SAD2zTAE9Bkiq5mAwW6jyNaXBg4swskqdRf7",
  "key32": "4gPVcwc4zJiQ2A7qMw5cPuNHPpoJhvfPbvRXgu82kfjq1yJ8wrAmVtBQQYky6X1P1EqynYZPanw8Y5mHiKBtXgCv"
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
