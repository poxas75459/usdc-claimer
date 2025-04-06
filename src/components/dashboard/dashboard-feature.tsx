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
    "3FyQTPTf4LUEKpHi3yD3JmoFTCwYV342kVccaP6kgE5R6Pp2KAT8cwKGbPt5XJwsHMkNyxC6fsn4gbWq6wDFUtef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqvLJzeFBSWpVXpgt4DDyQQJ8XrT4UMjRrdWMTbvqszbNAqLtsXsaX6gg7SFgJ4mfb7FPxXsd4jmw7841VFbS5a",
  "key1": "64nt2XwnH6iY1RUXqpx9B2gqcHjXjnmfXeGMXoArxTjsYFTE4CRXMcSSD8w4NgCXcjXVWJJdS6RV2Dj4sWdo9qwi",
  "key2": "2tmuXpoSAaB1UFHJAty5fGYvwTkB4Bua6xbSjyCgQjZ1mjkjCtq4aKh3fwhxc1rijsnYZMt4oyCkNLTiCx7KWsaZ",
  "key3": "emLRh5Cz8fFo5PHEc8NNmNw5ttndvFhYeMaWJxGKF8HNrQQVZRLN3biAmvHZGUvsR1GVaAurnHF87ukN3fSza2b",
  "key4": "38fom4X82kkzUupoR8nboevApwr5m2uBJPYiDvDh77wYK35RnA2uLTiggQasjL9WBivq6fSXFnurBxt49CR1sDQS",
  "key5": "52sqLnBJY1oukRiQZUsGtSLD6g4yo8egvWrSBVZjgVPn7ki97dqYxdfVHtHyZ3YQ4tnPz9vF3pgc8aJrFWow7VbD",
  "key6": "3w2fPuAqxxyst81gDD2jWDCTqskGBXYmkyzxDUshUjM26QEYzUN9wgjgCKhjW3RSLPpE1oANH3TNYqrS4Uusj7Qf",
  "key7": "5zVNBYANaq8Vj5U3ZXoXZ2LW7bj5XfkBxCKKcWu1STM2DK4uR6JwPPXV1Dn7CBXmhweE19DMioHgQDeuH6Uw5FGn",
  "key8": "4MHJVBbSkQkCvnNk4pmFCXoRAav9nwdKR6VEgyQhcroC4SYcpzsUTxCibWra4Y75kEZ2VK48uSb81VqwWyyeBDgC",
  "key9": "3FDxrJ8KMqhxdJGNAD4V5Ts5RKmyRGAznL831qA9Xo8PCKiUmFa7SDzjAXquh86EP7Ap31L7RA8fyDKyVGZz8GBb",
  "key10": "uppdpc4PcL8fHm7XBo3pkzu7PshSLJ1HerfibkRmVJ4YEPGtfSJfcsYcQqgLhVnNkmh5Z3inSH6wNp1YfmYaE4s",
  "key11": "4iGaZ7mt58473WVdXeRy6QJB8dA4NkxyHqWv9Ar5XNanyGhSTDGvmj67aSFxghdVteW92wUqzTAwjHtvfpGYX874",
  "key12": "3Qx1LJt2PxiddTKZNfYDog3HMgYbKmfELvCqBrE3JsDqvxqN8yEPE5ADnqSaShJiQ9yuVcVZaYE2F3JgmHCJTGcg",
  "key13": "43iwRe3z2CraAR9nfDZfXUKFvP21fMvUC8dyoKQEmwt23GAHKfjq6ZSvtnq75RJJRd679HVGXAWTfVVHBaGmDLUH",
  "key14": "4m4d2uY9aAm4kfvEk9Up2saVjHrp9GV6HaqSGEJBM9cnXtSQfsr2P4nX8Sze4qBdL9VJGqokREKppRANejuZtfXP",
  "key15": "3CofQFBGwt7zeLnh7gnCvggcxyUrn6vZrC9KyHWKh9yA5kmkVS3chtkBMuoqAPBhHSBtBptnbf7RLKG8C9tZ7BG4",
  "key16": "29qgAe6c7omDE6EHeQEs1WsNhqUizE6EufdGHrDyr8XccAj2ws7uagsA64441Tmxzt3RQSTBTLoH7eTJBQan4agb",
  "key17": "2c4enEyjRjts89PQkQdD9WiCxqELVGPSpaUhJ5zKN3kx4sPvZHkdQkz21N5cM7FhP7hoy6s7SjVFzREBxjgAXZdK",
  "key18": "tgUxruvNVDKzNxpxb1KCigYqxpoiCwN99yGYSmC68NsPnxkkTKAokAwxjYvphHd3ACyCSTS7gWGSahFjLc8KfDV",
  "key19": "51FmZckDQv7tecn95GnXgBToyiUC4A5Tmz2KGKChBdjEY3DPNhTubg5221NTknUVF7CXghMqCiKJyNKGh595zGqJ",
  "key20": "5eE17FN8ssGwMM54YiDv7RWp3axg13aT3mgRWcPHevDKzJvJd4YniLi7BvomyQ7kWMirFhadTWj7KRGSGkCep9G6",
  "key21": "3zYjQGLcxcqMN4Nck5VvuHsjYPCVNUK6jKhjKxWacNmWxgemogfEoEGCR9TdD9D2UKhBbZV35L6rqCuq7ga5FBay",
  "key22": "2eaeQ7cr1ze19CDy9gpGdJotWQdD4k8645GwjHesqzvqrfEcg2WNiQX5TqTYBt74ojdB7Xcv8GRHXY4GJ5qBgeMR",
  "key23": "2iBG9CiA153vaZTzU3NyFx8xq4rLg5h8byGKEf4Vw5KYBxJp2Ks5JiMTX85rj5tyKDRqoJaoTB61f61ewu9dxVom",
  "key24": "49u9HVxo1Y7vCcHwY8P5impryPQSMgMD5cBAcLL24XuEUbWgRqnM6rzC2pGe1KdV2swQezg37Ruz7KyDd8CJZdSK",
  "key25": "sYuGimkW3rZdZgwG2Dcjc7yrJn5dyTBcB3MWbGJywgpB1qoQ5suJKsSXp77B9D8wmYCiZJtjKw73wvY7e56waMw",
  "key26": "915ogKCaaHrddQ5A1kpk9VmPeP9f4dPiBhBPc4jTocUm5NdgMLqKx3YZcRZCepU1wt4QLCt2PQSwAEyuxRZHXoC",
  "key27": "2PYw8t4aQsx5jQviLg53HSuGfuQKXLsDNAer8iEK4Ar519h5echV7ZcuH75s178kJZd1urBjz7Lk2J5XbTVH1MFu",
  "key28": "LkdPMbX7pQpWcMxyKsQaTKEtPF2dQqqX2BihBF71kJwMVBrs2EjtMA5oBa3CHPN7yXgetqkPbVRDs2Fft6XysEf",
  "key29": "51U2QzrqPCyPn75DCX5pbEn1CezKUZshQTrHrFYeFiJFxBunTHsAQcE34aJFWW91j8wwQivitHM4UtsvK88zDzvZ",
  "key30": "2vHn6LVTTnCDWxJRpi61gv83h9gS6oXvcGcYPAYWPkQ2GS9p4ZpPx526Ujeviu2cVZ2L3NWCVgfhVxmGFCGNLZ7w",
  "key31": "3pc3KKtiZC1ULVPD4NeMuYXXQj7RrNxFv2C859X19DG7gDLUxn22urUqyJ6mARECLWub7GG8NxSXQN8vfnsx7pT8",
  "key32": "2Lq15Vb7uWHqdbxdrXwEVCXfLSNq8XjVwxik38Aphiz8H4sbcY5i4BPfzdqjisan6yi4yA4XyHCSnXGgE5z8BmLK",
  "key33": "5zn8JRCDhqCZU4mcgYKN554QjfmyPqp2j6tfeHJsyWfGpV98HyuvrXVoQtxCprzbgKb5A5nEP1HtsD6ZpTWBYtNT",
  "key34": "45DP7ufsRJsgySQVoTqNLDYBDY2De1waBLxRCmx86nUXXBLj31X61cF91aastVMtK3WGC8jJQ3184QQrnBPAZahS"
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
