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
    "4Ub4YQUxv4tgqFPzvddg6AH6hopivJEi59Esjy7dmEZDrYXrJWJKT8rhSK2zN4KecqVZAMv9T2ZNFGyHRovmXa96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U43AyMVZdFp1tNK6PuC9AfpMqfbtiPXNGxogNMTSfBjMeAF6KoLX24CiiCpn9KLZmr1qjq9yMjJ4HWRBkDPEpGF",
  "key1": "zerRKgFPnzGG7F6VtrVbR5BphQFq3ydCDT3QwAsSZD71NMNRYgdos7camcsv4dQkxCoeAZxFUbAKtPwLvqVQZxA",
  "key2": "4ZHH7WyHakpSCZFTiUP3u1vhujhyUTQtb3txsHWigptWpgLFrzFgyJggsRMCfnr4TEQuVMiGdm49BSPub5HpTZvP",
  "key3": "2tCzGEVQA4TTVNRZeDsaj1RfRr1tUxLtpdbx2VE62WjJhfg1zHKEqLUPASw2fH9kz8c2i6agim3ms8VGv4KJ87ru",
  "key4": "4LGa9Z8LEHfZYBjdH6EPbnsxKJMkt4wvio2KHAjzUsxqLwJVgg2oYu4EELniiqB9wfRvT6L3bRuEyvEyP9XA1HsW",
  "key5": "4hqN2JHFBuz8ifyfPu2hx7i9Yt4mKQDX1EX4LsfDye6v132yHwZ65iGsHzEwNYd1jgPAKsTQ3ZY7qpzxPpbueLsu",
  "key6": "2dF25AYE44nUkEfzWKdgEH4Hi41Ua24VA7DTpASz324gWcXgiY574Yog7iJNQseUrEapdQQLhdB7V1jtwYQ32eEJ",
  "key7": "5srmePRoksugYH3WVucYr45JnqXLeKJWSi2esTLUZXjZ1U4VEjJqX96kFbKGwi9bW2nNaD65rXo3xi7PBB2rJmvy",
  "key8": "55hv7HcfaW2UXeM7wGT8qQFx4nkxG6LDRyauDj3rqrcoRMb2FjPz8aDtUd5GvQGskmcmDZKSwyBJ3KMDtho1nhdE",
  "key9": "3y6vmKDyLgvDybbUuuM2VsxxpubiqzfpUbMivPjnaA9arMvjkiYjL53u3jDurFxFr21nS2CHye596AciQfdaPiw5",
  "key10": "5SkRqyk1NBkKNqDE6vtifCV5dbfw6hCU9KMEHdqUXxY3sdybF4fs3V32vNqFXBRQxRsTVCnzR46TTTaAos48Nb9q",
  "key11": "3CBfXp8y57jaGZeSBEEcUfUEpMuVDmGY5ajNfCpAWAKWP64i7yLtvnrbfL5pbqog8wuv6eRWY73uoT7Vhm2XGc8d",
  "key12": "4hQRGikPSxC4zHP8RZHzFgmWwAb9w1BXgTbznmvXt25zUzWVJotV4QC2gphRZGBH3tjZeb1EAhAzN8RQefktPkb3",
  "key13": "JZGjt1dMX8w68i12TJjpm3fFWV2iuJJA9Y8qUkJR6X4bzFBgRLMZsbgETCVWkvMCXHyZD7MfsxMKbVa6rrPreZG",
  "key14": "4Lv4oJP7B3biWJxiXN4ibrnH9EVN6bHcbfpzdSBxc9kVBqsBCvxAF3qfPtj1abutkC64GqudwtnJrdW8BsHESKnm",
  "key15": "3zeab2jJHe85d8vP5DRuCpPBSpCuiDvhLYfqFByznrcBaszfqxLBjuiVyqHLvag5VUVXdChacPvMzpTe6DdDNuRG",
  "key16": "2iPu7VJghZF1eTi4SJdeQ76wjZceSqV3HT8dk9xEkBxD8DsTvJ9Srv1G3cNPECg9k9N2qJqiMgZNAhDXwFbFxCZw",
  "key17": "51PrnnXvm7vXfcoo4SWZvPgS5UiQpjAH28UNYj4JeEkZyteRfMepPYnWFTMtXkcAomCGFAp1iVsgr3ejD8T5di6Z",
  "key18": "5qAETAQZ2cZzPPzgCnBSbsfLaGyTiDMteJCJFEPd6wc1EpgUGLRndohP6juohiahMxUC1ASfnFYxzQF9Hw9ZoLKv",
  "key19": "3ANP2JM9fwJEdcr27P7n22iT7W5zM1dtc2Yp4GkQRLfjaZYHZF2tXUx9dJtQmpH7JowAeiZR9PwvUNQjnquYfdmq",
  "key20": "oTmwkMgkVkL3NdocU2N2r32DzfSfiVowioBTu4bzGhR9r1KbnNnYuzsq6LxgyjYRT1Jt9zdcwQr39QaLQPFYgQw",
  "key21": "5miqYAyFSBfza7PnYYxhJFmL7RQwuVSGirbtpP79MBQ5bP4uee5qJzkxAE8zKMHrYhwASo5EwRCGj3FNdUeTr2Ry",
  "key22": "VSHib12zeRz9EHeYnSjJqfbg9rRoa7XxZmnvFDo36U2GCrtPjrDnMosHWHj3LQKutF9RT6ue4igvHqaW6BqawLM",
  "key23": "4keVcHTxtyZ9BypmnvXZEYSb4cyzZskHL9SAC2UQVH5q3ae3v9jsnG6VpNWWEGemhDDGxWBH9Ly6Q2SUuLawQQjz",
  "key24": "2GfentA3xEVe1pQcU81Lb2Dbpar4ZmoVF3SdYMbDonC6BCvhSWoW9wsqZdxQU3pu4veEYnh4HYqzrXcX5BtJk5Fo",
  "key25": "4ANRpDAvarc5w7LD6hJarLFEX6k5Yk6vQZFwBWTTNoCkkcb3NfNWvYMJD6UHr5oGz5QxPEnEnVaGeHzeLB9cLw6x",
  "key26": "Ep8jaM6fBnLLJ4aZGgV5bwnTwp2tTnzKN9bFv5raYUcrgFJgPQg36tcHN4iZDZaXS71dXJQFcG4tM4R5YErSJT8",
  "key27": "Thp4NPVPnxtXampnQw8usaHqxwQDpDDgB1BXfCnQxPbAmGCamTU56edJCYJHYb9BeJRaT7jq1KvRp8UvgNnJCet",
  "key28": "3MwKe4BesF5wGV6xgQ4f8nybitNEemFhQ3GZ7Ha12Eo8af6iMrbCbxriz9ufQc5j7zKUEtkrSkBM7Vqsh8XTZZ9F",
  "key29": "2zzberaKmFLeuBiE7yP1FfX18d2eXRXkYjgLx61zcWAb89HraCiAgjTEfi4ECTfX5cgjBgmWaTJgKvcj2hz3Mq99",
  "key30": "3Dw4Ao6hf9TR9MYTNDyfSxvscZ4f5rzZRRSqs91Bwnnm2NMMMZXYtGzHk1TTdiDtZ3mfHEixk6JyaRQp4BinYagh",
  "key31": "JLjxRBw3H6VPfsCdBNixvsSA6KesZszgrWxV2ZG6cJWMp4Zty28oVhJE1J1pNEQ98Hgo5M4myAc9pcSiKWhqR4G",
  "key32": "4eTXg7td9UgPVpiABcSCY1A5mexbo9h6hAfE7HTT9XtHmPFpym9mctH9zVfL2XaztADyzfchERih6YYkxHCTHHJn",
  "key33": "4vfeWvZk9LK48ZaWoRqsbEUnHqmJgccWAxSSMTzK1A9J1BdACwbxMhmLaGRCWRrBWYKZ4kumi2HKdTFfipWBj4wg",
  "key34": "2yP3CnGuUicyoiSy71R8XkXfyQ1WrFhhaijRGvuwLPzPsq33CwVYYwqe3qkPS1hqDjHkcBKHuEiJgScN7XDZDdSx",
  "key35": "3g1CrMJwU8e1xbAT4AeHPzZa9Gkoaxn5rKNJJdFGYEnTChmod9bA1pczhj6T8jhjvSsmbwVxPe7ZKZa6JJibH44B",
  "key36": "krVQ8Ej45hyiZTHGd7bpuZ1VP7dhNf62D6s5H82mhTh4B2Fyzh6a9mu3G56UYtcgAU6G5eRFTFw1js3FGtcYfvN",
  "key37": "2ePkyGrnrBWhaQgfr26eBytRFWZ3pb1DdScmTUS8X6uFGSFvkqQyWr9gjzoLzs28mpsjag81yWQrjUvxB2GTxDuB"
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
