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
    "2CoCYR3Zi59k7TuEgiPafPMPWmjftJnpEgTisd6B3qThCvqvsaKtXhdHR6szsaHjBWgHeqRp1cmMy1Av9PmFJWCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjadkqiJwEpeVSQTFBwPeNrjKJ4b5su3xY81TtqpaEPsQ9zAXiTfdq7Nj1xJrtPFUXZjemuWGTd3H9AAq1t3S3W",
  "key1": "2YUqgDa5MHY5D2ytwiVURjeL9LgNh6LX83KEN62qZTcowfwjaRu7RoWoEjV9Q54krWucoYQHrHgHQVMYPopj8eUd",
  "key2": "oZPVbTyKLuH3bVvUsRnTGkjfCsWxpn3FxAzKi8SaWCxBH3cpfxmfbCyvwnvBPXiUjJeBtHo76sbEfru2i4ZsRAV",
  "key3": "nMCXasrtV9Fce5FRGJ6HkXmzoqm8oy7oMs9YKLnD2qkPew6roq8E5CfvXGSC3YmFH4X1ELjuMDNTueiaaSQmad4",
  "key4": "29BTZ93sZ7Mj8paZUgCTpQum7sTpT2d6NSFuR35YNPEHvMwXJZBNorVcJzNW6fh8YDRakc616WK6RbcF82dbMUvZ",
  "key5": "4duG3BjogxV7TPaiSveCWFEuDnTLN38kQRx3djQqCm8ySG6HqM1973hAwftVdK3GR4gyFKk3Ud3QxAAUj7w3VVgd",
  "key6": "5RoUHAcP2fqVcxiffnoc5oktvjAc4YC8q6vT6zi4ThUZArAkof98yTnx5nuiJwLU3hn8diG2cDmvFkYbUbf8mrpa",
  "key7": "2tEzVHsUfxAs1wG7wkP4tRswLRu1e8zPfEMGyKgEoNA778wccU4NrAzFPQbdbKmSSrzUKaH9w7TPEXC33pCrBV7Q",
  "key8": "SXGJM9TXbfMcsSN2uq5GxSs7NYHwt93eKHAtDicD8sS2dzepD6CaYWZw5vFnehrzZXgsogo4SwNYVG9PGn3rGpK",
  "key9": "59AXxP7gatQWirtxk2ps1mMDJEmTk3uYQsfCGh6CeRd4T6KRG1bLfAfm1ZqGGjJ5tyyAvtBjs8ouDm9UKn7u1cuS",
  "key10": "6HJGeegtTEh2wSQr77bTVHjoz58LzD5QMVSzpvXXQGGU76GsbgTVyGWqU1E2pSAEkeGmzjEqGGNhqzbzG8pGU3W",
  "key11": "L2oPbNPPqnUmuSVmUUukNzBTWowPRQJmPamhoFERmc2o9rMBtssWiyva6fyhekaGuZL94fgEcdGSHzgffCAS79v",
  "key12": "5wSkgUpmbpMLPQH8gYw19T2N4jWzPEr5SDXZoLr99uqewdE8jW7EpswS7JNJcfH35ufQJACYaCFVwjDAQB4FNtHp",
  "key13": "5L3TzVHMoy9T2K93ZHyMT4wqQBaJx6sZYfWEYRmeL9VPiTqqygMXFCjefkhi94pY98eKYgVdGpzDtPVxAkA2kaGB",
  "key14": "5RxPaZzxtPCouf5ZyPHwGoi1EszeXXfyNquxkDRVatKzBwjfYnwFjULBpSd4aw17izdVY1zEPUNbhD4BtgaR4xZr",
  "key15": "4NSiyMTCywy6MsejRervpDqYCAozXTotCn4893rK18Zv7DtjBrxtzD4qCqxhDfzuD5wetsQCE8Gor3stB8urhsFg",
  "key16": "4afGVRus1rba6myNUiJKpz8Anq44CGqQkPUXPGiRnKHzCC4LKwxHF3ssrkRt5kkgrv3pb7MEYRrZhWcw3gwqbGvf",
  "key17": "RQ2sAW7e8aYPHX5RGFxjejz8nAfbdftKoQ77NLmuqMboZtddDYX6ozFraiYw6A8AwELajifWj7rQVVCFeLbNfvN",
  "key18": "3gEdsWKHenk2zm99b7HRJW9dH8MQem23UeKiWZgNaT1tXYgsH9pi9bpfRCDQjaUGGMTHJPHRh9PSR8AptnAUYMWv",
  "key19": "4ssxZFUqPkQcoPS3KeMJLUGPipY3Qrsvtz97c5CXceNQ4So9MNVdnCTBvKjVur7N1U3CLizTPPxLF6g2DCDsGDwX",
  "key20": "3gfdF1E1P13fTvqAWyEjFV6ctefLUyXZ4LTqQSMKwqTYzCQZLqwjMCEev3vJY3eeFFTPNtvytqo87vcrwZyFSnUL",
  "key21": "DXimDTayuzeG92MdQNb79uYEPttwi1T1pSa1EoLcyrUnjUpx5DGAZknsLeyxkhuL1DDrZNsJfBk6E5jm49JfgWk",
  "key22": "4TaLdc93oqCXyG4Kc6DpE7h684GybR1cdmcYBKdaGGro1qwXkPXyjy11ycZFhNJvrU62mtPrYXNy3rDGNxB2a778",
  "key23": "2KrMHwr2a5sdMymwqV6ytDeW8BbVTkdRozUk3VmyHiXpB5abYs2rpnapkozDU4Gg7RTvmFVaSKLCA67xEwLMyZCj",
  "key24": "4tEnMqY3QH62V8J3CU39FANKtfQuThKc5W4f6frjiZbKAG7WWUobQdUh4YYTHGUvDXCTVx779MYqULrB6rFWJLpp",
  "key25": "2id58byrVwTRLcZJPeY5R6e1391XVjg2A7bwBmiE23XGatdTZNKRkHuuaMc2coAiLvwvXhPWuyK7d18riarowZjf",
  "key26": "3J2dZJta4feABnUpMtvEZ63QTzr6hNCcfwHRNe37zZYimP93pVsQFFXrhnswmKc1556MArQdia4FTFtd1N6xs5xe",
  "key27": "gXtHJ5v96dJU8FwFbqfQKfgWTWz4rCytaS9JaS3SRkS5etrDsTSHK7ysow5WZTefP6WxCHCfh1yAsZYrs7jLn6y",
  "key28": "546sY7GR3rKAzwR7t22nHMGQesrzgwnFkwGHBL1JMiBd8Bh23L1eC9y1J1oUeSBdpSeK43vHvbaEDKPz8zuCWa2p",
  "key29": "5WvGx575kGpw3611PVgEvmxUvDD6AUPsYfM8XC9kJBw6DmJp4PbEfEBEscouRMGpHGapboAiQnEEXqQUhaAneXEN",
  "key30": "4P6dp3sGmoJr5ZgyzwbLQ1yre7MgUpqwRivcDqg9eiKdeD5Ea1F91Dr5i897KAtR1Qk39Gcf5Trs5pjqBH6cRTXW",
  "key31": "2pgjZoLgnVECG4MSip7MqhNEY4Dio9AYXH2g91n4F6JpTvunzw96vyqf59mYhXqreM4rPtrNvWJYg7YGRiystBAF",
  "key32": "3pZVUFm8JpPUTdbeGvFHa5GepufGM1nm7KPn1VsAoMUyGSwR9or5uzgfS6rA2tZi4ARepvLez1YRgxx2C2xS2QYr",
  "key33": "31K64jjP1Z3dMuNJDEUhB8Daf5oSiDyYRYwr6HDNWKkxauVBCQv3WAKkDa95tajZRtRrkUJTGPra87FtPVbfEat",
  "key34": "3rv3baG5D6QNjsPWTwejeB9Lt9KooEJ1VpmTphT9yVDBoJuZeSTRVPKnAQkoKe7BNvZxDtrRJBPfDwLWTx3VeGJF",
  "key35": "2gZ5712GQ7WAJa2VTMdvm2VD5EPvagbwx9zSR15NwHpXmnYxYQxxiarUXZUhQBVzxfVUg1FL6ERAobb3PQ1xVPi2",
  "key36": "YMKodwiLKeurJ9gUjHm4b1Romu18zzPN7kskoNn8DN1rvkfWGh8EnLHv4SKWUAmNp7RCj7iYrnBp1pM3TekXDAZ",
  "key37": "3XnDPV5jYhNAQdSa8gqkYTySaanTuPN1vqS9WsntBKjymKqrTtqdBaTgH3iMrk3eS5pxE22kC7kg4Hsk5NokvCtU",
  "key38": "BFqBRaF1db7aBSTf71nwD7rcoxt5mhUMcmDi1Js43xQa2UYt8DViL9UjmnYpCxxcZuCUBNxQUAi32NbF8kSX52B",
  "key39": "3hb7MNjkctpx1JsM6MUzcK8uD598AL6no6NWBNfbv1tvwgFJx4Va2F9U8kFF8ECKoH1C6MKmaQvwzrgqECX5FkC3"
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
