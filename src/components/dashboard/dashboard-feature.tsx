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
    "3hhUZiLbo2SFfEmHX44kkDrF9sk5MFrnJosjrS9mrcenz3fFVzWbqu5HxdFeUKrB9rwtwwBarsrznCA2NW3d2ec8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SdUyrTtQQUagAczTaQP29DPsjbo8Uv3VFHwn4QmuYvd4J4mMsU4NZ2GPYpebdCGfbgMMM2zThJFfCU84HMT6YQu",
  "key1": "4tioLUnFu9b8ADwiCYkUdUdJddU28kePsziwAXnhsAFGqYRBLhhVhi1P8jqKPwHszWNdRyzjeuogPVPDZbsyrBE1",
  "key2": "5fm5944mcgCo32Rs4D8B1165mVSkvnWADVG94Hywv7hNQQxe8DPRPb1Dg2cfKBVffE3TnLKAZBsnNJhtYg7ZxPku",
  "key3": "3NbnCZ69AYHtbidAWiBfgVYnFWimV4oPKPB49DLyLwUdCnF3VQLMBGWqJA2ooBDXkDAdF2Ae5hUKAYayb93wk3re",
  "key4": "4YtaaTgGb9MiHaQhw2uWMhEFm7mM84r7hYo77DCfJ8psPxvnGxH1H618LwM2G7GuEWfVUf3WLB93Vq1XN1ryX2dg",
  "key5": "2tiSdRDzBFR6KwfgPz1rwrS58mFQaDgU4Eb39Zdi5u61LwJj4jpEyQed1TNa7WEXhKh7yaag4E4t2yALajt5WDQs",
  "key6": "3ae3yt6fardFNQ39sargLnGT6qDy6Ab1nGrsUgDFchTimTt7qTAgcSqeAiJXPcjsB6nh3WywPFMR8RJ8wn3znbkn",
  "key7": "4TguTEtsCpST1DBRW6fX7yLMrjhnuyuxyRdApei4Mwb74obRrBHdg3WaP4NcMMz1Zv1uKNQPheq3HfdUsVjKfjjf",
  "key8": "5P9T2CkThf71FochxAcpZZ8UGU6U6quSbiUS78EHucuD3yD3d3DYjEZ6KLh7JZjFW19kLvZ85ZAM9TUdPkdoyEcW",
  "key9": "5Wm4MBiaURD3jWpfJep7Vt4bUyNunwDTBFQhUo2AacQqoKNAPK5FqtQraKppQdsQpfb6dYkEdAQW7Nh6eXNFHSQR",
  "key10": "32sJYXaMS46vJcwdgc92DdfWQwX1kjqUNKqc5wQd4fhEzTQ936Rs9CzKHfqtnCr58dESScdDDk4WuokABYHBxER9",
  "key11": "3sqoxtFyBhVnNB2k7E6X19Hcn8khX13abnHmAyP2i6YHpKdpHrpwvT4orHDKqQFsiQgNCxKJ5MBz2fEw9doQpQLu",
  "key12": "5GL6UfwSF9UHMyRsLpiXtr715Q2HxEGpppC4tZ3eVSxJpfKqo1JYMSetSzvAj7qj2MQiohphKd39KPizy6zSZyXd",
  "key13": "3zanaFGh7qmY1sFHNKhUpYsEptkDxacbJovdrpKXVx9LTC1h5Rkt97Eqgw15Jz6VeTCsAR8CcKDm7fnrnuKx9hzh",
  "key14": "2srK54S3zzahYTZHi6iJXk3DDbvHGHe4zXRXiHoCok7eQkewMnWsdXarDESx7rQ8DRMapMVZsN9HoPgRaSZC9RcU",
  "key15": "eenBpHVVzH9Sto8TkdjaRL1bTdKRJ2YPh23nJR7MiqKej6VXpUiG65F978mn9ZUzZTk9Y5tc2DpXX4TG1UGqFhb",
  "key16": "5zg6NfwaZTjzEjaGTD9ezsdknjBA1mns5fhp9jSFP2t5VsFhza1hcBqbM3MVrGVhRJXQwhVaLNx2swZAuGaNh3Zb",
  "key17": "76foe4duVpAaZzwnjPidPugrK9w7qcrLJWQxz5WvUG8YiywREpEKYMmTKrVtJNp9XeAA9T5yWnAr4c2ULsswira",
  "key18": "3XEDLMBKZ5MrGQLeSpsQ4aYLktL8GjKdwQWmcCkygGPpV3ddYBWNgQY1KYMmP2UmXmCtXZWDreE5ehSg7U7djHRp",
  "key19": "5zPCh54Mv2S1g8xkCBo8B7m8XLxY9fXHzm29MokC2Sr7nF8Vat3a1W9fhPngpihkPVrRLUWhSmkvyh8SPD2464t4",
  "key20": "DngWrNSvr8LhHWEf7P8aitakKHUoo815QUJoBr35ZtgHzZ52aN2om5Hce4nc5Lt4m6BAwZuvRjrWkZzcwmhvMS9",
  "key21": "2qLjriXdh1qDRVGngSTkQCpogjnW6itFiJNTXZZQkbuwm2Kx3aLcHrQoUGLYv6tEb99JwpHmVgjDhosiPfvr6yvX",
  "key22": "3yry5AXV9AaJguRHVYp5uTc9xY7s2BaUFCEE8tgKCdoB8n5cPmgtRzGYcskUdpcMoA7qL2gLnvjHbb7WX7qLDkNJ",
  "key23": "5zERaPRF1kjjK4NFhfGNb4LGqvGeaYap1Agx9mmt4xRr2Bw4xXdr3DWQyj6PPvaZZaFFWhyEkqQy3NZneiHMHknT",
  "key24": "jXJKYt6523UDfrAEzf5kSPJ9UiY5iaud8gNo2t8d4gibfwxfyd7wo1vX4b5nBR2zQEYnTYoT25jZQxSfvEw6AZQ",
  "key25": "i5pd71UEzEXTXiG2M2NYzQp7Z2qqZLpk8GEE9MCX7EGnnSNeNPqKuHqCnN4yKW5EfenUi2ZFBJJCNLyqE7thiKf",
  "key26": "5qzr8Y917vzvxxzD5o8vptNQDD1CXjuut4PFXeqWN8ztT8BWQiKJYQRjfVMejshmKYSjpLhTf3eJ5Vib5zZSwGaS",
  "key27": "3Q6MD3AK9E7TCn9yh5A5z5NeEHdQc2ZMZGuuCUZGx3kS2LBia3WowB2poEkyeVK6bCpaeJtDorTrUwvM3z7x4Ruf",
  "key28": "6GjU8TwEeqnBs6wkmmx1WEUQ9RUA1ieydbRop4DjUJyxKs8WVacQJ2E8Z74mdduA5G7vPpkMi3q1KcNwGTGP7fn",
  "key29": "4EnwC13hkW3CFdKCZmqBpeKdBHnAdyr2LMqC8QHEi8tHvPXVWhg6ZjXdteQiR6KEVhNebzSRmEq3M4hJ77tWqx98",
  "key30": "5QGaUqS4D7mKuz2TLnFmy9dyMxt5SRRAgxCFhBDyhr23nuH5tDmrAvBvSEKpTqirAq64tJZzrtEXbSn2YFigiGQp",
  "key31": "2dfvm9UGneREz4VEDh7oCH9FG6kZqzH816byknsYbZ7BYLYiASDxpQKw1LDCPEgRr37qbKsBEZV1Jtjv4NokvZXu",
  "key32": "5vtJPBvqQaKj8hJfC317KvfLJJ8KEwD8NhJUEZ85K3GAW5S3mLpdtV42JsYSJC29VAXKQf3hsrLsFYC7RhT2qqTv",
  "key33": "3wWryGfffivJYpX4sryY1PRe4LZv9D3BFRLwxja4bgEQYYbTFK4e6dHweAhfPkHTCfC59e2P5q85DQ4oFNDPJ9DN",
  "key34": "4k6GA6jLEBMJa5hz1fk63HYHFKUHbFrQgwQJEBGGRt2VWQUq2HADjqxrMkkEQPZKQ7JVDfyc8nskibf4hxTuuhaL",
  "key35": "4Yhsvde11fSRcm6Tqth2fHsAgA4yiMG5hftovkk16pC9yu8U4GbFKvmwWHavYCsrRJjkZXt6McU1iyYhyewyrqri",
  "key36": "erQ1eEi9ajs21eUUTzBaH2ccjCtHQmugcaRaSENXubatpnoEL9qpGMo4iRXwJqah7w9w1ZUatRnKgPAecTG9aGD",
  "key37": "2SJ2A9xQoeTkRWvK25JqgjMVjAJu7eRApM2gvcJMgqjstUBgfWetwgJw1N3RxWmDjY5FPWJ2kyJQExJARGKzbXfL",
  "key38": "3FUUdE7R5ortakEVF9vEXZfZZ4HMh3QwzJn3DFGeyfePP1Ap7nSeGypFB5YVaM757aRb5fZCfmKb5Fpc28EMzxSd",
  "key39": "4W1c1uZ2DgVRWJbo7rU3ZdNN97RpmRGAFrdgwPvTuwCdX1sKNS1tbCbxeeQ5zH2czNxBxcQQQDVtzVvPxE132zDd",
  "key40": "65Zj5prtjm1EGoTvTfvXWy9MFMGqgrKWboLN8JZZcnwcc41S4dhsvGj7o8mutsVfAsh3bBUNJK8Nn7cKzrNcBkdY",
  "key41": "4YZ32ceER9EFNDjoroCBbdesZ5t3JUGxmFGjm4bRQ6Ndgj9S3aPFZwSpvv7EScDgZc8nMv9sXA9ipEjYNyb1UvR5"
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
