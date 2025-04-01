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
    "5twnAFFnmNNApdnjv4tzcJfKHhDEnhhpPSvUiWMTWHDdjYq6EPsJnuY7EQUaAp3knVK1MFn7Qm3hn9YSRcU7ZriM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPoj3uvbWT8uVttR1eDXmBmweE1HQj9xLm46aRc7C28Nvox893DBjJQc9j7pVgJZqVNtfjb9sHQ27R7QNTwVkbj",
  "key1": "2xqbFdWHS8j5taRC87xpA7dGRiSekVTTLyGuyz9imGvGQTChJURtHt8hUcMuHwW3ThXdLULkymEQv3aX7BA14hyn",
  "key2": "5aueStEwiUDWxN6ZHJs319MXgem6dSxk3pzXHBVn3wUukwuuEudDq13rRRVYLcdCzXb37nxb5TcDzCkBfe9g5UyX",
  "key3": "2ALwjpgGqh8XYXimA8ZW26KigX4uHb5xcwVfnTUBXdVkskiN2tEJGgeYbXm6wBNoDNaHzAk3g58J41jUsBh7uhvA",
  "key4": "3y8kQ9od4zMTrvuQQXaVGYcBArAHnFJUELaLUsTX9rGCo7Mjjy7GCMJJytuLmqkcP9nQMzKK8HynDEpzf7YGfvGk",
  "key5": "3DHWcPrSHVNKNV5GTnpQi9yPZWNe1XGCtnJG2cgbQUaLf5MTrKPEA8aL2qrtiD1DMdwSeacv9NBJhxtP5wPQnxXF",
  "key6": "4LXZCAeRVgeEC9pAUKD1q79uTeMV6fktQasuf27xQXnPwhLG2SuqMPU5vKj7qr1s14Wt84LEua2cdanaQdRHoeXx",
  "key7": "5WPfFsdQCW35RU7Q7qWc5rcT5zNwH9EG6not9sn2U4SSfcHgrLeAbPkkviUavyhaJvqivn5UPEzcVijRnMrgLn7h",
  "key8": "bDXKLtukoKJ6a6GxVa5CRqSwTN4W5eaEsjA4kjyKhDv1RsQeY4ANnJtJ6qRTruQdCYNZ4stzqCpJWYEWgQ2emgZ",
  "key9": "5eoeZx81G4sg29A7niqcU3BN8tC64LsRMLPFzVX6N75RYMWnGDecgwiy9KU6bZYPdz4gv1h32PX7RFYzszXUwNWi",
  "key10": "4fyGTusVDWrNe4r6VqFFApmNwhWrunRFmiuCC4aMjfNCR4DZBRYmYjav7dzKykqu6AKeRtET9gLP6bZXRi1VDzA4",
  "key11": "5FBppAwN8NJeiHEm73tPQJJH6HhXeeYjFk8HsYS5AbTGjpLdUNJA35y8n6x1WuKgseBEjCVRpCuUpFawsCcyNu3i",
  "key12": "4npGWmRbW4hvoj1rqMM2zXPDNk7aRj6PZ1yJDpS7mWBMudBTDoEgQmGksYL1cFWFzyr3BcMrna4GGSkXMbKWvhf1",
  "key13": "4BHNHVgv6rEutmfyFEUa31mNwo6fXmWfMG8CeRVtc37URi652uDBj1mL335CkPj5iraUnwVMG9n317QeVovRCJ6Z",
  "key14": "4qEADNDpiPRKD7f6V6NDXPb9e6yCWdZQDZgwAFAe97pLyyARHXzVfWqnvfouoBKKM7wKujdx6GFcGLQmaXvYEL5e",
  "key15": "4HTUdwvC3fYGxQ4ieU81M8Uvk9DGDYgtKeaVy3Y3oi6zyMNX8PKiM8i1eRMRJPQrPUhYk8mMyBEmeJ2A9sEGrfLR",
  "key16": "3xGSMkwEfVcZutskCZ4HeDf39aTkAZWM5uyZxtJnZqRJfnDRARKrxpnm6zM95m2Wu9dhd194SDHnbJNwokbtoEZs",
  "key17": "vC2oqMkq1c66dmuswu1gbtHNbcb9Q4FvLyN1isMExNR65fhkmpE3xjugzx6SChwYtQTU5TcnXEAoMk8qqXymZy2",
  "key18": "2jrdyaRaD45hnFNBaeW616Kk1dB2N6w7aUzUAHhufrUD43w9Tjr4FW74niu5WmFRmbFPjE616sQiXSN3M5mS4phA",
  "key19": "2qcTGua7DxYSRGL8fSNpK4utjXyCD9qW3LDuLkwTzkNJXwREAeqkaevF2tu1EF3VGmNUZebKY2ZoSyy11kmapSPJ",
  "key20": "3N4MWQBD8emz1Jia3h4r6e75wX7PkRAPyRRqccxUj4Wvx6rBE7WfVv13MHKeR4yqPpCnDTNVqExSdfXFuCjozgm2",
  "key21": "3DbynH71JaVGduzgESxTnqvcjXj1GPhEtfm3b9oJJApPnUksLrYhYJZUY5Srh1czWjZAfjpkGXPP8umqEegNbUV6",
  "key22": "1C9AQEpmVSJ6YDg6vsrHkU9aGvqpHacsHZ8dvsyAaqAM7JhdJWBBzU5f7sWDt7QSqE5LkdLn6Zr7RmCiim38pw5",
  "key23": "5KPCArSA7p8KX8XnCdLZY7Se4WtZVMrscxpmne6S1jEQpypuG7LHwRgx3Gmg1ehoT7UDU8p7fh7UfBFDNxBcqB1y",
  "key24": "3TjCgyatxrH2aDQrB3HNxuCkRZbxSn9n6BHDNxibPL81pbeQHGEitfxUCqKv7zVpuxj87KU4iLKnU7ipXqZC36Ce",
  "key25": "29CPe6sNDFbMbWjiBLU3N3jiAM3NS2Ch8gvo4uDYy9LJfk4ES4KZTEUssL2K6FWo3XUTQUdZuivBo2dLnU674VNJ",
  "key26": "3t2grzRm9c4v2WFJf4LaXvzLGtuLNANDV6G93ZtF8chUGbPc66UWRTLxdACEPogJR5KgfQhz17e59ZKBSqP9G5Sg",
  "key27": "4AadsNC3h7jUnAJZBMFSBXUWjBPfZzVJr2ZsxVJWmym8CUHvV3P1kbpuf7yjUeyJ9Prgyu1MacwPtJ8WaFL5hu8h",
  "key28": "4yHmgVbwWjAFLiMe2GwYSd71EkUXsrv32iYLgPWuypbBa1795rW3DXRKYBvcER2KyAmfH2GDqK56jcbKsRzDwUH6",
  "key29": "kwkcjmpbxVMjaNCrL2f5nw4d6XetRs54b1TJBixo7UtC13eMBbMYrcYtCkayE8J5aHa2azxFkomj88hTEHSzyah",
  "key30": "4GPo3uYPgEynUcpdpGPVYc6t9hi5YiKg5D93gocxjuRi3ketUECaeqtLjPFSoM7abfu8wf9NTNqrq7sSbJTZcA4Y",
  "key31": "3yMC3NxmBjstDACA8VE3EENpC9soLnAMnqKCY3gURHvh1na3TR1UE8NMvyFKUCPNR3Ced7zCK6pTc21KmUiLnG48",
  "key32": "2aMRF9P3Sdzx7uSZjBp9yVnZscSuXvbmakvxmKWevLYhqNH1urGbc6g55kEcTsnnztX6b5KuR1QHRZ42KsGaSGgD",
  "key33": "EALjcLg59P3q3PeRekrv7PoZ2LQRn2WVFpwExnwdYZcZXpTNpxafdCpymsW1G2tzLJeae1rarzvD99pN7PHgRb5",
  "key34": "44a5f539o6UpPUmYEaQiAEmRCbcxMXfi1yNN8CJB2aSqCYUiKFTgVZv32jR8uCM6dDHjzXrxnjf2enB3JZRG5oMe",
  "key35": "2Yn5zkoMfhRwtMFYbWMWPYJQ91sv4D8SmE8j3v1wFwHgKbhHbWbXm5czQtxduoR8uhqZW5Ncs3B8sbNJk1XJzrUK",
  "key36": "4KAKbH1Kcm6oesgAAjGBm8rqbfSdiCoARgVXRu8p5fD11APrcDwKRwmehzHHserg7xnUJc94riRMCDMJV5UgGXQp",
  "key37": "5XD6zDYbayioWzpdavnkeyPf4jT39EA7eVNdpfd4R1mcSSGNRzUQjvZPhES1UJDqeaxerdtSZKCdQpSHv8n62qye",
  "key38": "2HgioDELivtwnTbFsR3L5cuvLmvd7izKEGNGBqx2cuHGgfT73pmBJa3oJ52pmbAY2MdAA7EJv9d8SfpAHHdvmuJ2",
  "key39": "KRNd9FVdJLLhHveA6zQJYyvNSsBKrNS6tUg6bX4Jq4zKhSbRHPFp9TDuk9E8KzArsNKtEL5ft75tx49MewigUoa",
  "key40": "2KeKuaMfRFgFDFuqxkSNe6YtaWWDf3t1xLthtwcUkXKMoXKpoP76H4Q7qiVUhU5S4HYgFFY7Ku36nMWV4y6AAjKo",
  "key41": "51iG2p695XByYH39NHqHMovwNo3r6HCQkgjPpo44ZqyVJBJ9sbuSsMvPQhDUCigcrwyZxS9aWASq8CStK8GgkeHx",
  "key42": "5SXFswBmSBtgYvWQ1NRqAPDLYRHatGk4CjbXXqrRV6NZ9694RApfbhLtEt5iSRYPAdCcQoYvSVfLsBpCsVP1cGLL",
  "key43": "2ocpM6RuXsox6DSsuJXHoeptRXWyw9bDChwhpf4EsXvAgHdkrc5hboNn6y8ZsF54fb6SwgwAs6X2wFDL8yvj7Fsu",
  "key44": "2Fg6sZMmz2cxdRqvEMcmbAZoZFEGb8x6xWMbwKgHh7jXgMLaTqLcTDuBJKbZ9eqhCtuDHmvc6qgYP4ridxP6cLAV",
  "key45": "5tcdtrE5YSWLVdJDnvX1PCGicRstVxvBmu7i39RoubtbHLrrB2E2Locqve2HbgKxw47seNkJFEadSzJDF8ukvKPc",
  "key46": "662x7dxyLp8Hp9Fk6xnZgXzXE9mgNgHaWWFcLPx3ynwAf4vEd1FujTfTtNapJBL9GJG9CEuJ3KJ2eT3CQUEq4Tvc"
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
