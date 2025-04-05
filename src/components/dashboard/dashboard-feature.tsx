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
    "5AcAm1mi763q2zkXJRoUb3QWxjnSpzihNEPnX1zb57BdJsQAjMKQmovKZG8DTAuWWxWvpz5m8cTLnCgP2YMGB658"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5PCeR2MD5TdquNQfnFEZJd2Ciuj8uzkHsucF7qWzsPuU5U2JUPk7Y6fFZYvekBQ6J9VDV3TS7qSXSHBABRCnsF",
  "key1": "23pxYb4ptiXxxFtadrPgWLx1EKPyN4TzqkwogGeqQwHJcDXJP1LSXRJymr9mtyoc66Pqqt1hmj6ArNkoqmAoDyxt",
  "key2": "5Giub3rGFAn6td89JXeQ81wAAfQqfHW25VM4wDTkECB2CqbaAGzPcr83afLNU71WUN7vEzvULuApDuDFmHb9ep24",
  "key3": "5mevkNimqyu6fRvmqR6Uvni85rAZ5q6gnqiErNk3o6hADPBwH5E4BHr6WKxpSQLPi7uQsrU5UvjcvkrVgfM1cydR",
  "key4": "4JbFGs4aWUMwcuaXSjvtSeN8kYkZUngJ9Zikd9Hn2L2WPs8bjtqriaS3XHVRWaiZiURbY9SYtJsGKDwsugLF39rE",
  "key5": "5ofZfzWDheY82QLMq9vSsQdTThPbL1izvCiTfGmbtDAVmmyYyFAonx97FuSm6FfzMTZFLqH6HQ3uFo16d4YkGZUH",
  "key6": "4h7skxxphBXXsmjJUXrS8vjThDmsVGHT6iyotC3qRVcD3jRQ4o3Rv9weh6FMwR1mc1sLpDvBucVkvfKRreNF5TFG",
  "key7": "2B8uRo4cuA7qQyFt9qC8F5auHKLW5GC8DQLMYJrrAihJtCfTUzmEvtwKZnKAE8riq1Uwmz3NGTviXkhRzHPVFq4a",
  "key8": "5NxvWQi3Y1ynZPNgWBqTbpi46489X5WEuGy7hoHXN4zd32D92F2Vg6d78KbcWiqtvWPaMrGxmVAZaawiUa9PN3LF",
  "key9": "637QphA8EGa7JpjMYQrAoUn9uPJAekQo8KjXdP18qaSiLwYBzvFMg13AkV2QfP64s89oGQmahh8r4m3DJdRo58Np",
  "key10": "5wj2T2hx5aqfFiQFESxUC8ZefSnjyLx9VbhUKnjs4ffGg55yLUi5uPbaeuJAbug21jqcRZqEVcK7PyLqpb1w4YL8",
  "key11": "2rKZw7e4LLniNaqBdGVnvCTEohiL3Ug3VE46U41QN5mVBsiyrLi5i2nkz6QtUG9FwAXSMMquYi1aSY6BVmZEhh5o",
  "key12": "2rDuwoTjNaHoxxoUk43HwZ7k3tRiJdeY96oV26cAs2H5A8h526ByTvxaBPgBC9vvLEHP5GLHNzrD4wbVGQmpAZxS",
  "key13": "23AQuWn9zicuvHMoU7tnB3mEJrxZCMdgy5kPx6b46Sk4SWTVuYJx6mwVhCmtWVxVTygCuPRzNaaBwuvjez2666hA",
  "key14": "5Py3FtRUMn3LNoTzd3ysZcc46G64gPCpxxmEVYrAoHK9QP4Cgcz4G1Rw78SCnshJHtpa4GbPBJNFCEcDrdnjtnzE",
  "key15": "65cNgCirUZT3BPNAwZo4BVD42WJ9NmXtf9Rkdg7qpKsiiM1YFy9sNXhsrgfdtdeP6A5EE1Vj8WV4XSCdbaD8ETSF",
  "key16": "4fpGUW5yA5N3ss86s2g89haDHFWuz6rkoV2B22Z8wK9KTVJeznmgDmp9VQZfysPHTuwq459WBfFrnW9vPqbt8oS6",
  "key17": "27FscaJbkvN9E6hLkg3Ddi5oWxn8zqSnuWVpzrc2e8QJLbv6eVzMHkYLNoxnXqquaZYqdoqrWHX3vRMYs7ZBheFs",
  "key18": "5aPdqrty1abDGn731ySKcaFuoLRZ2eLJAHG5Z1Ka3UsHY7EpSdjmFn9jkaUE2hc7ftbx4nuj6KgPUJYdBoRji6TB",
  "key19": "ED6vy2qTTR5hgMbxh9o2gNpYSTqfUma2MkuRadqujJDKcwfrj4t61jc7eYy5TyyL2B8qZNz1ELF6UGVgXeK15fR",
  "key20": "Bia87NRyAHqcCH4r1N2L75bKgj1DW8hTbRuoS8U7mYkp9L6desFoxTanQuNn2U5gvNcDHYKKiuY2wsKSorSfV2t",
  "key21": "4qLZuQJQQkZXMmft8nLBJT4YZB5hSAbo7rqfXDioE2CMMtizSzukikr2M7vmJncoacqVbLvM9rQEh7cP7uimK5aZ",
  "key22": "47vkpHgp5sMeJhSPauEjzqA7xh6uby2mD5T3uB6aLMMpXNpPnxXQKC9v1uVoWpuXKCBuHz64M7SPWjKJFYBAcEf8",
  "key23": "29jQmYYtPmowCCz15SWNYVub1YaG5EqTzxYRPbXMSDGK7bvB3z37FH3qvDWMN3G4PtMoc31Sq85AUSG8k7VjavbP",
  "key24": "4GF9do1CpaLPL49cv1gd491qrP2eTRDKZUJ8ssWfHQM3p5xSSAzVa6LxhZS6d9A2hwtfiJpaZsmzSgTs4TmWdFSm",
  "key25": "5en8akQGqWWnfriu4aZVLXibaQz6vrXAmJ9LbQ1EpLyVATwVDGsVVTWztVETDVCMYh3McCS7x7Enr16GajGgSuQa",
  "key26": "3pLP1u3WwYJyoszPFg22V2bDxghQ8MRSQFZE8W8CR8MHxSjbJV4rfmuGKkpAFY5QwAt2zc5hn9no6ovuGx5pB73s",
  "key27": "RK9tXTQCcvbGv7k2nJLAPui7SRZd2ARoRQFAbtmjrTe66sdj2n3Z9EFirZqieeTnaFETcoKytWu3T9XU1DQR2Cu",
  "key28": "4r5Z57kuWreMoQjzzrbFwwLHJJBPp2ofKZdFG9BZoz7X6uRSmPHgLM533hNpg36XTUnxmTL7eURHyNxBnZNt4Rct",
  "key29": "5P2xHEXT4wMVreJ5BzyAcPqnhf2XHUHDmVttKQ4ELzob5MQ1hZGB3tMCiyBqoRckPA84eBVfscTCwLqPwCouasBw",
  "key30": "664kLDs3gZjADJsgRRDNN4iKiLoHw1xJeXDSz98QPk8tt4UP3ERtiaQtwUL9wHtd8ST44UDubaxrKFNmZv7uJDQC",
  "key31": "4pTUG77YmyCBbTj1yQa96seK7BisxH96Qf388BwW41HK8GjfAoXoFQmueEK6QEAH3yPJa7DqxeaFdLQP9DRqopsP",
  "key32": "26aSkNaX1yLsdFmeGzP1oy6QnDCqd8fi8ktJtKdKEUxBKdskrdVNF9jEwXNe7Mrc4JNj9d6snVPba41X9Jy9jbVc",
  "key33": "1xrXXxu5m8vg7SZkcg6JLs9vLajAazicxcVeNXNGM7f3SQyyWgw4vdCGQLDVLsbt7gd5RgresYamFVoAsCFLsPj",
  "key34": "2qTwgEWeUkcag3EpwY8CUJvqFRwbnFkfFccvskbL5A1bHUrUvXU82wd2vWHUe9nkWvDxSZNJyT5fxHhBrG1aRDQR"
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
