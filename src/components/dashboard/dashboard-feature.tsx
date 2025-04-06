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
    "3uom9KSPfaNnd2Lq2gG2aomEYhxYpSY5Q8EA1UKVmQVZtryDdRihgKDBkHeu28WDAYg222PZrBN2sGMRkHGPNecV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSPzJ3HXz3isS69VcffxCruvpdm6xqyd4rg7fBGMqEJP3gYnQedWZYTk7HJJvNNFq4g5yTBwAi5waS7WYyWEExo",
  "key1": "3oconagyKYL6XXPjBq8zXXdL87HAPJ9dWMz5Ug2QCXPJDbWvd5NkCRVnsZKFSyqDhZBFvUJGQRdBcfAUgm5L14AX",
  "key2": "3A1qW4R13PcsPd7n65uTxVZTEDqiCNBBEtt67j1LATcETvhLFdy9VTUtT7NHQ33gCZCRabaJW1oetfMg3ykVH6SY",
  "key3": "43wTtMxHBAKqkvvAvBtarw6aa5fLchVwGCc7jb55yLcNhWTRvqrncfjJP2ZfeBZYH1XR9rWGbD7BeRttN7QxBRq4",
  "key4": "4CXCHXWH3yqZdGQWiirPCygKgVguBtXaFMTy3fQtzEGtYMAXHM1RMfnGQRgopddNEfUkC2LV7b5n2JLYUxcEQmLq",
  "key5": "nL5V5M2VV2V1SVSV6rh54fSw1ZYPDYjupYTDLSkEMuMxx3Cvs7uwf5bQzeZN1V1SUoSmKQmw3dDEvrQGJvR5EFL",
  "key6": "35rpvFKgkYDR7h4BZ3Nay4xr8TVPot3C1PD7NNzJsinFE5BKf397TqNkjy1J8vCpfWHwiaF8Wk25G2uQBTH2BERZ",
  "key7": "4MDzHySfBEyBhZ4yiuE8XxzgQ7t1yVRU2zg1VBPgS5VNjoAE3V4Wowj4ZdqufSh6QBShmYWkMu8aH1gdBcrX8DzG",
  "key8": "appUGEfMc6zvdv2C4mfBicqW6B1pzESYSSDCof3r92LxRv7aA4qeYaZdHQzMsU5d5pcgEWAuncchkW2GfsMpgbE",
  "key9": "2m9gt6SGGkSH7imvKdi8yegBcAhh524rKSpGxjGfHW9R8wVyeVP3MZsY3sLFA3LztSPY4z8FSgB2ckzMGGHZmjeJ",
  "key10": "594H3VWYQ7GwyQvpdSpyuZt2wzSxP6NzfmAWAaur8e2qDwnSPt6pZsvoLzSMGbCq8goLAQN6BnBJGhcQqyv7DJs8",
  "key11": "3YzWHJ4zoa8gsF2AyhagBBs5XwZ5CZWFNCen7GcQmmJurnXqs2P2XgzmmwrbeBeRZ8GJkmeBWrfnGUpn18RpV8JG",
  "key12": "GtEdBPD4ZFNoocAfXVbsPd7d1wGGsVn6oc23BCAMpNH9ucuccLCK4fwXWFfu39fWMTKA9MDbBCD7f147TSYFSV8",
  "key13": "2kJrY6ie9VZP8UBwLv9ociBE7rWhqFPCzLUWgUpfX8b4u7zLqv4DevjnV4xs7YGbHWHygFszUez9Y3EBKGLfBDtB",
  "key14": "aLXwoCoRXfzeayekXERN94uymSuC2JeQyYdFYxx8UXP3KYms6x5xPFfTce9mcK58bs9tDA9e7Gwmc2CQtJ8aSi6",
  "key15": "3tV98YEHjrEEDFFAyadKjcWv4FZSVMrMkYe8QJ9nN3A57vYuHr85KykZrVxM2P9C9Xh5PDEabANjkX36NWPeP1rt",
  "key16": "4PKVewvPNftEVLBTvhAN2hS2VCtJCd2YoNGrWzGAuVf17NChLPyyEGoH3hGM9Z36LSYwBqNv1GZwCznbstnjZ7aU",
  "key17": "4ruM6rHnih1rHpefrxXbHvhbywbptCap7KCVkcm1ZKCXCmdy3L1qrU4sw4ZBdvLzWXunp3kBUaXKkYL2JvRy8g5",
  "key18": "4DqeoNYYGziGEXGg1d7G7Grvf6v4e4r4k338bVmAgx66bDyDaYjthXymaNUicejjwxnjk9yjoVxfxULrSWY4hbxU",
  "key19": "5X5tUuCfc6NThc8Av1vfWpyZwG1nqaW4NonGjfN6VQNEvQNchaHLHrzD599FV5cfRyaZtFXEhxZoM28oLaNDPG3J",
  "key20": "4mH7PucFU5aaL1kTQ6REAP5u43kXven3daeaxReW8z3mHDCkYvLWfVpW6qt1toW5FSaSAnpvsseRxwkSCJGTJMqG",
  "key21": "tc8omHWccxMSxxY1WDrByo6oPct8rEhFNgUSW1etY3q6vaqV6VdEh54nPGXA1m1EbFJpoJLGMuzfHekFw6cgpXL",
  "key22": "2MetTWnzmsuQbEbVj49vBnp18drXvu5igewVcKS1W41AvQjENXaQzjHMN3UUNPjXkH4tdQVwusJ9iWyRyD3uXXEh",
  "key23": "2A2RNxvgJ8EYcRxKUbZPXFiE6Fc1QLnr6T331RG2q3dyDC7Ud6Wwa9NPQYFfpdTxVHU7QAHgVo8aeMLGyrWN3tte",
  "key24": "2RopTeqjFxdXzpoX5DuyuEDD6xgmw5QusM3D7wT6KAXn9wXXLsneznd7y3g3AHpuaAEsxrH6TU2pRy7YVa8uvwLa",
  "key25": "2Bnf9X2rSvNaLh1bAGG4XbTw9Hev4HPfeUnZQMspYh17w3ayNBS1WxcN7GQS4kmiSpXScNm8L2UuizUJY1KrnCd2",
  "key26": "2AZ8PcFnTnVS3VzCU6c7mZGSQ2uDYcHkk4cFJQLFY1TCX9TprFw7ASiWqvWbCkUhxvrn9Vex2mSCy865csuADZaB",
  "key27": "5r2iB8eZ5DaZHuMg4do8yxVcLbPAJsW7oahSQJgSaRMiXCGxg6Mf3ssCt6G2w4xdRnagb2DqAgUXWVEV3CanvC6b",
  "key28": "4hGKJL1VJ2diVRuKdL1h1D1kTL8f5yFbgxmy1XgxzDGHNMn4cxTPEaC1PftMdAvZ9Q9x3xWRS56xRu3bKWrWGPvL",
  "key29": "5G2ndpc5poQwn6uVC8YqneGjWvxyAyBZiWCwaguUTiDghmKeNaQpsy3Xsb8yKExNnXFtueUDqS1xzk6Q2hySwQSA",
  "key30": "HFpmJyyd9WaehiqS2igGGjqERUiQCnHE6s1WJA9kfqTiuGGkgHEaLXd4oN6Mj7sPkrZTpTmn7YSwiHuitqYbcQz",
  "key31": "27Ae1sB3YbLkgZFQBuR2rqKMTHRRFUcKVjD2D64okPRRHEVjyqXbTLCXfthQyLGDAigSxvoYQfYUhQhggZqyXjgE",
  "key32": "h8HD9ArwMb113UgpfUyan5zMBcv28TFjRRTCY37j7juy5hdwTzrxYYZy5X1GGi1TiNKsos46cMDH3rEpPHAMcyo",
  "key33": "24k5ZeNZJdXmDD1Gm9Nh4Gi4SLL6W5tDVh1P4UWEwbhXDLrEQPAS8cVqXpXeGTrFsrt6Mh9yrBXtmcoSo4p6hvi3",
  "key34": "3dtATfZVFax47drEssHpR2K6KZQULvPbfUhNsrkZcPnhpWNLtFenhgcX32ogNDNsqSCLFEmJZTe55vrCsgqTUWVA",
  "key35": "28pW2dcDHPuVj7mrTcg8drN43D6tcKs9RwXpfuVjPm81jQpaoLF2CdSkRhxRGwz3WVkd9vJ1Git5zDkmSY1vbARw",
  "key36": "2BF2QLcV6yzGHcwyaJvvTP4mwb5EW67jhev64cmCfB3RmzpP2W4EdMfNbtp4hnRhs7TQJbch78oKjhzv8AEyH7oo",
  "key37": "2Dh6HLzrL7muznFkifdnd1CEqA5WFdZuCnhpPakhBoSCGtUmuzWEzTgoWcF6igvEEvvtYQzJpVM7gmYCibv9o55H",
  "key38": "62svfFYAx26vJbYaKJ5g9DyRVXhrziMcjXE4TnhxzvqTFf6KV2jWpB4HapV2Ti97EWfgvsx35xd4s5oochteqjqV",
  "key39": "3seM2yZAQ9gQDpGHKE3n2mfomBbxyUWmqBYF64rmSCtAErjAxpm3sbwwj1dgmY1kq5m9BrhXfsA3ey7CRxLRNZGo",
  "key40": "DDc3FtBtAqZYJnHUHtQg1BxWq5AcbmBXex4UrWTrZAaDirrq2BzAVmKooLsVzh6KMMn9MwYHGf8JTu6Ykf2tTTj"
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
