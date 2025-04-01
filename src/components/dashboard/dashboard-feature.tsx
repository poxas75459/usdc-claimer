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
    "126pbNvN9xX9SMxfudtDvTmBcky12iVng33VvSjNtu8HA5FzcnbTNCiHSLEm9oTYEoieHDHMgbeaSiRNnaAbzLUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MUkACubQMaSXYXbL86VFTFshuNvbp4zwdCzFp4t4ABPjaDPtT1P9DoQsPG9v9Nq4arSbhxC4a7ytp223hcYob6",
  "key1": "2uskNqnF3htMVuwo4wdxYzGvUetpqg1XV7BJQTtYZnSBxFFMhrf6nGHbMhpCCNTxRsLjzgBgAoJE5vRnH3Dmm8Ph",
  "key2": "2Z6ipe8VNy8R5nvxWrkRwwp7AuwGMGLVgjg9e16Tqh1YbDxmjomCTnXT1S59183okBsuHrALapG3G2G7Yiv3rvJo",
  "key3": "xhxwFFKShpLWtDU18qrqakcicZBsPSWgJcVEH37o5Ue4JAAjcN9jzcY3aGtdd7nwc5cCYJr1oBq9exk9dZp8ZTD",
  "key4": "4uyVyT2gAo26VuPVapuVkooCL4R6tm21V5WWm2KcuV62QXgAa22ME3rEPoAFFAd9xsgUELeCN3q4TcZ3qPxt5rw6",
  "key5": "5qFZiMEkJkB4bqD2PumgjMegoLK9pi161VuFzE2mfBbs8szYQYADZnS7xHeTLkSVnxnmpVgMN7S8NHRVYD7uPyxX",
  "key6": "5mYQT5p6xuCDh1KamE3ZMwBR3MRHQUr23qXjbUUv5SgxLr3c5MThA99mBvrHyDYynJKy76HdZc8sBs9VSogEfm3J",
  "key7": "5LBmFYrzAWBXuyUv1VnpdUBmBb3MjxJNCNGeBejgbSptwFKhCgbjwVn5YySPprpJABN7Yie16Tt5r282ax7Xnbva",
  "key8": "y1dMLvrPCPeSwSY5EM2ZtDJDAf7YfRv64UcSZfvWpTh4d2b2H2Vi988ay4ivqXysY5z4GDpMxLZJPrZ5gUBTrVN",
  "key9": "4cA7u4nvx7WpLJdFybDbLRWtHM3dHTzctCm9qLxe82ur7VXpozTBw4fNgGvk2tbdnsNJCVdFsQcD9PoPiAW8bt1z",
  "key10": "2P31dQHqj26gPDYZCeniVam1WoVJhMy1WiRpXrWa3pbNcmgdcFbk5QKkPA2HRPnYQMAeVF8BcXiSV1SpV8tUSCoz",
  "key11": "62NzQiBHHWzUFADZWGJECCxeoNCoUusHZE2CTjGqUseH84magFcZDxcfAk8rxiynkkLUZJGHUWtZUoJuUtCcXM2z",
  "key12": "5se93qaiEFqhuV2gDp3PFAdd3VPmMzPAvq61VBkCckgHWFug7pZeUeD5nmu1RYWSqTjX99g88x44wuePGT6tSTW",
  "key13": "cxm1eRBjbL2k8rajtJJHSeNf7Um68y3q7jBgF6qYnpaW61uaQoiRTfFDEuK24FEUcNY8MCtTdGXnVKwY17ExMfs",
  "key14": "jcsMevJkvzk1F2dc3jJMBDQhf8TUuQB9nosxHXxEPUq1BksrixRCN62yqPeTJAns7k5adNs3bTMCBy16bNhcEMD",
  "key15": "4Q9EEr8nFJuKPBDrrMy639qvZJLqLkLRPynM8ZkU9zewvMPaUhbV5yguSyAXSGShLwXXBoR2pJuRmT46QvqtLSzY",
  "key16": "2eopuyv7RwePuFJ4MyBXc8kGxPccBaxwtztMxY5VgbLcBaufzavUi9eGXwutqfgAbyhp29LHvkorzDjLrky88fNE",
  "key17": "2U2S3M46HFGUkMPCDw5fsr5dpYq6ATPHeMBh5urbwRCfErhc4ynEMJrdUYpustW63jfZV89LjZNpPJtnoZVib9i3",
  "key18": "3DgnWAewAtvansNqeg1i5S5FLbtnBa1h2K5Laca2qvgD493vPc3TxZJiVkfi8aRTqNVu9KQCPoVAdVmmrm1kcC7E",
  "key19": "3iXbYDPMDZ1GRyf3YDaMiYdobUp77zTpQGNULLEChmDjkYaTQsYdERNqfUDY7DGyZRyVrh7X5nwkx7RX1AbGNeVp",
  "key20": "3eDTx1j79Ws2VWavQVygQAaxe54gE1Y2f88DXXrZJktp3XaXtPtJxkDgiXgqCLB7Y9vjkHT66RuYdsKSdncEFgeo",
  "key21": "3W9jBFYzDZSnaW3xP9fC7FVY1u6ggfZztuBHVx8YKUmGYYYVWcix428PrfLwAHRczuyRVLGfn5h7AHZHqsZXz4qf",
  "key22": "4A3vT7eXZS6yarHpEQuoJSsCWneNsN8uxihNUP8gsm3ganoR7Zv4YC7ky6xdnzXSji2TNsCgHtHLggMhoaiEx2b",
  "key23": "5ZMxytxCSMgtEyC9bGNErFE1AdQR8BuurLJChmAuYRzimSC4a5X9CnkFhxKUYxpCSes9B1iscRvHTdkSmVs8UhEu",
  "key24": "2fxGWDjS9M2dsG9kQtPhycBxZKTSSfYeTX3vvyYmmGFfC3tyATLg2dihaFWhWmCk3oiQ4PSo27cCCre1EK95PtQc",
  "key25": "23eLGRLm1a15jgBNCCEBuu5kK5L3KWaMMQiAoc14XdAJvnbmXowrxU1ZUZdpfpwFhT6QfK9zgFuEPcUxR3M6ntSX",
  "key26": "qxdBxHq853sJ6rLRvbxbvughzpFs28XVn1mpbB4oRNoShGsB6yugXuuxKQoBYY5v3zhYmTo4cwo53GcyrpQBniJ",
  "key27": "5p91ZAkiuX7qcLpmqwuFnyjKyc3zr3rryb3DVHc7uFpf9fZnjXo4Q8aDFEZZL2pB9fdxsbMakHypXCdQF3PnqNB2",
  "key28": "2DMEpPP5VSyxm7ZDu5zsHLwucmWEcACkmN4RziohpvdYuy9NaGHrDfwhU1nr8Ur6RmSQRZuXNKreMpmFE4qWvu5p",
  "key29": "648Ykadg6vd7okj2GopGatNrmH1ybVrYeMWXiAceptnoL8FPmV3zHZC2LMahdvx9qLBVZRC1uNBAWEYtJLVsivC4",
  "key30": "5bKzMiLyvTQjCg3MS4Us9rThuwBbGWG8z43wm1UrkoHwSzgndmftFRb76e2GfQHRNxXNLmStPjNP9Vm73pLgkvUT"
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
