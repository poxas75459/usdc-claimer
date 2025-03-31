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
    "54qHnqGHBefoGeryyCckNLznGwY4dTk76nNREsividxcByhHL2uzmHs5xyN7EmMwf5uJh3kkY7Tgp2Yskt8MviYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PcbvrYP9QKELbyYFoU4e5DGU65Z2o2q2W7d3RG2wgdpmzX3iqxryx6YWegRtEHkxY8HgUA18xxEdqhJbh3gAVjL",
  "key1": "53EykGhcNhmqMfRZBaRtRa4WatCTgYxZ9rk45VGyQZPkdz55abXj6PkKRZcsr8eEC2KwQMgFZxNAw6R6X4KZHLZn",
  "key2": "638ZM2BqXU3VvYiqhLvzupwLqLURgbLE4SgePuMoCKenp4zee5t799M3HHQKVNnLs9TNd48fQMvShjykKZJDmzeb",
  "key3": "5ENazRsejAEBVRN1Vp6zBb5xcKSTBiuq9K4p3o95yhsZeE8HQUxqtqxaf1qwTqFuXXwVUT3nw1pC1LkbC8k1FWxP",
  "key4": "4MuoEG1VkApWzr3MkQyFfRfdSNuVHoaWFCfWxkZ7n9aULTJtXTCMRGAZhsjGwNsJyTWGeQA3UzqPWAREcrwSrwKX",
  "key5": "6TJh4f9NBmW1ZXGx7CT7BXgmMHfbYUKNqrjcoLT2GqMBXMuZaLp84owXAH8n9WhSLxttM8QUougnKynfptVtje8",
  "key6": "3FRWk7WAyJtHNgSvcZmmkASXZwVPdMD7iFZGxzA8GuYRFHDWi2oH5cGFHdN4Azk8C8daxENzm32gBB9EJxyvFpFw",
  "key7": "5XBuTfp4YM2vrjBSKK2qGv2tN5YsnJ4zC6YkCYkcArQ28MkYkKcfXg9Q7a8A44t4osfGMvwHLb7vLTZkMDTsJWAn",
  "key8": "MTFkrg47R22McTm5DtWGqevwkuBsBEE8Z9yDgfrQtAF3G3SFX6enkrjoMGU49q9bTs2jXcAAHLBLYneRQTrzVmq",
  "key9": "26RFD2D2XNkfV5jV17bihh1cAmJEvPVXCNhHau8WLoyk8GAvhcMpgNfSFzdYWFoLMiF2BsWCGaowohwj1zQQgTud",
  "key10": "2t9cRXqspbdFjxQc5cb9Vkxwy7NdGwSgNhybC94Xo4PAVzucHa5tUdUfUrarSca9w6FpxENgTGQd3WmMz1en2bUY",
  "key11": "4aw68ZYGcAPptepTrvmySxACxyAse7quejPVNHyCG2rMtqbEiPEd8wmjh7pg7J74qxuwSNZ4HYqr8VSXEvPy2C8q",
  "key12": "3yrhAkJpw2RAYfmJACu3s1Hc7Z3dZewbQ6sZwg7fjDMuLNHEHp8LvcnXEiucWnFhdqiJ6xx4jAQ9PbTD6kwHfjig",
  "key13": "36aTB3DqSkcbrg1cnQicPe5HYwcHfoDJqTHpGPUbK8o5ac3JFhBZvWAXCb7gVJ5p4z5jGtHyaCKM2AnnxNEkanqh",
  "key14": "5G6rWmHmBZJR4pTnBZnChUbpjaxGsBTyVJn5V6t3UX2KJaCqQceYigwU9RExB5VQ9uxudhe1fFszyYAoTZfTdHRB",
  "key15": "5Pt1E2r5kFfjgpkRa7H3qA5nPeK8Q4DYJfc8i55MPAEc8d7MSYHJyDGGYUcpGixQBdFpMHCvkc4B6Wn4RSdu5C7Z",
  "key16": "4tZ8FZoeP1qHRfnWQxjeMofSzYY961W3FxpJzPcSpoBu9spRCS3XynnQL4Fzjr4debamvKE8W1b5aUZdd7SWtS8B",
  "key17": "4cM7mqPXjGvWJ2ADAgNuYTiwgmg2bHXYqQTSvPHfikNru2nt2saZ8fEXUgXNvhR7rAAVo2Ffkyb7ooTXerJ5RR99",
  "key18": "2SRpMWMH4LB6cTLUvmvJhf1cFYmitDRtLADAXMwVM5uNesJK5qurbtn7y7buxLJgJdRhPpSjH5muChB79Mm1ch4m",
  "key19": "2nd8ifrriVjho9AYx9TTaDd3aMkzWptST3Ewjiupue1XrXvzJD7gcd4ADcVJyTWjFQC56K1ma3MTJ4i2BwQnarDz",
  "key20": "5FX4qYLLHma31FhFahKko1ryLpbBoYN3JMQ1pyJc6Nm8niWSLHySr1xGFCmh4JRtbt2RiA9XgvRxBcFJ5bcAShgm",
  "key21": "2Jfdapzu6E2FcQafULXDbzV5S43YPytLGdFZMbAkfuvqcWVxMMNFQL1X6XToWqvzpwK9gAfAN4PSnAQwswDtNaHi",
  "key22": "22xU5wBZGaZi79TqzmYC7bfzVh1gEHnzNCCKMkXhdF8HaCL1yyBtZRBCj2cTmcDUQ7QTNbnsuTn2nRCpVb7gbrQK",
  "key23": "5KV6SsZu8zDgzJtqB4Wyp7FmWb7CWorqLE9hBskvXawXJFbChtqCk35HQyR8JZvnXpA1rwrcrKJmym56tmhgJY8Y",
  "key24": "cpvG8kxiZwR4U6CFWFmVZyc2T4K7bTaUdxZ9J3f6e9hLkpp9x3HbPfHeb93dXL7HtF6W7VGyVdcLsHVH3uzGr7o",
  "key25": "gg5MxnjJUbBQRcz818mmo4MNfepQ7FQXCHZiv3HErfNiJE381yVz4DxawLKWT6Xy2cWHYLjehVRJ8bsa6rAfz56",
  "key26": "42k1CGPNcEc2mjfJyqCZhRSzW5AiPFQLg3LccAeeSBsJ9oZQ3qaL4YMy7m9Ci3N7wnNCJZAH6ZqdWpb1EuoHny5f",
  "key27": "4NJsxnctR9b7yYQfsskekztdTXvGG2a4RE8XqkoyVxaDqVH5Tk95RnU2jjV2VEXEp4PcrFLq3TK6riyxD7UHaUm5",
  "key28": "4PwKscQ2tH2fY2pCzmX3JJfvASCDxoqT99ZJHeGk6E1wuzezBgwZ5wUdWNqx99CjVn4bZj8DHkZw2NYx8rix5h6z"
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
