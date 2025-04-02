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
    "4LsXHvDwDTkguRmh3LZJUcTCVdnZ6NdVgPh17Lni6f93UiPTZ2YSeEnydCwaUbph3kPmMKNxAysZ9a9SsNJUMMts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFwWyY7w4YY5j5ipwwcbtaH5Q3Fzwq7bvCNsUCiiA7WrNJchcoPRFQQd4xs4MZGn31JpkF3KEd8vbgeUDcPQZ8q",
  "key1": "3w8Aj26ojfd4FT1qMVmvi4nYrcEfqZLn8EhEFbnpifBbA6iH6cUEbXAGHiAcs4f6xg4sfih4oPHLsBU3erDRM76V",
  "key2": "vKTsX69LYcEkpp2CowBqQwmhV1qobeN7ijsaLbx3ATEkBBBdzkfFZUs6hKm3TJ98B1HJubDMicRypHuB6eRP54J",
  "key3": "2oCUZyWjWPVN47nvmhZKJwQonpqZBDkygFeSPfgbnmjnAjrMjPoqMxZvtkfxWiomDEnPy91HKYpuW8C2TCtjKvJk",
  "key4": "mVw8C7kakngaBiJspYzRiapeiLGHLjZo8LTkgpbAEYFF9SKrL9iY2jrBb67FftJsyLVxJJNDwdV4zizfTrpDYAm",
  "key5": "2LEUEGTxevM2qfxPcUG26tSUqr9XSQBSKyrmF7WqLMAmmXdukCBR7QTK6NvJY3Afj7MPbWqYVXAQKJN5KkXLmtB3",
  "key6": "2b2fnaFqtR8wxLL5a6XJ6Em4MC2aAUmWXofY2ph5XHGzXJtZZJ1yhWEZRfHjkMeL9C43USoDtZEVb6KVHtrrwgWT",
  "key7": "41rKBtHNqHPGXVcQ4n1TnHXECKMpJubFsV49u8nPfSVynBKvHDMrFW5uDBkD8QnXmsEXK9seeob9d4xrp5DDefVk",
  "key8": "44jrwjxn2GyjgVMhJbm5nD9HfMo26px4kVgREJUdASXFdArg7uZzWXaN3Kc778dDbxJtz4BMr6xwRpYWA48durpJ",
  "key9": "4ESd3xjj3ZXBkZjaTRMa8TcVZV5LsnmMvqW51tdFPSpnphdzcZjhhaDoZWSJDgTop6dNDrnZiaRVdRKsSDrLankm",
  "key10": "2p4kFzAZkzhNwtB4HeEPJjYnYUoEQYYokhb15HYjmrkzk8r725TZPNUXrRzba5r3p1TSh7rKdZK4sTo6AYYYmcrs",
  "key11": "2hmiNc5SVNhqmLTnaqxAjDpvLBX2sUGVbcNMAnuUemyt1ZvBXiG4vTVA8MtGbzF3zhAE79NtJV6dvctxiBSWzq3v",
  "key12": "2skbKJYSH5Cty3pdBgRG4LNPDaUVFaJYbaWzHFxb8HfwHEqfndSTdp8TMx9hnrgU8qe8N3nhzfFQd6KzoYM6V9m3",
  "key13": "26XVTqQoXBNYc4JRiUUiwP3WqCgu9FoDrjwGq7ETZdby4dZ7BDvrgJu3PKsLw3ohKiepbxTzbc9gqddPiktME4Rv",
  "key14": "2hXW396728orXSsK8ZAHnc5zu3DaCvFZiwzt6g1qUsxR2hf1GixSgKkCsd6RsHnfF67tJDEzmYTKAFkTJpdySk4W",
  "key15": "F2PtyCwziGgGcxLGg8VWJn4gsS5u1Tvd4SpLHWRBPPL3anwjQceffJfNGchBZZztm4XSC6zqQxGwgHcmWHLBGQC",
  "key16": "3MQd25JsNPhZdW4vSzjNiyB3NxHAhrgDQ1ViTux4RQo1dmqTX2rS91MimugHWS9JVzF6CbCh9xU6r1d9W2WQQktU",
  "key17": "5rmKr3PAcYqcKTdSQSvLrUNZCknVff8sUxapDAPUh8L3CphEhiFA7KtqhrnZrsjQN85f72BoJrmbpMrHBuXfytmV",
  "key18": "3amLNcCG9VLSLHNF4s1TKVA36ggwCiNKD54DPaJ5x8Mu37SkSKvV5SkstJQqrNvTFwVFZ1EH7CbMtyuZAHoJCCvt",
  "key19": "4oZK84QDLVmrUTmqVXkVtMaQWZncYp4izGdf9s6cFvTgETcYByiSnihDh9dWD7c8ekwPfFMLZTWEUv5N5ys6HvQX",
  "key20": "67nLP1deKvXwqZMfEKYEwHipJdH9Dw1myqADL2ibhk9bJx8Ewnajw8z8eWLWNP7qPCQdHDNASLmKjvDZxjaEtdiB",
  "key21": "2D9ynubga5kmiEEByebMkFAGoD5CAfuQxYt7ZseMgLu6FeANZmdC6cEGmF9v385heu2ynoknLEdUkXCnRB5LfxTp",
  "key22": "bUBj1oGRW9KbKU9k3pPy8iXehgxvscXfz5977u5aLi8FHSjY1FfQmJvwLw69sozZ6MXcvtd8AjdeptryBZtE1L4",
  "key23": "5Xk4bkgtJLZn1eCSQza6MT9H3HTEX5UWBfk4LdFvfWiGxBfYKMjNap36XfqR8SfErX8PG4a4DL2qVNGDfr4a6CHC",
  "key24": "2d5Cfepbo5EgncVNeT91FpqUthfBySXpZEsG5UGc74wZ4GcqQ3SrdhbDwusa36rEEUfoVscNrVuk97kQvYsKE6yg",
  "key25": "5tKLujCroft1WMsJhQBKntGLqyyndzxfmgVuYMMaxRkrhZ7uQM2A9XPL18HBwWm7mrjuPAuR4hRkRaAmMZSp4ozf",
  "key26": "2dv5V2mRXhUFhrN8KjB9bAsSDmvE57iS6aEe6jYMQY5B8y5oAj6ApCCwaPjX2HtE3Z3MaLvYSzwdrzGnAobfbG5g",
  "key27": "2NxsSdE7yR3oZ3cc2vmVn6bdHd7CoxFtCMBZqKUihQWZuTSES4GPjhAJ2to5qVhAcJMqftWhEnVPL3nYW7R1mJi2",
  "key28": "3oezxoRhZv8q6cJba1ftdjaptLdcsRDg4BxCZjCvp1zwPBRCaph7xj6ejgLrWHipU2WwW8Y2fFfe7TpFeBBTyf7o",
  "key29": "5YQb4XLqKWqNfU1Z3nTj6HE54V4VRuR7Z9Z56J7KCiYs71TLqTQoFaxJM1YmDsEyjcP3VCo326dQz43wdr1Kzeqy",
  "key30": "4uWcr5KerBzKW7dPPJHzcBemJi8N4aYWyoLvVYcNJR6DxumDfsrTiNatNL2Yv1tjKznxcavyMsNCW8D7zLu75Pwj",
  "key31": "3C8Fmqwp1n98eUqAyqfzhdmgDDBbNmjKXaKUS6KECM5R2AxoHEyjQ8LBJPqXcUXAYchrHh27YPSmNwZ7nDuMAUuT",
  "key32": "4VzW6jHeUKGxrxaCV7LNZtKsowbDHQPk79LJ3fQLa7MeVUsV3p3KnLYsjAVqAB3AYkBwxVhuQiEcucFa8cqMBy24",
  "key33": "3fouDh3TSzUvhCDjJjU2jBcoqXmxPJoosxz2Cs9MMg7LDFv7nuYdsgEJufDPoEpSERBxmZKsvmMTEF4bRxr67aof",
  "key34": "5ziaTYGPtYzQ6dtHA7UvfwuqFrmWmmX61N9CQakaMLV8zD1tNyhKRmDoQoyBpUeeg7FyoznF24NhZGAquie1bMNG",
  "key35": "2Lx78CdKXPpBqyCUG2tiuZVWnnZ1Ws1gp79AjtxejmGgjey9vckPUxDtrz5jtEdiEZzNeEmuKefRcVJnu184x1QW",
  "key36": "7Dhj54EP3trkSqem1Bb2FmVUVKarcQH6o23amPRhnRRU8JjBtEhUMFgGTo6UFMLHwdLef3g3426FoYvde5B4Tgz",
  "key37": "4dRvaeghzMXhF3TbhBqn3qVgypcSPtLom2XgPkAL5PqJACoTyqtAS743w4pRHe5mKLMxW4jKEcZeKd3hD3qycUAf",
  "key38": "5MctDRGQ3oGef66bwocndpkKy3Vd2j8gs46UV1CRhpAN2TiZs4RSVJqV7J2y8NiGZCjWSRo9m47JYcFJt5YywiG7",
  "key39": "S1EVfuHySdcKUZBuf5cQ8anZrdZki1BZxxQnRSN47Zo4HNYzfDvZNdenRLWQGmC2Cwe8X4PqAapgShEUfH67t2g",
  "key40": "2Jtt982KzuTMR1NrvCv2Pq4ejWmzbirVtrHMeuzBmf6hAHpA21NfqxQUDuXCkuNFghrfd7VYgdnj9H7nWhT7GXNK",
  "key41": "52ecBY4b1V22MoQUR3Le8QkuuzsW6d7pCFQreJcwZQZjDVJAVUguo5RrZNixUS1LFn2A88mBo5LLm5zbHMjn8hLF",
  "key42": "3hsxQN4R2p5W2Xr62hBMfenAw5opJDbpAMPGbmcoj4DWx8nhQi6N2iAXCMnz138HuQDVbTWyeddVuGhcFfxWPWkZ",
  "key43": "5mwSe9xRkhi52NN7m3b9J2Cj7nC43bknECThwHD3JBQ3SGYEZLZxmY9PUvwAYKRdXAsJQeVvEVnToEYq11JUgi6S",
  "key44": "BMCsFAMSppfVZGf1WfJ4NAU8iDV6KcdimpuHqb3BqnpgpHo2wwqHuU55MBJCwNeqobFZfSm7HCFQ8rtaSTEhoAZ",
  "key45": "4m7SYsmUdnmHfa2NwjBRqRTh7BrgASbxVx7KBfvANMU9uCNDKeS6di8fjbAaJHyKBsmPWACyJtdJZtKgUvVbzyFD",
  "key46": "3x3tQh99e4DsEuL2ZkwAfgrx9DH87WHNyEJNY8iCM1fvXPC5NcgiMfmUVSmxMnweNr2S2v2Ja8JUALA7HRgdqoEa",
  "key47": "5cQsBkpzzDB5XMkK9HzMgBgTUefkxExiFehYtXt2LHJAyFKgDteKbADAxo8z2jMLDmESFVBtnZmq9wcuiqxhBwNd",
  "key48": "pU6CgqbJfroqvHrwrPT4Hf1tqEAneu5fj2ADkyd4WiHshfphr9kGqpq1Xjs3tTHVeGG87gqggeNrCdvDP9iYWg8"
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
