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
    "5s5CSQzBC4gBe3UnX9Hd3iAhgZb9fZLd2rajKw86bUeVC5Ric7b4wmiNKLsZ29uwN7BQXzSsuursxEz91uXD1gGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auLWDXeH8wSLkrKhHxCNaBCZVafEc65jxHARZnfCLyhqBJG4Jmohnc4JjknLRYk2tyPWBnsE2MhxMgwu2LbjSXa",
  "key1": "4xZ9AFCpkguwXDPAh1MkUwvw7C5dGKAryaydE4FsymSmxaYmHdbBbfXW1Ma5fZe3oGehQHow7j8JhL3cJeVqjzrg",
  "key2": "3mjX7f4XGLnteFGuBnGfhGdueYDt3NfbgQQLvdKenuRAr3XbGSXRhveeYyh1Qcnusp21DVHrdNqBLaAsNK8vWE2D",
  "key3": "3SuJviCHZ5oUas29HqvG9gLktdJFExixHKXHnUBr4LJCcjH67SctKRHmZMzQEW2FiYrPD96WSMhXm5EKy1DqeFEB",
  "key4": "VdV59MbgsCr8m32UfqPzKiCmXpnkAUtYMMNhH5BTyYainESVFb2fCR2CE43iPVpTfQZTcg3JuFqjLXQq7pnMcDN",
  "key5": "5kKrf3tXYdR8m14sacJFTYJtWtQJrdfim7sVBeqP5jnbhhnitY1pgAjttKcHHcjBjAT447ES948rvE84AKBjgVRf",
  "key6": "4yyGZNyvdJBocL3KDWF2g9ebBUW17X2JWZWkFtMCY69UFmvPy9aHBntnQ7XaYtXfKdvXoPTpupaoNNeTNwTjthXL",
  "key7": "3eVmXUCgwtHyaPYFUNMxe73rnbqkrfNpneaVfNpEPw2YePqQa3x6HSrVmsvisvekTDsKNEFJaGeWEy9QHEt84EiR",
  "key8": "iGSQBVQhKJAqAF7TrJsaaozu4uupqf3jhY3qz8zFhMd7CnhtKFhW8WxSrAm1Lb4dkFTxvLasuxigaGnfE3QDpkY",
  "key9": "63guZjWg3tEvzHtCzBEzqcj4XaeDXCoiJHH9cinfLax6q6PvzaWCeQnRHWpGf8x75cBhcfTy6S38rGGZAgquQRe5",
  "key10": "2XG31RxM9sokUrGtwtqMGZQWiZSqwBp8mqeChBbJMs5ZqVLEMwHPRzefW5HNHz7sWkCVWqc6SBvpts3iqk2jYVWM",
  "key11": "2P7mCmeZf9PESioNhCtwPkJKZY3tYpePZBFhoCqddKbNG1RwWx6p12KeceoHmAh8gkVNtCXXmmNYgd8TbcSjH9sH",
  "key12": "2nSuVkEQsxwpoyaQ7NRLmjiyhzhxyvWUzvDggy6QMsMH7bTNUgKXSjWWvGiTnkE1rkgeNpCzNr6MQMLiPwF15gsR",
  "key13": "2iC1vbhfhTdaSxLbatTYtqqVGVKEzRog5iriZchzgUakwWDrSVYedythzUDFpavGbhqm4ofrNKuMD1t5D3K9aYnB",
  "key14": "3vzZxiJFKME4ioTG4XKBEZz3tf2wodNfMpsE8vMi2RnfFrVS9DLBcrRUMNgJpXt3E1tt4JRLDsT8mZzr6fcUxBfw",
  "key15": "FzskwpjyERokT5HmKT2M2afcgWVRko2aB8aBsFjj4s7wsN5uWLThRo1pDQjYKS5FPPyNmRMwHCWzTW8wmGA4p23",
  "key16": "2QPQ7zLbmtUUwWEYfK8foT8LYAvhyf9bpWoP4nV9NHUf7WCA6m8LeX721TgBMTY18iWH9Q9owkQPnu54jL3ykQgn",
  "key17": "3KmMUf1MRDmnXMmLXJbWomTcqKXjv3BGEfLaMNLfNTuTPFizfCTu8HTq6hJx2kgsiqWX5fi47FjvqYwZcs86Jgr4",
  "key18": "2xsVKSfYRdW1zdjpCAunxiTyeztg2wfcziGZsfNByEYDUEvxyp5s9MkDndxfF1bUwxwrjvidrtohFXDh3ktTsXvL",
  "key19": "532Ck8orfPKLdq54PjzQGt3TVtmtsyjtxpd1UZATtwLEzSjUKqAywRAYCoBd5HXZbeWamA6u8QcdHXLPpQy1q5qi",
  "key20": "SjUam988JR8ezTV95aGLLAdNRtsHx8Zu1XC7zbX6HapcJFSQHFQw3HrQZmYbWB3gx75FBGR3rnePBSsRMR9KX3D",
  "key21": "iFqwtwdGq6AXkkvxgScS4WopNP149qHR5KvaAc8d4DDWvdMLxCpGvUZ2JAzUhwrM2uxZw3hDP52c61cSaFzBKt1",
  "key22": "4kMMyK3Ac1kgm9VbyXT7cNg6eAkwyUZtzjp6qPaT5Zxv1fSVjev6zn5daPGeFuo77tcQ164bdvA9Wkzpe4yWxMyq",
  "key23": "jR2qDtYp8mHay782ro4UjHWBV3nh6nfuEMacPgpK16rKXqT99nEV5f5JyGiAGaZ52Y7fkZkaxS8kmUzwxMqYR8B",
  "key24": "5qrqW5dJ3e1PkDdFd9bDGbBG8Lk4haZ1hiWmbeXWgmxUkwWkZU1KDsXF2KnzR7zZz5ns3riE3CSkoPbPLBXhBuMC",
  "key25": "3pAj1msaTRJGsVyHoRZL8J1oFTkKUFY5ABT4uu25rEwao2PD7L9JzSrieHzkGS3Pzo8XhRevHUnAf3dXQgmV4zRz",
  "key26": "5Zx2RExTseLrtWw4RnUxZJvsg9ETqU9BJTxXRAxWUhWQd5otnyDyfpWPXdRM7tpDymZEvJwwQUsLWcdwfM8d6YMp",
  "key27": "2FcxSyHa6nrjxetMY9ZxPrhj327jGf6hwBzfcmEfip5AQ1otVnvdKsJHjdVFEJb6Mujbzct2pL92ytbVAiXRKaba",
  "key28": "59rqJFH8bCcycPJKqNUjaa5xwbtvFWqSC4N1MxZm1j3rrXDGEGrGEBzLZzuW2yGTXULuFjQQC7nXut156yWD4wnS",
  "key29": "QP9pXr1bwhuza76EeHWYWPu3DMHY9CdmLHpbVwFnZAJBfFczZCD2M4htiM3v4zBj3HFUjWZSPDBvpBJ52yqHqur",
  "key30": "5EWB7YLA7KEiG7PjfZaryjGh9jHQdHN6HvSdDJvQzuZ2siAg9K1vMRPYyoTwqHc1cLK5mixYazyaruPw7Wgziznt",
  "key31": "5v4sVdNgqE61S9usYkdXHgdNwr49CGRxzcAdYQ5wzPiXwqFvEVP69BkKmhCcQWZNRJcwGu9xPEqW8psruiZyzL5u",
  "key32": "2qFQYGL2kiPfTynYs87vHShzZ3EoGTSscPvHqGMK872kBPgYdomchvjJ8KDhLFT1KpSwnwHT5HJ91SEXdFLQ3rEb",
  "key33": "5LsP7bPsJTRVmLTAxqBzcFZqhEbdiU2kVEymc9tKyaa6zvaGXA4EoAPskBCCNmJJs68q6FYoiaBM2nm3wEAz3JvY",
  "key34": "5bgbCDYasP8Yay5HA1bT9B11uFq5j2tsjC39b4mq3sLmG5KqmeuG2K1YkCpJmNFaZDGfzLsJBLLwk6JqeVcEqVnj",
  "key35": "RJiYECD5dRyfia6s8vsSdATEqSupHd5jNbjWMPzbXWyi2SDdstwJZJH56nMBF8ghrbkT1dU7mU25q7Z7LEfWMso",
  "key36": "5Xcm6djPVau4KDQD6DRcCzJhRHjiGyHpL5bwMG5ubTNCPzRDv8rUjEaTqY28yAb2cjFbNvp9KAbLwmWH4tEjiKeL",
  "key37": "4rruyDBMeooMqtKS7ojmxcYu6hgsZuBednpvZpiEoCDku7cWpGiKYUSx8FwrxvCYEM1HpJXXTHGFPBkRA2BNakSx",
  "key38": "38sD6gpFJQZELyHkkk3oTict3YKEU1fo2c8g5c8aYzWmGBtBfgRdiyaNb4PzcL4RSvSbReseNyxKHq9dG4PNQALp",
  "key39": "Li93aPHm8o9zDhEWTvReqNBySChNw7X8hab9e59L5icZEkF1R6hyputR4UwBC5914mYvqY9SK5nXGBgu9Q1PAzD",
  "key40": "2jWHtuM5AfQyFypduGTdsTzSpwP7KLdYvcznksX5JnGcez1DSLsVJxob9uodbV67ZmVV8b8o2saeAcSm5gpqQxBf",
  "key41": "2uiAZgXAJxCs15HntkPYip5Y3en6mJfEbMd21mGe5eDZ7TVYNekHTcGKtVZnYLxvhogTZ3RNJukJPqApCL2bt5p",
  "key42": "2iv8g4UE7QtjtmbKxc6oAAzUC8ZipkqGWDbGFPaEt9gesr6gvNQaXAZZAkDqbUjFeQSH6YSoNPZsNxiw7WKyyn5P",
  "key43": "2gaAmuobdmy7eT9wYb9FqTACDXeVUeEUnKUTBEGPVA92L7zdH1yqxTgAuhVQAHdzFRM5b56obYRhLsVjXDdSrACq",
  "key44": "3fRkn1uiGWeXy7R79eAVT4x5WSTUYNFdZk8xrBkheqRzPaemF2gf5zsua3bpeVqYhQveMHyVcWpD1zryRfqJiJiT",
  "key45": "Sh1XEguCQjhkwqXLMEfjuVDUWioxJ4QimWeeduJPP1C6aQqRLLT1xSN1uULD5pcr5ujfE8KumPvMuhzmjMXGBbC"
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
