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
    "22XEPDXM5CFXk8cGHh8K5GS8qHANPdrUDxboKZ7xnbmw5eeYY4vdYiHtBrVkb28fA75DLNagchJJvhdpdWdD44hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ueJDUFum4dL7GDTd2VYLDX3Ukj9GkeYj8hmEKn6B4QsPFBBeSgpAgrj8fUJEUFGsR3B9Li7ukohKiVDcyqTXMqf",
  "key1": "NuWaXEydsvyxBDuemfG8tzeXG96b8C2mvwzDzhG5sT3kiU6jzn5ZwkheoYYka2cTywYC4kNQxuDetPjhGg2h39T",
  "key2": "2EcRsi5ZNNcPcicgTKPvFnpuEwAH5FnVkPVDqJEGk8XSpkiCKvKwqsjx2Jaqe6n7WmBCSo688pafnzoaRbDnSXPg",
  "key3": "5Lo6YQotEFDcWCTEC8CqJ9guMYr1J19w7VzQbn4LXTuMz7s1XxnBmGszCz3CwXJNwqyWT29ZQP8vym3rdV84N3Md",
  "key4": "5igXJxPEYnShzRNjnAdi9BdRwErqHnAXBdCKkTfxtzMnt7ktU5qSbCguFkTpC3Hda7ov1jMzseszbHjiFK7EaM24",
  "key5": "6LVyjWwi4ac5RZwmsBm5aJYVgmaykeRrtNMPsV46KmbBJ8wMyZ32cETo8mYPeBFX5hd2SvaVqoNnuDVcfVLoBZu",
  "key6": "5czapAKF2in3Co9drJozbyv3vF9R5f5hSScigb5zDvT3do4EWyE6wBYJuFkTgorve1NomSbtzRzygT3PujpYPhRe",
  "key7": "nSBPrEJNGYXHXNe3UMrcBKmb7teRhwLkMvXymucePCVbk9DgkBMajACjYM67HZGkH3NbZdnc7YSkvZdcvmZxvLv",
  "key8": "2G9CubxNtms4MinMcaGK6wPML9x5xwQVZj1VcMDaEKVQnPPYPigdgVnG9TEAEnCW2aHgVR8pVxQYRDuwb8jotR9s",
  "key9": "5S7bLzQgox6YfzWzqPCSWGkMqk5arHkhXohRo9Y1CWhUkfPn4pQEDbn6wrYDgbiDBTP91BXJkwGoo8Lde8vnjyfF",
  "key10": "5FzBLyAw8jW2qrCTpeVKTyFXoQRThEiWLeXFvX6miUuhVq25XMUF5B1N2vSUtWRkZY66VifycogmEw7fsu3PYEop",
  "key11": "5yYgXf3HEWVfNx8DU4Bxhaz6bLsAJyG3aGp71BJwgV39SpeqiLwWiN467NS6X23KW6YqqR6dR1hGkvx9iMQo5ZeA",
  "key12": "5aEbEDovTrty1NVz2C7KxYbT7GM95gkuL9hhPo1tZaaYJgTK2pP6dSx2k9mr7qotiuqF6CvJNjX1c6BZ5aqVxZRs",
  "key13": "44imLJFGpyxxYeSKdQxQg7H9dpSP5B4HJBv5STgQJJRbCHg3dd7gEoFjrR1bD4ujmjaw5dezCbq9JYSSTDeAe7QQ",
  "key14": "5iPVRM8fc4gP7UxFH1jNUdBZqSm7kjZjm5E5bAmxS9nSRip3MD2KZQHvM1t2MU2mGxzGgpYaSfZABNwddKKHbGzF",
  "key15": "35KBhqHCosPqHK2tZTADXLzWXQkdxrFwjDUPLE66kzmrEgqWdYf8H8hAfhQd4sGjY77b9DKKyAPnAoZugvNPHBcG",
  "key16": "4LJj3MmnhSWpMT9GbvUAASaMDZc6ayHLpPQM4vbgCx3M4W25AnxEakwvDK4Taiezfy4MW4tCmsWKihfYPewyY3BN",
  "key17": "4V53K5uZoq2v4pXWLxmixkPg3ze4cHDg6c4Jr3fwG2dqwpoAThEgj78QfTxpaaDwSp5XavGPbiSqmCgsQ29iiM9Q",
  "key18": "3DQk79PsHJe28fFDsQHefRQ7iJr6w2pwa8C6CiFmh38iUvAXTLz4ejiYMHRpRJ2z9DY2qqfy3jdfdKXTwt3bkXU",
  "key19": "44qKMqftpETPYpZkpShinbcvqBxCaAKCQ4boCE7jboS2dG3aEJWfznsfDVouXF53CuVi6hFcoo93nSTcWGR5tfM7",
  "key20": "57gAfKJsX59XCDFvdkCXjk8K2Kz6phmCeq295QvXXL6BLviRUNVSxcG64pNGDsd5kdLCUb8FYJoMfJG6Q7ephgoV",
  "key21": "uo4aQNYuu2fNR6R4xsFsT3XiJU1AQoe7HkxLiY9u2QmAFBFNf67tSp7nCQUoSGBtJqg6XYRkSkxXnVX7qsRMaTw",
  "key22": "3pyorCgkKTMj36pmZpTz5G5bVLTqj7V8PrNMc6wZTJcDcQijxGojMBXvKPqEvJm9SezKeUjnMoGL263xPv9jhmTG",
  "key23": "AauiVRNk4RxsLmvH5ct7sEvGmnoCihGFohGWF4Afo8942LdzDxfUqDkqVUrgDntbaEfzHSAR53g9rG2XcSEtWtb",
  "key24": "XC4nG5sLhC7oQa2UZ8TbLTLLr6BZVSrvJwSEEXY31kSCbv91VxK7LXtqNzGmSi9qMoxfb3Powhap2k7DrZSVTZo",
  "key25": "5JJ5kA7HBohsW3G5C9TDhu1icjVfpSNzHcg4VuAtKohnjexh1zfFKEM6fZAkfuFRxRZTxDJP41Dx7QXUgDAUjymf",
  "key26": "56ZD9Q2jkkDeGACcZck8sKgvgYYMhEZuPMZFcFr5G7pkrQxCogVv2oHNpPsAFAkChGpEEn9eJUqqh7DeRdeyvs8A",
  "key27": "2vBrLiSdsajxd4hNRKXxE5HNTWHwLbBdDJdWx2VwxokRosteJAvBe7iTVCKdUJFHWJTp1X561GY6Df5M5m3XjCuM",
  "key28": "w8cgdLuzo3gtkPJr3kMiErZK2uS4QweTRo5AFUE23N6maCDPfF6jD9xtbadipo1nr5Ea2jfo8eE3VRazFVhBoDo",
  "key29": "2LaKThoWzo8XS3L8JPeiaPbbyYNj52DwuUsNpkJBNcmbgtMBk9S2qfTQTzjs6gYph5f8WcdJag1Dp7oRHkXowQjM",
  "key30": "3C2DkJXvTwewrcgUjYjXWZ6u79sjwPXgRte9GpzRpaxjaCNjwQq3RSmk9LPQphiNJUeWHLEHbKkeVyR3pyRPcBNX",
  "key31": "54eDYSsFYebykjLMuhUDXSeeiFFoZPysQXXiouHNBUyEqYB5oUZWihxgpnd1ZdBeuHcEN8QEWnRNTR5hHWifVCGG",
  "key32": "3Mt6mePyCeyBfUCZYSmQctuLV7mHVvQdkUby9oyN4Gbae3ynMfNAfqfJ98shcbDrMJsdHWmtvRkwDp7JfdzMFvda",
  "key33": "2n8BaXjgXquFTMud1bqTErwMQeRERFHyTBa5ufZRKKVrfqxdtoWDkrnqwDdux2SGdZquWNmSVW2CiDSjbzrMZrgK",
  "key34": "25ANM9TDzNTiHMyPmta4bAqLx1BRsu2YdW3QMMEjcKMmFL6pAGbAZBp7FYjAyXe7ymzSgGuRwH1KBuqedoofrDQ3",
  "key35": "3RfxnCKyCpqhrJfaxQZ9bnDdWtMeG3NoHLZm4CMemfv27JAXK9q41BErJsTNGeJ6Zr2ArXPKWqmw14dWTkuhDnDb",
  "key36": "34UfHw57fn47sYqfZtDUc14QVrB73x7ntANPofU9YfRjFw8TkrH2dzK54cdnwdM1cUjVcLnnzgEo9H4paf6V2XpD",
  "key37": "5ffMfvNcUfYF6Xm6xgJLpneHeJ6ErdGtwxVpCpgZjMCe6axXpQzxyHWe2RjixyEZDovNQpnfxWoNYQAMMTsm1Gss",
  "key38": "4xQr3HYCL3BAqTyN2P9rgNC94w3LLA3t5hYUUnjfN3dZnpuXCUubMnbnRSThuEn3FPPb3Tie2uqkuz6FuYqRWUjK",
  "key39": "3UkudPZpY21apKZUBQ58XGzbbLjmMQEZySosHkhgy3rdkgSUDv6CVNNBBS3vm3D8TzVSu4bh1mHA5vXEtKrQsRjk",
  "key40": "34R6rT1C7Qs86uyEDRwQa4DTHp7sZB1CWHgqr1MSjCd3H2wk5cXKHV6CiXru4rQBymo6gv4AUCXfHxY7FdyYE9Fq",
  "key41": "ZPcNZpaxj93Tf4BHhg4gHc4VTQbd4hUcp2gZUpCX6GsXWEXdCCGuaYP97vXnE9MrdXBb2zsF4XtEdb5CeDbGqdU",
  "key42": "3iPeN8N8bUewuAeLbskxmZajnL2MbQGhHGyG43fn7gxyQoSqqvJBJoXWWj8YzkrecM6CMKJ8qhhernfUWpUCy72n",
  "key43": "2MLfGYWJd9efmkvKo3jgwFbvqSGPriHvcCXSxmPpwGYaXfb5isknSdSzHwrUddSxgmqQsx6J3qsVK7ubaktmhCwH",
  "key44": "2qvdbNdxq88XkSyizPRb5U7fL4tmEjsTYLty3TQPE1AB3sKyLJfvjPW4f1fUsXPX4b8gWfcFd3KG4teBD4Qtvo2Y",
  "key45": "3rQocaJvd3j3szHWNF17NfwG53oWGG8MVeLdxDfjkzn81Df5CjQWBTLEdpg5tdm9vosY7khgN3hrwxCwWFBHZTEw",
  "key46": "5RjiJ8vRGE8NJ6csz989uTabhWtHo6eLB8gpBQAB8DcfPGJnSwi34MuJ17c1TgG12C3G6GPtLtNnQH65F9DDPMf8",
  "key47": "4BQnqomHnNGaVo3Su5JhxbgUoVeXDGzGuLLzkNiX4FCsrbZNXuWKdXsrCttdz7oxuojQVNPFZyAETXgpUYSFNpiB",
  "key48": "2GiS3SqcnWrjVxuQ8mGqpBukejKgGZww5oe3f3dZUuahR9jPjnCLZGvoa7SR2TpbjT11heHu6TFQ1NY1LGRJCM4A",
  "key49": "3bisdsif2ZZb8f6Zs8GTM3Umw9dkrMeB3veAKAm9T1mvZGsHMcXuK1fsnhtDeRUUN6CutXQxnmJxywH6roZwp7aR"
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
