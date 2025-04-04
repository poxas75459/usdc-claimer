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
    "5JVrcMGjqyRuNo2Wmu7jut3yJ8vo9FGqohwXp7o559Q6K8rfkCwXuwxT23PrBn1t4XUM6Sm4QcabGNqybJf8yd8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kBJ88CtaerBpZW69VU4CQZaE9f27mMpNo3AuU3cdXw3whyrnjgmD5shug9mitp1fWfHkfeCpnpoDJkX9ck7UKj",
  "key1": "33KgmLGVH1oU53WByfrN1otL8ca2eDstzjp3QKrq9va8cJ7YLjd7rJBnU8bWS5PAzixP1j4aiM8KeLJgzfU7CqjJ",
  "key2": "3utmq6vfeZogJaGbEFktV8KZYfdSxBkVh7qBZMiX4WRBKuw9NfevLvNawvH7CnZB5cSH1WCGK8rZCru8sevpNgqp",
  "key3": "2mQda6bx9JeZLtH2pKEWdCV9FZr58wAqjEzMRY6wuqS7tgfpAaK32LD7ti4dHK5GetnZ8urWv3yjzcx5PshfKyQ3",
  "key4": "5vfQEqvae38F7zbfgMiwmZU1sWmzCnZx6rkpEzNfL1ptBKFL255FpSFUwDUDq9QLYgBwTTPCqf6nQV5vvq9oEsBm",
  "key5": "63XAPDbLRaLewCKU6786Bq8LkawwcVCECSYse6YbVHd2GUYvSevPeCGEzg3HCzU7jkRJmPQErkpHnHaCQx62FqLF",
  "key6": "5hJa4yGupMYAPZ6TvnYMDerB1UEVXZefU2wUUhubUH55KU37VPQhPxhRFkfqaBTfcEv1JXEtxGLYmFiJgXkBy153",
  "key7": "2oDmvPepP8G7gWmMc2kyvNog1FCyN3d2ypbBRQZat8e6bCkAv9hCEbbmvAjnnMDKeZdYWsvX5eFofNycpmjBAFiK",
  "key8": "2sTc5MS4VqcBFHrLTaHpvvi53YM5L4EpbSnDDZ1LraPwLkjH2ydZEGgapxvQ2CVdTaHPpn1C3ZZhdESHMjQdxxCE",
  "key9": "3r9HQgrwxb1hLG6Qb1hPZwaji7t9K3M7V3nNrTXbghk5D5g8Dry5QFh4PQndhv6dhn9j3r1qHiYqnt1edq19ZNbV",
  "key10": "envhb45kgcDovneN1zktFrLA2Thu4hiQ8SNm2qwULF4QK8R8GtiW2ZUQSbg34aUEyC2YZrs3P2xRYmCnNRhtE2Z",
  "key11": "RsJUJxpHmQT7ZZEXTsgoqrq2YDgh128uiW4tKEXQhJKvHfMQz2ncVtWmUJTeDiojoHhTdVD1nCMRN3Za7AMmhBH",
  "key12": "X34VUivyvd6Q5w9dVbRyZdfEebcNQ7WYhXcnWrihce6fGrYnWdJexN82aFr1KkxrCsXW2JCrzCcHfV6YvTuEMZN",
  "key13": "5HVSCo6JxjSCu8AaTWrvdGak3qsBuzNNrhCRbUXWozdSnt5SiFvAPtEBHLFLGdTKvsSCRSodcmTC9KRcMbjthS43",
  "key14": "45dDohZb1siH2xgBMvxrKnvRQyyTDDLoUgBvARCRaHbihFZPR2Ev1JgSYjWn4CaM14BVBB7eeiJYx1wx7nAJ8oga",
  "key15": "48Cs2CV6mf2ySMNDsGrJs8XM2tS3dYEvM6fCuE5u7ojtWGnncvV4qLx4DwhuGp1392CSMddANhikRyFMk3b5Ezni",
  "key16": "7DY8Ltb9V74Cdofe8mdV9t59b4HS5j96bSE6YeN3rjfDZaNnPGd6aWs9ThTLsmDD77sMUCfNDKiGWduz9bSHbfJ",
  "key17": "K6QrZHVfnBi5Y7eMjq5wL3CnyTXMi6P7iKXtu9RXRQc99QdUed9u77QnzgHPfvFyGHmjeS2BaUUu8hzJgS3XrYm",
  "key18": "4SvkPUHG3GvdUrn4GktR6h63cAggKbCScjT4WJM5iwcaekv69NYrf2tSSKyzuMepqp7P2jULw9UA3BAYgMP6AcMQ",
  "key19": "4WkeaKnSfhdf2sHMGYng2pnbfVPcV78y5QBoRMEZWa1qg3Wuq6u9VRc8GcuUnwZRcsvg34Eff6NRuUi1qMDH3sEX",
  "key20": "kZCseamctVokTcrF1LitqVhpq1k8YG4G7mV18uiN18Kk9hbnDBtKgciAESiBmzuKXw7yN7zyxeqVgeCtfWgg3LY",
  "key21": "2fpNY75Qc7qcCB8zb3VqvzDcw4oVmtVHiHGqrYPHakrGs2UaUkS35GDjpHFeefQCMX2a7EUhJw28tLvr2RbdChvE",
  "key22": "5Y6TqNTJeLjSSG6DVfwnZqXpf4BCzLC34QyuK4MB2Zt3jSYSzGxmNqV4LqsdLBDWvRXRSM6D7s3esu829X1JYtqv",
  "key23": "5zUWjwqDfV5H181oUyiqdhiGShZWBSEpfxEY3qo9PmvdXMccysjzZ3sArmytxTW1YPrsCnqTPp7uBXAThUT6r63Q",
  "key24": "62grWNcDDroiQNkj22WkD5RYvnL1cjkBoGnrEB6hpMJwKbs1gi5G4AouY8zwBcxZkvfxph4UmvD5sRV1xtu43xj7",
  "key25": "6rvhh2ccj7LSzk66rnFc4oPuS4g33vsgn7wrwvhhX1LnbExFL99pQk1ZzgHbZhM4eioCgtTCYKZXHHMgMp1NdAe",
  "key26": "4F6FbZCuQktsyovJTXPUQMHZGvhpp3HQ9PEkfc5T9mYRBaV1xpUdfZC88HEwtRibDbBmWGSUgap3Anv1v53JpVBx",
  "key27": "thjNzqRWGyZmVFrRJgyg55BTZTs5VF16Q8XHsuePWw8kRsmfyCAxTL1pUck772fcfuCyFGpdLBY6Kg5KNqXi3o3",
  "key28": "tw7EM1WZRfxEzWdgyTVhFvZUYPFqvGiZyFyrofuLMrKpfCRxGufkbcqP7QRiyT1r7tbCpBkManmgET6LC3UnJWC",
  "key29": "2rsRJGC1McPtHWQNDBgPL9E6bYmPC9gzZYf4tJu5HpeyJA2YfHoRvzXyMFW8qBZFyoMor1jjRgVna4wvMFdEGbHA",
  "key30": "4jkpgd4xVRcK5XX7PwD1ZKTJCn2BAmjMK7UhtrQmtZFdYVVPjAZQ2QhaT396s2qk9uzFpaDnMmgLnNDsZNSaDH7N",
  "key31": "5pX3fizuVdJaAo3FajCEWBREd68yckXAjRDH6GBRVYJZwYjJw2oZGDRMsY486wV5wA6hM5ePq5DD8kge1nLCtVeG",
  "key32": "42Kn1LPrc6dHJrJ55LAZFh2Zubq6KpZkEZWtV6Wh3uqEBS1idQEfD4vweN5JwiEYene3MSuZxWqjGF1kVp6NZtBA",
  "key33": "4SHDsqWFKjzeDeEpTNeGu2pMHj8YKSVWsjuGTdSh6Hd644ghGzEQGb92bDoW9t8rdQ4M4zXGCr13Gt2J7hpxxzwk",
  "key34": "2X9W4rPgjfk12wqnTxgvLVmS6RkgRU8tgY4nC7CDKWUkUC6KBMkuoruu4zcDuhqvMtzXFbLz2NtiznJdaq6b3H6E",
  "key35": "wUzWT5YJj8dhsqQeztqCudHpuZPqkiNCZDqGoR52eunmMiuJn9xaKK6bXPjbryyiSADk8W1csFdQhgFv15ZhzkF",
  "key36": "2TRNnCDdmo5ihMe1VrfTTwGYgc1h5peX3Lp1Y1VapRS4KyVGh71SGkG6gA8GiW9s3ARFTBG1pvDYrwhaMLDn9Lp6",
  "key37": "4MpoFAQt4Ujd1ZTCSivseDjtqb3h9HF81wdu7LZbBziHZd7cfj8ELDe78hZshHjbh8v84HrE2ZS2fUW9qsw25ip1",
  "key38": "2fjGreZTEjFhM1gzxK32Jw8Y6NGSzCvvSqwinCw8eSa9D7uZk1LUoLDDQs7hh8BpdMsdnyt8XobPpE88yF5VfJ39",
  "key39": "NzB7PqJAxuZf5kCBAnKAYRV3ymjKxaZmESS7z4uqVQhMungjJTAPWH7F9hj9ubNhFGCTo6uUZhHu379sNix1f7H",
  "key40": "3ciZeYRjFMsTUMjGQy8GyS7aPAiexXozo9ufq5vKFi3Bjwck3rxpMuYcQjGAgFJXGtkFnjUaXNm62GMTKMGUeMcg",
  "key41": "51GL2bxtBbyvak9Cky2CzYRVy2daQRhWeNfqpCbiXfm1nm28nM38VsFA1Q7HhvTMD8NmjAa6gFFfcMRJwcvN6Uxg",
  "key42": "4uGgzMHiHFmqHBYtRpWNm7A4NgH8EE3q27rmZvwtJpmsWnKzB7DVqyJqjzxuqS5ZbWqgHhu88Ds6mTHZzkK32CXR",
  "key43": "95XhGuUH1qHSP6k54hM9oDJ5fWpRSSGmESyqggyMkKBcD3ms4HRHR6iZ4pJoWTxpUWXe68XMkjqeFwXVdaCvKtb",
  "key44": "51VU5KMEQo2EdBGaMx4EnDjgN7MKyYZE5bLrJHuY8D4jXmhi1aWkoSQMUDStbRCbkpeKNX3aibAZptivw73x6cRg",
  "key45": "nhEy8ZXSpM5ESCWr17VXvcYikwAo8dGKCVj4zdGAZxyRSfhccWW2dZktMx24jQbSrmBmTPgtkTTtqGM4CMbTaSV",
  "key46": "346XEF1WPbn9HdMDQbx6cKt8eChMjRVWmjBb3teSVQqMqmsohYiQZWCYNaJhDw7jSqzR5Bq3ntWGJGJ4oPKM22s9",
  "key47": "tpCwojVVHXkGjPHczH4yoHrPPwxzQNioqwB9iZS91gvCsyR8zsxJuRfNme1jHuvSC5ngX9uWJEuc4PsZTZ5F755"
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
