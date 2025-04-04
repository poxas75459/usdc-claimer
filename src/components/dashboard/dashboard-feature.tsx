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
    "nDbYCKJaqi35Dmqysfxfeqvj7yrrTPGsKoqBbatxVVvfrSPv5yt2rLBe5xpSkN6TdoNZXNbwWbaoMfEyiTYe6aD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZTZnPTAa94P9zXtunNnVh1VmVZgq4hHzWC93dy21EQyKAk9YCdHnevj5vCqcJqBreVqKYQbib4HV4t47URd8ki",
  "key1": "2Yephzr2jbmCnBqKDqr6tswKReBvgi3eqkTBmtq6JqWJjfZxXhn9oZktK8uV86EAjTYVbUzADxB3eu4KzMnL814",
  "key2": "3feS5EeH3i8wopGSj7PscUmu7RN6thjAxvToz3ATVvp44AiX7BB6SC6c3d8gLhNFPk43rHWsuD2HgEvvpvo6ehh9",
  "key3": "4MNEvSvuyZw6XQEDCmVrsFjLb6q6nenA8VkFjTaqQKktKmxmPpavJCoKbKzBGcwBxNitsdX4Ri96UWTppfDrmchg",
  "key4": "vsqrDGDiDpvNFUvwBm5QPLzroFRbWyPibJASgCfRo9wU9UBqJGpsZLrtXf7NRFUe6RydqUvgxFZ1gzc3V74pQH1",
  "key5": "7u1geYhjQ72yvf2nr2ALTpXLdbu1QRPYgGyqgUWd7dscrnd1Ps2z4sgyJxu6U2EkGge6gqWdXxjPFbdZYiUWSzP",
  "key6": "3dJ9zkGLnymfAYVCFasodmT71biwbXtKjjnWai8up8sgpWWAHeMBvcpa9sCMNdTDC4oHPgpemHD2srEFwU15Szcr",
  "key7": "Cpk1nYudCLtfguRnGT4HMrMtahZVv3W5i2hgTReFmbYmZJw717d9qEbgVzJ16wHSkVtmNXZsr1TRkRP3rNeGdQh",
  "key8": "3f8zCVkLXFqesRkitZrsKYfHDJssS1bFMNHFHpjy5ZADYDNbFSXioykfMPihmprCzvkLNZVJNqwnAdhqVVFqJZzw",
  "key9": "3vGCNc89wBjDaPbUReiTchdUNMWbTK89jProvwy2PwfYbjh3gxJ4F9yhhbiD9SZkebobN7QjVYA9hyPvWMPcT2f",
  "key10": "5JjoNpLxcc4XhWBAueN4ZBuS4xjKUKPPf6uAmPcjwD8uQKTDUtCLemgGK3Xbh1YrHnDXvR9svTfk4rLeECPNhjjN",
  "key11": "4fzwLRWDfJQAobJphpbbLLQwSmN4pjDWYcs1yUwPj2QhCBvfXA2tmQDedaNqD3CzSKy9qqgAUo6YeSPcksKpxVkE",
  "key12": "277Q1FJnbZj7wWPUANLg8Cx9eNZRR4nxqFPSqjePmEWywyBypU3L9gavn1tts34keDLVhoVuYNq6r5VTP27rQ5oa",
  "key13": "3PoCGdV1mqoigKxiXDQLhSSiEDU1kPnHa68PVKBDSDgRH1tD7WxYzwEhj2Lvrb48j9VarAovaj9Y1Ns4aZTR5hUg",
  "key14": "8GgqGteNH8L2rYBdsV3vN9X2brK4w1jQkVzFHtPbXZAGq71e2aP1MMSRt83wcSn9DUGR4qQTsnYSo5ckiGtGwcB",
  "key15": "4oJKAYFXyQaMVRcZdYPJJFAvsY1wk9Xah2GBwqAoW2f8fzmgYppLmBTfaqoyvScaozMLN7zK3jtXR9JxxHWXsKEM",
  "key16": "voFxaJYaf4E8qHKZiRzW8YVLxwcfasfM2mKdC93Rgxr4BksuBAhtiHYy6yTda9jrvHfxS2nyGQD9NSMSSyP4UCi",
  "key17": "59fLFAwHBS1AGEYtFcZicTmEba5MSHxCP9fr5UryqaS8Qk2aJae1eYHUcmaHF6udM4SzuxHQi6mu5sq93PsVHufF",
  "key18": "27wR8umCkqxtneBXLKcwbhTxZsBFXqcCA8GGHx5KfTVZhVpc54wDQQz9coee4EpkPjXLAfqdEJYW5gNs4ddyRLFT",
  "key19": "VkU6vkQ1bxANqX3ES4VD23rTKbqNGHgaeVH5VNJjYhh1mp4sAfU8SD44qpXtYoA3Wo9oo2YbWyazAG7hdNWu7qn",
  "key20": "61PxL9QHPiiU5xGQAaq9ukWEDTrtuvYerKqvnesynwVAG5VepA6B9KULpAVAMHbUjPcy4sfS7mHotZerCAAM8YxP",
  "key21": "3x8zeSjY6gfrnZL91YbmqrGKFWN2LUm2MXdpB6kPdydJkfNMRKaB1SRjbk8MNQJR2Hhjg8M8Ec9r8ec6Kw8NS3MW",
  "key22": "3MCwbm2DCLW7yW72sqvcyCMPcP3sAoLw2ZkhNi7b2bZCn2Mdz81hr5LKbr9UxSsqGLv4xeGzkDqmg2sbmpW62hQr",
  "key23": "eDquRwb4x2JfrLZNLYVyFTR3LvhWVRpZruP7eH1WMuh5NRYfLKrCbhuTtQoSmhFDSHvmmeXefj5GBxaai4snCcd",
  "key24": "5hiPMBtvq6ypiNtod2PK2hs9wbHVmL2YQcPPFdBxQqp4n3C5RscD8473w27vea5C2JWGZcrHhP7kvmZepyzQt4nv",
  "key25": "2YZFuvwpPgRvS1pueNtgGHjb7Zry17s9iVLrdzXft5UCdEDSi9aG3zD73Wpo9G6VL3h6vvD1gVbFd5YFHxd5xTPR",
  "key26": "3uhSorv3UBnYMUHVEfQZxCD3R1AnaFTxDAVScJPKWXNNDvWe8bF9UXGMceyn2gvBj9XoMbcmreQn3yAyvFpwcMHp",
  "key27": "2Msh9FCGXxeeHdB61WGJwPwFukDGpsNEeXqCFnJp7S78aDnCTnHh5kHpUEbBrrVrMS6G5AH9kiM92dSm6NWPVyjo",
  "key28": "hRYmZsofxuTf5zUUe36UPW1b6qSeg9DK9sNJWA5VVipjm3ZGNYxabXfyarEyxEiMrBmTNCddx7F3nDZNW6VL7ZG",
  "key29": "gAvC34MNi6dAPjNeizxNdFM4i7fGcVCDu7dAmPsmuzP3eMMe2W7EJYBeXMtf7XZ3cD3eQHb3iqcvWbBLULMAX5c",
  "key30": "3Jk51XauzqM8tL2eqoib6Y66yHzZp5yKmZ9WwbDjNHMsp9wK3KgyYno6v1QxvMeceWecSPqz8bmkpyukgyL5Q7Zs"
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
