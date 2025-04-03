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
    "3VP7oP4cFKFsdk9XUT8T1x1k2FUKJg9kTf9PHvwzskBf6RZn1yNu4VZZRLKekSuxtYa9oAngJA3t8kD7NQ3kavam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsxwfNNzsnqdPAECmrVNnwi4agTRPMmKoaGHXBaH7jNnFz4X7vT3Gi9disinU6AQHrYUjnWfR4SLNi79msPFdRh",
  "key1": "J7Srxshu5jFB9Kounwc6dn1mTqHhBRpHSrpXT4utn9qwULsmzjBdom5k4458SnxhpMazheejez5Rj5xzUPYWrX9",
  "key2": "31XDXTeu5CHHtDrpZUGCzXkCMYzUta1RakMhguL5ykNFmCQE5mHxDFrvcSecmFTMQiuk9rDefiMZ8Xeo3pfefJ8h",
  "key3": "58sk14fsXv8WrNFhLcwC2cLe1M6mcczux91GeJFYMDydkfdzrUzQ3oucAjWfHoFw4x5uharTMAtWuL2ycEjUUsSK",
  "key4": "XJGbzKzECMXiMYwFmAr1b1LWUCrScAuNR4FtrAmTemHSM4LfgrUa7xFm5pzuX81YZ24wiDQVFxMjXfYFRwitF3q",
  "key5": "5qL8PApxsDuK4quMAXpR3Ju5y8i3YRfLksbGPDJrrxjog3VbKSC8MLTpNgZTo9V7v6yFZwSmWY78txY4KrGnu38L",
  "key6": "GkZscTM7V3pWoomyhKi1fEaEZ3MFwJEK9yDtCq1Cm4rR7JkAvpXaUTf6tmDAwP6ULEaTQ8EKcqoVWWj2Pm4Yp5s",
  "key7": "4jZfPTVqn2NHhgejmnULYaAkKkCa2JuMU8Mhbz59UYbFCf224A9kvAVsEZFSPUx2DFgaTKhHVcz79rCUepNwAjHu",
  "key8": "3WmmiGpVekrAPsAh9nJWCcBwGJW1UNaa7DKUDD8xs6LdtFPa1TANkRs9xb7v6z3i96wuisFE1KDV4nNFtkzNVo72",
  "key9": "5d15aogfKLeGS5KSn7DuwaZAVAMqiEgJA6k5zeGYnJTssh7LzsdJoVaLWnnFDfh5ghXCj7keXnF9ttxhDr7C4FrQ",
  "key10": "48s1VdZFyNU2wXo6ATUJiEVbFGCEL9A5x9uPE6eNBoA3498FpusH1wGoKJXEdbgPpKHN29iD2g5qPmsBfCmovfUm",
  "key11": "61Vksy62cdu4YPtXhuetSXWS8kPSdhezDZMawSbDFrvQ9BupfCXiyScxferFiqTZ54qrytQSudbtFsZQF1JVYVUR",
  "key12": "5wv7XCKzBWXzeWzBawfaEtoFp8T8fg8rnWk3BKSxwtLSKMygMrCtQh2WBVJzzFa3nPJJAsPyCH3PrPZjAxNrJw23",
  "key13": "6cfwYQiwZn4FV73WQDBtGCYp2mRciZcW3hXK4ncfFDMqr89RimfRFgBY3uyUsxdCinkQny12LS5r7eL5zQDnQZK",
  "key14": "4ZP7x6u6D8BBEjAGe81mvBwwreU1KwvgwLBkyVwx16PkS1BR73mRmvv9N7WxsHTymEBN9dPmtNGBZ5ScLKJE3UMe",
  "key15": "2u2YbBx3WvpBFWrDUrLfBkVwLefXRXkiX5hCE6TAHjrjoeT6fdkq1XtoVJZmDYQf8aLoQweTUuCTmMLrWBS3eHyT",
  "key16": "3qd59ZYh16yN5w3Q6uPeqcpEomHwKj4MVtmqmh6rTG4e11bAPXKmHpfzmncw2vD6QpcvTwStTZofo44TbE6ama74",
  "key17": "cs8hepz5mJHTmPEJbajW96ci8MdCY6K6Q48FzCibddxoZoNgnj3xx1mqvwWPrFMDF2ZPkdMxze2wJc31ycuzqfg",
  "key18": "vzLQZgHUGPxjdwTFTaivABsev9MZrgbV3Kp6tuZwyUTYE8HKiEbQetFMGSkyaKhTwPVKEq5GSZgXe8qtybxHaAr",
  "key19": "2AopRSjqkz3wNPCfzmjmv2WwNuTaDY7rwHCfAkxK6TZDbXZvANfbzk7hyd4NHykEEo5tswmkMyava6rHPhvQJe5e",
  "key20": "2LyzEAJy1LDgK6syF6uRwXwK6W4Fh99S4uEVnz67yEWmngT1xKrxtusifzBCpgRJuud2qKPLvZGh7DJbPA4Wvq3F",
  "key21": "664UCiqQBucxzPjAt2vVMzfGVEs3WbJ5XmuHDUjvY5jju33Pfz6xTyvPY18XAi5ymD47DTYwVywUEPDTfbKLBsBy",
  "key22": "L95mvZ2k4VR1vpPXYF59aGCFvLmhF6VegaEeh2NQfaex5qKrWLKv2zTmPgwxaagdX34PTk3dJJdZhT1WcpVvj8c",
  "key23": "3LDXXmbrubGG45WkJdfw28UYUa9UpNoYbwN2E8nWCKKbYNzhJVNkLYmxYAfDy6e3CLEvUVwcFs8dpbsjM2kBDJWd",
  "key24": "4ehoy94456JiYxkbUKfwyUuxwmtFBcc1qfY6FoQKRgfdm8fa1FqhE9Gv8DgBa21uuXSKubZiTQ1seYPSKroVLUxd",
  "key25": "2sqHSAcGW6En3zhkM6brtbXJbktRZ8b3pYBnpWZTFPM8HCxjE5sJKd1tCk1qSTbSNSPTyftsp1ioH2G1kfFkAVkM",
  "key26": "33kE9tgEX1DyXUo5tKkTTAG6gnJdd1pZbnfNV2jVdkebJHXkyMZu6HgH2gJcDRSvdMwJfXHq5ZmG3YVZw7ZbQgoh",
  "key27": "5v6PA4hTUjQDf6MkobEfmdCP1QvvhVpoovRtGq3jDb18xxUV9gXeJkQcarM42A5FXh6WMtH3dcu5RaseEbKfPUBZ",
  "key28": "4PDuHgBh6eTad2b6mWGn9T2fd6nC2SCkAVzf2BUiNttwojPDd8mJPLb87LPsT4HsKNi2vULCPsC5fUBvjeuj4Taq",
  "key29": "TeyafMb7tYxMkABv1gMsB8cfEetXaVm2eoLTiSJL8UYG9NhnWGPf4jQMJJgjD1FTH9emvgGarrDPWbGVSTCWd8Z"
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
