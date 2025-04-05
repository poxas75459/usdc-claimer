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
    "2Nmg9iuaBsZtrH6Wp2UY5Xve7RN3kzswnHGWopdKCbvrEDfuvKhMQpHqVvnN3oMi7SZYmH3aFSfpZCka7BLUfbLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tjo8fKmCMQ5szznAfRsRb9oMAQY8K7tLdoiCswfwD4S2BGmCHs3REA1rkEL254Bhu1vDa3ho23QCzFXaYuPqZQT",
  "key1": "2wWLQwPQxCLfFrYfvRuKAgyVZgwEhEANj15bZYvJ9NzJ6sbxqKYz9x9Tzr8JoPdBFha7B1itErxST7Pw1TumAEWj",
  "key2": "8XBxQuH2Rz4NGRZPEJDGAZEyyVPiptuq73Jj3f4FCZwv4Ks5yxdvfouBgQnm9gwuBwy5bs1fsighWaQg77Myyee",
  "key3": "5gNkuCgXMaAyyTNUbkyHcnmvDBC2TZdacjXESWnchbeQrPxTma9zxZvN6syTbFNdgaN5LwEAJE7iT2maPyD54qy4",
  "key4": "3AuUbnYaFJErD3iakeNJxTKphPWcToFcmPZ1kKJ1daZMrwHvXSbPu6ixCYdYJpfPpMnPqiY3wSfESqGUCnYvX4wE",
  "key5": "22PAHffmuucZoUvefQjSCT4vZv56LFxwNvvjXAM4mGdNVbG8DCGc2fpoRUgidKufDb5GuFQfhs91RuNiPNX5sf8h",
  "key6": "5BzpA4pi9T7NWiPBoMKLjP2t6XApKBJC5w7yECLmphaj6s3ibV91MZguw5PmUXiM8DVbepvjtUDLGHhRfyHaqSpS",
  "key7": "WKfxYkb6MMMA6UNajHDcx9Y1KFHLFT6aFt7UdRB8rdwUvoVitR6ibFsQNvuCCappr4nW299pfVKaU2TC3sqMzUV",
  "key8": "Ld3WEKKsV23zMuJXJ86BLvPgYodCZZohAMufQdprucgUgtKotSKhwGuPaL5GR2zeWSq5UcQ1jXqRD6aPazAJ2nS",
  "key9": "FeA9D3oJhkWYUdXdB8pwRNWUoLQo3dNvj8MK51EJ1VQ6UPnm3Fib2G88R5GiQWTTB3TSb9eqoFSKYY3M57P9ehV",
  "key10": "5Q82a5LauRwURqYCLbXnrEzFb3uKcx9YBbDNW7zvdwchVEQxLnurYKJZ2dR4jn7F9i3zdvhBV3B7C4wokeZESnvj",
  "key11": "2ngYX3XdPCv8xcXxwBw5mYD8myyeJwTyW3yGSZxFwqvCZwwvM95rTjHpFZJBqkofKr94UiwLuaoravxGF2Pg3Swh",
  "key12": "5JwdHK2uH54zBCqmGp6ndavXGwtoyhdHTJ4UN1e4GEb8nf6CJzvDh2DZzG5toRZvFRf3KAhpGLGMg7Sb4yLbDKhv",
  "key13": "2xjfLDeMKzaScgufPDgrhKmrqZ3fn1zAfgujH5FeaLe8jcspT42g9ATc2r4zTHHoQeDZyzUgQhR2swNRAKovM2Ki",
  "key14": "4Cu72UzKxUURkJQD5hB6FtmeEFrJ39WyP6P93qoMopPDJcYCuFRjy1JtAcSxbjhmaGJccRwmSLDnpRwDdYduumQ7",
  "key15": "4xniLHE1DnEthgpRq4bERqKH77QK4cEmyzG998S69ytaPcsJYndZg9Lc8HuMsT4Ua4urkooQwifR55g6gZftuuuD",
  "key16": "yQrTy6PHhg5SNvWaRseeqH9AArGkscG5sfvR8yL2KAqGBD3fVv6hxtjaNJEr9aGDEfmMhXUX1SHTeqAWBk2iubm",
  "key17": "4fnFh2pJogeuJqF3HCZ53DYAnpK1pCeqURjaNsCno79irC3EhYywP8AtAGFXM9UPUi693MN4BGF7L5KZnXpiX1tu",
  "key18": "G9deYCfBMqGjzpNBwejJGbNEBwURoWYTRbZrVfWnTRUdqhnbTmZbf4CLxkH8Lt6gqyqXu1kRBLyXPq5L5yhnqJ6",
  "key19": "3scw7oarJHQ41h7JL2p9u9fUxEqKo1EQXJyz5hCneRzTgCPCLLnFupVZPwFofudbCwQ9pAEJPG4hCM8x5whwmti8",
  "key20": "VefXXbgQ9ZKkC2AWaVpaNE8wmZSjLvU8T9ixKhAyCVsJ9L9xwkKL2RNTL24sPXLzrHLnhsiYVhjZjeSFcu5mWhP",
  "key21": "3bVZ3emUuDTtYJqkXEaGkaJkNCK3TnQX8xpQvxiXC6qo74TcTP7ehzMfByP4KsG4XEsigt6C1aWDHxVmjQ8keCJu",
  "key22": "5zNUWAFBaEzMvh7y8bsTygGzNzR1erbHL7vXFHtqUFcfvg1szszAm1SnATiZjgFusjWcRf8t9gvAVucxcNWVUEvg",
  "key23": "2JdxGgsNkyhkuArXyfMGC3G4RtTF1Mn4BumXs1ftk7G3FEeLz7cLv52rnGarfGQPCwZfZcXwm25Xf52kmk9doNdH",
  "key24": "qrVjZRdeVKppvXEkycM243c9ypK4P52gyEVvpDgJAKGYUHzLdAwzYAFhLjS5ZAQ3hhSw2Qk65ykv5RMaP37CUp7",
  "key25": "gYTMEVXBvKJ4t7g3geWF4ALrVnroLHRcwAoqg9Bktsr41bLaaeyX5AMYn6Ug9hZwi6VsWyDcDQx7VMQeorq7N5L",
  "key26": "41YSH82UdJ6LRXAxLRzXTwpTc8934jrQxzCyNs5bU1EGNTrQ8A7VFe7MSfr89Tu2KXKifbJcGUhC1PvnZT7rE4ur",
  "key27": "5wiUuebnPSd1bo2ahwTkY1SYyTBNGtnfJ4x4EaGYqrXWJ33rux19obUfYMCThfu1Wi9bw7YGZGTtHibg7hPkdksd",
  "key28": "4sknrC9rKU4nLqSVyaZx1fXuqmb9gqkVSaTbytWVrz7gy9XsEURYbR8DxyWkAEyv4C2Q4inuPsWtkvRth15zCpPH",
  "key29": "3P2ueRtWFwhsrSxspCvhhRC3uXQECZ5cECbSCGi4YwTxZd2XRP9SyHRnNaUYqB25QFoajb1AcHyjiuTSGRXai1WB",
  "key30": "26hbNxBGVbTdvkAVjgBHVtU6ZygB61MKfQNzjZcERPQdTAhKTYxnoxuoSiko4XodjqW7CTz9mUfJZGEQoDuCLrNV",
  "key31": "2qsXuBwuBNSRQiTWbf4SzzqErjHWaAQ2StTCHcwsfR4SgdrLfEoKaZ2AoGSj1nr7UGFctJJV3Q46U9x3PWdbigGk",
  "key32": "3EgunrqxQqrNMszwvSgMLjnvUBkedLZAgsUCysY8219QoL6ARNF6XW98vwoh2MfuK4QQKvzrrmVwchko2LHsBcL9",
  "key33": "5tgeEmckjQCeHgNuo3A5ckhCAgzKrWH6ZDcQBpsTtRmD336XpjjB92ipLDDL6V567sZrKSh8woKR4s3cLkhaSS6B",
  "key34": "DchfooFrrk61ybFF5Yw1TTjR97BQ3onvLKhaKw9JLKvV4QQa6Qsn2qb6vMi3pLageFUxDp5vNWHiyqmynFhVKRz"
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
