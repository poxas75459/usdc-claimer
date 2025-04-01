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
    "4YqK4ZkD1z398aRdStLYBW4zx2HGpMfBNPLUdJVRMhxtrk1oEsPRbXvbisHFkmEKVt2RvWgGFHDbbTGTRbaQRBfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfTJvpm9ckFfX2M3cx4BZM6PWMfm3i111TW4UfDh2qxoMP1ZH4Q2VVJYswYSUgekU715PpSEvKYEYvy2GWmJbzR",
  "key1": "NPboqNpJn7wdzuxwMegQ4H1hCGYKUfAr5TjA9RKGBvvrWyDPuxoU3sPFyEBFk5rh6f51unu5pfwjZGoPiy4ETfz",
  "key2": "5fELCoDNXQxbECr7C3pYFK5Yp2mK3Fk6YUdUSxE51grXSPmR31QpwTSQiwnx5c7W77NmLgnE2XkajSbV5k5Tkuyp",
  "key3": "3LL9DfKMQcwuupgNE2UBo9kq3oqKhhwtphY8WqQoxDrSsKyoZ6Eaw2ZP5jUBZkCmJtAoRn9XNJZ9y61CHVC4Bgjv",
  "key4": "2YEJMrNbZv9UnWfu9xGyLzu17jYiEJVY841exFEpEreQgjEMdmL9n8TPp65M96jpPPLxGSQpJcfTAqFrLihPDm42",
  "key5": "5AVfBEfSUBzci9M5ipCMgmjUwnYNpW3ACUfSVo9GHqb51WtTDnedAa9oba4XAu8LyJ9bVCjbZhXHHEpy9mNeJCQU",
  "key6": "3p9sYoC68w7eXi32DT7m4ttSgZd8zPjHaKiL3o93Ey6UHNKa6WH2zGhdfeaoKPoT6pu1K4MjWSkuHVnY6c6fEvz9",
  "key7": "3WSCLKPHmAGBdb1cqqFzxQ1eycTkmLM3gEQFNaACGA7xzVyLjzC8V7jwfG3MQoLBnzunYQ8AjDgz1VU6ccDAnxkN",
  "key8": "dntCYHHRcEZUGUQAESaEwYz61AMxgRyaaayND2DVRZzkmzxbsAy6VAAxbPSRBe2CLxCDvZ5bG5AGNjhtX7XVzs5",
  "key9": "61pvYUnxnM9CEgsUzkPi9wtQK2jQykRKqpmyVeXWAKdKqvfZmt6xJxYJ4pZ6ezV7CJaCMt6g1xZ56eRFTKGuTHpn",
  "key10": "yQ3XhrTwvixa91HmabGSTqSD3vH18EH3PhQPxKU5S1d3U9UPMmTBdEKcssjSbomUgyFvpsT652Mskv8SWGGqyhZ",
  "key11": "3r4raDNbJJQXgCtsMGr1vSvcRh5LPqUohJJVeuSiuxgn3zYGBZEh7zxfA1yU2TkvanReLn5abAQyhbVJcTxW1H3V",
  "key12": "2oQ2DhQShW4nVMyGw2njZ7gHFDtEqxzFzogCGQH4YZUFiGUUQ9SHQNEsxxkrPbHeXKC1x8gXfsKQjzbsDLjt7Fqt",
  "key13": "xcbbbH5giSKCCmqLmM2h93XbSXxCNEg8qgR4ZjhzDhhwdh7TirvgaHAcTj55SZ8ef2wNb4icoFiKWRPE2UoxUCy",
  "key14": "5HeE9msrjPJGVPvWzwe4QQUWNEEEx8wyV4oSEm9vVpDzggtWuym4cdYzunQt4yUzJCjjzfWLy4Md6zVQsL5q1pNA",
  "key15": "4jp57aqwMh96aqtkCrr94SW7MUfEHi4gRcowta89BpU81E3Ak2oFXnbhKGyYLp6Ns4ang49eQD7ZtNdUHuuB9hJu",
  "key16": "2GB7QKXYmdWKewSEW7h1YiTwyRNgTWWPpx4zupAjvGGAhBF4pqCzeKVUWi4xifWS5aMhYjGjKsJ9PGmeTXNfNs3e",
  "key17": "5yp8YhgwBkw82gNgZ7t1KHkrX9oJ1XnQJE1T2pj2GUZACJR7dTACvSd5QAKceD7rfZ8ovB3wJoeFXBbJpbPAMD9k",
  "key18": "VKa44MjEYqUTvo2iUSYyWfswvr2RyT4mfJRZKgGxTAjTsqaHUJH8oAMzTQe2PW6YNzjDLGiB9jhfC1EAx8jHmGd",
  "key19": "3aAkg6NxUbpnX8zGZzyoTnJo66Hx6TJYkzwcHme9JGhJi8HMp3p1SYSH9CGTXJi2Ti4YYG8gpgozWoyKqrhEoLkp",
  "key20": "3v1UuEjDu7JCZ2EXF5WDuV4yMV2obey2R9Qm9azseJi2Aj2hQasq5VEYz15i9uhdHUvTbbWuGS5kTJdWpudsKiCs",
  "key21": "7PKnYSEXBoHbQqJg7u9aWGz92q4jVpmYDFBZ5Phs2cqn6WJYm5mpsGrJSbWsCjV5u5b2S9NihE3BMcM3eYuqurf",
  "key22": "2nyHpwBqzER91n4MUxcKd7Capam3piFMzjySjY2wjqGh1AKpN3hv2adJY6H3Fbh2E99rfSR77okw5xwucMjAtfnQ",
  "key23": "MjocTAHRDjBTng9x9nbxRYcGqCFbojqyoyyZyVLcE4E7rffK2M2dNhGijkZSbuuiYU93wQKA2w3XuTaCLZ2So4M",
  "key24": "3BEgdAgMuyypXAVXsa3Un8jmKvQh3UtSLyK5kFwjgpfdTaM63ZLZ7SFvHsByAP13pM5dLJFaJ6imDYVPSzDunBAQ",
  "key25": "CNsehdmTMRfDEtSqZBTMk9wQXmacxjaTH3uUFwdFRTopwu56SXDncH7BsDs7GEmM5ysR3tE4dHMDtuzCch5S84b",
  "key26": "4Uo6b6JgDfym76YtkeUP2vW1gu7znc4rF1mbgis3CYHJJJUuUV22Pcx2sULKibYSGrUMwqMQHU4EC3PAqiBGNsiC",
  "key27": "NKhLJCNGcNGDbFoS68G7jMRuRWre8KKpak4ErGK6mHQJbVkh7NyZNA8WnDgWo899SyMv4hMnjCahztWNoQ67jBf",
  "key28": "4L6jwPK7TT7Eo5a3bJMztGuk6PKaNPsu7MZajkUPfmYtbWFmV7KtdHRTx7uvX682PFqSmqBXPvX3hXNRNLNo92mh",
  "key29": "4ePwu9quqACKQcSVGHZEvSqK77ZS6i7QT5uPQGjQWep33Rqdg1Q44Ge2BxFJ7w67fgh8YGQtFE9CiCv3oGNaND4a",
  "key30": "7fB8ZAfz6qPD38PkzfWbbp13TtRsS3zEred8iQ24bBgwxg85h2iWQiq6Co4SYsyKUAEJX6sSrtgCw3TCCjzTLS1",
  "key31": "21xzpQouGvS8vTpLrTuYFfZ8F1UAQRFBym6QtYoLPCK2WG3tHDR9HbnsQzTgyjStLf7jPaxBD2ATFMfaaJrJh83G",
  "key32": "4nQuwveKZrz6QDJvtZGttPhB8T8oDW3xnZCHHyF2PoQCM3qGfPeXeXCN2SmBw8if1rL57TrmPxyaRkCa2omNmoAy",
  "key33": "4UvbYH2p99Aa4Wr5LGsQLQtRp2QmdsFLANbCHdeCxpkWTPUWrZ2T2kJSC4cUfF5at1verwg9mqsUnLMxQJDrgZjA",
  "key34": "FkXVysiGX5iAfLJp1ScNxDqS1LHwXywdePFUGvpbrwMa9HbZkgyJSDTQoJMUngTwqpzUkgN4ueLQ4Gm1aq99axp",
  "key35": "3GWryRzTyj33a1HEE51K1F9f5vC3n6M3J1YuhaGotxTETrru9w12aniQFgUZDbJsrnDPi9ASv8a6FsRiUASBWMCf",
  "key36": "4M3MLqXy9Rd1mxV1oDhzVgS84D3s3wQVk2fMbKnkpFsg7FkJBM17WXWwNp3gwXCVTSLCWUERRUFKed2PkKpEwesH",
  "key37": "2ygn3nSxmLXUe7fVqHRXm6nguEGci9hyCiPxvoQE8PTcLnMu2bRzTygJYcf7XeDLe1so13xTzhb7SVQ5iJsrc5vN",
  "key38": "8aRTKb2NcNosviekNGuouNNNTCoEmct6SPZHVHZd3BDuMekZxQY48uWrQviUDrTMrRExrmdwPehMrj9AEZdENs3",
  "key39": "3ZBc988a7vc8natBt1kPUgH8w8emZQqJmFXimocuGZPaK9idknvhWz9FAXn91V65TztdaaLrw1QqeiXZ9jxufJxP",
  "key40": "4xpPkj32J9n351oppKuzoqct6SfiJSwmttZxNUXnLAbFW7b9K2933TQFhF7U7evkBgSVmD76DgbTB6ZHaHWdHLZg",
  "key41": "2hvNoBthq36ZBT31Sw6nvz5Xv3pqPzsPbDhjrYpTw6xLji9zfx2NMtc4R6HvAT2pfaHyGzHaPTsBnL7eKp7AduRU",
  "key42": "3xE5eCVSWy3ny6SpBfV4i6rMx5oCfiTJyKwjW4iMxaNC73KwfNAGXbsMEJ3hR9Vsk6CGp3THbdh2NG7iML8dogGa",
  "key43": "2ay9dRJSysqrPt7kzzwyKvurwXevAqw982uksnwTM5PM19T49Bii8Ms2L5tvHCRiuZN1FZbqmpfSBzfR5eBbUnww",
  "key44": "4aa3vscjAZaYrLXTm8qvSjk8yEUpcM2xGrNvtH2pjDyHh83qbUuzJT1nCVJ43urh53j3dEkuoY8v5TZL3yZGHJRx",
  "key45": "3xtu2rNnEMv2kfmuyBr7Hm3G2EJL9zkiUonfZRzyGDpuRH96gTEz2YBARD2zaPHoJCd673eCgphCokFTn5Dc314i",
  "key46": "2ryM4nsTqHwrKVEgqkW59NdDRa8wC9YBLW3PBhY3Axtx2ceLgCpGfaWY1dAqHR6YfgAX4BqgYWuReVoWHNuWoTeY",
  "key47": "2wGyBB6DVhHQuaUHvWXDBMyV9FxU4k63LmxjLyKaDxoJ969phUQX54kX7oGADAXa1SWtf8QQA8r8e8UtFZGobvSr"
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
