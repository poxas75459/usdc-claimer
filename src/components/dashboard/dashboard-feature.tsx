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
    "3MrgTrjWfnTSzER4qVHCyD8GkTi74txKCp9GFP7fsgvZb4wD4vvUJJ4oR27G7gQguddE19Ete7qiRYh1N3g1Dhxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAu279imGv8GFxfREpbvYG9T6PLBGTNouwqkztHGJVRNGFaGkA4uCW55SnxtMhEcfLBuVjaCNJprJqiKZrLV4pK",
  "key1": "22jUCvBSAsVmd9bFCZtobKma17zhiFYp2WHV8U2Fy9tqQD9myTVbzs25SHwSjRRyzDdmsEQbc7GqqNpy1eHGyps7",
  "key2": "4WHCVbw4ZU1qwTzWzAZ1uPRFYg9tEDu31785Rzk39Z7UQgNwSkFZcZp5W3E2wjP4c1qZ6SrPArvARz1y2EULM36H",
  "key3": "4dkxPsAY5idAx43ccyBBsuHGeJnMDhbGwL5Ae4Bz4RdCbeMqME2MBPLvsSHzW61yrG8D92pPUS9yxXVsLVBc2mZ2",
  "key4": "CToantPcKFg6Av79sHgU3BDkPQEUDR4CmENFm9Uh2xrb4fojSgyL6ACeFNmvQJLFwXN6Yxs8t6ib7SYWwk2djuw",
  "key5": "22hZMJK68i2jMgWiLsdxvV8P4kwFBcN2Qm85UeqSNXaN928wBa1xtmikofxXSrpgztm3cyc9aAVKXZ4na85X3NSR",
  "key6": "5eiWnRAkbVnZ6GRGXB1J6qaDwGDhUytngcPA8ANbbX32L1djj5r8yk5VUYHZXa8a9vmf5gtkbafG25ybZK31TrKM",
  "key7": "5DXAJB3j1DyLeo8DipHrvMYYc3gCc22MZBKRfpvSGVZGdfTD8W8ZdjnxtsxkFEv5fot1FcVq4ingmvWLCNec8y2a",
  "key8": "5moD3eQGajkupqQuGURNNsKJEZvsyqGC6DQ5VPTZJoEQeuFrNK5sp2YAxBRgiMgM4kPd8bz2hzPkV5wYiiWSkVNg",
  "key9": "5eUWJhwabAsazztUaZP8wuC7kZ6WzBhcC3SKmifSZwGk5sWtbg1KD47RbwZ9asvovwGWwzWtUL9WTYjs5nRozjk6",
  "key10": "5eNzVSekdy6b5WbzsxbpPSqm7fqx5XcZCaeD8rPzRpzKcmCMks4PofZHmJwboMJ3kieo4u1QkBbdjCd1eMUAt63v",
  "key11": "4vBYMKh8fK5rM7FuiWrnzqTo3yEXqLxbwgQeVKWKLjbsjHuz5Zr2LUbTKqr7PdnpsH6KcHiZy9Uec7NATc2EgZ6g",
  "key12": "3ut9CWYr9mZ5Xy1JmMPiLwkwcpwynFUttJrFcwKuqyWVrXmhKNJB7MPBnnHDQqmPiRJduxyJA11kQbMQ5P7m5sYm",
  "key13": "23wxEL7Wo9jbs3rm5RYGFeqJ55HgtK98BEH6aUzUowvRVKmZtzqSpv6m2HWHAo1ZBktCYEoTCFta355jPUCcQ9Z7",
  "key14": "3ZgTFhN5NoPpms8Bt36jF3bGMsYGdVnxwo5ej8TKUn5z1GYa3U74E79GSuRhvc8fqqhG1yTyJ32CRoqCfbAS3uBA",
  "key15": "4BTFE8Aup7AhVkQ8EViz25Yw3Ey4XWmq1VDtquW4VVdD7ah18LSnmEGk9nBJFv16noAfidvXeCu7Spx4YSKEwcmf",
  "key16": "5P2yXm8LXdh7JzRJqZ7TJp3gduF84ogAdhw4u9cn9DynwSZQvhe7VR3dtYb2E9gZD2yJ4TCbsUHgkXXz9y4mxh1p",
  "key17": "2o4JqTsUbsRnoskiwEEi7hGa29Fn9Pn4AN5wVFvqSFmxTmvigyYfhrRGu1M9UtuqbhzGUxA2H8dd4B8FAwUjX3rC",
  "key18": "64EYsDzd2YDfFQQpaZAVLaZ6iEf9sPDmaqdbjXS8hbuNnBkkn41uLqsndAjkwqYq1sYpUYLvyEeyhE9ArnUqF6Go",
  "key19": "2XgE5LT9ziyaFA3T79EmeV28MBR1izeMDf9xbVVPNeCvEyfgjxxBTYkeM7WMMSrPxEDBU2SFr3bJATrYR9w3U6Mk",
  "key20": "fd4V6hsWveooDgqk8rDtSZ3Uy7CzFg7MCA9j9D3gncRqktBBinJ833NWMesh8fNE7K3LUuyJsN8zTHqGt7U34dr",
  "key21": "7JGw9Jcb2vAtBuwR2aHGmJ2d7kpLd3dHpvYeNNffVxRsEpmkH7tBAHv9NCUtaDCngg87nZGJBGd7dntfuTcvhDt",
  "key22": "4rxZ6mcpicPQrxhZUqGrFrGbgjSK3nXV5ArMABUiRDPydL86ti7q2io3qkgUor2kgxfhcSdmRjuPCdZ4G2wbMVCE",
  "key23": "5PMCesyZ3zidvGGPKe9isohcACgV8Yx1yrXRPxYwuUj2newFR7V9JLQH5vCMNfWQz2HrVPGrhx5uTgA4B7ubMdbb",
  "key24": "2vf9GfPFejY5d7cD6F1etke3VD2RK6L1EYUXdAu67KH3MMRNWe1RqfzFwycjSkCFZLsr6XGVGgzxBKct4fhW8ARk",
  "key25": "5662PbofaMjiiX1xqWVEU2S9NxbXfL97MPeiBVY6KscDDAJbGXHTKPWEPGh8E5G7yhib5KDrYLTQ6spsWEjwKQFH",
  "key26": "6z3QQPmtvTDAfJrP36SFGk2Zmd1qeqjDMBPbTVi3fUsTgnjv9dyXrAeDfY4NDtyNperqQkNXRkDFYbtaQmg3xih",
  "key27": "xLR92JkAcowZxv5Zi4uDbPAu48kaEv35XMsEBa6HJKFrGuSw7Vspyh1ketXiNxRnrWoUi8HJWzRRkBMTJUXaE9m",
  "key28": "46WrEoxx2d8SRqmCMvuEs5y5feFdPxUUYaSYJZzER6qAb2CvdTZXeF5LDrjDP8LxiwkDjzcJ1ckYiMawDbJpZtet",
  "key29": "3XfZiNPWW7K8CApQoGxFh282KBJMBPGUXSz31KDN6xshWKXUDEcY9avQxtFdWdRLXRKTMiYs3UNiR2TN24TZeWNK",
  "key30": "4LsQLx2QcqPBgHqzPz9HHHinaSVAuPqroWnMyfcH8xK6Q7MjkJtnuF85D6tNSnsAV5D4A3fFGANrwfxCmpRr6QFt",
  "key31": "5pHwBi4zRcrVYAKGF7WKq4quepRZECZfXurkpA4zSBTS84WGqUFK5fS632PBX8BW6n3UnAVQGPucNpbHFrXiTHAU",
  "key32": "J3FrCppNaVAYiFkmzrMHXKRPcZzXDzQ5e8uuLy893QA9BHtgMtvMm4b9Rsj7xkkUWhYkM8BuZFwqYBKNL1gWfeb",
  "key33": "5v7SuAZVsMRCERg9gxFaYdgmAYsX3wUEzZH1doo3EPMixdEBZmoY1M6gXmdG1QnjVE555cCXfrnT56omxqSHB3tW",
  "key34": "2wURFAxReKZW1WhfccCQSCGivc916b4JENeV8juwtHmPE567h7T4rimFJWJnYemPrhjvTDym8CFeSKXMfW9CEQdP",
  "key35": "3NHhoJDf41fBDXayFMiWSGdVCnra5AmzVQaV32PdtDFj88XjNSXkKoMGaD33KsgEHpZE57m6wRERsas6jjGk5qnt",
  "key36": "2uygmH4MnvWkPJH3zvwp58MVnHvimojrPU1vLrvimrfXMZAmE89F7axCTDmTwStwmtfXW3wonEDUrpdUEzKxiWvK",
  "key37": "k2XPJqsqCdtb9tvwwdH13LZxEF8QaeRqhc2sXZ1i12zqY5vgZe5ZWSNXV3Ya7vwsssMMBqu1v9xVm11fqrqBych",
  "key38": "4PvS2wZf4DS3V1t3UoSYxZ1WFVyByP2wCXoVGNoH4UnCjEyaNvzghJRQuRDbQsE6MrgRMWkiBmZUAhpQAA4wuvjK",
  "key39": "38AHGvR7sbCkC2ruRSjjJj9qUTeo2ExoVCMGncpb1LkjQVSionS3MpgLVfVehnNMvUKdmyAnrKYgc1CPjYbfuQBi"
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
