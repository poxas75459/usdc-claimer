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
    "34z5EdYDjmLycSCjoSSE3wZb56cHVP6XPi7onXJSQw16C4iPhLGxRqgMZFeVoQGqcTZvn5Av7bNoHzF7NcEkZXow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6oRB8HTLZxXuvKMgUAhitqMYTam8jL8LcYB6Hh694brtiCazP2XEwn1THYyG8TeruRyx5mW9Cs8WfpLhWtX9A1",
  "key1": "4p3j2nubuA2oUDj9DW4dF9YpiebnPqbHba7kKU5d5WqMXxgWYvuV38RHDyc5Tr6GJay7x1wWAZWRpz3yfinHzXa4",
  "key2": "3f46QxvGd55fk5AsXve25mLcbwbXKtKgD6BX5Er3ZHCNdz8TPEaCwPkZfKQKbvw2G4pu5tXD2ZbH9jbJ46VYWkhR",
  "key3": "4mKBcMsNyQ9M3bpND9k8YZYPx3LHKNksDHr79EahstX2WD4VB5PYJejdgkUBUqZkSzL8CvvtFF12uSXd7rtzNLbf",
  "key4": "3RqW7Hirb7EQcnQv5zULgdBnpphjhtef3nn2rDfiqXievb8tyiwXKjNYx9sfy4zM8SkzdreuojA3Q4ZEcbSQ8JfW",
  "key5": "2if2Pc7gDXm2DZt4hGctdry3ooYWA3Y336XNAaZvVHbTQSBHyUj3PpDpsAGMRQai6hirMi8sYhvs6kDciat613TU",
  "key6": "2vLdZzwPsYmeLFyG9UKjS9aXRcD4CsGc9UhbzC6sa7n1BM3D4WHhsq5XUvgJh4WxhKdy2W2ktWfQs4ssRUSsW2Z9",
  "key7": "5Rdq9fkRmBLPTXCMHjk7YoLcQTTuMBGmoRAUR9TsEQ9Y1DaA8NkJamhhx3xifS74TPgK5ViKQkPcGkDAEZM9w9Pd",
  "key8": "2iBFXF1g4tvVm8j9HZKCFzPBJ5mfQFUazwUHJt9zTBQecEmhnMjJNkwjEvEyVXNhkYqqBgbkwpkSB9PUkFEPhmab",
  "key9": "4vgcZzeBF3TG3ruMEffE6BRpHBP7BM3GbzcEwPA4jYHwDiUC1EtRqpEREMcWoEWrgJXda9SRzqG7xy5SkN5f7NPj",
  "key10": "2DsCSHhrZziVH2cmbBisXCqvrCB6DE8dWoaL4SzT55yhEYDrzQsuCSojNKGVTbRjAZanyF8SRjNeg5tNEYNvBjLN",
  "key11": "5WQxcbuU4nu3NCeUHq4qigFeh3aywpQwdtu9yrkxiZ9Cws7JHjpRxGm1SGYf9aSF9DnYK9yPbqCNr4WbZZGsWexc",
  "key12": "yYtDpfuqG8NkdmWXevUEppUyLNBdTQrzL8P9wfZevhfvSLwSVApDgMS6B3Fcry2dWK6mHfqMueTQWEPsQmcDMXY",
  "key13": "3oKww3sen46DbHR5mqhYAbHX1Pxa9XZET9CZo7K2rAMGpgxinjVeuPMBhZkmdgpZVNPyk9Rx4Lv8ZbqZ9DUxybQQ",
  "key14": "KM5vSQAoCAjaNs9TqASrnS8wJX8w4hMZmcCmGYkDueethy1tqDqYhGK6m8GqUopwnx5VcNrB5pvyGKj12LJxrZa",
  "key15": "3yMqk5Mir3yyvuquvYDYcUAs3Gtm8xRVUrFAVuUw1yNKAWca77yayqZ8uxvKT57GonYFP1naV4LsAUiAjuDyyHZC",
  "key16": "3LeNCacDRRLa7BYyPtY5YcVVrH4KLBjyD8FWKU3sF5Jw8eck73hRkZQd9kWJujwVBqRnsr78gkDS2wjx9qBrZcC8",
  "key17": "34smuS5HHSfpAATad5EtzBGnKS13GcoMTUzsi15XAfwerazQDgjoMTgQaZ8CLYK4hLikumVk3evriqALqYorAyA2",
  "key18": "31PEFM12fTJu8jB6cQxy41FTwQb5j3zZK3hc5FR1mH9RSAweR8rkE64aZKaJytNx292aZ2juT7zyYiKNLbBx9qsd",
  "key19": "5uFeiexmiNoi7P2CG5WQt1ZeMQRXKDS9QuApMrxaKfTnMi882x1drpyVP9MGcCpsk6ZUDAgZoPfx2PA9LDzntL5E",
  "key20": "fHGJCfDJLnQF5DkVa21sjrdTadAnEaz5rvMPjoBqCAmJXS8uBDSmHeL3hyUW2P1QrBCFs6pxvj2VYLQRLRPJ4vh",
  "key21": "rsSsonvrSq6wfuaYVs5jdxHJ3dLxpT2374saGd281ck8AmcrULj5n6kSood8EB2Gy9WGjULHWpXnwxfwMa4WWhY",
  "key22": "5xqXk7FTKVCiTvMchr6cQ5gXzidbGfUqCw1dFxcQ6nf6Ww7bd4zQHGzV5RLycsoaz1YbMNJUP91Z2g6Vhhc929jT",
  "key23": "5XPY4g6uq8PYyVaFvSXMHkqM6VZzcSPGfJTVGGir2DV3W5EvkN6LFZsyTryGunqKV32NLGDxkaLJHDhJSqqbjQyC",
  "key24": "2f5JHJLkmgEs4LrRiTZ1biNMygo2VTTYNdz9Y6cx9JbKE47m2e3CbzASfqM9zsXgvAjDU5qcpYRVaUcLbY5i712o",
  "key25": "3DtCM8Qh8yQY8ca32Q467bT1VJTvLjxBusUFvG5JRwWSGaFs1DhzMBqXxcwMDDPmxc6MaKnFkWyrAj8eUEFoDB2H",
  "key26": "27sYqgcAAR4YNutGDAjVvhvZCJUXiFNX437R5Z8B7pQuCh5o378tgi6mvDZJmDj26se575TUAVU9gxkb81Hq38MY",
  "key27": "4afCj7D54xcgVVsJa4QPByiCTp2tDT8R48w5xbQZN8QZMG2xAKbZdvS38o34T1VWrgxuuvaoyjZAvZP8QzJJAnuh",
  "key28": "zfTs8pvT63RbpkZeLH4Hi8LYPpkRBcxRFAMwmJQL5HxDzc4PZdqa4rjvvLSpRNr8xMeCAHS4ZvA3tg7fZz8xUSv",
  "key29": "2jkDDcTVa5KhQYcYtvUdL1eT9A3ctdG1cgf4GP8EVjPMg5wFStNrqkmgzQ3uuSFaC2xz8NwcLMpF1AMv6HK2cw2B",
  "key30": "3UVGEqGB5TG4H1gWaX8koVp7Cz6EFTjW7hodZVq5BUr9YERUDZdncePpFm9ZBPbfym62MZYywbhHDhhbKkERLn8X",
  "key31": "22YHnkGTdVsK4sDJzdybnMDChiKTaAC43zoP8JnVydgDjAS8fmFVSNhax8eUGVYKRcJT8MnXwrFLNA5KLdDdmkB2",
  "key32": "52ba4fpaxcULGP9yZPaWZ3uYyA4mDNp8A9A9jQkmfVbMhPHtmKw668ezBgxUTPefGH8UGTLGXZq69JXk3x6V3mm9",
  "key33": "2PV4UbaQBE7jRtsKAG5fZQJGHd5A4CTmDraTLhDM8muDFzbBVMuxu9bMfGZUMD43VHAPiqKpxxe4dq5YxL1dknY7",
  "key34": "48BfeKeyhcwvmeEyfwhAYabyN2Zog7GK8sH4NWemhp7r8L35cxZzQUAeqcEpi4oqY59Po7n9ovWXRL5KESZc3Nkz",
  "key35": "3K4AGF8Va3GM2kkrmeU4XTEtpS91ahycYQGJ3c6zNXUwxV7nFyx8F3zULj3RACwjFoqLxGVid5nHEZYzqa78rJ16",
  "key36": "44kJdxnwHC7kk26Ziu7PvtwCBbWW4vC2RBeVCNAYEaB73fjJY7yMcfzXfocJTMxvHEzBficnAdzxSJvv5hTLLisV",
  "key37": "4EknfHxYGVPm9CcVBj9QM3v4iXiUuoQtCHcneT9YR4MvPB2bfp1gfZRkPUVCMy9Bud4W4w6yJwvQw312fYvWbzze",
  "key38": "4A7tcmjVPo8BHRQszRodhwLNvhY2Ti2rnKKaPxby8a5QwEmu1Mk77X1vpyWHh4C2eYP4XrnjCruCq4AH5ygcicEw",
  "key39": "5YQxkBWLz9Jbw9fAVbQRfSuU9wznMJqWEJmpoTy3REqNAUjDSSiuh2GgzYf7bu5Pp6dmMRw5HnWoHGR5XXpmHHoG",
  "key40": "2xS9923M9f4bpwZa43PZ4iTeQUUDUV7TDTJzcoHgvg1KC45BCFfReMfsBgQSiaU81aXMrwfmCfbzsou7FMUjZWXq",
  "key41": "2AB3b9FSG7LNvhE1pKeWeAQBAhUC84aPPXssKf26yH3kACjvLFqNFurFmjrzUZdoe5jPvC6BqT2niMVdpodK968z",
  "key42": "2uKmkxKCdtTq8kzVCAg5DF5iZLzTjmGtD46xwrTaLwfTWqQ83t1A8BKppYfJy3z72EvDZgneP2TFzV6kwWfxeKYQ",
  "key43": "5B51eMUdrFRQFNwQkwai9ZCGHpzzMwxMrfMST6ZS8ASKB2UR4apSvwgJoPRhtdThxg1pGAGAKs225nERzD2Sqi6D",
  "key44": "2fNvzHUqkYkcZdRHgYKcSVfi6uU77TPCaAVvCYeZYaKrwkY7C6wboC3W7nVx4gAmFzhXfMfL7J8FcnYevoizRSzf"
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
