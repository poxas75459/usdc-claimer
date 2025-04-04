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
    "2KiPHbDGDyEnC4eCbUzhtaKECBj8b69Xn7smqdEoFFLNPcmiEW1y2Be7zMtUaogZSCH6hxTNM6m4xMNCJGVYcmtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzU7kYLZoCQDBG3ZU7a4gMieyfUAfdb8hxjv1PmBKKhWuojrBHi7Ns2wxNgCDMy5k835xKfRzXDS5JDYq1Pn2Zn",
  "key1": "5WhgRSsPAncit6iGgxzTqDHa7xUeGP4LSL8pYtWj8onetBexjVwJ7tm5XiJqyZSyvbfaYiNpdzFgv6r3xLJ4E9es",
  "key2": "2doKrb2y2gYzeJmwSLwfdVxRsPw1yYjaqtFZ6QpPcuEmbMMuLeY6GU5EhzGE4KuMRU6br7LjbnvT2Jwz3QNr11o5",
  "key3": "3ZAHuhFMNK1pRHXbYYDDQeteu1VoDVPMN8PrBFfPciqFKEgMm92LXnAPwqmVQ31zBzD9GEWCfB6vjGoLJBS7tsDX",
  "key4": "4J7xRpd2yvs2YTejiiMyJFfXQts8h2nqMzB2gZAqPfc2nUe1nkybHcqdm8XVgRjTgBntGksdS4Q4SA8jCMMnL8GW",
  "key5": "42VyUgxv2QUzA5xV6b9vnBR62Q7iet6gsNXQvMq6ZagThDKcuvJvWLmQxbtTmyvAjSJRNNmnPnUMoeF7aoUaUxac",
  "key6": "3FNnPFmcZQaTMVUsKSZzoyL1YPpshh6css7MvFLMhfvg2PB3w9pVpezTGNQnbC7u1KTzFzUaJZCv8Q1swaLcZEGF",
  "key7": "2BEgj5q31tADGQWJ9Sr9Y9F6KSrqTHw2iN7ARVV4iD5H2SZH7p47bWhBTABXG4vdBxr1zB4Kvq8CtQftDVRXaxSx",
  "key8": "JYB8QmaPR9zx1LE51PDot1nw281QFcxvwUfpZwACaQygRJi1DYVj5W7hErAbJRBeYDNcYAPkm1g3ypH1EhPVaBu",
  "key9": "5dZhewmmkLj2NdCBdNMC9Q6qbdVgv24c8Dyt9a4NceWL8FCjMvmRHE7t6KoTXWky3k73ZLVoFv9QxerEQNYzHmSQ",
  "key10": "5PXru1f1aEmHeYhLiLVPcsTxsVJiAwGRv6po96wKJDUEDxkaAYBxntQvAUFVnwAspfY9tADKEFJXwg3QXFbpM9tv",
  "key11": "2E9j7BTKksXKH9q2M8nqD4wToi2TTYD78fcV2HPRxvGCjJVKB4QpKRFnrXEXgetHgWfcewmPxQaxyvj17eGJpPUw",
  "key12": "3ydwrTLW2ybYvaz6vWT1ejyQGQeV4ZCnuET3Rs8M97ijcxeo3g66YqNBxty35Cjjx3dXDrwNFcBtf55GFgJweMr2",
  "key13": "4Zh6VvkibWE3GJ8rh3umUecXN7w8XpN2g4FsxhVbpkr75LzG7nNJexZ83MXrQgTfcLKkkwjAbK5bYLnUAarw7CrB",
  "key14": "5LtVo4hr5SzcEJcmMhLrLT1AESSwEohvCUvrEa8JtSL89VLpgvgMknSWSUgamULsNNtyq2RFHgoq4fQzvCL4To6h",
  "key15": "pUWReaEbkJ3aSE3uv6LGEm76sdT8eAvUJzNx7A9s7jJhBCKvNhDXidFaK79mcGQkDVoTmZv7GZq5Cy1cGGcts1U",
  "key16": "2fTT5QRG4DYzETeCBaR2Jyvmv9MmcguaNuBS2i29e5ryqDXpW9oqbftsdLDnRcsSordSGZ3nYeBTbauVUadWqhDj",
  "key17": "wCMBQWyepULcBGM2s8kUtdQPqCS7n5D8dUGJUpKh1cBGgiHa65q9RfNiqvZMjSWcK2uyu3WdjF2Cs1aaiWQDmk3",
  "key18": "4dmDpzburwo1xNPrQsRrhA2qyeZ2MeZfokDYbVsgHALNbzJZMFsEQZ1XkJ3tUunLeKLZGBJLRBthoEm6K5R533KA",
  "key19": "4qHcw6mb6LF1P3vgNB2GghhS746Vzu8PhRfWjHp5xxZ2J2g6VwLCk8tLU8wArjTtxzfphWFzsvqcdE1ETW593QLJ",
  "key20": "NNgErR4oZqzUJJFjDhcNvs1v8gehMCavQED76SsDvLSBTCZaKjZ1SYfGwxfG3kuXC431GtR6xajVTbtjeJ8V8mk",
  "key21": "3b6YRcqpaRTqoLbrUp84kKvAr7K7gDNWVbRuaHoCC3xnuESRLmgXChBgWB5Ua5L21ZGzirKLZ9ABLdmWY5CE7yyf",
  "key22": "3uDd2fEFrv9CQ65ZphBYw32gd7CjrE7CdH2nrJEcuSAjHXNrLHtsySQafS2gvj4DtBeJfH4cReNnieJm7KvfrrnL",
  "key23": "3J3LNVkhifbSfcbQF7yYUWS6rLXdDGTzgdbdfZazGTXfxFVQXqJ4qgN6WDA3BJqeWSVtute7fjVA4d71AmXMyhrW",
  "key24": "34yprvVZDy8AP6thUHAuEmQABYukWGZKmicPBc2LbeX5PK8TjxxokyT4B5dYbWANoZD24MuohP62ccMa6cdvFHec",
  "key25": "2nYe3DPYmFCX786REi8JRxd94mWyMkNW2KUAfbL6pCqLXaoA7pK1TLvcVz6pEfpEhkmfAMEVo98zrwePVV3Khzam",
  "key26": "3Hr34Csqm5n151jNB3zz947AZAqKT4iCH7jiUVSeBE4vrTKMcfQ7FSpYadJ2ThJveoc54CfTPH8GFKENYjFTWSuE",
  "key27": "SgrWrhdyVxVhF1KDctAvRnFyMXbd7RcAQDg7BMEjWt5uNKkcQYDzJyNFABwNvTtzAzWya7qeshZZ9n6mNzLbxU1",
  "key28": "zAwVJsDiQ2YX4TMsw4CWoY2Gg5kN6TYKCfLF7kboeuqRn8zjnUhAucH2JWTreeXZefbf1VyrgTHofrSEEgvQ9pD",
  "key29": "5BvZmkAktyRRYsEV1WhVR9pkT4uWxUKKqj3yQ3RkWpAkdzvfYqzowrfFNdThfFH71P5MzChYYPZKeey6CrtfWotc",
  "key30": "51TCJaqS1VZZXYztBJoNJ6oZpx1H14P62xPnzrRyGguyvYcXBeoLN496VzfiN4gDfybGNzFFZDBPqFYYSacLMLHQ",
  "key31": "2yPtnPLB51cRwTGC3Tc7YbB4ZiJR8pP7fnBVCreWz8WeQ9EUuG8XvHzbTjq1rZUtMsyw9DNkJepUH18fRTmKcWgw",
  "key32": "5a7x2uMne57GuqExCY3kTkMAQCvkL8nZ15kcsttJYcprhWGZdUmUvuM2n45vrMeBhAjpQsqMP75DNjzRWoy1Jdg6",
  "key33": "3Jf71qnuavUZHhuYKmaCEpCQdRgjYpPy8R6Uz4XBDv2Q7rxcBRbeabDhxQaJpEDEMr1m7aDgGaC7qrLqVvreVMRd",
  "key34": "2mBTZaBD3i65Ahut4XytNdZ9CTxE3vMVJAAJ1MBUDieBRULD4auZSZBasLxL7nVXmkLD21KThLVpF9rJoy1MmTGE",
  "key35": "5NdTN1dHrNxXbXoRMU3eWTdvyyTiKnJFuY5ugWUxpLbEfe2ZesdEg48ZgYGADe4Z3FTwdtUXbyvewjwi6YLNTQT4",
  "key36": "2cBaoEfrABQ3epvpG4WyghrChnAnDukCRtbWfUTU1CYCTcJnTSVzENQ95km9u91GNonof8mm9B5ec2AXWRAnxE76",
  "key37": "3Vc4zaV4nYDCBaULfiFiZ9B2bnFg6PBm7KZsh14e8RiJv1YLBRAooEeMjiSida6nHYZiaycbXeuzkfjigjttxnEn",
  "key38": "2wY8PiMZBhtzTejk1JRrSBZFCcNgZRjBNQzbkTrEutwu7BBZksviyJeSKNS6TXphESUbyEPtUptaTyz2dSpyWC5D",
  "key39": "25GMreYcvanB6Lp3N3r9wZQuyvnhZiAUPzeynocEtUMmX5iQ1PbFnwjYumEh9BygUR13v4zY3iEtupW1E6EUZxmj",
  "key40": "4hrHnAnpKmA5qm2YTuCiKQt9qi1LDxjnAYeBDccLf72r8QDmjGzYpkfsbyqy4RXDeqQjhjfEhXR4YoH4CkViYEC3",
  "key41": "35KboNjFe3iNjConPMQtjTT7xrz5Y6YCMUTJqTm9JMb5b7M2hiUxhZ2eAYCd5jLmPEXxdMukfhsi5ro3xs5gW8FF",
  "key42": "3xo1KHtyLrccX5Cqs5Fx3MqkY1eMyjrmRdEBzj2HhkyJ9ha8jg3FBBpEU6EFDg7QzAQ45NRrtzmkipuQrt1fuyZH"
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
