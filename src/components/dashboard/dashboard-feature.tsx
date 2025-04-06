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
    "t63fFroyqZLmfa9wL41aMzQguJ92yEGuHkMsHieyoD7JX4AzFbvReUZ6BG1znLH2stttgz8Xe4x5HuNq1aBZZvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U9nDfjdAcouUMQDkqxwjcbgeAAHURMEbCDoiADnqqRY5QnMRE8zhVpcUnpvRA6iGNEQu2AqreEWS2eJP4mAtCeA",
  "key1": "3xNDjckE8HezAzXRMdK7S3r68NuX8mvpe72Aa9H2E8e5id8jRWpgx7EAvQuAtG6r2wBaLsFACddCF2o9ZjZUg8G3",
  "key2": "5hFuxJekfMzbWRzoQ2wBxPcZ5Wes2Ua3RFQGM9C7C4ZfMxrF2Pod2ZQzo9DdeGqBRFC3NDiwtnH3TNXzrWhPDvr9",
  "key3": "2s8cSLvPJ21ZT4jNoKmibvq11a2moEzrZsKode6cyycqxyn5TyLLdbZrP8MgdZEiPzSqy63VvfxPpsGB8kYK9q9h",
  "key4": "5YwGKynGuLfHmUPaQPXw4xnXHBjYXJuN6Nh2wkEZMo6mcUvQ8jUJnxNbtM8BvwtoYTGFm9Whv7nn8Jc9Bf5dcTtg",
  "key5": "5wCKxcvYCogtp7sxmkGcdBr6uVVbRZQkKcgQvpu2cvpaBNyLnZq65AVa3d8n91JB7YrobGdg3rgzLVu7TSZXP4fu",
  "key6": "283fN4ZdR83NnhDUKonj9LJZsgFLx37e3PHovVnXaaUCBLDgmCDVcVNrojgMWA16LPMPox9qDAnEB91jipHoX56n",
  "key7": "4oQP4xBposiUyQXBecXWiGC4eRfXj2W3SmVNGTLHZEU7bjPFxeyMzNu6jid35yrh58ASUKkhkJGRLEt8DYXiyFTU",
  "key8": "4dwLwEVy95W8UWfLMgPSbqCTGHd75pyzK3qtgzyRurnuFrbZa8AHwntECmLa5cYWaoEZNAZj9BViZd7AzmqkjMcr",
  "key9": "4Sp2J76iS9ye2ML2AEaTFnspTyFdRGi17ExqPFbhd1ZG5qbkznT81BvPqU8KFZWWjgRMywkZ6KgbPH45ipTNnGWR",
  "key10": "3VCjEChgm5XZVknhzuLNHsgsypJtPoAJV28N4URmUKfCrqNm7b5qCLE4niHvcDNkGCJhsaJnBdvJRC7cwmXkjb6k",
  "key11": "28wKMcrhaHL64r9bPcaHcXFxpb3xfkFFdLH3vtZZsCBmb7z3dAXs8bNk8yPMCQ9BspmFpKiwXG923PMZamrxsqjZ",
  "key12": "4ydD3Q5W6zgfFGaXesNrybbWJVTzeucGUPpnCsFuNz842YJS9NSV2U4xYC5nkth4vL8A2VLE3HgGDjjWcyXMjbWn",
  "key13": "5RtxfGg2ZHsr8J1eK2hgPkTvJYfTbqf48ZnhsZgXuV8LSbZx4E3siiE6gKqismhVmM87FY8d9HjLPjf1w2fTkvHo",
  "key14": "B1dVDQUPpKLM2qRNdH4HVQTEHfWbHp44mwV7SSrtmbBxudW7i1BxEfRmUAHMxwR3iyzPRKP84ysEXN63gN7kfqn",
  "key15": "dhTe5mQrxXVUM3fDfTXFaw2Bipo9B2SHGmKryvjHEnM9iLPMtzgv22trMqV5k5vRTL9A8aYrbNpFnKgbs6ps9uf",
  "key16": "tYssD1ayYx7tXQ5TWD36i7zkyHpyUnJGR2ReRnP3QJaw6Q4tbfS8CGZCsHUKLutXkbhQ1jYT5km2HeKKHXY85SP",
  "key17": "4fk8sv6gSDKSkpoR2mzAtUnm84Hf369b37wmjhfBr1WdaiDzefGnNHScXGCoRFaFMYUo81FnKgYFPpLwceXvrWwP",
  "key18": "2S2sk2NMtAGES3zrUm75RRd9PqCur5mLHBiU5dzgf57f48ZCoMrfwym1Wdrh55ifeFQ3u5znJ5pboRRiy78N1MY7",
  "key19": "3E5aiuveXSSbGBHjHsCrVREJLnQXQTB37SyozYCBkG6XRuxue5pGkn5Ep2obaKCVHQjMZ7aeKkjv61b2W7j41Uey",
  "key20": "3tVSngd7R2PEAZkTJTdLHYSFTeWtthAJt2X7TCjA6wpiJq6xSHpzTjKRT1NZ24bFegRxGRC5AzLKBEwQVhf1VaU8",
  "key21": "zW9igNdheKSVnqYQRb6odxXkcnFmDdvk59R6TcguvaypRGNobg6NSKh31DF7gWa2VuzqqNHsDbPBC6ZtxAmEQ8j",
  "key22": "3wyzqMenQAhRM9eaPABB7z2sighQ1LPk8Xoyk4WzEJMK9NYwcTzd7K7Hm5wiuMnpUCjTCLSHCewsjGAZ9duHEw7G",
  "key23": "533qbX74CbxK8pFX8SQSS7B5GUxQXJtQxQaKc3R1PeYvdQCLbJaGNMiWjL4GAEifYBYg9bzUnHNM4PVeHXSUAHu3",
  "key24": "4MaiBShd6mVxe7YbYMbAs86xxrWSaK1ip6URrvuBmw6iVMuJK7V6qLdfKiVvJNFdRoscyezWEsPZMyB5aJdTaxo",
  "key25": "5pZ9xbQEUuVQCG8PoMJTtFd3YfXntxevKYbdP69BHv9P6KVBYVHm5NBYULP4EGVnvN3evQAcQckctg1Txusu8Yk8",
  "key26": "2UgELumPW2EB9VAofVYPkt1CsjEokXR2EWMsWYXFtzkgNBjFqRxEyxeuL4LpBsCWD95aDyXjXheCYxEcmEXWGCj7",
  "key27": "2AarKGM63BiDCkxyXyWo5dfsB8fJ5bZZqSnYfYy3x7MHRvfe7jLzra5pS7tkhDZxBdPN4gVsAQixHZgDyoCjxbUK"
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
