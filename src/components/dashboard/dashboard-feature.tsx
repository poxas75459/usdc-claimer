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
    "5X8wvEpSoQhWwwkKGQU5rkmjCKRBbP8tYmq2CV8ran1TZxZSbXydiniZ6jyC5P7nEhCsrgSLstB8xANWU966y1sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jWZVVsnqWqFzGDXAcKDddrL2QbwH6EqPjiVfoxLCBMHuBPuJnr65W8KdoeWBprHS7pUH8xR5hwy3By7rGoLXEE7",
  "key1": "5wThrj3U6yyP1oKEgFvp5BYXDiDTYq7b4Q3TJSrhuPj9gedBvRSQhGraub9o6nVdoxxwqkM7Cooig8gV3FkZx7x2",
  "key2": "66LvegNPiBz6BBkJn8JFGwHfFx2ja7TgEH9GMq9jgz3METpxAJiLsCucz2m2e85z5mM96xcdDvfPJQSfvyFG2FG2",
  "key3": "4PfEDH2n8gjkcDHjhNJ4pmWd5sp2bgiAyXQyX6PfmcdovhK1V4dJaTeFaNnt1DaSECVkHMmVYRc8Ch2bRo8H3Zz2",
  "key4": "46XMxck9H2WgUhEoo3hC63kGv91SdneqGqLZ8YTK1R2a2PMBGos41y38Ad8LgdGKeFdkPxHWHN43iNynbSaXqmL3",
  "key5": "4Dzcsa2SVXghT1gUK9urNRkD3yGDh1FFFev5JZkdJjD7t29QHLZ1U3GbcTavMUmNmgrK2mj38gvJEiWFTheimfUS",
  "key6": "35624UQXqcwbTkUL9BMNAYSdUtjAa62Dh2nj7ded73dzDVUz3cPLfGp33rwEKJP7Tz6jZWKZvfbk7HxqUvfUuE6m",
  "key7": "5oEDWT3y2NYsFTSoXxwxpAwQpdGiDQyRokxgAAgk2dJqPVdL7jU1hdWCbBNWdxHLDD4arLCXCXxAn836JCy5FtfV",
  "key8": "5Xps2tuRWPArzWvi5HrNnd1pRajZQ4Q7djaEhbMNTVq5ex5UqHmpyMihT4ZzZRCFfKR42FW2T7d6wgXYNkH398zH",
  "key9": "3Z6QRnqNibnSrZ13Geua8EEbAabDTJmmCfJPyzDwPPwKQ7VFEvNMBRLbRW3caMQEuzyvsV7ebVfXgm56GyEmq2Na",
  "key10": "yoGaaheisw9DdwjrThQ2uy4dPt91TpWyX46uBcBwSXkC7NjwH9sK7REpeuoaDEhMNEiirqaMxwCGDuuiNdW3vQF",
  "key11": "3yxBJ7FKUKfs9mChebCKSL5EsXf9vyxd2JC2LgdRoo8psYpTL9yL54rnFPmzQmKrd65wcRytjbb9djEzUnweK3Mp",
  "key12": "3bRkPpyXS74u87GUne4zNUgHgjuccvtjAeemwQDyH7CRX4J9hXTxfTmC1HpR1JuYTmKMcQv74JvfoaxHW8qXsuss",
  "key13": "5xukHfR9e5yoeFk4Lj1AQ4oN8LJqNBCojBxiwt4qh69V1DaWZgoAPzR3MzMnrXAoC3ymz53ptTHttEkBcb9w8otn",
  "key14": "rRMHDeuonVovsDt8sxyaCC7cRksBNXK9LwriocCJQ7hcvzCVMH9CTifV7ZydAnREhCsto6UeAKFVCBqMdhuYtyA",
  "key15": "2ah3RqgrKMHLWmPbNEuopXj3hR4Mo8zCTzD8WXwsmEbSxvPJMPojhEukF5W9MRdcexqP71ZDktHpvVSkv1kwciqG",
  "key16": "2K3TQy6PDTUDbhXAs9Ef88eixTWqy5DbgdrmG9eehdqtxaWr9kni6k6HzSjN7yCostaG9wyB3u69YhieMW8K31UL",
  "key17": "2gpFWNqiVxY1wZyBwaE9L9bdk9fz7zXmmody6GsVkDqpVFZJi5jJfXQJfjoQ747BQnqfRk1ExdHYYHScRakrHdZD",
  "key18": "3hssvijoSBHG3meo7HrzuhcxUMGbixUsbxFtNVSS3Uxht35prEKPtrXPnyQHhyd8BF18wT1H6mEk6ygYgj3XM4Th",
  "key19": "2mWPnFhSTPVzV4DfcE2pJvs5agjoHqSAvdbLdvGfxdMgkNHK2zFPyCT371vhSdrLcrFvajrYoM9oDdpGjeCkPo75",
  "key20": "2acW6trkUzoPEYxtiQw6EF4tLtsnAHYcMkLtx63hJ4gVycTyDBSjZ1qnDFdNXSi1YDtkyF8JtwjJ9vmHxGXyA1Eq",
  "key21": "4WxAJfpjrLcHWSmbn1LGf7zXRQzYrYE612cWab7CwQCEJym9e7cRQooXedS9dukyZwrvms3csHtRZoGjZt8jY69t",
  "key22": "4XLfkuSirHtSgAGjCkEzyYqrq7yEL3dxW7j2JYeCexQbG4nHVCNRy8NknB2cLmi9PUp74NHgqinvDQBweA6jMz2R",
  "key23": "2MNV9WxKttiAHgLoEMjBjcZqJCF1MGdx5CPxXhkZQS51cfQsKZnrKaCcHoDkbPKs8rpNUw5UGSTPchLg6nTncvyA",
  "key24": "2xZNAAvNQHKfHpZ7davnMND12QAcCpKiCge9vd3LkJY5iNLgQYtJYPLxcQDHYrL1yYcQFrjzwVLDzUtpKKDnMvYG"
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
