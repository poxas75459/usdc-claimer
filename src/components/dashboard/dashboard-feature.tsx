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
    "5xQ7SL3WrjonSfy3QryMMMe7dQgwTDyR3WbJoTCwyNJnBasjsLWT4szdg7hT2nxe4vqBs4BUpF32q8yqGp4GTcJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RBC9oh2zuCMBbpnijWXD4U9wugyNFBNLuzqMjWQZPqqRsXNcmp7Cd6KeXfPK143oaHnBT8ZGysEsWG3ej7kpAG",
  "key1": "65xYqiuWFspq7xgtTM5tt1bajsWGezidhP7t6sht9Ac2uHGDizsmpYpxDfJozGuzBAuHDfyRJuYTMfYRSWNtyn93",
  "key2": "smrgAM56yYC8bjKo7B2gm6WMGMdd9vSyAh8w5pJTSLT5EupcUZMhhvmcmFAk5uVCsNEES9hem5i1UxfDtSYyfVf",
  "key3": "2ZvLvWNrVPuWsb6SD4xdqCC4wb3ZYBzKrw1ePNECnbFZ2jA4VqW7prxY5A9i7DyasEdy7JmEHnfCfqm9sh6iUhSQ",
  "key4": "4BXp5KW9wqECnVVbMvNE5myVZ3toWgyY24axEP6EjnKXdKb5dAqUaReoiREWtoqFPzZu6z371vHPBR6Ym2dHnd35",
  "key5": "4r3eDvUB51nKnwESoBKDZRXCMWt4gMDU584HwUeudqS7deDbjmtW3xweW5wPwRir9JsBDjHaRBJWuEpe2VLC1DwS",
  "key6": "3C14vRHpwV7cTSoE6pP1pQypme4t4ViVDpWfSsfXVsqHh2Fcc6FK9MqMwHt8Abtxr5XCiz2dbJEgmmRJASEgF2ZZ",
  "key7": "4LCsbdpQCe2XL9UTZviW4g6cxqBHeiocd7ys5Xh2s1wgzRqRQAuEi1F5BGnPg8MhT4ntmPAw5694S43iQ5DYnRce",
  "key8": "5UdousSuTYABTBhGT87dUaKezuLt3PHkG13gnSSfrXBsDdCGHN3ZD9D5iwyLWKmWwPtjxhm5AZjAZv9zrED4YEYb",
  "key9": "3Z4D3NvArZ2ejtJsCnPewXygNU9b3uqPjVQscxDF9Zq7N7cn8wJYG5bRZ1iQ1yJFth3bNXRrgFaFwAjPPHQLM73c",
  "key10": "5n7pP77mZEfwK1aDbq5LSMN7cG7w1GgFUkGxUH5xLjK3351mzbTzyYqcfzLdk4jbXnL3inFc3ryaR3cbxmNzcmBg",
  "key11": "3f413YVMb9KawxC3cUxHv16SKznSCzey7hNHVoi2atEgMkqJ36vbriHEoQoHpMWvXYggsrs2GNhhcKRrHJxHwCqe",
  "key12": "2TY9WPkgvSS5UaV3NCVZK5Lw92Ep6CFj9ZkfXj8uB8VxGEZzCSNWjZUaMPDxxhXs1donpu2asxtsATYC7xbA1Au4",
  "key13": "3nwwKkwJEpRoN8zPNbakzeX5AQptAajc5gDcuRDgPbn7GbkBJhSLKuiquNrqCM5NnHPb5PmK4axKSg9hJc5W6cMe",
  "key14": "4TutYQ9qd2YSENSZvbDm5fpAYuUxJFtUdkocAgspcxag3mnpkNAs35zweN5MEc5UPmyhMYTvMzk8p5RA3zSmao4G",
  "key15": "5P1whNMgRM89hDV7LqB6iGDCfCvTXZpTU1kYdmBBoxHZnsr8GvoJtkAKrtHgQNnnypU6w4VCbULqoMLsMzzHbQzw",
  "key16": "5PuKuPrxYVYTJYCBcV8xXtdzH4dqXLc67j2WK6oztFhxbBDcafbgymxQsaWnMStdVQgoSuDhosfKWoux3tLoui9R",
  "key17": "41PV3zUwKyZmT6dcLEKYkwknwwVVeAHH9KtneAJQBQM6j2mMYu2RxxtYD2ayekyjQEhj9pyk71EAEuPEaVoaW3RB",
  "key18": "25sdo6AYQ16k8TvZmKMVLPudMy7NHMnp84F5Fmuc8WZiSsXVhGJMgx3A8dshMYrKEWUa513qGaeGdb2AeVJFCJNx",
  "key19": "5usKg3mMZdnzZxmZuZEqaRtjcoXkgeyAAAwMPKr3Y9MgMxK9HRP1MXVbMy8VPCLRkQJpxcbsM9daHopsYkNYuV9W",
  "key20": "2roPEhQgN21H5uReR96BxtVvL2kpfHP4QtywuFQyAqWi269wvJwSpkWMxkKHTKygq9s7K14z3NaZ3RY7JmEWUDk9",
  "key21": "5pp2RmLf3daRZZ4xtDLoge1UBLm4zxyShD2gCtvC3Xm7npouyxjGM3upj9T8QNMgSuvyen3LXm6Ta3KbykaEuqF8",
  "key22": "5rNFV6UX9ZZTZh3RT2jAXW86hy2WRw4UFbXizFGtd29SKoZaQnq47drUtz5XkzyrwZANWchvDLabmWitJ8i6UcEd",
  "key23": "3zuzHVh1yVt2LyzTbuPhUBhC4AyCgzTvXvW9R2yXXkDtstmxme5FvbC61zaY9YauaAmbEPA5Thb4WEAhfbLvDXng",
  "key24": "5kCRo2jy7HdhTuWLTLWb6cVUeBPVCeWSMLBUFnuUza8XZkLFU1iwhwYReVkvkwjkcdg8KvGY3WzK7G2HjKnNg5yV",
  "key25": "qsyaYm585bH5syrHjsA28PwRYrYwWPsiZ6q9qZ2WqTGn7PfF5pj3jeXgWfMnFNZyyAHsqbr9nPkVPjSXHje57va",
  "key26": "386AaiLnntiRZDCeHazx7kentz8ra9nVNvLzeE6zi5QNzzB95K2tX2jMVRQuqu3RNtFQgYBpRS45z3seKgZJco6x",
  "key27": "59Dmy8rNatLrTbKpeur689gFc1obNEmSKFjDScnBN3Dqx95HFim3cDP2QgWAgLe4ZbYH6e4F2eQ4fUHegyiJFCjL",
  "key28": "39wcZv41PYki8gvj9RvT4uLHeZxwoHJNhRbgpCq5dinPX3fLfbMSudZ3aDt5xiTVgBfMiQWnNbJN1MZmWbQXqdVU",
  "key29": "3U1Y1w8T3xiTi7STU47zZe6U6e9M7VayreXicME4u5615x6EEhzFFedotbGB6i45BjwH9wGiACaQhguZkxqree2A",
  "key30": "41F7sCfbvAWS2pDrpAs38GLs9d5wksmcbikaw1afoRXTVwKTVJJnEB4cs29zD9TGKPMbeWgmPhQzsJzZa5PB6D6H",
  "key31": "3oUxLR9maiigHBwuR2pR8Q8HhoXuEXgnetHLuJBfrZ972zBASWevry4CfFw1FoYWK7qJhUEYVHzmP2i9ChEPkWc2",
  "key32": "3DyCw1Wnyw2cvRLXki81TmdxtswYCRyzHWKd3TRaDPWQeEJRgssaF9mHYn7nv4Pk3WbBaFriR58RNHea4ZTAxfew",
  "key33": "A2Lxdkw8yBijU9t9twFq68soY1NMPy9ybp4wfvBaHPGw3kz2oohb73HRoncpFrhHi2n1PwCMQYPFiwLtQNE5LHZ",
  "key34": "2k6mCTe3jF7NoBwupykFZy7YHnautySLpuLJSjqopVfTDj3qRXQgdmv6nSpp4CqTxhyvTqyb4wTuECaUkUMJV3qR",
  "key35": "YnB5Zv9fop2zwDtgU6oaGvPQPVUHZgCwfDFhRYZfkorQe5tw7rjRyZBX3igXjNFWs8Z35E3mu3fjHHCLvRQRNAF",
  "key36": "DeTgEUVrK4WRRGz7hcM2WZ2rfugDiePYrDqNYmyhJqnf3qQLJCy5GzTGK7bWfdiSCYPVACJw5k3UbgidcE8Shg9",
  "key37": "3nTUWG7SfcjsjLubbcVT9zNi63gVFyvw5VUZ85afvf1nx4eRjSq6mU9PSdajpjN4cNktXfsjLfHaP4aJYXYo7yrd",
  "key38": "4tPLdcFJfgT46a1WztYUoC6Kped3Ddpd5gLBZfURr7FbX91RmwhYEryy997LTgtCAMS9JsKbD6jHZEkNYHEZU175",
  "key39": "qeo3w7ugcDq49RZbn9RDj1TWw4fh8iq1Yhd6hnxPVBGs7M8FxHHGmW6RbM1TSg8gVPpWsHE2YeYYPzqXD5KbgkP",
  "key40": "4z888Uquwbpf9UKUuLNbhCefa2WxiLJbWxj6brHDjC1AuRE3riHEUeL9dQTyWpJD1QzPu78XJZ71xzNJNQM9wXsn",
  "key41": "3RNXUQAzKGKv598YyeQDNwqkqGwpcKzE1P7HMLdG9YyQsmYdE13aB2ZJeXZxaJxtv4sMzXUP3cCiuMQpygjWHo6S",
  "key42": "2mVX3VSZh1QyKtqfsytW3vkevBNf8mme3hAsb5Up4hCyRnC5HthP96HpNtujTrtP689TxsH4nVburtMi81wiVm7q",
  "key43": "5RwrzCQn2KEc5tduMEsP6ZkfVR74pA9RW5fWhytZzkgEWd6T8TCB4zMhqRc1tPEobb62e4tUejWrRD5XWBzEqmuN",
  "key44": "473QRrpuU7yPVMcPkJXLnEwNBhvv2dYJeY6MaegnviJfqAdhVztEg9WnUbj7VW8rraLG1r5hxsP7joKA9C3TCKMg",
  "key45": "2CUMmFKy6R1DWyEDHwy7C21sJV3G7hWRRnyHE5NQJtYWHt8z5pfN9o1Pa7aBLLm9jgFu7WMACQZBRyXAPkQnE1p1",
  "key46": "A2zVeM7aDadCuGzeUtPVHPiwiq5CgzGdLhY3974bYhkRwBDui3nyrpLB9kFxNMuj4x5pKveVYHPet8THskxAcme",
  "key47": "3qZXze9bTixvBLFZGJiwvAQe4b8qutthvgFXcho8CRJw2qudbzA3KhzFdChpYCGAzTXqtCHTJMjgtZjNrtChsfUp"
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
