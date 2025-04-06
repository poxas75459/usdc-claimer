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
    "2H2VpXn1irZWonJ5HMpzNu4THiFTjNxPosVLnc9irXZgCAU3UG5gjVBgbkUUFXr8KQEx7aBvbKaU3mrUrfKGGoL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZoW78DMPhXtTLnciTVN715iXhhwXUuFuQQWzsiBBvv7CqbnABaGDjP8goZF2dLKpxAonkXC22a45fNb8Af7zf3",
  "key1": "3bDumTBYP1uAHPtgBCyzEHCY9YLUj8NSvV3EE4KHvXNt6dgaSYVf4jqFUhpWPsxYKZ5JBqLkGV6fptB6y1tpCzs6",
  "key2": "2Cn8Lcn3ejYJNwdcXCxpQDnhEZcBAKHzYNR8eG3yvUYYoc7bRnSjzvgUSHngCoUBn5BCygqZa1PtqZm8ZdtEtUe2",
  "key3": "N6QvoqDmrYxWDmnKRs1KqMqCP64ygzg5BVqdxP16eJ6sXJc9KyTco7jLjJCMAXVtZMeUf75whhjpsoVS4L8EruT",
  "key4": "3wTN3XkNMEL8gUjqc8jm9jjtP8wVtxTr2mb1Zss7cektm4uzxL2rCsV7S68sWtv3754mvNa64DX4DHJNBdAVTyxu",
  "key5": "4QJMb1mFxEtur48BWeBhSMpL2miMEbr9KhoHM2fE9H3Jc5eg6Qdn8oXsVFBAHFBMukLF9mdS21npqM8NGRDRzPJv",
  "key6": "5yisGytYNHVxR574wDd34ntBDdj6632WnJxoencBHqJeMB24UqG5ACM4FvqKMgBDmzLEkAjjsnMFjDxfrG5qFQrv",
  "key7": "5egptSwzyfHQjJgoXhaz4N1cdo4dB4L6SvG1mT1SeHFeCRJmM5pFccfCEeE8fQ9JMYNYwN8KRpoohLN8NcRLjKLU",
  "key8": "4VjR4iBybSVxJyz2fb1XM51e7K9fNPENUw4Cmu6XV24hJkTJwLpANu1AXgvNfTV1KAfsAMfPPHndaqTFPwGLjxCa",
  "key9": "5aBNap1j35SzUeGzwdBFfToLAaWEWk46ReATbFyhK7qJ9C8FKTdcQTjsJApqaEuHCcr9fAES8PEfa6zsNLmPxuJ9",
  "key10": "3X5JZFgXbHLCbK3E4p93qYPUoHywtjpaAKqf2cDzXj7tKfWcGgv9S1ac2yaSsGjEoStMCTK69cLn7wvrtvw7Y5zh",
  "key11": "MCnqzhGpqVxhhJ9wdipbHzJxExmVCsygKFQZZbyEKW9DDToFAWAPVaNJjKaDNeksuwtzfBo8H8h2mhhP1JZtXoH",
  "key12": "3CY57JbFJp2ukUoGngSBng3MQZYUSwKx3VcGWRo2JG5F3c7kFJMs8ejxeNqJyEWiu14V5t4hgfEL6fBmsYg9dGcC",
  "key13": "3jXgvPFsnK32HbK3f2R6fYVTJxc4vbEqooT1UVVk43HaWeNDKKFKYDcL2mogyY3SJoS1oZSygcdWgMbkTr59G3qB",
  "key14": "5Px8BW6aytMPRot9MM5cWb4qKtC3zeKKQV51WELvwpg42Hyx595DyqKhK185M3ur21BpQswUHn54aSPMbBqhaKjA",
  "key15": "4cLTY4gDZHBFosvcUih4uv1y4bDjAraDppeFyFvKmKaQie7nELWYZPohS5GhKdzNz5fPasNaLqqQ4svSr72i3MJu",
  "key16": "65XHjsb1XjTTqs6G9Gy86stBivJwJV56yyARovweT1GfviLHPVUk7fewzmrGBsMXUDk8PnzmdF7oh2xWxw8WzNsu",
  "key17": "5vVDk34BSU9UDJ2RhXDH59QB33ucrcND79mkwRSYDCqn9v292UQdotLV3Ht8CgJbGbpqaWfUom8tMt9jTqeB6mo3",
  "key18": "WRZaZL73vzJkiySbTbzdZU2VwgyZT4sFbYpGK2sizTXXCRVrQz7GJY5YF6PxWY79QUzhTmAnp3s8tMTbaeK7RVR",
  "key19": "4QE68BPokLjWFeGAQdKKYHAGTBf9VjMGapyiD8xC96yVYV2qcRb6HyXfBRE9mjDNEfef1oSdsB63ux21QPkY5uXN",
  "key20": "27quuXw5qkgc9WCVZgFiFtbeA2hdGNew9vcXQkw6SeUyYakwVmMNTj7d4VQjFqQmDUubP8jdCBmyefYjrbHVzfVG",
  "key21": "4MmdsbWWAw9QYAB4TSzn5asEtrTjWwXdFDxJxz9aq6DQHBrDWXRpY8dJwpHeVgdxbe6rR9ucvAnTGD6N6zoXfw5G",
  "key22": "2GrAuuGFXV5g71PZ3dxbZnkRxrGkqmKCMzcb5Vc4C68czqktiUZqmsNpZQsWAXJerDchhchm4RwmnULkxCHu1vkR",
  "key23": "4Gmyc5XeF7NMREiHp6fhEGnkmCi4twNcgb1oTwnhuaKxAzskHRibTrnd1VH3jLy6wJBCTTR8Tm5KTN7njnbuG2gi",
  "key24": "4P76JhSAQsBnNQdeoiRsxXYTa14GdcLeSpS3AvMfkEkcnvPVNHEau8f5MeZMyBVNqFn9xVJgM7pi25AWUAe6Uqgz",
  "key25": "H8GXCwt87vA3qthNeZytJz4bUbwNnup7vfy4yBv2oU7aVQN25VYZSzFkVE6ZLE7sChm5ZuvCUwb2w2cm1dyNN6q",
  "key26": "2512BjdMuHYEHzu2jBu8nLcXNhLxnsYk6Qn4fQESicTBrtKBPN5BK2WXGRGHy5FcQA3K2Wr5spbAFooesc2MgXT8",
  "key27": "5acAddgKLyfUstus47ZraeKNhM4Sz6iLuuV7W4hcCMJ56PGKS4ZFtDhSVh8n8bCdiAznTp3sUmbkqLehGqAVD92z",
  "key28": "5TDpfVj8GKFfxqvrn9Yxrb8VhUW5MrcmPQVxyTBnARZe53KoMDigmVXFtxe4a5n9pma68qWg3shXhdyuH2Z12DDX",
  "key29": "5j2yHuGnS5LZppN7qoWGfkESaT78ioKDNq3q5hTDmYFDzFMFGLofXK9Xe47r7oVobmZm6ZtYmsRKHodeKdA2e4Dv",
  "key30": "4FujNjyDhkHqqKtGue5yekzgAvPSfsGhno9mqGJap9ZqaYT8ZxKBQEqtXB9gdsaazt3yGrKzas5n19TCpsJzEPEf",
  "key31": "4KdKpLwiNdTmADwy32e2Tu3mBnqXFdbGKaKr8Wpu4tBPrGgjeqAEnTozf81XEfTibbCm8hUCrWAYtw7eantf43dk",
  "key32": "4A6mGCnTFkqacEb82nfnDEcDrRNq76NJ83FcXrhe8S66QPRJdr5oU5T7Sn2BeMrWMVpCDk1BwpKWwdHCUxG2BHD8",
  "key33": "3L1sfDEZgms5tZx2Q15FnAzsv1sKvCsyqiJLyQxzN3m56jGAL9fY6TSN9F6jKaGr8LU8rFg3fReYM8eXy9UtPbb",
  "key34": "2UUuyBgXQ34rMHhD6YLUN6AQVQKH4g9P83sH1tcsC89qSyxK8ssciExWWXQU9MrxJfjrpoV78FEyQhkyQsfrURPd",
  "key35": "29ZxjF48wDaiQisDYtbjePaDVK3aPaAckNedfzMSLAREFWXzoCPyjAnT8jaV2rrnzeyHSJbim9A33CXEeYvRh6A4",
  "key36": "66V5kgfftromo5sNcWZXRD4qgE7DNBBbyhiL5dZALDcyQx9YFn8DSnbHV8oni5mZ9DJx8wnZjKYF41E4YfWWBCUu",
  "key37": "3pxFEJ2G1njTFGWSVjSSTkoerQtgpm15wNFTp5zaHVZpL85HXFpmredoLJeusotMD7SJ21yUBZEvBJgknkYCkwmJ",
  "key38": "3TJtfr4qXBvk1Xwo8arSehARRSzPbSdgJ77Dte2TQh3DSJrnzSWSZGze8DSkZyYpwYCzBuW2aDyayZ7ou9Kksgcv",
  "key39": "3o2pamamRkp8pJ5yHHGRboeBUo24BwbwLvu4EHsW1N2gfvvv5hsg37bdN2c67QSzaNYVh7Wwdog1N8DmdH5nrpDq",
  "key40": "2C3hiyjfbuTJMPV3J7PwqUS4NbfqrwdgEtF8FCoFgNxwEJeM2jRRLLqjen5YJd9Yw5C7UD5FoEVF7VCe8YjheoxP",
  "key41": "5bdGZb2n1FtNPX51cWZpUAnhZBh6U76swW4SMawPAa19AfWnXKfB123Zn99zxthiTiBXud7v2hiugg1upV558EVQ",
  "key42": "4kDYKfLPt6FYLvDVj1vQCYHJPJVowG63Vn3erujo7Wo4JHNECiZooDM7RvWU1y8tqfKSZbtFs4P9U6iqgFfp6uWm",
  "key43": "2AcaJUauT6MFUMaRAm8hmKLsNDzc4N88BHBHkg5uMDrcGS6v78Tb7oYkzooekAgaqjF51YNyQ2Q8JrWDLNRNBHHf",
  "key44": "3LfFmmdt8p9v1JpM22zJ8L8p4xABv4hCVSf5vNHtYmQV6mU6beKZe9YxT5bx1qyVbmTvEcNNKmeF6Pu4GEQomqgk",
  "key45": "5WzY7ppsLSMhbUWe1pMhvAoVFLSsgC2dz8KPAawEW7DnSMszPzTvAcM61Fn4jg4qTqguxtySovos5PFByDtUvPVs",
  "key46": "4ReUmtETLc5WjBMMHxki5kTManZt5ZyEEsfzc8BCW1QKZphDEMwKXqQ3n589xNXHskuvEhQE6nJJkLoCq9gKk3ms",
  "key47": "29z7axWzhrv9Td9o6BeE7H9bLoHPk8EaKdJEnUjyGq4Z4gKRBBSSgsZCCakTCkVBGBZVxiXvCeWdUnBdEGWUf48J"
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
