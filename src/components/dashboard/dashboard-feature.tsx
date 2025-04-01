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
    "9w9i4hqz7jXbQh6GZENo4b7YVLjYHdFgWJkT6hcTi6HbvoHjarkDqEBXxxRREBXmykjeFavtMMKTXNtBm3MWrzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oEzj4C5ya5ryr2qv8PEfmeRQGYEXw5WUDJjiNRn9EXC75ikFj93jFrAMFEmmJqLi81RuGLbxDWtqHCaztkijLKC",
  "key1": "crJPrX1cvHqgmvKV8Kshz7UzvciLsHZumbze9qVFgic8uNnjQqA4ywo1QxwYSZ334eynTkgGQpUSPpsbDGk6Wr2",
  "key2": "4sLgeeehcLipXccCxPge9xJMApNXejPS1tdCJZwthBsiM74b2EBq8H8WpZ2orJ47aaGJFxsyJDdF1BPsoDpqYSEQ",
  "key3": "5qoF7pcp3p6TPvt5snK36gfmf4e8xweuNohPZmS5epHkGgTYU3Ebe2k5hKejPUQNPRc612wXsW2BWzLyaVddG8Y6",
  "key4": "2CcmAw892QmCYJ4YHeSJwt5Xt7ES8kX4Nd8SbnDEcU6vJ6yynNH5XtTn21MF63YL9d6R9E8kPjYiKBxFtVS6P2xy",
  "key5": "4a5ZQjGYXiVfprcWqz7FajfNEo55JpQzJ1RTL9rTD4Sd8hyD3JrWwBeo2vGsWv6BTyeYVr4sSY1EL9NhaG9WQ6zF",
  "key6": "KBkYKLsZQfcPfH6Wr1iUUP1ER64MTmEv14DnRzKiFsgoRqaoiGvR7gMfMrWprvPEiz8zBfgva8MkWZkqiBjyEdP",
  "key7": "4HSDP3akQZ9cVfuQwvkf5xDwJEsj9gmkj7QsM1uQzyumySpJP24752Uyn53gNd6U2QHwKnQGNrbHe7G6Fae5z3Jx",
  "key8": "5Kz4GKQLVhrfiTu3StB5Mdji3RhSm2TCEwzJotPpMjNzVig6bARedwvUkuLHMWCwDuHnj957eobNgjipGzzAAsWp",
  "key9": "2WUBpVBaeUhfj4izCe2dNR8L49sgiRWDKeuirBuR13hhkQTnHwkZqYSbt83KD2Ck2zF3XzkiFicNnPoiw9hADicM",
  "key10": "Fx4ZfjZTdCxRMQmXsN6V3eVnWengma9Ho2wCiSWV767sawRKUDLkNer9f3RjkHyKyGRUz3HgMnaTBFVdUx44md6",
  "key11": "4zEFawsTyfyAyACZSLdpVQ5zuLwjMkNggr5fjxpdaNww3pKJoYx2SisA2JaUaar3yZTdrKZtWHCWB4YjpoZpuomw",
  "key12": "57sSahEbg7rX8nShv4F9VYytC8jy9yRN44Z9XCmHYfkab1s6tMAU2nLez7BW2NP3T3CdmwFz8GWu4GLc89EqQZLB",
  "key13": "5EbxwBfvrCxC3L25WFESd2VDcYo47nYgchuoeJYKPP8CMjHiCqVEJY7c9Js4RiM2vPZKqUSphUYL6dPgQS49Y3mB",
  "key14": "64Xmxso1vDXZgFWD9cRCWVGtTuYPYnEdh7ggNALFXVWP9N94314uvyPFHSdbSzQniACBQC9ip1DUTQ2jEjWbyYoY",
  "key15": "wyYEnJrGj9jfAmQofdP1QcMVbrSKaP1TuvS569zPKhtjzzw3JS7Edp8hVHFs4Hrjjng4tDpgEsCgXMpq8BdS44M",
  "key16": "4eqgkfskNjnzcGCnC8DhsttZEqxTvjZUsH8jHAgiXDk3Zmgsyv2UFkcn2XGRDbQ6dJ9nVsBva6vQ2aR5tfEdNnkp",
  "key17": "gg4Zkk8MayEGrwCj1tgakAb6RNRqePkjF1LqyxeGDP67SC5EX1CETiFGELGYheGYiqj4diKawVqYChJL7HAMYM3",
  "key18": "5nzip6TPZiuKUShAucNEsyjnLH1UrpauSAyrgfA3ic4gKxK5TuWLCkasiasLdz8xRngwZTNqiQvWighurmT57qXU",
  "key19": "3xDAxB81GCh51yTCTX9ccNnbszu8ZjtASBgS5tbEcKoQbL1AjX7QdoEPDxVoLG44jHhqsGosg5ceBeKTznHFLu1A",
  "key20": "4LrZctn9SB3wMWA9fM3SP7es9coL6CCYrvY8CwvQmZNE82bpMY6y3PgiJ5GaoKb2yF5WcNtY2bPVzvzfxcThXs7w",
  "key21": "33yDLoauP29MYgs6EJopqYb7ggTof7EgSbovssFr3b1UQhcyD9gbcWPB9FmKj4zPoXpo8VxBn3kvc2iPwWUzKc8M",
  "key22": "yA64Qhc718JsPUDkzEctMEM6gALKexbSVkRgAJQBF7zQdqaebAvNtrusD7CtqAUWvdLrpFpoNfqySd91htfgiuN",
  "key23": "34xxuBatZTxPZPbojRJASS6vHdpYzhyz9i2a9KCBJqWKXUeCRPeTTxPyoSopAHD5zupZhceGv9trZXqxXr146uRG",
  "key24": "3Ku7Zfy7x4NtBinX4bhJND9yE53zyV6dKU8YtUcYVzh4bNU36kGN7y12K8ocMB8TVtX1tQySVYNTpcL6G79CrgiQ",
  "key25": "2LtomPPVp8A9RNaWx7SGS3tUfnAkfQgCRKUEsrq8TfQeHidmwEJqxY29TAJf9D477UPHSHrp4LRKeTywkegzT8dy",
  "key26": "2GVXer3N1NCKNTNajftxaoPBQGZXYFJEKdX5so7rudEEPneEhYzWVYosowHEAPU29CpTbzWshXXfhrpkw898TWbk",
  "key27": "2yX1Aws2mcioxaRc8MwPYgKHdnR6VxjV3g52Qhm9bVb7aQGNdk9uwnD51NMeXdfQYoBwUnBb5AFNE8LFxmhxHvNU",
  "key28": "TbXppsLSXP2sKewbggWU96SBqtCY6AhBDoSGuybD4zcUUxkXEAF6mkaCe3XyvBqvnCKoTaHa6J51d7zTqgi9csK",
  "key29": "q91ht81QpsKhsnGATUh22pEgFxviu2ZtbUgC8QmAZH2XPvWACpYWHGM79sSdYUyskbNAixAfFCbteZLX8oHDfKd",
  "key30": "4gNZNzMfn5MvTX1RDy5HJQ3u7tCvm78JtSgPEMnrWkVhuukuC781XEnYhFXuZKATAgiCheD25JvRN4hELBYf89oz",
  "key31": "24M9ijW7ZMQ8Fy7VekebiZYoQdjK8cAC7SRCEaVf3MSpxAa4ed327Gzz8t6nVMGUpfhTVhXE2TDHeUMGvBEvZnDy",
  "key32": "4eX7FyazDo9uaNehKF1dWNZKHeepGhxm25pVmghtBoJeUXnmtJMM4Zxa2D3LY3HgCpptzikyn5Q8R8bTko9yVWUN",
  "key33": "5D6pyn4ixW1aE93E22Tg7Ak2mzp5VqsHeWGSPtLiopGw1UGRx29UfVBthnoVFm7KsQs5iqkpekNeSi1B1aiDWoUh",
  "key34": "2RzQpzrGmTU41rp2U8BAgELTedUuxZu8aMpoCnTbddfdm8y7JygKBeTv3nspowWWGkpGDwx2XXRiJc3Cj5BZmjpF",
  "key35": "5VWNSHcawCYopUuDnXdrzLL9EpoD84UMvBy5cY9qdxXZ9rcawyKVyRySPMNMrEwty6ritELMAJQawnsJCeL9Pmc4",
  "key36": "66cFR9dK8TgcYsey6LmCfRae6vf63J15Nm9EuusmMuvAoGFvPrkCm1Ts12RHnBbDuo76eR17YxKfCfKvfihs1kBZ"
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
