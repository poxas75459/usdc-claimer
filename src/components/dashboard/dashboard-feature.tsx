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
    "3JHEhGDdbdo8coWyJzTXNiAozDFkwyFJps59qYVJZZKqg569Y9mp2SVsoSx2FoEMKy6WLGrc2Xe75Lrfb5Wn9xEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nazLGhq6N3eYHjJF3Vj5xteq34BaHzrV22Mb8Ri2eheFMmMnx2xVWDUiEtiydfMJ2N9XM2WRdiwJ1gXFgi8gVmG",
  "key1": "5LyZjrKpZs3hjPXAnzqkfdQhHssXYcXq2oNywWG5952Snm74pmCcyhx9fhEhF54WHUjd42NfgsRhbGmzF7mHUFwJ",
  "key2": "4X2eARdst6FWiCzYscLpPrZ6R8hJdFVZaFKw31UyDQHeGTZX7C2sW3uwWrpkzh9fu3x51M2WGABoV9qkDyo5tCYL",
  "key3": "d9dKVkmtGaXMeWNUzFDDmbz4uCvSQxKNo94mbwdnjyq7QdgFyTrLAYMRh5trqBX8WWXuVk4ci6FR37ACfD2iFGa",
  "key4": "35XdiYuY1CdartRhskAXF4uaECaLYEwr3zguckNXnEsMgGXnKwQi7hvVDoMcNAH6JuubyfQivykamTQw8fgTN42x",
  "key5": "3sk9eSvatDBtEcC1wiUPyNdJcVNa5uK1SRUNZv6ncmCKGydK1jMrMY4hgWhSpLxjkhQF1oRB7DyByePevtbX1GLS",
  "key6": "2NgFYo9PDtTQUBkumMTKktJpgH29Xmwsmn2ANJxqywZ9T4wzEoU1NhJagySfzjzxacVJETpYCsQgaVfnBXDDJKC9",
  "key7": "2z8S7RUZ4Vrrj414yrBbawD3y5V8M6gL3APvP8pQmSD4LTweTFTzn118XPvxxgxY33SZCeniHUfTzCaTGkA3SErP",
  "key8": "5KzxzZLAufnkf6yLc2qwcifVCaTxfWJeg2vyVMdrkkCUfdiEqy69WMebHCszG2H7wu5mBPh8dPtEvxCu8RsxAiDM",
  "key9": "iokjRuvy3qShYkh5zc2hZVzB9dmkEV2PyEBndpxvA8aZiejo9D4hpgH72wyzQi9XG2s7fAoHhi9Qq9wh7FYacCr",
  "key10": "2MY8YEiqzj6AAjSZMdwaZPCsZbaTa3q9VYBJVz1xgjyPVejHryt4cEhDTzk7nUoERPrvk6gJnpTD912H9MmFnnCN",
  "key11": "b6REYejdQ4wXCuDoQK6k84GeJfmV8UzurgHX5LGgNs4EbURntbwSgHbt4GrGZQL76GLJ1wZgs3xdbsyHKTcaPQ2",
  "key12": "29TT6T3w9wXFgFsVXfPvNmVdWrLwEc7RPn99EvyYNJyyhUaNMzdLyZKr1XT4p8EdokyVkXN1WeW9ULa1qKjzC8UF",
  "key13": "2r6NnGipnSqb6jRRbhHjC9xwVdF4cueWp9y5XYefsbJbwFeJX37MaAgKpkA42DVg9rDYhgErfQb8UUEFxAzrWPwt",
  "key14": "4YG9GugnySZum9tJqzW47iY7ckLoYFStARq8KhYAEdJymLKSQ9rbJdcM3kY7i7Csy1ZVd6JcdqrR1uuWg3JEe4kT",
  "key15": "5XLNNph27PcCnwFEt5JbzTqmW4DJgXxfkN3vV2ufxRRoB5WKS2mNTv68MVP93n8vnovsnQ3JJ5Uw9DkKgbnCYkeZ",
  "key16": "FiQVEDNGss5VUYcSSaZtbPKsdRAkTKzmRDczsGwAHadGJm2DpNQAyQZuqGzotw6Qx1rQSHvhyKXXQ2FyCogwXsX",
  "key17": "bDXzvEo8yMupjedrQXe3ujBB2nVtviE2C7TEthKBv3LmqnCrsGXLwHwgkhzLFYeXan2gbTdnu8JrFcXSbuhf3Xu",
  "key18": "3k78mLdULdqKD765rsVmXk2Xho4e55Y9nDvzwWrU2whnMVYvMzxo7zi4SqLR2EsQtJsGmJFkvzU8GqJKyS5aeMLS",
  "key19": "4ptZvSXx1e3eGkZx7rd3RuaQfgA9PPj48M9asrGskbzaTTUX79oKMFvDshjT12WLMopzB5P8oMXTjx9qgopNnx36",
  "key20": "jWc6vuvWwhuagMULGShCDEB8mMgJZtZzZTCMxUc3XgLBCY8UuYJ3kmDV5nyuxxnUomaHf2i8PmFJb6iKehCUSEZ",
  "key21": "5pyCkEkkjqiw11i8B7eXMurURVh7VxXaYTcvc1VTX35Jae5z4vqkYVj5iiZwzTiTMKbzca7mMqcVubY8uatxcR2i",
  "key22": "4dpVnCZAbWtdbhSTuA1PWEgHmVhTDkL9UpT6HmfHPEihgXWMVXEJdUW6eyhs4BzsPMYYcQsW6upjRHwUpPMqMEpD",
  "key23": "2ZKkB7579DFxKG4GQNq8JpnjQ3bRDa7nxccBBhxRLoi86tEQH6yEVFSt8bbXwUxpzPoMV75sC6S3vnQpfgAsqDW5",
  "key24": "21MUCzwcbDrjLo54RWjp4RXeQdJWCs1GDTWigUqxDPrDpAhDSdZzWGJ3EaGQcHfskAfW2K2n4YcRoFRUs4Akyiev",
  "key25": "2KQzfoXjNKZopacUJPeYvwirBDV8Hcx8iNDhjFX45tyEaB8Gj1gyDM6qeaExWcyUSPSKcPniCufp2xaTQxM2q7dv",
  "key26": "4C4WXd7bVa9mkiTMTMYMM8shNXKVeDcP7iXXQAvYaHLNSFcPMX4vzjL1PEMieKLMK4EXUwbd2eVX5TozTc7s9CXi",
  "key27": "2Pi8FMbDz6VyrUDdK6u3ZNWJSMB79dJNAJ3ZQbfekwvxk6LcGeHVWLCM2ynsWm35VAYffMFV2Be2ZkzfhAmpt4Kk",
  "key28": "2FgwVb1EZKZEsaaSKgWU5o5G6nmNKSfCnzteP1sq7JxaXp3osx3vHLYxeijjaG4eKLy9G4Eyj9qYzQUHwxNbadV6",
  "key29": "3zxkFsV5VAMjhSWNSmPfJuXSWmdWgZNSLLPT4PjoXQxhbqpEniX2XAQUXw9Rw9rKXhRkJXvUEMvteDKch6YfpETq",
  "key30": "yayH4FGM6Wz9yyq3UX85MSz36EHJ3zoKRufMM3N4mgeRCRdeZppz6r8wMofoo3H5ArjxYKzhbAZVmd2iubCEkaf",
  "key31": "4JhjQxdoHaiKzj5pxPAmU3Xi3VzuPndbui7svMmFjSJatGie5PoeoTwnKQaTuG1MdpuToTU8YHEf1EtVYwsXNibv",
  "key32": "2NX8aCjxWarFsGN9kFkMgfNRfYJM3pQBAxN6XojLrT3wSR4jkeFNDXyqk4UibXMvc1KpkkH5eAEjL1SSgLQNj8SY"
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
