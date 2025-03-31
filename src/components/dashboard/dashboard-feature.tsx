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
    "exMvXz3XeNKfFMSe55BGB5MDde7guctVVWncMPas1keBQwFjrWELAg8XCvkiBSxdNAh2ZMrt9jTBQMzSURpc2aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tv21EkQcFGGBsbqg1pcDcEbuM7amVpKMPopEvjtgDdemKDeQu12URiWrfJUBBUESmCtzRaQgqRUSJBXDUhVdojt",
  "key1": "49qQpprpJcAfX4s39jVXRayeUpzStX313UXL9wFyGMx9c1L84mdGVPqRYn1UW8tRotWDr4PuBZztePfJsAUThrye",
  "key2": "5gaNUYzJkwJmLUH2wDFq2Lc7ZSgAHGwi3wDbjo2C29kBzkzTL5gU542A26W3F58VdvCE5MqYJ9evpVYhM2YY4DA1",
  "key3": "2GUgMVcmFatrVNqoPYpBsKHiWetoAdbGYcD9MUpZap6pVDSVAr7au9gVtd62RmBmEZBxU19obirbvezT2fKe5Zvb",
  "key4": "sUGYysmcqis7yaHsmr7uynadHVvG7GxxHUeW5SxKXeswnR9cXi3DtHMiyhR7NpVDfPqcavBh2wdZzWsdn4NDVcr",
  "key5": "36SPi7UWSin11qtefZ3a2gGM2FhHbTG3wB7HFiD445tF2SJJkeVAqphwZP95F37o4SLPT4UB1DwRVi51vZciHNZf",
  "key6": "3x4oPppy5GYngmJDBVwf114sSfM1qJfZbjD5mapJ4zpVBXEyFPce879KbCXdtsjsBdMVw2VDTcmu4VTbriT74CiF",
  "key7": "2ewnx25N8LjCszQMQwocpRdRhhmioH961oQLePnnUThH1dBXJmFMQ7irLfyTLACxamPynLEeUaJhLT4rHZbibdct",
  "key8": "2kx557dB1aUZtkjsJPkWgrUstFQDFYYqdo9W5EkAYWCq1qkkHEWS8L34EpDTFjktHR4Q9PMdVbMBJnMA2tbNkc95",
  "key9": "3FCVRpAvNaKGP36kVYdmgS3m1LpGoopdCvXK1sXC4cxQgGYhhKsRM3yMEsWC8UVHKnrw8wwCvv4MosfE4SAt6QZh",
  "key10": "4KzGUAQu1whiUwAsH1BRk9Zm5UwFvxqmyiz5g66P7wGZcTx5SHBYYctHNGw7GdwFLhTmgHmpDRpyYTA5We213zdG",
  "key11": "24TnuAF5YSsGPeD1TMV4z4RUJdJ6Q8E3LX6cAB44knBs44q4CrJdcXDoTXwydrTrHVLcbDKP8ggDU81x7DWGXmox",
  "key12": "5yawPMHWKYm55JV3v7Zp3jA6bxWAeAdeeBKahjAs1WW8DB2cqYz3WujweeTYJE7U9oihmZsRf2fTLgChTr858RGZ",
  "key13": "2RdZ9LPV17cAjVatwL2BRszf632SYYuzBkUgo1ijDVXESWjhpp2qajVqE9fNm8obMMa8RVB7Wz7mj57WSr1aKcnb",
  "key14": "4XLoSAMJoBCFMkWLMUmvgoF7Qj2RXXdXy6SzGAwnq6Bacnxrf9fqLtksfwyJZDZSryBf9aEjsLQmq9KMQTT6Ttv8",
  "key15": "5sv83pRyPoPbNYiQzS8DdyGrvyh73UKbZ8gz4SPGYQdPJuRxrcEgs39SSibouUp9RcSLdRt3xd3zQPS1GqeeWy6H",
  "key16": "4n3S74gcCr1FgLrYLe6cCzmHRdy8ggStuX5Jz4PmpLEargqVwj4GNFzxKQ1G5vAA2dqnQ8wkkQftv8JHBed2ovM1",
  "key17": "3Wv89FXtgqNKWfsGiWQq3CFdb7SgSam27q1xsP1TZN1fTjgkS7etABzN3df1brkPSuM4AUGmAhCCF1kwfbS999pt",
  "key18": "4S8sCYmxshZrHg9fXwnb1QqRBzCDcErELbxDVquaiAmWBfp7do2qi962YVkxmSSMQsYeFb8fBz4hPdhtXoukDiur",
  "key19": "Z33ozkEVFkaajhiisNtYgjXJu5iXLJVo2sQVWWoiMVDdyabdZC4Mjdgc2mLKiuf4dDETm1QYVPcdQjR1zYB8AAU",
  "key20": "36yaHvXaNwemkjjnFqxemQxXsHrfdwwkDFAW8LEP7vymbbHSKRs8vmn3HnyJm9Wro3c5KDEET3B54eFzd2oQUd7V",
  "key21": "pG1eiD7qztswhReKXzyf2E93fgUhi28mGNFi6RqRU51ek9dwvoMKgRHCrMmiXru5aHPC2LCbHweoGkPzVKFX3mp",
  "key22": "4vUUnjDYirmjuqoCTEnJ8V2FDPNFbgZqaEfuiPpmuFs1bWFJdqdh5PriXJ3fxgFmQcCiQD1D4vn6u3ofhe8XVA8f",
  "key23": "2FRA3Gbt3auMiJL6tw3FSFDQGQznVqcyeozqRQXbEsubBdoSE7ETMUrq3dcfok2Q4CEZtybfFVKeygp9gdX6yG4u",
  "key24": "65CpLy1curxyx8dAjMc7MqUPVNfo5gkbhMchY3crpXHMuLQfkPPmc2wq8HEyL5YSWdVVCEHAepj2imTKNQG71x3v",
  "key25": "41VyxvUzCEJirDYDLjCPrRCDjxjL2ythk9oxW4t6RGHTFAyeu6xBPETEDisMoVcyaiPEemGZ4PkvbEn7Bmkd1Uc1",
  "key26": "4HUUVMg98qRoLQBqWD9Qi8cnwCJxEyVgyVxjousT9MjMSbtPpwNKDbX8g9ZHrFwPhtfgbZuR7QwwGwTwCevkP9da",
  "key27": "5GRSttqLtm4BfcJANWTyWuFchpAeRCvExisxiptu8LW6LhEcPwyERetQxiuBjyV5owEWadsJkebVGiWNQHbvtmPv",
  "key28": "2oFTWNRDzvdetpWw84KtZmhQC4sTQ2RftNfouKiCkFBsmXgQzj8LtMhRFgk7nj3ZCJFCohbML422RZu4duLogSmu",
  "key29": "5rugFSRGnvxDdcfpbbgixsFX4YG9rRSHSVX4SVJushrrzHFYsxt2nXwTJc6V9w89jvH6dsHHnWpAN1QzZQ8ivgxw",
  "key30": "2zRNe2UrctNmvYt2e3RsYHLqLJ9mDazg52bmroGkyJPBQKjHNudZNynHg1erupeD1hL2KX9MD4xct3T8W4wBBmvP",
  "key31": "66d24DXGqd4V8XJwRzSCUACM8NhdLrYpAumwTtuNqwMf1N35VbyhyrGqwfqXr8qB1ySiZRYKr6jtxjZG3bza87Gf",
  "key32": "5wgWcZAfW4gTivg3gwaP3cU8LRXttsDn37T398qo85EckjhtnnWNYwLS2wfzvuvZq192Z1uJxBX2euH1uv5B8kUZ",
  "key33": "3e3ab2BQWyNWCsCcD2dLiNZ1NuaAqZb67NYpJKoZ5foBp1SUN1Gwg8rnMjixcUYdNnJxVut4FXH5brUhXGU8nF7X",
  "key34": "5676iECBpM5Nb5gsBfo5pHkJoNdUV5GYzxcczzxQXEHCRRbnGQxGxnJvY5PaxW1XUjgaetCkh6EDkmfUByXtNEFi",
  "key35": "44Gsf4dbPtVQRBwd5hY6b5JmhW6hcEzM7zF1kNeLtE4EewxmKyhS1WhHjUjbYDkSmiTSJYL437v121SFiLbWAu1",
  "key36": "4DJiXmE3MGUXh9YGqReEwWkAcF2GZWLL5qmfHyA6Kit77SsFw7vPkhpMxRx4JUN4chrpviRMkJ5b1TLbfCucv5cW"
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
