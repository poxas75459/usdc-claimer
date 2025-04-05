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
    "2Wwm6CuJ8cCvG4Fc3vPXuskQahSHiXZSqEW6pNGxdKy4TWKcaEXPLhMKtoPQece28NyG9ZpsmHzNYJ5wp5tPNcX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXiHWhvWwKZZjWoVMPofrHU3dhQU9zQZBUZf9CxCs7qmmmkkSFbUNjbNRpFzDXTsuSg57TAijk4Xj4nGFwyv7vN",
  "key1": "5noHqA5WF35k4GBygFQF5LLgPgjcdVsoWMMdqL7rCndmccG9Ue7Rwbvc6BbRCKjatC21djMctREPLTMafEXwkprw",
  "key2": "2T3sSrBs6bWTV8va4UWDs8YaoT6ca9aZ2kobXtxPEiw9PUJaVBNFpMp1QNy1T8M6vh3HXnJvKuGA9YcLYCPVZWxJ",
  "key3": "56P5N7Ptw7gc4DUgxRXUoAHLx46ktwKaMbR2bjbTfrNTXFZ8LRU5jiGVS5ii1DJ1pQ79shFdy12jBLq4dcbDZ5Fj",
  "key4": "2e86QHY4Vcv3SzJj4HLTGEQky72KW5Vn7Btk4UyRREpcTh1DT63fksvoKhuzbsni6GUVZQNvUDr9F9qVEfu2uzCd",
  "key5": "bNJgrv5Qq7znb8sueNh1xYVqEPHLqhuufLfaqpdbEP2UFHGEchScdwNtyKRTGQZUBZW1DCyBuVaJvAu9fRFm6Nn",
  "key6": "41Ug64dC3qPjoM3cTatf9hfkMfaUxSua5jttLhdBmwwnevmVTYwQ1SvB1EKpwYsjLBmLkX2cL8a3RPzVnFN6WYX4",
  "key7": "3i6it7s5h1ovo5dFmuChVXSM9NCJNk8C1wpmX3Yyjb5oUAzz1QJowotXd6wxEQBRpTwMmAZD2ebNhkLK8kkRJT4C",
  "key8": "4H6V5he8Qy8GunRJ5qmKZgxXVQBvVd7ZuZv5XTuDxc2t4muoZ4vF4kLxEM3ffWAvsUcTxNhRufEr29cecgJ5nYg5",
  "key9": "362h2dGDgi55QrpQucJzdCryhtkUCGXxYv5kYg8yud8kMBTxe9aGY3dSQDcaiZjEo5PuxQjSmTuN9ixPBLVSzuvf",
  "key10": "3HEf9YSo5sDwsZ44bJ4UVKkJgokXWGs8CQ27aGq97Dwb1NXpdAQA6dk76gioLs2hN14rAtvC4Ztfk11w9zutpiyQ",
  "key11": "4fmxXNJdqxeUZzc4iehNbr1hVFcrCDpjyzZ2PK76BaKGUgxYpz5yg413ifnVjWLFijCK6Z5YwLnbLnx2iTS3FLCT",
  "key12": "3pmNRHpHaxVeTL7BnoVUkhRnek7u4awDGFWwr6R3nucNx3i1t1upNAMumjnMQQSEMQYA1cJmV9sMpzsmJuxCRE7r",
  "key13": "3NmSuqtHpQEdcKXYHXMUJgbnJZzYVRzdZkGLrdsyy5cWshXMtMhLkKYwtwssp57DQUGri4CASqyypFrNUdCz6BKs",
  "key14": "5LKv2c1E5wunETAUBSr1WP3FE8L4KMnU56vjQsH2zmk4jrQdJQEK2yMBhAprrhekpzLhYD2BmhTXDBvCK1GzeDbA",
  "key15": "4fevpXFQzwcuifzTkr3LBBeJ2JyJTsjoDCAx9gA79iVQRBGbJHoEY5AmLVwqwfokssuLDFTsPVfuhhkyHc6Jj1bL",
  "key16": "3UbFuk4f51B2ZdD2x8HBfhiZ7j7sgRH8iwKG9bfneGGkVJC6nUJ6rw9zU8S5jwQZs1EfP2dQzCPVydA1RiTBbaGd",
  "key17": "5rbSLsAhtfj7euYuDKL695TdtS9ajpZ7xbL79hsF8ied3ShCv7xEud2uyB9CgDBuFDhYhHwRh21tnuzYRWrPxbHs",
  "key18": "4bYF6WhczQwsqe61fTy9Ngwy1ZDVXgc9BNPkoLwgTzjAGD7ta7Tbgey2bGkryJRYR6QzjfesZp1nvXXW2b94L8aD",
  "key19": "2zZeWKfmrJrcWhmKpH2SqANEJYACkj2qa6hywAZEmgcHU71meAWGDKA5xVWNXJLvfDCitj1e7rrV59ekaQBrB9Wz",
  "key20": "511jLTFtaSUhuYa2cFeGgEwSTn6NMEqVdtGGkzZ2wPFr979yYVk1jom3quinYDPhUTYuk4aVGR9sQR2eZaCVfaGc",
  "key21": "2d4aTvf5V1zysmVRihPunPzRn3ZFJgsGbwJG7SMnpzCDoq4xmA8UevMz4NmiZnK3GXnWpuAhhp5t5j8x7nT9584a",
  "key22": "3G3jPEvtVhQonNTr4Nm9WZpxhBwUMEQ6XV4KKGSQK3vVXmxBiH6RZfnyf5nuwcKKxafTtCma4fRCyynk77xKQGK5",
  "key23": "2tK55jWTDUFGWcErqxEPVSAkVTGM9sxSWe6hXThbVJ4LHypLmFFCMiwSuo9fNWFP4fPM6tExyxyahdiqdqwgpLyo",
  "key24": "L9fne4urTbTtZyBWBLeXSj4MdCeAseimeE7UnATj46JaZwe2HLjk7EX6Cx9kAyusH83kqPiTDydcxBL1TZiSs25",
  "key25": "33wJzjZM8x1Sys4kRQDFdXMhquvKE3nFBQ9xPMbbtCBWwJ9hiTQcaBFvFrDPpFieH66hiHVRX6FLcfnqEQWaAb45",
  "key26": "5TraEAjDtqhX37WfgM78X8Lr3KqvJEFxhxtsqSKpxHzfsdrdnUTWUQg3r78TPbNjhSTxj4YJGUdLwzjajVepetqk",
  "key27": "4CF2TS1oPY1tXfr22ScWf6TyGQZRoBCi6jxgnMoY3wnKhSt16hZ9VzMpiP9NRXs3GxJ3uC48SwjCF8a9Fr4izbGA"
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
