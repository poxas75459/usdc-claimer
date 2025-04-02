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
    "4HsrYjkXMrGV2NFnXAHutHKcYobWRBNkrs7Y3JT46Hrn1ciZAFeXoY126uFb3DwqgiV6zWEWMFeNTUvxvGGiyQMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnLo78akDgbNTaf27PDbnmZb16hiDsXjRWVHnLbgafEKBB8PafgCt4MNAeb6fyNyoUCM9rraR6roqPeahjwGfd6",
  "key1": "5u4L1kskKMzaDdqVoJMBSjftabvyebiwfCY3goKFyh4qoedUuzrPpPmoLZAj5ZnDSHTwhMPZQRoMpBuLWteLuPpX",
  "key2": "3nxzr53aobaw7H9uwUzgytUqneqXKUUqX2ymUHPTKBja7S6ZBqBdFDQfRQzgknEkJykhD7F2Q5JJMVbJWk74z27s",
  "key3": "2FnbnJ5MxgXyTNftD1BJaJe6FSv8BuzxyFFirPSKKLrsUANdNJJHreowrQJ3MbQaK2sdSsY91g6t5qatNsDRhQdr",
  "key4": "4wx8fdSrtoDvLLzCJTTgtxXYqhbm8g8RVpad7b4mpbaK24aWf7cNuujJJ3i7Hjfa3NorZhcXNzQUYMUpfTXdtmUF",
  "key5": "XMceXVCQeaBrnfFa4aJCZocDEW9NSKzHF1T11kRHsCJ3qczk75FSsH4eXyj5FtpLevCGNSTV7BRkcUtYSZgHTz6",
  "key6": "VtKQhSh6De4eBUhePKfZkrP9aZdM3E3zv3ZS2aro8idXbDK1RN8Js9SRqk9VZYoVeVvc59kB1igNnYE83dnfLPk",
  "key7": "4UgZYZVCTzFeGtZ9V2Dqns6HBFeu54VdZLny22vkHR5DYZyFDt8Pc5i7z6soXZ2k7vxVz2svhH7bNZrzxM3TuvWY",
  "key8": "3MjjaHLR3zWogVPNZtnfiWCb73kwtZMdSkq9DieiQ1xTvg4NDGe5VRQUoKTMqhVDZpzz6GUPAjGetBVDsK9C13CJ",
  "key9": "feHeHwKsrsDVAiAe7uaQzGCZ3JWC9gZdNiWtSxU4Ssi9BJgkFaGPZfqd1sJezNfvcCK1t6SMQfqhdyCcXVScFNw",
  "key10": "5NfjQD6Rma9HCsSU7GwGDmMCiFHfST96r674ymKGLzyV7ZvJrL9EYGZD5BZML25GoBPVZSp7jcDb2f1bfVqdHoMX",
  "key11": "3sz3ZqvnDJFPz6mdtmkh4W39bFQFu2nH6R3RJ4D5UQBpSRsvLbE89JkMzK6aupi2Zo11Me6NWfWv3irpJVAXajAN",
  "key12": "5JKr5QMMTGTCcYwfSJc8jhrJEaNeDCtD9FL8PqieNs4DNTERUPoN2EDP2Fe1ieNSKD6b7yxPePSHUeSscnjYHADa",
  "key13": "4UQrKdDosRUBqFwx9sfEvrqFSKQYU27amGtLQj1DcAQ4X393PyP9d5iweYH8tBznBEM4pH2BnN16ayTQxsiKRnDa",
  "key14": "gdSNBphB4TKKSAaPVjGvGte2spGbTPKpLZUvCe7XCdGswmMiUkR9zejQKH6nDy3X7ayMs3s4csCmTyS2STfUcGm",
  "key15": "3aaH4r6wf2FQUY8ewAgs9QbaZuYPhTMnQYuccV8EX3UdzK2GJd5PfpxRk1pPdJUgCJzPdis3RtExmf4uoaZPSJ5t",
  "key16": "4D1Tot4AhbCCG3HTvzjTNP3KvP2KgCspXnCZBJkDsB5Urwiiw7FNVgQ5SX35SYWPDe5pKKcdZ8M2xmJPKtJB9iT5",
  "key17": "3ZSfEPcq6M2Y44KLCPrsaJgjJCkipqaUokUVXVkCPC6BUy75N8Ew6D9P4usFhBVKNCgH96NrHNG2ra5fEC1UjBR3",
  "key18": "2wGpnbJsW95FKoHAkD4xiviE6PdJDA8Wu9K31YRBwJksm3V9QTyRwr8BCmTN15cMSjRhpwznNqCjk1267yfri8Z4",
  "key19": "5LyPpFoqSj1FPkYgioL8Hw3jubwTq4tQmhHDDaC3B8hG2KobCxwk4197wQZrbkHJCtTfLDETbTYGwwH5hsBuywgR",
  "key20": "F8rarWz2ipEKLQGT8VvRs62pkmdMpAft8vPaKWmvP91SzMaLtsJ29BUvbQxaCfE9nkwzCEJLHsdP7gnjsMM617R",
  "key21": "3R3gdtGc8pGDL7PAeXBn97Uao4phdjHQTpMcqDasHRTAb9y2Fy444GVXaqAbchDv5fGtyxi5pTwgbmMraqDUE6gE",
  "key22": "3Dqf3cGMDVNx8y9Wb5YpvTV5upcTbD92VEqPUiPZVgghNE2PmYLJzhQexP79MkRp6fCTEXFGRJ48h1BUwVahhswx",
  "key23": "4y65Dtyz3vZwAsAgzNR9B29jVS2trp3ZWD9Hze5WcVjMQZrNGHHrAYNsWD97aQPZjDL1duowJW6QdB9ASTNRGS91",
  "key24": "2fGd18NJe6KLdshW55TjGzWPR5HjvfU48D3HDQ9w95TzwqNaFjSWBtEgjk6UCssekvboG4ZuTmxZnvJfCKA5Pz3g",
  "key25": "2F5BuUqL9hCBszFi72VZrpAQas21ngpynXXUkm8oZZid5iaWvLYAf6f9H16FApTv5Pns1NfUX4xVX6gV3KHRsSXb",
  "key26": "2aZ4w1jaNew6oV73RGfJ5PZ6ChXRWizWn1g6xzf3XHHvEdz6WNSzHsA5bL4MMfi4K7r3mx96bnM4mYSzHDUrjt7w",
  "key27": "329qAezjR8zHHT2qWHPFJwwenLeizacv1UXhiZs4uSXBS25FwCAc8oBqZbjCZrforUWQXDvwdRhvsNTsY9XSV5u4",
  "key28": "5rPwmubYjibb5XgU8xfhyh2YVQgizG8jZS8G3TUSRJqow92txiYjXwZBWFdfsaBWTiNwNXNu1WXUq5hJ6WqrzPM7"
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
