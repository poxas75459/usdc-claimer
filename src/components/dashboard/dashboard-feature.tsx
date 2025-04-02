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
    "51xxcsHYNUP4RrWm1WJmUCSTbdyxJd3tKuqwENhgXmb9YsxFkY4Fok9ZfCMBfh5Be29vYCunXpTur5AGp8GHeMBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnWpBverLs7i82WuBV5j9oBTRWFDbhyoSXaVukTcuodakvaVxpLiheJe8SSCLj1DymQpHENGSRw8nYpKvJ1A57P",
  "key1": "2f8GsmAw1CTS2DxGacrKMb2GdM4oPphox5TSxzcanXck11cqzqGWj6LqPgmLoyHcXNjRckxoi26mpFJZkKbhKZro",
  "key2": "2ycBhqDutJCu8uj5AeA4c4PBeHemSuhZ5P2uMh5DAHDFiJeLB4ED1Hon4ryu9CAetNFcgNZZYebK7rcGhFV2Uqn8",
  "key3": "3dFbyxpCKHvN8XokCWSk7M3kAL5iadg6L2J8P4XJFFPYRThXsX3kRgzteGypG7kWjWUw11GZMSbMtLkrGUpvQzVH",
  "key4": "5nMyKaoQpEY7LVBYaH26SyHCJ4rtrLqJkkWZw7uZsP8AiBFhjPF42cnxtzhiKTaqunb7JLmASS3oBg9aU7Wzajfj",
  "key5": "ZU8cajBHpbVyhR5NNzfxcKJpRC74PVR6XMXmC6a98H55JDB6zzA5q2Ear18tPS5UkeS3PteE9FMafJyvGKsMbCm",
  "key6": "2R6TkJESoSajvNn7moCvzR2Yw6oBpiPtEvuUqp14GXJpFFxAxK19CP2m8ZWmYxJJE85amEPxdxxy486WkdSaZ1eo",
  "key7": "3xof2P5rkws1QTpjMkFbFnqvmiqTYRgNMCBiCPYZk4t9kPn1CfbtvhXQnBKzzn2UGvfUtUD4eN5cobSabRdwc3SG",
  "key8": "5HAqKEcWdpd4e2159HQEJZoq7bUjmPWcEBap6nV3o7PHDi8isMhzE17NjRwUduSwHSvMCE6AjxMRvCdxB1tdPpyG",
  "key9": "oU2j24dRZiHAtvKhCUjcXpwaTsFtQaRERuG6jwVcsH1erXNTW1xuwDWNchyhZKgd8VcsCtUFxLp4emZ64n9uzfJ",
  "key10": "2EA1UQu4wEazGAoxdiq3fgSMQE8cWvLcUmBEZSQZXHtZ61BhfdT4rD8WsxEdaW35c2dbY6n2Cr3T2Gfk5tqdufZt",
  "key11": "26Gn1DcCYerj9q9QPH8tmzg75gZDLqqaFJq6nE5y1ybtzPtyBKGYgNkG2MG3NvKpViwx6yzZXGCEFhQxpAQnWh4e",
  "key12": "3DGKZQXUV33uKpk3vRzryzCTQrRbPhXiGdb3xLHuiKn1LPtV4jWY6JW81ah7iksBkVp4tjShUyexj6GDfiRuMuEU",
  "key13": "57FHed1t5Rs35wj14pme8LdWemaaGAeR5ZpYqRpoTTChWDysA39RnhAXJLXXkSNytgaZQuzSe4KzUKNvkvs8yooG",
  "key14": "4UDMH48ccigDgz2o2puvHCoQCWgWVZrGgqycmiMKRTEmbsepGdybjeRvSdcoVVeVU2Vhs8xuYNjXJ6p1CP1gE7Rf",
  "key15": "56mCMZNEW4xLf2yMa55tPu2kqGYq6rKLQdZBh5hnrYUdAAUFVBmxzrPZBFkkwHM9ZYE7JmyNawRBeq3CHmzfnSKV",
  "key16": "4FQEpKY9s488PHne899me4bmmrVNvzRshdkfwAXXNc1gbPYCnWUkYTcUfa4YBUbzbosHTP4swSV6XfiGvecMdYha",
  "key17": "497sNDsGJ5uZtEmfJUDzwKvH8EmmXAvKCwvb3DgFXfNH4UqZ7ZPG6pb6DHCtdvZaezKeptxaanCevqNj9jSjH5pF",
  "key18": "5sLnYSmj8yDf85JnoDjMQDG9eW8ciKUT5uMgRUWv8iVtfSDJ4vtwwdp5Z6UPNzCN9YqdZvTsQ9qW1mk5wadTjBr",
  "key19": "3KkcZtHnwumVvKsbEztB1boriP6M8gu8AJmQ8t3KohWUyKfC6XvAgo48dhbAT27B4gcLrAw15jqz3q7rpPJAWr3S",
  "key20": "5Jvr7rR7kmabHRbaZsZDmNyZyv7mFRaz64ytikeMqLW84zyFeDTKeXM99omN4GkcA3CNRYZgjchg9sipGVvRZUEr",
  "key21": "21RgU6eitXBwvYASodJYwTJBNLk9GE28cxxffocvN54S8VvLP91178xyqHUrg4SXwLyjRugrEdPrYFTmmfZsfR8e",
  "key22": "54Y9rhCknsCfw5jJJtZBXF33Csf6UVmBYv9JjwSDHdLTxqgmp9U3E4n4ASRhxgr7aLDuXAbjGHFD6J7efRb5nWzG",
  "key23": "2xNAdh8akq28P96rAynMy4pK4JPrZfLoE4d6zBqN4rsouvamRn5R2GiTvxKpv5dcdmWDUFUiJhpH2bVayChyCwHF",
  "key24": "oVieFU48nJ83g2Qaj3HHPe4X1uBgYot4oy2WsxbFiXtrXEoEGWiGHnA6zRizYScjwHyr6HKp5DMgG3ym2PkLosA",
  "key25": "2iCSzGRBL4bMHi9vrRqnWG7xsyLW2dFExcTL9nyauoZLC94QPpbAPCnGpmgHqiEFtFmkxqqAw6ikRkj6yWpHUWDn",
  "key26": "28CygMAWGyRYhsEdEFMYqPw3u9buXtUDwFrX7bZj6WGVM6TpsxR7UbvZPBANA72Tzmv8qnh8ZNA4cc5uynd8GHs4",
  "key27": "51xhDTZo3sKCJ8gBhYSTMmfUovDdDtSDYSJYiJFdPeZwvmQD7JESq98uwmhUK19D6xrzKuEkYMqdpHa1if4Wk4pT",
  "key28": "bHBXGDm4X2aMXsgYu4QuhnVrtxE1bSpM8UqSxh4EcHy8A2LXG54JN9FQhtrTmBjzA8cyfxwPJfwwZWzBKCnKSuT",
  "key29": "2a8Xys2SR23hvFwHraYvd4UVNgjxBAXE5MYmepY7ayuNUnvGmqgwGsLiPPLoJyUnqB2kGfa1GCXJuxDita1JrC2N",
  "key30": "4JRGYHoo8eRgxQwaTnL4yjpwXVmqZxupK8Z42e6mUmuCQM6wExTuEwF7huWmfBJWbXQcWHgftPN9ZGamvNKtUeBk",
  "key31": "3jCvm21KfqAPmcNCrdjNJhpcWVHp1RjvEKa7puEmyQLnQPY9sHUtkBDbFZGvNLg8rmymBJ75t7oM5caVfmT8meRL"
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
