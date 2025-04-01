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
    "369ewdAiRcNJMPbj2PYVNBajZgx5pJMNNgepC49BnJMMRf1sxFWdYaMPXJfgqub6zHwxTHQpW4PZGvCHs1eeRUkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVrM5WWZ2BS9Syg9Rne2G5n7NVfV9TpaZheKYGUCUZsEf9wzv81p8KFnua5Z83jE4VjFUpFP7Rqnkp8aHqYSBkX",
  "key1": "5AjDBpvxd3VFei9ezd19tQTphiRusKCtPxJuYXuz2jKFDLfZjzoMnChaHkEfD7yRSZCM2nzKa4zZ5k8tANANcGHm",
  "key2": "4eMckJXPEQcUG1EBkpw9U3NqSVfQbhcTfa8w5zFZV62UqU8ThUpe2woPWCWSpmsdNCxQkUkkRqYSBUbzVbgZUDxA",
  "key3": "o1NYtAvcHLjU1nH1cB8pnfaZ6z3aS7kxmXCxvxLQjdB7UNFiTExc5Rb929ihnPBvrtzptoVXyEiek5LRwXUoLmw",
  "key4": "mTL8aV8FqHN2DokBJpdCGBVBR3dzNZyZEJFyyzCskNDjSTTztdUcxBLvK45MGDg5yQtPg56iD9gTtobA3ZK4WAn",
  "key5": "xXArCfyu7YyKNKfmVTyhj4RF1WsUNQR6LxLvCGZwLp7cRs5fcFhrxqM71ZDyNzFh6FN3dU9emwHLBdVLugzkpsz",
  "key6": "3MhBHu4Cydv6XQScUZ4a7ChYZteftDazKNPYKTgyy4AgmojjNToySNpoWZHS6mGUWiFrFzftFqQXgDdVmPupieRQ",
  "key7": "Zq8F1eE8GgJvUZ3dXmgBVGDFGo51UaGFxwih3vCvNiES3Y9X6PCr8tAE2EpG6p91YqokJ1P8LPg8XqGuqYRrbQW",
  "key8": "5xrzkh8WmCCfo3Ly1xzp9FNACz9bhkj1nP2aKt4KthVppm4sT8sCn5mLGMvioqNT1m5ncMzVizaXPNxGHUX8Ephm",
  "key9": "3kKpDZsQCRfWtJBh8pPKpkNb9kYDwhTQhJ8vB7PUgUvzCPJZmarzucLoMAbvgHNmB8jufKfvUsLfPf2HoAXmtN2W",
  "key10": "2F113dLDX7tTXqozb3ZAdNt4nmvGBSnScdk7SBXHwUtAt9DgduTJe9JuidinXBVhmeBVhTZxqwVFdQGvCVKgC9ja",
  "key11": "17MTBU6LpwTQVZdJLKv2FLum2CChWnzSFHZdQKHCRDzTiV7iFh61UqRn8u9RaogPb5uiHF5FYDBLvP8191sj2BG",
  "key12": "24ZhKSPHybxmmSKer8wTTi2isxv1VycHUfm622EUBUTUBBkFkDZK98sUuntpP1LS5BQM6jfLJQXBxbGN6Shd2UNg",
  "key13": "5WvvyiSCqTiaxAVg1kMxgxoTj6emEry5A8ftxoWpY6kjtnfsaH92Dw2kwjGF8ALv6BtnYNxiYiXN7WwwwVx1n6x",
  "key14": "2otm7hUBeaDWXhC5A86PMFLAfKkiUiTzEXEucX84hmXUWEtC6VdYXpG71vTy1G3Pp3Kt9LrGNaLsafWiALHZe9zL",
  "key15": "5Nf5j1AfYhdfoUNjzv2EfDiPFdGBg1nGvp9h1CvYRYeucS5SuXvDAsYDXFU7deB2bK6Yq8hSo8iYGzF1n8WfCE1z",
  "key16": "64SP2u6ZKr9MmS7nMGG4E5xCmwbZFwcMSoGc1qypcSArXSaSYPmc1EaoHePWz3jyVFkX786zd2s3H72pCMHeub8E",
  "key17": "5AZCwDRGrN8MZc8f4f6Tz7sgEYoTduSKdwV3yTwPeZJfgM2Q9V8mR1mpd2ZZmNrRqP65g4JEVW8ZESjZPKiSnQ9r",
  "key18": "5czNo8PgVypLTJke8rzN4qyExafU1RoCZnx9v433fNwtQmtvNffykVqpA5arSN7EbtzdDiL4zyiniXx4Y6xt2fJB",
  "key19": "3nHNiPq1gnZv9FgzJDDm2fef6huCfFwFkkMWotX2crpRuhm6UQLcVrWYD3aWxjD7B3DyEmcHwLgWenNWFLXLHZHx",
  "key20": "26gjnYavB7YYNTFT7jY7idHHhG4mSnsRBZDpEmv82Tas3uYeitNXn6ndHbZGpX9cF9jXiETvKi7GRTn3LwBn1BYw",
  "key21": "4i465ddTgqb6sAkV2g4nGbiENfZDBgw3EsRhB9rRsAS3DBiSmTr4wM3g5vtrFKBYS9MFucuw6PgxMx8nMuFTyLeZ",
  "key22": "4DjfADqXYaRaw7KPU4dcsNciSYmp7Mp4xgT42xHuAfZ8UbUbzfU28khCAHunDoS3Rh9sLkWujv9cH6CmQ75m9if8",
  "key23": "3efVQ1VKVAEmWiLqAi5DzdxdHeTgdTPoHcFbbYgaxHSuSvYiahxLTVgQbJBQQpf9jwa6jb6cVh5moY9YVi3p4kTG",
  "key24": "4DeJoRit8ZBfkR3ypDfaNeaLEi6uvLbfr9HEZHa46ZVEGbCwhbcXC7dsnToXZJkc3wiu3hnVGMTB9CcvbVyzdUJv",
  "key25": "3QyNX6f1VKay5oKeeDHNEVntDCMNJ6PkW5CYD39Yp5qbVhQm3Q3mSToSuXpUM4sRYPQaeiKUMtf8NJd3UbsCuZid",
  "key26": "2REyWrLSakgsM8GBXdSL7nmEstd7eXnCAdRKC9QP29inaKtExxvobCqqESvRmdkJFFQVE7FYAzxeyjFViUC5FWM3",
  "key27": "2ej3R3kmAp2n872nqgfBJ336Uc8seZ6DghXKyeJva8hCeSskWeYgyj11iwcsvWizbqPgv8xeR6xZy2bybmtCTXe7",
  "key28": "4XMBAuqTknddZvjoSKqrwVNFqYNjyETKGvpeJACk4CJDxKKtjFdwMBeLF2gQupPTFFQVeGo9brnqiXkEwtB8ofdz",
  "key29": "2epJAhuYfZRRNdyXj2gKzkDyVrRV8Ti3pTJWpVRyPNN9KKCbNWBmdmYqQ9ZKG34QPQEKbmpPfhjWWpTNVGSWEVWg"
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
