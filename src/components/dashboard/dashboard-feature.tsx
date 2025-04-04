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
    "4tcFML6ANzXFiv1jR6SzbjCymxPfEr2St9PCApf2oKYoXYt1UFKmPqMWhR2vPXoEGg119GiXe2qpSHND3jHLm4Br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExvNcYi2rvRw9em68Hyfk9ase5cEck7aq75f1VoLL3NQJhRFvEnoP6BGp82XVv51wQtep7jrKnForeK3GYGztjE",
  "key1": "2rYUKKzawE8P6x7me7hw9QwwYQFsJx9RMbcFAwBqhqbBxDnzDFAnaVKaPBHPka52EVGfJqFmq44jVJNhVKAWDJXu",
  "key2": "25j5rsNG7JLLCciD3dyaca57fDCszaMwXCJjpgo2CE2mS5ZtqMDdGEt2RVY7vxLXy2ztWhXJjmNGLacLQZ5BR8ZD",
  "key3": "43vMxa2wxjuWxMeqxDHpRTpCjcJuBnEvTD75mMX5d5SYYcPBhpYJvamQWwQaKM4YGfzyeM5BYCWZ3RQESTCZ5dAt",
  "key4": "2xzdHuDU3DeRdY7FGDrHDdc54dUnajZEp5aB2LXpsG2va3Fax3JAX12egWp9TCgmz2BXes32TktkQYWZTgUKgiKD",
  "key5": "4qtgGvJHtA3nh64UKDKRnjUsBeBgktwtbxEjM1xRBo2R8ukGDEWisBAyHop4t7geWC7ZUaaiLjvpMUqz991Lq3BE",
  "key6": "4s7u9yZwq5qeVHH5JZJBLWsAwMvGQqqhSDcEZJ7dUfp4uKfPuWEMJTxtoFKYPJRrn9u5HJE93MqoPQxSrxEPsrn9",
  "key7": "B3iiEoTFbzwV33k1KGVVkBMkJsyAf8eKqdTfa1yXVoNHo6VdWN4MYXcx9UrdBFETUAL81rEm2eVZwC53ZawekLh",
  "key8": "3TiEpwce31SkCYqT1HuKN5rEPVz58zdZukrQ1DojEik3Ta3uYTy9YXk2exQhFSoBjLvstnbVZPfiYewwbkPUUkE3",
  "key9": "iPtAv3W913Ezd3Zq4BxfKx7bSJUkhWtQobkYWw7LbFLfAZwj53CHy12DdCmqxvLDr2cpuxrxxtCarZ9xpz1xPrP",
  "key10": "2EktkVwLjuC1CzGDjGf4m6xWmKuwmqU9FaL4cLaUdZ5NjNPAXWbAqvaDfyyBcidCEpAkV9A5G6PNg8XNEsdfBuW1",
  "key11": "4H9NDdxVFib1uhuYeqb6vvpCgMUTHy4dUDqB8FFaQgTZGdDjguKUWKUBahpUMcTUoaiFLaAWv6r4bacr8LmxusDi",
  "key12": "518odvCVsPSnDMGXXwRyW6Z28PNu6bQzybWocapHAr5Fw1kXeuHn7HsgdknfRq9e1SGp6Ny6yP1rwq2XrbfgWukV",
  "key13": "2J4FvGnazGM3Yar9z6tV5d6x3rMuVpscgTghCGF2PYEvk2yv1Ga2MZNeFSuCA6npaZaY6198EAiujZxbHRtbZdWz",
  "key14": "5kjCRXcbYskCjpCpmDZRCzuUmCyHTzx6j29jyDMxi3ygHCc3FEFXf5ptrUwc9j8Wg9n4VvpSx3gEhHYivyuMkZoU",
  "key15": "4uphqB5Xy9W4mvbvhahBUzFMdixah88b3VE7sw3a3fMhJxhU1AcpbmcwfMh7GXT8TWomy1VGn4B5uNAtEmmuy2Lp",
  "key16": "4mW8YmPvvkyVRcJvtVJV1M9TubYSsdr81698BmobmhrkPMPz4uKYNSQFLStKRtEBcMrY44UGFAsiRRQ3U8a694gJ",
  "key17": "Kw2d4FmPVP8oqBqyoNq5xcr12aWzC96rnHt6c4zMMy4uotN8BZyFxD24j9wmddpojDdBavcgMFxokFk6nmpet4f",
  "key18": "5dGQ5LzdGWk14M5RmQhhro3N27TGNKtaaY6Fmjr6VQdCKHS7mdbVsjp8rUKkW4KCbcdv8EDxL2gLiXpkq6fvo1eg",
  "key19": "3vLeBZMjqLj5o3UFuw9LW1V12UJhgbPmpeughSCZ996FUdkQW4VrbvPhnxL9gEGfwpu4GkvkF6EHLxmpimJYpFBp",
  "key20": "3dc6oq1RrxKd3SuQHDLkCB1g68AUpJzu3tcTmpuevianjAi7wKmMhJzHczenBDZH2YxDmK8utno3PZS9JuLRLmko",
  "key21": "2CAooRHLDWU8x5sVhg16zjv5zepLuZmtN4km8z5zVRpwySwLqTez5aFauYrfHpcGnn9iXnh7KpgabUF7wLPFESZu",
  "key22": "4XRUcurEzvy68DbZGq3X7JUoUSnPbNK64mFKY4L2YVYzZCthhRiAZkpFTagcZLDuPXroT957nDDLAaGkS2dmJmDV",
  "key23": "4fZ2Ni6d69gjrEU1B5xkYYGdqm7g1xwmqJZkoy1QCFzWGySy45EtvYNz2AUUsiibhVYmkNyDTYZpCvzfg1s6BykJ",
  "key24": "5J9yuzM3fqWxvXAbfSknrsjNa8kH36YyUjgLUgZm7JTtt8px6VMP9PqL5NPJBLmc2a92P25F2ZrDf6UcmMbkykkW",
  "key25": "yoQyHB2y5jG33oM4dTUKuZosMZKrL742j2ePcvV2dyZpDnPiMDtWvVbof7JxaWGJWL6Gcn32QsxTAmNX2wHnZJq",
  "key26": "5e34NQAbHkDLBbghSPko5s98yHh65ahx5gDikPrcZxv5fxYM4aUZHezhNw9aPKJ2J981Y1eJSry3xCkWgKELkoLz",
  "key27": "4eAKeUU58Vx1oN5KAs7ZviAxyYHcoPsUSuyTEHokMCvXFKRWGsP9ygYZpqmCSxzfartT6a7smaPjdhaTMAb7cmRZ",
  "key28": "2ps5sFitqxNjWnZNqnxLdNtBqukmPsgTdvq2EWZzA1nT95EroKvYSsssT4zT5eSsKYGBLGtrqBhXbHnTHBbsD9c2",
  "key29": "2ofFPZYE5BvtGXWuM4hXuYSgzqBrBQyrTcjrPqtBCWJPwyaaweU68FdMAGucB24CmvUgKrR5CzDoGyrmuYJDeKY6",
  "key30": "LkZcSccCKGLDki9SZqXUhc5iY6r4HL4uMvEXG1JPtgivFQMBBqUcFdNokr6wH5bre9N3NUxyt92Jw7LYhQhJe5Q",
  "key31": "2abY5vagrxyt5n3R4EP1vuTStYej4oPNKaCLWU2Nk2rDhDX3nCubzDfJwowQqfbXWuYNqhMkqEeePGwV1jS7A5Ui",
  "key32": "vW7PVuEaDLESfgRNJQ4rV17D9hiHfAupHBNoX1Vn7ineDDJNA4oVEaysmx9c1vk8WBmnjQ5KGy63jfMm7fiaSk3"
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
