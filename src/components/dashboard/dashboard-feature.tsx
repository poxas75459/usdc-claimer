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
    "2Vy6Mip3biHwoNr229Y8o1Fj7Yp14sWXHxbELEhwUpTLTdSvoTtgJ467YYH3m1NqsDBYasDh9NCyR1jfMfx2H27Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N75psZphib6N4uTKYE6DsLgaCbf7UwiaVFqu5qUo2eXqMUanDVM9RFnRsvHUUmvwxUmXQCuKYANSxj3eEeZWRVC",
  "key1": "PiJKijd1ULSLybpiJKkyATvcZb7reqmjKrYjdjS5rtjybhbS9FifuZn4y6dDhJgjRuZReoqqptRJCKJXjWvuGxA",
  "key2": "3XAkEoMHhdS2L6kTG3r9qVVoZ3JGdCeRVQfPRAtugZyh51PxzxqUyuSgKkAjHXF4V59w6RXXDfhmyy6M4zjev6ha",
  "key3": "2cGDZ9Z1K9oF4bkcXzN7TJAjzfxHqhMrtM7ntXh31GhSyB3mPTBzWUdCGQWfCzigWszRrAtb5oAD9xjLWJmms6Ek",
  "key4": "3DcsJPfMfw3yUaDATfAGwMnh9TTd4uQCfNnKsivnGc5ub5Zt3inqQsxt1ayQvmstLF67Vy9V2VXSuu8YNw6zdJRd",
  "key5": "1ByhWcW6pdM7FkBTvvmkBz3s4vTojrmDRAX3gdH2zTTG4un7zvpTu7iChHC5bzJUsgLxt2xCc9ZryHtuXuGz4sG",
  "key6": "32rYF5pL2WYmJxcUgHbMm9E6frD6oCM4sxQRK648KCkmbzCVuXpSRej3N7SgLRteETSRu4mzBiJqogk9VeMZqYjp",
  "key7": "5kcYLwUxHk6CC1Utk6sfw2gSYPGwmkMyD4FBKu3Z3gxmUjyUZzj2pbYCy1S6UxPYxMk2jBCDEvL3NFAqgdnYJagE",
  "key8": "2HFCQpQzjjUQSRqTMK6A8t5wRn2RgxG88Xo9wMXCzL3HUrAiu8x6rQrvSYi5XYniTEyaYJRHGANhHdQbAo5QoYXN",
  "key9": "5yiBepQ5GtiRjHtWsVdxs6q3jYLHy9zf3efqzFmGzvfjoySrXGwrQ2VyKNjpU8TWkdgqECHGJiiP4d6w1NZppyPm",
  "key10": "3Wxt7fyYz84XA386riSruuZo7yDBuiVr4aQ1eVDkYeqnhnAtPq5XgFiwVqmpss9o2xbmztkbs8ws4WpvBd8maeUV",
  "key11": "3kn2AXoY8czNUdJtkx4p7Vs5KUNQKVzv8d4SAWifUiWC5Kfa2br2AYSvSTg6f1tsCop65mgxyY7Ymt2opEYfNthr",
  "key12": "3AFC6MFwYEVoMz6gbYyFvyW8aZrNC7BZYsXvNKzkEanebqBYrGvaQtyFw2fYqMy3W8axMynnkihjvczLuMjL7GKS",
  "key13": "2TRgMccKaYmbxq7No9sCnYnHZVgYJLPA578gBVNy6emr2DfgrAhuCq9UJ4tVkAprxVFGPdvrAaWpXpAQ5TA1qiXi",
  "key14": "5xasgghjoPUXYtzHePh9WopJ4jqkzm6jcsBz2SH2CPUECPvtDGho7ghNzbXQbcy1z4UnEZwn73zPmg6dhU1gitPL",
  "key15": "4b7qVSyWsJ6VTH2ZfwMqBcD9kNcsFi5nK5WWo9Be4JL3Bec7rgRiGjPJckNwygVSVooLvcVVoWRPZ3bYPPh4Am9h",
  "key16": "4g7zER3iATqSiw3NAeCWUZvR3e9KWa8WGBnw5Aj7FuJYebVU5DzCW3hXrpUEA2ZqpzEcUCYoiJ55tPausKF5W7iM",
  "key17": "4EaGrY9uvDv421CpJhMNRJPW57rAoPqstRBKrSiRdH7sL2JzA5xDoVWpAf7ATtPm7WJHo9QmU9PAKm4GL9GV1DaL",
  "key18": "45tVhZDmx3xVJ33qMPA1DBD9Hc6GgxjZW4Wyj6HoexkAbuxqSgZkcmdvF387ouoDQBGFwwPHyoEZ9EaRt7hWcijZ",
  "key19": "3FHxZUBiRdEnCrQ2FFWq5J4Y9gsTRLx8fMutGJN9AvYtqSCNAGGGbF1mn6wCny3xo5MpxFQksC6eLGLADcyQDUjC",
  "key20": "2dzSbJLYa2JcsXZKhZmBJMrY3YXZmNxhcrjvkfzwZhwLqBXdU3u2Q2yKhne3cPVrYmxau3DyUCQgptj69Yk24jCK",
  "key21": "33n4bMwwYJgPVRTs5PjSwkQ2mwcLrGQpBuMgEae3wLU6oiSAc5K3ML4fBXzppf87Xni8m3iSd7Ag85n2WsNsNMmi",
  "key22": "26K4vsEy7jfcrMmgCpqdndQzyUub9xVYgFzNYRBib7WZk23fEo9h76km4k7cjDeS5rLLpaiXktWtvMM4Lt16PHML",
  "key23": "52otTTuCRp4EPuyghqwa3K9Qis75gd538Cxgb7j7qKy6ZUK9sVrv2zQZwhJCZkT7p3mX7pyczzfjU7Atu6DBTqdp",
  "key24": "Mm9vUP3Qo8a1SCpePyBkQehxek84ZhSGuAgwNDex6KvmdmdCm722zckTLfwopejojRgqy9g4i3sSeVpYVUZVjyk",
  "key25": "5HkFSwZdaByCMyu1W8yW5U3Rg3SHPd3XkETQvSGDdAaRvBDhmzWWpDWwtvbZDaMpr5ddmbTM9kU3FqqcQGbBLzjt",
  "key26": "4pu6HcEtV9vQA8iZgxPCCkSCXG4rQ4JtgsAZeM9uV3NKA1dn1iMMvigWCXy3rFNpT7FKnTTgnLwYDH5xVUR5pWEV",
  "key27": "4ZPFTQTKVEJTxasecpAcfUqkqtPYAqh2dCVd5xFtS7SeMQ1f2UoeVS34hNU3y3SCvhUHTw1NDVeGP3x8bGUSPdog",
  "key28": "2mnHcQNQ7EC6njzNqRemhk9XWvGWxW5LQvV8AfhZE7e4XDDGzXTMn4VBC4L7yoDmzvZh5GYtY6i2PzbYbc5Mdgzz",
  "key29": "5irS5DwUxYrQRfGWie376M4iMRhGwPj1YJpjFa7zVfXyNrS6fpx6s2NiMftQgT7rgkAcgz7zFQoRva6Uwt6YeD8Z",
  "key30": "5KGPKipeD1FDsPpZ84LZKKYBQoThvYPwGdUYJMRdQjq71feaLaDBerGTbp7Z6YD7k2ruGRQL5y7QrJ89GYHWxBL3",
  "key31": "3XcqgUkEmS6kRzw9ZYwcmdDJcXQpnJskbt2G5HNwHKXFhzJYPwgSNEhKpyFC2qmy4Laqed76E2CKCT6hsNNUEng9",
  "key32": "nen1dY79KFhGcETrBvAr881cMBtFbfPVvL7nzrfX8Ae3maZXjt56CPKxCaQ69vhecgHa2Sg8KtXiEbBCYxqLkTP",
  "key33": "eP2pfNUD1kKYdTmXiSF6WFkwWWgvGiFAcmnvWgkVn4D97WMPvz7Dv2NjySG6GhHopj2X1oXC6G6uKkt9iDt6gzf",
  "key34": "2JHxFqnBcL92ep4JvqmZPwk9QNK9hebSWqi6WoakP9BbhnRwhRokt4Vj59KuLtZrKiuxaEAwh8qfUA6gBjSsHr6p",
  "key35": "mkhStu3RHkUNm7XK6uqGSJzSc8JJU4JybVo5qBnBBjxzkGZVDH24wqE4CrNCNMUZ532Ln5NU61uFtTKw6Wmpdnv",
  "key36": "4w25kZaagk15hDa8VjseCH9BsfQw3zMHdBcwX2WjjXyg15cCh8vAz4EZtDN3Kr5K8wp73m2K9sGNYAwVyNsw5EjQ",
  "key37": "634VCuqRkhDcHhEKpsyokovxP79JxeyQtiTFnCFVxgxeLab7icT2NRw9WV1uu4sKGuxWT2j5KXcPTJWvuntRk1Ex",
  "key38": "3f1Luc4jmHoXx9ZBUecLUiH4TpsxrKksRUE6LzworUBMvt3ykgPS4ddhEdyxrC7EFXzpaFdAd9nBdRhueVp83BQE",
  "key39": "2ea1A4AYLomduAEAFZkoVCgNjqaGkb1sH1sx4sTboJH9oFRrRPki8wGz2fiDnVrrb4JX3ukokypjcZGk897pjcqf",
  "key40": "5rUPUUPNiL8URcBtVia9xyemuyPd24WEUDL1rrNrXCukg3DArr14rJPH3RSDxhL8vWdw1QNtG8131f9GKmV9A5HA",
  "key41": "4b42NHYsd6GMrusxf6SF1Gyu9uhgqdZUJW2ECdb11TUwfX7GpypQhKFxrhxeSwTQrFscUuVXQrjwL8tteiMT3o5M",
  "key42": "2zt5tB5Cg7NsXZBTATD3SGvsr1sy5j5uH4aMyNGm4xQGfd91JGQTT9hZAMGVG8JkAUTpJg2t2N2HFsvNwKs2SE4G",
  "key43": "5BrkQVtPEjqYLpLQTarjyqy3KycYjKdhV9sbohcAYa1KvRSVtYkmeJCQktyUWMnkwRhMix3a9SF1V6NHKTsN7P1s",
  "key44": "1zUz5vva4KSBk3g1BeYVxqJgqicPEUkuFVBKzTAQbTGTmfvZaP8uWicymguMaX5ejsw8mwUL9ACphz5Mbi2Ha59",
  "key45": "ZrRo2mgfzBBaFbn4rwtav52xDfGq3R6huJMqRsvNvhLkxqzuKYpVoRFGJs7C9MJZd4cdpxgXZoWPXXbCZgTgor5",
  "key46": "38HQ2qcWWYG8GqVyrnAzpnddhTovSnXjvFu96f6gXUvYXbuzh3fLMVfde2mPzeja8hrZ1SfNyqHmWLAoS4LJqvgS",
  "key47": "2xqn8Pn36TkBeptzCSHPKLDrFHVRbevGRZgtDUiiUhFhhW9yHKrXiuYgcG5TrQFuhRT9KYfP2N8j275ZTMy2NXVt"
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
