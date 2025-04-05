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
    "3GWMjouormYhkFJJGNBZboh14uie4TUuFC9a3BE6TtXAU1VUMzM4Acj9n1ML9XS4osEcntRuh5EzgmTZzPE4zGtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86bLCfXAiXkfZ3V6FMckAwxmk69yqQUSkFaxxNmTBeLbiNv34WkerGxu9QwM4NGgqiAXMAm75XR97hZVrTSbCcf",
  "key1": "YEAzU1Ahwqit9rY42WJpbeYEiKHk8kFLSnQMA1VV78AVeNeCHMiFSL3zN5WQpTxkdqr91j5msmsR4KafPWfiU6G",
  "key2": "471UbJQpeZsvwpT3rLYAsMZQZ7H2Wwv9W9kW5hn1Dz91uAWdpx6eMDtkcBDoYuwFEeiySFZdqwdw4AmHFHQSLDqs",
  "key3": "3EXRm84JEfw4KeB9LmV6Kcktag2AMmgaDUZuL9tBCtyH8mzTnZiMXh8dXit7tdeVMEyWpUgDr5a3gGNkXwhAADrc",
  "key4": "4D4SD7cS6r3gv1mMEijXA6eQokQYBqrzSMfj88jC2huM46UPF3CmJdDn5E5udYbUV6nW9oPCr1W8uqJBHDYRaC6m",
  "key5": "637LfaR6DEdygykK1zFYU1cX7nkAYtiKrrpvXf1BqfCfb6J6wov1mMJKfvSYQKtq2SMZL8dGPPfZ6sar1Ho2JuoG",
  "key6": "4SWp6x3yM6AkazGjV8Hj91NUMpB4N1ZvW5nMMczGr624jUmoYK7Y6eMHJGQKuJA8FKedEkoLy3yVAvBqnjC4gidX",
  "key7": "5Lqp6s7tcRDVXmNb2fJJMoo8bjt1tvssiVkUZumYH7A2jtc1h54s8KRRySbpNW7umeNCzyi263rzE6Jcg4LNLjDh",
  "key8": "2vr5JUCQtC9t4ofEQQaEuTvmt3ZC7PCSfMyJ2pZcrAriXxkLjZmJUovPis44ow4SkSN2hBWYjvVpxPyckKGsUAJ1",
  "key9": "5Q7y4P8HrUNyq1VSuZATMVH1ZoQFDzYASKhfrVuU5PWMXXd1dmpwRLiTjC7xf87ZWeycVqB3dHrfn3Pr4mdsCVJZ",
  "key10": "FguoBWcVwVvF33sQTibUGeFejVKwupDQhS3Z1idrwtziG34z5RWpzcx7rm48me36ShYBJYcFZFzLkxRjP2e4RW9",
  "key11": "SmD9B1mryqCvegJ85vEVUBfH8zpRrmVfXCqizQ8LFKD5CibKen2HKhWp2YbjcroTEgUPrhbYqRg1TmoSJoE5Hsu",
  "key12": "2LzPeiuSvdqn3DEcpkXYYMe6CwN8ULf1jwjnu9qYYi61x9sdD62tWFaz5Jm1GcJSEdiEYAftNDmVg7u52wvd4zdP",
  "key13": "2hh6F2To62TupjUYak63R4TxBtcwh9UATiMs2JvHd52zqQdNNjug7vUU1ZQXvz6rnMub4CP6wcFQE9MyzbMtWW3k",
  "key14": "5WUJD6Jy6xw7V92b4P6ACnqbGKQYJR6w6RF8QdGErcA42jcYcuVydrvEQ4aKQEe6arpUpo4R8QsEeuxFmn3iDK1r",
  "key15": "5GBfgn5ogQ1sDvSjMnXfD7oFHscnWQiT8Vh4gAUP23rsqq19zcENynqJfN6tzSjYfEau3DrWQ78RQ84GTKwDWqpM",
  "key16": "4Xih9KDNVoDvKSMXB4s97QGdxdtrJA48cCM5ffHspxnUCx1RLLhaaMfeJ4jYrZxHYf7RFjjht7DhYaRokgVkoBMm",
  "key17": "33xzt4pxAEWHgV2r99W2dkjNeTZ8nWH7EVgjpSsf2QJZQcrstyJKZwMbdfWkPNzgJuaJRnxUvkUG32iizo8LFqyw",
  "key18": "aZAh5k1WbFXffo1KsU8Ms4ZiZssufE7EEdHiJVsdH9YX3rc6owLvaCnLje226wx7bv7jwUyxes3ewGqSBq9pvfe",
  "key19": "48B3ssWT97FXF5kUN5drjrqJTAnY2i9VgvFUpA8Yh99dd9DsrtLTz2UmpRxvv5SUS2qnYWjazhp3wiPsigkpuB3B",
  "key20": "H5rPX5HbadvVUcbnsG2RY55FLpNS1UnJkwd5MhhJf6XvF1ZtcVEtdVUARPg6AJZUYWLntDggkWeEF6Wh86nhQui",
  "key21": "51aVS2z534h6yRkR1njyhMrLKZ9WHTsTXEKD66hc8V4QXrWzek7DS8hKL4JxSDPquFqkwr5bMWMrtrhTxfbrzSPj",
  "key22": "2pREuNF5YAJ2T3NYyER8f1KzmS5WkskyUJiots8d8mGGqQfLpWmjLEvX6HwwYJR1Kc1E45tnLTTYvo4w1HYBwb5v",
  "key23": "2bLhs3WrwR7vnY8pxjW2LKnpKMFioqbFtmpy3csjJNY2emN3R9wSLbPkArg4L4aVfP6rpyjcTcK4NVaHENXYKBZL",
  "key24": "5VzNS2Dq6oxrqDBGq9PJJKRFJ89xRWkY1eybUuSwPBcqyZRh145QCwenooEmrXe9yyRoST3g5zqX2r7CmBGx6b6T",
  "key25": "3cvcMS5cRpjoQ2ztQGvrDsQ5P8d4QcETAhEmv9ckBiCsghusyoBdstKZno8QCGAr8MjmKdqLgPQVQL7knkkiNDPX",
  "key26": "2osaKv66Kp3H967HCoVCQRA2E8Yp8teDasK9LHqGkTs8ZLAJReSTtA5WBpLsfPvF9u3aDPWf2z55KhLiS6D3Lcak",
  "key27": "2jRHdPcNCTadYcMjrV4aFqET1Upx2JGsjFHvLRNVqJNFxAZKJdWALsuDNDeJ9sT7YQmRPUgHv3SzHUjbgEDakdaS",
  "key28": "4cKzaaikP9Ki7W3eZDdibEohMN5iKUVV5xrvqjwvhjn892xZKoZtqCfG1sDFNQmPZtjzWukWncTpBhu7w2gHis1x",
  "key29": "5TdfiATDMFVS7UNr4ZaY53Q9Ai2ecatwaaUn3xqxPSNXafq6Zzhi8TvudJvGNupFekvCUnXtLkYf6iNu7MQWS8W6",
  "key30": "4t6k5ME8WoMv2gKDmXaFw4hPXF5YyYZ5ryeFKV4ZnQ7Xr7haPsabKTqebN4iDJUy4QDNUcicsSf2GBibmMnfnGjE",
  "key31": "UF5MTrS1gmmBQnUdkumF3j7EbT9LmsY2U8LsVXNwdLCj2eRW4EuwHbTEcU4i3ysnUxQcfZY8KWkovBPErVDszrf",
  "key32": "2VJ47DnWKjdXu52K7V9dnT85XqGs8TTsJeQTwEniSkbjtoLgc1e18WZae67ZpdJhFDb78D4SHVYwwahRnJ75P96G",
  "key33": "4hmDBveECwwLMQorAynottUK6LpdmsBESTFQf2vutBy7EYaPwj8yiqsW29ZFX6GJk4Vrj1iqmXP1tLa5ZRP4NAut",
  "key34": "4CXRbC2vAkLKApJ9Mdug1gRchX2wr3dSytZB3y996RiNmbGHSifVf8JHkM6RM8ty8vuhJT1MLpwEgeE47zCUjV1",
  "key35": "2Zq5XhsGsQ3vSLKZ8RBm9T8dX3gaitv2Z7dBPuuKwo8fVTHytXZSFryXfFCDzUsGZMaGfH9X2e334yw2qVv4P9vW",
  "key36": "54iyHodxrorefrnNW4Q4LmMBmfvcUQ8YR8L9uWenLx2wc1CXQkhCdbzsCxoMCm2XCEZS9wADruHYuxVQoDsABoeS",
  "key37": "2h2YGei8QjbUKnV4c3qL5bCPNKkttC8Lj1A1XUbckL7gP8Kv7CxWzdcwLwfvVk3mwCz1UqzH4HQX9R411oURtEU5",
  "key38": "bQebKyNfaLDg6nAm57b9N6PBVzuq2A6gG6cY4XdN8VQGWj75cLkJQvQCpv2G4VMxNWGP26xZD4gzMHBkWLngxjp",
  "key39": "5VuEyeZCnQwDSVLMA3ozkVE4FiL2KWC2tZcFxqgPY6mz7krnQMMZotek1HAuHNXPe8pbFWYMGWv6QSjXKQ5HCfDa",
  "key40": "3rUFGVUGrddYwFezHHDGZP3MoPKXqar4AVNWsRhvdYU5z1ZmBF2VjCrnjMDxZiLwf6ven7gfMPwyDtytgiNkutqe",
  "key41": "31BjVp5VkVb5NbYMX9qH5PDKBnd14GbHTE7WVA1YrjD6GK5MX9q1jjSxtTKS73qh2ysomSg2RQgswTzAjtWtxRjS",
  "key42": "4cgEM53nSmGQR6GAKW3tPhkqQ4Zokz5VSoS3Ze73MkiEzhVjxSACz529M2UENUdX4vVbwaDEFrY8yGSG8XJcHtaH",
  "key43": "zZ9kisfV82PckU4tdvTEVNG2thHL7N9Zb8Zz22Veoz7xckSaUQfthqiUNuGv7a7hZ8bwdAJnDBHQNtHmXxBaVmN",
  "key44": "4v3mFHxPZskrSCRWihRUAqySedpg6jpU4gM7c8ssdqNAGgMwnjyPeeDTtDZfgxurviZRqJjZbepR5sMNzC9dBo6s",
  "key45": "63GyYTYeJmfzeyQpv7sECTq4Z46VNeAKHPuYowbrgncAirabwTsoKYiWLUwMTT93iGNNZ5yreALdAgpkht5fdiiL",
  "key46": "5GyCXknSUjZnsjLLT9hzXJTFv5JY9yajUXzfpgJHZARyZVBYAAW1s8z4gM4wfj8PtbAV4Qzw1V5RVXK9PCbUTVqr"
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
