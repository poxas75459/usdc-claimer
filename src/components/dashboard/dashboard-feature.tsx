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
    "56WVVNfeVxUh6qjMsdc3rvMLC9hmnfSAPCCC1tzWrKg188aXDYndYFFgHAfuEtgbySVWUddjJbgJQ1R6Li5ZxxwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VN9o8xQVWcGPnMgDGgpWrG4TovWtksdSoPdhi1EM6KEofTmYfk4AYkVE4DrtDsCY3pkqZtpm4XhZWueTbMUjNKz",
  "key1": "25b15jg53bp9t2UWD86mHRB3C3Gv2hHpss3ckL9BPt6DuTKuR71XcJbaUGZMv5TeLfHJFDKVjBn6fJkqJGix5C83",
  "key2": "24XjLVS2zwBPhdXVhaFCTdd8m9LanSDxAGDmiyo26BsLo6QHjYkAv1Wtjkppmh339KEQ5gxgvARMmYjxUzF4JduS",
  "key3": "5i6En6q2gz3fc2JiisDoaT88Ye86p6aeoZe6egoVTNJrHecdm7rKurWxaH6Qu6w8iDdFQUV1CJaB2F9WMiTz9pma",
  "key4": "SMYV3CiiqHW48ebQDuAaAnUMtZNvYFokxE11dQDLkvbbPFXnE3mu1Dss9JRdCVSCrTcANz5nezAVcEyPKUJjmLu",
  "key5": "o7NPczJpWjzDZ1ya9oiXnsUL1wENYGc9boGP3WXzGoU2nNc8rgA5TWSnwpTmGfaSbYzJpcGEX1W7z4Z7df9BgT2",
  "key6": "45fM2Mg3dJ8BMK7i1Az7gZq9w7hXejdfEnFbVUX94jiGjFPbwQm4xr9eS7Nm2FHZhEHKXeetBqBH8HhfQntDyHrs",
  "key7": "bzqg9AuJop3HoWVntdSqF7u3eknw33DBw6r85guDYmAHJx9Mzmn2sgQ9QGdSmkfJUYFJoXdFih9MkixQgfhuceM",
  "key8": "3SfKEH5xUj8amfrJ8uxCkdfjAanRKtrTbEok52NXs1E9iEzgjupQjiwT1Z7ADdzuXHwH98sFt8mGmjX4vHqgcFh9",
  "key9": "3r63LUaXjCjCrH7VKoke8ktJZmnwmGGLa9eM9pV1Z6dF17HQxMEaieHt7rFDomTj1j9pYazEWq1ZCUHXSsUiCpUL",
  "key10": "kQA75ha15BRnCmWKS9AP3QJuZUDCjWZWwyGqWrvhPqMgC9fYCGYF8uwtJT1TbZFwH4ZRbEeCtQyTr4EDkJxgdYK",
  "key11": "geY8oPRzvMZiLJLF9GCqYXjfZkuiXQnJGfoVZRUMiwMMHEZYpgkkS1edtXToUhZciPmEboydjGWvV5kdhH1fJVj",
  "key12": "24AwwTuMAJdyjPYSFSXggkrLpASK4Nph2mE66s48QxHZ1jy9LUFZemT7CHxy8QA8t2fJHSdEDa54sGeo2vH35o1a",
  "key13": "3abreW78s52CbjNZVAoFXMoBgrE2oYXy6A4H2DJ8qsCzDyxj1ApFkn7HMvB9oG9cGxK6dVH4TszaRHHZSoNRVx6V",
  "key14": "tAMYTRfj597Wdk5XWjgFzeCVUfqENMQvjBnLXjPiLritvtm5yKKNBhXaaVJfs4T4a9pd4e2rm36kJ1a7z8NdfgC",
  "key15": "5SRukptj7jokdk1zXqvCavJEGbv6ZbjhQgMRjTSwHyxrQj5ABWywQMAkDgQqz9qskxLXWEqfXtgCqZ28enN4yvw7",
  "key16": "iPdx1Wr5k8gEHiYvXFjtxjnwHzFKd4HrUH3tjDjUsVSpCn775MKQYfqjtSKfGFPt8SJtj3weMrcN3kKRoPpsKMA",
  "key17": "2yKHBbVggedpYLdFdzs2CvJYBFmTPC7ng2e8itD4RtozMAArqssr5QwMt9dXAzKALrWZ7TxeiVHC7xvzYAwwysGD",
  "key18": "5GQmY8UegHSA16BxdeMCHBUUSUkxRdEkeNecn5D6TPjhHugJbLUwc17rL1hH5F1wejN3jo3BUrEF4eXgxbx7seEJ",
  "key19": "5rVgQKdEyJwXZLSsQZN6huNTozhkwTxCvSfWCj5T6PEw7mWzHDWDr2Swes4FnC1vatNEZDrPz8KFwt4FwizYwcnF",
  "key20": "THwVY3soaWkFHYAGM8dQGmgZLGnDbaN8TqYs2QLU2nRAHsc5nbetA1fdEsWVGx4ppJSDdybHHXH8dHdaHXg5Uua",
  "key21": "4iEzdGWKkgKL7Mrk8KdRu2kb3RmJ9hnCDv3cgAfRpzwZ2nayEeY2hXx2EU8ZL97EQJSiG8rDp1vQJ5A6AJ2Gq1GK",
  "key22": "4TCvER6adEC6ds2eAyKEGrhwr4z7ejHbgjM1a31YYhpvz1Ry7E7VgFofjXRYmc7XdtwY57QRwyhQ3ojrRpfN5edt",
  "key23": "4RSRnu9UtVYtUAfoS6Z1c6QfaP8znyJnbpGYw1qy4eNt6ejSY2Ppdy44ReCjRQSrpVMtEHpYTuNsDbuUMvJEhazj",
  "key24": "4hDqNrmnSdDL25cZSY9VbVLvEqw3m4ELSKGWCwdKx3jBoXURmMW39U2jkadPf9FtAZn8pCHpNTxBypoqs9VJtseA",
  "key25": "21UGRfwxbGRab6GJ7tchopVye5uUvmJQsgEJCMKbQwt3X1xv66vMRRgULjRbrkA5sPFYgb1bD7xGWgigHKsyHCZa",
  "key26": "TZGHV6DKWpu3LkeN1w8rQGgfFDx2jxVuGKDaRCQZBGGi4KUWvbtYqdyDUk8sPafk7bj2FiPbQJ5Y6xpbKLShufr",
  "key27": "2PFSP5SXiqBXa3Zjfg6iYFTNzaMFRc8Ya9j9VgsjSeLACNAE15eJfYvGcQRt212CLGVE6F9Ro1wfTJTTsPCz5Adn",
  "key28": "36am9fX4gxTDcUSHZfiNFu33cA1nisg4PnNGoBwbT38WPfDiWWzfzY8h9n4twnNf6qMoaWyTwjEmPAieNtraAsap",
  "key29": "5i9WThfvC9NgmZUjZxFtH6Y2CjYCfSD6PPUatajyCSgvhyS9h8XnG1jkNeSkTN42uLKNVLNuPCEbxMJsWSgyS8vL",
  "key30": "43JpgmxpSHAXMtjsE24zkHnoMg8kD7QkdJgzGB2esaRvKkWe4iqs7AKduWuSFuRGih8PBUDLeqAffy8rnzUL62zC",
  "key31": "5NKiHzQ35ZEYKcEmCSs1AraxpKyC4nGD5Liq1ppRuTpPpHesvdDTnsz6DNnrDu8dnFKqELUczirLZASY7bRkH6JT",
  "key32": "29WiiFa8417y8uddPwQt3K77qr2ee4GJgzbWDBHKEysG9pwyZgZ4Dbp4Gshkqw7SoGn3swPQnk5TjcEH1LXV5NWj",
  "key33": "53xcPXLNiaN8un2i8eNkxgsbXxvPGLP1R4wWvZaMNGKpqeVxqtkJbwUUcCTFrz6LtU2MpbUD1d278HgANjSfNJiE",
  "key34": "RqGbVCRoQRRYe8ziz2yvz4KWpTmDa19hviksJr7LnY3d14tjYrtoVQ9rxVtuJJ6UDNCVk73BfoMAK998fAjuQrc",
  "key35": "55RqUBxbRGTiVSCz5mc5sMBx6MuLUoJXvDKymGainoXmjxPPkwvBfDywcQZ9axf6fe6CWhed5w3zn7V7WecCUF6j",
  "key36": "4mTxYpyQQ3jYLEDoKGdDiJyrmH6wKoh7wR1TknadYsrHnesop7EYgSLnXFvRDPKh19KqteXnPX5wwzQLBXpNKQx8",
  "key37": "67MiZxLpkGEozYJrVksaVtxDQBE9o5hrgAkz2ae35PHvK2pAdi9mWp9aKgsL5kCvM5ojDDD844FDYVLqX7tVA62M",
  "key38": "4wpSNCuCgifVPvKB76ZBESbpNt8XkPksZWo7hyXXPU1dmPHPefvQafT6ZvUt77m18AuowpcR8xaUbG2akcm9sJva",
  "key39": "2aQKHNMDh7C9YpXBK8Lgfj5prJrmWtAWsep1Ee3TkisSEisaxY5pYLzCKw3RfMjjmhb118EV3HFUKwS2iro9bwUt",
  "key40": "StJkGCUzEbAHB31SL2Ayg9ninY8NeoQVpArZU4nNuzDyckbrN1xjKjg1hawCGiHKdJDLD7y1J68FEbBAtPcFcou",
  "key41": "5Z84KnD8oqzxLrfgC7B1FWFRTgnjyATxGBULDZjSKvrow5CTGSokVvH1E5yPXYuwrpDtN6gEdZfby8A5W9AFs38u",
  "key42": "MsBYJnwnGqFEWfH9neq4Zs4ZHKEB6juwwcoFNzz3icN1ZaFftt7416yrMS3gsjm2mNgQGpGxNyPi9vbRRy5dCcm",
  "key43": "ahvV1m5G53AfATHbdjP6n3gJppzRdhwNzeVnQD8n8ygGwcooMbcK4XxsNcaUpz8xFXRCThw9PetnzdJBqBgcUa8",
  "key44": "Mj9nwQxi2G8imHJBC93DJ2QYR44VnkRcbaPdZgxw83mFTydsbZucbt7DFQ3D2E1xisaWs64yRCyfLnM55LiVLZ1",
  "key45": "4MxJhS9CvXa6bBKx4VyeWfEbDHuqS1aB7nQNgLiJfF879tFhpUjvni63XAZPiUYXLQXHCdYyDku7EyzWodoEkgbS",
  "key46": "5QUW1baQ2iPVHfQ5XBuJbDedg3RGxH4g1A7m7gBqTrgBQzQboJ6CnWsZVqZHUa7f72mCT3VXSy1DPr7JSpYZYBZD",
  "key47": "4yXZv3DRqwv8UDn9EkJLSymgizTJtyV1M9AqV7KLWotrgM8wbCX7SuTxCBN9cZB1k21SpsC8XYw1uidsCCUZc67t",
  "key48": "2w4c24rNvpJiUqzYX8xtJdGAiF9RvqxL1v2SKoURAc7oW9FG2GmBeiGHKTNTv4RtYoc85dWJP1pNL9GcL5nrsjfj",
  "key49": "4kKCzrrwfawigth86ttRZKBYxxYHsJSTo3dVY9kjb5o1VJn6d6RivMuPg5fkHQMfA2PCh93XYdWxo2RsSUbfudSg"
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
