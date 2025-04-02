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
    "3pYPMzpExfoLFcr1gvUotvqzXJaGtJhHbgF7sMGTLg16kYQbyBga54SRv8mE8N7YHgtbac7k9nEVFxkgcYwdZWok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHfvtXUXWVY92TGJ4QCW3A6W4ErgW6q2zB2AxcKpddNCCz7eBF8mtVoEXN72CZtoCEahPfaXg4hJL4n2doTvU5F",
  "key1": "45e2KxS7JSG45PMMdXuKBYiZzMwhqREJsovhHJ4K4Q728adeLJtiFLLzLWsor7oqu1zdXiXuG7BoJoQhkXXYkPX8",
  "key2": "4FNDfHxS67LVFKeGerZm7VRU2c77QvxpH7fTxJaBuH9tVh1fFQL2uCNsNUpDHGyFHFK1K3BWktZd1Wez3SX41Qqd",
  "key3": "52v7vAxdRow9Y2ddCRsnJrNMb9wNsYcMuXMkqiLktj5yBR6X9pGHhn6eEmBzhfkYeVUcgPBaJoy5v3Q7EES8gr3e",
  "key4": "dRtuHLZbHTx5TkjdmcDH2cPXRmLKap2z8uL9Vi1DR9sdneAyuTurCz4Nnu8VXswCqS7QS37zCe9bhLLDGn8E8rp",
  "key5": "4Trmomq97xjPw35mMHsiy1QiEbidXwSVtXckx6mvTWfXNqkvvFnAqmGSH87yH1Fig5ADyEEF9cMz4CtbXKAAmcnL",
  "key6": "LpRSMYYB1MgxCpVMbrsyYSK3a8eVaoKPinSTNni6sBPi82Ev5Md3XM1YETzJMox3AUrEXtEXrzNP7KiGm1md8zM",
  "key7": "YSqafhJxEMCDjCEHioGbBmwxbeCVsKPYNHKDE1JjeujQ61HcSQpyizbobzRFCtUWRWHx2QLo2KDW4fsz9kjKYqE",
  "key8": "2MDPn9fZy8ynXXLw5NSadmrMtF3G7VqoeDViZcGAFJZPCwrQdVKALYwXjZw6Mz5w9FjGRGnvcjt2Zf6BcEoJ5Q9y",
  "key9": "3Yrn7mz3TbbNTpkdwqfRPVyehfLmgmkpE9WK7fm4VWdHF89Q5ATXjA3ba7rhcnmQv46mHbYXpg6Jj59MhsLRkMmf",
  "key10": "25v3FwkkKEKfhVdDUZDDBsr1pBgjKYpr2AS8NNHCirRioUHcnJpwBa1hPjpxwhm7A1eRJ1Sran39DcN5tz38YDBR",
  "key11": "5pqUUGCFLwga2kYEgrjNoAHPZJn5M97jvbji8rvzbxdKFFWXYkGyLmF1LWBHxQt3pchPPiq8stDvnpD8XJae1q99",
  "key12": "36w7JdgNyqBwSyW7FgsvZAwWxEkuH6VpU5zP5aZ7h2UecJrybd1L6ehHp7A6QP28su3HJ3gpur8Thrh1zwF6U1Sp",
  "key13": "3Ayo6pLSfmcqrdutcPMVWd7HEckQvb5g9wUsoKkzpR1z9e4bid2Fp9AP1b5L8ty1gK2q51zH6UjFfBq4J2iajYLY",
  "key14": "3t5RRFZ5iMCHJMoxeftSDaS3YX3fjM4TYms99jooowbEX1fYYuUi63nQSyR7ie7yVKNgKiLKG9CcKq9wA9JH2Yzd",
  "key15": "5j6gEmDaBmBcDd1NqEkN2bA7vuvRJGyGP38YiVQRG5SfkzdGM4VuRRL3xCS8bSkNTiHtqnPHLTVNFWJaWY3yHBMJ",
  "key16": "43fK2Fq5YENtsTdH4mz6vXNQgfmH2AA746cy8rVP9whhUAYugmk5YzbRTVJEmCAiXa9iXBcRoA58qUe1tAoWwqtB",
  "key17": "5w3xD2GGzdJcrvEekbUVrkXZeqiMyQEztKu63VY1nFbMizdEtjhsdjt9zHLLXkDgsT4t4pAeh3QXjuYecG4YTgAj",
  "key18": "5gHcypX2ngw12UVvQ66DFgJww6oucUouaVQLavkev8GGjBXLV94axup4ss2QNdAbPhQagRkoBC1RwvPECrBZY9GJ",
  "key19": "BcJU7zTii27u6qURvYxCY3qPstCDWwJmq36QdkqGuAGsurvATLYPiy7pLyW2KEtDy8dn6FegVBQHEq747reua3E",
  "key20": "Yv5aDuH1UAsHbxxrMcMk4TE9CUnXKwxVQDr4hg9kuxNa6WpEAqh75wQ3t93GTHGUzBtqvRkF97g9znzyV21RH8d",
  "key21": "pjumvH8zz9LqdsoU6CLR4qPAhiXPQXoAkJk1uWWBJ7yJ3f8osrs6GYfNR4EJFYVv8nTGM4ZYCPHgwURg5ZBDUMR",
  "key22": "rTuodQ1WNsD2ztRxGPXTPYUadcvMLqjLSRM4wGqiKp4Zwte6wvK5NZHHoGyTA6Ddcx2CHhg15BaVpKF2bQfH8pT",
  "key23": "PLw5odxpZ53wsGkEwcoH5ybuoi9njkUwh1SzwB1359wRK5Npj9CD5xvEyWw7oSa7yeAcnVTb957yDdCCr7W9jSt",
  "key24": "3cL7TNHn3zGE5QCKGg99aykWukQUELagQBCbjiwKyErRCkWa83UCExxxq4XrajftGakFJkUBBWdKLzcMbD5gRNGD",
  "key25": "25YTULZfwg9T5h5TCL9Va9RSGE5tgvS1Bm42oZzb6exzGwdGAStp2f1TtcyoaieYZmG1B3QAFJ7igY4vfT6Bwnfx",
  "key26": "4zL53ZB8Mpjdp7bYb4JrvcQULvuPbd8svfVxHfye3AMqzkzZ9iZbtE6XKPXmvZRTq8d85hMAEtK2QHrEMrUnC4n9",
  "key27": "DmSUXeQcN6mDHjN7yEXfFUNFNntQjwaEtUMxyXDYSuLCQKrBbRJgGYrQrPRE89jtu3FdEwFLLm4eEk9aYmtp4x3",
  "key28": "4zvDmtUygRs2UJ3yY4v1R43AgHsFurhpVBMn9URNNQWeqbpYNoaZqH5rsnSjWAtV4M4jRcox82cADrrz66HKdsid",
  "key29": "4Ut6dkmULVoVk4SCyEXe4d3gNSc7z49moiMgrmaSSmgjNbec8hzTAdNZsp2MdSQyNMuyUDuvRDudzfMaddV5Kfgi",
  "key30": "4ffPhGGb3MgniYzhY5icP9ky7AL8PRKwmDFy6NbiUdSzDFNmni3sd4BDpxrC7DLXY6D9evPPctdcAPniPdTiRgBy",
  "key31": "4dwsaDdbmhUPFxATDyY4bR56o5GbJZfUfAbJZFprkTJG5u94tHndnFDi4MrJ4ZM6SVGVtFsJn3DLGy4VCGvir6KT",
  "key32": "54j4bMdt9ugvdKz7Zkfb27KYCkBVRpxc4d3N9r6uttiT91UsHA61X4pziCv2t3gBzDfPD6ZgSmd5CVLEuGYfLFGq",
  "key33": "3myfYoSxVQotHtYeRf4Afo7NGXARNfpiudzEWaSiGPwTqBTYyHNjy4BxWh5vrvWksDJVW6ww3XW5iD68YMcacTQA",
  "key34": "2r6W4aoKrRbNy9A8X1EjybCt66PRw7j5Y4P2GEHRsjuGPkZXDz1WrwPtS98Pvs3rpkcuLeAg4KoQXnfHfZRzApj1",
  "key35": "qJnZaoowMrpymovwoRishvqGmUnPkr35UatyGo9YHsXg7SYEvdqprFmRckkMDMrzLYkM929oAwstFAzjHhQ7WEq",
  "key36": "DSCi9MWwCyNXvMaRdz14w1urJo3G8z3rLPb6YGqtEbburTqTe2sanVAejSjxohRizhKPPiAWwwkUqkDNjkYYLXU",
  "key37": "4BhDdFk9wRmi4KLghcuPeN1idqB4qZUH4kRiA43WZtAvYnEMV3dHrepGXF7yFNXjWW679MfiVi82jAXdbsjXpY4P",
  "key38": "4DsfpRnVbd6iJxE3wFrwtx1tfxYHvKUR4JrCq7oUmeTRV824GiFLL7YHRJkFn8ZY7HV2vbhJz8cPFAKWHby9Kfab",
  "key39": "2F4zugSvgKSNmvrbpXPgkv929x5RX4Xn5x4kxGTGQqr9uTs3xNmw31LrvPVSYWSo2RkiUfoQAGprKfr31zb7vxcG",
  "key40": "4RgPPBCdPEfkqysCb8E7659DcZ49YU2geNdS4zu1UMuT4k9R4KcmdctuZkEBL978RJt9BbDLXY2as5SPUVWcRyoJ",
  "key41": "4GKqc45xLntciSyRKEubvYmfcCrT7maUHtZoZi9S9abZdLeJrqTBguJeWeCth1G4WZ1XGcUdiQ91RHG27P15zA1X",
  "key42": "3nTFLeoRvTDvkEkAKthw7Lxpt52dRZDhFCiy4M79DoMZH37XSUeBwJh8Ag9RXVwihfDmsPo1qMpeSpGRHnxndwNW",
  "key43": "iEq4TcLQDM2r2nHibaEAWf5Su6Qb9z5hEZXQinwz3LpLtD7hQd8n3GziiGbQGobEcKvJ4hzkKdXUgKnGGCLR2x1",
  "key44": "3pNYh966WqRgxNpcfy9P2eCtH5dxHSntKV8gpcTa4KfeJyF3P1hs5NxEfoo7ifYDTDKTuNRvkzpWvtJqpfMovAV7"
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
