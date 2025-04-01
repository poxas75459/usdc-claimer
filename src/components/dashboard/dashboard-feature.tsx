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
    "4QDU4w4dqT7TKWuZgju2f8C4rJDZdyskP5e56g5TsErFUyxhiqS2hR9EAwWE8c2rbSG2uocFYY6KKznLJsTkbQdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pCbuRCxkF5KyKpkjqY1SbJJ3rV7b6odyWBWarVctMSVcjcXGMu1xJrJRQDJTmxxNMDa767221qBPH6vPWVYCC1B",
  "key1": "3kZQsSqpioWhvcd4q8r36cd8Vc48JtB3auynWbNtMrWqN5PXWiLbPUCvXiCcS6xj5Uitk3SsLxnNN2jcoGFk5Pnt",
  "key2": "3VXqBhdeZbesZa3o5RyRDMKCb6kXCqqTpa9LzyoGYoUTEZcGr9QF2nyBU2YMCJKJrXwHs2FWcesAewuiGAwmnkSY",
  "key3": "2w36TUbndL7dZZ9aUwgiGyCnFmWYxRgDsPTr8aMKzrUWSkcLF9EmLuR7QB8wzCHXJMc79P5nPL6anGytSXqjZqF1",
  "key4": "tGEZGknXRALZM8615anKHJEUnc2PqEmKqefWHFiqkQoRdPchJkbjaAJdqZLhxofoY4P3o5a4ab6xFJGFaFsj2U9",
  "key5": "iwzfoMvtBs9txZdqPv66qaMim9ZypB7UV5Uth9qHjGBHr3k2nY6DLV5uPFsTVWNtxnGTjrisMvRpBAPqRGxBAHd",
  "key6": "52SHgfwkG4ukC7SC274UyPRx7gbxFQbic7aqVirdRLJ2caNP4h4hEZA6MTbGdi4z6eVusPMPwbo1Wvp37J7wfKmx",
  "key7": "5aZREJEjpa3SfRr6oijYWYjVvkfuz9rmi8RWHym3oJ3VvUTEr1USAsCVXLrZScv6FQMkHZS9Dw8c2swjbvkAp5C2",
  "key8": "dYLN5GScp29n6RaaoaEvkRRjqt58MNvZsDrFnzM9nEJYF65tn8wADvtY1HZ1QaXtttGy3SNABere1LK4erCziWw",
  "key9": "qLvvQmunR14p1iwrkQyiCWuq2g4pN9mWTjCq9u9DJKYA8tYj9vLYWKg3BWbptszr9TWuULjygMGyR6XCb8kEmEH",
  "key10": "3v1prmWmSiyz7UeLaL3SPBJAd99zbHmiaWoVQ5iHzeQJ36SyenvfzvGQYujbBc44yEis7gh3kpEHPHvYB81wB6PV",
  "key11": "8fFp9uqbq69tfCZErNHau7hoWf5EpswdFy5gt5DaET6ZFRR6mjcfkDc5rYjVPsrZPaRYyMwa6BWzR1at9FeUnzD",
  "key12": "65nPMhR5Xzv5bzq6XJjDsD2zKT8YbPMhiEKUcbgdmfKskav8GmoxxiDFdQwY5NVS9v7C8xqGtKUXhcZ9q7JhSdDV",
  "key13": "3Rmnx3CF52bG6qpHGKTYn7i7CEd69hf7ztmbE5N1wz3FPpefEDnvMAxPkj8PurZtCm7bL1ipjomEve2qhDFkeqyt",
  "key14": "5WMZjRYN617SDsEDrXmfphivZGqYKF2WZGz8B5bDrSHwsJwg94XU3VptG9Vmkv4ou2KqUrBwSJiBHpJhKNnBJ2hD",
  "key15": "SfoMJkF7FWtonWSzscqnB5QEZAnP6TqpQnbkAPiVBGc4CWU1MX1sxCBTumi54A6cEeXEcW7SRwddsMrgepxfGgB",
  "key16": "42QGULDcV1mSkLiJ67d2bgLLQuiALXjbtuTQdgjdYbUw4jCTqMYFRH8mRUAWB3DRfy6LwbX5eiLGh9YpjkXETrJc",
  "key17": "2vPeqPgbnVkAukDJE14gbDUjZonBWbH4A2KHEdiCnitVMPmsrYX7mUNBbDJmhbheyV2nnJZ2BhYQpx7EYha4f1b9",
  "key18": "2gCDcpDJNr94N7afRAyT9gKZb3yk9QiqNFHARxAJUbFNGRkZTbVS1hfk5DEKpqUer4j3xVcoRG2nVcFsEHraHuA2",
  "key19": "53MrAwMfw2SfrHkyLoiiN6CSfVuswPevEFwA7ofZjfcJjcZ7Y9veNnPxaYMgBQm8akwmH5ZzGLjFMzUnTiD7vAtV",
  "key20": "4CibRUucVYT8boxuwoFMmc6vvpvf5kBHxSgA6kyysDXb9AtWn2rj1oVpA4i4aFHC8e3TdF4LL2BbgJ571bwnZuBM",
  "key21": "3BcNR5MiNm9PfdRTLK2AUzzo7uywdshhfKVB167CaruxDbGfqaAQUF1C5SuKGKtFNAK2MEZDBgVVgdr2kgisysRp",
  "key22": "3G9zsAQjMy97hPGRBCc8mcvWiXKTYfd1fHeYqwrchsRqjsaGmBDxEQwmqhUDu5KZBWT4LK3dZtZcJqPfmdayb97y",
  "key23": "5NTA4LtXinVcnvK25dk37bE9ZTEpCRDkVPxxQLHp8ushMCEqysQQ5etXnHxKYUCFjwqHKJ7W8Z1fT1ky2WEVGLUM",
  "key24": "4h8WE6fphG2749RpfLLiUQTpuQZh3VcCcLRFKRnCwaJmuTqd8zCHRsQn6Gyk4A9ksnrVKX5PNttkELDV7vQ31EDb",
  "key25": "5ss8wXTfG9kSZV1sejcTJYJCzKHocduqarJFY5q8HFoWzPdV3HBRvi2eXuDgrMThbMnaatGwzLw7zgvTZKDXa9WU",
  "key26": "36XpN1wb1cjaYpJ1wysEGBEPBKqwWdG53XjwweJCz981cB8nY3sFddK4yRDvgrfzzEbe3h9crqEjNMdhtrhhvL9n",
  "key27": "T8Kqm3Fs3YWAhRbBRt6DTbopXMKARaFPUptJyN379XeenMmqjrfFiH86eeWNui5vJwxstmLHPLUgL6UBeJSHTPV",
  "key28": "jTVDkRoU7vRJ3Q6qkzQ9gzcyqvLqggiUaYqsRWjambChCVezL9aQN43ytX3rpcE5vPWLBDTq3fKDmGUQ1CEPT8D",
  "key29": "5KAgPiREm1k2WLaEJ19iAPMrHy5zfSwSifK27KUjecfZWzKBQF8LRiMxoMqY3GjR6grLhjmYTMSCMwr7tX7FoJ4K",
  "key30": "4Ktd8U5AhNuRb86cuRArt3BTaoK6K6NGoXZx8o4uFRbd1MTvLEYYYTAhWKTsXEgGPZ7Vu3cbkUfh632aR9R14Fwc",
  "key31": "Bcqco2DFeqvhJx6AoMSg5HuiMVm6ciA4uV65mVG84HCzUyYY2hQCJrM8D8kmNJaWz2JGcfNDDqNNJmwqgCoJGsa",
  "key32": "e3NvXJUj4QrnkmS22M54RnrA6R1tzUuDG7nfx14JFLsCK66HfgRrm79FfqFLgVzswLXuijhBxwwx76tWTnNnctg",
  "key33": "oKdCcgp6ZALBjq5gFRV8pt6KLDti4UXPDFsYGsq5adnpWx7oMBgARgAi2irdmVwJDYkfQFo7cMhwWZJvV9mVZus",
  "key34": "2esF2gKiLuq7GupPgTeHHogMpwAq4p2fdXH3fGNqwhwqkM4qnrhoBuKQBB6E9GsNPArJoEyWK1sZVHS956PdG4X4",
  "key35": "3fhQd7tGrnAhL8PZQacB2ZUo5Z85BsHRB4a6peBQoJkjQboWm1W6Czv4DxLUsPyjqaBVEQWGac6fo4qZoAKfKhV7",
  "key36": "wgPojwGUvrjyDDC6f417uCx7GvDFspuz78vXa1Uu4PuuYHQyPAvE7957ZSoMJATyhveXtK2HquN3BnPApe5Lpd2",
  "key37": "4A64tRQbV7seKPVnJjcPZB4C1BHBX5g1GrbbabGKY5KrUKBtirAHbH1GWo34EPNUUbsYDGJAm6pA9sXQDPvX8sne",
  "key38": "34zjj2jvYC8gF3ze8GwB6rt7py6J4qhNqUZURpo57N1vdD8gJhiZ7mTZcNBi6E93dL9LQevegdfdVDkEGT5PUo4q",
  "key39": "CD1KLuXhWkEvgATJbqobmtNVdwPSEzEkwF49oMNtvct5hMEadDi1tsqGZf2neUSQvMtcgKyNFkPPSMub4MFio1j",
  "key40": "HTzbveTXZRzgMPDKKPbhneNdCKfhSz2SdXsLJs4eir34gLmA7ZQkJikxfe33E6v3jBxXVkNdZNNJkk1XeuG4cCo",
  "key41": "6XdTHYjSuZFW6V1Dczr7ou3qLcPWiE92VAKqkgnR4knKniHCnud1ziTts6nt9NqLCqTRv79AeRkMorvAaawosAq",
  "key42": "24UcGr8t5Q2fjmCThpHNs6orrLu9UnTLK969duATjNAMuFRsjiMxT4fTA7u5AjJPKtXDr8d5Mj4azoFUMh4G8aYH",
  "key43": "2CWUe4zECtgtchWmZRmSwbWAGgV4K7sBU5ngbhXYPG8zvp89eGkoTjsJ46xT9iREjarZL8dW1vqbuW7vUzR9ogBp"
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
