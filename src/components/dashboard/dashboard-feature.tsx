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
    "31KQh84CsJJs4W7eN8TAdsPjVeTz5Dee1tnbFn3mBZwY2uHGyS7kAbG4sY8gDSTV7M5z4EHT8uxH61gQtWXaRpUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NGLjy5fbQyryNyBXsFjojWdy9oxVnNwxCS62Ns71vKrLLqDTrPHEhwjkdo8PZk7tGEPGVjW5MEju3Hem8d5z9i",
  "key1": "4SB4GvfY7Mk84eynETDCtS2jM38quNj628GhCp3W1UuN5CEXzKqy3imoMjrUBFyZLEoep4umdA3Ax3pzTvGkdccG",
  "key2": "JsYbmgUmut3JGPMm1TZLawmB1vm68dZxiKp8pJ4tQHGyVUmeGgxUDY1t584UJeCcPBtK7o95FK5Jsg9CGv8NVFJ",
  "key3": "3MfYSpQ4kG26XZjr7qLJSiwE4REGddd7NjbjEx3fzo9VGGNQpPFA2EvgtefMG6abaed375cbRt91vZSVNLYmH8K8",
  "key4": "4uQD2HhkHJdRESFwRnpUNNMaxe8dDzdNSQJwDhwjZCjPB43Vx8t7hZMYTp5LK9kAZFoRQFyWZetDuQfhjH7Gapzq",
  "key5": "ThCodssJLfTZtp2XvEPV75rf59Tw29ENBKY1zEeHCVYbADQxrqe1fFyEQeAtvt9v7QzPRVnWP2VSTWfVvNJH5c5",
  "key6": "4ZxXfoXuRUJBJ7BbWdV4QTrX6xARzD9X4hZMKtujydNpzJiThfXb5uLA8BdJkjAjo1917Y9WxywXbV38Td1Skbvg",
  "key7": "3K6t7QaB7A2ewX1PCo1nEyjeyLApNhTiRMTE5GTXw7iqjT5GNCuYDS1GM64exG6WiBVBmQktR7Pr5i28zuZjFKve",
  "key8": "57wa4gWdtmFdb6UNwVW1PcA2UUc8NQpPG5DZjgB9tVbudF7PHEV85svPYEhiDdZBGGg1dMmFQZQqsY8NBx1BZPFM",
  "key9": "2CunmV3imvK7xQTNoNz3eMe5WeuBVoMUytmn3A7dcGqDJumCEL8WE8V43VJ9pUCn2Pzq2TgRq2HzacH5xeM83BwK",
  "key10": "3aFdK1VKaAKuNQsXXrpPDMxtfGMDekqLnLRDcy4dz4acUPkd3eMcP8RMq8W6jqQwgSws6WjvVce1htRPrkp1ZeM2",
  "key11": "3TpKi8cN3FUDWXYnE9BsdS7XnMzgUzCrfxK81r2wgo6qZkfYvwvHMdBaNt1yCdFNCibtDExzgvFmRBwP38B6qbeU",
  "key12": "5ThxEB1WwkSmSp9fTNu6CMBKZR2H4DKLXnUPvcteb35tN4uzDHJeqxK2v2vpGn24PCGMmPvjwMfjmiUjapFcCfiv",
  "key13": "3ik6mzAogPFQESohh4PLpgj63TxND5Hp8YPbSD3Hh6JtNe5YLTJCpk1x4KcwuGGyLc4kJhFFBedWACFgQUXguSAL",
  "key14": "2FFw11SkDeDwvcu39YKWNGmvnn1LR6HzpzRcdNDcGxeCKnCa9Y8jQEMX2L5qTqZvnRfYqf8fgFnoidBrXLpGUKZg",
  "key15": "5H2gcqLW61JBP44GFCtnHEf2z5b3qJffG8cwPv19gcf9Vy92ep967Vxjgx1uTxJcikyLB9EpqPRQWBwm4csMqcGH",
  "key16": "BLRaasSML4k5KokJavq3UUGXZVbzdAD6rvPuqX5XVqALJCKVFmpyRgciNs4cBA2aXHuiBD2231gE4WVriP8FvnB",
  "key17": "4NzK34SRWzFbnuKZo2KzHmbxoorvo5qUhceFovdpGegy8mH7GVLYtYqYBn26pdbCqi63rDZHjyCAijfpaiDPQXMo",
  "key18": "Zijz1gv9ZmbvtQUcYQ7QDnjfhLAgp4DwKLjfM8uWbHpu14m5zwwjdDzR478HDSY5yPdq8Jaz3HxugytB2esXAWx",
  "key19": "5BJkLY2TefdZWbY6MXqMYrRURzskuh6dwa75rs4Ai2woMppEUZZ7PeRzK1TwFyyzkyLNveBsBxsJbNgbrB7LZMKw",
  "key20": "4nLD43uNSQ8JqDm4PvJGqLqeXKDvteSuWCpmSNxDuc3F7iQxfAKs2AugTQUc2QJxMPQA5YRaYyYEAbcVPWdFVBd8",
  "key21": "3KcK3krqCGpD9inaJ2XJmAUEXi94dgUMPxEYQGWoxdvEqQR3eZq9MgP6D3eGL9jzRGAc5UMetKNhP6zyXSDmF5RC",
  "key22": "AuTGUnMzGXvXs3MGGFSZft2nA9fojv67NRUcTkm4vTTs2NrvQdcUWtmdJYf27nDReDynPHJnT7QGn43sXmoczQx",
  "key23": "jy613MdiwM5PwUxYUHAWNXEXJjWtYSXbvfvcKfsXrrJGPkn2fRM96ZkSNisk6xJfQnVrBLUxLRZxWxWH8JAYrn3",
  "key24": "357d4HCjiij37u12adB9TWv7vCmmHhCEs5KeMWboxuSs3CWxF9cDnqUxmWYnB9owmArw4eYfMnnMgbqgLMPmdFs8",
  "key25": "3xAVWqbNceXGBwGuJw4GUbrJBQ43PHKi7ue5zQFZqWc6tzQUNeLvSHcqttYbUreT7ahniDwkqEqdkZCQ4PgZubYS",
  "key26": "2EDnE6AF7tgnz3NKg68JYDmeTRKaStG3Zu5oXRnBn7wYQv25wf4vFDKa16sMHUBHyrY5rcmw4C2JLMtjjzyryyso",
  "key27": "66rCeZAmhd6e3P9EvYMJaMc7QmgArbSoQBu3bTGHz5qfXSvPepkDK6xLmPCaWNLHdKvqYMz82G6GMhJDzYFZeDKt",
  "key28": "3kXaov9PzAGeM3r2YPwnNqf4QwWSDVcvmdxjG6gS2paRyMCmM6DbMPSxvvaaP6zVMJgAuMjP4Za3hNL9EbspScXr",
  "key29": "5rHKyngVDBc3Qz4sgSdHjxQHKTCGrPqyyiMzffLrg6zmpKVXmfRQ64m1rUXJ4VpqMzkFxSdSUHoe6xQbwfbfBf8u",
  "key30": "32DxJPiGsfif1TP3nxdEfds5zxxeXHF2acQLgA1o4fYKvyi1xpFGdStng9ehHFBDG2Xj79kCRvYj2pXMyiep99EL",
  "key31": "4vHU8fQ9eF7ki88Koa76QxSq2cRPfbApUFBHpPLJEV9A5qKBwrnbHdJAZkwvhQMuGkGbCCFJw3jA8thYXfvTnTKD"
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
