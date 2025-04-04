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
    "524cB7fyvPttTn7gbfrw63UAqJ26oSapSR3vgJG1STZvy6DiWXPmZsks6BFpznnietZnrjRtn7kFvAXmro5ZF8Zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26YBU3R75oaEjeqvNbs4WqAmLPqu889zb47Cpx46svEyDzHNP2StNHkVTtCFzCDh6neDWiEqRVsZtZmA9Dm7dtSh",
  "key1": "GFstADigXLT8iphoiFxGRW7mZyajSuEquYxVi31KcnDqKr7UUPhzQhEVWLs5fFVffq5Ny8CiDkMN1tkjtgEEomb",
  "key2": "5Y8CTF4RsBLYdaM3m1jjcdkt4qTDEf5dEpwCywDsZkwRhDMHgTCn5WUpRFXuKT39XhgH7vWuSMFB44nmjkKmx8qh",
  "key3": "2gwfYXWXQ4uZCyrd3fUW62YmH2wR1SQCMUdWRCecqZLbVN5JHrV7yXTtnWh7czA6CKrZi487ehyJS7rhg7UKskGe",
  "key4": "53nKtUkztgC9yVb6xPsuUiReEfH6RC9hY7mwdpPjj1PJHG7CYVHH7Nqq3B6HbWqp7hPfXcP9FcUoNLM31E5qbCYd",
  "key5": "2RQFs4HcSG3gKcKBRfrQAFHQxz3XjqYZAF6h518BoJQWVDj34v4mnsBvF3YCkUEfGYv6UpaQVogiLr7PCauEhv1t",
  "key6": "3FY3n5RTunfPRkFaNQVZRVq72i7KLqKygDgdqSdbmnvqxXY8uQL1pY9ovUDNf2LSZmEArZgrgAvwVYAcq8vDY6mG",
  "key7": "4rmoSqrZwc27JLsRzidm5QpNuBkPwCKDDkoZ9nFxs7f8WdPEm9QrKw35tr432gap4bAeZ8Kptzg4W59M8phUrtbP",
  "key8": "5PcQ4How3ErcdCEg81o6v2qsA7zUBmFRg3dmH5orfDWdbjaU6NN5zJJ3JAKbeLKZ8tJ4dDGcNSXWJyJ3jJNLrTrt",
  "key9": "2JcmE7jT2hwKg9yFeKPuq1sc3Ji4UbVK7imZMFmHBjJUU9aDpvN3hzLq3i54CAuePXZ9rTCVmv6VT6VC3tS3DZ88",
  "key10": "3tn2mKXsodhTJjpfRUsJHRKFSZ3YkdfZHgTjcBHceQxQ6TB1GyvJ5Biru55hgiu9Uo29VRpJ9woZM1yJHQQRCPdQ",
  "key11": "59AndWXrXQRfNBShmVLL1Jw3hp5cxsh9QJ6CRPaa5Pc99JAnFRfTuEw6ZiELXZxxXk2mwJsm277qcyNxieanaxcf",
  "key12": "4w3FoNRtpppNnwH5mMhAAKC8pMZpPLvSGHb4kXU4wjic1WunY4LXqiWAJSQu1d6DpG8jtcthhUfP6D33JTErVUqn",
  "key13": "56WPeyogwPJYT4iGARGt6Y8B6n8EQLV5QUGkeiZhEWBzYAbtSrQ9BrGgerM5XEZWMrjUxB2ufHPZncVQXA4zyavW",
  "key14": "4gDZDfurJDv6yv4SKBoVrm61ETWT31vzsWkSbwkPRtL3PWmRtmCjCjMCk7itLKFppY8ayD1qXo7koMtHjAQ3ooma",
  "key15": "5iBLW8pmoXv9Gzy2Qej7mxrQTVyQMtzviNSbp77Ny8VHUEquLaHcJe84XoYpAq89gEx48cKKFjNtK7BuJuoBbAP7",
  "key16": "2xN2rM4N9LnA1DxZZ1MYqF1G1ebPpSKotDY5Na9vc7JSAUW3WXGKTUBSZBeAdZtC9nuYr7EXumi1Y2PMjki27fUq",
  "key17": "SePfEni5aYtteuWsSrTKf5tSbHxRs6bSSu6VwXgNL8wcLxq6jHjWDxRSCJ6zzrocpbJ1BHCpRok6HV7hrDbMY1k",
  "key18": "2rtM8h8ugXk9FBFw5rydyxgTfnKDuoWqZDMqdeXpb9FJpAdPonzr5d8d7r4Lk3jKcmm9BgUo2xWi133LH1FfF9pK",
  "key19": "36G7oddn7vg2v1BdKKXD5vGdp2j5tc91EL9CW6GiHjmk4GZGxNsZFGnEHGFQcZdjDDnFEXFDd6rLkmGZkAiuUjpF",
  "key20": "2kohrVmKLmpgTbpJSSWHrVPZM2WNfkMLqTefTxpAQtp75yNQwydUrwgQ8rGwzQf5adNrFDU1rku5MBwHu1ppd2ji",
  "key21": "3DH46V9jGt3ySdkY1KLyf7UakRFwxNemjyTNueQgTaUXn4gsmLqDpZ5u7r9kwH9sNYXwjveaMWe4tvkXmMadfroJ",
  "key22": "2HEd2E6a5ZnTfnG5DPRT2m5jXeWTD8eveakzYrHqyrK75SpR4eN3opM66P63xWySd6Ymwcvz9zPBrNsm1Qs5K9cQ",
  "key23": "2kJLZYEgG2JcoEqe6XRjLCFuyQ6JBrniBCp9QUjhnMppG79VcJqtTsCpFEcGqwP8jv9aXSpYVhKokdcfCWD1coe",
  "key24": "3uT2aPUJR873Z1tVcYe5AN2s1Zde2xJArJdzLNZiyTBAQWaUa73c9EHNtqm1PW7hSA65croF8ceBH3sF7PcV3hEz",
  "key25": "53TifdjMGNLQ69Gq1y9UsDJavVVPRyEnaLh8cuJWmw94rnvpRBBJ6DCBS1pbSQ9ovgbvcYR3JxzsdPd2qkVi89fc",
  "key26": "3Qiy1eomm21j4YTSAoGEydKAGKfVAYAYSrv95cBa7b9KPuTzfBcSobEAQtpvULFX6y8tLaqMVfDmqAzteq1df7Vt",
  "key27": "4FZChNMi6QCL8A4pP4Hy2CVfTqEA9hTMpf6z65Gr1W3up2CdAC14yuP8prHw2CoWpLYm2aXPMm9eGjjRHogebRjN",
  "key28": "4kgrohfbU8QeKJWHPs1kNAcwCCQ53w1H4sWx15ApF9oRzmc4oqWHqABRJGNuBVUaB46oHvMTjeXc9oLHyvD4cA8h",
  "key29": "4VaLteeydpxH5K2fDsnjSkJ6VVgrfqbeaqByjKU3uc1596gvNNMELx7gmT1gK7E4H8nvE6KfZDtqig2m4GJCSkG7",
  "key30": "6SLBJD4k1pffa4S7Fv64bPNYC3xi2WXt15U6MUM61Vj9fxDuXmftdY28CtifjZizd57vKEeVRAdGRkmxEfbwZJQ",
  "key31": "cuGXNhc3Jh75gzQy3C5Gr9jpS4VqoirQ1t4QPYr6w5SGhySuHpc2GtzKtxRBm47cjYL1gyBbUA8Wu7mSD14yqua"
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
