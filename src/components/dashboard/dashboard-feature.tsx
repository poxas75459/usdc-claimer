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
    "gFT57za8pTaRD2r1y1s9gwinNMQqf8TVEB4nm9sV55eAbdFZmRM3uFXqgBeizETResVDcbNfukbGkBDj2rxs3RN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j4Yq6c3inT2N1cArbtBtpXA4pEFZHqDJhVZep8SsuacfGqpJs2GhU8s75VsENvHKhGfNXzqJgegUAaSGyqkGaMD",
  "key1": "3KLUxMvckoJJmrP7jQYhh15Ybr15L82Kd6Fe9nBAwYKYnDp8WHi8geB7VGb7cgkPdiRy9ANVEHEkr6s1EE5UH9Vc",
  "key2": "vnCFYFdD9ZKEuhRrMPZ4Z7XBv5Cub4KpZhodsX5JodWEqCdMyD4bMZA18GoFDhzSP729upAU5gZpAafH4xagqFu",
  "key3": "5ic8jh662C5gURpCjmozKHgH7SFPmJCoPRJ2a7MDRjxjch3FFEGd8X1xMw6LbCzfUyrHJb8ugy8kUcJDVnRzMdgd",
  "key4": "4WB4Tsco4kMyRzxx2Wy31ehn7ZEs4JvB1nVpEtRXzhs52Z9gCMCLiBZs2pho929ei4YgEuGKbYoaHyVRBmLQCLw8",
  "key5": "3sNfYQn2RhzA5jaDP6UKMsCAkhJSjot7ZPjv7K7pyxi8e2FNuR4jQoYkKiNazWKz8W5sBAteHsKHuigGsPkP2BMA",
  "key6": "2ATYLXJ995tRoqwAWj6cgXNKgwZa7g6Aiv9nsdu71CEHUMDek5BXNPZsHYuSWgXwoQPzwp9VsFJZKDPPXwWoWmbF",
  "key7": "5VXGL75C4m3aTkyfgA4Hhr45UR2UPe9SRJ1LpSoZRhVuh5eEq3X8bBg1f79sErtzmzRFQi2PnQZ3TJ1kCCt3PEAc",
  "key8": "4Uaaqcu3Nt7XDtaUJMcAEnJEe8hHYkdChveZsgvxdRY4r2uwgRsiLe2ZMRiw7dpxN7Rm7PbBLFgGJMS2ZJ2e6xqt",
  "key9": "3gGHCPJrXuZbg2y6ANzARdAx9ntwnu9f8NJjmUMHPx5DK5Fy75QMh2C861PsdkrXczb4GQfYkcgz5ik4eeD6P6EV",
  "key10": "5FUTJs4mdeWuDNhsCLUNfizRExYyDQN4Z68F9jUdZXMXNaMUaVcRCFRpSW1T8EA87GK5UKDuYqL3w19PFuweV9LP",
  "key11": "4cvbcq7D5keGNU259r9jbBrTgcXi4KEEvDzJD8sqHsszCJ7NTmdCPi3sesYQYdbhtC7GAfzgGHaL4epoK4AKuDMC",
  "key12": "3H6YANUV7GTYh3B2WPFXwh4RvePrHpy2sAWmjrhwnTbRvhMCpaCrGodMgp9twNYaeQctafTDuh4jrtJpDR5dQAc4",
  "key13": "2QyTr3RekhSPke3yctedU2oUCcjecAXbcdShY3mQNdtPBjWRaF5QCASwoc8TPbmotNKUqCFq6JKVi2HRF2aXBtKb",
  "key14": "5393PQRkpHapuGEb9VEwu94d2D5HHkbQK2RV9h92DurAhysiNEnNJdBEq7PoHhxhGT8dqsdJDv8gSh5LDrt4cefP",
  "key15": "5sxRawUSnrQ1bheZwami2X2KMY1y4cCcZx1jgZWZJy9ibrAvuTQ1iJWsdHwgeF1q92s5vW23AQzPxaYf5sV57deL",
  "key16": "3ahGb22ugdHrbyr1UmkUEn7RWScSooEcewNm1EWAav16Aim9wLasaXw7TsJstHcvQNCu91dz6Drk9SE4Kd47QabB",
  "key17": "4pvy4ZTppxXR3nd1BNYBHMonsxpZri8fx4XK7SY3mcxiyndCry6x2igKJFQUtEUd8kqJNuQgoxyyhaPmXaWj8TZ1",
  "key18": "2Mdzf6k8NTErwZg7L8iFgjrNtRHGWHUdfGzJPo4RKML4nEQRcQfvhbeBbXBpG3u778XKWJd5zgGPYSkcfKEMBfyJ",
  "key19": "3Zbq7xvEQRMsd6TdXpDEYnioDQPHBSz6buswKG5hYKYZLpq8xzSuRgD3NFW4hr7Mf2pK7Mkgq7H9DVmWUmVHd3f9",
  "key20": "32ygsqrt5J7h98ttJ9WSwxBMpy9oH9ssfuigiwWMHZrgMTm672acSMg1TV1qozBLfovKi2yAjcw4igf3d6ez4TJX",
  "key21": "wwQ6irXvqhY46ttEVbgpXJTkSWoLbcpQw9UpLLTLVq5GCF3keeSeCE73nfsXr584dJgckCYLReoSQv68s2KM9Ls",
  "key22": "HDrCsGrAJXEowTBucgEEHfhadDNvRQexTLCj4sCzC6Mq39AD7zJxNbfqFkQhxaW9kBxU1zd8HoyNg76N3CNz8M6",
  "key23": "Vzbv94q7BS3bE4oDZrqzs8LkdhbLg8cvbpVeXoxxUS5HFXsyVd7tuH2pXW1gf7ZZ7HwYZapSJWsPu4KZZaLfBmc",
  "key24": "2DrEvi6CuHBHZ241EGMtqYjDqayXpth4cQiVXg2uja8MisnYc44CEgYB8NJMfbHDtWkMBgtXn6TUmnv53WTTZahP",
  "key25": "4HteuZLdFXr9PmqoyXmXvukguTHjpHF4HogU6SKiWFqLs716cQTT51M9Ux6o3eLCvutGCwHxUBbJmdBeujRh5N14",
  "key26": "z5hJxEezEuwYvvFGGA5qzGuFa6a6Uo6E5REuUuVHGJxo4GjLtTXH3u9Ruk1jiNeA4t4sfDZP3hbb1faXEQBqr3L"
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
