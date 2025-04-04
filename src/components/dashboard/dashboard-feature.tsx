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
    "iBDjMhRdHegptZ7ZSvhpx5oM3vsyouqF2pNk2MRueGSmjT5qYVWSvEcWFyo7qSYH4nX8ExP6RyXLK3yXXzfLD8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hrEcCi6E4Soh1C5jpKVkURX7dyrpJ9jthcFpJ24noX8e2zhbt3kdaYKFmjkA2nJbdyH54L4EBY9gDfqGuYRdtZi",
  "key1": "3N3nyrGt93zzpmM9kNTVADLYcBV1LmDz82iy2ZJsnoPPTh59ufkuqPxYrUY4qnNkCBwynH6sqoa9WbupPtqVtN3y",
  "key2": "5d9VSQpZsbK77L2kW8mjhsGX9CDPg66MSUgu1KadiSHF1zZBVQnYYRNsKNwq6cfqXEVuwfFuHdnvTmKJdgsXbLZ3",
  "key3": "ntLCT27jAPWz4sDfuk4AJaWqvjUgwVuNLWxZSVbiZRjXQVArNFz5B8Xmix36pa18QhjefXn7EnvDPEXMrDSHx4i",
  "key4": "2uKW4qFTceUfEuNZkEt5rk8xnGfWjx3dwcZBY5ga2QXv1iWY9XRFNYAqaVPoVouLGxoxEH9kRCaQGVEo8w8fCSvV",
  "key5": "57Vjm5EYBicNfU6jESXoWiJNJFeXfaUSbJA2pScesR9ofXyvWAR2eci2Q3RxwDBponECm9kVhjebLmQeKvEX5yLM",
  "key6": "2JU7tV84SdF4SpdkYY5MaHFjiCh8yVxva3RAQ5Y8rFwhjwmwQczvZ7ZHxSoEajmSspKEZG76QyFpVUKe6c57H8ZD",
  "key7": "33FRWyguATtVhDr1gsHQW37dreWtHiieBYHoA4FZfXW4LU53WnYCUcCfGTmbERDM81BBJyfdH98Va4yioi1KeTr2",
  "key8": "KTx4N6NQQm6fsAz6KqTcbZZrLBi6jCgrdyn2iJZGQi1nn31EneVBYyp2ks6TYqVkpHX54TVxi17e4BAos99H2uR",
  "key9": "PTs6UiXm41nNWf959H1u9n7L19bFSGjRjw25YEYL9yMG5VxBuBzY3Gb9TMhmK7LJzoh8mFmejw4v2Q3oofeEPmv",
  "key10": "5Exx3BM77nu8GF5v6zGeEAhrDBABzfTGABDHpiNcxewadvabM99uNTPa3jBLcheXF2Mt1iPXZQRjvjAqvJeocPPa",
  "key11": "PPBkAZDUyqE2ZbwXdgDKsg77buxDzQhY2mJ3r3J9SCSiCZXSxejbiTmNJnHfhbvsTz1oRZEmgi8WR6ALduJrRhe",
  "key12": "2hCjVh7pttecn4hBZdJBCCY8vcsYS2sfPxBLH98ZhDwU4sf4j9yCFJza7KdowGdUghPsNnNV2jp8VcKJFC2DJbwA",
  "key13": "2fgSPhsWKXDdtDP76Y46F3EnydMZvCBSWb7r2zEXahpHGXac6wp5yCxRb9BMpH9cP9ueLa2zpPiguegj9znM952p",
  "key14": "516xyopqY864nbdePdhTmf56JQk9WvyaUjGDF2nvV8frRpxS6HxJH2Ux8zznyobsVxMRg2ZQCDha2vVjdgt4mdoN",
  "key15": "2E6jRfvmu3wxfFUiAmkd4JkQESrggKERa1unfzM6D77pYMFYNKa4WjvvydPrc9suaE8JCiGv2ToHPjcXex3fK8uv",
  "key16": "52umEnLS6SqQArvcaUH1xGdRa1jJNPYUYckGYmECvusjgnsJq7jKHJ4g8at2imwtni2srfpF3d6yLfhdKhJnmKc7",
  "key17": "3K9DtKDZqanhfzm9t5cNvqTjocYoq1yXvwMjTtg6n6tF3N8CsLUrpLkTFSRqdyNkyd2zdtCUDPcF4mH4ZoWmZGKD",
  "key18": "2K2m93quP44qVJRLjoc6jMPdaaGuyWN4Tozs2Qr4fh6kCXcyfKWmjqw7JMdVzXrQ4bRZwN1tCMa7ty8UnTiGkzx5",
  "key19": "2d1Qm8wMbrjgtXsECetfRXZucZR2bTnUf7PEGhWv3N8RwswEM5fWZrxMpjbNc2iMKFLtco3vC5siyqkXNeYHsWVM",
  "key20": "5wmY4VS4eMQ9hp4GWavmfqLovtDVqNLpvTsbheBWqVWTMZ2Ch1k4H5WkQHYVhGsQxLCUZWrb94RF1zsB2bnYqWxe",
  "key21": "61dVEAoj4tuw9FxARWH2VxAUuU6J51KMfHz37Jmgnwmoh5mofyixfqjreryWsch9pJsKingUNzBMvgmbPJxrVSjz",
  "key22": "5MjT1CSJ7WKwkdoiYA3CUWkWMy3zd6PiJ8FxsAuFhEsGYKqXwhwdpDjjcGKThZ1CeF2L5JJzGYkF6y7TMJ4iA4BY",
  "key23": "62zo2ojuSnpShHpmwCmBxUXy5yZAwHdLNhP9kBzdiLyoaw6QBe6aBKboTgzY4HTxjs9NhUwCRk7MsWoc3jUC5Si5",
  "key24": "3FJx12WWFLq4sDa3kDsPmUNxfNn7wEUxJerTyNJsjfW8yprg6NnnmKjXEujn5rARqin2qv754TessfHDA7DmRqY5",
  "key25": "2igtoyay3jWTMC7K3sDzJjrtmzpbg7diNAji535ML95AWZ2e3DaVsbdh1XPAwYip8rATBz27pnFYRZtp8o6rvZos",
  "key26": "b3XuFMm8cdDdc13769DGh7vthYcDmGtvwurj3YcAZLNZsTwDdFp3TPggiwe5Haebf9c7FbxuG7FqyLk4UhgTEtH",
  "key27": "5oqrzj2pGfqgWPVAdGmcqdhfGG4xfFYrtMjSDw2PoRC3GvwvfBzEcVG2Bkfdagv88VUAYmyk8dm8g1iYCTZ9eRSs",
  "key28": "2A3zyp1ovKd1wSc2gxJhiwjFdh9qGkG3hgKGrs2vYaP4XdDyVWG6K1fWzJw9TmwnnkoHipiS4pAQAaW2PKz6wvTu",
  "key29": "3Cqy1k9TkkNqqjJDVkdX3LeqbJL3Rku6Lo47QStcPTy5VFSeTNrdUYC89X21sZmf73MriDnBwqrkVUZjgf4toWAa",
  "key30": "3PFNQh3HpAJi4xUJVaXCHVrefdkFX1fxiT7Xv15nLHoDhq4CH47rxqPTzyXg4yCuwpLBUbrECmgyu26PddMJDCFU",
  "key31": "5Wjmxza2G9vcdpMtwJpiSkwuS3hwV2i8mGYKKB61mAoHfZhkNfnjM3KqxJqn3eGHoBekxtezzQ51UVHF5ktWkjbR",
  "key32": "XLsbFkdrLxD4hedrKMgQDBsYj4JRDofYcrgVEvNkBtgzrYEn2YMt9pckTeyUfy9pXFFrFVH4t8TTCoExnDwLhAq",
  "key33": "4ic7dbgBXJ5GKvepesjYNrG3vJdCVQZoZugSpZqMeYVXBa2Ut5sfbCs1FPVH5mSrz9FbDCWH5No7EVrjp8kvDKwH",
  "key34": "5SLgTsvVkK1xRfJM3jUEBpBeV34w5UHZYLAJAHcg5w2KTtFDyAfbCLCnDRLm31AX6Shi1ZCN5uiRgrK5aT3BEKKP",
  "key35": "5fMkYKYB9crz6pMp3e49wuJajdEfKpoTN2BaV2HEw3LFhhrcnQnarrD6gzBNhxngdYy5igYafD9ne51LgePVxC5R",
  "key36": "59WvguBwLEYg8bgGnmLgAn3GTSeB4ZaC4vMRTrQRUHB1VSQe6TbMCTZ6QZeR3u7wsFmvBFsxJDQFFTsPBLePXQJz",
  "key37": "376ZDyuaHFij3Pi4mSMN2iM7Gtabx4oVr2bY4FWVkZR345TPiQpdN3b5WUP7cxLJAZwraMyfk4uXJ3kNYmzXfTCi",
  "key38": "2YBDKyve6osRPsrYoknFGJbPJi1P1Uwsa8pCvyK2Pjjut5tf7zhTq5KVNr42XJJcPAkiN8Tk5Df46wrnpGqRuSDD",
  "key39": "5pbJsGzhLyi4MZwTdJF2Xctjc65GJbFj7y7XULHU4dhcFxKa93RSdLvhyFZhA5tFZGDprV9chkHJ5GUiLaBLaQjp",
  "key40": "3wHVTCs1qoK4uc2A8mTDEyk2kTqXnHE5eiG1bpczzm7miVdgHuSbDDLNiVb53ufWeN9pT2iBfZkYbMkcaQqunjXg",
  "key41": "NMpnkf4oc9NyvuyKniuc4YXKh7BzpJQg4yhAMngHWGUpcg3xhAKZxn2UNTmjdNkXeG5xzzGMjHDGgFgXnaFJVHL",
  "key42": "2yxDfpHJeSZ6y3tPuhMfUKgnL2kyqNxnfakZJANYFtRgTcHbvHXBfKesFcamUDvRpaSQU1yhzfePsd5oHAvaHnSq",
  "key43": "B567bG4eaq5BMJY4pSuqbzqAozMQaqkRrc7y62HJyfZnJN2bDd4Sgheh8yRAk8BEfteAun4caEakNVYiYgTevF8",
  "key44": "2TusQd88JKcyacnawhmNZgvDxBvaRaGhjbNPMZyLnYbAELkrbbvjdX2DBzMTkL9Qv4poAB7rqQYdaJFErJg3hKfs",
  "key45": "5yh4bB7642UWvBFSLLCUkw4BEwjhcxZFpYWzmes4EFDjDHLVsEV93f6Jp4urRmwttnSsDfGwQHpTq26he6qUmmFU",
  "key46": "3U25jkx1KKX6d89uu2FNbnbsUHh9Xzg6ttQHMtkaZfBd8pKkRSwMf9uAfA4XuVTah74iJUZ8jdUFRLiwxN6eq25w"
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
