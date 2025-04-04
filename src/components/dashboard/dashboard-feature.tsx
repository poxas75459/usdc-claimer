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
    "5L4Cc6beWhxFJEAWPzC14puLbkaSFoofsoHhqTvZRkv4LXXjrRhzFQjaAiHdmvuNmSNyWatgcxVBLLPL12eLqi6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7HXn16n85HELQvvYa2KeaHchmHdz7Y9MQoHCDstgTTx7qzo6Nrnf2jVT9Y3VWoJc5G6w3YGA9Ag9PiBeuKjQ3n",
  "key1": "3ugtzRgfQK7LjajwghMLuuz3xNbhtWfAFMmXoiweTsXNmxb4pxguDaZcJnYgkhDZWVbiWbPLrrbiX7LVNcXqs287",
  "key2": "5dnQS5pVj1tu841mSCqq7Xe9g4FyzJaqDakiKaR1MZai2hgnatvFyCgCLKS1aVwnFXtQDXgRUXeomXuTK3Sfpi1P",
  "key3": "3tH5yA53JaHEDKzkLCpZrMeqvHq2GpPAXWTAq8Si6kJG8kiycZvVNRdeWQKiqtYvrq1Zqk1AFLz5hvaZEo3RPLae",
  "key4": "5UF5iX6UJoksksJJJL5DhrnrKTPx4t7T8VwXhyhUPVUL6QnNWLWXrMGUyjpRkMZrcVFNv8hKkEeiNhMknWDZKuBd",
  "key5": "64ZWuZ2Bp4mD7qT3ChcXZEyMzUYqSY8hMViy4BT824Ej7mkiiFQiD4kDvqUWcRMg5m2dhp6tdFxYvrxjg8UdUEtj",
  "key6": "5SSa1pqDWdYaE7rZboE3t3jCAzNU1CqMGGz7D4QhkbLz5wQD8vgjnAKF9FTN4foT4dT8dfH9WnhuQe4XoTA2cXbb",
  "key7": "4eUtcseYVdiS1C69ovKU4KADyzgNVGVxR9urMGBQi2c57sWTXNJTBE6B2xdx9xY8e2n768X7HBpzwcwNczD4MK9a",
  "key8": "7PtN1M8BEcoa8sb3hBptDeB6VTH78njc1MNwyCAiViHRC2JZWQ82e8YdtuZESXoiarDCczWVaVVZMbJBzHVfgne",
  "key9": "3chhDhE5w5tzrq2MGSHzMyLEQrWJd9Nykc27ots9uq86cj5VgkXSdpUrbnWX56KyHVVKU9mWBfrQraeicxKpVn8d",
  "key10": "2Lauhdm1PdWNnhDTFBhQJ77dYRMpJoVGAQak888xtkYQkjbY6uesmqXJQLNZRRBiYSCbHhGDJcqeM1mef3LiW2kT",
  "key11": "54HvQVRvULhGV5AijoVCWbBSJL6mQmTnfmVy9JxwqvNvoY1wXAJSbXGBwp75cE72A1mLr3De4GcFvigAW19ucmgB",
  "key12": "2EXEb4eC8upAWfZnMCRZ8TqWJrukdsbE7NBbx5VfDMwi6JCvBtiiXFooF9sDvDVeB794a7uAma27uTohhW88fCh1",
  "key13": "44kAVgdahxYhrADYg5Btbvy1kFpVC2FvLfR4g22sU1Ld6Zy9BEn33Ca1xdaP3gAJreytYwf1MYa9n4ghv4CSYX9u",
  "key14": "62i3uZTAC6C6vPCAdcCpkenMeqfJqiVmE5mNneF6V6axzm5Sv1LUFLbXuzNrw3rWW12U1vpEAfvRKW3ZjrgPjmyB",
  "key15": "4QXawKnRbh1FQec5zkbnx9H7Rwc6s6pLkMz9tGV3H6bGaNQWtA4AZ4fLwp4f6C83e97XJyK5m8PS4t8HTkQipzLM",
  "key16": "3Q28VbCjpRzKjRwAAynU3mDv8kAqCvGbDbgiod7JiDKUPB9myRTkAjfsFmaeSwoq5ySaDc8zij7tHo4VjsMsJ3jV",
  "key17": "5kZFZyC3Rv1Utnt1aynt7wYVJuihsscr3JX6CBr6LfhWj2tP8EdbYLRMZMD6QdtA4KTzDDBExnJYVbAWjEHigPWx",
  "key18": "3P9HFTtZTm5tfkN5zcmXsri66TQEkEEYy6UEaTtWJLhCchEAK8gfSyAfYyHmr4BGS4rSupVP17nWkphx3dev55jz",
  "key19": "39dvFAywZ2m4GX4asaJjRuykN1RA6dVoAH9rj5nmywDse2dCirswyG7Yfk5guGLvEPZQn9Pwzo8RwnThSUTfuvC6",
  "key20": "4SG6XMBSGZZTRVPqaJa4UMv2EM1zTX4Mkfa5Kgcn1gXRg7EEmCkLdECpupbKxMwnAXMPC8z5GJZwUDLdBTdYXLTf",
  "key21": "3gMpM9GLFssCprhFykK2eamVNbFk1w8tu8FeEFYkGVACnaReFV13T7eruxnnGWBvdeRHVXbUECxjLRDpmG3hGJ4K",
  "key22": "24DenHvGqxhpjgJs3sR2pJ35Nbpsz45saVGHV9NqiPT1rxp1umh2ETZRV1VfgrdyCEUbnLHfugwQrcww9JGXZRYv",
  "key23": "2hQxXMR2gXs3rvRy7QwmyWJWDRwsz9iqzQmcpmhFsTmE6Q2SC5YftGMTRudSJjxboQQhVVWrHTGNdzZ8XJhy5h5D",
  "key24": "2MSncW5otsuuoWWiRuqqB1dpk78TyDKgHuxdMeAa3BztKdkMBYx9RPxN96ekxMnLi4fGLKfaawYKet4gUFV2cN1Y",
  "key25": "ro9b7qcJhcU4dNirvh8Makw5XFBhEC5yr5iPWggU2iZC7FysiM1fRFYPxBaJLMu7f21BfRgwAk8nyRq3eEtdrkh",
  "key26": "2UbbFKSkHMySJ4twuysSuRHf1ur61AJ8GksGVGWcXtzE6Zx4tr9sGngt14idvMbhzrWQuz9csQc1VbwNGcWva86n",
  "key27": "5bA9nGYLDXtyFEkTeLVJjMYh4yoNcVtugrujsetDzFEKnRQcCti5pFLj2hwB88rV9dm8DBDySWZZkFoAMkJTRzjP",
  "key28": "4he7zY5cNWDbSZXKcZZ1uVyx7VKLLhaA3GDjZs6TQhkNqFB6mZEYnoZbQayCQB6PVhBRCQMy1tAvcSZ9F7QELo6a",
  "key29": "4hPtY51K12TuC6qgXdg6nAt38TdQ23asdRbAfmF8HtnauKmZuUpbX3t5wKYYKgCNYnfH56iHQgN8QUrS5a54sAvZ",
  "key30": "31HytrPuPD6BdeRpBVWsNF4WZrKMs18ERjK5CHA2sR1k3EzhZ6ZNWwqPYCsJdzmoTtGC99gyeBmrBhfoRW8Q3Pdc",
  "key31": "4wzKhpRP5DSoB7zziRMuFKT5RuQ2Zh8q9vmQeR96ppmVBQmwmT5aCQi6iskJ1QKd51P4AEXKx3qFTTQ4PfMPgmCC",
  "key32": "3cc41NveQBRwnMoue6NkvhCbuMh4s9V7iq2HRMn9TUzDsHPEBSY3wg251ewL9YdMbqfhmgtVpzy96f7xi5TsZJjH",
  "key33": "4PjW2AC4rJ5FehiJ3qzXGruaCT9raRvNjP6CQFCYoipETorWcQvJiXFkVsatAS5eMF6aYQ1zSJEY1vqy4ccfJyNQ",
  "key34": "ZnKmAP19xWY9GNcgp1t5bBqDkp1hFUYYpozjKsv6taoMcQaUBMKGu5bPU6SYf5RMLuGFZJp8BDmLgQN4b8nitpq"
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
