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
    "2qnLYQXxucZCpcRMvHyP1BLmqAD9bj1yCCZXb22qZRk2ivCZRnjh1eCVNjWic1vmumw4QVnC8vqE2caienLjcPLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgsYjXKHHRXw5Rkw9BBTjBTTSxdsQwEQnGKNDEnjBBwewmpc6ntpPyT3WCaozwMhPB59qhKfcwiSUfSjdGEwXZ8",
  "key1": "2zuon4oUb8Qb1ScP63fgdwh6QwCp3kpw1GKeEENTNjyLEnEsVCypHu8yRuc5zJxVgJ6AzgTN1mHtThTmhG5t7LDq",
  "key2": "5zJ9rNTyPDMQe4SmWfUVXqsc6BuEdYPADx2i1WQpUfwrGPHZKuSGSwPA8uW7JF6DLqCLH8jWvEQ4SVnuUYebCYbR",
  "key3": "3DgrUyEKZyTu3fcn8dCpy949syV9Wmu8PzBP1iRVNL4PFHokzmjrkZWMudYBDj4qfbJqP8ALe1JnRCMc1zjaJZRv",
  "key4": "44JmdwTvsyuHxNedftDcvJpJZff9nsPpQp5ccpfKLHbFxSKdLT5mdmUSf4YdsNAnBSuSRFGzggDX8HqeWrkDqV38",
  "key5": "4Wf6ZCJhi9H5q91HE18GRB8aWYGqQ96F7PgN7TdBxaUoSLbYUp197zM5VNFnuwQqUD9BQV95tTaF8omqJW8XaY9j",
  "key6": "9qY8saKmPJ5XrHYWSpiA37CubAyj1P8Hhbx7f3SDMJGqHJUeRqHRZxHBwLg1ofCTaHRobobWTN8UHsgG72k25E2",
  "key7": "3DqFzymST1yYFxYHs6iSBUvytDxUYLjQ4tNqCPoDsxjjK9Zk2114KzRxTKx2vPH41EVXq3b1fiuUQUrNBBYxy3V9",
  "key8": "3TQUp38exbT4QDXvrrkRJeMVy3HURKNNnWzHy8dw8JuHc3rAs6rhpKx5aMeCiohiE3TeGi4XteB6PbjLJHRWUfgJ",
  "key9": "iAMoeKxcGUmm5QR4F5VgmJJ2HQbSyjP65XrhBEuL4DvNtZAv1fNcmpg3iV3ie4GjYGsZ384ou9XZtm9btui53YQ",
  "key10": "2LMWttpQfdF9qmBpRtSoqkr8vorYAtTTE5ugY6YcUNkdzZLRUHqobh4NA4vZVQ3iANVftqMe47safTBJP4uS4JQ7",
  "key11": "4KATWZkMYwmAHCtVw9boMhbhjCYvkL5zRU2wfJq7PvePb4NArTDYTjCXWz65TuyAoHTkX8VW48bLUDSh4cGLPV8D",
  "key12": "5MRNZkW2JArC2kzBwxPFc3a6FgQz5MA77LzdHjSjQvFgyrcw7n1WoSDNZ9zidXde2PDr5JA9bh5vPhH36Upm6sdK",
  "key13": "3Dm2LpdgbRSZrFuGR7tKDDKtPWnQX2Uz9EfzmB89qgmJ81d2pc5Qwi3iZ3zCjNF5MTUjV99hAkP5qsTkoWRC1jGi",
  "key14": "3T48qrnPuM1a1M7H8fZ3NCcrdKVhVEknfStK38RbijgJrxyK1aLSdrAXFTgvrWdECxhsRRhsoBtb4TankK7G9Cby",
  "key15": "5myWaFHThzhWrFnNsecTNLrX3Rzn5HMbeUSionLqZN7r6ffk1fML7yzQzkAJXqWGTvyjBv3HfPQ4dCQLvYtXJ2AA",
  "key16": "2axGTyr5uWjcqCCkjN9CVQSYVomE2gEDqdRXx2BKUZK5WiEXrmd8zHhWEZz2aYsSg2k9dndWytCMV3y5hYtsysi1",
  "key17": "3XwNGDLaoauX8Qevm3eGTR7qtdHBiGoc6DsowFkDUMhk5v3W8jTU4GFD4PWBdbBTpkkgnngRsTxWNWyF95XtLU7f",
  "key18": "3HXkrBWJC2GqumXyidzN7s6Q5cYVvqnWmBcwzASEb5YPdjUtkCZE9tBRpk74FMCoBPF7Vbz2APDErGcQVxAK3y7q",
  "key19": "5q3Y5x1BNJ1czQ9dbuV5qXJxirVbFJzZjKgbFEZEmDqeYoMkQPFHCA4LkCe5Ni3iLWsqTRes3cbXFPh56CDZKQM1",
  "key20": "3uf9qRsYW4duqd8UGG3xM7ENrUcssMTkiY679AD2KiFNikEnRGi4U3HwqEmTw7WxEoU3dFw7Sg5xKNnrzwyaqUv2",
  "key21": "3VSHbM9LRhAWe5vn65gCV8KHDsksm99yJGn89CKp5LXP1iSayWMgZwuvgnB29ZNqCubbm8Fvm3BLLakSsT4efWBG",
  "key22": "5p6M3EbnhdYYpJBGdmybxtqFwK8UirSYrZiVvYHN9WBMvJbA3j39owGiHwkzL8CrcfsYvzT6ay8cZc9mR8ALe8o2",
  "key23": "4181ZD5mTnD9YJ3zRiJvVCc9mshNyDtk6UsM9EQV7W6KqfM1RjxzimLxqGNpdXWJuRrDf3QMQxg6N57DdAnhefGb",
  "key24": "4GbK5zjDhNQ5GChuQBZgQipXFrJFfKP2SLJfzpJAx6A9eoGGwKF4Tfs9W8PpVkCqYkV6ZjZqFGiPsnV6vP1iuRLy",
  "key25": "4Z52pc8uG4YZRTbiBEGNLqYhx6AzXagN4C7r38kCpKNjqudsnqs8VDEfcgHXxEFdAKWAV2ELn6cZu3y2hCRKmLzs",
  "key26": "446PdFz11Uw8Teqyk4TT8hFHVFhtL7oGUbfWRKTDxTwzXGNzyt5d6JGC77YUipWuTPoDNoDjLwq1kxmkiRonMtiT",
  "key27": "4oEXwUGvWD8rJNJvw8T7o2knV6Qkkif4JyfqcDR4be8RYDcEK1hXLFCHTat5DUoZH2jEeMmCTkwewWatbtW4fM7Z",
  "key28": "4Yiw1n8b5SUXbysAmXt1TshJx8w8f5jhHB3qAHgdtVyG4kEw6QWairfdVRwQevVKhr1LRgZh3GdbdsRZGfttCndp",
  "key29": "3Bq1158XH7AJXohTK8g84tcUUJR8ky91Fe18yRtxqG4Qby8B5qgimtqbuwLDjrZ4yd4jr1JR9BMfErAYwR9rX6PB",
  "key30": "3eW1sfp3Q3xomd3u3ayCgegyaJeorm5s9Ubwi33AFCYBcuEyyeJwK4A9b1e4XXJG4eotp53Jd5AQMvQB2TdZAMi8",
  "key31": "77AL8GbDuUqd2a6qC27bqGFDjrzFjo3CU6z7ci9ThCQuLNviTjmf6mkvCefpjxusFUKckfCmTJz5dzQE4CbGBay",
  "key32": "3jTJz4P9AbsvW8XaF2SccoYvaVEe2eC9SgUeShdgpHfppFencQyKsM22bq62MwrBe64mFpg75yuT4XhJnvVys9Nn"
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
