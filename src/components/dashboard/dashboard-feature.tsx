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
    "DoQWUeRAxGaoqqaDAYqedJZWR3RVTDKQrs6n4VxVEFkuUpnryEdHFNzSwcK5sK1tU8CkVCUSiZrJFHpE1Yw8rSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "256WBww7Vom42LTtwfvNW9bXieK8x9BMD3gH5PktkYFvNcT4DKRXf7ocf3qQR3AGsrpK7YzwMP2RCPsAyimk1QqH",
  "key1": "474jz3yzXF7BtqSxbDwFshdTmdQUBPXi9hzas6EAZ2jck4cTXixe11zfsEJk5fbw6rN2FhFbJwfwDVhHbxdm3jBE",
  "key2": "3TeiZhRr7TCwdtz99ae5kB4Hh4jPGhZnvhjZjkwHRcfJCMU6aE8gvnTTSoXaQJgWY1yoVcokeW9gxY3WY9pnHbw2",
  "key3": "mfUU6aFmc4N9tPzfUqXjkWWAntKArpGPKJEecLp9qgd1dp4JhFRg7unrDqUiD7UF9AtEPgDHepRdxADWrn7u61d",
  "key4": "42pD9kPkkNn7eDV3G96k1MrovNBU2jweZu2vjvAf4xNQoZzF8D8CmBdjTxeCn2sdU93TZhDCnrpynkxWdK4EKryo",
  "key5": "WbhwcPdtne6aHsK3m6iAZQMCMzg5rNZ6ZGpRBMknJ5Cr1TwqMxpp6c9g3BDJbVc9B4Awf19eRjXK5FQPysFj8f4",
  "key6": "5fFRF9jjh4cWew6eofjjDvPf8URX5ummmR38ub1sttbjX6R6naV3aLNe9b8DoP82DjU4ox5copqfkMrN86PpNfZb",
  "key7": "26AWV2eDndcRSohAotgiHj23PB7N71nYeUXjEdFRPeBk5wPJusUCLgycshoG4Zavy1Q5jei2S8zt3afzPjuqwPhc",
  "key8": "MgspcLbUX5BV89qWXHj8u4oBs3JEVfG8ifEueZftAftmn9oZqb7UZQ6VcnJnCTVHcjNz6w5wAm9o6GGFj27x93K",
  "key9": "2QQfW76YYJ93D1yLXbFBQP3JxNBW2bD27djv4r1k6SQudwxQzkwTpi6PsyjL413E7u1xByjX9odUEVv3nd8G12Lo",
  "key10": "AF4UFi2MRYHhyDaQQ5Ci3Bgw3VNNpPg4NmaB4SekEEbuiaMBcwXEzYhoZuyTCKmvy1YfCkguyYbFg77MbhDDy5r",
  "key11": "PeyqwkVRpFPvfmRNUfUYAfWwxT6SRWD5M5StAaZ7iNGX7P1C7S6KYijooNMRsmfmzveMqfeQMe3zjt2Muwfi8uX",
  "key12": "5jqjmJkjgQeUXntMwArTV1LJSCuopp3XaNdHxvEmDjUS2V4vsf5oFo4vwVkhHhbfjvNMqe1YQKEhxEYriN54j4Ss",
  "key13": "4jvahP7Mv8xB6ek7EVPFApZ4zLxCfrBTVmzExBqRa9vx646uhpZiBoHeMXznHgjdCz37TT1byrvC4bN7UhqiwzRA",
  "key14": "4d6BQVgfBPbqfF9MqhkPJB5hTxZSKb2rQ6J35K4QvgJys1LJL6pMifuY9iyf6DEbc98TjHeD7HCNbiyqUNpDVWHV",
  "key15": "265zQdt1aw7EAhzvZy3TM2qqu55vZjMQuAeMaphuXpC9hYg1mn5KWthg6Lw3gA3W38kVMU41AHpSpr4uXeKTXFu9",
  "key16": "44vBASdzjMrh1Tev9Q56gV9fU4quMqsLpczhsq6yKVwifypT6x6AzjFSU1akXFufVV3sHFbMbKUSFfiEaMFGeMuS",
  "key17": "4YMiPgnT3kSwsUGoRuFiC7Sxi3EgBkHhNh292NfrJd8hMHr4ozYu5u2HUYhWnxutB8RP2iWCF2baPA9GBkpPALDF",
  "key18": "2LGWtHUptaTyzqvnMtcNjFzXc3DSRjCpQ2de3QXyi7upjnE2ppUkT56oxSSh4RcnJgwBHTHgFmSYBo14mzNddkya",
  "key19": "32d8WoQ6GGexboig62c2RRbsWZ7JssAUuoRpC7a5vFRRRpgkA3FA9ygN5DZJQxi2V88NnLyLwNx8wyDb9gtFpJ9q",
  "key20": "5SR3VYn1SN4sdLSRBvaaxSN9yGmKRZAsvb3wsF59hhZSv8XymC9L76SCcPQhrVGdrqWDpRWbCtQDLAsFv3wG7rMV",
  "key21": "tATTcr9kqwRo6jUUHCLdHEdjcZuDBFvn7LTUBVbk4WKCMJwEZqrUytakNgCSQqfaxw4JMmuddU8zRidNeGwng4e",
  "key22": "55qyEW1qQ9N3giEmRfvWCzV2W1HdHUdoPQ4bQvq5iNZreiAh5QrrV8EueFiLUUa9kuJJFL1etWUUs9PCLQtsSei3",
  "key23": "3DtpoTv36LBwnPYYL9WERNrmjmBdrPdwWZP8S3q9u1zdGFetF15ykq1pVukBWFmTeD5HiqRaK7YsqG5Mb7jjxa6w",
  "key24": "cUQQAutF5sWTAMKsYHzo9po7uvvEYSfDisfFjZFgjptB1xo77w8B3nW2aPP4zEjRkSXenwieLdaMDrza62ZKUUm",
  "key25": "5gF51fURYGKXyP1DkbjEGdZnfZ7AGHz6gNUzNEpv4PhWjEmwEX9QDBmRAAh6x878Xsmfm4Dm3UzJY1Mg4wxH6Unj",
  "key26": "3wgjUwbvhvUCJWp7VW5uyh3igVn1qewDgevcf3oY9qErhPgsfUyfS1aitMYYgH5ddmBYwBuPzWWCLtwuKR5jJA7K",
  "key27": "126PTm2HDr8bMJNtR52pKYSEEwNBaMdPBNm9c9C5dvZA4DGjqfJafKjRYqCkz5uBszC8iAmVt5p6yPt9ndgLE4aV",
  "key28": "57Zyzx1V14kVcrsdLZEDBMVUWChiwbYC11vadHG3YNB252FboQwcY6rZWEsJ9S1WpC1GhwySBMtiXLBJZtwfyCeP",
  "key29": "3ijhkKNhTgPaxgvfwat3H3vmmqhZr7vBeX4igKsdjjCRfDM1Li4wfWpi3jtki3pzbNgru267ChxH2ftbVandsGi2",
  "key30": "4bMujtvkKxCfJNt36MPLdwkxmFpn5hQcYiTm38sBzcftFDmegMKCSpe9KdcSw83SZi88RufBbPsQxb2F8Ps1ajiP",
  "key31": "5XU19zesUYaMbN4wzNxbSDN5SnxMFh94g5TjUv4A8QFDJ4bZamngNfag9VpVWbcoRSVPBgccQsLUqZ92umBAU4EF",
  "key32": "5tKBX3u4biccgSvs8vuqqb1LT2s1Gr26GRb261tf7WpBfNwMfDpWikVpY1wUDZ8euaomx15eDrKJ816DTZCV5akq",
  "key33": "3aV5jK9QtD1oMr6bGNWxQqGsPJkUmwmPPRjPBEExrxAqA2EHY4YP9SrvDBEwKMC55Za8YZVpfriFrnSJCg4zLHjq",
  "key34": "5WK1zAojUGruhqBpBz6RbJnwrNPJ2JYtU3G7serF6FWiPZV6Vo5HPfAbmKWytS8fSXtPqCxWntmRXyqQgMW8sWJh",
  "key35": "64tB9xyZamrZeGd8GeyT5WKRXHx6oz5S2fMSWMtabUMQMzfCA7dkeSmpC57V8WVx2CyepxMzb8szJnzgpAJCR17m",
  "key36": "238aU1oUT2LqDz3D8J2q5hnmPjefPZ1FyysskVThniyNdAJ7oZUGeo8zLDrgpSjXoqg7DRn2wXZ6HfQzaaV2k7ri",
  "key37": "4iG7bGGTRqwL4Es3EiT2tKGxt5ymKBiygUhHx8LcdQsBMTKwPFjLty7nTpVdtJ5UZJVHi4RejUhrtHx3RPMzFdTD",
  "key38": "39wQCP9b2TUUfttkeEBGE4HbuLZL5mdGJbHJV5YbcfwAmXoBac89Lz1fTvFjFUxrdRWPcn6hCCCpecwS4oHE8mbX",
  "key39": "Mc1rgRqCgfCekrjZwg6fuEy81DUUm3hPYMFGgnkXwxYNkBozCkU6Qyf57k5Thbkjfc1ocrrCFF1B4srRKrXbLvv",
  "key40": "5VzejevsEwupG5QtWWbYwyjeNfuYMVSQJNJKHmGzfg2qKqWLSFH5D8q1u3X587Av8aiFdwwLQeuS8ZYXHWh568ep",
  "key41": "2UfpV2Tbk1mHsT5t2Y7cxCfEP473svfJG626Bat8aYo9eTVpYf2rWPgpXiAew3SKGoU4cDvYcygcXhdaNSsx4jRU",
  "key42": "2EBFh47mGveprc1sADA8EssjJ83GmysPWDePHG67NxJrt3Scsm7RENkJV9BCz7B564d7cPrFKNfFSNgN3gxxXd9D",
  "key43": "28GQBjmetGZgSZqYmjGGP4CMzxF5c42hMarJ8uXAp4xScXNKRVDL5Uc5ZbAPxsK7W4ujBgHLR5gbUjhzvAquknRe",
  "key44": "56jVSsvFBQSpxa7BWcyusNVeY7nts23BGPw7UfaAqPqDAC9nz9MZgcLmU8D19sNtCSBM5VTYghDT1p9H1wXUecjK",
  "key45": "5nPLNLTEbJP65zDHQJqc9Q9zxYzvBJztRzWvhQiW5RbsxS5emo8A27Uh5p5aSoytmniySHJs8UadEtM2B57CZKm8",
  "key46": "NAGzHX8YvC8NsW3iNgcihCzszqtbwHbw6ZTz7nNBAeWibQ71CEvmnw69LiULWgioEoK1g2NNXwNitv67DFqQu2n",
  "key47": "5G7DhL2VYLSsTnHQd3Euq6nrUojFgAs7rWkJdeaieA9tvfzQSqbbrYUoKHgD7todiyHeeByfVCjJyQskUsFkAnXE",
  "key48": "35VrpUdacm7Fe6EjNnejCX5YbT42ZpqqCAt2mS7puCQhdY1eLh9LaxN9Qr1T2PAipKW5cMyZYUrXeXAPwiLnYhk8"
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
