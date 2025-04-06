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
    "4q9DNU88ExKQz2ZZSKzytH2AbGbUNPCDfEpVjqAyge1mRi88EMJHxcFc69EyHGNUbZQWR1jsMvH5j2yfk86Ts7p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGMwQE6RBGzv1V1qh6BBuMKaJsSxBNaEnKpSQ8SktsaVz4VeBcVTkwbv6m43js5E3b3DYYX5TvCgsbmvZbNuMjR",
  "key1": "5yNcaJzWTGv4BK9CLFwyDrat5pcV8r8rpxE4sun7YNptfX7ka2d9ctjw8gCGAfJoFLBukunMeGzAAULMQFwWDd5p",
  "key2": "39Ku8mgkU2vVEgEsmfVCNvsbSRTEmn1AWWpZAj9JUSQKau991Krecf7AUJ9VJhRwiGX2R46zUQCvYJ6ZiKUuRCjF",
  "key3": "KxZme1HUtqzBcN6VNRbtJvbxD7TaRZYToFyeZaYh1p7L1FmQuRobuBbF8qRzWpLWAE21VysXmLETXRKCarZKAME",
  "key4": "2cJPqFwUCkfuM4nmTsq46tZ3fAZ98EEbuMqRsfNgFWwY2ErjMvhbgoMhkTAFkryz2wteU7pv7m5gnUda8W8M8otn",
  "key5": "5dfFUe2752wUDVHmj1sAz2kYLrUj2fVPy6641jCg5UfjMHRenWgdgsjuV5ut8ibugoKfDc66s534edHYStxs4vvy",
  "key6": "oFtgTeY7fgmBMXHux9N2nBzP6Bg8d123jWxLPUtxVfZVvE7UUXF4VT935AHXSbNiyNBshfFx8giiF1Jc3UwTeo4",
  "key7": "397tRgneVmoFm1Ft85T5VjajeAyz9Zt7eDdRWpUz88n5Ek1h9t4MifkhVZzE6VsX1m1DNZtnwd4hBCQHxUcRtBo7",
  "key8": "j6onbRN47q8WUrHZnVi8p17tn6iVi5zmutdLSP8v5P2wb2QXTioLGijbBC9YviJtgcZQFxLc9Afm8c5c9DncWvr",
  "key9": "4nAVhzjSSKq86etc27RLiXiM36LXtqquiuncmVwitH9Whv7fwWuLY8ThdQPfW3TikqmCrkJMrNdLuz3N5SCPAy5U",
  "key10": "45rzYfpWbXUn8ZZs5N4urrK2PJN67H2mFTFDfsbHgctg3E9DYgMqPzC3WFULNyh2rgbRoZ9Pcqa6CVaiB8BS5JR",
  "key11": "ypXY9cwiCfdqDaJ92TjZSKB5oBcPmWC1PCLJmnaKX5oZzZnmnupvPv7RTeUzm3oEW6HwDvFcoDAdhGYJLYVhJwf",
  "key12": "5Hy4NMMKNTJpao3UzMVFBrWiobEXcX8KeDjJ2K5Nf1rSgLEtVB9eZLe93oVjXZqzdcVeuPmeudTPmqufwMfdQ51N",
  "key13": "4wNZoJoF6v3HAEqNdyEzfD5UrWPieTGG8HQkSGpeXG2nRwRAR97Gxvdu7Ru4QitXbLRQmkWdwBxAPbRScCbqJTQe",
  "key14": "5ECLCcP4EoSm67fGbYmTL4CsQi1bw4MS79Dgu6dhSK6eoJMTWAY453kzhm4cYPxLg2kugt7adDDoeEGC5e7bkff8",
  "key15": "jrxvwEz9SaQrxZLFQH8r35hWiruxEJSkNxqAFkHDuTDYMa6ttZSWjn64naXn5fqAhtK4t4dddk7K5nX5y7ZGKgY",
  "key16": "3Chb2auLJ88JvCwF9zqzDYq8ppBrYKHenUwQbegtJLTRzdQtU5YFsrprrk2nSxVa5djGfnxz3gCYS1J19ZqNTPZr",
  "key17": "69ceVkdSCCY2Vgc67kCFJGFFw66LU2mY6dQMekpyJmiejFX8BsDqgCqg61qaqq28WjDGf74jKRy2dw25foY5wNh",
  "key18": "4FNVb89fmeAyk16KPJeZKzrHMGM8fZf2uY2wqXNsxvVa6fGpdLj9FsyigKBpKJz85wZJzQ3QCtMYWowfDpLzpZSu",
  "key19": "2axHQPViUTYKReUXcjJbydKpkj1M83xzf6Hmp4ZdSKSVmyuH7XPe4zEv1Ba86tXRcXRU8LJbrpFN7G88iPBCfGkw",
  "key20": "4oADAUQAFbaz1R9hg46ABwkD2BkHQxXEeqkECzjBTZwhzDf73bo1Y7y1uvAscomQuYA8CQzDX6sPAg64fWgyW7y4",
  "key21": "53kn19ihxs5eeJPGqPmLc8ynv2W5f8mGPveVzkVK99DU8UWzGwRAJphTrE58iko1VfpVxaTyrgTdBk5JiP4Nk1dD",
  "key22": "4vK9V7ZgzAeCnXji5AJnu2kztaRqrw5TdUWJsn34jyEDck8XyMYCiP2dstCzHHCMQ1Lqr7UtQnUaXkpUmiVuXEQR",
  "key23": "fjz5KUTPv43seVEpjpAPWTiag5424iitDDWEhANSY6xw2sXWGicz4NZ7YpE3LiBvTnyWMWzZuUJ8MAsn13dtwpu",
  "key24": "beR2LT7vP16XheobGTB5yGVf5Y8WeAZeQsCN9MzMhbyBnfmVVQCCYYrUpBtNFGcrX87nocP7EEduA7Ci4DJjwgp",
  "key25": "HfuPUUP4t2Bwe2dJhqgsTs3G1ASAsNPG8VA7q8DkkJNHKbgMFteoqLCjWgtfYp5sUgPBfn7XPV8v4CzPVDnSG8a",
  "key26": "2BjnjokWC3AJRMh3hiGjWW6bKyT1c4UkSWScFAip6XNyk3UaJ69ktXtQZXb9BDZSDJDTDJyhCaZqPqfjRRkzBTvA",
  "key27": "2n4h7S7AqFTaXFsDg5bkaNs7EG4iRbeD7T17N8YjdsL9ChtGBLTviiNs3mfsbmJc9upDjyVVkaAYPp2XxeJpnScB",
  "key28": "2SrdpU2WnmCNHWNUx1h9pSrgHKy1LMfKGWNAJM8HidaK4YZP7CSMaJSD3MebwmPMFrPD8L3X6wBLBD8ivFfk9367",
  "key29": "4fGJe2ic5BZDfBHTippxv9mPE3G97Z7DcXUoRSFRfwkDD6RmCJsdQJ66w5axwb99qvreGHgerWVeUyk2JjYFkB2c",
  "key30": "2dsTHMjXgvA1eJRTGUuDsfPMDoPkeqtmMYjGKCxpyR7L17uWuGoFgPfCy37tmpxEQTeFKfke5dpub66v1nMhFYsr",
  "key31": "4XW8vF9QaH8tyQ1ucS655KQQ3Bo2hUfmTuCBQjUzXKLHxP2F2vu73TGXFiXHKMTictgkE4hZMwrXG3Hsn64T7BPs",
  "key32": "32Nf2HNMrWZcRL4WRzvDWM5isHxMB5eCJm9vt7medeLtbNHV82oASpLSci8wfR6BexWnfGbDMCVAaNsbgvzdJcA2",
  "key33": "41aGFxMnXfdGnUnZHs9ABGAwjKENiDMJkQqvoEGU5ibCAvPFcZow3Pr3GkJ8KFmgV5KXYeyKiKY4rb6N9vYy7oAa",
  "key34": "5Nhxh4dmKHkedx1tiELc4qV2xrRZqmTaLnBiWGwbQat9dSWmuj2GupkhwDCQyExpzAWTfChoGcRoa5MntGZfg3N8",
  "key35": "3MiviGqgHsNpxMkx7soZhSw7fiXV3LHadRPpwNhHQPkUsezCQh83EbDug9wdVYcUX1kkydjhqELA5q5uxXow6whB",
  "key36": "3Lt3aa1PMNke9VNG6KVFCH4Mfpw7xsPJGjhipjGhqNz4P8YEUSbakJp7u49rWiruBEU3dW6LJwGiNWB6nZxWxyri"
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
