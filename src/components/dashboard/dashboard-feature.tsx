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
    "2yUgFrVGWWjCktGUYTaoD6ww31Swwkq1NxGpm1PmsU3K1RhzyQTZ8c9tLFhvPwTxHCZTYuqqrnNfh74AtfseAU8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VGMQNvRFabBekff8jAVEppD2aFigWA6LC9LZt22bepVLw7i9iLeBhpXgTeRSY8TrjahKEv6c6oLvV1nEKqLXc2J",
  "key1": "3Xv2vxt2JjJS8p3uLDJbp8b8URTPCx3HbsPZSYQwVBZGhKDr9b84L11KGa7LNhL3eFq5D7PvuAGotGoaCTpnzSvt",
  "key2": "5qsxnmpAXh7VuvprSxz99HaehvxFiEMtbzrLunDNG2y1bVGkP7jJdTai9z15nUkpXK92CHCvtXMyFWnKvTbLDE2W",
  "key3": "31HadnrcHD4Uw6KkQkHMbVVa5xwV7DUpSdwJKTXDvbU1WyuWyHtCtQ3dzHuSaCCNV9mZ6o4NMa8xvHT5gf7QVeLM",
  "key4": "SWca8WHyQvdDTfBPjTWrDQ3FVQN7TiVXBrvmzxvGhKEwPTmW29H58FVDAGWbDSexatC9RaPUN6b9eYU9TGt4iTb",
  "key5": "3f4p5Xq4qbcC17kmCAeVxFZtvRaVLBLQLV1kbm4T3R9qrATaHR7rtRitvRxSvt8RmHTfqd8EmzBwYkd1kDpX5eHZ",
  "key6": "5TE9wz5xXzw15n5gKMgqetQ6629n39QxAQYuu8joSqmMmNbi3N4pnwiNVJkivhBkjV9bWqrM2sNwR4K4bRSEmH5T",
  "key7": "5aXPMPjxT2BQzmLPvyZ3oW2C9XpQ3HaSvuSGfCbXFJnpUecWThBC6T3hFWUMQFrgn15FzDsuH2P6eCvWhe7UukqP",
  "key8": "5R8fsD1QHzg171PcAmTwMJnm8BL37QjGkE7VNLeU6LR6FHDJh8NwmWnH5QqG4GScdbzXaKeJe9ZWdZ8cNnC9Cfx9",
  "key9": "kVhW8hKC8WK3aQQhdQYVR7QLQm8rAz8n8U9DwkEbfEzHhf83zk6Aa8edVUzz2UjtrgPE9hUZTqJsH84Tj5YcX54",
  "key10": "CtYqCQ35cgkgM1NFu3fStGrJSq6mpxztNPbcyBSbGMYvzYYi7mnRm9qid4HkjUbc1gsDcqYUNEz5PpS7sEUpQwy",
  "key11": "2eXF7f53f8DQ4fgngtRwyxVT9sZmwqg2q5EvxqkSWNqhkPqnWiXytTLWRkLhw7uZUQRMgVSDXnBqxLKMq3K6vze2",
  "key12": "gb2jbxhTTNKQwnXvvaiB5YHm9HSjdViefhxVpVK5QNXdaSAPBysNxZhusXHM8hHsx47pBXtntuQGQXA8i92J9VT",
  "key13": "3MYbhG91RrMEuEAxFSmiUvU7RfhTbxUd2ewktPQDmAfQfuLH6kGjEhk6PNGweqm9dAxXMk8K4G4T4P2g8AvipGZ1",
  "key14": "2xAPMidCUGQgnZTkaX9nxnJXaJ9YchkFCnChoJdiSsC6PaAdXPaWead4pWj1CZhfLZkv6wVQtSAqHmkQ1ASDgLra",
  "key15": "34bTVcL8HJ61cHB4Yukmw9bMT878VA1jKFvMSgTsSUVoPz9ZuXDduGP2fgtndRmKpJEWigThmSmZG3aZcKuRHtec",
  "key16": "128Y21kiWeZiZugHmq2AvSu4CjQuGCTrT7r357dTNR6YHMvXzBR5B2Zq8bJJBEBcA7xK4uLUgrYxvtYVGhZjy8Ce",
  "key17": "2XgaxWji4iQCNJKuGYE5noBKbW1W3BYekbzP6tmqTmgNJNG6KVQGj93szu1iMzVNeS25Diku3C3kc16vPY55W9Vq",
  "key18": "4xUk2DGEJjFU1qLrMfJC4iMLhfzqGv8C5PF7nTUd6R9Rt2F9kRjsnZnZ5gLtKT5uytS7H6zAfdQ9NTGjgQ76CRGL",
  "key19": "3ELkyP9AWTcmRKogdQCjbrjjRkcBK8KizZ3HpY58WzBqoJqwyCTmAWcghZgWgMdnTWUDkGNFLH7MFUDwqNwTseQ8",
  "key20": "3Y3dPhUHRtg8vDbu5WCkkgViSHfnrzKsuChcJf3h77vfQh1KnhpQNRizY5Tn8VVuHNVgxqbA3ezCAyUjrTHtTp42",
  "key21": "5A2vQvfQSo29PyPfTTghpqX28TiToaUabNnHBa19TBmUWXSiqMCBNwyPs6pcJ7pLjp4yJm7Se1MaKdtM3i2rThcY",
  "key22": "5HkWNHYU7xMHVSyey1oFo4Vsd8H2CKp9T5ATVPRrTZu9ihTdSbDgLp6Bj75LjEUnNbbD7Mfy578Bu6SHsYKq1bjT",
  "key23": "MPALkm6ShDZxgKWHneePp27GkQo4rAtknkw2wBZ3qq1BfPVem8nEwJntEN9niqhEacAcLT6ETFdo4C2Cp7dkMxa",
  "key24": "2MVexyKiwAmTTDShR8AfHjCoYskfCZDsTmFojE3ZVqmDo1E1dX4qE14N51EbkFX3L6ur1skcPoAB2tCWRxKzZ3Es",
  "key25": "Yn7axQ7NLTRNEZXb7Cj1oTbKgSSyXXq4QnmeAViXWjkkzcqKqacJNF3Td53ewQE3NaoR55JU7r4wsLYDAGeeaf7",
  "key26": "4dm3sLN8WcNjMuvqWEJ4iVgKFq6CsQTqjstEeZjspEv12Q3niV9h9LW9n5DeZ66rZRpcjVVnJBBHEReYqWfSyeFh",
  "key27": "5SPRDgUWRTGALkNBvEfH7a87fZEq2DjfrDvCCRC73jGK65cH5UNdbuzowkH4UNivZLwwL83b7vwmzR7YkPFgeSyn",
  "key28": "6anKPBW9BgFcEyfCfze6Uwrtpm1JvckJDPiFQay2MRihCxTxKzqEk23VAvWWjF79i9jk4nLuWY31DxSfGCuWxkH",
  "key29": "5LEFqhkVKN86uy5xSFM2X6yNQEHr3u5i8n8NFqHoUcDFQdMTTJoacS68jbvSQt4WBAYoVfxiE2Wk6PHSJr2hDuW6",
  "key30": "3AJvCnR8prDHKVqaaeWBrNogmp7HHusHiAwBr4VKaW7vng2EsGwaXHKevGDu7uUYuzW2P5k4LDy5bZdJF9LdS4qZ",
  "key31": "DuShnqawhn4R7ca1X6EfrL4tusoQmqWYmTrCfk5XpRAxBYWAndkhWQrgUnHBH7PsibNKE2rq65m6MjVYnjhe8vM",
  "key32": "3pmMZrfMYVUXPCC5xTAyabDBuNttpPhu53hGSw72qPhds3RorXBR6DFyWVvTnniw1AD1qYUCZNVSRFtkQTynFEC3",
  "key33": "5BVEWcEFR9tw4ZsaSEPkSGr2bdwuxLoHHzRXLahdjttM4Y72dhhPjxPyWRg3rDzweHwZSW1jCYTV1RonmZGs9V5v",
  "key34": "EStanJKDXxA9Q6at5b5xVjfwpeaDy154FpuHTGsBQBbjcdVChCFJEqtKmjH743BpazQ2JtCNXepMhdDa4X73pcV",
  "key35": "3Ywdby9EHB6qacbGhcvv5AHitgSmrpKEcv1CWfmn8c6QrZdt4FDKB9haNHHFeLGBrktXDW1jUbdATuHwmupzwtgH"
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
