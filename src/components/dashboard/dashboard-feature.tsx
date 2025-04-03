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
    "5Euv5rfBwiAYLWbAXLX2ntREupNkq4hW3MYUfLka2YSwb2YdbxCjmVhK7CQAUCThGv5F2wrGQoX8WY2LQSrVswo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBvKA5U1WYzTJFpFv3pZ8mKw1NEUKaSYiXgfsFXMnZJuUXCRX4RQr1HzpvRDsBAB2Md5kFhts4aJr7N7b3sqcDc",
  "key1": "5MRcKHcS14miBj12Vz8xnmurKdjnwv756iQ3VyFdCj9sdERiLuNffxRu7V2jaeEAicP7sm1inYe7Nyy38UMrPt13",
  "key2": "2nMy8qRSRgFrCXuitYFEhPWHFqdSUaq4HEoGYgnL549zR5n4PcWWWFrN28BTkroxxvkLJ19w9RYffH1zfyVmTC2p",
  "key3": "HscyetuNneoSae4sQkJWJyfQaSyfKHFEv118FLw5LVXpSxQYRPDAPuwh2buuizUkFnZ8eLb2X2V1Suo3hZcTJQ6",
  "key4": "2edmoiS1E7WQvxidMEpn6y8vDcTedZbPjqAgsxuAF5t22hz835jPnwDCU6Uxsr4kHALFxVDUMWEgcjt5RnanXpuk",
  "key5": "2MigbSYCahsB8N2fxBAavc9ZAmjbchLEdQSx4kSatGFfPRMCUV2nYknbTkRGRJxvc5SErkF172kuViZSEWCfhwX5",
  "key6": "5Txq6tMWbnRD7FWdniFHPAxCqVTf29aVfN7DF1oc1rL7JpHF5Wxa1Z44ga38Exx8APAy3Vu6GJWoDve7HavMrhvJ",
  "key7": "D2CZJRt6TwUDv9ik79yz65AujWz9Qc84g7cNQqa327Hp9HSTW6bjsrjG8sXH1GwP4gmQArds6RmrSg1BhaGSZbW",
  "key8": "5i2jtPjRvHRwzBF29JMiCixAkcye89jC2mxkTsmV7waEEmZg5cnhwCH67atmmNFF6VsmDx95iNAGQPxuYyNx7gxw",
  "key9": "5dPmGFpK8bpEYArvARhLqLxsCVrUxZwtV3LBHwvTxcHQQs1965yyZ3ft8TojuEta5Q3ghv31qZfabSGwmQABpE54",
  "key10": "657GiSWw9unEpBRiGFMoiggy84RUZRnfztrJgZQc7tZJK62NRWGjFfgLW1Ni7LFp6zPWf9A7KKKgHJKpXefzH4wX",
  "key11": "4MXeLi7xZPcsMrhCRjqtFTC8umc89irU3QnwnYv41d6he6xbAEvn7heovdXGmvpAgpPqdqYnDwsyneQURCqsHCiA",
  "key12": "2kzubh7HaH5Ls9HGYc7aokhyaMGTzmCYYurouiDYsgiQx7KHpJiM5JcT1z9SxrzkuRtF7V1ze3hez5kEz6BWY5Q2",
  "key13": "5KvKFgQeNidveK7UfzovaCFBr13qjtAb4wWsmToiKU43rbma8y6X4bgmKTEZHx7fvtdGXLompE84LPWRK9yykh3v",
  "key14": "ohrykKQRY2TeUXgKLXDEVW15N1zLHeA2hJgChvPhD1Yjb32j3KFQC869iyBV8e1paNp3KKaLE7yu8WRHMz1eAuM",
  "key15": "4JaPbYuTYCPpPJKrrm4uyX9L1z1sU6WJSMV3oryxr4pMRK6exMu3FqmrC4ZdGZVypz5hHDyJCYrfi6ug4DzHD5kA",
  "key16": "2X4ctrNh35WtSSZJthTSKzyKfzbbq8JrRYVfoKPovJ4tnxHenh14tQe3GnyZDxNDHybDfqgET8vKXSiFHeraZP53",
  "key17": "4ep98jmYZzyJUhosZ552e6bmBFzfDzNrTWgAy8pu4pgzQYfrCpMJR33vuDLQkyNEAjs32BpjUbYr3KFSESMckH5a",
  "key18": "51xtPKUhq8KHav57uMDh4wfvPN5MncwqiG2cRTCTG4CJxveuuk8fCdekJnvCDmuzcrzxMMd29ZrGmEFsArHBS9Gq",
  "key19": "senKj9fNcmWFyxPXnTYyhfbuUCvAtYBNCUiGF4BQK1gFEh8CA7ZNhDEdP4CnM8gABS6p8ZLdnZ4sFh1VsxJpRiH",
  "key20": "32F2jkeYbZDZf2jZevjm8dhB6vmygZVXosDTncLqciPLwVGaV4KpSFVuNS1VcrnEgwJMyJTAyVB998i4kMG1cRqs",
  "key21": "M53TPiZrDUuzyS8EBGxy1tMCRNFw1y1L2LUTvNsPHKyLNNLLXEi2NoLmFRyjWzPMVkNq6euUwgDm17YSJYQeNmo",
  "key22": "3sH3gJL8x69et8Z1p5caG3jz1Mc8F3x3nk1KfSjkDuUDK3Sm5ZUNJKTDHMK4b18wXTHmNwVvQccMwk8FSsBuqyTW",
  "key23": "35HioR7TygPQC8UB1XZRRN9UxRZP8cGsAbKCWLoFFCgKTdYPVErEDLiy869d7WReDpdaUq1pqPeGLA1zF7etY7HL",
  "key24": "uhfub2MKMk7PPoZURwzjGqj2a9yJGkVpKKMmiGPYp6SqCsjimUCh7z8a13MEnK18ayZcXbnWMCXex4bwvTy5NHt"
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
