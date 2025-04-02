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
    "47CZzz7SRiYJyjTSsaKDXZ3PpLfpLWPEn34aMQ188yk7BTUx2UYWWUigQ8G8qs3AcoZ7a91ddEL6DY1hmNiMMCZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JXoL6QLUp4Hbk3WMLjawdB8e8ZGw5kXWkv1U46zA294DNsQZUYw1y6TWazcfasg2dU8PrTUX5USYATJ3tQjK87",
  "key1": "2EaQJWPddegv6dnnhteYgHYbWaHdogcwQR2T91icwF9axGJzeAZ2sxEaYEsuLN56zR6SLsVKaU3z5PeuptdNj69r",
  "key2": "3AQDxGFHUW7oABazsnZbfzEgwozA2zJjX1usnyCMQfFC3UYrzj4G9HJcwa8FZcmbewah3ZcFx1d2ZKkgAXfqQPhF",
  "key3": "3ZJzHjMfToPynJmRXKLNUsF2QtQJVhYPcM9f2ydCXpehRVXxCfxzLv4dBQK9t5NyLXb3AbHxHrRepzAruvhD8uXa",
  "key4": "28wa7qLYiQxNmmKvJAGxH3cs1ktrhGqUJBH9yEuyeYeNoe6CZaAexGcEgrJuWrKcnLeUYBvMGBa6zvR3PHxExGBe",
  "key5": "QSm8TeuU7hr9A1teGRFK8rmiwt9xZEVUt2Xofyyr9oLisepwiTPs8TkAnavDHSeVNP5fuhrunqtz9mHqCkUqjfD",
  "key6": "55RmUAPCx1CCByDAk7bBg72bcKaXMXLaijL8RF5c18Q3pD6NTK77RTUJJo6kCiNvBuimdyH4BrFhs5owz4ed19oh",
  "key7": "3QSnESTa7EZt2c454BSzbK5Nbr6TWs6xnMKSP9eYY4aMwqQUmH369MC4MeosPhv7TuV5tZV71E69kNew2SUs6c8i",
  "key8": "cofc1TjGA84Yht5caC4tXJg8t7mnwyx45uTckDKav532xH69YrWiXEaBeY6X2Rzz2TWW19oDskQvq42wi2HnbAu",
  "key9": "1dnk8UomUFZ83ngMBcN5521GyeUHmz6UoZhtdESU6q1VFFdtu7zywb64HLzzKujvwWJ1NuS9sTcjHAKb1YhYSmQ",
  "key10": "3cNHUFeFDzVfwo4WjzVqADxqam7NAdiMQCq5yvfxkPZMzZU8btYSkybMpeGuTKEc2kkDQJM8QHZeVVgE8rFR4UqS",
  "key11": "4ivkE238Ze4a9xDRkHPacnALHeFf7GYDTuFKLXfC8tUuv8Rw4SQTYXLoB2DvFqNmqFJXBUXMJzhjx2t7diLMEp7o",
  "key12": "4HT8M35a8TyScDxzh5eoFT9Di14CrD3D19wBotninP9T6CM23K7uVX8r2Hd9Tv14t7iqzCTvwVfVieUND9Vyzhx3",
  "key13": "2sTnVe2gUHvKoqNP7xKmvuN5gmBMi4FXh5sdAPRmrEhQBuuAbVUTgs21MMMSqf3Ybqr24QSwpD6cS95LDXAbbZy8",
  "key14": "2XRd81SZg5xEp184s2hY1e1PvkKsD46xipqwJsSPrFFJTRCUG4tv4qQR6RymoiyTKsrXeSGPdS7Lnwc3s858nQ5V",
  "key15": "5bE4o5hsNvrtZ6GV1vWFdseAb7ZFVGpaqFX95qaVEQp1qQNefUtwfoT2oHxXkqzovhuEarQ5xxvzdMnhX99NZKR7",
  "key16": "5MATE4ZvoaAGNeFq8R6w8E5zaZR8hjvG2HQ9LaJSpzmj4hBnVZzPrKB1EcWnvs2KZik6AxY9gR81BtsRq9k1DYke",
  "key17": "43hz7XheptgkvmDH8m27QroQxnPQfGR7hLbzcYxb6hhuEg335Yyf2j4XFtY36V2Wd6baPfYppgTV9S6JtyPJU1Fy",
  "key18": "3oUaBht6R6T67KmQr5Pi39QPR4gDRhj72MQhQt9oodhXDHx7qXS36KC6k6TBqSyvXhBAnkRMsNWs4WoAbrjPyawG",
  "key19": "2AoNDon2V7YVtrL7uXiMof2wKdrwcLtDwJ9oDrfpeg13CehVL59s5PshrjYBCnnJRWfQxnYeNDb3emJzuAVZSitg",
  "key20": "fm1MdsS112MTeSAQBiMwkYsYbWXMZzJjQtvhiPwhaxy9i746caNoM5wbrKgstWq2y7dwa3QSZuFXm51RBD2armr",
  "key21": "5M6rZGEQkEgnRQLcDBx5RynxtUsZJmzS2z3CwbL2aHSxJ3833tFt7saz3isV9mRy4uMJ42LjFmePdNDuZbBBRuo9",
  "key22": "Xut39oRe8jEtgCBqvs86sRKVZD4iEiwG61wu9tvWrkbVsdEws9z6cqH3RaQdBXXqKxZWdPiNy4DFTk4MumneXKk",
  "key23": "21HdhWJ1GSa8auf9htyspqbwTChkGA7SZWBXsxGfM46snXkX2s2oQXb9aQTH5JSrpV3r7489z4GyWEoefJtPiWYJ",
  "key24": "5fpDNE2np2tmz5V2Z8m48NvgxbYsWczd1CkWtX6Ct4FsUxKXvBvPPsN4gXtTC3jf2VisbNNn7mZfTBfEDwvQoqKx",
  "key25": "2z5vQQigwRi78KzChUwYZR46z4RtvjbqoMCMb6eTzqa3sCFu2pCDe1owhET8hubr9RYGH3NicJsVPTpdBmo6FmeK",
  "key26": "5CnxTENmtkDUnKktsP3ij9MAkCLhehp5Pj4wh94cbGvKVFDWzgbwPX41feM56b9UDqyeCMBVB3gkj1tEG4yJQ8H2",
  "key27": "3B8N77F5JbR4QoRJRw95cEUnf9VCGU2NU2HfHQq9ZSy4ZTFVF1mmwSgfUpJ5jcASGLrX4DcwTgSno3TL7f5Q8gWd",
  "key28": "5rXHY8R4onYhNBNdy9Ei7NM4t9r3rmA39mcL95nsVQEmSVUCvHM8ufiC6MxBFZt6KMUFtAX5YeedKZV418VSQbbN",
  "key29": "6ozUqbr1mwHwYuSbzEsH3Fbm7kF9qKq75C23G91HhDD8hH2ZWNKnXuTR3zPxFEkWNpzkY1SwEsfamsRRxBa55sG",
  "key30": "5XdhGrxKyYoQqgWv6Y2f61ucxqkRFNuGjf7inCZ9BnXjuUiHzvUsAniYgK7ustrzCp7AWTVfyLg98vtR4esspzgW",
  "key31": "2vNXMY7zXN1EusLXSrjJDLDV3tdu9Xn4eMJArfoeY2NucV8vaQAWCHxGM9pWwVzRtXe9j8qCxgQxokMbofAhAArG",
  "key32": "4LEUfSbyWTVtaXoCDjyY1UK4aAzx45zQg5evg7cTg1GN7jJMNu4AmPDpRftq8rDxap65zC9N6W6wYgFDoMuZBawH"
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
