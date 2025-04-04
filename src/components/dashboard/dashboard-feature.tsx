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
    "CCqGzWmNqR33AWefwgwGzgBad7Gj21kDyfJJWB3iok1x1E17Nd4UJdBmXyPX9LmmnBxHf1RH4Hn5SK1Lb8htZcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pn5xeoLYpjvA8FHjP2YoSj144txiabpzC88SdXg5trJZmPsm5MqdoA3MvzLn44PRnQKDmKsUkQ5M9BpdGhnvahC",
  "key1": "1ikdJB2w2hVvysFmUuUyP12KqoMwqQAddJ4PmpW7DTCxYFKSEpmd8k225ytRNKAbnpnvAAJ9BqberKjtRLzP2og",
  "key2": "5n2veFo3tgZomkq4pv1whMkpJRB6h5mGHctBC1C54cRSGt7ee1BMtrvVA4ue2be9aNiHjufaUhf2P6DGLKQ2gx2t",
  "key3": "5F4i9qgdodCokZTxbq8VU9m7W95ZnZddwVN68JUdiycEb5f1nARjSsD4d1ptkd5ifNZvP5Aw6vXhUBkH8aS84jhh",
  "key4": "5NLToAJqgyzi48HGocqvdBxVDpV3HKU1VWhV6Eq3Q8LTeiTCd9niQRtvBMPWdR1Ad3bWow5PG5w4Cat3N5xeHSbf",
  "key5": "57GvrrD757nxTyQ2RNKJjPxHiVQqBQecifoi4EKyusosDjTrivmpkXieqq2NQFy5NLZJrbNtsfHrKfa7gwPLYrah",
  "key6": "5HM9UVp5sTRDi2YychtAFQXF3skZVLuieh421ogDHXSzVH3MXstRzpEPfJjcgFx8VGhG9x83CmG48iy5uCtUEPzE",
  "key7": "4VTtm4Dq7nVU2mcBG15NQRGDU3zc3b9ytybQLGtUcyxUhJD5LgsZSF3JmUtbZd7wxhFCCSdHF3C6LAouyj9NoNNz",
  "key8": "5xhrepD5HQyxFEHR9GfRadD4FCt2Z95TJg1ZdbsXXj1M4JavEzBUMPzxgJQQWm9Qrr6HiFgMnSnAsVg6oYKps5Ch",
  "key9": "5BWri7whg8Bmd9U8ZdbU9S5DDkDYfMDWmopNTFSiE3GS3Ft4mT5K8KgTgjgik4ezT789M5x7GMYHbLJUx6AzRAFY",
  "key10": "3BTc55aScfdV42PuxgvVyd8EH8R1qFvy7cW6CEExamHyHmKkyszs4h7Ca493iJ96QJKXXF1LDd5SJavYHG3DxfGg",
  "key11": "48hRQLSS26Xxv95VMiksGpk6PWLcpiFE3sXQPB35FA8fWEMbHXjme6YtDMfNHdwVubB5CQWPuujKXM583VXKN56M",
  "key12": "VC1o8b4YwgkUUfjW4oeB2RKe4fsoE4ztEpHgGnm6LcnaxQB4kDLeqJBbcce68NS5kwTYaSARMh1KqmmgACCAgwM",
  "key13": "2L9SRbTkkRgotFPu8XK79PmGvcptkRFzNC8uRKeJLs18UbkzHeFtatReuJ9J4rFmVGGiiyCwZUPnCYYZ8tousEch",
  "key14": "5SmYsuyqMVtvXXHR8y6zyZc6bYmdKf6HyKVwPoKTA564SitFKBq4gUqTeHNJxaHJJiAqdSFkQmPL5ARzF7HdpYzT",
  "key15": "2udTTEYQQEEu7Ju67NeK5WxmPCFJysL6k1LDVhqHNSeuJGyCQnzAraeicf7szLPngZLxZ7r6vCz1pyVYZAx4rKun",
  "key16": "4mzxKUSrbWmSwZwSQ9QhmYP9kBw8aXgfZK4Sfrf6yJasg5k2PDkkw5k66F6b1yBPpbVh7cTvXSm9tBdkNbDgUB2G",
  "key17": "2qmYWNQCrd8mbdQ8fiHa3cubrjALsisQmAXsUMMfvTVFtdCxUKtKKwCDWtC3VMHB7pEmNn4QC4mfdezkSWFFNeV1",
  "key18": "5SkAAWESM7ru2whhaXRfJ63ic7yuS5EpCh42miSKVETQZ3m5roZqQXHZErhh1Y4ZPVdHTjWTsdJcNNS7P2RZuNme",
  "key19": "55TeiGvfdZavb9kpdg2XjE4gRwaek3TTMTkfoBuPSF9iPHyFWnRDvGX5iS3XbxUHiXHR9QcJCnBFoSuVyr6vzHxZ",
  "key20": "21NjRfot4c527ecThKbpsMaC2CjvkxuyWD8ok2fAG8vxF8hmBgufNWKMtRyxBcwh46K9tGcKsCgbrJYvAqtShSda",
  "key21": "4aoDa3aPVUVWFQvtPMn8ap4zSeYhE95jZk3G6zeNQwM6QTvYgC3rzcduZmUnSqD39ev8C4GbCmBbbjinpAEMpkQ7",
  "key22": "4zCKa9CDYoJH8p5UmTwFoT31e2ZAaPoy77vHRhcKBZiepwsfnY7iYfhZ9x21J7Tx8WU54tATBjFVCGgWNWKSWKsi",
  "key23": "2JnkhSszSTXEJufwsq6B3tMAU7RN3oJEPrR86z4NaPezauLSsgoPaMYEA59mV4XrFqx7grKG6VE69LNoaB92d5cv",
  "key24": "wAukbr2eckoiXANWpdzXEAvrLKoc5wSAKYn43HPGBKND98edeSgWiMC8btGGhskBeyD7BXAHfWpwgFyXEvAozzh",
  "key25": "2yLcSUbzUy287eAQY2VJRXgdvFKzWs1RH1iLeLKP6fPxHpJP6npPCppUz4bs6iRx1VCg2kKNwXveVe6d6H3QCz7w",
  "key26": "31c16DtD3HyV3PpjspuUbM6orw7A4CcWJcaecdBrZxKpiudqTRRS4DL23mbm6TGE2PNw1q51p5QG2NFAVLpdNp2i",
  "key27": "fDwLJp6tJJGvc4UXUu5gWtaR5ZAUD9XdQwi82ZjKfLaNVyf9T4d5cVWogkf5JLcHZ2BhwYRM8ZxqEvNQmAPUnZW",
  "key28": "2FYGVAZpNgyHhyHRtKbyGAmNAREpSn3ThWPejMzuoXNsMHSH9bu7JFmvJmKWLcdjbsUSYL8TgwSPqw9oi7rNaFn8",
  "key29": "4Grt42LpgzpF1ydej4yLqpU8BxtZPyCaw3MP53CpJvzTyiZ91ptV8XwFKPBuqjF2MMzKyqNV7wLzV9EbEcWcNA9P",
  "key30": "3Yzoifa98fQztbxsr7Xa584TrMjL2q2NaBm8eUZXpHqmiew7gH8WuakyMpSfTRDsptczi9CSj3oq9S5fXemdSU9A",
  "key31": "38ypthDyN5vkb1KPhHTB8M6uYVUM8aE9vmpD4D1hnN5aQtcdBLr4uqDxKzBLC1oJy5z4UkuAQrMAGK6GuKjz9vwC",
  "key32": "52FuuMPn6YMjMDySVysFqUefHRFYdELZ9DdPsf8aQApokwjZeGudJCcMti1AKRohXUR3oUv55zjaqKDMChVwmod3",
  "key33": "45yZCX3hud7Mv7RqDB6Zmdtq4GbK93yn984U4unWQpPyJdDs7jewqhB7Pi9fkRsaSxeEzYFoLrdMH6DnmhXsceUG",
  "key34": "4qQPfncic76bbkVcS4dXdgzxDJpmtadJdizpqMFLZSWZMMNHL4sYjdWsq6d8viZAkuzFC4HRZfsL3HWWRbTxFguZ",
  "key35": "2RDvWKKBCVmB7gsJGzLQPjTapAPxAwbMEkMJTY3ckg4uvm6hYyauoAU5xPeTh8pvsSzJ1F1SsVmbr7FocFvibQYT"
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
