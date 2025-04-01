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
    "5gbej95Lf9qhdaghVr8PoHRQHb7xXg4oJuQraQS6zunj98jyXxz6Lsfwm5Z5vLKguKjWXEMDuy4FWKRodYKkNBGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qwt5Zza9vQxvfzUA1S4bKmqMwn4WyDt2VYnkE95CyFHGkXfPEJP6gyfJuc91kG2jjGv6q9rxtmBKBSVnaqheN9",
  "key1": "2jTr48hnuByELU492ugXJG2L2xZHqjx9Cz5pSjSQGMfaJzB1VMHMgrUWYtnp75Pq82w3QGDvD5bsh7LWDtUogEFP",
  "key2": "2Sa7xdMPJGo9WzRhxkjynGYnhcCzCKN4nKWsNR7tLeAYXk6B6ih1PYdNa3Pou6iafhRFRZHK1c9XRFG6fBLZrCKd",
  "key3": "57LtmHwscAiiNS3uRwYsyFMs5X1bm7yw3b6Y29mk6YkzYkVCBhfiHWEC69Q1Yu6koF51sRSxjxwYZPu1Tw3M5SH8",
  "key4": "2Zthv2jzfV2f73YkD5drezFZJL9VEUAS7eBjioXosMj8zfZ9HWe4K6b89MiJp183KyJtPah4t7HX3oXoBjZMNSyb",
  "key5": "3tySxHHPDHVNof846udRCb9QHUKa9Ep9Kt7ND14VUs1vKmoQ87XAsYyvuqwuUreMFDgEsUh7W3GiFzLQCGqaHwgg",
  "key6": "3JteuW5TckKKyk3fbTfVPS73XGc8s8oYcum3sMZYPunj8pws3N2ZSVTczo9GrLw3mmna6AKRMiprvttQjK63MBvu",
  "key7": "VMu1Limd2n5u7XNTM7aYU6nKQySFJU8ZcZq8LaAPpN6Atiwe3FigFQtu7Z1EL9tanQySuuopofgMKtuSsWVB9Lz",
  "key8": "4fgo3yc8ksSaQhwMyZLNicCbUfVkSXageBF34zY6RByNehDNod3nnRPh1Pjui4pBr72neKnp8XpLZqvJKh2uUVD8",
  "key9": "3tVBQDGjv6JLDaXFf5fDxbcan5yMJYUMxWt7u9oHvhadVayc2JwdcmboBaMyiNpGSqMQnLi681gy1NB3GEQm1BUv",
  "key10": "5KugBhufcJYedsMhQuqtipK2TUX7fzFerrFTMpFKbAy8zvM7nY9vDJz3mBJJNemntEWhdF9YSB8mrM11dm2F58kN",
  "key11": "5eybw5W8dFxEQjD2VQafK7CzyALaNpDv12aG1QosPZdhoyPyjkwWukUGE5dpH1yMHX2CSztDS3YqThR5Tzan19Rd",
  "key12": "2oxLgZjxHmF849Q1HvrZBVZ5sHpvSr9n2M7WvTdCEzrQ6DDDNwzjAwhQvMETV6ckvJb6FrwP2NpJZ8gQBsumEVe3",
  "key13": "2PdhHd3gQdqsjP8twhVoa153ChS2FJsM8w9bCeWJsB49poPK8z6dfNtdikqACgDRseKNoL7ZjrgKU6GdBxMcGcWj",
  "key14": "5DTif3eDxcyhSjib9gD7mbNvbLhZfPaWT7GjRv49oGa8TVhNh5xUGgp9PD6cpxye2vQLjLuxthBx4TcShaJ4GHBa",
  "key15": "2JUdk5WZuCGZ376EQ6pk2MpgMZWBRxgn6kXmS89CUqkMXTWj7KE4G8dsxzWBCAdzC2wWzjj4FvgXpVBmdKXEPj4T",
  "key16": "31GawnSV2LMstN59EgQLb5atV8mFjkGuxXKBiEig98KYSwAFjwHi7E171aYue9HfZZnu4KaCxRA1b3zHGXuahFP3",
  "key17": "3mjq1YWDQDtiAMM7Uv5B1X8sY3oVzS9rsC2uc3Z3Qc2TqJLbQ7eeK8qxgK24s6wBaaeTRXhM8bHZVbUpMdYJUqRS",
  "key18": "5GMwSHMW8BJMDNgvn39u2o74kdSSBphw83bhuXqmKNhX1Kmzb7vp5fEKmZnv4EsC7KfpinCJoQmiBeTG9zz41scd",
  "key19": "2ddDjsWd72uEtXr45hVGd5hFQG48GgZ5YnSoErJCw9NuU7r1aL13eZ9erNXpuMi7h3K5HrFoMTvPHh8fWRY9Ydeh",
  "key20": "WWY4HeQWBUHez8C3c2uKQLVCiNM1EBtqoivAsoHNq46kPTYJAgXvbHo9BaqwM1JrWRYq4ifZZFsx7ys9UPFDsev",
  "key21": "5ZVo1FHq7QpE4s5CEAr9ts7fWDSjrxStojVmuQj4UZBTqanCmvAp7UBYLYnBXdMqymLNuDzjz6r6LpQmnc835W8",
  "key22": "4jwGDMuuFerFvXP7xNcHv14haKpCpK3Ye6h5oaV6vMKeDWQtpYQHzhVbRqZY1xKUmhZionnjBnHydGEcUbccxg7n",
  "key23": "5DEzCTV9pkTs5S8L3ZiDZyzXSTUct42fh8fmoDfUqbsm7mKT9fRA35BQuM6TaamYzB75FXApWKSo1x6w9ekndYe8",
  "key24": "4dQshHnc5hWCsQPs6RcrjbBAhLzmhNvMSrM48D7L2PKmmFFWgaSZXJHDU9envirubajxhf6qRRk5KNBNDYdhjwck",
  "key25": "4faVbaRk5zQwoBTLiQfa1DNL5wfTfq3BUWNLvXtM5rzyhJCVJf7wp5mYBs4aEhGD66oFPPUvS8s7P7mAo1EPv1RW",
  "key26": "585mmAKmTY6mC69KTAKg5XEF2WWARRzjVJm3pio6zP5dFwTzANzsDdRKUXZU1pnNhGKiBVeo291edrSkDSukYuwd",
  "key27": "5mnSYCfLo1mFeVsELahCdLXrCWbEv3H6RB4zbnDLQEf5DLx6dJXWQRkb3hRnh5iTNPK7AD5Jazwc9nVBLMPRmdn8",
  "key28": "1xtueP34kSUzVFQFxUFa4SLSB5HNxEvpSiTV52NkUzmpkWSxYrBAeMGfd3tpsTrbAQ9rU5oCTu2PTSBVGVkc7xV",
  "key29": "D3tpgT5Rd4Aggq67BPdfBwkr3k5zF7ntowHqH3UKoP9pAaKsWVPW8aLoN4TakDDYesyoYUkUjCLyi8fSx8sysw1",
  "key30": "2Ek6NGdzf8Qtp3D31HE2ZpTLoXghbhvkDHNtcALAv7TUMGGaZGHY4oPSZVNubfSshgoTshaFgc9Xp3VgKiGdWGok",
  "key31": "5Gct2jwhBX8HnT417VoKp5ptUB6RP88NYgzouNquPuh4tkDFPV38LDxuTaH9N4WeuXeNPHVGkvbsLgBcoVXUzcTC",
  "key32": "kYH7rAc7tfym5QEAmdv7K4qxJBxi6tM2mtWGYY9a1muLV4FiSk6wwtgqXgw42Wz6kkQY3gK1M252imhbSA8Dykr",
  "key33": "4nCRKUQcavmc3Bz75rh79yuxfXRShJmrmJC8FEwZNZJLfxnYve9bnoLrJNVUN937tyY8oiak5q9x6YCBX71NzjKN",
  "key34": "3sYFHUAxJgLPjGqkmvwwnNqunGAqAGNftYWb2zHvguHvmkypYNNLewZBYcvVzVeybAgN4puBnQ9cX21BNcTaTd1R",
  "key35": "4ZkfNydycimLk6XBzLMwT6B6z3gsnAdArjgkVYEAeHnwdLdeHwo3ZcBvQ5UzEfa2ext8yexwRvzxWiYmP1sFNbry",
  "key36": "24ajTsrXae9Umg3gzhzx8XeTYAtzDTUgdUn4EfabNTnDDKQdJizr3JaDsCZaE6okD5WdK8ANKNawggFs6TbMmEPk"
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
