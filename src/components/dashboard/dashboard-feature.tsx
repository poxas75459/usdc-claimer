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
    "4ybUxfPSz3SA3Wd1GgQdK4jyniPLVnNv1gzdo7SFo45PKiz6Wm6Qvc7AXEJT4coHnrADhDhi3E1SdmBypE21tTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyX8nE8YRYek6QrKf8pSam2TGTHhCKeLtdWkvkwe6DLfx6w4tBr2R6LXkm2wa6BBLS9cr5MsAN1hBJBrBtSf53F",
  "key1": "217ezwzaRd33CRptTq5g5iLj5YMmkCdturEB2wM2LwcUrjsWmKxELtLycbJxDcTBUKnND926rEo6AGcrtJw94ew2",
  "key2": "4U9bVpiCkrsYc3KtkBusCYJ7qgAz9Hi6gT6V4wxmM4VMxeKm5r4adbyn1PrkpV8vaPquhSeaJztE4hkLUEgZfPTJ",
  "key3": "2z8fdo3iBGQzmsSJ66KS2Jyr5fR5GGkzNCo5uB79yjkBLMKgsEadWrLqJDtqNBH64azgnDgiQeEEhw1kfBbxm17J",
  "key4": "2ojZuw3J84aPbfzNPis5QCcMRbPebCUs675UAfHvbk6CXw5w8DphLrWjjxTov1XY2ELmkjgiCsR14WRohu4qfmt2",
  "key5": "3EKaJfNVujYqdhGaQ5x69dBQGYDr6qj43cpmFWyJzvByfSbrq47XRiCCCmH5TNEoVhgR6p52zx5cubJyXNUE4BD1",
  "key6": "ymEmvFKu4S2dS8f2Fpa1LdexcEjGjnwy91TrNsbRDsn4h5jzaoMBugfJQq9krr8qggM98iiYyksCwnGardK3ux3",
  "key7": "5go8LwpxahJ9urdJ5jri4CRHyozq2esDNrbxcuhEWmtc9b7ptPFTFGozna8fm8dRs4RfX3DwRYdX1zJC1BAeeoF9",
  "key8": "3Yk1HJpx9ejfUSTpkPbEFyfDgiTx9oz5PrTrGnrTw34Yb9NJWLb7iHNPfgaU5xpTjJVZkDsLLfDAY5mTSWVsQ1nR",
  "key9": "2YR8YzrpFSm4AMVehLmGjeT5rtA2ZfyJMvFzr7vbafwxCcAHVkKDXvtd439E6Df9VaM5CPzuzzwhBp86Pz9bCvMc",
  "key10": "V6h13UViNaky46ieJ5JMJ9wzEZPZtciMVRYLBoq2w5WS4NzYCa4Ws4zZMJaMJ2HC591oe9sY2ZkVmBxCpJnTcLY",
  "key11": "3SfseFGBaadgp8zjkW841T84RvtgaU9McmrmcjXiz7PZyZLNPHwQAcKHXFMtFL5YhT7GNCAECxuStDKHRjboZtjK",
  "key12": "5Wb83NhgCqLJWM4XuCrWGBS2gvfa38Hq9t7GoyhNm3YVRvuyYCmNKUvKYQJsvVTBxRno32MEBi3aRtTVCrbotRb1",
  "key13": "nhHCX6r8rrzz4QeYkXTZ9ZUehteJwsYHmFdsHuuUAJd7GgLKjrburNYqsYnioujsYMQ7grj7gujjWPSmWq3ERWU",
  "key14": "2x57FkU7SXGuCxMbpepRVFQUXcgSXXuiNZXgrxxbAWsAahB8MrAKjhEGBqLKdZrWeF4hHGQmGWrBK7NnmQjfHQnu",
  "key15": "PNH9mo44xFcCosf5BycWD3beJzuVYLTco6UH15svWQ9UPMtqTctzbtXhMViqsLhMvMD42uKgHovUTusAAW7NWiq",
  "key16": "3dYnT1U3GzQNjgztbUmxMayhzQR5riLiBRJrm6jtUYGxBTEg9v3UvJjAyrQkeCK1MqrKbJfzZ3NGMztScgiMguiv",
  "key17": "CYxRFchDcjGDqMHibJGTJfh353wKsxmZVZB4AyBuQk3v3rJKSdtt3GXwssLCGAvPLJMsxrLQFFjV4ZsSUV7UL5W",
  "key18": "4ucj1m6JmPJPJpXSP3nCaTpC2KiqE4pc2GRXMZdgfiGw583RYGNNduvs8Q1aZmCwud9xqL6LGtK2dUT1x7TG44YU",
  "key19": "5fKLsASYWSZ1TLyCs9H8zH13z7stE7debRDX1XkpQAAbkM79MWNRUoB4Vewpt92HJqSajF37BLGrzNT2UEjbd2PA",
  "key20": "5Aet2zSBDAkQCFiosNssohUVLJUxQYwFVGzcwK5fW2sUykEyqX15UCdmGdzJHCVrwpgL7rVE38sayMdjHwbtart4",
  "key21": "41YB6Ak8TbWCQ6qgqEZ9QHABEKdXZS1MTuDHsNFxNwuL4d3zvdhm7ENyC4UqpaLjX2j6n9EZwt4rxmzJzGBsgFei",
  "key22": "331aoCMuGmgSjBDBcb6z76iRtGwjXvETU3jxoo26yj7ddj8HV9PGYSLygboAmAgnrHKS9MfPiMEXegAk7d3QYaXr",
  "key23": "4aoUVpGLByWkorCVYr5ybbMABKStHZa1JtptyVBKhAiRr8AJqTuC7oYaFS9Sk6AR3K4Ka5RRFv9nDrfDmQSZ633F",
  "key24": "kbpZfmLWXEvQrNBsB5x4AVPXLB9gbatbWzrdBdyh9dLpW7fcGxXQ9WWxiSrzmTxTNGzYBkcCm9uVSEVaGjuJQWj",
  "key25": "4VM1WFQk5WYR5Be6BMN2wC4F2GUbCmUztGVVHJLPPG3qgk8ng61tfewVLhUAHMwSgQ8uAwBsVQkDuSTbUAfYoahk",
  "key26": "22TvEmoLQ5xenytWUAgESXVTwnBRbrrrCmom9T41FQmfoFBRGhfwaLBiEh6JM6RSbvb4Wmcb7odjLavAUowxp1MJ",
  "key27": "275e9fBVKfQ6vFkZ8nVTHeHBrpYp322YXWrgzmWabePkkpqQnibFF7EtNSJgqXFwUhLJuFdj1dinTWaA5wwn2VLc",
  "key28": "5XyQ2ZxDTSdtGqYZZ5yLYY2GfsWGhdoHxMpmwzmU8ZYTHhoUc41jbSiPAPjG2WpxWUhT6Z7xLh5R6UcbAnKUW82u",
  "key29": "4KoNsLaXSvjTYcMq7jM8i4rWNEwc65aszN8QnWamaEz1uRUBvqBfkpRdAxXo9vQ8GaqE4KQ7tEEvVww62zh4s5Tn",
  "key30": "5iP5s9BkRFMnzRqgsHVhvAzDYmzfG31NTGREwdoK9UDva22THLbhBK4eVbGPVox7BhCTMRb6nnHwGJpfy12bzUSK",
  "key31": "mCDzmbxnbgQyfuSt8tTw5VUXobQ5Q4yM3Tit3i8TLosobrjZozdTwXn1Jt2oBpnkabZj8QNaiFo3k5NwvPuWfDW",
  "key32": "3vn2E2zYEVy493dX1gY4oMKwMjd6dKfWcm5zuKmKeqSdkTexmBsje6s12xnTGqGtWaAbx522GaFGh6A9MreSu58h",
  "key33": "3uvNbXmkrG6gwcZ7EtbyJjgLmCgR4MAnuLS2Cb4TgDmDZZQbPU6v8wZ5DG5BLm27onvNNhkwPc6JL45Fvn1XDKFi"
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
