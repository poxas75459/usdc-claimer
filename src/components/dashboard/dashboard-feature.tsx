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
    "2GTHMsnTkn9woaD3Po42eVM8GFsMH7AsmnHAW1VvrQpA4ddveDsr3foY1Fv8uGGByVgbbhfMrp4kFmEimx3KWGfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPFKaP7yucXnp1LxkA3GCrFGUAtxTpatMYrwxQPGSf3BfdrT9U4FV8Wrnztubf6Z52ucYuL5UESCpaokNM4VBSr",
  "key1": "4dsxH91FSRDEh4kZ96us61GvDHiqGdT4wpQf2oVkUWuinASN7pKjuumoKNEpkTjc4jEFzZwJ7ywLVgj6TbW3KLuG",
  "key2": "5gnTnovLEawDeyT5KRCBw2NfN8b94bioRvNrKPsPrKZJNEv1fcPseyTT8ZRkgE6K5bswA16i4RkacTSPofCX3XFs",
  "key3": "2T6rVdpRrDs8nAVGVbGoYLrKzNwqF2f9Ngdh4xSQcrovYDuyVtbTWDmYJjcymBDZ2wEkBEvweXfHRSWxw5rZuDe4",
  "key4": "5dy5wU7wwsYtWaNV77XF1DyBJBXXrUxHQGaxX4ceHZ4tcnKKp4VWmycLE3GgvYemjWZBa6GUMSUWDwh4NCG2Nvi3",
  "key5": "3XXVTF8QTPaV9zFpPMq66hGe2gpjGxrn92oBVkknEQcAP3bqg58AxG1zC9v8gvjWMarw1XWgtY1hMUbSP3ZS4hqX",
  "key6": "64GJJ5upfWCAn6UbC7RCe5YvhV6m8yUGryVHQbEEjm7vnZP5sxAKNfeqFWP5QyWALd5y2wcx8ccpjReWWAAzWGbo",
  "key7": "25GkQDbtMZnFRv5NZRPgP7EHQnpajnQrw6YkoxryyPadinSJmudyYhSRpmgtKH3suQgNxa1Ga4LB5deDu3bNgycb",
  "key8": "2YmckNZxbMx8AQd4MBZZfbaXfXUouabWhY4865mX9MHGaVjcYKzitajkcq64qhnGcebwE8ki717byWLgZwdjJq31",
  "key9": "5LuzrnP9Dyp1ktXsLrYbfitUPjBYXyB7nPMQzz9YsFrC5cJLM9DeLp6Gk55aVEZa2hHeGLyFvXtC3PQm29x9KQ7B",
  "key10": "34g43t97aFB3sunJesUrJoWDjLTE4Dpp3hcvZUF8oVNLSbHcSdgdhFxg7ui59kEhkDf8sJeZbEuaqyv74VNqttNF",
  "key11": "4oyA5kE3NvvPnxWzBJ762vQMv8vdNWgXcV5JCRv3td4uvwGNnr6bqgAD2cbh7dnEX7tfGSrGV4wMLNDvzaFCjier",
  "key12": "2REtRs6LCFkueLbYXJwJ1Mde6siWGV12h3sU3M3NRb4rKKNYu2M4m8BSadcxSXq5yQeqbDTya9t3s8QoZit6zEpU",
  "key13": "5hshXxm2SGcsSpn9k7kuK387Ejuxm4fmNosontnwuBrWqc5pGp6p59e5c5sdTHqow7XRB3fpFbfJxV6GyKSKkDdo",
  "key14": "pVN2UkJaFN2Moj2YmgnXuq1PGJUpmn5eTyGaA42yWx1YViwGHpGK64ZYXyKav4oEg9gZYSydiR85zhsCZjej78z",
  "key15": "AbwJ8CMGjpcNQ45zyxk36XSZ8SZhex3ZjFBY7nZVM5ogeeWQNgTSbFrRsJUfgffkdvXJH7G7YTgszJtEKtjsqHP",
  "key16": "231Uw51WyiMBVKYkKMfEVs45YUk1YSek9TziPJLbug6UN6GZH3jv7ZS7mV4hBCJPF77BE4rTij11k2EUFKCMoqc8",
  "key17": "3PWDvxyKzbf8QZg7oWrDSdgvdk41F6g3F7iEuTubfCFXCF3ewHMkuXNBoB2x6PKhjy4RHzj4Z2iKoAhA24Sj3aYa",
  "key18": "2tWV32VCxx47tfmpy41ngEYZSLnUqCZfKqohEoEGLivUJVc3Xi9UZNtcqVLxnRiYnn1gPZfHf8xRvyrbSJykQAfe",
  "key19": "5Lm7e6dHQTJwFw1FmDWyj6Znxw1jaqAjMxLtpkGzHAZWMKwv17RZmNoNqBMaLH1KpM9yNrdzmqsF9SJgZ1s9zkBT",
  "key20": "2pM5Tmf1QLhqojY6G7hUJcq5BgGeKXjeocvWACEQchLADMwSpQhRu5PQxMKT8XtZq821gXkiUAnptwvTosHXkvK7",
  "key21": "5awzFfqmZRcFVHhkjxudkRHDZuBiYV1qFKbRNke6Qbb3dFXmtxCP6Ah21L7erdavAaUUoveitWNBMDJFnJoamr18",
  "key22": "4MQxoiz74feXLvGUDHHvo4ABRhex3McjiEAXxjUXD9WnNvHXtZDA1oWg55gDnrn8cCo7bLT4uTTd1ktR9mmAe5io",
  "key23": "e6LuQxUGGu6dVyHRkT3vU67fzowLaS3VHn9AXsxXSFkqm6P4hzuUTNDqzSdAhzZ3NcQPZkjQmr2h4VerwzEdyoG",
  "key24": "3no7pHcs4anHxg8e6EJFNnKLUM9qALAbFrHG5895DZVZVNsoKoMusHtDpeTE7LRDcz61CnCmNLX6dFVeEYxuafbk",
  "key25": "5hvKDxCR2LPnWZS43ZCT132h1yQKa7muCknzC3WcDTow2tcR9Tb6ojAPcE1n1GVSb7sMEANuU1nawP7P8fsoEBK1",
  "key26": "3Er3rFST1Mc5Hq1do64GLMsN5W3NVNHi2JUxFbLRLuPLgPHu2GAsoQTFhhRETatEko7UiF3UTxhJfBHm7Jpz1B82",
  "key27": "5EtkE4NPTjtoFguDnoqrfsNz7C14kNtNDLmprqza7VhoY33mGepqXmakenjZ92TxE7R6STdPCEQCFAFJMm8Zsk9u",
  "key28": "4bTK3JRk7QdxpVEn3me2rKzHqXEw51koGefZwLPXHwdDpJw4ZKoHyhZCA2HTkiTaR76QbLF3tJKFKMkagQUqDoDN",
  "key29": "4brDAwHzy3ZpQ6N8uxPNhu6FMopec7q83YqtYpmJck28LNCirbarrZYQJZ1VcHoo6D6CPkRjcoSukUsMQTRsG7q5",
  "key30": "XynD2PvuhNshczsUWhpwSpeKErstSnMfHQppnWb93SbuiqvF5uvWaTXoJytg559WEGvqEpF188P8dPGeyEW79rG",
  "key31": "2YwZsUtjUTbZnJX3v55pDfGUHsqNc9WcnnRnAjDrkY2FKjJPsP27t3XXdVC24weS4CV7EPQN5nuMiBnotQQmTikh"
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
