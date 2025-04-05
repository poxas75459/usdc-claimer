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
    "2jP5o1bmg6SxfhhrUqAVwcTqmTNZUXveazwJy5QD9MZzi69LLKUVdrwEkXsNhrktrr9z9kz1Yq9DXJf1W8dkomF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tL9mtR1btGki91nmGVrjHhnzmEXUBTcrzQ6XeqRdWuuLYm3jj2JcDdtshw53xdrabNtZaBVzEeEcqK7MABipRKK",
  "key1": "5vgYi3W4RcDRncGokQgFNuc6ZUik7CZBpdJJjc4Ea8SX5N9mGTAvTafWLmHvzutaV6zr1EcSfRcAQbjBcfdjUfow",
  "key2": "4Crt5wRBY9hPiyH9kFuTe2Uye3kZkurzw55RUTgkGmnL7SCoVADPBSjs385ZArgvPdNBXJCCoPU8XdmcFyFrX6Bv",
  "key3": "65bNdjGFQ4wB4B6fJji97XiPw2ZpQHCvBec1TSUAtJd7VrHpFpgwVFPcRRXyr8Zxf1yBumTiTFRV32odzkhUt7RL",
  "key4": "3PsCqcxRFqJfvzioJt7qg7ECkHLreXWPdZNTxC6cumXFY8EUqjHbADVxQy19tCwA8HU7YTmrC5HRFkjbdJBkEFib",
  "key5": "1y4B1XYedKTGPdr5xE92gz9CmGqqkGwDG4TGYD8cfJqkp3mRg8BwKBoZr2689Pf4HjSKtu5ehuq6arrCRApt5dL",
  "key6": "3F2WHDQMTkt75V3C3qhtXnvDnVyGxebmnroACfBkA4b586ooQRwdMpwd2Saj27u7K7dFtQRtiuAcctxZXgGFUrW6",
  "key7": "317jyGc8RMn8d7jkWMxgahx4CX7DSUCnhPSPrBV4qAiv4vMwZcp1HeJbqLDd6rYvzZXSYJgp4k2LP9BQQriexFdE",
  "key8": "3MkuzH3EWSEgg7XruSDvgTNNrgwGQF2ucQj1qwg1XqidEyJ5XKA8BMF75LGRSdo3ubQ94aeW6q21f74V7adKbFDE",
  "key9": "2bsod9Ayxe6aRFBLBkmNiGGw1MzzEj5KWy2xRS4JykTGtwnkSprj7TBgEXewaiiZsvthfnPc2NLx41htsudSAroB",
  "key10": "pMgWARJm4emRryWYAbfqHzbnoDtFFGuVtDBMeCEqDsXL2rG1iDTMoFHAZsderzPr1DXXamb5yXSn27p4b2jiS2h",
  "key11": "5KxxCntAkk8zsKGq5PKEUXbQw6Br31YdioKLeJYN1LK6GCVUbSrKUwb3trirYBB3FzZ3tgYRztPteueKQCGxP3bP",
  "key12": "2mHgT2DkZQ8pw3qqAUxq2eE8DDp5sQi2ZsW683XDAHs6RnTaaXLRYKg5hVyJ4AS7VMGE6njhfZeUukdVcJVeA4bx",
  "key13": "hpcSSetsuoUnZgzFdowpp4aUQtE7LjrjDuZsAMutrimjhuLmW6H2YH4LZu9eQY3N2wxRKaBo9NMLubuFm9AzPWD",
  "key14": "2USW3gmLjJ1DPcDifYW53XsFgapawYPLKzpxHRUCANqVX2TDxeYW5feJpPn6EpqTxXmgDJayEvtVCvHT67pQB18",
  "key15": "4AqCfX3H9JHuFSLDYGrC4gwLWnAcDQqT8ceZnjGMe3t3qYMNc2V6BgDaE9rMMmxoB9ZzD7QfUjWNE33w4EfpJViF",
  "key16": "y2n5LSyxcP67iFj5eouJwDkoF4hT99DqoPYVxXzC3FyRJyqq4SSHqMGijKF4z7ehq4FtcC38Z89Ah8o4VQYcGjV",
  "key17": "5C1UcGLcDno5BGnj97KpTEbbT73ypvnag7vQCUJiGcaaVmCeo15DpbJjJ2veZ9fSqB2QkcnzVjf93YsYt4LC3Cm7",
  "key18": "2XTZCBwdvi2D6nH9NJtqVzzkYBAqwc493VaEC54bYEfEQzMzgjpTQb4mqFYKUDFYRVbkYLipaoQiKfY8GUYCKqPq",
  "key19": "2yoduF1n54F36U82vmtTSPHo9pua1HRGxhL2hjj4Gq7ecptNvLDQTEVATuApdXiubMLCY53yNnUf5zbkhi5d2d4w",
  "key20": "4D7NyicdU9C5FgAXfwEhrNuxKqujDQ3awxLacmacn7HwuHDVnTMASkmt6ci1Fk9b3FJZMzMaj7hwnwwbBc2kzuHR",
  "key21": "4RaS9FDRF6wDjigvmjPfZhWRNCs4pwK8xGhMEg5mc3wnGMCymK11QGnrLeUSmFpmm9rMuZkwn2KuP5C51owuQp5p",
  "key22": "35iaHhnYZ5UH5P9Q8r4gtckHCDTbf1Are6QJ7UKJ8PZgXrxsjQHQJhNqZjaVfKKkhk7SNLQXGXrRTfgLZpUc6Bj6",
  "key23": "2ErR2TvfbchNVxp7qTPwj937GRnq5Jx6ohz9ujXY81mtnrw1rF2inyDzX3MScdbH4rfpPhsw8Cfe9KxTBk6HhwZF",
  "key24": "24jsEZoPRKCwVCy5wWYTYe4ZDMyb7oeWCq3zRipE1LBcMsk8xtgAfrxXgFE2jWDY53xYzcLY7HaKB3eFHjYwGTKa",
  "key25": "2AhF5uugVqZMN16AFUAGQWpTNctNK1ssPQ8tXVc6QRxmthgLwjFEcEmbfMVkN7KbupwxCBjs7HGmeDjum8C4MwjQ",
  "key26": "nxLBXVbQjsJTEF8zGPa76wLqpiuMiRn4Dyu5EKYtnmG7A1wCj7mzKn3mgqbVs95BBop4w9Hoaf5L3Gn1EtRczZg",
  "key27": "5sroNynYL5jxZ6buk4fFVhkeX3ioQroP3nCTPnhjKtjQiTLDz5R5KSQYKYiKeSuJucL6DoQH4NSJuuXCij1CwcvM",
  "key28": "25mk64Fww4t8ZJemEjbyzPbioWwjadbuvkfRR5TYYfA2cvdmeiXdexRxNnt4MxGqrA64vEiEn682NKTQekSviYjG",
  "key29": "3i3r2EwB8eNWzjPjTtaQniXvDse7qPUzL37Pigtb899cGj8GuxBG4dSxvAMYdvabWJxr469KdmffK4Yk31XL2pZW",
  "key30": "r7JLQsS5fbLygYpmQf8JSxdNcYdR1wUoFgVWxo6KJUx5hXByKrWczYcsUVhZcJ3XpizPBj9o5xbf7qJNNdvwFSE",
  "key31": "3irKPGUTDbeeZDKAfv3yVDPQ8nysTVgGUe9pUwopMKyGCCCLTBKdgzBFNwuA2dJmHgWLSpYTam3JMXCpF8rhXASt",
  "key32": "4GoGG84NRSQhbwWkZvWrYqGJkbbxjq46X9pGNiz4kiXsKNfePTgELBy856TraXip1VCyJB3XFhfqm4UW23i1DzHN",
  "key33": "87V4FnVwNQ2MPYpRREe7Wq2fF26jir8xHCuPh5wMHBNgozmdVoGoxMGZwXrRxmaevzztMWbAStsybC3JEy8SQz5",
  "key34": "5iF6RGZhz5M2N8h2te3pFj8uFRmVeHoFdwToHuaiBz5pKM7kK2iesvT5cPMiFyjhjKDic7fzBkjMHWY4HyLnJ97u",
  "key35": "R1jiNaj6CefgVKuh61B8cG47atmSuKBNRdAPxBTXz9EEutDMEEAXkbgVnRA7T6ShPM89Bje6SiJMj9t8YBnqhy9",
  "key36": "2rGetTjPK5cnVPtgfk7wqMJCYBV4GJzrLXmGYr4uZZYLnkHY3YmaHjpD8ufrDUDqkpSk796rToeqLzuYDnHsBZRW",
  "key37": "5hjvCMHxqDwCZRCi4uyogDWredPudc83ejPXzMAYbE2w6PnEhWPvBjDz2GbhUndYKKLT1hRAzwmBbbvLZ7idNTyt",
  "key38": "5S5xNX1omnQYiUVNZ2kHwTGG52TBBjD51L8rTzTyo9Uu1TkfRfiaL5AsM1T7BzB6NydbmV9JTwvKoxXvfzhELo1U",
  "key39": "5E6onSTC89KrL8Njqh5VXmY7oxmZvU6oEqvJ1mYV3Awe8hBjBxbEck8CGGLvygV1VA48MNYGQBX7VZhpD4hgncxm",
  "key40": "3puvyUuQ6aYWjWLUA3VAyDcuZWxgmsW7N5SyRTAoYXAa8kf4M42F8VZCiLSMTKi3Mp4hiiSEYZ4AQUJYN3C789Sy",
  "key41": "4qtJd2ZAijbuF7Fs6kFohbidRJ7yurTUzJ6Yn7L7bsJ9xsFKABAepkiiUwskZZJAQwPyzpyPFeaZwpEjbcFk2psQ",
  "key42": "61W7WF3tvxN2Wq4UMBUMWaZZ9ZXCozud584biDiKXCdjmpz2PrmGL1mnoNfcTdf5JVZckZ7WBpBRR8yF6fsohNdY",
  "key43": "AgDbofMjNGL1cSrchMGht8uFCGswbyQqmEzpJWqWEpp3LnpZDZ6ZPAPZrbpTvrSXQjwSDUyyuQLaDwCXFDVaUfv"
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
