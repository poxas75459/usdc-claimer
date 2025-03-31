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
    "66ZRijhN6YzkKdiZY6EsJFDcXrnPP2fkxmvWt1nTrXq98D9qYzE9HUCsjsorCu8vv2sKFhqWkEDQPFhkSrrydALF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Lp4Bpv9v6mYonamvZAFKY9WFPgxvRgZKGewx93zFmewkMtcSbikY4aRZDEScGPcnahb6b84QJb2NMG52gXAsGN",
  "key1": "xmgs3YYr63o5feCt8hEzVtexC9LsBzTZNPijvf47EuT3xGungEM6gyeu1iP2kRiWiGEmtJx3RPSqxNRY1kSNeme",
  "key2": "5JX3dP3yyJfBPsSMmyi2XYyJa8vbpabBjyyfWqHQyktaTcyy6uzoYm5MhSnTLgWZtnEvsdDoPfPb4PKWJYHKTWaT",
  "key3": "4iQkT2RjDt6ohbQsdNpvTxvLrykpERawoTsBgKxtketxZ4rCnaGiziHvk84cwQfjJkwiihpWcmxfKSfsZyW1XMAB",
  "key4": "3cVZFU6Xh9JHgcPjrf1SoT67JMNC5kvw75pama2rSwTc6kJeUVY5wSWHUvycL14E2GRRX4RK9oMXYFtXppuBjX1H",
  "key5": "3zaYvptCG3WLGQCrRH2kX5neCb6LPSxpBt9jZAWhm5qHp6aPEgjGGE37BQ6wGb2sTWuTC8scF6SzvY73AMLCvnvf",
  "key6": "5yVDFbXRrfwCVNvpgPLF5h3db6SaxSbf5DAbYDAPwafGtA3irNvPnWx1sZZSingbt2ztq64DemgyzCiW9vP1Yroh",
  "key7": "4E1sTXE7z7r6wFciYQwbxuQMTMUwCh1urnWAPXYBpwC7rybh8JTeyYmr9uDkt8UrMo9nDvD597Pv871LGAGx6Brc",
  "key8": "Ft6KfeqRirnEAfWBYAuNKurSEh6zyFCT1F6dv69JaptrYbGwrR5A13ZtYSw8z3hQyj74ZSp8CfeZciDeZVtZR91",
  "key9": "w1v26wvvPp7JAk5PMw7YfxLrgzxeqaNvDBP7pm5w8Nmn33SBZ43i3YucyHsPtAsCyU54zMLvMJ3i1Q632av1s6f",
  "key10": "2MKCiaYoaFyiCNLaT8UV3psULiYwKL5RaURWYiXffqzUXLNgxCN8de77n7vjxnh3FU48HcFi5RCL2gXgyzbVhnDZ",
  "key11": "21CLvXr4qgYtjHJT2y4vj3j9NCbMbiKeEddtHceYaygnPGj5BVNU9WjuCmLr9QbrFPqMPr2fd1N9m3WaYrwPsEqS",
  "key12": "4kZ3LHpzu4RikEj23yv5narbec9SuGdgv3vFuLQAr3QhNrFdiKfyBMHaNpxoRafWLCQekqqjYnhM7pEZKM2dASAS",
  "key13": "3qZWXWYmWaT7oVDVA9fsv6oN4EvCro4MbRTfvfCJ9GmM2MDN8tFHrFZqizikV1WEsZK4a79yFiihNLzQaArL7dTp",
  "key14": "3SrEXRjYkjjm1zRHUKefxhr33guhiSEoxYA33bjQnYQZBwnZTvnZ8f8NU8tkyb1M5raeYrFeLPR1AQq5NBdBTqCg",
  "key15": "DdCB8souTsWtZE4QE6mcvjUrpr57kStVF45SKmvFRbUcKFbmTm6xrGhgPFBgWV1sTx6xgACHMEUB9s1LYTZbtrs",
  "key16": "3Ta5g9bij2ZVZ2EfHGR82YDGdDa98RnuhKxTtJBLciE4MNVxMspnu3YdVxjTwgsxtMvHioa9YPDD2CQS7JsxVhpq",
  "key17": "51Ji1foJYT3D1jXmwNotSXJYtepuou7kWbwuaVbnKQ8pkxSEfdBocniNE5S18SWo4uPy3qXnkRTvHytKM38jzQdQ",
  "key18": "5XYdAzmVL68ugDTdRNDrf47Ey8WnQKyzhBz6gPANJ23kHKqAs594y7Ch63tTFc1zgVkKsxgcZHseeJT2PBdHUQRt",
  "key19": "Rd8WEYwJwQoTMQdeeX4ruyKmGefoc87xpqea7AcQj5X5Sfz9BkGEQXsfjHu3dtT9Gf1Uo5Vt6TEAhfW5Rqgr8Tv",
  "key20": "Fn3n4A3UwNBJzbD8FZtoJX4a4bLkVoT3erdEA3B2VBj5EdU4jZkLyezy2LHh6fRxqXoxM91FQcTsKB5Fa6Ym4hs",
  "key21": "3WyJTZbF7vjM8T8MvFCyyT9ian1RnP7RziLH7dA2WmodbpLirwEVH4k7rfks5KRYSENjcA2sQ9VZtWtgzZqSYFCN",
  "key22": "MLT6Up7oXL4ydmJCrQcL1PmxhNmFMgtXr5H14dSTkxvjsUpqPHVRidpAMiHrkhD4Gb1fVyQVWTAJrpmQccr6rUR",
  "key23": "VB7gje7VFJyDoXT8DpPEVP669C6VmYnmRgzPrczmz3F7QJJmnkUsfZhZeMcUxTDypTeTwmQXsu4Sa297io5ioaC",
  "key24": "36fxFJN9zoTbEAqkpdiHromJza4UitqK2Pah1SHaXtf1diJjXa3Az7DwaLwEDrHbSr86VycB9nVGMhAhMMcVD5yN",
  "key25": "5dyFFMXLj8Jo7ebrHneMBRk9T4bXwJFMSw6NiqFRd8xmwmJx7fDLZcHNk3yHKLSrm5NXYDUVPMXPEGkpRUbowR5w",
  "key26": "4wfisHWsnLcvo5YB2vZmFzheaajU5Jh1783B2xjvqf9brgE8SXyHuhx1ggi8qxxE2eTViNvVKxfgQQj3KEUToGr6",
  "key27": "4fKt8SDsSJLGm3GaJ8kLYREy6mWKrvxvXjsaTrrWXufCLgDhL47PKGbKaeY7TFjYY82G2PDNrj5XpwKuEkKn99dA",
  "key28": "4YbUEPpvC9ZUys9tPh78d1hByZpi3sdfzaowdBRiD18yxJ9k1Redy8YZxCfD9Sc99GdWSAtwCrqjVvZ3VpJkUEGs",
  "key29": "5a4ryGvNALZsdcjFotUY6WxNfMptfmXwtRCBarY1aETje86UBp63rWTdokBjsBtYgDzceWfP5jiXYkhoptrra4SB",
  "key30": "kaabj17Uj3fAiTWDNudqiLjehtC9u9pmp8Wy1r4Z6NHb1W78e41K7mXbAbVKDtoXvGN9N91VXWiRB9zuawPMqVF",
  "key31": "2qBy6q9hvb5YGK3Ar2vGsMdTAEwTs1ssCNJAVc9RpQKunotnsgz58NDmXcpg8eABZR8DHmJjVeQ5YKUSy4o1UeJL",
  "key32": "3rq4VrwjpGtutHBdp1FLXG9X3y5CkrrqqCJtkaRsw6F75UNjyVbggEP8iTKcdm5kMhsDTjcPx8Pt5vA2PRSwgGvu",
  "key33": "UNkDT38YkBfy98ekTGT1HyxZr8VcigFXSEKWWZ4aWSuXbPGCi8RQtDfpZZbWZSzbRp2Rk1ZTQwTpdPEeXEGZ5ah",
  "key34": "3bLpVTy29NEC7271SqnbhQyioPcHXDeiN1wKwojLCPosYaoUJq466KvLaaPSWKfQQWw15JpTLwuWCfiaHbM5VpSt",
  "key35": "2HbgKD86Lg3Nc6kBQX1sEegvtqgSfPPpiJ24ynytF2P4XTXtSmoL5c3wV6xcJqr5m185Lu36UkBUBQTsJ3brRNmj",
  "key36": "5fvMSu9mf9pDbGwzoYryB38bpLgUxsE4bKNKcVzpw25RwZdinwf8v9bsjBZEhbpFLS1EbSuK8RyhewFLTaYesofo",
  "key37": "2xbxeh5Usqreu2aj5np1v3xvTXALhqNdjqojGNHmPV4F4sPdULqQnviQs6ehXuXrYGPrV3zaGpWtqNnVSZ3RM3wa",
  "key38": "5uCNdT7CbFPfpSRvcNufuDQEYgm9K5upGCmt1AZoB7YgcjSiuBFTGQoEAjEvfiJnjQDREfbxpjAWznJ7Vm6kySYR",
  "key39": "5XxWgc5PecciM28Upsftk1h6g3BF8Coo1htsLW2XxvvC9WoXVcYPs7ML3gf8UN86RzLmtTBZg7P7C6qRDxTD1cFx",
  "key40": "546FF6Acpesgycta7JECyuY7h89DYvCJFtBkASJjrniF6Y7JJZZtZ4M2kF74gef76HviiLZ63dvDQuZ6Mwu4Rs6w",
  "key41": "3dvvSNTV1gUVA3Hbt1h4HY8DZ1XZj5toCU3dMQ6qExetJ5HVxZZP815t41Cs85dLBz8n5AhA93qe8Bk36xE5aCAS",
  "key42": "5tXNyDDDESinGd6jZ39sJXy3g6D79K862hBQ3488wGQxvPWp7qCJHjKUa6WesybLeJPZtSSyMBUi3aJvgwqhWHvZ",
  "key43": "5PSGP223zMYB1wHBbMnJWxfb5iyQzBrZwthcwczkCUq9WCEJW1ZXEfHrMVqxLfoyLez8MGc53DT7jp2aJJrp3CaS",
  "key44": "4DXMX7fGTcwL1B3GsHzcsvSJe89dcZFEabRSKGbYtxWENdt6HvYNmZg5UPMBq7oasC47e2fRbXqqYBbQcUZKJ32d",
  "key45": "552WqJ86ri2WLqEFqYuvDgifrho1iDLJLx1BdRZUu3eHgUAz6kvYbHrsXUznRbyCorfg9V3H5wfXFJKT5kwUesEt"
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
