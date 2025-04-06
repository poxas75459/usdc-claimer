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
    "nzdn26HcrSfby5nCfCTLJHcw4kKLWtsdcmFMeXSX6LFpY5senMrLzWWRLhDqoLPDgaP7B8tNXNC1oPEr6te6X7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5YhRw2UnyT85FZAoYmFNxNMgNczxt4aWjh98EEQFtSWRuW6sipCXPJ1J9zmiyknMWiuNBmNq2GK9smydATEeiB",
  "key1": "5TZ46DyRKHZcKpP62BsDCx6VNqBYodHzJQEjzXTepsUeZnjBAjMeuWWMeDiPD8EQcR2yyJoidkkgpJLehm6cZJt5",
  "key2": "4Zon7hxH3VD91De6hr2wMQkvb4UF4Cwp3QFcMj1cnWKsFMuja67GaB3ReeRmkao4CTaAnq7dnVpYNboqJBjjtHKa",
  "key3": "29bqvGWm5CBZKCFE1fj1GCAyvFEfqxEpdupzGkya1dxbsdEKubxKzTA8i6bFeCXNXpBacPat3r7kbhANBZpPxjvz",
  "key4": "3Rnc148Utch3Fw8D4YLdb4iMM8eztQEASWHWXgTPqcdJY3Wnywut8XGcmdiefKZGhMebRbLyR1cfr1yeMULB5vwn",
  "key5": "4Wtkqs8QSkft7PhEX7d6BfcHCaMobRXHeNXkSXGYkz4KCD7UQBdBPDmcxKT2eCMhc7JJ2xqrNpCzY1cypQ4uNtRe",
  "key6": "2gMyC3Dkm17tpNnqLgwipsNs6YGG4omL2hzVQrPjfj3kcA42SovWRimTCUwxZoRS6PGhpwC1peivJu8ifryeWcBw",
  "key7": "2p86zawXcTT8L8pyoEQAG3JmrJ1N5EUyFYPKA5VwPG7BG5FBAyrJduPXPBYGQrWjEwQeGMySv1tAURqSdqfBKEh3",
  "key8": "2E3szGXDNxaWcnYftzE6MC5wZsBrjWsbLnkfbxyYHrSzo3yyYKTFwMsd5q3L7o29tQYR73oGwZJYRx5Fj9mRRQgG",
  "key9": "2WhbryPYJHdFMBnERaHuDtQqAmkc45HgBCdduA5uLJeY79VMxj6okoT6MTmhNZzHZY2uGVFB7eqRzTXf3TY3EH6M",
  "key10": "3WJTUpk2Jgg1xkgsM5WR8jqAk4pMr7fMNv29G2ji5CBFq6LMNPQz2PL57Lp6G7fXcTs7EgvV7qzLDxvX4As8XMFJ",
  "key11": "2xsPu7CKdDvGeTh2mkWmUnQp5rgDJva3n85qVScazRuZTHSyy2hLCeDAtNknQ2dueBqbLhPw22PG1KupMSrA9sz9",
  "key12": "4Nct168a4Cb7mNhcUHGieZTMxEPieoWP4SUai1vrZ7vhKihZtPd5ANJUPupmejKGEr8eqEE9gEMQUtKUxsKtYX5x",
  "key13": "eZt3c9UTYZrUVdYDWw2i6HJPLeBq9brc56Qi9LRdupG1TZ9FHji9EXfMpnGbWKaRBn9BA6JwotDqZKEyv5CZjwX",
  "key14": "BBuThwWdHtv8SH9Fzsmb8iBJCR4WUuVvmczfbLhUdPEeC1jAZu2qcvhZ2DUkjjjLgaxiWWPb8wo9H1Unbp4pojb",
  "key15": "3qA6gcdbzJBX6qCorLi1ZpHY6pCXpoVN8AcjD2UCVxkwgJqS498quHxnSzZeUoPYku4NTsExCWfFyoKsw2hLvvMP",
  "key16": "Yr52hy54HN1F11mB8NhCy4jDNToiXZSd64k3T2ivGej9fhdM8K2wamaHLe75yyaehihTSatevH379swe9zAvWX8",
  "key17": "26EviFLsw2tm3BeXMW8Wj6XHKTKWyDKoZ6wPrpKpEi9RNLdK64hbuzPYULSzQBMvBr3znG8PXjZm1Dqm13qiD9dW",
  "key18": "2GrjZMiBN8T1o2USBWzjcd8hdu1ySYidAxro8vMBdWGuBPaKxx5v8sgpcqAwPJTWgPBNHhj4Z24MBzKViQkhUXuq",
  "key19": "5wEQUBEWaQdyGKsYz85coVNYDAP16S3NdF9A94FsrtdzNU1F9tzPwdwsoBurHmV2hLiqgRs2QFh5X5nvaYgkEaQS",
  "key20": "Rct1bnHnuq7pJWEKmRnLTHJSb2KtKiwLSgFjMGyGUYRzixANzg3jueurgw42L9WxRsvc9jNuDp1orgPthbLJxVX",
  "key21": "475HyUUaD16R8WTaMspvzXRHc77AickJxcoHepWV9DGfTChba1tP6xnjwG8qcRqd44QcoWy863d2s6kqzNRiniNB",
  "key22": "3QP52Q5WQwqH8EiEz47rbA5QVHQHcRarmCksu6eZbSDta3f33bLbtz138WCpP6YJ7oFBz9NCtQxoz2UGfA2QuvmV",
  "key23": "qmGenDrYWAXQwjR6LrMLFPnGyLM7MNN4skqid9kvMbrjoVFbDjNQkhJZey4cUTayh5B3GxSTw5fXhPfp43vMaoS",
  "key24": "2X64Bbc6bE1aZsnPCcY1Khwkff3qKh2K8dLNLR1NBgpFgCW3MGxnd66A9NTprvDGnH3BxEL3F4UeDLNwhZcUp71K",
  "key25": "4sPVY93xQ2JN6Gd5DvRRCfBZNNDyzaKy9ZZb91V3ELxJ65v2h19F6oxPfFbZ7FNf5JnoreMHh11bjGWah8HVmqFU",
  "key26": "3sToc4aGQz6DdZbVHCRjst9i4DxVZBBL8gqu6RPLgUXx4PFUJMAkWSLD15CKwz6aziC6akJzrgRfRpUpFZyG7vmG",
  "key27": "35VijF63AgBfPoFdUMEsS48md1ttzhnbjn8PqEoNebHUVDfz3fTAryopFfkppdFigcpJYf8LScwiYpds52V8E25P",
  "key28": "39GwTm9guVrC9VWQaC2W2agkfvgABAkQw2Lk8g8JfNM1z7xqKC26HvUa6iByRecAbdd2swFbcYmMkoMcaQ47cFuq",
  "key29": "TjhSqiZqoEa1zcQym7qMdXiu953SqPxV5WPvR8p8UPrDfKsGU5aeJjwDXB8i23fKbAnG8K8DMQt8PMVDU8R3AFA",
  "key30": "5pKTZbyYSeTpBrbVh9Msr56DV3b8gqWkoYLiuZKb57z5rA5xjZ6LiWhWuBLUFDwbweoMw3KcoVx74ibnF2JGbwua",
  "key31": "5cfh8t3xhz3bVqeDvtSWqbPamsi5Y8rr7XiWVmPJ14GuW2ssqdHH1tyH6bHB9bt9Y8XRs192DbATZ2doZbKePgyD",
  "key32": "57CBjQfUm1UvrVYEJENKY8c9bdWkacPFfhWPY3tVfJGpu5eFa1DV2UoachVu6Wnri3JPPDYjMHoWGUH68EZc3dqP",
  "key33": "py3ofwEH4Kjzu2GyHjY1Mfd1oYN7JmwJM8ww45hbYmAr9coDYwJuewMXhp7PcUUxgonb7uR6rmc3TsZeSs4hh74",
  "key34": "2JRXAsEHpTpfh9HZ9sYQs4mHA7ZNs7opYJhHi5uZnWPNvJXHm4zcdFS3GxN1ckXWMcR34NRhatW95aWpfXqrmz88",
  "key35": "4dGaZapx9yCDSeYrDpCLMKKA3ojQ3snLAKJcYSUhweapBZCbmqYWo2Vs86bNiJtxeksPQXFwuDur1kQP7yuWUfA8",
  "key36": "4LBoah3bihE1h4R6R3cKcrbZZjv8UNMauruMFqgXVZFGaTMQKpN11tfiLSnkiR14wp7krnL6QmWuYe8t2xbMSdqa",
  "key37": "5vt2ngJYHjGrsGBdJjPge3ZWxCyZcHDQy3L3KcrVzsf3hoeCuZ1dkk2uGm9jpD5dTYXaEcc4nkJqbdJ2RfiqrYeV",
  "key38": "4YpJqXz6rZXXU6gm3f4EDrdudrFaJRUR8eGGqPrVHjQkY8gYh9nwdAdhpNEzreCRtEJiXA5LQwvWReEmPYqjosS6",
  "key39": "67QcEYfw8M97hDTYiexTpv7ej5oeWdMHPPHTKxiSHwpPD3dafmRRJppEvUVey9XmsF3HkuT7KmdQh3TA7Q8jxbn9",
  "key40": "4gZtbsUv5zP3mQrqausSU225XKnB6Z5nDARtCBWaeGQBsvVbjSHUUpvvuzbyjcScKQgweZEEt6PzCZp6vgnVchUo",
  "key41": "4zUrEEBJNp1TTkuWQSQLE9SJenUwnH2a5teF2CpG1gCWRax7ER8Qk5XVEMxKtznJj2qsjbPBSzUDGeagWdNuMZ1p",
  "key42": "5S4iV7quf1Se5BEVDNA1vkP2wUfXqgVurRZo7HXJmg4dtECYxbyNK7tPzDXnytSpNyxgZS1uecDECYRYWFHmMRZ2",
  "key43": "b5czp37jXVeaUbd5aAYgWeokuNE2ZwT2Sfbi72Qveocyb1z4KgaQiuC8jUjEW7JTvXC2nQ6yTzjferV2kBJhLKp",
  "key44": "35PwBQSfiYP9CagkYcNUE2bngQh4RS9AKRaMGXHoqcqHmMAMaK3spD4GiNUAaQvv9rdHyd65KeJqgyf67LKTGDvs",
  "key45": "3pur6oAyHXge3zNyF76UyAjVd7NBA2Z6f2dj8nt3MV9DdkSQ89bahxtYrAXCH5xVnfFr4vexQ2p91nf2527gUgH3",
  "key46": "5pyfoF3BgRem6AhxPU3RyTDprnB41FS2nCP2x2yvY97iMrwehsHbJn2c5TLonHFCUmHXFiG9ATYQ3iNXYrj4CTNL",
  "key47": "4cbZnoQb23tRmt3xSiTHfSBrb7q1PeLPuV9jy4yCi2KRZtHUiUW94zygfZaKY51G9M5HmL1ifGAN5g2RAXWGU784"
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
