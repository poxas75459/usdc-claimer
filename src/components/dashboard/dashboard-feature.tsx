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
    "4fPEAU146Jknos1yoMZAcHpHpNLkWDM79CiQJBniqaJomwxdgXSsYDBptty1hdmgLLp4bLpDoP7g7FX8Yh31pKgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uBUJVFQyjET3E4HzEes4TDvyNuxDNkKnj3Gq1Nv3AdMJoef5FUtSwstbeJx8fbaGcCVmrbo1dTXL6GcnH7Ss1q9",
  "key1": "5iWXReTZF7omSeREyz4ZwwCPU7dSkpsHXgAzcNAbFm3Vr3r19AeAkjzafoB1hieqK4FVke2ZyJXFkxshcwhCV39U",
  "key2": "2MtzWp6hrpjQwWrC4sawgfz8k9fZyWELu9kbsCp3gnsibwrPN466UBqykECK5BzCRzFXrZC5LEPUND8Ut1PZoXet",
  "key3": "2Kwa3UpidmRSiHEkee3rKEtSXGkaH6QMxoBbWNAjuym3mnDSMMr8TdHxZDa83n4KCYfssbbvzi474HXoMGcC9m3H",
  "key4": "5LhKTVsrmTMPhjNZKT7n74df99Sh5AstMRnVhq25RgjCXh9nks43eKcWANkybz9ZkoRLdLUyr24vyajvBUZVuzxs",
  "key5": "5m2Utn4DAnpKukgN3hPD75QExK9g24SYrtZ6cT2Wkigv4f7MxMRrm7G4SNESgX52X97ovSWKRPfNWRbHrdXmPrBk",
  "key6": "354EhcoFTPwmdt9MutjfF5Jq11SmhFa67nTnxM5ts9ZcgLvQxx26Qu2bQFh9WYdVXpqzJS2Fy5fd1dvM8vrW4CbR",
  "key7": "4jqAxFparEEVnS2UrxkoNqMjAg7zSbuu2Yc8rB2nAsaeDv4yTDnDAXg5mT9WqjJ4fHJaYNEjbzvRZjKt7zTZy4hx",
  "key8": "2X59MjGtJrzJJSNdz2xCZENktCJEJqBWzGVtaJXUWKAbewm5TKmj9hfqxiAAjWve6UNGB3GGiAedDgRaV2EF4Lgx",
  "key9": "3t7z75MfeqSEJyGg5He7x5cm5J2eGNBa652XQdLG4j5unqjm35kFCBTK2gTubNzBamfTG8mWnPr5SgoFyUMGUXvd",
  "key10": "33Xmhx73M9Jn7gcLX9Pd5EVCUyi1KrpeAa2U6jiFyqrXxMZ843bydSFpWsPjW546ZSQyfgeJb61jzynwKZTMvUhV",
  "key11": "M4ejskwvvoKzKdQTdjL4nGM3viQnHd7CpTDJHGkoB9hjoKAtNEDwpYWC8FpuWK9mtUQHKUCFXAtV1LN4xxd62H3",
  "key12": "3vRFDKo4WbQiVq6CTbGXpPnKgVWQJcYBJ1hs4yeyjutdnNrg5RKS3rYRknApetFQT9QQ2AsnCYkDK1gyAiJtYSBn",
  "key13": "5kz8asJXrHFqVJB5euhjaFvpKma2hUnVDmhHCYfqPeajAHXbKchPrT8nghJs151Z8CKu6vevqt4rvH4vDagVkYdG",
  "key14": "35W8Ff1QTVmQyoe1d2ZwLUJoRRJRk4f5Tirzv24Vf6V1xphyhV9faixTeH8x24sQsKwPmRJH9RRC6UJF8wGTV54s",
  "key15": "4rmTU8uzKMY4duhmB6QkrDKu3JkAXpSqBSHqghckMw3qzz3RUuJCfJcELynTJxMKWDiYnnGnVjRzF68w5oQdB5Bw",
  "key16": "5fjxbFVnYy6i5iUtD42JTdgaGnmQYQGcn7JqL1rzb7vDCrtfpMAPMCVjrrrs5yd54reuuVtiQob5sD9sd3vZB4pe",
  "key17": "5qVASs2RJFxTPmkhaV9LUMSZ9UtWESGgK3gGpKHy7AG8QdU7ycdpGt4Zr67eVS4GNnXxQTp9oRSPzW3eR4WCFFKu",
  "key18": "YuQpffSanNY6pNHAKAtaFZJazKwpfraxq9NXEcpXPYN6EFUWnNBQZp2iSAVPkMMTgAoENQcGhBNWtsBBW3DRS47",
  "key19": "2pi8UadfVBXB3WvoFFEfsuPKZUrBBSZ8BGgMwytitGCq8UuzFZtTdd1M9t3Ncepbv3p2MYZqzUskBNg7Xw6KhAiQ",
  "key20": "23hzZtSAkmFMnyejhAdage1UFUwSngsA16EF7cQuHF3dnLWoui1MgRTYuvfWLvDHMqzgcREubgVa7sgekq6K5de8",
  "key21": "2bvmFGCEp81jXpzL9KBnp9oBjdVrnzjnY6HVEpKHzMomaqNiKf9jKkFnyRFS5wecAer5HNSWrM9FeuXzJZf9RYN8",
  "key22": "38ExPvcSJp3QjHv3cYEakyhjV23385RdsUpEYX4zgJQ1h58DKUxV7kz4nwvFTfVkh5r12aw1DLPAy8E5k1dnypFa",
  "key23": "3ZCZBko2dv6hVRqntWV4ef73SDicYj7ThEwiuNG4HEUKbwAFaAdABuAnnHxc3XDPCscjCfk4DQiQkERppVn6tP2N",
  "key24": "4aZAC2wgHvCu3EKEVsavXmrHkx9rjaqcyNqq84v7MXGqtevCVwjYQo72sMXemLS4XUw5Nf1uJc6xATLok69vf1Sd",
  "key25": "24pABXEjAQJTAeKB9dys9mTPEqs5o18ZCm2TbfWDUWnawCDMHvW4XdKEvJz24TNfXvjob5dcjJASXjy6rhzPtcN4",
  "key26": "631qJEccxEd9HJXqoncyrPevA1tHgL2gq4vVBcW6Ee4M8iTd18y2E81A3EoG4m2STYtNHNYhchvM14Lif8srz2yL",
  "key27": "5VBQ1Snd2pvw8eRDt9hBD1E3EZ9JaWxRuVQiAYfwPBkpT7Ynv67FY1qomfLVnJX5qFZe38qytCSr69Nqz8ULPDsV",
  "key28": "VpeLkuuruvsAaF4GzcYWdxUSUchwXUx8cJ682H9h27uFJc3FDWLs2APRwzD4YEdyAnbXwL2NfSeJQ7JYifR7Nfr",
  "key29": "3nqVn7PDVSr2GAxZyPSSLyVyzBNbDDF2FF1pCcEvbxshvHMTRktRX6bX1wyQCJxLNwE9uYVGdHJraSqs9gKpGbMu",
  "key30": "5SdVnU6QZz1V4tdwz7nwTpKo4VxyBQVDxcqXR9vuZrVb1NieF8de1ZL2YXmkawdpM5WDTfZGvvozxQzrRwsHY9ua",
  "key31": "k1Erp4Y2ygwsiZ7Vhp7Rgikd73ot5wAFWZErdLTne4ihK1aRS6JLiLawrsTMM5LrV2MbzXatpPKU1FFGUtHYKWF",
  "key32": "5zm1gctox6gp2xUjbskpFEZm3jxpHAUVdRVMQTqeakLfaUrRJ8f5HEXXK9YkhnmjacQfw6Hnqnb5WprMJcNeY8Aq",
  "key33": "4kZ7dwCZqaD4RycNib9pKQxkGproaZmCLH4x33cbsFMBgGqwTqeBR7eq89Ehi7bcfQzHtb9E1pJKrXZv65V5bCcf",
  "key34": "pWCQCqKdpstKs6cseppQrqjEoUpEqgL8rsiwwwGRcksFuFuXTMxhTz3KrQj3cqpGFxnd5ZbiVrpE36vipNyNcCk"
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
