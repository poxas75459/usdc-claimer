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
    "sYVDWe4FUBt6rAtj6cbz9YRUguHPR6wGbSEwPXuSB5BzpSAum7KrbSXDtQv7A3XpbpE7zNFUWsUuWAsNgxsFton"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62NAx35Z2bSdMum4sVkSEaXuWowUo5NDL2LZbW56KeYe7TUJpyefD7UkG2zNDdWFu7rk9Uj5wH6TGMwgyMWdhbgn",
  "key1": "3HUenua9uJryrsonYbbvexd25JJvNCooXehWCcj8CwCZvxKimPvQNXf5i3kT3UhvtNW7vLYYWoWYsBe2kb47xYNG",
  "key2": "4a4JRkA8a1RyhLSXK5eVgEZQ3nqy7UGFH8RNGN4RDS7dzbErs3nDtJJwHg9HLBG5jMB7adEFvWxYFDkPbKWhFx2Z",
  "key3": "aaaZdMmTSkp4D2pDXT677HyvTFfPQWTiR6RHNYax3J7E3aWNWBFbTcmmisYWk7mGhvqetRopyyLDErZLwbbeHMh",
  "key4": "6uLPu4paixMsHohcyKsnZads6jESmfiz4bSTJyMirEXqg1Dofp6ZTNmeaCq5J5KoZrcoT5VBDzPdMu6YD1xxoST",
  "key5": "5ojpvqCjbJ7qqw7GG5oZWkbrq1TkmLbwioDczjibCim4cEa69nSerZWqWM5v2qrro3opobDYWpnG1X9mSxuebJvb",
  "key6": "2pctGWp8gipwEqhkueoh3pYtzELjGFidJpygR2K68oKyPy17tZ5vCDpEgrJhJ2eV3dAA19hwBY3DrqNV4WTd4tAP",
  "key7": "4aCo8fNY9jGFhTgoCNowDd4fkt7EYe8KpNmrd6ubHYLoQ2vqjgFcX1yyi3y5g46C7rFXEghWNFW5XKzYQiEoerEi",
  "key8": "hekzfnWudzGH6YeJZVpf8hJB3frnUbNrCq47gihRxyUMhq2xyQ5auM2gs3gx61dnod8LwyRiLBKdQyXgNpGt8rD",
  "key9": "3ns4KEEsviMZTSEuQ5qpPiLayZemnJjG8gJNjBcioH5AtcaraCPt5Mqh485gC9SfvKrfhAEqdX7YfRTAmFKduBbk",
  "key10": "j3wyM9cgP2k6jX7W6KxinLUyq6zxs5Whx2f6P6nubUcYxkUFNJ9czxd3UQt8yjy5685Uysx9iqXtyMCj67HiCcu",
  "key11": "Wgy63qJxTVpyV8LMK4KFy6UE2qd1TGTN6b6DuMFNVJ91jkPMrKvwKjJk6CoW6Y1djjQ5bpQeHoZC3s1J3bCwvm1",
  "key12": "3jhHnMZRdEEDnYYb76yhqynB52jVwZmrVWrUTnEPgoeujMEfnwUAsZUgQVHFvdBcvhBzU68Ax319cQjBhuQGPci7",
  "key13": "eY2XAcBtgxkpd2QdGeCdK4df9EJs3a7H7k8QwcDYT3yc9Pd4p2vT7BnA6K6YsyrSSLkxagZkfYQt3SerRkBiYxV",
  "key14": "KZ9NPFvqinLaVmoSFaULvU2VmjGrTX9S2fqmZr7WuXQbWkUWxee7R4PfJ23NYd7qovFoyc1EmVxXAkFABEgKFMK",
  "key15": "4VjUHCeFDvsLYdynzQAf7UyegzZBybEZ5ikBH92aiRxLpx92DzK9AV4yGj2javvpPcrtoNdjzjZL3HkP4pvD9ZwC",
  "key16": "2zo8U8ru3pwfSttARgiVXBR9uegrn56E1mNxeP5Lf51FGBjRqhZkfjVUEX7q3qtnzF9vR3VFggc3qg6zmPcrgwcb",
  "key17": "3swPGfwJvE5WrxuCq2mbrU6WA6cRvgre7SjWu3U5bKpmL8Md8CaaNQustjbuQK4KNo4AyeQtb4LavXpvhVow9U1Z",
  "key18": "39aK34ToqskkpwgCJbT5qwZUSa3CyjtbDhUbgeaGJodzWM67qCsztCYkpbvxRQrHxE1rDVNWrVaE7NSdzemwqCQm",
  "key19": "4KLT8gBAHKYCn2ruxXumfAFTURkiZgcKcvoVWS3ZPLi358o2yGKVznFZ36fQ9onBFqVSfUuZw18aC9mAT6FdZwp3",
  "key20": "4YqJvdraV4CGvjaDcaVUm7FbNqCJtzLqAmhTxt2HFgFiVBs5iFytoUd4xmaME2FWHs1TsVXV7afCWgcq3nHHaVAr",
  "key21": "3u7WfbjowhZYcRbqeoFx2WczJXawM39LucvxCNvtFY2NHhAtX1gy1Vi7w4M3MA77jyvz5tz8AcS16u8CSRNtPint",
  "key22": "xMVBrKj32ZzLmQEepWSVsYnrS3XUtc54VT9no2C41YAj9ice93nuoxCy3MzHKoT8bYp2jEN9ekvMVKbzxWY77gU",
  "key23": "nykYinALBdKVtWTk9m1Ge9b12wFc1XaUW5AiufBiYxLYekY3UEFpaPRqoxNduZibYf6dCZQinEs7BbCoHUzY1rM",
  "key24": "3ZkaApUczdsw3WqgKoybBZtRvYdZDCvoc4zNRbYQTi28sMX1ncXjyGA9qrVMjyMj3nVS6hWL1RSSNppghKwMjPnc",
  "key25": "Y8jN4FBERhXsS2YcqdwQpWVLtvAWrStr12pgumXkXiFg7Y1PWMPV6vjKS4UruTqJubasbUC7njNGB53eNHK1AHc",
  "key26": "334CbjyWsjWqQdBJs7FkaiSwiRFeNRVFb5M6SjbFbpBWj3saxz46jQHotsdizhzRTksTUADjVjzDoC5DK6KaPfDW",
  "key27": "4P7HD5FSCytWGoAAF7VrnQmt8Ma4KvvCvErfbJMPNNdEWKDNfQedxeRa4hFEjfBo9TX59eGUDhx99oJZWNiYxq1R",
  "key28": "4v5THyHmFhFJY3zgV8rYjmSSZr8VK3cVm9aw9QnKt9a5gE84z9ifoDG1ibQz7jYo4nNTquRStvHgzETXqbk4Dmkx",
  "key29": "5sCVCgspkMN8KzFi3mnAp4k14bhBjRvf52zmgDpmypgsjs7C2piCeKAobcEQinVs5WA23N8p33hHZWFJ8ky62Mc5",
  "key30": "icH8YYoXEfnrJTnL19r2G8f8Ny6hDtaoozXZF82zUtG4Lmebu4KbuFV54zB7hC7ZRHeF4nPNVcfZcSbAtrKkh5t",
  "key31": "2koBM25doCid1EeSMHCEne6CtgpqKQu9drCpuZ9HB4SgBUamqmTDPqSfY77oQod8apBCWenxdw7kyyGTy146GDNi"
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
