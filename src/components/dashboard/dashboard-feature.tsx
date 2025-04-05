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
    "5ZRzk8GkjQzr5XbP9hXovTHt4ZGVAsvcwnudPL961oYiRmYZ8UMcnwQGURjXsEHMV99xHhuDYNCu7xUmRdZuAdQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBCABchpcPs9RvmnULetnf1W74YKkocM4v5QjT7EP8gUALn3EK27Zqt46D5uPHSanFCfns84LsLYfLFranaTeD5",
  "key1": "3KzVY4Bm1FuSukB1uFFCHCCw3f2c4ahh1VEAmcGj19iE3hCtQTuw131fxheE29S1iCX8S7HHugBVWm2UjnivQA2q",
  "key2": "SxdjQe67AvQNUECr41NWjXCwWkMgZVsHRKhChpyMPNzQPU1X9WTguSaRJLNshcDBPfTEuvJpUzVT8NUDgkqnkTM",
  "key3": "4KWUuPPq81LHKn8WY52QNrNbEnzDb2sF7zhLzHfGWiAyg16kdNs1JrWNoqoVg9yuBwCbWCtWcLpPvYZ1gp7ZHJTg",
  "key4": "BTuHPp335r3DWqu6BXCEWA7ve2oYLZHYBvg43FAyNqzxEZoD9j2KNiauEePLBtqCkm5CYqmoPiJSKhCK2cLtGoB",
  "key5": "53zniYzQr5sGGAnLjqsfrZ9oXxpD4ijfe7Kccn3cFK3Eeh76136By3g4ktiyi1xBtfV5grJ8h2s7qy5dhNrfKjt8",
  "key6": "2wg93GJV48BErjfxRAUVGNM6tKfJxyqn5QAQg8Q4TE1NmLQnDmv1aoSQr4qLHSxcpJLmPq9eKFPEYc5iujDCshHe",
  "key7": "4ay4QC3uRMAZRum8YwBm3gouky3HVwmUaDx3q8w5SzaAyf9grPqxNM1yoKwSHsUYUHLBVrbcFMLRakyeCcYsXJg1",
  "key8": "2ofNpseQfvK2r4zzEMGvcLMqJfeT5X263mwbCjSthiCXsRhbv1Ht5ua98RtWoVSjKjNY4woN54yLs8mcr9agyv6N",
  "key9": "5b3rUMMaoLt1QTCCctXvV3AaekR8Kr4zg1ti9ocpWT4E6zMK7gTq913wVmibEnE2pSLAG3PmGYoUTAk3Ec8uF6e2",
  "key10": "5ooYim9TFNiiK8r1kiEnva9JcxM1AJjkpVH9ds7b5r1hMtwDyKBfZqRck6qpTqso4fMPkQHKUZQ4czVquMYpZPS5",
  "key11": "4yyfGrQWNB8HyGSJ8Y96txRaT21nePKnohKETR73LJFccmKRjRYyz8yXBwVrjRaiVomNR3wq87Kv2GDTiyKNyuhZ",
  "key12": "LKhmD8L5TtwYfBfFbizquazWYBNMH7cb3NQjxC7fCu7KKz3yYWcnThcSgmS7zchKZ9WKXDmi85kN2nGv3nYbro9",
  "key13": "63unjYLok2uydyhfAHFu5S1jnpkWg9sPJFQgnBpKh8iA68Xmmu7GjCBe4g5hd3crA3aARwrj6KU4FGuRptQvKtUP",
  "key14": "2f7UrkTq4TwCbUaMcT91oJpua4p55xVe1tB4j2iCDay4Yk3jZmQ6T8JRG8MDnzEotHd9Ua9sTi5veTMDKFVd4vTc",
  "key15": "2br3QCmmq9DPH9Shx9EmoGnNTeXz2k5JLkoWAUjtJUp3gPNoe7apfP6CWNVPJd16Re6q4EML4xzyZN9oSHyVHMXi",
  "key16": "31wZauy7a3qctQE2tyYmHddnPY7WGwuiK2593nRPwpNuxT5K7mZ92qvJ2JTFcUfhwwc6zKWvdYvi2at6aYnrNfE7",
  "key17": "2VoPg2jpc3u7WZuv3v9SU8kHPpNFBWYYC58zwgom6tBJzbZat83KJT9GbXfhpnrmmCMioCetLoBDLQrCoA18c9e2",
  "key18": "5Q7MCaG7XRFtZo9aYkfUT6PvepLE2y8rPqvPP6q7e7B4GPSFyPWJYWdA7RXbGmUJR6KNf1qRaz6dM6fQHuLNEj1a",
  "key19": "3rbo1hot9Tc3xPpeB7uiug6WFf9k8p7BFATcB1shFvZGHbRh3dCxpE7NpJWREUovxaJi3zbfvMjmXCnW7jmMdzP",
  "key20": "5XYrUfgBMBKYHDtDZr8BrMMHwmazf3XeTQYR3FeFHq2Xqc5xZyEMgnA6r47qbeptSpvvigrfU98JEd4fSBZX9QRe",
  "key21": "56yx99oiqNbivJRQ7p8i5CrYpCbVPKQs82FtxKb9TbHWaV957DZhG3AiwFcTTDo2cr1TFYXRCRBdCiaip9dmaGYe",
  "key22": "2AtjUGofr2vyQ7MKh38jCATTHaMnZUvqiNyHv3Zvaia6zYub6F15DvwbNCna3t1bkuECXfsUT25UzXdzzfNz39MH",
  "key23": "2o68kAJSRwJbpHGrdeBNSwXW1zvi9qBJNkRcwLVnajKGEG1eVkc4oqGJgydGQ3pbDbA4EXiaUxSYQmLyyyv2U1sM",
  "key24": "485KbWd1AHrqG93XrGCpmGDY8Mdu1WMyRzVEmPjUJW6QaLvAX2NUaVjPYttAvmc7UYuevpgNhQvcHxDzx4mmS5z9",
  "key25": "4cv4JaA3b8pre7iboj73ETsxUHjeMVEutL5uttHj5ffLVxvPgv2pWdx8xBzpbkKQQxKqF5e13Syg6BtaotoUA5xP",
  "key26": "3pajfRFX52LoHkMuFiKYhZnsHHq9jwvR5qnEAdeaxuSykD1EvccH831QRjxtAu9t91NBDDfGs69YGGh9h893GK7C",
  "key27": "22UrKdy5pXVbDj5r83HHavZG69Y2NatLXrYsRu9JNNHpGdriEqQ8NFw6cXBrcq3uLkh7JcqJoMmmszQ5oFTrLZBs",
  "key28": "3Lj3wqL5XCvXJ5TLLvsEbYZxA7GxUDWKfiLMAy2u7pccbFv5BQg8ziw2TkKwjyUFECoynhkB3cSjLeFsE34XASFr",
  "key29": "2pAY76KnN2EzJeG54uekmtQYJumfVKCuuVXAMkNFAk2MJLxbm2bosCtVARA6tezXmgyQ1kT86sFXCNfKmTM5Yd9R",
  "key30": "4J1DdeVo7sEsUk72cNmM66P8raLNEiHxtA5JvoM7YPWT716KPKdjnnH6dRe8mke8bJujv5R9sDD5h2MgzzWoS6MK",
  "key31": "4g8U9HGpabG5LXi7kzCpM5Yhs8GSqQqiEeWG6JTYZWxDLEF4Z9UHs3ek75X8HY2VsMXQvtg9aH9a485EzCyRBXhC",
  "key32": "3c4gdcQTTcojDVQ39KGUG2i7F5E2tLJZujZrUqQQ1ogQRhsh52ZmCgUnXU1qCUuBSZD3ENYHwFcmBrpezCUyB3Dx",
  "key33": "5easft6DsfMYLMZEeBQqcnKcmygopRvXR7Gzmz9E3TqNUrbcxv19fgFDqexg1yK6zyYC6GoDsWp9uxtHKfBuWcZz",
  "key34": "hdj6BemGKDHnkMGVDvq5iabtyc1Twwg8XyF9tvmxk7dP5Mci4uqEwgL8a5ECfkSfPpnnupYWGVkWqRZ12modoBb",
  "key35": "2bBCP1mvCJZwLDbK9kwMRFKsy8HL5wmR4UfGe6DHEcMkRoLAgjLKZTdBiGSzovYoiGyyUFRw6cnFc4176R34BB38",
  "key36": "emxf5DhkCWw7T3by6xDt6HLMeUswFVgBFYYHvWPAYeCiA9yHj4otF8nffdcLBE5MzhCX9nSMARhSxocJmnWzbxE",
  "key37": "5kfuhgSnqbKDRZwmip4UiXjDeLcX1Lzy7MgWt7g7LuhHmJ4MjMwKTk92APh3To9SYuqhGreQJYvo36dVDk3MAV6i",
  "key38": "59bguBw5JgiLjGiDzHMqA1p2dgQeGECcark3NsBXZfbTxF6eTd2LVR8pC6e69TtLfcvVgGztM3H42sNwzGbhYQvF",
  "key39": "43zQ92FNZEq3gfyzXoU6uR7KZe76AmRfNtUwBFESD7hXZ1mPRJNhiw5U51sFRsR7HkZsUtQ6uQ6UmsUfKdFBhTq9",
  "key40": "wgWZT5AiEdEWaF1DiqVQyBFYwNSKwbHXJJChNAmTbMcvr9RSAX4TcwhBweUZdR6XBcPspERwrE4dUHnbwEvx8mA",
  "key41": "2hAdeyyL4Kiw92V5jbq92fGuThtqmWrACwwkm7nNWLYepYcoveb8ZEML7QYh6VUrL3bH9YDCFuezxHpPLFN4s2kw",
  "key42": "51G4RSMaE1fKcYz9GyB5MxsNAQCbqouQNEbK5VzqHP8FfwQ1rFnJRwJnFvJ1w6Z1kMHz14Bjj2Z17a3cd1w1q1Bw",
  "key43": "5fx4FRkkBydhrhBKH9qpLPsxgNzw3RDxboYNFLcZbUBNJx2aVYhihR49UstKirvKoN9BP5LLHvNgx23jFdKx8ZYC",
  "key44": "4mvqX8WYZrAG8uruRmkqYjXtsoFc2m9siUtxyGKNm1jTXsY6KLsVhdENnxNB2NJZSMgpj3u4bGxBBus8owLn7k17",
  "key45": "4FRoRoVi5uSkbCbtVP9U9iDJFFmAq535U16NHkt2UVuayYpmdsvXvYsFFRMzf1EWpdLJNsvPDVH9FevvBa1r8Hi4"
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
