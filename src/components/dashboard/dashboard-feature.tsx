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
    "4zTEm4UY4Qdh6xNTeu9VZzMPEa3Dcekm519LzozLFYk9S4QwkYwtDwbumhPNfv9fC4csw5kMuQ5Se5GxjPW8jP8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gPL1frVsnPv2gkyvdxQBYKMqBB4Kci8AdLeDQLeFEuCT2y4qcLbsra5N6vEX89u6UFGBSf77G3LyPrNB3UEAUNK",
  "key1": "2ad3zdo77cFcrdLN6Z3wz9A8gHnu6541bnP2G9QJgUV6phbuzo9o9zS3yiWu2BsHj8PKCqx24b3edEjSserSaT2J",
  "key2": "5SiZr8EK4qEpYpQN5kXM6hybxdiaNSWBdoeNSf95EHjFxsFHsZvoE6zPHcruWqiwMMvD2v8ZEJ3ugkjN5ELMaBzh",
  "key3": "2sU1NRZi1UM9JQRpoAPe7bKFdhYDyQLSAsbCapH6uQsTonNeB2xwt4sh48M2US3uJFNnaJzBZ3gSZX1FFxTRuo8h",
  "key4": "zWutDDwzLv2jPmDgK5WhKB6Mk4FyWEArVwwa8oF4DPV8D8YKumXpup7hwGwuaA3UsD43YtpiGwZS32a8LEhnDRq",
  "key5": "5sUP9kQDW48zJUnTYFG8oZkc988hrRpsrKSJ18f6cenkkY4iaJhKBLvLP4PtKPK6VdcaMu8G5rLQ8NtvR76x5qb6",
  "key6": "Djyogpygmo8aWUdQjm9DPWmswnAjYrYFmVZD3wtZodZbDQUcBvZrgpppWP848Y7BBrD37CoEybgp5cceuL2bdGf",
  "key7": "5U6TV6YSw3oRmMSsM1yqe3S9GpdMPqENVo2XBczXktZ86JMspYHi5jMXNwmPCshf7fRMdNSg9yRqQZdvSCcXFTy7",
  "key8": "4oBGbj6ScYjyG9w5vsJpXfdyqBH5Ks57n4zgrf9x4SNBK5BUAGvHBRwcwXBqvsrjpfRC6TysJH3oFVW6JsfBUkeU",
  "key9": "GV4UFqd5hEmCQtHaxnN5j1GcyZP4j8vAhH4H4fJPWT42qeJGQVdeYjwHdL7uazvSSgdv81xr2NuwuYppt7XMGLt",
  "key10": "5xchhDdGMUY6JeBPCi9CySW242z1XJj5w4Sj4EpwH1UKuD4riSqtytfchMh8QxbwD48bkRKGLdcoNW9TnDJrz5oU",
  "key11": "3Bzcz9RVdhyKfBHd5FqFVVzp2aUmN8zrpkxUhpqfRxgKgXDo8F2V1cdKBKH1Q1338RYt83RdbHNkCQ5NVWvzDigi",
  "key12": "5Nkksg7dScXJe6FyejFtb5wYZDHTjPtJHf3BJivrLJNvjT3FHdas5iyhQ3w1CrL3AZx7a3u7PXYN79J1BFTojfd5",
  "key13": "36sPqv1ro9rsnic1x1A1rvrJKmsYxMYVGPGFgRaaj5zvKJaab7kvCo48NQdVtigjCaHaWUTKWhM1i1rpWeFZf1nt",
  "key14": "4FwzuucraaxdvgTbS14xPgyujmnbUHTSZTftxGPwZNXhiER46QZFqeMawrtdZ7eyBDLddmvLZiLXLvDucNxmGW3j",
  "key15": "kEhK31Sua2siUdgovAR1q8Q98UNjdtaZruXywS9qfze6Kk4xnjpEBfTWh9wq7LeNGNHdzjBXxWDwPaSjH8NuEzC",
  "key16": "44ihsctWFYoGU7Wa29EHNonT4gLHNzGjcB5pJuUV26kvFt66Hc8mUdvwS33s7fAn8YuCAZHbPwLzDB5hvUZv6cVa",
  "key17": "3WXiZuk9NSdH4ARc6q1jRvmMUATakrNPtTR9PUPD95XNhaWCqL2qwApT1iCt2SYxEuG4YCGcxqhkXenyYzDWXqeW",
  "key18": "3JqZrgeQrWDaZ3R27x62GvGwiBrQmBHDvQGC1Hq2m2j7CZqfMkzFJbcgGvFhwNt4szddXoHooYWFKKPkAdtbqaPs",
  "key19": "2TSMyjjm52F456sS81b654QiwJvEHCGEfRAWXkD7pbuj16cGgyejYpxfvijSEDNFQfhjV63D25C5Y4ksYF2KXdjP",
  "key20": "MwCE4SUMigv1u6UamSSyeZSUahKk8Dvd5FEMaRMzpEyuuMhVbkVwdV7Ln45PHXiGsXBgoUenQbvu2dNwRu5Qnjc",
  "key21": "5h2mHn6i4JG18SDNSKzJBjw4A8zXvQCQ58WbVmdypvZDY71Bnoy5Eu6f27LiVRHk1T8gvG4BwwXqXExCjDzuiyJd",
  "key22": "aDJGVmig6NzE8cqyLdTWoU5SKHpCv3mQNyuCGgRbFX6YQSGF3c5H7BPDo7Et62QfLo99vDm1mkMSyxjuECQJp9g",
  "key23": "2NYoUnty49CZMKnS7SndCgWuFWAh7cXGQEweZC3CcJxwahQU6dmKXhG2QJCHSFiYnMcV1XkMWFk2HgBFPuzrySgu",
  "key24": "3y1793fJ4cse2WXBmQ5JTMbuycL4fA4zmeExj59yNDuhiMyvSw7sBDCjfb3tnsaa4VDCMA1LAT1dkYvQXxFYHCKm",
  "key25": "1DcRSpHbbHg5ASRsnpHXcCsaiwCFTw9oPSQ8aSyyKNvtt65vTTLPcRz8XGeJMKNRhm4uGfqHXV56doW7kdN2BYE",
  "key26": "4Xd94h7toGo3ymBoKEUpyrqwdW311jBfYTBcacdAqviGnPsvJmw87i8pjUPNMSGpFCJ2PrMnVEi4oxmspdiT927r",
  "key27": "2QQbcmDqrjgS2RBwCbiTzybAdmGAyiB81TxQjckcNAHyE8cx8ULemchK8aT2MCTsHQNpCoCqu2FEcfWq4g6EbHsE",
  "key28": "UUcjMViwRoVJuYPwHeRCG8X7gcAsv4HHZmS5L48Xy2WRm7A8XqhuvrwWofyXcdz19xpByiU6pT2zUb4nQCP4aeY",
  "key29": "TEx2AFh8GFkP9p8X7C6zifzWhYNKEZiE1MJAVAu2qur2yqYh4kv1SHainNzQdQUy7CmonrNFXgAvfGJkvmuAyy4"
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
