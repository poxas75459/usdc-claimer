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
    "29JaJC5RQrZzfHkzbA466QJrm5qdXCm7VoVMYXX7fD9nQ2DM7YCF1ALrgqPPU63sAzoSem6qomHPLs5U53dMWQMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hy69uTfTAfYYCbsQdkyvmhUQ8iBf62Yetu2PTFBRUbt4BNhUCkjCdMawzUV1gnfm25Sy5HsQ6DV5R26gkp7z4Wz",
  "key1": "93jYqVrD1JqeoMvZpG5kNmhhUjdKZxPiqeGGTDKJMgH7REEJQU5iwYi1mpsVwRVHVTZrLPNeQ3CgvgSFjys9XPi",
  "key2": "4CDZzuJtojM4W18GqsZgon4HXg3K1CueMocY9gzDN4j6j7QoCU8db9CMXSJLNNAmMSiAwpK47R997tYqHaM4pEmf",
  "key3": "3VtFBJcCx2297pd7D8PJEhzB31uPDwfHUzzy1qXBr6HJxvLPFHcVzodHBQLUBmjz2q2gz6dMY5jtohEEfva7iZNW",
  "key4": "2NBnveLZ4fbAzkATb4UdQ4NyxQawNm9zpkpkyiAWmsiieHvDeozczngTjh8sMeFGrUPtmd2grHMZRD6Hdse3hhKF",
  "key5": "4L3WNAVgYQFY1ik8ZcP4YLUSzGxUVPu3Wz8B6vkwRsQVFq9LAReizdTyoRrZcLM7oUHGmmGFPHEgEcgKZ6jAkyud",
  "key6": "4LDu39aNdNgU6spxwcpGwE1kvyNfBFXfJmqxMtHpurUL7zsLNygrV7fvGnkKoepQqJUP9mq7FbyxJrNgmL4SrRXM",
  "key7": "4fkUKaw3NDeVUnmQuK7mgoZRdxVfcvt8JAytGgsXSanqE9DCt2o1zPARmgNwmV2593K8bCxR2x1FFMc6P52Tdocj",
  "key8": "66MZ3aJHhFYPR1rao7FTw1njKt87dzdtDaNPLT4YcEoprxe9UUC1TybCG9iDXtUxv2dptKdPXrPupAfVLF56nHDH",
  "key9": "53wThQmE2vY8NuubSv7bgo5xnUYhRkrWny9YQXHaHBpqE9Cu2jA12oqMvR2XoRbFbTooFmBFpDeSh6EivkQbq6Jw",
  "key10": "21D1M44xCScH5koiDhMw4ZMeMjB4rsAw8pr2j69VhFXTNNqWrma46PDBxtUwHokYwte86KQNhHC6AtB4fMnpqRNU",
  "key11": "2JwkcRhJJCaat9Pc95Z2fRJpF2xb1F4vP5Fkz6vN97HruP5pTdYCM6CytN197ZHfgWnbSdiX1RRzVmK6at7tsST7",
  "key12": "3nxvvR8hDX2ChJ1q4PetWvwMt7sWv2CZ9PSh8dUjMJYMSodY44GSeaBthGBhncAngKo4QgGn44VDfDXGQ7rzMceB",
  "key13": "5jjAFFaHimR29YZRF8XLb1LkSmHiRPtHs17nMk99sTeJ5RimXacu29RZSGLPZVXHipT7ZgE1KCkwWMGBNpe6whga",
  "key14": "4YYd912iQ3NxWxP9GYL59WUAuyQx8btuuTzkXv27SNN5QSLRBu5DrVMUuTcDq9BHxyXmN2o7763pYR2ungejVQ1z",
  "key15": "ejKY2hhN1kjd56hoavTRQJUqPAFHnCzzjDWenJnFQoawEb3hRpCjJkK9fsNgNd6FwArZG9WcrsdFCsx5rNYvGpf",
  "key16": "4NoaemHY9Ypc8qGGhU1bgbraJfv1nhCfiV8KycgSXuUZuRyeasDyrxETE4PEbV1P6LeNaAHP8u4hGpMSy5FHWG2U",
  "key17": "3wsMKQdWaS5oGEyE2rpTB3duM2cESqNhXY51acqic1DqZbCNYqyup5325mBfQ1RLx149ist6FEpyCkNj4hYXhGdv",
  "key18": "2novhsQDtU3iHmHMJSGH1zJP2yHVQdojEH4wcTSBXFRzuZw4pHodTsyxn6iDKjq7jDaPQ14E3beLXA1iZBQr46Jk",
  "key19": "3rNDGGQ9UZYkuLrhfMhoQBD3L4VZwp9JKeX34f9AjJ13vH5nrZKbsAEHa1hEzHewE8qdDikFprNoJuZmsHydS2eV",
  "key20": "2uDSCefiKqkmq9bakhfRViCchRaxXszvhA4wtJMpJQMbHnafNHXhp5MZk49jfYSbGTFzNrTnNPn6ATeHz3YcVHLT",
  "key21": "6uRMyeB1KGwXk82tbtFsivNkBGAsEFHhH8cEwWnxNyZYi97x7rDsgFwioMcck8KsmrZd4YQZQSYRspz9ez4isHv",
  "key22": "4JhoqA6MvD2bNpioJ63cmp15N8dDh4VXvrap7afD6nkXMjuHXR8dmPHxo9ohvt7DBL67Sbb4Gj59i1PV39kWZbtU",
  "key23": "2eyDLB3WibpqNLT6AYYsea44CdPhVFLT53n3J8KDUKdAHMFVVXdjgHpAYkxmwTGcmWDPpwyYjAfGJUKAzWKgxqwj",
  "key24": "2A4BBy51KksVE59feGRZdSVcvHusaTzyEPeq2UkCfME1FXMCXyaE7oHtqXUDX9n6seohpuLosVgDqYskvWY7SQ4w",
  "key25": "36zomNTdWcYhSpA5ACR2erZd3CsBqXcQ1KVsBB7sBk32CcNHufrToX1AyHj61ayicjmjxujL5rWLCKm5tKaGSDFh",
  "key26": "2P2NUjL562da4yuLpSYKmNqg9gV3kRRkuBgt6WawXjLYhGnDRdUaTd1p1tDhekkihkdXzRZNbmC4FSX1Xfuz5P3u",
  "key27": "2Wo8QvX3Jv3sBxThKWDmYMWiWy5m8g3JNSqDNu9tq2DwkaGkC2GCM9Yq3wJpK7tjfFqqKQVkU5u9Rrx61y9uYNWf",
  "key28": "ZXStY65mTkfdLU6uFRmi9wr7GNnMkC3NHPrZrEg7VfnFGgLbfAnRsSxriccswr9hrNUNbAUc6SRNPAKix65Ae7J",
  "key29": "2XGm8ntjwHEGRfP4NdQQXknRcjD7Cv1sVNrSXwLjfvD73sLzr4FqNsYYQ5GSBnUgZyvNPMoqH5opoGshkq57qwva"
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
