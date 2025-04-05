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
    "4dE24o85oZzcodxPsCdCcnL7ERnM5zMj4fKMTrGi29AdHgmEuDUyYe4Po2GcQd29wcKzCosUAmXcMxvs5RoWpFib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uuntjZestKBUu46cwioX4J2RunVT56eHamk3ezXZw4YpnC9kgyRxjm1HxXtKnai8sQu6fxrGUUp6e11o6yiqQqL",
  "key1": "5cvAsSniuNWAJ8JaW7QxqBXLQ1GNTE972k3LdshDSPGn3pBcwZ71y6MLfxt6BJDZRHLuYf6x6VAGj1e4jajHxurb",
  "key2": "2WnDCe8JwF2jXduJTYLJJKF8SVpdsS6jSifKpdCqLE6VDCQk9C9MZ39qLUtv9sz4z9y4VQ2xCnmixn7CUr2hVYK2",
  "key3": "2QuYAqjVGNCRSdASV9CzBMM3FxG6cneLVPRRWfm5Mw1r8hpU3uNMVBAiyEQwqCf5wMcnHDjRuCQ5rp4qZFdrzMSv",
  "key4": "3tYrNsYXPgG4pf5ze1DnQMPdC9XZfit3CWY4ZspDVJpNqpDhcB3Lw5gktSQi9XDM8JyPdhMjutNm6jKMunTLYxNR",
  "key5": "ZLU9kiwwCg7nHxR28wAxiSQcFqvotZuz23rik7kvWUuEALiobCf9S1j5XU3xCHEPGvLeEVe5zWgZd7WwDsqTBDT",
  "key6": "4VbsL8SHc98wQNmGF6YmztRkzvMrKFHG3pcf41NMQfaoYEqSYPok2C8FJWQ9vMCD6NTsddPiG9QKWJa6GZmhaK5N",
  "key7": "4eGfrmkagX29hZqzY4mtN1Jn8EGtf7nnfbUxy3xvsQoH4Dnn6Gxck4BUk48MrFqHPnGR4KzSMoNhF11W1HasUn1d",
  "key8": "9tzmMN4neBYszgXKLpPWWjuJpsDz5VC6QzRRrcnPiNTyJuCbygmFx2bitF1HwwXsbDYRUZ7j91U2AhwG3qqFqfT",
  "key9": "6Uhku5heaNXTP1XjsXwydGscJ1aMxrR6daR5SVpNDtmaCMC4W4qRwXLRRU7VVZSpjVjzE8L9vXYXAHKRUkNx8JH",
  "key10": "5PxfxgY9ee4KgLpHJ4id2knj9GTfEJwm2FHmW75p7eQvVyHwNVG5izNa5FYkSguPfQ1d2nfaGcgKck93HuAtzVjA",
  "key11": "3ewhmbDzqnfUfxM5Avpfh23kbsNAJ5btEwzxygSC5waB7iwveLsMge8WzwbB48Y2Q9vnxvgceetCEByRsKEYeUwj",
  "key12": "Ev3x4wa71Ki8ZSprpx1Dy2VGYiPf52AZdZZ4AwGVtna46TgEJB3dtW78akGc463zgEkDDDvvEFfKTDCya8WiNJd",
  "key13": "4z3YyvEB8fLs9BsnVuHKKYZ88QZu7S8dn7JKet3JS18WW7v9fhnU9Kf9zFU5RXECCkdY2gt77p7BYytw3pRExVoD",
  "key14": "5t7xm2m6k8h6ipV2pXNHNgSd7yReCBUAQ3SGkvAesVmZWLR1LrgTg6LWCMJqko97tEDpBVu1KDdExfiHwNuKicsD",
  "key15": "44Xn69f51dG5NXASN6q5yCUh4TVZmZabLytqjBVZExmGHvbJi9362JV7x7tWuU6vgqcxAeNDbF6SUijUAF8yhsJr",
  "key16": "sgP8nVNZztEhHQ1xtitm6EUnJxY6FW2oxgEetn1cK3ftfVXhJGopZ6PvTcNiwwq4ZA9nZQPPAorrwrKb6on759U",
  "key17": "3pgTL7FCNWPRac7bvmT3nr3iw5v9hSXid1FW8WGsU9thzb4LCxP7U7jWbNpeyFMRd3VXiJ9SoVpBSGXHeQMHZ1Pj",
  "key18": "3er6WGx2gSECFTnTioVUsDCi73Kudf9zAirqBqFpMrSvkxURuard89ZMegpwokkCyYzgFh62wcPZuwpyRGABFBX5",
  "key19": "Z1RuuEWymwZsiEWfdB6ZNWQ2Svt7fdVYUBxAomXbgKgBhnQFDKxunwwAZxf8Q5hWsYVFTxmgBg822vuL7Mv6c5w",
  "key20": "2STkgcut4piu1dP3K4RQGKDpoZd3kmxxor9giYMYFHnbCV3nMfX51QwN8avD31sx1DybqjW3BgLS12zfpHSzcAEK",
  "key21": "5s6hdUkqkiSCkpHd78YfCQNoFHu5q5tgPzengxxcwAF65fAJNb3XPCiDaGK84xNrAcBZrm5CtNAZGLG5UjWs2YnP",
  "key22": "49oMUS38a33BzzKDuEFC1s12cnyzRWRc538wm4cd7cQbxZYN5MVFi68rarf8qk5caHgQ9K1KxomXda26wSnSPiEK",
  "key23": "644MD2B8EJKKJwDimNsBVYs8BT5rnrL8pze8G8uewDDbWyPREfYptGiWYC483wKzHy46wPUpELkUre9QDQwSzzM1",
  "key24": "K3jtTnibTjy56BsqAy6djhTRcDeWecVJY8qDc46nsfSsjNVfQVmJHun6mMqS6szqbPXJipv6oSH6xpMvA1A5idZ",
  "key25": "3E4YEN7dZvS3oTPj4mxSsGnmeWjREt2HRxRZ3Dxxi2tZTJUtDnudSkcQjwCxeAGQdGdLvw8wj5X5c18yPiQoZ9qr",
  "key26": "4wHHg4v7wwSZVSjjBDNBB3m6DMUambkMGpkjNXSmtNXXVx9b6atmgTTAtDen9RxepZqsowLK9YJsFZ3Uv6oGYNN7",
  "key27": "2bM55EyQ3P4wgQYbbJkNj5XsVuPX56TpE2ft9cnG4VojgVbbdg5pLg3h1xmufLZ48D78pQSNDeUvzQnuYgCyZ9Bg",
  "key28": "4fouPQgBHrrkidmdvH3Hc54w4ekg4CtvLB2rjZ7na4C4efagHUUgehTz6SbES8w2UCzxdygWZcVEWKneKvtNxd3S",
  "key29": "5ftrbQV4933b4FFbQ9gFDEaPqJEbacQcetPUskpEtX3Wfh99mpL4jXsyujE7amoTEy38pTnYWnZkaHbwxhtC8tsx",
  "key30": "67NskGVjBJpBhdcy4iF1zdBw77vJrZx6aNNR77LGcBwPPvWyK8LTCU3ZHj8ZPyWb1D573QGR6qoTGLDsr94gc6Bz",
  "key31": "zAdpH5BnmkGhBSfs62cB2YFXRxVSu8YmKoBayjMwWMAPzsGGyzrj8mXk1mZKk4exRnv38bXrfwJriN6wDnVpAeQ",
  "key32": "F6k9FSX9RMCrpZiEr9cCryyeL5gmwc1BBnh5JvLHS34UQZGwKnYmZaVfKG1R3ZtjpERU8agySeasTmi7UpYguoh",
  "key33": "2dcUiRWviQKeYbNPQXMuLZcA8Jk5AitvMZLFyAajdewRwjoYbMdD8LDH5i9VGsYhKDdZPuSux6RwC3tq1gZa9ZBu",
  "key34": "3XPRAXrXYC6QPGtQrJCegy2LjRbe89SENXwmcRQgPcpjAMsmuXvC4SP7DDXc4AUH5WZg9pGyo11i54EYNUXvz3Pv",
  "key35": "3YuUwfJMxbW7YefjGzXqsFDHkjtF9x7h3F9vnsC43Bm9jL5gpJCFsSeYNsMMg7Nz2ZhgXtUMUykZmuiN1ZfHjVR5",
  "key36": "5NfJ9GZt2LRSRPNmrdwaygMCYxjB5mX2n8Xm9t3EMajucvUrorJt4TKg66QMchWVgZVspKSbVzxcUMaqLZGNyNAb",
  "key37": "4qUTj8tHxtcqu7RLi7sMNMnrGAcPRmQeZ9xJXGwtjN3CqqZjoHiotsNEBjFmjVfLBSwuMS63szfusA6XvfQef9gd",
  "key38": "3xvh3Dav3ZM8ir37CCvYn6v1h89JXZXW46GMXD3mkESLhfZSSbt9ZzzUEWnu9YRGNaes2PeFiGLHAXmw7ipQJFRx",
  "key39": "RyChrL7pPB1R7xAyHk8HpYfh8MZbmeAnMDGV6sE9GxMRz76NkPWab4HmrHh1o455KfcbHmkonudYgT772vBs2G2",
  "key40": "4UBxa155fCtyvuMGWYBmd8RjPw12GTf7zkQmSzVv23sqV2nVigDQ3SEuNnNEi7DkV5bviUo33oDxdfNQDBZM3tMh",
  "key41": "4mZ36rVvbMp3EX8GbKohRMt7JPwUZynUXT3apFH1kpnaM94aLPrCaQvpCw1WJagSXMaWG46739kSTgjdnqqEHjfa",
  "key42": "21puxZM6epWCEXc9RhNum3pFDkAHeaFb1eThFxCUH5mBQPkGGyZGpDAFxwPkYAE48q4zvNC5yW9mJEaz9d4b8d62",
  "key43": "3t3oRXN9crFkYTyQHjpG8hUAjYijCraG6fyRuHgTKP6srCQb5EhSjhVt3SZe8nomGXLyF9SuNU5Tcj9wBaEjGm8N",
  "key44": "36ZQfLSUPq7h1FnVXbDtYMvHGnDGKkXKc3r6yAz3QA3NdYZ94tPd43HSG8TA64oMvNsVVGcnpDA3djKA7jmJqdgL",
  "key45": "2YNt2vgVHN2ruQ5jmKqyMyqPVvJ68eRHTEXrixCAez3dVt2pTj5nGTrgc3utD56corYf7kAFwthZdNTDcQzLuasU",
  "key46": "2iDcXHRXKpuntKLUhsiW2qNCcy3yiRmKNoCf7FGxhUszKSiy9GAWpXmUBNFbsGpqSEf2CS9xWXML9YE3Huqy8BHT",
  "key47": "3gHbzjx78q4AWBahAExqsEUAZSVMkeebc9ZJJNZZSftwncVrNBrAVWxsc12VzpFwC97zSccQjr4GE1s5P55akddm"
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
