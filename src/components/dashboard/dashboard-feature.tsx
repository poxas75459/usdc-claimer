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
    "51X17w8gn5dN4C4eXycWFzHKnA4rPFER2cYre67z3x4wdCzM5WSEqZ48zXvFE5Wt72CrxH5RudbPpecF6RcyvwJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ecRotLUXdek9bMLj4yN4dLah5z9PGHR5vKpzSdbELBpoKzWLbV8SuQugKg1mW6bU9TKAgrx5MxHGtMef5hDgUKu",
  "key1": "3hM2pzFxTZoUGp21kb1rTfZHXD5M4n5ZHUsfQvtccyGqEwnFKrG6u985iE3qNWGEi9q7a6PyE2MmS1Nx1N7NRNFe",
  "key2": "rwzAedurAxcpvXKN1DwedZh6e6LXBxJ9hpsyP9sXAD9aVBR3G6MxZrEVEHp5HK158DUnD4EP4iiLbTDjZ89F8Vp",
  "key3": "3WYbXEeq86VEFgDa6B2txzFmLMjMfMJSdkhKLe6jhPZQNKgAJqRpNEDfunPFKqAdS7w1DKDak663G7qofFXkjnLV",
  "key4": "rmLCwQea7oSyPkCWdnt1Ga4wdkfMKo5RdphK2bPRXboEFU1j6zYuL3dgsEiaMJpMvwdKVvmSEgAEcsQJedGSEt6",
  "key5": "5rKQtPqjE4G8N4qZwN1HYkAVf5ZsKBQXUB19iGeCTC34FgQoHdbukzJv74y1LM22hbc6xms5kE2BcL731Fpn9bse",
  "key6": "5Uhn26rC9JmZCr4idU2SKJB2yYfJaZeYipYKbCYz9bHTMH1doS4f6AQc8F3ZjJoexvFpsjPZEWQqkFzttNCz2E75",
  "key7": "3bgqca4P2eXNqnNJr3KNkR4y47tJ16vTm66izkG2KKYEbDH6RkJ6NZQTGkJCkWynAuBUpU6fxEAs7Z4tSp7BzgS2",
  "key8": "29CLcRupicCV9Pp5VaYox755fihJcL9MaQ6vzej21qASxt4w72drBTAwu9oQ9FCgkSZP6Hfnzig9QGuZq4YpeeqD",
  "key9": "4wV1AQKyaprzmX8sgnPNRXH1YnTBQGC2SipBMx79koEXWbqczRPD3n2SkqAhtCYNAadZDEgnDYYyDhBjCMoHXTKM",
  "key10": "2HNYfWBkKbqf37mPG3tk9SrEbbQ6UaWqEsjpuvjQTCz53f6LFXqUiUupMbxesM3mAAbg1TtfeT2JGYK1PwAaqgc8",
  "key11": "5umSoLnGAyVhgc5VSrozTCmZCcQnXcJKhyNgicJQDLXoWbkXivCpjzd5aAbKmsdF8vch2pZ6ztCs12JBPEZMTZft",
  "key12": "5K27qn4HfZBdf3LzDVUz1GHRiqt8ahns4ePqjNBWDfgJQ9nJyn5sGfZZzys8GpETdLhLefwveAjXWzqZEF6KLhqk",
  "key13": "5a6ArQtX13KDsjLu1sPVTMdpbVkgwg1wDsace6QZNeNw6aAnxLuoJeyKgpLonBQEcyvsaxrcYRWETdmWdobEvVAT",
  "key14": "46QCuBBnE2WWMQvcypLHvQM9DWTgwwhsgWSvzBgNuuuon4k7MHbt9FsJTqV4FRNLH7mhUkUgwvPLEjWsNp9PBfbF",
  "key15": "5mXirCoMmxr9pbHVCFgs7B6A1ujLnEZAAGgcn9dxzCGfmMgxjiwMjikNt4hkctX14DLdZQdDj2v5eFDetMPtVySw",
  "key16": "may1CxwJkTHVzrPu9zfq2ZpCKk3gYKZp3iwPWFsRPFpE7oXc8wjNeQTVLSYb5ghUya9rNCLEp7EkYxBLuur5tjd",
  "key17": "33CX77V6NmD7h563ERFAv3MfAfQztS4HTYSqKqh3RwLeatPu1BTc9URi6JH8py5c3Ri3ieBGXfBvZSx3nwoUAW9M",
  "key18": "5CzqK48kk3S9rtQ1HFYWi8ofc79ewURcnkeuGG58gFrYv82r37m6taEGcQYsuUgZZ2bJK3WHwvW9pe4DLRSTXsY",
  "key19": "4qAfShmLbYmVhnAeJW5PB1n284vKSAagZB32JRKYrGYtUQgeDRbsuUGYRisQKwMmCGT1XowNuzctTqHS558DBsLG",
  "key20": "2CBExFz9qEahobCcUFuBw5WGHsQ7XLxBvjde5mFrFfmYf2nxjj7zxuTCgHagdAmhpe4YWti8uq9gKFXzrSXqPFqF",
  "key21": "2ne7YFWs77bSYFyWjzxLJk3aHtQfH5uTRHMSELRYiR58XNfgGyJNLjoQndfX96Vvjc9VWYLyHzNRza5oiLnLAKGA",
  "key22": "2FXaZDen9NrKcP1wzPKrASPWxmSE2puAhUXwDL2UBpfGd6tdSGir11C2Zq5iTt2zaGcJr3kcd73itM6tP5tx9n8F",
  "key23": "3TMqihk4zwyVeH32RSG182B6o66weWLBe9sbrrCPJf3y9v3m89Z7DszsHVCuSkasGUHSWx5jBCYqvKGHqioP1ZyR",
  "key24": "2n6bddnLKKfbS5u5mp1dJdTJ8P4SBwEMmBjZcF5ncEHNuCjGxFVtzF9SbsEBqBAZEDhk9aSSVAYcj3wA8qbQDjgc",
  "key25": "47EYSy1MySCVPqwsbGyDpEripxXAjzqoZPpXjMwDQEJcE67nfQeij7YSu3fM98aoZyiUZhUweFF6c35JuzyDW89X",
  "key26": "2Lmg7WPXfhSf8i7XDTXQZtQxJ9jr7pD7hofvFmwavc7TAef4F93NTEVABmPRhUE5TQbn7m6obzmq8hFHaxXtbYL8",
  "key27": "31y56qMEj4TZLzesj8S6oqtLePhHDeKS6NGrBcJKUaQcAQgeNARjUK1FFf2UCgZHK6mcY3V7M6ugp6LaV2UGF7qn",
  "key28": "VaxBZ5Ypr2kbMpCiTpfECDMRqNbbmyWrM4KP7Hu7L7EhCvCBH4p31iXLuGWMG4uZKXhU45XXxALt4nWN1FsMU7q",
  "key29": "3EGEyHy3pQUTAVAdmAUWFRuuUGVpSNnEaixYfaCfd8AK1t5sVk3pm9Ug1Um2PHufSRAgS6bWKW8JpZwmey8ttkZm",
  "key30": "3XjbU3VR8Q2vuCV6WwqsKPqYBHDPEsadkt1qYDDyFKQMRncnMSSK3ERYrgvTwSd2crgjse6ub68kiFVmLqXJ3voh",
  "key31": "5evBqAuy2mALj5x1dgmB1QhPAXz2Sk8Tt3ReDDP6CCRv2HCmjVsvWHAVhDizfa6wphJGZc5Q8e5PVVeAjx2AYJRL",
  "key32": "5tr6jj1Z2RMeFd9Tc9Vi89vjbtwLPDRHgqX3FRKvXPUQ5KwWNpsCPGMJwEn2679dGqc6cctyTTHeVpLtzNfStm2j",
  "key33": "2XQpZ4evtD1LuQpGTfsrHAkvKDdaoi5CBUPMkBkUfCYwN5e88rd5Uj3PeYraa2D4H2UTB56SE23iVePJAKsKmZEP",
  "key34": "24yWjswP1YoQQ93LfpNaPLA9MAj9YZU7AqDbPJtR9MjAQx23M6KSunFQq2p369YTz7drtWXJ4tkuSkbPGovWUBNo",
  "key35": "5poGx5GAcDzKAwPz6Ty2BwG7DHSt9Rs5p53kkFfzypr4diYvvbNRnp1RLrGetdnUt9oHsxfAWaeEZHVX8cTBbu64",
  "key36": "5YNJ88Sn8ZHHVCFoXaDv6RBrbScjWzLgpFqpeTHWhe7gu9hkCNtpbU4W7rt7fBntAfmWcpiqykX2rYpPuf5e5JU5",
  "key37": "21SDA7yhyBeRAUtjjka2Zom5rPDxL8zoBeEaZ7xsGVQBYfMkk9J5dyijfYwNEBbvZBH869aJWCHGbUxD22ZC1fhP",
  "key38": "4y3xXoV3H6mG9XberLAqU2Gp9oiQHcpgco2Ykz5H4Vn8FuHUAaYW743sh3Y6rmCkCXwrhfY1GNdFYStMc17ZrnQk",
  "key39": "WQXpbQMWiJS1BR72JhhdXUsstEBny3vmsMkp1tkka33zLhnr8VQrZKAvgTc96ieA8jNhWRfwkNpqvKhixVJQMMq",
  "key40": "7o47btSa5zxaztX5qNRxNmKBiT85twMX3Bpt2vshroLBpvb8QeDL9j9NS1Gje9fPpc2DPDoGspu34L89h34ArG2",
  "key41": "nPgCZpt4GeuhtUPjraxd45A8rGhZYkhknDWvWVroSBruKZaKXVyoS7HCxkRxgJVo4mbs2aQdmbHVUzVoqKfoKd6",
  "key42": "3ZBHwQb1nanFRL3RjVdH1EVHTHk2EEx5LNRGnrfNrz7GrEeAhDiUTswJ56GddzMH8uJCZixWkdh8VNn6vaNmKvju",
  "key43": "47xxNZpVkzkVSrfwqnXuiwQEKXMzJpS3M8k75P7Ep7rSvKK9JUGoqhvMzwTpy7Xm1EysbKEmG74bhBwsftYwri2o",
  "key44": "41SpjXZ7Hmu91ejLyTr8zZiTtUUvwke3zrwJGYhJ6BWjNcDLxrRRhQVgH5fQfUCUhrSYfiEuDPbXNSkpbnSpPcxc"
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
