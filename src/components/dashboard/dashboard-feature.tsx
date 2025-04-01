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
    "4s5KB9JAh3Kw2crUxB4nQokDxhy8ytFJfic4FR71xxkvftJ21isb8wuMukbiuUEdKJMTV9KMjJ7YnBsBP2og9h1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tscws8NhdGoS3vrdaaL36Wi4jQs6fbHe4aUGzwger4pvp3Jvk4xw68F4sBKkQMevK5Ae7sWd1ow9ZHA6GN1rtq",
  "key1": "3DJ2uw15YHfGaoRsfDw31cyETkGZJ7qaLugudQPqFqh4xGycd2H9kPZZ32hLvDyVNgpA8J6VrSU9bHMQDwqHYNNC",
  "key2": "3xsyAXiq358FuqmzcHBqtda2q2Fxn3Ez5AQqaGTGNF28xMRzdpRgAW5HiBAwSrtGwjftFa33uyTePhW4hN4odvb3",
  "key3": "sCmHUjuffvSuNRDTGXXUu8QtCDyzk11zJbT1qq7hqekd5DmpH74n7vXbiyQEUXoGQeVaPC4TnjbYTJtcWt71ogc",
  "key4": "54nTXhfbVRH6qqDJiwfH6Qheaq3rjkStCyKUnRUtzCTCgJhZSjRMvi28QLy9dAYUY19LkFPEQscYeVPzmrTskm2b",
  "key5": "4YTe4QwJPrFjBf5SaQioUzsrpLELb1yLVzPG1E6cGa9UCFRQhzmeTUUFQd1QHNj2ThUL5iHMsNacdJvdKsqYvxBU",
  "key6": "5Y9My4xCPYuGfFSVShtqzyweg5CTZzeje3YTKTXomsCGgp4wccZxbMsR64vYn4HiPCpb2beQEzkKRNXzyGoQHxQD",
  "key7": "m8SutygrrtpKLFDx8mLNsrLRXCWuykjo67pca29ujtZSm5teXa9J35WvV6uerWCCP5938xY5MF2MnZvtbgmAtYe",
  "key8": "3hRiCNX88vzXZUDGaoaFhkyZCnZHKSFyc37XhkRFSJo7afvXzDu7urVKRiVfgMq5WpU8kZLSmai69nrMirmTvQJ6",
  "key9": "5Pmm6zGqG98upa8NwouECFSWM63d9WwUhGjdXr64xsh3aM1anvHiNeD4AiCfPBdJsaT96ZEJuPF3cju3PHo5iU8W",
  "key10": "4eoTmUAwmsni7A2NJTbQAXPCE6jikHSy5GkqsMNycS4ZzLK81jrJRJBQY7R6DmNMZXtriKdRVjVgQ1yQbLLNGQXK",
  "key11": "2cLvduLtYEn24bEM7FRb8KiKaggyTVKfaYswC4KrDREwbtjaqcZUR4MjWDyv8DowoMPi8ZdZSJuYMSs21LAYaDN",
  "key12": "5BxHr9X6JjiyuUghAXTqFZJUQPfPTFQ8CoRqmkLZS2Knhr8p3pAf8fnLartrr7xtDyXxeE315tUtqptLiKGVRoVW",
  "key13": "YwMyEDU4bD9pjYxFmeACy1Uyu6ZTiiNey15pKhzuqU2k9N7ZCbicxbm8L1hbypzg6kkLwDNVzVJ2182FFXSEeUi",
  "key14": "45wS47t6VK1f7RWSPLC5wDPrjfm3Ncs4MM8a91Wk6ZWQ61ouLiZKMYYtYEYyD3yGfx252SfDXnWGtyuL9ip5pNdg",
  "key15": "54w3HXwhvzpkZt23csFw5vCPQkJXPGSg9yFPUSvLQtfUBwjtFZGPo8LxpTsizD22jB8us9cXwJREeACDsQpDZiNj",
  "key16": "5o5MJQ76Cya1YCaeungPpAqg2uJuYLDpcaJVKgeQeZttkbzEdGkXMhSyJV1Fj5N46B85AgCbvWz2YEAV3N6c6VF",
  "key17": "2cJpES9kokuJDEff7wgM9tkUTQyv2co4rbg3j349iYj3Sanq5JnVK7Z2S73SppgV3EMdAkYCNkd1t12hwVQbPZez",
  "key18": "uT3Sekawgcy4sNzkkYhUVNc7LKN1Wo6GsbNoBtjVG1pS5z23psBqGG1wDTTjbzggr9rzNc4JWYtWWjgnXnodjxV",
  "key19": "3kFVtNvR9Q8194YqxVJ1YE2wnZdT4NhNhuWdphGjAAnmQ8nUx6CvjLXLAbhfkL3BZnYHfGZzzzFCFjarHFveoRtB",
  "key20": "2mDc8EpoHhWAyZoGuGYQwemwBpBNgJsgJz6ZgRXTbqoeLLQXrEMD3gsPKa8uByVLoPpQsKZ9SbfKMjXCBHC52WE3",
  "key21": "5yZ1P1Si6jWUmyNkGGtKx3249wCxSkQXgnwWv296Bgh2YD5XMA3yCbqTKceuF6yN545n1KCtvHSbrdsqGg55gQRF",
  "key22": "2tmx6D3LGpBF3Jb5thEjgdGfwRssiaxsfFDuv3q53A42jKKacvxxPperUWko3PVnTf2UcGs1M4MQuc6VrdahNtVr",
  "key23": "5VFXqnYA4cp77VTwpnc4hDAE9X5qxA6tJJQ9vPKxZECRrLppqwPJ1tNnafU4uRckxDoKNBzdDTwYgFmUCEfUEdHX",
  "key24": "RJ3JMnRewiFZLc63XiYMKs3DzDj3jA87ojtqPnRS8Ya5vxb2S3dRPa6a8j4F8PLMezkjmtV29rUnmMg2B5AGti3",
  "key25": "3niv36rmzysMgM7GqGCnHtsXSBG8fEVYsDS5XjxjzgXg1RHfQvMWELF5bHBXHYvSjBbJX3ftmPgDmkrCAqkNYKaQ",
  "key26": "5P64zjSuPstKjtVuz98rCZ5erbzvD2xdWY8bsYDJ4NwHBxi7NUStqUJhnafcqmGj3JSDEBvs4ZUMtZkTzpDp3k5c",
  "key27": "7TZc9yHJQkgJPsPp84fPmb3ewXxcyFnLckq458wZdWjuTNcgSJYbD8L8CnK2f82vbap9Y2btdRMgW2on9XpCQq6",
  "key28": "257sUtbm3dxNguwx3EtTgq6ApeDbowAK8yxmijGBWEdqrit7YS8WjrqsXG7xb67JbDxP6aKWQacYWGxgRXYUptRH"
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
