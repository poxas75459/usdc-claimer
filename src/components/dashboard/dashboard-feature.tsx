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
    "2GGUt9JMbWuK8EpWmhcK9yXMSb3MxdAwV69t5vmEp2kMMeChLL4pjhdstBsenmdYpvU4JoZ8xq45z2Z4ZkebMzrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7rW3tErSZAmAMd5a3uT7uRjp9PehnnxnNhLF6iBfMKk3iYHnosUGk4uc9yBFXghP1CYu3dWXVMWpLkRZY6REtd",
  "key1": "4CKoFJ5cv6tmD7269S31WmUa3Pkp4V5Y8MMKyytn7FnQhAq7i8Gwc6ztrCL8gucXLDQ2GMwj6wbk5iXmSPMGFPea",
  "key2": "3JLVP1LBeeCWfehvPdnmmwbX1aeGYA8ivjAqng6QvQGUHDTEYnVTrcGNsTNYyKWtqqdXMBVww3KA7jvhmg4iGs7u",
  "key3": "gj2SXkw8XoFCq5fP8rRJSJKde5HfNpuVzbgaujhumK5VEEBvvRDGZHJghvzRYNNHHWPuegN3YEbkYWJpuRmXYfY",
  "key4": "4xLRJzVJ3WTRWF7NmyZUTYSey4jiWucRN76hihPeo9tUJtjci4EG1agHumeQF7t1M4ks6VKfH6CTh416e9KF6qqn",
  "key5": "rE1J31pBbhRFiYTNdVuK5NfpZNeqj2qbcB2GMFvXrK1MPX3XJezSYEzbcuAW6nkX45jcp6hkfwEdL2ge2Me2sKs",
  "key6": "5pTTEVgmJJcwASVvEFdA2kD365JPoSrs7p9ss7vb9RrZSczYQnncM5X1DZhmgjeFzTrRrMdUwKHLXzW3BfR5sU5b",
  "key7": "2PuU1Nr3fEdrAYLdcsKLtjbFDw4LA1DtfAZDxUpXmd8He77H9AeiNPY9iJ9FWb5DhacrNEG9kHVaCknPzbUoboTY",
  "key8": "4PdfYEAa61J2hG75XB5zywGjFLN4YbttMnfuSiEs94RHZXz6GonEejkmDkvqwc5TKF7Sp4L8WhvzR2zowev49THW",
  "key9": "3H8q3thrFWFpj7tQdFaPCtNgfVrqmARNPdU5HG9Ces4geNSVF9Asaq7f5kbRjjk2WxaC7byG7mpfHM6dKDnMPoLg",
  "key10": "3QeiJgf8dCR2MCxHbrwS5sSYPiJKPVqLnTEm51kAXtUC2yrKPptVMJtpjrmUnFXemoDmYP5YtJyYQ3Heu1UC54c2",
  "key11": "4ZcQdhwWj1JjoMoUT7T4naFd1dQDUWWTpw48MBVtmK7gXwTPfReR8WcHV3PErjP1TgfunV6sLQzhByLHDAfuy5hg",
  "key12": "4qhirpzKD3AZp68hwZBHLwimuJB7ZEC4kQKDsxqs5UAGRTK2xCtEMrTAKZ36jQU2seNfaubkeLzkHAZXJv5zkLwg",
  "key13": "4aMqTho71zvyGLv1Mp7hQvP32pKmng7mVHY7jBvj7iCoUQDpvAaXBxeHNKbmbRRneWB99z6LFGhsJmZecF1nEkCL",
  "key14": "43M9DQxhdb29eaJE58f8BBgBRz3WNXuoEGjsWnm3hDUScnfzkwviDtKGEEpUqyHbET3fuA6hUdrkMXPvRBfNyDHc",
  "key15": "5Brmq3mTnUYafzEP7h9m67H12G85fx5irjutu25iG9dpNcupq9NGwzyEh3uYgz2DAijAhBb46PyGDMk9S8cgDV2R",
  "key16": "22STUxEPM7dXQuBmhdrbTU5QbUmxgkrn7zcpiPYa3KSsJe5fBSNW4vKrg4YB37BxohDEneu87y67wu72H56tQWhL",
  "key17": "1ZrYfZ55Ct9k3m4BakicwSqQZXSRk6B8qC5krM3R44NFmAvFtSUiNPS38iH5bcpEQtFw8P1gkW5Bc9TNDpVS9Mu",
  "key18": "3ZderSkaVfuUjPx2gDVvbRyELQUW9GJgBzESqTZ5Qxr2HhA6pMp5HeajVVkVqEXHHeJvAMQU7XxakE3XRHBC1mjG",
  "key19": "4kpgHrBpT5z9Dz84x9Nf8zCJ8TKbtg18k1aARLgGD3yPv3RCUN2hfJTGensL1XHQzQcf8siZvMJgQXdLfgbr18zv",
  "key20": "52iqvnCrTmPEK3tnAiPBqfk9KhfaUYsQ4ngfuY4h1uBd5G6Rf8N88ewkr6VXeXNGAwzqgXZhy7g4a3E2koATV2Bb",
  "key21": "48g9SBt11a4XMXqxHV1GCkS4fqy8x3nahm5YdBhuDkn3b2cj1ExGkaoddmU6mhMavUAwvgp3m7essse3i7yejhno",
  "key22": "5X93sfvqninXobKdfH8Pqe5mL2e6PTbsWvCUjKuv71CQDcvKqfeBUcoLpuxhTTcxVkdw3JRLvMxmFn3Atqht6gRB",
  "key23": "2zKSwLzjh4BuF3FrLMdPg2KfZsXp6R2g33HHKzFPHD23H48bnghY7PbmfV48j7UP71YJLrEkQn95CV8LL9EvFY2m",
  "key24": "1wWgptK2yfLTav5cHBrEX7EWNm8mJw9JMan6pDt6HrBcyTW9CrPddYvoMXrd6uHXNG14Ap7ayuZ84mire5hewPw",
  "key25": "ZhHa9skSktvomGfUfDBj5uvSscNzajtN7J5VXB8Mc1thsuLzDiqe56BNaH6XbXqatAVPf2cCornTamCzw8ob5ud"
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
