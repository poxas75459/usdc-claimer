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
    "5reAkm59p9cgizsamUqGfRdjwd2njM6ct2AUdnKv1NkMYoiDHyRT3asd7SawWXbTxA56hbhG7NB8AL94tsmJe7Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DZyjfc2RjDcGkxHArmVhZrgMay59XmE2V57LqRemwnxFGuPKaMRaaXmT3troXkHGB2NEMXG9rzmQjwPa5KmR2Ph",
  "key1": "inUtQW4uKVyGyKS53jLcaECHv33mFhk7D11SdHTtCiogF8ef2p3yvjuqVSJMM5A1Ph7XXarwG23LeynKdPFWm9Y",
  "key2": "2peyhCdLVhg5NQCDGSM2siYU4dMb8irAC6JguAqmaezYEbjBqkbLJ4tcpWHTbSMqxcBwje79vrB4RCa73oWDyxYN",
  "key3": "3XHktmnVYrxhGg9BkfzhrwcQi7pRoUtHszsHRv6tvQpC7UM2o1N7snCdp7gjosT82MrrWHEbatT4bfWX2287hEsw",
  "key4": "34P4nAfcM1WNyfU8tabvJ9q95cspoxAgf3MuvfBGKimgVF68Yyx31eEcadoGfqrGdzLAE7mGM4EXA76hiHMbpuyW",
  "key5": "3DWYVMB5Q4M1PstS5RHxHfDBamAEqBqPuEiacz9UptjNzEnxNfezGAzqgvjHZwf9DSN2GdnsUMC792d8AJAV13th",
  "key6": "3Ld7tzZYFdTENyZVuL5erSBvhG1S1Rccfd9QbWqEbMVC4NePt8Swaj4VG6XHDq9cnRUqJMjEvAcxZDGHD1QRxEc8",
  "key7": "2c3Yuxt4NMZRk5ZzYvExJtMU4AArZjHaKzjy3Bbxs5dvnzN5jt3yJnThovWARg7juB4JaDXctxCyECUGdk6t8Akr",
  "key8": "7yEE3tdNuteLTNYnkQ4JFFckv728nw2JKduxXtNjamv7GGbpoJ7tBxYrSxHdEGGzzALYdjUzrK9YdfhJrZD5Wmu",
  "key9": "3TpisSR85RcxypkPbBJWaeY47FHS8xHq1go3yMUxvj4Yka83rQLxRXNb76TCTTbBispsZgtt2ppgkK5bgmXAr4Cq",
  "key10": "3XVtJYbbJsT8A4T9DA6AoMSCykN3TTisiubrP5gYBNPishkS5zayZQD28gBYSdabWav6FQB4twKZfH4DPNQKU93N",
  "key11": "3fap4igfzXmmG2zqTz3ayadzLrj6jJktQdAxvEPPUSrwf5hxKjdhV65aiwGBwvwSdLGktSVB315EKyfXMxGEAkPJ",
  "key12": "ZzFRpeTwmEtkCVzLQuCrZ2qpgW9ymcya76XDt8gvbAtFxvMDqG6ua9EyaKnk5PgaAtnysMw4pVBd9FSQWQ1FxpH",
  "key13": "24Kh1cp9ZQzcdSy1oeqHuSzP3ZbkSU8S8rohqLUqPNeEc36g5Sno1224TKnhDE9rpAkp4YcRLi4yYUqek1cDGWFg",
  "key14": "2Sj1U7Xfy2FqHux9JnaZxkGYwNwcG177oFHECMRjcSDMHvv7gvUYEWD9iV59L14fcJfDaFDrtJo8RJ2AbsBrtAkV",
  "key15": "5puSRWeiW47NeK1xATdpdMSx4SdNwhrVTGFqg9hyMPwmcG4cr1ZNY5xbNsvndpVpMwxkRnAfBbwgS9ioNhobVhLk",
  "key16": "4zmKJFJp1KPVgPeNzrnBuunKACiXau4hNusJLczsEv7gFd3gNzWdVzokkJqeyYXnzPyQCh24XeizFRmKfjEnE2ZM",
  "key17": "5jchwHMUvVjdnVwPUyJS9er8EBtf4HyF47ZKMMFYeDzcUAj8e3JxYPCFpy9J72HLPCs54aeP67tWpY575SeoXoZt",
  "key18": "iibqndsm46Tr23f2aZWpShPXsUjx4H8MUEFYZ5wuiuX7qdjZvpFZqQaeXVsiTXDdz9myuQzDCPusgx3372U3GzL",
  "key19": "5RqED1ZHKCy23yKYTWUC4UHqCFnTDcxDujtT7Liwqr7sr1RLwsfWAkHbamxErzsut8osCsm9ewzbg6Hu57SQyFEt",
  "key20": "3zuC3vjAcS9a7Mxi2h9iLUN5M28F1DpcvNjfdse9PmWUGc16FEbRRL7T55ZJuGLfKvSg31pDwDwC5HzE2wQ9J62F",
  "key21": "3FQBbTVPQtAVGGRyiokfU9hCziRKBu8AJfCokFZp2sRXJVseZ6gvbwD1Wuu3Gq9sZ3gGhFXDrmrCh7ZaMe3vvEWy",
  "key22": "3YdjSDPpcLJfJTDivj5dSLYpGWFMucTPUDtNVRosqjq3GVCW2Y2ao8X4QFuEZCdmZZsWQiBCXjd2mXcpf9qbvJzp",
  "key23": "3nrMrVhL1DhxArUZKuz8XkMnqgJTywhWJ2B2Qp4DiSfiYkpaN3nfcbf5kabNencKvYMenqqSorNSc9odbFFx2Vo9",
  "key24": "3tTobFz1b4t5jYQeSaJfxpnDehPPUbaCvUrYgEmoHSYcZkhTm1JpW3eE6881JedaLBadvfMCG5tdWZcg2fy2fKEK",
  "key25": "2Zwta8a7k9s693AZS3adcCAsRS9snxthPrm9kYSn7MaGPsWwutw1Y6WYoZKPRWoY6HdALP5YJ25jtrbA4ncWEbCC",
  "key26": "4HW1jHchMGroWKYGEV8u2XZYtWsitfSfSpmKJUWAvWcp2W93ZrLvRd2Am6zeqv5NZFKporqA1GheeXiUASKH42Mh",
  "key27": "2QzsdGUST3br57EwdWTTGWbkKcGFbdyf8SJ84KmCocdemQ11kGaU5QUkKBPpZHnBGStfyycsNp9oPQXETse4Dvyy",
  "key28": "3MHS4kywDc6uT21SHTnzBRcHxBANkDTt5GdBvQsv2Q8nsV5XAutj2S9DAkkQRZxXg2mt9cDKmdT1vGWCNXPyFvD",
  "key29": "gockGceFNGvF3wU9fYtC6nBU9bXWZZtqu39kHRXSb7ac21An2JDghoEjVFBTQmX7KxvRQc62AZPpHck6rAFs5kg",
  "key30": "3pVPsPpfqdHUaU9XoNYqYZaK4Dbx2URZsJWybGSzgngP9ftcbVznhs2QxMkCvvVoxbaLUxHLMdoGxCpde2UZzhAj"
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
