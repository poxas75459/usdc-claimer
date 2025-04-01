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
    "iLHTEVpQwDogQYY9P2MEhCMJevw7d49iqCF7rLw99ZWHpyWDN84f5JoXnuKixBv9LYBfgdru8TPMkYQR5nmyjbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjugPyRbfVUGJfvMSC57B5Z6KZp6gfVmFWyuSL6rCFUKVQzvzh2piri2hN9L9GCcSevEHFvP9EeGPpCGnLqfaGn",
  "key1": "42qzVoHysB6FsYfJHsZSN7pmNdCu9XeNXAPwC9vVE1LD1guau3bDuDER255xeYPnS6pV43GEVhcgv6Xq1HnkRdgE",
  "key2": "4XPATii2ehMyDJ5CfqC94cFdFNQByx1Bu5YsphF7ND2tomsj3ah8EjnTgGBPQw9qNCb6EA9H79ej3dSzitFJWrw5",
  "key3": "aQvZQL1s4YhkPQgYHFKc1Ab9hU9wQvFUKaoiWrDLfDbb1Hi3TGAk5kf8jxv76EitT7i3uuUX9MfD5FuaSPyCBAo",
  "key4": "hdFYa9Hd1qD5VUjKwRqrwPWqj7cRnreK8F8MsEzSZAC354ffQRvr25tCbvuWQeEF9t5mpxPsavcuo6yHLDECKyh",
  "key5": "3LYx2Upug1X5PfuwbvyCyi9yR8Pdz8iLazVdCXBXSFW5UTy1pZJ5U8wnLS2WHYe5W3NKYyPuUwRUahVDcQFDxm1G",
  "key6": "4U3jAT3Fp1soDydviTQZiDmHTt2H1d5gprgus7NAWeRuQZm4K5GEz5nkqeMdcqwy3dCPpm1RhLjarufWHDTorAGa",
  "key7": "kND74gDricnhohsiAiHnVYMgedAUA5T1kkgCSCYnSxeUw11S5tdUEQQWBpe5tRjF48qMeMRSqRAoQAXJ4pxHw8h",
  "key8": "3vtDs2tfJ3vf3BwZVb14uUjP8n5cSAcYvLqxcP8GDjpkSXjNWqrhhEBrx8kr3HBjD7DBd6CAbi3L3xnZnz3888dX",
  "key9": "61Mi9fMkwt7FdPMCgpKpfsadkaedvA5BEHDEJgWhV1nGRTfKrA6S8npjEfCTUD6UkKFA7CN85fdakquvFWyEW3qq",
  "key10": "2n4mcbhYdQbt4jUgVJrVP6upEnfbGZtCwidTBrpXQC4naKfe5R7FgDvNiPk14PYMu2U986BE1TaE8abaAvVSs9QH",
  "key11": "2Pk7eW3pEX2KiwFnBSEudyGefNGvDDWB55WyG5Hd4mctLExmLFg8zAhiYP262CbXBADND2so836XcptafVE3KHVQ",
  "key12": "3XvvT4WuZoRweYYSUeKFy3zX1MkfLBxAS1cGCj2v78bFFqYe5GzpuEEBr6GqiVTXLpbo8w1c6ZfppoKC9iyHhdJq",
  "key13": "jy96GQaozooQVxidCr44k73PtTftGRUARwmvmjbrJFthBmXmA4AMj3P53QGBrbRZLCwGT4prYp7QwNysQXTDv7C",
  "key14": "kaxkkRnm6d9XhEPhZdBPrc24rNPTJVcvUiPJYA17288f1iRrv4WMZPYfnqFibZnhATGWGB1GxyZy9cnpZSQ2bSd",
  "key15": "2KYtmdtSWCPBpDC2Q4Sp51ZpCYT4q3LP2T9VqFFLUaT8YqhVUmUg4ZW6Vhq9MfguBRja49whPTVW4fJ2HbWRBKjK",
  "key16": "5UH4ijRizRPzTdGPUQCJ3WdvgG4KPko6PEYGm79CzYRVADbi8UpKeMigcvuDgvJ4JPhF5HdUnb6fDdaNnxS4Tpv4",
  "key17": "2f7C6PozqtWimSBRoy5fNqizniZh4vXFSfAiZTYoGscY4XcbCpE6wLWVhysRQ7FSs19ww2Avt2QBxxQXrF36esie",
  "key18": "sHYs3qejXJVVhdMgeovK3pHsQVJoRvp5eNwwj6XTMWzbj6LYdeJPHfVWW8Hpg85e49EGtDePnDdWiJbjn2VNZhQ",
  "key19": "XPV2HGuRWmHJV9SE4NSJ1zhiWabdtHGcKvRR7Do7daSWuB9QjtmsGxsH6YRbQTDxGMG2rvNkGEzvaLZqt3sP6ab",
  "key20": "4wC2DgyqovaWBNrYezdE5vWkfZv9Jss8kWRHVjwgv3xMcCWAgF6DtmgiVQetAmFJ1tL7ZUFtGmqBjALj3BbKPWEy",
  "key21": "5DLhi8E3qsad1ZLirU5tzw35FfZWXkYRrEKKUajcs8sjchJh61rNXfye1UKquoFMa7ecf9unPkJEKagfzeCJvVmp",
  "key22": "4YGyXRdiz9jJFo6NoRfKPFmGKRhSK4YGLrb6PVGiB3uJebnpTAv3dq4UwyXWa4RRouwacdzjwSmvYY4uCMbjnYGx",
  "key23": "4mPRCXmA1RyQjUZ337ctqsMRg3tiDsrhNCM3tE8cn4183dh9WjeZGKwV5ciPJbbzrCa4b4Pr5XaEo7jgNX81BLAf",
  "key24": "3sBkDwrTbXE6DDipaHPtNFdu4fyFtPMRLqD7crLJNKwmt3MnYGAeeYe8Ba3x1emJqAEtVafvYTcNAD5Htv2catTN",
  "key25": "4MYcnhctpr8asEVqhU4xV9uFaiiXUWBbFZBBHkoZVQ3XLwKWTxMhxygjszS6z9yCYvXZoK4KBH323voF8vHV55cg",
  "key26": "aNM72zAWbCvEdie2FmUbBgx7PAhSawGXGKz1dETAxSzwKGefeuwZ3Bf3s8SWcZFKzhFyheJQudmtbrFp3KmccE3",
  "key27": "4Ve3xAUoeYJZ6d9GiNxkVBw7Nxa4masDopS39YC3MhAb6LT9tffkXbG1pGbNS11vZjwar9WyaMokmKpd5EgoCUmJ",
  "key28": "5g4mhcadDeZPbnHUCAxAKF6TEc3MXwNJNbT5ksMzjf1UaTWEkVC84bon3rVhSxGCfsMjMJ1CsXqSSEFrZ1yu32pP",
  "key29": "5TfQ2kt4THxVSdBNDcfwFbjGgDfVzm6wGsWWi6Uxd5gxQFo9cTVvNkPTPhBZ5N6L3NyhhE1hTzJE5gtaMFPLvzFp",
  "key30": "4AFFrtWiWyEn8mCnp9tyCYBfWzNstNpWy9VcPBzSwBKP1XPfCiBgyZEG81GT7gCrhtANcd36aPT6XagKVYdstR8z",
  "key31": "btgrpXCcgiHN5CcSqjFX7VAkEDUeqr2ngS719w7vBquYdjinptPe6JCQniECcPSJ7KhBFYoFi1zW15d35wrkBGM",
  "key32": "2sWjh14QY8D998exWqu5tfGJ7KhLQFVDR2bUyEWpoJrYREuPrJXT4AQ1GcewZaa69LnFkmsfrHPsPXHWQzbWphYu",
  "key33": "4kjxugpABJCDBWq67WMNGZ52CGWgZDA8G7xyNLTcvgRmutPQjmLQ3VJjk2HmrXZ1K37Mi8m12NgPMoGoiSDNZ1PV",
  "key34": "jGXwm2xifF9PYngNAKMTf3vvTJLb1cnhgFM6y7nmYeK4NYWHFMsgqW29F7izjKT4d1YS7veMJtrzGVm23GmxPua",
  "key35": "6495ojvGZNu8zLRqBC4UjcF4DEwu9muY5bhCXwTh4hKqUybMTLn6hqWWf2M7ApSVPCUSgxBMo1mXntyHHLPbUUNU",
  "key36": "3PJpSpaDTHugvzQ7U5QCFut9sVzZ9JuStVC9HTNKAsPWyN2bGhm6AUUJ2gPEHJbMX59E1np6WuFRk9akJQAPUYVs",
  "key37": "jFVGtkJ3mavViJwNjc6k7khBF8iT1XPa3suQHvqshPdCBsVMefmZL2XC892j9QvPSWCNDcYZj9V4ThSFKeFEEo1",
  "key38": "mEkzTxRmHpH6mmtyGESSyCZHQppxjzhtJGtNbmEcuPPzwMeFZSi3xJVasjebMVJanBfMRhRDAcPHdndKkkymUn2",
  "key39": "3hCBA5kVuo2TAfGsCu6Jv3kigzcXE71LWnxsshZ8bpSo6bmW6b1wH7fCicjit3efTSPxNhEv3KMV7BDdLoh8P4nA",
  "key40": "1aWz4xrNtppx82SJSoV2QAeJAAVtDPj1JXjtmECdw2QZe8inbSuwcNgkDy2sNtoSrYsbUMeKmW6UmERxLuKZ4n6",
  "key41": "3k95K8V74KHTjBDUEmiQLpj6FUtHrUtYcFP9srsfAsFgWLU6UTiGY3qsqxguMrQexguBaUVEuu3knK4aRfuFtvsU",
  "key42": "5R89rhmRpixGA3PJqaX8dpKGX43zjEiuaizES8x4aGD135w9Di6yXNUVXxvMqHukxzeRcsdtpteo8xKzc3xHfhUb",
  "key43": "5bi7RX39Hvxf9Q6L1vmrDBQG3guh6usBEF7vzX4qv6CbaVZFuGZr6mmjhAtbEMrBCiw6r7e6F6erNnV2dBKKQuBq"
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
