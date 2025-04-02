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
    "3RMywuRRT7i7X6FNZQmkeXLGQYYRvi5PBkVKp81bnYuhTi73GmEJ8j63v8DiKBWXbsmt6Z8Lh7NZc8xK2DobKDhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wqbGsV8ramf4Ma5LpdE7Lg9Z5ioV7PapLXZN9iG8ynrpfAim2CcnAtut36qZtrnZPaW1oKJmLK697hV3PHTSoRF",
  "key1": "4tKy5uPvgUtiGNxAGqHti76WvCkfTpHwDXMeiZur1uFWX43BEvqmmVBXMQL8NdHqSSfiyS8u1UoZ1noTKDGNYPrh",
  "key2": "3G86XGSuBrqNVrmQmjGBerCjZnc3Bh9hXiGqjiLjdLg4qgowZwZVojAMnhbvUN5mBqvc3vz39tm2qJKrs7e9xkxz",
  "key3": "kQYQwjrU4snJLNsfiFVav6NMHQ8uRRxikpKPu2P3g21qptbY4bNz8DWPhhNg9b8sg5P9HS6Hje4DPWNxBferGrt",
  "key4": "3b8AaGH5LcG6PnyC2KkpGuf4UbutJVVKGZuPtmu4BjMW7qxtN24tJL1P5kVypwioz6bvUEfWCXSZsoSYgGVrcwwU",
  "key5": "q4uwEXrbyoiCbi7fHDqPtyRSpZCYcndzAT3jgSSyYXPeJd1wVNqL1SuzVyEnpTGx5BLjZczbfw9bGM1RCN3rXRS",
  "key6": "657WgfVmmgFPS5s4wdfPkh8jJ81dbXE4mgGAKup956pNvcSHix4accd3CxuFQghgKxJKbYFZQ5JZk6EvfvmzDo7b",
  "key7": "53Qtaxuij3JwuFyVFcEnHVHhpGGZhTVxcmsKtayG8xS9Ycf7xjTMy21wWGFo2zE4tuVaET4qKyuXeSkqpwaGdtRY",
  "key8": "5qTXwHCYMs3WiVvmbddAMnF5bo16MEgG5VBzKFZraSPEE5uCcieqmM4jAobdzMcZxQpWihmFd8T35QZzgZSgfJsi",
  "key9": "se8nBZZzxyz9fdcrukj3muRppAQqdQcScA3MAM63QFXfeVC3j3Q9RrBfpCB4V17r1tZb1QfnECjicBxf2SC6y73",
  "key10": "4UicErvqp6rwTETaD1gs7bpjA6xDfpYSzte8kfzVGGt7WxD14YqCWzmKo48ByBHXqsZzj3BN4v8Y79yn3FFkVBZb",
  "key11": "2dWQD1Rf3eXBMJfQFCvwVog3mE5JcYaJbS5ZddJKN1CSa1L38H8BzgZiBNuNU7xNee2T2Jw6ttRxCUsSSyQnNGsw",
  "key12": "4oNG9o7wmnAKNoma6AcE9Zq56rcfTfDVYpnT5wfGbysD91f1tLBUqcEGkPPf4WwfiQ3N5xmxmDFuAqDdrjfJDJ6h",
  "key13": "5wixcxZ3PSHb7EDHxva7NAnG3EE4mJ2x2W11A7hg49GPxrC6Af1ezqwNrVBnxgDNYjszbiH8WDKx41F89AoDsfUg",
  "key14": "y3o2YKWSEi48gNeaRMpkBsEzJ1Fgn4P1nAjLw3ABGxZLGfU4qgEcx9ASwEfDTbqChHqudHGLMzxyoyZKLhZtt9B",
  "key15": "3y9twCn66ZSfkzvi95rz7gz6XjrfugeimEfunqYP54v3jUr9kPaxjNhWDzMdFbWZVVUJ5VGKm1dnV5qFsxch3BL2",
  "key16": "5VHgoVVNZTGGsyb1dUzZZynQS9HzjQkmeeCPb9T2QqXFRfBd6ioiVsfLJodrDQYYCoyhGihRaij8aXT4gf1xjqeB",
  "key17": "3P7vK97TMAoU7BvDLzM6nMCQb2eBbpPZiZv7weefSzZkz66hz8DvvQ8yjH6ATJAs3bBPbTGNQrefsvYzgD7Cc5np",
  "key18": "48YgviHLZgJdP4VoHJ5EwEHSo2KqUfsuxmb6fn5Mu5GDTFEAwpcjDM91taPkkX4Kn3FakBXbEDGMisn5CdS9NisV",
  "key19": "4uMRXnUL8G32UQnvpKkScCxoBrLofDjHvUDxgEbv4pAjhnpa4t7HwZmCVicLbJUroAV9AB8PcpUoPeTQMwmGY4rm",
  "key20": "4D8rRCUpaWXFfnWcSzgYe54YYcMEAQbLcumz57VRrv7ft1TeapR6pcUaSo8qyxJ11Deygn4UDjjTmgxs8q4HP4K5",
  "key21": "2Wg7nL5Q8fsJgk5Zyw53yh2S63Xs6rWMHry4V7MQiaZThc5fZJYtwDxj3Wgxa47LQfW8aM8cYPU4BZ1Ld5Jqr9Sn",
  "key22": "3xKwNtr8fMfZWHoc3KkU1oRxgpQmafdiVCAByEw97wTLDCjKAufKHSsVugYFcYRDMgXxMLtDSdBva13HFLi65T2h",
  "key23": "21Py2FfE6DFvtn7zB5Fav2MBnJT53WhjpHuNPaGNWYHCyj745VY8w4MGA8UD6NHAsyPYHzYZNXXb24gSv2WwR3ch",
  "key24": "239E7YZzgngfahQ3P7KqENvKy9Zczt9JTi9wgiP3XDVsUXqmN8HYUwnFsLiuMHfS95jcVhtA1ZjaM14M8qp2gvf4",
  "key25": "4TLnnuFhXFHYREcAbq2cpbPwhXquV2i9yfLaPtQvNpYWGwSLCam9KYizHkLXzjG6GX7TSTvv4HnL2zn6kSd1584T",
  "key26": "3H8HqyiEYbG1hbeYYnUa2oyqXztFiSzyNgcYwxGrTCM1L2AfA5Mb2jGrra1EJLFntBYWKLrEvx7wySY13XdmAQ6W",
  "key27": "5gDweE8Uf25vDv1MAoVgiGF5jr13oqEfKGREWZRDppVDRYAQM2Du7ojrxhToVJvCdcgFzPadqBpUZCjiycvrtqHD",
  "key28": "2FcAeFSs9VJ87ior3rqS3XfLA473U5tTyamgeVesZ9Y31zQq6SiA3XNhKaXj9u7YNYCKhBY64vk7c47tqFotewkt",
  "key29": "Jz76kVuBMGncRnfL8kJ2rT3m2CQ3u6qmV8FYwb4aZLQjkr3MzTbYYpKt8XDY914pH26rLgFcxkerUA1P5FEaLkk",
  "key30": "4H9wTs7e5gbqJYGuMF7ALgjGBnpYquuAsqwMuSpePA29Veo34tFCwZ8ot2vXu5eMxYgrERTHjb6D7vwi8nZudSiS",
  "key31": "5PtC39cHUgQaMKz44n49bRFq7PCHL4wZsEQ9qpLYmQkgEcdKue2p6FoEYYnkM5iA6wCn47ox4ioBsKNwgJJTB4Pd",
  "key32": "2ZwFLjrVQ2FkTRgTzWnFc6Zv9AGj1sMMFbT6SDoMsbxg33USzcHPrEdVbSfem9AtFfGZZhsaX3HzNncAyYqWZQ9P",
  "key33": "4WyUiSBTbuecCWUQjE7JHkJ4JSKKcreCdK1JKPJ7Y8eUwU6hJni6WxaXNFKd9Rwxcc8L6a8SrmeHDvxmAkXeVCxs",
  "key34": "5EDkn9zAbfwuCVALHnWgad3wEqSbvC8iztXrcNhNdm15yJGTF8dqjcxwJvpoUdbuyvJdUpR9EThAEVsbL1ddZgjd",
  "key35": "4NJZzNC1vSAhBqGWchJKVYgRDSBMdsRTvqsh1vBrJcG28oJYg8EGAN7E6C6Ead4DGjB6DcmVAAqkJWxNXTyKPXDG",
  "key36": "26kUDp5ATaEd1obWihMGCeZWbTbk8sCkSnDR7BeYZztLH7EYFk8sjquy1zT4yqHgAKtXg6wKNXXAg1rE18wk7pYp",
  "key37": "28eoWgFkdHWEUreo2Uru6mGThJQA8FFQKLknVQ45mJjPXj8h7r1LsZCbKcgKeJPjqgiTUPxLLcMgYgzSoBMBijUA",
  "key38": "ZbeRLUt5x4sGdn99Mrd2iyJcmtwwxzgBRmK5e34ivk2ZCCkbCT5LgxWD9rsZqt485qANzDD2LPy3Uc75nmnbvcU",
  "key39": "52FXFgAjkAtqbHj2oxdXLLghAo4CtD6WMey3NGWPunAQ8ZZgEHeFXWWFFehervrvd3kwwWKbDSXpMq5qCo9WSCko",
  "key40": "2QnpfHDZHjGRfTwC952dEaekX3phH28tmzNa4YA4Qo5ik6poVRWNatnELJPfwtEQHzieapvvaX1WCHKh1hS3kNdr",
  "key41": "2vfMSKh9hRiTRyTrmW9SfmWdYpdoXSCszySvmpq1TQqcfgh6KVEzkbXJmKudu1ewRTU8anCjcB41oZJ1Gt7vzXY3",
  "key42": "1XLBqb73kn4YrMjiVVpQtRHHex3g2dAxBsniZ6zKELNQ4Eb3TNzAj27gVhDArXrWHB3i1iqtShGQmbnxZsgAdcY",
  "key43": "3FhU8EnKEkTAAGc13y1kPcaMDM8ygGuBGXfxtMBH3XyL6HnabtypsQFTVNhhS75sdooQCijV5ixrY9qTc47wxZtf"
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
