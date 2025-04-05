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
    "5U8J61TzfLu7sd8nDxKPaJkn7BDj7wrpQmbQEJ4tWQShcLbwYwr5i6r911bxMCHLRuFcGure4nfMhK1uDnbccPB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUH7q2djunCXmJ292kFJGKtN7HEXWQiyw2iAGdm9u2o71EMmvBh1SEb8wWDpABML4YNkAEX4A7DM3xEzmfKSDHy",
  "key1": "3QErP9Dkoi5XMHJTSVzqg7hSkAxx6ziETp4A6T66Nz1c44R3GPGtT5uGhr5nmGyZTQwcy37iYjN24NA9g4Kzq5Zc",
  "key2": "FtBUgdhqhWJfJ22R7TRXEL8S2oe8mRXY5RxQbVjCPb2dccNgjy89PtVbqggB3qUD8KaQ8ghbFCcD9cYf5gX64rv",
  "key3": "5M3raWvfqgRB37Z3rAFbgQMTuxx4J5sdHncfudbyhFa1Dd5dXMnLctdng6eLzXE543ypoqA9jSU1gyjmoZ6ojZKd",
  "key4": "5kWb26YiLoZZCZTcdSWdmWjrPp5d5mFhTfYnn2TPSya9aK6TuT7rKaxDG6gmHsHbmCAWPCt4DGDedBN8oNnLY5v4",
  "key5": "2H4hwi66hFnRummkEyDpKxmucUi42oSJF2RmxvWq2XoKYivAnTEASYsKrt3NKPUDR66quuH3VpUX7FRgiR9BkLxx",
  "key6": "5iQQkhXCPjTmMv3fnTAsmb3QQwByCbhD8Dw3uwoL9yaQL6mgoP7uX8K19E99ZfkVtXAm1cjwHCGUJ1VvLZepkErE",
  "key7": "4fdf1aGi82YdV9suJV7BdgMmaePdvN7Zbj1JuhjqVYCE2PqbQ2wKqEGqH7dUCKYows9szFANMmTeMcsrSwdsKbcE",
  "key8": "2NMmH4tRRArJxTxJbg7hPSqcFUt4xZkJJTEDPtwcLpZAoCUc1k4p7RSxHPbLVyPcEtfHink4x58KDR1nHiTA48yp",
  "key9": "p3vcKEriqcNh9LtaqWex8HxghugT5AezF2W9n19MdLM7SnwsdWUbpp15LNL7YrhbFf954H5WyuUR5Kis3Qp7S1L",
  "key10": "5FqH4BG9rKjD8pKyNz6s3Y6S4C26YMB3WLtzUNg9z5eno8DJ6BWDyUPBkANbvzP3LGStLK2PeSg4ZcEYDuT1BJzr",
  "key11": "3pf6tQnRGqDg7yvjsXRBL9YQKVb7Psr4ZBwjgZRBFXdMN57sH8wQTQrAfBhPE9yt4uHM2L2rDPbuPvJv1wRcL1w2",
  "key12": "2GChogVzUCs6u3roPNhtxvdWv8BtbTX1bcc3WAyHz7C5SyS6Dc3r8cQJMsFU5deewtZ6N6y12VVmAkHFw2diH1HN",
  "key13": "519nkrQSeuTAPa6RFaBCXSZosBZ8T2LsricuE9JGN5c3i1MdQwiPvCD1P5CF7iGHTTJMnRY3uKLa92AMdLhC8iMY",
  "key14": "2SDFcaKjPZ3NtgRsQKLzfDXKBukurnFaoSz76Fz6Sevr46QRCo7NAZ2mzynpSLm2GQjsFWmG2W7kbFgGvejqEeaZ",
  "key15": "48PFpDHU9EfqDMGMG6AhjAfyAV9yb5of8Ki4QHXLA2UXCEpSRtNYC9e4DcYZ58N8UfrNMbggxSwJjFFeqohdhxCv",
  "key16": "38GJc1HZDe7Aw8xdFwFEkMXUH2aJq6L9qZKqLcJCKe4skfP3voW5Jrad6vKWyC7T4KF6gLaqYgQxwYLxqXuPawXc",
  "key17": "25ck81rhn6Wve3heZu8rPz9rYNtwfA5FiiRCnSTQTn9BmtdFVV98vECJfY3g4GRSw9m1FX1wVmvxgCxSJG2LTH4S",
  "key18": "25FeHCeUFPdUnwBtdzH45cgtJEhTaKEtsBsnhHCbsqt5CrwnP4AfkfoTpAnEam7Y3XUPXYFGeE2PPxrjN6oPmCcK",
  "key19": "2RVbhxmFjkscdSNRiCTZTLrJG2PfXHLqUbgL6bSVEUwRtFDkUvBXSeFt9AUtdpihSV3DEh8uRZCd3W3G8b3yUHqQ",
  "key20": "2Tziws6FZcGzQRtMmCpcxRiyokxhoihJLDcU2RQjssfmAGtBnHApuARd3eviiHHJ1K2KvffkqhVFuPbGDanz3gCb",
  "key21": "4vBpcGjrGhcLDH9yL69FJ9oDjp8szLP8bgH6PshCvP2U435EktMdwqM86wUVZ4V8ytwr5ghQm6yTCSs3QSF1Pi74",
  "key22": "44egJtBobtJoDkLF2AoPNxBzq7eJTzctR7ZXME3weERkF3VmnH3PCtJtxLNhwX9Xa7L9Y5y8KXwwkZzSG3SGpN1x",
  "key23": "CsqQELRrLnTeURwTUHbxbjKoau5qQudFogVAg65Dhjr9RZfNzZmKq23QYUt4DMDALcECZBaeaJBfqur1Zsw5vG2",
  "key24": "4ic1Kw76Z17Ri5vyUd1Ns8499xfQ5AbHiuvv3vvPK9ZopvmZYWyYG9K2B2zxT4rt1mQKgmL3EmFMGHVUGwChFc7z",
  "key25": "3M3h5C3vi64qmgdQMk95DNLV67WcKah2iywxr7UbV5MeM3Lpeg3k5ptYQeMT6HQRjaCKP5Foh9jurgiMGVmBbgLM",
  "key26": "4maNKr9NLUy2JL75MRgzgBi3ZaJbDv3WkTiBdHeZmg1Ty1md5btUSbh75WD6xMHLT7Cak2FNTCHhDDwYxc3KoSFL",
  "key27": "5ZQUyvyaVcWf9Hc9zsfP8csuwDBasA4mpeMyD8t1wAS7xXdReatq4DCfbZ7bxxQnQ9VBN3XkLp2Nvwue4V5kKP3b",
  "key28": "2uDeJP3ebarADm5omTBTnpJ5zJ5N3RsPFEJsZrvs5U22VyLNQvs4kz9xSfKFhbFtYFutaEjzTvPZwkp21yB1oFnR",
  "key29": "4JySpVxXqkyRxyYNrXJbdJmDohmLY9mMk3hWZo6GagrRzjF6hzfkHfbarmUtw58wMHN74B5NEExagvQSndVXGbmx",
  "key30": "46NcEh3Lff5AEQ7y6Dy14XMeMuU39Zk4DigCD2mt8Ehrd96KYFU2gwitTjvzGtMx1E2pMfZxCQsQ6qGbyvMN8UcC",
  "key31": "4Rf4epttxPRE3aL2uDLHma71kpxTSGTkTmsm5UJwYV8wMRUiHPDsho7919K2uE8kMuBYztq3fzRQbFyVwMKGzXs",
  "key32": "3JxBnvfhXqx4oNTX7euQjCaVuogAohETUmbuWH4iggVuvpkFcBRDcBJLZ3i4JdQXwU6xRy8GQ5VLnapXSn283YsE",
  "key33": "2yyjcfNectqS6xDMLANYWLomjg1CiwHdg4qnuFgLkAHA2sXFXDJZUsfWj5CVhQUPhenZAZ9X1LTfZscLeUrK9tsX",
  "key34": "5RK1FKpa6CAPXN2MGPdj98LYBuw9Uahi27kUW9L8ubssZytiLdrQkx8TZkAoQ2dU4ixuZbPnFdxHp3YFYBeZWL7q",
  "key35": "3GhjD23CgxUTqp55NRnaEjByxNJPGyyaNKgRGwF3oyF7VyGayCMndmbFKz2M2rag7T9M7cwJr2qMq4G6Edogfu9x",
  "key36": "2oq8SLmjiA2JuC3soYZScHuGA4pXust6s73SuE9zeC1i82k2QCx11qX12CGwv7aD2jbJHJCfnRriBkeph9oWw8F4",
  "key37": "31hXfXy7NqbWwyUV79b3Z4Bk254ohNnRu8R2aE1AfD9yjG7yEcWfExVC2hju3SUAfJgyBixhvY9AiYjpVA5Bg7BG",
  "key38": "S32n56ZaG6MEZSVEqCt5Hx6vnxsaPD6xauD3KKsj4dMbYPBmx6Fcsh7XUWyrE58tXBhTDfqLByX96iwgvyiPmw3",
  "key39": "ijtoYo7QKfvuhEoxvrXcJUzFBFSn9Ebk4TQV7estqXsfCYnXknmHkxmLUCR492qn5fAsQFFYMEzCKgYVx8X7GXn",
  "key40": "5MxrXhD7Y7dPsgvc7kCCK7xTcZdEDap6ShXNbnJ2uq4gdpjnh9H73vPQrEkxh5X2k7ps5EaiivoXLstfd6MLZH17",
  "key41": "5gm8ZyaR2gYWB28GVbGAdieydT285H1xcWxfc84oH4HDuVwbGUwQQwhCCWduw4AcKCz7dJERs8L4Uryo48GRLyK9",
  "key42": "XRAtucYzwUgZTsCzAMwFFyZmkf7CWNnxvdST9vJbbsp25aihS3f2RVhxNGHFCioxoda2w6asWqw1Tsr3TzsLcav",
  "key43": "4tD7E3orgpoLgzGYaK7NirY2ddYUMaS19GBhMbh5KgLBZTRmzwSSts7KUqZvrT8XhfxgU64ZoFdkov3C6xYFsH1Z",
  "key44": "dVP6erxTeVZNegMJHD6vXz3itZu96aRTKB7tC3sVv5bH3UL9nyaW8ZTcdvcU7aG47ADXh96UjKPzaEFQxHvLtZZ",
  "key45": "2nUhY2vqvd2pd3BWC7AdFUTVz3qqMb9JBMbAFirsPwRJANYydPjuDQmcNADvufgZStuBuHF1N9WCMf7Yq79Cj611",
  "key46": "4n9FmpWoZRu1nkjPXZf8Bm53qi33uHPTRFu7J7egcM7xhUGVwsiSUmpW3n2fdWL4N2npC1m2o3Qc6JmPscoViE6F",
  "key47": "2hsYCFXPH7W7QVXegGLEP5Gx1rvaCFFfFc7sXN8xP4ess1tN1BectRpQNNwhfeqvezAWfoyZvn4TBaDV7DAJHskt",
  "key48": "2kG6hw8sTfUwoS16rSsCfH8migRRGVEJKdSCcF4mhqjZiM7NkZYn5GhwVyScxCLgTqdKTfcsqUDwQAHujroBZxKJ"
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
