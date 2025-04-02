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
    "Wycfu52Mswp6EoZBadXeyUHfBBRZZkLavbSDndm8V9akJTCkPeANY8fDHF9DUbexaW8sfRiJC9S4a1hDEih3cay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHWoe7axKt9KB7JEZUvxJ4pVe9PBHhnzmzm2egkqQ5TEfUA7E6rc4pfwu8oEBe5T7krqa2stQYo4bMWmk9JCA2r",
  "key1": "3wQqJFYUCzSA8eaZMzJnjbEYXJxyoMwSj4BbrcTnNoRsWuZP6r7Y6jedoU4Ue3S1dq2CFDeNzn5idobhkkRPkKs8",
  "key2": "3rC4Aj7SNi13nBdR8t4KgbDLMA7EannVAkCvmGesgznDd8PBCc5HoBpCQDfBCoFR3RXQqktp3DMuf3ikqAVn1M17",
  "key3": "4UmFjCzvibascaVXpgQrLxM3bQiYmbd8DdjFXN3tqpr7W7oMqxTo9gGJJiSoaNo4GCKPu2sF5461e23NCT8TDPsR",
  "key4": "5gHVQZGn9HviX2TQXWNANGcWBR1vSJEmbR5thFPuiLoQc8CF3SSCNXMao7dq1mqBNAfqGCu9NRTCu5DtfCbW1ViE",
  "key5": "oyu6PKuFNRRJe9cHt3qpeeAGpus9E3WhCscpSF3awmoZj3jayNM2XMMa8SvFPSZHrxNDjPADGUX8cyCrMNFz2Ad",
  "key6": "61qbkPbBEGWEquZkYkUtGi8xWx5QtsE444KHFxM5V6NVJ6h2w5urKp2ApGUbnEpxWCGWJ42THPhRqGKUEHaGLVMT",
  "key7": "zUdS38JGkxK5831VZp5BhsxoywjD4ffsVgkzWkquoEzonzYjs5H22F8iNKCGaqRpMuvfcfcoomy5RyyqUpeDSBg",
  "key8": "45JkGMigJ29wqwhckKmua41YP26TPRxFDYFyBdt19fwB2ZEwqTH6ywdQTTUEotdoMLKJg4Aq8BuWZpf1LF8Nkf27",
  "key9": "3nSKbReCJV9hT6HGG4tU8UZB9TB4q8Q1NSZEm65WwQwUHFp9NLVWJq36LDKfUvR2szmxsLX2sJGf3AWiKugkSocT",
  "key10": "33pdbH59BqvsaNmRqbZyWB49mYV1prF3s38376qp9JyT97R5PKt9py4emWryacbhuMV3LnaHS8waJVxa7hfUxhyt",
  "key11": "4YBNjbMSu9eVwwaAhG8wXyEnD3uV473pE1KRkcd2j5fuSUjLkswCwtdLYyhwrT7e1cnFeLt2pdmywRprVzeFRtEx",
  "key12": "URyQFR2d9u3biBe8LdTeLqkcQN5JS7phRUywRK9DQRKmpMsG4J9QhRj7GVx7rG23xybsZy4yed9CmyW8XH8qNTV",
  "key13": "3SfeeuvNHvXPkoNLXaM5fYjiUfCrqnX2BaEcRQJQMtkwFnySHBv2NPAo3sGwJK5ynrCvhQYv8AcgXtFV8nmdcxs5",
  "key14": "3CXQs1mMGAQAZtWYjTmsXVM5VXYPibLBJxAYh1hadsJELwaZFRoTJ4777cnSDtAytSGXqofByW8XFo1Q7WDhGMAp",
  "key15": "3e1qVWRTxYHBTYpHZMuR1q1txVyRsSaqaP72YxDcfSPzKHvpU6WPAtJ98EZWzxzyJbzDAVXMcFBrnvXcYKEjNUkX",
  "key16": "3JgYU7RFsNrGbVadTbEWNZiSaacub2R2osnu4dkW8hsPEFwDJdi3rmic68yJ7AN2QjuUBacK9MKtTUQMWjBdwjD4",
  "key17": "4REKdLBCEq4uaHJo57DRUPnLQKUT5qmPtc16hrrc6gvrn7Q9v2gigSaHqjsne8demjiv8PqdpGUWbiJ4FJfxeLPZ",
  "key18": "4X99mqJwJAHin5mRdjupjWeKYXTFhrvwdBNgS8zYWRUs5METegVCyZTXon2Z1nQFnz63Lt4KZx4vUiQwUahBurgK",
  "key19": "xotcwxzUUxH4WzDiurBNigK5Q15oEh8NoLYbtjXCmg4GXNevx6Ct1VxxVetEApZj2EPsNwzHGsUFEnkSiFHUoRL",
  "key20": "3xoJHszEikGGz7C1hGNTfop4Eb3DmsZwqnG86Vg4UQAzHBcibVU44PWiNhz8o1zSxj5j1RwnLo1irGSBLH2YdsdL",
  "key21": "3bcj7W67YZCemE3Sm5dLbyw8kHknWnFFXcYXas4r2LmkcszH5kLBvJocpyM9MdVLjbMUUpivxoXe6ohWCoxF69LN",
  "key22": "4Xkis4RnvkyqznNnQZNck795K6xSFiRZtGHRB8upxwcawPK5PVGXMhDhbeyzwLGVRXKae3QdwdJ8veQvFZFad3f5",
  "key23": "3KYhhZLb9Xb2dY3SF2KHJRRvAmXGdbTfFhHYHxFNeYM66rrNBfpVEJUxJ1uzFGLLjEroTqx5r7W1wu62tFAJj1wZ",
  "key24": "3zZZcgXutf67DosnRncbLxm78fACBziuUWLoESaHRb4A7SVP2cQB1QddQBZRvDeiCzzrenEbtbddCGSfHsF7MgFi",
  "key25": "31K3fDBLLALQNN5BaRJQJtcuo1tLvc7LR2DQ3nDxjhvk97jkvmeDqPCJBugWJyTRG7WJzdCe4N4W1T2m84wHe9xA",
  "key26": "594nDmooDJQrPifEiPtfSxvvJr37RhN19r4tycb6BGm8iWXBnfNYVkDrPJwYeGiGei8vRHDU5D378qePgRmtdVhm",
  "key27": "2f5TNLBLDYgzjVcBJntSXLvGoa91vQAsiaLNpzcuvzrQHQqXaFbXTKtjyEnoDfNpZuRyr5ghKnqRSoM4uXYNKiEL"
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
