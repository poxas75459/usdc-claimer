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
    "35r4YsQu3YKHmpLcKcMWFMNsSzHSX5rFuGNjny3m6B26gBPg5HLTA9HfUNEkaDMSpsWuvjbWFF5rdCRgkX2S2BCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsZU7ZmKW6HR5Eb2EHzavVSzVmQMp1833pQHro8sg2qNnxMWm6XDdBpfbGAA77pC1Z5SS9xxjeZUWG6DbdrTw1z",
  "key1": "3iLukuP9fekPgMk21Xmv8XMVb7PBrzQBtiJD92buLXTz1AoQ7zeYBo3KUNQuVbDrZDY1AsaAidFQ9DsGgkkD9EDr",
  "key2": "4i9wbEP7EB7Gt1crZ8Ww3dR4VXDFzRy4VoDxHyZShq61xzUvKT8GEeaaLksBhY4yTiKwKDH1twoRcQDduFBiwkUS",
  "key3": "3axSJjDwAQ5SsQhBXz4gc6UrpQapMH2GeEJD1Pqo52ne8PJxPz79n4pQNoLwnK4vj452j92sWxxmiiMnLDi2GofC",
  "key4": "BAsAi87y4EG2zLrG9qfsM5dZjwqaBKCGJauVWrbMYhU4Fm5GS9u4WC2FjjWbEi4yKmRghrpHna8muEJ6XZFYnoV",
  "key5": "4ytrsQ6euWy9NFM4pMwVJGkedHc622WoBDEz4CbkAYNSKSi9n48XaJPtaF2QkxkJyN418WHrLpDDKuiVMCCqNGj3",
  "key6": "e1PwfPbmSxw5FPShijtUL3JMLnfLfo5N7GiF7HHvC88at3zw21pJrpjBjppfE4WRVezrd5av7P4QR2yu2hy6HFx",
  "key7": "2vkBAVsEWghX6bNxATcBZsktxbKXvv8Np5nuoinNjBDDaeqR74tk5NXRth7g1rBgThXj8Xv8iBaRFBni3SYDLsyK",
  "key8": "4nb1DSSHqe1TuprnrLTt3fYik1ZHg8rfZCuWfU3Y4iz4HbVBpj4cd1cj9X8ApoKPEmzX6tLvPjjVDiQ2UwUz5JcM",
  "key9": "4avhpZcFuGEzF4gB92oJD4myjFL1mQ1Lh2fFs8ARbA7E2dJbPxb7cNBTmLuwmRtoDZZ8dCPZCguovAYYKS1RPwSc",
  "key10": "2WvAxzyQ7xiDwTy2kmPPSWFT9ipQtEyts7uYCDu3cGvAah4pCm7kEtV14QXYrP84vsbD7xmgQkagPusWA9GUJbin",
  "key11": "16F3voDE3PFPdYbP2bq1QzwF5nZFY9qBKBBd2ixup9Hu4gCwR1sUAUiLpkXWPdtR7ydmPB3pbsxs6256DnVkA7T",
  "key12": "35vEctbpnNUtX8wFmwgaLT77JyVXxmgzn5CZ93qs5rgmdbJLnm7Ub46gB9Coo2DRsJJjcd7Wg69uFw9zc2NhtKRy",
  "key13": "2ML1U9VSrneQA4Rb74Rx7yxLvbLLPQZ5wWd1Nc7w35esb1RQArbMYaPe62VS2wGqNELMnA7pLcWDcWmR6MxsTiKp",
  "key14": "2V6GLj6H5VDZm6mGotSYTqHheYz4s34yi2GcXaSKKbgqyg3MxvGkNXQVNRmHtUwQTA4kmrmJr87esugHUs1kJj6K",
  "key15": "43MFry8p4QZeekXCZEeAoq4faH86o2gcxsRbnxuJvozGQicQKvTX1DTD9ZfPRBumbbMgjv9q86koK2m7nhvFUQqp",
  "key16": "46TrP9HY6tzQpEYQRBPQgJYjNkVyd49MQoXsWZ1UsrArxJ7gC7KNiCDZc46xYPcxBy1gbcSRWsmAnNH1fRDcudDo",
  "key17": "2jbj9UHyXrUwVTvTkdnkvN5XbVHrNeN7HiEGZtrWcHyrp8rggy26Cd9PLmRQWPBfPjGC4HwqEJsPuHdmFzyvgvLW",
  "key18": "LSRjov9uTTdJe6PSvKbHCGJ3sB5LthTNC8N4VT7YrpgPfXkTBaTiwmW4H6FduRP5dhXuyfshYX1zU76WH6J7hjt",
  "key19": "urNp4HcpGKzgWsoa1Aq2fZdxioPeYr8oB6WyE1xqbTrQfMGMJfvAdf3LcsjYnocMJ1hdA6WoWV8fTjHYezbpii7",
  "key20": "2GDj6UNFArciY7Zi8yzPbKzsKrTRUifbfp32SC5S9e1HrmriSsgmxY6WY622s6irtazNB9mAcqkEAim4hCjJ8HkF",
  "key21": "2rM6voFG145KWYWZk6G4ssj5ZmzB2iRdgWhDAzWnztJdDx4j3akATPWUcCxGbGYSnrz12poibu6uC8Rivm5d3ndx",
  "key22": "4s6k2nP41QPHjvyB2Fe7tHxG6shgjr6nAnjyRbAhMvG44cEhv5ZeEdp9wKdTBNVy7GjEf9Q4iTdcvK5Br2eh6jsw",
  "key23": "34jbRMU97nXid92Azv87yDioK8uPDNAwdcd4jxMRpkL3Qt6BRm9JQkxZVVY2X6j7kewbFREzvxKmQnnt9viLfMdh",
  "key24": "1DCMuRH1AZYJdzRQJ4TjYE1kWsX3uezB3rBEKfaziRGKCKrzr5hyeU4nreCVPcu1U8Dszwh38x8hZ7nN9Xv8HQW",
  "key25": "egX3SEP4pi1LavcUU4hy7vZcRzxLa5G1fExijhvZWFX6L8SWgBfEC4GZGyAkjXQLGHaJ2FGKQVpyFGX7UEQQY9x",
  "key26": "4x6wXuQvhyU3mXa8SYQ4cuiCgc5PCLVseJRnXZmXywPaR4CQ2f7QuVBw1T22fo2RCmzgQJRFhuQ2rfYRKybsk7xZ",
  "key27": "47qhMXSNY6c5GK4zc3ZxyCrg5MiGSnrE8K7qjpco4mvazxGM8wu58WXQwTAmEnLZZivyUPEmjzDGBUMdwBEV8jSt",
  "key28": "2y1GU9MUpAWCicF8kbiKcktSR5KFTYjX9XPQVFSXXy7pMo3FiJRAHzfbyoUU9b8mhXG2aUiLYBL3BKgLKAwFjah5",
  "key29": "43pM3nrJQmLVy8CZtgH6Frk9TgM1qLXNG51A3GVQvsoHbaTzmd9HAhCWFkx6swcNGB3HtG5sTehozVhNeXrRuhgv",
  "key30": "5pAbsNsDvJi9XD4MhqC68oNAjzvUWgkQqfYjbxRK2qeAeJZa4XXHu5NrpMZFTgj8Eprn5E2irxiFB3JebSF5wmnH",
  "key31": "59c1qar6g89yEDHF1tfZjj8mtaWqdeAA6fTzXGNXBFTASRr1m1toRAtgies7EMuQuxEHyyNN8evyFRym5DTgB4Hn",
  "key32": "4GEsA53XVRubbkUcfFmi33JAgQ2uwzPpWWg9ZwxRWj44NVebNb9hSkRyqoLBULzt5xhAgpif24YAupeeMRFgcsiE",
  "key33": "2o6C9p2gKjq3zzCaF6UB4AoNjTnW1eZJMBuyKTuiqdDsKqhM9RQhGMUMNe4VHQV3HgPrD16X69rHxgya9dEDfqTw",
  "key34": "39V5vGPsyb3JUVgE2ZKYKHLGW5xhPdqPvsFGruUGpCnfShbd1Y1MBab5gsmaB7HQGJmBSnqM2CCaQJ3cBk13w3Ty",
  "key35": "3akue51oNEyfiK31bvXuiRFdCv6fUMFje6orkYq5Ba2DxAGHNrZMw3Njdf6dPbb4zm7eQYasTYAKJGDdPQA1PLqV",
  "key36": "4CCwXT7CD2fXhgu4KMXRtmQn4xatQNH9dEnJ1PmaMvtEgPaAWgmqbKTqhnRzibh5wWsSgyc8VfWvHyDusk7kDpX1",
  "key37": "4BonfhDpQF8baFTpufmYfXGA3WpcnQ2jh17JGMY728u8tgAGCN1tJPLLmr7nnL72os1RAyQgJT2Lsr189Peipzfx",
  "key38": "4aiMppFP4uycjyijfoMi2AfWboFaq6QdDegLVi4vWYWyRD6CD2Z94CuUgXDsyxgkFH89QRcCi1ZL6jJB6cxbabe7",
  "key39": "4pSxaNZqiu36yX97o1wXfXsPWENfipQizPvV8Q5WYdA7eDubjmFocPmAqiNMd55uTLKsRahEChyAuaUwrApawJ8P",
  "key40": "34BKNvyCc3ZYdQMaYhcdspjqvihP3kJqHfnzXfTGWPWfacJK169GE55Pt2zjXvxfiHUb4nGhsWzv4JCrEehWerd9",
  "key41": "hhcyxGjLLVDVU9YhhwnzkWihEATEszRNmzhjScRitAmb3nChZkPp9NTw17avPKE2LfK4XMNUv73RZC7sy9Xms7t",
  "key42": "5bhEXQnMwWMmWJCF4nq4QQmuiJh5pp3G8s1mZgTAdhv8jz4mt1q9WtsymYhWWsEN5txjEfAxViSCXwrEVBcT3BBg",
  "key43": "5ydeTwnxP7bxwmC19TjxVJezgTYfxCT95nUtutyCGoY5CNnsWi74n2N81wkryomGuxUxWnYXPU4XwTP3BgjapT1o",
  "key44": "4jvHaG6mf5PLozoAXkfk52sPDjdijCvmZWudKcEdKCVew7C9o1UnCp5enPz83RJtgvxH4k5G67okDe9C6bBooA4k",
  "key45": "4KT47ieSGJdeb1fG3fWP5srRXwLA5f7HpgtGVuky6kruW8TgyuJB8bo8c4dtd3wPPJ4ojdJmbc2dt6nQkcqDcAdJ",
  "key46": "2z3FnzdkXYTebUDEVqmiSyExRd2Lp13teqhqGDssRiis9u4adqVyjaHaoffj8aiZbjTwpC1iQLnh6z9TBvqN6tsJ",
  "key47": "XaYMAy2vgR5rVDVC41oYrGGFFYCUA2vrvUCLZEuMxj5nVH76u1Zq8bDHo9afdjHaeNyXVUMatLLPehC35bfhjsZ"
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
