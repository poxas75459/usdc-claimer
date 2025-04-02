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
    "2s5YNeQs1go3WLCuk5vbqxvSXex6qwY4FHAdCcADZB4fkuxNWFkWdScQhZ3gjjJ4EyW97iwrozwmxTwMPMAeH9iD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kj1YTjqH47boJY1pCgJijSq3BvqS71LrxWdQGRzuQM68RpKs8LNCJpsUx1vTUkzXd1P4z1mARBZZUcPtTNmWvQX",
  "key1": "NdFPdVXpgtT3S4s2DBk2Hzv41aYAZGQSAQGirfPsR3HbRf2T3giA2GttAuD1WhnT84dLdjPAENvJjjGoNHGvjVn",
  "key2": "5MQkjx4en6r1ebiBeHA8DreFjyNXEnnn9qJpxz6NQPQU55w3zikBLH9KxZ64vnofNPjHVQ8mkdzLGeGuYDtPWbgo",
  "key3": "2as6Cym3zzvGZetDaR2h4zVEP6CWaUm5UwTVxLUpDDkrLkGadRmG4SWGyugUmz8c94J77wMkRCzFQb4fcSPyXrAq",
  "key4": "ADnkNVycxDEgCqvsNZr9Mu6pBgQVXptztimrr1LGPpJe1PxstbAsY2i6w3saY6dsf2H4UFnVJBTFHK7urwzaEke",
  "key5": "2wv1YaCxhUuLbU8wwPCcbqPShBFSUD332khfFLNHe22NvamJxxZsNEu2XT6eRZkJnDwYtq4mHtgDwLdQQ2qRp1Y3",
  "key6": "1eYdiNSMAmGW57nd9kJGDfCDTDUxFJDDrrLr4Nq1apFQB4RjyZ5WCLvTmEnQRvkbhEs6je9V3YLzvLq9b15BFgZ",
  "key7": "7GsooVDu3fPTcsesX6VemEqRiv1aZb8eTS9At5Cwds2st7NrxcTdAF7Yz5tGNTiSjyopLGbu6AjADxH4mv3KbX9",
  "key8": "3DnXLgTgdkp2RxMKEQqxYbjSg4oiLJNrRTz2dUYrasREMToGEhNJz5GwoTC9esiWgvB3Kjt5TrdyEBPNDZP82GXp",
  "key9": "3UnfwPbvKsTnMfQd3j56WPY4Ke6gTxTYiCrH5zq3aC6Yk5F8HPQU8bs9CmP9uapdQLNxTFnnKFhq8wcQ67pr1ZKL",
  "key10": "3PX2rwviJ1dhHwQFKVq2d8qGrpAZqktRhvHFFJzQspTsmPt5QS1PeTHT3G9p8nCHcM5dJAqacyhQPAMiiNJeMUhm",
  "key11": "Pp3JCijMJwtm6Ydbs8W4YjtBz6y31LCrbKNHYYFZZTJ1G1oji8eVcQ2QnfDk9jjyXpiGfVHQcXBrBfydHvZuLeZ",
  "key12": "4gnKXHboFkiaAykEAW9c15tSLpz98J4dKGgNNZkJZNbQDHve7bJD2CNu2QeJYh4JuDwHk8R12Faobr1rLYPEPKik",
  "key13": "2a2FZa4YF2zMbSeg8EqScqDviVf5vS8WRScPS4tDpdvd6FtGoYvtRwsJzvzgkona4dUy5SQSknuMVS9uYnDu6Z52",
  "key14": "4c5H2XPQMK8aQ458VN91wcaYNsFL3nQY8n7eN5NvqntV3TGF97xC81D732iFe6tFeTBine2cG7jQ2QbypnoViTox",
  "key15": "4HZMiLxau3ziEPrXtEaHd39qJLaU6NgFzXTVWaCmrmYXycep496K7tKUXz88RvnMNSdTkKiXsgwo7QLcmbyJhud7",
  "key16": "XoXa1RKJDrTkaziyH3aXnQvapPntrwcz8VBGMC8fXMHFbnDRnnDe8hDBNCGG5vrdNf1JEWKZZiumghvtdZ8JumV",
  "key17": "4K9tGvYuAVgZcQXxrUPM7ypWnSnhR6E3ZUSkEQXy56QxRSkt6XbrQXZC3CG9MHyXYcTpP9TXuuBXqCTMep9p74HJ",
  "key18": "39kFL29QCSVqzUUgDmoWNGouvWqZiGegP2WPsMt7gE6d6JRAtxx5j2Tdyrrknj1sfMZ3oFnWe9VbeQHyRBKfXFnD",
  "key19": "3eR7e7x1nGGu827vaUcsWsG3kUsgVa4vjiKvuWWCgsZtkvFthyTVUtKJuTCj1ftFX79SRdv5bi7d3nLo8WJZ35Lf",
  "key20": "5HEdGnLdKrjU5DuS9hWF7jafHS1816XzPYQ7j8dkPSPjUgGEKCzV4VuZKxwY1dbD8Tzxka1swD4W5JkqFiis77Xk",
  "key21": "3jyEP5Qp2BunS8KSsVMm2tZ7oqHpZiWUS8geDnbvDLAzrPgKp2gxc6qX8VW1MtNeaE4svU3QEeGw1JmKVxhoA1E9",
  "key22": "4bRGvVSQEYitTWJqApcibMcepq6vARTZs2YdS1B1fcre4tajJipK3H5ibQ6DncJP8MNnmHjtW5PF2LfnigJ6Lwqb",
  "key23": "5YDhd6vewBbtSNd2Qs8NRVHNZuckQJuPDfFvfMmEfBFVMtEiU8NCjCRNtVix5BWf3CWGqeSQNafmGDx57QqGxe7B",
  "key24": "5f1cZs1pKcFT7jXwEzDVovjo1NUsp4ky5pK8KV4T2PMjrVwV9oJ1TGj4cUcq6dWS3eTHsLq7dbGRLL8eKrLVdQ5Q",
  "key25": "NSi2E7LzjwZKRMPC1Pg6y5kKXAU3DWJKMtQRKnkPp2EoVNjarLojKUheWeK7VR1zZQiZAZBZRtuJnCoEDecFhpX",
  "key26": "3YzJ7WEsGNVrLBmkWmXXi55J9xdsLh5niCGp3tMsd517YeRm7yyrrHZa2u57tyAbYbGxPat68BnhETDNtZJZ6Vc",
  "key27": "62v1PcNFZ2SC5LcVSvpvmaFmy3Y2Gj2bNZjqwbzdfg9NAQJtwkxMGShMLsEWUGVzSVx6Um6QfSQVeRmPPJX4jtmS",
  "key28": "3gN42CKoLFyyP7LgKSt3Ed3zNoFW61qP3tj1NH6LN2knP4hqTV4s9MxdXDK5ijujKvTzppGKwDKY53NF23YWQ8SH",
  "key29": "TNj95koupEQaHReGCczES6QmTDbPiTn8AM5TLJrsJTNgTduYhbPCgeR6UA2ZnNRoVjsGYWKygbFJxoje5tGgcNU",
  "key30": "2bQGYaei7T9cieTtZrZiVebrA3VJ3QkoRZitBnCZY1QNTXt9vUYijbyg1JYs3WQEqmgxauHb9FP88kyViAR2TFAt",
  "key31": "5XTPRP3PHmAA5xM5qVERV6zMDnXQ7ZuMY1iAzocNEriwxgJ8Fzxfn55vygBTZmmY7pvcyyWs95F7Pfja63zqg1W1",
  "key32": "4fGdRDhGh9TxWuUUyH7LW9PKySrGoDkaNz2UcG6sKQsQjRPRQncFb7f8au7GdD1NshcPm3qawNadAA4XyqQywuBn",
  "key33": "MrgU6CcEqP2UMuqeSMjpqGVr3Vc2PNDNLhPW2BNnhE2hYdJ5cayAoBpXBxf1oRjGwh3EtBYELxXhD9DEVHXp3y8",
  "key34": "4PWNLhARK6xUED8zAaddW8JVRD2MSZ3npxkCX71KCNhHeyw2eGM9pUZTUtzFnz4DHwM8aqR5sQ95kaM9Ac14DCp",
  "key35": "3fkzJ8DGx98qv5dVHV7MBcPA24VGXkGNVsyrxbTBuvTwr1eFFytzBBXhkaE9zoQYfkuRKDNMo87zfW49A1Ah1DtG",
  "key36": "437nzwtyLjnnFKeYn7WB2TmaFnCUppAzWRMHvrrMzi6mSao8X3TqCBHerTguWTpdqQGu7EVWEXMYNVBApR4ehmYp",
  "key37": "3iLjcLHovbkQSZ1dXoDqFV4cAcGM3hCmgQtHmDYWLCDMkHhwC9Lhx5y1PBnpigJyFBVpw2PQXfCGtSbzgk95StqL",
  "key38": "4ZZKHsbFRaxi6rPx9Rmdg5yQHfkweN4NBkdYRLRmgoiyZ6XkM8PfA53yUkdy3yR9b1LF1Y765UP4EDgHWAkHJcJy",
  "key39": "JLrrGBNzsszNckp2Z2ADVBi9pqaLbZyhbJfRd5zyCbhK5mwcWyQLu7p9FyTFu8YTg8Zt3A7Yi2WqEzGbs77zp1Z",
  "key40": "5Ndh4oMvWg2pi8fVYhJL8M72BQbAq4ZfsGDhC2iJk9VcADN3aURFyvj8sX214MB6wTmsEJ3TTftKhPD65uaFrUGN",
  "key41": "3jkrrtFJCjsoojiJDVDSfkSw2Lkx2Z4UVuDmt82J7zEfcu6RUZxrHdioaWomMdhQ4DzmdbzJMj6wboXnMQFqH1e8",
  "key42": "3h4BVwja2U66HRHm3BwEKRzXFLb6zydhhzq82UVKx4iCRucDrQG2DTiLHsm6io4n87rCj2ysyPfk6riBD4fupFmj",
  "key43": "NY5KJpbDJGkL49aTGuqtehq7VkcaQZ2PxDDEyaAewTVojUVBS7ZBVxpKDM29oKSKiBFhEmWRdFQDkQzpokNxzao",
  "key44": "2HFz711SBZ3qy559WsQjfDD9yZ8sFQ2MSiy4FXcptujHobWwrA3S76sse7A3Q6nzGC175ar2GsSQWK3vJrJc6E6q",
  "key45": "497765fjW4Js9bSMGUjKdtZ8pVYdGJgDiJjqgPM1aGVLuLJyvF7uSkqsEbCZorhcK2AwC7PxJ8rut9ognUigFP8d",
  "key46": "4jSukQS4bhaLPTXTgtgR7SWYrkPS3t2iDBTsdAKYd6ysNQXg51yA3NGANRncFFi4hry6ZwkJ3mbNCReiGQN7nN8N",
  "key47": "pPeoLayxbxArNSLqU9ZDevrGcZDF5WkNc4MF7FPPFCV7zY2XtR1ujq9XL3arVTubNjGXApQm3dXMQCyaKnkxmVX",
  "key48": "3S9URMWCPEC18KGgLuTkCtpD617nHf1oqTfVZTU6rhgykFJwreiNpp76EFz6EHuTub17U8TquwaNxq244hdgzw7S",
  "key49": "2eW9qGKjW7sF9UzGAvz243PM3qB4uv4sh695S4dYLgU8HbwzbsS4reBeAx4ifph6MjBeFEhK9ZaAAw9KtyTFgzaS"
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
