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
    "3ppqksZEtnzye3Pzy9AmnUX4YQaasE6PYsaL9oPXcjcJ3sfm1Bu56fURzUGH5XyPBEmdgEDcSNoqsXNyb5xpZHD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWBJAtbQdHQZurxZMPXNsveJjJHPuWM2xC5d7zfz7efr6q1ceZuuVQTFyW3zdbjxP6Xp79c9bBifziDiSrrvBsg",
  "key1": "3mF646ns6AAMNKuFhhAzPgRFWXcy7LqWcqSxSdjH3JczassEjFma2nz8YQpBCW6hMhZeeRfvXdXC7C95nXuEJanh",
  "key2": "bC9NzUQnmEVVV1B9zj4DCA4A2h79B7Yz24VSGMYR9KApyAa5zzmmat4CnuzstV2patvzG5sumJqyEnozgZHqg8S",
  "key3": "4fckr5tSz2CZUt6mNyisQJrunojZSFNbmFn9Jottpvq9PHRqVEngRW75ttUp4QimJmVQmLwYonjXciXyMhh2nFpE",
  "key4": "2vRu4hatbthZaaCZXWN6FkQVqer9ENE5jPBScYj6UmnVNkzJmEPMSJrp9zgY2BGi9aSYdHVEzuvT2MEDSvVWNdcx",
  "key5": "5MpVGLqt7CbSHBcnfbAcpv6QnK9b3x4QWhE3Si9bkF3HhEHxgS7mBECRbBTARcAnaeqvyeoJKPkkfKiwbRjxqhUs",
  "key6": "4oGpXD9QaijJeC5NvNKshsCjwucJxVno3bLRnfa8b6KtcoRNTaz5iBsoKKDkwcH3vVrxLayNSo1YdUchFKboMhi3",
  "key7": "3fnnsdR5P2R1joq16KFg2qULgtLJWyJLthD94pCpV4vpXq8VrhWdmjcCCTQus83BiqesziEDmx5euUCKbBS9xQJy",
  "key8": "47rqoTJZc2rFgvHaspwV5ZFVY8FeXcSLyJW7DPR3N2mmhKAspJYGAXFyFnREi4y3mkUg9SpTykHKkgwXpWQbPsw4",
  "key9": "45dmPVy2DWKeLjnbxxMiR1L8m72nCCvzHBoanXE9bAaSx5fZUhZWmrS2ESWjd7qz9JcerRcbn64tcUdYBwP4L448",
  "key10": "22HnmcPcmTSn44t1moxX3x8a31Zgse4cnxAkBzuHSeefKC37kbDU975T4YnP5HeizftzAkrMW5TqMwCxEhhcDoxc",
  "key11": "2zotgbmJSzqMDswhacuNGgNeL1nWxfMtpxAcUYWeVmoj5WBMNTPdyCixAWbJpBDeFmKy3urCs2isaoR4DtmxYUJp",
  "key12": "4aySnCYUKeuVawNCdX5SU9GqWYKm3iSakfVXDbVz7NtS9n2cGR7NfWCJLdQXky6GY89PjWKo8nfUxVXkHZ6o4kAn",
  "key13": "4RwVom476LyS6BDafpKfpgGqVZAhZ8VehwK5N4vYHkLxMDnWdApRob1k1zXptZDfx3ETV7HCfdQUr1dbs61VUUEe",
  "key14": "3jjkLM6Q1BcXNgAdXH1XA2RAxBpK2n5gXngQZ2FwGc9vykWLmPKdtoksDYBcq1op6LiWTRGoUKk82ZDNCzudqyLR",
  "key15": "2GtGVZKUiMdMkAHauBvSEF7AqxTnD6FfuJTzwwbLyEnvSq8dxzGxBiEwrXdhRrzgFKEq1LAMW2pwa6JnK8Ce1woZ",
  "key16": "2wwwn5pHz3TZZBxHnkSKe2JMcQrLFVv5kAiHyQbMrq3yhSAhQ9h7zAx6b24FXG4bLH9AJEi8kBHXUBpLEddBfDk3",
  "key17": "y84gLqv1xBHySAtpSvB8xoZaiHAfuLhqNKTKo9e2sKwG6HrEYcitKEKLosPMHNrsJmsE7pvpG1MkgWAVo8G8V8h",
  "key18": "vxoi5JeHkr9cmYUfmWCqdhJRku1uJA9xVKEH8Mr2qAnxaaAsnK78qsnxZWa8Fu1w8ESE7ukt3LStWMBp5k2JF9a",
  "key19": "38jBJdnbWRtGt3ajm4UfU3KztjLTG2w1WhA7aMKwQLpw67XZtnfy3hUPmpe5Zc7gXpT315Zk1oJvELk2njJkpKFW",
  "key20": "2p3wkVnvvH9USyfdrFKwKwFMmbvNUQrDBh64ABbM2u28EffcCaXEVmdisZWsJnBEUCab1bZWBRdPBoZ1r6Z6V2cu",
  "key21": "5h4Aez4E8mmEe3oT265VTaLuhWQtBPL3SLuRcXrvUUJ3yv1vXk2X36iAjDojXqcgMfoJCu7xxuqfK5M2MCq5puL3",
  "key22": "wuKiBKkJYmmtYnfajD4gtQMfUU9DdoVLbfQ3xHzmiHq37pFi5U1NUF9NFznaew6VS8uzf1nqgMzJAKGUQ6pxd37",
  "key23": "3dDRhBDpexYnPHXBEJ94zFrRZ8MY9YFtyaSKrL8FGGfBRgibSVZ8fcN5E18n5HMfpdTX3M9kNz49FsAZ5oRafgus",
  "key24": "4eXpTc9TBCngRSh47gKwyiz1Qpg3CDe6ma4zbWfDKSfxF3eBpEXweHzJ5Tnq7Tyzbxrfq7tppZb8KbsD3mwNkVbW",
  "key25": "y8Fz3ZSdSZtnKRQs3LAnVVbQxh6oqjYup1vYxtBYcBM479jwqevQAbmwBF7gD39rsmLPmKVenVtBN64uAK7Junb"
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
