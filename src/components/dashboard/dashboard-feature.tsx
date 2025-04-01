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
    "2NDYNwUSWGbMnFt9XFnZyxicLJTGQRqEe6ZwojUiepvM8oWFv9TfZCqAeVy7H2sQ1gPkrxpqLbwbRFg3NgNFPtAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArSYWATbSfAr4T73QHvAyLTDjbv577kmjQRVxCFuhMPsseK8wgUpsViJqQ3jG7tXFVF4fooGsX6WqYRo2xGAtmN",
  "key1": "URPVcGmrF29GxHpJD57Lj5ELSUYZrdKRB4FYjz64qDmxGBgM7dK1YY4QLhvERFuYR9ZDbJg4xehbi9t1ndpLaSd",
  "key2": "5GsmKKfZkFAWMsauT8miMLvjLjx9eRc5B3sMbPsfaKhi94mHueGYjgpgpLEAtx3SxRhLxcxSiY9Qnx5NaoMdk8Nr",
  "key3": "24gfGckFDugVVA3RuFhJic7U8gvc2A5EWKtEN6qxAZb4SBizr2eN9XeHswq6XkkvxqPJhKnGc2BAXQKTVEbC69e4",
  "key4": "5Hc9sppBAmq7MffQd9zdBT1BtjLHgaqsyf5JiNR8S8nNUVsq2Ykk7AH2HEq7VcGozUwwPEVhu8eKdayWpHthCKV6",
  "key5": "55aLC9os5DxswSdVg12UYTjiGGT2nDf7BjuwRKsLApmptiFQTKEFWcq6FBys4k33GAbhgMNTwmDXAiZUWifNYTqE",
  "key6": "2mk3xMoxigUjsdGnw2d1XhjukHupWKZ5Y11PrzGBohEvGLY9vBmJc9vfVDaTYfyKS96dgqXhKG4T9o8Vz83kJbAy",
  "key7": "2ojxgAcANUsUjrVaMXGfJRmim9TQEbc8qSJEP8W41S8LNfLNy29PsLrssfGfVrnnkkKY68qhyqb4DVruFCvto8KA",
  "key8": "2wdsL2UhdNpisxNknUKYC13fdUmrnJpmqBLvMTg3kZKeuXmxqZhacdJhpWbZvpchMtXPpxGyWxQzBuDEoNd9qe1B",
  "key9": "4VU95Q17MDo2kUHcKusPK8ZvmsgzVJ51HkRyWHpPNuqw2s5mNCnjvqHUzAEKmBfo1Kg37pkPtDzJ3k2khzZwUdSH",
  "key10": "3MZJQegeEgVen9pvRiqmdW2rdi7CzrWWwAyWHCxZn2PZU73FzFkyvnzmyrS1fMYdvfVQyZ89JFNungSLJ6eEGZ3c",
  "key11": "2zSS5QfhycouqEvcN4fZAjyWmRBDpCZv8A5CnDswFCfHtX1frGWoAjvgZHdeqeuLT2SGcMPNxtmPkwaw7rwdaAzd",
  "key12": "3x1K13T3gqdMkQBGisNsoYHMHDmf7YkgXBtfrLshiYg5sacZ23kSWePDyaXSxuLzeaGmuYbxMBP28wQ6thnHcVAL",
  "key13": "26WwAf1GQcF3WcZMKF83UnLkGe9toWiRS8irSzjvEGQsZRkoxJSc4d6NTRnCfULit9QJpMR1yaN8j5sXfJEr4rPR",
  "key14": "3X42XkmoKCPfzx511AivxRCM94XTYwGC4yaSMeZwdGJ81w2D3FWUn32NmiqQQ2nsLDotawnPyreVyi6PBfobmFzB",
  "key15": "2MV3Sz96WX57Dk3g7QTxMxWa5igLNqU4AnXFTVvyAoxGvm21wX9qvNSPhaddcJc1wuxxacvviR4CWNBwMZYzMYKZ",
  "key16": "4nK9TTMdjZR8pWzgLjJphyZX5v5TnvBayeJDNPir8RDSaNZx2rWi7sN4YC1fLvHCSC7KxyYhoMiGXTLmiMYZgpou",
  "key17": "4ophBQMFBAM3dTRySNBYUbnCB4GmZWygSCgHeivnASXBQsAtJ6hUXyX5KG57VoGbb1wqjmvQR91vN175QS4eWZh",
  "key18": "4FaRt5dX9R95rYPAy1kG4aWBho21LXAXCoivdu7aq2XvNQAGfwnTjLinx2JQcqzpAEGquRrphwfHia3ZojdQXqkU",
  "key19": "36T7nX7V1ookjtkTJL8pUmVVhegGqMDJciCvMZQC9J2s8hNj6NA7puuc8yQNqsda9Lcfn4nrxtSM4LQ4KFZDtiAs",
  "key20": "2Q2uyrdTqq24i9nCDm5k4ceWTRFky3PHesWP1neDhW1vsxPa9FYUTBhvAnQTFzmkGxRmJSTGEZWEEDWQndX7EQ5e",
  "key21": "2cWKHDNQeaJLuiH6Si2RbXVoJE2kDwBc4wUqkFKNyLNgw3TpTxmJEhiU3Heovb1ki84X7GETD2KyNsiKf7MjTj4L",
  "key22": "HxMPXm6P84boLFsBHvmPHRxnLzvinBjQEJpPy7BYH1L6MUTCLUjoLfW6uySTpTL8Zss2qG1FrzCqBY55CdLwUnP",
  "key23": "61LRfZptxddKVfBa5WvVL38Xt4mkMRRv5tw6MZtMFfTkpD6SF2cWCoKKsuEiiuHh3xXsXfvsXjbqJPSJ4Q24FAUw",
  "key24": "Uce9kLZ3SGhModh9pREAESDztb2xhJL74DupribaL4RzXnDN6xhWikxVRnVasV2Az9YiaP18RCe4Tnq2YwJyGFi",
  "key25": "31THD43oGTT9eMHrS5vj43GBmvmopGG9MMhLWaXdjgxjNt12aDNrC6kPM6wMU1HStQCJGcvMGopxhcsxD9dPktJL"
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
