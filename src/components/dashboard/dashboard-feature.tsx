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
    "5mPUSZmvqoBKteQJCpQ4mZ7wgAij559VQ1o1yVA8mq4ewmibkBZTZeiktDxMwWxe7yLrjYVfQLCTrBhjwUH3g4vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uM5jN451nBq6cDeGKiAkk6V8TEJV91KJKnaM9DmqTM3bYq8wqPJkdRbpTX3dfd22hM9ZbGXvwkKAPrAXZ7PjrkM",
  "key1": "567pV2jAuTf2cSaNjhLT1F8121idWMdP6ezyVP7z7qCxYeJHxAqVV58w53KYqHso4ZPchtpRkASMkx8p3cfJoL6S",
  "key2": "44e53WQroqqzTcN6xaBv9EBJxGviZE8ES8JAfioQNencq1cs4rRBgnaWtwjBMvy9sf2cEB1n2BNpJYMtLb4cqjV8",
  "key3": "4vB6Pk1HZncfF7k13zLQgNGbjxjsYs7wdgZtm4pXBxceNWJdD3d7Qy7yc8nSRz5aJqk8UU7KnrdjLPjyjRvAk5GY",
  "key4": "5dALmZHZdFMJPWnqFmDDiiPRjH4R8P52sERwoCYFExREjERgzR86ipcyjQ4u4t8UvezjtrovXYk55DxVV1YcqafK",
  "key5": "4QDrmQ6boUgd87aJgumb2er6pvirQazRTh8h5aFrwDtyNAmjHwiB3uJEh3yJp1Nh3YZze6UsbRexBLiRpor3y9cY",
  "key6": "563eMsAEmLPrT8tTQyXrzxTzgspsR5RXECuf2qAHFEj8pRutwKDL1CjuYrAwFJZnTiEMjCo6zPTNBTmrUsx9VoeA",
  "key7": "5LfVPbCzMZHW2WVTAbKVoMjQUaNoyWHQE44Xu12dLkZSq43Rt2nZQAUV8Fw6wE6p2uFm1uCvNMavtg1bKKVv3Vuy",
  "key8": "3nYMmGfATWBHrxjQHkMzHNP98jwTamv6XNojiAh88qe9DKvQkUegZUZF158s663LUgTsk49mYLLQR4frnNUNu5gv",
  "key9": "4yzVe4mYPSHNeXaoc28aEm9bup42kexUmMS7eVjZzFNKDKCpFwxY1z8iJdAvpSPAP8TyApJqHfHMsSUVSCAZ9F4V",
  "key10": "5n2h1rCs1wjNHxydyqekzf1uQfDBE82SwpdwiQ83t8BwAQTV2Eg23p3FxzN3NCi4EKjWpWmMpmyhZsrMLQs7v4DR",
  "key11": "4J5WjYrpsKHdJXZNfLqNGEEeK98vHpkmbr6b2WksHaWRCR95JaA9ySRMvhB9mRpqsuwHaZNBHPBKE2UkcsNaFcpr",
  "key12": "iuk9kgfqQsvrjsmonuvVu2rv9XK6UoT5HnE479caXhv6C34Vj1BgMRs5Dh6BQhXiDwiHUKDXTPqwGCJbMXtoiow",
  "key13": "3djM4V13MUrJtTtuoQburoo1k6u3Ng3Q4aAuAmd7nMvzfFmPPEfYtJRZdbRATWVjyPfLz8HuPrTS1E9bfcayFAsL",
  "key14": "e5sbHSm91291Mkq3fnwW3xKL7D5MS7SmLcBmQCffKmnXKkaTaSGt9iogscJycqzCy2QwotGyxjihAdcMqxzzs1w",
  "key15": "3sde2r2NBrwXAmpidAvcq2i3QAP41qpsej9ZQESrqthXRe6ouPRiQep4XzitDNkz6kNZiNponRNyvT412gw1zJVt",
  "key16": "AzS8TbP6oi93oC3A78gsPM3f2ok4qX4ShCzk3qiUURv4PBaGbXVa3c7YNtxTRZeGoZydC23BXT44ercFkaobxv6",
  "key17": "th2FzzTJXdxUZ5irWP5RK6NVfkkKtNKnpZsc3NQm8PwUVD5riFZHfZzswuoxKwFJyGYCwQzyLcxmzrQZCs7Nj77",
  "key18": "5MAVVWV7FnAevo5mzutjCiADa8KCwCuyGa4NUAvy4NEH3bmrWtMQvNZshCxGfH9GCV8qZrtVu8fs9JKGdLc8XvtM",
  "key19": "JpMrZ87xDAeZ3Pkh7kjCNLHbVgp33jB85ZcRfscUj3uTwvWgFwNTLeBXoCLkaY9svLHTfinwmD5gKsW4t6LVt4Z",
  "key20": "2M9boDDgeA4Jn9xF2citgXUKHrC151WAkuQuoBfcWsZaYqVDfuBcE3Gv9vW5urNFsj12wn4vRiALHRrgKMXHNuhU",
  "key21": "599dSvfJpcYB3Dge5J9yectU7XVNM6QcLXZX9KmmFdjPRXgT1VPKvQhXxr8FkDcNdU2XG6RmMSaPy8rti2i8s7S4",
  "key22": "v413bNhXoJ5r4H1UYYW9YQtNVPyyV2JahhsyFNkbswqmQgA2C2tiqzFmjdQQTP8Fwyb8ZeevLf9fB9Gwip4XDni",
  "key23": "2Uzp1591TNugSSU5hW1nGhvTLpmDMPg3ey7GyQ8hztgXmyjaKi1FTeBuNzEo7zaEbrjAw7FQoQ7Eccwio3Gbw6Ti",
  "key24": "35XFM7mZGDrNaWsQpbQzSyevghKSk1PWEGrBQb4PGNtvceD9VpmHQvHR3KGrGyx2eGjtkvXGaLvPvw1oZkRf82dP",
  "key25": "4HnRL5UAvw9SRE1PPmQqNLfSTaAgcs4UVYbK66GBQBPPzT7YjhfjHkDfyLaJj3L6KcbesxEDR8qK3x3wr8FZxgpa",
  "key26": "3HTq6uTizJKs1Ndx7VfTmAEs7YNAquNS9dMCn8jKYVz4LZi3uJficriaMiVNDnJ4tqzNWHQNwrg9Fqghcio5mBjL",
  "key27": "4jjs2JDBH9MJSYUfXRiYtKFJMaDxSrsoGXoPNi37Tzwt7H6nQHCspfU1CBEPjgcf54kRJZ2LFysMtPygA6ApgncN",
  "key28": "5QHadYrRvHNAhsebUQCAPpnKZhh8YDePwbizEaxcgMUAE8EJGusAtvdLVpupEo79ZgozY7kZ2vsmzSfp8G5RzQwR",
  "key29": "rPYU5QJ1qFK1DgGCGbwS9CaNMhr3EmR4mxTMj4p9yj6LWbyk5yNDfptMNtyJY3VFqMPRdgrirzBDoqM7mXLWcwi",
  "key30": "33ykUUqqTydYi25cfQz7VqRHEs5QHqmxapeoabbEecr22ii3EZrXUXxnsSKh12DsACd1w1crQ2fZC3Wdi7r1CWjX",
  "key31": "23cDbQE11b98YpgWTfpW7GVipKt3xHq8Y2b7LSbvrhnPAJSWumgPoVuusf87bJ9PVb932Tty6Q2TaKrK7Xzhx139",
  "key32": "UvgvJrT8emQ5TGtzS7dtc22jC3niPxZUvcTtC8dSTpBbkxdX3EagziokzeaS1Lux1naw6UUEuHz68oL1PxsVrqF",
  "key33": "3mtUjcNLBj7WSmWMiBHHnQa1fDJ1wnqPpyRBAapwMt2Qai9w6CDHitmb6NYnSgynVerGAoW7bmsx6QGrkHWY97XB",
  "key34": "4V29ygRJu9SfeuPu3jpLQvvzTZE6XH1ndCSBYptknV3nJrv436WbTcS9ZznhYCDZEiAwHq53oEGm4fdqA6nNj2im",
  "key35": "62iTV5CkU479cyJG1vPuenumyvXc3hPJUkJVkdAVBWVGaoyvaMwjF5vZHERDr1p1GzDACpDNaNPf2XYg5trVmait",
  "key36": "24HRaz5FbbUyGLCowU5hGpySVYTmawLJDQD8aSuwJ1u4pT8DREpsgcWMwaeQShvJoqB92hQm4v5dwGokhuf7WwJn",
  "key37": "2iNAE5gd87aCJP843CzqbfbUhnJJj51HWfGoShfaBPki4Xb1X2H2hQQCdE8Ms4JxLpLgdj5G64pNP2btXe4ceAee",
  "key38": "2MyAE7Udz3PWATWwadCSQvSRExvNe5YYwzFsTiyoxKBL4k4dy5XQTv4aEhGk13LhC5eUx6HKPCs5jfiYP3cXV3Sr",
  "key39": "4nu5HwNDUrhiA6ZQscbmBNxxTrpMyWQgzmkQGhALBbGXtd46QNpQiWus5hAjtnSipR4PkKQjCn5FgojvkUwoM8se",
  "key40": "278EeHHmEv3aB24a2K7XFGF6mdTV32Ko39injXxW75UJtssiA24hVHPjzxXvE6DqktkToPYqN6uubn8qqNgNtRtP",
  "key41": "i4PW7NgEU2ZZYGXgbwMiEaJUFcRQZNckM43uUv1D25MHKX3vK9NsNtCyeRaTrzGrtA6RGomeKxnXGB8Hi5YhCzP",
  "key42": "Vg9mMZijHc8XR5JdnPeLbvf6yTsaVWfkWNAqKQYe5gcA2dmTXw1d2FUAbucSde9arJar8mhcG9TfxCcyWdJqrmv",
  "key43": "4hcj12PbeMifEM1EYyjmK3Zt8WheBGqqwT1grmoLhpt83J9WBZrCAMWXjRf5Yt16peJ6wo4KAq8xTcLvx9yepVdx",
  "key44": "3CwyfLgNhwWodB8iAdADkckUav72Gham5VM35BVEL9qxVk59Fhz4qsyhQ3cpozDAwM3LQTEv1iKwYfRgFMga6rgJ",
  "key45": "3QxPDF2gPjAVG7ZY1WcqcxBbSWoxRHN2P7xxMiohZ1d1w5T8Q5kRwyA4tD8xcuRPUTAfJy5NKJEdURSH45hVfL5d",
  "key46": "5TvPTfyaPDqGCvt7Q8dkav3s8dJ462pqW6q61FB5pAkLbRNwepS5F4vrGEsmSDfaJ5gqTsRbkbyC9TYAKjxyx1ph",
  "key47": "2LyWbt3KEmvVj1rYprgeGrqdcZtZWNcZDJ6ek8Nhu9gz9EBf8g1nwgQLhDzmG8LDpo6MMHi4ZLDHL8LaW7Bkwp4g",
  "key48": "27mEUftLt2hiPoMB9yQ4qUb5zM7xGVRCh8RE3FLMK9k74y2SXpqHL59NoU5pBt7Bm6W7GnRPCbcbfnr1wD4bDVUq"
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
