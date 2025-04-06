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
    "5ZtV82weA4nQMUM8S4rD2kKkCZSErhyL99hUDxS7o6X3S48orQhHsgFDNSXvKVMcxHvy92JEqyW6rbWVG1kMvn4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ot7rg5EDCPGmSHxYFgw1kHczcjVBVSLjprqCTx5j9FoMoB41yw2TfmFWk77GH6yADUbdzbCTay1u7D1WKA5jqHU",
  "key1": "3rHDYeCGtxWyCjmt4BLK9spGUaBKUMaBTDs9uDdaFQtyuXwyBcXKRa8mHm8A3Bfpo5PHLuZdnuxR75jwVNCooG2z",
  "key2": "2VFNPmmtBM1hmZQego5HPgH1efEHzZRf3UsFdjct5smYj2QPmJc9DRhbzPixrbh55pU8QLWDbtUocQH44RvqcjrP",
  "key3": "VztbhovEgTrrFkDADX3bCxtcbVMzvficarp2LdbiQtJzYXbF8nwHnrqQNZd5sLrDWxdyDZ8iTjjyHGHBjLGmix1",
  "key4": "2q4aRF2UDixvFvtGR4Uj6QAFnv7Nww34UoVEkZ2XpYkJosTstnQrp4o7LtVgU8nE4iV4vyBvBFGxMCsLWjPey1mt",
  "key5": "2aEL9BHQdZdwgvXhYfHfP7YTXiivK3rKDQW2E34acFTitERy2mz6xd7bmvNaq2RA4ReLDG2Yb2tuyM8awRGrqDCz",
  "key6": "2or2VdX3MJXVCpUftb4M8GSL1DJ85RJ21Tn8q1GH7Uro4Ytb6wrEXZGWA4sHmoeNaZraKFEBit21cFckYqnmE8zy",
  "key7": "3yiaYyn9RAjKqCSsrCitT5uFjk1At86TD9taEnHpoPSgqjEbrRjCyYhtvhagi5CdMiZMsdbeXH3ijrFtrfAxtwW6",
  "key8": "2dijeuoBVbAEr6pVTntSoSG7FHoxdTA5asTPCuMVkAcNBkJfRpzBAmqN3pUgPK7FSU1yDtBSMd2rrGHym7QCcsMn",
  "key9": "3ouCtagZL3eXvzgvfGedTMtiVNed9hgRHgQSCuCcdY6kByx7BBxHKQPZrm9pfpXQC7571GtT6fWioA7RZJM39FyR",
  "key10": "3EpHmqF2uaE9kXCBvYXXHpiPxTcQzoGuQjFRisT5ZgpFUTrQt15Eau1K3pA7oJboxkfeQ5QRTp776RAdgkvdmeJg",
  "key11": "53LWfXCthHGjkvPWCS5yyV7KyoZ8ZP5JazbcAM3jz3mWep5jRttNQ1uXenApf2ktbj4vLerLbdU85GKibDmPJTdp",
  "key12": "d6tJRifRp9toVhjn4BRTmbc3hxmErsausGuc4kQEEydUJ2mkz4FH9LmbJBMSFN3CfoBKm4y4x92WoKUBm1ADCS8",
  "key13": "4A6dQpgvbnfwcq5xXAv19dfvEde9Ya6UfeKHwecrTd5WuZ6VyDmskFKFSU66bAAWG7fMiypX5HpRfbTDVUfBvax2",
  "key14": "2Sz8eTdt7TcFm5WMshjTntG56C15oe41uh2s7TQ7WuhkBZiEWabh1PdiKUZn6H1beUbSoBicZtghYM4yFKoB4Xdb",
  "key15": "4hMetCVXeyMyXwKf4kS9mTiksQyqaRbVqHVeAosoicFHhfbAD3fgeBr3SYogVQ9qf5toJQMPnLhDgYhCAdnvKHrB",
  "key16": "3J5NrKwHgZ6jq4y8Nqgh2yZyiKu3kTHamgpdoWkvkxvT2P8fYM7dEbxoS2TM1BoJudvNizam13LtQgqLQEv2vSn5",
  "key17": "3zoXtZjVnsL9W13W8KT82izfQGXh1ho8wuFX9mcMPXTmgirqD1pcWXJszapyoi1T6hnzRe69HAgZFb27PLzg2zcU",
  "key18": "zb6xncuNFJPgex6FckoXVbLhtwLSRtyUYXBs7yeoZu2vtXSvvL6wpjJBQH1cU6zgbWwgezvhdfZK8KUci1BDmSW",
  "key19": "4WeChwbXUzcxxZbPAe4EuYxEmCaeJocMh7CubmvMZZDDUx9mDPvWMwxpuDraSFLfLe6ib26SKKAS7zEJH8mEFtqq",
  "key20": "2vaLbodX5vgRnfPgjWdzRFiVQe4xMLsqfXuF2yUJgTktgnsCeau4samVZzge5jSPyUyXMW7w6Sj3gVxft6aCo9rr",
  "key21": "4F87p3E8bqfpJbQADQzrbA6rFUQhZD1z8Ffh6hQ5P4Y2nEbcVxy4iCJcdsoEoSaX262yT5rubbDTGi1vv2rWiVV7",
  "key22": "2ifPi7eanswB8mit99T3DNJ33ScaFBGNGFgfnPqeC28EquyR89p6WL7a1hqRz7VoGY6xybpauw8barzpHtN2cHDC",
  "key23": "iAhwJ6Y13MWUMCmpGXuYfqMid9h5ptYAvRYJJ3rhaM7TCHSQuujHN19tLbRACCATWzrAyLB5AZefsionV6SVNB6",
  "key24": "4ohttyLWBEakbpfKiiACPsPSZEzAsU3Snqq15c4pNDKjhhFp47mfd13XQhMjc3HdvzoSAbhyNw3GPnS17UwhJoEr",
  "key25": "22KhqkC3YPBYDVdkKUcmhW2bcuArGLwsgCtF5q9xtqDboPCzM5Htev2WEki55M1c9C8ZNFpatZYs97nKeHeqCn2P",
  "key26": "htuZEC5gkUf7mtrvw3VDruRnPRPUEskfev4v8oeycfTPhbz9GkVoPQWnPFvHxjWpx3S5GXW3oHhZ34bTTzAQVse",
  "key27": "3teuuaixkFi9RjANnSHif7CoiBUKiMN2gCpM533TeJRFi3SVwThUTS8oBD1XDBS7JVmdA8N95GZJZevvq6AK6RbF",
  "key28": "258CHgiz98SNp3h31ypWuVf2yvkiFmqvLkcyKu1Bc43v9hEuJmUkwhm4XJ1Rsm7GzfEK46eqjFkvmpYFvY31nrms",
  "key29": "2kqnaGBzxTzJFXZoF9SQdQvynXCRDteetMtg2xhg42E4HFPCDCkjZgcYAJeDmAJo2DkvhejYbDQ7v4BciEUhYk1s",
  "key30": "26ftvGrose2ezNqberVzr6fede18pAwD4wjU6E1YaukkfNA6PQarufUQi1H56ZiRZi8ARr9kTu5ifCRDiXHq7sRx",
  "key31": "ni9HRVhyKKacYgqi8JWE165i2px7jG6ky6v5KSV2gk2k62h2YpeLBEHKNHmQb7DGeQQXmeWy31tYk7f2hVjFFq5",
  "key32": "36STwZfcM47K5oW32hijL7r4x1KdRi6XhV72LPbJiifekQAxis4ZvupUvU7nRd9gMUUPYgNRFzSSwqakvXh4hT7w"
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
