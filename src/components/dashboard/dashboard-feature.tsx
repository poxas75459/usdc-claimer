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
    "2eLpnnRaTvSJYh9pj3tEUKYfifyX7F7rJG5hqFCXJm4t5tsftNErn8FRmsabK5sXb2J4W3nZjWPRXWZh2rj9TbDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Ev1pQmVteRf8vAfgyCG76MpT4KoBprHkjmPeUfV88YkdTQc6NYQFgmqAeZj2Z4zrF4RjJsxbqRMhhfXim18tb3",
  "key1": "4GkXKfGBAP6hCrkpVR5xAUg7hLf3xa9t3b7LJAYzEQ3CSvXUfZANap2LSGVQmMT7ZyGCfAkQeeJGXePNNL5Ljikz",
  "key2": "ar6tJdCaUzFvJdbHFjYAyBSjZkysDprno4fGaah5VC8CBcmEgx24TE6H8gtBb4UeDTvadqSfRT3nmgqywTtukTC",
  "key3": "TKMuUZDo3Dq4eaKD4STQa5qeMNYDrwZmifwiZuKFG6RJpvS1iLiJQ4PNj5oys2jWSbPY72MUFDDtEwd7cFgsS8P",
  "key4": "2jftjz6Bqsf8hzAyWZXeN9JKZDo8FBWsbgjEhAKBLu9Gqwi3ajp2QWQRQ1mrMYciqLeKSQMF67bZgCkVxK2Xy4fa",
  "key5": "53hwx17jwu6KPTBPojjwiffogbkLTkaj6bj3XDAy1HPjC7iGYeQSdbDgCB7RnU4dqz2bFxU6vvLnKQaAPECWkxz1",
  "key6": "321c5fmpU4NiQ2HoSRQjFdBthCrP8BqXRQAfMundaK9JyDarcrjPuHZeVEbM7ukxtTBbVUToJRz1v4p1eDySZB5d",
  "key7": "53Q9181va44Y7eHob7Lfu1jz6erMXNBHo6tqePMTrJgtQAHWJSVDDaHz7fmodg9f4HJ9NNQpaaJpWKeJS1Y2phax",
  "key8": "3B3DtH8mJbw3VD6J4pLXBgghaEWC3WLdNNKKb7CycNjTWA6YiUoBdh2SsQf4mr8gxkNDW3249rusc4K9ezPRwL7J",
  "key9": "2v6TZswFURd2pkNwGjBdoxNHBf5AGvfBK55TX35ZxBM3aLrNNWdqz8tT52syoNvAyoEqs1fL178Knxpdhy83A9Jz",
  "key10": "3K1UqLWqVEok3wfLRZhpiMGfPc9j6geFf8FrjAPMMMEgJw4Q8uWULxxZovgGc9hjU1gk4sQ4YzdeHcEZR2mQnq9H",
  "key11": "35ZDvuhtpzRdVgn7rScNfxrdZiQ4XBj7y9dQLP7puFm5ghGf5C4xcEcPEvL5XomkvhbBAKrumAk2KABuUWn118VV",
  "key12": "5FVU4AaWXbQpQHCnJZHSBh8RUk2mcqGFouJEWTaqS4QABq6Lr2mQcwdjCMErZsUNVDmCiopyvnijGQjAjq8rApUS",
  "key13": "3C34ztVm5c8efDQew4Kh4YCwcq8EVpBgDLk51awKEr4y8qecahKifd9LZkqXWdc4rymQxQNSAFty2hUF6Zhrf8ac",
  "key14": "56obSThRdSgCbXCz5QQ9eRn81Cm8iaX4d4SX6Z5JtwF4WqpVNNDhPS3VDgwvqPLzw7E9FrQS6cMGTdZCLRpV47ob",
  "key15": "25sZZBEFSVf7Qa1AmXTu9XraPuYvyBxoP6DCNg7GXnx8wxZzbkNaas5LDJH3Fiv8FSFZqK1WNZpuXijaCr9c9uEU",
  "key16": "2KkAJR7xDceNKUtekDDPSekNfoa5cjs7nzP2JVvpukw7kFw7DvGZWBEzL4LXs36HrFDiBri2eWMvXSi43rvcxAw7",
  "key17": "5Xna8ARBVAzxTe8ydzWJPEZM9ioi56aeEsR3ECJF23QasdjeoVr4Uq2mHAWoLEo4TXqMrN8e2NigQpSSDDBivUx3",
  "key18": "344gDx2EAuSTHHDsi9fKmSNR1sLWpdTgjySqdgn7AMc6Vd8TZKhJePhYyGJVyFvo5rJUgnWbbfvJWQTGkKfDSQEJ",
  "key19": "2fTocXo54Jdo3sZL3cVX5PNKnTvtSwDr4GRqhdw6Q7UJyujgTJ8xbUgWdXLhAXrxqtAUsUSZgHJqefDnquJb4Bg",
  "key20": "24qhTVr43GDwJXmx6mpMsNmCEtwQmtahePeFs6CHeHYg2NFSwfivpYjSfg6nFn7RBwawbKsatUWxkwxuPww9dfM3",
  "key21": "595gHAPysaHYJbsj151F4KpcRDogFG4rucsFB8Zf9CXCc4CfJgGCTkFNgPfHN19kBdPftTZg8xG9NmYxUbqxA2Gz",
  "key22": "5CXbdaM8GbzViFyd5x2w91aUE21ryXJzjhkTvcvntQMh8ngNmheSdZmo6Q2cTgMqSLezWZVZkVG1q7fiaMCppdB4",
  "key23": "7M8YZL2U5MWxE84RhVz6j7GXRDfQmk26XqcFPajG2EB5bDATj85iQorfKFUQtk8QMdHfNLwYYXboJ2qzQ6DBcMZ",
  "key24": "6znCtgQx8VermXTLz63iiyCdRRdvyAR4hp8xmEp9L7KJidA855wmcSxop78wXVmzTXj8wDB1eSAGydkhg6fsRgo",
  "key25": "3V3TNmkibJjUK6RFvouZZWTC1T67fHdFyQRUVr6b5adTtTifUw62Dxn8vvKvYkK1sMTpYKGyjfST7S2j3XjVgGRg",
  "key26": "RPUJLC1o3EmDbMe3xd8xPvWCoUc2ZnqetaA4XjbYUNxbuR1UZxsA31tgpRN3QqJ9XQdXjfhpexnTzZRt5MqsiSJ",
  "key27": "2Mg6A5J9w3iSpNd6Lsnj5SUQmnC3mrQq99iK4ojHAWcudYP2L2gcoDd5z7vtPxYTWcdc15jhNKfyLwzX6nrJZ4EZ",
  "key28": "MzHyUg7tQxfdn4DYo2NurAy2K3YSQLXLp6xjyQntfNyS1jtUAKVtUoR3Wx42C872fanVCodUaMuE3iNuN25aLZA",
  "key29": "2KVLJcSoWYufSNxZjZTgEb6gqy2Mrpso9icwTjRgzZNd6tBxWzZGJYCBDJHnNwpmZkLuLJwdcUUb5gDn3UPTnTH5",
  "key30": "3upAueJyWeb6GuaHVnjkKtzM6r7xa681mTGPy82XrZ57PgWSoUrVkyn3Umr7mcZe3X2nYR1tepZMFfSNTCqUF58k",
  "key31": "3kwRBqgdcZcF642NYzdfgNSYLv7nfsS72o3Bveor6K1Caku1kt5cnSZbumGKJmKBbBzsSasAR89bHhpj6ChQPpyL",
  "key32": "3g9gZemSarLsNDfUjyixQZhowE7iErdgXjx2Rrv2S68tEUyN59UY1RJpR4eq7YVcJMiRekTxVR9iAL7StQmhswwz",
  "key33": "3MH9NVMVZSBK4rAL4yDea6MG7cLauSbVHVEDZKtixBPpwRVa8dWTgjSVHT1rxFK7PKK2ox8XSM1tS15gad5jgm1A",
  "key34": "MTozjmvRRvTu9ZP2vekk758zBtaGLWfqyHUirrQ1egjXSsRRX1HukjcfMvXS1tuNtWY5RBkeX1hGusCMhtwAF61",
  "key35": "5AJ3SAWH8GQ2gdk6BwiLwKLZrQE2fYHGS7ZnBte58gAim57Jv9uFkvi4Smu28z6pSE6SBs4KutCyzYfyo2KLjtTX",
  "key36": "2G6Z3HSG8925DDT523VtC2CEX5jszGP99y7rDkzx5LyMhkKBy4uQbwiLcRkxofyu12obzm3v9tRnyJeUeaEBf8TG",
  "key37": "4TiqPdqfUU4dqEYX6UkFFwGEaZ1oznyMXUWzcpGGU9TP4BEuUpAnJiDPWG2CNnXzyNBXVVL5HhBwXxZNCAtjYS5d"
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
