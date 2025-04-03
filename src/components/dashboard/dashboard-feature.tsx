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
    "2kUcHmHruVwmo9V1msosH5ssckHzpdQumrjL8DkFzo63hRLTjTbHd85bvQfi9kWKZrykqiuxSF9Qecfy29ZpVqFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxbtzFCNtwvRevgrTamfTY58GQnmojQ3KZmyx1veJ9bBX1yCuiyaZdbWKtztk7JrJzv824UPq45bwwkbX3E8xHN",
  "key1": "4wvef2Rg4bx1cTvQY84Xg9Fx5LnF9VHKxRz9d3FyEe84SboZ7Yjzk8pJK6waRYvLSY6TtH7vcsiFTrDm8sLGi46M",
  "key2": "42VqVKtzqRfuGHdvM2K7DZGDM8yXCFKLaLD6xar2CiVcvghbJbjzM7dDRUDYzfZ8yt1bXah3LsFSRmSDaUJC4es9",
  "key3": "5GFMY6cau1YCFrj9Fv5YZRv1kJLfxXiCqWeGfLKhrZgQVEACnpkZ1R6eLnBTNRWZB4G7Z3tJBn3X2hJeA3d1kUNy",
  "key4": "7TyAJUadKGE6JxxZJ2uGLpps7wWEym9QMdq8hMSHfC7CHRqpSZVJgQJ7VUNE6N9N8jA75x6ZSHwvWL7wnGmBXhT",
  "key5": "2BcGue61sduChuy15W8NY91jw9qQqCPqFiEm26RcRj5xemp8mtdaXtB8TqiPqpMLqAyPwtZVKK4Ldgc3vvNojwn8",
  "key6": "2GzoSxyWTBRhxcqapkwvuLzW3dgho8YXEohHf4bLXL5absqNzWCNfg8HsRforBcoExqmtKzSvKedocoyMrfQriCz",
  "key7": "544uFPwhoR6PdjcHGsXT8FvV4a5LMqkggn39GVTVyWBo8ZKupfvdwikptPXKVHseNDW4AAWTPAr3ZCpXbtobB7HD",
  "key8": "t5A3fF3hzhZs4zA6s6UPxEd6mFhyq7wvSHM5YB6dZk8xpJ3cNPxuCMFVKSXgdughDMFZh1si2fVfzuckPS2pMs2",
  "key9": "5FYC4DNrT4UXF7ujMiZqW1Uc7s55UVgiT7HHHVXkguvrNP5KoSgnMasZDu9k84LN3DtEiBokW6XERb2ANtTnfSst",
  "key10": "2MfckJ4PtZh7BpYnm5UGdZGiJrcn6XkRt2UyrqhbUbWPiQgikCoqTHzXXQHG3YEB67c6hnHgp8oq43SzMkEDp28M",
  "key11": "36J65ntjTk7hYBVMEPm29yiMgjG8HqjARtq9U7B9VNUH829Fn4PGw8AnC7KYCF292HNfxSVFbpUZgZAKELTMKF2s",
  "key12": "3jb7e2xUFD48kcu5Atway8H4m6NiTRpsWDSAVACXTTceAjr6FCJpygb1pv73WpCak21wHrfHbMwNp7ZnTz24cwP5",
  "key13": "43zzhCBNXV4swPWQh5z4nnHnB9kWUjEm9PfJeuwHzkiwaKMoJSsybe1kMs2TrV8EUjYGKDXN9JgPSrLCHAhndohK",
  "key14": "5u84661YRiegrVR1asVuN9U2NWXR24Qu2iYdJ1WmjJcJg2tCtz2pfVmUrgtoqyS6Y6xgXgDMkSuVuRz22Q6MeWYs",
  "key15": "5eEE61cpHmQgKceatNnF9aEAuHxvGCgrK6uyJ5r9rabeP4CWqKnEqf98TLnkMtnuGvQ8sc7W7fkua8guLqLoPgch",
  "key16": "4goNiBAJdLsmPmmNooewUAnCZWGaHGuaDUApg27LzoqojE2jihM81nxVeaF6zGVUcocNsfzgQLx8yUmied6Fj4bW",
  "key17": "4BDZns1rR4queJNvcDBUuFc3LDC75Vf9VT4zEjDn55YkWvmGiJzgE9XZvySycrcaWjS6RofYdKgX5k35QmV3b2ZJ",
  "key18": "C3zfwtCp5QLqPtCnZKnBEFHnNhqBzKSpRcbjCAAY6Vr8fBv14nsFgTq76eRGaZLoiC4VyshfS4duZDVukQZsH6e",
  "key19": "3q9PnDqqGTXZMqjBtxaH5uG6KEDSRPzhwHhrGbGmBbPRZycVcAGJkf31KieqKShTChtz7zENQnmgWcLyAL1oWQ8j",
  "key20": "4EYsAgZCqFhxqWZaeoyoEWTthBWUK17dV1snt2JBbW1VWNaYzS12wNbmSx7WdC6vbYLcfB2mZpcastCXUJZoUE8n",
  "key21": "3Ytv6s1gT8CBjKMnaTherTyvdAA2CxZbioB6LkaPNRuFvLqhczcVVAiRNrJW1KofZEC3mGsNSMyF5XpHtJMmpxKA",
  "key22": "2iun8PZN2xEcWSETTJg1zQMRgc9zF9onDQDSCW7DLwznVxYn32S69MSpsKvBqrm4U1Pkr8Yn6tv6dEAi8ioUBRZr",
  "key23": "dEeixrwE2kmeb6hJfZY5PGF5cM1r6WY6pwfh1q2KXz4jG81DzW2fPE7XBPi4grLtoq8HzEB1uuiDJPfg89iD1rQ",
  "key24": "3snPqxMh6sH3Q1vtGwcL114sAyMmrppqwzqjR8YVHu6bxKVboamX9GbTJCED1WrQR6Bd5rEA35aaC95cZvTf4Tp5",
  "key25": "4AnwJSc5URa2MzeTSTfUymAHcAGzrYeh9fY9nQzAq5SdHczf2neewQazoYb2LVN1h3uh8UMDm3xMi7eUgJV5aGp2",
  "key26": "2sqCBz3fH5dW5yXf4wy2XSEPssR4vRgErjTdLv9uKJsx4jMJUtxs89WLR7v7WHTpHj2r3LAb49khTLwrWfrwUppp",
  "key27": "4huJ2uoT4uAoHvHesmZGCwcF3LVmAxWd9aijg9gj1MysMCTqJdnt6Z42GPuacGy6kr14sDTCcKi6wvLi1SWCtu4R",
  "key28": "xW55ZAHJW5Pnw59LUBMDrxXaVvERgVrhY5na1NnBGg2H2HqxnqEjWdbhKsvzKFWQWqG5vvXkg7SmySe8tbWJH1d",
  "key29": "2P9z8BDopEMkmf5aPs62KWtg4UpjG3en46LDYNV5zHN5tdUUbNWbuAsYvhnuw3mmWajMD7E8gcyvchHX54v43DeK",
  "key30": "4CwQEQfmHxxjLgWB2NJiStTe7VDq5ye2jiL7pR9UfnSPshQ246XQrVmnb78ZiDrFq6RjAaVFbAViDL7sLNy76xoH",
  "key31": "2511KrxHqcj5Cejv8Rewo1JtmcLgYNEogJG2HyEx4fMoi1shH71D9ncEj2csRMbZsFkKYECb9SMzHQoSBm8iHrMh"
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
