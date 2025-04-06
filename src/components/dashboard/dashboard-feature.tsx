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
    "5MBgzgAv5CpTtdq7GpNS7K948Vy34CSWbGWLK8uvHt56obXVq62u9uU8Ha7dRSYvpQufKk5q2fXJHG4QfMGiiNHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujS7ngNsGRTXJw9axKob9c2sjpZ9vnAn8b2m4oQoSAUovvr7qMzS3oLxeN3gNnbJsgoW3QCVrJ1uXfS72qCWwcE",
  "key1": "5RmhacbFr3zLDMAGyDjheZhWeMrbEs4RN8BDzdCmn9XL7dfPdhPHAANUNqboydcsrifs7pWhtwE2VTE9BAFQo3FW",
  "key2": "2xtRj9PAD7shx5wFHzi2h9NWsyYbAWkzLE5rXiknwjkpFtGjTVjrrcjVSEdsXDrtGTD1TQZRLHwr7vW3zWWkkyNt",
  "key3": "4wVnjrZJQfenGSE8ubnkJLFmPsVzXKX8XnX6HpoNsyvHN1sNjF6rnWnd1caAmexy4igMuMrJo3Ds2guejs9pHZWh",
  "key4": "ASLFezgLhTRRjpevQ1X3DNat3S29Qj9zhNejQu6hVBzhF6uN4fK8cVM8kPzfJfifPtE7yGQTiPbxFyaLhmHRpSJ",
  "key5": "2DfRB73tJWkrLMo7TDc8mq12GNiKn2wrgfD7t4QN6tCuQs2jERaAouekhx5JT1MzBxWbRzV8vRmUvtoUwsPodtDZ",
  "key6": "2UwQFbRzttqo1sfirGvorQ39DoUGDJ2wAq3PLNoY3zZHjbhCsiN6LffumHsExWAgCnUmdvmYyS83eb2mtMBWTvv7",
  "key7": "5C9jver1oSG3qZ28Cwc1WoAGE6CD6dxmNnjMP4BSu2HhHqAWw9dZWkxLYtNPpZmKbdQTrE8MKyiqnV1XD8eNMvN2",
  "key8": "3PdXPqivaTxzj2hMbmcrZzxaAZz8LNcSKNqbDUHmoHPyBFkzAnnJRWfybopwCnUiF2DZK232nM1aMSPJ8zjcbVXj",
  "key9": "2GJj51pPjzQjCp6d8wzSx2pvbWRh73aGNv4TydGxbQnGKX4TtngHN45UuGjoN2S6a4JW2HUhFo16cmaCZnCvMyPy",
  "key10": "4dCcQ7RsEX7QuXVtYTya2NvkReCye8rsYVjEJW8uN4G43ro3Luuy9YNudcfxNzbQCWEeowaAWFLj41nymFr6kcB4",
  "key11": "2NoAvYQq254xwFr7XaGNycHX7DbCh4d26vSu88VeRECXSccYX2PX877x4Com84K1WmVhY8VVDLnP9AQqKsuD6WQs",
  "key12": "4ZHeNC8gkwsidCSbfcpCaiHPaNWvCH44AoTwX1a1rwUiXBamd8mByJbY8KF6jNV1Xspv2hmLYM4a1tS5r5GoskBz",
  "key13": "cuqfDHPdVhxMHVhKSEpDXRzhSZWbh3unse18SLpTjoWRJWoZDyyfdLsv8G9DEKoioKhCiqHeb4APD2B6cUaBSdi",
  "key14": "62a5VjbBAuxUiZPX6E4wWB1J818cVy74NcXPJwkVmFs3nrkJ9kKNfvqHaDCyeTCSZfmhUHZN8hhHg4yb1K8Mi5Zs",
  "key15": "42vs86ZjiMsdv5ZrsDsEZLR2JYK67P8VPzWAqvQqQR8VN43UCWBkuEtGqBkvRGS44gGUqKuaPCiPf1B6k6x7MdLy",
  "key16": "4fR2Qw8iT2Sb2CAv9qwWM3ZM5p3jsMUkefyN32o1Kjyr3GiF1UWPQEAwb28RUyztWUETnMicGLEbZnZhHHLcpBw7",
  "key17": "3CU5jUgnEUw9k6x12wjRBP9UbcGfA7MtCNvkVqFKn18FC3pgccJEV8Ha6vqyjwCEiFEqJuxtBwhRvfczJ9rT6W7k",
  "key18": "2xT8Sj8kZMSAVG3jHJKHhAiDVVwjWpkKB8ZkMYECWiJidZurc3tgcqKKBvEaYy5noD7KbbURk9nzoWf8JuEY2hr3",
  "key19": "4HyciqBC2Qqa95wNimA6fDM9Zos353aXw4tpAVvKP4zqzZ7muG1j2EPHQWvqnRcDBCA3PGtQJn3u84Cuad7FPtgA",
  "key20": "2wALEcKeWmTFv2znLAoYitVseyJP6LU3vV5T8ZyscrhHHUzJM1q3o76eZt8qSb8PRyxk8rD8CcrP5cmM3iNknU4V",
  "key21": "5VEVJRGddyUNVnwEteAKmMJGiHP8p1V1U3cgRTA4ayhmxJjDorQGJp9td6pJNrWvKtkDY7QfqeUBAGcpZqezT4MA",
  "key22": "3nJJXAaxKrTuAM3KnYrWycM6sanRSHNDegr1F2cEi4Mrbk8GxMkLYV24wsAteVjjuxaUg7u6kAe65CvuaEvTukkC",
  "key23": "4y7SgXjEDpaoGzprBBGmE6gFx6TLngd7H622o8YLT5fiB2y5AKkcZat2FcobcJ2bT9V143AjUdz7hotLjKs4AnkT",
  "key24": "2SUeaXAMxRkwbWBX2fdCBc5HJnFrXM3Snd9eCgRj7VwfZr22XSQJAYaPEwhTSM3CrQKdToLkzpZSHarEVQWL9YEf",
  "key25": "2jBCrVfJvupR68Nxfz8B7rknMQD4YZwHk2GxQXuzUQp9pcTsNdv23n6ZqpVSCrD9fFG6uhoHmvCLDh8xdJRDFbLy",
  "key26": "4wBrCuuDKB1gmj7nve2C2XkJ48irJ15Fitc7Niwt9BcGEosbpbFWCQqm5TTRkyaR6M3F2oL1cBPQEbzi3cgry34v",
  "key27": "3gnSAtosvgi2oa4EqQeY3PxSfvMBbWKX9uiF8gSoeFTNBrgLxafoDDtXYMKPVVE66yQShr8pfJB8X9nBm5oHdLeH",
  "key28": "2kSwtfT2tEzWhYbfScfx9UAmzcj5R63YFyDEPLxoxHLr6KhM37X74YdT8aXBJkDURmjziacFpsfyXuxSAHVhVbWy",
  "key29": "2C67N7JHX2SFrEnb9tC5FTfiAJYzpmWcN4tqv1BdJdsZ9y8dmrGK39AFxaQdFcM87JoiNEgva2Tgq7Mt6GwxoBQM",
  "key30": "5esgqSPysJ8hNJL9ZnZvzfJ4WNLPtYeEC7Ai1gRFseriQWpT7E8n1zisotSJbYersJaXM9YRFFLwzwguuMajctRs",
  "key31": "37bfhHHJuc2n7bAYG3HrH8E4LpBmrpRUwGwNzSUz7zCFbHekFwRw4FhcXzKGdxDnEm5FoKEfLNLAVwZd6btt8S7m",
  "key32": "44dzxnJTvyuhvtkX4BzMEyeRs1BNHHxLVMw9tdeQkRpNmYbKdqXLCqpH3DWkPf3qCrCHS2tKWSzJ53H1dTecRpJj",
  "key33": "37Lo1sdGdAqzL7HPdrddxfKTqpxR6mMnopykF92iryXWoPyJgxf64aQHekLkH23ejadTHhM9K7GwNPxQfZCJVEe8",
  "key34": "2PUzCLSy1tc4CFNx8iZsL9JJyPv3AisEeACAab6Bg2RnYbCZv1ZcANYdaScnhQqA23iZUnzXmYMobE4ViuGqR7b3",
  "key35": "5uQBmZZyCvUMUrqy2cwjHu15EJiwQmxiWC2r9LefKnqwSnokiqqaC41qEYkTqaCyQVQNNtWL2GMSb7gAM1MwNVeF",
  "key36": "2kDEDsUkBNWbHpJQovqQGmfCNZKcLBojfQQJoUaWnciqBg1vE6MMV9oAyQEigF3GEqBigDY1bZBJGuadXEi3u9N3",
  "key37": "44z3dNMLnSxJ7rSpbGFiJQSBtUMiUj7DggTkht9xMBy2imP7fr4knuNX7AfBChhLdgSPM6andMcm8dKFxDMpBfCh",
  "key38": "5zL9KCdMURaoMbFG24pGz3Jg4NnJ3sRGXGJxqLNBaVmhKxMaXfbkEQej5dAkyXPNLpnvs4YaqBNvFigsrhAtsLC8",
  "key39": "5DY7qX5kjqPR5MBzj8bpNtjsVkVqUTpjTPCtcL4mmgXk8WFJ32DTCcffcunbiNVL2WCqSv4x3ykdPBbtXckvB3Rr",
  "key40": "51fat5V43aLsHbxUqoajCiNRM53gK6E1DgaexzKLhU6Ra5P5U2nsQa3ma2iH6wQMkrKdAkiQQzgC6qjAamZmGH8o",
  "key41": "Hsc1UWD8fWJiSmPgJFrAeeybuAQ4FbCD68eDUEMWgWrtwhybSTumDYDjrxEPmJJNhSKQJQDQkvArrq9wRmc2JC6",
  "key42": "3RFFmkLpfoyKSjfKYuevXMC1DyJNcAKKvZDVTTqNeBGrcnhY2bXEbcUzPoRYP7TAKWM1UqjMjZjx5bsN4WfgaDY1",
  "key43": "5g8cvjqWD7fa7APYGNUwakBBqPKQD9zf6T5QqP7w2nEyNM3fGhnQYchAV55Gfnn9ELYi9Di69jHKmCtiwh2Qk4fQ",
  "key44": "5AEa8tgX518TQB29jAnuKnXh6qPGMZDYftFmZTLCwdvgezBGVnYy2KDU1PeLuvfXaYzz4KKqQ1G1F6L49VmUmKPZ",
  "key45": "411cnX1979hjmGzJzwizcGGyZgT2LBgv59bdzjbVbVYT8UdBP1RQfTnJRFz4ZA5TansWgsN5r5XQfNw8F6joNXRQ",
  "key46": "3jXaPT1ses86Z7BTdxQ4gD6CKtYqt2ytdGbh6SRfPMwrD6uF8cypTa3WDm1JCj1RZ8qLTNX87qi3XPkBERp47zd8",
  "key47": "2JRFqan3EkBGYjfpL87Aa643SePCeVsgpu1afKhNL3dbfUgQduFeF9rc1Y2xhLPj6fyprVNQYGqWCgvH7qzmcvyu"
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
