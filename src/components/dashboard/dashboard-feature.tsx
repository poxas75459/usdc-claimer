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
    "3Tz3xSC1iXsEaC6rc8xcr5PaDkTJsCFkoGCXuu4kTWy5Na2iF45zubP944hrodqbJdrpqnyfwYKTVruq7tSjydZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41LxUPuuWD7t5V98owa7cdgGAeNn7iCWQ2ph22rgwX6hFHuVNVKmwJrg8jNm3SJj4Jt6sxuyVUKWx5M8ijJwcc5e",
  "key1": "62VL1vbnRBwa6nqbRj4p4yXcwHhuNiYDnB9wob7zbpNbdN2QQkgRP69MbNpP8p5q5NgGYdPLai7VXGc6eCULz3eU",
  "key2": "5cjWdfgDLQfGbwZ5K8Jy34BtEUR14pQb3UqjwkQUBNbUx2RQtpdAGHHPQNo5vVGFmQv9AwdjH7FtMQ3RbYCfZ24V",
  "key3": "4YVEzG6s9FbqeymQ9M873yDu689QraQxgwPhKJoWkYNFNDZ1QSVy1YYFdQFowxsMtw2Ne5gvUn8AiJk9f3c7Njx7",
  "key4": "3Yw4h4ocTuMHbD2ZoNYLkp9erWrjmosPipJHtjXrZkUTZ9Sz5fmBUFgC3nc7Ww5SMAzzm2HE5SfGuNRRAS2KmZaF",
  "key5": "5noPMCzFkD6ZDzmqtggHDQKMppQHvD1GHBCzqjWxZ85xzGq3hmGDqXDAqxk7r2PHbi8er1qsjzZteWoB5EecR3kc",
  "key6": "567McZhJwR7iWeVy8BAa5JxMmmFEnarCi6Xni3yuyLHT9ZwBFZwivxhgaw94bFQHt8pUFT2DmyaPwQECKp6pM2aw",
  "key7": "nRMtMuLJdofEJZQ3L7Mchi6bSyzUjxa37HGjYq5kB3yqGacUTvZY7HU9Qxh6wB4kLBgj9PxsXvvi29gqVNWsPue",
  "key8": "4Wv4SZo81tV7X7xxxe5Xs3Wm574Lf2Sf2nCz9g8FAxMGDzVXpSruMDZZy58qjv2KonSTYG5fdFhs9CtXWj49sNKg",
  "key9": "2PkQXxHfVEYq3ZUZFg43afNbUfbgidybmAGx72cUmM4Te24EDETv2LkNeWfagaydPqmmgpwTHVWoyJ4NaZA8TnVU",
  "key10": "2FoCyruNxjtd9NjMheS94RAmKjpgMEKGg3GQ9nuCCHyPcYtfjYG9eEHSyaY292HsJX5K7ENGB4Bz4toBW6t2Tufy",
  "key11": "561LYyoDEJqnoEXfRELFMcmWiQEX54XiiacL6YAdnYr3En8hW2HdFFQk5wvXGiZf3fA5ZHRBzHvGWzwEnGPVb8uy",
  "key12": "gD9ybToZVuVvzPummry8MqVvgNNphuoWG7fN93QfFYQUCptTYVymtNcFqNe8W7ZGGr3W3xhPyAfc28P7sshHkrD",
  "key13": "3nynLoqxgtPeRXT6WaTTDZD743KiSwAxSxhaETSnhDKccJhFFZgabMyt7jomA5ko3uXESFb7ngK7dieQNGmkKazf",
  "key14": "SLGaFwsR5pDmvoWe6M1HcFyFufqVdAtRCHqwHRfTxbNRXPsXF2kRpyoGRW2UR5DBehhjpUemAV24HPsMSbwwcQ7",
  "key15": "3WeLLdDWWAQ4RopBEgaq5628P6zZCfT5sM9grrgQfz1kqYTmWfrApyLJB9vzjZZifzn3tDFH8Avmw38tpnRq3kCU",
  "key16": "4Ui7H7PbVBUkvNdLgYB1ELxZof6fNE82mzH976tE5tWGj5adEumnAMNMyReHCtRHVo4RjzdfdwbwaQJLZbeWfpYF",
  "key17": "3qpaYtSZiiqoL7zymChj263MYdQh4a5unA2Q4Y5tJTepw9PY9KNgoBtn5DgA6SR1vQx5frWiEAYtJMgZkppPMnDB",
  "key18": "2UFsxBnkFTY5gvD4oNCVRr5t7CdVgKhAshSw2d9jJmKZPLEhK8uxESzQpWpwEMRvUEPyX97Q5gm2QWazgBiBRFzp",
  "key19": "2CpEjvZhWwBRDSemTAu4cscZwiU8Ld5DXsP2YgP8mxpbL23eGnH8jsRQ1QNudeg1a5jnUFLo1XK2Pt9EXUeMSTfM",
  "key20": "3kdBFauKic6K7JTWFwHe5uabLHVmCswqAZyHqQetyHohbnRrPzDnsHZCLsD7EKCepCLgD5cbQLkDeFh7zXaK6efa",
  "key21": "2pE9z3U5CCjba9nWgXggnZYeUP3fNqgca5QAKkh9J54QgP2f7WUYuun7XdQKhYjtpb93JHFnnUbvBhaVToiEVPUq",
  "key22": "5nbxVqNugULVNPX9Cv2FA8oWUhL6xAbVvSF9NL3iJa67tYghj3VyGFB7BZAgjYBhcvJJByaSS6cLoE7pTkYgxF8x",
  "key23": "47D8Lq1uZR1RW4X64ky3EcEbbAxi3FrWri7VHsSf934mvoCrFmRx7mVGN2QmEp3nifUe9kSvpukrtnwsrDj8FJFb",
  "key24": "3qXroahdjz6vfgCCeiR12KEaKYGGyeyM2eUQkgzEKw6rJgKLRkaUsbf7tPfKu5hNndfkVMQaEAaboxQnvvhFRvXC",
  "key25": "2DVT1XbEDkNaUVvosrzGycCCaaeoDf2gUyRj5yWgG6HR2fnxpuWrXf93jnjdEUPmcKjsfyCR1d4AErm3Dg8G6PSC",
  "key26": "5N3nffFuMfKMhKMV3cvjaKG9xgKdF1uWYpZ8i1KrAfrSZYAagJNeE1UdkKoeAdFV8YFRQBBKyDGQCEC4CykeUUnw",
  "key27": "4siFTdbxsStWWLQmo1YVMQYX1qG2h13eBK1t8rU25nrXsE3Uv4uw1f4EKTATq6xjWyRNSYD6N4z5rxzsZNxTnDJd",
  "key28": "3GmGtpVXUuwzbTfmDjcpj7BALaWQZnyL8PUj7XCYABftCPoARVgiJacRN28CFQ6xcDkcxdGckuaYjJicggiXnugo",
  "key29": "41pqo9XJ93jK3rcA1GYibUygMtecPdNUK5C5ET7Zzv9KsNg3teic59vVQcx3pbdfBswdkbnMLYiNohoEK6tSSwQx",
  "key30": "5hLkeKamBsJUDWKbUdsFVw6dadP3mp8iKbnFS9cWcQ3g1waR4mTDUSzrSCmhVowPZqGhDHBZTt4ewidkK2XCHmuU",
  "key31": "5SAViXko8ejtEXSamVgphgB4phafFmgcJsEZjJFSxh3dKXvofA67zwfLu31bm18HteZhjzdQ47Dg72gKHu4bik2i",
  "key32": "4mP1N1GPtLkMy1uA3rvR5G5URFkpfNWUEEr992L62PSQrSqRNfLkRPuqSB1M3KSJRAEieegw47D5iGZCHmhXTX8M",
  "key33": "515gqxPqAmdEPQa8mxTS72LQYsecQUXhaDvgoRcaRgvr4AuxJuDYQB7ZPR2PX79iqcrFAakQtEwDXCYa3Px24Z1G",
  "key34": "5K4XS1q9CARyW7FkHn2Kq1cnJ473JJf6o8GWqGqND7uJmRB5mVdMV21WW4qHcEm57hDVFTpvbD2ihw7FSgPjLUMD",
  "key35": "iphPumCpW3E8W8hfXVbq7W5nvEcATyB7DoppMpHmwfQ8TgFiEfwjgGuoqci4ckd4LxUZcMYornT9SWkxPjrV3o4",
  "key36": "5C6Lvd4E9mJLy6bsWqTXFWSXqeH7z5USkwrtAQgFmme1KXvsSTfZMwsy1xreLhDGEhd9GPxDeiLuxgirv6Zmc97s"
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
