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
    "bXeCQbEXmFzUqx3at4dp69BmuDTrhexy4mPiQ5NMEX29mCr2D8ixrxe246SQ72pNJ8Ms8XtzfBHKHuc2G2DsqbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqyYtiDkrNXhjsW7HsV2iSnorbLg6Up4wE8MuyHkzjahB6i66An5u9JzJCv7BMg9QYR51PKNuqPVPzioBdimTVP",
  "key1": "tynGUPk47cKqAHZafW9jMxGJtE53f1Wv8uVDmPWs974n4PGeUp3qtaRA9feyqHHmyJ8r1ioTHp2mYfdqjHUTLJq",
  "key2": "5MA2EEAJ9974LMPAjspCLANLCFxiWPbQ2aiMXdhhyFgufMwPnSc1npw4eJifLb2RGXptFcnTVjNuYm8PSWwe6R9Z",
  "key3": "4dh8vrdVQTcQ5ku89ffRsg3ztJY8uyir3vo1h51y9tQdumrZxA8SXci2WFeh9N3U19NDieM3eWGTppk56tDGrogK",
  "key4": "2SLwG5fQcdoryQo289GiRpzn1PweKV1oe6gmDvCxt9P7z8CHJHwGnw26sBUWiQ6QKcePvcQ3Er8M1mTW6tMzaHL4",
  "key5": "2HYZefPZ4bRUosPoZzakJHEJUdsJ81PMNKsJrqifoTXTkkJbP1n22zaRc3gXAdaiScuL4TNZkk6NrZzRTzjY4LM7",
  "key6": "5zMLbKxDoRwneJ4AcEQPkkJMnVT2MuYvdnomhkws5tBiDwggd6v3GD2UzNYvMmoHKas7GYiDZ1naQGZAG8i3ZVJH",
  "key7": "2E3xHx3WQxnQYJqFgUUkaoaexeA7sPjvEMvKC4nAY7VDLfTPGS9J1a52dY9gAe8Tto8JRiXJzuxontxdvXr2v7sQ",
  "key8": "4WSzAaMHc3ay5AQzfFVhzAughtvkUJpEETuWWZYU6TBvfpAwxiJhbaN6bhuyL8UcGS8yRJ6LNZEPDSTctbdcqogu",
  "key9": "2cqvWB7W1MLW8VagjbVQjDYgVnFyw6JD7g3MHCG9zcdULgWooW76Gb14oBcmW7a9z61if2hfebHcBV4bFzXz5Vzv",
  "key10": "21UVS9iDYtEbRuXQwL5cw1hEtNEejVvnNai4C2mC6YsLmyuuVfhSzEmCH5tFuxu7raUKL7Trx7NC2qADirW75c59",
  "key11": "3FEEasWgjEb5gxEZUSNYq6xeHokc5eJuHCb29BtwNDuRFfTSMhXybU6YaAKu2aPxfD521aEs2RvRgBhjQ7q8rRv9",
  "key12": "3EyeDBNjHBD6WdeGah5XNPwewgg6xTVuwSQyszSVsktkMbXDMti4Rv8JXrTyCx4L5FioJmKZKFM2Q6knPszjQZu9",
  "key13": "5pFuJzvxguTEsageGSjAZRbrCa2uM9M1Ykc5ts68FN3AVdZieHJdQpZ9uvxxxWbAPisdWFgWgQc8uzWoBx1ne6de",
  "key14": "5m72Tvjxkt5Kf7wdGTjHjcDt19es3pt4pq5FBWVBT6JPcGo3iJhEKP92pNncZM5tfhS9VmnVKzJAFDW1nac4SnMV",
  "key15": "5LxAQKyi4zRrhinLAd9YrgX8h7LvA4HBC2bHgED4r8WxRdeFZVgn1ovTFqBQKEAYpuyxMV1NMz9qhhgj4w8f2VJB",
  "key16": "2qQrnKQsLYSoE2zxHHsJ6f4Ee2p8QXbjTsRKhJywpno7dhvWEhMQ8T6UwtE7anGQvwVkxQeXRNYh12CDH5YkYLou",
  "key17": "5oyDNAaDRheJNzJ7jPn3YWcGdDozy6Xzy41kHM1ad9xT5oUQkNHEnihb2HC4DXwg394dxyAq843pgrTSdCmKKsYq",
  "key18": "4jsiC1zofvs4nRNLkDaxVPSpeXTcetd9S2zxryQoJbRbCDZtsNwdWGRvPGTNC5ni9ASstt38ovGR64C8961CdMR3",
  "key19": "4NVhE7L9JHTq5LGuCWnis7Efm8bjXD4bhXyuzVLxzafhgPD3etDCRx8qSicmZvaqX8H2fzsec9rXRJjJsyYTsuss",
  "key20": "5TUFhxB1LXKENiKQuDKciY8SaR697pH8wrsLuxMW7v5jUeRZFGNAYqtEWT1SXgC1B64a826XxWxTs3sUpn5fAz1L",
  "key21": "3Q2jHm4EgvmYHXmGm3H7Ri32QW7QPivSA7AU2psUJfA9WEAS8UVuM2GY5PXZMZzpMzALeAHqibfnkrKEBWkfZeY5",
  "key22": "2enSwrhFFmzRnJVqzxe9pjj6Sur3iDm7yjxgAKdj8DyxzcrsVakAP77hCsowhEkXVkKVLg88BoahTzet8aZKNZRf",
  "key23": "37WbNSk52YPdViQ8dE5sRKyT7igTeRMC1Kn26Lqaq1xVEN8w45VpDJAas9btQV1wDvjt4Ca4DmMYYgv5SJHvEyuQ",
  "key24": "3EGvaiAXoQFdhA5iLzGjjXu2z6V8UtLNYWR6t4kDD1CF23EmL3db3UMeWNdGy5edgV5uagVzjYoak8HyJv8Za9wU",
  "key25": "j1aULTxw9Tw5Mi5Edu39by4o6zVsRrXej6fpLXeudvcWmtJ4VSCYJv6bwLQQCCQFdwmKTkmv2UKnGsynkUEMyw3",
  "key26": "4EY4JMp5AwYG5t2HyEinG47F8tgxoLPBNdgpZvbqR8LGQr3voEuHFkYma7A1J9xPdogwhWkptyUHguoUkDwkVVFf",
  "key27": "4jnmbb8Gm2Z6k9ABmGZ25yDfUFmJANPEC9tvKZGiR85a5YFFp9H6GvN2HzdQXH7JfuzoxiFqCGomHKGm4Dqvkuh8",
  "key28": "A3vmxqk3vWqeSy7z9YrtcsXJcU4KPaZftNDzFwRNH9BnmvGZqQQgSapHaV5DdfSytqrUfaDAaE7g1QvZinCq6Jc",
  "key29": "3RFeaEUqJ6uWx53Puh1kXgE77DVHAJcGkpJoBfMfKirsNF4dnrzwPghGoGJbVhm6UiCDoDHZaeWFbQ7TQ9bv49d1",
  "key30": "3jnczMZGsu8WTuf7Ev2tZs9H4MGLVW45ckEvxBwVW935C4KaJ6LRqY5WCfeeWK1eB43QdAwK2RTpSZyCeTaR9S4E",
  "key31": "2bF8CCjx9cq1Fo4qgfH65DqFxBtmuLK72qTLpqRPibcg1P9bXit3VHzKCXaGh2u8FjzFRvUDgHFY3i24sgQNBeU5",
  "key32": "94TYbD2LtzyzYwGagE8kWnsM9FNKnPjx7kTJnGzFTHgX2L3ADjjGo1cxRrmobBKgfDHdGiMso68sYv6oBaLSJ64",
  "key33": "2ByWQ9dCoezpNXMHk6H1ry8wn9CecAzf2yh6kAW8bV1ypkyryLzNnvkzzxiWecM6XP46mQzWofTgKvNnxfXteCc7",
  "key34": "4GsuaPRcXEGL88K4SdjVQiPMNpXzBAhUAtzYQatnnDstWJ1bNsz49TXFaY35vwavb8HpCfNghbXEUG5txcZfDkQq",
  "key35": "4VX3LXTsZu1aiYzfyvAUSjnkDumt2Atw2FswuHRbVYyR746yHTBaDBfScNuZTh8oQ7TSAcD7a6evNoakz5yxiEvX",
  "key36": "4SPZfsALfHhpEkZX1ciMwCkUq8rCc1BWYSMPgtRpszQTGr53KUouPW11rFDFwKpq6eqXxaNdYcZ734xBwPmKedun",
  "key37": "4TVUoGGqVQdz1QEbo4eFiJNsGv6dg2XbGRq4ggqk9Mirk4bsqjRU5mKBsWqpdXW6Hsqar8yZPBjdAM6HDj7xTBt1",
  "key38": "9434BzXHs1xS2P4z67PqPDZvXVqmjPPUvdHRNw9gdMCTwpiUTHGXGmpujoqa8HqAyAoaGS7JkLtWaQDbwM9muXX",
  "key39": "5YuzbCVGiAHyh34CRvxNBnrtxRvvvSXujyuDMVGYVKQNYoVEZMT4i9vvUV8qg5GqhtczbtcVVPgmojpmKF7mVeJe",
  "key40": "3szdxu9YCtbLvgz119e8Me1a5zXdA5rVR9QfwsoQMJSpwjE4uHujK9SXBvARqkeuiGqo9qzq6KHuwKZakWtP9iYt",
  "key41": "4cESAXvUH8Fakwyiq6wx6kW8FzhdUE2Qf7Gzbss4KqmPrPTpj6SqBu9qmbRu7XEJs26y3kfFQmxr3REt8UJZbJ94",
  "key42": "2JfFJRVFepmnD1uPqpk5YRHvQ6spDJ27ijh23UYoFbpfXWs2rq8wQ2EEFNbH9X19CnGNBJbPnWihc5DgsGubfHhU",
  "key43": "K7AP86UVcR9CKRVkXvpq6gnY66QBbZdK4ahSzaKBLgMKuCDU9o392pA2ddSdvkQ2AYihNLcRpPGiRiUmSbZwZ4Y"
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
