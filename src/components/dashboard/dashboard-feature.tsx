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
    "5PBRRxC7Pry8z7toa9b5oB8JLFhiMypXzFpdPawXsHVTfFbEaqanxQVsP49vHCVazwcah1BADomchksDBGUaUB1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUisyc6ofDVV9dMSw77DtZ86rxfYg8w2jAq5hYgKGVBJ7wPrNADQMg2JukgwcFVp51gj3pfjxDbjjYX3k6krFWy",
  "key1": "45QgcLSf5PSdVk3rmzzyYMbhpPwMjQsjkXKBCLrTkxTS1HtJj3cNS8DDFU6mRryhjCj8NEAobfwZ8yzN71g3oSJ1",
  "key2": "5T8wDRoV3rFDPB3Mn2pbfET9ZA8W62VHvQB4df4Frv6w92kSmKN5GkpvMcaRpAxFDqMd93V9iWZd5iVxUhTKJDib",
  "key3": "ho2KXF6QYjagdYQUC7As26y96J4btevigUguSv17JgcmWK1G1CKHWh1uDvCgdxsPFVE8a9xKFH7S2jUYmpsgsU4",
  "key4": "5d8nrHUDgictqFbBHRbMgYCxu2AHtjKWGYDy7Nmr8b5xhP3Sx7RhRWZRdFLw8c572wtc7CL9xwzWFx9tsPEdF7EQ",
  "key5": "5EymQZs5tXMSefjUdVSWRbD21hFVt87jjisQ3t5h76c6CH6JE7tNEe79yiX4okWPSG32KHsHWCtEzpqP7W1tUnsb",
  "key6": "mt1tBJmhMRcCcx4pPtA5pdmCP1hYTHbSZJnNhvgH4hYcav78FhGLWQ7QcB65V6Vu4nAJsFTwgQHPvFvuTLNu2Rv",
  "key7": "5ejuuqy4mVp6M9c5atrEAfmdKVbkvT8gbpvMpbVL5LE5VfxXSgsqgAS6Guvj558SEJmA449iWaKn9GyCxvpFi4ze",
  "key8": "3Zpin5jm1zsde1AsogjZx7MZdzfRL2jkJx5c4fSSa2NZBdoLXc5YGUm39wkGa6wHNWTkPBDoFmhV8edFiMk1c7Re",
  "key9": "5L3rhZC5PY255Rh8RV5VWsw1KF1WfKhygCkfabSh2J599H8x6F2dWie4n1DJtg484uVWXuiPuL6gvZiTYgx9XvTM",
  "key10": "3eko4RSdXGBVi2WCaCyc6kUvbtknGNh746qgfNoznkDwBF64hi163G79vrcS1VveyCr3frGmzLy7mC8PjBWUGuwe",
  "key11": "5ojcUQzTUQv6YSJivJDLnvNyQD8w9psykV6Uujc6KtS4b2N1HGocF5ZYHZCurGumMaWE6GR2mjexBH2Xqst36UEE",
  "key12": "2VodBUJJpDFUVBmuFogwsX85HHX4TLyvksJavJfhBQYGz7hDTzWZQAXbsgUg5wSaDo1MDiJBc1xAQs9HqP7a9LFs",
  "key13": "34eYK4Mq75Xg3ZMUiqkh9yn6avZWjyeptiKh7oGUtSzfoXSYZde9dYCBSrqbm85G3e1prd3TLR4vaMFXQSCbeGqY",
  "key14": "3mYD9CEKTj8c1xKjX5LhDzNnG2swBQD5vPc1ULaFqgatcoWo6jeDp7KKMED8u17Kw2SbDHQSHvYjC4jwFxbAnnn6",
  "key15": "4GsQeFewPG6FMrZMTak6eq4XxvBTpszS45pXVXSNFzjMC3KHKrmMFBfSxPuASWrfYGjyXB4yhA23VLW47sEXjfuE",
  "key16": "2sTEpxGW1N3Yg9ivgHcmv17qQ1e3sVvQW8NZSN4UwiroPt7DncQ3ic2zQa6CkgUDTZDdbzLEGQiz8cPG7wtURf3e",
  "key17": "4yjHAgSgPqm1nCaiXoBKXjtA9yp564wjKrGc4DuaPNVxtK3V6PmkNNsLhTFZ1d6L8ZWqbMZ3bT7PL7dzWCTzNwuQ",
  "key18": "5CFKoLjB9xLxgAYoTn56KooRvyvvfaYgaxTSdofRvqfcEaqFzprdMCUHU4VCyRNcFeBepD1YKQ7oGgiV8xCnbZoP",
  "key19": "46ESwAJTNomQRm93VPW1E8SVjXGhWbYeGw2VTGtyLsoHuXL1JHrqkVwQERP2RYcJCi4WzfSzoXdf7VMEH2kvc2Am",
  "key20": "27U97Rv5nnJRcxHSNPBomECiwrDFtRtW5RTtnGbGQNC1ivynGcL5uQK87zNsfCzYh5hQbxSPXjmZNBT5g7Rjqiyn",
  "key21": "23kXDw9aCLBWiT8wg71DMnTZNLZSRFZrLNhqNr3PDxkxSv3WXVszG4SZVBURkhe8hAWtpne8cV5yKpeexadd8HDg",
  "key22": "KcrytYRxSjUb5Mro2GMHs51o1GipiGhHSy8jCE1D3tdrnUdzULVXNFxw2Aou71BT6Upgz5JoEzgGvddbRCBggpN",
  "key23": "5AqJoiETNYLcwh2xyKFREaQ3anVzA1mqaefYy42Q7DwpBos64SqdHXhJJdjCg57NTX6iogbF3H3VsmUiBKewL4DM",
  "key24": "2GHRsZUtgeEkPiYHozipfy17D5eP8zM2HkhKN6Zwe7RPVxacwsrr5GSmn1L2n1GHD5z9uyENsByRpc4JS6E3vWuY",
  "key25": "XBhhrarkFpqEN4hLTxS9DANXcM5Dkj35hYdgbzvF9gPpLccZA7Uacg2k6JyLYNpFtKZFeBeGNUtDndduMswYbrM",
  "key26": "buN7mEScA8zSy1gNJ8S51xwxZVMXxBXgJxWjw3FUV7PcGdLYirBgzpfWwo5ppmkPXfyKZDH5y8wzK98URV4Fe98",
  "key27": "3P77raN6842L9QM9mRjfGNxSyTkn2rmJYcoBu3omgqKokehZUt3w9gFGvvViLpjyidmZCuRAgMKmfMVa7o6Zfed6",
  "key28": "Bk3KFMCnUmZk8XDYWooHN2LQeAC5ow9pUmGt8r53M1vV58uJ6Uzm4reETPDM8JrjJeEjr27XSDbZwWzFrDyVL2F",
  "key29": "42NxWSswZchnpHuQ7ouviMkm9RGSvH3aqbKhcN65UxiB8QeyxZftAjo5WWZV5MF2fkrtRYeRJkxYumCiSbfCmTw4",
  "key30": "4xQBvfRJgcYZcVyv6FJNybT3kPQ7xCZ3XEDC1pk9aeiKWcHnKAGbWq4PA2kAcyRRkMGc61tD8wv77pgyCoorhW5L",
  "key31": "5Ub61QppU7XnQDzKVmqUB7s2Ge4KqDDMLkK8apnKV7tC3zhiZPsHQYNiVpgSY1EcGyddJCCyY8WfRD5J8D6NK33M",
  "key32": "2JZpPbxH29L1U8yvVgypUkR6rm9TaVx4SzWPqs8CfVBuG3hdG7GieKeiwbQ8qLWxHyQAWY2MQavZwrRBdwQLhGJZ",
  "key33": "3CWYa2bhVDDAB6AwtU4f5XjWiks7wMht9CXnzo4bG81PyTzFHTT4o7CEEoGcZG4PE2H5HrqgdvBMa9thrntHBLkD",
  "key34": "2N9PPXe6czLwrsLgmkEYWepQ8VfqbF5baCff1hs2C1xGKuyLbfZd4UttQGG9HEirBmyzw4CGA6dNTZFRMpjhYA8z",
  "key35": "65egCYRqPccTP8nuZQ9t3riGdDWt2Wo7Gdg7Pr6Tka5wMuNoMj9FKs67sUwARfXGxtFD4TypR3tVFiYhtfXaqczu",
  "key36": "5stexshbnNKCCERNrNvjL8Ly6GKm5WLZeY4Z2jAunhutHVUm9Dpv7wdHpn39X2D8tum8p956zHT797nhMZcEQFgJ"
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
