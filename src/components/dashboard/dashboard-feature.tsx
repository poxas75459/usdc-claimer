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
    "3ZndqNDu1rVu6pqdvHdmea9H83hppN9XahgJB2GQrvq7zn4P8EtaC8BHbyGLdJvP21MpdK7n3ggke6ZTLt1DMcSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUABTzmPLBdZs4ApeReaVR5DwaGtNtR4FCrBYViW1wmh9nd1fwLYWmsxxncHKCzER8yWSH78CWC8bVw2sB9AC3P",
  "key1": "3UTthv8nirkU8xHc3nnHxrF2RrRWAdct9ny2LMWrVu8okTvwxRAMCARwcUVRbLeLbk1FcwCMSS35e4Lj7JoLp9ek",
  "key2": "4g3FL2PDt3kziKyzNCWF5hpnLcEM4329cVkLP8fFkohRTefNn3qn8ec5NSmrcCJeNbwybe1gzBceYD8oqFL9oN3F",
  "key3": "5ZjG9W1FbsjBnSBA7kyvgVyaqd2YezkzvxcrSJjxKAS6YMC4yKJCrYGy1EFdaP5SsWEDGW24tdtpXxwS4Nhv5h3C",
  "key4": "5h75atrHRgzTRXrUwCbcfyN28xxR93ZrHFeVxLgumdFEezdMVic9d8yh8MZkh1K74B1sopsthPbQieFUzZjbCdcg",
  "key5": "47TSnCdupGj8bUBuLRDSnPVsyt9zEiT1LbQh9FKpy5vhGomkGRTUaHKYy8g9QFred3ftfvg6ztdiqgaRE46KJccX",
  "key6": "5gy5CvxrCq2pDsRpGtdpVuR4hzDA48QwMbSqqi9tUeoBL3zPQZeAguUpUmmfYiDFFBzjQikAS7niLg5FGeVYzEAU",
  "key7": "3Tvk4bo1siFnbvJsPDCVmAQYPQLssdZpcFTf1W3gSE5A7qBgM32eNurc26ZxuFkAqbJ9jUBGdGZBXkfWcPMWK64i",
  "key8": "234Q8rchdEd5okijs38zXq5r8N5EL8hnj9YRpmJZbV9Bm5Bu4nCuhC6Eounkv6pZez7FnL2ZxYrSoS5QqsiSWRJ1",
  "key9": "5zEaH1hgp9EtkZC6KwoKtZn3XhsmDNR3KqzVBAZJjyCo74Uc2ec2C2DGDMeFNosX7SWgvqaCMHafmb1cdPzDSzJ6",
  "key10": "33bLoWE9V9rK3SkhdCJP5ToF9TjQxDr5cJEb34o6PqJJaQ2VQxZDZapqxkRrg5HJ58GfnLJFkLkFLdNfAGAfcXY8",
  "key11": "4yxhy1uNx3qtqCVerwuQ7gDWgNGEAWHZw9M4vJn872CUPZzUknaifozsCSVYKXQ41S2wzMjzBSVdC34z6E5iHqru",
  "key12": "5BdLPG2LjWymfv4PuvGxdc24bogMrHNy9A7jv5WXwk4aBCrVaC3r3X1k4DCz7NttWZr7AU2sfoZdESKuvV2Lu8ne",
  "key13": "1s9wAA9dPVaawujHM8yennPMaWMiGLbzSx7t4Q1Cugo9bRNpvMAzX3fMGThB4J582X7Rcf8eUEV5czW6c3xBbHo",
  "key14": "2MdW2amMq4pMqmaSRR676j7CxJwRqg86Z2MEz52Ztg2eQxRVvzNJ9N7cRqnhEsvZ18sXaBSbLHNNCCjfy883M55X",
  "key15": "EmeuDTUrpkKKFX4Hn6NKdKboQpdCTwMGbGGc8eykzgjZ4EWNP3C3RvmaYuxXtdNep2hN1QNuHh3LjQh4hUr4LHv",
  "key16": "294i8GBf5GNDfviUUzspbVeakMr8GJ3ousY3MzbqjNDtzNAjhSHXb5yU69ZeMYoPbtHeTFAZXVEiK2RAeHyCv4EZ",
  "key17": "3rgab6hQybFsNFJRLtyP2BtN6hJVZTiSU8fDJZu355DB2xVQ8CY9PVvembCAcKi5rqDRr4Z4iNWVh5s7abd611ke",
  "key18": "3SXLE6pukZRBUZt9QgYJVo3EWiSoxcPm2uSFNjgx5oxKbXxVz3kx7PbUExfHNpJmmm1gnh9pEfjymWNm5JrGXAZn",
  "key19": "N1NAd1uJKYKpmX4k2j4F9JdymorXtJ5poeK6sxRMo1AwaZeewREUnoWWPNFYcQLQkvFfAWmeuJkASWLWbnZ3XQc",
  "key20": "2KwS9otkpUa8xpmmw7M2mgzXMXAvoHZhxCoQpqSgNrPjmhc2puXzX6ZAa61bPReXyNRxc6rmEKoboZH9QSjDJ42F",
  "key21": "1yvN8TbtcUAPRvKkebWQCsuSeMB4rMF2iKntwQtnKk4LCHdcm816rW8hzZpcLsRHoCbHnLdCoSeDkEfaXrPEJhW",
  "key22": "zTk4sKUSC26HvsCKNLtqHbqyHECyg9H3WrdaD7ztMF5WevfxiRLV9mE1D5QQDNiKdTNhG8fRLN19fkMzMBNrjWP",
  "key23": "328z3vUxXVN8HP3ATUixzM5M8T9aebr8XxbnDhuhXLZjkH7SShENCYHNrBYL1fPfzWSW66EYPBjBj2JoEx87b4L3",
  "key24": "5SfPxdoEdPEeKddP6kTDs1KPeTawyH3mZYqnqJeLyj4UcGA6Z8yRDZAL9GoggHQSrCWYKntav7rVeSymt3CEZC9b",
  "key25": "4m4WqJ9Ew7YfdxKZkX5s9NUAyiJQDXT4PdnfZLP9oiCxAD1TvB8hSu6cHk2bdDd1Qs7u3gfuSb2prSy6DHqref8T",
  "key26": "45WJJ1zAyx4Zuaik3CCTWM3ruxBKd4Kg7AaRUjoV56kELfuqMY4qsBHdpGXzVmwa6Ls5fGZboddpGdSTX28gaNJd",
  "key27": "5DnAituVy3dPSiWr5fm7cpnSWNUNH3Z4RSM9jnz5fgNA9YT8os8hcRg8epzXHHqkqfCiGGMDZzA3cmuTGdkrQYMJ",
  "key28": "ZzYw98ehAet6DuLHzbRfSbuo3z9sqVjhokvfroCQsfbDVEcbTyN7QyxqQtmnmAPLoZpKHHov41T4cJAuzBMvtmA",
  "key29": "MCMJddu4B5qVm2USJhDh2FiRMeii9QoMRhV7qGMn9Qvkzs9q2YYsprncY9P1tdCeVCkV1dpKoyysUoFP3uzx4sS",
  "key30": "46hQdeCFnUkaB9sxRzJ4WMxBUtjdyogj7zJJTp1hvyvAkevQAgL1xyaZfLhV1sBEHLQNrB7GHiSxB9Daf4CLNDt",
  "key31": "2gSP7ot9XbHUnhA6kMhuJApaZmEMTFR57jKfTfuviqZQbgLtLB6kB4qZkPkF8nR83cwmkyAQUx8qM5DzbRMgR5id",
  "key32": "5d3ZcoywCsBZBXE3QYoVSdLDVsfci9S5wTGUjiCdVLpXEvVRz7t1xMrfeqH4rhvkfG9CbnqMkHxFVMcTGjbF9GFM",
  "key33": "4FRRQb3Y4TzZ5ZGCUFRQWiSC2bJLAAFXaqRHhNMvcaTtcAvHNyBhBAoJp12CnnyqthZw5K4dekgPKkTaMweEPZSX",
  "key34": "66PmpNTxbujLtTL7TtWvVQYx1qjSaGJ42YSrbfX4qKq4LKEy3krnpAtqibd1kPin4z7mkeHwMSku4LBLHZ4HpStN",
  "key35": "4cNhMCKZcW75YGkDPRvNXh3CxAuERz37729GL9nTmkDhHazGq9o5HCtuUsB6BGzdZecJpgUMbcw36QWyRpqFCcGn",
  "key36": "3cPuxW3XxMWhVaEuw7jeNs8yTLxtgGn69QdyUGRnFtKA5EjCrYD9APLFVumdY3FGDihznVVnD5gmDWBizfxFBRdN",
  "key37": "2WBUaHXXMc2BKVrN2ae79UPs2N7WrHSsNU5FmUpWst5QvQrZp7h4idJW6Ppfd3VEGZFp68YxouitYCQxSVzjpUUL",
  "key38": "5Ps1twRdCmNH5HLFkpo4mVu3XxgxLJyC4eDJ8iRg3xcvkswKbsehoVNqckHZ6vgDnrFSguk5aWkyPvHGBpoWup8Q",
  "key39": "2XRVg1VsG1Ju3weUNHD2bEqGrApXXmy42UJ5PrfyxrTNSBUbUgMTLjivSdjVV7irSfaFeZydpt3g7kYv16C3PARD",
  "key40": "5fDR13euvYRGrFXx5q6YDsoXegbVmu6eRpmGKkL6S5SVExYArKHjSPfpdqx4Ev2iipnmrp43QMSGA6qhqaAYjFj7",
  "key41": "5DMWxdTwQ9ZUrzxwfsm2gyxvXs6Q8zp7TBTwHbpWjDVbaX9pg2mZgaoauRn4JnMF7s3NsMzghLNv2V9gBAER2cEq",
  "key42": "66KQuY6PHYNJ9myjqCbjeoRjZfdYfQ9SjRLSPraYg8M3qfxhpue5t8AZBm9nMi4xwcoj1GK3e6Futgusdcz17H89"
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
