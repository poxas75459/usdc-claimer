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
    "hpUoPRzZEiyYfoxh7XNLoiFYYUoJqPdgFqg8c4zYpPxD3z2eHYxr27LEjRyUZArtCr4xjpMWQ8CF3cMaWfXNMRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AWLGBgEDN7EPNmQxwyriDE7Cp1u8SzrzcyFrgCs3s9Pz5hoAUXU4s4fv3WBAi8NbZfjk6NiPmPv7ALMx14jN9L9",
  "key1": "4kjjXKynyriAC3kAiWWe6mvqJcK27KTeDo6kav6Pig6Lm3bsMYTRAma3h85VzdLhdbxbYD9BypwfPmevxasEYnrL",
  "key2": "4EQBUC5bSSsYHjxvVJbUKmmZjXx3ArGRVeBVvgwxdFYt1pUTND9gCQ8gCgztMXuxjeWyWdPdKfqD7ixnoXRqxZoZ",
  "key3": "4N4bj5NZ1ZLaLpd334pDAUh63GXR2fAkdDkBfa3ybtDbkdTVpewpRui4Bm3GWgASM5yBvjaYa8NvaWWYfyCpL7hJ",
  "key4": "2pzQ48uEGXQGmej84Bd5j6FydXN6vsq5gtZDrscVtAPKyZrj2Lnk6pdqY92s2fZvycyK8RyqKbLBboVteEZ4yj6A",
  "key5": "5jexm9pDGWRU3b6VaETvKhCMrMiXoHiA7pZ8pMggbiP8T7coCiiY7fe7E2UqwwCY4Pz7bpv4H4EDsFKEY96vk2ti",
  "key6": "3hkkwCGKssYcWZRaCbqNtttZRNyLukAQYT8TqBywR7tHoRcXJ13qcZbax5mh3MU61ykHVxFtBn9HDRTPfMjUWjF2",
  "key7": "48HZTrdGyY8YYNFsigp9TiffBpydjHTf9pFqveT8rEJeNyfDEJyFahyy5fLPQuBC2kkgSWhCRGxY6WkksETHkrvQ",
  "key8": "BagXpbKjeR8j2ds7iV5Z7xJdK29LENkXGRMjTKt8b9imCb3TF8wcmxJRmmhDyzhCD1UTaVYgiLgUPWtWwPK7p9e",
  "key9": "4owmdJUFXfz8AFxmF8gHpo86K6nw83Sfs46rsC8WPvYduumnuwERQwdH959c4wLwwjnLug7kHZNRZLrf6fuaCasB",
  "key10": "5Az3nN25r6d7zhnMDKmRuAp4RFx8bGgQGohahu7D23vUdD4NoVZUXv8zgiVpT8DQXQuwF1C3pdrQQ2CNAcQtwJ3d",
  "key11": "4Hx6UYJMC1BQXXXFi4EBYcXxzrigydzXjnk7JwBL5U61ZGHgmeZNybFe2Lrim4729zYHrH2GgJccj3EcHYeDSmg3",
  "key12": "wj4XZGggbpjGKPQBj6T4m48rhkLvcwsfaK5TkH7kX7WbzTiSKthTt7e8E6bmdYEZ4JV7jdKttFEB12qtnpEYDQy",
  "key13": "5wg9Qyh4EHLn6C3QNqgGD3yaDw7mGfdheFwuww2BXoj3PSsjSJfu1Vy9mEXWgbYU6ES6VFKbzuxAU7JMawTTmY2L",
  "key14": "33QVJHVHYGrt2kdXbgy63JsJCRivEFgKxnfCTLXRuvDVhMhWAFUcYsWKYkgTSmAsnrFg6RjqHvrCpNUHKjD6Cvb3",
  "key15": "2j45qDAskjZSs2BzTMEnu7dL21Fons89K4KFKpveRG32qLSvUnAkxurqqUwXZMTUYUweSeMo5QFauiE25qZgLLqK",
  "key16": "HwSEgr7ZUdBVj2qFN8w53rc82wZXsmCb328LSKEfNruHFZxxzxhLHaiaZQqREomMDsxqNJxDNM3g8akBmJgfm76",
  "key17": "CWotS9vxdsKCn27GN5QcFCw19MC81gAyng3hWYc3Bda5SoA1nbh4DYTVerYjCBWcgCTbcT5FQr38UDc47ZB1JbT",
  "key18": "31HP5i7bmq1ZLUhPhGdvkxrk99NVaFFoSw4u3sR46DfTkB6SzstRaJFqTUdRemupJBsPhhkvycxhnim4uhdFKf8q",
  "key19": "2cy9DoPDfNWqPPVcLPAKpJd8WiJnkgdcjL3FkcjyprSPdh7DQYsJyYmjFau3caj81gCMsk9x3ezqMX4N27ijHda9",
  "key20": "4riRmJHD69CCb6a7UdoyoMBYXJAA7kX1Fq6pqLCf3qtnbKoUT956oKVe67uJB7j73MbF37ZpxSvJStKr3huxuenQ",
  "key21": "jvLLyAZTFFntXD3EPDghbpvByWMQzpua5ykzj7i9t8vg7DYUX27WjjNKkLtttw9amJXXHEbFLgSHcQA8yZYBah7",
  "key22": "2GPXKUc6EHta5aM4wvEUjg6btAS7na34Jx8qxEFbfkJoGKK84zmo8FcHdC9hmKVuQLC9xaRtDdmAwP19fDL4U1km",
  "key23": "5Vg17VkWkeTZEnsdKA4zjbB9yh7LjGnSfSuWnutC1stHnxYfbM8SBgT61ymsUdUjoQfih43FGbBqtxZY5ZrKKi22",
  "key24": "5WWRF4TL9AW29wdiMneeWqd3g9Gfy636HEwvBt5UkLDyjfPRcqNxRFGwLWm1L6suXSsNKYkzfCAcxPpwFRHTXSFt",
  "key25": "jCYKqpHarASxr3GVM7Lvndi8sXLRVqRaSx2sj5yaLVRq3dQ4iCcKmwQ4sTEirTzJdxhMzfxPLE4Pk1w81WXfDAR",
  "key26": "66RfXEDXXmXpAM13XMx2QsCwNYfU7SUA8yqAb2WhmUfBHdk85r3gtEY19gcfzCxgRNvQb1m14Y34ahRaYw6TRnii",
  "key27": "4sdRiqFr3w2GGyaTmLD67sK52QHShc7RRuUFgbun64Fgx2DAFZaJSr7LgetqWcPkEUZdDJ9tz6URNSf44PfUqTUh",
  "key28": "2e2VyicDSQhspfEkAqukCjYtjsVaYgUXNXb4ivH7AoarJ6H21qQ99VAnDfeo6wgs8w75LJ4LZPWtbnR1kDPQ31VP",
  "key29": "iShGJ3qKYMNrfwU6Kjncat4Cb8nyZTa73rjtbh9jvLVTWEFup1RHqqubmJhBpfq7N6KuP8MLuQxCjRCZyfGKXSe",
  "key30": "PxsAmTKD8d99iAHLwY8tmKBrWU6MsXxmevkcKTUgxG4ou4n8JGSXkkH2r8FN5NiaXsJHjNV1zRXSEUV4mYph3qb"
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
