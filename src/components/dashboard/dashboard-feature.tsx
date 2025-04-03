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
    "2A1KoYvy9jDcRsSZvxCxXWYj6UF8yev8Sf7824Cbjd45vfAtthswndWFhV41SD2vbs3SeTpiSq6Dwr9WrwF2GgJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518nYSLskTYXFGhrH8dRKvbtarTk3qJRYcR8fyJMHjhf9nKLjQjnvy1rUdwgukgFtqBjQHi8LuMhq9KWEw7812NT",
  "key1": "5yxKr7v52mHh3xYXv9V6gcjeYh8qruYRCSYEQBigLkThMKdPDqvdU9bvwj5RPULBN7ptDWUUkZTBVFSowSpaKjcz",
  "key2": "YxeWwsBAkfMd7FvA2pDmAzQr6shF3gx5Hy6CqZG8yGiJictiszy4yFcszLAEJ9KaA7BXDVRtDH6Hwxw6LbDRt7n",
  "key3": "5c5BSu6Go1KCBSBsAYuEjCo4UWqmiPc2cK3PP3iHNsdHFv1PjHysgPaKGaTVG6n251Bh3HJLgacd5kFNNuPbkhUm",
  "key4": "64WjuyXGUp5PLfcAmjNgey97uVcG5fuJU77syw7k5YmzQrmbNdz9TPMg19UL221WKgdZeCZGyD2pE9YaEpD3Krap",
  "key5": "39G8VNUjFxwsubQtgdxM4iiXAACaVQXMNEFEdZjpkPJY8bPfyLXif4ZVo7rXUX2XZ2k9j72qvyFHbjnCKQeubwBM",
  "key6": "aCA7aYuaxwZcMpeM5L2HerdCt7otPLJYJVkAj5nEDLpzvFCjtUx4ZKS1hf8Uzbu7skBb56zQDSrh9JqxzfmcL7g",
  "key7": "3UottPA2esGCg3ZSS8X5k2di7GyztMoL91AtRvkp23TCS5Fk3jQq54VsYPs5AKxRtzzmD3mBME9uhV58usEQpPym",
  "key8": "35VxkJaSzKRrXqnLDumZw8XyTpcEfyypUsy3VxR4u9ui4pGF39iSePamFpzyzN9u3PpkBkv9F2B7uy53rYxQgkR",
  "key9": "xDSVju5dntVDBGjqZHRxaCkKLm8cS2eqBxEx8QZdvwgzeRjh6FGNiDJp1K6XJZC3PnuF4HvBZ3goRUneZppq338",
  "key10": "4uwbvqC2xSWvZo5foEY4SufsfsrG5hrCE7vyohCZqcHwC5KXTcnchsuLnvxkX6MR83QQMmommmJJ9gF1aB9CH54W",
  "key11": "2e7fU7tC872GvWog2KAg5TKjch4xXVuEEg5GMe1LovBX5NZVwM9b1uontu5CRVYiTsFSj6whr6SyMpM4uzYZeyyE",
  "key12": "BSCdpmfsD7iczAbDN3puJYMp5YqZNs4UFCFmPBCwJZfNdice3Xeyzskv73tfe8WBt4Lg6VK87yWcZpDpwuQaimj",
  "key13": "2eNbiswRzHm1Y5DLWAN72cJKfiirumgi15y8dUTZ5JxFFUBJxHnJqKzoLeW6BcP6mCUU3UrEmxLAuumj49Z5Wfde",
  "key14": "5fW7oG11NakWA1qTd34hHBmbTypnmWVEvsVubrjCbc6rkPYdiSDGjBwiWNyREZjctDcom45XEKLb1mnuADY7Wm5j",
  "key15": "Lvtwi8ZiFAa1YNZjeDfmzhMeNLGDnZ3LPJ2Dhpv7CEUfqp4jMMKyuV43jrbbUba5KtTWUHi5Qfn8RiDjSbFppaB",
  "key16": "QXGFTn8QU2yDgVnBDajwLWNHYKon9BWdn6xEXE4rDL7emhsR26C4jdHuQKafXndLxvwBPGahCb3fDtPXaaGBtfF",
  "key17": "mGdG88ChoTrFxVt6U4CUm4JdPp5Wj9zEqPDeojkaeGU56EEKZn1ZfUW9oXECPaAy1U7jh9xcZAi3cVbLr5VWTwr",
  "key18": "ypgP53B1GbQEWSFxKKsLRMrRvE7RAi2BNFv4t3ByJByGumAnVe3cK3oWRpH4THrkitZrC6zyqGTCE9FKAW4H1dV",
  "key19": "5VqFgi5UQ85zg9bCuGtaGk4e4PkCbmbgqHd5BeRSETzFx7L9GTG6KFrBahURs2TS2BzFq9FnbzPdCqJNdqjbYsJx",
  "key20": "2LxrjwbpW3PaCQnBS8msnfETbXXTM9QXy4fRDAxpLTMPgiJzoEB9xmJx6End5NLTQeMyAfPXJftcYbxnQCQVrvrc",
  "key21": "3cttFosSAYbShts7EVp7RyTocCzmvDEbJhLknxiqXri1z1hnP4NSrFJDgdDCh6YdHrQ55m94yzHgPm9cJV53xu6m",
  "key22": "4KKEk1QWZWmPBSffSaP4EgAxkEj5GRArQMqzDm7CZ6Z6gQqdnQaN8VFkhaBt3oi2PfTSrP1xZsy2pVTHNLvuH2AQ",
  "key23": "4qNCU3T6Vefa5oCVkGXbGuM9eSPR6yncLgN1KPpx1gCfJCz7LrgdKTNA4krvHj4tDDhh75w8VXvgweDb1ssQFbFq",
  "key24": "4X2xctAWj5X9KRN8SrCDRapG1EvEgqHs6fBkFXvbW1NQf992cGQGfT1FRve9TfVMUwvPQX3hAFKkBKRJM3SeGN2z",
  "key25": "2XcWptwn1UGLGot5Sncwtfxb1UBWPVTY6WizyVmJfPKWF8DAPvq6c2KVKNKBGdH9dT3VWyQqCqbLHYyMEBBukQB",
  "key26": "Nrpdrguv7d5GaWEfU1QvhCPPvo9k7wpQZ58gUJq8MQoJ118FQPDyJfR8342YaGC371g8Xxru7C1AAqzZ2hJYdGb",
  "key27": "3H8sV5ySSd3h4fvZJK3btGq74rWKdxeZz7nApTcdxrB426c5yxj1A5h39aXfWLAFSfpwkUrVJUcmVuAAzjyWGGfS",
  "key28": "2EVY7xvUaJmg5SCZjbiRKMJb5MnVhYWSmX8tkAEnHAYTkEmKmPKMpTad3C8CtFPMbxvQiGwp1SQyLYAsNq5XcSHU",
  "key29": "5AuZvGWqdEDuAe5Bth6QLjjScprn6FGgDSCo4LrAQh32jWBYYSQngWJzD828kQUMH912Y4b5kmWDTZzvj4AMg1dd",
  "key30": "2u3weXd9JwEPmv4mycCvwp67P4ezw5uAqw4xyjxB3ph85VtoUQni4Tp2NYvSPUfNqNAGvNL6dnz4itrn3PMboMKc",
  "key31": "AjKr2GnKwGbbk5V4fVqPk8eVENdr1kadBtrsDTHVzRG4d4FSCkVZzoBmDZdSCU9roaUxpvPQgTUbBcGBzW6Jcmt"
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
