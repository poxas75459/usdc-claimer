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
    "A2fEEwPrmUWhQVHe6mmSVi7kVoHrocfnw4ZvpQW3tUKahcGCbCzTpvEJsCX7Bbtw8pdR66PN3bsJzdGUmDUvpaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nYdHMmWrARozXFekZSN5vGCTNzGCPMYX8k4WCnJH3rUsUGfGHRwnyhcm322vVbQv4iRN4wvPLZKu44Eg5SxPrfe",
  "key1": "4CwzLJVKxHghecFBUvNqBE3dyWz4WLRvSv9GfFHLXCzuFAmdG6gce2XUtT3gEvmvna4PzEsbgvjJ88mNaDSWVT54",
  "key2": "33Q2YjhYJrmiRwF5W8DBy1UMF12jbLSR6AQg9NZBNCXUK6HDSCwzUoDfqhbPzK3NDSqAymTVdttSnMiDJMgf2Voc",
  "key3": "5BfYRFazdbQN4JPrqXPHwqZSiPJxNMzKzocnVcpt2pqWpxw3tTbvWkg9oNX6A93W9Eo5xJKNM76462xP9oZCcc5R",
  "key4": "4t9QAJqEeFNaBAdqe8uu11eXaDpAEUx35SkrQB13hGXr14gSgw4A3NQ2Fyw2J7QXmb4gV9hVcJgcDfJcQRa3gQpS",
  "key5": "3916ZW2s2nr4Z8zyuRMpfawwAHsbthy31eHmKjjiG5h7RouPbdrtfFrLQ5GoMiTQmV5G9X1H3szydApF4bpj6xfc",
  "key6": "5kAuvKmsQ2Nwwb3nQ5hdiByNHoSJPA3vi99R9mcWVpztGYxcVeP9c9aneb2q2i5VMRSyNDR57jwqTt84rx68vhKf",
  "key7": "cuez3i1Z4pP7tHrGBzbaug9iWMBkm4CRVDszByFo6G3qxMb9UDxFm1cjomECydAiLLRSp3HZ4XguaPt889ADVrJ",
  "key8": "5uQygDie126sRy5XXFEhRKjxAeSZ2FZAHG6nvf3KRhvUNurxucabyX6FtqDHwzDhsunUPPzLQNpUAZy6Tr284u3s",
  "key9": "2htofnVvECMbMrePS4S9UMbf74vBL5C3cWQJov2piNoc2VjzzAsts5TTTQAwqrxzhjzzUgkY9jFsiAKRUtXgUuGy",
  "key10": "53CzJirtUv3kh4qG8tFL4Ve5F1Bomca9QhNVYQWUgJrKfTbxcNSJrCD2hxA7nuRy9V2CYqeGEo2kgBLgaTPaeSBW",
  "key11": "en5szAkLBwbb8XRL6d7j1yzcv9HgNHd5BMcxpjqMQLLJuZm2sceaCyMKBxfFAH4jnU7ZgbotC7TouxDZXAGdoug",
  "key12": "3yEbTtcn3Ff5G7k5W3dgEaPnk6qbk6S8NRcBJrtWdDnoMXgEi1CKVw15PfjzC3uQw3DJhCtGfNCqv5yR7fZZ1SJX",
  "key13": "CncDtDmgEfm4KsSHc8L8eP1GzD7zkHS9PUXzsnC1iXGJM91irvLe2Y9a8A3CMFh37KkCc9JPmpLcpPwhYQaiVHT",
  "key14": "4ZMq84GF88FnirdUfnSHwgqYUeKYL1GnTLhNwnBTEhciYgtLxZ1kfEvEfQeeVknrYvocf24C1D5z9DDCbwDrf3mq",
  "key15": "4iQDNtGmJy1Efc9mHfZ8giw1ZJY53U1WDgxCuXEF6XdGnhm1U7kCczHC4pwSzbXUW8bBK6YJ5LWU52pcdQsDvZXx",
  "key16": "2Ekqo3xwCFNiRA3jsAgQhKDS1HrSav2WNVSm3Gsq5FUAKTqnMXsVXbzHebRXAuVDABErwVsGkSxyzoriJZot3dtE",
  "key17": "4wTkvYN2SreEqxdVyhiHbB1ytjDQXekrEXSWhZzjVwGW8NiGdnwYM2pMRtxDvY7enrsK4uAUEbt7L7T1iMRTeJWd",
  "key18": "2HCVFWrpLgJ8gMBYYaZxKi5eCee6st1n7oC7YK2oaq3SmDDQnTe66DmKPDL893B79wqr5H35HUrT2t6AFVCH5QGs",
  "key19": "4nyDp14gwTcb7GJxuZcbvYeRNRShbQiYM2AT9dHe9ofyvY2CVhk1dzMv99EuMgUiZKwpvRUb8yWufwhjNHSEnwyi",
  "key20": "5wdFfRdkLC5jXkr5ZueNrwV56UiqVRXPWYCt6bhNQ4cYrVdZDitgJyocbXFZ9XvpRQupS86UJFjZNujvb8Czat9m",
  "key21": "3msfwoJU8frzy7besAZe2DeCwDZzooL36j5K4ZETgfpigh1G3ZWjPNKBGwfvbmmcAFwM5Bua4GGrHgFFminuBwU4",
  "key22": "2AJzKPB2VKQTxpch3CrgG1wojaaL1FviTCWB3A7U3vg8GN679K1HC3xn8WdqVWu2GfoaQeaoYevrpG9sUgyTur5A",
  "key23": "tPKsLCidEcyfM2kEF9BwA56iyV6f8oN8vJM9oQoaNCfiMnrQ7Q4BRi8Chu57axX5Vx9U1Do3KURtjXHkpQKq9mC",
  "key24": "46NShcnH3PAr4g9fwKsiHb4jRqKC3UgejFpndjSBTsgRBMsF4nvscG57cxsxuCbh6Z23tqgprFkorgjJneq74qUr",
  "key25": "skYa2kMkKD8Yc89dR8evwsEUVbmr6TG9ug8W4hhYaG5ee1ASKUNmi8RJcaLCixtAm4qWVfhZHTLZicrzSUCCBG8",
  "key26": "2uCbJMFrUn5M4ZiyJTD6arqGk4ftxH3zX8fxbAMKKM9mnxVhXKiaAPJRAZdAyfK1ViesCY65AH9bhFWUbKRN8nmu",
  "key27": "66867B6qzskg5YnJWTU5u889gFPur5Xd8uxHUxrNfficDbteRpZbiLQhqVYXDkEhsfuKFE3zuGjoyR8wDdHs5b1w",
  "key28": "hxQ6LkttkqHTCgvMqSo1CmtoMXWEgHmcRmMQGSUve2eDd67YpuQGJjs11YStsGrpYFRvH7Z3zaaXuFA3nkeLZAA",
  "key29": "5Unq8YFwxedgZ9AMoqUdYAG8b3iQM1U7bvd9m4jgyHDT6y6P2qtQiUjwEEhVN3WzvULPcGQLjHjFc6S9Db1j57bQ",
  "key30": "5KTT5W6Csfs8Ed7H49dpxPp2TH5QFQJzFrVcoWD1yHf1GeCCKreNJintbLbvwBpNtxu7Xu4MyETyNRCYG3BJx3pZ",
  "key31": "2FZfzmVm7ekisqERT6aqQTxcJDqj74kZBPuFntSbmyu7YrhNtdignTetkHuQ4LvqKYHCYL6cnuubZ3s5MHZo6w2v"
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
