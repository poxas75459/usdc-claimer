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
    "5FGg9qkwfpytfqeFJUpS5S1xBkV3tMGcAuFzrEUQFSYF1LPz4AuLLyNoKvL3xpz4CGaUTXRk9r388zso81AGGMAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HnycwU4LFWcJCMktRv3oYYTLt5N8WwHuc14SqfZU8fYULM16cUgjn8wq6ZoQEcjr18HZxsuo8SCqd9L52Y7quVw",
  "key1": "2xAbStAqc3K5YRF2ep6F5nLj9m1G8cmA1gYnaqEKVAngPh8a6e637QmAfjwaMce5oofiuquMyqCEXS6td46aq5wN",
  "key2": "355syprjU2T2SsUxTMDRVbhqdoZ5oQRjjUiKL8gStBChEg5Wcg9xHwVZXwVR98Az1yKRHujS4zwCoX8nP7PPn18j",
  "key3": "2Vtr3Dqtz9iAz9FJAuVexWGWd5kWX4Yver4YvYuVV7SvibMT3UB5gREgNDFBmWYLxBZdr8pX8wCLF8DpENEiqSBs",
  "key4": "3bx8BKqmH5KyLwVsH8hH1tEkE2QrjMjbiZFppvbBGmkBZoXv157FLUUGqK6aoxtvSgzyNjLCJ97kpAjZx6WGRRAT",
  "key5": "bAUG86EMyF2oDj7XKMHb9j9ZQFP1Q6hNmYw7G9RKqFJe5FFFDVUcXWwa2ghxW5ey4gGo3yLFNVwopqLtkTJGgjc",
  "key6": "33nVquHGcj6ZoA691hA73VfGXXC1AVxYzkJrPGADoxYkbd1LfTzduJ7DYmmcD7AFFMooYxYU1ybefjUfd9X2cZZk",
  "key7": "2e9zi8YugX9sVYAo3QztuNWjJc9KKGfyrzGCFANg5aPuMKVRRXrPPjofxSJbxLwWr1mkLoSet6kzHeAK9paCDbrH",
  "key8": "2Xf8t2CgKFvpRKAG9uHpwHtyr94ew4zNNd78VdDpggrLEwa6HvdfbgAP4Kk1NFkayeJHPFbdcvu5BLj7vEC3uYhn",
  "key9": "2eg5niTWV5BMTpgFPdBX7SzL6FgCabzqRrDKWa5JeGBJt6YSG9F4FXCoaTrp6FvdyPK8ahQWaej2xRmeR4q3eTAF",
  "key10": "CEGtkkJhmUDFCj9QPVB9fsmYEyE7X6SFMRqidhXX6Lp3oZ8PBJXYQEgNGcCg9MsEbPSMZ9yCttVcrHjZga4YRvQ",
  "key11": "284UTqmjexGyLXJ45kyczuoZfjEgdTaJX6FxnSkQMHHR6ESjFmzsEyzPvi6tm8ZA3F3uskweFn4u2FEhBtpRNxvp",
  "key12": "2NSns5TkDiPjb5vH8KH6QrqWRRcDHbf54vLwjSGE1QtHUszoF5u2TWkDW35u4aNV7mTHYHP5gBXn95ixqany8tkn",
  "key13": "4GqFW9v2FedyYUjoZwSckFEUsfLtJc8pxKT6DNkSVwLyDXTPNLjHeU5BgnycrFnD64vSPSckeP63VXN5KqLFsYDL",
  "key14": "2BJm3vU7TycHpP5xdBKqgEVQeprfL1cYWeXAaZGeJLPSwJxNDHAtgu8fLQE7aVq4BXMmieHCoSRvLmutkMA2xJYD",
  "key15": "3T1tEnfU9Aq9NYCmaVy5Vo42pre6XjK4WymFtPgfd5VL6XNdkS3z1VoEXY8LmRQrFkDsbCmUVNJkixGFL1w1G7eF",
  "key16": "5VyeZuSsbcT4Dp6THWMQoUgEgVQHhy8GATUZkVN4UrRVmyD1srjTinYryuyGrA2kLEFSt15ufrdYKBYmAMhsKySQ",
  "key17": "2Xs5DPoSdVSJmmBFu3bYu8E7MkFSJv2NmPMwmUsd3Ckbcs9sTaGoZyqGqsiduPVZGn58iD1qDamPUAU9269mEnBn",
  "key18": "2DC9PKNsJvoT45pnDTpH8yackyDd2JXgefUWRGb3QThNGyAAeg1fESYXrkip87SfS5zhVTDcjcUQCCh8r6HMVMrd",
  "key19": "3EWYxcJT7cWuu6ejoi19wg5Dot9WKhWVoxuZg93xPotrceHqfXFdz2mWu95Az1tZyDRMwRbbuw1JaYrjiZgwN5Td",
  "key20": "4XYEUJ8Fg6mqoZH3L8cNZfQrrXNt22eGvsFcKDeTLuQE6mVZr1wpjBZhTFiUT1K81W3zMvpJysgt7C1G2ubA77cy",
  "key21": "2fo5Npebd9xDR2uRZHxFHcjbuNAAh2LQDRJoTQp8M8XHDX2QkMgtgaReckMPq9sP8i7SGSDnqYiDL9seAnLQrjCD",
  "key22": "2KpmPkXKj7kwcyEnbrytS8QjLHDMeKDjoxjSoe55HLEhqdGUDxyYWMMwdxqsMfQ8zZCAkLqg2tLD34vwsxMdmZCE",
  "key23": "2GaHLxkPRJP5vU2gw5u95jFizKA5VttRxxQnUM9pp17iTFenmfEwCecjFmFMa6JoyLSzCF7Agr2dnxdgYBr588ZC",
  "key24": "fFpv3e61UKxv3qibdcHD4i9t8oe4EbNSptHwasF5AKwTMyH4AxFVCs4ijUsmTPci3MGLWUZdFM3LUUP2WKsmF6S",
  "key25": "5VreraejJXQ63jtPucXdsQMzwALCvocCh3JPkvJezVwfsdvpGoaJqWBdikEthfZpkUu26wCF5a2P9qDECVxL5EHp",
  "key26": "5jA1usyiJNUdTjAxAoh7ejMPgpqQZXGtDPq93M7wdFbNkKsWasxhZf14MEa6bCPuB3mAobGZZFAphyWFFkDUvVuC",
  "key27": "3XamRbc2Pi2bWYgAWm1YdgD1uBgjRft1xqWm8CNvHFwMGDtzdC6my5Ycr1ThshbUVCn8EVtFUW7TicE3KhCooVL1",
  "key28": "2Nbpi5RWTcoDHe3G57YHxNZbUtosR27232C4KWpQmejmsZeWuupSFX2q27ZVTe57vAZGP42s6uHSWR8te7qdiiDu",
  "key29": "4JBy6UNVZHYqzvY9WXg2gM1yXas16qC1gy1hpCFpuntzuQe5kw6Z5p7CvvxBqpvoZjm9MannJRktLUb56Rn6dEEt",
  "key30": "2zz4iKTF34v8sobx4vm5T93g8mEFwDHyjDdjRWdVwraFrHtqeihFriym1QAkCfs6XzLJ9iRKKCY1Tz4fsXBmgVbE",
  "key31": "26H3URxszThpv7pN4Gh7SDm8iJoCrB8W6eztmMWZJphWTXoQCvQvMBzBQJzmCoDahcSHmDSG7XFCNLvWLwxtVKmm",
  "key32": "2hMxgnBETww3ryN4e25cZMjjSe9UV9hc6GjB274DHRrieBTNsTpaQDR2HUDzsBMdr5pnndnjMLsGghnfK3fWpbWi",
  "key33": "2JByKNfgqAHkaeGnNqFGFNXfptfL5oGsTdsTQjoqon8kpewhZWxm5cAAiVpRTh8vtme9Te6hgGKBomFwNtXnW9mP",
  "key34": "2updSoeQPaopW4cKVaHn99vtcDbSFFKGgpbRpqGv4GMpywgTidsNKPZLxMzrXYb3bf43ZXSzX2Mh7eRoC3B5i5F8",
  "key35": "2trLhBbAc1CcDufCVF1U8FZvA8nosow2EvFpfHUh9H8ptNyuS4qZEq6AnnUthMcZZ9p143kfpsLHd8113EdzhKgp",
  "key36": "64wMYsNHY6CcZVa7Pvg9mL7s79KfZFJmDhwTFiYQmRxN1GNHzy1f8T52xwnD9XQM4gTYAhDW4oBL8RWY8FK1dqK2",
  "key37": "3v21prUd1yHnsoqaLrio7582WD8dA1pNKLyUAuC49jF7B3dwVSMaqDLbL8DoVzrGTA5McFt1VLq4yYbf9NWGWfvG",
  "key38": "2Ff8iVuKRtAk1G58L1P79Y8C1wsUiUCYcf68rWAP1u7Vc5byxouZTDwyUmxETGs5LXGHyGGd3XYLvWayWYKnyLG1",
  "key39": "3g4PU5mbktGqcRnpFUAXttQcdVHZsdq1d2LNRN1zRFtP6VEDKGa94rZgBePV4oAFKGf4zvinGu5MVDXMEeJXXz8k",
  "key40": "D9orEozrddcHMte7KK69AGdhGuDhM3t7mes6Fq5FjdMxdKntbcAXaDaF3ceLJtoGeV5YuL7MiNNjReF7y4sCADH",
  "key41": "3i938c4CV6MmSaDecFWBfKbBA695ErAbAHNbPVGtrcXXneS8X5DYWh9wP1PNUpL9sVuHhS5xGDhjyWpp3UwB9g1o",
  "key42": "59MHnkABotLwS7rqvdmsBVxePcYkiFdBb8ksrC9p1tFjZsaZWKmAoq8TDQfRFz3WucCVnTxhPyabx3y9hRRisStT",
  "key43": "2CasAkEoUeJ8JrfhXhKiygnamsSEWysGfGbE7ggZ5pLfNxAqAJVydkDjzubEa9a8Z1urUtPYrQTCkFRgVUg4PUbN",
  "key44": "3tXiVrC3BfYGVy7yuSszxmqAMdiPmSczTxVuEKRJNooqB11emBAYosxpMWbo9fmEkeyVAcu7MdCEogFomDjjwNhf",
  "key45": "357Rrf4a7NVzwPgsdFfqNVSBwuLpNdLZiCvh7oYXouauaZK1axrNzqctmMHRHDYXTQjTTMaSZtjMMiNX85jx6DWM",
  "key46": "4J8KBjCQrcPyTexg8XxMJjjpbXXUjDPiuLtZMhQi2z6ZcSjVoQ6wzfHCb5cotwtHbZGceHe9QnBpm1ukeDQsGZei",
  "key47": "4Pk9cszqCLDLd8Yx18iJTFLHkXrTgBeU1of68NAcpkEhd38cFoHxL6W88J94NMMSxUz5KNBzwao92LWPUKFJhwhs"
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
