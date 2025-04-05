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
    "59bYhJGBye3xwxQJ1jNr3QRxMvgKsrcR4Aei9yVCZMjddA3eg6qXhix7fTqSQZeeceLqEsygcHQYRcpU9gSUhEvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1y7oHarb2rxjgUPEx1sfPSRbarFoToryDRb9oDSx3ad4Pno3GsZ6mWaBN8hJ2PJLmK5G35dZzG4PGK7xegHAxX",
  "key1": "tuHhhsifpddnQKCw6rXhdnQ38AzhWCKnaE37CCkH3FVPP38y59Li3pvu5C1avXe7aigm64E3E8sVxjXc7u1ifTF",
  "key2": "5AD8XoeJHhEr3g3boN2P6p6ujc4NtB71YXag6PiZRCAjoRw7juV5n1X6h13FDfAh4CSFUYMf8aBvyyEXFkjAqbSD",
  "key3": "ZjdYN72571WyW4BNjkTArJ3iLjNGoKkY9gmhw7g6m2StCCUKLedcZ64t3GxnP4XGRkc89jkL99nEsNK9n8sa81J",
  "key4": "4rWxRDSAPzbvC9mM4fgQQwqWfxR6Z8GZskQYPKXudG5TKN833Zu31H87XHT3NbvMQVNZU8JKSHaHNDsVBmSLNVVX",
  "key5": "3aPqXGnieZ9V1qm4VD3TWH5ZfWpcq2GcFNHWQVsEtT4KknNy8FCzz3RFkNUqManM3n8CZN6cLpLVff5pn8MsDQBC",
  "key6": "61DhiTfzvaGc6JeUZuANd4zw1H3mz1XWPuJoeXbiHtx6qUyU8JqQv8dNSW9tt1FM69arwYoaz8uwtNwK3K1KD3Yz",
  "key7": "66YJr7aBp9jdiFjf2wqAx7TbQjLGCf5qUe92BuiPJtsj3LED2KjvzHMa77wPoSZQXjbjLZ22Ybc1tcPDkTct8u5e",
  "key8": "3skjoeumpBjQx6qSfJptsCcXn3HhAU7n8ivszgHZkgJJnFkEMNTpwj3LidHUHCZRgyN3wcVzHKUMeanXUeaFw928",
  "key9": "3gYyjsL5bQVqtWXZG68eWHihoHM1i2zNuxrnfANCBDdTcMAKC7V8vbM9sH1uZEhZBK954fW9NJWymwbs65gcpeCj",
  "key10": "wGescEXJGYQGf2wRqQJE56fan2rzWsNDMJTWTobMqzZnveFkLv4gJvqSkTEWHwzJVXK2wexvB5t9SWnb3yT8hKQ",
  "key11": "5WWaC2sMWaa2eum1cgPGkW3wv8W4u2sSM6c7WNbL3BMbqnRMoLURANMhMduNAhcsfiMXUtWF6wFrxbZ99BVHLVAb",
  "key12": "47y6sLssBNNPv424cX1eJnAHkZZqePVJWUqyHzYHv7PPxUEisD2kEC3VjWbWaKravGZPaXgG8T5pZymrL4CLJSNZ",
  "key13": "4tHRxKMfrEJX8qn2BeByEA1UFD7krEJPq6UpLdSfmpJwqnRv7VDF9aoxpgxF36v5KrhH9GvG45ekA4ub5eRbWwH9",
  "key14": "3A9VNy6DF2CDfzGr8Hst1vP99XtHvzvtZkymdNRNFvaBwVtF8dUYDPryZJ1e7EFJSKyGDpUQ3extRuDtnKT39PBY",
  "key15": "3cNc1TfDmusn3NnXMvRjNLeFhnLggnxRvD1QNapnDHM11xNiwsgYDuziF6bqwRvDoaZ9xBfDeGbai3HCHqm2BKjT",
  "key16": "48er9UP2JVHDDHLfmu2p7tvJz6TbdcTnsmZu1qH2vQHUjgubVJtK2PuSSTDZpZR1u3xB9u95yn15TB4noH8ufunG",
  "key17": "tnyupK1GXN2wBCuigHK9xay2qeHZYAHXNsKtigUQn6iEmugN2XikPnuWCmBvMzMagfnu5rKAgKCyhUymKwPHtLH",
  "key18": "3pfsWFWdNeVJKEjaMuDVimuDJF377obeeYkmdBmM7PvQhSbrWkfxPuwFxnoRm7qDhA7r1qq6TNdH3ffkNmXyUgfL",
  "key19": "5ZUUnnuh7styxfDdajHUs2qcTQ3LjBu9snm4XdZB8jKTKArSFfpWXv61j5MjjjNK5nxDrcrMqXYQiiaJvgLvgJv5",
  "key20": "KJZveXBJKSPej7UkQZ25inG3KVW26HJEBHhiYRdprSBSJnNwZ5HxrnUrEEEZXRJH2VdEdDB8ciaB9ZDrd1Rcfbo",
  "key21": "3dte9oEeGMWr1BsVHhoE7eyHqKfvxgvBEQNC7yDMK1L92vaatiwE9Lyw4NoDKmwgwUw8FXQqsSLKp2LgfzkQNAkX",
  "key22": "24u8kUa2RhV9jr9yKugeuEc6Lnyjg56ULMEBMx6Rw6ANzxeXXK3aTAZHxAXuVAMpsgG6oNTu84i48AN84mUVXDDE",
  "key23": "3KMdXd2NhaFVdNb6ojCvmxY3r6VrE1bdWc65x3xmXjB2kDwqAgtLEyYWLXKxRF9CSVpqeHP1ApcvkEQWesfRdmtH",
  "key24": "2jYBbDxdaScx17N8ZF5YbP91oRrXepvfYq5aptgXcJZHeqncHmxCV7gbziSv5Yw2AfaKyuPZxzGDTuNTmULe7sh4",
  "key25": "4KdfEfRdK2847fp3cLLEam99875jc2Qr5do7CwvTLvUsMira6vJoywMvW27XYWKMoHNLtkzdJsgPKJd5fHKwJWYX",
  "key26": "2UM3SeqeL5mipLYK8UUMhKz7fxLv2zSuCuiJfEpdHrhGdzbPUdtt8GGoCTKnDCDDKuyobENuoPnGwnFUaA9DQ9s6",
  "key27": "5vfkDvHBtkvYYi18SRkd9U5wZFvaYmMx1vGWmefuLrpdagFc4wYystvi5xhg6fF4k6qamLodjYvbnoBBB6Jjpp6b",
  "key28": "2J1xU3LfqCEAvkZzqWcew6ugseRobhDLeX97M5RpvJjpfh5qr9USBmvHFNES6HmMyuF7BhmsH3XzPMEpjH8gLqd7",
  "key29": "5jQvypYVgfHUZ7tZLdPoNBth4SVWpHjBQ9LoZMrmNfUHg1oUeS55TnByGVik9AVRXSrT6sQ56UK21r6YaZsxy7Vx",
  "key30": "49UXVUZZ4GKUStvXs6dVmwhKdb3aB1kWdaBnfWwnqQZ56NRMzA8F7uHTuqw4gBfYaZbgWceZea1tqGhUr8tgGvmu",
  "key31": "5XjCwoWiQtR5mWDEQ2mTgN3sk9yz49EBTBpjnWiiTJaUcH1eCEGffyd2t4ZafrfCfHSQi2ZNRZSsNNo3bUdvCxZW",
  "key32": "4x3GiwdGzjjDwc9A7i3aKfWF4GpNMmbjEq8QWEYtDsKijBRbUCMoobY7Mwde2tz8aiJ3VkDnUqgqZAr3VJiLKaFd",
  "key33": "32wL4dB2WgY2Vb52DczP5w7Q11ftvtJzP7ok9cu9ngSGnBTHqemMyL3aaZF9BGACmewnR8dhwP26QCx1aDEc8SmF",
  "key34": "2ZuJ5hwYnAv9qgDLsL1oFfe3iGBsro4sCCbMz3LmrPXfY4TJ2qZBkGTWDbHfQJrVboTTQ2cu7wSh34M7NSdqYVw5",
  "key35": "5c2w1meBf4P8hJB8BjNR9VSGZUDjVZWeKvYJmBwModcpjxEu9XTtWW76rbXoqBNRCuzNArCFdeWiCGHaABerfhat",
  "key36": "4ftWSBTALsbN17PjAWDGVcyeCG4w2eqAxFNX3955BTWBnboBnKXL37MRuQSDX7EiY5vqLFGSrCyuKc4YoFTkw7Ft",
  "key37": "48WQgUrXKyT6XvZzy999WcrARvkfekTwEFuoB4KWEyHN4z45DkNPzTmSMdEtNekdgZVjzhqGKWT9KUGGZu6UCj2B",
  "key38": "o76Ma97Ghkoj4n6MH4SGa7q68kFwdLxCxNujc2HRKPHYCnXsoSBQNYpq2gR2jd8tzvY6fCTPh5qk2X2zyJufZoN",
  "key39": "5qEJfvTmq8Hb5fqBTGqYnwqaD42znAwwBqcCiknyxNapDMunVxLtKaS78rvno43rdbYamF23AeU4yCKhU2Uoe8Zr",
  "key40": "4VtYoxPNDfvNps6yVVLZfLgfXRu1PM6rFDTtNKQMy6hm776CUQmbvWEtqNTDKfns5UV3t9jrGFbmzJNLDPe2pT2L",
  "key41": "5VZrcD6g8pzoXFAHUiYGLD4pSBGoEMSKowt7zYSDrPDuQX7nqmi19SXJK4m6bUrd62kNQf9FxFBCDimjUT1ZgFao",
  "key42": "nF3oTTML6y6uEVGXBDKas7TDp5D1xeBhFatkUmR2SjdVC6twSqLCUCf33hnu1VLHPMVeLzfSSKwjfPoKfY5Su4V",
  "key43": "5ySqV5kaauEQJ3r6YWLZedJMkuSZusVZCWYQHSX5gcX77hxRQ5yRyDAuad8yxEMqYHXnwiRrv8oLLpr95WGeMDes",
  "key44": "okdLNRijX2sPcHUZsjdvMYwZ15iddVKgQaNMTgku4m9yyB6cPYjDUa9hbZ7tRcFqWxdGe8a5n8YjKMiSYWYgCZL",
  "key45": "5RBpxxv9morTjhZBc9J6brGFzyYkzP6qpdR7PJUpKAyYWvTLWaQ3jAzRC74tay9MbkEJ3bPz3fKbq6zrCAc3VsNP",
  "key46": "2kuAmSS7RdYvHCvdGECAimX7wjnDm4kZhQ8bFd6zhVDdriVJTXkmPPMzGcDh8rKLTuhHpQk3LyZhES3ttj1jJZAN"
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
