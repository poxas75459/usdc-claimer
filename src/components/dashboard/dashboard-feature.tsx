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
    "5Vnc4xY85DPRYyJRdtYT2SRbqbzVYoxG3RB7XBH9brV14drNEYbRK2RZteizNXg8NxAqBVaCtePzUAUCcGC67GDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vgKgmUfxvsAJcbZuGd3qrQyxpUV3RQuRRydfaKGJ7o4ChkZpT2omX8ScEvfJs2kWGiDchxbXsFWsKdeneRzoV6B",
  "key1": "46ou6Bw42K2BPkozk7sx9J65pwkeCqLjkJ4sRTSAtvDbkfQ8dYWVZ46JxBZ9R6b65x1D1L9Rd5x1uNobsN1Mazny",
  "key2": "42549GSGwq7zyt3fo9ViTW9whpcaWQdQuE6AGVvMMXBzvfYEiydM5AzCCbNFJtLyNhEZkDEtT2UJVXjh8w7p2jMM",
  "key3": "128JedA4wRif1fjFu1NUqf1qw4CTP7MvmebV8LdZAgFCDynfPgetMHw9VAcjxvqPapxNYNrxpkdGwBoT36v53bqg",
  "key4": "21SWz7kdZHsaWakpdPHdGErLufSwrDKafTEAbHE6FtvwszdobxdyE9bvQncgsLqjXASW2kNE3We6JaWff1j7ZKWt",
  "key5": "2MahXtY2wjM3csDfiZHH1VTuQr224gb37ZYkr2nbDisBPWs26ams5wc3Pup6Y1Tus9Wre8SDAzi1RgjDg5YT8mcx",
  "key6": "2e61y6dU7v1zGG2mpGH2Jb9scJZM7sxrVdWFLaonV8rZ8WSy3Kfwo9J7w1wstnA9Mr84qvx6rRH3KU5ebdaw9icT",
  "key7": "4aJeDBqY1B3aYwfoqdDEc49nMRhxWNJvFkYYX4sgZ94ysYH8hYJpwpFUDd767CtYiqhoXfbzPGzSgA2h4PHdJKFg",
  "key8": "NBxL3MTnSDsdpA23d6vzwhLzRk71TLstUbFt6KTA3zsRPRH7kYeJV5MTXUHWDRbxaDzjMPyvFkqGckYa4FpQVdk",
  "key9": "4PEcMD42iSSJbVES5mWJ7CfhSuMCqYRbHpiQvFDYXoATqi6UANSuwhUc4bVN5F2JYbgERmnpmtBVu2bKcXwkhqkJ",
  "key10": "56ER3PzK8YRYYZFzsZNqBkyoiCF1Zic5eaeQ3s4xHTdXiq5A89rwumsY15wg4TEVtyQJ3TynB5fedrsdYCaVvsy8",
  "key11": "5C683zBbANrcDNBCDdv4sMDhdZnR2hDk8xVhXc5Lt9BT8tSTa3tgJSahNNy17L19bZUHLfDXbzQm8AhfTiL24aCP",
  "key12": "5TdkkdthxqXyXLtRdYJzfJ45zfevdXxcyA1orB3aTbm6F8yQSUyHMqRN77VwM6vfPds5QmimcurWsFnYeSwpDnPe",
  "key13": "3uGekkxstirmmDE7Z9EVqZjRyxvStPjEpJQpH33d2NXGfmWjtSQ41Q715hXcHZAaLGGY6a3YYHxsKfhJu9HjTdfJ",
  "key14": "3p96c6E3wnfhhNccBDSQm7jM3edLWDCaSpEvVBpcdJzw6Fn8YY8z6a9syimuMfDR3bRYu1imLiJ6u2gqb5rvAqdZ",
  "key15": "rSmLPLEq7BvhCj8HpbqKCywNdSc9ujHEbNmbPsZwBsX7qYPBEgb5yhHrqTA9TrwxChPRUNodq2z8ukhfby2JhDy",
  "key16": "3xUFdpSpWY39G89vArykBXhqRC62H5SNmSFYMrs1KL4Map3ouGhSRMx6WLuB3ug4mEeEu7maEuWNtvj9zcFpCCM9",
  "key17": "5vJd9moyjbj7NFDHey88xeYjdXan4ZLqwZg3zyM1Ra3AVxJhnewo3AKipQ9EtS81iwATBBGak5gchXzeuciKXXcw",
  "key18": "3UvQo36XJ5kKXMdqjeo2NbiRSQgVjAzeQQLFjnmk87VY3goepro5KJqGZHTWgXabsyqbkE8GXMgssG52ripZXxGS",
  "key19": "5EoSi2J3G4vxWxSMtARzyUZVs4jZBPU3SMF3DhGQvu3sp2qhYgW2RnsUjiLA2sDMo9Vjs3YW8RvshZuPX63UqL7s",
  "key20": "Fy2P3tsYyYDEd7kVgy7R4K6g3CJaFiSkNjA8BR4yz7wgTXFnEkPqcYRnNdj3B7cshiAS5oCDgdatrfZVRxryjjk",
  "key21": "ayAC4ihKvtGDh234dYZrNgRHp6UxWDMS7bS5epdL2mWNguWFQ1j8ZW8oF56MCaj3DZ4up1QNQZjquyfUhPANMsv",
  "key22": "5R4uaf6S1GoxykXfXeBFNvUuxm4Md2YYti1CqmVVVAfzPx5FBBPMgPuJpfuQDpt8SPvfpoJJEZYXbimyyxtpERW",
  "key23": "tdXTo8cLuzsmAunSm748k4JnyBZfZQsJa7u3eRKXrkwTDz7hX1f46iKMp6ZC3f4X4LhyyDYC2eoD7SnjStHwH5r",
  "key24": "5trzpvueuHdsc4ZXkedT7urgZmf42RVwue8z6UjPgWPL5c2tSTXfrcePDLY1yjHM4g5bJ7oEGFkMAMDwC47GVRmK",
  "key25": "2JiXoMVNp5x2tnMcG1krV7d7c8hBZvUa2XtZpc7a3iMZpdtB3kLf6bx2GYP71FhaY5zs4q41acTH5MMyxeSRiVnA",
  "key26": "2gBLVa4p4Frs8q16eBJ348ehsN2rv5oXcLHoF2vpdaEFsQ97Rq1QHX3LFLD1UXPWnZgg3Po47U1bstDgjvtQY8Fd",
  "key27": "34AgLhPYvx4iYvfcvEQ9o57eb8u9ga9XzJZHCzUVv5BFRTywZp3qS9nj5wceyJ1jDdxvr5oqUeMtMTBB6DUAd1uE",
  "key28": "5BAV5o29G43gPQbAB2J9cRsm1JkBHLGRzrXtWpVNRA2kAkSsfebcwkdQG4WeD79RqHJBZoFuRcwJHmyJwWMuAsjU",
  "key29": "4UX93DRMcr9FaQqg1jgV6mcjDDrshthqHgrDap3WifyyTU3pxRUpAwX2WweuXDMwtTVSqHtx57wE52hPVkEzrVXv",
  "key30": "2LJnjPtu9CdoupXBJayDrnw9bH1yng8qKHV9Y63NDiofFJ46fCWw52mwQDMh3Y3BL8AgmgEmVM1odZwrnJXAJkzs",
  "key31": "3uTeLS3BYJ5tuHNWWu7gDQ6AbTnECgVKszLi4FNKK7eiuxZQ1g8hL7PFsDbt4XFbnw7pweFSLtBw4XS5TpmXFuNJ",
  "key32": "4NC4MY1xdGeASpV8jXcuo8Z7YftcoGfUJ65ZtRaVcBqQKYF27kzK1dtDUsYLRhhFBUYHaJTvR9FSP7kUfD65NSPu",
  "key33": "2czrP3hx6pH78EHrDuUSP3pkuiAAJbjnjuNUFV1ge8kGTNSv7bdSt2UmWxiXgzBkddzwvJEeppvaPuv4Mmrscfv7",
  "key34": "3gCSYGFzzBCows3C3KwkXKwq4vqCEQMWQAokgb1yvewNvWSPqv4wEGNLpsJkaBaSm9JDCfH2YfmcAhTLqd3TJcLM",
  "key35": "2DDUDWnQjYoEJeynuQnFVRj8M8D848Wz1a8RnSK9Br5ofx98fC6nsRteVQDo8dvBsWYwFxwoKNGCiUWii3KVonzq",
  "key36": "3Y9HJS9zc4pCNCeuLhQbbRqRH4jdzd5xwbFLLJsjogMVrLpQirhCMsg6pBNcYpgJeSVSHHXoUoicPWboAxzDPon9",
  "key37": "572e5z8x99cGL3NP2yMAGbfR3BCcjLLXvFUBRv56ShrXGr48B6z8GEnVXE5dMm61HpispsErSNyDrdKffophL1Kj",
  "key38": "2epJYFwQrw4TpnbpG27Xk7niWDV6b9kbX8CBdNDkfGQZfzym82GgdDaAK2jcV4RU3Psvx9itZr8JvouELcZDnyqp",
  "key39": "5E1QnwUHTVsYnZwb9po2at1y23qMcoyTVHwZn6wUq3aRSBebpY7Yu8HJ3kYV55zkW75hcRbnU1TWEDGFJWKHTByv",
  "key40": "5uc9TLab1D6ZJaSqKcPBiiNKN2MKbPTWGxRkxHu7d1fbLPkEMuLMKK6mrLkAsRp1zumwCdfRsHS6bRaf1dsv9B16",
  "key41": "27XRyMUWhKbT3nJvMePBxdCP1CBpdHs4TfKtp2PNpWT7YSGfF52jE3Gz8fej4E34f18XgimyXtEsAJR5th8Z1V4C",
  "key42": "4FeYgW9735G6pwqAFwqSxnNGjcLkWVauXYE6V1ebADQMqn5T9n7JnqUkrdmyrC9HrJoiWyCttgkAY7ZgU1TcPWZ6",
  "key43": "5yegUNp4r5gVE7GRLuQ7e7bPxBfiEmzmzMdCV6eVbKEDer4XxHjCiERsFi1xog4AvvQM77JjETeeUVXQqCf5JRaD",
  "key44": "2mGGd6rKiUhndiMHpHiiHLjx1RTgkXY6MunbsZNNdVPP8vbYax76acirTB99F7PnsgoPEmsj8ZZexuq3Qy4Z4f7R"
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
