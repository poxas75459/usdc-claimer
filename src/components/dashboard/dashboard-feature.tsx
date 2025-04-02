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
    "3KngWN173gcpW5iv7EoqrVF5HbUDa6L9a7uK9PcKUQLUjV5na5x5erUW15iGbKVVG5G1ftHmWPFLaJBiephzCPXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xL8KcXkPqwmTEZGge9HG44Fn3hygMEv3os3oYh7GkbHRaaCP3PdcSNEmtgfeJdZ1zYV7JumSuRTu6fNcWHGTzGj",
  "key1": "3DW35ZDgXVfSjMAs6b2FCdZAvLKW5jtbEL9nGQ3zUeq5X6z45ZZJGphfLSVjKHzry5KpFUw9cyVMsJX4DTBiSEcr",
  "key2": "3KxgRMNVRcKMZZxfcEtutK9FybgaCPT1m2PNqLf6bRVmZ96XqTs4mMN1V6tQDm4sTbd1e5b2VkGiJNMLJa4T9UFa",
  "key3": "5AhF4JgCYSafNFqVA1tRDyry2gbW7Xj4pshhyZxfmdTBB5zvN6eehqwTbh2TyEq5v8hnZTjKrDUT67nZ9rhzkm4y",
  "key4": "hLqGEENWmGTFm15VT8H3rDpxWpMDHb2GjUCTJEdUG1cNw2AUmwz7mTnTWXusMTYhLWZ2Lc6soDrP23d1if9o8aN",
  "key5": "2gnbD4nL3HTnpBetzHVcXbmNNv7FN6czaLgqn4LsbHEL9GhXoaUdAvU8DmVjf4nQxaf6PCo9kkAjtKQ4ZWrMQXUm",
  "key6": "2DTf6FraddCL8CnoykB22GNANFyjhsXFsztkWoR3iPV41HmW1Emk2EuJfdyUCgfFvquj4yoYx3txn1CdjxfJfKaM",
  "key7": "5jgAYYmrD8TKPJRSZ4puJf3pCcGKKZVk3hJDWPrv9X4dXFa3MuK2DNGdAAcrRMSRWrzLb6STREzT2g4sEJjB47rN",
  "key8": "3q1MxGvkukhyL6DvedjjfK2zZVedJVhdqKzk4cgsVF8huzRZAegNCrNMiYM9AjK3sKFyUvvXxCpwo7BhKecGXpZD",
  "key9": "CFR2tYrWAJHSNzmYJrLv5CynWsmeLNCb1kD2C9ddPMqDNfhfJHS9kM8uSJYs6cpACpcUuq4fzkTxhdd1SYR83iJ",
  "key10": "5uHFiAyFonPJiDTxcXQNbxMxKSQPmyEnLdFNZaFFC5rA3KsiQu8QCr8gVdqALQV4TT2nJTiQqADAXAWB1TQgziVx",
  "key11": "5G4SVB4T58f6gmK2xoFkEepDzJWzUKrAVuyPryRodsUroATQyaz6j9KAA31MvtuQqyqygh6C9DiphpsmA4hTkS6F",
  "key12": "tjjDFXaeEeTCvNa2yVD9g77kgf82zPkHVnc2u6t6p4KV26bJy3zNGb9cK7ZVFqegRGJYvJj3whT6Uw3HJdXfaxQ",
  "key13": "m7H91Ugo5e3Nr2g4vPfAvfjab1STiMEXsn7WpLezkcqHb3QQTD7U9c9nf8wd78n6cDsB4GfthkAW3QQWxrkhHq2",
  "key14": "4gW88TdGwV15954RVgi4XGZmifCjzDfjCs1Zjjc5SmCY8oMHhdjrBVWkynqEryrC7Yiokw2d28CWGxHLu9iXaKJG",
  "key15": "5Vzk3wNnukejWvbPNr8zSDouPHCKTLKvMaJrGs7qhyS8fAuCtEShK3bbARURK5wxaLF1M4PXYhAKHfg5pXzt3Yie",
  "key16": "54S36Wq5sRCTzFt4MHUchUoJU24VkKFtE9xKQXcqqmWRKStwdsfPjZRmQprCe74HKon7gpDfRpArTGqXXDpKrMKw",
  "key17": "z9T48MrLKgnrD8TaceDbwsgYnU7uTCNGRJRzVyYJwkNT3F1QM6n34TD83v6EWKaHA2jyF99nKdaDPWwfjyQkzDJ",
  "key18": "3dneSh5CHeJnUcTF9XbptK8HPiRWvL44XeJibbK9pKpxzuJRSPoxJCGVyKvJCL1Ti4scJEdhv3tvMEQduqVC72Nk",
  "key19": "4sXNraNEKXdivQX4BnWraJ66DQc8x4uhEChaD3MWJAoZcP5s8BTyfBLJzmVp2M1wSzUwKpwT597jxErgJ58Hir5o",
  "key20": "2NUCWTvHT7iXTLCmcnwV5fyJt1N3CcdMd3FV5uyPkkyQ53VpX8u1XFuSShrz2jwmh5MTxXGECawYgg45r4x2PSjQ",
  "key21": "3wffy4FP3srasTBUp85hqwp1RHDSHFj1Y7LAqZsh9JqKEmCkHYxuSbzdog4v2reCnErPwZUpNdq61qyQgxQY8hZ4",
  "key22": "3G7wSLutdBA9VkcUYaKoqhgyhtVKwFGVFhmL7ECtqHLyfYVavPHcxzbgVkqesutSbRuNynC1JwnscsiwaYWSVRZm",
  "key23": "5KVHYphjyPjjaf8Eh8soAPPvUeWpnnq3mZEfr6QDaG7Z7E2soJWuQgH9nPzaonbK7V2id77KX7nxcejmr4VjovbB",
  "key24": "rmk29n2BkUyzW47WDCNUxD97ruWqGMpgZDE1BwNkAFu4PniniVfSLUwoiJwDZNAbnLa2S6xWKgh6shPhrpTsv46",
  "key25": "FJVW7c9x9NdNgid6uZhTNZ3QgEwRzPLU93Yk1m5opvAeWMHhGMpMtrRcgrB5w1eRwgqy17gEL5rgZBKBVULd2pQ",
  "key26": "3Ykz9XiFxvFsnTbKfvDoM8MoPxfPn8Loo7tbArPNz98r3Qi6ThjegCjSsNHH1kJRmC1eT9u6oNYWE5nFi2wZoHQ2"
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
