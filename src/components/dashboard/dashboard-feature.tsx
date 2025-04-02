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
    "5eSjeYGrKejSQhzhBQgiA5WFNNJMp3an6B1xaRSuADvavynsyNLqcRwRqXVLtrpSfqsf8Wo6h4XpdpYPaeQLV7wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GRFpkKqkNW8kaLa23Hsb7CF9a1pA4d3Ynai5qASNrgzYmncyNhvMz3xf3eJeJNcKrtu2bm5sB5N13qvGdGCjdMX",
  "key1": "62tfXE26Er6N98xsGMk5zn68dqpuLE9D36Lvrt7V6nwnYsaUXgBSZ9JSbhrCtu22cErTdUyBJs7yTfNCgKcyTzUH",
  "key2": "23EZZi59FncZmmFU3FJT23bke8vSC75TGDZmqipowLvAmFrA1Z9N2kS7pqk1e8GXmez3y86XFG1GhxhTv1iyvYXB",
  "key3": "DYanXAGbBVo5GaN7gJfBJmSFW2FhJ5qNZosaFxDKfLHyz13BUsPbBGtKgqPucuMNbC9hDC5bvFMTJ9L5VkUwQ2e",
  "key4": "4Pg9RhZ954TxoutLP2VNdwjFewBnQWuD3iG1k6KcLq5LPUDxSReRrVu2VmqpTzcYs5tetEdcum9zQ6yLJMiNerNQ",
  "key5": "3TtYRk4sbqDMbCYMZ8ayzjej1jG6rpvxN9woWLxzcvE695CeqoThyfQ9H4saRTZ2XUzyzHiRse6PR6N1RoeAJ9Wt",
  "key6": "49JUCqvaCRD4hYpZbnSciKEJJcYwc3Vm8WgVHjVjdv3oEEqzeZyqC7GZFen36Fqb6YuxYVF4SzpSViXktKxk4ain",
  "key7": "2AwKTaS4bSC4yLc9KnWPZBZ22gmkqqDkAWi5sppSvN69KFxgnALexEkD4G8uuWkppGrcKC7otxrbmDZQwFyGKFbj",
  "key8": "3Vu9U4VQUbReBLt2denv3pLj3JE8vK1PVLFkdP6LKJUoeW3g95sbmkzNN2Pw4jrp2gw69wi7hybX69apzv6UnusT",
  "key9": "D93DytFYgT5LZhmkpuZPHdBB2vUkUtfKNGU4KW488xW7Dk7K8rUXd9BDqnwfKUt65XSr6Kxgd5jdojWTJppZJM7",
  "key10": "2apy2vZXbF7WRbij46KX8yuuzngyMA1FZwcNP5AUfuiMMf82et4N8vz5J6crB1bWBKBuXp2T1i2DLsnEYve7eZLU",
  "key11": "FJymzi5xPMQb5qrwJjt95mYLYbLV8TGaicDo6WCN1wXQpEtRrmag4xxdLSKRrqQKrpYednV3fWKHxr7mph9PJKn",
  "key12": "5TNh7QArC4K9ocBRk3UnkNvZaLwMGttELvHC4BDkCo3gstDaa4ShY5bZrux1bCh39czQHaViQGp5J98CLRuMSHzi",
  "key13": "3MLHpgZ9E1t9WQFhSjq18DgvramsrakuDbVPD21z2MzJgqur77Bn4iYLWfaYcCfAr1BxkFoohLsHYyJ7wJ7qp4oG",
  "key14": "QpApiakdbehaLzPzcv2NkAHZ34jGD7SepbeCRRC8A6oJLhgFyoTWNiPhfcpkj9AeY33zomWtULLMto42ewoeh6q",
  "key15": "3ivtjyqDmNahVMoGniQy5tr2juK365QmGzaJ4wGnfXZnywk9pxutDUCE7zQr7URuwYLMh6Z1zm6yuhfjRAqKfGSu",
  "key16": "2BjL1A92ywMKCQSUmbawhVGYRMNkEMnJdt2c2pgXoQxmYTkZX6DGv2pdAnRQYPSsCKaFR37UVYsTZPeiNgP4StMh",
  "key17": "41WmsMSybKCzELQUGaF5syWEQVWwiPke1timn95rJFYVf9p2xaiFqGdgbefZwSakdkajNo8hq9tgrXfySfTgxwin",
  "key18": "3MYTXhP9ZfKhsk1Yjz9ZcFrQYc2EVVyi314CEFT68yyqavXfFZNc1uN6Vu9yLmvLbknW4GwpGsqxX8UWQpsC4JHg",
  "key19": "2fcSrt2sL5vGaNQ8ReEfhpr8JRfjpY9mTy6bNXZ73us8hJPVu1Y7gr63rj18eJuGjdKmgftdryuoA8eSVRTrhBan",
  "key20": "fh2qKGmdtzLwvbGqgQkeFmmqfEEtHv43KiDg7jGf9E1igHhoz5DdPUg3tizrfUH8ETzdnunntJKkkX3TFW4AaYJ",
  "key21": "61LKLUfy3pEUb21BjiV9UToK8bnL1vasKAEpniY674xBj8BwfMCVqnpaCpd6VxrEz4rpmAnG78PDWB8XdTZtbypa",
  "key22": "4bHeLYEjsNCXsb22t7ASfq8yZEwLYLfYMUvrGZ8XEcHqinCFENvLQ7CAm78iiNKBJsDbTUwgPKp3fM6x3kg6XKFj",
  "key23": "3vh5YD2Vgkw1zDU6YqVyTqsWdaShw475656RzqvRWVjW8QekLM5GFpYsohChFShHJb6eGxjaZpP2eDzG5G4dh8Xv",
  "key24": "LCXUi51h4DAaCRzT3EoPwi1UKAmdE5DunBUnnVD78iAkKo3ykyzAYFEawpXhrQzgx1j8SAmPCkdjJeJUb1yNMxv",
  "key25": "3UTG78tEPqxs8dLaGPEzuBJfMhf9rmiiz4YqNAAGrP2hgzTDWxtUGmJCsMmoFPvq5NqQFaCskbyppGK8GyXtjgc1",
  "key26": "3V3mhvvKtggnjxDS4nziFX3TpQtd8vZ8wwExmnX1A5WrNa8hBb3eXqvAUuwYPcrksnwWY5VfE3FsX1MfzY1fSswV",
  "key27": "5TXrZLyYu7ik4o4kWtSDTQK3cYo866VEzWxnSRUpDmM6fS4DW5d1iZo4e4pgG2ar4SSTvXi6gj78MJzBJ9HP2pnF",
  "key28": "34efBQLsv9BNEyNy1iD95h7X6PKntmKJV1n5k5QJ8GiNzvXGcNVoCq4ndMpucmtoW1Q7GqTJNs4LLniCVrP1b8UL",
  "key29": "4jHM2jcfEKP9kJHmBep4CCXuGBqW232GVcjrj6JiL4zb4MG3nuDdb3wW3di3MfznPJeRWBrM6t2FUfG6d6mMcnmN"
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
