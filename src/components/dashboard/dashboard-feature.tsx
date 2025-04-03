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
    "5fX6TNMdtDrK1oRjpay8p2PMHWnWQTZUqcEs8dWnVq5CG7dbvFPRN97dyPTm3oKT5EnnFb45hsCXt4FNbUwafun1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5CwKXWVtX3U3LjY86t5AKGDexGBfYRcaCLM2auYrSPz61Xex74seexj259ahVSTjvTcDdzhSo3LxErxKsEEZ4F",
  "key1": "5nwFWQP6PLRWftQHSaXLqfoXiVAX6ZghEA7Ynv1u4a19NttwMLVurh7hgeLAMMnstwhgXJG1TpSvrGrRxnimZA7G",
  "key2": "5BGCMEqPhSzsjKBC4pCU9jwVVmAAdZGJeBPVdQSAwtr4P9b6tLfppMonWxgHL2u2NcPXBppK6DvwhV8miy62bgxt",
  "key3": "3Dx8jYxTFUBwkqEgVBXaBPwBLng23eSqiJNRCyZUyQU8Z6hnQvSR6UBaN3hstLEsH686kRWFu5nMZ1KoCkt8G8f6",
  "key4": "3JCfTNYrHMt9RFqwWudy4H7hMsRvECzur29ghQ2HoE4KqH6cKQY8oATbDTzzWt19EbnLCpb1k5kb6wbvtJ9D63tk",
  "key5": "5KxfKXiYTqUfDEYDA7bfYhTgg9Ve7YC4wa2Aq2VQ9P5cvegpHoxqLpfm6s9HkBECg8gKGvfZN36WrWmmayuUMnvQ",
  "key6": "64sZfFbAHcBYydWXWmsvCVHGdcHQPV6ZjsySozjWdGBUTtcDuSzvde34fFE66S1nRjKNe22ywHeCA4Dxc58azn9x",
  "key7": "2ht9zH9vZSx4Y2BX7M77c8iBkn7K8J79h726VSnVU5pbjVJqaKLpNqD5WPpLzXAkjf68poSrawBPZk3HVTss84Xe",
  "key8": "D8dxKm5ywj1NqGLSewHX7hcwLtyuvHPqvbcckx6zjW2pzBM8h2mwBPeBXgtRWMDfzGBZ58j3wuaCRZeh3xUF6Xa",
  "key9": "YwS2cJpSubjDiSxVV97aceBALJFxXhsHYCNCSScvYCvtrXhUVogf4eXoyznxssYApSyfzdcDAudJUx6dW9yPuY6",
  "key10": "4an6k9ftDr2PJVcQEEpsYKzWVNYRXVFh4dafHLnXT8z9ZwBn6X2L2htn15feR3YuhisqcdoJcPF6VZqNzWSpKnUi",
  "key11": "zCeLiuKnuHSN8egMJRQjvtdbRuPwxsbCrB5ZNMRZmAg2SmANEMYpJBKaoq2CaG1ozamYKRnZ8qfiJWH2cuXmZQW",
  "key12": "34oV61qferFFV4tj2xK5gF8e797YkXoMN1B3hikdDKCG1TyyFUmuumZLj9eM2Cbns1e3Aw3t3xQCJutSkGRCUrXC",
  "key13": "2YuwcjJEVBUVcBm6VknXAjL6Mku1JMPKxhbRG3DXyjZ3nGvPfutmf6nHsCR26XXKKPAkX32f4KqtP1CygU2rZtyU",
  "key14": "37CjYW92ocENXAvwhvfFJ4q3nUcruGyB4LSPD3A2TiX7nAAixSDsVKdJfTJMxYdVLGRkBz9GXCvyuUsQpjnTo5Ud",
  "key15": "eMhz7QRRggMz6CDXLd3jNNgufr2r5nHES5B6mMNg6V9VotWyAqnFBgAmtJNwQYXTyyEopJAq2iRgVqwesuWGaDC",
  "key16": "t7WW7x6Lh7Z7r1uJcKtpauDMNqwRGttLUgxQVEEr9wzewpYD6qXDWcZDKL1aeHwpe9tzQKcBTraL3DxtdmnHyJh",
  "key17": "5JfUURbmKbNQKGjfu4BpwidDGyTid2gf4Wz9YCJi8R2GHS3aN6KArSRntg9ESkxQKu9jeaKhAmpTCTHDJSqWQ8AR",
  "key18": "67qHLa2HMG9ByghxTsUAkStSnroBLTddYYZFEDMnaPRuQkEqur62WXg1p4N7kdFQ9vN2rSwWT2AoKdTpWNoFUSuT",
  "key19": "XVWrEsYXD5DmMmpVdqNb75u6fGQotVXs8A2mjF4jUpGSLTk15e1BzgygXvJGvSkiCRAjpFAxSbGMN6472xfbZVr",
  "key20": "2TkjrSVMfHfEpK1BN1ns6vF5supEgGsiCozMxZdXQgwnnrBWDhwnZbcFzoRgX6E8y83Y8fd7jVVpCda4urz1thjq",
  "key21": "4oNcFL6Qyd85L3XvpDGSNSrcAdQHP1Ag8HhLWDQtmJnpQmLoCq7EsCCZ3tGNbopiBh4MAAYAfRcSSYvLou7RcgkV",
  "key22": "5nvkYxp1FHJVbybYMdmBz4umwbhQ9KDCVyFr33Dw6y44JPTH7gRKHra3uQeUcJvfniztVF9i4eki1pC3QSHpnmai",
  "key23": "YDSg5EErbLFAsCnneCFD7wu1HiN66gyjYi9DuPyfiGKGcKan5pusRvYzRYx7Z1QHJSKAwgT657XdxHdC8RNLmvr",
  "key24": "25xpTa2gQU8ekKk3gzJofu3tcAvU9Fiusahz19nZCStBVcp4feBsWq1pdpcyE8Es3iiCaySLoGeW3pQTR1k8ecEm",
  "key25": "4uNCJdQcMiExboxaCF6tCahXDPzPtxT53ETpLmeUEhd9YrPmPxQ3XEkzR4YdxtySVEhRgkY61oQzcTQkvjqcYTy7",
  "key26": "4wMVysXiMeUb3mBcSsnyWBwy86soaZWzWd2KrH9HLGQ7KYHAnAMsA94az2bnmzPTEYFdknphDaADHMT52fuwzSB7",
  "key27": "5Z9RacD2MXCZGiQPiYQSogzyX8kffRY3c9utFS3zR1QoeJjoCT1yst9ucAEKAfJSiJtmmADTkWs7cpkmjWcEw3UG",
  "key28": "VYHUV4RsHZ2GcEHA4fz7sC4sbsMpMCmFpEMupob8RmgM1kMbZkvuGEsck4KXefQpStKhhKNjsfm1ECbbcetHJWi",
  "key29": "28RAQzBxRHZKH1vCHCcpve7ncoF1rpFoZsqjk1XjLtwdSGX26GGVAgebs33EUTFGsWyU3sX28BH2wBGJfPE3rQve",
  "key30": "4FiM5Ttb7Qnp3zdn8LYEc2YubVYvJ22kSSct8iPzcjgqHvLB3QqeFdz42RFgohtFojHWDVvyoPH7XGknBRSnwNLB",
  "key31": "29qE3ke9Qz18dC2gFciR42TNsMK3meWjEAEsVVDEsmFmYmUZeCxTUtbtudN6saw76rr9Yqvgd8J24EnsW1kotB4n",
  "key32": "5hiFrvA54Zass11bvqu1753moABeAagSEtjSeyNo9Jg6Ub2MuU6CFBNxX7w3VcQ4JygiRUPTvKQZ1gnixbBrq4ED",
  "key33": "2vs31b7UEGAd1cgWX9NKriWCBrWokrYrDG5drbB47QjzGJmbbnB9q2YGEb46f6eoS1bXcEHQnLG4EQWpT8VyiwgQ",
  "key34": "3qz4T6vvy2JX61h3NgWnvPk46dKRAH6tmT6uozaKPcb9saX87WNRartwHp9beJFtTH4aPhbUSCWax37cpwtScAra"
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
