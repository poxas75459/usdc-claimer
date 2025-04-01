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
    "4A7doNQhHNLdxkSM43itEqjWMDtWBifwLMjCggcFAQng74kTUh68GMDBCiHcHcfEWxPFk8z7UaDWPHJpgFCFaRDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxsu7sXfNuYvExUQg4YzQyiLvXKEt6ZeVbpM7tyzQHxLB8kMHV4RYhv8ZhEWWZYNetA2zwSWP6RYUthxBsvnH3n",
  "key1": "5wmtcuGiYnkqdSwN7ozcYadsSaS4C2cmn4paXf83PUSf7jEyvThbYajJg91G5S8K2vrQU1BWwzVPHcqw4U6xMa6z",
  "key2": "5UHfDkjwphTFDgKfqL9RouycGPB8HaDZn5pu6r3AS6mo8EsuHQ31eJXn6YHPAn1WLncVHJLR9pSbMWC4Hcs6Xk31",
  "key3": "64gmb1yT1XdvkULJp5KxnPsnp91tmKLw3BKJc7C1LaWHbg8mjDenNNefxPYe2vXJpvXLp1xS1xKMqK5txRt6uZ7B",
  "key4": "4dDp148YQWYo6wkDoEg7BhiRaWFX8CgBs4CQG4nGNnErkdTXAWfnsQ7aW9SFrUhWpFDxV5BYLPkgmWKb7UKWqXkE",
  "key5": "2rzjLZCmQHKrqtHkeQ8Hj4KL65bjRiuMgiTXyPrxnmpZ1Gm6pYDF3M5Fs6DkwrFyFSsjieAH3y6P6khPdcW1tt4S",
  "key6": "5spoGFQMXE5fFsTQ6vU4eSrqEQokGoWTUUdNzxbgr9ww6iGWmYy79MGm86zmkQ9uz3uBN5uTJV4jW5b9dyXwyy4n",
  "key7": "5apJUXM6oabbzQ23av7RfbZEDy3b5bGBA2wC27whMPLH11sk8hzr7am61KipR5quXUSGCh6TLEzVvHV4j6buRJhm",
  "key8": "4J8WthZGP8rjqcXGi2MZotci819iY5yyXFwbqMr6ghRJFcrqFHhzco6QwzoY5NbraHFndcVofyKfdkp3EeFcGxr8",
  "key9": "42ac4rh2u9joszB4c4kKRjfM2wyafHqiqRuruRMAEpbjAkMJEDHvwrpjpwSuFUncACYtYduBkR8ApRWBskH3wW3V",
  "key10": "3GqQBZ4tw5jZrZ7YLneepvCy2ZGWCdzmBjae5UFkFau4G78An2Rde5xiV789n2fwA25JqvsDWSJNr7ZFkKrtZqC8",
  "key11": "4gu256Z8di6fNcwg7ZMUdrTr3usrWPTEnB94kS4HdoJf9wd8X9tpfiZ6n4JqTjgnGKRmp3PNMduN2Y6Bh4WN29Kn",
  "key12": "2drMX8DdfMGFxmqLdhYJ7hEMd7Vcqq6PWW3A3rJzK1k813ujiMsWmrantdi68i7LBYxjQaUiEBUdzkpArUyotZFw",
  "key13": "5Hr65FdrvAGgR6yfhv5RApCDpQmbYj8c67C3B7XAuapyB7VCyVuykE1kDL9TBeZ1UbUFSqHxBHCNKT3aGHDQYF16",
  "key14": "4Kawf3jv23Vysf7LeEEiPbiqtrchX4uNE3pnzt6HPPoPFvwGu5FnJHXK3Rk6yw8DEctJoakh75gLw8qGMAY4X538",
  "key15": "5keTXaAaLCG6LJ3gky5bo5qi845ktGZc5f2kDj3ZzjVUPtANm2p2xCtENecQW6b9WPb5CBdh51rQFodrEu7a8RwX",
  "key16": "4XG2d5hygrtNdsBWM4eNaTj2wPnnqpRp5CPeDH8WumVqMcJMB2spMZWanRNWoyvuDbaZWDpx8aLPXsNwYfzyHLfT",
  "key17": "qauivHjHCkpPR39tspxC6eoeUSb55n9GmbnYXozasWLBbAViUWxZNVExYuk8idrsZeToLgSeCt6DaSjNoU6WTMV",
  "key18": "4vWBc3xVuhQpoVQe2TpEY2FKwwgyD8hYsWCxWhvTvAwzy6TkmbMZPAQXvLjmM9NduXAFx7xYGKs6X7MLA8AwfH5E",
  "key19": "4D7JJeRrMgMqzaKo1S99AFWVS5rrGGKCPDw5qBmmz6sMeMxcazAMSPCcSf1BEFREdgSmasvLwaKCA8Sx2dUnsY9t",
  "key20": "3NRU9ReSgRAjvBM9WqW79FH4P1fEstJXVJbiumH7mudNsAf1eETBCGrjPkBZmA46NL2vcraroZc7gNwrgpm16dGS",
  "key21": "mh9BrAJS1vSMBV5entfZzKu5aR6w7xqhWFMeCY1cGcdR8dYf8myS8XbyKY9ExcV2CPY7W367eddzxe8PYycHJM1",
  "key22": "36jBAdw3JLzFktJ3QzqCRLKQAe1VAMYiFY3UZMJNCndXgY2wwkYC6NBVzupfVfpfNkg9a43UgeLbn2xB6AYSApq4",
  "key23": "2NhzRdzs8t2ezYyfvpJ1hFweVF7HZqBPqFSre3Z4bRQiTHGxzSm3utPLr4QmriRzQhge1TLWob6MmY5yVDJ42kgq",
  "key24": "MKKMY9bfdjpTnLXD5uFsFJwbCLLLbwYkLNuJHepGog9KvWveSsgkg8TzE3kp3V6hg91P7TKEMkgY1Ht3kVuyUrs",
  "key25": "xSjTjidTy1H2E1b786ne64FaxRTXPh56vRagfC5K9CZdcRtVa63qw4fk3uW2ec8huQgmp22yzTCDjFUbQN6z7hg",
  "key26": "5AfeiatodTj7BsKUbQrF6xSuqnjiTjbcgMcmWnL6DukTXAFiWk1GDeXpiJwYtRP3rbtRbvkY77WGNiKFsoGenn9e",
  "key27": "5LPHRR8cX8BiVUqiLXGZvcpqJ2TLYiJPevnrU38Pmtnfaj6MhQJuPdGACBn1pjQyNHEW8KYHZU5jUCnw3G3Cdoy8",
  "key28": "ry9TyVrrqDeuYSkRdadsBywvCqF3jQuMqBBLf69HbSoHF5s6GfeyNLkJ8DQVxBgQgBiEQ7kQoeFsYcD1qKU4Vji",
  "key29": "55B5xWaEFhvspygHDv5Fn9QEysZPS8JXfP41eyKPKU75YkccWQszST55wg3D6h8BNcgtUrCUFhQHt3qQefRM9USU",
  "key30": "4i2fgYt7QoueQ7iraf5TsASZ2xK4NudiKnqfsYSjyDXAZfrvKqvKm7bbDdGD5m9qsnMJSaTWQ65XQ2tYXCULbMJc",
  "key31": "9nE35yabLebpxyZNh9Be4iX4KhAw3V4bSgZjN5TCNRbTRPEioqdvpxwLCm6AjWrACddPLPKSoHUv7Veq2kdKzAZ",
  "key32": "4UQkQ1hMQuhDCTevX8YSepQMaS6LN7GW4kcUFcrbqivdJqrAeNjGLUMdRkAcZP3qvFesbhHcesEvdpeg5LfAdgbW"
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
