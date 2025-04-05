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
    "4xsD6fANk4A1hjzWu4vn5qWksPmjZDc1j6euvDsbbRgp2H6V1MY16s9v2gcthYD3NFXdfyBHPKo7RU9TWnzvoQYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFNUqM7n1ajaRckzvNqbTeKYHAB2PpPjXgn3VJJ1LnbU7kyqQtYo4qAVzKnLGAk8dMNnsXztfKvqBsm5kBWEkhd",
  "key1": "4YrnDSAGsmzquAZ4cXm1DiYobCVExSwky9wcPhnpc7BJUoD4nJL6eCik3w5LbTMkrmpn8RYzxeTLnmT1zyPaF2qv",
  "key2": "5pZt1LHF8dmXTKndWaLhDcJGBpC19YYwzMYieLyRjF9nDm1j5QJbw2P8fxe68qKT4vXKXpcjfSuZz9mrvsuouVue",
  "key3": "3k9atUgL8xKVMR6zMLQ693ui31xA7ASzaUUbKbxAoBUWU8LMqfQbsZfQHKw6oGcvNhQF6DQcVe64a9aJFgCGDPh8",
  "key4": "4VYkffVwwPAY7cfQ7vLb9gFg2GHmqN6sbWSrSwuj5V7gkAJ1ZmWDUJjhT9TkJ8xi9G5SkbiTysMFmwmCR2cdVFcC",
  "key5": "21491HkFdjeQBm84fYP6ozAECGbbbqKPLRWWEaP8jyBTpboVHrtUBPAzsG7SupJH6q7uZA44Cd1hzBzNxc69SKw4",
  "key6": "2Foh1CY61vhK5LnwagfxWHBAT5x2CyVrece9iLRjrV8sEp32W2yUAaDpLLqWwm1Gf9YPp7QvsCdPRtJTZ9vy3K2s",
  "key7": "4xWXdaD5quy55ypCaNiV8D9nogd8eEyqj5CUNbRnSLN4QFFeTVbUDKNMZRRc5X1fNUuJHPAtF8YzvgtdLfBa9V7H",
  "key8": "63M5m9f5YdaAdDMEbjznvQ9HmXMGN4mc5UBGaaAieGPCVyitdrSx4zK8jD1psYfcwhQP7eDJuBcxB6Zm7kUfHZxC",
  "key9": "5HUE87NDr8ev1r43b9GpShR7412htU9ic7TTsYDzz3QgZPVL11rA8C9RF8tB71YBQu1pAQ153kn8NcnMdQ37fiuL",
  "key10": "3G6EpmcMq8VsR3Qe4qBTCR5oRMsvBUKUGctSsd1FpQpc95KcXN9tA492WD5UDLecPyS4FJRefJs1Nn4nA8HzMRWo",
  "key11": "AJGjd8fEsJGmyfHYanfbMSvs2i1zx1cq6TELbsWzKnKzEGQdJiCYY9CPBeoWwTrc5Sen23W1tHAyzK3uqk9QKwG",
  "key12": "2Pm5WfoKEEkuXdWHegqkiEpFjyZ5PFgffPYpLBtYVvyRp2LAhW1jaaCvf5QoNdydAYXWVGG1BAridfRAkwHMEpH4",
  "key13": "4P7amJ1fYreQXPSCHoAcE85eWk42y7x5yHJPCF6KW12jhoQe893fRV1mYdogHWRNbJzu3QjRGV8BgiJmsLjNdxkG",
  "key14": "6bhtvqvAeyzaJv5thhq2LMSCyxEyKBf9mnVSNRwLbknzkpSwobEXBx2iBa4uUuttZhktjXFUQvwmWCAwuD6vsn1",
  "key15": "5gqZ1cKz8oazQQFLoN1V27g6DfiVxndhmWPo4gHwA6wbNXbh2Ctvkr8nPeEcKBdsSueXSGU5Ajdubetaz6Rru7Rn",
  "key16": "43vqEBkHQgEFU8Ft8kv4ZzHNfdFhAEMzgt7Liakop9yoXYWdiAJ31ZEGqF4dHh9R61TbTSWo8W1ycWFBG3mVGT1s",
  "key17": "SKjutygdjz8Qs89NnF8W2fLyRri61J4iDxSvrM3T7DAgeqEDTgD5UStkSQmkymQDHyGe2oZ66VvYMbJVTtRvYtd",
  "key18": "5S1aQCbGEgRoMR2so4r7pJoHM6acmZe9Znb67W7Q2HsyozNBoREnpQ18VDKrAuRWpCyryRMwQAnho2rMTyhAHrcA",
  "key19": "sdUpuJodwYJhaPg4HhKX1WPHBh2b7Q3vSjWKGi7dYFZaDzorPtJ2cp1k42zEL6BR5e3WXRFGBNyfpPHeHnoWwqu",
  "key20": "57t7nsNGSncH5BfMRcXPrRoR63otsqpPxNWWHi9my6SVQxSs5QUjy8WGfZnGjSxv6c7ZZ7XjtL7PWvhP7r4ymmy9",
  "key21": "3bJTxS4xHBTTx6ZS2qur9ENFuagnU8DUrpv8KDN4jXp7FgooA7RrPpx1cfF4h3agfanK8oPp8a1pZAseYEBsmoCW",
  "key22": "3dKa55CVPbhv89T2D7bnC8pgREdV4RmcrTAGV4ZGtHmsiWz8jTHJfAUfcdbATNYNxb9MvnyDzQz44bVEW3oLsuWk",
  "key23": "SAk1j4nfXLZb9pPduPxQugkiDBJE8gsxgoNuNBvewKmcKB4CVA1r1dZGsMEDJnkJFG68voPEAbwYv34nKKzRf1j",
  "key24": "ufTZkC3bRKWV9mNmKY85A6YrwXXJ2EWiYsNVL2JbEgTbZf1LRs75gHAt6c9f37pVhMTMp287f6wipWzJUudTGdb",
  "key25": "3dqUY8hf8TFwZekkKgPq5sqxSModMxfUaNwjKHsHZbFgtu7heB1dvWUG8YXKbfXGKuyY8gA8Pnu1y1PdWNp4vQwL",
  "key26": "5xSdC3ndHSjSwVyN3UDYTAcKg28WJ39G8cArS3YTo59hgLaTttWMyaz4yZthRm1LQcDngRrWu1mXFXUyFCkWZCs1",
  "key27": "5MNi6ox6gmgPNw1QFbjugojj9Q5CD1oLiaE7mZMxgMmtXuUFsWwa6WsgvAmzPcqyXQTzEVYNj3uSQRC6fxgJ7zdz",
  "key28": "4mnFwi8GvvQDvXy4UZ6x85JkY8ppyvpjwdH1GzME2brydWWY7m1e3fJbmS4kasfGD5tpvGRnvqow1A8qRa3KdX4V",
  "key29": "3LNiEv63W5c4qSqiSkvq4fNQyz8oGbQkMek2dBFFw3RBSFuLu5S1D4DMzusMBZtHnjAZje4ZBtNwU5MS8oqawiQs",
  "key30": "qfBoX5ysfcNXg2oW5oBNsWyPRAGnnrYwcb4BhWX6TwQCX4NrmZEQcQDGCSaQtpDDMdiQZBtWQEFeh3yG5aMGDRY",
  "key31": "48oNcDjGJcCZqGZyB34Aoe4iUGtW2AL67Wg3kQfcYKX9AkZanAk4ft3kbCgojb4cm8cvfsruoQxhDXqA7WoWYALt",
  "key32": "jZFdV43Skys7U4wgjoHmddyjj2cayFQ9z1eL92qzSPKSudvGjWD18gwjYQJMM8qXN11f8USoU6maEyfa871Fyhj",
  "key33": "4GXKwrYDqXsEX5J8pLcza3qcws3gDNjrJms3eoEbQvx3JUN1oc9YNqThDHNdktZLzpTYbbHvG6F1uEpEVNovuk6X",
  "key34": "2bmp8LxayHc6GgksRP2VuMPB9VEowxyKCvegeyhzLXtvoU6WMWeRzwDnvqddH5rfnmxqcZ7Y8gHjkUCoj41sjLmt"
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
