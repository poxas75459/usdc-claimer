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
    "vaJM2WXtdpKJQkhUJiQTggyrwB2P4GeTNwaQvwagYCy2MK9kfLNziRho8EhJhexfeiEMH9P8RxcUzEfWhmHgyZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQ9Fo6v6TpgHRhbca8BVVAbWUdmfQoT4HN1hEnFzqr5Cbeqi6zqtPbUF9nUrn2ezVDWutyKWqGnUy544uTrZuaL",
  "key1": "3sNXBEcYdpiEfrhmCQGme6C7TXJt5rgabC6mAgEj6T9Yd99kWfLFK78h7VPk2aaYLjaAopFdEuXVuQKM5zdYW9Tk",
  "key2": "2aW9HokCNLRS39yeTVKGaHLFknckQkfEqUu7DNSLUff8By7m4fgj9HbRdfXBt4EqVqnnVHHGLEkLkfXqDGge8Dfv",
  "key3": "2nu7E3DSkiR2eQLDC8mua4mUHDwQNMaAhndnyiL342uBrV6tcFbdkeGpTYmtNihkRGGsbaBDX6hpXuRexxXVj8kP",
  "key4": "5qqbU3PLvW6CCm94ctHWDpxQdcNCX1raYMCXTSWxynegMXzNDA6rFYG9ZYSh4dzkXzcegMA7hMi3FdPUBFqWyXtQ",
  "key5": "4mt6PB3aLYaaVoX3GuMFXEwbbE9JbcPptDh5pZTMWXYdh6vAtDPRHJPJuVn4vKdNuopGMkwit1wi1N4joPGtTzZ2",
  "key6": "31cqAKosmfz4cbw8t9x9rRcxWNhTrqX9cf8S6zXBfs26v5akYvAAR2Dd8oyLFbWyzEF1ihKtCamX49Jp2x9ffVqz",
  "key7": "2eVzi46SxWYg8m3UyVaYSjEBPJuW9vSQ2QdRbwmonqAdnL5UC5HMKu7opeRtYiF5t7mifeuscBFSdyuyk2A597T9",
  "key8": "HEQ6hYPnABDMk9C6eiVsT9eqdXvBW8VnPSD8RowHTYuecmHayGydozAJYkkQmN2DfXVbsETbCmZmpUAv5maJ5JL",
  "key9": "5VHn8GHd2bofGew4fwPEjdfyKFG7sUYJTTyf73Z9kcZmMzVJErG6wrtQ1KhvZ6vJuB26tcVXR4WmMQoSAJLQ1P48",
  "key10": "jMVNjvK13EoP2VuwqGXYDzN827aK17UqjPfHv9cYyLgoe14DssXcHXXGYmsJ63nuPFUFsDi8quML8R2rmU5CMdQ",
  "key11": "5MMjkhmZpA7g1MyCG3eSpb4scKtJqG6JuDoyehdDkbdB6iHZuYRkuKCRNjj9ZAkF6uXTnFRtnYUnM798Fks3tEpm",
  "key12": "5wDPLVgncE3RnP6yxfDTxvNCYPz7FhMkvLj3XMpjEo9JicsdYMDLNawjNoWc2nWyJkeuxLN9ViD7DoE31Z3uxCjW",
  "key13": "4Pv7jPQ9UUznSCrHmjewjKbSBkbNrBRcQA144nExxLRbh8hd8wk2tTpsdefnaxpPKk1Z9sgsSpYMSqsJ8ceRDGgV",
  "key14": "kD1RMGHNkXKwfyQEvB29t3adudAzUjJoACd2rgZeDiiBYFF1ntBPRJCBJ7igCDRQWiVmPgdHv792KbY1W8xq2GW",
  "key15": "31fXxQ68y4rqfKUBzpg4r8aPQA5MXx2tbLgTj4ByuddJw2F1Kwctw3MJczgajboKJH84tu3MjoYNhXXtmsErddX7",
  "key16": "Atn169EAS3KiyjoNkZvQ71C9r3qoVksfGF1CYs2uDeGSH7MFnsCVua3HMUBM77UdHZBBYBr462rSASaLWg1gPk6",
  "key17": "EVxSP1CJRVedYtqKemSH6qZvD2thXgmBJig3qDoKvzh1644fRwaW1ATr9Nvh3Dxjy33AhhZATR1MTW8UFjY4dyt",
  "key18": "4FaUmxuvmDCoLqpYkEk9s5RSRfbFuH1nsxeeShtVY2HhGxLZgydy1BPyQih3BxCjrQkLzxYD4UXexHCYLhtWS38V",
  "key19": "2Wf8DJyXBrmjdsDJPNPvh7AYf1F3wDvtv8Gk3VcJvMY1EYwAYZUgkxDEi77sH7qSf1vuteyHFd4j2ZxAXLdcKdNQ",
  "key20": "2BKi2LGnHaVeNuV6nPg2ACA2b99AtMxjkbtkTmV3RYSUg18MBRG5YzmYovWFJEv73kZWBALgz7psasJbjCau3KYF",
  "key21": "2uhcH93BgLadFDE72kFhSHP3m72pEki2R12fqzKtrsDEh3wT92xcfhPkKHvpXhminHWBzb7drRNpPr8LavjeVVLe",
  "key22": "K6xuj1UCsV2PEDkAi8GQLaxSKxKPckBSzisCZ8ibQ2N6Mm58Ym5hpXjyB59nAFkTRFj15VqeT2uyJsDoc2pQPR5",
  "key23": "4ibrawhWWrsSqW63t9XqqtXiipL2RGDQXmpz9J2tgGBrfrFQcYoAq3VeHAFZhB6dpQMDSTKCoCQGfTorjEEoU9sA",
  "key24": "5FhUgWs8mVSaQybPoKHn4wiPcAP42HkUpdioYnzaPL2vxNQKAQsd8VfaFtYidWC8QCpnmjFPdw4htkMPkT4TNhRU",
  "key25": "2GYpQfgg4sL3x7UFUZyLxhi8knPpa29b6QXxXWZmFZN2UwZL6mN6kCtaoHFKgLGQ2N79Xx2S2oNCz25owFk7FHk1",
  "key26": "4G4qyftN5qAGFxM8qX27wUGQKjHVSswq7rk4KD292zHccYNRhNQC4Mp6P1iRuQiREwbC32nwUogs45sTioDrsvut",
  "key27": "E7BJjomDB9Bc2Gy9FLSXPNY5C3noAejRDHV8mvgsXnGCPc6NLErDBce1gTx8r263xNbNjnuBgLAEM1LnHH4tK9q",
  "key28": "5NeFudxtiK8XW654ypSHM8NiqsSj5MhoHU2GoZgwdZ4oV2pCaWXDn3Ndy4eFEn8gPSd3zfPQd7s4aomwvSy5qQR",
  "key29": "2ApXn7r9uUqQ6kb4VFQp4fmhvqovhQ1t4qUQCEKvL5vrLubW58ZD7YMX9r97aVzeqb1v7oh8vRCmJJVSBrkG642b",
  "key30": "34LXXVUf2KjJHan2juMs7b19uDvyQLg7Yp9qgMD9Q9a3LBDqkZAhLKXpkaYBdmFMANbrGf1dPJT9EDkhXxYXUfrd",
  "key31": "5h3s6hdYBeDbiCM9WWXrwe74aEwhiziRpkaewJw9M5Dj89HR2Q2h7RaxcHYL5MC5F2DM38oXBEHsjyqDGnKX4jhi",
  "key32": "4kyNbjAJqbvwKBfC59Jm9sY4wEP1bvPxHZjEKw7Vr2kcfvR5zra5QQgsTCfHF14x1a6H3vxdGUAX95Zv4MTqCanu",
  "key33": "5QqEoEerRSTnpprF6bu7wwd46SLsKtf3HztcFPmZhbhFSPGuujaofJtq8wJyncktWq2z1LW7kzQQQpm4coj9Ri8F",
  "key34": "5xY96jwc3qepKBuj7L2KkcKTxx6Fp97uN3C7gYqQ8cuusUnypwoBQRCNQ7JwaeUuCLohDGfipe5quPX9UiQy4rSE",
  "key35": "JK8BXRRdoFqGyVGPw78Prno114h14J2YFdEPnJ9pUXsbtjVhK7E6KU7JHxF4q2MZ52XQU6vSpA5pYzx1ya6av1r",
  "key36": "5CfeEaFM8Kzy4XjRGDaaAZ4ZCPdXKKmWRbzCiLZYrwzfrjp3DDbWbiyQcZ2QacSqcaaRavUBDwidPrTEfjJkTBdF",
  "key37": "oCvpHnHamiyoNWR7fyeRHxc4Lgv9uFWdziKjSJih1x1vuawnuKG4qFXiCvmk84QTTveqDr1WSttx9JLs4SNwhVD",
  "key38": "2W85vwKNt9uoqpQrdbREuLVVezteKzPf7aRSKx3VDpZCsd5uAGNQNW6voFzx81iqerXwUPC5xpcPvj9qwNLsYDFd",
  "key39": "3fgySbU5Le1BWRZu9JQ96QZ4Cer6aY6aXLzjsHGKJXQDTjRSHofNwpeWHw5rkETJqSMLE4HCWH5qYjcwaqwnAVEr",
  "key40": "5kHgHSpUBukTB9dxYgg3MB6FzAmEvWxUQe6NNFnSZkZvn83ny3dMQ1K7wTfFhg8VX6z7pvVRn9bps7CeQ4nG1oKa",
  "key41": "uNL3SdAzXF7q3nqtah8mPqCSPUVefFxVKCuw8SmFeNh2ydQ99Z97x1maKvmLkMJ23cLnEsc1ZCQ3DHKHgfddt1J"
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
