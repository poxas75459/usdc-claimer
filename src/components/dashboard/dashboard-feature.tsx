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
    "3m8M2QVmB1kpH4ZUmRPs5o1bTqytATXKf7aJ72X46dWh4GqKR5XqjFQGq9RUBJnwKFzscqph7PVdyxgCketBiPpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJ82UYeQ22Prs7sYuLwSu5sJnMicQ79EYwSj7e4QfxLmCQ9jAxV69JPNKULRQKKwjHZSkyb7wXWuTTXxDdPSKee",
  "key1": "4aehi1zSGxZqfAkxa75n9KPAmhpKwT5QrZw9zNP8eVzorGHKMMU83TY91q558eubN38BwiKMuRGKnoDep6sDBp1W",
  "key2": "2KrJ6tu9LE4ChypXz4mxgSFCyqcsn4HRwtUMfsvS1NsBsHTo6XfbKtvZF42EbkoK9ZeCwUsgVScKdnQXkCKRJjji",
  "key3": "55mcrBrBbDH2TkDmTBknGW9UM6KNMTPdmRnRLmfC98Xgw6d7XutGHscedKedcsJ6ivWgh6cHFYP6RDUynfyZHeNf",
  "key4": "W3cPhBm41fpJoHxjAqvhvCReTtm55UzhfaSs2D6XHf7kSVCTyWHUyHC438zygG3RNF8gAPCsZE4uztDXT5gEWr3",
  "key5": "5QviVNgiJzbJk7jbb7DttJjYM4E1cR1fAVGRhapx3ncN4UemJ2VrJc8ArshmsfpTiSW3nWsyfkfjEVahp9Q9dib5",
  "key6": "XQBYjLvw9ndTwGmRQgJ5WibsMBRu3b88kdWuntXbxF1zPmQt7731PXqhk51iASXarxSbMkybKii2xDarD86cK4x",
  "key7": "5SfutVu6wPNaY2xgRdAUhBme8rp7GG4KznVLJnX3BL4SieiBH62GZBmy1YQPZaNBDqZbEWaq21doybTmPma6d9r3",
  "key8": "2tx9kLkXnSKbg6os6JBJWnArWbaGrPqEgeRchyPofSNGRXdu9TYBR2BmJMoxsZ9fHe1zLrCL7WevqCMnjoBc9FLv",
  "key9": "29NZS3PUjQNzG4nkmVEMDFZGAs9LtouAjfRnV1Q1WH2AFaSEgH3DSeW3UmoewKEU8phWzU1SmG6YZmhGUNSugbU2",
  "key10": "33DpopfgtbsTPLrD5ZdiPMpifipmRffDpQ8AP247RgGdPaAm22uimF4Bix4P5kNSAN39dMivwoptVMsiKYFJcMzj",
  "key11": "5iXLV4xyKZCdXM4JsPE8ugofon2t8VpJb5GgeAPrpUQmQi3ysE3V72hE9WzKjsM58PiMSP2gteXWTscRh3Vtped",
  "key12": "25qQVvFBgfFCE8EUsP5P4V361UnBoiphYxSb68FwymjiyeuWkp81B2C5bLRNS7tKRRDCNgsLZGvm6wrQu7nyvqGp",
  "key13": "45ct8q1sPWE3LJBuMRteiYAXnoWwcvWsFt8W57mxXWn615tBEuyNigox41oJtRNFW7xw93Pa8XUhse1TP9tZja1E",
  "key14": "3rdmHjQ3yHEmxn75Aw3m8UX45JGZDvpadigBA8WfcdUy2YDvijGvsXbzj48WCtRpAgsJ6VnL8FJh8x9kBLm8zCZ3",
  "key15": "5zidLYpHULBtf7wiJMyE61sp8nQdSWvCsTX8C5U33XsviyjDZuju1tHMnK5kJ2DaDkcEaUDLmsYqztwqXrvKiC78",
  "key16": "4XEphXNmtAvFhk1fyAXKsf17HjnW3dSHUJw7vnTQuPnNH2X8UARuVsewTC68teXGivH8Gd9bQK6wYEwZSZaBAc7T",
  "key17": "5EPnbbpzWLentqNFqYaj1fCbN3CHuLULsFgUJMxqa6TwXte6mNCr8AGYxTPYNFPvzyRWA7r6mDw3GxibUxEFY79x",
  "key18": "4zg7zMuiL9nRpqQbsW9VRc2oKPUaVpmxTvgTCNXrcfs2t55DFCCvN9avp5YDS5wVq5iP7E4RnCB2RMEyNv4HXeFz",
  "key19": "3mGnLekhpj7vkSB3hkQp69z5drLRT8pA3Ua5uWVjhUYdhqNqoRnsBv2KQKLzJHe8daSLmDc3vxvZNvLtvL6Wh5r",
  "key20": "2AeMVxCrytTk3aBpqDenkev9jenRzeVTDgktt1vVekrahtRUeYPm3n2Ut6dazG3g4BKues9uYibka9bdqMmB7bEF",
  "key21": "4DuUSLTKEpDfFd6vSvnU4FHeR8NEjW1KsNkcG1n9oaaES3PdpZPZUakgxW6p4PA71dtHPFgrCdwjuLSigYMn2Snu",
  "key22": "5fnNByZcyZE2pJNREgyZGFZdHC9Zbo3TtdcNLn8hAsPRAeWBiM1eWNVPKNk29hN5BQEU5xLZu9KhUFH2rgRSz2Ub",
  "key23": "4RXsgGXusrfcjY5e5QeqdLsWCCjGPRWzHRLSvsxsCzjnci9QqUUR9bZVprkqrgq9GBFxFhDCeJHBEBng3q2zY1ji",
  "key24": "2y38ThzNiuHeshTAzJSxhR6aGuV4DKkg7SHiynN8fT4b6ZWMCBjaCr12scxyJfDh9GuXpGbSQ9sLt7KxagrUTM2H",
  "key25": "3CTJ5KNAEiQRf2XWGZFVS1B4HtTx7a5d2pqajm6QvhtLtX3Fz31ykYsjyQAyjyDyG2nooPQiLqKWY3tkBugQiW2d",
  "key26": "sJefwPcGxbxJbpqNcJq4Ps28smH15xK2k6YYQWGU4WtLS35ZupG7RngYQZAbkoF1DNsnrPmsTaRevDq3Vp79DAd",
  "key27": "3DNMCKpXqLjTdFxSjH8H3AuKspdKevWG2Wk6LWEwWd6aUxonKKYvBvTPiGekK7yJzwXjRKYBNnuRghzibdWsNN7R",
  "key28": "BfqMPWzMYCtBNjxqWvmUFaYGSBYTsDZ2hSFcxs241CupV5FXbtVQbvr5JVsPCcN37YnBb94xns71eYors4Sg5Mc",
  "key29": "3cT2gX6eyVZedRatADHTgAmZBZdZB5E1rpN5QoGBJhHzC1waMt8VthbsbUUZaQJar3NDxAK31nskPtqaa5Vnbuqe",
  "key30": "4ciYXnnuN47P7JQxTgb4TnMAYj27baT6V5Pjf8uZeGcGxFe1Q8BsbsHeEXZ38Eua6A14VZM1XM7yjaBQjUpqKfkG",
  "key31": "2DCox16Q6w1QGVuCYgqfcjyGWhkq4WCWcyk8gti1oHUwb2gt3L1EnsxvyRggrszgedSPMJqp4cSFE7pWJamQ8sDb",
  "key32": "jjtemQBVvjtq5nVFm8MWxZiSR6uxmnVrq5qoQKh5osMb996QeNPyjMY9yL8SWCsM1UckuDaAVJ5xtPaZ4gV3fck",
  "key33": "3vWWaLZFe5shtHcDCDynshkp4SJwMF57J9VdS1f8j9EvJWZtzoyo2SbidsKDadFozwDriBnQCdmH8ymBW3KJk49m",
  "key34": "4YbtczY7RbpoW6QmFLqMmu1XbcDhiD3EuZHTMkX6dYqtgDA5Dn3YzRBfzrFzrZKPmRivzAyUAW3cKadd7kphjdVX",
  "key35": "25WjZYvLcBKpH9M1iDabFqjjZPE1EHM9pLyeQPDMQzbXhCv9Rmau6qxA6pR7QHtxbmPceootvghKyHxPAci7JLME",
  "key36": "5avRTG2ysUd2FJCskpqAZjaLbDgktGjM3W4kLSH2KvEARNANrgEVWfCZU2BEZFwJWNbPXEw1vcAYoF7dkwr2juEu",
  "key37": "61iCdAu3ZiNqkqy8BNZBeJTAbGowAfJVmp6UtJiG6gkTMwUzAqa6y13jD1EcaesCTDgKh5bLVgkzfR1yHjNBteLL",
  "key38": "5QhBD1fdAkoZ1k7n8g3mZMYTEMo4DedxnrsG6EXwmtigYEGJqZEnbqb5smQmdGXycBaAAPnFFVQxpwGNoiEXR5Te",
  "key39": "2zkMCtX6oPzJsAz18GqhPaP34QxFCNgqHyx3jmaX37YZubf1vADJ4eBWDJ3Vab8yRAP2Dvo1xvC9nYT2dPFdGL7B",
  "key40": "iXbXVkSRZY6YcuWUbGmujGZ8VDy53qEEBBd7ipdYbUjGa4TUGyDSZbFiADNkzFDvGC2PT3LJnbBn2HD92U9bJar",
  "key41": "5M56hgLWayVFUjfiiAsdZDEAnDxHX8hnoki3Ry2N6cimc6qNobAEqvVo8pVhuqbgG74Bk5tvkssjCK23dHPv5BXR"
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
