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
    "4V8uYQT6VAKSbVGiUmUVQV7gqo2udT3G8De8jLySNvM36NzmKGR3zx1Xh4Pd5rdTdBbDinUMi3FR78LEDLnQwma1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277KTNn2YhqTXCB1XhDRvEzCC6hq2qiCGN9UWk8VTZgTb1dLZZrntq3YY7dTfabBvEATTG8qXTuAkAJvZyWuFqcp",
  "key1": "2gbgbcY8dYCpcbAzFTsWx3xeFDnwEdsJuLLHMEcHEBC4nrq67gzFyvfikXB2Be351w9pVWLfypHbB4xYQWFNV64h",
  "key2": "28t55vKnFdj8zCxX2p7g4ULRHrZqyc5SJ5BAo6tf4Y8dWSqGGqGHWWZyeQXsvkgRP7cVr4A758u1xTwpo8Q6AzyX",
  "key3": "S2Yc5k9orv65EDHkySbDMnDZ3kfyJeYrJwbNuKcJXPUGKAwDtCXU3uBU1GpQEjBafxm59KLcEKDtzjrPMxCPD5v",
  "key4": "4tNiYCjkWLqNi6n3RxcH3y9AijffCaNLUoib7SPrp6KedokjN4BmSVyVgrjDJRbveLLUYtBMWhkM9dGnxYEPwGWf",
  "key5": "5AXjyHm7vSrC6NAJ6zpFYK6m2U9gRgtrQo4DDALgh43Z3Dd1v55npYZUY2hNhXBwsZALme21C1mgMm6Rq62gMqfR",
  "key6": "3UTe3wLGUVLwtpQdBecWv7gvCknw35a8yEzucwRoFoBgtrr1u2cUoDDWj4JKK7WWZSBSHaDqtyjePZfCcGt75ev8",
  "key7": "4vi66SYdQM16xyLMtGtnkFK6YuKbTQn4sbAW3AfYNb9EzyZQYBoJH2wpTVNxGozv4XEEB3RmA6kYZVhxqfQ6MxF2",
  "key8": "NpabiNrjPqP6vM9vUkWfDg4Vk68EuU4kafjk4ZY2CjTn7RTTDvbxvPxmCQpsSiaweHftttdJQTFvVS9mrZS9PDS",
  "key9": "2LaRpfY7qjs97wa9Aw9cbUdFpf8cBSqXK6yyT79sdyZYgJKFHnZdb3PT7UQj5EUxBH3HivU5Ntbvfy7ZhY3vuM3k",
  "key10": "2o6VZtmVYVevmwKfi6bd3twxs7WPCaa3xi3QvnzKJ48tj8V2r6Jt9RSfHQLgCucxvFoE9eCHjvk4CNdjjBmU1zm7",
  "key11": "2c3spQZghiU5ziHfvah2VAZDJRWuE4m33gWNRYhnsZ6M5KVJDFgr77WC8ut89dYLqAUrtEuA4EwCVcXgfFk8ke9i",
  "key12": "2Y1dto9rzdsg1epJexmCCrdnuznGYtAYtNvt69ADcw7zj766mf2VXk9HLZHo12vycHba9vPq3idpqRtWdcjV5wgj",
  "key13": "2fHA8y48esdPT9gUqR6uTsSfUZJtQQvcQmhHWGbtxxhFWXZonPopchQYborbwmZ7sGAbowsGWmWPA7ExqaNmae7v",
  "key14": "paNPtUu2jJtLa9uEnwsw8Lp31ouL8KcBkNckGkAYKurAPU1niZaBGdhtnjpFd3ENbYMjtM2NKjvYoBZ9eMfn7cj",
  "key15": "5fQ5yEtXiATYFesvufzPK2PtHYVnoT9wxfbaTzuN3pWb7b8EZtwcnVyDyQva9X7jHqPFbCdpwbi48ZUe1aMzExc6",
  "key16": "2s313LrC3CSpGBiB5B7M488z96DLZLeu5N5ppSFoqqGkZtg45H4XrTvned9J1s3LSBRSKjoe7TAVVA9WEVJkFVLh",
  "key17": "2bnMJYFnaic93n7Y1PmQXSLDb6sH49ePSavW3Y6n34hE4RN5vTpi7JyGFa292gvH5zRSyn2M3geR5kHH5WdtTPEb",
  "key18": "4KPJrKQu9sdeqNQZeDu3kaAFDEtaTnchjREVJiACAPFwMo3ojag3fob1LeKQwaxRv9XsFExBVpE3KAeo5dTrH4zg",
  "key19": "25wZqG6GMYwre4RggdqW515pUuMs9Jakk3W1hk2R3M198LVKHU1QPHx7h8Ut3aue4P63NfL5kzDKCw8dFbHHFe66",
  "key20": "4keKny6rdeB6KoVkLdmvAwRSsHBP2zWFhmmZBDsoRzYJJmqk4v4Vqfny1nWzjM1fwZhaP1TR4rFWgyiSCddPg36L",
  "key21": "LXhw9KhHag1kKSvbZEQZuiwBhQAQCEvroS6R7zJtAGNtMVUrDKAyttetCKSrKHFBJrcZ7oSKNEKoF6oLRBAymbG",
  "key22": "2orB3zG8tYjSf63jESutB97u1Y6ef2R1FHrjVe4d3sgFDWvHSmH1REcRVzgdRug5BJfQif2CvXWTQjG8G5SYVE4E",
  "key23": "zUrbkyDB2rDFbQ8GiHT4PU9YBvhXET96E1AmsFv7aVyLAT1mihnnLLomep6Pj1XYN2irQytVuMgXNneKzhCHr81",
  "key24": "35bCLgwUf4MiBWs5MtUJszeK1pLPCLoUSG5ThFvYB1VPSV4PJ4pQf21L2adu1rjvwWHBCFTrAHo9xxkRySUprfmE"
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
