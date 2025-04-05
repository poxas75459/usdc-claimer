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
    "QpixH9ctQsti9PnjaL4DSS6cN87r52c7LXW362LrcpQuL25pxjLbzNkT5bcSKPpRstCPMPUiZRnb7s6Kv2bZndY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYCA6zETM8jMaA9VQbhAJrfQU1BEzQnyCJinoovjgnout7iCCCgoK22H8qpKNy6BfzSNr1zzycQw1KArJsdm9jc",
  "key1": "3Q8q2f727vRmmdgUCKig7wM2PFbDvefNsa6kCvHsqfBwbunhbSdWcEPrgUA4cqrMpEp1cHAzgMouUkEBAB3ew5Tb",
  "key2": "3Kmh3Z33heQnfXS8agDsyGfGB9C8X4yh3TCeEiBwD2YPX2wMecYtJYBr763nev1ie4H4oP1Qy4W31e45xsK37KZa",
  "key3": "2hAaAm1XvTeuoEaijx7LLL9BgCFQJGNvToB6f3EWYxph41728VxhY4saSSXLYq4A3JaXNkrJxT7J9Een2JsVutiT",
  "key4": "2BPxNr4sNGiFZQPPwwTNDXuVu7ZLYrxMvb3p3Yi17UxwjkAV1gFa4EDw3jP4XpbqK4s1ko3TRz4Ymq9qqiLBrRAu",
  "key5": "5XvJstUoiydNEziM3poytS5ACo3KcDTUcFMpnoRYbCY2KVGnQoPS3gXkJJMjp3TMtSvs9of6nr2UXZsGesq8SaMg",
  "key6": "3i1VP716LK8XzaaVWn9mrECXEjZCv4Vn1J66mDrcw3Jp68VD5gQcJY6NKjru6YxkSFkvtYZ1MdYTAezMpTWEzDgj",
  "key7": "2UpANU4w8Ja1ktG46ULnACgQNSaCY8pRCGgDeBsZKQzwRQENmbJX9HVC36EsrweAkokbHjE9VC49mjvbn1Z4kpU5",
  "key8": "677jBn9R53LCe6R8qBs5HSYq3VGcgtGGb91CRnw9qQ7e74YMbHwauGCMkKNsTaxGrrwPQrZcFXZq2UEm2JfhafDo",
  "key9": "4SSXzBaskzjaqzQETBXkvpfrrt5k8hUeGpxNB4vJqxg9FaY1w2UZzTdHiSjVcU3onNu77nvsxqForvwYep9PtK8c",
  "key10": "2kaA38HJxyF2CjYJX3CujfjT682THkHkTposftm4fHt2kEGQEjUAB6U4WrLDnEws72eW2dfPvHiVrDLiKj4G5nsZ",
  "key11": "33stSgrYrj7BQ7aFYGKx6eV7Gu2KPZbNQTshiuDakMhoEd8x94KmgaHDi8aA9bAPG29u1UUG1Ax2W43HtwfvoBZV",
  "key12": "2VC52pVWW21VNXbpXEaVAogUEM3uZsU66f8bNtiZHT2KZ61PoBSGpHUsEriRQxyBLfnLTq9SiNpCENXgsMJGCnDu",
  "key13": "3AQfu5PTEmddTodHC5ZzxWDvYoC2KCqbJ4GakPkiogs9iFtj6KX7zXU97FvUMMZkwJY5PAWN3zJ6vHBwvv3zTxa6",
  "key14": "JPdBmCYK2rsTuZQ7QRgLafBKf74PjbSm6DPetn4tPC2tGbDuBn7xKbs2u9W3uarCawW92W39ovEQURmE85j5cwx",
  "key15": "2XfojgBqZdLmDJaZQiYwdQEP89p8WzDAPB3tBwdAfP5j7SmkinpyhwrjAfguvgx9j2A41SYqQTmeR8WCM7VMvCu9",
  "key16": "5B9GZeb36E8Za9JX9cNGQzVrs7f9Ui9pxEnCGdCQhgo2vRAFCo6mQTAgXhxW5SByC5GbFCgzJtzNxYuftEYGnbWv",
  "key17": "9Tsqb3fgN6DoZRkWznsu2FY27gyg4wLAket7p6JFABLpkEkANxaPkRrKNHev97jrrBJDucMrjt7GrMAYzkwCfCL",
  "key18": "3k9pi7j218fBHed2PnnnuR4gYeai43fQYqCQkzcKj8HKU91i5qh7baeXNyP3cNHqXHA1TfLPAruCrV2DU695J2PK",
  "key19": "4hBSSnBNHwrRKwYCXwjyTCW2yMGVzEk2ZXX7PNMmWgGYvP4BtCPVyT8kDE7FSLA1Th3Km5MHMYNiLCuEuxHmaNCn",
  "key20": "5gfSgLQb3n5UxhQftzQdFfRga52dzLDdVDNyjuVa3LzrED7LuwMUHXEV6AJxdaw4rBnU72gskPSX73CYLWMRgS89",
  "key21": "xvJqJMMNti2FemL5zVnvr3j2DYLrk9eketLufCjfejpVZAzeNuNLgv8rKFXyLLGj4MzqSkau36fZFsVLbENRgMD",
  "key22": "33H19kcmd1CodxJ7LQJzasUntRWoBFFVaEK2fC1FEDq19nkuRoqmT6xf4fgct1bDaqZwkXbMPxujip33HQ65Mb7n",
  "key23": "4ZBhg1pM3EbArAVX4L5kBdAPbPFFQ8AxiaHSHo4EKbFFmw1Yfx7dvj2Q3njyPKcd52WHMSqc4XStU8zHuPCJ5bBB",
  "key24": "125SHCRFhSVGtvUd5dX662zwN2D1duqD42j7gEmUM13GF3XrZcjkC46sw3p1vrrS7iEJRqvLhxYCqyAMzxCHaygg",
  "key25": "4ezk38M1Jv9MSy2en4THY3GHzYXEtqrJrrCdoyXKQ6evn3mnzjZPEaqjQLFZfHbyi77gh8AbTs3fLYWFSMjBPYZo",
  "key26": "2KVt15mVNq7jvwdtDo3a2CigJenuBGCHBBZFTfHjdqk6y7L4JGTUn6h3vKDivubxc1kMGjXCPERmau3mtYdMvPX4",
  "key27": "4NZV41WZu8AvhHpgnVyfdELTjsVLwae58jhAGAVf6K8MUqX8X1g6bu593FxnN4xZuBRcoLPsLTjtpn3Yz3yAv1zG",
  "key28": "5mWnRumTkJRPhLFFkXfTnPUcQG7DvhJZFy4cnuu8m8XabChxymD6b2D2x77hFR9Z29jFy7Exm6FK32XANkJnimUV",
  "key29": "5YiBA1imsynwEG2S17fuaMQgsTrQ1thHVcZfuJFAqrtbwvdKEfSdecHywMXdaXEmn2ycSKAoduJGxpPtvksCQ6Yk",
  "key30": "634Y3G4LtuGnu1chyP9iHkK76BGSYNagyBS831sgRxGCzzK7SQQq3WJzN9AFwcwUyrBEBR1hod35GLgwiLGLwtRG",
  "key31": "2LXyg9QDDUhn8H9Jt7eMS98qkLFcFp6vugDCyBLhWExDhGdmVsbeY3eDuR6tuo9DDMcPD7gL8XDvbtpQFWrHgXkU",
  "key32": "4oW4NvNViBymL3SUba94B3Wbmx67VKFL6wHiJvKASrfkrfM97PN9VQUWBED4xZJmqknnpDCDVFBgVZwEeWX3uo1j",
  "key33": "uFEUWCGGUbcvrGJkJWUf3NKvigRewVXNA4a1TUuPyGnxsS83vTXBXrE52J31ry1diDep1sUAEya2c9SFALWY3ro",
  "key34": "339XTdQnswzXwS4VXsWER77EQquZQoWUH8E7jNz3KHVp6txHiURMsgz7SnRGSaGHCAPswDefKbvLVdGrExvTvJtb",
  "key35": "T8zUDQT7v9wUmHhFWQrkaSoF7rcrpNWyDyrNp9XQ1regFnN85Xo8wr1DTJ96gznYJEXtjdYewgZBu5CyQbLCxU8",
  "key36": "3VaEYM7vtHCNGwmsh1XUXPFNGobFooMQQMYYgMjpHWmm1U3o7bC3aXLSbvVbf15gSVrLHCjAzDn2Cnis1tgeMxhF",
  "key37": "4y1J58AdoRNmGXTbhZ21vGWWa7io44JCSAaEprDYhSDij3zNPbUDwVaUYvfgau3zXuJ1J2b7Uj7FeJRmcZDaTsVw",
  "key38": "4fPGPaoxJ9cLgzJNFAqxaTtfo3VFtcYrcWzv93D3VXrEE4z6gsShKfj45Sowpq8zeBkjTuUz7i7vjC6VgvSWzGb2",
  "key39": "5epSwfUZLEvqvT8hGaqvoLxs42JTiZfS81wveG5x2LVxjMh8zMHFbs1tEXawbJVhtH7oFwi79u97ZLxMbcoGwLwX",
  "key40": "5TPvJgUmrmPHAsgXJpLuhXQugQnVEjQ2FPADwFjCe2GxxvNHH9b56XnvCopgzJfHqrUqtcRQ5RXujD7jXoBmyoVC",
  "key41": "HyDz72WjnTqRvShNZVKZJm32UCxjqAxBV4hhacQU4XcEJcXVGX7gEJDyLBCC46g9eo6tkLeSrj4ZWNTE91WXKHp",
  "key42": "4zc6GJV4i7vWPMrPFMEpZS22jvmEXJZhurPpAzt8dHgrFoicZKHc4BGfrVkFPRMrzzJioQiadcgCjRnmAxS9B2kq",
  "key43": "4CCeJBBe1UjbzJQa8BPuMyXuiyVW9mqYNSpH3cT8xXnZffKo6Q7kRbFnKMdN2jUX6yPKmMxPwNui5hzArQbzKdHm",
  "key44": "4feVFgPp8WEz6REdJZRZAbCdBkP1MfZvgu84Q2rJUmoVcUV6if25FKrBMqTDow14viL9vNARcTNfzttxRynT2orG",
  "key45": "Cjph9kAjEhnX6d1yghPUPqWPGkfqejZx4XLHKTEbjhGb8kjeZ2amsM1w3BqqFYCqg4M4p2tM9DjvfnaytPQViDd",
  "key46": "2krdpLJNnrWWynZYcm8by22wuNyNHKvzGawp7JgL9BapDKpeUHNm8AVG6cFdzK6jeMnqkEUBanNkYYxubpBimZiW",
  "key47": "5AfgX8HsPtvgsxeBnf1oG26ydpjtr65P33Cn99C7zyF6rNna5yJ28Cy84zohR9CvkyqJmWnYHVE5sFMdtj9z3ueU",
  "key48": "3ZzEHbGVdULC3Wyy9YFCEKP3gwSAT4CYhbBVMQWw1dSKdq4MCP7y3VsTKxaa7dZ7tRwqbeLwUWwuGZejhjHKsqMj"
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
