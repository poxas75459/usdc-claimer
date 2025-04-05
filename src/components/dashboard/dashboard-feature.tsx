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
    "J3sRfSzbjYow1ro3bCJ5onAChbTEzBibh8W2GcnXHgvjt5hAF5tGuFtjg3Tt8px9vtBSJbyG2xt9BmHHFakmJwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9QWDpt4S6qPjTyWemqkf27GXeDMszph2aQxcKPUTE6LDBWJgg6Vn1nSGs1TJhSd6sLm27wfXE22m7GYUfh62oy",
  "key1": "3VoWSJFn4iC4QkJJY4HqTzKnVju4oqmMp5bxpDzcF69cVg7dLcA6xSiudNFBqZJSiPMU1cXFiJHS6edK1THeD8Sn",
  "key2": "2aCPe2zEv4K5QW23rz6CoVyr8V4GXwu82yVUPJmnRxyGY6kHkaEWidstMPtzJoEQftz41Y2jsf165MTtDCSoZcYr",
  "key3": "2FK2sR1qkwdBvRp3pw74yjHy7uC4RsjR7SQLCZJUxiDMhSJ1qNZ6dNLbSQZv87MraaeGMe6fKE3Gpae9vKN2boZ2",
  "key4": "5BjwFfofV3kjAG7YXygwtL3pVrJjXv1yXJzMkaUdyBB4aKpcLjcguQB4CcZiuyq5tDf3HrBdsfB7Pe1Gjxdz6oRP",
  "key5": "4KHM1nYjUEbHs9BPGMiTHNw8nunMNAxB4ymcX8zHfG1sBGfyDn9nA7udNoWmTaieYWQV5WgM8q2w6xiHEe9ApVZj",
  "key6": "3yjNodoEeRZL2hXah8qM9aH9QhcL28mE3r4f5YySPfH4K4fSbvmghYM4U4jLGMgxgZUGpjZNtQnvoLJfWYf5SgQN",
  "key7": "2fefJ1eUgtUvpcD8pCZZ1nPZ6UiS37BjLCmNSoM2hue4oQK4ZJ8qb8myTuPcBd91SjtHLdwzTwahggmFnZMS71TQ",
  "key8": "5ZSyB414DosRXNkgKFHJfRvjnMnqGyLUTjqb6qWtBDzbZM27YvbaBXtC98QSTomu4A9Ce3v1t4CfNgVcNX9TaNJg",
  "key9": "kTVDv4TWw5S68vp2Jqn3hay4xNkrvoFJ32wGm62TU5zU9BNjLYsgNDyJ72snng7KAbjaHoMLNpeeqqiVnX7LT2g",
  "key10": "5VEnnwC4bFYEes3CZMGMJ9aFgDEdKnTMQvjo9VWymGze5XJHTA2KfMuWMx6B1H27es8hoYkHEriCfy5bLQ14tDYa",
  "key11": "4uPXbgnRa7Rrqpt5HtsWae1vF49Sm5GvCRyJh9pNFpbTyzFE3AN7Dpa72E2ihZ66zSNeFbJuXmCnhAd7CKn78uiT",
  "key12": "4GaE3gGnruR1WhnmPX83K7ViQn7zb16iXTqvQ4XYDCL6dt68XqnGa8PFxjXheC8c88c3t3YncW6gs5tq3CLJxjnn",
  "key13": "oDwwzn5ZsM6cnE2NN2pLH51RGzWDe7fyFWV4HSFPWaYZKRB1tnbyCaXvGTzCCCTM9KDrrcyqizTqn5ZyC36pm2s",
  "key14": "3jKVXJvdGBZZxUxa1JB2Y9FD1iNRpPw1EMEwWL6HR4tJGNGwm1k1gXHZbbcCxc84THZ4pPp3eNuifnfAuLNsMquU",
  "key15": "2VcGnQQxC3zVWMJY9an5fHXLcS5svDhae4Ap8yJaHyRp15ByYwXftKeb59Dx1MksUzsgJBqPZibqFhq9LVREtEn",
  "key16": "3wET7B5pdVGHHshK7TP1Z9PGQzEttV2Jz1NtnAiN2JzTDWqpoTaLKNADBKzgGmn5Q5pUT2Y98h7DQz46U2fPpxwx",
  "key17": "vVeTEiKo3U3XX5mVk1em9XEP7yzgDu7gJmQ1PFsoqpCNRE7hJBjRiGNkiyDMJUrz436ReUiUx4EqN7e9FgzzwqM",
  "key18": "4FcmkSSyCTTQRBHRRj6cqmMBeUe8154r9D3oxjixpVPj6S4wUbrCnvZBmZSGRFn2fdaUPGWMk9SDV4bJhi3Rtjmw",
  "key19": "5vK9npcQtUeHJwmUWXGxprKmbVasgHanAFmAuaoonDFyCBWFgkF9zVoP3x5AhbW2SrQMpf8JUTVi2FryeFiK21D8",
  "key20": "2RBvbhW8d4ARHqAqYGzG87fXaUKqbHBnVzziBigX4EtWD6894kBxR5baAhpEHvScqeFxriZ5YbMEMuxZBfri65MG",
  "key21": "5MH1DAEuwcyAxHPYRUafowE3EXYwrqJbJRgfeSRY7wt4H5jYZYJfLDGQHcoVSTSF5cUgzWUKGAokbwGosnfnmy3t",
  "key22": "3xxUe9vSxTkcLTMESLgGE6B1XotPMv3AueE2t3iKviE9Cx9tW1usohW5hi9r1SWecyWtxU6i2JzpyvpoqHHWMcNg",
  "key23": "274ix2HubbureqtEUnd4xx7cKJPmVLqpNoyPWykQqU73e3cttHFk4mJhJufxHtC34e4RW25PxqQ6GgiLCRt8phLG",
  "key24": "1bveuzWDQZP1BWCP8TRHVfFiwbenam1ne8FWEHQpouG4K2u8x9C9YuV3h48WB7EbrahstUmjZYGewfkiUEAybeQ",
  "key25": "6zFWNf6PMwo1Eiqww4L3weiG3B3qYm3gDZyLitbx891JEkZjyZdztPPRA1pP3c9PpA1Qi9YpqHyitKuL1j1Lw6A",
  "key26": "2abZ1fkz5MzaQr4hi7Fr9VWLA9h7Jh4TDAdx3rjrMsjFpzbX2MDBxZivBNq4xj3nuGSpUoVSV7dihZvdk8t8GY91",
  "key27": "2wJFoaWUWco1u4NV6hxAfJS2yuxbUr5rMoSsAuxue2fjMDVX1PwHRCbEZUFKRCruuX32L4ogu9FqmvrempD26591",
  "key28": "4kdSWuKzBtpT9AcQWLfbutuMNCqK5kSFQHsEVDms6bkyajHin8LnMbw4VRvW4ZDinFG5Kbr2uLrbNLKDDyr5iAUp",
  "key29": "hSoVhLHMYWpdjqLmH1qwmbSMjrht6pN5VPZrMAe3oE2LWq6YS5BTjaWZk8fHZuSjm3yex1EmH6X75divUyYyXWH",
  "key30": "4p4E9Zz8hxgx3KeCbrFbZH9x8cSsfHmGTRKhqe4iUgrXRxwcKeS38mWpTmUa6VEPDnrgR47rzajGAFHC4j8g9vB2"
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
