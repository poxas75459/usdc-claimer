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
    "2PdWi2tKekqP2hQr2UJdxhcGP52NHzut1USGv3BXFtUzB8HHcyiejTT16ENuqVPaN3Ee9174QdVnjjUPEbTB7qVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2paQNBv1Lo5LRXbfRYXPUyoWLoPnkxDYyXYLhUMB9qafXNFMLMjntofZmjdtSkTDzacgmVx4QmSLQakh9SnYni7G",
  "key1": "2irXdoX6PkGCLPhX3j3ZwCZGir94E55zL7H78gpKYQ5HTFF2GBJXWKCbiBXKbrkN4YiaYA24fi3emWuzZXDZkZke",
  "key2": "3HP4Dg8gWDH8KcPjxaPcYJKLyarkUjdpYXZ6a3qVuBvk5KZ1UpgLKVXHfXtWTMG6omNdhjFo5ocbfwVK6JNmEQrc",
  "key3": "2W8VV8NL1TFBWNPXPzz2BN7rAkzAn4qe4dkhwhmSAQbKLcBFJTLUhTgEj5gJDmXKrv3VsHp1SHXgN27J68oefQbJ",
  "key4": "hyC6Gcsd21QQzouY2XqNdd5F1YzagL6GrBRtcucdLt7RuJ7w5B47bTYrtHL82qdqKtWqR4VpYjdfX89cEmybUEN",
  "key5": "39A5BMcmmt8hEtvsEu9NsJeiGD9WEauhTJiqmFskCq3D49ti1rQMZskrjL85UQ7uDxkryKui4h49jGGNpc4JrMid",
  "key6": "3gUL6FmWP6VALovxXEG2w8uvomQpTeuTZg6eQbnFsDdhrEkoRTViiW1MPetKZJBHvzHuASbdb4q2zt7d9ndi4Say",
  "key7": "4FXrJspUrQEN7dxpZcnuCRPufY7iqzzAgPo3G4LS2hYmQrWVXjr2Zn2GtiqjWBMBhedsD5i2dZwLUnqzedKBK99b",
  "key8": "2jwaGpa7wLPES5LaqzUmcy6koh5cXg2vEXRBU8TUdW9Cc4pp6PNoqKPib3Nv79m9SuPRLWMUMRBqRhkck6QsZhgQ",
  "key9": "b6ZBAvRQ7nQQAEkcK6bZvoVb5yreHWWLTrWCSi1W71Cd9AHAqZGNGptRnBJvTW96z9EXn9P4rLA11QhXS8n4cdS",
  "key10": "5EFV8nDu8PyhTsKohHWsVDADNorp31yzFTYDZqagyKiEZr2kz3mFDueWLZr91VMBuYu9cDZg4QDQMNhWLZo6vyei",
  "key11": "HMMfEBaPJmJzBkijdM2Ld6vFwQpV9JTiFPByEgP3UJ6DJBsL6WsHqqm2FLHaKvMetvkNX5RMsDR96oj5WWAj6Uc",
  "key12": "2agqWAxeJpfY3p5mPHq6JBNuNfd5kXpTGzSSnxngkSBLKAAFCZgX6gfaJMrrJnivg3g3GExuEZUnsdJ7Fg3k8BNk",
  "key13": "gcZzkD1m7B7oLmqn4dAq48jJ7n5bthF8MqWtauYTEGMgoXDCa3Abx7u11oW8JeUxEFVtTgmfrXmTwMvuaXbtKEp",
  "key14": "5rrh5Aj4KZfH5Bq4tTq8s59t4xZy4RQW5ygrNvSPEjmdF6v4RN3a39rK1o6bSk4z6qA535kZSpZkyEPLn2CW3msU",
  "key15": "67Q1u91GvcnC9V2XwhFmt7dub6y6Jgoob7oc9ZTqDXyNYudF5Ro8EiEA5NAXfajByBQfU378WAwUxYGgofNHTaKx",
  "key16": "4fwaGTECgEL6FANQfpNDGasKEd4RFQ76gJSdfAYyUF481tYyGDNbhnFuDkjWJzEC2W3cqqz8e2JU6uFA5o8EukUG",
  "key17": "ZLANTrJ5MpMqZVLKov7s1GVfu5TstcJBXYRx6vEoiJzK1XJJRUtWBhPmG6hvVDubqw7mUjQsXxtayptpZtRSu9H",
  "key18": "3oa55q4NSX73CWRDZUipt15wdZ2oSKXWUo1DsfFRSheaadCBwrZUrGGLMHcSvD9i5ZBa5GoGPJ3ovJzXbgZbL1YL",
  "key19": "5D2GZf5ESgUQwAVGTXobZk5aizu42TZ2GDaFeGyozc1prEv9Y1NtF1ePXYZhyF9DGWzb7wvtsM4VH1teyWDcU9dJ",
  "key20": "y1P8s74TorNAR6hpKSU55PxFsVkAU37SbPRpEipahmELakPfE3VcQ6CjXJH5NSLhr3knxAKf755sB4G5yGVWwfi",
  "key21": "2s7xxyDzim8QodJ5YJnZFR5wBHof8CPZnxnAjCXyh5PxQbydfJbwQU3rUJhw6NDLGD3D5BsCfYp8NHrpAc6DjiUj",
  "key22": "5LLYgxV1uFrMspLrboZL8dCzqUG66b4xoHnBLfrQV6szzMKzi8PspMuRM2zryHE81n5Uy8j8KjxqYBKDSpGk4RsE",
  "key23": "oQt4Wvy7C48L5Zf1qWDawGQDAsaeo7TM4oFBQqcafmxJW2pyXNq1mcc3xRhfPG5g6dJhkrNQxv8j3duYUFfZBm8",
  "key24": "2vSCJHhX5A3BeA2tiGi1M3mUCm3icGxW8nEPAPpXUe3KYDGEZsQDR9anUC1apNQxoAYn7Sht7TadM3oE36DhcLs",
  "key25": "5tvWVMbD8bfBG8v3Qmf2n9oEPtLEuA7gnufNG2MHAzYBKkz4BuQw2UM3HmJhzBZBcmD3vSetCXbviPuaDeFKztMm",
  "key26": "4bYZPHLzp3bhqsrWEWMSvnN316wkikLwx8ZJqTjXgr1jXu3zJ8kMiHUv4UyuBsDXppVYqUjsBjqW4Q2XTpArvznL",
  "key27": "5rT6cVtW71Z2CypEWvtn5TJQ57rAMztPzi4aLX8iTMYJs29pLYtwp7QwMgm5oumgdM9r76Aio1rfhmZRvcWMCLPj",
  "key28": "61eWCVHDumbix4ePtKxsjEfpZzapUYMv4CadB5mckJqyaTUCWQzQNVs2UQZAVA7NJVgn9rt4tjMKcVz3cMAdMhV9",
  "key29": "zfPvXkgtKms15TYdGpCtYA732LF6fq2CJ9MeZMQiiYMJBUJ2K8koPDwY4nKDwrbmv9j9kCZjKN5FVwVsyQkkQeA",
  "key30": "VGioPukShkWsvNNYgKAfAgyF9xhKJ8hcTGe8VasWMVogniwpwQeCza3JoijaLNX5o1Lz62dodKAVXiPdaTMMPPZ",
  "key31": "VndbYTz1jxWs5aXs3DGAnj6tGcMF822cUPsXecFwaNP2pdDFfHjLgptwhA2zD6M3deHkFgBFffR3mAtm6HrB6kn",
  "key32": "2WKb1x59qLqzP8LSc6EGzQLfkSLpADkT6bCHeRuMCEEev2YiwxRPBJcsEUk6HkybjEgpyJBxfWD5c4gepPC8yBFN",
  "key33": "eFbKAdBhy3Uto6pVNzv2A6B4vYrZcE3AJoxBRfA12vCY5yxafDWYTwt3362cwZAsKnyf6ZCZeciqJAgPDP32PyT",
  "key34": "4mPfrF3aJfVXbKojW4Ly33FNNBapUYtudsaWzbdRbdskJfDrowgpj99XJgeL2hVbPxuqpzCdRsNPbd5hvDwRLSDj",
  "key35": "3Dq5GehV3HC82RrwoysoyLiPVfPQyeNyeEC3FdT8NbosEeve3bAhJNvokNkDN4NDP7DFW37sRJkjetbBaNTTsPx1",
  "key36": "2izTnpximkYF9Qne5Bpj5x6L6Q8VVRBEU1YhLE8Z5fB5grJawp5Ykrhtzx6Grf54jrivf89iXAjRBM3JQzNT1c6r",
  "key37": "3gUpqz4kqpFKmvQifH4gza583PrrQmPTJtmQz2R9CbSw6ju8VrKhMc9eD2nVFMPgBRX1M3wtw7SMJkJatyE75Pgn",
  "key38": "VgaW95FNsdEihMZeRo2n53PMcgDPnLBoS2HKvQLQXAPoWHKPYz7DWzJtQCDUj4tnJYiAQgRkuvJ6ALvvjg5MLHr",
  "key39": "37AERDbPPcuhTDF1adUsfwWATbYY1HXBKNfq3db81QgnABfHtSPkf4KcC4XcTkTU9RBrPioUMCd3LadjdDpfSqDu",
  "key40": "2fRunupipXfvr4BLRMpHybsdESmnUV5Qr7fkQmNRh4PFGPSAKAJ9W6XF5eyRnjT4VcBiGE6eBDwMt8n51H5ESSMa",
  "key41": "47tous8yR8baL3WXRQnBxBpN5dMmnzqixuZb7fTmKapjHoZrfZ7RBuKRVVMCvvf5JHnLqbrPtngcY7LAAiS1x32b",
  "key42": "5S5f9h3VygdXUUmT2iULtW2ccmnzxrMJhFmKWmzrTzJSdEjdGRzmDxLSFdbvC5CBKneeG3SxSVnQxvHrxoj6ss2a",
  "key43": "3uPeea78hChM1HRcxsCvha9oXJrausdVMpd2cBW12eHtE4bydyuqkEg4vxroNW4eJnoqduor1ofoiQRX1rfUjB4S"
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
