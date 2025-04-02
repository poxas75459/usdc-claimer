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
    "4fk9Tnyc3buDzt2cjXu94ksSbwhmyanmVKqLMmmLe1CbhKwC3CS9rf1d54vXCudqhcGE9Fi2QpEX7CzpauFj1R4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3MNzRjkpmL4MoCJobAEHHo7txPFK4NV3Ruh3GGDCmNymsHYgeJYbT3aMjEyVn4SbS2fCZkUGQoG54NZQMbbrpU",
  "key1": "3w2JxeYAM3njTziuLXGrkejJbe5m8iTazkegSwr4ri49ymuskKcTnLbNpHVuPrhy1AmoCEpAqrkjuhnDC18q6kFw",
  "key2": "2tkjdkcTr9o69hmz7TUp3AuTASZ9TG2jxEoqaSrV4PPgzKwErByQTgPDJGsXk9qSEVogQoGRHmCGsUPU1eDCDRrn",
  "key3": "tYijfiaYkDmZas2NQV8kiB135rdNjGoTB7AMn5iCmf54BkPa5LktNRYfzqWv73e5C5c4BUEdKRe7WrrD5nQPtZu",
  "key4": "2Mzh7rf1KqpoHMwLNR1JG7CRPyFFM1LtPDR6cb72y43M4Ld9jmEYLELmDdoaq9f1tkoqmWPLfgxFjeDtV6CZtXML",
  "key5": "wMkCFYaQHb6BLYUiQcBJs7iv3DiiMRPQMwyN63kLsP6tDnWj78ePN9wEB4JDEi86Er99wt6MDcTtE9oMepusyqB",
  "key6": "3bb9C8jxbrXk1gVKhFjDDkhPHWxJvSDZWnZ57acVsGqkTU7TxcFNdUyLVGkvTLNTavc5k5LS3kUuQV5tduiL7AT3",
  "key7": "4fk46npfoPpkymKrdL6tt7WDpzL2b3nQhrQvu2UZPmwVamSrC3gRBSvU9bP2Zju3kpveWARKzZHcppjJ4XxeZEbc",
  "key8": "57z1ZTXMYozbajxXG8NEdYBVe6FwfmCNCD69yfdK5g3vTHu6Mp4km1i34JgwV5xgu5GRJDkuYQBACXg6sQjTfyT1",
  "key9": "3YNSt2zdDDnphRqeQ3GQFFKfdyGgSudoQ3LcpmvZfemxRV6in56nQA4qfAkb2JyYbeTKMLHCKHo6jNqwnfJ7CdoG",
  "key10": "3uejn7UdnhTFBLmMbvs2tN56aGvWsak3KXgmEWgfzRjQy7RwtekjxEdqnR8DkqeJgLbnDMKReNfuZXhYUdCaSxm1",
  "key11": "4NvjfZgFM3EGR6LdJnGkBaMwokTPSCvgJbkDJLvw8Px8ALHtsNFLAWuduBij46FDjjTRHysjbTVfBQ7sF2fQ7Rrm",
  "key12": "T9wK2R2szaNhBRoaX7y8vAKkmG1D2tfrhPgHYuRrQ3So1VVcnQJJvXUvsAWZyHoGqaewMH8yH59m4C9hs7AX2sZ",
  "key13": "5vdsAAoU9Y2Bn4t4fCEVS2ezCnGkR1faP9TMBtEVE3CPVFemZFE8iVijninz5kTpiZw4xZLN94ehtJz15LsLWSMc",
  "key14": "2cgorhYt29eddzzkKk5fh6hKiSk5hsQHRgYtP3noKwquJhZJ9XeJoV2bFSTRRAzMkJGTfZbn1BNcUnzRtYxcV8HH",
  "key15": "35TCLV3gGzUczDXCPJGp7Y2wT8g1AVvybeCyKMSGFE7LN8UPXRw1Xfd63TmTx5g3NxRMaNFUazft5HY3LdXtRJYf",
  "key16": "26Q1GcVirApbw9FTtsJHAR1caSzCUKtmioTuELLs85cAQg33vbz5WermEgne5XLG2uBwA9zwJPpits3CUGzGizfz",
  "key17": "626mx9epZg9DXk7DhAUpmdG3CZEqRC36L28eE9ixQZ4CNmEy34VNqyuaB3gAHyjvcMQ2eRCjuJLgFDqrk6ia2WTz",
  "key18": "2dSS9KbLe6zkqPTKNVpVqoeV9AsayNh53dw5oRwUE62BgQ8znc1YnFzgVXPC41kwNbZ9mNzF8dX6s9YAjSZc6jo7",
  "key19": "4u8LrG27jtxZBkd1sEQtMWyCKWM5MMvnVxPTgi92xt62kTLZpJVB6uMjke8BoTgeKxzNRWcsPBxrjo4KB2eFZXd1",
  "key20": "3WUnJiEf6SkyXKuFEgXn5w89sAgesJM88Vr6URmT7tzJprRJqPQ8YuHi3SF2AqBKY5ttJ6sEUCFRCDXZHrQcSJwH",
  "key21": "kX5jJmR2FtduFVnciZzKPn5FpWgNGiAiSdNCmLAePzansYH8cv83VhtEUMy7HkhrYren4LY2eYdScWcCg36g8R6",
  "key22": "3ka4A2of9mrCk4Fe7KhHxvqfjoohtdwxHqHkyDPEeVnLKsurCejrLSsQ6oa3oX6ar7rnXEfhzMqNyxUbXpzjUfmU",
  "key23": "4BzH9b8nHCBgrfa1E18dNa1NVfFejR9B8Zot8Jwfq5LDL1Y5Xz25hibQ7wWyag986eUyFXEY5VnPGqNkb5CPLWMT",
  "key24": "4HZdkhgW5szUkJt6CPsgeg6UpsdtePrNmDT7cxyNYpvYPiaXwSnjohxe6Pf2HfnouLcmgTzpsE7c7LxjbfuQDsJp",
  "key25": "5TiEpEGmoMyzdYJaPQa8TW5KwZuGTitWe3Gs4JFCC9ur2dDEQ5xamBVao3dT1xF9L8msxMHQdSgtHCNHmEnP6ybq",
  "key26": "52XWJmYYo82NyDNC7RLVjUUHQ5oT2kRXMo4PWLfnF4qdBqQRcTBBXRd3dmhDUgW1giuNLHLakNHpxvQQ2sbeXWCb",
  "key27": "1aF5SJVxnfhRT1EJ9NxSC6xpM8phX6U5FsNemdofme1fCbdVcpQPCQnwGnoU2RuwTohebYSeiVpZPiKsqmnQHsG",
  "key28": "8CPfriWjbhuC7Z8stYZpBCZ8TnQW7xYHtHwy33MsAJYiRndjpjuuJpg25UY8fBHWHp2z1HoSRYyX1Birx78xxNX",
  "key29": "4XXmozvpsLXKR87FchHvXHraYBCHTjKy2XUsULVvWNtatfKTRKLvqzBEgL5mMPsFxjRwjYL7K9FV9xce4Eang6hA",
  "key30": "4BCPJQHqKe1Fb8fmTspWRJ11rvk5YNggTM4GfFX5kKnvBkMZw8Ti9At3bcSu9pSghpeXcPt7iWYokmsG9XgYaH9z",
  "key31": "3qBswru9Z2ni3RoUDqGPKGLXGHTBGMPED32wxriajk2DweVyKY8TQobGsycYGde5KPYXvGXKDGCG1DbZXUuw1FMZ",
  "key32": "26Xh5tLyfZBGyoownGVqQVTuSuj5xrhsMV4eoS4F1gDfsK6NyfRKyueazrCoMRZoYXwFPM9yt6F7qmbbLQz7ZTbg"
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
