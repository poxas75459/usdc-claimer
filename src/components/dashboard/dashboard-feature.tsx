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
    "4fhoQsHm7Qn95zSXmBrpWiqeHbRCXMN7dGWr8uVrHsbXLnBJQAwFzSABj23neSP49XSwLYtZbAhCosK9g8fQn5td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q3HknN7qmk4K5LN4EMr9npGoyAkRbDZHBi9dFV1XNDKogxvcWHVUyw4XZof43JD3q8CeVty8BL4oUsGXRq4pa3z",
  "key1": "53YQFxH5dWQZR3wMRVdCaRzcGU34azyrHNbrAPtuUpRHXVwuD9DamSjFLoi1hz5JfgVefJafN52m8i3B5bfvCHgX",
  "key2": "VZqvtVFdL6xUuXxwjUp8y4VnaRu6DVWgEeqdqF2AWMoE7vnoVGiaVBW3uccTBnUWhBN7hpae9Md683FwJV2yamJ",
  "key3": "4NWMPAsXkU4we7FBn68VmrWbYrhnrN3rpc3dNLGB9tTXLegDbE7Z1jB2sKGbkhLnMfdMQ6s5zQ9Tz1ZErDYuwL88",
  "key4": "3w7i5C6SyWBx3oSN1jcFQ8jSf7rAqGF1yDFbEJzrGLtApyutrM9qnndFT395S1UXMRBUnZZ7bDHFCoaC3V3gKDvn",
  "key5": "BZL2Xq5CsgHJngmRqm1YQMEvPnqP4x6VR1Q3tPDC9Wpo89tuhvYaPVWBkxmuJhWx4ozmpFwfnBmHRTd8NeGJQhH",
  "key6": "63jh9ojXft5KiPcXJ53Z2GyWJqXcRbaVGELgLp2UtKB3DdkPgr5RMJyapnpe5uzH2MhtMtZd3PCgg3Sc6zfPTdzV",
  "key7": "5CyceksndtBQye99LCgj3D5uMzPmHy8zMSf8G4UXNghJ9FJbwQfuVgMQd6pJYqrxMRhwmbfRGZxJHkJKu6xdTe3n",
  "key8": "2VsidGRm46aqLXNJmf2eLdU3NoJic3CB2fQBcRtgXULcPUDS2F6aEmmU4wTmA5ycWmnkWgaZ8XDZwEjsPFuyK4VL",
  "key9": "3GCv5o2y7JH7duwJRAZk6ESQh1pgJE6kGEVPsgjqFMtUxwVtzW3ithoVGe138ZR8FPEdg62GNZUKTX3sbN4grC1Z",
  "key10": "2U56sH9L65C9DqN6rEdFPWE58XK8Dgd7NBJ4vz6zGmgy4BhMNmuXdzkxZCbGEWCnWdmT5MHZ6maGhuhacnNFa2xJ",
  "key11": "4mKt4PZrayZBYgBjRDU98oqKnJ7wW8TZQf4LmXmM1DfMPmYBkQ2oYAWUrejJsyZ4GH2oztxi7i3fcWdF5JzUpinC",
  "key12": "5A4vRHQp41fbEuLbKLuapp1Yf3ZmSR8CPhCo1eXK4Vh9qr4Gm1ifQVzooPiuPRhx9LHpQvuRGvLE6AdN7rQDu8MR",
  "key13": "4WmN2tnmCFgB6DkVFhjN3niR4KCgzWJFYf4WdTRJfX3BnNwX8whytddukWC12Z57BHoqkF6pQPAUQb9YgXVyJRkE",
  "key14": "55bFbErhcVqMwN8PPnU4983BcZjUvNyytG3pjXthKGc3nr3WTmVh7VFBzcGZaZJHiCxtJL51FcU85sQeK13ifLsK",
  "key15": "3ofmJ9tt2qbGRsJK5NCZFtXw12ni4fLKMrgv164vS6HXbVAJg3PEB6JZ5UXzsugf5hcqcxcQuHxLeQhbokrhkmdX",
  "key16": "4VX2Z14QBDun62NuqGoXapJ4kMsGc3PwjEzauq8Hyq399ySBxGG9HBgjYjRgspfo5CbrW2Ytru6jY86KfXPjtRin",
  "key17": "Nv227bCehiPDHRci69KV7rY49z8Pk6oZfUS5AGnuS1XPabAo1khsmxd4U1yNpFWS1ZrvtFcEHcQX56hoBHe9mpB",
  "key18": "EBLwpqaz1oizJmKud7z7gPXFeateah26a3StYQDtqPwkDU3YtEYESz8D5f1iSc3T1CnDdyLM9pRyyRSbNNFn1Jb",
  "key19": "3igcaFfGrG1usRQrfHyEbUU5ndsRbs6BdSykp52shvoqedZPh67SBMhkwotqX4sxZk669oMSJYe4YQNQwaNphjrw",
  "key20": "PgQ1LFoz856oF9FEaxY5CVeGQFhoM4LdJSGU6NYPa1fxkpUzmognPEp3jYgwazBXiTMv8LyFi45FU3uR3KJDyBu",
  "key21": "5c8QeCyKpFM3dvh3ziFjah9PLxGJBSSe2DNFY4YixmRETi1kg8q7NrjfRvt9TvuXB6JUbnB8n2fcptQD7z7SwSHE",
  "key22": "UyjjCUUWMaHsDLEGGSJvWhx7B4Asnq865tb4PXGxwNcCiWCZvhtEtbJ1ebeSCpQQXceYZyRF8ANf4y2oJ6wTAXN",
  "key23": "2uU9N7zK6pS7iUkpi5PWzKWdfbALi7hR8LtTwgBayJ78wBCSxc4NfQKH5m6KTXuQmAq5KvgyU1dzriYUxq6wqj7R",
  "key24": "3i3zRX34PH5coxUSPYKPipaH9fQQsGjrFcKn6jaLdg58dMtqncqZMNqsTo85AAJx4qH5F8vCPSqRg9cHHNimS9aX",
  "key25": "25kFGivA1pULeedJqwwwCSNAbiPWoPXJDuxKYgQ6uNF133oySG7nvfawL83nDUV6QaA3BGvaDHsg4UCf7u3mJPgq",
  "key26": "3idfpTmHQNQWMSie77XAEvmFfh56yDvJap7ygKtFDcBq47GjXmGSYmuxhwGBXGNBCQh6Bkh83XVwq54iannzAego",
  "key27": "AAZXW718yjuZa48N8KS3HRSJfaWyPQmViYCcVKzbMvdtok7MY65AZMw4tfFmQuN1MjHrd2apeb5U4nj8gF2ZayW"
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
