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
    "AAUpQWhDtpC5pssHZT94qeG4mKbcAES2fANxc7Exni4UMHVbpamvJt8UowYF5Cvapm2i4WzyDG6kt7aUUHT4GTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ce9mLFzMXqUo56zZtYp67nTcxnVrcGPHDoHzYFQ9PdiPsjFS9vMDjDh7deDnKcuVev8BgL7ubK495p6sU5ydVDT",
  "key1": "5LUr5EnaMNS3MhRvDy4i7cx3SUTfP62ggwqnrAfawQW3YahAaTFiUS6sUUq1YeA8qmkXLt5shaurB3Boe8Z2HsWU",
  "key2": "5Fa8k2ieCVTqLG5QLXVGQEyeNbCAmi5an7bEWi3d9AVdoymuvn4oEFEfjSQqMN2jvtY3fu7vq2jNj8vZ1wNPa7sf",
  "key3": "5kPKZnpad6RHV9r38Xb2UV3H1g5mhvs1HCe2A27wvaC2EhUUncpoWPJkRreigFyvv4MU8y4aqf6a7f6SSQi2VXEg",
  "key4": "4zautGysyD19p2Au3wJNcJuh1LUQqbs8ZzG1Vq77Gg8aEE96hJCm3a51JuHMjcA5nnW6c1ZkBNHhD1uGhC5XHpmG",
  "key5": "3JuRALMRuuvw5U7os1oWo7EorDktArPZazbtJKXtBUm9J82pSBi2Vz9NkVdwWrv9ybkB92fLcPDh2fWj6vXu3EfA",
  "key6": "5sXr4azRt5jt4HxXqmaM212ivAnJhbLJCcVnPtwbARQ7YmDe82dtnckjv5xnDbQCo8SSeoQX8rjZRGXQf8ddhKyv",
  "key7": "2rFDiAsHv47ciV4FV6pnBZNJVj2uAhh4MEiby3bQfPcdXUv2aXrJjY8MExEbpYnCoMEcrBscV61Lb7EzZuXtN9t6",
  "key8": "Vasw2quEQteTUFyfvPTVyGDYMDGBuHBSEvHi8oU44sMJHjtGmVVo5tvYFN8TeNFgx7JTzejMkZbfD9LmE4f5quF",
  "key9": "3TwaRx29CTNKHKQVhDRndJi7RNmoVekT2khTaB5Knte3Kk4THMnPeL4wZdEb8PSobtf4aR9FE1H1dYqJFaUYHcfc",
  "key10": "3vZ5f5ufEp59oknUMLeoXY9CqY6UsWkacKcLBdAvx9r228EhsxnUcpbsoBSXXJeVoasv3modSWXyzJYxzAiFPRx5",
  "key11": "28X6orTxBqtRCJt7qqv1mjyu9xkzpvA8zhSAmg4J8nLW8x9kDwSVpogd9XvD3JFLG6Ep4yghq9aHAGYrn6mi7G6t",
  "key12": "2aDMBuSk3SJsTNc2cxR1tiGiaCmdSkDANrXEYkjbmehv6d4xvPfNqHAnd4MQfm2BpzmNV7CEaZgNRZSeV6BANoit",
  "key13": "22rNh4BMioDDb4kagEDXoYf3RcHhS74MxrpoYjU2GAaNyhCvh7AGduRBzmXHcA1V12FAVwj2S5DWKFaMQohvZVWg",
  "key14": "rxEvWaaPFZWBAH1VEkzUU5nobHsPZ66L3mQj54EAP8w4HqEjgHhWP5GPLpnRjpLfkSYkXLds5B54DsacV7njijQ",
  "key15": "2Lfn7R39FjAe4Z9Hs8cYLGpD8RTiWYaP4eHQiafgjvS3SFQzDuJTpaRqQt4qBDn2aAdoeFFwXiDRxrT4u8uo6Pim",
  "key16": "XzBLoyPf21mRn68AwFyMsuS1cz5jueVo4wWuzYhSDwjnkJNT5SEXnxSosGviD8gdBYNnjmycMyGqAkYsdebniW8",
  "key17": "2YMsgCc1Y2ZSb4u8FvmveTqoERX83p5bFbsfD6XGR1ryN2q9QbW39DNVr9qaeAmCN7VhNexffsYNAfvyAzvuqxV9",
  "key18": "xgrWMEHzHgohxHhkzXhNzi2BdQzo2E1vckvjDcf3m1BNN8RWyVgmgE5enSA2YogibBTdWZSiMukhULaExKxHNah",
  "key19": "5jZwRBHpXaDFBDf1Nzx3UJ18deSdwGWjFKTBjPDtQ3hxGR8KwRbgdkrgyNKHNJfFGzttc9GhbMQV6x5QUYfwVRtn",
  "key20": "enR9QvV3L9qmhoykoWnet19oh5HRkKPMDWXtUzKeQEsUKGUPSt9Sgfn445LEYGfGyhDLPWVxvdNXNeCUyZshpR7",
  "key21": "RDWZ6iSwRdsb9XreAm1tS997WYynjygU7SU2twzcF4ojZNyCH1TBwPoKYf24bz8GTv7Md3CqUDbmCfZUukFL5Do",
  "key22": "2EgPbf9z9jdVhStNNx4VVxNniHr5LBqbdeShckZ5KMtEQhXAqEAEZAfasnYKXWyBYiNgi6sQSLM8kcVvund3suim",
  "key23": "3ETQBMvnDFyETb6W378k8ExYv5U5xaAFp7zhHPs4uB14RjqmdgBT8jX4BV9VkwvLzou7LbFZdsGzT5MFrFjNXpdP",
  "key24": "3hw3rvnDNTAuprSUWTWyG5oAPe648wd442VmGXDGi7s7DEwnKNuDtnrMziw9tA2ZWDVhKMt4PdhnqGNCJMXgqmSn",
  "key25": "3gbHyaDYHLG6Kf8JgV5KzrLYyzVjRNzVq7mzPqHcXYNnfGgYxXejrA2HYyTALc1DMssfk94eXLmrKSvNhcNHaMjA",
  "key26": "34KPaXddpceXQFjyDyWwv4rM6qULusMjM73d1XoneJoeLR5ExtFB8kHkN4kaPU1or15i4WU4VzZNZousDXaxNPK5",
  "key27": "43aoRWRYpLFUBVAsDEiAjsc1mT9GDX2fkoYwCs9SSRP9mCqZSiXZTZRzACM3jM11VWhaYUznNosKGNVCRkzzP9iC",
  "key28": "2vp3THfvzfE9RWzit2PkLCPwnQ8Fg7RcQ8sRDiEnGewtNCRRMmoqYWv1FpvFvsQLjT9G1wKgbwByTforjtEXPCB3",
  "key29": "ZqxT38QbJbt936h6U2hEX2U3Sad32aTTWTZpDHzkrGksUAVBaQLNSkVRQfmVNUydFWYCt3jmMw7kfvNbKTKVVcJ",
  "key30": "3xouD31vNAqSsUApRNTq4iHqtKiva78jhn1Nadhp49wSJZmaj5ni72HmnHqAupUd5WbPzfTJuYof6SpyaTdmZ4zH",
  "key31": "boggG7u8zwYpbUPyPqThC4yXBjMH7HsLRPJqtFwRpq75tmLPfypCiGR7woUpGt5eACbvAhowD8USt7f49VBR7uq",
  "key32": "5s4pcMBr7FKezXLEPUg4xgm2UKiBezpTceBDQhjULabbgTFKUrJWkGZsTHVyfPjrpfXufJ4rVEr6UCbCLgXPnZDa",
  "key33": "3ogchBTVncf7Mhv7TwB2fveu8FejcFYJ6fejQFcfGTG8wDXuAK6mHf51sa7VVurcU8Bvj6vC6j9YngYpXGk9zjaF",
  "key34": "4bxiEDS2vUbGba7oq65wD9gNvgdnF6KXWdgxbruFJsbE5LkmRQzC8u7Wm4nL5aiSBHjx6r8wKtkYE1bJEGEUexJo",
  "key35": "WDZt5J7qFt1mVFzSQYwRUpbQaYz9iw743oCLxmujZ8x1qDfRpSCwE6ofEL1s83XfKUDME78oNDKEW4KV5HHN1HB",
  "key36": "GYHo1RYvwPDRY5HpZdKHama1b2eZTMegABxiuSzjHMAcXVzoPAf6QKjm2pBzcXPwUWGJcahL1RMVmrNkHjnYtk3",
  "key37": "3mTeGwrQfg1Ppnm78UZJmsK8ACCKKE18sL8wsooQeuv5KYLKqat2Q66NqTJJBTfSou17bYZRh4tfL9xsSvHjaZ7d",
  "key38": "xWWR1znHdMDMHoJVqMoLvb614sWzEH8yYDLBkbyNTyRoKrGbSKmnE5Hmys8JyWqW1DPUKESR3LSyZRHQDjFn6ME",
  "key39": "LHVt5CrySQs5XuhW2KmEM5AvXToq4xwWRiqv2cWD7UqRs71P2Axg17CMQ8UxcFNBfwJ72Dgy7RnuMA4BGRWkiiD",
  "key40": "4KDBoZJSiCKGJAzFgacstyTHvzH5WNz3qdekwyu6t7eHa2ezGNmuaJC3uusz6J2cHVSa5fXTccbsSxYR1NXERyfj"
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
