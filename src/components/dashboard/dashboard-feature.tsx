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
    "5YmQkKikLyYUUqctWM8vN6QRnqYXKAEyJihdgzZHpqNc8zDMBEmkpJNDBGoobLGheHosGLc9REoziMVXaxK5DKjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWcLDYNF1vwHMH2qL1jVCi4ZWY7Xw2oJJxt56KTJpiNKGvjc8HcRzRG5NvS6GRfjGtL9qkPVCtCbG86Bpthe6xu",
  "key1": "tMgpu14BWdpPmMB8ocjZMjQnw5T3LqGzQz4bzKbXS4vY4m51VnNgaDPGye7Nw9PS1XVgNwZuanEch1uZPou7Ujn",
  "key2": "4KPpFHcVcmEnSYXwmAK5Tr4YCADFsX6gkS1J2piogo9PvfvFGTemSSAzEuCvNoAbyDgF9DXDib4WgvcB8T7qCsJ2",
  "key3": "32xkwZ7P9Ymk3DpGGMAYMDV15oSUS5cnJAABYGCGM3ygig4Ad9kvhAb59nokmt3dWtoj9wv6zHqH25h7LPCjwB4s",
  "key4": "4y6W9htDn4BXy3mFZVrtkMDGdMXVpL7ETu7bSaJBuyShu4YoGnQyMKXkaAe31dSzu8nzf4iw3FqtT6yD82nhaxbs",
  "key5": "Wd2aYhj5tH3fFaj7iLomLeBg79HvdDzyiw87Po49r7yWykE1fnaf8WtMrWnwCjwf7CRuLCEtZGhRYneWESvXaRW",
  "key6": "2sH63xiv5tuGfWKC4x4xTPMJ9B2pANovAduCEyK4PCSNiAF7NQXjunTLsHxAMYG7Dksx9uBVJ6UoXs7tV1s1LnPd",
  "key7": "2pVyiMfkNik2dk9RLoVUD9YZKu5QXmYbP3jmkEifJyViDqiV1LspmMJLDrVi9fvCyFdE3f7SAL9LXWkqcxZtKGqr",
  "key8": "3joHULEr3vknp3o4odgrMgUHELm3VtthCLezbPwcCVTLitctv3ok9jQKUEUvg5P8i3aRKxroSrxfNdfSLNSmWG6m",
  "key9": "2xJnXRQRjmcVmjaDiC3o22ZQyBcR6ASDjD4vAe5x2gVBnwRm25Q2uY6eiyHYk5LssacPKo9y7SPGCgmNB5HhzrwG",
  "key10": "4KVzoCdi44xniEoiwGbHnFArCCbTEFk1VeUkQ4RLwspN53bF5RMrm15A9foujDP3bJjYn4cKNrLJcwhkdwsS6wmg",
  "key11": "3rFp4nJj2rjW6GFykMkA8WEoUcosFmgWEP4kHaAnzqTRNn5fg5EesWpWEjos83ebwDWKz6ZZBp1oSjbCbWnzRKiN",
  "key12": "27T3FLWsHjqtwHWzrNAhWFrVnCUVDg2mxm866kUvrMtVBe1EEwRrhUndXifjuFmnU2Rn8gmybGRzWKgGL4Ex1ioS",
  "key13": "5emsmyTKyfSGThQG9yZxase1yUNUadJqXLVyY7SXaz52XmrghGHvHhPPKvCG5zomAGKsZEyZa5heHTSJFeZpfYV",
  "key14": "5XKXGRQVTYjYH3PtQBJiFkDE4rm3LnyuD1HSvQdjG47ithApcQgc1MhbjKVrc7kj9kdRYC6Ychj14c6r6DtLgZPV",
  "key15": "38iHBrUSc4eDEA8MtYMJxNSsNCms9QgjAzsLbd6GXoXzNRUu2752tG1jXqjvkFcQmMYNjf9wgG6jbqUQNK8VLvbc",
  "key16": "3k3qV1QjGM1MuEcsPgnm68fG55uLgyrNgx7XAbVVk79NYt4VmvP1pWacWidPxTJTgmCMTVC9Q9JcZT5ErheBJMfN",
  "key17": "3h5fc6owtUhuUiUoagFFaQ3uPWDqLqEs7P1BvkozqtsZ7vsMEdY2q13h7ovjuJbRGDbkgLZcgdBQxhsecVihapjx",
  "key18": "36x7ViYLSzp1ZPN2VCxDpb5LEcRUVeo1wCBnX92HP7B4f4Cju14Um4xGeaqPCBX5J18uWMBuktZX24VxQuLSmHjX",
  "key19": "4okx9XS4PHxiEALs5JkShhCTzngZiXPFtEDNvfR14kGRRVUBofvZTv3DboAF7UPhEZLJLkKSNjNWNETHE8yvR2vJ",
  "key20": "ESKoUYqhsCw5cccp9751kwHfZSuytYUjPKTJYqQTUn5omCyQ5d94RQs1VfJcX5DKpYYfuApTLQmHQq43L4sqsNV",
  "key21": "24KKHYbocHDvTM2wxdFmjrDtUXpvHJawn7qUmPtmmk5QPfFHP69UZWRt9pAfzR2voTLoMqtrHsAfRZpwBmqTGpoE",
  "key22": "xKfvDugpikRxdNDSB8FKCHefP1eaBRkQaSFF4zQcmLUjD2NgnWY8GewN1iHXjv85oKDvtn2xFy2RrcKeNUHUpjn",
  "key23": "66rhD59UpkSMY3DXLV53qmaDvBPkyM2vLLRc3deMYWqzV4x8BkmomgMi7PFjzoVGsvpDEoVsL2UeNNoumKf8imtn",
  "key24": "48ucmkhRJwcnZVsSMNnnBTsXWvpTMmGhxL2kxoKzXEUbdBng6fsmMMfFogwU146zwqqwZm17Qa5GxLJrnJ8HL6Z6",
  "key25": "2yUk896umKgpkKwYye5fS24npGXsQPB4sWLhjvfXeSSysiQPXjrykuZ12APvbWTvNtvP45EnaN2z5jAbDB4Fz2Yc",
  "key26": "2wkejSavDvKhqStntdFKkUL5GNDP6CQrRDshNKTDnNdYmkg5funvBLX87bSdGsd4vPpwjMrDhaMY9TxT91aGXpXj",
  "key27": "3KJYJes9E7mEySVWxprp9nfgM6Rgj6SVRfK1r6Wot65SLqRUauevjP4ZBrRGfmyokhGg7LJdbKoBwGtGzU6ZAJvH",
  "key28": "XXUtswFfRDQoCYMH8AE6JuQWN2QoFkrG4uMnyFuUyUBxHfiKoQhWKZzy4j2acTBXJhRZ2cCTGsbUq4yh5gbi8Yh",
  "key29": "4fi9hzfHu9h62KxPJfwvGrNUuv9VcRP2Yn2DNEREqA7esuRiX9foFcwHKWz1ZFP4HpcLANdh9NzkPvmQerqn6by3",
  "key30": "25KGAWxauYKXwXxc5qn68ovNRdB4qvqj1ofZup6KfLR5iUH6SZyG9yzRxt3MWmYRWaDGdRR2QfhCHMJWx1wHTpgD",
  "key31": "5ZJfT7T3KrvZQaxE3nmqxdYHWQxkcTo81PJMvKuJ1joa4ij1xALUJQe2YRUSc56RUi7eesMb4yVfKGNqqX986Nsv",
  "key32": "2WUSzzLNDqZarmS2ReBzABgVp9YguAuR18ttBMjLC8QTZeXzBrx1sgzenrs9aVombKCCKR9ptkQhuJFeXzJywjZ4",
  "key33": "39kpWGrrUCCAY6hyWYTFLQPFFZQJSME6u4JLFywnoffHUuMTfxqRrYvjjHDVy1aiF54AoGhesgLV4UJKU2gmRcTQ",
  "key34": "5vwAaLgMYcvXqfsMdAcCpGPSdKVWR7Rj6K3RhSpv3e3VAoYMcH8GVXZAqYxPiFDo9PDtN2NdDHzrZuDSUGH2CxWc",
  "key35": "56ZrBsFvpvZz9mypGbr47NV1rfK5Nykp9W3WYLzCep2kCHHiMHb3tkFxaxspbmzpeqzBKToJPHYHMWqirunq4xjn",
  "key36": "5kfJbMYFyYcveseAjYKyXrhXked8BBT6xh3WcvJ1A7yT4xZnxihsm4E6Bd7vNoofESFAAQqMZ2fmxmwS1xvpZEFY",
  "key37": "4jDV6U27DXBg6USknpogv2q84zCTW1ugchN1hNwP7f9LHTLfMbWFcdf1cd6kEPeN66LSHjyzCdALmN3wKtxbSxvu",
  "key38": "4Hr2mqH3rPYsq7ZDvH3K9pbGsE9qtpCJ4QjEpM3gzWfeCYwzsNSiYzk8QKEE2btYvafzQ9Mnb6af4bqaVZFUCX9u",
  "key39": "3evjY9uyEza9WuCep1PsujspHUsSCV8DxKgPSFmUtnJJb9rzE41F7x8TSqR272gz2ErwodFJoJfiSzvjJd21YHGQ",
  "key40": "42zjrs8gmWa2ekRnh8TPLdHSXHSCJu19GSBAuag5wtcvjLd2RuPVb4NiHhxcHCuQyz8b3qJrFpftXqWmyQDeZkdy",
  "key41": "NUKNpoS3PeosVDYmM1BbzUfqcnA5iECPE8ixdh1jXXH2hfArfZAxZpyzzTkjNJp8LrSSDskBbMTdwDShfKLTjcy",
  "key42": "2HVbGJFDpy3hba4KAt8PYCtG3uZkFWQNbdwUGwMRjSXwWi5Un65wGYWWS7NkXEsUpLuz35HVm1cYAcrZ8suzYLQt",
  "key43": "3Nz3dWfHx8iQfm9nNki8NzMnF52APHDRyWEqfGgzmmNAjNtcLP9x3pXiJzSEWd3Rd15dZHe6Y94irdVaC6J1qHZs",
  "key44": "64TvnCjSqS4XpzzQUjdsps9kDmbzdSt58TprA2xsCgNpnzQFszSLSFvPYTVuhvvGV6JT5Zx4VVK6YEk9qbzDgCL6",
  "key45": "3mdZDrMruVm2b2QCAszsBVb9nDKZA5uYXfDCxQoxeuHot9QzxNFyHUHSqb2LCrVTxx7WSiP54HAYJ9d697PVeRBr",
  "key46": "2ypgzTWju3DU56V59nwCCHYgnuAg8dDdSeobiZxrRNohsFbNCp1JqszpyjvXCh4mAdSdmcQcFvBYeW4oT1roqici",
  "key47": "jFbtBeesZsppszWPxSmBnsn7MSX8bik1q9qT5d88Y9iotrUfrmxVwsfZMk2m7Wh9XAQsqZakw9YiM9r1AzxVYhy",
  "key48": "2ENJcrFfYA62y9wrLZhVT6ich2N4oRznWePLWCtnqmdLpMH1fbjGHkQvfY4GKiA8pXkpa32Ryt8ChGfUZCPYrY5V",
  "key49": "2ooU4SkFZGKsW6kk6dzSsuEmxHycVnYb7KsMzUiFtmanva6X2aepNsAzS6c693bXSYFJ6y4RYvQtFRXHxZp4dFTF"
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
