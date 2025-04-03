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
    "59Cpdu5y9ComwwYdmWwBevYPSuP74Lis6vVuzLYr6yUACLW485kcQRDFyqFqBMTC8WuLdDUK9AC27dNc2AdvtWiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYA1BHDBmiS1Pwm1kHebTeBbcbwj5xb3npPqYJ7zaRgq1Ar27VQq6ZHy7Kw9PK3MazUMTQ5151H5BeKn1vwxS5d",
  "key1": "49pzPsuj8Ckrgvu5vfSewyEfEz3u5u7yd85J9WW2tEpMCYyXAaQqT4UdYMKUc5YZExucy85H5xNiJ7wZUR7Mneva",
  "key2": "5ZEkwW7shMB6iRpgaLQfYv16rKQHzxAVuyEwZEf3eY1dK7icpj8aEb34qbQMouMomwa6EyGusTkyeAY3DHaBU5GC",
  "key3": "3vcmPu34pWitos51p2fsn2y2VVmEoiCcCFsBv1rpVvzLfvoeRUUtyJWcd36mVyvYKK3MpxMLDakX2dzwaJ8PrFX9",
  "key4": "4xWaTnKT7cx5UYrdumjBR3UAm22mm6rqaYSvRS2E9VTN1hv8BXTTzoBBNnJdXrMpYvcrpeReJ9c5gdVdSHgWQksV",
  "key5": "2SgDzKk25ubwWnZL1Scv3iF6VU7NoR8YSrc7EgoPeC5uo2cW9RtJ1181tcwZwphoYezBoaUk9YZLqEspeWPCU7eG",
  "key6": "5q8uwEE2khtwEaiphCSneRhJvF3T7YTBJwt8vBA75PKC5dSuV2vspW3raDJhARisos7a2oEmxhdQgxnKwKXCckBg",
  "key7": "3Y5RRgWR7qPbikpLPN2CqjAeHHVFaCSVFG2EP6Kx2XFLGoVgQpjjh9AZKBhg54BznFV8KGVJTHj3FQ48RuLkPM1n",
  "key8": "fCZVixVEmDFgVUZp6DVtDYrzqD99XeXBioWBjBCRo2qq9JxaAm57d7ZZrePGRYtRtuXCPhjwTJmdmNZFYcSZKVE",
  "key9": "3g9EXsepbLde5efMu4R9WtjukBQufJW84kgB29qUmvjJQ7PLD4V1hn9HgLjgPGmvhrWtw9NBGHMY6LQC2U12Azx",
  "key10": "45i79Ao95VwDd5U5zjuhA4kFKMcQGKjc8jbjbSyKjLVCPPh6bgQ98xdn1E41HAyADfJGbktG7KPNp3vLoMd3MNm7",
  "key11": "5sL1bd6583TAs6s7MTCrbfsZP3H42mTwMzPsXfRa5HvgViqioWrdJLmRRLgkkBWRCczhEd6VxsfR3nbfQcW7Sgs1",
  "key12": "5fcdfWhCrgut4KPvK4L32uqgEK7XHXkKwZBQFaq2uMRBP5uC2D83N5d7mcQckSHsFDTC9pd9KrZnr3GYh31tDfFY",
  "key13": "3Vmuy3DX8nUrJaSHXmE2XnPLyEJDzu2Hk3t9iCwTkgt9ekezV68LTKbMrRq4SkbtSxcmhkVUrffyC15MxDn6hSmw",
  "key14": "4FLR53nUvztU2Z4R3HDJET6YmY3ajDgVZiYSLVQ3WVmMHYLReLURfzfxVASeyonjDbnLrHugjTAmp59YDp4ewtwY",
  "key15": "3Yme8nMAZrsmJhf6xJrGAn2XwvirmrbkSZG7mJCTQNW2jjFqSRsuThbPKfndntDCyh4cUbPeqWC1FUtnLZyMkwni",
  "key16": "2d1j5QgvcvGK2XJvMWrJXNEw66esjEKLb7ggaGjWk3pvREcvBHHHjsgPQdBLGuMUhfd666o66r4fDv4WysSrrZVg",
  "key17": "4Fv1jqMN4mrsMKZd12FT66U79yeaMJZd2pAUNWb4XQ84XgcN62xR5tJFA4ZfS3BWt9rnQUQfseswQUYqDnb1G1Ef",
  "key18": "4WdbVSc9i948AMUKpSpMEy9rRi9Z8rfqJWJ9wcnzBA26ZGGb37rW8p3yrpuSWFkgLYq1Jnh45xLiTafgoX4ebXkM",
  "key19": "3MWF6oCNobenKDDBSLJvT4CAzaZCJtAdNYwgY812h4qyoLeRLZgth7mLWJj7ecYinx4sCQZJn9uzR5RDKA52JJW9",
  "key20": "5spCqdi1vbVxghuHfm8CBXpHiQWJok2eJ8TgxMZpwSmdw2JasqdkjHm39qVZTn3kKvZSnFZCnJFRoMbjXk1XCVAd",
  "key21": "4NGTSCX6AZbC2DyUgawSCmzPmALYUJ7jaMJdZUnSCH34yirpE2du51TZphyv5R7ZJgqkAQWDt3jnfQ7y5681aMvn",
  "key22": "aGr9trcJd6xc1bqUvkLXVhvauGL239bEbrujXshuMrSiEc6zrsycp8P4zxNAbq4GAVrR6MdtVSns3DgmZqTgpFJ",
  "key23": "2H6gbnc4AJf5ijm1EozuuijChzhv9mZGmrJBqTufi6pSiTWonrcRPXvWfaFRgNaC6rDTRKxfZ77fZn6GDLvWhkbm",
  "key24": "fyaWn9kfhDaZg9XCFAxBpWL1ULtYgUx5aHF4Ygzf3H1oBmiCvB2UK7vuunXuuXLmYzfSvUAwDmzkiGTN4qSagxZ",
  "key25": "53zxMzz7kwDmuct2tzg9FVnQppTv2pEFdfaPcLbx1bSASymCWjEHz6V5ZYniAVaSnhxL9qAmoTwGewzC5SkDeJRc",
  "key26": "3rUpfmXG92KizWVDUzLbHBAV1FsjLv7EcAZaZejaFVoP7m4bCnHrcKmZDF9HJtpcwFizGh8RjQ6Wjddnfft1Sfh5",
  "key27": "2f6SZkmvFmnJyVFvadxgGmgMvMPW7749sJKaxYxAAvuvL1UZuin5wP17zbhsPJx3piryRqd4gVwrkq6KWN99RTxB",
  "key28": "3GE3yeCeaquWNHw9vYbAkue5bwUuAcLkAn3jeSijY5m3bVSYsNK7FnwLyzkq1mGSgheRMa7wCvAErEKW3TGRkb2D",
  "key29": "5nh8EEiNxmsoKFF3bewnVx3Hyaw73uSnnqpH9a367BiEXVbkpqJu6gBFL8HXFDiCXrxC9PduzpS5Kut5bxVPeJzv",
  "key30": "5kWjRZi8v4gmMi8JEm6jwiRpN1TFbXgt7cW4bJ41ymmDBMcdZV4KzR9Src1KSYW6GxeKLnQCeLTGjrfvvCNtWMVf"
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
