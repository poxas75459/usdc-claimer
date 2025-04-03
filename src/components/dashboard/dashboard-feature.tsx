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
    "2d8pioG8UMR4pu9zgz2wzY81ABQztKNvM6YD3hpDqzZVFGHnTtUKzFE58cJdxpkQRdk31ayWJ9RUihvyxDKNYQ57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bY4kmeN2MzwMe8EAJ5wuEyGqfkfM9wKaXvYZukN6b4hx5YHZTwrUaiiRSgdkXrrDxbgAHjKgUT91XiqbgM8h1i5",
  "key1": "3KytSv426zUdc7w2ejYmwWp1bJ7DhspS4rPzdvgMj2LtDeQLTxwCFk9RXtrGEXjE3ZRYASU37DkDR6FoKFRMXULk",
  "key2": "55Cw4qCpwFYPc1D8P9pkYnjSAmvDmiptmj14q8M1nTaExxST5EfhmRmBfYrtGhJXXbiwFgWi3xmkcTTScWEwuumD",
  "key3": "4C1HYGeqQw4BqvVsfAKG9ZU2Hjno5qqWkYMV1VT6nEA6zqP8wT6KYPhpf7YZRAnBS8SuEoobP8BFiCGruzS8cTvX",
  "key4": "9Nx1LN1aF5VLQbLfv2CD2LoXycpfHLWiLwFVLfA3D3oTzLDosyDjadFywtCRk9qFD69D7b8jPgMP1EJh5a2p1nT",
  "key5": "2pRjcoGUgazb8x3RsoBVwjD5EaEX41VPQeZAhQFYBEDyCYFZpWWB4r6iLggqYHtPASspcK1ASdZAxKfZzJWPD1nk",
  "key6": "3rebcom89xHMJkrdGS2h1Gt8LnzDrdrQBLdGLgY1Z15B3CyB5HaPp2QtqifzAtPM5pkjeXpdXvAoareC93Gu8AN9",
  "key7": "5mVgKNiVXjMpKfHtjZk1XgAfm8eHMsyFDqcCR8YV7dq2GBdpKdNCYkmyvmztjxZ3zmCZiTWMMa3tn3hgp2uFS3yF",
  "key8": "3RbrGsrRpvCiaHqBrsMpmpPGr7GhPQnQKFnV1B7Y73wRKEnUm6fHJ6RL4DFmNAjZXfdDd1XzWcnCs9p6XDixgSsh",
  "key9": "3dnNSmGQcu5DYoH1Vau1w4hc65Fhk68vf9TxXkcFqRX4n4K8fwDeBP7L3pcArJ3Ni6pkf3fNkrf25hTdzmePFn7a",
  "key10": "3tustFm7CA9Mp5EawBjBhnuzsnqvwr9Rs7PJdgA6xBvLAbvuYFxtWwjJ7ufzhuZCow14SBPnXTGU7ihuKkxBr89s",
  "key11": "2KB3KTrsPCAiPiCnVkyXRWfg917ztB2rtBxqd4saoRNo14CKqvcxomhM2NbsnAh5rrai8B2EBTHVzDMD4PwEFjRv",
  "key12": "3RkxgdH6W2dR6Ufs5ntqQBZCyqjY8sCywCbxUsFoCyKkb3KpTzjm6zK5Gq1LzWNywsBEjspFmyNmE9iGEREGv1dY",
  "key13": "2LAx7ua4CQkeQcHYo8F1JA8R2xXp5R5KYMv5a8d97HeJ7ydKXxq5XAru21eY4BxRS8b2SrHfrkJjc4FFR1Kdf9n",
  "key14": "5qhFdxjaXCqCd8Jmp2v9iapAHXMfrzAy6YYvZ3fLAHJY9ABPvMqbKSSiaohZtY8dFT71wTMLWpDESqnCBNrN7VNP",
  "key15": "5e5r2LS8BxMNjcDKq2awSqa82sFLw3NizexiGxbtNsYDfrA8vwmV6PNMmEMqoLF6fVqERXjrjnAPKfyuvsUBBbrg",
  "key16": "3xJtcLhGJUYgAATcCgp242iDCZgBsN5G5LtSc8o2rrJ5iF9rvqF3neXcYDjVPjsVoDJF3hN3f6KRo8iTpY9oB7c3",
  "key17": "2teZgoXnU6XMRjhxoaw3pY2zRApM3By1odLbGNyyi1e3MJp7ygTVr9ZSULGNdGfpSKRmaC1hCTvSsRHi9QSFJWXA",
  "key18": "PdUpkkmbvMoXwHd1gcRTfXquHsgx1ZU3QrziwsQiPrHMdFiZo6m31w4QsGX5Muyka8LYpZ3Xysns8g2qkdop8Zj",
  "key19": "5Vq4Uhhij5BsRZXyuFp8sgeSx5i2asU6L1CJbmPWrcUDyU8voeax6D9ZQFuwqw3RRw71SyK9AaeCoCjC4HdvqM97",
  "key20": "66jQcp4EfPxkKnhm4gyr592m4AVbf5mKBdtj63YNNgkFDrEAwjV7Aofr6Cm3xRy5PYRsfcptrvkNsR2GnKfL88P2",
  "key21": "2B5hDSfw6YnBeupS2JnkU2VAihdRQEqCXAWcgoNQSAzJqpbLDuySJH46c27PdjMk411dhqqje7gn5QMBNQnh5C2n",
  "key22": "2xWFagXDumnkEChXju4mWLobnjJVPCEeo6SgXjLeveqnAF7hssFCza5aQQxKX8LiYpfgBoru55G3D8BDfjRtQSUx",
  "key23": "2iGx1Ls8ZAaPohG2ZvZi6Ca6a4P4hZ2a3Bw8joPAAkyeJqnfoXXDmgHawWre9yB4eofFtwQqa4bxgz8iEuv9grxK",
  "key24": "2myyvZpxcuYxWJXz9DB4K5kq1ZHt34fpP2tUg4FQKsA7eAcGuzNUchvmE8XXzKLXwvUQYEhedREdJ7p2EqNqjzVv",
  "key25": "2ZRWkkFtKyEUSNCMMtrCGbxztj6zswc6Q5ddF3NyLKq53TDKRqFkipRNZNa3QiR7LV8PyXH67BtxNU3yDB5yht55",
  "key26": "367c74f1qLmmE2aZq4jKETz1ESoYq7tYTzhJ7eq9ULxCknfjbzsPshA6CtdE9CWAyaE8oJ4XSrHk6hV4gT8Fx3t3",
  "key27": "3ovGJ2xKTrsRdnnaRP9QBYXhVnV11h7ArZPPTKcFWt85iTVRRb3u7kaUEAKFjcgceFW7yAWaYMXf66gAriAkYLSD",
  "key28": "5aBdyMdYVDFjDgyZQf8G9n1dNiM7WziVLjo4guBxHqeekr9b7Fz1w9GrszBjNepwi21hNjxUAZVPKti1DufQCDQ8"
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
