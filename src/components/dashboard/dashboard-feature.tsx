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
    "3wanPi7w4Y9ymHZtHf3ZNL4Fkf341UsXRz5DxmAC3BfR7NuKK5TLfXaZDhgRn9i8s4LtNVCUJ9PZ81be99A9Quqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BR8VDNR7ZFK4hkqLyXjwHFQK4gkuaCxJjyDMU31EqkjF4WZwgn7Z58kDCgv2iAUkshHX2ubXmAtrDRyppEmzfqz",
  "key1": "5roheqnkVmUsbrxGcnDHttKYDhtcCsbwUUMd1BKbX5uM4NeZavahqfdBUn9pNErCiP46KowPmcXRQe83ar6ZVsMV",
  "key2": "4NUEftxmvqy11TZjFH4gK5HVBPFN3iK56s6NkxyzFvzrETXJMJyuKnNFV7idDvwcmuvX6ixWRRz3r1R5tN7kEce6",
  "key3": "5MLPBhA1Wx7KinxnxiRkT6x62G6knf56JxVuzdnQUxDti9RdgeomrHskTTG9785pvyPoMxLcbTxW48gJ6rrw13U8",
  "key4": "2xUcMryiNNfJXM9xi8n41R36sozQ65q6xkoT5RyJ7GbtaDEVxiMzD4mT4oV5GPNdYenBPcssQeUVH4ws49V7NP6S",
  "key5": "4ZosDxtWoGBc7m1p15m3CJUdzJ5eGcns7fhiRALLKWgnp6DJUfbA1TpB4bJdYSVRVKj7wLL17RnjuACMMXrmZ7pw",
  "key6": "2M3AvimQckyBHKYoGNDSmLnUqitTTBUX7Vrqgn536w7iC8wBtBxrQBoN8gMeBvhTfzNLXmrRnZ9dZRZ5FbFkmfwH",
  "key7": "46Af6EqoEywygL1UhMeULFxH25TFZsiMebYTFCUozw5wNfL3co7rs5pwLB25B1wsSo2ybErGuu6oEPVZa3supsfW",
  "key8": "2y9LEdeiKUNL4UcnuABZStonWu8ziL3kRw4fn2AmZoKhJQjQxnXgSkS9MFPZsSLDWVViAfpk9BZ8yfmc6XSP3D5Z",
  "key9": "3YpmCckPj4bYR2L5VyyQ3YsByKbu5qpzte296THtvrTBm3KKtsyo2pKS1EFGRzyzyQ5f5cMBU4osiPbz2hML2rdb",
  "key10": "Jqx1GhsX2bHN6ZKmMjxNc1qJnYZmW7JH4bNjV5VG2pNVb6roW3zUx6bUxKX6X87uzGLEeADsAujevUS2vSCyN9A",
  "key11": "5PcuniN3BCvonESzPbazkD9y8ZDSVuDrVzUUYn679ednhZXAaqKFyVovHJs6kV7FqTCKmKEEJqjoWdQ5HCqsinBJ",
  "key12": "4LrWWgi5HnoaAFNcNgAC8GYaDJawiWG84yoPWMUhJGagtsauQD43sB7wD6eRUTxAXxrNjLeZEuGV91Un878KyZ2Q",
  "key13": "2XQYD8cf65CdvP457CNFZPuaHsMq2Crw2iZRAmrJEdWf7LWpWQGao1KVEmSdwA1pFRjpep64ytxWmrDf3UbxtGxv",
  "key14": "2oVm16wGQcfVkcsRXK9tZnaL1yP5BP5bU8g9VYTsr7vMuFLgdvfHzQgBsKoGg5gYKBCJaQeDqDq7oB2ELa1ykNSU",
  "key15": "5m9d62PqR9YLcwGaF6rabZ9DbzfNZZa5rEnpWLT8x54ySr5mNDbBnorT8k3f7JV7ebczSzgXhG7gwzWGZumc5JAx",
  "key16": "3TWcjrJE6pUky2utQmeJujCJQxMUor5tTadyjN9j3gVN6Tj8cjyUtgLyt8v8sGXnjFS9UqQjhfbrqNJU8HpQJ52",
  "key17": "21c95gLi9o1dhK7P6Wux99khsh4DU8xjjVzguRo16gNKsAVb6F6Lt4jk7e3dkBHGS58oDTq4AuKidhnkLntVXB4q",
  "key18": "5X2eXKgrm766A3ha4yJsBJ6vvzZjgxDY6NSyqrk5rnPZ3K7Y9jzxE9EErkpHUtmb2LoWkN1Z9tjhtPPZyVJdSzq2",
  "key19": "MyeCEUTc7tx9f3AtFaZPoPWXp8QxjQDHonTCMLwh7Ft67yVSj9GhpgvFj3Q78v2vgpVJAvwCdwSDdwDdDCmPxUv",
  "key20": "4puL5kSHssqkLvcteJDVyZfLU37FNqtjNCJ2gdTxDzuFXaVhi5tTgzeckujPJNtPFxhzn2ivLXwPGaZR2Q8wiUyq",
  "key21": "4WiGn1FXGQ7LxPsoPmhkJRu26BqfLrY4VhrRjF7xEVCo7DBTVWW9LtbssrTib47uNKQY6SckquJg71k2ZbSgKJRv",
  "key22": "2k9xG7Q5u31cGvD7t4TBv46L9PcdZFs4SMBU5BEGi2BVxqYYj1mum9odg2UZzZihRvnVPN3SkBwEwMpMqn9xofon",
  "key23": "D7uS1w3URg11sza9bGPFxdGXgH5wSQWYgCdXPbCqZ8kMJEw8g657iXH5u3DctqbwdC9WEib9DLXXWbZcQYVgTxg",
  "key24": "3TGXp9nvA7akK9hsFzK1WuYW9YU3AjMgvCupfPH5mkTx3ziXHHGuz1QpgEZjrzKhSyJQMmxE1QsdPeVgo7htkXyo",
  "key25": "61WjLmabQpFRRNGZFrxgdihcGeHzThXpqwk5qUqtqwR7gxkFjJYQXYucgDU5xg5nZszpZSSZgdFc3BgZe2fYm68y",
  "key26": "67dbikeCF6ixDYYvPiCA13kpzTq8vPP6byCwxjrbWrKLGd1iJYgKthTEhSNFtAahAcd9rUtmzLsVFoCcpMmS4D6D",
  "key27": "5BHPYi5hzDHacnSwCyqfFMWnLuektifsjSSbzSRuWU8w19uCYd9xcbCDcukjACpFYgzuVWsaxTeUPAo4mHxNeGFQ",
  "key28": "2tePvg1HfNXJZZWSyDgKoPPpHz3psWZi8EuszQpdXDbbf9E1F8YkZXPGKuWzgFfRiY1U8oEHWvkaZRcxgsMuWkV2",
  "key29": "3JkhXSuHRqV8wjAwkX1s2s4aueCUmfZHd6UsseRpGmSuGVXNVC3eWM3BpGoa4Rd7T1o43JoaSAfZHqEmtqfVE6S7",
  "key30": "2ZSreJVuFSqo3xcDstkmzSTVpKivHnzEr99nbgVhNrkFnqXD7kxgBgzcYrKwoMgNJCYXb5j986SvuryzsdbospUi",
  "key31": "2xv5ZkKxhDWMzVCifpZH4P1xjhxH5fkjt8zPgzwvv7aMQh24CfkN78NJ83Y9CTrPbYTVNhgAsJi1U7WQfqgSJnY5",
  "key32": "5WS9HQPVMAyrMjKN4qSo2qnoeAyuHchyRcdkZySVikmiuL5gSBib4QDSLb6pw2gMvujBn3nKVbc5dwfDJmUJkf5k",
  "key33": "2561daqWNoN1WkS1GWxJrDLYnLqCNF4LTwFGAu5yYDuV8reWDRzpDSPmxPQBd3A9ADUGyEKTg9DccfPJh5jsdR6z",
  "key34": "5xEAijZuge1rYi1NMbjAxPUzFdU4cSUQ64VgBZie6F1bGHqD9dQeQCLKzHqhisPdok4LV1jMtMAwoBj1Yd2Soi5n",
  "key35": "jMEk2zCguiDRHh37oRckbm7gTZR2gfXPpBDEQ8eUyqReNSAbNz96XpLs8PjT53Ezgmzg7C8iMghpYXxafRjwxCc",
  "key36": "3SSmUja4c1YETkeLrVDFt9YFUTKKiU3ReYP7sf5paGRrvGbZWBCnvxkfDAUq4EZgRvaSbzBZgqgReBX97FKLJ1JY",
  "key37": "56U3JhVMB6w1Dc6j3ok6EDgpTW737R5hRcsh2Aj1SgBVwrdFqacQtBKeXwe5cAdCcZLaBCd4sF6wRTHTWftLpAdW",
  "key38": "64euCHBBewwr8nAvmCnGE7A3ApmfJ964k7t554xVeveupmgb52MssgQAWibcC4qvaEyJSShxnXaMbMPmczFrN6cM",
  "key39": "2LjP7ehyk1AX8wAJGGR4SzPSh58uPBCYJKARFF6nJ18TvCTvrbET1fR8xA4uCnCw63d3UyD6RDEjPF7UzEiBUuj7",
  "key40": "3DPJ94Lr7eSRMuZhcVsYjKUGSkrrxDeXFW8QdJorL8PdnjHQ5SrjVikA9XndEfaCeyeKh7Sg3hjECj8gHYrJGdTC",
  "key41": "4NZr6xKAUuFbDSrWA5SeDEs3PKurZELgQ8oM5BsH9hjW75J61Nvvc1Ctb3rGsaXuFAtZ77cKF8Fzw4MXPtnhcLMt",
  "key42": "5jVPSBXmVLaGvWfnofizzaGc3f5vQpiYbypvP2XB9yZbqKP5NRmXnizjqknGg92KU7u8ytVfPr65oHvJjsYY9sxK"
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
