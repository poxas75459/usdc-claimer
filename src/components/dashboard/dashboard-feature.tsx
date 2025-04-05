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
    "2uKnXt3XCgm64uXtfqSEr9QvxZZfSzfBnqYHoQdeBWJEEPjbBcx7AvbdqMgcVcyDPaEnVE7qJWhJhcNWPKSa8gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaChgChdH9RRFkQ8Rf2eSosvRow4sX4fG4UgUP3dAGeMbX91DNhz2MUah26RZmjK8PNSyUcuFKujYvCSN4VHdgR",
  "key1": "28HDPnaVe8n7jtYxWwWjuPYEy1wRSbsEvtT7ecrwJp4j7YBaoU3oSwvGPkTNvQ3ZACJNfrfnFcnx1HQV4YMZ3W5G",
  "key2": "3GNDDnAnRUtfzLdbt2gMjUAX8GfPoLi8An1hYLnW4Sz68mRZyA2iUTVpAXMNUiQXVoPQcdaNisi3KHMoQh1JmhyG",
  "key3": "5CBuWDV6CKiYszyzBMV4dGeH7sdeaukfET2BJ6pKYhZrcAYBqL5ckZP7Q7yDDQfYhUNtQunjZxmraELBMahDxe19",
  "key4": "2VBANeyznCPaaLJZDd8ZyqSrmHimpuFeFM7z81yamKRTxRNPsVh4bRbsKJMBcRe7k7Wnv8UuHMcrcqFwVvgUtB21",
  "key5": "56kWvMGKLx7SX7FPecJ1ZR8996PdjqQqgpCM8sM9dVm4iJV83bSYsE3ALbFoapqBtvPxsTCh3EdckS4UrT3wpUXZ",
  "key6": "5UqBajBtxga19icarfwfW4RL43v2TaQ52GzReryFqzGQJDcfmE3uTDZ5VE4LfEuu3ihNJ1b81SQndjSNQr6ek8hb",
  "key7": "UgAwad4ExeQgeENbqhnPtkNTQnjBBnQZNeEbB7Ms1hD1WdBXgqmXnTP4jpEFcj3qz8pPUgztTT7uUYFBsb1o2kT",
  "key8": "58TcSUTCrDgBrNyUVRVKjsTtzrshyZKteJt4AyrCK6vkVqaDD1KHU4SyWLEPDHfxviHHPHSfipXcbcfAmtWESTBz",
  "key9": "3YKxezN8WCuHH7sd9KPHTMZcWtrFxdzz3GPmYZtRg92BJwjLjEFFb5ae9uetrpke8XHTqhYFXBbqxFVhG2oUW26t",
  "key10": "4gstQQWLLcUiEPTNTQmTSvjJBdeAkbP16TMJ7pJmECL35RUA3vFW4ozx16VCXuRPhmL4BjDjbWQQaXyHFHG4BFbf",
  "key11": "3ZsHatQWo6vnEjCaqmcpDGSuochaQv3co7yfRHjELJRxKJi9iCqYEi6Y8WATQigi6p4cJDmBavpLApdbjAevMphj",
  "key12": "5AQPLpJJUvk4ZxRpoKKoP2g8epLXQApT6F96aPAsFyAr96Ly1JsUzeHhnLhzZgovM1BornSBMmJvc8r1P3Vks7Q6",
  "key13": "4nk2Jd84f4eGiQrNJfQkz7dCawg4k89SVkE6cLpdtZum8RrCYeGr1KoAi8SJLEpN7uvZJiiGmyD8o1nrVNt3DA4y",
  "key14": "5GDNzr13xaaAPXMYamH6KrV9ESQX4eRHizcT3wAiYMdZp2kRQFkPNxFSLJkwrQPhTEJ8cvsk43a91xR8ebKMMfUK",
  "key15": "8TeUu9XGUAnX5xDcxo3NX32ptMv1iJKZsfThafNGRFV2tLRcCX4Q6nMRTyoM3567fCGDgJwABJhmrc3zcjSMi9C",
  "key16": "3SQ7cLKHTCBXXdgr1VywbmKHhuCg7C62fm8xuhCbRF1hnaypcFu9sWTpjnCWBiYhDtBGpBZcYQBD9dDTMyVm9RMx",
  "key17": "4UiVCzsh9c6hXZhNmhgYszfiJnaNjGJrBZmHemF5zGPpF7YTYqgHEvuUTdd8hZPt1dicHZYFqTgzpzP2ZmipUzzw",
  "key18": "2B35KZW4u9Fj7iRiz7EXucyy4HNdGAjtq6rv4acJhAet9hY2FPDdB8LX26B92Vnze8hzRYz9wnoML9FWzWi8DkaD",
  "key19": "3y9TeTnDmoJv25Xrx1JPjsKBPPgQQSjaV5fpU1jL4p5Y2ZTv3uTVEQtxdnMxwJRriNbVY6XrwraGLfiwsCH9NPCy",
  "key20": "ktPESXkYCQTNhcCeEbUys4kvpTBTxeJrmu6VRAiiSpd9eYYdodSBWWgFep3SpkTvK9S4nFN3PMaA5nE65twKtcg",
  "key21": "qzUnZRzb7bL3ysh4VkZowVCpmrgA65Z9t13edd3UMqKZzU6aFXcX7G2EQS6aYkFy7mY2pvc5U6ybQD8zS4x9TM4",
  "key22": "z43GBgtdQCRQWwHyPzHxQpqWAiqPxPDPcWTT6HjLdsktXnLjhcKwyS9gRCsMRbDTU4hfr2uLLyBoJ5VcUNXBYG3",
  "key23": "iRx1tUp8y5SAwDLEVUFHBXGs8R3K6BA9aAg5zAzs9M6THw28MPtDxVvHxpvK8rUQ1xVps7XXi9skhor5YmwPKEF",
  "key24": "3U7YkwhLmnaXudbmjobhdzf6nbRVF2EN97nbsvz2TYZWu5Q8MUZvPqrnNoRTz6wXnHQYjBe9qtju4z9E7bEfUTcG",
  "key25": "rxi3vH7Baoo6W6yYfTyRUAZtWajg95bpJNB69JmbQCqHFmSJVFw23W66sxqSxgNT3WG6Qg9gPeLRsbCM1ZAURmR"
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
