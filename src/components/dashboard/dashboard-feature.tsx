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
    "3uEPiSnMoaEVy1LYz7vpAQvAyFn3ePpbr8xXdEzU5daUcn8AXwmK9tnBJH14vWaaKBse7EwJXLny2x3F8iw6XTmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xgTe1wkNTybcHQkDByyQkm9WUg3DiqJyYRgmL13GyUufKHqFv2DiBPxJLJb9pi3DZ7ErtU257Hi66c6oN9T5i5",
  "key1": "kTqeyKLnMsmnMe6ziwv2eNhW96XiE3oH8hUegB6WSTPkeSRJu1QnJVmvksaj8W6EsMND4PNBmNJW6BTayVv2mPw",
  "key2": "58aonfwPxLzWo9rk4uKZv19Xst4knv96HxB7AiXSRumAxKJJARA63GjUp8mqUa1Bzi3Nmho4mXcufpecRcv7aML2",
  "key3": "bfZuUSioohpvnYLztsm7SzxffiYuQP2kiwRuAmAQono4amAWFazS3yZLvUXGMie7Qu5nwJz9B5ffApg6tKjXdCN",
  "key4": "4fgqnTTdMzom6NMWD6oUF5Bk4EArCWGiMCp5bE1iv13o5sGBoeHaEaWhhHDZgC8wm4Gbm1MCMsa7HLYmVaWdfU6o",
  "key5": "224dwunrs5f8GxZs6NgSmTZdcJf4hidbYoSGCQqE84yhqMFzquGPjDJfQEGUXXqJx4VYE285qkR1auvT4w5yecce",
  "key6": "35wH8nCE3Gc8w4ce696cf9qeKqBCNNpithmLcdF9vNr3p7Hg7faQFEikkshV5GRKfUuMKwUyok1Rw1SBNpq4spR1",
  "key7": "3noiqSiddz3WAojv3tZm1yKzTFGqemm3JKu1JFM6ezwBkKCy8TSf3fxBwWzb1ej3aC1NP812h6d8J5HLcAkpikB2",
  "key8": "64URMVhiZ1awPGYmKTsLBvqNXutkZphocYS3TUoapaXviDxJPVn91gPg8shMrt7NFP5Aqha34NxcbFto929TWEFp",
  "key9": "3cD6VjL4QxTd1UuhKYmwWBjZoWp3vsNGjUYdZqv9hhbThBJ5z4i2cGK6m5kcTVDW3s5SwfVYMrUyvK13LqBYZQAQ",
  "key10": "4iKfQMwp9qrpDHkQuPS5gbmKzCNNLCWJGGfsoJEzPMShBRPkMHQY58VnUbRTHK3vDZPKQFbwTbjEaNqNBybkaF18",
  "key11": "4hpCirN3QKSLePhVVWDFqgS5icLHmzniUyTHfmMXBne2TnLD1rLZZfUBtYcArVGYf55j5qXAs5nQR5QbgcETLXJ4",
  "key12": "5Ha8uxLXgVKxv7nnYhZE4ixJEESspBJYT2ZqojHRc6Vw9sMR6Mr7xVnbnRPDmokFB49sra6aAudCdMVY6NprQMm5",
  "key13": "2Wu9WAXkj6Kvq9bFVjK1CWZoGWVVLFhTaty1hR2NQzVFjH9McjFELUSuwKWmenniW4JGS3aTxvyS2BNS6aVB3mst",
  "key14": "wmpsb2zRu2KDENcZ1W542DmQMzBeD5L5fsDidj9pKZVj2LeWdF4r9Jh4kfS2BK5i6ekwcccKFyxxmS7w6WyTV4Y",
  "key15": "4qzPrChGXvsaKwcZdhbdhvFiqTLJLEAC4wFuSvz4uXas2xbGxTMcCt3HHdXU9Zygrbn6Nnp8EpRCnw56jg2rm2GK",
  "key16": "4SKzCpWfqkgTH9uL1tBJhpc9CqmbJVLcjUVzyMdioM9JuwNAt7fx484tvNC5DqnkPdgqxfJJZYs228pZoikWLshc",
  "key17": "2vSHdhTDoxEN2uTx1mNby8dXooYHvmurTCyhJsTZr6o6srPVTaMv4v5dPCMGPGU8FXQr2nkyu7gqBfjwzBgDPeAj",
  "key18": "JLFLi3Sd2DpcDzC2Y2b54cyDPbgC1uudJYhSYHY5SSwcjqY6Yn5b3N3Ssy1PA4fEUXk5n1ribXLbPJGPFDyYrVh",
  "key19": "s8VERsek8AGYyhC1LpXubH8DGAr1Q9Mov24hJUgPZQGh5KD8ks2RQXs33paQ1s2DN2kZSpjAuX7DLVGR3eim4Jp",
  "key20": "4hiQ2cUkRz4WoHYE7oHZHb5hGhqfx3e8anzsELdWfPAjsvs74spvRqjXxYvnDVeoGSQo8CzSJ7S3B8RXsMykcZeu",
  "key21": "DmKYdiHeLrMkvHHc7BSvrqNfJK2o3NzP7ku6nv54bJMZx4tmnRwrjPjaUTGc4eh3UQR3f7Cew6V8taYsAbg6kqv",
  "key22": "2Cgjs2d54s68S2ZhrgtR622JMYVNfGRksdkPGFpYsEhiUVaPPWrxBAGEkJrhf2TnpmQu7v47td62VPuBQRy8DPXC",
  "key23": "K5LAqoKkS2XRUerShLqvi5gpoDuoE9jeR6nFgGnDwentKWCJzVE5yM19tdbHo5XEhNqabfh8L9Z6jMrmgDEcDxD",
  "key24": "3eAU3X5KAVLg1A8zKwm59PiE37MRBSFFmNDZ7tuW2vgLazifUGFhCBdhw2RCs7pdMF42mkVggmb4oW7qP5B7X699",
  "key25": "34rBwwRrLPAijPU5vAzSAttE7XNxRFn53i5wp33fvczUyvqjAyYmeHHcrKy464xrVX1rYaare86G6B5aa2M9Sk7s",
  "key26": "2mL25WARfgP26mtLVvq3eNMRVMvA9oZ94E3vW9XrVoYkoCjr2PjPcfotYDU6H2udsBdHpJ6NSvy1LyGXUNHwkYi5",
  "key27": "3wzBpYk8zxXFosFiEvzSRWnTBE1EMFo3SWc5hH8RL9JNu7QcGgDFJ5iUK9mY8ZX5MWxDkL2R19wUdTZV6Cq7yfLr",
  "key28": "43nNoboQqZap3KzWXt1VRTRbTodb5kbTvTNKnGKMJdr4uSyo2e2XA9XhzVK4sVx4SzTTqbZ63eJtawPfAPJTT2M",
  "key29": "3Jz7K8PqJ6cW6BTY2LSEBg6EskbFCJr6WDPLcGwHXFyMqkjGAorvT2YTseKU9YcLTMzBMJp1v73HwRkEJzH6Mv4w",
  "key30": "66rnJXKg1dsxfVnmetshfPzyDQeLkzNWXme77rZAUBbhyA4xzThkXQBSF1XRVafwaSeF6TnZqFGqtnZjUqLAZiRr",
  "key31": "4BhN44qA5PyddkzL7u4WDRramFXFEeaiyJx54SDsb5tHyQGAwjbmbi27c2aKWQUcZT88j8suHLUHJjhP18xFgCQ",
  "key32": "3ZmWeT3DFKfTxVeENCnh6pnxd2ticmXmRzVghBNptTEiUXYHqHLNmnFXUZ5WE7jPtYpFipfHceQDzjSVtnK27v28",
  "key33": "2hGbAFPCPCALCJFok9sTXGy21Qv9fcXaxz4vaCDVdj2EXcWSZpHoyWcmJXmRtSPB9JBJNZLapr393n2runTaXExi",
  "key34": "27zNDsQA21uYDv2kF21HCMsMwGzjuKPSuenB7PahKgRV61KzpojmyVeLYJuW8n6dkrZY6PebHpPC3h2VDXPP97G2",
  "key35": "3qvGbkTNximUiiyxh66mbmMws5mNQ99iiRoBvqWejELsFg4bKcNWtF7kqKmsck9QvgTg9aBFgQb3X4E1FMATduau",
  "key36": "4fU56Fx5Ny1tZ5Var4XwHj8QuwkffPKsgmuUdsRcak74VwPjHprVQEiFAvv4CczPLNuKEfKceJ2YcefU3XF5fpaR",
  "key37": "2FguZnxrD7bM41xuJneW3Tt6MoEhpS5ByT9ze3c3mLXtsyEkTEunRPKNP61XrdRFeMVQBvFf8XQEPfG4UWj1Q1m2",
  "key38": "4fhgMfxFupEyztrKYGfPvpdmLq7gPvf5GYThvTWyHPzqqMMHDa8aMTzV73kG9gjgewSKeqRhSXA6W7ziWdcqTQD2",
  "key39": "KDGQANx6FNPVz7pN4sXsBZYuTqEteKYsWiQE2bf95HbZYNUo9SXYGJbZp94hJxS8bj9Y9QmtjcnjM9UufBTHLf8",
  "key40": "5EkLmXYhTpLie8pzCx1gaBnAXMgpbqJtTqbwHT8ZNfCoZtHevaU3qSh2L87TwyXXphnYqDecsLp5mRCmwbGfWZrt",
  "key41": "29VS6afLWMrY17JfXqy9V7VksfNUb85x3BHSUxurKjd9m8H5w379rS2X3d1iP8iUTZzt51dCg3JSfbSrk5eZ1Qqo",
  "key42": "4YeyVKZrVVP3KYFUcy6uceQNz9awKAYyukbyzPnYZKM6hSgMVBX9puiRm8WR8GdQh3cx7RTv8GxtJXhsddq9GU7A",
  "key43": "2kNJgKUqgVCW2GmKf7tuVG2LVBC5QQV83372p9NQbHGJLPUhC49hSDyiFF63RGwqcyw78zdrBkKo7SLWnuTVBJgV",
  "key44": "qd6AMjxJwokgLeHaVWwNw1qhpiKPEXudZVznYajbUpsEvs55SLUw6couDgNqmQjFtgMbeet3yev4U7T3v9NEC3x",
  "key45": "5GtPDXkbrn3zLncUhn5KuemBf88moDVqN8aCHufKDy9csYJWsLXjRjQchHoTV3pUHqnV1ZfM4xJkGpS2hdZVvYNT",
  "key46": "5YT1Xr9hz3fYWGNV5dTePKBEVhhPBRmrkw7UeJUiThafNbSqGcwD6zKSoKPGY5yM9VTu2jjgo7sPM6mFKwoZrnmx",
  "key47": "413oDJFbxoEGFCsXqV48kgMfAnXNHCNJcknPBA6cZTRJVJnvgRqtAbuHRRsAyRpydW5norYrFzkkNhX4DsEBXbQ",
  "key48": "4w7RECWL2D89DyYCkxgX1CACgrEZ14b6mPG62mcHVC4urLykToHYsHPQJMAdkUwhoBJhjDCXLxU31vZucxURPf7H"
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
