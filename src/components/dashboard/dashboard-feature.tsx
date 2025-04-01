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
    "3PZhMPfQ41S1D8CodvwBW8u3qj92yfoypCH5Fs3Qvcm7qzdkB4j4PVALijK5JCXz5s8mwtqdG8DBjgHUAMvDPcnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCqgyZPMafS55KCBixKNs3gcimqwvfRwV5Xd598urnjgDwb5XZ8CoTng6psdAz1mVJ5itCVRZ2foMReCXZSgfq3",
  "key1": "2u1AX3Ui5WvwCvAXQtV4U8Wywa2t7YqmJz6xzBh7zfbmQxdfJW7YanksV4whvuj1YfuHP1AE2W6aJ8Jjmx9JqjSw",
  "key2": "2BK4wePLv3JCphmuccMdw91AnakicbpdM7FtkwMSJcrcNLgERihTTKxoHCTmEdAiyxfkyaZLyP1B2eSqyPvykWB4",
  "key3": "5U4EuKNoupZ4aSUrjdNN5EzkzTkKEEMkDxxwmwB26DJCULc5dFaUHk8E9EjtN4e3snGBkePXWNcjFCbxQiCzPfLu",
  "key4": "5cSZYdP7pwK7SNeZwknSeUDVxCfvDBZg9hBf6aygpcw64JiukWo11purenPYb8GZXQRGxpWtQY4Aqk7URxvkwi5j",
  "key5": "5QpmGxMbkhZ6gmCoK2WasG7WXrBhPZ9UMW8EdjyPTQQ51pxhryU7xJ2Fi4RKp2v1NamnS4b6KXVegzPXigHFrnxj",
  "key6": "2ydm7HNJio9wbeqdLCzCsuqUp4YaxR2iBgDm4vLHFNSN8m7xNy6ZMudEX3Dj4dTrnsvWaVATpjV9EPA5Go4CbACi",
  "key7": "5NG1pyJfDWdL8FapySvVygMvvUX1m9kno3bEtUCNrVXobFhqkdhe3QCxTCzYqHXDRgFTgeFAW6qRyU25oqfAQRd6",
  "key8": "4y3zhmeRXVrQrLrW8KBp21PWGmo2PdJd2SGijRXQYJ4PFRVCEj9sy2S9UrR7bEPi3FxZjxfmEomqZxkfZJsQswTU",
  "key9": "4pEF5uMwHXuTooWnGA6PJ59NrzVizVyneC34UGXBySPLSGGRmNYfoR6o7d69ZszmejBx3b6W3dFx4qbdWdt8qTDj",
  "key10": "2hgcdqoC9s2rcqBfxY2ZBXuAiJ5nhNbKFi4fT1VaLdnNy88o5huShaHRXKVasmCciZEf7yWxPBbxHMnEms2nFkYj",
  "key11": "heNe8gK8WET1oMFj9nvqrDfVHYqvxKJ6RQpeUMA52kiDzBEaSFg1RxqyXRuGrEsnej39z3Hucc3QbKkuz3DavPZ",
  "key12": "4mNtdosLF1x5cR1hu6LtAFAbVjKKYuNY2PzLLeiZzDet6Jf5snHYU8U2QY4aoTjkFH6YGzcufCNbzQq8LpjVARyo",
  "key13": "dq28CBqJxDwJQ4561N5ccnngzhBPeNRDXPbHp22RBMcyzGgwo4XzJY5ae7zMKQnHYPHJ46rt3v6VMEnjwRfMSEC",
  "key14": "4GBdrqtXJzgEXUES4LeycbXdCEnWCtCZJJRT9HaAa7yDwxGyQooyVA6ySZgnxqRWDiJGTLmNmDgk6GWHrgDFBaNj",
  "key15": "4R4bUs8x5BXN13tHQTKiVEQ6tCtAw7qeoAHmZ9mmnGob2few1XMm49LqxhDKSSKMr2EpETE4evNzPRpmpinaEcG7",
  "key16": "5gJcsekQ7V5taDhDExrwdngSSjeGb4UQeHUYqTnhhFaQDoYgkuZbLSH5gpi7juCxaiY54zHzs2JwtNm2TENvU8Un",
  "key17": "RQVysoLZaLAqrWCJWdoc6QrsXtgWnu5hyQJQbeAaEk96FHXqYJ3h82ubNXcVymBcLzFcUxNurc2koxr3kS4jBsd",
  "key18": "3zCje3SM6yLn7WDDtDaWmStVdWemUj8CT7ShFEQyg3c3xnQCk3RcdwhhVCubpAxNsXFtCZHq2XLhpBa542vT4Pg5",
  "key19": "5MsXaXBgHxKVjXq4avJ8EDVvupnpiKUjFpfNZpDq5K4i7bcSCKgef6b93BZtWDJLLGM5reLHPiaguKEKAQZqMGub",
  "key20": "5p3YKKNiZGZ7Wg8kRKwS8ZZnPbHosAPiFg9shcHK2hgUiFtTL3acz3RfmSjD6bsUppGwknrUMQLzWdRtP8kfCL3G",
  "key21": "35HhAQniYnVnRpQWuVhBMBtxUT5VWPHqk4x3HoPHQTvKJvW4TgPbVUGb7gpvzoFxge2PFGpfcXgs8GW5SFo11xPf",
  "key22": "4nK1Svmd3Re6SDkKgQSKMsoAjGaATFARB3BhNesAtqQxgzDN8XmFjNq4gWhfFvzvyr96rANDTEeGF7H1AS7hRNop",
  "key23": "3LJEevWL3Q7vst5UcfVSYqDi8mWjzDV3LzM36TRsyY7wzPMw17WZ3fTP8hrzpiCqyr8be5yRat62ctTYt4ZNtMs4",
  "key24": "5HPrfSY9USCGdU8c88s7EigMFdnPkwx63eufvJ34nS4ekP7qKqT33qAhDbHHyJJb2znvVrtzEETT39A8qM72BPa4",
  "key25": "5UtYywUcw2PEheErwovrEQG9duGgGzUzzkg2wbmKbGjmSpXPxGWzK1EETRDbmXbexbZMEG5JW87fU6oGQtoXrmRd",
  "key26": "5dZEqv2ciRLP5oAFDsJG2Foz1X5H3f7BmF9zHPabu2LXMsT7gZptLJU2ofE1u3qxLn8iLWBehHz7MLiuVRECVxgc",
  "key27": "3AXYT2GMC3bNJJodGX9qHsf6Yj8ErtxwuLDL4K9frGsVv9gefzHFDvVQDxKFnDvTqvqgrMPNmjxbZ45TWMiGTH6d",
  "key28": "2PArfzmyJm5iFqmeEgDkckZwA7GriurGGkmJr2J4CqXDc4VV4Co6uha8EkPU9moajpmgd4iwAgPYgayuuPLfr2gd",
  "key29": "2j9KkRwM2Lj89h9DNuzvVFj8ZYFUQSm1aMqDtoXRrwdtvQ7c2p2D3UupgdMcWiZ2ufsZumYDdopMK52stZgDW2f3",
  "key30": "5ineztP2BZprFVrH1ZmiVwGBu1tGcG3XhQXXjGhPQ79hqrq3pCSU4g5XLPHhFbU2Baaaf3HwVia1QaTswnur2XhA",
  "key31": "3tMuFZMreX53Kb6pa4ADdBrBMFUjhh9aw2aQQEYJJFaRE7d72BB4aZsrxAheyBhmvnqhErqUKmJyXyoTEYbUR2qT",
  "key32": "4hvK9jPz9Gi7nxBt8ZGSFfANAxp9NbiykcipnvPGweEwJERzHcM52gVrLiLKhU3zcYogeYGFFrXESrPJez93Qs84",
  "key33": "2fCwV71vHAGu1T1qjKP52Y9Ty6wZ33mqC1PSm4zhaY9TotxeQ6ksjJnTT4wZDRLyZJxRXSXE19bwHoHnvTaqvLxB",
  "key34": "38Q12YVdsfC7BJwncbX92mU731J8hAEtHSYn2hZLTbgcc2reoFoFuY7y88xsmwY3hNMdCDr82Lj3TKMsT7P1bmSA",
  "key35": "4YHBkfGPNAtqygsgxLHngJHWsFNYKGeqQ1p9FJLJ2vp7rnXaVMvUWeEv5pjSym4mt6sCPnp8JaJvuJV5hYVDqogt",
  "key36": "2dRC5yUWreF7teZ7xqUXvDsJjCXWHRWpRzvj5FnLRJAiyTeUP4xLWQdrBbxBHqkB5PQtyPLSsiD1uXofKFTUKwH5",
  "key37": "2QoMfZ974BQcz9wLLXH4HAJoPw7JtMHrD37FjiJVyyt8nTnRsxNc1DFMYnacUMRgBsySvJANBqsxRZYbmV8jR1pS",
  "key38": "2o1xyDU9i2xRzLzmxsq7esxfgMKubcANBa2aFSMBDjbczLteuY1B699fzMX94hVFLSPHjS6Wgj4Ge7yvGhcwQ9fo"
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
