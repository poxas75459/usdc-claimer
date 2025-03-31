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
    "x55h9ax9FEBu5Q8BR68D3HvG7sdz6UG76ZCsecMS1rFJaMi44D2wcZKUaTqswfidaTaG48wSMRQ1zQ7tUuxdkej"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "372nyWpBzftfvaqqqfrAG9XHMR1PSZbqZnBpMaupSw7w4xNPwuC1Pc6ueVzfVi5YTCoYqiWdazo1fKcFg8qMQziL",
  "decoyKey1": "nLRtFpfowqW2WpWGjnzaTVMqqV5wE3i7kWanN5AaZeZ8SCcxLRHKye6kDUV2fNuMxfrWkHryMwPNPmKS4PL2TDq",
  "decoyKey2": "5JNDc8zFnvKv9hhW5jHMvU2Fkpx8wBTP8SVtAjTaQSXp7ef7prZuHwTZ15y2cVXVc3b66kgrdxTxSF2hrEJQYnSf",
  "decoyKey3": "5J9fZqD57FKhyjiSAZwt8WcydZtgCnu71To62sVox99TzHEtxGYWnBRnophFAsKrgQVD88dm71GcSLrL2xiaFGNA",
  "decoyKey4": "4dipp7K3ZfmPkW2LHXDFfoY3aTTaaJYdbLWia8NfKsHQwmvYSqEpMEUpoVNixUJNzsv9UViGpEt2gwizM6fAELkn",
  "decoyKey5": "3E51HpAZySN8scHnrnTmF6YggjtGfwengftNEcdtR5ex8oJ84g5cGNMFBCa4CxVWbxFHk6m8fweLEwJZRNbvDSZR",
  "decoyKey6": "kpz5GKWLX5yMkhpQ228TYsNStFUaeRXFrhjjdjFkDN75snDZq17nipkHA45rBDvE9scg3n3sfLZGhoq7i4uY5GK",
  "decoyKey7": "3sw2EwtBPH2wfwTs5nbZgXXcyreC3r1cmZEKG2wzeXT8XfnmWiZYXQ4R7ovcXy2HJVymDoYCNS29MAL5F3cr5wkb",
  "decoyKey8": "4Jz2an6zwt7PpSQk3T2GxNfkmmxfkkK2vTu4N7daCK7VrbZSn16Mr2CaXRKTw2R5VCjD8voFeb3eyTzgYdG9hnMS",
  "decoyKey9": "5wWThAQSpkNdRYfYvRXvtM8VVTrY15eTg7z6spAyyWVssNBHLL64cR7r9wrkCDTKn4nZJpkTq33N9aMf5xz5LtUX",
  "decoyKey10": "3Ko4WJPJ5gzRGNwp3PRARL7Ro7RtFezj1WhHNXdT9a9srpsy2VnjMBHRjc6aB7u9dKk4yA73cCCNUMYAJc1ZqdrX",
  "decoyKey11": "51CU7Gfd4tu8NMFVss2ZNV6pMkMkttGaRdcL9vx9jKKzieUNUSziSiQwp5GnYhaBvY79B6TQaVRM36ruxB46CzVD",
  "decoyKey12": "45vpqHUyJe5YKEt5uTkAdYgB9gcNWPcRt6Gt1t2NSC1fCdYbpogdtHfMwChcGPKx6g9VJd5GxaViBeogyj7GCG5A",
  "decoyKey13": "4Qb4jaQuGWNq5uEabktijgEAVFk2t3DUmk2HKwdAyJiCaLvp1QNjRMh1XaPKgrGT1Jysjq34XbPYeqEWVX5PBFNs",
  "decoyKey14": "27Gxgxsbft2Zs8SJHbPkkjowNvCQJNfmFkX95KLmx71UbmhEw8q6udJ2d3p9CG3BZZWSfPTkdfEFHHzFEE4gi6XL",
  "decoyKey15": "2pYsaWoPjGsRwS5KAoqNixyS42uoenbnfH3U7oW4jV8tSBy9KSFiZjhwXmnUe755tsDhjBi34TTonZH56tiMKLAP",
  "decoyKey16": "59dNxiQ3kKvefsjb1TQNKfXpqWuvjXUkXe91JoVfvSfGWrMSTXv76XaUhwQ9JK3VmVscwQpJZx7zqQb82qhS7DiA",
  "decoyKey17": "3eqUAYPpt9yevEu7ioguLxJ1mxuoq1UaZboWrCedLv8u71oGcNPchPq16CnxgFMj8i2nVu4NrzYiCtrBUuzsui9W",
  "decoyKey18": "2VAK8uHSoghz8yahSewKUKj28kZZnWWihRuwwKmQjkQHzWwG1HNuGA3aQPtXv6me4AarejNxBwfpZSfzMgHpQ6Q7",
  "decoyKey19": "HcdUgBXa2C7YmNmtEJ2b9NZhbUonZqAcHUjSxPZGHbJePwb5vwwRC9rJJmowM35NYcToKLsSS922bdkjDTJVX5Q",
  "decoyKey20": "2JueYfrq5v7AtpcbDwLgdB5HyJjz739z5ACB4U7kSG1fEG38tWexBY41e3n28vKoUALvASDAnz9WpjhLnmTkXygr",
  "decoyKey21": "zvj9hHXKceWU5ytndYVjWmaZdW7YeSVmnifzMUxhkqtGMWkaALv1MAHRpusgknciA2DVbqLMkuNZttmVZZEdnZy",
  "decoyKey22": "5VB241DxYFyimzCg4TvgTd5PFgPrMvG4McNMbdhjZQ1nmt9jJU1LnoRwY6nPeTgo2Jp18sVC9eFusknebHJRG3Y",
  "decoyKey23": "3BtKXEZsa9SZeM3ZjsP9je17c166y6vEJRo6iugHa51GhRkVbrUqRiUQSWhy5mEQMWVCo2L82yFv6DiBwVEgFsax",
  "decoyKey24": "5KRZAN9E8QNa3beddn38srmeqBhtrZ9LBjSgVynmr4E9Sr2FHxWGpETXV8DR3XhGhUmoWyYF554MUvsBUBgE8cZm",
  "decoyKey25": "MenJ16kG9ReTjBL1xTNw5rqWTAuKBWrz4WeS275uUnegnj1HhCpz2GdpVS2LtyS63pP1MD6auiJXMnUHGS2r654",
  "decoyKey26": "5YRsFhfsSPHFXk4DVMjHFZxjzeD1Ku3MRRPpa2gbqWhVeTG8Q9FPnVdhCo5Zd3dsVU12Bq9ErKPQ9uvrVkKDhCTT",
  "decoyKey27": "uoWautMBzdEaNtecPSHHRsnrYW36We2fVE3gaswm3Vynt26zi62BWbCKMQGykfT7dW6xifyCBS9QS6jKoEeVd9x",
  "decoyKey28": "5Ab4uF6Gs87UzdWKqymnQzAvG5SHasUFHe4anhwX3gJiAP2FPk4TqKUaZTtkzPMyUpeCvj4ysoyVjhjZGFsxSC7h",
  "decoyKey29": "3eUWw7FQ7FBdo8pC3T2AcKnBKdDaTywuJr5qWUN16UTuFko46WywBqM3ipQWisWFAMFdQCTSVTDdfV9tZ3EQosDM",
  "decoyKey30": "5qQXdqoBf7LSdXCjB62CEkti97a4ZCVAXEV6gGJYCUPxdbeKw7JDGuDD5kMkJfhABBHb5vA9RNFcEvNnyoSthzUS",
  "decoyKey31": "5sKFqoFgCHZDmvcibXmT3EMvTycWoyMVKWZ8eKuUCgheZVGpoD57C2dSudou3xTguRwyem9KptazsKVVR74uHSZj"
};
// DECOY_KEYS_END
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