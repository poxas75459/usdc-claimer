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
    "5RuScBuTnYSx1q43UNbCuFz9aieiTYAULwZ71bZTPRBzPwfbrErh7Nkwozs1LQohzx81MbPNcbW9tFYWqnAMbzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RG4Y4k38uzyb3xUH31SuFpHtg57mHU8FDyJYDgpT2Kwm12QvkdNHWStcEED6h5QBFLGJBbXJqScjQkYSduLVz1C",
  "key1": "3M12q8GGD4zAVvDyG5ULAxGgNhrrymRywv5H24Z2F41JpJfxfNMKPptzZJ5g3SnVWnRdDMr6EwwuetNq7M6mL3Ps",
  "key2": "3Sx48itC5PcGfbeykqAgXHUPvdrU8HyzPTWHS6w99ewkjAKfNoEAkEe1CZxDmphZDfGhxxzJzBDF1YLVUQwhKX3d",
  "key3": "mWVGnBrQT4wcaiGdJptRz7Du22VXd6e2AnG9qkxXbwDRx3XFbqjfXUD4uLoWSaMycA42JvDCf7DqjAW4PNLKfrp",
  "key4": "4Vx6Qo4bKsGsuASnSUAYyav9RkXgm9BTRyaBeRKh2sSpG7GLrAo78YYtq6dnYsKSx4wakbN1y7mPXfu1yxg6cSp2",
  "key5": "5r4Lv9m9v7fdAvffGaAvQWEne9HmeUfdNaa1uzSQ5dJif5T2yy8wmY3i3mVfSE1jsQCrKf9zpEiY4PTL8jzaFxm8",
  "key6": "3B9ChsYi41KMHovKanyJeisHS8ugWVQQ6Z4qW7XR77fPTGyeqbBan34dcaCAi3XiA4U1QAgK3FaCcCbJ3NYPCqoH",
  "key7": "2rK5qqGNFFueY1BubYTGuM6RXoU2XzRNJ85daXjzUgxaryJKbJsgsk8FUYnurRxC7HUFkmPEBEv8KMPp6ZBuyB9v",
  "key8": "3SP7HGigQ1GaCk7zLa8cRjzhic1LWnCQWchRbX2n35B1qx8v8BZfCHxBeLCTrevM8dqWX4RezqcyQYSS4zN3oRgT",
  "key9": "ykYM1sS1qgvfzocFX6Hsp5uzUGsyAV6Z3dtE4X3b7DV32hLKK2C8raLK1C6HHZjNqaALAgfyeSR949GtvVQw8AY",
  "key10": "5X5EWXzNEuadyvziFikt3hvZSxrxz7Y45XUx7vNaBqpuSj3tuLt5VRkBvqdrjQsvEtPoUpvALkVjACb5j8gwUkiL",
  "key11": "3ymvGCP5RG5QsvYBHrPgfRv9csUeSizaLjp9XKyZn5M2z4hq1nT2p63ViFW6vKWvb4SSFyqoTZFpvXXeyMpJe49M",
  "key12": "3FCjDPs2nSAeZBx5A1TB9TRADp34CZcg1LxCi1Zv5TJJ1cbKHkHxwsxbnoffuES62LtrXZQsCh9SYZpxMXcCLGVL",
  "key13": "4A9ERXA2YBzqreFQix5F53c8v9im8gqSA2yCsx2KPPJftiMC2uYRwHHmUEvaiAnLmSios1jxnsKhCncEXyksLt3r",
  "key14": "3iPqC7q4Gxzo6V291mXyozuLreRP8bZBTjUjrk9dCLenKsitvAM7dVURHf2G2KBEk34LdQ5nTBHwvMbUnkxUpV4N",
  "key15": "2Mgt9HNhArSZvrCTkVt2rQPAqbS1jew9s9wnS7AzxMpVeqyvdA6uF7CXEgryfqjDfXpsJpXMRhr7xsxRXxG6J5nq",
  "key16": "LZ6pziRd6s3Gk5HasASM5EswHXdWjwHF9q3ZBJNEFHtzYsti2Rzg8ohFEVBmJ8ctyMtETXTB6KFHucDtDxqF47E",
  "key17": "3AzVEdkxQEkZ5aqJUhJgiBDNCJFveUZFoPAKCBjzZ8M77e42bVocroj5ZUTgn4WhuRs1czxn17k4PoyX4LKM6gmA",
  "key18": "4L6DSMgoT35NWS9peBkJ4CMeNcEfWfGTDZ9YDTKnEsAF8kK77NKmaVhAGDQg2GLSz32GBUHabCLCKk6tuXqw7dr3",
  "key19": "3qPZMPep4gVLD8yazmphAVcpRncDp9xTjedR6dZKtcEDyFE5dhHyCD9gusFCGVDzVsiTU1KGBawPXHEicVtwJGYH",
  "key20": "EEyaNNFn32FMDtVG94VrScw8F1fMv4h4eiHCQa8mjvrAsCPBeWCycPMqPDADgoBn3eCMcikceuLaX79zXjJymwW",
  "key21": "44mBRyqqZBtP9FR2J6yfVRXyjvf4aRjFyQb5bCfSQTrXvPCqeM2Dtsr83e3bQdpV1qv21VerMGd2Agpjg1WPf4e8",
  "key22": "v2rtvgwNUaWY8fMCAHyLHHc1GPpHx2mdHCcp8665bDy1an3ANTirA9iRYD5weCaUKpi3P2xuRQMd31fSWgnHV5D",
  "key23": "2SDJP5rvkrsysNpsYeCxYGNt3MD7XMwdasvuVCnqruZUjpLnqCY4iUxyAzWzvMZW4MUkqoK6LvYhFt5czdbQ7kH8",
  "key24": "4sbmS6eqncyxSz6WkiWMfhjZxpQLBWdsJQK9mYFZyox6wSbMmZjC5Ya3Dzh8X9Y9TB6uA1bnbNErRrtyrvBuvo3p",
  "key25": "3qHRzTmGw4pE5KNKNc8aewtNCg8Buqxu353jTAMjJzu7tCNyUQDuEbhQzkJUEuQRtYgLQSw1vNdi5pEruWCDMBi1",
  "key26": "3Gt8zLvZV8b8yWDnVrjGPn93PTEx2E3gkAs92W6BwWSGcc6wqaeCYY1H6PEEKJjthFAGoinSyQ14u1yLAAYaMrJx",
  "key27": "5cE57Ug2AtoCW6xb86B6abvMt3p7CdyUFzzrBk8N8xfPtHo7JZ1qRLbt6XpKHR9xdPVixct5B6Ar8YqRoq6xZewg",
  "key28": "3PGjTRiDTuNdPa2uWc8MoLFuwGqekvBNGHE7YBvZePvkSakh3yxny5rfEj24unUhNtPcWU72ut6ndSbwQyomgoBf",
  "key29": "K9QcL99K29Yyv4RMbxfWUtwadPTu1hqoza9EJQEJWRiGDfg1FUHJ1ZSQocoTgZU1zd5v3qJFpjwGkrunQt4ibJn",
  "key30": "4LpW5SDKBxCUBL7x9KCqrmMCR8VQP9cLjJ2eR9Te6JKVjgMwSmAwkPgMZ8bz8DeY7Nh3NEhxQppNCkJJFqgHXKbR",
  "key31": "c5RirRLcujMt9sm5rZE6SmXhEdXpL2Uhmw5RmLC1JNjcdwH6rneBTfDk9sZ73Dh87JMwWF2tuiCqpHVgfXJNMTn",
  "key32": "BNqJWXhZ5mvXD4uAPzy6ALDwYDueFQvBDoddYDtZfvHJ7vRgEttHhWKfYQLserLi55MU9M1fWfvEitqtSCaLKrT",
  "key33": "rHGTjgtwYf3kqZck4wRQB4u6sNKbHdhJzzXBdEeKLYE9eN7CsvT5sdvBEALxJ3LSETEcDKLfJ9kXADA2mgtNDHU",
  "key34": "61MyxakCiyN9ZoBJKUyeqDnWMLEKNg9MybWk97LBM2dyEYm8x9qsE8Bd5G4qsz5EteBmnMXBjS2Ve8aouNwebmnA",
  "key35": "5A9g4AqBWGRwx7c5NTnLqKEiAHU1V7P7t8u6hqcfyZ5HtMn94JdRYRu3AZFJ5pbC2yfZj7R21k28L4NtgfY1NV7G",
  "key36": "2Ngu9ySTUswEk4jutfFDi9dJd2t2kEf4jR7f4GZfs2JeHLARVFXW5KzaFrL6jJREjDDHpy13d1LWrYxhLqiaBqPJ",
  "key37": "2jiux21TG8gaJu4jhDAiiRXGkSB9CZH51FJY5t9PsUE2ZNyCFptMHpBeTke1zSA9YidEXVX3jaNev9tj9LbM1ovq",
  "key38": "Bue2kR59yMP7FQbftUX1F5uN2VfgZgeqSdBSCvxWRWg1hPgTk6GQrF6UW8k5GJV4gENWdoxsfCVfR5x9F7hyNer",
  "key39": "n7WxGM56mJAChZTXLyHQo7v7U94VwcmXWXBSoNRJikKgybQ1Ytcg4jEVev1xBdcAodoYiVusg761Asn9wEZdmHn",
  "key40": "4ehbnU6iGKomjeobhPos9ADTXCagZZkpBnDRws5rNmm8SEgKDVA6vM5ajsQU4SbCVxZPt7EWWzPWjVfsCSHLw3Vv",
  "key41": "4tU8fT5NRvLanDvPYEFUtifwm9LjCdXtLbycEiHhmVhXartcLSSU5jBP33ooJWUnk7hk6aw9nGdQ5wjopHtZJ5VQ",
  "key42": "41GtvsPpUiQUr6uBxGmStmMPy8eziKmc5VCK86pxobPc7ywZRtf579VmLEBKciN5ZH8rGKAKbpvbjdrmvUVvBssa",
  "key43": "5fB2SAo3Q2bFrgLTy82d3VH2LjV1i3jHH6D3NARk2T6qjZz1tGbG8Ygpt8tXGQMq4443PNkuajixxWz28tK7fBfS",
  "key44": "4LqzxUzTb1PLHrb1YXXKTWKKgGyPs1EajH2Sgs2uwJ13rd7ZtJGC4dbydd3nTdkcv2QB2isJ9fRmxZf17eSjZZXp",
  "key45": "66KqEWhgSZhVw5sU3WDDM38TCVmrymUYqWxibPKqmxaCzkDSZB7oyzq5FjXHQCo6EFMDgS3Rq6Yk9Up3ovfhp7ig",
  "key46": "21w6keDmmthxrJcNZX6BeaegoAWeHGEFjenP4yUmXH9DPWyUCQuct2Z6azNb1SnHpPQ4WfWrsizpzk1M85xy9ZBe"
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
