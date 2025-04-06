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
    "4jbeKi1hutuprFxX3bKofyEhVjWq4Be31kBqZqxgvR8JNi7VYbkbEZ73coS5RfV4crMiFYQuJQ2fDAhc5Yu13Rms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmMdtsEhtQfXzxjswnEiNh8cLoTpsiwCLjoddSbPrYk28nAyiLurvarSw5R6ibA8z7RtFTptziTpHhHbs3Sdi7f",
  "key1": "5EyroVLvJmvctNGqpKyFVxRDQRm13WqWzsd1wzAmu62XdpLVvE8Z2ezqePq3DXTjGpKSS2wCSNnWUTRpqyUssFvd",
  "key2": "266mh7pntWKvogvrSdbgzrC2vCwC3D8ZSU2BCPtRgPTyv6DbnwdtRgjVi9CXfkBEFFc9HvibrXkQmNGu5p9m6Lod",
  "key3": "oorQVs59Pxk7M77yMqfCZzc22hFpdiSAa9rKmdQRJZRvg6ebCCAZAMKGweMs4UG9YZohYHrf9U7oHkMNp4kDg2R",
  "key4": "2wTAfFYegcNCzAuZ85BPyrUrxJ2nqsMQLcCCGxP5Lu8bgU4vhAs8dqHGJNy3FHtiaELAXxxmtSkhKDXRscSG76Eb",
  "key5": "3ZCTfA1o4YkkRDdYX9RESucy5iSbhsEV9BWwa3Gsc165CrkSuQ3oSvFgbopKqHvF4npvS9KssRbL4WhAisnNq5gR",
  "key6": "3Wz5Vr4Zd4b4PcXxiaDHMpynLpxaZwtrzUGkbpG3GhG6QhnpRcmJaqxxgLHazamkceoE1riz9fm6Fng9qKhTBZQm",
  "key7": "5LAUCTqCquFZdtvpeNTzrvbCG8qQ2JSyHzBqtoVTAvpJ6KdP2Bv1i99gqr8NF2c4XPMDcJQQJ7RsQN5MUXeSfdS",
  "key8": "2FUnDPudT8dyTaNiW2ajLajKATQpkA37QJxgznuN4MFVkL2AANDcYADmyX7ioKN29yuAZXzsDGoxmXxcC6gwDzTG",
  "key9": "5hePNcS5UTGAgk7uSSWXVauYhKMdPfT47U1BMGHfomHtRXKP1Tcos6znMzbG8gVyhC7VHdd6Rzb5vzKC7CrzDnJo",
  "key10": "3vDGuA9xJGSL77AQUTJB5pJrPwPVnVUGqDGW6HYTyBArrLe7be8UJqZrB7UepN7zTQ4mS35W5bvycbm348NYTP6n",
  "key11": "5z4gQmWg9XddUsD465oMnnNNE4GSnBWWFzzbnMorJGLCk772KzWuCZ78hi2Z9cGxyyHuhthauqcQNZnWi934EdK6",
  "key12": "2zmwDtD6d7bYpg6MQCymmKfa88SJTmuaANPRwXocwV6gjGzUTBfwWU6wcaYPxtAUdNrgWSs1GwXiuwsXMLCUyZ3q",
  "key13": "5hkRhx7PshjxrXcMrQbU4fE54AS8x2NSHHTSKySChe4e4T4FNthStB4Rtx6QkTpAFdrCjA815L1f9BbhwwF13Mve",
  "key14": "2Y4nVctuuXppWktxaWJfjdNiMyaw7Lu1srNxBZwzx9fPqkX6zaoM5QFERnti3JQCQ1iQE1XUNhVYnY1TWdtbiyvW",
  "key15": "249dUwq6hmt5fVjBTdBKqMaB4QZhxTCfA7yYfgXtDdfJL5fVKJsDAnXs6TypTtJNUqrxNimh9n3mbiY2V7HBdthE",
  "key16": "3cgnRqnYLVAHrcJ24xqpM9bozJKftiRGdPHZmerQ8PDKLWRdCxP1daUBP4eQ2UGzv4yT3et7hCQVsdzHWeAZrUUY",
  "key17": "5Wa11wKCDDLZ3hmQsct6BvHu97tHK3eDddBHzmLnQuzW7oNyRyjHQ8twvd3Qss3BfyTCAaJuhYi74tPFLdjj2ni6",
  "key18": "4sfJyuh1rKta2rB5siLd1ZduVYe2npkvSv1JLJoh6bu63k8Qap7Nwn4BRQhkw3GGatUqcQVZzAxo4bEp4X39EEsb",
  "key19": "oGKyQst6W5nHU7yLFkfGmoaAgd89ejjJVG2qPEc7MtBasAN7Tzp5qPc1hfQxcrdVZZiEAAMMc9XgpB9vEf969Eg",
  "key20": "5JLDKo3ZoCma3T4RzrjtLJ9zVhjZG72vNUoRNMh7GrkBNxtmo8abvvEC9VvxScVvnpWpqZoQhnGteRRjzvThSD5w",
  "key21": "HGCfeXwotPMjyrtLbvGPfasq8eAGdFzQvERF4updqTWQ3isooiPdWENcrx62DGyzHG4vQVfogp9RPcroXvSmyi6",
  "key22": "53squC3tF864GcwpzQGiMhjpBVUv7ZXCvKbENuxHiTy7wNSDazQ54E3JUjtUaypJh2XX6cTyEj6TzKwPkFyjEMrA",
  "key23": "5RVPpcmgavp7F92tJiZpPYmf7PLUagCtVaCuWiR5WXwRCnKpioQRipwWuMTXPLSHDf8YzYB31mwk6M7BRFBjHfvu",
  "key24": "4arTYppRMKZAxRupd8YnouDBT1uxDYVv181nH9cChqEi6baaTiL6PiSwtATui6xRTyAZyPbWeEAhS88wgAnMGZ83",
  "key25": "4KitTVsvscz7A7HQYgKntXvNAFGut838Xk7K9WAjUWfgcJtFChr4JMfDn8sbS6odH4dpacXKVzS2fBwXysoY6xi3",
  "key26": "5kxb2Sjm62yz49vK3WedongUMN2Qxuakj1FMrXugyC2EZ5togP3MCUtquoB44KE639439FxEUV6ymqHgzWn9pWj5",
  "key27": "5aoikia1DML9Xmj8Qx948bgGUjBtCjYD3Mq9RvVBCpYYaJJm3g6Ex4FyPLBAFQQy19EUezTtpVKZoQ12onFJ1DAv",
  "key28": "3GuMorRUvvxFPj1bEwMMpeivthA2mh48fa989JxweiMmjiW3dEBVCUXjdnVMAobrxX4fcrnqjaUeeNwKJLqyXaES",
  "key29": "ZSKb9Y61ARTzvs3z6zCsrsnYdQELv63y2Ybb7MK1tdfnfvPgsLofr24zh3iKeBD6qp8skakbCQ79HiGsE7NdAR4",
  "key30": "PTU9Fz355CAicDakwehrmNym7m7HFTGTzMNs7THYd5JmiTw31vt1Lx2jFiEQ1CXYuekDQdSVknNYo6xgJpSTeNA",
  "key31": "5wwD47bfmeheY3TbJfWHeW1E3AGUekFXsmX16kmxHAQQdFskYtfrgKbERD8UXvLX34D722kGL5ifFuGfkhq3C5XM",
  "key32": "3atJPVGwgd1CH5zVcaeNAzv675t1JDskRyBYKQL88DwmrMZVFkcJ57br47feLFMd6y4xRZNgxpgEeBZSvLWa8VLT",
  "key33": "4Zq6CMDHGwhgUvLndhs75AoCcT7akLLBGehTavnoW4WPzNcGbfoC8Jh2CcYXbtufNzTBBtkmDCCbSsjYBSAPnGzE",
  "key34": "5323bEQip3Qo9LUYjaTruX7uWtN1exRqcdwweRGrCoH8L3hM1dAsjPDpyAjeufyk6s9HtjHrXEgsdginRhzAnxon",
  "key35": "4thx9hQtse5Wri5LD2Nwv3GoCSv8qsETwSwh79HNYGnym28cfefW4zUakxfvN4bR2FKJXFmjHpyfb6jxSqEivwKH",
  "key36": "211mrYLSFgEtruR4iMoeaA94aJLayF4RLzTDf4BAouzUm3XVhWWyfUZK9CkW5YTbLP6zgBeBZgurLGJ2YPweaqQq",
  "key37": "2RTYt7LuE5c1UkcsSQ3xNXatzacG4XYcV3WtgpT7k9oiJGw5L3LEGWVgmGEW8QQudNXSXSuC2kkFUadKwjR3Svh6"
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
