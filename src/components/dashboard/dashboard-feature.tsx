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
    "5KmXhmyrHNzRo6E4bckpi6T96wtN1TYxJ1QcAgYh7NUZXfXwmcDm4JSadfKDf4QgijTL4ZpFTBLSnd6KMaZfNVkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRVmXibdoVsgtRMQhj6LMXPcWsYrKgotGJoCojiBzoHwbgG2Ekjrm1qjNnNFe483whcbx16MCKuti3CGkgxFCCa",
  "key1": "3RSCKBEp9qLoKK9KCmHB1qYQEBwoPDW2TVULc7oNKmzkzos8Tb8SajvVYQT56wie1hPsiznSA1hC3iZUUtyRAU2q",
  "key2": "4ryntYZTPsDdkDV8VChbh5Ngt44PTfBcrJ589MbASLfVmqtNJSUwqkWD5ovAfpxMs3DViydzuQWLWsgXjVRWaNn5",
  "key3": "4LatrkTXUH3EPHqLCbPFHx5vTG5k2YJ4xALtLmEE6SJHQCjRatzTu4fkbzJ8XkDnMCbwim7U9LadJHFgA59koHA9",
  "key4": "27BCGiybpzWY2piUQAMYnGhVvrhcThEbzZzdZa1eLg25RkTA8Ca2WmRtrG9BzBu6e46znfPx616gEoRhAPNgkmGn",
  "key5": "2sbVZ5bNVV1FnmKbeVFePfKdW3P7LVQdhMkzw9BsybLQ3jQA5SQNJXZTcCMuJpvWsLA7oZHpsDZsiYJbgGoqGnuh",
  "key6": "5GKyj4qtFzXBjrF1XPYTJjNDGH6H1x2Emz7qLjnE5oj4WnNA7HZtRCKGBQakwtnoj2DEf2UQM9d5SpYygSaEk6oU",
  "key7": "2VdQzCdveSoDUNbLJEHBhXPFewxt34EwiQqY4XpPuxzQpx4pSdQXrChsAWVNcZb8xtfo59cd7B4UfbeU1bqjGzwE",
  "key8": "2znwJwoatEpqcnYs8rFxit4Q5yT6KeY9euTi6p8JwuMsvfed2BYUoiD3NgDw6LViPNRKyqkV9KFqgNZqfHnFgk4t",
  "key9": "3Auo96FpfMYerU6ap7eB5ukDfa8daqHD1TxG5EbpVa91stucqPp7HE96qshRSuVMLfgABMj45ZHkBJGczwxrpDj6",
  "key10": "52San51hsKgRuqV9hXUP85qQKYpo2tfbjfRxaDP2qEbZVpUVP3vojtsxRH1jqLwEWiACMngdXDU8dLTjSH2HdpK9",
  "key11": "MRyJKqyTkLnd1VwZekV6FPjN9bbfrcBSgG9zWBfo6ufgrvTdyCm8rAC6f8YdHkMEc5r6WMKZfv8VjsAjmY87cqE",
  "key12": "Xasnb8btGjGj3EMvbQ3XBVGBR2pXWn3S1dQKMrwoZoo59stGpGMtRnNNgT9mu7EW2yfuLh7qmUnNSeokk39LdTi",
  "key13": "5Bkk764L7hMcXe46CZFvi1h73LzWvrE6HaNQJuRs8nc2MxFPS1iMfzANwupPTHYc3KkN5oBurNY8VaJYr5aSuJp9",
  "key14": "4eumJ42Wk7H3AFnwajuminVcbhxXjrpEu6Fyb7rMfcb72fhBRuQ4AzqYQ9FRQMmR91WrB1Qg436uujSxHDUbLH7g",
  "key15": "5iUPAztYXFW99b3K1Kw5vUS1S8nt5PHibMXTZsTofp1WNHnRJduxz58JKdJR2Vr2JHAaTigYbJUrH8ykY9pSUi1L",
  "key16": "3fncm2Pypo5QUvnAvcaHJKynCPyPtT6UrTNqqPB9TBQ3CF81f4NTPLtWMa7qjfTJrrkF17mPw9SCqGeZG59HxtDf",
  "key17": "5MJwuKh5FF2FYqQwXLDNPzt35TughxiyXK12or6TRuVqxMnkiomB7K7MzdKi1q7QQYFyNR2RUasU77PcHKgdGi1b",
  "key18": "4R5hpXJywy8Ldkn1dVT1vcSTG25oQhcPKqHXwZKDeAxNwx3TngUZiyUkA8jzUauCXn7HdpVVf9oZSttsLrpgXPze",
  "key19": "4sfyTzTUkv26HCX2dZjyR14x98TMG58KVQAonYCM5wKf4JoPrBEfGqjkdBzomcAjCVN1btxJxXYSHsRn2KJtkhMj",
  "key20": "ec7KsbgCSHwc29SVa5zqnjMHgMCjfiFBkrzcp3UdsbFwo52AbKTe5cp1pDc7hg3KufMKK3FNgpTGrnPdx8mfbmF",
  "key21": "xcsZkEhbYiYf8hKmNFE27wjuBzpZ2ueRWMD8XAwcgqzNV9TihneUgFVrjxrFPxT9HyPENneDLorxvguJWAf3LAD",
  "key22": "ixiqWY8m1dtL5ryr1aVKwf8qagnGn8dYqJ1ZPEeQLMMSDmNsDBVNEP2K2NuzMa4HvctLN3T7XBFjcobXapeynfX",
  "key23": "3LszuDERR7PuxdyzBnJiVSrT1Af2e4oJttQmHfhnhKrVb75WATyrjhf3TaWaSa3qYyDDou3nCrru5GHL35mHuPPH",
  "key24": "2sRywuLMSXYgZmBncA7Aqms2skUbPdmwiaBXnqBRUjymjn8mZZZS5uo88R1uokK9ns5GB2wprXhbb6qsMEo9wcoY",
  "key25": "3rAxzZGCYzSsk4e6B5bWYUUSbCbtnV9GDDJwGGMBJgU1iedUpyJvnZtxQSsT3rpNeqA2ujt1Y2Kq7q2St1KPPB9C",
  "key26": "pC43n3F3HX6shh2C1oxYQVmBKom4j67bdbZdKGS9cLiLWeHZ1urqVJBSNWcainwUqeCiA6mzuEV4CvtLyYLZNSP",
  "key27": "4ZrHUvVkzdfPG4fZAaFEFHjaQt99VxvJXEc7RjeiQPoAnhWJqkk8Bs1kkUaNysk8oPuCy1HN61z5dYmvtZaVJ6hs",
  "key28": "4vcN4zXfv2nH6xXrpzchgkXkkCxHCkFi2xdZV55z4yJ6Vks937AVFbyNvAZ2Ejd8NDGcG9YEt8QatSbgoNAZ6wpN",
  "key29": "g4LcR7faqgzTTEvhucxmoMCbwRJmz8qTooGCZQ4yTSHkw8E8jiSfpkUZDqV5E99GS1tvcYiHV9dtpPvZmqipyha",
  "key30": "3kzyLkCdT4wB4aFSxvHiRA9jWcr28yZ9u6Sjr9BxtBG8aLF2WsupPD855UpsaE2fXTc4FRVVGY41UvoG9sFSMWZ2",
  "key31": "4jXZDhRNUGDwcJXgmDKwpLDau12fjhNDRxYvx4YSNEPLpVXEAw7jgF4eEycRiXHHRzvGkyrRc6Wew4DfB5hQ4Pq2",
  "key32": "3tjGeYvXCQmaECY5T7kDn6vgr8RrCjZsva7SizJk342Trdz47brdEYzXHuFHHBGiM6g5ssS8rVP2TVwAFhLv7zTM",
  "key33": "499zeCqLKrFNDJ227m98y85udn2VzvZu6Yk7b2XYz6sBB2onQHkSGa2jRbgCcLpjHbBDYuzt3hewJwFmTFXF4xjw",
  "key34": "3YerStbE4tx4eVa8uaUztw9WYAsow94ieZPHCdP1nR4wCQYnBMuHicgqRRi8LbDeiDjmuApNx81fwDH7HhdBiXqg",
  "key35": "4a8ZQTKNHnxoaKfpuz7CQT4dWQ8f15zSXcaM4fzL9excPM9nHDyLN2NCHNVanBVXmpoZCnK1Qjv6C9TWbuiKod33",
  "key36": "5TuEycQLVwagpUkeKmmjtTKtKHoLZZmvYCfKUVxWZ8SyGJS9ax1hWvQ27PuP3DaEdYfFX2oLDEXncWDaxNMvbHJt",
  "key37": "Cc9H1mt5vTxaKjifLDMH7K3GbfWXtuXKN4whRFXaGwVFuCzUNiFQ99PkzUdm4QzXEmGrZswBo6JzNE1Kfm6c4Gi",
  "key38": "3eFUgFafR88gNcguNGyhMcK3WCo1CN1zgeDnQmMLf4mEh6tM7prPwhVwuGAjC9D58saHvRaNW9zo1jExfpftED2C",
  "key39": "XcW9XrjCVmH2VgoJzEs3d7p4hqz5bHL1rvopbi4XCq41WcKDNFEzdWgrWqhxQkvLvJEcUETTAC7JNe27VRr4ygd",
  "key40": "4UVyGAP27521FgDZJCkUix8rG9aats3y2Vs89PvfycbCGQiG6juzqTKxSV99NpiRHvv6DjYtXKgMQihi8NivSPgB"
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
