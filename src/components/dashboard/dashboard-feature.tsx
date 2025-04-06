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
    "5se76U49tZAcBPxJuSVSwtJt7JtgYfTRUicWwNJXrUgx69qiJe7xVxsJPcYwX9MNDwVPd3Vxr3VTMp7FBuje2TDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBQizt5eZeeQLW7NnMNpS7znU7hJPcGr6GtdqEBeDqjSWS1PWRiCCKZ77BiguJ3Rh1vaNeMJZavSjPaM28Toahr",
  "key1": "2RG9Nh3A8ZXfYQ6gnQBqmoqZLf6FuP2dBUkrAm2ufMkH9fRwjZ1a1jDmnqKATX4VyTZkyGHunoeeRAtmiB6BvCNj",
  "key2": "4ZCuBPiJ31x9JmjqpFcH38QQ6gUm23u2MRDwTnp9kAxb98hNuQosuwX5jFwLzphfvV5aeVtSH6xv3g3EkRqrB5A1",
  "key3": "5Kyj2roPBTQuVhN7c7RCG7ysuuhfdPcMh9etx8hDkWAm6fp4y4JRWQZiiCuNbzL7oGxQQdpK5vZA8u2Uo3tv4wmR",
  "key4": "4yiTxmigqxksuoNcmCRfGcmekueiUBuzBB6wTm2hqF2FAdk48wNagzgCFwiH9V8NdWSex7nkakkXz7WRnXsZFxDa",
  "key5": "63GGYdKE93AMiJoBg9CnRzzNB77gFxGRFiGoyrWeU1o3rF27BijrKVYr8Am8bqXA8G9sykm5AGF671jBKaBsa3eR",
  "key6": "jEqrrAc9WpQT38eBgBZUF3BmsVHTxUFSWfTMP8gMwQ2DD6jWGZU3nhxWMoDv3iDdePAXNk5JNSM4zfkRa4xmAps",
  "key7": "4rtiHgRdxMzNE6vbY4mGnyyKnyo2wySfBMfaACMNMCMaxLoC1gD9mGyPPVozAd9ZYydxRpTB5NUe51BYbDhRKy3b",
  "key8": "2mc9KodP48jGzDzTty1oVNGiNNcRUjabhpjRkZRfvAeMu4KDEMm95MXm9G6jKHbXQ3PTXzwXQ2sFw7vbkd2bKNA8",
  "key9": "2zDUQtkyxVzvswiDVi2wXSPxFNJYixv1aUPR23T3PzLQhD3JVb8hyKe3nSAYSHd5ND5LUjyxAPWUGStztvZep69u",
  "key10": "SbfnUbykDoDiF1zwPpQFKdWBL7rn7XnEqHiKViQ9YnCzwYCS8HmLmPw4EzcUYU1TrM8DWZynjC6eB2MMBSwSZuQ",
  "key11": "2jciCzfG8ZauUtoM96YtFhHymB87nCnVwxg4abPn4cM3NVZnXXV6JuCWS2CG2iTmgQVu1eFGyTVFWxpe6wN7SihG",
  "key12": "4isCBJjkPmMDunywqD6qps4ZLAFA1fAz4aiTsuyfmEuSDCYMsdSWgp7XaVuMhArU23T9gX2FLMuyHj3o3Txgu1U4",
  "key13": "3QRsdFDcUeSFSPMEHZNgzttt9eUTX9KAh6xCzU2K5JN9A3ZUcbuLXP5HhhvR1uTDbAdvehn4XoxMKSkKtf5RAcMK",
  "key14": "2tKfTqZ6MADPnwkDLqJ2giZ87dC9VE6yYsEieaBVFMWekgt52Exd66DnxdZ15oCRWW65jUREMzjEwxFtfxcY9BSN",
  "key15": "4PURW7KqrBq18EhXwEbSPVXQAHMg6neg4ac74mQ14nrNeKqxBU9ZU2kntpaEnM2kVUeyPNESVkBzQ1CZxQxckCro",
  "key16": "2pFCt8wMk6hfyJzaf5MntteXpNX6Gsz6XrjFWuPbUuzvxDXdBmroeFtF2cSEwuMyze4Sv5ViMn4yqRRzhMy2bgTj",
  "key17": "5nZJJ3XTfy8tWKvpZx5d3wmKSAw9AUgQZ9uGrsJhnEwetpCCtCBu76tLmTYxGQAeA4P2T1HeVoWoKUEgsa8qgwcq",
  "key18": "38b6ZcVHC2bpajMSgW2FXCdatzAcsN4fDKstQZV4DxDL1fLt5nLsrb9DwCpR5Exeo6uKJJHGFssWFzDEGJG394yP",
  "key19": "GxwJdEQ1PVwvZmeKPQhCDw9mGRcvTjxv8YjRTTLcV4PcthzYQMKK8xNx1dEBo5jtLxB7vt69EENJ78DVLmSYxQt",
  "key20": "5PoXBD2ZGX5Mb3xTRpW9VxNE65b6KbyFbc24D16ZE3EuTcjpWVfx4CJ3ComcK1T47UqHcsT9N6fxotZTqMbytWrj",
  "key21": "5ytPLd21x4h6UWdQLdSB15hE3ioaVxiz61dnygcnWpoDppZGqKPrro3WgRto2TTyvfKoRc2DwYhkqYGqz22GpyCk",
  "key22": "MGKx3rriemEEMxg5R7CwA28KzGaozGcy95Ptj8c1QbGYwRWhfyqAKbAp9ao2PFuE2GVKk96NMjTYiyLHNgs9Nuk",
  "key23": "5ZYuoiLTWLe5h4D2ktfqHBmsc1yvbSqXKAdqTj8P7L9yA8hvrn3DbYQGZHqQywGg9xAgqcvisuyWHxzmSs6MHVpn",
  "key24": "3BaoiwQz9Rr5ez1xMy5EosHeeyNsUYAYMKHmxzBzLvp5HYPFYWy47vjKo5w2TKYFVELKftC8fufUkTBc8W218wq8",
  "key25": "2VNYscESHcUm7SgD6i5C1g7WWtF1uyvFFaXV3ygSox4Pah4D2vx6GPbBSXdRfeEwxeiERNSN82SSPoXhxaUhrMn1",
  "key26": "HLFFf7wvuTDBWPYHRhRsX7VAKuHGhkUMvePgKyPdHifQVcwgZ6HjgAHZvKD81yUKAF24CTXfgXgEvJpjpgN2YPi",
  "key27": "3zBTihwufa9mF2E5RuDtK96kTqZMg4bnvGzCAzLrmgxiXdp77PBtPnuXu46vmGLoCv6uhd1XqxYNkiQdFWPeEySS",
  "key28": "3vE7VDB2zFBZpCRgDifhwuKzrsLdndakNuUGX2DVQney6cHMNq1txSKtyuHhN8Y2gR7HTZ9FxELYaMDWCy1Y971W"
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
