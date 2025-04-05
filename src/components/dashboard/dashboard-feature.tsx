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
    "3YkFZU6Lb4YNGtptnEW6qeXdwMDF8rLn32wmhBLQC51wTyrJjqihTYdZqrPPc9t5VptiwMBpQmhyhWN45SzPy3ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exzTbAbMkNX8o3HTjV3qhs3RJx9rTRqYL8JMbn5qj5PazpYyFSVjVN2GWaGQdmnPShyYP9CFJEwFFbzxsJR6DQ1",
  "key1": "5rrf3E7zDiaTkTwxNtzG661pogiEoz693U9RvsV1K8WDKh7qrRoPqhdVRJWFkZhwGWMDXnQ3yr2SgRNtrJxJ7fjt",
  "key2": "4a6XMH2FeymSrj3svH4WXhmMZXEXZEFviRaAq6FpsbYMLoMyRvGSQVrwsK2wpiUVNzGpLz2ckbHZ1MTb3uhtdEJf",
  "key3": "5ur6PeCMaUW75vXyQt3y4rPNK6Y9NzcGu5C91PKZAsB8YaAhBdvhSDctMHT9fQoNvnf33gZw2XmdTKX6jzhmYW8o",
  "key4": "2C2odTjkGmaU91QEUiefMaHELyhGkqfGWAtupDX2w9tkAJVjchiQ21nx8Ar8guqvwcF4F1Px3GFHXhfruTGnZ8F4",
  "key5": "3VDf9A828CyDgVtfJgmGWscmm5gWzZ3XdicmmnAGhhn8r69gB2v22gQpBHTuhAoUGBH2oGKWQF3WPeYbmXJcNgPe",
  "key6": "hhQ9G1f44pQxnrVBrRPdr2AEinUsQCCQTyFDdUf3eAVU8XS7DEvGKHcGffGRK4mknZ6XcsuhRJmqPJYztFRYhCJ",
  "key7": "2Luj4ri5sXN9XqHiibqaPeaRkF3Edks1gCJYhp7Uj746fkpAsLDG3HykXDpska5y3WgEdDg9vKM2UQaaiMGtRwLT",
  "key8": "CFEE1M9gTcS81EaonnpdQH5B72RVmVQVKEKqWSJrAakySHSiDiAx6nXoVqFtzNyhoKTrUWZRPMT2ymcdAqmZaAB",
  "key9": "4GqxGVYxn7fS1am9WYrtEw7wYXr9LdPu4q5pQbHvwar7vUC1UnhQimdvxYNgRex22dj61uSPZDAWpk67KqwXczZ3",
  "key10": "482sCJ28rRc2y6U8A9xRArJu9q7myRfuawoZMcrNHCjBHvvLPtL9oKQ5oGEqSHy4kvpj241Ci9pHECUDgT7H3wm9",
  "key11": "41LQBvNqdUq9Bk7L6F1nudPEUhQA7YFgK6syGR8NKSG9mFEB8pDoMavqT1DNfiKdBNxfpKFyakck2STmdPmLifsX",
  "key12": "3DCxFJz5fWMo72asMNHPgih3v9ivZ7C1QZBCv4uEAMfhaT3D6AvezscAV9nSzwrATsvacmRpkyvuHg6Tq674yymz",
  "key13": "5bgWUPyFwvxspsVuSkjtH9x6SUQHNBhu4wuUMaLPJtbSs5s6EscbZJTEHQf2y6ujNbGY22vwLY8DsWD6BmuDRn97",
  "key14": "Uyo5VXkmnF9VHVYt4ra3udNTxRvJo49VCvktqnsd1dRTZwXVH23xdDF3o4UqhCfw4tiVBNNpz5CrgQDmSY7tobW",
  "key15": "5Hwa8HDuDwGVp5aVLSNqu3UgcpPFvWCZ7G8YBMx7HU5LgHU67MGGvXyEd1ocNGLStG7picAHRxEb1pCcTnJ5wkAe",
  "key16": "4kxiGay1rqutrWbkeTmqTSKixwo6jeAYFvcNuwXZeiz6hRGPsmZvVzhJ8tFeXaJgoZSdGaLwyddTgcHQ2CLcJJ4N",
  "key17": "TGRntyaCKT6A93WboMA3TJbrcP2fCoggf5iAZW7FvzHKhmk4jk6zVLJ4UWRsL8mUDd7EiaAkyxXGtyNZ2pUcnYS",
  "key18": "M6QCXKMcJpwX7SqfM7TW36hy8Re5cXxUDj2MkPeowUcx7tC3bQbCMdEPubGcQEA2L55SwAWRrhEZD7SngDqPy8X",
  "key19": "mV8LM1KaaxFEYbHQvWKFzanzuxVrwsM4T8pX9hBtopSCpWHLyW3PJUYYyDHHCvRhVtGYRF7Zbk3zK2mLUNQkcqd",
  "key20": "4M9oWN5ywkFV2TPCLydzndyEtE24NnqPAoBoBYcMgLm4yMtbzGkquVTM454ZSg7eGRKmmRr4j8U98QWvdAiNkiww",
  "key21": "5FYWz75KKzUsxFR12J6egL3Z5AhBsgGuCQ5KUYK9eQmwdjuebBDYGcb7k7EY7K2NGzoGNtUK5EHBBH9KBLgwnPcT",
  "key22": "3RAMMnhLLsJ7DmHu7VBqRavCgYyBcHe3rapzVm824et8vBZZu3kjcsyazAkG4pLKb4aGduSg4dRRKbFoxfHPLgAU",
  "key23": "3ab8yUgo7DBkYw3X6wrAR7Chgz1UPj99A3UwFg64E836CyX9Zupy5W9WzrvTq1YsWU3CfiFJ4N2L426smrqUq2D1",
  "key24": "3CyZKw2ES5mw7VSQA8kJmQTzTLwj3NEyvEWeSchauzr2vQzUCxNsUhLzGh8UJ9gkGUb2znkGMPSQbVCacmAC7UHh",
  "key25": "2V6oktZHPJKBAEumS5t4PRvemV4XgqhbXMUNxnaAaqBpkaBkgcvbKtrYcGMdypt3KDgeivSCvWftZkxxpY957Ri4",
  "key26": "2Kqa7eH6X4WDBqnWM8cPuvm9653DSu5PfngHDag6NwXtknwZ3FdfUqp1S4cN7AaWUgYrx7xyVv4UGArAf1mzSf4Y",
  "key27": "ysb7LRiJUWPQgzbYKQmU2nhmwsXKFkTVPAiGGLW5rV9gVq3FhVXvYdty3vYF9bFH4yxF2u4MmE17LQfsTXsjxRe",
  "key28": "58GB9vCaJrnxiEeCmyu3xxop9evrtSo6tePrsGiMLu22PnWnjpYVqYKUmDSYJ6HSpf6ZtuEgqvP6UtCXAxqmCAFa",
  "key29": "4jyEX5oZd3VCvrBUMJvEK58mGaJb5X9FdHmtpbiiLzs1akAJ9a8tQLbkhrQqQzxPSUf2Q8riUJNutLNhXtLqxsXV",
  "key30": "3eH9oE8sLwC9izkAxKj1N3PkX7soAquY4pPf3aEX9JRjNDhnPEgVppoHbEoMA956MWwpK3ETKx6GqtqzycKnSjF2",
  "key31": "A6xGfiStxknwbuv44xdjJC89MX6y7mhb4rhk3qqB7HfF8giQ72CwmDCCy5xzGBD65PNN4fTZNn8F8cRPP5wwSkJ",
  "key32": "5QTMeTqw9uaQCvC4Hu8a9ih2X4eS3RZRCkE4eMLm6RMr5NwGU1vKHEDW9U8UaEbrKTJ16K6F2N4HNRvQcgopvFqU",
  "key33": "5fzpQKh7KbVFBHzCTv9KqxvGC3SKtPY7YANNjvGJxBU5kFaea5JeXDYPuNKLhFtjXV7Tv5DBqXred2w5HWdVqDQd",
  "key34": "4W8fSpHLVs6Z9JWq3BcSAubchhUY3EirarN4KktgHpogL8zSzQJgtMBUaqkTf9qdNsu5TnishjBL2iNiZCbu4JgZ",
  "key35": "5Y22mejFbCxDx6bUWQUWZJbE5BscbXaqFUGoL7cNGRP9TRMUgDoKekzf38Xx4zNeU6L8x7eQfsMvVc74AsoXcnhX",
  "key36": "2aU8L3qPbko8LBaYNXy7Tmmxn1Q5JBC1qjRBHL1dEHvNmt8CiBScq7Bbzo34rfDmixUHGCPMxHs8rFkssBX5K189",
  "key37": "5ErfmtRVmTVrNp87T1L3Q8EhC5ZYb4momDm2DxY3po8U7UpBFM9UQBaqM6HVrzG4wfs9NX9FYUErfkv6PL1smZeL",
  "key38": "2x7HgQmrK2dH7m1SgP7Ep3BZTdudXJxByBH2ugpWdu9zVQmMydT5FxXBEa9Nigb3Dw6i4EUmcTeEfPYP7oBn4ro8",
  "key39": "63AdKuCgey5AfYw21QuzagRcsRXuibrsiVBnYLZSMtCcvLhcjamAuVJ58YAwscZ2uX2xGJ1yGwcjehDkp4wVtR1p",
  "key40": "3Hvcqe6tU9CKn1QEKKmcwTzXJ58R3CqvDgSXXoicPBA5FeJgbonmxt6d7z1zCivgYkoS2vDQt6zC2bmDcQ8kL9BY",
  "key41": "4y5zdnbKLMsEG7hycpwowJJFQ4LmZ8uW1kcoB14NXyZ7cRvGHbvLLJz1BqiLtnnPi29SRSB2ZtffsLv8KbGr5D7K",
  "key42": "dDa5wTB4Etwt5TdeEQfWtbKf1gKQbJMQsAcRjnYADFS7b7hmNFqe8mfrDdGxRnqu5YJC5MM7Zie59Y4BcSKFDZu"
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
