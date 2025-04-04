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
    "5PfS2xo1tc4vQTe7iNQQt2UXffG2Rvd7h9UW8R6BLBKkaHmNJ2kcJCqXKJxk5KhyNGw9Jpm2iMFrrHvhtjcp5T9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LHBVDz9XqSFDmYG6Txxny786PizHA1vYTgDkSEBJY9UPfPWwZBLh4cgyDCd9AMRrp5ekoSKtiypcqN9vG2yEdxP",
  "key1": "3rsyFHrB1Mk99mHwidFiDvtiQdWaPA2NdcPiZV7fSy3jBsjt9G7mJWPPyF69tTJsR97GX7LFjonhmzhKQ9Ws9vkW",
  "key2": "ws2vuyb8otgRwV2DAvKfMfs1v24gyqJQ4icGGgpsY6YrTaK4smbCWZXdkcLijqdQztm85crtaNpyHZQBbcdJ3UV",
  "key3": "2Ym7BmYp2C9X4wJAhvFsF4SHZtEBzcW22to1LFoN2kxr72bbxwALpAg7vnhPVZtGQmJv87jvDTkvqhRZiUPUvVzw",
  "key4": "2x7h6BK5Po2bFw9TmfmYDsAMSy1JxjkZXLY6v99wMoxVNatn7JzAUb5t5xgq7uHtDXE2DFHaFrEKX4WfwAEtfpVL",
  "key5": "5MfrWSLHWJtJmc9GkQFwKhvGd2GWjpyjy6R175vMa4j6bWQUQXzU4TEoXqkiiVkxsjXB8TZBwSStjuE6LH4SyxbB",
  "key6": "Ww5zAA2CApoy4kGUusfU9QL5LRjjVvNPmDSyCYHnR5StRabWC5F4Jgurtp8ZBqHG4ieDok35voV8fHQ9vTczFJU",
  "key7": "N86Usz8hhTS7CYSD6Jd2B5qHa9byVMvXpXmKLwCZHX6STTWwqgQNL7d2ZjiJ38qAHLdSoe5UaE1RWdbjhvuH1yF",
  "key8": "2Jadv42bQQiuY4dSESF8ZLQZn2tYxd7kw7RXuLyAr5c3iMbJEBevNmfip5cgEvdunKef6vCAgaJqigxVt1J6dtRD",
  "key9": "2JMx4F2EuAT1JpYw1grM9TQCPrrucLPE8DEj1SqWxqoqXJ8EvPiwSviUynXWCAdj59eCNHBietbh3Uum4rk95Jwz",
  "key10": "2nakrPDQXgbTAEzMJEwmRRjyBpQdEzUWne83vFVqid6gT4iiYZXUcqKEvc934VZ1FkBBGoSXceYqcyszMmyrAthA",
  "key11": "5kC561RwJiypoSioagaREZNMNVqq6cAeJrp3FXSB7BoRyWGbq56tB93tpHjDTbstUoLmsq46TwhKy6BrsS3XqiYT",
  "key12": "2F9LENQmWnpTwhPxonpRjnMj5Vnk4nZcBwmBCS63dzoU4XrEezuSWN8TK2E6J7AKrks2kck2uNbQTHZQFxbf7VAy",
  "key13": "3FYJaKjjWDVeAZwpZcd2UQAGwgy1joPsRBsCvHL1VhTe3bqKtyfFD9hjb97UVLiPfSKbZ3kn16beKnstDMmK6yvw",
  "key14": "3CRmKS1LCjqSkcjb1zC6fS4SXnvcLshtuKeZtyL6v3dZcFbZEPAPeafcFSR87sbgFFKiQjqxm73ijaTLFjcbnzeM",
  "key15": "2wTcRKvqvsmvcTCxx6h1srmoJR1ZQsqsx3YP2osGqekH8vrmkvNxVPErDrKkx7JMiNM8P3DGecPmaGvqRKMr34Ey",
  "key16": "5Wv3FjGum7e5pEeNEPaG7MyrmLvA4greXtsgGuzzc9e6uWJrXd5w9HgKKktUX7A3rt8uGDMdqYBx1fuG3NjkG1Bk",
  "key17": "3CgTFS4Sjpu4GatfbTT4CymN7sY3zee4CaHNZ1oUvF5xgw6UxxXCJY4aPL9SefBtX4WepegZ5qgXcdZxXnjdzQzj",
  "key18": "5HFbTCDyRSXJQvhnaFJ2wtU1zZmXwrX8tP8j1NG4oJQfFGc9xR2TZXBFU6CXfgNZrya2eGwBLJ3vLaeYp33awAPh",
  "key19": "2hu3PcE9wDzj3aqM7HdmqM1f9qXzGLLi19tYpBfqmvtcPgPifqXFgS579Vtrw5hsj9n8rhTfZHuYaXvxtDVjqPE2",
  "key20": "5mKH5MurTvhN4u2GYYtSNPJfqsTKjdv6JWFEf2oGoHc61TFUdtASjTakwe5wqa3vEwfsPRRyThdhLUbmkeda2PTi",
  "key21": "4Rd6VtmB662ryF5FnkVV2YHkDFQkoTMSs5BzokGYyYofjGhpMQ6hDTpJF4DisREhUWNShZ37neXZfzbjckbYssmT",
  "key22": "3QxTT1mmJBbErk5BTYybcTEXVrYjynPswmvyNAsqhNi7n1sMa3w436E6EVdSnmz4DEvjZjxbBRtwMSUTb1YaogYc",
  "key23": "4NAVhXpQM9kJ9746YyRxauL62Amsqv7uQroR2jgucvZxLJQ1kcYnBpRN9X6QXJURgqyYsrxc57Dp2U8kHUCJULoh",
  "key24": "37Ki6gUuYouTPM5ASC1RYL6YpSaXvrRjTj5M63B9t681b9tDF7XQMsLdooDFsXmERMBBmVqe8GSvi6jrGjrdpW31",
  "key25": "3gPmM1p6BXSnzWUed6MGhLAP5QHwRkL1bNuJihuGREAEXn3QJVy34FkTwQx33ztSiLmphew315upKpQL22sFQF6i",
  "key26": "4NbFVvWuNkC35ToCDAZwWxPQ9EKQZUvZ7Y2SWNDNvEJ1p3zA6k7S9xvg3e96UepoJ8twF1auuaNevAxDfjiGR2KX",
  "key27": "5QafdoaEYhzQG3qJNN22adYC2BZD62Y339MZXi3aEHFXeh7TjHd7QfHL6eTNuuj1Z1nTyEnonm3auS9bDPMWFF6k",
  "key28": "2NfDTbEBP2MnUtEFqoNk15CBRxUFVXDYNqcUaFhpJ5uPMSdYVRtCuLqG17jk4R9iqXjm5iMbxPLQ8KgUB8kU9oc1",
  "key29": "3NMvRVKwkhw6twnhoSxcdXdbS3a6Lq9ZNibhYTpWR3k4z6SruFkJSAB7fWRtYF9rnTMfdajLasZjeq7AbzFixPY6",
  "key30": "4wEkwnRYJxZMy47YnT4marS2VEQzCmfn3rxzBTM6cPxbQ9ZJwMRRUdU1Rxr532NkFr3sLWEgEL6NcBreqFzNSYhc",
  "key31": "2KkN3W7EvytzCWn7PDZVG2XzDJayocZT11zCYPpNrnXw3UkysohEqRkRNVUG3PTxZGUcGZvN4yJAa42aZQjDEGN4",
  "key32": "LkcUc1xi3XvgnC98YhG4S62b78mfHrwLw6X3x3psjQRHo7R43MMmmYvPcL4Q3EHsRLssLsarw8RU2EpH2SCQ3ue",
  "key33": "5iqLUfK2AuKmbYQemcv29MX3GWzeUcCyEUsetGwfAsG1rFb2wrgENFPgwQM1XMi6gGDCuiCmf5ugPe96PXFRBrKR",
  "key34": "49btVVpcUqP4qYJmuwktx2Sfdiq7XCagDSYW1UQcBfBDmd62SXy7MxaComqdpo4huveCXZaevehtHuvGFLn852Qo",
  "key35": "pTzLMuKApoisqfb3mEPucuNpRdZMNUCitedp4Fr97jyg3waH5NjpwjCynV2AzxDL18Xs8gXJBZu1NMZd4yFfy8X",
  "key36": "EADpzSNsKTtDPwFZjkLJqMaVD9g4aSptgU4SgjRyMytAvPzRLEdcvqu6zwDLVj5NmdUm1KziE8SU8vLdq1XZzyc",
  "key37": "2qPDtrLyajAezWjSqvUJArS5kyjfJo8iaBzihs6G2gJjY4FTGVvo7Tf5CYWoqqvPEpsrjRUqbFKyotoGWh4Ftdgp",
  "key38": "5Pm43u5oz9XkXELUaHPeu9b86irSaspi4SJyhnKoovZjyE2oZTmkp8j1aRFLocXiWyFYyATG1yogWQ11QcdLdzma",
  "key39": "3zPh4RmPDhXkAcGvmRdK5tH8DnSPxdKC5gKp97VAHkgYogtenyKnchenwBGk2jsDURmW7mBgk7fyw4WmgfBycETq",
  "key40": "2gTb8RGkudKTGC5qBEMB1ZjaYtjxMBBcMndMhxSdHTWRRAXvTSnfKeFQ61PtR7mCW6yhfXQu7rT4at33QSw6Ajxo",
  "key41": "4uQaTYDciYphR6db3xvnNwATNBX5WEK3QpPKYBrZ7MQ8oC8thmHoYqDzqfXQoduAcX9jRHmZgKgDv878oZ4TswFE",
  "key42": "4csXatGf9Hdm82sbVUek3X5cjvMkVttjyYZEiLG48HgMst3di6ss8rezG2jKSvKzpAarK87zwgyytcMHj5U1xLbp",
  "key43": "jt9pgqKnpG6rypdT6TkYMBkFGUCUfK3fzeqmkNBD7Ak179eajjEDCXycMMBLWsEC28p8rYP28LxNpyiCF8GLou1",
  "key44": "2zqnYyA5Jdkmyc2TpVRr1aezLVfEKiu5k1HMFZ2JS5T45NmwFNnL5GSX7qz3anuKeNfeGMpjDuSRLYkUgA22icpm",
  "key45": "2kF5aHaamty24c3rYtkTHFXgNU1Npf4pbFn53SDb9iJjZVtyc22Grh2EaA6e4Yy4iRPyg4ocfbTzDz861segNq1Z",
  "key46": "2vX4vj2nqr7RmvMnvx5JHtE9cw9C7H6pyrckpPQJE6jGfLNk11vwT8qLxZLJY8Fr49hsbtSk3RURabp9rDYDmKto",
  "key47": "4NrkNDoERdaxZHxZ42p59cyUw4qpNAH3pejKDSjyHzDc3ckL6pJ1Wa91jLePBMFwesWmohFgq5FfJSzCWjY6LwUJ",
  "key48": "27C3H7CVzPtgYaynkWuhaDscJEZ2JaeKZSkcq23jxwh6YXjgYXZiqEGphatVueMvW6M19KcQgu5wQEoGXsDV1Epb",
  "key49": "dNtTzNzD56JkgoQWB51XWpSvg9jTM7qrghHrpEAuY2BKWxkB2t3Uzh6sd5oxe2AwFib8pnes1XPaXTSNTtCEcue"
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
