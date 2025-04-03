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
    "4t6QnRjhnFfijDoU2Grw6hT35euiwb9J4vSWSKS3uorfVbKwSnuPscQVKGkHtUwum3tpe9bjf6Kkme9FCx8U1rwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KFqobr1yEHftfm4KqARFHcAAteN3ouaWJw8MiyX8i3CD6ZGTKUYSj1sjCc8MsHgFFv8UTFWRzkDPYPhPRhwQaNF",
  "key1": "4xMVaRw2vH6ATP4LTawCQCLEeDDqEErq567C6K8WNdM1sksShK7PAbn8ytpUNKtL4ptW8RQb4hzhaeWJ2nsGNoeT",
  "key2": "2LqRgXotUARWC7qoYdNGA1hEx9FehcgUCzRMAYT5vxEpujFUPHjBUp1oecWsKN7QdW3W8b2xrqaVVz6W6z9RZNG3",
  "key3": "66nEcbdoaZSuJa7ahnTX35NfHgNd2fdxY5uhvZzQAkpZwvCBdvqzRSD5yojQCiamGVGRP1JRxG4XU1Qrzbh1qVRc",
  "key4": "dEN7jZxFKZYM8EzfWffurW4zCihHPVnS76VVyyipTHixpcNtYtcNsYQybtXvvms6RJjSbPV84VyA63ZGW4qimks",
  "key5": "4miCHcKPcdgsQ4Uj7uyJjX7qkDf3mXHa4HqftKEeBqX8WiKwg5JnB73M4USaMF4hnMdNgaWUVJq8CCsbxiC6xfZW",
  "key6": "4VBhG9ZryGcdFmMeJhopQ7dg2zJZ48JfgvZTcgHvL3aHDLiZy882rQtUZ1S4sfkfYoWXVa3oaMvmPeSKR6YGoQmc",
  "key7": "51najYztVGRaygRg5gXi4CR5mggJtS32SbjHTTXrQduS8QqbQGbrSnk9z72BTrvogtaN4CmLEDQRsXZgwFu9vJVh",
  "key8": "3nKLBychzCDksERkdxgBoTssoSoVBcvU7dW65hAFJy4zQmNorBCHgAS3tnmyrB5KRn7bHuPY2HWMdW3ByFE8igjT",
  "key9": "2ctLzmoVgLe3vBdGrhFBZonsMMK3ya2LdzkmMhUA9jZiBZfibBY4BYTfSKAGd8LHpWP2YmrD1qu1LHnY3wCgE3A1",
  "key10": "JNKQaBg9oKekc6Ry516MAWsdozi1W6khVQbgrYmMFjhdvArGyFeyovva7cwSWR1fvLR7NgwadNHExJesFkCNhyF",
  "key11": "2z4pWASKoHWaawKyCm4RewMTLoTrLMzmdpzEkXK55MPXtnB2E9fdVovByeTHmvQykffYCyE6nzEUnHDBkwUiYyYF",
  "key12": "4LeohMthXRbCGezFBBp8eLUGhVFtobdM9GApbgCR5hzGXQ9PdrATkCEB3QFdeuHBanAAgbeo8Ac2UYdPnrnrFJ5v",
  "key13": "5rxSCBhtFqapxPV7ieJraoXjxwtyWSrNskfDq7bVe2cMogbFxov71tBpABGKGK1CTsQGkLxspRujhJe685GhJwn9",
  "key14": "4WTo768Y5Vzq7sXwZwKBQzHXd1TqqwEtU3azMhZwUJBZbn1gYwTicqEmockcx2v9sPK9rnGKXBhFihLU3YYAjaH4",
  "key15": "2FSDtoNgkFhtqyGzo8eQzAgowfSqoQJZreQmg4m95FFwpdMk4GFbEYVUEX4ymN9nymhMJryjswoHz4zVYsUBCEPk",
  "key16": "2YV9pW4jYtr3sq7kVJm4zfbcoyYBkAMttYSBuHzc6qYX7PjuBECbV81ZBAnvRbAKUCfRg8c4w4ERZuG9BFKJoXxX",
  "key17": "4PwXHH5tbpNWfsL57jPV7oJ4Ak4mopF8jSGxtiRXe3MdduYVTN2LMsYGZRh1Y6Q1dxSgxvS2H3aQSxqp3DumYLmS",
  "key18": "sq6qxyrpRUh8dXrq18dQzo2G8nC86pG6bqwWNqqgQyPo5yTY5R3mvFvijPvxjxTzkCA1ebjjsaHvNH7ius6sVhQ",
  "key19": "483cmWP7DafAGNhxfFeMJTMUCs4BxV3x6wfWg4S62SJ6jnK9QHJmxUG4P9JuYNmuknmMLmWAYvAjRseNCWQ341jt",
  "key20": "k1zM3JMiRHpzyH3vU1NejfDi8XyrzS4rgMkQvZgEoqy3LCTzXn6CAAyJyQrSiSEEuPmfTrynC8kAAwGdCjcJAHV",
  "key21": "3nCPuXhG6TMiRqofFQxFCHF4mePMFPbnMN1ciepU7ss41kNr6AGzQMxn1RGNbjcFzm3hWW78f3YUHdrvDPVMpcWu",
  "key22": "4FZu1CJ4VMWQj78pd1yvy4Hiwth85cF2SaN58ssLvY11WAiJP7DssvgNEi6e7NxRSvaUeqP1uWtpcawoGqToiPg3",
  "key23": "ZPgBPxjkoAPrcYhW1bCKx4UZmXBdpDe4pDRhsFoESNEG6jaXRaH7syaHXZ2uEFkVJ6h2cLEo2iB2EtU6AFKUcov",
  "key24": "46gkvu7xUBcd5dQhmMHudKCZ7nk2akw6mVeDswtgAdUJmZA9CYbTLEZb1KKf83VTLaqDHrstZM5foHYdnT3Hpqq4",
  "key25": "3z6rSg2zJAorGejoVig33aRYb4sTwetiVyXhGN6HqKHpjPwNm63RFF7RPNaYEFZTDYidYU7jfnRFZNhhK6Rp6HtY",
  "key26": "2wVaBvHsqYuDyeNgRLbyGyHDQmKmdrPUEWnuuDiv81nj8z1XM8ifo9HZ91XnCQf1iKvuTWtM1RemmMWLmMtbisRN",
  "key27": "3P8UEFMiMpq6dM1YR3fohtvZq6MqEVaRSu1Vw1X2jqPcWNqarTGAFoiv2R6dXe3MNTV8vaoVGoPj6236YugErQLF",
  "key28": "LkMJDDzXqxduWRHYAQLdwQbGZ7CVbQxpVjRduP2HMTWnaZbBT9LW5MMXRSie2DTjDHtyme7JGi9chCu1XtkAoxY",
  "key29": "4zA5yWnbB68vTAZANaSNs56jbGwsuV2azKi95MYPoSiwQbJ38orWXrgF8DvAGXo92yjNJ6Td4LdW4oyCkm5c387K",
  "key30": "4sXrT7oZKUpFwwxRAc3SMioyeWBNDvksYP5ASPS3UAdVArJHH6tz5AkH7xczRDLNrbh7bF65oaCwXaXYqyqGTiLv",
  "key31": "4VdFbRrbdCBvomiCta8WwZVwL6k7NQWeJSabbVdd4Z6dJuk9jXsUuZWsLdhLXqu4UXjPEHcXTqrFjkf1zT9Anwf4",
  "key32": "2EFsbWHd8qvWNScceBXVxvKmG84nUdovdJHsLLmpD7zBqmYkrsMcwZj9F3nVj7WpznWGnzcTmbhfBX2aGRo6pGNa",
  "key33": "4cwXYkJwfiCbG4oZEELNSQCUUtXJVx2rjpfyxiGiNR6X3HrqTmnEiGSyC2yMt78e5TCDEuoPVcUhwWyqZQt5KqQZ",
  "key34": "2FPYT5HkdRsgg2sHGQvq1L8uYvgq2YJdvND8qiPtvb2gLVJ5Zp2SFAAGL1ZKGTXuu6ksj4P91VJVdQQCeieysB3w",
  "key35": "2qLd5MvQS3weigaR7GmEVrpEuCBkRWsUf8ycU6wTXKbykFmNt5kRbfEPtCkn47Vs3i7dy6rgDUdPS7FQYZ539vZx",
  "key36": "38NYcUqWSJE8kxHqygkeejuTDVh7Pm9TZpmXBa5X1SgNBWnCCZUxtYRvhcJTo2ivKPtpYLfrartGi1Hu2pskMkUJ",
  "key37": "2B7RiuaWSaqr29nZiEpftUqXCV3VTyaHw68ySmsNcaha7VLB4TanVDKJkpbxCrGZYn7HnGSkjGwy5BvTXjdohWyz",
  "key38": "4HyZ391DP1muD3euK1V4Vsa5fc1EqCHFvZeHZiCnHSEbk4t3gvSt2zBYf9vVxD5qJ681taxPvg51FDyTtQeqGYzf",
  "key39": "5ht4EARGcqzsfN4umU6VkXah5Q9U3MsPMWzDs5ZH7mqtNKX3ej1FPjgrEmd2GBF7mararVceX4ia9S4dKpoo1ewz",
  "key40": "nrc6ptHQKM2bQBn4LnvRoKq65VF1cdm9bU1KevZVf3FsWadH8NEGyRG7TgSmL1XcBAhB1KvsZyQP1kk8NY5S4kj",
  "key41": "4X5mQQ4DKoYotMAfUof4ge2E5RS3mksRjRmiRR9f2nBJ56sX4W9hGPrKvXpdj4zc7PFMGmdB2bZimgyPYjbEjFcg",
  "key42": "4RZoVzJNziAMYfyZbNUeiUCjYtDUG6YSZeeXazQp3muEAWq6ykMTcRATixDPFGPpAfvtC59z28EAdYM9xaBAuxcc",
  "key43": "27M8GHc7ReQHoqjLEjgT4pJeVzXmJ8Wu4SSt66KPK8x9XcAiaSS9KnkuQRtAyvZWvREexnDd4GA7szyjwkhXhnpk",
  "key44": "4Y89Z7gMZr7httAKSrpVKD3zSGwwDktPLWQAs9Wc8Q5VDnuWTsiW7vAjPbi1g8zXwD8v59PU2fNgTfs9Nip295ZV",
  "key45": "yLcBAX7QVE4rYqucgR5MMVRt4d8ik7aTsH3oAStKnpNHbLHz9pGKDYNYw7wH3xba6PDYTHjh6eWGA5C94tUUHvQ"
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
