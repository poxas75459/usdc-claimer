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
    "3yov9pKuJnZq7XasAhBAPNq1mQgfEn1uH6AgQz4gDRkBV6GLFRH8RB9u1gazjKH9qE8Pd949Ea5ojCuEVmw5eeqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHhZGXqNSp69X3FAv7vT7sHpXrRK7Z5dDHDZDaKjgS1Nayqeic9qCdgCRpXNfW5BWXEdw1TAitsZedkFx7Htoyo",
  "key1": "LCZ6HAXoW4Gj2iKxgEvmgsSKwg1HyHy8RfJpUtsdgbHQJwVLYbCpGBnc1FuCKncrS2tAsw1WrxYrpvKcnsd3zsA",
  "key2": "E6GEph6fRhiC7FvPBCAXqfsgKAFn5Kqn4qFj6NbmVoyhJY9eFZ1mV1fxBT11Cima8jGKqgSAdpzdyjS5L5pcY4T",
  "key3": "3SCQU3Pm1fLWPXsfymJ17EN17MdbPgrBV5wsexmHpSzkXwUeQWVrJGPHTs1TE299RVJfcoSKmDq129cqSMpoi9ch",
  "key4": "2kcrLnvjoMsuU3UiCjyZGvEzdP3Lxtc1b4AMDDJkiiXpkCsTftLdKQ4ANvJe6xgrAMSoUR9VbVeR4f6gBhmBy4ty",
  "key5": "4MStjebDbCVtcoE9Qte9dDBQPUkmZeKmHHJxecDT3mPCuz2AXiiyGjPR8Zwe6xhtjg2XWV4zP1EAyFArSf3msVst",
  "key6": "BeeYCLtf2spckHUSbKzLWBF2q9o9QRHEQ78ejs6MFEHjCMyYFb8mc973gUj6BGCpzpf3rxZjFgdrEj26aUifxgW",
  "key7": "549vvdqQuaE8DwSwRJLgZ6hSxkjxepLtBceQCrnVQpqHfhuw2LhaxJ2yGheUaFiLu9MYdrgPw46XgvF4r1TGeMbz",
  "key8": "4FbdwpewTe7pfRvfhzPW9NfpCGK8k43k5N7r6iGfUEpTThNedromtYx5dTerYFsGkfwxtyKWbY4SHzCDatq1dE7b",
  "key9": "rMMo2imzdyMSkHtx95RtvyLMHvm6GiHuAg3Y5crdKse4hmTcPEEpKvP5nN36V736TAPRHAHmoU8P1YEjVZSTV3D",
  "key10": "51YmL9vF6UH7iwSunQWAarfECqsqHd9i4KASz2mzwBLnaCy8LiRnix8LMPHvYVtLmTMfcPwgj1T2cPzyaAD4cCSn",
  "key11": "3adBwGjg7Rn43LBCxAqv3kjjt36NEDHkae9bqTWr67hrFnwcStEodFB2hfZhKm9HjyBtFWYadENAHhpgU9Lravre",
  "key12": "RZwgJL39dC2JyvEt5uEpUc1cieMazvoheErmM6ev6RnRwMPBgFMyn3JSyYzy5Sb5K9xKonzDseM3QrZHw4teLpC",
  "key13": "5yo8u35YrQ8BxLNjTFrcPTgREMFAdaswr8CJWw923KWmuSASCNwAnfon3L8jgKMEbXYjSGj5Nu1CjKcdS6cgHAcU",
  "key14": "5GuTiFiaiinUQoz8KT1qTBjguDFmBYm6wMTTza52fARPE18jfv68Jw3imrs9Dk4fFCR5azxWUaBxZKaGQASsooBP",
  "key15": "z9mA5HrZMbHsubmF3KsMa9ZMQrXygcp8XTMc6VmuHutLnG74J7T1ZEuG64F8cZW3hDgh3mv9G6ZKxVS1yNu3gGt",
  "key16": "5DRNnJmpt439rKapGb9ZpFF3K7PabeyQYttm1jmvzHr6gRFCi6S1s4JLLWv8sKteBGL7u2jqMtLczBKCVadEYKaU",
  "key17": "64Scy4RFpnSD3zyVG2tHLQEZBxEutQVuNXzgQBJZAcoj6ehHZYwMDwBz9ME6bCcdNGY9pjebuWmTQnkNns6LEK5P",
  "key18": "37L22Lt2xUZ1mMJSS7ZAzh8CeKETaWQL1aw4deQ6CM9Mu38nRrKrFtsU15jiFvwH84K1LmcmLhZytYZ1pCiSmPcQ",
  "key19": "3u4hv3iUfWhhMaaXWHVJHJ3w4rLmMuapRRoxLhamYiT6tRvdEWNJWcUbotL8k6uLsiqtH61nSW7CkK2XhwpykxR6",
  "key20": "2V4DFxXWEPAFZn4HDVnrgx5shE9u4WJWioLLKaduJFeZLtXSpMtkd3F1gpJgfJwnfF3kG2x96FAjfCjv92VYEsWC",
  "key21": "3TL9M4VbDtjrqV91ixMVH5GtNiHAXTCPRCBkmAXBxk2HaVVYKkz59TU8VmuPc7oEfM5dcyshbk77oFxGvRkuQjNP",
  "key22": "5ZxV7HTGvxH4zKBnY8uMZYzo174rWCAGDccxZPsRA9zr7rZUjzJ1cH1R8z7byc1SFbYWYKXa2RtuFUoYd57MisCj",
  "key23": "xLEYAHi8bSziFUxABuNQRus5GSLnfxB1LFfJxQwkHQEHrj4oPQTNF7u9Ja8mtkySXBrpH1X64eshBCgkSuaT6Wy",
  "key24": "2SmHPmpkFUzbVKdms1ctYHtszYkosuUVe2YgeVx735ekMtcHfQQixfAwX6n48SNqGVZQXQWVLK5j5tV31FZU4CA3",
  "key25": "mpSRFGqhE2QewoMXWDuYYtUdkUfMLM2qsy59V8DVX6a9WFBtVGhXGqPphWoDAquGoW6bSAe1AMhgj74TRkgE8dK",
  "key26": "3cT1DYYrLaqkityfWL2GypCe4L5Z542AxAKFPw4fVQsJjjeqKbDS8EbZFks7Nj6WPNJjv1UAnHFnQudo9oPVAvNT",
  "key27": "2ZP3whz3eu4ymfvd8MH2NMbBv3ZeS9mtEB82Dk2HdysbjFHqtQcXaU4K1CqBc1qqLSqhSk8Pq84WpTaL78ZYg7o4",
  "key28": "os9r9fDDCAxM8rosuP8bJeeuqCr4mEoE2YiZ7K3HV77qsK1RQoqFaiVnoXsvfaXoHgvXZ1h73YKjEkvKU9jWfHZ",
  "key29": "UobFDQ4Ptpc82XHqmezVhkRncVyDSjXZidjU4wUY438cEU1cFKhnCkN49sAjA8jujZmKnwpwZa5u4BW3Mywn8op",
  "key30": "3eukaUwLvbBvUAfQetmg46dobUFmgjnMZoqDr8Xp8gqpQUBBBPpjBc4JEYit5mxZhSMvLBtqfMKBhkZWFygkjDdA",
  "key31": "4Nriqt3xMYoX4LP286dRu54U5bgC1ccin7SJL5k4ixLXk3rFQto2wAYZfsZNwVkFtRzosiJjg4MkzrL3YNNDATnq",
  "key32": "wo7WiGsqLXaskquLBAsJ8T129eQrSBtk5AE3HuQHtaQw4ikXQamJDgyQmJ74vPCuUhtASaVX8LXwfvj8bZxb1zX",
  "key33": "2zTyk49Jr9SPGJw4JngWNSXt3zCJa3sc3iw6bXRQN7z5wFnXSjoosumwEbyRzX13LxZGiv8gXfXV2kh2GZeUrL24",
  "key34": "5TS99RJ112EmbyvBMjmUKdYd6Tzsgc9gEdfpijbH3AbUypoXL9AATkPvUsvLkFG8sXwe98DLyLPvseMbaNZeUsoU",
  "key35": "41KfKEGWP9DJ8Lwa4mq7kSJLXLRL28u4qhDQfnY3KFXKV3dgBdh2MGPUZxzaZAGKHAEyr3cuooiv91TuMA1mmauk",
  "key36": "rjkjX3y378W9bmke4v5bHmnQKdEqQfYQ3vz9Xq1f5GLy4QMU75fxjZG1vYxvx3Qe2bNgT7wq7CG6s8gN9eV75fc",
  "key37": "2tnFu2m2go3qjzCBAub4W5gpJe51GayPfpJEVPmNfTiFpMsnUW8bzokGFDN44Uq2dfsy87ZmxDzuqw2Caa6eQw6g",
  "key38": "2GtnKqiB5oF8XoovEvhkjEAT3m2bb7JuoRcgQAUhkMf5LYR6XR2RHv4UYj6LrqNsNJ5UjLUaUmD6yS1jubcytJRh",
  "key39": "5Mj2jokJQ691W3RH98h44xWaG3xvGjHrx3eotkhoSeUk3wizbCLrvhZ52AWxWnans14ZQKR9L9mAyPcet6m65rVg",
  "key40": "2yTmwBVna7QPeuvfFyQxByBDYiXY3qBXpVLUWEuhneMVWHHN6S13Ai954RHRnbomaE42VGv2acc989qYAVz7vJ4Q",
  "key41": "2Gho4KDjfDm9orJLYqwgagYf74WwXCdocxWNJ8avADqwbfVFvb7GcpJdoXfTvi41komrpTrG1ksbhWPafP5Bhbo8",
  "key42": "FZaeZrbDkt9Cha3reL7wFF5aT798S46evBUFFm78FPEEXNBCMqRZqAbcDSvBBizMTP7fM2vCDJYz5fSjv4LHCpW"
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
