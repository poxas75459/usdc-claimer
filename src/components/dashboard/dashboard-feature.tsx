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
    "5LGcZjyzaeW3NFXPMnGA5UrWwW7Z7ULxU74mwgjHspA65mTm296LEZhyLKfcaGAZ4DLiQJBduguHMjNBQi3XF7fX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxsVi4eZbnnEvPoFLJ9L5Yhc2GLTT2UKj7SYwvhXbKeu3DnK9fK8xw7marg9KFNVy4ki4Xd2XXqPe2D4A4q2mZ9",
  "key1": "nm6pf8PzpaX4rVQdfdMo2T2X64vVnSX1s1e8sEMPD22eWAJjLGNdmqRNPKixy4ohFhSSd33LAkeWBy1SpiXAgJ9",
  "key2": "SrkCqCUVXhBU6wFCqH6ry8Jgnb18niC2sgCv3njg3ST8nmuKHLpqFzGxfnnX7MLgysmk2vrUEjU5Cc79FrG56Du",
  "key3": "qWexehgaFVa7n8wK1ddGZJeJuWNQVdJ7uKjGKUJQMzuZ9MspMmU2uLVFsZzbjjQFSa3iDBhYNoK4CaQpK3y7sSV",
  "key4": "4gcjiSw6iQoemMwygirwghKREY6UPdC9z2UhWq4LK4wi43fquzi72TSYND6t1DaGejvcZ8cgqVaPetwU7Ru1sjwq",
  "key5": "3QXEyz1F4v6ihcbBVjpdFCrrChZaPCkjnLAE3UoGsKXcposckmsn1ogatoCgDUnS5irDLd8jaj8ohYGub33nFC5u",
  "key6": "5kCwCUGkCMz1FBWgENr6fiEpZjANQXVLJpUWqJJMaPaMaDjKDJHhPse2H5v6VMM6RaiTqH6bKvP5iu7WY436ZPCZ",
  "key7": "54oyaJ7RvhgT1JpnpfsaxFDqwMxpkEQ4rGFDtRoACqTDBkjLLSSzjHH94sEJQKBqKQ3uiMQjnvxMi4Ct5drfw28j",
  "key8": "5SAqE22DUFiFhCc7T8R5vz28cBWc5fHMLh6MJZBVWNuVejLZhfQdFEcyRFDeCHcugbTWvnPqWNhib7ev85qpzcUh",
  "key9": "2MPsfGXF1mftFCU5Wr4Qumqet4osWniBHhJe4EZxnmMZe4gFED2p8QCMB9hQENU2YyfYhF4w2U4dA9fputxStDiB",
  "key10": "2HuLKiuqekJUHxnTQqZ2V6FYkp4SbegxXjGkr6WAkEvHU92s7hrkdz659fuMMKP6JjRf9Muikn8bh1KFuCXwNxLG",
  "key11": "2ZRVqeH5nnCtjzDtxFjaebV9NwTXMm8ukwTHuM1kVPseVaXYD7sTxi9j1KZ7wwcXczJ6RwpJdQ5WXvbEYKs1VgEP",
  "key12": "2VNTRf6B3CazP6NtuHeRHHskRDdAfx1JYwUR4yuUGAJNihkz1DowTKJd2C3TQW5iRbXKS41qUUm8jnVbkvdQmuye",
  "key13": "31jkBT5E56PoWWTCR1Q3PFfAbQDaP7wFALZ6WGxMDWEhdEUTfTJMQRTjdum1djFLGuq3Pjv82zk77qDPdgDhjJqp",
  "key14": "39KZUtUgQKedFGaoA1Yrw3cjnucj1cjNUxAtYLRVxfk5311qUcrJApHQ1UKvXKk9nG7rJD42RhamQyKRzc48vibe",
  "key15": "5ktAniVy7rxhtt6kZBWYbQa4f1NpVzvgHP1PheZ845tz4FkTpkXuC48KZt95vEjpnTNixdKjzX7B3WBw1tcDzZeo",
  "key16": "35Z8SaSKQoAtAK6AmFjxcVei6AV7tFpKEfAtYiESwXLUJ8L2hyt1L2vrRdnzCJQLCGAbAxXYwQqP3u6ZbeakRukj",
  "key17": "5SNkrymNX3BcgAZebq7ndYxNydr9V2qtzKaK2SFsBqeT3mHBqsvgMCD31zo1eKMgoZUQdkFGjBRddiHduk1aqQTf",
  "key18": "2EGjhdTrAU4x1QC6vhNzrsGSGVVb7ccHjEyqFuW3UYwas1QNgpnXhZVPQdNJnKfPwTEyCvvPMxKnCpUgNp8iDeD5",
  "key19": "CexbB5MkqDpxitX4Mt86naYUgTXVjaQJVpw2oqyWw9EfaK2bwacaa2bMfDcWazhMgseMopN8TBctNibaw5Novpk",
  "key20": "576GwyC2i5MWyn2BLnp5Lj43Ro3PJ86JQZgM39caQJyfFcBt8vqRgvLPYaJ3g49o5w4eNxvTP8HV8CZ4sd4boD2d",
  "key21": "wDebqxidxT1UCqhVrG7GZQhYcbHBSeaYh88Q7BoWGV2wo1o3AxD26BxZ6917ePLdP8GX4B4nX5AgXHoJEUDgt2A",
  "key22": "65PViX7JB8CiYhoepia9LR3WwqLvGaxDrc5AmXgphbssEeHJ6rKj2k4kuBFJRRMEBrapgaxab3g2FwSocsh46A4v",
  "key23": "3oifwshyZrvAcaX9r6uGSyEiDQxE9s8KmPu5zzmhbRE6Xe7s4Q5Uox9VSes5RSyNFAJR1z3q4E4iJaWYYLxgYQZt",
  "key24": "3LyiA5rnyLUQd5kQuYMDPBUShKSYG88rv9HRUURLCTiadrP2KzPwx57NKcaCg5wuQM1dbFNVGYAL6DD4cGtScRy1",
  "key25": "4QPC4qbPyX61aZ29bwcPcuUypSYGjSdWFfMc3S1ZKzVonLtqWhRrT7etUX2aVwBJcyKK17vRL4yKAsYRtt9q8Kr",
  "key26": "3DKAHkVYasJ9AXm1wqAhJksqZiyGVmPTT66MJTqnn2pTpxL9rFznjiW8skcAkhHQhvQ1U6hgYv2ofUDx5wQk8DrZ",
  "key27": "2iUL4dy3Mro1PbuKGjiHrfJgGSXmShrYQEjUDinWMpUBBbwyKHgMJKe6DranL3UcALPjJsqYYFyfspi42JnvK9gw",
  "key28": "3c42pQcAE9WmGZmrH47owZD8g9Ktp8HA3CojYBZj1Czz8i3jZh4rEgtYjoucYGoQFMuEf48PYBDRYMb5HuLKBZSk",
  "key29": "2w28Z9VVSJz2iReJGzVWkyo8sQGafrh3JfV4sSuQhZ9rWhF8CgngtmPbgfAUfBPQL8AXGpCJMc4o8a18V4sU6546",
  "key30": "5wKx5jPtwvf33bTucWwe3b2ZiMkmMvinJLoxpAUpRjdsBniP5NWXf3eq9jwUJ3dDeJWSiBJ8xFsnSUpEWujBfhsT",
  "key31": "2wJwWeQpgRdiUoUbyHNpFCXHiPhoM7my4dTTjn9svFKiqH4Jz2e3o6yzXwtFFy5wQbptYrkQznh5v78dFU4fkH9n",
  "key32": "21y7bs5cfKR1fKM66YUdp5TTQJBzENx8Qgm9L8Jou4Sg3pJyfmbKrsuUfnmRps9KnmpKixxkYwo7eyjKodY2QAuh",
  "key33": "3sCdkrhfy3CLfF6c4Pp3be7GWWgMLZuqHJjT6Tz9cQ9t2kFWtKHfaHN9KyTzhTSgSSDXwExPQfsJCLPEAF2HTmXV",
  "key34": "3JmPS7TTaWHQZgRGS3vEiUxpwz8LbHvsydAjVRWmFHaNy2aCJdoNJR8n5myimCKoFZNb7B49Gszxsn2mPCRr2H3J",
  "key35": "4JYoNxgk5Td332Pv4DwGo12eppw3RDYYPEhEvQgdq69C2zTfihUJSvZXu5h5sJrdEaAR719jPLBLT4pRFzMgQtL",
  "key36": "434dz7j3z4wC1LCdGzyPtVA6PBXEedmB4jjuTux2J36iCXoL8sEbupWVeyrDr7e3UGguMUGzfk5HqUCNBjwF8RM4",
  "key37": "28yYkEaD7tzZCcdBF7cnrZFCUSGF1765NtNCrixDRaFbbzgZrRqiJ1F66D3KW2duRydm5Z8wxMusS55t5mkZc8g4",
  "key38": "4Ax5qpd9WYGCt61bEWWWjoehiWLhAVRRc7duqANCXgoNC6YmTBrhTvo4koYSh5e6QLN7n8BWD5bHQpZe4Q67dVjK",
  "key39": "3A5heAPXjrfgCHjk5RAm4ADxvANRHqvkKM7iq3agTD9k4bgRtzg7J3hSwcQgVEibrusAYby2ZyTgLzrYAHYm7ogD",
  "key40": "3k9cDL6wAuFe9ULggiwBJfjNSepUfKTWDHYQoA43b8Nw4Vv39fUeEw58kMwVsSEh8xPz9RrvFy5ng1L9oEcsCA2m",
  "key41": "3t6XLKXJErmGkgFJi3pkJrTWpAdKDLazQDSK4pLVaSxJgnQrjnZWCH4SwAXETmyGw7iBk71umm6nfQmitvcDeqcJ",
  "key42": "hA46rsHyFAq5483SdBrkhetnaCC58LbVaESB7bz3xkxfjeWDLvmAF37YRtBgo4s12mr7BgWRuNzQvBuDxAczQ8C",
  "key43": "2RGvd43vBJfEoDnMiGa9Ci2y1mAwq4DiLVK3GLw6LFPyFCcWhowMMreZK7wimViRJ2bgsuF5JJJt73rwUMQRmvFX",
  "key44": "XLe5XRbdpSV2bwZuPeRMXDfVJZnLjVerEZCPWqM1yBVoAmYoeEWhBTwXejZoVKZNteGXQJszgeQCvqExc2Hifho",
  "key45": "2HTWR47mYEj33E5xkno1jBBcrsjcWWoJYrmSTXVYQj91qpUgmHaEcseJt8ob4VwJ8niKyQD8WvVTfcSxnVKebL3d",
  "key46": "4kjREb78Hkia4i9cXtYUcRJsxpkmWCs2wMSKSK3bnHRpLWCEQHfUHokCvPAeSAXQfTSZE89SieETi6txBDPeymoZ",
  "key47": "4PvBmjGVviDnAr4o8fFFLoyMDFtmfYKGoArA3N9U5ZMKt8UJDBDRRz3VEtKTRF8nps2Rbf6a7Gfb4tJosW6d9n2n"
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
