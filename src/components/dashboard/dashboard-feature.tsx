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
    "4F1aTF1XJaBvHYaKNznjkGt14d3no7FsopYEbLLnHH7v6rFvJBmHFz8TtsrSnVwAuWjYvgABaf93pxURedV9BVEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCTTpUExYXpyLPNzUTiW6c91RihKRrAKhTwWZVs2v5rzxMVVwR8n2Z9QjsHGF7wrC3enoGK4AUSZzaVxE5idQEc",
  "key1": "4dJ7ETjFKERrZ9hkAFqckfjz6QQ1Ur3RHp2Xkghnf6kfMd1S7QzQMJv3s1tXHoc1rqS7jj52strCxzna4RoyPtEc",
  "key2": "PZWM4fs4xNXzftnsm39oLjUYGui9MbdHvYtUbc9TgpZboAJyQq23RpYm5AhYA3ULV58WkJqShwoN6QjSTUUReKv",
  "key3": "3A9pBSPwds7JxfXTh5uvo8MTSrFjnT8aK9fyN3H73L3JauwCtEHzkr95bykg4Ee8cv3jTqDesmhp6eYUfW2V4FuC",
  "key4": "4VPNTmc1aA6EjKx5qypMAkgxivLGmqLmuy1tuXrgGHaLHh6zSuBkHcaHG39JaCsvmo27FP6xdnore1ggijvK1Xfw",
  "key5": "uWx4Tse9HGe12o3M8juRF2rJEdJKs7PfMQBueFNPZ9ttdFnsUHQqEu3PX3EnfKkZkJGG8BPJ71bGpgoNrFP9Qjs",
  "key6": "4dC4PTrTPZzPJQK7nFxHYJpuMb61bgSgFooUTvWxxUKDaQc6mpDzFZZNZSUoNPKQ1jViPaGjptDBykdobWJ4UaqD",
  "key7": "3Up3J6vTSfRKsscfCkvFyrvEBmBuZWFq14SuGqUiHQz1a4bLm5bKdBngtkFynQbyWdB195n73YF6MKGjgQGon4FG",
  "key8": "2cTqdzaB7tCcUtuDPkXavdsDQcBqVYXAxwuHhkE89r8nqob7wgnvDkM43zzvwSoQMyqtJ39WxnLKrAXTuo9YXtCM",
  "key9": "5cmKEjJdURBz2tReEPUKdM7JWWANwi7yVfAE4X9foMs9oJXX8tY9xCEsWm8edSHRNFyEpTwUmRQ3hKDiLVkKScqh",
  "key10": "676vGN1HwrX1gjGXQ5JqNKXXNqMFHXcBErpohAKHhZK13mnpfZqbXiyh6H4SyE7DE6XpMZF68BcJTRFcJefmQFkD",
  "key11": "64aPY5kTGgf9dJEyAfLwR5p7RaDZ5rW5L3rucsk9NATcpsfguM3J1zknUJNwQtroSbTV2DzP6AdC5KMQsDi2zkxz",
  "key12": "2z5MR9KHNJFyZQEqot2uPGhKEU7TUppWLYczZ7Ljep8RvychoiJbAZdK5YXqgZZ1zDpK2sqSszLGaaYoaoou1L7k",
  "key13": "4doXMLtF6S8qYibPosejyqRN42djjtP5bg24i4nxk53zvd8qNMFhCrLaZFW8UvmZZDefhfUcvqpUB3apYnfkTA7s",
  "key14": "3auA7KwcMKffmo3DjKUeHbeFfnuvDfsaV3QpBfpY1RjhZw7YMsjvkWNaw7QHwzCQuQyUNrAmEaYqRj66RcUacuEf",
  "key15": "4Gm1seYT4bKRfinvZaJdEvRcMZtNsgU3uxmM57yB15WXi9mGtUJsn9Kh9f9FuPKLgzt5MHjHAZFoaQCs8eHsDxk2",
  "key16": "3Tc4L3yQQCMUc4QupThSjUXL2ZreDnW9Q9gzWCsa995hzjx9cQEM8uRcFe4jb1ydHbH1nFGee6KT2uS4m1qDPttP",
  "key17": "22vcNBiBnRcEuSEedcR1qQnxbFghzdw8we6v7y3d3TFRBhsVEw7qpqoLBj4hqT6W8gCyL1Rx1pcgeKXTutnVB6BX",
  "key18": "5PBdqyeL24MVuJNU1dK9b8DuZ1NVbg4K3TvM8gwvoHqKMDuiCiMoUTooamE5WEYJAiDY5ThYSMrfN4Xq3qzFFZnP",
  "key19": "4wtC6suNciXiV8CjBFBPZunNbnMgpfW9o3fPf46MC4yijtpHXGp8LdFPSTKAQc9JgDGstfFd4tZuT9hZV4pWXwaT",
  "key20": "2eHiYUyN811Kq3MKEEN2swQuX131ziJzC8NWq34nJTcp5ZT5kqdCTPL7G59P4yPVvG4egKpRVhvBbBPCWp6vDrLr",
  "key21": "K3Mgot1JJrRrxZ9vsBoHWYMC6EkpA6frcSEvq4XGdt2Xi283WYoZQPDHwVqjpP4vjrPb6aaMW6Hqerzse4jMji6",
  "key22": "5LG9wvdXXZJ86vrA2yLpKcA3v711Ni6dZR4w9WKMSBZgMphfmVQEVcoqfQXMrmLqHfZD5ogNfNQ15CigSY7drn9D",
  "key23": "2Fs4pb1fQ9uX99zacKek1KEv3L4UnWNjLtC65eUjbt76KzcuXD7mTfW57rfZNkNTXYwhm6y34cEu1LFCRUwCifCM",
  "key24": "KdzCWqYUdzkaonsNjGCHk1e3CzBjEEkGB8gfBJxKBqfU4uhZgmrreyfDkDK8sK1kZbAbMeSDToyixagELwCVDDW",
  "key25": "4RmVAB4NBf3CXB9cyxXn4Rwhiv7yYPwnCcKxfHDvTE53JDsGPEdPvbRcQT5XQCEP8sYNbsTeH2pm1HhUwxW9fgoN",
  "key26": "5hxf6AguuNRg3Upr8egHkk5EtL7817RKNBkoSszGQQigcZ2RY3rnCaXoB1VrQzYiy9isL3TPSRCVt9p3b16cxc7e",
  "key27": "4yNL36JRyeBCkrqARJqZsnJULQ1g2xyrmDTLCfTKru6M3EsbLHTXqsrL7UAaj78n4QTyui5yBJY6ZDNvASYCuXe3",
  "key28": "2H7wpp6dDaCFh225an2nGxLSWMsX6gxpK5tEVHkpJi17H6xTRFZayGHqkEPtGhMLMxJdTqrCgxm9uusNacJ2AwES",
  "key29": "4HeijM1zGWcdxKNC8WCVAYVjF5sbUkZqdJmstzZN5DTT9JGzBFw5JdbPDBZ8gTkMkd24kf2JRjKnhZXZuLunmn5k",
  "key30": "2XZJuEPSHFN4zcp6jtpGUJwMrpaJBj5PxtVkDd4oeQmcYCygsgjed3MpjWNhLrD8rE3WVZ15Q7Zo5gaHD1riSiWM",
  "key31": "5F51jMdS9V9gvhTkT7jRRvzy7tyqGHUUPhFzZ4Gvf4qxm7HzKgDwMcQQPCZWpK7vtrDyRJZjpzb8MsZp38U7dCPZ",
  "key32": "4mNrUD22GM9vfXMyS8XiLipzq3rPs38GsPrvU2st4CarFir8HXtaoYqBRu9kNraxyvY4PucEJLbRfqMVjit76Pf3",
  "key33": "5Zq19WXUZaowsmBzizeEjURqd7Je8jCrbfJFEHfjYZMfVTGT1FtrhRSMRmD1VBEitDeN5BosAzzGw6EwaAxKh4fH",
  "key34": "5DhhXCq84XoEgAP8QijCnBWZrvvnmtAj94Uzva6JETd6Mqtg3R9pykToHeNPwdixfR9tQ7f997LVMRpXJZjNbjYF",
  "key35": "2pJXiv49td1uMq7WPxBZbmp3JYXehV3JRQdbAYQQh41CKAyCnzZBwZVU4U9cv6sWUTAGzjodffKHmVvn2kMET5Xm",
  "key36": "4sfr78XsQD4gSGXwcVvJywp1zVsS5UgLEnb8fdc9YGzP2N3CrfssWUSgyCpNAQQGrf5E7GRG5VnnzDm7R9SRhMqD",
  "key37": "51Zk5L3k7yEs4vCP7zigeiwHwDF1jCxJ1BKW2k9eLjSAc8X1e5hraDdD1MsjU8rNuhPuZEhJrp581tTZJjcQ8vA",
  "key38": "3Pn3crT4fUfVZV6AStk1WfTqKCGKiCweswezDJdvoMQM5oxH63qnhVAPRFb7yVALyKU5QMbKuKxgkWVAFgHp58y8",
  "key39": "fKF8o3LNbwX6yDzQ9fyVZrw2wdCA6KNFN5jjTY5fNmAcCxZbr59Ep2h1g5hrZqEFwwNctk5F6iR5TjnypDZZugA",
  "key40": "5396rjGPPu8dA9Ls89UxukT6v7GDDk123mbcBvc93P4iFTsVXLTfMBCp3mVMh2CvsBVZjowWT5C9hhBinyP6Cfdz",
  "key41": "45HU4pU2gYBAnsnbqGahDCtZaz5fzKuLMxxFMpmjNJTHMu9rMstQJxTL9npVictRxda3F8z8JKAL7nxcBWyEEomQ",
  "key42": "5w4euYyTY56ZitgJZ1v7HJvBff9xG74ceWyaiMj4ZWpKsMAFQtGET8hqVffnJ5Xt7QdqDfur4F1KBrezKeftoKTp"
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
