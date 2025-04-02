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
    "5uuLBz5PPaW6PuVbKFnKKLbWS1haPRo83ZscP2dePmuYUxDZ8gshkrCC8D5eEWcPv1q5dgjx2y547mPtbWf3PB9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDonhbqupHr5zQMX29m2WkNEaEeKTTSYiVnYQDwadFHJgRmihijLTp6n5LoJsBip88MssvGmGPz9gZwqewcwGoY",
  "key1": "4WSixoo2iDBXJaE2nJ3k5tobeRRTAtwhxLsQNSPGafgwc7nSMEdDMEPy9Sa53GdEABMRdt6QTCqFLWRdSrqeu89Y",
  "key2": "4cM2JS9isFnM93fP7kZoXiQ47g6ehZJUWXCsPhAXy8YyR2ZBTMPDExEWY4sNJfBtAZB15imJcWA22oFpGZrf3Qjf",
  "key3": "5jbqfBFz4mG7guHv4B9z98wjfszkMQ94HVtqXLAbfoy95KF6ub7jiV6eo11A55h122s6VL7Rfi11ttXrTJ5c5VE3",
  "key4": "2gC7gaTRLSkuXEkhv1U71KyLQJwsD32sWFXdHRiwLDPsokHbDxMBxCP9865k9VMfP8L6CwbJxoebdRMvkceJ5jpB",
  "key5": "56xrKxL48tDysFVvHAru4NvRpbqUCuxTebEugT5PQv7TW14dYnEzKd6AVNyzM9hNGcnTMS4Eq8UrawHRoHcgT8ax",
  "key6": "2pR8SKBJV8UVmAoLGuduujicedigJp9pyxLa6pWsWNiVvzzBhTZux4gN9ZHNM2VWRWvV3VwLLYsTZwnEQXxh2aEE",
  "key7": "44AEScXYVEHmMYKU7mvdeLPUT2tzcawQwjkA1AK23hNC15QPfUuW6FMoELZzuSwABfUrVEW5uHpesn3WA2a2c9BL",
  "key8": "4xU8fP8M4NTJV3Ps5j1kx7jmgf2eyMZzdrESEMmbT2WSTv22Rde5d7BY8SZDvLCiejT1EyzoEqGYn2tKfBunQYcH",
  "key9": "669NLPqaja1voWc9fWjji2E9wYecsh2utYSX5d7Kcn44Ksmg6MpL962twEukK9oZMVEYhgjZCScdQa3YoQ4sPtzX",
  "key10": "5RwGsG2VoYdu2QAgz8tpEUbCV69igZSMX5miZfi6qBxsyjpPVkUwU9Ng5QtkHWyypLSq2cC4XJJA2uRaSHjvc63Z",
  "key11": "zSPBSi2TyV7H5JgKbbYPYnTz8xoNvn44Tc77skifESxhTgjUYDK5yUyez7EKtqGoeU8iukS62asRJPFoudC62S2",
  "key12": "4GZEoAantQJyTbZaCrwDTiRit762q4AGWes8JYUeCaqeGxNEQyGKJctPBzZf9TBzAj2prUPfNenE277iKiHvVoTP",
  "key13": "2amvFoAHXFMnt8Gw6yi133NWkRHFpBQwMXioC8JaqyiJKhyFLyzas9h9uNdDh5pNPsZSwLchzAmJrc7uK7QmehNR",
  "key14": "3bj6FjzjFA7sdQCxPzBo2vvpwFRALk798oY4e7Jts2xGw5WfZoX1NSrMbTLYUKN78N6RKAnDvTQS7EBc84gsUSUA",
  "key15": "qupV1aAjuWo2p2gcqMi6sLbFMtegTFKaD6bHbTUoyKa3pQa6Xh27Ljciguhs1GELAJE4htBwtatP3uc1US8ET3Z",
  "key16": "3ud8W3S3anAFkEibr9xsfNzh4a7mbeXETg9LcBfG5kBEFSR1trnHPQL6jszxcFWrqQpQwFYPuc6VNEumuMP8aQGT",
  "key17": "YRWPAEBgRiU1cF3rVmYQRxX94RDgvEeqDqJd1vhpsBgWifjWoxSsG7VizeMtSfSX2ZF2aY6nj1XcMomsiVagF8p",
  "key18": "5i8xohVs4Jr7DnYAyjFbjMnR5rjyJEA5FVirLMWTiKiVYw5424tbfRr8rnTa6S8qqQG9ZKTRQUyLk43ubDbU5pga",
  "key19": "3ezDMWzD1zVuNFLyRpUhpd8T7SaxB85nCQkkjsZXv5QWogYoemB1YZkwjf5zV4NfXEwQuaz7GW7m11okDpCEA8WH",
  "key20": "5TBQDs631pKCKjaFaUdYTDE9MeMA2g9dtjVnwopX94ENx41Fk5EqLFA3y8njv5RxWw3rRfNdYfyn9cCLJZaLJ9tK",
  "key21": "2Q97hLFtXWZaaGNHym4cs8X3SrNEwn6PzLyeFX3Qt9vsG8DfHgcpyAmiSXzNRDaRnYSG9pDSDQbzEwv19bQ1SWBe",
  "key22": "5MQnwgrCyf7RjfpUn4A8xrdzjTpTGJU771fRDt7f1yULBRpFrdnpGxuPNs7iw5ytUpnh1yAbjjwaQXCAbZqgeSHD",
  "key23": "5YcfEbysBF4f6qx5x4Nw7kDcbwiNJUqPHSY5He3Hohda1KR2YkjFqdJGHMhqCucmYTuLwB3MjZi89BHu8qL4LS8c",
  "key24": "4aX94jb1mqF4ePjDqrjbTWRw5vLCsPo1X4Lnea5kA7M6TsLAdnyKguEVVYENNVZp6T4i6ixjUbqQvnQCTSMjQKHn",
  "key25": "618c7EDN74M41PLUXxeBdo7T2dAutmd332DZdF9zeozUeW8E7kTsm3Mv5XAvK5NSGs41ZZXbMamXeR1uzs65AjLA",
  "key26": "QEti3MtEZ3VdA8JYbjrFF6dgUAEaa9dgqQes2BaotJ1TXuH3UCMBPKRxtBz4rWT7HAqjMVimiDCnaBrc7BwsvYy",
  "key27": "5zquxb5QynKsbfyYkxsLK9tj7ohbv4RyQGkxyUMmzT1D6bRU8tjneTKjZ2RJfuEN76qSRMrsU6anJVeKjW7ZYKJD",
  "key28": "249ofacM1Cfy7SLpqZzGKV43fCZ8yZHUHppBPa8wFjB1YukfmwHTcbnZJgzGUyMd25ziwRbxw6nGtkWr6w2evVBv",
  "key29": "2PWex19WYaUkp5PRZ3DQ1HRHyD9qhJWLKyTkM2j81oqLwn7kK2jWYvJopSkKZFFL92miCSP9pyjhwgexi4JMCWZQ",
  "key30": "gLZ5aPrYVDL6ZSn8BRQPAEJDXwHQv7ypKgWSfjnnqheibyqSvsunQitLuSntYjfPehcnDtYADCxBvFF3PPpYe42",
  "key31": "5frGE5HAXgqTrJbQGrpHPKWGWbwqiur9zKGCFjms7N5dYPaMs612ezH1Xb3i7koBY324q5eckBNgupgoZp6Bcd83",
  "key32": "3dNo8ZNx7RxR92UuoCeJjSgJba3RE8kR6JD1s3f6YpB3tVcK2woENsUiX5Hib5WHg1YVbMMZA6KnhiacY9EdNjFp",
  "key33": "2CXayvLPacDgcG84nxorNyimh2mcHQSDR87gaxTsFmdxXSYfLPixbMAKXqmueAgpUTruJdVY7CYsdFNJ4gc2rKmq",
  "key34": "3YH143s2SArMPQpatqRW69Uu1W7BRy933hQ5MzFCSYH39TUUJG3GHPfPt9jZeFAheT6P44Sa5tth46dYuP44233K",
  "key35": "4LQaf1yVRWprPmVB8eG2GeYWEiJ87G8cPnHYFqGhbb7CXtPzfhhGqEzvE2gFxhYZLJaqiqx4ja2wQyEtwhvs8HFx",
  "key36": "57FZzNuFXK91D5jSsJXHG3BvnChCHhDdsAG6aZjta56WmB14FAVx1C6yuYa5jFfRxoe37ztDKB2Uzcv6AF1b7gYv",
  "key37": "61un2NS9M5UKyzF49z9Anfq7fRyXKgHzXcGEuAtd96VDWAQA7Zv9xmXvbsL3ZkmK7817cU2Fo8RwfWQ25Dsma5HV",
  "key38": "3znFEBQAwwCkcZMGTDTQJcpXzhKnmEjTMKA9XzYxWe2jxq9WL2U8SxfY5soXqd1KAKdxEetTvojTu1U54uJgpASF",
  "key39": "4j1pWVMzvnY3SKutpD8fvuSjjt1GE65sLjKWkFKdtEX8D7eMGd8BjHMz6gzQfR5TsYDwBH2wLHuVEyRGZiM4pmL4",
  "key40": "2W7h4PDG9SBMbjFMuUvqtzc6FTnBYxM8qBdARkvCLmsJtVUF3XtRU5KCb2TXrHrbZZkiQjVxt1FPSsms4mUcPYN4",
  "key41": "4KMFbg7QKB3x5tZX4PePN3w8Cx6swMjPjjuXQV7TugVLZcHku5GZPKgndQUcG5LakzdFGxRdsqPnScr95y3DrarW",
  "key42": "2ox2Q9dBcsp2cVqsDhzkWeV3K52nNgoh2RvA4PpwAVywWTfpLb2iaWnu5Kp9Tw5hoQSH58T8UfX8us3rNjLPX4MS",
  "key43": "5ZAbXB5ceWozFdgzqY8ysrJ2YmBWD7WGBDoFMkmwZvzFibvnauaNY9pB68e2W1gvqduuyPFSSwxkHastDEvXdpas",
  "key44": "61q6NA2HkHRSpM2eAd95GKLvy6g9B7zJS223s5pus7EazCE5Fkp6AuzXDnNuiNwEQmmTLvK9x2YWUyrV9RN9i2V3"
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
