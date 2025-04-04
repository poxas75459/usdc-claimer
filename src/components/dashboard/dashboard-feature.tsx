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
    "2yTzuGnspV4jjjF1KDdN2gLG1spZsy7gsqbs7u5rCr2TmQnbK6Z5P7n9nkKuTwJoT7NB9jq1GrDehasJRFebj91u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rR7iBREFnoo3SvmKmf8w8pkDvbugBm3fGvxow7RMB9a4uKXhGH8AULvTrNkC7rfZVw8nqtfcaDM7NjkPwKDMja",
  "key1": "29UoTn9j8VAh1J2x4L131bcTBRC776ycz1kN3JRZKA6cV6Nxpr12j2cHj9dw2pjbLMDGBQGzXmzrDMGSrZma1TS2",
  "key2": "34duXZdnmm4NNpD5igyHmR3JYtfQ1JNHJV45XN4pNdBmjFbLHHRqXVjSD31mLXcdMS4oEVAiZhfgbSi2EaLWrvrg",
  "key3": "2RdFrGSXTrfN12wyqVbfUTv1RD3DDBKW2vELjELHkNw92qfFoqN4aAaEsnJ7u9smAXncbd3Pn5dYv6XT3T9DoZFx",
  "key4": "5HRgfPUu2BTSeATFsBWNCY3PUkbXc8Gqg3Tcbm3vgxYpH78pp3nErq3p85Fht3wQ81z5Nyof4YFgw7uyXStyR4s5",
  "key5": "5i1Jbtj92QAGXsb4tTjsUb6Lgd62VMa3dYzXg8rEmuiRNK7NRhg82bXCe8LavMiVVvnFLxa2zoMWSqou45Ejv7rS",
  "key6": "5iUdr4zRqRwpfEiXjsire8A6rQShiULHukdhSFG9hqHhMjcwcB5B8zW29ZMNHhHdeYmYMvcBjdCDMxdEBsjtPrLZ",
  "key7": "2V7MB7j8RidTxPXHEkwaTcekdkhUHPZ4rKXjXJfpKvqdV9KYgD9TE7zPzYSkY2RpgvdTWE92W4kLC7NR837QUvci",
  "key8": "2mfeVJ7PxmXzJaV5dnxyxAXN1Y3UEd8rPAahJqdiwJotxzPSugspiBsTNvGQQbfnoEqVday3JVPouEcht6cPJQe",
  "key9": "26q61JYc2hRvNRN4FYNDYy4as9qC33EmH9MVE2xnuw1QYJMUs917sU9rufGw9kP36vUF7DFVRzf6PrSe1e1Ep6Qz",
  "key10": "3udzaWyLV16oqdnLAfkW1m9Zp7EDWmQ6cDuDpQEgqDpTatumC3F4cT1TeqenUoGNhSpdA58yjjYPiTzqMonEWm2K",
  "key11": "39HmVJCoYhcVsYPJSyaWt9iN7S2yYRApNsDSNtSxBQrF7uqz1QNK2eSEd7QYdvDooAbecfd2Jh8PsbHi7D6VPymb",
  "key12": "2h93PfePzSQacX1m3Jf6R8cbMWgV6EDPmFQt1dtaFg7GyvpkkTxD9KT8JyrJ2xzLa8tHrPMeLzn9AAcf9BhbxzUT",
  "key13": "4v2HfcirUjNeZ9WRVU3vtBffxbcs5eMgi1QeGuxPAzq43m7so2M2xtnkLiN9oVwdTvv4PUe7j9xawFR4gDSuJJzb",
  "key14": "4wh6wbfPyGGAASCKbSd2kh57ENdZ8DHWEGsoBntnGusdXvDVoCZmVvw6QzruQ7zgGAZtNLho6DBBVkWov6ZJmLxE",
  "key15": "2jBW1tTtTdFo9RddmNFcgbCCoxfBuzPM33jjSFbmuZ7ZwDRFJAdS7QSm7V8aQ1Jy5jtaj5ezq9a2kkpiXMPN6s4P",
  "key16": "4ZWRknndH2iRqqfeNGWpQUqW5fQSDHAHgDesh4noCg6JQdR6ixH4H9rPLdt7gRJYLV6NiuZ6ZbUvtMkupdxMnmF4",
  "key17": "3T7E7iC4yFn4vV8zF72nDDPtJjTgqTFwt2dCPZRYr1uAbTiSFSseQNrCgKvXhTZ4FV8dVftxye3LUi6d8NgJRkSX",
  "key18": "2UAhgSvVE33TN2WtrWKtQW4bhNLWMkHiinbu6rf9aFAvrERhQk9EY85m2m3r3yaLa4hebe3Q83HZQTsBEPf9Y7aZ",
  "key19": "vUoUUfD4gYADDH2F5HLGNiPvoNSACqMDbZhEPZy85h68uyTgvkyPjedcLsQh8iadSw6dsRzhyfDXK6B43ijz1DM",
  "key20": "3AUxWhM4quuJ5AeLrgTQBeAgFjRjfdBHgV7ajPDn79Nc6DX6SBfHPgUu5adB72RrMyvT75wKNuMYurStsr9Aod69",
  "key21": "2SQqzdgU7zxoJhCjCqjwKafdPKM6JLzbaQiokxyoTs3MZKUp8bxxPToDxWAjczeUDdfd9x6aS8aMHqyqmn6iVhn4",
  "key22": "1CvzjZsh5cinR94AochPBtasXSh7TNQjknGxMrSdpUwckV2MU54kAEicWcXtt7rWoz8q39fbZR3ycua8njDMW3r",
  "key23": "2FSAjUuBP9shv2pDs28aN8e9rdgCVy9NqgQdsWCmT2ZJQo6rgP7VtSoMNEJVrnuirw4e1v7kxQSspd9yz14XdETL",
  "key24": "37KgbW81wkpeVbyVGLinGkJpwYAv9YgVcQFqvivry73aBYR8X2F1RkVhvYhgun7TwbFyuxCzNXVJZ987QfKJ4q4M",
  "key25": "VZMHcTxS8VhZkoSuVxT2FXDocZi3DEjPpGsUddhF3sSQhgAqfQeyjgrffnemKpfEafq1Pwd3ER2A9qHE42jjxkD",
  "key26": "2RLGw8UEemBRLS7VmvgrURBVqvQZvDpmBnsPep11V5xhjgJSQfp7sjcTk6di7vdEYS6NgsWxmvMdKed7einiubPC"
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
