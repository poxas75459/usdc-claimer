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
    "5GNZv9qifKWqWBMCpcfoLMdw8YWRmoJd32ySVqNuDDrh32TdJuzZxBYR1FMzBgGWReXNcgfnxyhiisFwCNB6tZF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYDfGSjY8RUgqcraEsiWKFn77x7WGCPV6JR5S2NH9JBh6oEeWvy777xS4mRLhe6rcJe3jVSpqpUXejYUi1dYHX7",
  "key1": "5Kb1vV97EoFCNL9WNvVCNtStSa8EUqVcNBeXnSE4cpSkZcGdwRCveUwFb777jUZ7j3pyUEWX4LBr7bsfD1GSehDL",
  "key2": "3LnjqNxQbBPd7UEP3T2Fruoic4XdA4d7MMj82UvdKcNrrdmS6dZGJKEU5VzAihD9QNpqfCU8nPXChweW29fSrXFH",
  "key3": "4CsR377SKBZhkKRuve2ccqezkbSMaCpEpRBFbgjdUqoYinPdbMmiiY4xggMXmS6ke4a8yQVUBhk5TZ22fKExbJUz",
  "key4": "6AgrXrGA7sjghU2QqXygS4Je6YNRWyiL3FjQS9tthgtsAvtmXTmeq7TdotRKDMNQnboZRgLgMUNrYfckycpSdjf",
  "key5": "2VGotppYC1auhYL7aBTAaMa99Gez63MhH8EiGbj7jGUGC7jjAT1RCuNjdECqLGe6YhusiBvLw4ZLhokzTxbhBJ9",
  "key6": "3yVbm28AbSb9rRUpKYLH9AwEMP1bkvD431DCadca9wxskdu6dGAajiD5WWBHKBNqseD6vPWuEjTkyw5S7Mov94cg",
  "key7": "5vRjQiwdKYbSKNRxjHtvQ1cZCsr8FRqMepbdcUfA5Xc2NN56naXvPGcRcDz1sXEJNWfAbzWgU7AGSWBGh2XS54DR",
  "key8": "479iCam9p763RtnoKCQ4NyPLvRZEjnJUVzCLaj13zAEya4DgfpRFa5kckEZCFtmwq21VNLCbggsL5Pszcnm6Xt4x",
  "key9": "ueMfkv7fmH3zXeKTMAotYBgmGHwWTfeUR3au8VwqYCgNn8tMRb8nttZ2sCpHZrw4qw9oWBHNr6apuVtrxcDj1uc",
  "key10": "Q9eQnD9DW5m4uAc4xgLxcxqEMA6a4odajDNwPczNYAa3GrVWUNnjux9BAaZkNw2VCe46xuQRNJd1CGmcnKTJf3n",
  "key11": "41B9JKAfWYM8sntmCKiQRPedz5hCmfxZRu8ewpzEK3YgdH3D81EiVQARpTG5AdYJqJZ2sLJ9KouR4Yw8QYLmcosA",
  "key12": "RDaAqEWoJziWZSsetrQHo1uhrZnv9wm4ScdvFQhBJMsuFuJguWftvWEUWKh2KUn4ZmY94kxKbeDqbnkUmebPaXZ",
  "key13": "8cjfFpHQQtJWjKoyraciBmmsJxoJa3WGhDu2t23e2L6MBf8CbCLSTxKB4p5bDHp8nAyDsRv8FKtLNtq2QoJoQpX",
  "key14": "4jBhR5dbgPUhpJP2ikJxpBD3tCrHEYH81opFgpJqTuYWYUgPZKDyxTbxQjwdKHMY8cjKm3YxBQXSAhmcbWYZue92",
  "key15": "5JHumQ1hzygTuCePeReaZUvsbd8bMfgCGKv8RvDAZRYijQV5tDSTRrXtPQvZxW75F9SEuxpCVdM3mVAgaMoPfFkt",
  "key16": "2iAgkCTYum4odxQ8GtGKmxxj5P5abgLGfpPb9GgEx5xYjj9wycapU9Np7N5EA6Ap6USCPohroKTmZcppvr9gkDEr",
  "key17": "5YtXHVDTmLLMka2aR8GNHgMgrqXUX8Yx5UFKX9i9UAh5ZeeK3Lf53jFR8cWQY4s4J12wza7TkZRDptqZ1BFQDZXR",
  "key18": "5MkxkNi4e8dXCoxv8MGAjYvWLznbnjmEYnvkwX8p2ELVWSm4tR8Kafg9zDpLcoDEwotGNfhEdzHRGnWWkRHDWPpj",
  "key19": "x21C1eNaFLNHEfUgkYuN5fFWW85tXPTCcitVB4X6NDU99f5jPixQ51ABCbyBkpKCfVm4o9SZCGEmkrcXwg6bYEQ",
  "key20": "5jwtvpcrMpEMJEyUHHhSA2e8gVnRAumxmRxsvx1RhYjNK1WjraaR8XRY7iab1c8NDaKihEruT2do4QNh3ZJE37fo",
  "key21": "BAg8Ga3GhHRAft8nHjin9DQ3R7EGxsH4urjsLR8ff2FGu6MqKZv2eQDoL7kTBT8vXjMupmeDuy8DV7PJhpMU1Vw",
  "key22": "4eQNqNxwxicg2DRLTzn8heAwJdcAQBQKSviaeHsShcs6hjk27GV1UtzrH7frAZ7yM5PgsMpwpTN5iFNAuqNv64b6",
  "key23": "5fRtggWurEdincxwKuUKdCkgEYXCCZM9WGKr4YpdWw4qDnnwUhJ4NFDBsMeSjy5hKUUWLLDcrBb21MCj4YDR4b4Q",
  "key24": "33aknrQ3HSiNZLSBCcUZudM8LxFb2dTiFK6gDyiQN6qLUjnTJeu4157KCBJNjdRrJ95BQoGX7DbaUpqV8Sb9vY35",
  "key25": "n6FhKkLKSsFsTamTBy61qk5yAV1fTucgYbV2YFZYhiKswHAUqRqYLULm9avKjdDs7dBd5UqPeq7xLkt6CAH3kzK",
  "key26": "5iHXYvgodrVD9hAWXws4iwku7FNnPYmZkpmwNSfqciqj8QKj9Fm39U4GDaAET66qRw2eqPt6CKJEcGik2UfCPdW9",
  "key27": "5t7GuAZVSgpB4RDCntuN4V7nXbLigqFqyzSZwahQhYGoGArGXfYignTjsAWVEJX5NYBr1J27AHf7zMaeXnLPG5TY",
  "key28": "32sckHwsCHgnTDGmr7zjZp64NF86MbLbAy5hMk75CcSWbzR4dCuHRFUWLF1TD4QEnqLwQae8Bnb6wqrWoCLtThup",
  "key29": "55NPnkDPTrr5oxE7yxYdqVt13d6Jd8K3Kvgqo6qvMfTzTSZupHN5g1zahZt9qvygcQniQe2icwmmneNQkLyAHPVU"
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
