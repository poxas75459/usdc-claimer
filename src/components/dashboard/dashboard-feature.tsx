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
    "5h5hYh4rX4TzjWu3aStab1L5ThAbaj9fSTE432Aydr8ovAbHdDj6MfC4p7n5xskBAVFtwRv3PDhfNvEyfHovQaBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XewCoUXfZvaz3CJ7nWLmw5xcD9gfTPsAh5rk8Gv2A7WTYXWjc5pTgmvH5Pca4qcv6cSkF5u1ADTV6A3oNoBGsV6",
  "key1": "4RZo3EFMjVTvCqPrchiLCVxLbpJPAKTH2tKsPAzBjAsKZ8iVMb5HDZBXSJwfrivH4Qm7Jd7CQxx4X99ri48enm7f",
  "key2": "3rvoCxktMmUHimnEDmL9tre5w5VJ1vptj2BT14RsgJVbku3H9E9kwxwsnULBHBYC4XfQj1qVk1hUJgPUJRg2LQW",
  "key3": "39tzWA9nXVLptfFkoiTwVnUjGvUhbNh4RemU9W3ZyQV8RemicEAFKCsZrWpQAyasGCF4tBrTpBZXQg98AUGw5gHR",
  "key4": "2x4VyYBHj3zXvNaZjfwDwNbR3Buuv4Do9RUDy7sFmzmFLfb422Y3hqcsFshYPnkQcgnYg3oM8jfQVR9BKjVytiVS",
  "key5": "4cXssmevfzbkcMWHgPHpur2LJCcknmPSmkVPWvDqmxjdvr5jhdA11RJgbsPDeNW1XQxtokduhU3RHRPrf4fNiq3J",
  "key6": "4f3vNh3itiWiA1WTMik2SCrbmYzxG8mU8yWSNT9WjvRdiJFqseVu8oJ9uqfZhMcHPz3WLyjYi2e8Wj39E3HZyaFd",
  "key7": "2KLh7cNandg4TrZ5p8K5ZmqoRa2CM7S3t4khQYgNB4xTTghUtSXJ3jaM5BCRvhNj9a2S1eiSgKFZpwM784YxZ663",
  "key8": "43T9myByVQcGvoArHpQ9LCrUmw8GgCcqhDCRSR9svdWw1xEUNLmUdbag3XgBHu1Zip4guqKR7nHuCFXEAQaRTFmq",
  "key9": "43mcUcVKKgRe2deQ1xabwLXSRsGgjVAYhyzELTpV22H7UggiGMVuXugWQesXbwkocY7CrY58bBnnA7Nmf4TDNqoD",
  "key10": "EQ23w3Ryw7BniG42AzwobTbrikviSXdTvoRnmrdVLKrdyyL888jADGe1drM7f3cSZ4b66KnuS9UZD9eXoZTn5e9",
  "key11": "5cNHtpPY3Ls7u9bkQDnnnUZFoTj6ahKLRxVvZihuzwK8ZAUzKq35wJBaNzebzWiqTpUkJVXLigvQGu4vLjEkxJ7W",
  "key12": "3R38k8GWUhZFLLHeWx9j55xMDXMVrzmKkCay57JLcAJg3ZUMuYv6wSvtCBFgr3BnsFmoZ32xq9jRVPPXkugbUTMz",
  "key13": "67Ek3bH12rpvCvY7o4VXBRn6AHqSgewKfK2gyKiEih4if528ysNCGJS3oaZf92GFX6MNbH2xQmzCUw1p2u3Mm4wy",
  "key14": "4GYoxWvgj4xZqgWFTHEymUAD7y4ZPMjjpsCaoCcsdvybpUuio8fBCftPsWRdReGzLpomwgpHNPtAudPPKvNjUg8U",
  "key15": "2gTrrq4neDimsBhq347Rgzq32bxQD2i5zExs91Z17TrAuJVTGMhTB42H2tKGKR8UchCdbrMsmo5igpfDRcaQM8GE",
  "key16": "2Siyr8FqLiaN9puKPsqoHpw3okU9XUmqNS9FXYVT4NnzhBiRVXT5ZhPAN7SCK9a97ETe1j5oKvJeX3LibdA13azW",
  "key17": "66BzKEaGFN41TA38u32tXMHzMSxtWMiR1XYhq4f12475Mr2nv62Q6Ls9SfpPferHrtAkjaB2MsEFrUANWdToFtGg",
  "key18": "3UwWGn8QGq9bBukVE6cgfvRPJPEnxiHvmfdCX2n3efqCTKNnMUL4ZaNfD1CoKLo6HYTx6d2uXvmwRBty2GeRU1Jx",
  "key19": "63ZQErQrNqghcvJSB7j97x6RvvmqzQmq8tYzStHMTghSeECACaseQUgehAiQ7y5sVH5iuSe8pzftkHKvfMB23duo",
  "key20": "5JtzrmwqUsyMgLYuiysC3Z2CbqyHJ9QSNwTJwuvZRXD8krGWDKEmUWwZjxHHH26ePHkqdubstdYMAhrw2Pf6fphx",
  "key21": "3cF2WAtKyaYf3WNWp5UjPbnNjSFY3f9kcnYXz2MJY2jVgPDXKnAaUJUfs48oLCcyaUGeLYTekrmNFLzFML5Ki2Uq",
  "key22": "3EhXP5dDRW1yFS6sfbGurcrL3P38ew8WkEf33xvD5eVUdF8E6c3FXyp54rbp8uciormmZ7TGDY1Fv3EHuWqFjook",
  "key23": "5xuvbkhVfaH365VUDtdXFT74gbGM7icxNEC5xaFCzAKzc7n8xPwfGosxggnus7mVU9dNvSmi8GUrPGK9n8p9toaH",
  "key24": "2s44HpoKnuWCkMVe3TsHahiJ5GH2SQqSFsxfdhM67QC4c9srZKTLATXeJVjs6Q7Ji2pvg4CPsPQVVeWjCHbfrNXK",
  "key25": "LGviercFh3KGxLm2byCbfzKCju46qXWgTPDfKJLoWNfM6QK2Y2rvsw2wnzxb2ooXg94anbe7C8ySRA7oDSfU43X",
  "key26": "4rHhzTXLp8k2n1iGYeRQSaBXhqjJhA72WvdzvEauy7eC8xm2JH2JoScmEG2hSykrU4s8mtZCkY2oGYeZCPcf1iXL",
  "key27": "284AM7raX8ku6ZHWb1rBWT2UV5MNETvSg7CMw52beRmRN26pvroRWTodZxrCE4NRqw4LjnyHuctDULvBcdZfatHq",
  "key28": "4NWyasDk2srCqPo2bKXsZs332qpPU9y8VC1iJoiM8FQdpXodzSpeMAZuaVcKd4iDuJQkA7jXPLXXE3M9fizfDZat",
  "key29": "34N6dRHxMFzefAUraionDJ4NGRPShBiURVFYAVGYxbT6ipUhqfhSXxHyKDcNmJYCJgsHD6fmvnfZiDBmgJo5kBRp"
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
