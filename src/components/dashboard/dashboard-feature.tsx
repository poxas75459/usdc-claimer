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
    "27ZafnAWq7KkcEpTTqyfGZFKMn4FrVR4G9yhhzgLc1XCicEErpwVD5RukcvjUrx1mksw76u5g176juKowu796Ctk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LeRYk1LXjsjiEmM52mDpu5gdL27KXWXKv1W8Nk2rqaJ4zaaXNEniHqsw4U2s4NqtfhzuwhcPNHaPk7DgkqPAQTc",
  "key1": "4QbacfRioe74MZduLoeCzvxDCnqQqQSRtEF4Khd3EjJKyEiVr1RCo9qXYAfiHboc4fV2sp8Nkngh166933Be3XV6",
  "key2": "3j8weQWsLwberxmNUVmy5D9wXz2SVQU22pzjvbaUce6S7h6i1dEqFhFEhyPSeVrcoHiBV2qRnd8sZrAGbmNUjnVh",
  "key3": "rZwjtssgrar6wW38z7gk5uBJjTMUFL1pYJm7LY6BRvGnfL7b7KAyQSNDUzkhBJL13fskFHSdRBEkg2Vt4rvFr4n",
  "key4": "3z5YLg1Cu6iEVwfHqmGCb1c3Pek8n9BYjeMjy5tdMGP7FNoHgMbCU1CvGj3Tnvn79eSqFwEHDX3ifvd6TTNZXTYB",
  "key5": "5FLaVMHdgF58iF56fFBjWviMB6GRVEUypowNBKepEB61y8PD2MRqnoANDXUzduKbaPLqtJB5gVHW9XkHZ3jyHANX",
  "key6": "4P3AgKH2QEEhiYhARp2YrEinYFk1tRn7JUpAFPB2WyTnaPabNJDYKMunrKzoVx8AzLx7swsDipie5qRmq3izJTYh",
  "key7": "4DV5YLVDengmbCf8sMvSxPVm2GQpJwzU4MYGpuGASgLXyVD5zY22ZMqvWa38crhYkaDmos273S423CAQkKPticv8",
  "key8": "5zaSfatkEBf3VnvdK7Efamb7XqJEpZY2qbJt5LHfMyPqMN5krbGsy5hT5Cckvw7ZEhcA7j63PEJqCCnPEQLNUNsK",
  "key9": "2LWm55TCgxs2azzktBhF9wWrUZWnsx5onvCWopZwRJ4n41bJpZrAmvKBSN8LMqtWqgQExMHS9M7igZBho3hRbZa6",
  "key10": "5CGNLS57ow3pUWtTdUv5MFUEgscoCn1zaimJ623CcZXQDLjCKy7VAxBth5t66bFKBJVCX2hX5WD5mDn3vFpjM7ig",
  "key11": "3wKeWqcCoDWXPn4B2JG5nH6Ln2Naoszme68Sn8jyVydFCQaV7YdjUiApNm7mKFuY86ybhYgJ1vu6KJpktJbM4gEC",
  "key12": "2rpAGWbm3xEdfxrAd55zYMcGAP3cCPs5JERZ9FqKM5r4W5WFJMUV11qJz3L2TW86SjcjozDhbf9XXeWaPuAWr86E",
  "key13": "5JHW1KDa6xCrof2qCYaYF8jAZ9eqHcmXzrQEzt87ndsxbboWDJj9nmbTbghK8pRkcH58ZB6J4QuLBVX2RfFockA9",
  "key14": "5HGtpstzTVvLNZfs731aSX8RECMxsXrCaJLMPfveJ8AwQ8jGce3acpA47YHhEfh2M7iqwYWtfrDXnQnqA2biN1Bg",
  "key15": "2ksV2fg6jcDQB7Tqx2ugsQpovJpdDXuHMr8xuW9NxuJfS6GhKfSWT6PffSnAJ4ttMDHHBXLWJP7EQ8btx26sCRfF",
  "key16": "HqY5QwrscAiVh44WpVab6Cg7ji7A9daTPD1zMF9zfNdcvcXsod1MHGiMfbP6Zb1m4gotigfhzcqmphW6tV1dJod",
  "key17": "h22Umf5RV6g2yi3rQnvbLzyhaJ5Db9XTz5YkXHdmxffBUrarKkzxfCt2kZcn8mheeCh2HuYaNv1RLNUzWztQpMM",
  "key18": "27C5yAsnkT28jWzxmT6PAykBswu5pYup5ywyD1N95KHXQJgrJvnU11NQ6NfXxWEtDTLBXKw69ix2A87tRyBNRwYT",
  "key19": "4DyAdAukrMWqgHJdofmR1Bvi7eWEr9FKrvMQW4N8cu3aNQ5MZLDWm85g3JukS87MBYtcbZLfXNYjLd3CkMmCnbSn",
  "key20": "4s1CbefGh8TvUbVW9bS5FZBJruYJHwdUhYGxhyyhr9Qaium5EadQKmfK4yHgxYZ4E466vXUfjuVwq74d1GKDr31N",
  "key21": "PoFRsC64VahfYpJYA5m1TBSr5dG75dSVrz7TTUMSP2CJ8mgCE5Kuk85dg5Zs3a3EbezF8gRbc5xc1k92pV6Fnzz",
  "key22": "3AjxxJvApXMAnXrqSh94sBSqNEWBEEmP6dDxD4EJPtaDJa3uk1F3U8wPqr37UzbpJds5CJ5GVjCyyHw3KzcyrDwC",
  "key23": "3gADvYKSp9ixjgzMrqeZcskJurAXsdQw6etEQv6T5cf6PjWN9uEjyzHMwoFQ6AWFx3cCX9T1cCUpb8YXyG3GFkyu",
  "key24": "2vTjxcVC36xwxeZE3DmirG9o9ZUMaLvmmrHaxAmFAR4BovTH8dvWVjDUttTBtddWcLr25UUomDnR8KW5DRJbGitE",
  "key25": "3CzwzMk7Gpu1Gn7Gk4mSBANkrRFdHpvt2wZaGXJXKRokqUmZSFQmTVHapFKVsAXPgdFjYeoMt2tdhDFSR6Xhuj3X",
  "key26": "4NomCSiMwAGCqvJYU5TZqgSyRTzEE8tpiL51RLK1NKXv6LgkMd3gyTFxAjgTKtc3ZJRETLpX9hHMTT7vhXa6iGh3",
  "key27": "3uW5HvDaJWmZ3LPbYPwYsP1mdAbBzWtFnaMQfqaqFDB2Z8VtEbFoeVuR7DV2NpfQfwNdHu8h2R8WxJDni9Q8saME",
  "key28": "2YWUk3Yp5rRBEkH8LPdvGqgRxdgscAGjC3xjcNfggv6BJrhySkinKFjaW76an7K2irJ28pYKWHYR7tUztqLQEnLd",
  "key29": "3EHhnD5QmbYAwRZBXQBHJkP7hLr2uHTDHVsn5B9UYFgunm53brfWRFekHoLkrLxHRdRDVJ6c3FZZNWBYoZeJpokk",
  "key30": "2xpzsqWFD81JnLT2qmTxq5HwhHHSnyG7moZjQwghtzDecDSaAj9KZ4p6KQoVUh3x5iiRaZr9hqiBMwEWgdw8KUFa",
  "key31": "3whSyFPJriw3D3KYFxBMtWThnebRuMv9Th246R1L8SJEuTVuV7vrzsTgRNhM3fjHbkqF3cakmWmH5UdNW36TBnup"
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
