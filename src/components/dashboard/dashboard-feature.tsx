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
    "2WfgsqdXd3MwpZPTPvEZyp9RZZkDDeXQ2m8LEPAVardRuz9fduP3eYryUU7qNxVrWNs5qLm5XFs3knyb5U7kpdfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSxyFZ9abMbzStX6QsxXzPQBkuR2w6BjwsojKvFPP9uuMPYYG4zKxwUg1DEJi8DAdwy67BKAD5NQ7r9WrdgmdNL",
  "key1": "2APbESBEyxiRChs9t9ddAnNGHQWGaXxmnCfhevM5hAkeKvsTF8E3QXqC6q6pXF9GBeRvLx2PZXG8ekfqooepwTWb",
  "key2": "493aLRnu7QrfkZqfRhjkLPgAqFytxkbB733SfmAp8rn5FgwcaNiKUM9sNs3DuPcdNydBh42a3gp9UTh6oq3ZBnKH",
  "key3": "487ktxp7wD6NUhrEkFDbq74PpmWj9PK4PvkabvFQM99rZJ4aMDw8g3h4PyhpuKja7irFs4LLg7JQQ325Qx8FgV4M",
  "key4": "522e2NLFavZfFPBHDxYywgHzpv4tNnNn5cqk3GwN8AGYniZ2UTje8Ym2gb1PfB9q1aVchPiVNEAuAU4Qv4UTNAG4",
  "key5": "3Cm9tP4tRz1ScbR5jCwAZz1oDaMvyDUoTDYURQk2T2krKFCL4DZvC2tKYAMRGLVEp8oEoXqY7DCxywCawMxBDtku",
  "key6": "vhD3XEsfuWYUJjS32kAVz6eD4JxFSKgwKLdf9tKx2UPrCwhAcXU27HvBbAF6r1QffsP6isuASiPfuXHJBUZbff7",
  "key7": "5LBzH6kGE8rt4EeDTz6tPYuFdWPhNCucC5RTGZhjtTfHT7DmdpzdkUMm9FMvumSWF5Fy62Qt8F4WqhWWPU2smth2",
  "key8": "4Gvjxgdk5gXBKNitQywY3noRZ5ryNJR5zZm7J6dYzemQSYCUymNqMztDyPWiKnPtBR5kBWTyVxckxkQLXMvYtsHC",
  "key9": "4u9P1C5s5ZgVvLn4RWt83EpyhjQBWtAbfmU4fdYuEHTSCPxzyH6r3bvQKL36inP1DFRNb2EsZWGPozAeAd3FtB4x",
  "key10": "tfuxUPd3rxFmnP6a9DcNfjEh3GvJLdx8mc8WuFBYqjwoKheXM29zh9prQBfp9efRETqU2x3v9fyzohrxV5MArQ6",
  "key11": "5m4ddiwKAFnfr2GcwGsXVxs6bZujwt7jGCT81B7iMHqAVU8HbFor3UUeWgwDLJxCdiVAnK3ETSgN6vBUqhsgWNuE",
  "key12": "2AwgXySQVUVXpWfUntAr726SJA3XT7SY4PAsshT95NULHCsexN37wsaJCukYEbeDt6eS8vjXQeTQ7tJeQAqyq4Kj",
  "key13": "L4Br9ry8wiWq7JC4PEpr6zRmH8MEfSjQgmcdFLvwUfiAchdWLUv2s9q7WB8zgYyXb71ByHZukiTHgNk6FxbP1X8",
  "key14": "48jAsTKExA6pL3qi3bKHrih4f7CL8ZwZoBb7hHG2hFkLukyFPtRwzZ24Fapqgqc2QAEG9KNCcX8SunGt31m2MSqr",
  "key15": "2bVv2hDGBkoJM4Y3Ks8PQUdXAoo9tvjhZq6dCSX7DH8nqHYNE4839FrMrKrp8WJynonLdnxMTWBQiY3x41K6NS5S",
  "key16": "5Ef6BbqbQqbZwDRiNkfkz9h7hTKPbUqvtAFmGABZ12U4J2fWTUoT9fU1c2iJnobZ2XyTrMeKavTtUKvPP4DjbfL3",
  "key17": "EpMSWCmJuQj2iCCmFkTpkZHECAurK3tPCeqozh89wmsdWXJGSuHDFRZ6PGphUcohu5xLvyhMfyhpESKNrFe4xYs",
  "key18": "66uweitCw9ezVfaMXj4ch3XmP4Lspy2TSDfeV92ToZH5TvQMohS2SF5TWvKRxRo3fyerLzTWYkRdNd2z5Bn2hfun",
  "key19": "5f5h8znTecGmmRugZpSBuQ5U63vseRZkb7ctAUzV6vm1iu2UzUrY3oycLLVWK8DCrYR7xu4AN5scc7ptddvidM7Z",
  "key20": "3p3QUGGKanchNAiipvZWGZJgvsc8YQ1TDmDvSMSFN1Ms4Atf5vtDs7AaeHRgm7D8rbTznjAe9RrsYFyMU3FboFS8",
  "key21": "4i9BH8WBcw6GVe7Rnbz5ka2ypQyGj3g1xaEyaxQtDB9TfDSVEyBgmjzRJBmLJvzCfEf5pnd3JPLxXZyd4MrsKwVx",
  "key22": "B8RXNyoPLYu86P2TP8kvKcFsg5MNodudCEe7p7s5tQKVCppmGW58ucvJadweFcmZPHtTNkuUUkAU6LC6nS3WNxF",
  "key23": "xivKknwtr66tj9TaP1hsLGtxcJBJYe7xGPomf68Qpm8uiPKuVKfoscyxrCctWCuUqJxHhWr8CpY4LGJr2Qh8vbV",
  "key24": "66LLnAphm6UQT3b3L8N8GpRxVwncpQVJQ6zJsTyT7Ug1ocPVqrX9tToKEe4y8zTAjACNWxEXFpAV9A7RvqsrF3p4",
  "key25": "2AUmz7UhT4dVJ9ut53NLHToWej8J6Kw3MJ982BqDMmmrFa8hFGGir5iPV3i3hkGT7U4vNAELAqx9vcnoAgn1HCp8"
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
