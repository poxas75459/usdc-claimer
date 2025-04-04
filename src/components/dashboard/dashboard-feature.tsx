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
    "2U7W3ahPP2ccTNvXmoFx8PNTnBoa1ZW69cMDUhdUWmLhDNZTrFosGSs2XkwsnF7UZ3HKENgtfpbs71p7RZzxnBpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CLGMibePxAV1T5vrcti7T69HuJ6aNr8ZhZWCpxFVqgYsaXRC19dQi9Av17tByDFrcxmssRY9bKqQrFoVBcgyqG",
  "key1": "4bC6MRn1iZ7dMJmeW6BH39TJ8neHuwJE4XiZ9B5xPS3EXdqssbbynfNk5kBbEyvLSWma9ZrbDXrskWapGRK2mZJM",
  "key2": "NaUJSFPDCegVwyYb1LSkyNYXeAtpQkUe5KjXSoQEoXDyPPkchifA6oK9Xt3J7HPBV48ABtZXtfdmtnWF5KW9Q8H",
  "key3": "2ymGRH8youNSNLDSiU48Mr89aAsPsJbyaEJuZVmE7HYxV6cUvjyXDzHwijREveRBRX7NBJwJgmcBKQ7TDZsuytdz",
  "key4": "5AUBqtDWau8TUF6frh146QBpBWKvUmsSQGTRCs5Uz1CHBcbJEPGut3ge7VEyjGUXgWpgwycjZ5fyftvfL76rpxNG",
  "key5": "3HfWghWvCdNQqVQeV8mvSy1aHqMAMiFVA1p6vaPZP2ZWsbDW6Fb1Y9fWqXaJz4QzoUJrsNikwEMvyFLBWuyQRqvd",
  "key6": "4nxsr8P8jmYcqLr4SntW4KetH81HY41wLt4bF818BweR3ntRjyMhixLqXeYR5ZKvy6ENr187CVRZG5wpbwtCMDJu",
  "key7": "5AQsdQKVeskEo3ikbBja3wmLSXmiCKqppwiTBLTkATT71rZsaS3CxHN6uBiBWVQy8Asx7ATCMirb1EBEZRefXWzL",
  "key8": "NHpssb49yntq4kVto9vCGf7sx3bm7arU3Hg4QWmHxv3WH8VfLh1WJMgXjmXn2K9a32j2RuuA7HueB93Ln2uYCJu",
  "key9": "45GcEYb8VxCazaeRPpQC26vCW3F4M8VeW8NZ2wgTCZdQQLoGu5wPCxzZeY4qGspbh8ejnB58xwM2UJmWfqSeFS1h",
  "key10": "3m4aZ3q9GTCZTesNHk4iWeeAA7MHfNbb1JVQN7WgA7vpmmbrWVMfjaDfuU91XWSAeFQ5wYB3YoLN8rGR8JBnw6GV",
  "key11": "59DJjydseikxBhxERtRSVxaEGF2up35xHAAsEiqqwgz2GhEJuR2AfJ9ScsivRva5kv9KBbktSjjm1iUDxmneSab4",
  "key12": "5H2N5iU5HBi1FhJWMV6WCxpQDLvWfajDtUqpEp6E6nzSAR12kLVaUmLKdddFa17RL5CGJLzBN1ZaMp6Wd6pZsybW",
  "key13": "4Rihf3sQkfEEgp8KcCsAZ8rAgqFvFpLbJbRScnmJ8uTdYznryfSHnNrEXrBL525u4hTDhZZz7xy7DK9vR7KaHSD9",
  "key14": "5cTQTAD4YwBmtxuekZgvnYXKNE6672huyuvYTBS4ikeoA5wJAY9ppN8N2TLgFLiHKqKVtiCUjeA9uv4xM9MmiBxV",
  "key15": "2DCwLwoDvnjKHRMCLWSqHbuH1sKqeegFegrcRwfSyjDTqBjmRnk5jrNXmgicZnAtczNMXrKNHS1JpzWxKFrdS2r6",
  "key16": "3Ftcppyc2zSYYJXnSJ6xp1KZaeTwzLGCeZn5tg54m9dwrJgmtpEdb2WnC56HWAniQMNG64h3bEPwRgBdjTRpmVos",
  "key17": "2XpUZmh1LrsB36nM34s73aZ4RN5bmLEZHMpPcyh2e742oTcVzxgLyJFSra59zR1z1sCuBXRgU1c9PJCifqjmFRBV",
  "key18": "59f7wcJhScBwi5tmdsAVDDCN3EyKTvgZMqjGje9TWbQYz7n9XKjnsp2L2g3817XYTcS1nYPC2TRXReJ8ZwKKXiRP",
  "key19": "mBmh5VhqMaKb12bSGrqr5cS68HBetLbTKZuPm47Mt5ZA5Xyep1sGPWHP4o8e2WhDR2m2E2SeMiNmZwmnK2Y9Vfi",
  "key20": "5p4cAXtZ3nzvCUb41n4t1dCNdrWM1KkPuiARxgemtxybz2aC5TMD4sVKmu4r7NkouUDaqDs2fXYmJUqHsP5QgRDo",
  "key21": "5mzyZkX3RurDZ7h8tdpGVALJMjfD4fq6DKQzmpGp15PT8Jq5xC6Y3bSvsPiZNwQT9hNTHMR9R2A3gYMrJzBXKw69",
  "key22": "2QfHxiv8fiq96PomQv95Pu6ZVCH5dqWQY7V99uJB9dtbMTZfKVw5RVirYSVDQizt6dXew2rU9e4RJHQNGM4uwDdZ",
  "key23": "21LV5ekU6YYqp2n8qZg7CNLZMZyJWMAHpDCDiJpcG5qVk6paQ7WM8mfiyMPvBdeRkbbGxGS4kgx8YCMVwSFDuodT",
  "key24": "2ow5LWmT9aGVYSDGQFiYhtGPDv9HxPJ3w2eaGVuVHiFvoLaX8JV8ABcyCEbMFPdPr3o7NPy2AU6y6Gun416vF499",
  "key25": "65zFNSrDa2sHe2J3y3Va6R1HkuGsjvFS7yMEmo2HkUiLto57UzJ82sgrhaCpVTiQwKkRkSGdqgJ2JkcwTv6Dk5gx",
  "key26": "4S6m6GAoeyQT85jWJ95BPqaavkPAaKS25U18eDRm2dfSkmVFR2i6dZfTcVCNdgtmfpX6hHicXHCDDpKjQGUr9YxW",
  "key27": "5CrA4c5Z6jbFgJfAXYU5sDwtRe53QeSFs82eLrZRzYsDT7tURS6e3baP1NsmXyfP4EXGFC5TaDhxGn2XSbPf7e32",
  "key28": "5uAuUMKG9WZ2HSt5uRH5pGXisEx7U26NZr4bASPvW5KugZaEj8UigeZmBjMEzYNN7p2HkX7ootEiotkvD4hjqtGQ",
  "key29": "4vMyeK8zfpNVQsjHQuBfyQkHBTjcgg5zSeCUA6qBsdrto8Kx6vfD2txKwqNbu27qmsXqBSFTZNPJKohikMvrk7P7"
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
