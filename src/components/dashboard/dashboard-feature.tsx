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
    "2X4xVmcNCbChzJg79pvWSL9pyciCP9oEd2Yn36Au7HPVRkuEx2LWRewxmwQjgnmjAo8xJwaaDTaUao3N27ej7vfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64RakoUCKCuBja81wPYUTuVJTz8s9Eakhast6zzACzS1Y1q7L6wJ4P9eViiCr17hqgCNWcK4kELKr4AEr5Mrv6YP",
  "key1": "JT75TsAHR9MXxr52eeC8ETxijUCjLuctMGcBx53MDZXkBagSrXvBPHPZGJh49ZX7W3NkhCfi1rHLj9YEu4YjM7k",
  "key2": "4EhJMM7Ge8QbjGmvdh8ZiQYoXaVrNdFkbDTDGEnyK9vLXZ8f5o7qCmTGnc7mpwq2fgp7aPZwKuqspesdSiR21c6b",
  "key3": "3RB6PtvJBGQ9oMTufyRMsjF46iGrYx2RTLmb9Hn2M4QNhEA4ZY73QR9Q3QymVUmEUbSe8pm2AUuu5vwVqLoGVH8G",
  "key4": "4DcRh2YxtaB25jAusanHmA13N8CJoSs576DqPcZPw3ECBKxFbDN48aZ45knnJZ22F2qZZMxkzjz98Ni2QELPtTtc",
  "key5": "3Kh42S8a3rRSPXRjxoZaK3bahXqrnD3abbx1iK7dxnaHm3bDDVXVSa4MhPt8JemkU4Yxg3yBb5Js6xoTADN4ZrSu",
  "key6": "3seSLVp6DefNHof8JH2XYHPb1aGYhzW6peW8HTzsV6nDR2Nn4phfexLjaaR8eTatfM6L8MTehFjTcGS8BpgGcQSj",
  "key7": "2sLscuK8wT9fwt6GkhqGSkbk1ZhYAyyuEJokoSyhE7iie1u546acscMVgGnfanN91rMQDchY8FkY9dbL7aMdFKef",
  "key8": "5GaMGCcMUyqHHHY4Nq3atPDshagsVRe7mda26can47Zm7SvGMhwsjGNzSXztsdxUej2DChqN5BR8uTBN7TPRkHxe",
  "key9": "63abqskpHMCsmTwH8zLmNDZzP7oBkydnjfqxySC6w5svj546j6K6CnmJAB8SFmgXeaeN34c9WewqPV1BxQWcrDUb",
  "key10": "mzHbbH1ePkqNHJKwpK6AU9BzsVDqpGcKaxqsuZTWKvL2YTwhoydsUmfhS48KsdNsumjyagzzbi2mhcDW4n6ZkD7",
  "key11": "5XWaD1MDXanUFeqU7wUi1VfvfsRdNqv1z5Ze8puJVkEynH1MxwxT4RsgGgo2GoV4NtsrRdAwdNC7ZEpnhps5cGt",
  "key12": "3t9xkRxTUGK4xUmJwExjU6nM1mbu6cSvuaSZSh6p7cw6pRAz39unQSuU6XvxCh2qJcYjKgH1WGnGS2SW5NPKH7VK",
  "key13": "Z2xsTkpVpog3cRH1x4rWiqn8NBmikPiafymhABjhdaxG85jZsgXnTYntnWV4x5rCB91XBAjvJjSHSnFu9aaGMuc",
  "key14": "3roWsL8z7KWUmHCtXVaq2npaKXBELjQBVJmfF4GkxRCSiACgAzWjA81ef5JqxZ1Aruq8aY9FscpMV5Hd6TvF2b6w",
  "key15": "m2PFz721S7CYkUgkJeiCWUYkW9YcWffxvv1rjYqZj4PfL26m2LGMfEhH5VrfxAyQrWWuZfWA2cT2KmbzJt9RDFs",
  "key16": "5khmW4ZVos1FEfUsG8P7mWj8oyLnMMQkuo3aCLNnAJ3cizgYquvSEXQCMhEYnnjC8S1ASCyAt9c2H4GLpqmViKF5",
  "key17": "EXnp1uuUVWgQYFQzb7dFEq9az8zipAX9MA2eBPtrmwrKxYdMxozrDSthSmGHfASmCJBbkDpAYK8xK8629gLRxy2",
  "key18": "qBurMsvJKhFRaFUErhUQkgA9iuPaNFE3akx2XBboAvmK2gnJJzU4bGux9zBYbVEoUpxi7JFpWErH4Qn81rTF4Pm",
  "key19": "gL9CeA1ic2BN66fC7oKtzMLcQBhJSAYKbpPpnBjQggANMEZT2QyKxDsVdN1vvma8fG93AdurE43fFSFDwChPgie",
  "key20": "4udi3DWhzcdE5LpsPd94ddEqNsi4nwnPs95aZ89yNtQSUdXb6AqB8nh5MSBk2yRu4b6pzYiutYRA7D9NLm2n2CVd",
  "key21": "4eLDvaTFqLkkrZN3bBS5rsdRsoyVJXmPwJ5GVDG2fCDaBbWodN65hQBEYmnSDP2SZZkg2CRL65uHEteydkp2JvND",
  "key22": "4kSLpqdyXw2x4Bb6TRU7rz19YD6h6vLNJdT58TsKHhXR5PM1ykJSTbMTiPEKDVLytxC79sEX5u3ZyBNRLiYP1wRy",
  "key23": "2vMgkgmFi9HbCd3q5XdeLp3Uconzot97A7h8oTca8puwEqVLhuGXW5DbscN6uKZAN1VeYD9s8Ks5vtQX1ARhxF1x",
  "key24": "5ZaLiH7xwrWP7KwApKftYL6fbzJH43APZ11bjqU484u2ADmCWak3JmGKzbymZNn4Y8HCx38BiHR7o8mpQ3D4qQVf",
  "key25": "3t7yFg3giwrKSTm6mMfjF3PiPNpRXhd41tA6nfpdMmGLsk8Pg84MUG18pXbMsJAvCjRq9gxLrjDCC5dfwUT8zPVs",
  "key26": "afYoULjRairpRkELAQ6SaaTwZECzbipU9hZsA7vZt7yYKAr5v8sfM6FAFe4XUJmD5onFgoE1yQ3PJC6jDWzfnGh",
  "key27": "XKSVXxgJ4fBWb5nNXXBaLvBZa7Ztqrfxf4x2KD3T8iCahqN7jyPvB5N8nYzx6Ddcs1bokZsyfjTJB6b3pdRjpPh"
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
