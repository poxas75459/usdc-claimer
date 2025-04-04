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
    "3kXrirbDyxStvcog3LiLz5p8XfhzyiTUEzvd9PR951oEasgVFAGNNVjS1khCBvjGpMp9njKcxTC9WuZ2nmUucoHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zYfJpHVk6Eydrvzv1UXm8bGyLgPYd6B2kyFNZdTFn86EpkueAK7B5wPEPiyRxc3S9Ebin6eBtMt52wBwAXX95MG",
  "key1": "22Cttu1zmJbRoaZ4DkQufh8gmwgCLLnfHzoYtw4ma36Thmyk7ocK9nwaZdY8CdKK9Jr2CeGNQnwAahb8Xa2j6pJM",
  "key2": "3MjnryvQBPTMi2S9ETVP1N5fAhD3nMoraG8dYzX7PZ1juDLRZGWxSTd6BdJ754cFSS8QP3gyMzniHwGY9vaeoGx5",
  "key3": "4LS1Eb5s143JuUGn2dV6ZWZgSvqact9sSjqguj2VbJ1rxw9RxAPcFH7kTMN6pgkNesUm4iinmzbQFJ8rdS15tRAG",
  "key4": "2JPZ8jk4kkDTTRiVurheYKZqBm3NTNbHfKds6hgphwJjoufh68dPMUwtVhhhu8Vt4zpRuQ44PdqA9ay7QfmGvs47",
  "key5": "3wvELBsMMiFGpKbuEdYCNuWoug8zVKBXUAhUeeYPBGKbahP71N63MYuJRWH3XRfjhhD3i7z2WRY61FoFPUbPnc2V",
  "key6": "5svtXUpZtoXitVajd2kkKZ2PSspcfKSDdbczR99XrVXcBYoXJ2TkQ3qwH1DVVZ1QyAzPSNz6yqE3sqg5mz6rcpVg",
  "key7": "43twFCsV9bQ5FWzu52Dk5PNMHxPY3tpMZgcHEFx9WyTtAGfPRvkpo9LrxaF6BBfrxa11ksHwSxGHixK65uitBdcn",
  "key8": "4YJyku1HJht8a9T3T2UdT6P6g2gTZmRVDp3UXqKNAqoi6m25iVmc9Gw2xyhqEXp1QTn1uRxnonE9XoKaiFciaej3",
  "key9": "3SD115UywdnamXCyMJHwqyNBTufoKR21d3BUaULYJ5a35jKWVW3MmDknXUDCjpYtvVkX4vW2zW6HJxsYP4K1mTiS",
  "key10": "4WZvpGjh5eLxjJmr5Nq1hbfRL9c2BCgfJSym2hNywvZyVBRGkEpsj52PPbs3PaXHm8AfeWtWJd9nrFGCfxResFS5",
  "key11": "24neZPmS2r2BWLRi58r2xTVfxHLa41PWJeBiq4uyrgep3zpNQkxQRtiPaJJ1WwGegZMkLhPAQBBAy2tuQGmZhSBr",
  "key12": "DzZZpY11HLZxSGVG6j86artAJzru7rXzbMS54BC2rP9fGZUAR8qYM8T224daXb7aJuRryH3ASuHm7BDu1Yd7YoR",
  "key13": "YEhhDPYqaYdpPijkHmreTBZyQ3ZU3yWpqtYxidij9gEXxP9ZMoRJCdDyQmcoDUMATuqHPpBZvReGhqM7cfYhAom",
  "key14": "5VrJtnHDwSdafwGsemW8WssemB5TCN1RJwrSRvUMhbmkGTTedhZED4dJgVCeFtEyadVS1FJ7nw83nCHTHrXphj13",
  "key15": "9MuSbKSakRUPhSyJBDAU7vty2FtBfBQ7xptEWs9K8bLthqdbPmCj9VjjRMrMxqYHxmkvzVW6iDepwWmR7emZYW3",
  "key16": "HEfZJjG64h2VewNsmAN7xQKu3vVJXrT9neU5kcSDSPR1Etm3NrU2CZbW1xHprtScvdKGhskdubQ47tMw6VbR9yC",
  "key17": "29i2BYkwcc8jzYEeyC7EVtGkkupsAKHYLby9mJoDjhVsr3M1bsxn9CRzjLw8hoc9HwizbKSXpDTGTP4KVmeNouPy",
  "key18": "2yNicoaZRexBQ5MCaJbCNJNQBdoxLsr7NVpAuaSUNgnYmwx2EcgtoPnN2k9NrrzGuZd2iPKGpgPPDyJknzLTkQ3j",
  "key19": "3fyQzm8JtcmjzLaYJV8dHUehRCUAPLgDfHBeRFBpL6XYVScdU7jfa4uzV1QA6kUYDNydcZq5UdvnyQTzNghW2mA5",
  "key20": "Ri1gg1FDtHCCygYo2P6EmwZ5EuobJpKJKrFNZKRLHFpzxV7RtUrYqaWoqepxrFwTvCFuXEFf6izD8YXgMG5sVm8",
  "key21": "oJ1fsyQu4CzMCZ6BeCrALvSKJCZvrTg3UE6bZSW9Vkek8yaJHhCcMs9tDJF8JnpFHPFmbZ5ckpmi9JwFYq3KseR",
  "key22": "2uxEE3C6PAin4N6cGJfatiEA1uKRScDrCDxTUR2VujXw3296KSuNEHmJsmFBY5Dp4tmjvY73YSnmapv6QPUjD1Uh",
  "key23": "622LD765VLYmGwHrDX3a4m2QYmqcigpxJnVt965ja9Qp1AHZiwVpXYGugTMGHdh23NGRAx2uyh1PZFhTAJdx6Mzk",
  "key24": "2wDgfKH9ks8T8xA5w12ZHdhKSELZAyXj1pzxh911rxoancDq3M6sWhSzNoqHMC7jvcU5qNRXdLPXeVMBPJKhUJ1A",
  "key25": "26aZDGpqtQCAnP35LLC5PJt8Ki5UAngQPxGu22Rd6nhG6j2EJNbNEcVpFKnYiv7DtyUU5pgxNxkLe3FY3FRdgu1y",
  "key26": "USUe4fvP1E2n3ZK13oHMTShHEhvL3S8W1hC5FvTvLA9q1Rg2jmoFHu1L2YnFYjC1jQj8t6aAc3Z2UFQn4XV726b",
  "key27": "3ug7iH8wQWkFHfhKpXirwGeX5FstU7HfSqbdcrmnGob3dz5uXcESvtMHqyXz7BTRrcv9CZoPUDr8hHx4NG3BDTPp",
  "key28": "3b1ubunKxhadW6mCBL5uLwXgNPtcgJ6nEFXWn5FnjRQ5zsiesEeEAEdb8hUfibvq1nWGsaqHmy5rv2kaEdumdFGm",
  "key29": "2fCQqCWLNyxP1S37XFBFL3AxRHdHSdSg1ccfqrsN8WFRtrNRsUiHnjkFbJuu4ddkQpW61XPw38yUyeJczcvMWKpV",
  "key30": "3Jj7ahfmDThixv1wggTK8jc1Sx9FUtAgASTf7FQjQcmEsJJUBk3co352qPDYjMmnDNkqmiRKrPcRrMKp855Cg49p",
  "key31": "2LWSPLtE7KXza7Wj8xFUZB2VD1aeHk6uGXKKY9n9S11UceBw3PGLiPKpThykU71mgVnqVbiFku1x2A9DaqswAtEz",
  "key32": "3EpUmebSQhxwDrPBtrngExhvaqawPTpL7FyH9YXUJvKcTeM9byspBNBUvGxShkDHnDULDkTUfkurvawsWPCjavMv",
  "key33": "5fs1YSUozejgzfw4dHuByQhGUoQbKWF2si1fRpJh1xvt8U5UTTPjSsezNxGApm4h6TzndMse2668H3PzMqRpqxRr",
  "key34": "4eh11s3e49sdC7i7ARCadRjRPi9pFefS8FhEMQBeVusobStefsM785EeHPdKasSSBGrNUbtiQcnFaN3qL45XrkcV",
  "key35": "3ToFSR9ViUvKbQag4DLJn35DJPjeo7jtuvRRwHhwTEHujktQGYhXDbXBaoyxcBwBreTpY9C2UPVoy7aXP12Yb7rK",
  "key36": "2Y1JuQ6bAXs9Tqy6zq44YwT6rs1nuRDdNJLDbghQfWdoLC1TRMu7NzCQgsgJm2h7r6wX3JEig48PGwbv6jKwQBVS",
  "key37": "44j5wWTnaAVMcM5BjLrtiEVWPkqrXv2JNQBf59kwG1Wz1m4vFdCDmoJwm6Ph6NjZVi29LYVuaPtrc5rNR9eH8DBs",
  "key38": "5QZifRedFj5tpH6XUKEvBdzT6AaSv4c3BusuGYTQyE4oiEzcq3TngCX788tdY45zc8ukoPN6asPWqW55kXd7SFP5",
  "key39": "3PT1tsZdabtKPgHLiBXh3D3whhJPPkYoWdPMMvpo1Q5H46xWe5PoJNg2yG7nn5FjuDtRX8Brw5xxYN8nsKtUEBKf",
  "key40": "4EbcfF3MpSQ3PXPhGFRqH8KLEeaRxPytEGkdRi3Gn43DbYYWK8rRBXZGh8tukXMDg69c1dVvGK8vBWVDGQjDmB6x"
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
