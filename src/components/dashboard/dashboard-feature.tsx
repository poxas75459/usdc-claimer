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
    "3qhXiM2bfvh3PTe7ARDryboH56Lt1nbACgcMS8LdP4MqC7SGxNWDKUjRfp4ZqzmzUgeZnN5NB8HFaNTWYMUjXYF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZNzhakvfeLAssLJEDUVhaS5XCPX8rAVxTcbBU59iPJ3DVpucgLw4C3Lv1PcitmLf7yXzGvzY35JqsSm21apXhe",
  "key1": "4pfyzf8iyNKW7tmqwCeMqMZKGxzMtHGcqhcBowyAsjX3Li4dxdopYDCmi2hTwgW3UcRqLoci8iqToB7opDukXy6S",
  "key2": "2rVX3kRdXHzALtCHUXafr6L6EwGNsK3FhErmM5q421ijVEmtZYGi2i1MkwLXH18H1F7ZcCCma6xqN8pJcFU7Uzn9",
  "key3": "5yJLYBzxuaZEHUb8TVX6Z4MXk9Cci4poCPAX7NJ3JdL52UWLbpfLJrsJqVs9ENiW1W4F3vY3aAYhvAePJuUaAemN",
  "key4": "w1f4Awc4xr3hD9Jt6bbHNejR5ykgoyHfNAL9Lkz17gCzMFLBacyd1WCqU38FnVU72W6sKT1USTFucpa5A4gwTUw",
  "key5": "244FLXWBKU4FLjsAkfeEG3t58oUebRwb4xTBWb342DQsVda2DcXwKa5VgWXx5KqPhq4Vnxpx6Cxa2XBpuT7c4Nzo",
  "key6": "5bTFKzvAqFFxTqAkwH9rF88n9uibVd9pHXBW9QjkWo89cVvyEwWLFHn4iAWPJiJmBCkA5HPVVrWSwVqs3rJqj6NA",
  "key7": "45oVzaCkoWvBXHHAiaok6fYaHA1tkwRLmesmXBt4B4WHrz1SMx7F7zkJuhyEtuZDA4acone9K3aSWNZwgTMgejJs",
  "key8": "42bQenHR7AdBAnUUXfGeH2iyncmPQKNYrfXbpSH8yoqf6RTX4AmNVwDtfcjtfuWxtqS1KmoVXzPRyLwgQX7MMJch",
  "key9": "3pmDw91XkFWAqBB9X1uxPUkKshTwA5zeY22JiBoFs4NeJz1pWB1ikRw6rYo7A8VcDF3yGn2tGhRvfPvdAeehBaCA",
  "key10": "Ham9pLepy4SP1LkvicwUF9YtctS93mEZZaviVGGGnVDQyUsyEtWEEjShtJrLDCGhrw8VCnSepzCCiCiLCZWb6qU",
  "key11": "2MhvD61LnWCjPQD4ouUKRfzxRutAko6snh1Kw6WKZZQxrufBFCwFwE1VAUUeVWhURqxxwnb28cz8fCASJDyU4BPq",
  "key12": "5KJh7tnBNNV9XPYFqG88YdwswkGNMX6ivUHyi7cv6csuDHJCUgbbZUzbW8vgv7cEW2vGfGztzc3EQkXx6JBr4PXj",
  "key13": "5eUaXE76FE63yqDexMNjTjDimboUtQR6eaBttqV8ADiuT6xorYx6Yr46VPNjqzBQDzhGvf2QkHngdgdzHqwhBtJ",
  "key14": "4Q89iRxm571Kd2tyGs2UhMknNXaEzBUvpG95rh4DYiwF7Tb492RYNbLjMgJzp8WTy1uFssLtzLa4REecd3d2RdLk",
  "key15": "Np3Kn9gkJgBfQUNyzWTgu2ScaFRCnKibxdxBZRZ6Bg6neX9ipSbs7mG5XEenkBBX8k8XnyHBPkW5wDHHnhEDmBm",
  "key16": "53oJqK2UrY3UKASngFQcSxutG7sj5ycvirf7Z5pfys4pDevyhvoWDRvEKtpT581LvYk488pykozTJj25VH2wdPmH",
  "key17": "2ozdbNQYsJgcVS2a859VKP2dzkfznyv4JmdXdcRA4seBvTxtE2XMnurmMgRX8oujnBBrhooeBKpiiVf6N92FwLcj",
  "key18": "4dxVLYikxMzctBYGXbFEQ6P3gY77nKU3jG78oNAr66aAWweUALV7dUEqr981rXnjpwJS2WbwDHzXSbgTnhWmaCb6",
  "key19": "3XSUXWqD8D4unRv12HzRDSdwE7PoDtwajb3XHp3NSaJdcC8EpVh6wWgopnC3DSwXGPzSaqcDcToNQw6165wJjDbS",
  "key20": "5tndS2YCTx58afM1qJQpFCc8efewsZEmtuwCodhDDRSLvRoyLpp3yuGiGbhVaQAYy7wpDD9rgZhZbdf2qWDKTUGA",
  "key21": "4HzUDb34i4NvUxgeX2cAq6JZT9ZEqjnjkV9ytRrAkUHbY3HRALyBh68xfhjaPRKBN3srLaopCdYPX4zfzV7JUJ6j",
  "key22": "23dWnMHwrVv9KuCLE3sAvv2tYyXKoyHdAV7TZdvz3eLxG1Rz7eHskmr1zVEacNbtHmP7WwCNwyyVwQ9SqJG3pidK",
  "key23": "ZehFS7H2Pvv4T3qzatARKs5Ge8PufbHqDQVMaGXXzgZ16C5ZrExSeDPrcm3GQ5LjbJzri7EbqfF1PbR1KTwauSE",
  "key24": "5KUUGzqcfVumaDsJqAkTVLFRxd7N8oPngcxCz9VkWHyFjbxkb9k3de3D9dFGCxqxm3sCfXy4zFvQfS6kFkiWtXkM",
  "key25": "37CBQfeEfZ6xQtT4xycqQcirf1RcczBtzMbCXEH6J4243xPkUnrrdyf59emeMKSMtmEehEw8eqpR5sVFfAwVw9Md",
  "key26": "2WsCxQzDQP275Bp2ypqNLBYKQRaoFZBqddR3sHnM8P9ZsYu3BwbMPeAre6qmmfw7vT7C1MFYpVLyLPXKcd2CR6U2",
  "key27": "5shniKtmp8A1CNiaeUyaZHW3CnFaUrFZh1VuAHiiLR18ZArYGbrgQVLnM4mXzQsqCus5ZoeotPRrtNfP6CCqJFxg"
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
