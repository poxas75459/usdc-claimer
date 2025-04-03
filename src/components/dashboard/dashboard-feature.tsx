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
    "5JgC3x95R8b5PYBs348vJ7fcDTGXyHtQPopgN3LbRBmAspemKpRyMiQS2pCsumEzh3WBbvsWhLGj2ScEcigq6VD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLQM9Bi2RZTP9QC8vELAKCT7RZbAyxs2iS8p7t7dpZjGXLoHPWCK3MiFQCkbVVhHf3PnKtddzqBfeM7QM16GWt9",
  "key1": "uSB5LWJUAApKAyvYEVCsPwCMj3cFD4JsjQk37GQZMz9gohaBawNZmSJ2MW1JwpQmVNLXd5FMLjbw3dHr8xi1rrg",
  "key2": "4KUdVzrwcGcshEm5PeSEjeXgtUC9nwDNQmWVwwaBHinXVQa6eF9xs9R9PFcuagKVWctLSFEKqfTPi337PQWArd7E",
  "key3": "5G6onjUXyixXAXkUCW1NXcZ5gqxW4316SHF6FZrwrFj8DdZFb25CAMeN372urQG67o7R19zRSKwPxEtog2hDEiGL",
  "key4": "5U9QhyAGzLQDedgxaEQFafw7WtLVAkSzjjnnUSjwWMUa4cPp2fSTm6zqVanw2kFAJygououPWfjKsHcei4AoFQNo",
  "key5": "5iYTZrfSfwgVsaczyz8Ce2zHjZbhq2G78K3QX3hRnDVkd7tNcFpoRTi2y9FGKVh2t6bPwrtiD7fvcz7VB4ixHJoj",
  "key6": "3StFCN2b1zNoqTQmT1qEidGKhzvycCViULZa26n83iYmJ8mYT5WADCtEygho24Cy4MNYNKz58o7i7wieEYTD2GXy",
  "key7": "3Rs5EbjWKAEajBbvj2TsgDYt7Uwdui2sfWDc4JmnnEEFaTMNLr96zLJyP2vbqhbxBEPskAcBhi8nQeFHWbJXZ7ms",
  "key8": "2nzMppzUt3HYaj8zRJ9hg4VrofNRXK7aozKQE79Bfk5mtBTh5meyqcPPdbFkhWb98bVEa6KFL4ftu91MNZ59zDhW",
  "key9": "5sc3aUtPth8QLP26pTZfJtrDQuvEQ2mzzeinpKzCrpuC9BbNperX5ok2X1aAaNVCYKvqnhPRWXLJPiMQMWK7JPVt",
  "key10": "nYS6Gce7k9qjxS7ye1DT96k8wxM8h83cAFiAcx6mbUKYaBycZQcVNVnpZy1ysPTjRfTuFbR5Vnom2mCQVHBjT2J",
  "key11": "4jGcabQir1uNXjPSoNDqRgkhhxGM4PLjudTHi6QdeEWEZwiPb992AHyiziFqgpSvaJDSh53NqGw7gFHNYyoGFUam",
  "key12": "4d1GzirUqAwmQkzxQjw9qbE3rZNJ3rSSHCnf8hyhHw1JVTQLnh7twJVC9miEny2e7sU84UXtsvC6H9CFrbRbQc3X",
  "key13": "nTrTjAFEyFqmSLTmVGrBvzVLZbNeBizZgNGYLrmNLDWeugL97maLotQmTLuQBFp35K2ii1wcPdMHHPAsbfC54pd",
  "key14": "4Skj4zYTT5CpfbcJd3XLazWDrQjsLZ2D1trDJsiCLKQjGx6NUCGzHHVXRRPt1HFFBEEJmuiGzJrKufKiwYoPbwYb",
  "key15": "59w4cgjaR69bPsWiiGsyP6tY33oUTV8rhoG5oUijaBm13eaq55jYGesLhnCGYG7mYvRJqhFBhk1vRnPrhD7hSSP8",
  "key16": "3seF7aDcTyQAKqWruf7JdG6HLgnzeu9yXrPMQAnNtmGSd9vmVhAAfjRPKNu9R77W3EUsjaL1mzm9Wtk9QmhsMZZS",
  "key17": "VMoCYtBRKwrGEFp2BpnRVp7RLJxLFPYaVDFqBR4P5rGcond2joD7vws8DFYdT7NXzSgrgEnJaunAKr1e78JnDdK",
  "key18": "2gJan6WZBUaoyV72qRHMtxPgxzjm7tVaVT8w8yjnpUxrjXVYgYGeJLyW1LHkZkZDEeW4PGsJgQsvFsNs2Xg9AdrV",
  "key19": "2J96BayAikrAahTn2sw5xsp46VPxFcz6ELxL7c9hdewndAE9AbH3wr5bEP91kN7DSBsyXtKUkvp2Gpw3Z8W3KDts",
  "key20": "4ko3XLFfRQHx5Wo7xPuLDdNSnvhQiF9Jj7ozKTNwzsNq1dTb6FuhPdWyFrwYAreNa6M5UpjzP4UG8aWevYYX4vri",
  "key21": "2PpfAaAQgLZ4oeEcTZRPVLFjUje71T7C27Mh8FG7n99BX67Y8bsXxCwwfsZTKcUCJWH3foR8Gno66CZcWkEaR1T7",
  "key22": "EY8vK2ivRDFaP4EpCMqb2zUvJtMpWCpvh1ixFJKksYPLEFJGS1VXVTrMkHczxoZhDiEh4mzQC5DHXLDqaYhSTpN",
  "key23": "64yq4x1esiAnioAj1thcaTeeYBA7pCsXtkKjMRk9v3ZvMsjZEjJBusiDLrBbiTp4VgbSGRRd9Hro6EBL9Bw2XDR1",
  "key24": "29CMDu9DAszK8YySSytoJcDAsaebLBeSEMefJWfWc9XkAswGXeF1CKDJfpjAoeuoHcs3SAiKFxSECvwGDxnCbG5q",
  "key25": "JnSR37u1rWTc2p17x9GiaQyezavwBNdt27eLmzH1k9KXBqWADiYGdenS5AkBfp8fXC6D5AK9KHCUFYgnbdt2eAd",
  "key26": "3JswxJV2TsC5wH98NdAJHPNXgNLRpQvcVm5zu33YtVqreTrWwjZ8KvYy8FWgPvJbSbYeUGWovHi16h7QPeZcccrT",
  "key27": "45gNe6h4SBahWvA86nWjChYpfboi8nVxX1bq66wtQ6ZSzxQEJSp5BBCABE25dwibkyeAkjavYY4EsDjmBPhkg3vE",
  "key28": "xXEdByr2GqaqKxr1w76C7xdYYBDGhEMkZ6sHWwvQEX7FvveyXbGwUNxN6m7CumV69nu6yguMDhvnUfdYK7vz8Tn",
  "key29": "7uzDanCH787Ri9XNF8b8uW3TSUr6HFiQTHhj3Vq1j3BpifajrEiwfTQsiGuCCxijkuE1YjRwfZtvLVWR24m7dgE",
  "key30": "ygHZyomVFjFur8mgYC8e89ZFwEjMHbvDfTC67N5hkDoG4QAEu4Kpdv86afmPSPdqeZNwkdWiYGxKoRfYtE7Fqxu",
  "key31": "2Y1w5mkKZ6QSXSJ5xS6FpiSSPpaNJuyz2CtZui67ReEiCWkVeGuppe2iEAznbMK9vqr2oqzdTwLCdDv89zW6fm1R",
  "key32": "24LDoDqu2fCanpivjsTXVF8EgvLrUD1oJ5u13PvPQ1ojvEh7KBghdezfd3SUHFcwk97YG6Y1UAi5cj84X65aGGb8",
  "key33": "5p5kYdmtos6G8M7de38RAG2Fa2oHcoXEGCmbNAJ4j8nb6ZSwK3WeS1MpwMSVy1nvfUuZEeghHnD8eoBRgGKwvzEU",
  "key34": "2v3CnkdCbJ11EPDWRtqJSccx225iVCDBkBAYx9SyUhj6qEaVitDCnkJzc1bR2iv5RL6539j1iUy2cMPgb26ihWLJ",
  "key35": "61gejNiUUE4SfdVgDM9Ks7HWktUPuzwy5yNDj5VLS8dZQZcwNB3uHG1qjDNTQSPDBgME8HF72UHtR7UzxF2UvWFn",
  "key36": "3ZFXsiVF234DYQYD7LzpNznsWpkiM5Xpnk6UFWoAj3c7iHE5urm7Vn9AH6uBKA4rjGvWzABQNeYiFda8x44BYKkt",
  "key37": "4gWPrPCbYY2cSBaji1Q33M2URViJBzyLBnDPuDxkbZJYqi8JJtHYsjcNbMzCjCyNad5iGVoxGpYxJmwKAEqwdg7U",
  "key38": "UhqtxBYid6E5PStXsi2eYRiDbniKqxp2ozbGAiv85bsXTCt7MxRgTYEcMTzKXyapnoS8ZfZbNHbDjWxnM1exuG7",
  "key39": "5U1BiP7UyubZJoWMpQijRmdr1PoCNXmtKAiJZc5BiN88xvDq4xv7mMhJhZmQ46TDw3fJCdttgxRxjneXpUsCdnPT",
  "key40": "5BYKfAcZVdnHFWApWzqsKgXA28qXMni3P5mP1qiL6ieJjFF7yfJVmC5jXhKdRTKQFYS42SxQ32KL83khGrk2xtZv",
  "key41": "B2sSzpQB1WBZZ75fCCxhKXM9hAjhZwguuTgNKsyX4RKYUWLT3N9fZ98pnEsh6zVRKjNuXfTpRDoHsFQ2juF1qwy",
  "key42": "UA81tvE2SZntbBC3mtRXegcWHeXCJfmZPuiXpJy9tyUwVUozPHxzs19P38yNvZJS2MaJ1q1WRyBjUaDW5gdhiMQ"
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
