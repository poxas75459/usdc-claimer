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
    "cy6pHRChdL3x2ASn513CY8y1uFmtz5pq2h5WH2m4zPtXcVPYACRW3Eb5Nwdo2T76Peoa9p5xYadHU4kQJjEDtBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vu8toL2uhKnbiAajQ3THeWpefRbsn24sHDMCBPEfWw3cjQPT9ixPyhkRJTWiTHPkHz72PF461sSxAxdKZNHJpm3",
  "key1": "5sQvNgcku2LzmLVHurystkhGpJRzqPgchvbhkVn5wZKqR23ZYeyYHziNfKA2LvARa2L2Lt5oVNjhRuJtxhgjcCEt",
  "key2": "25bZ4G7tmb9yRyaXxTZdAFa8uUckDv2fkrAemscdZrgLZ7dEM9ZauB3kEhg8CDvWuxUHVaHh1D8nqvHK6FpKm4Ag",
  "key3": "3mTV3DpypSfAJhx2LBAbjXbtnnSU1Qb1GYiQtZ8KWyP3qTb9LcVdLb3FKH2Ho7KcWdoBgZrwqMdA2cEAYh6TEDRJ",
  "key4": "nkJ72kvCMGwS91bAi16GJfPxCsQMpJgMDT2eZhTbtigF3Wg9LMDDk5jkGsBCFmZLQZGGAhcqsTvUtUuZk8qZa3K",
  "key5": "dqjzjn5HSuxyjreb9qXfSQB3nFpNTBSHZW4yNLPVqcDq7X6HWcsS6RkwU44MFVCUt8GFxKrETYmq3G3t1U7Wm3t",
  "key6": "3TRRCWHvFqDdi4Yo4mongBx5XyKsPycZs2S6u4BK1g144XJdefikTeTgqegUMrmmgeQdvLQkdjKzusyrndpBbJUs",
  "key7": "2uxs6EujvZa4gQ9Gqcf34WK5U7BpjtVQNYABE7vK1iiG9baGQntCNjEwHKFE6xzEpuP7h6R5MzsFGR5w7rmffjgq",
  "key8": "2giNaXcMSUSJJ83qas6DKFXnEBqkVL9nqtsXmdapFqGx3MvFnbE4BDeYPbncX3ntx7pESFT9D61u3QNwrTsjPjq6",
  "key9": "4ReM54qBx4v43AXH83ichAqJcCYU7xmhEyj6WGk1SgmemLpbH923CJMqqLeefzFMoGXWcy3rqyhty8ktkLiuYXha",
  "key10": "2jtu8jmX3ZQJpZkwkXuQrnXhs79C9abpL9rjYvxkzM2V71FQAm8Gf4Mp2zQ2xAkZmjXnsiNW5MrrvvY1M5xj8kYC",
  "key11": "8ap78YB3Et1PeMA3rA1cCQHTiySmTBWwfGXUZgqpfahzdNEY4ntoQjyK53zzJFgSAxQomJTVQdKu8ajUybc5nJe",
  "key12": "3L1iN73jVAwH5tDrE91dvZUC1vGnvq8KUyHZ1ZvpDCc3Ku1KiiU7qdfZFJYg6JHnTUBigMpHuL6g5YuKJZzYuVDk",
  "key13": "3xHnFF6AY4Qoq3MhVdnuxmHrCaunxbdGYFtKWwLhgS1m4UaTRc3ZDMAJnqMYd8kXBWLTjoghddiBkisud2T4C9Re",
  "key14": "5N5cEsSmpLoQYRVSpodct6PmydXW3wZfR9mcpyoGUbfLQTyEq8eFqCwEtZqKhGaTmCErLTTtMzfB6VQjkoTgSjRQ",
  "key15": "2UeL32siwz3dxXhQ8pSJUusJTVjU2UECRc38tbTUkXReBAceXWBzspbLdNwY4XJdzwgjuyH7P8GxMoPrrA8AVCYU",
  "key16": "4pfkbDLbyogFE7D7G3mdh4yqGS64E2J71z8etTGg7MCgzamdeAKsJ6i5WQBm814hmxYLhxB1NFCTdukoGZrgqrrn",
  "key17": "Q69172nHi6o5MMSFgu4hvBGnYzrstimUQUwWpYb5UyxFTGZkLaka65QRXgMifLFR4V4Pi5HbW9thBMud77SyJv3",
  "key18": "2VviEmb2d38ak4BcCKSPkR61LZ1y8sxPEw7HQAtYYL6BL31pf3DmfHesDP46QcnPrLdeHNcp9QSUX5sfKiwvCzoo",
  "key19": "4jzYGjonUMYFB4iY75zg3LaXYsiqXqwFCKrzg5xfgqiz5yf3ANffgx4L7DH3wnBMQn56jzkVhe9D5hnZXh271wM",
  "key20": "3iLW3VyfebJPLbtPokfsuGgB2GP4xMCg6Us47sraktab9nTFi3LgxxPFv2wgMWjTYk2eTtuK4T7BVin7yXXYztCv",
  "key21": "Lyi6wURa9UNMicJ4MGEZvgxn9vBy9dFVZcab5G8KTBGDNc6GvMFqPW26ejWTkLfBSh5e6ApdtciFcjJTyXU14zR",
  "key22": "2LfJgHWxbxJqaum3x95qGvwtyVoYZ62gsUEH57mPVqjhqP9oefYSMPLSP97kviZBicUf7wfGTJo9Gs77bR5kTYoq",
  "key23": "5FSq48LiqMzXbGZTQ8grFdsPS6uxbM3VEmchbsfZ2wQQ82h3azc2U3Mt3xZGoEUHEneHC5Z4HH7TuxHcYT3PxMgz",
  "key24": "k4zpPoYazUAxffskyFuEsfGoQXWqUbG3hMqNmozaTX9NWyRbhvgnxVLgUWvLVqyDid2wBpx8kwfWnkMWB7692d9",
  "key25": "2Z7i4eifzDgQuo3JMVQY2qPLeRom3UD6HUWXwDayZyieECPiBiMMsU7Cyxb6p97wTco6wCnfwbsfkpLeUW2nL7yH",
  "key26": "TmTmMgoqXMxYtvSamXdpk8BNT1hn35fSvUgaZ1U9QrRgTz7Q8xFEVTr4h7pk8GZnqkZYyTNBQbButBABnCTWa6h",
  "key27": "5t822rotD5UcMjuePejuXreiAYamy6AAC6ErhJ3XzCm6k16PxX7HW6sdkuLfLvGgHRXX1N6hLPffHorsxS3EAtnV",
  "key28": "4oVo2WSCGsgp9byMg7HgpxrYthocMkSDFXWprcoMAEh34ek7dYJnJMaoYUXFu1Y7P4Rr6zvDCfFFdKNrYV9hepbj",
  "key29": "iRawXzLK6c3dNZnTTSddnTyrCbmaz2HE9fGDu1kdr3JJe1p7B394S8UT9FwNPk6pmFxJpxqTAAnppohw4orDaQm",
  "key30": "44CGxnCqBnWyt5ZUt5FpT2FGBxykxHgFLEb1NWjkG8Mq8zuMiz4X9viEzttYRtaRfUdX2KNtgbcdpLugt6MGMsp9",
  "key31": "2iu93sqzTv11z9TfRjAGWERcPMd3BzNcLp93EgS4rKwamFq9QGqugqN6pCrkM2CB1YJr4nzCG2PmScPtrDEMxXN4",
  "key32": "3JD1Czvg1JEGNPS8L21eBF9WdfLmAwg65tfTUw7gktWxybw69ygjR1f8ECgVeVcJf4fhLNGs5qcz8eev73gvpJyo",
  "key33": "51YNKPL2yajjsxScW4NiMFZ3uJHWEJWbovT6ciRfQ8DjN4Q1hE5E5vBE88NLqBXw5heHTMiBnavi4nLnehRfYzwt",
  "key34": "54365VFGxsMFyTU39fH5uHijNe9odHMpFTXTEFtHo4z6EmC5iC3HtMV7vtq9839PDD2JcDtUTVN8t6sP7qhoUxnV",
  "key35": "4KwCATBqzCbdbnW6epVDzsooNdJrjLKw3v2N96TGKefQXavqyjLxovsuXfaQjwSjtaw5uguErxXfd2giGBg9PspB",
  "key36": "5DU2MYWYBKJiZYCxnzW5QyPJxgnZduQpdK1Hq4aEuWaraLQB78ZpxVq1Lknajx6GJRjCuaHutUFpgaR1SR1BuoCV",
  "key37": "4ArhnBXrAYerDSeri82B4PW1CKk2AnCPVMmD2x23qkT4zibbRpr1nCUtVQToX9JKCCJMQLyg7LdtsFAHXUsr8uxT",
  "key38": "2MKDyfCt8GPp2F4uiDNk9U6UjRkJaNzJcfm3i7dGrZgPwwDDmwAe4wsu4kPykT5qMuk4EYGWLnj4m4wsoJNpoc7v",
  "key39": "1UwaMsiPToxvvMJHZAekXwY5s2WmxDQe5qbVqEgkKnDzj52mUskJxtP1Y53XK2EU1xHAyLUD9MTt3YkTb4YALMu",
  "key40": "2f3ZUyUe2EGyNV7tSfut8pX3UpSEvXm31XY2adPYXYDTikFBiGKzzHPQgLeNzRMz5dc126JSFv8cH1WCLyJKKYZe",
  "key41": "2m6emi72nb8SnSTFp1opRXY3grwUodf1kJCC6YLAfzriz48JCNduwuJaaaF9SP9WQu6anGBPVHEcabT5fVEs5QjW",
  "key42": "3guxEcNN58Fs93yzdstFr8mN38zDNpfL7M3opstJuqvy9yTcsniGqEe7yfscKZ7aiht2LkRTwiM6rRiPDprWjUmq",
  "key43": "3VVW2YxedAGJzwFEWMAXz3GhFETTpnmB2QDCbY2hZ4UWRAqBAUS2esVZKvNGmWZFDNTuGePJp19xxRwpoQ74u1Ao",
  "key44": "5wUrU8THbvj87rCTr8VgrJ4CRTN79ue3ubTPusch1VdLbMEUN4actxPFbdJdA1rtkiFWThTrspgpifZSCrTy2G9r",
  "key45": "5n9Yxcn24PJbxCPCVBA3rVDL4HEMnWdJaDn9tj6ZPj8sPMcYZ9XFfCchPYZ4Kjo9jKSSzLK6TJJWJksGeiHmQWEW",
  "key46": "2wGtBsNekoebzyanBdZ4BfZphZtxz5BuG57Fohyt8zezFjgvEELGt2HFAv6nfDjAtg2jFbsJ2SCBU4KHprfqHc57",
  "key47": "3UcyTcNjrc795TQFZkHLkndzGXSxdhhkyRLH6SnDTDp3yJuMXUDQKER7FktNJBNd8DGRXGThCj5qD3YNBqhdoua7"
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
