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
    "62he8Ddg1bGrgf1cX7PQaaiTmN6KrEjmhXhj4naUB9uxWiV8UnYikntYpXJKYsCsWV2pDNsxdxrjqjzoqEmUoNh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHLYcJcYM8NsvuEAkX4GoF4n471tcyPZ6mTRdP72Fq6AVVyc4XFHs4CSTFAqKNsVmJkJnR5x2hcaHB9KWDBv9zW",
  "key1": "5r1yABKjEZzr47wqFcQewHnr3ED3hoH6xnNfzbET5HmMkdyji6i64eYon7XZd6SHysw8miyEEjth3fEMBKGi2yJR",
  "key2": "5MzmDcpSLxhYxC5JzhwAhsxooDLSNvsKp1iPEyA2Pm9NhCrrTdvD7xJXvqTwm1hdRJEMeMu61gua9cWz3bRSGzbX",
  "key3": "5c8RBidBa36Utb55T1bUFSYoCDutoaPuL6bz7QDGqXk9e2ZzpT23UU8DgVfddMXvg5kqvsEe3cCCpwyeG4yGvCpS",
  "key4": "5PFdVCmB5q4yfkjXkr6d6y2bhNyTmzfTUH749ZqjoNgNcfx129fEjsyJDcp5wVw1RSRcMU3dWD5d66zccS5uA98b",
  "key5": "3sP5NaWn2aWd19pS8vSq5V2sXEXW2L31tQuCDWCzrbeefebXaZ5YBFJy1afsZSfrHLv3cWoiJpPMXVdm7rczAW9Q",
  "key6": "4r5npEZrYqM9RsJJ4UXPAhuJT2EbvaN4F1nujteXU46eB3Vb1sJoZtpmrKXBtGWwojQiSpxCDTDtjbkGr9osoMan",
  "key7": "4Y5kkZzvuUxDzhya3x8bPQC4NAtiMD9dy7aRDCePw4osoPvb2LWmd79mb6h8d111k34QL2jgKSmjVbHqLY2ZH3zL",
  "key8": "4y9Ta2NFEGF3HvVPj8YVgYxBoH2hwuTAknNoZQ8EwrZT5Sv7YqHingPKg95XmTf1uiJjXRT8SZmj8kPi1ZrtVYjz",
  "key9": "2MpT8dRURfaywVQpVoRi6DhzA2ngqsrT4LJwgn56Y3kXiRDV4ViUKcymNzPrzksW7puVvGoMPHrScPKnN3DpJKjt",
  "key10": "LgmMAKYYBxNWUWQ4vKXANJXF6kS5Wajwptg8h3uueVhdHN6dB8THUR9Cox28rqrWCja5ZqLfEhm9DxbNoT4C6mW",
  "key11": "2u4CVfTYYoznhaNL95kJbz2NWiXTYfVHj3QBUv8qURJxS7PcyT8BqozhQhnEFPKESQYshAXu5tHP9k2wmVSSgDEH",
  "key12": "WGUm7u24c9DP7w3J8tyeoFz6aPS8ataeSDFjBaJyGqUZggCxfkwuFPBaJ4xPKxURpkSdTDyju221kc8wVRAjHh5",
  "key13": "3ZBfxtmxmxiVK3uDcVF1TVnatUfX3DwdpaiFo22DzBPCyxxz59kU8wYBTA5k4gDYHqBPfVCPVKyCKo9Pa4yiQcEt",
  "key14": "4eifr1QmgXHKtdmB975B7whGnXWsWkCVYuwrVbqYjDgjpFknhnnrwHuN2WuLt1Nf8fa9cozjJkvUPAs9ZGLuBASd",
  "key15": "2GRojv8ryFU4LPH8mEBsccaQ8DSEaBYtitk13XbKsTcVNKwhfC6H5X56fizNiFWshPHooaQesFxusrtyWu2MM3We",
  "key16": "2bvooj2juJ2aUXGrEDT3W5QT3x8SQDHZKYAfzXij7JwX3P9rRp85iZdJU4tEBBdwNgFRcqz1fcq5Lku1wv6XdHU4",
  "key17": "Zwd19HV1XVmS8vYnea9Hog7GZPyU4JpDGLnzR7v7nA7wX7hsSpS7qSiVY7Qok6qDsFK78ody83KVYEiQMfMgsGN",
  "key18": "5tVyVW97ijdPuDXt8LP8YyTNCNEcXntKPrMNkjU3XG7uA5NkXXgwUjbWE6rSU2AadVLuPbs3dTUMik88Ex7chErw",
  "key19": "9YThFPpaFWahPdYDGoHFZ6m2GGcLXtuW8uupkrc5RzUR3xSJWC7EU1j2n91J25mKjAMpqNsjPe1uNSbwkHdjWtq",
  "key20": "3yMUc8vTvkTfiZ833yFUb259R1PzJCbrxq5tQuxfXg4Qq1ABCv71X94xrQe5sBNZkbLwowKqgDnQuogGhDtVRhJQ",
  "key21": "PsbN391DLixmr3Medb4ywxbRTZGfGY4tSgLYc5TFtuz5t59Lbt8AbxVoFyqyFAS8vVWK6RNoCqWp98HSFaSvA6z",
  "key22": "2AhSCrjCnc3bvQqzgU7sHMUb1FP22ReaeW143wgEncEPt3bY67Q7vkJENyDCv5GLHZdcLMksVE2z66PrL1kMTLUC",
  "key23": "4G8JPTpHphfSsa8YHTjSqhUX3a2fktUYnnCXiYnYQVFmLTdfg4uoXCJf3Q1TC7QGDNLPQ2AsrKrti6qSmiFN1aNr",
  "key24": "3MGR6my1PRxW6UnaHEQZKPCjjMzsYBzcABpmNUnPpnYUPPHruncnMExmFqBuP4tE7EYQXPEt91oYDm2zXX43hVoy",
  "key25": "3MsVBZjQDDEwEzAY3pyXYPLLzbXbym7BdspHK3agL55osUuGLg3Ct9gfUEmGsgoK986sdNoSyS8FU8uv7dW94qwB",
  "key26": "4XT8QHhXwL6bc7TtGnvKw6MN1NgESoKDcy2aKH1Phpnz64Zgrt6KwuqwFXbcAybCrwCUVkS4yhh3hXA4UjazBvsm",
  "key27": "39TC8Yr8Nws3AeQfzPA46N6tMHebVEdsEawMxeV9wpFMYHwbr5LCLCpNYcsh9ePBP4b9oNkdprDHqMGRQDd9szxg",
  "key28": "34Hung2n9AoA89qq1DqzyYrrFXDQCCJhovJKVeXy61W9jfiv1bVwGtP6ffcfyYSganxLscrbaoG9F3rbptBcJb2V",
  "key29": "4Wfpj7ALfDe6bcBgpwDr925GeZE9kmNo5v4CCdc6gWb6JFXNJpNz3JeDs6Q3LnjgDgpZTcWBRZvueBWDhdv47tne",
  "key30": "53vkMLM2WciiJm1Fp1p4G6jXHYoQ972RhX1THwGUjcfiGNQfUTBQBWKbYWHQg8sVudf7B7GdQoKCYG7idK3z2UaY",
  "key31": "3JA3iVZRsuhu9L4RoBCHQtSoiKSPRcwxCte2n12YCPxshJjUbg17Xetsix2gixBUYjHXQ7JKGAWLgsWcyf9XiK8p"
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
