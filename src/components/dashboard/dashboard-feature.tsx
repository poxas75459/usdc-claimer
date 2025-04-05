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
    "2u8ZJPY7t5sym1MgJHnqfESoQXbLUnM6JPbrzvGpCKLfyChVxjgMfXRuAKwNwTxCsZwPT9Hb6ZHRDrps5FEV3byU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1hTr9eB6CrDWDZ4g8N9u23DBer13B1vYux2nWywbUVeRwLZeh9dAWhu4KrUrXjFaYjXRe7v2QMRiAjcdYRUeJz",
  "key1": "mnDX7ioX69srXCBnMhihfC6QjYRXVSwYqKsY6ZJkrBaZQEGcmoCq2hJ4kSPDMQZcpNgjD11Jyp1WCbWzyRnCETG",
  "key2": "3anDAcN3jNGGNZbcgvHkoHQV1UkaPQmxRw5nTJ5KPWUj4ksq3jYctqcdc9jmQMthyEtxa4qL5wMh5j8Q6VCg7Uq4",
  "key3": "2CZL12vAFT1uNpjtPyLkvWs9gsKh8bxSf2wViwttC5DKUpfdS1ywWVSnCJ6xS4gZ4Er6x9oZcr7btGs2zxJ6w7C6",
  "key4": "3nrEgT5prxU6nr4VHRnpQmqYo5s8LZT5hRFJqL2wd6TXhgi2Zkx3kMhZ3nfquDarMGSvP2P9C9fvpu5akQMdMqJS",
  "key5": "5MRmHqHhxrJq1t4xB6LkrwijPQyb66wUmqqYBd3nwNVJBCnrhcGkCnJAr5yzsWK7croJZYR1txP9mT9h3KWJvmQv",
  "key6": "rjFCuNxdgVJ5TZD6EbzVHE917QN8jENSZpuKfuvwWNurTZUB6XXzpisTYbd1n2TnT2FK3xAMUFer1BDS4VZwGkm",
  "key7": "x9FxM7WVZVZH99GeSn1LNwMhuwMyEyu31EqUueZaBMepyRPYVWFpLAdLZUrbYetq7pTSBjnaNNHwqYPT1DsYy1H",
  "key8": "2E4QCwpPSMvMEERPWBNHah8NTwV9xRSYT3GG7UZJN7n8Rue3v1ghX1HEXVEjFBRdPMEHEgfQ52MAbFWBpzX3umCG",
  "key9": "3VA9uiViW8FdjGakKP5GxVueTvFXxq8gs67dsDnRfH9WcJq11LriKA7R2CDEQEy4SDPx7KeihuPWbYQxpSrVqhC2",
  "key10": "64uXb8YhSV6VA3FTDGR2kJYyMrjJNJRb9zjkMyhRxFHpbZQ8sBkSPdPJVngzeF8tg9E2aLxz1rErcb1GHWcqw7ZV",
  "key11": "9F6NCKUH2htUejDL9W8nBqrdFMQq3ezAPSMszuxDor6ZfvfqkWmf1KBH8g42WK4Vb55gqfj36dCqF7xKpL4iHth",
  "key12": "4L65j8PY4fDg4c9ye9mm6iwsaBFtZJ3D5EhJVrvN6ZCztjmkebYdDnmegJ3tr5nsRE4sk5ro4JWh7fvaLjFinb6p",
  "key13": "3tQHdXn8iAH2KKnArRPWcfqn9n1CY1W4ipD7TX8QQWLrDPcZq5zwMEGqb6pH9g92JEDyLkvo1PDn9iMhAyAHU6pF",
  "key14": "t9myijLWyuh3MjjaCNGAKVMzRXL6XFuiyPm4n4kZPjgTYyXQUMVhQFwxFwgyWT121auLSEi8EFpmp94hc1mjRyo",
  "key15": "2BozDrVu9oTHPmFrFFrJYzPwCJthfBEYBr8Yi2S2TibEz5KY942MUGMvMC35NvYbNq53fPqxSfAJptNSUkiGm5hr",
  "key16": "kPHp585zHvnXY9HBEkjroY19dxqHtkqhcMRohruPaDuaaHXapg9Cc5f3DP63qB4eV9r2VvECZX7PGhJrNELLebE",
  "key17": "2amftWiduaoydQStDvebzT4MQDauwx26BrWAMaojnthrf2MgKpB7sWTYigTnnra4aZk9qYyfUY6kTP2xhby98tfp",
  "key18": "4rwVTNSGJkHrmoynv6gDiVSLcKH93K3M1R6PmHioGXhKN16KVJgrdeSjHrjcUmf6uGh3eUpwYSg3BMqV9wpThW2B",
  "key19": "3btgMrdK1y7T3rTWhRDwxRR8kU87PBepZ3UFoULm6b8cjcnS1npacic88w3jGLVEpmzLovb4dZo79cq8JpuodfEJ",
  "key20": "3ZJ6FKv16rQvP1WaWcy8h7LuhkfCjTw1Bmewcaa1CkXuLF5p8qdNoREHZqqXcDHg89mk7H3mHGwNsz8xXUaFLZvf",
  "key21": "2XXLMoFpd9ZbakKsEUq4Lg6tKYXYYBtaTxKZk3KYC5nMTjNEMZjYV4U4gmjuBtrLuFZ1KXaG861ePEJwncRE5r1W",
  "key22": "4vcgVHdLEPSgtSYvcXjDGHJkV7qUHgyDAXQ3U5YcSwNoju8fQDmfhoEZejvRkDTzjUspvNjwnCaz9UTyatpRZZ2S",
  "key23": "28ArNr6XStp9WFBXHAKFayuhaiTVhF1LbgvBs9YstgNjm1mBUsRct9jHC5DDete2pvRcum8pR86WuZRBmgc2wCYm",
  "key24": "55SBmqm13MwdYJAXGXnbmswYeMj2ytvYnKC1rtoszcCxYq8zeCMQ1bSqCagN4gbufMJvSnvkbtBvy6PmW984GPPh",
  "key25": "62AbvFVhbw9imKRngMqYSNZSxoTh7hbjFrDi9HyM246aThPogApd4G95gNnprDs9kvge2oSA4Cch4szmCmgokorw",
  "key26": "udMQqnL3HPdYB4QB3HDRvXnK4gvG83xYXMZ5rRvWbR5y9vmhMcTmqC7hPFLZskpY4hs3jT5WBQs2LW3GcvN9FgB"
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
