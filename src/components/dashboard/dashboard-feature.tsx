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
    "2PooTD4Mw5zBERATWVbgVWRNrMnmBibJi4vuwb472ANqgAMd22ecfB23Fuyi9Cj3yHRHjtDu21xt2rY1U48mtLT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfEKrWNV3a72p2J481QRrszQYd3XZgyoxftZ84UJbt3fSvZHohaXJRr6ikstUWoeUfvhnfGnhFsjgyVUzKgMd7H",
  "key1": "58wkk9hbyydSwXTkkjHWU2oBiaBqtoErixAeM547jY7d6Rp1ScmZhWXRzcRmmKmjSfxNGqSzAf2gFpfJMHpJYBB8",
  "key2": "3oLvs18ubXewvs9xo5ksAuqaVQSpREZJ9PLn8o5cSJUhyMjEdvPNJq18Dcs2UqFCU646ZLkFZwhpnYh81WzNyKFJ",
  "key3": "56BsCGVNjpLPRomKUKrwHiyTnDVaBJbrQku2kiRH81N1pnwhke38judB974k6wXdPUuNQ8EJQUx1yaXSSxAox3cD",
  "key4": "24HuKQpM9dVs1Z2o1qCAGFNkTJg8QkVmA8c3cMecgh4si3ELi8dM99i5ZeC1cLofJrMFtbEmLyukWYP1VaSczkuv",
  "key5": "5Xesu3D7U7fgr6QpEDjk5UZ2CaxE6wzqFFmENaju8Rpr54hqGr1eAWcatbUz2ASJeoK75PtUdNgfyd6i2CsdVDYk",
  "key6": "4RfUwWZ6mPyVJroeptD9JnDN6ZucXouKot6eRXkRMskWw5pdoTqkbVHpLEU87uQ6UqhqhvZk3Vh4AHMGwDCzELMP",
  "key7": "5DrHucTZ9kPhnWvhfxKd7Rxm5AUoSe6xbgtsh6U1Qx2XNaYuELFur3AGB38w7AwgVqKzK3i4gEZ1RFMgVJDMNBER",
  "key8": "2XyEnbNxDf35UdttmMzj31ta4XwaGUqTxkHmm4m6dh7BUt75uGu62yQ9LzXXD8xhm7eEo9EcRgvThbHmi5NyzGzk",
  "key9": "mmFAEwSawH6jciUChAKtZtLXFSFKQ4VEE79XXU6nTxU2p8KTRN147Tr35yp6yL6i34786nbgQfE3jzkw8JT7e3f",
  "key10": "B65qgvFfi5LG6T2tAhQS6KFroXY55YQKRfrp19BiED9B43ckqzEzpajby5KaDYQssntHfzoV5acmLDQKDgaySjQ",
  "key11": "5NnNhunYMFAz9pfCELbfRhcmC2XugNXL4KYQtN91deLmfeqk2mEEgGgt4pfFv6sJgPBU3uEfrocDwzEYZq75cTfw",
  "key12": "hCsZfqBGXfN5oUp2j8bYxFCpMkkkmaxCC7iFpn6jSmgVPExTkMKgaHtcjizNt1hJ61jWDaRfUQ8nYGTREjCfGkm",
  "key13": "2AuXwtkN8nh9EGPxE3tcPfPArACq6aFpHKygv3VAwtKn3peBADKsDh7QBGgYe5FzgsRXPPRRDxUk38mxnRaXvF8k",
  "key14": "5mbQh51Xp613SZm6eX5173NtGqccKPGp5wkaPCZXSjTW1waLrGkFRkfHECjur579MxKEW9JqfjwrQNpW8AGfhXFG",
  "key15": "5tPGrAuKSdNBSi8zzmE89rGGnwBvVNBo62zJkqStJj3J48iPQWTuMUqkntH6SmZ5sYHJXazUNzHEaPx4hqk8Euxv",
  "key16": "C7cjcCM6KtontePgd2pnRiVCc6G4fBjstjce6Nvhqpq2Ev5Gi6YctsYkH7xkEu9zhFu1qySjignVs2qfrgrqqve",
  "key17": "3xaUdgV8Fd8iYLjkqoNiC7cBkV98FwbBxRvo2KrJ8bUE4r2X3FSV18jTaLEfe7UzGEsYBne6e2SAyFi2w8ePpM6N",
  "key18": "3FbBC4Ys3eDjipUG5Nheequ4bsApBZYiLMWcw15stVWBtqh4sZnZLa7SwhgtKdpui8zfDPx83QAL6LUDYwjC93jR",
  "key19": "3BkAazew1h2AAthDXGthyAVFkHSZ7wJeiewvkeFwzodgmqmYwT8Dut32Ez5CKaYiMJ81Bn7C31EVFJir2sXvDFpo",
  "key20": "5m5JANHi95jqevHpCAX6sAD7NChgfiD2aDg5CvqyqWv9ts1z398ZM8QkTUCHo3vRXR3RYtkHv3rgoEWGmkHSh1Gc",
  "key21": "5FVDHHERmsMbAouGjKRoC6PqTyrFQbzYSAXdzjgQUW1xPnrcpdex5Upijwu4o4YuRHu5DuAL8sXweSPTrgPgZ7t1",
  "key22": "3hR4zGF2fWS4zx3ubNUqPSQgNDTFeNvVD2EbBdwicFsQ2uQ3Cqwm3tAL1zMq8hbGjddTbxg8SqXeL5qRmjGNGH5N",
  "key23": "4vsVL4ZpD1wpgHdCTdiMHz5b1mPhqaxavCYKGdzHRSbQmxdQfPzpmGirmu7kec8nSBx9XqfRTUKM8uJ2iJ389G9a",
  "key24": "4RMNWsQU9NyZPwMN91jNBWsH3uqLbt25vYf2yRrUzgkSaTtxz8ALxVMU2dT7THvQaabm9KMLaeDGfrnXwrtN3dPA",
  "key25": "5if1LeGajnY52fHUGWATZ3dhb9hAdrw6RzgWQN73hFCqccbUPG2NJDSKy1JjNjfgbeqGHLSbvqt3ecL2AibUF87n",
  "key26": "4MhA1X28yBos8SWn4Hkz411mD81t3kU31XBR6zEhiT5aNUDAKuiyPafTqFoKjx3FM3B2QQyQnvVLcqVTWbQEn4TR",
  "key27": "DjHsdA7F3LDnc9cWTaqScnKx7Qoa8T8jRv2VPLq57JQaYLWf3PDSa1Ur9QxSW777pCHUgEW4GfynW7UujxiPcaz",
  "key28": "2eEpAC1AGDrxhaYg6pnr7k51xqkPdG8hZhiZjZd7RNNywVugd37o2DdJt4qo9ETQ1sbU5TnrKjtztZDn4UX4og2E",
  "key29": "4mCAcPvW4gjkRYiLyK5kUD2D92Cw8gcCA18wCD4g7DSBDQnHSXRcFDjWgSWTeZ2VcSz1LKepDRm1tA8d83tjxqKR",
  "key30": "3nsZyWXmTjtQ6dpcquPJ6hXzMZniR9uxxvgiKUhDpyU6vc3YPQEZhPbpqutKoZGYY6yxBu8crqSAsjUSkMRMCvZR",
  "key31": "56MYk3xzZ9i6riz6Fy1u69KefntjNRVhFiUwwK67tYiKaN3v6tZch1m5HVBo4aW2zGR9mUHVxYh2EgCu4AaoGcWU",
  "key32": "43YEYSjGwMckPw2eCPJ36vwoDHVB1RNwnq5GGvX8njaaqT1dCgtQvWbXm7BLnYedKgreew845KLcfu7KT9xYo7WL",
  "key33": "3wJ3jSmfivgSVqHn6Z9pAXz2vRnx1UQJPSd9CNM5AY7a2tCzV8qvJTbssAuc7kxwF9i26VuJYy4rPtGYhG16bukK",
  "key34": "5kAnfrWsi8ohKD8mrpcbB4SgCpQu394YsvzRiZ7kW2kMCqkDRcYrhKzrfGzBid5wk2quwzxAQ2eRDQT65XzsSJW6",
  "key35": "2q95JM8hKKZXKn1AXshKaZB5MkhFHwVD5fUchhHsYV3wz5vwrNUnukrAs7dWD7kfMQUsEZWD4QaEDfLuNnxAYrso",
  "key36": "2TjKARC65hnd9yacdAs5HC2MB52cgwDK4Xj9djLXyynBkK8h3LL4sYgtYjM3SCbcRAYqyhiGYtwCXPQaNH52j8Yo",
  "key37": "3YvVScofxe1twtGmfQB1NLuh7cTxb1UsbwXmYEFEuLiTCCbhJ6KXuXqrmL4sHwByd1sx5nKhRkEkRuHkvWNN7a15",
  "key38": "5C9MbQeEMcsM5WXrYnRRuosEQQ7ErvFS1gdYy4ZDg1BZmQKh8vLvffxGKkyzc5CCWmUGemhGwcaq5N8hASCTpMjY",
  "key39": "4YVksoasy7JPPnsffM6rZNacs6B6RijCM7kzvVgfuhQ63ouqGCxvprcyf3ZWULwB4joZcmmGyGZ8hxzL3Gmfr47M"
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
