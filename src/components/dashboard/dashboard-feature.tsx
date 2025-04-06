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
    "5nPgdvntWJDAw35HsMHxffx2vuWcEu98spdkCXUeEQq2SjF5EjsPABhhJBndWUTKqjn4jUEoReQCDdsLRCKa6qBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2En6v4JZyGB2SS4uAVhSdfVBEraMEbmwF8fEoTD4LMzf4zQbgfpycbig2A4sV3KzTbBRejpVL8CZaiqrfDX3cEBs",
  "key1": "3raRpLZNtHSvkakemRKi3q2qkDU78hAcGEFsz9UXNUNV5cEdSKAyS9X4XEoXy89e7whUHMfVo943tCJ3zmRRJ9JA",
  "key2": "5uozdM5dmsc48gZAPvEB7c7DU7NzF1Vihh47PAJWuK6j7vurisDT2e4z6cNiDdPcZxUkjWBn1RKG7RXwSLyzY9F2",
  "key3": "3BUaoGxponiwGzmxctcwryYrcx1ivB6WFPXFjHo5hUx7NjnYwNS3T7zub8vrdxaXuriwq1mdkUPCNuPijerke9jD",
  "key4": "2KUQGdVxR2ALXdKb1rzhSCM8YAsoavArNiK9E1aocPhEgVRiBu4fGx9WDCr21xCB7hgpfkUTvFfSt8x3EDaKL5RH",
  "key5": "2SqQZBkTsHnPyEJJxzC41j2rtsBeDR6vXzpjPCHFUD3nBZ2qQUEzt4LFC3q13knUgbmyCqAFSs479ScJLgMLqmN2",
  "key6": "nwyCkYGinq64tPXmCdJXCBAKpZzVDYkSxbiKh1VDQhk3AU8j3CDPqiEqz8vmA56XF4poGZszMxDsBF4YBbqfCpd",
  "key7": "5k7W6aJhM2Vg7XWG3zHjGuXRb8oyE9QQSFaPfrMKM8rV5axmVe2yyV2tg6CkfQbGkzXx183EHMkSdfpkQ5DN6Ehc",
  "key8": "KbaC3fZP1Fxi7cwQsJfZVZX2CjG3DNdUNvpYHCq8CbZkeQVYdARDZRYmKBQXurQNYmYxWvXG9ztb7G61JwnTx7W",
  "key9": "4gBpPSZtcy4ks1Vj3e3qNrt6ypZi5TrzKUMSfwrEecpSLbvC56dQR3iuidb8tsbrkQNqoANCBQDgmT7MzQ6WH1VY",
  "key10": "4dTepS6rg8nbh2YHjNmkGZiQtaQMkXpkAJtCdm8sEd9K2sN6MQooacoRAgEXYb2WJ7S4WqSmKW4i2zYJyzxpEXzK",
  "key11": "2xohkqm1xUKgxLGNYbvySEs6hDNUDiXcDmdJQMgWGDzqmpsLhgoFWt6HvQbxF3kUucigDRmAmTtdFB4uUTmSkDUH",
  "key12": "495VDJEurMwdq6Vr3dT3TcjspRfH8LTmo5n3S4ZMKN8ka5dnACfhKw6pvLufnsb8DLxT1F75rWQv1r3eBmxVg957",
  "key13": "55vUwXoHzhGafC2YxxvtUKxBb1mdnKWC1zymDqYoNBMhLBdk57CEngqvp8fUULkPQLAGA5kk7XFsMr3MeV5XjGyB",
  "key14": "5P8iACdkEd9W3firVkvZLb3pnXNsRXcE8j5u6oUDHmBCsewH8zVFRC3rejhKXGyLDBc2o349TpuafpeVvEFzsM9M",
  "key15": "43Q5rZPiVLEw42ig5P31QddN39rzNLEAtgARHECS9HJpDTVkWxe57kmdmPKU2P8QmCNwjPn1jmz5Phk742e2dDBV",
  "key16": "5zxvUeUsximzrLyBKuyj1wxvarW95CFbwfx5MydDaFDnkHaHBu2SKkDmmG4MPVxSJpyNBdt6c3eZKNZmPmLwHBja",
  "key17": "2MY3Cw4W2x37nnoUb1xRQoF7FGEAhnWNi8y8VaBNVTLwmdECc7eW79CEsbC86XCD1unT2zk4kdXCrWU976urUusS",
  "key18": "4C4SL8fKErf5s35CB3BtTVbe4hzvrrWrMAhYHCm4jzF9pzA6T4T4hVkB6QtK2FyYUwZf7NeSQChWMxzEi8JAoPxp",
  "key19": "ZyoRR2qtoKANiJuGRimRiMKVn54S4ZpNQq4JyERHQrqSUC4nBuuuD1f1BRzbppHrwXn9YuT4TXKiXWeXfXNg6NK",
  "key20": "2uq3JPS9ssZeKmxxNgFxpzwELb672ACz9wrNGHGZCLVu94hm7dk6YZAvp46fnA8rw5Wt2kdKNuDRJANCyCjEwCno",
  "key21": "3efcQ7ZMqRuacJYWPAvvbDU9rrL57YhEdJKWy5TqvG5LQnupnXqScr2E5sDhzZSeca6npn6oNWMpGMJKe9AW8vNu",
  "key22": "4EdEnnVUvQTN3ovyczwySQuTeH5DwkFChQrvdtuXTiwQC37BJRM7GtzfNpM41ygLrFEg2Z6sVGdS2cihPDvdLFPb",
  "key23": "5j4G1w7kXb9ZeLPc14f7wRhBDPAEtZ4oW7aYZdppB8UKW3vWjeED1tjpt5qMPa95ZaBZexydBkymTtfk81EjHAzA",
  "key24": "2hDzEvhbzqghLTFtyQeb26WdKZyE654HqUEwRHYw2kgc5icG15V1hFPVpqFSkeK8xiNKSBvCrPu7JT7dH7svEiMS",
  "key25": "8hBxiVf95qdpTHLAf5QrMuMxmS3TXfSUNTiLfo53Nq4dE7yD3zAVoMPSxN3oRCuVngqHe2xiy8U1Vn3yaEi9FSv",
  "key26": "2WD3e4J3mCiwfQ8zeBoH8aNze2oPUzC63ZP6MkxsbFTxwYmKUj73EfVmBA5tsq9PrQE2efZqob1qFBh1XQCbYUUr",
  "key27": "4KETAsj945kFPHnTteh35xAvNNUpKn4JvYYaoTFwEBGpKJT59jyK3R72RdKbRmXTomxDmYsQqadx14jKxr3uqrUe",
  "key28": "3s1zmY9KCWHLF9RQZAsB9nTr9Y5SkRHHGdT7B4eCLgawnePPPbGAPfSTdNPnfQukYTLpYpYpGK4gMaBcZQW6REjD",
  "key29": "3k5GKGGabaCEgrars6tnbMC7yo3WHD6WLxtc6XJbWY94gUPetkDEEpGQWwmLJmmvsqMrefMDycE7M9pjTp3UDaGT",
  "key30": "2M6iFsJnZwUCLg5J8FZ88smKdp9UF3wTsomXWacsXunmoEddAx3dUiLG7oipKhX3swy9hL19uQ8AzuM9dtjAQLgb"
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
