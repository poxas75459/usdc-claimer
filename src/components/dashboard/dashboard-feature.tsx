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
    "5fqnTC6o5jN7qce81YGMLWXYwXLS13W1zxre5z73J1GEeDdgbfJzke3F5uivVoefaPomkcJGqLCB9ocPscssykwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kq7kbFRTMt4Hwdrdu4XFJpcyb9sicNHXQVcW9oYbnxAL82oCAbkQRLAqg4EZGicbe7xA49pC9NXrfZzqqwq3bhq",
  "key1": "gP14WwoBhUHvqD7nCs7gEnsEwEU6i33Pu1CKwXBZ4un35ZQEJWNUDQFaBdnMqENcbJAm4EwRaLAkUyG911e5gGM",
  "key2": "54UhpbfEabtXU45jUt3L3MJUeyh5oQZz4jYShjTZGMUyAQpppE9wyss1fDnEG1nZDLN5iWjLDTD7q7ijZAmK5sSB",
  "key3": "3xXrmKf4uz5Rczi8L44D1hPJSSREkv323par4riVe9PXcGCfmYCaeqxTux4unzwqeCFxgGpgsVzBVkGx4Cd5dqNa",
  "key4": "3rurbx7dDDHdvFaE3GTQHn2VrYpMvwXUai4D3Uksxk2GxfK5S7NypMqJPoPG3RXWSsSqwb6P7aLAAkGAdbBAzLpn",
  "key5": "5GfayxWpMVVHSwEKx9hE6CkbAD1EvXdKyKLv9SpFooGUHmbfB8CPYaqrHEFfQeM6U4h7Q96Su3jwppkqcKUv57jf",
  "key6": "2ysuGPmwDf2F89jyfexMcbRTRJfmTQKtErJSmn2NQCZvENoNYJEQMFPyfgz6TvkPDtX9vGApFgLcsZRpqib5t4PX",
  "key7": "VbtmGsM4EsD2yji5oik7w84PSZMKgLgqRyEPCbZAmRSqtvTpMGs4p1VqCiNrVFCorqWmAh3vAgws3oeKsMsVpcT",
  "key8": "Z8dk7R6FwuXGRJmszwFMPykXyNjvTgsTtkia1ZnPfEJDt7MdLToSzuX8rEZAHA34c8VZVVNELoeCFpNVwMBMrCN",
  "key9": "3ecwpE12Xe8gBhFjqkWVKMSHzXGPpYhj8gK2Lhc3CFVahZnmDcToLM3GkL9hsPzMGXuAP1rgtG6ckejUBKqdPscR",
  "key10": "5YESkLzJh562fzhPpDxXESwMVURDDSK2XjZxDsntLA4EM2TaosvWb93YG6mg8gD9fLT8mj5BbPZogXzXbecpisJd",
  "key11": "3xV1UKBaVVrohdez3fVDnm5JonrJiqE84kDNHpmtrkqj8CYnLWW7JmE2KDBrGWYXxtXJuwMrDaTxXn6W9YpTU6bK",
  "key12": "2pQhVJqmGoBAaSBfP2kvCHenx5Ynfm3KnxVPdAtbLbMJzz8G9kc4x7tnEkjSNBAHgaLtzV8PXMcATsemCMnTu9C1",
  "key13": "4o3Z2ZF6rizVvEiowcgqK23zzbge5uRGJ9z88g9uwgmm2GT8VSYyGnBzwhh4G7AjyyWoMjTvNgY3qCccXqscJHMS",
  "key14": "4kw3cPYRSBzCa5vHb9dMg3f4NVTCuFQwTSuNxvp4Ge8rBdrWgzPNtnnRtYXhjnJJpS1zGU214ikLVb3Q9ENkSf2s",
  "key15": "hdGvVW8LtXSxMjvsdvNGBnioiHfpFFuRuF3U6RZGz3Jim5reyQ9C3hhgw1AjJgb6JaKrn94ZmYQETu1LzFS3ku5",
  "key16": "4HxPNhBnVumkk46oV83kx9EDvtfzjfY31erpPJtdZSx9sf7YL5og8n443DQNpVKDyvXqz9siytGN2vQu12x76gYx",
  "key17": "5LqvKYS1Z2LnYhJF7zh2do8cB4gJaa2nUCXZujWGmeiZ6tTFXvjoA5uU2TPRAaGx2K4vcJMuehqcq7J7CQKS7e58",
  "key18": "3k1eUnjG6ifkknoAx2pgvkSWZ7vxLe9VNC3EtjjPK415ZEawWadXnsugks21Hew7GV4SQF7Rcw3wmbPZtEaeZqWp",
  "key19": "3yecEoSFodYmXm4ymv1d4YkWX2jYcVevPW64LQsT3gmgRr1iECjdhmi12PwyLsKAFEAtuusmJaCGmd7KKUoM5fNJ",
  "key20": "3HF33u2RS8EQzLdKbRuNARKLYn9q7acGa2e6eyGZAR1SoX1otJJCXZjfd3668YVJBV84roqTx87Qct2unVV28Bgo",
  "key21": "5tNgFntMDrpg8sWDohYYWywN836y3prGmq8fzwQwUUxHHsAxtEQmSQ1GZ1UtxJ1ziwq1Ki9mST64YtAtRQPKnrXU",
  "key22": "5Q8miJNygYVQiRBQGsX7yW8Rko3GZVPUKAGB4YuJxpyqKvPPCywaxZWVSvdMckWD3TcJR72RU9vhSDNXmaJQnf2C",
  "key23": "QDgf5eP1cpRfLYAXibZSAVAKjPkvFaUAXzNq3EkWpkhsXMmHdMQh3BjJjdFE33z4MAtGWSLq5C76i1EEBk1TWzY",
  "key24": "4zmASYdBJntujjdYtPDRzBfPhWBikNHSS9fy97NXFojVhsbMVdwJrrUyeBLS24ifLB28SLnQVvgZc9WHKRhmNLX2",
  "key25": "5Jgq7Xvx2AGSUuV5TjRhiFrbdNRkMGNoBmoGAcUs171qASMw21pwTSHdLNpmrawUjV9h3XHt76nRY9R78QsbQUtZ",
  "key26": "3o56qdhkdbF5HQsEi86sF8f8CC8qbUyn4WHdKtbM5g7HeGb2KszyQRoYspgH8J4QtBzQWZKg3fJ8VRdrTwSWM49g",
  "key27": "tuvzVGE7EQfQihy6xeDmkhB4m3oQZZx2b6VbPqBAPRvqcXUmHDkL6j1AT1tqYmunUHiwBvSL9o4xZP95JD6NazF",
  "key28": "2XfPUqWncnM3QHpghs1YVt6dJKEsrqYaHfByx1hi2oTPNJuiPXCa6FHCNMtzvqY4KbowY8gRfSaj535ifDrWotmh",
  "key29": "2Mxfb9Jy9ajLc13UWVRxPbG5XPe2YNVPAaTDsi1h3YwrxzfFcXX3MuNipMBpH5uTUb8tF9Mo9wiwEczCFyDr7Ns3",
  "key30": "qY31cjcKAhRsqyPBcKDyofdrHbLq5jCSYuuvBoWibvxnwQYUTaJRdPLuqn9Xktac3UBq7HXNrKQXaDgS7zL723Z",
  "key31": "2NLmrMozrDwEWS9oSQ2dcBukwgJSoeYqMP5jmm17XQ2mBB8g9VmBT9JBNP6hm71rJ8uDFxKYVR15NEYSW3GCBCWq",
  "key32": "66nvfYk3mmsLYkLDBgb9NADELuRy84c5LH4JA8gzsYiqrGp1fyVneHBW14Lx4SZ7KeJj5xSdjgTxg3x283bHV3uT",
  "key33": "2y9LXCRtLfnxXVB2pjYgq7Dm3kSFZiFqxp1PtH9dG4wx7SosiFmkH1eWL7Mpc7QArNa3zqErhJbtpZ7he6Cy6fma"
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
