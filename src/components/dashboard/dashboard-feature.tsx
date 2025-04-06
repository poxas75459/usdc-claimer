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
    "3AekP9qBbP6BTJnerCkraNVDtk7TcGdYxbUhcBqCHMTt7LHDmb42rEsGiL2mhLU9c2Wdz3hFEQu9eywAXrPRCGZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJvZuqxgKX7ua7LmpTMkWqRk414Tq9jPLsfpeSNQAvSJKt3j78jMG4MG5PkVjcrA2qX19MRJEcBB4vF2HVXzg6o",
  "key1": "2k3VsZf16nMkYKfft81EKnqoQ64U2KtUQCLLrYcYHFmPFGAoieq737tG1QTG4UfHYWz92QjyUE5VhuGDSArecWSB",
  "key2": "42Bhfv9cE454DodW1tu7wED3J3ZcUJPvsW2L8BpdYvvda3aW16QmofjuX9qeASGBPLKP1mHuaaY9RmHw4YPCiYYF",
  "key3": "3Nfuwb5fjP2bxrPjDKsPm53xVySFNRAS2ZxAjzmcf68goy7vmR5NHWeHuA6YT461Q73srLUFm3KefvKYcBshvqEi",
  "key4": "3kq7jE8wJJh2Ug6XbnmKkrgHWQDVY4tm9wBJFa25iwCHFFYZ2mETsfUxonn7YmPvSWEgjzvHjdREfrVsuf1VDdVU",
  "key5": "3e7PTRoAtF3XJczb4W7G1g3H6Ydb3x7TBCV6D6btUG2xQdX9niH7s6C6BQb3wcSp6xxNQVFrMMjndjYGypdX5wsx",
  "key6": "2W47z7wNH7aL7xyvvtSG6vVTUTFAHGGvYu1ukBUhtSKcv8AatogbMNXvtzPvmQd9uRqJgih97uxBGr2Y1Rs9nict",
  "key7": "3sKrrRzMxcJ78tL7Yxxq7uCQVaQMhq1omrysFZRZyedWvNzY2oQ1MDFguKedF9sQW7RRJFq8FTJgrsJxn3CSmrNo",
  "key8": "4PtmEYxrYb1vh43HHsRcT6Jmzi3NDoDBLrmGWMgvJtguYp4JwB7GkKbzqo3WqpBji2Sb8iuWhp6Z8MVPWfsVqxfN",
  "key9": "5JNsu5Hr2m83aAQKU6xUr912MGavTVqdzoe649CRv89BpR8G7uDMBU9BXvJDhAjrp9RBoDdHPCwT2asUMdcpVwNu",
  "key10": "254fXEbZKVUNFdyNCjQehzyJokkpWENzbbF6XDYk3JVpdYp4XzWq1ikPycnKovER5DhowhwiHa9KiBGUwf3v9dNx",
  "key11": "4abxtxn3V7iAytKaKtXXzSMcKX8DDWvE7964AHhcM5j2gnGcSThB6wNhZsaenBZRPG7eZgXQpdsbUYPFZ1UQn1Lv",
  "key12": "5UrP5VgwwpNzZ1LiiTaqq9bKviqXSp6bxtzNZ2mxBoo7zpJSxTMkMpUiUcD4RTptEhXkSeGatsrBXU1HRM94aLF4",
  "key13": "4Vso9WJsZ73D9vxebk4UD5kiFEDUftgc5ahwKdTXGnn4k5PfGhpF53S9CQRszxkXemvCQ98xnKT8vhwzBarnLEGM",
  "key14": "22e1sQ9eg4CKQ7mg7rWYqvusM9tAZEZhxiAwhQZnexajwSCUC76WrY31rEEQBPdRokbjYdQ5sXDnjrF7Z5nySkY6",
  "key15": "33oZ8iqcwY7sj26ZwQzCNWWdJzFmWSouXHEvGV9whzcX1HpvucwGiMDibq9VYq5tWpdDdnn7vNy39PogJj3u9KZx",
  "key16": "3Qocwpj4N5Mgdnxp1Tf8EUHEzixMioeKMwMJJb5HrEBCdFtcQ7W3amZDoAcuD69WcHcmpvNDc6c3kB13SWv9r7h5",
  "key17": "2d8TMpwbTx6tz6xpLoZrm7UF8xQkdo2Avj5zcQSUiivZCirdHt5S971ypaY9hg5iHe8Zy6bjG19X88gc9BdiX7Yp",
  "key18": "tVvubhNBByFrkUfzFouf6k1ApifpfgBfy78cbnCmrjapigAVqVXAK5GFp7iVZ4yPcb8gSbPb7UzYQ8p2D2X5hMV",
  "key19": "4nyT3LoZhbNA1XDatoRaAtSrUbmEE4QpqmtuuCjjR3143uJMnAKhNVCtxmP79xKp4GeeCgR3r52u5HzSoUxhEe8u",
  "key20": "3rmLTnMB8myo8wQrERVHSLLtNkYd2teEaHbpcxFQXMKXnRjRGzbHRz3MeWWkDTf5TDJSnJvsHxepmur8HWdErXKz",
  "key21": "2kcmgQ54mBcv2QZp8ahQHQgJg1mpqdeDPSHYRP51a4FRgHzE1tvBqUwKsxotmskF3WnvFe3Mt3Wvva8TC2PMKZEP",
  "key22": "3Qdibee1T2ZXCABnswyH2PezowejTrmZZAE1f94qsFYkGwaXxcpxz8v8VA95ANHWuM5mhcFfxa1XEBYSaRJFeDYo",
  "key23": "LEoYRrgkidQ9fXb3R9bMizuvABjF9y623V6brDkccWk5iUYvRGCuV6HGvsKHDVzq3CG3AYVdfrg1DH1Qo13tjnc",
  "key24": "2jCSwZDAp1f4Vg1pDbzCWjAc7oT5NYyDDMzGtiniV9P2UAFd64YpnwVSJNiXv2VAMHZZqfJSUjKsgDRYp5MpXXtL",
  "key25": "5bvghNXh5oCG98cyauGsf2f81VcHfCQcZnzdPUUYcesoBAAfZWaXfcqNMNie9PguEgQRDggoHd7zSoTSafpGBxHu",
  "key26": "4trfUakF9vt8Cvy2aEQCPJHafkEPxczjpoADcSUbjK18Qxoq4nFMtAEyk6Ue53qJHCXKVaa3S93GWQdKR5Eh7nDw",
  "key27": "5iAMBjjXQ8ddyLbjqHgbHhym2j386rLhzXjhyuawVCMUUqJYLTVyojPka5L5cGsh7Lx82KXWJC3DU51T2b8jJb1",
  "key28": "2UnqtEt7LDEyKmoq5kmxBKXDWeKoz72wobEDAGmLdEXWHuPHHmgxPhK5Cie4JFmjcFprBR4npwmHnj25XYb1UJpU",
  "key29": "3mMvnSrE8ZUdZNHdPWh92fSYvNuSk3EpGg2RNv3aRrMbDL11umweuoWF2Ez52Lje7xxE6RDM9GowS6zNNTjJvwhZ",
  "key30": "514k5zJq8ukwL6pSmguHvErEhNYa8ooohbRaju8A533N6ZEhfYcsDQC8NxvBLYtD9LPVQd6JS6asrdKCMu1GjPnm",
  "key31": "2U3aknTw8ZdpPzBMJrffXjy8ArswgLZVgw7P2CCn6maYULeZhXbNhA7DnobMBAVA5YzofJHVR3rG6Azf7ve48rHP",
  "key32": "5cgncpJGKfAqSSjdvndi9uvFZFq8YV63Sq9mgTvHG5NgypMSYBZQ3qk5KkTD4t7sqMfQjRzswfRECGcUUDE1Xo6L",
  "key33": "f3SCKvXyH8NBF6dmy41wxVKsRcLgQqBfYswXNn11nSStRvrnXiVqPPXevvegbzPxdU4ADtmweLV2fWVRz4f9BiZ",
  "key34": "3idmtRWGvoihGBUESJMt1XQ5RX4LZfsk3nBYuXvrTnAUt7Gn5m6TwMTicKdLutr39StycjchinwSdY8PRMohwP43",
  "key35": "5kCazC1F2YV5HWqQvhtEKCqm9aMoFfNRd2S9nTJzgVDv2ukPXmUonGYmDacdYmKznXJhJiup6W5tsfVfVPwbqVWv",
  "key36": "5BfwwB7D2wXC16wP8qPPcWZYwoBB4fL6HfF6njZkkDRM7FEuPbfkSxmRgi2WBC1MWyFNdrbTXTLvaEmBZZAmxkAZ",
  "key37": "2aBnbQZpMTXha4XK3UeBncBMXrqN8jXT1VzBGK4qfwBVD3B8AvbXPRwpPDCR1aRVT93fgeiGgpb4Kb6G7DQzJ24y",
  "key38": "2sfR97AX1vmSaYTJgknfhe7kynR8w28MkZgDoJ45kqKG38uqkDyioL5FEK86saPub4u6L174ihrQNyW5LpCKn5o7",
  "key39": "5hw1SRkRsmpMyqsTKfU94uEdxRs2RunANkehCxXsJZ8SoKKMkzUB6TBsTpitk45pNtYmosQkFY3DyYyTNMktEL1W",
  "key40": "TrSJzV7Wn9gqBaNCK7toie95dxnGTXrECdctH1DFn6GcJkDH2wzVEtJDTQbrGJLzX24nYxJZgfbuENtY6oQdoAv",
  "key41": "3cWxZxt926r4MVuvj611C48vG6Ujn39n5RmbHHH5FDzEDUhmnJwnWHMqVG4D35DQmM5eWYndAtgtubDUsRy5Gi92"
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
