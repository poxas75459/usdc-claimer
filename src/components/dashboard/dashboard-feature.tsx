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
    "2sPWQJ8uXhixMnSxHcBX2PY2Hwr1zyBkLaW6jcVk6zUwbr9pF7phUvgVRjpKXaS7hEBaabFh2JoMVk5Ft9Lrueis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCLoGPNeEW7EZiiL6WskN4MqKUNNr771U6RPUGHdi9QYvqu2GALbew69GHPXcCiEbDZkqDDjtR4BGBCSBX7VUWZ",
  "key1": "2Q14K8fP8dpQ8U8BqwdHuxU21f7zQ4PwqyrJj8ARXrzXfH9aHWQrKKi4Sjs9P6P38Q7NHLeAHEogyM2h4jYG3fAj",
  "key2": "54838NzzcE9bUUqSocWiohZvE22RsCuA2izPJQja36YPiYXYyknCE8HQUPUDgVyrfAzovxdCCwrNNbYYdy366UH9",
  "key3": "2ASQi1NHxrtAJz5j3hTsVS1oA2DZsXy8wPoBP1VyZDG2jWRvbP1PAnhnmuU3cb36SXp4UWEiUVtepFUEjosa95w6",
  "key4": "5MnwPN5GRVoj9wSRibmyZ9kkiMZT6m3PGyjUmdvNvDeswJ6VZuJiiwd6CF4b66MmrrZta1nrqpabn13oJQht8nYS",
  "key5": "5vrd9YzwLxqEm3BS9PpWngq7AQzFBS4ByEXPTESxKgEmcmmnh8HztJoZrvLGDTyWvRnYkbEjctRUgS8DT42inxE9",
  "key6": "hJJ4naHgYXoq7bmg4c8Cmsn8AP8dPh1W1TnBBCgRDitJaiVd7XMfqcAZdXjkMXYTJKp7WiVxdLy62xZGNSzqpKd",
  "key7": "SDkL7UxLwq6pnWiQNLyidMZCg9GvPHjQePzmXNGahTqEhURhNABis2G9S59YX1rRyvFqix3ev8vAuB3APaJoSRg",
  "key8": "2F2uoLQJ92rYeceeYBNNSRnneiUCFTBnq1sJsk2ATaDrcTkL81PgCs3hnQAPGX1jcMA38D1a6br2cbmEoDGXQgik",
  "key9": "3nd7qt6rxYnnw5zfRZ1Q6UQRVrps3hzA9FCoMXBeAr4uvDPi8kqzq5Desge5GiCi59SXSV3DEEHyPNdxL31c7iuu",
  "key10": "3TrAW93RtPywLAiSY7nMAddbqj4BQFZMuMF69tFJG2bdKD4JEhUid17UL3n5Xtp9u9zMWaaQYtf7GDauAAoZKfiY",
  "key11": "bUJfDRAy5omvUUru1PvNmEsUGehboucJm7LgV35A9TMN4RMi8SiLRk6VJAaqTM49FYtayUeVv7Z8S595QP8MKgq",
  "key12": "KbVh6ncRPiyytmBmjkuasUyMSfqPxTRaAbocLSGwtjWsdPNDN4J9svcKP3T3Gn7m9wftPSzZNgWNhqG2uGzMdjs",
  "key13": "4KgETCFhBxxyTx6bYKouwMDvmLwuzDwouniia1ynbrunriXnYaaFRqSVPeBjm2pMrg7HGweUS7WUaFKjL9jRHYhL",
  "key14": "4keiTdeaUyFbwzTdCeSbL3ZunRr2CPQi3wpsrQY14jpCtu3tTYPfB6HRmJtoieHfVfexhi3raogjcmsg4CXV86Cg",
  "key15": "2FHdNoJ4vJngQ977hN8F4jB6HQ16fXcJgiUFCPgmbYSAgV4eGaJYzvgnS2Lq1Q67PbqMfwGDBf5gLDKStKYPxVJD",
  "key16": "2kWsCZ8FKW3Mthtcueo6FBVUHE8YiAoUvrH8rp7PhiXdzSX8A75u8h7t82t8iyVXRh23PvUv92rKd4JRFrBV525c",
  "key17": "4S8XK9ztqnbzgotYhSzh8zNfQt47FFnNEX1RSdjcynHKq3cMwWCYkai3HHf32fJFFUeC1krXjEfxcV4sWznur7hc",
  "key18": "5qVcTFqR73AqwRn8Y7gC1XVwx3fJbJjSu1MudPpUduH1LJ6hTnFmDWW4tPLWeNXY9GR77AGQuYpcCSSBu9SPs7vt",
  "key19": "5Z3iX3rgCGtgPxYowmKfoRfrMSHoqWTN2bzP1hFTXygsG1K3Y2zocgJswiLpbCnzFULDK27WcJrfXEGUL3HmqB7U",
  "key20": "2rh3QByvJp5ChfrVhvYwXA8MVJBi1qePdfJmv9CUDesRQGYXH3bnHTBLGVgXTL5dfeAugkfygy5MgmxbfaKtyaK4",
  "key21": "PztAUe9NWLtMZaWuTRnPk8mUVJWHas9LqeLuB16hM7Mx4jGEEFExU42cunz8EP6e8ohWCgops6kuoMWc7UtC93G",
  "key22": "CxDqTynHZxEiRDqks2udfLZe5cQpfcYFhqtdkcVeUs7AxA5DiD55iafEiZhaSYTHtzFUEwWafRMWVAaxNHAcueg",
  "key23": "2cCtE3j5Exo6bfj9d2jHdx179kd3Q5H3Gea1FveN2jBgjENAgntV92bHvJV7XQiQWpo1ZKuMJArTjhuoinN9FWEL",
  "key24": "38rHZaFB1hwNxBZMq2Q7KgFt69Mn1UhUoirRugSUq8spJNUUtMEsaHiMznhTxyanjKS5G6nyiiiiUmmMXw5yRp9J",
  "key25": "jwKxoVDa7aehRiaQfzSvh68FWyJpVe1FborhBE5mDC1vz1skgzufaNFg2YFSnSXDCbiojZP8FYJz2bAAocLRdpU",
  "key26": "NW7C4WGupQ47q5Dd2q6jTT9QBW5jPL2jVTCDJ4pTLjmWT1ApcYmvckj5j5RmpT33QGuCvYkQiRSuJd1MoXCHdCj",
  "key27": "4QkqYjVYtW3LQTimWoxQv5qCNDaeMea1aouHnLJau9uYGkHa1MGjpqwfgrKVUcET5jQcHwnN21RKQjVLHBs7rbTm",
  "key28": "2orMq5oJVH4h8nomAse4ZYvoCZVWMRdg9S7CzJ7nWpJu6bib6eXiAxnPpsDk3mAPKWHAvSjJEdGfv2CCtxnSqCS9",
  "key29": "2L3mGptquhSAjZj9PQ4d66x8Q326T3YnQrnW7YR5RqPzFa8pFgcxvC4ipWAb9dqaMkq9ua2oHHXGeg1JiCjtzwuX",
  "key30": "5asABTvjcssN1n9KgxiyEp4jPyykUjqNHbiAtfuMiLudJGT1XboTznoMnKLotZytTbnjZATaAbenWSYFu7FYfKqo",
  "key31": "5JLXqXQrdvhLnvjYU2ANh3beYj4mWSmouK4tzM45NC9XCpx8yJN5b4HLVhuhfgMmTfiYDQoP8uGakChTfAyMnCKX"
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
