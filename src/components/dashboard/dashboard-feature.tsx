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
    "AXS4dqYjqtTZajNWbCQwsq6whwAvwmcQNrx2qHdhku41JUeJjEf72Xjx6zvXQjXiQLTojbXkWRCaVCJ9XUUsDtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kV6JLfZtHMC5xRR1j4BFAh7uKyjZ2LdhGytFzKTBJ3GHFgEWi1Vubt1CNRJ7tZ2wv7ywvdNjfTSSJ21Jhdim4VU",
  "key1": "5WWvP4WG7kBra5EhhVtasDzENYA4Zw52oxe8BPeidqcbqfx6btrHp27qe47HxMFchetGoFxtvSVHRs4QidihHHRW",
  "key2": "2yF8jbEXZQqkN62VXBfMgPjLJftF23s8EyFNWPZqLTTBifawLGVQjcBCK8WfFgKM6kzn8QAA4Jd8EYXzUjUnbTTi",
  "key3": "qyEBcKFRtW8gTA7wfH443tRkgwr5sTDReC4iR7prxLyDYtsq9PEKEDwCRgEk6STDa2MDQkRheouHH9HQ3fLYquc",
  "key4": "3N29T4toRNYxBZkgM1czEPPEyXdwSx4b3TguPtbzogZsCBr5RQKBGLf72Y5VPp4L4GHhJroHuWZgQ9PNyFwCNfUR",
  "key5": "vvqPzPKDFPCEKd5SMFWzQPmxfjuEJQprtBwwmErzAD7E6wDCXP2nGcoKCbhZxKeB7eXjrHMtjtBz5oXk2j5fxX9",
  "key6": "QC8USwHsZgtuVDJtwr2rRoFvYT842AkGakBgJE3TT7UsZmefcxeonoxNmN8S4yWZ8rXNFum4K4xZWjLYirqs42D",
  "key7": "5DfNB68gfBMZ3zNH1Ao4kWzJvLGP4HRZ8xfiAULSzf84RBhdsWbEDgLqwknG6Gcg8HfvoYqcvmQrLg1xYP3C9oDL",
  "key8": "41JKwz34BqE2bihpcW3zgtbqFtVA27YWP61bA451N2CYpgbziNgvmSpJXxMJzAjicQJm8D61U42Rcx25Evxfjgno",
  "key9": "55JwLifS7F2Y1fmcbkshYbbKbZ8vCCz1T2Kpd1NSgVKqvse6Dqv5vPRaDy2midbBbV3t5283DmGKRECYT96yFrpn",
  "key10": "2THuf2PfKb137rrbVs5K5noNN1ijKgRUcShzvzrMmRUpo348JaipLFwzRKywfv1zjQF8DfCHXFp7uuYPSqdc91Ad",
  "key11": "4HymXLA4HK2my5f7pb3nrBazdpFDzV2QW4UixAo449MccGHz2M1hJG3JFZv7XsXiQpA5czduprqp7XAMU3iM42yc",
  "key12": "4KiRfwyv4xCmirMGKwW9zEwcDLBSv1uqw4yyY7sWtf9zMZjy4shzsHmMbkvzuz7MkCjG4ZdNf6PmBRwRNeHi32fa",
  "key13": "4Hk2mk2DhysvuevWJwFEP5aZ1APPCu9fAcrDyUFnK93Nr6U2jLctYymzw7jf8Sa7WDuyPkfaSi1uUEYGqqLKjhb1",
  "key14": "3XUs9xrkLPxiFGH1YigrVqGG5mp8v8FNVN6L3j3SCYt5xubCmbaXMNKoGEbhjTY2JDonS56q6376NceesqbfgTCd",
  "key15": "4drYiBmGryKfXrUYxY2cozcRi2LzWPgcipRAZiZ7NKMiAmFtrK5TzsbWBNjK8xAJihEAP2AbKidtKXQNj4UnVnZQ",
  "key16": "uhfcN5ZioWCwSNBCim4gy76AZekosmC6abQZePmcmQuKz5ZqEudBk2ehuao1VQHNimeYhe2RhJ7S9U922gySv75",
  "key17": "588xt5rM2MBp3wHWAKi36UXXbT7vDUvVkSuuBTb74CFUcpmoutgTZMe869rQTirJ1zncmTg3HxK5P68B9vu8Y3ot",
  "key18": "66JM63VsweqFNvnQgotYtcpiLTGd8uuAdjjxKdjMrq26EhrFv14BYpAoDEtXodbCfPgtvoXrqh4FPmFbahMZ5fGh",
  "key19": "ejA7NtgdWLFLKiLYEQ8kjCtcNccZo2g5HXRDJMjji1dM3MhCQX5LbxXPptxWFJ9xYe7eMZui6BRmx7sNqqjWh9J",
  "key20": "xHw7pXQw5rVJVnXS6epZTZNjiCNRDVERTzvKVZdfFwera4sto2bz11a1FhnGW1ahGfJjQoQa3odHPtnRsWdBqMe",
  "key21": "4Ynp3EgkvJtG7ZK2yQdRBPKL9gW8GFo4jsHxBzaYg6KFsm2zkjyvgLUVCNXLDxK1oo94TPqZ3QgVWa1ccFDiFhso",
  "key22": "7t1987itK36wEoutQQ1oECWiiGuUAs1JVRD3C9ohiEBY7QmBoEqPzn1uKPCY1GvjEwJMeuhjzqkALUFZzmg6RcS",
  "key23": "3TaTmVvQtmkN5KJuAHoT7v6nb5ofDv3hLzNfkCyDekJKuqNeiCbpggbVAP87ei4vYxz5Gmp4kpFQUrCU27Npndqq",
  "key24": "xgKyB36jJL7T37xuYfq6rWTnbAPWJX9j6NgmDSGNUsaXFUYRKFESjVAFNxwbK94ZbG2GyfizGhPD75YSka8EdC2",
  "key25": "4YJjwVkMLjkW6E4HXgpUi6kLvxJAzyxMfTEmHpRp8JxhPx95hkgQQDQDk6cMQ5jDMCGMabCmQmvuZNvwRLeb5VWV",
  "key26": "2vDw6JUCfr2pGxahXfgZqqKeQbqtndbXFTGjVm6YpRNCy712uKNtmHGjfGZKdmavmMjNMgkzg7FcTfBrP7v1MsD",
  "key27": "22Sb74Jwr25Agmq8r5wDqfrg36nFWvMy3Vkv8FdJNWRdeBxGxQhs2SwcK6tMmHDVs3LmCmGKjLVdpnee4B5vRYQR"
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
