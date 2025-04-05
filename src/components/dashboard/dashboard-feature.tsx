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
    "2YVegGGn9ACb29CTBAgotbp8usHJTMviqaCEipNGRSaxvGdUZwDkn94CqrwxfDRnWo1c5ScboKV5yQ8vjjZF2aAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAARraTQYhwZhmvFAvXFNaxFiV4aEyMxxMcmx1aECVbAJnoZDxvyJHwQjwRE9p2yoKagtEgxXaMEyCKs8sdPinC",
  "key1": "24i3XWFmzFE9fnk93r1wSLrsa5QXZDwHtXru2qX93uHDzuBM6AB7RU5qiBMuwqty6p1iduy7nPY9BmjUEYWeH9eT",
  "key2": "5X4BMvgwPxZsudGQWEMvUbTBKJ21QCBrTARmMS1zX13AMraMD84ehbC3suRPSft4o8G5xweY4Mc7YFuhhNqB2NMw",
  "key3": "3k35z5CEbSSe6PiQToihyiBq7WAgrZtcZfTLfvXs7WjuH4Z24Uq7nfqscHr3zhXquaE2jgfDjJ166C81mQ8LDFYq",
  "key4": "4uLd3wWpfZNiBR8W7FqiDM9vrJntfbnqsycoUc9FwDDvXiKZiGAEcqdKLyHTLWHuoL5H17hDN2pkDxfTL2wJptjN",
  "key5": "4XN9aKzTHjKmFTDuSwxvTuwaCxUiUEEFgymCmTMStJVCAcLnmnMKBNPggeX3BaGH9EY9dguR8X9AkPvgHznjar7P",
  "key6": "2R1C5g5LzU2KVUfCHStw7uH4SmH4vyHhbBZQLYJmNr5A9e5sKbdK3Q49ApA9yX7QE2d77MCaQSSN7Wq85Y32pBnN",
  "key7": "3ihUG8P7Fq5BK1LWX7wQnBYPjR8LGjjtBaDVW2ABEHBivWWj5NZ1bLprby8kGf3JCghxmF9MKoEmsCmkWypudAw4",
  "key8": "64L8s75e1Esf8dJjKCGQy5zk9WgChzDUnPos63wpHyC3YTV19MMC31ysZ6XptH3gg4htixzTKFjqnFbcUHx3hkRm",
  "key9": "3EGWGsaS3NJKh3jsXvZF1yg7cHg3CTi4yrYVYviugr4FjAnrXKztir9KF92qRiobUypyofFgK2t1QpXUkXVKVbAL",
  "key10": "2hG63FQdfEdgbvtSzQjKc23jHKFoc6auLeHpxFqrs99ib2gPUYqrkxCoEZRtusGguWaagbVgaQdNduS8Lm8ixr24",
  "key11": "PVBM1XGUn7Ma7ReZ6HxVptETS5Bs6wLzgh4fj7EqV7D8s8JxudpcrFmnVU6e862ztgAwLMzwMjCBjezpiN8BbwW",
  "key12": "4Q3muyDa7HiJyMTwhLLYTzcNEnj56CmF4Pj8W8rfyqpcAzRCgqVN6ShxVkdXUD4fKyvWDagi1dpAdsrKboCNFUDE",
  "key13": "3zNTxygxfaSBdeMF1JrM2M1mJtki7tB2nAWqYZ2vMn5Rr638YU3BRW9RCziNvtRP4RxKdEyScNvyPjqgsV73H717",
  "key14": "3ZZZU7J7cDGEmsAbSz1tPtoQBEZcXMQfP8LTggvh6soYeKPxmXssKZUXoPwxHojpn3ufTuRzextSjeyD5RAcFxFH",
  "key15": "MSFLhiJcXJ1LokL9voSSB3SrTS9EjX1zPMgkHAnsMYfaq55K8wEPshwqooBG2UxXVC6oGSKYFCWbGoApZqbALP3",
  "key16": "3ffdUpsyuDZbbtsQV12EQDW4rxzosmjLtcdQSeCsYz1ut3yZX2LHerLKrTtxMXL37unDxRhdhCd7smkHAnA9C6PU",
  "key17": "2Qa4qbXdMmsiT6QXyuHzHbFB5Bu9m4YijkYj1GCpHPwCtqdeBiaaknSYzbksAdGaVLQzayMzju9cEJmAmaUDa9i",
  "key18": "2Sz6sZhFYPSbQF2S6NsVrqKG6ESjTpbsdTW5qtAb29ib2GKF6izxPVCj9K21by2SXJBgcYPsiSceoSUebYKmmY3g",
  "key19": "eCGCcoKNxaFvbcNSzKX7JEd6KnyVNqt3H4zCSyT15HEdHBUuDd1ubUwkEjZjSYdVYVBpDfYKU6TmABmnjBWbCWY",
  "key20": "5uUL5U5cPjmuUMqQ3CGMjSmj6wekNcLaW1cS1qBHfm7F1bhDBt5RjHE3yt6ro9JEunp2M44jA35Qoeo4Gsh4YKph",
  "key21": "PMFMTBHuzHmPZJ97higZ38K8CdZhixZvZ1pjiPEzmMUbCF4eRAGcLjhn5g7yWxhLL4jdyZBpoMFNm2EbNG5cEMX",
  "key22": "2guYdynTZDbQkPcMfp11un9k1mqSUV67zK3iAYG1nEqH5jUjJoE4pPZTybzx9bk2GE7j1PXKphGNENmBnxMaFZnb",
  "key23": "5VZATQYqtBbJFuQBD3UhnvYZo45UPWHZGhhosvnJ6WbsdjYV8rL941y2BMBg6fchD9YK3PbtXRBiUJpZVhVMmPZE",
  "key24": "mryPRb63rGUNfnqGFtoJWfaDFwnigjkyaLzVgt8hojLjhdf2FUKNm5H4dXhV3zXxJBx7PTNnVT4g6fjx3NurLf4",
  "key25": "4Z6pfru6XTU67rUf5LDVT3ToixkQUPWgV3yQ8YTpn3GWWjWM6ErWCGmfvQQbucCymXCpGV4zqxPuD8K1pXc9i41N",
  "key26": "2wM1adh8wRePfA2Qp1d7afqjAN9yw7LxoBDjas72U1MrjvEmkUCi732XHJ7B4qMNpqjYRNkJ4eTz5Z4p8ngHJAyS",
  "key27": "2NePZkZnRLjjgDms1aXm5u7Wk6VbAF7vvP8R4i86RnRi7pWzzfxYbACSJazuN7KoxxYfTicrf3hrakcXtjfiB3o4",
  "key28": "Jz55yf5Tii7GmFXMFCsPi92HuqTAHfnp9qzrwwpGRWTC71u7B5P6fq5K3zk6WtFRnpq4hgUsoFzqonmgHMgqFtq",
  "key29": "3R58LMwVaBvmQpzpwoWGScYWQhuq1RT6Z4yANaY4gzokvvhcERNyhe1BS8PBSeBr2tZ51wPjA81BwcCpZVLvs3yG",
  "key30": "3vsRQmSo3GetKFA2N1fZscCrSuDkPbZVDs1cNQmb6XMRRqrHUy9sHzJEzzdbpTKdR795RYeNBw117jjTu6BQEXu5",
  "key31": "4faJmJQMkzzSzsE97CeUt16AzKNpp94igUHc7r9VGJpALw6HmHCX3mV78giSvYDf2AUdGns3pwd7NqHVgJjEt3LC",
  "key32": "Rcv2Hfm9HyjLUt5eGXhjyB7QQuH6Xknxn9bo5yzmXY2Brwz4h24yhV8oBa7VR4LBMPrdCP8KhCfQb8vMdQxN757",
  "key33": "si3jYA3apP9kq4MN16udM271G188ZHdtnroddQsj7YRAMuDSZoziH3JGG2suykZ2RnsmXnSaenjDsGHG77JJ2rT",
  "key34": "8cScNfdsoEDJvQLeWHUWhxhNEa9ww72TAA4Phdqhx1AUXhe2jkbUgXhRh3cuWNsh46vzEZE7hCWu4vDzHVcusSY"
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
