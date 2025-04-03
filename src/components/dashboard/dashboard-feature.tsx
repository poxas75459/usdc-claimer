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
    "2Kd12XvG2x7Bz1Kszi2dDXLEv6ovoHDNXbaQjFRqf5AToHQTCH1owBGS975VSG4DsENjpkKM9rpyMKQmrsRfrFxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nqhRHjCYqJBbzWpey4d55YXxi1jkAjBPGghiqSiBAzxxoqFZX52EqZw4YAacoReBd5oQEZLizsjn2D37PBq5z9g",
  "key1": "24jrQDU4sccpP6DS85ka9j9WmKjuhshyC9YGAwown6VXUTzKM7sUNjLc7cG3F3ZrwNeYiKyeHzQrw1iKd8AYVc8L",
  "key2": "2YBex2XPfRWDEr36QAoL5jh6Ec4tY825gPqTx8Epc29U13yNFXFqo3pBJtRKioU5pDSC7NprpuYU5GYFGD81NtEF",
  "key3": "hVBgLERcs8bNRRwASNVe4Kd2Yi4coCz4cNrFvju8DNydaC7dLjybkFVidBZuY8iPtoSqEm3YGkUL1ifgTFM2aLU",
  "key4": "3cFtF7YpiRN9oFzEvvmkajJbtaXtGDKDTBCMeknt7QPM4EUNi7JdMsgak3Wvm3Gsqywuiv2ypWPnQ9e8EGSKyuC",
  "key5": "4AMBxggLSEBoHA5VvrwGF1P6FJ4FdK1QVGAxdZ9iyjffy7YFHvoBjdmn42jcSh9a6aGmyRsMPiw8B4hz28Le4U5H",
  "key6": "4uU5Ssr8SW3q1mpTC1EFVns6Ch5AfFM2fgxLNgeuthWhvvvHM132aj3RYPhdP7XnuzpwtQqxGrPM8kTFV18xKBNk",
  "key7": "25c7b7zd9KwxqA9ofvum6WEBMgX5CDB1GpvKPqL5ZTDuBK4g6N5WJTFqbNmQ57ddYz3tsesY1Sa2gnNqApL4Est6",
  "key8": "o6bwmST1818g6eBR2jgp2fkCxZcTmLf6sWyLSrt4YkrsSWZu1ACU3zNe5dqLAqkrDLeyTCqYb4vt7bevjz6Wimg",
  "key9": "3bLJ3zmiEMB9f4hZUKYEHyN4V84sd4xnMSogoauC9LqnEXm1sWyoHmAaPtkbjGup26Hp6eoqjv7Y63Kg8hgVxtrf",
  "key10": "2nVxSebdvmuhRVwJGqpmbP8xcPFy1bgZsYBbTMXnMZwxSsgwkkZvYKZhzLynGMVgPdrrjo4UPqHt5sbC2nvDryER",
  "key11": "4sBXYzbSucfLD7EXMh7aqPQpW2nSEpPoUoMXrnCxVGCmsCQBgocMmkDZ83PSKdb6x6JrgecNbqKBfc2wyAZLLPd8",
  "key12": "h7WeuXQDPhUdAhoZkvqqBFzQdXwwEuMkZ7wuv3t1zP54EHtY9eoXLCVBQptkachhMNFnntrTtBApQiwhaeESXyt",
  "key13": "54gijGRuHMnp4ZFASLBbwP6RRcXjg1E7uJhybeF8s3VidhQq9pyj6NRyvbw4gsbCvpfZ3k5z384TWBq3yjzPtN46",
  "key14": "4UKswZx9n7As47t9iGMiG8DBUav5meJ5anT6nYiUR1KRtD91GGKK4nyM15QFobyzNMi5VNwdrY5c1feNiuM1U9jh",
  "key15": "5ngw3dKfCDr2eNXtEqcwavn3aDpeQjrT8kqHNZGhkMjw4m95NuFVY4AticsTDG24rjzxhVfwBDzGhfrPiKcwhVex",
  "key16": "4DFX2r2dc45by2YbrGhYyUQiL3QX4YYkzncmXEaZtMZnttePDQpQXoFYtgRSSPyhhiTpcCYgraUjnp4Zs5NUk22a",
  "key17": "5g2nbaQNP7Brc6vNNLBnVTu8xBf678tK9wdCz9bs8Bi7saQJV7Y6oDF7XuSV8RkAtgdGLbxyQNYZg6vy58rotK4X",
  "key18": "4Ln4oinWBwuZAzhpQjyMphGjPp7HrzSQE4tMHkUv7mwvcM7vticbFz7XDPxo1WymJXtRfE3iKPBoh9hnqBg362Pd",
  "key19": "2qx2LgCgcfYR2tu6TW52849r9zJpciN4SYAXMjA1nSCxU69sxPu1TM8q82DTGnTFJweGiURHYQoyAqZQh2hZvquM",
  "key20": "3ii3oVNCvXnGgB5AyWTD82rodYTn3RP2dYriHaJJ5scFPWNJM3BctuavSPwGkqstLg4iQr7BUUZyZFKk56Y6eWko",
  "key21": "25ixRvQhoTio62dMEMFBC8edYWBhx2aWW3fpToLKZJQbdF2XXArr5U57eaJ9pNhedyMTJGEpLZdneyzNMVJ3rtNS",
  "key22": "4JPYbiQkYxqMvb2viPCFLL96DVFpFB73EyfAD9Rb7LcCsCpfCF8HvPCxKkJ93XSjowPqZjL3GGfefXY3B8w93VrT",
  "key23": "4grqgHCtYkpPnNd8bSkx2pcgfoKuhGU78c5cgHb2WNHQ9tutTJwadeB5j7S8y9HqCNP6Ru4ir8hxUCHztfdief3Y",
  "key24": "2iM8QfjKvsSNECiVoY24HGL2WrYpEZHiV88iAxfM5NQZj17hXBB1QU4EnRCLyBPoqKjD1vpBDk5EdANz4qMiUS3t",
  "key25": "5uvwnXTFPYghguzBXBjASeCjNyBSuCCe5tbsXg4uckdKu92TLdzA83pCjaiGKt6XGhp9NGjijFiuRZptEMf5wmwn",
  "key26": "4K16E1dhQ11YRidjwdwyyiQkrSbSuG1XwJWeW5zm8u8zgSh1mcPHMfuGnBoV8YNuFXr24SsFajNppvkRszs6Av6L",
  "key27": "3frAVqj9emT7ME3AngotjCXNGbetiKVGWPpHDZmEKaFJj7joS9evM3B8xor6gqjZzofpCEkCcSSRcLQDW8g2bDbS",
  "key28": "uqqyUiQr2Pch1q7XWCoQDUPTNHMufJiHX3yyKEo7uZNqKDKLaYKURuGtn267VmLL9YE6z6VS8g27uB4PCPn2mMj",
  "key29": "5Y3mfz1DyUrhumQHHiaixo1DXg6JxGMX18WKmCo6ssJeQKtqmtPeDh8M6LnFr8syrQ8Fx3jVxcvs9pYeJ854DC2k",
  "key30": "2rhAqs7vxiHUz2C6VtBhAEaUtkPB5TojLELCK2eYKpfX38oQDrebjPb4e3wvnGfVQDGCNLHxFyfYrJuCeneLB4aB",
  "key31": "66cgwpadjS3zfoqMXnTAQZvhdYLSgJvCjKE3HGs6YJvPyfMesUq3gcin4J2sND71Ss7mcEtnxiXF1iiffLhUkysJ",
  "key32": "2dKENt9xsepHMu2YuXSbP8k6JH9aGRJqUYVLASbNxhNLH7fbtYgLMok9zGVN2qeXNtGAxxTnC4MDuz4XVgrC4nZq",
  "key33": "2QtP2FT1Cq1ocGB6GV6HLXHnnorswx6xViyUAsvD5DaA1yaGhwTLjfH2PZ97PHzDPzE2aSYAmZWgqmdLir6G4KNA",
  "key34": "4AdfX6tysM1UUoUaoqEkzx2Xo9q7cDYwUHVZ7kJ2RSQD8X2L2CKhieoo4NJWCDrtRM6jqovGUTCCD6QKHJSwTbeH",
  "key35": "fKgqN18JqW8NXGJftf8wuJaBkHXrjpb8LYio1CgvNB2XBZhZdo27FaC1rvmDQ8u5gyBxeVsUoYvxQiWzKMZ4ijE",
  "key36": "2AZLjgoHJ9R2bMP6Pwmf9Z96ym6ytjUqfZKgpV2xFGf8Ce5ArvtsSrTD3C1JFz9csvj3yJK5gd33iY2zhRWPHAV7",
  "key37": "3o8NeDPbFTEsfRAyKzwbSy4k451EdwoWXXbUGJpA3JGjyRupN2HKNWRvxWnoYD38unTCTQpfF51W6okMHhm4csSw",
  "key38": "3KVM1KBQUKoHEsJMEbJbpqK6h9dwdqvycbJ5xwCks4YQZ3iyEkbq6bgYL2cgBZwT7UwNxhXDYr9HZL7te9FcbPNL",
  "key39": "3Yyyur28XNF8ezcTK8ZAcSmQC1Mb1R5s5qKXud1UmWqdRzkMPHC5Zp2KbJziXRAPeHoMqh1o6NNuev61vFnfV4av"
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
