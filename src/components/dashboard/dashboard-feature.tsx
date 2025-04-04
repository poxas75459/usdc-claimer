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
    "4nWufRY2KbEUA7JXsQLBCHz1jvbmWxRf3SedqCkC2tyNFo6A9pwZU4tjyUDJdnbBpZj9wn73G37KuHHprP8MkAhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VG6xU5UFfVUXfH5cXbKwEt1Fq9iJu7C2fJjsKb9y4C9GPMBq1AhrtJiEWHwprBmvu8LysbR3UWA64sv9piq62",
  "key1": "aemtE5Eq5kPA18j3VoDSuLWTmmREaXmEwFHR1P1R9wpKuE9aCQ2Mrjf5ZbPZoNxRJZvWkdkmSE9pr9kSDYAv57M",
  "key2": "41VCaYv8gUqNy5vRTH5r4g92UaEXYQ5yGuWhHx1RDHGmbV6dwdGZrYdnL1d2N3p4ix6dULhShWhLJcRo4Ez4ShKP",
  "key3": "2m8o524n2G1aLui2dXsbyaZeNZEcLg7Sn3xwVxF52CHiD9VKHxSEcZeNPPkysePLduiTt9wSUVH7AyeKrDMgd1XF",
  "key4": "2UdAxrDrgeKgXMDREbdpqSuJp9KL51CXWLcMMsjJ2Wy9uE6rzv73s5i2jrJF4RRXTa3UKTaNrVf3tcUKhroR9r9e",
  "key5": "5XFXj39f6wTJpmPqVCj4piuWgiT4cscnrb3waAtWJ2C63q3xJiVwfhacR1CLd6GmZcDWdj8pUucYoYr5o35sZrWw",
  "key6": "3mE29NkfgEA8u1fsiK9ALuBGkT6MKXLhsviYszPS1zsxTnkauWyjw2Pi1CUcPHwovfk18KmyYb2T9rSGXze9wdi3",
  "key7": "5r9kuNsUsrL5SmQT6uY7viWS2BrEyhi3cxA4SZZaBrTsHiBndzzU2odpFYkc3drvpAkkeZHxP85RyeKrHZAXQXoL",
  "key8": "3rXMp7yzKYosVJQYRxi4s8kTmwT93X6j9mmRV2DyCFBETqXegDB1omgQWQbPDZdAyhuwi8BicDr74SiPYMhfSdC6",
  "key9": "5iMAuCBAKM3BuVaUSyvFbSgZV3U34m3S7aAeJFLCeD4aAf97cduK7eAqyEQU2PYgsXTo375trKZBF8rLeCMdeyrB",
  "key10": "421GyGpBpBusmRpWWzRQSzHBBLctTetGALdZrj6C9KYe7Ng8yE2V4LChhgvLa7jwzpmGUa3Q6qzeQ7NfdeqEDZHA",
  "key11": "514d7CCruRQ7eeAhjZpshdQB9gbQ8oYATLVUHUdyT1sXQqr9XtMVkJLJ6H4a3tdYKXpdaPGsx4wxiAB2EqXZqASB",
  "key12": "4wyezwx6G9yGTGAFqFTpc1vzEuioho64ZojjkoD9LzErY35sGWE7rzDPHkwQ1uUnkcr9BTujyHtWQPBDbmWeeJ8R",
  "key13": "eS6ap6D7V22G9YBhg7pRnRVmvVYRGPg5u5H4vzZhd3v2MbKvvicjb9LLGthRL9YDzpEGp91MjwpJ5xNGehVJMpt",
  "key14": "4u2eTUXfMFUVvRb22Fe6b7vJWLGL6RKptMSwXqNAL4pKnJR6bPnLN7nCMdVLKTJCkebJe2P2mWpbedKjm9Y1UrB3",
  "key15": "24nvnCd3VnoXEPvXm8ri34bMTejJaEk4w8kJH75vpMXYJkshD9zThL2KieNfdw8pJs7FdCBXuK9PPPvmUVYKtaL3",
  "key16": "44zAJ9P8iPrJdN4uKwriNw63fSxkch1cjKNBVdHUsEQWQNb6zqgTVNxr8PP2e6WTKX6gfhwkWN4sVcv9NGgPsyJS",
  "key17": "3ZnM554nL7crzufoRAugy9T5PStps34i2CByH9TbdRWVabH49wECEwELpdr5vWRAVcLmyZZEgZneEktDNEKArni2",
  "key18": "6javqAY3cNhrjefMPn6wjkFwRjTBHEwgCcuimZKvhF77d7RPr7CYw36JGoGXzyZK1ywp1QU5EyHHfo6Q83UAsN5",
  "key19": "5AMCWTSLaVQtTuvMd6Ln5ceQBUUnGPwb1U2uatErP7qecqgN6NB4Gb4QYFPWk5YkbTfAWrdUGemRc3EN4D4KCCCJ",
  "key20": "43wPGt5FZUY5HPmiHnisJeo5ZNkujA7mQKT4koMJppBsAktkRDzG4Tm9ksGmN88qmZJgAd7FeZStPqFenx8Bqx7e",
  "key21": "4AmTbMsAQxyf78dbF6GpDMDxxa2ztQVEXCPYyhowB2VVGsuoVNZRj4jAUxUA6awSMz8DWYk4TNMCv5jYqvpm35ti",
  "key22": "4FkQmykAX8PGYU3LbHJiekLuri9zFtgjiz7S6NDFx46tXxt7DkHX9m51NFzuVBbbAw8Uxp3RLeZBF19vHG6decXL",
  "key23": "3sHu9TJjBcUSn7F5SqYKts6byMkFzR7LBhY357qNU1PCQK76Qk9PczRztEz4u4xwRhctjhtTwNpUozYdTRQVNEqF",
  "key24": "35pPBxBmHEVbect4WYQgV6XxQPWGmdxYZgbmBFRBCCJk6aVrW6x2RiqhAq42RSdgyGXZdqFcht5mM1dJurG5CcKf",
  "key25": "2USgKFzpx72DAaB6h9VyFzv6mnbCS3hq4wL48kGtaGENU1yjdZ3Pqyyz8krWSvdtm8zsHXwS54VuaVkrh2XEfXQ1",
  "key26": "SpKMomsuNP3CG91xxfdAT1RJ3jp1bChVZmBKMAKkSwXFtP3q11BcyMNVf4HhDvyqbwCNtmX2fCwdhC61e2Rcm3U",
  "key27": "cyCMkQ7SRNbPsaFun7bopdpt4E23s85V2oMTj48EsG2nZjieSYfvRgVaNpjfJRz6AB6Jn7ZB8FycvVqwyFvtGiV",
  "key28": "43xjRnD8GG3JExtBKPRLg1YLbMdMs1KcxdVQ7cJUwUNwpKC715mbAsk6BmB2wRGm5uS5S2c7MjDiwBG16A1ae3ky",
  "key29": "tJT8r8dJsRTTvdsFzBKAHWKgifdgV7CE6U3T4XPetxbp29wKCNQDCK1Ykq89PYyysdkN5fupzZprjf8VbhJjcVo",
  "key30": "5DNuotz4ocZxnU7uCAKDrHkVLAm661rn2Kr4Ms9WKqCkoNXFtCRS1CwWcPySW8BPCotqrnxSKT5nRFh4Ah3mG6xp",
  "key31": "WHxdWW61RXshgu2Fj5KMd85GQpvFJQtjtbf3t55MsVTCn3pmDLB6X8H2cNJMeD1HogS5GhGaiDaTSYzEBQoYN3A",
  "key32": "2u3Zt24naxp2FnczZVVtVGvukb4A7qrDkE9mh712QPdxgohrjSEkMRBdekHrysaVwqBnQexE5z7sYD3QaFv8hXLG",
  "key33": "23CBgnftxKVErGLTBcqj4fQntuQve6dXwwXo7nB5dvefV6jX6t2yWRUxwLcUUiAyYPjhwH5k9tJ2zgsHzcjurSjF",
  "key34": "3e7VGj7fpxyiW7vFXHmhyt1AzryzwHbW4xmcTEFfMmJ47SRVAUyyL5UGse17wfVpjokyUfnPUYDCdyGQzFqnsAfG",
  "key35": "4rXCRtZfxHna7486MveFrxFe2BucDwReU494SUJX523eYRKeHspvYj7dVigMfgZvreVwohNDRzN67j4ghjCUBi54",
  "key36": "3nthbBADpFwZkvP4Lx2KE1PB716pcG1xQtPRbCTkWDHEqu7MoGFQe3HAPmzGnDRHveP72A32wAnMfPMGRpVyYA6x",
  "key37": "5UqDiehimLkCQjeNfKbHDJ863abWS342gJvQJ7n1KUejEzyWvBaQ58CJDdutmazrRToZMeKQd5YRirHgtFGUuCuB"
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
