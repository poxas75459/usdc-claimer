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
    "3f5fJeXKF6sVC9te46uGsQ3gwQeXabxVX5a44Xf3hpy6iYBCJsVPLUhzAUEpbaGko3NVvaLfCApCbyoc4sdFsQCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAuxdR4GbcpF2x7NTUyVudFyiPJenEN9UqsyPcQ6LeEmVj2nCRD4U1kXAK6ofQGkFgStMopqVU4cZxyFjDtNUFX",
  "key1": "zA3PvVejqSK19n3bB9kYqhFHRCYR5sH1CL7rgJZ3Pd2aUUCrdNjjwwJoDUZBrc2gkcjSFehnfLCRYQfoJGFm1yn",
  "key2": "2yLRx2kMZuu7htaSW8cyzq6mq2RUYKbuCNeid9Y8da42rTmfwMRZUhN9VxNiiQVZZ8RqTrTEaz2T7LpqJ8ho6D3d",
  "key3": "2ySZWJZBiLcFo5aMWUCYVDHd6ZQD5ySphqqUhewYBRXateDK4vDwQcLReTzGYJYuPgk9UnTXMZD9odTVnXNoswQD",
  "key4": "4ED9B71zQvH5Mywm2gsjhDzKxH7SXj4fBH3dibsvQy9bZjPEtdbDw6yz4LZxZBWqqna4QrY55nJ65B8qkPYXD3XG",
  "key5": "3vnEqQRotvDvrD7N3XZryuHRg7knFWuBCCbQ8XQ8KS3VVyoZq28kJH3zvRtKS3e3pMK6C3fKNp7X1RVpqujPK5gu",
  "key6": "5zGAUgm5SriiyqzcLXSoyy9SyAKi5GipRDCnudpe4c8phA5a4pacdZushNhCZDFYLuUUKm4iLDLzknN33K8a2ixQ",
  "key7": "3c1r3P86j4c1ykw8M1kB2xLeQq4z4fwa8ePmgSm3z5D9eJjVnxWTbQBA1Dsrs1xsCQVX4nPPMsvqLSV7Dst1Q9YE",
  "key8": "FXBo4Qyy6i27uL4ACidU9DGtqKfdPQeXhY3REEhhZq1gw3DzFdyyBLtjYGpeCXsB4mDXcnaLuDEx53r7eK3BT2g",
  "key9": "2X2j7NMt1pqKGMv75N6iwGfY2WNFcoahG6MDTVCmEHAeNAoazSp2s3DcNaHj829UVWPdQqKTUq6muKUDAbWSYCvA",
  "key10": "rdm9UYjNjAApbojLRbiHEdXBLqJbBCMRH1MsgoYFcwa2AUP2Pn8UJmAJorBxmkzRTTvZsDhhv7A8yYHxcnHwHY5",
  "key11": "346ERPaeBvWTXVtqQA7kj4d7PU4x6xhoNM6QQgmkfq8Lz7zCNfuwLRmnzGDeYmSPaUTeu3YghSVgpfipRCEGyZ49",
  "key12": "2k8BMngg3om4Ccu3hJHUnWTo9KeHQAysiEsoNytZZxsCKYTtVLq1zHTwvE5Q6u7zZAiPXZxSvFxwrJ7e24CqRj3M",
  "key13": "3c1Pay3PvE4aoKSvVHtRzXv63ALt9L4VedFE4cPiZ1g6YWMLRX8E7MJbaYc4ta65pH4e1mqm6xp89GeJYL14z19y",
  "key14": "5ZWpxsLDvZBVZ7fLa7cnEJpd72UDNDkzirXBpJ1uk5YdTbiHoDFy3drEt4y2nbyaApujhjZGbyLVUp6Wmhg7gDZa",
  "key15": "2ngfAoKYjQaRXw1A1TaVC6x23GkugqvcL8hN7ePrbKfumsFbYiiGY3FiVKPFNgZTyjwaQR6j5S2ZmaoqQWPed3wu",
  "key16": "vx2mRz3CGJWZJWaSKDttEyhDzWczDr44EaQVSzXL7bmuWsteFVivyP8Vz1GUZzLqY8RdYgAxjGnM7waRwPh97pJ",
  "key17": "5AZKD3CU7UNhgCNgeWysXLhMcG9vY4t3iS5zSrY5fZ86QTeYcdG7mFkEaUy5sCgnvbNHCZWGzd4G7GSZ9WXqmnQs",
  "key18": "3b6CifwVyGsCRc7edztEb5hPXJbZriKEqMNtBdpkgAFQqZaeUxf2m8AoJjffYh4PmNufoviffCto3Qgjke1dyV76",
  "key19": "5f3gSwF8ML1hpYhEkGDi34XoVCVNDW6cgAtVCYmnCpmyruVm76F6Lfgh94nALufXhVcpqZEXQCKWJvkFyHagcRKQ",
  "key20": "3ySADYhk9jTSQpr7WCGrCz3fcXnU8WP4sPL4tYCABmXHJopPAagBihdyo46BAH5faobhUkxLvgy2JgLfdVogfjmH",
  "key21": "2untU89dw2b8bHjKVqRbifJGmMe2R7xwgJayznZPLLioXXwocr3NZKwU5n7pyxhY87VCMP2FEMLiYedNe4PECiCD",
  "key22": "1PD4XsZhFX3RrfMahnvAoBvmWU1nVrLxWfojKdwRaE8zMVzK2gvDUsC16q8NikkAMRHeKCE5NrS5mKwpPHYNC2i",
  "key23": "5AFAuyP1Ry3QGrbwLweuxb5oManfJcYZEPgFwvcXeeTbRd2nTz3dSu4kt19ATiWLHxbWB1SUk2VeTN8o4skKHnkZ",
  "key24": "3Zs7AzNg5V2eyeVFHfpqY91MStRp2HEq946jsF1P4Nj5FbUUEwvvEpRGdDS6SrE1sN5rrxhirB8J6TewWtEkMAv5",
  "key25": "5oq8hhyomcjKtctixooB3qVyhKKCZJY6QGM9qPZRhfkLmmVrL8fM8WXAAZuoDEoKLTmB9mvZVum2rkgstDsNYmGs",
  "key26": "5SaxzH7oKTytbt6wLEmkYLmJiZn6VjJc7RRLEgnKvLLhUhs6CVYnxJnQx9kHBa6k9wnw9x2gX5bNEYUVrNa86pUk",
  "key27": "4WMpXykax7VwPRJHYoZ3DZfEvrJU5hYj8ufbVf4X3EF6ckhFmmK1X15Mn1Lson93YqabZ1AcPf1HXYLjjm8sN7BN",
  "key28": "4syszTm2KUgnsMCVwwuqqTKkaef4yMmZfhAatJG7tdZZ655a7ywuKxCjdREzEUcVb8wZaTYAeVHKMRy1nhF9bNgw",
  "key29": "2z68PQn7dkuod7W1DyrCk3gr9zquT35Pqb4yZCYbkUw8hZiiLtrWMZVtWMoFc8RKThKwCQLm4cmfc1yV2KxKPBkn",
  "key30": "2qWGb4SrXpFgGhBtrXSv5hLEnzgPsbqu6MrKiiHc4noCwTmtbePXPpANBadigokkTgLFNkrk65mMacCf5eySESaP",
  "key31": "4JrPW961sBGNMdhWVErBeoQinAmMJbKrbv7E8P4qPSAas2vNutEmTPXFNqdLhGPrbEZwyKXHzmnBbmkdu4opuGF7",
  "key32": "4sS2Ms1Aiy6qkBPjMZUKxouad2vQ4tHX5nHBajPy7oUV7QyMP4K9tbVeRbFdhKZTdXcHh568njETBcGLsmVAfNXM"
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
