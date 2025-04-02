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
    "nEMddAbrp6zfq8Wg7oaBT2RxZ8AT66JRpj2a4Dx8p96K194i7wTRom4jttKRyCF9933xr8Mu1KpRq3sYwZ3B69e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QdRfbNjWeNPwmtZ7ATDkptvKHeRTpmZZebTMzziWM5bskqf58MUmHMbyQm7EW2cRanTgTL2oRmH1JN7ShvfQjC",
  "key1": "2xiHFoCWELw9bgzZM8cNCPLqzhKmSFzSjGCSQot1a8ksHtgLGVZmgoU1c6NibX8Aze7RrZL7fDM9p9puXDrVGe3U",
  "key2": "2GeLKp4UMabSjPSTeKGQm3j2673VmdZq53LtjXN4Dc7UKMhTwahLPU1K51y4ZjroYj7oF9Zc4vBUemwBrb4bY7zV",
  "key3": "335DKBiiYCJKaMAUo3sbqYWvbMW4Xr7zuXLi4fPdtrg5x9y6YLUqV7mX2HKzJXBGL3qQMrbDZQistKrmYhWymkzL",
  "key4": "3ehBS4fMHMXXxMTQsHfLoW1iPhaM8YebBFu7ehS5XKJFGsujuoPq84MXuNWJDh6Rxye4rRejhwFDKwQUreASHqXX",
  "key5": "3mdm17NyXJbyxFBtTrRFzUhmbutG6SsBmtn22y6fpGQhVBg8UFY6DmCiyeMEWATKsvsX1i9kE8A49wLZAzjyheMn",
  "key6": "4t2t9c59V2B4fpLWQFa5QHMHwNG59MT15wi8oNbYedszyYTABBqNKuQEXdppF2SghEQbYAdRMPyzLJhjqqyYEWnb",
  "key7": "srZXJHroE8Y9WhjH3heJNMcrtV5NzGtx9CZzRBZsstJmzSBNzdNof4fBurWTDmKJQYVD3Xck4VUCr26JBY7PCrZ",
  "key8": "32yHRcrFzKrWgVoEw8ZfVdHQauVfKqPMuYnJVJEtyWXFC9pRiM2fUe5YQSVuGENMdxz8XLaXP8dKGyDTC5MKZHAR",
  "key9": "5JYNGBaNAhpwXdduBAsvneGtfBep6RcBcruDuxWtagh2uZJ2FQcisMMaR18SUQMxiYApufPnCLMUtF8JHPsQBNdG",
  "key10": "2LCoEU5qZMhrBLhvDPpht1UmzqZDnLw5eg5DFfDxpKSQRwvQHagCH56tiHmBtasNQ6E6yPUEBMT8fJjYKR3Muot4",
  "key11": "5eoznS71PzeT3MRW7PZ3HVtDtqAYB3hxbAkJnAaF3M2CSrQr5o9QJfmYCiTq1PgVVmrqLKYbWnkSSfxTNLnPpNMi",
  "key12": "QfS1xjmimRhJYy4sNymv6nyPoa1JLweS49FhDkKrL2ihUPY74WsQc5FiUTAGWPGC1amiwFhSEzhxPPMVfuqpPr8",
  "key13": "2LZ3NbXLdzJ6ZQHz4i1z2xhTCfQVncF4GXDBtGEtnrcZTwyJoo55mTLabNeCvWjKDKU71NQbaaxL7firWSqmTMwr",
  "key14": "5pC5V7288uNrVZsB1HXzA3CWyzeNgKbXx7WBw65hiJGHrr38dSGhBMFc6cM5nsSiCJMiiZpmSfBsGjhZjL5FixG2",
  "key15": "4yxC3jeZwCiJ3jBctVEi7SSDcL1vFGae9rKPeAbCS6yqMowtCqTaR9en4hZspRZ6wDXmuauRNa8MJRKSjg95eoav",
  "key16": "5z8r2zTvqP3WyFd3vpbxB5kibczfyjpDLAb4HUzaws6ssSKUPwARhtEUYkqYojyRtn328zBeKQ7cP8CinSU5S9Xm",
  "key17": "32KPn9MiPokCPAgehXKq7aJonYGqbLY74mEPDobSzCcdPCYpAVvkKv3Vz7oC5sw6rciLfWEeBA7BAuAPgWV9nYNH",
  "key18": "5SkVeDRfVTvYFv1TsVmW8PCjcfsZSxQ14vpuWiLFWPLqYokCG3ZfxAJXFS93VQyVKoMTHtv3pEyR1X3ubmqC7GCY",
  "key19": "4UyiCB1VFJpWQkRDds1PXcMgshk1N7ziYCbmptm5h4px81E2moSgzL67hESwihguDyEP3HkqXCEZQRiccLn8Xx82",
  "key20": "3GYhEEj5LatU9rRJhWsAWF2wNAeM133FymFsAHK6F3RpPM6LqNhL3AKR1qJXqXkQDtcczzzY9NcTePUo3yDNDY6Z",
  "key21": "5XaauANtnWqFMt64aMP9GHr9KSyyJvjf2mMxTyQLJNFPsnnCv98LtYAYvaQ74HUzA8X7QSxtjuMANUZ34BivBpvC",
  "key22": "3gqAnPRmSadCG638UfxE6zazGZisXSrCR3muH4dohijYWPUbafVeXGd7NszrZFYT5LF2PBo7gAm6yBwy7nA5cX6g",
  "key23": "4EtdZzX1W3dhkG5iHS6hBXw7YhsLQgFjqBLYrXYe3PVGNcA84SwNPA3e8RM2wfJFGZn61wrjifcYcFsB1sgpvooe",
  "key24": "4iRpqBnnVi8JgHjP8fyXXHV1UGHJ66VwJVAaSankPGSjCGnyAxHswP2UBWCDyeTP4Qxuq1etY4njYjihymr1gT7y",
  "key25": "2ki4t9z2eLgmV3ZJJa1mgC347fvgmS8DyUWWp1ZuSatoU63boSVz5MJcfFC23xvJJ7TGPZ5d1HQJbdfUUJhUJjHL",
  "key26": "apQpevKEijzx4LmCk5KktEzDcYbtUg3D6i2am8r6LMT6TvLA3EJuS4W9KquiPPLPFvbhvnjkHaqxX7NNCE83rgi",
  "key27": "3HXURh8YbDGDNXsrPhyA3F2JHq6DrCeuHR48cLmtHhMwvb2gdSmvZ7ZpPzURxWTHooTLZWCRjFqQsz5gBja7ve9q",
  "key28": "3AqYnQgKGmv3TGymJPRTSBiTM98cjtMyfpLoUrNq6Y1GC9AKXJx4aomijJhV93kqVNqQRcQu5CmBEfrn5aap6B7i",
  "key29": "5ske9VA32ArsZtmUcH8ijAp7TBKg3LAP1GHUEis3W8NophCboa9q997F3645uQ9pAu58MriHr2BN8ntAyxzmsJya",
  "key30": "4iZzHWCC4KVZqnqH2FM1KGrZqem58LYjNYkgZzhEYMMzC4CGTryr5dJnNMMPtPwDjJAi8CdTUW5u45BbRkDPu5Vt",
  "key31": "3HQRTRMrmn2LkjBfEeQwFdjn8ppmDzDwzQiZQprV2ei9v3xd9EQ689XFU1DCEi3P1F1YuVnJm15kDB2o9WrTEmgk",
  "key32": "4tinodUuznhbhSyX4NB13jUY1sBqT3XdYQhYJ38N2z8HBVsuv1nVq5EAG5XCLLx5WJENPEv6qm5hXkMZQBSzDxx7",
  "key33": "5hEC9svLzdHEtx2p3tjuwAMcgQ6EdP2bWnx64jGhmkvH1J99mttZ6XCTFBHaEAX7ryUJRhYBUJnxktRSD9xweSPy",
  "key34": "29KQLRwiQXmNcpmkwvD7Fyuc22yEENtkhS11mLCxL9CWdUR2H6sH5bAzBX6HSLJLdstYZ17duZpqbK7HnXuWjL2K",
  "key35": "4FAZmF2snzik6jkaseJbAu1ejER6KSFEMdZYogAnQVo41wi2ZJbubdS3akU9MJo1JZHpH6z9AuPDrmf92JK2U9eF",
  "key36": "FuuHPi72Xv7T8kuEUxyuwo3bYgBiZ2c5vSdGkXNDobbXGZsTNZpEcPoF3TiYsjWGfyxogJfnQfLvYKDRQ2t6C4e",
  "key37": "5uhfR9vYtgmaTWnNbrqtD1KNH9RiT5hcpxD7M8nmAyXMVX7JQnLxNhZ3CLvF6yfSh4QeAhipMnad5omQgy65pRd8",
  "key38": "4TpzZo1QHuY7UNXEty8nnrLg2Vk65DyzAxxTh4C2WnfxhvBp43W3ui2s5iDG3jCGeVbUjc2sFTEHgowe3Qj2hw4R"
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
