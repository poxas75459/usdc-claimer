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
    "rcf1GgK32Lga4WW7NuDiGgX7cJag31BuByVsjB6aqLvoKjrraEDx5mF33oPsWdybPxjDoY9juhPwijue6Z5tY2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBNr949kKZnn2BWfGjLxLVdkCvWSBpHTem2ymHtU4Mq5dAhrriDLHtH6ipBFZvAV8XrgrxAp2sNaqNSHx2TSg1J",
  "key1": "bdtJR61ce9CjcjoA9g53Np18L9Phn28qSJJV2gEojGMz2C6rSQgEy2fFaJ53GYFLCV447FGxmhwPKrcHwmpSmRe",
  "key2": "qsaU1jsUCTFnX6rEsWagq9CWMD6HegWgJxaHJVnWipt96KXqiFhSyefk4k8CGrAZhhSrH5ec2QM2T7mKNK5hFLd",
  "key3": "WtRp854up3ALNkJAAdc956kKwDcM6bfRBWS8bVSCxpKbyMAPQuEYHhki1457ChiqSYitXrZUVkZeZ4VqUH195Dn",
  "key4": "qLLuHvgDtiGTAKEWQbTshtfoyw2jM8kvNs7KLTBRZcBPyoGzKsedsB3q22mcSuig5jF4ES1whBSgqDiLRFosVuw",
  "key5": "5YB6twS3VuPY54NfgeNNPufdk7TK5Bt2RzVqMW793Rj5CWs52VpuA3f7zKuGgpdVu3wpnPh9SzgbRZZMmfHxxTqh",
  "key6": "436otWbPzJwraqSDdPWAtXE2SmaCge6iraw8YsTXL9XvsK9hDt3aGVnQWgfoQ1Xdzh8hKJFGjBdzDgtR9qqExJZk",
  "key7": "59LGWayR5bLW3cAGaUBWSsMTd24ez3xT4qWiZDwHwfCf6xgwfB51zu4UvnZpWKDyPoSBJ35s8rf25jMCeeFxfCkW",
  "key8": "FiraBxvoiUxUSEefrPrttY75mjpkqjH6SkvhmN2LKarSiSTL7JqkxUq15pZtgjYG9CxBVAveugouHcScd4yvDdT",
  "key9": "2PuwjmRMoRZDbt8rXoGsdTaB5Czp2ffFEQXGYrrwNagXM5F6MT4WoPEg2yEPe6yxnJrTfHqp9NhoGJ1kS46kLRc7",
  "key10": "22ucmen3tG8xUp4aRSqDx78Lyr1ZvXDt7giR4H2pQnZRVCuP1WeqkXroJezrFDsRzeCGz3119QS7TN9bcDr33aNf",
  "key11": "vdUAQskRp8Dk6GVzLykreHmasLTmG72vQX3Yspb7cWT5TBtdD2Pf21UjzwMSdKkiBxgKf3YT4h97sP8KbbsiYVC",
  "key12": "3QTzMcnhBHGJPFT9WRT4cCQXspemHwDzQFxdysbJm7oa6X9JTtrXMm8sBne9c9RFavmwpsc9UhdSnC9XH1Awe1AY",
  "key13": "42hdCYarxwT3yJs1KBeeDxgSqhgbbMNg832oG9Ezd2e1B3Wzoks4GXqhDuWLdKTak34Y3Gx87ePS2ToninBND5Yy",
  "key14": "YwFgjCfMC8Ko2uvcnUnbU2KvVE78PbprJHBicKKWJxZdXzJEGMefvMijwHZGmDqDJ6FH65WGtxkUp8N3R2dobPm",
  "key15": "45WJ3LTUC4XXzjFNzp5AdVF6poVw9RbDJnpBCkZT9Z6GGVxa6T3aR6Kebrcmq7uGFeXLm12zhbzxm1PcYh9uQU8b",
  "key16": "2tpLhixssbzgMyhCGQPhwY85tYRyz7bj1abKHR18btoDnAizykk8Y3hEjpVA5dkRH1ENLDJik7H3GWRe1Ez1Qnq3",
  "key17": "3Ea9Y2VKzZjhmurpV5YZT32F5L356aF6xvey2wZt3Y2gfsYhs3NoXyjuEFPk1seDJvVoepiANTUhaGv1Fk62zf2",
  "key18": "24bx2B3ETMGcphq2auTUuq7Xhy2H4pnhj3578ezHGnSBywDUYgpEFwG5minkzYtC4pmm9fuGw6e4hUnLVJ1NUuXH",
  "key19": "46jANjdJ1VsPqUo5EYbvoHr75tMvnd31exMrkG7dqYA4WvNs7xToUQpF51WNgcnSPUoYdk6y4uUd47L3z8HXpWJK",
  "key20": "5RKtHHEKRFyd6AB4nuHoNfPK3QAhdjaiWj4Yh6CebZ1SET2ZrKJbfFXfpDpNHXag1HGbXA5unDTtpgUEEaFnhPC1",
  "key21": "4MzhogD9dDQTeGkivnLNwTLapp1i2HrDGQRHNy1NX6DUduwepApbaEvYuQ24s8RtMLdjaHpBtAXrifZtg1guW3sW",
  "key22": "4a2scrR87E4ZpfWYvia12ZK8sKWANPhKkmgfa2vaU93Ps8M8CCgRnkgNbKWWQVh9c8daW523WzvXaG5nSE1VYRPY",
  "key23": "5PMQ5Mw9ZJ179oiCsfqajAsaqVMkpo1AL35sQuAeMqweQwbgwTuuUPrmVSA71tXJrni11gPNrfULen39qkq2n8m9",
  "key24": "3KaDPcy8JZ5Q6y1vgyVaPXY1jLAUtHUECELJthvpmfFcBzVSLdAEY9icQ9qQg3LwqwLMt76jWA8YeXa6HLB3ypLV",
  "key25": "3EQyEUMBArHP5WzRkW2xz4yKC1ZEw6EQT86rvCkyQoMNa7w3BsZ8U3pAnqRKvSuddxviBm5ZJAMUS34hKaf9Q9TF",
  "key26": "uwViS2VdUM3vXKWfx5mCUZu6eh6n3LvqHdVCE1EQsStr9YH626kuKiMDcYmAuU9PSFjADYCJvce48ojMmewGsd4",
  "key27": "2oXpg1QFNDLyTghhAH1b5zi9Dnuc1qaPYEpzdhppC1fvBbfzJA7biwveokKc5LJJQCcXf5WHbDajWZ66YTK7PVFd",
  "key28": "5ZEUkFmonAzZkCet9d9xC5scf6UK9PCx29B277w4sJUB1aUA41hGzemWnNZbZbGAeYaj3HJA459kEXFcnerv3j3m",
  "key29": "3PRhS4RgkdQ1Np7BHevTCNbVAA7Lz5h1NL86w6NsJSaENpBBxc4FboSEjF73i7SMC5Lk4Q5e1kN3ZJ3cAjczMn3K",
  "key30": "43Yv3BY2wugvYD5JGS8YK6BJzUA8Xn9JnQGQEBSmd4V5rFirZ71PZzppJi5rtZkJTmByZi2EuDSBdYt5NEJt95rJ",
  "key31": "2kUEcaN9tf2LjwNU1gWHskbADBjFThVQEmxAk3GBy1QjBwSe89xSoe8xaQkeCy9qLsVpqDpcfE4Dng67BzKG92GF",
  "key32": "rYSX43RqBc5RgNtLddb9KD7YLLgpmq9ANczbNiiRQNvMQ5mjSji9wis3NJhrCDS4BaLAxKDkfRHps9Lmu3NwHHi",
  "key33": "4nJs5RbjF55FRwj75BmaxrZmLKVTtDQQNVWBx5E7jBAqsCvQiE6nofNyUpCBNuLwzvwh7KM3DgunGmqsQUQLDWDd",
  "key34": "3SYR2ALUJ6BBhEVrECfycDmCvtWmcB457XZfdkgZgHGQ19Y7nzN1m8qfRe7QCNQRdCwLSE4SjcvTDiTVKoJzRNLC",
  "key35": "C59UuynPSNNRw773kcRYuG6VkrKCYmzm3nUnBLL9Xqph2RzG542jXLJF9um1GG41EAijWBwgo1YpU8qzv8QPpga",
  "key36": "dQwtQKRBVFx1QCTENQUZUVS6czDxfpnJRqgKiVT9VTSkZ4Yubhh8Q42rELHcqTUvqzdaqs2wcemV9fJwSdHbYqr",
  "key37": "kFxYgwRFi1Cn69RkdyQVnwS8b3VmYWyQSorfjuTkzNp3ykU4WFRuoorG86pMJbWQL6uYqT1XvntyZxNZa4L9BW7",
  "key38": "2pCGczujtfMWTfmyfEZv346AYCqdrcbN18TADby5iBwdT67BkGrdZmtUj8TFPEBjQiMSWoLYDPiPi444UGVABNwM",
  "key39": "5MkjszBb4ZSYwQwDAuz1oCKA82DokA7FtrVCWFD17AoJs1NHsbWBr3K8uJdQmJiLJ22yFLugxMCJzue3SnYzGDho",
  "key40": "9EwfbbUBW5YgVJyrVvjuZ386T8p4XQpeFGtUrMkH7xyKLR4dsDsEcvoLeCded7Zx8fcR5h9potC6NE5VimNuN3F",
  "key41": "2bEj34rzPyvL97xra5y1kKCMAHvv2CUqHe1UDruzJcQyUwVkFfGi9LNsTpUK1GU4NkUDXgiZcwzbHuGfmhwPr2Xe",
  "key42": "5o2Q2942V2KNViQXWm2bk3ZZpq7SVdHtg7DgdKqfwYMWWXYLNW4CRkxwRHt7u7PkTmG6Rw9mxSReoiARHuNdyDnA",
  "key43": "sxoAdLU1fsnaxtj9Z2vZHafgKbZXRpJtg6ip6zpAtVmWymmFJw9SwjZR1mHGEpoNyrwLxDLT6DyjtLQo6ZtYi73",
  "key44": "5KNmy1okai2ZXW3FVV7XoPavZ1MByh264QZYRTLpc7BcNxkRhkLcnvT8ZFe63aWht7NhxrTzDHCQw8LqY7aDjx9M"
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
