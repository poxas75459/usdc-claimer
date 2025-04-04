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
    "37y96ECqt3hzo7vcK3r36VQZhD2d7dsm5XsVD4RVAFQj5HGUVXSg4AQyQ3Am75LPbssqynp8w4cqL8t2kYdZkVVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tR3GNho1sheLBpWQ53yahh1BVkVrWtvnCiC86dccPP12hCmCfCA2ryW2nEBGDbzTgbvPpAdSKpR5F5Z5aqWWwNj",
  "key1": "2NZ1GdLZQH26Wve8z7VnCvbzNhJGovKookeAzUsFstBvo4MJmemzK5Z7GXsdRdnYRsVsdjPHzd7zjMzv2VwUMgbh",
  "key2": "Er95tjbRsrd4maW8hafuDcpoJPHifJJodtNUH6QXZAC5GffVnTHQaH3nrhcMuArH67df1VpXjhqXbpYrtF6VfwE",
  "key3": "mAYXU6vC8wBF7ukXi2DkG14o62fLtujFiJ8u1dKHZMmELjvpjS4HnsuaKSMEpYAyN4L5SerQYeGRXX5KVEccwct",
  "key4": "5yQKAjm3PtzcJnvQnqvforXMWUwWkVoZ14hKsWw1mjPcmsX1YgyLE4qvwoZBQ1xKLmngu4SWV5BXWhfiEtCYsDiX",
  "key5": "4jaAVK8QsLTN2aahT4wkj5nqGRaiG21nfsHPPLob4hvE8xUHp67jCtfC59YS4kjyhfNAuC4gBJBn3n1DV6Q7ATQK",
  "key6": "4uNCLguWAmTaufB4aRYJLtn5dbz7WKUrEohuk9k1uHwJCKj3CSC6yBBqYXYzV8CcS9DKLUsxoqW3BSzFmJH2Bkdb",
  "key7": "4ouhxsKsfvcQwsUXhBdLFzS2VeoYqtYHpdur7S4o1uPVqomWJrjf8G3oqxydNP8MhUadCqhSQaHkX29PSTmvF6up",
  "key8": "53E5djntSSKCGpCUQofHFc74aHS5KiqL4UiY19TPi9uir4onsecjdvaGdLBYn4C3hAbJPQPKAGQ1w453MYYhXoHc",
  "key9": "3GedBvHPcU2cZrkKddRsGVHgkCNi1U5eaRTxmucQGaxV9PXmKyvDRzMcRsD17GcDVmJx45qh2NQEtnXA3SXVkWLM",
  "key10": "3WUYJeBXGKX4hav6JCzv7kkwrorhcUBJfEQEgfEa2BhR1RZFr76kvvJgACrMXJQKwzRh2Uxptdy8g4gPx5mZ88d4",
  "key11": "5vXUVbzbbD7DYDc2ctXnExa5M6ksRa75kApefsY7qakRYZd3iwkoqSYCexvmZvmraFgwMrBMizyaQU9GyRtshYP1",
  "key12": "23H2UmoE6vnqS4ruGCrhx4pvvvphVrSvXFoDEEXzU4on8XeRZawbBT2tN1kruV2rGVVeaQ26oa2Ar4iCEfjuiiyn",
  "key13": "3W2HfKEGgtAegjd5K1QgNFKPf2UDizmQVCqHWk5TeE2kq55TX8kAbfecinCUQqm7AoyvXwvS8k4Wp3CLyCMgKH9R",
  "key14": "5882ZfbbMTir8KaQhvVMawu8qFLHw8rByr13P8ZZ66DM52uC6dV49SZTU7bcKgB1MTbj7Dkqaz987JKGJJcW9Qqa",
  "key15": "27BZiEMhBhjfDDNr1xogK4885o6hyDV7rr6TnMwedJD1uT5Qbs2Xby4CexHMc89aLZ7w4DZCPRbqcoGktt16DzPp",
  "key16": "4Rn5xWeH6gijvnQKEi2AAxVJ1X2o1ZdXUzXLxx1WqN6M9E3NNxJtEyk5F1zc1bJ15oJjKrbXUVKTaARtF2cAhE4F",
  "key17": "3En74XKvZktSmmyEYJU9GgosUFkbqJd3HiiZXmyCDgrjkxJzEAZ6VJwcLwjQMdYyaDxYHTzyxmsrxpKjCaFCkLDo",
  "key18": "4otCuEn4J61tEkDgfCn5fDryQL7EChaSwWjEjmv8dJaqX9AMjXUp5pRVS9M67cTiy3aGdDNb4NL6Po6C5RTPF7wF",
  "key19": "36AzSKWudmeFWydYboE1teqnTHHJwdaR149jTkZiR6zsZvxNLQsHsJZtcofFGvYZNvoGYWn36ct4QFnWtkZUBmuV",
  "key20": "5DJfhsDLHAERCKA4Pn1rap1qgvHpXFrLK77W6bCYGpoGRF7g3dVbeKL5j9yRFE3CS3vCPjkJqVccJDatJ28Dmmkj",
  "key21": "3BCB8agVmPkTXwjCbLxHakhQG595ptThxNFvhX9cVntfEB7za7JXocDTs26DxFLGk7UaeRKUU36R6p4Yv93FfwAG",
  "key22": "eCWQese3ExWjw7fSVYwvCkSJAbiJGW8EhTBd5mAd7y36WgV2ktGPzEuhXfX6BcmzaeNG5S46c12evc1gvQErTaP",
  "key23": "4CR35kD9z75CrGTDTWZD9rzregHVGp72bqS3MJfUrhWjbDfjHpyYSXA27Fpix83wBjEyexGAKqeAB3gMN7DNaEHd",
  "key24": "B7kjR49SMQYmJLC2TSedUBZ9vdA5L1DfMS7KMSSod4kRogSKtTpop2HT8kTe5okjH4DEfz7RUtSmL6EMHYJFCmP",
  "key25": "3oHckjmT2S7ARij6prmGgtDfL9bzvE33MdsufyxMod6KereDXRkomqHDKsKaeC94Qi95mgksyMUYaD1J6NpK6d3i",
  "key26": "2EhqZ6HXu3Sr5HbpbqSeZTstxdMsHfgEtvRTs3wPfMg2QF7pKZtcofkV63MDmA1iiBjP3DGEGfe4668P9NWKwSWD",
  "key27": "4AUa1sjZomdgobhX7dCtufJm9YMGGFkoWTie6ioiar2uHtp1UG7TXJiSrEvJmQh8CRgUSvHNHYR52MEvcoeFNSNR",
  "key28": "4C6TpcdwyNkamcEvEQnG6id19UTvHkM2kR2h1kPN3tC7DGaTWDwZamPv5taVQah6vsBDZABPaWzNoRthRp7PNY1X",
  "key29": "2hDASym35jYHMkK7MychiFSRB1KT2xCEUFi6wLk6wdrti3mHuv1fnDRPRxgRDtzqe88rWWgXdMSNoXXkemNDJTQj",
  "key30": "2gySCQmtuPscJMLozvSyaJ9AMBWGnvbbRtBovJYM3r72nV64WvQP8AdVFgZu3cJJAF1VkerGxaLULoKv5sTRwg4y",
  "key31": "5NMCHsdzCcbjLTNsBxtV2kCrmtuEVHCYHQBQqKVLZHJB8CyanWyJM2LJqdCcG5f1QFDvug39dDeqCPWsWa4tN4C4",
  "key32": "QpCjW1KLCFmXi4titeAcBJdSzrDhZcZhT82p81it3T2aSfmxx8WQJ5arZchrCahkUjWCtCYbSzoA1MWza6mcFvc",
  "key33": "3zhFY4UkVy8yqoxnpSKR6wvwTSmy4rLMdr3Re7Y92ABGGtC2bSdaUspj6fxiJoiaPk2Cu6TGm1Bc3DmHEaBgMC8z",
  "key34": "3soxsP1m4s6TRu24fccNMe5dkpYX58sYvK9juFyqMFModsoC5xNKMirTLFwSF8kh2Jq4cQocAH7HJzAvs46DMEAB",
  "key35": "37Af6zeX3e5ZGnZLvDPpJPW6up8U9GfWy3Yvg2N1Rm9cSLpvwuGe6eg7cGeyJUgZwNdyyYCTPkcSW9jcNWiUoJ8u",
  "key36": "2CrQoiv7348xs6RbhrGtvjShWcVvPJRNcYf99QP6TUF4azXTwxyyjJK8CXA7Ei3WSN4M2tg6HLsbNBbGPhtkTV73",
  "key37": "34FitdVvG81jAUX4fzxqjMBTHZZthe1F2MXLooDwmhVupC1xZvjxJTUxUG8s7fNGz7YJ9Qvdpx2WxZxypYiWbMfD",
  "key38": "UYEn12AAbJoJcakB4CNSoYPGWN4xiYq7r97jJgjXopsTJ9XfjiAxVsg8yT2sCqc96LENRUFf7T4M8urefninuJi",
  "key39": "21Swfd6hAKTgqs3FgPZXqtMbyfSX1GrBHSxa8rCdozkFzvhFwYhfGisACRJu6NKuqtBjZhTUe778P1MRyQt6cxTc",
  "key40": "2dUBdiup7rZs5MLWAdLXYF9crTiqyYzpEGuBYEsv7JGrfdMc9hpJfM4kvUJkzxvBboDHdz6aMTG1T1AfpV5Peo2w",
  "key41": "3UZvXyH3xoXnkKpcEcco8jMmFsmZrZsmhE3qEkdvEChivLjePZkN6Eo5StJ9Khnbnyxd5vXJxoKCDwFbRtwikQ2c",
  "key42": "aQVRLesokuoJWBqQa91V9tbfiTT7dSWm9pjcL4S5uzZdj634aBxH9rXGWPgoootXt131vRk26ezajvv5HGUwFfM",
  "key43": "22vHwrV5QtXM6w3Q82KUUJPsu3Lxkk2oxkpLhaYcWPzQfRaEZaCYj2nJ1eSyUHMo4UN256hxJp9KHoAobbDJokcR",
  "key44": "4qGX27eJNafYSw4mkbgXauWQKfTC1aoBpohWYB19gVgJWycj2cynofuBaFyCaoXL63JyTqpBq3oJGp54rUxHm5Qq",
  "key45": "4g26qBHhdvPXU6PB29LhAfjdNRJPBEvqYk646BTN4H7e1h2vjGzzP1KEBwqhU8HXpEap2mF8tDaVwk8TGFD13q4T",
  "key46": "3Cg1jYQwexWPvoGjD4dFSRSstGuhmPsKeuavgCSQdQgUyotAr1KVe6oGZkTcDHvn6iu9DrKtcreNATwhTyfwe3WB"
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
