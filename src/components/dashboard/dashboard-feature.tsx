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
    "2Nr1EgYYYA4FogJZxZyYYUEuMA4vDei1LeFdJvPzTr6gAUVRvMGJNQLY3Mie9KB8UpF6LAvrLHtPRndTpGdezRHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jixGuBypJsK83ftxusXbxdQRwWHw91YWXJ5Wce4rb1qmFL2tGC5e85NiT2kuvuz4ofZXCxZGYC6N2NCit8U7eX4",
  "key1": "3xf97aYWfJTGpdeU5ASWNh8cUmD17mdED1pyc3NiXNgP6YSoww6vbwnNdTP9Lf3LVfSVi3719gP8hgD6p9bbzLAC",
  "key2": "5VdYSrsfsbuhmoojvFZ6kSpYanVyhWiXDUiu1TrQbLEE5w5HiKhe18VRGv5GWFi6CEweSSEq9vmr2hCHRGfA3QDL",
  "key3": "2ZH8XeSn7TmgVRpUuEzxsk7GtVHqkMHw26guEuFy6BGfAdWJm53mog3gFKy33411dVBhUpSLiapFxSYFsirx1Mn8",
  "key4": "3EucXZshPXMzqmbDzEKeG2pw8UXJVDZYjNYbpd32pY1CJzs5XX66psDyjjhoVZnU3HX7PpGq6W5iYpihMoJrRrkd",
  "key5": "CW5tM5bmDYeyYnx8rPPJibhZDB6e6vVNdSfwLckX3sbaq6Ri8oR3EQN2ypZEhGoGdsBjy6zE5sNQVnpPEXvjQwJ",
  "key6": "2yCWrJr6jWZ2qhpePUg3LgFNQwbLsdtHDA4mYdFrV3uMPcZau5vhQpvqkkbRPYEthEbZAWDG8ZRzhz2VioxDkUxK",
  "key7": "293XwogqvuiAj8qHYKqnJm2a8gqB1V7sCZaQGJrRM6PvFYbq3oFwErXtqfN1xczJGptNxNz2exEUZ4j98PqUgTqn",
  "key8": "3Skq8kwCDu3NckUur2fKzs9v6sQCtKJEo3L75vFaTPrdRof8w6SsuvJGnhdqzb6aFQFoYGiA5MNdbRxU3oFmEmHn",
  "key9": "4pDF8oDuCKvVByc8xRkSXmVDZs2fubDsS7xYXtGfmL7e2qmTvHvsE3EqMVRgNoFHo34vinjGG1YPWFxjR4U8GYBY",
  "key10": "3zMqA3923yBnpfqb1X2FiHDfztfPyAscATc6u4dXTtdcVN1MvZbTrmhFfiNdYWQGXHUMnt9Hw16FGSaT1pUckxJz",
  "key11": "5Z482RYvbAMMb4jq8QyqjhJpHJbWf6nS9FWzBZnHjyoiJntKdQuSqYp5QhhoeshUJ894wEsK8NF5CJK6kRgpbAii",
  "key12": "YuqQa6jf6fGT52owdHG7DCwdC3LTbEhBfRFtNRm2d2vA1Hy8iJrAbkXQmUpbSD8xsmDdYNFvVs37fDi3VR7KjvY",
  "key13": "3EDuFwpev9PF231JCuVojap4Q9v8qa8mZK6QMZfiYQ7ojVCe49tivJuYd9dhnh97u5pKB6EGmcXFUySbe8ioghHh",
  "key14": "2qCv8U24D6Fe4YMbNx93XemphePuCTP16wws38bodsv5A15upJEs9PgL9X1EpVFKtWGjxNe2BpQzp39ufxg6tLUC",
  "key15": "5KJxhEqTdrbuHwkbygmHGfipm2S4kyK1MzS5dvcfWZaptWq2TAoHgecn1VNfVMGd9dUV6AF7bX3WKT8X78sM5tAj",
  "key16": "3VVuo8pmCtwcRDymUqogvcdKyFRmJCGnsvJzphkNRfiu6uAGGgeJpBYywpHy1CkEq4qks6C9yp9gkMwyH7osg87i",
  "key17": "5umYZTwZEJMBoxpeCwgCTHxXzLkbVpzpDmE8ekNVS12oWQ81ifgReSpdyXCJYtQ234ZEBZrbZRs2iXrExXPRJW7q",
  "key18": "6591kj54sLWWHdJcF21fPDg62ZbNowJBabVqJGNn95D19eThU6dsQz3dcmSqJ8JrDzZi1A7CWDPrruNnZ7Hv87j7",
  "key19": "5xdhu3prX5V9neLp7wJ69rfgr9nNYprpbsvXbpaBYpdwrRkYgWWddPnam2iXuWAFgr43QKYcUSVCL584RJEAWc82",
  "key20": "2GPGCRaEJ5CnWe2v39yKxurFiCdEURYc58fqchXQt9dfU3PxZCL9WJFpGLA1FEbU1nLvPzqyLB2YSZoPLsx4w5gz",
  "key21": "f7z38uKigid7HUntbJ38JeaB9FMtUwNbNsPiLsbQzJMeyS22ZZW4H1SpozT63H2EH5ctD5p1g3iG3r7EYY5KLHa",
  "key22": "4sm1yMU3N2pibooKv4gACsJmMFCnTiAkXyJXscPqRAfqncQqvu8D5e9mf4Usk9NfFpkHFuqYBg7TKT62AT6WzF7b",
  "key23": "5PPDA3rA5H6LEdPMXGaw3P3qzEZy5usp1b9AC1f2jtyw1vvx35BRUeFBMxgjnBWPJVKQfxuqzamftAvDaqQP12Dq",
  "key24": "2zHo6Am4mj7kX2x8z1g4A6af5Rtqabh6kuZTXToS8qahZu1Nfjy2FTVq57CwUnxjR5zz2is1ahQeDeYCcDK8YHqZ",
  "key25": "wQ3jWDHLPeCxAMdwLe4QRhWBX19AUHGrc7ruTvgWL2bpys7oSdpU4xPiZ4D8eBTY3DKepb5ktoXCUYprLanXN8B"
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
