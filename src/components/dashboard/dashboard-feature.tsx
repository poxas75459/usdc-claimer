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
    "tKxmBfVNowASL2sco1M5ynyBenJ3ZhDGM1Ajj5LiYbB1k7XPyQtPGA19PCn7AR7yLrnnPpbvtoGfWPUHQvZeWAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X54xZ9DPi8xShXNNrMqsF2i4hDLUVuwNXKAX2diEbqAPrh49fhD6eEPeL9guN6Wq7hrocTdAZmV2FJmqk7P8vNQ",
  "key1": "3ExjyANjahc7NGBjH67UKgds8dfJZTH8z12k6qSH9NK2xmG6Xk9uXirpwWTDodmxzTNeFTxwBUEDUaUG5yriTRgP",
  "key2": "3NcUth8cXcSc3PsTr5uWBePG65KGAkFgdj5oVKXRGt8ZH3sMpB5zxt7Nuv6EcjhNZXpUU6Xqn3dmikmogZeopQgd",
  "key3": "3wVShpiojY6KzqobrJ6Lqd4BFTsmFEbF4qt4E7T9oaukuppxbENTU3PwgpMYo1HpvaQAbNZbisj89JoSghctbfxr",
  "key4": "5nk87ttz33V3ubobeSomotJg2jEzHrEUKqVhwHSqxcvULBrJfWSNEGyt7W8CKmJqkDsGhvKwGTwHdSnxZ1RfG7Zk",
  "key5": "4aUFc6g9J1NAbbtD8Q3FDiWmD9VTZb2S3WeJ2uKSGNnDxaiEGXW69bPGaSqDUTBYDxHwXVCNjUPvsAhwfuGagDtA",
  "key6": "9mAE9PbgBpCxgkUJijGMKtP1fx2bs1CBrXjqQxi9h2MPSE8FqwZA38A4kEC5ycDcZNcmDemMfZbz95sEXsxboYf",
  "key7": "33arJeLTx9XQCeuhd2pdGMUx3D9VNYrHPwVvR6rRmvLCCYRaeVuNpPq8eeg3wXfFn9g7tvQCk3JwDUschosGX7qa",
  "key8": "3vBLcj3RmLpG4werAgK7ZDeEniX6jxYKoCjZp94Q3vyGBNqyLhsb1DJedrvk9cpqQpdeuQ31qpx7vsRZKW7vZnQf",
  "key9": "57goX6jV8gy21UwU16J8iAu4p2S9QWeCyXaDVJjhajEnG4bS7FgMZwZZM2UYoXtbWfitZ2Ej8rrpqEdepQrsnL6K",
  "key10": "3VFbnNXQvunCiEGkvUxfpB2NCNo5DfR9eAnVrhUXuSJVV3akd6ZUpKw1ZsYo1uXRg7fENNiKm6Ue62co56Ya316K",
  "key11": "2bF76paWQrX7nRgQq6bijSz6gn2EJrwqJd2HRRRscnucY6nccwKvmjF5oguXsxwov8kwSfAiTuzAVJ7CgGbbp9XT",
  "key12": "WMgEDPu65Cq7d3HVSqqNz2pGVpEoPfBUK62nwpfgN2kFzLtGbEzKiLvz7N6VkXhQ6aaLeRYYciZkXFp718EjFXM",
  "key13": "3RU7typUxvm1J8CQ5mmCQ5XFnggN9H7i6tmETsSj1A37kBLsYipCpeiSpJdkd17X1eDxeeu7iD98oQTFkt8kF66R",
  "key14": "yWX1V97eiXBZf9rsxQuFLzuiKJom7PHkrm46GShkNTVf3tLdhXVmQ6m9RgH6TqhtkkmhJWd24p94qDu8ZxJUe9t",
  "key15": "4jKKFgC9xY1gAVn8TSPdh1NcuzFuMjvWwb9iQHffRx58xaDhRbDCdH3vqiT6vskFrgDNc29JAskXxTc1yvTuQkU6",
  "key16": "2wQrQiozXjQCiL4Ad6QiDSMY1syZsVe3gbVAUUxc5u8tv7TDtpPJwVBHhApdN11H8sn8vBZMPGwQRLwtpgc2E7S2",
  "key17": "2etEh5JrdWUobuaU3bpWVrS3mJthRp7i48qmXxev4L1XAnShZPUcwEksh7dpsKP8GJeNdxGtSyR81Nh8gGKDs272",
  "key18": "4hYY2LiMpekZvp11DHRxypifztp72z9kUmAoafd1GGmxt6XGPtiTRbCwXr42zeUF1JhnuHgXmb4es7W3ZUMMWphf",
  "key19": "yL6gQAePFhg1VGH7H2MxMrfPMrWhviFZQw5CXSYHFsV9Ytbze6L7pN9EggkPvVEJ3sFsqnHdTRMohMJagJbSN7J",
  "key20": "dLs55t9ZDUYMz9UvxrktL3g8JVrdr7quDpow9rpRtf3Wgbb1hD53eQyJtBxfSpw3sNVF7dkW9HYM8QPyWhyYwV9",
  "key21": "4oKDRR5NXiCbVdFj1wJZ5XFuCM2BZ5ePhswoHuSJUpGQjs7Cd11pVkBjvsSCqNdea4Mzq4ycGkwfopXpqPoqQ3UW",
  "key22": "381rgFjdTr648Hxg4tYNHBHEiPkJzNW8bKB3bZ2bpqtrNG91HEcvrFCvjnx7BcamxwjM2ZJ1rLfGBTN3VXEiwYpe",
  "key23": "38x4KFHz979atTrgJHk8Knu6LeXLq4Js3jRAjfYfXzWNSJMT5SRe6iCWfF8Sfa54Kx8CAMcNEgvqScNciUQ32uUv",
  "key24": "3kcLZxCbs77WrsURGZNULJuZCFK2tbr2E5WmjUqcEVXpVFoMXZJ4SV97SzswUs8MH6UCBg2KbRwc5yqquTjRuh5R",
  "key25": "3sVqpBga3wGPxAYxVY5UCmCwGPZUCe5ezid3EGTv7n9EqFs9JJVwmnwR84dhMgxSgx9j8HiqovzrFN9EGfyCKFMX",
  "key26": "3hc4UizRkYeaxv8gTcEPPHVk6pCQjh4LGK9PYukFXZWqMnVjv4r82dibLfA2YU5hWHKk7HLHu2TnViBzT13Ecqse",
  "key27": "5fQaEemjh6fTi4iTX8wWBWkJdYpiWrU8eyJBvMnoN4E9JJoS99Gakfn6ubFbHbT63jTfhLaDW7Y3FsU1dpSvyD78",
  "key28": "2dFxfXEMf2Mt8Rj9t6uYFhUT1qA24KfZcJaCiRzZ3adWHSgWPCDzHK1ikg4Ldb4bB45fq4VZ4MY1k1e7RT4wSayb",
  "key29": "2btf8wXQ9jj8svemoPWTE2uCvHkKSGNcA54hyE4jnB2TtosTesbKpWhKbaf4KC8Va7CHBuja8n8XT8uwMCA7f5zk",
  "key30": "65ih8Uj8WiqrfRCqraPvkQCBgtKw23CaMVopJeiJsa16uknpp9Pp4BHWAH68Lt41zWxyCMTrBL2f7oPn3xjQdHuy",
  "key31": "9ijGSE6wk31gYCs1WdgFdrRJcQVDP64S6Ho1u6tpLXHGDUag4F2atMhRGiJodNj6hgmgkoKxmGkvWBPT7ZASi2y",
  "key32": "5XTayrQKP3MoVrjs37x694cHFDvWJnDx7kCupYLrzkkatf85DB6ML56T1R5ov3iSSRgnB8LkEPvnW3fi5mEn2CTw"
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
