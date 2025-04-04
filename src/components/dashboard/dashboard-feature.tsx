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
    "DrgJViyvDZh3ry1Swnvii2L8rLSBum4pfxLWoagxyFJViCbHc2Th9GAyn7QStLy6FFt2a7dpaBt71mndPH87qqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kur4GsHFwRdyjouyPgmcRd8ezxsVLKyj2ZY5DPXEEPWVKzPsAuAZ21mE2prDLaUkDSAFwCifPe4c3dQ9BNz7wjo",
  "key1": "hbmaU3g46DEizhGZMP7fLeBFRrToVZo3Rz9kiDFzb5Jep5Dp3ui8oosogZvViRmtdzV6ZKWNPZarDsSzsRZprg2",
  "key2": "2B7iqqoaM7M9UBFaRQxdgVxA8mMnKVubw7P3ZgibEaw3CYgaCEDJzjSfzcM8meoLUTEzUqyLiMnPARkb47YvuqxC",
  "key3": "4FwNL6axgjBKGysyEAL7ehFNZhfGBG7ZnbyruR3dW3tyvATFhN6eBXAZGFGa2PrByfTkFZfwApPHuyJc8k36jewt",
  "key4": "5vLt5UZdBASQ3BE69am221BqaPkE9bozq2L1K5y9sM3VmYJFRhYMKjz6fdjf38i2xP2aFfFNUuLGcMuxy1RHaKms",
  "key5": "ue1MmcA1geyXAy7JQUVbp7GBwGFt5BdXGTQQV5QvjXH4wRYtZd8iiSFbvfyhhjdTd1xYXydCvcAdmxjQGXay3uo",
  "key6": "2bRTLQGVQ3tjczQGW4x8aSqyy5Y8E6Y8SWrwh4611ZkCdQPfMBiPxosNc3VZoLweGxza9PPATighiorekwMtepwo",
  "key7": "e7MWCgBDestjJUkWSLEhSUyXBduT22FDVTStmgWX3fUHuMF3YPjZoJ422Y7VEtCSro18aP7C6PjDDs5jQfPSLh2",
  "key8": "2Ky4mqqiV5QPWsD79cqQ2BLyM5sxog7GW351SkbxE5PHDsFH2C6jNaRdVu6JXidtZXXA1D6FHH668kgKdXzkUchq",
  "key9": "2dK5fTf65PUKzj1CHC2s3PF2mDKr4VmfeF4pVB8r4EcgR6PSAYGSUKoHKrpa6SGaJLEyXguSyjm4wiTSnRXzvBth",
  "key10": "5kpy9SZwXuwodt4Q8gy8W4N16T3b56orQYS1h9Z8uBqCafLswKGUdPkG5bWQzsX6nxfd6h2JhPgMBovh6DPp3Kh1",
  "key11": "3F4kE8HGJdphckko7CrS8qCKM3myC9QdYx2ne9gW4bRCDLcpEi2pQrhFABmW5J7SGqY65MaCKooNxf8RADY3c9Fc",
  "key12": "2Rd8XimcctzK1EN3SVaAQaeUjit8YTr1AJmFcmTTK9xcrRbPHFzEQBarCwRKV2xSCRmSEzHi7vmKq2SfuTDR4q2p",
  "key13": "3kvnRBFb6MFZKJ6z566JjNeSbzMTnNHWsTpHqU9m8EmTp5jZi93JSXQQQ5Ldh2gq7T1NTBczKMHMc528daPM3KGF",
  "key14": "23iqsAp1ymCy3e2LdNUyCYGw5rWfZqB58nHGZGbJYnSRaYPRxpefkuERr4C52Xgox78Wy9uaPg4GEiADyQSvN9K1",
  "key15": "22UdVZMHnUXEVZBTsabm7i3L3DGLmVQHh5vqqNXiySRPr83zbvT1HgZ4e4Ng3wFvXoByeaEiND9qZgJUeAL47qj7",
  "key16": "3raVynxyR3Dh8ry7P4hET4ghBx36fZ3WWQXs5obV3q5VHiXYoFRrPiLKRfCW7z6fcsc73r47RD5zetYa8KM2ydm",
  "key17": "32nupmn4SMJbNy7E3ijTvDmNDL3SUnmfQ7Km3WhKtEP2q5HjERgkWL8nQE7Q8hpvu56SDCTftiPA5vwybXXVcvKY",
  "key18": "5sNGkZX4fNcXP2r9ryGkk3jDMCkTpp9c7Y2AUeByGFzCJEFTvyiALNsECwTqAG5H9pCvYmkqoAuaGGatAsw3s93U",
  "key19": "539xY8wpqvL6DgnMGYzHEfaUtbQzeRoEvAmVD7uYRndiCSkyitaM6oGe6GNzSsqk6Dmc2cT5a2r8QkaG5Jej6FNK",
  "key20": "4i7g1BXx8Rm3REZaLTbxKwF4YSPmaKxk5q41iG5mWZSwRK5HQ1SVMe7BFSns9rtTB7a4NnEjh1eidW2Q5u9ucHcC",
  "key21": "2WQZnDKwtsXNBqpa4XbUkCA2zVhTLkCQa4tFkMRqhgwLQEQSpTErEbkP73cDEePjYGwZB4uXPhYGeaUZ2v6raNSU",
  "key22": "2aZx6TrF1J2Y6bbrzUcyMVbdExazFDvR3cCRKutZwyvzZ5RYL9RYfyq15ZwrE1zzqDm7E6czqax5cvxxNAH1P75g",
  "key23": "5KPdnMupT33o9eNpUjWtEhv2KmXyhgMyAanughuiQRY9hPzWHx3iupF3WAP8gUxzvsbUBprzWKeD85rCBiD6DZTU",
  "key24": "3JPwnJNKCisjVoYpm8uAEHT9qm59XXGv6vrzuRgDUTMzrDeNXdMxQHb511kFbmQDbZvbKBUTJ5YYwXKumiyWXkaS",
  "key25": "5KWCWWD6AX1No26EC7bee14Ag9xzg7w7Gmo4DBUqjgK2ibRFGHxtS79ieGTLgVT7RM4Zxv4Mu8qRipUtBu8EebPt",
  "key26": "4JHDgSK9k4Mv2Fj8U15Ed8smbAsJUd94SmAQfXfmthFCpZo5jdEdGM5r3hwADnLn6KGNuHA1pgPQfVGEtoxVTezc",
  "key27": "4kup5vJhtzqhopwV3Y7b3iv541owPLpPmRzCHoQFSuaNh65CGLLS6FoZXJpEjvRHHU9hTUesDF9QmQ3DPkwkc2qW",
  "key28": "2vJYYVnntEGnfiPGbDrcYYAY1zospsVUG5oVV97JhmFoNnABVnHEX3NC3Cz6mRHrFczz2DHjhUL3U8bNMS8edNXZ",
  "key29": "5ahpUnr5TVEUvPixvkmKjC6iKT916QwQBFnhUgdcjhcsJMxHhZJQzBWSNRjLqN4btZvQZ4XQHB8NEc4xGr6ayJJt",
  "key30": "36gDAehvf2GXWkjPXVFV6mST2qSsKAtqryQ6LahhhyMin7csFyjSd5Qy2CcpdypCReaZfL2Xy41HbbJ5Ze1VzbJs",
  "key31": "33uAoM9E1hhdF2uAnMg93dSYu24KUEmgXHWSVs7WFvam2yGdCdNTsneDinGQmkuv1dKytd8KvB1bxHrxWqrJVJPg",
  "key32": "QRTUJ85DDp9AJStTCnuoiJfVgEVC4fMGS6hgzomg3RRuP2ZmGVnepe2EQ3h8A4KXmu1cX5258m17mtoGWQK3Wtp",
  "key33": "22Uz55AWeMGanFXDAWL9p6anNzXPkgS3QMMSMEcS9mLiKQghTAa8yuk7BWCHEdGDHTLwjw8ibeeXDHC6C4KvXU5F",
  "key34": "4d89pAbEtTMsrCQw9whmPYTU8rdMk5dzbpYgQKpg1nBPJA5SitPMhc3WudhWK1QqDS7rnqtBeeVo3XbWpteJVHpy",
  "key35": "2zThct7gg29VKPEk3Fo62KFsxG4b5jzbAmGWkVLRmvB6CrbQhLnvXVZAuHSvUMaXSfcf7UcA89rCAELZLTdws4Pi",
  "key36": "4HaqKKKsdr6WnxqEwjWBzrDpcHQsVmDJFqa4RBgc2zxoW13bwnJ3CpuoPTvbEb6MxPkk2ru4QuHb6TypC3FDKQBT",
  "key37": "4RXFMjDM3Zx7CM2YaoKuHmHQ6pbFNdb4dyvKkdgxnx11VwEKUFRfouSVmvRN7EFcUzBg2Sp4xxRuL1QjpnfN8Qme",
  "key38": "5tzSDNovy5HCWh6BvhjYrsxWy342QwXn18Ttcjd26t5ixrc7Nhn8riKoYtuxeyrBLDHaAww5V7y2eSjyoJ2KzrUb",
  "key39": "4VFZhibnpB4Pr6BkCtXhNG4wmcww54Y7inDNhEaZWzcKu7cp3yq5e7zqr5KUmHAaeHgnyUmnMahTeoj5dyBWs1sX"
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
