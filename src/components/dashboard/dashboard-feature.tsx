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
    "4pwfX37MGAtm2iJEaDB8RjwYmZGw9KHuaNHLP3nMr3t1x262gr6zaHPtNCbwEf2hH7b9774tYedWAxzQmnVC1jkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TDB9iV2rWHMwGjWhuTT3UudTNthoX4j42UBtqRnCJW56ENsShs4BFBNRiv8iaBvT4Uuio5AYzJKnU4K2G39c7s4",
  "key1": "tSBAJ5QiNsnur7VQc7SR7nXcYCpXMJJ7HTBHBzghaVScGnQrVRWknab5bpppR828i25ngHYPCn2GWAKxpMo9jdm",
  "key2": "56AcjyiJdfpAkiWDamjh4bETPD8UuUiemuv4WR9sJpoQyifXr2Dsby8ieA7153zhghPWhJNvkTbkBsB9Gcn2Ys9Q",
  "key3": "2SqVKpNc9gJuWWBhcsvcXHxFLugwDaigrPKCanLHvF847qSVrV3BiCsWHZKuuZmK5PadUVYzWyRNEkLoGWmbX6q9",
  "key4": "4wyqRP6UJRU53gWNX5CTE4LkH98RxrXNMTF6pTrfxcsqv7hmp9sGNRy47aHmDLDAAvV62nv8G8eEEH6R2gVQHngL",
  "key5": "4cuYygr1CaazuhixbkJ9dA91dzc3CrA9cHsbD4ajXB554ymNguWkauyMji26XfjBFUbt9jQxmEt1ScuZhKCHk7Mm",
  "key6": "3YjjaCfvjL6HbP7jbu7m7oCXZjGWTn8nV8WgCRFwiCPqyETyytW8e4u8DKSm5WLCejgrrHVa9z74KR59eLanmmCu",
  "key7": "2ofsFbJ65se2xkM8sKBKsq71uMuBqhBogtswFVRaHNh33m6geuAFkzNqsPJGonggFERJTRHwpSsfuRL2kbmpCEPF",
  "key8": "5oarpwyGRFSjmXKX1qZNW3ngCvWygPNYJxcLnZFPykKhiqg7tRAuggwkk2VdGcVGYq7z3uNB6SaYhwALAB4YHx78",
  "key9": "B69eJtBi7zgUC9ta15MpWA2uRKn5ozqJJDKjcUuLHadJ6euuZKjzFHEfXgM1rs1gyivRfLN1T7yX8REJLUKpUss",
  "key10": "4n1iutVJ6vmawN1tSukz7jWtMnkwmxECp9Q1BGhFvNRdJXAHW2PH2Y758C9hyTfx5QQehCCePTweZEVT7TaekcAg",
  "key11": "4EgbV19DA5pVomkUU6TvtaJ5ALFRTJT4W4aMaogXT6ht7RLSr6K6jWE8kzU2SEWCffoEM8MKUwxcxfum9hbHHry3",
  "key12": "5zMes986zuw6Y9r6XBdshzw6UiYqct8USvdrcAenFEyb2LZ8YTw8g6mgfGeNi5BPo2xM1TEjoiYSSXSE1pbCpVFY",
  "key13": "fdU1vCx7WTLHRqTZ4YTsMwvCjdsCHXQXNovwpuWGhLvmxjkC5wE2H2AELGoePYf6tWt6qVpAEKEowrUuESZvVLW",
  "key14": "3fqvn6b5q8sMu8SocjDXEsNfYdgb7HW2AAusSpvGzxoN35ZeLoJPqkdWJ6J6Di3m9odu3XF3sfohYQBXipbp3u9v",
  "key15": "562K7f9pVCNeFm5ymimFUYqAVLCzPkPHJmmpBwjSMjw9UTMV4JHtHLxYwUh51E6cwosfkof6jHngfpmTkcXWEc4J",
  "key16": "5yYpqHjMywEJmWmjGtugKfK9KksTALegc7V5PAVjdDTWUMmnpCR6n3SZasGK4Dd8apA8SiD4eMFZaMDhurB5A1xX",
  "key17": "3uxZwCYxGfMXgGksG7qV47FziNTUwup7SsAbnG3qFiffhVGsEaCUHjCeTWg1EyrrD274XmdQMDMGki5kvastsfso",
  "key18": "2KstHVQqgNFbELeYmtVvoW6MicYRA2vBLFZ1j3Rc1SRkqPm8HvTUPquQAGfLVNedgR5L1HVx93VQhFtj8URXCWis",
  "key19": "4ucvJRPuyKBf1hAwLG7viwNF9pBE88k5UASeXLJ5puyBZp3aW1QPQMEbhZQ9eD19RAZ3BiRXsyEkAxpQBLoGddpS",
  "key20": "43PfNFAf1pSU8c52FP9d2g5A45EbiuKTGZvWHG2sVB9okWZsHC1WZha9VisycQor2NkkmyPR5gzadKpDyptPGrLi",
  "key21": "i5EKwfmMpPgjTCGtDHQHqArU7uHhfRdCGKyrmzjvjwXJXPkB6uKJkomMWmmvdWoYxEjtGVfKn3c7ReX2CM3MDAT",
  "key22": "5H5nYE33n255z2aiqy5rShXPeT3STV3no6touc8tPBEnSN39zm9yoDiKv1DvQihnRr7xS5a572WMfDPr7oZUWMcm",
  "key23": "2npBuEj1NL8wMqxXBLhtjqB2GpDbwAs5LHp1meHUu2asQ7B6pRqBuxSJxobFiQPA7o3Z56FP5WmsWgoAJdGDSoj5",
  "key24": "5W3UDx9ARjtegQb8j2EXnDfEnZy1CpZbVYmiEWWN3W7NdiU22YwQcYrdYzsQXpGZTPkTV7YFL3wDa7uqSLTNqUtS",
  "key25": "5MonbCWdX7f1V3JRUF7Am3pFHAiJUCoNW31FKCTgq7PrsWXdthfG4BWF35rtn9LWLu5RGFYx9n81WwkqVaK1QwR9",
  "key26": "NVkoGLhuRd6Jf7gqq7n6j5bg8iPoQMHrBzRf8Dv1QShNjBuiK3oh7FUCubHato4JSYAgi26EtYvGWFgmy5x62dQ",
  "key27": "3jJYBUQBVWniSjfhs2LoECdvm5mYJf6tk2QrdNdcNnbo1wo61gcymRMJh4wyjN31mr7WwejXEcytGJZXXiwew27e",
  "key28": "4UX7VxjeoB33oeeWjHMk1tRGEoBpCyC5dMr6PXzEYrziwctfi3Zv1E4yn8UtBDA9AuC34mvq1BRRC6dgpSJZXxX9",
  "key29": "4o9S3az5wSxC5CK2cAEV2nWCqNw24Lito1FENtUwNg1PdXGiGmFS5opVQa2w5NoZg5dUw7EYqvwLuiwron5ws1oR",
  "key30": "4KT3yGsXaZnwfR95TEBWXVdYMqeJp5k3WhiPuSKEbHHTySdQxbUKKgzKHDSwGUzPKEve83SekCVQ7qZNL4kQFYJC",
  "key31": "5vqxerNc8LkFMfmQ2xtcUtYjN4rYdTjvGb2afHpXfYZpoDGVSJiyqNc5AjutEUsr9zmeB7miW83453QxUQ6Jyzvp",
  "key32": "av96CV9M5MwbKB6NgErXiUJw3LJpxsYdLh829SXSDVqB2ctmCR5hnJJ2dZxHqkRQFmWGy7Wq6BnpJ5xQR5YqH9x",
  "key33": "37qbFFfPn7UhhH2mSN91fD1zpFa484eoKs2ECb37TUtNHnUHENLkpV1gtPVykWjCcF48n2UBD3WeekD28iZcfBJs",
  "key34": "5yL2panSkzFAwxogkiUro6TsgfPfLkPH875PZtFCMzhLgpdZ4y5ubE9cyeyRF1XknasmsA5qCrdxXFMdyutYvFyR",
  "key35": "2nurkFvca3RutKoJz4v2uBpdJNqEe7pjaYueiGhesudZti9xxMXZCypCnyJtngWXkbnU8GEE5BZ7dtqH5X26Afuu",
  "key36": "32mrb9dR6bfG3PdXdzsdToJ4TWxMsigooZ4HnEzrXR1yPrTMwCYhmEkLY3CwB6bEsUefsW2Ea16Xs4iUa5JWqkZS",
  "key37": "2nnUgZCGHqQTjQH8vza57qqL3dSAU4dYFLRLrkG9YgYDSjoRcEJsEHjWevH3i99EXtf292RsugLMpW9UbkYyNnBo",
  "key38": "4Y3Ny6JiXGa4LPpwX3oxABN6SdrFSXLJYQ355BWEBy2vE6kkA8nV9uPsHhu98SZ9YhbJcgm242C18tVL2mCh27uv",
  "key39": "3mYj3hAgw9K6MAESGG7c9ZRhoiDs5if4syobZ4DMuSkePz2b5aiWvV4YsZPtUhAFz6ZMSR93f65i67r5gvqqefTC",
  "key40": "5qUWhA2afAHyy6RXDdwsDEVMqP7Cvp2AKSEJBbKTte5XQEkRqkTnjCSrXa7hP8xUt5riVeRiiXpiGcErFyYKVKZj",
  "key41": "5W18BcnJczn21sqhj6zQwKN5ZoShwyXjkmzM11gdgemanLNGfCuvanzVbRV4GivQse1rmUw6HkzjiyUiQUt2UuBC",
  "key42": "2M7k8DabP7n4t1wPBzxmbZZKtLsvygSNAUX1M2cVd5TFy8G4PmE6TNKS6cc1vLKQ3d4DHNhZxHPucSBkpsKqboDk",
  "key43": "KrLPsUPNusJnSeppvc5DTF293Z6LAL1k6sd2hJrTHyXpn72u9phi9cF5m2ErWhifKEm4V7KeBDpDN9FbUGVRmdX",
  "key44": "i3qptGUiN7awhYDoqbb4VtR8HgYBKW3iEujfJBt9gwxXwHRDfayKyijufR5P9UhcTRggSNtiR7ArY5oRn4HtdMF",
  "key45": "5EvA6ZUZyhtUMWRF5fh2g7NGLrBezTrySptU1KttwBvgHxphPYrM6bhoPjcLaJTa1eFphjjBD172sjEcPTququWE",
  "key46": "4ffNAt1areBdaQX9J5DB72UBs72Buws1443Bj2aq3wqkWFhGsSc9kep1TXh3ZfcxUZUx693JW1hUi6ZCCQGyj2ia"
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
