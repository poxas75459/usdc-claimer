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
    "2fQuTcsvoqsHidEzJ7Hb4Y4CxmSatKRRPfV38zRJDg5xoPum6j1osLYPm2oPTLrFaqiQkaBvDMKFTBo1vmBredhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfWC3U42SAAjmuD6a16LtPDgaxpbctjpG3WmqJFQezPgQS3HitHfew5PW79AJDAyyzCc42cM9XNwfzR46BzH7U5",
  "key1": "5Foqi38Q74E5r1ZWicDPkey5mrFNQCsVes1pC1J1eVfmX4PqqWnGZxWq4gNZy8evJv6Xuy65Q51jNfNZjiquQWS3",
  "key2": "5V7RJ6NqK9kyeucB24NE8tuR554duCzY9DPYYXuV1YG2iY2Yk6TRufa7yAcLtJLdHP62cpj7TXcZeABKHKqZiQv",
  "key3": "4N2xhHViPznYcvnVHNoau4voV3Mq9VYmg8QC8ddBAmENVhkVG3eLPQqCEQ9sUArzPRr9ZDEv8J9R1oEwvhY9dSjH",
  "key4": "2MtFHrnzo5HgzZ9DHPBU52gkd6gHRbn5VHdDBfQLzENpp9EQgXPdAXxGoshtqiVx3RpVdDwGwbSuRpFGKzbLSkg6",
  "key5": "JzbQCk7v7RUznJ6sVGG1TjjkNPuXoNy2VKU18KdYw5VjRmyTauz8piVwV1BJzMkAouK8wTSNxsVUgqBWkJ3HW2V",
  "key6": "2PPSGvstkT1tNfmVvRK1XAWSYvEV5NuQAABg1F7SxwDzXBs9f4eq4Wsr8PgHy2vG9TpYPCKTs8zU6jkLs82mnQ9b",
  "key7": "4vHzUpUg9KFdHZbrxmKorfDxxY89rQT7vWwt3PuVGASKcyfjq3DWnkh1eDtN6cre4R97uLGgpKJpHnJS7Z7zFHdR",
  "key8": "41W4Sc3DdqUp5iEr62xKhadeF6LEAVAdPESG4GfqQZpqvcoFjerP6nU5Ryv8TkuZKifYZfw6TVNdWL4QfD2xez7C",
  "key9": "22oJdPxkcc9ntfnj2y61kP2gr9rwN1pYVYMnZTbNK63J8WsCDvPXfVhjfn7zpu3YoVfufMaUEWzcF2iq6VbwhbbA",
  "key10": "24edvq6zhZp5DyyqqwmFPYSiHjGo6P4e66GAKdLu8czABKS71YFHNeZQA4cdSt19foR6s8VtjpezaWZVgSvwuwsg",
  "key11": "8rJEBQjmA5sqTq3eePXyNTUvZ7YmMJWp4bqoKBZnqVr1oq6WqT718L7yECX9Y72giRb6DDZ5TGyrHGe1wDNfouL",
  "key12": "KeQa8M8cYpNGySLteXajAHvVki4gxqWd9C6rYa3svgCX6pHxJaNtcRi1YxciuPSeSQr3s869cE4z5i7Dv6gdzhY",
  "key13": "2bqCM7kuLrdozgZGD3rn8fu7vCa6SxLEYAYaWFTx7ZAXaZ2VFLX828phXwkYPYDtMG4cgvdbecAKEBq6PkNfZwvn",
  "key14": "54HNiS8HMPvfh3N7d3vRhw9dVwshYhc8iFhUxJXoXmY9tPyy6tEJYyt8nrAGuL8gSv9CqFtaSb1fFQzC69ZvyVMx",
  "key15": "PyqPecP7SSuavuGVg8gGf8SVGnuoJ6y9uyk8b7uYaDLh8BSBCcU3jFxvK6SQz9M9XBJx7gMAJZjnNVq559c8ZUt",
  "key16": "5eSBQM4j2kDpWeWhpPV2syAcf8je4qUgarBrdXuAkJo47MYfxf5USg31URF2cKm1WJGw8r5jHKCRAroBtb9XPtrz",
  "key17": "3G1m385DH5UKVxjCRQUkMLS2rpekAFr8VSDb8ckdjs7CvwJqeh7Mmvd9Aa7YsoTQotuZDXn63fbuNbvAwpNfH7oK",
  "key18": "5ruixNxBvKagKMxitmNS5YeqY9n6PdANhGgdcUuYryxiuPYypEaSYTHKFzGNmpv9ZsQmzFffUdjK9HCpHsHnS2s",
  "key19": "64xKd2RDeysgMdvv8DDaTp6BUjgZQTPXyNyhgmumCkUCNWrASwn5xXNUncq2uFmEeJkkYQzxRHbQKY8bo58XEBzi",
  "key20": "D9CGen5Lg5ZV9YEejSiUEe6WdwFkQU2RSXuyN8V8MFXpoCsomEd6rdxR4C8YoW5CTtLG9KhbUrgnVc6imuiFTmA",
  "key21": "5fDrjtVBwW16G1KCFMhnG2gp6LPCAQdTHBALysqAovewijTeXzopJ98iS2dfZMZPo89SusbqFxmXVcNiuKuKtQc",
  "key22": "w4TkSnHbpTw3A4isUX6msGUAJoZ9Cs49NYe4TJAacipFdNDh1keFhoY4dx2gCQ3MJ3F8VW7rQ6n5YcPBNQobJDy",
  "key23": "vtQs5WDzHUCwW9Ni9uDBV4p95nUHFY6WSsKB1bHxhumbGRSBni2ENrgbqRYy467nJjCNsAbxhtzdpHzYdega9Te",
  "key24": "4aPqXbGAK2YW4PqxbKstxoNGq2B6LHdttPHPyYiR2bWPVYvh2gGoj4dLFa11Brdy2VWBWnEwdmp9BoNWkb6eFQud",
  "key25": "2rFcFGVayCAW382HbVkuDhwx2UqhapLxdgpCVKn3ne6cefekhYrPKYWaJey2r7ZNfbTFviMt2itrheNsrp9EsgCs",
  "key26": "2JgEYfNCyPqbMWFeV6p4WRQQWTfBSZYAFJiZXzhKzP29Mzy1Za7sBmwGyUbFe9yEgKv4QNauAPXFNmP635fX7Vfs",
  "key27": "2tRfW1oqgG41ZN3Rg5gL1nUAPnvwRmZr6KZVVHHJvTM5AqWCfa5XgGKsEdnXkcVNbdxeKktnsX9oDp7w1yxa1mew",
  "key28": "4Bqv42NXmHD5471dXHx8dLUcEf7eHSDW4TZn3aJypAcYLbnwQuu61hwJcCZfL5hYGk14arFyUijPue2D8MKhPFfr",
  "key29": "5kjCGyLpgDpcEQddjxcXqRy19WHsExYwfnNs3o7qfDkQi1MGaYdx3e8r5wB7qhUjaao5RJGG2pTvQmtS5HZnHpnS",
  "key30": "CU7fXXTia8KkvHCAQZ5rwwWosV4BSrcrwYSvWfAX7GdTS4e7ocwJnUwDbcVKitxEH3NAZm7xXSLVkQ2y5yBwjxi",
  "key31": "5WiH7FC3LwgvXTyWkQqQZCJpHBzW1GPke3zPg2P3HYjqaYf5nJNwSBRnbK4nRLpiZiCGmb5ZtyHYLbrq37vWmsqF",
  "key32": "5p9WRodiwXsqKG66naPrKUVBurebpdayDSgsaeTbT8H342R6Drz6C6qYMJgZKPk18uagudqvVXLpHR49mjgwRYoe",
  "key33": "bTVeCSJHt5aSUtqsjnqgMJBKWsrUGDQzj9LcLEo7rXMWNHjJ4ZyHuwNoGHtE228vcrCzabGBETrDk6ZyHizuzQp",
  "key34": "2a5XxWDP21ixbMQKMvQx7FkXW9jT4tL1zYpDmEgmZ4zm3mKpJb5sAAZR93spG5hvTDQ3VJD4rF8xWb1kwQ4nc6aj",
  "key35": "2WsyXqbUHDVWLTqGAxjUV98Jo5or3yMjtLYTCpaGQtFckn5gQF5tRvZhGgG9PdzciZkaX3JjbmeiqFxUG1ph96kc",
  "key36": "2y5Mgqx1hUUtVuA4YyoRK9xdy1fyfwKbMcDMjsCHUygRnH7LNhtFwFJkT8H9epFwrhRJ55f4ynLoD8hPSzuZx6N2",
  "key37": "49vkKjvZSCq3Zo4k666YrUwyahZPxvPor4jfxb6bHqhhp3D4Wnd5jJUbxf14bMHoWsjdqzqJVRSxoe8pYkAKFhz3",
  "key38": "47yhur2AgxpyHJpz2p3jbaZ4gpL1jV3SSo2WF1KA4ukGtnNFjoRqonF4hAXGRxV69VUDifuoV3QmFtRTkp1xamJJ"
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
