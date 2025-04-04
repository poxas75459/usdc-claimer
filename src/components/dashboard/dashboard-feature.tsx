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
    "3x115zv7uHikv98hjEQfhTmPKhBr8aQ7oLfcjbefNsw6c4tJyVkLECkraLz4Hwp6cQMhX5CWqNufdNerCwzbREaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qq7q4TeqfdF9XFb13s7yENvmUpSXdKWQe3TzAoNKv5aZk9L85fBDpzvutwD8iSJfBjaPwBHbX1qNhaJD4gCef6M",
  "key1": "4cofb3xAEHn5cxm5EDNxTg87FurRQjFxGoaVJqqhTR7adWAk8XqKfi1ndK1nP8dVoWHvD7XbfzvVs5jGFfFKF1pU",
  "key2": "3tU3Y2VHepc8NJmhmTkP7dDjwv4yzddQ24R8nH1Wh9wPXXbaLuqB6yXSwo8z7Lf4vR3CLLz3fk1kubiuxd3SJ6CJ",
  "key3": "4HMjcVTyPDRPfsGdoZqYVPu1NWuaTgfz3uuDdeRe9qGLpAcuJg1q4ph6LRURSEbmC4TkM7s5NT2zXkwH1VaDK9w4",
  "key4": "3fBXFst7A5RYGpZ8DB6zUZGo7BmfPvyPPQCgLigkzCCJamkZ7gE6M8SQ61fNfN2329MuuBC5pQyn3Gj5HVwzivFX",
  "key5": "kg872JN5pWDntccFkmPmgx6wNukL1qGZ32JBmvggEzrvutzPDPuZFkx6keuVcvyX4g9fR4o1vbM6iin9MgQvvoJ",
  "key6": "3an43pWCYNF1dqbkN7zN5VYUxmZTfmKaLJipHWQWACBUCU8FByQY4NRsMNBFLwTuLiLiBVrZe1CMVUANQSgVwctC",
  "key7": "2n12cSeQHYhKqBjJssvozMZMomPSGCioG9HiBmZQwKxAKH3Nf15AnZ6UfYRGPn7c4XrLtzisHqLZbjprVWY248N6",
  "key8": "5gW3TiWQjy2Lf8ivi5x9CzBEqvKjnroT49kFq9RchEaieoDUw55KamCm6vUCLiUQ6jW3aVTSM1AiybkJXB7PL5xd",
  "key9": "21X7T6dg6s5W1zkKH4LX31hmyro2s526cJYe5RZXeAtuQhYHYoELdyMbXspDidU5DjuicwkYCA2K4Erf9eSjNxqx",
  "key10": "4DEGWnfJWouxgoRbZhTBc2QYR949SNLyMyDv8qXxWD1ki3jKgUUub9PzxXJZ24Tk6JAQ7LbTVJ32s1rUiKTg6j25",
  "key11": "356n8uYZ57ZAsrh3Xpf3FG8oBvXqT6DUk51HVQLv7wVj7kB56vPQUPn5rQu8ZKyp6oXxcadR5d2jV4zCmDmigPag",
  "key12": "2R5RyK5jr35chfucZooqw6zCsuejsj4btPdcYY7DbcCjpKQrgU8ffv9BmRxRapNNshgyjLwTJvZgyGyean779cWC",
  "key13": "317fcedvovBkhszuYzMd6CGAEs6fwz7iZXSAgyCvE9dB57ovfF9fMuqCnts2Shp6qzRsT9hgCqGei8BkB3BCa4YC",
  "key14": "Zvrvj28isUdsxHfCAUvm7gbBYaKhcgaxdQ6EC7i3TAmkPuCCWbKxfjV95yQX1MAohPMo5keFqeRD7mBgEB7Vwpm",
  "key15": "5EydKpbySffDDAyZR2dBFaC1WaA3BduK8fzR6XagNayfZNG2uhfBUGrW4XLmtM5KtuXtPDDscUNG9YPvKCnLCHTu",
  "key16": "yh4NZDnvR67Nku8Cu1n9jDf7CjkSEewHLpGjtqD6zRQ9eoctGVDba2oKLye1sV24DpPcXqVcjgBDRss9wcaBLXa",
  "key17": "4dw8SJwmj8tCr9QwYCQbVmJ2FziZ6YhQQRKvszpqt6c45sFUJ5rjXgCKUN9NPDCYoahDeesUV7A48m36nM9m7cLX",
  "key18": "4piutoNbHyvgxfiuJraAK6fKiKU1XiJAakY8dpGFQt1NZX2w77vb6UrM6oBRxigGL1c5PTvqTwuWL7Ef2wHQSFya",
  "key19": "vnk27QpLTVUNUjB8r6uV3oWLwzCUnr4LsEYD9uV3P6qXY7MN4Kxrm4xcW46xXQMAop4RLxnvHwJ1H6WM9P2rUYd",
  "key20": "2sVyX4ppNBykpcN5nH4CpUxC6Pr2H2GFYhWMueD1VypPLDzvG9cNKGKc22KHQ8qqdaLQqZSA3zS99ssxYrsfmys7",
  "key21": "41jU1f742SKcpJ61f622REW18NpgE9psy6ixNhG6tZMsU7dCgiVLtMadTtf75VbGZe2XMPx2iBhmDkHHuWf3861v",
  "key22": "2K2PV6aEGXLcQGUaLEA2uAamkPNcub3xgvFAwxjjc42kwFgyDPQNuGeXxYyt9sVJkxcnfwdqwTRDNKWHAvDuKzmo",
  "key23": "5Jz7xj731erMj3zRoLbBzsd8r5pAVLctLcYgpKCdLQ8Q58Qswq22994YV53WMmKf3ihVLWz3CHdQoukC6hWCBH5u",
  "key24": "Yz5np6dmkxjupNbmPMWwnwTFLEwV4jy1ZcbJ62TAvg64RMRyqfTybzc3UgTReofTiGD1Up5NyTLnfCgeGcCBZeA",
  "key25": "oHaFSyYYJ2rHB1D2Qemqy3rtJLy9sq34F3KGAe2Fd32bt4d1pc79pCSUb7c4aM1sikQkiMdGhpJ7LvVaSNzi4Gz",
  "key26": "UE3drxvRLcdfWyzuq33REFkED9Zdc7MEfSqc8KrvfESMdMkhbfSQUSzFaLfQvquZGmtW1sgL3Mqe61EENnpo3GB",
  "key27": "TTtSFsXXPwo8zoTQGE5HYybGDfugrvoVHwK9VrPKSxqMWmgiU8L5keYWFi9ryEPjFPx3dafdzwmxzzabaWhFJsV",
  "key28": "2un8kFLRg1xVy9QWikXPpWQ4fcnG4Y2mvHUq2FM2ZFmjvTRURYRmgapViYuY4UeHfiN7hXAirNWDKSzNinsPy4th",
  "key29": "27uEuiyu3N8BiQ6eSsSxcDGBBPbrGTQN3BJN4yQiH2awdJaNKHcHRNfosnPd98GnQ1CMD9pHXqicS3uxQTXEJj7a",
  "key30": "65n25tJaZgHR5H8hkUxk97aytDCedJ22b8sPqJPi2ZxugcDfJg7onFhLssGwDy2rR6ygZrPTCsmYvr53o8ULQ3De",
  "key31": "57iSiYcFLeYHVs7vWbapUJynAdxLPGxWSvwfjdAtqp4QEDhxxqiebDZgVNfg4Y9XA3dXtHJfi78AaRV9djHzJfot",
  "key32": "67JHwagvWfbbuKDpgYAq4rYsSoq4EMtcHwtVmr37XTq8bE4vDzfb954R7Q3eLpPvzveWBFLkXYcXyUWxW7eSEW8k",
  "key33": "2Z2K3rz8UwfTJgvTsM69FSaA2mHJfNR8oevJ4jfRGXkBcAVrJweaKTUaVLw9cSbF6cuoEGy6paFPictE8m2QGDyB",
  "key34": "jXSTLvGeGo6rFionmZPXyGTsors4VMKpGY9mreG74GgVNH1abiSi9QUxuCp3hdRK2eyJ3m8Fguk8ifq4oxD8dbU",
  "key35": "4ttZKoYpop9T8ErBuUrJfp8zE7KtyFpuK4AjPV59LFZo4DQRAKXuHipxC3MQmjw9j17px88h8pMuk9fC73KsgAUa",
  "key36": "2cuS9i7KckYyFMpMZH4TmvcJcnjdn2Ae8huJQbntrF46Ri8E6WuZtQLyapgN2S8tNUtMretPzh5CMzAj4HsP35Sn",
  "key37": "5gH65CbrTizscZYTeYW7nULLCqN7T5gqPasaJuGkeCd1HP7kDyifBJYqPSyHt1qM5CGvehjcUQ9nzs3a7267ESWW",
  "key38": "3yAu3iKX9tSQ2BKkNtwp4yDX5S2FFQemuXHHPx1JArnv9mG6AvqXstrQXKNUQeikx93oYdHuzj2Xknr4czXTb7Rz",
  "key39": "4feNss2YT9X2SyUbQpLUNdWzbH5dkjPJd4QqtmsoC2bGdzqvAZQATorxW84aXKUB267UAcsDrMQoZQVB91Jzx7SW",
  "key40": "fwRgwnZyp4ggiTjua5zYzBV256ixD3s2ibAxYmZSTDsiWn1N9RpqxYog9rZa3UAKZqhyzh8Bk8v5LXHW61zBn9u",
  "key41": "5xaXDaiqjZMzGYwjxxrmh9pAK9jWp1Fu23uvnHyTkGzmTSTSR4rN5wqSKMLFih7UJC5eq6FAPjxARWQK7b59Sw39",
  "key42": "2YQUZDwj8g7HfSRF32fqapfvEGdcGKEZdF4p1osirqykLa1DsDcc9r3LrzLv5GfYgGUypW7Y7bAsJWE4g7AUaDHh"
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
