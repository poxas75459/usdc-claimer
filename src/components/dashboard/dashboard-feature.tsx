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
    "4CpHaEXX7U2nRv6YC1Q4UL6J4gnawFdRSXidYPshoQZiMgAimkWm66duA8JDo4gWU5N7h51pbPNgAojt3HntYRyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvaTkYfrKzT6Y8ousneBxcEyztWf7wJ7R8Nyxkyo6VE7d57YgEx5H7RFtLcWYamqVdSTXjbMZN5f68giAnxLvre",
  "key1": "2diLyzRGg3kebbjvUgtfwBitrndK2LL58yyFJ6iRx9JFpBKCp1dFpvvh14ny7v3GrnW3jvKA8e8DgKLEY8MNuey2",
  "key2": "5ua4j25PbqBoz1UgpPpQ9w3aBuCVzeek6y14B9FubWSfYubkzcpHA6UZTWgWwuUbAdKAQ8QoD1bXLNHn3jiTzyAm",
  "key3": "5EU5XPhQio7u9aghBkjwTCfdsaqP1UYekSKhQwzrwBHf6sqqj8b8muP4UWfdfi7btjBTSdea2KFgormmS2FoeA2T",
  "key4": "59TYweCa1kqG1v9c3xCVyrSToqphRpN5pg475uUxYAtH4wrmjkX56yEeDZMsGFtctgBvfQ7StxmRC5AYz3c1vo8F",
  "key5": "4ux1yBXNhQVAHV1javh8ZobrSjMu6aR6jJXvujktt6tXxrpfc1yscB9VaGdi5ed9Ph6pBUgJ81P365qsAkrVTVwb",
  "key6": "4z3Qa4dj1DnzxQ1pEbHJd2yGe9q2i3KmoTpSppaQfk341E5s9ZyCmEMzdBjPZyA4GPKJpJULFiCijrZ82E7ryhYe",
  "key7": "2H1GiqAG3qbjxwi63oLhaES1Hc5cG5NSHXvuYedjrkhp2os5W1zZb6hMAtfLad94wGacr4AppA85JmH8zR2oqh2P",
  "key8": "4qRw7Nehjs5jN7ugqu47NKxhoXGaBmVp83opP5kLYhSed8QUS9S27QSPgcpsM1rEAGcvt6W5fTACajKz6hs5aK9C",
  "key9": "EZiN1N5gzvG8Zw3LMpVSgQDpozn9DTvgythHckKEwbtM38LENUKj18z56x7WkTqZyAQzZpys6ctdSUqCn2rqusZ",
  "key10": "57kYzMK4pPW23oWKPm6XHFeuF1BVdjfXDLyjrGhtMvoFJJ2c4FDB3YdQcWXD9wnqE5ubt5RSPHGrip3XGfWbkz53",
  "key11": "Ctx7vHtTP8S11x8t3uZyH4Z6suayciWW9xZcReVXYgV5C65Fye95PNeHT8gmrZky1QmnfcYpndU8Abbjbszo63x",
  "key12": "47p6Y8Gs6VmHuhQhZFainbFXwh6DAv5KEMiVzHhiQaQS6xpXzwJnPimwnHZ91Z25LkEJsVXfvHKYpSKKyxnSU2Gi",
  "key13": "5VBHKQogxR8q6KEaW1djv5dzNyaUduBggutBpurdVKhHi1y9zyVjFuQuyVph8TxA3a3Ffifj5Viua6WQnz77k3eC",
  "key14": "66TYc1TcVhHazrJ17iG5oSppNQMLPiGn6ozdXxAR1fWeJkGn8KBarg9SbiNu4NDzxmes34suhGEzjmdiWJJo7n5u",
  "key15": "UhFqmpCeD5WGuraEYNY3UPhLbHEuA4AjqgVpZWjF4dBLRSwALJpqQrDGKPJZbHZNUmPW85gZcXbmy8QZDTVEB9U",
  "key16": "5zgUaUmmLhRAZ69TBkqSUZM4uytqYPZq4UXsrFJHd4VC7Vev6ef2XzhvmVVcQw5Z5Vi5NjFeXFgF9ATYEG8MGEyU",
  "key17": "5NrunHkgL5UfVgHxcPBxrDYyEFtBhyf6nTXicC3U9CAmuJ3VKzp9PHZsrZaUHinVJUwA95tjqsNGcro5BB6TRkyW",
  "key18": "vPTu1wMxqAznVTUZtCXmgNkeVvSmBNBVQaczxDUFL481FmFa1MHUvRDbY7U5CjeLAjdQW9X21XxetFVAMDqR5fv",
  "key19": "9oK8dWzxBYdQexQk28BsYEpRhhaPanNsLy6PebQoMdiiQbLUS5GGaVQ5t6a4AKaUvKprPXn4Sy6yKbkCtKZn8E3",
  "key20": "3DkcCEZwyzeSz8mY1PKb9kFSFYCbkZoXn2LZGmcuL6pGGNiM1X4PvyYoRbRsf3vXNmfmW3xgQsg8DLbDSREjCe71",
  "key21": "7Yns9oVgw2JP4QSL8xHpzmf2Ntxa7uoSJvBvCbvEvMsb56fWtkcHAfs2x1ih2q4onYQkBGF4Z1epd9tLAtKj4Ki",
  "key22": "2bTSeuqRsFde4QBopLXChxcd2Gbu7jKXbut6B3e7S2wZCcKAQda5aBMPAhAGCm8jnKtCYfvPuSiurA8udnzjZfxB",
  "key23": "2t5GgLXCJoYZqaWcTiddUny44cunHKQ6amh4nnkkKnHwaoW72v1tX5kqjWY1f9hvHYbPydT27fTnF1Vi6zH3zC82",
  "key24": "3jRQrinxYjh1D5acA7YjS2XkNvzrDueoCCwjf5gsxiDPd51GTQZRDzL2e4iVinwUiMVCMyexg5DKPQjRmUVFDfMN",
  "key25": "66poLkH8WsAULLysvMHW6WMzRFGFvJBXkxDzCUewftPcVTsg33FUc4ZCBHnroYodD4wBo2EhWywPRLefehvMh94w",
  "key26": "3gKxRTRqKfWuZcV1aLNL2y91JzMEPRXutUWTcGYsZ3Q7q7dbdtLUnfxpMD1TruuuzfT9nhzipWkGJ8mDQfBdJmpC",
  "key27": "4VVX93PpcmFwZLs76vdwwtJoKFid7js7xesN1zbpoL3ngQmizxivFnrUfPLxSgq5y7qJPFmwq8yYun9sgERpFX5m",
  "key28": "4wMNWXETudWiEYuUpNkA4o5iHdCNdrKRgnYws5A4JhzGDaESbmrpzDkEKguJQhsJqPiWQLBtgU4UVsDUKpzK1cKW",
  "key29": "389qxuqUcod7hBEYe7QXYD7tEdySQT4kbH4zeWZf5h4TbTVtBJrSooQ5a6tjTCHJ3N8qJAJU5ejyCqXSf2Ah5ijv"
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
