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
    "5EZVbWEoG1xDVjNn979UWCMRB1TJspzaTqxU8DEf9C6PuA7zcJnBoE1drDDRrzJt5Svy9mbQZ5LyX8wfS2nkHSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MmwGtjqZX31K7rfNvGGb9eoaLNVFmdbiXRsxFVnaV5W3tZvekyqHr1414VrCcU6KpcjXDsC3YNTgAQ5LAzxmRH5",
  "key1": "4Ev6UdPRjDSnJNeRNRtTn2z6HjU8mzTqqjaBWJUL8YkPKNd2bkcgGVCD1uxHD5snwnSPsYmXYH1zTSxktkwPr4YA",
  "key2": "2HKf2ZKiTvkVNiXa5o4TfRcaX8mCM1GaE89oxEUnuiksiR7vUsstvJ4hogkQrpyypK86JHFxiC3sjEKHH4CFWSaC",
  "key3": "5m4VyNYTNRg2X5G1o5FYnnPLNeakkNkaVcDTuaZQhVr698nYDXVfrYkrzxVNs82r9cDPZWcgS2Z3fkeVwE8cjmB3",
  "key4": "MEtEohEC8XbeCnTpBBSQ75LvQaTHmjWkrf9PCFUWBT2W583fYi5LvR8awDATFkFMpQzapGdx1cdW4ozbNZ7AhdV",
  "key5": "2pXfJ6xZrvjQ34xmiS1vnkRm8KAY6SCGEXSXuaEfFYZewuSypr6yyGNvKuqrGdMWGa1ofH1H5CzsvYvWGYC7n4ng",
  "key6": "4onPDizx9FdfmpNbgywihNzvi7n6SNZu6UC82U9q2u5H9AM9t3CpJ78fZJZaTBkpwh1T9ZbL5wUQdydiCg4iyKJX",
  "key7": "25SeLH2khjeSZoBNQUpCp1zR1hMkEPsjXvyvVzAEMHp1d1AqpBB4rTRNnMhyz62QYgiVguuKAP82a2BKpuuPNGpy",
  "key8": "4sQ4oAaGvUqfADdMfPK6YmaRpL5EeopXHQpHsqPBmv6SL3pvp6QhzPZHVTP3oJxwdHuUf5ZfKP1AQNVrucFCs1ZY",
  "key9": "5L4KSja1kMCfytGQD9CkTPTjS3NDTvZhuMwGpHpUYDDM5yJuXUbv4CQUkRHfYL1WRoVi2XMTV1Fh7ieV6daswfQJ",
  "key10": "2EPgbFZ3BdRao4Vo1D7ATK2UP22ofdQYCPDq8weCanHUdvA8bF5V5r3V7UEZYZcW7zT4DnJpkQhUM7sTx2aiD8Da",
  "key11": "4Fa81jfKFL2t7uAwmnCE923853MXNjndCwrg4DH3VtuYd57TvMX5wQp41nAxZ7xweYncWSBYw9yGm1ZcTtu82cdn",
  "key12": "3Dnon4KE53sdVGMoefYPVEQsYwK9zuE6hZywMNZybzobwo3EhBL3U8tDx37sigYE7KVkgZjuHTQoKDxSNiaeRd96",
  "key13": "3zn2C3SohYdVmut5irjsnM9gk4FJDTviHxT3mrsb3aeS1DXiB9i949bqEEkQkni7AXzUyeVHjZtEhsfbcdRFiuxJ",
  "key14": "2AV79gZyRvN5y8ux9XVNVMNqAsU4x1omZka3wNiCf5AxveGZcGzy9d1pLyfEQLe2sMEnaL79LJR3mqTmVdrTCK6i",
  "key15": "3dyjtaMMLCDYUvxTDzWXQiPDR9ycaqjp13KPMqekfUvsLR8NV5aDNUAeWXss3kWuQc4XdnrpupFVt2VWHbLjxTei",
  "key16": "3h38nAAJrZhTJyu6L8tLv3VJszHHZpbbAQpdgkRUT5fuVozE9WUschuCCCzWqVwPzPcykzyQSQAeVJ9aAfo7BYPu",
  "key17": "5sMSWKs6rwux5BPS25EPpdMuQrBdogPym357WyReZRzXmmH4VwTtZWvSPeQw4Xo3jMfEhVDeUJTtK44t1KchaEAL",
  "key18": "5mTWW16Ku6GAHtso3GZJTmrFTJektYiLANVmPkCowEVuVyNWRjPSnY4inh6Yj72DAyeP8A73D2UvxaowA5Sx8r2M",
  "key19": "2oW4L4MsysuwDePyAijZkiuKco62CaZzBKPax6cQ7WGswKfnXmkQj3qYEfA9LebQhHyQXiF9xXu3sVgmysN7Njcz",
  "key20": "5hykXnhuMo5JxSj2Ay6zb9j3Wsvmv9MHrck4PZFLKv5vnxJnv8xDyvavat7HWdFmMnioMgeUZjp9DExbTMKYW68b",
  "key21": "5VHDjX8V81HT6CgE7bARULbPcNHbMUWnnxL9vXtmFUARE2NrFnCiwGBJS1kEk45JJPoFioGTgGbDygXDWhtNX4mR",
  "key22": "bX7MpMJZBysEoLgQt6gb9BkopxA47GZefG8z3bG4cSfB2pnFpkCruE7e7WJTHXsXZb3XXL2vhY8SaQsKDw3f4sq",
  "key23": "4TvKdY4JXN4vt9uvhtrs6fvi8cPXv3JwbeH2JRu8xy3Q7HsVmZcT1t3XnQtECDwgVKMifX91S6pEWodNG2z2sDMF",
  "key24": "2etg6nf3374Hv78rsbi9zJFZKZk8AWJiwk8Tej9djHSqAkrakysUtQFQ3TbBasWbor1MxdcyiZY6SecxnhiZCcKf",
  "key25": "YLFf1JeejLdfoN8TXnnBd6zqM9a2hMtxvtbQHGg55HcFk4R4QrQDy2ELfFhydz281gscJCqWz7hZrXQV4jUJ1En",
  "key26": "487iYsyynVvNcarLZJqmjqfSR83Mpq7JewYhZYMGzRN6HZ9i1ps6vyQGBy9pvotV8rtTrvuoMhSwznhc3S8TcReG",
  "key27": "hFLuLegvuE7ekkYvnwTXpiPypkReyPFTYH2rsEVn2uvFWiEhBzQwcyAH3wg1f6c4BQW6Hx7CjCPNeYGLMKFa5Rh",
  "key28": "2tZjZoYpDp89MExUUdoxbTgZfGTW1msZQzHgmgxim4KDvicPPtmoLXTBWRck3S8oiZJWwtQ8FW1huzsXgEv6kXQt",
  "key29": "5fsVkJdMc5YrSojj9dNhp6dwnknQWVtybyvaPmsie3mPQjKPgeV7JSRjXi6QnoA3cri9GrXUKpwCwK7q4nS4BJfP",
  "key30": "2gKCHX6kM6WzNcxc8HpcdHbWVormmDYZXPXdV9Fh2hKai518TKk4nZwKGQfhKjYf8LMME1wXkJ42payVPaD4f1Au",
  "key31": "RffV2VBnjH6AmetAY9LzMv6rHqu5wR3nNHgvsWdy8P8d5wqSi32SoSwr9LMGcQq7DMfwEKYsgYapbbqghg1a2DH",
  "key32": "5ZkS1qN6LaKKZJXWmzKW1G1EqyvgYJefj4nrPXBAHMZJL47NXxeMwrvYLBHNUeiKiNf2r6rEmtmn8PCeShu8VMaH",
  "key33": "4BESbZCFACF6EUXLMhTuq8teyjbyw6m3tgnQxqV74nohD2wpzug3y44kPzJPbYUmpTapL3nK95zJDqsp2aJHCZSU"
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
