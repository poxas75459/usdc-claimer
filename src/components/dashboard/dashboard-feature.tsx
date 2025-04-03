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
    "39jBnRCmMQHf7AGsu2HmK8FvaXQMVZX92Lrq1pshhENY4UAVXEPmfhjounLYcx9YKWEQz2Sab3y9vGxwY4UbSn5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EM2CY1VsviJijto7YrF6EaEfVbU3iHnMUwj2UoRog4SXaLhKyrbgXNpriguexSfmxcrtYTbwj2hgLYwM5BTz7Rw",
  "key1": "5YXFg3qV1QwqE6vcDCCmT4aTAkEpRSdKw9GmdXmXC8C2YnGsS6dyUk9LQCkfh16HHodhQmRA3H5HSUaYRoWheMYh",
  "key2": "2tDBdy9xna6TKw9JraPmsTvrHtyUHmc9BydUwuN8GHZTnw8G22uvVFvvURqKT4Co3qLeSkeYjWzgZ4uf517DSER6",
  "key3": "3T8tyBk2iwg6TfuFu2RxcyyHkjYNWUee2LqGdPaATanbvKa3LdZCzdmnc6Gq63GH78VsDo1AUyxJWjVwxzs6neKG",
  "key4": "97jYACbTZ3X8SLGcXvoqKtWUNAredyEQb9sdU3dFRGUPtMkZiA7WUHyk1bEMNw4u7m8pdU8VYHpeEsp8a9MpwDo",
  "key5": "c1iTHEEEchthTzhfhECpD1bbDMmZXVgUuA3xMkAABr9ieQQr7wMacY6BPEiTELgkxJfeqvKbbygR5mzRUL3qKzu",
  "key6": "3aEDxhvBffMfRRxrMhmoE6UCtARnVta6FnpUDmcgXJ7SFb7C5tabdpFSU4ymtjPF82hwofREKNd5fetFhubyoBQz",
  "key7": "4GwFYpLfZsTV7MsBf5SyqmWrgueNfyy4hB52z7CbuVpsrEs2J3FFG4BobBY8XA3r8PJU8RQfnvbWy3gprC9q6A2B",
  "key8": "VrNZyPER44yQuPNxY2You86vBA7FtdkVfbYc7KTYSmU5bWKKV4smDoVkeU63UsY9syzgQVrPV6i8EPdUXpZUk1g",
  "key9": "3W4YLTLmvW3ZxoXtMD34Nars9D4dEufeZ3Ckop5e916Zsgs3CA14e5uVwgz9db165UMYJKQyo68Tq7wH4ZYL9M8n",
  "key10": "65i3KLkWbkQT2gJHkZD7e6nVitVQvgih1hqLPcs73jCgLMvnXM3gxck9HoBwopBu4AavryZdzyvvpVDyP3nsf7ag",
  "key11": "2zAW5D9F1krHWqJ8S2xvRbt9ctToWLTq1ipa3pUGfdA15F5a2UkMLaXorLDbo3ymjdNYcK6MAGFL2g9hnATSi3Vx",
  "key12": "3rQNbWCxt8ufTwG1PCyEUkJnYS4YzrCaWFpFDiHupxnUqd3xhMLcKQBjfrnD4LDdNbNSEVLQpX6n2j4Fb53DkKjX",
  "key13": "23yh4VKfk4ntRfUPkeRGs5738tnG54ma3BcBB4hCwj1B967tMCeYGVxXCazzH9iuWxswPSyje2KcdzBhfv1RM1Xs",
  "key14": "3CNindkQ4LJ23oZfpJd6L5s9vF1jw5zA1XHLTXuQjqbLV7HArEM7FmVgtnHrtLjqyRcVFT1FQj5BFmB64uM2FDLL",
  "key15": "3JPVUs21Rgz8bcrxa99gdnr5P4xkh9Q8WaQRuUivVvjjgMsbufYRXNQtsZ6XzQBtieJeBFbMQYwRVRgbdX2DgWh8",
  "key16": "4mm6V21pyvxxAfrx8E9SNNFVd2rMFutuiCgvTqPm5rXdFEAvwM9TWm6KtMX5qVF2fqWDg3XS6vBpNHiPU5nZBn1Z",
  "key17": "2FV6KT7D7TJ4DC3wUrdYwUtQi48YzEkpghxMXVLQCpirDmK3xfVquTVXPG8Xknq6ij8j1LXHEe3tdA7vRgwPVBpS",
  "key18": "58eqKntYaCw1xx1KQHvFggGzQi1r2w92HCWxaGFgCchayZwrs1u3rBnsXqvT9u6SeEegmJaK7T4zYSKktSjyWbCj",
  "key19": "4TxoFoX9MTMd3zvwxvRUWNBtdpZ96o2DYM3W2ZhokR8Nury8JXiBt2ujRvob8psSXhKB4XfDsu3eAb4Bucx9WHim",
  "key20": "4nYPcEmF1DGbbmA1j5VGaqKdz6sRdixvZuF2MsF9pogfCF2kgSL9RE6AiEhMZ2iyHGDEdJRvRJQoumkuG2iQLe9U",
  "key21": "5As95YjqqTBkyokpZkSpCENyS8sGCDKA1WkEctA6TqfUp4Fw9Ti2QATLcXPMNUaVenUADQoMgf3sY85CMbWCaFJF",
  "key22": "5uqujEMnTVQXUMiR4Apqm6rsMkZqtp1BZUBa3EKQnUsEr642hCpwYcnNRWKG6wZ8GXQQB9VvXfW3pFoRrrBv8skf",
  "key23": "5wRNUbkfdC4DKqWi8x7VruQQ5xekwcwbjL83vQ2RrTGqhGPMcHXHBxqQjDQRhiys78Wz2jzMLrPMiBvbB9kx2qWv",
  "key24": "3ft9tzZ7TjNwVgJBGdA46XCHSt8p9guhQVaLnGG5GiAuXPsZNBKGoGTvPDyBTNpjojPxZya3bXap4e7XPv17S1qa",
  "key25": "t3mkeWmks6aap8LK5GJM6xh3AwCedTFMptA81TSVwhnVSgE36MhVUyaDZGmFHLE6Ain1QeWWzLbVanDBUf6fMt4",
  "key26": "EL1b1cvcG2z1UmTsdMB1HMRqxfa1b9xBJbgovL2c5pPueJtx3CaDhkdnn8t7mNvvexg6Gm2Go7tG6rR7CA6PT7u",
  "key27": "3KDSJmgVvCJjXEyfmkQXkjaYeAYCDqAjN7o7iSoypyneJpRXwcH281Rg54AqhkaFMJKpdB7pbwBHhMgTi1wpandH",
  "key28": "24DDxhuuaXDzTkUub3KcqtpGyCmidP1t7Ca3cxseo7f2FgUqE65aMoURfQKGoGnA8gKJS7Jc32kEpp8wDVDEEYAg",
  "key29": "25VXcY1rML11DZUXAHhmcxBrXpAeu1yZqmpQjX3Z8uam5j7YBPCeq88rakQPeUgERNpjzL223AhvPCdLJKFHuQ4H",
  "key30": "499bRa6xXqHWM5bigJnvhYne2fd6vfPzkRVycvsGfuLWbtU36umfJggj6bLuDDEcSUcMBfFsVo823dUPGBCvCeaq"
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
