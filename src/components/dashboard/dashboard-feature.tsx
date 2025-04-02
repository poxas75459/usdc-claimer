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
    "YSH8AGnDaqBf7f7oAYNTxfpyZNXRUriqCutMvhCkCsCnvPcjUnP22jT7m3oyRy1VjFpbvQ3jdQeVE3jbhFPg1GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgDa7RtAQCAapQhpw3Y4z92F5XEmuoUoRYex11eV9khmWfRhwH7YkCCV6ahHuvpc3ADhitcZmMh2Lhmiw9KEAdb",
  "key1": "4XT5MKXrF7DkuwA7kUu5ZmRM9J46cpQC4Nvr2Vs8VjDpeKFkrXdwG9t317K9HiDB8LjbWMGtKBMoJ3F5xswMX44S",
  "key2": "33ZcHaqoSPzurQ9L6LzpuxbnyTAeUaHjrNt1dmfTA6F7cpDMYz83f3SPdZcqTGVdLgTEs1ZdvEfFoUKzr7hkAmXp",
  "key3": "kyikou3XsUZSxrAS5GxeFYmpAVWgWtvTiLQ9pGYtoKi65CnUF8amdzitMmUoH7m9UUrePv6JsS119ZgDXkuJfrK",
  "key4": "4t2fUg2dY9S9nVXw8R1yEvGK8ZGPENitePXXXHUKpfSqQbHbWELKwr2BvzdnsjpQaxPn6j6Mbe3sSTQ3UeVkUCVW",
  "key5": "2E4wtdqthwEJQbvANMq5dK1DF4ebin9NWakasPTWcmW2Eh2HageY9ef2Nw6eadnwc9gm8rUHKnZbSJ9rp9aKMgJ2",
  "key6": "2wmQThGLbxDSssNRjUgUMvouH8e8BA8mLhMrMrfAnWjn6Z6sPDNoHYkoxbsp5H3xmJuAPPcvweXPrq91JsGVPByH",
  "key7": "2fDT1BDJziGtHGpNJPDUDpGQ4UDUZtpUMd3NN2xsUmuuWeRKDrMZVeKV9XNQbco7Lp9ZA5GAZgmqfcKg3iUXYTZk",
  "key8": "PPyJvugfZWKNm9LZWrx2XaT6xbothVSNhqVUKMeMZ4RzXpzk2CmdnbjxZxQzq8pRNiYP9mrSVNHRMqQ1Tkn3kir",
  "key9": "3ytcAcXpfDSAMQXUmPcSc1yGufecXKwfB4Jwin4pfcgvBzbqK4DHPFBoz7Eeshmx1uB6ChtFEVHtETDzLCa74tEW",
  "key10": "4nQjubUnvuQvyfKzm42LB26oarNVcS2E4C4BSYeMfbiFL9ZQbTdXRPWD3DQ4NugPpAPtFFrE5E8AzpmnakYKxK6t",
  "key11": "UiA5hkjs8eSXZ8pBKpUJg49CZ6cjBYpq9Eixp15Y2aAR6GbgYfGDrPDLEyq16cCzh3rPxztkCZttz4HEjfzKVyn",
  "key12": "X1PQ2XpxTkzzbUKcuDX5rRgwEgBTTd8sAkio7bVBi59i9xQHxUEHyRaQ5Zik36RNMA7T9jQkRSxPCMXQ4EAfwJN",
  "key13": "5nyLXZQkcRudFdwMS86oCL8YS77jmgDpwB3HmhKRK57CbTCQm4aDGBUf2BoJCfySYhRh8LA6npyM4Sbu68BhdgwX",
  "key14": "2AwnjW7GVyVdTpxQybkkBE9dKNZLBFkLLm9iK9FR5BcMvvTgpHg4VdHSqrbcZe3f8YVwMfWkFrcQ6U7LLdQB6JHr",
  "key15": "4SzxAjGKKVf7i4MsNG5TDak9XtGYzqxyw8fqDDn92L4SXJFEgNGh5tNu14qhkPiYmNR4aGBShiGHRwPzVzDQg9Zt",
  "key16": "2p6xBa31QZNBEuQx1RX9AkD1UnWDpeChvqGryVGWiDLtzL3jkRkr4ewKfxnp2Y4nnEagoocf3ZU8zt8zUeCiC5n1",
  "key17": "2yEwqQgk2Grasgjo1Fepkv2ewn5bn9iAKqib9U7yuRQF6Xx1niDCTKBBR9xxtHWXupED26KwL1AG1XG5X44rWjea",
  "key18": "4Dznojp5JEnDtNFcSowrJ2aky6Dkwz315HeXmtcht8cx1fnZ9ZFCkg4GWFmpsio13vGu4o1SSCRB2EBd2zHhoJqd",
  "key19": "5wDJZBEEN3BZveekBfJp4VwpP4gS9qKxsHUuLoNt8oawvRhVaZaKxiuB9mdx9amptn34QFVdKo9bd7votXcboipT",
  "key20": "5Crdhx3hqJXMfqAjxz92nhkQRaxY6kTUkxofiDc3BFfWmJbHmkrTJowZXDPAzkLTV4mnmAuAXNQ1G9RuziVCMSg",
  "key21": "39oteBQ9bQ1ohBbTmQYQr7uV2De2AVK3J5as14mxZX9bCG3BTAC91r1QNQpRJagEc47GUU11U3FJq6Hz8e2kG25L",
  "key22": "3GSyKpxRBSrpep5xyDbXWxxbZqH7dUHQo1TmB4tDRzwXDkEiDh7n6ABxMMp46AxC9wBqUkRqrEY7eWF2FAatUzfk",
  "key23": "5NUYdrvGBCW9Spc6B5KdSMK6zUnj2SSDSpHRFfZgCtywFnLVLivfnnWZ9R6Uu5RL6JQMN7TDU2vSquGvftuz2ASj",
  "key24": "5MPfxVeL37GSqM6gehNkac1z4aij63P1gb8D1w7ox7PFPp7tvERJekjVXkUHBm5nSE5ZGcrBVnyV3XjXMSJhnhSD"
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
