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
    "eyFNtNvdsBr3KRWpfCgT1Ng5NoT68MWU7hn168FsnZ7CWPmb5cQRUx7rtwZFH7XyZNy8gVvVQrzo2nLjnnWgYhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xc3jUv6zfRTZc3GH3CRxMioggC4eTAsWt7ss1jJLAKE73XqocdGAbZ8Ud1h1Gc8Yzy85SfeW47Fv4JLTEiB5xT",
  "key1": "DxjU3jsktN6GBYtNq427rsx5kdLUtgZYjXRe3XJwf9w8jbiATsk3BCMYPd3L5tFq677UKdRRmDNHq663u66XoFN",
  "key2": "3KbubrpFPtC5oq4eCSEZUSjFK1xWUgLHJWP4u7KVaVsNa77cMrYakhWtN2fo8LWf8pn4EJP1FHtW4BhJtBtvNGtt",
  "key3": "3boXfyAHW3APufp6t2tfqv5cXAtnfiBWEn3KQBygVFeccStUt7fhxEdPsCH72hUiH7utCBcz42ZrgrudGEMLJSMn",
  "key4": "631dsoY14scMTvWgoe9KPmK5EiSmtfr4iN14dzjj3JTFXPnDNgjD9pwfUpiWc92HnuSd2cRiMqmKjc7TnuWLacCP",
  "key5": "GjrdBV5h3gDKHfXa35pkq4YxrswkooDVvuv69WoWUrZYFxxo56LikiUrqDd8j4M6A11NRXbmGNzi6rfG2tYmGkn",
  "key6": "3MuWoeQ7712Gk424SWXTruhmmDRMzJvXvvJYxrA5dg5Qst8ewEYqRU6Xoe2qpUTwVpXYg6khfAmHNKgQ115RgRSJ",
  "key7": "28MuVpfc5MWTZDtZXw4LHgkCx5GsnWDwmNA7PScAfRex6PuEv4mbssTxZnUbexctgov9QXcBJBudV6YkVGh2dKqE",
  "key8": "5h1YtZWoAPpm7mru4nSQPV7gRwcf9fnGHxAUGbdHRss8z4Jnt9Aeneh843ffpepRLQnGSX3vpN1s3eYa7GFbEEqn",
  "key9": "5p4wZ26kYg1fSQ6EFQN3pAsn3tVoPAJ1DZgfkPQiYS9iszicJ46Z3vB4izHVHzD4DtkzkCubHFiGWfTZboH6P1CY",
  "key10": "2YqNPA2EQJN9gM4khGYFfz2AouoWTL2VQxUwUjMwe2dcTY7CdGfMog3NhdAXaf4jimg5Mg54KDCEy9WeiFLHdLpb",
  "key11": "6767MDiV9Aidn4KEc9oBzBo1wXdwx7XQsrxod8V5fDCyxtU3MvZGdHUsqEF8ZD3jsBXMwKiccR8tjRajxFG7y9f7",
  "key12": "4poWByAtZawyrDC5R6YRgYi3Z945FA37BjoeoMRvyh7S6MUttY4eH71Esk23hZQEiCSD53texEYnBmv4GqE79uT1",
  "key13": "5fneiw7krLBWADaWvaqUSvcyaWrbFjaU1hfKGYBmWMRkWvM77YgQXu69c4E24RyWpFnWCdY3gJMh87tuomUZm9sR",
  "key14": "2KtMwXH29P7DVNVvzrFgsHiRDRc1GXusJqed9JX6BaNSiJFhn3mCNwNRMQQ9KLZYWnUHAq3tFy4ghR8AtGeSKsA9",
  "key15": "2HdgZjJLJkHATSkaMieK7rAcyq43CHqmRxQHUbQJ1CrtsUwUKADcpBKwNwL52posczRQRurx4pNwc5ngxjj3NoFv",
  "key16": "cGzAyyF5vQogGHUPaFM5yBQPW3WdrHaQrxJjQUj9wheZVnk3KpckMJR31wbWj9M7UF9fJ1esRqqDt1nViPRpDNm",
  "key17": "4MUq4LRXQwf1R6E87fZqN7V4DGkPezuKP9QeypM9AfQR7MKUZLxk6s4momiYz5epqJ1d1L1M63A4NBGdyxoLjXkp",
  "key18": "5NeMPAzmzszMqppAbY961Pu45DvjGUoFXdtq4u5neo4WrLeZk8yKrbogEKgBMaobRB4HwBQtRanUxrDkaNHtrwJU",
  "key19": "3TC8pAuLkRTsrNsNEmxVhDnS2zWbAxuHqbYM78grZsn9Jihu5SZib2jS16iziEZSeHfpcGQraenW3Mg5Gha9rErv",
  "key20": "3b4JBqHMrmL7qvkaFMDP7h3CLz3A8YKAPXdwMcQahmBrk6ymiBaEmpMkTkTiaAJsUBXb6YneCC7eHSHyGvsJA9Bp",
  "key21": "2uGAeZ7zYfy9N6exYhPNmhoNpkAzef6p4qN2PhA6Qe8xnJ5zTkLi745yrXod5ov7oT9ZiKGDPUCcyb7xSb4tHJD3",
  "key22": "52RtiVcB1mQDoSvJvfKxc7QwekvNrQENdwqhNLFn1CWbVx9GpgzUvCWdaCZNwtsA8QgAMjrJZFiSTbfkmkHzDAWG",
  "key23": "5TmhQMoLR5Gj1GaQGDGPMsTT4hFrcjtFwiYoaiTDSZnUJ5TU1FC1mY5Lk3Ntp8MYa6ZTRQG9hJyVbVAH9QhaFHZq",
  "key24": "mFk7XavT9gkQ8CDMqBMQYYXeQ4PXyPEUKHKoo9ET4zS1DgLDB9gaBRRjwmu1JooH3NEyFfKx99TgaaTNNX9cPbC",
  "key25": "26sQFKZjvMoWmuoHBpJqes5bYjRBQR1zd7emXcZ564YFXWgpsvGQfD5zvzpNAnJW8h3SsuhM4G8JGYoxJWidJ2mq",
  "key26": "BC7pfJwdnFo8QHg9TG8uJnCkZXVKaEjcY8yssg9gafx6YCEeYP4GqPEJuBL4ryYcmDGUPTvebQBd2nAAteM6zh5",
  "key27": "h9LUjvK91LvdpBiPQf7Knf8nHmUxcE2ZbyuNTPa3a7tSzKz7pwxfqnVJWfZjChsP3tjtD2BntBJh1RzeBxGrDhH",
  "key28": "dgenFZH4KCheKwEYWyLnKhL2VcmzTQdcaer8Z12akamkuayM62Uho7v2KQcDWARgWyJLf6kyKTJeuThFHQZzZAk",
  "key29": "2bkMWnhbcSCZCZLXRPiEkFdXM6cqAYXBFThubBY1H5UWZ9ZkAMdNyMfdDfxN2wHJVgZz5KHzqytciHmRaF5Dx9B5",
  "key30": "38HEBBRZVmMe9STYNy453QEfhu6BDM4za9PuSjEJXmGkpHXXhKonWhVUwACvCbJCV86zK7uXP6pGbqD8DHwT7L4K",
  "key31": "3fdGZCHX4mKs1cNgiFodCcXi5rvSRFhbpsNjwbi8fWyi8PWRoUitNbyNNnxs9phcUZp2tZJSd1dbF83cjx5BmHev",
  "key32": "42Gu6b22ZNaKepgLk2tciLmT8htyLbtYNZgEsbe372jx3YxyWoBiToQ12A8ySAQ3THVAmxXDnBSAAw4vYRKdqYPS"
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
