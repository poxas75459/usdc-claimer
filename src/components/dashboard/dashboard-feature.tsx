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
    "49Wra94q4PgGSG4z4hi4vDNmNTednpAM9rmCR9jycnaqFs1s63EGxxFhmRCTLnrEX4S7MorL7ndzEPTfrhC6NosQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RL3QjpE5BtraHxLUZHHt64xGRoFFQ8MMKuHXZxUAPSxVDvsvXywUWQXw7dCmcJsErWey24q1hufhdAaVTzXF82t",
  "key1": "5tSvXmCYbHsRhnHy9ZMx6BaF7RUsjNJgDMeDRmPu39HeJeXUETdRe4J6wzK4JP6k6mYNWsFkDvTAeBtQ7RsXMgug",
  "key2": "2885spPXhUr94xgAodxuJAmB7qAuQFNKHQujd9aEoSA5gZp9nURFJcFnEpX5qp8oMvgRSVWHtE5jXzR7sYTSZ2F5",
  "key3": "38Cn2qGob14t1ZoNkASp6CvU235uN5Uw62WHXsAqz9stytwF3QKdhJigFV36F9RDESG1xeYeBbtXppzbdj2NyHgG",
  "key4": "5z6Te9uQT5ZZiZfJMGYuSBdsebQa5aez9AyNmdbNMyFygwg3hh1pyhfTE9vrrW9FszF9JcsX1NdydZTsKD3JKWEa",
  "key5": "3NN3oGuHoPMTMwVDD61kjeckEVYiPBeFz4MUWt3SrHzWfesajQLKaP1JjV4vWSW3xEH2a9jSZ1Def68PPeKprsxM",
  "key6": "bFYmdcLtG61o1mZ1EkikYEUCiNGvbbUgqKFeQzsxPMQdcGsekmieYr78tkUYqbALbScz9MnW8U1bkbe1Gb2pcfy",
  "key7": "3fTvNMuZfP4QtY5ukeSwU5nxX3pE58AoSxCKT9r8NMimecbQdKWxUWCm7xKpN3G9jYTff1wJaGKveSR51yuRdPYT",
  "key8": "3YwpcBpEZbt3JVfMfLAP9FhTsiShiwfTiVwed71UobUp885KdqHTA8eXDnuGfpVERiMUXfUEmU8qSm2CnZsnQcFs",
  "key9": "5c7MqQi8KWMnqd2cUKjpdkeEHwjm1tiGppEVc6zgD3qoyX4RfCv1qvAqeQPsuUZa5HQB8dbmFsdbRXY1QyvnKGu",
  "key10": "31wktyNS2nKeGGLgTRigPtDAa1aWUB2ZhLJ33bepinKyPPqDCZfFHpQgF9tgg993song8skQDTjhhn9Hggmw9kkb",
  "key11": "2q2QX2e9uF25DZh7XZF5PHT3Z4ZZCozkeeN8yGtjStetBt871NFEw99bgGsFcTdvLai5JhzHRxeUMZPRPqS5NC5B",
  "key12": "41WTpBT5dNjBzhaPZNPU2YkQ4whdoRb3D7KxuDEeV3QedBVup956cDB6duHs9ZQb63wqvRsHaRjfucxssCQNNBLE",
  "key13": "2se7FajeDCYzAhx861oQxjJirj1geazV8ZodjMfQ7MHdB5XhdsiN9F63bM4SzTgHq7tRLNqz1JDwDUVfoMaQW6qp",
  "key14": "4asdBuhzBbvHUKb52P3Hhq16Y5vmdbsKP7dk9vNBbTiAwcywDmqojWwHbTnzzJL9bQgyRFGx7mx5LS6mmxWPzwnb",
  "key15": "5JLKGfxGWQrY6B17giP4MhcBiwRwa4VwQgP7m3nVPdkGv55CSMGmBd6FXCs7LsNbuJTvpcDSewScuy4hAxAQZneJ",
  "key16": "3cGcea4CMzvNrkwFbJVvm25xj4RFCYDSBjbTYbmc5Nt8zJTbWWefHXsnF6PWJ8iLjAaem8M9jY1Q1rsLDNgnRGue",
  "key17": "2C1z6yvxQYprDn5shPkvoo3t7ttNvgHSwSNAfoXkKHkRsEAmjk7cpjf8YkerpmtYYL7tVbbbeyzQRhNntukLXbXa",
  "key18": "37zKWzdj9W54PrTaewnuMpWY2QfbifWRoenzrMQnBTHBPf5RXKvpQSrTC2aJNaW2dPUbgqupPfomuY5P7qLcNiaD",
  "key19": "46DReyXUttQ6MnQ8JTTJPpgRk7RUND4AXT1rjeThsVGqmArQtK1uNRU7LUuxPfSbCxN8jFgzFcKJetC39SZFvPKb",
  "key20": "5nDkTBascwZDarWBBgNCSGzkPg5yrBfjJquNtcj3mRmKvMcygYayNQzr4oHkKc5rSRDhuF1EMTKJRH9sKPUJRErf",
  "key21": "2R67DcWFuiD4yBJPG3bFjKcf6vaqoaSA2Sb2QYz8FjC81UzBrSNRqaL3n7oaJhHjgRkr8Gt8SmbqQZa1cFCmK9gr",
  "key22": "2jbJyUiN6xEiHfaJUdebGDaFuudJjy7kj9Deq86mEj1EAb4aFvqZZRgDVKWNEcekMnpJXywqwuTaNMn2Qq4cTaLx",
  "key23": "3VguHQFFXqhH5XA9ELKvUehdiy5qSSjiNfWJ1giaVqDWWXsY7HcspBXeZQCpYNLbLay3czbzwLVpRaXRzaZR2dqb",
  "key24": "4wzboCFudsUUtDCwpF4qFKuvgBeQ3xjoqAW7JwBagpWGdLmMfZoGGWovMi9gtyJLdZLtwkx9BtcaWD9VtE2vtgw7",
  "key25": "59qnChTqpYgyydrunURcxe6ZpVBbptmRhmtHMBaDrD3kcdXX4TSjsgVeNkAKiadRB2mDmGuC9X2nqfg3ZbAmA5qe",
  "key26": "5JFFt4JjkHFLAxmERWcAKKZTrWFdbRXegygf4kiBos37avu8Yay6zTYGt1f76EnRCLaP21NBBGq69ye39irHDC6o",
  "key27": "2Zh7SLfUZZR3PBCto7zFaeHsDXzdGjdygjfbh1zm4QzwE9ptaNC9vdXDZQ7wFwj6HYCxPL1NC1xfQiHXvT5ntBmy",
  "key28": "4QGKNzKvnhisF86PvmZ4NnLvZTpQMPPcf2H4BFfhcy3A4jm894Xfz2Qu8jCouTVrLR6VDm9Ti35Gv76AQPnmens1",
  "key29": "3Dbs6tZMYCeJNfVDCiUaKsPxUAzsv9DLEwFW9zrWhedUgKAs2picbP8bjX3PxXXRdv8YhJLDK1S6inoH7dCRb11u",
  "key30": "345kf9bxtz3qiv9h25SizRocGChG294cshShm5X51QYQg7XgxA1nCoMx1X4XK9Ja8U7x3GERpwMwhxHoix4cqBsA",
  "key31": "3MPtD7FsVLocysDt8Wkfipq7ymYuzHDHLHkDTxxTdCqsdU8k4ZN46bYHPd8HGDvyG1xtS94hbbGoQGGKwWmpqQxP",
  "key32": "4Wg1pRagu3osYsdJsgxEucVZFAjNEMegb8AfreCNV7DzxQcYxxJz5ZwrMEQYyufosX3R7sGGUxWdm5RfGtuitdvZ"
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
