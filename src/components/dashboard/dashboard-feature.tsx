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
    "4Cs5ydc3sdxvGwDpQ9RPYkL78UXo9EQyFzHgY89f8gtXWQz6LqrdpdKzTsdNCVUbWrW2pN2JuZj8XAgbpCd6vPWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtBtAzdcY1Yx9MYoQEPNt7sLkuRskFp2jrttkrvsRXwQCbChS1UY9oYEMvW7NUoYQBDudAwCr13cHDiLNYHX5UZ",
  "key1": "61a9sDTaUtAU6jhwkY9ntFMaPaJSZ7xuPNWSVm5rBg9SznsFmimQ2GA1MTftYwa8cDGgp7UFqfLmUDA39Ha3VxuM",
  "key2": "46417UsjgVXEWFgrVyaPVdHwFoD4gagryVQBPDLZwyR8Q53qii1sDgpFonBVrWpg2o33b9HBJwLPPVSZ2qMZraEN",
  "key3": "46GdkrQjqDT9pRcPReKoxKJA7eEGmsCZW7A5sSMLmNDHXcdPhkKaRGT38ecY6zhVCdfAQmvEqLwhSVPBLhmj16oC",
  "key4": "2KNrkCxwTvSDDvC53BvJHctoMLN2HbkwZP97W7McoW91SDD5ouL7StDKYLuJWRLG2CLCNefGR4LN2dCajL4S4tPo",
  "key5": "2AUKqAFwR8YPMDwtjEZXgKHWy1iUt6bMyPV1m92ZGr8KR75NVasr6WdPkxFFYXkqXXVDN328xCm55ipNFdpHZZWk",
  "key6": "5M288CSJLL34TnzJrwKKg1zkjMmEMwc51gSPtYQ1ApKFFdKZu3wTq1mTEF2CUr2duEgpePiiqtdfSeuGixM5NzwV",
  "key7": "4U6jY1JjE9QtBLnEjNfDAFHDWo9wKP8GWGH4agX8FJRYiYoAvXSGTvn5BeQm7WzHFp2TbjrYkrtwri5YgJPXyn9j",
  "key8": "665nHjzEJEftD3gxfSVqnvo4hGMyjoH1vcDAwC7PYQP3fiqNTnXunFhFYsJbHhgJghLEV2uY6EG3BTexEkivTiJf",
  "key9": "3wkXhDygNcHyE3nrNHN1nBMRBuf3vCoqmKkVbwi4bZqbuMvK3qnXm6bSzFWDkNFTVN5fA8gi3EzbZdVi5gcYesmV",
  "key10": "2p7BnBVqCmDCbMiBQrRN37sM8LM8uyBXfoKVgKDh3nt9df8NwhzgCRFSy1JHBJgTFq1VJma6mv3LN4MoTCHKT9BU",
  "key11": "26tKTBjLhAuviqpzf6Sp9rkrjUk6bHUtgPiQ7uGwhoVLCmCQw9AgEyqWQotaqpiFwmRzFHphwCK1TfUBujGqEkp1",
  "key12": "4GYrjaRXE4d5vQqLLHumcpRu6P5TXACCP5quRvRKnf7Mpociw1D5MU3oPiHHGu5JR1ZYGUvbBwx5SVEySrWquwn7",
  "key13": "5QCZNu69PPAvVwXTCrwzSLDmNjVt9RMgujtU8xTNBe8j3FNKXeJizdwoNxMv24shU9iYLFMNHQFhZfxdm7cCBoT",
  "key14": "4hKoiu2BkkwzPNxhV3FSUprBaRLfwayejxCgBLpVrAkPnQkcNWz4zjE4eg8mBGnH3ah2jsuPeGSeiYyWcQuWtBzr",
  "key15": "36GxBCrUTuJpHJXRsdUZahn5CDx7kVtsueBt739jEskjySKbFUaBdD5Lg81EMVNJ6yvcEpqNsYMNku3TPk7FrWgK",
  "key16": "2jTibhRMFPKURbgKUpxGhr8bYeYZj2MycHyBF9wczCBxDVfMdjQHWfWyzTtfGti5AqNjbZBsbynzN6RxjngbAm1x",
  "key17": "4AgMnXC6qhHayCiNL7G3Ra4DDSL3UeJzn1kNZzo7sXh8DCMtvrLhsUd57LiNFfFSNhZXoVpHncwuiskTCedaA7f2",
  "key18": "5jj9DPAK5UEmJUD2QqEGAtR9EUaTffbDBXJD2ix3FTzgGD23qduSfth3BUTRZox1waiaVEuGfMVnsUdV5nEgQ4PA",
  "key19": "xK694KPmyL86LJkGyBRWNZE1cQncKpgXi8Ryd1yQ3XZ9wdvouey8ZHptzs2EawDiCBSWWD5xSFPM9CsxK1ZD4Wg",
  "key20": "q6whe7msFuXSo6orr7PWdLGdiAX4F7jvzVjFCKNDPLHk9Z1ZEYw4ZaGJZ8iuxGWRTYENRuuXw8nkLEr1yx6YGdJ",
  "key21": "3MhYq3d4spEWPPg7Bv75acJw1Xq8rRW84VywATnycafoEkFwU1HtUgfKwrLUuiYoujCLtTNHR7EfkyxxpCW79WZN",
  "key22": "5kjjiCY1Z7wj67WvJdRmwR5j8GAKiNa7fZpmMJWunXLg6e2wsr8ePTJsYgCjrjqpHPf6fkhjKom2xMqQ4DbFy5Wd",
  "key23": "4ZYK7iiCnPDHETyJ75Wv1ebxUSkPSqRgz2oxkr7cEADnMUPQdR1nE5vS9TJQBfKFnZJhbyDBXtc5YsUjmky5bEUS",
  "key24": "5yNR6sZxBHUhWi3CEDQ1SmuZtykyNiKjSFavdryiWD1e2UPgJ9MBmBfQV8rYuKTridKBKvWfMCYJuq16BcrXGLox",
  "key25": "23BQLeazAXfnmyReqMh2kdzCsCZgBKy7jByXYeY6rfEzSuG1JccXBKTtVNpWKhFUaxzo8YpmNsYS26BXj1yXqmLi",
  "key26": "5SKTKfJ4AAtHxcPhbt7XAck8Zs9nn2z9GsBa3FLMn5k2N6pp3M6WUXD7q4bgL1bWm4PPHMDiFq8MiTT6dm4djFVH",
  "key27": "5be2BDy752ZWWieVhx564BHyzeSdmfKGD4qaHzSyV1FjeKhrBk8XBMRaf92Yp8B81ev13RNbyLTDoQ1iyZMj3HTE",
  "key28": "4eNhfYZwto4E78BYbCsb3kQC3QAy3aBrFk7fDcPSpduoUFMaW4h2Cv3UocoP2i8uhCjJRfaTb513KyktYFtbZLpb",
  "key29": "2mqsxGUHPd9upS9NK3yUSxWZELQ5W2BtZRDLmueyWnJD9XkQgNVNwmzsSn6pkvuJH2eAzUFta3snGcp1v5etJVeE",
  "key30": "3YGo1UW1bmhD8s6qur3er4gUVGuPENPJ3gNTCjhc4V91jftnJet2TXYasGDGtJXGKhpts6dc6PN5osiBFXw9bua"
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
