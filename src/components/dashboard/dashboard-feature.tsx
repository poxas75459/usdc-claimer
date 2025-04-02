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
    "4pLE8hEDvMomxH4o1hk55WXBp2ZZ59gH347iuj9uvuC9N3ANJHxfqrvm3Wixi2YXjqwGbF7iQykS2vggGfPATL4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNdthfUiah1ikEj6DuWvC9fuB4xqSSAoz7JHFsaT94HwNrk18CmKUaHKLkFVQkoVF6p81dQpVFZeMg4qPBHD8K3",
  "key1": "586mfsrMRPRHDpzGouDhNnX9GiDF7kRSzqJWsvWnd1GJFwAkF89dCLDXu5ZFduRNG8duy9g8Dex9yAFvK5uK812A",
  "key2": "2ZDdRkz53ocand5DBcpWHDxJRDvcQYM1LXPwV4w8VvXNMJpAyJeevTzBE7zVQCMYGpkUH2RfcWqPV3h8Eubr4zDz",
  "key3": "2PhGyZWM8cqrGaTW2iwg6bgS3g2bWxVTMcoTwy4bwKS7bA9HtvgxCj4inEkpuJ3ByMbVWtqABsuqyNXe5mqB93Un",
  "key4": "4oLUK5bceit9Z6nPv2GGUgd4bso7XYnoMPDiJyQijD1XdjCetzTU2jdutoRi7bYFpjPyW5N3hHgm8oF3Hq9pQ8WL",
  "key5": "3GBPwFdTt2QoFm98yE7pdkyVSKfmdq5FhFKjBKa42YzEmYhPaJVhkYALWQZbAWWnTX4tm3fw8LAbU8NpWB7i1xgp",
  "key6": "MdW9aaiVKLQ1bbjqemGSwpXV5fcJtpFPytCY24HsKqKyhjYHWxjxXDGTcdj6xLm7TWwfcextn2Qpa8vq6KruTZX",
  "key7": "23BWUXUybNBS4WTp3BwS8kGJ5mjoFt4AxnitYTBq8RcVAoXaqMGMxeGez3vTs8WQUSfEZrJxNtFtJwQcW9Y8iWbD",
  "key8": "3tfhK3EDybq97WzL9LPK6JtJKCt1QDJvt5GGN7yfTBjjHWghuNEtbLsSdgXxCUq9jDaUtYXQdUBB6RmTRtRPZf12",
  "key9": "3JHLwsgy2MVLQDgHv67vRNhVSMWSaRDM9h4Fy6ayixeWp7nhwjiDhNVkQyFT3Y2XEXkGpjVXnTtxKg1G72NKLQ43",
  "key10": "47nd3cKwqY8MKXPdkE4r5fHCR6uDCBftothJpRoY9hD7yt2YkxV282eu24XcG5JaLZ2qrc3yvX9U8AzBc4o93Pue",
  "key11": "3zGvEDSeiySEm3RfW6MHNfSi13c4tjVtxzbsfNC94dcQMHysmATYCKBGrNMmHFSeeyphD7dJYXmALQoHr3MqJoJQ",
  "key12": "3Ywi6ikr5Ker8WroXAC5DtapRvTPAqcQ7jMY2yfZ1fDwCCzZur4Sq2jv9bP1XZbYmVfT5VqMoi7NwV3DeSu1ocKm",
  "key13": "4mdDGpAtQq8sgycvgWHiaDyAg3dSFf9rSzdqC21xYPbgEX5v6vhTJMtyrMuw2DymGiZy1UtvKW6CQ8t9gDFRMmor",
  "key14": "4TiA3qQ9Hj5j2YoU9GddR1mGcrbRYvtJinUhgmFvc9eSJT6a94UAbabh9node3dKEA7iJTn8hwYywo8K1GPb6JiL",
  "key15": "5auNozwPRrBsD8Zoc2NJ9i1sZoL6Zy8X81TnqomuoMY5KoMx9asDNHSQK2hszqL5DKFTpMK5thagbqiLwXEao2SV",
  "key16": "2sUZS47t4ThgvExz5W8u53cJGqMwD3G2brCucfhKnjTVjgXq8S93UXFHgwr3aFGYDW5kHb3maWgCuYctiXwraVvg",
  "key17": "2A3LgerHvDCVPs7Ehm4dBi1BN4DrzWGFHMwJRXBM9zT5gKgai3zNiinEkmXEB7KpddkTVM3d6mCvNe7bRDhwewsP",
  "key18": "3AyX4tpnaBTWX7jbKiGgsWD8NJByiNJgLmxpBXE8ZzJoyQWpydxs6F24fqh72bGSS9bMHdoFbBx94rA46dp7fSh8",
  "key19": "537MWFYej9N7iprwwTJphRSSGV2jWcGJq5LPuKbz5vmQtRh61yqSbv8XBAFShYNwWh1c3KV1GBD22J5XRgdGrAaG",
  "key20": "26ec1dAgz91N3KaZeMzaDhp3QPX5Y6oatiSvDszgrgajn3TdacETict7LWk74TjPqNZ28taMtMGm27jC5HdzBCVy",
  "key21": "4zGvYqgP8pMxsnbbzDDDW5dVERWMJeRYqzGEVyGJ6PzVSFEuKvvpK4Q7hJNimQf8xABcMuqPr4btsyBEhyFMKL2c",
  "key22": "5h6TjSsMFDKjrpbY4XNC1mYBppwZBqYzTpbjqZVjZQ6Gz5bNVicA241vXR7aVMxhqMnuYzUducVRZoXDC3cNkTnA",
  "key23": "4MVVRH8NoAyHJSGvAGcp1ZGC9o6Y5opxNqF3KpQWV5mM2gBhKX6tVoEqq89oV2tMQRYwxqRwVRAMP6L7kEcK4aza",
  "key24": "2iePo8LaRy7D7JLc51uZU8Z6QZFtdiu693w5UPWfnYu8yAuT2g9sEvzhcUELaFW35Z5jpQojof19UP4nryCzXdkz",
  "key25": "59jkTsBB1nb8b4GRT6CH71DLpLV22GYySP4B4GMvL9VVSVc41DBdkECjnUuxwqESCE3R4HmAAVG8DjE5jZZgte8e",
  "key26": "L5oC9cQNBnKYar6D4MrBoqzaQ8rYqhwqaFEQjtPeNbjiqXDybF9JRTowUoyqV9wTC4oWNjY3HRn6VsDMHCjVaaE",
  "key27": "4HnGqdSURZGKWSpsDKGxm73F2BoUMypeTb2bgcXhTjxMDMM8sYhzUbJa7U6TWMErWW7gaALtC9TzPwxKntXPGerv",
  "key28": "4JvnWidzLqiRHCKE8U89Tp3PehsiMWJUrdArLn8z4rYmBgumQCzDVoToBJRXocAYjYfWNY9R5PeG3JntzFGL124C",
  "key29": "EYBuPNni9ctqYbZAyYhFbYVJXHxxr2v9AnkxXEcWV2Q6koKyUBtpZDdGPq5akhYLdiPBH6LXLxxLKMSLQhELVvz",
  "key30": "JxEBV7BtW9WKNx4Buk89X9kLa4kZaEc1mMKV3r9c7z5J7LwbPZb6bngh8DKFNP3P2EJQvb43BZGbcZ7qGjs92oT",
  "key31": "4TDnXwtikoteF6khGF7wzbyngfgjmcqHAqDWobk4oVeFxRAWYP5vqbdM7yA93poiUAFX1zFMGGTxMKQgmUacsbV8",
  "key32": "2rCEWjpKprduXBx2pmVDU3UWuCv6eVgmQ6sGDSwt9SPLcDQeTu4y15QM45wD3RwTqSbknX54n3ApbrK6xSfgkyv6",
  "key33": "59WSCFcYFX4tapBV4qjE38zF884aktiPF9md7tmppbYYFFzf5qDBHtHctLrHAEeQV7brfUAZXiwaP8WdJYSeo6KJ",
  "key34": "41hKQoBTFPLkHvu39dZMFRmZ5vmTKkbVBH3LYXR2Gjs6KWSK44BsZZvFFwp4BJTBrQBQuayHFxytZxwiox4pSi2j",
  "key35": "5AZZ3HMUvMCgZCNYQoM9LZVqLMwt8NZ51dL4XJmvMpYvKbVqUKsXPVC8XGtC6dHssK8s4KTpwQEP46pXnUvAmYXD",
  "key36": "2soZASK4WufSpqqmuNuzomhE5c6ZFhwb35ezMkGuFXcKoEnE7kNEqDQrhGgDpQSfzuSgHxBD5ViqwQwjHfYQhP86",
  "key37": "2EzGTrQL1eTWpDwNmoqgMhdzF3mpGibDJU1dRijw1FSc6xoitcDb1VfVRCZazciAKTxzziLY8w2GQTSdToWpQDRC"
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
