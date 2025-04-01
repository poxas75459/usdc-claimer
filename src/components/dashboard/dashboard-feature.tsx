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
    "5LKCGbtZPSp68ADDu2jG9dUCx6XdXj1geJ9QGhs635iZ1WvcqUtcCHmsauEGsWBLa8NyW7FzCXXZrH9cmgeqqUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33KDG64vnny7u31zAW8YRcz7obwQaWHtzuPKf9cxwx1RFpp42xe7cxetQEsvMtDsScythPVCYii5Tbi81MRb5xpe",
  "key1": "36nnSyNiUY4hjcbo5btSAt6WBoJS4uYr8roUY7RJWoh4YscbUhex849BC2Em5yZM5zvfoboQCDBosFdgvbsT7PoB",
  "key2": "4FwXpiTCVbMsSPgX45vh3M74gU7sLdukH1BC5TkHz3Wm1ThU9oaCmD2eg72V2aySWuX99EMg1RJuusq9fDcWyEBd",
  "key3": "5P98jrK4pHT8UdpmRiW5hDULBmpVAkAcSpXQeTK37Wnf8ZxZWbs1xr9MYHDBHghyo7Shnr74kzSqX3LyWHyJEP6z",
  "key4": "F5NLC76XK5KZkLrGz1wEA5dZHYFTVQCyGoCZr9m68NREs9cuugAimZmEypCDdBTDg5U8NZ9ZrZASsaqDmLrn297",
  "key5": "UViQB6JEX4xHbq9XdHJUkuYmA8KLTVrc6e6dj6z94geFkBD4xFe4JdtHwWPQcGKDTEm9N5iyXGtQGE233c6NFpT",
  "key6": "2KDfP8afJQhhvrvCigcYemrfwjJh2C9jZuctEY4tvFLddUuymrViPUoQg9mbG59nL3tzMabzVcbLrLdGcZimuPVH",
  "key7": "2JBYbGBK3n2GFo8PFkNdRx1Svz7aUmqRC22qFxdT3sfM5ufNoSXQcHoNzPbos2cZ7cbFfp6FdbGXske2B2jAU767",
  "key8": "3NZgYTrwLcHFZYwNhdmmvX3kyPEifwW8QEwkezRdxJ8pgDhqW4JHxEo6GGLEPSNwfeX3CgFCf65zkE79XarLFoB5",
  "key9": "5h5XwTL1Z51VDPY3EC5RHo1BREix3gxqzjtkAyoTEYBT8Pd14StC3159ruiBbWxkR67D48MzCXrwkkKXByTHFg6",
  "key10": "2kAZ86j9An6BvWq3tDcc4VHUNJQiscSDMsZeLCUTB4ty9ggg8FGCViibSLFEUdq4aAickZLShKa4pGmimdBp4smZ",
  "key11": "4jty4jxNHVBiAVWanQKZdRndBUfcfAszkUZDyqJfLRbSAMV8oTrx3zCjTLg2SPfgThcsQzDvW3EgpwXK8BC5Veh7",
  "key12": "3yZZzggBbnEp1LY19imUj5XT3ykgu8BQX34HwjVre9zW4nHFBbUviGG547WdWGTTadeByKMLUmAUxQCeZeJVmTH4",
  "key13": "3ca5Va9VBBJ3i5TrsBsTDoJfVikmiTmMfoYTS64W8BLtnC5afJCkQgXXoSi98VC26o8FRUA9NxWcVh7Z2NyngQir",
  "key14": "2MsweDfEwyYP2SL4TcAgAhKcPFhgKuiKngST2QQEhhuNfhnr5bcCV3eEBNfVoyyg92Xza4QJodQ2dvqXkW84uJb3",
  "key15": "23UGSKgkMKfzQFTLgq5vNXJbbreWF5SZw9j116Da7drUZpaQkKTrvQPoBShfcvfZwcLnhKHiE4m7d1nXBxsm4qpF",
  "key16": "2dTqFjnt7JoetfDhSYPtPj5HY81EFPWjEoRqvF9amjPNmmFJF8ST3M9Mn4k2CkBWFqLAjgK6PDDddd6jZuYWj1J5",
  "key17": "4CEBzqDWQKFx7hq6gHH7ptGZQNDuMsPLcDfXWSjEMDBzu5dXVFRwRxcP7u8nG9rtr3TRaXVozKiHRxGL2E8uSSDZ",
  "key18": "5DqU62ncjZiKthWpCdp9b62BgppyVdmxQ2e33ksrHwadhJwmBHPnnVxJzdeTDXmtM9y4BKmRE3q1RbWETAWcYfUB",
  "key19": "yBTaHwyUwQ5kRGBA897GfEiwY2AcM6g61KUfupqEaddXvdTvogBWcyPrUUTgM3QZp6RJHrfEDnWRJMUeybdR9Pv",
  "key20": "27YpX8957LdVaEtyVvZXM6Fw4bHbWpXdfgC8nsFGnFH1r3mxTUqhT4z24jdgwaoqQVeKGUYzrpf9iHuhX8Xm2HfN",
  "key21": "3PciEiAqePGPtv1xThH6uFRL46zVzB4qyKmPwzghVaCEH6nKuMf9xeC1asQ25SomsPPdBZ9b74R1dErYUQnysFMJ",
  "key22": "2cBhj4Bw4L1wsWXzgNe7jba4A4nZh661JbJByUnj31nrR1ZBtQ58T7bZa3KhAnWepkg7MUPpwo3P51WJ6D7DRsF4",
  "key23": "3MDpdw1NxSyBgRenHU6R7eRPzFroYUtvFeDzxUJC6xnL1XRUrBe1Qs7UvgGn1vNAimW34yr59Ei6AbAsmNaFrMBR",
  "key24": "2d4WdFd1SzaRatyNdxpbDwL8kQnfUwxYoiBPrJSWEyF4LLBcTRrScrcHr4KGeeYDsK5tAZwRhDEHLxcDvPSWNjj2",
  "key25": "46keTrWcUNSdS3b1SZUV6ai3ahzMwmnzbDBoeE9QYKtFfmQpvHT8ahmdtgyvPq9FyTPnkcExUtreyybxauB6RAQN",
  "key26": "4hDgg4VfbcTMUb7mKY7ynb9qURai1jXijecUr1veyPaQv5DS2fgAqrwR77aEXcbjH8gPnc6hV86vssFTBjnn9CfD",
  "key27": "56yeNBPEmEcpNbP4mFgnw7kUNRAjzpGs4C6PZTGmbkUjs8woYJneW75gasoXzXKaNP6oqPVdQGBx5XMpvNVHFBe5",
  "key28": "3HR8Gt5p6bkXDFeBD1xQepYYUrhwVkpftMA3iahxEBZ6fgWUVCSATxKu3AoSMRcBagNPbLzBZNK9XbTNR5CWA2Vf",
  "key29": "4tNK38yDeTrSV2MkuzGTJjVUQQxGaiq5uKucfwWyebXc6oYMeLczCCJfH2AWzAaXps4WbXQ6VGf9bzu1RRQY6nKv",
  "key30": "5VfYuUhaYMe3QiCttETVPqozuyv86YowtosDqvzqKdLsX1fooJERHCx39DmPA1JVqJYUyjNujfn9LsiwmCw8ugjm",
  "key31": "4keNwH2pFJEksivN1iHF3sjkEqzVwwYvRz5x5ZrtWj5GGbxMnozz5PrUdarKSUqHnoJGLuvkRbuAs7WP6sWk9KDL",
  "key32": "Yb2kTccjMFNbyanmbYVRrQDBDhCL6hQKejT38BrBChQqoKVHCgpT3H4YFozmxku1NFwGN5ELYCXqfe7gXE48u3n",
  "key33": "54TCQQimsTmoQwrgBL9XWQtBm395U7z4rn7pcU5VQ6DfuAV7yn4mjLxCUR3a9y2jJQNvPRByXYFZbHf7oE11EkNW"
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
