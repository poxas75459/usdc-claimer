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
    "5q7V1xEfEQMobqvRFPBkU9xhiqin8mqPHNU9Snqhu37kwrgkQdB9MAP4ArMteqmKkF4zWJXkWd95fsuffFYTQ6ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wE5fVo59m2tWFcUTVxxkXL3aC4Qh22NyjKdTwMBjAVmtzSZ6Ab8snqtsHMb7GyWbndbUAeQ3rqS2JisS6PXj4W7",
  "key1": "3vbpKuZoWWV2mAwcxxsSBBCUT1AtJLLTeKH1X8RpWyk1cEg8t8jgkui9GwZEwcvu8cD5GSnuhbWecawSV3y6GXEa",
  "key2": "3N2zEcoth6J9BwEB18WrmyWkbEMwZhLSkiqtqyeDohaNJ2xMzb2r65GmJEbQ2ocukHARE6XQEqbTvsM9HXG6VgEB",
  "key3": "58VQrRCSaEYJZew19xaP5g7SvtnhwDSdJaZsEyymwzNCuUyUcAu7kugzMyw8A4dfqbFA4fqy1X2ezVyvG1M9FKdb",
  "key4": "3y8gVVKiZ3N13bqS2Js7iKEw8uLtaEdYZ9YgdCTWa7kE2e6fwGvMSyMEgBbKjtVFC4gTSeDpDWRq7LNTwi8fvDs8",
  "key5": "EMCBoT99sBNHhGPcLXSPEjGpuFHs5d3erhXXagrVb6Ae9qkLZu7qyaYWVmrUiMBjHq3eZooqKh8Mc46P9TnoqAb",
  "key6": "2QPFSdUbCEmCYVrj15XumQdho3WdHwavrXK7Vs1nAG2KowLJ71Jkj8TJd69SezKu1kf784K6mV9iahGyTKQwNb1F",
  "key7": "4Q3bZ4LMCaQfmBBuC3jwLFp3rSXfEXhuHD52y48NKnxXbZYJegLkVqjNWc9A9hzWa7VnTqKZZMjw2Ta7GzTnbmri",
  "key8": "2q9vyoKFbYWaP1DmGz5zYZ3qgFX3mMD3ySkMhAgLUZDGzSyLij6SRvQXjC62M5UdxnVDia9KEbw2mvodQ5NkExRY",
  "key9": "3QPcHGseD9ajzFpmoyHBHt3pAffMuS2db7JNfTvxQL5ZZnQ56kavj5zfWB4hx64rhc8rpAfhC1tb6WjiTmsTC6oD",
  "key10": "5nQPX83PaZp3C5iTmh9LokrzvqjoQcENHnm4PEuxrFnfm2GXkzUAdqsjh7J938EJJn6Dabnb53268uFVToy3hfxE",
  "key11": "5kWrvLAJQUU9gDXmzm7zVVa1YLWT76dc8UEG8FGYpDe6m28KUSU1TabxoR5ZBjFGXFf27S1QjWErTU1cKMYxC5Mp",
  "key12": "3JvZiX2cW3zbet1Z75awCS5gGvnueVakvwokGoD7enMGcCXCtdWHMvaPA2CWES4yhXs5SYpikaauw2oJmAd4BWvy",
  "key13": "5ATW15FUj1GDS4MGSP4uTPW3xaE1Sz23uowSAVRb6B5CyCvBgKKe5YPDXWZs3kJedMVf3nVN6JUXhoHBxmyfK5qu",
  "key14": "4cVfAyeHqfUaaR9naFTAxXhBi98HAXcCEhXaYvFAjfgVQ1WnTpmSb6XUwyGnZGLHSXpHBXYLoemVUBz9tRHT7AuD",
  "key15": "2KzjQ6QM4wSBkEZ7CGFNniqr9AJS4VoV2cxBT3vg2ytLz7imZDWQhfRGQcC6GuM2DZSmu1cJL2aagTXNMteyTjma",
  "key16": "2BeUo68p8gjDq8ZcVc9N33AC5EDqf6GLqDFwAiEUoFjo48vg7krLpm82HF6cLkK6J3TucQ8zsXgCXjRtn37WRmcL",
  "key17": "4Y6d928F4a4k6yNQ3gm3QTSDSzwe41HwuDmAcTs7MMX9zyc3qv8mRpKY4CGKkbhFbc3Ah8TjTQNoUerC1aoCD1nP",
  "key18": "5T1XjwtGCjxzpJY5QNs884XGgvzEGHPC6zpffsMwQ3zmxDYQqq1vok4mzESqhknCrgFiMQLrxKcCQUegvMLFct8V",
  "key19": "2Lz2VjBerXXbDo3DCpanDLsXrcj8bghCginSWWiKN1emm5HnHdnjDhDg58DMzbCEJEYUzZ2H1Qkd7C8K5fE1gzWn",
  "key20": "2QVF8XEsKGsXegW3UpSthWTJo3Rdn2296UPzwJLpA5tHkHBy6vH2mmsqoQyChQYBT8eMGFcxtrdePLSNDu5iJXKo",
  "key21": "2Y8FuFQjuDvd7q1v3ewfyTy1v1NkrPx4Hh28uDVVKYMaE7TVcR9PZjxnmCk1tonEkxmeo5V7phxNpDGy8diwNWdd",
  "key22": "3j2JYr5KBEnDK6pnNmNELYds87LRwz89PFR7wf2oJK4GPeYdis6ReRX1sFeiwhtbBY1zey57ZScDVVfhgZcH8SZZ",
  "key23": "5ZNxSZX2v1e3Mao5j7UEts8unZiyM7km1pFf6iXmc8mYonkiNhEDqM13SpX5WNWPquPh1XkMN7edkicTHUxAhPQi",
  "key24": "67LVfSSSjrjYDiPD2yyRVN6JpPzBLcxB34mEoJy9Awb1gSeW8H9HXJ5nvJ5Wvtc2M6WvAd8BSAbsUQ3v2DSNnWNK",
  "key25": "MNWgZHSWhooyQ8YmBSwoPwAFeYZoRnNSLy5BYnzyZoa9VTRQnz6ju7EYBn9e8pmeEuqRNgPeJbnVs3k9aabY1va",
  "key26": "28X5FZcRPGuXML4K2PwjRAfgHmXjTDsTKZ6JEESUn3Mi8qteKHeVdhigxVaHYy46QMfYcTDKLyj3KMsXtmdFtinY",
  "key27": "63vcbo41UHrYfmSenAo957XKofTbeLr1nV78DZZe5LLCQ4pCv5NStKMdNJiZGGYyvCHhoAYH8Dtse3MBTqRbLNix",
  "key28": "BcDGzazp9Gxf8WvXEi94yvgSqfBpipBnUPFx5p9AKHYYDboLckKZsoxzwp4DGu6fnqcC1tLb8SKTcUwEBaGr9ic",
  "key29": "5pwxiFjuHhB7kjc5hLfNqnWUZv5KwNdSoFHFSfxQ78f5oEaA425UkNJRVukrQJEr1Dhg9MEUVJHT7syruYNHLc1f",
  "key30": "4EQXXEGBPqHnDUzKvqwaLia4NMBzVM3hDFzHEncvpHVQtk6ZQhYWk1z28MAajnevK4CoEWSyxMVjddRwoKdG2xUh",
  "key31": "4hZ9jgve6T5dC5htdD7LDQ1QCLHpVXajpjJXG9Gck8KmCJMfoJng1Bea5rUAANK7EXwuy2yfb7jRpe3D7dMGVoj",
  "key32": "3trfC9d4t5S1SDLPc5SUFaKqoPLV7rNXodnFcCxWmnxRkoeH2f4YpVvj9UqNz2ESRg15RetDH5iBNPyt8hB3yPH",
  "key33": "4sgvhhMbpPrz3vUYwYrpQmkGq8h8brfG1122SaGbXtJ7s8cxDN3uDMGoYrAXqGFEfLwxav9stTBYUndqP8ZAFSzh",
  "key34": "28xZPMKQ4Fuvyds3aZTGTG5FqFL6Dx3Bpp4HbtMUeu4jJgQnf5wzbj62gQzpih4Dbo85Eq6hf5rumzMSuCesGPF6",
  "key35": "3e3RsoEim6GuniXNjspiJesMW4yBKbXeArhj2xk1VK1cPQYHPf8GgytSEBZ4bGPCZydfM17Vp624yfV2UKnKRmHE",
  "key36": "pmWjpLvU6hCVhibafGag7sQiACF5JBwr7xW2Une3o6q4howncWXascEF8C8vHi6NRLDR8gR5gA1myKgzC8JhFHF",
  "key37": "4wKYrKfTsaBuEfHbzzFuzh5HL9HHG45wLJiezqnu98rr6cqeQhP2USbeyoHUSWaUCMFLxhFsstqKQBGcQaDHYUw1",
  "key38": "3U1oq3DtqhcieVqPhjDRsmxqEFbthVMHdHZU6XVhJtCTB6TxBoJv6kxSzdTEhiZCS1S6noe5TRGWd4UW8cecVVv3",
  "key39": "UcFD2qG6BXJbgR2QpYPTwVtHC4iLWw2dri328XXt1b9RXq8LfKwaQQh91ZNusEkawFmkwMcJkx9Z9SjjjZY2gcz",
  "key40": "3F9g99cSCCYWG3i1tpN98s5BZBf4m5iJDoqZ4rRWLyxNVyyGvV9DVX2TPkUrpRfAfZ3tZwgkyCMqYYLrx5cccr21",
  "key41": "2SUQqxUczA63eL7JquaaNzNNeMdhst5w6rnxcXHFowtsa1MdJf3kNUVGXN8tsQD9fGeyfeh9QbndViAduzV9XKae",
  "key42": "3AybR1PwNpkyaMvYjKeHAZ8FmZjqTtLcXj34hSbsyUB2n4NZycEkEyEC11pXAgwfy4yFrXbf15VCLtMrMTaNXfCv",
  "key43": "34AgULize4XJWpSVHbnEGLvgz6data2hBWWFUffihMMzLeyzrZW79G9x7j2EqTdcEf3kdRKntUdtokZ7VyuDgGAk"
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
