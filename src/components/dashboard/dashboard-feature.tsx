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
    "2BrLnULSaVssKwpUDm8hH6fbvQx2F6mBkgvFZ8KBW689KhPzWg3J22Cz8t1bwuVh5D2kSuv3T8mQzb9sbQMqFbVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVdfgYsLDThXpv1Rmbrp4MeUXVibED9ASM8gdBFnZRwaUCfBkYMc2ywQmPufbsCTST2HyunRmTu6NC2kRXyLevX",
  "key1": "4f1sZXKVtVZ5Kq6sY59HBZjeUF5W1WjsLjayAxVVj7qzAPfecqS69Ls5s2zU87EmynpwEC4fye3A3ceeqFrQQGK7",
  "key2": "314dY8GwjkRPk9g9FWzpo43sAdHRJqEJRGzaeHrdacthVoSL1EAW5rQ9tKRtAe2eqGkuPzhEbSB3zhgUnWrUheLJ",
  "key3": "2uAeRsgumTFWMvJXLXuzfTCLeqkBCCdvGwZ6ij8cANbKztR14N5Y9iRZX4qKfzi47AzKpRLM7Uwi6KoPGFLJU5k3",
  "key4": "3Js8WheEb7DqE5B9YBcUkdxkPvm5cxGivQtEcqRznMwMgaZfaZkz83TdN7gG4FmXVyo5v14gmreY2Vy4iJm3trFi",
  "key5": "8RHUGm3TFRKEB72KCpK3xg1wXPz3byB4FDHm947ZgGA5UESdFZuDnW3X5io4owjKqSrp9BbRT5tGLHtDvJBdBWp",
  "key6": "5nUTJkj5MMWkPmvHQkMVfNrMYHGRmhPgRRnEJGJyqnea7WWvC22HRoX81jH4XJNEipvduoGn2N8L7vyyNDchjtbQ",
  "key7": "4BKbRvM1H8js6MJ3TRcrhWuNV6vv65oR4iNGWPhyEA5ALs7iVz6DmDntXQfNRiYHG7LtKDMC2ByUukp826o3XcVm",
  "key8": "4RRzR2H9FLE2DUPrxSerq5LVkHEAhhvAqyvr4VoYZKd1vuBwVV4zsZytxKNyHxrdvew4ki5t915e4jfwpeNiSi8m",
  "key9": "q5TRc4NzcgF5Adtj2dydyx5MDdhxKQnhXAk1mVxvf34vos6qk9Cyp7Nvjdj5i6hFKsN9ETFMiHdmAYrUiCgsxTB",
  "key10": "2oK2WaMWaLF4KMCGbEt4DthPQCj8fZxuCyzTgqpfvaid5xxTupxQAjHfasHocA2feoQwKVDqxHqAeWSZUt3wcRAq",
  "key11": "BP2PQsGQYTqyssVbj35SPkJLi3A9U4wCodHpwhTirZfrYe58VRiWjSQuxqnD8oLEdtJkBgJFQBctpbH4CrsMGvF",
  "key12": "2bDQWpNbvZJ2KNFhh4GEqQNLN9FaS8B84F8rFLFFpirCBHc7JDfBS2NJVoKzsgMKJ5oMC31dMbGt2gQaCNmpenkX",
  "key13": "V5k7D5f2faaxzkdVShxWHjcLzuWFr7uBWsh4h4NyknwDRYwTAfeRtxQaxb7F9PsWN6rMZ7yXpENVKskx89YR9ZY",
  "key14": "2xizH1WmZ7mHeYNoowsDKWqx74nGapZZm89qU8Meqd4Z7DP5DJAAvHpXVVq1uGCFtWKTCt7pjx1ZhD8UktM4Cb4j",
  "key15": "2pWtdHSVwhRCzV1ETEqG4MWxViwNPNxYHthfd6cC7SdQJs8rdxzyME6JTGU1DQqsNm6fhx8cMhjBwJFkAKuRR2L7",
  "key16": "3n1aMDgpc8zhVb65dLqzDKL9ncojEecj9SvdX26pqmLAmCzfe8JeryDH5cQdZm6pgG41n7YCNWLrPDAVcjXV66wy",
  "key17": "4TmDo7LAQo9j6rZ7NzZfBvV9J79D3CSvQ5MERswBzaKHVpxDCeQeGgQZHFt9m1dxuaY6ddnGX3Yvq91nh4a2QckV",
  "key18": "qVS12zz1j4G1mZkmRohNTEKKo69PnCGG9vHSeUfAUocLVnVso7DBDUG15n3wWoKxEafsJcL5sUEMk811fTNYQbp",
  "key19": "3gqRUZybGZRk8KovuGJ39sT3D5jLBjLc3EM1Wp58wAesiaNknEnYCc5qnbTzc2SQrnPUnQswKEkVo3caMjvMgkSJ",
  "key20": "sjTQXsCoYdeGkDpeMHfUXtYoC6wW362inU114TvZyRQEbmNuqmVNM4g2Fw4pQjFcenobxeP3GXEdrMZdcFYKD9S",
  "key21": "5jt9cKNQZTrQH7yZam12Wyeb2fcmTo8nFdWYufh9kjn5wzTXnt5JaWbTeQeea3hMifydVGVKEUHCwsocaaiEBzMV",
  "key22": "4ktvjwmv6PdUNTA6aznSkTs4NaRVnLJVbZnWqE357ns9jqF97ZXFm7FDx9137drD7ugZfyCJxGs5owQ7DRQt5ppk",
  "key23": "4CpCvjAgkbdeWna9bK9Q3hvgvEckdiUHNTjyb61EyynWMChqAfniH9mojDfyBAxeZjNxeuN5jM8pEwNHHRNWsSQh",
  "key24": "3v5CcmUVtDsHSRwSLWUadbjDdG5sVo6G57A2tw74F6xqYkf3Cgv4AnJHmhiv2gBRKi4gGaaLWhYENnAbHKTtmqEe"
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
