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
    "3Rw3yHdF4y5GdRwXjVbZfJ5fA4uZm4T7wsWwAEg48EyLpPq3jUbqsgAkn8t24HBGzDVth6TFec2D8M2oH5JKFDrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nQ9HnCM257FC9sHCNDfCkzpwPgSkqccLVtjyQLE74agdbduJW2pi6EFYZKA8DuvVj6bY7QDVCBThjLKMEpKHyPV",
  "key1": "2A1UBFKx7N2uLdPmZdvUg8m54rg5xoJnrMebhkz5SsmCF1D9YMK2Qvwpd5ns9SqFJf5xgDTSoAttNvZHvRfHibnD",
  "key2": "MPQhkYBhMqRheLgsYGrYRW1aMDLGEDRum5Mgm5Sa4fZMVpxzPdmC848nVdgauPeHeGm2eRNSvNRerEKkzvB9ZeF",
  "key3": "3gvu8ZoxKssxAn3d6ACvNw2UZQ2BSLFz2t4eYGWyHfJ6VNqo2RwF163YkrbaWdXG4SjA1gcXo8eDsgy4LCuhzE5z",
  "key4": "25PGsouXGnuzFxfvSi2J4iok88k6cvERpSv39LJLuALSN5mqLWsMFLa74ESdTcrumbcTxEEoTeqKgeE4W1ud2WaV",
  "key5": "2WuLE9iMhbeCPoyz3uggRs82ZpCSmooJefFsWuBSX4cvMorkRfo5vkobJDmEi2WSnoVXbpQb7bZhVF1mmgTKUdxe",
  "key6": "b73uAh4PwTkaLL8LQcxJ5h7igHaifLZdsW3UypbDMQK8YwgJWvWwWL8jaq1g3jTWMEXWqi5bssxu7z6j5QDckxW",
  "key7": "2QU1B6ceTRwPcPncu1sH9JgtTcnNtasboR4pwTbdJXMrLoFApoCkRDJofKyX7RqPnXBscvqYVsYanh9hAuGS1Vrq",
  "key8": "66keuRH4hqRDgZj8wDKiVm4zV3JDnGxiFTKq1DicSo65uLkho4medyT6BYeYe7BpL36p4DRce6iN3wUH59QXaxYH",
  "key9": "4fQ45Dyk1GfKsPq4otRYBY48LnXJDYZUsg7mTsGsv85MyRMmrC2XZwz5Y9umsE7Mv9wpkmC5ftbzvaQs9Lu5Wpzz",
  "key10": "2xQqwsanmGyJQezAdq7qMMpt6fjQe9vEXZVSWytdVzr7w6Gv59D1nLmMiF8D6Uf3UULkgvHMTok1871D6v7rUGRu",
  "key11": "5HGhjgKzFzpNxUqaKFaDJXG6XhTG7PGexBs2X6DfUSqHGs3yn8AFa2j8MXs8FHTMqrUPtxTojPz78RKnS4zgVQLm",
  "key12": "YxfGxSzoEk73VyZRyhCxQbN3PELqwWcURzq4HLrR6ieF9TuaPYgyy2bJNsZBVFdNSi2d4djqUFKD3KZ5pD6p1LH",
  "key13": "2dBa42VsYnBdTXUWyAhwA732Q5WYddB2YWBQaexsQZiZqoXeXec4273owuhK3qQUEYZ37iPEjJeFX6UBjDrtSr24",
  "key14": "3hjQPGDeRfLkGRZQK2Wf6qs1DRYTJPNUpHSsCkD6TYYQ1hicZ89w3XMqFZ2odpXQyEW5tKHNYZf9vxa3jXxvcW73",
  "key15": "GJVSat5hq9mXwu4TH59hn3V2FZJaahDFGwPsA9kcBoYT1HMu4SYD4yhX2s9Es8mZMLni1EFiHgmBrMBsV8L5Kbd",
  "key16": "34YePyg7BWD22bQ3ZVBSznLdC931uD2CwpEjcFAPef68YKszMco9Z9XrmhD5bzHN7sRsQw9TyqBoES7me1PTh7TL",
  "key17": "2RdTSkiNHRmTP1UJyz4TvStqc7HntVma9p3MpwLPXxDPD21zGSMahPRMYffmQw7n7W63zQPk2L3meVzvA2Y28pTp",
  "key18": "3KGrN3o9jQeNSu2UpLCNDo3mxGs8AmgEN5hSDBHDhGKs4eSiy5goBt1jS9W1cXMW45gYEE8MDvMQ2Te4wUXZkSYW",
  "key19": "5UznqQsqgrEZZCbAXUJgmjedF6AgbuLJVjy9goNDE9EatoE33s6S2LyJ48L9cLq2ZPoAbTFGE9NpxAMWxLeHfDvn",
  "key20": "4zngjTgwp8f5cNbgdQpDSx9NR4kJdyVpAGChKy78YHafwkyNnk3HdFSyPoRq4Fo9ZKbpqNWVcSeuajfACMph14ZX",
  "key21": "PwqDS4BPPaLyVyFqR1ThbnLVvWkuiahUoz3S5BtrXYo6zK4WfdWaPcoUUEaut7PaYxQ7fR9gBKcNNzZsJgc6ZnL",
  "key22": "25LkdibNt9KjaZcDJhMVwA1bZnKAVhezgsFoireTo5i7bPsReYYChRQUThFAUPWx45tNZ71c2C4z2B9jAFSXv38R",
  "key23": "5bTuDgJFevbMru5KYmSMYaTn2iQXLs4aGCi7nB9DjSGX2LyJUSKuJ9mHfyJeMLPYT6cujp1dWz5mvucNoBrWU9Dx",
  "key24": "j9pvpFwY4dLb8CFyJvdB7YKw3rqHPsXcMf5Lb4ag7p9coxEb8cWWjWTaWd8vCBc7nURDk853gbH4Eng7g34KBUa",
  "key25": "GiHt3U4zGKAxbthN3FUwxYX6UtWQX9nRQnYjY85AXErBudUY7iy9rSGtVW2hHGQNJzYQgaJKLdC1nbjPEwKhKHz",
  "key26": "3f4Pfh4v3TkHtp5ET1JBqYJhYNyHojwFwUebrbb42rJ8eCLVgyw9wUFXfBDADKNnhSH9hJm5rXhQyE2CTntqfnAT",
  "key27": "nmcK3sao2SKRChSHmgMVFqq4M44QjguL2TYvPj1bJDWoFJwp7UM61HmCTnrjayjoULai4V6sHW5zLctQZAXtXka",
  "key28": "2ZaEQS1cnngR3tFrm77t9HusXNGWfn4gT5AhuDwDzb4e8ZKRHnXakk5wfMnqeEtCDVR1i3rwxA4iMLDeng78fixA",
  "key29": "2Denn8V91YLXXAUQHcvHtPYRqGzckGUE4VZ4Vbz8KXWGrVDSm91za6DFG28xAwdeA1rD5fMXeY46YWCXokJBacmN",
  "key30": "gchoHtoPptgEVcy9JSWbSd3EcPHiKAVF7se6EmRwYTTJtZtFNZyAEVUTaocgjnmHSNgLqmsZG6atHDrhX5qQCTw",
  "key31": "hnWMRotWymcT4J6oXF2TcEUb4KfCFo4rxWCvJ8RTqD3xvqVL4eCyZSTMJdrJMGuQdFQATeHuMLtAmMybD9wEC2s",
  "key32": "sU6BWRNqh3goAd4Nt9zdNFv6XGF1wbgBKnDDD2xTkhCgimYv7zN3gCC198rQgAF8P62D6Yn4bqaS9C2VNdNyaDg",
  "key33": "2avub4PMmT1Ma2youeWhpadtLcZ8xCPXS519YfDDoC4kehhTTbi3VANJt9p78C4GueiCNECekaCCKUSnFZJWbbvD",
  "key34": "tFLyaASi3LduwcouL4ezNRfgwGCDDSFXLvM81eGweSXNgVivAwTLyBUtfYUUYTvZtK43Bb6UY1T4fcajF8A5gJc",
  "key35": "5Nk7XikZNArFXSC3rDhgBLaWZb5ovoVTtW3SmJBBhjrpMRWDeibs4zrj2z6gzwb3hQFCgk7L7ogMvsnFAqYT9ycQ"
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
