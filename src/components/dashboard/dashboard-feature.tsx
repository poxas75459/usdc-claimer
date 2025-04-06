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
    "4KVnSKg5n1a5yzT6LzJqAPahb1t75wqTM2psswZ4542d4dp1iUZ3E9wEDRT7CXWpziqm5ZHnFqJqG1bmAxcSWXTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V41zicyeWJ2qtXHumyf1XFHajRLvQXHvZufseU8HmyT5bm9QnA95FHDWZCJb5JXED129MVMj6oLbV2WmhZBrg2D",
  "key1": "617iHLP1yumMUbqxLnDsmDN556ZnhY96upVewdUigjQkkkZzjHGSP9cchCCaZWtgVsz5g33nSKEm3FoSvZxLNrzZ",
  "key2": "5o6faVSdDFhxD1qSJHx8jcVhXkiyRm8j7TqXjSWaXywYuPtsyregb5F3Stdbj4CjUUF6v1JJNn2wQZSmeKRVLG9x",
  "key3": "5qrADRDV3kfu2atTe8RbykDCmzURu9i3nzDRLNi7fknGddZyDji6BEJdMQzFcHGJq4Kc2EPdcoRbYyrD4MTZkt7j",
  "key4": "5fZNBzTRMLsK8S98YNMoC59NdtktKKxU5gRQtMyjYogbYDidQkUG728Uocy6zi1U5qrZt4KN112sGsqdyFvyoE2v",
  "key5": "3h3BdgzBrjtTpbRvd5v5ReXo4UptUuSprpW4iLdr4zx5C4iLDqPPzuUqwjCkLpCDmvjNR4W6KjnhGV4pzJTetAw1",
  "key6": "4JCk8yb3D17dtoPK7HLnKLSqbY4pR5DS8fuerMNh6cMEgTmGGcELFk8zgYo6UVom5JGJRJPwTkgdxRsT8hiSJFTw",
  "key7": "5Zd2FYWMpAMoWpXdD7Fsh39vmJcFNJrbgDkEEwK8vqf29UqMtvnd9waR5ZLdpjtxxu2vNt6AE2JdQzqLPqDbEYvr",
  "key8": "35UGJ9g9Y4r4A7rnuH2gUFWqmfSgBXUHNmNiSWk9LV48pXaQkSrF2TuAPhHb4ZF8CN1wp2eGfwAXSy1eQu2LMEFN",
  "key9": "2qZpKk3deo2uvR99fKbK5bLjx2w3vihsam5SonB2AZc8gTx3q2tHQ4Pu8sQGPTC6upK5cWiUo2wBstTF5MePu7Lc",
  "key10": "2kFSkMNwa6Eu5pcmW24GU8mvRtj2GYMociXumQytUGKTZGaKDiZMyxY9LSeaiKQMgkDCzWjCWsrtAAtJPnLhFdiq",
  "key11": "635eL48cdfcnpGARHQcbfqLCUiHw58kWoBikb9YeZVqj7sC26gMdBRjnMSxjNGudtkPeUMnUj4hQA4MBAMEV7oQ3",
  "key12": "u3GchNqKQ3jM9Dhg1WUfMQsp57u3J6v4YW3ykCoxfUz9rBibcBsS51d8E9VFsXmVANvBi8hFmgEat5KCUfZwUX3",
  "key13": "55D2Huxo4jsMRpZRMGs8khAwxFhTtocMDzKJ4qvezhXGiFPSuY64S8o6NHz75aSBeGSz32AjaQA3SWy5L7ZFTWwX",
  "key14": "E3NT2F9kua7QwPSrA9XccbtHYoY9ZazFt1eVLEHaUCKwD2WAo7hstYFR6jCGkx2KqFfDPTXZA3agQWAGNSkAYtE",
  "key15": "3oTyYcG1A2JUKMGQB3ixD1Z2YNMvgMEqUyPcwR3Bv1sxhDPjPL4bT4MAi9d5B9EnbQiftBc2pH6oNwHrq9TxLFKt",
  "key16": "2jXDVXxKVZt3LWHYmZj2azgQ5ujKz55gmStKHX3qTzadrBouaMtSzbHdhT7Nf3nvCgBqreFaG1ojcbsGUiSfJ54X",
  "key17": "2pomdVGx6nn8wjux2JMwrswrJd6cWMXz7D8TLkRnNanDJNFHYh8fyWEWHyDwiFmCkbX4h1zxgDr83ZVjLsZpYoDH",
  "key18": "3A4k2kqrFoSVDVtMNpNnApVGJSr8bxYQ7zK7WzWqqhnN3nL6V7ZFs4GJLJs5tHShdjmWybv5dgNrXZAMu4Lyfayb",
  "key19": "2Pb4qatvTami6M53dfNKT5R2m7fqPbJc3iFtNvjHcq2mSVGiwK2SsV9ywvqSpUyK1PHJFMCB3BpSnKBAXPrX9LDZ",
  "key20": "3oNpWTHUQ8uBsnV4pfQqubhvgsSoDwtVyHE46jPEfURKBU6tbbeCjX6qFDYsgPgvXkWewwiKGHYRr4ahoS6j9J24",
  "key21": "24BCTiSxUaHrv4c69x6z6p6E9cYNw4ANWJE812H4bxeMi4pP78WnNoPWj6SRJPa6i37u9y688yfoMpGUrQBW973f",
  "key22": "2J96rQSxhM6vxTnGjupxkMVeZQBFgYTzvjYPwCH3P6tBkGnhFR9SLi9GqCM8fNaNTjWsVv9onAy23KXkVwJ3xQ51",
  "key23": "4nnSbNQx8hUm2SPtFAF9cFCqrquqeX7X2Zv1DbghKaSfUV8P166Zpx43wkcyhATvemZDfpvBRcZQoQo8HVjqEFR1",
  "key24": "2DWsmD4yXUfhrjs5A7W1uxPkBLTRyaHLKDPWw9q2mTQ8F7ukMHhhFaPUoyivqFKhkvEQpZVyY49wXxAwkXV1PVKS",
  "key25": "61CjG1HuiDTtd741gm6DTT3TAb7vTnu1zsE3Z8ppdtwzds6QGHBKMhyMQYctEuJYpVmck7CxPAgtDsZuy47P8iQ1",
  "key26": "5Th17YTWLEScTT28g4Tex4f4AKkzLY21ZFLYZrLjCeWtod3PBou3e45kfbwxG41L2Ff4oEwdkcZtEB8fNkfhfL7z",
  "key27": "2zZJHdvkkcF94GAZ4DjE6R9BDQrb7cQwc2J2qMFQmv3v3hVu5NZ3wJvPMypdLaM4qoQaeUP6KZVAg48o3U48WxLL",
  "key28": "3UR4Fv7UcisZf97jJGJXmHr5PmrU6N7vCzrGtqaXHUYugcVuzaL7rDUtBEzEvqTuNnbsafSTBauYNtfovEtVYx3M",
  "key29": "2uwF6kQe6121MAsNSJ2YXApAbjtLQ9A75E3RSJygrh7EkToqLoCa7vgfEBsi8hRpg3WsJBZp5jHNX4ekzHMV67TW",
  "key30": "51fXPJZ8J1xKXqzZpumh8f3tQJsGkD63XPKJNTxEzSDZGjg2JSzTi6jhz5M5kx8r5J21pwMD5qzYBDdG8TQDVm8i",
  "key31": "5thyEMRgTjJHXMQKwnoGXc8TfiK9T5pqHFJJUUeaP52bBswnfAYP3iusLXjcAMuQK9wfKxbTu2w49CorSkdY1ntR",
  "key32": "2qn1hvHnC8reieEWZer2iAM38oD3ywu7HYowNnNXKMo19ybQib2tP43RcLnDbqMW4WoSvzC1P2hKhaTmuVFCrYQz",
  "key33": "2Lz72hJgXHVHTtn814A3CGGsfo22f6tebQD1hm5qtvZRVrhHmXG6P8yLx7t82bMJKYntBjQf7aSaZuChhBpP5aYY",
  "key34": "W7XyyFWx9NqS3pJ5TRepizSH1AUjK7ZLf7fJ8hmZgJTUWuQNShdYrGvaEZ5niAX3Ex99pBfMDAufC5uRxWNuC61",
  "key35": "42jgPD8VmebdpPVJeabGZmhcrNYbELZMP5jyJ6rR1DuZCzEhbq3dm7mbkqxkn65R9HUmSo8bqTgpjtXphd84zwMd",
  "key36": "5jQHvCHJAdXvRLfFVSuavaN8YHvqWVVZfEm6h74Ra9RUY4Ye6xy3gThuf4J16AjkBe5UdpKPA9t3xvk1dkiFnNBt",
  "key37": "3ZhtAciBeN48df2zJeJ4Stfh9raHEtytszyqed65XHL9jmQKxe72iRnyf8Si6bRkXwCP9xs8YnUiSxuyiJqd5nyn",
  "key38": "2Yn7s8pyCWCo7zgdgzTj1K2GAzT3ji1HgLS5UBHUVfhLdxStetQZUDJNLdwZ5smXRwh5m1gBfEaUDxnubpahmNsd",
  "key39": "5EM2euXuLeSHChkt5NB8tsk5u5NhngsfxEvr8TCh1ZNtJ8pHqFZHkwxEmsDnKn7hE111iBcrMufZmZ4NK3RT7c99",
  "key40": "2Nn5nxUdbiEe7NNLCst7o9jn4jSrep2JufDsaSqTQmJAHnws2QfegR9SW6C7d15R49ZL6X5Gop4mTFX37JaTyE1z",
  "key41": "5jnrhp2uYPJ3aGEXqc6JYwWnU5oDWtM6pYKhdeNLoj2BTKDeBXh83MZ1c3vsGGSsXkSUAZpFyaH6rFietDkFcNGw",
  "key42": "5C8YJtiQkafY3wDaNUPJyB8Hg3jMUjh7QyhKGEJ8zz3ACsWmRDGkqwExW99UaxerKaL4Rz1mQPY8ZMpowToFQaHr",
  "key43": "5sKDXWPjSM7EtfteDxmdys9Ucf4etH3FT2qx8x4ZcFbr2BthwwKr37dctZEQfnYmPzVWqvuuMVv1hsyDWkDuuM4b",
  "key44": "3ZV2BgNWAghNQ9ewWNdFSo5mGa6TkEtEntQcUq618z7EvbTWEyHz8PxpygkUv1LfdhgkWvi2PnRnn2A47XWgagPQ",
  "key45": "3cSJZHVDSqdzaZT1rMV9qaspobh5mpDztwD2i4eX95YZJvurAJr3c5TjKWDQnWdLCpK2b7A18eMbCk7Q64zZjD2s"
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
