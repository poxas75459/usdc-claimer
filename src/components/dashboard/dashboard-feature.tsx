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
    "2MZZ3GGBD5sKGM8MDf4E46wqsYS2Nv4miY7WUnjnyPy7tYHeynaSsT5XJXmQ2VBE2qcKeU6NbRZWVAoxmmEvEtgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bbpFAxeFxZdT1cGgUJAgz8MScqZs64CHr1vJWV4r5z1vVtfoiqpoJ1nHCwmjc8gizCcXBxxZCyoF69xNbg5AzDR",
  "key1": "5x22ZRWa9o6ispxEBWMVjUUQUuBD3K8XMe4etRYHgKJqy6D9fDrhFyjfi7quEHmRL5D4qHxd6wTF9jXRWMrE8prW",
  "key2": "5ff2HLnftUykhktG2ETkdNG6p4hhMzScRW8HLRhUFLPTUob6YxZJvDbGrYf553HYcmqXTM1VPAW5jZuCT66rfT1y",
  "key3": "5dJeqGJxaRLVSK7t3r8k6GRfamg47uvPSprf1VSHBXaveTeVrxjrXiG4ufNFVmPqK8qQkQ9a85dmeMVdQ3QJsdP3",
  "key4": "2fMc58iTVW9R6eSWygBYqHZCH1hkAVKUEqBnfaL1TDnWKznaXM9XKqWQCsMbjLGVjb3WEC4E7cx1dbnTEy9xhAqB",
  "key5": "4XRFGwxR3Q9H46jvRw4UQdgKF9iYrvdmUV9T5Y8VnYANKjrR8NvzRkXKNq5Zqtb8aoS6J1xt9N4x5N8SAtC6a7ZP",
  "key6": "2YNC1GhYfzZbhNZ9ukQAaxVgHPZZGVUwysuRWvwYfDRwLWZpSDM5CZC3wKps8dobjhYrkoxpCuCWkv2K1FuRw6Rb",
  "key7": "57ePbqECDVERAm2WXHFoTKERHvMgM7BbZrJT14rXkjL7d25fRnVC4dUiXvPhUZ2D6733pfTMzHtqCRoErTKCuEB4",
  "key8": "5YDTE5UDH8jEAFXS9mt8jH93Enu8ths7YKH2GKVv7XpQYae9woLDBKVmA8jrUCrWNw734aJR5dSWn8kR77K5Hr5h",
  "key9": "4PeExy3T2ygBjC9zy1HvsyUquFxFm9ALEoaFDNCMvXTqJF7mN1Mc1sxJ6kgZFDa9BSVHgWoQbtugaYg5MskBscTn",
  "key10": "3LDUPRFqeHBDHyNqdajJWQpPRZ4XmvVv6G5a94Xx94pMRN5FFvPeMemFpAZPEepcdDQ3satghmtggJXrHppyjzHV",
  "key11": "27VzdL6MPGMhdMrxh7fAuBWPJZCny6DqhQeF9ju496XZfz7QLvMK6mXzcd11MMZTxbSBPACtSz716kCjLJSKgAy2",
  "key12": "5Yp99yK1HGjijUx1F2yfG6Tx1V2uDFa72zwavXUpejkpSGCnChJytMMgRXsecmB581msPK8zXQd22nzSpcbE4LvU",
  "key13": "3M4BfUkfifJx8BvTGMTZRZ4uuPZgjpfUVKTbLEuLPcHSXKrqAJ8bSkwKsWrPRovKLkS6DhvKoRncWtZQKsUQaV5f",
  "key14": "5bLAPVUXc8Sxx29tmVzLkUw81U2uyzwu8T7Ti4dAEg7DQAvsH2GZaWJmEEhhCSwVnhWW2Cj6MRU7YEUeZukhLqfG",
  "key15": "ZnnBwktYKiz3qxUmXUCScedh7vhc2vYRY7nh61qsQx6fMauo5kJkqJPTjryAgpmd9w8tYZgpJnozqJXbPpdpc5n",
  "key16": "5soFcxUKLfHTf4NYT6vg4RhFPcie2SPqKUs69obwBmgQitf1SvqACSfBWFJNs46G72yjWN7BTjpwj5WRLqkbaJZ1",
  "key17": "3GeaatsUeqUkpa6wZoSoidnZxLGVJmUwex7LgPPpPmnTJ39zvzB6XicanDR5DAZHRnY9wLVHKFY7DmvG63icCV1a",
  "key18": "5YRoNHW9Z7dt4ygMew7HcsrSuLkc4yY9JV1Vgs5d857xwRJ4rGVjHHcpaz16snMwxLixK32Gt5XdgDaAphtKwhQ8",
  "key19": "4j2hx4Cs3qzLSwSSm3ubuuUf4cxd4fy2RaRV5RHSVaVTjhiUcXQpCnB6A3zTAFNtujtL4owMtwMGXvFRjnQm1FmR",
  "key20": "2J2zeuPc83os1LJykoSRQFdA1rEfJRY7mb5E14vmQuZz5bTDnSWzC5Xm5HcYuGtfqcwKmfcaRuRdtx5X3EER5Ar2",
  "key21": "4ouXd3wNqsW22ujk5GnGSrvFUQ3sFJcTY7BjWYiumVPv6AJs9oVT71DSswG2moKLuiK95a8T9tBPkXxqt7fyTazX",
  "key22": "5ywvi8PuVTkerxXAaSjY6a1nxCtgwgbpcKkNVGChTHmnCauziUNANS5ySE97ZXndAD5bYeWfbXBWkFb1jsZ9L8JP",
  "key23": "3ZLPeTCHdsub138mwAv9dxtwRqqZ7ZDcgBYTpcxMX3ContJSyjdJDe1Vrk1zW7r9CZRgVTUZbDcwhV9aKxGKzXnm",
  "key24": "3DN6ZFYCEmduvj2f1vJrwdCGkhLUEiDTWoeszRwN1Cqqd6urPz5QhsdEK8xabdNKiJdTaVCTbuyFsbzYmz83QYW7",
  "key25": "47YcNhByEYYTpn8GdyxDZsyawqdebTaT9cmiMkRBk1v7JHCicCF2HNH9Um9PfcqmhEHbVh4WZqARXZ2gqFoQLRVH",
  "key26": "2NnSnphYrXAMLaihLqLwckSn7eECaU1HJzVz34CfLXKGhEg8ZnPZMKFk1r5fZg5JCJKRn6fpqMQmi4zd9u34LXDM"
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
