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
    "xRXirDhkLomJzi35fp4Qy5aj2j2RWWhbXe34t1BWQyYaFiDK7WMTxPpVASthEr8fJQJ6Bt88h5ckzvs4bwerTod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yBKzVvQDjFyx8cjGjqBGqb4mag4W9AHPBgdXkGfmUXaofSeDwHZrVyGNyq4ZMfFUJG88gmmj3XD9rEYNMQakzij",
  "key1": "3tZoF4TkpXhHa9oShKVookeq6sqAhvSAhQYoUX7bJCYMBnDA71yVhWYR49q6DL2m6xQFvjvRiVNaLpQtkM1sMjNW",
  "key2": "3pxBqnnYXvui7FmVFtDJT6y7b6SG1ZtwWeqn6AkJVBHQ9kqYgASpLXYtEAsJHhgUaexUTjdFbofgohr1SxArtJaX",
  "key3": "5dtMgsbp5BGfz39QCf1MM4eVgRWS91andJb9F3RUdWJ23ej3kzoKzkpttGjsNdzTWNYqCaoirTRrhA3hwmVxjrjv",
  "key4": "3YECtsvWAcYLqxAKqaq2inRawLjpojr6gJNRcxSV1vSko7U8RRccWov6QAknwUdPA9AeQxLR8w8jKUzqECQaHfxu",
  "key5": "3ZowyAr94FbuRCdfKDiKeWW5qASjexiMuHW6QZb8PhvFU8ku9d1UvPXhn6FZc4cgxJWA6YVz1VEdub4dhHMh7Qze",
  "key6": "UFAn5SmKGCrtM4dPUrz78osGjwsXdXUD4qQWDqzacECr4acNjJexZ3XmdFMTfVfU57fkV7aFS9est3jJVfLU2Rx",
  "key7": "2ZLEoHciE75b8wu3qdkuM9J9oTGLxpeXKVnZMhxuytRjXsrGzpBWbWP2o3WwaqrjUM5m4AJoMnJii2HgAhrhuRre",
  "key8": "5STqHxjKvEg1bryG9X6nXkrDHLaxRyXKMGhfaDqWgEYAAPzK1AgG8RujmrXoufMvnC9T9ccLFMULaxYXUCCcVNao",
  "key9": "3PZRZjzZysfQWjSZtVWbk7vv2tsox9kypuMDLrbG6BFBFmWCSqMTf7jEKXvyVmRspZah2umSHGwEg6kWbjg1m6Eq",
  "key10": "48GC7fKDxEEtg5ZzpoU6ndAJjTyZ1kvH77LcgL5EpCkZxpDQve24VsY2j7qNDUZ4wsK2tBog2Xpp2Zmx3sPpLrbc",
  "key11": "2AvybKuXAZGqbYQGwKf6FLLHQjiJJitz7WJEDr2RJJKv41HBtnBWF2m1ysTHTadfDpJAvqHME6GAijsx9CgNazk8",
  "key12": "3dvZjJniHAF2ch4mpZYrmLugQ3oVwsAfW27PY6qiBrK7BR6PTFAcTp9NvCA35c4pi3nRsj8eJ2d72iHrjLLR3AE7",
  "key13": "2W4F49bRjjjzuN2A1bM39dA2dTWbszMkcuEcDWdWmQfAq5Depujd9Cktf5PU6L7qXsthcjp1Zz7nr5JRQVtG2svi",
  "key14": "5xi7Rc7zFK7UD9gNFrp9Q15BnSVt9FBCyDXAyCtjjxNVin5YDxwJov16isiKXqqBBLVAM6BdNz2bL3q6nEeq1qZn",
  "key15": "5tiB487HhWrNTt1ZhtyREZcevZSA1EZ2xHkBM69fRfy41BzR6gus8CkXeqki9kPJR4HmSWxteA7PwwsYtgNCGBN3",
  "key16": "bvWMUh2GVr74EKA4N7vtCxGJU6cvucAwFA6yfDuhAQ5DYPsaZvuFDLQd5agYqTTB4tn3FgdZTLWeYH8TCo7tbKQ",
  "key17": "4YWUedsSdak7bC2W9PxV93kFiP8PqTRx49qYdRF6dJaCuP2MfpxZGiToCdChrY72aiHjzbEsDUmrMHRfQ7vhiN5o",
  "key18": "3smgpBGuEou1qcgE4oE4dwYLTxXT5WMDV8MT16mjDwzdWBAbuzWhedyeeUbf8gRwnUnQbYxUWFoMqqzU14Fmmazv",
  "key19": "swmBCbypUR3Lu72yqCkdVoBaUXsdHPZqoqe5fGTRgw419ujpYm8PUayGZD7mPtYDN4KeDN3DJCGkUgQJkNX98Ps",
  "key20": "4PCPdiN37tXVzV9CLaewwty3pgbTNh6GQFE1eHVpELcVvpP7Ssj8Em8cEJZHAnp76oqFRpEnMP2ALjY2ysSpPQ3X",
  "key21": "3hYrJHo4kFdzHsAF946YdTHykDpLmBF6ynujtRzZLBp2dzbudSueKoJLbpxWuPfZF7bu73oAmDcngeCXsEWF1VEm",
  "key22": "2rkECpCgBTUk4xQxB8sWgg6umcJrVTHQf651z49137qGiQTvsG9Ba5DTABRdKcoaRRC4zTG5RtMffJhLzYo4RGrd",
  "key23": "2XxYPp4AyHehiotNgSTFrY8mg1a6k9M2TCNMcPpqSkvtUybGwC1r9Emu56oXfReygZd3d8C6DACjC8wKAPczfYFt",
  "key24": "5JZoJRrYWTtdwzMQ6a1Sbv2YKisfgrnwKpgkAqENsjhLkFmqB6K5hDmXDcv3shUqBS2dLNwKs8NkxFaKp2NuU8Ag",
  "key25": "4eyLu6fNWiLJZe1NoGDxtbWhFpaiF7Zkh98KwNSoV6iyHog5aP6iLv6T6uBtP8c1HQYsjv9WmjyVMmwP4uvfc7pL",
  "key26": "2zzRK4gS62qS3V4AQxS4UdfgQYS86HqMcCBxpnQjACD4mXRmkZiHXH1gFEg68vLVqADgC7axVjAgeHujHovydesY",
  "key27": "4rJr4YyDmtHvN8vRG5xPGiBBh5jF5pFXnMGwL7ojp8es4kpZ1eeb5x11TFG9St4awiEca4gDER78mqPCFEFxy6eE",
  "key28": "3dEPMpuaZbFzYpTnexWjTjsK1aGHyWfMYwzp8ZxBf1UGac9KDhTik7Uew4anWmK1JLUNHMzHdxNC3Ww8vNVysxRd",
  "key29": "LCg27Hs9R9vZA9PD69tSFNMoDqi1xHx9JS72HiGTNrb14nEdmbam4DFXfbjXn5oX9o5b5CQLWKwjSFGGPebTN2U",
  "key30": "38EhdVswTsV9MsaGvvZg68r25M82JFbEBPpQLykJPrJRbyhQEvCkSb2CDT11U2gNBYBjejFGL4aTpe8ph3Qz4T6b",
  "key31": "2VBew2PGVZHftL8WzU8W9LcsEqYqA5PJezcpEMM26kEu6DQMzQWdCjoMkTevdY2SWZgFgNMXBiugmi3XD9WJtMV5",
  "key32": "4fmKQcvyaAm5JPsuM5ND9DsEGkqzJF8zNTZ7GjwbynJmn7jZUAmDSGJzH5iWR32neSdZ47pHZMSDepG82Ze6fk1U",
  "key33": "3VN2nvFYd8DVP9meDNpRJmojRosL68Hn4X6s5D8vnVdrDzpg5Yc7utz5jmHjb2qKCf1TyhEKCLvcJmgSTxXG7bkX",
  "key34": "2UWe9sdANRobwiezqnqspCXyBLufgdJoqQAN8rdWAZiWAM6xyxduBeZ5UGFqZgsq776negPy89RZX7i45v6axyuL",
  "key35": "54XrzzAcAKiRcMnmSbHgkePYifkYQhivGQ7tpavBzzpVFzhppCE7nsD2z4vCg1toWhWDszRzpKHphZWMbAus8HJ6",
  "key36": "4LH8PW67ULsqn2PAoWqGCafead9nuokDTSMJw4VPXEVP6uMVJqmv2LU4e88FwZutpR9KogWdZ4zfzvfEkzv3dT3A",
  "key37": "1214Dtv1HGrsuqDfrL6DDgi2YLm4bvLeMffY4hCaMtKEhAwZcNfBqFffepRjHcAfw64N9s5aKtr5CYMnLDHogCDb",
  "key38": "5kGrHqSzKceDqVsDbZbjrgcEzy8aeUHQjMCdHm8hHupWzGeXUSzep5vDJBijAwLh88nTqCBn1kVhzQHL9SH8jraT",
  "key39": "26aQK2mG8xYLUatdywUGzZnLjbv1BoRgX4g91t8iUfaAJPWx18SaT6dJ4CCUdzKQoaQ7LpFynn8ged6NyGxu24tz",
  "key40": "47Bz79B4bxLKUcBPNRt4WzqhLbtauM2HkHsQauKcHaTsPsLHA7BfuJpnKdhuVo2q6sThj9YoDwZh7E6uQGGJtiXb",
  "key41": "2jYuK7vsGp3zDZW5gqSm73aFuAJ9cGPYvYnDWg6PsqPT3T6kUqMArSi6JSrGTfzqDTYzrQPYiRt9xymrXTB8wMeb",
  "key42": "3ASqZtoHrUAVmS2usuW5UsaXchyBskfuLcnkeyr9ykVj2XCREwPcwyWgPR5bfPLtdfbJse48UStiPFpyvVfpSWRd",
  "key43": "2uoxmMyS39uDMEA2WiRmwWYHQ8AD2FW3J8vfUy3iSUHHru2S2TwgdE3udzdySKvAZzW6WBEhTgT89U7pAb5e8QXg",
  "key44": "47qfRzuiKVk6fsY3U1xMpKErhWHxCXUA6ZMurkHEevvvJ8xd668SidDQuuDcmSSA8XbKP53eK9JuSP94Xv5xVw98",
  "key45": "2h9uAvxcZ3By33SqJZzUoR8shX2tejv6UEX97QBFHJva3b25uyAH9q87GRECRyf3nRTkefCV7A1hCwcf85mfPK96"
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
