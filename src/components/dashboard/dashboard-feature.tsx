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
    "5efNK55eYC6G69QHATGn1g6TjGDmLCHiYgb9qnayCEdqr2mQ9c3k7AvpGp3RLohoZyycvkPfddFvSBjF86G8bdUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNjuc9CgJZaCK81bpViEPTfbE3jy6VnT8x4vb34Xu1bqvAhFWvEr6PtrZZNG6iNtJPrjuSsLWkzFLFp5hcZYS6L",
  "key1": "5UXeX2Px9TgF8ahLZtfcf2AsB2DxCnpdXS3yUFN4aRXDQ8K7EeQyA2RWteEWpG9Eooez4x566AmKW1pGfg46MVVY",
  "key2": "3MaWgk8krmDaUXXqypbr6MVu7Mg3BNd28Ari7Ra1x2p6zvu5r5RfCwKx86dw8xeZZFpg1gD4WsjHRp74pxGiMDTt",
  "key3": "3TEg5a3vkBARZNMJ7m7SLda8c71SNWVWF768YqPBgAFpsdsTGKenNsknXGDFCDE6KrAwEPZniggq2JR3Ma8W4KM",
  "key4": "SVeWfujMhtcuXMB5SMsjNSX3ge8gPs5JEBVCwh9pDZBJPHULSEjeQu19oF4Vf4SQLSjYFJusMd8yQC5XjMeSrnR",
  "key5": "31zEnp2qvZRp8cgWSvix4uZiA91DX9DWKmtMGtx9mqu2egeH2FxqHy6tMnYXZYNRkfPxEKN7jZWmutm8Bm29ypHn",
  "key6": "2FMNcGPLNCtraKoqjw3offh8B9rJyvF67Bpm6UPaxbugc6sbiP95ZPnzrHE3WUxZHaVUqRU9iVtU15HrK96pzCLa",
  "key7": "4sLhd9sEVoErMyZ5YfStbqPRrURftmUDCkFTH5EtSujydPLNregDPgEJgUG7VYyEofjamwAsYaaiPhy2YwTF52L7",
  "key8": "337TP1gq3aVbJ3XEFeuVxvrzy5K9fB4BFoVEkRAma6wRHma6CQ3XxvwEUn5wBJLQ5hWZhy6hQe8iHMUM3abzFCnp",
  "key9": "46FH5TTaAaG5omtqVDgghTwaFCiUCE7hSYS7J18Lzx4Y9Yit8vhjfZUT2Rd427S1dnE1m9XjP4mkZdVqxrJJu9Tr",
  "key10": "2LjTtZbW3vZAzMPk6Jh2QLCRCcS3uuKUCiiUaayCiZXp5HVMdifqYFB36UVNjfEyobjnreLAhKZBSpx9moAY6FHY",
  "key11": "UfhbLNEsXHiEHJmjvUSA3X43GPBmNyUNYn8L7QKXh4QrTk8D7rb3tdmFTUFmBT6P3YS5axxsQqqaK6nBQvDcGLu",
  "key12": "2gPoqK7M8H2oq49x6ZeYh2pTbgzhBX5vejDHMY6UNKuafZvxu5vjt3sELNiouyMGHC4bStQAg4RFMaawHziDjzDp",
  "key13": "2n64FzSW6QVgjgzhamhv49SSozswtidm595smnPdaGPvL9sruTxXCtczey4cFTq6KXijbx5UCEbeL3PswmsXQZ9S",
  "key14": "3XgBErpojQskPEDcsWFDYTQPzErX53P8LWiW5cY2mfQJuXJo1HxbZPJmmP9db9xJeq9CjDP3qmuGeSLfVpEPfPgE",
  "key15": "5Eq3fsyTqe2MYRsP3EvRXnd3RioS2yKLekN7YwuUyA3wtqAg5y2yHPg19WVSFShWUJAVLHZM8narxy4fYs9f7PYY",
  "key16": "4nzWfxsbU3iNPVrRhAMjoFM1uJgaRqrL233obcfD3fhvAYvk48YyhG5Gp5p5nQZULNfSYpbRCFfgcstTicy1YaJz",
  "key17": "5UnG1kEcdDtQssGFE9F6urBsZkTALWepUb8joa1FP1La4kGowrqT9G6xFpFf1fzq8gSGeFn89X6N8K35FsikA8SA",
  "key18": "5k8cvoFD1QZadoW67PE9M7J4vjAtnLsNucX6YS27hnHdRYzrZ8posT352sNCLk5YhNH83HsRKqupy7EZSWZhywee",
  "key19": "5gTbZyVFnocaDqWXa6XzRjJh1mHqWnW2eY9JM1ejjXU3WQHjRAUSnAgxkiYrzFzY1dt3jCfDRCg95K23YXTqWAQv",
  "key20": "5qBPJq4L7t8t7BB8BdSsdVVJbPA7PcXqL3nsJeT56UFmSJk9VHAGTr9xK2Hq8uHJBdV6ccJkE57bVA8n3sxME4D6",
  "key21": "8F9TaawzozDzp2RUG5r1yZpoMGbf1QNEP8ygzdMTm478kxFF8TMfgxc7zMXo4kZrUSDy8vQLb5sQecpTpBCsLkb",
  "key22": "2cUt59X37yY9UzoWv1aJgA1TvZWym6VT89DC3J7JNrT8f6y5ULYGSi3F1BgUypEiL86TDRBRkBomZEW9gzFkXtB2",
  "key23": "586BBymUoHkmqmdUYxfSCcQYwrr9MAQVJ1FsxVTGvdmmHu5veMZ9uZkSUPTHs7DbhKGomUtD86tcXSurut8BcU5k",
  "key24": "2RXJGq6YSyYRLuwZ8ChZqiAs96XwDPMrTty1cVtaKFXuteLvJisNcwM4hQS9y7FQps9yHJcMzQukUQVxgFzBEhMX",
  "key25": "4mzf8nnSeB1JWbxFhbffDcsjthLda8ojgMRmHtpPb8xtr4PEiiXsEkWXDyq2EXd5yGTpdWhfWhyq8EvY39xe5WRH",
  "key26": "4SpTqgk9R31ASoqxQ8RcWYfg2FdErixSq7vbnCfoTKvX2xaAeM9CjwcEfYS6MNq4Zz3LpsSqpHxthRaJigMxyYG4",
  "key27": "45DnGeBKyrPGGnLxALuReqvxbakgzVGwK4RaD3W6p7wXtbERkSTu3Hudniikyz3d2vhYh3qT94eVqoRPkN7Nutmi",
  "key28": "4yZDgCykY3xXZ8haYfKSnn5W6tQepyRi99x4GjSEKbSvjNnngxYQXVM4Mb8ndHxB4xwbPwnPRxm5pfsfiYhn2QhQ",
  "key29": "62KQkYw99nW5BGu1BGMm3VGZXMhkJr9YVExr37DDFtnXVQ1CdgdxeARC4GdgtzcRCiCxTEmqxbYc3WJ8FYad7ndX",
  "key30": "4VEREqn9RZpvV917U5xr5hotaMd9SZym44MFyTJ27xaSfqTnejVTwCQRuU6jZv1X4HiJ2iQxYzKBmnKUCdVWohy7",
  "key31": "3FBYXtZR3NesQmygeLTAdy7pRDcrxJtTZvAHQGKYhqiWNRnyF6GdUD1xpUzZeyfzR7Ba8dr9e8NNLdSezexN8AJC",
  "key32": "zLpvMqBCYiauN371dHd6XnoDwfw2VZHuLtnn1sVx6ZKV7LRWzmVFN7XCqR4sDeCxFrvFMWeeh6HtTzkNea6UXon",
  "key33": "4BaMvb1QPTqqbva7eSRQuYKYf2K1cwV8PHQ9uW2L7DL43KQW992BKB8EWaEMzBu8a4VbQsUXz8y3cMKPGtWv78S8",
  "key34": "5Vye4rRJtWjrA3rniYKuqMcQRHNN8yBdEDUQcTpDGScCzXExbPT29MdeCApMsxMLF7WPMEc98LyjFAPJ5DKvJL6a",
  "key35": "5PQgQyjFfyH9F7JLVvSjLL6zV3v6ofDdsmUKAa3YU8tua1Rnm5yKaQR2Rzq2CmviUSLU8VCQhXNXm67z37AjKQxU",
  "key36": "4UjwQQggue3q8AcivfS8h11YKNGyHi6rSHgw7e6SDS7VKJHkrh9EmjMi3CqsMuMY4Gor1o4vcUs5G6TaoM6ucF2s",
  "key37": "VHayPTCyuG9Na49WseovCdqrejUA4iKc7k7xPHYZie5YT2Wyq7w5yo41bccj7kVHHJi66tDut7Ry1vBZx5QwnYe",
  "key38": "4Q5mi3uGoMpwWRch9Ybsj2QGW4YDbVRbBTfjvRV8jTXkJWyDax9cpKLMVQofXvyLUznLGYfXRv4AAtQ7uhWqRqAE",
  "key39": "mopspTFYjjQFb5XniFG7EUxGZKxGRm1dkNG5esXvQM7ZqxJbFxcPJV511aNKUHpk58uf71AX7kszeKDa15nMEoi",
  "key40": "5DpzshmC63ovvvhVJH3NkCkuRhk4513joVA63Wqw6rLVPcguTdBQSWPrw62XLcQULC2URJ4Upq1PwCBYiKNbgeHe",
  "key41": "2PMCZvYmEzn5c3Bv1o1SeDj1PTe6brq7zbSsYA9NmLT1YsjeavoE5UvDxhf3KCWGdQEX7mvcMtBs8w7QtQKZrxzo",
  "key42": "c17gZxyHL1hnVdudSBXepr5QGZevKD22FFJsaZda3kcsppTFL1x6iVYpfA5EgB2Txm9iPxGMqvdH6MCVaNYVEcb",
  "key43": "2xkjrG8ohnDWyoXoU8w3kX2We7jDLnq48YSDbcU2fVjqRK4kyadRXvBEtGAudQgQ3KeaRtQbiMnG7kvGDdbdrgkn",
  "key44": "3cQAaAUrpuc7CEYgZsfdGKht7MkZbtWJ5FkVjDUpAr3cJo3U2XnQBopVwWRYajhLs2YM1NoGxRqWi7u3AQYu1LXi",
  "key45": "2XJxkaKBc1oxyDYBngQj9k3TTkmC2e2V77iAVsPDjLScQXxZjRhEE1tJZkJcXszzEf9ogpufNn9cX1su1zJQ1KyA",
  "key46": "KHFFVFapzrRvkk2pfjtetA5izRcCYJKEAfT1Eq1UvupMBBcZobjz62nrmoP4RnEcBCWMGdr1NsRVsuSwANWJYhf",
  "key47": "LrXPNiGzn354yMSJZpJfV4oDqJvtzndSjihU3WbBNLjr1BEg6SRNzaSpKyZKYk2iu5ATbwHACk91N9WBZWnHBJa"
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
