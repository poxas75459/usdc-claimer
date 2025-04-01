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
    "3igJ2TKmeAXZox4bHpLKNu8jSqaud2yC8CRaHW3D5475eEWtPad4QfMrfWXECEcFyWnsyf6BLE2VRqB5x57j5wPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J792siMWAGQvk6fFJBYwkYZV7nKXMnkEWe8UH9HNaz658m5HDsN6HVotBTbBoHmsWDjQmf5AKWnRkNgkpU7gi1i",
  "key1": "5aLhTtK3HLDpKsGUcZygDbkYuYfk5FzBnkQfkbxbPtRV4PdU2omFwAdkYrQnKZENu97zdfNzusAQLNHAkeLSXDCk",
  "key2": "3owCbePyz5WgL32kUpL23AcJeCYrKVW6eJvYWoMDWspyd16wKbqxMJFhvETGLPMjoY5JfaCbrxYQQJ3iXwpN5WeA",
  "key3": "2UZfyVM4irQ1uFJ7jt4viV9CQ81zzsCPcAUfP3E9W14cm3Bv69T5UP6BgzAdVwYn2Jz5yS23ARWA39zJmNNvS81b",
  "key4": "2gNL2aSdaerR2YuSq6VrFDoUdErpHZ5h8Lft2mtSotfVB3Z8nhrV2KSYctAFUcmdYbYXHop1uCiv6b4DpNDHR7ZC",
  "key5": "kjz8nc5HjH1RBTRiRz5JXzsT7W4kyR5rDWpzqiKwZaQ85kXn4AeG6VEPoDP4JzYBcVTLVu9gcviM4pP8es91CsJ",
  "key6": "2RsNJcSz6ciKupeKSuhusbWfwsecNu2wyFJUvak9optU4GRa66Rtswjnntp92n8euvfuWGqdZTRKGWubMvKJoRZw",
  "key7": "4n5zYpyNGqjcWmgzSThzoxbuQbAJA3xmQWmVecWTQy29hRiHVm87fsTetrhJEoKfrsPUXzmjKZDt1tqHo1XfivHa",
  "key8": "4dgTBTEXNJaxccpg5gMSpGQEQHjyzYQoeZdH2uxR7NVVRLjqvVMyWayMDbzjbVKXjsmhPTDyARoRH2mWoDTwHW39",
  "key9": "5dApTLfJVAojb7Low5SKviQSQhtAh7ynf8LhKZ5471or155eQpVvDSXoUqh7Re2WQkWVyFbdFof6o6HncSFNodFr",
  "key10": "BiMbAbkNf1cg6w3QnzQ4Ca77hyFBp7PsFm86u7KbvsJwux2XWHUDdCx5ciPLhZKeRMRfgmhGpi9eteUtGcKBbYe",
  "key11": "3pEGbyvPduAqxspiujfU8cu6vNAX6JQ6wEtYtwNDRfDuxNPpvoseV5CTCX2UP6YQXD6xzdVfv1S519ebgGuE5JBn",
  "key12": "AKh6Jiu5fR62bM46YGQ7gbthwyzT9fwQJpFKWBJoZH3BA8QY6pv7wBHnuCp8QPA4Ugj91ZYAjqfCfTavvbvvC9x",
  "key13": "unZUp31idG4i2a2fSBHVG36816TFJWhUx1QFc56pZsP5hrpfQwWR5FbZzFwj2bLnaDJdxHuGj2W1oyxeSczKXJ4",
  "key14": "38Ux4C9fC6u8xa85esgRFJsC4Rh9kHR4AaCzEtJXb7mmMdAcBR3LCUX2ZJSw9naWd1oKeTp94CUQdYSY7rvLrWYz",
  "key15": "39wbYgXhN2Bg7Jb5k9t8j3crSmSZ4ZGaEPiavxvsDUKgEYxxf9JrCkoPFp75r1CWp7qDVyxsi7UX8DpZSH1SHvji",
  "key16": "cbMnGpimyZWPYmdF4mWzfcd9UxuK6XJeWQrr4sNE7KdSxG27J9eqdWYdR9Mbw5zPowGDnpqh5Yy75md4VNEfsSH",
  "key17": "3wGmpWBjGq9s1k8ymakiV39syXCQFKEFgbi2PnFnxHMf4Wgt2YJ2MUTqT1kBzAQnLEjn623bek2ZE11iBKu1uvqB",
  "key18": "36uRLRra9usPXQQynSJ25QZerjriobbA19dj9vPTseXLUYebyg75v1nkSAirVxNbXkChn1rpeaTE4soMuoC48ezA",
  "key19": "4Dbapyau3qgTnxtYAmsteKTSAFef8rqnDsHAzJCdatT9sH423a8gEXFrvqebVfjLHshrq5KbcQ7y6Dn4kpsdTwL1",
  "key20": "2jv8tcgVRtF4z1LpdJD32YULafCE9zNvAhwwvXk5qYiPVDRSteuf4TXoeCspN67dKf6nWntkYwgcR3wPwKvBNLJj",
  "key21": "5W3wZDe3yQ2RNM5NvoPfBi72NBf5hmk1FBxzUAvDhq1cR7HRDZ9Fja8qZHLjTZAR6L19zgRZ9MGaqMGHFY4qfQPP",
  "key22": "3cd7G5P7b3Vy8QDUBoSpdk6opB3Ws5jbimjWtHPWMqmy5H7HXN94JfaVzK3iHoKTJcvv6NAMVYbUW43pysoSvjEt",
  "key23": "5MhQZUq4WYeCU1mBGsBgAzVeAakr9p1CGP7KePxf6z88JmqTJWN743c3gV5rzJ7qJs5YSn9xmRQyEYzLT6S4RBTu",
  "key24": "4hccuqHciftC4S2FLQqvYzUJ3H6YG8FAr4XMEMR6B8DarSN2QMQRcKUepwDsU1h4AkFbsba7U1zn225q7id5sAjK",
  "key25": "3pvvvL6CLuWmzVwbTYTBsvSwsePVwuGvRSQWxnXazcJawaDiPgvMEyjVM9JQLv2EetizBxbhqfSc9kvWRb5SXEhs"
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
