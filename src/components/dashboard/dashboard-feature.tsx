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
    "26K62WPhxBPbSN8heR1NWnfPcTU2mY5xmhiZbgJ6FonTusy2uHtgYuYC4rKKiwEMMSaAQF5cU8hr3dLWazGYUE7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581Q8NWSYVRoGpV37u7TAmSASFTNidhhWekSb886AYSqkEeKvPkaaMenbL8n77xvadQVJSfCMcKhnJME6TZTgKH3",
  "key1": "3SLZNTFfcJeDVrMfNDWGMBpe1Nwczu5pFdjgj9uPR3Z9bFMAAZzem2aGAhApjz3dXcyrnTBwHKmiFFTArX661wJL",
  "key2": "63wQyUgabcUCG8xhFou2S3Q3mmvBorrRnrZbE56t94jEHaFaERDCG7oPmfuA16NFkfGnFdYt9faxGMLtDQCh461w",
  "key3": "2VKaAkedWV2WFXV9f4iBy9gPnZDe93CNzBdD55tEpF8Dx6co3zoG2Z1rqkKwXqPGrv8PYKHqfBUQTtPgT8zjbxkM",
  "key4": "2ijexvVXssjZZ6mpSs5YAjUuxnBvpx3btTZ8xFyR5ix7cNhshGNStEeSD89QKFgx8xDCYNg1UMugZkEch4rviQTv",
  "key5": "5AL9KxfLV6YQUPHpYkwrx4K9YniPVqcmz3ZRgpBvcKsHSFvtWZJxiFsk7g3jvdDTL9CgKsBDrR6cqumh1bkSCBPW",
  "key6": "3GBL4E4noD1CqsaMh63sUNdwTTdJwaN2iKF6jsNEnu9Ei2TKvbdxLie5R21mZFe42gSqVgD7H74grSad2GC989tw",
  "key7": "3BQ7p4bddCCuCJHz1vMjveLVasDNQbkiUzgzcZERfGiZs7YfHhM5boEK1avPtiDrmgPyZiDy7sRreZvpsJhsuRAG",
  "key8": "55zsWJgu7npQDWpeEULZwQYuRtVj9wibytMkFh5TZZ28WYpZDnjtcv2Mm34i1AC2RDuLEvMG4tu7DeWFEZuXZfif",
  "key9": "RqXBmstbdsNqy1Jka7PJytYUvDshev2PvjPPwWrCBShgD3DpPKaJ8YpunmN1NYJY6Pok3hmdiT1jpBCcsSsSrrz",
  "key10": "22ijnJ6kK1TmnTeJwKeZ2U1Aah1VW3e4EMBSAfezAwCygkBQa3hp1Ttgt7Poc1QCWLdMf8yiMRe6tDBhvP81TqPR",
  "key11": "bYJm2qapte6MZBNjuFHcQG1TTMoYRNtL8vJDtafPeQrwjrUUkjCkwSnPcWK9KqxpCsEjru1aUYhRKSuar76GJUg",
  "key12": "2aLTZEh2sQ5icqkg5oNfLqg4RakqiKXSveu2Waixi3DcfWfqQfECGve4TwstEdunFNkFCruKMccUuGBFPm4hRAt7",
  "key13": "3yfNDJgdLep67qMFvWLVtP9h9fYr4vnETQvdWMS3RR9D3HdLcU6tEYhXfVwFSorNKeLGYmcagRisS4by76tMt4du",
  "key14": "2dznAmCWNntqrcBRVBX4o898N7a8mQmeniRbkLvCQyAZ3gRfKhmYXmDB3fL3MMLpUBQAKrx3e3FZ9xA1iRbHwxb9",
  "key15": "a6pu9Kq4EqLrPLw8mZaSdoxW8ygZdUFpFVtyYKWe9trF46GYfAZAYYptSmg4VEBeVxnbhD8AiRttjR8htHg2w2T",
  "key16": "3sVy4vN39PX1M7UPVUUfcmDX88yrmA2dwPad7FKoiDc1VEMueuugB2RphxVgN84k8e4xuTGCmULZnZGFKPick2Wp",
  "key17": "3AaKC39RhWZYdKuo8Hj6G5Nkgn8jXWAsMqUFBvCGJunGaUumQ1MTEQb6D6FUa4tPMc3x1iFYjhLne95udBTgwVeh",
  "key18": "2aL4M2QWhRTcY7p21x8uCjMEyKdv1m2ps7aGwCDAe2JoyoYqfBcfb5DpGHML33X9WDNSwhnU76R4AMoH9d2ecDQs",
  "key19": "4RGnFnm2YiTTyAWk32NrG3fNALJnBnqNtFDFYPHwxjskyPr1KK4HTeBDbhBiHgPuWdHQkShvqE3n46AK7Hm3LW6J",
  "key20": "3cU4TMNBensQaDYTAiUhTrScizYKqUP1SvPQwWhNmopUaiAUG6Ppysg2gfMdWS9nWXyAWsHwonJf1777YpoWuYCj",
  "key21": "4p6GJPsHejHBpPcb9FkaDpeRSxd9f6vdR4d9kPyYL2gZ1gNEKhNWxLXv5RcdfF6k5YwD1Y1Be72aBwhy9dHhVaC5",
  "key22": "4EPSAZ5PHGAEfonKCPkfHDZWk1cbjSZVhxiCGo4HwwkuYxN5Jkit65sm6PeqQA3rc748b6nuy3fv9Gv549yk9BAQ",
  "key23": "3sJct6y6YKYX7m5zaC2TAQGNyWqEA4UFcHG95K18VUpCerUngKNCB482ZMngtqfotiLuoFbkpg57mnqDTFZEcY11",
  "key24": "2t3JBnF7woBqodczHFLBwkrwjLqC8ApJ9Gr6BfnNx1isE5XcYhYZEcUuWNKpmxAZdviC2S5Yp7gpBjkCdEfzkbks",
  "key25": "4PuPRP2c1tTiBwPZiQhwGDG6WnVV8ji2uvpJAzQyyzgsjsFHK7Zxd8T9HGehCAv4MfzKwnkWWTSyma4GCVEg2ACd",
  "key26": "szKVcnNzr9gm2GMmAiirFA883UF6veFdu1U8AQwr7cGnT6CPLUdPQUm3HTHfyUxRYxfrSd8aScM9dXCG93WxKju",
  "key27": "64JQBfhNtnf5G8X8Ejxb83z1V4DiaLnmURJJ5nAb4oyK7EAgMbtXwD2fHzN5q753RdNgkTYZeHWLUSMZRPAbC59B",
  "key28": "2KkYrFaQ75cmGBs9pHif4kfb6XNK6XNfYk1EP7PpvvL6KoHu9hJQYm2q1Rt736XNsgZhY7iV2VW971K5Dssys41T",
  "key29": "5t2UB3VgadiabaMNAV4DuUYKz7HsT3cCsoQu9wG9UjRDs64wY4anFFUqUVRutYR66anHA4jKr3Py6LanbzFMvWVS",
  "key30": "2NmTbtmu2KB8JZGvJVTjFPFbv9msEtWERvjsnsQDVnyTBwgtUfbbHJWS55sVjUse8yS8DBwdRR6hbS7GzLHtHQy3",
  "key31": "XFSCupPW2S74cHi27t3JKPouyVPT2sxdg3uCWDM2UYhisxd8xfYtn5pzvAWxeZizg1RQEk8uQ4mHD4H5ZuMM9B2"
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
