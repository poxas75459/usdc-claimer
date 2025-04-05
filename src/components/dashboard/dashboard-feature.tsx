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
    "29QLBKz9pCoyfHDhmkvX53Wg3wt86HCnMZtndUuoKQNeCJEwTuJgR59xUyy9d2xqKks21BJuQYDDC7Vfma8rV4LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRKqGg5XviwVaf4zfhxSAkQCQmbuxbXTBa8dpvD7Z6VDVp5havkFndY15NVmLMDNy9RfzPxdmjdGJrDk2ZcDmjb",
  "key1": "3oLzU3nNic2VV86pqSDE8A3grwRyvjWAW9CbtS2gGaPuktMySQ3vb6nyDgiAhxnySbHthKAfmdDtiQMXBkPjGWe",
  "key2": "ja1bco5WAPLnwc5Fq7kvSM2v1Uz1nEU4CodcbWS9GymzYgpLLeVhhtCVToT6TmvaQ7ywcA2vnRGSom8dk31q8ZZ",
  "key3": "5unoVGsByfAFK9kLrM7T4rTv5gXMFCTBNUzPGR4Y19KZVhecAaid8CA17mJaeUHnVhKEHXku4LdxgbSvgubAYues",
  "key4": "41oGQTJ9SS81RaVgaNGfsdk2f7KaAZvsruzmYkMJkpfHHwGTe8viNiF4a3RfKQK6Tux9Mbnrm85eoSptduoBhq7B",
  "key5": "2URFRgN2iUEvgfHLVhNHn6v4pL4rEPmurk51BhWwRYWMdEK6USMoQqtFZLK98JhLbXwYujqxne3BxnmyN57inxRW",
  "key6": "5BygHuqei8upBwia1UmtL728y4zQfyi3VB5cPKYKpVmhzopoVWqPn66WDuDPJT4ML2viMLs55q4Zb3pvEHDvS3st",
  "key7": "2vHNmqWnSALGHeg8rYqAk1ii5UCfXT1wVf5XiuQbVM9UaCDhreu4xe3Nevnmn6dw7xRBTJ5m8Psdf2NzVAh5ZLCD",
  "key8": "5AQuVgNELRkTEE6T46C3rXon6eG2JhBnTTtBAjZ2S8zqvzTPyv7444jW11TSosCBRsjJEG8vD77dMLY2PuaHbKWx",
  "key9": "32SGJZYSLAq7kSbGdvmjci5TyAgQ88xYcijnP9E3Hbp3ZYyQUMWQb4RLfCejhihdPPaghykg9w9cQ39Gw2YRbMYS",
  "key10": "L7Ayc8YyL2sSuN7hiDcqH5t8AhG2jzw6KffnexDy2JPY9NnPPiVp8SpMSzwaWZTnWd7CPCnRgJwoEH9riH28Wpo",
  "key11": "2HCmBJzfWDUFq22anoFezx7uDMNweYrT7CHAxdfU7YiFLYTYJ9qf9GDNwrx6QzeCreChQxhTmR1Nfo7dPFjLAaNa",
  "key12": "57VV2XYm3tRw8cMBLkoDVzFe3pTW9Gyhaawz8e9SW4a6zCVWKCZXZooNQVAG9bePp3DkE9ic64MBPhmbi5vNSmPU",
  "key13": "32RWLTCZJV5afSdfeANMZc6T9KGeKDdtA6iDrMFxsYkQibjVSa3MGMEjMBzx6JfB41Di8cnxPuNMsBdBK3WwGmnZ",
  "key14": "4UskMiGM2xjQdKvstW9M6ciGUHKifY9e9gSSkmjoZPXhgb1kWZLGabhNkfQYxFQRZTRthyT1nh51q6NW4mkeXBsB",
  "key15": "KuUZPYhKUjvQbpzW1gvJFG2gX11oLJZ1ZeXrXZxd6AqWmg1shGqa6kBaL126SDV6krhwKDTj1CZRgjVjXkC61z5",
  "key16": "5yPKLECZTyLv9Ggrb9TZ7Efy6vPcm5xdwYw5ibfVkm1ypmxGppR5eQhC6iBbXns7A3447N4k3VMQZsycoXkdoGoZ",
  "key17": "ytKjWooCh9FhXxHMNGCjMf88UgZfbyGfREUFvZB5RyBhvETwXHGNNCkMB1ZP2K1Rk96NYAfGpoGyHMvCQGe3YFA",
  "key18": "5ypVdDWCKrzFLzYrp8rHGMXgrWxLeMZrnYs2Dgy7qwCoxJwhzCPFbZUEWx3beoTSwcr5NK9LP1sHZRaZzXREQfcv",
  "key19": "h7ALCrF8M3LTXfeUU5PwitppTqtDzaTpKjhtqRqTaLq88oNb1s2uCAJ8s6qcnvPDfqrz1oS3t8biZMkA1iVDsXA",
  "key20": "4qTupTvda4HLXtUQYjTM3AmXJbod5zN9CwDP6BXcfkqK7kZJr831uDKWZihBgbUCgzR6oL7V3JT9NqrMaHU1qGGY",
  "key21": "4WFcqoZZrb1aEaSjf7tp5bsxWrPxsxm7gRH7yhJFaSZSW8WLMco4xsY96Tb4PBdcLVvHMevrGMrgXdkC3MxppRby",
  "key22": "E5u3rvV31DdwsamQwBKxJ96toTDz4tULdk1cYrzjKuAuPxteP8khVjnwoA9A81x9CPafhXSZrEMnwDdBEYukEiB",
  "key23": "4KfZChwu5daBzRxb8PnNZsjDNSG92U4fMnFNz6ofinNKbUsMVoRsCRZrv8fucVBmi3bWHUpfhC3vPQje7t7PgdJx",
  "key24": "5mWrn3emTa6Cbh5nSQVWUatPk7dW46YDPK9wxRGgK8p3qVCbsbKBVyHmNGhjsgtqMhv9jXR6LpdbCzh7grC7Dhfw",
  "key25": "2snybkdYDSbgd8f7dN36MCoX93XmKybgQeXsWMrbjZhu8iUQfQoFHp2KWWx8Lrn15iA5NQRdtErJNutZsS4mv1HA",
  "key26": "64og9zfAmDcHiyhMJEjo6CuReg1AC7VFrPjxAziPHg6d6mFBoFFYvjfi6V7cYhpGB6kXfdpfPoR8ay86DHGmXuT6",
  "key27": "5YfLcpXfSPkwNEZQzeUXDkC6nXGjxEY21GFo9LYiyAZ3gyDujTU9eM9cdYgGrdGAQiaPwG79NAV4tvPqiXswBRTB",
  "key28": "3sP5TLeMCfyWBP8BtgxkVzbwqfthiovLhGxwHi29GkV5irLGUNaTrhRMY3T4ommmQetWby2prZaYpnFa4cM9aQro",
  "key29": "4HT9qxG23YH1EqK2J9XpWNAJEmAxd5PYGiquo91rmiwZA3zdxovdnwAjsPfYhQogM8jQY2K2BWrx8mDLyrDh7EeR",
  "key30": "2D1f2omvxDMb8QejYByLgEBSY5GQbhPHsp94WAY87L7QqWps1WMzmWCFoVWGSx1YD3qx8EiLBzuUhe2cpxrMrauv"
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
