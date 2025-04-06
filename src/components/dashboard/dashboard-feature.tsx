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
    "3TK58RUKkNarbw4Lf1pnXm4JrupNED69cVhgHHs8hHv3LZoj63KjZw8EQBDmkqquGm3CnNx4iWJmdxNgEXKvbM1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRAEegAhBD2mtc8BEmTcgU7wSRPAhMo8EjypRN5jSFwffoVBv9TdJmFcS3SAikjnM6r4wSfLURtzYVGn4TgGYXz",
  "key1": "R9NWvQsjQ6DGFvYjzNWhhJdwqia3rdxZtyB2uArH6UCLWDe12236sG9iNhdpSaaF3JAUkmtGYZXfVeZRk83ykRR",
  "key2": "4dpo8roCSrLUcRPY9iNqvmsoPLWeBNRrTLhnJrT5Yy3k9UyiyKq34SnNVr7ZG2W7jBLGxCRmzGuB857yfcbo9g5d",
  "key3": "4NHTsBcQfD42CEAiGspfPD35hNrM7ZpQh96J1X4ctMwiTPkcH6JJzBz6Csr1twoEoJeSum6i1rckTivX4ZBYTP9y",
  "key4": "5qeys7jREfLBTiq9ugt6G8t9uiCGszQwDt6PRPzakm3QHZthJMR5hDmixyQgecZiYQSKjftWXCbDWtEByCwQ7Hqz",
  "key5": "8h693X3vKxMZB6z5xGctUrj9YbdufUwWgnvt7PW9sAxnLokRMa6AdddYg6qBbS1ANwSCUc4zTXZEjqy2CaiNt4t",
  "key6": "3u44poEQPc3ubRVK7i9zhvgbR3dRobV4Tf3pgV8Hz1YdykKrWSxi81HB36Xu8XDjya87MQxFa3Rk4jqEhzaLvS4K",
  "key7": "ngjX5EAQb1SNzeBGbwbxsmX7eFohreHfiqoiUdHud9H4Lq6GQriWiGLA4FMpDDHcYqv5ntLzKh5xs2hRMFVqpKi",
  "key8": "2XzpS1vNuymWHXPXGzUZ6aC3NTQVu6Le5A5mDVWZxXgiXJMGN6btMrdYHrWBuUAcCwo1mbERZbxdLm696iK24gJE",
  "key9": "4JPw58avGmjAk4J2YcCuCsQFJjHKXzEmGFfpAQxnDodeHao6U695dzsivnfkwiDdonRRiy4CGLRE5gakBnPeYvFu",
  "key10": "3vHPoCyC4u4CuxA1s1W6yfXEfWYiiq6AuXRw3Zk9AYaGrERoghHQW81vRWJg8UhAH7hFRr7kDqzU29n1RvoKQc8p",
  "key11": "5hTZifK8eGvxPWnb3nak51M3hEePLDL9JvXP8fVSqZVfDaghSFerhuUXUnmHLuGZ78T8cpQ1Ncq4cYPYhk4Np9Yt",
  "key12": "4qthqtEhwVN96jpAWWKa8GVg6ymy7i6C6NBpbeGh5QB3pBi9QmEahD8SMjc3ywM6eqC2bCtJZPJHgMSCfgQzap4L",
  "key13": "4frQ86dt9EEanmvHuB1CeH51krsvEwchDw8LBWDXRvKtyb2rBxnxxC4wdp5yJsybHqiDbcaHe8ET7FHyt1JYM41C",
  "key14": "4Q8DYYC69GRSMCes7CADCae82b4wic5Kxf5wD1TbfDhG4jjyqvvS3tLqHCjhv1vLsceCkNwt1SAMUdQMiV3N6z5D",
  "key15": "42Asav8bfzWQ9f3wP9GX4zGccYUU4JkkmBXBkUtThDgk9wMDW5rhiaVRVVhxmXHD1ey5nUmfDAhL7YLcWdEnvabU",
  "key16": "4cwdHb2bjgApVmcsMxhqjYSnZwpv3NJaiDDfZRgx7B8ft9mjeiTjLLp2UjY3yhAY91jjXSit8jP14JqVFm6o1Fm1",
  "key17": "4qocCVfHWrgrm8Syksji8eaKq7oNoLEP2S7D1rhLcwQanrCpweow3m13rP4CebK8B1Sk95CGpVABTNtg1mP36PtD",
  "key18": "uAo38FDFynRB6zLX6j6ByKaroPSLhtHyNmLvspxLHarVQLmyS6iJK4zJozBuAvtPmVM19G1Lk3TWVGHEetRB57Q",
  "key19": "42pguFgh4hGpGp3my5jhiEfKoi2ZnuyBBCviViYqQnVSkdT5xcH7WLr23fz8RPpcG3UwCPyqpKi6rX1HDMcbRnSp",
  "key20": "5kbtZCiKH3LtygJcgbKcZ979EXAxiafA6UU3vGj8wNYtb1cJM6ZcsMQqoHpySC9VC6qsoy1GFXoDuCgsw2LkX1WY",
  "key21": "2diJNTxv6VrNhBZMAo81sc5Fo6c9ejiBsuaZyuFEFpYivvv6NPHHfRg6FVziX2kAGRgbZ4nDjpW2MipQhXtAkqBq",
  "key22": "4MbZQSGxmz3wma13fXuzMUe2aXhndEMG9YvHh43qPVZM3y46eEBaGafmET3GBaRqAVutpFJdeh7mL4qR1cwpJkGn",
  "key23": "2b8FzjbqBziuaAzeLQDPudK5jS8crutbv59SrC6Z4unLpSiKrZsC5XRoVBcNX8KsMECvZtFBfQiTALneibkQZytu",
  "key24": "Wa8cdeHwmeeND9rFeezFU3MbR2vgcjeaFct8TJULa6eJUUZU8HyWjaDTg9bES5QpKL1Rv2Dw77Q4g5F8XpxSg9V",
  "key25": "2BsafvhiEUbakQQXJUkYf8vNkW2jgRAZ42DUPyQ6AbqV7gQchhdmWqpsuCAFX43XQ7kpzdBmPQ1yTo42oTxKYNhC",
  "key26": "2Lpv39hhbnDvabKwvg3rgxa6ML9Sw87M744fHXCFoghcULD8zKde19zqbGRDddf1drrs3BPcgb9DLNCFGbqDhy74",
  "key27": "4cK6co96Cmv7EZ4thejDWvyvomb2YjmPQE6V3ePUz7LeVq1ctzVP2aV1seuZdnkxqRrKLrj86ZSg1d9GSAQWMrCX",
  "key28": "YZUnJBmKWaxxaG8Wo8w8cCaqqwEFnogUtdHsLp5Z6TAWy1icuao1LUpgTMgPauee4AK6ZKCuYXuqBPBbuuYhxFS",
  "key29": "4uNjRtukX7i6ReAFk56CUzBzFTHgCjWz65E9vj5N6UhzCXret5hjTBCTMonoGz2pLdozx95Do4kpe95Wb6GzBxrm",
  "key30": "3BSeKx1HRcK6gdeqUKt14ZabQPGTSSHgTG4PwiTvkcYare93Co5f1ApeyFwa1zh8nbAMng2fDXg5sCSG1BDF5YQ8",
  "key31": "5K3vaCuCUfg2bC8HnhqbKjUiEQt98iMEPV9WnJAyTk6kJH29wAknh6KYMY75omZJUwgWufp4QpCsA1CjUqTVts7K",
  "key32": "uvwVkyn2F4swacoCm7Qz6g2J3Lj9tccJZ9q8DXL4K38yvSgNabLBwf9RFnSM4eUQehr9yBvoKHq59XeBCJFws4k",
  "key33": "3ibk2ZdZaRpNTxdMKZscTSfhaC6JJYxG8TEY3fqALdMpywjBLK8fLpCcVFdk6PrB2VJmpWaGJu9PUVTZcAbXgYYA",
  "key34": "2Ae8UhowqLWsMV4euhaa1LTLAHLx8htW1dX9NGCCnW7TYWyV4vVQaYCdj7G1jmPHbdiSttQzz1JnJwuMuwXgumeE",
  "key35": "5zGnvqXLidKbzG1S7eSPUuCeJa9uTs9De1JS8d4eQ1ZiB8zxuqbXvUemzoDvC3Fdme1io4dZVWGfdXCdzs89U1Bw",
  "key36": "BejPuRBzw37XcL8MAqKrkfXMcuEDduCDbK16WHJRZRW8Dr6BSXUn3Sv3NDzcUJ9fegsgrxU2t1ah1yfdUKySfat",
  "key37": "2Ynyh11EipYjL6naTk1L1vejSv6orQ3yzJL6iXYHCovDEBjqxLctURQEcQGXZyvYdWogbvJZK1EjQa4QmK47HYhD",
  "key38": "4bPbiHPEj19iD6Rj8H5Jss3kzKJSkvmam8CGtbSJTDgRh4VUAraM1cpaarakxuo76ETCvJ79Fcc8wr73tKXZ5dx1",
  "key39": "4J1FtNRcjmAjW1R74rVfKTqco5AkRb8ywcGcR3dKsmKwtyWAeuh6iKBPgNHRecQbgDsMGosDyBwh2LXC9BMvVrn",
  "key40": "22WAkPqvvbjz1SeMLChVgSdptRPrwaAuk5KrYxcd8gn9pGMupAEPpETdvMiP7rJKHsKjr9kGCUCmxXkZPkrxboqx",
  "key41": "5gFp72KGVWB46zAqQ2gHXYKmo5dmuo7RZaNTMURDbDwiSbdar43roVxdhLDd9bEtxcKKwpjb8Vcwrb4v3asabs3u"
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
