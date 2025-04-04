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
    "4oV6aowjxfESHSNACyA4rJdHYzu9dUGLNtK2J8XjUx1mTwqsTzyVvncyqCuwcis13RLg6B4BxqKHpmWziVxk8bKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJujkjpmcKGGHdesUsMda7Lnt34t5nfG5evnU9DYe2pcukTn8Hi55gPgrfdZKCaJE5SjWS8EfE98SVicaQ7kBDE",
  "key1": "5NYajqFF49tUP6sJ3pkEKYMVcQrKxuHccws2Aafb51zaKLhvrRRjb2wFGjw3sW5Km6PEz3eXW4YqXgryKsM1ngyD",
  "key2": "4sgbsdF9AV5VkQPJ8tnYDftVgwEogJz3f5s6fG8X51meqt8iREo2szaC5XKWf8xQfQcof2qL33CQm43EdHrHmKqk",
  "key3": "2XmaubAiZuJBCwBZx5Lxqz7JfrPssM4P5UN4feK1mFe7oez2tEtFSBvvkLzNLSe4mepEYbBWAc82CbGYhYo3PiVj",
  "key4": "5hp6oAQno7Y8E6WX1pzqMmpB7GTaACbWR4uzaYTN4ZLcTR7ARFiZHh87hnAdGcYm6AmfAe44PfamAesVze73Tywc",
  "key5": "5PZohcMC2MbccmvyJBGq9BYg8T1eihiVFRjHXYarxTA3vFw6yTzC1owikCcui5idAkJgBC32zmtm43F2XkfMUArG",
  "key6": "5fYEP29HgVS6Wev6vGpTzSo6SqtrVX9YNooXiUqMMGvM6TfGjhgZeQEuSPwWtzgcvbJiV4uXYUDawPdYaaphKhzf",
  "key7": "24KjMow8ACAAasEzbS28NUz5j54EDs9YtbqXP2vNAh1EhUZPNXJTuNUbHkjxs4Qs1GXxkximM4FHhuhs7doivtrs",
  "key8": "5QWoaQuxM8Ve79bKK1ames9fb5iyFM2rpPk6gkc4wusLGQeE3YoCNoLwZFMt3XnJajetQt3SqBvWJKXM7ftK6kAB",
  "key9": "2CypWRmryXCEWPbtoSDub2VbgCQS6a2umkjzpmDGJSraiSijnAPkBoUaymGRWagQuFUtgDwSJLUcSXPJyQdfFs18",
  "key10": "591iwyFGWAMELAUUvyxccBD9u1HZfotcAv3SWEfjLEzkWZ1YUPVvTCA2hGk7EwTJXVMVyPwQEaYs2vmae7bZTo7s",
  "key11": "2BPMdun2yTmwQZqBMgU68y6HUXw1fctoZtZPTeKggLWe6TRbpCu3VQQGijL6kNau8RUtZC1K27T2JKKgj7GKn13P",
  "key12": "5Et3Diez5XAzScsaPxyBLNWZM1fWM16mwgCWAsAtSsgXSh6a1G7XmdQhEPGjwcUa34aYtCFNdFGBmRW5UNqBhjMC",
  "key13": "3uvKm8kKeQ9nPAnoqRkfTr8QmwbhL1hLDcurQuQg1kRnfGLNNyH4mThZG3HdTKp6cBwkAzFNcaHpeHeLSAJZEbFJ",
  "key14": "231mrByb27mFSSxkwN9gCxYinz5YoXKZVsP4e7srnKZcbUVmd7a2Eo5PqdCmavjN32dCkznvp1bCdSiqQxYJbbRf",
  "key15": "2oGyGuZUTfpTCzxkudgs3V6Ecs6PtdumeopJiSpAVf7WLZzEwtATSGHoUGNP5p7jmq7WWmiMiFxVU2S1YcMgoc5Q",
  "key16": "rGEYSzf4VEHfsytyb2xVBqAosS5h8jZkdVLqo8F2QGy1FyLoxxEYxauRsK5tnvBq1U7ZyRE8hpqaZXYAT2M6xQn",
  "key17": "HzZekq7zk6h5KcGUdqX2sSqPx68FxfEEdjzTF2E6bJSzcH9k9J3cQVfpKsfyTKVRmkQz1ARze7mtRTox7bEAnzF",
  "key18": "3Vr4FzzC41zPbFCzRqbebP1TS9sKUnjFgkc9faMxrmwtHKG3J1Quv1WrETyVXY1t2qzsepmzSgjpxCF3Z8nTsxEv",
  "key19": "jUuch9tsfpQiR12KXmtyVFibDQ9t6zoznuf6A98UAscJnLoFBRJ1Kj9R1QKNLrZBdDWH5yWWHRJwwsz2vbM6yqa",
  "key20": "3dGwaDvzdkukUeFkAtTi4VcqKMg2J5hxzqJU1oiNUtN4iRC9DGjzPVPjkvR6PfRppnV7v2S9p6AL2RyGdrzcLsD9",
  "key21": "2ntccU5A2jp9dpGFqCZkBP1ZmwRor2hXkb6PUMdFRSn2Fecuy2a43gjDFQUd4scsQYfpP2D96PkFM7zPeVnKw5Xd",
  "key22": "5E7qk8dCmeQ99X8dLcHB5Jj4TNzx9ZkFkTA7NnBxzs2ZRhzos5VnpBmakWe1VKPUCrCXYkjy6oZwzvzte2B3B2Ea",
  "key23": "3WfzgymktHByBZyZxvackpo9FAVcTYpzHZtMnmEsJArPYmcqsq1gmdyGwcydvir26qHzBNJmqksv7ZMVV8XMmAg1",
  "key24": "2iNDpkykrPwumVJzaPFP4H12MavTDUJvfreGE2mK7zhvAcqpsypbmVWAsGizWtEP5f6VptYE2D5eHNBJtNF76q7t",
  "key25": "2JHP5YFZzoxJvGZ3fTaLEyQAqQggthhwTpxP3ney6quHq7f1VNDsUnTrwtwzy9zmb8j8gFt8ZqTeBckVauPVHqei",
  "key26": "2feGmgnkuLZkTUohEkVcLyMkAFNYkmvky87zbmrkVEJdVavuo2Bt1j4fUYNPd3eKdo4X4Sqqkke6rT1Z2hsDwurp",
  "key27": "4LYLUTRPEeSrCQVx6DGhDjLQDgtAZ86gyhqVkt5XT2pnoRNXF6Rhm9tj9Mc5C1THNE8per9zrBKatnvdocQ8Y2RU",
  "key28": "3Lnq14pGBgSxcAHXb9pbhQo33p4UUVvVoVJBi9sZCU6hq5YDtDf8dPmD62YHmruSBKtUn68JRvZ2BRKTbv3i7cw3",
  "key29": "27kaNfWsfq9T1Zrbyh9a9tb8csxQ7VYTjAJpj87rAmiNPnYtCfpMWSVYydT6sH2dLLzqR672EgvCGXfEuBLAwEYH",
  "key30": "448ZByR8W9UKcAU4D3nnJAfxsbpUQhz2cvxhCYrjxYZFprHDkgwTQaVv32P9HMnTTbvwmG2BQvTjJa6VVDXdnWVU",
  "key31": "2Zb6d9L5s8nQwKUQZQp1bHjAAzMMonuL7XHZNvxPXRe5jrbV7sSDfnXTWsXreRM3FkoSYHW1RQrmkb14BmBsfRkp",
  "key32": "FWxvi9WogQrwLAf9BeSKc1YLEmMxx4LuQaqPC8UuzyzT4aDjSUMq8PDebxVLU6CUuqiymKMEugDtwf6a8MsqLXC",
  "key33": "3gYx5N4dejo2TyWQ17XSSmKtpPWbnjMtdSBQrLZJSZpyHf6ffaUsbPi8QDJDuzH8jWB1AGAm2GE2qBXQEVA4RxTL",
  "key34": "2YkyJPZT7WdPmNx9jVRRhqWX7yCtxvGZqueTtA74Qa3Qa38s6y1pzHS67fwTzZb4tTrwSgEXjjZ8he9WsFHowJSp",
  "key35": "2VAdT1xFmmDDaqBudWYpKHLabny4bZsrHyfmhFiawaCZqQHPQn9SA8vmSpx3DjasB7VZuVLBMXpPraVitWd9YHw2",
  "key36": "2qH4NRi4ynLRecmvnL37uCzjVAzshQepkt7Uek9NWzj5Ceo5XQKaaCotxyG5E4uX3rhen54epcbEfx8FDJ3matYZ",
  "key37": "3AUATi4TQGtnTWAYggVo1BaCc1wXNfLqTrqWb4q9HiAVwTSVtbPfpTFKmWf2fuAhi7KWHgdgNyprQNBSXqCmN2bo",
  "key38": "5xTJd6y5VxsFhPHZTYEZJ8SMyCr3J8Ucsb4pL1VjEfBYafPhKUfWmgeoHzRY6uG9LNyW5PhDW4koJ94odLVFMsQC",
  "key39": "5sbCXYqoQ8bP6dXqiL5nsjAxYnovaKjrjQz7mePZoAyRFqpvmwNrVrDNohJZACRiiHrqR98jVTk2a6xk4jic3ino",
  "key40": "2vrUqycxmREEkEoQPGXPkNuf1iFpp1RBzW32nFDcAzyip8Zu9BnU7qSLMSxtT6iKFRGd3qmjWSpLtHKthv8Sohgm",
  "key41": "2mB1CCzKAQU3oZLZnk2YnvFWTxYJAYgL19CJdKW4toGezNJ3TYJin2E17jDHEoVhMv9kAoMeWM8CWaRjp262id6S"
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
