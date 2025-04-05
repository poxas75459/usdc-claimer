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
    "2ZiduAVELKniVfr8VjWGkgnU755by5y6ryvcdQTecjg6bbdSSPeWsUEdNxp3ni5r6maGVs3wKJBfggMogMpjaMnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7znBkbCxxWi46s5TawNjvuNNxTAtAQyvh9X6f1XnDvavDG9G47Qq2Y4y1AmcUrmAi8B9XKndnq9pLNFTQE1LgV",
  "key1": "nNqXFNHAQyRVfWqU9ABbhPrNggcobZZEtKYpB5dXWfjnLW8wbXMJK8MehCDmqwizQVtXP6iLSfnfrEYspKEwbWW",
  "key2": "3gpGceJdTLzksA8t8zHuF1dZCPwm7rZWA6tq35KhdwbAzwV8Qh7Th8wRRH71nxyodxbgmuLa8pCiP1jrEg18X997",
  "key3": "3FZZFWX3HTKaCCFHLvopCtNHp2ZjX9X9GYa4epmNPMcBE1HpEPEkCLoW3zdnQA8aCvNJq99ZokaZXuPUneUrNi1i",
  "key4": "4YhKFNnYtR99o9tdCD8R5Ub2gQd4SQtwTfzmwqcDAsSfhPg287dkAPB1S3TpsnLbiFBxi4nVqKBCgfK47sm1iXpk",
  "key5": "4J1FRaqVudwaSxk2McWenyLvnrTXqGdeLS7zatVVt9vQVAGqCX9eT4hotFwSv3T4YncVXRCC2WN5EMguNrz3jXth",
  "key6": "3vCGJQZfZCSgGpG7DVmdwSNeBTc2EnAxS8bW1hRYuZCGm7oEkYdLpTFYWc8gKCSyEoPe6CsDTUCKAUeGyFWYWStD",
  "key7": "5cqp1YcibMZAgNTHdAwF6FgVz235mzUeG344E6MNy9sDgL176RPfH56zuaiDg9NT3TGyLBAAnEXgWnBtQT7v4d3S",
  "key8": "2okmZbzLgQoAqsqrJ6a16nJaQsZBsxXgPuusr8DgMVU3HWnZi9UA3sutetxGQHxxMtWMmgoPgiSgCNZctKE1oPQA",
  "key9": "3r1yQDwGNuN4q4uTGFQJG6rjjxki3REqb1SeCBjTyMYB14JC8k5Fuf7DnyRmXSsmH1LVP33puXtaDhqUB9PMMWDu",
  "key10": "3DpxvPRZdkB2UReDHPKp1PDCXukwSu5n67YiHCEksrNN5TsT1cf56zHXpGjcy4BdMWzNWcE48P2oazCX4p8EG5mf",
  "key11": "4W3DP4raPDEhiJoBctkgcmpGWaLdxtGF2YsvHTRnHUaVHeYm38SHJUXGYkaBrovc77k5sXu76ZMNzqGxozpSdncD",
  "key12": "4ZmqNHnsx2i5vJyCidwcTN61ze6PxyDwoEZubCCvxASsxFe1YUsp4NXp5oM2iuFSFyBC9syycgseacH1HEFX69z7",
  "key13": "2c4wAYdUvJpugX2pkxjfJZDhsNSJortAdDt3iB2vVwyPx4CKvMRi3V8eqaT8ACgtn9XXVcKPkLeusWkmj37YWcTC",
  "key14": "3dNXr81vchBei7gE6DAnRn97DoYfp1k1T3tRcDjhTBFnptniZsBY423Qkt7A5qSnXSCgHrPuuKbJqH59EcAbq6bE",
  "key15": "3tg7Z1sZb9DrysAqwmWLmU6c2cFGJJDy2Xfc13VrVs49h7SYqa1fgDzUjWqJ5kW8xkTq1Sr6FmMyRVGdnvCbXC7R",
  "key16": "2XGgg26DHhAXwHsJ95EtPmPvJkqmhJeonraokskRGX67ULKXHTEtQtFBBUBc3og1USD1z9GN53pE6jSGdM4aRQLE",
  "key17": "YqziHk1RenNUMvbCfjaz4NQTUax63V6BCDaoxJRNjatFbngCrLN6aFx3zkiYfKn3jLrQjReLefsfMXEGwWTAibv",
  "key18": "4VyQqSv9S58xxmw7CWmexPmMhVfm3hjuUYTGwEJL77fnhbvPPC1WNgDaZMEif6aiH5yeUbVV3R3TkeUb8XD6srcL",
  "key19": "62hUbdDowsHZRtXvqsuySAgNKYN8y9Ji69xkC9ygKE1Po8eH9ZqTLXaAMrkVV26xeBxgKQ3aLcMovZBKxsjdGdXq",
  "key20": "5yrAdW737jXNo1z753PZboNpSH2kmAPPAwcvmZT9nFgkijpr3w272PeJUL6KwtSXJ3rpuZwUihpHbU2AWehPXtFZ",
  "key21": "65dhTb79jg1Nk8QtWHDsvX1ruKLCrPusZGQdAYd4BQtr57JsCYkL1ncE7xWo8hirVF3pfj3epwUAjaAEAj8vWb7V",
  "key22": "ijhJweVMNqjKMSQYZy95HmYstp5GhubdA2RZmPmapU6VuBuU5NZJM99RPeRxPEqvfwFrZcSqmM3ms7GLwPSXYyP",
  "key23": "3AXJP6UazRs8uhGLrf6sq3R243PrpahyxZuT85jyXFWFJgsZUvCABM9MnhJEpNwYoivZirEPjSon7K6oR4jQHDRJ",
  "key24": "UYHjCoPARZ1Hny3hSiCYZvgBZC63DFeeKzrZcvzJyGuvBsja1AfhZCzSkt6GNtVsnSsW49xksrtE7iVRhVFktvf",
  "key25": "3tQB8uw1TGZQ9TMLqhC2AT6nET8p7cEZgtvsDEB5AfQVQxZ8XLwZfSiNDjSuTKW2Wd7w64AW58RHoi1arbV6cpZC",
  "key26": "3aHG8XjotFQpqhkJXsfdsBYAQAhy2y6m1woEVnZMCJXP3SbiYUYxoqckGZQ9WzVtkD52JfKNZU8EvWHUdcN54fkK",
  "key27": "538qficbcL6G3FqybekkwFQKAEXiPgdEfURE588ARiuQedaNU1g2DFsKNtRZDzHcCHbSeWotQ9bvGzsWCGspWXHd",
  "key28": "3MMN7thGHKpJ7FT1QVuzY2QQzqonSbRj6rnUmjnnMBoVc2gtcb4gmdKikSrPQbND8cGNb1BYzNCb85ZgmFXsit8s",
  "key29": "3hyAQniCi1QwfzvWGiywsnTVm81tgSTbjUgJPK2VpTuFboHfPBSCooKuUUF6wi73aKfkvUzQ2XrbNfa6ejqsfPGd",
  "key30": "3F5jTnCCzewaJcg9mdHHv46UFwsSoQ61SQC8keWVFP2F8gT8AvUDvinb4M4gH3bY1JMY9YcdPdwwiV7i1EydZD2m",
  "key31": "yoQALcz6E6s4FaQ4oJsj1MBehBbqHsyJMEGpAQFqWXrFSNYp9WWbf7pwkerw72vrhvfqw3UjStvaKdmJdMFK3D6",
  "key32": "63BthE2Y9ihKTFSTGyFUvDSwNvdbVgyiAfCd3fWXtzusoxAHq56te2eF4Y3JRkNhTW34A5GEfoReZRv7Qhi8VuP6",
  "key33": "5aHEdSzgKQRxUhzx9d76PU58DL4YHHquY2SosmKFZTDtJgdCVbMPuddovYBxm8LcpXeNXAZZu27MMa7htUaamUXp",
  "key34": "2RaSnUaKCh7gSf5vyenysjdC42pMzWf7Sq8hqXaVTLYQcHKpbTjAksigVyabpAm5s8bzSgw6qb3WsFfCx9ENM6Ui",
  "key35": "CRqkYnzeQAFvncSVqfDb93zKGxU1MZi9XGBxf8YzCDDLqPSD9XnScpt3poBeyYQGGoHPzV8wG1db72Bh9PRmxXB",
  "key36": "2AoVWGn8KE1MCEzFaQ4ZNWSkoSNefZFvf9ZsPe2DkAWSm8huM72tAZV8UFXhfJzomBrRHNyAmZdY6MNQykbKNKnD",
  "key37": "1EDSnXmhDwde1CnXCa2VDRmbAWb8MdrZsbkRC93aw53PTEN2nh3zPtKP9ZfGM9JHGSY4rUSpmWDop11DYBxuPdn",
  "key38": "2ZYMxaPMwG5AZCeBBKFm2bj6nngN59SRxJYqUTxWHNCfeFzwKYqG4w1uH3mnXr597ERnPECvioSjm6vUcKZAja3A",
  "key39": "2EbTa6uzcWkmAo4jWX5JEPbfZq7qGXwzfMrWMnY1CX8NBaxZjP6RHVduCHyobas8cxBRXdkTyU6tUz8fgcmjaC7C"
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
