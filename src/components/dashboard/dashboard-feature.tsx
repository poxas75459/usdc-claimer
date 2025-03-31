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
    "4z8CKoCQqMEmcGPwhp3cqjMsbuK1zB67XHShA3U3oyurPw4qzBX1Z9Jdk2kBXtH8umcJvdrqkDJzKWTB3viDC6YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNCiBjzmGYnayFp5ARk6DxZ8mTQf7cxVYwnzf6HVfxxq2PykFhHvnfJnvfR94RaXzvo4CzL1bBYszTWppkccVSb",
  "key1": "BrQZw6saykJwVt7FiGmZvDZziBCzC62vfUA8xbP9cBrbcXakgxbXtNwhR8p8iacCyeH5ey6F9hmT1TDWdMtakNM",
  "key2": "guUtRRUfYFixAWnZUHoBTWSfHRhJg6S8tKPRng8KjAFsWgmptgBzJsB1okdho8irfwSnLiBjMwmvtdcmV691cko",
  "key3": "61QY9zkuxqJh8HPto8icVoLzbEkkHvB5wYLJYdJhzqUGTKf7ruoAeU51ZpaUnn1Ngf3EGFcWVCGwMq3j3sQTYRZ9",
  "key4": "5JRVRvsT421uWfCzM1L8KqbMTW6W9Ycb7QE3GVz9ttizh2D1dTqLVJjYtBswjRdSFp9JJqhfbQoAyo6KMzqpaTg5",
  "key5": "4snpCuD15eAefh8HJq7HDYGk9WTQYkPCXC45D5gC57puK1Wh7e2cHnEpK8KXEkrwRTpV44VKxc5hVXqnp7XnFe3w",
  "key6": "r7V58h7PLyhJvX15UzHZrKFeSjCFSbf1BhvCyYJnmn1D7oroqRu5wbhXsoepFMKMsYUVXYifwK81JyBNCDxWFwZ",
  "key7": "n6hMjkbrgQ1am36zo2Vvak1jHTw1ZYsiqSzr6Tk1vvM1qzciAng6hmwqNt52wnDMkTN7ua2BeneVWSxp2V91aiK",
  "key8": "65dffjMVGvFC2VE6HH7pcSnnr4nvLb4CZ7co7U2LNn2Atk2JBtbAFaoydiJqhDiM9edBcZDNGWm6g1F2jojqBxyc",
  "key9": "5364xmD1vKLHKVzMQWfeXGdzG19H8e2wMveQLqhqNSdfJkmeb5LyT4ipaym7pmss8ip5c3pYqUiP6ZdULDVmHN2G",
  "key10": "7kCPMbKPkvxeptc7U7BZk9sdrAkjs4M58uRMzGPWG2ToVbQ5H6nxoyJqN2X1z4rDu9EoG2jM2SQxrLU5vHLnGji",
  "key11": "23XH9iYBcgvv7MPpHEGyssSaAqesZsyTunvf1vPdMmQyFNZoD17DrALwt1YNTKKSrNtw6M6FZWQRMp5GVtdfnvoc",
  "key12": "4ydn4Ao6WJjCao7BXZCVcofjfgRRc6DGr29A5jzZcEMof7LMuoEVLkQLi7epU1Ey5LKnAsaTjd8Z93RL9DmAG2AR",
  "key13": "5y9iMpc1hKDPyq6ifvhDJWJvZg9jSwtopRf1YpWhfp4kndGbcu5Dzp6psPY54zbUbttdYBo9MdRJk5HnCu8eJLt9",
  "key14": "5Xy86w5oTFKA3ZYkxBG9cXCdADnrcQn641UfYohBabhjNowaJ1jtHeXaGY8aqVjAMv5o3rtHpLMACxzP9WpyKG3r",
  "key15": "5Wbzbxn7RtUV9SmVxMc2wekR5rjqvrRcL4K7VQGFzgzmKpuChKs3S3VSo1pTZm69YNMF7NtPGQSm9N8kXbSuFoef",
  "key16": "DNSRf6zoLevPTudagKXSdQJLQiJrf7mMezuALCYmGXjK2qLVRD1vC43tWwFiuN4k1yYQyL3Je7v2S9ykGWZetPP",
  "key17": "4ALun2fwvSaK3ToJNfbJEwVZCkMdFm8Nnciu2KfSYjyTXHKvUiwaduBdPJasUsaKfpMbAgr3RmUNR95gvTfQRt61",
  "key18": "JxCEVWYauNF88Lu2cPicNtBseA3S5FknfY88MhS5pygYGddSwtDTETiKMLxGjmbzVbJCUvwPcTZxCj8tCQBTHnW",
  "key19": "5ZwWkweGwzKWngV8PBFZLPjdVZxnovJ8WCiDq2deqL6qXxqSqCCKF9ywkkSJEipRep2b9tkX7WBsjPrKDMcMTzqo",
  "key20": "2j463N2FvXVdZwnRqfsPn9AWEFkwWpVZTP7mvRXyd9nZPSMzs8EFZbFtHo4dxBYqNA9faoT1RzUVSjXy6g78i464",
  "key21": "3EGkiK4tPJzYWwv5xXJgXY8AMyNqfVjc2cjumaQQcLrjS7Pu6wv2z6RUWnp1MsAc27t8T2DiWqRY3SEZbh2qscfR",
  "key22": "2kyaWci6o97bLngY9FsBJXU3NyK3p4vnU8PkBSFFf8EfSpzziAgKkXVdVNie7HRswKWBdjnFXf2q8WcYnGoEhKau",
  "key23": "4vXeSVBimdmLyQc7jpV46bXshG2q2HbMUPSMr8fTj1W5tWXYf8UFqviWLJKqZ4N7WzY7tWKzvo1q3FyfeafVJ6pg",
  "key24": "2sgDVvfXgnPPYQbmzu7AZmaeP3k5pnW1Djvs6mCDDmHjA3iSJTZ79vP3THY8FGRRNamuBd6u9bGVsM4orU8myb6S",
  "key25": "2UBZDrxAmT1G6GEfzWKDfJCxCox4jWn6bu4PUqhpnSD763SqutnZWn8kzhnGY8tZbyS2UBb7NwagKHCupHWbkg76",
  "key26": "yAx34akLsACVnxU12nnguhWji5TtN8mbBK3WhwoDL25775Nkgz5b5GHAJauu976dtRvUqnhnb53SaBnTnre4m2q",
  "key27": "ZJ3gjRzA1cyohnywhqrhEeWySHerK7tQ4LV6Z9HYU9MJJfEV3D9a4HcrjwiiQZxT8Yc73WfEeybRdJDJRvUe5bF",
  "key28": "4d2WUF2TbkpjWJt1hHpsPXKK7HKwU1XA7ecUr1oKJzJP1yUKLUbnJWFYqz7tk4kGJGyz7eaFsHqYrXghYCRgzYKh",
  "key29": "3QJFiDfbob42hek778fDjsCNf2xfeWpQBcYT2Z3i3HEM8Fy6NpiScKmcjwcgbriDiksBFmLBTHT77DFS67Lepsrg",
  "key30": "3yjvZhCfQTkPCoakXQv5QHhpZeLaAu6326Cfv92cJPEfX5SixQtAWYgSMxtY61bt629Lk1PEc4m5N8vJRn5uqy7Z",
  "key31": "5ckJSaLoUFfkuL2aKTc3AqLPU19b5BXZLHizpSGJWWPGirMEwj2phRmTN3QNF9SGbZ8fUTuoFzmYrcx1md563BcM"
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
