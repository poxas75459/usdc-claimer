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
    "48TaXSAmRE2BRhHW7512qaMAq1Tn7CSZfVnGo7SdNKe3ctyHkXEjxUVjY7TShspcbxJpdg2Rji2Phjd9UqusNNLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QfYoFNSiX5r6tpzNEwKwy2x9ZuPpituqCavGbYqH8MZkyu7KtpWBVC1EwbTZRrKfF9S7PsfRPpif8nZxKtX6QC3",
  "key1": "2fEjqcFmUjRBHczuabDXXqWkqJMCSfDZiD7MsYNJGdjaseCWzEHvrJPzCXGroezJetTg9aAH5Rqg4BPCNqLYLcX",
  "key2": "2pL6YLdSpRF7z6Nz4tDsd3Es994HVXjE2EsHoqgGcf7KT8cY8MpbwtwwiVHRF89ZgauHu2ZqPnB9TrQt2HZkeUEH",
  "key3": "2EkUvMrWzeyiYc1vaLNes2BmZCZKpk2R3vmSmVhGpX6FNHgwAMZnxLQK8x4SUc7hjSFipt8wi7pVb1yFJLfAbK31",
  "key4": "2MhnEeqjUtK217JLpEyaR4xNvwGu7kFFeGE34hFiwwAT67zuZD2mZUCPMp6pnBEnFwqohZVVYRf3bNvPDJRdJ7zH",
  "key5": "xvGmFSh4xeqyyqTTa4TuKirZ9uRPka8RoZi1vWq1XZ2ZrnrWuaFsoF41CtNvRCtRRyphopnAX2ASUNweymL2YsA",
  "key6": "52B99nwZ46YcAK7s8pVfKNvADhppPJ1SJqTZmTCgRjaq7M3YDerVg7SW8imyTS63e61LaPw7i252EYgA4yYJrdnS",
  "key7": "2qGe7Se7UpZy2PmPnavCUz4sU2Gtc5bWdFoAmevqAoerLPUhim7q7PV9t72QMp3MiDoeEX9qHcQ6cjxw7WxYWhtk",
  "key8": "3yrPUCez8aRg1Eo4rxYWun1wc5JeEunzjBU4GgNdZvCTddzVNdtCCEYvynpTyohpdzbnmaQFryReEDDYMM3Z1J85",
  "key9": "62qQnnzPTBP1s8Z6hbcq6orMqnujT13WR9VZujJvf5K1gCRbkFoSwKVm1rjPULfFNaSbGuFM6caRTnGHUdbrq7RM",
  "key10": "4cnjD4W7q5Pa3EWHXdXuGy348rMChz1AyqKPVNnkVxzq2mrZs2r84Bxj5RTPNuHjwur9DqQ7iLT973ML2WWXtsXN",
  "key11": "DPQRUKN6BsmQy7F8gN3jtpdM7BsEgnDQ9qFtfR7sbxUh8uyJeH3mdZAr4rhuVKHxgAhNWVKUdQjdGNKYgj4VQCZ",
  "key12": "3hKiQYsG4BM6yqWcNLmKEnvV4isLFi4b4seY8PnwzQaAGyUmW21rANVA7Z2aSjqMcRDSttyusxJGrfushqTfVsAR",
  "key13": "3aYJQJqmDT6yo3WthEZ1aPvA5qjjjhBSmQMNFV8D3TfZPrtJwfkB9fB1G2rKHs3h6kYvXTRgntMBBbfBgTaQaDZq",
  "key14": "5zqPCypDrpes8jQfsmFjvaepXyW7WFfmgKwmfGfFxDmuS781nmJmFVn7fMhdFpn4BfTiapYpFxkeXoDtx8n72mN4",
  "key15": "3nvGbh3vxzs99TLGvh3dWmfWGj14iS73YwhjUG66cHisyj2LafxGrUZi55ZAs54EsyMpVQJjjuUmojsQ53WxiD5v",
  "key16": "65FAxniikvBt6UtgGY4iuBQZMDWvbYjCGt3wGwYtr5RbH35DvVSGvLMxEgyJWc4Rf6QHvoHPafbjC6bXNaCZnJaQ",
  "key17": "4Xiv7JaSPoKzrcvJXZ5mFdLu4udDT433oQ9LtVK4j2Rwuu3qJkkHqufwhYwuvVZraNDSJm5scqYMYWmkFaNBM2Tg",
  "key18": "22979jdHjjkq43f6PB3pr3Li5ZrJNDW8mQrdLvReqejHwo1Qvo4vZZ1eLHYri9YFZBzakSQTPftMHkGea7K6UzMC",
  "key19": "VRuQFxb2ZD9dabYoCWTJzt9ByjFtijwTjbSEnSfRYPPHfmMweDkNCKacDypQSv54PVj1NcXcmBTLJUtQAPNJiDL",
  "key20": "4Nr4yY2EGgqd5uQRDjf8cq6erv3fyaM8YDcXz7We7Tnt9PDXcxqvmgYPLfqRER3JNDjrUfkVzdxYBqd3Au3JoKxV",
  "key21": "62uy9YM3vmD8y9KoinnJMbLsJRRrJUGfHo7frsrc2m8sGgSF1VpPpAapi9LrHT4wBmggLs2L2xD1wxcbxzjUmTkK",
  "key22": "4JHAJCyVSKKrX8W6WG9qsfTTwN9HVjqUXQTcywUZeUzr72LEoQfHa8SZpjME2mYTyVpkk8YS3DCCPX6ae5DPjEQs",
  "key23": "3cekP6rWG4pXhSCJV9PLTHEYX3jMDuFbCxJH1KRcw74Euso3i94xxasLrojiDFGu5zM8hxbTqorTxPxCsdWDswNP",
  "key24": "2rimyuh1mxtuUFBZ8hCdTKUw5bEJgAF6S5fQEYBcqncWYvpcRgP7SHLv6orPCwQi3cKqfMsNVsK7t1uYbTLsoL5f",
  "key25": "2feTLSiqmWH9EZpZB3D79cyeWLCZ8GdjGwG4XAmFuFFT3vHCZ3jDHR761xxmvKsqo9A97VwCAmjYZc3GtmCdyPL8",
  "key26": "4cCThjiJBNk4jQL4j8AxPofWdFWrXLhc52LtfoBfeaYKbF65SYmc1dQ45FE9gDg7cuRbMU9GC2PEFXr3fN7yZcM9",
  "key27": "po48iPs7PdqtbksgMhvynq8haQ3eA7d9x2ZBBkK8Ycn36qbGYRWHPUxGcuxd7RvZrUAvcxguo9guSwoNGFYA2Ve"
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
