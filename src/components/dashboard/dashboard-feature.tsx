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
    "4JPSLgf2jAjCurUPLdNvp4cd1bx8BzsvNoqEyWTnm7VnTjwkzpkRPSnpGpvdF4jS39Nf6h2YiyvY5C7uatXURms9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mthZFTSLJ5xEz5D8ikUtSYhCC43ZMPMGBNFXhYPm6WXCDoErhg4ZXWTi1CrPZAmo3xBUEjcMhHSFH1CcDC3C8FY",
  "key1": "WerueMDHtbM4hSv9g1T6KVF3spaDG7H6UqKwUAyk7zoQwg1cx1PnXzDx4j6XUL5gek62jEqRYFcWiN4vEvcfQrt",
  "key2": "2uPTMMPqRYGRFrfsbRGCA1RH3xcaEfmpAJHJTJGxnAXkXttYdmHR5hjGmpC11QnHoDetBjCTve8U1rJ3xhLxALxU",
  "key3": "2J4tfd6mTnJjMzSGNHhFoXArpU1ZSJKRd4wYpqP5ormsPKJ9dYYSYZDRWoc3V9ayGtM1vpFPYXFB6AGuZDrn4W3W",
  "key4": "54Zrc6tgXEUoQfo8mw8y8nu2nkou9nT9t5PsXM8xtVxiGpszSdnNz7nYdHdPvZbfdQkthxMnVurK4MHDoH3sSP8s",
  "key5": "x91LgND78HSnYUtnUV6pdfrZpzLbfUAXyvjNphH5ndKpgbLv5rGnt3uB1mfrmDGNAT286rJiLfxDCp5RGFzKd6C",
  "key6": "2UtrczTznE3cQNR8y3ZteRXomdtsKhVhrEYPfSi2Vo41T4froCpEqmV3UoGUNxuGUV6njKPnk8kp3FboSsnpWYba",
  "key7": "2FcrzwDu2QyGwTV3VDXZXwW8LgJyXdCRzgseQe9Ca8ZZP8QpHNFdNZLUFK58DQj3f1ZE3aXt3naJkm88tgZjDsZ",
  "key8": "2CPZ481JP5ucE2m9rWq6sTRcrxU6yZVwi7WMSqGRax97w46ioAfZbi5g6JZUHi8WoCQ15tsAPeN56gWAsoFm5bzp",
  "key9": "5BB4dRCz2vGUv7GjLVhpJqdYy31P9SNBS3ckV1Bw1HJ54xiZLWTycFVEczNZi6wGvooF9jRDT3JK1Zgm5mjmkxvQ",
  "key10": "2CYs5VMCfcBuHFxKdyA6qocR36rAuVZoKi71QYbNGfKHWyzq3619piZAJFCB6PBSDtnBgU177TsDW37b5AwXrngQ",
  "key11": "DwS2EhBNL7WxPzudce4v8zzCGwD1emuCzSWaKbqr2cVr4eV6Uvciw1BJbd6AC425gyHLmM3HUjP96o8WL8pvMhB",
  "key12": "2QkDTbHCqZ168w3fxkzQ5R3qxsjxoAemGpHCjYFaXBcYJTV4VamYZwyaEXUVHs1c6CGMuDkQZLayLmzuksYsHDov",
  "key13": "2SeuHSSoUKJnjWV4rurZEAc6b1CAxXYCbSYUWLbPdb7nUXEbGa5a1HuNUMyqxiE24DA4HwugxD2s7rzVUotReSCp",
  "key14": "3xkvSthkv679NTHxwyvm8iPNBUmuzqpEBkKkZmSJe9ihjLT24hdi2oniKNC3KzGNdCMfGemUpXadHtmCDSafbEye",
  "key15": "4Ek56sJVFPrYhfCUSVC5xwiyj3gptGF4WUqxuEQcjkdtgprsMwbCUyna4q2cQZsvN3ZA8uHskr9F3LhZvNk5YSHV",
  "key16": "4dZoBk2wDhc6Y5VdoeWf88LAMy68EN3GcWKW8b5qKxVgZN1hRuyuj4XJWuR42V2i1JeQJ9c9DcFhLrWLmPjahCoU",
  "key17": "5B6UpnS6MiPYgjb32bRwzdWB86PeBAUq2LgV9ibKa8z7CbehR8uxo4PsATjMjr5Mx6EknHmwNYCwPEZ8ToKLmGUr",
  "key18": "32DJaBVydByXpYpiAXp1uMsMiENdkA16uhtNapNk6QS1Y1fcKjztj2qTgSHMFn5jMqCyE1f5cfTpvMRNJAaxUQew",
  "key19": "5HGeNfCASBWwoa3JZjcpE8xCcihyTMr2kEJZYKbRzrmx9gmBb49URVnMPVwMSJgAye6EMF5aZkGv37p6UJ7FPJMx",
  "key20": "4i1sJK9uoYS9oxGd2Khy3FxvS5ZAeQqoxQ8N8xUZeNkLpjTM7b8KNLtMn6C8LwBSybwsT1M1mobpSR8KUh6eBV18",
  "key21": "dcG47sm45Neioq8gC76hpELP6VA6nnpuGHcc7wCv2Kue85CmwBKrghuQmNR2RD1mccVWaWUmH4v6Nf4BVfWq6ur",
  "key22": "2yzLoNozzarbxzLgqunCGCXHj2RnQtrxmcVivK3pU3FxRUpym6FLrwpaWHYMU1yGNAPLohfafSCfXTiV2NxyoLpv",
  "key23": "2rfJcfQmkhrxGMFTGNhvmS5Y1e65gFhacG4X5cCFNmCPftynRrXfVCfLBTzWKnSEiLRj7C11EvYw14Z4vSzhQzRs",
  "key24": "3fksWjr5X1hVNr9iTagWeamvcwsoLWSpKXzt9qtP8i4Gz3dwBU1wqSKQhaFdM8MGgLKtpmDUUioqHnQQcSF5VCBB",
  "key25": "2kgci4gsbPSQ7o9kBWVdEjU3CCEMjiruCaSQq498k2YM9bGvBjTphE4zx6naB6bANbQws7RxLpAqTLBz1NYP7Mii",
  "key26": "8Zs5vwM1BkDkGQzGJbt7foNxv5UqvSmUCLZAcMmUWtr6J1bFGRmkDBkDjG5wWgKXBK6JabMoKwQFpXP2tzSB7ad",
  "key27": "2wwUyk7SrSJTKrqLCb8uj69g62bNsRBVNcLChRHCrq3gYQjWh2iu9VAVntWLCY1qAx1h6eYqy6uBt3vJACbE1EsG",
  "key28": "ZVk76qbMBYhUJqY5jaFLPj66JdA7okvxKkcwKZujX2587bnvHTMh3SThbw6V5D1ABEfi5TQjkdw5fw5vz2EpPtm",
  "key29": "3E7DbhrTgG7ZZT4ahJAQyBpqkNcW4XhKqWiE2k8dThmNcm6Fd27LU2mSnifwr5jGwuiDWy7aVSGWNyS1oDPz3K7R",
  "key30": "5udpYxC8kmtCycsdAHEK8SaUNk3ZauAAvKRSbviuhYvffZrk7EWsjsY9LpSMpG5zxR8MCuLmn1J3G2ULQxxLdfEu",
  "key31": "5NkaUmA4Uc4aSCLXUWRpudggz6u7wmSbNhCcic8t6jjaJZyy3PdSmdGBCecqXFytzE8nj2G6Z4BAN3jAKDr77W9G",
  "key32": "514jsCdf7zomEkqbf2GXQPZ4c6Xx7NoavxQ6PmtygamVJHnfQrLCjK2csEWKAepzRVhk9ZxRN3e5k7a4SkYvskD3",
  "key33": "2hsmCmPNrP4bUrUnUyyXWGuYfG3uVLv91VS7xh3fRC5L3BZSLML284ffHp4MxMHgeX3f6pyBoPn6HNDb55ygwRxG",
  "key34": "5T6Mo4y2FjJhSZBtuEwt9HiXZXRsvfoXgvLZU2Rvcj2KTuM6YL5HB9GnE6hozgaxVDMkZgZ2YkavhaGfPneGossA",
  "key35": "4CrQn2PAeqfHKSSuX1YjmVKzeaUAXFkRQk9cbseE4171aZ91BMAucDN5uyvJzfd8mgnSxucVA4niCVLxA1z9EC6x",
  "key36": "5E8DaQP6T9Ki8QqR8dsrg17aRicD9QCcEFbkK85ZC4vSpD7Hej2vWjk8Rsx77GtCioJa7T46XZqHPpP6g5Snn8Wi",
  "key37": "jmNwzvV6mVGwp1daHEvEUFeQeS7tCtBg55t5SboC9ia55pfbBiJKCE9bwBE8dY1BcKDMhiY7u58YDx5ci3MRsVP"
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
