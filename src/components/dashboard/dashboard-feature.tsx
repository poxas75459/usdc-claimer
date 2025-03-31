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
    "KSHeWvLr6P8uxPfBKZqxFoRY4fMsnDSF9UvRLKWidYwA6HXX2YBvQW1yjzGbb4m2c4gn9JeCK2x3tEhetPXcrWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrYw4MPgjMjakznhSAWJ5qVz21DmJvX3nPTndkodExqZCVTSzEsnadW8UgQVCZUvAd6T7twrcNHJb9z8YhTvKbc",
  "key1": "2jWWfs54FXFBFi2iFuTytZed9uFwpTkafF4oMxzvaFQaakoknWnLyNMSak1E3FkiKd2ZJubpGLFRRFoUDHYPQaPK",
  "key2": "vg1CAihKYjq18SVF6RpuKXj1miVWbvY1aPDHuLL82NiKCEEid9RFKpq7KidvVMyKsF6YkGLGmUGTNsDoth7iLs4",
  "key3": "4faaKtSUyBPbUMP4z2Pg7s1n8GMac7w6y8r8Fnpk4ywezEYL2EQ3xAEFTbDmDg9jZ6GUsJuLSNemHrDecZ7TBAmi",
  "key4": "32cVEa1GBCNxX9mJRoE3TTd86J4fZfqy2sEtgfyhmdftkRirn6hQFPVJLVyUHwLCBEb7yz1xpHL2kdrJ3ey4E2EJ",
  "key5": "3pwEbDhGnJ1qjJpzrZjGQaBXeCmuAUiqUTzYhMZ5tNbhJPBhxEaVtNqFenxSw64RbrTgNgCKiCuEXwcp9LvB6HnW",
  "key6": "4LZLZkHstjiEir5AkvS7v9vd7sCJzrXjsXtgaegG6ZGnJG3BDyuaE4vFzhHaar8ytFJ34DDU4Mfx85naQby4qSMF",
  "key7": "2zryPepeuGg5168qDrCSb57f5qSn2gEDZiP9WB5zE8msfzzS3D4u8XWKPsMYKnJs14tXBd1dXpS3s1P48JhDFynw",
  "key8": "btHsUkdwV69AhXqr8x5LzcNsvzxp7xLowMFdwpnGmz3bFvjSxyLe6NjqspyNJLQpPCAt1xGkFDQXjruUJ8CQMJE",
  "key9": "4Mrc6drH4is8dbkouFxFEEMh1PvtG9Dhiw8Ai19H8dMKJAkZabNJXzVitstc7n4e8nzUkmyhusb9rwbzHyVxZW9E",
  "key10": "3My9y1mPshobcQbBarK8PaNdvZU1cMg4mJgsQbBgYTEDZbc313nDUq6Pp1oBvoYpWK9H4A6HKxqcUZN9Mh1zSvpm",
  "key11": "29sDk4sx3fsTnmWeD99hAvngpuM3z2qauTBzk3EMGtiqtjSByX19RR2pW3ZEwW8qortadTii2yHWQfX2jZ8sq2Z5",
  "key12": "YG82ERXrp5qhAonHiB6Vi3hY2AUhAPTgDhUXSh3ag1QPiVB7QUGERpFD5Nq39fvMPDWFsrRLAAWnE6AL65G8QcX",
  "key13": "5XVrRS1wy6b3sGVVj8GZCpsTP2Fyi9PX6G7kVDyATTkhHW68Cekw633kcTTJhxX4bhzx39KdaRryzHgVSdPZigWc",
  "key14": "3tKzLpcvyK9H2tHoqp3qY4xSK8kD9V6gzUFeojXd5h4cdQjqEQQbDAxMEoufHw4xgzce8DfkpVLUr6y7Kyf6aZu5",
  "key15": "254FZA3c37y2mE5mCCi6TGvV4HXK5aSLqfg24ma4bYp35fUqn1CjnfeEDSq83BfjXjMfs2bKAWwfXGzQL5JL3uiy",
  "key16": "5PWPwDjgk4qNrmdrBEFdeshnQrE1rvSBxRNRsPEZTni55z3mkJnVgNQJgWxLYaq9QP47SN4bu3gBBu1VSp6RtYR3",
  "key17": "26mTzm8apyJ1DJyq8J6CrH329Yk4As4oPyUWWqiqYuDHmiyNakgkvTtqM2RCNiYwtHmWLAiT2F9BLAGXd9qpvxRK",
  "key18": "3ZhmvfLtQgEHhxzXhZGjsWHQARCV1afkb66WF6vvpMKykkgJxsCXcqzD9ABANTEfq6D12XRaycWeR9q2334Kjy1",
  "key19": "w6B1E6xWwoZRQwmDwcTK3Hof6gwWPPGoapQpt87vhWeqF8RtPn3XKwA9kiQhwueaGSLZVTarCxZspMQog1U1Gv4",
  "key20": "4kno9UXwgtZ4oJSKc9RBfEQVgmjaZxx9srqU4NuFPuhYTPZVjovpP4Rkf5WVS7dFWgNnsXaTJVAYcMgGRBPiZnCV",
  "key21": "28J9HUVUZwpdV5trWFJSV8jkPWj3Mc4p6cPLfMYmMMe5NAJqfaTtpfsX5ve1tsr71y9JTSLPnYYBgDtLWPfQRWNo",
  "key22": "4oRyvKnCZeb9xyXaiEHApHHnRiB5NDGN8SGGZ8TN1dh54qYKRbMaeSrUPQdHFdM6Qm32V3YaeiL7kkYVRBY3zXh9",
  "key23": "5jKTki8q9kP2enKKy7Z8UabR3jHcAAb3UjotonuM9T8KAaZUSSb5CUhUqJoCAp8i4VzQuBo3GAxL92xssBFm26Uv",
  "key24": "tBrzseNy4wrNSP9F2hHKCnFpZuUMYF5hsyf1LwdMUCAEaeVgRkfueTeW4fuxZ1yzuGePgDCf7NKaUVT4S6vSMd8",
  "key25": "47yn7MzGQMus6iCkrJxmg4J52LYoVme5SRdivNui1cHk9ZTh5Wtef3nnPML7uKPsNDjQLpSP7pf6WSP2A4PFvW48",
  "key26": "2sjzqxPRMvH2zXJavyaU4hepTA3pQmeENxncvWwnVnsB3ZctZQgH48wctmNQ7pr9qWwpdZTMMbQVbLanBruYrBgt",
  "key27": "2Ma9xpVvM65J9jU7btV8yEpNgcU3TExc2ePpngeBYaKbFQo1BoEsfmEYfBAKbSckoy7jvDGWega6om8HoSjWSJpB",
  "key28": "2xNs8bdMxDvBrL76BJKCrxNyVMNG1ZPQq1je2Wu95xFXzgetaQVySWRCmQqmDDmjrhCs1mTY43nk8jZ4LQSdcXAF"
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
