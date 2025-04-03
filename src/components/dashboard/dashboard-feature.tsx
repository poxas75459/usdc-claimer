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
    "2TcoAnMZ8u1NTpdN59TdrhwpGPF4pK4VhDZtTJME5Q65t7TqPSX25GQzdgeH8xapvmLgoc5aKHPaaw94dTp1buGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WirfBjr55wpvoHT3pT5pMDrCT6dqyJRqfr4Toeum5apzwwCaJzrz1aiDERySpHD1S8YzqRjtW8sf63NLyTU5wT",
  "key1": "576GTLsHruc3ivPd7J7cJ8X86ZKnfCWuixjsmosgZKWrsSV8sFniQPQcGP51ix87fLYsDhQc373sjnBs1UM8W78F",
  "key2": "2FGKwVyqm8QEQSMG7Bqu6NEpPNEcJT2jTpTYf6FeH5aZQcJW2MksmVrGhphN2BQiiHrks4AmtQc1uZJSXVTEYiEq",
  "key3": "5r72Xu1GYr4NwmAKDR6PdLJKLpqpw6y1wHzaViBBfsBbbybc292BBkDSxEGYUoJQ5yKP6cveUkV4YYdN6KzP2vMk",
  "key4": "3VyLMjR1v5g5oRC2P4ntseN8E3MfrAdcdwknBtWY6exw9BDvVHrU1Yyko4CFNziCNWMrVF6imNNW8SVcm4cYwxj8",
  "key5": "5oYjAZVB2T8WLDMe1MkZAHEzK8jX1fMEsW3wxXgvHT7Ss63yz9vFQ539U1SgxBTDyTSDkkSSDk3tbUXnwory1a2L",
  "key6": "4BMRMcRqnsXr5uhrA6jMdZzcRA35aNkDfiDFtZjzyDvb7K7u34kqSeX9CgaVBBVNzKeRs7bHGJ14Y79xztNjDvZR",
  "key7": "56cm82xvTvicuCrRe7yKY7tQGJt9oQ9XV7gj5a5U36KXpHqFTDgb5iYfYhHswR6ftcDvG2X1gPbWNvwt96hNx5qJ",
  "key8": "5LxE93s4RkKMMUYVY98Nep9niApMUbhDL44mBFJS4wxLowjaRfMw8tmSXQt7o2JU9MMzUwZAj9vJuXWe68gqtjb",
  "key9": "2K6w9LowQLsiUmNRNNYAQvmQRAqwBA8LBjT99NGnxYp692rXTowRG1nhqb2LTqPskeXqXYxLwtYUVxAsdmqEyKpk",
  "key10": "3BSyL5yMnojEHEUE7RbgNzcpcmuKX4p4QYFF8mwH4SK9MoZD3cGeuS6DkANcybX9tdbkXdR9rTTojBWx3duUbp7M",
  "key11": "DmyJ64hGcqQxC54j91bm1yfucUiX99hzu6t12AdB9Hhe39pBi5ijFs3VGoPdJBsNBiid2AXaLBBPz96HKDTbwwq",
  "key12": "dgRzNA7rC5uG4BEeYc1wcZCUGmij6rB7HYsDfYy3WDBQczmdvkY3iH4TYeFNMXg7D68VCzJi9JmuNZWvLqQCwgG",
  "key13": "5t5BQnzSkYa8Y89S14ojY1JTejXi2bqpSpeMpCFWaC7SDsGSEiTSgZk2bwyk6A9ogu4YFai5mtNWige881TVNPcc",
  "key14": "3TAshhb8kAcc8RZHTujWXMyseV7daJ4KrteJS5TX3BvEJsw2K54i8CYe7CU2q2kMWfaNQToyEEckwHGGfzknC36S",
  "key15": "EEWBKHNg2aXMnLNvDHLvLNQTotvAJCbbGxKcEfpmLd9GTdekseHLzWNevsec7m3BpVfyFgQ9LkxjG7wan4B3oMQ",
  "key16": "3acvjkf3xYQBHZCR4Kf5DCkxNn4bn8oiALfi4rsmbQi6otX6B5KQRg1j6e5rCXe8faBqBLFMUvxU6r6ggYf94kLZ",
  "key17": "2jjsLpk1ru52d1cTdEtgfgg7gi2SgjNavpF3AKy5USwGXzzt8yMJs8APRPsiwjqVgix8CBtYeXBcZPeH11XwyKr5",
  "key18": "2GFw4DS9yrpuconrtRDC4FaFWTPfiaq9AKPsCiTkFPMz2R9tMrhKx6dRPDqArqQjre5Y7rTgNGS8zxauHUVKoAmz",
  "key19": "5dkPxBom8u9vPXBphztTBcTyqh731UAkoGokdkcjWW4iNAWKs3sG2e6SRGBqWNsmuQEinDCP96B4AuTwVUNNdqYo",
  "key20": "5pVhXxPP77rp26NsK5nypjR5yFvq7dzhpMy2Uw34V5udeYuATSjLzSiJJ42RYXMqac7Xa3YGQQScUi8gbRo1zLdg",
  "key21": "2FWgW6Tmkw7uJgzxUq1JYcyxoejgsS8Efe2LDGz9GcBHc6jA6vNErFhmVvcKhYKagLrZmjih2MN8NEcCAXoxXXVZ",
  "key22": "5s2PwUYXyPNpMJx3GLUgz9BBnhfF7NqAoTkSYRBSuah14HmLjbR9PAJCKsecCQEqmYB5esK3jWfJB6JaT5d6bGC4",
  "key23": "3f1XdMyNBuuniqK36YtvWkv8bkNrF5ymgAW38nWXSEkQeY2NDnhWVbMKPMuLRfAhYHKDUj7D1BpGWYXJLRmPB3Xg",
  "key24": "4YwGwcwD99rJAk6WYRNhD5jcCXvUZoV9qJ7Xa6xFjz7tB32PTCTTG45aMRBhRYiooeGuf3XsxWqrcHxmpsXJhu7U",
  "key25": "3ifYBTRSJBjEQggPaTJPtGxYATM75CE3aj3WF3P5eGCkWsz5H3Fw7jG8nec6kUAZseuevsQ6TqkVDuJaJ8sJnEM9",
  "key26": "5AFLAmJ19bk4ujozBg3yeaotwvUhp7FmBgpsGyWs65tczfiYLp5MtjXFGYPuzRNCM23v3UiAXL5qgZdRWk49oYpz",
  "key27": "facwL3pnEsPebp5yKSzW3Vc5snvhYEB9QNyXSHfLY5Zg9zmg26vj8aK6hCcu3qpR3gk3tBkUakRDCBLpv33GWtB",
  "key28": "4sjeqAY7QQ9Biz5YTY1YqZzvpb7cmmCJ8tYNjZ8VnfyEJjxM2FMytLUFCKBnEnsrBK2ULm2ELhN11o7JDi6VsfEW",
  "key29": "2zukH6HTCZnHr3x1WQKEp3bReHvKmNd7qCJzkyfaKorTkk9H3z2iRvgKa6Aun51JsPuvDM4FKcbC7nvfxkwgyWDE",
  "key30": "2mnCHFMv2RdaV62xKMVXrtraeLqtaSa9PmnLJP8htmFzRrN8djpNbL58nyWCnrW9GppRm4gg2FLwdYzJiZkM5rE5",
  "key31": "5iC2Vh6U8CfRUKVmdrJGj1LksYghWeQxQjCx3Tt9ehU1KBwCm4bb1i6Me1w4vqJ1Gt9icsrbRb9tc6ru48g7M5Z",
  "key32": "3RBpxaUP6WhnPTr4YHM9ELA9ayEuuESjnuri18K1psABegG7PaV9rwKz9BpzTnv8A5hS8FVZho2pXk5RBDMGHE1R",
  "key33": "3VFTQduCCesVrLbWemvda7yVx3oDh3cZ8m53rPUsdDuiiTHC1UFy1UPudjyftPK5Q3WBFr6nKAQcyaomxtwrzPf5",
  "key34": "R8E66qtitk8ZY2ZoVj7B6JyQH9b7nf5idnDE31omFB4PxVtsDoZqAKRtCS47VeJuN6D1LUM1LiyreFaw5E3TbkN",
  "key35": "2vP4dszEFGB1PBki9uWmCfv6VKQP2bYyh5tLDT3DgvkPSvGcAXRWLqnCF3Bmr78KH2e1raxaGR3QrqJTaTZM7DAJ",
  "key36": "3o5K3ie39UKpnqSPNHBaQTQMXxrLmMNMxc268sDjcGx6fCRJYXGx2pmLasF1s1qW9U4kdddBtSFJk8vgXSu4HDpV",
  "key37": "5H9gZmyU3gUiZePGTP611ZBe45DskfLcswqbEgMSU84L4ixHsKGw4Ua8afzzRJwAr7yaqL7nb91LWLkZsgEQmSDD"
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
