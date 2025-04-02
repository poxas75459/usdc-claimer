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
    "5Qdabfo9L8P6tTPp2iynJNxHb1tPVjMEsVtZBAw6BAFKrhkdcCD8QjeUWp4HACAhaUDpcqF1gX8bwqvQvbJeTTeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wqmwgdwQy6NUBrm8hT8NwvqGSMT8khTUbjmnrL5eiYtDiH3wUPzTndPo2chCfF1m31L7gUWFzA9PGX7ZFz3cdZ",
  "key1": "5mQpwHWj1ZVozQAn5zSwGPtadoZGwWigpy6ti6EszJVqGizRqf68EhhEZEC9tCb7viFWfUU4u4vU1UAxXsU7eV8e",
  "key2": "3FMsZUutvRvyMrKMZgwB3EStkdCrrNku2qSZprs9gezBLNcpgP6UrNYhunth14tSHt3qDi3wjDQUPeoJ15SdVrKi",
  "key3": "5QdWXCSvUztytsuvQT6gQHUYEpWgCtzJxdWzRUqFSnYnBor3rob3YtiiFPThWw2D5fRDsSWsmcWvyvTh5Kvb5z4V",
  "key4": "3vpeViLvfeWNrjdYjrsTTpLF4kBH9pF32Czu7BsWMXgkqTJ6CwqYv1pPw4CDw7QzvivWXHK1CNnRdbbssjDcvN5V",
  "key5": "3uMeBiMHiw3yt7xbf86QM1K8heJzcZrfvKq28uY4mFu5kQzfSzZkFxBthJM5soDfiTLfBEtCjZxNLza1uRwqijar",
  "key6": "4xHyn2RfPtFUuEsooqbYBrWmvVPUMYiQ3AhnzoFJ9rzckLxjQBy5NXfQbzvNXhymmAvKKy5n4A7DTqg4abv3hsou",
  "key7": "UsVYXwQp91Qqtxiz33aYJg47chgXQW7mkcFZwdGKYEXSTn33ifm6pzkNet6xvpgLexu66wct6xvX9tmzRUrYNYP",
  "key8": "5eZdKWYwtvvMP8jbh9pfgqnuV3tbpKqCvNUQLXiyKNVGJHRRJKEUecbo4mkeo8qBVKVtyH7sgdj7qZJywHSUoAsm",
  "key9": "35ZQbVV6KM5NZQVKgTHj8aZgN4Emicf544fz1JVbJQ1oF9AjTG3mN3Zbcsc2AaJ8y3ZEEUL3wkf22EriGYdLDL8E",
  "key10": "2UqytnydQibd4kP3B8vbePcqsn34HNgzxTtnyWf3sRNJERFhEGCYLvty1kHBrMrpLMczG9cZ3iPVaKizeLivW82P",
  "key11": "3UKNT2A5Bjkdv6BfmpkamiSrGzWp1QBCpLFQjM7ZsF1vU3KV6hwukEYC845iNdPb5yWce6Pwm5zetuBZ3nrchoAU",
  "key12": "2PJ9JkaomdsTAeEZaEQrzdLyKmBDcdeg8aaPJ7jmy7c2iPyvJhkoujs8PeoM4pobeWCJce37jNP4JWrWvEfdj4Zt",
  "key13": "5B3L2sGCRmxuVXpWXG39onFr2Js2gn7qVzZkuH989MvUaHtubCHV1gW3VzNq99d83bP4PTiCyL7ecmnFSd2CR1wc",
  "key14": "5XpxGz6vqCrH9C47WEbzHQAVVwnYJagAMUyBVfHfj4BmaBrzuR57QCLEuH21hhR4PdY2zQZYUa7ss6h1P1W3ubS4",
  "key15": "eqL346DnfBJQCX6A4CpPJaYBQ9koYpDpZkSfgqn8asmoxjcpQ9cR7ScMyEz9VNqM7BSFR26ANEuAU9VFRVqrShy",
  "key16": "yRfHhjy2j7JhmNJCsJuxnv7Tg4sHWR9Mf36iDFwYQEf31hiHmn8vFXWCXc8sun2Pwo2tyhoQJnjjKcY9A7oCg8C",
  "key17": "4DvVVwoHoFTD8mZMXzCyUZUPre7YbKsqD1185ecSXhUfcgtZKJ7HjKxPpJ5wbrrx2zZP5zZM2kaRfRFcnhSWiV3Y",
  "key18": "4Kcgg1q2FoNgUAYgnY94bu6mTKWmVtXuLGuZmdoiWrTiHfwcJf2b28aCbXjJLCAxUWRGHP7rpUWi5r8sbwMx8j6n",
  "key19": "RCghYsEHP7r69Je1j7D4To7B47B6ZYf1oZ8ENACDyzSLdyMvQiAhhNYzmR9oStzGn75mqLSbf53MngERo3oSdxZ",
  "key20": "31xhuhzZfvJoCZnP8HCd87n893WVWj9X5qecrwr4s1bFpQHepWCLqmgLizv1NoMCP8PsYcjhswB9xA3ANai8mAu3",
  "key21": "2UR91P28uNF3eg7F32dP6xRyphKcSASsR984aRsFgURwyxa8Lws1SdBUGJBsnFHBWnaGsejQw41nUSTjR2x23ZQd",
  "key22": "3PpCmsiBKScZrEbX1N9xqbSPgC3eBSafRAnYJZRn2Vi1jTXqrQ6uWFBLqqAhTQjgKCZVdbz1anLKgSiDcEqmPdAc",
  "key23": "31NqYWsxEAdsBt4RTenVPd9Fmb21w2zXuZuBRM8LhaBVvU9HwY3xuoZ5qKJH7iTRV44v6qft9fFFjGjR41JdyUdC",
  "key24": "64HtP4t1V5aij3GqdEENu3raTCFdtTqFtHTB1sx7bHksjiSv4vQwtdViYs28s2mFFHERrs8iGrz7VdB9HU1ZCRyE",
  "key25": "5wwMoYVQQeK6bNqsXRKRMBUWYGcZ3jbBDYuvJMsByjbG5oDPHd4RKRKFU3Qqg9gwLcnTRiPyw1cH7t5gf4ucyiAV"
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
