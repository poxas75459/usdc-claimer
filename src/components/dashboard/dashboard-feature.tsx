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
    "5sXGW2tWUaPZouonebsFXMqWf8qZAdnDFFGRfHPdu19oVP4Ek1tJaqqFTP3mFAjpduiaxVAfkfrXdWTg3GpatoM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YEfmYSgWhuEa8idJQjg5Gwyf4veyyZNN3D4Qj4UFtwzBnggbHE2FRECcuMeECN3rofK8FqpMpf23CRJEz7zFpkT",
  "key1": "3PH1pw8wReYx8S73GpEg2SvqE1BMyCEVbHfGft6DB8Lpt1QHj8WvKqetXwrUjgrazQZZpto3v4ssTupJ4kCYNmRK",
  "key2": "55YQ226iX4x4uLAK3pK8Nni9MHDjifZ2z9JHWSpJTASDsm3Vofguc9gWPpNa8ecSbMDBd1MDB7vZ2WdovTvTHhTQ",
  "key3": "3EMiRk73um1o4kK6QeX82osaGrwiSHJmSZ5KP5gh6JnVpZ7PMxh7CqEBYjht4JiwCuN4YZUS3xRJVDeackumNgc1",
  "key4": "5iyLnLXTHCYTLkNb2Gifa2sARF4obZQ5qaHH2aEksQt1CEspxmqEzWDLuXMo84UnDSsdygcPVPVFHM8FmZha3EdT",
  "key5": "5gPVwuh3TJCiGHRj8tRm9nWeetvmmsZsTrUQcV7eqixHLw7fdYTBzEbjfi4w13M8gjg1CNX1xVokdktb18PWfBYZ",
  "key6": "484UNH2u5ANQxoAj32RkuJcYq3AFPJPQZadqhmUrEtL3RtrcVZEZ8K183SHQQRobd2WwK2vUWKk8YTbbJnrENYyg",
  "key7": "4amXqUy25iFjTKp6qVR8mq2K2YbVgMXTYAkm4Krkzz3mCWB5VERHoPid3jP3Fpqw1e6PHQ8iLTTWfn7UVMBSKVjB",
  "key8": "33AWqhPNoSLwcZ1GF9Ze6M71buZQ2c9TZN5thDvsCcafYq5v6QFU836XjVVXGBJts4D7xys4R7Qci5sBzVKQutzA",
  "key9": "22v4TLntmcPVERkhGPjMumqHXR4i1WC5RtGWpeqAnt9yxTzXzGTxEww22Tng9DvnqY5hK2Pqg1zNJ6WCzAvvvmJQ",
  "key10": "4XSHd5mXMqk2znKAq11FadAcKCJQPQU1JZtSXGdzne2nAW8u5rnjqUutmSpgqqVeXjWfn1RAdwtTiGLqRhWypsYY",
  "key11": "3mos8dm6DoeXJX29m1e3ddMoPrFoadNaKB8uZPqip69n7ZuJRDkRdtvSmmcX89NCaHG9JByncNUQHBC5icwnjbBM",
  "key12": "3reqis5VRidwTsfn6g1wUZTMxKDJiL8vHboc5pxpMtUjfjSawgktpsZTY7LwNCLkpnRKMgXGiW73vmUkS8xE8bQy",
  "key13": "2vJjS9SBbK3a1uN945SCGbQvZMhjbMGmkuX3Sep9vLF2j5MLotWq8HJKkhhd5EKEkP1Eaz9WiTturfSpyxhxDcjC",
  "key14": "4KshrX945NgKdjv5wN2w2Sw2EyJVSmkNnPeaNxPTeqHLNN2tqGKNacy9eLz4G7FVCfVSgDZujXQZLuGSi6BdrLTj",
  "key15": "Xk1abYYeCV2GgWwh2k76CBWL8CdgpvVjDCRmvJTJWXEvfSDPQDaKMbPCiKUNc9CVpmakwbp6jyLfaakRgjfXjhd",
  "key16": "5VPyXhMnBJ1BiDrpd4f4wgp2w1W1CsL6ZGsRWpP17XyYpwLupAJNhw3p1kHeTUZH7gDmXDRtdnVHMVkNj5vzRnmn",
  "key17": "2SJcxiZeL768XDkyLyoPN5xN83K3SqU6isMLuGsZbdEhDeHz32DMMpdTUosEtfi74ZMUJPQRcxnkupQz6bESsM8V",
  "key18": "23Cyebxi5srbY183GyQ3zDjLvnAAxuGJsWDH32aHHF1sLoUBvcGdDax3QSSrCctJAepGfNhoe2UKAov8WMBqL3B4",
  "key19": "4rsJx2o8HaKtxrocQ6QBGS2tty6Hn5iQcbGPU5Vy7KDzZ5zuQ1mDzAyNzXyHvV57keHtjcDX2ANwt18tmkKSE1rK",
  "key20": "wHK5SHBSiNAF2VZ5TgpiwH4or6wXmjWmS6JMx6viUhv8R5c4EvAp8rsGvZgH5XsUJSqwZTCBVv8dG9dDF2oSQiP",
  "key21": "4gdQGAaxNtRWkqVyVnL64Vp8MreX778v52LsAepTsKxdKQujpHdYiVTLNqz7Y1LJWw6XE6Wq1cyMeLkigimsgp7U",
  "key22": "qdBwkkbxAhxNm243WFhuRvZ7Pzx9upaAFDrEws13zXhPJTbqmRCRzBxtipviy5sGEh4qAs2hfxNTvoYdL9spBpv",
  "key23": "2Mj4Z3ehbSNxND6fXwRvwMDBnrafhNaQVZmRLXpLPxz65qy7BcZV4vM2e35BcvEufdincWzMTcJnPbr7YhkcCebT",
  "key24": "5jZcDjxaRBs36Nfs9AUXZGd1oWJw4Us2xbSzSjE1XAXiF1RZdHBRP5HjYxwot5ANqnCUBFbquHTQJ3p1u5Xiy1TP",
  "key25": "5LuLfsBji1D9kgXf5KrZJqUeFJ3zM3srbUKmZoaJBJCx9sn6is65BLB43aEgReAfYx2E3aGeMRuYdaudfaPMkdjd",
  "key26": "4NZoaT5RUEYB4QqpNMpXMz5gnFrCNT2Kmck7vTdjFX13gh6ztKWYXRCWEqNxJTbmMM9jqGc2eeHhYb5di3fyzvGK"
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
