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
    "535uJqtspD6QVD8fxJxtUjdxyzebkqjSZX7t8nkM8VL6pRV8XAnRW8Q8H2tB6WUiaNR798ZDBTRkd4Jd74RhyWhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQniVFxQuUoP7pyCBzfMvPjPciATd52y7owWSZQZvgUEkx1XduBLPCJdY2vqVMctXcUbDw2AAkipwCzoYv8knPX",
  "key1": "gMGe6BKNYspe2hoN3Pc3bjr1HcZVn4U5et3Nx1mZoE8RFHxM1sNVXbte6gj2ciEUBMHguN4zgZBSRVt5fd572d3",
  "key2": "4qxMcnDYpTkJjbwCEDYh3624dva49XT6F5oPr5hzLoRvWRHLVToxYetYvgZTu5jfT2aCam9iW1MJkCEgGyH1N8gR",
  "key3": "WJuMVoSxqKW4DbuJTyQkC52Va4K5SwM1xrEgtsDuy5RkhBc6sujWcHAJdsSS9jue43zPeBjusN32PP7J3D5sUvC",
  "key4": "3VcXMnS5nTmcw6zCzWkm4ieY1QfCYNPP8xrCRs7LrHUoPnN5vzBnZp9WJk5KZDNZT62QmeyZ81ohE3LNnsJmiyhZ",
  "key5": "3vdBW7oGrA5hMbUuBtaf28txh4rqRx5rVow2WKdVnF8ztpyRGzRG2w4WCM8XrJ5TjHeHZTY1HCATZy7ifij9BN7b",
  "key6": "fPa7fQ6btcuaN4WwSsmY7d4SqvvaQBN6gfpXxAFuW199s65T3aWtKAJoAyUi9APx93gobvsokdj8qaREUrMb6b2",
  "key7": "4KJHbEpJCH1z5Up1ZhgDEyydAMCeuz6PHHAAF2Tk6SFzq6nYx4wVT9MewFgyEdK7emBcy1gFSduGgKzE1ZPwvCkP",
  "key8": "27z4cJ7iYo6v5xugPBrB4gHjoihXcaPPkA83fcGYZ261nzGpD5ZU3tz6ZhVzrhUnf1Zwjr2KchDVGD7Fq75HdBVr",
  "key9": "SRHupQiTH5kYz2C4XvJizNcPENDUc3nniy8a27ge72Vgt1B65rfHh5E8tgQSUaDvtarPdhL62MrG4WsyfS1Ujz1",
  "key10": "26142QjCDHFf34Qx89CpsXq6eS3TtTATurfmJzCueMX7k3sji93jXcPXZVNGfSpBPALp97Bi9dGDERQq28vFaGpS",
  "key11": "3YatcJGTAomgeuv6sXDtevRVeB92qYEUKd37zpUzMHzcyC9nGd6hxikeRD2SCXV3GzhBAgpj7WtCGMrrmJYxXPR2",
  "key12": "EcZ5NZq5ZmxnAER8Ps1JSBwdPzkuaHs5ZbdwsKv25z6xmRhDExqRADJqbBtV8akAvg1rXCBdexEJ3JobRxPWELS",
  "key13": "4vbNQsLd74VSHBXedrdAHyVkZXpapEQEqFbz9QBti2g8JXr7rx9J5xmz2UMn5Gfg1K5XcWme7tKMaLSSaVECXuPp",
  "key14": "QRSb1tCRZXj8T8SXQGzgVCT9ytB3FvvMhacBVTd4dQDR7WmUTSqeWDRgjfPM4TjYHt94ANNvbqg6gLwDxrFePz3",
  "key15": "3NGMkFWTqUa8R6XUmXsPD9ppSsJe8Zph6QBfgSqFAZPySqywr3TcmgSw1xJxZutes9Lbwnvs8chkjCkt65AZbGys",
  "key16": "4pnhu2JR4xHb3AXQUpkvHnzrjr6d3c2bEsNmKsLcoB6rk45CUJgkDvnzxmMrKWymjaMfeVbDSoE35FgHrDzEcaWc",
  "key17": "2tEYZwTqQNYePyHkYDzZoHeCHvTSEGotVGzjbY8dqEzkRoBxNY1PoHpSmy8xmp5DM4gGRQJjZugBjYBcG6bUL3ea",
  "key18": "5oNL2xpJNFVeU9dgxGoap2U1VtSFkWe7wRZmJEeXsnur8wJtDyNXFXSzdKuHBt2bE7D21CYBVFY9LLUKsn9dv7b9",
  "key19": "5RT9UATY7EeaR2u1tdiNfC6xobhMPv1A3kSs7HM7DXdzafrFpZy2BfXCKJXajUJu3hcUd3sQkBsqMjxbpjFrdpPm",
  "key20": "3oLwjnqQdfSVNvkc6cMNap92gKjC5cVQvDwJ59oAXBGNGR6smy1s9mwGxvWUcGr2cgmuF9CXKfPSqNV5zPnNXjes",
  "key21": "EA9j4mhTnd7egRtZyBC8CBKBWmh1nHGXnk6BMfY96wrxXEpGtw8x1icbNufxMSpCGLzByft3pzCSd6QmyX3SpbT",
  "key22": "gAGYag43M7m4gckx9cXGUf2p1m812GCwSsZAAkD77a1E2rCJA8gFTNmvKBSvrqnJyjyEFvT2L9tU7sYsAqCNS16",
  "key23": "5Uu1ojDnoPuztHxYqMo74867S6C2QSLwrzzG65wxGX68faztFx6Kz7ECYy6rKvT6g1pS4B2mppjRATfsYcutAgqB",
  "key24": "5oA3PUsMYw8qXscfHBTyHxsgWPwzbHpeNJLqVGXkQ6CRAaHbRDkL6KnqpjDZ2zhmftkDj1US3SA5wqxeBdSFVuz4",
  "key25": "3M9MBZrVtYViAQTZR4weKYMQSWVzC52V5zc7vWetvg4DuspfAP7J9MpR449Zq9e9DdbNMYvFtsztjLuJCm9BsGPz",
  "key26": "5zAbFg6wsJcb15mpuTeWeV6MazmUrs3SRFRnyT8mwWKNowKMMwWLmfhnm9pcd8NUcYvb12Kh7Qg3fLtXxh95YwcA",
  "key27": "h335qAYhW7epmpDURApTpri8mXEhyEJ7D5BJMzTU9nEw3BkZ921ve8upSdBvt2FynERWrvoAx3wSmZGyTQNrVWx",
  "key28": "4tF9MSvF5hAb6vLUrCFEohqyvpUZz94e2suKRBUTwiEYmv3KxMfZ3EJpEKTNm1y6eQtS9k8k1aemZj4ZCZbXXpCm",
  "key29": "2NPufb6AMxYTYJ4Sp8rDcnPcWwHaPPbYdM9ZHVFG5VodMGd1ayAe6wL9EZSfiMVMa9tu2m36dh17bZPNY7qaFF11",
  "key30": "5K8V1vcY8gnwJ3mVDY1EbbTuGHF8ueHUuWXC9YrLPmULYPkcNrMxn2ekRtq6gKBJxLNrib7MGyAvAN4bp66joTLe",
  "key31": "5WPxZ5QK3xvLN3EyeDZMeSyTGgLzyZd3ghG65dpCoZrkE76tFBisx71Lj9ps4wX2YGiLX72yHwZBnx71X2Bms5P1",
  "key32": "TpQazi6isCfFbDqKBJp7G5ULUoA3YxX8pfP9cw7hmFAk6CscXbDSteEGsSU4tnxmA8B5ep7CLcpaG9GE4QGttDe",
  "key33": "3i6WZdHTqgp6UEF8jASzzWhwx4M9qsX9X2MqZdzV5xtzx9cEG1yCJKLPMzMTYkyjKytpx9nKyHG8hChgvT61qtAo",
  "key34": "2tZ5wXgJfsr8EgitwYco4nFEvtxtQx6EPAWurLDeZkaNMoNBkAawTFFNZEutxk1Cp1Lcc8Jgz3cFYedMXXK5uXvp",
  "key35": "48LzKwynnj4oQqfdcnjMBkUhvvWvy7ePrNPxowBCUyMhqk1D5UGFbAqMETGzvfQ8ka8mpnMuKiiyPrnCZbaxC758",
  "key36": "uX8Nnn5xb8Nj3z1n85eQzP7oA4nwv9kSvwfqFwWyfRBujAvzXvFM8JtuBkFyykUJ9YH7ihUaGxqLKcyKR7f7FNh",
  "key37": "fuNzTh2yXFQi172iQZXGdDAjJYpUBjm3EYTD2tXFVcBJPRBYZRr6JYD1LtyXYHFXRziJPRDiL7jHdLBNx5Jtmez",
  "key38": "472AuSWb17Wxe1YAhU88Bw9cspjmeUhYbvr56R15YCG7hoHtVekM1wPgaTDyPKQyzT3pCdAJqerHAfrjGRRSDAgm",
  "key39": "4Mjgzs8McHixBu83ecXrHmFFysAnBgi5G6XNRiuctPgq8YqLeLogguR7iE3MgBPx9G9m29hrKDwrwwh5rv2LsabZ",
  "key40": "5eKLjgt8JTfTjdoewKVcTqTvyvudcHSmLA9MXREc3Q3tX27sn5GJasAwSxGpVtkk42BDdybWRrHcWghkdVfJA6yk",
  "key41": "7SwvDx8583MpuhSsmsb8jHie1j8ygy8SreMQy11w4qpHTNZg17wegmTHHgteexgK3hMqjhhCaS74yKNrvoHfF79",
  "key42": "4wCZqvSpP3SnMS8aZZdxupCsLz7zdQYd1CEFUZTN4SMdQXWT6oqcVYkDGXAAVaE9d57tUvrdLxChvaQU1YwtkPu3",
  "key43": "2NuBUpJn4TxtwrB6gXDV6Ti5jifCRH8QtGgsJKBCyEcfYrBrqfyPLFFwhk5d6dKJwkisjqrkDtQkC3N2rxuAT99K",
  "key44": "3Fqch8N9urDD455sVbG2FqHJcNJUschoQipa7JTeD3ycFwy2HgJpXRe5mbDQzKzHYHaqWXPJW943VmGGf8CotpVK",
  "key45": "2hCjT44Lzw9yochQzTWP8Uzi1raVUkqUDg5pEAB7ZVSrxBLJ6922UEeWxvZTPJjvLxRZuD4rR8aZWuAViCcfx6ua",
  "key46": "2MsVeZWYJmFJdaorkJqk4P5roax49auNXNjgTXXGwetA7xvbBu89trJrnVsQrCaSg179yysD89P75R23Yi4DzWys",
  "key47": "4VMFYeGDeatJBTqMNwV8Lo3NvrCFu5oXD4AQGWkYX5c1wooAV9fAZuZDqRmkt32dja3WjQe7soRhaEJZ7SSaRTu8"
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
