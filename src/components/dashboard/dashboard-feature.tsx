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
    "2BjJekoFDwBMpq1Gx5FWx6FLNv3H7Mkdsg4Yu5FgmgdMf8pocTTaj1yEssSHHFXyERU2HR6FT9URdpEoH3bLvwxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWMPGzYDVFeFFQM8qQAQtJr7XyoKu5bbiNVE3WK9LLDXgqrwVLrA4rvne9QJbAe1HN6pdohvYvUz7BocjthH4Fb",
  "key1": "5XxkJDmMqJcknmbMoT6baAfrqig4f1CbYeyoPiUSAMnpro2oQavMCpFc1GmPYrWtBmuksd7tVHWRxtRdGTML6jEh",
  "key2": "LSvAM4bgLFVzoU2FBJkk4DpZoSwC5uoAf4AM3tqBDnmUaayE1ZzWzVn1hPjsK3HV4bwZiPWggzjkFfynHGDmLgj",
  "key3": "2iJerHeeDw3RCtGZ2dZ12Fkr5MtgpxAmcRHhT5EbVP2emAoKjighQE4pPLE4MEtXGwJCt4TdpT2Fs6XWiJor3Egb",
  "key4": "6d3Q7ZeXLhYDq4NvGUimBguen6WanMV5uFvtZDSvAiUrjJZh8QGH8mcnBD24UgRzdR9bdZiHCKNmkhUktPJCQF9",
  "key5": "5vCCQr4uqS6NE3XjFLvrNtvw5t9K5ZrBuRp7V3awjcakapVGgMXDMSeyHur2xPE4RdbNRAkFJKXrbrQ3epvTyAvj",
  "key6": "sEG9PyCt6v68oZ6Go3uHUhNsjkPQXJc6rgfyVP3Ymx7iw15WFdMBnhTvXs7VZ3k2UQkaeJMV3j1Sq9UsPNFZKx8",
  "key7": "A7U7ifxqknWBzaRbE2QCS5LnQQEXGNpgKowScts8Fq5PZ3iipupnASvFjuZfYmYXRxSYqGjiu27vZ8wEjqxwc8x",
  "key8": "5XbG7wtTiyb6VQ5qftqMsxxpYaAifNpqXeKc5ib27LJsLkPJKsTkhpJFnRaHPR8wX3rj2Y4zS5EDGvJBCPTCVYRK",
  "key9": "42Mmj7mwE6RpZ7HzhPUHQm4Q4cN5PwrQLScVics6WuJaerJ579PUeV99q3J2wTGLcD28Y13BcFWbLNG6vFdP9xz1",
  "key10": "4ZrXtkiLj9MkhbMF4EfbEqCiZUpBaLeYGUqu1xsjKDR68L7sRCT3d1pz1ekcA8rv9LU5h5aStcoJCBYPJyNiewJz",
  "key11": "2mfk3RLnU2fVn7pmfELDEWS9xSkq8LCa78Efqgsx9NErjUSxZdSs5ny7ottHJjNFrkqJbTob4yfCuv2gNa5gbyMZ",
  "key12": "2N92MtYB6RgpVBxC3TJTHdLDBan55o8kg9QM63mKaV32ci6Fbq269WYvnbAnpvQAgrsvCjgbHaphU7Ldh1EDTkTn",
  "key13": "38Ytt2eDVAMbnUx4a9pFosWPjk9SVk76Eseivq3ZvabC1gQC9vCirSHSoUQPcmTz7DkhLuYBGnBGRv4Amaq9Bjf3",
  "key14": "2Y5b4QA5r7bZGJKQuaHvwcibCwd8YYmF5uSHxCcFYE7dDubEpHZV96owNQVTr4d58nCNGUrky8n1xFVG2qebZtu3",
  "key15": "4QcRFp2FUdkyrp9zvYJGDv66ymWU7dru3V5PsTA6M3Byw25mg8LiUbWj4RTeyPQbhHL5r5cM6UozaEYVYjZzPL5d",
  "key16": "muQdnTazx3RDwNCR6bM86KKktSpyNnLYZZzTgNyiEyWZaokowrh77QWY1eBrPENptsG79cC4tDJtP18ZJEy3ZXx",
  "key17": "3mDSnRSzMaHKN4kKj1ciH68qtDCzvVH6YwL4rJB7kcTRVDPMsHpZKuyUVNVMCruRgKcu8NHdTStU3qHD9qGPEv4i",
  "key18": "48vQRauf2Y3oYR2YtKiU1emUwb6CnkeKsHqxLYzyn2hvfmrVaTBw9RkYdnqjZcDbBjREoVh9hg2ZNHbKjUtqNgbQ",
  "key19": "35Tky1CyT6Q6hRMmWAtYSfPLgewHJqttivUR4QpHZYoHZwbW7rjCYP3fSsuDetxMbLKAjE8yDhLZaffFNMYu8jki",
  "key20": "3zg8LPxZ6QZfbYj8RYAwA2S5ZRJaQjS6QxZzg9jHrKY4HjQpGUdQ4jPrfKx4xBghuiA8zibeE8j5Z3e76bfjAoBj",
  "key21": "3AwSov2J7VmL22HdkTtGrs6TfZAco4G5w63fZHSja9nZ6FWEEva6vm4ZukeA7gbaVkqJNWLWyMUGe25jwfstyCNR",
  "key22": "3aSvfbqaXps7Wghe3CjahGyjsjTsa42wR7WYquPU53uKg2jfr9FU3he8LKoxUM5t8jXscf1mH9URx9VMk7t7ezcb",
  "key23": "4SuGDXDXf5QidaVmjKqqB9YSiYXaUMh6s1Qu66snzuumibVPgsG7p1PtF9fS7wQP8F4gxm4GHhvFHGVW3A8kGxSC",
  "key24": "57ZQ2gVrkZrvXE5EdsBdUbwjtzsPkReqHtU15X9T2tv8iF4nedJQGR9m3qfGXnxd7WrgYtyZVQVg91ETh4iH6swf",
  "key25": "5D3oJmycioXyYBw9rTcvfh79cEsY6Uhr1CBX4KEiHZ5ex9AujvYdZzN8AVq6xf59ngRxEmBv3VPR19EvR5ndFNtF"
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
