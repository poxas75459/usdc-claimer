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
    "5e5znRmT3v1secXdPybnZ1EkMV1Z6k6XJu3ubqiKG5sR86T6HC9fZPKUAT2CciGhMza7w2EEcdoib8qHXzxG8VuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x47twg2vMs5Ev26zUpHHQRT6nyBhMgJt7HhD47uaFciJKeyUH4EbubPbeg7kpyCkSiB4u78S9f3w6umqEdRBRuS",
  "key1": "33p2UYxThTEQfpeMFVJdtj6azQjaUGq28FfXD1GEeJ7Gjicx3M6hz6MG8H3QTJEEYGDUohP6W1kXFgGab8VfQUfg",
  "key2": "3dMdM7SNFBRdRkQBTMsLCsBi9eesfsZCnnZzEZ4uo4J6SofHhGDCtviM8tLEP2uWRAbJYi98U8jRrtaPNEQzBrZd",
  "key3": "27qvAjg29NBJLpptg5b41Z4MVw5uQ6gqPerKMLZ4UWnGt75RsqHrWwaJq3GXcyZpEAjtarxt3cMvP4KLhdZ58nor",
  "key4": "4fkRTb8n44PRgWD5rUj9V3jp3Q4arLzzouRWNTohBDo3dLZ88dQkNKFHYPKJuTDVyMwhxFTJ48my6hL6znX4zQ8w",
  "key5": "4ssvchD9DkG3RgjqEXae3uQC34vE7SAAm6kFEjTba7oGnGWw2jETuBdvACaiEqHXXBNhXr2bdPzS1PcLb5g6wwTD",
  "key6": "puNNvSQyxEN31tfPYMdzsARBFJreuaVoYBqLoYTycYFeY6mDg1dGBjH8RDYzT1tPmwz8p7jTCx66jUdm3M9LFZP",
  "key7": "5WP6Soh7twJvph179Q5r5bfXQLqQfErHNeWHh6qVNe8i4rs3Z6x1AWP6hHzpbDMga6yDbQdZjh1eHvzWdmENPXoC",
  "key8": "3GU5oPEwvZs67ZyWNd3GsFmX8C14WQgEZV23j28nNTzZyF4nFXUuTHepGtdd5w516Ai2NYZYF4Uc48MDW9JLjgqn",
  "key9": "2RH67fuiHrQQbLin4fTKV2E88XomKfqV2qkS2hpAYQEx1dt7oqJwncEm8m2WJn83XfqzFbTg7odn7ds5nMP2Lkgr",
  "key10": "4Cwau3Ww157GN3F7gwtR91bMBWS89QkY4QuFFk2Hbz3iF5mBQYz61wk1H72aq6qSDRKZMUtbN4qNy63QEMaTVLPx",
  "key11": "5iEcx7MiDFXn6NLV8a49osWyxAxo65iaQWgQpcQpXzh5WhzuHkVvYVoUgB28Z13zFioRA2VzvBdEWdDJ4ooKf2n5",
  "key12": "4Bdwtq8EnW1FQs3mrukgy14Hua2znJc1Bvv8RXKTCFewKuRK1ku671snRX7wiv6ZyJkkjGaSaeo8fb7PrJt6uWUK",
  "key13": "U2boQwQuD627eSshJA71CM1ZVQgBUsa3RRK9UQRKMg15fBWm4LA4SQQec5Nr1oG3ctAaq2Zjn2baZfSujvWhBfZ",
  "key14": "3bUDgGqJe7M2rTHsY3ow47QavfGW92CfcibCz7G2SUKbXngAT5ztHJyPhUHqpUK9p4ixq6sDZSaX2CDhFov2aazY",
  "key15": "5XrWhru2p1pZXHYn4NfUZrVekDK4HBEmYkhFTsU9MrXHmtpZX9ckCrJfhKyrpXY4jZrBasozmtLXzdakxTcHvGLc",
  "key16": "5DfA2vz9BiECHh5kqYo1jWVRiGy11KJ2HThectczG8b5GvbhQZZxSNTy6VdpqdbBg8oCVKjysF19RF8n7L1uX2ku",
  "key17": "ejcpyWfqMNoyvdBZstFXcjFn3ZksPgTdiJJwKh1bbeYB8sDzLX5XUmFLbSF7VpCauvDKps8KrCvsDTCpVpG4mWC",
  "key18": "9te5TDKfMvwGPYK8aZmSfkj8Fe6sjMiBbCrtKM53VGfECE5QtKaD67DoV76K2VYshmUgBssnYLMGQkyffk2bf6U",
  "key19": "buAVaw5kSsa6HmGVnJBXSaQyGvDBAVCQ7FAva5n6cC8VGD795fcecZr2hcC4yYdLFMmYpQh2542uyLmyFBvuvV4",
  "key20": "4DhuXd5DhxTU3dsT8hq6YsQvas23KvNgkxUHfFrdpwdDZSHei6uajGE53Hck7ox2yonVQQ6Sj62mHMih2GadRr9X",
  "key21": "5rTbqWrEKQuynFgz48zWSihqqQcPXAcdxnwyVUc8gP72PSyaXRyj3kSXKUrAJnFFs6BxCtz95kknxhsWJZDB4hYH",
  "key22": "4GJGifMi6LDjvRYnhVkoExuzsiP3cqgjMGETrvU8K4pTXy4W8tfzyaQhrFgGH9hPRaAtQhhJV1xD7Q5H9jsBTtfU",
  "key23": "s5XMEZoTS8253D94eqSdiorYQmYxfYf1aWfYYfh6ryVZ8GesZxf3QEeQFqtYHBWuny8yra6xeMjLmizJxH8DkNs",
  "key24": "3amXTCFTjQ3etqeLdw1QzRk335dVBbMnBFohqJ96duicCusaVpQAr5tz9uyJTySudfDv1ccisx7pmSNnaxUmrP6S",
  "key25": "4DvYnvJHKGoUibnAz6duFKWLUrA7ixjVuRUTwB6NPGc5XrC9EM8xSTCc93EuipJJyBfyVbNzds9QNuTZ8A2JDiCd",
  "key26": "4KAuSd2nqhjMJHTNwfYBoCN61bmszGmx7mPpqLmUrcwnb6nXhiebwj5d12kdwXSSAkpNqGytfSPu4HghmQpEm9m5",
  "key27": "36eLEhzX5oBV3ja4RVseNqGKfaRpAuJpMky6Pg5RsEuhAdLiCtdvKtQ85thCbmcx1jEQ6erhGC8iSiCaKUAF88kn",
  "key28": "5HtEBinsneJ2rA5BArgPZXsSABDDhc6VgHhsK2qQd2gzJmWsKhrHGaGxNiy2UBEqpur5DdCUawmGfq7FgZW2Cjy1",
  "key29": "BsWThWCFuc4KGYYQR7qLd44kP6rVg1NQXe2hgjxN7Nbj3eSjQUmpazCWPHkkyCz9M1CreSc2aeuwcJRKudgMZVo",
  "key30": "LM7RoXMv2FTRH8X8hmKLDFeCuJ5qaaZ3oGiPzrw7GU1991S2N1eM58g85bdr1UxQpaSWQR96kC1AmRX4Ze85oQP",
  "key31": "4eA9JRSg1NF7NZpVq2A8zDFrS4jm4ArAPjW8dexiHwmK9BUN4dqdVYFdPVxaCgVZZnKyQAigKvws1YbX6J6HUuK7",
  "key32": "MP9oPewfmQXrn84JaADnvpB9RhPxzW229G9rdT8idDSrKsQD5YEDDTXUAch6MWrxrMn6JSXSnNUJXVqG7GN6dqB",
  "key33": "5fFQtRssrcLBzAGhAoh4k9LhrnPtkRkG7V3trRxMPM62Wp51itkq7G9zZq95SAgWqu8B5jkCw8f6rUDCG7uAnjWg",
  "key34": "3LBVdN7q7EWDajTJgZ1r2Tsk1SLHg6GLYvppwWKnhVTbd6rkhYV3yPoKxYhWbPx3DTi9aPwEPC6SessqsQ8DYxcH",
  "key35": "4qvTUy9JNXXeTJbKNmCwMGfTo2HVhRNFRAjtzirWp13Hnh5ukiRNwoFUqn6xzZfUL6ho2jHg15gSBFbQMDErWpMo",
  "key36": "2dZJnpQpxEZDtaTjRM5vcNQZkEokiQUe7nMzQRn74saHHmHven9QTUeErX8ADPfhwUyDzNJeB4XXKSzijpir2Vt3",
  "key37": "41M7Kxuuy3wK49cP37wB4xHiddfZSeX2cwmm4436ss8cZVWjTRMRjg6LbtgS9kA5gPiHXQnGrXCu8LCANespK93A",
  "key38": "2Xh5ZA9v9R74TqsEa77RxdMi3zHK4DL7jxnrLE4ToDoQZ7pfdpQhJg4U9nWPyRUeR4BFNyz81oBTDmFjtK6f6yxe",
  "key39": "2qJ1XMsGSmVhxvRtvgNxETrU6dj31hAZDFvEwXueHp8xxUdq6Kuoh1TrLjdoxnAXL3J77PRqkRX3aLEo3NFv5DFV",
  "key40": "4ru6d8aaBivSsgibbDACwuiRhQFfSYLbMj5zJVVSniT6Hoe9X1L5XuLgiji1UFwXB14T9Dnwig15zasQp7KhtUwn"
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
