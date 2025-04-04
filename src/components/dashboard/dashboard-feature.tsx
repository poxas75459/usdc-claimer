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
    "5gA64NrhyhPMKeX7URSSbz7XCVSbjYa1RnskLUG3rM6ewMGBTci9hKNESu5jRRRcd9ArTjNTR9n3xbks2Sq99fgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "shyQLGM2hRQN71Kzyde3afbGJvhPwbh5QisRHjrad3ZHtg9mdVa5kB7hyifCt3pkNy7AudKWaM5uTEqZBFpaSkC",
  "key1": "2iyaaTJChz65VRJbpU8U6eExAj1gdGALEE58AvL3xG8peLFim42HLpZhB3gdrK5KjE2cw4FZQxdXcSJ7fQEieTxg",
  "key2": "3SYxK32Yzumq7DwRnFWf45t5YVGXBMYnSVFJBZq3a9sosufyMFkWGL25gJiJWFXei3MLtc4GUEu69tSjoRVMVtPr",
  "key3": "3zkHPkTFz1Mzkj2gPf8BDmntMtVzaYWJhRHz5FJ5TqcbcrmALiHkJV1fE3DxN1g4zJyhAqSnH64JjZB6N8jqWrSC",
  "key4": "2E2mQ5G9GmgSoJA2Sag8tSAa9newnW67s4jP5TAkcFbv2oHJvV5GBkMDkAw472omaReMkyHEqHVxBbmqXWFYAwwH",
  "key5": "2zsoKWxEG8nTjCb9yhDTnC17ZQqt5TZg5iM3im9jfg2S5FbRjkrqbH4e2VWqRzXCR8ZASYnsi7BwsjZYa6dmezhV",
  "key6": "3uM91ApbvCpe9fFMfXaPYcr55K5wqwbcKpCB9c1UykjMJFm21USAxbxQHTokX1GAGLPANxWKUa9b1vLjgQpDf2w7",
  "key7": "35Q3FMiiPQggJNrV5W8rFsUgXwWkuYqtAKg59jQSi4uDAkuyf4Usreu8bbCsLXdLSRkdCJyPZEsCq5FEyBKHZ1wG",
  "key8": "3bJKZAXJUhniFPFQU3VkVM4JQduAiXh3Gu8TLiGF5JhEAUfV2ro9Sh6VgofZBGUJ7XZtkVapPKJJFVNseJ7RRzMH",
  "key9": "3H5g5EgHASSYERHAYBRHH1ApA3ZKAHboCr5UsVHUTZAALDS8cXsPduXSDHrmJ6bCMUF8wp6pfFKA5vvauNz2jDmz",
  "key10": "5Q13hHDeeJJmirii34mKowMFLZSbJZ7QXgMc8trgih6ReTRpBSAdV795M4yLPzgnpD6owKG6zp5q7VNs8379EkyZ",
  "key11": "35jkZeNXifq5oRwZ21j8mXWwQYRHrEwVrrBuA7Lbak5BY17z168J3xzNsUCqR98DpVPugpzSmvq1SRs2WhsfjSnL",
  "key12": "2wafJcJLany9CAj3nf8UfYQ9LbSE8inbf1USeu8RZtssh9rmGQA4kdp8LDH3JLQcDn1XUPTnJdEW4mkKrWEZKHu3",
  "key13": "4VNqssGPvt4hWZUpPGbx3yxazTq3e5aeWnH4eBPdV4apAazPLdSivMvuZH1fayP12CisezQk2DvsNrQzoCHMotB5",
  "key14": "4rvhAwW2NYopzALPuFRwuiBAUgAR3GbbcKksYf2NL9DYMgbcYQkUj7jXFdBcjpJHByVekycypL7BkfeTjENpkqgp",
  "key15": "5uGNytEWCqVAiwpM1Gm35HhLopjuYxnpPFue4qHy3q58z4hQqzsBSuuTiVk3gFD8fcqodCWTn827EsPoY6sHcM19",
  "key16": "3raZWoxKR81Xm4ytSCrq3f46RZq52dLoj4Kr7S1th3XjPwKp1zHwibUK7Xf3DFrtb9RckBcVxPNui5ZC5vfyYUti",
  "key17": "4ja7mHiiHUTwYqn972Lqucd1mcA4DAHwUfuKMBHBxK1mQm9D9tvnsVajDFxBFJG8PTWV9qYfJxQFeKtjLUoi3Azw",
  "key18": "3dx8AYuuCCGv5onh1AYmBuAdGEo72ger53ficuXZthiPFjRVhbbWMVttygcMSCVqMeKse6MEMb41DMC2JynqmDg4",
  "key19": "vFzLxZCJFumbAC4a3EgSmbzGLcMYT5Lpf8rftdbtWvpfoCV63WLi5aZWqJHSCA8RurkUPSqZKBuJc3LzhdogqQB",
  "key20": "ivn4DjtjzKRaWbMaf8Raf4FXQgfzUfxKkVrLFeQAPerAMVcmpKdRdjHg2HpPBxCvrF3Q81CvGhpGh92HVFi4ma4",
  "key21": "M6ShZ3dTSimZv5zZ6vMjTcm3MqML1wtwmJiUUctL1w3YGtcCtT2C5TfqQ3CrE4xeZx3jLt3vCQBfa4DSJKjZGse",
  "key22": "2r9ZBXFnXBiz4hWdJA7FwHbyeTurFkiPg78VGd2H6yn6hfiDjDrK5Upoj3Dk5gjDtZiKXz3CFQFNuVmVwKGMXrws",
  "key23": "9ksBoXgAwH29eGwoD2Brg2sr5AAtvGCkpPvJdoKLvJKvRhz2eggoNdiHCofUvSpmGGgr3u4qN3Unsb3xngkLmaw",
  "key24": "5M9oAtrBsgZQCGdUWVrPfx67xQo2fm6LG1KUoLgxYnKfxR8vGJw2nVYgKACUdh3A6ddtrTVexwBuhFQCm8BX5Mrp",
  "key25": "5mkk5uXzXaBxogZ2owYkx5KK58e9hAP3HjE527YRA5GW34BsV8im3ZahUHTXdnX8GS7Cgfgiq7woyH3xeaxAuFAw",
  "key26": "2gtG8n24YvCK52sbCRMj3wcHWjzkiriNqCd5Xsy5sM7HrGS1wD1VELfM5LFnpHc6yowP6pRNX2CoyoUZW6evFV1U",
  "key27": "3VdKnVdvyJ1YYanotNYnN4DbLyoM2QxEtMZexxaCFTD813HBgH9qmK3LEDU7yCCyCC9KCAhUYkqKEWJjwWZB2SaU",
  "key28": "34P3GLaiaj6G6N36bWsWTtPLRAbSQ1Zb9VmBsdautXNwa6ixRSpcaRmG4qKB4iUbjDuW6RSYt4pnLdpXoxC8NRVC",
  "key29": "sPYxa7hfuTccif73DkJvPLSQwesPg91oe85oA1uEVi2JuR1ZhaKVZ2KAzpmLmTqNyjpu4X7fXCeDFXJJXNo1hQU",
  "key30": "3qKoqSDp1f1PaQ33bSHqK5UmiSvC5abHoF8yK87dUxcbdHNiABD1fUXLYYb6ou9ygMeKghUowhkQKaa2iiYutas4",
  "key31": "4PdGhDWx38k1wyGH45uTHDwNoNeGi269JBu5S4ty5suVLfcgmshhpCeawhjFoWBCKXktjiQ1LJia37RNddWmVkhj",
  "key32": "4hYLYamGMU8mtmCQgA44buq2bVKh47J5Uyv3bR8o3qTL2WeMXRPe7UVbmGfSe78emVi6ZpVSYy7UWtJGMU5ea2Fp",
  "key33": "2TdVQFsVdXVPd4joL799NHnxEc3fpqwDocQPJduXN183q8LonsfWGq8pUhEBCJpXRYggBdjVFM3yXkCLkjTUCpWF",
  "key34": "4A4dd78B4MMBkaawFSqejnkGpCAeW2hXHeYu71eXYiLHa8soZcuQpH9ddjmHjRRyVM3SNSBXDDmp3byRTxg7V6Nb",
  "key35": "3HGwYixBMFf82vKhAUehTTcYnasbvE2NngUTAyuJCGaLU6ABJxryeEreFJv2TuxmYoE317zSNEef4F8tdhbfMGjj",
  "key36": "3VojGC5UoELqvMzp3xy4jwen3mYjWHTCBATn9Zx3AB3wZLzMCP4JV5ymMkB6URdy44GKsvj9H2ZKxx29seq72TeP",
  "key37": "Z5U23xysbhgM3mKfxdVSvHbgEGK4dTCEUGtzWhypXsarRKAXyf3agkVNfduYB5VMVo51URyjfFyjkkNCA8Lrqa2",
  "key38": "TYJPReRuasvychT5mjPhvCWY8UEBd4mHxtCdFPrCvxzvq4hojFC26edCjjnLXxMufH2yc85BuzzMUR5VjWUUrFg",
  "key39": "5RnCjTXiCXtFNhus9iz7YQuUsRgTaH1wR9RG2Xe6c1Ts43ZJ641xojYiwzA3D7FjCLzBCUMvetxemLyEVDkLsZiV",
  "key40": "3VvtBvbaBRc8UHgUTpTx1wTWjMn3yL1hjx7Zh6EQAjCApb2kkHkmSQh2R5Vjb2kmcFuTGBVz6adwsYUd2ckq7p7E",
  "key41": "4yka3KzzioKH4MrDk9eJcdv142ziDDq6p3bGR5Tn4cNwRJ7f5nvR5sXMBH6AoLNaKRkKrTNj3448URbapsHvr7dj",
  "key42": "z9ggDiAdpVbc17zMmDiAHsDg4xmuncsBixXbdkdjt36iiH2mhBjo1n9upLdnL9BK2QhWb5jkabwjfqRYux7xnhU"
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
