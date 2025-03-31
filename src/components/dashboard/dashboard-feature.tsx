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
    "VmKbp56wBm9rWrtcPMZFxGSVUA5CANMSZ91nsU8eE4GkPQdUMg5VwLHv9UhnZWD7q3u2BBLfSQ1jiRcCqoQwpvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55PrZmK3HRBNUGRfQj7isCR7K9bzGVEVDnJLpY6caazZsGxU8gUGxWSReupAQb2sKxEWw6NGioSrZKNaXf2zwg4F",
  "key1": "2TXnXJNDDB5kz6J3DB1MospM7DiHHh8VxFWiZ8dTyJXV3SDaY7VBgLK2SJ6oTWd48jpaQ3KxKjtkp58GvDHgMZv2",
  "key2": "DvkNCZDdo6Ty5Jz4RN5kDrb2RFjMRKZVT22cLyDUynvykTPtdn9wBizUS6SAtXQsPEghrSyVrMNNnTWS44hdN3f",
  "key3": "3CC4edRt3BFyinSZXjoPEMpLMiZo2oV6Jh6oQHbMU24dVoT9BXSbTNuiN6gJavXUhrR9gH8M82FDarySC1vjKGfg",
  "key4": "4v1D7MLt5AoJGAGAcr2XHcbXo2i5NFTWJG8TAGZedVfk9AgqvDf1DafqroAE5R49xyDEV5AAJQddkpzMuqJp3wpf",
  "key5": "2XufCWaTMREarv3jUPaZAFycrqMajjKfX7fAaGk2oZA5YHDWBQrMf9mf8nYFZmyoUkns4NZfEexPCLWWGfjTuofo",
  "key6": "2vW6YG4zaQ4tSRNEVPKhaYYemgq7TL9bCjoED9BfJKHRb5jtHPuFCw9217iZCwvnTTPZCgDwpjxyXqhUHCDms2kZ",
  "key7": "3Bsbi954RrZAWkE5cS4Nj2W57vFN7U3SAXxaC5xfP2oARtGaYw1avubfFUEz5LK8BSbcBHUoTvQcdv2i8XaqERaz",
  "key8": "67BHT7nTpDfCGwn3rtUZcnKZ1ZSsYoZjSUNrcHNYEEQqYfxXD6wtsCvrC4tULyV59GRfuBHipDC6x3d1hc6umwbH",
  "key9": "3nkdvsa3eVjMtv9NsG4Qeea9wRZUioYJpeKnkqWjfhk5qxixEz78VfLxAZUPWRVwTu12QCJMVuJU7WD6X2kDYanw",
  "key10": "2ribtn7YsV37N2mv4qU77PqNDEZMCGRmrKNDDzk4oDnTz6dvDoCsSzE9grKaN1e6LQoQS4hDJ7KfKSWvnYpJAD9V",
  "key11": "TnzwFJ7JJoMNu31cW4DyUPr5RPdxxMB46qeHVFYjBba9cp5iiXkWVDpvxj9z88wGuteAc1j2tN1pnjD1DMrWKJf",
  "key12": "3gjcCHv5L5qcRM2TNgs4hwMf4uqP7g7XewNipmc7m1Z9NocqEYVnyon5MbXgh1jEjYsNvGAP228e19yN8Dt1V3Qn",
  "key13": "3vVvHgHmTihRgXoPghGMfqmK1Mo8B3sYMk8YfU6Ewo6Beu5aJKVZWD3V1MdygoDAJXRR2hpLaaxWfsABdJdUEtfE",
  "key14": "4BdgPJaR3YBXZf9J657e7ikhvcd9qsYW2KeHRmTFjbFwopn44rE212e1iWbC7zRBug2Tp7rpEV1LZMqTBayNoXWL",
  "key15": "5Jm4caRAb8JggwyBT2qcKjAby194GXPB6TbVgHECcDF1FCNpqUwnK2AZonUoViM84ewLHd5MzwLzVgrTYHrCgNBs",
  "key16": "3gPb345qACBHGQtKvx8u9EVN7zBL8q8XcQDzmpMSN8hvVJF9juc6Au46odLjLb2HDWHu4T6FTTneLUQBCmxz1v96",
  "key17": "3ULLNSzQ5QMHL2Zj1LXfXkCrmAqqRtFGWETgSyR9U2cm2PdYi71U9rQoduQJ27RHUegA71MUFphKVAKkTiuT8okp",
  "key18": "3mg3VRuEqzz5vWeigwvkY9GJpcZBMkySKN3BgCoTQ32RuGSseW33zwddJbEVCofHXRintMyxxQdCWpAjo5BNZNSS",
  "key19": "3eUCnEM43e1pQVJEga7ze22HjhTKfRcLa3USYJS54F9vUKiMSwVFDXJzyv1LRFYNE869W4CPKuPdFUBi53ftnRMo",
  "key20": "4tT1bQRfDtedv1ZuCjUNenHD4mAjdbMuZhepdhKKucNV6m6Y5t593ELU4DXe8oCQVrBa5mFhJh36MLEme8hhAi11",
  "key21": "3anEePf1RRRaa8TZVgsLMBHUGWBaAF9LwxSJMK34FDRnweWnmmdH2GnbQU7s5LstdGdTPZdTDJZt9Kcz2GmgmWZS",
  "key22": "5xeeSHbF2c98wdVAn7heYxUAmCvZhrpaupJ7CV1PuqPNRSnr1J3MxwonxaB9uqrZzJiumRBJpQtDVViToH545AKP",
  "key23": "4yDUVnQx4Y5d6nddPDyGK27tbSPotxqKZnnDsePHGNruP1xvfewVqEALKAqUuTTRdMhtpGnqWVvbrN5CCGXYU8r8",
  "key24": "5ptkJGVoePdVc5tyuwj3ZEjZ2PztAHimPEvnf55p5JuYTwYUp4or3bk5bG51GC15qCQ37YMMUovkgsb7VbEHPcxM",
  "key25": "3Gf5Ud3HauBgVpVtwtC3WvdupCDvF3t3X7osYzN8bJWL9fPkSLSWnz8BXdLvhMhTytWYshAGf82J6ggdzQxSGwCF",
  "key26": "2tEuWvysUSuSqR8pvEKVLf1tETuU19b87yyHx2DExwwmoMn66Urhw1DoLLJ6wvPUYPPz5mMJ7hxDMmnNWVruzWXi",
  "key27": "Guvt5f2WiYFKJS7myJdyX9184bc6KPHGPKPRkdRRj2rjF5XBvWq6Afvmceop9WbF6ALp82JyA29tQLKeQ4DLh5L",
  "key28": "5uKiTT14KfR2nP296i1aMu8aYcBmrwSVkhAuFw2UwZsAEBCfwu42DRbBeHPX3fAG61bCbfko7QNyagtcYNmFcV5G",
  "key29": "5Gcf8wKZMTQUqqxSwyvS4monz9ybrsDhGxojMdEAzUbxUsgmeJ7WKojcKo2hXtiqxhhNFJpY5qXj2JwjdzPogb3r",
  "key30": "4yzqpNDFykDu55zRPakF6jw6SLMz4nnXv7FjdJEccuFYc3xBv1JLmNS7RaULRAxsjry94opcW4s2tidX7mFV2rit",
  "key31": "3634Veiz5k5h3ivXMmBBXyxCJ2w65kWQaXQczVkWogSWyJpP61X8EbVBqA3G5atqKNk9FMDiNtkhcP7WJ6a4BFBS",
  "key32": "5sgJ3rLD7VTiLM8HocGrRGLcDhSMKwcVAYDdHE3oPKpKLWdyHyWeGTPXXmnHAEexctJRRJYJdWAE8iu8QLYcm9WT",
  "key33": "4U16FMJ3acPN8W7im8HpmZHNaU2tY3RA3zte1rhcRha8w5bjjttWqCqUZZK6io6y5QipbBrMi7mKuHhxqRTXDvoi",
  "key34": "4Yorn1tTkHq3c41WVLomUaXPjsQP6hheLrDU19nFuBEnJnpDYM8Ay7FC4YcLrvcYkSPzDTdiRfBWH4hBs2icNP9T",
  "key35": "4y6ZdvwLgqeEwhaJMLvM9sSVP362kuXLrEHeeWDP9kKx6ewpQEKPzNqz55uksvSRUPN7LkGBQzn9vnRqxNusNt82",
  "key36": "eC2qUpmywMJUZp97wVfz584hRiMGYfK7NRfrPQL1gKA35Ctx8nUauuFx81rzvPzHNjH9jysFJDkJ58GkmFzCYcY",
  "key37": "7FmP85Pkc5bT1RgevhgpJNKHuNvwbpxEQcmboxitsMzHfbiJAEngNdcttgcG8DWxUzND4ixfckbrJpoP5m3oHpY",
  "key38": "5YuUyzB8bbvDkpbBP7rpU7sbNP5iJeDmG66kQLpyRwAb4azC9N8tvZiVLtHtYGbP8jCbBtk9QvG9MjjCRVh6KQuG"
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
