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
    "53AH6DJJFdt2pq9vWWoVPsgKAsTUefu9AiDF9cC6cSZxS8rkafT9Cs3RdgqHjXGm1BuMrYreBF4nsgq3vWPKPs6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AJG7hUAjz4TqiG48Fwdd1TGCNYp8HMB5r6jaHdd3tRHUtsa96ZktKDvzPnkdkG5sDQg11vSUTmxVMMu4Nfhtd6",
  "key1": "2EbmCEhX2qVBMxsSBPHJL8D4euRnvpeCvjgUKDPKM4YpNJeQ8R7bNRfCSL7rDRTNTWPCCELHCH9XLEMgdLF55TLN",
  "key2": "VBLFWEPv55wn8sT4LLFLpaicB1m7kVQmt7dCJ9FaFcqxj2hjspuZ1F5YLehg3ZjA1brHCdLmU58nyVYuhpJvVbB",
  "key3": "2uc3ss3UzeBzzk1mWe1NdTLfcYgDrBMtctB7DNj4xycZkU9LQYn5Hg6fRdU9fzr5M7egqVtQz51f4gCr4ky44HFW",
  "key4": "2y6A2hbxabUXRWbmYbr9EurRrSpNAfVxfNJ9bBbTTXfGVbJj9p6WxkhNp9aL6swBmyXPN7PaL5TDQus9qqqAzcEk",
  "key5": "QqoxdoVS634LwSpR28jLDHSRY74dpGvcc4SH4tV87b6iacRo3nmHkoSQZzsbeVCmbwpMFmxFg5dGGavS3EcWmtE",
  "key6": "4ebc2BbMkLk6jJoxdHRbMVLz64oRB4zsu4EZbShVmKS4idD6wNeQJAkaMCAkFJKuoGawA1RqMKPtaxkQbsa1rxJ3",
  "key7": "2DSrEYbwrp3ggaqjCkdQ69L4KAx1fPsTqeCgRWuLHLx2gXYkEgdqLgekx1seDyL3LPHiWFa25HsxEj8Vw8ZEiu9a",
  "key8": "5b6Lsgmy6AKiJQ7NxuJvZm7uMjghsUZxFVr36DArYZUQffWLzknLUcytbuUuFnFdSJyEA6sCRdWUNoVFcy1BvrQe",
  "key9": "2QCiTAWct2oTwkrwS2oD9PLjJdbNCR4tqVctcPcuVBDhk4wgGhDWBZsmprdXwaUizZ3Yzjp4rapd2LVh5GFBy8Bs",
  "key10": "3ramTCVDBaj6SQzJJpVCXhSyEXfnwch8cPBx7ibFNzPGSsSZPGBFpn5CBrqexgWeT2EGMU9BCkzDyQENE8skJHnV",
  "key11": "37EiNaHw9sNQ1mt1rFus4TW3fHAxtR8T1AKjEqxpC2gqx4YmwywRLANLHgAfWDoyYEht6VRLy85CcMdcN62bSttz",
  "key12": "wR9YW6myzp8g2VMEWRh6b77vUK4Bs2HDQK7pvbcZRsL9fzVFhvQLiQHM8LNe2A4mEiSwtZQaVbwqnmSemuYBV1y",
  "key13": "4XTpqn11b3cjyvVJtenksCbaoRgCyBtnbcHXJnLktiBkixck7yjafTZoR8qfh1T6wBuMYvo8sPsBzNvxSddNBxEZ",
  "key14": "3wNHUXytXdgyfALLYsVWm3d64Vxbqdi6m5RY7jpnATrfF1sBrLL1WDroJidAbrwGfrmKDn9n9kWQJgkL8cqF6XSc",
  "key15": "667qVGhn5PM3WoyXH2t6d25exgrqQfDx8ZPptNmTzs3QctmYt4iQS1Tuapag191CvvKEDkqpmBVK3CNem3EortvR",
  "key16": "2xNtWMBjgYTuFydqZA2mFVUw4HcozEpEAVLHZkS69bFWoneb298z1VkgmgWokhDNUK2uewER2jtVe9iXj5eb94jh",
  "key17": "3TUMmRkRxobMDWfDVZabGpTaQQoeAmcfmUH7ErgQYA4cV8gAEEkv1LeFbxDS6kYWxNFqpEuh2pFbsmpSZ3i1zD44",
  "key18": "4RaoMkCm91UwdMPT6MtL6hGFsmMsWvwyh4DQiKrm5Gwy7XHaT5gSFSBfytJHhmQ7Yzpk9TAH5uWdj3RsnDtXT3at",
  "key19": "3arqEBLLeXc8fFyDXPMpYp7qRqDxUUpZUV6HgBtfrQ1s9KxihgWkfptGjpU7tTVBCtkcnEtj4uJX5wxwWY6UAqBB",
  "key20": "1uM97gnr3CTQHcade8JjfNaB6N1usR51FmTLtHJA1ddzQhG1Pej8D2Nk9nYzQGQMYRUEyEcJ2H13Yph4gQVZfMD",
  "key21": "4D1pq1nr4Piq23yiASApm6AUcx1p8R1aCCZ6DLcCYWmbBbnV3xnP5vXZTjZDw6WENs7mjQrQLjrY9YFbvgRifJRr",
  "key22": "MpPfUgjZjgeTbAHPVVuaxdCHKKoXLsoN5LjFFHHgj1SneruuRt6Yizz6SqA3ah8QoDj3XB66GRXPwAwFJLSzxaR",
  "key23": "36xi2eLwvNdcnRErcrigMLjWMaStmJ33ArtorxT1f6AoD3wQjx727GudD6SYLPMJEPZEgwycsDQeXCamv9fRPXyv",
  "key24": "4D7b4NnDHMbXzU6KQ4hThuaeUqSedt8JPXa5w3CeXnUhJ8EXVNhu8bNnpgHYzM7Pdj5wDXUiRk6rEZBcEr6RH8hX",
  "key25": "2fRnWgLPoq2Qx97DnvcsakKR8XZVufvqhNw7c3hCqxCgwcmz2chU9zDJMXhf8XJMQiY942q3QhxbodLjLsiYPG5M",
  "key26": "2Xn3mmZMEVfov1EhEcmWfHsnRxjcb99cb1EiTDUgtdmY3oqhXKV5n81HiYtt9Mn936STWxk8zc2YHDUXRFCfGp1G",
  "key27": "4XAVVZHRxUFvFGDKi7B5bRB8AmxsMvk7DQQbP1kwpKcNtBHFkKhjwJX1sq6ZF83S2Gxw2E3ryaQsJKvdSDmpYomv",
  "key28": "ACA2YAGEMVssZNra6K9oxxedAhd1KMj66Ua78DTDX6cPQyAvZHtrZbpAA1JqXaJbfLVCRvFSdaF6UNsJCFWrHsw",
  "key29": "4is5hyB7GLbAySzezEiHvXyE4maxGkRxRDqVMudjNRr3vBh7Wq7hkjRhvGWeWEkGwcjCjRHQkDiqNKo2nsS4pmZW",
  "key30": "32FaTPoaJhyT7cpwNjVkgvnPFMVSACt9dnchdQYx5KnSnmyPTXfwHJFXYRtycjhYYzfH44kjo2bjcCBzjzWDm8ao",
  "key31": "2e5pU4w9Cgw4HJ1vZWKkgZYnPmqpchuqRW1DFy29igCPnm7q9atfzLKqDDDtLzqzBfiwL55cLECtHYLQYPGQFQMQ",
  "key32": "3ThasVLby9hVmr6NxftyRbmNSX4LSMmWLQUfkLtfdBabBPzS2nxhsSAQg9aQnfPhkx2B39G1vNA2vu1JavN6ngxq",
  "key33": "wTv6rMtspieStjAK7cfgAzXeVg1ra5CAbx11xvan4RKSQFKHMMoJRBPdFHLq53HH3gu1jf3xXyxY9LCzijDTHsH",
  "key34": "Kai88dVPcj7ERq7NqiDf5ZFfMoqAa7pV8g1qztHp58WFdKibvLdVznaxd3SSH3YynZz5ZcAbiCU9djw52yS2gS6"
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
