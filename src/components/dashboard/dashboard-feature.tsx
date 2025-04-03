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
    "3yAF5UVcrUP4CoGsthGJJkcx4FVJcRfmNokDfVAykb6Br9Bws6BrYnDvBSTPCceGbyMQXdoyFm5JsM2dR6H7Kzfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pS5rAgEryhXwD4RwrwTD9UBWXZhfW1HoghnuU2m3scqjYBUaDyPtZKM7p8jTxf5p4Y8PcNAGm8iU8esFbCZgkmu",
  "key1": "3bATA9UPZWazisr9j4mEriBjW3XhMg3DQSK7XeTApTRjLL4FFcHC5d96RdTf3YWUBYfJ5rhEbCia14odbcwToPQ7",
  "key2": "YbuWd9J1CGmj5eP4JRV7aUX7hxx5jevy3DMPWNroZMbbcyChTsHerPM3cRL2NFXeMBaLzZkvaiSVSAZSs3i1xo2",
  "key3": "4jFHWhAf6Kgi5XrFmmtVrLYvoBcaP6Cd1V2c8uQNp1rD1CR4JygbM3Gw8YSTHFa3fNpy7Y7opKUjPWVCh4C1UUNx",
  "key4": "nWRxvmn8yo5PvLUdgEUotakUs1d3n2JPfVtt9jyMNH3B3guHwQ8xByr2LihFXvbfqZzFDvHizHTXpFDN8czAhNL",
  "key5": "2tYc6XE9Z8C1fdX53oPpLYMermbok9js1d9pQ1KhdbAYUGfRzeNapUbF5UvzCr87xyfPfrdcUAvcM4GHpSQKCsRj",
  "key6": "34WWpWd6L59gs1wP3Z71nzw84SVWDjkKwXkLP7wc2oiCgNSGrhsLGrP4NeP8xvJ9Fbd2L7HARqgKXikkgo9kbFCJ",
  "key7": "4rBq287aiRKSF9PC8sA5uTT2DL5kAfVRYuPCcFc1dKhqdhrthYgTQ1uS26qHkEtxBwAaxwgVndgE9Nh75bmndePQ",
  "key8": "Z9ZKeq7YzCBqALAa5BP4iv5GeL9wg1kS5Lr1oRjFC6KHxdNYkZ8ecyt1xcGrbwimrb4XfNcwVBL7nJdGULJB8FF",
  "key9": "7sJycZTNF4WrrpdL4S4EmSrsRXXdxDuR9ApXnQ8oGD7mjYUyPGaXrCUm8LKJ6bF5AoebNJdJaAL1ynw81FwXuyB",
  "key10": "2hgaMKPmK2YwYAnRDnizmRfQA2tHhKNeZz9Yg6QthaKjGJgeExvpB2S71xtpU87HHCKp9znEGEK9123dDi2rJLcJ",
  "key11": "3AbrvLUkkUT3kWYYe2znGYmj967SXYDCpBWtCsdiqjuK21ZDWkZ9f6w6W3ozhwU6BJwTt7mi77d9oZ3TAXFETasr",
  "key12": "5sCPgcMw9krp5MzAXX9ctewXUN1273ptTyvzUPhzU6Li4L5PkgQu4MExFFMX14VpzwZLx1cS7v5qZbLEXWnsVSds",
  "key13": "4U4pUQiP5imUVGRyzYFES2Hdu7f7cGqPCu7c86YHSkmdRxP27qftGapsnkM3un6gYfeJidm7ymQhFjii1JCuzRwg",
  "key14": "oybeb1EzGEnEVyBczsjGjzKJaJjzRdCGJPX7WHSsjZYdUWBNxgJ7B5vTvoLYRGjmfcz68RVmmwC19NNjM38d1yZ",
  "key15": "4XgFSkcGsVvP6wDHXeym3EggmYWohP5zGz66fcmGkaqgACf9Ts9uxSKCv6iwg9z9LwuYavMqLL93tLD2iuFt2P9A",
  "key16": "3JZeMzG3pFa8BgZsiVxEWzvhRE8jcS3EEShPpSbYauqUMA3VVodXCmtSRHxsSvyx5yyqVuEgkwPQgZGjAmMPPHip",
  "key17": "5zqJKSeDSMPCoh6KYAhBfGmNbRsb3VTefAE4bJBE85imkHdwuouaSG7DQHu4inqFLP3qMYXtBC5nLTspxtPQZwft",
  "key18": "59PKCdfWqP6JGQEuZ59AAsHQd3rxWa8rQ4QhM9t9ZpuZJHYHYe9F8MHt1kZ5fgNpyAbqqJdVVtv4wyXKdceFoZvq",
  "key19": "3Ce1tQAGRHGTrrDSrvdSPJNAPpZ5k72D6q57GRq1iEhuJ5eMbGfgGLZnEiWctXcz9GsdQah3pTGbthFbW41LYLGF",
  "key20": "3BjWcPRVUcMyRzE3W4E8u1mSv5585FS5NtK6LfYYdMLL4rrefZ6x9XfRTV6ZyswUkshgWE1KaiJPRkEU512e96t8",
  "key21": "5Xvp9EE2GsqbRy3hdqrzt3cBiNDN42ZU6jUTbkUwcyXKEZ9ox49Ut9fXx2ofzfKpk9ezPuJfNnp3P5qqQ97ZyBpg",
  "key22": "G4zP8yMcXtshaMxusMVSuqkZ3bw1vgw9varVSPYxFRxXtkYMDLVLnQiXJTB55y7brHrV1pmd9PFLjUBGpXRkUSr",
  "key23": "2nJy3VHo6dTkPyKk6db8nPspxCBEQGvJc6EgiSsDtFUDzFkNsizztD4kwM5DKy5vPSejjU8bXXmPucUDwzvV2DX1",
  "key24": "3AzXooqi6rYmU8aqyC4zTjz4AjpSxnetZsEc8Szm9FHwWhfBu3EKQBrWcUcwqdtJyXx4f1zoNskvfjQtnGnHyVVC",
  "key25": "WKN2kwyvK15LHkNJkpi9BbsS5bj3jqT36YemEf67nNk3YumseNG5mvNLm2egvGjPakKdnngvw3gBqfPTF4aVQfE",
  "key26": "5dJZu5eiJKhW9AsxLqQ61nz4mR4vQT47hcKtbhdVmAotoVeAazgNGcYdGR3rEvbo9vC9rjwZHQCG1ABwVCz7TvZT",
  "key27": "d4fsYP9A5zart45RA7Z9nJNtEXwWzQSJuVGjgXpCjVPRJdKNqbvyD5WFfoUd7FcB9256kU1Xz3dCznq5KgbUD7X",
  "key28": "3RDbQ8sAx1KSFpdhy5zEB5HTWTfEcrCo9gbdWJbCPGd37vatKC3tFxZf6RtpujZwY7stLQSEpVUR1Jngbwqvco5U",
  "key29": "5MQ2oa3sF74X5TfHGLbGbLjKb5QgKZBpGATRfRRai2M9ygVih9nh8rHX7WG9JbLZ8JQMgsyaEGm65YMDwneeBtqC",
  "key30": "biS7XEv2jPbqSQRn2G2coFrSHn641EUHaVvHJBzBmNa92yUn1diSS84bsL6UeF7yz5sa1WG6fNytr1bAcL1kAUu",
  "key31": "24dzRsJQm2aB6geEBWkzVpKyTmuKm4vGtPLTmGvZAvXkyoqep18HRCLgXZuLhpz6w1DaqvAhtwq6ScBoAPmhyJue",
  "key32": "54ic3AokCZ6fLpm2hFQS6KTrGrDZxFjme9YcLdF9DheoV8PrAfQf8u4fyGGPnWpGn6vLwrjPFTjTStk4VvjTcjUE",
  "key33": "Wb61Bx4zZu1sot8k1e4BqJqGXkLPu1NLeutGKdA8FaVWzgArgZb49jY4f2WYXDpNmqrbS6EZhEcWF8yr7zKoqmg",
  "key34": "5W7FkPsB4p7rFsWBExiZne2wtXWYzdM5PMdUPkiim8pzmfEchzUEj4yPigKtSseWnYnNnBYDBSmCGowYnqV27HgT",
  "key35": "4FxT4xUkSrnBNLGkypvWfQrhU6rYTDahk1ES9qqeAR7LqE6bGcyGZN7vg23cXiT31po6P9EVphvYznD9TpG8Xo3L",
  "key36": "cKdSuMNGdGaE2s6GpVsoUktVXNqb41LV9hPG4CKFFsFuripSdcnPZ8bs98PdrCSKgdnuGjX7epQtnR8qBjBtpYR",
  "key37": "4ezdaZKsLZiib1sNMDqRecuqpusrUv3HWrGyh1mCJVU2HGDSkQuod8bwwuYP2cxMKufSenVxCYMyc4TSbwyWfX7e",
  "key38": "4Aix6KNRK22aPUNH1oVE5yEnc7FULXtxVRetcV89jbfyTLtjfES5KvfaQ9Xss9HUFWRJExHjrEqq1bJxi5QqUwSg",
  "key39": "2hZdSrn32HE4ojUZkPp1zUGbZKzHas8UcPFHn1DKnd7Ys5828LfC9mjX3DRWBrTC84JuSBCtboiwRZcxgGw4KThx",
  "key40": "2ESshVU782nfHZ3mhPNjn56n6PKTFe5qtbWhQqpgMnRMDuFrdh2EDWijdPvGa9EUGzpM5n1fWwMSzh8NZafof6oh",
  "key41": "4jRLJ7jrJqfQ4oP3NJzmhMGL3Hdx63DdEBp2gm2LbEQg7StVwTz7xBLUCPFguNCji9T99ySB87tLd98hqcTZPQu4",
  "key42": "523mVT4R8oH6o9xVLGymhJ7JrnmEqAFM79j6aqzPZ6U86Svw8VXmqyi7cjmFh2Lw1d5weQocoKYr46ikYGedMCce",
  "key43": "E6HHCsPXsydqUAvg9b64aTuK8C6xybBPvRNjvC1cztr5V7D4NBeE81e8mhyWN8qom18rh6QzijsJcsemHEYsHDZ"
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
