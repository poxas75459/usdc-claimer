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
    "4ExoN3M9M9NX3EBZb5HesPThu8yTbUuYqi8X7XaFD8xc9xHLxcgDsaZx67ExvWTp2RDA2HDB9E8yzA91NgvZYYh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mo8zj1NMgCbG4uW3vpAsoaoLFqzAUw3iMAYJ1w1CD2mnxy2mhZMtRtKCqpxaRJ6GHuAL9kirFZ8qR6XvA8XFDis",
  "key1": "37i5aehtc7sz68Zuo5QpX2VV9PsPeZNixTFNhPq4ukeYefFkWp92faSU4DYQXCGdjdGFN75LVUiFkrh6NBXZMYV2",
  "key2": "4FrvzqfNM7dJg8nPRoQMRLNqFr94TKrdt5bshVY3s4UMWaRMrFPzfyFzDELJpBQ6raBPTtKtMGq5moFgtDUfFNCU",
  "key3": "BFEb13jsMMCDTqH7ayCMxCoZ7Zs7HneJcRy63X9QcQWL2qCZ4xo4r6pPEAdCzuysWnd4aUTuX28K8eTQQvkXqTm",
  "key4": "5EXr5c3LYJr4J9WeKDcUG1C494LrQiMLUxMB3c71q1f8z5U5HDyWGkKCRcf2UVMph8KHefDtvGhb66Bk5srBwaU1",
  "key5": "3swe1avnqEFWqbHtw2vzn7BUg8eXdoh2gqYuykHpoKLKrUxFg2p8aRTQjih27tJaQHp2QijpDMJP1NbFoaNe48xE",
  "key6": "2YHSC6eGfPdyvoVUwBhKMZKd2VLgKHhvPmFWbFWFiJ1DzuEmrGzHdTRRLwNy8YAzD1nrBhSSaVVkQCveSF9xCwjs",
  "key7": "4CQLncaffDxH2ir8Dj9ftskLfKY8Eei97FnNzPwZ2PsQzNqpiPHXPH54NKmKwPfHXEkU44jg2v4Ru61hBwW9QPAm",
  "key8": "397xA6pV66C4Dm5eiZzzLLZ9pBdvb2jKEiuyfY5EE9SauX6ASn8KmRHnfgDtebssdFnVUXk9Bz1tNjPLfaR8wwsd",
  "key9": "NrsTzroXTmXZk6DqP7YGwBK6uaRXcnnRzCYoLU6Mj9iqwQCFcMho1gZW4pVBp8soKkDqr83RaaBEcZqoNbXJLFt",
  "key10": "3jWZaBfB25HrhozUDoijZP6QErtd9PgLdqMVfAo4ZMBYCeEebAAbR5FPwDBfKaMdMoFsdxb9hzgYqo6PLdpaFUoY",
  "key11": "3Jprs44aEyTeiYpRKrREPCvPQBVz9zDPvPVVTJsyypbUtXWPoKsu3ZNo6diixPTDjxg2tztKn572KHAzU9vbHELK",
  "key12": "2ug5FBt5Aimgr4JMTgBuHR5RN63rrzaeGoXauBeUZmTSswXQG5pQzveQPpXUWJTPSBvGUzksZmQs6wMoYv3aFadz",
  "key13": "4Jtavz77AuP6AQz3recveaZN95ZjSh5kjnt1Kx5o1U5g3iWegwSkvtb9QMd9krywxJ68TRCCfV2zCvYggKuTeLrt",
  "key14": "4AtD2JMdyx1ETg6DFzpY7aRqFRtFHvgZyZDPXiuneJfHGHUSv9kCcGuo6HnMkJaWdXQc9faLAi4YKX6yxagEHbTw",
  "key15": "3c62AKdnP1aXhWVjj1VyUP2d9c9AP2nxmx67XihJQk31UvCFV4vCbKcZ245DqSaRd2cMrb3ncAMX3zJYYD6CwGYq",
  "key16": "3Vbw6E6riZzUGfNEYBGBXh5JrsJ9yfQYhY8s3Xtrfm8vP77vUssa9AxZ6uoPtTwJB7xwUkZ4jRtUkpzyv84cKkF7",
  "key17": "4gKMFRLjABaQdxhxSpyXC53avY8r6Bb8hLPSqemvKyVUZ74Esv31wUqGpdRahGns5nDtXXrrBMgqqnYyi3q9xEDV",
  "key18": "2eUmbT3aJKao6c1RwFBb12RR7sR49m7mCdkdAzKSaMUzHBboshnRiVq1uDpfKazdf6HbQSxv6UGWXydVgqLKr5ka",
  "key19": "6KXhE4EUfdZ8HiAqTGyxovr8EeJj7qxANFXFMmTwYMuaUd74KwEpLcVc9Fj5b86mREfXy8NHPEyJyEkgdjscbHw",
  "key20": "3GyLyokbBjfBxVgzfpCx9B2WxsfCDWYQQcoYgHJXc1to81biX5ntHtGvbi7M6eGn1Bs7Pra6oLsXyrHi78PzPBmr",
  "key21": "B2r8WASw1MbvQDtcDGCFmK2au3a3N51heSBoKc167gxmoTXMhgCDxjMN4rsSHnqishpQchJMmuBCJytc28yUfPa",
  "key22": "5F6wAA797yqicY7e2KbUziw2z5kVsyqDn3QVe4MSGsBWDZabsq5hrY44fv8BVneYaQPZaamBau4Udmj2HSbEyaGM",
  "key23": "XoUSKWMCqD1uc7JMt12k3kZ8R57zM8RfUbwE6yh54dt643FguxZGjorZYMgc7ig6pJoSP1DkcPMjLfpz87ptVA1",
  "key24": "5JAY1QjNRnaeCjvV9S2qFtCT4YDK51bXRZ4BKuTFBD1PaUiDHmugGkBjTJGfXxyLjVELzk4zVG98SHYtw8PBPug",
  "key25": "5NseJUHo6UnTwPnk9zYmMNE7S8jyALrX9McvCedh5Nd7kT79F7CzUjuvoc7mHxG72KG3jhUXThWRvWL1nGmxdPta"
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
