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
    "2C8cUL4QBoHZx67DPDjMo1zjfQ7hwVqKLB2vJzFuii4dk1vCcYftgsB5UaKEaZSQxN3BjnSXSggc4HteX8SXthDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "chLnuKLTmgJJd9KGqi2pbCGdzXU2eFuqxECAwfr9WDmTXAZVEmtfWPCcjmx95V7bm3z3uLUZ2DWCSw1svK7KKF4",
  "key1": "3EQ2gPdSArxP7aruhYrvqfcvj2Nr2vSELT98WMZGUzgHoedKKBU6j2LCdxZKFUx6KGcDyPVMd9MatworuPfkKraA",
  "key2": "s6tsrEwsvAjuz2rRcopRwyKLb5LfrrXTpDgFqr5xsRY3kBTpL72JurhbmfQatfhcjDhYMw2w26ztfdMoDWPwXZX",
  "key3": "3wXuvRrQ263Q1Pud7ggiMkeYgVudvG1YmweTZtyFGfHpZftheeWYRcrMjL9W7hfgs5D4Lgm9YTK5LWdsX2aQtHVL",
  "key4": "3Rw2JWaPfzWZjJeRdGLw4CooGGtBDXwcQDXWwx8WVhpNRfEg3kVNurzcbjXBJdMKRLPWwQNrWvTDUrKyBocQrzbT",
  "key5": "4B6KZ8apznL5aLwZDPPrKFWmqrD7ZhaEbQrfT7MREE3u43sm27H1rS8yC2J5uZ1yHdo8XqnNvGA8XJDAJDYDvF57",
  "key6": "3wkb4WAJirgkFpE5YWKNSUdNq5JC6xvX6o4CmSZxLgdkkigxZsCW9Pr4zPyUQ73Kbnae2WNcnDTVd2wrxLrjNowR",
  "key7": "togyk9hmghdoXGdyR5GHr1sQ2eH7o6v9m2Y7RkSGuMz4BMf2YVypf4LptYa8UG5LbNiSiqRZ5qahrsxBT688sBP",
  "key8": "4vUdj8rCGi1ZkEwxY3sjd2qy3KyJPsrUowKqaQMwTLGnino739oJjQQxidaj2oHT8Zz8EpVajtmUpQHvC73yt9hz",
  "key9": "gGcyN1Amd3fLkgA7RnSK6k3aFWLaijmbLJNxSPefqE5m9q6GF4finqXvjWjXhCTPPUHv2zy5LCPeZkyidVUVhpR",
  "key10": "5g5DVnAFCTPcCvdASAXpzy5ghhELH1Wy1Ms23DGMSQKbpSs5RucfzgnuSeQpRVs2mbcRAGjx6BEFD7my2wxyH2Km",
  "key11": "qBBFH1pewt4JLPP2b6wRJ522iZdk4QNZ3X8huaH3PpHjbsxCmSaVh5HzZmPY9R85tq6EuyRnjLcNarECc131Tq6",
  "key12": "5bdfpNy5EHJz9QAPy4QjDYtrQA38T32ETUB8vch2uDtZmpCMgwU3VLdh7uEaSHjUcDBctxqt5Z8N4mi8VKdqZfpv",
  "key13": "3FJyX5rX9uY6V9VPLfgZrhcrh96CVyfzygmFzYx9zzSi2MhPxNXwioZzZ6jSQHbYr8bk34LeqnS2Wj9n9TtX4yJu",
  "key14": "4L6cNHDWB3Nd8hNPRGN56mwdB3XLcavgxobJuPzmm5i4L7Nm7cg2VZqg1dZ5Mj8JvhRNLgK5FZrsekVU9bVPuFfj",
  "key15": "47nic2Bf2E2V69EMunGqfbPyF1WvoUgAGBhGysMQ73K2B5pfiAZHSa5zGtNkr3zSxcxQa6dGsWbEXxC2UvyrcWkH",
  "key16": "5xQac1eFR85QMn8nHdaWtEL6SCZnNym6GCigyF26peM4hjdnmzvPbJZnXqn9WZwgKoTW1gNwYiFMQZ77gbFFH9Ay",
  "key17": "4Up4g68Qpu9kQ7rvVZKpBmGjCrKegXzoxr619TQnEZrK3vJWF6iZKxYmkV753sDf2y7tmEsX5K7wquJrRnPxjgxP",
  "key18": "tKT8gXLyX4sw1DniDrj8YdxthgvT5QRc1kST5mfgMZ9uW71dh2sZ8fnDWaWoxKNPGHUxVdiThkMvofE6u1myGLG",
  "key19": "44EjkfwunahE9rWJqxSosSDGmJUFJzKBAFkkdsExxPhuVmx3WwZTxxq8TPjR3fi9rWedUyxiRSxSE9AAAL2othFA",
  "key20": "2Lj17ZtNUyatX9isimd3DPjPUMZR1S5WspYJF5pQPSUf8jMqh5X9kDXk6whdJ4iHbeDuAGVDJWzUaDwoBW9wMih1",
  "key21": "5ZuzsdYbugifcAeBPQ7cpQdgUhu8Zz8cYVT5gfNy8XTFQcz6P7P31b48E3KVx33LAu76Zz2eHzdmrU3XgzsaYiHL",
  "key22": "3afFhZqK9G4VyJz3RF1UWFQFAfa69U5qPFrKH5KzZKad86geo8Jnt3eK4nWcxY32wNQUduFd6PdttEgx9ERuBJJZ",
  "key23": "bdP21Kt1QZF256DauanYVASU3rvCtrJAHUsSAKAkUh4f6ftZVqg9wVggkDDqXua7B2v98DLXVUdG1FJdF5bzyAz",
  "key24": "2UmdHfw1gAHaJ4rbajSiCncj3AS9HScGNn9pzZ8DpSCQbdVoM9LpAvvKo2acN3WQwNUix59Nsfjvv3gZS8g8kEwe",
  "key25": "46P3mU3PRK7cLqrdnz7jQZmvsrqW7jRoeDjsikL6RUizUAawXcsPUPg56b79G1NENGiztu6u8Ny8NfKtyvdG8d9X",
  "key26": "YdbpJnigYkWqa8ByMhe7bpCD45cbMetEJbXWB3yNCWrrxB969JeskptYwbbBHPEbbWmEejZmj9GamBWeLdQ4NaY",
  "key27": "5hsAraQzjWwLnfBTJB4h9Zco47UhbAa9Bt4kkDrgMd41Huc2XhPCBTm1MJxtV6FnQA2Fo3scrQQZET63r2rNbe6a",
  "key28": "3G8qbMw1nUwXDLikTEzHEkJX65nFooYYMDggdSxoJZW9zSv8LSa3jrghp6byQrPRmu6fnAAF3VDXQxGaN9zLXaZ2",
  "key29": "2KeY7XkQ1doLQg72QLk59oDaUvpyifp7Q99dNS7tCBcNHR547NbwNiCuLZcxLdLSj2QhSchLLTHgrvLz2t3ZMzb4",
  "key30": "2RfnfeeoAgoRkqwivjFawGjwcM9v1YdYxxbKSGGM5pFJpNdjCmvfi7rZiQToYDHyk7mbNcHU5dgdt9YfFVBkPtu7",
  "key31": "2ATNtjupNJ5xT2q2qfxYTq4K3e8jh7DPmrqYu1LW8t4RfHsdAqHRsU731qMHotvVFiJpnzA2pd77vJgvy28aN148",
  "key32": "zfHfwdGohRVYPPKzUtdyWtgvkS4WLrkcnNK9FcJVGm4f8MQZZY7SniQDGkmhYsPRMRn9qj5hh6eodaVhaDnZedN",
  "key33": "33RWfSVUosVrU5MBGFcaBPbev6bN8X2D2QdzjBC1ZYDFWS6rCGr1o9a9Me3B1EpbyXH1EDesNXTRt5bQkpAW4e8N"
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
