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
    "zgPNXe8jpQra4vgVVTAJdiKyiFRXyWzZYziCHhwFR3ETzAgr447YPE8rXGNXSMGRjDBXU8D9XcAk2djvKWeAYT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63oWKa4ohkJ1eRHSuBrf2XucawvsRcMCuupNgFNoV8babLQUXk5ykRHgfeZQV2W99gn9Cauno2Hd2iL6fyD8agq6",
  "key1": "5Tri42ZxHVJYtgaYfKhhf3mDSqv5fdth1R986qkX4EWhW4urqNA1yf2WZiVSqm2dJDoLCgdcF4k1vV9zxSgY9gez",
  "key2": "2CrJrQ1h98JfW6gF3ZPJUTwzqaKBpFe4vf75Z7ErkZN7S4mV18ZXgq9VAaGRG4MUYUJPxsYAGnLgK65juG8PkvQS",
  "key3": "5PvdMBWdYnBoLNN893r9kt2G1eDAo8mqktBLMwyu8gsALC9sJWCqXasMQKffMUYyyjKpJjaVsjFkegpbA3HVfG5R",
  "key4": "4XFK5n1oyXRjevqhr9gHWrieUquYzuintDkkXUfdPJa5FNvJpPyvNhTCA7yxYaXnG4XXcDBgd6brBgBgox89fZkk",
  "key5": "vzjTs9pWirn4k3SLznaXBeX5x8434HopbysV3aYeAakc1BVtdT2KKCZsPG1GidYz8nKwBCL4tApnVrRqTttsosX",
  "key6": "4NJFZ3zSR4VgAvgqNQ9SqsPieaDMP4iUmy1QC9BJWqa12h74R1uvCSbLRJgdZcjLzgg47wz6CbD4y2uNL1H79FDd",
  "key7": "2xbVimMA3yASegnuVJy4S9fLJRKmUYBheGj7y7cRCw2cDwvMuxmeZiwcYFU9geQXU2CQYQEJG8kvzfZpr9XrCKw2",
  "key8": "3qRVX2ahJ411EBWivAU4We3GHKQ3o6po3kUGj37bUitiFMWDbesGgKX5giHbNhen3pDkZPwrwzEvfXfYXNeX2PJ2",
  "key9": "3p9UF4m8FbLm7Pb5QYKR7W239Zx8amnyr2eL8mxQ7C47XyZBmbj4rocDjDwBuzYjuhLZTsFTPbCUC6GicSDToY7t",
  "key10": "3NUXxi2aMt9twYeahk1GEFvkC19tk7pPAW6coSVNCALaqprJBhZwEL5dg2eGKtTgE1CVUEJEPXYZPCc5C7Bg2a5J",
  "key11": "4WYt3vt1np6HrDSE4G1sStWs5Mz5dtYHSHhty4Sf4dQ713pngPoKiCmfLEf81kpRFxjDc8jsDxyiKhamWfxWD9XZ",
  "key12": "5fCoMFwvy5YPKcmQxQSbz8zNHYoU4zomYhAXjXstUkFwbdKPVzC52mXSiGyiQnXTEgKijjMDvJsdAri8E4bBw87K",
  "key13": "59kvmyEniWY671jgnQggScM5bivdBUimnaoUgsdsqMxk8yejPCm63BNUCz6DsYaFnAsPLyEyhAhmrcqAMJgAduFH",
  "key14": "4G7DPNE1nQecWgtgEr416Z7RBCQSgbKDW6Ka3SJdZnKxzt3gTBoxfqU4GNpHM7nrGspyWJ4bcz3H481qvN8hCks4",
  "key15": "4Yy3uPx238zfr7ZFB8D14wT4K2pWdKrBzxDnHF4ifqsyzjVeA22zcjbDibYFGM3ArqRjyPjdErkpNsQiz8esoNGp",
  "key16": "2vpFiCVDGX6eB8skqHLgDFNb5gPLm2Jy4yrtmV18gz8XmnEph1DT1jjRtZfCivFyuYiB3ascpDCzTrmSLEzFxuzZ",
  "key17": "43gngC6NAR7BHGbsLcV8Bz57MdMvdyqf5PCxEvFxxWEXnHPcm4ezRS1WLSXEhrGYyQjBNogCtkFWHFJFhNBF9LcK",
  "key18": "3STMAxPrbzN1y49j4a5LV8xm8YYMBsf28qZxCBsJPFx47LrQKi2U93FD3q5BpjNcKAEY1CwJWYmkxs7AXzPPPaaT",
  "key19": "XdaiQNDawSMw89nwzi5HSbpUk1driK9kv9aRFd4nsU4kqhc7XkoYCy2di3hterzreiyxqnnVtW3S57wPQ7mG5eE",
  "key20": "2WTuWMYSR1xuSYPdt8SvWuVYjbBwjSG3LQzh5ZRUjdekG8wZCUDSdWvmb2kV53V8h9K9BkygrxVUsJRTDgWCFih1",
  "key21": "SVLwdfi8NofPwd4YS2o8hyPBz6Z5vzN6dGKCCHhxhwmpLFFJaRcPjAMMM4XXcoBFJpQtRcFXhTaNVrNaKrJ9FZT",
  "key22": "2tDDY3GaZPtPPAkNXBRFKfz2AXNWBs93QU9bEQQ7yXEdF3WVjq5dtpsemZgjMQoEWWUD2ZXAYibzvjRxukNssh4N",
  "key23": "5cQrhqNa1mVPqELBeBRSfXVap6nbcDDV1XAkA6f9roJ4CraQ8unGE81L4DH6kxVVmZZGskgg6Yu4heXdbhzBQwYn",
  "key24": "47mKkfCgrGbRmtQWxuXk9657DbFS5d9mxHfCVFwcafabWDs8w7mJikJromPBGmVts2cSjg6HPMXcun6fusn8p3FA",
  "key25": "AsvYsvJdL5gF8aKHajsKBjfpQkNhHJobYjpdkXwVZLpzndKhPS3wMSbmS9tvWuDW92gdRrtazCJhenFs8yGhu3j",
  "key26": "dFomN2MG1e9cHZ3VM1LFfhRHNsvzkSj6GHtveQKq8F9ZTgYuoK5FSMQAiffWp4TcmBn1RdUwH3gqis6nJyFa2at",
  "key27": "4nQW6xWz4QBT66ZdAGKZWKjs8oh1mVvucrcV1WvwvSEMsnPsTuXyxUs4ThqWiDjCGnnvrjBTnbGajWZA7S1TssaG",
  "key28": "52yUYfzeMmHijbNEh4Zc5WSfBY8bJd9rm9VM4jehTDorh27auGYtmCb9ZgMJTaCV5G3GjBr3CoifknympQVSJCBx",
  "key29": "2LErWRZBMiN76zTvd94wo9fJSBh4Hh9N43iN8vapxo1CzJdcEe8pkEXbgjavDFA35uZfFmQLA8Nm1tqb17DcDEUA",
  "key30": "5bbhhLfdAXumxEA27Ayp7ifRmdpx9W1k65N95TYBWR3fDca7HFHfmH1JnfNNVce6gdDofi6Mydjtjfr1TykWNZFQ",
  "key31": "3VZ4UjLgDm52DoR1KQxyHshN3oryeWXMBfUEWDxrif7iFQmGNpV5FkZJ377gzp74oQpE3U3hwSVvzD4sDEr2d1b",
  "key32": "sgSBzfVdpcp7J6LHGustzwsn7mqn8j2UYJqbZ1opN2jkc9kjP2LqFV7XgYZPnEPgFFHd8UA18CaFNGgN2jD5hcP",
  "key33": "51aMYZDLbHRZXz2qsaRX3W9uQdn79g9FS7gX7HjDksowdFD2ENXWeDanQ6jSMAyoqsrEa2UYVyqKTKhGiuMMZyxv",
  "key34": "7qBDwBz836KmSSTB8QvqMYwZQpkBYMiv8nBqfwXu4T7JJLH9aw6UH3rNUixiqiDuhc8ETjhNvKUBQukZu78NEce",
  "key35": "xdtVrxadyjYmgXbpe9jFg58K1HGJfygPdSk9c6pq8ZCm2FaAo4dH3R8YwpBSxB5wx6W9gNiJtXCNYGEmeRJwF4A",
  "key36": "5SCHzzX2o2kS2NEFAwzHqcoi2jTEawq2ECs1LcLZDfdK6JmJwxE6u6cJ2Uyep549fMGQrm8U5Vas7SNxcy5q4AcT",
  "key37": "5CJbpiogK3F94Ax3D7XYdKbR2kFvHQ8xx1fuB14in971hMScAyZhpQz32hd8VhruTyxwBVYcf9bUKw69JzHRxfTx",
  "key38": "CF9yXLNzuHrKAQSQidZ3hUahJdKe9iBWMRoeLC8ZiBkfrGY4djrZaMHaGimSCSkgVdByBjiXaerYUmeZiHLViX3",
  "key39": "5pLAF6ucCXH9DEtaYRNiiCvsQtMHiDuJ4DN4mwW6bZ2euUjv3T68W3cTcDtxb9EQ4xxw4nBQm2jtJ53FU4xv3HRr",
  "key40": "3bWD28sCZDj72QgkkjXDV5jcubA8CNTiJZmh1zyZ2XYgDdpFgSrkxhYfz4z87AotR9UuUoFTbTdJMNELcwCodkgF"
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
