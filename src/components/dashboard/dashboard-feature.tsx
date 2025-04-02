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
    "4ySk9zm9jjpcwjghh2k6pChEiYhwNG74vfzK7Y3X85vG8FiiJsAM5A8uC4Zxm4ELydxysbAyZ2D5q5P3t1UkYYRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjTR6freGfQCy6nNug3mYLKtP4bjd4VvfMYKDTQxGZq4vicyPAsMV3CMYMZeZ9VK1BDJWU2QwAsk41wYwFsCgmp",
  "key1": "5UEfk5cTVKgbZwjsJp1K8ZgnbpBkm9qs9dgskcbV4bbdmft7rGmDkpbMMpsDinhzjWBD3VMBSzvRmYKcxHV3RwfV",
  "key2": "5YKuk2bcTGDXoRAWAeMdqbgPScJH8U5Vp1WGwPyKQchAFpnzB92d9FQu7P3fV8spqv3tq7Ty3qmvcMJQ6MwibmKt",
  "key3": "1k9zhdZ2WwQFjqBWGraWbGzqdj9XH3ewidLV3u6LrgJSGsAy2zQX1P2HwPJFFQhArYaBB6rSKpAcxUDzJYRufWM",
  "key4": "5kEACvsTsNiGpDxiGEEHZVPj4Mt3fss5Tmz9WAuD9VDnTCRZo29f8Q5z9oYXZ95yNXeqH6zfsod7E3xXNyYRhm32",
  "key5": "5TKw1gpoGLY8Vfze35uF3m8tLpnPEnUS2F4bsqsFktwrTD5EQ5AktTS6ocCJfTXV38sSeFYdEg7hcHhrwsBibAsK",
  "key6": "ycTZcwagw33jL7Nty1WYx7xoPoQsprHXEBFq3MDE9gYmB4vmP4qnuN7okSpY4xbMHPTXahEHDMTGMcpLyxdnuDT",
  "key7": "MC9gNogtr7vRf5Uswp86jZs8nuzXr43u5LEo5qW8D6qLYXphdSGsD6bSnbmr9yck5k8seg5tNMzyPuWjQZgm43N",
  "key8": "3Q67HRy8km5Jqg54x3co7xMtFtECNye8oh3ufeCxXAxN2qbjSyrJnkVYv78wyWYvTBZ15XwvsjsTGVFQcNCqaktZ",
  "key9": "2pwfpz5UUXKU6tzmw6JAtKPwvF9T6CTW2EMjb3sgEcQLWgq3uxK4g1pt1DDBAAayw1auBfCSP4jcKecv15jyQ71n",
  "key10": "2PhXa1N87JTuJ4C8MXJryupiu8pmJawZrhTQNmohQnExQAcp573NKFYupfFhGT3NNR4c5cpfQQBMX1sEezoBmQEz",
  "key11": "2uahz6iJsvwBHydWZ1Uja6mxYejxNusjXTbp2RE6e3WMG2fXAb2Zwgp9KvTRXpaig29CW9FtY95JTUgnm52zRZWV",
  "key12": "25ho6jyUkpDd3qcZjQav4Dw9aKyERRVrhf95nqRvcLa6zMoNxn3ktxFiHcMHzmhpvgSJoSY6UoFWhUp53zVmMAxb",
  "key13": "2NLF8FEY82SnUDitmFCtVxDxaaaEG7QvtJ254pXhip9FC5WkhhTVKrTrXc7iQ2r8EfzDmJBBKvNqzRds66MExeu9",
  "key14": "5ixGpmaMNggPntnCPUXdcrXn76jkWLNtYjsYDAKAexwiy5EURaevpWxsbCoh17fPDxqxS5HseqPR92mihoGb2P2K",
  "key15": "5RaFQkfdvEEgCywgtowPJGZzCKwuTf8VrjXnXJBzP5WoGsKuBFFExxfpqNy9BAJj7Hi56wvXECeErxksbTbS8msE",
  "key16": "33xDNMjUZRbgpFNoZmdoWUHjjpNuYCGDaCaQF1TGyAdTTGnUm9KnVURZPtC6pevszXCjRoyirFEjCBsrkX84tWYc",
  "key17": "5NjuxLU1K9hzYwTSnGwLATveAcfph43j6HRB3mdYHw4jCumStsNsoHpYQEHQdpovSNuGPjfJptgyjdXoqRhPghYU",
  "key18": "ZaxEZdLbtsbHYDmWFeuMQunAssJfDi4ZrnwD9NrU3qBDe7r5teT5Mr3ZxUpuhrQQ4m4w5cAWzx2A6joE3cHBL8n",
  "key19": "Bi3x71c8CbM7191TK9wQXpL2FEpQmVuh5jPnGvHPY7pcMyW9BZUqbxtGyMLGBD3ULsE9NJcmRHGWJbmdQdDbx8N",
  "key20": "Q7Y7AjUdWLmtKNfR2dkfF6xMPWk6tdw6VzLwZAFADhQb7XKijGPTfHzEBFXSAz1kcn6PKvg9eYaxhVBbVdoatPU",
  "key21": "4hn1tRCQy9h6tSbH1WrDp3jC3ZSjUNsySAuGYun9jznhzDxsvpGtdycETVsg28yWLrDZREoQ7qhEYjd8XXgNiApN",
  "key22": "3z8BYCPrRMLJGPdYjYLjNJsta8ng9LdwD8z3cHjXDMDQ1pitzWr9ch95hoTyA41nyHAi3cTcPLkXFSEYGvWwnX8e",
  "key23": "5dLZGRkVt9TngVifTTY587D9QYPvCQjs6sSbdhojBxnHLz4V9bNKkxChfkT2gYQ3RAJtKCwa6qbLqZreUevdFiAJ",
  "key24": "2sF1Gjvm3e3QQ6dcwV4dpcftikbtX337iQSPJ1DnhB9oCHajnr3vLiWwJMzJhtbw4smtXTsGVRY9dcsy3st57Laz",
  "key25": "HV2TXAe6gad4LhQHjmfzsPVDgsj5pcZAzLMFVhakaAuTbn13jd5HejahCr6ASQobTzS5mEAbZpDoJtqXQ6svDGZ",
  "key26": "53C3YqfvcudzyKwhmwHwHjQzxz7Ar4FqnF9FkbGRvT2iNEZfa4n6FXBiaZoS15b45CSceuLLr8bGEcH6VuvUZkwS",
  "key27": "2cWCrEcpLAzwQqxSM3hskP5pwiz3V243PAxNXuNKinudtFQu7gquKUyKojLWjxWcr5gu5uVn6rSSiWvJPAYZwp3w",
  "key28": "4NyYCz7P89D9UY3GCWXc2YYnt4J1G8WSNk3K59LUxjRTe91cnvCFcg2kjRsbNJgw3HfJVtQPiNnasXNgpG42aitG",
  "key29": "4WJ9GMa9LHAknWdnznUYZmVKW2ap9yvx7bRJ2SF88wvskKTiKYPbBznhSrAGFFwuKwsXqfreD3vreUUtT53SNbtW",
  "key30": "5DRv78g2M8hcED4gUG3viPij4j5g4vqgJkJzHkT9w3wqxjQUioK5obGyKRdgpLrQLh7eTFzH2coz1sK6D7WQioxT",
  "key31": "4t3EdMvFEx8TyFxZMeURV4z5ehW8umdnz8XGzUKJosYCFAhUCgquveavLCqY7aPtMBVRHeUKgnta7HB3xmo9WNuZ",
  "key32": "4xWXN91Lm5TvAbZPh6bV8qs4DrwZzNMn87mhrGajFcMcmL97MBhUWgJvHA7FYD4SZtvJ72RzHtZG97R6di7yRHfg",
  "key33": "3avoJscnjukk4J3LM4uAiy7ASQNDKGKADNX9UKVvbueztci3nyQfuHMA25WayFcVvGumbRZh1hxPFYSRX59V1Zvb",
  "key34": "3ZZmAx8avNUSQrg5aWvPnq5tb2T78ZksdBsFyEnCceLKipsQwdio8DRjbBNQnyZfBBXBRU6xPNaFDVdpKK8NXYFr",
  "key35": "5wk7WsvxwdfA7qXqGf4jn4yrae2VQYCN6pTwSNgrKHszD3Whth33vs6CLBWVPMWgQ9mnwkMec21ESkCEWPTwRrTy",
  "key36": "53Q43EciWQPfuPyvFtGc9knxnnmMDHPpFRTrT7YGGWdgR6wppkPfr2hEWm4obAJXTJCabaG4qUthKg2y7Q7UaSna",
  "key37": "5ibrWruSMSkh51fB4cXHw4ychHFRE5ujTdD5qMRxTJjmpJ3Q2dHPs88WhAoaFEccwojzVCfUTXeBD27TspFXvnfu",
  "key38": "3u15hmzqtofdk75mf9vjSjuF11rzkRfjCsZnjbyMspkAfwLFARWQKbVACURH3qaAdtFpWNtAF7Lxhno8Jabv4RyL",
  "key39": "4N1sKiJbfd7fUc7oFSGg6cr9DVZsV9cd43fKaqhPTaRr5ufJLnwxVnEp5ARsf7U92VYx4YYzd5xugsvutKCGZgG1",
  "key40": "4XsvxzULGpxnPbd5b6GdwRE1LTDNZJ8oBGdUiZFpmPCs9i3eT9jRM2ohg8D3nyGMZ2R1uaArGXkCuJqSEkEBHSsu",
  "key41": "5vh7YqoYx35HQSt8CM7LQ7Ex4UJ6Tj89n8qnHpNJF28ujkoYT4Wkz98PsJgYuNizeUro47MCrMx3YWtpfEH2HFFF",
  "key42": "5vwYdRd8ZPUfXXGqjxAUKoKkjqAo8o8uDnk33iavh9hTfkcKufcxhANtcMLLos1mA7bB8cMg63Pqs1id5R4mfdmV"
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
