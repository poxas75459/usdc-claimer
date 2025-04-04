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
    "ZXAko3EBf8QBhs4jmVgLe9HZfdJvdZxFSC5oDbkNyJShQwGCmMPYEZHgXeop5oBcQBzb9Ct4MPDN6d3Rmg9Kuge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PMEXSi5fU6FKcb3gCyA2dCF6venq3Mxv4u7mXXPNEtAQkuMmyLwu7U6DSQSnj9in2kRR8yv1o28JRJb5LXpBsXU",
  "key1": "vaWSi9RxTYrypgfn9rGUPo3VgRmu3XgTYmQBEmzERCLGAkjP6potLwB4wk2bS3p4QKu4hdzq9ciTvtxRarnWiwk",
  "key2": "2RsMz9qdx1p1SzKqCk8eJorvMbM7B96P7ndvk8eKuNZaH9jbfeZaQw6vEx83b57fn3LWjH6hVStppwVsCaffpwyF",
  "key3": "WyjCNjEemvcFQJU5m1B4ii31FDdZj7XdWaUvM6pMmpMkwqexy21h8Nwn9ztdQPUQhhAdnidqpBL6TkfrEbYbBWn",
  "key4": "oTjj5EURwNzn4WsnC73wEdoofsJQMaqmhNGq3XR6ptxV1L6ukokdNiRefUAGzXqFyjczAZgjE52nus3RF944qgY",
  "key5": "2JoDRDGUDmYZVRMeZDQYKssK6yEYSzSWQpsFM1EgzzhV5Qf1bjBwAzHCMQruCetZUPzt197vrqST1fD5W9URuukf",
  "key6": "3SHPPMTmuHXrsrUm2QmXKCN3mRYpjyeQ9wFcf71TbTza6KVJH6a8pxLeEWpxk9vXwxfLVxqLLpMAqdjJKGQAxseo",
  "key7": "2c5sbqaGAkGvKo1Ei8UUjSmqyXcXkSJxXCjrpkcmPJ6zfFkMwTCs47451w1u2bkkgaQdHQmuiz67TKUfHFFXcFvb",
  "key8": "2EJKR1s3GxByc6sm7fU6ZKUQsG8wU71kEpTnkgZSFrRsuWsZE2iawkwUBWHSSVaiXTZp4V5JbxEg7dqNuJDqoZEL",
  "key9": "3tSaQB21CQ6TkaQESzmoBpG5a3uWeN4nLX7EHezLmSijgB9Ekipc9FeBzTdKT7Y3XY8FmkUmVk3f6VeZGAvHPN7A",
  "key10": "3s1wxbgJVMNNZti5G39cmVAq4Wb4HHHeAPuP2MbLAEEhTdmit8oNCVWJTfjZK76GuFcvRgsE54AkaSiNhQUbAmyR",
  "key11": "SUgSPHQwhDm52JeUDJ6J7KSgYPwQ5tf1zjn1uE7Uue3QYkZhrqpfnagnFDg4oiE3QJx1M8VrezUDicEr4fkyyEG",
  "key12": "2HecK9jGpbAN3F17jeFKzCWJVzZxezAUWTmTPKBqWmfSyGWLoGkXce1PvwHVv7GVbWW3os8ZYEupxF6rdEuJAKke",
  "key13": "3Spx4nAvGdZz9CboUEJHuqGraDtwfpwppT4pPFpJiCJGv4fGCu5DiC8pkC21ydqFpsL7Hg3VaAndWShQNDGaWEn7",
  "key14": "DQ5RXXTNNoHMeeDtZNQNzxP49tv3V4iSiUY3puseY5jN1MDMSMdzMbxrj5X3voTA3xLcaBzd8GwEJzZH3FKarxo",
  "key15": "49g29xzELTqr2hpzZBkSQSRdQgXrm6phvANtQmC4E7aTsY4vXkRNZnL77WcP9GPfQZMb7NsoCeAdHZ8h1Grn8WYZ",
  "key16": "35MJBVs9dBACRwt39Y5TKsdMHaEWLSwP3KXHbUbeqME6xbWAs7Gema63bCVjQJFkiNwQEfSeRS5BWoN7x9BnKtD1",
  "key17": "efdsEDhMuRk79abUMuxCdEJtA5ggf7JvQpNdWjMk29ycssCdxJr5fjeTc7Lz1mwAkvwapD645oi3smRsAUhUcWw",
  "key18": "2T5Mu3MyNx2hVMpmDmEtsuQxP7xz4WvK621SuNYpfneZYYHbjcCNmWthFZ6fswDnjc8uqN4JEzVTeEgHJh4Wi9Lh",
  "key19": "3DGrbBbDjQyL58q7D8toSh2cBVtJ5TBo2szbSCJUGMQB31kdeYsfnSfTLbR5vd9V7ZfkPLpcRyvUTJCwfyav42DT",
  "key20": "3h7MifXNZJDzU2rRHEAqFyY1kd1gxkNidYpp5BpmUpyTE1Cb4XBi88C32tuYkmYoRWLv5ACaqTiNzXPMSmhSrVig",
  "key21": "3ZAZfqUc74DiMizDicKjcUcSdtqPiksbEz8LXWkp9vjdUKNutohLtErNHL8LjS7jH8F7acfbk3a7qHtW9hHfNYVX",
  "key22": "bC2wQu28nB6MocenrSVzKF8kn7kzQJBT35MJDHZaEDaPCRhPyXUoSQzhBq6KQZYVjoLxRHECKEKL9khxQBzXNHT",
  "key23": "5FsdSWQCSQWqmz2cXD7xL9Ue5ycBhjJxnocDFGaStoZSgKHhsXs4wDdsZkvugFheBS8qJX6oRtfjZZL6tQe371Wf",
  "key24": "3UcpoBuGBtoS7NqnCotvNvu1hGU5B9tTVniiMNdjt4PS8eScMRcBstmrpJAXxSuVMgu7cySYKKuiWPSeEfPWzRb9",
  "key25": "4NCbwWXDcikRvPFBqw45jHsTuQRrqFa484dKohuX3xVB75SXqGKgoob2G9uhhioNMop9Ftu2y4MNhS7uSzsoX87H"
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
