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
    "4yEyCWJr1cjLJqUt6TqcoZo5GGj3Cr4RmDN7w42xgvbZ5mUgcC6x16LLNVe66qHbrXssociG4UgJjiWK92PxwYsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kk1BaKBKz64HkF8YcpjsNagrt5Bx2WpGqGqvLQaFawK1HGxd6DJLxakHqNAG2svWBwk1UKxrjAJsgYriwGNJtnD",
  "key1": "3zycX1pRHHvcPSJz68pWLUXbbjJQ7VWwvQ7rdiz3RtBzEtcyZx7yLpFHaMtjXbdDHhXP6TSbN46kJWHyWBeLjHSU",
  "key2": "2uVqf2ymwPS554eU4QtAEpH15TkiPFEESNUefKk1jJoQj5poT46f2PiF5zkJPhieYaqnn7gWLdS5jCsn2HonFS3L",
  "key3": "3f4vr7YvtQEeB6yye1KebZRiYqNHpS4rokSL8Van8zz4nWMo5D4EL7EX7pqkMRPvVqSKtHvvEEiHT3LUpCQDdP7X",
  "key4": "2wMoKmh927fz1cSkSjckPi1oX6ftCyBPd4YvfZsNDspVvC1aVmcZK8doEDRPcKtwA78axuBhL69oW7KXXkyBEck5",
  "key5": "356P3BuQYv66pGWepqkh1GgDBiDW4t63ra6T9rPjUnBA2iaye7SMRcuBT4SgK3xdemworjVUVVWgbriAAjMqFR84",
  "key6": "pbbot3X4dv6kibjxbZRJGRmzohLVXNfqxTm24j5M42uyjeh2oxzNYB5o35WwKeik2GNZ4qDdXE5DZ5PcgYjahxg",
  "key7": "4N5NsAQK5FePDbbwZ8ye6VM8CSAensMvdGcSAB2i1rb4BrMLsbunmTWk6DWW59wbygx2wsF3JVWwu6NepGcFveUw",
  "key8": "4Qwd4MNAezYHhTYSmSxmP2CYG3ivWHywdnJt36ygMxJFKffcaFF8YFdPnHFmhjDPsWZwTMzC9pQf5yRoz3iWfnoH",
  "key9": "2MrktFf56G1P78ciADZsjXShtccSTEkeQyqzf1AeqEvtenE3wYZ18k33h4YPSSziqjkF17SCXi8ztBJ9PMHuoxiq",
  "key10": "2FnsMwAxrfPq2Btv4waTyhkEtsvM1ftmZeGVWkDRGAn4QGu9i7f1zXAjRP8TooaBLVFsxfpstJ5opjGxH6oDQNKb",
  "key11": "tYuuHpkhnnQguxT466pkATpp68NiCwvShVJaUo8FFSCz6QU1dc66FoHyhbRGVEjomjZS4Mb95DHJA5CYgGbpFgy",
  "key12": "5N8ja5FGZin3PHbqu3uKSWXQ86g7VLhHJGuEfdCk6iLMnoVYbTWTtsJobHuQgatTFmJpQRjVbivGjGvy5hQxCvQh",
  "key13": "JTDD9k6UBWrYKwuvbzMPy87s3Y8SchrXf6nNFGWssc8ZQUvwMCgBDqxgiixc57nMCUaJEcAdf7APMmUn3aJPxAJ",
  "key14": "2Vw7CawQEjayuiqaEHMnYkZ8pj8DFkuNYyJJ2oMCS4BeVisoFGvKzbouP9AN9fxj5o9LQD53bFR9jzKhiSbXtsAf",
  "key15": "4gNzyKHHCMik84Q6nkiccDxdwqBPQqYkT5gceUyeVQTTNfyHzxCLY3zYc3krcdh9MztGoHiWwi3QcBvqcDLLGQgM",
  "key16": "38KyJXbsgLRYK5qXFTtoKgMfsn7KNZoMjoCJ8RuY2xAK561vz8VBFKdwdgT2hXJo7k87J7zRFfDC3G5NwSpGV15B",
  "key17": "5xN52BT16tBqgNF1tCop4xgWQg3m7EYKZ1RQi879upypinjJySQLiLo2kTnN7BKVj4YZkXXL2EcmV5bLD94BYMR3",
  "key18": "4dS9nNi9zvupsbok68jrqrqCB75LpCPtrMK9L1Ae5FSgMXUVfUdDTHm5Y7PE6H53omCGWudpUCffB5HrjKsCJ1bk",
  "key19": "5p2QfDXS55sAxVD83vfUeT8KS613fuQsZxGo6ZCBsfba2HaeSMsN4McmFXnSgNtxdomsUtW9zPsy7kuXTfuFcjKC",
  "key20": "5QsCA4Zueo4xZJdtTAqnjne8KzTd4Lwe5pX6U6Und1mmCBHT5ZCpMngh5ng7bYpkhoNy4E9LugQqevrSo8qHP1z9",
  "key21": "3957Q5CriVu3FViVgLL79xuKKufuqbP9DH9XkKuJ1c9ufkoyoa5hrqUnHg5FtenbRjhgib7zrfy94isL7YBBknRt",
  "key22": "GFScp5ab5LbzrfuobXfsV7zYyVYRGNSmXqKnPiLcCiRqSmNZ1D9cFeR8RZ2PP3LvZjMRvoBYsBvVAH6Tn9wAWg8",
  "key23": "uw2Mdw4BkjAqqFjVt5aT319kmB3MykPbhwPpr2p4fGAggoDuSpBGBX6XXHEwxmk9Xjona6ZEW6uBJyxY83DKtnW",
  "key24": "LyCbGJmZCFN6awrqPVbkdhDpnkbE1gQYVcKmeC8Uc9GqxtZsePGcx3xHVak3B3dxoR3u3t4xxgGPNzWvnRwrRny",
  "key25": "39FBv6fvyzjQcBYuMTxLESk6V7ZGhc6NpFDZ4YFaZVfKHHBMNrQNves9crhi511LeMuKiigNmXmknJyeN8FjXaKX",
  "key26": "2uK2s8zhXuCcQE5MQExdh7D23yjThKMfhcX5YDPjTVUyNZetAZYEtQRas8rRQBTUocqjUctEcX7xW5z2uWNPnWob",
  "key27": "461hEjVjVeHmUVpQuz69KY4ShXCAdTknJvDCx1YSHRoDjTFkNMmQbnYrFbngnDMqdPHm8vV3E8DexgxgWi6T2Zoz",
  "key28": "41TQAZjXrGrbuVyGZWCqdnSW2rjN3kSVKE1z3ZRKQHdHnJh1nDLSQVAfd3RPYJkCr65xUZVFh6bH4Kg38hNVzKgt",
  "key29": "3NyjshoQcbmQ7wSNccBFny9dcMwmj8QPG9DRzu1HehCo2bBRi76prosa6crgEWvAvu2FaSb1zmaE2Pc3dvcXC1aX",
  "key30": "4dTAR7TDEuq98cwXdhnXLHyQCc7dFBHfNGGw5einqC4nS9BUxVHfyj5eZf73Qj38558hRqg3gostarfvaGfvMntN",
  "key31": "SsDnTmoA5tr3oEDpc8GidMQVqFLMMmoG5pMg5MBNUETattyodpxFSuL3PJDtUFcKgjdhLA6HezLmsfN2eP1wAhv",
  "key32": "5tqXwa6DBuWMqd8yTWhN5xxzEZMXiNi2bqbEbdjPZdQ1qLwJS3UvvLYyzRPyubagPmgzswfkTgpoPrNR264C9ipS",
  "key33": "67Uhy6moXParZnfSYrK75jqr55oJeqaoZvAMdQJm3Uk5wuzJaNDaPj2W51TRWPaAUD2gcSVHm7Db6C7v63RtfmmP",
  "key34": "51ohwy24z1gk9nqK2ci5TeKBhTXCQhqHs68zbAvQyYF1uWrEA4qWCBfSyitv5onCMB2AcS8Fb2QvX2u4d8iughK",
  "key35": "2ZDCQLEvEY98EDXt4ECqRAmAqYonN98PhM38WauoLQZxUeGZBwAjkN8xWD7DKjFmxBwJbYCsRa9F1Ur6maSpVMJy",
  "key36": "3gpBoxo4pCKstQ2kExujxfSuho43aHJmpUebqgoQG1cRj4Q9LMivUt7JcNrVtDs68qUp2XEzeKsDv7vqxbHaCmpP",
  "key37": "tsPXQ8bBPW6T64r5q5VogJTUyqn7SAVGU4QkUQ7BGJSFpc2TZ7iVAR9L8EQEvgkWJKVdc7XYD3WTyaHNwsxc26N",
  "key38": "3Mz4gmhZHMHauF9eU9DwGEb6apyMNz78QHMdYv8sjz3cgL3ws71QiARsjfme3QAzKPCzpfmPbLmTvTJVSXuQnChF",
  "key39": "4M2V5ELDJYU6v3ze9CodKyB2j8tgJHnxnWePUGh7JuFvcRKGDZ6UqwUPegBsyRjpVSoNSZnmLC6s7xbNjKNaHnbc",
  "key40": "3bkCYf2wXk6K13i39wybfVKXq8pXZM6vqTRmG3mkd2BarRpKWKBhdqwaF2mdCy6xrsUxvJQcJgXGqyy7ax9kYo6j",
  "key41": "4gVe6NWLnKUicdYnqQciauQgg8LV4Ge2tGc4HokYtjuggAkqJBzwg71RnzNFrZy3tQ9ySq2YS7y1qtzdMmoZiim9",
  "key42": "Du8zum3RGtGqdgYCPyVC8vHURLyXXc5RNqZfkbQJ25xrE651veSz1RTt81E1ZK51BUpTjnMpY8uz1QDzdxHudLG",
  "key43": "5aLcV7onPM6q5DE9AqcGUnotm9awypi1DK97mbxT3xgS5yJP6M87HqK8poSQaZqxECGrm1RhWmGch568Eyg4fYM8",
  "key44": "dxwwQM9CrFyPar3R9iv9wLFebpvFp5rKxic1n2GfzZ6C1dzf7Jb2tPpZ2uBgJoyGCGkS3NUqAUDe2jitEMnW93a",
  "key45": "2PpfUnX9bDaxNDFd64J669w9bD1MiGAXgWQ8BWjBBnvvSojxjHZscULkthhofNiRun64L62NsThG8MrBLrcrZUsH",
  "key46": "3ZxUr7bsEBVwqms12GuXpHp6BFCXwLzSZQtDtFtVjJVnrZ8yV49kcmdMp43hCi8c4yhVEThwNdCB3utGkTUzkaeY"
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
