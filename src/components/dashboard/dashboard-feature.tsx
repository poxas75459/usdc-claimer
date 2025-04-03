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
    "KcnkyTELYaynqTpsiMbfcWVftVMp5pcXQXeu42MnZiNcQdeMcKt83CpkKopdoryW516RZj2DbAFZ328y91eGPmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBZB1WDS1Wgf6FTQMYzTvNdBJTkkinW34hrbpde12QZNzpEYGfU6GFc8k5xzjbpofX4qDDrxFj3FuAPwSfpHtyK",
  "key1": "3YqaL1vfe1rGg17AvzvQAMdYgCo8TxbTLqW5AkUQr4sy7cyZEEdtuAHCsE9iNpCkVwrvRKag7emAkivooxqiwPTc",
  "key2": "4wfoPzrZ9ZukPfQ3Yc2CGDLfCFKw67Na4XVES2sBgFfkkMfV6LdXTiyrLy7azcGx85xXvpL8SqEWxACNhPTbJTkt",
  "key3": "3o4SzUz5qSmcijcaNwGuH2FhHNeiDhN7yibYYr6M1Uk6yBkowqxeSwRqJXg8zGB4RAPt5ZmXx9im2GL4eDn4xMmE",
  "key4": "2jh35uQk2SrHAMhq4biSfyeJ79j21N2PbVo6vXU3pXG19yuPV9u14NKg7pGp1nFgiq42TmmJEZXzvpTgh6ifQQBu",
  "key5": "218dMFBMAnb1Hucx6Qwxc1apwzcXtvqHQABGGiPQiaw5xRAiniAExUUtRcgTuoZCPk4zuRrxLm4LAjuM6VWekn6Y",
  "key6": "3epyB48vQTdq65WR8xVzLeP9WFwEjiHgAsRVjgTki3jsgCEP5GhLxurnbPhg7fUCZmCk6MTkpXZCYYnveQ4DUhC8",
  "key7": "3aCBu8XYARYbFsLTg9UmarKiKG4CwqzV9upR4Up9cxzQwNHMvmdCQFeM1MhZoSSwMwxdKhXZop6C2fcQXYn6vCeQ",
  "key8": "5XRyhs6YAFXL238twWawx9wJagR2iQm2vTTbp342e7QaznuaXzZNgnn1gFpTq5bVVDeBfCV9W2fnrRHG9QK3hTby",
  "key9": "56U2HQQFeTeXrLN88T6nm3DiojVzqpNf7GJiu7mfV3DcvPvSpmhteB9SZbdPuQCYyoCMv5JfvGqPpcMnZPmZAtX6",
  "key10": "28KeTWJGdqdPdUdYM79k9XMkQt7TudUJJvsNaFUVc5THNKrxzACHJ6Jg4vEjh9H6XCWGC2aKGc99bPiSjjaZotjD",
  "key11": "3XsSCEExDFevbaf4nNZJQgMPfYRmxpTodxMRYerRZMfUpywytxMdXfsQzU6XD9eHeoMfGJJL1b32nws13NntNaca",
  "key12": "483213USaY9UGxXBNggp85wP1VimiMqvf3wXqfkbmyhBQMJZaNYZpWMaphQ1sCyHKebvuRjCQpZ3zNojeTKFnxw4",
  "key13": "ghCSVoU2fdAmFHNWKfHvPpsxaHeVBi96K4h6m2b6wNWjD2sM3xHhb3gxikCp4LG7KUk6wKUX8yZnUqbXGLi2XMY",
  "key14": "pNRboK371csXtU8YD4hF8de2iksN5UxjmXM3FwvMHhwgGuwpWoF39mhq5RQCWgKkJuaiuV17iAij9vZYtEA9v5H",
  "key15": "5ukSrKQSgqdqrqDtjvAxutDtamsP6CmU4jawixSajpL13knr3e5aCZkgYD2VM4pXFFNmyriGwDiUfAvGhtwj84w2",
  "key16": "4FQpW5HNwov22EzscNs9h2b9a5CLCMYEHpReuf9cYYwQmufiyPzvEAt6i7JBRSK8TmypBDTksLGsSNw48hhTcRLM",
  "key17": "3tC8c7HxGuyzgJrge9uPNujjwXbuxa24LUwDLcj7Q6K5gsR6qqHpDnq3hAFqeZWbUiFSzuRQVCg7SbyTTTopgFnN",
  "key18": "4AC7jihJ2s3YsFS1VatPD2rNK2KMw9GGsm5fY3a8XvG8iAjHBvuXhp2LnCTzcfHaym7SL9mbfzcvq8LkRdRwP7x9",
  "key19": "2cJEQmN3DLfA5hKBVXWMi8TPEqUoqGPuWcjQqkFxNYuUD7GFncNZ4SpiCkWGmbFC3mEt1xgkhjiTyaTLMf93TXzV",
  "key20": "3PoNk8aszg34p59FbMPEFkRNw4LSxv5FtctBPoSfPgW8NnNY6gXaYSntoQWbyXT6CwRdZqhz5GucyUxGfHtT2J9T",
  "key21": "NMLBxVAMuUFXL9L2tperG97ENLu4yhMaGxxwPiJvQckCAF3aKq12abyhUPzDttuift1Gcio4PvPGktEzpW4SiD7",
  "key22": "4ypLWU3c4PgsZ82JMh8ze4D5GSiffYC6UzZKn7kw9QGEBPbit8mjdww6XE8eCfM2iugBK8JZHrETmbJYCAMGLJdp",
  "key23": "gWuPsHk6fgysetwkrJhwGktEkKfLkTcxWWu9vTv2gYKTvLZfUt91n1Xdg8G45bnEMDXREfaWWxLEP23jio791i4",
  "key24": "4hyq76jqS4J4bCXEaGSjgYgbUbAGbN6cP6wuuGnFe1ATsp3FhvwgRvQoRo4YcJdMSsFdKkXXg57fttLhXbcqyo7h",
  "key25": "2uq5DvEK7FeZE4jcaTeY5VgitgCGkyyLiFAKVjzpyKjT7s7b69jbLxNtFWug5fs1icaot2ur4ZZcDyRGRjUC78dA",
  "key26": "5Q3KhcoEkgjswrmAwGEdTyfeAChU9eJ4a5b4a5eQb4UUChrSRjJet2zbqhfMcVPt7N94eCjwyvu2zA9rmR2KX6k1",
  "key27": "7XA5kqjaQJWFaugCtp9y1JUs3nvS2S71koxEWF1ew8uod91UdH5sP4TSQFxury6LKz4ej7AoQfYDDLJu6RL6AVh",
  "key28": "3yurmyGMQs1i96XfHeJ4KLapiV36UarpQhvYF6qsHeCZsJG6dkoiqhsGj2YAUgkKHsAycok3JRw9KdhPEW2WyxTQ",
  "key29": "3b7jn4TFQ7kdCex9fRdZq2zdxWRxzuyJ8YMdJo2cwbVy4JkMb3Mhow6u6AC9QRKbf1NdyjVdUai4sgpbtqeBaT5f",
  "key30": "2SvZ7nCVCQMDrezyFyNtkfUJrC6ZBoKPXgARKJxqRbZqDok6ZvfxidXhLVdiLc8bXZ1JdXC6peX5nAzGcSb3G9SG",
  "key31": "213keTZLeLamJ3YM3QoAdzHag6FR84H87AbtP8iUb3yePnf6AJ8dsiV9gp82ad9kzDuw5C5ZcZxDM7nzw6towx7W"
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
