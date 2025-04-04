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
    "21fZPSFetm7qMNBuAGMqJ3jM11dDhqAwNbJYBmQenjFAo5y3FgZ6ZqezhavrCubxW2VTHowd4hwX7quFzTLYPMNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ChdpQJa4m2wvKWt6qGp2PUXmnpXZ5ihx6JmyXYJMBrrZ4yPdoKu4KtJSFMdg94wg79zCF79vpdQxXVArkwvx711",
  "key1": "5NPtdi4nq85Z1Djhq4DuZUuXRCVrPyzWH3c3CD7MqKRYV4SJC88BwKhApMSyQ4uCNVe6sUAwhuZW8N3n7evCY9Q4",
  "key2": "4EhueRjgMMYVv6bJM9Bnc7gXm1AEk191msfdGrEBd1fimrVaVXSsbCjvGKayddadHNviYeexo5qF3BJoaWQNEbeQ",
  "key3": "3iqiQFemTrqQsgRrMxZEhD8R1yhwbvaM2nChmG52tipeM8iVTS5s8XiXoc15RA3FeZ4xr5J8WhDAd12RJaY6FHJb",
  "key4": "2sDBWsGNVy4yC9h3ezBUQFqeFRrkiQHA2bLEUrZcJYG5JwipUdeK9VAyPHddmhWQGPnYa3ADiDGZzFm4wiXdG2bV",
  "key5": "3naXYSYg5xL7zxsSM8gL27fRGzB4Ngo85uKZKaMEUF59n14hJZQ9FJUNQshbBztE7wzgFhDopzsQeJXKwNMQkdwo",
  "key6": "9d8MYpAHYsHoUJNoEADXWnVxFbbt2ZoajvCDZWDATwKjdsvNk69T4NqmRJW7jqhXKWtPS9NDixdmvKaNqmp9xbY",
  "key7": "5fF1Ndo3Nk8WdH212KJjrn4iAJ8hUwtZabNqMtPtg9qrR1P9ywXJSBp1vqjMGUX7sd1UCGmBZJDhx9kJ7MWdAxyV",
  "key8": "2UXmkM18CLXFpd1TkoSBmHceLJGSfSi7n2jv5quVF6AjUHQMjFAgt6qyAeaSSb2Q29oWTncjxfin6rytFSdqJejj",
  "key9": "2tB8HqvQDcjb2qpbGnHmreBUSCkq9dtYotAJgHwx91RB9JFULjJhE66RCeaRhspQ1vRaj1TVmMfn3SHTMcLTepLe",
  "key10": "2mVSqtaVMuFesx7RpUqZ5QdfEWpjG4nTefKwfHh81wm9HDPLDE9m7ELwhZsBjJ9rw6DGL1hicWc1Nty9GDwrgRiX",
  "key11": "3hiaR4SmDKJqqGwzEbMx1rkVyyWNcVtJsCT7zJh1X89CNUjC29XWiM5njf3UZQwPbNRJmsDxfkjyBRS3twcT7aM3",
  "key12": "5ZCVdvUvtC4LDDozhsGBY4AdJZusGwRmEMVkLTz8ktSufUPupwhQ1qm1PDfxrSv7uqJ3UjXPdKSRHpjS7EmSp2YJ",
  "key13": "4NsNxiuDEcpLGjvDky98xHiXGtVToCZ9RV7aV33KPK26jBZLzrbKqzqrSyU7xvHkfyYcXg6WwxzdAQZuuzH5bmqm",
  "key14": "5FZgkQofwNKirDypxVj8vHHJj8gjz9Y8C81ZZ1qg2wTLB9CGwA4ixKRKz3odRBHbY4xB9cwwGr8M9Q5rJPz96HB",
  "key15": "5N8tqjRvfeHkfQNXG4MmEHBEqA9a1PAiVHPbNQwPmjz7ubB8dNJ9ZuCg88df8gjJVFCEwW1oGfDAt9iRPfBfsCFE",
  "key16": "3ddwmuduDHBnifuANkuZ5vCKVET4kh8qGx8EqNDYcwE9bMbZ4vpbkQU6pegPhTEyUjnjeZTgcQfT5hnZw372NCqn",
  "key17": "inCVZBCfrpHF3rk3kwhJrsoAxXnoX15APt7h22fcwhVzAFy1MXE9yNAsN7Sp43ubsFjSrCc3aySizmGEwMJjR6j",
  "key18": "58M3B5uPrtRH6rZcreWkcPxR94pAoh3QnEj53BgaLJX5cbvWmgg7VL1HMhcR3yXDoHNZcbmyFGGn4ZV4PGqt9meM",
  "key19": "4XWnJQbZ3VUfGRx3EvYVaef7E3X6V11Kr4RZ838gQzKXHpNyzaKd2BSTV6ZJJEikKfdZ7pL6D5cWHPMMCEUttzJa",
  "key20": "4P53wbtin7rSJTj3ZR5Dt9PRMYM4uZy5qpFN4ceEEvNmzggSov6ZHKbXzA1iKFXdz5rMo3p1htuTDraWauZBu96y",
  "key21": "2xsZJT7dfU8DC1SVEhKCtQzwcNNR7JYBtwNA32LhqZxRagrinczkeXH4TKGchAghkgc22M5BjnSweJPbEnu5DUuv",
  "key22": "5gfSam1aUjsTVZULYxwLtPHDscrZzb1KVu5TkBG9oPygA9Wnde9g7yyuSeAT3cGCe4JTPKoxprC3wyzLP7jsEV4z",
  "key23": "4yTyqAu7w6w3M7GoVadjEyepbcbdYTMB9goJ2qF972ABdUGrBHiecBCQuBHL5drtVWbZYcFYpRuBQeyvWfNFEWAy",
  "key24": "4s6bCBMtU4n1Y5DLXgxFLPiTsHMxJFDSmVwmcWNxQuC6sMYFAEt4M45SQU1FfYcn7x4sUMpr8iPePq26QTESAZ2q",
  "key25": "4Hs1LkTTpmtMidTNLLr4Lgq1izpi1yLppsGtd88c74cbBHMS5kkwRExGHTsAokWUu8bQKsCPT5yH8yMSG8C19PNx",
  "key26": "65DZutyAaVN1AccSpAcMcT7biWzXfLHN8pegEd2eGam8e45hDJFKj7dPH3V8QmsKZaFt3WwnM6voaYRwZZWx15GF",
  "key27": "57hPoXqdV2xBh1cjmQCyvWDzLs8HL5wR5rfXbX5cJhngjFDojqrvkGBmc8DY1T4RGK5fyGExXTCpRc2Fv7n4UWw",
  "key28": "5cvyWMmF6oB93sNEP1pQxRa1VYaVe3z9ULpde53TmrfyLgCYtiysgLGnNsRtnWc28dKYroNsHPitF8JtbNFWbiJM",
  "key29": "53GpSWXoBRve5VF37p6wPFfLEpBbxXSTA2BDFG4mJ95MVaj2fLawaM7NpT6fA2MjWWvgqWiEKNLoa9xxre6zS7rX",
  "key30": "2jSckHQApmQmPZBMgDRYMyR6jBEDzqkCFekq4BJ9fY3RHNoeWVyRBUnMoJmyvj7GQ8rQyZWnBaRe7fwxxgbgnMyj",
  "key31": "4Eb4FZ49U3XdbfkkfBTy1cbSH6uiFNnxDEdazPd6fvK99kSrsMtxMkpSVYuQKZT3LRdEiuKkZ2P79dCw22eDsszG",
  "key32": "3iyWYFSNTV8UTJVQuVg6CYXbT9f95rGAQU1QLHBizCUaXSZc7BY7gcWxP38zBhqgcQ18fGUCMKdGHMAT4qr4TCcu",
  "key33": "Vstn91mPwgwpXsdmbzU8AECWXbDGDKUGAXErgUasn7p2LZraz6u7F6ktgAurErEVWiojdbVuB32HfhXVZjunvX1",
  "key34": "AuCevhUniGDcmo2NxGb55rAbrZVRxiwGVQwSZxCKgGmBnWS7RdpD9MkuxLDKzZKwTKD3FQDnc9pfV3kV3wyN8oQ",
  "key35": "2sGvqVTDNa2ukvj6sqBrBjyG2YbrKNEn85rN54yYp1YGR9gcw16UBHcApqokT9vUAAbKErdV4ihDHELH96XBf3Aj",
  "key36": "2weSBegbwu612TLqWeM8aZrcBc83FZmcXCiTTTS4DedmApPkvTnv6SqDZ4EfYkDYPQhy1VtzQLArrrAzEG4VScyr",
  "key37": "zJ1FsXGLkQB6zeJ2qPjZWfYxiK8zXB7iBtLxDihHShJNPvkSXZyieXeEyZorUSQaQCRzLMr5c4SZu1mV5AxBqAB",
  "key38": "3xW31ossjrPb6pKfBTTHsDU6cAkuY6zeB8UUwvNt6MRwRuJGMQwyXeddcHGK6JasHmvXJfdzmNULor15JkKYWC6y",
  "key39": "3CHNDfy4TVXE9oJfK9wziJXNExJGdVg7iknyopykH68L4cVCtF6MJYRaXLBMyRidUHEHnTTvDSQSJhgAjLbzHz3F",
  "key40": "2re3icLDDDbWrJ6n6s3mRCTRTzW85wgeQRD5grp9JbiFju2GDk28zBwSikvMKSSXc7gY3TWknjpZhuLKZMaDk76D",
  "key41": "4845mn1TFod1PW9UFSvVELrMtJN3J6u1ujUXHYwtFTFA932yzi7XTKDigcw2tm8DxBKefj22Upq68xmQQupwGAYx",
  "key42": "63wyWEY5tJfef2ATBF9PGp3n5rY5NzSy5YzMeV2NCLuJZedCY7kK543dVM4P398XFrPnXGs7fpA3rV3Tqzz2nREp",
  "key43": "5JgZMyXRmipjEHb9JHsmXj5gnKQv8WVfU2QkDSb824GsqKVgAUtuEJ6eU63Th1zBBVAUADC3MpNbNRDk11wHLD4s",
  "key44": "29ZsZM9xyCvdqWywzeQ1246ZqS4t42iFHA2LfKCfC27uzqnHFR1LzdYsAsUz69FHsK3PMXoUMB3EDfQgfhfaEhRv"
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
