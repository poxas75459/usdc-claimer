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
    "WEhUMd6p5KMJSSsuYrEoEg8NpTVc7CTQTAjodffHRPKCPmSNFUKjUoZDCzztnvP7PaA38aRyJMdJYCizM6Wo4xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UPSTUx6AwuyWtzXpDf7KiKt1op8sQX1wuF9CNTwDEV2gGgk5L9FbyyVbxqsCqfJDaYJUSDrCDqh6xvPkugsxPv",
  "key1": "3sZGUgWbgCQ7aPGpTpvxpPpaJpbEFAkxdoN6QKi2GrViUnPGnXNLnVJTvuwyCANpQW992r4RpUD89GWChNP5Zi7t",
  "key2": "645ER6QjUh8nRh8JJn7VjbG6yJGuERt7PENX34yDQv5VcMXCaUpf7syf2hByjHXsQ6HZ3LNqwt23Bsrita7wMkJN",
  "key3": "2pi59F8V8uzkF3cg7tGL7Sct3NfTq5eR5iDtV6cuk4s1SZW4y8aSxx6Pa3qumjzjJTn35bsvBbPGbQTwm1E1LrSF",
  "key4": "3V3e3v693vQmbFqGJ9HmXpWwe8g8R8CUgmJMzfZarQJcELRBHVikXJ7PVi7JV24KAv6Afo1fDsAeGApvnRp1W3ux",
  "key5": "4X3s1VnKexNtPj2NnbJQ34smzc1JcNxNWTL3p1S6prpGAKGb1qDDvK7CdAFvnNstDoiB4nvv8CigSEAJPpMxprRz",
  "key6": "XxSqNFKRFaMimX7qRgx4qNT7bb86SGaeW68UMSCWm5Af4jgGJcUidcBho2TCiRvm7KHCMrYm2omskZCYJaCApLT",
  "key7": "24EBsG38RDtpBqDcwfEt1UcvaN1QtkFrLHRTp59uAKRqxFhJmbRoxX8HasWiyHYV3SH8a6UYbpmF7BzA1FrzEahq",
  "key8": "44hREZctpDKWkZ8H6bYkdn4F2FVe5LQZE1WLQiXtaFFVVZt8EV78BL4mr2K1Pe7ZPTfR1HXmtobjZx7MfiWFiaBM",
  "key9": "3ZRJkynshLKMKKNjensrYUVsT6gGTESW2JuXiq9LLEK5jFjMM9U65W7PmvfDwC2QJHdVNKQVUetPXtMcgxLmncJS",
  "key10": "2FgkRnUTtq8JeKmvjj5TukBqC5vjgzXaoCgRCGkJLnjPEtHBbMkHkddNQdVVANyoJ35Mg6UUo8omD5z98Vh6AEUU",
  "key11": "4Cw1BazTsYBRv3FgXGc5ZXXq3fvdDeDP6GX2V8DtQ4U21CD4Ef3iXqenynoqtUUuHygLTAktLLzDJAZTAAvBgibv",
  "key12": "5mBrumcLGEXpjF7ngB6hUCRoNrPk98EZdbVwvBWvfYMcWTmcnJvTC9ZJSsdPQ5v93u6nME9FdiU6rRRuXAw8Tgpd",
  "key13": "2iks2FzxtHDdcgeQVSEzVaxEBHNAVMBKyyCzA9itzQmHqpwFWaW8zUeXfy494GQTXEujf93woxHDhhu7Ga2n6Fh",
  "key14": "349neL8QNS1yB3o6sSN2ECGQs6iMgGyZWT8BP2c7MKTCTBsPCyx3zSnV6qZErM7t34gRhhzBQez5nvXCzksRkjWh",
  "key15": "48TZoU7RoUu3MJaeJiKeeDqyAGqv6TpiStq8MKB8iTBi9SbFrkRQ9oqbyFaYfaKGHd5A9jdKkmSnTpjFQVogk5yA",
  "key16": "4CtCDdLWk4mxedB7hE951EtS72PCqzpUrQBepzXPjbtpxeWcSsKZds7eAGjNddt9g6xgjENWK6QqjmbVMQWj8NYa",
  "key17": "2WB2j9gCtqbBQcHXZRtFuHMTQ8i3KTLTCchyoiQsBo3PBwZwBiz1UX5dKAMswDLUbdb5dSL26bHN34ih3Bowm8wA",
  "key18": "h1Xj9JwFgTEUg3asfVDHSQ4FV3iU8e9eDX3EcS8qrUF9JjhVvCWy17C5kG2EtttjJ26BB9iERTqY7AkXx2ZBUDH",
  "key19": "3RToRj8sA4f82d8zHyW6yJaZsaX39K99oWrw3ecpuhYnH5Lz42ZhoQdGbFNbZscNC2epNsoQzR59iaEheL1o9ptN",
  "key20": "4NuQhib7awChwBnmoemdcCm9ytMuT7tjwmVTTk9sPL1T4wyGecXEzXfTmAPpt3tdheo5jMAsTjRnicX1TS8eGNYY",
  "key21": "61efbtwreuZrTAvBp5sy2WLAJDoacAWH1oWyJcJqX97JkqZGpopZVPq68iwZKy39uvyisch7jf1rzRuPEsZFkNSr",
  "key22": "Z3ZcXbPUWx49XUDA4JrqMUjKTnrx613ZP3bdPC7CdAq6mWbQHNimJ2HJ7hYU58kNbL8VJrnptjG9YdZt6FV3sDQ",
  "key23": "2Sb6SkqQW3xH42u5GqyGKFJ5d14WUc38jKBi7oTBC2jEH1Cu8Phpi5mYLhD8ubGn6P4vSSFCqwmymjpbmb4ijd7h",
  "key24": "2Uk4u9TQuSnTtmASLx4Z2MGYVsqKh2itRnYEX4dyuzPevLsoNpFBwdQNw1L8tfXExfRt7bNDF3Mx5Uwvm3wxKVmH",
  "key25": "2r9Q9iM66SKSK6tjsuWPSBNDgvSKuh667NjzQGDfQF1u2XpBdPVY4Lu1XLTRigFFyc86iDCzLXujzB9M2pP2YUc4",
  "key26": "41tXTFKhdQ5hyq5bePRgoJdMo9ypahpETX4Xddtyndpoa8s1uayRFuvrth1pGfGHsZygGH6jx2AiNEjbxEZqPhfP",
  "key27": "5L8JM9HUihfLZ9r5FwVnEgiPwuvGJSnLTL6SGtSv8oweoVB9gG4hdx13a6i6m7QWmGSeDcDWSrJWRqEQyMaF1FbJ",
  "key28": "29439TpzrKytJvg3sHj1pTtvr6mxkgmwYWQEwyrWhAeMjXnEs3JLjjVmc6ePyHGNXVoxH3zGCab4aFuzK1dK8RwV",
  "key29": "3qnupeYANU4wZxpfPnqy5dPcYkNQEseTnUELeKUDqxScjav78uNjhD5yRyEwnMYuhrhoRjd2s1TzeG49NVKtQZBg",
  "key30": "4hx3jVA56nTa8Rad8ATUBj1KC18ifZbWuU5FfLb2WhRA3YAvC6BXVrYvBTKPkfAFj9s8cNmEgCZPzSEcY4g9JdfP",
  "key31": "14j7LKFmpG1SiY6eFnZFWagEp3x141EyWYQ3thaRVMTKCJH5ir5AsKKCc37DdeGuosfw8vdK8XMsd3WMF6p5daV"
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
