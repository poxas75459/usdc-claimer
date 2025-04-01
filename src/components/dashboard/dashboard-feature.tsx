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
    "4hbb3CTw1rMsDCCHGDFSTriYnf2Jna7jJaa5Dvjffu9H5idz3jcJyyxXYoZmpNa8cqdUWr1qifkBNAb5Q6voDKof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgAC2GSTgr6eJKeSw9VjSEn1aeD5ZZLnkwHdPqwkWc4Z9Tj7dxTJPWoXx6CXB6R74G5Uho7jQPZxjCuFUxPjfNQ",
  "key1": "3agTPJaPoV6HgUr5yvzuCvMJaKrtubjnoQBu7RSD8wyUEdY3KiUVB1vXA9SeQtFFiWx9kA71fdupy1sM6X9Nu7X9",
  "key2": "5zRuXyi9PLFUioRfjFMJF9Hbm3b7WRhmKUBrUpsduQt3WwcoFkhQFs6P51WusqwWfTVYp52dxbGLahESkM1ktxHN",
  "key3": "2DBaLu4zMiHCAiKy5wUhPzkacUkPLJU7B3Q91JTzX1BpKLquttz9Tsi8oYg5m9omMVc5q6NimzMHQxWLm7tqMxE7",
  "key4": "5e6J3vRgRd6SmTMjZFEFj5autp6fK7uPaPZVQDsdwBFRLgYuoTyBSZJoeNotBrhfDndfvRSqhw5Q9p6Cx87CMsy2",
  "key5": "2bwU913shQY5Za95xsev2KCLLrUgkzdKsUn96yxrCxXcx22F3yyaXaLa7DFSCB1g9irGU9KoDWwMKcaRDMmutVad",
  "key6": "57aDEZePssAwRsovGWT147dcu5vSRpQE5gGeyrCSsNf6ik3VveVntFPY1J5BzaM33i2wsxF4FNBBwkZEg3pu9Q5a",
  "key7": "39Cyza4t3yACcdXXFp88VJGQhpyjhLoiCoa3VNPf4mZXpNwCuuraCWnABbyyLNkxaoBEykccEozHr7LgfhXpem8",
  "key8": "52Yx3ggPHKnq2bZEBQPLE4LKmq2cRsWxdbs9saumNPbVgMJU8ocom8wjLMVuwKXGmXZsQVrwkRZtyuyNhBYAu39R",
  "key9": "3jyZXsPkspPJwDBJ4orenzrsmDBK6xiiHVW3wHUL8gh5NZtQMKmGJ8TJqshGd3thXf91SLaKTrzH8wgFcGp3BogP",
  "key10": "4VMUmDmW3iRUF7sJRvztTGXfjnaJNzJauNBgxCbprW4HN2sF2HXm23Eb2bRH37EnqJFwhjKzrTuajsU4gWxxoYhL",
  "key11": "mj8isW2ZgiyQ9q1zfKVZcAC1XLwfQr1t2Dz8VXvwPDb1toURWPUB9DMivgadFfQruDh9vAtLaTWpKpekL4CfsmH",
  "key12": "27WRKzbjMF49TZCbFCT3zHtLVeZnVDqQFnxXAY5RvRyKdcEiA1qEh7raRuydBn5SFHiN82FRwnhbQc6VFXEPmVWe",
  "key13": "VootEMX5UGdhHshY1WWejqK1Me1jSutSVUtusFB3zwK5avdBv8SZEfULkebboDeb4fjpeYH4tG4FF9CyTSLokPk",
  "key14": "5ZiQb9gXkZhTUUxEzskYsFPcwbU9FPxqwo7xgZgWv5yr3KcreZbuzg9NNZkLGbDzx9R1usJBZdhZ3tGTzxqjKNR5",
  "key15": "31D66EKWvo7stSZJVmQVEHnv1DVgF1vZwkxwjpppwUtKdgzfwBAhLYGxUM3qffkGqwQRTz1QJK1wjb2bjEjjXXYR",
  "key16": "4sWUKG7v7mCMEjNU6kUuZmrhLzuhK2nZwuCQ3bn7zT8Fp2GWWNUEAhRW8kCwaCBu745JUwkBBTEHQy2WhDdTgTw9",
  "key17": "5ezEzgQ2aSofBoxg7WFEvyzPP1JnnnFQkfV1SNmU5znZ7DddJ53VQiM7sxYBfz6NguFL4sECqfJXyYQrNNhwMyKd",
  "key18": "2bAd8g2mQMWjm8rzbKu6MbCaDFMFpzRxdDM3gaChLTno1yPLdb2rXdvV5CS5rKJqCjUnTsW3MtxjsgdsmRpUorC7",
  "key19": "Fi8UwysbHBk7N55inkrWN9k2kYD8vLxa1sYgiHzduL3oDWr8XwMr7NxLiSqAS9tFLigiucxuPpBYZkhoo3jCT1v",
  "key20": "4TLGoEvSyHN5JtgmggsNggBJ52pt3ctRxTspeLM3yCGZVNxJpmRGn1sdWWFetePMT4n9YfDr6Acs6ktXcUykQ6FV",
  "key21": "4HMJhps1kcuf4PSSWRX12ZZg5FYkzERXvzdeW85dKrpZEiXf5WqiPZpnTawjV1aUndpJ8NDi4W7vm5pYszR9EaGG",
  "key22": "2miM4XuG5TStYicMp6C8p1pqjfRt2ne4VCHRxs1Sf259oWP5JDVhzKMXD3gEnrR94TqgG4ERt4UJAE9WxLUQfxjr",
  "key23": "66CDNR9m3AcQdRaxwNiQ3z8Azxb2hZWSU2CMSuGBjYmyDzrLbwFQxrWNGUDMHh2nrcijWH5eHY8kAiA18auUerJ7",
  "key24": "3hjdX4aGxcti4uTmcfYpowj6rBdG9VYTv5avXY5PSgRXRthcjLcn4DNYs8aszLNEiVTCoPWB5STr5T8i9XXQR2U",
  "key25": "4zwEGNKyFxgLSRRiHG3A15N5ir39anpFmc5PkriTnER9vTXn6pQBBYmtMaxJT8pJmHC5q5F4hAuuNevdUAfLwVgs",
  "key26": "5vmvcnwSZeCePUtyq69imwhUm4xuVPPnyYP7BPHLpaeAiCbwv9wtvHQFPBnjaNjoKB4iv8d7rGPZVBdK3m3eNs1D",
  "key27": "4re7frJ8S3SxAfpSbiE3We8P8fGxYnzHsJs8tGtECjk9MovSu6gDxttWzBoHjFaMGDQKHiJzxGXVjDGiuKnQLkUa",
  "key28": "46tPmR2qzoKMQbZJA58suxr7yuQ3w3DDjW8STWRr3fCZT8DhcBn52EoBXApKeJaxrnXNNH716v3ZYZFniMQsxcGg",
  "key29": "63AuySHdyY185uUsdDmQkfca462e9taYaKbzXj6GgXiczAFtxpZ8uP3H9HjP9zPbEM6CMt3RftvLpwgEfyN95o2u",
  "key30": "hzMeTNCDAo3nQCJJoVBpWa3AHH6LHbnQT5CbsBBwoEsUzEE12WC4RzdmorAMD7PK3R4yrf1nr4GpDojEhiQqVKe",
  "key31": "UJYCChVCsaVsj9Z91QtVGXtLV34NnoLRreVUv71uXTWuG1dEU2qeHJszwkVZTYQYYbQR5WoRdPhu46S7kj1SBaK",
  "key32": "63SyQMaJSH1U4F3xrShPcdkKaH5McVKRDPbVdheZ7ro6T2KgKPBvZg1MrZb8u4HoqEwDCTdNUyvidybvogWrkaZK",
  "key33": "35kKAXagkLhVnteWGcm8GBcKHFYzDopQCrfhQyLz3TmrykcrrJ6Eo8DQ52cfBsnBjFadWJFgJ67Xm4RaH1yJDs9s",
  "key34": "3gV9WyZa5KponkY1XJkhtzPhBRzE3MXbYbH8oTyhB5BS5fsiHQuanzz3786hjNzFEMD2ZvqR7bhUkWYHe4ibhAgm",
  "key35": "4dNHrSoq78LdoYbZFiFYe6Dy5zP3hrFPit5fUzV5QcPcFzfK4ohdPCa2g56Bc1HoLpyqLFkZAZKuaYVDp46NVaRk",
  "key36": "3akAr5FkmVQ9pw8U6EJZhsRY3y7wmvKwpEpusoHJA6Qj8ExeVB4HawghDWJ9jjpF7jiavXuBgGqZc6yxHPAVF1pn",
  "key37": "2m1mKE6qypWadLJ1RFPuYuC9TCNg9jgeDv4QVr55nyAtaAZrDHWVj5udzTwnxEnJsWLFf2ruiNgUCkeKMGtJ9iaf",
  "key38": "5jTbh18Kf5kjATQ6gYNTopktUbrBqqThBjS6yc6uRxtcJKEkfAArLedzy3VGwH474h5BnTFyS94n8LCSKw97qQbJ",
  "key39": "2SDAD85p41BwBWFjKLxPuB16K1mmc91PRPvqFRkGavrXqR5jbXNP32FmSL36i1dYcUgQCH6cLRMcs7APR7g4qjL9",
  "key40": "5FKNeWmyfRZqfvgHnEnccEzr82xS8zCvXrofn836aVHx13sEgJX7SxLzkM6DPHndwbzb6ZjPuqDzifAkDjhJeQV7",
  "key41": "2acrD2L4f28AB8C7UeJnDJZ91dzmpj5R7KMYrUkGzZCZjWLBVU866JPmteoj7sJojmH5WByYtWq5uj8f8Hj37ZPo",
  "key42": "4VBSfHgQSnh7E3KAujvFXuzX7epPStdSuqjzSTsVyZ8WkWFzcBNwY3D8tFYp73mW8jSFxU22N3mCdDBzLA1J6zLK",
  "key43": "2y1FPji4PTKd35rBR16shuSoa6NLQrtJyL8JnRdZUsXnt1hVMghKkNPdktJJcBjm3CBvphXwJTbhoYqpG3n8EFpg",
  "key44": "3oqxuK1oPdYLqPdqYvrn4rhwoaEk9e1CoKb2drArMyvp7jKe4hx4pED4bbNm5nfBV274TBLYQPQ3wxWoTnzgUx1W",
  "key45": "3ygWhAYGXyAXVEwHxcWjnAStD6FVXJKeHDtyL8v9sCmAjCpCyBmm4eNKx7ELuy5nE72Spgto5sdzcRvmCevJyND1",
  "key46": "3ENoskTj9rmZR17B7X69mteQGSpDsu6VnRwPawhvQvzxfHqBpgHwq7gHeo3pgN3bN5Qt1256SJ3PU2u2pWg93JA8",
  "key47": "2uqQo3NrF5G5iEDkTRKhbdDcYKjswQX237MEF8DHkZEzPjTACD1byVFg3UFT1nD8ksjuL8DFmBS1KpbuMZ51g2H9",
  "key48": "56CQ8szDWTpGXZyR9rp6ZuTuFDwnfzt2w1cgGbBi4emfFdxBFGQi4hRjJQ4BbzWrS6MFZRcWUYEeYUmUdNcbtimU",
  "key49": "tjeVb7J1GmLWot24vPb3bieaBG5M4ZPvfnhojV141R6v98VeDuq9GLnmi3zJBgTe51S3FBdULiBs4KJuLEUSm6V"
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
