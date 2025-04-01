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
    "2AjQWCbsdTzi8tEsZTbPjWZP7DpSckAEHTQR9HoNPFZYx9qKQg8GLkypJYZ2WqTsdSSNqFfhBZTWvWR7eZUER88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S1JVuHL9Sww5im4C5miSASy7SZoKyPdaWDY5TmPCYpBaAmMuARgii9zGrzEi49JzHpQNkKtEd21669UZBptwdf3",
  "key1": "2wbnU9WnvERWdf9JHdCdZaxe1hUYzGDcuToYfAeTU5ozREb3gS4Bh5J8X1J8UQnsD1Wfe88bcwRjJaKMPfzbHGbT",
  "key2": "2NFdaEURoj7JQ42UPhWgQsqRHyjZFeXX5fBY4VQV6vyeKe8kJuJGJZNpfmteeSGWoPEWWozUWRrubHT1ccibCJLS",
  "key3": "3ZU2CcCvWd3dRwxoF4TVtEpxA6w55wLiNS1dSuWszPhB6V92q5MeXMVjLSfZYLJQeiBJMhcQDCBvtnwRs6imgdda",
  "key4": "3oGEHCVL8j7BgJrTtJSuJXH3NdW6PSvrPAdb6ciykjMh8V5xq3rgc9EDrBrcohKkcjJP6cDfpGEjmx3K8oeUutYv",
  "key5": "4hv1Ro1SXhbCA6pbHPc2b9NmF6d6sR4fFBT4HuYSP8j7USsyQuM6ap8GcgSHV7hw29TFhEiQPnyPoUy6pCrn4rh3",
  "key6": "4nuQWrPhtgFfFNL476ZpzBmoc3HLtTXY1ojHoqCmC5c51vxaBHZz96ZybfdM99SjFxVYTiDM9LEhhygfkiRdB7GM",
  "key7": "SMKvxaV1rwnPdjXuBCbujPH6D2sSybuW83uF7SpjRiRTLkBq2f4fTZQUVy7NHpUHkiwJSLkU5Tdr8KwePFeXeBN",
  "key8": "4kaNytUJj89u2Lfuw5rKbZQVPUAjPeDCKJ7AxboKCyMyrBu9CP3EJftEW6LevCU8N5HhwW6utAA83eRSuY2vebSJ",
  "key9": "93Cj2Q4NQkZJvcvBLcvhcuWCq5kkJv57ykYv2x5yhynH6RPe8iW5SFRpf6t4CY7h11FkAS46rZU1SHjYkB6wZ26",
  "key10": "NBofXuk7WV7z5ZaxaBHKwuT63GqQ9ewXfCZDnZSefnisZuUH2wNkveRuHanY8sRHFo7EPgCog3xcjS6jL4YkApQ",
  "key11": "3TpCQZyNrqLGQUDRziDnUqy3NYDwJybfevBFkpMWFujPW5MrvUe5V7mXdUMa7sM1dZF54krMmTdQMyVyeBGWyTSU",
  "key12": "3CAMQP1tsPUNn81HSiUFLeeBPh8C8jNaQe3L8dhuastL71ymETbZELMnd4JsitcP3bEtrwBc6pkv59RCs5AP3zMM",
  "key13": "5TkzgQ4kd8dVeiGAnYZoH1SzWmC3nBfpw5Pdaq4wNR3YBnZ3bFPPU7iGCCpfKZj7bXQusUgt8DA7igK9CDEiebxD",
  "key14": "3ZQKHdqXooPpTxoSfyPPU3BdmzEMTvbrkdCgFjgccQV8zFFNGkX4gHHuQfKDtmCWJoJqEdYfr3d3RrYjE7y2oEnD",
  "key15": "2nS4g6U5J8SmYi74vDpPYwcVwqvxcEMB8zHvbSzqkLGJgmWFoKhaqphBBtKQAT1PMRZckWu8Z6h6UgwCpjyNpFoV",
  "key16": "EYYnaNrp4n5wfndfSJRqyccYmjBumcPjREuhTMPqkHzuYUSTYvA3JEq9z39a2EtoDvxTktd1AMrL8b97PCZj5E3",
  "key17": "4f1unzmNRrjyD88yagay8Y5twZQpjmKsktbR5vBmG4ghSzWLcrHwzNZZuyoveiGAFFoaNknQ8fYyQSTHGqmdyJGA",
  "key18": "5BWskoyGrqiyy3Jher5CZmhF1eun9xG7n5XVDUy7ypzZSQjGYdSRabWrJniKbDVJsNo8vZ9mebf5u2BygMhhs1St",
  "key19": "2vqFEc9TT9CuNqihfWEnydXtuSpiu6jE2NCs8HyVKyvAWZhErCfgSu7bKdw9S1LtpWi2VGwh3jgdCghbEK8sxJRy",
  "key20": "57NncG3aHZbs1m2n5jVCqXhGaaZjm9RFyEFZNxHnJTr9zQ1ncHmscnoNjDu8s8wPVnHP3XipYDrH5gPVm4vnTZib",
  "key21": "3NhTkL5qjDzGezjMKJqZpcq67p5MzgBAw6CDoL1UZmduo67VWDt65zFT6TmsDVdueQXkGF24WCQyttpauhuN6byS",
  "key22": "3EUiQtEEZMFUnZRZQnN6eAeQAhCJzfDAGjxCcfnW1FMgS3EimPBY932R3dJ4heZjjGQSAqnNJx9QA9WihHEQMD6F",
  "key23": "4XfgvWVcBQyq1MxE1fJ4isE7djbeiRHjL24kc1xj9fJcSNQdLSufJBqBKxTiZ1C3zCp1DUvYaevaZWMCbmmtj1Wo",
  "key24": "3vxvZ16rUdzCZk9fn5Pd5j7hRqa5T2386SVnKEqHh3SCeaxLydRyJ6bSKnQYUZH4czrn4DuXgKtTAosHeVKSQ2PC",
  "key25": "2qi7njq3YYpV7LdB2GgksVmA4t3zxqdXHBA4HokemYbg21AZxUka2CaAKdamdUVyY7yz7kHEsn5Nt3x6ZU2hy4Cg",
  "key26": "5sqoCz7FcRu6g7rMgLGN3WNYWf6xVBeoXFGWB9AjEBQDWC24YEKvM39PhzDtxh8srVqMVQMKgZAVfqehSKEgj1dN",
  "key27": "5fWMVH8rzv2f6fiVMtGXvYWLcTBzsFtLYVNfqxFfboCeAbzxVAqBRfkEGCtyeqr76jeaUst2e42QeTvU1kmihQj9",
  "key28": "51URd2rjLqSGa54She3htmXhBkqD72qhE8NntAnxqasQnxBun3AaXNoarro4ASHFNH7kmnQbytZWgeAwyanCUwsV",
  "key29": "3vyaei6isGGwae2fxc7n6jcXz5VhHkbNRbg4cpDx5VavgKyegcuhubmuKuMASbgxuSPPVMffzrxvQuTCLvHzJ3Wn",
  "key30": "2WkqCU6M8RYTfJDi5gjXVBNpKmY3AqXjC567jo6i4XNvCsugFcy8x1rpfDwwt1aYw1CRGEGXqRtsj3tsRs93uJXP",
  "key31": "5ATxdXQQLPRVZNR8nH9xpFMt4wVKtHpgQUbD9AEPVLH6SpXMZhxttZMe2EadMmQ4xoiVz2dQc45htPrb18kP9Hnd",
  "key32": "55hTwcfWMDNgMbpFwjZ6rRvFTWCPto8SnofAmVRdvzdrZcWsxnRqmmvhqsjzkkUWjb1BGMbcSgGzJZKE7CwMyUZL",
  "key33": "4Z9qGVfxcxFvBjrSQfjxd1xkMAusQ6Rfj7f3eD7uKvbH7EMDpSXrpsEUq7UQnfjNHeERaoHwmsKvUr2MApMaLny4",
  "key34": "4waP9vW4cmiKBTGABESHtprn1NmbiuAm592Bhi7HEwgeevcrTKwZjLxBmHyQ4qE34rnQEVW5HQo3HqRzohaAvJ7P",
  "key35": "BthK5GMJqVysjZi7yhi3upgzjEkZZjraBbErA2ThRSM24QbMNUSMQfcGNCXJw2GJjL18iCbv6Y4U7K1zuPGMagV",
  "key36": "2pkPQ1EE7BsYWXzcQJtvDHKY4mMTBvdb698ektgM2ae5j1GP3Ljm3YhZ8fiMa7U6jdRgup7KqETAdFCmZaLzyhBi",
  "key37": "5U9gUuT4iC1NcLxnh1pJHP7VtR2vN5unmuRTXvHmgyECcSUMr3Q18g3Sky5xdT9aZMXKMW6WpLo3oyEP9X4mqmVZ",
  "key38": "3dmR8AJ2hutX7junaDoUTg9R6aUt5CXE3pr4XHwFeWEYNfCAsafBzxdG3ZLcq2ZNLHRxExSNuJLihf4oJ9PV9M5c",
  "key39": "587LnKKcLhQ98QuGdGUbmnXK4n11h2TMMP6KiqMDJzdF8svP7UhQXkVKPZiGxmEpjiq21aUVuHsmSoumpXhxf2Hb"
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
