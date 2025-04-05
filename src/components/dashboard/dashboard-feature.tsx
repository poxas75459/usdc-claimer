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
    "5DnF7BnHth346cVXhmg4H8PsFB63UroFuMnr3HwnLa5mb4rmyGfbcLdXfvUzgdnw9fcfBQnArptFaX1CsR1i4XgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qc8VShjWzZR5fX1y4MkTvn2x7uF8ynALQcXpWcLWw6PHXXNEYrP7LLsMzqHgHFVNstKzaFaT6Ap6iKB9rV3am7v",
  "key1": "5KJPAK8tRLV7YZ8ehoR97i4LRcNFRuF7Yw5tjRt7q4puELE4cwLKuHcYM5xQhBbh2reJCsVQADcarpuJDyneb2Vd",
  "key2": "4YsxpE9esPy7YYt4d8a4A9rC5oQK1uX8EeEcXhZ39LF3w82fUCj2MeuNbrBSFNWvH4GUMvZHmJjxg9wf42MbmL5h",
  "key3": "5CizY7hanJgqccSaKEyMY3dE13e8vPRyrG9CVQYxA5z2PPLky5okJy6sH6y3mBRK95XZ7YryjNY6A5cpvKhvKupg",
  "key4": "vChdsdian3UEm8nwo1E78iV83iHtpS3Y2q57oDWXJwoHV9P4FMfd1BY7hh7rJVjfeARAQuPRR4NVmu2TFHw6FX8",
  "key5": "4j6ir2XUJDgV9j1T72FwVTv929CS3DeSQVKPWhiZoWukUKiQeDMMskTpHaSgQWBiKrTKS9R5QxeScAQroL1aTrqF",
  "key6": "47jWoecNGvzpoYZzuYKyviQWoTLftfo65MHeAZ4vXXuhQa9s3jX9wrfmbzzsLLKnHSAy9Uca3yiMbkzPKHeMrRyH",
  "key7": "4tJDxuatFVqWGBngnkTuvwZLRaqNisHXbn7T9FUnUYCAWZuxTdCzR6PWv39eer4zDjWanXN2LAEGHNYHtg8Vzs7n",
  "key8": "54zXFjceY4y33tezHArJGyYEh92k5qnMYtRakNb6MBzbu8LUKSmprkgVUHUySMciQTC8rNx4x96DwtoJYXpPRWBz",
  "key9": "gLxtwWn5heNJFKJtrwHcr6GXe8ZGRisdffh4RcF1CX8um7BPVNUfHsPbBqPEdzkN3HngpdkgWNPEbvCo9KZRDsu",
  "key10": "PqHovvF6MetSDEKNaiKfiH3RLRbTsgk7rvjWwsWoHv9PS65Uh7QHHanMzVJen2nP3ZY64AjYtxrWYm5PS6n6cbE",
  "key11": "391x5bbq434obbMWNswVQ3GcpvXTvSvuHmREtsAPyVHCfDh1rDu1DBRyWf4KwFkqBAqscRLiad3rCw7wQwQ2jADx",
  "key12": "h3Eow1kkVwCeCfwE5UToGpgXVjFC9KPdgsnYiBSNJQfeUFrWqorpVzy9tpcAaiRCe7wQKKeG8hRX84sSpguRRkt",
  "key13": "NFHky1Z3wnajWsSKmUkcHrpod84SmfE6veHH76n8nwCG7DU5uUrLznPdk9RaFtJck9Kvxb9yV5PqmX4U5627RoG",
  "key14": "4XeRyDQNkQZgYnL66yf8GPCicUbMJeD5aKRpNaHpdPCTF8zBZdifMJbyspJ3fr8FjnEsfWKYAkfKmVEbWygLxFnG",
  "key15": "33NTB8KYe7vfRvb1LNdjoakPgzCtr6UAatACccDpAkrBF7UhoT9iJzpLQUg6MRtmsXUbbXDAsqBVtZ1YDv9ubHXM",
  "key16": "3EVRbLeYTG8tNqv7hxg5Tvf8dfVNn1mKtLrmhp7G57oCcTjtBwREDFMnyuSL7y13Gec4vxuCaw4HYTpTC6hqRyqu",
  "key17": "4i24TjaJ3pta4mhM1wdNhwxLqX4zMPvfZfwFeijvf4kjhENbjCj3XhE7UqD6LUFDtoPGCDh6GcqU8jojaptC55mL",
  "key18": "63hwfo8eg7eU1tjEE4yUM9wEkdRth74Mi2HnhDigrYbFxdfPrainzYAENq2RvwC2CZh4wgoeciWrNzUJwRW23h7s",
  "key19": "3Kj2SrJqMzKAVsUaowMavw1ab34bbnqnwVSBEmPp4gyyo23XwhAWM8Fvnx3RpuqoB9wAhTRKDBZYNKGamjVDvjgw",
  "key20": "5KemX4j8JuQCet9WyN2zYSjMSbC3b45tTsenEu9ogNhFmdRyVwCfMgqWMUYAHSHFAaGj7n59ouey9AiMT399a99z",
  "key21": "4PjJmay7PyEkGDjEoMYaVxLeNALcgR6t2K4waBpFvLDBpBe1arnYVzazABn4KphSTVhXbk9gZy5vcUoniaiTU9vj",
  "key22": "21EvdV9Kxqcr2o512aMjvLPTLJcxSRzmXVsh4EkLgsSGRGS1smGDjzyNDbKhcCvGjAreDRrsqRMKMhqokEWbCFHJ",
  "key23": "zf94wWvwsZbaCUVHEaRrcY5SStJYpWsc2WYdjCFgKAT1kiiWavSAJjamvaoGSrReUccN4DsJkU91fAK57yay5Ku",
  "key24": "4XTc4REdK42MttV3HeYHAzz2jqkcFTQQvLB7Fo4vcCREyMavZpChf7J1gHimYpuGB5cDsnrBMDD5URFjLq1RMVMY",
  "key25": "39ggFGHGxWdc3ZBCvxc3epY2hFDBmyAup4V3do3p3Na49wPkR1B7P3mnZ6x6cPCKC8o2jszpMf4Uoch5rg7Q2kgQ"
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
