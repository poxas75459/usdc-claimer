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
    "nY3nXMPxhATP2fTgozgfTMdPCppt6kGDZc4xmJZwan1141uC4bg9zQg7tFickKJ5Rop3aJFto1sWksi9zKCtaSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FR95gAcuMsYNEWxPZNbUQ93mUxNkEZRHERZ5XRe3ikMuJPbzcnonqLA7fkMWG4aDiCyAiSug65dBQ1Roao1Lxm",
  "key1": "4fH4NXJLjaft7TTLkGx8hppsb4fFRxuUpuG9rxT7TkX4fL1LmjfqE5nMhr7ZsauFCsPAx6Ciwe7yX77t7XoeWSze",
  "key2": "67nJHssjh5yjhERdkmHreE89MWeuvt1eXGq4rRxJfWYBUSA4U3fwYpvN7etH9RQD14WGQXemBFmonQK2nJHgZ7rL",
  "key3": "2WSqAeK5Wn6oy4Z7uRjYSLqP8X3hsbsDmdsX9v1WRFVcyHHGY7xinHwxuAPPZvr225ihtyqSZChYmst8SeMU9S9k",
  "key4": "4jwwQGnJEKs8rnHuuQmKk5GeAMcbVGADjssoLJFfCHMLN7qHSV3WaBuHBGd7sEAhnBVsCX4wLmgXKGsAgUdGiMdH",
  "key5": "52XSSkjeppk2YGeB88h8xDKiTHVAgSdb32Wi7NjYrxYWmMsVtVyiuGyjbXF523WVyRdnGHnNM5cFuHcqZaa6LTBp",
  "key6": "3grtLCFWuMqqAbjEZW28QV7XVkexeZK3oWvx1vbdWQfxvdEWdLGCj8upUfUxeDciT1ZDcTDH3arj769QtNHFxtFk",
  "key7": "3cHEo5SQsgNeFRq1hpktjs5SJyQ4kgLxfDc8w86838RRdoSrs5XuVP58kTajK4tF94z1KoN3icKaGbKRxFbfBniZ",
  "key8": "5QAcEgFi5nhFYDCQ8v4kFfM9ugzM7NVtUwaVottigwBHyt3AJaMFvaB1B8Q6J5KDNfsWngAwFTAmkxY4sTpN9uZr",
  "key9": "3KsoQzGvNUiPt7ZXDk8F2vorwqXrQKGxGe27GhL1AyMPTQ7EvZeLeZBvTQ4KfV7teRGAvcB9R7t37pSg6HHBKRQp",
  "key10": "2h8erZTC5PY8d7ECFS6T7MLYgdtCTmD5j79RqtqtpoVTr7cVisfbkxR7didJsW7Y6ZN2HdUERVEuLNt9p6jqwq9x",
  "key11": "AuDrXKkEATnKjy8CMW8gb4DSVgHYApNrVB2D28aLnjNbUow3yAPDkqZZZ5KwwMtayxZMkEnRyjhXyKPFbcsNmZ3",
  "key12": "DBWEZ4WDaUMKY16MG3YXMZJpTWdAkneaP36d5PtmtQuXTKyaW3u7mdz3zFbVp7FgMCwQQu2i7nYQJcz9CnRxTMd",
  "key13": "3jJFscVqMb9q2fhYCnvcUAXLm88oNbGzWHzaZBTqtnRcM3cuDG4eUxbfK114EVfiv9nvhFRaphXCdBozF3cR2gBz",
  "key14": "3f1v5m5BHmVJRJ4HdLtvF6b52mddNr3F2THNWgQQxWuX5f5nWdGddSAE4QH66aXeJcopDS4hnYodysoDiq4zs16H",
  "key15": "2hfFFwegHfLeLduweTBwTyWCUatRhW4EKbPxSqMUoS6wE3ihVuWTQxMD5Y7PXSz6dXtKF1dBr1DejGSwvytQWwdi",
  "key16": "4UJ1BPEccVbW2yYgAepuB2sUX3ijBSikEpwA4D5qneJJ9DjU9xtsq3NvCAg8TtptEpJZ6zNpX21aB9s15yGyQ3gA",
  "key17": "5ExvXfdDCoUzRJPeym3LRNmckYf7e1zMBMqv3V1H9t4qGbdz21NHQC6rcA3p33zzHUr3wq6S1UTWNifRa7TLkARz",
  "key18": "dcoBn2Btx6PUZrdu1y9iLA5eSPzFWWFfFH8GH6Esga7mEp8nSQ6q4GLxtxUy9AQp8wEdvNajrw5kNJMJVoVMD3h",
  "key19": "5B1YJXJU8GvRBEtJEycBWypp28EhBWZZ69hLU2wjuXeDhka7dT6kdXQXgjuNr7SrfuvpUGaKQkASWEcU51SHJzuT",
  "key20": "WvNnjExp3TFwPtKFoK32rg9FTH8GNu5RJUKeznCXZYyiUyf3T1SzZZ9wLqzWdk4BG5jWe2cAwooJmoW44fsDod6",
  "key21": "2x8RuQghoUUKT4ange44drdrnqnpBLsBRMDewFSNEQDH1C1qw51insDvhcddWAKCitGyMVxQTDeXGjpMGWujU32w",
  "key22": "36XYE39THqg5UwmJKei7mtDHiEmYSdMoUJnuu8L1FiUD1Qoq5Qv6q8cExryoAtRzyd6JUKTAA7vVQTeJH8r2dKxo",
  "key23": "5wf8i5UbVYrtnmkrkmvLCafxnriPhP6NiaRX5RVkATstg1766cxasizdGGsKjmXa8Jgi3Ti3bkm1BXECvi54UNZG",
  "key24": "3hAYmEna3kSFQugp31QPw4bQ2xnUeEFeoAQTtG6fThtY3jDhqra6WumzCTg5b9tVxmYfvEtAheR8bCnqWy63izJe",
  "key25": "EEsPXY1Rc9zP4vYJopmVtZe5VA1GXWSERpfaYsFC1NzcumaMR8QwnNMsPatdQVwH1Khugv7KGRKeG2LPpDbJqPL",
  "key26": "4u2x6XhtGd6XnCsJQEcn9pGHEfWR97vA3AprDWbchuGn7wgFc2FBCth46XmQ6Z6YXWYxh4qwq6kwmYESS5yWxCB1",
  "key27": "2WzGUjNYdiFg3DSv47cu3ZhUv5rJbX7STPFQUjTMrJwsdnXtGKBXgdumKqxf858fBgDhnn9LRskdn24ivdd93vGP",
  "key28": "3k7L3KWSVY5LzhNHoHQos98qxNPKVoVG7VuzD8JxoJY3vF44NCxsJDQDSDaSCUMjyvfK3kFTQdavxBcwTDhNW1A5",
  "key29": "3N7hbvcwqFCcGrgV4AiM9fP8KT3PgWsZMajPgL5zpDLZLMARH6Zkfnjj1F61w8cUYsvPTiSDWCpc6zt3BWH1dWdX",
  "key30": "357REA1Z9tZjRPehUxYpxsrDu3eFj2DqcaG5W2zWAsojDdEnMPvqKtUGq3kLQT86jcjpCyUSb9cFJaJ9om3T2fDJ",
  "key31": "49oNThmTpizRpMTnzJLAhL3x3zCbaKF4KdbhcgJuo2aCWGVXUd7dX7yYoA6rt2dWZuf2VMxN2EdZs9phN2NZ17px",
  "key32": "2gbTvy6PwqregHaWzEmQz5G2tQUmmvw32iUUQP8XvomCsEGxN2EkhZdAgw7V7SXgPsBvDpFWF5W6LHQu2ihM5dbF",
  "key33": "3nEF1eZNygbphmjdMEJD4eq3h6mh8a2XoJyXufwfm9q1i8NV3SRJQoVL5R1X2tnLUX3qWJz8by7W523kuyNsFbLQ",
  "key34": "3QZzqcHjLqadsiMG6zpuWFtFGAY7qJracHfce3MBnqyMBWrdSu9CGjArSTSBVZDi9jpyVLVnvZMoqAv3zWSRXx4N",
  "key35": "c43unNTDbxXWxRpQY36cwbefxh61bEZTu3uKsugqpg5RpHULrKBJUNBTQQ6uEoqGPs7VGgSnTErBL1zv3fgj1Kp",
  "key36": "Hf4kLJaJCWzG8MbtiG9trTk7rBmEiXWTJrrfSsJEBQQdU2S1rtu4e15TwvTJWn4ZBWQP81xanwaVRLtBA1nGhXq",
  "key37": "5eDpXdTaev79rrYE8SUGceBzfCfWFJpWtDMLK5Dq2x8eSSGXhxpLSkkm4qcayBCHVX6wn7L4HyWW6PK2uwomCLjZ",
  "key38": "qr6Y1RZSvq8rd8YELwRZohFU2GjgKawnpsYFeE8gNhQsuQc28wk3ScXNDgAcp9bJxVPfFh7T8D5xAMPRKsJL3JB",
  "key39": "4AhrtMuF5h2XbsXSjxyxEJfvRaJUic6bekW7TH2QEwQQ32abWQUyh2ptgSzHfnrQKmvcozrBBUTxPdsgFqQFwwZX",
  "key40": "4Qo8ME1UtxjbmUnm47iDANFwTzBrPjzAakze1G2PNeacrrxHsHm7M4RE69zdGoeaVcnU7jjtvErwD3pdaFcmdDbX",
  "key41": "2Tyz3ffA1QWdHMC5G4PqPCMMGMZQYWVDNkD96xjXfPUa4eb9KJTCgVDPfrWxma8TJDGiczQKFRBGu32Z9hmDe1pa",
  "key42": "xPrMUyVMoWnD5qZ9QYHRWwdX17MdDUfv4h5QLNtscfV7wL8EdHxX5GBsytYThhyxkww4bYDUaMTbYafLrfRzrYR"
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
