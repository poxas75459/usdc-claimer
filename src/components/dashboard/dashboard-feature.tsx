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
    "58nvJm4f3qGoRvpN2oWTL5cbYocXQ3iedsg9QYKrqiKuFBTKBAFcBUvGu3GmfrQJT9pDfXVdaKNrvyJLarNzU85T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRW25FkDYTGLzcUKEJVuEeyfL3s8S8tJtgtMUbTwkYhXT86WDUrTWpgu12QeFN6S1eKSQFCugDycmrViVYfqzbe",
  "key1": "b53KL7Br2iu2KA6LoSXjaQDPWdkshvbQcpF5uxHDCaq4rAuwMGBD6YPqhr16sZkY42MhcvbmztytHrEDcQMKuWg",
  "key2": "5Tr7SHP9NG5kNifyxHPd7qhawHi6fHZ76qTYGxnuPZvhxEHfCCg6i6tK4h9gHPHT6bNpNV1bhAWDg9vSSikCsXdn",
  "key3": "4WEUc4fHKsn1Hu3DECQYSNgQcTQSbNW8ZW3Wd3jNaH2TCmENdfTfBYhaoLw5PMEVg7iNmCaAC1dWKAmkkC3Q26Qm",
  "key4": "5jsxCowzfPmGRbJkG1KgxkzvmZPtp68CiW3tj97NyGW21vWeGgP9ymZiG1J7wJZCJsjVnsLmsYG5WTRgvgoiVqsZ",
  "key5": "65395C18nw588JVWRa7TeXgh6JQeo5vToRGKS1VCmzxLWhuTy3eL6JtN7ymqJyHKXhNiVbgTvRxowbp68AGWw57t",
  "key6": "3owz72U2rSjs3DpfDLMB6Ge19aLCDnJgECnSnqZmmxew8fMGCBGkHGGwNLLnX5Bj38KARwykdrLBQJn5vkdyBaq6",
  "key7": "rBBt3jdt2Ac5svA2EJExg2C2QVvG5gKzGcc6rShmEd9vCh1ntBSBYzGrL68gLWYTvV3b4rUERVapaNDrtc5XT6T",
  "key8": "5TEYuoGmWxLUsgbY32iuiL5J3anXP1PHrz7bfTtun3gSwQDWFLAm7H6FBknqioVUH1LzbQfLw8bXxG3Xc6ZwiW6m",
  "key9": "3N1cWqhnG2sy2hwX3cpj4RWbYQsyewCkHNh6zmtcPNpiN8Ji7QPGA6yhsBse8CFWxKpmRJU63HSnCEY4Dem9i7vE",
  "key10": "5iSJkQtwewp7XcbvU4p5jmbzVormYQ9zHXSKyTQ817AeFckGY3PSLiS2oAaoSpgyemB2WLLycZfoJBeTkDJs44kR",
  "key11": "Ah2n3RWBLVcBdDdxbxSTKTLBt8uaxwpR9uJZzQGb5ECfwAUvvoVwobgUFFyrw6AQkTcwuJHR97GD8MNhcsdL8Hr",
  "key12": "7z7qyWeDtdDCUTAjG5pPgQGoChUbCpMkdogjCQGVM6hsWWGhjYwmWmtdj8JVcdZQxgHF6wPF6fp43XtZaB5HyZX",
  "key13": "3itvTMpQW7hufrSPWffLWJ4QmMSXJsspNSUVHv7tTJQvnzQmAmP977QX9qgomcK2QNgJsNhMTUXKeehDo2YBaJBe",
  "key14": "iVwGUyKSHh7ndHBTsvGr1WE8iiaXrKa1sJ2SNTZZM15zbYibJBKAtf1NGcVYdW1QLhq6PLAAnJkxcfZXRttLcrN",
  "key15": "4odBdFbvfWBCnK7dXrpx4sDnopFbrQRqfdgadMJ21rGTtfzpfSGcU4unSve992yt8zrrYe7ahK8yEyigUEQLFVnU",
  "key16": "uEt3Fyo1ubh563hChrJUPDrFPXoJVKzQRNuKihwqHu8bP1QZZBEhUkkYcAAQ4htoZSi3c65zvHKNyLAkrnL7Znt",
  "key17": "NNboCD5Sd1jwLCqDSCLegUDvhiTti74cWnpagSzJJU1aL6cAo5EqPnwCqboo6oCQN5E5rUhdrikWgLCKG1pMXRw",
  "key18": "3aXxcZ1FENvTsTAhoAK6E3KZCVrqVzj2VybnW1Jg6D1tP6TaB8TJpckd1fVw3t8Q4L87Nmf9GBEmVY6fhKLN6PdE",
  "key19": "2zBzvveBL2p3z9irXWDJTHpy6goTYwDYBTtNkpKRFBLebDxJRFkHexuGy81NZ33SHeDupUHTNXvcDVqucjD6s1Dp",
  "key20": "22oz56XBuSnkCFtZu3EFhL2FvocUquvMtRCjWwXED2nHWdiXiDdfdWTpk28xjudE3RZB5xmkz9g7SFV9eXVxPNFj",
  "key21": "62PVNEjKy7bi7NFmMsEbQoLYq46rzSkfwj3ueumGLtYoHF8nnSysJEX2oWYk3oQxj5pNfRJWouQfQoEaJnyBQxs6",
  "key22": "5NNvAHBfox83D8LyU6yuHmmj8JpgLheL6XmEeXqj5Fa9fxWoqEnpLXdVrJkJHTdKcctBgU9B89FJEp9mLRLJjpy4",
  "key23": "yRkKN7cAwy8ucwHasjzyDyENDoCY1ELsbzQDx8o3rxHwZaU6cw5faiaSk6T4gLBxqnmSn97usaGbpav6ckowy7e",
  "key24": "4MsyHDPa3zbdeMaMvFW91kRGZMJ4N6ZVytaGXAFEpKr68oXRMPTfCLuWAACEsTcmd2cM4uuAtsjiTcKRRNKR2Bog",
  "key25": "38vpDs4vFtL1jXbV5ZtUCooExZ2Jx4gzLrVgsBNDdzxuiGez6L9iSdz2JbfjHNFQxNALMVWnGEM5Wf3bV5Stakmq",
  "key26": "JkWLUofGYazFJApVQqZZWaRkQoAxiCYASqi5MmomPAfAKMwWq1uth9agoa2BCR3VsVvTorqeWd9kA5SVhxcqnU2",
  "key27": "2fkbWgm6GiCzfAAw1wVoJBsx85Ug4zMzGboQCfLCQ6GN2BqAD5mSo7rnH3mFkywe9EeTJwBmXPfEXhf8Hw3QDR6n",
  "key28": "4ZoDPqKw3KaPGdqYcGWBYa8STWGJxwxeYTPK6yp6NdgnqRorYhrsE3xdrsE1QMixsSdtHmXxWAmU4Ucxfp9CswnE",
  "key29": "1ccVnYXTfH7PA2jYya2S4wnSrMPSVockgMnEEanMHWFQH6baZ7EgDuJoSpYCTXTMxxc1LTstMqnFbSGiGSPVV6h",
  "key30": "5L8JTvV7Gg2oAw9NeKH6wX22WEqZju5mujZB6zLBvBFkdtUjxsZt5Ue6x3BqVQ4Y4VftzzHSRpVdYLH1fHgpZUdt",
  "key31": "j6XUmokeuKJKPAxA51CC2ZLkZ2PTN8rkRZY1BAWjdgyQN64GA23t7UTYCNnHaPZ7AXovaEytF2KJUP7aA29xAov",
  "key32": "3TCRdF7ZasHXaBxXiVyoH6gnNyWGZpsFmfTSsNdKDN214WFu666YXtKSHA4cYrFt9reSnKdcW1zEwrDfACw6phjH",
  "key33": "2x2tMLreuCcBPBB9J8PYXTtW91kXyoxuwxkHbn7TtrMGHjqY5qaW5caGvpYQ1vkiWZvgStpTruRqTF85HjEJLkrc",
  "key34": "36npzKzMtW6VAwi8MBDGLr1QvHY8ogWeLFFwF8aZhmCY7Q871AnAavbSSxjZRv6QH8LnwWeKpZFS2Wi1J83VVs6G",
  "key35": "2oXtqc7p4GEGVhBxCksGTumhmuhA3XgLMz4rxLZw1V6dt8UQ6TiRyjEiiHDvW3UMEU4xQZcwpDFyQsL4dZs1Cy4",
  "key36": "2HsTTYZQjEX4mhsVRG7oWCwtPZPuV2BrKPgYatB8hTd4uhtzHaSZkhZE2cZBVc1eDjQF1A1idD6SsGWwvZjnaHQ4",
  "key37": "2oGMPsEwAAqMx25K2WFSSn5YkCbFxTktikFur32hwjv6ZUyBubNQHRvbaCJFbNKm5B6v493jorSq3J4X1qiQFiPf"
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
