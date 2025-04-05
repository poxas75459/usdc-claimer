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
    "3jxiKdk9LJh4S4UQ14PMjo8L6afiB2sEEK5cbAG2CXiJnBaEbTgW6nzUCtbgj2e2egdLGFGikmPuuVCuZaCGZKxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcJyMeRyQuA9yJvmMcYNJMsVzfn5PuMYP4tA8Afev5BD6YDt4enHZKnXCgpAwoXDZGJrr88M5rGANvZayvEVSpk",
  "key1": "DU6V9QQPTkP4xh5XpPfZ5YHEhpkZayvAujGeud6rJ4QGLTwfaVhiMqcsv2yYrEVGkLq4vuFANqAYLsGvE2pAspB",
  "key2": "4fApzyNQgoNpKD9zqoCivRhU3tsQ26vP1F9fmXp1KLVcpYf8Uny2QEogyHswep3djN3Ke3LbJcUj2kRK39Yr6jvu",
  "key3": "Nm2fxr9CGxBXwGZ4oL8Kx7TropbYp4KT7eapMPuPZndXM1Np2CtND8FiL43DFAXLZUzd6CwHEMGdC3mE5Rj94Cr",
  "key4": "3Y4J5zhbeQDEUVRbpFt8P99wDbT3qp6fYQNmqQ4sqNnp5CUFXM9g3aLGSBKyycLCcj7U5Mr2BHBUCEcxLePYEVXa",
  "key5": "5ZZyMvKApXMZuw5nD7xXhBr4pEQ7KaUoeBsvbKuF9hVNaX4TDTASRmhmSxnrCjpYghwntSEuQAYXukHogENvesuy",
  "key6": "oqRb5DbcFTQNsVcqh1frkL1Xd7xJXbeZkmMFo8oz2j9fe23EaPRMDVjMiudAcTPbkeAXkqXnuUDzzDuA6SuZqGF",
  "key7": "63sf3i3oVwzrkz9VAmBRwhkopZYJjSM9mu4bupEBfkypPXhewEoGrzhjVkucAnVj5dkhoxvBcjtAvKZpNHgbCB8n",
  "key8": "2kgaHSSyzVQK1ftMjfYRiNW7BLfZBBEiEwBnPkHyK64eS53En24uADtwbJbZaN9tMUku2RhCWfbFD9KddQSB5A4z",
  "key9": "2TMadvNes7aphj1opg99TdDpxUJfbRjf6CFWZAfLM8uMib6qqYuUGj3vk2ZT61wes8BECsoCjbZjPxHbxCFB9bV3",
  "key10": "52F351gkuBB1wvTXAQYLha24MiUVAZKynWMyX2YaZJGcmGRNHkSzixFqyZZfqYVfWRQpEJmZCPbu3i7dUGwc2CbN",
  "key11": "3uDhp2pCJG8Vgdr5LtkAqhRTG8cDEJXEsEWFWXXmRYqTu7MPgsgmWxTshcbrgFAJEQaCbmbUCTGyTDcLuB5T6z3i",
  "key12": "345oWfchxvEbPjUVHChuq8r4DxY7zaLcmNN2dTD7o5S5Feyd3qfD2Dh7FmXGZVkREwgWCxjCuoeGNG3jPKyTPTrh",
  "key13": "4NM2sJ7PdaVHaTiJ2jjLmNcpJ6ot1feeo7x9rjq2KTvJDfUX4cb5rWLq2eGKbZmuEnhJ4tkH2eiiPY8vPyp17ayW",
  "key14": "3XBHLAZ6snQZyPUueBiSKe9f9wjFduHtL8vPQXksRgLDp6htEHBVXSEXdnSWmP7aFy5y6TCKqMsM1HFyBLfEXh1E",
  "key15": "3eLjb6YqmDCLXo7Msa4evn8U2Z4UjrmZTv1k2XEmXBVyWNyw1YG5toMSBeXwiJCyKU8Pjc9MPP9K82saLj9JdjoY",
  "key16": "2D6MufvH5PAuBZZety9WV3YHnT1ezmu9ygMLCkYEXpmMbzVKx5Tg9QT3i2ToM57WuZM79sVqgacYUeS5XmcYmtXU",
  "key17": "2UhaCnVdYkqXCbxp8mHdL9YkbowRmXa1GSHhQiynFaJw9FXpdic2Vf1XMUeQReA7rarBmFpwErP6pUCpxVZupm5o",
  "key18": "4rNi1g386nRwYyH2jwp9cDzLmr9iVFwHrzg8bpdxHUeWxrANCErgD3pn9UN8yDcbYw9YZPq2NmgdNwjDYtKQ5WWR",
  "key19": "3TpK66tLfs3jYgty6mn6cF5BmJxdBE6e8hRtVXN7mLPzqTnwrY3td3JXgDJTgwxVSKTzuRa7sJ3ptPrahoe86Mew",
  "key20": "2xN1V5BpcV1Yw8LrQou8f193e8LjMaRHceQY1twk78w62AMUNPKpR7qkuU5byseuumwUdU9tMdPzpEdNUkw4NJfn",
  "key21": "2vuusU9KyyDjRAugdUSPpJ4iihjh9dLiKaiEndM75rTyy1AVZVQkKRftq5WLyCGpqE7KJZCfHHVE2xzTwuytNYGY",
  "key22": "3xZUefounFs2byDCGneusKtCy9YrQGeJcq4TrbMadSJhaYwGkdKCEyyLvZpfqvHGDnW2Vy9KTqooB765Rfz82mMm",
  "key23": "3UTZtr62mcmU5VHKo8wyeDvX43caTfri7GhobFgK4rX5YEJzBDf5JzCs2zKcNGwuNFUstALa51XPqJoRjgZfAkJQ",
  "key24": "5BimmUYan8b5NgbWZXe1bEEgccahCDP1TwXkN6s5Xi4saPbziVvZmK9V3YrQU9nRAHeR7TAyYTkpx3UdeGeSpgER",
  "key25": "JxXGUYKxnj7H21XGRYAq5vqX7LX1WoqLefKxjf4aceqYAw5VmNtdCPZuswQE4rfapZ6rEN3Qyd21yN4iaogNPoL",
  "key26": "JY221mSXFZFnA4acfPyzELALY3uXvrcvGPYmsdr5jXyprVmFC33arkvFgMfBa8som8ruYZTiQWheU6raz1QBj4A",
  "key27": "xfqUpCrAtCFSvGpe98ZQk65eH6yfRRXe3jDh6doPtjqFELPC25zZwnVhC8MStfS1d7WyMpU17hHf6FZXboMWrqr"
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
