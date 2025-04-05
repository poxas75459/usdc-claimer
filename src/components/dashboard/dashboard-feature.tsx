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
    "4itvcj9a1uw4HuxuNGL4fnTGeWfor77ppWDWWLinar4ZzewnDr4gpJ2WEsUa47EBSYxmuyaDQmeSUnDmgK2m9CPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHcJTYwzigq1zFJneHzYNvpYKYJCc3Sxdt8UUFyriKUqFxZvep2hXYRC5JBuR6Xu9sZPouiQy3pS9qjdtAxEqHY",
  "key1": "4QPt89KAKxw8gMU9qxspP6nn3T7aaDSZx6R69DQTUp2gvwbeBvPGigcVFupg9FoKiAzm6awHAcEZXrdUs5y8eisi",
  "key2": "51aMN5UrKZy3knmoqVgqXrxm89LsijHfiNApXH3QBQt2SiJ4nprWTxQeCMAG3JKDfCjWUpf7rzbpmjA4fZwswb5Z",
  "key3": "2rzmgeqERvbYyTd3xSNSh4QyBbBaGgsEKgfSdXJtRrAhK1iDGtcGnzn5zeF5PviirchojrHb3VM5h9oiTaT9jknL",
  "key4": "37j5ZjDR42BhJstwpFmNQ998Si7wyzqzvwFKr3RLNpFYaMSYnaCiGTfpepyb53bkqv2A1kyWEBvwTvBEBZRGkTGq",
  "key5": "4UqLwdmEHXKKC6eMmNpgaZHZryv1vRbjw1TXCGuEEqJeqhrDKqyHheZQ91ReFjninsLuiUachQ2NBydZpVKebNN4",
  "key6": "4i9Kn4ekjLriZ7MRBkdfTyhfvpAj6odYyhrVZuLnLnL5ywY8g3u7tCCny1bHYq3CANibt1Q6DXwQcy9EfH2u5n72",
  "key7": "3bFnDxdQjzgpD4FAK7aR7HVD4jxm5SbuaXafZiRNy1rf8o7hZXVnuEDJrfnym1bPny3fwwX75CvQJNhGqDsnTSwE",
  "key8": "UAHTZWxn1WEFZjZLCD4Y1QJcbLqCwPvJrqysm9vSfExopBoEWqFmKTEa382Yp4yaMtR31Q5pgat2XEtigLqeKSj",
  "key9": "gHLBXCe5nDRe785JotFwdZR2KZLHTyUSe9zfBY4CPgm3VE6ezNTxHkdLLZQzNbLhCTgNShL6gE7ix6NZECAZnYN",
  "key10": "4kfg4cVtFfDaNr2TAUwKAch6zrsvzPcMztod4yRFwZszJGYCdz82zUf6d7eDD65Z1D4dopWCpWs88r7u4GZhiVeT",
  "key11": "3SA2DnJ9k26UwoKH1BKrUAkP8az2GXpUs5RpTPdVkmPJLtnXfpPFCzepvRF5ZCewfsJ7sxA6TSs8JUvS2GZohrh7",
  "key12": "535rqFjgn6TTqvvUvsmZbMA8WyiQcqWVxzp6CYha9ViXBetVEQHLScmmPwD6Bt2sD4gfFPXzkQrV1ntWwcMm1sGH",
  "key13": "3q9XgmmK5t9U2CttkoqjBV91FAD6unbyCjrB6Sz8vnaAq5qFBcipHaqacxvTiBULRagx2kdxb3Ty2fJtW259tomS",
  "key14": "3RT5s4pPxwH4eAvdXGKVKZDrnerAu1dQ7FQP2sFTD9Dwhi9cFX54sBZ4GLMvgxqA3mqFWtcLvSxdTSABaZ3Rm573",
  "key15": "3qR9v5ciFkjLaRnaHZi5UeDRJzTtfaZEs6Sax1PFwQFiCHB4fR6sQTwWHDKapYKgHd87EetxEayxyeUxfWQLDY7W",
  "key16": "SedC3gYKRurwr3bbhduNAmRTMVibCosrL3MjEjWXWmUDujB3UWC6S55ezeyMdVtn8ofv33DinjdEozCyDi68rJU",
  "key17": "3dkoSbT23FKMXqbycpF2eEeKcNdChtZ85aHTnC6SqTyoKW2ozLyLdiacFygLVaZ8rnSroy6FfrTPDj7Ky5UUhQMW",
  "key18": "4vd2A3hXZtki5nTDPjqfB3Lsyn578dEkgNMpHqoVU5xt7rAohmxf5HvPKXN9WTWVNQwtH1uQFwqAsvmUrMKSmt6L",
  "key19": "33jy1ep6zqZRrdEpxiHE4p6bzE6ewtc745p9LLsp6FdZwHE7M2Xm6w2EXajXsZ4x2axcGXneB3PGXxxwPMWrkvit",
  "key20": "HU6eJjyerV2i2yish2UfBscGaPWH1Jodi6RGR1foXY7qmhDswRxw8W6qddfsoiPTFR44XQD2ituaMsg7NPS8WYq",
  "key21": "5yZqAipQe9FNBpv19hmJxPttsq8qPr2anRgnc2RJKpSiWBgaKUptFovGgkJQx7XkXWk3B4wDRQ2gMREh1kb2TQ8n",
  "key22": "4C8C2HRFMKekRcScuVQ3ZuBvMjpqve8phrr8ub26NKwcb7ZLnDQK5tzXfkXh1r7aDV4yDx542hpS21C6EwGBspXR",
  "key23": "452HLJKBHWJ2PLv24EUV2xqJzfXFHq5wGhSshXKGb256QF4eS6MfEgA3Nw3GkLPcSKbBgBQuNC6KfLrfQ1tPWQCK",
  "key24": "5zx9LHA5nMQTBrtgrXFfVC1T5CwnSEyn78Yv7DPrPet2dGKhh3MUuHwCaSYSq71q2dyRHr8t9R72KW8EMKShTsAq",
  "key25": "5azxQZ16MLsXQRzZvfaiWN8WU6RzNE4Tm82EwYQ9mvYNVZnwfg86G8mYiqwDgFXQkPAEW9CTQQt8fHpaeyWdgMdy",
  "key26": "29FdmoQFp9wu3jEDQyD2f5XMV75wtaBsatuBZesQ9CKRsbvtyDy12GzKY51w9RMVZLkVU3sVvNGWkcAGKJThvSNy",
  "key27": "64jxiGapLxhCeaXMf67cS67SS2GnMnhwXfUPE7uby6D9pMp5QMiD5vLKNCzM3imRRiW9KdQJhvYUSKeBt8NLbn29",
  "key28": "3neszyo5u74QZ52jvQkdGVccsfqbsxyfhsVwfbmvsZdRo3gC6WjPHcUS6JGzsAt7Sg3BjM1FeULVgcKECMkXz8wq",
  "key29": "3tAAkEbxhXRPPhWnUusiF4XpdJmirNavvVgATn6LMhy5d9YjV2xK6oTtBCEZ6PPebCLtixwzfsVSgwUmP8J99w6v",
  "key30": "4ryFZkGY6XnYtKm368kPRQ2QoM39Hkxj9yiPNhY6dwujKFQTkJCkvhgvuuot7vj6YFLVMgfE6ZckcASeXU14nnQZ",
  "key31": "HMMwkRHjGwmRHgUJoSvEnkzjyGn3scV5xonzRBNSaf9Xkf3TuWDPJ8XbHoeyZ83UCa6Km1p7snG2c11hcUPFu2A",
  "key32": "3fRTSXfFdD5XKAq6rXBgYW2WJw3NobZnBzD3dz7BPUMM7EPYrj27q8bNES43tjrrMGU7AiGCGS9dQwmZCABX5KdZ",
  "key33": "589M3pK6AwbZ4DJWEtJ2uKksQAXWCjh3wtjx9rZi4KLVtaXpjRy7dgsfhjkSiok52sHszz1TrA3DibzjVAi4b4ay",
  "key34": "5fPg6VwMogCfoFgR5PF2NbPh826aBj5HfWanFk2mA9d5mhmuSCDTpg9vZxrdwvFD9snuok1pGjQed38pUauF9La"
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
