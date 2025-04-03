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
    "3yM5vuGKq9ptdAEbZR1LwXbKEhA1cTGaQLvgH8Q6vq8cDqV5mmCo9zVmamQ4JpjjqRwY2Gotz1md3WNgMzzXotSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwYb6Rynak6d334sUZwUbphB3u8VvFPtnt54kSnXdQhRwiSko9ZvqhiUrVqjWCjDFtjTv2dpDKrCoZcTQwHHEm1",
  "key1": "33rW8qn8ggeSWLDZoCaDxCSk9DJMXscLNgAY5d9ASK6Lp32X7gjLbdQ7Nkc6nSVQ6ijWePAp3cY16mTVJNvYyMrF",
  "key2": "V4UhAiNYbQXUnUoJGoQ1H2DabdZSFkbwE5P5g5qchF22ewVeoj336sqND1GyfGc8MA2ECpv4CjACm7tYSFgEwNs",
  "key3": "4rNWEyTR2PG7YZFx1QJR8y6rojcgsxfdSd3mAoMSfgFEVsu1gBihPJpSEVkWXLPT3hqLgDQZSfwzpKZRttmTvq7N",
  "key4": "49XwkWKtNQKpES1Np6yGUoBuSh36cBy13vYpB8LZWJyr8YkoMDGUtvWzBEU33tawyoBc1QopdWmDkYY28DxA12Up",
  "key5": "3TWaz7kzkGtnTjeeSXxaTKPhAKTpenhyuS2vFQMbQQPWVf34YKdJdUjt8D6pnpCvgmaWAQWasgZoT8H1N2unXVyQ",
  "key6": "3HQS9sYE1DyeqYL5W8frUvqg2VqhZWgL2AEi3Nc5rmQRdaSPLkTY3bt17Am3C9UTJ7tEE1jrhgQ29YVoN9HfYA7J",
  "key7": "WCYuQ1YCwsE8QWsdsw1q3JnHHGVzaAQjTL86VHKYMFR61aRSkhjQfUNCHuCAcHpphw9JaSHcLv9TSXjeUdDioF2",
  "key8": "GkvDAmmeYQvcRdKWpwBSXdPo3TftC6kWkKdiR1PBEJimfzM9J2oj8XwAwH5jihimXfSPNtFw2ftLpav5MpD5d9b",
  "key9": "uiaTeJP7XKphLRdpraCZGYBEyis4Hez8oCakSGKDSrgJTn1ew5Kca85ESaopMGsQ2VeSr96c9yvf5kDSTh9WuiK",
  "key10": "5SHGrh9igSUHhknNJN8MQuLq6suWsrcyjUJo1KK9axDhwK4ySCeF2VGLnEu5GiYpLG48yqRWnngqjJj5LC4TBv3v",
  "key11": "USPJk8CAwiGXQF5S27kEfGceWbkiqkFQMzs6armQeWo1iU4rsD21aHoE5fQQR4eohy8Rs1WkCpCNoCKzPjrAQhc",
  "key12": "3yaFsuwirij6UYgWYwfaMhGMkdZrMfwDeAPWbhQtivAvXZ5PetqhopUDKgTck94x2EY3vFuxeytUzfDQdBHgw9oo",
  "key13": "2TrWxEM3hrR9xVEAVbcLT7iijShx9KrGZmWEHuXe5pwJSf2oST85Pre5SMnKmtFsiJ9ePzTmR3QqGf9GEFjtvsyy",
  "key14": "41mexFkhtprDjtZjqbL6kHo8557zZtsFK3pWZh9oajEQuJUsPK9TySBXFZ4HyUqVFqr5ada5ohs5jWEoWB6DjXLx",
  "key15": "3uQfHKo5YhM6kfhiCd2eHhjVBCrKzVk5rU3iqd4H7dBierRibXWrcHRXqHx6mhYEzpGMhi1AdXM38MPLjd47Xzay",
  "key16": "3L89anPiSxQcJvw6XNszybGEyirvtN8XkRnehiHviPKEHp9K63nyedrFkfxQkzgmszqMspaaoRvUvxL179HNzeyg",
  "key17": "3Z9KJUiUgf56cAuCSRdS5B3WgvEyypGdfQ5UaWb5nmpthqLVVUTiDYagQ5PjdSxDYzjBRqDseTD7df7fGFnpJ15F",
  "key18": "3VQwt3zk1NwSFtLKeFk11qRKCBHWciyTaRjxkzv2qnm6iLWSvVzfsFD5ZywaGNxEmyKur9tTLrNvSrerPMn419zb",
  "key19": "62azGHRgbRCmMVJpza5ckh7zUixa15Rruqjh68X8fvxBVrFdiQJ6ThbXd8ZjvczxfzKyLaGhF17m8DWBHobvDYbC",
  "key20": "5NDVhYwqHz4kMpQ2aBygwe7DkRPoGyYSjx2K1Yb3eDhPtFG7111n1eZdTZrYYKBDbY7P38Ev7fA69qrmoP3uQKqX",
  "key21": "4rUTgeFexn2q4PRXLahpdtZuQgXhnDyuEV68oy8hTPSWDLNA7tXyvfbXUNYgPyXaqZaP2P6fADGq9UQHqCzZfzsx",
  "key22": "4p1HkpaoVhKerWy756DVZaHH26FKVMALJe3BQRQJBzeNsQG9ryjt91AX5S8QxckrUX2MkNmXp96n6MPjgm51tgiy",
  "key23": "46iSemPfaj64jBGZ23nXhtRnT2zug3xjW9rhA1WXVVim3XfVG6wXi1jfJZdTaM2qbDJukEnahX2AfUpyZr1nv61g",
  "key24": "5JorpUDodd8Lz1x62yoASmpCceWSP5sh81oXZZ5Bmq1KCCx574bA5LJ8REa7huUajDaNgKafv5qKsVJJnWeLfCjs",
  "key25": "3NfX7STWqjuxPDoiGXPUJT8dQD3CND6Pg4TGfm5BsUejtCXRXCsmcLompfqneNBjqqgNoeFnYSMgswudQcUHaFWy",
  "key26": "49y5vokoHGeYpbbSYUBq2WJg6mGDxakgqy1PUJYXZ4VdUGWna5qFJzJkpVPMAFRArqXL5fcQ2nhkcp46Svih96sr",
  "key27": "2SrkKdnY5VANnbwERFMUhUdiwRmEZBLLuPMrUCrKJjBWZNnrizpn7hg1P3PxSkgbexFhDtdrgF9NDHgXNXKm71XX",
  "key28": "3wpB8zVXWfRx4rWwuTmrCvFy1REknUBsdYKnCwXz9oYtJnZEDrAJGVSTPL3UM4soeAqFmq47Fcn2Xab1K1bRvB5h",
  "key29": "2KbgrZo6xS82gBzZU7uJZsvCZDEv1BUQWg1hHLPBwWvNwViCntS6tDBAdxpDNiS8Kbf4mKVamEFYntRCfDLsPsGN",
  "key30": "4ynQaH1bbXM8anoQY67mR2BJ5QYqMYtyZNFLkoLWpPoV2m1NPppevwRFy8CC4EAQsmZzXA1xKPcUQUuJPwHiYgiv",
  "key31": "4h9aeJonQ9Nbqk7N1gcwiJuR3NHMZ6B5LBdvV5rGXaaghtyX1F8HderDDtBTio6xm2sSWVXwKiV5zhqm479DCqyM",
  "key32": "3YurUF9QeJ2aRUvMT5EnmycpAdKKA85VUsLeF4WBVmgSqvWr3sFBoR7gP6i3v9EkXAu1iYPN9voopdYeNTFdz95i",
  "key33": "5pguBrFmq2WyCd7Bgbyu6QPfkbbqLBKHa5WyLA5YndDKN6DbZ5MPZbWrpe9Q62k17GRBPrhJsgry5okGfF53tJgj",
  "key34": "1uqxXuYF8xhfz4j7sBBzi4KcJTACdtkFUefkbgsAyBwZcwPZENuBkiDM5ZjRnhF1AJV5vEBzb6TnAmYGQmQdhCF",
  "key35": "35r5dNPrXxxuqGzhBNL97rHrfHo7WZu4S7P8xFW4N4uqjggGPfLCsbKdVx4cTiAEbBnmrUuEevqDpR3CRfw2sWS7",
  "key36": "5dA7fyuSQcXEthqHtQZ3bupmPcMWZj5fpFhbks6VRPJXNWXSd3TWTzwp1ufTzmhi1S72ZkXqN6p3QCt8jTS7p7Rw"
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
