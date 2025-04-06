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
    "3eDWVGDN7Psh5DzcHScvHLmFQoAgSvVDuqLrGe6NGwxAyHdDPwfHMbmFhKERkDToih87zoG6qYotDAFq3Fo8NwX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avxnHNyzSgbkGidjpwEf5pULRYtxdwsT9sh7N5YE9nmma6Png9DWhBZ4ML3QK1f2d7w7b3Xw3ZMo8dEiW4V8EVD",
  "key1": "37881TPFajkENDCZTiXYhsPHefsYiKSPGjd58HaSKALZRNuUripYVDzb9iVonyaDqNL3AHPq1mTDezsTrahyLaUq",
  "key2": "q7nTJvDVCne9G4WeK6C6w482PYKX43NBpMcPmuCLBwPqXpzih6kiWc7x6cJKGjgvMZLWvWCubD7v6rzj8V6HS5c",
  "key3": "5iuwryphfFpfvFWCaLbA1RwbkKZ51KVNwunz5RFuNtwA7PyCezCq1cnGSepaNF8L1kLqzkVcnGFEHbAd4t1Wr1Pp",
  "key4": "4wdVXZpzRvrtmWSeYCciFB3kyenh9hKTQ24zeBXC8bPi6gQLvMobvfsdmpDstRoF6PbF92dBr6G6BKK3dt8dNCLv",
  "key5": "4ENghk2Cuut7hJuCDARCY3npvcG5XEY89SQdiAjDrBDJ4U2arqttJaHdFTh4K1Fw2d3dSbTTuZrDmgzjCgTR3kTJ",
  "key6": "3UEMPo1nPeaeSv2gcV1B9KefzoEZ8VMFXpNUsH4vTkPvVEzqFsZicd4y1beT6PZkW4LMTBdTF2QG6vEccu81ZCuK",
  "key7": "3NZ4KUVYuhgdvcx4mcsZQ6U4WU4Gz7ZUKujUMET5iV8z4BVGNZ6thmZkGVgQwtt9p4mYoUHR65Y43tFtwiyQDCmd",
  "key8": "2DJFUsves4RSRzPxNGXztYEYA2HVsKELuWqpbo4EFSXhpjZTxyB288izeTcrzgebMbAuDzL7z4ZApXugEATRfk29",
  "key9": "47ZEPiQ8ZaYgKX1g95u8cJHzw4ix55sc36i8ZBwXfGtZTuHfMKwLbSpmyR4f6kPkVJw751hSTpAiEoBAa7FviZfp",
  "key10": "6wTvPH3FpEtY91EgstFZpZ5PFARKn2FXgkQwCms15VVoFxz3Yq84uei6BHVwz448r3MjWx2wS4Gn9ARm6bcWL6s",
  "key11": "oWjBNNJLjyaM6n3QtDVye98LTTY4dHUKQrXQdRLBZdP3XSEhzDE97dsSPhZHA1Lgx7oNzTbDrdDvBQ5LBFHgGq3",
  "key12": "PJVsq2y32ae3CFAtpo8SaAoMWsetTCqwnz431MD3o29QNo5jjVXhZYrXxkbCQyGroQhz5uiTNJQTeVVarcWxamZ",
  "key13": "3Q3hJ6zbM8B5mLFHSbETYvoq1PbjF6iVpASr3T12gs4KGDH5rDDBKKDm19EgPNLCMAoaTKNkJZdpHGHyo2xgVTf2",
  "key14": "4QWkN3o4Sf754npx3EHfPWdJRq3EBpqPhmivGATHGJsyVx9UvoBxQur6KocmeNd2XzNTRdke9g8iTVWvLtfERRd5",
  "key15": "4acDfuC1t5kELaYXNnJZEuWXVpRZ3CUAWSGG2L7hrrvMnF59Do95CXyjwyGhz3AHyUwi6WWpY1x6m755JXrx8WTc",
  "key16": "4Ro9BnuXZbV2Excq5sXbLXikCNatW6gdiTxBw4PwEyy3CnxcRSmBiW2xMtuxN2NcW387vGT5NEgsS8pFmmgjkjR4",
  "key17": "5iVmk82Ac2rKjcrknGxC6egFU3JhVaHgceXAe9MLFW6E2TyBU8b9pWvC2iKNPMnLuTyueW2824pKUgzuYVkvvhoL",
  "key18": "43LyAT8PhABRwV2BYGY2W9us5tux6sXcv5Gh6XSaCTuVgyJCAiAyYN7XgbMgUTuCvuCEAcftCqDXafekwqqysNA3",
  "key19": "oHBDxWoLzrG71eCVmGUQgReF2nXK648QbsaVRHAaX8hUzA5NGBKHrCCVG629agKSqDPUqHR5L8MmA92EpEne98G",
  "key20": "GGjZf4LyBL89QUTJFd7yot1ASVJx1YSKYrjGrVABbmBCPzkjeeky5G6EjZMcX8quVfLX1TPjyJeBXtjxKVaCofw",
  "key21": "4YE1C1avdtvAB2XFb5KJkBeMqjPodv5u7QBQTuJQAhuPP1arDKhWMHYqXfnPFfNPFKTWW2PMxmGg7JBQf3jKr2Ae",
  "key22": "2EcG1W4wMYim3mnkKmiPnio35RcPeUufJSoGyumoXpgqqGLo9YnBSwEk8yUJW9FVPKUHJBEyaz1GBenEzDU2ambV",
  "key23": "2NXpKbmGECgd5dSHojhbri3LSCeZRivmubgQxGcJvRR3Qo95a3UQCXdSQg43hnCcKkYUHXpENUz8XTDFo6uwXeRu",
  "key24": "2Wpoz2byFacyPpWVnVXLEWa2dKs9ZApLmuZ6sJx551eY5gtuUhyp9A25kzpkpc78NNehadu7Dbs21chdrW2FE1zq",
  "key25": "5EzPqqphXSwq9SDgMK5qwtjxqRAQLhKgQRYThCPwyLkFJANA6DH8ZapEYmHUgb3H3bzdZDniVhZGw2XjXqjttnRf",
  "key26": "5uf9XGrx2kBYxZcZDGExXnhzmiwdbpfVKvex7pX8pDvBgqZd3c9dLUaLSidHVLXdTrLNtySdqcT6Gwqfvf6u2Epv",
  "key27": "29QPvu2w9sCk8d63h3um2pDSEfLtq1muAzGL5j53cn3R3GkNiYpE4Dj6EQvugZTEXHGcBB6vMqa25aj2TmB69nPu",
  "key28": "3sLFtdnJotRsuiQVnUufwFn84ua5mhCMsqm3xJt5otj1nzpTqRmwRyNLpcfe5H2Axcs4Kt4J92DcQGyhNHZB4yct",
  "key29": "2CADLvqYTFkxTWeNsERABiQTke4ZF1wvUmvr1NaUtMRfmkBUNY8ZeHsDEnRCboMMNXWV3Rx6LyEywYy6GooQDYpG",
  "key30": "5KXPm12i7kPf8A3kX2VcrS5NAc9QXe1YuZ2ZRi7KMyxpSpsuwyRdn2bSMh8VzQ5DRpLm9UDvQT6Betdc1ZiZLkUU",
  "key31": "2TskAM6deQ27CabSg3KRuGKsHaGkm1vr2ESNWnGLgPP4joesz5eA3zZ6mg3j51W6fy6P2aT1UFZZbceefhQk37G5"
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
