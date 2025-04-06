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
    "62scsm5nfspNPnsUwremUwqDCwqAkYK7X5TVDoFU3rP5XCuQFFysp7wDabgzpNAXzgXVYCFss8XqJGNfvMbYFqou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wa3D65HeUfGP2BByt5kEDd7ib96GNJ36aXfiufRzyrbSPz3umqpLWgvEUAkP1btEfqNWHTSLaGNkwZVVtwNchEH",
  "key1": "83EGgTBVbBj73m9ViyMRpq2bQQ3aUtvaNbdia4zUnnesNBkgJ3ytuMtN7Xc22zqPTvQoESogqsmcnxFc5scF6CD",
  "key2": "2XcTEZh6cM9BevWSZterRYNSmR87aJoTS3ABWWmsD5mKz7D55jwnbbVNyNaz2fF3psWdDjbjX3DxVBPUpMxdrAFm",
  "key3": "2iSLZExWsGqYyU4riqQ3CJiFeCoFqRTxqjHBo9rbNJ12tYnLkydFJk5R9rJV9BuKDgn54rnTRVobefdQrKhRkJEo",
  "key4": "kxjdinrFoxuRnYbrc2AUES5GwEoANar3ken117GXtS8hQ4Fq3nzyvkDb9c4ZswCxe842MY9qwZzaXfsjVvJSQrc",
  "key5": "tXp3YoeKCG8ZGHBFjLnfK1dra6GoEJbf2aAu6WPSB8wYiqmEy6VCYnbMZMCpDAEArQjnJMR7P1tDpg35zYYTNb2",
  "key6": "Uqrcvnwe3nfyKtVEdqcbFhMfo8X8g8Ek3gQf2PDFET7PbLfF6nQ9mZJKVs7FmFH9fKft9SwqkP5JcUHW8MjWmNw",
  "key7": "4atikmhe8ksuLujXG17R6Afp3iBBSyvgMc8h5zyuvy1rjjhQNdn1HKgYyAV7xKwH7HZWxSwHKUBuhizudbCUg3pd",
  "key8": "3qqe6rkLgQwiivzHGbBPUbLPLr5jTNVsZEfTDqA7qPuQeYiPPvn9WVsBrxDyfnt4RbB5ByoQD1btkJGdV3rZevM2",
  "key9": "2i6PL7nTqM92TCoFdSDv9PnAnbMS4gTvrSMBXMbcXkTGtEdygwQPA3FAWYrtU8fN7cGXQNdhAmU7KY6UTw3WpoRJ",
  "key10": "5DDcVetjM4j58tT2nUTCk2tuykVz9q9ueK7sJMW5d6B4ai3UhS18hP9j2BSwi1BSbRUGqMMFioEn5aTNDX2Jybf6",
  "key11": "25btBnHGYf8jLpj2L4sfiKJHo9LiAixp2SvipwQMuZtdL6pyNvjGER9VNWJm91Sx8YG12mrdWzajsFWfiXhtisYr",
  "key12": "241Ta7Gn3mUeCsPBVwXwrusjLugkTpZ97eHJrgeFFNFLgdWB5HwM5aYQxXkxi24KuQArmbTeYH1xX6b9rwcS5HCq",
  "key13": "2nQ2p5PkTewDAFGGFipstBK5mbuepYpGWPs2YDMph2UqVsms2GvDyY4tTaLaLE9bJdVNMsj2x1zt7QPmWPaF7r2B",
  "key14": "TLm9U2i2v9Vkat5PaFuKuBwZLTtyatT5e559J1mSofg6psTzJKhmtZLT6dDC43XrFyMYJTBPs77wvfVfXN2Xvig",
  "key15": "21YJEyUTT824hGwyVkWoPDBEFa96QNjuJ7oUhEpZxji2S5uY3VfzJmzP5MKzUnuLdDxd6V7hwFzGFgf3zTtWhok4",
  "key16": "4PhqbUS5rp2ou5uCMMYvRU72nzB1YbAYG5esLtpraDJfyVTyVWzdWXu7nE4siL8fGa3EyUBwaXYB56X7szuGXuVC",
  "key17": "Zo6DSpLgkcknaGK8oYtJMvyTbZuVx8TjnHx7iwyK1LyCJ4UvUrQxsy5DBtvoCYhMQjaui7hAVZzKqTAYwJCioHM",
  "key18": "5BF4eNmnDuRdXrXPJ9D3dHu6Zz5nvs2qGKhYcQnKHUNju9MVwkQ8QJUCpxYJLYbWADboMaws3FfJpneZMxQ86nZH",
  "key19": "31Go7NYA3dU35HJG1v7qf7E3vtTKLgPb27wQZnmbPXoNfnfmPZ1UA7SnK7YgX9xgsUEVak65QuZubA1mxJoCYwoH",
  "key20": "2b7JWkAYN3TpF8iaRfKATmtmWfUZxTYjKVc6h641LHFsJMJLuFN4wae6TQ6ghFW5FkUSrNmQF96yJbmn8ASzyTXY",
  "key21": "4fjetPfYZvDRHdwoiRT3cq6BHu6VkUpLHwfX5RmCmHij9acuR1kk3LgWzqRJqHmGBumHy31ztCsVkbQtJ5P14EaX",
  "key22": "dsEe5mygr8rSukWhsgxNpnZikVDuNsprAzT3FTeNpTWDHXPTsRZkjq4rPKeHfQQn7woBRXNBN2z5upUPz9V1bFp",
  "key23": "2phz5JsAnsVJ6WEceRo8ddixYRWBbU7WRzxeieevXipyN9NhK35hbquHBbfmKunpFX3Y1c9xLtxrdY47uoRnRt8p",
  "key24": "2XN8wDf95qRpvahJeNy1tsZnn99z97fT2t28sAD7UVsXXXkCQ8kHwyQRR9mSjbZntkWsDwagrU6NEhQbDU8CWu3X",
  "key25": "47kfQijf5uCmEJSH5uk9gzd3bpxn4CTjx5aqdpLhrDVm162d7te3KnURMjJxs5rkbJjThXR7pijdedVvDB7Ep2EL",
  "key26": "2nosJj37RWrBiAWJ5xf2gfFGaZLx7S5YZvh1HqjpEVx6T1HAYhN44mqTW6PHZiQCLJfo8WbP5KjbW3QMw8e8afKM",
  "key27": "2WXRRCkXertHJH12ymbAzAeQdjLkf78o8KQMNXdi7okK47VYsguTEsMYDZP2VLA6WA8S2CgT75bqNvMK2GtKu6Xf",
  "key28": "peBKkTm25cCakGgkiF3n1sazvnFbBPf4ZqsLdGzTfJroVcgZKfcqymRiUBivBA16fdS4fNXTU5RjUn3VZEkL1XF",
  "key29": "3M8LYVKifBzntW84rwKTTdzyhmAMBs9nVK3TBqDyqugwjPkC7ShsnqU6jCDyfFxVFRfgqPaYj9LxKVLtpBvHqqnw",
  "key30": "23BWKzdiwdP6h4eQzM2Yjqh9TB2dMuzijyEtfjgWDStFQwujs8apKrqQmxVvtFpj27pgwR8ccJ2GFE6hteZL2zyu",
  "key31": "2SrHW5cAJCyk53NDnj5xVFAidYnRavZv6b81fQKQxz7kz8QrBi2XgiLknrfBSNxqkuEo1F5v7wZdoX3AZosfmhZf",
  "key32": "3bzqteqWf6xXU6NPHfxUYry3k8QTrD6d2i4E7Rw699CC1nARbJgTfd53nsMcu9KmpJQCMRs2H8MQRv5qZKag8eBJ",
  "key33": "xtLtYX8t4XJbY7iwiuFPCHvwruTSodzL4DGXuR5VQcE1BhQDBfsVkvnB5Sxno16W4HXDnseBXiryTpVZsdEpSPP",
  "key34": "62ojoZeo8EMJS9kvW7BXMAVuc4PLwcfqC9wZ4QsHYYhuVzLH67qqWeQo3UeUc3PZaYawKsf5tGs8XuXXs7CVKrJ",
  "key35": "2e4w2RSpPkMRbcfsWPCeGf4yk3yz8tQBvhh1HH1wcjJbzSn2zxRDC6ACpo4rpTjQnsUTWbRHtCZfb4vY34JMig3x",
  "key36": "2f8xMy9zEaj7ifcu76buhpcLztstyRRpNiBP1D8YnDM6ZgRPr7ewYQR2Nt2jhF9ENkHcQUpdvMeGdZx838MYE8La",
  "key37": "3YrirEduX9QG1FZDhrRFktVUaVayS88nbQFwquv58KQWUUDu3uuC6RqD8FSCCTaMorN1WfNyHvoL7gNLJAo5iTvQ",
  "key38": "4bDsvrvDCT37EZAuqENY6tzmx7RwTCKJxm6abUVW2r1Ne6jyBs8dWZxe4Mnr2xTHaS7qzeceDhXZTunuPbWL4oHM",
  "key39": "4zMRwKf8MXuz4gZJA4KMjyAmnCRrFjy9DnaoRYhnbS2d47LRuGFsoyLxQ5BBqxjFd3sorNhCMD4qhcTQQS3mdEy7",
  "key40": "4vjJrmDZMyjG7qEPL3i6nchk3isM5dqifkQbjUGzhsZYFdXX7fMtPrrMPNgT7ufvSAeiPGHrGT5qCZnb1FuSnB3s",
  "key41": "4iCFFAbXkVPkab5HGuvBhmQSPm5BH35YD5W9rJALuwU1EMVkep97PvWjLrVpYe4S1w1Ljn6zoeDFsdf2tEfpZQgT",
  "key42": "2MXDV6FzAain9ZQ7pLEjiJ5FaJtyEdPvj563863Lty72t5djyZG7XUBqgKgu9YYU6yfqHQmbQw6Rq71NnmJ6sedG"
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
