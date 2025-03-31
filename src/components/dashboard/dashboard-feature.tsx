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
    "4mhcePTshPey8Krxa8XYnpmKdZzh6zsgpNn3kUo1xpVkevRNCYfo4GMZefVvST6qZCujTDJ4Tn6NKS7DMF4mBZJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UeqMPFmWrfn34U3U3AGLFi3SMBH3yTCiLXpDcGF77tx5sMcsKb4ADegpvX6KfWnaNivuwrhTYak233TAqbjYnon",
  "key1": "4CUA1qSb5jf5oUhng1cpbV7yud546bUWDKuVVaBRpeYXCBwZBn534KdvC6NZAuNWW4ez9ziJGPcnx8cEz1xvF3LA",
  "key2": "4vo4A4neg7zGpauvQCZNgqozNJNoPmK3c7LzW7v7hhMiWskMcfe78hzk8jimFAjRPeDSth4yMyw5NYQqc3GWi4d7",
  "key3": "4TDcRRtQqi5uAbqCNj1o4jQSTKLqhx6PfHLSXcXnypM1EC1gFB6qtDDmUUfAv3ANnBFNVxew3GnDhx7AVfimYabv",
  "key4": "8dPEpLwMbtPzzZ1x879Kb1hMkYoVrUxPMhtk97s1WFKnPYDVfioSNpK1YK8HBZWx4E7iATmXDHUaFfm8Gtp4Z3t",
  "key5": "MrzexapqVsdoM7P7fJwscNs9DjmdgqTZup97nocXu2E676kg8D6y7K8Jk1UuebgSuWjF2SBxjZ7GuzhXRMJpujb",
  "key6": "EjVgJWNGuYz7oAEHJR1cWuar2FDHEgJu1sbQ84uVH5MKML3sTDZSFpSCbUzje3BURQSfVCh9vGRC9NNxiNTGxH1",
  "key7": "4aAd77oP53toTrVekAYw4dT16DrCkzbirqGhAApq6H68FzDN9N94cK52thpKYfXVE8LWgmyGiaQtbcyKCrEVLVf9",
  "key8": "4YnsJoYwHVgQRpczYipTuYry545G3UP36eDw1Bvps9Yu6DWLb85n2fuAKWhuXixiNZiZZbP9QNptidmucpMKGzKP",
  "key9": "63TwoCdtzFcRVwB6ge8i65HxcJdMS6FAhJvb6AkgjGsP5YRasp289Bjrqry5WBuFJKg1fw577VgRpgChr1gATKkC",
  "key10": "3iWrA1QCrZue7MnSpgMWjVkQpW1w52976qBvSTW7S7bP8zp2skuPsGHQVKoDrAHSrRY64qeHBXDmiV7Rmu978vM",
  "key11": "3btACFUdhHTbounwLTAwZhVWmaVrb76q4kXM1JxxynHBSPtWjh7RmqXi4myZ1oQLQhHuRZRH7dSP444ZpVKdTLzm",
  "key12": "481Szzr5snGvTUbwAjmYz4wwikquPLUnWEQQkEQwL2esvm1kK872PmrBcx6NWnT5VCJ3KdRbwiqLfFw7wZYTU9U6",
  "key13": "2rHvTZKRsAFyADNnWasjzXXL9BcaRx65knpvcsru2XnVMY7pYnz78mrYXcrQLx2cTB6f7PPMhkdhPgZLeMHvkWJg",
  "key14": "zEGVEVdTsLsXL455S6y9Zg1YAN4nnduwVsDg27gLJKRggyXoZ7YZWTiYKmozZe9GXHAtYYfxt5RoaCJuTKvgNiz",
  "key15": "4XvZsSGdeEMziA1oFcH18S3WTsn6NRbxZsjsKCabpnfutMHczTjgEX9C13GkktEUBaTztZ2BQbYBexMSSA5K4whs",
  "key16": "2ECaK2riJUNyLhL5xBHmdMHLj7hMzkPcvKHQ77PgKWfhRG7z2uhP4i5oSa79rb6Fd8zv9pEBzjL3mfVpKWg7voP2",
  "key17": "2qzdb1Gk8jNcFJqCBAz4vCB9DXCnFzMcxY3JzyW6o9ahicwDHExr5ye3D4HAzsuoTmGSz2vLKr62BXrV6wu76qJC",
  "key18": "3qjStJsuG2LamLyix7BCyMNCou1nEwbhKSxC1YLV49yiK3R5UBaFcjrMvMBM1vSyY89zdabbneawkFXhfhb596as",
  "key19": "2p2aSgPTbbFU29VbZXuzx65qsFzjK6xjPRmxH5XgeujRGrsoNBLs9QybmCMs1MCr1UibRiNcBUw3ieUbtXEQgAcZ",
  "key20": "5nm1Zy62viWDVYWePzKSpiS2FjvQkvona6q9ynHtt1uWeRNrAuggnKcpy6KLeNJG5N3CbWeQPkrQbx9cdTLfmasQ",
  "key21": "3JDzPVGQz7Zp6p2Bcme9ovPaoEdfJRpAx2rdwbdXav1d3EjhSL4fHiLAbTLML7Xh6Fuqhv28U8VzKsgWEyfe9zLx",
  "key22": "4dbqUUdgcB7aHy2ZJ8T3FuGvzWxfBXL7LgigABDr4hxV1uswXCf1yFxUfaAQ45Sv6mTsJ6A2P6ymJxC48BGpmHWF",
  "key23": "kgopddxP1wEVdUaqe28cP1HrtLNAzX187xtak5vWQ1kjYKago1FEFsb6dVgUJh3LT69qPozX1njXQi5dh4PKr17",
  "key24": "ympMVfGCBimQRCixm4ymt7h3cWqiukcL8qXY6dd2emC6MtXuQHfK5z6jD9FwaZNuBJTy1cUrX7wUofMMn1CAVZz",
  "key25": "3ELfTG1ddwQm9BTxFGtSpzpSuezNuUEWSz5oxwFJjZ9Qyv1xwTV8y9kiM5tuhyzhSzB1YZDFx2RrpSPtFfZGtykf",
  "key26": "4eEmcVo9oHWjMGAxubHKEK8fEL5FHvBLChmhixTJyJmpAqsNwZGe6crkoLkTAKUQ4kZ95YppG8NfwzeirL9Ai7ku",
  "key27": "TrzMmccJEA1kJVijX27UamTyiPezdcmQhf7bUDi3DhzZSo2tUanqbBLWUPJqtcQXx9DTSaeyVGVnMHoDQVknqBA"
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
