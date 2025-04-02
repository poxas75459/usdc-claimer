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
    "5TQZzQqtgGuHSsb3xZWCJGquTVcm8fh6r4dCZUWvaZdHXydfofhjJ96vSnDkwu8A2AZqBC4kRaQgFLYYrTWeBekW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DB9k21wXggsv8FmbowgXguVe86sUBFNrZrR1wkaZ7it3EWQFtKVJH3hPVZJfc1brEXaFaENnaa99M3KeziWzUAL",
  "key1": "5WCdhuQd7tLPW4pdZcnugR73MQLAq8PjN6CWv4sesgv9EkXAgsJpg83xoAjtB7cgUMzS2DjbFtsmGNQXQ3DE1ZQY",
  "key2": "5cAjhBxfm7Gwx7JgLYDJa8cXTEhkk5p2PfswcqtZGdV6uBaBVV1yECCW83S42VaHwBWCiushCmBE5HbacH9zh1oX",
  "key3": "3ucdc3hwrwdWFkaPureLj1ukspRjK6UEpwDfHKpYY2vQFcFsTcJezdySWrxxBbamj8cb6BJofUdPwcneLPNHNtnn",
  "key4": "2Mjyrh4aUd4inZKZPUHZ9PSNP9bB7mgvtozco46ehAzHgGryAai1ixsdq1KaS9yqiJr2HtvdshT6k2BEkkAUtskj",
  "key5": "46soFfTCoHRiw8r29j5v5xLg4gB4TcVL7TYoYU9kgJeHBXNqzzoXAt38GJuukFLj48tfLCUyZtGuxYvpAXfo3ec2",
  "key6": "2s8bzWz5oKGQXNQhZqm6BXFG7u5RPCb78VhrunYzLVYmiuktdNP2vFzzdoWoaFe8mBJTJCEi8oMEbEF48AB1u7eH",
  "key7": "4jjmMgukcMCDu29gwjE4wLWtTDNMn2uCvT4mVV7QXfgn3pfNuWyawbuWmhVXkAh8ssb13XoFExjupD7YoBdQoBVs",
  "key8": "FHLAohyVhf4p6JRn7wmDx87uxSXNzjyKR6ySCT1EZRpucvyjnFafpvredfKzc7gtW91c1uPbVhZajqZWu2HeBhS",
  "key9": "5Mr6RgkqbUuYBzMtRLnB8WSQFfrc6GXFwc3LhTD5NvPxGX3SCBygbSY6Rh9HcbQZC4KHvE3QXjdoU1D9V7BCRSnQ",
  "key10": "2P284RABeAqRQyyZzHYwwozmnfCvkaNDcZbBQkRT5PZitX5M4cFuHnfQz5ZDp4dw9sR5w6eSD6j4ng2PuWAXUUVB",
  "key11": "2ish95vfYnBepCngu1qvdAS5mhPgvcCxn57dgGqGPMv5fh4beydkHspDPEJevgi9eQnWA1WyYBHTRyaEUCUHzL6T",
  "key12": "45gX5XJrXHoX28LHeHy5QCHpX9qvRKAGXJ8vuYhKVwx1Xjv4VVQ3et6mSHT9muET7zZFBz9q5HDeVDYDGLmjoh7p",
  "key13": "2qP7zHDM45TXVAa2EgXhAqtEHhkiCQaWnYCoS37HX5TYZMsP67o1HB5K4YRJts7ZxP75RdsViWUBRUm7KdgaAw1z",
  "key14": "3JrXanfaxn5gwuRbiqJ3Ct1QcpkxjVCuab86eyZ777Kz4hmxwzHrApFs6GLqLq39hz31mFViqc6vBrprEoEtXTW8",
  "key15": "4VC1Wrnc4RjUSHg5baDi4NVyXGTEWRWGhWWFUTFuSPFrxKk9QEJ6e8aQYGmEVWTLUux9gDWLLVcrqWTRzPb9YGu",
  "key16": "47joavtUz6JFJMPGYu8wMy8uwRTw1ksagNZAsT9YbVWPL7uwS4gtkGV1EonmLJLRyXbouVaTGyp3TDqy1J9HtJJ5",
  "key17": "5nBE5XtpVAUk3AMvMwoT3BXJUGipCA2FfX23ekpreaXnAVZusM8JNYY1dmtQ6AePswGP46weHFDZgxq7Q2Cw3fpR",
  "key18": "477ZKvJxcz8d12XRi84b3dxmVHG1gEUNFyJ1e8Kee3RmarFLgxjTGXjdGevVUVb1pA4ZgKNG2H65C2SkrSHcJHcz",
  "key19": "2PmBeDz6gXUXSJSEnHBqbcuX6aYxLXD9QjPJXUP7bYg6vcXx29vpzKbVmG6PXMG6A84SeQQeL27CgqFLXckVvPYr",
  "key20": "5NXaSg7HQMJBZrDAP5YRBLuhmrFhH7mjywETkdh6d2bZaSzU94LGZCRBg2T4jaA9czZNkTmzyJUwhR5xB6zasb9s",
  "key21": "35kE1j3QgFcKx8gphCZ2x2b1tp9aCeupEdXkmBWp8aGrxY63cex9Kd9jXySN2K75jjNKXTWtX97addPvtuBFwnnb",
  "key22": "2J3nVrnbbg2t1vLH4mYUgB8HgnhTebWwzdr3vzDMb32GrQK7PeFpvqZDndpxXSAaS55xyDwnLZCcUdvCV93o6NMv",
  "key23": "55uYR5xfQ6xEZkBYE9HCJ9r2mtFZ4dhT7JxpdwEoufF5MedSyrV8FAqtwidjKruVQHHFuSr3F3aQrZVDmkBHpBBW",
  "key24": "4B4QWH3N1uD4M6dh9BpLrzCZ5N62XfmwH1KTGpa551HAJUvMjCw23Sv5mjLnawbG6v5E8ad4G6VuhaSF96qeTYfC",
  "key25": "4mkgTyGjujqWbznTRFmDY9JZGUEZ7XheS43koHGZEUWt67WoEm5WGg8tH3XNXyTorakG3mc6UagK5Ts65RFnju9u",
  "key26": "5r7to9DbBAG9Fc1ngRkzqcqb2b64LgpgmJLZuMQzZumTk6xtLdTXDuF6DGD1qw75bMda2Xpg8Xj6AacpsWynA5LD",
  "key27": "4oAu5vbpPsehpS7AAeScZBcLoDmBgrmE5Zpf7zcVNkxTmkTVoW3nGhr7uw7aGGrMSxfzHgVNQqJWFjvEtqvbKTEo",
  "key28": "5tdxbi6ncqZp4nBf9Zi3YHp8uER867rhydRYiM5gEBqgyYcECTsBVtNc8UXamQzF58fiQyKCBAS1usn9ozsqBimS",
  "key29": "GErHRUU3LTAcqBrX2cfq2yS8snzrz5ZochY6W28b2siKxTn55hZhyrEUKUsfBuY57qKSWFDC18Tvx7qDHmZVK4v",
  "key30": "3X4drftTw3YTSmMqGLoUgUhfRWqWr8qs9K1QB5WzGVVhnqtbXrVgRybcH9PdEKJVXf5ssyJNeCfp4My3zU9wBmVP",
  "key31": "2GvHQbWVgBzYjzB6bh896abs9FvaJuzK2RfSKr5TH5Ks6Vg93cFK33XNTEzJma4w8FN5eKFPHaz5hqM8uqVCnFSV",
  "key32": "4ajf4HS16LsZj7zDeYyBhavE8Ruw4L92PTTnau8DJkuxXCent6mPtgubowiiepJzJLhwpFKrY4kRgR9PcQTBaDP6",
  "key33": "h82AKh9xzMwC8tyPHvmvizqH4cKXnEKQvAAXCaS9exyrP7ufHnkUxiDhiiiRCkZCGD4vE3jUWo2EQSVJvpYiQxR",
  "key34": "5Ssox7jgDAquhMz81fnMtyq3aTNsJNG2Q71BYoB643KKszsMVqW8KyHujDPKDqeL7wYKDf3yMESih8YR7NDcEC2H",
  "key35": "5wGuW7i4bXQt4poov1doWV1FzXhBcASDbB5Wh3Wj3WAjnPDou819qQfHmM2pTyumvTFLSgrFjFSKN1hwDpemZWvX",
  "key36": "42KMZbTqXsgPgBSH1xqomBk6bNNUG5XMGQ1Bu9cUkZBkRjH9kUckPMvhFsSPfBT6AqskGWkF719iKPzq7zuRqt6e",
  "key37": "2m9wE5RdCpvZbKgJQVRgd5oMtRWxk4VS7QFRMGW9AU4Shf69MKmCC8KBfwEKPYgxG2hfsjDiqqowiuZW3q2MW2Ge",
  "key38": "3jfkGVBBF8m5MHgqZgrf42s32vm47y5VhZAp8Xw2kq1p9H8BYcUNwjuEw2sbxVZ1xMUqcD2bRG6yjBNp8nxNxWns",
  "key39": "wZ1wm6NjvFyHbcuVivSzZ99tPo6CSnqB6cRBrZFnwmmowmJhUyXUmoYnZpCL1efn2hZq8kott4k3FYiSizEtwNQ",
  "key40": "5KhAVnh3qyL1zgjqAv3mAPi6nZnZJRQBVC78k68bnz9fyCRgQCttva19sod3oym8DJBbqsJrTuV3nnafqYRdFs6Z",
  "key41": "2pYxh1cURpCk2AL32ijkNp3YXA1n4goWceyybJoUjvnGSwgd5EwXhbRPMNBy68oeBF7nqWoxYoU8ADjU84NG6CN8",
  "key42": "4x9d9n4RVA9hrkoyQVsZRFsWm1yTeWTs9sYVne8Xixk1FeqJHyPGjbGcxcidY1ooo5XwMnaLiCg2peZdFhQRCwiw",
  "key43": "boHYqFwkAEf5QK5rMygb84BwDAQtYpY3VDk9NcdX2zGgsWeYeDXg6FdtbxKkmrhbuNbT195C6UYRXRD4e5c8b23",
  "key44": "4G4bGiUDJ5f5QtCrmyPQFS4F1FeUEyyvhsUSGaSvNSVYvoSUgP5nig8LUfkMBDxdi9uXxXgW8qMxQNtvCRhuth7p",
  "key45": "fFUydpRg8rJJ7pmfYw4ECJmuvqJ9yQMJN2eruTHsviGwRfQQPX66EkFJjgetzmT9gKGBVgPXzhsnDcpXSxVMrjS",
  "key46": "9oyyMKYCpXPyD16FDM2mzcEghihvCdqXcE6oQsxXP17LK9JadjQRKyJDXFWGg1pQyCtydt7SeupmzAuP4TSzivS"
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
