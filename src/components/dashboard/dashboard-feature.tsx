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
    "52Pap4yKgnAuM19Mes2g8rn9vXRpxbShgGnFRA3cR6JE6hEBT7oAjNTS3j4qfsVT1LJ4C3kmxkzfmq4wVGYr33fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVQW2TGUqVXvNXhCWKDxJEzMjL6ykZz4J5NWcXDxpX7uNJoXDvToKY8AaJeGJe4hJWGNQ7KRkd1s7TkK5hWALpx",
  "key1": "hyUUxDsEpWpYDdw4m9hU34HYwLCSz9V7mfguxCkb7v8UdA2SVNgQk3SFwxViP6NGEu4gNHF4JyjLabncRK88ivo",
  "key2": "2UVQzbZSGvnLrMZm5JQRFe2g9jHuUBq1d8y7H2Cz8dM6bkvGsibAWwbBFKvBD2gvtT3PMfSJ6xs1RusmUUXXbxiR",
  "key3": "32wLtGbAmx6nQz45ADAAx5Bcsu244jUJkiz8V7YFXD6T4V4Z563kcu7B55wB2MFGHT39ooA4SnBanJQibhr3gY6k",
  "key4": "3SzW6LaXmmpmAcqYjvaDPQmcNF677hXXSPdev9nqt9mHymL3HC1GytYX1KJn1vBrQm9N2CdcZhhWPpLLNbdje8pP",
  "key5": "cx1SQUYXMK5BmGJV4w3PUjuS6YfBsVmXLQ9h9hNxZH8RewQarToEA2XAbhGxZMBrZdoLwTAR4Be6T1PVmiYon4S",
  "key6": "4cL4GuT8p8jhnHCUNskZds2R9B7EETw9jccGG3dWm9xE5ZGjZYgsSCbT9zRYAoACjSeN9csPiivwAFmJDVbLhrPD",
  "key7": "2dgsmeC68vQNG6Dm1CWVzPE3b6KfPunqaGVNnuztdGtSiSR4ukzkQULA5rooF6yWGog5upDsxb4d3NpjXL34xcya",
  "key8": "DP4ktnZG6qTf8NKm3YjGdiMveVzQHsGVuUnMGaYLnk6hzgvwLyaG87wGcypGWrhbWyNKXBkLPvwDqzk8p6Rr4xR",
  "key9": "4uYniiCDMWBfAEZFUD7Cx8JKvMbi3ccBWZe2qHKR2pG2cmymFsSrNdS8MHerDQVUcwjAzwYsXAgkZHRvonSMsgab",
  "key10": "51kjtnSY2aXsFun2oZtWqjEzpmT3CsXn2m1GUqv4mm599cqNQvzoYxJUZLLEGoNcqcLYj7Wr3YgV2Uxaiz6VMj22",
  "key11": "2TToxJCf6Fu87fCrNLTgipMqDyqRAdjZQs5C5G2AXhmGrzE4fShCQbais8vaEr4vTHAMHd6ExqKVcjN5jvxayyTL",
  "key12": "tuKi3cgjFHxfMAGHokyEigHbT6conwxUYrBGZ5KW9xJNAYPBSa4CZDbWhpuAWR3TaPhzBuFi8LSNiXjEwtaK73N",
  "key13": "2b4vJdix3eCxMBecnowThP7SsV24AhHnbERnxEXMjSbcmFSxQ5AnyRjSKbRDnoSLwBXujXeuxtnwRRUYv2bzhfGB",
  "key14": "5cmmVoMRCK5dNoe3mSiwFjbU67EgRv288gZo7Ki5LM6HDBTEVGi4qns5ZktBB74auJ7gEWHKs4ZYGe6EfvESqmyT",
  "key15": "5UzaPabAAtobWLUXFyYh7eNyU1JBadyZpVB8mEwGEN7JqNsqhCezotNe4xXLT5MQQGm953Jh1zrZWYe1HyPokUKB",
  "key16": "2AJTskS2E7kXXvWEi5gBn6hK7es6vS1LZMBkqHVgf9BvMJ8JUJr7bCTwes3AURVj6KAPWgXWsMjpwnczSGJQvVV1",
  "key17": "5WuavEiTvhB5wseQaqQEHxGFYMZwWWSmiakQgvFZQSGgQvfRcBq1fYxgAgJMuPVDkcxyu6vN1AeBrFuuqeXxXsYx",
  "key18": "4YEajZCeZn5VNCUwvnSN6UARWkJvR3MUmheV4S6BteNZ6pArjBzWXhE4SV8272Z1dL1N7JQS4XUVxKDrE5Jkv4Qg",
  "key19": "4xCWJMxxVwd4Z63chkymF48fhaMxqSSbG5J7KHzceNU2V8NLSzg5QzsNStjWVf7s5TsqC6SeH2y3j2SRs9M1yEwH",
  "key20": "2fWxWLVumCFV5nvddbBgBHynsQUYUyx98WhWAs9XbVroyrNAvU884yK1qe1Dw7TAP6kuBxvD878ys2uwvvZvaqiu",
  "key21": "9hV8xTYEA4vmjZUqdzgMBcQCE9tVwoBRC1j4Yiea7oQRpfenrUHUm6tSpw9hDd7gPKx72fsJmFBGgKQeCHW79Tq",
  "key22": "Kvab5eqtahLH5opi9QyeCjRm3kMPtwM8wVLseDbqNTjxKzkscHpnPnXPJv5aSQprNQ19UWhXd8RgmzXsdisMvji",
  "key23": "3VPwJJ9jETyubTKdCjoZcBaKfq89Z5qNYbqtE9q4smYLT7HZjXD83B7rBGAUCsrymCMUJxRpjGaVfCnxmbed1gwr",
  "key24": "47AoPfjy48z6mnW8B7wpH8TT2HtFtueTHDLebsAX9G5FvgiRkL1whjyhUd3SZ66PEY3sQTDmvFhauNg3SMNPtdJz",
  "key25": "5AUB98FY5pNr1A2LpvWJJUqQDURjM7Lmk5LnhZJpRYaCLDQGix4LuFYGxs9jXucEsmR512JHhAxKWkRVv9iKxRHD",
  "key26": "yvkZiuJfqwo3JHCZgLxw4P1QnixDB7jhsGr4SD33VPdcWy2psE9jVuGPad7odeAkHAvXGrt3S5Y4d5Q9odrbDGm",
  "key27": "3LGXT1Z61uJMxeZHQ17BXp9zpiXctVukmG814keb2UAaQdZVk7ujDfSsN2oCmdgZP1SydcZ1Kv66Tq3Wv3TR6kPR",
  "key28": "3rukTHmhkmTeZWisosSacReWf276Q6XKpTzQbRTrekn1NjL9oi9Tfkj6gBMySF8sKt8ZE5RAjM7CwGLTGr9QY5dF",
  "key29": "28X7ZYJaqmeo7h87RGBq8ivcWbw2FvAACYtZB3PZUza8fWbadGvTRdkQqnYc4DCBRefuwZfQWGcbyTumQgz2vCyE",
  "key30": "3cH17c36CFoSAjmAnbuKDCedyXYZGBfLXw8JreFLxQ7ZD4uYZeNYkTVo2YxHGY6sPoz6VzJAuU3FtCGGKEPnJKSf",
  "key31": "4ekg7sELWxpUCGRWHbU27Up9dTagJAa5sTHnfFa7BbrQ6tdKzkEfKwzxcrit8diVthNYxygN6qwPStDDaBaQvpi2",
  "key32": "5zziyyaMGyGeMf9SBjLbYLXtmWwF4WdbYe1DpZVF2GrDzj8d7dB2mDSruk9yzkpgXLZoxK7J5PrAENugAaXizJQX",
  "key33": "4etz4YLSAkzHN7LXU4psBBkb6GHpUXjXcsokQ6tsKznaE5vg5hXqq2tEeRbkLTzhjVTZhXD8prUa5oowLdENaGGX",
  "key34": "2hvsBTXcJr2YspGWvQJQmrN4iv5ZuEZUpRK4Uij3Nuk32Ko4DbH3V57eMmHXrgQfnCcYrug7Ue7JJg36sUFiWAoU",
  "key35": "4VLCxTQttUaMdxCemCAhbJSQ6Bi9Tc9Y6ME3bzPkoQCbz6w1PZ18Bwn9asKRPgEuabEZakdEKFnkenYVaXWRLWi5",
  "key36": "3qbSRJ619fTM8eHKekg9sZVSXnNteHvn5S8rhXiA9VD7qoH4rtv75ePZ6VXpHGN6xhMkF3n9pP16MVUno86xf3rp",
  "key37": "5NaMYEAmfFov7gpodgnasQEc31khPymXpVSYisp93S8BAG741qX6fxSPwrjQVZSUn6o2Fdjsj2SxxscZiLikdWFP",
  "key38": "2Wy1w1M7DLmZ7XJRRUHqQ2EXeAVvq1vnByUjWHJERfGGPXK5ehFbcvRNZ8hApZVp2yGxwhAZUEriC687au8LVfuJ",
  "key39": "53Crw1mrUzyPutf6wDCsKfxJfKDuvghDykTqVUaymyDTqtZfifWHgv6Us13KpKqpfDR3ot7DnhLEaTUgAKdxM7VY",
  "key40": "2rD9Bbn76Haj3RRZ148Skzk6Hf6F7puBJmsB2qoRxnR5NcpAus3Hau7cpagt9uZRfuAGZBWhj4wrXePRhFa2eG8w",
  "key41": "tjHhwS74dF1atnxnDfdYwCkfyCXyUpN3md4RLcrRfQQcCARsHBNhxy5qJzPE5ayes882pZoG7DD8z1WXi73Deg7",
  "key42": "3gVeVfkJouPAVC1C8nAiKhPC23PT7hmDjq9JwKLm9oRZ3c5UrdV9cas5w7g1BjnHiK8rD4a4n997jGdniMEZLhBf",
  "key43": "Y3GaCsQJc7Y7aUpxXpkcg7UUx8JBRcv94JUVUxsvC2QAMynbKuniGC4w4sNXG2YKSqGb59zQXMyjYBFkE8rtdQr",
  "key44": "48QttF28Tn8VEivzn7dxj2A7CfpSYaiiibE2HqTGgcPw4pxawbJdxoXGTygJfEcTZTcjcTwgzGKZu7qKBEGa99Mk",
  "key45": "2TWScnaskfDNBYN2oHq3XSBjSwHLtjCzaehTYeGc6gTV6LSuWRguNK35YR61hzJYaaHfJpRUHJYxpxDSXnCy5FpP",
  "key46": "3GXXBL6E7V2pLyHw6ySk64Edq1VbTdgCvNyiYTe2Y3j88eswBnr7YcMRm6RgR6mXku9KyVWJNFRDi4wi4ZENcEcW",
  "key47": "3S8pt1A25PWN1JSJecxXma9py6JxLjWzta8Sj21ck4WDV7FhP219Q5bk8pGaz7oP9evWfA3EbyDE7n8x2ukRkHro",
  "key48": "41vYequmVit7Rhz2NoFT3B2iAdWXvETL2H44cDQXjQNv19Udb2CjcVE6RTDz1YknwSC3iP1tXk2r1TEPYNJgwFE8"
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
