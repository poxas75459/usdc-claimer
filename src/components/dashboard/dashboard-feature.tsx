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
    "2153zwfqRSbodoSEwgPA3FJEsjQQcU29vYa5U85UXfQ1o6RgsQ3yd8E1v36E8CvcmZvywbV1KjuEPCk8jDoLQfPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ebEjpdWBswZuu7J26FqGQESdwGZ3bnFmvYRxfHTn9iMLfi8Gw4bY913RQiAoh2kCJJuZzFxUvK2TYdZMLLkY9b",
  "key1": "2QV1s7JmCj63EVeBimb5PYqhWgQW9cJAFvnjWrE8BEo2N6iUWEGn31vMMUK6GMhH1kFa217kB4fyNaRabf1vUbD2",
  "key2": "41ZRhhirW8o5QZGoEzvhphxRcNwryHwfqgAiWX2xggrhuKXF1G7AX9sL9ouiJN9dk8LMRBa44EzMpHJFNYbYWYVa",
  "key3": "43m9EmYwP7irCgCnuALiKPrjFz2vto3RMq8GggKWgvzijSNgg8Tvk9ZqiJxjq3CUEq18EsaHChxwPCW39kTGwMo5",
  "key4": "3RYAFajg58WsNSvGhqzQhGRyoqy5R72ZTegqvj4DBps5JRrTn47ax1FUVs4bKGAZPHpAyMMKw6gszBdjELpTwFhi",
  "key5": "64Ra8aiKTN6Ahq9hB7sp3J9uRvZsMxddyJwhLhWt18SGAGQe3k7Njxyjkb8VHUdkhAegGxFwxgfmT4CUTaXtANEf",
  "key6": "3nYUaVrREqaKLnJRENCso7y99ZpbDwa9cvTZme3WPKMoJJaucBo2hV4dzDSivpUYxmrh9VB7ef4YZw57SiiF8jDT",
  "key7": "4Qm7MgcETndXHs85ZBwn6jjuzJ8nzbv3arVQFgwtrjhkoR3fX7vHdpPEvzmwgRFtoLfwXcZ3tvmx9eBQmbVtesTB",
  "key8": "2svcfiEWG2qiVDD6miJJkP4s7XtSh1yKN7YZRJzT7xWeUNMnuQ2CJg1AERBH6JPKJeZjwdxU4wNeNp4PRVgEHvNR",
  "key9": "2wZxfUkktT7L4cfsYL4a95pgrivmAnh6W3AA8CcWeKMnFqHCdD5K3pidr8MGztXrjk5VvQSWCuZZPoT9bYkRKLN8",
  "key10": "3vxR6Pg31uahoK7upDpsCSakKDhTDeZZQ1NwBZZgur8bMQhzHL9zkA3DJfZkKJDJPGxtPYfKypur8RzYreJVFutx",
  "key11": "2EDei18GyNg52NgnfN9UatgYGvtTtn3CFLsv6KqciQvXYW1UWDaMUkUHXpEaesZQPwZxFCfjamZtAJEY3VSvbDWT",
  "key12": "5aopVqShPZchoDoYZ2P2Towjwqhd9t1D6Woi7onPK8pdDLhryZ3gwyy8eegg8jvuqmeur5XEp14Er7VyBBCEicqj",
  "key13": "2oxtayhMJaxo83zD5yFobjZHAAp249T7gBgkYMJHfTmNEfQohFQV6fHBHwE4WRe3gxLuggp342sdsU6tdixgJyEZ",
  "key14": "2ZaYavPVx9nEaPLmCshDVVeQXEg4omaNqgoEfQnxb5LPq4ZkpNjTFhukpMRDTfW9Cv76i6iQ2kbmL5VjNZJFVQwW",
  "key15": "4fCPf2FRpSpk8ZJ7mK9sTj5tzbb6X7DvwG19cRhRwt39c2R8E7g9nsm9mz5XBdDZb8nFkzPcarTaXTCt7Sqg2dQz",
  "key16": "sVK9xaHPSyJ78VcRhMPxpa6NhaVhvUhxWFzLhsRv32xJD9Gy7BVkYQKERjD1HHXiAAoxkMdNNYADvZuW7hgUrnF",
  "key17": "3oDjcvYbY8QPPZBDU182eJDjWGuh6BaBVNem3XBLEy8EocStfXy8QbFpZnJbpBFfcG4fMPNipWj3bqzmBoGTJ8gE",
  "key18": "3bVrFp8xTKmgmXUnF37gEYoNDx9qgo3MPoBZ21cAH2qQPbHMmEDCxHjTEYaaeC2h6JBRYPDVQ1dCBvAxGL3Ws94w",
  "key19": "3x4DauirjC2i1PJjYn6NdcpzdyzLNhWuZjENYasqXdgwt396V2uumHRRCciL1vvciDfWCtHapAXLf9dA1sis4WVo",
  "key20": "3JkuxiLria1maHcC5ZC9nmS3bTWhxNaSzVPLxXZPXhK5jNAq5w6fQoUGwtQPHbeJFk8MgqyjgZAav9TFcQ7Y7NYc",
  "key21": "2gN2YTX56vjLspNWZ9k9tSYCKBuPQnW1F8ivgR3wrnKjFzFLvGE5uAdZ6RNTHVaULG8h1CCE8763EgNmXCbL1U8V",
  "key22": "2E55NpJfvxwsATPsf32qCjNZJL3yGGDLUAWWac5XF5kPobejCECGUvkY9cA6B42MD7MokwWzFQqW848ZiJkuNmVo",
  "key23": "2jaa166DtQrfpmX2ynMxwhuxf8GMMfBgJVSSRUf2MGsaE1aesjgAKmedC3dd6P1xXhMsz2qgKMVat6trX5jQw83N",
  "key24": "p9FEVeQyFUYkSiUBdDQkcbxRJshzPBSw3aneKhBBtivnUSf54z8XkHhrVQ7sPQ5K9X2YUkZ9C1VkLP7GbiSFNTJ",
  "key25": "tmAFm9yPcx9z28jcXvXEfr8ESVYbv7F37c5dyZo5B257RCmoParNMoNDo9XcwtjQ2peXNZbN5TaL9Yt747gUHxv",
  "key26": "NktkUUUuMGCFztLurgz2QthnKUXcS4UHND7bG9z7X1djy7fjPKod54DwHQg8ehfVZznUwj7NSdhasiDLy9LHo9i",
  "key27": "2wCPALratHDaJKcQRdf9dBQqiGU9NmnoLKTvQkxxajd1cSv7U2PtybXNSJFqpUYrLTT6XqhQ5pnDEisfzhYrMNrV",
  "key28": "492dCtR1X5hbSHVp2VUbhE4GpAmEkQDjgEUNBDuQ6UPH1ijuenUtYpqVLtmHdDALELDAguCusxCeLfDUx4njSmZb",
  "key29": "f8Th4Gq1yr4aVWqniY5g1r6UqW82HuGSj6exbBvn6Wm81khwAbg37SduVXXBrnvjsrhgbnEBnvRsUpDsJ7KD9F6",
  "key30": "43ANDA3xNAhDXTnDK8N9HGKn5arp1s1ePoPbb2TAemUehWWKZSXVvaEKv6eBPovZERcRX6Tb2TkTwvpk28e72A8X",
  "key31": "4Gd3uXDqT5FGFJmJnj5zdFgif5Be1ZoxnxNXWHCb6onKfBJouAeXH1ErKoKHcr5TVU42x94XiQNrijTorWtXecXc",
  "key32": "5jrMZABHjpsLx4o1BVeR4JHAoRz58Rc2WKMDg4KC5nFGDBnjt7wFH3XYkdaU7m1MZVCsqNkHqDcTdyqxJQhyWduw",
  "key33": "4zZpUmSJuharAy8954ik3pNxCDqXfRLBBcQ423t5LBenuFsdTnby3MAaKhobhx42B1yBs8Cx3CxAxB5KpDJi8Qyj",
  "key34": "5X12Pqzv23bHPg2y3F3ejuJecMp4U4RHiN6MBoRqNYxswpcGRKS5v1YEcA5t4zrRgTFBh2goQYo461A554dKXwUN",
  "key35": "BDqXGWasz3XzFG59FD7PSeaZF2fAm2V8eDHhfeALVXtbZA9FzEJYdR4EGiWozTKe87RcLmd9u5ycTKsMcnDwLDh"
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
