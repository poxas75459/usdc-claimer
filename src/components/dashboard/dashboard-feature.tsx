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
    "2w7WztbqcoubpzK9Uu6PexUAMXLqEUiSdhMjbDJvSv2GtvYajmtewjpEqnYfJuJvF7jj5venSawRTpUyn3nPYHgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37yHUGSWvXe54mEwi32vGD3z7Ff8wtyRpVcvMh8xFzoAaK6TWFVjf9tjrEkZJQSprzWWWAJpav8UJgtC3r4W72f6",
  "key1": "55s5VzSmCVPGomx9tfFMwiUHVcuwv5hXuzKH53Z5aKBgdjV6uzZzYF4Nch6D6hKSxRaH9H8urVP1UpbvxU4jq2zq",
  "key2": "4XGAGPvZePYY1Q4JTcBpZw27idYbhY4tAX6GAC4YGppbmH5MiixXLJxojcCDCQ5MLfFhWyc7UXpt7mR1YrVJ7oof",
  "key3": "FU2CKYwR4jFRFF2q2afvmCMaA2eJhBBXJYRuoRKq77GxcmEiGvYNxc9SBt94vbfZMLq4QBuZXmtWTHgH1ttkXk3",
  "key4": "5z2ramjoh6LPCe7NmZ1hiZoJpk7RX4KJLPhWqRDiudgdUXLZtszXf2tsEYu2DuViuCQggL9hGZdQZhWk9F8YC1db",
  "key5": "3AsqcCyYEorU3ET8WHDuAaiwjZ6h7TrMx5kYhb9SKXLCvNpxqweoRMEHdB6qcWbKXGULjjy83Nb2bqXGUs46zZTP",
  "key6": "NwdB8wTqchmERenDCdQUj8wxJrFeunR8YoQTsGD28N9aBzMvqQcp3biLVRj8cGkN3hZYfCZHLFpsKdCysxHig1U",
  "key7": "5zEFZYdaVzvpcGNAg6ugwVJg1P2peJPK78i1SpgDM6dxEzSRxRFDBjsdcfiAkbtkFpBZTfGsJoncQMZtaz6SCSxF",
  "key8": "3oJNkzRox4H5ZgNDw1qkZEy7kT8rHyhCpUy5AAmJeBJ8iGsSVniFBTUhCh1g4VpgFdiuJ78DaPTsZ4StWxdMsFDj",
  "key9": "4RHo3o9vbmMXgUHSijarufib26USS3daj2q4QvL3YhxyiCwME25u6qrdfAfsn4TT4iE9kP3gAmy27sHo6iuZ5JWu",
  "key10": "4srWuJ22nPUFFcuC1cGVf1JyzKUMGK1QY29WRrRcYD8oHwNkxrtvRn4whLJfic9rDtMWsMWVY5eK5Xrys3PbccGt",
  "key11": "odZBYnpkHD1jVcRC2DZ3WTLbNUBJNY19VkfeJyqdPPk5fqttBoW3hRaj1bHjYku4nbXARQiyE8ewRaTefTHsTjw",
  "key12": "5cuLxq8FDyEBsScPa65Jbx96wFiB3YA4DgZ53h4h7g3YvYNBFLq53Umdbn6NwBmYp4DbqWB4dx5KYH18LzTzZFXE",
  "key13": "5PGLTzSq3yDCmwrQMofZeS8zvgPnwviufgCf2MnxpGnsxuQ8vANjZjNq4TNanhoQXsiF7ZRMf2RWVvuGVmuSQ917",
  "key14": "481ukxC3FqyTt2sKfCmBR895hhpCZQJjBky8p8Vw9i3tcpCvtDj7vUzBH9dRd21PsbszTFrwJyd43n4GDVNnn2TC",
  "key15": "5JKqAbEGhqrN8gXfPFa1Ehbtnrr7RLnaCSJJpZVweUwWFG9cRPt4d9WCavVN9DJLc4gY75FrHFvbSw55vN1eZihH",
  "key16": "4ptGeEGjnebH3ofMf918bB5SJhNCvsxsqFB6Pwj4My8BqeJ53kDd2oYehKZBBuWMwpErpjuYmrP8XfvxMnLyZfL1",
  "key17": "3B2omUVrYpeRCC3uqnwLpqqHC78zhL5zEyNWS1vPEGZRbc1sN4eKMFqnB2uCEShGTBcA5TAksDhDxr83uzYCk2xs",
  "key18": "2crSPRbmt5KrPJv5DcpunsAjtEixke51MV5EfcEc1uUwhtF62NQgnyfrryoxo7HK1surdG6BzsuQGuJSJsRi6RHV",
  "key19": "2ZPheEGexnfkqR4mvcbaHQzbUe4bbmK8qfWXPAuELL6bQ4YKBKw5GTdXhUHm6XpJhips8jx9Fr1oX3xgDGbHSwcY",
  "key20": "8KCnXqjAru3UC2NM9abP9ihjJ7CcNdDREhTwnJhjs8axRzKEkewzhas2mK7kmUkJX6jCC1t1zGj98iZ7GbDVMwD",
  "key21": "KwJJfqCjLRDf5DGd9x7tGJHNSM3xA2CzNRyE83i4Ph6wmB1LmeehwUeDPk7LhfXZdT48LKeRUrxwfSC94MnQdKs",
  "key22": "2NrSULWfgYytiR4WQYnxUWH9rQtAZ59ViWDDVUNza8o6cp4XhSXocv7xHoBW6uw9S176hf7Jg4xix6rkEgBF17f7",
  "key23": "5H3KDmH9iAx1a5yTSk4QCoHPbGNCUnXcLqDPrBnD5MkMaqdWMtdUeoPpK4PFaE1Bup6BHD6QxvkhfCmBgEk2243x",
  "key24": "5Xg4KGULhSrh5WBVMDRub2LBmuGn5ytxXrBqGEH3mpd9TZR2JQGdJKx7znBr7RgoApswaT8tVCE6Gw36X5nzPRwb",
  "key25": "FQcVhEB4SkvHdLvfEH2B7okqvwYzQw3dxR1xyp6uoUaqvMJNePjcXb5T1Ne6wnvL7VmJPE3kJ7pByHRk2CK8PoK"
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
