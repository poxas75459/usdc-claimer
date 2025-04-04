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
    "yXyChr43KsSfx7me8qYmVvtaFGTuJjnhqbpujFMPedR8S88T5LowLpq5RnSbR4yqxUjBgprH9yBc9vXP1exM45S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ozALBLNFKv3imiWjcwiS1NVfdRR75hu7bP4o1LpTubQpSqPPJdb41Yp5GH43iLxUVtsBR3TTyLfuR7T3bge9G6v",
  "key1": "34785xLTK7rsiPSF88GioBc9JSGPaUx6XxNi3poLJo6pZYGv7Kx9s1D4sFMCjkjhAi5hm5fry9N1XdCZoY6yjSb3",
  "key2": "3KUzQW4LvYQkiUq2Hgwkxdu9aGttVd1tb4g9z4V5tx4R1vn2KJ8wYaNk3f96AJXRv91BGLLvHAQgQkPFQP4Eo22b",
  "key3": "2GLvGQVmpdvqooTB9fdxKh8t2LNooPeVpr8WM1QL8cQGH4ajPKYBZbn6mVGd37SLykxotvE6cwVvFTkNPDpqPVAG",
  "key4": "5D54JwbVGuYtNiNBavH9uheSymjDF6q7T9jUtd2m1ZiuPzMTbqefuEF4zJxPav6nc9LvfmHEwpeAmYzECpJwt9sP",
  "key5": "tDPMPuatTmWmbU3aDxeeK6813NhTLNtbpm6bbARLjWA1ZyxVkqdrh7kTxvuiJ2durpLVaUDBZjjPvfjKUxuW6h6",
  "key6": "2foygXUW7BCtjWsTeNtuAG1mAwhwx7qWrjAtQPHV1HaPbjajpxzGHTAHJtqTXy7Lp3iMQiZFb4MTUCxBfooGgr1W",
  "key7": "jQmqt8UE4aT86bUcRnjbRmJeT7zzuVxyw65t7feUCSrHG3ayxfk4uHwQodY55PFFRamvkcGNVtQWAVNBCz7iMGy",
  "key8": "84qU47soQ9zsqmdRyUc6bYdtdBqFZFFzmCjWXiGRUeDb4hRQMHt1r18acCLjQxaUrXkZVSuyvJq3WfgcufuwsT1",
  "key9": "4mi18kmdV5R7botWPCuHNh3vTLB5TPJNwbHjefN54w5D56qpUod7QMN3ceerQdZuzdzveG9qg7H49dXmHnm3mDZM",
  "key10": "51GKvqycThS4ajk6XHYiCBDqspKpChYH9iZ747yvZeDshjQWupdgUMTyFPcHWeVq8Ue9jaPydQDhcMieRpNMGMLL",
  "key11": "41yVRu6EkShMepovPnAG3fqtwQPzCWqrvQyWaNX9Mgf8swTL57h161zEDyDqVtjK4WGrbVMKxCPjrwCKJciXFew4",
  "key12": "2FxSAb2jKF6w89tT8appAcoVzdsejy6hmqDbe5TtjeNTXFEhEhW7YtiAxjiz6h8wLsNPFN7E2E2enfSXVfthxch",
  "key13": "ePeveDBLQm3q1TAdY5jkZfEuZRKdu6K8j2yvipyJxyPSgg7iU6thY2rEUfd1bqqSnEMXR54wgJmcHJ4XrvokvVo",
  "key14": "4pxwhzTGncuCFrN2VRUQSpQufKEA3zShNKn9XvQF4c4RpNz6PPdSqn5X8a4wUhVq9RALiXmt3KSm5S35jP1mWZfk",
  "key15": "4WWnJsUoMxF1ezx6nkrkKN7xSA2e7CF8mdGT6pJu11DhB1oQT9S29NxoMkPAZ32s1M5a5twHKqQ6kU8BVLiRzcB9",
  "key16": "oncKja14xWmjJUF6PKYQGsz8c5XraNJ6gj8eCaUNcDCJ8jCCAfDok1r45dSmpjd9Tf5hbufY97afDC2qkHTARcz",
  "key17": "3zzVJKFNgmPEzsa1NPNwNQGzxi8YHFSPefCCExSQF74x8DZHKNvTqK3wNvW15EyPwSPmSZ8QQiK9QD4Eiifjy87M",
  "key18": "2ejHHYnLUm22S7yFHSsUdY5RYgSNVMVrrNydVFPS8xYqowJDtdEkhNQLhVjxjSc4e5g2WxutQKcXkBpzRAqD72A2",
  "key19": "49ednKpfPwXLLNNHPBJ1XorVVWX7Mp725H6Q7Xn6Ub6kfCvYwwNBtcYAuUjY2h5UdcLL9PwTcfisg864xer8yRzj",
  "key20": "5J2sXZrwg3i5pLcoW4Jnjz22m8wFFd52FkCHFSCcXxNqswMcg8ULk4gEm1o6osyxpXqLYX86zaam16pETNg3rgek",
  "key21": "K1NoELHGaa7bxvXPzUyPRGHBwFpHZ5854xkb9x6Y7ScQtbPScVnz4bhZuYecaC2K1DXaNVbx4FXpQbHGSSbmNtF",
  "key22": "enzBh3AT9Jt1BRGs8ws6uz5d6hvb3deTGydL5wVwhxnLi8QCZFf2CKhPzxVyr2gUMKguDSjMaaizG7mVfWbxRns",
  "key23": "8TsFa9aF485vHNP5jCxw6uR3297KiQoAKbQjjdkSQhjnmUwkVoED9YFyZ9pLH8EU6obGJLgu3N9JALkxAWoEYHK",
  "key24": "5LNBshjHark7h2erJk8xKaFjSfjyvjGSzPixinYBwAD7PRGLN2Fxn7M2ga8YEjwMnNi6wmFUEs9Z6ek1LUXKAmb5",
  "key25": "4g7DDxmn3vUv8RUFoqYJvCgE8gLppCfAXxovidYJASxrWyK7BMK1GKdrrqG3jvs36hVRgSJ6HPFKB81fDk3VJpcS"
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
