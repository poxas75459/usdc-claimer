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
    "2EK7VThLvSBupjAr4mUy8bGMuFRcTg3CqyWPTuaqnL3Kdqofq5WLnogDbGJmbn8mJxtrqufDBZt46xTiiADVgU6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TXvoyLzbZnxLMMD1m4M3pLAYGC8hcrDsbe1heSUadonthP6DL7WqKnM5to22trdgL2cb92GjSwRXY9RYsTMnjP",
  "key1": "4oFaavjJjtqC1VYsdd6zsmgHqoP2xuZ7kmQVbckj4LrC9ra5HnLXx8D2AUkfYTW5b3nGhffiuVC9uaUwgbZjD63e",
  "key2": "2yjmuQZUqJAxbVaXygHUnFuGNsEXkRX7yr8W1RizCibmfWCj8NXHuAn7QWUtT4HC6jnvPefFY5jTqegZGeo8QG44",
  "key3": "3GgqP5c8rEbe7X4xDnfySVLoMpScA2GD3DwJFepGj4bsBiRprznxXQUZj2m6ZNUUBArWPyWPStDPcqmRuZmaRW5n",
  "key4": "4Ry6hKQe4NirHq75ndXoszFBHH5oU8Wg3oMpzoacLVgVaBiu6LH6ePUpqvnmqVtiozKeAiTtqxBqEw327bTUC2fD",
  "key5": "2dkn75c1dTm3vWDG96keSqSMaxGU3X5aoS5ReemHzqCEh66re27pTLJ5xtZYb3K2vMM576Gzp2JazZXpBRpk22f2",
  "key6": "2GnhFtxGS8RSyxh3WuAJ5KEUgYMC52r4s5rEnH5fCoVNpu1aEEeNZQbFnsh4xPxnHwNHBrXz84yCncH8HeNRCP6D",
  "key7": "3KoTSi2h3F2mZCdXzcrb3AondskCahZnhHhffTh4tNAj2Ytb7EfeAeNVWJd3dgZY27iezqNS2g2UHhpv5LUuDLdg",
  "key8": "4edEmVg3G5LKsmGLejBRoNepjRzdvANzjkvSVW6fnk8hhhy2pBMesJBFRmhFJkSfc7ZV2MyGc9ghf4xvzhzT4feB",
  "key9": "5MbuuetVFrAWYAqozr92Weg4Ap67RTLki5o6Y7KrzteTzNcpSMQ7sndpecSokUGsMQUwJqv1WoEaPEJLujq1CYvJ",
  "key10": "5vukXNE7PCqqYNsTTzcA6x4E35TXbhMVQH2iqoUuic7pVSgrhmCaobBavMEbJjovxecKSMdEnx3KFiob4zgVDJSH",
  "key11": "56b2ksRVBfyByZAqF3cvFvWV9rZojgrkmVP9gPkTxERhF9Ta5j88d7k7FTtCMK15cQn31BSzGGZevTdRkAYmwFjZ",
  "key12": "uSPy9QzegxCduHLyn8Wb3BEXc5eYnuxkWYQo4kFwj9anr1dfid33YfTZDtxtvzTcx5jAQvJ5xFi9KHkZMyzqeZo",
  "key13": "tgLXMSDZe4wMH51Kh9m9KJMzdam2RtTK4hTJNjFhYcMxsFWn12cMBNgjKCVjwzHo4tA6LD3AQonSsJTdyGugNHT",
  "key14": "64QnnNMyavZVEFAm4BCVF6KYmwsC3bqu69knu4o84AP7ZzmLdRBookLZWNnApXFnBSTQ4MMzBsDBzdzfT2dcZ4e6",
  "key15": "3MCuZSo14YievUwzYCUGssZ43barZ1a4u6Ltc7fcrSmN11x29KSamSJaX5GFTMJsA5LWoVR6cEgMT9bZzjGG8ufC",
  "key16": "27hsizBkS4ojBEHdXPrHwsKw3A5JSYAvtNziYeoQrMkVTqLputX98whKWMfnXqj4BgGYujCu4WMnJY94qFgkpXG8",
  "key17": "5myWMJnvwqFgZkT8fqek7Bw4CqZnAAcu4Q4tshMbE4ApywYKo2B4tm23MjLbuUvzwaR9J86ZFGgjcThKLJLmavem",
  "key18": "38DPDewDapeZJoNcUgnQN7SARYYQLjwqPf6ih76q94KmLBivmzizKoB5NqgAX1RNYUCqvY1N3boUy1Y71eRKPr8J",
  "key19": "kdUKujnGsgL5BYxEjhoHEYuNhAdhTR6vW7UFLikD2uPQzdtbTpqTHhhUdNTcsHLMEVcCfZEW7hdp3UU94J9uxtW",
  "key20": "27UEmWQnuKoVqQHue6cY5CPbWmohRMxpgTs59qaY1k3ziPz4QC2TuaN3K29L5aT8S3DfvFbbW4Uck1pSMkcXYkHR",
  "key21": "4dv1GeY7V3Sq16T1grtxvSWSFy5GwLVT63gYrw6q98a4AqNXgmmiQadcHTozgL1sfG5qRT4tVJz52wwY1uVPequw",
  "key22": "yLWsw6kvSwHEDG6ZHxnw3aV1G3ZmCjf3dx4VZ2aqrBDybGoUcPcAA7YjZVUGMqu9B2nvfoS1GvmLmi9mzS7bAey",
  "key23": "3v1CLsCe3Xf8FQ9mGUB8WADb1PLgsJRxrrxzZGBrnESxnKmwDdTyRm7MSfC1v4LMf1o3ffzzVF21DswagiocRT1S",
  "key24": "2YaRRBemLArB4wJdfYng18HeQegkJvFXzszmtZQD1PrVwtjd1Fs3qiNQgmSNBQSCDXS7jmDBDz9hi1jY9z4r12dN",
  "key25": "25i1DwbtjN1WcNUDdod2N1uYs3hs9cMRVygL87HS83oQDMVSyUSFy2URVUZN8cp8zf59uvANGvYkAf43pV1oNoSt",
  "key26": "WiHdgtBFcCSc8DC3RWN176VXB5DtiBVSHtncUBwPhLLqoBjQc9W3fhiqm51XAkYCKAsxzEsbUb8HFQeRjK9sfmA",
  "key27": "2WCsSfFs3zEyvS5kF2qzSy53LVoeyneRrCjgChKRt7JJs7Z78ab7VC7eKVfHZGNKKaN57z4rMEKqbtiShb8Yt7sv",
  "key28": "35vKRYZBF4vPLhJ9Xf6hjMBX1swghV6irwTnbM7ULDmzm1uwvXc3nKTUAMgAUkJCut8P7agSUciVvDzJ29Dq9nwZ",
  "key29": "x3hwYcqo7mhbei79HALS2KJmDe73rLbumVu8SCb4h9Hh7cZWHXgg9n2qme5CKEBZRNaNpCSWVJSwU15w9EDXjXj",
  "key30": "2rBNv8S36aA8dEeFSLNhDxnRBDNed5SCcUoLHwcMt7CR354HscLADLcs1c4ZhiwfRnFeB8M16jvQSUH9W2F76j8T",
  "key31": "NH87nKvevVhyq2umXhMFgYf2sKFpGLdmQ5QzpR3PuPF7EE9akGejrFbPGyMPou1i4Q7SvXCPgRZrGk1LsVUjWWm",
  "key32": "M83ZQnLScHwTWk6PNEMLykyxtDLBYFdHJwPNAKpDdeknzjq7gHruKVxZugMUvtoggKRz87ExCpkNus9sJukcNxw",
  "key33": "3vCzG1sZDEwZQXaSXyDar5dJCtUihkjymrNQYvpd14FPAEqv6We3YCpjeP8ov8mgA5vxVvw9rgYFdKgvp1iciz75",
  "key34": "2USzHFsbFfNENr23kiVnsEiuFaYyLQZsGycozEAp48ExZdvBf23sA2K3GiaNACxicfSVfjnH1KB7JnK3sCjvVcJY",
  "key35": "5s3QoSkQU9cQXdWSJrpSo4LbCeTfMV7QWvW386zRrmu8kCtNb5RFynVTg6Bz9zLduKkmGtsK1NnQZA97VUFLHcSH",
  "key36": "2srynBa96J27QPXjTHSyKNVconYwBro4c68ZTZv5b6d2AWs2XfoqBX89wcbpoHRrh41xXkkZZ8jLuyb5cM3HiFN2",
  "key37": "3ZDgGHwSKGZV27q1kdJ8FnkC8pL4rp2MPsbS6ogmuK3PFQkUWjJg9pskdQrqUrFZuFwufyiC2UDZqcuAEoSgpxaN",
  "key38": "3EHaWU3YMJMi1o4KorqmVKPeLVTw1TfGyxxV94pDrutZvgXGL2onWwAibeamRDP6bdQUwd5ZYpAawjNqWm64supK",
  "key39": "2DCvD1XZKyjd8DWi5kG8V41t5hnyC4G1EMW8mdP2DmkXzZgh7AMDR4DAcqWeqpbGxS6to2Rtk34BT2RMqE6v9uPX",
  "key40": "38PPYSF7QwnbEDJGwuk7tKL6VQ5q6PykShRGSyhVJo39ZSrdXnKUjfLuzi6SLiHunmwthyBQyY2hdoApWfNuViiY",
  "key41": "4oE4kZksVNp6E4m6smDAr9UZeLKgWJtWj4dXv7ajLcuW6qy5W953ScSsjori8xEJhLnxBwhASopL7n27XxNiTbtn",
  "key42": "5ZUivN2E6FMWcQQTz4hkQBbCtZh3ttr7FayV9L7vNcosg2eRYqqmN9uJe7uXmAcCEdtuR1bPWzvbCUDthgQumtWq",
  "key43": "57xRpCLdRrpJaVAvFx5UyAxkVJyFKxhBMFLp3BZXEYnSm7SapNX6vagg4NCYetH2brU8wJe5u2pQPm2g1p4wiD4R"
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
