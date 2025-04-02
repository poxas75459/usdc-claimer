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
    "vwmMVYLAQKKaUDvfprjH6t2m1ai5XXjoi2LzZ6RATpP99k44XTYDoFajBshJ5RXsJCS9hhxRGdYiSLTw7Cf7QTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VuHjFQoTE8vLZw8z5EFmBwvBmPLTGPBJc4KGBW5523dzHySRWe93NFme3SDzkDXLCsEVhGkiCcyzsFsXPc6jzBX",
  "key1": "1oGjEbKQQea6uqg2DMueoqbtjGPX16wTCp2hSQkug326Lm3hsTjuRj6RvuTWLLTjDYphrcMs2CPGGMPcQfbQJ92",
  "key2": "2CLrQXBkc5T76r8oeY1WS6KU8jabbRHwatvSd5PfdPUrPXuPmkBZoTYjZH6YrMmbhnqsMD8nwQvkGHueJum3fjU2",
  "key3": "3Zz3w9VRgr3F4gjKa1TLbAzxauUb9mRY2ok3U1nuADwn4TBjg8VvNqPbHqeDRG3AcMdJE74eMxd471XfoqThvHhr",
  "key4": "3BJusy8UBLhoaUBpRysBzCi9SEQY2w2wTtZkXoAj5p3wGYzN8FbV42yEfpHLjPDj1AZhqJBcdHTVvbHFeWxqX6qv",
  "key5": "3gBeYs8n2yryE6REyzz6czNh5zFTdAtgmSGSaLnnuiPjXwy4sQozXJZnaHMPNfJMXcXHNMxXQYWeZ5GXrHXihBsb",
  "key6": "DvQ2yHDDgYX72jgFer8f9v4GZRKDxdn28FJE9ggeS5epKc4Byki696YQ2gE8yBNN4YvneBFRfbDu3rfBEUEWx3J",
  "key7": "3ELYnq3eoHDTD8GxKLACb416mEVEmDtQZF8hw8YLggXVbL1ASBZBoB7yVY2AA4mg34u2D5jArfoD2ci6MLUn7tzU",
  "key8": "4qdTck1xC3Gthif8KfWucipu6UvjT1MxUA5H3YGDr5k75bLYAJq28LYjG6H3o42cFkGcXCVs7sWoCzVSRVH4MtgE",
  "key9": "4kNsx1JrYPNMGc3gMa4YS8hAT7JpjcbP9GTd4rwKbFriySqo7y2P8kXWiQoGkAF2cAJm4pSSRJenRdfbUVYfGihj",
  "key10": "62MpEG3MUAMjNtDcq2zDazrB1QHc1RoaezpmL4N8m6yuR8FoZAWkwxxdnKKUaSa9nezaXyUC4LSDCfoTMcUmGz6R",
  "key11": "2tSiQgMpAU832chm9FvLmTpVKxFmZEYgxD5x6oLm9e4TrSiLQPdDNX5H5VmXUJhAhMFtLPHQJx63kHfW3Dd3cVab",
  "key12": "jQqdkLBiNxZaNw4NguTikt57jkSntrkAz5faQik5TumGgfGd6tr8UXV4QAbMcrXJeDmurjZfuvu3MSASi8so42D",
  "key13": "xojALrCYFSHq9EeqBL1XabvkxWgce8GbmBUy7LyRHhyyh7VHjxM9DZvpGMC4JWj4ANrXZSi4FXWCUNFUEgkcX6k",
  "key14": "4ZHZDyb3sZtVHy4zAusHbaJKPS7aPT52pgmLmHHq2BaZEN4S42MzvcYDhSTTpFQQchQfrQUL69vwxoQ9J8gQ6WAQ",
  "key15": "41uM53DxGdsLMNMhPuKULF1vcqGiPDb6Ay5eKLXqwTiTkFtN98V2FeyemY4T1U9JMEu3covfmotigxiX9fLcfqXp",
  "key16": "4MMgepmSfSWy9KYVSzRjaP58nCHAWkvJL5tYYJLYRtyv5FNwuNcHz1wzXF9m2jEozS1AfzzDeYM6Vd4n7UwbJDF9",
  "key17": "cURwuXuK6DUB6k1fWay5Z7526YmDy2Gj2RF6JuVqx7WtXPDeeGUfGg6DrpnvujyDbfdYCdvVBsEBCCo1GdtoDSt",
  "key18": "2CucqncHTTPsMRNwXRTx1N7rTY4Qn3YKyJn1T3hkXo22wpHZ9Y314LqoKPrpxAxsp7vtznSB2CEGjdyVJczKFn1A",
  "key19": "3mXQHEBvgdapQDBJs5RB8tzBeEhziamY4zubrAtXaoJXxSnGiizA6eq3UPvK84E8JMSp5A4AwtbC2qLnAEnajZn9",
  "key20": "37UADX87BpU3aknXXvpJNheYLXJw7a4N4ZpeDikYzgWe94Bq8oJZLdFjHm7HLhm3k6PwCmubCmcC5t53CV5fx6UT",
  "key21": "c8Yd1yY18Jq6nTTbZ8vgakusxwjgvZe77xeYd3249un9giok7BfcheiKUkT2FARiqbakTEgeahcHAgMUKeEyptX",
  "key22": "294WPDqWdouv9NVEGHQ4tnGPSzwpT589sPbKbTJt3zK2VsyzgTjsqUexzaw7DBwf8exLLMkeZhUz3Sjb3BqPWrrG",
  "key23": "2p4dsHJoP3E59veijakBZUoiEA5sBUcou1CgbHHEwWWXgGEFTR2f9ozah3oCuapSurVLsDG3x5Ksqmx4CtpSYAeW",
  "key24": "5R2oqFa1djJSuhMa8nzubDASXuWNEd4qawymbzgQkVHtPc4gmxa4xpAp8oQKHHkBnYGhNYPYcHnzmQNoT7zRLPg9",
  "key25": "5L4PhRYNWUL4EzUoXvJ37KUeTsFStmx9tT2XxUW8sxz9At8Fckk2ENjD5YP9WBabFLxfbA7qto1KdAyxmSu3GVNg",
  "key26": "5kQKAsjQ71VDboMFsbwKRqcL1jf1xL3WZT3Cjq3zHaNMifeX7NuBuUMgpA4idk8cfijjiWf2SiPKwLrDb74dFEG5",
  "key27": "5dAm2boFtwjMm7AbgmYccVTpSJW1XQU179FRFuSkzQAfcZrjcADxSUfUWqPNXD8uM4waJ1nkkRU4czTpgiPdBWJ7"
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
