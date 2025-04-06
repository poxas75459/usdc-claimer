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
    "12A17unTfbdMcCvn5Z19CYHUj5eauJgCt9QXhghEt18emBiXbXSxPCsP3jSVQcf59Ha6WAUf5PG9x5Qk5Qx55piz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkEXdzjA3rwxgzheyghBvydCVskK65Y2teQM5H3Gt4492hDSZoEGApZ9LuCsCWMPa5qY6kbeE2Bue6dqcrjEmUp",
  "key1": "5UBPvnVx2EkqDmbiuQYf9X26SmGmmREA8cm8J3rpvPKGgSCLYuRwLq2TJHYy28QKjBdasTV6iKDi5L9BtFymV4W7",
  "key2": "5uH4idZNdcA7nbLb5APdJRajvPdeVGVxz4saesMvpdze7RT3i2wTGhMhrPAjGbR1g3kFuzSBi4Dr5zEsGn5t5sjs",
  "key3": "3K9Vh2BvifDwAJ5YTSeuWc3Nv4GxEf54DLP3vfRF61u8aJzBswDTbDDSmAPafURiaLWmtyQCUWQV4NqqkwZY6ZpV",
  "key4": "5D35zjqqsFpAA4k8tQv5xAZLG31QyvwAt7PgmGqnGGVLsTQUdi8KEvp76nbm4Tp5keF8hY9gdCvZsvWDv7MPRX71",
  "key5": "3NXQ9gdnLvcqRHmN69vXeyjFp7FLthTUVFjHSYsP7R8nJLvAkQsbNHVDECZrBHetht67whh8qvfWpgPYdiXJMH1Z",
  "key6": "3AXbK4Afu457ymYEdM7ZAkeh1A1KFP72D1spuucwuQm7qMgneUW45bzMkm3YQqRXopqGhNBzwwevPkGD8kGGujhC",
  "key7": "FZC2ikyyWPCHSKpv7bst33pL3vBkZd7QhaJLaMK2SNbRAJznMASwBkqb9oJs9sdazLa3hJKCdbbkhwi1CbdUd1f",
  "key8": "49uKXzAGk5jciECnrCse3dBk3N2HSKuFk3BhkrnAaPexsd7cFFgTLHGTWEFpcv9b1LSNowsXv5gE8tgNroYGhjwi",
  "key9": "4FSeoKfb9HAY8eBWnKJnoQiWaFdMveGgi9K5gdw1Z2vKaDv7R53FpeE7DjXWtN2eYazJRfGnQ4F45cDMmr6oryHQ",
  "key10": "N8arXcKZxBiFKS9ksAvDKbsfLg4WHC8NypdGtXCwdN8Q1K1z8uzHGjELJ4wjhp6eEAFe4MqaC1i2egAVXSrG4XP",
  "key11": "Ng8HjQ2EQBm3feGkrSUbkaZe3JZVa4FoEQDhyaXy1GiGzsvW4QC4azBbyJQWi8L6qzd167qhkuakBJ2xjU4kEU7",
  "key12": "5qAPUdCt3kmP28Zo4K4ijuAWn7PmcdExdkV8pmZtJqcrBz4r3f8ZnPEcUMKi2t47npgpLWiRv7N2CftToFFj2qJ1",
  "key13": "oKXzqzzZgzEVyGxxk7MF3ZQ7yvBkWMfLthMfbeZRG84HWLzCyaZZqmCcQCp2jxeZrRzNUgSjdxZHLH3W22jso9d",
  "key14": "3a8LsuSzpMiy1fnWp8YyBAJLZT7cSBNAirEcsQf1k9ej53QsEqi9SXhxKwzRdGw1o2y7GAoSopeYyQKa5VahyzRf",
  "key15": "2W2Yzu4WfVCVdBam7aa4Ka5997BtVWftUHSE5kxryTKhehDFvs7yvQrBko3ignpJ9MvcZhno886m8ydTRuDT2Rro",
  "key16": "5SP3hJJaZeZ6hXn8rva2eNqGqE7NSaALJszYPLMQd8r3NcrFWsG1Na5L2prc5Gn4CqfkQZh1VnYBz8LDKCe3epDN",
  "key17": "3gkmyJDMt83yvgAW8ETRZwaDazLJW94pqNx1GfgvVuHMCWAt33yq8j7vmZb3nL9jMpj9LnKfnz46frbYeaCkUcfd",
  "key18": "vWStuprSxtGQ7yVPsXFB4NpJARE7BL8DyDjjwJYe7inN2iJ532NZpXmGWczJzJQMiFz4G7oAqnNnEGotkjCUYm1",
  "key19": "2JZsaPzR9xQjyo7ehHoPAkzyWfxFoiJujGkCUsGKVoKiuZGqVe6hhWaPFjTDrNchgGCZk7XNozm2cCJFqrvC3GKy",
  "key20": "5wMtZYqrr3jFeSzBZGZHfyXX5D99mZFez8R1HDQP3frLFpfyGHSLih71YJuEMS5K6ieqojezfBgu4mRoFCawjJHX",
  "key21": "2MnkjXmbeFXQtbHFx5dzrnzzRv7rJaTD3m8Rb8DXXETacgi6ZrGSPYEQvcxfMb9c4TSZdHPCNvY4RXrS6k7LiDRZ",
  "key22": "2LhqBqkGnXFsJDnSwaqciteQcPUKrRN8ceMfXz8Ti5sHH8SQMNj589Qe9LBVSMVNwJuFM87WEgCTypAkG5DLhYHK",
  "key23": "5vD8mV793JumwKSHyuzYWCpns4UT94ezzviv8311iyqAU4rUAUPBP8xNbbqB2Zi1LBZqC61ekCqGAyUsakAuTjx3",
  "key24": "kqFURYamEfjKoHsZahswx4khVmFzceYPgz9qwqcLFX3x5dHYXStmU4GTpH7yZJkBcqG8kyANrDRRV8Ycjj58PNx",
  "key25": "3ZBuUAbrQTHVKoLAM8F42bKeYK7sT5RhodGXip8T5KM1NNnRZc6vyh8bZpN2FftfmwUL2zdn3co2YAcKFvhUntbz",
  "key26": "4S58CwqEZXC1Ec3Y3pbPLZywyh35jfDuSnUTG6XdXhwVEUi7urCSKQKLsWy5nmzyjuhdegYyBgDLnXP4NiPQQ7aZ",
  "key27": "2sfP7dLrsy3oV7nMhrU7xL6KQAxE3Xr4waoWbi1rXMVWHsiw4MizLyumkoLxwUKifAMF2mdYUN5mHmi3jotJH1b2",
  "key28": "2ewtFkV9NBwqBVH55o3SJERrzRnHVztHnt1fZQuAPYQ1DimZ523rQx2rNMqoe9seTrmyYXVX5gXWRzgVsvCGatSt",
  "key29": "4EihiCu5YZpo5GXJPrfbH4xgmjuAEAjZxxXqFrv4unjvRuHzkH4Lv3CzArUzavys4WF2ZPXuiESWTuNiw1MJb8jC",
  "key30": "6fZQwEzFYjk66DvQnyetqMdjwpbKV5pQsHQHo2NyafeL1FpwpWahUg8Hz8DZu4PbPVGTRdjZ9i8B2yK7QkXTCFK",
  "key31": "4nh1dPaoE124ybb8dYwjNFfbT3wGevuLBib6feYY1fvVDC2kH4yZksWvXNe43QhMhD1Ck2kEB4ytLsr1ungZUqbg",
  "key32": "5CH8R7K2WZGc9TLoz3PGJwkaHg68RPYhDDhJWsqHWZ9gZLV1KEuQt3eAeDYsK8ASkmLXJFeTgQY3UR4LbWJUihZM",
  "key33": "2ci6MCkYsqu1qUCxQx7sHW7b7oPbv37zQ2nQLVQPMHugJhyrbNZtgp933h5F3wM2VzrhNVaNaRirmx31g8MwQGNo",
  "key34": "3dAEDKJiGCDT3JDRpmMjQo356Pd2C1jbrcXwcS31fjRp2hnzbrAK5ZPaWzKhHpi5HBxCFHEmq2fChuB7Vitb9gdH",
  "key35": "2T3Ro42sWcS6EE3hY1RFfvYd24W7PsKd3q2dGaMGomuRUtb23WtDp28vqizH9nv7MNbwR7yT2xxL1qbT5xeDHhFs",
  "key36": "5oaGqrRg2JczHXTwXbEB8ZMgCPYyYZ6kLN3rrfBDUubRuAKHQ5pQ11mV2U2UxHXYgTMnxG8peSVg9SUtZSu7fEVV"
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
