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
    "3bYq4D2UsPhsW5LVbajYCfV6HVJUFBBqpgEEfPZM2FXzj351c86LXSQXwwwGLADQNmLqDrLsdqAFx2ZdRdko2kQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6ts15W8T9fnLXAUAd3ZMaaftqKpY3Z7UAn8tzrD1aSJzXiENGYv87AqciLoUMWErWeCQ4fDYE4cRZn8pmmZ9Am",
  "key1": "2g9aYe3xWQMfUR1hbSrUPHyAAnkDfsLSfRnMqRhw56oa4KYKLHMzvfBNeb9KmNxxLNBmmjvGdqrBV4tp4DRRA55r",
  "key2": "3EaJYX1mdfBN891dQr8JYVhERg7tvTZUmaecLnt2EJMGtdRcoQyTtY8Pyr14aoQhGYHaRJ6ga7bSFNirLsKCNLKY",
  "key3": "3tEPH2o4jPkYGg7oBbCtdcoywGRYRjdA2rWTFvfrarFXZCJUBpePfPf6zouDLrfeaBGb8xZnj7g5umWLZ2Qf4VTJ",
  "key4": "2dJbHvL6t47YiWE9jw4hy2Lwxp7Z6Rx8NVrdomVkPBSgaR2kfPb7aRHMJpFLRNXpVyjT2pr8jEWBZ4QeLMnDpR6N",
  "key5": "qsCJSNkSFXdKUcUCAnrfCX6YFjanWWsYoEF8QC4FwEWqRziSA4GKZ5juLsCdHra5abArzwwVDGC8P2TBMtya4zK",
  "key6": "2kRmA3YvzNKpsEQ2xFJgnpBLHCSbQ6LNNcKTxGzYum12syos3buVoM8dC9qTKvPbFzXxyh1vvFzGZGN3rQjnC1kj",
  "key7": "Y2hvWQ7zLTVGJwvWpsKwtbr3Z6tm93Tnx6ybUUSsbWggBikaoVXWEx2NGMmwVgQkgqT5PkkSSX33WXHyQ9Uw64c",
  "key8": "4hsrh7LQAGJaVkgf7asGCQrNBXKv6QYhN6CToiFfja8aRbNLV3bkhAPG5fnSspeTLAs5n7Zbfo4Ar6Y7j7PS6FQf",
  "key9": "2kD1uVv2ugGRtUQiAfFmRLqv16ZeiraPR7KUEqTfvpiJDTKZrQfcBERrLaqGfaHVz5PexMNhzezbQtUfJrKTZ65C",
  "key10": "t1DWbJGyQDb6TjxqQZdgnFgmbzHLiGjw4NDUZwEhFffwM8qbuSWGUxJa3FzGGvq9RfG6Y55rUPnS97AM1WndW4c",
  "key11": "4QVLBBVZLP4Hq2C1jPDJPXovzy7oWvxHbA6i2dPD1TTrYp7LCYynG72jbiNzMeW89CyhCvMLuVVRHKoCbdxG8L66",
  "key12": "5VJ98VwyRQDjpeoDtch2gxqu3Jf2rjCcPuhfQPpqAoy2oymNPH1uNWnDq6xJhNxEKXADjAYccd6Njg4ZpFs8RbmC",
  "key13": "3RweLyq2ZGu5SKtudsfYUuPSkrYnmoz9YDa5EyuppA9QLqenvxzJyVstDf7zzkS7FiP6NfQzApfveXMxyDQpf6An",
  "key14": "2R8TydSceTaQnbP3t5rgodc84L8pHbw99q9SrbeuLsSrGrjKkU6bX1Eee7uLz7jrEShxF6yGLKvn4ZBAZPq6EQvy",
  "key15": "3o4yBSTBSdRm3txD7rVWVVqxLtmDBVzPurHYBnzSp7AjN2ymDmBE5P6BFhAvuMeP32TkwkvQ4gyF2EjWXBBgeXiF",
  "key16": "EvhSzMsoZvMyjC6uU4GqsG2fFajrTpEdrxHkQp66bj7rrCCKmHgv4oUEvHWx1qyfn9XqGXbegEwPJYsp7GPLZqs",
  "key17": "2ZSZcfRU8F1nFFZDRzcvUMkrjJoQYuN98aimt6GiadJ8dodkrKy1unWsKuMctKXayVXZ2yguG6iLP2wLmzwbywVB",
  "key18": "UyG3kir6XLNnV668q44Sa1jF9FUhUsufcdCt5zHrz44sfG7MXbdwGxyUwdfFKLJiEGiBgsa3AWAQAxfxqFUskWV",
  "key19": "4WuZn6ktvcrSXCK3523i2too6dnLprKDpMQUFs3aNumydeWZ38uT5HKRD4Ne2rhs9usxzXYyE3q2fxgpbpt4cbK1",
  "key20": "kV94AgK8eJmSKq4XSzNfCDtkmaSbqPszTUTd2WFva8fy7ZxwBnVe7jkWMA6GY3p1CPHE9mawa1yNWE8HXM6nm8z",
  "key21": "4Fhz68cVKBMWDaDFJobkbdtgTDPxh3nQa4WAkwwncrdMpcnKf4NVw8qhJsTsc5dNgmSLcUY9E6VjSn2Wy2Xhz15o",
  "key22": "4pWcrk8uPGD748ueETrfabffZozbjsUaWQdijvEWDLkK1oHpoQ38hZwBSJLSzVDCr3x1VG6sY4juUk8owTACmVnm",
  "key23": "3BcoCLNyuZWQUx6twF3udoawb9h8EWBz4r2h6UhNkDHqT8qeV2uH3ru7aVMgFZzT8kWPKEbiNsud3EAGESMN5bhJ",
  "key24": "5yMZ2LmyvDcb45vpp6PBq6Fu9b52xfNG8xbRNpMNL7etjkGYMdTLjQaFQZmYpwFXGz5G6wuJrmSEynTMMHp9tSLm",
  "key25": "5ZqgUwEFGuBRRGCtJBK7mfUFXE5jBrwK6K46wik63ahPjDVWGiW5fBk49weGekXoxtg59MxuT44Dfm2K1q44s4nM",
  "key26": "5cc2r4qzHVzd7oJ7wkakg2bYKMRoa84xPVd1c5xroPZqR6X49c6iGZFRu96GgKaTM3px3uR337qtFEX8m4nst5c5",
  "key27": "5r2ofDMvqFYQfw94GfFoCnXwZCeQXzJow36XZU1dTW8LeBZ6pZyE94g2rhYD3hwphckPR17feMEVj5UmPcKyyMLp",
  "key28": "5eySSnvnAEkZcAji3NTR41WJPyTRLG7DecYamwU2zvwC7cQsdkv8pZ2koCSavuqydTpsvY6kkMgMoJX61ReJDkbU",
  "key29": "5bcEXsJj7HWCd6eRXfjK2pKZVLoVh5EW945Jy9rhykxF7Ede2tg1en3MnLaF8Fsi5aQk2GgPGKEtb3dJxwSj3sb9",
  "key30": "oyTYeMHP8UWQ1dJYGkBLWgfqYDYAAmVvNzvY79QqRQX9gquhzmcFvFfvjGNm4oFBAZEvCyaNmUs2KEYxHXBgmiv",
  "key31": "3c1XDXPMhH19DnjWSjSpGyWQUaqVHEVVHzM2daw5kP4wdR4Abe2jLpU1VnSHsBq8RC32xSrgg5aKoMjfFPx65aJd",
  "key32": "26ZMjZhzXGgkELomtHcYugQZuGQEGVk1nHGhuHP6WU6dYajps7EtbhCs6ph21T2twiLBtWKum6K41QH5A3zV3HuT",
  "key33": "5BzXekvTXTU1c7rXifq5pGCCz1BSiEXW8mSbMo3Lw4bBFmEgCE2HzaYUtKB2VQZGbnAPGCbg367xisLkn1GAVQKs",
  "key34": "hNeQSVqkqVzzpTBSXF8JiPpRRV6vC37YqbijXDhWfZbaJuzNZJ5NPqjDAF5mpywagtkAQFF5F5as6zCtFRhenk9",
  "key35": "3vSR35hNPSJzUCSvNfPoTdJsBJEoinjT895KkrZoXnpo2nrMza8kyqZRh4nkKaHV1zcdViKF2mZ3njgpskT2GD8K",
  "key36": "Lei8rz8REWyuEBdiRdkzG4s519cjKvS82mmzhWEKRnu4yxWZkP197r5BJBhoiQ9SBdja8ozWuSo5bVUnAq7M6X3",
  "key37": "nphE9nehg5ir9tqidBdvFSH9Vx2WPBF36opwuquo9KxhYx5sKhzjkqYt9LZWo3BJPqhoh4fehMxZy9LzzD2xVvf",
  "key38": "3FBYcxjbndKkUA9v7sDJmv7XWsBd3vqVkxEUhKpR5GUMA9ohRsRX4ZnLrDwvTp9LKHP3aT3f6KfTEnDzPJSP265J",
  "key39": "5vdvvKJpvQHuLgmrzWmCSYsFDGujrf653nkTttgP8Zn6vgyeEGXWkQRKr5xcDEsMT3Kzpw9McZd4sLr4AmHQwGNH",
  "key40": "2Qh5K8XVipebs4e2LrMmLsrFtKgXV3Vxm8hBSzS4Q9qZ4GsnXeM6hBXr6gEazMUHA377sSKncLe9Ugsysm154bKh",
  "key41": "cogdj3rPGN7U39jeVxHr2DzWBoiCN7EPemUuSEkU6LzKKgpJesPZPEwewgCAq88qhF5xBQ7Tz3sJXxBibReTQwK",
  "key42": "4UMgsQygSAmHLs79874X9hJTcVhZVjdn2jvBvGVHT75VybQyUKzNFDjD6mBGU3bL3cV2tfRXMEEXhcvMQkK9yhX3",
  "key43": "33TbJDf6C57YL8i7V4ofNKQfLcXqok83QBxGUE2v53ehYJ4jSysMqhQzNvoTBwgLRdXDhQzmYQ42Dor78xrBiyN",
  "key44": "fuZ1LRg23ZC5iXy9L5eNbNPQ4wYVsyZDAyzY8nseb95Zu6UcQrFTNPQdDYAfESZbn6qyPSvodejMuynMqQ2Pfxw",
  "key45": "54kHdK7NwKwRWqEemB5gLMUiSLhTz8ngnnfaFSr2MWUB97pafuJzwvTqP8EYsLgGk5ftCPTh5sW3Cmu7fnRmMrqQ",
  "key46": "3Ea1MuZGjaPooDGgTahSWusSyP1SDGdiFoX5u1XEyeQ8EbK2CFsXZPFSawuHpVm6xHdPG9nJUNtNuZh4jovUW9qV"
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
