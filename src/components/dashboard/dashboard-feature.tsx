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
    "5sdh7XPeaZLehmzubyMBjaetdQYdSLPEjgtqGbFty4kaKuiJthtuCUNHYNapFYP6BkZ5NXkV8Cq7NhHibCeNZZpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1VqsUiHpkxZ9ZqFDZbGSHnmoP2UFoYPaH5ctgRvX9RF4xRxg1fygzZR7yuRtLVFXwc9cZkkMMf9XMNc2HDdSUJ",
  "key1": "2D4Jcq7rSi6md7vdrsMQsdQExgkUJ6TDQaMfHqPUCyMAT9LBs1uZXP9Jp7q86nXtRVMuH5awRmJ44McS1TguFkWW",
  "key2": "3XzW2xy99jdAzaz7q18c6pSTE24nV1hn4YqS1ZtoNSccDV8UNj4JhJbJHVLAsEjMx1Fr1Sm9CrdMTQ2P8k1qSvJU",
  "key3": "3oEox3yYYyAhsSsXxsJ9QFoBn8VhFQvnJRAFaeE8B1yfitXViKt65aX4dPX2LiQGz9f1dFLjuQTwX4er8gSv5Atu",
  "key4": "hZzB6m1MUxEur7boc7yr1dqtytEf1aHwvXEfcWgQK5RkYkNTVQ2WSnrwheFBMR2L9k5HkAo3psdrVrsNZefYxWr",
  "key5": "5zN9UHhPXp2nah57f4iYS4AU8rTcF2Xx43h6Khp3dFux6uutYGGPsad5BedWF5PgH7hqbRGuE3Fqnu2iWDfD9zqH",
  "key6": "4nZ5tYqSgikgEjgspF9JBpdsY4K1f5MJvnzg23uGzxULShNNCnVyEMYS3d2WAA1QyGJAS7vDrBdMLGGvfK7v48iK",
  "key7": "21RLaHha3dyTFt45dB4ZXb5iqyiJprBEXJCwExhLJawXCL5Ag8PSLnKh5R4eGueGzcdPqSaFx9NdDw2iT5ubjtGN",
  "key8": "4DymktY13aMiBjHCC5zQHxMZomZpFcWcupWmpMZPuQx3FnrKj73Xvbah2v95gC4ZnZ9ffvkJwKPCaFJx2dAxaip9",
  "key9": "AJw9MqnGTM71dfyxks3mYZhWnL1aGNeUFbzctMx2M2SCFALdkorQWaPcKVdQ3rDT9848YZNN5BNb3R6QqcLPJi1",
  "key10": "GxtakwFp3ivR6rc1g17uNKBTBV97j43H6orXcKp6VXv56RsPQnJdqVdgQ3xtmZwwLXpYxRoAThKpakcGBMRVYB6",
  "key11": "3zHUTKehnP8K8kUQeXdytjzCgcAiyFcVv4sDuSZcGEPVaPMhdjny4hkmVUs12mphk2ZFYHfkrMbDgMtvBUJH28fp",
  "key12": "2Gvr91dcg3Vxb5iCi5io16w1khwiDUNhkbjCawjkh8X8Ee5uy4X7rbgQpSANUQeQRQKsPdF6iXyH4uedJWbFqFky",
  "key13": "VmMwjW4qXmLL9UgKV25QrQ3Jd13jDnweWxeXarP9bvi3ikEfuNv6RJjHtygmc67vekTDdspTCyufJf3BAQBeXru",
  "key14": "5uD6h7A9RfQBebHKefjnrBQwgtmauZBdSu4DStbDq1JMGTom98pxtAky5G6LEH74yqnHdc77nGCYybFVBnwCe2ZN",
  "key15": "2hWMk9xjxvHFsKeKf8s37hBPFtPP6J7R3AXtDc53EtvySYwLoYhXi7ezaLKGyKJLEePD66Ek2MJksfbfzq56ULyT",
  "key16": "q5JiZfRx9VQYVTQ3bXVByZaJctDfLvMXYU2qjybpBbDTKF1n26HQMvo3BAhZMbiTigoPrB2b1HFL7H4J9Ck5Ppi",
  "key17": "4Hq5UK2vR6G4hyc6W93THJv4ifPFsH5kVu33oPX43rKRG7XqZNVsv8jgD8fuqG4wNTaQxRryD7qxm4pgwEdjd8SG",
  "key18": "3HRKazc9BgcXoMzM98BeHiNnk5rNjr2smbEB1VjkF7Ap7dkAeJtWwrkcLsVYHHd9rjryDZJBWrMeDGS1WrdWgPaa",
  "key19": "67LgGy3AG87hatM3SqJ6pwsrGo2cPCaEW8h6TXM3PhFa3FKnegUrP5rj3npwHhDeUVt8P2re3P6oUF6AtyVnFQvm",
  "key20": "5baiVq9nqLTFTStngPko6pFuRd4mX8xFH3yDvcAxYSUb1RoM49KyGUpR8oQRP8nWDsNvEqUaKKp9quKCnWrUmgcT",
  "key21": "4ZNAR9pYEDXhxZnfsNpwZ5gaiqfRs9g7BumFSmgLGRn4bMfo1icQJzzditBZj9dXMV6bCN28H9Xd7vJkkZoDaXpW",
  "key22": "657RzRk35gLR5PBE1u1VP9vVUXtF7HJHk2Y7Z9K4xEQkbu8AswaYwZBbN2zAGzcw2NDeoKreMymHEqw8hD5SXrKk",
  "key23": "4DnJ7ktXJ37WvUtATSvuYbprjGfjRKkA52eYNN1iwww6peczuVtc2fTqVieicuj5MyJ7RS7LkwaUAUdBqGrJ671C",
  "key24": "3VLpQ5jSEAhtW6dvgAaL8eDNk8X1LcpaTXuS4X4fHpYU79yvYyPhqSoVtVFhPhMDSJmq8kjBGQCPdsyqjhkbnjpk",
  "key25": "NEPqKVd3UU8jbnmPGjPXHrEhmwFUSVg1ykSCkNtVTj8kBhawhB4d6N4FUwVg1HJXC2JQg2w2FekNLCWU18k42JE",
  "key26": "6DkMsoCpQ4ty6v3DgwHr3TUtpaEvW9HyZYhqBp4zifEcdH6Rfe5Mkjjr3LCQU1cqSHMpeSgFx5YtpwLvnqTA85j",
  "key27": "EsPFxR2UWCTDWnFSphyWxR6BJz9JVAvz7tFUwpymb3kMAsWL7ATbttLKiU6bZiD59Bm4NWmCmD8gXVXz78TggYd",
  "key28": "4YyD7jUqtjbz25DGbeQ6Y8oA9XeMvFYu6v5gE3i7ue5HirdQDpcHTbaaoG4xakdEAYq5L2XcoE4LpdSSrvNNpJ68",
  "key29": "636AQ23GM3N22EFKSb14uao28NFe9BC7bCkWjwiC3S6HG5j4haoAMXvtLPwpourvcyNDPNjWm399HbN23FrK5jSR",
  "key30": "3xXjrhnWUwaEabDupAFz4jzcfSrQ4sza5TPguXSUnuJCzveZeMBdGwbdpitUGSmtxAMGvZddhq8rwdvSiS499xt",
  "key31": "5UWUFC9LTQ2JYeYhtbwoxHgrLCt5dRFgLupf7JSBRoeEEvMJLDNCNAy75bom48hWymY41NJGbDbf67wT8chLRtwr",
  "key32": "rha3nbNfmhfwhnQ7kZMupE8GJdcz1kjT5PUt7nDCHLUsNCc4gRWf7qextG4jQhorXGL1juAVZrqVx4ut95wYxoE",
  "key33": "4keEaxpnvLHrtmWsxw5sp7P2zGS82ETmLjMxpzvBaoWMgsnnrvpRkEw9Xc87JL7JnJSNdTe8dtd7sPfgLFk9Kgi9",
  "key34": "2rowiW1YYkKVtjttiMwxR5E2Up2hjGRXu1z6jeBFoV7tvKWpmdeRQwM5BgQUZDD3TRH5F4FKBJpoRCuae7F5khH4",
  "key35": "3j3ka3sDZLa2ZRz2VweKs3hWyPYC8RCcgPdPE8KkKwDztESNdpNtWSJtgRbH5zJwvBGtnhvV36P4Pb1x4BhGTDfa",
  "key36": "37cNH2etRisyRTZD4hAsLRdLAhNP3Dey3dsaV6NTHarWbeZrb4wtrFR1hX5q9jiV9GCP6wFb6DPDkTLzb643LFSb"
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
