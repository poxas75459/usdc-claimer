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
    "ZMwtKTjfSMnFuBqGZSAD7VURp3hvWqgUecFG4CdHXMRMG2LPrsCryySQ3a7GYE7D9sPC2dDELAeLC9zeuZJbHdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f93QaVmS8u47M1LzvTXxvN9koViGRVcudkXecqH2fj8sgFiryQqkxHPCkG93RQCvHuomrSARKCfFD8y4V5AkHe2",
  "key1": "3Qr2TPS4YwVyhob3kH9UxiNChmL7T68xeAjm8TSkWS6qSxx2T1vWw6mjSj9ZM8aykzBUNRFPGz2TtLQmT2z2wowF",
  "key2": "S1dGyiz88PK2fSRwSCyLRC1WYsGKLyibEf5BfkGXcCcbJ45T3YSZCPnnG6J9y7L3Z3Nt7PbHBLjjuD5QDvK9Ujh",
  "key3": "5ToSC4EkcuFr2XE1YA7fWPz7Bd39LBfPZvw3aPQyncP9JSVafNcUiTrzxrFp4P3ryK5fFFuS3u8ja96G7bxuKHLi",
  "key4": "29mo8BgfWLYYXZYEJk9uPaMd9JyCMXSE5Ygqdjj1EyqfxdcriWSb8F6r3qRPYwHPNxaXyJDSndtAsaSa1EsL8e3J",
  "key5": "LnHtLeY5k2D7Lbi23A6Uw3NVUQNwkH4cgLiNN5mHaNTf3SW9mggiak2ZZ2BVQgnCwqiDvbap4ykw8d6jqPdbrKf",
  "key6": "5p7fwj3gaubDVK85EBTjjq2W8mQkwz7bV4ELoXZm82jF7QPdCuqCjDHKeTuRu5JozGY87cyb19wXF77x4DH7cNG8",
  "key7": "3nbpyPf5Cq78yK2jsbccrXGRx5QUdwj4rUBvRcxHcuNc42wMx1VRJRn6f6twkUs8UHrsWEKtvkNSW4tidmqW1JBa",
  "key8": "3mepPS3BzQGs8CeJyYduA4hvjXEGkKZRQMjzScHAxLuHpXkvRCitefkaAoM5DGSrRJD2b1TTB4EPm7urr6Jb11QC",
  "key9": "5JdUp1rwZV86Hs1kQEkgEL2ZYKiMxsknezx3E2YvH2seSmgxvPUoDTqwnKkqE7CAdpdDycwhV6qMaBdZqPVkp8nL",
  "key10": "4fCXDCVKqs1dyVno6dFD7vGuCLnbFApFSW4PAkqZHgvp1Yq65Srm3Pb1QVHFMeKwzWH7wtTNX6NCCCg7PzNJK2vs",
  "key11": "i5XaNDHcGr4SJwaejfWBMMZbdR5JYYXMtYNTyTXtPqjmdrx29S9D6NmbdZRbEPxZqFjrszH9mr9GJciQedVXSTf",
  "key12": "5tddc2EDZftZWViEgen4Hw5hiUrbaCHmuHqcQWbwp9SNsF95xZuCsKjC5XbEwem9RRgB23mDxhFZChRkYnW8kUKu",
  "key13": "57BErd1JXTQEdJ1NydUR3zJtcLE62KcmSbztCdh8UYEGaw1hiuT2t7ntdHpwTqcsci7zS1WDhsaL135DaHhSQ11K",
  "key14": "5LTtQS9sM3zUaFJY38T9EEvnuetXKjph5FYuS56qLaJy11TAvUx4wmA1mED8s1i5RBf2ZZjeU6dRARBD7Psu7QoB",
  "key15": "2YL6SFTVpzMz8ey4rpyGNLxm2WjnopYaWynBTaPeAE57oYHKeVD64aptmWobxL3qkZYU83hvCJGEETSsC7Y3C4eL",
  "key16": "3N8YSd9CnHYE4b9C6nnPK7GqayUc9RaHKPS73issqcAQtGEGiekNhcdYthGEngArSitFmADd33wvACxK3aUCiD4u",
  "key17": "4d2ZGHTgEtTgiemhaE6ua67kLXKWfZrKpYNG5q8EtasY9Nu2dYhk3Q49qTpkHJXeaxP3JDoKR5TTwLnoEKsWu3DH",
  "key18": "4KiFieTG8BABAS6FBc4i16t5Qcz1LVKLnWMwRYsbvFSzEMRHMc1QiaG9azrpzh9cmRkDYoQBKTDrWoHH1Q1ttytP",
  "key19": "5GRYnJ3t3ZYMaVcokRWCcWc3yuNDYoGSk3nY7igmFJ7N1D1h9zoN8Mx13CN8J5ti8cbiS6JRC5VK3DvWPFqRb1H",
  "key20": "7m3jHQYFSHiRfDfpiqzBzRzabemfA8KTzQ6yumqQeAE2bzT2kTz6cbK22W8ZQ8ZQWoaX8PyCtFNSTU7LL97s39W",
  "key21": "5iWvJgdAUJVssexKzvgWuKjANBfr6MSXw42j72XyCYY3543iL6UeuNkntdD5VhCN4z1T9kRMp7p3zVrHwyHQHUTT",
  "key22": "5QDm3oWdSZnjKLMXujjTXVWa4A7x1tSprNsKnPosoxg54e2rMNWfBH4HNFKvA7GE8jHvVbzZCXaNMnJ1icbZTWnb",
  "key23": "42GcKtPZhEWwhr6NRXJpHuarDWQ9rkVJUkHGkAptwfK9kaK1ZpzxwrnqShsjvxid8JBxq8agSM8AusQSNr45kzjD",
  "key24": "JwUbDdQ9STKFpCci6a6QLP9TPCXyg8NK6mA2XPqqyfHbkpLqLu6kvHJcSqmiVeDY55EoSQBgZzeQ9bZ7hNEraUx",
  "key25": "4XGPTYSYo7EgJGxTCwhAKE4wNJ1nveYe6iMmQXjEGkAtWKSWfLtFzw4BwLAvU7pxPrakxFg2rTzcahTLjgVMndYP"
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
