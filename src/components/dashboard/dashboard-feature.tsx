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
    "baBbsYrtYbPKfnMeRbexDwimz9EAWQryh8oKsErmXCmUYEurGLfhuPQk1msdXCwKDJ1aUGCcJXb45xt3gfp9bXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26y87Gu1BHBywPysdRUutdy9PJHaDuGpLBKaZPUY3Mytp5GxSxGJiX6ZC1cstJQCUNZpsiVtu7oiK18fnfiA1ygP",
  "key1": "2JWys6sVjgjriDehTqCgbixj1cifJQWF3ajSZVrpjkoLBkPnCYVdKyW1dcd65M7YePL2r3RHHPiKk8AkMagYzxB9",
  "key2": "54yDRBU1kECfzLC8265TkZqCbCPjWwMBoknsdLVfuZ56mfMMbaTbZKZ3W1wqwkEFk4NrzutZhCJpiqYNteG6KMc1",
  "key3": "4nsyxnfGJZGYzDptpVoLarDwHE1qQwwSFbSQyW548ubfmLzKETHYoadiL2su8ipeb2NLSs9yNVc3WtCksN6SRExG",
  "key4": "5pLmQ24uvPaWe1cKtTXKH9BM5QcWV94V66FEzGLhv9E7xzcegYcWGYEhoSoWLnqiPZrNRc2Qb2K7NKKoUnamtvmL",
  "key5": "HZ4EcG5fu2mspRNAwjGjnVnhz15YRnhCtsTVSnR89USax3JNqeG1vRscXVV6XfbTfWWFiXKLfnGS5KFiyeDkpW6",
  "key6": "42uSgRbooE9w7tH5wQMPZ8NTs41CK5siNSXj964nREBkZ8y5kWEyg8oDFdZViJTx7nm8C9MBJDycpuFSPftPHWJq",
  "key7": "YT3eYYKEFPpL9E41Dg1N78mD5YV8h4n6B76DNhYs3DTQi1J3geGRXyTh2tAqnMJSKv5yHMEDtGjdjhPSfsYTSUG",
  "key8": "48VHYrN6C9RXuzwVfAPfaPEtxuA2F13pWBCAY3mm5zbjfTWjRSiA2mVACoJ7o5YQdzzk3QoQYzZHQ479FLcefWav",
  "key9": "3pHqGx6HMhUMEoSwxgirtxEQuCzHWPmTw64ccwUoj5axh75NsquxtWfKbjihQgKPyaAxTFmoDApxP8RdmTcmPHCy",
  "key10": "511Pia6tkyEWMwhdB23aWaPDdjzPq487rkukY7SNvaEXyhyVw1ujAQTbhManBZxFX3jh6cPjfxG57jg9n6MqnUmm",
  "key11": "LZJFwF72QongohFcasH6WQmzGbzvnmkAGGJpdMrt6pPVzhj9RJpL5b6cY8srXTgHBjCYQiyyqQoG4TtuqijfCWn",
  "key12": "49xUFhDYUcfRNuN7226M13qjELwQpnRe1PKK4QAVSjoaXbKWiNaPPyvHXsNuSyNnj4TjuEHkaoionVeXybQ8NF4Y",
  "key13": "5oXR4cGNZ5nosjsFA9kKxuutRWEicd1BsXqzSdzFpSEskfSitNqEj8vXL3YjqLqZGwc9yVCuGR1NYyCvkf4c8MVN",
  "key14": "2SBYT3HjSJjJJesvetJWyXZD1Y584B3ng7x74omHYUPBYo248eT4jN2HGtcXF5jhGT7YsvXCRDkDV2gztZJqZo8D",
  "key15": "5De8KCMEYn8R1eMMdJv9MNMUPhTE99KMhy1zmBqoamh39SLcCt3WD8QRrasSrgf1GcP6FmU3s1QnpkuWALcmE54M",
  "key16": "3cgNqweCZunCVr6PciSoYxsfEvwxwH8FwyDfPnqXxe62RPAwWmQduEDmerMyFNNQ4GqkPKH8HCsjnN1GHjzUhM91",
  "key17": "2gTFW29wuxTQUAQ2y1MJcuv6HD3kQMrXTsqgvEMXK51933qRbNJsA6TyakUHwT4qaxaXkBvo8yYAdR83xbDGvnEw",
  "key18": "4jErg6o3RcWtJVBgwFD7ZD2WYUW4rqXRjPxKsWQfQffzTsW1Xa37jAx9teTnMNAoZR7Veokbt1k56qK8osHbrviA",
  "key19": "6Gg99pxgrrbAva6VA4QME9x8whKPVq2SjHNLsK2yhk1R9Cwp8iyLzFSAGMFMpa3BGMeyorfcMgKujozP9CLifE7",
  "key20": "EwfHFaPqU8EFcoViTdwGyAqvqSbB3awHwL66ggMvDt9Z24EJiQVkRNyHesEf1BnAou58akB5PMrSVjpwWVgJeWc",
  "key21": "3UfJ22CbeEEh9y75DsSjPPeByJk1NDt4BACqQ9jXhsJkwxLMrCkcrmLhEMsSBPCV2bmTH46irq7TeNpdRBvGishp",
  "key22": "2RzxQZUdvroYP7FupJBdVpAzdy8Wvyy5qPQ1E2okUN4grdpYUkwNPojfZtJSBNu2LhUeUjfSHAK7EJfVQz7pdPQN",
  "key23": "9iZrTBeqPiwpsoXVpPGDC1DfW4u9kXxopEms7Ba7s5wVktUo9cbdFtJvFGnMcTpEDWGEcAuTVocY5RzJ6AtZVbi",
  "key24": "4hb5ZPUWV7SJyBZPJZPXbNL2pN4XiGagwAw3bjp3YM49XHqhQ5RKxotbnkxo9YpEZmHHARMRaBmjes1QAVP5r74A",
  "key25": "352wbT8oHFGEaR3tXTrE9R2ogSHyJDQdF6GWYkLq8CbWTZFAMRy8EYrwBvBiwTwuhfZGnAXE5r3ybhDHbVq6sRhR",
  "key26": "2peWUhmD1Vcog9bbvduQEMcxxDHa2zHxR4VuTrFedvEsn8hcUe7SGr6ijx8BeFjBniC7CU44mzNC6TaGBcy1qhS8",
  "key27": "3RywyuhvVyHZ2S2GpAevKTekjVQzzH6FSmDjfprq2fGg3Pz29HPf1B2j5dptSxBVvzL6xsbnG5WvpyKEX9wPwDDr",
  "key28": "U5kRL2mSeakZPSh52211f26dHZVUKRttuoHiT5GuX2chXjKWLnpZcMPrMb3tMzXanCn6ncYsDovEx2xz69U46XS",
  "key29": "YmhSx1aDzcYhtzSq7fJU9ouJ7HobKkC3iBtBRXS4Q2m2YDHVYweNoH9z6fvFypYd3R2kzC1eZWBK16f9wMXSt2c",
  "key30": "3t4Q6ii1QewtCxdLM8uUWXxT9JRaVvfo7d9afbmgStmsqYm57PebXppe9MhdWnSdLcSSHDG93GHkPsjAAYoMSPWK",
  "key31": "5rbXyqXGP4YDUd1MmtZkqveN5cGnpsQFb5BGcSLNya13mvZSABsd1L3suHgyojAk47X1yW1WnyaPEEAuuZ5NPgJm"
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
