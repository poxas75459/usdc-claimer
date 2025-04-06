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
    "51Y4o7uccVKS4Gct4c5N8rZ4bAFWZzAobmQLMvJeoMyPtozSzknVpifrB1Nsbn7PsmD9VyWamAZ33ECtsijJnxyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Ti1ToSwdYEdQJ6Lr8JMQrWATadHhKEYLpzSEBhbnvagogpxisZnkQchKHGz3eYoNFKz3iBvCmToYDq1GoZ2A6Z",
  "key1": "38TGJrHWFssNp5YLoCBnTgyGdoJAwodok8Ce4jgxvospVhR8cCiqwCPHL7EpbPmxUXi72xgqSoHGhNKSJPQDk2G3",
  "key2": "51T9g7PQCZEwpox3E58AEjReKzSVgJjLMY9z27x4m9S65RrsDaQpYUNLksq4eu9TkHzTj9iykQ8d8GApbRqiniya",
  "key3": "k6UDKZf82pCfTmJ94vgkV9AzX4FkUPrbAjpaKT5Y46FsWpNBXMjTpJQMRxotCaTP2aTi3TWV7UjyQmRszaVeBvy",
  "key4": "5ZksQzg181xhaaWP9xgvoedGysYLv9MufcnEBA5o9tSN2XWUJeHdUnEHmmg4ZFMYdDWRuaYwamYxSKSnRDB98tY1",
  "key5": "3DoK84yfU4ph4bdEDFYdbrG4Ecq1oRt9DrJZbN7Aec4ukvkmtKdH3kbDGvL3E9NFkdZ3YYBvppdYFECesp8snb3x",
  "key6": "kfSYpFE3ypgJuQccZDSzMrr5JGrrDdRmdPFiL7uKErLLk9WwG1xexQAJCuyRKc9f9K4g5BgLTY26MShAVA5vgnH",
  "key7": "227QLUiqUTHWubG5E1cbaigyS6U1CVCPpJaLMDjD9y2nxVeSQN4YNDQtgDQwvtkTEf8i6GY2W5bTaagrvzijJLaf",
  "key8": "3xWG3SHGaQoEZ7uxdJ5oCDf4tX5EX4KF1AqN6MKw7JWKkvNzc43TyJGH5NUK78ua3CCLVCHPrMjz58YyVkiG5WKU",
  "key9": "5dRtk98B8FXPSn5njFRJXa1faPcGR7ZsFap7VApdg8Ky7YxZCFV13MWcJbNKvjpm4LkU7PsrmsAccAsmkhUKd6wy",
  "key10": "53bjnD3w2e5uKJf76f1qWhkYxipWvGwE6AFduo1wa8Siuzj1jo3b1Fsa8ghYR6m1Koq7EggRmtVBhDdWHr5edXUB",
  "key11": "R9ZUdD4Z33dskYNiyWDQrYK3KLriyKpUXT9jihxCLgGAXt4JUmCsHRnQ1jhqJatCvLQQJ39QrAWrVFYgqtfKdEA",
  "key12": "5LJJq8yMViJ4mGHjwtke5FVEQMqUtvQNnHdZNbGDBS4dDQdzn8XW64EoSgMHZjSL7fUyAiuLztN6eoActGr2HmFr",
  "key13": "5dKXDkBbySD69dza2G1DcwLPtz2kkDYVDJnZtKzsHP9akx6HzjodQ4uYG9vftFTLRiqPmzFVrAPdUePWGrDPBiRL",
  "key14": "3UzV71nSttAvK6C1GGnEVhmTb2zSdkm29bKN1GefwTyyQL2iaX3sfAvFuitZS25HNVxb2n3BmF6csbLP6q5PTmLK",
  "key15": "2gzf6hyhx3CR4s8xZ2sNimtudhagpWXjqPY83y6r9enRhrYvAriBHJyRSns9HvmbRkXLaqNz6Af1dZduzsGiiUXm",
  "key16": "5oJvBTd1LmrLWxD5g5b13ZY1cxyuUaRm1DH5TCxfQLLfaVihp3Gc5H3dHkpVyBpJPsGYSH5PMpYBWooo8iePvMk1",
  "key17": "5qJ1p4ZJ4Y5KQsFfsfFgPJkjydKZRE1GV7KN755BDkMucmDekLWJqydc1AJCS4iWpQrDsbabXrWcRxfFdL1dhfEr",
  "key18": "H7HczY2VxMDGtzu26A8bc32FrB8BZAmkyji8WE2qEFv1mCWGGLgkwNbwfgRABbRzRHExavsf6Uq9xFXjrC6wW8T",
  "key19": "hhH89J3eL8KdcJMYgaPAXJqfGf4rm2PfEsMZ7WUiBg2861SNi6yMjArLEPvtx3MkwUrBbf5XsSNWP8Gtn3sqimd",
  "key20": "4nTuDnhXAB9gficncen1W54UwxWdD8RB75EhYuHG4XfM3qsXMXTXpxvmYEQ5zuP8S8q8T2pi3eVmNjZcViuogdAN",
  "key21": "2LQPqGg5wKkYAwXFTD4SR3UAJHPEWLFtayR3uqdZeRZ6TMSB4E4cirbKnThd95bLS2RBJ1g3g5w6GS6rjjTzVvJz",
  "key22": "2AsdYduqj9DTRqv8uS98DJP6Ye36qP41iE5jKiBT192v8RL4qg1gK3NgheYtjXu2s2DFv5kUF7CtmuLVJ7g32vjK",
  "key23": "9HkBWDrZrbpEsayng6fRLXMRS6yNbDFthxeW8krfJR9cBs9i4uQ3x8Ma5ZbBtwS2hbJgMmtokCNxMvewpBnfXsD",
  "key24": "2bq6tgpV34ciqaPrXMEBKgcDWXXGUJgceYo3v6KinbPBhp7cLawtH8F7AAenm1kMxyrRY3DC6fNAjiox6VpbKJRH",
  "key25": "5f1QnLSg1SrabmapNtTYTrPAHrWE36CmDtWLHNt4oaNzs6oJQPFrBP9T64VavJQPUVVsUa29pBETXRjBEPnPXRX6",
  "key26": "keHzLSeBggwtPE1ZSfXSefNrSngLWiDr9eYtZaJpb91ePouPftC1vfpYiaGRJjmMsNVJykdnwgrXP15u76oSePQ",
  "key27": "22Npt7HGZ8BGcrz7fVqbeu5UZhp842V6DeKpAQNTaUJkwaNLEQAMYvHqCtNtVi3VrxtBKcm3miT7FzJqzRCeEscH",
  "key28": "4HEJcWyNA9jxARcFX4489Tfcevy5DYtnnHTDA46GVmwAo72QNaFbLbaYmCuRRJ8CfL7VbSWopCXaGPxkqFGnozYF",
  "key29": "5V4MWCfq6H6YekqgWdSXJCNjqosWptZc4YXF2pbLEipopTTqZ6jBWey2oQnv3Rkir2c1fhyznARTgP4iY382pzch",
  "key30": "5vYNWBGyXHZgSTDJgvNVNNudzHYxKCnNUcCGcbjHQsRvZhS8Ygs7tr2BVEtz6E7N4NrAqLHeYSHNsiP8v4FVpJfu",
  "key31": "2Qc6gwQzFpsewb9yUPH2Hn89G3G3JErAYqVm7WmmFHTd575iboKyBNwXqMmLmMLnfbFfScQTDhLUyDLLHnUEsRbk",
  "key32": "bZ6sLFP68DPsV7SS32LZzi4zHV7ZgKmSrfVDRTgFviCHzVjHa4VDxwf73JDdXVNTFqUomyiaiZX2KbuxiNDgx9E",
  "key33": "4sRSoVas4Md8ve74B3sDzXzERxj5ELsYX3uXXwsteakgg5Z4iJ6ARPxLjs7wwMUKBqkLy1qpmeMYJ8xoA1vofCz7",
  "key34": "CLVqb1Qm4h3ZVqxqW13xfuu1zupUDHgfZH4wyaTZv4R1i943YYMM2XnkJeF2kTB3aEUjAm6iicPQXH7KyDReJty",
  "key35": "2kmfHq6PAPprTKd81yTeNR2TSnNWfxKYQHemeTBR9wZE98x5ELsBrEkjUWZb4xm5e6T481JctyNGQiWUzVXhKKZr",
  "key36": "5hevXFuNWHQSXUMUTvvJo2FRqvKwBADPc7ddcGYhFVPCUvs9UmoqgfD79VTpsaubuTUJcFSkVkz5RPF6XhEcwWco",
  "key37": "4ZZ7oCbFPc1XTYyJFCyN1h2SvxyMgwE1CYCWZztwhAYBbYQCAEKmNcJ6AqX1MhaJuPfxS9j9qzCVjqceDQA99wMe",
  "key38": "4N3ZeD4H2ik98fQZsx8Va4LifnFkWyfn6y5bu2xrssy5ea8E29wM2HVhLaUY9Lq52iWob7H175PB85HU4VHrGkCR",
  "key39": "4xKfPZY3Q82R7xrjc9H4gJxuM6tficGzqzYnJCgX5pxnokJLwrZbETE9PgiZqyYsf3dzf3tbHWRuWs4r21y5UV8x",
  "key40": "4ohQcBNhKLM1XX1WfgzBryrM1AnsjN2r6QysZRRNRzYkBTgnUmAgmYDVEUXUd3SMnpgriCPonKwGbNSMfirTE71F",
  "key41": "Mm3h8sdHzQQA2NWsChwGmqriEppTqm6NJAKekhQafRX7w8DgJVJaG41HToz6YvH5haa5RBcfLrgAft8GRERT9Pe",
  "key42": "56DaAEVzUp1PzqUnvwDoNmhQ7phekte7Udfgko2rkY4BdbZusU4FXCAKWmfacEBs6gqf61XhPpcrRFMtLCqQ8jwQ",
  "key43": "WR2pG6RHVVN33FC77E3gecfmZFKRgw3R6AgMcpTJxfnAUMypvX85TA5wLvzNT6QHguy2CYs9b62PvepjUzcw98G",
  "key44": "2Dvo898UgaTQfxc5wwVsdPGR2Pe1Um51X6aJAcQRfFP6NhzFbgygR9ZwMabUy6b4YF8UY7zAAtFwZJ2aGG53XRJD",
  "key45": "2YPwGJVaJD7pND4cDoV22zR3vjTVBr1g2fGZac1RB5PCx4vckCQ4vGzgN1UM9pKukbUWhkT2PT1pW7GouuqfXeRS"
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
