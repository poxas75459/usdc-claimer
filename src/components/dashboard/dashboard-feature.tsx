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
    "2xtNusmFeUyvPwyaRrqafkeMsWK97dq8K8bC4eptrrCoXh3u3CHBGkepiWpnkBTw8mfuaXknMmBTKBGAEh9hNo3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzQs2szp1Rs1BN4kBiwNSA9Fyvz1pJWUEXUDwXqrHyBkwttsvaTV56A2nDJyPY1QaEw9fwfBBRcCbGkZCFvMHjn",
  "key1": "v3aapWPvaZwWrCEbq2PtfYL4wshsJqAkTf2f3n36tqPXKXQnuoz9zNyxEEsjhsb6fTuDYnsaskQ8AzKd12LGdtZ",
  "key2": "5nQEBhJCMtMhnFFqm9n4jKSJCYtUk9tVudxc9EzrBiH92xYvX6sfcCzpZXrS47KRKzGc814vnc7J1YLuyJPo8bXC",
  "key3": "Azbd1UZHtkRQXcfU5amUaoBUZSAmeF6kBdRroPiPpSeN4BKzL3XJMGGK5wTQ1FGHERXoQyACbGR5cYyvDzN5pdn",
  "key4": "23voYgkNBKbv3egubmCeGKtTRoSWC7E5BddtdpCB4L8xhKphB49QguBuu5jYye7RyYh4D9bv6wKart3PRCGTiUeQ",
  "key5": "5uqe3kDyXFE3nA5FLxEvsEpTCUP8hpgdzCzGYmtR7M5bdpxgpFAaEeitGzCfz2wsmZAY3xqG3gXiD73buwbmgjL1",
  "key6": "3FkomMRTSprtyvHUJc6ycHcKm5yuiizPCNJvamt2WXWTNRN8viNndJw2GBbtUAyt9xmRXnqH8r5d65fcL1xxxyLQ",
  "key7": "4tFc9xGYGe56odh1K2ex5wGVYRuR4QNMQTkWL6RhzkFP3tHQUrqqWipbBUL4N8rwiQiQyoFztgS7AFGh3smGZnMz",
  "key8": "2HbiUh43kZ9QrWYHDNHJGzeDBEnaS7sadTh4vJGymRAgQToDkv1mwwuHUp444aGSMzzTscCCKniMwRDpBJ4znzuB",
  "key9": "4SMLZutRwDHUa6zrdSkwkfKtu8qQ5JxbBMqAZA9kFGxgfjyuhxvZ7YLfrxXoPw2yaSUqr91pAEUDBUnaAbu6a1wr",
  "key10": "2NxnQSerz5BFeAHsqvnQeSeWewdSFyS4Rd48b9XLMMXWzmGf8d5aefFxv7JDMhwb45rqCxk75LhD3GChRibpMSEj",
  "key11": "Nc3HdTUU64jFyjpuZ7WDPtHGdyNur5A1nTcLARNS1jJiAk39KaqxjBpnBN3WYkckrsUpZsfhjQRzvndRj9kpNVh",
  "key12": "39mrWkbP5Ab68Thgz4UAmFtKmm6tcbmAuqA8svre3GwW7nhJEYpULTdzGXeT3SwVJdnsdxfKFfz56tzjBzoBza4P",
  "key13": "2qyWpy7J9wzmUJtEofpzENhkD8z5pTaJfs9RPYCGpEo8dKWVmxnJy4M1xpM57TTVkkwoqR6NWvTGuHQ3H57kcFoM",
  "key14": "2v1DvaNAu6DNCMagoXN9FTMLjiW4mXHd2sMKDH3g14R9gSNj37PFpis8PLgnSmqWfqftjkPnmVnHFqZE2e5ifBVy",
  "key15": "ASrcTXrTohffweAuQYt7fwfoxJ3dXLYFUuHsQueBDnC755pb3X7r6R8vwzZQATaPPUFd6LfRWHLxkUknS8ceV7E",
  "key16": "4pEgX5E4DwiovvrpdJBMSrV5XGbvH6s61ZHEW7VkFEnGfwyHqbdRicY4oBveTNLGGDFaxGQRN7cWuTDCt6vwLL4F",
  "key17": "4ip7Cp7g9M5oe1EtAa3xcA5t47TTnaFBm9jbKDZ6FqubT8qj5UgQZ1KgnMWyYdkMMHWdkB8KfqDSgaTm4o2ghGFD",
  "key18": "4K86PTZSXvUs8zw5WhWG6hhXpwbyoeLMjDc2DWzyGpwsFzfvrnHJHQBaKjWTN8iJH5rCwB9oQYuETAFCzbCdmurL",
  "key19": "iiWHkm1qspeTq8qEDsDeHxZuf4fVumVUut7FKLBpMtdL9qA3r48nJbxARTsr4ahSLUs4iAKCLu8vu5DJRN7Gaes",
  "key20": "48qZhQBDzFHV3j2aAaw8DYNZ1rHRNz4NbB6e9NCQJN4TebwmDVtCKtNegzNAkb3SFk91SMfMoZRoSpprbXFMRsb9",
  "key21": "3Qzj5Wn4YdZPGLf8biU4vBjJy1BjRYesX5jdAkr2udXhGgYgph1kz5YKqwBejiJRESSfAbRzc6GJY7o4yuBxHmX9",
  "key22": "3nteo6cRmr7nQD1aiRYP8d54oGrUYpuFe8MhmeUe8FFiiEGECN8Fh4hvkWRDFszwUJdmXiiuY7YUBGfkYqJzmFiU",
  "key23": "2ERCPmyyEXfjEyAMoCf7Y1MX168y98EsF9v5musJhoZCMiPcXYGBjWNT4yD1ymc6e3mMCS6JgNtDK7WdVRjHjKr2",
  "key24": "2bFx87Rxp7bVv1Yqjr9pG1e5zqkFfMN5HEKxisyDAEaQzdVTQ7ss8puT6MjQDeeX2hzAZfwhabzBzAYKVTv4e6oe",
  "key25": "2mmKVGKMu8Z2yMmkgyqeBu5iPGefb6Q9ARrn3TV9DE9eWt3tDZu8stMZ9vKBy8DDBBUMr6HKhorKykowQ3ZLpcas",
  "key26": "2tkPkpWeWSj91LyN8Ni84aFdFaAZ62NtaW3UXaUUCJfV72YtegCZAiZragAu4DfhNz3EmeWDrekztnNFaVSLTfGS",
  "key27": "315sPkPUPdMDHg4BmPX4sE4FiuARe7an4ErzPXjGxHfT3XTvtr6J2Lr33qnJGgnT5ZzBTx2FMZtnzMrShyANDu67",
  "key28": "5kkyfndEpVTgscc87Qs13Kch84pAXBVtvz2XptPjnRVEgsdjM9esLtAfKnmPbUwMaD8aw8GzbeLPAb6ma7GhZEVN",
  "key29": "2FNvbVaCNCby6AkeEwmWUKgGhzm5iiDtWzo9yqAbJxrY1BX55EDnocCpFAUTZ9q7DxTMovZJ9in5E4U6VD1L98Pk",
  "key30": "2kD9ucxYa5eHBRVWQAEsK6uwNGc928keNNsPLsM7dq6pSpDLG4FFcHFGg98eujtj5eNRYHw2cUYanSBQtxPPVgUx",
  "key31": "56dj4cswodpdUSLxfkgcbYemjcpM5ScQP6mzCubcqNdYu8TqdffzTNZT8z8UoEkZjsJ8iP88MrAEhE7MZnaCLYo2",
  "key32": "yFZNgi8Y4SaiCpeqb5vygeLc7j5CueAQPywUB8xxrtZiA56TX7iL8VCExuhgy6iM77LZSaU7kyec2bmszP8aEME",
  "key33": "kj4jDnbq6Zer2KnH1jfXppUU5JRSbBHvu2QKKeUSskGaQANLQw5uZGhme39WmB5pFMdCw8VwMLDQVgkLBFMwa9U",
  "key34": "3Xxgvqiq4ehaDUB8N3rhubryvzrYdbaNhAWmmN2eJ9rE3FJ8D9xynNLJb5EroSb6L88ooMdkxNUaDSicHuXxGzDL",
  "key35": "2LgLVUQgQhpHXS3e6B9qvERxmHopoznuzrAK8Kt9eC7DJQMMUEx3B1UWVEdaBii9oJBe1u5P4czN8E9shxEy77ox",
  "key36": "VoXQGQPgn7PoXtU7psJHreaUvskKDXk8BGVZJAovwQTjiHcUB8Bar6FVYyPCMAGDYKhHLDVByLKA4f6635Eoo5a",
  "key37": "5iBJbQK49JVJJ7mS2dYABtjtDMMXLsaWw261xu3bQGh8VwGg2koLziJ19cgFEforEFznKq8S95Htm3yBVdht9Xi8"
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
