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
    "CqRcvNFMtXDC42qdFocG5ZrjAEyTEiuqSYC41cTHamPnBPP6kqJqJQSi6yJkTyFNuQc3Syoecd3vcZZPbo9fyrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6p17H2TPuYYFTXV2bCv1SN3aNaenVdXC29vYLUBToUvYXXaLhAtXsp7t6v8XjF1GPe9vPjCZ7WtP2ECjzSv2j6x",
  "key1": "2ji4NG8zD3qAeP5St3dJfzBvdSa7iNQvd6QakrDn5LeQNWGnJw4hmqRtQ2ZqXxQQPZa7ycb8WfHZNQ7uDHkfCTWc",
  "key2": "4BLHtHvMN9Rj4GmSRioK3xCrVLyHhSHCCiBSEeyseW7HGZ9QwoW3fDVaetRr46Qi9g73CFFFQHkVtTwUjBYwcNwz",
  "key3": "3hHADDDWPde8zKvAwpUi6XNy5RYQUz2G6TZLzENWCLQTtcaYzTQeQ1vViKAh6gbTHJius6PHzK4icH8ZXQKdgVa",
  "key4": "3rBBJXwC3mh1D5fXPoDcBUZ13BTrb1AqPWKNCrJUDRrp2Do9EkymcKa72UhGXxbvVu5eRSjNCkTgyTXemDfAAHit",
  "key5": "xY8HcsardWu5j5UW5LWPr9KETC6aCz1tkP9cDCS8CzLFE2Kt5WL1VwhE41jmRRbirit9o9soGm8ELnLzK44ajJi",
  "key6": "5m1bEQTwM8M8mtxbcRw2c6LkH4ngGEgezAFPkKvUNFfHiSyHgbG9JN8z5QAW32SpL5dxXVyi92qT7DCNFPA9kyuX",
  "key7": "4dJXtPPcodXEgUVRDp4jDLUgVvA8w4zWAX7sCqNgRrimZgo68WUvntNcrgQSu5oUM34eY57ehnUBZ16sVGQVvYVp",
  "key8": "4RxzBXo5Q7Tgxfpe6T9AiX6UfrZcJh4JRenYqCCjensJCT51gWanCmVY2MwvTNezgYgn54H4Q8KuKmZx3RrtmRWr",
  "key9": "3wJNtn7uuxXE9VXjYCJALc1W7RUPtRSY2aC8iaWkGDUpzCwNeEvoRv6MJwnwLLwubYW1Khuwe9QemeSanRfDiwDW",
  "key10": "3UkxRqgCsvM2FB9ogo3ob15hfos3ZTH1sR43ULSW3EZPUF5NN1MayQjSFDV99GvR3zHZGYabhkXVxfeHAzqavTvF",
  "key11": "621WSKh6jk5YAJkrsbFVys433oNsgfKWTd9fZkdhqkdKAHtuoNayFaJwu19MmZc9VMM5PgyoxSxkrhiWsitZzFCh",
  "key12": "5Z1cwWu2XnKByARkFXEpssBrWrjGBVPyb3oycU9tnTDfu16P62Dy5KbUuS4efuJTQmxxHevTG6jWzeCURuKaTKyb",
  "key13": "5JLQmpq85L4TNPwLLr8fAEqVmuJWAMDTxYyxC23zQGBfg7EZ1DqscAoPZ46yrn4UQsziFWQQZDefMDkXiHakPN4",
  "key14": "5H8SMT6ue6gu3CGesnj57SZ1pg8tFqHXjmDmyCnCuisgiWMAA6gCs1tFNhnASLTiPbSxcGcM5eX2ewSLK39dHKu8",
  "key15": "4RzSDPQ2nXh8gN8Q6v21BQ79sdQXgQpVXTGHSaKxwZcLKGCVTfnCnnkSRcu9ViPFtf2LgcRysGJYGfodEcV3BCNo",
  "key16": "2oj1SVwpkJ7YYkSXEVXVEoBQDgfarRj7KwgCyHDkq7vj2V8P3KyMptf59wL3R3SVxi3sofFbxovHAYJdzkgsxxRF",
  "key17": "5jtKEPjRWYZuUaUA8PVSgKADWRpNMU46Hy6RbWtjuHzNDuynpq1LbnpNhrYeC2C2aTgCu4UuNXkzbjem8LeMA7Yd",
  "key18": "3Cxz13Y93LN5v6Z26EiT2mPJmqP5fgdmXatPh82J7KPw36AbTq65Cv3UqPnJBGmQfm895Md2VEqDgAQ6ausT4YQ7",
  "key19": "2bxjDjRWoWbV6m9ftDuSiKddsQSq2JryQXzAFZ1HPR6FoehPheka4jD5x31BFiQLq56joqpaHdwWRzrjxRdYYnvY",
  "key20": "5RumpeS49eFtXkcQH2wwPMEFi8K3QFuwghAHqa48k5apk2qUWYFfhMaDRU6iwR6BxbuJYJwY248rtWk81nRgKTSp",
  "key21": "4TmSbMK1rH9sHojGMYkLvSwqhyMZ82n3tr5AESSy1zvZE4f2beBXdgCZptPmcJfSAmfbraDUSD6cm2YaXqQB8pXq",
  "key22": "DbthajR8BJTaHqe4oRdq4pUVSs6hbdcvisyn4UQ7m4KYQPb2qzAyPMtSzFDbP81BiyGF4m8xMBE38XvpkbmzNH5",
  "key23": "2WL3JtEP6u1gC2gG2YE9skZhnMKqacF4GGTC5UTNbf2VJHK2p3NjbH5XVdXD7Tva277iEDUN7gxFPCawbrK6K8VS",
  "key24": "5AA5sUAj6fKtZ6xs47DFcyDHPoKj1DLczDgcezibVm5N2ntmhSoJGj98i9s1A1Nnx2hW1NZ7QVTi4hL1hULponZ4",
  "key25": "3dosCEBoh3y2r682zhX5svoYamNaYCWP5n66Luv4EoF5qYnr953K9UJiLs645f7Z546qPBo2dBBg6ywLiEFputt2",
  "key26": "5oU9LQ8T8PfgPNBotpg5Qqt4Cu4sVD3RCkt2pfPntvfBwKy8mT5KeazmRWDtS3zfyTMdXWotN9h7Z4MBDe85PQqi",
  "key27": "4ktatfn2UUfT9EaLBfpv8qJpuXHwgMxKChTZoPKnCjxUxTqjU7eV8oemaEtTH2dZamDMoKAYryGdL94yW2BqDRgs"
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
