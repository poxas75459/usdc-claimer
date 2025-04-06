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
    "4unhAhWXRBb4VozaW9UthcSiTyjaqeKSgkBNRcBeqGSxSi4tcn57KQT1WDdLNMPATtQgJ1VttAURzJVLCLFHqZBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543HHJuFvVZoymEGgrTWQLVo2QaAE7F4wNcUDCbXVrzKkQEicg9T5jw2rVUawbpLL2gCiJMz9p84wzy8SqhwFfpK",
  "key1": "2prYV1nDEBWR6RKRurJGK3AgLukQMVeo82ywW5DpiB352Yx2mHTxD7nArghD3eXTiG3ovkKiFti36JMiL8bHKxPA",
  "key2": "2t67fTJ4wbnF3EmRUzQfEwpvrZZYmFziZbpR7mSGTBoyVwAheEtR47drhZ3DgJ71x3vZDYdXYQ8hqJsVxB3TEakQ",
  "key3": "3PbRxB8CoHgmSwsVwfRNjVM1xFkn6DTM2tkCmfwfcAN53u6xrCz2bJ187fYwYqYPacJby1uzbveQhjS1U6Np9DQb",
  "key4": "2nCbLQyxspeexTc8br3b7wxztRsigZYNVrGPkXNwo6FvzJGVPwAeEgpy8KQkhNwckm9cB5dDhw5iNQuKKhzp4Xjw",
  "key5": "21ty4ezy4PXYdSxpveYp4xBUqWT8QS7BEXPtLy7zSKqDntBY9D4NwdSXFz4KkbsDSaGq4gFy4CSpWUtKoeC3aQQ3",
  "key6": "4ge17SbQYykSds36gbULb9ejSLMMH6GJAcqYCS9S55VAZzq9c9Z14sHkk5CtYG145zCocHX6peW2tbCLpqF3Qtk3",
  "key7": "JQehj6K247iPNT2yHobTH8bYkURSkGcEbHGwTAg7C2tvL81zY3ezDyRcckqG6y4iVa65sAsBEsvZdDWnEGe8CTU",
  "key8": "2Ar3Q86b46YcX2GwsNhw8dMSeMStqyY3GufjzqVVxt3Wp3b1adhFYSv7HCFoZxHUuyb3nXrdBs2waLP4bSDv8ZUb",
  "key9": "pgBZAok3jJXUpnpFwUg2eYQ4XdHBgeUxXkhMUV2os4hATuFVJtuAVXp1XmD8cU7T7KcqeBgS1e3QbmKtUiUAqCF",
  "key10": "4zoX8FqLknse1AHqFumxuvQZZjoPmuNXHv5Kopu89MaUenkT369mj6XkVa7uEFJhsyxwB9iWLsYFTK96XDmGgyjL",
  "key11": "2BaChZYFJbDCVX2ERvAwxsnXJF89PjD43MEMNRZy6AZXVc5EYcoaA5XNF4d1uypQhQuUiCK6dVgGqqsftvdRwrXH",
  "key12": "5jaJGrxPGmAYofMUc8E7ApZB6QnZ8HzeRoZE2wvaxx5Gzj9h6txQVa7sKjZdD3remJpV6zqXxBuwGoUdRHTbfXiB",
  "key13": "4TrmBcc4Qx7Xx9Un8dNqjrHiqBrGihgRCRqQjgz3AUFxdpD5kkFBZkucxXvYjPmKXEshyuLrJfShvMMjhchjjgGs",
  "key14": "61JMsGmuejK3RWv5b2DKsoD8LoZH148f7PpTJ3yHp4n7RE7men9QRLnXSXtiQkFdY6Uhbqb257n4shDV828c2drX",
  "key15": "4sXZdNzW93znErU4udwWTzvFyEtpMeMhoHB7R2o1rGc59ZogAjxH2JtFUPPTBKbw8n97zse6RujoAJJ7e8H6KkAp",
  "key16": "WzuUBmk421iDtKRt47WeARGZgkZT3dqjpaGkuWPFvM1KnUYXtBnzvZftruCuceTHnmWZEHEEcoPnf59VPKUMQVK",
  "key17": "3dBv8PUF3XXLcE7ZHqzQRkrojpwMi11vR7bvFUtypJ8MmZKuECopPg9HUTScPcCkZoQhUTnNKrHtnkrisewQQQqH",
  "key18": "2ZqZLQC4EsoRoxbaxGY4uGsEGs7J4dPr388oDxxmHR9sSYzfhkTUK8EVcmyQxsqhWTrD8M8Jphe2xFTagfnxKBhh",
  "key19": "4dmutkKTzv7CJtH3k2dVgkQffXCnJiufFiKxK1hV7ZuGVvWGz439GJF6JHq75v5QybTX6bjeVxi8HtT3V3BdqJs2",
  "key20": "29t4joymnCNNNErqcxvWJPn5B6U6bh9CSvDUFUJdFcLJ3fdJvsrxbnSmzqbNaC5g1yq68odqyx2usbjpWMwNafRm",
  "key21": "13vQvpuUJ8AKyEP7twqb4DiTZyfpw3LSc7gwFZ6x1qGnq77dJDYQ5wub1bdzLYdHQh3zR57Rp4mqbRnPXYZ79nh",
  "key22": "4eSE1vnnkr9rYdCu8v74FBGcpraCQ9LXarW58AkiBvNxm6QAXsAj81aitCBBFC7GNNydjfmF5McDnG7R7FVEgsxi",
  "key23": "247syL4BMGehrmEwmJbLpciscPgtGxvXsgP8bfk2ZLy5dk16Y3xgrpvFkwu5YBJ5FK5fET6NqNBwotALvW7B3cHk",
  "key24": "4mK5Yn9U1hAZzcsVPa1sNjZSLyRJNrWuRVnGyXHxWProHov1bkkfr3dMoTchuLis4H9G1cL8uAX1cPtWsLi616JP"
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
