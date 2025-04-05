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
    "3uBMag3WV1mT9gwd9yh9DyH4yhJkP689guBoQY4rYdQroYAujz97tSd5t7VnHLKZFUJCLd6b3XivC39oLKfxsdot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMiaw7QkDriiNtVxYWqmkTbj8vShzWvcfPVnqCqkLgrn3YgxoT1oZS8G6R6B9oWY9P6Frwoch2CtN7J74yHnkf9",
  "key1": "5FDKip83dHuVSWUGBcos3jwHpP27vmbij8DM3GDQChLVzCgiWQL4t5t58ZjLRqPBVxWLSfu2GqhthCVwiKc15Vjv",
  "key2": "3q8ZMuhorF2sGfT5oa17bhQUxcxPKYJDmtezTB9Cp5LKXzDNu5TETYffrt4D6N1Y8xZMsrqAPSnuUdnEH23TPLbW",
  "key3": "4QRx7iQXkofp8WBHVzQXYd8GNRUV6HWaNoh2a7eidXkPjXc8wFLm3zemCiJoBWfsHiAF5DPbLfMYbdJEnQb6Thop",
  "key4": "2e3rs1jYPpejJsPq6vrswkXQeHFtpj4tZ1WKkUv9935ZjJ8ngYcX429G82DpbpH1MT7EyjD7waZ4vZn8Nh4vTwJn",
  "key5": "4oSf9CpfmGbS38D3QXWqqbA4GYqBgtLgAh6scdRRDi2QRbPQV4qe6Qksauv8Tr2m8e4pJyy8fJUAY2BZbZ2tiXAt",
  "key6": "5NrGkcD7S3MRejqppzPMXAcKAHGfW6gFhXihuPqM4G65k8E5ToGkFEaF3V9L4DPSH7qtf6jcAp5GR2CwkPg9TLr6",
  "key7": "2rzRr7HeRxa9sSL68gunexP6atpEqWfNjrCh2we96RTT3bNh1FWwkWkz5Z5amAhzmqD3a2qoJK53Zw4EJAoSzV4L",
  "key8": "5M3Q2S7CznbUX27SUmKzpujXRAFULcwW1AGv7yJfPqBEQ5HpFnnfKHmrhnPCVD3qo5NLomHfDfNxrHF5MmWdUzXw",
  "key9": "3BTE8iwKTd3uHpnxhEpMo6ngzKkjMoVrJ8VAbLpocZBSvP8ViF3GSJV1MDyjK2zrTiuLMnbsKBxwt9MScW4YbEPK",
  "key10": "2MzthrUJ7PkUqhKbfBBs6JeBHS9Db9h4DNMjt767ACCaTMtJGRN31J6EDVCKfTBdiYiuqH483jP913MRCdFMbrEd",
  "key11": "5F1a27VMUKLUsY3oK7zM8HwVVAoU3KcZynpkpoP7HET5oJBdzHcVR7vtngxAhaTm6RVmmVFTkiarZwHfsCP8Hao1",
  "key12": "54iAJqJyUUckHuXJk82jzG87ASHwzdYWDyoTe8vQtqBm4S9LBUu7ppSkbP3BQMa7tayUbi9QKFrhvCEDU7sVX3wR",
  "key13": "GKmB9juday7QMqNLLFvp1EdgVuMB2n61KCs3MY6jWdktTzKZdsoodurFgMi5yYsiHVpHnjPcpCKQcZ6ufYjxoqq",
  "key14": "P59siRVaevo1oDjFpdsRxS6peCbkVDXULP6ZkT7d4KnYEJgKg6VYnV7F287ZyGJpmDabzdV6tFw25WSmTmZFKAk",
  "key15": "4owSdWDbF3xbjqeN1Bbk3vGDNPpeT6nQEZnQxhxD4KNVZ2wq6LEAd8tt6j74QCwFBVgvA4tsAxDxG7PqEGPSaDSA",
  "key16": "2b8bmGuRAbY1UddXBHmiAsy9txaijzGvZqoH8tTgbvUjToBHELEzu1Tpgb7PJ2LjaYjStfPzYSmDkiiMmdxShpCd",
  "key17": "ii4icJGs95XPgVsin38Y11aEGSgd66RCbcmtqZiXR3sW5NCW7iKqAxmD58R3Tzqz1TCBwihBxbF9tNioGGUkveU",
  "key18": "vssERX5sSezj64eCVHESeMS4ki99PRVnhhpaychyQFu84PtrSuVjRUhFetUg2X2oBNCoXULBczGpSpqjVSDYTp6",
  "key19": "1QbALsd6KN6rqQD9LJSncXwfUJxDiYo9VPwf3Bc2LjW9mqe8jNanHzE9mpdLtoCyyDQ2TsMxUGWnQceM3cP8r8p",
  "key20": "44PqxzofJRVceyqvXnJtSJp5Dpk1gvgT6k988kJFHTo777iU98wXMPRjqC5TiNTsQGKkraYVREY7qD7zpD229fkb",
  "key21": "2g27BGoRLs6BMj969fxMUfoy9V18fyTa5AscxDzAAsoRFFqQ1Xr4MQz5kUupQbUxafZuZE4VzDfwwNw86urJrCmU",
  "key22": "3BJCGf3ymd3ZmjWu9JX4Ss83LHSzr514t5AXnNJsaWvjqsr2SMu2JpZuhE3MPyBBGRyQKgtUxBzVDP4bFK5xJGjd",
  "key23": "3uVmfYHniEYggQP1qYGaGD7nmRHfL4kWRb9FtV4qUxxTn7P1J6bKMymjNvsdPwRKxce88hPsfBipPqT8JzUgTMfu",
  "key24": "3XTpmnEqxA3vxTw1Jsf7rUNS6kRJeKhD7bXWgmgBG39NrY4Buc98rvVDNtF37cXKN5VKFTUPfGuSriSvdem8pKVW",
  "key25": "5kfKrKpV8nSFV6PBpTcXwPmBoKrz4HLYyEL3BhcM4Y25BzpmNdRLTVsGfQ83r35MBhAxa7avgC2bx5x29rg24Y2a"
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
