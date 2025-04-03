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
    "33EZNFCGWb2UD1fPCThMBmBinA1t9NkL4SDkFaMsGVJc95pNUHonasw5yDWZTvZb5yCaFp48DsZwuTsBRnRz5Gyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGqFKv3k6orf2P7bpDwTPivTipPVmMRdZ8oYdsJZqgfdjuLixMw86JAPyoY2BAnKdSM6kvvcFEVSbEsZpDegPvg",
  "key1": "2okLpy4xSZ45b18g7sGuic22fYsDXcQxJtautXqsxk3GdgEK1Fyb6Qp6yqNfdr94LXU3WyFe7RqxD3UqBtu6vn9g",
  "key2": "GvvYSZQwUFSXgYPQn4xqDEVEkNikFuzeT3FwvMJuRZ3HgfrZ7VZqnqqn2jqweNJx8sJK5dJ38DqGJpWkhswPwid",
  "key3": "2vgViB1FRRNZpVvkQssvNTRcY1iTCFXSHdBdwtPRwzvxnL84NQRsBtbaPbMKEtt31zV41wvEH9EG42kpDNYByaiT",
  "key4": "2t5VaCPkUZjjxzv9kNddbsVKrwudhh5jfnJddEuLbPup8zMCpsV2subpxuycGaJDpgNFTrFYY3CMAyenYoQWZsXP",
  "key5": "4e5ByPfayP9uHQkYS9y1ZVxxN1tnp9sFS58A3LjrWFdQtaPaAv75ETFvWsZ5cPC9pZjoVHsvVm8HLdys1SmjSrvP",
  "key6": "2dkznH6xabkGryZz6cbdosxSF3fc53HeZyQUDCgbwnnpenfEc4oin2zqqF2iDrmVXPabbAxXKv8BoTR7SDWnM4Pt",
  "key7": "2vYh62W1WTgMKSHTStjMazek5EDqibxUU6gvbkNuknv7Myoa74PhEv5D1dVagefYDBMnvj46jFUcgJHV9KVeEfHs",
  "key8": "3XxYEU4Wgo3dx5VkJp77HfGLUfNaCDcf4EtXvtKThLqMkDaBF9473ByEFxVJLnrVnuXqqcuRVo5BYoQBWFJmeXYH",
  "key9": "21TAMuUhnp1cdzVYAjdTYKpYEnTmmBhKJtYsvojLcXXbJZCGhSVvuyRvyU2MXLLse7xYVAkchgAcjx3AoaA45dcd",
  "key10": "2a7JkoSx4NzadzgKSo8aKFG2z4P2Xhr2WVskaBCX1uMxsGMK2LDKfDMQeUuDojRukhi9efaCeU7xDdUzbmuQUnc3",
  "key11": "378bq7ZerTgV1uEmhAPzg4fNGvmuiDe67i4sX68FBYj5uq5q2fKXg6GJqirEoSVmJR18kDMvMHDgf6QXzJDyMQB5",
  "key12": "4d7JwoFydG1NG2S2ccWDSeRz7qMm4UtDdebAsJccFSyGzSsPf7soag7wzMd3GV7SRCihWzWW6rcLhKDEKUkvJtPs",
  "key13": "49DfbXRtuPCnRczEs3bAvWD7eYsB7tkxiYJmfmfKZdSTxNdeRHFCbKRkMtip45K4kWc9Zd2pe9N345C2RVumeDwQ",
  "key14": "2BnvTSMCLoWEZhJ46XoVTSrm42LADMe6N48ajHGjXBY1JS9sN6KqJAvsG7214SQyBmqpXvDbqZ1kmxjbeERCf5ar",
  "key15": "29bv36iSbj3kzSHxqbsyEF6tW8g6miSd6sR3F3ZmBKrVNeMjCp9pwGE1VM3C9zeRPhrK4gbvwKbpzc2B7aqrouoN",
  "key16": "3RWtsmdFRpwzmzTjLDPBtTMRnhMp5Vg5ku55UrBUTLtFnARzik4n1NvzoV1JfE5Cf7MuanWvmNNQjYF26jwro1rp",
  "key17": "jau8vbc1anSps8qyhrKbVsLeaDjaiGstZxQPBUmHBvhC3BYffmgcEYY31Hpw1KBv7GpKFLXxSywhGEoQrFE4QDU",
  "key18": "31yLohGWWi9jxaG34NGKPDh7hiY2YdFETW3FyraxuoweHi8f3zPAScSmPdzDvrMcbAHQXTqVZNijufBmgWeGAgaZ",
  "key19": "51qpHuqVTkqWqdAHeY2ef1EgFjRMRSZPSMGxPegSYu5dAEH3GvNuXvVa9L63LZr8nF8R8JFgfCZhesGC7rCsfy2Z",
  "key20": "5oJEMn4b1DFK175dxxEhX7Q4uXfuF1A7nkoyu9FRBDMEddAwtR1XvXT2zDY4QWd8Xb4G3CEaGE31HHS6jjHvgiPJ",
  "key21": "5YVtn7H77cZ8cgigYssenBBB5G5RBEqt8fx1Y7FbEQbYdtQz32UvLnUwrdjEY5DCxYcLHtTvNyHeKtBXBbG9bJdq",
  "key22": "5tmcqm18uTSWqRgQwMEn6QDp1Xv6RCoDFF1tYeqsvW2pFCPzh8AEWffR84dJrmtuB8G8xEKvBCBk15UDWw4TBPWB",
  "key23": "MU6jcNj61bdoJT9MWS5N3b6SyaHCbGoJdyzsMrDs3BQSqnCBA3U4ZYWeYxn1UouMYCWknbmQZKJDvU2nUaJt3YP",
  "key24": "2G5BGokhMVrqTdNtMwqzwstVxwsnp9hs4XqS8MnSZDaat6WzPDDKtEmayxULHqXfXUvBbyWUAYwqhnVgaLaoz8Qf",
  "key25": "Viezvx3t4Q13NWSd1Tnk832YMKdNLY1aK3HU8CW7cjEykKo24yTH8PFsUXemZUcQooAKQcp56xS2PcmH7ZHf3Mb",
  "key26": "4YwBXH1hpMvxnv824UJeuzHfcZsSUwknwdtqfRkhNhzjzbzHeFYfJZ2BSvgrqERgXJ5FyGt91gy2dHgGLVpweWvk",
  "key27": "bW6yeeor5BdXuNjGEntrx18rB4KoPVak55LU4X2ksE1NS6V1CrNc7siU6wUdNz7AdpfD7oyD1a3gnkg1fHDuazj",
  "key28": "9bGzWLxbgR4ndt8Z9P3MJdV5oL2euxaEEoa7twVRpevmPUfhiWm6YAaFDup5uEKKoYAvMBCZZ1u1sMVs3hjyyZw",
  "key29": "3bJpVrRi7nxSw7QKPk9trfaZFhud5EStGDGxV7tDmRGuG1S4DE7ukWQA8nKHA6o8bc6685jeQy5n5t2iEyYwFBd1",
  "key30": "49m6juSNV82xKsXN7nYK7H32jxcx5Voh9fz1TMKKfCPxBvczBMasHrCgcGXR4Td9bqBFFebNZ3pvEjYaKmPCUfVh",
  "key31": "2UJ61saiKZ66YDzqZq4QRh7ErU8fPuGLqgua1GWfrCfRYwzG5CNuhrTGVTHJ1n1hNvsZEdMF1f4Qsk41s4LzZ6dr",
  "key32": "48ARWd2SJBxLRP9NbDB1xrnZoTLktcZMZc3Nsa4f7PyzVqPHsjeo68hoKr7MK2gSZVXfj4AmfgaJ6TXSi3RmvqBj",
  "key33": "4tv7dh4WYrWuXeVJTkdXPxs73Ttq71isDj77KhuDWFDFnJeHc7S2TwKQgBonpeEhAK6USgVzp7a1BtFqkZivfD2j",
  "key34": "5NtdjGxbg1kRM8fT3S1yjMmBupYS7rLZ7LeTGqLtA6iCKQYxDMzXZAtyg772JrgoV5S3h6EXzqBYMYzyupyTt2Er",
  "key35": "5MJV6tmXq3WCcaGUvjd2ixXFTyD2VXwWjfEkax5KQBjYWdDC2QKjWMNDAqwzZXVAdkJ8Kg74j7Ctre6Ej1r3Uy8S",
  "key36": "2bsVUneaXnkTfxn5ivBeCwPui2JoDWghQr7QzqntUSFrXkpyNbFrSMUpqbEJ544ubT1LCkW8c9NjW68t34QQRpNV",
  "key37": "32UVKJdhapRM2SsTrxnTLXmcTFtiYYR5Dk2fDaYjZK3LfKCMFMMU9sJKJ1NYbLye4YfAei2hf9hDb3ixVvCG4FNm"
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
