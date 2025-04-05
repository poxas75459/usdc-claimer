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
    "59nCLBQVeA3RY8cuJH5jVVwU7SjpxXcnxBP4ACxfaLkE3s8ZUEicACn7kmVDpEGMNaSwoHCyuYe817ypLWTUZctx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCkMeDripvxvkaq6aPKEtk482Xec2YNQWqHRf8YXRZSJXt2r8e8yhmgoACsLdZEMbXuMS26E9g4gSyHvSFCojqj",
  "key1": "2S9QkofkzuDYjgMyua5QmEtDtqQ9t75rS8NioNreG6jrUFRjFdBopt6uKiKFp661ovVBYd8hqvWqeDvTsTCyLhu4",
  "key2": "4bPfhD5eM65AvYjnjFWfyTLtwUMtQD2Vg2n5bjCKwNyU3bAoDMErP3nEPCHQMbgb7VhzTwPdKHr1Vp9XP85Jxmam",
  "key3": "2ZG9D3QTcGhp5XJxoERYzXq3N4YqY1oGHQ8bD4982hFuM3EGaujFmmRD27M1saQoLpBWYJh3NdL5ngHp1ShDwyc6",
  "key4": "4QvTCM7jQr47gpPxE3X4JPTyUjwRvem2LjYDP8gzpFBZn4qWhp6iXCJ7fsEDb9PeVviCcjxSnDsCzeGK3W4Rq6Sc",
  "key5": "3zGjQBH21krhZr1B38gz6yW73NoZP9PWcpVKG6Jn9Qa6R76uoBi6Jg8wP4Maf4xQ6R4ST2NC6zGpMwy23nsntopJ",
  "key6": "2BXMP3T8MkwKv7KyR1Rm5ep7pBiDWjg3MNEj1TeuzJMj4cKcVsf7A2Kd3g9sP7LA1dpjeMYxXFCvKSnNzK9WdfC8",
  "key7": "3dygnXE8HK7LenSYHvXp7ggeSCthDDQ9B7a9bCdoSA84mBimPAs3ecDumPReh6BWoy2PVUZGk1GMAV7baaQNmUCM",
  "key8": "39kQn6qCWc167xMnMPtrhbCRibqcsFrgRnqkseuLn2LgE7URXjWCg9TK2ZZzqaAKZEcd4N54FqSCENGDCUiNPvFF",
  "key9": "5S3g61C9uNv4Z3Q226PpAfpuJFZEYfQnSBAv7tNPwg3WatGVTzYokzb8GXUhusRoJrvzyx5Xt8aGvjtkMxQztW4o",
  "key10": "3efBaShag9jjnhQrw2yaZN9LHJJEH7qNjcGynSbuiMLk1s5y3wYe7fQx1BUB54uXMHRgHHEXJxiZxgq8V8d4QfvH",
  "key11": "nyrTzfTkhHTyKtKUCmsR6bJY1PFpHB6BRFYyHeV69m1moSukF8rgYc4jCuufvSRu7PYpbZx9i4XSxgbaTU1gbLZ",
  "key12": "5TG4Vp5iq4SxnsCbgqJNjrKSYBXRKZ7urMyEqebg8yD4KSnx9WyMwRmuf9g1iXJuPPi32vxHBnTJnivSjScQNiJB",
  "key13": "kq1eCgpaybk2aLDTuFYPMeFu7Sg2138tLQLJM5vvqyb3AU1c36Wg5nyVwHEwidamsK24hWy9JHwnEDPjcvcksNW",
  "key14": "2haZkbNqaMokJUs9NmSpk5dt9YYvRfeC4AKWvndjjDTFgLbCCkXc36VaPhdxe7e474k9KNQrJza1ohQgHLbRZjQ7",
  "key15": "2UuGhRhwvaXe2cadDPjWErzbaLHzcbuMzu9Ptuw3BgcfPdxWqv3EvT5DXDKRNoQgZA73eKcGDiZf1Gb2vP91JV2a",
  "key16": "3uMmANDt9GcAVFoiewJLTfbRxBgAuEMkHbtys9X8UZA2DR1k6n2bdPELwYTY4YNjJAeHFMvFUYGXX8BBTt23zz9R",
  "key17": "fDMDcCGPX8dRbm5v8oaEB6pgzAM1TfnbK1AmJ68cYn9VJ7HEF6MaoJGBgKiJvshr6gmLbkn7AoQTQXT15kPHS5A",
  "key18": "FSoZbunFpzNrxvSK9koj8XQGxWp9Z6mKEfvM571VWEH9hMqkpPsBPrhLDEA4yokRCPC9PpX258uujxnvDtbFPRL",
  "key19": "39ggUZaXEYV9JWZpZmQVCeaXBPQ5gW2uSTNTUzNDcwqwVAdt3awHRoUmkvh68avVXabjFytLweRzXDZAggXhn9GJ",
  "key20": "53kzUeb2sWFdRS9f3GiTEBanQFr3ZWJQpVrpNkEnGVqXT48ywCfK2Ceht8c3Ta9L1RUWTGL7huRxye4vsh5ebWnw",
  "key21": "4jvrTfptbpewQWHamSdaF51sNw6t91m6dgTvDpvCDk5645CqPQEaBM1WZLG8WdxFjr3Y6maCkBgxCf8wswoeUQSW",
  "key22": "5XKSRjNf7hdwsysv5C94pK5K1VJMQV3djNzJKyJpCaGAZ7tHKJRpY8NxcbV2swFJATaoG7ip1N4jS8XM33fQ1Wz4",
  "key23": "356qvH9uKQSJM5ntrowf5rpTTWc4Vw5DPecxkxNDv1faC4TYQ9PXqXjwGqEkYtgfEqJ1LYrRSNfD535injTBnH4S",
  "key24": "25anGPx6QZ4mNNwAXQWYYQGXSjF9MY4D68HoogGCNMVPBsDadGdtzw6z3yEfm8jkfg1ehx62VMb2e1N7pwcRenuq",
  "key25": "3D2qEJYfSMqm8DDtrS3k9QHMMZhX7KEGd7fZVXniSvas4dRRsVy2Q6XNYqjyntYJpvWmH4cgHHvzyreCRsZoYaJZ",
  "key26": "AMSKra6AcdQzx83HSyDKnMEpGjMkVSar3NXXLrXbvZL8oqDtG2A6SYWQrysX6CvdKwkFSDQy5TpYz9wWrbof4Z6",
  "key27": "5aQ1RNne77FHCi4Tkd98QbPoBmaFnLAT1VUnuwJ3CfHgHBS9T8NEUG3HwRLGKCtTTr4jaDBA7MPgGxxm5MKFacNV",
  "key28": "5xgfPgKeYQiLTNrQJi7YVn9RcR6s4rXwqYTrQiZhNKb41C6jUwBRP7EpPQo9B9JNfrmR7bNLok33ooqTmX77TeNz",
  "key29": "5ScSkuiPA1JViv1PmDjM3BwkUMXwCeciGvgSQM4NHkPkgxaP7rLvJUdkuoxtVY77ANAz82ewQ6taL4jCHVgKPwFG",
  "key30": "4iExLSFkzoDFduaCurouB6a7nkHcGtT3P3bJyFtXT16WNRrsSNwqT5cjVh6oRrpTzTVpA6oR5f17FthoEjbfMewR",
  "key31": "2YqxrrvvWYav5vpLT89Qv6QKurB9M5hcYs23XpUzYLwBue1BE7utitDLXXYMW3KXEWRApV7M6fy1c1K4HCn3xUp1",
  "key32": "2ewTuY7ZXFTkz7nXeB8ZHA7MV1cHho2JjjbqQkmvc7STcH9uUJzdjVN4PtW1Xbmna2H4Wvz7gNYv4R5Zm9u1BEV9",
  "key33": "2p8mx9WnQvKEqYUsUruXSruxwYs8i2uzWrdchZL5gHjUcuCLSJwEZkN5tDJbGGwJHxzjX8qLc1iSV8KTS9gknma2",
  "key34": "5gKnpGNZ47Keg8rkZvpDVR98PQsiVe7oMYgmmQGiJiHN4NJsXa8Bm1moQHyGYnDCwp6himn3xsZuLMPnJiDdx9tH",
  "key35": "5wRCkmY5mSUL1Kh1wHL6r1iL5Rch61L5VcbrfhYrfu5CZPuySMCnpEtJSVUAfTrBFBorBzQAtwJgEyrBA2az3Xuk"
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
