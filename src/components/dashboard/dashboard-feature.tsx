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
    "Phf7ULcudSLZnpk9dyaLBWucAbbPDY2mrmVFWCmfHhycntUM2vbFGQGY7Dn5JPXjQY56Vm149K1VyVRR7o1eSWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSbzu4cUYfDEWRpxuTroEXC5a6Y6jNCRV6VGE8AnxVDLszYpH943RWKcLJMkcaDps8eo9fi4pSKZbsQa2GNP7nm",
  "key1": "33uQgkHaVVMxbjAoaiCxvpCjqCbNwNr6mTGmrteLeQ1abbmcZYNaAe1rX4eY4uByX9DhonuxLnFVXsC8KNRzm4ue",
  "key2": "2XSRBHxdahxzNis7ycPwCvhuiQ7bRQrehQxUm8ot5B4paXkRfjZjJAN9Liit9EHZ2E1LJ9jYQwzAsC4kbZFrhFFU",
  "key3": "5LHUt3GZrKWnViii9PQ3V8Wq5xc7c7D5Y6iREE8T7WgxZxbq9TnRZv9doUrQddJE458M2AYuhDtNHyV8bedUVWAw",
  "key4": "2vXMjGNS3Lu6PA8AqJAXiu7QkQvgWDWesuuCpCgS8pWJsRG5edUqPZDNgAVJNHfSpjYXFQ6NvjDg2yDNud6TdUrA",
  "key5": "p7gq3hvXidjs2pxXEHJA1DHJogehgYLif41bAwSoY9M9Lxor8CZAmvWUmh7Tmv9GS9u3RZyPsvKpZuptZYuAXBV",
  "key6": "38Y24VKzMScXBdzPhKRuVx4SSVPHdzoRs7E9qAbBMAF5ifgzU6LcD9q5FRqTbCRm5wnescasxfdyZRQgurtC3zfU",
  "key7": "naWtaiMkDSRETszHu7kvQfEpKzRXMzpvTGyRTUFGfKysDfh8AY9ArzBFSqpFC1dEyJTpgiX31dGY1DvfUS7yoDi",
  "key8": "4BMuW5GhUN2TcPZTc2vkMrka6YjBkrc9vZAgDWJJJ1yAQ3BoGzufZFbep2HWdWyJpey7yuZ4Jjcgf6qxk2qYt3p",
  "key9": "2j9XfEmdcm4ckDfRYvLSx89akaq2KrTwQPYMBf3CzrEd4G9ugnTNt8N4T2rJd9SkCCkH4vuGv67A5R6VJjv9DT1o",
  "key10": "2hZRnGxn2gBv827S8ZbVd3nibCKk86uGFgQNsdADRdJ2XPdFxenV769pcRNtK83C5xsbVHH2wpL6STeDmSfYQEKX",
  "key11": "3kQvb4MhwEjEekkQ12ZF35CPvoNN9PnPdpdzWXqphEgvFkoreFbHZa5uPTTvUsniJSzMtuExiSdgELe5xmR6Syv6",
  "key12": "23Xw5x6cq3fMw2J9QxeT4Cv1k3DVeFEuxrKpQgKVqtexgo9TNfEUPC7bLVMryY89DP8meCc8iyACQpyFZWEXRv6k",
  "key13": "5Jfy23xecJLt81z68Pnt2fxLVn1pY44wt9s5Fm3cyZDpNt8cFZHc9owyQHYPUeTqiy4wFQMSszEcyznBUTQfcGfU",
  "key14": "5gbbmfs4WyHfxNzWU7VjFMEEZz8UaGiKTMtVDdxFMdzNWxRLybcza8hcNjnpLJvmjt2UnJpyvKM9QULb69dR6zDi",
  "key15": "4JTABwNMcFLBmUYY2F9XpmXDXzcKNcQNwJRhYgsQD9MYWXrMkomXSLLdRDgSQXDSyv1ARiWDdb98ZHBD5vYAPaUD",
  "key16": "5TTznzKGztU6wvVE5GpJot2a1n9xxEKVervCJG4jQrn1oWGmS67fjXhNWmNSyWq5MspwGYtAo6JsiQwgKe8F7fFG",
  "key17": "51ShxpKA1EgmLhjT8Yci5qX63JtA1D13QJdxMEeBvZCd151hmqGSgeJRt1SanE3z218YjA2ZjfMyuP63xzoEiLaX",
  "key18": "3pUTzwoveNA5QScaqv7vZuSTVzEsxg2M1AiThTAucfMrsj2fMmVruD4dvbcAz2Y7GeWcLgivzGbCL5u3h2G1SFqD",
  "key19": "48umjMiMKsV3dGsV39EHVU4Gd8JoysHFJhf46oR9X7sWiT4pBot9P2SPD4SaVRN3eGy7VhspZFos6wxED5TvWaHS",
  "key20": "5uexLWFfAkTfLtFFS8jhhqA1o2gLkYLworAnuhk4u6zyNxWQKdod9EEo338eriDmmrvBciVRAper45E8LAwgsHD1",
  "key21": "3Qd8GLJoMwiXwMnkkLNGbJLnAjvhTYa27fbnkkQAp49TQnX3N6H9xTiogDK3jMfU4GQJFYukTzkanXUcgr8vYuvD",
  "key22": "2pkQdJ9wgQ5kuDGfaKwDwRfPhLX7kVrdDdswcWWkd4o5WEqJWKKmER2LZQzzXoCkHvmCsx1SRtoq5L26mdU2qLH8",
  "key23": "2AocakgowgS8cgLSn3Q6kj1UGgQfqUkep2dKWy4kmx89tq4W3qvvYkJTSMAx8nfad8uqo4DPbbfbPzorr2Tovn4i",
  "key24": "4JUWBv7hMwMPwa3RXACJQhzErzLrHAfHcfF72NG8S6bPP3oquBXx9jfHs1ZJ2rRnTdnWECDXtB4mGVrmDn1dkqXs",
  "key25": "2Kb7wXYdcsRPdFdwj8aC8btPq5wqJ92V3ypYk52gQrvFNq5rS5dZHE36q4Ew6n7AMTXS6KpDVwyZERZkXBcHnxng",
  "key26": "42qpePB3ZjynodworCy7H8pBYRU8eALCTG6vAtZNHUjmgXqhsTYYxyZ1YSaCShm37rQuVWTyUpE8jYc7xpsboBVq",
  "key27": "5xKtbry5rTzCLDGxsyj5iACF7fcx6TmEzRc2kWH7MRH48PZ6hPqRVAcBJKi5bZKNkxXTG7u5QGsBTKaDP8XKmHnB",
  "key28": "3WAFRMgoZeM2aARPiVkcCPo3NhTfGG9cB47wKekRHicPsKRS7VkivLs1nMpiciYSYSVpFCeeFt8DoYQYQrWCsVaq",
  "key29": "2KNtH3CA6sgbGqQutSSnpY9yaqkUp6TRoeiJYowVpgpQtMMFvn6d9C5CQk3FybcozwhAFSQk9mg8WCy2n21z74HJ",
  "key30": "4ootizNKGJRhGtwDgqiB4LkUPzZpC8CXbrgMoh2yddDxjsxoyoi61sioVUYLXhdz6diY8eNLHa24YSTe2FXgkPV1",
  "key31": "qBsrt1TygxZqq7ZVbYNC5nLQki8rBt5U568ucGGRV2X7mahVoeExU6ksQNPdXgmASmyJvAJZbWFbHGDLKqpcvhR",
  "key32": "GEFoegabkmGfKhg1QDxNF4KE2WgSAnxbzuSpUNS9A5vszN3JqJXcKtqxRxSFTEBKRPxTsNbG96G3XcuiWqK51Mg",
  "key33": "FE42fccDccSTUh3xUGRTz6NkERPQPs2Ry6BoPjoNgomDdGsvB8sHKjm7SSpH3AnjGrTo4GT5PtyjdkN3hCgVAa2",
  "key34": "3S4Qjx6dxZHhgCA1Wc9Ey3oLj6nnJ9qeLZqXXLHVv3SLvWqCoDgPTk4wQKpEvfzntHtoDBRmUqDQDqNwM5TGuDpg",
  "key35": "19mYrH86hRPxiaBt5beczE7zLpn6mZT5iLwN6o3Ub3hM839SUtSga9VfpJtXSSdecwiQS49pECe9sjnzRWGDfnq"
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
