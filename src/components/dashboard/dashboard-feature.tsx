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
    "4NdfBfofjjS3EiZGF8d1q8hFEVBbymnyC6nwTHMbwCxNbo3pQK4UEyCLieaNH8aF5Mez6b4kVzeNsnPLEJjUs6Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBD5PD6uFo9Gy3V3k2XJhzJYyp65xbAKtoJXX9UwYGFKiqheKRs99qTqr7EFcpKsPLXciWgEaKBSDMHadBw5FQA",
  "key1": "PacNC23vArSifPF7oeyWxxThGdDS4TmaZJhqdL8rB2Wgt2bbrkYpmF2kyxA9QaxpbQmc2DAqwqY6fF9KmuqrTYJ",
  "key2": "y2AQDhwmTDv7dHfcVD8pnWxE5sY496mwvALGjE8mpr9MnCkH6WFojEJW5BQbAWri2KTT5cNvKwmm3WE4CLMeRUx",
  "key3": "5hD2RcEvJhwVzPgzfeJwjynNuwdDadcaKFe3mEraZG3c4L325gUVvyY4zApAogPwdYvm7BTGfuQZpTdjzqqpPQ1u",
  "key4": "2HKrmFodsd7pAzpMEHWaKsgQ4MTohWZ5n3Xnd5KpFN2PM93bAayotY6zmh1LFHeXix5jJU2cTZKXk342rEVSF5bq",
  "key5": "3C5HpEzT2GyJg8XeHoHrXnyxmg4f4NoAid8uxcJjadpbbuGyhpA54pEfFc9fQbxFLGWX3sqmm9KsH5eQ8AqhWSha",
  "key6": "2PPaQN3aqFdJdF5n7gMYBzhGiwJwmwFFyAS3CNWiCRWQGvmw5bZqVN8WAUiMEEURrTNR2LySouhf9MZ9zTsRFKDN",
  "key7": "24YdB45jZtXdDER89VpmBvFMfEi1CRz5oAh35cKhhmR17gaed8gUH7pJUqCkuQHC8Th87eMTsvjNSKwmnDSgfDxd",
  "key8": "3AS9azvpqk4SbywSpxcBHXhNfCeWdLLVJLUQWFNTVKLr3E59WHH3KV2Sx6kz4Araj1Wt1t5TJtywRXT4CBv6WFX4",
  "key9": "5kizyLi4Bko8YiAhLNkJe1vZyxBWNmPKh9o9b5zQF5AmNp9cVDUux9zqpZMdxRFWaD1KfKZ1mRycNn5fUm4r4MZV",
  "key10": "5WHmGZKuSVgn4RG4E2MnywNGGWfdMPsw43zCBi2N82JhPbofxV9vc2k7eod2z44grBryQbNbVWRuLWvR2XFjr63D",
  "key11": "TqnSwNwFXoNcu4dtS8VarKHhLRNQLEg7JDNdR2PzkePy9C9rK7kwKx4DmavS6DRnHCqu9k17zCL3ZQcFtSGF1z5",
  "key12": "5Gbsrw1rsfSepcSZcCnjjyAQHcFkEUGC6UncxT5qhVejmrtB4SZTnkaGDw4wZ6b4FWEGbhxLsWwu6fRHPu88yBGA",
  "key13": "4Y5xTy3W2wbdgffcaHowD6fV3PWCdBxsYieDew2QTKhXTvaF3vAkyzkEnMbUYVNHHuJf1R6pCfqN766eXqypXG4X",
  "key14": "4N2wE6cY6ubew8CQbyMkVjnPLHJ6QioW8kZVArRZHXSaeCLS3XBnNS2MdbKoTLu5F4yHrfzNkakBdrhnjAReptjt",
  "key15": "61QniiuayKwCGPhhqWpAVQuK9QnoLEzj7pysVqwncwJm9954igLhyKX15c4tT2AvF5E7gFyAZEvzmoR5zCPesyBd",
  "key16": "2LQBavRc4PL52z89afx8qY26V3KQ7bBSwSAuGNJuBTZjV51NAu6Ng2dEe3GfwFy4mNgcoRmM7MuWAMM1HFJSgZcE",
  "key17": "w8gUnsbD5j4jLzF3QERG7qEN8Hz4nPakP1nobDL9EfAY8wFqZ3HJbnAtUkKKKxV78m3dvP2zWZKzWyrdf2RZpmu",
  "key18": "2b5zbBehNBBxu2gE9Yb5zYxsQd8mtPu7gztXZKVaU9vNZayKuLwWfHgS7KheTaQ9vPvhJM2k5Fz5Az6LXaUYRvqE",
  "key19": "LxzHK5gwPZSwjjvg6Vap9ESQ52xxBuGcNF96DjvrVorJrd5jkFHiJP34xkMwn6Wf2FmKMzSawRoBf9n7bSLynhT",
  "key20": "3XSWz6Wvzys5PmckHktpWrVrJAXHuoDiDf4R4VZ6PSpSkR65SKH7CaPpGM8hdWcS6DWz6zUvYyq9KZ9bxFmgvAB3",
  "key21": "2pcXYMJ3GcDpxHLV5GAJ5bG6iuycRAX8D67c6p6mNtBH9UopWupXD8zQ6hKCi812rGNPCGG5XAkDZTg63zeVzQ3e",
  "key22": "5V3tcqP73xr9v5nu7HmRFdkLNXXdjHqdX72zEramKivPsS4NtXDsFTsiAGR1fGAQyVpk6UqdnD3b5F7P1ejmij2V",
  "key23": "ygiVwjzq8C6YEVCRU9oeY1FW3t8hX8PUUY4ZKNmETrLV4kNWyfrcmXiEnh4zRUjPY7HwtzncjHUDLfd5sQTZpcP",
  "key24": "4JQbbXYqSoeHXuXZ1tWeVpieQ1qrHcMf9svbdpqL6GvTgoHAfw8CARJhiHUExmtqBsZ6sQsTvAn3uAyPFnR6q4Ti",
  "key25": "EzZJYZ6ANk1MJY3MmsRQaKEMcG6XPEfXADtHu12FkVz7QMuh3bZfBaaHvThfHS6kfG1ydNfBt3XdLnda2bTczXW",
  "key26": "2WXP4xxHH129mBXAKvy28M1xkaZvXVQ7s5PEAuZu68NURhRwXzzbuov4MmV4MwMEL2LdxZ7u9n2WXAWjT47JXn4K",
  "key27": "45UgzdN45ZnWDJvHrKa6sV1PVUsm2EbzA4yppADQ2W3fEq4XATFeNKoc4PyEjN1hChMRyZfBDLBQye66m9EnENVi",
  "key28": "5rEUKWjTD7DUWHtexmsJrgoX58Wy4pYo7xziLVSJ24XY1kMigFdxCsW9Na4GKarYjQSiLDeNy3XAJCnmHzPRa1eg",
  "key29": "2imrmVu7uJNKSCjBRnuCSQcauFcGzRjwqi8qbMzTByfecabZa6tBJrBmKnEA1Qf7giet74kc9t4hHHej6RhsmqXo",
  "key30": "45E8iSN1KWKd4jPDwThWQZ7Lprk21dmJGiaXUXinxXi4CNgUqoyLspLrGJVm8fZozZnugPApA5pMsLcpMpZ1JACB",
  "key31": "zefmKdtUttLGpp5b9WAXosWWGDeFEAL6jaUeTsFs1F6JxbpzMi4cqB482Wwv1oXTT77z13tjdK6yDVr55cqBGRi",
  "key32": "4WUBXwPhypanyFDtdAHgLk9ytDRsJirUXsmQhJUNKS1sxk2rjAcCBBaqtPnyQyeqfUQpoNE6T4v3L2xD4kQ1je9",
  "key33": "4PERXgLpKjG6KyPExgQgtyAHaGfhpHnQfGx5mMEHGbNVbQwwgDrJc3ikzuo9KjMdzoCWq97m65LpLmXgacy2WRsy",
  "key34": "5TMM69siGnBgK6KT5RchjNTUFrW3nDUGczZHkHenTiRJyzFvSHkn9BMdsd12p2BE8W4XboWy4Zt81JJb4axZxkVN",
  "key35": "YeTF4wkLo6DzgshyAVPANSSxdzX9EZ7UM86EmPwE9nJAvutwbhoBtyn9hpqYMsrN41KwXPZZADTo2XF5cYR59BM",
  "key36": "2Us1Ti8aFDCH4tP4VLYpE6KkhpqSjSvn6EVfJsVwEKNmjroeJhcg2QpZGHdsDHdHe2BHZ3U6SPCCCmDjMtWDoxXp",
  "key37": "4QbB9Xe4W794Tv13tt1SFC3YYCNTxdBaNKnkk5GjV9UazXm4FNogoPJDGrJuJpqobhJHPCLMTJd7UjiwWg1UpAPb",
  "key38": "53tRbpyEpJL6exnbSYXS6W6QoiPpW3rwbemVxnahqxD6eg4su5MWfbVeBsGD11a7AWXS8i1Tv8eWMAVXF1N699ge",
  "key39": "2fEVmJq3j87dsKr3p1moWQW2gbxktfcdLJ7WYuXFZLJmSpvmhRW3iQvDqobR3VvoaN6ZKjj4kiXxDAnJWjuuHUhJ",
  "key40": "5V1xhjs3bM1NDPwBqTLC18V2hPirGt3FMCLddzEGVMXxCEgrJZ4V27TzkoRHYVeU73GFWM3eVGKPgSaDZZAYRwGF",
  "key41": "iVYqqgW3S9HDsTdpoBeaGhaG1Eq5d2yuFfw1m1tWaDC4HFaneSUTA2izWEUCRPvopnpp4jCHar5WKSz6Zds3USY",
  "key42": "3ucG5BgeZfdJviDp26bk5bToh257bzheagmEKjHVch6qhZ6zs49pC7WsmvGzo9Toz81ZHEJm3YFWBGVeMTBSohLD",
  "key43": "4iK1U8EkTXdNaH7vNApqZ9zZmzVoD3Vcz4BesCfjVYsRRygVmNMTvuwHy6is278J4ME8bzAZNuVJFBC8GvEKopYC"
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
