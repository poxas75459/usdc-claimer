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
    "2uoE4rf4bVTyeWw4gNNZaLB9BS4qmpsVDZDPkrwZNwVGHW5C2hNmKWWdKCVSKVkwsp5GkXvbGtqpnW3K4DoBcWKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j34aXc4zJ3wBg3dLmoMwRkopPtPdzk9uMXwt7o5p5cJKtLFxD93mhWw7PxM2GdnCHqLE7bNUrRm37qbpBPWqZBy",
  "key1": "5kQmHgduiFtSngX2t6evfJLR2k1hhshCMJGjmbtbHYWS83moznsvAxoas273kuh1dpyS42kVZSCR5W4JZWUFp4uj",
  "key2": "ur2fq3eW124hh45ZPmryCgEzifWXqvvYYwM4EEoiqhCioqJHYxkkb92XSPKZRmMr2WirnnfQaWcbtETUNBVTB99",
  "key3": "5UM2reocbmb5wCqUxKP1jUuEuC7EHCe1P9Koy2MpBb4Bv5ZfFZE4bCZJGfRDiu43KDikobT2UCKmSc6ME9ue6EKx",
  "key4": "2CdDcFaJGxwWePYXxr8jMe1fgNwmcvS67p9RddKW6h4CaMFJbvkJ4mt4USHRgpUe1rRAFAED9smbHhi8CxMUB1bu",
  "key5": "4MzF1qX4aTS4Md9cW2aYCeE2ga26RTaWVkPF1haVvUwmcHXJS8XtZBdcdBJTyxkrbpBZfaFtxBHxzWWGsjTnQZ8C",
  "key6": "4odo7ogdcxx2yri3RGrmdxjxSLu4HGZzJc4tV2jFD29iRsYiz7EfKB9smRBaByjb8HEGPBAMUkWoVinM6XVXwKo7",
  "key7": "2LSJiFpDsabYoNMcvMynx2WLSPFnMphuc1R7pSMNGWez5Zh37GP2rvVdcELEkaxo1sykVa1GKHFvj9dZ6sbP5v1V",
  "key8": "57ygr5sTv9aEiRuhinx3pZm5eJHFLNj3911XqPbJsDV9ZdfRVW1RL2xs8ojvSuULkKpqCt95nVJPJTA6GKue8Wqs",
  "key9": "5DbyxaVNVDUm4W1vMmee7mMBuUuefp4dKfrG9rPc6Ni1M9Dp7dxPxiMYZWTKAKRJmy2WLHBbyL53STmnWF7fLL2p",
  "key10": "3ZBDFj85Q9CcNg4ZCPZpYpxj3GS3P4hNPTfdmeXAForD1jAxysjRqgYH8d9aREMvFmfhMtaJesVUWt28jSpDVBw3",
  "key11": "fPqLFXTTyXp5VUXnWwgatxX6XLBm9S7uqZjFyUhM96M7ZdZH1wdcrdrgovuvr6YQ6Y2AEoczj7qGqonjmPdGw4W",
  "key12": "67mFb62EE4YtzezSFJAF8XdGZbJLRVa3rdGSeV37vkNtMD1zbn5a26XGW3wFdbPNtnovRmjBGYWpJwuogDS77zzr",
  "key13": "Ery8HJER4JNMsAyDDzqQiAWMbycRCADudmZsy8AHgwuMaBBMEFebBWmg3ooJocTJnLPWYMun5kXrCQGqBM5VTiK",
  "key14": "3bUuvEakACCGRpYfWfxqo6nqZHaUoiwbxj44Ak9gBDotvGdNid42w6j9JvNsWHXXT6pVFsVUvx1Bc2WVaSJD3SYD",
  "key15": "48BARSBADgKvjEUGsEZMk7PJEfpRK8EVF3rQaUiefX8SnEZqUTapQDqScAqTb5PXa93xPn3r8ixwjtRzuE9kz1P2",
  "key16": "2ktFXmDimc1p96EibeMdGnx1B3aBfB16ho1M73duNE79iie1Y6XAx6MUrwuKWs7iAfTo8Taa5JoPUyu1v6oywC1X",
  "key17": "65k4Bk6AnFWHsh3KKwDeJBk5quGidqAEMmFiq3CyiGpPNNW9KZ8FzEDYrfEVppxhhksdiuQyBUQRuBjZiJvSqigC",
  "key18": "3Q7d6uddKN7imXCyyjc3AWtBSqWkXEJ7Lx27mjrDBxnFThvgrscKhJ7bLMYZwuz1M52jamizc2vd2QsymZKLtBc8",
  "key19": "2wN5DQfGdDGPspJ5ZAxxa1hJKH6J8s9KvEBmNQ2AeaBfB7RQATxB8kV815B2cnM5Ek6kogqFDF3x3jhyQcsKKC49",
  "key20": "4Ubm52yxdUe1HHsscuj7g84eHdpwfHdPA4T8PV19RPcTtTGq95RA8sUsymRdmvFNSpbTVNWzNgTjr8A1dkEvYeJf",
  "key21": "3yNcjeex3D3GqbHcSLjtEzYqxhdEBidzxcVJTvAuX72GsbFsFQPiiUU52z3r1mm6JbReYLudy7WhtpZi9WEe8zmD",
  "key22": "2MT3RHfXF77RLzxwMeMkuefyrY8PPLg2hzKAaG6fULgCtNAGojSgcmtpBZX6nEfcvjXToRvCbTDAeU1oKJPquCV2",
  "key23": "sK8Z8Ci7Xu8Abd2cgYZWxbGdYwS8r8eVp7Lrgmw3MK7YkNHWycuRMuwqD29YbDXgm1naZzpjQxStb7GwsfQ3E6h",
  "key24": "bym1BEJejkHj48SUcDWV5jUokKR7jGYygGucvv1do6yWo1yKYp3ZuFvCYH7ETkGs7qLW5uEYh3d4q5QQPvXDfv3",
  "key25": "3q767jtGtApMWtVKw5w4ZZMtdnfQtVFNEzD1Cb8MFpAvjaoPZRxvqXmtM2LThosvkpbYiV4EP4wkGXsctjwR11fC",
  "key26": "56FA5eG1zuFde3oM4cGDNqzY6wi1v6kT412dMnEKXLxXDBSHudQA9yAEF8tdSR7J8JrGdqBSFBhiuAuMv6EJv181",
  "key27": "5eDmvd2BRSs7YjyFgyNUk2xL2jWYeREwtGpEiNhL2YcDRpLmmkzwC7nnCPKg1BzHG95MrAPRUsG4ZHEhBCqnYGmV",
  "key28": "JHms51FVnNwqwn1fgfoQW2ny72JVK1NQazCmHoAfMz3h2CmhRwsTKcKffZWToRur25XJggtnWaR2eaTeDRCByLB"
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
