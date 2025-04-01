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
    "ub7yw6C9tAeNyqMUdtTK1rqxNpp7ZsPAoezBNtCCr8arghdyVkAJchxppDy6YxjdxEG92RtBGDzQ9mRcYNmx395"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xmjhZf8KG9BWZvac8G7C53ZB8Ha8gb6zJiqEvWEHHUdSfSBRoRJtfwZe7kuB9PpPSCF116xo5JYJ6RYzgNybGgf",
  "key1": "qUN4BjAfrNJzkMXgiaNKLapx7tfbDVzStquVCJtELAJTK6FjxLM1TFxzDyQqWmZQGjf6RefuGfG1gHVyin19ur6",
  "key2": "HFoGEMDxwyv88vkLiBoB73GbWgVAZebbvE9qh9K4Mi3q2LR1LBs7ect58pHvySMheUJQdS6gr7rgbxfH5J2f5U2",
  "key3": "4Xua3sBQHGzWhRimfrhuc4sUFHxjbYhoMyrE5xvwq5m5C9oy58ztfxiwL6mhzvZpzaSp7u5ioysP65zT14AuPgYR",
  "key4": "36Z5sZy3qK37tkP3tjp1Haw9odo8hBPMRm4ShxHqwxkrBfkv14PbSV22FyX5XWTNPz1SHsk5KiVyTqb7FvgsGyMt",
  "key5": "38M1kcX5Ls59BHxigsm3WUw3vVRfQwATKMb3EDQctz4DTFTaJiquuTMweJbejuNRWpKcfpZgBPEAUvPFaPi1B9TM",
  "key6": "2fqtZ7bwcwAU7KUEnY4njSX6Uw1VjYgHVUuo79pBQrpRzY2mfYt9xVL3HsqokWUyXnhFMyWBieNEYfABPW2XtS3Q",
  "key7": "dPxWY2VDktQNP2XkwDYbHMxDqANqaPHDbeNZEf2N6SjyLAJ3xH6TGJYpmrvBUskVnQxs2JW5qah12kevYYPxxUx",
  "key8": "2EtsR42pnfURyACNKoGGZKM18gAn8ZeZFGjXVXMjxJK4gebYC4hUmPR3jMBwT3gn6uPsuQUXGvs57iDmvmCYJ4v5",
  "key9": "5waofhuoV86JeXy4okbnMZcDGxHN9ZJs8D8NEcQuc9brnsrMe4ZMWX6hL5btGG9tQLjmsKkMMckaaVk9mfrk5k1k",
  "key10": "4AFthV1XLgRbfDhkfTgEBKtYfbo8cVwsRuQnAnBwL8sR4FBLhUc5xGpMLCrP9fi4TgaMXVK38C5GDGqXnKaX2TJa",
  "key11": "5ocrKR9kK5fAG9gNZGKZFe9GWYWXPT4fVJ1xwxVnz4mehSHzdFHnKr9YzJh5woXZ4XqiUif3SYntAcjtUSth9HAL",
  "key12": "2iZHirAJ9g5q9ttHg46WvvqbfejqCKVnBh8Tzof97SHW83XoGYXSbQYR3Q3f6jGfQSdwNLDPXxj46znG2XPsHrwu",
  "key13": "t1AVvyBcNGSCVTerrfnYRM9XmJFSwuL7dmLjWSca6FM7ojvgmSAcRWu7xoXxg2ypHWMUcqJzm83q2QedmdVMgjJ",
  "key14": "4QrnSyiF9QMAx7ZWwRjCubjFRm5Jo8qe84FFDH8pLWvR39omZrnMgF29i9gujTZJWLXfT3M1oYwsSadfh2bdrdqJ",
  "key15": "3CUKtYnuSoiS5yoAEa192kGqGyaXMX5cs7yMnNbruN9soPMExTmoAbGH17LbYkwqyHqpp8HL87J1Lai4zmJgm4fo",
  "key16": "4xEgcNmLst3UduGWBUAuzGAxzPfKnMda2NjiApy9pSx4o8pADMgEX4MFr4e7UKD1ccvccSsm53dGt39asGyW9jrZ",
  "key17": "43NriWj39yN5T5ugXtpR1DCAWTZn21tbSUABMSmEAuqJANmjJQv7nC61zGUtAca8w6vGNtGC3iLVVXmraQ8tDoae",
  "key18": "5TCnAVFHRFWQnucLjcPpaXZ7arTNEgfLvE1AhKt5MmARKRKySLbbLkBBhhYxZ6mj57kPb5nfH8GPA6wG1Cshm6US",
  "key19": "TqJVyP3j6Yc2L4EoLhA32ntidWw43XWAgT7q5TkPVaFVmYFYKB2WaeLpFxuzHFBGzCpsRP3q7WHGuSAaSTeYhHq",
  "key20": "4T3q7hnN16mCdkXrL7jgRNtJbfGKv5toR3MXaaQqMGekjnTKe3nJYFEsosyBARBX9LZTWiKcHMWY9BK8g487Hd3b",
  "key21": "2HpLLtLyXqqTZKFhSeGd2vc4yt4Sxh6prCC5VfbeXRgLGgHo3LGjjCnr2AoDSvUVTDx22WF1ehBhuLzepc9vcqV1",
  "key22": "4Py9XoC9yawY5upk4kZ8WBnZsLdaQ4s6cqckoorjoRHQxn8RmDaWCSyVf4APAGEg7CXNJcQSxV9qVa7dQZcFfFXB",
  "key23": "2KkTqMk1u1wCVXBJLuGbQuN2CjvMqMUsFDozYZcf1MkHQbnxRxUEednsybgQLBws1FB4NHbNUntRA9x2MgqaTT3Z",
  "key24": "3aa4TEABhLBHozdV2ksXNziuHs1aybgYxvJFADB83Ha1yukQHdH9ziaoEidTxW7rawpWMdZyLXHMUJCm8JQETUSL",
  "key25": "3fM37BkLFEyRkAX1x4Czimx1uwiXY8QQJwDa8zHsuMVMu5AAWuKzuL8JN6QUByaT7v7RKX6Gn7UzMqGcgQPVoQnc",
  "key26": "Enu5fkAMKwDYV2VHEQ4gR2XsJuXaQdEaVq2bcRoJekdax7q4oFRSCTDmhnrK32ySvTLbSgu2nyYf7qbFuL3b1ZG",
  "key27": "2Z1Lfe5vouFrZeqh57kX6jSLb8Yy9gFaN8pYBHGWcXg8J3XWCSHtjeQU5E8vqWuCj78LyW54BZEvmLvuXydZEuG",
  "key28": "oxYpdzQJuLCSXrz4vpUsyvYjN2DtsbjTVvTtovsThopFEfKN5fvkdcpTMwWokJkSZQrjWHsL5mieHwK1EHv2suP",
  "key29": "doZeQ8iXxKTyP7aW6x83iyFbiFDbCrQ4ut1MqiWJ8BroSnsq1jub6YnKD395NGBA5BPo4vCNamT8Cr2jXurG1r5",
  "key30": "3QBavcvXRBSj9DotszH1woN1h8TJ7Z4VmuHreQD37A8KQcbQaBg9Kt97y3rcZuY3sUzBkFiXeiNYXMgbaKaqxShz",
  "key31": "41ATB7J9tU8i7JhT75s9gk7YjxY1PxA6LuDXgGWKZP45FUQLUH3Eyx29tHGpnziBxePDuLfK5iE8nsReh76Vay3o",
  "key32": "5BokJujRYYJhJJWkagzxuAKvg5c7wu4LXfkShEDmDrC1wAMVCi8kgSXgv1kmvQzULUwmP3a8CS8X2yMXswNsjzPB",
  "key33": "2sFxbkvCf73aguPGyiC4zR6nh2WhusNDJ5mfk2SmiqkdeqzY6h1WZiwTn7Tffxgg3NRJxuaTp9UGDABLKQmAEXTP"
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
