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
    "3UPL11aTwiCAotaM3fQM5oHroqoMUL9j61jar3E4deQn4JwgwciXDNrUcxqdVJGcpceLqhXbMBTUhBR5o7g2Mc1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7jqXAm7crHfgdfc2yCgATHHQAkNRps39pXPGk7TkjY7ZthK1SnVoLFQz4UEGUjszHYfVBBwUiBzFBmsDAXT6Dq",
  "key1": "5jWkGQidtEGRvG3SL9hvEtNf7svAm5JHXkgJFJyzmeosJPPY5SQrPfDjDGqgtXKXHbCRyQYX4bCU25sPkQCNJnDD",
  "key2": "2G75RtsAWdaQsLS7FVVrKD7PZnRN3umr897pTk1yUsaEbaCem9XTabKcXKMMcPXCwTkjwANR7RRJATrhiJ5zJszj",
  "key3": "5GV6fpHQWBHdQ8Lz3GfczJ6t2x5huYxR4LFS8BC6QctGStvDCohe7TtW2mcxEedhY7fpT4DpydUfyY3bCshV2HTi",
  "key4": "mA4XoqyN6XJb5XE1qAXryL7xHNg3vZ1jbjD842jq4bHCnDntfNCp7Tz1khqcF7NrhSR17tCX7yKHcDtoUa6nC2N",
  "key5": "3XPzZVtY3DSQ6BkiSJijnXi6e1rE4M5hq7dMpcndJ6MEoNJZKEYpq87MXN5sXCmMBg3PBF89dzyZV2tQNA6xVmTo",
  "key6": "2zAmwuzAhtD4q1SJo59rRggRCuqLgU4tBpmpw7ZhyrAL5TFedvctVWQi3NMPjbuQ2E1vXrR6qtGzB9m27XULo8ez",
  "key7": "5U3zFub1vEcGNqEYagJNeWVdHw3SdXPEVKENFHAAgiQzRMXJgRTNXLtbtpzV1vtjRBzJUD87vEs4NB9DVScJukNe",
  "key8": "2BZbjL5zEUqtFjT7aUAgycyHJsNva3XLuFzCTSJraNtVLwDyJSk4o6JQArStYiCVSz6ESRuVew1WQq3HHePAQD5A",
  "key9": "48jDmY8cXiMbXradQF7qXJeossdjBrJgwpjnPoPMjjQ1nSnBsdpgSTkXWgPjuDm9ttFeUDhnw7bgkivfoEsD9Ck4",
  "key10": "4BNZAx6B413LAWEH7fn9SfhhTFBzYanSGisUkz1uhaWMqJ52CudPMaUcqMjr3XGGY7sPrdzPU72YcJKz4mDsMHkW",
  "key11": "2k8QZt3jwLzbLD8D4QyJJjtyb83cbifTd85YHSWLL8bBVexAnrjZhg6nxR8nagaD9Sxs5TLGkCtrrJmwZg4P3Biz",
  "key12": "5vEepXyquPeo89jq8kZTwBRUXBDrHSYQoMvVyVwvMdidsQ3sdPJcthru1ePyPkNZmAEgsfVoTbwedQtPFJ86xZK7",
  "key13": "5WaWa5b2dC36jQ75zJWxfANt8xs84UYY6a3oduSkB8ADJaWQNVTHt9DFf4zbrszN8WhZcgyhYN26sC4fntPmLU1i",
  "key14": "2m7kn3e7LSPgoHzV8FUL6pmarESDc8kodPDcBBNif1AEQamxUKHquFG4qAQvLuobj96wgdzBXnNU5vij9mt13ZCB",
  "key15": "5Cm2N9DtxP5EMPiGHWGL8nf4cpSiwQLatUKrqcj3hgsDJUJx9ZC7nREWrcy3Tr8eoDZ9Gs8w51X9hXCUsdVrheji",
  "key16": "4L5Rx1B62avjqFiPnpddQQsW7NVbM3fqVM1mCLCCZGD2ZKUQ2kknSyDKYgjWvHwAT7EJNbJ6Do17fvtdbzmQ9PPD",
  "key17": "5j7ncutJGHazvJXk7hPwGULifsgCWGkD6Q68ZaHch4KfZ6a8uE9TqtEELJvPNCmV4pyPNgE7Pc5SWeWbPynGpzkg",
  "key18": "kXxXyVE3BKs6P8VrBAk4FVvKFreVn8oQPYXgbYWQUAvo6DWVDjwao3LoTu8m19zyrXN243iUZRUNnhGk5Ybsmnd",
  "key19": "5pFfRp3WccYTQYMTZNSay4Uzdy5nBZg1pXuumw1oQqmfkxYWfprVGf8t6dfSGvZBFXm9MCGxB2sw896T48J241Yg",
  "key20": "3wyGihNTL8SvkEPBMG77o5KpKkqYagJ87vYbiGSfpkbdcbQ1k5W8jW89zU3w48HMam4ZpBWdasv4oK1u7Vgxzigz",
  "key21": "JvPhm52k3Q7db1pEXzoNDpgi5Z1pKJ2j77NiCd9ZC8FRk2yk8oU3tMTJn9Z1vcVZC7dBWkQ3AKUbhfT2dPWGX7b",
  "key22": "4EaAXJWMi7cQN2XndRa37rcgE89CdFJuLzX9WZviUpsC74YgGE9Htz4GFYinWt5CojfsXewYbLpPaxUPQxsnS8g8",
  "key23": "24kariBXk4Uz9HCEmTSdRgzist3Ww25uiSSyzwY2C1nztuxYNKxDoGkDdR8k2TBg3psCtcxqBEkSotLrTmVZ5wPs",
  "key24": "4fwBjexnWo2mZZPZfy8vTckG9kjaxd9RSid7pCH9z4a1ToJwMoQ7cJ1Nx4FiiSdC9YBForcWyLW4suRYvw65Jfow",
  "key25": "3K5EHhDEN6zcWHd4F1YhxFKSs5tNdNf1LHbYUL6JjhyC7M3ewgVpqQJxgiYVkCqst45mWrfy9N81Kz7N18HuzzeG",
  "key26": "btMq6n99JSLEjbhWSJDdjXyyJ9tgoVpfzZAqCgActCDZmfDDRW6hNygT2ovDs3D74jQ3cj1tGB4QFs2bru5mzvo",
  "key27": "jniZLJaJfSiAHKs6kZbAzkW5Quhycy9N9R89ijLkAe3i3V4wHwGGxQGLUbVV8MR3rSr5Wc8rXqZCFmPBWwnF84P"
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
