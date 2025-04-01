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
    "5mHeYcKyviMdMTPr5REp6XbTHMuqicDwPTmo2eKeyQjKF3PsA6oqruzC5A7JHs7uGqKQW327B5fxMgFrhtPmgJkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVxAALoERXzjizdwSKpLMToyWNK7TJYvTEzCfxBKzBvK4Uc3m9WKYCCw1hZbADoVr9xzU8mBXVm5akU48VmFrXQ",
  "key1": "MSapd8X5ns34BVNj9YXuHpb4qyWS7zHzAYbAa5VvzvVrj9nSEMMnhp12rpC1yfCuMTbVDPf7N9r7QyruzM7Grpg",
  "key2": "2vVTGTLn9LhxdGfwhcMZaTp3mPF9oeECvqaS2f3tH6WzDjUFcAzTfr2ne2p1ZstjTAqovkC6yumCQxZ2ypqiCBgj",
  "key3": "jnAjpDkuiim6KTCNxG8ZXfWT7WMXRX4qLj5CvFdVHBLbWuHPEts8p6rXJUycZgnMCketEWtgyG5kpbaEPYyYETr",
  "key4": "R67cA7FS4gj2YRE7By8nvhjjSnJb9ygBxwKS9zWvdWJm2xDGRkdsw6uAtiefppyhZy6mCnJbhedFunxJTx4B1AE",
  "key5": "4XZ1vxjzpzHvKByQvboWF6pLGWJhQS46DY6JHNzPiFZ7wtncCJLDnedztL71quJRQv5mU7pRwdXchhfaNTmTMsfp",
  "key6": "4nNr5uqtdQvoRRVzHRXqSe98nCA1FQLaoPdUNB28e32Jz9WciXRZ3YLUYw7EwVwRagfaftyCKmNrQfNMhJJrjg2K",
  "key7": "4u6sY4E5SNjsbSg7QZ975AoAsnSx2wQJ2W8ArUgxsnmKAg4KFviyKAwi3bHWK9MNRXHDrufYPWiHB2z4bDBs3oq4",
  "key8": "3EbCkFUdSdmBBvRMdAMc9UKjzZjSfMvmhAs5yQ34Pky7RmpWX7JbREwEkjfB6d2wDYVyuTjSJBHzcdHR1recHFH",
  "key9": "3MR2zcve8PbKB2RpzXL2zHoZMZ9RLHDYxqPJ3Dp3CxtU38uicjF1ZJGzC6Pd6dX7cTdA91w33thpGFvDWGwePNuF",
  "key10": "LrU9AbimdPHkHDhEWfLF9prqX4pmegN1J3KyLent5NFvmam811TSs6VhDkhga4Jkc4fcrYPEEa77Gho1iDqMWx5",
  "key11": "kBTFVKJnLGcShKeXjRJ3etMhqgeUtnGVkjrYW2mV1EHSgYmCsVaxUGq5BHb7FRHj2pXkn79EfPYMLFXkHQW9mG6",
  "key12": "4J78GMUPyJhNsyhsQUZm7erE6VpSzmrvYqSmq8Gfi3tDuHtyA1L2KMuNNyhrwwzccDaHLGmfgWDjSQ5X4tXjVyMb",
  "key13": "5S93rwzQGaFF1qp8XbrtCmNgauegX1hzMzEzddbBRt6H9uV3UfxNkhtx73hQph4dNTAxFkrU9ePbTsnkE5TvfyDb",
  "key14": "2oxon87Vpqmi9NCaVKdki4YFjNPZYv68Sg2Y9eMeVtq9874Cy4DHomQwgdbwYb8VVwheKEuLMdXqTFLyeQwsAMCy",
  "key15": "4kiV2J9Dc8aCz8EVzMQC3pJfMKKMs5SMA7BdJUoe71kymLBKds6LkXxRvEMTnS4rm4dyoE7UDsPwqzNh3FBnE9z9",
  "key16": "5PZr9srJZHPL8ge6ZyU2z5VYWJZpgaUwqo25qSpmjoBevFh2xFpjj9tC57hgZkmV5w5kFnAFvFWpVnVn3mE4YJEV",
  "key17": "3GJZ2CxDVRkhhxR8rRMBSurZcLvvya9BwewsSnEyXDGQJ5TNq7b75MNb6UUH4EcfvGydJTKcs2sMUCw2i82roNfK",
  "key18": "5JhSBU5cZX8TdeP67nzE4GZ2F9ikKT9UB8qzjeXPXrt5xcWFr7yAXfuSf4dvcRofuBvsYTiS5bmFiB3w9EqBi4tK",
  "key19": "5M9qbSfiSY7N64WsYaetcuhAL9aftMgDM3GvCa55rtkMaAAuA52qo6jZCRjpADgGWXU269i2KAdDT7UFF2rgEVwP",
  "key20": "5hPTVnJqrMZ3L3SUwKhyCoCiNUNoF3pckdmg6xDCoPmAM2d6tLYWTVkMQ2FULBPzZar6BGcHWKvUW3DYjeyXWnZd",
  "key21": "2Nw3JdFvEGcRiG99uqCnM19ycpYkUqGnEmMqcfbeFRUHfUQXGq3JrK1qrVmSQGk4jPg9mVmmv8ao6cDYw6h61pRM",
  "key22": "2maeaa9GgjFG5mziVkCYgDGyRE8sKXXcttE19t6nCMWbZe98JX1FGtWwdBJmixd78iSU44QSf3h7TZDBooyPpJi8",
  "key23": "4Tv747p5eUuWrdv5SEM2WmjQ1fMwhQRqVn5WXyCtncPibuCh9MiH2M7mRkxfGZPuHrephoTJzsoJRMFsEUL5oP5b",
  "key24": "T9P5CptGHCncRAE7iAaGY7pkyeYmqqbT5DgYpbRKMXfnNX569yjb4fD31ZTUabCzyfC7onriWBoGJsSPLA2SBEW",
  "key25": "EaHVzvQTK4e4UVuDeSGj4GpTUGXmfTFQ6j1zwDwTaJtxRSrHJqbc6fTDWLzx7eor6h63j931vKGqSjrAF4hg2qr",
  "key26": "5aAkJm9F1QnX22AJrHtMmeWtkR8v8ts2tR5Tk3FxP6BG2ANWFpwyKQMhLAHyd52uB64RjCVJFEH6xp7urwUVbzv1",
  "key27": "4KCmnCawNRG7FiZe1EzNXvndntGuWvf8JKHhrrZ6XhgFwqoaqggrYfHgJgzMVfNqZKREuUWAeQT5XE3UC8FhzEdU",
  "key28": "2ycX7BkSf3s6VE5dGaaVeeYfDc7PcQuq5dkRr7rzxxtfgo8vG2DbPSB96dbPZQgj45pgW7JFPnqZo4bJRPMLk6BH",
  "key29": "Cnwstjgbb1mZeGEJCG4JodvqaprjJmRfVSUT62x1gq1a95Bn4a29kN26QKGaR2CdJZGyRbXbiAa4a2cE1y6X2sm"
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
