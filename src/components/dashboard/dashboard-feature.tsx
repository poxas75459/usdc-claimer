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
    "5TuiNp15GVpvKzWzxXP1E867iyF6eos1Tfsd3LhjDaF24XLT4qfkZU1HoU3cf5ehkbCjp2xicXGMA2uts7eijvXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48cWDNLbV2dDCch2P5Qw2aP6tGfawz9hvq1Nu2t3chnpvg6QcfWy2DznYr7ufg6ivkcRSKuCrXcKbDiAb3SLgXgi",
  "key1": "5MgmhCiPym3XiymMJT8Wb8KgZVj4qjkPMPt4pMM8pSfBTj1YqCdJSQMGD9tqFpg7atVrUq9jLtkTMj7QUyw4QmhY",
  "key2": "2mc27id5FDGoF4huaHfHhE64Mu1c6jnoGy6uC4kcoGGLpjfW2vtjshBAT1vBiEZCwwUzH6DgFC1FpT8vCT2t1GCB",
  "key3": "47eZU5cBsaXhHAqwpgrV5tSEJPP8XbdS5yVwHsk2hUjYPHrBHvSQ7iV4Qo3EgyvrFzwVh4z96BdFWPSttjuyUAfu",
  "key4": "3X47LnyJwi5VaXDm2QsaPXHi7gpKnEAk9hNk5jQnxYPRbWAArRbztb1qHFhaKUB1hn5rZk3rxbYCsNtfmb2oxxGg",
  "key5": "45gowUQUknPbWYd7XfgqwwPUbuBCYE2UnNHJ62poCSPfnsHDVLLYbUQuWX6ceCgUxEPA6BmNFY9b2fJXJ7jyMm9N",
  "key6": "3XMRLeZNxboQ7ZT6so8qAJkmvMoszWJztbkuHbGyAThMnr49ENtvK76bxf572r8WkgYEPGrRM9uA1Zy59XePbrkQ",
  "key7": "Khy5moj6tfCC49CJTmG6dk7c9ovhGSETPj7rSdpYoXFSkmUMpX9NZK2n3YkKGKdjiFAJFJQBWekXtcKKGhF3XWq",
  "key8": "3yaE14mtEfJtTvjPJZwxTM6GzPeSoZa8HkRixDjzJQanvbqyiuS7hu775TmhTAudVW9LdqHVu9CCRFuJLkF9G5Yc",
  "key9": "4oe7pQ4V5HRTEwumfNmK9hXw6d7zdsgUEsQfkkzGKj3XVbcyGPC9jdM2T7LJ6CzqoSd4EfYEKicmgCUnKKEzwvUD",
  "key10": "67Zmk8ngAV7mCzCitmHYS89Hb9Eczj5sh4D5g5MruNrLE2C4KiTAhpniQgVZpmmt4iUUeFSDAGBNMtSxDjhqquEa",
  "key11": "3vsb6LBEMs273UfoWtiR83DGyds1GaKgKMEnRK5UgXC5RLsPC2HYJK7WziFXhhf6U5bmzi8v1gaDzH92BNWLVjrJ",
  "key12": "4ABeRzzZABB5zHBx33oAFQ5WyqghxzzQpkk4mxeM8U1forbja4qu8ifhhNkBgdmSRFD44HtryZcMePQxAibS55nb",
  "key13": "3gCecsCE8fuFWhwGAvnfmXbx3f2EJPPtGFrbbWfGiTyqQ415Zuw6Q72HgEh2nGEyAribcmoJesQ9DEvPyexLX8kr",
  "key14": "r1e3skBbLoC9d8LFis6Zoy4KDphwXiTHgxv5FVN398SLrYvxR2NqVXG8XUKpoJgkAPA9MsJxDrnySTAVdssYqQ4",
  "key15": "fQBRwXZmVJN8DifeLBrUPNW3PfqS1LX7GqEszoqhEwMW3R8z1RCYQ2QkH5rhpkWthVKSQ2P1TAhckg3aatYZ6Wc",
  "key16": "44KXysMe4R2bFEvwAX2V1JP4rs4Pm487z7WVz1VgSLpo4HGVS3n9coskbUJq99ASTTptzW3Uyij5Y5EJJPQ543LB",
  "key17": "2TzwtN56rVieSDCvEpwCdPpmLZoysYm8SHBDCFE5QQKHz7pi7Egn8MBMNKQ32pvKcysnMG2AkDuCmViXjJn4Ax3g",
  "key18": "59EzDoY7YfPAaktBNu2mNJemAtXeQvM7mr9T6a8tVx3VLAVbanE8h2mXvQC47VuakcEKoc8m3kFBt72whhMz6rEd",
  "key19": "2MWu9reKvjew1B8FBzg58uY6ryRZChcLnoZ2stzhDnnMSjtAG6BMYxsTN4q3B7Nh5T2dsdyHuW73wykzwtkFz9D1",
  "key20": "61grcVSuB2F8AM7f27vsqiryRjQj1FsPj7X3e5HLhGXbowP7ZEzPA2vtJsR4R877Emzz7i678WNuwmDy3Z96q52i",
  "key21": "4YMiz1jUER1UaK3xZeXKHdNuYisGVYFzu1LXrdkLoa12uSQiacdAxN6jGVwQB2JkNR7hUzL8Vz6nDv6CR1ZRou3D",
  "key22": "5GDTQASdowaCsifTNfUMhWGp58KTAFZ3GjzZQzYQREHPqLcGnPYk4VkmWWycxB36TcXgnVyLw1boQDvuxVeCvsKX",
  "key23": "3BTafC9KMqWq1fTw2NuW8RAUmx8ykHJ1MGur6SKzS5J5Th5sGN3S7XwHxaSz8iUJYXCRbEYYkY96efW79hNCkFcm",
  "key24": "26eL5CwcAJgHTp3fwk6Yh46uz6SYQdQGzZzwF5mRUy4nG4tdJ6PvYwRvpsQpweAKtW8oCkCGKTF64ZvnVHaUXwpN",
  "key25": "33cuVZTA7Vk6AwD4VkgMAJSnDqupqCKq4vH3r8eYccHoKNe3cSWn2Fw6hUxGMbNddQJfWXs8FkaKALbHhfzuTJR3",
  "key26": "5Y5GbPJBmodL8Am62DpPFVa2CvknKwyMqjWV73KdWBRkuWJhW2WbhWPYD73A4s2mHR8RBN9sCdXzHDzbLPsZngk3",
  "key27": "4Aq9P2ZHjQ6a2xta9ewNakopiVAWxtaH1xudmwhAP7iLKkxG7UBe81MGZWCwqP7rTSgeFs9wZu5v976ruWHSWneF",
  "key28": "5vc36iMsEmH1Yo8ddCAsmV972sc1hdHgfN63Dsk2kdUpEWyAPapP1MfcSf81Po8kcpNKxRZQMPXf96f6D5g2v2nX",
  "key29": "3qMwqXKwCZoTtBmJgXxXpZeasTQLZFg4ch4UxB1pte8mqubnazJqBdkKt51fhgCrtgHGroA3W1inNTyg57yxXKmM",
  "key30": "4nCuwNiZKvyVtNCYpFgCkASWYUN6TcbZR7eLG2jPspnhhNJGHNGukfQaR5PMVj79LvocQCzBxiviVMYJU5kj3Hp9",
  "key31": "3cR5BLuT1FkUqL5mEXtXdJW912xVyffRVEunxiBgcP5AMAtrXktFo1ccBm6BRbsKAs5ztJUezBpwgYic2Dmm2JuK",
  "key32": "3fXJo1aA6qwYFpQwsg92BohkDYxgXgxNyxxbqeZq9fhbut7v7ewAefu7uaGuGE8DsCDAsisYZcAhxoZYzGr8mDvt",
  "key33": "Xhp6EHfonRS78bfWhxCvsGN95j29YMBumedpkq2N4Fqy4tb6Uewjy1dU1nSzTmQLhfEnpjmV3PTKSNUpZ2MD2dp",
  "key34": "4J2zLaWTWaK1giqEkC15uLr22bjESNGsHXDSY9FFJfcaojtemSSbwNUu7AnbVRGCLVPtcEpMNS7zTSMQz4o2ubc2",
  "key35": "56K1CKaP46GQnGHmWKScBDfy37dR2EE6miPbBABoAdrKmzsTUiU7FnvizMNEsDPRyNUzr98VppvFzdmyX3uvKfGm",
  "key36": "5b9Venwd17Q6JN48fNgL2uXN54aAY7AgMfH5f6C7NFtZewCpZC9Ubo3YN1GkCmuxLT6hNp1hTzFr7X7rvFqQ7eRZ",
  "key37": "3nSwDJitsHAwKhdHQYPaHjdwM76AP139wzMpN974NffLdBtBTvqp8WPfzHPrUSKVnJqnhBxy3BPJVbhrP1QZweCd",
  "key38": "4PZsThGkohrn8GzkxjkXKqtmtAxWHkBTPpawYw7P1oEQRPRHLJLEiuEqWgV35nkeW2dCRdCmqW6o2U6F2NMqBWRB",
  "key39": "49KwsLePF4r2GnFyHgayN2UD9H4yEJeqSjvGXJBLqZkQbbRx6hewT63N3yhZr4eDaJ3xUPVQt48So34KkLNyZoaP"
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
