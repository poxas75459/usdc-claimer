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
    "5kR5vKz7gAShLiydpiKLezknifHjAov7WzMuqsDAXq7LEPLjRRXpT3Ur6yoFUnAXDRGSKNshjRv7HfLpXfJQtFpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qmyi2Cf7ufTUkFhV2dfQXZB2fArMY63ZSYAhKqh8dB8mbgxmcUeSoKKhjAuKov1KXQT5xtCrwQmL5pGNbw995PB",
  "key1": "2i3NjJ9btwJU53noHe8fLxwEP3Pgoxz1F8RSSxSn2HKLJD9273HK7NAe1PjGL8kXivQ8NofF1PzgWbDiQzuYqWqk",
  "key2": "2ewzqspMd79qmyxF2r5kDwjGBdPNahj15LsBnqMPhEDWEM9N62ZLQkiuxy3GocQZA9hVngQLv5B2mnVdzABaRaEo",
  "key3": "5hATGgvoorbkkgkAGTZHRgDad4526DL9V6QbTTcswj7maiyGsCub5ZkvDs3eLZYChvEZvFzfgNDmwfCpbuhTzjoA",
  "key4": "oMta9oACnsAxWuSBXcYqwDrxjiRwNXcrQUKs89WWBueWjiKdHvRKZPSfZWD9FhQw6GKw9gwZC9C9X9a9gWBfnG8",
  "key5": "3sSFUi9cpPHQUDogaQBgN1aybSnwBygHEpZZENrk7JMbqxRRXaE1hVCiXjYc8n3z7qYStjVP5TNttbL9rnQucEZv",
  "key6": "5NGuPUWnkau2cx5Gnz7QWwwMe85AA29kxaBko9oPr2Uo2S7ceZQPBYpKys7U8V2HDdNGZLWBTGALsVWB81qPHAza",
  "key7": "5mYKJ9S8i821Bz5zH11WVwofJrWtp9LCcHherdAgtgMqe8futVpKFtXgxz5dCvo76aorAey1wAGPtrtG7h6Z3ZrV",
  "key8": "3e8yEnAc8bJ2e1CLcpTnwPD1fFv6h7sQTEFrhNoiRgLPKB2ja8g7eEFrinEpnUkHe8pYVtwzPiYhMb3niJA9WWKr",
  "key9": "2bjX2NKqy6Fk1BQDdJWqyzGWWS7DMrD9Asw3JqBAvUGXjrXkhPFcwmTpLnekdKGyyxwkRHQd18dKm3FKBjG29ig5",
  "key10": "4ayucmGd8jVHqThJUF4fVm3hahWoLf9a7SyKbMwNCP4a36cS8VXXg7G41uP5iFcF4PjDFFTbPrwjknMXG5TzR3h5",
  "key11": "zGFnfuwFwpL4sxTKweLxmTNmU25k9PzPx7pAyFvpbR1qDDsKzwE4yHgAQQT4U63CKaEV2Wedy2Asn9XmwWpcAsj",
  "key12": "4zoF4gXEae4Qm99EPkFf9Cc9VcXp73SDz4tDxYT2iUVjjMFuKaYPdWfxNV7Rf1zb7ZdxuxUUh5LgYRbGeUkw8pHQ",
  "key13": "2mB2HxRyfSxWXu5om2ERmvYc6vKB4Y2b2AE3dtHixW77ebAVXC3puHLzQA9qVZXooDGVXgBpHUZKm2UKGNA182BF",
  "key14": "4mbK1Cg5x1E8mVAVtzcsNpVHXL9ZF4i2rG4TYAZ9mPiLAeV7vDeh35svVGrVvTJuTTAD7jZ7zLKSSxGMBCFdGn3S",
  "key15": "5eCZJNTZd78RUskJfpQ1fBNtucAsdbZt55MfqHvoHFrNx9jxGtPfJ9B4FvFeSw99MuATHURY3j15S4PDSCTJCBcA",
  "key16": "5pYwTEpwesRe3RhXvCJrEfV3n1CUPcvZ3YJSRLjdD9JAJx89HiQbCobGZAEgJDusVAnxivMN61moSR8NW4p1X7Ma",
  "key17": "3URGDYS2tTjQxLwwf7eU1GCChAzr7vz4uupcSSmzxKkmBmqc4iCfxQxp2HBsWCZ2kCDeub7rfS344RvmcRFocCgU",
  "key18": "z2T1aUVC2H2NWU1EWRFFSKi2XrNHnUKWkJh3K8nqzJz8YGfroc1vPdp8bnugy3Vd1Aip7Ddsi6NtuwNzF5ywhub",
  "key19": "3yZFGTm7v9U3GfHSemgooK8P5SHkkMH3Ej9peQYq448uS2VeLCAXayapd3gv3LQ9cUrtXG3RbBy4c21WdjNEZ8V8",
  "key20": "4UY1GvLb2dcFSiNmoHAeVJmkRbGayR5jLgurfyJ3imBNr1BaGqD1ASCN2TUxw69NwFc6LReM1m8bpycrW974gMLD",
  "key21": "8edvRFYraZ4NJYTBPyKR97zoBeLNk5McH8c5keh971KEmNbXj1MBaHSFVpNTiSheqvUVKuKsnn63ga5rTtJ2fxi",
  "key22": "8AimigNyCs4BCCxRoe8wWwwcnaXchL93He25a71dnWaZgYGeB8XWggmYWY2fa2pozXS54g6ryDfg8ueZ4iufBLT",
  "key23": "kXdzVSqnu6UJTmgmzWq5ZwjD649FcUbHhdr2X157ipafhSanh3TMA7taRUnKFXWZZgfzoZjxF2AnFxR81ip7jwo",
  "key24": "5i9KPN56Myzpgu1c1Zfas2p8i2tY8AeLEkrEA3yiEBP2ew5ozSjznEH4ArEXYzcpA3z1LxiyR49ehvme5d9z6oJd",
  "key25": "3gi5JxH8FzteSsDFsuFyoR3mEmLvobaoAuwaZwMfWdVW6FqXayamQVMZE1oNDyB3aKPhpRPaDyEnUYqdn4oZURvx",
  "key26": "5uBamPAuzE9sAFzvwzLjKR4RwDWKQS8kXrMTXVguJLwPqhgnXEXVJCFGGCgdJEboqjxNvGKRK5iWMdY4zPsf6Zzw",
  "key27": "37daYovYkZQvxqBq8KQywchzDqBzM7qRj4HnRziUY7K5s23JZgtBWucAmvepqHJa5Dq7LqoNQk9r2uxKLthQRwmR"
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
