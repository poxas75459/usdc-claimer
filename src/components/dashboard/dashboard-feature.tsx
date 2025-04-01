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
    "3CgyZqSYWg2gycqbUrhJfCyaJbToW1X2HQ34LBXnq7LvUTDWJfLdbR6EHE2nTeY1koNUi5Zq118wH6u6tkcaP34J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEb2inQpZ5L9M8EuZ2u2Kh6aVeWaLU9j3safb2c99KXwEiDG1pq2hKth57kF6DQQ71j1dWU7m8dJmwgnQAp3sci",
  "key1": "XTudo8pufwTe71AuWVKpzgRo5QeEKt7oW6XhrpkziSbFEXK5hpt1cd2P2MTYnuzvwSghjC79X4phTPbz7erMEm1",
  "key2": "5Wexe3yZUBStKbepARHG9YvWdp1uJAJ739Y7bVSdSjKtfjjUidM1P343qGFwGzjuZhZAvxV13pPLpU9bDXys71Y",
  "key3": "qk7EW3ZVG1ZwBCeMXp1ZNWzixcVFFV2zoM8h5dTHMkLhPNMf4PWrCvqEUsHpyUKekeKekP9D3KU1qmBaCGx7Dbx",
  "key4": "27ngvwUGxCiB47zBck8znXH9hdyzhzHvpS1dKEYuCsEvDkzntQW3TyXjASCmzAE1rXVb8aNd2QNmNU4LHEAV3qXU",
  "key5": "3m3jGYcAKj4BTPHqyAK4J4yz5PJ25JpPJ2ZrEqWm1mQ3Kvo4W8FFAyS91re9uWdEwWemY7DmTBfRpMmkds9pySez",
  "key6": "3xWWZXGMGrHiRr9xNpEjiv4q124Q51Zp2jyUQV64q4uEtrohh6ScTBe9emjzFEQ8mZEZNoSUESMTDKLEztEPjarC",
  "key7": "W3kts45D8NbL4Z7SMQ2SDVvFRpeGGmHUNq1C2AYjfBZfFYcMp851EVTazH8GN61T86nbL1LRwj2fDZ3jRPAssrW",
  "key8": "f2iVxaTTAMk21m8PyfEW7BsHJGHY4iBUvygCPhYMFi3vUFhB8pk76fW89UfTQzDAzY4gXUpawjgsBXgS9AvZbTi",
  "key9": "58ihkN37kDyo6f2f4BvosFYB5f4FFQuJbWeHwrSTe5Ucv9jsQkSGpXDwooAQxKjqF5u3tW4dokzsCPf8TPwkYboV",
  "key10": "4r8zBeNA5DPCjbXfd7qtzLTKoEdAQYKuAroNbGypnT7kgHb3cEvM3zuEu5P5tCreYfZqUSGTT2zgty2fYNofQoX6",
  "key11": "5vgJGtuNriKyEcdj6mTkWip4vhj4VvSUzx2H4Et9mbvEZ7fpgCzGNNx76C55ztKfV8CQyMA1GmCp8cpeanq3yWtx",
  "key12": "49RPh22Dg9RqAvgBTstMYwjpLzwFRqiwmYytASihpE2EPbEdcFopyvxie4aYzDFX9V2sB9oXu3dqjQv24W7eGNKx",
  "key13": "4WvVf1LCsKbeGY9NbfEtwhj3z7kiE9dBFLi5WkBSQaEB3brWj4AepAGAW1YJcUgQ7uAGryQXBf8RYnhwy8BTQnKQ",
  "key14": "gJSAmafRYbxtNADbUv3jXThfVLTmUm9hQmyT8HzjVcKFmrz92gSGBTe4YH1oSX6XFjUcMZFvcJPCTavtRSa2jbB",
  "key15": "3ULCRAymGX6xP5kJT6fpG9AWxS13HCoYneQwtPjpRvpcMgu7L46r8RcyjJXowGdzmazAnjNjNfpVSTCE2M8wtDyE",
  "key16": "2HGwHYoCN9NQftH7YGZQRHwmQHkNpecZ9zgfrZVjDuCZc3nTLohUEzwkdD8hKgmnFmgmUefQAKXVkh1zFvq5fbnJ",
  "key17": "3XKUX9ZTDTZnYF1nBn4feUHfPx8ztc31kDUX2ZatTcBp1NLcrhdwR4t8XCrLPana5MrzPNm6NKZYuPDB8rjxongi",
  "key18": "24p4wxuv5dko3ZNiqsmV7KdskZMXSZmbbt2gNbwkVoVkkXQ9G86Au6iryhMWcguWokEdASFxgQWVsGfiuMR7mESq",
  "key19": "3HfwZD1rUpRy2WhsP9LpnSmtw2U8sMhbhTGAKW6Mbf7Z6He8W2n9Kv1HKG1joEkxPYyEHEKnKxcYGknpcuzYbuYY",
  "key20": "2oGjxCSWjfg4n4FSMconvZFXirXXeWEdhScysJ6dcrRzJW4opk2U7aJtBwgVDeM1yZBMkMc9UqHiBCJKMQZk3QRA",
  "key21": "nb6pDjPMSD22KEazjzudEjqWmHCKtvaXL9iX51uLKngkgwri4otvifQmvPq317Wb1T6G2u5qoe7YCqmbLyRi3Lp",
  "key22": "4U3k4yv5a2AuW5YiTTNtD3HZK91FCqefbgoq1u3FamP8KNs5ByEmjqvYeRtdzW7o7hdzxZ9jFYaWzhW7s2xRPiC3",
  "key23": "AsCGeWR8hyENhSEjsPY4cdDE2bjEJTVd5cjsxAWPFDQFNY1FPX1TAnDCCg674XrBrZ5UEZz1DwKq1kBxRzAPVem",
  "key24": "4XBTQuQs3mbC9XD2qKk9Ajbj5Tqm9rptwzwXVGcRondTts3mnL4adX2qiTGkbD14mMXkwng92mihUEApWfp8XAZu",
  "key25": "LNytmRSeygnWHB343EgJPjnaCyfTNySnBDso9fWJdDTMRvMNf4dB2CFXFob7RbuA6ZCtparue93QeJtfuaukpc3",
  "key26": "2QgQzqd6RkcjXAZTQD8kyhwPkhPjbcnpW8qNAAG5WKRR8KRo7FGyiAM3fTfy67catJw1Zfc3bQrrcpT1qoLqxpaE",
  "key27": "2n6Z8yGQYTz2bKKyVs8x3rh19NyfxfcjHJGPsX6Giqsny381U73kbbfVnkjUajbhhBQ8uq1zYdFmjgRXUttJQ623",
  "key28": "2dYJ5dZj2taditpmYcDNhTSYXS8Be3V5t26xdUMRiGmBVeeRQGfZ2NzwufXzmgz2Lg2JMhaKcM1Vz3pPn4edYxia",
  "key29": "2hHSdJ5uUDE9mBip5JzQebPpTKnojAezrQVf2Z5kwprzgELGQ9me9KLLknZzcs4auV4nuCi3XPH88PNnG3susuzb"
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
