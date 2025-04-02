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
    "Lc5JPahezLoy4g6b8miy7y9uRW4TfQGVPEE86YxXteryHz2m6NL3S9VLDsAEd8tLaGyxpaK3rv2eHR2K9dXZTpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLmfbAdSkX6pFJQoFT7cC2aM9hFjjDMQnwSghqtZpgdkfh4FWXwwcWhfsFbVJabM3Y5LsbQ2YYSx38SUs1Ncdaw",
  "key1": "4cnGKDPrda3uWDSAJ8h3j5im7wmJe2TMJgqHMuzMfCz3jAPgrnUQstnzgTZhHcUmGP5GsrfnZLBqfq3VZSV9yzgD",
  "key2": "3xJP1wqnyUgvzsVhVRq4auXoqTYCbsWJj6tTcrpc9rVjHHn9YHsNCNTHB92t2eESVmFK7ghax25f1ZWQowPhWUcw",
  "key3": "5Mtrkbn5rYn8pY78V2m3wvj31Bs3PH78NFpK6ooCDX6kVSFYuCaK1pdLJcpPdg7Gz6yE4G75yUZPE5jhpCtGhew4",
  "key4": "3rCHEsQ1EsbsRbRYezd5TK1bv86F7yMrATU5ALp3HMFPiWALymB96beDApZSJoSh5XmJHBgW7LsMVMeaVExj5NWn",
  "key5": "2P2JBDVE6Ba6svrYK4EJWtKhm3Ph1oToR3i9nV6V5PQdvfQpBmUMXYVkdQTf74jQe8obcKMMyXWycBUUnA4w9ZX8",
  "key6": "43qPApT83ZwzXDSayoHA1EpnHGhzxbx9CuqQ32RofAtRUmdFKw5bRagXDtemLHewPkJBr9SwxmoW5gEv1RkNKq1w",
  "key7": "5N4w5NW3gQjfCXNqZwTQtS68s2miC5yrw85mw2EavLYbev3ZT6odZRtSt22PWSqtPrDL67BFtfRHJCyv5k2DpdsJ",
  "key8": "3rJqiKeVSz6JDCQ2btUo1X4JNvHh2kCpjSBYWnMvzfmT2Y9JrLf3vGocdtw5G614iBDPhZu85ikzDvFN46kTb92m",
  "key9": "2zqFRDDk65maXapR1FMrUZamViGSMaKcshJKahcFrLaBC76hDHz9FjhSv2umrQdi9WxvjYaGAJmpUfyvdA4WJw5",
  "key10": "4UVELrnLsY4Dq2oqQcdBfEwVAokjxZrQzjEU6uaqSbskArcY1dYrEh3mysg7dww6EHrg9mcnPqTiCwkkH5uSUm5e",
  "key11": "4pA2y8b61CA7a3fT2oDtfRiiXgwv2gDTWzRLFvYcQqzsDCv6wgpTNfpikGZmRaq1gR2CMbvwL15vdhdJd4Z7DvyY",
  "key12": "J9ML6eRYUy2soL5AWvcTMd4LzADuKVcnCBnpFYcj27DNqEaBi8dy1NyxTAVds8S3CaxN1xH9VXsnLUtRa2ZeJJB",
  "key13": "4LwUEqw2kJSzEgSdaBAWhttCvNoB2Y4ZgnTeKBxho1WDTTF7fYaurx2sxdqeEninLw2Mo1W3HGQmv2i6Th45wGWs",
  "key14": "gEN5QmtJbXUqZ5FSU3y97kAjFLvUcrqpqnfyZXwkaMLMmpxChm6dF1kYk97wHJxNaKH6drPMFsXy9N1mdTn2fqw",
  "key15": "3P1roKnsQeq1BDDY8dq2sZaiNRKSx6PAdxQcuJZ5vTgspFpJke8mACf1kXJzKdNksAgRqDwFt3irgmHjksKRS48q",
  "key16": "zuKjbZgyiJGt5HWxtcDm5UnRLsAqx7TEn1dH3Ky8qzzuAoCAFdutE6Gag7yrwj1rTo4WYhYe4PrptfYwvMRy4nt",
  "key17": "cEpVmBBdLdTZx7EMM3RgrLyH3n7MsyveVtJoUCfnQpa4WUuXQox2zqzduE6HTxTRNZKs2tQGRq3fbz2RnhdHabo",
  "key18": "546HPyktFDHxDZod4MCk8gssDdWAiyqM5xPRBxaasSZg9Q8DMzYn1yqWzEpszXYYrSEyGJ8UPmXeCodvMtaMC2nE",
  "key19": "ZnNfQiHByKrcaajGmocRvs1BaqrRKwwVGmhY4AcVR1xy4NDH1o3ZaJinqAqxas3sR5ZKhb8G6ZkctRFieummVvM",
  "key20": "5vmqENZxaZfp53TZQewSRXdAWXXniwXgQ5sEZ4ptNkRcR3yv2pPkwkHNYvo9mSLPzbPUovwsyDGZ41EgRUZFwUx6",
  "key21": "3F6a1MCvWTSYZh7G1DYBSz1xeJWs5Ss4Pw9LLNB1hKCabgo5PsGV98cByHzd6XJ1U8YWBRXezsU9ZgwLDYK2MPY3",
  "key22": "Q9RHXYBUN37waBz2MYKRrt35UzrrBjfyvijQdp3y52UQUT78XU8L94fNrQp9k6zpmwvyPUHWYHeFawkTuSGvC5z",
  "key23": "2rjyk2hDkDvRs9duDC9LMNuiFnn2ogBXcNxThwLDevPprnpjSb8zE66WNvjc82iHhH98Fn1abkZtH5o4cMB8tiwm",
  "key24": "juqkLpWJnV8qbWzUyNZHe8nGvj2hHuRXGxNagrJ6YkoAq1jZRFHYBJzQd8tcVikxzwcmjiNzRspMZSmCLETkLJA",
  "key25": "4y9hkJdrm8DgnBKpLTKa5Mn8fMKDw7oBiW1dtf2UkAiVYjtwpJqGANW5rFzpMAHTXqU5zACV65tkzbM7u8YpPw1Z",
  "key26": "2JWjU8MkGFRvtNNzKKEnyBuRcoTkKS3sb84d4yfhrytW7GPotNdycCnztutregLk8PeG9EqNS5XeRrwubtfEQytm",
  "key27": "5UHEuTQuWi23pvrRAH16dEVCQx5Hkq16exptBDG8w452y3edaKWD54LK9mYjChQL28iy4yF9PRN12EX1RurkgHkG",
  "key28": "UPooq5aPXCnYUXhwaR7UW15DFiXHBu4As2W8XQmcfdz1b2gYZ4xQWjkNLTFDKCSop1iZ5suRFkxSZtYNU3zofah",
  "key29": "25VcTQpxLpBeFMew5gdJtEcfFBgdCa9nTG2QM9RHJG1ZGkHcKxrcMEAWAgur1cLXm3gCcBWmd7f7a9Udbk9XpUoU",
  "key30": "2DoR5ReQPprZ21jMhBrFR1WrKYFE6DABuDfF2k4k8XDa2AVyJbNHviSHECtVhUc16rg8aBpndh4kRLBrS4aAvtkh",
  "key31": "2nRJCuDge4xvYWY1unFQaGzNLoLtVnENqiKffGy7Ge6vfGnr7tBtFqzQXT6LnXSm3iQ2fhQ3CP29gkiP6pDh9ea9",
  "key32": "5Tp2BZtiKSQVtYFDDJz7e76o9k6B41DmctetP86z6Sm4vkWi1gqFEeNCzZhSXBM7jRvJYTLWPKQJmvv3GfzAD3Fv",
  "key33": "NurbnG36xmSgZn76SnJpgBkJ2ken8Tuw2DsAJUoxV1cr1T7n6Spr8RoakNNLSXzuATqWSRCPZy14n4V3pXHfbWs",
  "key34": "49gdMLJZUMoAV2icKXyu4xyhhKi378uxTaUTyyBFMRX3eA9YV8dqth4UTjGEuodwdartNATc7XysgeDZiBofdUSV",
  "key35": "Ep2u2d18oNDn3TV52KCGHzN3rUuaqeXFguS8CQv1TWKX9gBYCEUza3VWA7xb9835PcS8fDBQhJ61psodoTPmVrm",
  "key36": "4ywdgmQB2EXH7t9oaJaXcCaUfAnc7V5u5Cb6Xgb7c78HcXSY95ZjvFvZSva1AYZo6FC1XKDRWR8XghU3CUU8Es8E",
  "key37": "2XG1nNBjjpcwSrFyx14gyRA2xVj9zVFPeah3fxKpryoN135wpC6fSCd5o6jE6cipBGpL1wjMZWQVM25FggPxf6th",
  "key38": "QKVZkrEk8Hm4nRvgQL2KApXRYTiiuZ5CJ57JpCkGdHcSovxjkPm69xB8t2D5fxWRtqLAFNsg6h12VtFgDV2m5Fi",
  "key39": "E8FYy6Gn9gNgUk8ftb1BNhWidU49iLK3QuPWyADsNub9xf35PJS9P2QgmnUjrPf9UwKWbStbAsQJUXUT3kfKSTg",
  "key40": "3CSzwJpWdzQopkpdmqDX9N348noCkuzrnxFmeswGvEf56HBhwsQSR1EnYCfYyn6JvrRfuhnUEM7WZ33GSDif18H7",
  "key41": "3HBbHdzhaAgEhDoYaXiW28w77TNErjW9rQfUnKNc9dFKV8L9TfnPawMtScC7n5dhcNRwxugybrazDoQo1H3DzcW9",
  "key42": "4JG4a9qd3hVzmQWuM5PdTfWMnybTXnC7AzhKbFLv4GDswBf6dsQ4VCyYbs6VDKFpFpZ857umHQP5kH21RmGEwfoz",
  "key43": "5py7eMsU5rr13q8tWSncRMMhhzopJi2CaMSL5eUDxTWkDLBDdy8T12XTc2WiWXxrVSJRSeXf3Nmi7bnQWf5BrRxM",
  "key44": "5v56LjfH3eGUSEobrnNfkptUK4nyGZPTK3YbHZEC72zuBNJ599XjHrRHAYx2eqxRvSpSjcZJDzPTsgZyoLM7Ppbf",
  "key45": "4kDCKR6RGe94M5of4KWrXYCDJ55ByYYbv8dvQ4SfByDs7ZXgXmj4s9X4rvhGDpRebbg4zKBX8RYwtvCMhJ9Pdi1m",
  "key46": "59MHigVRQK8pSNFLExC3WHRE2wJ11EqhGAdEj1rJBHwAeE3fKejB4PSY9x2vGcu9B5PmifvBhiMWraBcsRMEgQNG",
  "key47": "5oohRh5X2Mu2R2H76Y7qH4yN4TUbgRXyrZ35b5hYDEqZi1etuG29fwHAp9gAJSJUy6XdPqkyGgEoc1bQsdPfFv14",
  "key48": "4xSz2fqU2BENtpkx96zmHnHxeKXnDSrE7J6N4Pnynz6Ek8dM89qVzGdQEuHvosRqL7yze8cLc9uGezzTYFJsRboN"
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
