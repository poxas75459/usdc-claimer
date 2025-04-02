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
    "3uhLKvbixgaQQPEWKX48t6KVUQix3bDikigeTtybPxAKAs4XkAnawS5ahEJvMiHeSmBUg2EDo29W9EGWYkXmakzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeVyXgf3SfUvDKRbmjYTdbyLa3eMF1hsACUBa7wYZDTzBNYatCFjpxDHEZMQbpfTGQyvH4fvtx1EdTPpUgoSaoK",
  "key1": "4BDLK2zeMas3tHeBGGjuY1QvyqqHdsVJzNYECQokF4YEbvQT2wfZHjv7SU7FDSGtxsNJTyDgEtoW2wex6fYdrFga",
  "key2": "54MvkJBBHDMuhLbF7zE5XPQJKPQwhUKbB3WeyvvTjHvUL1hezMbeDY457HUbbuUN9beajyyHSPeu9vxWZbMxSThb",
  "key3": "28Gi57aCPkQP9hgss3tQA7wSPTnJhpAeB1tSLB5ekjd1tLuJnma7DzavAPkvDUNhadYM72xsmjuLjWDhYxpJE8Fv",
  "key4": "5PdVB3fotHyQ5MrHgtxYsMvQMNXdGXy3AUamUc78ePShomXBUxPFxA9Rh5bvuopjh6wUuFZZjeEPUD8YHtr5QycK",
  "key5": "UvnCDEbqR98nrWto4qThyUF8PS2i1qVtaEyNJ6hr7bnzxsw4sNT4iBfXUHQ99Ehn8eDxEaRZtFADc5KGQekNXeo",
  "key6": "27ZQacUG1DEUj38ausDhDtyPsBj5zBW8t3MDmuoZqw14MkZPKjRjuonJATxYAKm5MgLxvwz6yjCsBZeFqsCygUgv",
  "key7": "4u28pR9uri3bNvLPSQMVqeqUNRYrUDecNwouCLuwbdw3i3r8ZfbXGoPWmsr923Dj9SPqwoLPzpJkmEJqwsETiQzK",
  "key8": "438KmFY2acybCFsL8n2xTAHtn2e2T2ucLL4CZsu8k9hiecFuWPhNNuynzadcwbYhEXebyRKFzXKbu8LV2FXuRKCx",
  "key9": "3fFBU1rUWmXumx8yV36DCNyQPubQGJVZJcwjZtxG97thEHepLGBh7WXQS89VstVazpY5Lzs2WKHJf6wFCVDrxciy",
  "key10": "334CT9CrDxVfd3K7JV5ZZNmQTBPiuapqKbwRGzC7HUe12YyH5Vku2573PRgvhFBcxX5QVKLJ1s8kTzobvPyJkU7f",
  "key11": "2WMYM2iR3S8NR15SGn36HmE9D9GcoULeMA7xEeug13SsuYfc62xBwz4J9eqr8xVnABWeMP2FLRfmQmq7D14RT3R3",
  "key12": "5k7A8tRiVBDWbp7Drd8eo8HWPp761WsWmJ8KUX5RW6r4WcPt2n3YBic41HRxtNNiZuLgRUJCRXCt3JTXg2ionJ82",
  "key13": "3xBZdhvmfnc5YZMyr3nKW7tSXd5C97t1JQoUxtwvXMssLJH4AzCVgFBZsHLkEyXgZ7ZmMkcyMsrrLWXnfZNYvM7R",
  "key14": "4KHtJfM9vMkSXU8vVtDopUFVtnrx4HiLfvWkEYrXJfioqLhGMKgDwQsTormnGRWHHDP7BvS7eb6vWX8UL1N239VT",
  "key15": "5yZy3FgUhWc9KNvkoyeEDPPqznCHpPpubpFRpFhjGZrpRUitEoEwX1iPNdMfTo3SaX9rpdDACxyHz7ca2KgjGeE1",
  "key16": "fBr6fF9nv1zdTMYXvBM2nMeGGAw9E75M8dF711SUqgP3JiLKqMiWorEaNXTkVM89535VuXXm8CrgiVouB7CEtT8",
  "key17": "67BDoGJMEpT11MJgZzFDZ8AuRNFVfbZ5GDaSV2amdU3guCB2yBwKYyHn5ZPK2iDiTm1KQgKCHSFSZcugRTgntcRk",
  "key18": "2Vxn1zahNzhpT5DSsU2g48Ch8EXuufL5CJmxzbgaiMP6FMtt1JtXGVHVUnZhmdnPHHxqGrWStZnwuVRCCjDpFJhn",
  "key19": "53aZqmr6qFbze9wdbDar8wteS8RUAhNKQUMjbgVKpDBTqFC3GDZz6mdC5GfmjN9EeUw8d9Fw1VVd7eXZ7GieKnJz",
  "key20": "3xtgXCKiRtNnrMNdR2r7KsVcXVHxadV2so9nWZKcvtoBsfe7xJC2CxsgaryXDdD3opXqcZvQhzmZiVKxba5Tsw9m",
  "key21": "2TBjk6C1Rdony67vknY9KQS9u3vDL1fVwVmeHYaaFgXguoh275Yinh18zqGG79H9BrtQ8Q3hdSP7mfEVrBdkwMmM",
  "key22": "3jQuPaK8xjP9mM8TSA4AoBBkfmvxGzN37BmjBmrnk2a49LdJNHuibtqvZKT972uVvy6FTp2papEhaYKSh69Qp6kR",
  "key23": "rgve1EfnY9g3rKX7xozafFkEjNbjDr8TKDTmgn8W4bT6HQzmpKVfcV54GyDuEuZrKXaUX7we7zyGeqzhKdDbi93",
  "key24": "586wyC9NLg6ik1ZSTeq6tnR3aAejSgqJX5QokBCRz9W7QC8YqVLo8nufUugHKr7CoAi2y3riWbJhnqMncYTFLbJe",
  "key25": "FYPXXS2i7HYN4zLten2KEDzykVzLAr73Tudf93V8XFqzNga78JB1JEBrtv3xpFFjt5dUuPpDKsnkcHKJ18GdfQn",
  "key26": "rKgqrYNV6t5FWWmdztjkcxvbYfL2xz6n1oVCbG53kaoo4XHCLee6t8bSL1UdVccBB3eVu1SiiVck6JJ2DTgCYX7",
  "key27": "5yo1zrJzpQmoSucL9NPd8NwFWpnwmPAmK31UUW4ATDVDK1dosuJ9iS7txrwdbZWvWdetM2ywrJdnW3DkBfrdTKYa",
  "key28": "9U3D94G8PxRjLoXHKg9wU5gNSb5Cfy1fc1ZD7ajjEii8gp66U1HSwWEybRT8v35k9Vz3ZUNukRU9RcPkW5UaZrU",
  "key29": "cCjUxvYQqrMZdM5aXCgBiWwtfdmTVy4GNXkJVXqjuYJBXCxKtphReZycJ9ZkQHEH6oUkwQdG5QiPWQmacKmfSRk",
  "key30": "5xJPjwocGu5GJ6NKPUHiFXpMvzDgmZYjZrFAdcKBKNziwCpBPvr32arg3DAGNXS2harBxCckYeU8Cn5zNhdW3dTU",
  "key31": "5YkiVq8uMQ1tZbfdw3ZSNyeSUYSpnXBuj6oYDKnDxEAWBWCYkzFpeee5C6sJPAhGYk9hnH5NVUddqau6xtu4Wv8u",
  "key32": "5Gicxo2r6kWmMp9y9cr2PhsmJ5ZP2pQrR9JycTPZqK2ZrnyphFXsyUYrjpYkxT5C5QHXNF4EjqbHqGZZ1SoY3rZX",
  "key33": "5t7YvimLyT7cyfCWTaPnLkkyW4thudR5w8sJjFkzALiozipojyrvt3WkQybzBYjCtPxMQmUSiGu6pXatX7NnndUd",
  "key34": "3vSZ2uADFGKPY3ynbZivzYtpWo3qUE5um8YAay93BoDkH2Mb742jqrfxYr8szi1zENnE86nLd1WRGdLaCAHevAnv",
  "key35": "4YBhieN9ypZsNFmwcV7BqgPdwNd8bJ6yxTyqR5jYaHkX9yraZ66m2cCHRuWayhMp2QfM5NJtmWMhyVkVFB972Y7w",
  "key36": "4GrrKszqgnDda61YJWGiqgiZwfYqfXvzXGyZBVvtDgzfpmY39UG2NAcUhr1W8y3ufhUJ7CAxLzzaKM7CT7Mc3uFU",
  "key37": "4K6VMSYsrJoTwgR7Zvuopx5SdhjgMqNWygfy6AkXpEFRUd67wt7T8oyWGrnv543e3DFo4YKKUHJJd16T3JTYga37",
  "key38": "ozWzUWB8mu3w4nNJ8JdZAoa6rvzgrFt9NZ8SUNQbzq6WWDT2YpWaD5r2idKwoVbosRjfTjtsJ2ckoSdj13HdKiZ"
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
