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
    "5sCYyPddpf6QP73eXsYct9fkR9rWBz26NAEJWCktMtt3nELMbWWBLhvjESX6UhqrhiPKquQ6oYyUUUaf1h1kQk5Z"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4RUadVsrmmJ2i1brU9EsL8mitS3kRBtdKxxjnmKp5d51hxhLvMxNPVcuzsnTCTQyapHPEEPoFbemuQqrLFK5intG",
  "decoyKey1": "42ukEuqbgX3xzpKUxEJYUXqkRtmGP5jA2VbTHAsxGLvdALSA5ygDGnB5tp5c3dKRPSaG9DkPdLcSRknqjTHnmRyA",
  "decoyKey2": "3p9Ww618Yp9a9jSUQA79BjdqaJSTiNUo7qUT27vKgQycBWuxXkDGmjNDxLG1r8dxX3HiVKPr332v51hDCGt7s2Xc",
  "decoyKey3": "3KskTkEKf2Y2uw53iQWephzTodWHTKAdSzG5xKpb3RKjndfkuaAU56LCtzVY6n6WzT9vWwCxNnjgw7KFbB53cd9J",
  "decoyKey4": "2m6jDPZoozn3dZyQisWaVtwPBUAH57oj16fgvaUA2AtoVtn1xK8N99Riyd2bfynYHoDTXd65zJcW5SX2U3vcKN78",
  "decoyKey5": "5PQeyUwxrAc6hRKkGcsqTHRGS8PQKomSZMC6pAp9heQoqE199RHjLyvPM1cJubpizMn2WovwNMTDjFu4MZUktjfb",
  "decoyKey6": "5yDgn8aS1aN4gXRaopLuEeGtLfyDKwDvEudVtT2r4SKaiU3jCzDW7B8Co4Pdb6hsJPnNHyKCao5QKPxjbJLgN7Ks",
  "decoyKey7": "3LCNkvPEKoBKXHr518xNgYJWo1Pp4VYXfQf833uexP3noxcNV8h9wLDxyEwMTP8YjX4vUXm5yQPtC7WzbtVacuSF",
  "decoyKey8": "5rAmzDCWQK4VqXKDgsze4MV9iga5LnU8M392DKibZumAJfUnjF5nFdJZxTomNWEhobASoih4gH6V9NkiUcj3yQqQ",
  "decoyKey9": "3JuQdzaRuMzvcY1iJrk21wBB14nb6NKAGQwGfDwNNw2SMcubFRitytkTDWkDyecKpdEQsNXoKRZo59EKz6W2zGV3",
  "decoyKey10": "6LMDKFg5h5fYF2uP3D5fnEkFaCQk51NQkvi2XUBxvbnfXiWMcnqxay1MMLKxdBmHxQCWebFispxkT1NgBenYfpr",
  "decoyKey11": "4mpfy6Y8zXCiEzGSSXSJ5j9XdfeGdwzqdHqL9CWg61bABa6bq5HUQWK91CXbtjzcihYcniwbMoedNKjGz8qBkzWN",
  "decoyKey12": "2djxztNgtVwpe3T3pGd6vCeqZPYK4W8ZFep9khq6pyfaLgUp5SAwnGf2D1wQakfu81483XDe1vX5sJcYVDgZU4kC",
  "decoyKey13": "3J59moPDq9L74jvcrAKSZe2oaDJWoCuDXpdWX5fDQr9Pa3CXrQbdPpbbsy8HFdbdwafzthXo1QMoUhGqtBxPvn3v",
  "decoyKey14": "5FG1rCxSqYRGfrDzkEp4YMGoJeFXB1wBg6fmeZQyHYLM7kRyCVpMcxF411dv8Cjj8VfdwP3N7FLcQ6AfhmapqZ88",
  "decoyKey15": "3zJXDXkw5ndoi7Uj91V6BqgRboddwFYkjy27Hsc7ghcFtesjwGAuyMi3Mny22i32Spzo8bkZMqjLYMQDDuWoa7NU",
  "decoyKey16": "4BRg42mhKG5iFgdBhxHUzDk1UW9RohpTqt28kC2mEeaptLcQCgMU4gzn9rmN4TWZvwx4Yc67PmXwKkbS3PvBihBs",
  "decoyKey17": "2v8jkhkybS2xNBGG5w8RSQXaT28JkXb5LHySkVnYt3yNMdbMVYyV9rHD7qT4JvrLGhYEuLM85DXCLBMjeGjosxFB",
  "decoyKey18": "ALgUaJ2CBVDaWuJHg1ei2MdL2qiTD6UqiMv8AjfVbknsW7rKrpCrDrYQRTiSk3JmhJrMYAdwN5kVtpHXzi4knu9",
  "decoyKey19": "5FpNg3mbMbVJ3fETqM8PGzVSuUx4G5erbUxbhjvxB27pzEQDNzSXX6nDw3xRpLLX2BXupQeZpEWnLwq8tp5vQWXm",
  "decoyKey20": "fXfrDg8amBTEwRQw8sXaz5Dk1ZWBeQdz8yc5D2AVP2yFprrPYLevt3wF3WHjbonoFx3GdD1uGLfh5MSnbFm4WHG",
  "decoyKey21": "3LGDEKJ2GUxKoz6Xm4bBvbkFLhmw2w2Esgc9Zyj4ianHDQbtvdhbQ8x6ux21TWzyEUGnu4o5J27JKeJhH8xkcVWB",
  "decoyKey22": "4E4mi58XBu1xHgPdU2yP4GWjothUiLzBsf3DEnyak8oRJXn1opR7H4DBYAp9tLHEJ16AJcmEexDevYaGmAq3Dg9B",
  "decoyKey23": "4RbF6m8qBUEnJqSp7Ue6rvJmT6x4ynjPWtovRJCXyz665Y7VJpTRZ72dVidw3Ddnh7yBc1PsVCbrTxfb32fgVVqS",
  "decoyKey24": "5HrVejfHA56BH7Vfmzomshta3ap8W1Mr2mWZVEzXayAcc9o4MtWFxm4jkxbCTFdBzTwix5ChaZd8ZV3NP29p9awd",
  "decoyKey25": "U9ARJJAcZ2aJUAEJqi8XadHGeigRt5jFi6ovJQ8p39aNtjPsMM9AibFFuFm6a8xne9FVHMJid5d7KQWuacDbUUk",
  "decoyKey26": "3yjDex1D5KcxWLH2WhwNZb6E3N9FEXnyUJuLYTBxL5xYLSXVgBMN5zpjz24xCNvZ8r6LhaVdw6Wm9kL66eqH4J8Y"
};
// DECOY_KEYS_END
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