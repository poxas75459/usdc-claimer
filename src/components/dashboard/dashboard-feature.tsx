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
    "4ScQvYRCHQPnJ326hekpa4kr2zFCj4cLmCNiPCkU4CHYgEPJvBtjqzKqYAsDdVE61mjfynQ8C12CR65okNPJHekP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1u8GYGSwqXRKteCwdxEyZXyqysjiu5orD3Ny3VRSkGpE6CnFdhhtszX6G94jqAyYyFvTf4K6RuP2Mrdw4akd8a",
  "key1": "SsrvRYKzXpxTozZcy4ied3oFSbsKJnpk699aofFAfwZqHPfZ2pFZYqg8npwgFv7JGpSsYQMP2n52a9fweYoML48",
  "key2": "29WocUCSb3sF5caU8V2w1FGCGPXf5nieczwvZhj3YMkdCUbR6sLKAhKSuJTKWwQCbDE3qYPsNvSMTW2eQPhv5Vjb",
  "key3": "2CKGa36Gaq1tRGZ3V1Ax6Ujzdta1HST9F3ZCj7tPk7ei1MK9J6wZp22TDkKTTTpfanPEDw4drCr8SjvFTgLQSLpr",
  "key4": "3AQU7fmAKTT3ppFkZNh6nV3XDXh7pA5nQQvzL5R1yjeSiAqZNdZKwzPJWVnHx8UxWpuJjU7hCtPEjnMGCqixUefU",
  "key5": "LAq3msqEvvCGWuW3ygLtcYiM2Rz3Hmhr7rfbd36yzVedzkdRTB9FukvbT8TH5wiWenTjj1CE6SvgcRYEEryBV4U",
  "key6": "3Qugup4mm4AnPVK7TnivBk6YfGMAwsVNXmcnSQnWxh8m2FZu1M8DwWDKUgfpweutZZ9sfm3LiymcRJ8sJ4pnPyCV",
  "key7": "2f8w5s2uFvmNNa7oh322vbt2RK4Qo38tZWq8u4hys5y7zjSXuGgrg3KeutuNFKciWbCeLSJFMdHKKBPbd4YezdNu",
  "key8": "4Hsy1fYSRTdZn6YUfHu7duNksFSukqNK846zJDh4pKS1JUBztKFMWQ1Qmb6riR7B1nmEr1w3PkpNRnqLn9U7JYCF",
  "key9": "28xWEWmd4bknf2sFr6iEDeL6PSi27aYoQmJgEGJebsWq9GbWtsfMGhFhxdjGAvDpnoznwWLtECN16ySvGHx6MYRw",
  "key10": "5oErMwNcJ1kYu52sixs7cegmzAjQiJTwY2FAw7ugCuqWdSoq4RJYx3Tzo9RxyoY2JS6VLmT8BAB7WdLVoVURL4yr",
  "key11": "2o7iStUCcQSVGacffR132PMVCD516vjfWavqvzvUFzRvVExUSp6zDvqDAKUacz6NqJVL1qvp62dndb1hcgovAVst",
  "key12": "466KhiNdszKsJ3wV8p1pNourib7ZFMV4RcjbdgLB1Gvw5Jie1v6JSLFPWybF6x1UZqrxsEq5uwu6cfpsDmziWEtS",
  "key13": "3tKSbjhydVw4w94DnxWUTRpnwgHgmQYFjJKn4J8VPB1VQ7GiW36XrcP7VhRRemQfgotT5RWsVy3oVfh4r2fJyMV2",
  "key14": "2arWTTBq7QMk3Y986Qxo5LfAU8GRzZ9ZT94toaeqdqF3aMteEUHEFet3PiZcEtPHKPMXwebjPbjJ31jV2ZGB4dAx",
  "key15": "54SXqyNpGznU5B5EVzq14GwTh2UQV98bqUxD3Sz6Mefus2wdJACgk6jpQ7pdq418NiX2vuDQjefcbrYu6jhJ5B1h",
  "key16": "YH8hqt7zc8MKcGtaq3XddtiDVNMvtwDRXtPcBpMvxj6pLUBxGKuATC4QDRXTQ8Dbg6DS68ioNPdvafHtAjFgEBe",
  "key17": "4ea95Q5PSygZGE268bGvTsxmJFN4kgYCwhymKS7JZfU85Xfmc3PSp8BmZcp6pFdy5iisTdrKSPcYEL6oxh6EYbFf",
  "key18": "3YrWKf11fXByMWbq5tyWqVP6ApdunTKyMTSYhV62NP79k3hoQw6wY62Erh8WVWCV5X4hHy3ixuZoNrQeDKPq4Kse",
  "key19": "5C6p5xTQTMLB1rev9xLiRtmo36ATTMrm9agRUeDwq5q9yEgaRQesHSYYPhYPBDBLSPxMdvHfjoncjebSMRoV28aU",
  "key20": "5pLuRkMWshKkeMTiyTZcLjwe2Fbafn356PesXtZmd2PnqTD5XMCUMgsYKXcq4vma2jvfALZvHa4kU5PLdLxVZrzu",
  "key21": "3xsGuaCQWAR3UgrrAZLsifLUMJeux4kUy2hpA4fB8GpYwMbxvsRcagw8RMENVRRqnDpBugAtB4RMm5btwQpoDA1B",
  "key22": "3P16tTzCTV1EmU5nHZoDyWP4NffvnL2M1rjW4dtL1RQaECLGSEsRaKh3VXV5VzUJmfLRj3ZmqejZ9X9RDi1Er3XR",
  "key23": "3GiQf8FUbcrAdropCXSEifHnu3S1BBAc7RQALHz74YB9dFkj545wKJzDqv9a2CxzrhUoVjxH8V9c9uNxiQr1Qo9H",
  "key24": "28mVCshhRpUkEe3kNDLf6A9wjCSdTLzt7dVatB6mcamJP3NwSJVgcXMEF2P215BhYBztHAxYRDbjkQBzTNkzgMQ9",
  "key25": "5f59ZufTiXUtGNajg1XkA91oqLwoE2EqC43iQZW9r37qdKbyM93osrtidRhBTjAjFXeMjAFdScFeLeEdF1YnkiAU",
  "key26": "39dm6nBr1B8vntdnzyMNyM8nCkBqY1M5owSwodTzXtKzNJfb3nyxsi3YbxTupjJGCJk1GCydELBhxqNRvnQ5Vj1C"
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
