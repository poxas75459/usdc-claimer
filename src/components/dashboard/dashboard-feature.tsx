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
    "2aU28vAGrq8fWVpTrQ9xSc7XQb94XVHjyGD67cGAvhzRoa9HaB4KVBY9ZSc5LHyLyTeT7payCjcWnbbarJm8DAb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYc19XRmauZp563Db47tomEv9gJKZUa1v44gwsPz3RgkougiHie598xyGQwpmLQuUSPbQ9QbSNinmN93eW4vzEX",
  "key1": "5Zk6AxdQZEgSkKiqsyLtnnv9NUTRUVLXWt3AoGK6Ge8emHM2YfpA5x7Gt4hPi2S3VwXeQCAHydfQ4LXzxsT1Y4vZ",
  "key2": "4u2kpZajrK1SAwwv1rNEJU4pyS3k7k3XSXmJqEg7YJn5WXJ1YeqLUJiJv3agER1sgXAJosujrZybRwPLmAb4dByQ",
  "key3": "KPGrXEasfxscG6RkDeKucixBFSBgP11piSWangeo8gxyw6UPxXJgZa1sARxe3TQWDYXAoTExAxZTyuBbyGtDJqy",
  "key4": "zD4bZ4uNzARLQDJQquBfyDUsNQvKvGez5qyMUan1WRPimxTH86sjPeZ9c7oZMtiBXBBUCqRnc47vACQEVPeWPkk",
  "key5": "Nm2Ak7tEQuNqwhtQZVGrWHuj9wWadN3DWXrMgt2xTpbbWBZvB2xFCX4wzjJvz8Fszcv2TZduM8SYjYU5PRdzk4G",
  "key6": "wcLuUaEaVUECpkuu1vyginNmDN11fCU2h4sT1ESA9xkS1xSZREa1zfhMy1yn6mSE9vnn4zfnDFmjBfeNSHM5xaE",
  "key7": "4ABAaWeZaWXg3rZYjd1dNirpEuXwskEEeownRPyXwwEigyvyfPFw2Fow8cJjTpw5nTstYRX9kBhuQfFL96K62YmJ",
  "key8": "3Zjdxz2VavH5PCo37icqPvfAAsm5SYeH9PAwVUvFGMx9DuVPNiz7nCKjdb11AJnFdosWfJXU9zffTcCtkPFY2WQP",
  "key9": "h6nLoyFu1nJTMWpgy767T2vaLGhqPdGff7Fb5UYqtGkXcKPbm2hVsbVW9xrkgSGMe4qLD66JuGs8ff5p3winKJP",
  "key10": "4MLmKPxs4WWdchYz4YFUnRUJJi9HnAsgaooifp7ArfdyXySvrMYG1VMabftMVNQcJYGdQ8czdcVxZejJAmy9rGtD",
  "key11": "4zgB61j2QGRFqJQpnALDFkq75MFrtGSbzmRM9oPT4ML4nmZBAuDabBvXj99e85EZMPTYPDQ761xa1jmLRxXzG1xh",
  "key12": "2JRQZLaFnws6Z1Bp5suuNqkVXwYLKUHSe5SJYkp4pDEdy855hJEH52jgWmdRyLFViida81Yfr7oqsU1gxgSgeyuj",
  "key13": "2epYYTeotm2Rhbkmgcv44NRgvb8wAvCUUHouAG5RMoSL7UdGezjxcUZn6kjXWNGMaSGPt2BywuEwUxsPgPNUtR6w",
  "key14": "4Q3VhiLT8hfXVDvw5vzQhAfWV4njp6wGgyhCUbaAAMumaWrZadiemRm6DfxTvMkDkWppnV4ya9jpx5L8rbu6AzWA",
  "key15": "4xDoTvqs6Z5FGw1isYQCXdgeJmXsq8Rmzt6qB75sYRAgMtqyQozTKtMnkmZfxbn4KpdBGdGQbzSbQPDdk6nFgCBN",
  "key16": "21vrppc9FystNCdhrFweB2RerBFd4muJnNNFwDpdK6GxLLhwkvhMJkJ9wDVfdBRZrYYNeGtxcF8i2Uu89T6QJD8u",
  "key17": "3SGyrPVwphoirqn7pUbssFixP5yPmnoyRR6cHtNC1ydMoWkD2smvwPnsAw3dmxRMSMivz5ueTkvieY8KhqfdAre6",
  "key18": "y3SqFFfi3agRsRt5ZyrXJZkcwBNkYuRydubnL75t8wLWcARsqHPWo3V9Hs4oTXk3SuXxeby1s5TdPYET8kWNy4R",
  "key19": "38JjEsGprZNbpgk6PP3Dv4umjEqLhydRw8kBtbUhufeWvCn7DEDGi6w2HUK6z4xN21GZUHuCbRxBbT92tyUtnK53",
  "key20": "hAEjb2EVVydiXqdXpnGSrZQ4Q7XLiD5RxvYGacjLvs5z9zPgXPiqzagynRRaiCTZENYk4ZePnAXmeCYCSPPXBCV",
  "key21": "3LSsTSsbwysbmmYtR5B4wCtaHgycz2pdKiFUVHocYhVgPrUrj4tNtoGimUGsaGB4D7JbboFgTy3QDEpQnWEkW88Z",
  "key22": "SviN4nsdCCUQVnye2huQpG345oz4RT7GmHvgd9AamUSbc3i5KRn2dzigBMQnCatkqdXtXt13bSKxSJNQrhZAFL5",
  "key23": "5qyU6m1jcrEoySYH3TTziGWRHKUwQP2XqSpvfwsSEKPvSNLFbfEjmZUHUdztyoDpZ7EhWFCPiibBvVFEH4gmgAKt",
  "key24": "5URWsLQQbELgQ8Af2ajfRwmJgp2PQ6EqVHYjUuazYGJMQXHqWf7fyLqqZD4BGHhfaE4RWDvKFqy7Avn9xmq7AzEU",
  "key25": "3uc51bu4gsVtGAGc2ex4b7b5tosiYa5JXYNs6DRMXwpeZjJQ6iX1vppiixQBjb1GQQKSCWfpFrpqSiBhVbvnp8mz",
  "key26": "5uy415PkUjwn4SvLQfhFV1ZBFT5etndfAQhtc7iMjbzD1S1UBz3tcBDY2aYT5vnMKR5CvVuHgPWPB1bZuVYTh9uP",
  "key27": "1Uo8WZBzK9oLoKZZEQMUSYDuPgAGUTwigqEcM7APPaSwTPHQCc4pX3qYpz8v17MLgNfqAmHssdQFhCcMsaN8jkP",
  "key28": "55P9nN2rcf8wpCJhf441GwbNQKu4A1nsUybcJhxD6p9tCsc7w2ej6NQvqTZpzJ371Q6YZuDg14pADR1EURo6AfkN",
  "key29": "5ahxfqR75HkssG4qb5h5nghqAjGg88EVWibATmBgdwtQ5TbGP2zKJddr8Rpg3X4XmccVXjAxm5oZSKhgGLLmk29v",
  "key30": "41NpjJHX7hEP3QPjkvKbyoKoARxgTXDZr56eEPfWMUBYHwn6V9JQkoAEpzynwB1ayESPuJF5Pur4fVWz3xNUFM5v",
  "key31": "3woqxXbnN1upe4xgw8vch1526oxTo61mA6iDgeUXVvaQDcUpw3BrNcBF5fkNZ2mmKmQKtD5PEAcQYGyuGNUKg2sh",
  "key32": "51CTARtTB2WmHzhGTLYcPN8fVtNPQn5oKAp89Lyjn1y4fpQLt39pQWZvFkcWSz6axocW8Ar4qUJu4eKrs7SxC5GK",
  "key33": "HNT5VeScvB7Me7MqzgxomBQtrjSrZqVLB6jrRpHkaM1cdwFZtSv9t2U4PRsoyfELkFSdaseaxTN3LY79RHkXBNE",
  "key34": "NMP5tAt1JdQ8mb5BVMKbAS29VzSdrTuvGHutcGydr3Cn2ykGUbFnEKjNUa9mcYZYoqzfergkCAg3XDFQDQ4BhgX",
  "key35": "f15uZmaBUBJ2o55ZL9UrX8gADNCCa5zVD1MJ7smXYekdUoj3kT79LRZdL3LQsPKDmrW3MjgnndVQF4ZSXkYTL8o",
  "key36": "1z4vzgJ2uCjFwW4V7VXJP2ZbmDD7riAjZyU3QwSUHCAb7U4Xgx47HuNExrQXbneHLB4C36mJiREh7pQr8xoHLex",
  "key37": "2UuJeX3q6rRy37EYs3EB8wrKqD7uXnntbUyjhsjSCEHyXXNHyXp2SbV4uPu8jxrRNUBsorP5R1KFjAampiJrLDvL"
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
