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
    "4h8Q6XrdXruCjgECebGyu88eaLt5enZqLm4ZweZMrv3f6pGUG8RwV5TpwKLYQDRiYgDVmF1rykBvhv4BEANzKtE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYi4DzbfE6j9MJsDnt47neLFZ3Ynr6DRSQ4RLu3ygAD65ofdKT7TqwFqEzkSjYFjygwDpmnwEjFT7sYHgurj3jz",
  "key1": "HxHbp5ZvB6uMaHrb3S6LG2m1Se2xCcAMBqX48xGA5fSLzp4hQgcvTz4f46HhesjAHStg4unq4G4iWQARFuNgQ22",
  "key2": "24kGQHHyV7qLre9NcnTG717dKrHMGFWjMKyvEiJEDxEemQhfyrpwmUcss9vDF8bLpbMuAt9ZybKumWjJ2NekVtrW",
  "key3": "8vHzqTVn5A9c4F3FoXTgYgQaQRL3gcMAEqijJX4u5tbcocgobdYj8iJTfECKBgmNLWiSbYN8rY8XV17ghDGZduE",
  "key4": "4KFimjym6jF4czgVJzLUw2TZdJMvXX8KGPQp3uLiCiHLax4oKk9K4uaaqhZzqL31v3P93YjxEWd8dDwrgBaaZB3Y",
  "key5": "5dvii2WTAdZtCsJ8AsJ2unMsw4PaqxdngZDFsNuiZpsYDZ9P7R4yEbna51bCTy6CFTBwapiGVmqphTmk1eM6jHKR",
  "key6": "29dojzfFBqHZhJRfbj3VhHKuKigHfKVrb7mLTcDMdazUNVRco6NbJgX2dHE3jZrzC3XahZF7rMhS8Di8Ac7Sq8KH",
  "key7": "3UnnupMeyfEPgEqr3szhucxvKaGp7NNTKAqBAJStkbv65iD1UoDPwxyKoKSk81GsnkM1xFxpffysfzqzR32Fhedn",
  "key8": "4LqAfiNZNHoM3jTAANJXw3woAd8K7h67HQKKcpPUucGdWC4b5yBue7oUoUk9Tm96iaqPykngwQsEYdQjUG5VEeAp",
  "key9": "4Zct5McNQpxWKXbRsVAQx1RsCVnKFJ1LyLXKqCWFhGsyQkmthuYbPjsDF5uLz45Vh9jtZ2yhc13VL5gpohLZ1pCk",
  "key10": "2TPJrp22ozHsDWEnnT8YDBAJPJ8NmTUT57RVaDk21EeHnJF5S9UFMgQoc3juca3zX8Mij3FqxmU1AcUyLYND91Vc",
  "key11": "2qpXTVyCGo1LeA9rRUCXUbD1pzfuxhKqEW5seTb7TKzs4zNqS6dGivEG9EmBT7ShxRR3C2trktXfTcPAJXxiJTgv",
  "key12": "2iAVUdaLrjv2kSvi3YMwxnqHZSJQpJuFeH6vBKmp1fRoGa7JVz1dk1xP7ayd6X6N2FBo2EEp54abu8hGzQWkcBQF",
  "key13": "5WovFWSgzVb4owStThf5MZAA8T64wgVNJGM2kkn9wUDnEo7dvWW8brpWGq3chfuvS5sRsKMY1x4vpb8uP59Yu614",
  "key14": "54Gou8rSGrazveHzV39NmcKDNSdvfPukNUypvk3qQuyEuJmfpYjcTh3McMiR5PJchCcDysbJ23wVkk2azJPFUywp",
  "key15": "3ZjS7XVCoPL1afsvyxMc6y3avzdsP4VrPSR6FSnxGJTSrEMSTusmYtiSwYv6XPGCLAp3MmNUHd4uCTwXr9jSZdWC",
  "key16": "LvfrjL6oaBsdv2SYDSHnY6aKy4D5MUaU7jCTfeeZCgdfr2BuGP4WskpHfH261ch9LWkRh7r5FdSwpGym76EYWFs",
  "key17": "2mn7b3zzHQErj4pKmsAhzV4tk3q6RwE4yMkCLwzkmfHcpkiBEkWa4heA7DTmi8fvA7XguG4kEuU8gzaybHa2xD2v",
  "key18": "3hpmNjL5GMrhErWxBpQtdCNYjRcdqqxV6iiEmueX4m1K4JXDD2PWiHTGSTGG5Tt8e9dX6pnbLuiwL6qBS1VGUxLo",
  "key19": "3u3btdEpzeMgPjaC5NoG4UXBPGcZhFmdj7PkvJnUneHLoXZvRuqjnVsziZw3m43c9hL3yhfBKR8mraDNab9DPSPu",
  "key20": "51bnrukLPPmzxzLwmqW33X4NMzzxgXYQoDmawdaN35SzBF5ZYCkmidhvT2694q1fZkHBqYkM6pGYnnD9sWBQNKdW",
  "key21": "5X6J37BZzGmf4hJQjpgYZ9ZAn9aJ1qi5cYvgFh3h5UrHFQZxwpsuKNStgruCvtiNmFRmqvwP22bF2dfTEGddi2Lh",
  "key22": "2eFjMnYyqKKdGT452s2gjxNkuZFrUims8pPDiuRErCgPWJt7HfStLcjQZMzBUsWAvGGn9pF83nfQ5EiEAHRSxKGm",
  "key23": "23G41rF5Yphk47CgAXZeHmPmCbRzpgqbx8b9bTrgYJA7ER5btpMRupaPoV9oqwzy8ukA5DckhAGr2imVX4X7WwqW",
  "key24": "4RA8R4nGzDEALTVhPDLbHB7YHQQr2f6B3GfWmQQT6mhykMupnttUSTnwfiqf7ndKzKbaUsgwDMfq3LVb8aPr771E",
  "key25": "gzukM5AXorebMCHxyNVRZ5m87e96TZbFjEbAGUqA439knFEvFVx9vgbWgRbeMWiuZa92c8uscUoyMpA8e7jCjuS",
  "key26": "AQHVJwHtadBz935HxUsN9evnNJCxN9UAAFek5uMDMNsChCV53wiK9KEuGM6EjgbvTDoMs2xMw4NZ5Zuk6fwPoSA",
  "key27": "3UNW4fFi5dFcYA1xysYyoiaraYtNPgfarRRmU9h96apte8f9HUMStJLgfGo8KmXaAfQCcBXYhdVfD4xmDZPsimPZ",
  "key28": "34vJAARwxU7VQ5qNEh6MGDCFYJ5LKd3qVoTt9ynZDwJ6ezQB7pFigtaRq6bhLtGdZV19nJZxEGVyjysYNf9ZZnXd",
  "key29": "3BKJCyR7jLpRaxnPzcVZXnCRu2NAhogreYx47KoWo3MmL8FkS18YRSeuTbC6L62ijZQMvcMr3aR7EnqqLNxX7cyV",
  "key30": "jLtjzUP7N3Y4wyUjsv31ZY7yhPRX3iguSca1iLzxhG9wkF6MtHXdgkkNvDkTvPajWV2yHAyHcmfjrnXN5pfmXkK",
  "key31": "4oQbYgogRLFxAbMvfPaoFFr2xALGdJPdA23RBave32S6WzN4nvLbXJR6khj74h52AvUd7bj5iWx7XjtuekWZDgAn",
  "key32": "NcGBkyPgSSgGmvKYYiWioWj4JUruVkR2efCevtHWZTbuRRiGDpepfXHdKcyGParyf2gyhRanuEjmVvXzza9bGXY",
  "key33": "4XAqnDBTRaGq6q76ad8wy9hWB5avEXo1kY1pHHnARXEGex2Z7Y7ddqUhvA4UcVpRPaN1Jwrr43yCFTBPgJhbE3p4",
  "key34": "2MSNz11R4K65kSWRvXcxKA3i35QC8xkzKhhb8d99RZnRPipekk4GgawprPJQHYbVeZwTUmKLJqNWcbj8uAeKfEYG",
  "key35": "55JSdv3MQmVorGBDovuf55k5SXXahM7XSoFXSEeFWNXWJ6vFSvj4dvp7jwycQF1kJCCa4jG6sWnTJ5k9JyTW1HWR",
  "key36": "5XSp3p6DXHb3o1D9KARabxXENwiWt82ShGw7sz5ht6ohBGdLfMKGdFRX43VYSEYoMUAGDMc8eDBhoYRBrgT9R9Mw",
  "key37": "5rcdqpuJHnUS5oHzVwfFS1zTf44ubMf8UqFm2JpDD1LrYwp5CpNAaqXRNn2B2EfeS8PUZXEjA6bZmpE3PxjhD8V2",
  "key38": "4ufKJmxf8EYSVFGZR9T5MR29v8V1dSgJeWyDgmFP2R8iFjNGFrpJx4eoB7AMi9iVYBj67pW225us2HaxBSgRWfHo",
  "key39": "3PynDtJPQtS5ap3sxLoLdP8pBZnvNVrCxGjnimWZabRfbXaz36ZkkfTfwUT8Mxue6NYuHoiCxrmcGJw8qajx2fKH",
  "key40": "3jh3th7hzk4aLyWZvwYh3FySdBsMBoJ779XVikisg3rCULefre4yuzqDxk4QKrBBzeAC4Qgimrbn669HC8YB4fFm",
  "key41": "4CcPRj9LeGCm82ZDCwZr4RBazq2VQyqtejzKgfYp76HPfbV8fJcozHUZGxNHqEed882SzL8N3xKcB3RLnrHZdLJS",
  "key42": "3TCroqSUVUPp3aBEccujrRTkexGpM6wY5cCK5XxWTsZimuLPK6CwQvgca2s4pLCPH3AJAtnG6HZZ3mP4PEoF6KXi",
  "key43": "2YgcEAFTMrmZ3jxUJS85ukxpkgQG5YFzGtiENHwJ6AZWRHQomZeY2iDV7uAAZacD6oCjWCHsdXdc3did1GyNJhdi",
  "key44": "5fR3gXfRd9U7x8sAvX5DF2G4BCHTNMdjWT3v2ydm5sz37odTy3Q4VHvKN6mVRjz1TVRWxb6P2XNcuEoJyctwi4A6",
  "key45": "5vKmri6PaLfGJdv2ujat7fXgbYXyBUjM4JQ4x9YWVTK8YrSdtLxozSUiKjhPkBcKVDUQMUN5XLDa3WHd5pDSttQb",
  "key46": "5t8pPNTaa3m1LbCWyPSbpXDsHAtb5S9eqtPCcKh81F8bm2WLDY5BRJv3NSLPaCj4ixtCLD1CkhUyYaDB4Z2cyyfv",
  "key47": "GFPWAEEnbTKz23AEnF5s3vFdcxRNFwq94EtDM7yXKuSrxFyjwPb963PrWvs9iyuNf3Auo56huB51YaoxtSjDVsb",
  "key48": "2vFVz76DgRvfpfKiSeFdYdCMuknPTr86XuQx8Gvz1YK53pZCdKNFRJrVvnRuApQ85zbXR2QVfQ41PQuzRyCDyqe5",
  "key49": "8hWs3dausRSoB7nPRr22xUfNx6sQtd4cfKGcYm4HkmEuQ1FbkKp25XPo1ME6TZ7KwGBtuhhRcwRXAhp96FCRqzq"
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
