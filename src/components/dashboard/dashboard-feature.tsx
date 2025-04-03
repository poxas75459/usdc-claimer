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
    "5876QDFn6ywg3v3g11gxnx7X3Z2H4VvF5tnMbxsrtw4oKjpwoAhcAUsp2eSjvH5bwZaUe4anrUMPm6twswjkstRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rhmBrmVeUg9gP9CRCHFRSySBDnSKqDMF2oCPJHxNvGkWEFfTL2EWhfg3u6xZAcrPiLb7wmS8423eQFs8EzJCzGG",
  "key1": "UwwfnvHNSC7M4wVUJTgCezKNbYF21oawEDqnYDV5Aw8rwBUY5rvHyeQMut97wobFTeAbYfUvw3xkQzdaHVp6mBp",
  "key2": "3Fx8ASF6JP6vScPwEMcZBdfPb6K8qKgzEJbiWwVzNjR5ktCXUrEcRXrB1CwiNyWzoj6huk5qPtLQXYJ3k8mnUs7i",
  "key3": "3mNZgYYWnovckZQwUgM4CpUh6k7EeqwL1pbV5FpNjZ4xDTBZBjMDVj99k6Y5UAEn31HRUUaRchJ3nTT8HQk3Vw53",
  "key4": "3mkdx4qJEZVVdjLKiJriKwFycfQso2UbWYFEHn5kj93n7C4o94h4x7kEEcKDr8ZobfPfH2VuNpVqcbnxHaGRSqt3",
  "key5": "5s3aiGgXgkj8mKuKf8yU3FnWvH4bMeTFwjwrqsE64XKD3PXX3GKXwWwkudsTVGi6Wx5mLm2zL1DS6hBmW6M57Grn",
  "key6": "3wTUTBmhbE2DfsqBqQHN1bNEdEj3pkWEFZQXzMP5rPv3gRFXBCQAhMptwormqJtN5jWWGmJa7ddVwrXmG46e1bmG",
  "key7": "2d3ZGimUJLuuhctnnN6jXVG4vESWeGsu1c7RqwTNjxNyiiAqHuZ81BxmGv4wSByzN9ZLnQVPAhdTFWt9DrdCEZbB",
  "key8": "4aCoemXdzXotnekVSXRKkUPS7DY2e71V7nFUDrdVDUBPWQf2BUtab4ANJneN93aWkfa4pNDw9VjiahQLRTsA9BcJ",
  "key9": "5z58cfvHsR6bZUka4qMYv9AJ8WTz8PVkBgFHiQbHN7eoTm9zTxJJMyiiwzqy9TJMbPp6LtdPpKK9Q3dpmSVK6Z7w",
  "key10": "4CPKMM3WxzYpwNCA1Q7keZvUodD6rGeu76VxuMeRUQ76xW8n7dH8tRHcFB7Q1V4r8kkB7Q1dX9QZqGLSrYkeRTnJ",
  "key11": "5fR29NSGRTL2hHU43QWGQJSVaMEzgDHTMn2YBn6Asf16Ar3grLJ2yckbDfH5ScSpYLTbRFHVFNbeB3M5rtmVLBuZ",
  "key12": "5iYVzqVMhRpDfpVDashnwy5uPi9ccZPheRvNSr5TmSLP8mNgsDE9GwZoGuWzm8qS8MGaPQV5cBGbbTr9xuMR5GMt",
  "key13": "3Drpziz7Eas5S5nFFAR4AnU9fcST9LD3nzGpbWyhJNcopWZRbSrkQWGoRB2e9VGkHUgXnSu7D216wLFbHvV44EMZ",
  "key14": "ifjMCv3uLLyCSgz6yDbE3JSS7zUBK7MPiiXDs2TYmKGcmxoqYMeiqdd4LRayB4JzVzQra6wKGMN1jNgrUvStjsx",
  "key15": "4JNtu6EhaMkDsiwbhaExbL1ZhgBba7qm1swit1AQTpF2efStYLmDfMS7KwKwEqkUj6MqbVKfmotKWFqZKS7xTUHp",
  "key16": "4pieUPzMgaXYkgZcNFKhWsaSthgBfSjdAjbk8GPnLDCTxWtEnqeUYYxad2WArC2PSimipXxdRXza1ZUX89MV8RhW",
  "key17": "3tCY8zaY48NUNPqwLkwp5U1H1MrTGJJ6tmR37jo5NAZJcgxfY88xWV3qaGEf13Qfbcf8uE3WTNDgYRs3QaUDPhzQ",
  "key18": "4NMVbNDM5KSZ49HFVWYgarxACoEjqMaPEh6ycQNL4bDSeQ4E1U8kUMy2YYSkKAiJVNqdZCjpBH3VGRCiFxzNjZGE",
  "key19": "5r94ajtRy2vmBCTSAk9QhBMNtKpbtGskMAxcJTjMqkduC2E8Kht2YN5VrqfGJEyFf2K2eaK1ogW5UjN5abjzz6jM",
  "key20": "3dkTWWQZztPbVKs2woAetTUZqot9v65xbrpHBnDDhkERBDRWwu4j4ZvmoLayU12E8grZdD1Tv3qyEogVaig2xiLj",
  "key21": "4sL72ae4sV7EmgDbnr4WYFyGSQR1wiEZmG3KFXeH6cMSkgTBWCKGGuUd92ZP4e51xumFe3ooLhXMvU3ywkZJ137Y",
  "key22": "yWS5sBkkKWEPGDP4tJLMDkd1vKgJYTzJCUB2gXaM2yggyj3BQRwtF6tTZegwpCiSwM1CmUu8pFnko12h3usMKBx",
  "key23": "47uLGjugNkgzqqnE5xsHM8xeAUvf4KVKQVnpV8oE7Av6oohYqQNWuubY3edtBU4GXEEJj5HuW8baRfJnjKwTrw1v",
  "key24": "436qqn3VXhf5ZMZVF7kU3C4ULR1PwQvfp9yNihwU4H2qMEJqKHSC3rngSjd4y4ub5o9xiqAudTxqYidaM1c3RxjS",
  "key25": "2GoWFYKF7UB9zu2wEXLmvTHLodjY29R1LR1vAqmCzATVryjrcayDyMwRhLzFsxe42kFZC4ZM53gWiyVsWQB79xE6",
  "key26": "emwX3B44DPPMTaZi2Kx8ezvSKpzWbfweAVNfbYaSC7Ju2buJdEUsUwNHxzLzXR1rttzry5FNrJRnX4PH6GqmP5u",
  "key27": "47zrxMCTPav384UiTVDaHYdMZAdfjx4qT4dCZmVfHXRTz6R4qqXimGFQ1BrYpoo53JFLw8ccNypQnaVTP83Jq7aw",
  "key28": "2qpNgydbUGPeSHZJu1un3UdH78G5F2dhN7qTu7Uy6CNEPsugVeynWBcpDWiZFPvfZrkJA8AL2CyETCUEmijwnKcz"
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
