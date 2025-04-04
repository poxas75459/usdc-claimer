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
    "2DLquz14MKJiTNdFLCYJYKWaoMHnskAaE4ENxPpwiFnoMxUgPs2BXpB7zE6bxatcG6GDzW2KiAQVr47qAYZ9Cpmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66BUTYrCEYEksz4dpTFxqtdX6r8KcJjvuwwjsHE728WAioEwf9uguwxpA2YzQf949C9DK2Vqda4FXwX2PoDLHY23",
  "key1": "RRgigRDEqoHKSd3LvLennghrBPzTbpVnQb4td5eXLShi5yvJYKg1nj5sUTuL2EozfA5776bxVG6rrwSnqzqDR1d",
  "key2": "3Jsz92RgDPyDzBbATPrUsnf97mqRQ8ZKoyHGcvNroPW8jjYxT3G28oWFVxADBTvd7EQ8UG4Q7S7pKB9KkCb6Va35",
  "key3": "5ondq92dYbGwijfLYpgVJuTR9YUStqyniSDxFFZYSrU88HYSfxppboGDUXdPsWHjH3SDM17sEnFwkVfVphE4TcVQ",
  "key4": "3bfUXaxoVqyoqNCRxfijSR7n8jWVEsRgUbFmEcxRD8DT5kVefdipVNvzahkNAwWUz8B7yZvg37MD6yBQVhUa73Ko",
  "key5": "38RZrNSkwVibzMmmeVNxiWLDyRQ7DpVSmBy9kKASFrUaDhip2DQ7vKAER6PdZ87i6sGZ8ocBdRpv1k3ZwHsjLEgy",
  "key6": "4NNxXbsqCp1ErrjWm4ZmhZEB1rTgXc4hzWT9RPsMH8PtH6DxzsKttSXNefGrGnzQ5CoePJ2cUZEXw4RUCXXxfHnx",
  "key7": "LAYrwxDbQkke4egdXM6iLHZFhVGPo2Lf9zs3YJdQ4jVq5iUpUtkmDsX3YG2fMdLjrVSpphyiiiiCtA8UirhccCj",
  "key8": "3yLtVMY2W4vzsVBeZHgaTF21LtP7uRp1pnuWbXQ5xoDnJJAFpvWgDu1q3ogJRGgM9RaZYN5sohLKMzbY1Ew4KL8c",
  "key9": "3HanWNvVW5YMBC5sSdSanFgaowekhUkzrPNvzhJpgF3PRRnNhWfh9WZfeKCRLTxZ6rm3LQeBTqVrW2sfStz8pBRw",
  "key10": "4ffJ2FmXjsRF37WKTX2TVn9dhJ9ohu42ykcTaUkPvJtTjRshyGWFmnouDBnfhmQDxitQaEKz3n4pxeBqTpsHDKWY",
  "key11": "2Y8s4UYftLwZmCYRfuFmr2Tt7FT75gGBoV1YNwkWd7S3jWG896iqPE6Y9ALqhmb2g8gYL72QqoUPvtzKuJ7Lsmac",
  "key12": "2p3RFPDUcFf3ZXKPpEc4jPfbHisHhX68fqwkdrSQaNzGkRCSaEXaxAP5jnfJr5hQnQK7ADeozQo7FfknyMg9ocRu",
  "key13": "4gikZwsGaXC7TzTqmuvZszG1H4omSzQtDxEd5eqPh8pkN5k7ftmkXUS7ReXDLGharFK6ZpV6LRhfq2Ri2G1ueKjV",
  "key14": "4eyPXeUZgRks3gT4nJ9yoaKggt8ConpuESferbyk6ZbVGZFGncSr9YmZ2skjJhmp8RSxutVQfKWczmDykJ6J5K6w",
  "key15": "62JeSYWazVs8ZTHBfS5Ub1ZfRRhLPxgFz41PhzZZsZC7cZYagwC45BrLqgWzuLDf5rWLP7mC6XTWVx26a8JHbumF",
  "key16": "RVcqmsE9scWKVofir2Hkr9tqZoGQMnQXX9zjmaz19yDuXRf2pM1RZz7gx95B9J3xMTTgdtKcXGaygazvPVWq5Qx",
  "key17": "62DBcrTVEMf2rAX43kafJm5yvbsxak63mjCynzqydb2sikhNdU4je2TYpQsLXM3r5YzKfftyZj9MZ4f7Sy3A5YPY",
  "key18": "4rG1SDyKgxx9XzjnW924tXQgq4swuctPejsEvKGEqhThVH8htogsaURGvTgDayhUmMGMFL5VMogNFRHEsGmMRtk9",
  "key19": "5RSEjYGCUhd6uhZH7svX9axsypXwttHHxcebV66tRfhJuu8Ksjfd3ZoPdJrPXuRShrUn3W2UNWfdrkQ9QghXHCqB",
  "key20": "2Eu5ti23DoxBKShgMJvS2jh4VoZCm37t23425gV8SR5s9bep9JRJTM58VGU9uCaFuooyRYpBUyN1WQduNJF2sGrB",
  "key21": "66uFVnsnBJjmc6pAdJntGswN13rK3fG7DYZh1X2GBqkqaU1XNBPyiVoPSrSeqGvfkJzJiKaN1wc8YYDR4zWm7AzD",
  "key22": "4RKE5Ks64QFNFLHE2e81LCE7SaZWg4AcDHp87NJiETL8UW6fnnzrGGejZCKpeyVH9e1g1NgY5xEk8GkbGHAbWJgr",
  "key23": "3oPa36Wdn7QpUzWJQ9eQ5CSVouukB4VmSuDFEiJxAta4sEiMH2qXnbzFHyJBgRTvJ4pwWwm3rtrg27Q4k2k7hz8N",
  "key24": "3HCxY9n4aUonLY6Bimccx5jUdkQ8DAWCTjmBMw62w894FYiyBYcmWvRiKacQ5KNnVMeHkkEcA4rMt83yBvk7WAAZ",
  "key25": "4VjRS9TiS3P3hpR4SgK6fFpYR9JnEWvhn3rP5SxEd2fLqhssEzRpAnVP4NHuSJDfcAz8SK243Z5bMFrrjas1FxBx",
  "key26": "2jttNkH8Y3ZZ2kJmMm6iRVhrSocGgs2xpQqWB31fKAj1AjN7Te5G4FqFmj1quFvTvwiEaTyNb585n9TvgyogJskq",
  "key27": "4LpdcznnqMqXYHUcpsadBQaL3MpDJQXjsyhBdxzdwCjzngqr8QkR6JVhyUAZQFATpNHrAvSKR9ms9JNaPWnVqU7J",
  "key28": "4dANE1FkY76HNF1yk9pyjXANKvi9WtYvFKiR7givqzPx5qE4DKgZwb93zx35kvaTnRQ22FgLg5vezYAb7gpTG7hY",
  "key29": "2t9ngmuHWezbp6aA9c5CSv3NRVjxTrzZWn5VcyPuzjnhSmwbRqq8cynezYCqF9iU5K15DbSJdPrp1GjMeV4AkEsG",
  "key30": "48eTWHoJn9R3EnW6yf7t2DjpNX7wX1ArTF4se6V1DJqpgK37uaybvfvHcPSrmJ6aQbjkttWSmcGfDCKUmnyjoD55",
  "key31": "44usPQXrmprkuEE7eqTHg2aZt3W86Qtj65yPtkiwBF4cJi2zNnCjYh6KiKS1EcNzZLq8pMzH1ewkMQsVKEH5NkdY",
  "key32": "QbLDMd6U5mrqQLWNQxK9aLCnzN5X4qnkEFVWwvMUQzRgNZ128eytmHuxvcpERwgXTcA6ZwzLrQPFQZDEnN6QSFz",
  "key33": "5sPPi44JSN5qzFFagGqdgzcLFm51zr28nvvcMiqPi1t8csobvFZLcJXf5SEbEmH1bfQC6BsPi9Z2sZgZmeMGTA9P",
  "key34": "3CAYTHb9ssH6NH2sTESiZVAYMoSFAKnk9CXtaZYcBhWeNRodToeF5MCuiHzMn9w2hy5La7vCR2ix3pVooDjHGKFZ",
  "key35": "3JuUcNGwaqCB5TYiFdqiUaGBVDxGmLmmjui5CJwNYfqpZXbGrNa6ZW8vHGYn822HknubvbWdB1Rty8iq3Rh79Lk6",
  "key36": "5Cj5kMGaV92BPBbUfPzUgtAYHQzJhPzFTVnMmecViXpMs2UC92fQYTdcBK3a2j7LwcnUF4SdeKJRpZ6vf1HHf2Lf",
  "key37": "5VNzXTFmrsaJmwuRz5xyDeAXsVnctohfc272pQcf4cdsaaUDLjzsm433Sq7rJscFrFo7XxtVkqZdqVmUA683Shsh",
  "key38": "3SramWdJeGUWBU9tQoR7N3X1qQXSUaTPhokChcRG4qsVBYYhDGJKgZCvEpSbfV5vymysZ1kHnPHJfJsJJg5Hhzi5",
  "key39": "3yJncCvuvGYY4U5dShXVBBNzZQ94fRbFvqUBZUFGyyB5617PRqamn4dAc2TuqRc3Ss9dbQBpX5ctcrtj2AqKDA1A",
  "key40": "5Q26qSoaRmAUMe7Cvpa85kcochRaXWARSuWoVnmxd8eqTPNuqwuo5Mk1tu2gJ2GcE6As9H1R8nUw7cTjVevSnQuK",
  "key41": "2SZghsuqsRB8hZLQaXpV8UQaecqb7Hsyf9DgVtXB4j2DrxY3yJUWiKEpfggttxxbpgVLq96RRqHZsamVx9tt8pGF",
  "key42": "2txqpA6SpM8qenXPS2A5rDdBb32zx8SfVctsuWpzhTPGee1x38bdY7TYxwEMiwp28GJx66UoNxwK285wMGutRNH9",
  "key43": "492hAkgZDRCeohf3mTT6eeVTzDrarA91Kgn69P8qbyBLqMV1WksUbyyrboRqukpB3XDpH6SJC7PWJg2RenPVTgjn",
  "key44": "2M7YjmNrtp5bRQSwXChmYH4QUUKmBxc2vy8kKrjFfTpj65kbpP1HCaHcw1gU2iJSaWWcyMs8TPwfidnrk5je5Wnz"
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
