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
    "22nDB79DvFEYTajDDd6d8HAotjKgk1X38e1Bfrox6vb3BBifs8ASJ67gyuu5vTRGoesM3PfMetkVmac6rpvQNdWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaESW232tNQ41KZbxBR4fLKjp96SDPfRjzGpZuvsTuqCiNm6jZpy9RR4mdE5NLdgpN44oMq7MMF1JQ9QjB9837u",
  "key1": "34pzRViWfeu577qtQzoKSKbztGemxXqLZriZzHPtGheAfV3bWqeygCoU6dMQdBoTioTgWLcvRZJqHuY7CN9gLa6G",
  "key2": "2xWr4Q26mopJdTYGsadKsn1Ax49xWpr66JT63chTnBZUZXYCTiAiRBPm5Db98gBhqZVH6wCi7hRmoyfQM1igDNrs",
  "key3": "5pxJmSzaGt3AbzoyuUeUU7EQimRQ1cU9QaxdpUH2ZPZLwDSCs9YxJTTfFe3EVnHqk5bnQinCsSwe1vD18LwaWtzC",
  "key4": "5xdZV8sKRQzYavXPyQy2xKyB3FX4ViMmncmhD1qF7HzHnZQUuqpT2QACX3NTtHWRFyPpjy1mcNKHBF2arPLCdxbf",
  "key5": "4U9WYEbaGfrmJFAPYSUS4tXtWroq7wfHtUNN5xEQF6CMSvSzGaDxGYkZR8yMVjgZTh8xopCUMLwgHKAQsxTqxTTH",
  "key6": "22ZMmxXFVmT62AoujsCbv45DAvWSbXN2EajwGzgrwxbh4kxNnDw5fvvrT2qR5UKFQ3yXHDqm69ZQDHmCEbPbgot5",
  "key7": "rndbvpY1PfQeQXdpjQVEaTCnAMRZovPqmudW83DcsMUeCaxKp92eW63KrFeLqaAqN6F8tg5qd5MRp39o1zN5MPw",
  "key8": "5segw7XDbGzWBREYP7LUxMHfCG4cdXJm8BXKVhPorYRPns9SmtwAfSxycEGCtruTGSgjrfRcT7kSHr15P9Bs9HZV",
  "key9": "5g5TZicFFY8zRSrygwRESMgYgPxv3RhwywYuNJPYwCVoox2RCuKFyuXxWrFWxdtK8nHkyEqQmQCes38CQWP2jzHu",
  "key10": "b8fTMaYfUftdkgs23oxMS9yJhjwF1g22NsyooDjeq6FpbXkQpVvuCTXtkVi6X95tBubgNALMRbZaod31Lr1y22D",
  "key11": "5QPtmpCfq8z6g6yJDySDUxgFgy5yMvnCFe2hD7dQG5p9L43aDUfz9YerC2XZGfndU7xw6EheYKer3dz7D6USPwEL",
  "key12": "5GAvUsPnGcWz2RuskpfHv4qMyx1dPpQSJEpAqDUeZ39r9TCoJakskRyAtDd4YeBnUeUuHjVo1RyNC3uYPDmiV8G9",
  "key13": "5SCxpwwu8BZHCkRi4qAJd5FvrHyCKGMcsrKNtRh4V6WHLkSbYoensPZ6x63CZomh6ENgVb3jhYfBLCXMcNGEmDAG",
  "key14": "2wdqujkfboWQioJmVi9vjkMh3CMncv6dVaHbSmzh7AS6CNeVyZcTYMc4ApGb8XDQAXUw3ZPqLQV8KWrownmeXa3d",
  "key15": "3ixy2UtAeo73a5QvERTiKeBueEaAkZKiUup1VPodCaPeEBeyBjGiWHBwbEWtaKWWxBruZSpF23bcy6rD9VREiGTK",
  "key16": "4RHWfmBniicvVJggysTvdJTunfkQioNos5Uo6iBYnLnAjnNhotbHhy4MWjhbF74KWn9XsXQLJgPt3X3DUExm59Mu",
  "key17": "5x2JQDdaHewNvz83J6d12HRvFKJoosiYzUHbgJaW54cs5zj7eJLzEkGePBi71Rbwz2KEKJvPfTsjmxnifQnHJkYC",
  "key18": "93aSXr78YheoDGwEbfX2bVUb9RNLXbKX21vG2DeqGPj7oJQHg6HAiAAZcWkTossGKzMVNSafheqNm4am9Tqawxb",
  "key19": "eJhaTm57NcTA1c2b3WQN1NkJgtCGpgCGCkhZHxxxfVpMsPjsAt18WRjhXp5TiiycKqPXtKrc77Vqc9AuTgWhP3e",
  "key20": "3viZknpiXnmWMW1oBcJUnBnXZ7Yy3JEMN1vYRa4rKCUj5LWGYvjQwbBYcqu1g52BeAvuQduzecS4TG1EmJxtRuKS",
  "key21": "4pCniaFEm2wvCbun7PkN2J5CWi8SDxYjo2yqvgVHKBLTbAbQNSvdrcLRSi8r432kBf8bugKWF8643uv5eTnuma9J",
  "key22": "4Umzxos7j5UEjGJbnfkgbVQVgYAbn2CToFgn8WzHA7YwQeCcA8G9VupdTG2kw9CEcBC4G4phPoxeoc9yeo28eR3L",
  "key23": "4EErCWqUPUknufSiCjXcccdAv7jYLHAbTvw5nxZZsT6ZAJDFzYyL8jCDi7ojmtjwQeA4xmWHRavmTqP4z9rYzTYs",
  "key24": "2TPC19s8BbNYrag9ttxQRwQF2MCJ3JVvP8DGp5AgReNHvLd7zYL2K8sgQho3wZ7j2AvUG3h3cmSbhfj2GShfNyFp",
  "key25": "2Z7vwkFRE7LUPyH3joBWFo1kGWAXbR5YeqFr939ofApan1WmDaCC8dcni323pGwo2vUNdpE2sFztNwcwH7biNae1",
  "key26": "MUdW85Wf7afruGqjwEoiWFZSCwVXcr1kWEwz5PjGbp1Q9RiYMZM7TeXueCf3uaa8oi1ga4yLSWyc8vVzoFHGkGT",
  "key27": "3hpYX43xzBAcHtQXhJQBBzrqqDjBQwYntUxZTwEN2YTVvK3rueVaUdMUW2oGTbC1LYXfG52PLuZBUNpEd5A95V7",
  "key28": "rz4cUwvcYjdngG7oWYnNFpPRBuBLHppLDNaqxh4FXGf95Pc2iF1vYbhPC7yBR7TLxCQPdyF6Az4xwHFFwCnPMvi",
  "key29": "4PUP2PTgZuNBDi7p43z6db5pg6vn6JGVjh6phFR7oMaxoc3MNrEUBBfGrRw7TCqvFJNq6TfwoTXM7VkiZi5ANFiG",
  "key30": "2AcSxVZSCRgxUTL5s6XwDUdAczbp3GAid17dUKTHpC1uzdFSepZ4MzK86wWoaadzcF9jBGh6YPb5QrbHF6PCRfYf",
  "key31": "659JHH646XbDyQVaX2LCWKkwhH44JnEyFT1Tmk5B6QQKxvZD356nqa5qceh59n9n59sBLnBjjaCFv8nr9gjv9bws"
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
