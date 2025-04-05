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
    "UG1ikj4xU7gW5BPpvdTZDpJPVuskLSSveeCCEZHvkTMph27fs4xTLmQkNVjgv9toFMvo163mRp7dvLtcMxzMUnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsHT95iXdhKDje4XCiWbK5nQ64MnTd6gELsESjJGPZwpbumanxZER9ih3yha13C5DVAdKeCsGLQD9t5Dn19JCMa",
  "key1": "4Aca9fRMgZJigFzXHfFBGEtjqJb7SiQekyzp8uTspUZs2AycJsLHZpeRmwCL5RbM2H5zMGnaZcLkLKD4bNMQAU4s",
  "key2": "3NLwnoRecNCbnHAc3FZNjTnwoMS93DPDkyNNpRDEzvFf9DWLfPwpQjb1ptCqnH44ofrr56XKMvSWtDiKHLQ34ncq",
  "key3": "4o6JctJgxaZ2GoQ8LYhSkb3Bj7tPjvxj94EytZn37w6yPoHpxgnETzrfj1C6jB8JcAowS8JpMa1gf76G577bMkzi",
  "key4": "EPGSdUypGJXvYiKPvajR8BPtGwC6JCNkvhAhQd2e4Fxz88n8zaBBjBJNj7xqMSkdtFTcqvTUe9BPN1Hmd7KHhJM",
  "key5": "MMw4v56zWJtsFYJaW3mRdyyZw57FsoMdMkD8CoWdgTAove1oopnctYXCkbcqwLybTdUSUwwBNKYDgLPw3xY44Pd",
  "key6": "zG2Y3QMkFPP5vtgBNNoWfSN7DYrBaqWUSL3Fs7LMYPZayyb674bYAdqR6V3quCm9azN68vRPjkioAsePzYSpneA",
  "key7": "4LvhgxdRd14Mrr3atXT7x7xVrwGncC4wFZGfwgKdai4Aw6gEnZVvh4bwSD5KzvgGGn6ujfTmQcnrsVD7tRzxtGbf",
  "key8": "5Pur9Db5yQUkAxAfVrHMCVAXgT3U5AFxXThbGVvrNzLHCpScLsjtAqVmqThGL18LcgotxJ18pvZuqcLr3hCzbGgN",
  "key9": "384JUXS89bwkM4JEHeT7cLHuErf8yW1utBdwQZGqxrM6Pvun7ZedU5BfrBtkyEUxL93Q1RiUX9cnBNjuucdvZVgV",
  "key10": "2niKS7X9XAaZr2gSJAjHU6LiveB25sXcRnkNAm65pUKa2StwTWdwmBcYnGquz3aP4PJ9s199v1Ajg1Td5Hx4V7b8",
  "key11": "Cwkczy78Lnt54vc5uFCCCuhnngerG3ndQjUkHc2bBCSSFEzzrQFHQ9FB5XJXVTBfdc1cYj3RxdX1jHE2iQ4Dv5b",
  "key12": "3oSPnQg9Z1DsekkA5E6DTDiFezVmEhn5wotZNLa1wmY7WgJHDE1MrgzXhTXnzvXWXNShJbdKrniZWpiUrt7gtXWd",
  "key13": "a3VMLhtJKDFysjYN4ysCCF8RtjCXGQjinbVFV7peTFyhXAWNsUodXKJpmsVuQttK1oXWPtUL6vTrzMjney6w2TF",
  "key14": "3NMn7f3LbUGYAdmuf3HVrkQz1VzfJcg9CokaUQMyE1m9yxhcSBAvVAK8BZmnKZTxX3DKAkWE1eSoUDg6vmbbsoyn",
  "key15": "5RcVR89ZRWH7aiGCbdtJEM6NoHCMy6GCkpVNm5bJBBYtgxhNCkBP4WRSv34L2oP7UqCCUANSqNfDmNW4eTtcAt26",
  "key16": "5eHcoKSKJy8S3ns933orEj2gwWZ8tPZDgxfW2W86z94jz4mn2poC3BP8RXioPs5tDCKGNzjY3aBdepzNmWkN9iQJ",
  "key17": "5Dp3pmQtrkMPSkw8p2dyftVTWyzN7GUyrN9oKwJdBYLwoHdLsM4Qvp4doySK5VjhZHzmqzbyiPKurD8r6ZVNVFmo",
  "key18": "4K7nXh5JmayTk5X66jG2Dy98SvBDkhbbYH5fjn6D8Bo1wJQLWsxEoi1xREBXS52kQpLsavda4vvgSDa5x2XETpsX",
  "key19": "brGucAMdDWTSFm2cvxZ6DzXsqrLM9dUGeaDJFzb4zSFP6TwD9jcURAZXTfpWGmR8KXdgGo9Lfa46M56TkMy187G",
  "key20": "54EMPGA4MezpDJf6ySL3t1LksbDeveZX61iHfVDCq2HWt2VjeiNDA1F9jSCfeTxmXTvZ8RbE6qrGMmbDRopLqMnf",
  "key21": "FNpCyA5z1BBZHXGEt1a3TRrxFYFTaXjjsm1PiBLyiUTByb1cMgLauHKU4XvNSy3RGt5JstRrQCfnahXfS8hxuzo",
  "key22": "2XPwDJ83x385XXwtZEQgULY2e6SytMd9H6EHaMxX8dWVpcv1PpDsH5zzoZjj6LZ6b48yHsi2jf55JeN6WZoPCeJW",
  "key23": "2vKsk3vdi5aLC3HQ6JiRpDfP5A9Lytu9HqCZXum2nqH4xCJ3uTH4XitB49Tq3NELb37wZo9ztFzGxzPGx4etj4y2",
  "key24": "3k2kG8a5uuui5B8ijtuXwfZN3v83QR4FVArri6hYRJsbEhCEpPx5dD8oSayWFNMsL1uMhByeBvk9uzV1pndWh4Tw",
  "key25": "3uZtGZxW7VrsBdSfg1vJuaT88bXMJvEkB6cCJGP5fToTiq5BnPHSysLE5v2CL9EW2mr43qWKdx9A96i9kZT1yxNn"
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
