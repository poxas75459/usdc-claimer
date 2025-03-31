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
    "2g8dnGDM3N9fBGppTg1V4NKomVjSQafySF1JBk7LNJyG5Wcynm3k3txcLZihStSUq9qQ59VjMEgRQyuHimWA2afQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EigVGxcdD93yt4WNUgTXnDP98DC2DUtqMCBkU5pnndE3NaDZsprsJS7hUBxnELT2CGBG3g3DeYzg6uFfFXBCTxW",
  "key1": "4bFuSfU7Qv12LugswW54SFZTDQQDM7UsGoUqnxMXx7vJtsVTgVAUcnqU9LiBJjSWj52hHk5i8E3gnLuVnRZpjBS7",
  "key2": "3w7SXJfgfU4a6zQbVrdK8hZUvGqhHmKWz738jLLhJanfx72SUg1Y3MMiccB4HCS33jHZEDkE6zWjL4XpGC4CKVnU",
  "key3": "5VsSPDt2SiyrHtDuwzzK9CJYZgN47vYGBMhWU4tkTEY3AUMQhsTvpcQzLXpxNR2cxMcPRv7ay6UqAyfmYA4c5zRD",
  "key4": "4As7NPkXT2cvY3QmR8kHN3gVpRSfEVGgjCJ5Mu7gAPzFF4WCrveEdQ3kc3xKwpjTk4Xq38gtqzCfZ2mdz7jJTF5z",
  "key5": "7r5oq2YZtN4SSFVsM9vLSSZuUjN9ZFFd2SDS1v6ppBQSFi6jkRswKcFtDEwbnVsQBUoD4gcnHtKT7p7ViGtiMnH",
  "key6": "5VdWQDbxvz8P7cQWXStddcpGzsinYNHLvW4Eaa2eXZn7DNTRCnR9mZ8dDELNtexDXnmWPL1kc5MG9EJ5xXYqBuj6",
  "key7": "4pT8nq1mxvhah3uLD8x9WgU9y3Lybg8MB7xPQNiKJquQ3nhpVH5xtSzieM5sFjciToVqMkNCqt3Q3hq19kRx27MJ",
  "key8": "3LZAsciE5LTTkq4KB7VkYFhrJMbguiRnpgvgKW6xGd41N9bEd8ZdiGWWhp7XkSZUzKdqV96S9gaYh7mG7Ni9YdYc",
  "key9": "3h5d8QoqXaaSWkDsaj93PKa3K2X4gJGTDTnBJn4H9KL9HQgA1FWQkXzjxU5kKUu8TBhFqe7QsSuRisB7rdMc1ugh",
  "key10": "GNLTuTUC6ZEpP45n5WN43gZKKJfECuxdZ4Wcge7m9nMUtgCndNnpFF49SDcsx69MW3ScXi9t9RFZrkhJuJNTraE",
  "key11": "61c481dE2AJopPGzeiJS7KDwSnzPpA58Qm4TdmpGxMKZKzDmY112YsJmXiwWgfetRibVsFhjaN622rrhY1TjJg34",
  "key12": "vrWDLbR1nj1UeiMsfq8NHTfruNH3scMgxnnLWeM4Hy126xV6XrsW4gRNamp8jr2VPU4XTAhMbdgqYS5GQjzM7At",
  "key13": "3urhUbtLxWwHic2DK443HQicKKgqsxQZuCBKgmqHPj45pv3pkcGiPKdkgq68jhpj5pGkkeL2nAeRbkJe4APQyDHM",
  "key14": "5ncoy8vvKA7WAF65UDJXiMLyemjnVF8miu5UF2oUpSzLmamiggfhfH9Jw96pcJnBhv4KEy7Tse5JQiu9iwrd5rYN",
  "key15": "3gdDXxMX4ANCTyXpW8CjUXmS8hLBrCBh8FcHuvYKJmZ5ws8s4Vn5M9wss4mxUqYi1RkUSePCGB2bKSMJvDqBpk1g",
  "key16": "DTBnfMBnEbEVMuZP5A1Yzyt6zGmmxnCBGiHoyK7zdMQi1p7FtE3m7FThYtyCSXJhyo7nn1BjpeskfSMwHDq9VMA",
  "key17": "4diV7TnMBqmWUN8zLB8n7rbDoNq9jjTfEdnMTuFCC7wFNWDLo7y8JovtUxoM49JAQ6BjrkbxmEPG4R9n3mhSLuUU",
  "key18": "5qip5Kx8e16h5chuHu27x852tafPqNVQ5shKLdRY1MJcSxVxwsoSCmyu2CR1ZnkdUsSm5KVj2YtJ9KH9YvMyYfcA",
  "key19": "fZQnALqE2bXKh5u8XFh4h7VAx7e6ENjC4Ey3wEzNYyofEswEcm8T1XfZVuoKx2kaTWqKHe2qAgNVBR8BjQBzxLj",
  "key20": "CB6QDbHSvkdusTa5owwWyPL6p9w9VHQQMS14HAWDCmVJg9Y93tvUPP1BMnnMBEpnukuzFFYtDXQ1c7czpSevvTC",
  "key21": "5KfqSuLUU1YxHcH1Dwr6jGagLyijtQKWWqMQZvpHha57Wo25xtTwxw3uv4AcKTV6gipYG4n5wxmJn4b4A6fZMKcd",
  "key22": "3ZZecRsx3wsTDHmyoQTjeJ2jiygFjKhoAi5Zkg9Y6jhx1nogJPf6ok683vhJFcXJKVF6evmJTFP1AgWWfzUwHuw5",
  "key23": "5MnLe1d5W4jzTZwtePUPpLoDGuKJ8MgjgusPevnvFVka5Zejx7c53mC9EaywQQCDACiRKUiZMD3L4ZFgu8WXPkya",
  "key24": "5K7wic4nMQGkGoqp4kLJUNB4yXPervSVt8U1rZw9XUqhT9gLqjUP6m84Pf4nZ1sBFZh5egrLr72Rbv8A1R9iKacT",
  "key25": "5mASZG9G85GtS9YmgwGsGyz6KKpLgaZnZVBYG74wGXADne9b2scRuC8ZzV4taEgFDWCiFvBkaWmXi6AmoKhseFsp",
  "key26": "2ERamcCC6uq2pAgkjcXzTFfNkRR5TvDvaCs9YSdQ7LbgaN1MiakdELdAWyqfTXYQuszcrkCiLRtMtgHhiGWjPwQY",
  "key27": "61rhmmkCtJNZ3iwxWdcUcEFaf9PUbm17TTTnV3K2Umwpr3wa2s7TdR6CsnoxWotG2gh7pwFnuAe5qxTA6sMnmj4",
  "key28": "2qpCKQgRiqCGKPLqkfvJA4Dv4eL7aF5jTtcxUbgxG1xumzdYeWYfhsDXR388vVZUa7izsh8veyaJjAKUgei7f8H2",
  "key29": "38nzkV8gtLVehsrejueb1XZGKxJ1buPaddSK3v3T7z6vJ314gffzvqPTpe9auXWuvTVbHe8tkuksdVFsFkaZceNi",
  "key30": "2fytTn4aGZsVAKHP9uuDJynRHKdcCoZXrtk8daK5oQGnRWUHruj3Cy9zoMNmRQs5SYv3zchjeTKTjktiXYSfP8yf",
  "key31": "48YXHyu7EDsKyVgqowFLEDP48TYkyyQP7Egojpy3TTVfoo9WHkXWoqHmjbihKTnTWadQ2UD47krBedf9iM5WsTr7",
  "key32": "2cs5dHnyRAcVJxqePfugLpBFaSim86EcX2mtk1wkjajFDHadjyy9A7664sR7ADCZWNR2aMsp4YSrsYyFFgm5PVXJ",
  "key33": "4EFAX4C9PdUXrWeteNuCkAyTGRfKpKzz8iyPBa4ohS3ezNkfdK5bM5Ng26YbGhu5EGPpqGPLXnLHKLBqDR6AUFY1",
  "key34": "2EArLb7jNsYbVQNpgzY4AFpELrPFCxKv9fN4wKgUMJLgDNYekuJMJFVzMSPcBEhpqhR5DEi6KX6fScfEYxwxrc3k",
  "key35": "2HZpCrQsXxNJ5sabtpqAoWcu5Q8HTHEF5Z4Rhr2urH3W43KZS5DANpFHHTURbT9QwBBGq4KsNdPTpXt7Yb5F14HW",
  "key36": "NAeqMTiEjEJdbR8QyuMVtqDDrk9qa9kXpdwxfT4Sq82jZykpZ1EK325dxaXYwUcCdSJKQcYqnRnSg4NRddqA7kz",
  "key37": "479Wd8vzWnpTG4it1u3WQqsWTQLhRCzj61FREhwr43bMQwS6y4VaBgxYGQqU2mCjCkySizN2xH27hHSu5kC5TUAq",
  "key38": "2Gxiv3xUPXKAwrDDCsovKNQx2SRTET24ZdiBjGuM788H7TSV4DLTaBzg3UmshWLqV2hpKnJSwS9Cs5evogducAcS"
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
