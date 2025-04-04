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
    "2G2rnKEvzkBqoczNqKM9YR9n5pzyWZ8mJoM4mU2oe4jDmp7hgH9rmC69N6CBdta9VG8KBssPBA2bKyDskVf7xjSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pks7GRkFaLLkRjAfnC2PWnncXH16do6JeW5vjKRguocUNcUugJWNnLfrt3UkDPaf5qNWiCPKy8RukapByHkR8op",
  "key1": "hNUosvGUtX9rTU4uAfWgFErobjv7bXPHTwTFcRwDXhizqr7waEdxvBMM9NaYCFQ6ZgGYGhYzr5wEHQx84aR6Jmk",
  "key2": "4E8cbzsN7Hb6azNtDLWq2hw6gB61SDKJd4CcgWRgqE9FmRuGgRuUapV33E9eJW8NQwQigHQDo7Y5yXyARF3goKKc",
  "key3": "31oRdNjKn1Sqmxn7HBNvmhJPMtAYTp48STr59wB7p2yEiENnvY47gytc6cuqH6t7vfaNLAZVdvnR6MNhm6JLmB9z",
  "key4": "5zWQN7z2S5r6bz5hSPQK5DB3UMkCePuM5BRR9QnTM6jJsH89nKsZX8S2cyXikUB82wYU9MSRpBfbD8bhBHDJLLtY",
  "key5": "P3rjkhwcJ8FDxLjPnKr95iMkVwiEsz8M52THfxpSQgc3YvLk4aCV2mF8UZPtKt9GE2xgt51KB5gwx3BnP1Cntcg",
  "key6": "fMtqjsuisXQHLwXcasXDPozDoDQifDv5obpQyrZ8jRJKkQus9mjE6FC9W8t8VAK9BD8LqN9u8i7Gb6PjWwdFEs4",
  "key7": "4pjFJvDqibngRMspk5EGTVcUpN5sKgtJ3xzbj5XSkvm8t6sZy4aoqV1eHPCMgJwb1q1wh4z3rxZMW6f6N5NruKYN",
  "key8": "4XDMVNmHQDm5mKUWVRhEmqf8iVs6VWzb1vTjtyHPmUpasMStTAfVpqmXQ2LYbwgyDUr4jrWZLiPWzTYv11ypgk3j",
  "key9": "5VkaHvhxkCxHcSAH6FR1esRwkrNdVigXQSvRZqzp5L4spWyDPCvkh8wthc5qqNjXz5Re5P1rfGkcpucYi8yz2Gyp",
  "key10": "2FyoKNzx5Hovvf5cAmDnMhFvY4m3JCWxVdfesZm8x1dBK5ueyEwp1mCXLtUpf5KnNENgxQeeMyq8FYvTcGewMGny",
  "key11": "4HXa1MymE6AV3pT1tmMhc2sZbCKKm9P5DV9EotaJfHxo6sLBwgyRAXACfvvpYcsAptDr4cgZadixtcf9oDmXE3np",
  "key12": "2Rhw5KBEEt37x2uGHWRpQQCDr2XTy2sJHC5AJXuLTdhg2iqErVwHvyqPGi9h8ARN6yZRmRN7LZeqL91TEpWbVddW",
  "key13": "585LbFxt6jQVm3Cy1x99Ty4J1XgKkVwgJUc18Y6WBPEeERWzeF8eaw62RNuAi9K2CEadTwpnTJy6GVzBpnHRMooP",
  "key14": "5ocQCY5TWatSuSXmpy3RuECwHubXku938LrFxNn2SeQwURZg47UNbuAbvaNR8qEyxdP1bM6mEbcz48KWk3EdB9Y1",
  "key15": "32SgBAQ59d99M82AJRnePGjfN6JXAus1513w1BmL4D8p8jSWsbFyTCKgCPTn3ZL1CwHmgcg4iJi61kR88ryEPrM1",
  "key16": "4JVZ2aZpAZqJ3uXQdbyuVmuVFpVaKDFTC5yKGQw2KmG2dnGDy9pFwZ6ZvE9B7NR8WN27Srd1vb9GdbFataGqiGw",
  "key17": "415dKenvnDUWgH9h3wjwDrNB9MnSGvg6ya4Ruu1qWhxHu1tmNXKXg93UgDet548PNQHAQsstfTV9fozPpNhREG4K",
  "key18": "5zZxGA9X5xajVxtiPvqah1a3qDjKA4FybM13mX9UaFeMX17xwbUc6rqgM6RrwyVcKDHCCQBbaFuax8RoLAkPExKz",
  "key19": "6u38PMCc6LuM3aGuPVJsFvyBq89kH73azu2R5nYWcBEuCEqoJ33oSW1vMz6sw49SBUkxfC2FV3xC8XmBtW5Td37",
  "key20": "2sJdUnVwdQc58Ne9qZE8hkjb3hGT3nDLgDKZufqSvMzoBN2KPW4Mzs4iPf2fwa8Dgv974eaqzvWFND9KhAVra6hk",
  "key21": "2SP2Fn4gVHK1eaFZXbBorCch2m456MLvDyPfP9XZPbWWYvM2HoSaDG1JxS4ATFH8T6ybSCkwVp7KyeDG9xwHQ28P",
  "key22": "4jZ8d7vY9y4ac2HdHzxgiQvYTg5ft5JHH87Zimx1qog5D2jZCZfj2WD9D83S1iZbjC5sdaVWVERTWzrtXMpEAKoB",
  "key23": "4YnT116JcfYu4RXhXHXX9BGhQShFFG3X4Zvje45MvfUu81AfUXyahX4gtCAYsqrzJZjCH3cDjxCG1rUnQnJ2c1Le",
  "key24": "3EEjcKro3x7Dqqej2NLYKKR2ve6FA4mpdXbFx8GFJ8Faghqw6Sr5uW1XoJ7MKHaDYAHLe7dhfcec3VF1JUDLU28V",
  "key25": "EgUDqcTGWmVYM2oRNwU9P5Lww6XeTqTaCSj1wg5f76NPgXn4voL1PJqC8vcSLky4Vok94G3f89rJcTBCTTEUZTj",
  "key26": "2kA9jrN2FdaVCs652YFJf5yLyaAmT2omu9EeU35ztohVJrvQXhW2nR197kDwBZLp8n5tyfaoPwcbQSwYvaeP3vWv",
  "key27": "5sL6Xa8P9DA7dAGahK97wf7eLqmeUQkPXbJ36Eo9iCaJPCsdzDW3qXsL2vDT5MFjyqW3dmTFNKEhwHWWzqQMeruq",
  "key28": "4LMnAG2Ykk2LgPh4EwErBzywP4YngkqeoREbmSWbG2xyEFwNVpcvNmT4NfsoB8UD3xrVsb8JfSVciUoCEoxLsPLo",
  "key29": "3Cr6z7aqm232Rfm3fMvVxYJJVLLqALmHunLprQ8K27z6s1DBbwjVv5p5kPSjb51VQzeb8oyBxGJY9pwf3piQAD9s",
  "key30": "5sZ5FsUnfci9Z3EWK7oZEcDZituBpZ1eR6SFAjsZe3yLQB82z7dS4Rvsz8SpeB8P8KZoGVMPi9VooHezCXdkr4mu",
  "key31": "3x2RQFNZe2MVwmwPhjQrS1hZvBG5uwsFBg95ymURtk9KyMVgRYY8rDSshffHZJKb48xrSKAmMPvjrxhypErUzqtK",
  "key32": "5ZSCmMQqQZfnCkTX7Yu4tYte4jaKnMFoZc3mxEcYd7RxRycDmWFKRAskkEMNPzMzFg82iyHC9UjDgxBLNrbkWLjq",
  "key33": "5B27XSxWJLXbGaimp3EY1ZtHd7z2swaB4Rrndj6mEGdSMwRDziWdtmVddX67bstu649LzCNtC2cNejZLY36kp5DX",
  "key34": "3QHtmrp4dwrttSrUqGuukSR57rQ3RMnMatYjekTA7iLUg8tEtN4jWK7wZL7TfLWmzTmKvzJ9yJiRhs1FbEpr8NxZ",
  "key35": "jtZ8RRVx1ewFXPtSDZC7Yo1GVZgkGbj5u394Qa84bSFCyemNAMPSGfsmy84WpN8DsQb9LwczqrKEeXeGhpBoyWj",
  "key36": "sE4hYa5zgngj9iKQCW9Nzs1S7EFTvzNVMiX3SrdXFbwpYsBoQ1rjSDR5Z3byXXgpf2X9VChXRMUyKTXh9VsmZNQ",
  "key37": "3pbp2BZMMK73u6xMHNLRQSmoCbfejELL3rbucvEwwGMf92tVYQ15zRtAi7NVAwZvKzVsFyRPGjpeaeGtAStjEerA",
  "key38": "57F1tVeVya88x1EXDtHmrXz97b9jVZmzZEAc3EAjxuEynM72w7Lncuri76S9AZajHWe6f2KeJFWjrBDye34CG59F"
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
