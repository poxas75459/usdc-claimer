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
    "3fz7GV6vp6jk39Fxrqzy7CkqEgfVeyHKSq3vnfuHa6rARaYqoBeRnSPRLUG4KbxinDCB7F95KiMbdKU26HoQpaKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLXaFHJf7xL1WJSCfssJyo5qYQPZtaiiztQ2wySNkv9h6YtLHLCZMC3CfhwkB4y1GKz1r6xPP3jX8nFe4rkbaKu",
  "key1": "4A4RV9H26uB3chadkqsiTyV4XCX2rGztBrZaVu5EbB5RfofLgCaicXbRGPrsQiUX423ZCJB3eb9XKCoij8G6J4aD",
  "key2": "5TUY7yuPgFRzCSztD8VP2K6KriXPgcadqVamnZXLWTFAzh7NA6XMGChgxLPsstXPVPpPwzppayUoFTJ2UKMwqsaK",
  "key3": "5jbuZ9SB5GXYruxsZ32qyEGv21jp5wvYRgLjF5yHKbVuD66ssfC4tywewwDECrvWhNSofwexjHvTDAo6xhEQ3UMz",
  "key4": "5EtSX2s9VxFijQFS7yWm5qbQipTkDx9zffirLX1yJ2a4cz8ofTZrKB2ojqymuK7mbtXd5vNj87CsRjWWgmgqTr1w",
  "key5": "34Wi6fhWpFX1eXuCDoSyByKLKpNKsHq7DPU1NnAsAuopRHLPjvyqgogPExW2vNBT46GF6A56SozTRJhwcgYJTLJa",
  "key6": "5Ba8iVwPZPdD9NJNsxFWj9MrCQRnokKJzZb18yF7yzyJrohccRra7BYVvZducjHtP9njhzoKFNNvRWbzaETrLv3Q",
  "key7": "4ZnTFkRW4RATRsa1zsMiCG1uPjqPVsC8vj9Kdehesqph2uwkX5FMSyZiuFM1jzd9c8Fn6EKcrumasSumBML6MVWk",
  "key8": "2UfmbqA3B41ESqLBwscBvZw7G4wqEKqSbc4YUoWejySRLUGD3FVw7EP1v7jBTZMsjqJJXKBQaFzFk7Ff9U7CjDzn",
  "key9": "3EcELbQkDta1vsEnGPY4q6xULRZpkGa4T3Wp9pZGNMyFLCmcWYHpEb8F8Msh3YCXaDdskvsiREHozhUeDJyLQqjE",
  "key10": "5GePaJy87DLVnK7xuVk5revhpom7EZgmhJ4b2ufpzv3tzgFVWdWipsayWhB2VMFPs4XVfSNd3wG6Atusnw2PrgKG",
  "key11": "2S9CChPZBvkeF2fWAgDJsqweH76n6bsCemQhe1c7mrsZLkKmi5bnUmFHPmGAiAAfXXXis6QPQLiD31G5ppBHgGa6",
  "key12": "3ZsXcKjdCjw16A8wWzs3ioMVARtkkHqf42eVB4oScKLSdgmm19qVkn5Rzjrj12Fupq3CBpnaN2hxc5bsKZbjGZjX",
  "key13": "4RArJdCLdd8Ja8nfzsamaHUBc5SdQwLQJ2sAYJimv6yHjJsF1YBYsHV1e5hdGxBxTeSBsGqMjciCb3zH9EkoDTkp",
  "key14": "2Hjyh9JTpfLJGLvnnDmzuuCRvUmsQxEknLAvg577VxFvdVLRycdQC56fUHyXXFQRBoUTgq4aiiZnZ6umy8NVzawp",
  "key15": "pWufLY7zVNyAYU9i76JruXmtK1wfR1x9qH74g2CCQEssFcPk4ZFRhVzHRF6RnhwzhAPKPqA4Hz4wdLvki4h3wPi",
  "key16": "58gMczHbTP7e4o6T1qCTTuDcQHdQr7L3wiwMjkj1uaTDGJwYFoAAKYA1YX1PkikiGf1PJYVCFrNhPmotGgiqeQxA",
  "key17": "GFC9BiJk4JibwsoDY5c5DqfumG9LBhHEXJznporbLbRzPAmkNdrFbjv5Knusq5QvrKRzJ9N3m9n81YVKUcqbhzL",
  "key18": "4QnT2yvcPSoLTNx4LKQGKckAwpcbf1WFGfDURFXTwUWkaCqJXAVGupayugSKk9Sj1n6FvVavXDCMTYoEFvmuadcX",
  "key19": "AGEiUyrzeAZjJE9YBkBpPRfdYyUzYxjc9F6aqRhhmj46z3Bnv8bPzDJ1F3GKaFQB2NkxJyNVQeJ7NSxk8y1KLqM",
  "key20": "25Vfoq86KirM7E7Arf3m5vdG4Li2APwBFh4ps98c7hTfbcVCDPKroqN2PktcsmYAh57jKSKVVJkR3kSNZtT5mCzi",
  "key21": "4D7uzSRTiX7x8vPMtuUyQSDdKANYkCPDmEQJTG2fFQ8sU5JpZwSU7vvW1hh3pYjtKsuA7z1y7z6pdgo5gmiC1icy",
  "key22": "5mFVLqwizEvobC72RnossftCfsQLxGHQEoH9QHat8F2mQbtKWigBSLbteXwt7gbJVo3RjUDZftGCee1Wihs2tJPs",
  "key23": "2WasTScDm62DBCeW1LPr5uBe5Yzp4S1ZXn6Xvy3tHRPJgC4X5LkKsDp4NRiNnQxHSAUE6m79chJ8CqWbvTa7c6ju",
  "key24": "62qQfgZR2nLsdRtgc7MsfJti7HNjeQZBugNQVVGN583WDv42aqde164doVTaJBGMNrxLFs2MEknUWUTE3jEcav49",
  "key25": "3EDdeswJxjfYacyuCyfJ7QvtknRzRLKMG33CA5fiAq6LQPM4uUPQN9qU3AJp9V6JTWmc1fs91kgrY9dDDkrsvQdr",
  "key26": "EUNjw1eGsFa6b5xEi118cQmLn43fS5NkPzrDzpN2SoPkwG2rn6q1XTioesGrrNdUXztehuKdDzRMaievTNpeyei",
  "key27": "4tNuMEZMHsDirY2Tiwk8WBLXkQQfvZ6HiuJhCji9fdoT1a6kf1pSKD3Dn45MvJQ2Lc4R1hrx4igvAdKTbVsSZwVw",
  "key28": "3UM4S1ghYnZzDuCmXUc8bvd1p8NHkRRsjt4TosqApKrg4EwUQktJ9ENeHaXJ4xSVaoFVzt6itfddxwLqzMQ599wh",
  "key29": "LGvRisxy3unw4PofyHQpwRPTu2U1r2SfyNGPFjtHAzWNLMgXDiWaZj7EWNPVefV8dNuhcaNiuTCiuvEdMYJ73eJ",
  "key30": "BmAXsV9k1zhK7Jw5x3JMkFuyKbDENpA8hKF7WXcLbbeQkMAwXybh6muPTP5bUvk1HnMZ9g5Hs2G5N4dSK4emFRN",
  "key31": "5TJKU6JwidU6dob6nxohDkLvsVfNsTgEbnqZhScX7vFYiB9B7c2PHggHvst3Bva72WHpuhtErtVY6gkWgnh1D5j5",
  "key32": "P2BNQVmZ6kv9Bgrg9aCM9oa7kqLBE2G5YZHQqjckw2i4TgFAretKaKHxPFiMR2GKTmWgHxTTKEBmqNfq4qpJhNJ",
  "key33": "jNL5e5L2AcVwVFipYVH4Dg5GVYjFwgHP4TZXddcGqQrtwEpDr5NTDjAJheEQNKuRGS6wM7JdUL2F8pxzfRj12sH",
  "key34": "3Sv6yWYSzGax1DoDB6K2BFXsYeFAzaZeqKE4V1SAX8TYdTVXWqgJCa9aUnPuPmWN2CNtRAfzqbFwVrScsj4You7a",
  "key35": "39xXQ8t9Zy6cn8MLUHWhj8cW1SBGwaun5MocGhqaZsTSnRSvxrcmtkZwGKsuwqqNt5pf1XsAehfqSKT2zZhSRXcA",
  "key36": "wW3WSRR51q9bJtqYz8t6xFwy41DvvxsfE3dw6zztB7QcFZr4ke367PYF5NT2LtKQPh5K6hszJqqpXiuPiy4e8Lq",
  "key37": "2eq345Qg1Lpfxw1xNcZX5AjaYR1UFDsqA9eCRQcRh9krVY8dbocGgcXtmKyVaqzYVT5mJpZSmxth6P58udSiWGoc",
  "key38": "5672kLpbh3211FjT2L7v45N3KJPyWG1BCAtmHuFLznvVy1WudivX7NyfMNTFwTB8kTnvLGtPqFaN8rU4Q4yq5LLU",
  "key39": "3GspwQnqKZwKxqtTdCe3kms9YTdm2vXvZWe67LAF3B7jGHAjszwjGDJHY1z5mMG9fqhooVgVtAjcN435FDQYQ2ef",
  "key40": "5ceaevProsJkXBEp6uuDWi8qLqScRxmincP47zSex62h2imetVGRyFfNKyJCGESpaz2Gk3CbgaXjkHPzMgJZZfEw",
  "key41": "64gbUdJmjhXLo6gZz7xybtYwLWTMyJytVDi98tmiNRDDiNEEVFAoj7xLakimeFoEbpyoW1T7HhHfLc2J38F4E3uj",
  "key42": "54c3VxdKFbYB6enn2rQPzNFGaRPpLAZ1dEhDF8NqZeBi3pn59VbmuNvqq4SEC31vMm84vqhqYvvBz4PMfiW4Np1e",
  "key43": "4SbfaXS2hjSQDoEZcVmfWDen2vz8eGBLHZxF8PG3i75r5onU9GNsK1zGAhFmjWaXHRDdMGAAEqDz2LE3vottxwXm",
  "key44": "Y8R2zqAhpV1jGLCPg8VZo5JpEwd8rDDYsPFHNFTQYzUqqt9SpaZkWLf8Qu1ZsfHWMLqgudUUZLArpeL4te9rktY",
  "key45": "3CFjr4DLMqpwpzipk4o2VQ71KevaowzK8sqGHJB2BXhZNobdRtEkfCFMNUTQs6P6icx3TfYjf1WCJ57VSqQ2mZPW",
  "key46": "5x8KeWSBsycJsJbpYgYGDLEAC2Vz9oGjsXvWtvR22xFYz8dXwGyNNdm4FCL1gsiD1TpAfxZoyh9m8TorMxnE8ydQ",
  "key47": "2T2W8VMhZVr9DFjcEKnNdvHmZutVHNVV9C9GfL3bCQAKvQzJ5rty2LrnmhMFUfU4dSZprqBKWfJ5gwveQJSheoVd",
  "key48": "C44m4CQVpSfPDHVNUtwhPuP3ci2n6moF8G6xetosjPd2ksmLeqTs664PBWbRzGf55Bd5pajWYm8mvpxakjDgzg8"
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
