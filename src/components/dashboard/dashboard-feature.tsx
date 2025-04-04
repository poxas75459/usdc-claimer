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
    "4UN4S1kcSg7hcDBZtEcQwmvtbD9QtaFZStKqFzPZXG2sGJaT7AdbjFLDULrpTwCEKtwGq7mQbhEqxmpHA1mXhUtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqKytWxnrwao76fPpyAAvJHjmikYjDjeJbdxRg7ki8PeFcwHaAtaPyvaEc6fBZwvx8Y3G9CnkV4MWiW6JfDfhzi",
  "key1": "m6P8SQ23T4BzDBrUcNUW22Hiaht8W3we6uzSrDL6REAbuctYVgqsUjyN7HgGXbUwe9pX3TNQLLGbv4mvCsWUvkJ",
  "key2": "3U4xBAS4h3hhwcUwUBMisiiWREqpvWGsEePFWxZZamwzy5UDiymgmyzad3rkc8nzBheHEYt6ZxHGamBUa2FA69cV",
  "key3": "2fVcKxMEyHDgGFCyQkprYv4GaYhQLmUkVgwDa2axkk5zaZ4pUt4jU7Lw67cxKAuxjjBWH3sbmXNwidKKSQJVE7ec",
  "key4": "RNVeGgQXTG8idXXPAQbFMb24avLcFyVhNGXPTHrdkE8q4LfsztvX4Pm3rURHxfUQGPwiTsTnjo35iCjHPJRJogV",
  "key5": "4PCcrWsCas7T2nqW7obAauoHrwFmgiyBPCjnGfjJZCvK4Nfjk7bBoKnS88bBUbtoVcA74879TZcYzoZ8hVjZv9PM",
  "key6": "61NNzvun3YQuDhFE2VkEH2pz4MzS187vCjFGMwynJsGMhTAE8ZF5kpYvah7V6jHJK43GQjEwGbPj57eUPBQjVH8C",
  "key7": "5rKZepAMX6rc6EDmaeZFgp1gcVN5vMJqbDUEqWVpzD4T4z8umBCXKujF6pHZPAEDjvXtm3kC4AoR81QFLoxVNcts",
  "key8": "4zZZw62NyTWA1qiQao5tPi4nNzW6QSs5HJqgMoryCyZN6KugX5wPUcpQ2UgqeFmb5RqAf9m6W2FQVn9g3vYqaKMz",
  "key9": "4Ni74mSwDcevVWi1cHawuqUjfTuVcwiLFf4oTvQP9ZM8AqKdkEtfCLbdcKUV45uTLfq8t2uTroiK4qryWyNg4ujb",
  "key10": "PvdjZkp2RnqyLqYps8qP8EejFmf6DRPUGYpBFmirEMErTiUMhxXf61BJdHL5cbwmHp84n6uKy9GRebLbdtQ6Jwg",
  "key11": "3226zUSDdHSQJmb7ztwPruq2awnmztiUcPMu7zf88X31x8YKa8bDRZ3RUrdwSCboD6qPmo8Tgc2fCNJaZJNYHSxn",
  "key12": "4SJ7MLzgdg5r51znARAsQwXvhMkWcLXZnAtyZdPo6H9pcJU7gx7aotBbvEDf1bu59vtmiyM35Ws6WNBrkBtf1v7y",
  "key13": "4reEUGNyL8sD39vDk9DtUeWTnMbmirAnMjMeWH1Hs1SJN2mJY95DFnEitgEgR2UYJshUjgTnJrDTP7FRpYNF9hAX",
  "key14": "5Us4ns1wbmG2Kk6b8LzEkVc1XVApx92USLLb9WNmZZL7oUSgTnTuByQxSpDHWj7iRc32H5tpodLwzphA9dDYcPN7",
  "key15": "3QunMmdQfAzzV1qx7aYmL4VUSDaQ4UuRi4UqQWUAsXkN9bsVFJv9c3CYcsd5t4oEGabFJTkf76vNoWSPdwx7QfGW",
  "key16": "3DmwVqzZ7mp5Rrze6SySc7t16nniJAgfuxwdTCr28JRu3xuqzSfJWLAFBm6NdJZogC5RrrDyL8SJzQmozoTrikAM",
  "key17": "ds6bqbphy7tgm17ADyZBrHzBnRnNfqsPsGMwLD5KNQC7MbDYt4RBp7szgCNsssfZn214A6WprUkwCo7FrAcHwY7",
  "key18": "4rf7zvhg7MJrFTMXYGxVvqBhQoLNvk5Bnnb7s5ussxfqi8DdpMF5hHsc82b7hsu6BbwQnJNranN3eBmEcW7RXKdp",
  "key19": "2FspT89z7Ui3BCZTQFQwWKYFqCjv9QHK9QCrZkwHZX56CrDMT5mqLGigZhQ9N27h4F2DE4AGHXvadP1BPJ1qjVg5",
  "key20": "57MkRupZwi9k251vRJZz5YDLGXQWoXsvUPgBamakPiP2jqhUamuQRHb17t8f5YrFYLN73FTDeiZiHzkH9SkrTTz6",
  "key21": "5bAogmuKU1YXvSgPcNum7zxrtdMCSPxkKtFWV6VVbP9LF3hzAxuSxuJ7uXXBETUnSB9gc3Wattrkkhy4NFdGftLn",
  "key22": "3n7UvksKU3zJoNKG7JAaKsHSjjf3v2rWF2bxpCbHfTGjAVGzweryj5xT9QhNbLfvT3ZQAya79PcSfEzc5dnPwmTR",
  "key23": "3ax7568ziUEnmdLhkhEpzstXtwF3FNUHDqzBTQxjVKdp86E7EZ96nic6dsE3js6Kog98dPMWNjNk2z35GiLsJ9Rn",
  "key24": "65xUrUqbhKXkxKNaBahKGYqnkFSXVT4F3iwfmPF3sfnSnj6An5cNW1z2bn9eQj9i212tPVeu76x2NVzBFVzRQyWo",
  "key25": "4uCzneSE3Ez8AVqXJZsZMYvFtrU5VNSwt1NTcPES1PN7MJYDUxoTSV4QJgL44PCFyaJKHbWpCjRd1eSj8gzgro6r",
  "key26": "4nBgCmzusBn1W4Gc6K7UXgRuJ2NWATAMExbMP2yuWxSCUtFKpm9uKEKh9LNUv2McK8zqqKHtPPswxrc5yfNyouK5",
  "key27": "4CCY5Td8hNubKACNJS11teGJowdmwWTkyAzcmnz6b22KVeojdPnTwYHnxSVanyyR4rMFzncyoF9gnmEaPkaGn8Cz",
  "key28": "5QkGmWc2Y91Dsiw4ZATwnjbAa8HRmnAEASMzCHH7NmECwsNMuVfsrjVZUuXoCE1pDSNubHfpUocPbNvD6Uh2fxFb",
  "key29": "3p7bV66xPJjjBnTaCvA6YosNmxeu6qMW7JKeca5moZeoVCZYbiPNAQXkj5YJG5XbwK36Q4kUinqj7ruKZbBBBo1d",
  "key30": "3RLsgGnVD5Jm9mJfs6EauGRPsH5hbMMfJNrqMg7dDLzjRgWcbDJL1VPT1PhXCd3r3Gor6C4xWej4TptiG9jrFw3F",
  "key31": "51Pn65GZzL2r9MF6HEoLeAF1fryzcCjPgwEDYTGzws33qgniaFR2rPWFs87dKoCnjCDJ9whkNi4XEfbY4o724G9",
  "key32": "42CmLvnEpvesQnd2FxdyV9RFHhMkSgK9ifARkoTuUdHkoHHXNGWuAi5NNExCccknACzYn2YZxCt7tXLE1Lzge6jn",
  "key33": "SXd3xpvHb34zy3MV3VAx5FuW5UzL47HHqWFaJp9hikrwfPby6W7amM8dja2ccUUdjpG1onaofiXFWJXZXigTpvC",
  "key34": "5gbWsdb7HkjEKnhffysybVbvwavrY1gMyfAm7oMG9NXvrrXxwV9NERMNpm3PiFxtyzaeNRRNEEEJducAk24G55eE",
  "key35": "4Ciq9eupmw6eNKDwTp6x1xRfLZgqv28P2gENZ2tFTWGsSes7KnU6KDivnz7PAiRoBdyxA2iNUcJyuEvw3GUhtajm",
  "key36": "2nWKEprj952pF5GbA8UvFRS7aWoY3qUvkd6t5oPxX72ZWgBMF9T8S7KT1PKpX3RgpTWRuY92arbeJTFtzQRguwkf",
  "key37": "22USAys8UZLrj8u7bme1sQZReCL94oyDTdPXVYaLqWNPLduLV6XVDTg3NnqaJCroDRpMipLNesfSuC6U7GZNh9zi",
  "key38": "k4whNbzGEopgaAGA1JB5cfqboYGTPtqNr9kLkuqNhDcnw627g2GEtMAayNcMGkszW1skn7QCRJM3MKxCXqxE1BA",
  "key39": "2gyfmC2MzuYieGvcfrNJNAgtWLVA5s1VbDucpAZqSwkrajDNst9Jkgb5hmbT8swrjYe38G8x2GWZ5FxZ4LAQVH53"
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
