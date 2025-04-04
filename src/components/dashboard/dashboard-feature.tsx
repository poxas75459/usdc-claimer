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
    "4XkQzEEwcKri3XMwhxXoFpADM5X7eydL4PTU8LwMjA7WQWKwtcMiZBoKWd6MAAcxF84Uo2dSgfs33ntsEpFqaxoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43RduQtvorL8zuQdqwBCCxxwqb8mh77zjeiRcu8emSBMHNVTPXoHBzkLN8gjTpeecxVjn7Yby3t8aY5DKedihfPe",
  "key1": "2cx7GxUeUzC99PNn33HQfTpY2SYVMhKxf6HuQHdvFeaWZyA6i8YvbAas583BSmW83kHF1fxHp7Dh4i3zkhofss7B",
  "key2": "oXZaJpvMdxFtMDRnN3JEeQwRiTgDH4uB4f34i4fSCfA4QgtU39y6uFHFEkEUKRMCeikSagKkhVD4QPDWygQu19X",
  "key3": "5gU7q7bGnyxa4wwcoN65xGCkyF9iSPz4V8GztTGpo6Uv81p4yWhCh4PR7xmwt2tR8vTDqNruF6m8jRHxd2VgSM2b",
  "key4": "4XZm951oq76K9UaMzr4ttbzLpmfPvT3xQRqppWDJKeyXUJt9en7LfNsJ9SmUKqEHB4GxJYKZiRqS1hgWStNJZGwd",
  "key5": "59ZpVcurRe757qaRqoLhZ4aB9f64uF9XnpxESHu3gsRrzvxVBnuuBsWnTvcK95jnM7v4M1ZuB7zDQ9LMUNXbwg4w",
  "key6": "32VmfGPqZrbhQgTd3VWFEwtrLRv1X5DXmGAnsnvUtpk5FFQT5GgWJf2GDGTwXQEkr8qfKLSeJ6zc17nkgwSPnVLE",
  "key7": "5mqgkhSviYUZszp2VCwZ9wGHt7djfD13kCuaWkSmMmF3KeBNxX7YA1h3xY74c7F9RmzPz5XrZ596RBu9A6s1SJXM",
  "key8": "52BwQSTTppuQxuArLJEmiu1FW6DKk4ZBpWVjMAyvo3yFVF7M44rS6iVKevd4mTeuKw9nt7a6WKmDgoJbWEsoamtL",
  "key9": "4fHrKbQKrEVem73C1iMCu8kMwaHV88Wner6MBkpPVeL9Dpzh2Wa56vSadqNgG3HAft8B7o1hRuexL5timJD8iAfo",
  "key10": "5fKddum6EdFhL4ZLX4oRrU18FWJ1uzxWyRPUYSFX8eeTx7xuD7EC4uNfhu4vQv81Qp4KWvGrdbFPGRgfdAXXPhwz",
  "key11": "6jGcWbdX7y8Srbn8MxxjXyuVq8Rjq1Bk53bvJAQ4qH1RQGryijmkSYVzDx4rLnQ9ZvBomnSXREAbc8UYTikpUjw",
  "key12": "suRSejPdvaPnLDKp3HHQHLfobkq8Fy4MMevBjcJhGzgSzLjwozcGWTSX6K4Jvm6JrSL2YfoC7u5P2K4AYUxXNGr",
  "key13": "36W1bs2NDZDxNew9uVh2orPmZxQuL73wZui2Mh9avkKXmTZgQzjm6Kk4VDMpe8i8Nq2Wt3V1JgCmpeJ17WxZZDcc",
  "key14": "XBTtjAXA7hRmNk7NQaDE7NUUQ7wuyZyhyrYimU34pwhftt6T7zDqSjsYcajBgUSmxgcjLbGCmhX35rjDX36JUAM",
  "key15": "4vxoQpvKtM2HtbGWU6emhPWgymFQiRFHxTGTkntGZfwG9YfqyFMSVoRhSwGzVcqUukpcacrFjia2j4qXjb3okFBf",
  "key16": "615GKY9x5fd5bC4woJjeW9uYL5fJ6JCyHFN37VDJrywT2wTebaATsZrPeedGzLx3kByf1Mc7E4qHPidZrc4XBZA6",
  "key17": "4tyhPEm916j1N2zMme3m2uWSBieiEKRawtkghFMNHCnLU74L6kNmyiVZ8kprQhrujwL1PekcjcB8HB6dCCEdzHDS",
  "key18": "4ffuGiX7HirS2oGdg44svi9xfDF5529CmwLyyvb1ncaZMLdUXpXtvNfAcFEM45mP3JCd8mpBKpJxzcAv3QvyeAkY",
  "key19": "5JEAu23ZaWpzJTyxGMNPKnNBTwgurtC8EgV45eBhEdEPtyq2Np7S5bSAbsPdRi5i6SH4EvC4nquSsJUP6QDChJfw",
  "key20": "3JteqFH8ZCpvGusS9zGAeL7sNr6DMqCMmVUi5B3HEitVozWqDEsnqLhf2Aai3xWMhULpGSZodjNpqtrFVL6QVmKu",
  "key21": "3BtB1nQygJrbJrWLc6qxZRRQnstpYYRXshpak9V89UXXdpAQGtVDbaeYBCQZCfczJUa2VnwLrik3PCSP5aaeeKWk",
  "key22": "3RjZ3gs8E3JXErriNzhSvBCcdMUJq3gH5tYTky9MEZD8BBJ3Q6sAzrovffsG4whVgG47WTYWM8S1sCcWMhaCg7Jr",
  "key23": "4JqU8EBjhHJacjLM1Y7GKWjSxAshc7uHSyuGGqiJSXaCGdKkEjiqUEjNZHfVT4MVHrmgqqXUyMGZCNuNiiY6Fu5F",
  "key24": "eWrGYh35gfUeXP3P3SxYhztdpiKHuF41pbfqi4erfFVQAwVF3mAuwydTPHMQqgYcD3a9gEnMJoJYNdTMAhb7Ar7",
  "key25": "5BCf32Y5zmTApXLMASG7WzG3efdhnH5wc9RbuWVLMyUXyhfRdfmxbbZLw4VEwaZenes1nynET2JVTgRcfZMs2ngW",
  "key26": "56JgeQACxxvXvenKEuKxkSeheZxQ2NHN95hBLVVZapBnNzwMqa54vcAoRd4zymukbHbr1edvyVjXFj6o2hWXWAZx",
  "key27": "ESuMpxSkXUWpLVFhWJkqxiXGvPZQVydnwtNCHbhs39RGudcMCUo7dgJjPLN5meEtRFjzPBcQsTXx8pS6Z6GoWek",
  "key28": "AvDhBzWmuAXZhi324fa3kZFcrZNm5U4yoy1XeB3XziZ32eC8MZSY2d5m8Pu9EUhWoCdyHMCy4YESau9GXrRy7ea",
  "key29": "5YxVZcPvJUHuBiJnss9UMSfMUnk56M28CtifyHFmveHLnPcQJe7Y4Pne14bJWxqEgF4NHmvLNik54tNdTKCWPGS1",
  "key30": "5GDNniuQeqx6X9a8Mr7SdNUBY47cKwujaRvvVFssToFahKUZ8rwKYCkuLneXHQ4WPR2jCFQ55GtciNgyJn3EXeeH",
  "key31": "2AmTh5MrD66Xc5Y92aNWsKNR11hRZhrVphYuBndbvunVN85tJ9QqHruMave2NPgFnkVXWm9jJqmJ8ZZCDmuDp5p5",
  "key32": "56dXnqsTkbuJqk3gbANVPmbhCqeMCuYNn5dkQEjXjpzbTGpVri7fMsEQpvEUFHvV2v6f9gT77vtQg6A2bQ7x73wE"
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
