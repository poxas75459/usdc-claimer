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
    "4yvHf3ZL8zz7pKkFWmmVysnonz8Q24yo77FcBhBckkzmY66X3MGxZouBMsFPHdPvjzudhmP8gxwnj5vTWPqCygru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6ajz3yoTTMbw3xMTSvu2k9GkvLMUEtuRQK36bAUPivad5itj6MUsVKMMXV3vrE8yQBSP7bGFGRt4xwoQQWQuuj",
  "key1": "2sCpiHhpgkrLHVw2rkmJFeGvy3VqUv6kGnbrWah4Dp851j9mBPEbUn34vQYGjw17BATrBLpcCe79hMqwhZAeVt5Q",
  "key2": "4DtX9PT1cbG9TYsGaK4tp6AoREGsPsELUr3U57sZBRFCCZtAUGhqWiWaAieEyyFdrWke3ALJTx7WD4ft6pcgJrFM",
  "key3": "2G7qq5JM46QXSb3vLg1x4oam6cELk64cwJWLj7cQJRJg5UGtNVwrzwemSo4AkxqSjmD1YDgQGasdyazshMbQ2MbF",
  "key4": "4UmMrw6AEACCxsotSb6Lw6p5sHqtGSyE4CcLVNV2N6UdffZqr1iAUF4hi1Fq8DPiBXSEoftRngFZAJ7VxAkacbzF",
  "key5": "5fuCKbwXfKNbs1XGiqDhQjCki652swbfMWtXDhwWt7BKh9mrPQh9h5V26P4xYRJc3M1S1yEe6B2jJb43fWYhDnmU",
  "key6": "5os8B7Mjec5wGZsJC7JP94Yoiun2cwd2nY9H32VtEWQyPrpG4n78vkrbfBZNcthNH8mcEPugtxt7yfjgBE7XsXm",
  "key7": "54csg4xsQZ4jiT54QeHqh6wXpFAZY7e51MLJvpecNCuV4Bf8R8iRAFjCDQxVXH29REudMD1juG7uhbZfRMhwz3nd",
  "key8": "3nh2dds62YF6M65jS8yzKYeaZhRva8tn7drbRuvV52CMScJ1e32HYRLWpK7MNxEDMesS22x1BMQRCboJAmgPyn52",
  "key9": "2fqUP3u5FpdNy7aarN2rCfaL5QucAtfWcWvzZr2D6R9Cb51mBbJxrA1uMkTSUYdcy3x9fS1yuUh6s83jYdU7ixgs",
  "key10": "5mDdhiZdJVufTi7qq8GppoLGdnLDxMsZirYUmA3V6jkK4oCGaY8JRLjBDzJLVPaaAa7MWj1j9JTjgMrYNRj5XoJt",
  "key11": "3z4DpEQnVr2tRV2uxSqzgmbr13ErVUjSuSHKgZCKEfZKg2bk977sULouyk3fmAj5V7UkXz19utEAQ3baU2MGFLBu",
  "key12": "2uaXcJKjVYF77RCgTV2EumeE8nYJ9wW7EY7CLubRh8cQ5xtEhbTyj79UAC3ADgErL63cBRQJVQDVEQFEu88E9N75",
  "key13": "5kcQN3JW19dHoTHiHVfMwcM5rAkBqXYGbCHu6msHP43mxvW6JdhR1rqaF9innTvaQyEKerQAX1snvPqBmn6KYy1i",
  "key14": "4zaCY1QFudn9b5oPjepWztWwrNuAxeJHN9rzonvGLxnHVpbjCmEg73EMeevqYzmdWJjgGaoRo4XbRKpjofedsYX1",
  "key15": "5wgj2ZF6Lw5pFRp1EtAFESGsUujRukYzbBYtyGuoziHw2sQy4BVm84nEezcbvtGYRj4JGFtr3yroNH5EpLiyYXBj",
  "key16": "4f7BeeyC16NHrHpjvznZ4vmrNZhnzj5BR5YeaLotuwwfWmxJ3wGdB3AQERTyWPgyVATx5hC68ULQCipbDGmzC5wT",
  "key17": "4y48gqWFQPRgPdFYu99q8R3et1yB9fpM5kHLYQ9y1ozKHhsC2d53ivf558zrniohzZvJFTEej1WdPXn7juenbbMg",
  "key18": "5di9hGJ9vqdwxRDLwWyQr5pUqLiwBJR6tTYJeg6BujDtgdP1GtR3ZcJgJH6GDy7rWHpaczQaWf3o5rgHbDQruGZY",
  "key19": "633UaQW4E6BzMeh6HQxaxbWz9DyN3KQdxEgmFXXGaNEWewKkdGYQUH6gATZExHM4DwqjGKJUNunoPANg7SZ3Smb7",
  "key20": "43qQoV5DaABRLMEw1CgPUJqkneScqME2d5us8uxezGKei5h28S7dKx4nCwEQBPJVYDpEnG4xFTGL68swPuinVkF9",
  "key21": "EARGMUNg7VX2HyfDs5BDEN5T5cxvc3QeYXmVxhjbF852Kc95Am4fogB99goTU4ACg5x5S3EtG4sPEPb8ZyjiGvK",
  "key22": "3J5sgjPLgTUuQ6nBpMufTRzptKCEbrB4ifzg52n4dV6sZKevct5xKyFDGCKvTWEm1jUPhFehX6zhJ6JBkMVQcBQ1",
  "key23": "2qziUyFPV5Cb7AyTMcxBrnEcf2HdLts6Jb62S8mMiXNXUjSDHa6UTFgK23huPX8JvVZYNNVrmpkkyrsZ8Yp8Cn5G",
  "key24": "3RPjyK1R7U2rg2yEziVALJFwDGFg6UycrNuc3UQjrsiZzFLyfapEUyuDHYnVUMW5pUSvrHc5bb6pj5GcMig8Wc9n",
  "key25": "5vdQViPZpV4n1X8YRGQfBZYibdj6zv5PDUVLk4Wpd273zNjgPS79GZAdvDER1aoJrXYYe4FRTjzHaXaXGqwjj6RJ",
  "key26": "3B5pJu4Ei64Nek2bBHseMuunGvy4E1fA4Lqutrxnc6ccQrcoMVoAMi3zUGDFfyt4BDQfWQsv9dumehJXwUzRNCoK",
  "key27": "4qvtFoEsVmz54CUYLC8naU457VJgN8Bt9hTxVyfZSRB1DF7ps2Jyq47TyFR6bABkJZV7R1uaJiJvMbVA7H9b7Mtt",
  "key28": "2KH8jcdCZqJBfSVXQpZ2w4Qxn1Ns3BN3YNoPvveTyAVrSZBTDWfVNLQRZSjtuDvuTEaPdMUJDRTYTZhZ87KwhtZZ",
  "key29": "2C6gpny1XBoDn7eWUTzJeZetMEXjHiQSuSRZikFsfxg4PKswZgFHw1sw2S5aSpQhTcyb7bAw56wJRgayiGvEj6jj"
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
