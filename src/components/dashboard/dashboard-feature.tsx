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
    "61tCXYiBV1FyawoKWKgTXSuxzM5enfxJu9s5xaDeRXQf6VRf83syRfJV3gKkxKaiPpdNFo4NJr6VF87tY6hxP5GE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNsiLvHUsD5SwSWhXRLzFvF68NW3Z94DVK9b9WPQTAUwwVXpWoVRqzee9hppbK3SZiUWsTZbXBfij6v6AZzxKZQ",
  "key1": "5Xmm7NhKwoj6EWCyABqNqqKV1ScnoB3ph7cYPYgCWc3sYH5WD6k93wmEdWHKLjhZCQPnP7u75xouSVfSWiMwRcNY",
  "key2": "2PiLhPf654NQzjmF3hDdr8ZrFuHLh9aZU1qmjTNtta5tRWX4fRTXscRwGTNnXaGavz37n2e3JYcPqcysSuVkPAiB",
  "key3": "5rNM3kuiphHjS5dmSngporPXfwrvu53teCgm2KkEC1DoVxbbwNuL7Wt3PEPTLvkMRB3NN2zJyAisAvtENEpnhJBK",
  "key4": "63NXc4QiFzosWQXkfaGZthDjw1unYJfzSTzbzK7xBbRaTSsUfgwqfC14VPxMH17pgKqjKGn44TRxpm1kpVy3MtRU",
  "key5": "4SXEShNVLuj3i6zSpYoj2LtQnNGKStdVcUCyXYuFaajxZc7vbBsmofQxTZNNCGKnayDpRYs2Bxz9UuH5zq23xjW4",
  "key6": "4pnBJ3Kw4dX71M9JPM89TuyVToiFHr9ucKMkcoKGDcs5A8PVgLxB69BGJzPF8XD6mDWyaXL7SVpLCBeW7Nin9JFg",
  "key7": "3izacPBRNe9pqMgnWj93DrhYjC4pr3KgwDkcKmnNPoojwNBK1FQqqXH5xLj7S9i68oQd3GZCh5FM7csWBBjpReeP",
  "key8": "2ZZWVVdwbPcqDRfNEN1xk7xdpTvVCYWx8kQYgB6WWhMedQiDu3vARRtNYo9jDQN5w4waP93snBeUUeYw68iHUt5Q",
  "key9": "3M9kCgaGwPSqzVHieZiNCLr3EqVTcpYy6n7YMrKAZU5YdJo2m65UdHVLuAuChBRikDSEb5aiW93VVvASvtKQM7iE",
  "key10": "3ENYpdutiZrikja34sRMnieD7c6vjKPGPgvvDcis8J4cP9au9rEDcbs1jnwvtNoizo8CDZHfzp93mr2476ojZAvv",
  "key11": "4ZsDYqGs1tj2L1Q92V13kK82oXVTFEMC6m4nckqSN5UAEq2EqpusNvcpAc5xiQi3cRyj2NVVZ6sCcYmMgV5BMKF7",
  "key12": "5dvpt6Wuy66kyxrWWroC9Ltzt5tWgRuoH9JMarRTf9A1L43g5YmpibSo3VeMBHNc7pVg3e28rVoW4VwutFpbR8Ly",
  "key13": "32mUWBeqMtUESAgExAJnmUqiPJRxyD2ihnGaL9CGd2kgAtEUz2WUbzYAucLixnUW3D2c1NYPgsuRDYz7AM2PH6nu",
  "key14": "32SgfMfg9UW5PMJUNvSAbAUyc1LJHadDPEdPCbMbF7sa4NfdSFuyS2x66KdRoTW9Nd6Q58nhKSwYRouyJqZMcCw7",
  "key15": "2kna6UtLS9wrkSTbNxz4Q7wsyzhkcG13K2FtLx3f6phoPhkc5FvRtrdwn33tc8HebTYEFcL38v7DaUMTWxobDdWL",
  "key16": "5BPZjjVzrwqjjsLq5Qdr8uY3dgK4Uwv3eoSuTtzPmkLyfmYW24gKBavUx8eSojdc62GH8rvK5ivcWFdcs63RteMH",
  "key17": "4eu3AfQJbhU3W3ps1UsJy8y69Q5to1u4WztQSWJ2NQNgwzWTPsfhR4sC6yu5wGdX5xgZVm1r8Y324ygQccjn5Aza",
  "key18": "21Eh5A4z5Y3jyvWhtcMFpr3uvUWGhyfBTGtmrisVwzdLvFuE5Jv3Ps1dXBvg41Znxo4wdbTLChuqcAixyxtJLoNa",
  "key19": "5tBrurH9YeD6JBPMpiJL55QiWNi3VZwxg95eDpTh5CwT3c4gMHxRUFMBDuvtgRrATkEh4ZpArtjH2EsWDYse66Uz",
  "key20": "2uCtyXW382knBKZ8nqvXq6xgSEUswrT36XkYCT1ss7iPUu2ybZzZk6ge9johWhcTGUFavqMPQihJUL9mAa7ag98D",
  "key21": "V1pGqqFRQdzacUP1QNviwE7QW77pMsRvt3UZ6bAXeK1evR6reo7q2YqT8kqQDkkdLQsTJQevVzKwNzfHokC9fbw",
  "key22": "VPNgWTy9RFiRRo57L6okauac2Ss5X6qpoZhSaZsquxC9cErPqdLKmXWB2totLCUHkEcUZVe1zEC7jP16hPCcTuh",
  "key23": "2yXg1N7CR9qTh2BQALxuGZnMyUjsFfrexV2ucGT2os9KkTeHFqp8CfNAhgbByZTrs4pjWV4mXFnJF9UHuvYjH9Wq",
  "key24": "5krimyCVCm53cCKyaewLoxnYqdZ43JeyGY2adR6eSuWgqrz1X26JE7fJe5SgbLPAZvCxFV1NMTZNXxvgyUKW4ndj",
  "key25": "3CZzTAwtvxZLFaCeSX6FWJYRfbHUjyuiHchQhgDnc3wvSW41aYQpzsnLrEy2j5JJHYzKXytcp4FLpLdwk6BWUL85",
  "key26": "2KAuLkyRBU6mt1mm2Gks3GVCFcj6D3JQCCW4EYzeha2FwNdXYi8CWccyahAsfjGWzY36WZZPSHZmEckTdq1ALiq4",
  "key27": "5qRZ6N5GRSo4fe3GvfvAFefVBdhrDPSVdfwaaPCUYmp1TLvMjNQv1zBSvmFgtvEvVzNHP4P4Xk8Nacg9mWFSKLL4",
  "key28": "4SGDcUrgNbmwZutxFDoEaSPNJNJ2qMZigTRfVLrJbbj1ZBgRNRmqG4U4ayKWmCCv3BXgTU9iz2NE6H1bz5BkJxVS",
  "key29": "5PHhtFPEmns1dzfcaYZD3VsfnULFfCnpiWsW9pupeXMd4sWat7HbQxioNds767xJFKVWCgQSiAHkb4jXdPe9iJVx",
  "key30": "3EoUSF4fGbrBMTeWmGiY4jNzeBhkwWbrF27WJC6J5KLB2wMFdea5XxrAgNqEgSXjRwWFeCeCbzt9fzkjhbW4NFZQ",
  "key31": "4VohGevCi2i6nRoYLU7Wkoaqt3dvLodg4Ls2hBsS6p4VoyZsAAEbnaXZR3qnj4Vp2qcWtcDM9LtR9a3QxvYBRCrC"
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
