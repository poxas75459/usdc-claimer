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
    "5HB73QrFDBY1msT6fYQZibUHZHkSXiAk4mVyZYBQirNqvekHZ63MQpMVt5YeeUztmAMxM2JUCX4wxMHdUkHunedq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sq5F3sGksKwKTrGr5JfWUztL3hMGyhpoLvuybine9cUWnpCmU1rZBQnQDkmaBtNNgr9GToaRqn7GeQBXcguuAfi",
  "key1": "3Pw2vcoj2RRobWwEh9ZPF8vdkYYwSqhtNK3rKdj5GYF1DQxhUZdFfY48UHKB7fyAZy5BSXvydmV6EiL591pJm9n9",
  "key2": "3wqwTxsodP6BhGDbbMvqDwvT9MBfrhpA8B6fNAEHPwYwnomH94zwaTFpy65HZjL9ncjmSFdXuA9edNSWTSnDqSc3",
  "key3": "5NCZ7P7jni7gpE1xf89snKcsZm3yysLebuGQ4TXPeJQAUVZ5qgGiepkq7tG2bkSC23juWreTX8S7RNFtrmpMBDuW",
  "key4": "5mxxFqubweWm9AUWFtztAM9BcLqSo6GXTf81G1mjuRUEgGR3WwnT7FRHZBgYRL8yE4BHVe21bb7kBghLhtM4nCtA",
  "key5": "4HQDtZDZUfQot6XwwFxg8vAf2TpdgtF5Jz2b3cPg6QpqPbNyvZtSpJzn28faRdCMy9mDsCRen77vokem5KSBWT6N",
  "key6": "5FMXXzywxxNQHAWkxJCH1rRPQwX9jcxxCB83sAnpJijtiQMaPA6Y7gKo6tFc1LviZQy8w4LN3ywkBaNwUuisQxsv",
  "key7": "5r5PtbrwxGWkjEQgCmsQDDrnDcREVUimXpBrLMYkwhTd1cysv8N2KhLvVgDGC2eoHbdZ3pGu5aUFApKBMBTt9prY",
  "key8": "2v2k2zqjpEDhrGvRqFGGS7wH5ztDhntRkim6L1tFRyK35uX9umazaVtAeakWmhynSN6rJ8eTmUxAgGAboEMkz2Bt",
  "key9": "MoDdCAeoTraFraX8etX5Qei4bZrJBvvNMpP1e29rXX8RB1F5fDtfoToApAPEV6xxkrFZer8juSjjM9X5qRnCLuy",
  "key10": "5GwsHTzACGbToFUEeE7Sja83eNaPuuoBm5EfBe15vCeNEAkaPzQVTpSN9Kh4GyZAgBheaT1N4Lt4vzAu3jMPPyvQ",
  "key11": "3rSSahMuwmFyeyg8cPdm34YPagERxGAm1esgtugmRr7S7KJXTViTaKF1mj6fQsd6Rn3PbqaVmMVajW49yDVzPvd1",
  "key12": "5uCmMR3CM17PW1joz7QyH2XjwCM4vVFtmbTQTesaDdq3rJtdPPYkR7xDWzUSrmA2o5WCcyV6iEmdeFZaVWkbpQiA",
  "key13": "crCb3m1mbHjgRF2aiAw7uc1K7grWQhvCCTX6MZeayV37yUhcMhe6k3ZR7XTr13MArTYHdV1cSyGDi6XJyUuyauG",
  "key14": "5E1PY3QtXi85jVPzubPZDAwVkWERDJuQQWMZAU4mMwke5Jgecx3t786YPPHTjQnuuBGp9YVaQH7utgch2qnEaes7",
  "key15": "3AJcGbF8LqrdVTGP9zWnRrb2nZKUXa1dxz5qKx4PuAHJmWr8EuzuRe2vMBV59TwizJaPMeqFn9JnT7wUh4nAFpiL",
  "key16": "4MbT9pFRjvbRvEa68jZ8TmmkkPDN7GPr7kM1d8fZvv3sZJgbjqHFuNe13fWayD5dofFNh5cxYtLnWJj91oaqiPSZ",
  "key17": "55uEQt3ndMAsRnVhAv7HtUygW4y93HpNojtv5AwVz4q5hnC8Lj3QyW3qnZFVRkWYRqtGq8ixYFeGebHLuh4cbKsZ",
  "key18": "mREuYD3VEpc3WZ58YWzGsAXWhRmHC8ypydEzQPpjEaCwrTF4CGjaZwgVdPxCuupZM217V1aQr4vQHUMrepK2Gbt",
  "key19": "59t6uVMtwaPC6nk1jjQuabAkghc1Sez22iiZ6J3LiB5Q4r4sEL9TFAeyobQoYfbJPt2Y8KJfrDu9Cm5tMxd4wy69",
  "key20": "V7HLHRCtV1TW3axREttAZjgsddWencQVJPiSjsVfMGLmjEWwgB8tLXuesYiGpPZAeHCyigTo8Pf88DqQkCzcnQK",
  "key21": "2FAXN8VXGmXT7RG1SgQqVBwQhqo49gMpdTuLRM8rrY1vMVLEDouFwMDxLp7bYA2fkPvhRUUeCwQ8bv3VUNFQcz2i",
  "key22": "48i7m7YMPkRfFnXhWaEfU2RqSMXzsMa6r2XBA1KtcHEKZJxJ16Ac7JP65VQb62LtF5vAohjjrreHWPzRGeJLDPDv",
  "key23": "3AyhT9UkJ4DiSw2WipzDoaZqTjs1DeL1wkVWGqp1qJqvuVBXzCVeqkf5nSg341qf8p1QwapJG5oVsCGae8avHdtm",
  "key24": "39W2hjW7MABZYL3gZbbcfYERMWqFYrcrJS7M4zmgxqqfLPH2C3H75BivFjvGY896fPetskx1FWcJLbM5J2TXsWfn",
  "key25": "GqMvzdeqVFMGdjDfnbPr1cspMXFEQZYimqwEMUTCVQLDtbPDo3qrHyhAH3FSxsNrMz27GbnyJBiFxLEVNmxr7kc",
  "key26": "627f2Qi5WjrWssYijeXC3MdzgNFti7p8c3hc1VbkwiBNfXdD8bQg2m89eipUqWiQB6Za5DcfPra4GiwjD4pJEKY",
  "key27": "qKCDRQ4yntmW6pQfYjwjhoddog77WksiezptbJk585jobFTohUFbx1g3g7GjzmfK13FgdgkJTKNXyP7p7hux2Xd",
  "key28": "3enEpWnJg3dZx83uF3gCHHRriEHvyn6n3jYhBAExtWcELUXfvasvsgjutLhMDS5LAN9MtfroB9RCSQENbM4MyPFg",
  "key29": "2qDE3CH1WQfR4BjMy2i4gJK76rBHA7afo3f1BTa4HL7c9k6UityN1mXk1C5PdMV1sePNg9SUStZ2rM8urr7nQj8Q"
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
