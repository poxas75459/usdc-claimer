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
    "58ND27KAVMqiKjxSRgndUtKyVeH557WQ9fpMtuCGukMNfEZGGhXqEqxuKmwN1hvQp3gZHjNfxL2QmKN1KPMzLgtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rFfMuAxaDkgyDuhPgY2632ZB3kTdK5i3NQNBNk1ASDSeqGNM8RLXjUVXep8LQKuFH3K4X9vEbban8FUcjtxbd6",
  "key1": "3nZufDfQbwh65NeJcrcAy2NegeC6rzwMq6dj7WuRha9M1NQs9FpUYtyvcTG2Ehg2oZ6meaceMm179dxMgHJ1RUJb",
  "key2": "48CToysm72HkSseUS6mwg1pCALoGfSj9UUhqeJAGQsbQVp7fWmnp98b3xeGh5WWzNq6MVRViUsp1SZDy6YVAgQ34",
  "key3": "TrKXhCaNCzW4BruG8cFqDuNADoCE5agoaFuKdyr19NY7fNdDw2ZkSvGw9GGxwMLCAbp8VZXKNx2WNvBhfA1GUTJ",
  "key4": "56R3bJQKYsaVtbthK1BJqnhX9Q9BKgwBXUp7tGhBwLbRnTbXv89pf47Q6oXovsibtGY9E7zzA8E5jZdMLjoW2QVg",
  "key5": "24mD75jKtUJaxFN9CEVpjngprXqrAigkSATDwnxjJm8mRQuhrChc3uEzNrQRTbFd3U5Ttt6GmyLq9zBECMbnGeBv",
  "key6": "C64NBQ2Jsgi4tGyGdNX4wnfGW866qeSyCLWhJzpgFC7P4AHML2t4PqywfpFrpD89VCnqHCTCvJnE7At5oHq7buo",
  "key7": "4S4qB1u6mzaLVUCP9uhYyZAhEMLCrT4r3VpS1Fo2tF3FydvveLM1SYP6ZA6W7mZct7EMWZP9A2GVd5Z7wX3QACV5",
  "key8": "NJJMMBMXAq9EDTZeeHeAVpUfw3yKgPerV3NbMBKPUvf1VwXtwonjQc5qNPQVCyUkHjSL3qo8F249LFQx9iEZqoJ",
  "key9": "3xTXY1nvKXFsM5LomffDGaoMKkZmUgtbCyaZ1nJiPzXMXWs2BHYo1t8MYMKA6z8xVDiXfsa3EzgeUU7HgsA8yi9k",
  "key10": "fNwfdbQVTraKd2r5TY74rMrp3s8cE4dauVfPqRuJb4i3bWzbPfSmfVjcaqDYGMiWjdDDm8PSawJqbbqgdpV6fvE",
  "key11": "3AzMNMre8PEYM1gwfKavow9RiCdWmj99fYhgiPrN586x3sBtEgN6xfp4e5ahQxW3AJ8yjwWhesV52qLrikrnhBHn",
  "key12": "53oKXxsDATv9fg8S9gBGVN3m3Zn9wCsC77PtTvntveVpzT6ZnPY2vhiW211kVsBtVo32RXw9vfWkpCfaaM7W4Efu",
  "key13": "592fkX7ph16JPZRCYYxFpbJmB6PyWtQZJzCKQ8Na4g43GppNygP4G2eady3iV8grgHHsf9TRxvrTjYL4e9quNP6D",
  "key14": "26G9hPNaJ82SubXFbuyBowv6ouMsCcVBK35n22sVDkivFyq1orig5tn3E3de1k3u7Fgzdr8132ZkfKncZG1U4FzF",
  "key15": "4kyv4osnon7nD2rZoRKsXMsvzdxRQU4JBZ44kpa4ADJKJvERU4H8vzMxNxbk5VfZ5g1ttRwj3Ak17ts7pNk88m4W",
  "key16": "3s2bfZzjcMvGz74vjh4hhV9idk4Uvt3C1AEPBUUMzYYUwViVQxWBU5iYfsmkRT82NuREYYYvEABjGb2QKKJdKvRZ",
  "key17": "WTRFu54UsVZUFCyRa5m7j3xyU1ir3Fg1U4GGnHJBihAEARkuA6pW3oQH1cut13zqDE1SYtP4TAFwGoTf6Et6EG3",
  "key18": "3wKRo5WG2hMsfj7MNhoRzivstNiy2nxW8o4J58kuiinuWFsFWZftCQcBJoGoLoK4st1ruiXTcRDhakMmTJpHeUr3",
  "key19": "hRuUdikgCaS8EBGZJa4gud2k2EUULK4kWD4ZgVF8F6wFBGALxDLvYqQuaDFrug7y1ZLmm3588xhUZ37Yk3AqPrH",
  "key20": "2Bf7ziP2Ub2SCqoEWgUUcdJLkraG1sJrCx1EMMSrYEBymotb7pYyNhER6RT1eDzRhSrjwpaWhhLUt7gSyfg3bDhW",
  "key21": "4BVcUcnqwBDtoCCY3X3wsFYDguRCeBdZ6SSzKc93fp5Luk8rmRndVbAefW9PSjM1nWU1nofNBJuebUYfwpcqPQbp",
  "key22": "48KThBDA59wu4hC3DnzKqbJHbQLKmwMNy7ZrqGcosjVS7kHAa2BnK6YHRRbHWey58tMYWMySX6kfFRWcnEyvvE6w",
  "key23": "3wbRJQbfi6hQBGRvsrRJK45qebqaBGpvncCyT8NN6AqCoHddJ2UGWAozfTHqAErAgWGovepLDR5NYrdEZn7pSXbM",
  "key24": "2rt8KpLnNsFjFdfFodYcUUU4r4SSF1XdCL7Y2dkppdGfEEWHiDumjHmdM1fEiKUZopvCj5VPhQGxiSY17ceDPTJ",
  "key25": "3QuuHprC4YhggGBDZLSeEY9H5FZ9EbnKiva9GtKvSDQHRzXqWYmqQxXA9LNKrWG86WhhXGKv5HS9GAHTSNfR16Ti",
  "key26": "2riKDJp8CdSqHL3nY763d3u6Ho8Hp3qzfo1X3KeMDLHwZhjyHywcrjcMyeJzBCTCu77admfcEjwqn16KtopBaUbc",
  "key27": "3V9uyivCH56t8pLyBLp5J9GhdibLNSDTtKvtaEw1R2UMfqN2pnwGbBByq7zTcDHjmM8K5n461CNzaFed2YxEo7f7",
  "key28": "3afujLEUwoPwKcsJZjp6KeNwpVruCefNfdHrh6Anedcycg7Ph5ndckUiYZvCuxPUtNBcZynwifBwTj5vbb9nEuMh",
  "key29": "3kyLE3ggFvCbkAfbHkeuBpDgF2Yc5whD5Mr8FhUCWaQozc4B6v3NhbQVJhYXsmBMJTrEvVJCEYgjgFKdVNLRZ9iU",
  "key30": "4H7NjF8ZTRy7915atkJv4CqfHE1ZRsQEmn258sjr6qQkQaDLv9y8Aa89ExzerCUmYV2VhVKeNNuPkDb1zByLo4eA",
  "key31": "4x5x4ZsGXVSBHEFUyiVrTFZnTjXdnBaad5MjXJ62oSMyuDH2WLUb8kQ2foRjm8NGyjTTK5syih2tVYUnzWF8WYMt"
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
