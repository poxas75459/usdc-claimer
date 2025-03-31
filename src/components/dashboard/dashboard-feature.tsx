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
    "5GzdLWgVLLrj4CUPhcpQGybgmojZiFnGaWmfXrtNy5wPAyjhTy7UU5h7c5gvEP2cHndfLYnn1rgsNypwU7NSXNLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1BH85hzW1JU7wZfh83bwBBJDGEGGTdoEsJFJM9eXhrL8n6cZ9mHEzGnjjN23U1aB8vWNW87Saph9asNQFzaxsh",
  "key1": "4Lu2NcfgGv5t9H1Lifpt4ozdHeG5et8UYiEZLQWqrqvU9cfzMk27AWBAZ5cH4Sckz8bpD3uYtLSZTZdsFH621hgW",
  "key2": "4sdLZMhHitfWDKVpQKRkDhmU6YigJccoxEAr7ZRhcNBnY9GWaAPt81c2Mu4xhdUTpPKVw3PkyAoFKDBTJoF2sUAc",
  "key3": "35RMg2MycfukLj2TkZdFiZKuTaqbfLfXds8cPGxSVj1P1dbEFdyEvVNraQcGTrynyw3nJztAGFuxdrfbWW7zMATq",
  "key4": "5fW7N6kHnEBhU5AERCW8MpXDzYA1e6RFZakXMkuvagUHoYRpSk2ikphiJNouEWvqawqcyiRzEYWrXS4kqC74tywB",
  "key5": "2S7hkwCiBDXMRC9aQZG4qXBHbP2oenPmgNSF4jk9J95aMz381GDCMScFL1ffGzSyAtcT1LnNzdLDw6ucXSmwxmXp",
  "key6": "2D8qgCYkJdGYH5Gkrqg7b1sKJkQZjfD7cen25yGB9XJFsYMLx2WToV6WAAtbNy4Hyn2QfQth1fN5QvN4QCAk9uYo",
  "key7": "2yasAoUBg4ULR9TgM6Gpj7XDJHDbKdmR8ZqPNvGbQpEKGqbKLbDRaA4ULH9axmgSFBebSfkgcHj5LqtiU4dGbY4J",
  "key8": "mE5uaGnG4dtSp1W5CHNYo9bFprzJ36gdr9hpNqqfZqsEMJrrECuiyxQ4iFANoeAzU5mup9PEsjPeG1FzCzNG3FL",
  "key9": "2iKwMhQr15X82JiTbhmh6GEkRLe7Y11xQS4YTTpcTtEbBtaDjfcebFdQ4z68CrCQxudvfKZRbGWz6YnJuuoixzmW",
  "key10": "2FpU4AA4e8B5jptGETF3Q5Ui4CP1xLYsxrcdXWCvEBcDuF4hCPTHRt629YhfZnS2JCGYfRikiZpf1iZKSUML5fPg",
  "key11": "2ETsRgcTZtEkcMubYNGbMrNJ6WxsSc2Yck9HcS97W5mKvXxbACGKXU5QTjCQ3BBp28LSiUnRmzw3vCQUyPH3PpB4",
  "key12": "2T71bmhSDvSZBPbWmVgLjofnngaX7NBxdzyAa2bn39ituNdesCfxj8awDijyjWyv8spfvLE7ZbHMEU88wbe5BsjJ",
  "key13": "2znmcHJbdgzjQa1yssbg9jL8ifiFsmomDv2D9DTVHanuTEjxLN5xs3zZ8Te4apGZdk2jrQAPBuy1nKyH9op1mxEA",
  "key14": "kEvSHidEnicmz41YcyXNKMkzEBeZ2SQAQLsKGs88qpZnRuyCYMVvk7jpSvCpFzFxQBnfEJQ9YSF7J7MtfjFC7GX",
  "key15": "3AXbUS6v5fPsPy2JqSbQzxbBYfw4FsfsykXtRqCRBjYNwSfYFPwmnitNwHmLhZCsWkxZA5G2B3EF68KYkxD3Uhnz",
  "key16": "57FsouK3JTErQjWZD8DtCsXb4PcAtXfqF7Ep4jvGsNUdJLhxjAi9gJrdMnywMr1TYFDidSvxkMk7EEJ6P88qYL4",
  "key17": "5RUsEDkmf88kTrHdCzjjQVc82ieAbaDQQB6h69X7eWM4LWSRMSYaWrguRTQEXa5c4vdyNT5catTYVee7UumXoc7w",
  "key18": "5faLrwpsBtmnZPxjqcNVNLpmyb5iTTZLr9SzaAFmYJkjEGqYgtE3Jb6vH1a8irxzCT4bv1Be8QN9bToUVXYeKycw",
  "key19": "2zmN3ivvaHQAsCts41yPohb6DjMQzUmrLqbip8zqTDdRB17qGPaWPvfweBNBKZafyH1GUaoMT1kUjHK4fhRAuapm",
  "key20": "3hF6U6UFE3Uv6itV8Tk6pGW2UGiSTyUmpy2LnS59w5YLYvoZvvi3mK5YmqupAKKVqo6AFjMKbwGLZUGRobwDdMMK",
  "key21": "2ze2pWnLBooGz48HPKnrJCZsrf4tSEgo1BUc3QqFtMFP66axou3hSfhD3vvwjkVCjNH8FJMMB6ZVuRscPcKfSoCY",
  "key22": "5ioJH3Pwb7e9ADfLeGo5tGh4AHvGDai6zpdHDgFza2t4udzFsaaRCRDWtYoKr6ozUEpEkB6VMEjrmuXEcMmRme29",
  "key23": "1RNdsn2BcBpckFaxr7hBL9B8HAiqmSJRgUcCZ4MYD4aXKEPoRWoMXMYBfHnoJYUcVRcxHavWfdA87AMeVhAG3HJ",
  "key24": "45FPCC8gamF4QtHmpmj2zq79HKD551VYif2f7uf38zmHmoT7i7FhPV9NMKgdf1NuFw42hbTQ4dbGUZwcB29kuiqm"
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
