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
    "twG8XNJQNhAzyZKPs88LKtg8KAMeqqMftyBSk1uFEhkXwSH2WihjdW7Dw5MKfi8PPxEy3T6DoqBoVpM74XAZaHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKVh1y66aL9j62nnWLbgMc1VkGjYuxa71WoWu2phLXKAa8QYv7zfESLDdvYPWrDm2xUSmfuACaMYRfYGfVt6pM6",
  "key1": "25rhCydR47RkEyXKmrCkpCywsH5PE5RPd8DeAy33fbZWfEWpVRVrxw7foUKHiuNCqJvTaEYRc1WCMoETvfSdRzk1",
  "key2": "5tm4NwzAC4g7zXatEUYEJcpNQ455V8q19TPZ48qpryDSFx58Vd4i6EDMS1TdhWX3BhxeyAPdMNfVubzjtu9cce5N",
  "key3": "3364pJoC7qjUvZK7SvVsfFjkWcyxNNxhqew2G1uPtnT7enqimvUJSw2kVREwSSnf4zKUmmJwnM9RLy8BEP9JoTNW",
  "key4": "2DbM1TtAAt1ngctmY1rX9Y4Hu3B5AUBWbm8t4YAERvvmPqVdpUFwJZaGkSZnCsAzVY4cw3kDvbuKZMkQTViku2ZH",
  "key5": "vkR2uHJQTF7c39M3fdtJBwpoYUUk4aYccPS5jkDnArxKkr5owTDzNyu8PfKaAbZy1yH5DhWfyAnmjMwTAtHQtpT",
  "key6": "5DRVs9r7PznAb2HwWtMp2ThY8feVWecXrLG5y1Ut688x9yeSrSCzXaKWsmeYwbUVM297J8wuRpWChZoGM4jWedev",
  "key7": "QttPWkF9zBfhf6kRMM3CnRiRW1UTJQezWEpGKUVhhbRETmxHaU8Hjfmdy2dSDxH4cKAqonusQghzLSEjhxhJLbf",
  "key8": "2invquwDAfHCLqn5aJ396NH1d7ybeSK4Fe8RdMAmo1L3u5WeFdPejcm2siUTY43pNYgNTEgnBskAjAfhkT9izdNA",
  "key9": "VhrccR3ZgmjmvxvwAon5e2zKGCLJaurtPLvRCk21hdmViy91XxTnbRoqPH8DEu1i7d5Lfi8JY72sYRqPQ8CZB9B",
  "key10": "5pEAP56r3LKgDqpr9cwaVEzFDesZavSnt43YU1ZyDtLbe8Er9GLyzFGNWqJKHZqJBEm3JLVbLb16nuG6JTdfCSFd",
  "key11": "2EcC8uyENJQ4gVw7dKN2sdhEKy9x3pJ84UMUECg5rvMMuzfTSziuaT8VkR154XGirchnRrHLhabd2aZSyVxb4h2f",
  "key12": "5CNm8m8xUdKYt23vA2VPPQTTMCrr8fUw9wPzpihJq2g7tmZ5wCMapvY24EXuntqG4ZTMiofmLjow8YttPq7zyDTR",
  "key13": "5tLHsC6DqDX6X2Qcqsd198ypJv8h3PuAcT7XP2mNqyLDwV7KbHHqz8SbLiuv9YTb1RUXs25j71skr1ZaxC3bEg82",
  "key14": "5Yhnaaau4bhFmEmqwQ8M2XHV28yB7apvFWhtxZxs2kuFYB6A5sZf8YiTv6Vn3hJYKZhWP9Q8WMo6WmS34JzUacPR",
  "key15": "xj892gzrXMF2gK6ijwcExYycHcPUKk61BnKTDHbGDZuYWdpYkSwMa3xKadBsG3tur6XMQwNU931aweov6iGauPB",
  "key16": "5LwQkMihaBNiDNPeBzhrGKA8B54c94RjxYt7LcPmQVULN2Fsg1eh7MukYZLFhQZwMtN5r71HJnX3EvKCU7ysgu2R",
  "key17": "5VyAF8AQtAy2hjsPyeBFCzayD6M97CdUiGkTf3QS48BwjTMMPPL49ADhCxr7WE5CpgcCgq7h9efuzzXbLy69SfPj",
  "key18": "33CJdb4v2nSGN3Rarth7wk87XBbX1x5yru8HFvgMx5vMnTZqpnALW6xAXeEcu4WyTxEehusuQCk1ANG3zyV4XY7m",
  "key19": "4hCffYW8JdefbgmGsQejguTGFhpEkeoGbNp9ngTPkPo6cKgUFH71ZGxaHbsx485Qkujd1ZSDyAAfxswuGLsFafpz",
  "key20": "4VTrwMnfufCFWFn16ynUsJdS9eKB53V51DQep8gConu2dhA8NDM4cAAdLNCgVhZ4jFMytoJCADyKEMUBNJvk178q",
  "key21": "2S2W9D5qp5XejZ7MZ37jznvwSyTB6kaPxLyphng7E4ZjSfJMvzaiPSejRiugFCXvL1xy4sEQiiRjMGbVordAP587",
  "key22": "36VyG9h16yFfpw8YvfPS6PPbXf9stirqoTSuteDG6iiYJ3KaL4Ad1jwDWSMHv3Xj26ij73WEXoZXCNUXjWvu8FyG",
  "key23": "eDsqTEdr1GPZcjTiVBgwa2BCDAmHcwSbqwzCTSrHTAQEWoredS8TXKieykrP4Y7A2Eid5MYwWuLuU5PNMKLkNFW",
  "key24": "2ACkeQfjHGrZzkqrWZt8A4X3nRzmAoMtisfiwpTn59RaucjwrRgqWkyuSErZnHzMPuYHW2MtPEdUYcmgEC7GuqRg",
  "key25": "5fVCmn7hrwJ9uirh83sEPty83zzRAT32UtdwXCtpAFLxc1LBrm98xm8W9PehQrMAyFwWwNn59Z1i2QQGpJLK4tNz",
  "key26": "2y8TZEYGWHaEXNZtHRB2vCq9hKdEWUQpF2PFBriFAMfADBJze2j4YyZY5PCnqVVkjoSYHfZcXqXK4FBzLAt3oxNt",
  "key27": "3VNxZytfNvVEksYuVug22zK8sktBee67CjLiwEPC7q6FfFbVF41nyEqrtRhA3AjL8zkKcubEsFHP7aHAcYPL1BxC"
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
