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
    "3XYwxFx74jGzCebwxvf7Ue5Ks8TVVC5ZdKBfefeXKwoLT1DbhYroYM8pwTSwN668u16RPbVWr5ah47Gwd8VtjcRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nB8tXU1JrUEWDiYwUtFpTxYxJPfZe6RGko14Qqq83sU3xEgciM8kvr12K1XGYiZZLMeNWgq7Kj2xTVhmBKFGdKm",
  "key1": "b5tsk17ZLMa5z9Q8Xn84pS1FqjBKVjGP9ojE5C8UBzhiJfm4zTCb8ujru93PjcZjALZN8KgPYYjnYiQZBsXnHZn",
  "key2": "5Xaxv8xeGvSydS2j9p3i1YYnHWLZTkugHmc3Qsd3STWKYRLRFrLB4afkLQwGAqb8ECN3yhWFY2WvL6wsFnwxZf7",
  "key3": "2gvdRHS99U7vMJHQQNohyCbRDqJURdYuhASHezvcttn4Pa1SGdNuweA2BDGFWCeD2YhpxTwQkMDwVMYmqxFYR5xV",
  "key4": "sWhmvcds9KziiRBmrrRBXCydUApx9TW3qpt8Qic1s45LtDoVi475CgKJdbMLfsGMD2b83T8Zcaximz6MVzFQ5Nx",
  "key5": "24yNY5sZanjQahXgbk8QtUHAZkXrBjoMbxefRBFgh5NoWyKaUTKDffT4oqbSLzMmrgTAuYR25gwMdqcthhzqSe1E",
  "key6": "4rXPSWnELWMYXBejPc6dmNyLY3eRwYTptCTkCy9TSJhcztPQfoQmDGwUQxAVv8tcVy7N3oc9hvsTnkStcqce1g2G",
  "key7": "5JT61Fb2dqM6hmAD6orKkEAnBHqK7arYjHzQ9VV67UHVnA1YqxYsq5vnVoVzu4QmidCLnQ2LpXr7GJybz6z4c9KS",
  "key8": "2JjK3WskNfD666ZY5rrzCq22cVXggtoc9KJbtBpvUd6gPbz5yX42SuUfTdkPLzxY4M2EKp3tqze4DSNyWZjBsfZC",
  "key9": "36TjFRfUZe7v3YQVBBDRU1RW9EB8Zynb9KVj6QQ1gyJmtcBUuZ522x7fDQK3goQEYTPA5FLydgMisesYNMkhnDaz",
  "key10": "LpHQJi1qcDw4uggrPueziGkATW1f6U2kV6Xo6nTkUCddxxbjKFc2jgmDsG4ETRcGFQ1mbsSpUcDMsZRRS6EdUF5",
  "key11": "5q9iBvj8mRnjvhu7UPFYAj614j6XA9684xPW7diCQ1JujaUTpw2tmXR6oELqfsEAh6SMb37hyQRCxWv6qtSBJP4q",
  "key12": "5iQNJp9UjU64fJiQ7jpqgNJp9zDyv1mu7JMNbcjUuZoM2EFC1KULiuULY3hd3785VHukYwod4dCHzRSeK1mjPciX",
  "key13": "4Vv9S8B4mfz2sENkS166ZVAtwvgQ7THKsy9va7XeC4S1Eyik1iwosRaF1kHqPbfiFMAbjLXuQeHVsBf221YQXQrb",
  "key14": "4tsATycoLgFAMBfwpdxTJkoTsCZMfLw8Rvm9bza3dFgjL3LACtjEU1RMujeH2CZHHCWk54pkynqn2pyAEQudkp5w",
  "key15": "2NgySmG2xraeos56gNeyMdjEU6qk9s2JfzFb4fWn7MyX2RFGGWUxnL8bD2vW21AZUbTA72Syzq6TRebfuhsWLWT7",
  "key16": "4nXScjLQncYqq3CNy2Z77HxQTernHjC15QANUeU1FZRSNKPu4qTxnRKgcMTQPxbrAaPf9yjkchKdz39usmxCC26F",
  "key17": "Jv5ykAqm5i24KaxGv2RN4zMPkeYQaM3BVqkGzPUKKx3ehu25yCpFEbKjW2aNZNUJzpVpezgHdkdX5kqtRD5Cim7",
  "key18": "2JKwm5VSTEj4XBznVpXtYKS3787boHXDtmL6itKczDM9aswyRbuEPeq1Wp6rB78uFoeACMvkXxMG5jvgp7FwiyRf",
  "key19": "25Zi95hJSnDVeeUGWGHLhYAVdNKWtk1tLAD9ucAAjLTE21f8J1pRVBiVt7dmi7MU1qjrhbU1vNYrF3ojoxriq94K",
  "key20": "4AFZCGxDAkAeaBmhPyhFkpMrAhtthBrM1PnwEXFvB1Xd26XG6xQ8oxUQKEi9EnsqD4CtC9rRSdiwpfWPfCLCYYKn",
  "key21": "qnywEszdjuSrpZJkvXn6GfVnJCNz44UWW2N7n8gpxbAM2uNc6PQMn9D63pJZ7Fevj6Li18Yy7117dnE9j5Dav7B",
  "key22": "7fg3tpVnwABozwrou6iNLVhLYLv6iJTSjCEUWdgndN5LtbTVUtWDbEJxiPXNUes5cAFqwfD73do9tBDqc9kgdUF",
  "key23": "BTFsyswMLfsT59Q15c8dEEUizqh1PVgdjLMQC3LgRxVEnyLEcu8XpAt7US3fe4N2wFQqFcoEkWeWCq81ff2jNZa",
  "key24": "24A1mxVSZmdf4QBQbujYegQDDRjRtgLnb8D279oypYfnjpdBDvyd2XiJ8treW49hiedZ1h5Gt7a8dRABbXjBAqei",
  "key25": "295hXVWGJW916Ry39zbkW3WWCL8PDcztkpqYQjZJo4gC16nm7TPipRFyPM5JRwEuxgnqGqoBKDhvTeDM6p9KQzwm",
  "key26": "TV9Abwa9JDeEtpdLb4nVPz5iR66A6genhRSxifwWWRrwEB7atyfvPXMxwijDWo2VkpuJ6iQW6rBH7zpUNMVdnfh",
  "key27": "4BPUr5v2hLNbsMDUj6nD2nKj3fGeotfWZTadRnjJ89zE8SCDYxcimaPopF7YwXYQojNaPnSsWqkS87nY3RnQv7FJ",
  "key28": "n2mHKgzNBWNvS4jULfbiMvLZpNSgTdeXFo549oLTjRTMgFa69KHX8XygEQkUMfWSDM9vGBjaVY3SWwNzBKJwkRZ",
  "key29": "2SwPSf1hReQBUmWUEfUocpQRptcaEgXWGMrSNC4ai7Q9MLVXtsKEDiJMyfHU5789AKZXFZxgjNSpQD9Qr9Sk9gMR",
  "key30": "3MztuvvXgq84sSiqKVRYDe2k54WSjnJKWuonkKG4pfPK6Y4LxmymEQS9ucGa14TiXRp73nS6tSsRX8mzw2MNEG9o",
  "key31": "3Hdx7v2TAh7w2Tf9MNwD2qDcvheD8ipCggFDvmKbXJyT6C6cezKoxDqjuHfbb1ifzGuihXSRng3AA9EFJg3woUY7"
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
