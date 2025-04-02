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
    "3w3jjLirgSkMUWuPdMmQV4bv3Z7RXoUp2pJmDC31uXPCiwdePWqjHFPRN7QMnuzoxQaQRwsZqsfK6dEqzbQZTisa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Uy8LFxkT92QFtAzPw5MGdPUPkYoma5fxJywwZsH14Gi1jVE4dpRV7jPLNcDU5AEPN3oSnuDPQLJhUxEJvrfN8m",
  "key1": "5vJzT9YjczTALsVB4D29fpZiZMn9JXFwVnk58WBubXUSvsn4HatkosgaCdFaPayf9F3YX5FeG5zwkEdKDYgHuvVT",
  "key2": "47QsRStCFhzowB6Ak4RuWoy3kXDnH812FRNrX6XKjV1dD1iK4V1UgLp13GAYWsW4xht2Lvuy8yVJ5MRMQG4Gbqbm",
  "key3": "2Lv4nC4Fx5XQoEFy4onvmza5b6GhuX8TbfZy2j2Q98n9okLqCqxNxjFvsiH6etwHvCJBCxXKXTZekn688TRLr3bq",
  "key4": "2kDyUzfTy3ejgCTw5dYoeLkPUBFF84tBPsP5xG1cfKgxPkRB72JZxkV9UyNCwmVk4dQuPT5kjYWcV6Uu2EB93G6D",
  "key5": "3hCRTcrr6UsrQ5gCR74c7ui5ougARGcZRckazs45BzHCHNgnSgtRUe8NnY9SiNeRkhwDBgTKESpkDyNDSJbsSiDu",
  "key6": "5mJQ8qvDNA69MEsezPn1Bc6TrEXmXpsbHTp7fVBJfxVWX48E9AKt9ymALGGC4HhjTa2S3d86UjW5EfvvLb2ttmZG",
  "key7": "q8E9uLYagJ6kUb19JqUetEPHASvRKiDgXMvfoLZqFdMoHGDXpqudkqZUMDzk4c2SVBvn5JXRhk4ZRb88zkhveVM",
  "key8": "2wKjRb8Dzh9i3TwUW1ECCx9MHbgZVvmK5KUqBHCCk8ZcDUjRfnGoWUq4mgg4WJNHAuRBKq8z2e6zKfG497WrhnoT",
  "key9": "8GtLq6T9G5wNXNZcvJqGofKiBHYgwbmXUoUF1ejiVkfvTpPj5bUAzwvSRL3N8UMmsNu2Rebaf69BA4ByRUGDLrh",
  "key10": "4rbtELgLGzNunV3oLkuiiezoP8cBRWrQRhJiwMcyzEf2uxrTDVYtpvPhs4YnvsJ9z8RzRD4yMQh3mL8G5nYbVgWG",
  "key11": "4j3r5z8u1LDaYGuJ6M5AuDtV1e85pZhxid6XrtVAhG2d7wdAoV2UCsWvZvqhfJ4WL348ULWTbWdYC7AvhbsPqHVz",
  "key12": "ZE8pkKboXGvordyfnFdCyZEa9QVEKezfrQnjFHLDsHKmbACo98dijgyaSbhRShMjcsTaYN9C5wyxBCvdaFxAaTQ",
  "key13": "46A1vFyNaRj5eAM5pEAZHMhB2igKe6kgbYUmghjJEpYCs82CMgoLPUGHHdPLZAYXfXh6Q8gYWYWCm7mJouZeAG7W",
  "key14": "5gGSGhLarCXYSSKeLb4rLBKXwAEi4SsM698D4vag1c1y7AzQLAX3SNZ14bQQx2721shYWXiQDRvCsr32B22GEXaT",
  "key15": "zwpHC63snsE2j7SNaGe8FffcfXeYcY9jbwebYaTKBuA2JLvYPAG9RkfSgGDQ1PNmKEpYCBAxF8RwCCBQh8yEBxq",
  "key16": "5dgN14xfs7xbhToPV7TRq6QVQM5W4eP2vrh33znyWiYjmKdbqC6GPemj3Si6WA4oQUjN32p8skXRWnEjSUYutM7E",
  "key17": "3UYjkRhbjVUENE7giijPYBnRBuduGzXvzJdN3Cr63hhvLwhKnPnrCW2rtKppkHkSYQCiFrLkyHRAKZqVBZz1wD8s",
  "key18": "UUWkkgfgjThcVXPo3HoEGchK2xDoLo167wBoEBW4ZsG2JPfLVwmpibiQYWJeYiK436jirmvzgvF7rmVkFMi6Eub",
  "key19": "4bPsmNX8mKCsNvSCsBEH9FgJJQiLeAuoVXMLYHUj1dYKH9sSqMiUy3kbhLbjmPBZ8rGtdD5csoyjLTfWRmtwjiou",
  "key20": "f9vtjh41UB4FyRxv56jYyvUuvhF6Gv2BUxZ1o4WrpZSrJb6oXXuqdBN4V4XBMCYbESfk7AV8KvPDPjrFaBaWjHF",
  "key21": "24EwueG8t5xp7h3DG85MxsA97Gk6rDxeEfE3PvwRi1rnZ4Hk1oBnihNnqdQatb9dx14WJ8ZiFVbWkZBro3piSQt8",
  "key22": "4xrYB9h7NQregodxCyH4uBCWFK7pY2WM1XUMENRm7Rrq8ocwWMkYBv1Cncr44G2SWYoiUj1sQiZZoXNgthszTXZ7",
  "key23": "PUCKjtB7xQJtx9bYTLK6ncdUTL6VYz3BuRKSg35mah4vN9dKbJN8WbQPATKGEtVyrek3sXzbAQffzjZLeZTQk5h",
  "key24": "2xbSCLCqXSiHsxdrmjsZFZwKSigsATVSUYRa1H1kHenmmWEQuJoRgu8Auf7ZPfTZRd8yYo59p3uDyUFGViT1NVjU",
  "key25": "2GsGn8ijKRtjQat6VG1K9YYq7Doxtp1sdeU1SEcco3RP3bDCM7heJZpGq2Hyme5XkfvnbBZRCTLwdtBskpH2X3Kw",
  "key26": "3yJYsodeV7pS6X1bvWC43PwEsiUhAJebCoKpDA3C48GEyLvuKKqDDr9K6Shr8W8Mj1sicvvzBmeYTBDXGpkYNfD6",
  "key27": "26FwZ47DmhJNsfr9zFo2rgZpnS1gh7TEuWmMuFC8gsz1cAKFEPXRfoUor28eY7eSerL64LWjyqdJ1V1rno9TYJGt",
  "key28": "4ZcAU2Mo4SnDxMQUyMG8BnZ4vFHVtrWTX58vze8PUmHR3qQHZWF1vV4rvBzRdcgCjFZ1M9rWMST7FsnPePjzEBpR",
  "key29": "2aWLtUSY5u1xqGAQh21d6maBWXpsZsUMDtDqyScigqPH9psK2WvUZ3oWciywbQBrvvz5oEiE9T1pnHiWdkFedW2k",
  "key30": "4GtQn94qxdQoLk8GWVZojWdFPDLBoZUZ7cRsr4T772CVJKaEFR7kXWjAdoszrft1f6i7GAmPKJSKifA7uUhFP2PJ"
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
