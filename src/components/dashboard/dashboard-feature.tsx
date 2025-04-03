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
    "55hDsPhkxqc4iFXHBZeZpwxi72t1PdS7KTtPivkcTkJLVwsGRCtYsgT8SCuyYZCeUZgMRvknZyP5aLqkwjqhiG7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kcru3Wc6Ya4LzfNg5zVMF3o9XwHkhoryv9mTbcRmPfVCF54zXazR8HSSFyWchNFRzK3Rgogt5sxMVUfoRpqnK8L",
  "key1": "43DRRqbd6YuFELDqkmU9GASzd6Y28rhFFPpnXLnpndbNvoCWuvdaywJje3HUWJ3HmvQrTbzLj1ivwYX9KLTTePWR",
  "key2": "4dsg1mjrw2j9uNrqCX8aLTHrCbwXVCism6tQ66JY8fNkggtsV4HmNLkzKq2uzpddpH52AaDuU4LwmMqTEvfn1L9d",
  "key3": "rXBDYPJNHMjtYxQNM463Zx6tbWP12KFN5kgmSe7NyZtD1w52UE2x5KPasSnEUFjYWF6BpbiCses2tBMSoYqV8jU",
  "key4": "5vHJKjRnLyeYbHqkvF5791KKSpsgyyTeYWUJZJbzVhXPx1RYFgxQ4mcrGouCrY2Horr7Vu1h9s2JvQxVVjb8nPG2",
  "key5": "WmcviUYQd5B3USdASRCG7z4cRWUGkhAc8kJPbQejL1XQQttUH8r7LL539SyoT2vrUxAaV3i9uwoxpRtwwnkckjH",
  "key6": "61kmq4GemtCLhGNuf9W7mkDn3YLL1Eo3v36TgL9TNzudu96LMiEHSzL1xVh8ZbD4WwLEoxAYfDpSLoXEipSX2gqz",
  "key7": "4qEEosXUUg8GuDAMimUoXR8UKQckHMVUXzWH78rhM2CtjFKbgCgwrvBqVJAQgZ8p5KpEfBF9wnPvu6bQ1fVSuZaG",
  "key8": "4CHKYeW1Pr5j441QJXBSJEvR5aA6BjYnvDdnDsez8Dp8pbWuprorD9afDUT3n6curWQYftXVVNHF5HLcbCpUSs2G",
  "key9": "3rvqxFi94UqgBGnTjjV4BHMLw5czvEr5qDy2wW6t7KNTcccD4945LthoUDyS26BZUB1s1nyncr8Y3dSRVvYTRccm",
  "key10": "3XyTVNTC9ZHkygwTm2cHrJzfB57xjzt8UbaVXeb1tyJj8R2N8UKvsbveoez2cxJKNHBezy7KRnbPk4NreHgdW1s3",
  "key11": "2H9VRgHXGF9sBHaJqx2WCuEhHCpoeCkW1BMUXLe1Bv39fSREDKdwVVNaxBDg8mngiSwa1UhT4efFG8gsMn8As13h",
  "key12": "4rG9uiMsJocDHCHuPJf9i4RYQ6UZWPgQKAxovqHcAXbmjR5ataWbLp9LYPnzZkMAUJ21Xu1AmsAGdDauVuqp1how",
  "key13": "5VL2PNmeZpowyMpX6WUEi7ChZpnj5pL95RgggYW9jegGzLN1dj7jcmLPUt3xMD28fGzsjCp7suMf3SkfmzKUHUVg",
  "key14": "3SYeKpjGgiikv7XdroLXknt7LR2ei8xGoNJ4zxSSWya5xYMC3jcGLM9oFk7HE99jC7mGCGDuwTXah9hzb6PNot7S",
  "key15": "4rerV4AtUkfZXPVByKHeAE5oHuRZvYgsC9vrTpv35wvP5DWpRJgwWAo7YQ6v1JttN3QLZsm94gVmFfrSSEWDWYkz",
  "key16": "25cTZundYrSwG59BpkseYbVAFKgMQm7X2MiQmG3ouXnYTifXtdgi1t1MvbSzbZRreKnka8pDeQeJrA6eSenr6dRn",
  "key17": "5NG8hrFJcxnK6KRW37Rc24jhJ1fMCM1JbP2ooD7FDjk16uNrKuRfuWCTCjeKswPN1mmxJkeWGuGF6i8q1fCHXxS3",
  "key18": "5qXku3y8bgTBLZBLqqf8HQn84HZoDdjHXRkJ916WLFL2FvPD1aJUnUUy2kqqHGtMumXPnV2Ph27Q45G1ovdoaKXJ",
  "key19": "2fKyUjD8Crkxt1qL7knBfsLEy8hX11q2HNvNEq21diZc6TrGMJjkC8dqoHdxHSnofZWQBRjRpKHo57Qzsebxsm1k",
  "key20": "4CKJdmfMLQ9KcVU2JV1mqYoCi9WwE2H5LsUuisR4HvwNtT8uYChFBRr6oWbBT7c3sP86ByEuie1jhgHtKEReVFjb",
  "key21": "5qdCEmcaNgRrRkeGDzkftegQNdmf67xEmSEAzJNGxzg3c6cRf5upvKq9hDdzToMisDnuYNsW3TawH8AJtfSd7m5S",
  "key22": "3XQg2DCcjqjdky3Lau5THhcsKLmZJc9WzXsYCcBMqfGiVTu4MrUs5bsQ48hEbkn8BGYT4PN69c3RhYNPsG3Vj5Qt",
  "key23": "5ZseEuURx9dB2kDjgGLqQxL4ijmxd6EGqFCcSUeh2eeHnjrxc9eRRCxQa6Fib3h4KqJ87bmrnaQNp9oaw1V1ZiGi",
  "key24": "2Vc7CNqKQUesKtxfh24PDKgRg5tLba2xLKyx9mZC7DtZ4ikRJ6gGJ9AuVJbumuosjjw6zF6MaTeWDwmtJ2Xh8xUg",
  "key25": "FpnyECjQDeB3sHg5i8dRcjscQ35TQzb43rUCmMg3E9NaF66fWwTxx1wgfr3bZj1docuFAEeSfvPZx6GQokE4swS",
  "key26": "5iHCnwxAeGfhzNJBR5Z4eHADChHHXjhQQ51BGqBZ7ZYU4Su8XFt9V6FKLsBr2n492hg2UUWdJCR6NZ7qdNURv5ii",
  "key27": "omMMNcVbSzhiZ11Kg9ZGr58uKps71L7kvrQrtThHQ6xiyQQzkjptXWywfbBPhNAHTdQZf3tVQtubkkRuJ3NtEtF",
  "key28": "5nieKWVYxENXy85311fpZPydj69f6T4pQu15A7VfSurEsxkzgqAYrX9S77PW8QRan9AvEdFuVjgGywhWXr3QkYXX"
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
