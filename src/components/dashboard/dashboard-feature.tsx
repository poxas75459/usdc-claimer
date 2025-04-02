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
    "npQ2rF2H8mFTTT3qrJAUbFj1xQRsPW1ByLZ4th4CF8eLyNNFF7vZBqVP2wSHnn58ZqkySarSD92An3GF3GvRUNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ncVPHVPrZ7omfArqh1UAdPgrkvvK7LujXudR7EnEWbe1xR2mu5wHL74yeHtAuAuAdiABr1opmAxZqK7UkYTzoCJ",
  "key1": "5F26RVdgLSAJVat7N1s3n5Ngf7kivYoEtjJmmFor1K4ZxUKzxo3Xe4Nzc7aB5kgBHqvKRYGFr1ct7A6hUyYJHp8",
  "key2": "2HQrzB7KcH2mJaM7oED72iS6U3JSrTGDDPwbb24GVsRtixiHKuHUMJoqFECDfNQyKPxKxwLcQcDqsmzcwFTh2pw",
  "key3": "Hw6uLfSntwDe9o232JAs9wfN2EfZ2GCTUcgZM7n8yu2yzrYovfcn3CVCiKbT8FDY3RfcTkhnacPtn626x4Ctyqf",
  "key4": "4kBsihH4NFppwiRio6sNhm4qjzGrnzbQxcMFtU6ctxs1yFBf9jfTYdDs4qg3v1JcitD1WLsxJLhciCtJsG8giKf7",
  "key5": "3n5LbkxMWUVwekMpD8WCwcTGouLhGxPdGyxHKDdoNua6yHTUnq8mnqaFCF94Nevcxk55gigDn2W98HtRKoi6JBhk",
  "key6": "3Nu5M2bv5rYJGxGf4GJqDih1fNvmQrab7vK6fGeiHMrfmvkrtiWesBaMTeSy8k4imjsRBpB6gywJy2AN16tSKYMJ",
  "key7": "2PQgydDKWsmGqc3atyNzJf6oCG9c9cy5XLy41WdT219a9hPzNFBtCVbYnZ5xWtCstUrEQEdfvYV5cDat41jZQBKp",
  "key8": "3hZ7Dk8GxKWsmZLjsbwLBDWXm5AYizgMN3SYjEkn7rJSWWoYm627SzE1NzjhvgKPoWA5ocqafc91EnqpNwqtqWyp",
  "key9": "3wn2i6bKc43dFhqfa4f2s9jqcQJrEhRTa1FAcoqQxSVUkrqcjPkDAJZrwHbYRcGRfzHZuFBpVncHDBXPbk5GJKi2",
  "key10": "4cerAMJQmfA6E33WptbALiw2WwmvxHs8hvmHb8jP1U6FhsvYewQYmFMM1kDCrUcevUFnpZShwMV19xjSvzpBP35p",
  "key11": "4HNhKxH5VBFUgtDCEary5RH7xFzHb6FwPrSq3AQ8PTbJVUDr6hpTxyebteDHMcXjbsgAo4i7xyaCdsgdrQV4mnju",
  "key12": "46qrep1Fv9AKCQiAjtiuotrdJ8ZtBoyF9WCaMqnNAeeY5Xw8yDzm8SjA1SfMkw1GfCP9qUn7Zv91bqvxF9fs2pUz",
  "key13": "2R3mysNRzUGkga3nuKjrTDtyQhaoS9bgrT4Dio7f82283n4mXBSz3y5ADdEks2fKtLvwD8zqo6AULAQpyrzRGAcM",
  "key14": "2KcxAvX3k3pR2ZmKMVuH9VimaoY9CibsWgfQaQT1kGyZccQtWf1GbfZLDXmHAMsGupwEhk9Xv5KBq1g1ZkkTaZAD",
  "key15": "3rw3nMzo89eVNgDgqsJxG6ugev3SDVNcmoBvkaAfgYMVjGUA7N1b7o2Nx9bnGferut8hp2hT6hYrfkUGhXEt2eep",
  "key16": "uCdrPNW3r8en25yHuByuzN8XHBb9euUR2Q62nGHNqrkWAaAVGgk5WrLAAn8yvE4i9m3n2K7XRS1nFSMHJnrQ5sY",
  "key17": "qiFexYtsRYYKn6BmpXCgjTSBKoEnZwvwy8qx8VHy8pMDHzJq3Do4ULb4NhVoEvCBTJD9oxL5sdNpq77igtrxAH5",
  "key18": "3AaiwCnFttB9boBwnv5pTg65vCJ4aydiFViQ2UuNUGTg8pgTyeD6snoo8vn2hX4ZF3mZoGQeaH4JwHDWKSkxhciA",
  "key19": "4dpvmJXeGcKuQqeYgU6C9NWr1keWuEJsEFwv7oUvrjSnKs9hF4JRSiTcyEyiZvvuYnAMZJrXAUPjKMxHNUaAYmMF",
  "key20": "2QPHok9zxc5f2RMSjuxnsrdUDEivgyzAx58guGm9xf8M1tvvgxBqhhUoWBXNWCAU6D7D3ypv4rgrDUFFk9GskWLW",
  "key21": "Sn72EW4WjcK2wivceD79bGoFc7Jpe7dD2jf28XcCYtdDJUE2EiUpMZcvhJSMdBpCbVX8R5pwAbBGL2o9VwVQghu",
  "key22": "3rt3gEPkXadxiQJds4n4swpaWZZ4LaLvpm34z8vM6aBT6tkY1DReUrwRZvTTsyFFRq61PmCNajmh5auPTeB2radc",
  "key23": "4xwuodd6HPVmMmwPvRs853GnW9tAvkUX21Q1eotR3v8TJ1D9F3Tg6BHwraNFSmXe8TYbq6F6p5mJoUSjzv5KtpS5",
  "key24": "5NYXCRKvvqV65Yx1sdiC53Qvmnt5YiQxUuHnbNU94G7hUAK3LTbCXntWL81MjfPm4dkjCJBaKgmURBhGsNRzAw6d",
  "key25": "5vtcy7MGdp9HExyUeKXPnBmgsThPDZ4ScbM5x2N9vzdCG3rvyUJqJvgVQxiT7CLrXMFhWH1NcStvHB74YMG9WrwT",
  "key26": "WQd2K8kPAYW8GT8qBLGwKf4QrPsQFpZwwA1oChztfMmHPwYE3XXqqWn23WEiDLgRMZDc6MgVjh2bBxtkSYjj1yx",
  "key27": "2VxjExA2BHmhHaH2M9YmbWKAmkrN7tem6ujr2pmaMJqfTtzkjyMzecnXonvkMYyiLXBCw61j6AUUKs5HMr5marVs",
  "key28": "2ECLLGcqgndgAiXuCHLJqEPjptSkx1FCsYfFc4gus8pgjiaP5npr9Hgj3dxnNQV8NAPucTUxqS5HbbTvoAEC9QFc",
  "key29": "5iv5BizP7iuqhGwNuzbRqRbQrNQ7hZ4QMJdfnLc13KSzuRoQQTekT8KGxADYkVDE8y8BKdDAuNg4v7jGcFbJn87U",
  "key30": "MKa7y2WdnGdebzAqcpSPdwqjqNsQ25ww4Fnp6UFyswoHpsfVT6BZAxFrnQ3EZYPbJvWS1sJe3m2azrHrTM2Wwqh",
  "key31": "48qZaKZjPG8dBFLh32FkxAmLGpwgrKTaWDodw2dhWgpi7SxCGqnzW6MrxaCqqKBWQHmorg8HjFYiHUPKZRZWwRAY",
  "key32": "22WubZ8W3216jR4e9md6HHqarGmoZJ4GbwzXAPDepApD4Z3howBfTzqHPnncWm7qMP83rEKai6pBFz9KjGQpJY7T",
  "key33": "3chgPNBzdb8eo3rVo9GxTbzgRz2noFXFPA9pgRc9KEirnkTJXY3vs1wVHe5SYuTAHyp9bS8BTDnEUfUemMWusiX4",
  "key34": "3St3bSHZvTuVxTYvgGuVJJNLkibMjhh134wjDHQQzxZcjRttCKjoAN3qyc7PJCWfDiPJdK4yH5vFodqqeRsq57Q4",
  "key35": "2iJrKJwAetw1TKQAmrGytCzfcWQaf8ZLcKwhRoU3V3VBmiY2diuuEubNdD8jy6gwb89vPAsgtTrWdsKgQht1r1cS",
  "key36": "2NsmphrWqvq3onTREsm9VoxifTEnwaELXsBC5EnuMdvJNsaaVYuUKdCzTsV4V2WHTzJibFUMD1GT2RvK47FdQcNz",
  "key37": "3AjR6QzBpAK82jyx21LZTLhm5sF76ggQzXtWoEsYoxGGBhAx6NuQKGB6AnMVfKNsBN6aauNhNQH7NxVYPARor9uo",
  "key38": "2wak8GRGVKBU45DUStg3oKjAJfRokYRhD3GKZLfa8vZWgHF8pnbpRkzrrZNWxT9QWWy6oBaDquaa1WFknsXPqUic",
  "key39": "3xbCknE8nacpPeiULxLCKvx8UFye7aSckTtH6ZCa3Df3F9SVu6TQAkvxnEabdUTU6tGBk8mGijiicTbjUi8UqQag",
  "key40": "2nCcW6JR5KPBNjiPKDNZEoXy1sCCXNeFP5da7AASe56VAbAwqZoGsysnQPjjeTUztKLatQRL6P8xshSmMPabbMUY",
  "key41": "22XSk4RdNkjS5PQPfMWvFPQ9KSqho2ChaoZ9FN3zAv6S5kT86jqJn9nACSrfMhi6hRdtN3ckBxGp2LhXAd8q4AGT",
  "key42": "32vcTqym7qR8bL3mJqg8NsevonLdxn8By3QY41gmtjNPvHVDzo6DP75h1MvqQX1zHnrHtGVzWzhf2F5HQMGHgDeY",
  "key43": "on5PN8VojrpE2xzb7ePNTJPt6cNRK3rserFKg82Z8fiLKEnxekLWLCmKxjFFJvLk5X3zBPtwEV7dRpUaa1XgRCP",
  "key44": "4uqZnH9FgJV2t8opQYAvFkSF4RGZL3xVEfHSVx2EBUZq1rJXNtfFHasmVaDRkWJPQnTH4wP3jbi4gwySVraE3Xib",
  "key45": "4bFfspSyVfbFJqbgrS9gz5CRCshoMYbiuz7QvhoncAYbb9Q6Uf4KQhH4eCauwj8d5T18aKQB6mHkKuJizMtBrmF9"
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
