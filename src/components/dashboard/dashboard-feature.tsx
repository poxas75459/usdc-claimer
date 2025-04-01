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
    "4CjDwNru6yHk3NGgpjdXKWPkA3mVe6dS6BSxKxjFDat285nrHwYs5bsaPd8hHh28YNBvRSkrPWeiNe3DNFuf7nJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvPU6VTaKnQ6PQkSs48thSUx2wbKqybYZfQ3UFGSn9NisDvUgo6LvLm8KW5RDEnfCvKHgmw37CNKKCjUumKDj7f",
  "key1": "2zqCgVbnc3A8wY3wCxdmd3th7VskijWvwCLPeKxaqCffHQPRoCBEqEkT2K5AUGzkKzoi1xnFr7zytFj1mvtc2GSG",
  "key2": "5qx6CezFUXb9Tdxz5qu8s8MrjQA52ghMV8fUGoGCKMqM1KPtHAJEVZPFKagqZedr4x4jCYzwZSkuUFRDvDHMV6iC",
  "key3": "4mJJeN6ob7KxVb3rKWCf2ewA144Y9iKhoLUrfwh1zkNRpvcqdKPWm6zTJsZ24CwRpNky7J4LD9s2STinreTQQyHV",
  "key4": "5qu1YS4S4kKZ7C6Awq9ydfN2haND2fCxcrRvCYxpktUSgtDC31hcpWbPR3HMAXY8G8d1XUWHfyRSLgW2rwbZSNiD",
  "key5": "5Qt3N9NSo3H31W3VUK8XpA3Sfi8E4V8du5zGFpo2pxu7RCJ8M7CDo49efrHKot4FqAv8j2P4QbwE4G6SbGssFaxv",
  "key6": "5Y7QmayAMZpprjxUuZRvHDwjAN8kYaTnUKVacysd3Yu6G7zjieZDpnu49NuK4KK48VXyVuNLTwAyz199aZgxRQeq",
  "key7": "dTP5wbbmUwKw1QhjJANpvNVnSf7YsEFmswv1nVMcbLe4W4KmYJQKQjDibyGsqTcrD3zh2CX95yv4yZQoQYNGkDS",
  "key8": "2mRT7nLYu4p4n9TwCvqJouw41hT3XSQ1dUx8oEJCkXMNjsDXRqvmS99EinTQFStS3HYwqpE1hQfvgB7GktdgLgq2",
  "key9": "P6D24RveAkdWXWUk2HeWF2FLRS2FPJUgyCheKAaNSoDDofXGuKPd1Amg2wSAwyq1Nf8zCgWWvQZLZCUCSkVrRY6",
  "key10": "vURzL9mgPTZ6RayTrj1uFDMHR5jb6sRnKmoHHsnDkTqfT3TSJTG9BAGKUjY3WN5m8V1PoCfHKdNgUXRUFchi995",
  "key11": "fiG1i3SQ2TdKFGBgCiZTCzUEMnWLo9wBzikep3aXGpFXBFFbVquk5mcf51QdsJY8EoQsya1eXyBSHKoQHjSQ4Rq",
  "key12": "22EWmbJmNquyNtyswn993y3sLTHER8ufu1Sa66nC7qi6ChY65PHzd4qWp6DkEi551v5sak8hzXzNpEMdAjn35ZGY",
  "key13": "41GAcL16be7wENYpgxhEGPZ65sM3aHgU2DeQrWJc6utP41AuFicVhPouZRfMbwxfdk78ZXJ3K1qSUC27jtQzvgDa",
  "key14": "49iDuEtff8fkf1iDUS9ekLFHS5nrmJf1s6G4cSVWMTnW6679C1Q4RckEgVTKU3JQ5AsEE9w2iPKBvQLpUCF11zDV",
  "key15": "2HcjDQAbezia56aP9iopFBqg3veq1tsDaaFZCzt8botUZDz8kXL3AFsh1Q5FbxfPCyaz1FqFTz5D9wuZwgHTjLet",
  "key16": "36auCPjCW2pPLmkosAWYEwn7dCrnySPPp7PtFV4EcWUk8mhBuzqcU1fhv2AYquoeVxWphVs8kkpAMYCLkJgp78we",
  "key17": "3coQavG5UoPRvbt38GPt4KKnwm92TiP1HpoW8oGekbYfP4TwHScS87UNTx5z28Sdi42FrCRLqnEs9JJtYD86WRnk",
  "key18": "5Lx34Vqj12qGsQyX5ebPq1JXxeX2zum5D3ridBsYojkZgGgSpDbfwx1kLfmJLFfUvokaM1LNxYVvoGXEbFGtRNUU",
  "key19": "28NneuiKhB3zVUe979CoU8sx5Sf2TSLGFAPfWhER83SeeWWPwGKvx6hw6MDyQVVZS5suiHaikojTNNqFzeLhsSNU",
  "key20": "617ZZySMhZNq7w3jRHXNAm9qhPVMF1JwHcyQzPLTKHHPKZNo56R2Zq5gjNmvAhe1LhM2rwCPUoQ7CNxPcGvLgxQR",
  "key21": "2KQcYQUMWNwxnFXpbvuLCaW6jB4B3jz2GVFi8stLdLcD9pc7D5qxsr5d5Xrd9RrtviA9ivEDGgYtZdTyAvQbi6Hp",
  "key22": "5zVc2noERsQvaLk8JG5WY7DsYePhQaUAxiNPu7XXaS64XetZghxSec5VCs569WydPVNzkCo5yBi65TwjDmAUWSWs",
  "key23": "6NXX6iCJD79ottRPYdAvHujmKQzEzpS7d5monLbkWZHGRmvDzSSiNHYyosopyngFWsZt3P2LhVHqxSc1qJmDwBD",
  "key24": "MkN7Cpd3YwoyUrxrAJwF7BhQFf6KRV5UogpFAJEeXdg7DnwhWjhyMfooK8ds4QWUaXJFz7WMSRFWkKXEG85Nv66",
  "key25": "3tbazJPskfiWaj1h7KJrHNRRZ6uYVxJPk24VJ5aeqPwFgzGWsMED4j8oAukMEthLhfmhx1EteJX9UnTZ5Rmf7BKb",
  "key26": "2k8LquCzPRHorKdYN3K8U3vJyHpkEDhAjVf2kgksn3P63os5hTJSgVCPPMw2CAwmtetwKxzA3MZmBh7WydYBwMbU",
  "key27": "4Y6ZBRTu1uT1neAbWu54AVoWn3AXCLrxNNrXs7haSJoBHEuozc2xp6AwzY6tcunFiiJNrAvQaXGefJMc9xMe1SB4"
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
