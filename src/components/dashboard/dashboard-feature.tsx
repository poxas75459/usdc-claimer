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
    "3odB42uG7WRa1rFawLfXL8ut47UcXcvozqLZvV3j9LN19bzEhcYMhsE6X16ZG1ihYW5zVcKMfmLa5ZT3gy84iR7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rwqFoxvRq7GTa9uuGEwSA49vTagmLDjFtEmoUwvTs9ypWvCSuSe23brFborbnBqEQJJbZBAyjpbvRSpWHTh7wqv",
  "key1": "3wESgefkqjU7peNyGUQEoSg6Z3CwjcvGQfrboCXn8DkVTQdLs23rK7Y4bF3joQWvGjSB7CP3s7geNUnWu6Wpjd8N",
  "key2": "2cdyh7WBSfspy3Uy9EWv5ApazFC4sgadgx7uVUZP7g1kXRFALP7xtdrjSn9rwdu8GjWSGuLxaFMxFbMPQWnA3fL7",
  "key3": "5EXCtrarrDpWMCPbHj4Nm4pvBa4FJMZL8nQgRH3h68vX9X3TPexnbVSNq2753qNLw2YzWT62RXmfQQH4PhPmam1X",
  "key4": "4NFJERfD64H9zXpeLcpQgRirCLiSQ56Yb8nRNaZo48ZfasczyzTE6P6GwT8ndsivnoCocVcTAsJxejgnSMRkaa1J",
  "key5": "58CNSP6zfTEgwPwR9B33USJGb3XZHqwT17FsCZdu95Cb5fNU1DWzCxMNkqv58FRA64YJr752wHWPi2ifgyFNfyAe",
  "key6": "2ukkw4buBgryhpFx1sSZK82fy6DwicmWXE9z9mVqdxknKrQBYdtB1BQDDpacpp1cZJN7udaDCYydPNAGRrfrsnd",
  "key7": "3wFa3qPgrdEVBs68ynRuCnJ9wHgWxzkcdfBL74JjfyhfiMUB6LLRRdtoTFWhRWSPbjonk7YDbNr6ezSkTCAp9wDv",
  "key8": "4nGhFoZLr68VADmfyqfcy23oWofNdAZ57wT2KT51frBUUwvCdAEgWkQBz5kyJ51RHYkRWqQz5XFYUmNjtDFasnue",
  "key9": "4zWp2QH8b8DqqpngMUpgdwD3Xc7khm1Ebvg4vWeW5xuzvfxpB8vcBHc2EJs1n66Zy3mP6oeW3eJoC2k1aBbbjrZv",
  "key10": "4ivFQbx3hy8mTV7ik8HY5CtLAgtmoXb8ehQNdPhV2PorALz9gpS97AhjtKwNY3irSANsoj4HQVPtud7HQi1mWv2U",
  "key11": "51SoNeQox1e8zvzbkubmwNqvK2NK78s49tkoTn5njU6U5qaoPfWfW889CZz81yGLLAfczKKMenzpZt3dfSGXRWHh",
  "key12": "5UGoYT16mmTw3zjFz58BzfY6KoHwpkt3UZFfQ4PnJmLzuGV7ax7gN25X8ie3vi9M3Ks8wigME7K65STpMsp4BfdQ",
  "key13": "4JBhumrGRjC8J2BnB2SQj3cvUMndmKMok568svtHXSoZnbAnLC4BpnypxeAHWtVDuAmkS4PXzwJ3HX9skcktarWu",
  "key14": "ttVJSj6p1voJUG4V5STNfanhaL8mXP6PsZstoZWxm97auexks2zT3cYciq9jeuVnRTtFbuT14FXrjdfBjydo257",
  "key15": "54hfKKYUFqPAd6Ecq33DfKxBz54rB9Pgy7XNUK64kytffzwphFGryVXRJUXU8xZy1yKzfhKAKjdxqck8FTwo8f36",
  "key16": "2bMj4wYnvxNanJWcEZ8ss59SC1i69o5YjZDcX8PT9vkipyy11mpTff5G4XkssNn93nDkFa6U59AAtJqM3iR3XXiF",
  "key17": "5hXi3nVPUwgKzHJnQBoXLT8Yroe432SX193LMj45qzZCSzTx7antTHZKe39n9qYUHAvWo8Fq7CUH7gsiNzZ4upgx",
  "key18": "3HVscaCY8aTM1DcydvfTDZjppXYHGkKjR4oKB11cxajHPAYUjHvEEHRiEc4siqKo5jM65vsdLMwWE49t2VwSaJAK",
  "key19": "4uphkTFJptHpZzq8jpMSLGpRhAFMVCFKm3ydicEV2dRqaSmKwmzLjWBkm3RwWBoi1mxhMvq1SdvtS6BM9Cz8RrhY",
  "key20": "3oeSBVU2gcMKTJbcULiG1YobC6AXnzefFmpCSY5jYcs37yjQ5BiDWpkgQPa2SjLzGbYXVTfHJG8VqHoMpwkx4nLp",
  "key21": "GbxjCj3Xi4BWxw12WSNUZDotGs18d8ZfVaVg2tardE9uBnirzkBwr6vQoaL3mFjG3kaW83dMfQUG364A34cYTxR",
  "key22": "35PUyjz6SZ81JX134oHZMxHjoi7JKNNjjVb5q7gLL27yCiw41TZZojpb9iikBc6BoyuD7DuGnthX6xQd2VoD1VGy",
  "key23": "62fDMG1m4oUXTVQBWoEmDK5CjqrBLC3zQgXm9EDG66mtUkbR2XWLMSCUbgiZpx4QjtnBQNZHGJQqzGd7eSEZz74u",
  "key24": "3sc7RTXPAig6kpmXGoqJg9jt78KxxEXmQUrCFMFdCiug9tVJXNP7gZcRPojTrTtAWJksETEkWxQ9peMNnKoQKiPn"
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
