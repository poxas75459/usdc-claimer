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
    "3p4DxNw74cB331orZDVDJbJNxJvNFVr5E5aqhJCDoakYNuZhKnq4CDaGM3gC7SCmDenLo9jSGwz2nAkn6K3xDRqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDNUqdzNun8GBjcPVW8N6JxAKfKYrznLXmWA8fguPfBjcVQGZs4n6a16vXs2jg5mE5pjAFMaWyPr2sHXgvDgcDi",
  "key1": "4KRTXABWNff7Ahceu2gAuzTY7eykNi7hr8LtHehXsgRwKEU56g6PPiYmbchZd5FT5xwngSCmBNozmiwXYhiUSw6Y",
  "key2": "2CxFwkqMSBpNkX1iMyiFKgJbziEz9auBJ2LQkeCHqpnhoVV3897B93u2DKyQmeXay9XEgERUdoaM5NyLLmQVkroX",
  "key3": "FC6UB5hHgHTVCF5qRttzfAp6qVbSKUTUiVMjAie4FCKkZy3d4MP3JcfhKPVKSUnbYCqHNRUYj7jhbErq2dF26Lx",
  "key4": "StgfcypMZRn2Aee37PmnhYi2TxeVwYXfMMoi9oWVyJcHHBhfu73dotd68CrfWmxgwnMazkQeawoAXz1SVuTerMA",
  "key5": "3GRGoKY4Q2sVdCoUQhXB4sdfgmTPModpJ4B7pDQkyTeCm2FNaiTuF2tGUtQWgi4XHqKYHmYhRcmDRFpNF1vAWrv7",
  "key6": "rszpsmv9J3WAEWK3FB1jhMjx57UuV3iFSggNVpxFyhAkKDDGDkLd7LX8KXDqTPW1mC78mJVGdjN4TSG9UhhEyXj",
  "key7": "63QWJnk256rWhmBNFGtYVG62qNPny8jya2AKLvpcTaSCswTo8DKxeZokyJwVuLE7eD46oc9pNMFoSsNG7o2qw2Tc",
  "key8": "38gLQRgCrAx5QimNWxYZpDzeqDDvKMTEGbwRabAkhGedaHFNtJRX4n3GHrLtpDzdSXrVUwyBdKaEHm9kndJ91cXz",
  "key9": "5HevCTiPCRghsyZLUNLvM1FmRdLof4qDibXkkMTvcRCpPoXpyc9icMhwRfU5pN1ssn6Yz3498Hxg22StF9u7K3zp",
  "key10": "5DKcuaAT1omhaXr9PzRaka9F4uNCDQor6Nqqz8Dn2zyqEN4Wqtq5Lo1Qer7J8ZuqV6TweDU2GXmR37iznCxiaw7v",
  "key11": "5MzkyKd41pBhM5zmFLcvau1BaoeDtBEcpf5LZEcNbNJSGV5MX5tEZ8pfHtTesFjEsL7a9iC87JYfS57ztkSMSMSe",
  "key12": "253a5Dq97vEcXjpk8UMskeRLXaeVjD5cw37YsF5HzFEZrXxfK5jh5w9DEEwA5n7npegwYEdrj34YRnu9UEGMqZRa",
  "key13": "3YuNqaueAMRbWYBNn9DuMSDm8YcGDh3cdnSEdZngRFQUujbQcvAeZYZBmi9FrrZDcYE7TCrRTpEwBB9QE7qBoQhK",
  "key14": "23jcKHzeJsu9J8CMgNNFGujvEC7Q52ysEVG8NvQCR5gycQ3BNmNodJMsrEjB79uL8BCfrNGgj7b41UAWtbHZuUwU",
  "key15": "WSizKNBcAW2PvbWR6BSBPm9Zfg1BvnfAKBAFWzhYztHPPBEvVukV5FbMs4jb66VVTG3kSAsCcE38yi9LkikZWBQ",
  "key16": "2fvGxqZHwFoWaxbVk8wEbqYAgTwroDkfbK4CCDvZqBFUWbM32UKT3gwFgARpMzDGuYvpADcYfVjXbVVEBeMvJ9pk",
  "key17": "4KcW8qyRyaP4BepqFUZMR5WuWTQTNP8TZtFh5Gt838Xc9Daohb6fbiZa6ChrB6Pnjnwf3Rd1YdfHnVZaEEukpeWj",
  "key18": "5JPcoq3P7fNZxhb5WFaTiQvpwkycpRjvJmxTtM4D9SuFTSygKE1xcZthRxUdbfbwWjdrfZZUqzdNdWRwMt1F15Yr",
  "key19": "357xVT4pyG3yp3umsL1Ps9oZPAGA3AbdGRe4mkwvu6UTxN3PKnoA3NS7JGY7HFCmwQdZ4QmMbAUX7WnX9X4xC8PZ",
  "key20": "2UCBXQHMnunfUSZDmPvGuqqh6Yu1DHtSC9ChCHGd8Zd1Y7uc4HMisXw2T3i5mucPE95zfYCVhUzj5ZmyQqjdXBKS",
  "key21": "4TczuEPAEHHGiKUvs5MFThX7Kyi1Dysp7vQYus1nBHWbd8AxRugAEkTowy4tsU2fYTe3LX25KtfuReVLeMgJR88B",
  "key22": "25cHnhjTkvyxsfMAzbWAUfWGe9Td8SKpPqVn69y2ET8DvCMp4qpo2P5Jr3dK8JKiA764UQJWMCfaeDq1LBpHGeE1",
  "key23": "2zjKtUnMu8kS7zw29xemeyH8uvuNq3KyTLXe5JQu1hrh5AKUfxtseoNtJ6dXRiBZH4ZkYUXj3txYMd6VpnfcGWCG",
  "key24": "7PTshGS26uKDyD3SByVYZVEncvMpW47PsS3v74gigd6KMEGn1vtsJ59uYhQVPjacewx5c43so6JWuDNzuEuG7pE",
  "key25": "5VcRncfCdn8Dz1EM6hghEe2cEJLcJjffRMtwuPfWxKSfBAzK4f66MsQhaLSoM4oHT9e4WjdCtjTTnVZyHs2LQAYy",
  "key26": "dYbZBhYmfsohag49RVYqC8ZLcKtkz3n5gWxFNoAXahJQa3GPdrmUG3Co5s8moYzxzZF1MKXbZkep8h1bSj1d78f",
  "key27": "4VhWvy7ua1ot52UxSBC6UcyfHxJ5cMHGHimTtsHynBTZvyeiS2cVt3TbzFFE4Qsn7Y99ec5NpbLGqiFKairxfQ8Q",
  "key28": "4xvTSnhsRv7FB599XVkuZaTkr5PQXozTUUQ3wfc6gdns4NYDZGRp4FvoatdgGUb7UvjHm8m14jXxuhRCtV4Ed6GJ",
  "key29": "43gzFwjNtAhWgb7pp3CczL9X8sUoCFZAkUM2cuPmn4vQpNZFips8uvedgsV3x84ao9Lat6P4iURtSpbCe52Jrh2u",
  "key30": "129j75pyo5ScyyiwyT4tC63aRYmXkESsFRS7aEYuafXa3Jj8ZZ5Yr7R2eE2EmC3pUM832thmSrvCTSTry3gcniTj",
  "key31": "zHysZswQwj8KAUHknV9f4hBexaE7oHkzDHukWfjPSZQLXfbh9DsYNMpnwMPhVTd98q98cQVofgAVUXcWHMuV8LL"
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
