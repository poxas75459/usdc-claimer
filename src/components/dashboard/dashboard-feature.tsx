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
    "3dCqrDs4P25Sj5dXJNM3NyzQPWyCVSaTEhggLt1ky5eE66fTugVj3uWEv5i8RudXZXE3uroMXYUyKW84eZ7LrQkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CEvwre58aT5KpwiGbuvdRUu5Nu2hDf7nHARierCbHYzqs3rY2fPzw3PaZGVcDa8waambnzAtiPaTf6LJMxkMsw6",
  "key1": "GtybwXgh7Ru68d7zdXFkLK8yUHSqn3PwmD4jn4ozyXN4CZsDm5ZEhDGZyPa2MMUK1DyAyRf6YsnmXFSRsk1qdvZ",
  "key2": "2dbFts7GKAi4M3kmbWBk1qwnKRNa57AuHmpvctms4EC2TLnxm8j2CWLUuZEmcgreJLEQsSa3mStVyoWHgAiq34Ra",
  "key3": "3BY4mFBWRsYxu5bp3Rr1x2EhKjn8cDKLB6YAzGb5ubrb2oC3sSVzWrdwfCVHRLxJqHmnbqHv6dup7DYQpsAVbcp3",
  "key4": "4f5dRb4bgfQEKDvvn9mpqNW9zLvn7e7oru2GnsqNZPSMjerg4TaGt3mBQLroQ5gHfumgffSrtLF3VQ1WiQAiodjY",
  "key5": "3QF2PyMrdUNTPbU8MtrVZsmx5Mg1xa1s4w6RZcdpy8rqLcRCyLniN1vAr9fn4XerpuAafefJJzgRJY6RrSRm56Gc",
  "key6": "4xu7o2iRtkX212SuehGgxitW3v6kCSiodujEJFAh6McErdWaURcsMsQPAkWy9N8CdZMg2M5t9gKS9LZ4wQ5EfCSk",
  "key7": "3r6mLR3sfQRLwQygen6zpGiSeLBHti5fxALL8WKStzGih8uq2tLB55XRoqWUbGv86DWAgXm9YiLxv5aTAGQR9PJ6",
  "key8": "44LnrU8avr8ZQPSnUNZPLhNmXB91wSTU5CAKdTR6NdwYanxE9MVZhVaWYhGH5dTeDYHVvtf1MAXPo7xeAcvua51a",
  "key9": "zbViakU8VgxfCJraUtraa2VC4yxHwk5cF3UmxMD6BHMVKTyVqB4AaP11hFqz1SbMiFZEuJwLNFoGuHh598S5j2s",
  "key10": "5ectqaQVYSKZvZ1jZYsjS9VoGF3TLR4cSh6x9EZiX5xha1zQw8SV7mkhTxiZVbvFwNvPPD4qSfpDENrRXFftkfTv",
  "key11": "2gZE2bRkjruvziLLHP6qBQKyfFrZLskvnheCrowSesKsZ6HxX5fguh7MQzmeiR5KRgEooE2J7oy1TZe95oAGsQSF",
  "key12": "oYNb6fhqwkmoYezouz8qQDUFBS9rAoWP7j1Z6EhsevSJ5soU4LNfmUew7YLjhhpTpZdoxoyjfuSZ14idshBmZiF",
  "key13": "3SyNWNivVvDZu4eYtaNaQipzvVUQmXvcdoWt5GWAHxo7gWxCnRu8hVK3tcw65e74fkSGcrRViGvmR692CAxp1Cu8",
  "key14": "4vBgZvyiUe852n9ZVkRVTe9ce7MzZEdqAJ7Fv9yzFwqt875zTryCeLFUs5pf6kZ5YW2cQ35WQ91R5WLKWp1Vs922",
  "key15": "5hzBAGQWGcGeJrgNDLdaRoRVxfuvxjpVvS4YEzb3CmbgvCLd4rsZLNFSecixj98jMKKyA3YJ7GKSJr6iCT4EeBsM",
  "key16": "2zxzkFtUQisVnBfeXsB1Hp9GLbX7s5xP59LNeHaqw4mc3Qn4QZ2MsXuA4Md6scmWUWbKjA5mdb4FC43UJm2bAQ2m",
  "key17": "5jqxNNL4PeANTS1mdNsrdxui47o6FT4RUeE4FBFwpoKepPCHnAqNCbXnDc1uRE2ZnhWzGrX8EnAv53d1LMGUymuF",
  "key18": "52ZecR1u7Jv7hThz3duwtD8xCjts9r1Hi6CpYowi8519kHccc3GqGjNgyRmCrqUfXqry1sJZZA17Yeh5ssfes3B8",
  "key19": "5bMkFasFunyhBMUDdkumm7vWY9yKUMDt9UqysLarRMXesJVuC5Cayx31NaaoY9EMKjt6cFMqKgtCpx5wN4HaktQ6",
  "key20": "4WYtDKVCbmPLP6twUE93Uk8y1mp6dUZSPvnPG251mW6j6e8uLTyDxwJkCAyDRTciBFgiWJEWXwsrYYsF7WNtsj9n",
  "key21": "gaQuBiGnXmsbcQcqFYzBSzqdke6P81SYJPKuheLfPTT4eKvCcDdRqRgX4SBVMKtoRifQN8muYVJ3hjHSe5VXWnC",
  "key22": "gmDqbYvNCaKNJQicG78x8dvhzue6gHDsNf3xq2itKUyZv6o9sAWPNFZHingJDGLJutiuFLQMMtcfAuUcvpWrq1v",
  "key23": "QBnqEHyxJkBqjk5rWxpsoxgavgHYMenkFoJvD32uhZijrpfS4vjJcHiE8fEPagANuFuhVyy4t3LekpC23Mkptbm",
  "key24": "3nJtERpUTRZYBqjYUwqyaXkYW2t5YDsDZrPnG3UArf7GLJHJiDaBrL3Pq1SLpwNMx6Uf6TAV2xm5QcSJncLEkdm1",
  "key25": "2G8CYLVp4cCUKxj9oYzRTf2Q1n6fzvvmqGUsEF5iwUXCNeudxrCdiMqvzgfRj4RdTjJb5p6esnsdJWXGHNB7bxev",
  "key26": "4CdEJ9vizkGZ77Q2GqLrHb64sA9aNtxGotB2RJK7RLozKzJTyhGgpdQkyRB7wUdC9pCyEFz3b9pvrZzY9LvrwMxb",
  "key27": "5EPFdTe399fPMtusyVPj8hKiptVGkGHVGGQL5Yuqr1SjhoU32KYEYjqyijoNrpZ2SmfGb3u8jX97Hqns8zExsWiq"
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
