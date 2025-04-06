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
    "4aBYWxiC5xbF6yAdv7a9Xpfs7o4wHbhxeSBF4kib9VLFb3r47VtAnkTGameBLnWeqtEEBeepEn4gfTALMHQvVwxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZrTvTe57wKBsCVXtxxtMATRzZSRzhNyqmg4hsisKHMGShosALrUbt3LVsMZgwyNEoNxNxN8FknYwypb45APPd6",
  "key1": "GL7L5czpP7PTtUXSHwd1qeA3yHfeYzcPaZkUdwwgfkTN66ygWdtRoAACQveo75DAeRrbGTCvTawVLkcwh2JzT6T",
  "key2": "618XC4cgztD2iWj586d18vCAbhKhPUsoyEx7yR6WNsgc3sJuZnEJpQS1vHaWThbLsXNhRuEpaYHW1SquqEUBNptM",
  "key3": "CcGtkzYQdr3YKYyuxPjmn2EQ7yLspY2sPBbPLtsTqhvnL8DN29o96t9R2tpEF7A6PrcebfHD2kPMfPU8J7mGQJS",
  "key4": "32F3183sehjHEVxFz8jHTo9UYNWP6Z4pK6rBSx5FgEXAZKpkNE3eWMrM1p7Y61xmCJtk1UYhxAFnhAncxqyi9BXi",
  "key5": "3hJqhZXhMwXsTt2QjM6pnkrnEVsFnV7wReDVkEHomJtRJfwTKzvDCP9GSqY4jNG61iUxkNFK5nDdNbA3cjxCiPqj",
  "key6": "2mhDc9K4NGSsGAnbetRUgxszsztuNBeCov3epo6AKhawLdx54EGvUecZAK1FaftFg1F2msWR9SFzFzoJvKdQc4UQ",
  "key7": "5rMu6WHWvuWeDQmDsXnrGsBxRZvYUdefdfo8ZT7MnLHgbQpcfAqXLMQAJUpkVwc6Hk5YfDTe7hMjQAUWd67nZ1tP",
  "key8": "2LA91di2qwFiJHhWP2SqKgKVaHc7YMb637LH4gjNxvdwgf2BsbbMuAA8BNFZsjJSzMWrRCvAMEkkpLExrMg1xbQf",
  "key9": "674MrGUX1MpupEYRQasGVV3o2GAFFj7s492otNxfgZ4eHiFpxHnmFZWFwzqirft3xDfNujAtZvuJvjgYFKz47GRc",
  "key10": "2eJ96F1w2xB5j3ZzmTQ7rn5VXD4FkLMyb4KfUPuygZgwSt2WzU2gjpcNgASkA1xrMZ5RaReE53MAC84ocFdPWrWU",
  "key11": "2oGkTStAQ4PbiCX8LsvaVcQ2j6AepCZWr716oAmoQ3tVbrdzHQuyVeajwTzLARbweQXVtSd5cuMBkCe7F5jWmPG6",
  "key12": "4XN3y5W34GDhuPMrPgjymwqVZRXfmPKHMM3n6WKFDTxWMSg1oCwqVQs8gf3pMMEgb1gMTByrEfyp9jjDgjCYmWFG",
  "key13": "3nP5Q3UwjsQMuF5rc3d26NiLpMVXStQUmPFqF79mCaSLJkUyZbaGYNEUrseWYLKVvtCorxzyvyYJtWjmiAQmbEdE",
  "key14": "2gQTpexJxDPpfJn3JUxJzPyLUkUmszDx4iXKDQoVP4uHHZyNzMmF6asqdzmVDv6EpWmcMA4oMSbagMr6LErsgU2b",
  "key15": "bS3y1jW95x9VaJV29aw4jvyjQhZu2L2kPvWcknEXpW3Gx2HSXaKesQycL2XJvzKQJHMM6J7reHsNvroFEs7jj8p",
  "key16": "5pX2BXcQvHgcgKA1NWsNmLGs7fLMvYrC9vPQ7PRedJWTiUW1YatkbFqGepZotUnKeDWwDf1H6utRVKJ1cbRt6g2f",
  "key17": "3Pu79FPcbQcnTpqm8TDK3VwoSzPP6J7ke2tCaUeykWT6Ms49hhzHB4tmuKsZHLCRmZoHQJ2PhMh21ajWiZrgcZZ2",
  "key18": "661Yd7EkEjgJvQHJcd6MrGtf5hUW6Y1D8gt5zGY8B4fDcLtNBGQR4JhJHZMDd6s5CNDvYG3Mocat45e3RcYNTdyu",
  "key19": "4iSqMqWSaw5foiipXJb7ocacxxFPgfREvsmULfvYggpA9qWZAd7WwE9B277MdBLqQbsbQ4YpKss3UTfmmjC2tWTs",
  "key20": "5D3KgkG8EUJpdckYY2VtDUY1D8mnSyHKQtcBs2HnhoVHp6ejzYetY6E2yhqxs2tKS8e8wZRs9XE99htwD7WLspVM",
  "key21": "5Unckpn1j7xgqxsxpn41vjMKWEtq44ftkKpWaeNfDwd19tdfZwnbuk5xHPAoVmPMDZ826QPwr1DsrmwzRKyu8E8n",
  "key22": "24e2MdwKks1fPx3o69cD3SrmbJx39sx3TR4aMgtV1WAk12ECWH3xgdx6YjGUZY4hmDM3mHdoxaRh1kFpwAS3Nef8",
  "key23": "67crra5Qbk2oXyXGRsYAMiMZTY5VRX8b8ZGFttFTQbcJjSQy72GL49pXPW86BJV9oicn5QTnCG8fkfXCJFXawErF",
  "key24": "3GAUddVwsUvPeWYQanTx81FNoHDhXSxUSmt8vMPomGgu6o5Ys9CgXGGuY4dWuC5rnbtouACBbuAaSf3K6XwGcLst",
  "key25": "4GmaBGonYs8fqAJEqqwu4xMRRpZ2VKNgBXrKBDb44XH6ZMV7FQhJFEA5xXKbV6SQcjgm5ZJMe4wUpXTE9oYeSVB9",
  "key26": "2oCMcGM4pMFLjMV83rfraV2TLJd4f9n3VeFKyoPuwgKc7sYh67tZaKP5TauhCNzoTcK2R37JWmFDLt4ohjmQguoK",
  "key27": "udJfmbt7earijSxrFdReR6QAAXRPRc8c3w1PiTxvQimtLTF7ELNbpmmv7SqB6qtoftM8oBqS4wmiPicLBiGmwoJ",
  "key28": "4htaJvn36Qz1vLT2PM9dvLkMn4hDazQomnnoLaUAr2CGv4XE5etAKBeHU2QVXvymtnaTGiqf8UwD5cuXVRQb6Ej3",
  "key29": "3NNxLbsPq8sSZixMNB6tjPMeAFDyHggYTKcyqMQPDoSttFQVv8KQKwBkXyj8ZbWDFuswp6a9bAsqM8DjiTnZe55o",
  "key30": "zuhRPJ9g1hEAKcrdtNd8wBbLNBX4UZCosatMX7RTFTBq3Wte4PYvXYYEPD29xE1oZaBM7FWoBQj6R1bHB4XBGJ9",
  "key31": "bsFsfaWEV7E5JfUJbQ681oHNyZvtQMks4LVEYFt1ye6aY3MywpCSGbUTebsAwEWpJbmGSweUA2BcpQL629Sb1tT",
  "key32": "58mubV3VgApXbePiKLityTpBzePDHxYbipmFZaQRAP1CxWPZg73RVRaC8qVtgkhCkkDmeyBtoCLw6v8hfv2TufNM",
  "key33": "2CUsCRQBe7uqNrPhKZLKH4b19jJqXUDZHUi5ehqRfMES34wj48hkZTrC6q2WWFAN45fQi9WQdrWyJDhuhfqAHrfp",
  "key34": "4u2onNVwU5u5eaxXtP9erGdgvkbv6sYaeRjrQPPGeFi4tyjUfFK6K3WmxgGZrkUdZmbKKnnyZiUAyEuJNX9gNLYW",
  "key35": "2A5o2urB1qWgPoAkMySx8NBxXb73jBJpQy6f1RcYWwjfpMFV9ihkBFKM2ixa5HipBGNXBjeW9i5DEeivCtZAHyoN",
  "key36": "BN6yuDtLmDwQhUqvKTHk9wKXLecBxtPzb3ZHKXjUiodSgsiVihsze98qoGLUAwtjJQU1Kqoc7B3FVvBr4QFehwe",
  "key37": "2KAuJrVcH6Uq19nrczeoLsfjidhohszcUMSx5H7vys4mui3mUi31FiU1YGmuuAywqD6q29Jk7BopErfdtGfGdBpe",
  "key38": "3FSkcNW2dYBnB4DJRq8n8R87Xp3jsbnZuG6jDGAeV3SwC6EJJp8YZ5ZhVPZTcdPWvZwDRwVSnPVqsorpoYj6g4gk",
  "key39": "62uy1qwB1FP5KwtRy1s4ZeTymqxaHFhSDWX56MpEfWGF5HNSaRuH4dD1gGqBAF9uKyDKeRTxJG5g1Ykye3UsGVip",
  "key40": "6553ZAFa7VQA6AgupK93xJi1FQbyqM2nxWm5e78Ar9NpZZZMTfWzRJUemaBVCGMveQhGZSquboC77FcQXpfAzvz5",
  "key41": "4V5nXwZ4nUWJNfYhFG7fE55yHegcUozzUEwvfuPR2PkrJPRntbskYxoZ3ZfxcYXTXKSTkCnwQyqeAm9e4buHs4XF",
  "key42": "3yXthH4HchosGGMTsyFCa96S2eNLtL1KYpvA9HXxK32eQww3J5NQJ3pdweW75TjqycX3MuJqNnMEhXhAdTDS4Lau",
  "key43": "5MaAxN9ADeHFWg5wxniyVv3eaTg2SbkTLM7Ga7LThhA58yj75w9FktNDzQ9ThaE713gKzXab2F7ahu7WKchexcAo",
  "key44": "5CLSFRzoMuAw2zWuYBiPZC1eCD6N8RwaaUCvQkCznCrZTPG6ref5paa4UHFm1ndsguHymCztStFv5tiN4JEBoK9d",
  "key45": "29gDyNd42Xxuh72RRw18TghdMynWRqBQ8KhsckUtXX7UQKQsXzRxPQiWVqkpCHiGTCzw25a3JKJn1tKuL6BtJUpe",
  "key46": "36z4wpMhJLzPR6pgT8PwJQqkowSHqL78uqwW4WwBNhf3ioDsutyzwEeFf7vu7kzk6qyPqtexxJ2hPpW6mDyivk9J",
  "key47": "4xUBRdzE7X6yLqu9wgVW3ejFbQe9cm29ZEVH5CbevexW2MnG37uAzBjWkA6aohaAmUJFbd4NFQi3FKdouR9dj59H"
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
