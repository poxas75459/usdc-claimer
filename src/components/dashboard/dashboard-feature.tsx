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
    "2zqhfbhZYK9P1vRw89gZioHcjQZsrqHWcZGEZwGqjHrWAASY9wPhMiHkwBfjJWgUhmXEMcfjMUaMGGHH8SBZLZdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pf6NdDsh2Z4wkfRXTYcHNvk2LBPPV7oHChfExJKtGJxdCz6AMJQNdumPnSnQ9Jy65eSiHczQYso2oyv8XBP9p1R",
  "key1": "4YvEKmrUPvcMXmfudrpTxA7TX3ouQbNraHeiRQgJ4XrnjncXHqeXeDAC4An9QvJJHeycBDCA4mMHdbvrhkPegbLK",
  "key2": "3L5NsPxkwgojTS51PmMQXRRyJsEtT9pfMYXGVCm6m7ducfsZm4Uebd7M3B1MGqGrnD8cbdvmCQRJLuY52oFPn7gP",
  "key3": "2ZwziPwvK6bHLnFbjrraAL9uM1nNF6bmCfUrREjCGVjjq32rdCjQmDw5yLRd6taj8K3wMpKPvPKNP74xxBfbmDsg",
  "key4": "3JHtpYwJ5dvtr7ATXpNvGZnjyUmSdasYSSgbC3M97nBDMYH4aN28ia97xYCuTKw3cvwsPdm8UmpADgsLkE6sN4RF",
  "key5": "48mzmpVJ9CnRJhtshbSr3bSdVYw26aoTqEZezcBWg3tscU1oU9ZMrWQUNzDupviqP6jhooAKajxpLk2qv8Xo7grN",
  "key6": "4GKxjjTDCA869ZbWhRKYWNWEmkxvb5Uq5WsdmcMZ2CFahgREJEz95ph4fTZ79rrZ1Nd9bsVTMXYEQ2VopgZnjzZh",
  "key7": "4HScFMd9GKUTNh2mC5av7C95uECG2UJKVkMfiWn3ntpRLhZerZvKb7Wq36qeRwnTLFgUcTwFwMubGWunc78Byb6Q",
  "key8": "4ZyWECEiGG7mTFt33hyUaGUtgaALo9aTp5x9s3h7RbmTTgA2S8udok7NeTuMiMWD82PgCnKbTiBwewZ7LPDFNH24",
  "key9": "kyidndPEAy7cHx7xBPsGoTLZcYBYyLK2iYywh66jtcqmdcEXer8GSkjyAkBdE8ARt8ubm6WeztEsXLZo38PwAvT",
  "key10": "3UiwiGQ24QqJJ5o1f19daxF4Qft1GzdYVLZytL8fE5WFABhvvxNLGccUgeWys5i4M6y5UqwS9uL5drVkKhjewt54",
  "key11": "2MUuWKSGM3dw9R6AjTcwSZh82Yv86c4NsSCucNZSYbjEwqkG7PMybLaBBAGEZ7ehGK48JkykJMMs2TUV3MXbwAM2",
  "key12": "4bujCyz8jtbBWTEYSrUX9WQxtSuEwYzT2d3ZhxECQLPixYNAJFjQCdX769mSbpoXj5TQVrE63tqTagDFxHPUiqf2",
  "key13": "2xfeaEBdAqYAXzsbXsZL4tDY3zJjy6XqjVtD3ke6j6PJXJmudN2qccDQJa6p4dteib7FVDg1N9yYt7BBnCTsQLnD",
  "key14": "hNiFaZGHKHCgZwnyKjji6iN5zzXP5w4H4pT9y1bgv1mHScHzKJvn9SdnkhtRHep7Z3ZLzcbQ8FJDwYMYqE2xycp",
  "key15": "3EJRkV58Dow14eGLJi9Uye5DCunUBa2qqNNU5yKyacJymfj9QS3Rz9ouHhT4GKaVyf6AxFhDpKkt4XCXxQqMPBsZ",
  "key16": "5MZ8XdsvUKnBmoD51JUqxoNMyHpi5SMBB125xpXkPFpHRM7dDVsnojLmgGMwMmbPkShjVLbvd6U86sKA9Nj3fZ51",
  "key17": "4h7Z9hh4omW39pGYfGUUfSHAr4d2iKUSBn8GQJM4dysoqCZR7s3bkMZC3c2N3pcrP62XgboB848BA6JKCQhD6rHJ",
  "key18": "qDhhz4ZCa2CnMqLiTv71ei9HYpgXiy3f7VrxcEyvFCpyfA69vesGxaVBXhngkj8xr2RhapsTETYPLrqaU6YLCke",
  "key19": "4skEBkh2KsEByn1yWKnsVayv7CHAAXvsDPrGT34pcCihL6SAT5ikrM7P8L4RgrUnbt2RqcorEXaQJdPf9h8RJapN",
  "key20": "2fYEVL1e6Pr5eE2Hs9FYpRDK4wV3XZ7naFLsmDhdwJfi9kFRMSrGd86csAXQhFyjmuxyh1TbdEkzfQZmn9TewRuM",
  "key21": "4issPs1YgvfkRdTWtMb6jQmsvpSP5vA8f27v4ENnymrjWUrGUkZnu7yhTEr9oxNjKbTmrBmjMc7LH5CAi5S6Uh7c",
  "key22": "5Nr2Tr3Q2CdARwXU6EVShuxmDDKqp2X6KuJ2N57vAupVRo36GozmHHboKFaVm4C1az9MHR6mDTo1LBmVgAf8X2Wv",
  "key23": "5tJatZw7wCbWz7hZqCfRtcAbgEqDaGD53J5ZyFafx69b4FttPJokHVB7Kp1j6azca7zm1JaDBPwWG4qRcfMA5zxU",
  "key24": "4V5aTZE7AqJrc4Fu4R9p1HBXcHdVGrXpiGCKP4WtXYBMq68Sh3wKqgJJNh1ro58iDuWZC3gTXZxhBgKbLxfTa7iU",
  "key25": "41NvxBdBEjuskiVrMnC6u95tMHUn53CuqSDzsHtgAxxi4y1outsUiLadi8kfoTbEwiMfVV6c96gAM1jPWUUf838E",
  "key26": "aiKrxRAAazXZXmQe36kKXwkExJVW6sW9N8iZZXQ8LUjVJ2uWD7La9yznaRDYWBcprZje7EDZRA7p2W6R1yTjP66",
  "key27": "5e9Sg39SupComXkavsFMaZ3ZTa5HbAHDEZ5g4dMPbqAmDeJu7YXbxf4ng7A1HM1hNCJ9CA9nuKhPyYfQkqembFy3",
  "key28": "GzS3hRQZjV66FsAdkPMdkyVbQNtkHhjwfncUAuogMCfoUPvC72vBhCGSKMUBcD8bVAC6J9daPHNsRYdDv8tPB1K",
  "key29": "JJLcqmVB4VbcaN1HiM78DorU7HcYeDmxLtkTctZGVk7bnjhyLv9LeogwGVF8FFx5dSVRuVZQRNZcVU65ir1pov8",
  "key30": "3cE7PMrCoDifKs2KBkRGZ6ZTPe8vCKtMvzkj2BZTX3p6rYs4tVx2xFze787adkGSDCVdT8fWdecjjX95jjPCyV2e",
  "key31": "43dkpCEkFSCCxCZVpEnoKpaXmGA3uB2L35bbRgUFLowfyRG5t8bfBywzkZFF38K646s8BHaoKYWxdRzXkacNEy3t",
  "key32": "27pCavuBPhYm5pTC1NRKJQCX3AkTGgN87Jw3g2sAU48A1tG3smxSz2pkj6bJcs4BS1Xx5JeCnWDMvM6nbkVNWDbs",
  "key33": "2WvHJ1NsjzRDzeZtAuC5t8bJzXngXhiSP1e2mW6mU1m9wJnuuTQpFc2emFZWWUynfxioBG8fNZayjcTtRaBwpXhP",
  "key34": "4bZTvsX1iahzLWK9padkfjzffgfBZMf4oirXy4rMZP32wwC94fL1EfeSJfER1K4623F89sHgnT3Nq4ZVPPWWhCT3",
  "key35": "26EUtTE2mVaLEEsCC3ySNTwpAK2XipZgnr4uAyt6G1NfngrGtRgGJv8YKBGq4HwdGHfTJciqCBBm7nTpRxixB5Lf",
  "key36": "WxTWLamjLdXKLFxAoZmrUisXutiB6ebz42s8Z8mQ2eu3NFqKxfHBDp73qpeFvLAmYqw4GBkSGH8y1HmgRb1ezb2",
  "key37": "4mSADHgFS9Vf8Nev3x1TcMkBHUdw8dFSPXb6HDkaGuVLMJDoPQ3Tym7byxM2W9nx17AUmuTo5bHai8MBibUSVpTQ",
  "key38": "hFAfcRsGwn89KyDR7yhu1NbjWm1QrujdTqmkzqeqcSB6KST6Hd4hp6WAedpYM5YDuhdJX8kg49V6EMugydUAd5b",
  "key39": "ttxPVCf822aMzvLMS3BFEgeB7gRijgAZrPQgoTztQSFsPWrywh7PXVtmLLYvAYjKVQVVhZgKWELqcQ9kqPnVQjE",
  "key40": "44T7KrhJCPbEFThzwp1ez1Pk9x8ZpCAaWb7ypBgcWWtJ3JEm7PF3pmN9MFjQq73zbsE7HzVSPd4jMzra5vK6FXQ3"
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
