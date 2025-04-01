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
    "3fK122AApazTjhRJMWF2KeZiEr19yMc6ovLtxGooZPwkUEYTNnPxrSETkBkqtwq1LVqZWQcfKDDYprFEj7TK3DFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gt2LZ4ckzQSvesjzuY7LScDHm358bJBdU1kaKs5LTdtTtZs4ETho1CQ4Ge5bycEfwYY6RFZ2sGuk5pX4xjqFXKo",
  "key1": "5tKMMGedBVugEjZKfwi99o7GbGpo4yCCapA446wv2eCV1DEDH49y3Fj1LNvAMkjN1vXanug8vwW7STcWuS8HYoo9",
  "key2": "4nG4zMVp4LNUaoStj8BuSgfYFthmuD74DhyDMsWpVb5xmGq3AC1hDyue8oL6JJw6k9rRiF7WTdVwURmoHQBcemcF",
  "key3": "3Hq3hu5gYimRNgVguKvpwGy4PnqMYLg5RStQRSqgjVyZQcYx7wrymPogMaHQ3ssmABmEj13t3MeoBGXYeonm5KWL",
  "key4": "2ZN2exBTYDmS465TLBPzB9avzPoAqhnvG3EW1qxCoADnaqyvR4pGgP3hv1Cw2bKMUZe6jEYNPZh6vcZvqwareiwQ",
  "key5": "2opgxr1bQkLJRPKJmxUtLxYBf9gmmpkFd3VpWxrWX7bUt5d16uHdgoz1MdzmDJS5erxUg4aXEV9nFguE4tPQPBgR",
  "key6": "3ire1She9JA45arvvdcMeKiy83vYmC92frPjRK5xtXPKKaYhDDJZwKSia3PQikLeuGBpDU53FcfyLqNiFNGELL86",
  "key7": "3ejTaGPswEcUP8nk4nt6s8arGBTmtzVuSbjktAetUL1dHoeDU2nrjJ8tJ1W3h2pMkVhJdj8L8wuxKCFDg1iM1zDJ",
  "key8": "4UtFnoRvZyTdtNvm3pb43ro5AL3n5gcfCh8S6yzVU81TjeYCGmkqNgr2cPNs5aQQTDByrKNAX14F3XZNggShDVQM",
  "key9": "4Jw3t84PpCu4nJGBvjv3YfcZGfGqYy3h26Pk83Hq2jnSpt3JRWtW2VkBaDG93Dqk4xXoQrjuhF5meY6wqYGeJih6",
  "key10": "SWLVG8TjKep5pp4Pa56SpAqVnZkxNTeh44iiYpWExnff6T8YM6UNicbaRALv4KxVNuzf8FbwzW9uMNReUHqsymn",
  "key11": "4Wa68ECmzSuE3syxUFYQdzAEQsV1Nn29ECV1yUCiVemBuQzr5QWK92xhLpcyZ82Wbgb8hSDF6vHsQo3xsp4Lza8L",
  "key12": "hF2P17Qtb5ZyVK8FFHaKu5kzenJPNWrB4FYnXMU51Jo5UDmnqEqbz3pKeqsVuJR7CASLT1NDUCqsncr1PN6yKcg",
  "key13": "5PLrGCvzBagwzbMU7yJZunzNgNPHkXyKrRCKJFBw2FgCwJzQZyFz3id6sXELpkPKSjkmmX2vaLu1mMdVvMfxGaXJ",
  "key14": "Txbii7xR5pEyk7BSrjH2xeny31DLnSrpYjP3hkF9PXTqN3kXs5xALoquFEDhqnCznNVezhXTdL3SnQmTxmfRgoi",
  "key15": "3qKx7Rfh9vRBSa23BuQXyUyUEQJzNJgsyBxaDvjKwXLM6b9TVEboVpoxWmdDfshaiTds6SX4QVsCSEQDyNg9rpWM",
  "key16": "5tDy9En6g61jTeJK8YAyCwcGLXhDg4DCr5GFHeqz2rDaySPBRN7gMXEW4Y9BcMuHZPauwfA2Nm6wgCeFqTPzjJmy",
  "key17": "2FXaPMyv3j9KLALduAuezBFXADbLaqdzBzy3CCRRrwdQWc4LQ7TejQvx2VW2U7hqzApFEAmrnekJbsvXiojcNajy",
  "key18": "3W9tNxM453J3rcnzV4XJTcxNETPoLiGPj3rfj4CZuSD4GuqhssAKUd8JJALbrFVhM3CuPcvMi2UGKLkaK1KEz5ky",
  "key19": "HgDksL9vMCphaoRgr1TMukR2C3oNB6QeydjEKQKKTimfig4R8hfRbBE4WY1ULNuyVZRuueAYAJApTGDU6aqu43v",
  "key20": "4roj4t845GARne3NJccEkdQWwcrLS2hNeF8EpZ3m7NSWKJ3JZqjA4b9KWaUPyaXhZ6jHG8svBaqkLToomUgb1VKi",
  "key21": "4DESZp1XhvoJkDgcgP8Jg3MXYRuuB8xjFmsSpF3y1sHmQjj4vZYxKmcmAHYyiNAFkitQPMukVvwJRfPANR9Jit7N",
  "key22": "HaYjmhJ4AAofxmq6n7NimfZxjQyXUCDuBBK4JTyhAYdZapkX3orP1LPXCLoU7ubZ8Q1CEBjpmvQC6A6dodjhEmp",
  "key23": "4MbfSeQFEhRbag4GC9SMnPhzyWgeoH6pyuez1D94CcR4zmm56rdusL2BbYesvaUDdmebP6pJBWrkLneAVwfWkfo1",
  "key24": "pVsJSe5JYaFE974Kx29UHet5U2phv2N8TMHvvCjazLoQ4yeffiVZ6PDDU2Bha8TojVQqiPTD9TkSzpBvTWAEppY"
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
