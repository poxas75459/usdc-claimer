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
    "3r3W3yLv4zJkhZZs4PUTU2uD6LuXLcgJPLTH9tvAxwwQPGNARxNVefHqa5CLQrVZ475kJjWZMNnm7StJnA9wpFbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9rcuhqVFsqZQPq46tLkLe99P6nXpjaGAQm3Fx8BcKSgrbXkZeosjHpuzGSJpW8sArYH3g89gg6JUvxKrjjXH1E",
  "key1": "MoYLirgNCcHpjS9vKP9u5GzdFK715ziXddZhP7eTeGz3X3rRDhhXjqXbiYyN14RW5FCwoKGL7fwELkxgA6KGJKs",
  "key2": "GtS16AiwAXghnRUt5EVSBYPrM714LaYxUbQfDoVUNiNdN8SvnrcbwVrP5ZcYFuCNLpYR5UttLEovbfmen3EPdYC",
  "key3": "2jPCFXiuUVScRC9daMiHfdDwxNgpcuxZAFvGf23JRPBdUejPF84BT1fTKn9dkUFwfjTkX8sWR48YTB3qLeAkbqg4",
  "key4": "52zVCQWeo1k1dxzvhXT2bkBVvJes5NVcxJontChAtnq2uwe2mCDGSUNJexUA4rdKX2XTTUr3WQLEFY5xbWgKbTF8",
  "key5": "LNfcrcgUe1Y62NQ2Gn2qY9AHAE4B9eJnvh9SMkd5AzXoDcMCPcWAGDJFPXbYcj1RsbP2n2cucPLBts2MR58TBsN",
  "key6": "5SuhcmLjxagc4gyvLEnXZrGBDCkeWCUiwhc66gQPHq5bLd5uqR2dbQyLpY6phqGCZ9zGfWorPaLGvhXGCpmNED8p",
  "key7": "4ES6Hboq1VishgC86U2LSs1mX7JaKe6J45FfW16f4oYLz7EFgYNN7fVvqCfJvPj55f93QyGzrcXJdywcLXAsYHqq",
  "key8": "hBL4LQJx3fnu8jyFU3M9KZGG8jciwEBgMKG84GnVd4Bt7YwPDqtBaasH2YydHkRqGq494tECcQtzgqbK8T1DN1x",
  "key9": "3ZqFQbutoVqGbo2zpEkhhSGchYuCVKSd4qK6P4m7rfoD3hDtnsoYgQPEKuPkZGcTNW3Y9qNjxQJiRDVuUS44YQAy",
  "key10": "4tkgSm1ozgVpyPweiqPbjahxKfv5tRsLZCmA4pyZQisHEFm2oG8s33akABTFCss9es5GUBDPzNPCE9rpMjm6ZmMm",
  "key11": "67nbPBrUPdV6vQQEA9CZ9yBwQW98JyR2eYvvEKkRmrnRutMJQJyVRE8raYxfKEtMLGixRTyriXicNEe6uKnpHxyG",
  "key12": "5U6rtumF2cLKwkppQh2BVfg44GjSarUXcUHU1UeNS96touxA7kgPF4x8A9KcwNzcW5HUCmJ8RtBSLkK8hLgRnowV",
  "key13": "5Q464rKqzpvqrXTauQEMet8McBGDkTEVujthwLFyAYGFo5HS7k6wHFrB7W5A91hhon15m5ahoeRYoVBKwfMSeWDA",
  "key14": "2PEMha1ywAHB1D2V7U4KYu1SJEutrPd6GBBFW8r7FvFvu3vXyH4wEeSo94URuPWbJgFc7kZNoDCzvKFc9PuZnfYV",
  "key15": "5BXUrvykY3G5ZgzQd836Q7fktvwQMrCR5k3YU23mKHkB2JXpjis3vP8rrqGcsUJpkcNQfxRbu1Dat1gW1e2LmKBY",
  "key16": "3iN7fkf5FcDgjvTaT7ZmLhL13rDau5Unwqv8ojFz62vc9JjRtpaDBxUHddJSKf1Np4Xn43515zuhZBNDyECxyuQA",
  "key17": "4k2Qk69YuNQuWjdbtVjeqExUfQZtkzwgdnVwZzFH5YN2jYcmXryyovPEXnL5NQSr1h6eY8bc8vb26zBH1McW21cT",
  "key18": "3cXcwxt1ePbUcVxqxxw8SXX4Bqf5BdQTunuR8ZwiVtXKiARVqQzmpy5FMBeveocoByCDof5RwEv6gdjEdVzRu5nw",
  "key19": "5A2qwdwHD5EiieH2VqKLU1i6br1CFjGqmjFb4EkEv98aCwtNFyYs7Ds31As5R3tC5VGfj2GBfM4KqNro3aF1ztVe",
  "key20": "5cgstvXTaVQGpzeBXNAC4Ht943zyT6mSab5bqR1oiBwsd3AVjCTixpKLATKB8FSskhQAFNCXxbtNipDYujxiJXdF",
  "key21": "2N8uKmE9vMRUxW6rdfGeXnQQ8TanDEKSd3qXTePc98dKqHdLSkvMiLQMRZgFy495ba2oxc4YXtmu9ShDbk8nyKrU",
  "key22": "5bR3zR2zu1vBUSs1377pfuhp5Y3WG8iuuPzJkmzBgNWiQDfmVwaAnwTQefSLGxHGV2UjU5C7zUmxHR8UMEUPdA3Z",
  "key23": "i7ibApTZus3nyepfctPqM4ZfDjpVap2vJMeUtBbCsNNgFo2NH6YTLw9VqrquZxJEke8FkhGjeG1SueX7vYuUBWr",
  "key24": "2vHYCHQzk3ShujbYAgzbYdqGqr8XH2Tnn4RkZSnDFX8bJaenzp9Bw8Gon5NFEXaGPxDpj8WrCuNv9tqugwc9bZKW",
  "key25": "5ZbB57RbKnH7EcNCxMHwKnkAcyHgVu1Ng8dzjcRtfs5qns24phkhGVAVhAMwj1F3p2S5LqRMXyd3jaf9K3RSLqQ3",
  "key26": "CWV5uxam8P7Eg851HS328U8ZbeT4dYvBySjGz1ndFmuLMSJdNsrxQobGeRfgf24nhixx8FgPLLnDSdncy1WViDx",
  "key27": "2Hu9JS5qMXZLrYQrNf5sU1C5MgQHe92adjPEeHdA3gqF76Mzt9k7GPhM6VXFZu5raUxaMfffR5LzanUpAVqP4dkx",
  "key28": "5s8caaaD1g12mzHgnrg9gJ2BEYATtNYzWcRPEpuxD8ourrTCajRpJWdd7GPZMcng2tPjMA2KQnTUw6vSsoBRf4wa",
  "key29": "4zmYbL3hfLsbQykkWgM1j4sFEPCgZCbupX8kHP4pgS4o2PMzNVDoHrpCD7xJhHdTXeBvAGA3FqktKNskixR5GYiB",
  "key30": "3v5JCbXA1aB53jkft2cupAY1xWpetgWQ945MU2Xn7jmXA5thFQ3mYzm1h6x6x3sjBMVnQ9eBKAFCD7ENZ9vw5UQk",
  "key31": "JReznHZxxhzXyWg7KioLerkRBsMHVBPs4dmconqoaxRNxpnEx5upkHktZVRG3fAPZUPbCBKr1gH159xtD1vvjes",
  "key32": "46e66JrRxL55aRbpJrtfrYp1qeLitotqneEXjBaTYFyFDtiuRkPMkR6KQjJAXxzJ1oR5xgraDZkDYReu6bq65TDQ",
  "key33": "2kDf5bVPx3ukZc4exYGjiuTzFwciPJq53QKYfzcqasJnkvGxzmK2kbH1bxkzTcABFhNNjvmbFPaUKfynxQArM18z",
  "key34": "32syLnTYAJLGDHLnWqch525CbK6KJgZ5153XAXXzTaMtE3sXU88ckQKXs3FC6sCVQBq2LJogRjcJtJbRssi6zmzS",
  "key35": "5sVpuoM7WcN3vVs9nNsb7HP4CBcT2FrH92e6TGU1nvFUM2vsGqXnFJ1BF3yXCFDvNTzifmQJ58B7CZu6j6QZhNS",
  "key36": "ijGvc5XxXRXXdLnB2tTrH3zN3AfBM1rGpyhyj3d9kaYPFyKoE9cN4VVbSdJYC2m2i1DKcuJv3PffqamZw98qNk2",
  "key37": "58uwnMjVc9ZaBGiEzDbtuu9CFrX9Erio7YedyoZkLhEbyQmJEvjfkuWFXHDUH3YEsmLPjF46AFohQm2nZd1rkHbV",
  "key38": "2kamjXnvdepL2QKrR4qMvuTRpSxVoxKKoN6tqAAV6jkajHie8ybF91JYvP9j9Hyyky7kCnrSxakPJZZ5zeBaVVrB",
  "key39": "2Vumbf4iBQVKdDCkDWf23hgWCzjH9GjYo1Zkd4zarXJKCF5kU5thBVUWw4Ej8cFfSREyY259MGb6Sg2BBKXAR71f",
  "key40": "rGfVA2Y9sUyAeVDJHs1hnMYw7jS5eCN6Bim2bhiL5fRMiHYdsjiLqHvvW2PHwyNeLC4iwk3qEvYCnSnAyxpprxu",
  "key41": "Cmz8c1or74DU1CYN7RAqvY3bgbMTRMo9L2FmC92qGYD17T886HJXeEaoCHKR3RvN9ybseT3LgFzr21hnJf3cfQN",
  "key42": "3b1W3FVzBM5PCWExWZs7tEBRwXTt2wRnz3TGQjVz7Y5JRRgDsU7VHHbrXk3d7B7JrsDuNFAq77Qu3kRA9HXz1nyX",
  "key43": "2b8CuHCb2o3Az2EK1TwEhHXHpSGJXHrTKxfm4FR9MurFFHgra8iGQ9vBaDftkWAmDmQ8rJfSmnUfDJ1fi2vetEX1",
  "key44": "MgpGD9Nix7fAyvJoseLnu93H8nRydWj4BFRnaL3oLGahpA3a19sW6ALoaXAauMe7orz5pg1rxgHF17iHUoAbS2u",
  "key45": "5k78DvMxKvX3BAUfX1RduMfntqvy3WL1vG3cvnpCKfYxi2CTuL2pSnzqifpL7iRACmsucCd8RTiVfebkCChVLkUg",
  "key46": "3uQYr4dHgkBbpZZbtHqSWNzbTM6WiLqcSoyEDCD8TU1RUutvAHvqsUe5CDB9tzhpNwVjf16EeFvougGg71a1Tu6R"
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
