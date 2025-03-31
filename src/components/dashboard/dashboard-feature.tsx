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
    "2JLwXc8A82yaQXLCnLZnh5FmSBMJFd3ojmusqwTnjytyUan2Lcb4kXfmreCZVpabEgLyDvF6beFWBSaiBMMZmPKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TqdySqKo6fFznUVP86pHiMZbwb8a4fVqPbCWRGkWsm133BEaAze33A5Wv2H6UZL5VsPx4QkbZRKWrFR75PEPza",
  "key1": "SsMEuzQ4kvS8h46GaATWebRCCszccvgfCkavm98deoKj5Fsq1bWKiVA53rEcwyKwFaqCe5JdQ5UHsF3R3yotedv",
  "key2": "35odVmVxsjvzW77wty6HiNFSNLK2zmQXc3NBc9GQRWBbLWrq8P9sTVN9dNd25h8C9BtNhzudykjQgejmcvYMFMNx",
  "key3": "psBdPA1N6qw47kBXhL7Zg7VdYUxH326tzJvFsVzK8R7xC9qsjkKMdAg7TWtKpocjzUsvQ5kHUzoJDwjWPDyAQ2A",
  "key4": "4hE43fLRKEspGThFpiXPGLFwDn2MiXbyfNz9i976QGquDPXnUnL3jYsbw9vZN8UiyNbZupHGr3gdf6RoQN8FReQN",
  "key5": "4h2EFFZnTNfjdJVpMk86THhaDMZrEMgrtqEXCdix7zsM3qjF2HY7g8wGiJQ7PZJLxXVuGgr9PeSeVGK8LpQKdikd",
  "key6": "3waNSYNxq5Ef7ppqfckiKTrDDCq6Qr96evumV92jD7MZf44gDCwCTmk6XZPhDD6KsRS9Z32KKZSXStofgkvwjpse",
  "key7": "5VHJUsJQekaPLKiSQZobGTzhC1dAyLhQ5BaWVBPvNDfYnR8ARgfXtDzaudgffUTjAwbxzhSmqTKZoBr9TrpKBce5",
  "key8": "2AG7xG5SfN1yyVTJKAz5seZXBx6MhNYZYqy8DV9kmKRFXan4Ad8KJzKrttgaqNSDxmXXzmnLpVN8eLqmUft8rGKU",
  "key9": "2fdVbeZsauZXzj6pJdatm7NXbTDH1x57iVzuLgWPG1UHn9ndASUEfXr3JjBL5h3memSC2mLyXivaED7orKJ2RMxB",
  "key10": "6zW8NTJgrNha9DFLQDBwJrHrKrBajeGTQSyVEAgJY3MZW9AgX2Yu11rdwnuxyYidjW6hpJjJxBdvjQbxdqdFJnN",
  "key11": "5JxUzsWRFkxusz6cByb9FeHYoaFm8ibbj1H26a56TbwK9KU9F3dq7dcn3HZmBAfYGqT38jpNi7MGTYsjnuHvQ2gX",
  "key12": "5AEb7Boz1FjvxkLWrkchtCxAfvNDYeYQh8ubNbva8FTRppkb16yvkTQtaQGsb4uYgndfqx2YgvXyNrMsZ3ZfUv4g",
  "key13": "2KxzQ777tR4s36gRH3xT3Tf6DDsbFHVykr391gEBNfnLLxXdue1p4QURRBeBQVwDRXGqiEzgyzMHMw6usmaPQMyA",
  "key14": "4SfnsUxpyUmLRj6Q53DekAknJPL6Nc4V5mMhgcsqZ4XtVQNeFufDGq99TwhJTHBGH3Wq8wk5NhH5oUWCqmEG3aQP",
  "key15": "3HhPFx8ASJugid98audrickEyrMWnJe8pxtvwUQn8DEEFKnHU2b62MoMYQqkFzbUNGhVzkQUYcbhk1B8bP4Q6qK1",
  "key16": "3eViPU8eFhAfstf7h29WSeDR6kkhs1hm699K7HtASJudpPLR5ttV2tnDhbYJU6vCQ5Wq8ShJukfEq9VS4dcNURD",
  "key17": "XkuqwfW9q9sQKwoVztd3rRkNxYHaiDhnNYvGgcyAKkeaHqnc6pMc7G3XwSNT13PAjsQTgkH2kbTDaJQSq4qVrZ6",
  "key18": "2Cn3X8Bzqu57CxLz1BbcXN8G2jpRqHyiyKXJYdep7a3piWLgcbqbitN9UTkHvAmdKpRktE5g6tbUQjj8G7rwELTd",
  "key19": "3JZz14rR9JLp3bFocRzgtdPhs2ziVUKxEBtMkLnHkT4Eaed29Vz51dTdRGQ4mtnVjJiNXVA76dgGznTREu6rfQEC",
  "key20": "2PqJ2vKySxFACgSGxDap7WFYRAWgVaNa6zzwDQtFvanEEmrxJ1K1kqJwtHb7zB6brZbZWaJANy4vbTgxHW2noN87",
  "key21": "2DFLWGPS2QpKyeqfrLZFrxw4P43UShL8RmnyUyANsM2fcSS23EkEJCUnFwTwHghz5iTg5FYXgj3GjyLBoM1GHk6G",
  "key22": "hXzhbxy1eHW2VUY91azSNG8tevf5BrxRxrE81QsvtW2SQeHJ4CqfGX3bNTq2qE6BXuyBHpkZeWFDrrp5CyuBdNc",
  "key23": "3ZAmshQ1RVX8WjL931iXqGfDpWqKbrLgKYu89bDDja37dXp5UsM3ixAhFqbFUrG1i1jNnZbPmBZ11kj171SPzHbW",
  "key24": "2Qb4a4Z1mRweiudJEMrsCvrkbhTztw8dMDWbkR5RFzz4oxFfxmXveiHAQQipNr1izfFcsaZR4hJtpgYacLCRBcVp",
  "key25": "2J5vHozGsp3auGXtF2Sjd7UCJDZoQ4HjGKw33L38gpQnHbEa34aJ4A8Fshem6ii6ZCqc1RWqMJE3zvzamzRfj22m",
  "key26": "2Rp6vnYnpX7aSGm1DUSoYXRir6S1hR2zDRTxw49g6DqfzGytBh41ZxPt54sTZTj5fnvejcjvJtoC5NsfJiRUGaND",
  "key27": "2B1ajSADokYg2oEkqscEzwUY2aiwJTyu2VptaS92kC6dcDodqte6GkCGnN4hjBPLyZ9muQujtpnwZAW5eyRMvWNK",
  "key28": "34WsJ7hUfnyYxHqbZAYBqUUVSJDDDYgNZyigLi6UARSrck9k9pFTB3xJEGtn3Pid8PetKRhsW9hBvKxASjku8TgH",
  "key29": "4GDe8KNwNnae9CuUETBRqow5gLZkkohpNMqUfSgzY7WtCZb18zc1E82YmUSaoWi22ZiUhgpgdJj5sNVCYWUhQU6Y",
  "key30": "2P13cGJKTei3d2nXKyca8noxxwg9Z1c6ZvdKyunNW2wuJ5R99gzR8EDSWu5u711B1QB2jFC7nAxjWhphwHqVkUeX",
  "key31": "4FLEEJXSNo3ywG6uCcdeXBjHK1EpDeLF98Qw7Ax4RRkpH8QES2FUy4mDLyUYykAMBDxLnNrsJJQx1HZi3cgJPdZH"
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
