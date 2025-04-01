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
    "5nn1kKTrZYGqr4mY9cML15t1aqd2kJXtfN1yYUDGk3F3CcWRjn41dPvJWbr7L5woSYAqm7tnH5Cw3sENQsZ6zEWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VD8Eo8x74XcpHZAeeC6hrvhrm8jWMeDVYk7UNcaZZUhbQKebpYHoESJZBqkyQdChokuAYejX7hNXiiT9acJVhXS",
  "key1": "2K4gd9D69tjodahYSgLRhRvEib7dn2YFHbu19w5qChGFuTRKNYqfqpNFBnReGymgT1A3ZdtUVJEWXCXMPCFZZLtt",
  "key2": "QaANJ6kMrh9ZTB63mJfafr17KULndQtm3mboBtgK7sd4ZEMgZSYAuwRo5WYzKUZG6YE112ftuX2PbsJn1wmZNK3",
  "key3": "2w5wFRGNiK4C2LHCRnnSjZYXSAydMPcB27E6zn4TUZxADvHoMfpxAMtEbiAyoMcEtBXx6zkUCk4mEyngzjkoQ3zT",
  "key4": "3osss5uGqVF2kMsUi8fhebGxsG3QxBz5TonWZGL7x88q4dFPkXKq7yGh1Cocw3srs2j1kJ7137UVFcY2QoJHJYvX",
  "key5": "3M9Wd2CFQmNoGMxSFDWF2f5tVS3a6RJhREhdEo2L49GNVHJGD8rcBdt1T2V8xhaSaBPJg3tSMjhxu9cYQauZMV7R",
  "key6": "3dpbed8AdvCBCjYRNAF5MYtFAMViDbAf3Dr7rDfkSKi4Bjka5523kGrQzfyJv52TwLihNfym3rvNh68UVCWHWpc5",
  "key7": "oqw1xsR5GF8GmJoZ54jTAzDyQs6rj8qEggNdSiwgDzJtPGBaN1QQUHPkwP2MwQbKLSVr4GzSsSLsH4nJFfmQZVb",
  "key8": "5H8oFe1E9pchVBQfkr4pJiFepttkk6gYnWSQbF3jUcS44HpXNfJSZmZvTDyakcEeQoounGmM1fkLC1byxHUAgd6d",
  "key9": "xJ2dwm9P858SfuTwyLHCRkbetmJfsDc9dpMdiq7ZW2cZhQvvpFda6mRkUYNLAqiXBRcrQo8McJJLP5KanEat6VK",
  "key10": "4XuZb2qyi8xbcZvwmRAbHkUw2cb6sCaL7eANJwJfRPgc7BFUHhnVsCVbvDrGYTqSQ7rqUgoQEt5F9fCmmSPAQu9b",
  "key11": "2dc3NEvLaEdLy6ryALhdcPqeu6fVSuAJmdao3dfaVDNvd7UAzMawVQotTLEKjprxSmsRKzG5QZVLuvrK1qvUqJw",
  "key12": "hwsexbP8o97j5C7u7cHttWUmBxobVQBwFnpEj2Eym8dBahpiLDL6jPNSzftyz8VXcpesiMnLrm9ohqeBJpQ1VUR",
  "key13": "5FoeF7NAdHSudpx9WafXYWfbJFKw6LYC5HEnKpiLvswUfyFNkxCH8uAiveJzcZJVMNzUdy8ozyahNmooXxRUZUwS",
  "key14": "2NWrQ8yYKY5L7jmDR5DYfdW5un937q46o1zKgdzZidpNL9CGQAJHQhNjA3cuz4xGXWaUySNWxEnQXQaerEKm7JTE",
  "key15": "2x3V8VPhbGTFVEPyFExsBK77NgqSeMNRGgQPWZMCpR9sif3NCcGkfEmkyc6YRNUfViuJ1GSJctu6xoRGptHbe8Eb",
  "key16": "3kTHGE6yb1uxP96JPjWZYaYFaWaLuuVdjgc3usT7yhscBwYnfmBsqM53rdxPWWZiKiVCZxci6FQhZ83fj2wvNwUK",
  "key17": "2drvGLn4yEVMp1vSirdxo11dcTXYJQVkKshQAxQKrsKPiaFhCvbu2n4JndSHLByv8ccZuFmSDxUAKckDEdrLsBUJ",
  "key18": "4te76dBWVMmJy3v9CM2zWvkmqPtiXdfeJgPvLzy9aaNAfmeAWFd5H347YtY2HD8DZU58f7jyAEDXY82UrvPGMV5g",
  "key19": "5ZUGVWhghUNsgjihSZYWW2dooJABsfTcBJV5rKNNTYVDDY7L4YrxhFJabr4wV5MeioyqVRgGjGcaGACtohbTkr48",
  "key20": "25GdMSRkg4KfxNdp3QgsYJ9KKbFrAwb4596SacfTvqkMjhYSYXfE7BkVz3Xk1KMeEAeNrTf9Bv6H1UQ5eJQJR9pf",
  "key21": "2MpXKf4YyDBre3WsAfXWCPrJgJ1DhH5vVD9kX8ncJU9zZVeiema2ku8ryqrbxUnb9wjpWmBFbBWP2iJxP4EbWvot",
  "key22": "4Piw5GzZjVvQFNgYDGURH7sQZHxLAo9VLiqYQDNXPpmjPDV3YspDTtLXsU4qBJppeaqwmQbNn8ucznrHTSE956pn",
  "key23": "3j5bzJ8eyqvLaEdAXxqShNH4HD2U373v66XabRdVVSYFAzwRdhrzqRrBFqsRMe3Nf6pwPYhP6mpRZu6U2ixa9jNp",
  "key24": "2RmBgtjmL45SwNVGuC78abk1Zn1FiKTNp9sg73JMPVyboLqEoGEKUKDRVWdFG97pg7AwikbkyXUPCrFraNrazBbG",
  "key25": "65A7cY7gF17t4A9XNuenLfYUi3hKy7rSmtKKtbgmmjzAci7UeWAp4N2XNmNfr2Z5cvpukouCUDuzDH8hhovbtcuV",
  "key26": "nfNBD6oVpMHxbyMR79PRc8W7yZECJjFnw7HijQ2P4hqnnAHZfmUvR3s36pFpZM4dzNjX9peyrHPiSLajD5kAmrQ",
  "key27": "34dmbfViTwY3LaQP3MGVc47UpDyw9Shk2bTgXHTuZG5x3jjWQ2XLAGopTp9oQrLDn1excLRoeEJTcmCSGFPEPZJs",
  "key28": "5BVaKMu2BdFg8Na6pzJf1PVGmM84atT7Y2SBi1oSqFos3yA927SSsiod4GTbh8UtxQUYvsmRiQin6PmVPmPxERoL",
  "key29": "4k89JLohDj8hdKAXGxmY1ha7pfLYqJaaGrF3uy9sEMoZJwhVJrAh5WazMu3suQ5iPwKVfEDHNWteiiiRYp1D2uq4",
  "key30": "427DRvghe161ViweyRQ3P5rbsYU3XSnBE7iwB1TJu15VC1sWxU4sdzLL3kwmku1QU51DjyM1F28QNkyoGhZLTe6y"
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
