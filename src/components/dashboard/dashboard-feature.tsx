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
    "4At7rS63GP6f6y9Q2qcXQ8BoyDroGPYYFEiZgyMEB6Kw57hgghepTuCv1NmudVG6QFZXuchfR7D2Epa2d3i5yq2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YdxyG85rNbfwys2kYsfSabbqj4epAZqecoX8Gz74FNieVhzcjXwzLXbi1cj37KZuQnHeq1e7HRoTRGKW1hVPLFq",
  "key1": "5JEvPZpxeLyBFUPMwgHEHxTUVWCXVqeUn4YWxWMHYGhsr7HgsvJ6EWJNsY6zBmpmpmXPjN2CgPz18QYbRsjEWMn2",
  "key2": "3yrPSECLw4uh6NisYiyg3QwStkN7M6eyrRJjEV4cgjx3bC6D2BRPQZjRXBX6p3xUVM3B1zprA7THwt12GxvTYzME",
  "key3": "2uqQGEqDJKzXMeaZGhm8vkFwKkfDYhDpVQ6DWvc47wBcyi3cpu1g4c9E7GtPWJV1DmpkrekCoGsjbr4M6LNMWzmS",
  "key4": "4m6fKmMRiB54z3MfW6WwPmWcUWau2g7Vo8qgt5wNzBkCfxsbehpUycN1WLnBiRtUh9eXSswZxy8n7X7etqYnxXdN",
  "key5": "dMmgBW2mZ1rQdaRep8kocznJCrXvUR6qAcDmAx1fKCGarMaPPqPbZRxDU3jnXcHZ6jrTHZ3YGnaxD71BwfEM4gj",
  "key6": "4hCxAaHeUqMEy6qdmTgzxbZBN2uD3K8neriszy1wY2gdqStKRFKGJbYRUW8YFjn6jm4rwYSfNJiu16bCuvLDXvXQ",
  "key7": "9DYwYZ2nFH58RfikBTLbrsUSnmXZuZDFasqiwaTeCZgMLj9nf5vVJEbPC7jxLGPQmCA7eo5T5G7JLVmoGEF79zk",
  "key8": "2h12P9r6ZfEu6oppK75LkiHUSHyzM1ri8a749mVD9H7JZiYcAaAX6H89Ya2drcu3qocrGJRKgbhjbQqovghEvnnz",
  "key9": "3uCFpVt1MV9AZjKXr4HsywEEsb1ivNFwNXz3bVzANzN3Q9QzVEWbQmnAmuJQpAsgDrHPjXxswxgrFTkWYK8hZTaG",
  "key10": "9VNUbfaAbKMMsuQDDUftpV9a6d5yyUFJrbHUDC2nvdR4HC5BeAomaPEQN79KrH7WysKcrvxGV7FqfBuE8F6rM8a",
  "key11": "cpSn5ec4QskaMfsF94c9Vp3wAXoaCQMFfB7dhwgghSy2zfXvEXe9BYByJUrQy1PfqcAP1BVwud7ahh85Q9qp53d",
  "key12": "2QaZvrrDmMrNrAPLNukbMRTz8rLCKCt2P5aVC6Ucpx7p68MuVhTBN9Kz5GeNgYKcVwYVbuqbi4XcKUsSZN9fbKw3",
  "key13": "2QhbQjjK3tGvUYpWsNkgLCjkyVZQZjRBNnadxBPVP36HsVuAV9xWVDcePbKCQPYuqqvH7AzqaCAymdMSsEbsERL7",
  "key14": "42qAKazTWiQQ8C9DqfMMwxJeMwwztFvmtnaH4QhEHEue3FFZiyJpRys1BNAeLMP8uHXV6xSYeoghJM5MRvvb7YkL",
  "key15": "3k82hkFKThDN7yqz9Pio3Cpy1aqgumLFS15i1kRJjcyCgVH39LG21i45Y7jxFGgH9rNBaL53RrZeDLDYwbGssBLw",
  "key16": "47GSADP3VvSUVvkWYGr3fy19R2JzTSMSq4FztCwBFTn4vH6zAiW4M82XKHn2aVGoEgZpYGTiAFJyH7HkRueN9wVf",
  "key17": "3m3W1idj8GzmTpv9bYKYRRShxtzr2WZBaFyzZ7XrJxAavrZNDXFBJwehE8yh9k6mZiupEMHarrDQkA8UDw1E9aLB",
  "key18": "4zFem6xDfmptyMWHN3amFivUnC716x8mFrTgpF99q4ibkkVQtqymW1pPHZJ86EpXUDV4zUzS7Ptsh87dNXZXZDUb",
  "key19": "4Ydoo8HEiSVk6YYVQZ74dFMKpMcw3x8uq3RxPwYWnSC3bHz79m4ej1nJRoRdedzGSHpqcdAwUpaVxRakbJnbPkHf",
  "key20": "2HhtPJE2zjuuEmtYvXFvkm9h4Jau9PS3Rj76obEo5ptufbe7tjy9zJgaMPJgZDuHA9e7ooNvgrUJL5aJwwECD8fU",
  "key21": "2795tUb6NJxgs1xqiebYqZ2vMSS4hi2qUm9bGnE6giVmEUd5SLpPJEaJxLZMd3NoLJPfs7iNBdRjXeHZnoFsVEN1",
  "key22": "4zo2TVxbhBvLAPaxVewrJpK48Qn3L2TpoDNrEBic5GuULUg4ZpdZ2YQxiiWhEeukyrVHJY8fLUgzWC5wxxUNNwRh",
  "key23": "4mDmCH98oxjbZrb5dDifiAt7u5Wm3iQHwP1gypfUpEYYN6FReQve1sh2HmgGB8NSGRphG1Nf7nM5BLwfGLHPqHqs",
  "key24": "4P13HeXNpdpHdHrbiauLUAujnNk6vN7U1QN6ZzgKTgztA48rTt7MNvy53eFbbM3J3EzTWeB6U8ejyk7nvh7fGeS6",
  "key25": "2maA7vUCaK4KkVPmfv9URfZ32HKei9kgoJXn84aoefMHCimJcXr2Pr4KLMCN7vDqMqbA3TDaLghqtK9yP9wPR186",
  "key26": "52CAMoKWPB32BDDgaaitT5Xmu2ThairtS1t5AxMo16pJK2vYu5etmkrRsKjXHoxEnK7z8BdhwdWnhgXfSd5SNPWU",
  "key27": "2tSb2bU355YGLCXgpqqf3CQNCPff5bET7wSbUcpFfNjXvYjh2dHkfWBauovPxpG4UYDrKPFozkoPfQCQXFuemrVi",
  "key28": "5yaLVndwLPMxubZDPhs23r6jx8yyufy5Zgw8uaBdmo3Jn1KHcBNMaRo17UYUzYVWNJvJWATUoSUYNW68LLGpTxDw"
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
