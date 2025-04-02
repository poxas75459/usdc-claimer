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
    "22AgjbTGFtBGzRMhB3faEF88uuf63DWJhzMfu2aKLHYBq9DHRnB5DQUdSXCcbg8tzgStMpBEfGop8xN95i3yrVYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYGyaxVBwqNpaku4YxsxhEn2tviVSA1HD9u8iRh28Mcz5uLAeX9uMBBLPb4Cz356WQ1WHvfqnGfAjQqV4TMSxf5",
  "key1": "43qWqwhdDz8NEf3dD5fjrxRNnBPi6ojMCGVbgRcRwVrdBqtZVY2vh9gpxxwwUPPNPCRvDtNqzQ8bhTUXvjKk9Rb3",
  "key2": "2T9ofcZKGoX9CbXdaAPaigKS77SWQgEJX5nYRPUUACqTGAm4N4D2bBBdHT5KQejwdbtKRsNL2BWYcJAaiGQ3DWpW",
  "key3": "4DAKQp6Rf9sMFZekRo3jdsvPpRfuedFuUWj8qymZGz3aPWDLMMkGgoSjniRPij9UsJjgKsesGvcMiRbAY1XbYD2j",
  "key4": "2F7f4XgZr2ssYR3nq1uhGDT8cRTsieF1MEXjZMBKbk2Ggg1VZCqBpA61wogJmrTc65nsU6X8nwrkf2SNKDHNFaXo",
  "key5": "2UvyppkwPZZaZxTi3GKW8pSGiKiiGmM6uqknFmjPgioAcizKtp57HrnR7Rq5G8grhuvH6cNBBYLjguVHaGxmVEv5",
  "key6": "iDR8xB19UKqPF7KrkAt8wThXz8RqMoXAdMyjiNARxFVPPA1gtEBBp394ahk2S5gz7pu7PE5EkjSbFxiSAQZyptj",
  "key7": "4opEr1UuqD9jxME4S1o8GD3Ci4qeFwYaT2qgyfMBkGvPMvmErt4btXRFWsyuawgjB6XCEB3cYFnpxALSN8ZhRKJT",
  "key8": "3eHRu8RqPXw4vKm8BimGVWpcMRmxPqBnVZkQJnqRcK2GtBjxfaQTf1WqmV3oSUkGuu4hJe78F61cFCMciN9mJJ63",
  "key9": "5ovzgUVrMR7Y2dMyjv2EqCwcUr9zvQ7eZDJTBxnRzhooLqkYGdvZSodkCBVz6fi5MTu2HTsva7ZRJnPtKTeMxGoE",
  "key10": "VZyPsAAGH4SPLXkzathNk2HSrYYMbpvB7TLKtmwnxkLhZQFcpAQpHF7fGUTnX2pJpADMMxBjYtkvsa2UBXtqtha",
  "key11": "5B85xGBwGPsNYzXjsDmixd2fDvWBn5igVL5PDiAaY6GTPSheCKNrpoXFdTKQ7YE8VWXEzZEwJhGibiB7kSdXPBs1",
  "key12": "5UVmN93S1z9Q1RXXeM8UuFVCEja9ESBpqVme7TbRJN5BRQXrpUzaExYn8sXCUzBTmBZnehNwtBw4K6BKiRdpumBc",
  "key13": "WtCtuNAPppTsVWtXX4Kk5e4MY7uhjmsqXzQGGQ8KmjGSyXmXK4ZMzbSq1s9c1Ns5tbVp2ggnFeko7S8djGixUq8",
  "key14": "54XLetRAqE47hhWs3fcpShvraJ5hDMzXMv6CVYLQ8Ds8VJtroj7RWSdvdfrzTA36rWQL5sGa8aq5vBSE1nd7upD",
  "key15": "2zTPGYufTXxobVChqWWHZ1oDvnHjse32qtMFDKScNytDsVo7z2ktvAq9nwoPD4e3Q6orcfrxr512WNgWr2Dz1aVG",
  "key16": "5DMRvUvijtwzYpePMauw3KvUfQzGgLZj8XSs4qpdrsifBDKkFxx7Nd64Cqh4vAfYW6TGNVJA4ftYA9bsotY8Btfk",
  "key17": "3UJW3bvKY8skc5XUJaQxSTmC9S8MS35GVQDGxVWJu7p6v8UJhAv7J2oFtmFZVFzbX8FZqMzCkSKujTY6tX1CGQEu",
  "key18": "4DjdFskbm3imUAzv4mJPXYNLSEC61yJSMQmfZWRSud9xmRkZ9V7c6tqKe7cH3HbtVVmEtJcM74gkgZszNPU4KofF",
  "key19": "5zicBaN1uxZUYruzmbqZbf5B2PtBD4SvZGkzRsZruSqd5JncWdJLVLFn867Sq7YHAbV6933VLRTecYYW5DzfEdex",
  "key20": "e6a7XY9zMn3aBjeh2qKcru9yYyAs9NFrqW8dzWDgtGQuMsbDMjsZ9riJx3ru1XSj1fxQekems8EPgzu8DEN6pHM",
  "key21": "5T1vo5K5j4pxeCaGGJBCJyvmYsGRtPmTCyN9EgF95rdzyy73mMwaG3veiuMJnHthQhceP2dJ8TSXNcRwzZ4gQ4AK",
  "key22": "2z1GhRj98mqvtLth2yh4QJPsFp8JPZScLR4MeRBmsvFhPna3QE7Ak6xZZzJ3RrUrHGjLM18U6CJr6dDE3tdP9gbZ",
  "key23": "2fiYJM6XAoMTQtutiirGwuV7RLXnG9M5cpBVxU6Z9acYYx85UbSdSiVym8sz9cJ4GEtFuyLVAt68Rjzr6Cd1iPoG",
  "key24": "623k8M3waYs2ZmKZuVZeFJTnW9r2YoGWAnKQbR4tvcQzfoEebrt1jwnqqpj6AdFzja5BAwZLxpioKpsrssNGULLL",
  "key25": "5DDowdXaqg8TEp25JbccphBFEiC2euSUVHxb5oWYoZEfBaMqXbDsrvNDRNVub5e6MiJpy37dD6Jg9WGdBiR9rCwg",
  "key26": "2FhwUUSxebfEMP9qkv3RZhX6s9TNGxecZeptj8occmAmA3T6ddRoVz4jscqZqdKreqQFoCBmZ9V9cKeeTTEvPgeC",
  "key27": "2PrpuzQkcxqNmuWciP67LZPLE8Eae62zxnkn9YNNBgsZi8LUQyJynBUwEUpdtAxrxhnoME5K9v3CZxmvRf2K5YfM",
  "key28": "2GukwXQGMKD8w7Q2xX4qvEP7hTR8eiDfarbAE9BE585JwTPmfr1VVSY7zG5NVfuXLxsN1SLyhnwH9MfZzG6pSiJT",
  "key29": "wZw9HWjCyXMpA9Pd6SbmnFX3rJNnPgpddAsRsMJqP2Rp7ZEDT7EApu3s3mfGLZyLUaWgvs1Un2VXDozLaXJ47qh",
  "key30": "4tmyZPV8yJ92n5UZxunNcfL55xStYXXR89V8xP2zz82KzCEX7mEjNeYeNqcDSTJydR58u6qgLDkGXgpcJz7ybPsL",
  "key31": "7T48Kcp6TfXRJbZkYrG2W62QDmVEH6KShtc8i93WV6EAJNUK3Ymmba2c5xM4nAyowLRQRqKty6apLjLDphh8xZq",
  "key32": "5CFSN84U6RGTqdRv3ffs866wSfRb6dCTqvQAodyxW7q6ycoKWcbVXNEyW7xXu6CZLwFUpXicydNRKUEtwtSTEHvc",
  "key33": "5bcmpHcyrvyGWiErBWx72shMc8b1KFDFsrouWo5LNbAG3eBWL3NqtNBUnbz2uYX8zuxStf47aSGXSLGNfX4FSrEd"
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
