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
    "4kU8EjnWNqJuz77nVyWPEQntCrtuWmQr9Jzes35ZW75K5datawBdjt5ueBS7c5spagn91UMux4xJ4yfh9Ndck6TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBts5vLoupMgcffNAVTjf6CeEqLUCas5PfLLou65fvxYwBTkcQPyE3bMEDpLTV78oWJQki8VFt5jNhtG9oR8k2j",
  "key1": "sXXvw98b6ZWckttPG57MURhTu5LwRh4Tn3wvDDNwKnJGA1UGDi72WEMsKLjBFzKyP2S5Fr8on9ZGNBs36upbWYY",
  "key2": "5NsotKNJCMuzesdroxmuegKxraRHjBRNp9QD4EbrUd5Sr2vtkDgUkA9M2Kybw2Xdmz2ePDEpMRx2swcXpoBoFwMn",
  "key3": "2Aose7KfSRvkLDeuo3BBpZCbegPyM6stSsvm7Hwtw6MbAGUBwUcSLtyMNgDur8HcnEjM3ZSmS4MZR6fPQDTKuKgb",
  "key4": "5Scewij9bGRPbQJyfj3h4bAkAz9J2rAGFWD8B5m8Xrp7hwVmsRPXiKB3Crt4VEGHDh6k4e4DS8vFqsoL2GXNy48o",
  "key5": "3whMidk8YPg1zis6es4AbeqbRLPoNq7DkqVbTbPnPLvH4rZBaTq8FGQ3fuD2dMEBrYQoYsXqeNs6hn2zicFk8yNw",
  "key6": "2yga3GNR15Dk5EYSZnX2dBvWZ6vMZWYXGhhkTWAusM4N5mp41T9bW2Yd4GxJQgDjchcKZXZJqqTYiwoc6UBKbbtH",
  "key7": "5Vp9Emgfg36e6LeXQsSDfQMc3zUqJR9Eo33uYXErjTrgRCGMC1awSpfx47HTcmAXMFABSjmvHdEvnKQFDrXZ6zmX",
  "key8": "2J1Vqg8yoAhavDSQF5FWStoKyrnepLPFDLRLMdno5F3cD4NFsnUNJ9ueV2zQMPafDXbSexjHyUwYk6SrxoamkcGV",
  "key9": "53rKPZ4F25GSV3KZ66A1ThVw5Jbs3wEgmNuSQmYvJgVA7H9rytCGJEVbT8g95d9cakVdWAK1YJjXJXJZJF44Lwzt",
  "key10": "ojscshtJjAge98PtE7WRNadW3LnZuVrTeuAcE4L1SwHNkdChBLpyTpYYr3JQFCAMxbSQMcRWJL433dGbcavZNj8",
  "key11": "2jgiq6zDCq7mg8h6hB64QwUU3kuiwqWYCZ73KaLpyskApksVoLUFHrfnDd7mhgbNVt5opij4ZuChPTr5RYXrbVMh",
  "key12": "2RX6wdcZvsDEQ8z4bfnRY1vziqHwTK1gK9BUHHs5pADcsg5m4FuMJGMidcBXfjKBNhWj8KmatFr6bXfQU18o35RF",
  "key13": "3CwzNrsAcUJF5zWV8HaPrG47Cq8GrhtsnJ4DWBKpoLXadM4jXX8WhPmFLdTHQiff7Yo9r8vtajAMkqkQvSHPtGAD",
  "key14": "4SWjDnWic1889xyTg6SfBzMp8BfPh4kfP4VbaaT5pH3QMN9BDb25RhTkAJJLsSPdRB2t47pBKnpmhiGH5dsR8M5o",
  "key15": "D4dVHoxZTLidX7dxgEyidJX8LZo4VLHF7dxm9EHkLscprbvWvXovcxrvMr1e77J6C1Tpk2GoASJaw8UaxNx6zuV",
  "key16": "5t7gMv4ovgvrxqHxd9gfSFHTAnFxvEpFdXVU5zg4ZBoFUYEP1nDQaiRqc9f1HunEGaAZDGqXeeY3fpRSHe2hc7yu",
  "key17": "oQBnLPuRUiF8wQyHJJjszxsFz24fXBLXFbJDBuS888oi6sJaThb4k4ETG7XZCrCSooFVNYJkpSqhpjdLzN5e9Y9",
  "key18": "2kQyYZUaG4TCq6khKpQqubYNxu6XC4kevs9HcVgowQFYy8aXf2zDDjkbepEwFLV3mMHS6cei9qaDNaZuH2P62Xev",
  "key19": "4TpKc9ubGQNEccrcXf1vJ2mLMQ2KmPMYkHXokTp7bN4sPsT8ohxkATBF4vDBXhuJdGSs1dEzrMeuUsLo87syTzfx",
  "key20": "4ZnAcNnYjfbpBhPwy1wycbke5LKg3wEMUauzMEsN7oRiWuppuczgCF8xXPG5omzxiU7rj4x8zdDwtDKZKVkBz639",
  "key21": "4ZCyhD4Rz9apQmagQ76iU23gvKaaUNFaLEE4U4A6HyX29PzCYQCxYxCQtkspe77gANRr1o5yrQ9etZB5hTTbshrU",
  "key22": "5Yu4KT9zuXheg8A1Df34sYcSDUWM4LHhFBuW8yz127xaXMqByrx41DVaYqZSaWEguLvRLYwBuZBDw99XFD4Wo7EA",
  "key23": "41vxahBDWTcDM1ibw4ivdFxuxGbGoSdXN3f6wQ2qzsDhgATDNiSoY5SHB9ha9JDagtZ5DZmXqMKkTWAz7Vm9oPzV",
  "key24": "37C9R9UGCS4Q3vSYP8Q1PDngGGL8NveMXdar1b4BFTicAUg2BDwARroRjk97iQAJEdvjeznRV9Yf2aTpPZpZp4RY",
  "key25": "kowYrW7dQpCaEybZAkmN8JK3vkENSmsmrQyn31uJC6zij1zQigtbBJrrjhNET7QrwCSDvvBngbeMcraS3zFXgBg",
  "key26": "67LqyjbHkynzX27u4Y1iv3tjYBmJkC94SFdka8uJWcKAwjkBytGsSj6SS4xBLdh2BdMKVCJ8VdvWwhnbSsRNLbeo",
  "key27": "55W1Z2jx3WqP4GYw5Frca3QtPywRjxrXB7F4cViuKykw34UZ98uh7YkqMw4F86VfpP5sDSP86PUuXCjaVQDC1wnW",
  "key28": "564RPCvpZ9YTqRwEQa9asJ87hmr6DZb17nUgCh1c4N9LspPYrJtJC7B21CFxz44uf2wLZgrABy9xNi4WXBavRXfb",
  "key29": "dTytayviUmSMeXAZ5iFnh5XVYNv7VH5ngtTb8Lw8RcDXYsYU71GUshkvUiBn1UZm8zdeaZ7gApav7STeJrdLrGA",
  "key30": "5AqLciLgU3852FrnccBhpHb25c7oiVZxSoKARCBwhxkYaRJN32tKMeicNCDrzKehEpXvD9JWHcBmAEhtCkHZqgLu",
  "key31": "4bVgCE3WbxAKcmn7vWjW6ZPB3a11JKs4sHoNojJwUrbCDvRY5Qodcwd5o62gfTCmsEECShdujmfhvp71W8R4gYug",
  "key32": "JPkkhbvCsES1rdpvWibEnrm9hcnaVFSPrrZiDK7ZoYANyjNgYsVjex8aFJbCoQKLd9cPo49TbVTKuBh1Cfbjqu6",
  "key33": "59J2vi8P8hG2R2Z8ZWsgABQFGVGkB9ovLzbMp2uBQvvEgd6B335qc6sCt5ZqWPMxjjoE8wBm4kffi9u8p8zkGyVe",
  "key34": "4gT3xhESQFWX1jL9WnMentrmBkvdp6H67B4yxJhEcUiXgZqfGGDygg2Jdo44YWbrxmSWL6VT7nHBxEDvU3PpDiCr",
  "key35": "3kV3DYKkBMKaVgGUcdBcZNM9SGjit5tQeNaFVcH8s92xD4XBdtpMRxMLbgQfqSSJ1eRPGKdjRASRb7pCo6psRZNd",
  "key36": "2yroi3CmeZegSmLDntFSA9WhpaHJD8yM8FgaQwZa58b4WoYxibKbMg7qZS3SDy46DwGy3QhpNfWeZCA6sHMYr64j"
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
