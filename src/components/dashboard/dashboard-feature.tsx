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
    "2Y1KMXU7Ye4X61ibN8V6sRJnSsNLf3CMp4WuvYbDHzWJLYd655cq8Ukz5o8CBTmfAfga9f9R5YGGu4M1KeCvas4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mf6cTVXPhcPk9n47wLELWZ2N88CUnw8E6zKCmhnoVx38WNhN9kB4QCK5RDDHskQTYLhFYPgQ8aBSsnMc2K7CFZZ",
  "key1": "62G7FmE7rThiZPAR3MfJJVsk3y2ReKHL4L1kpdf74CvYM6duKqWDnqeri7aXsWxEG8L6zKazcmmMzE7G87KFkUjZ",
  "key2": "3HCZnoUVWTd3XLeRCK5jLeCE8RaWkYbMbjTEisfkhSguuixDftNhocqoyjRgUGcbzzbXn4H1GvApFWDRHtgYwutA",
  "key3": "49UuCM7vyUJZ4TCQbzDXgUZXTCiAH4g3Wa86x29fQYZEeTwCEYDzVT3EsVjpZB97iWUwLdvnafPRk7832LGsNpwF",
  "key4": "4GT6RTbsDriuutGMU8QwSUsJHDFWD9e5m8Aui4vv2Jo2d1h3wMCp83Luy1s3CFVwz7UY4X5gKLeZ7dk3FPccVqtm",
  "key5": "5NyVBWfbGCqps3JuNkqfpfi66Fpka7NaYVk5eAySxAeHV1u2KJgeUzEJxsm1gdW7VZW7sfjgwRsDC1A68pkBcYwG",
  "key6": "D1t2QMknWoBawXu1CvyTUf6DgVNU2APqHT6d2GhbrKJFjAvaTa4yAkgKhwv17AMDaW4HfTxSeV9cqJSFq5Jwoss",
  "key7": "49bnVYWRURPbrrE3qjDAx1bhMsPsnJWkFXBNvSB6BiY8ZRt5yt9M7zePednN6kUxBkRvEumLW8ncXwCmrkf9wqfG",
  "key8": "66MbWSvKaXaqZDqUDmUrVPyy5nxucswojZxpMiWamknvv4F5XUkfctsU8D6AhDTiTyKNc1Lg849J4KEgoUdo2JTw",
  "key9": "4z2JHtADz9kg74KPSUPocaFkeVdQM8XBtjhdP2CxFW7VbBNpsUmDYhPk73eb4AXB8M36k3v13GBigo2mGuYQtvwq",
  "key10": "65JPerx3UUpbWtdHTwo3waUfodNN72gbG9bTx7aGoEAfUMtBqkToVLaiqaP53k4KZ8Mf6VfHPMAsRb15qMKMxwtR",
  "key11": "466hqqwGjTiEkUGnJAzP88bjGkPcKeAyNmPPA3CKPVshsfMFxExQ7Hf6aeoiJVGgJjWwLVUW6VqKUXVEEHy4BuPr",
  "key12": "3fJ6tDCPg9G6RJdR1XkeVkyxt32C9xwEyWVAzMGhtcuiNGRmrKqCrYh6tv97X4MTmJioT9RaYX2uJLbewS2kZPCD",
  "key13": "5ivps4HpjpeLDygSJrLv9Ujfn8fWSsTKTZ1ko62nh1hovx8M3L2mhfNMKtRcutjZVsHTKYkT7NFpHNzQY7AgmXBY",
  "key14": "2vrQdRackh8rXDLqmBQ6SjYwgVZkR9hNpqbaKo276W15fgW4JzqykgMvsT9xyH2HckFHFVTbCoeZCN5LPzwZKTow",
  "key15": "57cMBH5omQpB4rR1XkYK2LxnKqR2CWofEYzazEAxQYVZ5gAx21yyr2eBUNH9vPLTwbRqav1dVZB9JvhxuaJczoL1",
  "key16": "TxDqvxc2a6EqGkse4YfyAEjoAhieQCcg8hYaXCgwt3gm7TQYHEQhiYVvfMsVgcTM4o9zJiZ15Uh4StDLRQ672T4",
  "key17": "5omrGZsXywSfQNq8fTdmjr3xLxq7CXv8wxEKDn9JSooZtQH4jk48Hpqm4yVmcyQtX2MyEABw3UxKaku8zMkHAJW5",
  "key18": "2j8hwN3f2MxuTE6aCGHaNW9TQCvQgKtBm6ZECbg1Sxz57y1do6tQqBX6GGetiuz3ZKgbFSzFZiVWUWXfE1fFq3ux",
  "key19": "wGf4ezAxTiit3gv4PT5E873jQj5by5fd78sb6eAx7gvQpf4va5ATVgungBzywm7U2AAEGiVpEmymxDkudYawVMF",
  "key20": "4e6mnxLUezm6L6fn6Gx8KQqeLmspRc3FaiPUhU1QRvVeUyArnqnfSq5BSYSuEkoZXFtSrYoifu672fndfoGoUr8P",
  "key21": "5CgqcUMBjcDJwHZVGsozEcVXR4bNYYTaj7YftYyShgNYVR2Etxpjm3DHmApu3kS2KpG7oxH3VWGaS7ZpZvEJvSN9",
  "key22": "P5QGzuzhsFc3QP8h8Rjemb2RHLJAzNhin6DTRNFZf3a7jK2oJWFXFGbUt5y39hCkMLFDZgbAuTpnwCiYm2uwNKs",
  "key23": "8PDWBegCh6Yhmy21Pdd2bEGiPaeTcfbS4ZNSvxQDsMT4kyHZNV94TBi4hMeEyr3HQ5DS8jC5oehEDQSkgtEpVTr",
  "key24": "5wdEMwXjU9v1Ch3C4b31My9K6bYN4mH3JjwzuyZYstCHggD16bM3KBxmrYXXMu77WSptVJh6qVEqwKAkxQAZhgPt",
  "key25": "3fsbGtM9xdSyeRY3M3bAFgC3w1pQfUcwBsPKXvsqKZBswWXzQzKpQqqfbRPX24dNBJXqJP4Ukdt3HpU8ihycGgrz",
  "key26": "5z6Q9iTgpqC417uQoA6ftoNSum2UETvnDQXq32LU8bUSsJhDmUsnu4tMMLrG7KYPGEktbw8CfRsYTSgrLYPewf6q",
  "key27": "zLBhEeZMrYnAu4CddfCJvxUyubZvXJrYpjAx5eUfG9NVdFSueV2XrqcxchxJALx3DedsVz64ur2HySf12HPGMEB",
  "key28": "D2vApTvv44VaTLXoHGaYVwZSe1GNHXN698Abf6jhviyKcwqpKPX9MAd9NxtJ92Aoykz1LkiAe56h985s4yrMC6m",
  "key29": "3Zki5YatrosVSXGBPnocneXsGWQPbRze7QRn7DodSLSd4edcqXSNei5g595DmE7HaQ59qdStZSVFcETqzyyPYjrC",
  "key30": "2qjqbqeRuPmYhz4pyzyxyHNEyzJpbYym5EMtgnZigT7Htjc66DwzrXa5RRKo7zK1TXSw7zw2TGk3bfA6kehxQsDg",
  "key31": "5mQn5QX8JnsgXgFncQjrsSYHU2HJqFnwugpTUU7BpJy64dhMLTMfu12k6zLdrrv28UDUxFemcR1ovX4HfDJv2Ej",
  "key32": "56Ejrso3mGSJMgWj4qosL8oHF1JLoTyo6CWmLxqaqnVdMX8uWytioUy9LP5nV64XH6xc94nnyq6A9tFik2kP14Qf",
  "key33": "bBnrkff7w7a21H9YtxESU6suTnta6Zr1UYWAfkBeivMngMJnCe7q44639XxHdsVhmuDBU4b5XutGsoSrdtg7yeB",
  "key34": "NAgA44VFr4drPjZHCm2iLqNzMSi2j4rNcuU1uFDFPHMwYJB79pCRisLG3WhPqCZZimHZLz1EsjoGKhY7aW6dxg5",
  "key35": "n8UQ598Y5THR3DDBdMkebb4MGQAjLZev7w25vvaWd3cwYYfiLMRgYwnPZ9Dh3fvL7HGUcmt4tGFrRVCR8xxtkFi",
  "key36": "2VSfwVTvgWTHuUBdbzfXy5QAgD7E2yLKeQUJgyPZZdqB3iytgrZEaBZPxETJZf2wTSdijgeWDwZx2sZdkEcyvNgZ",
  "key37": "5DgjAQhKsSVeR7Yix7canb9q5dnvRWkMn2PmH9meAUQw4Us4Y7EjuuuKW7rPrg6reGTdKrAfMTH8iDiCnWjKZBHw",
  "key38": "JDC7E6ehRLsMz2fWJ13ki9Jk1PeENrz3ufpA8J7WWbSbEs3toj1YgLUVHhgMmRPaN2f2BFSjpodMWJw8dobRhpJ",
  "key39": "3g5yzzjAqjAkgscgU9NNu3YvZst2SydbjFbL4S8mx4GHsZdCoY9r1Yq5e8wZgpKbE5sHjgL4DfuGzYYgtdFQPn2J",
  "key40": "64qvT3Z7KhBFm8hvg38XMe3x91iAgzVF1xMuDLLLFfie3DwAMtt8KsNSAqfuYQRjh14DPrAR5vaHLck3JDXoACVM",
  "key41": "oTkFCDnPe5cS7oq7et1FCh7Ss8uVFQTS9D2UGRDJE6qJnfHqLNYqTaiTeANZ5JPNJ9YdUBevsUbL2RkeZeJCRsi",
  "key42": "iDQQFUavJuMzxp1SRG1rGK4DdFUJ351psHLMTJ962mbRuhSL9d8SbFitw1Y7qA7qESKPp6GR4yDQynmyzS7Uyg3"
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
