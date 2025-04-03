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
    "5XEVmYvfpzFLgM3YZEhX6GPgQPnDtbU9Q3KATZ6Tj1fQgTUwZ6UBTo68TsB4vjjsgVeVnbxYF5TyPSwamxzFeFLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QQb5w9NwREW372VAyfH655MpG1rV3PSbPW5Q8qWjMfkxrY1UQxYh6PLUCC5s7KG8YvHRBkS42vWSWqUaE3krSL1",
  "key1": "4Cqz3zPrnKZBcXQAXEa9nVeJrsDSUFsBz96wvPrEYAxT6m6unow8ofeRu6uWv7RNstQB5qePSZjHhvkaz5qzP7KY",
  "key2": "txJvQDoavCho8aZ1Wh4S7R7MgHHFPYq5Vq3JPChux9h9aAww21m7GNtZjMhutiVWnEGoQhqpG4stXBT83SyNZay",
  "key3": "4B3Kk86sfLFX8HNsSeixydZw4ngTpjae6wGqiUMmPVnnQ4jPMbcVuWS637QyNQZ6Ep57VvKsq13LEAy943xpsraY",
  "key4": "5hWXPBkpk9QKuzPWc9xomrGhHD5yWxALLhxieXRdy4ZJktPdrYcQdqB2C1bZV2RM8CSW5ztNXaDuTpqTu4hRY6bL",
  "key5": "4iz1NkAVRDBVz4KW9UssESifyKVCEs4b77Xit2tGQ9LjfRGzH1xvHDQ9cpPX6bsNeuqzkjDvSwL2xxwWCRuBu9ha",
  "key6": "3JmqnGJu1bREXmNKg4k2heFqUBmt2attX2QdnVsoCcEC9jLNAhsFaqxVnfFVE7Hr4CxEXoFnq6TMWMKVwt8qpH78",
  "key7": "3XX2r42Bzx3WQz44xk1oeibyjfzQkFc7WuvHimQ7cmiGrMLGTedwSHeA8g73qtMsK1pe9rW8B7G8FYJ9XETW8AF4",
  "key8": "2mRbsPaQvAndtm54rVgovMDtYKXjF9YY8rTuZ7WSqdHuBEpb9zQRUzwiqVHt6gZu1suVR2CGWuKEG8GrUe4Qc1DS",
  "key9": "5Q8LiQfA9mQwLPJNxFy2wnK17WyKZ4j85EuwtNdt6Hdkz7TiHZTsNGiw42gK78EXbQmKH9ryePuLr1c7VMdEYekv",
  "key10": "2nAMXRvnA3xEJPygovMLhQKhJfHjqRMafDYvyXj3MHsqKg8w77qnEfToHTqFumgXsaJwGQozJrtJ4i4GgpQqpuNe",
  "key11": "63iJ8Qjxg7n8D62yUu1iTYbPgGwDzJfv97UYMRfEwwgXCVKudGKBAB7yqPpSsjSb8kT6s8e89yHwoNv5CAt37pTE",
  "key12": "5dQxuheX9Tb4g29VNK2czzwyMQ5SnJhgeU9bgbwpDqT47b8VktXSFUH9KFNscRBwc5b5uDgvKf7FXEn9LT7H5yFV",
  "key13": "2cFGVdYNJfEG3TLg9sZjMJ7o6srWfQbvFz15Yph15q8EiUXaexWVXAXaCYyeS8CUMLgnqqbttG7Nae29niHCUj91",
  "key14": "4FWqKoooBFHCRMetx7bg5tbKpJviGtXuNEZPkTaabunDRFTGLTfg1W7Wnr8ewSKodpSLm3AheBp9hxZMJXaqj9Ga",
  "key15": "3tRE6pLRoJpatFXjZMwce7s2F1YM9ixJxLtzvZg9zvLvBaTjiv9evGYm8ptEYfKjxsyN67grnNdbEzUosCkTKoTD",
  "key16": "55G7FtjqgYoL8u7Vx4DSnNPTssmfdDuKA5MNmhpBegUm2S7J73H1qwM3qD6iGK6DtYkNkYZ3yzj5kZyxwQvABmQj",
  "key17": "3jJT2Y1j3tYhQn1p8mxS3aT15SBXnWfqM1XGFEtJ3nZfvANWT4C9bXaaNa5DjX1wcbJL5DXXikGq4J5ZNWJe18Ko",
  "key18": "4QAMszVAPozjhfH6HnbgtRBdKgpbqPF7aVT2VvszFhVwt5UWBdMsGSteSprvi2puPhS4JWXxkWsKkC8nasYub6Wo",
  "key19": "3Pstxrtr9hyEBwMrZSjtMJQt6sfzanQrXMH24VRH3GqMPogBukVfKrYU447Kf4i99zmrcgwSzVr1LkUSCYqkDuFH",
  "key20": "nByhDqn9uRLCY3fmNjfjruKCh6BSzJResM4H6afmrSz3c2JCpETa8omFTKVdwA8B53RUmcaBuWqzhGPVXYGtorU",
  "key21": "5X4CMJ2wLQVjb8hqGUjzkk5dTS6C9cZxFHwJL72mFVGah5Z3jr4guYBtYewj4FG2RQvh6ZPJ1nLm4jt2DUuCrhQM",
  "key22": "4azk6ruvCmAbuxqHgfgX9kBBBmJXdTUmRUKn4EnX4TcUBaeZ9pXb59dRRfBKAXkyox4c7VrvDXmqXzrK5iUwWdCM",
  "key23": "3uwzhQaqAz9dn52gKoBV7Tm7Lv4EDigaHm7S54JkQLNX8imyZzfsssQ6gy7Dh3bhWxUqXUokdPw9LpPiR2zWaXmi",
  "key24": "4TkTNrdLkSLLNeJx71qVD3rvMdpWpMaRHf8vSo2SuBFEuq8nV52i56qgQNoXP84jNXq13XhxvvUYKPGeoBuBXykm",
  "key25": "2vAFpZWJHPxNA56BgUNWtUkunCApQFDZshT6foYrFtQutcL6UpewhSz5EyEnb3YFvNFQi5a6WuDJQqGrkxSDjphv",
  "key26": "67TUBHk1fKqFZz8J5ppvXocobbjX4d1QTDFgnk2TgTW1P1RnbP6qqfc3u5ZoeJJBdExg8wRgs5swcYsm5zaaFC9q",
  "key27": "3mc2bASvShXbnSBTuGcwHKgYQAEAj8YSRZyEzdtmoMD7cqHQHepXxb1aNNHUt6Bsq7AR9GT32GUsVs1zts2uGzYo",
  "key28": "6EVr63QXD1dToFwMswkjNmgydBEEf6MM7X9NbopHvi8FP2TCeCLQ6h2Q6dUEZY8GqfAsx9uyJ56cZTEsv8MDY3g",
  "key29": "3UN3kB6EWFHrb2cjkdV2KkViwFCPSY36Z8u12QpmTyDGdz3JYgrZLymD3bBpLPLPahKrZwWYo8szE2EcHgDFNVT7",
  "key30": "2v9VJUxjeL1DVwWCe98bWJbtHTd1c2xq2b5hP3SV7KccEHAwjGQAUt6XBGTywjUJMPCwhiSCFNTdEnVehbnc2R2S",
  "key31": "5wKc5wGLaUo9XrQSpgiMki62nab6f9CyXvhTuqDdQ2yE2MgEsNUHZhxJYyqEZu55bn69icFz3SejGpqYMgpU9YQt",
  "key32": "39x7EXvY14sNhxxc9B9jPfEjGdAsvBGTRoPkro6i3iA2dRQv3LHXZ4djzmrxLmYY4Sgts9QjZ33RD8t2KqkKySh9",
  "key33": "54NXf1RcpiE46EzDdbkkHR9A7b7SaCq7o6XRkmPSJac6jSq75NBnGMTUM4gbaczs6HLTAjRYd2rP1V8pxDuavjd2",
  "key34": "rLnAfAyiCd3L46MBY6qU1pUQjMtbWbTwV4EtxHgrUGKPxgpe4D7roXrStxhuUCAKoagxRfWe3nZkZbhDV75TgXK",
  "key35": "5wkmYEZcfACLweUgmSMEcRfom86sKybtiwAigMBbcW9fcBvHb3Dn5RRujcWKcyz6phiPrnGsFZDY1xHALFzEfbey",
  "key36": "5V9CV8YCDzFsqRd4giAyTPC7AujmRiUKyyj6qeQYfNqF4KZzkPzTTC5WJ976AdT9Ei4VfbQVtCq9qUkEqazQY1Qc",
  "key37": "2aCLdAqdRgqqY3DBEBC4inc8JFSFJTgehuqxCxsx5SFzHsmLEA3QxvwVPtZm3nX1jgqMXQMsPQsYd1Nw7XR6xnGq",
  "key38": "5BxKcJUk9hNxVMqH6CNhmpmmzWbEG7hz4WfHQX3FpZSBFBX6xnH1F7fAVsgNp2xHPXjfZqLnSJTkV3ZQGkasbDvw",
  "key39": "3iBnC4jzvKSFWJ8hwXJPKVU89mWV23M8cEb41Ytb37oGfnZc5UyCmWFsYYwUfTVxEmpR52ykQhjUwDKY1fRgFGAo",
  "key40": "2nLf6B5xjfbwMGziHpKFUJXYf2whp1rEFMLD85qwwakXv4nLZGBGpqZ8EeSzfCrndavrdmsbzQKMsnZLVXp5R33X"
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
