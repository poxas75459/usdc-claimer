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
    "4YdiLLSeBTkqAwXh5MfRNjNKnjKTb5KwgXp8srdFNsZauybUPGXH8LrsY2EsT2LnER6B1owyX2VtL9qV83HmHq4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTdnCxLxTJuLXGTxyAM55poXsEkSqKMA3gWtSo9ZG1xg664xsP1VA9agwVRsqhh2i2VDpgnS4cuL1MyH1dAdBfM",
  "key1": "3r8bG5zAzJfX1Xso2Km1SsPZjfkJoxN1ktu1cNuGKgmqgeFNEYPEHR3YFyUmw48Csa9Pw4wnpBaaknvUHmvih8mr",
  "key2": "4pLBcQ1NaBXgaVSe4fzADRaUXwMaxHepj41xEtwpZKvgtyimK9PJuYA4VMLxBKG7pyAe4dmUfpgBRDLSWyMEip8e",
  "key3": "3wuoWN6Dwz5K6HoM8yHTHQ9oLPX4VitoVG5pgDkBtpu8VpPrpr7YnawxmFShLnfQZfekWCyoek5aqiP5m8C1Bj9T",
  "key4": "3rViT55bWq3VZ7zjF9xcbatvDZdrug1qsDkU36Cy67dZTXW9NdXB7UZmZYcBDyidNTVGY89LWjzSYeQatbTySJDE",
  "key5": "2V86ytUxMjyz6drKmPZTKtLScjfuvcvdA568DN55oE8bPo7Kc8no8qJ7sd6wR3fsWri9ySQ1NMiUXVS4FiZXRNvW",
  "key6": "51av9f7EShQUmR7swJ532dmRE9MB9frH4FhVmTshUzBXekBcGGj2EUvEnJpTffASXri6rwTQRpnrigGAbvFF9YzB",
  "key7": "2EXfUR3xbiMuvvapoVXr6zDieKq7y1jqaq2HXM2TpN3KQ658CJg7zUgmvLt1SRPGspxRGZ1bnwmMqNtYdvTSZz2B",
  "key8": "5oFoMZSKkJzkVfvKj36jHCySoChkZQzVz8jMdkYEeYdUZBHnQWjgyuNSEidXAeKcmvBpw1aWNxgdRkdatgT8PMEi",
  "key9": "3cE8sN7jL3q3pNQJC2dDPXNRHwAgGw6rKVtariKmMg88qokf5Uf35JSJuDASUosVY3sUy3bJNHf57tmnMRjng6jo",
  "key10": "3BdQDcC1jmUTQqiGTUujci8oxHTEQBzzzti1vUX76eLjKZENDw7pRquTUDJS8dbCzapCWjSmmCATr8gtYNktM17q",
  "key11": "49sGZXXKM5WSQfQkvmNKxAKJvYiwPvgLWfMKvUQ7u7K7NsG2WfKAuhaN52M3dhJi93qiG85SwQaXHDjHsm1hFofi",
  "key12": "36h7iDYBtj8dWRaek4yXTTAmkRXzR67hjVFKuyYoL3xTbaHuQZHALG1C1Z1jL8qugCmKhMYYKEjC3mXCsihULLYC",
  "key13": "jAfLGCf7jxhxRH88sb3deJgrWQJV1t9QnqhwpP19QTWxj16zvKmfe7WNxQQsDPxRzcK1c3LTrqZ9cCWvGxKYxSi",
  "key14": "5xvvQCYHDxmFVu2upjATMjCJaAXh7sV89KT4PKY1Z9P3VPyzaqdZKVCkoB39drBTGt7Hekw5wCSPZ28KrAfLS9wg",
  "key15": "qqGF7hACQYGhXWtVV8WRQDPsBKxayi7rqYhh6Za6cBHeuWSVuTnTHDmTgpNWYJ8TJP5RH6GYQmkVhE7bdqe7mZn",
  "key16": "5AEM5prepDzmQ4Kz8uejyQJHWveFvBD6Qwo1hhNavYc5FaxiZZircqUC4MNAfoqdxjR7R8JNpff82kqjwz1q2gBD",
  "key17": "2WUdkjWMs9xsH95iL1f4RASftfnMxzGJi6hzoJ2zovM98XjcWuX5nwizVGbqyrCwkBsCrGMkMQWYG37zU692VisC",
  "key18": "4ZKmWh5yYSy9iuMosBHeWD3KrWtKnKM5vRGtUYbMDei64cdqJnz2sWgPirmpNvVPQkskynxkf9aQj7no2NKsntRK",
  "key19": "2S6YexwRZW4JYsx2LFFnUGsaCKJCtoF5jjfciAyD7ToyvYjM8Y2oiDznrPMrafWLvaix7fhK4wckvZB6noGvFGmM",
  "key20": "Pu8kkCNBnp8HSi9BNhkQWLQh3yG7A6svke8fCCrYzijSYfFBgP7UtjSqeNCPauK92NwmMJjrZ8wyb9zFM9u23te",
  "key21": "2Tuf3gKauL2L2z6wcdxmm1iKVAQH9kGxEyjAm8QeyuSgCaLuxhpDiwCeyQ9GkHxyhWWeYaxaCBDrpT8WNEcgzw2d",
  "key22": "4qtbmw3P76PU7cHKNJRfk4APWdGNA3CN8m92cxm8ND391Lu2aFK8Ug6jPtWzv7ym9sYqUfXf1zQctSAyBoxbFLSU",
  "key23": "hWp242hiZencSk6DRpk2NPkBwYC48xysH5eSZ4ETtn1txG8tkTvDqNCLTjeWpMyXgAVVvHzKJRW2Us5ME839kWt",
  "key24": "5Gb7nTSBFRpKKSjxDZh3eXn6CogppGWMEfRosq923ixn1uU1UVKurwHNDXeVeMvDrwVKH7TEjPk94paMhTaNCdmt",
  "key25": "5aefrXedyMhCapWFMU9j3pvFra8idsECX5MCR3pkVZ8wBVaYxvVSPmg3kWzA1EtDR6tgJamsb8Xk7cJvZSgja1sE",
  "key26": "2DbNLgRRUCAetAPvJT7HtzGd9ev6ZEpBpK3UdDAiRbg72STwDZMMvbao58j17ogki3AkDMJML9YwQVVdRW1nUNHG",
  "key27": "2wMq2bHdqszs3FrqcxKFjkXVEcuR8WRKk2cQ4GKZkuhpk2oWzJtDWsPHr81tArCpj9ppmeZTj6fq883aD8HBbMqK",
  "key28": "5qX5oEHEuAWXm2wUYfUdgtZw3gnTQDFYnib1VmaZ5L1p4iPjYouTenRnC3NmDtBGN7hZs98YTbZKoKM1pVfxHjH7",
  "key29": "4o3L4oLHrzAXJBjsngvgTyeFtxn2jTJdGr2GsQB9difLbkMcKmLUWcQYm437KeSzjnWVmU3wgCtBfPXcKXBevdEB",
  "key30": "5TfPwD7J1b5xR17M8mRcdQ34Ck2J1SMkqH8fActiPnmBni6uEDYqHu5YdoWqYcVK2AbMZDJtVx7ZcFAwmZVj3Kze",
  "key31": "UrQomThWkhbdET6v6HrcbiFqRDdWpQ7waWzTrxkwv3Wn1TAPKkpHc5Nsk7cncYyfjvXF49HBZLMsEZgdRsyMwnA",
  "key32": "DUgoTs3ePWpyrQJUdmU57LGwgrk3ZZaq7uheRtofQTrZ1ybBwNdgHS5FkwUyjkcqbFJTDWu7TSuPU96VNWiERXd",
  "key33": "28aHpnoGcYMYaKo95Z4oC77QjwoKpaAimZmgL2CnBJp1oAWsMRZWFcvniW9Fr73inQELMBvc1maZy2KVFaDqUZio",
  "key34": "4mEssq6LKAHJu1ip3R1BdNd4MHNrWEYmJuqHAZQpDtSR5CViUZzWEzPiyNcQny3zoCmwuLJrM6Ab5WqTrcSLV259",
  "key35": "yoeEjsyBjGsoE6aisqQLAbMiZoUV8PwR22CYsATTZF9qH6GvsCq5cLCva7awUMEuAi82BrinuLyi2qeVE2cZKMs",
  "key36": "4ocpcPadiXvG6PR3bRqrsFcr8x1j2K8iZsT7nE9rPoocqc9PNe6oKdU7o5SD8N39uTGVL8Yprtb2WAdoSYFbfrsP"
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
