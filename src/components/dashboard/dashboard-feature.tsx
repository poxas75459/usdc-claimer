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
    "5prdfXNSsuVweYehbVr5rH34TdtA4DZgF4EJddECSrtf6MfPsvV5pxW6D2ykUeBN3rt7nVE5G3Xk7fVMrDWKXwtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8oD5cZMfaqSfj5eHoGiDGMwS5edKU5VaGJeqw7zmBR7G2ZNCLfEJp1h2Jnvb4SX1rEiuyS4iHhjdkw9bYmnUNN",
  "key1": "2JVFRq1mgWLG1RsTeE9bSRX8jxE7U1WJZ3iH6didyyJcahKwy2uUvFKqpUA5NNJR3xGRu3rnfAqkTdveG9wXbyBf",
  "key2": "22AS38J5smbwAnzXToir7p5GTqpG9ppAPtm3zxtMwKyb5fdudYYJ5Jg1rCDYdXDg1hRdLtTuwgYYNJ4CmfJJpD7N",
  "key3": "54nUMxEKNbDwHJrgikZsUDmkFuwk1cZBhMdSiPYpyNMe7Sk4mD5TdoT139X5FzEjGBdSyfnZd4M1iubh5GmDtDcr",
  "key4": "3KQBJSLAdd2JKt7wucHSqZuk1iaEVHNX2DU3TN6WY6VrxUpQehmagJPMHvJ5E2wDHky9nMhnp2C6j2882LJuCfr3",
  "key5": "3DDGDnhyK5ycgdP3xGsRchvtq5ExKSaT5nfwddEvtXYTEkyZU79eftNUTZjrp5mzx3FGp3bk1zG6u2APzgeT2FnZ",
  "key6": "4CzckLnsQuMFMGiRfUTz5ry7jprfecKZnZH49iiAdEMx4yXceTQdeMagtDVqvPq4MFz3mgDcnNRaw8MwqKChXq2L",
  "key7": "5RMRjai8pdQTb5riHX3xHovzzVciSMJgx1mmx9mUsEofVtnm86eG6KDmxHzRVyqMArNxBbjLZJqvPFcLqsvd91zK",
  "key8": "JnT1v6V681fWUdoLQtsXj8PvaH9DQgjqD9aDLC8pf6pdMHfT3JpvjdQfQ4oxcqUZKtRV8fxgSUmy91wWVjdPeMX",
  "key9": "3G1BjGySYp44vDuZYiA1owfowaYCyggnBVGa6hf6rKKKC7mhuUAMtYG5LMt7yQYkpNdZcnCEXSNaun3GUMAo3AVA",
  "key10": "57dohsJqQzaapi3QbCWfNyvEuRDdfezKprVWX624kZ7jWM57SsAXvDEeh21FFofCDXQYQJF8uVRP7vTsTiyXBtF5",
  "key11": "4Hh65UXh64YytytfnacxT73XmgbGANVQYXrL8AHs7adrSBQsZqDGn76vtXY9CbNgDPTnpoXW9HyWnjZG8Vnd1EHN",
  "key12": "5R6kt9JLz1w2mRmQa9Ew1K9aCMLUFiPFvor3dtH96aCaeuMGihfL1LP8fdKUUfaMDTVHy8AuQC2wvr3JLwQeWPr4",
  "key13": "5ZxnFfkdSM9J7vydQ3No8KiKLfvareS2Ruk5k3SZ9F4a7nPLmoiWKV84PwLZaR4wYs9Csb8ET9AkY9pG3RaHVip1",
  "key14": "vgufvtUhSkiWKM7mYXLghfs1hvoYYg84M9JvKnrYRq8yruxtZGVEkqUHCztbSyNxNsyxvjKCV29eaqbALzGEDHY",
  "key15": "54sD8sjdp5LJrmmQee6F1KnqCFT4g6E2XwBbArvYN91B8xsBGA1yfyKknpUE3mFN41H42QJrG1854PsiA17H9MFB",
  "key16": "kEZ8xu7ApWEBouVmHrX8V7QNTRbCuaV93SyU7D32s9H4obj3U8Fz9AezwTSWpLRXzYqdKGcVj52npPFUYNGirZu",
  "key17": "zCzsNw7oJGNjRktaAyS6t7z3xVPq4kgVGuFZw66wtp5Zyan6eEhikTNiMoRUr8JLL9NpzTFe11Dzmjgv6MXx6qJ",
  "key18": "5oZzaFkvHuuy4katBBymaJrSGoJ5B65REMZF2QkyABgwpZQGHP6GHbeUJMVVCfD9fqufb6tG5VcJxL4sySXv3Th1",
  "key19": "5Kjbn9hiVe7ScpDduCuvqSBQCitBdEhRRDocXmJBPSxXmApR5cBMnhEqkLu2cVD9V81TauSJsThTKqVoiAZEyVQB",
  "key20": "2b9okF3MQN8i1ZEkpy7UMTmohBp8C6ECGEyK8DC4SrrLg6JgsmTbW4Mgpqhen22hcKQZFWJx3gV9um9tKjAi9xkS",
  "key21": "47ta2u28ym17wFoZi1xNdi5Rb4yestojHVGWZS8G6DRWerT4uzUccmmUdK3K2XrtReFqWMdznuMBito8LkxtQFme",
  "key22": "e2BQpzmGUfGTpgkj6qcEm6YexyvmuPWfWnNzhdrE9D1zRjkWme5AgrgYzmQi4zFwkMBGxYkUz9iMspbzBAXWMWh",
  "key23": "TFEMHumcRaJ55kzRGjVWnogwRteUb59eWTzQMJCPgmMgGJnBbF1JcW8Hoky7kZyMWRZD98pnpDL1bLLVzT7CYK1",
  "key24": "4em78nBfyWPAm8idtjASg6jXd7KdXGq7cJGpou5er3iA1HCjGTC7Ka195oeZ6QHmw7BHzB8VXNAxmTcM8AKaqckR",
  "key25": "5zeXqgB2z4bQKSugtbFMZqgYC6f896JuuSTxiKGdE6LaALzVeHY7e4qfMST2garpXnRfg9ndkSXC5SZigzqsSE1F",
  "key26": "uV2bGFJYFkcyVUV62UqdQLD9M8DrEh3JbTUbpP1rnvuMJ8krmmqioiFLV1m1Jd1Ju9tSi9b8thJT5HMwGdG8HFs",
  "key27": "4ZoyZD8kXmZ7skvoCr8VMYKxpwh8GfBgY4rvgbvSGTzEvj4Tqg14jsVAb5T66PX2MyrbEf9fVjnV6JjDwSLdRopJ",
  "key28": "24CubgT8XC1zJ9mmknmmDEe2jYk6XsCxy6tBr7vR8SChRFCELhR8BHHVeRf1uPXSqn5JQHiw1CgT9avq3vHp7UR3"
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
