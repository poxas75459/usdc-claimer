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
    "Qc9Wc2W8SCxYVcX83N9vUyTetmYfCTvqDEraFMKGZ4qTpNhGgfGDrqzPjnYeYe6uc1vngQ12qjkMdxV7XQofCrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRCvyTY29RxBSsnp4xUiHvnmUUyhHojB1gqRe1D4HfjsYn8VRFoTxaDBRwyC1wcmZhm4hz7dkuMJYTTtm8rzFsk",
  "key1": "5ma9xZ7qbnRQEnmScRoz1WQVWHo3mRFRRFTRXhjGFb5A4kVVdnoGLojfyFALPEnVJA6uxpeugUWzCSZpXpxVj9yg",
  "key2": "3oErGzaipL69TvrGuxcr5gQjqbEuZKvApXuJKfPQSZ6ocnAdDTjfBGhGW4GsUgdV3RPFZBkKTKMSFDBUmLZQQ2ci",
  "key3": "edUR9R6JhjrhKBGcYFQG9REGaNbanGm7ivWfAieqninVg77sExfx7fPYwBPydiZqH1qNCKyuyUH6FyRxszZ3mx2",
  "key4": "3tR7yx2dzB5duFRM7SRptVLTyZCh7c1YVt1ZZhR5QwExASbSRKXHAWa4ZDXwydSWoBFNbWKyo8gSM1DLhZPhhugD",
  "key5": "2mUvqWzzrSMCgvP2KzBMAxFqcpstGREowTWkWLjTpzxVoYmHR3QdjeJktUyp6mRAt4G9mJjx9ZczWwi9F4KgCXT",
  "key6": "4YvwKiQduXjsgEdgMRAnRbNepNMJnaokXxxz7fzdevpXpdQCSeQWp15xw5m1gw83tjkJD5Kh622PEngNh9mCAB6M",
  "key7": "31qLVbVCudV428NDAsjX7cTAJNgcVu8ejs3riFUubFzEFBGy67uCwgsLkNDpD6FYKwoY9SgSoKqGnZ16uuAQhieD",
  "key8": "2DvGocw2g8sSP5CDrPe1uNATeWFeb7QquP2PTpqq7FXw5MB3HJaF8AKXDybTqVGTJxaUAHvDrovkotbPSBjcFP1L",
  "key9": "34EKg6dpdupMcoGn7o7m9EKvdGSAZhrsRgzZeKAExsfxeMtPhg7X9AzJjWjcy8Cau7CBXcqC4wGRp4JmmFQMNoVW",
  "key10": "4B4GWZRRvttg5qKC7KFCoRDQzCNUGdtP4rFdNxquiELn3sUqzkc1w2FHMCG48tYzmwqkG1YJ1ENS4hcEn3XvJeFc",
  "key11": "2L8jRSaz16yfBWThD2oQFmQ4YG5sJPKj9QaZ1WBXfFvzwy4fxfeXv39z5d6nHKefFJbbxTZL5a83PFHWeeKCBvEQ",
  "key12": "3LPW6HG7QmB4XrRRaJXFdVxQnySkYYbVdh1P8XbjzV6JDjGRSQ1CbyvvtmZaQmz4v3EUAXBL8E7YuZbEXEgvS4kR",
  "key13": "tnLFfYYgamwgdNLXVkmTF3Nch8Rbu3h5Ei3RRpbjEC8Fv4e92W83D9wB5vM2XDs394WgyQKnHw7sDaq6Mvr3Bxq",
  "key14": "Xn9NFhL2rugc6rois5CeYTGGqAiHpwhXqDBDZsaeYciKG1B7nCS6YHrP1AwbkfymTYH6SSsfn2Eorw5ZrpywDz3",
  "key15": "3xKVQyp78ctkzHnzQLiowLHt6picYKy5xQYc1GXhArTuutRfhi3UouApCJwxmv7MCrbWC2VtDwsEMyyXNmFfuSp6",
  "key16": "5HSd12YQ1qnS3cZcvFYxDDW9rmkccE2ytdKoGKMqx7Hmsm5LePLk423B5j3F48KxeaGnHxhufZdTJSD8hPKs5D31",
  "key17": "2Yjz1hh63EE2q3kQKLphVPzUR3PBYzQj7uNYoDhapVkxtJWQkofLq5FiBRqaZXjYi9PhXEg3BiT5cQL12dPPvJkk",
  "key18": "2u7KcYLLdAfAZLBHERE17dQFv3rSqxS2vvm9neH78yvEomtWvxJaVqWnQWqr5qzVLsMW6KV9QjvmV9pJAVpeWAVp",
  "key19": "bjCZM8JAAeZFsNmDKVbZznAJjJYvf6brBSzJyRPCXhGMJxfV6n9F1dsjw3AZhCvPDNCWoW2XSxzVDeqMY9ZvUzK",
  "key20": "2BsBCyL5jUXTs4cUiqVT6Nazj3mH2u8tmt11NTGehgmULmBXrpH1yXK2a3mYg3QtjF4FWLFhndBZLavBY2uoZik6",
  "key21": "3hoBmkFZfEaVWhxLRQD9ieNKoUsVvSFpDUahFq599WwXixx1JrY8WJEmUbQwji8YuXLYDPgUqwHq5LWfKCXuuWKn",
  "key22": "2tVY92pSjEtCAoxP1TN3qgvJbfuB9FqGEMgbYNWY5isczPAki4QakVDDFmmKEiYhooC3ANm1EiahBa4uCbgtBCyB",
  "key23": "4w96XhtPw98YALyr6rT21oJQ9RaDWWqBTiJqg2uHB4zhVv5p3bVpiJbPLtBPZtuU6W9b4QQapBqKqAB6Skhh7WHu",
  "key24": "nD1mAuH6zvf1FC3rso3HMYf1yC6SKLRJ6XUEDn3kCTQrCAhHHeaTkuJ4DtacKen4H6Hrs1avyBiAeJ1jrAEjrFx",
  "key25": "2TL32x4ZLqqw8PE47yTWVzmVGm1MRQAG6uKafGxpa8M6meDVX16Qw9jXyJXkcTntpuFFJw8NpS7cVcg5JuHb1LUx",
  "key26": "2YaTvv2fqkk9d72jRmaDLWx1KJR1fKaMjfoWDdLnkvgP4p4Mij8quEoNsS3b842pRP9EmfG5gPN1XfoATmdQ7Szq",
  "key27": "7ppAPkVe3pZNduetsQaQEfBJjbJJFGeCwh1HAjJzStmZMQ3fMJxz33Th7wYt8bJwWJexgLGfUGsxPzWkowENboC",
  "key28": "8b3LirXMxoMURfawQjDof12qWuGPcrnpPuYttoU6JWVTu9qHgSN4wnozYnieuWARe9fMjRxjA9hCcXrj6wJRZmg",
  "key29": "44S5bBScZrxyYsRwLMZgGUEZL58MraPzuVdGEQNaxdVoFkgtqLxvycu7Ewvkr779hKVxijeY7FCMSZ29AcJ7FsWp",
  "key30": "2B65qTgVq77Z4cn6Rn7twTH6PvgxbbMBcv3uikQxwMyEiZR9D3GXfvaaJnY5wAgqgKnPheztMaH9webGkw2dnDNP",
  "key31": "2UAUNwdcpNte6q3ShNhn31hQpbpcJYKdwc5FqUDy3TpbTQCfZjYr2eAxRqNtGEwQadJ8ckjbTthyc2oH1MMXUdrT",
  "key32": "HjG73hrZ4JWEjTANKtFv1nNNLwkTdNc1hHgpqcvp2sa74CwQ4augSZKggYpBv2uhZuWuWdpxb5YJUpEh3cPq7Qq",
  "key33": "2bRTVV7S2UQsJwm78hWopjCbNu1oKT8uT79WSNu7HFh8gn4vpgfwuMcai5y5SaB7oAbKtMKxajPyrfc2rcdWc9fb",
  "key34": "3QMKqq7kJUaNYJZ5Mbf9kLRc5KG3RkpbsfALdf4PRgYEgNveiHoay9M2R1REPTTGZXaSYgjejmWUa6xVxhSErMLH",
  "key35": "2B2bHDZPyYb9fKVLDoJyoLKmUZTiDFkC6D3poU1TFpFeE2PBvtne26zfhow7PGeXm2TjTb4725No9vdV2eCmbX5Z",
  "key36": "43fvccfD1wKTd7uDuwbPsCf69F51uozi1Gq6TWAb849G58RVixJthAJW9RZz7Rivuhrbc4tJAPxYP42SnoYRvEdJ",
  "key37": "2vbBNdjo3MXGXWXLtw6CPvdxHVxCrKMJTbxv84LLf1kYUvdxYanuYby45E1dxUnd1zRWuEBime22915EVGjvBek",
  "key38": "2bER8tbb43S9A26Fcc7uWyqF31iE9CJVeUj4Psv7mHc2QNXHM9N47Mf83824BYjS673Ux2TaX5P9sd9DuCHorNbz",
  "key39": "3vQRFG35a9UtsB6tsdeGQ7AbfdNpwwYfDV7uUB4rpqzLchtAbE3HDnNNGWtPeKba7TvpphzQE5ddgiiF59v4ixYm",
  "key40": "524d9uSNDz7Wox3Uz6sW9dh9idgHFKpknxuVDe1XWBHca1b3hCg5WVAHYKS9nC1tL4PoWiSgMqDBM9cShTaQY7Ya",
  "key41": "5KNXVPFZZ7s17aFrFQp36WdEjoMTgmhRvCb3PBS6sg6E67Yk7JDLjVRjj9aQ5CqJgJ3obknThyZ89msEtCw4Vpef",
  "key42": "5oWotxPSTYGKa5A7WXtcR5oajELrT38pTJmVHnznzwXgzLuzcoc5YoJfuv7W8SoeHuhKDJkBKbUQxYq4PWnABVty",
  "key43": "3EB6hmUDvNTLaHh9sFhtAjRs4Vj15mfJMZq86c4237Rf1N75stziuvFZZCDrnBZT8yYefTawxEgo6eSRRTGi9Dpm",
  "key44": "TwWqHCjsXduAkkrjYVp4uc9bfP8MKscDPnMRbnuEf2JKAVhA1qQK8LFF8eNxy2RjZ4LfERhUyd4XA2bBeGiqvuc"
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
