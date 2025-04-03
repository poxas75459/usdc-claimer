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
    "5oSCA1V11pkSR8yYaThSYqexsfNYzRq2s2RfcR6XkWaSt5gBz9fYNwBcfcMGjrS75aMurrB3UkKArPHcqLHws6bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474YChBBeuMe2cHD3eVUhiraABsnD2sBLZuAJpSdRZ3RPn4R3SGjxJGUsZVGGppPguG3FydjB95RZvyt49XBdJGs",
  "key1": "5TTQ6P6ws4YJavG6ufcK3nGsfKBTQeSPxm1TT7RBJyFt1Bzp1AEKCiq1rDd27e8Sc8P3W5Wpb7rd6iSdXz63LX9h",
  "key2": "56dqNsKbvtRXpUftJmmuhnWrmu3bY2EdoT2fBpib7NKzrVCXA6jp3dg3duzLwTPouVEzuafU4nxoCqfh5bPXocQ8",
  "key3": "2xXwYboZrEcxXEJt26X2zLZ8ZSTN3hVYGdA26KnAQQpf5zZMn2RQR5kQcArTHMEwxaCjw7uAM9T27xVmWWLZSXx8",
  "key4": "ZZsJvgvEuUt837PKf57GtJVUw9Ef5eSN49hmKsHrdBi6K33hrFbozjyVdUc6iM9yeSB8L1yVum19rvRZK5Jf4Mm",
  "key5": "41eHTFbU88Mm182VbGbniYrbiCLZDjCGEyMEp3R1RjgaNZsu6f2UbzqCGuZeJcm2rv4G6zz4A5i5vYC9DZozRH3D",
  "key6": "5kJAgbV8H79bdPhkQfT7DhvDCQxueRME6JSRV5uVaifYiXAwep4ceGuxKggtQFiBSP5WCvZZNZKXUtV8TxQ5x8wC",
  "key7": "boqyTboeN6k3LmgqQSJabfLtE1KaXHDjVskEWL1oFLLNqQxkV9FhZza5cGqwy5o4mQbxyjV6iz5uZuKzTZMVH9U",
  "key8": "3GohX8GpP6Hjr6qpNKGivQn2Cx4uoSCFKpyram9LjUMubzer4hvRo5gGMSxJWfh7iVa9FrygVmR5Ux5iGPUSf6cZ",
  "key9": "4kTHvnF83A6r6bEfg9yWf6uyECJ6ZgeZRr8ThBAgG7VYzEmc83ns4KowTqX7kRDC4jzyfdMtjiem4Az1DarnJAu4",
  "key10": "yqhtT1gekswXzVbt5EgkLdEUpfZWCkQqNqz6R3QAod9ZrYBck6a8YJw3se6fB1LvpZfDeK2xxvkJXc7P2eF8uwV",
  "key11": "5GC2xF5J6t9jHipFaKEEYL51cNZTHsYfAYDmgM3KarGfSVpAeRoKdVGbZcP5cvzabakQJRTdH6TmFyt6Xu4K2Jut",
  "key12": "yh5zAxw2ajE7R6SihLwpYdVtURD1nyUbxC3EGgrs9f5xcT854TyhB71mqDcXUXCX49ctQ55C3oXN3NcwSde4fyS",
  "key13": "5KuYmfHPs4BgNkmeuhBNmEhEyx12NFHt5kVc5TvkyTPbnpkdXXPC1N1uGMTp69cGmVw3j7H8sGA4fUFVz3h4tRsZ",
  "key14": "3ajWLuv43ogyzkEfKLCfeGV8Yfc7aThbV6EEk6A4mWGrGvtB53VaLdxqebbhjj5C2GQJvGHLk36KcyQ2VQLtPMfd",
  "key15": "aMmf5xs8bpSSy73SVkCuvuPvTXc4YBbTnvAYQwZGuEABTDoXAdLbjTBRS4WoNSbj3mNDVxpRpdxP4B7nMAbZubN",
  "key16": "6155RxstrBJGVbLRREG54juEBk3UGukiBD7KrJuEXZ6iuHu8HeLPi4aP99kPf1XwY24BtpT8s5EJ6D8xMh9BTVDE",
  "key17": "zVagF5CWxJtN7ktoo1zEjrtiKDerjhgFMy3YDXyZN932NWtLrKfnpHWnSGXGSdkJYmpSjCpJpy7xnzh38K3ev9d",
  "key18": "ee6S6kzxn4hBum1GygLpAbrVMHWtfpx7sKnsrzU3vTkTq1ww3CJ9UQuzeqPnvoapAYiCsSEnCwTg2cC4GbxfyMc",
  "key19": "5AYnBPRr1eMb9QhbhwGTW8xcRb3fGyGZrpDFmAAiUvnm8CYLyWtkyp7beJn8zfErdaom7tq3wyr9VENfFg88tRtV",
  "key20": "5Jr9LkHWnNpb4U5mQ3oD3StrbvjQeX4joGiLf1t1G2TY4y8jfxsNxziaFmuoCq7SNbzR6KuKQVoeqCV76v6grXCd",
  "key21": "5qYNaVTwaYZWjjwMVxgqKVqTCxQUd9CL5Kw9pXGpAbnyZabLcqEJekWpr21LMK5NJAN78EXjdrCSez7GwdxLJ52h",
  "key22": "nZBWuwKWvyW8jkseHotQEDVUBc98hwsvscW2AqVZ1ux5rh1oCoYpCbo5xud9fKKXxdBVHnL9MqvbcLQW6agD4xK",
  "key23": "2pFYarnypa2LruWZFCCqFc1rsZWy9Ayi39FgZZbTAYGQrD37Quv2SEbKa3cAF5oUdNndSgG1nmjFBxnfjThaKkLp",
  "key24": "5A8G767vWjkDqYnx5fQzKNHiXNhbJmhX1L4eeCcVjAVnjESrejqak34rSQ91ea5NRhPCHHRQjsv3zMihd7RS5TuG",
  "key25": "4Nu9XNL9VJCvLpGgEsoahcBTT2FSVw6s7aVXzxb6wqHsnGZdj1GWnycFvkguQQ7ktzzP4RJgGFjbycHxkfyPgxEd",
  "key26": "2iDh5dfZY5pX5jrTVVtxVKcvtuSs2RicGb5SjZCWhGznUUNhR5ePGauL1WYfDDxsP3PpKULo84Zh2vMzJ5ui2Yey",
  "key27": "3i5HGNhvFNdPwdd2gXK5in9GXi5j5TctRYoCyii5Bf5U4AaAP9dgei4DS4aKynPGEED8V6cMhXohyn1zCfzdT1k7",
  "key28": "3wMZjSdbX5NKehckNdLXH1isJb3N3wN4qhPrUxg28GEcKAzwodx76sanhNYhfQWcXEJBPd7hjqUWV4seejZ1uHkr",
  "key29": "5LP9uZa5uenGH8JvJtipAFxFX1rWHwVkPkqihJi1fMecriLPaj795cicEoQ1fzpTp2uCHX7o69fyR6oV3KHcD7FZ",
  "key30": "rXKKNqmrRaKbF13ufywMKHmuQAZ1uCzDD31ThqDJUugVt5nRY9zQshGFK9E5QciVjaLSCKkQtWdokwrRbnUHB7b",
  "key31": "4K3r6H81UdgPsQ5NKHaFCn1MB3QbnkFNN4GxagxrBMioHsy9TdXkG4nA25QhGbhnDM1ZHeAqUdn7gV3kJimdLYLx",
  "key32": "4TXvDPWoxrwGCXGnEiUNva9oyXfYw5k97wrnKUwWjAC7bPMT1Kmkgt7XcZPNuN6cqLa2DVe9DLYPA3xV2zqPKQh9"
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
