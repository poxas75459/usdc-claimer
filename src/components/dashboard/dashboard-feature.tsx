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
    "2SNY4ffZW2wsYRtr4v2PW1QsHujAyZD2KvYhZgQgpJXv8utTXbuppdNDsALYy1CDqdh1qLST9yU2QmW6kMUuFRMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KEgAL3mCpzuYwCjz5fQ86DuqVNALhsd5fRMxLkhC2RSqZj17iHHufvau45wZxmHG1ayxxrDYXgLSiTCk2vX2Gim",
  "key1": "gBEQ7643TkEiitvXWvKNUQfmDBf6ZZkABShJGQ99boacP5vMijhAH3JpSbJXg4fJsT42pAy9VMrPnWM2FcPdTpy",
  "key2": "5gJxQq6gVvumjmWFoUqRNu6DeK6AZiG7J3EwHPnFTLeUbeUgEPhPnzuKMTSMnayhunbedidscJz1aidLj3L4exj8",
  "key3": "Q63fZdx2CUvAFkuW9QYW9o1hJcoEeqWqHUru6Q97XM3bErwYd7jTZaVkKtnG6M4KnYkAwrxWv94D36fFnfZdjzy",
  "key4": "5aWFJCFhTpU7xT1ceCmPHiXC68NPLuCJ3DQQrCEircKJQZAW9XWThZn6NoiYuD99FHwFCD7n56bfWHyJa3KL3dGF",
  "key5": "677S9TibzuYf2VwMA31mofsjGMpgbzcv9z5FBkXvx3ZtYxfvorGcwWgS3MjW8CAoC2NX5gSPKrMTehwLZwWZF72C",
  "key6": "43nbvNS6uw38ueL8C3d3ajw4GGqq3H5atGikDW2e7hCxwCZy9zta4qfFtyUghSRBw1xPnWkZTYcnvXnDeZe4LmvV",
  "key7": "63dZSaeGdxTbBRZRjU2ev6yvyRGWvLzgbi3yANzPdracvoFSR5f9NpCMe8HGVfADFgvehvQ83cf511QcZA2DKJ6Y",
  "key8": "jJzKgqfcMcQxmZuKtSpfDNiQDDMVWQSUEfSgnHLy2M7XfY85aCnKoASqsCNtKSvgJdcEs23YbdMGkvtrWFbCMVb",
  "key9": "91cVHNAugMkW7hweZZrfJBLWj7zgh34UbDWn65za7PS19Ahm72qwDhzqCWpw8JM56K2nHwzT9dmBvBdo9dVy4Nw",
  "key10": "4fTthZHiFvGTWfA1nCzDUXXpzfwtt7oY4jmYsb9mH7PVm11SNtzEWYCaoeMpj69TyVeeAnzEC2S9M1WkAgbgxZvc",
  "key11": "64Azrh9NZiDsFM1Qe11G3nSvST4nLiyzfs8CmmEyvLSGJJYaHyhYDcMhfuth51C6jD5nAsQAW2vr8YUAko2PSE7a",
  "key12": "5HtsFrxfzwp8LkayvfXM4wTXAzEYyYBePVMf8f63sSoUTMBzy4jbSYsz9FqLyMQXKqTSF4Sysa6QQ88MM8WXUAAw",
  "key13": "25y6zuSCGuWxpTioqeg3ygXAy161tSU8junCtriRa7F7ii9xusZUNGXfAZxvTRcPZLsjDrtQythLeW2dCGxq4rSB",
  "key14": "4iA32SchwnmAqWJr8qGMRZ366oCxXhA3XZZXL7247n3r6tcLNz1DW2qkiUfZ5K3TsyNgwjAeFNDh7VXmZnFGAjS2",
  "key15": "4ABymJVvnuazXy2NgrTyKWTaF6ZGEkQ9WqzgTpzkUN7rUBrpqoNRqrPuhJZWhkix8XJ96MhH39BsKPKGPM9gJMSK",
  "key16": "tRaYsY5P7BNLis8dLzYjLkZ6psC6YorbzETkn2J8nSNh1BaPL7nLwVxv5YY9a7oBGJvjQ3GTYQS2Ag23UTfKnKm",
  "key17": "4hGNt7ACVwPSBqWJGR3E4WzJ9Ry2J9FAkGXhLtDBuwedMA6G8YjmB76Ta2kW4Y1TfA8zqY8PP3wGqqMp9qasCbEw",
  "key18": "2Loo9t6ALn6kWfHwdYUvhjpxyqZVoeYZPtvsYJnsncvfTfYRysUo4MCWGbeH5ScutxieB2R2KwrZCVNimvSHykm5",
  "key19": "Wyz47kk7nkpRj7vgiPbjavhAJocFmzDXfo29E2Fpo3RATfKgWmcEEvLfJ5s8Pyb896mFSU1zdeRuRyvspMSBdsX",
  "key20": "vfWDQSbQ2WrEAdksh3Da9krm63tC5RMzGGp4ap3t1Tjb7Jx5PjfBtcNh13vqiu58hN7FESTy1HApmMmceBGwXZK",
  "key21": "44UVHyk6DKYHwsFAYE8y5yHgV72pmU2yxqUW58riJEiFy9EyDwg6KeTKNbTjU1sAgMgE9kUduo2HP474orFSbrsp",
  "key22": "5SKr4z15CeAeCKiLaiL9SptkxKaGN749F9drBzEgSLezFDBLvN8rr7yZgHrz28jrrh1PGnjMbePzwj5JDUBzbRuP",
  "key23": "4vLqYvXi6s8yPvrX4PU5a8bsQYWEy9XvwLG812fbRSdrk3ntoQGFcTeiASw6fGA2uwmjgMt3wqokm4b4qZP17dEs",
  "key24": "61QqWsQcY6asvsxJuZnoijX2cnSFGRBp8SsfnjqC3yMPBJ8mXa5FBtFMHiuvgbWEpkL14tCuKzvrAhDfTZMcZQxo"
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
