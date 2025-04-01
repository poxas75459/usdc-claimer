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
    "435jBRqLfh5viaKUfW73gh7dKkLbbbZwTQnihksSLFXFwQuM4pXqRvakxRpWs1mvrhNttmiRwLLV7k6cuvdfmHEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MU4GXm4Kncxwy86SnsaPFtfgfDKwWgWbtFRQ44NkoxfbtAQ5s2m21Z3ZLPEypdFvQFRTk4jwP3axeypUfH49wGv",
  "key1": "2brYoCd6wzVzsAMxxrym528gThVxJLeZgCZMCkQwzp3R55LYYbTcJXitEkiS87xidGffXo6SmLeYbcb6bRMUHH2W",
  "key2": "57LRVVaP2yKD65tnUfGtQ3nfvXqnQUnuhg4hTvcicQmurBrFAAeTnr5wtK89L2v4V8d6y7RSJmnFPwiXGikSDF84",
  "key3": "5LcZ7rhsfJeS3VbmbYoyt3QPRW6jx8Y7K8TKNnqXqRuiyQNUkeMRuzopuRberE8AqncYBUBWudxyeEt4jcPcieL5",
  "key4": "31pHBJ1kVFNB6f9dphVFhybZHg93p2rc4kHk7WrecdPFoUYR1JdwxWSneHAwv9VnWNLLbbxaTpbwZbEoN7j8JomZ",
  "key5": "5qsFzFKqWqM59ottBmDvGBXqjDuJX9N5qjKHeywjpx5z2AjNJzosqMUqSpRsCRSMqTeLykV1Aox6YARWYHSJDJtp",
  "key6": "5kAH5DXiRmhhYfSFyASSCrVcwu5e3NiJboMGkh9SCzivpmzDz1EzTjmf4eKong9trQZRweognNjtjiHve8ugKYz2",
  "key7": "3EQ38ojsSSHQKkRUDZ6JS8iLU26fqbhuW1R4ghAs4iLj2u5238kcoQzEDJ2nXUyofMbxp7AXTPUoRfaX6VPqXx4g",
  "key8": "2wnhfqLGZduAoCQLxmYyZBWkFNzxqAhuNxvh3cys4jyUjubsXCa55eVoec4HNUtU4Txns1gWc6vPWpvtmf54ZMGX",
  "key9": "3eYiWBRcKVVNokb8yjDBuJNh4qeZFocPjzGJhUTeQW3DzY958MnB5VPVnXLjn1mFjkF895kd174usuDHdGUCjust",
  "key10": "49qqhBUMvWrx63jpNoKLtqm2vEwAuCX2Z3eYQuTb1HFKCoWL3cQNxkRp9FKxwjXwwZsPWzQ3LedjhSkyZKBoqfDM",
  "key11": "4ACaqtXhzu4Y8Mtcb9G7pjoXZuwUjAc45cTw7UiybnbFL74nweTEQXEBsQZprsWwoPSoVQJYyZeHA7AKNhXSnkmH",
  "key12": "2P6aVegdccspdFpkWUTETWe2cZX5qqko1T4TG6U5MEWSz1JWZhSNQzWwMbSqLHna9rh1Fjx6rodc6MrFviFdaDkL",
  "key13": "41ie3m3prxhAwufChpNTnQEE2TNXqRvqhmJo1TRY4eY4fir3XfUL7psCdvuqxea3kb8FNGeYKx6i4LH9t5yK5ApG",
  "key14": "57DxDrsTqh3CgEam6afiL7M38gisP2bnfxD5NcqoLBMNrWzbnhHxD2gG2U6NMPcLpWhj5rwEj53a64VagTtSUieD",
  "key15": "2ro5F1wFwnoZWEQvdjPuHaTAFpfvfTwqYjGiFvxSztXVg8j3jtkqCEa5REKJYk94pWdkEmP51KAaDsQx8KUdEmTM",
  "key16": "5TRyXJeLHA7DjxHpC5ohHQpaTGhW1YMmeBPWoAJKaYk3CkojqrBs9UvEtALdfwUvpRGzUiu3PuXyH3g4yfnBWC8W",
  "key17": "2Yi3FdMZKXZ98PkV7JE8r8q1ohYitU33juDP6hdpe1KD8xAp4He9jzLngWnJKfUwuh1WSkHZ3BpyDusoyt1Qfyvo",
  "key18": "5eE3vxfPFgfCgwYvy6yy4USeQBj8cAu1sZoMQcn5eGFPrCxkao9aHst95Eafb8LnF7ABZTvYKBhnWa2v4SoqCSUk",
  "key19": "64bJMwL3veocANSZ6p1gUH84x7LpZR8ukdVK2tPmi3VEWYx4U4oFsd7WTesVNAkZGG4oqsNBVZo7TWx53Pr8pmj6",
  "key20": "3gtVoJULYsVNu1ttaK3C1ML97H6CqhRWds52VUTutLhekGqJ21UwmtjGJQN4CCGsRexKmPhwmfM6G3ib474e1BeL",
  "key21": "7nHCTrAfR4LwYv6CjC6ogpvgXjmWuR9QyxqTZ1m7GmkM7zDFgssuvgrWFZSZ9Qkb3qsTVNEq4hNbDRsjNspSpHs",
  "key22": "26b5mhtTonaUMwsKqYP8wB4NfQjmzWx6F5bRUW8DNmb748hkdZLxYNU9V4e7sLD6b3PkFubQRmWMU7UKRbnSMhqa",
  "key23": "fifwrXfTHThWXBp7V8yj2LAxXJwabmK3pdb8u7XsDMZu4PYSfzxyEqPPFSUgJcKjoAC7ojAUnCLSwMTqwXot2Wa",
  "key24": "1c8uvnqUPS6AhwDaqCrpNBwHXtmoqJ7tB8E9DdAcwqsbDvgPriFyczKNEuF7KYNWUTnezfiVj3ndHi6x2Bi1u23",
  "key25": "5pVNkZJrUhood7k6hHa1YEqnBXx4CPvSvAJX9B2Pmdi6zD43v6GGyuk5zbJiPzo2VjaABgPVJf7CzH5Ezp2wy8bh",
  "key26": "tsedJMyQgv2xbhSjMP2MBMWcLSEccNn74UAfD8Y5UnZkP8tmPUBaPDZjCT813hcASPtr5YC3KniNzHWznakeD5Q",
  "key27": "AwkQ1Fu4k7BhTgfNMZPP8ZSiPNy72powP9E968oV95Uiz1YiFfPXs8AE7hmiSXG1n6Di9itRo8BtR8hHPDhrUKS",
  "key28": "4u522PVLPJy1tGLZ7cFtZrbqFvu3oYcuxB8w5kjfqvGvRSBmWTPzoTboCUh6jvgiwz7jupLZ3Rp2iYzaMUwLWZy8",
  "key29": "4mVh1PTES279tiYWNfcNCricfc6Hdc8ADSdvKNHvxPAUp7nREBpFCAriB8ru9AdiohLRECKDZoKxobjYhNjFRyCH",
  "key30": "2n9K8NZYvHSQx6UA98BL9UqCozn2PKhxe26VuQGCzwFHgWhPgRfDJgwGkGs2GnYyHhRTvFEAYJk3WNhgZ6QBGGZA",
  "key31": "3a2Y3KCxUXt83sqPpdTnJXiqLb2hftSWupVP9ibVn5K8SbcMniy92goHcgx9HkzEKn9X7quxLMPaUkhX6aHdEPQU",
  "key32": "2cLEkAme3BHYMkKPyGWFh1bRaakHW8ikyTLGcEYe8cyg4xiDyHzM3mALouksYoNCx1NDAqTFZwdrbmoRQdhoArEp",
  "key33": "3fnQxNfaXyeMoVAQ4VAy3m73Mco1CzJbUggHdK3uYo7xnBhZo7V5v5NcUbutj3h8t7EuYJY8y6hbwVeDb38tQU6T",
  "key34": "5M5kuUXWWoq7izc2VBPumpm6jj4BfjFuQVwtQs2rq4m7J1HvSoJYCceMqis6emKQoVZ4j5N1z1y61ocRRPWaVKJc",
  "key35": "27uR6qX3dxYpsTnhoYToJhwWDZJtj2M7fKe6oun9sZgoeYq3oZChmVm2JVrGkXCxoejACE19gBZQwNzAVXKxxxYG",
  "key36": "4SNPvGmFhQa8En1w99VvM7qfhbFLKqJ2W9AAYq5gwTHUJ5QvJiMAPpvUbKcZGkAuqvNn3dGNmBcTowQyvGgvNx8B",
  "key37": "MJ6e8HyDdRu8pEG42n9Mbksu6SvDExJiLhuLVcR9wxeXUsY3KgPVrHEaPEU4rC18nCQN6sDymgb3g4faFgx6a46",
  "key38": "3Gs1sFo8cVZK2Ucmvi8BrT4k6URGRs5FBY8eTqeoyknk8thcNG7Sp4SBwfmjAw7c6Ch3qqafSSj7uMQpH6aWBoPr"
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
