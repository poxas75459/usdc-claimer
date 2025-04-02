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
    "4CNbjpTMQ6XFgL7H7xRXnGCLbqDGnCoT13JauHuSuaMmj2KMBPRKMVZSGVaeXMvbbHZysKCEmKMgnnFmGTZSKicf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdUyxk9BCs4m35SHtu5Sy92pZwbH1rLvr4iCqkFAGDq6atyY1hncFSkVJDABzo3igRqad1VjUKEfwXbvY7ip95W",
  "key1": "bCHxuL9yEv4XR4PEFzLbWFpYcVRvBXbfqFKYdWmaZ4Nwd7mTahkopisNjAzbnKFwoPG3B2TBDq3WjxpeiFNdNLS",
  "key2": "ex5oyMw6DHAyu3k7zTusjK83fz23ybCYpJ47BR5edrsdWsnHZF9upbF1RK72V8WjX72twnqYczY2gS7qQLtnZ4R",
  "key3": "257DF6xKvwQzjyL7eNE64XqkfHg5n7AfxRjLbi6MmxUW9UmnnF1WaXoBsm2auhbspsbBeRiJi9T3bpWUUf94qRzR",
  "key4": "65ZtXFQ6kPq38rAi59A3TT89g9GuroKr7BN6fMTwk3rej3rYpy7XGndNMSXNv8tSt75FamzoXcodT96eLfNS2EPM",
  "key5": "tt5RSosELQC7EGPGe6JxBJ1QWBnWYcvDwbGrvJB9Rjw5oPCxYe7T3VfMw6YvKMbh2stHgEJ2TP3hx5kK559Q9Yb",
  "key6": "5vNj3FYAgVg7GGNu2gzBWiXvswpeyNhe3ELhDXVQtmQmHipuxVsYKFDjHqSqwCdARW4pzUT2r3Vnk9hLPzMMZb45",
  "key7": "5DExR77ewPkBYqtWc2AMUXynGaiVRxCoxyRzSCsCjBkgkRdPGGLxYgRYDReRw9x5YPCMgcVfh179Nw8MSeRnoQkM",
  "key8": "2HAANiJWy9MMjumQY9kviXTLDsq4AfK8XQTGGGZEzk8vLMGuZyDYjRbi16h8PqNezRC2cD3kHXKhb89X7ZCyRkzo",
  "key9": "5sgL6d2vyueNvMW7djjoJgQ71kjhbo1SvW7HKJMqzVPS3hmNZyYM78epVjuYJTs8NEeMsccCUzydgD6kFB94GUDY",
  "key10": "2KERgExeYL7h7nTEco8KzeW9Hwx8WBLwLaX6vh86FxuwtEvTwCcaMw4qjXRpK3ERJ11g5pbvEN2UJrJBQ4SWrat9",
  "key11": "411QJettRGJYn6VdesjcAHUQd1Rt2SstGMGbrrvYzQ6oMrE7soc977jtJEzoJzfheTgnPAMiV88GwToChSfws6ax",
  "key12": "2vMh5SpPc4ay2AvnA2cADAZZFPwjgQYfaDUd7uJx3RGZjwmDGycszNYJ9yqRnr7NZsoDnwtEjzBSsFqw3NtQQz37",
  "key13": "2ds7gRtwwwt9jddPHL2RmDbJ5ZbJwJDvzguV3szGr1Dp4NtqTzbLwU9nTLc5ekmsh4519fqih3UZkjYKsMvMHAVN",
  "key14": "39iai9K44sdQ1YJqGTqa3FUBPyUmda9EoV1Jp2gsPH3t2XaDLtuoxLwABykRfdgo82ApErb8fYVvZ4t3wcw2qa1C",
  "key15": "2zV5KLtg34cjUm38TPhPKCTSoRPmtWJgDgrkEebdbGuBBd5kxoX58kAPRnXcRuZdZXF4HWX2bgvMMTtCkb7yurMi",
  "key16": "2P84VdLXNw3pX1v9M5eN1MG7z8cVdKH9hHh2BbZaENpkAoFsqWfJDhFH41ntpcpa2p1UAPw8MjH5qeXqFLbGUrag",
  "key17": "5YKT2yZR3sErGWC2UGkyFnfiMozbdV9XiuYPhTgbUHiSraB4haMyG58F4uJ6rLKAmrod73CXt44fzuwP1F2j3ff9",
  "key18": "3YDj5PeZBVQFvxeAC9nEUTGtjYDm1d9iyZxiJw4bkd5cNi2FEaXCaJv94TooBAgT2mHDfE6WCkV3hDrV44Hhnt6n",
  "key19": "47UwmET413yHRMSWUEkZLaje8aQmcqxfj2kumM7StMw9XEn4k5UY5spvwgm7W4idioBnQm7eagNDPdmGDFZHDEsS",
  "key20": "2LQmfrh5QtL3zKbrxRkget2cVe9SPJEjuji8SYuRj1ESrppGHBzknidbL5vRmckwmSkZDdXkCaKdYBqkmfGNFR2g",
  "key21": "35aMB1KmCdGQFWkSToDAisNwK3nw9i2TRtYcyCmXaknU5fdNn94XSaXAXj2KsPRNNN7BbrB2XCVBKcMd2GR3PQuv",
  "key22": "xngMDSKwJ7swksjyNMfGTN3LYcJmLLV26XJnj7L4NhgfyAv1bhiaFu6BS4D51Sq1LGWyTq8EdataMyong2KvSTW",
  "key23": "3DQFMCA3eQ5EQQup8aE3emUbG4F1RVK1JmPffQpWsyNFAho9sW6bZdhimHNwAni3h9bsN1xTTpNJyBmi1Zrj1iSU",
  "key24": "4v3165aSTPvEsfHhMdaaisqJ2Hv3FSc19RDviWm5fJEMofK4gEF3rrRKHGrGK6BT9GvBj4nzDU1R1Q91gLW7fzPM",
  "key25": "5epF4CPLds21oHxsEqQipeUodqMJB7oQr3FvjheKHgSnpaDjV8rTrdyDAuVxiWrsqEuYjt1aKAwWo6sQRwXmpLaX",
  "key26": "5Miut45fQqKrj2WKfnkPSTPw5LpJbBFU5SCQMq5YYfcbEhUn5UqjUHRTDgartnBQtNQqqHaWtBZBfnr2e1mxSAYn",
  "key27": "3nXfFXKTcf2yxTWHBnbRJZGzWydNvGqTe6VuBEW9bRQme6tEZ1f5iZnp6aypNX9bs1z61aHBYNo8eyLLaYSiUMJ2",
  "key28": "JhA4zNNJGYgDuQJCbf6KwRNbfC6zjJytoLsqQAdGFdTekwvQeFKjyTovJHH1N2jEP9tZevo1mJ7p6ZYthPv1aiq",
  "key29": "2xbTPfnbPnn1zqrMVsjBoz2UJGukftU4p1YuT1Tx2tQrTmmma7BhD2hYFqXc5wrVzR2ndBYW6NwCupSta6Xnm8tE",
  "key30": "3W6Mnom8VebUEj27GbiiFg4E8gR4Vf8RZEDyj9oAtMVEyKxEM3a2qSvD1FhmGMZPnjfAKxr4y7jLbVfgbcctwXxu",
  "key31": "4dqhfq7V5CZXsx8gZnkjuSoLs4F8xavmMZm8gjJcj8ZPZBBCHkfAxoPZm4kZsKiCvzDFoF5YcZofa3MxiqugPMbE",
  "key32": "4QAkbWw1rvcPQzWDx1MtX12FL6XtVVxp1axnR8mVR4H6HqgnRo8fiEDojzg8Jwwc75QwqZ574k2LJ7uZQW1oVfMK",
  "key33": "48EizVQBi8AN83LneevcteZaihqpMh3qQRPhLXtWihLKC53BmpsBYdLdCGxhHFVNmdUNyU6tVSfEC9AKZiDxfGwo",
  "key34": "3UEEwhMumJ475cRrP4BCRvhHe717PUHCMhz7thqa1aYTshessXHuuczcPbVhYsmytP4SivV6QHM7KX9nq5e7jJC9",
  "key35": "5QjEpT6JoJi2DRrJrSgBfUc5j27Cbji6Gk9PnSUVzCEjaMs3y8PmyKne5pGEuqYxja1wDoCUQCmnAk9vvry2K6nK",
  "key36": "35qFPE89M8jeYfBuxbgpr17NS8ssTU7suxgTZYyQWmS8yAz2GRPaePfVMMZnenagUwvLKqWifJnNTXJ8NVMqZ2kA",
  "key37": "67gpMJkAL1ate9Y4Qac8yi2wP2TUaEjtCjTUR9nfA2MJaJHktXfSRiLa9dsPNLkaoUHRkbzsDmvnZ8L4bYbFnVBU",
  "key38": "3WKSfhS8UyrFdgBo6cM3Jrw6vvk6ihLEsM8LjLEfe2QU1MNKxKgUKt1TeCPzA7iNHjDhmJxtBhSbVwBV7sdk3Wp8",
  "key39": "5r6CddPcwPyHHfjP28rwG2odW8tNpGVFz4b99CTo2vpWcBNtczwCYgX6FgRsLrg9MRdn4SZ91TWdTFqt2Hs1h3Vu",
  "key40": "5Bmvkp7QRtMTSmab9QTwcf2pjeqAuvNgKDTNRdLbkGRfUNz6c3a32qNVLuWErmJZgjRsp1JPz8bUjCLHv2VAJSom",
  "key41": "4nMoA3igmuE3FyKJ1uy1EgV9mQyStuWkaZRyrpohrRNxhJeNp6jKExrwWY1svHAPVaLjnPn5N1s7deZcgRg7CZmq"
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
