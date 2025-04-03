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
    "4DCaSptAEt38FSGqeyCMkkLoBrmMrh9tr3omF66iP8RtoKnuuQBXNX5o7gTWwFU5dVKhRH1WJQRMx6BdjCFEKhjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cag83c62SdcGu6ycwX45a8Sny9gBKEaM6iEyvbadKeWy7SX94XxeAQiNuAeEjJXFgRTuWJLKQ123ugAvn4gt9D",
  "key1": "5ChDtfbi3ofPcLGS5RBAkR6EdFMPu6bmeZa5LCpbNbrd2W2aUGwojhmrHDfMpAeo8LyEaQFN5A5xDofM4mQNG8qT",
  "key2": "2GqTVoNoFtwk9ZKkdyNpPSSo3oStkLs3QFZ96aKdo3sPKt1E8cVFq9Aa3vmggvCfGnLsDmZXpHf3gHgdQq8QmHhg",
  "key3": "52kygyGA6bgBxNv8VoSN7ET3NFZj6gC6Z7Lz6Ntn8zynyWkzZtyg2BiZFdY1jymJtbKeyY4Eo9kDCYmuzzTorbZr",
  "key4": "2cqoiwy9aHhxQd8AKFMvuP1d6PuNtedCC15tLhtV5akyQpYXQj7bkQFNPEfgmGcsHxxFapdch8qJht1KCtCFpchZ",
  "key5": "45V6gruzS7CftM6geEt9JDSD1GdSTi1E8wQKUZ8wUMw3jXsk5WfVtyBxro5z7L1b89zeKow62Ld1fJjDVteM9U7h",
  "key6": "2xNfGx85H7sbKufkfWSrC8ooUqkfxtMdUMacgDYnCqEJXBXHSGNt1m3rbqMcnGZZEfY56fxibFpmTWvX3chcCBWk",
  "key7": "esGpiC6hCTnxNkMvZVHrKZCseNAFWXVYHZEpChAZnKS3ABogyFg7AAH1cjdR3eRWSSbQVPN4qesp1AYBiNPM2rr",
  "key8": "5LzkRcLHnMXku2r8LM7rALFHpCEjaix942NbiZxmgiHfSzTZFWgizhdmKT8VtQUbBg3WQ9zg4WenA921gqf3dArH",
  "key9": "5YrtY16HuHbD7ZjjBdyhRihTDTtH5wrMmXAjS1UyaAMSpMrVhvoh9vRjhyHTjEqoYuhNhmqHTR33qC4M5krBbYJF",
  "key10": "64oRNH5d5pNbPXKcaakTQdtwShL4DTq5JM7o3Un1DXSi8sVtfFbUvpNCVbgEzxoU2aLZ5SaqHRKFL5cpo8DvaeJo",
  "key11": "2e4RAf2NbQiAw5eY8GBkNKJDvbWq4RCq4raXGJFRHn6MwWEKUa5eCyXiPYznV26GAeDaSdAajMRC6bVJF8Nfy9Qf",
  "key12": "2U1zWrMmUAswDn8Vo8bNs7UUbFm19KmFFwLbJxVFAZJnRMmGQ1yCg2idSNqA7fEYQ2BapTJGkvBnVe1pD9bDwkhr",
  "key13": "1z8MunPt3KCyNyKkjKUhXyG5MZgfZPbccn1gLfDPVGaRNfRnkGdAwziJFWWWvNPohRdjFnmdq67snoRBT34eTGY",
  "key14": "5wnfnW2vrNeVnn1nADjBDFR6kzra5SLS5WV6Bi9SZc4CnhrGjNodTJAsbUJLeW1gsNztPm8NUhjqmbeQpoQ2yxsc",
  "key15": "xhVQUL5RLfXiGKWuBSA2WiQdVh1jigfH4RRuNrRZuvUosYSNPzfVqstys2ZUZ5fhc5zBZWMdPZAVSE6rPi1EePb",
  "key16": "csZsN1PthvDo49WhYyznzaZMJWvtZ9nCH1EYhU1dLbfzK13oHhoLcQH8wXkx4G75hkLCLMK8t4NHJydza8evEkj",
  "key17": "3iuvXYQApq5JXJ2myaYVTBGd48xuSdKBGMpaufA8JopBDMBMR3BbTj6fsTtSvTgR39YWNTPpKDBL3tG2pDv9KfLq",
  "key18": "ZMhPV68vDFXGZabRVmPs9GnPMtfK5oq95bti2vgV11zuhzi8yG47duyjNxzWStoqm3kwk1zhEiPsVieq2c8vomF",
  "key19": "46usqFXXQVL37H184kyYhBvFNj1eskWPLHUW37Loq8339n1GPWmeuRRD3mB3C9RF75S9cN4XpRcVx5cae4GeegwA",
  "key20": "N4kFXuAoMgwAv8n5oJHDpnkPYMQitwBz4mfURpptqyLEc7NEdWyFWnMsj3o3SEGPEq2ErN43Fvh6JgMnHzF35ik",
  "key21": "44wBgLQEtpeHnB21Kgt5TL7yrkJM7GsYJTAaEbBDp7RdBQUToGjacB3WaQmnN5XiisZDVUjyCZ8n27r3f7gur4pa",
  "key22": "3AMgzwzXjxbDp8CYfaVD7dBVaB2ovDdgza8izWH7rPknpGtqHuZ8L3MaAcCGoYrYU2Q2JsYrNmQ7sLpiLeq4ZdpD",
  "key23": "3sYg6FZ5XWXTQYErdjUuCdE6jLaEXiu43UkdyiYFkP24bqXBm5EHoozV6GC5JJ2NHRdzCZA6yTGQD1f2Y4CxLxf1",
  "key24": "2sfT3KzzUL3AzrjvuxHYkEJEA53mZnKX5gYMeMKd752BLTWZnFbs9gv81GT61qqdnjSGTVA62K8jMQUDzAvgaFpz",
  "key25": "U4wKpgnMdynvHnNEX1WSDN7dzZ3r2pgV5QrhhCZQ7qTxvrg2jz2Zq3CSYTKmvrkMQw187s8nf6nKHGTAcnSeZpf",
  "key26": "5UXPkTv6LYXZf2GTdyMeRTysoxfH2NCeuGwgUdka9S6bSv8ZFi8ugk2KTKXFybAHnhRqhfB83qVwzfxrmeH6UxNM",
  "key27": "3yewS1qknXtYWESCkBGWQkct6FzSghxq6P2syU5nezwdJN1UArb2XLxZDAZ6UtFLtMzkGW16CxRKy482MDc3rrhE",
  "key28": "2tepQmTwRyX9fFdfQSXCvjzPivp12kd3cbonZtmS3uSpvhQaaikqNXh9MNWZiMwsiJM8AFHZKukC99nJjK2sYChT",
  "key29": "5oC5wcfsa6uFu1WPU9KTBSLPFrkmCZLYz1cco4YmZCBYzNyufzWiR3bttQzymjDsfkKPycYVxbxR1F35y8agTfZh",
  "key30": "4iajLrxkDyNFe4pjWJeEBVsXYXRjS3oPxF24CEZVMckQBBjVWgj1YMqkCbbQrzJkGkMBL4YLQxWXytLrYog61x3P",
  "key31": "4jAXMHS3K5Gd7hgHrRWBB66HN5dX4UhoXfobNTQutxsKARFmeu96A1URHKfb2toUk62bQHLgYVjinLDTw14totVT",
  "key32": "4CfkEL68vVXaXTWdRnYCoGgtEecfMkdpgWy9mWuthEUoHQrdMD9wwqBwY8bK616SwY9GduWpi3qHTsMbFZ18Rj4C",
  "key33": "5aLRHxruayjoiqiydCWFApVGX29JGKVqC41XbNpYp6k6usSnE7pMJNGnLgPuUVdZp7muFq1xpbKEGUgsT9w6jiCk",
  "key34": "3BdHbJwpAzSUp2zLVtzZJXyYHyKXRB1dJemFDx9tSCctdXdmcKtgWrG9iDt9VeNZGPU8faF9UYV5pv4ZdmoqxHy8",
  "key35": "4nB4qHAYc4BS5kxAPtyfFdcsiz64iKso5UQDBpv6jJEfZBLgxD6FzqtsHL4t9v458mcqZNULgFGoA9t3dAiN8PFK",
  "key36": "3hkJeioPP3RBXiCQ865bmshuAZsTHT6Xgd1i97peNVeYJWTZVzDTTTcYgsz9kYsA5UX7FDaLZbY1AYJZ12VWE9LG",
  "key37": "2Bu2ifrSueeTTbZg3wfs6n374K8MVDAd4HxCSj9EmxWT6TogrpJXDFcpDnhJjvvfYZcxV4Y77U5pnuL4Y8586QHK",
  "key38": "XJ9cSjXtNkYtm75biEnrfW9AZk7CaUy7h4YZVm34LRCL4RgS7AsfvjDLKM1ofVqmFUtdMgp7g5mQx3KCCS2DZBv",
  "key39": "57YTKNrpVoX1j2fw7YrBBS4yBqJDpHk72vVVJNriA7oPFeYSibJPtEn2rStqPj8iQzEe2MWVFCGq6wrFAXQL9Ksu",
  "key40": "5N2SK5ZoVA6UJPJ2wNnqZWKUDTBNmRbAJ3HKXFxDjBpAUjwpPUFNJAftVq4YPQGw7DvBMvinVfUEPfZtZccjSmBC",
  "key41": "fiaQ9bNt66HAhdaC5bahn31tkT9RcTyUQHBuo9HaaFwgENyxdGSUHDrc13SvV5qNTpj8QuFqmCdJ6oBR8jmv8Xa",
  "key42": "4hQ4qFaJWzcPH8zcvLLEEnUsPrfSCViegsybBEGCdrLMaUEAiaSv2xmBwQaqVZugzCXstDgG5foXNg7Bmq3yCqLE",
  "key43": "5CLedcLxour4KuMepj7am8eLAgny7DV5BwADJaRe68sy8G6PqUTcpdSJcEvpeg6Rcqoud59DXceUZQUkCKK4243E",
  "key44": "uf2uXcnhcNa4JDAjqSKXWiReRk9QSUrPCacBXJ8eyntM2AiFqtLmyk3v2LSPwkc3DRNJp2rcH16jHyxkDGVxQJX",
  "key45": "K2P9zEHNb8Aw5sohy7Z5eqo5HSweCBB5ZQvg6egrjXmfNVWofVAsRXr5CgnL23aJh3tt45BPRPSdSzRoJ5RALJQ",
  "key46": "2WkkWNnvUT5PA2YSSGgb7igqXYroqoiWQhekB57tBNcQ7ojQhVX1duVGfpkjn8eBZnFHNvnxpiN1oAQFkPZdLKLn",
  "key47": "234S4qWzQ7X56oBzZoXoU88vDT5ZwqxtExYj1jet3SxnyhLbVRfuApERBpiQKs5EHH7pqNLyGZt7GnHHgSy42dzp",
  "key48": "3ms2Gs95gVYhmtmNRk5hyxzyF5kLYt8BjWJF7wrDAqEBt5Bku33pVGr7TQkZYCVVdq1HEfKSwLHfNV74vwP1FCbo"
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
