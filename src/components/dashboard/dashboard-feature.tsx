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
    "GSChxuSAuyBdR24Gv8g6dqm5Zu6kiBQqzR2Xa5XdJQTH1FmWiCoyixdHmyEyn6TQj7yUDyEaHiQx4uz1R6H3PJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzvVNFXNtvhb4jDdjY4ESWWEqTMcaexZ7UBpqqxeBSLAKi6HeeoQEKydFJnc5L6stic7nKqHua7GdKVxMo8uVYA",
  "key1": "4pbvQuL3wiN8bRuf6avMvnq4nTK2ZZeBLVK29oSXcQi4kKFw5zPha9EyqYdRin7mj8U8Lx1VMSEccFeKNFQKoDkN",
  "key2": "2A4nLa1N6Qp8mgRTzQLTNmjbnmeBc1azKJEkYUJMkp1CKRufa49axVt3ENDhUfvwQcaVo895KfDzEYq1VQFchv55",
  "key3": "3pRSgB2p2ZwyCSxZu695oHAQ1L8VdDF7XocTSNMxm1FaiXJXxaUZ1rkK8u4CwWDGnzzCwXv7dHeFi4myqHPDjR8p",
  "key4": "5CbAqpB3ZZXYvPxPVtzNofcrwWo7gWimdkVfkBizEFh37tXfyZR3Yhr8hjCFpxpKWbeoYrUpyWuLoyagyuquQmos",
  "key5": "2KG2qQogZcAhFTLULfxrFAiGL6vCgsQbBjeWWRVfWb8YNW1NwA8dPF6KkZR2VQWCb58LJ2RjQ4epH3ipKT5qBchV",
  "key6": "CfwivXizLtwMqkK8QEyxiSpdSATvjdZUE18ernZcQ57XRCXwsu9G49oY32oRN4a3pgsHriTEXyvTgDob221rfJM",
  "key7": "2UNoSC4vXAPby6EAakxfbV2CbwqpbN1iompLtzb7WDXvwhT1ewLRDD8ryeUuyzXqDFgLrf9MyPA6w19BAAaPBbSq",
  "key8": "4y7pNVSUsQizUYY37td2e5UMB1Wzh1nFhGh6sjGSQQdCPFSA6phGg6Jnni3pyWvzAkwKQ2j8ihBsxPTh3itbUuJR",
  "key9": "4pmLpR9kZ643D3usdhdDEMfpupAVWJ4Nk1XcWcDYkGJQsPVvMDN9CjnYBqSrBqiBUpsHCQ5jMHWHfrSLNV6ZfVXB",
  "key10": "4ZTYYiirR7Ga2E3WdLMENG5KMSALFNqMefTdbmRZE3ByFyFCXhJ9MKJVqywm1ptWfGRminLAYsLkY5foNSZPn9ik",
  "key11": "4NrYgtgfaPJB6VU32kNvyoqPY6C45SeqRc75M7oBZUHdPQyfxngp5tGKvXYUbVbyXL6LoPmoxdYx1nTSqbdgVXy2",
  "key12": "3AtTc8f7Pg68o1QwGKYF3inWPMZdfBsqM354AAErk6SwNRTcEpk12pDCZFhTHo1SuVkQm9HG76uWfSi537mWxxD4",
  "key13": "2Dn2AWMgmSZh6PAR8i1F5zLEhkvRDM2BRjZNha7aeUiujzNBPmRumQsXHsMsJELUvqscgapQiYrv63sWp8bv5Fyv",
  "key14": "4VFjK3rde1FXTiaeCBHrNWBYFSr98RDZDbgoTXVPVJBLfRAmqZHhrtR86N7hEiXqgyEyyC5ZzMzASDBb7QdjWCJH",
  "key15": "5S3jDy7tVLcL8AnEGJVa3QNtupwppV4rbvpuPfzZcUEashSXsKJ155woiEaFWKyYMPimuLcMbfDvQwzhAw8AJ5Sp",
  "key16": "4H3KEYEj6gQqwjXjWYZkqK6zy5Uj6jMgUEDonYn8coeJrQcfAGyYvVUCXAHKM5jhDZeh7GfCqmRdcNudoiGBKUtz",
  "key17": "4hLR8ooNSZfaVwqFCzrWBiqgcP9HwFEDqzSNcUVd5NcHce4F33WdsK2nSvRLNhpvosZzAuHGPRQCnebMCwFpmmNG",
  "key18": "3DQ74tgPf5ZxZLCKvUvkQTGGeqPWz7ToMHTy6v45S7jaAHy555MsTWRhRXohEdVe3GLk7cha52cpn9FvMTMtsggx",
  "key19": "4XC3RuKNxKhe6TsYStThVeRiHdcKad67duhwXVgrpCTBn4YgDszRdz1fF7GC1wZ3aDwSYtFQGz2HYe8xbZ3Uvj8C",
  "key20": "5RKgmsmgWFXpS62Du4vtD5FxXC3Ds6GASAL9miqGaAMH9TxbMfR1tqgjWY15Zya4dYR9N3jQpvAgP4CWbpy7KHYu",
  "key21": "4trHfFtiUSPgtvvGinWoC6jUR4tMoZMYWkfepFsQRqzTREqsUSVz7AUYcm311UxPQnPrdjynG9vZ8vchLDZ8KmHV",
  "key22": "623mYqzqXVYz2ex8fnGwWudEctoyDLvURRgR2tk37V1DeJay8hM76r4Rq5btArwRy1K35FrmCeLRQG2eqC6UW76Z",
  "key23": "4aPJUpUZcyu13jFzqP9XCW5VihM8feuxeMH18Cbaqv257qFV2Qcx3uufnZxfT5sSgC7p5pPKNUBSgdHqseN3efvU",
  "key24": "2QmHbQtWJ7x8tZFFrUarA1w5QoAgtqVJpz6Ttkz8pXqxRdSQTKCMT3qJYEmdFAoXumhQ42CsymfDRLjTqK7g6tt2",
  "key25": "4H7NnF5bD5GNG9pHvRM4JDMdQ61bYcLuyPeHYnQS1vLUppFWg815XJQqZEzdWj9Hj96sZxta8jUtRS5yiL9Zhr6U",
  "key26": "2HZKUfqNZZ6Tqi9PmT87RoDWZ4PNypfnTBmrca9S2FvFULVcDhPWy1GHz4p2M1Pt43Mtdup6UbpGRscNfbdU9fkY",
  "key27": "3JqhJGbNzmK1USo1qBVLB9N9Cv2S65zTUK27XHCjvHjK2jeUavQg7dPTtixynBeWqBewD2XzkNTdsCb4D2QJyA3j",
  "key28": "44BQ4ccAxiwUuz9EQx8JUxtXKdcByqSCPRRmnkZL9eJnprnRyK8iDpeYMzqJH8CUpS9ETQ8XGkkh4yWS6LsfqeUu",
  "key29": "5i3fZCBWpfhWBgjRroAdGfuBmd4bPUGzBcWpcrVJPP47vokM7c9gfnia6YaNyAsCx5e5zSqaeMf8LjHZNAYgeiE2",
  "key30": "2ZPLLB5XCY7bHrbjbTxb9p9dRFwN7oJ4kTakRA7bn9FpQ6dF7V8hr5q47SsZpDDmG4LargJzjB9TkKzxVtPSweGg",
  "key31": "UBTurrTKgd1hZFS5C7sqe286G3FoddwweMny7ZdjkgioB5k4Didonk7LgHtZQv2hCq1MQXWLsuFr3XhNTmKEiJY",
  "key32": "22W2ETzd7gvLjtEWZRbCe7VoFfcz45W8TSnRJpzLg1zPumxCYXTAaCmqYqBxQ4MXod6FLTgG1J8Nfu8QnHgsH118",
  "key33": "4FPRPAEQjWU6b4LA49UUBhqmqoe7vdHNoThwj8TC7smTiwHitttgyag11twRFCVTz74Utr2SYnkebD4nts9cBMm3",
  "key34": "dWxjm6QTGqXSsjumxcLVMTMD7MKpv352kEVToCPRTTcK8JZaUfSXbS38pNi2aCjia1D1wraqUSAb2nsWyefGu4t"
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
