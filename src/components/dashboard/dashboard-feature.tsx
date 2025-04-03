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
    "337LStKGjkSRrgsSxUFfeNwG7wP3HcU6CYaM9N8VufZguWKJoxhNTjUVRJ3HScJei4dS2zyoskym6bdmqKeymWt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tsf9tzvbYZPCGF17tfCrLcivaZuB9dx8KacLJCZUZ2r9LHeHdTh8guGKUTjdmEnrkN3WM2iCkE4VdZv2yiTJDWa",
  "key1": "7TSCBzyb8ZsqbB5oog4VUw1MkNNCfq4LgAcoN3pgkMwh2YiasQPirxv66PRJB28Toy8Rv9Aj3dCKij2rhC7U1cP",
  "key2": "2rLwd4YMzQXsbiuDdk8pEFm8NnDnHshGHe5yi9n5qnn9L2a1QJkKvRE4uZMe7F3RNpkh3rbWvRCjuHhcuojp2etN",
  "key3": "4pU5r8nuh9r6mREDR64gogphU1mNHWpBUqFm5k274awZdmXbajEboE3jtrNy4UVzqLTJ7UsKPULaULHNiUMBrbei",
  "key4": "2HfNJZ28YkT92msfVs1TzGNoCJmG6qPifLTwjR1MDQFyD5ZwJ8wiM1k9tVp3MCwu16gqvtnEwzuHyZCDnkWhf9qL",
  "key5": "3xnK5QkdxXe5KFS46CvzS614x1vgpjQsBY5FEyWJKiN8cEL8anu1TxyKpHaz9Qatt1auPzQdxWEDQWrVH195a3wg",
  "key6": "5zWPAzpJrZUNmhikNSTsC3dVdDwdHVxenN6Ze18UxbBkALo3SBxgxsXhQiwDWn9BetZurTomojqm8SK544wCtq9b",
  "key7": "63646tyB2XsSkDxc3GGxGyia23b3Ysn7ZU5Pt8UmQVGFX8xvXdrzb8Qcha3j91axePSciP6Vgmc229DqBfB4HgkJ",
  "key8": "27fz211tz2PHrij5QHMPGrqAhdVgNyEtmJ5bfzsyRZ6h9vpqjJB9wifiVwpTbeYiLbtue5PLWDTHw2o6qsrF3HXZ",
  "key9": "cF6bJv8JRyZpKfMysyCiNBDiRCyexYVVtWirEdnnK1WVD6i5UKTNEkmF7NMdpajhWAnv6qzbwT9e8oRn1vEWi7t",
  "key10": "3c5HZHuXxRnowFk7pyR9Mc9T8aNq2Gr33MMwUe6YTRhWjDWLBKGhhZD2Kb1sD9CqjSVRPvoegz9QChTKCUGHNHDj",
  "key11": "4S2zdMSHLSuzC6t8qWzrUWDaixBzJ3xToJcN8ygMCFsraYXcxymY955kNHxeDEqyoWQmmkFXaDpFysDfLDwgKWod",
  "key12": "54Wq5WqEagTTQpUBTx1NPzuZ229WuZ7WTATHxd4XDafuQYYcdUREFgcHJSV61x8QFxyHLpJcMb4sp8hwpdyuZiTh",
  "key13": "5XYMr63eedQ19iX9NZ1Q2dUb9EhRZJSTtKgSMFT5ggbcsBFB4gkt5YsvVpVx1USZt1kodMyccMUQqdvrFM6WYt92",
  "key14": "5XjRUSrS9GP9hQ7CpJCxYLpt2xVYiv9VwcvCGzWgMC9GPFABedN5U1hXM2Lj7BDwUer83nKaVjkErxkMnFHkLRQu",
  "key15": "5m9oEDAdNzWEahjkhLYsShg2KeufidXymirSGm7fZJcXq164EsyCGyMUCJcK9vC2bzRKJdoV9YFBNbKqem23vS1q",
  "key16": "5D2rFv5udrKQZsCS3SwpXaVANs4MdxFzoXC8RoEnJBqGDbz4naoaEs9EttTxPWNiNtsJpLYT9vLsFmoghq5JV55L",
  "key17": "1FfNqh9hQYwqfPq5eaMbBsNUbjNj6yxRBoDF4zQr8WJXHTLPLACjc5PYS8gCE5ZF9H42UHTzWhw1pR6ZPnAHJY5",
  "key18": "5EJLnmqkwQeNFaeQ5FJcBdoGwaT9JmH827eiCpRpuWdc9CZuF8vKcrLUcJovjv5hF3fJXmCgahTr8fbRs5rMrEaf",
  "key19": "oDU8WYcKcVeKTpeAud46nRmZgRdKFucHYuAeTFJpNE5SbdLFBX577MDyv9hviuuFpqvjCoS1NbZrP1DHKvXD4wf",
  "key20": "5FYxN4XVJ8foSGt3PTJDtbaWkSd9EzXiFWe2VECSY74SiUvQ3RJAuJn7hSvfP1g8Vv7fEVz3dMcPy8n6TbW6DXdd",
  "key21": "5Gsnao6GJyf2Zfcfqz93LhfGGs4u4upncnv3EgHCnuXJFQU7r5GByabsouJmNmSFrW2kPiCw6312GuWcvi9rdrm4",
  "key22": "29wDPRvPgT25VaagkfFwsqFCS1qDCRPeFz13s9J8RiZF5y1oPsvV8FbNpHLDGLdiCZxjxHLW6R6kEiZ2BLqgrTQv",
  "key23": "2z9QsvnRdUzfLozigmKJ8isQQ3k8hpRJX7zEgTkWxpyB8ekK72ZhSzovgGmueV9wazbbABmC5bXQ3KzZubZEu7n7",
  "key24": "3P8VVbiiSqXDiUpoPENXwkwdJeydTv5esHjfF3q31FBt7U4eseNDiaQhWyBXSAg9EetWFfqL1PZdW4xxCzxJ1aHN",
  "key25": "BjWgCLA4oRhofEDLPKvu9sqALHdCk7VSRrwhAxLjsRiVjrC7FyNL77tDaq4fmzKUBATfygupecxTNKxSkB2bvYY",
  "key26": "5ykzVxneHk1Fh4Wpd7Md2afrqPs32G27LtXZq2Yq6MaNycSc9cHeLrVHMM6QWrZYmrVGvs61mbZM1F2SMmsVbpUv",
  "key27": "5pqZK9scLLHk3Wq7zFY5bL148czKU2SJSXuBPsQte3nYFHXLXi3NLMfgqxwwLGST9eahTuqW9zZZkJeSpF3DxPQy",
  "key28": "YwBgPKkoJ64FyUJgDEfH2SxaQ4HJE6AvBVKYaxD5dTehFX5E3sp5XuPGxdBLnvYHV6DPLtfULuFNu7mLPLUL5tH",
  "key29": "21cXHwJobT3NKqkADT7ACDhjWkNtRYssBJV8VkxE2qkmvooJYpicrxC37H4UjLxdN3fArrvzQPKUQXxH6SYN36U6",
  "key30": "2rTHqYPL7zKXRZGLd1sUAYM99Q9u4Po4uX1zsCCTDroMC8baZf1ChXvxDxQm6ceLxGu5T282GvnUgVNJ7UZBf8ya",
  "key31": "28by5NGzq3CtybnPF2beopxqfmg5b2pYo2PD65BZ56WJdeCzkyUeKQqLiSWZSDDhvHAGVXvR9rFy122G6FvX1gcr",
  "key32": "3GTZLZaRdDbmMDoSjQ8SQGNq4Yqka7VuN9ppULZgUh1Nm6ERdydm5PeAVdmY6gyXPHbKzs7HzaCCGuNcSBRUuycq",
  "key33": "2EatuaohjMkb1UskAj8Sc5CPMf74cieziPizyzQcXScxZsj4ExAtQcp9Y9Rzbi5o9wefFKN5a4cZu952xbpYWopY",
  "key34": "4PHeEmoxVRNAQVEuepEkh4kn7XeEVaNqw5Sc8Jftq3XLk3vJY9jRyxfn1aaoyepwv4QFkwFWJ8dzbabTfRaY8bxX",
  "key35": "26ZbHeBs8cxWh9KdgjH1YwAD8WCZZfocBKRQQS1GnZzEV6NJQcpczQ7ojpEQeZ94UPWDyBwWv482EwVoiZe1dWjj",
  "key36": "3JH3XtrwwRzojZAUs76g8eKzt92sG5Cgpvw1X1o9aBW2iFe3CVuciuZKGatZT6sEgD6ffMsQ6VaxKGpzp2H16mvq",
  "key37": "5K5tNEgyJjoCEDvSBvCdqbqssjh6qrjN4ETVJfKPmd5SVN96Ngewqp277SjWsj57AZ71vBZPTf6xtUcPnPoM3yRv",
  "key38": "3wxHiJbuYFiSB8xofjuxW2CzCqcdg34MBMb3o2Qn9qSW4zoNHvujtb7pEVKUGZGYctLXtwxj8LkzUpkuC3nzxBFG",
  "key39": "5GTm2auwdUGehPeJFqwjzxDMgimxKEYge62x4hAtzq7tTZRjuuFoJhBj8yus5FSGz83VrzU5mytzjmnDjHeNFMU8",
  "key40": "2nFEt8Qc52fuCYrQFjMa5M4kRZudN1CpGsZ4WANtjoBafhEzJqdZCz8R2AeAi7iTjhT1BC3n4ydRTajXiSxHsS8i",
  "key41": "4W1q8fJe1NuamBNe4YWDtfpwCK4bXJhnbPhAktaoCH2kgtrf7b25GEkj7UU4KJHELjZQhnQ9gdXGgtf4BMqYhyRe",
  "key42": "3zVhKAHq6T4HkZBoR7WWCyNNEv8jhqWoMnkogk5hDGGNNBk2L4oj6MJApG3Wi4pb2362u2EoKvzJxjebCXtqvqAP",
  "key43": "2jEsA6eYYNjtbWJAQW1mxka9wqGTzTJaWGrmdX6b5xWkRKPQAvZojjrazFg2DXvj2NP7BNkMx6A82h9TBiqPsDVq",
  "key44": "56jpspTh8Rygifm94HUiFNszZjQqC1ssuBEFczBFCMxsqeGpHggGjujfiV64t9oZEwaRas19tRHtf5jCjmA1Bb4u",
  "key45": "3wzkKQiygczxwLAJ8Fd2fQNXQpdKetBDF1Mzgvsc7ASnQah8fD36mwWsRXXqmLhe9i3ofNQBdwTptZoW7ycMi8VX",
  "key46": "4hPj67cSGWdYmddMK6HfjAj5H8DFAzJBxdzJWPUv7Y47TPfCxpLRyEpN3XfTXuydoNB9pWnPJYugUhPEFq9nXaGj"
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
