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
    "fzKuohNrBXU4NnYMhnpJ6x5Gm1U13RbbgLQzARRgw8MP9y4Wz1gvRpAV3fM4YcoP1ukDDUohLM1Zp83J1MrxAae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLCQKZfw6e4C8cepwhTWm7UP75a1XHLN5EJ3UQbiJa93fHhqTSDbdEcWb5ANYi9Ck4GGBAH6mMiRmyoHygaCCz",
  "key1": "7KCqQErjbjNx8LYhVXdEo3S9o5GL4EhQutB8gwdr7EK1sovKHMkES4ZbkMwMrEkobK5eCETEfDXdNT2nJjhWP4Z",
  "key2": "486chTY1LoMd4xffES8aCkFgjS63UzgRi7aTtxgVw8h2WaJEDteCh8PnB7hK4G1SnCmWYipjJJqywuWS3tu3PZqr",
  "key3": "JUj6jrJ1a2YUkd8NR5sz7SL1K3uQNJsWKgviwZvPH6MZfiu3NCUHd5kotyApqsDJXBJUPsLq5Zej6dreYMtStYy",
  "key4": "29pXuCmTvxtb6QAnesg1ktpmYCYKoFgBA1Z2fdKQuThGoHqCsXfYX8fAArEcyNxDJxN4MXQ177sjbd6goPf8Rdrg",
  "key5": "3M5vCbWimv8jcNYaSwoTowx3YStQdNiMCHniBqF4fa22dAywFAN5jd2E2ffmMW4LopxpJXhPrdiEhfZLcSZqKwo1",
  "key6": "oCdjTea9wtuLMxkFF1hakBSW3X9cQtzRtL9rTkHCMZA5wcYoKyU8bxVViaYoXkhMJ9RPWzqGq3thrDtubzfQb1x",
  "key7": "3R6ZSHRWiUivWeDRpTwEJ6gAczpBAnaaApmk6fT8YjT2YH3xAtiwJUkfDqZPBD3qjCoW66Y4dnsTpDHvoQhWKMVj",
  "key8": "4qqiJBVoz1ndAkYVP1eFP1qXvvm7hqBhFNFEf8KREcweaGmoZ9FxaUHx1nbgJ9Y1m7PhqL32FzAwzXPFWdUkSne3",
  "key9": "4bid7Ueg7yQa4UgQ6i1s3pePMoaixMgyLxbVZcJ6JG4Mo6ZX9Py4t2ecDajiTJPqRs4bcCh3h4HkdQvEGPtsWEn1",
  "key10": "62CWjBmacKhvti6gPy3CjC1q6wSLvxVKkidoB3pmy5oYrvKNAZX5xgtpkQ14iQ1NnfgdtvQ2BgvNmkS3Yvc9oLdG",
  "key11": "Kgz28GDvtLrqhmgur1PmLzyrxuQAKkkdctJmNedchKQrz4xqNU4U559VT9HMpo72Lyyc4ShE6zUe3oEHM5apTGF",
  "key12": "4s4jRB4KHKsQwgYHZX2aRopSDDrhE2akcVW24hFL1Hikq8zYHmdLr96ta9bqBaxxkmDWougeE1FTtq45U7NiTqHM",
  "key13": "2NA1KwtNQvVrfbjZyPUSfF7SyNC8nGEazcheGKjJkN6TQ8Hnpant6JmmFKiJW8K3LKfRekJevMrh9dGsRxTRuTxo",
  "key14": "4en72SLXoRvbJc9WYtwdJtF9znRrscnAUbGWk3pjE5Kswmb6MbB6JQeJpqzFk7cLnuyxaaCgycsd4TEQYzcte8D5",
  "key15": "4MHYaihJ5oBsBAgoUQqkWT8mN2qbgT3NwvKxqT5WQWAyg8ncenQgigH4jTc2sJCnnd4dtM98VGQLY7FdP6fZTENU",
  "key16": "pGKgNjV65qzpMNTnPPkvQJqXF4bbqZ3dvAdADytkPEDhXqU1DdF5XdME8ZanimacH2fvxqii3xtFT1rqbzKK1z5",
  "key17": "4VXrcqGw8PkVd8DXMqGRrkyFVeNsYN9kNqeJ6PfpjYMHPKU3oKiwvF8g6L5uuvPuCj2be3zUTCHWZZbMVveapEas",
  "key18": "3DgPc2LC4dzxXjD6jascjNcX6xtECyfb7tkozA2PXPjSqcSArvBFwYvrjwQV96jrraq6Pg9tw8SBvE7Tb4VZr8xG",
  "key19": "2F2gA43rwWtgPBJ4SS18gva2NP86YQqDYNeU7cqJmUtXrFWJtdTmYjkmAqwEawkFr4ZJbzZVyxaneuxjyWht9VuG",
  "key20": "63iZABSHSufn5sTbWx7JeT2LuBbhHBPgGNHoWWGqs4fdhaaYVYWtbhbHA93vyLDoD9Y2yZiahz1TnAQ4vCmvqM3h",
  "key21": "5uH653cNizvcwhrjc9coMBJLhwvSkTuCdML5CZQxbtnx8xm7TRyyLGsueZJ8Lccej3vxvKAKjSn93iPtnJv4LK85",
  "key22": "77b2kqDfV4uGNC2HGrmuj1hYjNicbE9rE4C1NY3G6ry83Gw16YcnJKampmLDbS34nKX6a9eFnUHuvjKdUiEegTE",
  "key23": "54P1tkbD5qbfyaB72cwhH6X48q5HYfsECWU4yJw5DmRXXVeksmh5buG4NPneVEfpezERhyuz7vKWNq5bRM1iQXas",
  "key24": "5TDQDHPrkNrNoSm22ThGDVSavCJwPzUyDg839Mgs4V8kKQsd7zdWnUEGkEzyiVD93x2bgYkDcx3NGZhHWkpA5nrf",
  "key25": "2r9eAbCsQ8DibXjGERppCeeX2MzTZ3fYDfi9WiWMwHfveMdqYrhFHs3xtrFXxU1xKezw3t6oqkxqGYJkpsJ2kVig",
  "key26": "uaCKkACFQMfSJ4mTK24gPMqvpMoh4MkybovddrqXoKqRziAwoMsoFzp3e2UNH7JikoBYf95CXNeJCfUCTcvANFu",
  "key27": "3MDDH9bH4j63PjQ5eFEdi8SH3AWs72DQ3DYbBd1Njie9syzeNfikXKZ3KP5jMrmyW3LpLNennVcZbapLDCzufnF1",
  "key28": "5AD1WTDHSRyGwmj95xJ355z4epKYeftcaEArv5akKPerRk12hEkGBEeANpm1BnWqYA8UMcJuDnJW9ovkhNv66cCV"
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
