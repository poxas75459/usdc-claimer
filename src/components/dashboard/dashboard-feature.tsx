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
    "4u4LyCmcwubRbn5xMDs52qZJPnqdnYTDzwNUCaB8dzt2FABFjREx2TXaSSiK43eE8a33mJc7x7YkWxYqtk4GyANx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgWzLoGSRx56byF8BPrG4Faj3X2iLDxcgCueyQZfbd69MqffGw4j4b6gHTSHYGiW5EdVCLBdNKTjJ3tD17FJWsx",
  "key1": "2f9of9AHtzTrNoZveJ6QQyH3PDVcVqZBCUia7bUFEkMbThYQ9NexPmi4fbGscVuQuikZJwmeZC6SLK3dQ42cNUxX",
  "key2": "2XSyrusbwbXUvvSxHXLHVnXVV5rw8AQ1B2SEDQBBPhAoL4MbiMMQPCpW2e66JRUSmuEYKB9YWEyhhZMUpJnioGUq",
  "key3": "3YjkUvwYcVFbHkLpvJWRRfFNkdKxWKRtFyAgArLieQLEzSMbqvMEksfNDS5RrtddSHAPxZ4Ej7UMXuE3zZDsdGxR",
  "key4": "5dYakjFTnJxvX5nWxy19vTp3KHnPtFRqJGvbCKns2RTBUPua3BT3kjhAUhGfuUXJd8vGEx7EMdKVM1HoTwhtk365",
  "key5": "2FHHYH5bn56hDko8C2e8UpFzPr1Y6doVwrp2JXJ1iM8MSeTBgxdLf96pjDdK1FpEFWkApjCg5MrLLyBuSLidk5m1",
  "key6": "2Tn1pE4dKN2R54PjjcXgmvPZgSK2ZY3U97PiUiJiLzt9BTnJgSsHVepP5GkH6ox3yqrsz9YBLkLMVXQDxtssbDuo",
  "key7": "3Ru4PVgWLwuRFQRqUjCs9WCveXzMMtc19PDqw4oRrUizkvRgtsK3dWTEzFNj8LLsBTbDfbmnbHp2aBYx3QBho8Cd",
  "key8": "U6oCJio5foAEyKjj7sGJcCwq4nFEdu5bSQUavQFqUsEjspDZbNZmhWuivLzPHQ8Vh4x8rSFYttdV4gHoQCp74CG",
  "key9": "M9jhyz6ZNHWpmtzDjAYZdTrqnpEnDbXQJ5HcXw8o15fdzEPwv7W4z6VmYPuyMo11oVnnY2D6SabmFLDhTwTD35u",
  "key10": "3p41TTAHtmMahvCEAW6pEs8ZwZJgV9n5H1uEcPTHRLG1a1mZ264VBThtsLZ2xB5k5G179RMG2FjW6SMx8A1gkMgD",
  "key11": "56rHzjHFnk37oH6Fh8Es3f1ipsCzJotp5gHuh7xKHNZU66Ap65Y9cYoBsw4XkcTmTMSLze5tGgCJV9EsZryDFV3Z",
  "key12": "4iTmSVNtiBLv12aPo8Q9LQKuEmHso6vvrNNxGGDHvCfgQ8hYFwrX91MGNFRB7ztw73gSd6mnpu91uhmnuPKXJ4J3",
  "key13": "wVSw8K6e16hxBwAXeJ7Cr4c5P2tCfRY6KMRvdBXk6FFUBwAPaT5hSZ6zvRD6RcFLJuU1nn87WphPeJQEZJF8MhW",
  "key14": "FK2rQ6kjCPPL4DGLxZV28hfGgprjZ4byJaUdUorAyxxpjvSWoZwd5irpsRHdSx3asha82RXkdXt51j7HueFRemf",
  "key15": "5pibJxixMYFFKvseKH1awnttZ2yg1WJ5HfcVdn87aRUSLg1RmXDwiKYJbS82jyrZvkTzSHz1mWZeoLFez8cYhgQ1",
  "key16": "u5PUnsWSHt3hkz2dw9PG85QmRrsyqrxTA9jf4ayyw74JBFUuHXXeGMhvoAskHwyc7FUDtmL5W3nEw8PdFFJSCFi",
  "key17": "5VfPWEM3Vj8gZrZV8fkb8oLp6DtdmRuYtPavjBVmgYLq5YcTaNGwQ7PLEiPsoxQDYGcJ8AAM2yw3KxEmxLhSR4BH",
  "key18": "5WNZzYmWPgZocLnsmmeCTNjFoNDXsbWLJq45Q93PZHo9Rkom7bp76yoA8JmFQJQaTqcTCJ6U6Xhci1QXYSTk3z87",
  "key19": "4pDQSNwArvGWw8kpTx9E2CjrWGkZaVixZjF8Egusg7TgKwaP7yfLNaVL8kfnbdpmxgtyu1NLCfjGn4z46HwCZS2d",
  "key20": "4eWWYz14P5fmogXFdJhGfAdF7nArjhCRmJ9EJcQzBNgDZEqdB7HA9mkewuMbgrJHwxiHkEXDB898J8EoZGtgsofG",
  "key21": "HcYEfZDJavW6JvvBudjPEqHo9utSdBuaZmRc2YAb1sryARDtb5uiG66iTHqz4Vz893TBkNLKjKyJFoTUwGgVwf6",
  "key22": "UDASrWiTD1DmMAzQugEGzZ99XMzAFdTv3hJgAZnUQybLT3yXaChsJz5TDJDBLhCgU4bWTLzr22bEcVcjyQS8A38",
  "key23": "3AMVcM35dmQJu7yGVNrgbom8kqBZNNUuqB8jwcEhjqXsjar2Yprzw2GKcPc4Z3CYRrPZVumWmtPRK7fwWdeu8vP4",
  "key24": "S2oxrqbgbM57a97xKCcQMht2fkNaVwMkZw9T26DvkkW8bXGZhgC9id1mEzQhXqbnxycjrTv9LvjnWvGSCtkybqP"
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
