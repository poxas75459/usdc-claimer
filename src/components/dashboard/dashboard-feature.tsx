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
    "J7EjXcaLznNH1USehfNP68nyPed9DgvM3ZVXhPc84b89gZ1vL5KByDdvYDad8FP3kRckXebdD58kemLA6ksEEGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6TL7hRdD9NFyHZzfwuZ9QaMPFrbr1zTaVkBTdBDwe6eSMpjuXTvpJb4aCeVXeKoWp3g6wCKUDdm7immvijC4bj",
  "key1": "5BXgUnjNvFiUnoLenUaQanmvFCfsASkNwNJWXPtF9h7pPNpFekkXPSV94CH11er2H3GRnhDkzLzmLZErKRMufS47",
  "key2": "4bbvTQ1o3fEJhDDA9EoDNHfqG4aySZAL9RsxywK8YHBoDunuX6jP7iVk22QbGw1ngDET1ixwdoefS9abnxGq2HUY",
  "key3": "35vgfU6pNEqYzKLMGcFiZKvQRer9GMBzZajhBpiR72fgCDj2wLPZxiNsTkLjgXVj1Sm65Z2xe1rxwjVjMnUv8ADE",
  "key4": "4K894CtMNqF4wkew9RSjXCEbnjwx6PEQBsahvQZgHUsph7q2ygtnAVMHtZparFCHhQs3atCd9ePzdWxSpqTX1QqM",
  "key5": "4SzxbnNy8DM9AEcqf3m4vsdP3v3mRY5qhx7sfmCqGDkyEWXVjic1d5KycAgPVkXdpLRhcweAWqYLGdPFioVmDQeA",
  "key6": "3PHtzycRJemiKe3s2tSJdz7wC1D56QxJQAoyqpGA4m55wkEQVc3a7GCLLCCy66Q2UoMaT58ixHygyhACiqjFFSU1",
  "key7": "5oo5N9MXmqUFc3tDW4VkHHs75Eu9RBZPsRkAgRVLipUioErp7eu4RbCtk4MtGyWCnPhBiNR8F99z5bEKzGzyFh1e",
  "key8": "LW4UPnDvascFCyydPbeDWtgtTUQCMVXrkzbrxUHxwBA99xYVcfQK1ssbb1Kwt1F3oUXEddMtZnVkVFPGV2dDQwu",
  "key9": "4rCzMP9LBNen2gzaoHeHUsoanCAbogV7rvXehagZsmmEqzjcFz9G4T2mSKhZeHEKK8qC3aTP4uT7ugyy7Q8XV5HZ",
  "key10": "513SUTe7ndo3vTWhGct1i6WVX768tfvtDaLrFgnYHwgjoTEtX4HpbwZre67FomxDNR9vrQsMJtHtV8B3JSYrJDZz",
  "key11": "2pkaMJCsgsFt5wB87MCZXTnVByQQyydbebSxHbFGqrpj1XPTRDEVTp1vpnQSNNWEmy15SfeSTUDYym1GbabJUCWd",
  "key12": "3CbWBVBNns8MP8ZZRt4CnhhuxDTPhGTegXro8mvhKwg9L3vvp8ZBgcmmnVZcRaJEBpeSpSBkpgVYe5v13ZKZX12P",
  "key13": "2RxiH42KPGRboie2WUxyuJCk2b2jqMcqQMcM9QvbKpmqJuQR5CaXzMJ64mkrNWUWREAL4Cndjf3AGhpEDz8cevzj",
  "key14": "4jFxj6dfDJy7sjJDLUn7otFGw8fSZ5mChMGY8Phc1SBYj4JeY9fFKnsz6P653ASAvtdxG3QHpjReXSLjpzaxUzx9",
  "key15": "59WAJJgB6o56BKPfHzLAMgpKTQURDaSrzWcmGB9xjxqztDnyqWJPBre3vZ312ytzVe7LDhZ3fji12HF4tt4gGTZJ",
  "key16": "5pT8dzkFCmZSpx7DiSzStQcsfpqJeoN5xEaKrQcaqqfyibuzBf9MKKG1a9HvTPFqeBffoSvWYAXDLkPZ6Ezb7rDR",
  "key17": "4VptV8yX6YW13KY4ySKNPzgi9FnEAbFa1i8Q1yzarSkF5GCYH5QRJmvwiSZ4HmgkxzdLm8JRJADdrAt2kszihC4J",
  "key18": "bhRrpx7C4RLrbXnFePfFSJBRJD5td27whiiqXKNXieNdJeXsfykpMQA6ntcU8kTDntohiVfLDgzGydGsz5aS2ab",
  "key19": "4Xtrgb5kxyVzyDp5bhCxjXNuAdGXr92jvy7Xf22WLUksSZSwZQyKDe22QjfqsjyxGJP3nYaukTdctivXjYCbqQVJ",
  "key20": "ZGsB188365UBAD4RdHm18jWe9jF29MepE9gzPnF6W8Uw4QrXxxjvCd2SAWACxA6TUXABoDvfWTKzmzHvtbxFaMo",
  "key21": "3ZvFP9SWSHzyACcRi9xkJMf7gWDhdXfDaE4Y1jPkxW1EDUp97JSWuCbC6MV3qyAR5zoUHKpp5sQ3y3Lexo6aWi7c",
  "key22": "4w7198Zab5bHiGcLjS8D3TLFeX6KziuQLvpBT1E9nyV8ECDJNyti4AJGVqKxhtN56gyen6yQE59LKbcrEEEvUK6K",
  "key23": "LYYm778VovhyDdZEKj7JferLzwnDrDBcZ4ho8p6ZKwdsJjqRAzhz5pQUPExzsagez3eUgJ6zjtp27MczXDRcRN9",
  "key24": "4DdSwcPCmn54D4cxE26USF7h9M4fMXsK14uAkoRWaqoV2X7iFmCzXhRfuTYFJgJ1KogzERG8c53Djgjyu1Ne9hGz",
  "key25": "5kCMrw8UAbF7FWtbiF7gra3AoAB9e3pkzHubvzB4ocQGk5JWLsCK3ti6SzNPp2aMb2dy9vNJudH3Ho3wuzG8qbyv",
  "key26": "3kW2ZHDuMawGEtirtPgx7mqudsGhPWdXhenEeoXqZbzVS9D3zD5CMSrvQUEJp92eyc1KEX9QCAtjktmFLNTDXPe9",
  "key27": "K1KbkSWjZqVqBJnd8NAon1dDkUcLX6czWi64cje7P8kqH47iUMQVKcNZ6AdfmqqoYo8nRJTxxrQ5UPYkN5RAeD2",
  "key28": "5vgomZtGG86F41MdPoFbvmwLpzWKNeJEwnhXPEyRN6euNXzxTBsAPSZDbKxPoHAtSd5pWSmceQpBZczhAHxLeMGm",
  "key29": "3arzkav2xGLwGGD4dbFPofALdeqq9qCaDE6eZ1hWHcyokBYYMnmgFigajsZKjFKmFtT7aFCS6vRTYStzPaLERXMk",
  "key30": "39RKvkJ2DmW8Thmdz3CAout3K4qAtjrDX9PhNQhBELH8cpNWhXyjegq9bLNteNi9UDCdv73CQTLFtiEXc1ed8tgR",
  "key31": "4TcKyEuKHGT49oEKex9jqH4tmDGPwdUDnLPw9bMYzbwqJJeLR4tgLPnJfcn9boWtFrDjdP2tATnkiqFJnEmJB7vC",
  "key32": "2Z8a56AWUpzF1Gw84XKpK9VUJgQmQspCX7hGZNKnJoJjr4tbahjGJKKCTogJXErrgvAyYfPXqkYkoPJhmvNMQjRZ",
  "key33": "5HdwJyMYuJFe45fE8f3vZG7PxzetPQe4RoXiFN7HycvTXtriABXTj7tSW2sQGQ8hpWKZuixJ3YCxSoBoikuwW3iJ",
  "key34": "5wJ2a8DcZT4P78EhqBFcp1bTN3JLJowg5pXraq9RiGYGDUzzfHxhrqiQzqSJoqvdFjZ5Tc2LJs61DLTrvnrh4xzx",
  "key35": "5t7PhLRW5Ek6BLXtmVRBHxZVmqx4TcfeWTKEL3KymkG5HE67gBVCfzhpsSdBm2gJp2wc5r8CMNi7fPejLngonb2n"
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
