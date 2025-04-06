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
    "5BKqVPdzUrM7ecmEbQwSBiqxjdYX3spT6YsqFyz1kDAFof6KZjWtM6UaLjLU6TwspuiTkHat793tJnYKN2z76PZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WL6WnvFKFcyzn3zc6P6fusSxjdgRMVSSEGKv7eeW3nwf1sxcFf4jkiK9d6jGLe2bcM3tqGvM7a9kAYLShJpFWSv",
  "key1": "2KwWHfarZvHS9JVfjCDfjUDx98enj6yJTJrDTR2f69W4eFDu2ZxiCr7jEztuHQo58tCQiZPiFbwnbZGYKvPUT6NV",
  "key2": "sShiUTWckKngD5ua8hP1vB4GxD7R6gA5KQ1E5kGYYpZvdPRNAcZ9R79Svw7GXgPTt1mzdDJjY8hKDPWcJzVf3VA",
  "key3": "3YH1RGgYZo7YuqEbXGfCsfNnCjM4Z8shqfENMgDbxTLBf2JsWhatEvKLh4xCmpcwRNRvwiy81TxX2z9356u9gTX3",
  "key4": "3JCsUThMXvD3oaUiPdCdKoT6oNN8V8Pr66pWGWsrc5tpZs8Li7kbu55NsiS45Djn7LAkFrwTydgdpeTFr48oAigu",
  "key5": "5LE9aTBv2hcHT51pzL2rQFTm4hCxArVyUFqq2VvwafxwnFdFdqhrPQYcgQWRG7AYXpyanEWbnChfVbyBvYoWz7xR",
  "key6": "3VE93uzF3CfxHpvTn8Nv3NXcTS58zmtWATtoETq3fh1TEad5UKJdxVMZ3L7BwxdGo5b9PcPZKEyjEe73YvDJk3Cg",
  "key7": "54BHCxHw6Tm3tBeSfygM2fNsb9oCaJvRwkqsPL9XhFKKsJ2EXLVpo1JD8yxFEwRNBMLPo9XuLiPCvwiCpjVUrEPC",
  "key8": "petSbeNESzBa4b6qNvRjANEeNeEWN4eYrs2oU8GvTYMHJ6VsmQeWRdkwscdAGnzzwjCiQa7ntrxCjYXh24CiomG",
  "key9": "3VE3Gfc1cFZQNF4voNz54Nr1wQQ3S82BxGVUiPLraVSCmyyguVaW8vXgWZ5b3fPht2kzMPCeu8h6reYYfbJXhD7t",
  "key10": "5zdtsBjNXjYy5XUSEMLXpsjW9itgSCwtuaHVZnFHtb4PeAHUntjm2LtM6Ta8Vgn46F5gbaXbudTy9bU5E7heU5vB",
  "key11": "66tT4CpDbhdGDj2Cj1EpnuQNP4bGyRomxiU11V41XMQxXYzSEvqWsEthqebYDiBUEzu2wF48MnskBRzN9bshPFgh",
  "key12": "5gdmZxLKxufhsTHxmiDnGFUh5XUGXvyvrcxZFo29rX5tFYSRLqWf5441AiM1N5RJw7j5N889PquEDczBVffMiDjU",
  "key13": "2hJjCygi2FqGGrYsx2tcktVYSkhiGgvCULDuhjG2pkwicFME6PoK6ZWaMd83sreyy5Jr6xkxoCHvNZRFyuteHjRk",
  "key14": "4NbCHFxiTBMictYyWZim6utCBYTZNtvLMWHXGrafMp6hTPLxtbtsyWYFT2ZyVT4nuxuv16nPXzSniuZ8MsjjVByv",
  "key15": "4s2DqCHWjMbxUdFumFV5t63E9SL6cSifvyXfdX4h7RoVQS683E1XzBHnybjrmiLh4YM9mCzs2ZNVESted439HZam",
  "key16": "3m3bgM76Hzh2PCuqYx9KAEAyprVRHUSmB8mkbDgjaSC3yVXBJapsjkuK6aB147qwTeq7dktyFCB2VV8fb35EBga8",
  "key17": "2S1k6iAroFKY5LdaBZdS8nRFVEd6LhX5V5oniQaQDFxcmTzLyfWnMmjRfhwR3GtMXAFzcGf9VQZ4gGhbDiyotroX",
  "key18": "4SKwWLvBexL4GA11wmfKFBTEFNvXwUhAp99bjsyLcTY6z3MpNeyYnUPxFkNCLeVaXDbnyx4fCVqo4em39rWkUecX",
  "key19": "5gki4txf3zX4yrDBs4RZesJCjD1DwYyqF4LX9mzcwe3U5fGaYXRqWVDWQe2ajqp5QMRfdUMfuxPbF8YxbkQrbPem",
  "key20": "36P7je3ReR5Zb2AKqNxX2uaPL9b9g2bQDDH3PuY9JjWpj2tF8uQiouW6erj2bCaV996UmK8fbddZEt38mbXowme7",
  "key21": "2REzRD2tat7HT45h9io59Y2txbcYBZtweYJN4jYxnPw7wrjpeNutKk5FhhY6jNqsLiUFUJ18PBxdhZqZuEpr6cTA",
  "key22": "5dSGzG4oQKtwx4oBDed2MiL28zL1r54J7hcJ3tUyot6pENTWrpQg9LhStVkAnhUHg3TD3ANroQQwQzdtWHzZiJVu",
  "key23": "5FToujvT9j6W1XZKpCrkPBZgTwCEeRExersYDKjB7qbxLpaw5g5a7rwYWEEamdJomo16vDiDPhhorTbshUhmfTdS",
  "key24": "dsNepfUyukymhRfwGUTjs42M6zvxTA98hoDTHyzM1qUmFgYiGdGw4necZ6Ch757TrWrXc2Amq926njbewu87PSQ",
  "key25": "335x55bB913nbjMD5qhGXozTDjd2cMcGHLFU4S47qgSrhZGHitJWFAe1ejjw7oHTXvBUTeheYjaEvBQU8AvSZjxG",
  "key26": "BGyV1dqCAb6AQdxKfCz1v7ie7wX63ydcR5KtCXxE2Mw8Na4czXTsf74EKS9X8JvvoRhKDFWN7pZpFDTQAkCJUhe",
  "key27": "5ok5YpMKe5J6cpPV37zb5M1xs5W6ikmF6ucNLXSf6yUw4aXeV2rKLCiSzkrPHfoZc3E4H3Vm3M6dLPKdAovKXdM6",
  "key28": "5SsbPQszb8uSPZiYnGT4KKmXvSJ7GvwHwfSLacx11AtF4Vk7nrXjKpnrRf7pfAGRyrL269dECbjAuPWFGWKL6xet",
  "key29": "45XuFE1qzz6DbkDJPRM5CesfwvDWXCpe6s5yPkrmGMpkkorGnZsXagQfU2LXsSNfHirxaD3fFRQimyUM5jFpL2Dz",
  "key30": "2duHh7RYUdQ6iQdAnHtjzrJboLe9KbzdecoZESkfSdbJyjjZViKiKrheAfexRYeoKUYFpJ7ybuvSK57vGNC7xxLV",
  "key31": "4zgaGvabJcXeEfKRtrhPKEZpCQXFJzeacBZxhKfmtLyiV68Da5RqNaxW4qHAFzQedH1NeGzJp5gb3wFbmRYDvmpL",
  "key32": "3cuq4jQVKUpSnbcntrnHUmyfscAk6JRzEbP2CScy2Vejdyvh1ciJLGqeNA4Tsv6XzhZ8JiEWgRaG7aptXxKVCYDR",
  "key33": "3CmTYuFgRRPFssmGdky9HGUiXWm1tmziNAUD4JUpVZNhqc86N7JZe2GCPtwnCeQJRP2jWsSm7pwFkeRriHuwYXpa",
  "key34": "is4bxV5KEpEgWGUrkKVCRrswazK27c1pXQThT8Ub9TZ78jsaJ9RMQnPJTBcBtwMkM3sFmYki1iVZDzBw8EJ6Ceq",
  "key35": "frdNubxFj6u6AcjzuWFyEGYiPibNDTXPAh2zVii9xBAS8TpStaFZZyXgDGuuaiC16umQFGF5GEk3PHVYFdYQ6CC",
  "key36": "4RkQDkvPAHPLPn9fWUSeS55ACGqenLD6Zm1m58rGzzzpeDd97gMRkvdWMYfigaf3rQGkHok2dXkjF3wrACZZNVEv",
  "key37": "3gRXjMAd6qjHGAxmUY33qSBgsqQ7qGt8AMoGb7tArQyToUixNXvty4XqYVPtktcmf3yoicqaKrSb44V9a9jMG8yN",
  "key38": "4vjk12N4DCnU6ycZ4kFXubYf7gn4MFxkB4KBphvUrsZaJsbUtWAJiRpZ2AY8PjTkKdGwbLA6FQwxTeiWHHy8Tuan",
  "key39": "4uaeieJVu3M9LxzE3fWbDbQzWbdXL2rAgfkngTbBbYzsg4SaQQ6mQdSE2sQyQiHfhmhVmTUrF6dEQy762qWWQkkz",
  "key40": "4ckdv6Ko3CeeUqeb2JBQn94NuxXcQp69fpuQJxQAfJppZJMUjtvpFoqknaCo6THy82Smj2L4tfzSJ6aS2snmHDBv",
  "key41": "4z2agZkzc6qMYJXdCBWRisrbWv9Jha8giHaUoKx8wQsPexy3cg3M29KNr1QX45sViVzpUq2EeRehbYnPvyuLGTgX",
  "key42": "9xrDMNoXzLJFthkr3kHBK4y7q2R3PjWsgxzWJSYFoFnWUdFhA5dLuxhmSXFQjkMwBiSNygumtGiykxdkFkhewj1",
  "key43": "5CVJ1Yze9USbxnvv5GpUHy7R7xmSGiJtdMmZybg5swHGSwdGdrD27iVtkwnorZku3bnDX4dsiLULQcqV5jAy9P5V",
  "key44": "5LgXUSb5E7QJGGNoAsPewbyoEL1D6DB3M4CPKFt8poWTGQKD9f4hER4PyUHQUisFf5xJHfuTLGvFbiwxELUtjkWQ",
  "key45": "5bJ61JpFdc64CuKPDf5ymLNAGC2qAGJm9efNW4AtF2bxUAY3iHPzGdZ7vvsiQ6nKpXWb93gzZrULjQjverdbx1qz"
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
