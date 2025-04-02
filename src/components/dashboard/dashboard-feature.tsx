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
    "3sxHSLU1FDpwX8sJh8TGGEjhxGf21GmhY1bMvMgqHJAE5zL3mRv3qgsvmraMUamx4MLb4JSkxCYK7bcMAwr4U6em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N35reVAGF9kWuBQ8x8jUYM355B5faQKbukgq1nwFyDws2YBfhikMtmDrAUJH1xMtKg5UzZYoZVh3UoaBcSFe8rj",
  "key1": "GhNWE3vPVCxTenrwQ6i1MsYhj3p8D5Q3DzrTY81vJdkqVKH8SJfWwJiZgKkeynT7eo9cfMcR8jJtsfwwX75vJLt",
  "key2": "5Gq5shptLJ5EtSL5PvpKi9ekpC4eFzKfjnkPSdrmWN1gdnW94d2QbtHrrZnRSd1CBghbcXzipSJf6uV8eoaYp8v9",
  "key3": "5qb2RLaGAvh7GmDa1fXqetYNZzj59tnhJBVcp1heoi6BPt1qiZfpsFaApq4KSpX5R4zVSGpYTdCf8CERCum9duVC",
  "key4": "3qCKjgGLisGTRFxXyw2BvJsgefrfUmmhYt4wQCpRoYMKGiw2DzrgNjCsTgBST9CHUAafRq6c8niNWuRZB1aLPDLh",
  "key5": "5V8zDPwWTitT8FS9rHuD3ucK4XuUnU9SSrkL2yVQvbD3haFwLficfRsGykJQJhN8sqYbfgkZwXmQiJZyFgWqnQMy",
  "key6": "kt7z292j3DxkmaX6q7DQEcuh8Tei2ZHkJXAnKBiyJ6izTGAzdDiuSNec299ooWw1AiMWA6ikXRzbPTN4v1taYUk",
  "key7": "3wFiKZxm5iEPCJHPw74DTkPEJptMnx5Qe7xCe5QPkXcmLLNtYJQ8bPyzASKecS1Qpz8kZowCZxuTgw32faqyGYVy",
  "key8": "2pcVCWrgGnBPt9nPDr6h7RKJEsfke697YD2m6o3K93rzBfBe1xz12TeCg6nQnoJZ1Me9As8q6AGA5Bp4eGgLWe57",
  "key9": "5vFQvmVBUMZSSc8AF4dr2Xz4g3mpuVuNywo3RM5N7kDCGrhepYZLWFVNPjUonLQ6eExKxf8qbk7DzWWCzufbxS8x",
  "key10": "4nwTprxkmnFBnubcysmc3XcC8E27KC3NEp3idqZfcyqCT3PEBHzbaoHsxv9UQ5RWFHWH9pph81bkjuhJi3Z56EQg",
  "key11": "5niybCwiVGT28F8KEwxApcUJZFhEAHAuTbSYhJkyrMRRPHje6qoZZDuZNe7zx53RJzsSBd4xTKakjmmZJm1PGagT",
  "key12": "BYWWWQuXzGrvPTHuioBnTXXamXM6FdgVF7EWvzzjTK9AWzMkujfvGmzGnz4yitE1dEzo6RsPT3BGpjgaECMoKZX",
  "key13": "3JjpcDubTg5fPgHYuBAP2CKCWFQ6kup8xBPvBeiK9V2vbreqvNsjGA6CYbz8uQpMV23hNJSj9ucjv4fz6z9vN6ho",
  "key14": "3MjcqezK6RcTutGkkFsE8mDsYgx5hewZSU47nJXKFb9iHWCi2k2NdwFcVobGGwpMbF3aBEocFbCRibkVUhZbpXLa",
  "key15": "3ViGEhKmPR6oXoUK96BvP2DxX2uMTieN9jVrErJ5pTf7hiYubj1Kua5bo69uAgd5TbDmKtDeKm6MuW8MfdVv8QZG",
  "key16": "35v1WZeFUmUWxtWD9hTjcwZSuw6CeJ3FbJD1aAH1FbZTHiTKHNCig5hy3Bynm8FurZy3xz62yWURDEyANY1Aws71",
  "key17": "2y3gDrxRUGgjJyFuUaGhMgUgVie5tgfE1Upq4hFu9sY5U4t7RYUvsdvGneNSU98ZpKB9d6gxvUVNHuhPYp1DFJXo",
  "key18": "3x92vhNGhgCyZQkp14SCnsBhR8PByt8kD4NtphLBjncxBDeMiMWYWw6FUAZjqwm6GQFzTSo31rtRjNACAqrBuoWx",
  "key19": "4d1fcWbjZKB6oQMYucab1UuD4W3WhFNpgG7zjqLaTEWyKvMRbTVcrokUYsZdKst5FXy9mvyRGu8hvchYxuAgj5R4",
  "key20": "3jRvC13o6MVfC8SLHoFeo9U47NW4qzGAK78zApmUjCuSc7fZx6Hm67xyw3MoDbxekvznmxk8V9v9yvWE8iG6hKy8",
  "key21": "3cUR2AqSH94Kp6iFkC2cYPKGMiuHJWXaseqTje8MCTB5oyNckyaGTvEs7dHv6Y491YMARA76AReoKCRc5F5foyTC",
  "key22": "2Jk3waC1twDcJ6UDusDateCy3Cg2cqR76yRhqXqC7fbCnCaBGfmyxZ5HjhFy8mb4z7y1iqieWR4LFwq2JHPm6c3v",
  "key23": "4PFYmVsBm6CBfFDnJeE9gXmUDoMahcXHTD1ne9rnE8E7ZYiDKzXus4cs84AriuSC9rbHDK7fBXUESN1NEB14Liwz",
  "key24": "3FheNPsDdECbX341sgPur97n1EKetusZaCZcmVUJUti3cyYYN94SQTJcPn5UXb7ne6csDgkpsSDpoBeSpBFurvGz",
  "key25": "3p3ezHGFMLBB3pceiLqbpq26AX5ouUNAKtcW3zrCSftc1LeBcvhhnpeCA2Q19L1aprVAEyBBp9MzE6sKiPSSfZuW",
  "key26": "3BeHj4kgeWVtVaso7wpRHvdQaCy6e6JEXEJMajkfgaXQLFSePiYqLkfS6bL1WaNmbJnkdC3MiFe9wGZCanMYNDQF",
  "key27": "32eGbvwzh4mPgdH6EJLSgM5jVB9ZeSLD9SUgERAiKSV5QpPCiPxgCsY1HmC67Z12NzVRTPJ76Y1s1cdLs9FCnd8N",
  "key28": "62n9gaA6bE6bDnXTahpV1f1Fw5h1ynE1Dn16PFeQt2ec6DJ577NmEqhQejkQvd16kvcZoFjtK7nnnmR6N3geqCup",
  "key29": "5dm1iBkWjmEUSWWnpchPgWkJvBMa4iiCARP1aFTfFdpmevUFLbzoA2x5dQhHWQA76zkxaCEuX63JDghHv9KrmZe6",
  "key30": "2rYvQnfUd5wLPkVDGUEmrCXtD1fG9dKWZfdddjAwowKWcwpEukaiXm9ZL9oYL3DdcDZDU4zrMasNTDh4C2JYdn1C",
  "key31": "5XXRdUD7xn4nxhYp73Qmj37DEsxwMYNC93Xaw5dpa5cQeYqzYKWrjAqQT6ch8szd48pHrGQVnRf3GS6Bn8zjmNaW",
  "key32": "5KGHXvNJnppYK7P17oBRoHo5GeKxP2P8tQMNaAmDGbfUMynNtm36DUxDBeXijDUP5TxxNNqzXg4yJPKduKp64dVx",
  "key33": "PH397UrXvLvQpsKYqRgAh8b85KE6GN2ut7EoPUZEaVFGyG5AErEcgXCHE2ybAvqmd4XDE4PFdAth5iXRjHiNBSx",
  "key34": "48dLNeLD2KgsmZh9sJ2LH5VFsoWyDyLsWFSEEUFoxH4BXz4srgPMqhZTju9EKmMzd5k6Y2UgL8pkdwv2cmHAiwzn",
  "key35": "4RLaydVXoARGE8TPxsRnB5uxjARqEbKsUf7wUNVN8t641xrACT7VRcQ9CySWMHSBtr2NMqphuvuqZ4euUjD5hmF",
  "key36": "35uvHVNxkSBpffm9wnDDWUkG5sC2wtZYMvhCSMhRgppWhkCBXSGT1AszQa3cwQ36eUAJPd52sJfVaX4GNmoFuWPV",
  "key37": "2rtnvyYMLCewVr9suqhUyYiFcXm74CDMnCqiEgz9ZjzQEtsnKHsrVnmygKZCqmgXg7jRe8J2ArevECKWWiNxvnLJ",
  "key38": "4EWxR3tLpMMaopBaqVr8xnwgv94z6ZboPsNJ52T4b8XMzq8LSKoyxTLQfj4HMCZ8CLVfB6HraT5QCLBvqxN4PDEM",
  "key39": "3fk4dhFBqBAbXhFx1q7RdJjmjrDLwPqp3twxgQiPerJbiuN5vUEFj5oqoVQ8rwtiCqwJGEbPCk34qQ8VFX9jeKFy",
  "key40": "51BXoegLBs7HYNCyTCTxiGuie3w6W2biLNiDGcRsMg71gtrTZeKJvJszLipjAtZayiu5ANQwkhcszamgAnq9btbq",
  "key41": "5ECmf5mpks7Nss4hkEbtVACAaZ37HL9e2w3CckkoaeipsQ5F7ZCZYUtrGFxn5BEQF5Cn6RXFHxKnzYfRbTTQLHhR",
  "key42": "5wgKD8f2pmfQB2EQcRhL62ZXtWhJoKSHu5gzf1a4jLoqKMjF94h4h8DWuK7xjbsivoWLyNeBzDxQoPMEmtLwpdwJ",
  "key43": "2E7yfrMLr6JnDntRyJ3DxkKW4StxgVgwX6L8PbPTGDcAJPiMseSo3E8ZABygQ89dmjhzTZMMMjEVcWyDMbMAj4qg",
  "key44": "3YHrot2nvSNkD1vmJLGYK6PTegZRtcmALn2bM8GDn9mx5p47U26qL1FWxSeHyvyfMnRuGXsTGMdaAGUtzgB27xoa",
  "key45": "5oqU5XZHDVYzxYuBWQhDN51nJuDRVvWUW7y11kz7anESuiAsvFyXyqjdY6hdhwcnBPpaLWcbZeG6tqNgaKMPAQqG",
  "key46": "3ng6FYEFeBaXjuUdNko5gSURmmxN1LeJRGUQaTGCXL38NGHGao8cKDGPXFsLAoCL5aqVgbuFtEBSAX6ohWKXNApG",
  "key47": "LVdvK81SQ7jPqJquLnKv5eH1f5UxfAFmbATFdPAcYvTn8bVpQ3r2VS5RTq5VL6J98rFaG9wzrPCPkRwzGBc8iri",
  "key48": "o1uVRazuJhocs1u1FvYbLN6MA1MTLTBwCVSBMdWtKfSz6bNvuLZ7V5Yx9vo2Dmpnoxar8nz5UywrFyvTiCNcUVX",
  "key49": "4h5AonciD4JErmY9sR645wT5SR16o6vq6uwFT6cqMtGaDbDNdE5MmBSHiuSnoRLrbUWdh7HBkqpCgjXKw5MjVyB"
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
