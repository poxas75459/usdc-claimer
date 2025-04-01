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
    "rRCmJ4ox7n6hkg3wTTJW2Quk1xSeAWX3ruiB1XoGPjTR5T2fezgjHEmWmxR3c5YemF2LwBJGZH7wCD2ivpE34vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyhsacCo8iKGGF8GyhAXYqG3dXi6qtMc1PnkUgpr2K4hwgBkVJ42nXdEudbjdfXeh2KoVLP2bTND3TvmGSztVpN",
  "key1": "cD3QSRofFmW1BBkqZGuPfE75CKBGGBt8raDdSooRH4FRJENvsccwXtG2VihtxLNrv7Laq7eSNpDRsnbH1WgNbUP",
  "key2": "575kBhkWedacjUemkSy6QVbwZygYVYLMyR3bL2Ufj8nkNH5u85JoJWyAjKyvNFyfY64AmfEJ8vR6zGPe1yzx4edE",
  "key3": "2HJasdKb1iWuDTjrBBTnaE9EaouXGaAtqNSgyTiRXn8R7mMZeDDpgwKewWgivzDQpzbKVjTDuLdtUxCS1j8FyfkC",
  "key4": "3ac1FKh3dAkeeXDqCB7F4cr1bDXvfRafULyhRHCf4bwA9GrAZdnUq6aYHn7oipFhWhdbb6ec2bctv4d7ycoFhs4G",
  "key5": "5EGY4RGnConMYUvRmTQp8eX6EK3y1euQbKLK9t4KgmZVy3VsStYPdYk8i3Da11tGgjgP11fj5RUvefgqBLNQuKo4",
  "key6": "2DqdgvX97GUfud89kybsy5R9kAvaWvgXX5oQEonXNZwaXxBYsytQY56p4crBWQqe4jKDvYqH5wSDnNpvS7jw2dDn",
  "key7": "27FZJZ8yTjzj5UWzg3MD2FC3JExEA4sSJA9S13aQWvLknABc1ww59jnkFJuZTEeAuCSRKXfNvt8H4GMG3R2dfwWz",
  "key8": "4f9H185FJzbEit9EMziHvWk4aJan6kVUyPFSqx9snXVGVHSxmZL2KU44inRM8VUTAx2Y1gpusnbDCrG9BtedtbuQ",
  "key9": "4Juwzr38xvPh2rKbWRQbDgnALwpfWiRaYWEjBeYAfsNUfuR7bJiRb32xs4WHjEekr8dT6kXSXZDdBUjKVMa7r42p",
  "key10": "5oQkHdDFx5ogmg9aZ2CvQZdTg6FGXfPbqPQuhT1HdhEtKYJ52KaA2vXMH8CXxnYtKxqBYLqmy5ZNte5oUAAzDnq9",
  "key11": "2ya7DSLNpzfGWDScWwi1cEKr9qZVGgy5zKxLALepPhB1k31CgzbW7r7K8K5ju2gXhojuBoBpFAGDhf3z3UnYcDET",
  "key12": "56Wdh6bvCJi46sGvBhuAgKAWD5WNdFKaxcTyBF1iCFmhuKoytfPRPqcnxZFUMwiVf3H7mUvdWggfetkP7VrdL3qJ",
  "key13": "5iVVAEJQLnZbzUnXh4oRGKyjoM5TXymUDg2qrYLxGFGUrtFc49BnDS2MgPJh6V4pFftCL6nrKjHF3e1GyNcdq4ha",
  "key14": "5YbmUeCr436rYMaCF2MgVjgVC6D9jq82ZeBzPmtrB3viqr5Fbf4ahsMoQVkLQoJ3XgrgbJKcqLpqUDdRQeu55jLn",
  "key15": "3JhQRAt5dysaiKTQ1Bsf7zyHC54EGRr44C6YH4HXcqMoBUHKydGDiKDVv4Pb6gmA5N4ofm33uH8pabdikMq1fYnk",
  "key16": "pVpvfSPAPuwoscW8ZtLJEEoBwedFXTu3t5pxvaop9R92bUm7YqFNDFBcew8q1zHiw17RbckKwJjcobbhxteFhPY",
  "key17": "5R88rimWSVVCjysAKyUjPdRxB4ceosctnnwrj1rWjaAc9LsX7bXNGgPBTwDrKqbYwW76ojrMtRYm4GUwKRUc8KWw",
  "key18": "5ppZtXg5KUtmNYRroXT9N3d1wXVvxNCfZjrv7y8MNVLCUnvKTYM4SisxEWAEws6KnbcXDirGAJdz8VKV4ktcirUz",
  "key19": "2PjipnotCsftyQPboxmjFPmGgeJwEAzB9oczkagLJdc6CUTeUDQeuYjbwNrGUEvnXGhpsJ2EVqU3G6WYVJt66MTL",
  "key20": "3R1nLYmM9z3GWPEjY486c21fdUgjtrBJwTED4NjMhRHNnq1N1Rb7hCiqnkCkdJh9Cnup5UiMyCHjGb7BpW2FutkF",
  "key21": "5do21CTmykwQvKAfuQaXGiZG9DiGbCGVSTDfv7n7kbNEE1ibAUfYhAYtWfoKbtF7eziQcfGWojTBD6MBK3VBDvT2",
  "key22": "dw4Cgj9JHjpjRs9udYn3hm1owNi87Zd5s3KQrztbxwZiPmixpuGFKHNdbexf5ARbMgxtYgGUkNZvEodfgPUjnct",
  "key23": "2hVGyDsC7bkVZ3DHsuDBM2wPKZH5q3jSKCK3dVT5xLgu6guPvKYyzj1WqwvWiF97TGWNmLcPPg7orqZi9mABfvCD",
  "key24": "yH8yiWSwAGXwCvWe9T643296TULvzZT2q5eBa32848j2SH6ZX31R7moSvjf3Wg4ccdaJi6Veg5VNZA4VdCtyB7N",
  "key25": "2joM2cMvKhd3UuzpczgcGCHrYgLsG4subHLhewbAG5tCQkK9dQpa2quLKfipTTtdZL8noEULc2iNnCXTs6aVLpSt",
  "key26": "3kdgg3QMP6ixMbos5BH7R956PWMThJaYBmgDPsMxBqZfwsBQv3C5t6FRYSVxR1pF4QVXF8vzcx5vs9oiyJhy8EYm",
  "key27": "4qcRJPF38MdXBAn4PFs6X2GF85FLxcxR5gdLSkBNnpYZH2ojDGLXMDgdG6jy6xicPYF14Ao7XkoGh18nuRK1WRLs",
  "key28": "5ghfnjGrv8igbJ2zRbbFdaPgfHAmqdNE6S9a5dikp2f2sx9FMQPz1BZoo2opWBa4xg3b67nz7jMs2eRqf65guK18",
  "key29": "4JBb9F8CLg8izgztUxXBV7GBduGoUyFuDN8iJxC23cnxh66t5DwXmnZvg9yyDGn2tB5qBYR8vTX9YC6SSVPoVQqt",
  "key30": "oZpDoK3ALjtjWy2mmgNApxcnUNjkisWBbpaa4AXjj4sTBNYdacXVrPQ9ywGnabcJcaGe5TQKYTmee6GxkhYnSg8",
  "key31": "WSbW3mk3tTrLH7NWoWD6z9kDF7rpGYpGeJNg3oNRnV2RyJySpevYjQE1eY8F2ydMohtWXpA8ZSXS6MNobHtTnbU",
  "key32": "5xZv1mWHd5ujYfhGmaK1CmBbTAkGP6cS5SM3kgktpgT9nSM2gXaKVdhWabR94mDgLW34LJBXcrweazL1tc8kvfGm",
  "key33": "4fkctUUKmbxEedJjmi1Qw7JMYYPgUdUarjQbcg7bcgbc8HUQi6vm3TzRA69LZ6bkVTSTumJueHh9FfzwvL5oxZ2",
  "key34": "HVWqc8XbxuA8kCUv7bm3qLKrwgCNvT9oTAW5uHFBaC5XKgHVv2QCfRaYUG2ZzeC64joFn4UjwkqFjUx1JcRQufd",
  "key35": "2wU9PNQtY6JK2UYMyZDgxsdcXwiMv8aumKQ4FCxWAN3RtfPV1U1nZJvnoL6nq3X2fqMR9K6CPZ17u1RAjdChJzMu",
  "key36": "4gU3pP76KHkcLGVkrhWG8ZP1bb8uYoSm4sAbi4dGGGCF85rZVSrKrKxXBPs9XaNnVJguB2VegRosCjbsEfuHpQyb",
  "key37": "wXqMVLkk51FiinSkA2YQCisFuaP5Aj5ejc3TofGzhjJUS5oPBqbUhouUqVDSRgZWKXVupPPi8y5uTwUGEy2zhAi",
  "key38": "iin3pZMGEdAjh1bVPw2tEyskvsZwKcJqhmoQkMJ6FE13RyYyA4FAc1xX3UnECquRPzyXBf8pdLYyRoVxdf8DLfg",
  "key39": "3fJNjCKCGVEPZ9GXs54mqjfPpyA5hKANM4dKPbrtL5PjfmHnuVr3FsuybKi6QmXnNAgmAoGBRSFab1NcaJQJMkr1",
  "key40": "3TkamCt2QMhTRKRQVnLcm3MGhJTDBJzu64QmiLuD1g4da7hx6dFiy9LDFWGdfrt9yrrSp162Bo3jYZFDpkCLx5to",
  "key41": "3kX6JuGiEHW9puqftMnd9oLGEDmmwzw1JbfvxbnSaEkZcdCmMTxxcxBBGRbTUcSmcB5UkgkoD36xEmDz2n6rEySL",
  "key42": "3KdijTRWPeMqPxXqrcajr8RbRo496BAuvWFqpvbkF7CZJS3TaghcunoawpUQm4VpQyp1a4sLeuraH8pzHCN8Ah4p",
  "key43": "9p2LKBRE9xi6keZGsCR2SANQ5MMLTWfQzqJCvsRaT9dTbX9vyQbagdN8pxXirsEB2xEBaE6LRU64PnUzaRBgjZ6",
  "key44": "2FZTkUMczECkD4jUBuSbzHtYxmH32nu5sWTDUgfeNYRGMn5sgH4ikdT7rtJaazNiJr1cAbk3Mpg9rhuKBTf7PZJo",
  "key45": "4iCTh9pcEEutFwy1XMdQBM989jgG8Dz2iawjHhMmXREXihvEj2Nryv1ZuFpK5D58rmjFn83GPMY5tM5Y5Q1eHV2L",
  "key46": "88grvUMycUrGYrtZjWLVvnkXMZmCJHBZZ6wd47GfZKQGy3vLP8SHY9QghGQMfcmvnuG7Fak4xXMvzgYgKzewak4"
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
