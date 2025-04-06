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
    "TZYyvS14zeVxHYjwut3BzDeaExyMaFadiMfwBbFUpRyydtFxp4HZ2NkmrqFzFJbzEEYYGyLqjitxoSYbScsAdgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCwHpWqGbSzSFyCjLMywactSAvkNmLL4BUtzdRNj9rH32mc8C52MGbs2dpuKVay6yWCFPjXvnJnEg9PktHWYLuD",
  "key1": "3jKWYN9WQZ3HCEYXkzjfT15wfwbwLE3dCzr8uoxSG1tLkqgZDeGmumbYWjM3diDdzaHeT7Whop7HQM5JRw7jT6vR",
  "key2": "37vYKhZ39KTrn95xMpGENyZ3EsqsYec15j2J6YcyVUS98HJE6MDU4aTUt8YtyAci3ESupUkcwXY6wxq9rqm7Z5V",
  "key3": "uFds8aUjKMyp8z9tB6PamUa1LRyHUvteccqxDAr3njAsPz7AhpzaBqoxD3VjY3GtcrGs1c7L4W83uhkDPrUi42X",
  "key4": "2mdJEZPgLzeUgSwFS8hZ8CKYnZzhUKpNGhYhCxzjE2Bz743NXjcvkzGfc3gHSK45RgiLPZcYV3cDqG9DwnwZfwRf",
  "key5": "28NEiY6iBJwhGQkTXoCu9p6Jih3ExpeKH1PZRDfAvKLc2YyNrQb28cRt5a1qdLTXnpyadF4YWj7cFFrmNS6DjEta",
  "key6": "5Gq4TzJCYbpMrV27fSr3ygVVAMC1EXav9CC3ZWE1vegET5nWchMeGU483X4L4vk4jQqjbjPXjN6e6e8pNXn97oz1",
  "key7": "5G7mdKp7gtfWH6zSTQBBc2Ty51MnY4y3tFgttZmSm77fhTtXvQGi39tYtKNH6nKL7mwULYpm1gian4fxsFHYmTnq",
  "key8": "21fCpQ8wZGnbGp7HN1yxKpDN4hSMhLfK2fyfrKDVQK9t16PuarjYwvWpwd6XuJno2ouxkbjZvHhpNi2N7hFboXm8",
  "key9": "2zfmmmF3pTbhFvXUrLSo3niaJG35HR3K9mw9EY25RFbVib43DJQzezWYrjJF9ZiSCKvQ8E9EqV1ZYm3Z61DMQ6Ni",
  "key10": "3XDcvYVDrqD1afwGxrnZg7RoRzvSfiS6HBMdQyou5q3BEFLNTZHmmfkn7MBA372DCdKDMKyWeATDXFj7dLGHfzQe",
  "key11": "fg5W1GTJ9mLtgfPpXj77iaqAZjFfj97XJVjiwwQ1wQoW2nyc1mfwr12jaaZUQ2f6iCpCZ39eCHySRtkLFprFseo",
  "key12": "3Husb4o4hBrPFLLdG55tX4ezkegMCsZSVS3nT9jNnjyV3iNs6JZ5nSQRLm7iWwnNqXJZ1rTrgBzf2Dkq7EVutAbJ",
  "key13": "624YyRSiySW8DjpNr5YT4VMC3SMcT9NWFQy8hm9nKirj1ZC54qBtBd8og7AuA3UwCZKBVwsNNgZkZipeWTfkBsLn",
  "key14": "2ZXNeVeEyMNmoj9RhGoiBHC6THkeXBBWbKkPKwtQvkKv7FN3KuSU2Ne9Tp9pCJt9vqN9cq9ouysZaCJ5dkxS2nGi",
  "key15": "5azPt8f3mBrRi3SwC34EXaPqMArGHBDGeT4xTVTNTa6TCKzSBnetn3241t2AQt23ffXKjjrs5SBdLLtCPyKRVg3j",
  "key16": "52Y5i5ABGfx2RJoFomAzn8rPAB5XxZp16nNaBb8DeSM83FHnZn2vw1f3VauXR3fp9HbzcRfSuoqqsjEpFHGYMPz5",
  "key17": "59dfb4bAqiNeipKs1Vqa5ftvHyuUdfLxt3J3QSy8riu16Hd5qFmPDbSa1QbopPXdzWiiTvdDy5f86BRzNFofiGmm",
  "key18": "5FcKvLHFDYergNJuRtxcnQKcAvRsCsVeFDkcZV4qHyRQCChy88QUdNPKriiZWk7zqGHN4eDyNv28M4uENT3cdqZB",
  "key19": "HK2Vx8S8V6pdQHzc64sdHiaKph11w1Rrjmb7nhnjaPpFkntuZfHK7piQ5srazh9pHvraYJkKepaSyC6hcUPY1nj",
  "key20": "39KNwoLGmnGGeAuh5Nr71cxsMr21LJgQH5eDNf3rjTSf7mv4ufuTqLnebj3PSdCFzofGVmdxDz385goVR4MxViEb",
  "key21": "dbsUxL5ZSfFy4DgafUJcgzLyCWAWXeNoTKdraAUsMcnCpGFQAi428tzFVPT2FUieNqoqmB8Bw3NS5HyoTfapmh7",
  "key22": "4PKB3kcmPVN1hJ6zxDvpRP1f8MmnhWkGbmUjortRz757Y5hFwwVSnjV4yWGPTSLT8NLBe2nSsz93ymrkVYFfgxTH",
  "key23": "tVNH6DwDjzsPuJpiadyr5pv6UdPR5p2kwyTaCgiLY6NWHUBdr68SCtBDN3XyihtDDWJpRWmNqj1JNEpHCbTBXoa",
  "key24": "2Zg9nQEGetFmHPDaqp6YQ9M87PAsL3jWuonPo2ZYT589Zdz88srA1az9GaeH1vM8vGwrqhSPCSMmQ4xWUsL8bohr",
  "key25": "58vNDNUh39F5Y5s5UnDcGo4nsT7ieSKDDKPcoWzByMy1MaaA1jCWwiYLaMRgUwcjzHBnzkDg9rMUYJRGP6GY2Fii",
  "key26": "3JgM45Kshn6FcXSZUjXMmjm7GJEPCZirrPr1XPYiA33RkG2dzJ9Mc7JAKaYKgzwdWnKBMpD3joxpbApdr7gzeBtQ",
  "key27": "4HPixXJyu62U1u8hWMMSRuxcdJ5wNhc8sYPoXdvseuMZXQCXPn2ERsnjs8TStQZd3XpYdDBQwcbi99qzY8xK9wZW",
  "key28": "2tnBkBG2oFiYwoZcwkK2PT9Dc2aT2skEUq5eCG29d8HrDonNvJotxYV7tkGeV1efSBcXeWq7AwPsmFgPoPHVtDa3",
  "key29": "4DW3AAtsFibEFN3cxuaGv4zPcHPFLGPaDojqAR4M6qxUknj3aM3PEBQ6L6VrgdknFHmAkNQycubMKeTEZ6G2ugfL",
  "key30": "2cq7GfgADHT87rRUdactDSo68cMrKFcHERji1WcikxbZ3UMKJYRhYX8EL7TuW2vCraa6ZT6pmRTYuKEwo8fEykT8",
  "key31": "4QJRoX2WzbS5bkmApEg9wk5tmzu3wxTC3McTd74LdCnRAExG47unMuzyDArdXXGeHFi9gGN6h6iM5TZNQt8mMcjM",
  "key32": "2ZNC1g3k4epjAcAndKuAhhnNUmam3o7PgZ126Ger62BtpKQ5FA7Dp6oXNbUJ8V2wTdywUDGrYh3YFMx73TqLC3fF",
  "key33": "57FqogzSrFeJuNNK3USZNkCNHnKSUFv6XgThPbtrkRWEpmTvYaszpWHdSEJrdt7DxnDxT2v9cARpafaycGdiC8wg",
  "key34": "4fRQCkCpxN8zx3969k3AfceFkSBaqsgmtRicNznGfgBHqWjVxwi5bP57PoMscvr9x87nVhqJQL2XKAnjVNo8VHN3",
  "key35": "gKyJeoH7SWF864raR9A73K87WPj6cCQTBqxkTKVcE1vLbVTsyYT5t8cQkpcT1c4uooCnQsmNK8STd6MLTmHJ3fW",
  "key36": "2Vykf7ZGdzoCa5Hk4GuFYLnmKngKFZX2HUjHRG7TDQS4vhwwZeXXkuJVKEKFD26jhZjU9jMtECQt1NCZUX9fw6Fc",
  "key37": "hxN32A9Dr9xuAcat4wUq3z2cE3G4andEB4BXDXmavcE1BLKGdgtA15gbwhMqMMeH4TM169Kcqvqgu7g87S4zSxx",
  "key38": "5gEUhQHjRTbAQK6YMij3gTKnQasM78xfafWLanXpaSPctxkhHPYGaU2Ger4vqBUHvTu8h6NGqXgfxuYVr1iwvQX7",
  "key39": "66MH4Ea18itMHjnBdhdag7zAUq4SP86nhGtpoa51giEy2CVc24AvcDXsGPqMLBJ4WJQ5YT5pNDsn96xU6MsoE5tD",
  "key40": "TpBfp8FTYpVikf2759zeciWo4QBeYuVpUmmTWwcgYFAqxbZhAkCMfDqUopasHyqRNr86bXgFCHwmq7VHGAL1pR1"
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
