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
    "5m4G9zA8fvnoxsgS3Zi9M8M9mj53vmCDbdVfUJtGxD6kGBd61hnnMzLx7BCeivMCMp33UDiy9G2Qx8RUX6UtLyXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6so3A11cZRk2Lsogd8nP5B8JkFvbye5vLWwrrq638YX6XkZXxhY4VmFZS2xrGP8PvoEwRWFjxeN9irReXZEjXy",
  "key1": "TVs5fpcM8WcZ94KrEAw8KmNnWUb5wzjAZpKQUH25DYrYeHqF1rwDp78oUcUVk2KhmnvciGR9EwjwAhiZWFCJUAQ",
  "key2": "1fFQjXgFifp7B7EdztM7dEwBP2M6vtkJtV3pSzPM9FcosH1hrwQqrx7mjeDJdekj7gKTWo9WFtQ3eUniM4fKGfU",
  "key3": "2xQ9mjnoSyLnLg2A7kXtTrro2TqNT6auK87JEjjiXRaRNvKct99B6Zw2SM1tdVMJ96vNfeM96np3m6Jx4iFZYhmm",
  "key4": "7BNJ7wLVZiUh1qRoCNvsVcbgUKy36f491szo5suaa4LPxH9SKUy8cmgo5gdbcb9Ro5mu2sEm4z412nrUnxfEs6k",
  "key5": "LUX9yrKAdkr5Mz3HsohfjchERUr76eBPmsTWJDLMiEjVSt2a4BtuT6JFLK9u2mJ8w1cq8WHyecA6ue6kmkb2A5D",
  "key6": "2rBYawbWKmtAxFGwQf1T6UFj7haX22qPg8JH8y5iGCFcCoit4t2RitKBUW98KVUh1q4sQCzjrxMz4zzzCnb2GYXz",
  "key7": "2c4KhemyMXypCdUZruo4ftTsVVEKboYY3n1iDAy8VpkeP1p1MZD3z4xJV655U3MW1HUbnwatoKvTb3BrfjTbjLEY",
  "key8": "2YycuufkRxNULfapTBzpbG4VY4p33m5gV7YFVTcSp2CXvcxYhVG8VBXuLonTq1Nwx2EvtKRCAmM7pMgpDGXzVSXF",
  "key9": "4zZJ17tSb17gibKX4GqmF25hjyZNPRP3hRs6y5GEQHwJWDFyWYt7e32TbSCfobNu2wmLGiiNwYKGRpFdxKP7yZBK",
  "key10": "5DoVoSLJUDnhcoZ7ntpT7sGEHMDqHE1hdUT2c42UJeZtURVTGynQ68z7DPxwyJ8jfgHFMkRwCKt29dUTQaDNHEfh",
  "key11": "LEnppVEPTp5qScaZiopAJYR7fcfsmNKCtPoZQ6YwJLJddD6VYcTGb3BsX2RpBmaLy6SFhTtfyAty1rG3QKCfwhx",
  "key12": "4x67icG9XM6coyKGui1kXAbepaHounqVyoRkDYZEbTGhC6NkoVU1heRYvUG2BNfWFnEuP1hmGjnvLk5ywHBNzP8k",
  "key13": "2LayfzGuweSpSHGwnkuaNrJCxNv6Bo4Q96nePMUiekrexhgxcH33QHvQQfSxaNREsW19BRfEFvEMjAGdyYuZ3BZg",
  "key14": "3ot6k2M74ZAGZdFDCbLE9A6UghPR9E2Rh67sjqgJJwKLQxWMU83VMwzNyurzUgcz4jw4NNjqE15vQi1xmuTe7hWR",
  "key15": "56XdCg7P7EA7krnJsNcWR9NHjzJCqi83eSoqhCHy3tdkHpz6e2UkRMktwRUfsxh3WzfVZD8burdXEao4SYzGPrFU",
  "key16": "jbNz6jTrELGnznaAZdcoWZefqbJWb4rqThFXZt2W6Qb9M2HRFe1eMB7mEUzhtw698Eteh6YwtoTFd1ovYUp6G1R",
  "key17": "3svFcYB4xmMwjadwjzU2PtUto75vBRJBPZYtnHpot1tTgAnQQWpW3s9ScMYEFya8xN3xFFB6197iLXW4Sovt9Scd",
  "key18": "u9n5ynsWxnmK5HobFSmgFTxpKJY84QFj3Eh3trJgh9ZW4BHztjUTfoJUpYB2EvNY32VQjRt4gzkUFhKMeJkbXDN",
  "key19": "55YnPXF3nD7HrHUGccJh1yxuBri1A2ZaNPhasarvk68hV2X25ixk6A1J7YiUXYLy4FD9BovN281Syuej8x4tpets",
  "key20": "3cLX34SVx2uhfQNDwC2gWpMb5qENNur2mp59MPEqzw9gjWwN25UMbKNxLAWUcVcYayyoUpvi43vg9kYCNsWQf8Vx",
  "key21": "4SsUykxZdNqo4Br3w3YXMyPs5spHYfXrrdTCBYAs9irddTeUFu5ZWaaq4mjXajJJuMAw467j46vZBE1zNBYg1MP6",
  "key22": "32eyUsNAiGbhj9ECBX6dxm2QeAYjmPDHLxdhXvHPokaD9dLeJcFktYZeZjfdhYjpM6MDoGK6qJgrNxPHueciBxTM",
  "key23": "55iJyNWhm46sE92MRW1L5BhtCKv6NBzzjeL3zJ59TdW2WWErHnpwTytBJdee1qqSENrb5VjkqgpyYb9gr8QFuGQ1",
  "key24": "4xkS1723ctiuiJWA2dgFEicVv8BkrZX6AfU22V6Cgc6cWSq3zNLQ5qJWobCvErg3xVHWmwHCRN1kSSbGVxNY6Npe",
  "key25": "5B6DGMVz5F6sEskGqT39cr9u9A2mhpBcs6QTNPomjGCfGSdLLUea4u789tJxLWgczEpFF5HPMhVCudGDF4MaYmye",
  "key26": "3zEAyz8tSCm3N5HjCeniro7F9y49HVYEySQDdkWFxnaNDTjSeBXRoWST6GToUuv1P2Rsf1zCkVGw9Y6r35KPthQt",
  "key27": "444CXNmQBS3XoxuErxFR54EvKhPKuchisYLfPmCyMKnCHjbzk5ib3bFsKtmnMfRwgEcxxAcod6Ftw34ei3pSwPf5",
  "key28": "2wPUvQhKTUrXW4MYaXRyqicZZ5BUsKecnhhjrC2M3UMiyNWx4wCJmszpudcgeA9dZuBHFLij7hz57FDnZLx3Lij4",
  "key29": "4fJMNBRj7fp7CmSoG4Mk71UVfvTvvpRv5xagMQL2EBUKbEXaFdZkL5yobMhVux8H3YgPC8opaNekoPTixGL9VUCs",
  "key30": "2mBPzFztBPzZnpxGX2JMr5hH8W19N69qR73DNwxuo3WLVziz5rn3XwGSUKrGHLV7fdAPLWKrtwWyUSyaptembi8r",
  "key31": "2Q2YD3xPCNBidU4AKY7UHTLveS5xDWy8Znq7gGL72QD577Hiu1AEqjbb63HhdEgVPeqafNTtuhtKv6TEGxYAHnoF",
  "key32": "4ryWaCNWscA28suk4iZfpeHU18fw4XVWfD7Bvkiwk33TRv4M7SHosgRDDsCMhXWXHD1yKaxU3KUUHy53Tv2feQH2",
  "key33": "2mcYjZPEzf2a3ka1SvzdixMd1p5MQkoonZQy4qzYdCzJvbf3tGP2qNqmVbwnLdCYSLmR1PvdB1MtLP8W7B96fduz"
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
