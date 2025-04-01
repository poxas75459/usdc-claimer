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
    "3w9e12gZtbn88DCoD58ri9ttc5P8YMhjVwQcdWhe8XaBmcgx4v51t822zW5uasD1A8bZgSAdEV2K2eYbW13GGpEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b5wefts3oC2gy2HyMKQ77bfdH1LfyJiwJpSgK1jtqBsocWZzjGMxMdX8aFFbbs5y44ct68hDmCxoe3jjB1NH2yS",
  "key1": "2BS9qPrmFHu4emDyX5MFjbDW89idj7BU5SUVYq9CMuyZexsByx1NQ8b3L6zrUKbrQwkQmakg1g5UoLqfx1cZoDbu",
  "key2": "3vMjSmVhLYME2pkpXfn1xDzGEuiWKgW8pQoZUgi3LpBt4Mg5VqhoNKJhYHvCGTHErzb7Y19A5bMyH8BL2krQchvz",
  "key3": "3fF79kLT3rVXAKonaegs7etL3y6h1HBvAaAo58KHZ4kh7F3DLpMuJBhyYLcZ1phjSi1wck8czZCsAxUVxbe8b6Mv",
  "key4": "4cah7ELWg4xzZXzo4d3RijrpHTwec5oPFgJ45eYBsryJeZu1kozb82CxyvyjpPwNAcvf2A1i6vTFCVM69zWZo1WK",
  "key5": "3veHmvLhreey3rEDTT6be8scBQCPwQC9cFz6RfwwB53r65z9BG9F1cQzeaeg1X6NSMjkw3AfcXUn71XuqRXKq6Ys",
  "key6": "35VoQM6YNKq3hpyWmu5NtTvdohoASkdDiZX79WRzQwQeANaiBipLbVm1Ht3LKi6sydZTZYoPSiSJtuvvXRaQjyfG",
  "key7": "4hhxSFKogiBA1i2aW9ckg2xSdwRo3z96ivgR7R8bGnPGqA7ygJRip6aCz2PC8CrAkqfpUeBnG64iqzca1YwhcQNX",
  "key8": "51mEp5DXSvyW9Gkhfy6LQYtfQwN5jBnBD7f5zp8joBwtvcvYjSRJ21FwcjnrLRYmmh81DLkS3AnaXu6qCkr7Ht9b",
  "key9": "fKTZjXFtuena6o9iJfRDp7FaQ6kjLU9byQ9hqUWFRz9ab8ndmTTCkTT21bWNZP8XhVuUxPgQJfhFgb95JSAc16j",
  "key10": "64rcFR4dsXmMh59ZKHaumB5DPY1b6GYH9cyQ2zY23zfxAJD4AEVEuqy14ZE8XEtzCVMxPC3ZTpXzBZzfXeBzp5ai",
  "key11": "4Tfwg5wVK6ot7diSu24cZpuRKsEnz29UrKow6FoG19e9uoM8dV2TNhqhseB8KiXnHKhUa5uMx2zZExv8WogpTXZ2",
  "key12": "5GmCK3DYZPsNdZdjWiEiozVH6WosNYdcPjskKSjBXVtq8UWALYgcXzDfhyFiwmjA3raGQQNKJs3BzWddCB5RJsmn",
  "key13": "45XcKizEAdUZs6PV87uwgrpKAd7Ny13W8dFjGkqNjmWzex7oeEHahxebu4YyZBnm3byzQu2VrtvHf8ADpgkhTabt",
  "key14": "3Nt2neLpXsV3oVG7wbFrYtBWSbJtCywaTZr92PdXEmD4k4AvnK7zAS3Sh3ZibegF4PFNUvpH8jMuNmypVeRytGDX",
  "key15": "5YTw97CBbhYoh7Xh3W4LeJWedB3DQkmqJVkV5QEZ5GDGWiD2RPC4eatMPPRRe6wzxN8T63vmB5KwL12pfp9yTmh9",
  "key16": "4j4oqiDygSDdZXKdri1CJn1nLgheSftvhjPXTxCiDmpg4Bo7uPxzHTg2v4P84ioHTVErHxZF9mi3zCm8GNk6QqaN",
  "key17": "GimwBFYT2pEHp22MjT8SYRHiyek1rz9Wx4D87Ke114K3oEEd6bb81SEu6dFrZ9b3iZGr7Nt3g6LUuXfyZzBVN8y",
  "key18": "2YpRiiDxadzu2GocfvGryc6qDWZT6od77yQpMBmR9wiVKDZM4adPGgGjoDBVVeThpQTRo6Zkq6xzh81D2EQ5MAsj",
  "key19": "4zQuVN16dNHkX41eynZqYtXqgHpFTQXt4w5HFSxc8t8vWyWQJep4KeCeZVwvEy3feHVkeUdPQx2H6aCx5ipCdLka",
  "key20": "4ptCNorVsV8fz8jyAhvW6V3fLHB1uETR9XMTFAoF9amQYLejG6hhr1QJbDjPhqZXLjxGV6aotvWEZKodTmpRoZxn",
  "key21": "2bZq8rAJF4S3rXbYo8U3waDgDUVuPEdjVLcwWjjyhvqFzU8c2Qg95L5w4Kx8VrmZW7nrts7tP5PJ6mDuiagP9yBs",
  "key22": "5m3ThN1ehiWJxHBPffMwbBSBiZyt65hGpNkJFKEM8wjVKNBRPuWkVmVpPTp33o64FiEX5ZrtmAnYpVoEmuZiYz65",
  "key23": "2CuYGtj7mhNvhX41NkCnDCMsV3WB9yi6MNWuYXyuU2rUboNpZTpbyLnM3abRi8hHmM3x2BMQjf1fFXntDdFnpUE4",
  "key24": "4jRbMoBSXXSxiHEpQeKyMPaNcdU7Gd3wZk476UQNX93YUsQHtjzjnkB2SFvpcp5vtrFbypktCcfa1w7wts12bSAH",
  "key25": "d6D717edZ8G1vZUcL7ersdy43UVEUc8XxNcza8B9akMeV1qKJ7eRokHTS4pfsr7eUwpxbMFA8t8zZiMsYjTv4cF",
  "key26": "3UX6M2CcJ1gueKcwPf4WjWb482cAjctzoKqSBDiRWmtHnyWEg4nEeVVGCKQt2gd3ygSY44kxNLWFz2zPbrC7gEYQ",
  "key27": "6q4KnGk5cqnE9wCNFLufQk6At9cXnGi272bhG8msokbLvr3DvsvegqXSraUjJgRh1d25JAFaEv5gQrfrxdgKANr",
  "key28": "26vk9jAZfFLHPGxf82X9J4RJ3QuSitpWzDA54DXMQ9AGuAcV3rgMchYHuyLraNWMet7GnCYzfFpJT3vhT4tZXBWR",
  "key29": "qeYCsRKY8LvjUadEyX9G9NXchrchkANBYi1VWv6FhYVn4nHBb5TnSkbJVY7b9S3N7zi6tBLQc6EjRzuhkHnwvqq",
  "key30": "5B7ksjood8eVkwiU375ssHT931mpxUWF5sysQUsxe6pjmN9rUkk2Fg1FBtiK7HYXn8A3hjPsQy4fdV62UC43axRR",
  "key31": "5jC96jnpFieuXQtBY1RGWcX2DB4sUSRHSUz7mBXpviXDiE1dXju3AvF62j5Xj6uuWD8qxpfyQaDkpy57SRk4J3DR",
  "key32": "63euLuKRzxoXcezkjCUwby2koGvaC3s4uSgBHKdajiEXuJMD99oToaJSLG3SLbJpj4n752EhReqfAeDRngDZfd8L",
  "key33": "2eRdDJCgxYVQDJvZT54oXeh73evDD3FLS5nQGX7w9w7EhbscSqEZLdGAbdV3aiK4uWcJQtsDLfxnyeeu7ukWbpuM",
  "key34": "DyzF3bjCNgUVCSGWHGUuEhTV5AyniMDjAzp82EctqiAWczoKn42SmcFt68qQw9ZhLhjWM5BY4ez4ah9yBZXE4DD",
  "key35": "4hZhc9S9S1eZRVi5rcvhNEiUuHvfAG4mmdngmJDsYyF5uzEyN1qWaZrVScYPHxCwqjMnvxL5sWfFRf3UtmS3ZMJN",
  "key36": "4Z3jkskVxK74SCkdbCijJ3nkH3YaFnpVwoxXAx8BJpz2vR4p7onD4t2iQ8ZBPmPpH9kSiiQ4UzxG8Sqnkj9SGmvU",
  "key37": "5APyGTm6F9qmZb5kmwL4gx2nfTA2HbF8nx1iZ7wUi4qycBU8UqDqA92zwKE61tAo1H4Q1D6BnTk7kQf4QQwGLqpM",
  "key38": "5aP5aFo4tTHjyRfNCVQ6Vp2NFEeJthtthGmAZnSaRtkhYnGQXvvJ3jF5uuhzdfi2n98zScUmwqfdUzXDxa34wwJh",
  "key39": "2dwckf4PwCrdu69QSFvhkbPGReTtWMwAcUHTYLKGcvR3N1GXzz49JnZ7swbsAuTVq1bYRLkacgLFcaTgi9rokLtY"
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
