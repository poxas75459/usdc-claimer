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
    "5JYaaBi1pvtk2HFvAvPGREnBk27msEvX2fcj9oynPDN4KVk8PmKTtVttUBoMRR3cB5pJTFJhNckczmqWicyT6cuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2BFvmHYTbxJZZWvJ99BVWmzE95E6d1XgxHFyHxwVacQsSxmS4fJLKLEMugQd8C72mrnN3K8SaNd3Rfw5Gtre6v",
  "key1": "5WsptZu1GGyn2UFHXQbnH69cM1yD9cAHRdVnJckfaUnWc2wjNPxRSV8MVMbxcGusw2cPpL3T7EiZ3dQPDeoJkjUR",
  "key2": "5XZqB9ZJPmsijyPHR6v9j21nXqX7XfzkVvNAFbKNTP9Kc9kG6BcGrjYGpMFrZQrKi6cHyQUW5Z9kijhRxmcH2kGp",
  "key3": "4sCDRa9R2MW6RqP9hiStApZHySFEpNbC9fQoJXZomoziPt93FmyEzbWQYFATRuH3oR8F8Sxt1pmG3oMwsFmpvvbC",
  "key4": "668MoXNZEQN4jCy9oAJncVfTWuPPG6R93csJhpBZPCKn8J3WgdodbMV3vhEhyp3YGnZwKXMve6hDpreXg5Jq9fNn",
  "key5": "3To7EKkzTbBnjmLQWyVhgDj3LcPFpZFLG6y67jrvo7fkdLLkswSp19GAwwDmdMFSkYaFJSpBrpRH7ShMGDArTPKm",
  "key6": "WhLCEpWNeDqrxEUW396eCN9napN84UaSQ79NPRyBNB2c3kLfBPoMh3DDd34DrZpz2uPdFnxwqkSVjNKYFtSun4B",
  "key7": "4J35pnj6W8RQbGnA72sUddwQrrhx4M3yfbc56LChXKdDjkoTZYtgJ2FifVsbA5rHTcxfQAn1FAQ47iaZ2TsK4aS9",
  "key8": "5vzKc9qbfY95QRHcksKosuv3G7BimdA6DJ6qf1hgCAdBhAUjCe6NMHezqCVB4dHoq5MEpJEgJYALWcz29nTsV5aZ",
  "key9": "4hhtCjjirdA2ZpHvnCD67URkkYwcKz1nH1fMwS8gjnApdTsKa5LaQxzf8aKZbrLDgodUwetG945Sx2ExZshdrkPW",
  "key10": "37uZv8ZkMX5PMfECxpZsiiBqDjWq9WfA88gZytVJkrfW1rM7RASJEMAoJEs4KvnZ7vV377tWjjrZ5uQbtxvHH3J4",
  "key11": "3KQjCcTNatAeqcT3PqCx32o2MqpepAZ7U6ALUEeBCjBRHHRM6mqhnssidxQWGGxxfjnU8ZF3TmowT85Ki9EP4Mnh",
  "key12": "4UwcfWkwHMXfbR5dbpLtYFHNP7JVVbsDfrXzYZdnWWSKF6wHEiTD89DKkT8avRP5hPx5EZUK494CcVSbcTgbdtRt",
  "key13": "547om2ajgChPwZ6NCmg3ZA7BKeQpcycYjap5DFVEhy3374S2Vs2CVgdwn7Z1qCRtxJMgF6DHRSXbcZmAB28SftWe",
  "key14": "5XF4azfaU93iNZFky1YXwBJTPagmoXgxjjxhdA2BNBuHUmBb3g2v1FjhBg7UvJGDjYXFQXicpN17WCZ5rcNrthzb",
  "key15": "5zjixniriVN6wZq4rjngm5NjGpEjnvBmLaR9Az7X781E9TTeYV1AqQsPwWiFsZmxk8Fy6tDjwbD3Mn6aj3eVwPCb",
  "key16": "5CpLYvKxTSfDuvd4j1YWsZVB5ukMNczK9SbpXAUGRUHoyC2RbFwXiLUNRaFwejMuG58qj8XwWq1nTM89JRHhxEA9",
  "key17": "3UeAacs3t5ZJS2NvwpA3E6ETJXbVE5iqu4Na83owqfWy5C5jCcNrDsG4fctCbJ2NP9fSYev5FVPdfsM2QVYto4Pn",
  "key18": "31F3XXdwT4qE1E6Gc4YiSrLjxWHugPCUYUbJNUvLxRFMufc9sbEVyJUhDP1ny8nbJNHq8zjRSxkkDvCo2FrgAVAs",
  "key19": "26HWPPFd3DPcaazeUruMXLN3sGDyKf1wtPLe3LXNwRKEtPgW6nJeCE1h2P8fkUGPog1XsXefAjQyewWBJWiuSpJk",
  "key20": "565Q3wFV1vzptqzYd9LGdLUHAz9AbiuCpiQTD4MovPfF3aYa9VP12bDAFbiRZth68FmDaVQKd8fVKdSVwQV9vmCd",
  "key21": "62ScJNHjh46fsTaQCEucLb8kbr3qRbzphfv63sno6f43ToSzyCyG1xTjZ2GzgWZAPnPMUddqy4x7r2SagPehHS4V",
  "key22": "34dzmSUprz6k8dyviXhngUPRqjsbq6Uxpdxx6uZ19wfrfVcJXiK9LYkGAGLnZ2EHGkiFYT3RYMcgzQb2GCG7uiWQ",
  "key23": "Hgoswz4A5JjvDpgGF5aTWgjMmFcFTrxn2S9xdKZNb9zvphdEYyEvTqDSrUeUSaY48jdsBgyV3DcMVAo6u7TM42f",
  "key24": "4YVVdSNiJDhEeX9JMZLFxbMHxyduz8rBXHu285cDFhUoqJiFm76jajMjsvQxkJoCMa3RbiE6uh2Y6FrwzuA3VqmY",
  "key25": "Qx7UTJwyjtV4M3GGcFyEWuzsxaNMaHk8YBdxooQ4TDX2L64QHXzbDU7QJGBh5m2qzK6UD62Ym18fMp6d64K58ko",
  "key26": "4G1eXiGVXotQ9ZibkJNcCqsvPzMbcVQY588cd2ssdqXnLnEZZQX5NyNVRN85ymR5ZCfExoxCEumhMs7qW8BNPe91",
  "key27": "5kvCGyshb3KWKNJCWVQD6umqvudgKyJAJfJ6RU8VFVsGKR49pTyg7YKsbJngSPsxYyb8aHoCMn8sVyx9CKA7cVXU",
  "key28": "4YUAsrKrWKoAVL5aakyxv6mM7hsZ3FN7jc2ahkvpwZQhg9Fzf6YNXHV4ft9bPkBRpLJ7tkUivok8XKhATvhLDuUR",
  "key29": "3dt3yXW3baubCcQN58oeWvpC5NkLVAggStKgDf4SvpKVmeKojU8SLmHBrr87CEgCXvs3kTAp1GZbJcEp5xgCntbH",
  "key30": "Qf2tGWeeLqMSiJXhSuSinHFsfYRNLDVXe66txirsuRwrREoADsfWKXHFtfsARgX7RGE7pah61UnVUrenibaZ3GW",
  "key31": "2firNEEmrED9v57ZWCFLB9L5N3kcQjETjrwXqb9odcVLAduuXKVe9DwoKQnXtzKY1ctcYsfKK5ucuPqdqrZULCPj",
  "key32": "3WnrKT7WwuFdTi2ZFLQ5iq28Mr2WdyjARd3WyEfx1i828dDiKWMfkAoX8PkHyEzejAJXeizuzkZv5yBaZ78HQtfu",
  "key33": "2KKSwcRjy3QpGa5fgGruAga72qfEvyudL7WNuzYgnVq4ZahPXrd1twDeh9HYSk5SUpkiSidSvoyb3wt1gWcavGwx",
  "key34": "3aQPRDGZwPUGSfNP5z6RmEk1fW8hrN4uAjjQ3bZmnchdHz1yPqFUgjEQyV8vEFqt3ps6EbFeAXuHH18vWdfocUUw",
  "key35": "4ZnrEmsKxxWN7YWCTa1M798yrpH9GNeamxyRnGpmBtMJbESj59s7Ev2Y5brGn9zsVxCbhq4vLPu7itHzbibCk2YS",
  "key36": "n3VmtcS2orwpEEXT5Z1wvZN5oiTaYUeq2wwn9inobUv9vxGbxfsScD9vF2jTSVsnJ1vd3xfJXSoF9GELy4LpqEC",
  "key37": "5a36BrpdkABArmfyzoheTbL32LJeNK3SjSyHiEcztwjKEYGagnE6soh51L5jNu618WFxQL1Nzcxn8Qf7baCXJ7eX",
  "key38": "4kVyKgcz9ACsssrL7ZGYjCeyQVtNzsofUR9FhzcV4fJCvFnspkRtWmJUWSTQkRfSyFRNeTLHa84X78JHULCuCtye",
  "key39": "3Q9ZJxjyTLAU41YunWhfqAV3FMLeRkeTJw7a87Yq26jTo3kAuDmgGHC3yNnghdFYpfq7ewTsYg7F3wRAumysGaiP",
  "key40": "2NcmfZsTj42Acta7ZKJQ1DEE2nmk5JMPcxFBgDyTNpHuaKdMaaN3buVaW2PwjxsFqzgDCp811e7uhxzTRDMBbRqU",
  "key41": "4usH56NEV6eUSQsWENTFj982U5i8mhSz5U1TH2gAsNaPdkuju5755aCbNmRnZCohw3ycVLDMvCpqPnfd41faJmov",
  "key42": "2x5n5ikbp7SfejRzM3gd6AnCsvLhKWwzN4cqBtH3ty3vXR7fBXC5fGPeo6MpG7ZK5ycJRh3v4DjgNPNxpQJTfg8e"
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
