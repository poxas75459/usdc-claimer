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
    "XPxeTMK8Xkrt2U7Zd12NbrtX2kaXMrKp2YXhaKXUMibxtDzmreyacqkghp6Tb7PnAcD117yvnUBMzpyaenHVsYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHaaSrsWgNFFMbaddBw9FPRFdvNbgQWMnpsrnWKQ7HAw4asQE6YsXqeN3UQsNysQeaekoL5NApbHhQ3XBSX8BJR",
  "key1": "3k9DU9vhFzYvnLLCj3ZaQYGJ3nBJduuff68cJnU7LhmWZPctzboUrqZk3n8tuxH4Ft2NYhqZrxU6Yb4HYomC4vgz",
  "key2": "66hWNAC1TyaCwuEhptjHCHFKCCHn7ctxjBL9Pqt2C6vsc5RAhXrYz7ZpcjLwAW1GFJLuiS5FgGQTewXwM6SEVUj",
  "key3": "4BbPzYbYRVHMN4e1ZTTmGJGpKogrhHDSyhd4sNmB3Gg67742DxzGaufQVwBq1AzixiLYPEHubwajej72r2dqp6RM",
  "key4": "2kgSQSw9fAnUbpcBd8xzUDNVw2RCdWZmQUxfviVqfBj7Fu52nRen6UBxZCUKA5Bq752GergSTmeB8SxL21p6a93A",
  "key5": "4WSAuyRsiSp7h165jdotP8p9Vht9pWdYq3twzxBLhzdwywFvPZk85om4So4rEaV73yp7tdcEHjFuo1b5zedCKXSa",
  "key6": "2CmdD7F5MyBYevazvrV2Su5rbgJPKmtWrJraHR71JtAcB8kVea1uNVBJatvxeX1WmX3jT2tALETMkgQ9nfXHDUqT",
  "key7": "5f3rL4bdMXVT9s7MrgJc7gDWxN1a8zCwPT4iwvwxchUrqcbKAJVEBN5MvkzdNQS2JdxNdN9THvR7XasmragtF6Jy",
  "key8": "3TMkxJXSu8ikoidn6a3Tz8J6t6o3fzgYv39qmUQ6Mo7m3SpqdYin1wWKUXuEvkNPfbPbSUsrAqSGrNR21wqqxVUk",
  "key9": "pAVGmYFT5danp9Qw663BEWwWAduGtTt5LdJi7JcT2VPZ8Y8N5hYfXukD7RAkDvSWR9BJrFBDpfRUYzsfKRxWfZh",
  "key10": "d53j3q4pgkkBLuvfeq5Kr5axJpdPBtWiZq2GGqqSmJafgPQz5PE3E6Fro1BE4U6tDoZZ7Crtofq3KpJiamL32dR",
  "key11": "2BKzBd1scDNsg5z2tFpJecJSVxa4C4ybX9noy8oZQSNSZANAY6NcC6HJUUyc9835FsVzSgNmL1VKQ1dNzL1JZzfi",
  "key12": "3gtcdnRUUHEcRZC73bdGu5jHDeLuEgPhx5uXkVw1fqaLN9RocJRSVvQwExmoQeoXQPs5iXozgj1ffhzfNU8AAoSt",
  "key13": "DMHvQJEyHHo9v1uicxnZT8YCcqLN8ZKHVeADHaE4gK5UFV4Ekc6zqeqZC8dUV5gWK5595XMRTbfG1DHSMwm8EZo",
  "key14": "atsjVGVuta25chjAEfwZWezuUAi7GfCAwzM8vhQsQUn6PKkfB5iXDZY55KGDwnNqUQi4wkxS9NzbjevYxohdRYg",
  "key15": "3W1PpaNqWfDxmD5XydHkzXkEXGtRKNAz1Yqymm3ENmD4XAjQj8S2h6Gkfy1b1fV4UGhBGXLXkHGShcj9bbduSfyD",
  "key16": "4oYLfuRx16Ga44wcvZjyBFhfa7QcHkaNSLWDDMDnzon3Grn35zPn87Quo3MEreQ5PCBG2kjRECdHGm2ppYahFC97",
  "key17": "4VDnSfj1NR2NXQGFwFWE4Rn9nKzj1sg9hvSJPNcsh9R2PsjosgupqkS2xRbUak9hcKSgPgj29zBnkYuvBhQgDEM",
  "key18": "5MCFxVePEHD4EDkT1UKFSqcG5FXoaSYpYzYZ8cRVQ8wwVuTdj491KAajn7vS8VhopNagi2fJMLstWd3Hn8eAaFGZ",
  "key19": "3GevasSMc6sEBkgrYviwWC8St1bBwy4mgiUeRfFdxNYyApARD677n4eTP1Ns9DRmbrxL3kzgsMJy3WLQ5pKQrTU6",
  "key20": "CN6qTZwBSvfs1ihYTeRMB7z7ocj2S8QZngrpAu9ryZvLNpovsYNRQaijbmnsR4zVBPxKURx9G4KvL9WfBsrcg2j",
  "key21": "3kwCTwv6CBViERvHy2UYFQNKpLSyJcwBTgLUDKnboFEkTBDTWEWHQ69xebYr4ZN3yywd1zyu2qVm9qQwa86VSadP",
  "key22": "3oB7Tn8AH83ccCJoueQFpLkVaBzKVTP4mtG5zf8vhSx9dLuqZNDBCbcsSPJApP5rSADv7CW4M9nQzrfvk5CeqZ1u",
  "key23": "2BDk7HcA8vQ78J7w8cNy4WMyJcNPGRskaZokG2MWENgPuZePm89pWQJ1z5UFGqzXNmP6thTxS2rhXuAyfhf2Rg3h",
  "key24": "2z8Ry5w32CKaTKsG89Jx8UMLVzDKfZDuFCmzjxCMr47XabtaPjeVsABoxAYAcivF6Giepqk1hkYJjxFqdivJZJqu"
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
