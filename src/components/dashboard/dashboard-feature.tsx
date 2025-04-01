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
    "2yaaY6NKTziER6HSNPvEeNGGNeWwum9pH2sN9fBBCV11duAHaZawgvTd2WTBRfgr7ac8MYGjgNN5fVHE5u777BY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HyAXUZfGgnu8YKzmUZDXyq4KhB2nDaXnFwsF9toven6wyPS2Rkc1bF4av7FLeZeRghwS4A2nwNVkVr8wC1kMNVT",
  "key1": "4WQNzLpbZpgHx9aiVS3nFnscquBME78CpgvgpDpWkyeM7unpWfPyiBhw1qSwsyMY4mzuuSWV8CS59oQX464zHmed",
  "key2": "76cAmj7DVJpLpvrxvvmnqrdA6CeupzqwYp9zvpb6gk7gUB2gRHkiudDbKGxHLxQeHvC8bAiz6XS8CkKgDKFSaPJ",
  "key3": "eemsZG8NffJaR7Cferht5FVDniJZZssWtM4FMke2XcVvw2cCbo9umcYdR87YQ21EvSLVxUoZcp492A59furjBX3",
  "key4": "hcCfoLN6qVjwKmHEgmNE7gw6CmsosNDCcAkQHwNSuWUpMwEREezmtbJigHETtPnCJZqx8QYWDfR9d4ppMPgaYTL",
  "key5": "8L5QM9DuFXjVG7vtApVoDT9zapN3j7XvxBrqCyvPvCu9UY8KD173NJgPNWmBxD8U5T4qEcevUQ7on8DnHGkSaH8",
  "key6": "5nkQ3DcNxpmtBTJe2WiMLTASG18bASeCVkmSumJwWz3uaxqa2fzXUDeycSkaw1TRF1jYkBmynX6hxeX2MNFkLUgH",
  "key7": "2CAh2e8LLx9u9dr1cF3CgXSMZGHKfzPEUjw4wsFnS78izZFy913prSs3MpPGJmtu5H4Qt3xyLkKJjLDEgCzdAyGm",
  "key8": "2p41gKde9TbHNMY8oq5JrK3wRw7htYDhPPz3dZNGcBCDuz2Secui1NUZYZEXh3ivax3aPEAxQ1hfJZVQpb4dNi17",
  "key9": "3JsED6ZHQW1wVPTtjrptTKKffSpMq8B4XcEvjS4u4aKD5nttNvAjW4hncqkLhTBVL23iSFZxFg21Pq7kwKhyRGk4",
  "key10": "5KW6xAKfDNiL8VJ4zBnomedVyyHQ6yp48QCa8kmFgVnnjDSPN4PJS6r9wFT1gDq4nGKL5rSxzV35gYek3XbnVJPz",
  "key11": "4K2MEcWNxQp39esWsvjCg1XoDDc8FwLbVjr9Rj5AareBvnks8cy94g86by79qfeUNo8ny6cKMwQbhF3z5tRa6WF2",
  "key12": "88nid7HNaqs5ymMQmzSGdjtB2HejsEX7Y98BSkTPkPFNv8RH3rmhtTwo5Mknx3XWtL8D6DueCsAX9jRfccCMu7u",
  "key13": "3qCbsjcpBPk4PiMdACcWb9B7vg5Fx395kLexHnLmZET1TujEYVxwwgi8h3GG1uSbksu2zmpsVvAAu35kZTCBu35v",
  "key14": "3q7V3uWvjTPpSqiYwNdEDHu9s2qGG8xiambbtWQQ9kfzUXpbkMGiWGaW5vbVGfKjzsrWHVqrJJxDvRFXdCgA9LNg",
  "key15": "4MgLTjvqBUAuupqx8BMSt6TAmZdaboZCaToBsw7PiXNzDPGREGq8ELys9JBcmyoFvE3TVmALrWvzujGroMZCb8p2",
  "key16": "37vyB4ZY8hcMC7ZJ76zde3t9XpGRoZ35MYBX1eoR3wiZYzTC5Efbh1zQBQY4xw2ToDtXqbYAku21dCRBeVJjs9Fx",
  "key17": "2AM6fogJayi8wm1wNxuYEgebZFXPzL9vFRQevj5XpY7v1jWQzU83tebQpSXuZs5o7PhA3uRk6NXnAWXMxY4vKxa4",
  "key18": "rDP392kityCzCHiUHjb8kU22fvBmUaJGWyDanVSMeo6NvshbC33sS16RH2Nz44iyKmga6voB2ZpxELVKcq3qJxr",
  "key19": "2gceksnqnX6uwQeXxsQxN8rTcEsaZxkMhKaqA6A7ek7pxqf3FkimiSe6MKmRFgZKzUMjs44EKEy9BkQegKpB5kaZ",
  "key20": "42HQzddPuek8pJ26SHyXzSxenh2skRzr5QcyNn85HmsJup2TywiArdPkHkoK9d4jgjgYC5xQKTyso2bPas9BpDQW",
  "key21": "3EYwFbPJGVFB76Jz8EoGwTcRyNGvv5UJwj7RYoA9WoBPmy2UBddp2ufx1vAN69gMPvJJinys6fiBeANmP5u5Szsb",
  "key22": "2xMaLYdU8EFjdRpKh65ag9eiqZeTAJfMcVAcieibxoct8wL7sHaBHUeHwmUbhrCdsPm6yKr1kvim7nBihoXJ8Xzm",
  "key23": "4HUvnSdyW3pw5ceK42nE5ounQrguUknmnkjS49sKSQ1XdLJAucdHKSS8Pof84CzsVjPGd2pxCZGcmdnWrqDTCzQB",
  "key24": "54qp4fw3kTzCtZxDsHopHQ5NwWBVdMvzUaNUAoMvXGv4X18r9wBdWx536NW4ykgsnR9vHevv8reqmE8XPCRgtnWn",
  "key25": "3qwUG6nPHAmDdXzcpLHTUY9PvKsWdrJY1SqWxfWzmmeYBbp96yxQKNA3DFJErXRzgS3tv3oEjGCSxYRoQq99RrFx",
  "key26": "3veXxnANGsNkxh63vn1tR8rLGrs9yywD8r7PWfS1Z6JKnwHRFPthY8yC2AwtRznAM1JQ3uBRRR6BW9bPQJeR2Qkg",
  "key27": "2KBPPmFZ2qDxQSYovvJwiyHEsDkVjSkoQEExBNTTxcxcGvEkRAFJ2jzGfubdDBQKymyhrZdoLWJHfafBjamCQeAL",
  "key28": "4sY6rinNg3d7PmNPfzjVu3UnCPeb4wNAP3YJ6e1DuSrumyPr4NjMHE8pGh8Zm7Cj6yinG3RczgZKZ8AgLJgdMDXV",
  "key29": "31reF227qcpSiGQG2HJcJ8FRmph8J7sH845kKHEFRV3rDxCcD36dyUcHF3Krx32aguL7VnFNiPs6xq9AfFLwpNFF",
  "key30": "5M6TRLxoCf5LRrhsvp5jxeomYxgyyMwPsfAJKab3zAHuGQw7WcUi9BMpkRcXBAyoAAZqHKrj6PybkT1Db6NkCP4Z",
  "key31": "4Ak7Ze5a28STPjYZCiTJL9QLvy4kfN3UZJZGgRm791MTTcqo5a6i68raKjV5LEgqQDRzAX6S5bnYTnBTy8nV7Ptn",
  "key32": "4KB5uo6RMYsg5jBsTF9T8DfhsjDMq3GUvCdhnTPyg59kRgp4BuiSwzK1HLkDBch5RomNR6MEVioQt7KKiFdHxjdz",
  "key33": "2YnPE4k6U69AKSexAFo2kQiwH5RLSWsJdFEYi252Wp3xQJWaHuErBLaQ5v9SHcti9mfdYMxWs6EXBizjREbCXVP7",
  "key34": "34TMZaJULDKeJXrrTo3yDSw4C4oey7qWddn1F9zsq9adE3hzttJ8ByqZJ5e8YKgou5YziiGHRvFrW8vagznUb4Rx",
  "key35": "2mvUDDTLUmz5vQKjn18SRt3js4xBivyDmK6W2m6ZkQv3cfgzKgph6gLdPbULaGgXGVTLnCVNFzR4hgswwKeirGQb"
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
