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
    "KZ6m2UfxUdXdnPgSygB2UoiZHvg6yJ9Mb7EAVX31VgXCNrXK4HEqG6Um5r3bvztnM9NgiH8HvHVKVxYqBFj4gAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zagD2AyCo9tGukxG3M6vMpbs6kgDkcq8MRe4fmrS9ApVNmDC5BwJn9ucSpgbVTj2GLBXEUasZ5SLiK1QVYVQcpm",
  "key1": "4GPagJQf5m1eKgdYwixu4Hj2X9oBvUVgjbeRMeeDXhZMy66GCexsLoZDHo8DpfjsTQHqNFBLE1XSJTebhoKwqxkT",
  "key2": "2baFfBq92ah27n7kwMK8QjJrhDuXKmfvqgJm5SfXXsjJcH9cqkbzL8UCtafMjizFo5RQNV4VnPpNJ3S1NVimjLs7",
  "key3": "2YWtxsPJUeHz8qfZCuKbawQPn2bkNm6LGCRSBytC5BsWhJ6SL4szYZfnt2MNPdzCXWH4A2HzP7PvepoXUPVyjkcg",
  "key4": "4fwrS3wfpnJzWto7o8w1Rcp9661r13Hr5qYzokKDu8gWuFUKibAGF6RUfyEgD6wbqj8Wqku2jSxXK8K9cmpx2Wsz",
  "key5": "25mah66uTU3tYdmLz4oYe2JGtvHtPrrEFrpecsYE3f5UUPU4hkW3kZ3Z6KaSrW2ZvRUTnDd6mSvqAWpGwNdT9oEv",
  "key6": "4ZHL4aN1otnTKdCxYk2dY3PvuB7BqfCYfXKhqb68YQ3uUyHZnM892JSdjbuRbBiVhVjADaBwA3vVwqj41cdWKHz2",
  "key7": "533ek7xRSQBZv1U4vFB4MPm9EdMogrCMPoZEqVeVABEa9L3z5o8UnNeFHV32vWoMACiqDNsCUYtYzUS5tDHHwZSt",
  "key8": "5pLRwzPNKMeh18wcuyWuMvs6AkCfikPXTZdzpXo6gMDaY5VmezHyo3vR7NrTLgAMjKCQgKFs4V3twGkQNzX2mg1Q",
  "key9": "2UqSF235fcRCmWLR2c964MgVPXiXUEmEKJjJP7rKgSqzxzDm6jSgpom4DoxcJEWSkDSfoJZ2Novwr58kL8X3Bpee",
  "key10": "2EP88mmM2E4dNgsSaEFi4L3noANn1Eg7EzsydBpoviADKZWhfwa4dpcSJiJ7L2QVct7ag7Mx4f8fHv9GLf5rQcYd",
  "key11": "4iBU9Bw5JufxCbzw8k6co5aW2LEpwaRgFe3rqggmKQauep3RCZDSb53CRjwfoZbNsb4wJHrtZCoucPLKKrJMaZ4T",
  "key12": "28zxNbUEXZeF3dkTJbaDoQcLjqk2a32jGSaULumSXeCo8FNCQtS2EGsKRH4wLDoKYspMJUJzVTeCjwVzCRhmmVVo",
  "key13": "C426ovnM289uAYjHrz9SKxpi1iz1naxQikoCrqYV1bRsrukEdoKhGYvzYau2Wi5KECErZpKDRbuBGNQJK3g1Cs5",
  "key14": "2GgGDB63zd9EEEiXYio4kn74Lj5X3jh3tAGax9n55NMRP8Wp7y5d6hsJHVmzpWcgk3RhgD2fAhACB41c4F2p8x8c",
  "key15": "25cWvfW9oCwASbxvUCrGnzmvx9K35ju8iQxY8EduAHa9MCBoNsDFxhYzqbrYrnLkwcfScFdTGcphGZvtGReXQoWp",
  "key16": "5pigrQ6xcPntGN2pbHKFP1wrumkrCzdykH4buEiznf858f35yKCtpXxczTfebaaeNVBrCrFJatxHVJPUp9pqiGvx",
  "key17": "3x6TcS7tccQMfspsfApTnzwr89A24w6PQtm4Yxb28PbmGYVD47DDAknNMqtoZiNusR8gFNmzGrfP1vuHw2vH5run",
  "key18": "5bUM85jkHvTQDzKwSiC9cZcL1RTM8rWLLBmr6g2wkEPj4dutbZ3b1kFtkHPyvPwAwtjviVfHbXrdFQtApY5ZgefV",
  "key19": "2GAeceuc8FpqdHLvTqhy9GK9K67Fu3PURozc4eisoK1Joh97PQNXV6Fh3NUVDe2pFTdDmhQhUiNABTjS2c4ETiFb",
  "key20": "5V95M5mL4V9rC5P6tiBBmsxcxxdB54BAuy5HebPA2BBnJq5msR7FHa5Ln8HuzdRLcRaA8nz6pi5VvDsyThNowFac",
  "key21": "5wzUNsgpkPvV26cyXZXJfyENjwjHJADwnek7jqKUsV1948paTojn2zogkX7byGmo7WgTyjEbsGDfSVFErbbhjSRW",
  "key22": "5e82uVVXVXj7Tsrs9cfXs2R6X6SgJrLDKmPRd8TUHUTsfzn4ofevoqaU7ri8xkmWj78gKXVQEsZYEAcor1uZyqYN",
  "key23": "2bpJVGgVyfFb2aFMcYzszhLmQmnmwpkbjQuR59Kot3L6kYVV4SfDYqFwTPiRjQpRGtZramJnXrhf4Ps49nYSiWEr",
  "key24": "357dWYmZbZamHyHZ5H8DvjGXxY3wCGQQ1C9C5TMpNgcFwYYivne1py55RdyB5s76rfJzHiM7hq3ao1214uDWVP95",
  "key25": "3ipgkHh4tHivCrPEnfeuaqRVbEhcgY2HJ2351PYHbBFgA7uC2vAg4mat3hMtTVneK53vNvNS4rekXV6tb8AYBi1u",
  "key26": "3TrCf1qeUNoRBFRDa3WnRQ5mdB6if86MpnEtkawJbzmYpDTwVLRdXqYcfcDTbidcNVabgS3o8U6MDe77kgzGhiCt",
  "key27": "5Rod5kLKkzHhJf2ARMNsXQzmN9sTeTV5GAtef7yMMmENL6sghbCJhxxAVn5iYS1VKSSYbBHiib2tc541uhuMpnGj",
  "key28": "3doVFiSdCjUaDSWAQ4GcMdTFWwqKJ8CZN8gtuG9RBWZtVA5foZUuzmeb3Pz7iziTDxmqRMNQYeRxdLfQoFWV5hp3",
  "key29": "HRjYyGAJ4rwBLSz6mHEHaepD8iMfMc2Q8ngGAWDcUKE5oWsrBYCVyrbLMVfuCQ5NyHJw3iXaAMj6rTF2ebW66Xh",
  "key30": "5JvTakiccuuSAjUVZUVW75hqi5HqUaLwNkb8TkUd9p31oav22b4GvKE9ufNaaYgVUMuzxZ1dTLopZjG5apbuLCwQ",
  "key31": "251fCVKfvtj5pE8vsMYFLb3JRqjA4EgW33Nr1b1rz1ea1ieTSfjyUCovRUKv86sZeU9bCELkygysnWHTMGYMtQXz",
  "key32": "3RqbXJZfCGEnr3rxGzmffRiNRAnbMJ1ijLGuGobKyW6sUugSXp1Ls2hK4NciiMA5UanFDEcZZtWJNPqoBD5aZakP",
  "key33": "3UYXF5hJPPae34CDvSHXCRNb4uwNkR3p1CT9hUopbMM6P6NjgEQCqegyzefbUGkNrMCfT6ETc1ey7mCEmqLsZp6w",
  "key34": "45Lkb9ufxQFxjDqQwtcT4uzzZrcrkaHQ6NEShSixck9FSaX4o9vMRXVYN1SubuhuYvXfZmGMGsrX9QoYdS8kpBjg",
  "key35": "2LavdounqDi5x15cFYT4xCGzWCxpxeB8sXXCd3hWAYsBbj7EtcJhDmHwm3mgDE4MeEVegeX1UEoYUn7zqPVKk1Kg",
  "key36": "47TbawCEeDGU58mrTsEN53ZCM55BRP781gvRN5UPEPxKfhkq65oZXb1zcUmwiRNjsdUEbao79r6s9dmyV4btkL7w",
  "key37": "49nQHRh7zBAxPcvYTrsG4nsu3HRNQ3bnt74yUsj2cEam56pHDwdGiqzAUhTi5skFttMyW3g6wt25ZVLunoWawDMW",
  "key38": "4HanEHhEoS78wn6J8Cmi2LYsMM6CRXdegYEwAMz4FvxFWSrFxoLhBTLXSrGzcG2kJ5oFniT8ZdQRVuEF5rmKgz9R",
  "key39": "5CgeZHCpW2CHfY4gnKr2buwrQrhAGYWkg5hoJBfnc4LGSiWyEgKmuZvA7JC69w5MKWTymnia7iA1YnU2TN6qzM9o",
  "key40": "fTJaroaBmGwABqWhLvUFo45ibpKdecK5Ytv437snWtwaQCXtj57HsMqyfxw7oADHvFuWcmJM2cie5dELPEBxsq2",
  "key41": "4s78KcmzAgGEC66jvqQ9Yp7ouf8Jfe7gk7k9HXFFrxmpuUWVdQRLjtNAE3V1nNKyecNMGZ1TdW6ZrYyvJGnTGfJD",
  "key42": "2qiBD6w2gaiHngsQJUCcTAbuCSmo46e7hejncWJYmEgEr6NcpxnsdaDLdwnhwj8uQb2GnAz5KA8zFRJkaxiYxhw6",
  "key43": "57S5jhYoQp1vmQ592WprCBrkup7GTNmUbvK1EVWwm1XPGtNQWKqKzSvtc9iK5zZv3KGSxt5aBEFFUeHx1J2y7VmJ",
  "key44": "J7hQW4SZZVH6GFdqYrfNbtyEoG5ou1wekFKHc62UUArEtT1V6pfwh29qLaiCmaPZYP7XfkbNtu37HfmA2wsJmNm",
  "key45": "2Sa6y4dQVJF2kLW41RapZgJsdxSZ2Sj2C2pqW4wffrnUFXtL5US1aP6ngWhDYbAsSBxs33xRLjSC89shnkEcHgUo",
  "key46": "5Ua2CccDVZ395Bmdy1b2FNMqp9RtH5nbdLW81kiEzf12joBMRunh3SUhWz9x1H2FJBKbtf3MUtiTvAkEeGKB5HmW",
  "key47": "4MaXozGxb7iHbc3VtCYd2KSbFQyc5aLvLaidLi2DCnjUWqWtRL5z1z2WsdrqQYTBDejZpVMYePG8Y9V1HPETZLYf",
  "key48": "52aJ9QEDgEhv4BPsWijZvg3roSF3GkXHyVuTpqkmHv6Qq5Vbp2LzvrxAXuY6ASewsUGNkVFHY5zRcrWPksDErMXQ"
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
