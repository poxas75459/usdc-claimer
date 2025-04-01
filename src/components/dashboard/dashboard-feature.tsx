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
    "588nxjQ6cRsGaeFbrpgm8hn2SRAXnasoFbd373DenPSacqauA5SmFGpbeDFhBStKhDE4vnAyrAyvt59j7QnKfkvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqm2B2cgFzE1vTDRzYvX8kqgHdCQpV6SdfE9NqhDbwu8YMc7gpdysA2KGDasD3KNxCER1HGjtXuYUf13S7guUjs",
  "key1": "LEmfe49av7JAoqqQ5v6tPMKSE7kc75uXJTAa8xX2i9TCZwzxtgAmrgR4amakWbk33rebkvgsVSnyudgGFygCGg2",
  "key2": "4JyaQVBZy1g4kTEGzr6MT7SniDb694sGmxyQU1zKaA1cosGJNshovS3uZfwipLYhxuygJGvDpAyUbQBS5K7EMtCj",
  "key3": "3LJcN9K3bxkcGzazjicx49831cRmX5mBag81S7cAQhMaKvgS2Ye7KMb4FHnuLmocbLQHCp3AeSxoGfgBzAqLRLf",
  "key4": "5cRPcNJ7p5aStZZsXmjedSHEc2RX4QQpupweKhi9kV8CKy7gKimW97z1AU5oADPcJmC7xakL5fTVyJB6D2vkzmyr",
  "key5": "2Nu8EcBSAQNG3NjXQoqM5mdTZyM4Joco9byDZCQZw3GycahLABm5GAmVhNMpapgdpk1pBZiDjRPNfmadmyuHB7Zo",
  "key6": "5sa235oGQAWQc7d2QZEiBUzCU8VGw31GBUo4WEfLuD3YUgxCnSjiDaUV8ubLXDu5854FxW18Sd2a6NZtaF8iqTLj",
  "key7": "5aZYshz2TygUiEWuM3RS2oEe1rNn2GynskmZjgZ27mpAmx9Wz3MKAjV59d9CC4GJ6r66ubXPXJ5p6r8SyGJCsw4Z",
  "key8": "cdsUTMousFreTA9EGyiF8jUGPEzCooJCvAsajsW9babw6e7h1fYvq8BMVYZXkdQuNHei6JS67RH91wQJDXD99w5",
  "key9": "4UtrbWi8GrQwRbGhDRbDgBKW7bNQpsiiRnZEN1DhKUXt2y8tvAGsTnnCXjM4aC11R6RgFRU5RR6YPEusBZ8sfXn",
  "key10": "zKQmzfVMRcCobHNsMNXbXUWeo281mVBrwq5mFPzziqzKHj6278cYseWspXXK2U2YYiGZj5RA2QHLY7SquY5Yuf7",
  "key11": "2XgwiXt2RLVY7x9bqZsYMWwqngZp8WfXa3NogL4rksm6fpoSHbJDetadmQ3UxeCAw24XfgTyy2sE5RLsWJenvry2",
  "key12": "2r419jcKqHRtTUuC9L6uK75d7WvGdh6Jfr8X3b696v7HFrrPyFuAmDLDh7NoXAEnTUKh5dngNUP4PXycj2NHjh4m",
  "key13": "56XStCNWYCgiXKxxt7nAQoR7iLAKTyrwCRy3VZJz5mtjJBNCzwSmwBDGoTgQnnBC4zWYvNLULSRhYbdKiJhN3MVQ",
  "key14": "3tRB2Aqtw7g8tqjk5jdQMzfdnCFFCmgVpMLFBuSfomhEHoxcVfUHGYv8dvWo5EMvVDUPwWBufDNvveAmzLBCAQ9f",
  "key15": "BdiPgMhtZDWQADGLjgADdvAA6EX68W2Q8K5hCPZvA67UAVu8J9B51zPYMNvj1aFhUbVJK8AMg9FgCs4JBbvtnQG",
  "key16": "2XtYVVeanta5fMaPPsayHB5jV8SbXmLhgxvsS1ABxZLF3CNxGoLuExQa6RocakbcDkxdbHzd4NHfkZmw1XTdaefW",
  "key17": "2GHwZoh4Cz9F6MZ3izpmXSf2JC7vM6UN7xKgJPFA5zmKA2uSgLkysJ5sVtfjwFD3NKUVPPyMHYHv2JM6Mh295M6v",
  "key18": "22wqdE6iHZwjtF9yBgaUBCuhwCe4bPwFdqYdY7zJcyhpRJVy6N4jD3iqYvwVrkg79nNQTSTTiJTjHPygfRK4bwiT",
  "key19": "2Rxw4aZqekkiiirBaiJcbb8rdp5t8NbrT39wYZ8LYXyzAF5kMvdANhvJjvesSARfFC1tSobqikLqg3DBeMymaqWR",
  "key20": "3T1Gekc9gjZ915cVwuvCpYT617kA9rm39pf7QqUjr1Unh4tPKciruxiLnGwaFhBdVyxP8NDkBtABV3nDcXfbW27w",
  "key21": "2vuChL1p1QawMvXsxnnqDXXbjyboCUFwKNA9LvKb5me4RvjAPzp6ERsnkqeduRgvqgG2vnpK9hmLbQuqNdHiwJM4",
  "key22": "2k2qHnD5Gtp4P3iBtXB2Jfs9z2Tp4k6xMKoRzV7C6paADNT5bsWE1yzGGh1oEieaWS2dkE5qTzELAhMSfLgu1aK9",
  "key23": "3L5gqw8yJEfcQu9bzw5nvzccYWfHuovZYKvB9LfDNo43DPEVoH1BhqqgwXf6CDeGfsZvNg4AEdFZ5Dqc7zM8C2ZR",
  "key24": "21Hvm5EanDSybJ2RoBJDBu14CbFG8QsuvSicnbU4wbx6NbSQwWbp93EaVEtJLPfofyPZPyyUqpzGuY4G7SHmetNk",
  "key25": "3VDxVRtwutEJXHfwf735vnRqTZ8y9JL2jz1gSxyk3xCbaMshCpYJWkWnL7JKnpMrBRNZFxQD9cdTt813ouZMcWv4",
  "key26": "DdL9nuZHjEmpmLpocEZoAKPwnxx2nmEmyb28RgLamL4AuxfuYNqLbS18G545VE7J9ubVb5RxqHp3BcPDsyFScfJ",
  "key27": "3HdW82Weq1FeqzY1N4hRNFDq69HmX4Gr4My7xFR3HgzbwGQsN3Jojcu7wtMP9DwUZhcUvR4WAcqTAfqd3BVvtLo8",
  "key28": "49Nwq6yZG5PEf5sQJm8RGpWLxe3UVbDkrvZtt2GjPJbSvUZayiFD81azdHGKYL5gAaGp31unkSqxyaW11PqFd6cM",
  "key29": "5yyGzSKuEwWVTAcGTNt9reujLZpTpLdJAQrQ2C3iyfxtsATvecB5DcRVH6qh1PAgEJXaLZkNCQZF69o6c6rhabRv",
  "key30": "voq9P4cRDBr9rgh5xbPJxAZzLbh7oY1g7DgM1qFAhKGtcxgSLd7YTFAiKAPRiSg235eHMaB8GudWrsWo19MwzZ7",
  "key31": "2TjV5xGaepZ5ksrtfqx7CBYHn3goiG6Wtj7fd1NSvKsrjvMyz5y1VxwwNQZQ5UeQsDugo7FbW1SSZtR2WxBvwYCi",
  "key32": "4g9rt99gWJapXNgzfxXNbzYwGH1cnyY62KPfPrb9oui3pbb8oXadRRhpW3atX5MQAcB7UZXUnmDFxHzBN5naMtso",
  "key33": "5hJ5fs7QfuDhuybbNegSvqEgWFCkAvWDzPPr6Sv63Yq68xRVoMwhiwdL3fX6FFPwWeJbf7iAgZEeqJ5bktPaQdno",
  "key34": "4JTpka2GQfhqhi3V7a84vGwpyNFncpdVZ1ZXzi7zNFSM4RvhX5AUvry8Qc17D1GDpbF1uoGex2Hu3R7zid1okVDf",
  "key35": "66ujtNgTr2iXf4vgmzbydTKBCyAedzUZNyyekgEewRwKoooqeRk4Fw83dQDQ775nhWaj24vKC5MF5bFL1JPkoTku",
  "key36": "5CdWjAwV3V6Sd5Wn5dp2UUst4Uo4e6PNSeQ9QyTvCvjNqXDpNkd54XeKUiLTfX8t6UYFLNj48vHZnykV8QryxJUY",
  "key37": "5Hzz7Ly9q4LvccFchhrz8gfbZr3ndqDcvcY45JxiXPmcsmAsQEYMLCLbgZNvM6beDGxrdBC5LGuBUzA3uuSVGrQS",
  "key38": "3FX2G9Fzae1HEv7UJvhzxxLiH8GnsNYp2bTwQsjv9VNccJTvqsBTxDfMEbU3hYmoRA2nmRK87pVmoMBrsyXtHnan",
  "key39": "4V4PFer6MqUgFSsorMRcmCuf2oKGcrAfYs278H8zxrKtjGLxqXCRJq8YaEVFEuJBhxJLNcqdUZd1mq7DjGAMHUFN",
  "key40": "5heSQ151AB3Zjpwpd2R5XowouG4QuNnZcY4matn3qrWNUP4vCHHR1M68mBthRoP3SjVEsgZbvDaExN5qUf4Zptkm",
  "key41": "3oE5xv2M3WTUuZ7YPBgMyPZ4KcaW65nEhabiutxsB33uqNK6FQio8xrcvrcLv6uCEjGj5zv3cHtYw7gTJsAzuBNU",
  "key42": "4W3o9iLmyATwpser7G2y2roiWKDLDemCucgvAk5jMtVQcUZ5BibagAKGsUmUGYWgYUC142gRPFxCu6EByoZP4aga",
  "key43": "F5Qn5bdKK9eZjFTrbrqYxuEWjFrypvuiJB6sHRqjChLu9M5DJaeYAdrCnQJ6xkiPBrSkH6RzxCUAJHJ3av9Hny8",
  "key44": "4NFr7oR31TFGum4Vpncny4rU6DjHUv17weFA56cwXCWNMVumbw98tdZLVkkBEGDhwK6QFu4PcioB1GPyxNbFKncS"
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
