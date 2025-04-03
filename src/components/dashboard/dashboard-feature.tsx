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
    "2G1c5qFoudqypTHnsfo3xVepU78u7dtDuRgvGdRADNtMU1yS6MZ9RptR8uXFpXfbF74JTP4VGWAYq9xADCro1Kxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzyQbvucYfJbA939VqzdNcZiMQtVpaX6MVfBucsofNNUYnGUUEgTzadMwBVAV1urTohFsFSTm6Za76sMUvnh1o7",
  "key1": "2MerGwiysAVV1GvBrSdxsoFaLpYRk7QEouXDeR4DdJPvh9LfQp7Hpt5bRsw4ayLTBtHQ3hNvxjRhUEH3ju5A3aHY",
  "key2": "3pHQmeq8kGoErhQNkb7evoW1JAzQAbMtyTufuLQk8xuoV7gerfKavFGQFJ817vMu3hpAUEeVD46SiooHYtA6KP73",
  "key3": "4WsJv8z8nuganeTA9JuUHKJMjBeDXsKCL2kLaydMhmAB1kuHdCtNqJ886SkiWidJ7EFiQdYqT3EcoT513FV2rtJE",
  "key4": "BxSTUog6s8ULfSGyUs1c5adhvebrb1UgBjj5crzzh3Xunnorh1mY1iTYiCWozRaRy36KwZzsZUNoXzQkFLioukN",
  "key5": "2bBiSjtBFcrYdVQGWF9H5SWLz5imKYbEkvtNxuTUqzuihCfA9gkhW7uHHuB1fowQ9Tj7tkMRbGzUXnW4j8m37WxP",
  "key6": "5aPb1ScgYDeTTExWc52QdeT9akaKG22ssr7BVDbSdPYTCAF84SgVPnUu9zgWRoE62Hq5chXENzmhayCxacyg3V2S",
  "key7": "5CK6u4mGhh54MdfU5zc8T6s5MzcsjJh1497NBRA8JaRFpR5Hrf1sifMH4A38iwa7DwvCTUbLwbiNTftAqoWbAQpf",
  "key8": "2vqb7bQVEmKp5issHMVEsmm7SUjRsdFDPo7pfJrGCVVcP5cUGYhw6SDfS4z4UqJ2H7L5NBtsHQByo24VycxLnitG",
  "key9": "2UPvbFB5ov51ht1RuKw9mBqNgEn7ZZdJqMz3iBPGs7m1TUVHndKKdq5QvBsWvD4ZgfVu5VvvotbEqWsj1R5Ppd8B",
  "key10": "3pUaQz2TPHUjgDJLdGVNjkbuJ7Zvwr6BKg9k3Bq7chs8ZRSSnKXYBtKDaTQSH16Cr2qpBXohebicmHki91HZwGGq",
  "key11": "2hw6LBUsgvPwptBm6RuJyDdBqC61Qm6wpAoQHHaCMx5BCoWyScXpf7HU5CxLb6YC7BzBLv3VmFW121brWiUSs6bF",
  "key12": "rmuGkkJ64L9Zt8k8cXK61bsD5b5JCU2GvSep2KuGNoEEyPB3FwxR533p8bkLZeQW6HnL2J9zWVxaA7Rgpd4r63E",
  "key13": "31TQ8hsFboQvXMMUg5FFKCUZBAtJbr9WjKm1dxjzJhdSzQpLoAqNjXBLBy84iF5C1cMML2d5hPgAKwKSK4K1Z9xd",
  "key14": "a35DAm1nUrdNpYV7Eh7r5DKgSGSUPsNeCiRvnqbcQzmB6ggShN5Hj31M1dMYoBGNYXkxLtiYUaq2uDhFpiMY1ka",
  "key15": "58Cq3aAm3WMxE9EdfiATGiM9vYDKyQeBaC4RW6hi5GoFgxrE3DBuG7dCmiohXSGizyA3U8j4Af3MitdwwmHVfpET",
  "key16": "5KGYcGmC9WQ7SfYyUrXMMuhfcqcMFS3P1DenciGsNeduBwW4mAMb5s94e9tW4CdRH8eZAhw8GcDbi4r7GVutxcna",
  "key17": "3pSHT9gR3PSzUeAg3LgoFdMS1maXVWYRHH6csvcFQ9b23FnfipVfwuARAA9jr3TxccdkusqwWFxRTPjTs75pU5ZH",
  "key18": "CLGbDzLVwyPTZ9JqvuJZfkb669eeDvKyZRTzX7nW2FJpbhMFjusVEgfWtvwcyvizZrHf3Acb34kaa5CMbEXDg8s",
  "key19": "5h5hTS1WEFKdnLqk32q8AnYuovqQPSa2r66YZ4Tdg2yrwonUpB2ex7VKSztcqouPazdqbaaJsgxmFBL8xxHa6TEG",
  "key20": "4KeEoLmWyvdHBYM12QbvwDyCgf6uNUMxi3SR36vuV6RtVo6eAWQbraaYsM7sWcDffizpKCJeqKWxrPEXxJeevkHE",
  "key21": "3xyAy3mMDJ1qjEj5tbKhvgeHjXvvteajGFtnXZWkmMT7n9jeD17u2uoKTAsh3dy7TvdiGs2LTiLkbUE4kviKcHC5",
  "key22": "5MdRNPrm6p3HKJgGF7oobCFL5uMfZLkd6QbT9jhVK91NFbb5VdDm53HkD4Xi5AZLLmm8AbW9WFkHZp7gKXxUPyxM",
  "key23": "66abbbjyWQ6ij32Cb9RXwwMELnr7wFmbYovKxMzuLDoPNygEoxsNRSCnWmsKp8x9fKN9bmUgMJsUt4gPjeatHCq6",
  "key24": "hFPK3ELtAfsKYo9jp8XVzyWcNTnkJ8ZzBnyy238kwFhNCiKNfYfKgD9ufkFzierCUx7mkiN1LzyvzDo6SLxSLCo",
  "key25": "Nb9kwMB7u5hWN2ezan64iAixQrEUP8KYdQ7VQedq4Pag4m8wU38n63tCVd3atKmSPDEMEPZXTEjc71THjKhnkNs"
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
