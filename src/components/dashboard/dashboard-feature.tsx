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
    "3B67GgUCTrjbuymLnSRPwM3yS5WMmgmomthvA2GUdatsYcRYisWBFRo9AhFvGo1bXFDGY2sCpqZ6Dm5wBtQsBkaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MbadyV8e7t7PvosUGtz4rBM5HseZQFZegLfnrFiBbkH4CnEdwiVafSLTxwirVD5DoYPCzdVC8YoCDnPVBk6tAzT",
  "key1": "5EKVtcR22wayuFuTpzMagXvU11Sajubfo3aDo8oe2wuUe6dz7xmx6evjuUVsoYgjsa58aZP2nbucV25g6UYNjBAm",
  "key2": "2pTcxcdAxfdaGPcX6WmCri9uD3KiDNaquMtxzetLYAjgHy2xgyDoNawaEpkEU3BRsW8FoPz5BMWxPd8uYuJP6fps",
  "key3": "2rZX6D5V7EqKT3SgetvRPez3S7WXhoUTG5hjufR845n1USRzi1CAV1ACCfLHh6FmhMrKzomFbkcyk8HhNDZpToRi",
  "key4": "4MkH2DqcX5cciMC5FeZqTM7gdG5TPCCrDje8pcrdjSUGd8VsfUGhkv41BV3K39XS2CtB52EEPYNFokF2RrCHigCN",
  "key5": "51x2HigQqYLrVVAtju4Ls7p3ekoNAHSKNJTfy1LqXjxBqKpGiY9mjAJQxmqRZMy9HVrR1uGWubCRciRuanusse2c",
  "key6": "5Y5G9oa9zMCZYxmSwyyitHjHCmv9dQ3gPYe5ECgQLyTaCm6etsDko3unD6ep1pLbwCkw7b5HXzzkAXmusnDCBaRn",
  "key7": "3mEJpBMh9LsukncM3SvwFYd8YKTSPZGTy7yvTuYom7nFJQhuYr2L8uiYvCnipraVn2nivsvZgA7uzJsZq3V4xtjp",
  "key8": "CJ3792KQsdgVeCAQhMYfqE6sCurbaSSzybLeYk1XMFTQ97g1kzgtHD8dQ4JDQWRr7TfH4MVjgiQPcA3hEEDxM6P",
  "key9": "4ctXP3WsP13cQxgE3TRBuUxy5unydFe4BLV3H4zoGJWYwKfsPcPqiiZjejeZVNi8UJczV6WCFrZto4cgrUc2FBCr",
  "key10": "3RwwomjY8aoPS2KUVbgLFUAjyfYBeYqrdb8hgpHZb75dxvnQ3BBHfaueqeWuJafk5pcHH4FEyaQ7G6pYcG8DF7gV",
  "key11": "4TaSEtJqT15tGX9Gh1AMPDVmMFeFVp31wZTpztVJFshxLyYUEiUMoFuWyzUDjQz2TJT4R7NsqNtRpERr1yUsUiGU",
  "key12": "TLzGP5CuWnMCGuQydkpCvaiGubwmcZBEeLbQEy1EYd1PGoXGKNANadc7UBhAf5CNAeaTGHG884v7QL7rofXq2WL",
  "key13": "tQe2An8YtVHQLypkTKiCCCKSAYMrR7TurFJwDaA36kmp787E5zMg2o61MWkG3qbcA1xasWusuu1HQ2uYYqhiZZq",
  "key14": "7onctCwUydUHzqEDkosPkwFZ12UVfeKF8UbncsUpgJuH3G5ncVM7HbwRnTYN4eECCcXLjEH3Bi7DVwpbjmpsNyK",
  "key15": "3xqhmFqMfrZTavDapJukt43cdy5KNunNTJ6jukQzs69BRdQDsJN3n8kHfkg4q7WH2VBbdMZpi5jwkqBUrPdBhF6C",
  "key16": "58Y9oJYfoQ8g7Ue3tuYuRqhJjRkN8nCZhfo9ed5FLSDncjcTkfqwGM1cqrzNDuCVBeBdN4KpvwWe6b2Aobt4dcFC",
  "key17": "3FLyL3ifGTSuRTDhWdNEnTpU6cnJzpB1HgZFFQpRyEx3YiQHcv5kkQXvHdkkUKi9yx7jgn5dUpSZfWDYrvBkQMp5",
  "key18": "5zZ6BJbz5sA8eWH9rySFxY84obigK7pXhsA2BXKeAreYqVGVomy6aiYqGgETzVuBLQS9xFutunvACJPGcRBfCovv",
  "key19": "2edGVcrR4uEydpf1prjb4FiRVipTuH5UGcPBmVH1SSvU52YaQjDqkB9dE31Tw4NwoHEUhkKnu6hbrRg7s3pCR4QY",
  "key20": "3B2at9zgM1gMi6BQgwnBvxoUGYoQKKYddMW5UHcN9JTAUbKRVdUwvYkzQh7uJX7SZa7ZABQGimbTJQsauq2RUjfr",
  "key21": "m8UYyYHUMqxrMwXxF5DfVm1zSaVPWRyBxETPQrm9rBRe1TLbbkxvsZ9yUAMtLBrJ8P1SB8dcWD7TVkkZBKUxeqF",
  "key22": "4V8hKS72xKuAPcr21evft3bNVnnPzTKd1DfQ7ykXat5ffjqboi4BeRMUks591SBtDY2rP9RqH5Kue2rj2CW2eucN",
  "key23": "45Qe2i4oJEndSUsWsoVx1qXeVJAk1J15RAKjcmiFF9cg8rdw1xTymmm6iQFx57DntkiMKwcVA9R9KSXDTrhfiD7M",
  "key24": "48BW3QG3QHYN62xnitxE6NZ2evygQv9y2yAowaeYNNASYdDUP4XdJxGeqdL1axGXGZNcvX4d5rCKncMEoLwpiy88",
  "key25": "5aqoRnEHZizZd8DdjNjsThQjt4qqZwbDDeCwwbtYrPTopdxVJV1AvqSe9WsgL2AcTWVPK25uvDYc9nvdvT6Zer3x",
  "key26": "44HFTzr7LpnMkf3irKpuBqwnCyEFdbx4Jiwp1JvqcLXPVfvKTVp5tnWspwtuiJ42VoV8p6RPo4zD27WBn3pwGCrA",
  "key27": "M47wQ3m93vsmM4PNfmiCeJ57tmSgRojVAqXfQGjnA4D6qJiTSMfUiWVP5RSLUpNcrBAA8NCDbKALQCABai9Z5rP",
  "key28": "agb7fje8G1R1As2AackkuE5H2dvESmMSNNVHc3ijku1WcKHfzNHHAECrjMui9sBbPifYFZBVFqNnJZsQqHZ82VL",
  "key29": "rr1ypJcdnDHU1LHacJS5kpoGG7QCd5CMTDUXzbnMddGUctER5raKz7gXSQfZ5TsR8sPKetSBHSEf5oXLtyNLC7h",
  "key30": "339zPLNuVKq4TdZyj433Nm5eVbG9Ntgc3adfKXTXxBLqEWtZiGd6HSiwt2RPbV7fk4brNmSo1bzGZ1WmXpLbsg1p",
  "key31": "4BUoviLGSseES7rprwYTvR1PFj5qprVC15HjFVK7nMGk8QAJrnwUnBEQyNPoFpkSTNYZD8aYMEeteRj2wvzAYHAH",
  "key32": "5SEzKu5i9REjPG6JELj3hWEtaD223EbwDWjAtXwEinPcmqtCie4SKoQ7sfe2DrbMnD2P93F3CpuXUWMWfCkPjdg5",
  "key33": "2KDS6vqy8UVvSPfU1c2NkumCWMs1xZoDc2zRSBGboDTBVtCeSVxYaJwqqSc3fETbPXatAr3Hgcejg1gbgnyhdkq7",
  "key34": "3ARBFkcsSPyikZU9PUafvgT32WshBsHkwH2ZDUyb7bFDe2ateciRCBn42pxEV59tdRVQsxrRhQvxqA6qF6HcMtWv",
  "key35": "2FUdVv2Sat61bjXHHheLQh5Nm9QtPBVQBNSV4TCMMFwQreZYXE35giW4nBWuMztxN8ofTkKkuzgUEaCsF41ZZfJr",
  "key36": "4h6ah9E35qc3JaCw7Rk8b5FTQmemVA9qGijaDHCt3YHp15smUZWhdtubKzrKeFEcj4baa3EE2B3E3dY2rHKbkm8C",
  "key37": "4sq5tKDS413owRiiPxbN4fF44sbEUbhA9re7WSt6aGkz8ZbM1k1jjgN3EMAtjZsSZ9DwyXukFsGnGBPwY9rrX2UM",
  "key38": "4i54riihfQ3gctksZxMDMRQYN3ZVnKUSeW3B128Fbi7n744PpiLx9mBq5dB9zUrYobbvs8DftF2d7vNk84vq2M8D",
  "key39": "4LggQXDQotwyjJXfmiuWoxnu2tEaR9ULN5popt36FFRCXBSyz5cgWqXpURhNJ6Zbriy4RcM5oXqaGi5myK1eJvhG",
  "key40": "5F8Fk9LrVpCnNYAjn1hVJb4nYckeiq2mfzFBtqko6ZuSDwTbv8NE342VkGZM7RkgLNWSQP6JMGxskQ27oo4CuXJp",
  "key41": "5jGyAPz86p32QCKoJ8Kh8uKgi2WVMtvTvek5Zp7VWh85L27CeV9PBFZJ3oaaRf13StmeFBG475opsDLCgr2UBCk2",
  "key42": "6wCXX3jzAnUgut6gY2QcUeRFsUGk7wcw5EVrUBAQLUZxodiN4fA8m7AaanKtj6dxSQKo9yRxPEj7ex9kx32ojwH",
  "key43": "4SB5i648wehqbE3Gmm2XAYGr3v3Vr4zR4bvEMwHuUMWewf84DyeFGrWUHdw44xeProXGEYwYYnWPc88guyYSnk1U"
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
