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
    "3HeHG85AiJbzj3pcb4NonNtWWjucoPPeaKYSeAHpd6HKeLYXtqWUgyXNFUioPLY17KPSehokpeN6yTiMoAwUBqTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWFhnZwqZBe4gTAwuWDJcRh5VfGUTXXgrvCZJSdHL4iuGfWoXNGkZkV11Eokz64W3EcjL4evHYLfp4GYiPEiMC",
  "key1": "28Vzk9iauDpnGfce2Zo47oEtHL4ZHui37ABaUU2A82vna9iohRDjFxHuNCW3ENfMYSmqCnsZpoSxL7g4W11ZxAbS",
  "key2": "2iPkREEXgUxXQ7MN8coTyUty9fMxug95G5USXZ5FGADopS72hsuBt8QmPP9EmmauK1zCS3eip1UXNhnH9PUddnvm",
  "key3": "41LfMTN1moLPfqSNX3t3wtMqztawWXLHkTbdw9eJYL8MxWR6b5wkLCaoyeTjj7ZUk23Aa8BQ7hLt9a9iBXravKzV",
  "key4": "5zKd4PSfMLLJJKurGioUv5kEBHbDM9vBvJ3HgoqQtJqtsqF9qmQoqqshrDF5CsJasTiWhcLiBXqMSAz5AhxCuYzb",
  "key5": "5heVdATsEFrgkDqpMMXbLnwcs1rk5oZoj16ovJe3y1acNKoXJg1m8pdrUGTqUqBYR6KdMs2tDgarzAsgn9ptQp3Z",
  "key6": "5Hqhkx4CXFboFWQDY6ekb7Zyz9nGqFT5eTFMVQxFw8LCzcmAbicviobfpcFzx69z16Suq1nJiAmnGN62y9suN6Ad",
  "key7": "jEko5TKiLcPgXZEZE4XrAtru56WVubEgU9wCctaDYn7PDJwfyGkHon4dwjUDgB3vhxFbhUuZCSX7iqDpoKmnheA",
  "key8": "2ZSwp1gecfccFTEktjwCiSUdANPtWFuLJpjk9cb6QhgBzfGPN5dvCF13w9hvybLzaRfu39BQPaLEMdWYHtoZNmsq",
  "key9": "4qq79tJ328g9bGC8v9hqaHUqrezuVjeaDu17ttd9sgCDLpw1oRaoT7zXmHjndehekeGfeY5gNN5x7187hfYmLYmh",
  "key10": "3h1VTkjJzrtd977B27KmK59zLCYRdbgxgp4XecLrC554fsaCiHZguMVVWfygJN7W9i321nv8Rf9eRC21QXwo4gUZ",
  "key11": "4B8naGKJQUV8T5XEWT489Gy1kWQUS6VCCrcA8XSwtETyM7D3W9kkc9fE1TcnA7Soei13b7xkc9WoyhCQKRmiPhzj",
  "key12": "5Pb7yKZJiZVm36xB8NcvNtmUf5KKVv2vEFi7JrrqcUjVeaJzPGd1sSrJhGXeeb9JVLAtMNgPaK4iRykHnpVyRjhc",
  "key13": "5TFZ9CuHUAvCF1CGUyHXeV1EoqEn6RstZJb9uWAemNyeTLxjPPqiyB2z1umJtmsugHucp7NA8RbzjPzM8zC2dyhT",
  "key14": "5E4iXT2qy3pbszsXJyKrmkRuSJ58htsR6iNcFarSPQtDr8vVbgLXhQCtVDPognTdUH1xZtDkY4fxsuqHo2hM4TyD",
  "key15": "3734JusLKKMCkkPFxMnz5tKGjnpYqnZqv4mQCNNAKXs6VMtiL2Bu1iE5XxhBgiwrqDQwAns3onaYVtP1gnyyJNX6",
  "key16": "5j8Mawm2FEkKosZLHjTyRPcuXCFsKfnUXSx1PEnkBGem3Xm4zRnHhdrvuJu7Lm9SoohCsNkgHynYYXYCrRhrsWrf",
  "key17": "41Du7HPnztGQRPXNpUv4dvVMpv7gx3wZKj2RrC6oJmgro5XMVpMk2Up3bDjBcCEus39Bk2ebobAJCqhy9tUMuKZY",
  "key18": "4ZKgDGhFmCyMiwLt6vCQR1eGvjcNs2JCwM6TCyGCai7fVcgZS9W8zQWfigKFv1K7aELX9cJ54NMNhMy9gdN2CLfp",
  "key19": "VqrXdwKD31XGygLWtb4QEnG1QcUeLsqE28FZEgsPbkHFrWV4Kd7QBEerSpUrNVmxLu3TavCsdWkxYi7QfTDhYdJ",
  "key20": "3KVHnYaUX5Z7hCoK2AR5AoWNsEeiPQ1Qo9VgvB8gNAgq7JVGiiKeGxvvcmBkYuXjffNCmwcScWk6WdRCpDwomguu",
  "key21": "4iUM56hVDvffVdnLcpP3ceLaW2aqgsK4N1iCVrw1kRKTrAiWW5YGGKxmPPqVbsoMXo2xxPTRVCZVxMAcRuLKXU63",
  "key22": "551MUcV113BWyhNYFrD2RDw9PopoyJehcrXMTs3khc5wFeyvq6WrGEFYPJSynQjXMvKKnW1EmxkQRo6rEgeFQida",
  "key23": "3HZfndFdY6V1cZTWiK99B3eN5SfMEJ13SPFs9m6L1P3CFwv2im2iYN2eWKCcDmDAnXHv1PtiKwc1LsJmX7vCp3rS",
  "key24": "5re7ypLDXRbY4hd8ZmE4d3t7x6uyiLCrRbtrvPzwseQJitneXW3z69woZbwtZdJAHfXkAcT1bfubwL1a2ciLYnS5",
  "key25": "5con5NAocFbCZshBDTM5x1jRPVcGUryPxRbLKVE7ZV67o9P2KxDSKJ74PQ16F2yLFBdvQ3SY37LLLvc8LsnEokEP",
  "key26": "2yqw1X5ZhfTUTJRWetxNgZE1fs286n49s4cXxyFB5WqQNYHM1mKiWoiJ68zEHsDTJCYfDE6a7DYSJa4zPFWR5Z25",
  "key27": "4oSw5HugCp7NZpAJBBF5EYosCwYaZGcr2iJarSfcBaps1QihF9ohTzwPAN8QbWKRM5agfMLpzJm9HRdDZ4RUmujs",
  "key28": "3JNqxymhAKVU9J3LJNyNbTtPeGQkxGFbQtkNWjyu7DnBW62AH6enAXaZedZCjEjLzcaVyWorBxbTfQDbfbvTAZE5",
  "key29": "inmgAMUn7tvAmoUdoxzvxuEVgmmbbMCaAELEUDQYoqkZypnC9EZnj2RVBhJsshFx2GvtNf3eEFBPKUcdjq3Qvo9",
  "key30": "3gfLLpRBKaLCULsqbT7XPeDuSaE3MLhddrPDrLhgjckNyEzV8LotUR4aM738C9NDqVgDZ7xnJUdJLvYnF3DJUi89",
  "key31": "5emmDX1RUTbgcVqa4QruKbUQM7fupmH41ZgCNNwbkngT2ENwj6JickucJoiksfEaGWGN8p7uD4sixyK1obQyzjp8",
  "key32": "3npQaXKEk9W4LWK48kz5ZcMx1vgEbmVhEtErgoC4ZZZKVDefejmVuQpbPQvwNBw9b5vnqgqqRFrhJxK7LKCoh2A2",
  "key33": "2v8n57GNuN5WnFGghYtspQdgsndUj6ECovYmRbhdK1MvLz4ZfA2MmQVtjhMY8KsUiiFmZCLEb7XE6baMjftFK4SP",
  "key34": "5BdHFBzBjvXXTtcJjB6gwjS44Wvq2AYzUEkb1F6LT8pQJAxm3og1Acwdn6gAyyiikDvau6cQAyB7umRgP9diEaFa",
  "key35": "67eQDQtMsLLcgrswarCfPFJEYcybtaZBsg6mieVtmw6AQWdLQVfbHJXdN8i7iLoLkwibDCTtLj6cfHCHEgJMfgpQ",
  "key36": "3ZoQh7PigBPdR2whiryxyA7h8Q9fCtGg1XtCjBDcsF6jn7abiNHGuLj67hgVzUWKsokRNzwv92PnbnvLGFADRuim",
  "key37": "2psE1er6EektGBhF2DVxpJFjBeGsWZgN1ysQZgiz4Zxn1qPSJkE6Gd4dTJomEfjqTWBgceomygJLCp4GzUnvUpxq",
  "key38": "mkQ3F35NNnD4CYxzPFVvqT1xuN8v75JttWtCbU3boG1j3YPEeCq9AEv8hPR9MXB2pBdx5Au2hqBdi4nygQmpwGS",
  "key39": "4noUEUnSmR3BbbhmrsCTGVRWJv1nV1qrtADEJYue57yqTdM39MrcKFkJYiAMBbu31MxofJmgLSbgAnBebVFaspzV",
  "key40": "2sKn5c2ySLuXtkxyBERswkCemGXHVgW7py1EYhHesmXYvxAJU1eB77NcttLwuRrAfym7MzRShnYMbGrWy9QoVxcb",
  "key41": "5m9hphHAW3E4kgU5i5xrwpAU1bQp1ZzHQU2SiwdwJ5pTHXVHCrwbhXd2iFJ3Vx7BRhg6NJLdXddk72ajm44m6XsP",
  "key42": "qUmyaSMegQmw6UzCbK3wsovpfezjm4u19i9yXFTZAc7ThpD8V2XuQVjBTcXb7yrMArbYfntiBJHQaU3j1eiuoVz",
  "key43": "62S4FdP7gSU2zgcUSH1ngwm8yzCofh9UxhD4y8TdCz4QrHRFzmjSX2J3Edpew7hfkXAzriTxFPKFdHnH8J1AYnRq",
  "key44": "23EsZHejcbQdbXZZ66srHznuc9upDvCRkTukpMDNADjf2tQFKJRkQw19qxfkxqTcjYqng3G1Ln6jyLcyHg4fnPJe",
  "key45": "jJsMy9ie9bzju8S6Sbwt8vnbsUyo9geXSkABW9n2Az1iePbNXMmNTVuAsHqDHge64cViijvr9wWZQGHHuNzwiU3",
  "key46": "64bSfiWEArtFSKZVrEBSYx64Sqj1Vtj2CZGMi91Dk5Y2oz9dVqDN9sFWZ67HaQX54Q6DzLYifKEAtXkTFRifH7Uu"
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
