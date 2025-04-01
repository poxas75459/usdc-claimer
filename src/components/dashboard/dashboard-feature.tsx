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
    "2ZEsv1pRoRjpYA6Zu8dwt3qMyRhNEJ5rbZ6nXLk2WCGS7xrA7FjNYQuqbQXhW1DNavZ18x85KQ3e684ZKtNQprsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hXFjddbxP5RGaL2Wgwb81DXMKVcrVkVAUCBdVymBGPcgGh2vZWSLNZ4h6VgiS8zq7iH9jrJwTpPBH3mRRCb55j",
  "key1": "58Li9U4vP2BtiBZpHRQno4rKtLV6WmiiXNBj8jub8WDkgqaFMg8qZyx9i6SZon4yQ6p1eyo98y2nRqaUAWTLhmas",
  "key2": "4f2juxL8giZ7DEou79FgKid9p5Y6cCfxCQnBSszDBXjDcWbbC88aUg5wgVFr13KetyjZkFQ1LJ6jzU8tRgQW1vDq",
  "key3": "4sUg2bppjaaspHXTzQM6y1jwnuwGAKsE2cmtgKGuwz2ebJyRbKSzLeHEZmnaCmeHybsP9eNQHZ9pYCG4asKFtiqQ",
  "key4": "5xoGfNftJTJNQVg7ht47hE6XfQe2gPpVCdSxHR2Xvyzwqrr5668GbJxE8oAuS2EKBHDM4BSMXT9iTiUWTh21y5aC",
  "key5": "2cMsjcEbbAfoS7F8gk55s14JaCZZNVtvHuvLpuiYZMy1XAR8Ynyk2x2VraWnPT4DipSAbceg2PqZds27zGNNhpMS",
  "key6": "3mHx7VdBVrRJydaJdwjQKK6vLSZgac1UfrWKrnmH5sxmaz49buE5GtR8hcfuwnVJBUUdhhsmZAT79UgbJgD1rV4j",
  "key7": "2k5YSYpCYFb2JSBcfrFHkuoVFTv81w91yUVDsq11dtjvrg4Kd2zqizHwYmCtFPqivwCthFjuLxwSBdWYXkHpazcr",
  "key8": "3LnjrQktPn8QAUgrQckK5rbTTj8v8QLWvtBzqToJPxEHG9Fz85LKLts8tKLXueAB4PYXqma6A9cRj8FLbUWRi5KU",
  "key9": "647q8xTnMZNscVSjDdQDqsy9wCaGS3XTpLQBd4zR1jzypD4ofuXcNP4bRARVxmg6FTAg8EufQkwRY8Mm5eRD62aR",
  "key10": "5sbUL5JC758DU4RsAfWcryMWfJPGNUg1u2mDk24R1y9RwSLJsdpFXf7DmNkngZeWRDhoh1xPeJ5hswRU59ZpJv5v",
  "key11": "zQLmgwVrsFMSrSkd7Sa1iAG3mL9iGevFZYyv4Bmfo11WfPeJuRmsHBSmfAxZDQFogB1dmNjCVHLVxDCvdDMf48h",
  "key12": "2p1v5QnyR19ZSgyoDC5JoM1x9qicWmS4h2MiShWV7YPqVYpiEf1mWR3tApjZw6djqz3g3MHduURiDsiesWJhBnjp",
  "key13": "StFt1zLHkfyRRwgCe4Xxpvxmm4Fhey5jH7EYr3JHDHr7n5KQLPTW7YuZexgB81NEarfrxHvhfqyoXKsSHpDQEVv",
  "key14": "61GqR8EAM6Lh5aqhrTqAJzBKmGXU54UuRKFo8Mf2frSgGcj61Lit2CW7Qs7YXSg7tkQVc676Q8msgGscEeUDoJYQ",
  "key15": "5c4DiCZR3fn3XySSSXti7WyxCZ6Qhhdo7WYnvcgmc8rautawoU9BqvArjX5gZVVhoWhjc4ed5aWYo3J7nbDZczew",
  "key16": "JHoHo1nv3SQww1jD46kSZxUk9x2yjLvWKuXegBzoaFSc84eTrGVVQbnz318y85G7FA7qnZ379WsDWx7z2xZvEF5",
  "key17": "ujzJSMkHy6vm7xpSocVGMyYMNXijrtvrYCh93gp6oXbBaAmJhaBDK3Bzf2zGFqxDeVDajrorMXC4ZRPdCRPDuXr",
  "key18": "5bGXbMDQTJq6ZPPLwqE1iA9spQVkDJe1NEM3uB5mvNpx9s86SU23n8tmgmGdkbVKFgnKRxamHG3sbA9zabnEK8PW",
  "key19": "3U8zqUokgoMcKvgPAjwgoG1smTrstZNrRUdtHEaGucXHMQ79mijK5bpxixkdK5BH2JgHvnZndWLwHF7HNcDYhNmu",
  "key20": "5eCExka4MEvuycEfyuZR22vnE8D6q4bzUZceDnyAexp1fLdrpHwyfUjD9dDp7EqaqntR2ZZGSdGZAdBwsbD2AD8Y",
  "key21": "amP2GVKvjYzx9Ee5foQyY9Vg2wFizXZNY8h3FbnWUiENgLRUH7trtYrhCWSWMw4X7bEQqx4ue1SxLTkiTi3Jkni",
  "key22": "2ZDRLh2mzakzLW8yqneWSEpDtANeaAa7eHMocWJ7UQHtxF2gHFvHyBP8uqh56htZxpxtF28s9ysGq3uMA6pbvtGc",
  "key23": "3Vo24v5dR7H5s3wa6cJqf4UAsYeSynaMQtTkJSGFUTBE9xuNSyTy4RnLaBrSZyBgZUywiYiVbTJmPm1KyuMjYvGb",
  "key24": "9s2Jmhe7xuXqwsxhM3GtUXCrizFQrFkuTVhKAkDgK6B6SChzhfLRiAR4SxvtmHXFjjJ95B4YQYqMxQ3BV72yx2D",
  "key25": "58Zdj6kWGB7wWkDZ9nfrMC23fLugcbpbsGegjVPpaPFBbDxqSXBsbTGeyqEi6pg4tetJTX5Ptj2Q8b3H3QJfN5j8"
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
