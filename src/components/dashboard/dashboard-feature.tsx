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
    "4tmXXa7RssPtPhGCvC2XpG2ejAoN4PDPiQPsngTq9KrH9VwwxaUYMZYhU6ypmhufqqSx4rcJzQaRMdBD1qWjHkJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJ9MnwgETr9Xi1UG8WtrisB3wMpGYJ655LtTieGSbZvEvLtgibp3hvRRyG1vKv3Zc1pavFNeehVrGV469fDEt6N",
  "key1": "3dfSpSyjwW92oJft2FtKYErrrcVJ9iuvus3RJwzSxbCnm3YnbnUFiGDMDZJF8iRvbskkt3vHokZj7htsKVPWvqfw",
  "key2": "5gkjemV8LJjb4Q2T3xLjQ6PAQtytfTFnXUGxNYnUvjHKPr1ivTXH3KLvckXLzj8KBaWy7LoXCnKMSCwjYjKGoRa7",
  "key3": "e31fkahdXNrYLxZzJsVLdwVHyGJGpmspqRcpoKww9NxWG7kFFa6QvewtTfoSTVGmbMqzUMr8FfAu4oLiqLQr1Kp",
  "key4": "4QY2LZruanoL4pzBwMeN2FcTDt216Z5ZLR8kcHhmgRacYMSLaU97HiFnGM4KuG5Ys1TqfPoAY2CriePVQpnCRfQp",
  "key5": "24hmGPNQNPHWA48yJBsfd37ou2B3G1TaLZt1C4SP9QH7ptfC3tKixUALrH2ESbYC9u5eVeAWJe6xWkgPXXykzPkd",
  "key6": "zVLigWtayG6pM3m7aihYS3KXoDUv57TkDXgqmuYbFpk1QxewnDCxSXEHuqjFTYxQT482PkujPMvNY78i2FzWfA4",
  "key7": "63uaAd74WNSbdkMmSoRKdLU83TXYGLGQJdSCjnXHejVLfeZ7E1W9X68gofp6rQrwggR7QP4o3Qo6LYF7U838iSRk",
  "key8": "3yTJqrhNfbwshUzYXyVbuD2cZpEPdFXo9f8EaMWVy4j6NayuqPyd7yfgZ9oqqv7XGRTKrqNmPecqGVBV6DLwHEnc",
  "key9": "4xdo2qd9prLgPUdqk7mJw7fvNANdFcmhwNz2dHqkVkVUUrt15WJ7SH7Q4JZAKzvRskKYWXkt4gBE5Xcjsrgidxmw",
  "key10": "3fX6QHrdsLfDmQ9fuWKASpqpiRW28sm7CGz1YJqN9RfwuUx7MyBreBxZXxNP7QDWETF7bQQEqMvaCHrVpGRbdeNT",
  "key11": "55cxk7DeG59Xv4WuxgWkN9PbZ7zpAgx9jTNCqQoQucisKZXrGzaAfaJWLWCfTCp8H77mWNnQRvSKfgiD1c25BBzi",
  "key12": "2kQhG8YxTUjTz17obkhoeMGjM9P7XRe3unHCnZhyi1bP3Mmn8UAxSxALkHiZncJq1dBKqbJyZR6cmQCvQRygQjR7",
  "key13": "2xiFsazRGWqP3quQzQgg5rLPT1MaG6eMNekv7rxpy3fipQ2NPbdSnk8FSuAukd3e8t556QX7ueK7aGhiDRGTqAee",
  "key14": "5BtHjjaUPd3uWsaJ7ci2MXpbLnfuq3FU4CvqcfMePTFxmdXGv52irU5v9cwocnxzs9eoxqi5CU81wDH7eddkRNmN",
  "key15": "5qTpxejeNvkpcXMFsHCE9x6gCTstatqo5B1ghkTjEpKxxAvyRtgVd2tMJanogKe6Gk5d1r4Mk25Fmk5XJSKKeUex",
  "key16": "3pmaMGnM59WkzdbHjondJL5dJeToRzZeM1VyhPpffp7z3BkqHTk9pEub2qeM4MJFaRf3yLDunFSV11vfdi7EmTXP",
  "key17": "49F4uvK6c4iYtEoucoV3FVSavmUGFmnyYvKgnYtR4SvFR15Ds5x7eAtemi9kthpxVvJs1X5ThsBDFecUwCSSQDqm",
  "key18": "7duB3E9wQyqXtXfKj1wTTbs4tj3RvfVCAPj3JCfZdkTNLKXAAF65wJ5H1PsytHYN4HLQxpwnju4NoWBe1jutUvR",
  "key19": "2kPEEBcm845NnRX1Dz6jjU1KHXYLH7GHJ3Q9FxTEf2MpWHeuBc2Bt67RcUrZR98Q35uMdtem4S14qpYWHjtZacbW",
  "key20": "243rh6bXzUSTRNoXSDdKkRdaBTXCHfHLTW8owj8fBSUtGvPyFrQfothjGVkEsbZVjaQiKmt4cAfZSQbfFXo6kzDu",
  "key21": "56Fq9JQkyHXR9vW2CRmnKGGte2afPCXks5e8727z4c1K9Z3SzDgtqeGk4VD9s7UkeYidpdRUxxcZhMRbrnEj4ypT",
  "key22": "4gB93k7Xx5gy7XrK89F9exfNizu1b8e1gcN31b5JGBP7y32G9VCf9KV4Vy3v31B4r2ZsmJffwcBTWu8jNKyqJcvW",
  "key23": "5a4nmno3Vqmwb7Pk3wRzZAEA4uwjk5Pcc7PPtTWCAATmrndTUeu3LkpDcdXwwjmoUtVh2DuLMYHd6abX5cy6Uzyp",
  "key24": "fxpC45uZw6mFKoPSsntfGLYN4j6N917xnFGgbmRM6WyvXuLJC71Wwjv4fib3wg5VAXgjGY9AijTiMvKkbJHvhsY",
  "key25": "4gbT9bzfxbwfoCniET2c3qpkMiaTxsDty8ScYs9CuixUU4x1dh6ZPHBadLm342dM7Rx9Tpz7yLDpvH5xQsMRmFA2",
  "key26": "HzS9taYWzHsa9gy14ZptWigvaZYMU9JLJRLk6VKj5Hn3q8vA65H8nSiVJHYubshCKyWzpMLxKx68Lmsv3h7wsMn",
  "key27": "JM6P15VsZSffFUQFkArWAYncCNK5ig7MjEy4JMmsnmWxubyWha1yog4JV6koeQHiATBiL86yLR22imVp8Bzw3F8",
  "key28": "5aqzJJdwAjX5wDWWS9oJWYNGCKU3KXA81tcH5MfgVL2F3YBL1kVs6RUo5rT4tFxQoT5FXdHtkfxm4jU8XLL2263Y",
  "key29": "WpCyQkHMc7g8qVG1KbvskaFD1sCG8gkGkePv3x8je1UQfhABDNYb4MnYP7u7cNx8qPwemaMQd3YayDRH1YFQgrM",
  "key30": "5q6P7eJFkpDpSfkZSmpccbL1ij6JDo7w76gbmW3P4JYJgEHPK8DzUtjreyHSuZnjv6yneiY6LLYp9ZYBdukrNAKr",
  "key31": "yf69EsyxsJEAZpyqyLxoNLfo5cdhStkrbkrinZNtRFj3LhUHQFXWBaPj2zVjp48McXLut3RLYiEK4W2RH1nyaYe",
  "key32": "2TfH4nEQgqADF7KTFHGHAfFBeCPAbkXeTSwiQ7SAME7YaDyYoqq6PqxvFQ9waqzjuPLjjx2rKcZbF8cYBEMNEM9L",
  "key33": "5Vq9bjT8KBv5CFveLkwAqqJdoSrrvovSMFygPtiPRtxPFmcC2DcV8ftf32Eva77HwGQ8RNzHKNG3CJJ3dJfpat4i",
  "key34": "56gAsv5MCgLGK8twppAKoSbyzGaMq7dy4S1sLScywMVq9oahjX9NYwLA49DCQdpPRRcXtPKRCoHwNYReLZhX32g9",
  "key35": "58AyMpRJ53rL7EfR3UvD9e38x4GoodTbco5ahRjKv6HzWXeeWQxyk2G4zgh7NiiotgGFAtZq74e1c2bZSjn26XuX",
  "key36": "4LLWe78XUUt8QrYu6UH3kNihDoY1djH9YgRkpjKgKGUaUqGNUXFnEL36F91D3B76p64UTNMPkbAZF3xrGLiAqnGq"
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
