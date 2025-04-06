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
    "9yeBPXtKBFUAugxXawXwVTkUdfo1uBHxY8k3dKdcdbZ6nAvyKeEaQuhamzyZrwmrHJPxjkztLmmgnQskvDauC6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YZ9QSPF3p1PpfmAfqZnzGhtkWyYncg294X3f64oF2S2oA3YJF5YzL36Mo2kk3Lcc8dSYjeN6xzcV5PbRiskzKS",
  "key1": "27eJDPmJ1YSrz8H2c8NHKvDvJSCZopnCBCjshWPGNEiZa6WiBJkFjBmvFKnPG5jhMh73f53npB2cxHvYEL1gudxQ",
  "key2": "5PyHNJnESjzp3moQ2fz2ynZpM4GcGWhfrEEH8zps54MYTrLGsWPiYj5iu9tXmrACCXnKeUnAtZ8JBL987WGNXwLB",
  "key3": "2L5eG6N3k9qFAGfnzLxKAUX2PEgsZ3Hpy3ALwdBMbaQfLapNCPmp61xZ4guiwfEzAwsRxvmJShCMkwyrh414bAWG",
  "key4": "2PoSScxR18Utwp72xVYLGxYfMq3ufESDXMwYp9ko3a3eVNqYfBubRC4d6WA94rvmATk8YgyS1h5EjpXjsZDbzrxm",
  "key5": "YGwTdKEc8t4gdKS9YfpNyDTB1n864BsHPEdJ3YNcfHk6qywnbXsvZ8nsR9Kur1RyoRMMQKWSufX38ppa19K7g53",
  "key6": "2J5DNxW1VN2DvsgJaeYAq1h1mvUNtZfzWAeh7pa9B4LLoLaqTEAFpbh7x6XcZnWqR2eGv98WsoxNqkqHNcQS6kHN",
  "key7": "5K2jV7uBFachYF7zVNiY7AHWfoMNbuK8hE6no3EfuBwhKDCaXN7ekVP1Q9UMsMD4AkK8vmEkjaZjUoPq4zP8FUhC",
  "key8": "3WVYiLDRcc97vHJrDA1AzumPC6McGTx6pR2mh8Zp144GAMrXbGhSmvgjQF7WGWLQUCiwKxAD8rfxWjGUKEotRKeJ",
  "key9": "5BtW9N9vzvZEMNgT5zev84eDxH1qFgueKUytcydkQR17vMuhxceFUpBVkfN8vXhnGbSRHN3WijyU8qmnbtvdsa9S",
  "key10": "4Qwx1ZAaKy9VCra47J6gweiH1A9c9ufq2tm9rdcf9x6zGCMY2ktVuJL9mcTxjkH5ZyeKWP5sQ4VN6RAKVEcp5xd8",
  "key11": "3VHr8DdinaiacsbJKvZ5DdZJ8KcPHtD2SgYQcGxv8ZeTpFyebCwEDvdYjeABQe5xH1KgPVsJu5vYuRa8dUCQBwb",
  "key12": "4qhx1TStqN16JseYaA3to7sqnxcaszddkuCxU8HHKXtoPQuUdRfK98hsbP7WiNRi8ZUc5LjUpv33eoaomN6FMmQJ",
  "key13": "MPTjZ5j7A9nZjoDaazvWWa1A69AyhWTfwA3GSQudNhHaE5Bqx8dBnoXvpnyLiLGtjjyAgS7kq8xqVciiZwXmqNX",
  "key14": "3wRVvgb9yAo4JskHYKCkWcYqHGtiKjGSAdV3k7x7w8fr2oVsfim4GfcaqM7N6QNZkbfX8qRuiPzrKtkvpp9U3qUf",
  "key15": "QhDA4X1DwRdefjCC9HApnaNz6j73eHL7F7kWbXrXmPGUkk9xdJ6kQCnePYYxe2VRnRfMNvG6YWWP616GmApZwGX",
  "key16": "4R6g18Nj6n5oFzVGPTzKdvmnwakTRP8FP7gaJvfhvUioxydkC6Yq77b8fRT2p6fmLC9dMYfjkafiKucRpeLCnzez",
  "key17": "An4B5pa7h4pTavhNQzPhevr7N5GJz7FsD5weNr4xbnxW5qNUNTFRvA3xbdV4kZFMvQLqJ2s2opDxDoctbz6Kt7o",
  "key18": "26b91EUf6qj4mkWs8FWoWekChinbTrcNiuTrD3MuAGpzHoYbyPyKXwbbyhm3XhmzYvPMzKZYHemnar4swGTa3MAm",
  "key19": "1qmHJ6k1t6mfCqfX7LmJ6sExpxuz55CDpaWSCLNaFxi2ZSX7YUvfL5Lh5MFaNhGQdwuskmVTz6CRs8kvpmS2z1o",
  "key20": "53kd8AqdcnEegf33CkJUefKchdCHGq3fSBkxEDnqnVAB2HeXSHcLFhdGQpXxUgAHsuNSFgyAAzzUiz5YH8qaAEHf",
  "key21": "2QyRw4VQLiHHQ2jefrn8jdjtpq9FKCEeJnSYq8Nj8FRaLmTCPQGt4pLLAfdXteJWBETb39CGosApU1R9A6zTSBQb",
  "key22": "4rxHQS1ZiTb1zDfd72bh9T3dnkCXg3h6siryPM93VSdSCaVEQdQJ3VXxY14MEk5xGYnsBW1u8KFebx2nmzcSe5Qp",
  "key23": "sTzeNSo4dHyNdCvFruKLnAKqMVg7h3JeeHrRcGUh6ayq9n4H1Y8QDPDy4RuEKdxyaXQtGLb6o3khkhNfBPZGxwx",
  "key24": "KckjLKnp9enUftv3GYfvKo7q69WSTJAopg7uZhQCfoSK33YZfJ4a58UoaNoJLkc1DZT3hGwBxBgPKZ5VTPn939w",
  "key25": "ydV8d5NED7mjM1vto2LZi18iMJNCAdtEzxsQiAofaL4HeLiiXUhQ3e4341sTVGkGfjAi1VY1NKeBWiMgtLpkARy",
  "key26": "2KkoDsPGvkAhykiXR9pVEX9DbVfETQcucoX4yfNDqTteCnftq7tDVGrxmU5za173zXRrdraSVKoFX7erEtJEmjYH",
  "key27": "46utvjkGSk5aYZrwLz64vUsJN66sCz6SbE4v6hNverzDNw8FStivzN5S7oevVDm78TctaRGsSWpg46gufEvz8Dg7",
  "key28": "YxUXFN1bp2Xu7Zhi66TZdS7LpfDThSc94atN4hT9QCPQYVxdC4nMJ4zUPAYns7VTSegBR6PEeyx18xv51tYGfx2",
  "key29": "5MsUEr2PRywuoyaE6vLxp9gqK8ro5mfvGCR3HtBMnUxWPaP6HXsEeh63XZoymvc6WSxsrCarzzwSp4YEDSZ4G1Eh",
  "key30": "QXJ88CardBT9ekQN81AjLFtmVjEm8WmsiTCJz3NL5frBhKG2L7uiiy5VfKiCdkJEFN8NbMHzfVchWogcwzvz8Eq",
  "key31": "2Cxp4zoyeSjYzNg5E9pcfnb53anGdnoY7RMvCRkyAbnrmXpiDrqLzWDfBBjdYUZYggVTcJrYK5bJX9BRE5rPwtVn",
  "key32": "5XJECWcTS8RLNmKNfg9SNwpMCebrMBu9Ab88SjTpKt4j5QuxVQ9ypH8tH19oGc9fCMUqwMHMZRc5jnyMuQ72ciWi",
  "key33": "2QCwk4ixiC82AzLbHavwUHNytoCeg28jSzrpU8gpgrpGpEB7qv68q5gDekELmuPYcwkPQC2KRsf314xDsZjW9oLC",
  "key34": "pZitQa466VHijwFWvYZ5oD4cgaQ7dJ7wA6yVGJMkCtx7iX36Mk65jqhWTzk3V6ZumoDVqGrTQ9y68GW3XMJmYpc",
  "key35": "4JEpJgRkGPj8FVbAMNgUbJ9uyTpeoRDq5HVpJ9mPmyQ11vnFzFPTWSmpeiZ3QwKZn5TTWM1o6keckttUYBRf8f2h",
  "key36": "3mAXamMKyjSwzCW5cLLkC1bGMX9UnWiPyE9HiGdhE3RgXTzgMNDtwYKbwWwgiRAxUvotUupdm6FgWk1YjrCDp8L2",
  "key37": "45FNktU2aWsJTTWgC6n1hGAGjciBmFSJCgD3qS656p41WVs7iAvGaeeVNfzYQKvAMwGZqSD5thbMuK3x6tMAYJJk",
  "key38": "2HTTUepP1aXhMkJ8EDrSF3nmyQgnKJWg6tiWQ9RarQTpKjjtBMQBL63WRybsfSjsJxNGjzNJrPkuUdNhrAWA1CQy",
  "key39": "3eFeio4nWnNH2qjmZbUkdgLyPSYDC3C6MtBTvS999ejoLBzvqf7sqDCFsJw7eghKJZCWUEe4dW52mCLDT6kXE4n7",
  "key40": "48dRjAXtt2e5ngW6PwUtLhP2vDiRiMMtCc8WnqpgQxAFVqFdjRW4aEsobdGVW4jApTbiU7kYMQcwsZju2Mo7HvKT",
  "key41": "3bnxq1w1fPxFAzUJLHbHsyX55jUs3YtyRDpoPm9N2N6qZoYKPaXHjQ71yAaDCTAUacyHEnTGmUjfZFMD1SN2bzJT",
  "key42": "3NWLQKBaH1XxaXeFBexRoc2be59eJmv2nSCxH4kzqyJsKKy9n6mjnnGrLHrFhXBrPhNKmmyXX8VGtf9XkAqTByHP"
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
