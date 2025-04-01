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
    "ZjBp7xFi3Gxa2yY3Pv8LDJasJaCsuJzxkzVVRiWqEqy9B4kkd6ZJ63YvhSoH6mJ1f9WtaAPi9kTfLZgqMSFxFkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wzvtuXAXxw5ABN1oD1wRooL6ycuZsRj7oaM5Bt5ZKJDagyUexb7oonBdz4BpefB1Z3s2s8oZH3zgbkvu8soMywm",
  "key1": "5BXAi67LGqBiVN8MymMuVZnuN49Z9KdwRPjjtT5vy3mzQeQiMzKzADqAobdbx3an8J53kBeZ8E9ggoYGz3PL6VNZ",
  "key2": "2Dh9ZNcpCWDRGrrykYyBjT4w6jG7FbFQZggeYu1mjtsZGrj3oBtWWNLNNr2FMYLUpvwJdfewagEvTQxUpDwWdpb4",
  "key3": "2kEWVDSJCtwgNKd3q1CjyCDL9FA4EpQTQAcaqtV7UPH5edKBBe3z9DNHEffxt8bp23KXAq2WnzsWpvGVidGfSZ8q",
  "key4": "4YUfiFrRfnPQXvdzQRQSZjXYbhB3GrhVBAGtgbXu37fV9SsXNaztcrMqFCdxgrm4Rpp6P8ZbEr5VZuec9nFNqzU4",
  "key5": "a1tdfou5wT2tnM9y1KFudc6h5ChPYazSH34CsgSGgPKAfHo8UetbiE81PeVESo9oXDTyEKBrJSGrUTjAHBBcXVs",
  "key6": "56SrfcQJStEXGzQKpdLVaqC1mcMG9BgBiaMHZ6pgQRuVrfZFeyYnCZoLBZ2TUgZt2jMaXikjECVoVKggaUCsLhDz",
  "key7": "4RZotUD7w5mCUpjzzhYtcppJx8SBJdvveY3HjhfGz742RiaG42MYHRvp1B8BCMEFoBNZmXbDaZoKFZcZ62MzkuiG",
  "key8": "4c3dLEbCLyMv4QVfYC6gPoHwXxufBzs4azP1bkCYABTPudBd66RnAKk8hNBg5fBPa6ePtvMdT6XJY5JtP8Uqc7xR",
  "key9": "wdfKfYpRHYtWXUUj8NAPRw6Uth256MJG6LJuVrWqVSiEYrKn69Qoc3wH5kpuo32niNavXTa8fh63kqismmxYHTE",
  "key10": "5SHt7FBWppQvFXzhxhfZRPUTzD3MZbhZbW3mv7hGZs8azyRmepquoy6gjVtAs6pRcc6cQogpey86V3H5ubqYiPwi",
  "key11": "4b7RurmE7TNqHrwJT97Urp4gyFMvvPFm2kmGCTr3GW82NW7tac4wMrARzGz9haqFtY4Ed2axn29NFbDKbxFcTvQa",
  "key12": "fs49c1spSbCdUWNQZF1VhgrrA8t5qapxt4MCQU4wxC3iHjofy7vSEh5qcwwUtbkfK4LLbivemATqpQknFkYLcUN",
  "key13": "52bMBjuPrC5FPJG5fCBF6D137WypvndHGs7E7aHYAztJZ8piSU6oPxumMpHH3hgJhw8oXkFRD9WjBuY1AGvWthwX",
  "key14": "4paua5Mi3cwDQPfFhzbUws9c9C8fPy4YNMszb1CMXwqPsCD2XXDNaZSfj2GrrpEoyMSktrmQV6cBiwDLYqFUFYwa",
  "key15": "KCkZAcqv44AZ2DZL1zBhJQANsQu5kp3pHZCEHKwa16Yvihb8WcB4cEJfD8D38FsnUfeLVy2ShNJorCTJRxnqU9p",
  "key16": "hd91jPfNvE4PFdUD2KMhS7gWmDeZ3xKD59ysNaeqKgpsjgYVV3X3Xr1dFZ9S1oWhHhjfeBYsyESqsyRv49qQEUw",
  "key17": "2qQb2JxwGmB1krEMAa15U4U2nGd9mVCWm3gEYmrrnjJcxwWfpxYsLTop93wnW2y1oCKqB9cwYLewL493xk26HsAE",
  "key18": "d4Kpn71wdeRr2yXiseg8DEtZh87nBaPsJEEDR6ut6eTZqw7YeMnbRitaZKJHPr9uAri4CqW1EBbfAwykbCLA9ot",
  "key19": "YoW5sNd75wpMYzVeaEQDwEdmvVd84dSun5qwU7jAz32T9j9ubHvTu6r4D3eyr6wy1LQCB9H2niUW2ciZSWBwvfA",
  "key20": "5XjRdeVQR9ZYUssrwYoPuqgr5rKMRB7eqAeYt3nBSYHQCWhFR6CYZxshgUas3w54WYXJy68HccCmF3PG7P26PzfJ",
  "key21": "5DGD4gw1VTVRL69CspuPdM6Bdne3BHWUPxLgAQJDW7js8LiRmkhpbzT7WZsBrHUoQrTsvv53ooPVTv2QbxJHCqhM",
  "key22": "5nxvaafo2LsC6Ws563xTya9dmCqV2D7adNKTLKKCGbZ6xe7CcdjzeKLpeckjYtCesqxmLkCZk5MLXfk885Lii5oD",
  "key23": "2ETAqC2XabsaT43J2Vxxt17rcp1xp79geMxBjsEXv8fB3LQk5f6bX8HsyNrqCYg27EKCvnz8SpYPP9AnXKzPXvin",
  "key24": "3EWTun3kJ3zDqMgaVfxDc5FCpYmNgdY2CEjU2zZzvMeypzvCEZWxxyeFg52HEsaBiwPhepPKJnEjZBoERNsstJuy",
  "key25": "MTdmFAEYFcjZdNiGGc6CER9Cg7YdzotDddw1hWLj6RghC8CNDqEjUa4DKeJrMTAMMKay6friUW5e2mSpivWgLRZ",
  "key26": "2CsWSt1ZV2PSwABkyVCDGxSYNa1FXqWjDQj4niBBHePhVXotG5vbAb1uBLMbW8b6WM6DYdUunNiXm4cPSx4TTmyG",
  "key27": "318MqggE99TyvJa4Gz1387ufEwuDHV11yuE1corLuDWZsqZj2QGms9yaAtUSDZLT5LQMASoRVfzEjw4UpJznT9TR",
  "key28": "2UBdXryqJqD3yTVu9oRUMKhgZwh17L4d65YVPsa296to4MCuVAU2p1onvtExfdYQCrd9Cgcy9VnWH5CAMRz5VcGh"
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
