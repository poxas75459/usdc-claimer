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
    "4PVuhVxirdKmLVSEWrQkV62NTrqUYADXhNGUPftPAZiUDfsp4UFBZ2y4JRoPvhD3dUBY9cWCm5bJihh6KmTg8ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2FLbt7YKez8oexddRVfjJKvxHovvV5gTdjB5FcBjr9FJFkuiztv1vvSr3GG7AteJvUAnRwQx2wZD2LdQJubL95",
  "key1": "2KqWcVzJMTshQrN11ij2UrvgyDvSyaxkv1taenUnSkj1xeV5z6W7qwznMvhTcYVEmsTgEurvdzgKf3r2BGrf3hLi",
  "key2": "2aP2rS1QxfFB3kD8DicG6rrCb5ZVyS6HuCvNcd6nmAkPJTH6YL7sGhMp7HkJ9D918BNDyGm7aVhR5TVNhf3odEY",
  "key3": "4oohcJgn3x9jZDHSGgYWyoQiJyXsAq6nRU7fJtETMqZenTAPVo8dmDM1K7TQdTqfUiShqsSX41GJHBzpJaMXid55",
  "key4": "2i1fqSQhVMyWzwW9DURNTEXL2jb743NiBg7TGyjmKuJzs3PBZYEh6ciNC6zh9Kgg6cGTA1FpEXGuQTQw6VwUfHT8",
  "key5": "Qdc4J1bRNY4inPcFdoMxc6wEccXiS5sUvq7PwW4CVTp1t5xBGBrvpGTpzmc9mwGsvqRAu7ewVJZkDKGM6U5n17L",
  "key6": "2mK6EiahAjpFrArt2uPd7KTGufWuvJPq12dQWfVreS44hcNL6L9Thucc1MR4utxBkHutX2D9Wm3kRbkToBN1ZixN",
  "key7": "5WWPQcSfKpVisp8Ct9rxqjN7LJ1wxrWQUNsS8FGzSod5SLA8Mc8Y2xJhzEjzkV9AsihBtxwQ6Pv9aMrNDxVmHwG2",
  "key8": "5dpjkhxzj5Uibjm4jwFoU7BmBXfXiTUnhhDcPvLRasvUoswUBYNGRWkruLtLg5wNZKFYNbPa3vTeUzgLvwCw27xJ",
  "key9": "d7AQ29wvySQK1hr4PMn7QJZBVV379i6TQMgsM4wQd7ioGRfCMUkBE4vBdSiSXkRvj2QFpN26MNE3NDGsh4ryecP",
  "key10": "3bgE75To2iES79Q6ex854hKwjKr3y1xqe1RnyvixPhhMfnpAjTpCpvueR2p47Uggmv5BaiqzDgLGb522dASgQvC2",
  "key11": "4F9ieAJUvUtbiou3KuAso8PmboJHYX7Aj6rS72agFXxh7hZtim4zNZg4V9XdZy6RCtQSBNyQm6sAdH9tVA26FA86",
  "key12": "2NJahXGUer974Xf6irya5qMbeSDHSS1LrS5qeyH2vxcPEPiZ4X14fCKxnHH2RdWQYQsbLtA3NHgoxhxbRExUyodH",
  "key13": "4XFg9C4tyGF2z3giFgfvecA5vwudKi1TwRLeqhCf4c65g5ZTUN8vHRPyr1x6y9vrdH55gqAQLjJ1yjjdEFDJTDGr",
  "key14": "38TkDisDpunXKXWLe2SCRi9cn5bPSNduMmWufXVRLTtFj4QCQczmBLs9xdHqqU2TppiNWEYoS3SX53SRE9E25erz",
  "key15": "59HixMPxjBRnujJFm9net9TBELrgz6AzRaEXG7E139RxTkQkpgDpyNTxARz2NE7F77ieHyTnS4SJ3aXuPL52QiGJ",
  "key16": "4H38NRTMreUKeaRzGFA949b41f62SuGVnvknN3ZRHJcQaxZzCFmMEwSU2PFysq1V3EQf4xn4STpQaR7Ym9C71va3",
  "key17": "YyJomzS9yGEcvvzb75pq85M7Xmhtj86sxCdLnwkUC7bU3SyN19BewphJZ8jSs14RR71Z5Vu5S67qyZeBPriD8eS",
  "key18": "2iuw76xezW6gmb6bQFuACnpYcmJa75bVcdiUpY6HnbE44oETVXiV2u4CUz5xwoVUX71DAGnrzL72HjwtiXqMw2vq",
  "key19": "5HMgZ6ebhCwVo4kKcxPJm2AFHgH8hCWPDES6gwjJb56j81PtVaM8J6J2vFhgYy8ENjGkEUaFpGipBbDLJ11EBaGo",
  "key20": "3KdxrXA5NXmWaTERqTNDEDRCbFedcD1hCaE2J1rZT6pScrBebSjTrn7dy2UoHdrRJ5Q4tahh1zq2F254aVop27o",
  "key21": "5Wxm1ugC3mXCvFVtv5hY9wog6RxqRqAWp8XaxPjSdbNLHTDYhHjbLjGVBfaJDPe56r4P8Jtn5bPGs72aGBzhyfii",
  "key22": "FNKzaeEP6aGMV9n7BtqeLUyzeKNHxsGAS7RoC2cNqweoFc9Lb19oGAtPQ8Q9nWe5uh81tkyHV2FTdNvnqvcDwsh",
  "key23": "3x3aTKBCCUzMMkLRC4RinaPtDHeQnCKFuKXgaaX45QLjecLxrmWJErsRuyzGPn9eCQ3EJNCuuLxQoBBPDEFs5CTD",
  "key24": "3DFNE1ewbKQtd1Y8hMPxng3WUTtKHrx35P14UFNs34h6CALWZrXF2tRZFTn6MAiNRrshNJLLBET12dEkLiLktEGA",
  "key25": "4FgPG5fy4umqRuaCBbVPqUxQ15hTPXq9gzudMfVqPXEJUYuKeestXdsvnQ8VK5j3KRZv8HuGThcWtCyui7P616Hp",
  "key26": "2Vnz5DM4f4hnCMw1LufaxGNqRNLJcLSW9yeHYJknLd9Uqnv3SRHsVwLNun1zvC51Ym9XhJgaBVYiEJRFWYidGUZv",
  "key27": "Z4FgTKx6aJ84do2Mx2FCFehD6jdCrEX37CfDena3dhSg4DDGj7otY58hZapAdNLyJx8ycAkZeMk6JNCqkwKXQKc",
  "key28": "2VpW5xqp6PCCdp3q7TTsyBXkQGWnprmUsNDcLRY6YwTUnAP8f51KKj6DVGUYr1Jdqe3xyHkXXidAGrRdhocGZYgi",
  "key29": "4JoCNckmJenxiHozveQvAsVyZMgN7h15dNJDuBC1sABFfTb2rhewane3L94hbvqF9i8GkR3EnBxjvUUGLpQxoXvY",
  "key30": "3ARmiP42xdQTdMFg2n85W3uZEvh2HnzJigakEVVEh6X5dnsUxkP7awGU14YVCHDewwY6KaTEyTEqBwypUqWnGTQw"
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
