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
    "3ZjDpJ9ewQvJVLD2q7aQ1P7P5o8JeTeBMeHuDVP14BhMLercEryCwjy3HhPy5U6BXeUwYQDAc9LaPWDWJb7kTgVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQsxcnbDkBCDY62rZ3FAXnNWPt7pLRJYWL5wh9QRfz8P3zxMCVQ323MremU5ZgUBi9wB5DA748pB5kmC6Mk3RH3",
  "key1": "iSF47D2GDek98x3oTdP1oycybribFGeNG7beLWtUwgrcvuVts6emZDx8nbgT9YzCRvqdKSsYyqHvRyXkhn2ZYFP",
  "key2": "427Q6DWWtjDgheA5UKAHug358Hddic97XnNKA1kbu3kMcnhPcrw4JuSV9afVRp2g3kA5uKrUqFW1NEZQ5BcJdPLc",
  "key3": "2xuj9g3FLiaupzxa3oYKHcs6hVnULqYrtcxdyzaKGLnr53mNdAus2aC67BV1aFV41CvEPXpu72aHKyWofmKmcbYe",
  "key4": "2kTJhbDNDEKnh52KfByz4WJSx2z5VBzJgLcFC8Tos9sbgKtpRrPAubLL2pZ3A57XdtVycLAW9No1X73Q5j9MC8Tm",
  "key5": "39RxGw2BE6jdfPfhwt8jfwaJ9Q1s92ckVYvTXGGXV41v4K3fVRN8scmVqSjzKbR6E8vzoGzwerhxt68cSBZ4RJAR",
  "key6": "2rAjdJPUE2CkcfmXpKW2HNYzhsKfX3p5x18pzayNB65Djh1tBhgY3fhLiW7gqae1nbtCd3TnuHdhcts4TJZguiqL",
  "key7": "4MGUadBwHLYNHrBXrKEGLm3zJQ9UZFNxDZLZAgEf3CUAvSFqo3KeBcKQYdvfbUZMx5zHjYv7f8x3RjHkWfck3tRr",
  "key8": "412qhotMQrj9Z2m9veq8hx11mBkuTEoP5EuqhBdSUgbdR9Z6ccaZAPdqdTyjRG4C531ZU5cCLYGiAypfWKWrsy9h",
  "key9": "neNjqMXLateebg5A4zxc2EFyPNLpzbnMReasbGybhSR36ojj8Jz1hftPoGYxFhTRjpmvMYrmNGQtxsk8hUN75Gh",
  "key10": "494rwqZBE5ccsnfNTGrqiza36TnHDvJErKG9c4czYXqAzFFgPaD2tqxUQBtVMCAMwsZH4NE2Zb9dCtDZ1PkQJ7y4",
  "key11": "htj5RY25hjJam7PY8J9g9z9imUKzt3KCrYW46etDY1UFZ6w41Stf4h19iBSNoASjvkZSiSRWdur88esiZEaLnPJ",
  "key12": "27Q8WGwGf9ewuWwNykebQzCFH2F2aauMFrJZUPDKWxnScuvshoMA8PKP2hesBTfac4NRexHgXJs6NQomP1Td1b5j",
  "key13": "ifj6pqjvRXuH6xYKfBptcjDXJuydPYic3UV4NXTm2dwiLd1N5DJSXWSBBEZLoRM2cYVDx7CXCcBUj7vRi9N485i",
  "key14": "DXvzdCu6MJ4KTnCs4kAkPLAexQ7jQuLThU659KgKTbYd8fXbpGeUATY6yx2Fhce9Ys1Kq3ttUEJUesh8SscU5Px",
  "key15": "2HEbyfCKCWqpmptM5wPcMnnpgzgfpwnk12JDji6gErD6jxU2rkndyTWiUJNzPdpRpTLtmtbTnHTA9Frh8vqBUNCK",
  "key16": "3xMj4isaEmkiF94ovgoTFtwEbJtLafBsS2a8oF8basrZUcLSkGyrdT47sX4vBVEUcyKo8Trvf8cuXMNwtvooXSd3",
  "key17": "HCFxcJExnBTsmhfHD3kdAbo1Ly63KXgmgD667ByuEwxnfjesigryCFUWWN4aaQam5PgZcXQ6oJ2nQPipGw1oEUs",
  "key18": "4TnaYJmPqF8xkeVGJ4tUgMqAXeTdYrRHxtovDDMAQzLRcYgJDKfrPv9BeU4UBvu2iutfTGRhfx13ubv6cnkBJETN",
  "key19": "37bnztEeZ11UKydRt7r42fVQNXvuSqNM5TawE9x6wS8HppMbzUThbyhtzVw1PbJiXh8dqRKB4GPzHzavcDzJXrDH",
  "key20": "42zeYJXcz5ZxPgDXeuuVa5KKoAdca4RP89whAQxpxmf6C6P3xWh8rkDhPc9m9ah9ZrUZkewcYvJjXSWUTRNENgfb",
  "key21": "5f47ne9cD7VJ5wQ1toXPxFqa3ZDbp4fRCtyhTxqmHCNYDnZi6XpjiYdzyJvurEDkQsNS75tNWbZAvbJQtLnX4BW4",
  "key22": "4gHfaeQdQEFY9Z8VvmdWHYW2sHSv8WvQBnDfSADbrz97BhB4MGU5n5vPrMj7k9UYtMCnQs8ZTyqgGuC3wLpxXwEj",
  "key23": "5iLN7NnmJuFkJnEoDdeHhC2mZgohCeTwwUidpefiB4Cidyt7vbQdS6e6cgwDtd1exTawGyshLwZZKpAbemLaTsfm",
  "key24": "5oBAJM1CnSZ7tQ8FgDw8yPVfMtVQgoSiipPBbVikSM2EMeG6axavuyFSsMcaPnZ3LDhW84CN6sN6nv1QmrSvs563",
  "key25": "229yCDM2cbW8kSJPxa4ptLasyksdZBtZhPn1gkoLUWybioNFmZLUKnDHMhT8kYj4FaFgKy3zsN9h81VXnD5npVw2"
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
