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
    "4AhikFA3SCKTE2B6A58iuqJXcX496pAdfuUYY6GZMTBNzEdPynqVfbKPvtMxfhDc6fx6Q74PwHkufJHgHYcfKsGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ao5vVL2CVTE6u2mS6sXQ8FYp6WMNUBHa1Q5ZgjPPkxJCw4ndkLN2FjbwA2ANWwf8nRv3n5puLqW9pQSPZXVwtEL",
  "key1": "KirEi5pFbL6PtmJHUNySDNvHLEMu3e1BeSRTZd8tPrx6TomaLLoiDi8z9h6YQJNsf3KBfHh8fHZBMcxDag6omQt",
  "key2": "47GYLCC4qoBadVYMkaRoLR7pjRExc3A2SBWwrFianA6XaZBKGSK4ErdaYJ1Y5N2VysE2NeojfzrMkzFV7vzp32Jp",
  "key3": "5ZSMx6uGrEYduPrXmxmLZug2g3nVUFspveN1LRbVpAacLdrheWVCr1a5rBB6ZqnZq3ptjsa3RMubmtawdJcbDvum",
  "key4": "4kMFZANUH8MVUkLS5MnuG9exHznvST8pLbcwdjzb6qAesop3DUw5BwzpdtgSsSEwq14LPUWp1fxYhChhzAohCEEr",
  "key5": "5xS5s53Pay4BrUjNK5Xk1pZcSNSkmngR5WLLAKeMhdx4haSYnmFDwpVFEvHXLDYi2Bd4McdcC7gaF2bFhgrpWcVb",
  "key6": "33nAL4nxngz2dGve9NFKd4Q4djnwaLTTgGsL5qsRDVFYyYVNpaHenBXG3RNdXq9PzRDyxK79qAxyK98LSr7z4stq",
  "key7": "28o18hcRf7zqxk5RHMeJnTHVeVWU3YBHUTexhYrsvypF1rxLzYd9u3tYSN1SmZwAfgFJCC9UTFzttMtukpfVEHLE",
  "key8": "irgS3uhFesVHe8hdnqawF1dhq9d9ibPxNm31kufbkiQAVtx7WWyhHu1xSDWYdJ2goXmkXUQTFbxuVwjWNxWzRrX",
  "key9": "EBLDoBrV8xvx2tbVe84mQK8MJydHBWvTbD6BRqwtiLiPJXju5XSTAC2g5icL4rsk4EEmAmg2c1psAku4GG4AvzE",
  "key10": "jD41y8yXEkUt78P7618jth83q4BAPXdz45QVPeMPCazLtePCDdAf7r5JKTRqVe9y3LVo7HdSd3webS5Gna2qBYH",
  "key11": "22LXWxi5YzPtmqWcrVYU9RnyUKdT5MkE1EMJHqRHknvUk1ib874kNe7yZ7zY7jzVv7BeXWW6MtAFWY3XHgLywsFG",
  "key12": "26R6FM4XL1DqJfwQ2SM3MXX9irEQf2vmVBawomttdJ5is6ERex2ne5x7UbaxrXnyBHsysbiMHUkwzaYC2k99mcyA",
  "key13": "2mHUSo4ZmZv1q7FHT9aREsBbkDEchZTKqtHaT8fnKpaBxA1JrYb18q77EjSWZTM8rCBQckAcVt9QZhu9FnvaQBuJ",
  "key14": "5sqtYCKUa6XgezbjDZ4ctFVvdMPYzYjRuF1EgADpFaN469vLz1fAdPSV6KEjttokHk3dpb6bKpsRNtLFr4SdvZTE",
  "key15": "535GXtCovvUktMa6nnbTvYGQdNzNTvsZQYSn5H2CNsEuk57YDZt86BTF4d9gtGrn3SQwVdFmZaN2muHMkPzxDskJ",
  "key16": "EX12kpMQGmEAtta2BgRubUQNaWsSxZ8yzxgUz5vNKVLJqD2nJxA6NRz9kPsF1N6XhuYcnaWTwT6sLeEhFoBFkXi",
  "key17": "21bkwmgBSxgHZpjV6DkRETBPnDXGrUcjWzKisx8cHtKybSYB67tNgRNxh4bqbDDeHVZRj5ahXGUKy4iTHh1ZZiVq",
  "key18": "3dJn14nAUir9XpYWsiLLB59tncvtwuhNpPrsLycdhGJtEobCs7P1DPXHe56ZedHbHZ6qKPnj1FxdsfL5Cc5N5M7D",
  "key19": "dNpAKfvVgtNdhbTb7vxuwu3rHLfNLKau2tgu2FDMnPUDL5J7czrPYd2K8BoKh97UjgUCq2YPhSkQKasshfFaWyJ",
  "key20": "4ShatgpULaKAxNCVXEP5rdHKAvsCY8u98fzpNDm78N6pQXedBuUjaKCfWuz6rz9DGXRZ8shCdNNCztgxREsiP4iW",
  "key21": "3yhTQbLEzdP7C2aDtcmYdMn22MWAuHc7VSTayRw5Qx6GTPS2JvrCbhj9W1maEJQdasGSnnxPkB5wpEKw7ScvcySt",
  "key22": "ye7BAHT58iJzj9FrTKXtgsjuDdJsXKEdgs8UaXrv2sFj5Z1edhNErFHcykWsxzNgwN4j8B4nPiRUopq8i27tZ3L",
  "key23": "3WHrgdt8DPWsrRjYcwA9FrhZV5TVVVLziB6Zkxskrm6uvzvL6XZuuGRaZiepboGRXdij4cmhJBYLBuDceEr3YVHW",
  "key24": "3s4HJFvbmQZKTW711n3Ex1CMKnxaBQA8rCtN2uFUZswq7vyukjhsD7NvZ5kVrRSmGyHzUp28tY7nER3v5tygth5q"
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
