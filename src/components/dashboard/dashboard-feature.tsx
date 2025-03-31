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
    "3v8vMhKWJdQLRT5qmBC1Hb1XUdcTihdLNf1CWq4UmMpwbLR9sd7yzq8dAmBfVWdgpQDf19vdvhmeGEyiADQERurz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JyFEiMuLBwNt4njAaL3DUiP5CtDCe5gVJPiSz7NGFKUqG8uHAaG1Pto6r7y3WnNtPUoZAf7aFmwrooVF4ypiiHJ",
  "key1": "9RzAULYPgTCbvBKKEuA8XPYc6xcAzL8NVzaNHdAMS6Vm9fFNnQkzDCRjUDKi2BgZ3duAcpjeLgxeqvcp8dTDAgE",
  "key2": "4K7P1WTat2L9iWzgne7Luz2cDWgR3myHEhJjarXLUPG45rajbXgzpG3hHpSyP5nLMS81HcsYqAWvFk5KStDUPvgs",
  "key3": "5aH6NW71xQj41EBW7Rcv5AtEVB7bHp7ccoHeJ3U5Vo4tCpxPbgawWDcwBDiFZaqJZPAHBcQGzg8r41EVgveaqVYR",
  "key4": "UCpuUJ1SdSpBFt1oiPFJKinR3G2pQBCGDAhM5ZkCb64wJYjwn85UDCyYQPDWnVvtZ6jTTpC6ZP2HnYMbWsWvLW5",
  "key5": "3XZUWpUuMbaqGUnnx7KAz2JzAMdVNi7DJDa5a2JbF2ADLtye8Qrwnnqa1fX9cxu2jE8bauZvnXe865d3dQMDNBg8",
  "key6": "4SRhMzRijMiy8w5giGBM1moyczmcTH5vshyraAkA6cvgL3GasDHoEYui8hGJ7cUw16S1ZgDPja3YzNH8gvHcRmXJ",
  "key7": "5ceKAaKYd98w8i4ET63jmooJR1dsCWSnpGkXzRU7fTzRHdMfPFzgLuNkEvGbh9VZDa1aybSgcZVx8EFXx6XMxJb7",
  "key8": "4QHKDtzYDimeBWUvnm4MEmuwa2WpPFkXLJCX4P9oT2JRXDKwNgRcFyodsRwWydHFWXUxdzjaRveuQrpuFQJfiSaJ",
  "key9": "2zBjDnaM36c55qpT7CW4yKPRQZ3Jvi8awz9HMqQT5s8R4SZJ7D4fwQiqWax6xRoCEtcGDdYWKHGAoimT2LRpVUJn",
  "key10": "5DTwQpPj58dgYQDcMqMhhqmFdJmv95iAoVCmEaWofb8FhNgPwhUnWqXyW5gBaEHwf1u1YgSa8kBmdySDCLwfc6VF",
  "key11": "4iSb51J9LqdbKZ7yuaPg6BB21ug2gyPYrNxTtoR2qbz8sxeQhEW2rZ22SGKPKJXgZ6BvzU2Ud29WNzoxHaVq4Xyx",
  "key12": "5YEYzyCZdudXPta3QRphGVuJ7eQHCZPgSqteXUjL8Q8iVgavb8qrq9XNKGDehwxNMzCwV7fgbo55xMyqRRdv6odY",
  "key13": "5eMum2sv1FYec7mPWEXx6xBKJHRRfohVZhEN8rGpE4a8CFth6ujrncbWDNb2DphbxjoH8o5uB2jaWv9hcgtzDsju",
  "key14": "QXpHZTbEDKrNc5L1tGjm6CRAwLVSBEB8huTSZjK2UFTYtwW4eb6pTxjDsWyP9Jaw5cYX1uyAfFfjPzSMUq4Dt8y",
  "key15": "3EufkbZ51zcgCjC3QWTEwLqVsehnSqoz12QdD2TbqU9SUoYJo7hEDsiUHWE8rEprxHekYfQ9Cc23qRSnqJsvSpGJ",
  "key16": "5L3M63CT7ueAnqq7NBhnAC37zr31scLj6cgGZDb33w5pF2uYEsYwEyGGwpnT7p6uKXBRw3ufiMS67634si9kTZRG",
  "key17": "WLy1y9ZmgVZsBUMoDzLnB5eqzQGAJjuGMFf2nEV1xt5xbbN1WbQMSwMumPzHGkvdeea1qVGJBiWfrgGLsu7EyYc",
  "key18": "4vznAJQwfNeySGLeYcv92MrAEA29vzDHNdipBEXc2wbeWaZFH46kbFyrwwqFPvRjoCQXCmWtR1NBkd5MHEL7n5ok",
  "key19": "3jcfxJ5eWfsAJ3mSaJscF1rvgSye8YTWd5BTeB354feihcNCDYSqqknbzs2tTVWyeSpeqDcdKHgoDft8rhK9KUYA",
  "key20": "3yqhoc556srfxRpjRqVAbdg51S6ehSGBXmhFDAfU3f2kajx2aDEoLr79tj2sHAX7dMEsjpTkUDx14up1Lbeo6mLg",
  "key21": "2ytii8REsWGSwtAYCVHtQYraEyjSR1vK7jT2Cka5fiA6V44be1zHQpjvEAndH7UaKD7RNucRPaX9yiaHxVAiW5Xr",
  "key22": "37ac6dQNaoX3GWkaW88wLSsDFHFR32FvSShXDbpPqc4Ha58XP2i23DcAcKuwnPuDRfGeL1FWLZfZhM3iVo3Cdi1Y",
  "key23": "2iDdjkHHbx5LgDGQuectkY7axMWuEGwNfhAvWkC8hCJBGwHJNLdkoMyk2JGSf1NmXQy9NgdNer8ATbQnWyntRi8y",
  "key24": "Aeh2VsNnpbBU6YJynFtpDJodqKKYgx5mHaAMZz711GdfU1yDWc14dMCmLez13CbUZhyFLW8y3it44VWjSVAHksb",
  "key25": "3Qk9JSV5bvfRHQ4PpZFEpNam6TTt6hW8HB6jsbs9RMXas9VmACf2d84hy2yKfHWZfCTMFYRT1caYt5SikyYDztK9",
  "key26": "yryBH2nf2jB9QVh8546QAdVRNudF8CCQNhjvMfB4PCow4oBMegLWtdBLURFMbKyGeYdaKX5aLP76zt1vMaURfVR",
  "key27": "2jrbVWsuBkS5zBiXGsERWgqTkRuEfwCQ8osEkM6zhe3DezH5X1umxyB8PESGbwERJ2j3QqTQGu5AA1Tmgch8EWKw",
  "key28": "2dYu2gX7UuaFBk7czmhz77w3ZLhV5iw9CcRhrXB9WUY4GVnqYgEqz74xvXH7Rsiav96qnHRAsid19aiM7FTDHG1w",
  "key29": "5JGyvEv4XG5BY5Dor2dW63zJ1auo6jUpjvRWH7PvPU9jWPshKzNfYAFJmyHV4gLCmtN3yzaLDjk7aFpySu1TGEqM",
  "key30": "3N8kFnvieBsJgwK7uxFv9Q22Wvqf2KXNouaYgLtNFZREndvJtGjCvX5N4TpXsxe2iesFtgUeuKnQh5ckyTGX4A2j",
  "key31": "22wWgSQHn5f7uuB1BqLnh7paEypEMzM13C39j6dQeQpCxyDDySpYuTRgiBWXEnxhNa6ZvamLpDmSbiG1byXBH9uK"
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
