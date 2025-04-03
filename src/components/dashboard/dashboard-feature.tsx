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
    "21qsmoMi71YfN7fbTbCwsMv16zFUfCG58byQHVYBRJhCffNtCzCcBirLDQ5jzW6CwV2fZgac8BgoNMpBE2BFvxvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSnH3WmmfWiFKoK4hsp2zFnhqLhL5r3s3bzBxPohPESUzaf8R4UK4JkNbys2mqkgUM1WmaJ6Dw32pmeuTdnxPLU",
  "key1": "236BprNfoAmpoTJW3UkMsuA1sesrkofs8K1U5ecJ27b39WprSsmYQ1uBZrgZKFpzFz4xzokHjoeEGFjQM2WMWc7D",
  "key2": "2A3C3K6Tj8sN6M2V4ULKW4pChyYr2qK829vLtXempEUxekHQBNQ54HAaQbSkHFnYKVDb31ftSi25yACdvxnbJ1kU",
  "key3": "5iGTRW8KgCQ3jsdPd6g7sWgiQ8Rt4kmjuLcEWDRPLiMg4UXuBX5UhGVCQnn2HmoZwEm6Kfo8weZNZjSTsqvNxESP",
  "key4": "2DEBy8poCkUCacSSAYyKufJ9ruGAzAovMK9fWPkGmnKTnagMWV7BYRNZupJh9MEea9o6PdCC8pA4yJz2DVNBtkRj",
  "key5": "232CqUxrr5az1XTFgR1kxLVAPEHpKS2upWpzaGNLy721tWGaKkqSE6pS8UtCSYScwNDwNbjRyxSmcMA8nMmoQYRi",
  "key6": "4UsdYYPUVqjp7uDmwxbUxpVXSLjKwwLpgSUFdGziPRGTEEXwjck3DtVsWrzPHUfF7FoEFZsG8rAZDQ272H8aWrFY",
  "key7": "2ogDgXhfBzD2GcxwJJSNR4MiaCCc5M5GAqS462LQzCgyAXUVCNAyb9pdDviKgR6GtdCqWmX59Wchm685Gbf2Zbvo",
  "key8": "2Lb6N2XwBEc4FaXkCwo6BWb2TRAPTrNQ9pXsSi9FjA3yLu3MHQJ4aDEDSuN1fUK5Gsj3E7c9xu2kUCfKiC5GfjMR",
  "key9": "42dWKsnP85icim4v9hopdHWH8jEhzoWPNoQ8CAd19Zy7FCNXYDphSfJjhA1PZfrzxxHJk1DSksaTPGdFn949wez1",
  "key10": "629xwpdtErjXBzxATZXvTbQuBg9T2VQf3axMHzcqdk1ZhTEiZpr5jLg14RCSxZRi1F9zwpdmJD9MVYhfQ8ahtUz",
  "key11": "5e9wUS34n5SfRMVJDamMyMnxZEBbpRqUg7HVCLcbRw6uSQab2dfKWTCuqUCnrKe7vgujYYm5NabmjHTqQcuCGRte",
  "key12": "4GsQgNGJkegNp76FHQr6JLnDMrUJAVBDx8RA1cbjooqFs7AqkGZPZxoFJ4JbgRPu1meZVSeXr7Vq2ciGhjYYW3ba",
  "key13": "67SisiVfbMHKhXe9EkBr3RGmhJFRMdz6tvgKa7rdPux1iuDjSLZ3u42koiwMPEaqSVHyABTyCFWfQxxcgLYPHWfc",
  "key14": "5ehZdDgM549pFCEVRzsPV435TfNZrFLsN6xwunj1C8Cu29r9WN71bpgT726s8K1inLWC4F44LCHBP91NMngZQiR6",
  "key15": "5TRnqQEEiWsmUT9qiwpGRuu3trZRqH3ZdCJMzC9mRYzYAjQt1qbALTGakoTYbW5fi7fZBmKwrZEnA5innWF7kCPQ",
  "key16": "uJ2Ngu2vpmAekGApSDoeyEtYLJ3EJArWoz9i5uUbWDYEcG65wSEqp915AkKRP9w4mWr4MwyeFw2PoripghMHGQh",
  "key17": "5bptHdN3z13DdgNP6QniecqgTVyfdZYU886YQFtzVNzG5d8arYD2MjkksjThqQhxF4BK9MBds9GDSHfsgbTrJndR",
  "key18": "2npu8syP7Yc3UAW8b9CqLHGQDTEWbjMp2NrS2wamvorpviKrqHCN7i19A58Sh9AnzYPvTJi6JYrF48xa4zfGqzFJ",
  "key19": "2FjsJmfe7J564uXPXGDtAA6hFhmxRFSUvSBxFV2mN5o1Zgpe9oL1jRtYqDSNSUtw5RRioUZVgSjNiFNCLwjBgmoz",
  "key20": "5kzPJjRG8cCiWK9FaaCMpLdC8yBorggyzLpaDL5xUkGde6GFEZMNEDbYtJjkKMBQbjm54v4Cm82dEdGdceqyAvFh",
  "key21": "2w4RtB2v8HnM3nNBEPWSTqmYqTchySmmAbpThSEGAiTDVz5xSTDyRMdExFJ8xbkEKaajvpAHtAimbTfdc7UyCDfQ",
  "key22": "E9RGoovJdGcDVigVoMsMvaNSxVw6A1hcrAjfeiNtf7p6DWvbGNkLWrMHZBRFhQqkdkKCrB1ENXGNAifm25a41iG",
  "key23": "4MsJHSffsZTe2SRVJxzQjAmQ5BZCjoaziaYNiaf9kCcpJLkokAvtZ9sxDz7bnq2TN9xNYmP2BPBg1JwRFbLFpL2F",
  "key24": "3vA25rMrjLHqSLqjQ7Vm2ntP88FZQvp536zKMd7dvnHNJnEDDL5urNfkEmX8qSsiZgJqz6EcvRw27DPVXaogtquX",
  "key25": "4AEV56KJTj1Pj3WfnsgTsEWtU4Xb9JUyENzd6WghjX4cCyCvEJ7J7KGurVN1heQFJJb9iZ23M4gEDPZKBPPcXdS2",
  "key26": "5EUgzKTqBHvmvLYSDUfTnXhENv9pFaRmYDMET5QCUByiDqDrPS4Vyb2SFyGdgvstdopQTSwtpLK8q76GS3N9yqT6",
  "key27": "KGRcXhtw1HygC2REnNPNYqR2egJTjvKcbGMpaR6fZhFCqFq3iutb5bpBAZFurtVTaBHcFtwYTPSZD7L6piTHaNF",
  "key28": "2GFEVuwzgVYdyxv7PWCidPCodCkxqjPmcj4W9ELxR8ScgCRTjhFSUxLgr7PoHKMXhNzXjvN4kVddKjpAUixV8nkx"
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
