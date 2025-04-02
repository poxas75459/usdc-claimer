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
    "562t4PNHah3wxhUbvHb7mHyck9NVECJne1moJEeZkQBoKwkydQE62J5aAEWZBsiPoL3PHV39swaAfbRcFGdgmSXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYn5hwAMGXgAuzbAY4faufMBujghk3MKGm3XWgDZWmETQfxF2u3adH995aRytTaM1hZYk3jwraitj6X4kHxgALz",
  "key1": "4gTyMgzwzx9umhGubqTN3AGWa2gWW4deTDZUUHBfhmSbytTT2pvUTisPiuk5RSqBZCGDf5xPQpsE1dJeH7C7UF5z",
  "key2": "9SW9HW8WEsmGFpBV7nJCRZy5rdXhqQj9B76dNcYUHbVVeEKpawqY6uBRahLeFMtN3qWAHt3hQvBNWJD3g6Mv61R",
  "key3": "2HzKs1ftRVXmXropVQRasAwswrjNDcezvfJLZWfA6RVmDjmB9hCRPAQEnmESonABFFTzoGuCDJbrYSNENtzbpZ48",
  "key4": "3udXSDxajrLM3uQh8D6Au7thk4fThstMXmoUDdVtT5fCXDGdvfpr1AVR6tBnCLbDvsGKW2iD4ubvZ7VT5h9Lgz3r",
  "key5": "4tQGsdWJDhob8RKv6nfgZMW17JnstwPXSLrRS8NdWbqUNzro3d9n18cVaGhnapLu7iZxvzBES3jVmZ49n2z5vZRB",
  "key6": "2jvTboDawPveESghLo4QF91pE9m9EXjXgG7jWKXZJCfcpE8ivCh2sMLPEqTCZiMqEsLEPmhPhpRZhfHsoYTZQzj3",
  "key7": "4XLDiyaGf3Tci88CeikQrAAtUHFXbHybcJjBZp611xUtwR3EJPTHab99gUyDYHzxr113oH51AnejkRmuNLF1XfhM",
  "key8": "3vCtsyxMJpaG64WR74KUhwXcNFSSibXCvj6GCrbcf1Kp68xZYxf9tssnURnmEseSEfVXXSRRc2ziEeUXcw5pXUNe",
  "key9": "393PLuozFD9DRWmEXt1gEtEa8dAu7NmCDx6mx1HrmHzNb41HwvYKtGMsaMbnHtPQ2HpDmpskDtS94CsvUBTdLcHB",
  "key10": "5UNUZRqjjSY4ipR5fKFxZ4w9sGJb9tsdzfCdQ25Qc3Cd2iKcxtDXiyviYbSyqfySqb37GN5DZ8FjsBktoWxykpw4",
  "key11": "2R4UYXjNRv3We48xnmdCPymKBwmBhTtCU92q1LuoGXBAbiTEZMEzH8PtTtuVBThGQVpW6KrBPLmX15jN9gvSyZCB",
  "key12": "4aLNAGsQtBD4mroyKgrxvNrpShsq3LDH78qAqkKmcau84j2huh3FZnVwAj8Dv13Cz7KFRg4BapTPVXPcxuiW5onn",
  "key13": "66P7cKY4TZmyRTHfhsi8kkEPPXWE5Kwcxx1Wd7upmzCVbCK7jNghcw1SG52qTL3drBvT9CKekbewVFxG7Fiuigai",
  "key14": "HhbDC6AxFEPMdKCfCrUuqDF9XrhpbmvGW6LWFVeciawtpPMBgPpbhXDqa6tQUQevfk5God3AnJppnDH3ktEiRJf",
  "key15": "uFJroqhMY8Cua9rthazWimR9tFnUAN8pPosqtvGW2CURRS4QgDpUNoMq5tLB5WauPy3LwyJc2rEX2PZPNHWmjXx",
  "key16": "j3jYo8ygr6ecvzKrpNL5V3vy96WaXbtpzXuBR5T5HengYWj7Ph8q5gyfL3qbwVT73CHvJc9Dum579pvrKAu4kwY",
  "key17": "4hiwL492Yyzis2YDJk1YC9F8EEuEcF3djC4Yr1GWb97Ki5mpwmWk4Nt18MWn8yrsDCxKNT3LHV7xsjGr8fyLezVF",
  "key18": "4yScfZj8mFXt49ttRpTMuybhVHEDGsQoWFieQtrsK8kHQ9G9hmznSVbYgyUnPaDAWsD12C6JMJmBjckFzjYM92aC",
  "key19": "5fEVvAczwjCEF5A4ZeTEK1GRUhjpe2ockybeZ5AnZFk5yn9wWUyXCXTNRgo5Twt5Up8e8aVhF2RrBKsfqm5HA56F",
  "key20": "2eC3rGqq3nQLH29QBvMx2MzhL8hBjH6bLJSXLbjLfPVqvHxdsNRYoU2QVZLqbkG4Hbi8yd9CD6ZBTVL659znxQoU",
  "key21": "v6pfC81FewvBmuTjj9eTaUianBgEE1fHhENcNXhqtMAZeyQegsGPPEzk3sXVbsa5vYXh4wGNSjt32d8FfaxpSbt",
  "key22": "22kD9xDPvgsg6LWUiCib3kr5USz1w8BvqFDeYFXSNZJ2J87GtYdYRbxf3Ysw2fNSWuqMPazRCa1tnfyM4AAMgwaS",
  "key23": "3xHy8RkTjBS4mSJkG3yPvh33xwFoKtVdcRC9TujHPnczvVBqi6ZtFabfVgvGvE9GsaKY3QsEj6f68AmmSEGDMMin",
  "key24": "5sHtPVw22TUG1y7tZzKf3oEovr4NgtLzLKtnUg2mgNw1gTobekfXh4NZBDJDWtcKdNPb5twFkGpdBvb8zvGbzt26",
  "key25": "3JdJ5e82B6E1qaniLKqHDcwcoMzDy3iVYh1JYrTcHt5WUnbVZrtGWnMum4EkvdyoSyGYWuJy7qyLEptSbu5CNxbm",
  "key26": "3ZLcXh4annM5LPnnb16oPHFAuJwaR5ui8HyAQgqK5LBg1JUUkQmwcLMnCoKpZmMmirWaqTexsxbYqLSER4ZSXdZs",
  "key27": "3aJPkbKyJx3nyCYpLqAwAyf8XVog7WKdRQiZpc12oKvvJysPPcdjPMhVsNw8kHQnP2r1TP5NFiYb2TV93HtjcyRQ",
  "key28": "2LBQ28Azr7L7qgzoNQNxRYHGcR8LFaxeiXh96Jn6pppxUPqzrxWnxMDS7FDyqeVtJDx8qJS9vs7LJMp9SFfoiLra",
  "key29": "5iQzvxL8u6rfy8d8yYKLN3Ub2ndMjUE4hLvbmcJoq3jjoTNNY41nQpFyJHXUgYXBdYAZUKKiyW67k9jSD7LA4Gix",
  "key30": "4PcWWbsPWdFvzQCkNRus8J89ka31cegxRXKrLh86p4LVoU399Jzsnf7P2k47rsJiaXQnKANMrXxC3z3BiFoGKqdu",
  "key31": "2jU9uinXAsPo5iRWb5rHpH3NPye4tnCsewAz3PeEfuuZ6W5a5fwhFnvJSfgY6H6DMoxquPUgaN8zL7gcdzujWEfg",
  "key32": "FQQpmMLgzvLNrTwNY2BHcu2k5fak1hwpPCeAP8CWgCFudDMucrxPJEBjw846pXbLeiZPh1qtTPz7aS16ynh79Vf",
  "key33": "2ms3kMBMxff3VVz3ookyy2CNJqGUkrFja3pqbNP1eyyv4JjDvLneFRVkAT99eFvos5G5C1nUfrn7Mo7HB4dVnBay",
  "key34": "3MUCkiSiEEBb7bW64uNrrjGpLo7Mhyh8xiEMmBuDrLttRGXhvVBdZMSzgNrdRs29vWQrXbo3ffnxskzYQLc917Xn",
  "key35": "2K4BKHFQMJowdowyNSoZ9o72n8SZJoZLfJsndmqJwLoATvF3oP6DpLGY9eHV6eozsfJDbnQ2naGAiKE7E7tPBGrL",
  "key36": "4eHPN8ETawnf1LD9keKLauUh3DFTWPpuYGPLM9Te8BS4qkPZd3r4eWegYYLcuCoCnf9mK4FSCNvYhDhrv2v6EHE7",
  "key37": "3ED7VpxoUzJntxARcyG7dCc718XahRhw55wr8ndBhPQvdVjLDv6BCcZmFXjn1PSkSAq1MQzefPeQY6bp2cUvMRi2",
  "key38": "NxXMuVDQ6H4GHczMGUvV4SMYqTnLtxHUBLcekB428j6n7qHCdppypARXQqndbqbnnpPz5h9BaSEF6t6CfWAh6ud",
  "key39": "5mQMtxRuBkgFAkNs1JWX44ug7yYbMyT2bEPrpKFnVwXgexfeaccWp9AaGnUBrEupn1a8FKcrh8JAwBGbYf4dX585",
  "key40": "5gs9MqunGnWKzSnozPDNQou29VCnXzk3LoEnroXtFRa6NGQNqu4HvaZqJuREfjuo9Zcv8xphbz1efvfzqVLS1Hwf"
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
