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
    "5DEWB5EiXs5AbPEBrEoduqM1KrehcKh9Q4jSFkJEeydUohbkkg2PgF6nZJUpqt4kENrqB4ZTMpXrYwLWZTRk9LTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rf8yisEuSUZbBUYTebEqHRmqwwaSVecmGTr22VVBo8ZXi6JBfHE1iPNTFrYB9kGTgTMaHAmjrxYs3vT6hZtV89P",
  "key1": "4TZ2w4aLbm8JaMGR5HhNDE7gHCK9FdSNxYN4pbTpT8YCZS8ZReDRNXsRL7tGEspS7P4CSCLe33YrNkpA1Z8kYMAU",
  "key2": "2Lt9rNUe4jzwzhwPYXbgiEpBaiHddS6r2cGd3m5pXKXxUScUsjLWidE4ESHs49XpdDhnbpjBPVWKCVUsMAKkzd2U",
  "key3": "NftrLtt4TEaQysBo1cb6VXjvFM9SSJUL5g3aFi6Qrsgu4cJHZ68NXv7Z1jF3dhM34j8kbuUoDbj8wtRKAa1Qqiw",
  "key4": "4hbFFN4FVGcbtTf2ri5T7BatTgWEBsWVaVE1WnyJPLRPNtuodqsFq5HN7bgf46dK5Jr1eqRjCDYN65jSbBSF7zq5",
  "key5": "2V8URuRJSvvBieaMD8YmQAinMkJBBCmYxELJ1ZCJYpdzV3eUPzrAQZ3De3PtugmAmjsHdx7aZJdyF7h7BeQiAY6e",
  "key6": "2gd9jgqUxAoSkoAWkANVYZqcLCmhjGh8TwHbkGFcy9F7wKntN7cnDkVRKigApJwRpd1UsmYxgx14MEqi8nfC2RYw",
  "key7": "5EprtrJ2rQYTuQW7zJZBBJfyV4SdRJoeKtGL6KkGWTjaDdngygUE7VNVtX5dY2fftdFSnSdFQPp2ZNiu2xpuLMR2",
  "key8": "wrJppvYfU8kUFbqh5bdugZW7fAo6gyHbQHr6E7neYLYWEyTQNmMqZzovsrfupXrFL4SDf8tzRv5yExtYpEDMY8D",
  "key9": "3SFo9vpmaCMYMUaJmMr5tD6QES7okJDxtNqzwTtp5jZd8c4WSjLNa2HGuiA3ok86oDTKKngbkME7XDYsnARPiT9i",
  "key10": "3uQNLkYSSRXr5THm1UEZ2pDL26yumrGqLNU9qgym5NSaor7jbq8V7HhU3oSQZJBnTqHnFs9A5t9zWbvVw9wTnDXL",
  "key11": "4gzSQx8wTshPy4v8ZjkYL77HVvzSEWMdkXWPRyFn692Gta7zy7mkGGLQopz4Nt83ZTaNyJ2Y9Sqe5YuQTxZERRLk",
  "key12": "3LGkLm1ePsoyPf2UPBh5eAZpqpnxZ6GrwwjcMo93i2kHVP8vrX15uqrZLCsX7JK6ResgjTKARru25gvBt3dUr245",
  "key13": "UnYLQjgFXSDYgxtSExLtvaBF4U2bngr8yX792bEk1HLdy4qa58PpMkw4deo3PWEnYAeQxWwFinZNJ3m6LvugKon",
  "key14": "5xf2mCzccBXm9yX4zVU96caPzbt631AHYCgQ4vxx3mijJ5Q9BzQaS4weGErEByPoPcupF1DM7sx5nFkhsRYyTr1C",
  "key15": "4BUiuSNM9UL4jz8AZSft65ipJGZyksG3WE8eh1shPG51khBShHx6ubQaipH65KJyvMVjTKMRD3BwqCuQcViKxQF8",
  "key16": "2fapjME8p6TaRPFFaAqPtZqKB5EjJQCA47BwsvtXjRBiuocjne5yHppKCVH2iQwWciK3o4MVkPth5bGrAoob7TdP",
  "key17": "3NNziVbvrWo4KHbbXufoHMcEoFrakGbKRAN7DwZRdmSXgioEzfYiEoGkvyBdhkVWA4xfEVYcCcNcukDSTby55hYm",
  "key18": "XhD8isENFpXL2awGLrRX67vYZdNx7Sw3DGJ6ACNQkyuHQ7eo3eSAa27R5Li1vGk4frodJEVTc2NmakRkkR7d361",
  "key19": "3E2KE92fvUEvDQQkGEGLKq51UgprtnXxHcRTETTchSEHEHgzShzNd9LpH1Sx7JpKrwLtNuJASytte3nEYA8qMcoK",
  "key20": "4vkFDtsTeYNMD4ghFTABXu6nJgb5YHvfMpMD9SGQhYnxndQXmjpHnZw6RinpUGZdqWfuUQcVStnUit5qB9E2s6QK",
  "key21": "3x9t1eouC7xnQQtJ87fcFY2X4E1nTT5rT6oXEn5HtenF7YmV14ZZtCnEj5ZyaoAy9hVB1P4QnBDZQctQr5neRenr",
  "key22": "55rWZ4eDKvb3KzWTvb5pJLd1tenSztj8mGS2jKpstTJuBH1dfpwGgDmiAuDP4F2i7kPehq1uRmWxtCXjg59WRaSS",
  "key23": "2BxQmg885gHPfaahHVx1ZVZZcnXcLYTznGwq9AsxesUqx9Vuwr85D4WZzpXGjLGJTyqeEh4B6Gh67AFSH5AXxSp",
  "key24": "6291Mj7CKHiFNsq7pMniAVDvuBtkEHuP7Shgyrz2imUZJGG7Dsbbao8xtZVUgNDDanQUi2ufZjhC8prRfKk1DCCf",
  "key25": "5rRjqd8UCMd4WKtXxntnyTRpHpue8YzoNQ6fgvNzRsVGRKSbSSm51HduiDvFv7itBaWMZWRgdyCNLquHpxHJPQLF",
  "key26": "45UR2KmFqLCfrtjpHq7NyAiJkCnFzQG4bJqCfbT73J7xgnLnsWGZT6R53MLWZEM6YbSiDpEawy8ZszoBsBuS81xS",
  "key27": "2QEnBkgZGb5Nh4LXNnaieh7yQ28rivTtvWA9iRpaQqrKyNrrLNAvHsfdDSPQi9s5pWJAx4uEGihg7GDhhce1PQ18",
  "key28": "4ffTzUWFJmgqkqBat6zCzSMnAEPxtC3wvkYb1JiKuGJyK4TqLEnnF4rSdxpHfwspLmT3sGvaHidonCsuxXanjYt5",
  "key29": "38KtoETwviGGGWud2BpwX4jUamZskztx8xA7sW4WoNNCrmW49g2VDqJKjjTkWicFr74YvvXova5ekjdicaNPK9qt",
  "key30": "LsRyb1cxxDHawhk3Xbr9fwFGCRDMsLdz26PUf2HDAdtKmwLJRJWSheqJR5gJbdC7K4kwyqpvhTDa8oNgVEfzPxf",
  "key31": "LUVNmHHi5kYKz5nhpfmvoDUC9etBRcnZoQXawh4Juzw5MWy1sxaEFSaMSXszDQ7WvzDy2FdKhPuvvLgE7Tm3wp9",
  "key32": "3gtg1ie2hwkXqjS8XMh7Df6eWPhA25UqtGhA1fC31WRwps9YGvvyEZ8Fxpzmetvx1i51ESXhVY64bhWKdXzB2tzT",
  "key33": "5SgP1TP7AmcWfLZZMc62kj7VmRNJVifHSBG4p2WEs4kHiy1Y4Z1K2x3rS5ZBAstRXgRG7MnJKNS37XiMmg27b9QC",
  "key34": "45iMuoPa4inEGvsA8eaoiMXQ6A5wTdRMLcQBkLwr22KakkUagDz3FHo7sBMkSpyffQChEPtWBPzK8C1iwrRLQJaq",
  "key35": "ykV9uxGLjANFPwZVWKEBVNZTP92aB3X4u2qYKiXthdnMiHu4sLByWeSHBiraKHkuquHd3Luu3nvRiYniBHkUJEc",
  "key36": "627VHnygBh9bVVpbf548vLy85hDHRxtBVno34hZELRjuwvpESXc8ZeQ67V5NKWcnZzchb5RdLVq5vX9TdDB2Rv9d",
  "key37": "5wH2CHLhgQTUFRyzH9crbRhQDxyyv13AwxRTvhd8PZWUepkXmPF2zGnSsZapz5uLjsR913roZCB34ToUJRhUv5GG",
  "key38": "4K43sECj1iT2aZbpu4mM6o2Ha6RBYoXY3Tb6r8FoDUNgj1LGp5ae9GNwvCZdFiBAis5EVUKFnMdUZVV2wcL5b9Du",
  "key39": "5X1qgUMPTado4RKvfdVoVv4cCNbdJp2C6g5fECK8XyX367FDdbif5FVh36XyUmpu8M52uXFcCGAVT6mcydVzQzfC",
  "key40": "3SNwQ59A5iSEBryLWYnRMqtvdfoKx2pLJMEoPs4vFH51Tt6JQhFkVeF9UncHir14shEK3AGXQZrxLDD9pQtvV1TL"
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
