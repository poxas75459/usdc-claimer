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
    "4oi3XHG65QSwEtXcTVudogcG2J5shzLUJsan1DrxNDh1pnyvYA5ryr7WoHx8iqUj1ngnGaRwktHGKhvfiGMW85t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvnGWi6jsaog6UhrKHiB1eXg4HKA3zrhFyM7TNWVKWuUmL8grA8Bh4w9xXYfR5581z1B6td5St8tQgBMPJjTP5Z",
  "key1": "39YcJ85gcxfmSrDSuhknu49BnBj3jtPWjruX4LTZi3696wANeXX2Re745jDkJooggE4AS71BvpuQHuVZNgtA1SRP",
  "key2": "59Mc4kbsggWdqvH3pjXjz1BFX4aUJTHppnW3KgJZGBwY35RxUrp3aAjcLM3dNtmUPfUH5oxf9wfj4JkBwCRDdfS",
  "key3": "4FKyPD67qG6jdryu7FN65W5cK9npVLRjvn6FhZqmDkKRRaCWjN8DPwgFrThXox6etfKX9DbMAJBqMaXLHncE4tTs",
  "key4": "TpcRdjep294pVtadgNYGWQEoXocHd3KrVBw6waGquTLsAEyGjyx3Q3MaLefECiaNkgZx4JWqdqoB4HPCba4mrt5",
  "key5": "35VHkLbHxWEZC1xKFyi26fqjeE5t6ooaqNM1ARAXqW5Bwi8cViKr6uuZqmptucqtZqhKnbCMeZ9C52eUTNWbSrdX",
  "key6": "3dyk94ANPxN3o1ePSJ7UJEHqwwVXGkorXz85GTQTABp9w3SeewoPxVMQWrSGeVBEkKwsdv8ywQCUVb1Cz6xYwPix",
  "key7": "x5DR9bUNuz8YbU2rArk2fX39JWDGzeoGiDgYU9eECW7FM2Hcv7XpB6nJJXBErv1evP5VR5JhPnesfy25shDHReJ",
  "key8": "4ihZyGzuVBA4sa5muzKBCkoFwu1ENKkHr7RQFshnzJqNpzLTnmj7xCpi3Nj9HxhM7KkFCDNeX1fMh993B7vD9jvV",
  "key9": "5fBrZToKxnfBLFpq1Vncyh88cDhvwc1WPasPDEGTBEm3MTs8aFiKHhftbi2f4cBEnA1m3ErzvnG9yBaE77Zaica9",
  "key10": "24YEv9u3M6MpAif6FD6QfzkPVmxsxXDXEcMe5Fa3oUP4YCz7hf9DnXehD6gSUs4b32pAePvKTtsxEfUggbkLgedC",
  "key11": "4BzYSqbSuNaiogbE2fWeTvB6hFtJjuRAqH2C5zC9ptkkr9twrxv62LuakJM8D7fxC7wH3F5yzkG12QkaZW67Mfuo",
  "key12": "318DxFeJGRid8gCzsrbL6A2aJwdzF7CMRUxxdD62aFEyu4Hm7QrbxVuhoFUoHuZMG17NF1ENUKhT3uYxyRpnJmC4",
  "key13": "2x5DPtdJ5kK5QR4FgdVDSjHn5EakwzEbyJku1Jz7bU3HwRfkADGHWafTVyaT2TjLczZjRiMX3zfC7EQFCn1DW9Cm",
  "key14": "CPPtKAh2XMaKdFe5UMF6dKGDAmLbJeXnsq465uWazHz89FvSNF4D1wCcH1S8pn7P1ikhK2jHe7U3LMtYA1GwPfp",
  "key15": "3Di5aqcGvM35RbVQXgyvoAXumT2Xz6CcALQ8ZGv3PETfThL4GqJYdKZ6Y1SLcnAhcpoAi3jDREemeh52LHtfyfho",
  "key16": "3pF9ehPG6hcCSNkuNGYEii1Z2Y4WdUFgxyZFWT9FWLvydNDpb6xVUuEri82ZojkhzUwTFHWmJHuGnrELjuFPE8zZ",
  "key17": "4ue6tRCEzmPJg4ebNbP2VfF1Ntm12jzxe3N62ZW3Ug23BquBNsAVCkxz9Yc4FDFDhgPsMTKBR4DrfP6mTx8tECvU",
  "key18": "Ak9KYnPYcFm8hgDoSGcXbfiEfzvzENi9XQgzxtA4hU2fVzFprSHPduoz2x5Y2u93kK3FAjvv3MJ9m3UJaQBUMKG",
  "key19": "4tF8cRGqiLLhJ8XzK2EAAmwYVzTsV7iNPTSceGccXGkmnxHWyrNHSqt6hbgffnoSiSv3EtVTfRDUGuhFkvHFdcsm",
  "key20": "52KSkS1r8E6ndgXxu5uUiTBZfFS3AcpDbMGFH9jx58gTmvtxJXC1CxeczbUSLjb4W4FKGdCTGKpwmeWVYWhCr1jM",
  "key21": "4Ri6Wh1t2tr6sDEUGCpMCD6gdG3LJvJ2izuoqZQb6sdnQbkeQpd3dybo2MTrQMNRxV4qH9oHcuNCwBEPtL3oiect",
  "key22": "5sQ8J1P4d4CocExt8J2Y1oPFy5bKphAJ9KVD5GtyqkEM6UMK9oeVBoYULMw5rRYVF5iELsnKjhNzNi1R56wTJyST",
  "key23": "3kSp88PoK3JRGVfhVa4CZazfwEbJgt2KYGZReRqSegMNe5R2YqjxRRC6nbuJxMtGtMCziZa8AQaxQ1JpS6PgYEzQ",
  "key24": "4uA3KTn74LZRzgLWQFxJQ1nbYJGwQzWP8ayE9biqQzxDu8CbKnjSCUdTSFotDJJAfv3kyREf3oaNmhKUBTDeRGkB",
  "key25": "3pRtwEh21tUy7am3vT3vEEYNRD4RRVXMRDhf9P1EHR9taoGfS5LvB6xDxSoNkye3dB91XV5Fg8HwVbZd7UmMXXgr",
  "key26": "52nj4DaczrmHUS5peFgH2yq9mXe6Q73UDxEGPb52UFfNdpJ9cY52cJS2UjgHWmPuRSP7UtCbyjUSQgo6Bu6HWW4V"
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
