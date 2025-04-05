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
    "53ZRfNVmMn8usWJZjV2vttSzNjesDhuuz4ETyPi58ZXzxTsLr53ocB5dJvmaDZZc8vh3wwbnzN4JoF7VbaPsg772"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XdvMjsFcsHALZn5vNBss9u83EbdkKwtutYQtaTuPTPNUALjhoUvauM1AxtWcoEk1ECaJ67bpHGTvYesGiDVLEx6",
  "key1": "V4rE5h2zUtFKbasPxmjWt2HwBSF5V2TfV9dZ3oyJL4oTVVLs11ZtWDcqtAWWr4FPvSqyZLqJFsc81KtotQivGJr",
  "key2": "2QYDd8ybCLx75RA3TmLaVKbYS3uWiqtQpyLLqRVvg34SB5y9umn5CsX7uWkm5wkGbfWM4PwJjEBMk1y1CmRCbrzp",
  "key3": "2m29tfivwFFoyB6KZMoVmEaPvygBJogSdeUJ3FdkorxDao1sxaUyngp4x6pGYrQbFG3ki7p3LLajragYbTZQt5hu",
  "key4": "2Y427TejRmq1UEuirU7aULpKPNFH2JRB8CTN7rVwS1cjWkYgGQf3F3jZbHF9XGZZshCv9sXds3gsh5Y2Fj9CEF2V",
  "key5": "5WDFZXdesf7G83YKFFzZHwZYQVCtGpyc19uzBZy2rKexx1VS8xdccPRjwWcKXmWAPJhWYvp9UNifdUfkUR5LDkb1",
  "key6": "4MyC1dhUoBEye8XR34fuZhVs5T8J4ccKD7or59deM6a8eLbhciP8eTkmusYCF8k3SGTUeJXc2nSLkTBhoqNr1LbB",
  "key7": "5uLKosWQE7WiedBsV3pkp4tbUUad37wGJchaRCV7V274KJDMgzcadfXd7eefnNJq9bMRTB6qs6ikeqQFWM6m31fU",
  "key8": "52i81W3MB1JazjiEr7SJECNL5sKvir5pnineJoddsEGpLksTCpmuMVNHCt7Qtbd63pdXUVT1dShuYzztzZkkyurd",
  "key9": "2YvzMDoDTKcN2o6WcNc4iQFqqjFxheBhzU1X2A4mWxN5Af7fQGnMHftmFhukHLnoowVRQ4xvTcgu1Vjh52mP5yTw",
  "key10": "KkQFQJdq5dy44MKBse1VAEb9iFzka5FziA322Uxz94H8Ngt6D3dYANhTVPCbvaCDgcSkRNvLxWaMDe2b6yzWw1D",
  "key11": "347o9QKsHGk1GqT2f1Xov518dH4LCJ3ZzyE1nAgcS97nypw5pKy2ipyt2BNr5XKCPGxpvTzN9GSG57JYreX7JYZP",
  "key12": "qQ8huRo9BPAdmBkcAAHYixGizu82EMg5it3Q3vxmM1aCM8E6XGMASHiKR4EBiKcgBAhKQQkuKq388GTaUhGTQN8",
  "key13": "5NMs4UYLbe8EYDUBq2trR3W2JGrcX6FoJLML4b5Vw3Xj6qGphNurVAuLymAZeLYLK57BkGdKen2waRR9r2R934UD",
  "key14": "4RPuM9q6D6EuYZrWveegTUEdQbWeEeCeuk3D5RqWs8DXdRDU5X8iJdPe3HzbNf5SEuGV6PMeJmqxmtMqK46uxRPv",
  "key15": "2hAi3eA7EdQRbiL8YGzq6wU73dwv1DDRGKvoYS5RiuNQvz2jMbRKkE6gBR71z4P57EywshKVSytdqWBWk56ukLE4",
  "key16": "3tddLqnusbnYSpd1XZt3qyypBzxrwBmMGr2v68cWLdDrDhCbAQ5Lw1y4sMtQa1vLw6Nm7dQYb1m6A51DWneiNKJS",
  "key17": "2Xc63hMszv7TNL2Tri2Ru4jXvHgontG1gDeDobXbZtLPwskPGZSQTVALLih7sRNqAwXrDLZPN2NF2LSM5sFhVqcp",
  "key18": "ts7pH1g4nmo3vfk1TYAkYCwDgra5udBvWGuvPMasoahnoPLWr9UQwjMb7hbnrzSz5W4o9fawbNasNhcLXTWfPfm",
  "key19": "5ztA1VNFkfxRi14sHxixztmEaiBkjjrDMRoy3yASov8cBwZhUoXQ3mMgZVmC7wXUibfPjU1YKR1aczp5zqatPK18",
  "key20": "5ESA6UqTukADdUkU7QbfYwfa335AvE6WEZHENDbZr73GBG3NX2x9YMfQuPM9qpPRHQj7A7yXiN25qWF5UDwB61Ww",
  "key21": "5UfWnq1TrWJsNXMYSJrUSnNeEBce8k128KHquDFazJdF5Rd8z4bTpaDMNuoQ94zoEVtCNETtzGPofEpkXv88TUiL",
  "key22": "2qG1PEQs9zDEwzdD1eDLREmdkSUoTbQ3tGzu3ThpKcbh5WXn35xYqFefYsLjJx3VSpa6TkQDDRo1nQdYcHo47yFR",
  "key23": "4JF5x4REnTwfyWpCsuvBabhRgwYoAj1wc311WdScokksG3aGysqEpKhgueTx25gdkHcSgkkcByA88wv7rp2vCKHP",
  "key24": "47owHcFgsm86rjkX2oA99sUHD9EBZqTf7WZows8NaHYrYU1QN4MJvg3tzttFCzGZ2t8tCVVUU19VLVpZ6rMHAZrs",
  "key25": "2QaN3ewtaFe7eMkjtifZ9HwsDyfa44z7JJ5ar21YJAuuoKSQtqsKwc3K2grT4eWYn8eFqjfub3BoosvbumJD35tr",
  "key26": "3pRXzRwyKvsiEubBQXLaaAhrCkox2C811zXUWFNmCJyo1X5ww8U1QELtRENzoTW58UuQ9BteGQ8MfaeDrmg3iNrS",
  "key27": "4rfcqD1WaDxoJS7mksaSfZhLC3SwyoCYsXN7AeFrKAV8p1Kx9JcxfLPSk7kVf7E82Vcw1KNaCMHdT8s31CB2YKzd",
  "key28": "5uZzfhsSZUnQ7E9g3nEwprxn2GeAbU4teSPPdp3fmF5Ude8ckrwzLxSnQnM6UtE5dZ7BzGHR9YtMoSG6A1Rvk27N",
  "key29": "3afeC3WFa9zUmArAdEMAPq7rFm5t1PrxrmFFHEVWUmmdp7DFyTcRxNsA81m2N3BPYyPDXiEfPrF5pJL3D6pcAGrx",
  "key30": "4wApDqrfEDrsaxqJjBCCR37n3Yvf5xb5t84A48QTy1wHErhKUC42cGmDRrLXaC6pwGjfnX5AaMfQ93uTF6pWqNAw",
  "key31": "498HYvoPYKfZWW83J3bJnmRq2vJWYkNxfGqRhHsZ9hcxEXzBtfC5XvTge5htuFWtX6FVGZVsXx4ay1dyMSrwtkqj",
  "key32": "5Jzbtym6twPnFmDZBjcfp6yenBt3BnCqjK4dPt4GwCjtMHytQLjwQkjKZTt5tLLMsVfSe3Y9nBae9bbZfHciMShu",
  "key33": "4VSZ8s6zTwPGTo6XPnFDdVcawoZvYAPC9Whhe1nH2TwjYpH6qUpcVyuwZyG1SQyT3Uh7GRgTBzsAepreuiEZobPn",
  "key34": "5VY9xeMFnVVHccudCNxW393eAcHr2v1nXuz3QMUTWRjEKtRJrbjDUWVPBkZWnL9fq5qxfEnMpz1BvvFeFBx7z6CD",
  "key35": "4zRtcHXeeuhwLK2MUuKKcredUk8CXW81bqmUWRLUk1j4WDsuKxRcgWsrWKVfgL8ApYsZNUPec7xwaVrTsEunm4zh",
  "key36": "5D8dTuD9TZwq9eYS61PbF56yttKPAj8MZaF3psLLLnMqxebAM13wjUs8s1wCJGaAkVnkCyHqhtQLkm5GpBCPFiyV",
  "key37": "TAyHr6Kyw4L4eq6RFNTUm7ZG7eZvuJyCozKxy6o3jHWNjbNKdztGhuJzjb4zyjcv7SvzQwaq5vHxCs1D81pcjF9",
  "key38": "2WTyvNrrM7QbEQnZoJT3nDv6UMRUHZCF2vHBg3E9qU48LnNxY8k29TFbem7UyztVCtmxN2tJiDMmf5cEtsKhDGYH",
  "key39": "4a7N4jtiw7CcTYdhbxDgpvJoKa6nCoCxZcpa4HzuRWoHZsCBT79MNowoihCzGQ2pEJrEvDobUc9P7ajubWKHMCKn",
  "key40": "2Expy5JLt7Q2wGR1GJwNMPjZ4o8Vc9zn6mUqe7fkydgPfYuVBjMzst6BcG8Fne5CujsynoEbAH2bDc7ohX9WCk3U",
  "key41": "xBqj8esjKFz6MjsUfAFk5s3K6uFNiyLo79TVkV4fxJUbKHAVxAUeBWQ1syi7TA6rWVfAe1BVvMqCoHXYytAAxcQ",
  "key42": "2p19eF6BEhYicXdBrEjkLmjQJaqLmdAScCQgQYsMx8HKXQmVjoxC3HESHdKcE3PFBbz1ToguqPaEUWDv5m7CWFkf"
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
