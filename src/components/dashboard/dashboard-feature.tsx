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
    "66sYeeNzjXxtaz6iWu7UpWE4sBkzFA9AiWPy7X9QQKAW4wnoeWcTfUWCyPaQ7u8SLqmsqi8tKahZsmARcsjTJiXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxYwaQ8w6f1SHqvBYFDVE8E2gRetF4n6cPySjPt3gqZ6mwFu2Uas6uguwGmG5a16bF4D1vzXRCqz779H4fLczKr",
  "key1": "4D5NG2MQc9tDsGww32FALYqQe2gTBZ39LVwU54Trcy6udbQAbwxR27HXTFEHP9utBGt8x1hiGZTMNggPxZwB465g",
  "key2": "5JoVWPN4C7t5rHht7arAtDcywQTigJE4o7aqVkMDpKzq4i5vaoc8bMDsGGnd1L5BqmvT5rdLpcbMjxJk5TTg9o9b",
  "key3": "4MzwmS4uwny6yu9edSPMYEEbizsMVdcQZKZfKrCN4AKWKrLWtG3Hc2gR2smT9iRpEGChGJKFKcN76N4enx4Yj82W",
  "key4": "FbjDgmBaX5Dv19hrWZAKMijgCQuVyqie2QPGWJ1PJJPa1fWS2dNJZtA3h7xfGMsBvM8KKsBomzdZA4aWSz3wJUg",
  "key5": "4U747nMyQmu4gbQ6oafUYcE84ZRWUtBkKttXU1UarcCY6QVD367ZBNEGmPJTKVG2dpPng7nQLveBozT1FeqoJH1c",
  "key6": "3Wbi5KSP4pZ8WcCmtyWAwRPGULm6kC7J9LFQfM849B2aNyv2cd44HLXfVytA6mNL9B5QUviR1mxS76qRUgWPSDRN",
  "key7": "5Ch7gXex33TXYSCRQYhUnArUJTv8tNMkwXJYqiWRgVEgjytXstU8JwFay81ohYBJNdyvxjZxrdDCbQVisWTRmdV4",
  "key8": "2qFZuonkLkByN1GQiUiCfRRy3n7y81DmfKx4HMgzE5cwpHwJUtbBBZkTjEz4vFWcAhxJKv2bT46yWNyc1B4MJJcC",
  "key9": "2YmM6ubpMqe3H6duGpg3gUvQRY2GUYgzFFW9wQN2Xm8r1NL7jnmPDqF2HrHdzWWTX3zpiaVo5A2WTjsTuiAbde48",
  "key10": "48Ee3X99StV7KEfU6TMZTzybrTiBJL4qoEVGPpKtzDc4vcBgvc2X2a1oDC4R4RLkie3NK6imHRzUN31pDkw9chav",
  "key11": "2s8dYPqDg58hga4JduG71FgDSn4PiyztQJtBtBvYMcA13eQWtgbXzjTyoVNdDWcyiB4KV2Vu21EwhdmdxCa9JuqR",
  "key12": "32zRuB5Cc8EezffyjpiS7dTk9VfqoNMoM6QGEZ7wBWZqeqaYvrixeWbKCNqJRYcy4cwQ3FTLHerr4n9g8xmR5nYx",
  "key13": "wFUFu7FLNemnkpKbc8yHABH3BCUEUiVpMEqNBjCnHGX8KZiyeQzPCYZeRvvFU7ESnGw3BgFEPtX75UQt3FrQvcS",
  "key14": "5NT3cJPycm9awgtjxGwDWr7n4fYih2Shp3PidT1G3BYu4LzSLcKPKPMWVxgzaDmgzdJawcaupCXQUesxHafWCZVp",
  "key15": "t4vmfTWgDXgXZDgwzDtqQhX4fg5kjmqzx7wosjk5HpvkkxpyeSSZjagJtyvYWW5h4dFij5dBFdCda8CJRLJxcck",
  "key16": "4UgEui8bBKNoiKuFN5VBs39qdtoYNvRhZ7Nubwap7LkrKyQVmau7xvoPF3xtEeJNK457KezbViVAiL9szWVa6Urd",
  "key17": "4FNYffnTE1dV6VSeUzUEs68RdBeUz1ijPUuxagttVPuBDzQwpU3BUL35hrFh4LVzjgQddeZ3nBjqzbnzJfxE6zYG",
  "key18": "3VDgoRBE4VnNjdNLDvhHhRYEHykxSj7HgUKytnJTCoqsRczh8QFkrBj8VNz4ryioUP1ajusWPiUaq49DUQviy8hg",
  "key19": "2shCnTA4uV9wTLG9S95qXdYjMWy19iGvTpd1PNizjBDfrsmHC4DV8vUqgag8dVfzZCAMTMihXXgZGK27DHxkSY3E",
  "key20": "Yf31hztWvEGpUP6bQypa9m2BWNR61ehhn7knssuNj4sjdAfPPmgDB28yUhUcDGeCCzS2KrzUZx4Zp4m3zPhGAvc",
  "key21": "2NWjDsF8EfxzQjTFWhVXWeSJFAcch6W11tibzbvsbVzsPMgzQTm43T3BEqiYkeEV6Nsq1G8FEnLE9hn479Eqtfei",
  "key22": "4peVst6cq84wgq5T2NGY5gsFHFDPL6zJtqtVd5isgyNcuaR7NMvamHydA4P4qU3EU8JbQMejy8t2EAdEJPCoUwt7",
  "key23": "eaCGcgpFq2jvq11baEVG9aayEJd21Kc51i1HQpxiZsbQ3dXw9znp2FrFssRpBnyHrJtqkTJ29pE25uud3WjEFD9",
  "key24": "62PjLkdo5gFyCwaXgf3zoZqsw2RpodNaXjrk5hnVX73HztSvezHGaFkJZyk7zCKPbCeDxynteH9joYpC42YXo1ST",
  "key25": "333TmEchP7rSSgM1PRJTvQfhQiyAVWvcSpaDqmqN2iWixLp97mqphtuCw4ifxkCGzn5QNTG8eZranBTdHmbXf6CU",
  "key26": "VfGyTvixkoBEYzNCrWiERXEb5NJoU5XQLATFTuGxjBToKAqn4QuALu7JAXJegHdyNhhC4veWBTRkz7RP2ZhjTtP",
  "key27": "fD2zaCvSwCjgYwu7QeiQ6YBYXNij5ehBg2dr1nQi9UHn4V9Kyu4pjxaR2dbEHHuDzsBJPaUtkFLgEi55okuXec3",
  "key28": "3BfoB95VqC5x16HxjMGp5zjX1j83pTtAK3p9ps4M9dWFyMqUJJtE8ynzYs6pwPRcSaE8QbgaNA49dCpZxeBTSwkC",
  "key29": "3D646BxEMXQRr6CLqwjK5KAUCSpNAWKTeUEgzzWPJev4V5pdm5MU6oyXxnMHdz1fsUAkCKifKz27cUZtgv9Uf58Y",
  "key30": "5nmY4cyCWzysR8HEMYPYydAawkv1cVG7QsNA4tstB329EtE5Z38Z41QNqCxFAEGZzUebyoDmkXyAWk3L5kMHyfws",
  "key31": "T9LBozxE99KVUrgkWPqkxAnV6GnEt1cjiRCJyKzY2DEoQmq3Yq3YJKeoR3Z1BzRUpfvjdWdTqD1V9356JBhy4qP",
  "key32": "QvKXtnTXx3nK8J9kbhiaz6ahorQqgbssTL5ZWms7mvE4YvNGbty8NFd1XyW1BzhamcLjDxToggQKEkMjpBZ8iyr",
  "key33": "G2nfM4MYZqXUXjAqkDKGW1QNnswjombjqysX8FiasWdpnW1iVHJkdjkEymzmo1UaesS8y1zkB2Pb4pA3G4t9Cj5",
  "key34": "qpaVHumjd1bonS24GXeFEGqj9UJkdnM3YTKHen9izN7CpgQSgrWs26u6aH4irvQDqo6EiNr2i2CRztktiudUYXL",
  "key35": "3MXmLTMD7B4siNigbYEpUhyh2wYFbsKrh185tY1teRfQa4FHYzbqbjaX9SAdJSnubLApf7pAeBtjjCCcUeARz9Yb",
  "key36": "5Ci4ZRUqkJFypr2ZFZww9h8x6E91Y3WjRKNLQ9Eg9tni39yqG9v8MCHtcwXoyD931RJvyqVrJ5inQKTLJtpnTYLT",
  "key37": "4dTqvDV5fdD8BzMskrzUme7WU3HUeRc1CSQiLqbzcibtqmK2aXmuTyLBeXqHWF8ZQo1GJgRZk9jq8hKq4mGyKWyF",
  "key38": "67CAHJCGBTGbbpZq8QLPoQ6JM8BEem7eLG25bVUDxxtcHDbcNm6v2bA63tS5a5sBxPbsYx37pfcmwJwjTPAVbvL9",
  "key39": "4eUMpC9pWMrSVLjTGTRsSE9YjZLRU1iLtxn9CcLay18sV9Dk89uamd7kXVRp6Km3TTNHtXH1GG6Z35xk5YzzYPtg",
  "key40": "2B17oSrMnEfuTaLue4bddfrfbceHccoMvKepw94gcnVh3pyfgAkZL1i9VKiXk3zn2aevdeWrPAsDfJoNdbiKK8zn",
  "key41": "4cTNdEcRvCjuY8uoaK79Baejhgp31jW8AZQPiEMjDDse4zpahVwK3jEAe8jy2rEqKiFXo8FvfCZZbahbzJ6VXHnt",
  "key42": "2hc4kS3v7emvMkGK1RkYuiTHDM7XomLrjAW6Z3GuVgJqZG12fjdqkLjJ8cdq9nL19zbBpwPdQGWBLmEHwMm2YPQz",
  "key43": "5amWt3gaa2by5Nv3HeCAcCGKbzex37WNnpzt5rhCbCJpovJmZPV6mUUc5vKTMqHTCBFx4X6zChRSwAex2XkvojSw",
  "key44": "9JorG6UFY8MP7M9pRL3QmuZ4P6x1YL6oLsfpLgzYsD4euoGeJePAmpRVVpPg1dGEqPfcbTXHm4ubeq1A5ge5C9g",
  "key45": "45sFAMGNPXrzHB52iSgn4LpHX1xfgcuAeFBo8t8gfM8bYQn7b2NUVEAJMZeozR93ybQ65u9gDZERe4fmPVLEUrDY"
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
