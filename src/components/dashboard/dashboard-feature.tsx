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
    "2WqRwxixfG2M7BUgFNW6cYZHypAZ2xTPFeGmJcAxDac2mveZ7rggnt9x2vaHGbyeUpmbdoJrtumKtfxRgvWUzaaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7W1qpvPgV5XLyqy5xqL3fLNHaTaTjb4b3RtHWds92fJBGLwVncrM3MWJW2cNaix6KguqqLkScsN7Gt1wqUCo4n",
  "key1": "3GszMhVJhXA56SKpmCdoJpkmP88AyKpbRdpzkQyqyWPvNrqj5uhrKbFGZBVwjVhtbQM66wCpSdH2kStqkddrxSrD",
  "key2": "3CgQTs4KW9c92L1GRpn72LubHdygZnpEF3thgAG3ioqei9iZNKbiGHmmk3uGcX6WeucsCjnfKFT6UX9WfqMFzJVi",
  "key3": "43X6rXLkLkEZeZbGwMRBgN7LhYdHNJYTwK2A1xD5ZRACskUH5Ban7hzgMkUQYXtdcb1Z4QwWsdes7Zx7oambMD3u",
  "key4": "BCQFRXvQ6sg1DBdF7wT3BLnc7qiGeWfimddhkyAuCxBSbJKcvoU4J6FAnRMhN3UkR66typVBcqteXz2vYpB37C1",
  "key5": "58pstbbuabd1ZLf2dD8cJxUzBtDRoWgSd7E5qQHJeDbdKMLJrR2MNrPGuRLoKhyQFfcyGEihiCPMapDy5tSRfVAP",
  "key6": "2z1W9bRzXAgQc5kSdbAdiLvUNaPTb1Rif4tc8SysoFFpYK3JX6eNykgRZotmMHzH5fLK9VHF8ELN2nfqrDpx2BQ3",
  "key7": "4h8zHer4uwxEbHooWNb4FWnTo88NPXrbcjosighdkaP7uBnvthEFPUojyHyaUP1jCSjDw8k28y7PXyrMUXp6YjFh",
  "key8": "oEuvrMPtXfWaWTcXCZFxa8Bd3zMtKpDw28t2YvfFhJa1eBLWxAbJqPE3K5g5x9D7DCoUgr24Js99nAGqK3UfNnJ",
  "key9": "5PPCAWyVCM3vifCyVe8HNsH1PY1ch1o4YzpwbBHeDvedqxJt57PsqygWsVF8V4d9C5WjuFAud98HnAyLpYk3iFaj",
  "key10": "2kga7YQUdc3arr3F5UvumqPux6fmhopcWfw3kb8fbJ2GaQ8odBKbtyCqp3QmYVFo3Ei7nq4hfqen7Mj66kBuxCpA",
  "key11": "4eDh5pw2V4rEPYtuDrpD5k8gqDqCfGYwjMgVk8a2jGBFbnccm4E9FGarjZGchazizTS3MwkMoU9AVCoK5yV4XqEF",
  "key12": "5JtB2GPAuXNoDGGVyEQNHprBnyNM1pnnGveqrGSUtpWeot9gPCBHq3K6TNsNKxNdRfYaom5YWXZsmvzE7pZ7ZqsT",
  "key13": "mAL6YBr8rX2uVtXVRGmmVgyEWtjYFaQ7KksWT6xcnjHU1dL6779raTXKCyTRwcJzj6EHawpuys5wvZcbWLJjZoQ",
  "key14": "4qnYoC9JVYH6A3wY4LBfa8m9hX1v876Je1t78jYv9ej2F1vTM4gbnUatczLALkSBvGGA2uqasPK9rm2p31PQcuWh",
  "key15": "2Y8gwiX6LuXNuNaekHQkXhRJ3dq77er7CdwPK6HSFvEcigR9vyWC8YnPPJidxLvgyVMSdr6axE3eoQsDyf1Ybvfo",
  "key16": "2G5GoJAf5QaGGHRFhjaFT6pMh8P8acqCVeMVndsJL3GwKfNHc1FkuB3ssPrg6ZsSSxZBkwmXpmfSzgdRDr7vryLe",
  "key17": "5Vw3mGrsBHMqPzhRiXnaQY3Draj9gLaW9Qf1MN7SY2cykcejQeDhwYcPQUDuwAKrPiH4TVQsLA1ZEouHRaMnwhER",
  "key18": "5uayGv6iapenkCem8kmE51Z6TY3wTAzmDZv3QogTh5qTi7QgHrd1a92kjwhvoCC339UbdfzR4XXUc7aQBhY4TLVX",
  "key19": "jwQyNV7CaquixRyCspJFh5T8dwo7YKbh1VFu6MDmMRA15wqt1FX5UUB1ARu6pva3RWWJBLi7KHr2pXjZazr3TPe",
  "key20": "34NBeA7dotNMG3kHubv638XosA4yf7YKeLGRYmUQsu1R24Ar4qA5akvB4sAwa1QjYu6wKd1Y9Pq3MuM7tzS4W2up",
  "key21": "3ociQp9EAR3UZ2d8oeFYNTj9wDB786rfyeSNpsAD46noefH2JjnB265sSq6i9GQyy3kzKD7QJweBVkS9wJcVrRqb",
  "key22": "3BHhpFvwoJDs1XyyayvoNeQfpjwQfc2DRSRe3oRr3w6ni7svDQ8qnq38P8kGbhwF96uTEgBmcFReZ7GSaLdN7GAg",
  "key23": "3b2r9fD3p59GytgtaP4g2WZTx2Uj6v3mandNhT5RHarG6AWdRihzJBcB9BmXY2Ez5oGPf2u6zVNGqq1CTXAQDLGR",
  "key24": "bFmGWKt1h44GsLmNFS9KRtfRXTLwwbwA8rBvKyK3ZEomWK82qqZS8QDGtQnnNwL8qfDcDajLYZWyMkSdnyoitnT",
  "key25": "4g7e6Jb54wuF29s1BzBAaiPcz8JwXSyaXAz9kTsHBvn965KeL4iPWoM7VrPMVo9PE3En77PnDnWYkKezyZmUoR9A",
  "key26": "miJNqJ3mEvfD4dTBtnKhGuZkm362mehHccVpqeKqsLY6AiWyLck31cc2ejqBh9zEM1FhLj4UD8wtnNJSs53pYDv",
  "key27": "46CEfCrwAtzAmjd6vSdTMou2i4brCAHn9Vd8LDdz9xxhtN52EwZSaAcKWWdPnzaBpo9Sa1eihE2EfbELPt9zNWey",
  "key28": "4NBBoEWYcUUZPLN6X7QPYiLiyT9NXo11V99pXGXoBMbVBdkiZ72biXURJKtZnN8jzyxMG2or7CSxkknK5S4XF7XF",
  "key29": "44KgjEFSPKpRoWDprrkZLHDxvE1VtmJoj7M61ujkKUyQnimLpTHYzomM1bKk8WzqpBJuzMbtKBD9vPJZv7BTT6aR",
  "key30": "3uLapZyJazFtiLV4YNtUhtvTNFuFbvUPnvAnAMmLR5mHAhQ7jZwZQxKHpVLXBm4rG8Uk3oa6wpbcgyrprwjesNK",
  "key31": "2ATB9Ab86yjc5bCrdfrFdZFYrbziByBPwA1PRkMBnrQ3mnjmkWxJHDkkKPhxEDSz9ajVwsW7QLQ8R3eahrFFi5dV",
  "key32": "NzCJrRRqifLksFGCDzEUzDPh4yEJ4XCS4Bn2HcexscCumAeqH8Mp4d98hW8F7ETkC8VmfaB5udZqpAjwERHjUFf",
  "key33": "5NWVy1T6UFTkBUJMpt9qvW7VJUBTTfXbKBRXZTs8oAiiUDxpFWBPbYj31uLfmfLU3eftL26rSiCpDSh4kaysdtan",
  "key34": "4pvpcofoxJA4wHPxChPKZKoCyvh86LHJphdSHuJo715L5kztMHnVzPHjanq7ib1Q5cUjVw5Jfghy7qztKDutMnD7",
  "key35": "2nhpg3FnKYEFo3pdwayaAq6SznkPL7jbCGbJic1HpRHGv36VwpkCj1UufCmAnBZWgcyJ2JKRA6FPg6JN75vMb8NV",
  "key36": "5kfsmxoJnhnUPAxLJ3xdX1sK59FqeXMD1a5owkFfc2WfC5aDmHL24jfcJXNBw11MhuNkKirgnC6cmnidT9o94bLJ",
  "key37": "jGfP4kx2sVZJV5dY8xxdeNX1GCZXEDGZaXaLVgX4CSM27Ekxsq5s9C7nPZ7SAGPTfivpaMxrsJeeFQsrrxRRJ5n",
  "key38": "GYfBjNW4eYjoD5hnMMDavKPMJLUMUQcVFvEQJmAe3cfw81HbfRVuGDq1rTsGyGRn9yf59vY6TpgP7m9TVw9yXLR",
  "key39": "3QjQLrRMWdLaGsG6hD4JREngnG15sPhZ98Qb3ZLvcMd1MK8iATvUzqCmk2pJ2AYDi7EmXujTfUHU88J5fJQxssfL",
  "key40": "3shVTAB1EcPH7tgM3F86VTD8XsDeTCCTaVRcevM7TvDubTcrXQNqh9XPoLuf8yyzNWxdajfM4eNcjTNu6Dbp82Q1",
  "key41": "5Bh96fos229jBJD2ndKFWVyVHQ2o1s4Dz7qkjmkEKcAPRh7diW5cGbFDgGv4CjjnYpn1cKjBNeS1Br9u99mfLLN",
  "key42": "WLoScECHPpbSfq4ciph5vjF4dLo5Fq9ZdhTFMgscxZ2HoCxWbBRJqNbxwXBxrahebx91TQJxVbDRE2w7DER9vfW"
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
