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
    "3Kb15oxbr16JFa7YNxYppvqyZ6e7UH1dUkxdmULF2rncchp989wYyXNa9nztVfszy8k7ki15CN83hAzLpMmWbEKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tErHSMGcMqigfRJgotdx9acbiXAAgLyPEtcXSwB8AanTMPNsLpw4K8Gh2z8dbFDad1mvfyuDaDsU1J3XkdLYqLy",
  "key1": "4hCac29cUPMdxygVxUfmgxdimmJXUEyLkHyNyKH44iqkcYWPf36v6CCSRerfMvqSqyy5a233sTYDsLF6LkocsK9k",
  "key2": "3Vb2GZuSJUJWYQeyn4JssQ8EAPq1ELt5rprEnxGrLFCq7rTfcxKBbkNScWLMUD4BQT7jK9pVr5D6B58E1NZcAEqS",
  "key3": "4PfryYSEM4QyxXhQcYiutbCHk5yiQ8pThNhwTk3Nf8FWN9ECh4Ebnna9btxvmSgKQRH9gRG3s2GZDW1BQzL49jrb",
  "key4": "27zVTgixtqViu2SdmWjwa8U3L8L4xPp1uu2LC1LCmYuVwmuxcjzA3uRn2VrKPfT7pVDiL7mDqyMD5RKkw2vXGo5P",
  "key5": "5W3bG3TvW2psHr94vznaneGmYwG2YpDLRm6ZpR2iFxCGiKXBnrtmfVaSuxNWdqC2eMJUiXYYGsJogTFvz4MvvCGD",
  "key6": "3oro68aRdur1bMpFzFbQeCmhigY9epErs15wiLrNkjZzXqNggs9VHs3kDUZhbgdhM8BFQEbTf9SpWRzvHn9gTYFi",
  "key7": "xSvs5dHVdkzR4MFUM2Snv5iqtcfdtE7rwAz5qRDwMGFH64okVkYW4tMyUgmtA6dw3uwzFQM2myQKormweXiWah9",
  "key8": "adT8TXQvMJGKzUfyEcp7W7Z5RYGYFRyiLWWgCusRosLdkmm9YyKE7za4Tjw9XTrxiiVfdztMuYLhdQhKhtWoowb",
  "key9": "6yDCfwWkuXHoz9RKVu27reAp37Yfxpyz7D61bWBjkZvhExaXWr55ryATqEuKKfviLb2ADkConApzZ9h5JDMrdtS",
  "key10": "5nfiZRcjuC23FCCgd9TKkSNNLafFXGr8EqW2vZfMvp34xw9eEeSZjZYeQHKtwMNKrES6d3QzbeemMAovFDhNKwRr",
  "key11": "YBtcNGh9BzMLXUdtu4qBcfc7XzabWmi1yKGSJ586ELNdobTABGiuoGs9ashLPA4HENcJ54iqUMGxJRfJ36cyBYa",
  "key12": "2vC5tzooxqoTw3kcxL65vdZofRizvbrgdp35LHxpbtvVoq6xiKPoqEwRGYfU55JPVgagZf3UbNKmQzc7Jxe7Xm2u",
  "key13": "4wMeYw3Q759K4ZAqXEYj77cBip6sEcaaXF69Cyyy9nDKrWsp8RaLqjk9hUJMZ2dVwgQUPkX4Te1EjJ6rmcP3CtdE",
  "key14": "tG8h7LsAAeotYajy2QCov5D1TTyj3CStXeZgo5DKGZpwJ7eiwDbbJWWsYgVukdqWHRqX3r37geazWGD7p1jXikw",
  "key15": "2EhGD7TLSz9kaFHnzMgH8Piy8GLoAJNb83W3ywF5MRAfnoYYbD3uXm3Br8ApfsvA7eSyotsUtdkbqDQGSFptNsSi",
  "key16": "2D9fWtv3WKnC4hbVnTPVpAFjyi4NQCAVGY8HaN6f8pnzTUyThS9gB15SVG4yR9k9nYtGD6Xoz6tE4xaNaVS7KSQ5",
  "key17": "35CYNVdobcyBGJRuwcecJ1StXfz8TPkMBGdNNxRRxJy2317Wz4brSCC4toAea7t7e6bVSVY9UBY7aSt3AXtn6w43",
  "key18": "3CZhu1FH4uAuTTn8Dw8m2LTH8Cf2sNteGcG7fjoPgtnM6Vypvhjh5CsKXdcNhTuKXYFLPmdArEmdd7BFtHjjcmbi",
  "key19": "5TGLTdUS5QHj3GvdmJn9cDvnQywzPXbnejPh4XSDLLHQQnQJi7vr5a69B6iE9gH8YtmXDj5k7s6ZW9Rfjo1kRp39",
  "key20": "5pm13tgysU5Qb5C4kwe5uGn4do3WKGGmYfKAeLi257sSAJiaJjSfRx2ADaKHnA1Fg8abV73XLjML4ZcoRuPsvQ9b",
  "key21": "4KWPsDqMM6GxzF1pGRpggxvhUNWaK9hYgKQdk1mPZaM8P3Atz7DCyVx256rqfg1V9wXhdGR13tfKZBdU6pbbgJ44",
  "key22": "2cySoEzd9RLRZrVKq2LSCoWfHHt9P8C9kSkBhNQbRLfrFyABJPVr95MJaJMxr6tERrELcFY2w3omcWDcP6xMfBHg",
  "key23": "5mi2aQFyCM8iWCigeFBtu3xZ93urTWX6RfYfP8PhbFJytc3rKviXKpu2y8N4vJe8NWNouMDke4drRKQx4CLRiPRD",
  "key24": "46htYBz5RndxqGpWD5hsqV6Q7M1xL2DL8VpoBunYizG2wjRBk3FXGK8Lj4mufN8kEgHPdxXtZYL7Tu6RgVcqzApj",
  "key25": "3HQF6gqLZmGT1sp9ECy8LGdKp31q9K636K5LDsG9qtiuvcAUsPTGCpi9BjAVtYHLmSaSGoMJXQBqNqxGsrSFARAH",
  "key26": "4EqPrYtNgXXNoUArxN1JMHE5bwvRsgWTruFAS9uitsD3QJc9dPGDaCvGu9fnw2zsABmLkDsd5x2xR5fQXQ1TUqH3",
  "key27": "2envm7EpRHWTQNWPqqjQYcJMibFzxMzDTPJJVEgRx1y8W8juNts7fgZjeJ4gJJFvQotA56D7w9S9DcDq6xNyUZEh",
  "key28": "5WkTrPScKKzt8PdgLEgbyspQnKcdPKmMpSZ7YS7DZAdCQxFE8cjnRgniJ3qbaFzzrikVUTrx2msXAuELmHes9fKc",
  "key29": "5CRWSBxbbCX7ecE5VhwDcfWi4ya98rxd2x8YheTh2H5Yk2RkVEtcnmTmJ6WFe1pBx4dFxpbjziodm3yjgC6XpLQg",
  "key30": "4ZzdsXcyiuxienKsYPNFXkPCEPvuSSsnq24z3v3W455yMCRc6UHuJyo7yHTBZKgMyMk1JaPJTTT6hg2cq98gVkMX",
  "key31": "4y4vrz3NQVVgz6oU88VWfk5SSHhobrCYxUykG9rxvtmgjmQPmVgkR9Ec18RpcexNisZB3asrrFPwC3JofetXMMWL",
  "key32": "2QorHz8Y69ZwSS2rr6eyPKe6Sc3tHg2UakR7m6Vu17YFJVavuTVYehzxAxX6NT741iv5uGNMF8n21gNQG9dcwqCX",
  "key33": "3SCJ1wSCLCaWdYMCXrDHP9KtqTiphJhxBaVXqFAToNaFZpso8aVyLxCxLNPyxNXi5cAdjUvKjChPA7KpgBm9PrRX",
  "key34": "5knMLuJufzaRjJ48t57KUgWuYDsDL29nJY8m2vF58Vyjk3Fysu1KDbV1ZpAF12DPe2oYnjyTHjpA77jEqq7J1xAM",
  "key35": "2fjWj2EN6xMmTx9Rjwiif5kzEspWa75qwNb8HRKeJ54vknnWGYxejMQVXEvmPfo6dzrTktfAokBotMu1ShRvpstF",
  "key36": "52ehcTXtHKJTgN2WTnM198TWVv5U1Bd2QteXLUHYtyR96QbTVACS8wJWd1Xo2hh4wqrRpkdqNAWNqnmxsCasRpek",
  "key37": "643fNVxMpNdD6ChcnVKXzxRarDhL6dsZAdkGhoQVzd84EeBmRkJp7tLdgoFA61HBsdpc8P9GndpyA2zqhzFixFjD",
  "key38": "2SYcjWvX87DjSUmhxgUn4ZiJ2QvwgSjEK8YQALdUFpqX76kATw4cfwu89mGxX77EgSz1VGDm717pTZUBurw3B3Xq",
  "key39": "4rQtjnziKXV1GyzaJxzGGGjpgZrWtNcfimRyYw6zVFbd9L8vdMejv9HLe1xXjDpokVbtSkTHQ3iuxZDZdAAhYXEX",
  "key40": "42zEu1cMrc41g3CzV74NvpSz5V1qHDy12aSZsc2ponkEyUCUnNXj8sYYS6KKkUWEiPN4dFApuS2AeENmmjk8YK9b",
  "key41": "5XPEK9bdVT148sgL1rWuPR41GR6H549z7Tfa4msRymegCFd1Rh4M7e2GCd3fDxj6jeUPj9MPpfnz7QMn5m4oQnNL",
  "key42": "evsNTTcNKxoNJPBBVSW2QXGeUh1dsN7FaJ3y5FJvhpoefqERtgfJhxGeMqBzQootoeJbmf4KGdkMvR4gb86CmWr",
  "key43": "32Et2sEDtpcYaYfuUeZsPCnKQCXejCuufuenPFdwza51W8GYZAGjkFvd1K42mWd87QDaTk92y8wESNFuqmiR8WJY",
  "key44": "ysACp45ZR8cE7q5gsRwPLTaQqW3zVcBg5T4wMAANKbdN71x8grAmCe632WjyG1VR5duqL8U2GgDM87hVomrSy38",
  "key45": "4qLV1uwUEaaoyMnkcwKJ1oWiSahvpDoabJagoZpSPAc7XEBrZBDqMUSrYXksrHox9jGpwHVoCs5RnSyqi81ohjSi",
  "key46": "64FiXAbczQbCPMgBbQm4a1EbzkGSaQ4Xcgnf6DS3jBhRoo4z25LZNSgynPKme38VznBXs5T4ookPwud5ZcRAjQSX",
  "key47": "2okYnHrN6qWFEMk8etDfgeaavGLYWb1bnbXLMcMXgEmZSEBmBYMHDuUN1uFa4aGzWgtBZ2XZhzF54yaYYAW7i67N",
  "key48": "365uonJkJnNXkGETimNeLNHevL7ez4DQP1yoteSYRMGT8gn6gp76MnPyoyRUYmkCPe611LmMxeJQcVSWpmssb4if",
  "key49": "2nT38gE2A1mvL378346RTEZAb359hDmApXH5joJnFhaVsz5sieWSvc8qrWTv9Ci5Tb79W3Gj2Ae54HwVkggRzmcU"
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
