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
    "3Zs1LdFRDaF3AeG7gh2psHydRghHA1KFkuZnADbuG3LwP7kexmCSkdzTWscNYe9qxKiSzEg6Ff8od6WksNkX6xqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4doDAK4cJkVxTR9bJb1bGSMTzTa3SqKcSbsjcQkWPSVVnn3Ykpg1ivU7L3c8hGtX4JGx452t1vzB7hWNhViLwE",
  "key1": "4dEWQGz4Jo5gVGpn5h52aLHX6nycu8KtNBQYDwyrpMamJ9ikhTShFbTyhPaw7eGEvfooVu8uNzjYEH8tuTfi2oa2",
  "key2": "2Gj75S8PwzKHLnJmUJMoo6ovryGr2saXU6Mh4focotyoj2FHzYp6r6b3BVu62z7QaSjLyNQSFX5C53Xh9zJ8pQd",
  "key3": "qnduJ382EAJX5o49XtRrTnhqxLzuXnWoPGRCGwxLtPeXK36wCxjo4aqFwYMcnYcEN1x7onbqRmogdGp34psXUpH",
  "key4": "2nuTAgQRuPqZfW1WR9EviQXArnL3Axqx5jveZkbkfkig9jvceLeEM6XYiQAHSNQQdckKfbeF8J9W92BXQexEtapC",
  "key5": "4SDNrJGa6akNkThorQ4xCtW289VPoM5EcykP6y9dgGobc9umgtuHACeGhe8Sqr31SGk38dRH9an8YiP3JeZHXa6h",
  "key6": "pWZqztMaWhzh2rG7whSwJVUidqDdJUBc3wAMSsDjxzFXrkjnVm819RyPVw3LPp4BLkB4teWbAWf3dyTFH6fxmDN",
  "key7": "5GtpMjERc7aNhfuPWCgEVoznU2AYeBSM1EZxcpXcPHbdfNtLAHgPceZEc4bdd43XyNFzFNd37SKAv1t7fQYCmiwZ",
  "key8": "4dqGhinp2UXhsow1j2MgSDtZcuSeT3Y9bMfGNxmYTy38hjgveXy2DCrWYYcGSQzfcxt6qZt9dFyePnGSmEaafvFQ",
  "key9": "4xgLS5Cpk5YRKQP8BD7fwfqijkrDmmVS8Ey27vuPZxHYD8cdfvDzVEMuysvKoqYH795fc9kzg7wKS4ahZPyGGypN",
  "key10": "2JyttKndEyiG5mEuwtYj3qdNcZTrVieyi3akgsPErZRF2mMt21LfpGEQVcgvCVsx6i9qQEpRawX51J33c2LzadPj",
  "key11": "648VjkvDzjXAKH3PL3mFouVYJ1ypWvHB87TKnGj5jjkn2W2yxF8BGLbW76XYPyeqdRt2RMsFr5s5yguRthzyeBxm",
  "key12": "2fxtdbGd4eCYvbWVUMgUq4AgLFXhzzUPJCM5tqDtckRbrbLjdxbdgsdMzUd19JWuxL3iTNTbSquJqJYW46w1Wrxx",
  "key13": "67iY5hTQVD8pdcJQXDiWHV4SYXFdztxjmY8uEVomyBVjBxkQkCKSECoXDGHSnFDQ95BS9bJ8gYeBEDHc8qBmVfYt",
  "key14": "4gT8wn9ZgBXjkHdueU2YLYX8XRmk7y9WdA8MWeixxRtNwbe5pNWzWkgxDDY5iqoCfdDrAwVNqqtoC8Wy2GWA3uU",
  "key15": "65CCra2z7MrFY49qeUnn9TQT3Tzfsudhi8etkeBJ6So1MGSc6yC9BrYSNdK8qisB22MTuDkw62JicrdH33ywj8JM",
  "key16": "255kKdmkiNfoq4vyeAwd5y7hb5eySoUuh2ySJxQBjEkgGw1nnsTUKHN6KvCdxCLnm6KNdqizMf5dx2VFGx3Ps1CZ",
  "key17": "4v4YdTCsvF9Epuqwmk6F2jxErbeXeHJxiSkvVRic4WZosmMBRqFr49YbhACcuJTE48EHkRG7JGZ6QTNtPmtdyEYu",
  "key18": "5U6xZmYJeKuumu3cdMYn4DmspHipibB6t7qxYXWk3YZTYWc4cnW9L3UzegCkZNS7r8JAdBKwtqvaQfcwhiYq2958",
  "key19": "4rLbf6ShCRgPArY6P5oJwgbtRk4GdWHFNyWFcQVP9UD4egi5Xy2E5dfX3WGG7U7cQWFxXRzBSQCqhyaPfqZ7PjFo",
  "key20": "4FgCGeiZWqbV6FHdz3RNfye1wyeR1jQBbkag8DoceyogvGESoGxGsHFmsMrRaw89TiH4dkLRdRxTuTcWLHT43ELZ",
  "key21": "YpqWu6RgCEybNoUiLiBgW59hjZ76H9YobveXzkMEwiLAhG3HhjGwyuQB1K1ALvyFchfZ3mrceFdtHSAM5jJvLGF",
  "key22": "DYXU2127i1iygYicXmniv8yW2h7WeWtVwB3BpT2JYmbpPS9DVVDBvWtEASMZgFpuz2ArDgLXaXtVe63JExFqwb3",
  "key23": "4TFpc3mVFHqz1n4HQyg5HFZb7vXiuHmjGASwd1UwNKYEPKf9HUB6bwir6a1VzB3iJDpQEaPecStJu1Gik3Nw5C37",
  "key24": "3kMHEmMMipPXtY5sohqK1D5CF3GZKB1pzpUvv7CzSP2irsvmDb5NaEMEGqMPYN1HwzZbvmPDHZfYQsPUWNK8cHeM",
  "key25": "5UEAMgi4W1zQQz73memEH2UEk5nbMT8jiEGAfsJCLcttvFxnTLg6pdDoDSPcaC1jwg1CaAyaNMuJ2YbqMBZujPg4",
  "key26": "88kCMjKYeLTqWKanMEUf7XazyPg4Ux1gUTUU8cWYZmzzpZ5pwqB8E5hWCM5wMsVxMkxb7C31Y8Jr1jMkFYcsZ1Z",
  "key27": "ZoVjV8nugr6hC7yurNKqWwxLTrHkax5u3H1y7rpkmd4bmfC1heYapG7GnXtsFS6SiRdvjtViboEjtgpBBEAvc7B",
  "key28": "4xTJLzJCvU8DvNfrf7rEqEY544BMjs5e3tjPTkCRq2e2RpQyRg7uVL8ACRndYnZ2bsvyyuwdmx5WPvVV5ovDf8Gp",
  "key29": "JRvXkp7QjBnbDundeGDmPk2jiR7WT2TqRbeTFAmzWAkWLe419kiHNxkGHYtPr1xc6PJb3aF9vUWWGkzbo3sNvmA",
  "key30": "2huHUpa4enM6jYrHNJiDnvngy1aWUAtLZKV9UCnHma7Mp6R7bWD26bRfr1YrABBa1R9yaWkTCSQcPGcZPantmXSm",
  "key31": "4kH8uDBZMhmLkdJowhWL4VQnbbJmzKFDQLnokKWB1gyNP4SHfZFQURpEWSEmqJe1zGJVZrd6BTqimjLT5QExbZa6",
  "key32": "2SRaE1Q6kV5zPFHCz79tqrhPU2QFC95GnLDfMCZxc4cChQRXpZ9KqwFqKALvxy8nT1yQ4VgEkyPLrVQ7VauoEpoM",
  "key33": "2GHgz6wXzXUzUDry9tVCixzsEwAwPxLRyBtped5Ch3d9faUMtsSvwyvq5iNHvr9kdFsCACnnTwYpv2xY4hSUogkp",
  "key34": "Y12pNVCEmBT8oPm3CRU4emjfwdNNpazCX8iuVkr2citoUekWDKiFfh5w38YyBSvQnQ2NSLgNso2kYLBhP3bLL3q",
  "key35": "3Gipg4hVircTossSYV5ogpWJx5RNpzc1Je5iMmwd9Unr1qLYyy9mwvgKDcqAnVGcFzroZTA3MF8WYB7XSuP9NNbC",
  "key36": "3NyuPRunm7YCXofTXrCfdsKwX83zD9XDxXJPwwVMg7b5U4bx5A4aBYNpDd9GatsL4LQYkjBLXSmFxGKAQnvDU49H",
  "key37": "orLjr5iuShZ3VKG1gMzqyGzfmmf6KajGw8oSR8eiYJvg9XimmpPwHZgfYSKe7v97q61vp1Cnzh4ahyasGwLQj9J",
  "key38": "3c2F8oybjNCrMVVDJQbfTVcgwZEfQ3CvGfh2hhSG2mCgXbapAxsY6dNwoMr6uZ2VE4js7AAW5mMjBWM2VDEdwGLW",
  "key39": "2NVoB4wyGYphTFPLZqXZjpLwHUKdE8ukZi6SoBzmjEeTh66DntQy2EePaQSaLW5ZFSSwZx2hv2qZqEzTiVEgD6yf",
  "key40": "NosJfEzFrzkEoQpC9D5HFo991ggZe8rkYTmjtogUe5u4zKL8JmMMYcY1jLkBUhQCZ2NpgDdaP9g8TjxkuJNoy1P",
  "key41": "2ZLiHByTATL6RpJShC7rNmAQgR4gRZLFdsWZK2k1SSvmwmCyzEG9gFvwJbmiiuc63FonnnTqwy7YdbzvzqpoQ5Ma",
  "key42": "wbjhUvT2T9rkZJmoUfV4dG5pPGXfivMRuNU8FFVjEtzcChBpDbcya3ZoBgiG7dutm5h2eT5vRdJ4PTCnecbeUG9",
  "key43": "3HenhCmtVWkTkLveT58ViB7z2PY8zs3VbtLBrVzyxSXC8cmmo8Q99wycHCBBZdaE7gP2bAuy3ZJC1jT2k2T9ENqK",
  "key44": "sjGEgEhLPz391jkqD6EfRs5dDLCLFW6M64y1BLM4k2xSwSeyi8bJGfvHsrS6KwM8riNHa44spNfAzSyRmSYyRX3",
  "key45": "3jKzGnbnote8W3Nc2dkQkz2RXmUh9EAtwE4t77JUZxgVxe3cLqEB5nie9Bu3ak9Vy4gh676NRYpASyXekM4FPcMM",
  "key46": "Wje8SitxfssMxCNgxSpVhis9EpToVWPjqGHnJEaumrjK6higuVccX71AnhoGpD9LQCCaTmA2HoS9v9GKCcKbFZb",
  "key47": "QEfXY6qMXQpq9dFuLt5tKgfikN5YkyELfy5kAQgbiHvSNwUnzePNgdgt13weTSnaxdZuTpMiCpRvZ9pok9KKfUs",
  "key48": "2TCQzWZRezYaHC5TEgHpEXF1hhmpT7aeMxEfrVSPQ51pAUx7NxdRzz3toGwTqobxeKMyfDuVczJtyrqt9PqhPtmG",
  "key49": "2rTh67VNgFnqefXf8WQxpw4Jr2SxBoyuMEpDva5RqqkkFGKjWa8JjT9BQgMGn3ovDukh7ZnowA54nhrHTqLtTh6j"
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
