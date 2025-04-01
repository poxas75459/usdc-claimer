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
    "5ExrH52CoSaeunRVhUgMrAdgCioRNECUGzURPXPNSbcDNYgaiNEwjiuL5W1HHQ9Pv7Bk4MKCALsdoGG4JotRakma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48UL1ycirokU4RYVYt7SycREM1BcSEmBf8DhCL7Skbs1GZRBirhTfghvZ9irHLoEsvC3RTGywMA25yNHWrhZGpDU",
  "key1": "4ZwbQoKtwGh7Jq61NSzvpufH7p1dEHkzCEpya5jHpCNB6xaUqgQRPU4omSMxneMMY7HudSM3zAVCWk8EnfY1yd7P",
  "key2": "4Xm6gwB2ENQWQGZkx5vi8eqyzt2wTt55FDajPHWfznh6wC88cazHNMvqMngQL4gQS4YtQeu1VkvqAsQ8zWigKV3P",
  "key3": "BgFwjm5xdqFRnW9w3FNAoSp9GWv5japdmSVrwQpRq99bU6RnkBzZsWWHTdoNKtEYH7Aj7Ps4NxaNcH7nLXNxoEk",
  "key4": "2SkvrG75xmegyH8CPJHk8JK2bsAZsUazP6agXEroMeTtALsrCGfx3Xqo9rtaDkoxPThwn4BWLmnHykBCcefgLsbe",
  "key5": "xreoir5s2pXdwH6HKdsYoZ4iP9K9cLXTvBvD5C2eaXL8UjUV9Zi9apBYUPuxPfbGqL3Vhb3QLvHswFSG3Gn6YGJ",
  "key6": "38grFYUQ2VEYgs8gqRBnuwzYW7ob6Z5NN3txxwVUsoAcswHo4hMUCRAdKsj7Y6UKgdg49YA5NRiJVKeL5m4ojo9D",
  "key7": "2zh23XXe16yS9xHiKkzvFDRofwN4KPUDeC7jHEtZzv43Qn3BtMX7oxjntdapjkMdfuwrApA7DneP2zGJLWKDV3RZ",
  "key8": "5q1cdTTwmjocAB8gmurpGtx4geQWKjouiiUf3hGyRjnHg37C9C4soJBLGkhdA98BysvPyMgFNX8s9tFwMaAL9rTA",
  "key9": "2QosWZMMYJJKpa8P9bu7rqAhCn7UfjYS3bimK5va37eNeJeZqmuckM3WFgQAa8kvKBrrEc9pxcw8Kzqa6gkzmveR",
  "key10": "3TvNJyFLwjwwngBabPdDP4CcbG7iNcYtsQEZ2Sbotyvu4SwCNTF9ms9txuiSZeYUi4AvbWuLSdaxHXW4RhzypQos",
  "key11": "5YgYrTSmnyp3uAxLEeap7oh4WqrcXMSR7jU5ozEDhwjs2KkJycUCxshsvgJKRFWFretznJN1weSBJEdiJKk7beX9",
  "key12": "5vQbNYhhBuq2kHWDPTPCe5DbqHDGjBitBszUwmyivMxsf94pSFe1XuYeZr6GBn5w7zBDSZp84WVcH3sSM51rEnL8",
  "key13": "4zhwVKrZpriY3mAjE93jqsvFyj41EXy1qzUjsuTmvhdVqZVGbzARy7rosQAMhBE381MiyRRaizk5faoT2hxsjA1i",
  "key14": "26Y3P5VfLjx5bCBMW6h5zhoU5Umbjv16D9jYp1VXU5rV8Ph9TddzXSA73LstKpqfSLCE9K6qsUwUPwKtbE7oU5or",
  "key15": "iM721upZoNoMbPTgPDjaSoAPgcDxHJQYSQcRym4oZgF87CbAVFFLMoiZaGLj3FycAFaQx8uU1mygLZgaMgeAP7z",
  "key16": "36ZQuYbbGP5bTZBaLDCMCQ4Pag9Z5vjVBqZ9oLr4dXfEXtsZLmWGbWxdzDcuB4gSce3g1j9jAY92PbrNujGzDe3J",
  "key17": "47hxuxnTiHzPLBhhxz5bCfQEN1jZ8vkn4Lnvoh9FYDPV6PZ2SEdtnxMpewJSQhwdW8zmbHv5WPuS7yz2xSC7Jv9V",
  "key18": "n7UuvHjgA1bPySwfQNwUxzbnjRwUTvL5qsbFkRTRtBMRnWSXJC6JMcGFKYFuGXezakX21iEe1vvTEEs6KjGKCpz",
  "key19": "4mDtc6jfBKXipLGRiJRHw2aWnnRwHpZdcaFh1P5htjp99b5xv5iH9kamt4dKc92rBtQZCQG34hexCGgLESNt6DGV",
  "key20": "3rnJkWPRNCMJSNs6bsLUeVPhaD1KkDiBk9dYyeCNJRfhSt139ErZPy1vgnLZQ54viEWhSC7Qzs5P4K9p4mS21hj9",
  "key21": "2QJmcb2JcYa9rE3GKXS5mcN5X9WanDxiw8TLvuMGzg4qvsoW73WAPQn59aRKoLVVsvTGtQAgv6dowY46wDUxgs5p",
  "key22": "513EeppmFz8tte83hfVvZNLaXvUsnct7MzD217zjokb99pc7XBZuHguJxszdmP5fRV6pT7TvAGh2h8uYnXnCSgfv",
  "key23": "LmJ6orzfTCZGDe9mTdWPsxaGdhAcs4whFpNsY6rygPr9sTU9w1qj5k3gVF56fcepvviNgK1d9QYueYPNBpwAzNq",
  "key24": "3xVZJWkcoUhgD1amQLqY89KVYmgC5ZvXVz4QMfrkSMZCMac1quBgEXvi5sqP9efFkFJ1Di7CxUf6NNqFKu7JVSh9"
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
