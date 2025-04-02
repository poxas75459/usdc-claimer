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
    "4HCf813asLWbfcfh4E1YeiRXdPR2EZ5HePQ6HY8yuf57fsYb6VtWfc4JkidSGqxWYiGR7XniAUb174Xs1VqRXCJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZuQuwpJAvURkrXcXYx8QocSjHgVjAwwMDCX2KxEvncRP6Zz3Nw56KGvyWgTm7nqvCT4hfzh9pc3NieiPExQCsX",
  "key1": "63DGxaHzgxAy9DHTsvGMFdpHCB2LyVFo4XvfhiTmpvJCxg4PEQGNK9jT94ze5HugdPEsmVV5VgedQ2YLZ8dnN7tB",
  "key2": "ehWV5Um8bd2udTMqxqXN7RcaZbeS4JPWUdLNg2zrzhnXQoiHYMPc84x4F8kks3XhAUtaAPPS1ZnA1HN54ThA9Dq",
  "key3": "2niXQkLhmzHThBfC7oMuMwknfQjrzeAdaSGcFkY3abC3b3J6eBJxCm9SMejpHqREqCnGEQLJGG4Fenv3ZHrbnW3f",
  "key4": "5ERShmxkUQQTqahj76Q3hpVbH5GBrZFesqTtAZBTB4fdm51q8NvhUYPKEhVjSAWyrfjE2LqGNbTWWmwVdwW7EhAe",
  "key5": "3YBVrgDchPwUD1uipsrtjncpvK7h2fAPCC8wc4emeFZwTxNTuL8dcuBtkJoUURG6DZD8cVz2CRdwWVRibghBv5V7",
  "key6": "1Qk2wB87A2vNZHYwcqYAsFvUF8tp4qVb6UGyDdR2MJHweyHWPB2HRuvbwh7w9iAiPdccADq2dghS2yGbRXMBFQb",
  "key7": "51LNPGK59pDFDEwQZu7WSBxs3z74NXbsyFQP87pka3nq9dfgJ4bvKPeLZwAGCTJUXHKQBC8Qpju8DkH5oF7Xsh6w",
  "key8": "2dGZjc81PJgn9XRFxJ9ev5rD64Nqm9Hk4cAoQ4BeAriuUXpp4TVWVGyX6aSHX52Rx7Ax8da8rVFm8MYfa24647Y6",
  "key9": "4nHgiUynVTUV6JSHGeQ4VdCzbtSdLiLGeoPLrLvvMH3GRe9nCKyVzyhGpxNH7WbcRYWZny2xAMvDm7gPKd3aDocV",
  "key10": "5QDWAuZkgrJsGfUfdkAsoAYynmNfLwVFrXSGZtbtC8tKvZzZRAvgSGA22bDz9apPyrLMgaVNP8bqBPS5VftaeCG4",
  "key11": "ZdG72TWQEYRqMFvi8G5Ees8heheCZroCc4t3VVD8DjYEGy1UVoonK34s6YpQsLE2Zwuqr9sJFwCBWBqsSVKzDLE",
  "key12": "2u99q2mNMyLHztc44RNPBFRZ3JbwNkemm26BpXHqYSuujm4iKNZCNAhYEYA6asTwSj9J4H3m5HyfedCzxwQ2n9kt",
  "key13": "24JdJjD8QJ9MERsWHjNLCmc5Cmn7CKamSwMQVcQbFvi5t6npnopthMeJv6Y9Mb93Z2pdQ8C6876K3H9rJbDSJd6i",
  "key14": "3p8FNARJN87wRA7gspNgKftGYUP6Lc3simHaPZojqDZzcPYTC29sKTD2BwPm6GdJG8FSgycWUfa3ssesxS5SgmwE",
  "key15": "2DT6t1pahQieKZy14yTD3Hwv4rvKkdLFmSCrGjqKMhsNGx7y7ZFjvH6v2s2LeQ1rxcSCuXShhnX5Ncjx5yEeroSN",
  "key16": "4GdFPwUaYfvYf8twLShv8z1mtbUSFvirrURXHRpFREeKexD3EmzaMgKekts7WytbznwZPYMERDWRjawtJot9Hgn7",
  "key17": "63untr3TJcSYwqhc4e9hvVxg7Az8AWkp8GdXN64MQ4vUSKrLCHfbgxj2bKbNfMaiDB5mY9qApgKNiK4qXYkneQFo",
  "key18": "2t5a2Krue5CQFvvL7LxnWu4LGXnzeRkoYGWd645PW6Q55fVHPR5gZWqevfKtT2bwcvtb2hMGQV78WN2rZErSBjzp",
  "key19": "53BUMvAeqEraXPmefSaef8FPuqUerZKvgFcpXoQ8R1xwxeWVYUYQpLVQzhZjAixHdADomyoX4Q63ZWDVoY4cTvm1",
  "key20": "49TiND1L9u6dEg86xLsfHi3fco7MEPGSfhJMjGC5Yy6nwfSnnaNeU7Tv4UiEvDxvFuQ43oQH4yYTc3uh633LHFeQ",
  "key21": "5iB9upQkQ3DX9P7txJW9Ht1ndNHEcNPEUbhPn9oy63RxpNcP3a6sFbnUD8Xk6ac7fzpFoRza5eEtLsR6khxrwQXZ",
  "key22": "5xFdVmPshCWCeKqEt1dvxNVZqFHph2yamw9TuBYpgmak9wZZBrdYDhzZZaMtSCDAeUPg4tb3ANWfBcQm7Ar3gpPC",
  "key23": "3ZYJwNGT9pQjCpgBeeFeaVrB8FJpTcE2occ1vSDp5dDVvPp5D8MAC6Ua1pSzTAqghcEbd9NUZLoeGSZ7Xtf9NfLg",
  "key24": "JyJNLop7Tzy94vNU9jSpxzh1eU6BquWHnFCKopbNkPyfuZQPqmfx75WzgSn3JaNMx2GUS14UZX63kYyJA5xV89c",
  "key25": "4yBUMdnZ17gobuaBmbcEp4B6NH9rkp1tKpmZP1Dv59KyRWCPH6iYoFbATdLhJG1EvNYjVkNGfFt4Tuvw1cQc9xmZ",
  "key26": "4ecLHt4qn5psw9GWNvJwNigsJKojg7v1KbQc9A4isZmb5KtKC9UgFz31nxuLmv3HPL6eoDaQaBF33u1NsPMgNKRF"
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
