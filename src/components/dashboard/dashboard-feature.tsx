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
    "59NEbEPDzJdaoQtgVFmDiN423Dt8EFiFrWZTWBhdRgD9wHcGKMsEGypdCeyaJ3xuE9w9WK6Vozqoh4kETr63Eq1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TToaYsBkkQV7MUh7fCQ99jSdJqVrd3fREV3KzqDJ21RPmBVXesvN5XAPPgHw2AQJ9Kzkqrg2sN8UtgwQQfFNks",
  "key1": "3dyb3XrTqQm4EvTLTUv33X5WNRZaZTEZxUwCaxpGouPHtAAJDDYNFScJ4gTo2HTibpWebypsFmUzJ7eYcc9kQTS1",
  "key2": "3ouKKxtVY4Zdj9PXuKEzFQNAP3S1836jg16yC5v8FvzbLn297e3v2Rjzk69Urh3XUk84aQDXtAMWaE4wpEyXA267",
  "key3": "KBpg3Br8vw3SZK7BJm9AgeXaPRN6zbCB3jepijni9R4BUjzLieWzLUgKSLjm78J2xNDeVxbzDjD61NyewbCL9J3",
  "key4": "wkg6BxkKzF6vk2Nx23CVmNcXbkH2KaaPRCe9FtmXBTcJNga5sbzKzCwB9pxXLaigaTARCdbaeGT86zFiawRkgAo",
  "key5": "4Nuqt2u482mD3FKwqh5JnpSqq2ygRxc3Ef5hjAZgDrUmreauMbTbJ6K5sTzrmKV5WZmniPUEbxMd7Sj4s66ubyoT",
  "key6": "2ff1xDvwAkv1TTENnv7gxFGNTP72dLqtgAT8KcnjkdqGRNbYR9vEURtMmiNHCGUZfrHsf9FzE5ThixCrj14kbJm4",
  "key7": "2STMWJFEDorqARKAR3Fentyn3Wps1p65t4pwGK3p48wZR7tzKZs8LkRtwADp7nUQTnopUsXrtdjgHvY5gPgDQtEg",
  "key8": "3yK5xxV3XnzwTUgzgybZzCSq3txHFQiXWWspHXY1MnHZuKpKXDd4qqBeTn9zEDH3MKBTLbRBFjGt7nsiLNFgNSXG",
  "key9": "9V77YfpAeWSmEnq3tbs6Ty61UjPXKkWt8vuTF1hmRSgKRJPF67vZNM8n98Ter5EAv6pMPcYqx1WBgf3chh9Wcmo",
  "key10": "3P3YsRSyTih9RJSetFMmGegRL7p3SWywXYakD8bj8y1LXnPUUZ2b5pYcZjtAPcbnR4GysP54ksNVLmT1JC1mZ8VH",
  "key11": "4FK1Kn6iVmDUZqiGxrjLTYWbMmnz2ahY21S1ce3ZypottXvJy7xEfocPkbPUCpLWkmzmDDGrzz61jLuFGGJUZEyk",
  "key12": "563HVuUorPeUV8cydoWhffyVUpvWZmWE9ncz11nsdKkU4o7yo2J72hchgPydgjKwTh8Qfuco4p83Z2HxRHdB5dt3",
  "key13": "3KRxSyhBU6dGi1dJQPfQLhsvwsaAuCzLDjpLNzmupnskXM8K9Tr3LwVSwBH21t1HZ54rBA5LTYajn6rGK54a9Tvc",
  "key14": "5WCSbzehKceU4pYarEJGq3iNkUSR67qx32BSiJJKfntYgJr4QV5Mr6uJ2dz8rVNvpJJGP93NVZiBrhRw24ByV79C",
  "key15": "4PAe5JzkhvTeGCkLgc1TTwTPUMHiig9zVUroZ1eKdp1cmsTyN4ahUeeaLJKw6w4usFBs4MS4WbwssKCf6Zdm5tHz",
  "key16": "5AkiyAR6yxTo8ZG6FD3tvFC6kBbWdqzdn83pBRg7qGYiac8s5etaQtzu2orhPGZxEWC3Urmk1cXXZCxAbfT4igu2",
  "key17": "k3j76ZWHeQZGpnqKeMFBXJZfGBwsUvhtMrFF5eN46R6FFn4X5DHZzTJYdyLpTV12tD9YDy7w5To7mvuo5RN6TME",
  "key18": "4oQ8McABpYPbAuiftbAM6eQXFUzPiHPj2tkRqF9AkrkDwV5BUrwcxfMkRFLqMBDrGQfDmUt6K7DsrgpFDo98xfZM",
  "key19": "4HGRubeCUnfe6MxndsXvDRvNggtAZqNhEpRLgxYqBrij7sJho4KB7CT5oBFvi6c4SvjquE2wvMA2rUvBujb2m1kh",
  "key20": "ACmSM2KrytebBZzZp3cnGkiD6Qzcj1C7PYddn4SN6Ua7ixrYJsxag3S8rKbPxGjXBbUyFwf3PpQEG4WAbAExfLp",
  "key21": "5zDi3LjE9VFnuz43ynA8c85XYYzGMHW8Pw21i94kZnFq1HJPhuwcyf6MoaLia385hZ2KbWGZe44ZSoCUAWcjN1mb",
  "key22": "4Tnad4nS6xdjwvFmVFH241M1FanSr6WjpZhVMgpvAaN5brrod8u7JzVE5zt8TfQ6KYFQn8KP7hAC3cVUjdqNyaj7",
  "key23": "2yPuchm9ynC7p68BEF2PMxYhKMLXxQECWaCobbBqbcx6NdsjbHxC6p1YgpvaVNGGxSUKqKHcBg5XZbesckQU1t5X",
  "key24": "5Aeb7Mpv2R6gw6bauiy8SLVFPNJdBpN8rFBefzca9Z7jh7xW2qzBv9ENU5EvdtMfpeFHptg8diGux8ezBUEF1Ws6",
  "key25": "474RAWbq5bsVx2FSWc5XDFPLtD75XijrijjnBDGYponQ86CtkiRhUaHNz13kXhoDtPRf6k5FMRRRxi5xnfXxLS31",
  "key26": "4MnzoA6vFEHCHEzBtdtyM2MkmeVaqt7cqS5H6psp1M1TpwvVs4D8VeGU9ztqsg5Qb9FSjZTgP54d7LTsT93YTM4U",
  "key27": "5D94Xizt1C4qrW7vTkd7W5k726RXFyLDcdpNYtApXZBDRKCnFSzUuJUg1HH7osZsG5Yki5CDHsz3TB1bmEv87nRQ",
  "key28": "5gxrpaRGDVrnv3SWJw62nhBA5UWexyiies5QxdGzWuh3yvdLhrD7qtWwJ4iSxQg34FxawFKniTerMQ3ZXjRA3ccW",
  "key29": "HkVPKi8egYrX6iWYGHdbdHzuKyuP7LW2UX9mvpooXXY5Uw332XBx1UCnX7LSkkSN62isSWZkAZeygrmnKnbz9dY",
  "key30": "w3tpXe6rXyZEriCpYusYB1tgrvvDvbKUhivEqyB4YSj9b5q6KrF6hACNoKvYi7ZfGdy6c5HBA4JunvDqBfNBTCn"
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
