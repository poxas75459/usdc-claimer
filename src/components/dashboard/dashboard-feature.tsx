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
    "3SSmtDQ4KDHNAEjAtrmVXG9JYEMChoKvYEKFifyVFcRGRGUBbm7yEeyw5NfVZsHT4QWCYmX84L3N9bmV7VHFhmMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YT7EoNWLG7MNa5jB6kt19Zg1k4Q9VufpXeKz4on7syUDMewjbi867NeSZnN7bogp4cf3W44Hro3uqovaVjF4QUy",
  "key1": "4xCUwVHB45Zrwf1rAR3CguMf1XqV53Ef49G7ybf35m98D7ZifE2J2ksCNf9T2rjxm9KgwYbBh2bWTTMzSWGRxHiY",
  "key2": "3NkNe1LDJGYdDyoB9fvNUcsXXaregJDjv2sRnYompR4wBJCWDq9adazKXXMetikpra4cmu3Q5PGkmzg73UqZyUih",
  "key3": "3rWSgsdjE3ewDhdE2yjnbnJ6GNg2PnkKykY8dAUS5tioDjPx9rePQhonEQDZFXA8XKDRqkxd28o4fwyPdhpr56DP",
  "key4": "3xwb6P9c69bUfVcybJ8KpMTMxQmBWXMDpSFXL1tEEUp4enF7YZx9ub2hPEJVYJdbPTbLZitvnewQNxQ7fPje444S",
  "key5": "3pMTya4p7nSpL22SufKSMTVgfEsV4YYHqppSRSMFgEvXKSoxehQypi1ZMWz9s2kHWhyD8sEPWD62iqcRPrg7zUXP",
  "key6": "NgMpSjLRdSLdgSixYDFrfMcygDge7QEBD2931tPqzdFpgNuupvmoi2azZorLyUrYAbiDh645eLeBeJbQXbEf4Vo",
  "key7": "9NBwzj999QSMaXrLUpTG2a9qypr4jkWT6JzfrnouKSnRitVsvnThSehYBqvfwbpu7mxkMJf9XkoZgCEHk6NuYKi",
  "key8": "3CsWxQ5nKYqa9UgSuGW1QPMUPuF2uUNroeQrMbhDm5WUhALCKK6r9UMWDRADC3e6aZdHQCaTRtuiMobfwpebqwi1",
  "key9": "SraQjLfYco4nREB8D9j2JrVEtjJdNUqmnCZjs8pUxcFLKDxGXQ765RYJCc1Hcmp7VcxhXa37WXinvAFdYuRkkNW",
  "key10": "2tfHDceigBtvhN83bmb8PTV3HN5ERdk4qrxRKigF54q6pCdNfeb8GWQxkYzqhFonCTeiejayswnhkndgvNk5AvZK",
  "key11": "2U8dUhuSoRQoTeEUBGgVZuKsYSHc5RyGVejttZWx6aWnourEUxwM5xvc4zV1nThkeeVfj8daxWMWZpgKizynJ3Ei",
  "key12": "2Xw8RWrhG3bhA7q8APZhVFKw1e9iSU1Q7Q9orSGxxGpT7Dw5nPXBXeeo5Rrha59YuVYhZ6mhNS2ti1Q1rAFjfRHJ",
  "key13": "4tKGoWZvicVBgTbJejX8yN2Md2PZpAVTExrSZXLNjgKwmWUMdQaCoXqdZRsrVibyyzQynCfRKVMr5PeTMAcBL9Em",
  "key14": "bgGqS8nw6pZUAcDQKWK9evgTV5uG7qZ1SpfTx5sWdoggamTBG53VFQyGPZ5GhBnJhiPWz7J8cdvYWQXjXix1drT",
  "key15": "Btjq6U8BxmE2oVNjLYLBDT3CDuz4SA3xonqojRy5uAVg4XMiuGdbhqnvJ9PVyXmBj5fbbm76e7FaTEUCcxLPec1",
  "key16": "5FfNCuYZyHPKFC4NhucrPe8yRzKNsj6HLUN6Q2ajmwLXaR4ajeqhurVvZ1VCC6ajKFCvYzS5PQJtbvRtXdG6vnbQ",
  "key17": "ccMVADyPRVfechqZG76KtoGGPFt6R3JQmFbGkCtndDJPVojpeMqdoLS5ojdCreBkgyiLqAAWhSzwffuNafbifEQ",
  "key18": "5maLvgxASRnkp2JxkcqSizpHm6cfF4aLkjUXVqsQgZsTqJKxREvBv5oguvW5WdkvqYqf9VJ6SRvKTYdnSGecAvQi",
  "key19": "1HpHo4onrmeXNy9cEBaiNqmGiaEVu1htWt5JyDht6jnEg1m4yQScJYTFViLpSRt1bZctTX1P7jLSVdeHuifMR42",
  "key20": "4JzKBDy3jv11N7DdDVLqwAy3gx49YrZnFZJYiFWbQYaW6J8MxKxZobyST8mwzBjVdsCsih6SYBpqafJ5FEvkge2W",
  "key21": "vDR9uarFKyC8Gk3z1SJJsYDJQdKXmNdNofdJEwFCNiujyJogb7wuzpHT1TXVvHZLNGxFFQqc62tzPPhhThRxBL2",
  "key22": "48U3UcJoHyGKVJ3xwiXAnEBtf2xfFV4kzcHRK5kZPrT92FDGa6EYhndTAVD5fYqtmWHR17YhtHqcaEMsdZSaXNGE",
  "key23": "387GL4ZFo1d5Ti9FbGdfXZZZrTvmHBWAoufZcvQd6CjoipD8pP2arjbb84UUNNfkmDDpZP5dEZHfc3vwnRqi3NAV",
  "key24": "3bPACHqhfpmSa717JHWvwUuWhGDZjYicFJFaPT1UbFf52pXutgfth8G12VxmCbbJPCMauVbC1YFJLA9PTA1Pckcc",
  "key25": "u7iaGQuLPeENYxFsy3K3Q4AG6f2dpBBdmCgGyzB58jAKnWUCp2dwiWknnEUCRfKw9VS9cfD2rJetUcPsDym5JDZ",
  "key26": "rmehk7XaoaocypWzbsnyjjhsmvsS6rFsRFcBUZRujGiKaY7KWsSSdsjTRChFAPsC62mXfVzR7S1eDkLojHe3X3M",
  "key27": "4jHY22odTJ1u7YS2vmZn2Wg2tCDfMqeiC1EzyQuJYGkMweWCqxmFp2raBHdJ3S4dXnvssxhgu4A55pomma8HqxWR",
  "key28": "36vw5JDZ8XPWYzwUY5wGGbowWfZ7VmiHoowvP1m1i991D6gZhMwko8z5YxAa3voLVQWyUUUYmNw8KVerk41dnTBD",
  "key29": "39kpgB4KA2g75iwAsBUdyoQNPate6RVeCUBQkT3Q3e1wFP2fkm4Wt2WS9khz6YvDphH4cApJ6kbmAU7xiyDN7k4u",
  "key30": "2VJfpdk1BomBs31ZsCav53eAvwP8VKv8ReBWhAHPQGqZz45SJ18Ns8SZ7UEVjN4MuBMnu9UiU3DLVb2vRF8VUQZB",
  "key31": "3G1DhyqCdvhde8At1pCwUPGBfUic8ehNvhMULQb4LFZM8kbJKo9cdtr254815ypifPG2SvYj9UHNZiKr9f5FVgCe",
  "key32": "3WjgBzMU3PoiDWQBqd32igHSavcCY8Xf7H8eBaTx39Jg2mA9q7x6i4RjXZvZevSRzVR6H5MFz23vCFK5dyMAsSe5",
  "key33": "5pCAhUosE1GykH4aeLTZSUERywwUKdx6jDBtrNt9YiGQXgBSJpftSdkyxpa8VLdW9DMNuuQupHyfffNrPNEhztKU",
  "key34": "3pYAFpxSxAtvsmGZ3M6aYLhHR46Th7mv26y9szdyVKoJSVfSghpxN56bg7xm9sPZnFERCVrDYy9RmAnDXKjqn2Zh",
  "key35": "5JnkBXDnNKDr8XK6x13bAVANVDMuCgsGbGubRZpr5hq8aQNKq6QRbVxJiUWDenr7DEF9jQ1NK6gjGttLwjBHfvV2"
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
