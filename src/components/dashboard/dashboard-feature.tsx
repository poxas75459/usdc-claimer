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
    "2FaqHme8CFSnsYXV4xbtBRkVgyL9r7zqbTXU1DV78bDNmuHxhJUPdNhi4L7TVb8x6AXq7ezHtG3opHBmXSTtJ2rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Pt5eTMrzAmA9GTj5KBGNA87A4LoaV6EZc3eJL5xcT3CofDAfHqnVgqMuNDrU3atPpQchAkyxbDsP3fuy1opJ5M",
  "key1": "26z1HFTUzP1TNyKegzrAavtqEEF89wX48NtRt51c7cW5kyY3bFNnwZqMcojaaiPckkiidGNzqVHv2KGNjBRPyUFv",
  "key2": "3p2rxnBWAZtsW3P8hZn2CaNpxVRmmgpF28zW71nHGHUrZ97C3GEwEZJkSJdriGssDNBDqWepcVZLSSgKgPBNyE77",
  "key3": "61NDfdym1KE1o5HkcSAPUNy78Dpdzruhhbv9pAMS4NoSjbdze9EpVgPWQ6P358RnPc5fN8WxEUvxYCnp639RGMPp",
  "key4": "2bfyCJ2ZVNsdErtUhrzjuyNYAbtsqiHAyBsTkAgYEkcWfiHGfPvfJFDvJBazzZpzUMKdqfXv1SfVFzAutxHNoSDw",
  "key5": "3Byy2kiYE4qQYnNAcgwp4hmWk81FX6or1Nmm6GjPhdPHKHFReJPT6wFSJqXR5cH2ZYWbmADvuysUURJW9t3HpoW6",
  "key6": "1z8SYpceHB6DNb7dyui7fQpopCaXA4iDgM3egZAYKLRCYkk1NWNgv2LHQQP5vzYMLvn8G4Dw8rMZGTzYyTB6g36",
  "key7": "2pETP87Tu3coaUBNavFFKvM3Recxx95ZPpJaEVdm8nmmV6qWUP1iSiW1xMNe5CEvXFjv3qk2T6axDg7apedKMG1o",
  "key8": "PfVTa8xR3EmPMXYTAGpi1Nzmt3V7ZP4wF9SNoBjcRpuJHUebNxPGc6X7PocozygeNijUYjmGZMHRPDxHfMEgwHJ",
  "key9": "2seQW94ot6YqtCjoKB1NVRHHp69XUor1cMsUWJ6TMcE4NeJDZaPiKo2W7swdmNLHShHwwSP4nPH6fRafPu5ZGNhD",
  "key10": "4bYcv2Ndnnj7wGCkQKz6KuaJTqiwCi3LVkbvUQxpAgVxaUeJkWzxiuZgdAUVgimEf4FFYtp8mnNqD6Jf9oMgGLC3",
  "key11": "DXcuPf4KM5y63K2u3kTxZ9qV1JJw1HR11SAkjyb1YY7PGivQETVYGfsigA1L9CjbWio2UYFn2vf2LxuXXf2EMGV",
  "key12": "1zzBpXFNjhw6xmys3WaY7iVty8mBcMHackbFv8XPiy5TQ48bX4r91PrcjBrXpPkWdNcrzESsc3BFrhCVcAusLZr",
  "key13": "62HYkAAhJxtQUS6FQKXc7bKyGG6Y83uGdJSDdQDu6hHqwLh6NV5nSQ2t5WTfKZiVx7ecm6MFUKf3ziGb5jqq5ftz",
  "key14": "3PtDDzRJA2WCDLuGZsa3EH9JUxw1xRLZ5CkNmmMDEq3aq94tgJsphESHf43Qd4Lr4sHmzUW54Qaz7rsSJiidqBT8",
  "key15": "4w9MTmj5b1vwkHfvQW2p81YeoXu7WFX8MsXxzjiqgivBpxTKJNvv3qcFJmRayzkQPuTQwmx4gdSqAm8hXjN7AAHn",
  "key16": "339JzGU152CmeWh1EiG7Nb2tSe7q7TsQeFjaJwdqkPdkibAjFTH96snPyfSWqqNfYD89PuUvY6HPXAmb3AE4qVnN",
  "key17": "4JJY1d3WQnYTGznWpFsUqocZoUZQQvYowY7Ac7NmNHbSjSz59tiPwMzvdyg75rKzp14ot3acpcGV1jA8Eezb3aDV",
  "key18": "4z1HseULRXmuNCX9z8Tirudop3R3cqbSY7HPhJbiXtshQGHST8JjEbfsUUeMuTPYuqSrKfTNiU9Wv5r9HwqmK9oK",
  "key19": "3q1ewvhok9iXjHhbDNGsDwDKDTJogjvKwrVTenhE4HYmyi6DoUZJnmdAdFN5XuwNKdhwXx39HoKAjnkdwcBdCgVK",
  "key20": "5b4VyHGeJVXnDENrXn8kiWW9G1Ai31kc1KNK4kxtmdmPETwgRk9cVGuohy2L4843VcjURPur2G46BcEiB2VJACWQ",
  "key21": "5AJ6puJaaGZosFQBprFEoK6R4EEwX6Viv4QW49XKw6jmwCxQkw7eYR7Y55Bsm6r65cJtMEZGD8KdhGt8N7kJ3Ngd",
  "key22": "4Arp4Rd63LH6LR2g1dCeU45N54ARaZzipzVcSwApMJqcDPVUH5aj8brABTGVsmZS4yhSYfFEwmD3cJ5T2iJB8pfS",
  "key23": "E6ActBrbgpJcucocnpCmLa3wvmmPiPWTab4rdZr6S3XBm7m8ynBfvCFf59DWaVVhGeE9EdzYNt9Sn8pePq1eMxq",
  "key24": "4f5jZSrRiJvMuPT5t9uAkjXV9cjqnXpqyFX6RcKHFZkT9mcLLowPEXKS7Zk9e9iZmbZHXRHGnXuXzph48ApZ6sPS",
  "key25": "5Hd3uBrqUASVigaH17auA7YXumT3ffcLoUvUxgRkZ2Jv7yxDy8zKXxbXiXGaqXNbi3cbHHEcsdC798tJbq7YHMk5",
  "key26": "kEfjgeGWcHx1btB4uN9H6wbyzg2W5Ue7DavWzL5XRfDV9n4uvyjRhfFQKCCdKkWy859dwPEhABQwtZ7oa4mq9Cs",
  "key27": "bCEZt7V6zNFX4BC1p8gmdJVK689yHwc6AMQbRtgV8KaV4wKvdZ5GkDdAejYjPtPDZXBdT7VFY1GLJkWfgiQQ9TR",
  "key28": "5AdEPghz3rYWKr4YNhP89TKAhXpJ9s2ws6ek7DLCVeVbgBjK3WvZSjXt2u5T8vG7RGnSW6uDgnJmyK3JYF5Qn4hm",
  "key29": "2vxaLAXEqqXbK7zh2ySEtXm5Kwc7onQrFB5yaBxWkr9cJLEgJZBvxzYKWaLG41Gpt2gwVxhsx9gdRQFyfErfGfAS",
  "key30": "4d3s1HRrkzBo968muHjsES7CWawYhU88ec3iuErEBEGFVZGhZHvgB8foAjGG4xtmB1EsZD4beRjiW9y9GDS6gn4b",
  "key31": "2n48RQhWz3Dx8r3ma9RVTNWVnumueTAbVPqSedkGxvKNUsnQDoUQHoscHZvigEAZYWqJx796NmqTiCTGS4bwsXXX",
  "key32": "247jnmahNtmrdZ1HKyPxqj3HSsNH28Hr3c1UZpCU6uUzX6sFyUBdrrXCTzA71Wy8WZevpLdRv8B9hNakJWfsnQpM",
  "key33": "SsHt52JWWz7Ro2d56pJ3SbqaCQSn5UJpCcx6aPK4atygQVmGxjYHJADhk8rPMawpBy7dJhYGDCTjFDNdJVVEYU4",
  "key34": "2dH2sw5RZYuLLidgGcsBE5EtutiDhhpvkJqRjvwRERdJvGZVTFi2hrcqRT8ApLJLnWVmnDnnLRY5iyZ8gMEn2mvE",
  "key35": "3EaF8nSqayRovVMv4JEPP6xeyLnntpRgKnpmL1RspP5UmYB11meRiFVWcb41Kct35TcB11nH5kh7nvCvXb3vJ1Hc",
  "key36": "e8ATgYoUsBx8iUNkjL2eoBf5QnetXSiAcL7mRX1ZRchHh4KcSD9Ekwhte46hSQTN1oBv53g1HEZQRS8bJQvDJKR",
  "key37": "539nSxE6swJVYbVfiGEi9vm9YE4MnppTB5nVEQcuBcrgfyo2q11casRFmRkAp4xmDbeieeVMvChuXifERkkDnzHG",
  "key38": "64couxzQxnw23FGBXWY8592azAUFL5dK7CYhu2CHcJ3RMcTMwgRttUHnzCc1TYQnz1hVci4sCatA2h1shmPUssT3",
  "key39": "2fz7Fkrpkm1yydHUhgwHBEuvxvJBUfZgRazJBk7t18ysWcLLLnBddf32ZZRQDMu81yeZfwGH28wSbp9M7dMPFF6e",
  "key40": "3kJnhAoDjemFd15ukLc6NLqD41KYzazfCjKXxpoHo2iyNEgD6ZcRhJTguKos3KcPEKsy3RtHwY2wGy15cuwCnqx3",
  "key41": "3tXe8AvTTiyMxsmxJxU3ocqW1ViyjrT9eh6accW1YiB5HD5fhrfdKUezihPTUrw57Tabi2e6pK7S14Q98rE9uV8e",
  "key42": "4jBGYVPEXkAMU8dopHmQbxW8uDyFHwGujS9ndc5TMtd2HTGFFEgQhKU71KokBocdJ1WiVYLD2Ftb4mDtdoG1paxm",
  "key43": "fyBfjNcEzbccRHe8kKz4aDuQbwQaSHt3Taqb9QAePUGoijvf2ZS1hXsCfFkgxGa6vuJTfrSy5tuqPAs6MTscuXd",
  "key44": "4R7vQ2u1zhBokek1RuetkZ2wQ2dXfo35hsorpf5PJGUnTqSQHvQHTwctSPwgkgakTd2mHYFKkc5KdUDQCN693YLz",
  "key45": "5WoqDWrsL1C9drCbbuo6HfwMjBhto5cgrb2TusyizCcYdx7Sm5F5EtY2fCVuVnT98JF2G62sNyaSHuLPBznBQxDT",
  "key46": "3cxb9KdUCkQtCSqeAaNHUhdZPPRqGgQssshNwbx7L1Qo8ehFLXFbeYFhmgYpiGmk8jyvyyaGaBH6bBAZG1nGEcBL"
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
