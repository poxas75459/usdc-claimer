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
    "51pMZL56Qc4rAN9of5ebEweQEVy7o4Rj6zF582qUwWv5wvtr1uVigDjZQ8nD2ok38qoTQ1DwYuhx2p1tpdgh8vJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61omWfdDBtFzZKAyMC7n1SAPnXZEKXZbg7BtRX9Gcu9Szuzwb1DmEBqvdhd93hZaZWEMjkhCKNMEWnLw1Z1UPgka",
  "key1": "63TyxCaG3wNTvtJKyYmN4LJzkDy1BpZtheTZ7rtEpsqX8XMAUriX7HF3AvcvFTbYbX9q5VT3zyAKTPB1pEYzma1g",
  "key2": "4qLGt6HcDL4pHkQN28rPpiahkA5zGPKVqNbg23v5NsW9Y4rbCe1HMcrfzEDgv8t8J8oC72cHbRyFvqrXayZH3VNR",
  "key3": "4NRFGn5dzYA7s6ZdsNKktWYUE7jg8JmeuzfBw358GtuU2yoKGCGh3gSB2p5HnR7SY33LvgEmGM8ji3MaNJsS8t41",
  "key4": "5SBhdGxeWdMyzpYyYof6E36JzieRX6cXCyG3vdumTH9wvGY1AACNYTTZaHXWmrTPywZmtVp7xCQ6CAJytUvaD5Ku",
  "key5": "8uNpDJbAhU6t9oXHEV1zMPbPpaH3JLLAAEj4Ns9EU26sqbQPv1ffzfGE4qn3UN7hNSMQbsyiMSwPQ7v2WRTS3hW",
  "key6": "2puJmZ7eyLtANndNHnhK5MoA6agp5ts1aGmJweocWLbwsY6GAEm7WxjQ4KhkLcN5qeTMy2JvTiDSJnMbcBM2Vvfy",
  "key7": "4gU64CkvfJmu87CLGBHeeup91QiRM1EjMHQuMxF7xieb3XgVMFH2EwNw2MxvMXt9sTrYacNcihxvDfYrhLXi6Exo",
  "key8": "4wVGQm6caJe6JswVhHhABXiR6uX3yN9KLd1z6F29QrkrHGWAZYEBanAmvSH4MuJMvcxkiu4dNTf3GyxsBZoLUVi2",
  "key9": "3a86ihwRH1yDzV3MPQgCgMYTMfuV5XzYH4pMLFJJcmcYtTU88nY1EitCWvyvfPAJwfkHQXt2882vm9UvQWFw1tbm",
  "key10": "58DyBRxSAR696zRCDRYc56fhcxuwa1HvnuYuSX15LaP78wFQfqkXKb8B3KqJszNrtfd6SK8SbaEBYn1TjTJYHaWa",
  "key11": "4HPeNdVd6TEyXncv9u52oDHC9UsxW7R5yXqxUyys68wQCRhkFyNFLBxJa8DrNCxGUucyNED9ConYK7akkSqGJGP7",
  "key12": "5PQ71kfyM7Di6MknLbgvxzQjDAf4Wokb6sJPmEZVQShMSUy53kYiUkKxSq6tmdGsQgM4mk2hs9qQHbenaQMQ8H9R",
  "key13": "59nv9CzZwpczRFRwdTVr25bKeeevtbzgV2ovoax5vniAKLMXWar61zfuyWLxw63oC8sd3EVdgVWjB1Wee7zfFr3r",
  "key14": "5QU5tZspHcURPkSABtRMDXVB8GzCBKL23m1adDJ1TwX4CZhCBAYJBB3ZAZur18NFqowNW1wqnb3oLtRhmZDySsTc",
  "key15": "5PzUrGLFgNWj2TMPfL3k2cypdJguXDYiSkmob52nF6TELGG8NyqyfXeEPvagUdjirUoBErQNtRmqStnxsQcsY9Ge",
  "key16": "1aNF6LM2CsUiFfjKbssRDMCmuDkdjrHCD9PnnRkFXuPtTPxorbCXVBXMeV4ddwffBYG77oM8LGmibWrM2p14BPS",
  "key17": "2vRwKaCewfRf5nJ88inv1fZAbKaVZgedoXxozJWRgp7AQoKGWsuR5i94WDNH5ysVa6yryUUw7MnNWSVvFbWpHSyc",
  "key18": "4Xfu8VHnYHqtwndP9dRbzbeucp2y8haxv4y1E5RriJifnqKHMYNSfRZnR54yNz84XD7tHmmUuJ8kBNn21m42R1Nt",
  "key19": "oFLgszAyUKGBkN7QEmaqGj5PxHJu7wzwuyLz7HLEQoPNaPf7necpxY4DZPZewdBBF9yQ3K4rHxewwWAEjscTuri",
  "key20": "5s4cDVWCGnh127oNCy2n2ckWRzbaquKqaG24HRgzzvvZH8cLLWYa8o8rdAzV2Ry7UU585ptDFuyRFNDzA7jHHnfi",
  "key21": "3wgbCxuFt8ZiiAXkEQpV8TGQbHVVQ7n4x7sYxp7srQb4SdhvvGJ7yjn4ocfnj4t3b91NkKPnQS9q1kfPjMSYujX1",
  "key22": "3jxDQjhYfSxHLeVkxRmqv5L8nPwabqrEdPaCPTUqKjAcuZYkb9dtNCaXiNQh5TF7iKNy6YYkdjuxwgFGwhGaskqy",
  "key23": "5hfnxrLzwcqtynHwKAxLcE8UZB8sjcYv8ktccjHTmpZ8PRPj2QNjG6HB9scDA6fPFYGVH5kEfhPBXtjyLhr84B31",
  "key24": "9Bj7qVC9yPQLHCt337CCCaeNKFvKUnxYPM8KAQYTsqY9hNb9Sym7QMpANrwmwgWLJdGizEZaMi4Ze2mzZbn4GbJ",
  "key25": "4sAZUc137ExqJgubjUVNfCTtSBA83Y8MtUz9cuackLwM7dG7Q1gf7HeMTUV1Tpw5mX9yquwZMzeFqd8UzkmR1ifA",
  "key26": "5Qt8SJYW8nuwgNAHLmPGunksPFFPNY3YEmRJdhQkRywVW9mmSZ4hg3BF9qbAG1WSyffA5kv5c5H7mA24kdirEnRV",
  "key27": "4VYrqTnvi6cBS6b35kLEZM2nUXh5TUh6ayQHDvetq6Hu9jWALiYYMsbbpbRjoniiAjYeusPG2u1QdbY393RSqxKN",
  "key28": "3KFewzUZgvH2qwyNhRiCGwsFT3gLCsGsMsiEvWCNj39iHeCmBepkBqfQK2XivFiFFcxZk6og2PVeYz9oW86uchUL",
  "key29": "4YB1x5i6m6x6cw4ZGvuiu5mymQXnqyrNTL7TosbE1TouA96ipcd3RsrT6hDsfPagWk9EpW1CyVp3o39cQRxrwhT2",
  "key30": "2xib2zSPzCaUVShsAVC4wdx5PtP9LmT5i7Whp8P8NMryYg2H4Pj3conkq2HFmEyayEPRsmozBV7tGT6vEYQ1f18Q",
  "key31": "49s8gXgJnNEXLUMomMd5MK4bD865x2xR3BtxXLEaxkARQ3i5W3EZRy9vifj2y7Pzbz9ZcJ5Ros14dnXz2E8ArLi2",
  "key32": "BMRygrDBVNVUUGKW2WtS6mZMjWtaqB8VVBdKsasKWqGzS2gQEg9GXdTwC5sXPi3CfvJUuZS1x7SnA7NpkFiDFrZ",
  "key33": "2EtSWeSdJbjbPPurkGuuoqHwdk1iT52RaCixBZc3KEBXFohe1AjoicaNoEKyFgmLezEfWYAsX1uVFXsAXZS3eaga",
  "key34": "44vj4hKNpJ1W3BHEqD5G1xuLSYsx1BuN5xTWmzM6K3bVAVS6c4rDr7zQCWgwBpbFP7H8ha3bEeddywCeTGw3Tnki",
  "key35": "5PBtHtfAdvFfWypzooyDRuZKythUURtxzsaQvDt8vQgU7dK2C5TaLriZFWHE7mVjdvzDthyKbZEttyiicstDAxyn",
  "key36": "41hkf52tTUJgDQ5UHSKMeu3GTyudCTvi7rKiF6v5rSJMGbQDMSryPJHxaFmTx9uokSVAKhfnFyt99nKVHQweRBQf",
  "key37": "2FnxKg6tP5bgR8qySbtCbg571gBevE8BtCuDtkbHMy9JkuPXUDL3kKEQ9C45bdL1uBAFFBCeNuqV7hErFCcQDV4q",
  "key38": "4Ms1cgPw8REUTQaADSuo7trZcfXeA1EVpZDMXzko2ngaY6jS4vPbWj7zw4KApqnWRHCMz9QDuEU4PqcY8gvWvdue",
  "key39": "5rBrMo7iR6YpkmdqUkaZbqGsKtoNpYLNyZ2e4Y95GusC4D4P5pQ5ToRT9itAXL4ymvcUM245mrqbCNny9Fbt2cgg",
  "key40": "52cuc84qptE2tfMUaPWx3wkmN3m9xWZtmvEMKqABy7ux5erbLdq75crbWEKzDKN8ckEsboLXczUC5MH6W4qNvrYG",
  "key41": "4QzYzAGyyyYEKDkWp1zy2ViJXgoWWuLZCEWRpUBtv3BJTRHzrKkhfbQnivDKd2C8LqkWtYtz9ScQwQgLaACTPUK4",
  "key42": "MQAjZKFSn3RiU4PAVQvEfcE54uptwH4e7xKq5E6wedQbnLxMs8ZFjznYA6XABSCQzG4E88qCH7Ehj3y3CzJwWHT",
  "key43": "4e7rNcNZihCwxfRjxdNq9LrRYAddjz4V3FyzBTvkMn7RHYbxmupvs2SVCCcuymEKX7xGaEDVQbCwkpFVACm9wkUT",
  "key44": "3ZUZtgmG78rq8WWzEqr6nyK3NtDT59SV6ZwjXy76UeZ81jjvKDzEjj2BQPHTT467C7puqxnyVgekp2kCDavQQLgu"
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
