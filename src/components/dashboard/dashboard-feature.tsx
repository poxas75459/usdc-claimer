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
    "2iJqfGbv9xCgJZH8TaAvQujbHMHbzNXsPWRjNYwre66kfjzEguocFLehuaKj57Z7QK3uXPEY2o9udArszTfqcpfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MNAAEiQbQ1D4AhNmfdCJT24Ky6RAXTjDzoSJtZp5XLivUnN3sWFnsCsjz7dJnimyqW5euNrctVq6HYh1ChgxpQ",
  "key1": "59BfFE6GqKjUkY5TN6brgUp27eXfGis9FES5itPNRXDVNAeQnQxLx9NpSAVHpAkoB1RaLEtJF59B816dwC78ZeKj",
  "key2": "71TJaBwKENXyubekDxSLjvWnRCh73QxW2dmRArytSr7KWtAPAeAHHN5cFcsTpYvUB9yb4K76fDVWNF99GyXZRQQ",
  "key3": "5G6Z7AesZryCydDqgpSPZGvGAC11meg8hp9NPrgi2pGCe7MekPpw71QVxGoLwwfCFQbzcNeYtUNtGsgmVd8eJDur",
  "key4": "3PbShrtnTh53dEUTJr69THGjUiHNfj8vPu98vKR5of9aJ1ASdcTiqb2kx5JCGbk5JTnKyTEoniHkp92drSs3Nc17",
  "key5": "5LAUwEh7EoCa1V2WMQadoXrNfLccAeC5CG5PtPPPcbfgeS95J7AtYrUcB4oy4UUmqaQDQnBze1bbLNm7Fs31MNFM",
  "key6": "2WhVGuHCWMb69GoowEQ5DTrnrnp2BxwxSeAotKbh3z3dY5cBEob4MaWm4PUpaAbTa6wCULnNCyhGmDbcMGvHpUTr",
  "key7": "Br3vgBNNKLr29RxotT42bmJXPG9Ptj96GNoSPnPvVQ2w77wTNV5VAuwaUY18VDAJBcxXuRyawSMrDfQ5AUCaLEq",
  "key8": "3aTiSnZ78R5AurkVGoiyKUeUwa1uhSdTFgv2LuZc3brjKjinJ6SADorr4TR9gb9FoHnD5Pfcfegm2iSLtBgtAw8L",
  "key9": "4qx4sDat5GzjoAMbdihC3bfz36F1icyvUBLKUT4ofaZPYTABRC79XoJf3JR6yV851sKmgB4Q9Fm3JTVJb2uaDuoV",
  "key10": "4Y9Nn1XWALD1ZFUJWh54fQUwygLKMRTEugytYmoEqwYKjNoWxSxjnHzsknZDHdE2186b9y7ZZ6XPLVHtQJVAcRpj",
  "key11": "DSPtadf36V1NXFp6msxrTXBb967pTAEC7m2XMuyvhW7CBQfuhAHP2bw8apxCvSA6h3FPH637eh7yyWcZ4cXhiPM",
  "key12": "2X4xi7P4bHijTgLbW8fzGTwraFczgc3eSnx6jk8eKzbnHdbuALUjPYhztnRDySAsovzE34qLzkirKDUSceJ8qGHJ",
  "key13": "2693gtTUzT7De2ySGCkAX2JDsWJV9Qc9NKGNk9dnegnsPqpThht7hsrZhALWagSDGzypvLJVeftfjE6v3nHaDZ3J",
  "key14": "5tsp3LqfF9UeX4qucNFSptGDAviTCg2uN281QhtJuhY3hoDNGRGM73a2VmXHuT9Epv64mXpFD7L5p8waYSBDvqCW",
  "key15": "61VftiKcjxDmZYJwnv29hrzj2k4ApeXKukT7dB5FwktJCBxw3Q1zH1jArk7E44hNFYSgVS8kgVG1EwmxAKiWtdNK",
  "key16": "HGoh3D6R1uAYfGUKUcwnyqtPBhxhasytnH8CzXDeTWRgJL62zMcdpSHMSiNgNauZQFfKxHUTUwDFjpExSuFeLS8",
  "key17": "5egHXiFG9NPQnWZbamAskpeCfMU7TnzGA8zCaqLFuR7bdC7zF9bohixBgCfaJEqeYwm8oZ9ZLuMmzC4SRcRLPt1h",
  "key18": "62nW68pJVTssdu1D6UjThqaVQdTE7fuVELo37WRhryWCHAg5AD2UfMvomTTmPrZQKSLqMabbA8B7B4nbNmCqHG9F",
  "key19": "2kvHnN1bZ6TzWeJbo1H3VjgEuX113hXJzniRnn4bBWkkUzxA6nAHEGTKpLR9zUJwryGHS6dab2Vi3DecNZktSHzF",
  "key20": "251cD8AvtUBRaeRKRz1EdZUhu4YNBTwvpG2NpX9icgPFeNSQw9CTjyYvPuVGGFgkXv7okm2tRRmdD5JbUms3orGM",
  "key21": "5cBHHtseZVfNCPE2Zx4pV9cPV59s5pkfvwv4vYwTj7JQvEYRqrxsyY3rkL8hxTaBTN5bVQUoKTvkbn9DF151D1RH",
  "key22": "3b5HdMy9DDvBkSYerYKLP1er3sa6byqD9GJ5jgRDmTnhmPF79iT9EYm6wGs2immP6ayJ5obUxuhvTxMTySCT5yKp",
  "key23": "35kNNeFZtLkec3ga5dyjAhJaheeEBJuRT8QrpxHCzKPERWEEkMQBMPwBm1nCSBvMg7uyxnct5GMuK9TxBKEkTwh1",
  "key24": "S6MBVUFFeMg4TiNnriBfUCXwFrBgjShTkCVEHka9Q54UJiRyYMEEz3srXgHb5P9etULXxJSxhNis4auqE7KEMkB",
  "key25": "6x8cs8kG1YwZBxXy2MphbPMSikymuxsWFVRXwhiBFAomkBrzwVMnBYuojrqiBYt479nFsyMfnqnv5EE4EvkQWBd",
  "key26": "4oU6iCiHsCxDJLtbEyRumrYgJbtJQSsztMQPMBWVCKFUP1McemyuMDfka9J9Nc6tosLJXrLZoeq5TtxNxcKMowLN",
  "key27": "1SASyd7YAyYFxrToNcQq3JEFvLiqNnCXZ95fDpTbcjX9sa1g2PCR7kRGaqzTUcXW3CEVfCUqgufNFN3oRxKqG9N",
  "key28": "HamG58MhGJKX31m715AwEtFs3rwVBrGnFqn8aUK1Yri6wEW4S4TZb9sGFWuhJvM14DFeh6dBBwGVcKvh3Domy4c",
  "key29": "5wjGFjdcH9RfvgqaaxBP21izXNAkzzyWVsnoyXqh5jgLH3wnL5yU5mRxCUcRpqpxLewRwvin8bbD6wt6FCUqJ1Rh",
  "key30": "3RUtQm6jNvbaiX9iQQMz3rWtTKfFFqb6RbitFBbNzexopkqPT9NHexZPVdrXFYAmmvb9Fx8VL9AmX5v31Z8992VC",
  "key31": "23Lk6dGiitSvGJxdm1V4bjbJ9D7Ni5Mjodd7tmrQ6Ndav6h7qRedM1rvkvAyCcDXL5CaLgNvGmNM5SFwZZCiU7hW",
  "key32": "5Wgst9NyN3811MGHnqBemg1fvPsBJQFExNqG1YSs4X2pwX1x48iEscWsSL1m6Vf2N2fhujNiSZbTpn3HmqhvDnDC",
  "key33": "4sE4hDxunDvhaGSPNhirtkPW54aAgFHsKStP8aSSnSidazDJw1ZN1tqGcMkJ1CkpnJkW99d7i79j5FPLDjRAGnbM",
  "key34": "3xdXty1NzWAsNvgu9yaM5JT7oAB7f8PC2RWhPGu5cLiZ7azqUc5N3CVuVBEebEZDCMR3Difxm2gUhyneGj3jLBRW",
  "key35": "oUvBqnevBk7x5VuGWTSyNonUPb4ws1xQ4hSmjYoutgVGcTWWV4DoUY1m3DBRYAd8r84KeZhMKpAdRJzdsqkJvKR",
  "key36": "62kBN1XMHEGtSoSAy4b3pzD9bFD4qcuUzZuXgFbcnGYQN1tKt4UhDzLpNGHwmeEyBe4ofaEpjGiEV4M1TqSZMG56",
  "key37": "wy749X3ytEwTTHQpAanMFv11RoUqy1btY4L74fxH56vZA6PNWMTNkLat1FXvCRVkadk9u14GwY7xbDSxLbbCFD9",
  "key38": "3emNhoUhH1wdZsoo2EERWfz72n2Mna7FZuD8QxVQ1d6fjzbbv2Bw5dminD3TdNwCfeXek3ZzRf3yxsDiCeBsSkAN",
  "key39": "65fSPtrRUS1HG1e8fiG3MWtTEbpn6V9aUgMe7iuVN9Czy2MXNcxQLutUiyzv2Nk51dnXnwc3WEt4BwwGCXUdxhjv",
  "key40": "eh9B3P77jiGLRKTiUxwLojY46UCT3KwcuNYK7NpQ4nS9B9DTaAJdR642Swqnaj2ZCyVrLF62yikuGqLpb3Yi4Ky",
  "key41": "5NmMRpXyLkTi8S1TSewvwwAXS6R31vCnwTrGpY4ztM7A5SaK3Zop1EquSKzxfL787Z5EVPkenzXkLNxD1kpWJn8R",
  "key42": "67RLo3HkZA33dPWgjE3ffVWxYM6ZrXi5ERxDFZQCiM2nBLfEoNWNfpzen6haVM43bBXD4TvyCdrycjKpW5eHgevX",
  "key43": "2ZQmLQr2G8f6ySPJPtpHusoDxhVSXbBWiLk61zfSza5jzs1QA1TBQe2SGwuxgwVpZxerf1Z811bnEgDwyyzS42WY",
  "key44": "km8s1RqPCZYq8BgvGSXhqdk6HAK1L69zW778hcd1RE99V4qX9yzVTPCqiJSXcurG8w6TLYgfagbcHTVqxKoRZYA",
  "key45": "2FgKUY1vMJuBPyhRmFWt3hbMEKtbsXLmZbBhRA1moKPvQet48nXy5yRxWfL2r9bEi2k9MAzH1QfPLJ7c6J1S1SRH",
  "key46": "MHYHAARRfQbSZKxKpHYbHRnxVsBLskTvW94c1hATm2mcLCobgzH7g8CHgT6BQiNrBgxQsNYCPUky1YgTkUGQS1b"
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
