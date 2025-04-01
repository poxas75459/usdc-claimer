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
    "4tHAhuD8hNNPRpVmqP8LxRsAR8thLy3b8c2JEXZY6ckQ1TMeASBezobEd5tEGeAqEtsZaWWKoM4HdUhFqyhNit3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qfv1yLXuFq8yzhfmQxEL2opCnTHpsrNami9ELsMUhLep6V33t3rVF1PbRd8RTrp72L7BTCnjSsRttDCsiee3rpM",
  "key1": "5mVV1SaVBRg19C9j628TEGFnAEBk2YSPB8nV9wQU1dMw7hEVHQuJn33tahaU99b6fGS5UYPd8rJ33kRqQd1Dh79a",
  "key2": "2gSjjYHNukyk75M9VuFt5Q5jDie6nsWuSANWGteAcjv11YUkxX2sPESLGHJ7UqV7wAYKLCEduHwMemrV6GRgjczJ",
  "key3": "65NmgdpkiVmt5tg9GtPQSpKBcLbqmLLvMGbtReN4XaE5XPha1bkxtBd9PePpegxgUeyuoyFiMhfpFu5BnxV6k1Tp",
  "key4": "do59gmj2BcwDaHD851zqoByYYXwHE9Q95DUmtyfwWNCZvDm4Drbt3b1J8o23EBWXJMFc9oRtTzv4harqKW2wQLw",
  "key5": "3WUh48np2pD9RPoakfFzWSHUPLJZ9ES2ki4KYuweR95Gu4kYPJoK3j1vVYLXR2BVQVnzgwRb4DXYswZKhnCVqztw",
  "key6": "28XCUk3BwW3afPt7KaLDCgPPimktaNf5LeV7gLZoD9hzqWRyr84L93DErwGx9TVvWDBkezBQ9XFowAxgm46u5qKP",
  "key7": "AnT8sZDT23vALaqVpEpNac7mxDeZkUBQY3mVXFxW9VBcQ6bS3hDCLYbfFQay6XnuqS2XcBeeaeQXYGxn7aE6eH8",
  "key8": "4ZmpK63y3Zeh1Skxw7prXfAtA8ZKGW3bryBjcvRPXH8c1VmfvsCMtVBeYn6Tpj9L53G7y94kBvGRbn9V1RifEoS4",
  "key9": "62gMcnWrYFZ7MfnTuwLb1v5NhcUxgNFnUGWuL5teNi4rDigXZkzLa26jUvtFVY6x19aHqYFC2ZapZYxUXbdzHLiU",
  "key10": "4YUFRCXyrfkY6WE4tiodxmhADoFmH78fjocEjJJT1ATqNJAspebv44sDAk2vke1uJV4o54FFYvvm7RTp4YwQzpqi",
  "key11": "2SkkqjfBz8fuJGeSoeqtMg5apQH34zCGeqfFmQwuBaDyPgjsnRbkfwE12Pi3CG4iRpKnGBN6nqdESRetCmJ75Wa6",
  "key12": "3h1evNJdeMtksa1iMLvCgrSpLd6K2E9iHgL8aW7d8m82yTAQJCsBzsZmHKYBD89bCJA7vAWJLSVBXTE7Cz3H7Kpu",
  "key13": "5x2pKVredag3R9a1BpyFpEtUoQgK6QVSHXdtajwDzs27XxuTawxw5FDtAvVpM1bPg7Eee5bHWomYDie2XHdNx6Kq",
  "key14": "2ixya2j18pPsnD98Ydpuo54S6fQvGFtEhcZ5DDXB6i23QEekrDxCatA42e4uaz5XFg4BeuZYxcpDLeTdpJxHwWVv",
  "key15": "5sRsf6StoXNwMgZQUU8LuiANANtjMu68M8UUVbjpHK2FTgkTXfVUbcSX8adrSq8KpBRKUgaqUT1Y3vrgbH6G1gLP",
  "key16": "2QpX5DAd7CguYu4nbhLxntrRxzbnL9jGRA8qjUzkVSsevp1chtsWxUgZ4e2aQvdgHZ67KYBhS1UGFVpVHvprPEKh",
  "key17": "3aXr9AqJhqZatGDczs1X7BHfyrPDPPfhwwBcN8BZS9fDGwZF7WGcH8Gft1kQYCWMxCUtR3zZvYxFgRrrrsJyaJBv",
  "key18": "WB41dFmftWe7bU84tw8ujD9UBcmtYKQ3xwTBFA7MLgtHW43XfjwvtXKjL1PtQb5mhQWHm8QsnZPdqV7eiu86cWR",
  "key19": "vCWAo8jU9eYCTLJYyvJTSKQT6eHkGQbcgCexMhxgJNkTreHD74aftydSboCa6453Kp72yWoB4MQS1THWe2JgBCH",
  "key20": "21yS9UKjS5U1VRbgTnBEsaqCuejaM9QZzBBpPHvC2UTLisKRdnmQnkGixtsRzbuE5FhfoKaBtgoM2tQV8DqdhhTh",
  "key21": "5r1uXgFVdsF5F6cs251fAjYPZjoAztUkKxGc7iiDofYsC4hCJBmVKbtAveCfmvb4SfoGX3YZV9k8vWjMFNXuGNwC",
  "key22": "4HGHxVojLpnwT23SnKmFWQ1XY4kLP2pJqs2fWVbVdzuNWxZMtwSbYryXmsE3M4oYApExB76vmm42VyzLRbef9PVF",
  "key23": "5A2copDeQRR42uVtbU3cNxJm2Y7BpuWJc8U2Rx7RtcjkiZgusFgz64qWMVXiEKhfd6K7iDZ916ghLFfNuWrsnoNh",
  "key24": "4kw4LUe1jQbbm7AuQLdYSLUijK4SoQkgR8MKVr94oexmgTxo3CmXV7PcWpb4NtitUNsJ4Wd42futDhGEpNCoCLz7",
  "key25": "5f1CFbkKk5PLCiCcuxtV5DmwWZGNiy528M13PTLHGoavxQayw81ZroLrrkMJfyM1VkbtRsiwBRK9bQozQA3BB8Rp",
  "key26": "5TxN7xRi87BUw68y6SwLz3ATmZ3TTmZXurvFNaEucGivjCUzHGJH9XMkXZXKpqmbT4HKf2N65JMS2wAJ3NJuDV5v",
  "key27": "5brjW6VYjfnQaZm5TdEXmp2NLDdgzXcxozmxns6up6aZsfPEN9HeEz5RoqsmhYVpk9c49Gdjoo9NahUNHbem463s",
  "key28": "2zs4KtQcYeVaxwBr4Myie6cf4htcJFc1eNpxJK4ZKfmtSzTyYUestPS3dc77WiHhpmahtRn6YJKA4yQN8CJMzs7R",
  "key29": "a7gYjtXLVz8uvpHrpLufDjmT2XUKY27QAtr3RYjVp8gAFZ59DFMzXZ7bVUEAp3yR5g8GjAYyVAtRcrnBctsCcWn",
  "key30": "5ZfeqD3dj9U1VzLw77FDnioxX6dFtiybJynHMU1BMhwmXXSDfKqnsGP8PrkGQ1Kym6BUUYeY9ENqj5TM4MQo99kV",
  "key31": "2cC2JwewWfYikzFEeC8TNCuTauY3LNknnuPA4mtQNyQAZUVh9fKS9JdJPfpiH8Vom1mQSMPJDF7rXL7EcZwwvehk",
  "key32": "4q1qAQjW85shn92p1Qgko4d72Qj78tdHUMvRGRzZh8jQ9SoALbA22JNVR8jqczifUvzCEGATGRLC6oJ97YUwqUKk",
  "key33": "4ZAS9DPdL5aEH4k9k4SWx8VyeS7jsBRVUvUgt8s5amASAJxcCPRZc376HXFCpy99L2H5uv3CSupd1WtwE1UhKKHa",
  "key34": "2rfZvsnFgUNbZcVcvLZVLRYMW9TRPU535CXrd5ipYrdeLtcUkMxE3wzbmprjD2PCbsej5Nykpeciac9A1oU3FBUL",
  "key35": "3GTmD6QMxHnGCmEwk5cc7MRd92wWLbCoX4s1YMazbQ2LSvN4iXDPdjLG4RiHxpSzLrZNF3jGUyG3nNw4pEkG5phL",
  "key36": "5nLgzmNmBYUVF347FWtmQ6vxWMGZaqcMFfhShoSaLxYrzJCAXjg1ACY4TywhaMiyM5dsJc9DiMmUpoeAJnRjBCES",
  "key37": "2Lg7J2ZhRaw2W1c2wK49aZCvV5hbArmdDLiXQtKsFxV8egsBE7u8pJhkc3xBBkWfSQT6iQouppb4JivuFGsxWBav",
  "key38": "cVczmL6HKR2oD9MDVxxDG8YqjFWUityKW1xrcBVnzUvwxmZf9SNiD7RAXwZb9nGWog1DvkHdtYDKkpoQZyJvPnc",
  "key39": "jPMEdouwCC1gS7923BzoR2QRhhfQcKVvPCCpCKNR7xLm76KukBJ3hjUxD6cvgcvLcYxme6EAqXd1fhhfgN8MbPj",
  "key40": "4YF5SqBF7T4UDqgCEggY9oEpXbfgnawb799pcWoN6mxpvnut4WT2HDmE56XvkKfR4qW34siYbFLHGSGYABZXtyao",
  "key41": "3uampMSTcbWVcwMCEqimtjCkYBLtZ6K3ZowXcsfpZkfHWL8RHRFqGFTsCjiKwMrNyCENHNKdK9BCkrGrh1Kh6dEh",
  "key42": "4v8wpm243YWsVYP4gM2jEjQqwGLrdDcBdZe6C36o4RQ77UvQ5QTJCyjKvRuHLhMwUySc3Ry8Es7EXTesSoQXxkuT",
  "key43": "4fPHJb3jv5kbeZ7QzoMULoGJtJXShpVQxHunvxDiXEFXRxmgJyMvGPVR53VV4oPmaUed2qbbggLV3yzk7MMPT7TV",
  "key44": "4KSYfwKTy8CXLDzHfAzznpRCP9CzoizQDBjfT8q7qF6zvmfyznpMFvH6wi8YmtKms3c95q939Rsuhatps2yTBnQg"
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
