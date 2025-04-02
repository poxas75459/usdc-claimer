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
    "4URuDT3xojqRbr6wJak8nThHTKxB9GsuXEKpaS6pBojep1yYerJDCZUEczzztohshAxuFGLn6Y4HdFrJfTGAgCSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTHP3q6BMrDoPZosqv1QWxnSxTRqNFt374YFAv2H3vhEB7CzF5medsrvVK3KVdpeN8Dm9g1GNvNLUV8fo35KjeM",
  "key1": "3176hKdNvpRiYeYhugR8PS4Zd9zMTAWo9ZGoc8eALNouyiszriz2z1CuTsmxihTbMMHF5M7MYs77JBvzeywAioFo",
  "key2": "5VkjiJacZaPzuEMZjigiwCCLjiPBqFMjvBPkRCHt7kpJZusXbL8oR7MFy7fojHYfSbLSuY8RorcjMuSSonfTzPRQ",
  "key3": "2Uk2yRNokqsEisRQJgLP7g471jCoyrdA7GDBbi8cEsVLrCUXMXymbde42NDJ2P8fL8YHpPKV4NEHjhNYCHtjmadD",
  "key4": "5zqKBChVZAPLerHCtCCcthQijjjjNNakkbfCrnFS1tCDjYKgSqA3bBKM7tMFXVM4EBtbxy5fGcbdpeghgSLTEQQj",
  "key5": "2zyjPParoBAFj1VnGJUiQcM8omERUpoS14Abeiaavycdm9PZVTP5hZ9LKA84gMX7gdvdivFE5vAf8RyswM1FcAmq",
  "key6": "4U89NAYkJUSCsaQmuvi8hy4B8eSFRqDKHCoWzo5wPHtC7vzkppKJjrGtQoPQtY2238tb3f2gwJf1usdMNaakP7P4",
  "key7": "uyPTQunGm3eMvu6Ji5FKQDpx5fjc5G9KqHixhpNhtGAbyCDfzeomEuPT5Q4HtCsFER1UyAgEinpG75HHgoppnF2",
  "key8": "oEUy7CfhQzmUb8qE9DQmuDt1dZDR9HTR4SqR5pssVc5tMdMU5pARPi3TxN13fLzPggJK9KiH3b1HL4RrK3btBhd",
  "key9": "2c7tEGHfqjMnRqGXJQnDa6jRVoyPCp2jLJAuXpTXEbMPrTgUEUEucLSxbJAtGpEm5mAcZxnn5w3qgW34xgQawKBa",
  "key10": "3DKDZG3a1ow6Pjr1iC9sEC2Hic17Em3ydM8YA2p8JmCrdr6DPtRWP3zrVAHHtmmwT9GgUTJC1DynWNXZbLNKGA1m",
  "key11": "4Ru97193FDwbfFocf69PKgUpHyKzaWtfzTW6fcEmeAfnQFvjJwAt77F93L9meXFxVcE6ssRiv44QFebeWgo1hvDf",
  "key12": "B76Qq1ojCi2YHFxAGNS7NyKMcQeVpb22mj8PrXxUjn9YmCD4AeRh83aNVGsKKz9px8WcK1z34VWFKGD7WRMSiTQ",
  "key13": "4YCqRXHdcufqeBKDeWcHC9s8DQDhSTaRJCZuL5U5nww7vub6e6ueq1j5aGBPJE9GvaLDVuo6ZedmBwRHkykPKJ6n",
  "key14": "ict3qV9nPPyMsBhgrvd7WvoXj1F2vtEvFzzeQFP3861Q2LwnMQSBMvN5Ck8Nsvc8oJkAepyr9i2BzysvfJY3nnf",
  "key15": "3qj3gpNaa5fofM1yn4mK6KWUAC5Fgc4YTFb8opFwAgGAgataJq1YWGgCdWoo14rXjivgTHJK3RZNPpRzGcfrsxLf",
  "key16": "4XoM11iMc27byC13zszX4wEHfpGhyowYvBKH4PD97xCNnxm748974SxcJbH6kws73AFRSyArgUfwcGGhFotLHSZw",
  "key17": "3DvMXMhExFDRvszMUHqqp6hY9QLhqoSb1JgYaMN31xJb2fMyzA9CjbnJRqGWEs6e7qcGt6mVrnQqJrW7eGfSkUFp",
  "key18": "2rdaZkbzMXu17z2cYycfJdpJbqTdb5r9d79hvN4561UC8Qmtx2jThpGL3C1fTLJNduNznQdkBdv3tViVsLX7Zu4A",
  "key19": "2hTju3yeHLTKMzXxyjZ6Gkqao1PJGehb8TrUUd3LdkqbyjYLTQmQ18U26SmwmuDpt8qEUZMofR7z5LucTzLw5T9r",
  "key20": "2EC5uf7LsmddSvQvtWLi9HNd8nMVDLP1sdhCDevwEGz5bpy4eG5fe4An5CePK6Y8cPnDFFbrs4jFgRXdjF7njE9k",
  "key21": "2k1rZ9gAqXR9t4husmdXuWnaZa9xXtiFqECbpG4Te7k9nqBge6jihE5vTgiTjPq1YiLnxQtMBFDzrQbz2CaGWzZB",
  "key22": "SWFcjE5AAGkr8U47H9TL5duF3VxnpPGSai2oy56UEfqRUUfABkJBfzNYjfxwsVAsnsWY9tdLJjsxUCoxR2HTAuZ",
  "key23": "4o5wTKbpytcYRqbNrrxZsuoLRSxUC66ze8iBboW5AH1rLPcF36HzCNWTbJZEQxYqSxG9mwrZyEEu5bhFDU5c2JVz",
  "key24": "qDZ3QeQtHUqdic6HPRWMZXCPvr2xoVK7NKc6WVySEj6zBLUG6oasEETWzxGSnDDkDZzUs8jfCxe9P5gtei5kMbs",
  "key25": "5BQ3UYPaeUwBpf1zr43paeKUN1nVREbPq4nxU1Gx2TBVDr2NX1oFWFj8wcoBSprE7o817VgEjT7GWWr7sGKZtT6F"
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
