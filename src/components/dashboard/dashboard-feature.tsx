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
    "4oPbXXdZQEFZLipMEu1rueTsejL8Z6iNqiLe2nrys2wGTVjGUHAHD6SNLJf6M6r8bTd1DD8fsr51jMFC6y7UCzMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ynWc6Sxtp8fWskerZoSNBMzU52hJNFQ5yx69ZjmnoV5e6sHYZWt3iWDwThS1ZY12nNFxTWMhFptHmrd3srrJEBL",
  "key1": "5xc8J8hpF7eSRUd8Dcsnd9d8gnjbmCi3umF7yScxEmnmQUTtXQ4fCK59eRnhtSVnSJAQtp4RqtUsTRPMStE851b5",
  "key2": "37vUYowQUtKq6BHVjtppUViRAmT23Be6uPrpNtHLWku5L7pVS3ujw5wHNqF93s9xPiRKbfDs5FV3gztVJTya9j27",
  "key3": "4C3Tj9Scv7M6CiHLgpH7UqnsKzQAE7MyjfdEgfNZfe8zpG5EgqX9rj5urHQqgG6VgThfQRCdUNa59wRcNkA6KFNt",
  "key4": "53CYZK18kU3u5JswnxpbuNA9QcvC6ozh6u4PKtTCaFkmQD2FJEXcSgHDtr7mmVvUP5jfVvW7CPmbyNnAi1U58EvG",
  "key5": "WSxB4D9W98xLuLMsNYj5rR4ZwnqnQQ57oF7Wg1wGSmF45SnwrUbcmjeSwdGpRXGCrifB3E79DxubMG4ujZTiupc",
  "key6": "5AoRMpyvHLjjVt9FEie9PVGyrKwQeKfJ56qD7ETCM4UTp6TEFvS86qYXgFDEEnEAaZsCAMAYQKk75A4o4Paq3z74",
  "key7": "4pybj69Wyas6LKyRwNGbCbS2i2qyiBmUbdAF2vwoZsTuoV7j9gL84sSeokgXnKwApuuSfHXV5ZnUiak4aF6zu4Xn",
  "key8": "2Xk6XdLh9BvSfJJHKkUTWXwoWMkbuoanfCEpqnm5HANLdmx9jNCYNrwdwkjRfmKzrGCfHxkVUJsUWRbFz4angKJw",
  "key9": "2LFgGxLoMh5ZdpxRgMYHtgBnUr4zqCwg3Q1FhCLfds3fFBNtWPdAZvQseXvEEcn8LSgw4WkTpkbjgKBimEoMrvLd",
  "key10": "5LjPsPTLs4djWUgk2UyA4mxaMrAAFXAa2oGYiFq1dqKtFKUbfRfofsDpm16Mmd2RuWnYJU6EiukFauU6dwYLr9Qw",
  "key11": "3DqHzdr1mFeSSWUHcpbQK7bhqQT92mix9FTCZ15uLaPPYoBg4dftrDnNGXqpWUPekJEQswJEDT1B3MCAoA4TgXEB",
  "key12": "2VZhW6XT4nEHvaLV2KHAdd6Xkz5P3q8667PBA3bEBrz2XpoW3D2QTfYd88mm3X1cNAAt5WuDoeYhV9ibkJam6yzW",
  "key13": "2SEWx8sMB89CzgiAQ614PWgYrTbxPDM3FZm1oJRjcRki1aJcnEWtBc1pS79B4nMCrU2sz5qcHJLqeEYS9w8ujFbv",
  "key14": "5oYqHkgEGWkG6HE65yaMoMLVP182LgYScJbbFJvQsgmsLbANVyTFNAJgKVaXq5dwjWY1nnwwqEFYGwADJYoDHmXp",
  "key15": "d7zASM9ktWYMDm1GNbnCu2Q8n9KbDvyJFSR1Y7Qi2TxtJyyV4k4zA2SSrf6FjNhzfEwPq9XAuaiuZjtjF1NiaMo",
  "key16": "2Wrke4uGTSt72T2b8udYeq1YfgJaJCHNCGhQeyYkXEZfiyTcTvqewdTyrQUNRPSfnuPTZ9tctEUWbvkKCvmiUs3q",
  "key17": "5PZVu5422v6xPXRpctzg5J2HHoP7jAC16YLTtrDDDBnoSY87GvkRJGnbLTb5cpquqby4uvZdcsE7N7FSxUV7A5gN",
  "key18": "DQeWjHT3WvsDvvmWPvHPhbfiShPMUW62qd3x8tCtbFEFS24nAq5LdnptL1TiSM2HFo5PtBWD7E3B2F9AphQMZFa",
  "key19": "4AehxiyZ4vUMqPhZRHbe8VNtsuAxuQWnejUJRDFJoaYbvzW3HEjQj2AdnCgRpgH9j3rE79stg2DPQAchYs248itQ",
  "key20": "3s1P8J8uzSBvDH4MBJWxBKR8UARjBnpt4kWdumqLrr5hUTSeQKV89dof53osR3Pbnh2EtiU29SqbiWnk6cnAr1HK",
  "key21": "4vLVfVN5xYrvmCYmf1xYtEKp5pGuMCkM3jaBJNyTJfs7JCXLGS1Sb1yTRryx3KB6JLhvzhLaCwDhWq1hgGtuZtXd",
  "key22": "5JSph3tjuisS4Qpn2RJHwT52PnjZdcxKZxmurjAVTJTvKN8929SCgF5UhvfiF2bs1rVBzEEjoACSx5f8yDPMjsbx",
  "key23": "5KFHmsJKDHXXTa9GnJYjVVBN32B9sjdSegVymixcipXQvWutsSWBg9dF4PNTCMVAednN8RyEfr4eaHY9aERHYGcJ",
  "key24": "iz6j7uTWip3y47Mt6D8ZuPFadDTFABpLQZLBwuFP5Cpee2exeKpDgLuu6XCgWiVXm9yHkaQW8KZN8LGNYE6euMW",
  "key25": "3ZdBzxpgmU2ZjQ2Bkx65pD9sKja86KikfUH3y34w38PaN8AWWtiHGSEPDe4HU56B3uMy1wxAdsZjxALybJ9ULzQS",
  "key26": "4jM1cKqK9khqAtULqR9rtA1xbW3PWCwUiVejvwGyTVTFnNKokMCZBs4iZjegefAPdgKHUHi61upyE95gj8eKgq2j",
  "key27": "DbwnnbAzGoCWWj6RpNjqjNU4W6NUMnF1JjMsc1qHEFS6FXcsk4qkZ3dzZgF3xcnNR3sEuNA4PMBZ3gHWXCf5DHR",
  "key28": "cRUQ58s2r6ShC8uuGmN2BWnJFxULnw7UiNb4s2fkVxwgXmGeH17Sxry88gQfLKCC6JJ49mPTbiLNumZtZmv84HP",
  "key29": "LKYW5dW6eAgarZEGDsJCLSr2g2tC11vwC1o34GmGLB55taT2bUukN1K4qG51ZQfPuWXZieRAXp7JWuvZbPQu237",
  "key30": "32VZfMRYRoHqm4NvCddFHJ9quP89X2amsBgu7ZYkxZZ2wCiZBfujVgCEsJ1sDH5q9RAvu5fh83fQwsE4YHBC5wRA",
  "key31": "41NFzXBDZz1S58LMeXGGtwTf9LqBoj2R9JnVL9Kbb3HC38jETRM1y94tg7qMrP458DScz4LEfFCo1Bxt5qK68iFV",
  "key32": "BR3uA3WvdsjttyygzQGMXSghJfLbw7rLS2rmoDF1Ug2bXHDYCZ9CGorgx6whEGw3gn6xcRzHMcxMDacRDpWv2ci",
  "key33": "66iVdfvF1xKJ52emZCaKeKgx1txvsoaNwF9hTGLgwVDdVGYd41jzt6bvhf1ujhs2QRBpxfi1qDGimpgMKiP5XEVv",
  "key34": "5xpZXUTdinQbuZFW3xiUrNqRbvNNT5TDr1UG78qr9qioZjnYh424bAhXXc1rYGWaZaSzmiPfob8UAY21RAHSXDXu",
  "key35": "tiDboYhBZeWNUP7s3dy9WjQUKPgp4rt2FoaDNiubGWptvHCberCyHREpqcBbVUpjAW2ubVrjebqGdKgjxddGxJ8",
  "key36": "126JERENMfRBFHaWZnUQQbzNwKYvmoiWeurifD7yb1CpR8EC9n8wosMsqz6pjzPcbxL6yUALMDq8KX1oau52JmWh",
  "key37": "xizrB4rdxirgxjmCdEdEsA738r65FZ5EHYqtbiyhS3JypGmiksQzY1Fa2oYm29nGE6rTTNjjMtAWvJMFWNbuFpU",
  "key38": "Ya9uSJ7kqsZUCS7jAwC4PuEXPfeibcjNRywx7u6EUvX4fghYa78YPGKCuyedzJaHknqEsggFc3LQMhsZCJt2Xtz",
  "key39": "3dqLPuhR1UvHfwkytugK1j6RVLXdka5qP5jh7EnYU5UzNWBwGD8NtLEv5MU5RnjtorfFx9654fbwqKEQZWRfFmvQ",
  "key40": "42ffmVj8jZauS6AWR6c9CYQW195giiC6x4W3Z38GkJFnMXCCCmUBKLy9spiqx9joSR2A1VTzhbz7kwD1NgfgT6Nf",
  "key41": "54wasNpvVDX7Q1isidZtU2ELe1oLGvxw7se54raqZVSf8zm4RpmSim55XaUUjUk5AQDeF1jFRqRtJppAxfuJfFS1",
  "key42": "oXVVqPnKNqrVgxJKgJvaNoMRywLzy84LwayTBaxi127nAj9SgxuRbJGfzWmCtXKfw1usNbK7WsvkZvX7FLhCdWR",
  "key43": "5e2UaUYpzaLG4MFax15vmr6bDYmePJcfZ8vNtD5dbTnQ47HdE4fQNC32YrGdHVeHZ1Jv3WD5mr4vjoT5JdRiYSns",
  "key44": "H6JtnucudKjf9TwxoTHd7zMWyr11i9yqtEy4TpFZyVLPbAqJCCMxrwQdUDQexwCdSjsbP6Qm4jEfHgqejwhnhGe",
  "key45": "mYaapy23HHq6RGgiw6MgzXjpeFfgDgqRYMhwy3LQcQncJk7ZTz7JSYa2nMmV686d4pUCXcC7uTnHBv4kDD4mR1D",
  "key46": "4JY3Z3DmH58Y8HJ24vf2cpKEu1AeP49BPzni4wxRxcWLD8va5jboePEkwQHpSLgYtqHXPYEC5fNMGUfninmQXtRc",
  "key47": "58cY4Qz7WU24CgMTTUnohK9ZMpKWoiAxPZJeaU1dyaXYAhNxfgKEuP5J4tVxHVQph9DKd82M5QJtzNiP5AhYBm85"
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
