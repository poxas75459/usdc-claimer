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
    "2ZqPcu58U35hoXLUjBBdPXjDcF8mXroXr6qizQT4WRBsTS2qUiEL1oWRzEYmy1cXW9HGH8DVYmNWPXXSk2r776NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9BhMb1kGHCH1ChANs7LviqtQpyWHuJqFej2vTLbAV6t7hqophKAkVYoJD2g8X6SZbhTtAeFohA2REGiiokA6jr",
  "key1": "5oPNUnguy1s2KEHDSUoPTJCtw87ioguBWtZgAXUX4NhHcR7vTLnheX8PnEbNe4UW7k7mQTwENmoRmTU3TbJasuac",
  "key2": "2eu3WnbVDgTmbVugGvY6rKoy5Du4xnCbZYxFTcpShqWFG1MM8Xi5R3D57RVNR1HH4aTzNTfeZ3Jx3iWWd3QGGzqc",
  "key3": "2bGq6J7WQ97Qwpe7DBgWqtPH4HBXoVNo2sy5yg3dsZstiJZUpUmSgTRvfLnL7MiFFg4diVXQZc86Gx1L7BNnDDmE",
  "key4": "3iHX1E44nVBrmJPLAUedXVqLhp1deUK8XGjohLrLw8sgNkzdoc1jjWchADdRr5WMUubX2p5iFFndkeMxQFCfviFD",
  "key5": "2LxGkYqqnrdJn6bqvStmfsd5cD5ZA1S5byj1D4Ux4Dp2H3WCcC4avA78kZtQN1ZkjEE4c4M7kzDoP87ZnuurtsuT",
  "key6": "4GNGfApPdQRRWvD9h6yVdcqZiBRHhuSoTe4gFXoCPFXPwdB9jvRVnpVibmFcZr3PrY78GcDEbH6xjUwSoMELeP1C",
  "key7": "5a1gBCikCUQTu77iPenVLHx38DuZsEDvuHCEMkCfR5d1kc6Zr1P1HGqb8z7RjpMi8XqBgXYnQCa1NXzQR3o5PXWt",
  "key8": "64RmF6SLoXXYcnDdCae8AfEyroFowpXeez6Dss5PBKLcz66n6DgaZG6kLTuKG3irWREq4Hzb9xKnMqaGgUZJAZHn",
  "key9": "3dAgGPVXpTpmNCueLheuBkjGTdQWXpE7cMEWn1fwSfANJQRbYkAbMjDgxfSGvXgx3R3bJGqRPTa1ikfoB5wFfjai",
  "key10": "4E3KHKMDfYvPAT76r1mXDRdxay7ftumMRGYnEwRs2zboeCSwcLnVkX5FMvVhtsSeSSCvJCw3TDds8GBRfsutP3Rh",
  "key11": "63wi26eoHeDFmb3cDUUMJxPjmKjnpA6egaaDvDbbGPPetE8Kbdu5TVAUKforPkSsKTR6s8KJqWD8A4RyNDC9CrVY",
  "key12": "53bKFe9hb8UwQnqJGfALb8REK8q9xkvqtNJfpnxCa7tYENAHz5hTBUhMcpvuFNSabTr2Nx2X2Z6s63rHsmMpuNHT",
  "key13": "5t1FssnBJQ4UW2FWeGzWMxzpk1mDNsL7MHkJe5Z2QkFapzUivtVixRg8CAV5ygAzidLGXiqmbnUAuZk1cqaYHtjg",
  "key14": "4na2GK1A3fd6JmfZaCjiiRYBxRx4bVyRwghkrjKm1Qo3sAfhKG9xrsHJzjfsdJeKH24vNcDPzR4XcjRSLfuFkggw",
  "key15": "Ui3eh3KQ595sMGGUsyRSeTHhCEXNoVWb1onBpfPJwbkQTuUJAdwpUr5KEzUbkWEwj6tf3cKXCRdsxQGmhoKqEdP",
  "key16": "3Gx32MNtFW3Qp1aoY2T7BGge5vPbPNDsaaBkq88byxHXagiwGSEGurM9uGCxiPjphKmjyqYihEJcmhaWEzrkMajH",
  "key17": "3pGmQYe8Gee5SkFERBpFtq9wxYTpM8JzSJB5KfCNVpBhgUpd22A2N7zozgJW2KpxeywGyAv3b6h9cyf4yNx1uh5S",
  "key18": "BE5i7e7zsKRA7Y4fvnFNkfNR4SYuYvLxQkdb3ujhEKiSgi1G8ey7Vc1B9NwqE9yHcZN5Y73PV9mZuhWCYX1Yp1g",
  "key19": "4rfwUARXYK7tABWgXbJVqUxKin33FSWj3pYXSUkT87X6Hfdvw5BxhqnK4ZUCKhBXWQF7mwgiifDE4F9drWapVtbu",
  "key20": "4WFe4CnVFshGWDn1QmQsZKYvATkUT7BgV2ybaNEcVkGaeZwuParmxo5bvG2AQ1HePhKy73jRfWLYV9TaJQxrYTaT",
  "key21": "76rTcxdxD6pvVRwHV71MzF5q11yyw4S5bJ2tfhHf1nRVvYaUu47yB72cknspPuqagazDrnh4FyoccsVxH3t2cW9",
  "key22": "2PYDcKHeD83W1a5Px3oz3gRfST2moNTPDEQdFtmFxHC5kuvQ9VkYnHjkuucJkz3t7N3tV8QBZn8bgNSuVPiPzPkv",
  "key23": "3LvEvxGMp2HqVbZHEVa7WUBs6GYwgoqebrdw1fwaU8tj8VhCt4NEw7NE5EV5brSsHjCrogTyiH9L4f3r4cW9o97B",
  "key24": "SbJ12PiAdKPp1NFcZvxbiUw1VoRT9bgFAubNP7c8LN42bq92q4rmbuJtDbTXBGPrmcsx2Qm4KKgyDEnPEQvtijm",
  "key25": "5LB2uN4akBEGZTB9jA1Kiht3uBrP4ntr5KH8BBcJmAzADF1dgZgih3LekFz8MQmRcZJuTJ5r52YE2FAkjF3h3dXm",
  "key26": "bAVVKt6w2GFjcqBcYuTtDbztNUbZVTUaAwt8emg8mrKT6Nik9kAkgWADdTbzb2F1rj33ePstZVAPaZ87KXDQABK",
  "key27": "37H2tDsakbxR5cvaH2RhZb5LffCUbAEtofVbhfDj8orqT6qP7V6GXb1hWyeR3KuQbAERva9ZQ769gzuUoB85JfCq",
  "key28": "5MP9EX2nm5WihK1hEhKxZLYXrey3Wue2qRTgUCoN4JL9qPv2pNYS1mSL32UoZZJ4Y7K41CYwztk7Meds68a3yLQB",
  "key29": "4Y2cnGxuKr3yDaQP8WhxFj6Mgp2oyvGVPMxojuhnQS8kU7tZBzBfbKPuZUFDJsysMxA8omGtcYh3DP5cAoivbn1E",
  "key30": "3bnv8cxy7dEwVJNPeXi1MDNUKtMS4xCriGUUdDn2nKz2KeyXnd1FHWJnHFhGNXUg8aFD9kwTq7b79RTjzpwxY4Zc",
  "key31": "58d91nZm2Af2fykKj3PkNnKvkEEuMGtkFBe2sJ4SYNSoydaD1WpELFnWgdbYawnuE5Z9nTkDEibsgp1roa6wd5pf",
  "key32": "5mK9RBSzCdyMJzpDQXBpwQGJanAHi5KwhoUvwtx2THJnBoCPyE5SLNzZEmJpDZnUtZF4R741hgm38cajradCPewE",
  "key33": "5sJtpyNdgVb4v3ktr3vgVA47ffxtRvAHPjs5tqZxNGJcBv213QK61pewsL9Kz2pgtWJDXJufvJ9gbHK7sGDQCfZn",
  "key34": "4A4YCaxA9ikKQS9P5MgTvdwvLuu9ZR2iEdWSj2XyoRhWRXvRicYUC8xJfbXAV6LJcJKwN2iQdTDVmJNEHiFepw63",
  "key35": "44nTKyj6tkRpjnicp9PzKDM1Hyx9P5iDLYeKZ1sDEu7uJtQsbobkhMtAxKrHHvsuvrHdVNAS7HLyMra4Zkksy3HN",
  "key36": "5pksPHxrbc7f6EPGnx1Et6DSSoWLL3VXfJD5T9ZgZYMRKHfUTC77Ekwu53RbUE18JtRj1DHUwDKVBzfBN26ezcE7",
  "key37": "3H3K1Tr6SoH5ErdG9TRVmF86QGi7gy4iNsknoW8n67etC2vLFwZyCe2VE5xf3AKpntwv14nRJkQUbf2988V5EuFE",
  "key38": "25A5Dy6knSqSTFpKGXjE4NxnxhXJQmreBNgn2RWjyYG79BoKDVwEZzTrwCJxebb3ukfoxXXoDwpDqT2BrWG1Fkc1",
  "key39": "4T2HVUQr9ficervmuiTBkPcAVXqPnu9fz4ev6tBSWMELPJjU7s3BXaCNW6dDbJWJQtvKPEGQmP4KCybG2eXRDPzB",
  "key40": "5cXmM6DVsZWtckY5jSJWdwiLKBTz5TiAEAfHyWhH3bVkKMQ1eeAk1L59cyurdRpnZb72Seo38miNLhkszfkEh7ko",
  "key41": "2DGcCQcVaQCCELg27k7Z8TDFEMDvDCJdqyC8SZyZ5nN4BUmJHzQJg64cctbtMV6G8gZHj9YJsgCKtp5ZjUJNocyM",
  "key42": "5xA7iXHzajAR7jCPYFYFbonnbYGeQwUQkkX8HXEMjmEgbicu78hjNFQHj84ZdavDqT2hkAEFJnY2w5KGyhCPQ9UY",
  "key43": "kDUo9XbeZCB632sdEezeS8jPewp2wLL27fZSYgk6G1g5Gx4uLHa4BjXGDUfmSeDGASqTdiACVUW993dgfMgKqLo",
  "key44": "41hHQDs9AXihugnSKRYVfAJ2kDrWqi4Wp9XGybRmZJgzoErqf654M9kzj7QswsMrWUzo38kJaSCvXL72QyRaEPen",
  "key45": "4e74ttenGKq7CTbycE1dAcCD7er2ofw2WGuCqmeh57ChrYvPzz4MwSxBnDv2U9jJ2dXe13Z9Jb6tzRP2G4K4XYTX",
  "key46": "gqJAwuzFyJjv57xrN3ussVnFzQUVPxQ3PfHCVjBZnuL5uM9PoYpRccn9Vso1sghv2HaFepGtFjF9tN5wLThXbC6",
  "key47": "3rF8wBobXPwqQa1tRnGGgfwQT7skjaEH5FshBs4dGXkLVknJw36p7swctYEgF8oPspwHXLEHjsNBawAFPcjsf2e9",
  "key48": "67cAcZYTSpEYDrNizTL6jnSuvhCt3r9fzmbyr4vt7yx8aMpv68vqmjkjnHCHjGFbvyrB7ED7MnFsxVUyG69CxJrb"
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
