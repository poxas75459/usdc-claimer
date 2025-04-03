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
    "5itki4p5PvrddMLgYqRS8JsG1jjttHz2ZnEUg1nW7jeHAwRkvHjCt4rzJ3k3zF19YsoKVC3TEzZ2EejnroM4Excw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hd88ATwDYdwZsi5MigBPnJWetJ98eKrMY7UcZpP3ikxMFeJEmVbx9jG5HKzqiyRRXV7EbcT75SmWkd41BtsgkE3",
  "key1": "5CF8oPjdyiwrDXaGhTuUioXNnE9rivRjMe36TXcWasjCAhrcdL5HRs6yiHfCnDgKtWCUFa4AnLwPBMbjeAaX8EDh",
  "key2": "2h8uwa4rWjuvLEwpbQs2hQiDMSnfXvWJz4EHm67Xt4MbEwLYEQGhpGZapoYQq3HiVRrioXn7J9zNLjv7Q3T4Penc",
  "key3": "2256cCbgHYBwz4HKDoMhyfsUaqHGwSUMxnCthp1KDr14q67LnYYPtCshUaRA59DF5LkW6b9ERWyT5LiiR7CRx5PD",
  "key4": "4Ttg41p4KU91y6Q474jdg4L9ZEfxMH1TzCSAfBhyCKgtwknrp6mLPMbwJYaABHZW7RQZZpos3Dx4v2vvAz2cXbxo",
  "key5": "45jrgtbRwo7Pu5FYJ71GLyZxZmT2maTxsjJD1v5gYXzrNuX5dkmu9GAR5sBGhNo5bp6Qh6tZdgTy8ULV77Uqfnda",
  "key6": "5JU72X9iD4sBU9NVCboqCiZGWyfajx739ynbtB1gnE7gWeUhnYfa1JF76a3X8Zmow1PNqsnoSSSctY2EXDrCAK3J",
  "key7": "9Dtkgksbjnir8idrisMC8dt54PFHcvdf1MgDjnsbBqtybMbW5HtqHqQXpn8nVY8KjqyUePaiLMGbPrgjUS8yxJi",
  "key8": "4szYoWTGk48bXevFwuZVNdobft7VKt8Zy5Swx62fx7oUeBJMDXwozhXFzNCDfMohqvqMq6qNVGHWt7kZVLFuk9VD",
  "key9": "3CCDWmUCbSe11b4A3YUHWE6rR3b9F77zL14VGUhU9GRggb6Ersvgh3yFUyFdmN8KkUh5wjgncqMySUA74Wi5Tbdu",
  "key10": "4nZtMVNDcuPcj3F6TSGxrsVNXPviYk9zd89EZNTKkd2tDBnPDJUu4RiL4qt9kZgWBiTy8xAPHje6q8TymgyuaS3Q",
  "key11": "4pAwErZZVnsKLYayg33RrJK7NXuJDbJAyGST56prZfGCj5fVbYmSX4Q9Z2ogHHP9baxSgBm49gnk23f6bde44gQi",
  "key12": "SzQGwV19ZXnB8G5xB9eb6dCoEo7ysi4FAox6EDhHQJqcqX2gc7zx5zJMUhNgcdUxa8miNRZgz1y2fyRJ7ntnmDH",
  "key13": "3xnrQoEaeg1WxigFoWr2MtTHf9jyiAEsonbbzgJJ4csKjqwc5yi1efekCSE2Jsi2t1gzML8XnTJo5VuhCkNHFH3J",
  "key14": "2CXqMhEPTrpuJvbLVqu3K3zs7WkjWTjVX5dEvtiRfd5nRbMkbMKZ4i89YrB8rb4BzGz9Kpd1nrGPK9WycpgDiMFR",
  "key15": "5goadeQGbriLSAduZSQrCAtTT9cbHGcdRAQqfQ96yfx1RFoAyGC9LaZS7kdktG6bWKj45fcbHxMmSiCAS8n3mpNk",
  "key16": "5JANzvijQ8X9pxe95f6dUp9cobqzP86WXrnsxNf3rsPw2eu76YkD97oYe7jg2wMGmPEYnAfaCUyyFHKa2kxvKVTR",
  "key17": "4D5B36a3wMwDzSSkcK2uKnhbhGxuXW58Q8BCLcVEDTyytFAgBdtdJjsNAhGYvYQCctfY7g2MkpgUrzVfpo7GhCPX",
  "key18": "vKNaykwCTB85SigRJ2Hvve26WocLBgszRuxnaXYfdp39aU5rnFxHcg4Ha1gNyDiHdTgwJR5YjTgxm3YkQkXcKZr",
  "key19": "2vH6dcJTuTZpKR8cTxsDkPCFjCukUF22Zt186kXueSH1ncLFF98DJKDW1GvCEv25HU9DSBbwU5FiZzRAKe7KxMNB",
  "key20": "3MzUNJgeuQN1m4VUPEPqg6Mt8QoURVSDMXDUQfLViJUDgur7m8EHbffgYXM4ccySsc6EGLnnmUVPp9dVyAWYjt9F",
  "key21": "49t3YWNKoSGY2SMvjcCs3EUXC2DWTsUQKQNgpi1PL89WKTEwN1nPey4qiJjge73XvG5aiVNHrxU5zvyJ9EE4Mf8F",
  "key22": "5K7o97zpv8cP63QAJ1Gc5MpgMyVY7xg4p3Yd3xfAoKkg4QfBdPgvxYCmkcBTCNDwwNxibQwbJd6u9QQDKZ5AhpQn",
  "key23": "4Qs4dE7shswkQbBqaXyhmufVpQK4bxczZXBTPgyqMtbEVEJAErLZDnNMwrc3Dcwer4y1RzdF6JE5SRLYudCio2pM",
  "key24": "zjWV5UbAWLt585737FTd9o1wbBVYensYtZdTE6VVqv59DSiLnXiYCV5nveU5wuuMqjdCe4vSVJM86R7z8Yn2gxL",
  "key25": "YyxzHCDA4dagWPtQLxBNjuYLYpZsGkmp7g1vW7vY28Gbh26puj5GrpJPXEPNXey8JhoWU8BhqHPGNYuE8Ygtq9u",
  "key26": "Dy4PWyu1gkarMPFBGGiGJ5Ct7vC8WSz5pYrtBvdDaRMBAW6Tkdzwjm1Scqhfr38bUGDms1YYdRWqDi1aTLQ2uSm",
  "key27": "5mVsFURZznVDojiRTWDb3q1NTyVq5CLr4QgewioJw2tKvnhrjFLsbbw3pYwRHUrjCAUFzdEeuizqcKtZ7LBFZBzQ",
  "key28": "3WciQ5QjUnVj3bvoe1eHod6VDcyr9i71L1MUCE6XdJ29Zs1cVvUShQyHYWWpS7dFLzinNoLgeP82mXkzSuZ1wekU"
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
