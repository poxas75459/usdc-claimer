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
    "3V117nko8ecWhbwpFfJwhq3JFG7HxuzUdjfPwPPZSt5Ho2ajTT1FmEkNgvZMHYPs7f6iUu6Js87u9eJCYjhJPdqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YNbbhtyucN4h8HBvYiFYV5J7zqKP4zrfKnSBbdF35m5nAJKjhZkx7EHr1MBSq8WHrRyzeSYFpPqBRR8ktHu5SL",
  "key1": "5TaqqF7vQic1V4FvFn8vkPEvjCpio5xTK561Fut8vruQN3oGLya43f287bvWn6EPFSAK1wWKa8bvTiJ89SgUwTix",
  "key2": "2d8iKHiCdXHAZU7XYwPULfgt6uZnDzQz9wiDr6Y2hajfAv61VpnyKyL7bUTBfFGURC1CfQCfQ35MJLRTfxjC3bpP",
  "key3": "2D7ANURX7AMsxWzuY4cWxsgK1ttkt6GaTQA3LAbYztGPmon679Cc5zpiCtJoT7QcHJ3qBC2XmcxtR4rmwVHa39zk",
  "key4": "3mKjtbsDQiQ8U5yQMUuEzhLgP9P8zEhjDSbLTiRB1eVWf29FLrMarp19AkHr6Rh7AnFwvJ7mrjVWYavcHRi7gutJ",
  "key5": "31kFfKycAdpvVwcXyWoeYXSxxQrYrbDURwfUbfhSkGxjtXf5ng1FvReCeZnAZXedhPLtHQeSUPZ9AUXsRw8WWSEd",
  "key6": "53DPCaVY9L3R7S3pRCj9kpXfQoMu1fVWGB1FwwYnUo7w8AKRPmjDKVhE35k4T2MP49rrPMq8gPtmpsRK67JFf5Am",
  "key7": "4sq8qv6MUfUU7jkZuWgD9UVAzDs67NCYUu1tPQ6ECoUN9T2SKBQbfvesAFMUdu75Rnmmg4f8NmB8epWdLzfWFAMJ",
  "key8": "53A2N3uvvczqvZ7qdHW7S3zgikL1Z4cKgU5HspkQ6NA6owZRau6dYrLQZWAhtHEgA55YCbkdrsjPvMWJU5hvAnZ5",
  "key9": "4DXof97MdN2EbYYzeBmKgrKTemLAr1CJfy1povTXJE1F2Bu2ATtcYrPmSNVBLbf6LFTHcHVNQ7ui686uzwfA3NsR",
  "key10": "jGXkBSWSUdP4tCnjT5rRHuQhvCKmrYaicWrK9UcieLazFas5Zr3Ue2PvKWGUBvDtqBNWjvLk1enJf5UP7Vj5hzx",
  "key11": "5YzrCjLP88sgZhtfFax3j4wvKq4V8iLzrpFRbVCRumTLny1jBCqoWEaqnNiqNgVEG6WBLzqCa4Sgmx9ALCAkiALi",
  "key12": "3ARUycmmSFbHiAivEAueNVpXN7mbMaMTTh5qo9WwSXqJn1jqvn8STqNtxsfg9Y4kwoWevC69oSFic2ytxhoSXuo4",
  "key13": "4NbA4KnXbQiDXnGpqFUGQyzy4KFs6pRRLXRfqQjmzZE7zucQ8vy3yazmtf5x67mVdWfe5bK25QozEQyLUKBNv7Uf",
  "key14": "3i4qqXGLvVgsrStQq27AZ9Xtoyyhs8RPYZvX9zMDJCPmifWkKBaC4acqYFtJmNdfQ6jHJ1FaHLd3WtdxEiRjmTuU",
  "key15": "5LeaQCu64fe6Zi1Az1EsBbQuH5ushhyBR9ig5dXxdt8xgpfhd3yD6MpuEHQFiUibUucEBP65QiBjBVrmgQ8woSes",
  "key16": "5T6g5tnySK7ESduiCwaUgwoQRdwz8YREQ6aRS3fAMz8MWtakj5Wrxjo8yUAvZWimQ83f9AzidbSTDNp16HuBy4KX",
  "key17": "5uRP3fbgWACn7nacZxc3yAhNQud7XP3PsUCymouTkMJoasw1LPGT1ctbAiRmen4z782BZz6PgcCYpbmUmrUVmj7g",
  "key18": "5Ym7kMddcP3JCQmnCPSB6sibmkwSwwzssQqrGBB98deimEEdHdBdf1BcJFiAaR4atNQ7Y4V321NxYPtqggxd4nJ6",
  "key19": "8xiqVHFWMmApJTtkLxvAeNqGi6QG9FN1tbaWUtHeP5NqcqFz1pXjzg5YHuR2eimKLmYUN1p9wWey3fYF8wssUHR",
  "key20": "XBkF9DYWfGiNBKDjKq5cJyZuNYbKSvzfyoNxLADfCqejiHd5ap9uRGtEFjRSyAnrZipPv937hvHZthmr2W7uGxe",
  "key21": "31n3VxUBtyEKtcMPhPF2z38PfJ5SwYEJAVMUuK6MCm3t2D2ZmNpZtGxyaHwuqinvwqtmMLCPXHBpPJsLTYvgMfRH",
  "key22": "4Ao2Zsy4xieTJrz39wwvJnNc7B4pSSTuzttyjUgdxFmgMiPxzqLmrQ8SmRfr43SfstGQ9gnp824qgKjJ3AGgK87g",
  "key23": "4pwwGNWTcjKzjvrTSk1R47h2LnnvesbXBTCyLA3TNAgf6KjwB47JssALQLEfEBcYeQ3W3wSz6BEo58zw1c7JuM5B",
  "key24": "5x2KFqPgD1LZDBrNCXTvggHCeCWej8Gq1jJYHXS2SGzBwSKABmnP5NtrkT1uhq8eiGN8P532B8cCcvBiW9NdXJhQ",
  "key25": "2Y3Z3DwS2vDfASzNp7nJPL7dvYbdtEXUwwQuRrwzrP75W2EaCjz7b83PLZvB3EQmUZyhcoEdYiSe57mJFYGGVS8i",
  "key26": "4dzYp5HES94D6uMqRA7fTKJBh83E5hE3esK8SUGaoJFfqjfLbEGjYMwSqhrMN8q2G1j4EXS88tcadjrY1dy7R6UC",
  "key27": "5dHbsG1FetSj1JdKGYSUXCRbWHgwESmAHesmGPjVDRBCddT57VwS98evNyKSz3rrzbCqXXdZkum1p9iXwicubdKQ",
  "key28": "5fRuV7ZNWf15giJRmvXQxsiNZVHy2jYWfhbTSKNqx35vAcaQSatpXUZtbbVxYmNyUcftk5ZusySKjY1eQfB4edsR",
  "key29": "211hcTSkRxSYURE5DyzzRcRygZyrgMQJ3sFPGhLRb95bR63qMUN2b4ohEYasyV2qMXF89azJFWVnDUoa2EEH9zWb",
  "key30": "2XkweM68f4LG65AYeUwan9VA7t1Thus81s7uqpMyYdbiq4KRWMQPTLea8npraqWdjUa8rN3mjzhc64wnzJebja2s",
  "key31": "4VuRka61fs3iD4f6jqDXc6cTw4FWWSXTTWcGc9GNyEDDCZwwTuYW8VXd6WMVdR4SEK3f8Z2FbYev9DrvV7gQANCY",
  "key32": "5a3mdrAq9bFEPepHy7rM2XQuWHg9oKzaubVtfgU4NX7zVc5s6U5CSVibbLf7AzAvaUJAeeWvqnmLdkUjyirnxGRm",
  "key33": "2aNF32CYbgNpuLjwizXEviEtvHpSjyZkus298MufZxsjHVvsZeud2WCgHPa8rszWhg1kRDcrwMo6Zez3LLAJWeib",
  "key34": "h4uKyx7JLp9fHvxWsHfvThkAKBRubLtQkhtgiuzNj2zQwuHWH9aLBqh8vt8zc8B4NaUCWt2zHYTDpMLtsBakL44",
  "key35": "4ps23VFqFSfJQ19AG7KvwevqivfESKZJLuXJqNxsWosJRFiUmd9F1mDVgJNJdAFebddusdTjGnmKGZLxgTZQhrak",
  "key36": "3X5kCMEECf4B9xstahKPfAzrYCeHiTTrdGmWAc5DQxkaXBB6cFWs51DfYRz1AMB7eB3PFf4JoN44sHBAyR7CbWUh",
  "key37": "65Mi5zCiRndqQXQWgWc5Gad3B5NQ1cpiikScWuQyk8kfHLWo83pon2J9xyWTTWpxAnwBEa6dGKLsbwsKJGQgvKtd",
  "key38": "5bD3w6yW5Y5kpxD5WdCm5nKQfTn3uTU8usrMWEtuRmRgt6ByzfdTMFaFQqvgmJ4zAAtVjU44pWz4epf4sqf86hi1",
  "key39": "ScQyrps5UicMvyVTb5CXxHm2TbiPGCu1T4oJM3bGycMB6BeirAiKZ7ctpzsBbWTbioWHHg7VtV4TWwMYvKtaRX1",
  "key40": "eC4mBLhVS9ci6wfiXez2yva9w7SrgewRnojFe51Y8kDVT6uDRuQhRBohh8VChr8EvCEEp1yixeQTSHcBjCfczkq",
  "key41": "4a57YQBRULMpEvvVMiP6L3oAj7eHKdUPp117kNJ5qm5d6pHTiRScMiM9isR1fo5gti6cpZQ9JiernM4vqzj5xf8E",
  "key42": "5okTzq7XHnCYrsmKJHeE3DxqxzyKStehSWDtaRjipWU9SzXNf3RhqTNK3U6K7Jh23kKRqjWUXsjZWWPeHTfmUMQy",
  "key43": "bSktv1LucF4D4GHd9mRn8K1KeLkXzc2Tab5PaHNbxq8rFgjRsyu9tPmDGfpmpocETMN2ChtcX5HYBQTmjq7RD8G",
  "key44": "5a9fPRopkwcUdsBUgjESAc7rH9228dh7DFL44gPqiiiq8rzKe8aYsiNNgBgGHpb7JmLc3xpcUKCu7ULjfoW8Bbtz",
  "key45": "2nCZQEaDxjzr49QZW519QTRKved4nWJCvvrq9Ut6yn4MFmaiciT3XnQYAxepFqokHWyEShFDUHBJBhy8wVGZYGoE",
  "key46": "3RwVfWTk9d52rKiZZzmkmbfFPXK74Zz8tJWYfED5Tmr4gwBHRkjeiYsDKzXRxwKWzMEwTtZmZQVe657cXT8udeYZ",
  "key47": "5maCGUHPeV9xw664U4AxzjBb6WVjY7GzGZdyYSsddERRhzhtfcZ1d5Haxkmr8U5TPkUrF3YuyTk4H8qjUuVVmgPo",
  "key48": "21UHNejoS9y8px8BpNAswEzWv6Z7NTFTvX6m6KAi58NXxjdERDTYMZ2DrxUtb9mTJxNAhhWeCkXwPtGbmFegQJqM",
  "key49": "5CwAD2oNQ1ApRyTUB18hYeuXFX2FrdCPREkYdyZgZHPLzyubWr8syKVUPHYQ9yCWJgpE5PALcm1bg2eSiPZ2V6DL"
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
