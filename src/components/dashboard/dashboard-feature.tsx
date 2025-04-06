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
    "4GFm6tB6RRjTunFtPNsRU4PdLGAqW4irBhmnPZVx9bMXwjQn2bV5NFRdqDKWKDk7yWGX4u4g2DppfyVwWj8SDJYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnkMhAMQaUvErstP6Ry2a37zkQpCRUtrVVwKc5TaJdYxyWa9faaUXvGCjSKrGj8EoAdyn1ay5S72tk1FbuFLAZ9",
  "key1": "2g5iTELjeivPHZuCYfhqAXWnjDenpFnRPFzDZPW7qpa4yd5vkfEptxPxvGs9di8HbhGY7tbTtkinVsimeNXgxT8X",
  "key2": "24LU2vbjst2Xbr42RQSAC3bX5NB8D77LBgyRiPYayxd6fjDKCGFwpN9zW5GTPzEjAtVeyXMaoyJE3r82YLDPgrfR",
  "key3": "4XR8zS8yCjsJTPu18osVYaRntpxrejhPu62emWFqKt54CPDYL6LWGnPDiewxW9bKsusJMCEBgjZaVdch3DsxfXRH",
  "key4": "4E3hC9LJ56j7JFMFpesXn7eFmeK5yPP5h6CY6JFGhFWwDwf3Hgjojd5R1kk5AbPqy432jEDuxTk7momZs1TpNLmq",
  "key5": "5hgF4YLDF4PL7UbyaPYRS8AFEwEWHWvtX8rcokxA8ycaJBwhqdVWghosobkYUQSWXGbJWDUjBmdCrBhUA9aKNQMN",
  "key6": "4hypq8wB7mGmMyhsstVxd92hJHPQQomxbegALWPphakibmk6EtF6AMYRYsZQT1vmk8eVcrRaFd8yEX2wo4G5jpH5",
  "key7": "3raWQsyEM5VUPytfagkjBXM8uNHGPxUu4WVpZViynZUFujsrqhWPEHaa4uGNqj8H8QwGPPFwkmtQX63BuKdyNdo",
  "key8": "3TkRtvwN3LyMmjJqrGeKz46Umt2qH9oj3Eh9MfGm5gavMVKuzV6u5jRA2ECeDeV6THqwy8Zc73mie8orhWzoaYew",
  "key9": "4fzayPLnCdJMQXWWmYvvRLfozTiPop1m4pKhKFRowPemya2nHzxGG4AWSgaannvf3dvZXXfQot2pGhoa3pMnTqsG",
  "key10": "4Pde7NbGxEvM7xkYieHHSkCev91eKy8fc9natT3SEaF8mBZinzE8DUSkGsuM5cyVgPAgbWk5W6H8DzD5yNAv7prj",
  "key11": "3p4aXC22efp8FzG4h797hj2dSfFPvKmS6exNFtgzLeA3nnMZjmYV1JTZ6DaVVKKmH7sY3QHLTjhGNXSwsBpbNrbc",
  "key12": "34DcUd8AZxyfHz1GZBqinEsWzArdDojTKjiDt7JQfsBVcPi8s9mgwKPdUPLoU8Ub1j43tok9fWdFdDSJJK7g566D",
  "key13": "3B9gsqchwKZKXtbXoY6H2wAKM2LYtaH57PcJMEXASwi2YFRTAExzutfgVkDQ4e1Adn6C6e2hfQnjH12JR7DXcY69",
  "key14": "3SSvL4mn43f2wXmENuTwG3Qdv1uAvk637aPtn5whjqFHshAXPZvzN6qp8hx2mHgo5VqXB5MYysR9TjxiLwySFfPa",
  "key15": "eKdMtgDh8hYo5byWJLk9gJaP98McdvnEGjvZrxJAHQVinG4uNBeKaqA1A1JQPa5LuMUnxzpwPQoG3Porw7XRZAS",
  "key16": "4ZGPfpF5MMBLc5hdu4vLWkpVtgueHNnPcd5ij5UPTqgpRsBjqnFuVFoXsUH5QD6xSgg7B4L3MLKmMSSiESWT1Hgk",
  "key17": "2TojtD7QkKNcRESyokJVQEAR8wa3TThHtEz5SZ5KtJncqPLc45rJKoSRm4X5hPzc3hBzhq3EMACTdznCsS8vj26p",
  "key18": "4aimT4mmNk3MEyVa5GVtGP5NEwr2iEsTwUfJygRxUApRFRWvog7rPL5bxvi3XNsp9D89838X9HdnwSwk1AM3BNih",
  "key19": "2Q7ae9WSrfY9DTcpoVU7mNmNRfrftxh1FfyBnGABAQjDQxekGurRfG3YRGXXtdurrZiGJzkdvCceRCWWW6uPjA7S",
  "key20": "3hxnP31Fdk9XKCsrzNVfWRj9mQPUBZmDKKmPEAPjsivW9jqnphkdTWMEahp7ykViAZL9v2GHvx83wgkxGLnQvVTj",
  "key21": "3msTdFBxvZ1GHiWBkEaizYnD4T3Q57eiaZnfuyq4taNGUpKyUCw4kxcMop9kpEWVHFSjWfpw5txLeRo6enxVbbQh",
  "key22": "64B1xwRcEEmkKxs4FYou1UUdDUSbLZWJtS3NpTCfnekHjRxkdt2m7rWZYy6x4vw6rUHfRqf7umRLMJiRMDHXuBTu",
  "key23": "3UhTFqieZPK4DVSFujo5wqeg946b1sR9fCub5x3pFStdNFTQR1mgyGrfsi6pJJKEZP2oG3tFnvw46NK9SVkfykjJ",
  "key24": "4om7oPbJk2sNeEQvtzzFdFDYMHijZwe1NverthkLJnSAL92rCCPfAcBPkFpBVDhs23DVLd9LXMhd8VhAFFE1awhA",
  "key25": "NgeXzZumAb3Dqy91Ht4SvdHz7kgA6ueDUvo5eysdmDejJSR5xkPCNryxYMYHX3XGgc62pS8sWYC28iZqwv8cEJV",
  "key26": "5FRuyZPRyyw42KPUsR4zisp6G8KXARNPqTsz6TwBUhzqcXfCTX42k6niTnSDSU8SrSJhCoYYyEsqKUs57gtpVxqN",
  "key27": "2CHzzWW6HPuuEBhoEzuKYSrtWQrVa7JdhocFUpbPfBzGL7ZZu36NRxM2MxtBySK7bBobjWiTioKUWVzMDSVHSNC7",
  "key28": "5P48pRoB5f5aJJRxf7KxgHQxyxQLFzAFETYDtfWaXEuPGtzm7hrqCkNRWtB88sBLoDA7TZjPV6bqxqGCF5JGyUzs",
  "key29": "4q7sekqhrBfLekyhcG5nXEECUuJdCdvts2qPDKMySoLwjgwDN7r9EcdJ1wTJxUhbZ15TduTdUdXp9xPRGvPTpVE9",
  "key30": "4VBdqtpBnkeCyYnY6QAxvyNQaL4zF4i7BMPv7buKMV3ueEh9DFrH5HuaYa5Q8msTJc1SugdDAFh7vyixHTc4W189",
  "key31": "2meHfzrqpyNTWfHfcm2AkJhsaRo9z57SSfKg7trh8S17oXz5KJswsNjdhZwuXK5yFQgcXD281tfvYh3Ce7Ym5BKp",
  "key32": "5sxuVypXQQ6MH8nNKWG82m8V56GqQHSrZQymXfTZJEs8bfnrrTpo5LL6xfhR9Kdteee1XsFRhavodg3uD7e24ioc"
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
