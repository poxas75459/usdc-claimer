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
    "5DwrS9bgyWjKmJU66daQ6NmteaT57CxigpFMCZrFKZATCrJQT8WeZUKhhNUag7dyBVAGF5FJLutRrV1aFBwYgYAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQTky6G7GgYXzQAdq1hGmoXAwt1nUG91amQYP53HfCUT1c4XwkzbRgbpqYwTQkkdEmKdrdYks4oSeDiUQxmoEiu",
  "key1": "3EwsAQSJJWaYJp1Leb22PU3jb3LDv3dJgox9KGWsxwxerZfu8c3RxPaNmY82ve2eWEbugYqSYmRnmkJjJ3m9vWdf",
  "key2": "dhLuknJW7y9Y3NzxUnBdCT9YVosDWJvqdsqzVGfM82qfJjA3sbbJHaVCDiwh3N2NfFime8gwAA8AMsikkyzbXKE",
  "key3": "59gMXK7MsHpxKoGdSohoaNWvWAVoCqnFeQwyoHKst7DqCY32zXYArRMtckAHrA4Tf8YqnMa9tajuFH3xBJfjs7mL",
  "key4": "5DuF1SwT1Fu5GH7jzEZKfvm44B2XZs6iDirngJTqG1e7T8pa3U7psUgwuG2Uuva8ksvkxn8Er3W5WcELwwKNbrdz",
  "key5": "3sZAWgKM8mK7LHz2wCzQdemn3TwPB4YXt3BPtnZ4acSWPDmP2JvEtb3EsHiKCwKwt3Vnj6cBZKbMFVThWjDGopGH",
  "key6": "3K1Vzt5Y5af9AnaWG1yNkKDxzFpVrSNiJayCwKihhQYGzySV3G62QfCD2aTQmRDu1ZjWd6Adu6faDGC6F3wHqMBr",
  "key7": "3adA6vd4UEQx9wdanRzjGvQVoQRvEqqiUSdB3EbtsJXk5iP3AyXzcTHXpkVzCpRRmrkirwmhpC7wx4LXSkUF49QJ",
  "key8": "59YeYJEkX4XXPsTEckv7QTR65HxJHeVkngSMf7gzcJirRX6hZZVyCNdQQ48ptxpqBvzdkFjZyrBZzgArcCTs3tSq",
  "key9": "5LW1kDm4Nj11osMippi1GUxTtgs9X1wuH1eQPU7rdfBw3NLKJGJ8gY2xfz1sqaf8MVHSLTv7Ruy29uxe6owmEcKg",
  "key10": "2cJ5TrV5zucXUi3gpEM721mddmjqTfXbVFP1JKdjj1sE2np43i3UCwSr1uWQP4s53ixMNBbMfCunr9zHfPsShZbx",
  "key11": "2oNPfzkZadTpvwPbpA1WiRnCKKjzZmo1KEpMKfovj87csoX8hRt1njq6yuHXxdHzxHpmD7ZLux3iaCjz4AeMk7Am",
  "key12": "4VcKGdRRD5xPsxDopr7EZhYVrQKxBMhnWUzgsgRVoYdopbVj8TQyn8GTjyQxQkGiQEXFXkyAM8zTPPYYXKtaS6Bg",
  "key13": "4ApmXNyCax51fPVN21bvBuAfrych4A3zpSZQ2heRPGiDwBpN1aU8Dfodoa8DGAdCcYrhVsEpPNpuC8ZXmmNUwa1o",
  "key14": "34YY9FEqVkq64djScg7ZvC4z8nfEVebEAR7e41sTHgkNdh1sxrVR1iDBEsM9THbqj1Hq1JWiuYkFbKxWFZCmZawx",
  "key15": "5rfWLJRCRdSySwcogY7stW8NMxpccF9GqewSfC8dNtvVHsjUDNGTZPx9xmZqd7mX4ECQ4aRfkQZuF1LZXk5Wx52V",
  "key16": "4yhXndtapBJGtVi9N9XQzjkhDGWB8xBZZ8TTU3wEKwcZ7mEApLLXKF5vW5pjZKkV1ttRtRG6pjDPnoFdN9keeao5",
  "key17": "2cfNe9c9xRgxxSwdoowusf1CQZ1D2QzzF6u9e4631eXKqRDuADetwqSy2rio4BYJgA6FsEWREyTHef51isoQwqDs",
  "key18": "3kyB56ZKrCc32mEAD1ZKSTfuCPngz56xZUwiVGdpWB9z2BoBYaKdgEGAagL2YEQtCJPMffdMChGeYpEqB1hiDE7w",
  "key19": "3rfRe53gZqn7uEWPcqTZb7QCh78HSC3b9MSrpeAnMdbTEmKvkSG6rjABd96zzAQJyXZzhGmNgYru3yMaQ8cW1BtW",
  "key20": "34kkHFQGLmy5gWk6NnFbEV3NbqknhNkzZXZivXjrwHk6h7X3fH5ZNydbJgUbve31qxQ4dh1tsemhm1ZBh2kML3TE",
  "key21": "4fbgt6Yx4xmd2ceaY2bF1ePmoGMhZYYt5eqeMEwGfyqQ6CV6K4BfiwbsCmGuLvJrVHDz4NeWL35RFkpPpdNy5s4g",
  "key22": "29xJzuQ5iGk7zaTKhG59J7KZ9Vxz2P3VVdxrjQ16mnsR7Gns9WA77tPErseV8QCynM6tVbE5faDe8LkcGmyJFKfD",
  "key23": "3hJyHA4WiN8yhyjG1MHVY465Ucym2sPwhB4J1uKaRZoq1xFNCZ89rc5GYru3eX67hVHpHdE9C7fKbNH6cWFZFhNP",
  "key24": "2zESJvccuuSLva9YcrgYwRSbiQVetEaBBsUkdJ4BHY1ESNDqFqLt7deg7PDb5dNXjayY28jPEdVUVkH5PihtDNjx",
  "key25": "5To65JcZ9hetbo9Hj6jb1JrzZVwGMNfrQH4uguHsKkSxdCTei39p1wDS9UYciq8rA2acbuyk9R2HfhDUmdh7TbHz",
  "key26": "3Njc8MvPBSET3Y4qjZ97toF8jKRsjtZGo9jZFfcYxHBD1KTYae53zjuK489uK4NcmhnH5W1jbgcTNMRVyVvuMCHY",
  "key27": "26ft52oL7u2w6Xxh8dbjZmzudrgr9U7nTU3WP4ZmdtE6AXVd2Tp9JCfkjUA3S8KSLGUkjQASTBB4LyfjojPNAdiH",
  "key28": "63ikKVqtSCLx96aQ791sN19DvojC4XaeirZE6dv44aPmMha3FRAXVHrqezEX4QkRW5GLzfDextiPzjaRrCsS3bCy",
  "key29": "5Q15tFkTRme3YJzqNR473576CjsMksp1kCakirUbpnps22nbj1BZLGzg9EPFMu3xZ1TaYJ8uWyYG6rWFARted1N5",
  "key30": "23GMQRJETkDtwehLtCLNq2KCbNJirybjtw66V5cJesLBEYgcn3aoPKw3pqdGvPuY5SJZM682ijUQryziv1pEoAk6",
  "key31": "h9kkhhfU4QiRbS5TZ74wZuPbXndf2ieh2CxnNFPwmhjDK4gQdPmo1nHKUnTj6w6LiZNVz6nnn7HdENUCTCFRfj7",
  "key32": "4GAR7VokfVs8xmiULz4KR1JCZQqCCNe8p9Uo7qyA9SSmTetGLD5RiqRcbKfi5q6tLUwz8pnYoqJMpzrsm9mL7ZCa",
  "key33": "5mGngu9QFxmgKqwFEfzNXTjYrGHC2rEF2QbmA5grUfTB9NudZmQnYeyHcYQQaUpV2kxNNUUPoSc6NyvJdLyGAbqb",
  "key34": "4dAyXc29AV2fYrnZhxCV8GemWXEuqdPjuPAhtaxZfjVrovHS7owvPPHrCiCAZVy4Tm6fsjH8bnMJRXNb6dD4TYeV",
  "key35": "2tLBmR3rumwAD4EuG8xMxrbkEGvjjWrsyYdsFoP1G1sfiVn55CLbvofXSTKvAESx5jHEew764FnV9K483vztH7gA",
  "key36": "64gnQt6dMRWdWtwbsek82THS7tPNkDVYJcKJLwDdh3ArkSxCfaHMfAkAngzTNjMKM5Pg6pWaaa53GFGRwXAjPfKR",
  "key37": "4E9XHbNxwkTCrHBDkGX4LyNTUkQ6ooD3FMUGA6CcSv9AY7fmWQR3MjLYg6ZpRrUVmpASGwQ4x6aTCcXdCW5vgeHj",
  "key38": "4qmcSSyZQ8Szo327aQDjN9gHCXJ922cy9yekndtdZAEDKMYiVjD3NBse6utxqKLJLqez4dQdirxhY43Nuukubj1H",
  "key39": "5x2AuzSmWu2XByPd67gz9jwbjxy2HDPWYRJipGWRrBhxJ8g3D71i5Y3SKCifdwMZP8tgrSnVfNWMZUwkSr47MQmQ",
  "key40": "51qLwByWLDECJvGas52UJGMwLsurTvJztmH1UpMkLcHsJvE2zkV2DWT2yjjF6yVU4N3aAe7oaM4w4fxQtcXGQ8gr",
  "key41": "3XRpmicehvVCeUGqskqJoiBdHqMmJiekZgPbVMQG6Z6UAAMs7AWahSyonnYsgsxGBy8QB1iypGGaPJHe4GqStZqG",
  "key42": "wmStjxM1DRfcyNTmEHADFtVi8ohyLGW9p5N7BNVcdhnKQyBHwGGJo7eZAbYLs2yUNKQMbT94ndAdHhBc3BdsqHn",
  "key43": "CVda5RMm4TgRN2BBCH4narbtDZE2Ja3wTajzF4TNDNJm8qmzSjQ37yfEvCVyeq8TTLpafu2PpoFpGpqEHruUgns"
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
